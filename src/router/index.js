import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home.index",
    component: () =>
      import(/* webpackChunkName: "home.index" */ "../views/home/index.vue"),
  },
  {
    path: "/podcasts",
    name: "podcasts.index",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "podcast.index" */ "../views/podcasts/index.vue"
      ),
  },
  {
    path: "/fantasy",
    name: "fantasy.index",
    component: () =>
      import(
        /* webpackChunkName: "fantasy.index" */ "../views/fantasy/index.vue"
      ),
  },
  {
    path: "/races",
    name: "races.index",
    component: () =>
      import(/* webpackChunkName: "races.index" */ "../views/races/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
