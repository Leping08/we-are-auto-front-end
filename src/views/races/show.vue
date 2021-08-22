<template>
  <div class="p-4 relative" v-if="race.length && races.length">
    <div class="my-2 ml-2 mr-20">
      <v-card
        :heading="race.name"
        :subheading="race.track.name"
        class="row-span-2 col-span-3"
      >
        <div id="wrapper" class="videoWrapper">
          <div id="player"></div>
        </div>

        <nav aria-label="Progress">
          <ol
            role="list"
            class="divide-y divide-gray-300 md:flex md:divide-y-0"
          >
            <li
              v-for="(video, index) in race.videos"
              :key="video.id"
              class="relative md:flex-1 md:flex"
            >
              <a v-if="true" href="#" class="group flex items-center w-full">
                <span
                  class="px-6 py-4 flex items-center text-sm font-medium group"
                >
                  <span
                    class="
                      flex-shrink-0
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      bg-white
                      shadow-md
                      border
                      rounded-full
                      group-hover:bg-blue-500
                    "
                  >
                    <play
                      class="w-6 h-6 text-blue-500 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    class="
                      ml-4
                      text-sm
                      font-medium
                      text-gray-500
                      group-hover:text-gray-700
                    "
                    >Part {{ index + 1 }}</span
                  >
                </span>
              </a>
              <!-- <a v-else-if="step.status === 'current'" :href="step.href" class="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
                <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                  <span class="text-indigo-600">{{ step.id }}</span>
                </span>
                <span class="ml-4 text-sm font-medium text-indigo-600">{{ step.name }}</span>
              </a>
              <a v-else :href="step.href" class="group flex items-center">
                <span class="px-6 py-4 flex items-center text-sm font-medium">
                  <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                    <span class="text-gray-500 group-hover:text-gray-900">{{ step.id }}</span>
                  </span>
                  <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</span>
                </span>
              </a> -->
              <template v-if="index !== race.videos.length - 1">
                <!-- Arrow separator for lg screens and up -->
                <div
                  class="hidden md:block absolute top-0 right-0 h-full w-5"
                  aria-hidden="true"
                >
                  <svg
                    class="h-full w-full text-gray-300"
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

        <!-- <div class="flex justify-around p-4 items-center" v-if="race.videos.length > 1">
          <div class="relative mx-auto" v-for="(video, index) in race.videos" :key="video.id">
            <div class="text-gray-500 shadow-md border h-10 w-10 rounded-full flex justify-around items-center">
              {{ index+1 }}
            </div>
            <div class="flex justify-around w-full" v-if="race.videos.length > index+1">
                <div class="bg-gray-200 h-0.5 w-full -mt-5"></div>
            </div>
          </div>
        </div> -->
      </v-card>
    </div>

    <div class="absolute right-0 top-0 mt-6 z-10 px-4">
      <div class="transform translate-x-full">
        <div
          class="
            transform
            duration-500
            ease-in-out
            -translate-x-14
            hover:-translate-x-full
            shadow-md
            overflow-hidden
          "
        >
          <v-card class="">
            <template v-slot:header>
              <div class="flex items-center p-2">
                <div class="flex-shrink-0">
                  <div class="px-2">
                    <span class="sr-only">{{ race.series.name }}</span>
                    <img
                      class="h-10 w-10 rounded-full shadow"
                      :src="race.series.logo"
                      alt=""
                    />
                  </div>
                </div>
                <div class="ml-3">
                  <div class="text-sm font-medium text-gray-900">
                    <div class="font-bold text-gray-800">
                      {{ race.series.name }}
                    </div>
                  </div>
                  <div class="flex space-x-1 text-sm text-gray-400">
                    <span>{{ race.season.name }}</span>
                  </div>
                </div>
              </div>
            </template>

            <!-- Activity Feed -->
            <div class="flow-root">
              <div class="m-4">
                <div v-for="(race, index) in races" :key="race.id">
                  <router-link
                    class="group"
                    :to="{ name: 'races.show', params: { id: race.id } }"
                  >
                    <div class="relative mb-8">
                      <span
                        v-if="index !== races.length - 1"
                        class="
                          absolute
                          top-12
                          left-5
                          -ml-px
                          h-6
                          w-0.5
                          bg-gray-200
                        "
                        aria-hidden="true"
                      />
                      <div class="relative flex space-x-3">
                        <div>
                          <play-progress :race="race" />
                        </div>
                        <div
                          class="
                            min-w-0
                            flex-1
                            pt-1.5
                            flex
                            justify-between
                            space-x-4
                          "
                        >
                          <div class="ml-1">
                            <div
                              class="
                                text-sm text-gray-600
                                group-hover:text-gray-900
                              "
                              :class="
                                $route.params.id == race.id ? 'font-bold' : ''
                              "
                            >
                              {{ race.name }}
                            </div>
                            <div
                              class="
                                text-sm text-gray-400
                                group-hover:text-gray-700
                              "
                              :class="
                                $route.params.id == race.id ? 'font-bold' : ''
                              "
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
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Race from "@/api/models/races.js";
//import VideoProgress from "@/api/models/video-progress.js";
import PlayProgress from "@/components/playProgress.vue";
import Play from "@/assets/icons/play.vue";
export default {
  components: {
    PlayProgress,
    Play,
  },
  data() {
    return {
      race: [],
      races: [],
      player: null,
    };
  },
  async mounted() {
    await this.getRaceData();
    window.addEventListener("resize", this.resizePlayer);
    this.initPlayer();
  },
  async unmounted() {
    // Save the video progress on leave
    // await new VideoProgress().store({
    //   video_id: 1,
    //   seconds: 100
    // })
  },
  methods: {
    initPlayer() {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {
        /* eslint-disable-next-line */
        this.player = new YT.Player("player", {
          height: "349",
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
      };
    },
    onPlayerReady() {
      this.resizePlayer();
      //this.player.playVideo();
    },
    resizePlayer() {
      const width = document.getElementById("wrapper").offsetWidth;
      const height = width / (640 / 360);
      this.player.setSize(width, height);
    },
    async getRaceData() {
      ({ data: this.race } = await new Race().show(this.$route.params.id));
      ({ data: this.races } = await new Race().index());
    },
  },
  watch: {
    async "$route.params.id"() {
      await this.getRaceData();
      this.player.cueVideoById(this.race.videos[0].video_id);
    },
  },
};
</script>

<style scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
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
