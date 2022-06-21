<template>
  <div>
    <div class="p-4">
      {{ user }}
    </div>
    <div class="p-4">
      <v-button @click="logoutNow()">Logout</v-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("user", ["logout"]),
    async logoutNow() {
      await this.logout();
      this.$router.push({ name: "auth.login" });
    },
  },
};
</script>
