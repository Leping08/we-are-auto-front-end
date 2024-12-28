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
        src="@/assets/images/ferrari-rolex-24.jpg" alt="We Are Auto" />
    </div>
  </div>

  <div class="relative dark:bg-gray-800 bg-gray-100">
    <div class="lg:mx-auto lg:px-8 py-8 md:py-20 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-12">
      <div class="mt-12 sm:mt-16 lg:mt-0 hidden sm:flex items-center justify-center">
        <div class="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
          <images-carousel />
        </div>
      </div>
      <div class="relative max-w-xl mx-auto p-6 lg:p-0">
        <div>

          <h3 class="text-2xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl">
            It's like Netflix for gearheads
          </h3>
          <p class="mt-3 text-lg text-gray-500 dark:text-gray-400">
            Races from a variety of series around the world available anytime
            anywhere.
          </p>
  
          <dl class="mt-10 space-y-10">
            <div v-for="item in features" :key="item.id" class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white">
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                  {{ item.name }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </div>
        <router-link
          class="flex justify-end items-center m-4 text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white text-lg font-bold"
          tag="div"
          :to="{ name: 'races.filter' }"
          >
          <div class="">Start watching</div>
          <arrow class="h-8 ml-2" />
        </router-link>
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
import clockStart from "@/assets/icons/clock-start.vue";
import arrow from "@/assets/icons/arrow-right.vue";
import checkboxMarkedCircleOutline from "@/assets/icons/checkbox-marked-circle-outline.vue";
import formatListBulleted from "@/assets/icons/format-list-bulleted.vue";
import ImagesCarousel from "@/components/races/imagesCarousel.vue";

const features = [
  {
    id: 1,
    name: "Jump to start",
    description:
      "Jump directly to the start of the race skipping all of the pre race ceremonies.",
    icon: clockStart,
  },
  {
    id: 2,
    name: "Progress",
    description:
      "Done watching a race? Check it off to keep track all the races you have watched for a season.",
    icon: checkboxMarkedCircleOutline,
  },
  {
    id: 3,
    name: "Seasons",
    description:
      "Watch the races through a full season just like it happened live.",
    icon: formatListBulleted,
  },
];
</script>
