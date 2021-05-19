import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DeliveryPoints from "@/views/delivery-points/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Delivery-Point-list",
    component: DeliveryPoints,
  },
  {
    path: "/about",
    name: "Delivery-Point",
    component: () => import("@/views/delivery-points/id.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
