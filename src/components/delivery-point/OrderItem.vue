<template lang="pug">
.order-item
  .id Номер заказа: {{order.orderId}}
  .name {{fullName}}
  .image-wrapper
    img(src="@/assets/images/shipment.svg")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Order } from "@/types/api/order";

export default defineComponent({
  name: "order-item",
  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    },
  },
  computed: {
    fullName(): string {
      return `${this.order.customer.lastName} ${this.order.customer.firstName[0]}`;
    },
  },
});
</script>

<style scoped lang="stylus">
.order-item
  align-items center
  padding 21px 24px
  display flex
  border 1px solid #D8D8D8
  border-radius 4px
  font-size 12px
  color #303236
  opacity 0.8
  transition background 0.1s ease-in-out
  &:hover{
    cursor pointer
    background #f0f1f3
  }
  .id
    margin-right 14px
  .image-wrapper
    background: rgba(196, 196, 196, 0.2);
    border-radius: 4px;
    padding 10px
    margin-left: auto;
    img
      display: block;
</style>
