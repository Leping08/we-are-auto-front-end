<template>
  <div>
    <div
      v-if="percentage <= 99"
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
    <div
      v-else
      class="
        h-10
        w-10
        rounded-full
        bg-green-500
        relative
        flex
        items-center
        justify-around
        shadow-md
      "
    >
      <check class="text-white h-6 w-6" />
    </div>
  </div>
</template>

<script>
import play from "@/assets/icons/play.vue";
import check from "@/assets/icons/check.vue";
export default {
  components: {
    play,
    check,
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
