import { createStore } from "vuex";
import deliveryPointsMock from "@/mocks/delivery-points";
import ordersMock from "@/mocks/orders";

export default createStore({
  state: {
    order: ordersMock,
    deliveryPoint: deliveryPointsMock,
  },
  mutations: {},
  actions: {},
  modules: {},
});
