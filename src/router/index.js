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
const addActivityView = () => import("../views/activities/Add-activity.vue");
const editActivityView = () => import("../views/activities/Edit-activity.vue");

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
      {
        path: "add-new",
        name: "new",
        component: addActivityView,
      },
      {
        path: "edit/:id",
        name: "edit",
        component: editActivityView,
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
