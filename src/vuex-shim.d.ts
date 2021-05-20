// https://next.vuex.vuejs.org/guide/migrating-to-4-0-from-3-x.html#typescript-support

import { ComponentCustomProperties } from "vue";

import IndexStore from "@/store/index";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: typeof IndexStore;
  }
}
