<template lang="pug">
AppLayout(:breadcrumbs="breadcrumbs")
  .delivery-point
    .left-side
      PointBlock
    .right-side
      CurrentScan.current-scan
      .orders
        .title Неотсканировано
        OrderList(:orders="orders")
</template>

<script lang="ts">
import { defineComponent } from "vue";

import OrderList from "@/components/delivery-point/OrderList.vue";
import CurrentScan from "@/components/delivery-point/CurrentScan.vue";
import PointBlock from "@/components/delivery-point/PointBlock.vue";
import AppLayout from "@/components/layouts/App.vue";

import { DeliveryPoint } from "@/types/api/delivery-point";

export default defineComponent({
  name: "delivery-point-list",
  components: {
    PointBlock,
    CurrentScan,
    OrderList,
    AppLayout,
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    },
    deliveryPoint(): DeliveryPoint {
      return this.$store.getters["getDeliveryPointById"](
        Number(this.$route.params.id)
      );
    },
    breadcrumbs(): { href: string; text: string }[] {
      return [
        { href: "/delivery-points", text: "Маршрутные листы" },
        {
          href: `/delivery-points/${this.deliveryPoint.id}`,
          text: `Отгрузка в ${this.deliveryPoint.shortName}`,
        },
      ];
    },
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
</style>
