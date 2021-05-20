<template lang="pug">
.header
  Breadcrumbs(:breadcrumbs="breadcrumbs")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

export default defineComponent({
  name: "app-header",
  components: {
    Breadcrumbs,
  },
  props: {
    breadcrumbs: {
      type: Array as PropType<{ href: string; text: string }[]>,
      required: true,
    },
  },
});
</script>

<style scoped lang="stylus">
.header
  padding 16px 25px;
  background #FFFFFF;
  box-shadow 0px 3px 4px rgba(220, 220, 220, 0.25)
</style>
