import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home.index",
    component: () =>
      import(/* webpackChunkName: "home.index" */ "@/views/home/index.vue"),
    meta: {
      title: "We Are Auto",
      metaTags: [
        {
          name: "description",
          content:
            "We Are Auto is a community of people who are passionate about everything automotive.",
        },
      ],
    },
  },
  {
    path: "/podcasts",
    name: "podcasts.index",
    component: () =>
      import(
        /* webpackChunkName: "podcast.index" */ "@/views/podcasts/index.vue"
      ),
    meta: {
      requiresAuth: true,
      title: "We Are Auto Show",
      metaTags: [
        {
          name: "description",
          content: "Watch and listen to the we are auto show.",
        },
      ],
    },
  },
  {
    path: "/fantasy",
    name: "fantasy.index",
    component: () =>
      import(
        /* webpackChunkName: "fantasy.index" */ "@/views/fantasy/index.vue"
      ),
    meta: {
      title: "Fantasy sports car racing",
      metaTags: [
        {
          name: "description",
          content: "Fantasy sports car racing.",
        },
      ],
    },
  },
  {
    path: "/races/filter",
    name: "races.filter",
    component: () =>
      import(/* webpackChunkName: "races.filter" */ "@/views/races/filter.vue"),
    meta: {
      title: "Sports car racing",
      metaTags: [
        {
          name: "description",
          content: "Watch sports car racing from around the world.",
        },
      ],
    },
  },
  {
    path: "/races",
    name: "races.index",
    component: () =>
      import(/* webpackChunkName: "races.index" */ "@/views/races/index.vue"),
    meta: {
      title: "Auto racing",
      metaTags: [
        {
          name: "description",
          content: "Watch sports car racing from around the world.",
        },
      ],
    },
  },
  {
    path: "/races/:id(\\d+)/:text(.*)*",
    name: "races.show",
    component: () =>
      import(/* webpackChunkName: "races.show" */ "@/views/races/show.vue"),
    meta: {
      title: "Sports car racing",
      metaTags: [
        {
          name: "description",
          content: "Watch sports car racing from around the world.",
        },
      ],
    },
  },
  {
    path: "/login",
    name: "auth.login",
    component: () =>
      import(/* webpackChunkName: "auth.login" */ "@/views/auth/login.vue"),
    meta: {
      title: "We Are Auto - Login",
      metaTags: [
        {
          name: "description",
          content: "Login to We Are Auto website.",
        },
      ],
    },
  },
  {
    path: "/logout",
    name: "auth.logout",
    component: () =>
      import(/* webpackChunkName: "auth.logout" */ "@/views/auth/logout.vue"),
    meta: {
      title: "We Are Auto - Logout",
      metaTags: [
        {
          name: "description",
          content: "Logout to We Are Auto website.",
        },
      ],
    },
  },
  {
    path: "/register",
    name: "auth.register",
    component: () =>
      import(
        /* webpackChunkName: "auth.register" */ "@/views/auth/register.vue"
      ),
    meta: {
      title: "We Are Auto - Register",
      metaTags: [
        {
          name: "description",
          content: "Sign up for the We Are Auto.",
        },
      ],
    },
  },
  {
    path: "/users/profile",
    name: "users.profile",
    component: () =>
      import(
        /* webpackChunkName: "users.profile" */ "@/views/users/profile.vue"
      ),
    meta: {
      title: "Profile",
      metaTags: [
        {
          name: "description",
          content: "Profile page.",
        },
      ],
    },
  },
  {
    path: "/obs",
    name: "obs.one-person",
    meta: {
      disable_nav: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "obs.in-person.one-frame" */ "@/views/obs/in-person/one-frame.vue"
      ),
  },
  {
    path: "/obs/interview",
    name: "obs.interview",
    meta: {
      disable_nav: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "obs.in-person.one-frame" */ "@/views/obs/in-person/interview.vue"
      ),
  },
  {
    path: "/obs/browser",
    name: "obs.browser",
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
  // {
  //   path: "/obs",
  //   name: "obs",
  //   meta: {
  //     disable_nav: true,
  //   },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "obs.two-people" */ "@/views/obs/two-people.vue"
  //     ),
  // },
  // {
  //   path: "/obs/guest",
  //   name: "obs.guest",
  //   meta: {
  //     disable_nav: true,
  //   },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "auth.register" */ "@/views/obs/three-people.vue"
  //     ),
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
    meta: {
      title: "404 - Not Found",
      metaTags: [
        {
          name: "description",
          content: "Page not found.",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
