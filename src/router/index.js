import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout.vue";
import Speakers from "@/components/Speaker.vue";

const routes = [
  {
    path: "/",
    component: Layout,
  },
  {
    path: "/speaker",
    component: Speakers,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
