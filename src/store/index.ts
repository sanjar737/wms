import { createStore } from "vuex";

import deliveryPoint, {
  State as DeliveryPointState,
} from "@/store/deliveryPoint";
import order, { State as OrderState } from "@/store/order";

export type RootState = {
  deliveryPoint: DeliveryPointState;
  order: OrderState;
};

const modules = {
  deliveryPoint,
  order,
};

export default createStore({
  modules,
});
