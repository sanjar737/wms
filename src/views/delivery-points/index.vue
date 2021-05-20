<template lang="pug">
AppLayout(:breadcrumbs="breadcrumbs")
  .delivery-point-list 
    h1 Пункты выдачи
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
      breadcrumbs: [{ href: "/", text: "Маршрутные листы" }],
    };
  },
});
</script>
