<template>
  <div class="py-16 px-4 flex items-center justify-center dark:bg-gray-900">
    <div class="w-full lg:w-1/2">
      <div class="p-4">
        <div
          class="text-2xl text-gray-900 sm:text-4xl dark:text-gray-100"
        >
          Seems like you are lost.
        </div>
        <div class="text-gray-500 dark:text-gray-400">
          At least you aren't these guys.
        </div>
      </div>
      <div>
        <img
          class="rounded-xl shadow-xl border dark:border-gray-700"
          src="@/assets/images/car-stack.jpg"
          alt="We Are Auto"
        />
      </div>
      <div class="mt-12">
        <h2 class="text-md text-gray-500 px-4 dark:text-gray-400">
          Lets get you back on track.
        </h2>
        <ul
          role="list"
          class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
        >
          <li v-for="(link, linkIdx) in links" :key="linkIdx" class="">
            <router-link
              tag="div"
              :to="{ name: link.route }"
              class="relative py-6 px-4 flex items-start space-x-4 dark:hover:bg-gray-800"
            >
              <div class="flex-shrink-0">
                <span
                  class="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"
                >
                  <component
                    :is="link.icon"
                    class="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base text-gray-900 dark:text-gray-100">
                  <span
                    class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-600 dark:focus-within:ring-blue-400"
                  >
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ link.title }}
                    </a>
                  </span>
                </h3>
                <p class="text-base text-gray-500 dark:text-gray-400">{{ link.description }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import waveform from "@/assets/icons/waveform.vue";
import garage from "@/assets/icons/garage.vue";
import flag from "@/assets/icons/flag-checkered.vue";

const links = [
  {
    title: "Home",
    route: "home.index",
    icon: garage,
    description: "For enthusiasts by enthusiasts.",
  },
  {
    title: "Races",
    route: "races.filter",
    icon: flag,
    description:
      "Races from a variety of series around the world available anytime anywhere.",
  }
];
</script>
