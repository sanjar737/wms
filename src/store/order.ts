import { ActionTree, MutationTree, GetterTree, Module } from "vuex";

import { RootState } from "@/store/index";

import api from "@/plugins/api";

import { Order } from "@/types/api/order";

interface OrderWithScanStatus extends Order {
  scanningResult?: boolean;
}

const getDefaultState = () => ({
  orders: {
    data: [] as OrderWithScanStatus[],
    loading: false,
    error: null as string | null,
    loaded: false,
  },
  scanning: {
    order: null as Order | null,
    result: null as boolean | null,
  },
});

export type State = ReturnType<typeof getDefaultState>;

const state: State = getDefaultState();

const getters: GetterTree<State, RootState> = {
  notScannedOrders: ({ orders }) =>
    orders.data.filter((order) => !order.scanningResult),
  scannedOrders: ({ orders }) =>
    orders.data.filter((order) => order.scanningResult !== undefined),
  rightOrders: ({ orders }) =>
    orders.data.filter((order) => order.scanningResult === true),
  falseOrders: ({ orders }) =>
    orders.data.filter((order) => order.scanningResult === false),
  allOrdersScanned: ({ orders }) => {
    if (!orders.data.length) return false;

    return orders.data.every((order) => order.scanningResult !== undefined);
  },
  orderListIsEmpty: ({ orders }) => orders.data.length === 0,
};

const mutations: MutationTree<State> = {
  SET_ORDERS(state, orders: Partial<State["orders"]>) {
    Object.assign(state.orders, orders);
  },
  SET_SCANNING(state, scanning: Partial<State["scanning"]>) {
    Object.assign(state.scanning, scanning);
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
};

const actions: ActionTree<State, RootState> = {
  async getOrders({ commit }) {
    commit("SET_ORDERS", { loading: true, error: null, loaded: false });
    try {
      const orders = await api.getOrders();
      commit("SET_ORDERS", { data: orders, loaded: true });
    } catch (error) {
      commit("SET_ORDERS", { error: error.message });
    } finally {
      commit("SET_ORDERS", { loading: false });
    }
  },
  clearState({ commit }) {
    commit("SET_STATE", getDefaultState());
  },
  scan({ commit, state, rootState }) {
    const selectedDeliveryPoint = rootState.deliveryPoint.deliveryPoint.data;
    const scanningOrder = state.scanning.order;

    if (!selectedDeliveryPoint || !scanningOrder) return;

    const scunningResult =
      scanningOrder.deliveryInfo.deliveryPoint.id === selectedDeliveryPoint.id;
    commit("SET_SCANNING", { result: scunningResult });

    commit("SET_SCANNING_RESULT_TO_ORDER", {
      orderId: scanningOrder.orderId,
      result: scunningResult,
    });
  },
};

const order: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default order;
