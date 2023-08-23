import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
