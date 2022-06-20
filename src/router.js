import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import AnalyticsPage from "@/pages/AnalyticsPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/analytics",
    component: AnalyticsPage,
    name: "analyticspage",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
