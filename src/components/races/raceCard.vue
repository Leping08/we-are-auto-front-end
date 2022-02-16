<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden h-full">
    <div class="relative">
      <div class="absolute right-2 top-2 z-20">
        <v-badge v-if="showNewBadge" color="blue">New</v-badge>
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
        :src="thumbnailUrl"
        alt=""
      />
      <div class="absolute right-0 bottom-0 -my-5 mr-6">
        <play-progress :race="race" />
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
  </div>
</template>

<script>
// import arrow from "@/assets/icons/arrow-right.vue";
import playProgress from "@/components/playProgress.vue";
import seriesPill from "@/components/series/pill.vue";
export default {
  components: {
    // arrow,
    playProgress,
    seriesPill,
  },
  props: {
    race: {
      type: Object,
      required: true,
    },
  },
  computed: {
    thumbnailUrl() {
      return `https://img.youtube.com/vi/${this.race?.videos[0]?.video_id}/maxresdefault.jpg`;
    },
    showNewBadge() {
      // Check if the first video is even set
      if (!this.race?.videos[0]?.created_at) {
        return false;
      }
      var now = new Date();
      var sevenDaysAgo = now.setDate(now.getDate() - 7);
      var created_at = new Date(
        Date.parse(this.race?.videos[0]?.created_at)
      ).getTime();
      return created_at >= sevenDaysAgo;
    },
  },
};
</script>
