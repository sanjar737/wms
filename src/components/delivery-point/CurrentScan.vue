<template lang="pug">
.current-scan Текущее сканирование
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "current-scan",
});
</script>

<style scoped lang="stylus">
.current-scan
  background: #FFFFFF;
  border-radius: 4px;
  padding 32px 20px 32px 20px
</style>
