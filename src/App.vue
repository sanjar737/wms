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
  border: 4px solid transparent;
  width: 4px


::-webkit-scrollbar-track
  background: #E0E4EB
  border-radius: 4px


::-webkit-scrollbar-thumb
  background: #ABB0BA
  border-radius: 4px
</style>
