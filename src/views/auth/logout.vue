<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.logout();
    this.$router.push({ name: "auth.login" });
  },
  methods: {
    ...mapActions("user", ["logout"]),
  },
};
</script>
