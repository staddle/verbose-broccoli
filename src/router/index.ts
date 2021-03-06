import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import SignIn from "../views/SignIn.vue";
import CheckOut from "../views/CheckOut.vue";
import ItemView from "../views/ItemView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckOut,
    },
    {
      path: "/item/:id",
      name: "item",
      component: ItemView,
    }
  ],
});

export default router;
