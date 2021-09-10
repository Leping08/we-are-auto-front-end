<template>
  <outline>
    <div class="h-screen">
      <div class="flex justify-around items-center p-10 pt-20">
        <div class="relative w-1/3 border-2 border-primary rounded">
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
            {{ guestName }}
          </div>
          <div class="aspect-w-16 aspect-h-9">
            <div class="p-10">
              <input type="text" v-model="guestName" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-around items-center p-10">
        <div class="relative w-1/3 border-2 border-primary rounded">
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
        <div class="relative w-1/3 border-2 border-primary rounded">
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
};
</script>
