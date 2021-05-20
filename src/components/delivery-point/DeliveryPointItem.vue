<template lang="pug">
.delivery-point-item
  router-link.link(:to="`/delivery-points/${deliveryPoint.id}`")
    .id {{deliveryPoint.id}}
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

<style scoped lang="stylus"></style>
