import { createRouter, createWebHistory } from "vue-router";
import useUserStore from "@/stores/user";

// Components
const homeView = () => import("../views/Home.vue");
const MainView = () => import("../views/Main-page.vue");

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
        path: "",
        component: MainView,
      },
      {
        path: "todo-list",
        name: "list",
        component: activitiesView,
        // for guarding the route
        meta: {
          requiresAuth: true,
        },
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
});

// for guarding all routes
router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next();
  } else {
    const userStore = useUserStore();
    if (userStore.userLoggedIn) {
      next();
    } else {
      next({ name: "signin" });
    }
  }
});

export default router;
