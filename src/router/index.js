import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InvoiceView from "../views/InvoiceView.vue";
import Login from "../views/Login.vue";
import Registration from "../views/Registration.vue";
import Landing from "../views/Landing.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/welcome",
    name: "Landing",
    component: Landing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
