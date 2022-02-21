<template>
  <div class="bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav aria-label="Progress" class="p-5">
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
                  v-if="selectedSeries && stepIdx === 0"
                >
                  {{ selectedSeries.name }}
                </div>
                <div
                  class="text-sm font-medium text-gray-900"
                  v-if="selectedSeries && stepIdx === 1"
                >
                  {{ selectedSeason.name }}
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

    <div v-if="currentStep.id === 1" class="flex">
      <div
        v-if="loadingSeries"
        class="
          w-full
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          pb-5
          px-5
        "
      >
        <div v-for="index in numOfSeries" :key="index">
          <loading-race-card />
        </div>
      </div>

      <div
        v-if="!loadingSeries"
        class="
          w-full
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          pb-5
          px-5
        "
      >
        <div
          v-for="currentSeries in series"
          :key="currentSeries"
          @click="selectSeries(currentSeries)"
          class="rounded-lg shadow-lg overflow-hidden bg-white cursor-pointer"
        >
          <div class="w-full relative">
            <img
              class="
                h-64
                w-full
                object-cover
                transform
                hover:scale-110
                duration-100
                ease-in-out
              "
              :src="currentSeries.image_url"
              alt=""
            />
            <series-pill
              class="absolute left-0 bottom-0 -my-6 ml-6"
              :series="currentSeries"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="pt-2">
              <div class="text-xl font-semibold text-gray-900 py-2">
                {{ currentSeries.full_name }}
              </div>
              <div class="text-sm text-gray-500">
                {{ currentSeries.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        relative
        rounded-xl
        overflow-auto
        p-4
        w-full
        md:w-2/3
        lg:w-1/2
        xl:w-1/3
        mx-auto
      "
      v-if="currentStep.id === 2"
    >
      <div class="rounded-lg shadow-lg overflow-hidden bg-white">
        <div class="w-full relative">
          <img
            class="
              h-64
              w-full
              object-cover
              transform
              hover:scale-110
              duration-100
              ease-in-out
            "
            :src="selectedSeries.image_url"
            alt=""
          />
          <series-pill
            class="absolute left-0 bottom-0 -my-6 ml-6"
            :series="selectedSeries"
          />
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="pt-2">
            <div class="text-xl font-semibold text-gray-900 py-2">
              {{ selectedSeries.full_name }}
            </div>
            <div
              v-if="!selectedSeries.seasons.length"
              class="text-md text-gray-600"
            >
              Sorry it looks like the {{ selectedSeries.name }} has no races
              yet.
            </div>
            <div v-if="selectedSeries.seasons.length">
              <div class="text-md text-gray-600">
                Please select a season of {{ selectedSeries.name }} racing to
                watch.
              </div>
              <ul role="list" class="divide-y divide-gray-200">
                <li
                  class="flex"
                  v-for="season in selectedSeries.seasons"
                  :key="season"
                  @click="selectSeason(season)"
                >
                  <div
                    class="
                      py-4
                      cursor-pointer
                      px-3
                      flex
                      justify-between
                      w-full
                      items-center
                      hover:bg-gray-200
                    "
                  >
                    <div>
                      <p class="font-medium text-gray-900">{{ season.name }}</p>
                    </div>
                    <div>
                      <v-badge color="blue">
                        {{ season.races_count }}
                      </v-badge>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="text-sm text-gray-500">{{ selectedSeries.description }}</div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full" v-if="currentStep.id === 3">
      <div
        v-if="loadingSeriesSeasonRaces"
        class="
          w-full
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-5
          pb-5
          px-5
        "
      >
        <div v-for="index in numOfRaces" :key="index">
          <loading-race-card />
        </div>
      </div>

      <div
        v-if="!loadingSeriesSeasonRaces"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-5 px-5"
      >
        <div v-for="race in seriesSeasonRaces" :key="race.id" class="h-full">
          <div class="h-full">
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
import RaceCard from "@/components/races/raceCard.vue";
import LoadingRaceCard from "@/components/races/loadingRaceCard.vue";
import SeriesPill from "@/components/series/pill.vue";
export default {
  components: {
    Check,
    RaceCard,
    LoadingRaceCard,
    SeriesPill,
  },
  data() {
    return {
      numOfSeries: 6,
      loadingSeries: true,
      series: [],
      selectedSeries: null,
      loadingSeasons: true,
      selectedSeason: null,
      numOfRaces: 8,
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
      this.selectStep(2);
      this.$router.push({
        name: "races.filter",
        query: { ...this.$route.query, series: this.selectedSeries.name },
      });
    },
    selectSeason(season) {
      this.selectedSeason = season;
      this.getSeriesSeason();
      this.selectStep(3);
      this.$router.push({
        name: "races.filter",
        query: { ...this.$route.query, season: this.selectedSeason.name },
      });
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
    filterDownByQueryParams() {
      if (this.$route.query.series) {
        this.selectedSeries = this.series.find(
          (series) => series.name === this.$route.query.series
        );
        this.selectStep(2);
      }
      if (this.$route.query.season) {
        this.selectedSeason = this.selectedSeries.seasons.find(
          (season) => season.name === this.$route.query.season
        );
        this.selectStep(3);
      }
    },
  },
  async mounted() {
    await this.getSeries();
    this.filterDownByQueryParams();
  },
  watch: {
    selectedSeries() {
      this.getSeriesSeason();
    },
    selectedSeason() {
      this.getSeriesSeason();
    },
    "$route.params.series"() {
      this.filterDownByQueryParams();
    },
    "$route.params.season"() {
      this.filterDownByQueryParams();
    },
  },
  computed: {
    currentStep() {
      return this.steps.filter((step) => step.status === "current")[0];
    },
  },
};
</script>
