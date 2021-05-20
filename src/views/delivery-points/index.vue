<template lang="pug">
AppLayout(:breadcrumbs="breadcrumbs")
  .delivery-points 
    DeliveryPointList(:deliveryPoints="deliveryPoints")
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DeliveryPointList from "@/components/delivery-point/DeliveryPointList.vue";
import AppLayout from "@/components/layouts/App.vue";

export default defineComponent({
  name: "delivery-point-list",
  components: {
    DeliveryPointList,
    AppLayout,
  },
  computed: {
    deliveryPoints() {
      return this.$store.state.deliveryPoints;
    },
  },
  data() {
    return {
      breadcrumbs: [{ href: "/delivery-points", text: "Маршрутные листы" }],
    };
  },
});
</script>

<style lang="stylus">
.delivery-points
  background: #fff;
  padding: 32px 10px 32px 20px;
</style>
