<template>
  <outline>
    <div class="h-screen">
      <div class="flex justify-around items-center p-10 pt-20">
        <div class="relative w-1/3 border-4 border-primary rounded-lg">
          <div
            class="
              p-2
              top-0
              w-1/6
              -mt-48
              rounded-t-lg
              ml-4
              bg-white
              border-t-4 border-l-4 border-r-4 border-primary
              text-lg text-gray-900
            "
          >
            {{ guestName }}
          </div>
          <div class="aspect-w-16 aspect-h-9"></div>
        </div>
      </div>
      <div class="flex justify-around items-center p-10">
        <div class="relative w-1/3 border-4 border-primary rounded-lg">
          <div
            class="
              p-2
              top-0
              w-1/6
              -mt-48
              rounded-t-lg
              ml-4
              bg-white
              border-t-4 border-l-4 border-r-4 border-primary
              text-lg text-gray-900
            "
          >
            Michael
          </div>
          <div class="aspect-w-16 aspect-h-9"></div>
        </div>
        <div class="relative w-1/3 border-4 border-primary rounded-lg">
          <div
            class="
              p-2
              top-0
              w-1/6
              -mt-48
              rounded-t-lg
              ml-4
              bg-white
              border-t-4 border-l-4 border-r-4 border-primary
              text-lg text-gray-900
            "
          >
            Derek
          </div>
          <div class="aspect-w-16 aspect-h-9"></div>
        </div>
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
      guestName: "Guest",
    };
  },
  created() {
    this.guestName = this.$route.query.name;
  },
};
</script>
