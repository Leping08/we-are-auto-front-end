<template>
  <div
    v-if="cookieStore.bannerVisible"
    class="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 shadow-lg"
  >
    <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex-1 text-sm text-gray-600 dark:text-gray-300">
          <p>
            We use cookies to improve your experience on our website. By
            continuing to use our site, you agree to our use of cookies.
            <router-link
              :to="{ name: 'legal.privacy-policy' }"
              class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline"
            >
              Learn more
            </router-link>
          </p>
        </div>
        <div class="flex gap-3">
          <button
            @click="cookieStore.rejectCookies()"
            class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors"
          >
            Decline
          </button>
          <button
            @click="cookieStore.acceptCookies()"
            class="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-blue-700 rounded-md transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCookieConsentStore } from "@/stores/cookieConsent.js";

const cookieStore = useCookieConsentStore();
</script>