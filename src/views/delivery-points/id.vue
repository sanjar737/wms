<template lang="pug">
AppLayout(:breadcrumbs="breadcrumbs")
  .delivery-point(v-if="!!deliveryPoint")
    .left-side
      ScanProgress(:cityName="deliveryPoint.shortName" :scannedOrdersCount="2" :ordersCount="rightOrders.length")
    .right-side
      CurrentScan.current-scan(@click="scan" :scannedOrdersCount="scannedOrders.length" :ordersCount="orders.data.length" :scanningOrder="scanningOrder" :scanningResult="scanningResult")
      .orders
        .title Неотсканировано
        .loader(v-if="orders.loading") Загрузка
        .error(v-else-if="orders.error") {{orders.error}}
        OrderList(:orders="notScannedOrders" v-else)
</template>

<script lang="ts">
import { defineComponent } from "vue";

import OrderList from "@/components/delivery-point/OrderList.vue";
import CurrentScan from "@/components/delivery-point/CurrentScan.vue";
import ScanProgress from "@/components/delivery-point/ScanProgress.vue";
import AppLayout from "@/components/layouts/App.vue";

import { DeliveryPoint } from "@/types/api/delivery-point";
import { Bradcrumb } from "@/types/index";

export default defineComponent({
  name: "delivery-point-list",
  components: {
    ScanProgress,
    CurrentScan,
    OrderList,
    AppLayout,
  },
  computed: {
    scanningOrder() {
      return this.$store.state.scanningOrder;
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
    scannedOrders() {
      return this.$store.getters["scannedOrders"];
    },
    notScannedOrders() {
      return this.$store.getters["notScannedOrders"];
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
  created() {
    const deliveryPoint: DeliveryPoint | null = this.$store.getters[
      "getDeliveryPointById"
    ](Number(this.$route.params.id));

    this.deliveryPoint = deliveryPoint;
  },
  methods: {
    scan() {
      this.$store.dispatch("scan");
    },
  },
  async mounted() {
    await this.$store.dispatch("getOrders");
    console.log(this.deliveryPoint);

    if (this.deliveryPoint) return;

    await this.$store.dispatch("getDeliveryPoints");
    const deliveryPoint: DeliveryPoint | null = this.$store.getters[
      "getDeliveryPointById"
    ](Number(this.$route.params.id));

    this.deliveryPoint = deliveryPoint;
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
      .title
        color: #303236
        font-weight: 600
        font-size: 22px
        margin-bottom 30px
      .loader, .error
        text-align center
</style>
