import deliveryPointsMock from "@/mocks/delivery-points";
import ordersMock from "@/mocks/orders";

import { DeliveryPoint } from "@/types/api/delivery-point";
import { Order } from "@/types/api/order";

export default {
  getDeliveryPoints() {
    return new Promise<DeliveryPoint[]>((resolve) => {
      setTimeout(() => {
        resolve(JSON.parse(JSON.stringify(deliveryPointsMock)));
      }, 500);
    });
  },
  getOrders() {
    return new Promise<Order[]>((resolve) => {
      setTimeout(() => {
        resolve(JSON.parse(JSON.stringify(ordersMock)));
      }, 500);
    });
  },
  getDeliveryPoint(id: number) {
    return new Promise<DeliveryPoint>((resolve, reject) => {
      setTimeout(() => {
        if (ordersMock[id] === undefined)
          reject(new Error(`Пункт выдачи с номерм ${id} не найден`));
        else resolve(JSON.parse(JSON.stringify(ordersMock[id])));
      }, 500);
    });
  },
};
