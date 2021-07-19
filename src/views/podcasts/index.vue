<template>
  <div class="p-6">
    <div class="flex justify-between items-center">
      <div class="text-xl font-bold text-gray-900 sm:text-2xl sm:truncate">
        We Are Auto Show
      </div>
      <div class="flex text-gray-600 space-x-2">
        <a
          href="https://podcasts.apple.com/us/podcast/we-are-auto/id1557884758?i=1000527608218"
          target="_blank"
        >
          <apple-podcast class="h-6 w-6" />
        </a>
        <a
          href="https://podcasts.google.com/feed/aHR0cHM6Ly93ZWFyZWF1dG8ubGlic3luLmNvbS9yc3M"
          target="_blank"
        >
          <google-podcast class="h-6 w-6" />
        </a>
        <a
          href="https://open.spotify.com/show/1ePLe4BB9nUGBWGVfpx14q?si=D_FQ3Ap-S-iKfaSetQML1g&dl_branch=1"
          target="_blank"
        >
          <spotify class="h-6 w-6" />
        </a>
      </div>
    </div>
    <div v-if="loading">
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
    </div>

    <div v-if="!loading">
      <template
        v-for="(podcast, index) in podcasts?.rss?.channel?.item"
        :key="podcast"
      >
        <v-card
          @click="startPodcast(podcasts?.rss?.channel?.item?.length - index)"
          class="my-4 cursor-pointer"
        >
          <template #header>
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
          </template>

          <div class="text-gray-600 p-2">
            {{ podcast["itunes:summary"]["#text"] }}
          </div>
        </v-card>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { all } from "@/api/podcast/index.js";
import playCircleOutline from "@/assets/icons/play-circle-outline.vue";
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
