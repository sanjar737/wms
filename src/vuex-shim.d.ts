import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

import IndexStore from "@/store/index";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    count: number;
  }

  interface ComponentCustomProperties {
    $store: typeof IndexStore;
  }
}
