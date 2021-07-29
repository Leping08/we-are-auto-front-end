<template>
  <div class="p-4" v-if="race.length && races.length">
    <div class="p-4 grid grid-cols-3 gap-4">
      <v-card
        :heading="race.name"
        :subheading="race.track.name"
        class="col-span-2"
      >
        <div id="player"></div>
      </v-card>
      <v-card class="relative">
        <template v-slot:header>
          <div class="flex items-center p-2">
            <div class="flex-shrink-0">
              <div class="p-1">
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
          <ul class="-mb-8">
            <li v-for="(race, index) in races" :key="race.id">
              <div class="relative pb-8">
                <span
                  v-if="index !== races.length - 1"
                  class="absolute top-12 left-5 -ml-px h-6 w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
                <div class="relative flex space-x-3">
                  <div>
                    <play-progress :percentage="index % 2 ? 35 : 100" />
                  </div>
                  <div
                    class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                  >
                    <div>
                      <div class="text-sm text-gray-900">
                        {{ race.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ race.track.name }}
                      </div>
                    </div>
                    <!-- <div class="text-right text-sm whitespace-nowrap text-gray-500">
                      <time :datetime="race.starts_at">{{ race.starts_at }}</time>
                    </div> -->
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import Race from "@/api/races";
import PlayProgress from "@/components/playProgress.vue";
export default {
  components: {
    PlayProgress,
  },
  data() {
    return {
      race: [],
      races: [],
      player: null,
    };
  },
  async created() {
    ({ data: this.race } = await new Race().show(this.$route.params.id));
    ({ data: this.races } = await new Race().index());
    // this.test();
  },
  methods: {
    // test() {
    //   var tag = document.createElement("script");
    //   tag.src = "https://www.youtube.com/iframe_api";
    //   var firstScriptTag = document.getElementsByTagName("script")[0];
    //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //   // 3. This function creates an <iframe> (and YouTube player)
    //   //    after the API code downloads.
    //   window.onYouTubeIframeAPIReady = () => {
    //     this.player = new YT.Player("player", {
    //       height: "600px",
    //       width: "100%",
    //       videoId: this.race.videos[0].video_id,
    //       playerVars: {
    //         playsinline: 1,
    //       },
    //       events: {
    //         onReady: this.onPlayerReady,
    //         //'onStateChange': this.onPlayerStateChange
    //       },
    //     });
    //   };
    // },
    // onPlayerReady() {
    //   console.log(this.player);
    //   // this.player.playVideo();
    //   this.player.playVideo();
    // },
  },
};
</script>
