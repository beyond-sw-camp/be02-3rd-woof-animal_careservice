import { createRouter, createWebHistory } from "vue-router";

import AboutPage from "@/pages/AboutPage.vue";
import MyPage from "@/pages/MyPage.vue";
import MainPage from "@/pages/MainPage.vue";


import SignupPage from "@/pages/SignupPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import CeoSignup from "@/components/member/CeoSignup.vue";
import CeoLogin from "@/components/member/CeoLogin.vue";
import ManagerSignup from "@/components/member/ManagerSignup.vue";
import ManagerLogin from "@/components/member/ManagerLogin.vue";
import MemberSignup from "@/components/member/MemberSignup.vue";
import MemberLogin from "@/components/member/MemberLogin.vue";


import OrdersMainPage from "@/pages/OrdersMainPage.vue";
import OrdersCreate from "@/components/orders/OrdersCreate.vue";
import OrdersSuccess from "@/components/orders/OrdersSuccess.vue";
import OrdersList from "@/components/orders/OrdersList.vue";
import OrdersUpdate from "@/components/orders/OrdersUpdate.vue";
import OrdersDelete from "@/components/orders/OrdersDelete.vue";
import OrdersUpdateForm from "@/components/orders/OrdersUpdateForm.vue";
import OrdersRead from "@/components/orders/OrdersRead.vue";
import OrdersMyList from "@/components/orders/OrdersMyList.vue";



import ProductCeoPage from "@/pages/ProductCeoPage.vue";
import ProductCeoList from  "@/components/productCeo/ProductCeoList.vue"
import ProductCeoCreate from  "@/components/productCeo/ProductCeoCreate.vue"
import ProductCeoDetail from  "@/components/productCeo/ProductCeoDetail.vue"
import ProductCeoUpdate from  "@/components/productCeo/ProductCeoUpdate.vue"

import ProductManagerPage from "@/pages/ProductManagerPage.vue";
import ProductManagerList from  "@/components/productManager/ProductManagerList.vue"
import ProductManagerCreate from  "@/components/productManager/ProductManagerCreate.vue"
import ProductManagerDetail from  "@/components/productManager/ProductManagerDetail.vue"
import ProductManagerUpdate from  "@/components/productManager/ProductManagerUpdate.vue"

const requireAuth = () => (from, to, next) => {
  const token = sessionStorage.getItem("aToken");
  if (token != null) {
    return next();
  }
  next("/login/member");
};

const routes = [
  { path: "/manager", component: ProductManagerPage, beforeEnter: requireAuth() },

  {
    path: "/productCeo",
    component: ProductCeoPage,
    children: [
      { path: "list", component: ProductCeoList },
      { path: "create", component: ProductCeoCreate },
      { path: "detail/:idx", component: ProductCeoDetail },
      { path: "update", component: ProductCeoUpdate },
    ],
  },

  {
    path: "/productManager",
    component: ProductManagerPage,
    children: [
      { path: "list", component: ProductManagerList },
      { path: "create", component: ProductManagerCreate },
      { path: "detail/:idx", component: ProductManagerDetail },
      { path: "update", component: ProductManagerUpdate },
    ],
  },

  {
    path: "/login",
    component: LoginPage,
    children: [
      { path: "member", component: MemberLogin },
      { path: "manager", component: ManagerLogin },
      { path: "ceo", component: CeoLogin },
    ],
  },

  {
    path: "/signup",
    component: SignupPage,
    children: [
      { path: "member", component: MemberSignup },
      { path: "manager", component: ManagerSignup },
      { path: "ceo", component: CeoSignup },
    ],
  },
  {
    path: "/orders",
    component: OrdersMainPage,
    children: [
      { path: "create", component: OrdersCreate },
      { path: "success", component: OrdersSuccess },
      { path: "list", component: OrdersList },
      { path: "updatecheck", component: OrdersUpdate },
      { path: "delete", component: OrdersDelete },
      { path: "update", component: OrdersUpdateForm },
      { path: "read", component: OrdersRead },
      { path: "mylist", component: OrdersMyList },
    ],
  },
  { path: "/about", component: AboutPage  },
  { path: "/mypage", component: MyPage  },
  { path: "/", component: MainPage  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
