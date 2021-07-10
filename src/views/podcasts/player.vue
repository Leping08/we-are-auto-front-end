<template>
  <div class="p-4 bg-white border-t border-gray-200 relative">
    <div class="fixed right-0 px-4 text-gray-700">
      <close class="w-5 h-5 cursor-pointer" @click="closePodcastFooter" />
    </div>

    <div v-if="!podcast?.['enclosure']?.['@attributes']?.url">
      <div class="flex items-center animate-pulse">
        <div class="h-24 w-24 bg-blue-400 rounded m-2"></div>
        <div class="flex-1 space-y-4">
          <div class="w-4/12 h-3 rounded bg-blue-300 mx-auto"></div>
          <div class="w-full h-1 rounded bg-gray-300"></div>
          <div class="grid grid-cols-5 items-center">
            <div class="flex justify-around">
              <div class="w-1/4 h-1 rounded bg-gray-300"></div>
            </div>
            <div></div>
            <div class="flex justify-around">
              <div class="bg-gray-200 shadow rounded-full h-11 w-11"></div>
              <div class="bg-gray-400 shadow rounded-full h-11 w-11"></div>
              <div class="bg-gray-200 shadow rounded-full h-11 w-11"></div>
            </div>
            <div class="flex justify-around">
              <div class="w-1/2 h-2 rounded bg-blue-300"></div>
            </div>
            <div class="flex justify-around">
              <div class="w-1/4 h-1 rounded bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="podcast?.['enclosure']?.['@attributes']?.url" class="flex">
      <div>
        <img
          class="h-28 w-auto"
          :src="podcast?.['itunes:image']?.['@attributes']?.['href']"
        />
      </div>
      <div class="flex-1">
        <div
          class="text-center text-sm md:text-md lg:text-lg text-gray-700 mx-4"
        >
          {{ podcast?.["title"]?.["#text"] }}
        </div>
        <audio-player
          :url="podcast?.['enclosure']?.['@attributes']?.url"
          playerId="podcast"
          playOnStart
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { find } from "@/api/podcast/index.js";
import audioPlayer from "@/components/audioPlayer";
import close from "@/assets/icons/close.vue";
export default {
  components: {
    audioPlayer,
    close,
  },
  data() {
    return {
      loading: false,
      podcast: {},
    };
  },
  created() {
    if (this.episodeIndex) {
      this.getPodcast(this.episodeIndex);
    }
  },
  methods: {
    async getPodcast(episodeId) {
      this.podcast = {};
      this.loading = true;
      this.podcast = await find(episodeId);
      this.loading = false;
    },
    ...mapMutations("podcast", ["closePodcastFooter", "selectPodcast"]),
  },
  computed: {
    ...mapGetters("podcast", ["episodeIndex"]),
  },
  watch: {
    async episodeIndex() {
      await this.getPodcast(this.episodeIndex);
    },
  },
};
</script>
