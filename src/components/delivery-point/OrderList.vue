<template lang="pug">
ul.order-list
  li.order-item(v-for="order in orders")
    OrderItem(:order="order")
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
  background: #FFFFFF;
  border-radius: 4px;
  padding 32px 20px 32px 20px
</style>
