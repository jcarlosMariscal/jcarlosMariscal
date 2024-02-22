import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutMeViewVue from "@/views/AboutMeView.vue";
import ProjectsViewVue from "@/views/ProjectsView.vue";
import TechnologiesViewVue from "@/views/TechnologiesView.vue";
import ContactViewVue from "@/views/ContactView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-me",
    name: "about-me",
    component: AboutMeViewVue,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsViewVue,
  },
  {
    path: "/technologies",
    name: "technologies",
    component: TechnologiesViewVue,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactViewVue,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
