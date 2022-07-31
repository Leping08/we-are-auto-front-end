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
            <v-input
              v-model="password"
              color="blue"
              label="Password"
              :rules="['min:2', 'max:255', 'required']"
              type="password"
            />
          </div>
          <div class="my-4">
            <v-input
              v-model="confirmPassword"
              color="blue"
              label="Confirm Password"
              :rules="['min:2', 'max:255', 'required']"
              type="password"
            />
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

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      emailValidated: true,
      password: "",
      confirmPassword: "",
      signUpLoading: false,
      errorMessage: "",
    };
  },
  computed: {
    ...mapGetters("user", ["isAuthenticated"]),
    inputsAreValid() {
      return this.name && this.email && this.confirmPassword === this.password;
    },
  },
  created() {
    this.isAuthenticated ? this.$router.push({ name: "races.index" }) : "";
  },
  methods: {
    ...mapActions("user", ["login", "setUser", "setToken", "register"]),
    async attemptSignUp() {
      try {
        this.signUpLoading = true;
        this.errorMessage = "";
        const { data } = await this.register({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
        });
        if (data?.access_token) {
          await this.setToken(data?.access_token);
          await this.setUser();
          this.$router.push({
            name: "races.index",
          });
        } else {
          this.errorMessage = data?.message || "Oh no, an error occurred";
        }
      } catch (error) {
        console.error(error);
        if (error?.response?.data?.message) {
          this.errorMessage = error?.response?.data?.message;
        }
        this.signUpLoading = false;
      }
      this.signUpLoading = false;
    },
  },
};
</script>
