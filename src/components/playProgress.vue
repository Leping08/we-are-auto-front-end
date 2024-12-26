<template>
  <div>
    <div
      v-if="icon == 'play'"
      class="h-10 w-10 rounded-full bg-white relative flex items-center justify-around shadow-md"
    >
      <div
        class="h-9 w-9 rounded-full relative flex items-center justify-around transform"
        :style="progress"
      >
        <div
          class="h-8 w-8 rounded-full bg-white relative flex items-center justify-around"
        >
          <play class="text-blue-500 h-6 w-6" />
        </div>
      </div>
    </div>
    <div
      v-if="icon == 'check'"
      class="h-10 w-10 rounded-full bg-green-500 relative flex items-center justify-around shadow-md"
    >
      <check class="text-white h-6 w-6" />
    </div>
    <div
      v-if="icon == 'calendar-check'"
      class="h-10 w-10 rounded-full bg-white relative flex items-center justify-around shadow-md"
    >
      <calendar-check class="text-gray-500 h-6 w-6" />
    </div>
    <div
      v-if="icon == 'calendar-clock'"
      class="h-10 w-10 rounded-full bg-white relative flex items-center justify-around shadow-md"
    >
      <calendar-clock class="text-gray-500 h-6 w-6" />
    </div>
  </div>
</template>

<script>
import play from "@/assets/icons/play.vue";
import calendarCheck from "@/assets/icons/calendar-check.vue";
import calendarClock from "@/assets/icons/calendar-clock.vue";
import check from "@/assets/icons/check.vue";
export default {
  components: {
    play,
    check,
    calendarCheck,
    calendarClock,
  },
  props: {
    race: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
  computed: {
    progress() {
      return {
        background: `conic-gradient(#3B82F6 ${this.watchedProgress}%, #FFFF 0%)`,
      };
    },
    icon() {
      if (this.race?.videos?.length >= 1) {
        if (this.watchedProgress <= 99) {
          return "play";
        }

        if (this.watchedProgress >= 100) {
          return "check";
        }
      }

      const now = new Date().getTime();
      const raceTime = new Date(this.race?.starts_at).getTime();

      if (now > raceTime) {
        return "calendar-check";
      }

      return "calendar-clock";
    },
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
};
</script>
