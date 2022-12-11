<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative overflow-hidden">
    <div class="mx-auto">
      <div class="relative z-10 bg-white lg:max-w-4xl lg:w-full">
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-96 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main
          class="mt-0 mx-auto max-w-7xl px-4 sm:mt-0 sm:px-6 md:mt-0 lg:mt-0 lg:px-8 xl:mt-0"
        >
          <div class="sm:text-center lg:text-left">
            <div class="p-8 sm:p-10 md:p-12 xl:p-16">
              <h1
                class="tracking-tight font-bold text-gray-900 text-4xl md:text-5xl"
              >
                <span class="xl:inline">For</span>
                {{ " " }}
                <span class="text-blue-500 xl:inline">Enthusiasts</span>
                <br />
                <span class="xl:inline">By</span>
                {{ " " }}
                <span class="text-blue-500 xl:inline">Enthusiasts</span>
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
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
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:ml-16 sm:ml-0"
        src="@/assets/images/race-cars/ferrari-rolex-24.jpg"
        alt="We Are Auto"
      />
    </div>
  </div>
  <div class="2xl:m-24 xl:m-18 lg:m-12 md:m-10 sm:m-4">
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 items-center">
      <div class="m-4 sm:m-0">
        <div class="videoWrapper">
          <iframe
            width="100%"
            height="349"
            src="https://www.youtube.com/embed/videoseries?list=PLraZMoJiSzQwsE1md-537OkILuQAcI1Px"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="m-10 sm:p-10">
        <div
          class="tracking-tight font-bold text-gray-900 text-3xl md:text-4xl"
        >
          The <span class="text-blue-500">We Are Auto Show</span>
        </div>
        <div class="text-base text-gray-500">
          A weekly show where we go deep into car news, culture, and interviews
          with fellow enthusiasts.
        </div>
        <dl class="mt-8 space-y-8">
          <div v-for="item in podcastFeatures" :key="item.id" class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white"
              >
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p
                class="mb-1 ml-16 text-lg font-semibold leading-6 text-gray-900"
              >
                {{ item.name }}
              </p>
            </dt>
            <dd class="ml-16 text-base text-gray-500">
              {{ item.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  <div
    class="relative px-4 py-14 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-r from-blue-400 to-blue-600"
  >
    <div class="absolute inset-0">
      <div class="h-1/3 sm:h-2/3" />
    </div>
    <latest-races />
  </div>
  <!-- <div>
    Fantasy Racing
  </div> -->
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

<style scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
