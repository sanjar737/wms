<template lang="pug">
.delivery-point-item
    .id Пункт выдачи: {{deliveryPoint.id}}
    .name {{deliveryPoint.shortName}}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { DeliveryPoint } from "@/types/api/delivery-point";

export default defineComponent({
  name: "order-item",
  props: {
    deliveryPoint: {
      type: Object as PropType<DeliveryPoint>,
      required: true,
    },
  },
});
</script>

<style scoped lang="stylus">
.delivery-point-item
  font-size: 12px
  opacity: 0.8
  color: #303236
  display: flex
  border: 1px solid #D8D8D8
  border-radius: 4px
  padding 24px 21px
  .id
    margin-right 14px
    white-space nowrap
  .name
    white-space nowrap
</style>
