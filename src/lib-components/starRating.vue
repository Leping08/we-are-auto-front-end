<template>
  <div class="flex items-center relative group h-6">
    <div class="flex h-full">
      <button
        v-for="star in 5"
        :key="star"
        @click="rate(star)"
        :disabled="!canRate"
        class="w-6 h-full relative flex items-center justify-center"
      >
        <!-- Background star (gray) -->
        <svg 
          class="w-5 h-5 absolute text-gray-400"
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <!-- Foreground star (blue) with clip path for partial fill -->
        <svg 
          class="w-5 h-5 absolute text-blue-500 hover:text-blue-400 transition-colors"
          :style="{ clipPath: `inset(0 ${100 - getStarPercentage(star)}% 0 0)` }"
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </button>
    </div>
    <div 
      v-if="!canRate"
      class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
    >
      Login to rate this race
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  canRate: {
    type: Boolean,
    default: false
  },
  showRating: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['update:modelValue']);

const getStarPercentage = (star) => {
  const difference = props.modelValue - (star - 1);
  if (difference >= 1) return 100;
  if (difference <= 0) return 0;
  return Math.round(difference * 100);
};

const rate = (value) => {
  if (props.canRate) {
    emit('update:modelValue', value);
  }
};
</script>
