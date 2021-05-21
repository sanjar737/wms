<template lang="pug">
.main-page
  h1.title Страница не найдена
  router-link.link(to="/") На главную
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "page-not-found",
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
