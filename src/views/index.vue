<template lang="pug">
.main-page
  h1 WMS
  router-link.link(to="/delivery-points") Пункты выдачи
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "main-page",
});
</script>
