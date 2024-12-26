<template>
  <div v-if="firstLetter"
    class="flex items-center justify-center bg-gray-100 dark:bg-blue-800 text-gray-600 dark:text-white rounded-full ring-1 dark:ring-0 ring-gray-400 dark:ring-gray-500"
    :class="size">
    {{ firstLetter }}
  </div>
  <div v-else>
    <img class="rounded-full" :class="size"
      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: 'size-8'
  }
});

const authStore = useAuthStore();
const firstLetter = computed(() => authStore.user?.name?.charAt(0).toUpperCase() ?? null);
</script>