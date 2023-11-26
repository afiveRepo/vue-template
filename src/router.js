import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home-page",
    component: () => import("./components/HomePage")
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;