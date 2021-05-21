<template lang="pug">
.current-scan 
  .title-wrapper
    .title Текущее сканирование
    span.status
      span.scanned-orders-count {{scannedOrdersCount}} 
      span из 
      span.orders-count {{ordersCount}}
  .order-info
    .info(v-if="scanningOrder")
      .id Номер заказа: {{scanningOrder.orderId}}
      .city Город: 
        span(:class="cityNameClasses") {{scanningOrder.deliveryInfo.deliveryPoint.shortName}}
      .customer Покупатель: {{fullName}}
    .warn(v-else)
      .message Начните сканировать заказы для проверки
    .status-image-wrapper
      img(:src="statusImg")

</template>

<script lang="ts">
import { Order } from "@/types/api/order";
import { defineComponent, PropType } from "vue";
import successImg from "@/assets/images/success.svg";
import scanImg from "@/assets/images/scan.svg";
import errorImg from "@/assets/images/error.svg";

export default defineComponent({
  name: "current-scan",
  props: {
    scanningOrder: {
      type: Object as PropType<Order | null>,
      required: true,
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
  data() {
    return {
      successImg,
      scanImg,
      errorImg,
    };
  },
  computed: {
    cityNameClasses(): {
      [K: string]: boolean;
    } {
      return { "city-name--error": this.scanningResult === false };
    },
    fullName(): string {
      if (!this.scanningOrder) return "";

      return `${this.scanningOrder.customer.lastName} ${this.scanningOrder.customer.firstName[0]}`;
    },
    statusImg(): string {
      if (this.scanningResult === null) return scanImg;
      else if (this.scanningResult === true) return successImg;
      else return errorImg;
    },
  },
});
</script>

<style scoped lang="stylus">
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
  .order-info
    display flex
    justify-content space-between
    align-items center
    border 2px solid #C4C9D4
    border-radius 4px
    padding 24px
    .warn
      max-width 150px
    .info
      .city-name--error
        color #E94949
    .warn, .info
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
