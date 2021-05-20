<template lang="pug">
ul.order-list
    OrderItem.order-item(v-for="order in orders" :order="order")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import OrderItem from "@/components/delivery-point/OrderItem.vue";

import { Order } from "@/types/api/order";

export default defineComponent({
  name: "order-list",
  components: {
    OrderItem,
  },
  props: {
    orders: {
      type: Array as PropType<Order[]>,
      required: false,
      default: () => [],
    },
  },
});
</script>

<style scoped lang="stylus">
.order-list
  padding-right 10px
  overflow auto
  max-height 340px
  border-radius: 4px;
.order-item
  &:not(:last-child)
    margin-bottom 10px
</style>
