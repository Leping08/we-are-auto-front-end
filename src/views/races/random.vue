<template>
  <div class="flex bg-gradient-to-br from-blue-400 to-blue-600 dark:from-gray-700 dark:to-blue-900 h-screen">
    <progress-spinner size="12" class="m-auto" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Race from "@/api/models/races.js";
import ProgressSpinner from "@/lib-components/progressSpinner.vue";

const router = useRouter();

onMounted(async () => {
  try {
    let response = null;
    ({ data: response } = await new Race().random(1));
    const race = response[0];

    if (race.id) {
      // Redirect to races.show with id and name as params
      router.push({
        name: "races.show",
        params: { id: race.id, text: race.name },
      });
    }
  } catch (error) {
    console.error(error);
  }
});

</script>