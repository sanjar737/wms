<template lang="pug">
ul.order-list
  li.order-item(v-for="order in orders")
    OrderItem(:order="order")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import OrderItem from "@/components/delivery-points/OrderItem.vue";

import ordersMock from "@/mocks/orders";

export default defineComponent({
  name: "order-list",
  components: {
    OrderItem,
  },
  props: {
    orders: {
      type: Array as PropType<typeof ordersMock>,
      required: true,
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
