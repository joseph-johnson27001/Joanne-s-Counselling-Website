import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
