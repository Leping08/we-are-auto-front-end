<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="h-screen flex overflow-hidden bg-gray-100"
    v-if="!$route.meta.disable_nav"
  >
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        static
        class="fixed inset-0 flex z-40 md:hidden"
        @close="sidebarOpen = false"
        :open="sidebarOpen"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  class="
                    ml-1
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                    focus:outline-none
                  "
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <close class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-1 h-0 overflow-y-auto">
              <div class="flex-shrink-0 flex items-center px-4 bg-gray-900">
                <img
                  class="h-14 w-auto"
                  src="@/assets/logos/waa-logo-light.svg"
                  alt="We Are Auto"
                />
                <div class="text-gray-100 tracking-tight text-xl px-2">
                  We Are Auto
                </div>
              </div>
              <nav class="mt-2 px-2 space-y-1">
                <template v-for="item in navigation" :key="item.name">
                  <router-link
                    v-if="!item.coming_soon"
                    tag="a"
                    :to="{ name: item.route }"
                    @click="sidebarOpen = false"
                    :class="[
                      $route.matched.some(
                        ({ name }) => name === item.name.toLowerCase()
                      )
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        $route.matched.some(
                          ({ name }) => name === item.name.toLowerCase()
                        )
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-4 flex-shrink-0 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </router-link>

                  <div
                    v-if="item.coming_soon"
                    :class="[
                      $route.matched.some(
                        ({ name }) => name === item.name.toLowerCase()
                      )
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        $route.matched.some(
                          ({ name }) => name === item.name.toLowerCase()
                        )
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-4 flex-shrink-0 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    <div class="pr-4">
                      {{ item.name }}
                    </div>
                    <v-badge> Coming Soon </v-badge>
                  </div>
                </template>
              </nav>
            </div>
            <div class="flex-shrink-0 flex bg-gray-700 p-4">
              <router-link
                :to="{ name: 'users.profile' }"
                class="flex items-center"
                v-if="user"
              >
                <div>
                  <img
                    class="inline-block h-10 w-10 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-white">{{ user.name }}</p>
                  <div
                    class="
                      text-xs
                      font-medium
                      text-gray-300
                      group-hover:text-gray-200
                    "
                  >
                    View profile
                  </div>
                </div>
              </router-link>
              <router-link
                :to="{ name: 'auth.login' }"
                class="flex items-center"
                v-else
              >
                <div>
                  <img
                    class="inline-block h-10 w-10 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <!-- <p class="text-sm font-medium text-white">Tom Cook</p> -->
                  <a
                    class="
                      text-xs
                      font-medium
                      text-gray-300
                      group-hover:text-gray-200
                    "
                  >
                    Login / Sign Up
                  </a>
                </div>
              </router-link>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col h-0 flex-1 bg-gray-800">
          <div class="flex-1 flex flex-col overflow-y-auto bg-gray-900">
            <div class="flex items-center flex-shrink-0 p-1">
              <img
                class="h-16 w-auto"
                src="@/assets/logos/waa-logo-light.svg"
                alt="We Are Auto"
              />
              <div class="text-gray-100 tracking-tight text-xl px-2">
                We Are Auto
              </div>
            </div>
            <nav class="flex-1 px-2 bg-gray-800 space-y-1 py-2">
              <template v-for="item in navigation" :key="item.name">
                <router-link
                  v-if="!item.coming_soon"
                  tag="a"
                  :to="{ name: item.route }"
                  :class="[
                    $route.matched.some(({ name }) =>
                      name.includes(item.name.toLowerCase())
                    )
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  ]"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      $route.matched.some(({ name }) =>
                        name.includes(item.name.toLowerCase())
                      )
                        ? 'text-gray-300'
                        : 'text-gray-400 group-hover:text-gray-300',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    ]"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </router-link>

                <div
                  v-if="item.coming_soon"
                  :class="[
                    $route.matched.some(({ name }) =>
                      name.includes(item.name.toLowerCase())
                    )
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  ]"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      $route.matched.some(({ name }) =>
                        name.includes(item.name.toLowerCase())
                      )
                        ? 'text-gray-300'
                        : 'text-gray-400 group-hover:text-gray-300',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    ]"
                    aria-hidden="true"
                  />
                  <div class="pr-4">
                    {{ item.name }}
                  </div>
                  <v-badge> Coming Soon </v-badge>
                </div>
              </template>
            </nav>
          </div>
          <div class="flex-shrink-0 flex bg-gray-700 p-4">
            <div class="flex-shrink-0 w-full group block">
              <router-link
                :to="{ name: 'users.profile' }"
                class="flex items-center"
                v-if="user"
              >
                <div>
                  <img
                    class="inline-block h-10 w-10 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-white">{{ user.name }}</p>
                  <div
                    class="
                      text-xs
                      font-medium
                      text-gray-300
                      group-hover:text-gray-200
                    "
                  >
                    View profile
                  </div>
                </div>
              </router-link>
              <router-link
                :to="{ name: 'auth.login' }"
                class="flex items-center"
                v-else
              >
                <div>
                  <img
                    class="inline-block h-10 w-10 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <!-- <p class="text-sm font-medium text-white">Tom Cook</p> -->
                  <a
                    class="
                      text-xs
                      font-medium
                      text-gray-300
                      group-hover:text-gray-200
                    "
                  >
                    Login / Sign Up
                  </a>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="md:hidden pl-1 py-1 bg-gray-800">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <button
              class="
                -ml-0.5
                -mt-0.5
                h-12
                w-12
                inline-flex
                items-center
                justify-center
                rounded-md
                text-gray-200
                hover:text-gray-400
                focus:outline-none
              "
              @click="sidebarOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <menuIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="flex-1 w-full">
            <img
              class="h-12 w-auto mx-auto"
              src="@/assets/logos/waa-logo-light.svg"
              alt="We Are Auto"
            />
          </div>
          <div class="flex-1 text-center"></div>
        </div>
      </div>

      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <TransitionRoot as="template" :show="showPodcast">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-y-full"
            enter-to="translate-y-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="-translate-y-0"
            leave-to="translate-y-full"
          >
            <div class="fixed bottom-0 z-10 w-full md:pr-64">
              <podcastPlayer />
            </div>
          </TransitionChild>
        </TransitionRoot>
        <div class="relative">
          <router-view />
          <!-- This is for spacing related to the podcast slide up -->
          <TransitionRoot as="template" :show="showPodcast">
            <TransitionChild
              as="template"
              enter="transition ease-in-out duration-100 transform"
              enter-from="translate-y-full"
              enter-to="translate-y-0"
              leave="transition ease-in-out duration-100 transform"
              leave-from="-translate-y-0"
              leave-to="translate-y-full"
            >
              <div class="h-32"></div>
            </TransitionChild>
          </TransitionRoot>
        </div>
      </main>
    </div>
  </div>
  <div v-if="$route.meta.disable_nav">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { shallowRef } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import close from "@/assets/icons/close.vue";
import menuIcon from "@/assets/icons/menu.vue";
import waveform from "@/assets/icons/waveform.vue";
import trophy from "@/assets/icons/trophy.vue";
import garage from "@/assets/icons/garage.vue";
import flag from "@/assets/icons/flag-checkered.vue";
import podcastPlayer from "@/views/podcasts/player.vue";

const navigation = [
  {
    name: "Home",
    route: "home.index",
    icon: shallowRef(garage),
    coming_soon: false,
  },
  {
    name: "Podcast",
    route: "podcasts.index",
    icon: shallowRef(waveform),
    coming_soon: false,
  },
  {
    name: "Races",
    route: "races.index",
    icon: shallowRef(flag),
    coming_soon: false,
  },
  {
    name: "Fantasy",
    route: "fantasy.index",
    icon: shallowRef(trophy),
    coming_soon: true,
  },
];

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    close,
    menuIcon,
    podcastPlayer,
  },
  data() {
    return {
      navigation,
      sidebarOpen: false,
    };
  },
  computed: {
    ...mapState("podcast", {
      showPodcast: (state) => state.showPodcastFooter,
    }),
    ...mapState("user", {
      user: (state) => state.user,
    }),
    ...mapGetters("user", ["isAdmin", "isAuthenticated"]),
  },
  methods: {
    ...mapActions("user", ["setUser"]),
  },
  created() {
    if (this.isAuthenticated) {
      this.setUser(this.user);
    }
  },
};
</script>
