<template>
  <div>
    <div>
      <v-check-box
        color="cyan"
        v-model="following"
        :value="true"
        :label="series.name"
        :sub-title="series.full_name"
        :loading="loading"
      />
    </div>
    <div v-if="errorMessage" class="text-red-600 text-xs mt-2">
      Ohh no an error occurred. {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import FollowSeries from "@/api/models/follow-series.js";
import { useAuthStore } from "@/stores/auth.js";
const props = defineProps({
  series: {
    type: Object,
    required: true,
  },
});

const authStore = useAuthStore();

const following = ref(false);
const loading = ref(false);
const errorMessage = ref(null);

let changeFollowSeries = async () => {
  loading.value = true;
  try {
    await new FollowSeries().store({
      series_id: props.series.id,
      user_id: authStore.user.id,
    });
  } catch (error) {
    errorMessage.value = error.response.data.message;
  }
  loading.value = false;
};

let checkSeriesFollowedStatus = () => {
  if (props.series?.users_following?.[0]?.id === authStore?.user?.id) {
    following.value = true;
  } else {
    following.value = false;
  }
};

onMounted(async () => {
  await checkSeriesFollowedStatus();

  watch(following, () => {
    changeFollowSeries();
  });
});
</script>
