<template lang="pug">
.order-item
  .id {{order.orderId}}
  .name {{fullName}}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "order-item",
  props: {
    order: {
      type: Object,
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

<style scoped lang="stylus"></style>
