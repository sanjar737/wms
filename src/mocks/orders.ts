import { Order } from "@/types/api/order";

export default [
  {
    orderId: 1,
    deliveryInfo: {
      deliveryPoint: {
        id: 1,
        shortName: "НЧЛ-ВХТ",
      },
    },
    customer: {
      customerId: 1,
      firstName: "Иван",
      lastName: "Иванов",
    },
  },
  {
    orderId: 2,
    deliveryInfo: {
      deliveryPoint: {
        id: 1,
        shortName: "НЧЛ-ВХТ",
      },
    },
    customer: {
      customerId: 1,
      firstName: "Иван",
      lastName: "Иванов",
    },
  },
  {
    orderId: 3,
    deliveryInfo: {
      deliveryPoint: {
        id: 1,
        shortName: "НЧЛ-ВХТ",
      },
    },
    customer: {
      customerId: 1,
      firstName: "Иван",
      lastName: "Иванов",
    },
  },
  {
    orderId: 4,
    deliveryInfo: {
      deliveryPoint: {
        id: 1,
        shortName: "НЧЛ-ВХТ",
      },
    },
    customer: {
      customerId: 1,
      firstName: "Иван",
      lastName: "Иванов",
    },
  },
  {
    orderId: 5,
    deliveryInfo: {
      deliveryPoint: {
        id: 2,
        shortName: "ЕКБ-1",
      },
    },
    customer: {
      customerId: 2,
      firstName: "Петр",
      lastName: "Петров",
    },
  },
  {
    orderId: 6,
    deliveryInfo: {
      deliveryPoint: {
        id: 1,
        shortName: "НЧЛ-ВХТ",
      },
    },
    customer: {
      customerId: 1,
      firstName: "Иван",
      lastName: "Иванов",
    },
  },
] as Order[];
