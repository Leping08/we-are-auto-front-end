<template>
  <div class="flex bg-gradient-to-br from-blue-400 to-blue-600 dark:from-gray-700 dark:to-blue-900 h-screen">
    <div class="m-auto w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3">
      <div class="p-8 bg-white dark:bg-gray-800 rounded-lg relative">
        <div class="w-full flex justify-center absolute -top-14 left-0">
          <div class="bg-white dark:bg-gray-800 rounded-full p-2">
            <div class="rounded-full">
              <account-lock class="size-24 text-blue-500 p-2" />
            </div>
          </div>
        </div>
        <div class="flex justify-around mt-6 text-gray-600 dark:text-gray-300 text-sm">
          Enter the email address associated with your account. We'll send you
          an email with a link to reset your password.
        </div>
        <!-- todo figure out validation rules here -->
        <div class="my-4">
          <v-input
            v-model="email"
            color="blue"
            label="Email"
            placeholder=""
            type="text"
          />
        </div>
        <div class="pt-4">
          <div class="flex justify-end items-center">
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
          <div class="flex justify-end items-center">
            <div v-if="!loading && successMessage" class="mx-2 mt-4">
              <div class="flex items-center">
                <div>
                  <check-circle-outline class="text-green-500 dark:text-green-300 h-6 w-6" />
                </div>
                <div class="text-green-500 dark:text-green-300 ml-2">
                  {{ successMessage }}
                </div>
              </div>
            </div>
            <div v-if="!loading && errorMessage" class="mx-2 mt-4">
              <div class="flex items-center">
                <div>
                  <close-circle-outline class="text-red-500 dark:text-red-300 h-6 w-6" />
                </div>
                <div class="text-red-500 dark:text-red-300 ml-2">
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

<script setup>
import { ref } from "vue";
import api from "@/api/index.js";
import checkCircleOutline from "@/assets/icons/checkbox-marked-circle-outline.vue";
import closeCircleOutline from "@/assets/icons/close-circle-outline.vue";
import accountLock from "@/assets/icons/account-lock.vue";

const email = ref("");
const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

function submitForgotPasswordRequest() {
  loading.value = true;
  api
    .post("/auth/forgot-password", {
      email: email.value,
    })
    .then((response) => {
      successMessage.value = response.data.message;
      errorMessage.value = "";
    })
    .catch((error) => {
      errorMessage.value = error.response.data.message;
      successMessage.value = "";
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
