import { createStore, StoreOptions } from "vuex";
import deliveryPointsMock from "@/mocks/delivery-points";
import ordersMock from "@/mocks/orders";

const defaultState = {
  orders: ordersMock,
  deliveryPoints: deliveryPointsMock,
};

const storeOptions: StoreOptions<typeof defaultState> = {
  state: () => defaultState,
  getters: {
    getDeliveryPointById:
      ({ deliveryPoints }) =>
      (id: number) => {
        return deliveryPoints.find((deliveryPoint) => deliveryPoint.id === id);
      },
  },
};
export default createStore(storeOptions);
