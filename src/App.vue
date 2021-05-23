<template lang="pug">
router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="stylus">
html, body, #app{
  height 100%
}
*
  margin 0
ul
  padding 0
  list-style-type none
a, a:visited, a:hover, a:active
  color: inherit;
  text-decoration none

#app
  font-family Inter, Helvetica, Arial, sans-serif


::-webkit-scrollbar
  $padding-left = 11px
  $width = 4px
  width: $padding-left+$width
  &-track
    background #E0E4EB
    border-left $padding-left solid rgba(255,255,255,0)
    background-clip padding-box
  &-thumb
    background #ABB0BA
    border-left $padding-left solid rgba(255,255,255,0)
    background-clip padding-box
</style>
