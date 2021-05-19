<template lang="pug">
.breadcrumbs
  ul.breadcrumb-list 
    li.breadcrumb-item(v-for="(breadcrumb, index) in breadcrumbs")
      router-link.link(:to="breadcrumb.href" v-if="index!==breadcrumbs.length-1") {{ breadcrumb.text }}
  .current-breadcrumb {{ breadcrumbs[breadcrumbs.length-1].text }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "breadcrumbs",
  props: {
    breadcrumbs: {
      type: Array as PropType<{ href: string; text: string }[]>,
      required: true,
    },
  },
});
</script>

<style scoped lang="stylus">
.breadcrumb-list
  display flex
  .breadcrumb-item
    .link
      font-size: 12px;
      color: #61646B;
      &::after
        content "/"
.current-breadcrumb
  color: #18191B;
  font-size: 24px;
  font-weight: bold;
</style>
