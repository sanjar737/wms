<template lang="pug">
Desktop
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Desktop from "@/components/layouts/Desktop.vue";

export default defineComponent({
  name: "App",
  components: {
    Desktop,
  },
});
</script>

<style lang="stylus">
body
  margin 0
ul
  margin 0
  padding 0
  list-style-type none
a, a:visited, a:hover, a:active {
  color: inherit;
  text-decoration none
}
#app
  font-family Inter, Helvetica, Arial, sans-serif
</style>
