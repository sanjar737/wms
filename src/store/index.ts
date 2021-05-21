import { createStore, StoreOptions } from "vuex";

import deliveryPointsMock from "@/mocks/delivery-points";
import ordersMock from "@/mocks/orders";

import { Order } from "@/types/api/order";
import { OrderWithScanStatus } from "@/types/index";
import { DeliveryPoint } from "@/types/api/delivery-point";

const defaultState = {
  orders: {
    data: [] as OrderWithScanStatus[],
    loading: false,
    error: null as string | null,
  },
  deliveryPoints: {
    data: [] as DeliveryPoint[],
    loading: false,
    error: null as string | null,
  },
  selectedDeliveryPoint: null as DeliveryPoint | null,
  scanningOrder: null as Order | null,
  scanningResult: null as boolean | null,
};
const storeOptions: StoreOptions<typeof defaultState> = {
  state: defaultState,
  getters: {
    getDeliveryPointById:
      ({ deliveryPoints }) =>
      (id: number) => {
        return deliveryPoints.data.find(
          (deliveryPoint) => deliveryPoint.id === id
        );
      },
    notScannedOrders: ({ orders }) =>
      orders.data.filter((order) => !order.scanningResult),
    scannedOrders: ({ orders }) =>
      orders.data.filter((order) => order.scanningResult !== undefined),
    rightOrders: ({ orders }) =>
      orders.data.filter((order) => order.scanningResult === true),
    falseOrders: ({ orders }) =>
      orders.data.filter((order) => order.scanningResult === false),
    allOrdersScanned: ({ orders }) =>
      orders.data.every((order) => order.scanningResult !== undefined),
    orderListIsEmpty: ({ orders }) => orders.data.length === 0,
    deliveryPointListIsEmpty: ({ deliveryPoints }) =>
      deliveryPoints.data.length === 0,
  },
  mutations: {
    SET_ORDERS(state, orders: Partial<typeof defaultState.orders>) {
      Object.assign(state.orders, orders);
    },
    SET_DELIVERY_POINTS(
      state,
      deliveryPoints: Partial<typeof defaultState.deliveryPoints>
    ) {
      Object.assign(state.deliveryPoints, deliveryPoints);
    },
    SET_SCANNING_ORDER(state, scanningOrder: Order | null) {
      state.scanningOrder = scanningOrder;
    },
    SET_SCANNING_RESULT(state, scanningResult: boolean | null) {
      state.scanningResult = scanningResult;
    },
    SET_SELECTED_DELIVERY_POINT(state, deliveryPoint: DeliveryPoint) {
      state.selectedDeliveryPoint = deliveryPoint;
    },
    SET_SCANNING_RESULT_TO_ORDER(
      state,
      { orderId, result }: { orderId: number; result: boolean }
    ) {
      const index = state.orders.data.findIndex(
        (order) => order.orderId === orderId
      );
      state.orders.data[index].scanningResult = result;
    },
    SET_STATE(state, newState) {
      Object.assign(state, newState);
    },
  },
  actions: {
    async getOrders({ commit }) {
      commit("SET_ORDERS", { loading: true, error: null });
      try {
        const orders = await new Promise<Order[]>((resolve) => {
          setTimeout(() => {
            resolve(JSON.parse(JSON.stringify(ordersMock)));
          }, 500);
        });
        commit("SET_ORDERS", { data: orders });
      } catch (error) {
        commit("SET_ORDERS", { error: error.message });
      } finally {
        commit("SET_ORDERS", { loading: false });
      }
    },
    async getDeliveryPoints({ commit }) {
      commit("SET_DELIVERY_POINTS", { loading: true, error: null });
      try {
        const deliveryPoints = await new Promise<DeliveryPoint[]>((resolve) => {
          setTimeout(() => {
            resolve(JSON.parse(JSON.stringify(deliveryPointsMock)));
          }, 500);
        });
        commit("SET_DELIVERY_POINTS", { data: deliveryPoints });
      } catch (error) {
        commit("SET_DELIVERY_POINTS", { error: error.message });
      } finally {
        commit("SET_DELIVERY_POINTS", { loading: false });
      }
    },
    clearState({ commit }) {
      commit("SET_STATE", defaultState);
    },
    scan({ commit, state }) {
      const selectedDeliveryPoint = state.selectedDeliveryPoint;
      const scanningOrder = state.scanningOrder;

      if (!selectedDeliveryPoint || !scanningOrder) return;

      const scunningResult =
        scanningOrder.deliveryInfo.deliveryPoint.id ===
        selectedDeliveryPoint.id;
      commit("SET_SCANNING_RESULT", scunningResult);

      commit("SET_SCANNING_RESULT_TO_ORDER", {
        orderId: scanningOrder.orderId,
        result: scunningResult,
      });
    },
  },
};
export default createStore(storeOptions);
