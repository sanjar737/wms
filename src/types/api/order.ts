import { DeliveryPoint } from "@/types/api/delivery-point";

export interface Order {
  orderId: number;
  deliveryInfo: DeliveryInfo;
  customer: Customer;
}
export interface DeliveryInfo {
  deliveryPoint: DeliveryPoint;
}
export interface Customer {
  customerId: number;
  firstName: string;
  lastName: string;
}
