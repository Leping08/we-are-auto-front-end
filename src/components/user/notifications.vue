<template>
  <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
          Notifications
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Choose the types of notifications you would like to receive via email
          on a weekly basis.
        </p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form class="space-y-6" action="#" method="POST">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-6">
              <div class="contents text-base font-medium text-gray-900 dark:text-gray-100">
                Series Subscriptions
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                We will notify you via email when new races are available to
                watch.
                <router-link
                  class="text-blue-600 hover:underline dark:text-blue-400"
                  :to="{ name: 'races.filter' }"
                  >Watch Races</router-link
                >
              </div>
            </div>
            <template v-for="(singleSeries, index) in series" :key="index">
              <div class="md:col-span-2 sm:col-span-3 col-span-6">
                <div>
                  <series-notification :series="singleSeries" />
                </div>
              </div>
            </template>
            <!-- <div class="md:col-span-2 sm:col-span-3 col-span-6 flex items-center">
                    <v-toggle v-model="weAreAutoShow">Subscribed</v-toggle>
                    <div class="text-sm font-medium text-gray-900 ml-4">
                    All Series
                    </div>
                </div> -->
          </div>
        </form>
        <!-- <form class="space-y-6 mt-10" action="#" method="POST">
                <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-6">
                    <div class="contents text-base font-medium text-gray-900">
                    We Are Auto Show
                    </div>
                    <div class="text-sm text-gray-500">
                    A weekly show where we go deep into car news, culture, and interviews with fellow car enthusiasts. <router-link class="text-blue-600 hover:underline" :to="{ name: 'podcasts.index' }">Learn More</router-link>
                    </div>
                </div>
                <div class="md:col-span-2 sm:col-span-3 col-span-6">
                    <v-toggle v-model="weAreAutoShow">Subscribed</v-toggle>
                </div>
                </div>
            </form> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import FollowSeries from "@/api/models/follow-series.js";
import SeriesNotification from "@/components/user/seriesNotification.vue";

// Get all the series via api
const series = ref([]);
onMounted(async () => {
  const { data } = await new FollowSeries().index();
  series.value = data;
});
</script>
