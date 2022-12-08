<template>
  <div></div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";

onMounted(async () => {
  const authStore = useAuthStore();
  await authStore.logout();
  const router = useRouter();
  router.push({ name: "auth.login" });
});
</script>
