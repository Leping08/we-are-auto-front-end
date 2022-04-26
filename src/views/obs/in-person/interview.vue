<template>
  <outline>
    <div class="flex justify-around items-center h-screen">
      <div class="relative w-6/12 border-4 border-primary rounded-lg ml-8 mr-4">
        <div
          class="
            p-2
            top-0
            w-3/12
            -mt-48
            rounded-t-lg
            ml-4
            bg-white
            border-t-4 border-l-4 border-r-4 border-primary
            text-xl text-gray-600
            italic
            font-medium
          "
        >
          Derek & Michael
        </div>
        <div class="aspect-w-16 aspect-h-9"></div>
      </div>
      <div class="relative w-6/12 border-4 border-primary rounded-lg mr-8 ml-4">
        <div
          class="
            p-2
            top-0
            w-3/12
            -mt-48
            rounded-t-lg
            ml-4
            bg-white
            border-t-4 border-l-4 border-r-4 border-primary
            text-xl text-gray-600
            italic
            font-medium
          "
        >
          {{ guestName }}
        </div>
        <div class="aspect-w-16 aspect-h-9"></div>
      </div>
    </div>
  </outline>
</template>

<script>
import outline from "@/views/obs/outline.vue";
export default {
  components: {
    outline,
  },
  data() {
    return {
      guestName: "?name=Guest%20Name",
    };
  },
  created() {
    this.guestName = this.$route.query.name ?? this.guestName;
  },
};
</script>
