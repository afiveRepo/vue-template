import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home-page",
    component: () => import("./components/HomePage")
  },
  {
    path: "/",
    alias: "/products",
    name: "product-page",
    component: () => import("./components/ProductPage")
  },
  {
    path: "/",
    alias: "/addProduct",
    name: "add-product",
    component: () => import("./components/AddProduct")
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;