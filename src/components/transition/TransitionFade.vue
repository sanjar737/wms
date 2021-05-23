<script lang="ts">
import { defineComponent, h, Transition } from "vue";

export default defineComponent({
  functional: true,
  render() {
    return h(Transition, { mode: "out-in", name: "fade" }, this.$slots.default);
  },
});
</script>

<style lang="stylus">
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
