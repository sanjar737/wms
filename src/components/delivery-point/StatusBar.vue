<template lang="pug">
.progress
  .substrate
    .image-substrate
      img(src="@/assets/images/ship.svg")
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "status-bar",
  props: {
    currentValue: {
      type: Number,
      required: false,
      default: 0,
    },
    maxValue: {
      type: Number,
      required: false,
      default: 0,
    },
  },
});
</script>

<style scoped lang="stylus">
.progress
  width 106px
  height 106px
  border-radius 50%
  background red
  padding 2px
  .substrate
    box-sizing: border-box;
    border-radius 50%
    background #FFFFFF
    width 100%
    height 100%
    padding 7px
  .image-substrate
    width 100%
    height 100%
    border-radius 50%
    background #ECEFF4
    display flex
    justify-content center
    align-items center
</style>
