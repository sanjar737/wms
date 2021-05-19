import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Delivery-Point-list",
    component: () => import("@/views/delivery-points/index.vue"),
  },
  {
    path: "/:id",
    name: "Delivery-Point",
    component: () => import("@/views/delivery-points/id.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
