<template>
  <div class="flex items-center">
    <div v-if="!loading" class="flex items-center">
      <input
        :value="value"
        v-model="radioValue"
        :id="label"
        :name="label"
        type="checkbox"
        :class="[
          `h-4 w-4 border border-gray-300 text-${checkBoxColor}-600 rounded focus:outline-none dark:border-gray-600 dark:text-${checkBoxColor}-400`,
          ring
            ? `focus:ring-${checkBoxColor}-600 focus:ring-2 dark:focus:ring-${checkBoxColor}-400`
            : 'focus:ring-offset-0 focus:ring-0',
        ]"
      />
    </div>
    <div class="flex items-center">
      <v-progress-spinner v-if="loading" :size="progressSpinnerSize" />
    </div>
    <div class="ml-3 text-sm leading-5">
      <label for="comments" class="font-medium text-gray-700 dark:text-gray-300">{{
        label
      }}</label>
      <p v-if="subTitle" class="text-gray-500 dark:text-gray-400">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script>
import theme from "./../theme";
export default {
  name: "CheckBox",
  props: {
    label: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
    },
    modelValue: {
      type: [String, Number, Boolean, Array, Object, Date, null],
      required: true,
    },
    value: {
      type: [String, Number, Boolean, Array, Object, Date],
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    ring: {
      type: Boolean,
      required: false,
      default: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    progressSpinnerSize: {
      type: Number,
      required: false,
      default: 4,
    },
  },
  computed: {
    checkBoxColor() {
      return this.color || theme.color;
    },
    radioValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
