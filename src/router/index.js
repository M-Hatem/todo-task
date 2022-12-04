import { createRouter, createWebHistory } from "vue-router";

// Components
// import Home from '../views/HomeView'
const HomeView = () => import("../views/Home.vue");

// Authentication
const AuthView = () => import("../views/auth/Auth.vue");
const SignInView = () => import("../views/auth/sign-in/SignIn.vue");
const SignUpView = () => import("../views/auth/sign-up/SignUp.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auth",
    component: AuthView,
    children: [
      {
        path: "",
        redirect: { name: "signin" },
      },
      {
        path: "sign-in",
        name: "signin",
        component: SignInView,
      },
      {
        path: "sign-up",
        name: "signup",
        component: SignUpView,
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]
});

export default router;
