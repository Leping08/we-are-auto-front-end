<template>
  <div class="flex-none md:flex p-5 overflow-visible bg-gradient-to-br from-blue-400 to-blue-600 dark:from-gray-700 dark:to-blue-900 min-h-screen">
    <div
      v-if="loadingRaceData"
      class="bg-white dark:bg-gray-800 shadow-md rounded-lg w-full"
    >
      <div class="p-4 grid space-y-2 animate-pulse">
        <div class="h-4 w-1/3 bg-gray-500 dark:bg-gray-700 rounded-full"></div>
        <div class="h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>
      <div class="aspect-video bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      <div class="flex p-4 animate-pulse items-center">
        <div class="h-10 w-10 bg-gray-500 dark:bg-gray-700 rounded-full"></div>
        <div class="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded-full ml-4"></div>
      </div>
    </div>

    <div
      v-if="loadingRaceData"
      class="bg-white dark:bg-gray-800 shadow-md rounded-lg z-10 ml-0 md:ml-8 w-full md:w-20 pt-2 md:pt-0 mt-4 md:mt-0"
    >
      <div
        class="h-10 w-10 bg-gray-300 dark:bg-gray-600 animate-pulse mx-4 mt-4 mb-6 rounded-full relative"
      ></div>
      <div
        class="h-10 w-10 bg-gray-300 dark:bg-gray-600 animate-pulse mx-4 mt-4 mb-10 rounded-full relative"
      >
        <div
          class="absolute animate-pulse top-12 left-5 h-6 w-0.5 bg-gray-200 dark:bg-gray-500"
        ></div>
      </div>
      <div
        class="h-10 w-10 bg-gray-300 dark:bg-gray-600 animate-pulse mx-4 mt-4 mb-10 rounded-full relative"
      >
        <div
          class="absolute animate-pulse top-12 left-5 h-6 w-0.5 bg-gray-200 dark:bg-gray-500"
        ></div>
      </div>
      <div
        class="h-10 w-10 bg-gray-300 dark:bg-gray-600 animate-pulse mx-4 mt-4 mb-10 rounded-full relative"
      >
        <div
          class="absolute animate-pulse top-12 left-5 h-6 w-0.5 bg-gray-200 dark:bg-gray-500"
        ></div>
      </div>
      <div
        class="h-10 w-10 bg-gray-300 dark:bg-gray-600 animate-pulse mx-4 mt-4 mb-10 rounded-full relative"
      >
        <div
          class="absolute animate-pulse top-12 left-5 h-6 w-0.5 bg-gray-200 dark:bg-gray-500"
        ></div>
      </div>
      <div
        class="h-10 w-10 bg-gray-300 dark:bg-gray-600 animate-pulse mx-4 mt-4 mb-10 rounded-full relative"
      >
        <div
          class="absolute animate-pulse top-12 left-5 h-6 w-0.5 bg-gray-200 dark:bg-gray-500"
        ></div>
      </div>
      <div
        class="h-10 w-10 bg-gray-300 dark:bg-gray-600 animate-pulse mx-4 mt-4 mb-4 rounded-full relative"
      ></div>
    </div>

    <div
      v-if="!loadingRaceData && race.length && races.length"
      class="bg-white dark:bg-gray-800 shadow-md rounded-lg row-span-2 col-span-3 w-full"
    >
      <div class="px-4 py-2">
        <div
          class="-ml-4 -mt-2 flex justify-between items-center flex-wrap sm:flex-nowrap"
        >
          <div class="ml-4 mt-4">
            <h3 class="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
              {{ race.name }}
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400">
              {{ race.track.name }}
            </p>
          </div>
          <div class="flex items-center">
            <!-- <div v-if="user" class="ml-4">
              <tooltip>
                <movie-open-play-outline
                  @click="resumeVideo()"
                  class="
                    h-6
                    w-6
                    text-gray-400 dark:text-gray-300
                    hover:text-blue-500
                    cursor-pointer
                  "
                />
                <template #tooltip-content>
                  <div class="text-sm leading-5 text-gray-500 dark:text-gray-400">Resume</div>
                </template>
              </tooltip>
            </div> -->
            <div class="flex items-center ml-4">
              <star-rating 
                v-model="raceRating" 
                :can-rate="!!user" 
                @update:model-value="rateRace" 
              />
            </div>
            <div v-if="race?.videos?.length >= 1" class="ml-4">
              <tooltip>
                <clock-start
                  @click="jumpToStart()"
                  class="h-6 w-6 text-gray-400 dark:text-gray-300 hover:text-blue-500 cursor-pointer"
                />
                <template #tooltip-content>
                  <div class="text-sm leading-5 text-gray-500 dark:text-gray-400 w-20">
                    Race start
                  </div>
                </template>
              </tooltip>
            </div>
            <div v-if="user && race?.videos?.length >= 1" class="ml-4">
              <v-progress-spinner
                v-if="loadingMarkWatched"
                :size="5"
                color="blue"
              />
              <div v-if="watchedProgress < 99">
                <tooltip v-if="!loadingMarkWatched">
                  <check-circle-outline
                    @click="markWatched"
                    class="h-6 w-6 text-gray-400 dark:text-gray-300 hover:text-blue-500 cursor-pointer"
                  />
                  <template #tooltip-content>
                    <div class="text-sm leading-5 text-gray-500 dark:text-gray-400 w-24">
                      Mark watched
                    </div>
                  </template>
                </tooltip>
              </div>
              <div v-else>
                <tooltip v-if="!loadingMarkWatched">
                  <check-circle-outline
                    @click="markUnwatched"
                    class="h-6 w-6 text-green-500 dark:text-green-400 hover:text-blue-500 cursor-pointer"
                  />
                  <template #tooltip-content>
                    <div class="text-sm leading-5 text-gray-500 dark:text-gray-400 w-28">
                      Mark unwatched
                    </div>
                  </template>
                </tooltip>
              </div>
            </div>
            <div v-if="user" class="ml-4">
              <tooltip>
                <chat-alert-outline
                  @click="showProblemForm = !showProblemForm"
                  class="h-6 w-6 text-gray-400 dark:text-gray-300 hover:text-blue-500 cursor-pointer"
                />
                <template #tooltip-content>
                  <div class="text-sm leading-5 text-gray-500 dark:text-gray-400 w-28">
                    Report problem
                  </div>
                </template>
              </tooltip>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showProblemForm" class="p-4 border-gray-200 dark:border-gray-700 border-t-2">
        <report-problem :race="race" />
      </div>
      <div
        v-if="raceState(race) === 'video'"
        id="wrapper"
        class="aspect-video"
      >
        <div id="player"></div>
      </div>
      <div v-if="raceState(race) === 'add'">
        <!-- Check if authenticated here -->
        <suggestion :race="race" />
      </div>

      <!-- @todo update this to look better -->
      <!-- @todo figure out the loading state on initial page load -->
      <div v-if="raceState(race) === 'locked'">
        <div class="text-gray-900 dark:text-gray-100">
          The {{ race.name }} is scheduled to start on
          {{ humanReadableDate(race) }}
        </div>
      </div>

      <nav aria-label="Progress">
        <ol
          role="list"
          class="divide-y divide-gray-300 dark:divide-gray-700 md:flex md:divide-y-0 overflow-hidden"
        >
          <li
            v-for="(video, partIndex) in race.videos"
            :key="video.id"
            class="relative md:flex-1 md:flex group"
            @click="selectVideoPart(partIndex)"
          >
            <div class="flex items-center w-full cursor-pointer">
              <span class="px-6 py-4 flex items-center text-sm font-medium">
                <span
                  class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 shadow-md border rounded-full"
                >
                  <video-progress :video="video" />
                </span>
                <span
                  class="ml-4 text-sm font-medium"
                  :class="[
                    partIndex === index
                      ? 'text-blue-500 group-hover:text-blue-600'
                      : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200',
                  ]"
                  >Part {{ partIndex + 1 }}</span
                >
              </span>
            </div>
            <template v-if="partIndex !== race.videos.length - 1">
              <!-- Arrow separator for lg screens and up -->
              <div
                class="hidden md:block absolute top-0 right-0 h-full w-5"
                aria-hidden="true"
              >
                <svg
                  class="h-full w-full text-gray-300 dark:text-gray-700"
                  viewBox="0 0 22 80"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 -2L20 40L0 82"
                    vector-effect="non-scaling-stroke"
                    stroke="currentcolor"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </template>
          </li>
        </ol>
      </nav>
    </div>

    <!-- Desktop slideout for the list of races -->
    <div
      v-if="!loadingRaceData && race.length && races.length"
      class="mr-2 ml-4 z-10 hidden md:block w-10"
    >
      <div
        @mouseover="seasonOpen = true"
        @mouseleave="seasonOpen = false"
        :class="[
          seasonOpen
            ? 'transform duration-500 -translate-x-96 ease-in-out mx-12'
            : 'transform duration-500 translate-x-0 ease-in-out',
        ]"
      >
        <v-card class="overflow-visible dark:bg-gray-800 w-96">
          <template v-slot:header>
            <router-link
              :to="{
                name: 'races.filter',
                query: { series: race.series.name },
              }"
              class="flex items-center p-2"
            >
              <div class="flex-shrink-0">
                <div class="px-2">
                  <span class="sr-only">{{ race.series.name }}</span>
                  <img
                    class="h-10 w-10 rounded-full shadow"
                    :src="race.series.logo"
                    :alt="race.name"
                  />
                </div>
              </div>
              <div class="ml-3">
                <div class="text-sm font-medium text-gray-900 dark:text-gray-100">
                  <div class="font-bold text-gray-800 dark:text-gray-100">
                    {{ race.series.full_name }}
                  </div>
                </div>
                <div class="flex space-x-1 text-sm text-gray-400 dark:text-gray-500">
                  <span>{{ race.season.name }}</span>
                </div>
              </div>
            </router-link>
          </template>

          <div class="flow-root">
            <div class="m-4" v-if="races.length">
              <div v-for="(race, index) in races" :key="race.id">
                <router-link
                  class="group"
                  :to="{
                    name: 'races.show',
                    params: { id: race.id, text: race.name },
                  }"
                >
                  <div class="relative mb-8">
                    <span
                      v-if="index !== races.length - 1"
                      class="absolute top-12 left-5 h-6 w-0.5 bg-gray-200 dark:bg-gray-500"
                      aria-hidden="true"
                    />
                    <div class="relative flex space-x-3">
                      <div>
                        <play-progress :race="race" />
                      </div>
                      <div
                        class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                      >
                        <div class="ml-1">
                          <div class="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                            <div
                              :class="
                                $route.params.id == race.id ? 'font-bold dark:text-gray-300' : ''
                              "
                            >
                              {{ race.name }}
                            </div>
                          </div>
                          <div class="text-sm text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                            <div
                              :class="
                                $route.params.id == race.id ? 'font-bold dark:text-gray-400' : ''
                              "
                            >
                              {{ race.track.name }}
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </div>

    <!-- Phone list of races for the season -->
    <v-card v-if="race.length && races.length" class="block md:hidden mt-5 dark:bg-gray-800">
      <template v-slot:header>
        <router-link
          :to="{
            name: 'races.filter',
            query: { series: race.series.name },
          }"
          class="flex items-center p-2 border-b border-gray-200 dark:border-gray-700"
        >
          <div class="flex-shrink-0">
            <div class="px-2">
              <span class="sr-only">{{ race.series.name }}</span>
              <img
                class="h-10 w-10 rounded-full shadow"
                :src="race.series.logo"
                :alt="race.name"
              />
            </div>
          </div>
          <div class="ml-3">
            <div class="text-sm font-medium text-gray-900 dark:text-gray-100">
              <div class="font-bold text-gray-800 dark:text-gray-100">
                {{ race.series.full_name }}
              </div>
            </div>
            <div class="flex space-x-1 text-sm text-gray-400 dark:text-gray-500">
              <span>{{ race.season.name }}</span>
            </div>
          </div>
        </router-link>
      </template>

      <div class="m-4">
        <div v-for="(race, index) in races" :key="race.id">
          <router-link
            class="group"
            :to="{
              name: 'races.show',
              params: { id: race.id, text: race.name },
            }"
          >
            <div class="relative mb-8">
              <span
                v-if="index !== races.length - 1"
                class="absolute top-12 left-5 h-6 w-0.5 bg-gray-200 dark:bg-gray-500"
                aria-hidden="true"
              />
              <div class="relative flex space-x-3">
                <div>
                  <play-progress :race="race" />
                </div>
                <div
                  class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                >
                  <div class="ml-1">
                    <div
                      class="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100"
                      :class="$route.params.id == race.id ? 'font-bold' : ''"
                    >
                      {{ race.name }}
                    </div>
                    <div
                      class="text-sm text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                      :class="$route.params.id == race.id ? 'font-bold' : ''"
                    >
                      {{ race.track.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
// todo move over to setup
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import Race from "@/api/models/races.js";
import Series from "@/api/models/series.js";
import PlayProgress from "@/components/playProgress.vue";
import VideoProgress from "@/components/videoProgress.vue";
import Suggestion from "@/components/races/suggestion.vue";
import ReportProblem from "@/components/races/reportProblem.vue";
import ClockStart from "@/assets/icons/clock-start.vue";
import CheckCircleOutline from "@/assets/icons/check-circle-outline.vue";
import ChatAlertOutline from "@/assets/icons/chat-alert-outline.vue";
import VideoProgressApi from "@/api/models/video-progress.js";
import Tooltip from "@/components/tooltip.vue";
import StarRating from '@/lib-components/starRating.vue';
import Rating from '@/api/models/rating.js';
export default {
  components: {
    PlayProgress,
    VideoProgress,
    Suggestion,
    ReportProblem,
    ClockStart,
    CheckCircleOutline,
    ChatAlertOutline,
    Tooltip,
    StarRating,
  },
  data() {
    return {
      race: [],
      races: [],
      player: null,
      seasonOpen: false,
      suggestionLink: null,
      validated: false,
      index: 0,
      loadingProgress: false,
      loadingMarkWatched: false,
      showProblemForm: false,
      loadingRaceData: true,
      raceRating: 0,
    };
  },
  computed: {
    ...mapState(useAuthStore, {
      user: (store) => store.user,
    }),
    watchedProgress() {
      const race_total_in_seconds = this.race?.videos
        ?.map((video) => video.end_time - video.start_time)
        .reduce((a, b) => a + b, 0);

      if (race_total_in_seconds <= 0) {
        return 0;
      }

      const total_seconds_watched = this.race?.videos
        ?.map((video) => {
          const time_of_video_watched_after_start =
            video?.progress?.seconds - video?.start_time;
          return Math.sign(time_of_video_watched_after_start) >= 1
            ? time_of_video_watched_after_start
            : 0;
        })
        .reduce((a, b) => a + b, 0);

      const progress_percentage = Math.round(
        ((total_seconds_watched ?? 0) * 100) / race_total_in_seconds,
        0
      );

      if (progress_percentage > 100) {
        return 100;
      } else {
        return progress_percentage;
      }
    },
  },
  async mounted() {
    await this.getRaceData();
    window.addEventListener("resize", this.resizePlayer);
    this.initPlayer();
  },
  // async unmounted() {
  //   await this.saveVideoProgress(); // find a better way to handel this
  // },
  methods: {
    initPlayer() {
      if (!this.race?.videos[0]?.video_id) {
        return;
      }

      if (window.YT) {
        this.setPlayer();
      } else {
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => {
          this.setPlayer();
        };
      }
    },
    // this is not being used at all any more
    // is was being used when the component was
    // unmounted to save video progress
    async saveVideoProgress() {
      // Check if the video player is ready
      if (!this.player) {
        return;
      }

      // Check if a user is logged in
      if (!this.user) {
        return;
      }

      // Check if the video was ever started
      const currentVideoTime = Math.round(this.player.getCurrentTime());
      if (!currentVideoTime) {
        return;
      }

      // Check if the video is at the same exact time as the last saved time
      if (
        currentVideoTime === this.race?.videos[this.index]?.progress?.seconds
      ) {
        return;
      }

      await new VideoProgressApi().store({
        video_id: this.race?.videos[this.index]?.id,
        seconds: currentVideoTime,
      });
    },
    // resumeVideo() {
    //   // todo save when a part is complete
    //   // todo automatically move to the next part when the current one is done

    //   // Figure out what index to jump too and resume at that index
    //   this.race?.videos.find((video, index) => {
    //     // The part is already done
    //     if (video?.progress?.percentage >= 100) {
    //       return false;
    //     }

    //     // The part has been started but not finished
    //     if (video?.progress?.seconds) {
    //       this.index = index;
    //       return true;
    //     }

    //     // The part has not been started but the last part is done
    //     if (this.race?.videos[index - 1]?.progress?.percentage >= 100) {
    //       this.index = index;
    //       return true;
    //     }
    //   });

    //   this.selectVideoPart(this.index);
    //   setTimeout(() => {
    //     this.player.seekTo(this.race?.videos[this.index]?.progress?.seconds);
    //   }, 250);
    // },
    async markWatched() {
      if (!this.user) {
        return;
      }

      this.loadingMarkWatched = true;
      await Promise.all(
        this.race?.videos.map(async (video) => {
          await new VideoProgressApi().store({
            video_id: video.id,
            seconds: video.end_time,
          });
        })
      );
      await this.getRaceData();
      this.loadingMarkWatched = false;
    },
    async markUnwatched() {
      if (!this.user) {
        return;
      }

      this.loadingMarkWatched = true;
      await Promise.all(
        this.race?.videos.map(async (video) => {
          await new VideoProgressApi().store({
            video_id: video.id,
            seconds: 0,
          });
        })
      );
      await this.getRaceData();
      this.loadingMarkWatched = false;
    },
    setPlayer() {
      /* eslint-disable-next-line */
      this.player = new YT.Player("player", {
        height: "100%",
        width: "100%",
        videoId: this.race.videos[0].video_id,
        playerVars: {
          playsinline: 0,
        },
        events: {
          onReady: this.onPlayerReady,
          //'onStateChange': this.onPlayerStateChange
        },
      });
    },
    onPlayerReady() {
      this.resizePlayer();
    },
    resizePlayer() {
      const width = document.getElementById("wrapper").offsetWidth;
      const height = width / (640 / 360);
      this.player.setSize(width, height);
    },
    async getRaceData() {
      this.loadingRaceData = true;
      ({ data: this.race } = await new Race().show(this.$route.params.id));
      ({ data: this.races } = await new Series().series_season(
        this.race?.series?.id,
        this.race?.season?.id
      ));
      this.loadingRaceData = false;
      this.updateSEO();
      this.raceRating = this.race.average_rating || 0;
    },
    updateSEO() {
      document.title = `Watch ${this.race?.season?.name} ${this.race.name} | We Are Auto`;
      document.querySelector(
        'meta[name="description"]'
      ).content = `Watch the ${this.race?.series?.full_name} ${this.race?.season?.name} ${this.race?.name} at ${this.race?.track?.name}.`;
    },
    selectVideoPart(index) {
      // Check if you are already watching that part
      if (
        this.race.videos[index].video_id ===
        this.player.getVideoData().player_id
      ) {
        return;
      }
      this.index = index;
      this.player.cueVideoById(this.race.videos[this.index].video_id);
    },
    raceState(race) {
      if (race?.videos?.length >= 1) {
        return "video";
      }

      const today = new Date().getTime();
      const race_starts_at = isNaN(Date.parse(race?.starts_at))
        ? 0
        : Date.parse(race?.starts_at);

      if (today < race_starts_at) {
        return "locked";
      }

      if (!(race?.videos?.length >= 1)) {
        return "add";
      }

      return null;
    },
    humanReadableDate(race) {
      return isNaN(Date.parse(race?.starts_at))
        ? 0
        : new Date(Date.parse(race?.starts_at)).toLocaleDateString();
    },
    jumpToStart() {
      this.player.seekTo(this.race?.videos[this.index]?.start_time);
    },
    async rateRace(value) {
      try {
        await new Rating().store({
          race_id: this.race.id,
          rating: value
        });
        this.raceRating = value;
      } catch (error) {
        console.error('Failed to rate race:', error);
      }
    },
  },
  watch: {
    async "$route.params.id"() {
      if (this.$route.params.id) {
        await this.getRaceData();
        this.seasonOpen = false;
        if (!this.race?.videos[0]?.video_id) {
          return;
        }
        this.setPlayer();
        this.player.cueVideoById(this.race?.videos[0]?.video_id);
      }
    },
  },
};
</script>

<style scoped>
.mx-22 {
  margin-left: 5.5rem;
  margin-right: 5.5rem;
}
</style>
