<template>
  <div class="bg-white rounded-full pr-4 shadow-lg border">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <div class="p-1">
          <span class="sr-only">{{ series.name }}</span>
          <img
            class="h-10 w-10 rounded-full shadow"
            :src="series.logo"
            :alt="series.full_name"
          />
        </div>
      </div>
      <div class="ml-3">
        <div class="font-bold text-gray-800 text-sm">
          {{ series.name }}
        </div>
        <div v-if="year" class="flex space-x-1 text-sm text-gray-400">
          <span>{{ year }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    series: {
      required: true,
      type: Object,
    },
    year: {
      required: false,
      type: String,
    },
  },
};
</script>
