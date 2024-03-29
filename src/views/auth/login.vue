<template>
  <div class="flex bg-gradient-to-r from-blue-400 to-blue-600 h-screen">
    <div class="m-auto w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3">
      <div class="p-8 bg-white rounded-lg shadow-lg relative">
        <div class="w-full flex justify-center absolute -top-14 left-0">
          <div class="bg-white rounded-full p-2">
            <div class="rounded-full shadow-lg border">
              <img
                class="h-24 w-auto"
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
                class="text-gray-500 pt-5 ml-2 cursor-pointer"
                @click="showPassword = !showPassword"
              >
                <eye v-if="!showPassword" class="h-6" />
                <eye-off v-if="showPassword" class="h-6" />
              </div>
            </div>
          </div>
          <div
            class="text-sm text-blue-500 my-2 flex justify-between items-center"
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
              class="mt-2 text-sm text-red-600"
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
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import eyeOff from "@/assets/icons/eye-off-outline.vue";
import eye from "@/assets/icons/eye-outline.vue";

const loginLoading = ref(false);
const errorMessage = ref("");
const email = ref("");
const password = ref("");
const showPassword = ref(false);
const passwordValidated = ref(true);
const emailValidated = ref(true);

async function attemptLogin() {
  loginLoading.value = true;
  errorMessage.value = "";
  const authStore = useAuthStore();
  const router = useRouter();

  try {
    const { data } = await authStore.login({
      email: email.value,
      password: password.value,
    });

    if (data?.access_token) {
      await authStore.setToken(data?.access_token);
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
  }
  loginLoading.value = false;
}

const inputsAreValid = computed(() => {
  return emailValidated.value && passwordValidated.value;
});

onMounted(() => {
  const authStore = useAuthStore();
  if (authStore.isLoggedIn) {
    const router = useRouter();
    router.push({ name: "obs.outline" });
  }
});
</script>
