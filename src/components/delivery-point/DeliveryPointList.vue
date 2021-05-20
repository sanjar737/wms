<template lang="pug">
ul.delivery-point-list
  li.order-item(v-for="deliveryPoint in deliveryPoints")
    DeliveryPointItem(:deliveryPoint="deliveryPoint")
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
  background: #FFFFFF;
  border-radius: 4px;
  padding 32px 20px 32px 20px
</style>
