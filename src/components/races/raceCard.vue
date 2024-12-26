<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden h-full dark:bg-gray-800">
    <div class="relative">
      <div class="absolute right-2 top-2 z-20">
        <v-badge v-if="showNewBadge" color="blue">New</v-badge>
      </div>
      <img
        v-if="raceVideoId"
        class="h-64 w-full object-cover transform hover:scale-110 duration-100 ease-in-out"
        :src="thumbnailUrl"
        :alt="race.name"
      />
      <div v-else class="h-64 w-full bg-gray-300 dark:bg-gray-700">
        <div class="flex items-center justify-center h-full">
          <calendar-check
            v-if="raceAlreadyHappened"
            class="h-20 w-20 text-gray-500 dark:text-gray-400"
          />
          <calendar-clock
            v-if="!raceAlreadyHappened"
            class="h-20 w-20 text-gray-500 dark:text-gray-400"
          />
        </div>
      </div>
      <div class="absolute right-0 bottom-0 -my-5 mr-6">
        <play-progress :race="race" />
      </div>

      <div class="absolute left-0 bottom-0 -my-6 ml-6">
        <router-link
          :to="{ name: 'races.filter', query: { series: race.series.name } }"
        >
          <series-pill :series="race.series" :year="race.season.name" />
        </router-link>
      </div>
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between dark:bg-gray-800">
      <div class="flex-1">
        <div class="block mt-2">
          <div class="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {{ race.name }}
          </div>
          <div class="text-sm text-gray-400 dark:text-gray-500">
            {{ race.track.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playProgress from "@/components/playProgress.vue";
import seriesPill from "@/components/series/pill.vue";
import calendarClock from "@/assets/icons/calendar-clock.vue";
import calendarCheck from "@/assets/icons/calendar-check.vue";
export default {
  components: {
    playProgress,
    seriesPill,
    calendarClock,
    calendarCheck,
  },
  props: {
    race: {
      type: Object,
      required: true,
    },
  },
  computed: {
    raceAlreadyHappened() {
      return new Date(this.race.starts_at).getTime() < new Date().getTime();
    },
    raceVideoId() {
      return this.race?.videos[0]?.video_id;
    },
    thumbnailUrl() {
      return `https://img.youtube.com/vi/${this.raceVideoId}/maxresdefault.jpg`;
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
