import { Order } from "@/types/api/order";

export interface Bradcrumb {
  href: string;
  text: string;
}
export interface OrderWithScanStatus extends Order {
  scanningResult?: boolean;
}
