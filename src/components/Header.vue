<template lang="pug">
.header
  Breadcrumbs(:breadcrumbs="breadcrumbs")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

export default defineComponent({
  name: "header",
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      breadcrumbs: [
        { href: "/", text: "Маршрутные листы" },
        { href: "/1", text: "Отгрузка в НЧЛ-ВХТ" },
      ],
    };
  },
});
</script>

<style scoped lang="stylus">
.header
  padding 16px 25px;
  background #FFFFFF;
  box-shadow 0px 3px 4px rgba(220, 220, 220, 0.25)
</style>
