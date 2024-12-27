<template>
  <div class="flex bg-gradient-to-br from-blue-400 to-blue-600 dark:from-gray-700 dark:to-blue-900 h-screen">
    <div class="m-auto w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3">
      <div class="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg relative">
        <div class="w-full flex justify-center absolute -top-14 left-0">
          <div class="bg-white dark:bg-gray-800 rounded-full p-2">
            <div class="rounded-full shadow-lg border dark:border-gray-700">
              <img
                class="size-24 bg-white rounded-full"
                src="@/assets/logos/waa-logo-dark.svg"
                alt="We Are Auto"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="my-4">
            <v-input
              v-model="name"
              color="blue"
              label="Name"
              placeholder="John Doe"
              :rules="['min:2', 'max:255', 'required']"
              type="text"
            />
          </div>
          <div class="my-4">
            <v-input
              v-model="email"
              color="blue"
              label="Email"
              placeholder="email@gmail.com"
              :rules="['min:2', 'max:255', 'required', 'email']"
              type="text"
            />
          </div>
          <div class="my-4">
            <div class="flex items-center">
              <v-input
                class="w-full"
                v-model="password"
                color="blue"
                label="Password"
                :rules="['min:2', 'max:255', 'required']"
                :type="showPassword ? 'text' : 'password'"
              />
              <div
                class="text-gray-500 dark:text-gray-400 pt-5 ml-2 cursor-pointer"
                @click="showPassword = !showPassword"
              >
                <eye v-if="!showPassword" class="h-6" />
                <eye-off v-if="showPassword" class="h-6" />
              </div>
            </div>
          </div>
          <div class="my-4">
            <div class="flex items-center">
              <v-input
                class="w-full"
                v-model="confirmPassword"
                color="blue"
                label="Confirm Password"
                :rules="['min:2', 'max:255', 'required']"
                :type="showPassword ? 'text' : 'password'"
              />
              <div
                class="text-gray-500 dark:text-gray-400 pt-5 ml-2 cursor-pointer"
                @click="showPassword = !showPassword"
              >
                <eye v-if="!showPassword" class="h-6" />
                <eye-off v-if="showPassword" class="h-6" />
              </div>
            </div>
          </div>
          <div class="my-4">
            <div class="flex items-center">
              <v-check-box
                color="blue"
                v-model="termsAndConditions"
                :value="true"
                label=""
                sub-title=""
              />
              <div class="text-gray-500 dark:text-gray-400 text-xs">
                I agree to the
                <a
                  class="text-blue-500"
                  target="_blank"
                  href="/terms-and-conditions"
                  >terms and conditions</a
                >
                and
                <a class="text-blue-500" target="_blank" href="/privacy-policy"
                  >privacy policy</a
                >.
              </div>
            </div>
          </div>
          <div>
            <v-button
              v-if="!signUpLoading"
              color="blue"
              size="md"
              rounded="rounded-lg"
              shadow="shadow"
              :disabled="!inputsAreValid"
              @click="attemptSignUp"
              class="mt-2"
            >
              Submit
            </v-button>
            <v-progress-spinner v-if="signUpLoading" :size="6" color="blue" />
            <div
              v-if="errorMessage && !signUpLoading"
              class="mt-2 text-sm text-red-600 dark:text-red-400"
            >
              {{ errorMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import eyeOff from "@/assets/icons/eye-off-outline.vue";
import eye from "@/assets/icons/eye-outline.vue";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const termsAndConditions = ref(false);
const showPassword = ref(false);
const signUpLoading = ref(false);
const errorMessage = ref("");
const router = useRouter();

const inputsAreValid = computed(() => {
  return (
    name.value &&
    email.value &&
    password.value &&
    confirmPassword.value &&
    termsAndConditions.value
  );
});

const attemptSignUp = async () => {
  const authStore = useAuthStore();

  try {
    signUpLoading.value = true;
    errorMessage.value = "";
    const { data } = await authStore.register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
      terms_and_conditions: termsAndConditions.value,
    });

    if (data?.access_token) {
      await authStore.setToken(data.access_token);
      await authStore.setUser();
      router.push({
        name: "races.index",
      });
    } else {
      errorMessage.value = data?.message || "Oh no, an error occurred";
    }
  } catch (error) {
    console.error(error);
    if (error?.response?.data?.message) {
      errorMessage.value = error?.response?.data?.message;
    }
    signUpLoading.value = false;
  }
  signUpLoading.value = false;
};
</script>
