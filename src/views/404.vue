<template>
  <div class="py-16 flex items-center justify-center">
    <div class="w-1/2">
      <div class="p-4">
        <div
          class="
            text-2xl
            font-extrabold
            text-gray-900
            tracking-tight
            sm:text-4xl
          "
        >
          Seems like you are lost.
        </div>
        <div class="text-gray-500 font-lg font-semibold">
          At least you aren't these guys.
        </div>
      </div>
      <div>
        <img
          class="rounded-xl shadow-xl border"
          src="@/assets/images/car-stack.jpg"
          alt="We Are Auto"
        />
      </div>
      <div class="mt-12">
        <h2 class="text-md font-semibold text-gray-500 px-4">
          Lets get you back on track.
        </h2>
        <ul
          role="list"
          class="
            mt-4
            border-t border-b border-gray-200
            divide-y divide-gray-200
          "
        >
          <li v-for="(link, linkIdx) in links" :key="linkIdx" class="">
            <router-link
              tag="div"
              :to="{ name: link.route }"
              class="relative py-6 px-4 flex items-start space-x-4"
            >
              <div class="flex-shrink-0">
                <span
                  class="
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-lg
                    bg-gradient-to-r
                    from-blue-400
                    to-blue-600
                  "
                >
                  <component
                    :is="link.icon"
                    class="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span
                    class="
                      rounded-sm
                      focus-within:ring-2
                      focus-within:ring-offset-2
                      focus-within:ring-blue-600
                    "
                  >
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ link.title }}
                    </a>
                  </span>
                </h3>
                <p class="text-base text-gray-500">{{ link.description }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { shallowRef } from "vue";
import waveform from "@/assets/icons/waveform.vue";
import garage from "@/assets/icons/garage.vue";
import flag from "@/assets/icons/flag-checkered.vue";
export default {
  data() {
    return {
      links: [
        {
          title: "Home",
          route: "home.index",
          icon: shallowRef(garage),
          description: "For enthusiasts by enthusiasts.",
        },
        {
          title: "Podcast",
          route: "podcasts.index",
          icon: shallowRef(waveform),
          description:
            "The We Are Auto show is a podcast to keep up with auto industry and racing news.",
        },
        {
          title: "Races",
          route: "races.index",
          icon: shallowRef(flag),
          description:
            "Races from a variety of series around the world available anytime anywhere.",
        },
      ],
    };
  },
};
</script>
