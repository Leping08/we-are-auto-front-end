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
        <div class="my-4 flex items-center">
          <v-input
            class="w-full"
            v-model="newPassword"
            color="blue"
            label="New Password"
            placeholder=""
            :rules="['min:2', 'max:255', 'required']"
            :type="showPasswords ? 'text' : 'password'"
          />
          <div
            class="text-gray-500 pt-5 ml-2 cursor-pointer"
            @click="showPasswords = !showPasswords"
          >
            <eye v-if="!showPasswords" class="h-6" />
            <eye-off v-if="showPasswords" class="h-6" />
          </div>
        </div>
        <div class="my-4 flex items-center">
          <v-input
            class="w-full"
            v-model="confirmNewPassword"
            color="blue"
            label="Confirm New Password"
            placeholder=""
            :rules="['min:2', 'max:255', 'required']"
            :type="showPasswords ? 'text' : 'password'"
          />
          <div
            class="text-gray-500 pt-5 ml-2 cursor-pointer"
            @click="showPasswords = !showPasswords"
          >
            <eye v-if="!showPasswords" class="h-6" />
            <eye-off v-if="showPasswords" class="h-6" />
          </div>
        </div>
        <div class="pt-4">
          <div class="flex justify-end items-center">
            <div class="mr-2">
              <v-progress-spinner v-if="loading" :size="7" color="blue" />
            </div>
            <div class="flex justify-end">
              <v-button
                @click="submitResetPassword()"
                :disabled="
                  (!newPassword &&
                    !confirmNewPassword &&
                    !confirmNewPassword === newPassword) ||
                  loading
                "
                type="submit"
                >Submit</v-button
              >
            </div>
          </div>
          <div class="flex justify-end items-center">
            <div v-if="!loading && successMessage" class="mx-2 mt-4">
              <div class="flex items-center">
                <div>
                  <check-circle-outline class="text-green-500 h-6 w-6" />
                </div>
                <div class="text-green-500 ml-2">
                  {{ successMessage }}
                </div>
              </div>
            </div>
            <div v-if="!loading && errorMessage" class="mx-2 mt-4">
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

<script setup>
import api from "@/api/index.js";
import checkCircleOutline from "@/assets/icons/checkbox-marked-circle-outline.vue";
import closeCircleOutline from "@/assets/icons/close-circle-outline.vue";
import eyeOff from "@/assets/icons/eye-off-outline.vue";
import eye from "@/assets/icons/eye-outline.vue";
import accountLock from "@/assets/icons/account-lock.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const showPasswords = ref(false);
const newPassword = ref("");
const confirmNewPassword = ref("");
const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const submitResetPassword = async () => {
  loading.value = true;
  const response = await api.post("/auth/reset-password", {
    password: newPassword.value,
    password_confirmation: confirmNewPassword.value,
    email: router.currentRoute.value.query.email,
    token: router.currentRoute.value.query.token,
  });
  if (response.status === 200) {
    successMessage.value = response.data.message;
    errorMessage.value = "";
    loading.value = false;
    setTimeout(() => {
      router.push({ name: "auth.logout" });
    }, 2000);
  } else {
    errorMessage.value = response.data.message;
    successMessage.value = "";
    loading.value = false;
  }
};
</script>
