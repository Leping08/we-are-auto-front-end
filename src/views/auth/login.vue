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
              class="w-full"
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
          <div
            class="text-sm text-blue-500 dark:text-blue-400 my-2 flex justify-between items-center"
          >
            <router-link :to="{ name: 'auth.register' }"> Sign up </router-link>
            <router-link :to="{ name: 'auth.forgot-password' }">
              Forgot your password?
            </router-link>
          </div>
          <div>
            <v-button
              v-if="!loginLoading"
              color="blue"
              size="md"
              rounded="rounded-lg"
              shadow="shadow"
              :disabled="!inputsAreValid"
              @click="attemptLogin"
              class="mt-2"
            >
              Submit
            </v-button>
            <v-progress-spinner v-if="loginLoading" :size="6" color="blue" />
            <div
              v-if="errorMessage && !loginLoading"
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
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import eyeOff from "@/assets/icons/eye-off-outline.vue";
import eye from "@/assets/icons/eye-outline.vue";

const authStore = useAuthStore();
const router = useRouter();
const loginLoading = ref(false);
const errorMessage = ref("");
const email = ref("");
const password = ref("");
const showPassword = ref(false);
const passwordValidated = ref(true);
const emailValidated = ref(true);

const attemptLogin = async () => {
  if (!inputsAreValid.value) return;
  
  loginLoading.value = true;
  errorMessage.value = "";

  try {
    const { data } = await authStore.login({
      email: email.value,
      password: password.value,
    });

    await Promise.all([
      authStore.setToken(data.token),
      authStore.setUser()
    ]);

    router.push({ name: "races.index" });
  } catch (error) {
    console.error("Login error:", error);
    errorMessage.value = error?.response?.data?.message || error.message || "An error occurred during login";
  } finally {
    loginLoading.value = false;
  }
};

const inputsAreValid = computed(() => {
  return emailValidated.value && passwordValidated.value;
});
</script>
