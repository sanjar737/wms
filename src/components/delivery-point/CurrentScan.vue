<template lang="pug">
.current-scan 
  .title-wrapper
    .title Текущее сканирование
    span.status {{scannedOrdersCount}} из {{ordersCount}}
  transition(name="bounce" mode="out-in")
    .warn(v-if="scanningResult===null" key="warn")
      .text Начните сканировать заказы для проверки
      .status-image-wrapper
        img(src="@/assets/images/scan.svg")
    .error(v-else-if="scanningResult===false" :key="scanningOrder.orderId")
      .text
        .id Номер заказа: {{scanningOrder.orderId}}
        .city Город: 
          span.city-name {{scanningOrder.deliveryInfo.deliveryPoint.shortName}}
        .customer Покупатель: {{fullName}}
      .status-image-wrapper
        img(src="@/assets/images/error.svg")
    .info(v-else :key="scanningOrder.orderId")
      .text
        .id Номер заказа: {{scanningOrder.orderId}}
        .city Город: 
          span.city-name {{scanningOrder.deliveryInfo.deliveryPoint.shortName}}
        .customer Покупатель: {{fullName}}
      .status-image-wrapper
        img(src="@/assets/images/success.svg")
</template>

<script lang="ts">
import { Order } from "@/types/api/order";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "current-scan",
  props: {
    scanningOrder: {
      type: Object as PropType<Order | null>,
      required: false,
      default: null,
    },
    scannedOrdersCount: {
      type: Number,
      required: false,
      default: 0,
    },
    ordersCount: {
      type: Number,
      required: false,
      default: 0,
    },
    scanningResult: {
      type: Boolean as PropType<boolean | null>,
      required: false,
      default: null,
    },
  },
  computed: {
    fullName(): string {
      if (!this.scanningOrder) return "";

      return `${this.scanningOrder.customer.lastName} ${this.scanningOrder.customer.firstName[0]}.`;
    },
  },
});
</script>

<style scoped lang="stylus">
.bounce-enter-active {
  animation: bounce-in .2s;
}
.bounce-leave-active {
  animation: bounce-in .2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.current-scan
  background #FFFFFF
  border-radius 4px
  padding 20px
  .title-wrapper
    font-weight 600
    font-size 22px
    display flex
    justify-content space-between
    margin-bottom 20px
  .warn, .info, .error
    border 2px solid #C4C9D4
    border-radius 4px
    padding 24px
    display flex
    justify-content space-between
    align-items center
  .warn
    .text
      max-width 150px
  .error
    .city-name
      color #E94949
  .text
    font-size 12px
    color #303236
    opacity 0.8
  .status-image-wrapper
    width 62px
    height 62px
    display flex
    justify-content center
    align-items center
    background #ECEFF4
    border-radius 4px
</style>
