<template>
  <div class="">
    <div class="h-full bg-gray-100 dark:bg-gray-900">
      <div class="h-full">
        <div class="min-h-full">
          <Disclosure as="nav"
            class="bg-white bg-gradient-to-r dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800"
            v-slot="{ close, open }">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                  <div class="shrink-0 flex items-center">
                    <img class="size-12 w-auto mx-auto m-1 rounded-full bg-white" src="@/assets/logos/waa-logo-dark.svg"
                      alt="We Are Auto" />
                  </div>
                  <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                      <router-link v-for="item in navigation" :key="item.name" :to="{ name: item.route }"
                        class="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center"
                        :aria-current="item.name">
                        <component :is="item.icon" class="mr-2 size-5" aria-hidden="true" />{{ item.name }}
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block">
                  <div class="ml-4 flex items-center md:ml-6">
                    <div class="flex items-center">
                      <sun class="size-6 text-gray-400 mr-4" />
                      <dark-mode-toggle />
                      <moon class="size-6 text-gray-400 ml-4" />
                    </div>

                    <!-- <button type="button"
                      class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white dark:focus:ring-offset-gray-900">
                      <span class="absolute -inset-1.5" />
                      <span class="sr-only">View notifications</span>
                      <BellIcon class="size-6" aria-hidden="true" />
                    </button> -->

                    <!-- Profile dropdown -->
                    <Menu as="div" class="relative ml-3">
                      <div>
                        <MenuButton
                          class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:bg-gray-700 dark:focus:ring-offset-gray-900">
                          <span class="absolute -inset-1.5" />
                          <span class="sr-only">Open user menu</span>
                          <profileIcon aria-hidden="true" />
                        </MenuButton>
                      </div>
                      <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                          class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800 dark:ring-white/10">
                          <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                          <router-link :to="{ name: item.route }"
                            :class="[active ? 'bg-gray-100 outline-none dark:bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200']">{{
                              item.name }}</router-link>
                          </MenuItem>
                        </MenuItems>
                      </transition>
                    </Menu>
                  </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                  <!-- Mobile menu button -->
                  <DisclosureButton
                    as="button"
                    class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:text-gray-400 bg-white focus:bg-gray-200 dark:bg-gray-800 dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:ring-offset-gray-800">
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Open main menu</span>
                    <menuIcon v-if="!open" class="block size-6" aria-hidden="true" />
                    <close v-else class="block size-6" aria-hidden="true" />
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel class="md:hidden">
              <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                <router-link v-for="item in navigation" :key="item.name" :to="{ name: item.route }"
                  @click="closeMenu(close)"
                  class="rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white flex items-center"
                  :aria-current="item.name">
                  <component :is="item.icon" class="mr-2 size-5" aria-hidden="true" />{{ item.name }}
                </router-link>
              </div>
              <div class="px-4 pb-4 sm:px-3">
                <div class="flex items-center">
                  <sun class="size-6  text-gray-600 dark:text-gray-400 mr-4" />
                  <dark-mode-toggle />
                  <moon class="size-6 text-gray-600 dark:text-gray-300 ml-4" />
                </div>
              </div>
              <div class="border-t border-gray-700 pb-3 pt-4 dark:border-gray-600">
                <div class="flex items-center px-5">
                  <profileIcon class="size-10" />
                  <div class="ml-3">
                    <div class="text-base/5 font-medium text-gray-600 dark:text-gray-300">{{ authStore?.user?.name }}
                    </div>
                    <div class="text-sm font-medium text-gray-600 dark:text-gray-300">{{ authStore?.user?.email }}</div>
                  </div>
                  <!-- <button type="button"
                    class="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white dark:focus:ring-offset-gray-900">
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">View notifications</span>
                    <BellIcon class="size-6" aria-hidden="true" />
                  </button> -->
                </div>
                <div class="mt-3 space-y-1 px-2">
                  <router-link v-for="item in userNavigation" :key="item.name" :to="{ name: item.route }"
                    @click="closeMenu(close)"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                    {{ item.name }}</router-link>
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>

          <main>
            <div class="mx-full">
              <router-view />
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { onMounted, computed, ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
// import Guest from "@/components/auth/guest.vue";
// import Authenticated from "@/components/auth/authenticated.vue";
import close from "@/assets/icons/close.vue";
import menuIcon from "@/assets/icons/menu.vue";
import garage from "@/assets/icons/garage.vue";
import flag from "@/assets/icons/flag-checkered.vue";
import shuffle from "@/assets/icons/shuffle.vue";
import sun from "@/assets/icons/sun.vue";
import moon from "@/assets/icons/moon.vue";
import darkModeToggle from "@/components/themeToggle.vue";
import profileIcon from "./components/auth/profileIcon.vue";

const closeMenu = (close) => {
  close();
};

const authStore = useAuthStore();
onMounted(async () => {
  await authStore.setUser();
});

const isAuthenticated = computed(() => authStore.isAuthenticated);
const userNavigation = computed(() => isAuthenticated.value ? authenticatedRoutes : guestRoutes);

const navigation = [
  {
    name: "Home",
    route: "home.index",
    icon: garage,
  },
  {
    name: "Watch",
    route: "races.filter",
    icon: flag,
  },
  {
    name: "Random Race",
    route: "races.random",
    icon: shuffle,
  },
];

const authenticatedRoutes = [
  {
    name: "Profile",
    route: "users.profile",
  },
  {
    name: "Logout",
    route: "auth.logout",
  },
];

const guestRoutes = [
  {
    name: "Sign Up",
    route: "auth.register",
  },
  {
    name: "Login",
    route: "auth.login",
  },
];
</script>
