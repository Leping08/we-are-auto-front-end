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
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 items-center">
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
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 items-center">
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
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 items-center">
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
      flex
      items-center
      w-full
    "
  >
    <div class="w-1/2">
      <div class="text-2xl font-bold tracking-tight sm:text-4xl text-white">
        Want to listen instead?
      </div>
      <div class="text-md text-gray-100">
        You can listen to every episode on your podcast catcher of choice.
      </div>
    </div>
    <div class="flex items-center w-1/2 justify-center">
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
    </div>
  </div>

  <!-- <div class="m-6" v-if="loading">
      <template v-for="index in 5" :key="index">
        <div
          class="
            border border-blue-300
            shadow
            rounded-md
            w-full
            mx-auto
            m-4
            space-y-2
            animate-pulse
          "
        >
          <div class="flex items-center border-b p-4">
            <div class="pr-4">
              <play-circle-outline class="h-10 w-10 text-blue-500" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-blue-400 rounded w-full md:w-4/12"></div>
              <div class="h-2 bg-blue-400 rounded w-2/12"></div>
            </div>
          </div>
          <div class="flex p-4">
            <div class="flex-1 space-y-4">
              <div class="space-y-2">
                <div class="h-3 bg-blue-400 rounded"></div>
                <div class="h-3 bg-blue-400 rounded"></div>
                <div class="h-3 bg-blue-400 rounded w-3/6"></div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div> -->

  <!-- <div class="m-6" v-if="!loading">
      <template
        v-for="(podcast, index) in podcasts?.rss?.channel?.item"
        :key="podcast"
      >
        <div
          border
          padding
          @click="startPodcast(podcasts?.rss?.channel?.item?.length - index)"
          class="bg-white shadow-md rounded-lg my-4 cursor-pointer"
        >
          <div class="px-4 py-2 w-full relative">
            <div
              class="
                -ml-4
                -mt-2
                flex
                justify-between
                items-center
                flex-wrap
                sm:flex-nowrap
              "
            >
              <div class="ml-4 mt-4 flex items-center">
                <div class="pr-4">
                  <play-circle-outline class="h-10 w-10 text-blue-500" />
                </div>
                <div>
                  <h3
                    class="text-xl leading-6 font-medium text-gray-900"
                    :class="
                      withinTheLastSevenDays(podcast['pubDate']['#text'])
                        ? 'pr-12'
                        : ''
                    "
                  >
                    {{ podcast["itunes:title"]["#text"] }}
                  </h3>
                  <p class="mt-1 text-sm leading-5 text-gray-500">
                    {{ formatDate(podcast["pubDate"]["#text"]) }}
                  </p>
                </div>
              </div>
              <div
                v-if="withinTheLastSevenDays(podcast['pubDate']['#text'])"
                class="right-0 top-0 absolute p-4"
              >
                <div
                  class="
                    px-2
                    py-0.5
                    bg-blue-200
                    text-blue-800
                    rounded-full
                    text-sm
                  "
                >
                  New
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div> -->
</template>

<script>
import { shallowRef } from "vue";
import { mapMutations } from "vuex";
import { all } from "@/api/podcast/index.js";
import playCircleOutline from "@/assets/icons/play-circle-outline.vue";
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
export default {
  components: {
    playCircleOutline,
    applePodcast,
    googlePodcast,
    spotify,
  },
  data() {
    return {
      loading: false,
      podcasts: {},
      features: [
        {
          id: 1,
          name: "News",
          description:
            "The latest auto industry news as well as whats going on in the racing world.",
          icon: shallowRef(news),
        },
        {
          id: 2,
          name: "Interviews",
          description:
            "Conversations with a verity of guests from all corners of the automotive industry.",
          icon: shallowRef(people),
        },
        {
          id: 3,
          name: "Car Banter",
          description: "Simply car enthusiasts talking about car stuff.",
          icon: shallowRef(shift),
        },
      ],
      autoNews: [
        {
          id: 1,
          name: "New Car Releases",
          description:
            "The latest new car releases and what they mean for the competition.",
          icon: shallowRef(news),
        },
        {
          id: 2,
          name: "EV News",
          description: "Latest on new EV's to hit the market",
          icon: shallowRef(powerPlug),
        },
        {
          id: 3,
          name: "Industry Trends",
          description: "The latest industry changes and trends.",
          icon: shallowRef(trendingUp),
        },
      ],
      racingNews: [
        {
          id: 1,
          name: "Racing News",
          description: "The latest racing news and updates.",
          icon: shallowRef(shift),
        },
        {
          id: 3,
          name: "Review Previous Races",
          description: "A look at what happened in last weekends races.",
          icon: shallowRef(flagCheckered),
        },
        {
          id: 2,
          name: "Preview Upcoming Races",
          description: "A preview of what is coming up this weekend in racing.",
          icon: shallowRef(racingHelmet),
        },
      ],
      banter: [
        {
          id: 1,
          name: "Car Banter",
          description: "Just car guys talking about car stuff.",
          icon: shallowRef(waveform),
        },
        {
          id: 2,
          name: "Spots of the week",
          description:
            "The latest cars we spotted while we were out and about.",
          icon: shallowRef(mapMarker),
        },
        {
          id: 3,
          name: "I wish they would have",
          description: "",
          icon: shallowRef(pray),
        },
      ],
    };
  },
  async created() {
    this.loading = true;
    this.podcasts = await all();
    this.loading = false;
  },
  methods: {
    formatDate(date) {
      const number = Date.parse(date);
      return new Date(number).toLocaleDateString();
    },
    withinTheLastSevenDays(date) {
      // get last date of week
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      // if date is equal or within the first and last dates of the week
      const podcastDate = Date.parse(date);
      return podcastDate >= sevenDaysAgo;
    },
    startPodcast(showNumber) {
      this.selectPodcast(showNumber);
    },
    ...mapMutations("podcast", ["selectPodcast"]),
  },
};
</script>
