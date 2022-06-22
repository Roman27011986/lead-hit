import { createRouter, createWebHistory } from "vue-router";

// import HomePage from "@/pages/HomePage.vue";
// import AnalyticsPage from "@/pages/AnalyticsPage.vue";

const HomePage = () => import("@/pages/HomePage.vue");
const AnalyticsPage = () => import("@/pages/AnalyticsPage.vue");

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/analytics",
    component: AnalyticsPage,
    name: "analytics",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
