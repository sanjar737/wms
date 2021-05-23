import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

import api from "@/plugins/api";

import { DeliveryPoint } from "@/types/api/delivery-point";
import { RootState } from ".";

const getDefaultState = () => ({
  deliveryPoints: {
    data: [] as DeliveryPoint[],
    loading: false,
    error: null as string | null,
  },
  deliveryPoint: {
    data: null as DeliveryPoint | null,
    loading: false,
    error: null as string | null,
  },
});

export type State = ReturnType<typeof getDefaultState>;

const state: State = getDefaultState();

const getters: GetterTree<State, RootState> = {
  getDeliveryPointById:
    ({ deliveryPoints }) =>
    (id: number) => {
      return deliveryPoints.data.find(
        (deliveryPoint) => deliveryPoint.id === id
      );
    },
  deliveryPointListIsEmpty: ({ deliveryPoints }) =>
    deliveryPoints.data.length === 0,
};

const mutations: MutationTree<State> = {
  SET_DELIVERY_POINTS(state, deliveryPoints: Partial<State["deliveryPoints"]>) {
    Object.assign(state.deliveryPoints, deliveryPoints);
  },
  SET_DELIVERY_POINT(state, deliveryPoint: Partial<State["deliveryPoint"]>) {
    Object.assign(state.deliveryPoint, deliveryPoint);
  },
  SET_STATE(state, newState) {
    Object.assign(state, newState);
  },
};

const actions: ActionTree<State, RootState> = {
  async getDeliveryPoints({ commit }) {
    commit("SET_DELIVERY_POINTS", { loading: true, error: null });
    try {
      const deliveryPoints = await api.getDeliveryPoints();
      commit("SET_DELIVERY_POINTS", { data: deliveryPoints });
    } catch (error) {
      commit("SET_DELIVERY_POINTS", { error: error.message });
    } finally {
      commit("SET_DELIVERY_POINTS", { loading: false });
    }
  },
  async getDeliveryPoint({ commit }, id: number) {
    commit("SET_DELIVERY_POINT", { loading: true, error: null });
    try {
      const deliveryPoint = await api.getDeliveryPoint(id);
      commit("SET_DELIVERY_POINT", { data: deliveryPoint });
    } catch (error) {
      commit("SET_DELIVERY_POINT", { error: error.message });
    } finally {
      commit("SET_DELIVERY_POINT", { loading: false });
    }
  },
  clearState({ commit }) {
    commit("SET_STATE", getDefaultState());
  },
};

const deliveryPoint: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default deliveryPoint;
