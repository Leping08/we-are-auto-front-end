<template>
  <div class="grid gap-4 p-4">
    <profile />

    <password-change />

    <notifications />
  </div>
</template>

<script setup>
import profile from "@/components/user/profile.vue";
import passwordChange from "@/components/user/passwordChange.vue";
import notifications from "@/components/user/notifications.vue";
</script>
