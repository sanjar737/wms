<template lang="pug">
.main-page
  h1.title WMS
  router-link.link(to="/delivery-points") Пункты выдачи
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "main-page",
});
</script>

<style scoped lang="stylus">
.main-page
    text-align: center;
    padding: 40px 0;
    .title
       font-size: 70px;
    .link
        text-decoration: underline;
</style>
