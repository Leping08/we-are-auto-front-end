<template>
  <div>
    <div>
      <textarea
        v-model="problemText"
        placeholder="Describe the problem..."
        class="block w-full h-40 px-4 py-2 text-gray-900 border-gray-300 border-2 rounded-lg focus:outline-none focus:border-blue-500"
      ></textarea>
    </div>
    <div class="flex items-center mt-4">
      <div v-if="!loading && !successCheckmark">
        <v-button :disabled="!problemText" @click="reportProblem()">
          Report
        </v-button>
      </div>
      <div v-if="loading">
        <v-progress-spinner size="6" color="blue" />
      </div>
      <div v-if="!loading && errorMessage" class="text-sm text-red-500 mx-2">
        {{ errorMessage }}
      </div>
      <div v-if="!loading && successCheckmark" class="mx-2">
        <div class="flex items-center">
          <div>
            <check-circle-outline class="text-green-500 h-6 w-6" />
          </div>
          <div class="text-green-500 ml-2">
            Thanks for reporting the problem. We'll look into it shortly.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import RaceProblemApi from "@/api/models/race-problem.js";
import checkCircleOutline from "@/assets/icons/checkbox-marked-circle-outline.vue";
export default {
  components: {
    checkCircleOutline,
  },
  props: {
    race: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      problemText: "",
      errorMessage: "",
      successCheckmark: false,
    };
  },
  computed: {
    ...mapState(useAuthStore, {
      user: (store) => store.user,
    }),
  },
  methods: {
    async reportProblem() {
      this.errorMessage = "";
      this.loading = true;
      this.successCheckmark = false;
      if (!this.problemText) {
        this.errorMessage = "Please add problem description.";
        this.loading = false;
        return;
      }

      try {
        let response = await new RaceProblemApi().store({
          user_id: this.user?.id ?? null,
          race_id: this.race?.id ?? null,
          description: this.problemText,
        });

        if (response.status === 201) {
          this.successCheckmark = true;
          this.problemText = "";
        }

        // Hide success message after 10 seconds
        setTimeout(() => {
          this.successCheckmark = false;
        }, 10000);
      } catch (error) {
        this.errorMessage = "Ohhh no! An error occurred reporting the problem.";
      }
      this.loading = false;
    },
  },
};
</script>
