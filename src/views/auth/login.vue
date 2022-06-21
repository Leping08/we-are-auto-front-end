<template>
  <div class="flex">
    <div></div>
    <div class="m-auto w-1/2">
      <v-card heading="Login" :padding="true" :border="true">
        <div>
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
          <div class="text-sm text-blue-500 my-2">
            <router-link :to="{ name: 'auth.register' }">
              Don't have an account?
            </router-link>
          </div>
          <div>
            <v-button
              color="blue"
              size="md"
              rounded="rounded-lg"
              shadow="shadow"
              :disabled="!inputsAreValid"
              @click="attemptLogin"
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
      email: "",
      emailValidated: true,
      password: "",
      passwordValidated: true,
    };
  },
  computed: {
    ...mapGetters("user", ["isAuthenticated"]),
    inputsAreValid() {
      return this.email && this.password;
    },
  },
  created() {
    this.isAuthenticated ? this.$router.push({ name: "races.index" }) : "";
  },
  methods: {
    ...mapActions("user", ["login", "setUser", "setToken"]),
    async attemptLogin() {
      try {
        // todo catch failed login and handel it better
        // todo add loading spinner
        const { data } = await this.login({
          email: this.email,
          password: this.password,
        });

        if (!data.access_token) {
          throw new Error("No access token returned");
        }

        await this.setToken(data.access_token);
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
