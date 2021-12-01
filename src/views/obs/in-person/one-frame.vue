<template>
  <outline>
    <div class="flex justify-around items-center h-screen">
      <div class="relative w-3/5 border-4 border-primary rounded-lg">
        <div
          class="
            absolute
            w-32
            -mt-48
            top-0
            right-32
            py-2
            rounded-t-lg
            bg-white
            border-t-4 border-l-4 border-r-4 border-primary
            text-lg text-gray-600 text-center
          "
        >
          Derek
        </div>
        <div
          class="
            absolute
            w-32
            -mt-48
            top-0
            left-32
            py-2
            rounded-t-lg
            bg-white
            border-t-4 border-l-4 border-r-4 border-primary
            text-lg text-gray-600 text-center
          "
        >
          Michael
        </div>

        <!-- <div
          class="
            absolute
            w-32
            -mt-48
            -bottom-12
            right-32
            py-2
            rounded-b-lg
            bg-white
            border-b-4
            border-l-4
            border-r-4
            border-primary
            text-lg
            text-gray-600
            text-center
          "
        >
          Derek
        </div>
        <div
          class="
            absolute
            w-32
            -mt-48
            -bottom-12
            left-32
            py-2
            rounded-b-lg
            bg-white
            border-b-4
            border-l-4
            border-r-4
            border-primary
            text-lg
            text-gray-600
            text-center
          "
        >
          Michael
        </div> -->

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
};
</script>
