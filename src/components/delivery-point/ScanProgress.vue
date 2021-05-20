<template lang="pug">
.point-block
  StatusBar.progress(:currentValue="scannedOrdersCount" :maxValue="ordersCount")
  .city {{cityName}}
  .order-count {{ordersCount}} заказов

</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatusBar from "@/components/delivery-point/StatusBar.vue";

export default defineComponent({
  name: "scan-progress",
  components: {
    StatusBar,
  },
  props: {
    cityName: {
      type: String,
      required: true,
    },
    scannedOrdersCount: {
      type: Number,
      required: false,
      default: 0,
    },
    ordersCount: {
      type: Number,
      required: false,
      default: 0,
    },
  },
});
</script>

<style scoped lang="stylus">
.point-block
  text-align: center;
  background #FFFFFF
  border-radius 4px
  padding 42px 82px
  .progress
    margin-bottom 17px
  .city
    margin-bottom 8px
    color #303236
    font-weight bold
    font-size 24px
  .order-count
    color #ABB0BA
    font-weight 500
    font-size 18px
</style>
