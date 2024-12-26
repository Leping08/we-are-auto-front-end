<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative overflow-hidden">
    <div class="mx-auto">
      <div class="relative z-10 bg-blue-500 dark:bg-gray-900 max-w-[100%] lg:max-w-[57%] lg:w-full">
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-96 text-blue-500 dark:text-gray-900 transform translate-x-1/2"
          fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main class="mt-0 mx-auto max-w-7xl px-4 sm:mt-0 sm:px-6 md:mt-0 lg:mt-0 lg:px-8 xl:mt-0">
          <div class="sm:text-center lg:text-left">
            <div class="p-8 sm:p-10 md:p-12 xl:p-16">
              <h1 class="tracking-tight font-bold text-gray-900 dark:text-white text-4xl md:text-5xl">
                <span class="xl:inline">For</span>
                {{ " " }}
                <span class="text-white dark:text-blue-400 xl:inline">Enthusiasts</span>
                <br />
                <span class="xl:inline">By</span>
                {{ " " }}
                <span class="text-white dark:text-blue-400 xl:inline">Enthusiasts</span>
              </h1>
              <p
                class="mt-3 text-base text-white dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We Are Auto is a community of car enthusiasts built for
                enthusiasts by enthusiasts. Weekly shows where we go deep into
                car news, culture, and interviews with fellow enthusiasts.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden sm:block">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:ml-16 sm:ml-0"
        src="@/assets/images/race-cars/ferrari-rolex-24.jpg" alt="We Are Auto" />
    </div>
  </div>
  <div class="bg-white dark:bg-gray-800">
    <div class="2xl:p-24 xl:p-18 lg:p-12 md:p-10 sm:p-4">
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div class="m-4 sm:m-0">
          <div class="aspect-video">
            <iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/videoseries?list=PLraZMoJiSzQwsE1md-537OkILuQAcI1Px"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="m-10 sm:p-10">
          <div class="tracking-tight font-bold text-gray-900 dark:text-gray-100 text-3xl md:text-4xl">
            The <span class="text-blue-500 dark:text-blue-400">We Are Auto Show</span>
          </div>
          <div class="text-base text-gray-500 dark:text-gray-300">
            A weekly show where we go deep into car news, culture, and interviews
            with fellow enthusiasts.
          </div>
          <dl class="mt-8 space-y-8">
            <div v-for="item in podcastFeatures" :key="item.id" class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white">
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="mb-1 ml-16 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  {{ item.name }}
                </p>
              </dt>
              <dd class="ml-16 text-base text-gray-500 dark:text-gray-300">
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
  <div
    class="relative px-4 py-14 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-gray-700 dark:to-blue-900">
    <latest-races />
  </div>
</template>

<script setup>
import latestRaces from "@/components/races/latestRaces.vue";
import news from "@/assets/icons/news.vue";
import people from "@/assets/icons/people.vue";
import shift from "@/assets/icons/car-shift-pattern.vue";

const podcastFeatures = [
  {
    id: 1,
    name: "News",
    description:
      "The latest auto industry news as well as whats going on in the racing world.",
    icon: news,
  },
  {
    id: 2,
    name: "Guests",
    description:
      "Conversations with a verity of guests from all corners of the automotive industry.",
    icon: people,
  },
  {
    id: 3,
    name: "Car Banter",
    description: "Simply car enthusiasts talking about car stuff.",
    icon: shift,
  },
];
</script>
