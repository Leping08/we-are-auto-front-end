<template>
  <div class="bg-gradient-to-r from-blue-400 to-blue-600">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav aria-label="Progress" class="p-4">
      <ol
        role="list"
        class="
          rounded-lg
          divide-y divide-gray-300
          md:flex md:divide-y-0
          overflow-hidden
          shadow-lg
        "
      >
        <li
          v-for="(step, stepIdx) in steps"
          :key="step.name"
          @click="selectStep(stepIdx + 1)"
          class="relative md:flex-1 md:flex bg-white cursor-pointer"
        >
          <a
            v-if="step.status === 'complete'"
            class="group flex items-center w-full"
          >
            <div
              class="
                px-6
                py-4
                flex
                justify-between
                w-full
                items-center
                text-sm
                font-medium
              "
            >
              <div class="items-center flex">
                <div
                  class="
                    flex-shrink-0
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    bg-blue-600
                    rounded-full
                    group-hover:bg-blue-800
                  "
                >
                  <check class="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div class="ml-4 text-sm font-medium text-gray-900">
                  {{ step.name }}
                </div>
              </div>
              <div>
                <div
                  class="text-sm font-medium text-gray-900"
                  v-if="selectedSeries && stepIdx === 1"
                >
                  {{ selectedSeries.name }}
                </div>
              </div>
            </div>
          </a>
          <a
            v-else-if="step.status === 'current'"
            class="px-6 py-4 flex items-center text-sm font-medium"
            aria-current="step"
          >
            <span
              class="
                flex-shrink-0
                w-10
                h-10
                flex
                items-center
                justify-center
                border-2 border-blue-600
                rounded-full
              "
            >
              <span class="text-blue-600">{{ step.id }}</span>
            </span>
            <span class="ml-4 text-sm font-medium text-blue-600">{{
              step.name
            }}</span>
          </a>
          <a v-else class="group flex items-center">
            <span class="px-6 py-4 flex items-center text-sm font-medium">
              <span
                class="
                  flex-shrink-0
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  border-2 border-gray-300
                  rounded-full
                  group-hover:border-gray-400
                "
              >
                <span class="text-gray-500 group-hover:text-gray-900">{{
                  step.id
                }}</span>
              </span>
              <span
                class="
                  ml-4
                  text-sm
                  font-medium
                  text-gray-500
                  group-hover:text-gray-900
                "
                >{{ step.name }}</span
              >
            </span>
          </a>
          <template v-if="stepIdx !== steps.length - 1">
            <!-- Arrow separator for lg screens and up -->
            <div
              class="hidden md:block absolute top-0 right-0 h-full w-5"
              aria-hidden="true"
            >
              <svg
                class="h-full w-full text-gray-300"
                viewBox="0 0 22 80"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 -2L20 40L0 82"
                  vector-effect="non-scaling-stroke"
                  stroke="currentcolor"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </template>
        </li>
      </ol>
    </nav>

    <div v-if="currentStep.id === 1" class="flex w-full">
      <div
        v-for="currentSeries in series"
        :key="currentSeries"
        @click="selectSeries(currentSeries)"
        class="
          rounded-lg
          shadow-lg
          overflow-hidden
          w-1/3
          p-4
          m-4
          bg-white
          cursor-pointer
        "
      >
        <div class="">
          {{ currentSeries.name }}
        </div>
        <div>
          <img :src="currentSeries.logo" alt="" />
        </div>
      </div>
    </div>

    <div v-if="currentStep.id === 2">
      <div v-if="!selectedSeries.seasons.length">
        {{ selectedSeries.name }} has no races yet.
      </div>
      <div
        v-for="season in selectedSeries.seasons"
        :key="season"
        class="flex w-full"
      >
        <div class="m-4 p-4 bg-white rounded-lg w-1/3">
          <pill :series="selectedSeries" />
          <div @click="selectSeason(season)">
            {{ season.name }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative rounded-xl overflow-auto p-8 w-full"
      v-if="currentStep.id === 3"
    >
      <div class="grid grid-cols-4 gap-4">
        <div v-for="race in seriesSeasonRaces" :key="race.id" class="h-full">
          <div v-if="!loadingSeriesSeasonRaces" class="h-full">
            <router-link
              tag="div"
              :to="{ name: 'races.show', params: { id: race.id } }"
            >
              <!-- TODO make this a component that does not throw the error: "Cannot destructure property 'type' of 'vnode' as it is null." -->
              <race-card :race="race" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Series from "@/api/models/series.js";
import Check from "@/assets/icons/check.vue";
import Pill from "@/components/series/pill.vue";
import RaceCard from "@/components/races/raceCard.vue";
export default {
  components: {
    Check,
    Pill,
    RaceCard,
  },
  data() {
    return {
      loadingSeries: true,
      series: [],
      selectedSeries: null,
      loadingSeasons: true,
      seasons: [
        {
          id: 1,
          name: "2021",
        },
        {
          id: 2,
          name: "2022",
        },
      ],
      selectedSeason: null,
      loadingSeriesSeasonRaces: true,
      seriesSeasonRaces: [],
      steps: [
        { id: 1, name: "Series", status: "current" },
        { id: 2, name: "Season", status: "upcoming" },
        { id: 3, name: "Race", status: "upcoming" },
      ],

      // TODO
      // show the latest 6 races if no filters are set up
      // add the ability to search all races
    };
  },
  methods: {
    async getSeries() {
      this.loadingSeries = true;
      this.series = [];
      ({ data: this.series } = await new Series().index());
      this.loadingSeries = false;
    },
    async getSeriesSeason() {
      // Check if the user has selected a series and season
      if (!(this.selectedSeries && this.selectedSeason)) {
        return;
      }

      this.loadingSeriesSeasonRaces = true;
      this.seriesSeasonRaces = [];
      ({ data: this.seriesSeasonRaces } = await new Series().series_season(
        this.selectedSeries?.id,
        this.selectedSeason?.id
      ));
      this.loadingSeriesSeasonRaces = false;
    },
    selectSeries(series) {
      this.selectedSeries = series;
      this.getSeriesSeason();
      this.selectStep(2);
    },
    selectSeason(season) {
      console.log(season);
      this.selectedSeason = season;
      this.getSeriesSeason();
      this.selectStep(3);
    },
    selectStep(index) {
      this.steps.forEach((step, idx) => {
        if (index < idx + 1) {
          step.status = "upcoming";
        } else if (index === idx + 1) {
          step.status = "current";
        } else {
          step.status = "complete";
        }
      });
    },
  },
  async mounted() {
    await this.getSeries();
  },
  watch: {
    selectedSeries() {
      this.getSeriesSeason();
    },
    selectedSeason() {
      this.getSeriesSeason();
    },
  },
  computed: {
    currentStep() {
      return this.steps.filter((step) => step.status === "current")[0];
    },
  },
};
</script>
