<template>
  <outline>
    <div class="flex justify-around items-center h-screen">
      <div class="relative w-6/12 border-4 border-primary rounded-lg ml-8 mr-4">
        <div
          class="p-2 top-0 w-3/12 -mt-48 rounded-t-lg ml-4 bg-white border-t-4 border-l-4 border-r-4 border-primary text-xl text-gray-600 italic font-medium"
        >
          Derek & Michael
        </div>
        <div class="aspect-h-9 aspect-w-16"></div>
      </div>
      <div class="relative w-6/12 border-4 border-primary rounded-lg mr-8 ml-4">
        <div
          class="p-2 top-0 w-3/12 -mt-48 rounded-t-lg ml-4 bg-white border-t-4 border-l-4 border-r-4 border-primary text-xl text-gray-600 italic font-medium"
        >
          {{ guestName }}
        </div>
        <div class="aspect-h-9 aspect-w-16"></div>
      </div>
    </div>
  </outline>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import outline from "@/views/obs/outline.vue";

const guestName = ref("Guest Name");

onMounted(() => {
  const route = useRoute();
  guestName.value = route.params.name; // could be route.params.name
});
</script>
