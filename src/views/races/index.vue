<template>
  <div>
    <!-- Alternating Feature Sections -->
    <div class="relative overflow-hidden">
      <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48" />
      <div class="relative">
        <div
          class="
            lg:mx-auto lg:px-8
            py-20
            lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24
          "
        >
          <div class="relative max-w-xl mx-auto p-6 lg:p-0">
            <h3
              class="
                text-2xl
                font-extrabold
                text-gray-900
                tracking-tight
                sm:text-4xl
              "
            >
              It's like Netflix for gearheads
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              Races from a variety of series around the world available anytime
              anywhere.
            </p>

            <dl class="mt-10 space-y-10">
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
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
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
                  ring-1 ring-black ring-opacity-5
                  lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none
                "
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                alt="Inbox user interface"
              />
            </div>
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
        "
      >
        <div class="absolute inset-0">
          <div class="h-1/3 sm:h-2/3" />
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              Latest Races
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-blue-200 sm:mt-4">
              Check out a few of the latest races.
            </p>
          </div>

          <div
            class="
              mt-12
              max-w-lg
              mx-auto
              grid
              gap-5
              lg:grid-cols-3 lg:max-w-none
            "
            v-if="loadingLatestRaces"
          >
            <div v-for="index in 3" :key="index" class="flex flex-col">
              <div
                class="
                  bg-white
                  w-full
                  h-90
                  rounded-lg
                  shadow-lg
                  overflow-hidden
                "
              >
                <div class="h-64 bg-gray-300 relative animate-pulse">
                  <div
                    class="
                      absolute
                      bottom-0
                      left-0
                      h-12
                      w-24
                      -my-5
                      ml-6
                      bg-gray-400
                      rounded-full
                    "
                  ></div>
                  <div
                    class="
                      absolute
                      bottom-0
                      right-0
                      -my-5
                      mr-6
                      h-10
                      w-10
                      bg-gray-400
                      rounded-full
                    "
                  ></div>
                </div>
                <div class="p-6 grid space-y-2 mt-4 animate-pulse">
                  <div class="h-4 w-1/2 bg-gray-500 rounded-full"></div>
                  <div class="h-4 w-1/3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="
              mt-12
              max-w-lg
              mx-auto
              grid
              gap-5
              lg:grid-cols-3 lg:max-w-none
            "
            v-if="!loadingLatestRaces"
          >
            <router-link
              tag="div"
              :to="{ name: 'races.show', params: { id: race.id } }"
              v-for="race in races"
              :key="race.id"
              class="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div class="relative">
                <div class="absolute right-2 top-2 z-20">
                  <v-badge color="blue"> New </v-badge>
                </div>
                <img
                  class="
                    h-64
                    w-full
                    object-cover
                    transform
                    hover:scale-110
                    duration-100
                    ease-in-out
                  "
                  :src="`https://img.youtube.com/vi/${race.videos[0].video_id}/maxresdefault.jpg`"
                  alt=""
                />
                <div class="absolute right-0 bottom-0 -my-5 mr-6">
                  <play-progress :percentage="35" />
                </div>

                <div class="absolute left-0 bottom-0 -my-6 ml-6">
                  <series-pill :series="race.series" :year="race.season.name" />
                </div>
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <div class="block mt-2">
                    <div class="text-xl font-semibold text-gray-900">
                      {{ race.name }}
                    </div>
                    <div class="text-sm text-gray-400">
                      {{ race.track.name }}
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div
            class="
              flex
              justify-end
              items-center
              m-4
              text-blue-200 text-lg
              font-bold
            "
          >
            <div class="">View all</div>
            <arrow class="h-8 ml-2" />
          </div>
        </div>
      </div>
      <!-- <div class="mt-24">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                  <SparklesIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                  Better understand your customers
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div class="mt-6">
                  <a href="#" class="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg" alt="Customer profile user interface" />
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { shallowRef } from "vue";
import Race from "@/api/races";
import flag from "@/assets/icons/flag-checkered.vue";
import clockStart from "@/assets/icons/clock-start.vue";
import checkboxMarkedCircleOutline from "@/assets/icons/checkbox-marked-circle-outline.vue";
import formatListBulleted from "@/assets/icons/format-list-bulleted.vue";
import arrow from "@/assets/icons/arrow-right.vue";
import play from "@/assets/icons/play.vue";
import playProgress from "@/components/playProgress.vue";
import seriesPill from "@/components/series/pill.vue";
export default {
  components: {
    flag,
    arrow,
    play,
    playProgress,
    seriesPill,
  },
  data() {
    return {
      races: [],
      loadingLatestRaces: true,
      features: [
        {
          id: 1,
          name: "Jump to start",
          description:
            "Jump directly to the start of the race skipping all of the pre race ceremonies.",
          icon: shallowRef(clockStart),
        },
        {
          id: 2,
          name: "Progress",
          description:
            "Done watching a race? Check it off to keep track all the races you have watched for a season.",
          icon: shallowRef(checkboxMarkedCircleOutline),
        },
        {
          id: 3,
          name: "Seasons",
          description:
            "Watch the races through a full season just like it happened live.",
          icon: shallowRef(formatListBulleted),
        },
      ],
    };
  },
  created() {
    this.getLatestRaces();
  },
  methods: {
    async getLatestRaces() {
      try {
        this.loadingLatestRaces = true;
        ({ data: this.races } = await new Race().latest(3));
        this.loadingLatestRaces = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
