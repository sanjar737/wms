<template lang="pug">
AppLayout(:breadcrumbs="breadcrumbs")
  .delivery-points
    TransitionFade 
      .loader(v-if="deliveryPoints.loading" key="load") Загрузка
      .error(v-else-if="deliveryPoints.error" key="error") {{deliveryPoints.error}}
      .empty-list(v-else-if="deliveryPoints.loaded && deliveryPointListIsEmpty" key="empty") Нет пунктов выдачи
      DeliveryPointList(v-else :deliveryPoints="deliveryPoints.data" key="delivery-points")
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DeliveryPointList from "@/components/delivery-point/DeliveryPointList.vue";
import AppLayout from "@/components/layouts/App.vue";
import TransitionFade from "@/components/transition/TransitionFade.vue";

import { Bradcrumb } from "@/types";

export default defineComponent({
  name: "delivery-point-list",
  components: {
    DeliveryPointList,
    AppLayout,
    TransitionFade,
  },
  computed: {
    deliveryPoints() {
      return this.$store.state.deliveryPoint.deliveryPoints;
    },
    deliveryPointListIsEmpty(): boolean {
      return this.$store.getters["deliveryPoint/deliveryPointListIsEmpty"];
    },
  },
  mounted() {
    if (!this.deliveryPoints.data.length)
      this.$store.dispatch("deliveryPoint/getDeliveryPoints");
  },
  data() {
    return {
      breadcrumbs: [
        { href: this.$route.fullPath, text: "Маршрутные листы" },
      ] as Bradcrumb[],
    };
  },
});
</script>

<style lang="stylus">
.delivery-points
  background #fff
  padding 32px 20px 32px 20px
  .loader, .error
    text-align center
</style>
