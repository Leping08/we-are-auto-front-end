import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CookieBanner from "../CookieBanner.vue";
import { useCookieConsentStore } from "@/stores/cookieConsent.js";

describe("CookieBanner", () => {
  let wrapper;
  let pinia;

  beforeEach(() => {
    // Clear localStorage
    localStorage.clear();
    
    // Create a fresh pinia instance for each test
    pinia = createPinia();
    setActivePinia(pinia);
    
    // Mount the component
    wrapper = mount(CookieBanner, {
      global: {
        plugins: [pinia],
        stubs: {
          'router-link': {
            template: '<a><slot /></a>'
          }
        }
      }
    });
  });

  it("renders banner when consent is not given", () => {
    expect(wrapper.isVisible()).toBe(true);
    expect(wrapper.text()).toContain("We use cookies to improve your experience");
  });

  it("hides banner when accept is clicked", async () => {
    const buttons = wrapper.findAll('button');
    const acceptButton = buttons.find(btn => btn.text().includes('Accept'));
    
    await acceptButton.trigger("click");
    
    expect(wrapper.isVisible()).toBe(false);
    expect(localStorage.getItem("cookieConsent")).toBe("true");
  });

  it("hides banner when decline is clicked", async () => {
    const buttons = wrapper.findAll('button');
    const declineButton = buttons.find(btn => btn.text().includes('Decline'));
    
    await declineButton.trigger("click");
    
    expect(wrapper.isVisible()).toBe(false);
    expect(localStorage.getItem("cookieConsent")).toBe("false");
  });

  it("does not render when consent is already given", async () => {
    // Set consent in localStorage before creating the store
    localStorage.setItem("cookieConsent", "true");
    
    // Create a new pinia instance and mount fresh component
    const freshPinia = createPinia();
    setActivePinia(freshPinia);
    
    const freshWrapper = mount(CookieBanner, {
      global: {
        plugins: [freshPinia],
        stubs: {
          'router-link': {
            template: '<a><slot /></a>'
          }
        }
      }
    });
    
    expect(freshWrapper.isVisible()).toBe(false);
  });
});