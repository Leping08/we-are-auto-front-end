<template>
  <div class="flex bg-gradient-to-r from-blue-400 to-blue-600 h-screen">
    <div class="m-auto w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3">
      <div class="p-8 bg-white rounded-lg relative">
        <div class="w-full flex justify-center absolute -top-14 left-0">
          <div class="bg-white rounded-full p-2">
            <div class="rounded-full">
              <account-lock class="w-24 text-blue-500 p-2" />
            </div>
          </div>
        </div>
        <div class="flex justify-around mt-6 text-gray-600 text-sm">
          Enter the email address associated with your account. We'll send you
          an email with a link to reset your password.
        </div>
        <div class="my-4">
          <v-input
            v-model="email"
            color="blue"
            label="Email"
            placeholder=""
            :rules="['min:2', 'max:255', 'required']"
            type="text"
          />
        </div>
        <div class="pt-4">
          <div class="flex justify-end items-center">
            <!-- <div class="mr-2 text-sm text-red-600">
              Error messages will appear here.
            </div> -->
            <div class="mr-2">
              <v-progress-spinner v-if="loading" :size="7" color="blue" />
            </div>
            <div class="flex justify-end">
              <v-button
                @click="submitForgotPasswordRequest()"
                :disabled="!email || loading"
                type="submit"
                >Submit</v-button
              >
            </div>
          </div>
          <div class="flex justify-end items-center mt-4">
            <div v-if="!loading && successMessage" class="mx-2">
              <div class="flex items-center">
                <div>
                  <check-circle-outline class="text-green-500 h-6 w-6" />
                </div>
                <div class="text-green-500 ml-2">
                  {{ successMessage }}
                </div>
              </div>
            </div>
            <div v-if="!loading && errorMessage" class="mx-2">
              <div class="flex items-center">
                <div>
                  <close-circle-outline class="text-red-500 h-6 w-6" />
                </div>
                <div class="text-red-500 ml-2">
                  {{ errorMessage }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
import checkCircleOutline from "@/assets/icons/checkbox-marked-circle-outline.vue";
import closeCircleOutline from "@/assets/icons/close-circle-outline.vue";
import accountLock from "@/assets/icons/account-lock.vue";
export default {
  components: {
    checkCircleOutline,
    closeCircleOutline,
    accountLock,
  },
  data() {
    return {
      email: "",
      loading: false,
      successMessage: null,
      errorMessage: null,
    };
  },
  methods: {
    async submitForgotPasswordRequest() {
      // todo check if email is valid
      this.loading = true;
      this.errorMessage = null;
      this.successMessage = null;
      try {
        const response = await api.post("/forgot-password", {
          email: this.email,
        });
        this.successMessage = response?.data?.message;
      } catch (error) {
        this.failure = true;
        this.errorMessage = error?.response?.data?.message;
        console.log(error);
        console.log(error?.response);
      }
      this.loading = false;
    },
  },
};
</script>
