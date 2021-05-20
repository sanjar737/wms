<template lang="pug">
AppLayout(:breadcrumbs="breadcrumbs")
  .delivery-point
    .left-side
      PointBlock
    .right-side
      CurrentScan.current-scan
      OrderList(:orders="orders")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrderList from "@/components/delivery-point/OrderList.vue";
import CurrentScan from "@/components/delivery-point/CurrentScan.vue";
import PointBlock from "@/components/delivery-point/PointBlock.vue";
import AppLayout from "@/components/layouts/App.vue";

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
  },
  data() {
    return {
      breadcrumbs: [
        { href: "/delivery-points", text: "Маршрутные листы" },
        { href: "/delivery-points/1", text: "Отгрузка в НЧЛ-ВХТ" },
      ],
    };
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
</style>
