<template lang="pug">
ul.delivery-point-list
  router-link.link(v-for="deliveryPoint in deliveryPoints" :to="`/delivery-points/${deliveryPoint.id}`")
    DeliveryPointItem.delivery-point-item(:deliveryPoint="deliveryPoint")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import DeliveryPointItem from "@/components/delivery-point/DeliveryPointItem.vue";

import { DeliveryPoint } from "@/types/api/delivery-point";

export default defineComponent({
  name: "delivery-point-list",
  components: {
    DeliveryPointItem,
  },
  props: {
    deliveryPoints: {
      type: Array as PropType<DeliveryPoint[]>,
      required: false,
      default: () => [],
    },
  },
});
</script>

<style scoped lang="stylus">
.delivery-point-list
  border-radius: 4px;
  padding-right 10px
  max-height: 340px;
  overflow: auto;
.link
  display block
  &:not(:last-child)
    margin-bottom 10px
</style>
