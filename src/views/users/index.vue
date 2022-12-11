<template>
  <div>
    <div class="space-y-6 m-4">
      <profile />

      <password-change />

      <notifications />
    </div>
  </div>
</template>

<script setup>
import profile from "@/components/user/profile.vue";
import passwordChange from "@/components/user/passwordChange.vue";
import notifications from "@/components/user/notifications.vue";
</script>
