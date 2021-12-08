import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home.index",
    component: () =>
      import(/* webpackChunkName: "home.index" */ "@/views/home/index.vue"),
  },
  {
    path: "/podcasts",
    name: "podcasts.index",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "podcast.index" */ "@/views/podcasts/index.vue"
      ),
  },
  {
    path: "/fantasy",
    name: "fantasy.index",
    component: () =>
      import(
        /* webpackChunkName: "fantasy.index" */ "@/views/fantasy/index.vue"
      ),
  },
  {
    path: "/races/filter",
    name: "races.filter",
    component: () =>
      import(/* webpackChunkName: "races.filter" */ "@/views/races/filter.vue"),
  },
  {
    path: "/races",
    name: "races.index",
    component: () =>
      import(/* webpackChunkName: "races.index" */ "@/views/races/index.vue"),
  },
  {
    path: "/races/:id(\\d+)",
    name: "races.show",
    component: () =>
      import(/* webpackChunkName: "races.show" */ "@/views/races/show.vue"),
  },
  {
    path: "/login",
    name: "auth.login",
    component: () =>
      import(/* webpackChunkName: "auth.login" */ "@/views/auth/login.vue"),
  },
  {
    path: "/register",
    name: "auth.register",
    component: () =>
      import(
        /* webpackChunkName: "auth.register" */ "@/views/auth/register.vue"
      ),
  },
  {
    path: "/obs",
    name: "obs",
    meta: {
      disable_nav: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "obs.two-people" */ "@/views/obs/two-people.vue"
      ),
  },
  {
    path: "/obs/in-person",
    name: "obs",
    meta: {
      disable_nav: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "obs.in-person.one-frame" */ "@/views/obs/in-person/one-frame.vue"
      ),
  },
  {
    path: "/obs/browser",
    name: "obs",
    meta: {
      disable_nav: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "obs.in-person.browser" */ "@/views/obs/in-person/browser.vue"
      ),
  },
  {
    path: "/obs/particles",
    name: "obs.particles",
    meta: {
      disable_nav: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "obs.particles" */ "@/views/obs/particles.vue"
      ),
  },
  {
    path: "/obs/guest",
    name: "obs.guest",
    meta: {
      disable_nav: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "auth.register" */ "@/views/obs/three-people.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
