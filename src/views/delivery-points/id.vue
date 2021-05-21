<template lang="pug">
AppLayout(:breadcrumbs="breadcrumbs")
  .delivery-point(v-if="!!deliveryPoint")
    .left-side
      ScanProgress(:cityName="deliveryPoint.shortName" :scannedOrdersCount="rightOrders.length" :ordersCount="orders.data.length")
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
        OrderList(v-else :orders="notScannedOrders"  @scan="scan")
</template>

<script lang="ts">
import { defineComponent } from "vue";

import OrderList from "@/components/delivery-point/OrderList.vue";
import CurrentScan from "@/components/delivery-point/CurrentScan.vue";
import ScanProgress from "@/components/delivery-point/ScanProgress.vue";
import AppLayout from "@/components/layouts/App.vue";

import { DeliveryPoint } from "@/types/api/delivery-point";
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
        return this.$store.state.scanningOrder;
      },
      set(value: DeliveryPoint | null) {
        return this.$store.commit("SET_SCANNING_ORDER", value);
      },
    },
    deliveryPoint: {
      get() {
        return this.$store.state.selectedDeliveryPoint;
      },
      set(value: DeliveryPoint | null) {
        return this.$store.commit("SET_SELECTED_DELIVERY_POINT", value);
      },
    },
    orders() {
      return this.$store.state.orders;
    },
    orderListIsEmpty(): boolean {
      return this.$store.getters["orderListIsEmpty"];
    },
    scannedOrders() {
      return this.$store.getters["scannedOrders"];
    },
    notScannedOrders() {
      return this.$store.getters["notScannedOrders"];
    },
    allOrdersScanned() {
      return this.$store.getters["allOrdersScanned"];
    },
    rightOrders() {
      return this.$store.getters["rightOrders"];
    },
    breadcrumbs(): Bradcrumb[] {
      const breadcrumbs = [
        { href: "/delivery-points", text: "Маршрутные листы" },
      ];

      if (this.deliveryPoint)
        breadcrumbs.push({
          href: `/delivery-points/${this.deliveryPoint.id}`,
          text: `Отгрузка в ${this.deliveryPoint.shortName}`,
        });

      return breadcrumbs;
    },
    scanningResult(): boolean | null {
      return this.$store.state.scanningResult;
    },
  },
  async created() {
    let deliveryPoint: DeliveryPoint | null = this.$store.getters[
      "getDeliveryPointById"
    ](Number(this.$route.params.id));

    if (!deliveryPoint) await this.$store.dispatch("getDeliveryPoints");

    deliveryPoint = this.$store.getters["getDeliveryPointById"](
      Number(this.$route.params.id)
    );
    this.deliveryPoint = deliveryPoint;
  },
  methods: {
    scan(order: Order) {
      this.scanningOrder = order;
      this.$store.dispatch("scan");
    },
  },
  mounted() {
    if (this.orderListIsEmpty) this.$store.dispatch("getOrders");
  },
  unmounted() {
    this.$store.dispatch("clearState");
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
