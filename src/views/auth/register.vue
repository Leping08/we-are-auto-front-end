<template>
  <div class="flex">
    <div></div>
    <div class="m-auto w-1/2">
      <v-card heading="Sign Up" :padding="true" :border="true">
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
              color="blue"
              size="md"
              rounded="rounded-lg"
              shadow="shadow"
              :disabled="!inputsAreValid"
              @click="attemptSignUp"
            >
              Submit
            </v-button>
          </div>
        </div>
      </v-card>
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
        // todo catch failed login and handel it better
        const { data } = await this.register({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
        });
        await this.setToken(data?.access_token);
        await this.setUser();
        this.$router.push({
          name: "races.index",
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
