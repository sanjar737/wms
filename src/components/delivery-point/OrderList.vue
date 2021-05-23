<template lang="pug">
ul.order-list
  transition-group(name="list")
    OrderItem.order-item(v-for="order in orders" :order="order" :key="order.orderId" @click="choice(order)")
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
  emits: {
    "update:modelValue": function (payload: Order) {
      return (
        typeof payload.orderId === "number" &&
        payload.deliveryInfo !== undefined &&
        payload.customer !== undefined
      );
    },
  },
  props: {
    orders: {
      type: Array as PropType<Order[]>,
      required: false,
      default: () => [],
    },
    modelValue: {
      type: Object as PropType<Order | null>,
      required: false,
      default: () => null,
    },
  },
  methods: {
    choice(order: Order) {
      this.$emit("update:modelValue", order);
    },
  },
});
</script>

<style scoped lang="stylus">
.list-enter-from,
.list-leave-to
  opacity 0
  transform translateY(30px)

.list-leave-active {
  position absolute
  width 100%
  box-sizing border-box
}

.order-list
  position relative
  overflow auto
  max-height 340px
  border-radius: 4px;
.order-item
  transition all 0.2s ease
  &:not(:last-child)
    margin-bottom 10px
</style>
