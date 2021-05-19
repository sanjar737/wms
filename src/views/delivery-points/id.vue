<template lang="pug">
.delivery-point
  .left-side
    PointBlock
  .right-side
    CurrentScan.current-scan
    OrderList(:orders="orders")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrderList from "@/components/delivery-points/OrderList.vue";
import CurrentScan from "@/components/delivery-points/CurrentScan.vue";
import PointBlock from "@/components/delivery-points/PointBlock.vue";

export default defineComponent({
  name: "delivery-point-list",
  components: {
    PointBlock,
    CurrentScan,
    OrderList,
  },
  computed: {
    orders() {
      return this.$store.state.order;
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
</style>
