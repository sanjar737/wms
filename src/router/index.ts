import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Hello-page",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/delivery-points",
    name: "Delivery-Point-list",
    component: () => import("@/views/delivery-points/index.vue"),
  },
  {
    path: "/delivery-points/:id(\\d+)",
    name: "Delivery-Point",
    component: () => import("@/views/delivery-points/id.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Page-not-found",
    component: () => import("@/views/pageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
