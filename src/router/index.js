import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home.index",
    component: () =>
      import(/* webpackChunkName: "home.index" */ "@/views/home/index.vue"),
    meta: {
      title: "We Are Auto | Weekly Podcasts, Watch Full Length Races Online",
      metaTags: [
        {
          name: "description",
          content:
            "We Are Auto consists of weekly shows where we go deep into car news, racing new, car culture, and interviews with fellow enthusiasts.",
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
      title:
        "We Are Auto Show | Podcast About Car News, Racing New, & Car Culture",
      metaTags: [
        {
          name: "description",
          content:
            "Watch and listen a weekly podcast about car news, racing new, and car culture.",
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
      title: "We Are Auto | Watch Free Full Length Automotive Races Online",
      metaTags: [
        {
          name: "description",
          content:
            "Watch full length automotive races online for free including IMSA, WEC, SRO, ELMS.",
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
      title: "We Are Auto | Watch Full Length Automotive Races Online for Free",
      metaTags: [
        {
          name: "description",
          content:
            "Watch full length sports car races online for free including MX-5 Cup, 24H, Trans Am",
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
      title: "Sports car racing", // this will get overridden in the show.vue component
      metaTags: [
        {
          name: "description",
          content: "Watch sports car racing from around the world.", // this will get overridden in the show.vue component
        },
      ],
    },
  },
  {
    path: "/races/random",
    name: "races.random",
    component: () =>
      import(/* webpackChunkName: "races.random" */ "@/views/races/random.vue"),
    meta: {
      title: "We Are Auto | Random Race | Watch Full Length Racing Videos",
      metaTags: [
        {
          name: "description",
          content:
            "Watch a random full length automotive race online for free.",
        },
      ],
    },
  },
  {
    path: "/privacy-policy",
    name: "legal.privacy-policy",
    component: () =>
      import(
        /* webpackChunkName: "legal.privacy-policy" */ "@/views/legal/privacyPolicy.vue"
      ),
    meta: {
      title: "We Are Auto Privacy Policy",
      metaTags: [
        {
          name: "description",
          content: "Read the We Are Auto privacy policy.",
        },
      ],
    },
  },
  {
    path: "/terms-and-conditions",
    name: "legal.terms-and-conditions",
    component: () =>
      import(
        /* webpackChunkName: "legal.terms-and-conditions" */ "@/views/legal/termsAndConditions.vue"
      ),
    meta: {
      title: "We Are Auto Terms and Conditions",
      metaTags: [
        {
          name: "description",
          content: "Read the We Are Auto terms and conditions.",
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
      title: "We Are Auto | Login To Watch Full Length Racing Videos",
      metaTags: [
        {
          name: "description",
          content:
            "Login to track progress of watching full length racing videos online for free.",
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
    path: "/forgot-password",
    name: "auth.forgot-password",
    component: () =>
      import(
        /* webpackChunkName: "auth.forgotPassword" */ "@/views/auth/forgotPassword.vue"
      ),
    meta: {
      title: "We Are Auto | Forgot Account Password",
      metaTags: [
        {
          name: "description",
          content:
            "Forgot password on We Are Auto account to watch full length racing videos online.",
        },
      ],
    },
  },
  {
    path: "/password-reset/email/:email/token/:token",
    name: "auth.reset-password",
    component: () =>
      import(
        /* webpackChunkName: "auth.resetPassword" */ "@/views/auth/resetPassword.vue"
      ),
    meta: {
      title: "We Are Auto | Account Password Reset",
      metaTags: [
        {
          name: "description",
          content:
            "Reset We Are Auto account password to watch full length racing videos online.",
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
      title:
        "We Are Auto | Register To Track and Watch Full Length Racing Videos",
      metaTags: [
        {
          name: "description",
          content:
            "Register to track progress of watching full length racing videos online.",
        },
      ],
    },
  },
  {
    path: "/users/profile",
    name: "users.profile",
    component: () =>
      import(/* webpackChunkName: "users.index" */ "@/views/users/index.vue"),
    meta: {
      title: "We Are Auto | Profile",
      requiresAuth: true,
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
    name: "obs.one-frame",
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
      title: "We Are Auto | 404 Page Not Found",
      metaTags: [
        {
          name: "description",
          content: "Looks like you are lost. Lets get you back on track.",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // this route requires auth, check if logged in
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!window.localStorage.access_token) {
      next({
        path: "/logout",
      });
    }
  }

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
