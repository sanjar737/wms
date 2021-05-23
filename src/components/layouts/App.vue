<template lang="pug">
.desktop-layout
  AppHeader.header(v-bind="$attrs")
  .container
    slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/components/AppHeader.vue";

export default defineComponent({
  name: "desktop-layout",
  components: {
    AppHeader,
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
    $min-padding = 25px
    margin: 0 $min-padding
    padding-left "calc((100% - %s - %s) / 2)" % ($content-width $min-padding)
    padding-right "calc((100% - %s - %s) / 2)" % ($content-width $min-padding)
</style>
