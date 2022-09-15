<template>
  <div class="relative" @mouseover="show = true" @mouseleave="show = false">
    <!-- always showing content -->
    <slot></slot>
    <!-- tooltip its self that can be shown by hovering -->
    <div v-if="show" class="absolute bottom-0 right-0 z-10" :class="[margin]">
      <div class="bg-white shadow-md rounded-lg p-4">
        <slot name="tooltip-content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    position: {
      type: String,
      default: "top",
    },
    margin: {
      type: String,
      default: "mr-8",
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showTooltip() {
      this.show = true;
    },
    hideTooltip() {
      this.show = false;
    },
  },
};
</script>
