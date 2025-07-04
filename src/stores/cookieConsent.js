import { defineStore } from "pinia";

export const useCookieConsentStore = defineStore("cookieConsent", {
  state: () => ({
    consentGiven: localStorage.getItem("cookieConsent") === "true",
    bannerVisible: localStorage.getItem("cookieConsent") === null,
  }),
  actions: {
    acceptCookies() {
      this.consentGiven = true;
      this.bannerVisible = false;
      localStorage.setItem("cookieConsent", "true");
    },
    rejectCookies() {
      this.consentGiven = false;
      this.bannerVisible = false;
      localStorage.setItem("cookieConsent", "false");
    },
    resetConsent() {
      this.consentGiven = false;
      this.bannerVisible = true;
      localStorage.removeItem("cookieConsent");
    },
  },
});