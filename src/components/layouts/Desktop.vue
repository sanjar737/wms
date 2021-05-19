<template lang="pug">
.desktop-layout
  Header.header
  .container
    router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "desktop-layout",
  components: {
    Header,
  },
});
</script>

<style scoped lang="stylus">
.desktop-layout
  background #F0F1F3
  height 100vh
  .header
    margin-bottom 20px
  .container
    $content-width = 870px
    padding-left "calc((100% - %s) / 2)" % $content-width
    padding-right "calc((100% - %s) / 2)" % $content-width
</style>
