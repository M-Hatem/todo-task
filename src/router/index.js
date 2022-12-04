import { createRouter, createWebHistory } from "vue-router";

// Components
// import Home from '../views/HomeView'
const homeView = () => import("../views/Home.vue");

// Authentication
const authView = () => import("../views/auth/Auth.vue");
const signInView = () => import("../views/auth/sign-in/SignIn.vue");
const signUpView = () => import("../views/auth/sign-up/SignUp.vue");

// To-Do List (Activities)
const activitiesView = () => import("../views/activities/Activities.vue");

// Not-found component
const NotFoundView = () => import("../views/Not-found.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: homeView,
    children: [
      {
        path: "todo-list",
        name: "list",
        component: activitiesView,
      },
    ],
  },
  {
    path: "/auth",
    component: authView,
    children: [
      {
        path: "",
        redirect: { name: "signin" },
      },
      {
        path: "sign-in",
        name: "signin",
        component: signInView,
      },
      {
        path: "sign-up",
        name: "signup",
        component: signUpView,
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: NotFoundView,
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
