<template>
  <div v-if="authStore.isAuthenticated">
    <slot></slot>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth.js";
const authStore = useAuthStore();
</script>
