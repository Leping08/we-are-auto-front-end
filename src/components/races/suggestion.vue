<template>
  <div class="overflow-hidden">
    <div class="border dark:border-gray-700"></div>
    <div class="flex items-center justify-center aspect-video relative">
      <!-- <div class="absolute">
        <CalendarCheck class="text-blue-500 h-96 -z-10 top-1/2 opacity-10" />
      </div> -->
      <div class="z-10 m-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="font-semibold text-blue-600 dark:text-blue-400">Community Driven</h2>
              <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">We need your
                help!</p>
              <p class="mt-6 text-lg text-gray-500 dark:text-gray-400">The {{ race.name }} has completed but we have not located the video
                yet. <span v-if="race?.series?.settings?.youtube?.channel_id">It might be on the
                  <a class="text-blue-500 dark:text-blue-400" target="_blank"
                    :href="`https://youtube.com/${race.series.settings.youtube.channel_id}/videos`">{{ race.series.name
                    }}
                    youtube channel</a>
                  <open-in-new class="w-4 inline text-blue-500 dark:text-blue-400 mb-1 ml-1" />.</span>
              </p>
              <dl class="mt-10 max-w-xl space-y-8 text-gray-500 dark:text-gray-400 lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative pl-12">
                  <dt class="font-semibold text-gray-900 dark:text-white">
                    <component :is="feature.icon" class="absolute left-1 top-1 size-8 text-blue-600 dark:text-blue-400"
                      aria-hidden="true" />
                    {{ feature.name }}
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>
              </dl>
            </div>

            <!-- login/sign up button -->
            <guest class="">
              <div class="mt-10">
              <v-button color="blue" outline @click="this.$router.push({ name: 'auth.login' })">
                Login/Sign Up
              </v-button>
              </div>
            </guest>
          </div>

          <div class="flex items-center justify-center h-full">
            <images-carousel />
          </div>
        </div>


        <div class="mt-4 text-gray-500 dark:text-gray-400 mx-auto">
          <!-- <guest>
            The {{ race.name }} has completed but we have not located the video
            yet.
            <span v-if="race?.series?.settings?.youtube?.channel_id">We need your help to find it! It will most likley
              be on the
              <a class="text-blue-500" target="_blank"
                :href="`https://youtube.com/${race.series.settings.youtube.channel_id}/videos`">{{ race.series.name }}
                youtube channel</a>
              <open-in-new class="w-4 inline text-blue-500 mb-1 ml-1" />.</span>
            If you have found it and want to help keep the site up to date,
            please
            <router-link class="cursor-pointer text-blue-500" :to="{
              name: 'auth.register',
            }">sign up</router-link>
            or
            <router-link class="cursor-pointer text-blue-500" :to="{
              name: 'auth.login',
            }">login</router-link>
            and then come back to this page to submit the video. Thank you!
          </guest> -->

          <!-- <authenticated>
            The {{ race.name }} has completed but we have not located the video
            yet.
            <span v-if="race?.series?.settings?.youtube?.channel_id">We need your help to find it! It will most likley
              be on the
              <a class="text-blue-500" target="_blank"
                :href="`https://youtube.com/${race.series.settings.youtube.channel_id}/videos`">{{ race.series.name }}
                youtube channel</a>
              <open-in-new class="w-4 inline text-blue-500 mb-1 ml-1" />.</span>
            If you have found the {{ race.name }} on youtube please submit it
            below and we will add it to the site as soon as possible. Thank you!
          </authenticated> -->
        </div>

        <div class="mt-10">
          <authenticated>
            <div v-for="(suggestion, index) in suggestions" :key="suggestion">
              <!-- Check if even and odd -->
              <div class="grid grid-cols-5 gap-4 items-center border dark:border-gray-700 p-4"
                :class="index % 2 == 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'">
                <div class="text-center text-gray-500 dark:text-gray-400">
                  Part {{ suggestion.part }}
                </div>
                <div class="w-full">
                  <v-input label="Video Link" v-model="suggestion.link" v-model:validated="suggestion.link_validated"
                    color="blue" placeholder="https://www.youtube.com/watch?v=q2KLwPlfPHs"
                    :rules="['min:2', 'max:255', 'required']" type="text" />
                </div>
                <div class="w-full">
                  <v-input label="Start time in seconds" v-model="suggestion.start_time"
                    v-model:validated="suggestion.start_time_validated" color="blue" :placeholder="'52'"
                    :rules="['required']" type="number" />
                </div>
                <div class="w-full">
                  <v-input label="End time in seconds" v-model="suggestion.end_time"
                    v-model:validated="suggestion.end_time_validated" color="blue" :placeholder="'2345'"
                    :rules="['required']" type="number" />
                </div>
                <div class="">
                  <v-button color="red" outline size="sm" class="mt-5 mr-4" :class="index > 0 ? '' : 'invisible'"
                    @click="removePart(index)">
                    x
                  </v-button>
                </div>
              </div>
            </div>

            <div class="m-4 text-gray-500 dark:text-gray-400">
              Does the race have more than one part? Add multiple parts.
              <v-button color="blue" outline size="sm" @click="addPart">
                +
              </v-button>
            </div>

            <div class="px-4 pb-4 pt-2">
              <v-button :color="!suggestionsValidated ? 'gray' : 'blue'" :outline="!suggestionsValidated"
                :disabled="!suggestionsValidated" @click="submitVideoSuggestion">
                Send
              </v-button>
            </div>
          </authenticated>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Race from "@/api/models/races.js";
import Guest from "@/components/auth/guest.vue";
import Authenticated from "@/components/auth/authenticated.vue";
import CalendarCheck from "@/assets/icons/calendar-check.vue";
import People from "@/assets/icons/people.vue";
import BellCheckOutline from "@/assets/icons/bell-check-outline.vue";
import HandshakeOutline from "@/assets/icons/handshake-outline.vue";
import OpenInNew from "@/assets/icons/open-in-new.vue";
import ImagesCarousel from "@/components/races/imagesCarousel.vue";
export default {
  components: {
    Guest,
    Authenticated,
    CalendarCheck,
    OpenInNew,
    ImagesCarousel
  },
  data() {
    return {
      response: null,
      suggestions: [
        {
          part: 1,
          link: "",
          link_validated: false,
          start_time: null,
          start_time_validated: false,
          end_time: null,
          end_time_validated: false,
        },
      ],
      features: [
        {
          name: 'Help Us Help You',
          description: 'We need your help to find the video. If you have found it, please submit it below.',
          icon: HandshakeOutline,
        },
        {
          name: 'Conunity Driven',
          description: 'Submit the video below to help your fellow racers find the racing content they are looking for.',
          icon: People,
        },
        {
          name: 'Get Notified',
          description: 'Sign up to be notified when the video is added.',
          icon: BellCheckOutline,
        },
      ]
    };
  },
  props: {
    race: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async submitVideoSuggestion() {
      // Check input is validated before sending the request to the server
      if (!this.suggestionsValidated) {
        return;
      }

      // Send the request to the server
      try {
        ({ data: this.response } = await new Race().suggestion({
          data: this.suggestions,
          race_id: this.race.id,
        }));
      } catch (error) {
        //todo add error message to ui
        console.error(error);
      }

      //Clear out suggestions
      this.suggestions = [
        {
          part: 1,
          link: "",
          link_validated: false,
          start_time: null,
          start_time_validated: false,
          end_time: null,
          end_time_validated: false,
        },
      ];
      //@todo show success message
    },
    addPart() {
      this.suggestions.push({
        part: this.suggestions.length + 1,
        link: "",
        link_validated: false,
        start_time: null,
        start_time_validated: false,
        end_time: null,
        end_time_validated: false,
      });
    },
    removePart(index) {
      this.suggestions.splice(index, 1);
    },
  },
  computed: {
    suggestionsValidated() {
      return this.suggestions.every((suggestion) => {
        return (
          suggestion.link_validated &&
          suggestion.start_time_validated &&
          suggestion.end_time_validated
        );
      });
    },
  },
};
</script>
