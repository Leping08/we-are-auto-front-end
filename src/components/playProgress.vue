<template>
  <div>
    <div
      class="
        h-10
        w-10
        rounded-full
        bg-white
        relative
        flex
        items-center
        justify-around
        shadow-md
      "
    >
      <div
        class="
          h-9
          w-9
          rounded-full
          relative
          flex
          items-center
          justify-around
          transform
        "
        :style="progress"
      >
        <div
          class="
            h-8
            w-8
            rounded-full
            bg-white
            relative
            flex
            items-center
            justify-around
          "
        >
          <play class="h-6 text-blue-500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import play from "@/assets/icons/play.vue";
export default {
  components: {
    play,
  },
  props: {
    percentage: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    progress() {
      return {
        background: `conic-gradient(#3B82F6 ${this.percentage}%, #FFFF 0%)`,
      };
    },
  },
};
</script>
