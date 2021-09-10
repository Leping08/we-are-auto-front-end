<template>
  <outline>
    <div class="flex justify-around items-center h-screen">
      <div class="relative w-2/5 border-2 border-primary rounded">
        <div
          class="
            p-2
            top-0
            w-1/6
            -mt-46
            rounded-t-lg
            ml-4
            bg-white
            border-t-2 border-l-2 border-r-2 border-primary
            text-lg text-gray-900
          "
        >
          Michael
        </div>
        <div class="aspect-w-16 aspect-h-9"></div>
      </div>
      <div class="relative w-2/5 border-2 border-primary rounded">
        <div
          class="
            p-2
            top-0
            w-1/6
            -mt-46
            rounded-t-lg
            ml-4
            bg-white
            border-t-2 border-l-2 border-r-2 border-primary
            text-lg text-gray-900
          "
        >
          Derek
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
};
</script>
