<template lang="pug">
AppLayout(:breadcrumbs="breadcrumbs")
  .loader(v-if="deliveryPoint.loading") Загрузка
  .error(v-else-if="deliveryPoint.error") {{deliveryPoint.error}}
  .delivery-point(v-else-if="deliveryPoint.data")
    .left-side
      ScanProgress(:cityName="deliveryPoint.data.shortName" :scannedOrdersCount="rightOrders.length" :ordersCount="orders.data.length")
    .right-side
      CurrentScan.current-scan(:scannedOrdersCount="rightOrders.length" :ordersCount="orders.data.length" :scanningOrder="scanningOrder" :scanningResult="scanningResult")
      .orders
        .title Неотсканировано
        .loader(v-if="orders.loading") Загрузка
        .error(v-else-if="orders.error") {{orders.error}}
        .empty-list(v-else-if="orderListIsEmpty") Нет заказов
        .result(v-else-if="allOrdersScanned")
          .title Отлично, приступайте к отгрузке! 
          .message Проверенные заказы соответсвуют ПВЗ.
        OrderList(v-else :orders="notScannedOrders" v-model="scanningOrder"  @update:modelValue="scan")
</template>

<script lang="ts">
import { defineComponent } from "vue";

import OrderList from "@/components/delivery-point/OrderList.vue";
import CurrentScan from "@/components/delivery-point/CurrentScan.vue";
import ScanProgress from "@/components/delivery-point/ScanProgress.vue";
import AppLayout from "@/components/layouts/App.vue";

import { Bradcrumb } from "@/types/index";
import { Order } from "@/types/api/order";

export default defineComponent({
  name: "delivery-point-list",
  components: {
    ScanProgress,
    CurrentScan,
    OrderList,
    AppLayout,
  },
  computed: {
    scanningOrder: {
      get() {
        return this.$store.state.order.scanning.order;
      },
      set(value: Order | null) {
        return this.$store.commit("order/SET_SCANNING", { order: value });
      },
    },
    scanningResult(): boolean | null {
      return this.$store.state.order.scanning.result;
    },
    deliveryPoint() {
      return this.$store.state.deliveryPoint.deliveryPoint;
    },
    orders() {
      return this.$store.state.order.orders;
    },
    orderListIsEmpty(): boolean {
      return this.$store.getters["order/orderListIsEmpty"];
    },
    scannedOrders(): Order[] {
      return this.$store.getters["order/scannedOrders"];
    },
    notScannedOrders(): Order[] {
      return this.$store.getters["order/notScannedOrders"];
    },
    allOrdersScanned(): boolean {
      return this.$store.getters["order/allOrdersScanned"];
    },
    rightOrders(): Order[] {
      return this.$store.getters["order/rightOrders"];
    },
    breadcrumbs(): Bradcrumb[] {
      let deliveryPointText = "...";

      if (this.deliveryPoint.error) deliveryPointText = "неизвестно";
      if (this.deliveryPoint.data?.shortName)
        deliveryPointText = this.deliveryPoint.data?.shortName;

      return [
        { href: "/delivery-points", text: "Маршрутные листы" },
        {
          href: this.$route.fullPath,
          text: `Отгрузка в ${deliveryPointText}`,
        },
      ];
    },
  },
  methods: {
    scan() {
      this.$store.dispatch("order/scan");
    },
  },
  async mounted() {
    const deliveryPointId = Number(this.$route.params.id);
    await this.$store.dispatch(
      "deliveryPoint/getDeliveryPoint",
      deliveryPointId
    );
    this.$store.dispatch("order/getOrders");
  },
  unmounted() {
    this.$store.dispatch("order/clearState");
  },
});
</script>

<style scoped lang="stylus">
.delivery-point
  display flex
  justify-content space-between
  .left-side
    margin-right 30px
  .right-side
    flex: 1 0 auto;
    .current-scan
      margin-bottom 20px
    .orders
      background: #FFFFFF;
      padding: 32px 10px 32px 20px;
      >.title
        color: #303236
        font-weight: 600
        font-size: 22px
        margin-bottom 30px
      .loader, .error
        text-align center
      .result
        background #FFFFFF
        border 1px solid #D8D8D8
        border-radius 4px
        padding 25px
        .title, .message
          color #303236
          opacity 0.8
          font-weight 500
          font-size 14px
        .title
          font-weight bold
          margin-bottom 5px
</style>
