<template>
  <div class="bg-white">
    <div class="relative">
      <div
        class="
          lg:mx-auto lg:px-8
          py-10
          lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24
          items-center
        "
      >
        <div class="relative max-w-xl mx-auto p-6 lg:p-0">
          <h3
            class="text-2xl font-bold text-gray-900 tracking-tight sm:text-4xl"
          >
            The <span class="text-blue-500">We Are Auto Show</span>
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            A weekly show covering auto news, racing news, car spots, interviews
            and just plain old car banter.
          </p>

          <dl class="mt-8 space-y-8">
            <div v-for="item in features" :key="item.id" class="relative">
              <dt>
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    bg-gradient-to-r
                    from-blue-400
                    to-blue-600
                    text-white
                  "
                >
                  <component
                    :is="item.icon"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <p
                  class="
                    mb-1
                    ml-16
                    text-lg
                    font-semibold
                    leading-6
                    text-gray-900
                  "
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
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div
            class="
              pl-4
              -mr-48
              sm:pl-6
              md:-mr-16
              lg:px-0 lg:m-0 lg:relative lg:h-full
            "
          >
            <img
              class="
                w-full
                rounded-xl
                shadow-xl
                ring-1 ring-blue ring-opacity-5
                m-2
              "
              src="@/assets/images/mics.jpg"
              alt="We Are Auto Show"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="2xl:p-24 xl:p-18 lg:p-12 md:p-10 sm:p-4 bg-gray-100">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      <div class="m-4 sm:m-0">
        <div class="videoWrapper">
          <iframe
            width="100%"
            height="349"
            src="https://www.youtube.com/embed/videoseries?list=PLraZMoJiSzQwM_SUHOZ7aBm-F4cSSmlJp"
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
          Latest <span class="text-blue-500">Auto News</span>
        </div>
        <div class="text-base text-gray-500 mt-2">
          The latest news, updates and trends from around the auto industry.
        </div>
        <dl class="mt-8 space-y-8">
          <div v-for="item in autoNews" :key="item.id" class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-gradient-to-r
                  from-blue-400
                  to-blue-600
                  text-white
                "
              >
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p
                class="mb-1 ml-16 text-lg font-semibold leading-6 text-gray-800"
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

  <div class="2xl:p-24 xl:p-18 lg:p-12 md:p-10 sm:p-4 bg-white">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      <div class="m-10 sm:p-10">
        <div
          class="tracking-tight font-bold text-gray-900 text-3xl md:text-4xl"
        >
          Latest <span class="text-blue-500">Racing News</span>
        </div>
        <div class="text-base text-gray-500 mt-2">
          Checkout the latest news from around the racing world.
        </div>
        <dl class="mt-8 space-y-8">
          <div v-for="item in racingNews" :key="item.id" class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-gradient-to-r
                  from-blue-400
                  to-blue-600
                  text-white
                "
              >
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p
                class="mb-1 ml-16 text-lg font-semibold leading-6 text-gray-800"
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
      <div class="m-4 sm:m-0">
        <div class="videoWrapper">
          <iframe
            width="100%"
            height="349"
            src="https://www.youtube.com/embed/videoseries?list=PLraZMoJiSzQwMliZS3Sk1UOizSgKw_nyD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <div class="2xl:p-24 xl:p-18 lg:p-12 md:p-10 sm:p-4 bg-gray-100">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      <div class="m-4 sm:m-0">
        <div class="videoWrapper">
          <iframe
            width="100%"
            height="349"
            src="https://www.youtube.com/embed/videoseries?list=PLraZMoJiSzQzTgQZN6yPra35sjOY_4D9i"
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
          Latest <span class="text-blue-500">Car Banter</span>
        </div>
        <div class="text-base text-gray-500 mt-2">
          If you are a car guy you know the deal. Just car guys talking about
          car stuff.
        </div>
        <dl class="mt-8 space-y-8">
          <div v-for="item in banter" :key="item.id" class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-gradient-to-r
                  from-blue-400
                  to-blue-600
                  text-white
                "
              >
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p
                class="mb-1 ml-16 text-lg font-semibold leading-6 text-gray-800"
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
    class="
      relative
      px-4
      py-14
      sm:px-6
      lg:py-20 lg:px-8
      bg-gradient-to-r
      from-blue-400
      to-blue-600
      flex flex-col
      md:flex-row
      items-center
      w-full
    "
  >
    <div>
      <div class="text-2xl font-bold tracking-tight sm:text-4xl text-white">
        Want to listen instead?
      </div>
      <div class="text-md text-gray-100">
        You can listen to every episode on your podcast catcher of choice.
      </div>
    </div>
    <div class="flex items-center w-full justify-center">
      <div class="bg-white p-1 rounded-full m-4">
        <a
          href="https://podcasts.apple.com/us/podcast/we-are-auto/id1557884758?i=1000527608218"
          target="_blank"
        >
          <apple-podcast class="h-14 w-14 p-2" />
        </a>
      </div>
      <div class="bg-white p-1 rounded-full m-4">
        <a
          href="https://podcasts.google.com/feed/aHR0cHM6Ly93ZWFyZWF1dG8ubGlic3luLmNvbS9yc3M"
          target="_blank"
        >
          <google-podcast class="h-14 w-14 p-2" />
        </a>
      </div>
      <div class="bg-white p-1 rounded-full m-4">
        <a
          href="https://open.spotify.com/show/1ePLe4BB9nUGBWGVfpx14q?si=D_FQ3Ap-S-iKfaSetQML1g&dl_branch=1"
          target="_blank"
        >
          <spotify class="h-14 w-14" />
        </a>
      </div>
      <!-- todo find svg logo -->
      <div class="bg-white p-0 rounded-full m-4">
        <a href="https://www.stitcher.com/show/we-are-auto" target="_blank">
          <img
            src="@/assets/images/podcast-players/stitcher-logo.png"
            class="h-16 w-16"
          />
        </a>
      </div>
      <div class="bg-white p-2 rounded-full m-4">
        <a
          href="https://www.pandora.com/podcast/we-are-auto/PC:1001025983"
          target="_blank"
        >
          <pandora class="h-12 w-12" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import news from "@/assets/icons/news.vue";
import people from "@/assets/icons/people.vue";
import powerPlug from "@/assets/icons/power-plug-outline.vue";
import flagCheckered from "@/assets/icons/flag-checkered.vue";
import racingHelmet from "@/assets/icons/racing-helmet.vue";
import waveform from "@/assets/icons/waveform.vue";
import mapMarker from "@/assets/icons/map-marker.vue";
import pray from "@/assets/icons/hands-pray.vue";
import trendingUp from "@/assets/icons/trending-up.vue";
import shift from "@/assets/icons/car-shift-pattern.vue";
import applePodcast from "@/assets/icons/apple-podcast.vue";
import googlePodcast from "@/assets/icons/google-podcast.vue";
import spotify from "@/assets/icons/spotify.vue";
import pandora from "@/assets/icons/pandora.vue";

const features = [
  {
    id: 1,
    name: "News",
    description:
      "The latest auto industry news as well as whats going on in the racing world.",
    icon: news,
  },
  {
    id: 2,
    name: "Interviews",
    description:
      "Conversations with a verity of guests from all corners of the automotive industry.",
    icon: people,
  },
  {
    id: 3,
    name: "Car Banter",
    description: "Simply car enthusiasts talking about car stuff.",
    icon: waveform,
  },
];

const autoNews = [
  {
    id: 1,
    name: "New Car Releases",
    description:
      "The latest new car releases and what they mean for the competition.",
    icon: news,
  },
  {
    id: 2,
    name: "EV News",
    description: "Latest on new EV's to hit the market",
    icon: powerPlug,
  },
  {
    id: 3,
    name: "Industry Trends",
    description: "The latest industry changes and trends.",
    icon: trendingUp,
  },
];

const racingNews = [
  {
    id: 1,
    name: "Racing News",
    description: "The latest racing news and updates.",
    icon: shift,
  },
  {
    id: 3,
    name: "Review Previous Races",
    description: "A look at what happened in last weekends races.",
    icon: flagCheckered,
  },
  {
    id: 2,
    name: "Preview Upcoming Races",
    description: "A preview of what is coming up this weekend in racing.",
    icon: racingHelmet,
  },
];

const banter = [
  {
    id: 1,
    name: "Car Banter",
    description: "Just car guys talking about car stuff.",
    icon: waveform,
  },
  {
    id: 2,
    name: "Spots of the week",
    description:
      "The latest cars we spotted while we were out and about.",
    icon: mapMarker,
  },
  {
    id: 3,
    name: "I wish they would have",
    description: "What do you wish they would have?",
    icon: pray,
  },
];
</script>
