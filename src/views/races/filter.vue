<template>
  <div class="bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav aria-label="Progress" id="progress" class="p-5">
      <ol
        role="list"
        class="rounded-lg divide-y divide-gray-300 md:flex md:divide-y-0 overflow-hidden shadow-lg"
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
              class="px-6 py-4 flex justify-between w-full items-center text-sm font-medium"
            >
              <div class="items-center flex">
                <div
                  class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full group-hover:bg-blue-800"
                >
                  <check class="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div class="ml-4 text-sm font-medium text-gray-900">
                  {{ step.name }}
                </div>
              </div>
              <div>
                <div
                  class="text-sm font-medium text-gray-500"
                  v-if="selectedSeries && stepIdx === 0"
                >
                  {{ selectedSeries.name }}
                </div>
                <div
                  class="text-sm font-medium text-gray-500"
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
              class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-blue-600 rounded-full"
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
                class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400"
              >
                <span class="text-gray-500 group-hover:text-gray-900">{{
                  step.id
                }}</span>
              </span>
              <span
                class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900"
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

    <div v-if="currentStep.id === 1" class="">
      <div class="bg-white rounded-lg p-5 mx-5 mb-5">
        <div class="flex items-center">
          <div class="w-full">
            <v-input
              v-model="searchText"
              color="cyan"
              placeholder="Search for a series"
              type="text"
            />
          </div>
          <div class="ml-4">
            <tooltip>
              <filter-icon
                @click="showFilters = !showFilters"
                :class="showFilters ? 'text-blue-500' : 'text-gray-400'"
                class="h-8 w-8 hover:text-blue-500 cursor-pointer rounded-full p-1"
              />
              <template #tooltip-content>
                <div class="text-sm leading-5 text-gray-500 w-20">Filters</div>
              </template>
            </tooltip>
          </div>
          <div class="ml-4">
            <tooltip>
              <shuffle
                @click="selectRandomRace"
                class="h-8 w-8 hover:text-blue-500 text-gray-400 cursor-pointer rounded-full p-1"
              />
              <template #tooltip-content>
                <div class="text-sm leading-5 text-gray-500 w-40">
                  Watch a random race
                </div>
              </template>
            </tooltip>
          </div>
        </div>

        <div class="mx-2" v-if="showFilters">
          <div class="flex justify-between">
            <div
              v-for="(filterGroup, groupIndex) in FilterGroups"
              :key="groupIndex"
            >
              <div class="mt-4">
                <legend class="sr-only">{{ filterGroup.name }}</legend>
                <label class="text-base font-semibold text-gray-900">{{
                  filterGroup.name
                }}</label>
                <div class="mb-2" />
                <div v-for="(tag, index) in filterGroup.tags" :key="index">
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <v-check-box
                        :id="tag.id"
                        v-model="filterValue"
                        :value="tag.id"
                        :label="tag.name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="loadingSeries"
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pb-5 px-5"
      >
        <div v-for="index in numOfSeries" :key="index">
          <loading-race-card />
        </div>
      </div>

      <div
        v-if="!loadingSeries"
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pb-5 px-5"
      >
        <div
          v-for="currentSeries in filteredSeries"
          :key="currentSeries"
          @click="selectSeries(currentSeries)"
          class="rounded-lg shadow-lg overflow-hidden bg-white cursor-pointer"
        >
          <div class="w-full relative">
            <img
              class="h-64 w-full object-cover transform hover:scale-110 duration-100 ease-in-out"
              :src="currentSeries.image_url"
              :alt="currentSeries.full_name"
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
      class="relative rounded-xl overflow-auto px-5 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto"
      v-if="currentStep.id === 2"
    >
      <div class="rounded-lg shadow-lg overflow-hidden bg-white">
        <div class="w-full relative">
          <img
            class="h-64 w-full object-cover transform hover:scale-110 duration-100 ease-in-out"
            :src="selectedSeries.image_url"
            :alt="selectedSeries.full_name"
          />
          <series-pill
            class="absolute left-0 bottom-0 -my-6 ml-6"
            :series="selectedSeries"
          />
          <div class="absolute right-0 bottom-0 -my-6 flex">
            <div v-if="selectedSeries.website" class="flex">
              <tooltip position="left" margin="mr-20">
                <template #tooltip-content>
                  <div class="w-60 text-sm text-gray-600 mr-4">
                    <div>Check out the {{ selectedSeries.name }} website.</div>
                  </div>
                </template>
                <div class="rounded-full mr-6 shadow-lg mb-1">
                  <a
                    :href="selectedSeries.website"
                    target="_blank"
                    class="cursor-pointer inline-flex items-center text-sm font-medium rounded-full shadow bg-white hover:bg-blue-50 active:bg-blue-100 focus:ring-0"
                  >
                    <open-in-new
                      class="w-6 h-6 text-gray-500 hover:text-blue-500 m-2"
                    />
                  </a>
                </div>
              </tooltip>
            </div>
            <div v-if="isAuthenticated" class="flex">
              <tooltip position="left" margin="mr-20">
                <template #tooltip-content>
                  <div class="w-60 text-sm text-gray-600 mr-4">
                    <div v-if="selectedSeriesFollowStatus">
                      You are currently subscribed to
                      {{ selectedSeries.name }} and will receive weekly updates
                      via email when new races are available.
                    </div>
                    <div v-if="!selectedSeriesFollowStatus">
                      Subscribe to {{ selectedSeries.name }} be notified via
                      email when new races are available.
                    </div>
                  </div>
                </template>
                <div class="rounded-full mr-6 shadow-lg mb-1">
                  <button
                    v-if="isAuthenticated"
                    @click="updateSeriesFollowStatus()"
                    class="inline-flex items-center text-sm font-medium rounded-full shadow bg-white hover:bg-blue-50 active:bg-blue-100 focus:ring-0"
                  >
                    <v-progress-spinner
                      v-if="seriesFollowStatusLoading"
                      color="blue"
                      :size="6"
                      class="m-2"
                    />
                    <bell-plus-outline
                      v-if="
                        !selectedSeriesFollowStatus &&
                        !seriesFollowStatusLoading
                      "
                      class="w-6 h-6 text-gray-500 hover:text-blue-500 m-2"
                    />
                    <bell-check-outline
                      v-if="
                        selectedSeriesFollowStatus && !seriesFollowStatusLoading
                      "
                      class="w-6 h-6 text-blue-500 hover:text-gray-500 m-2"
                    />
                  </button>
                </div>
              </tooltip>
            </div>
          </div>
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
                    class="py-4 cursor-pointer px-3 flex justify-between w-full items-center hover:bg-gray-200"
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
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5 pb-5 px-5"
      >
        <div v-for="index in numOfRaces" :key="index">
          <loading-race-card />
        </div>
      </div>

      <div
        v-if="!loadingSeriesSeasonRaces"
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5 pb-5 px-5"
      >
        <div v-for="race in seriesSeasonRaces" :key="race.id" class="h-full">
          <div class="h-full">
            <router-link
              tag="div"
              :to="{
                name: 'races.show',
                params: { id: race.id, text: race.name },
              }"
            >
              <race-card :race="race" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// todo move over to setup
import Series from "@/api/models/series.js";
import Race from "@/api/models/races.js";
import Check from "@/assets/icons/check.vue";
import BellPlusOutline from "@/assets/icons/bell-plus-outline.vue";
import BellCheckOutline from "@/assets/icons/bell-check-outline.vue";
import RaceCard from "@/components/races/raceCard.vue";
import LoadingRaceCard from "@/components/races/loadingRaceCard.vue";
import SeriesPill from "@/components/series/pill.vue";
import OpenInNew from "@/assets/icons/open-in-new.vue";
import FollowSeriesApi from "@/api/models/follow-series.js";
import Tooltip from "@/components/tooltip.vue";
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import FilterIcon from "@/assets/icons/filter.vue";
import Shuffle from "@/assets/icons/shuffle.vue";
import FilterGroups from "@/views/races/filterGroups.js";

export default {
  components: {
    Check,
    BellPlusOutline,
    BellCheckOutline,
    RaceCard,
    LoadingRaceCard,
    SeriesPill,
    OpenInNew,
    Tooltip,
    FilterIcon,
    Shuffle,
  },
  data() {
    return {
      numOfSeries: 6,
      loadingSeries: true,
      series: [],
      selectedSeries: null,
      selectedSeriesFollowStatus: false,
      seriesFollowStatusLoading: false,
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
      searchText: "",
      showFilters: false,
      FilterGroups,
      filterValue: [],
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
      // Check if step one has been completed yet
      if (this.currentStep.id === 1) {
        // Check if a series has been selected and if not then return
        if (!this.selectedSeries) {
          return;
        }
      }

      // Check if step two has been completed yet
      if (this.currentStep.id === 2) {
        // Check if a season has been selected and if not then return
        if (!this.selectedSeason) {
          return;
        }
      }

      this.steps.forEach((step, idx) => {
        if (index < idx + 1) {
          step.status = "upcoming";
        } else if (index === idx + 1) {
          step.status = "current";
        } else {
          step.status = "complete";
        }
      });
      this.scrollToTop();
    },
    filterDownByQueryParams() {
      if (!this.$route.query.series && !this.$route.query.season) {
        this.selectStep(1);
      }

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
    // todo add loading state
    async getSeriesFollowStatus() {
      this.seriesFollowStatusLoading = true;
      const response = await new FollowSeriesApi().show(this.selectedSeries.id);
      this.selectedSeriesFollowStatus = response?.data?.follow;
      this.seriesFollowStatusLoading = false;
    },
    async updateSeriesFollowStatus() {
      this.seriesFollowStatusLoading = true;
      await new FollowSeriesApi().store({
        series_id: this.selectedSeries.id,
        user_id: this.user.id,
      });
      await this.getSeriesFollowStatus();
      this.seriesFollowStatusLoading = false;
    },
    backButtonPressed() {
      this.filterDownByQueryParams();
    },
    scrollToTop() {
      document
        .getElementById("progress")
        .scrollIntoView({ behavior: "smooth" });
    },
    async selectRandomRace() {
      try {
        let response = null;
        ({ data: response } = await new Race().random(1));
        const race = response[0];

        if (race.id) {
          // Redirect to races.show with id and name as params
          this.$router.push({
            name: "races.show",
            params: { id: race.id, text: race.name },
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  async mounted() {
    this.scrollToTop();
    await this.getSeries();
    this.filterDownByQueryParams();
    window.addEventListener("popstate", this.backButtonPressed);
  },
  beforeUnmount() {
    window.removeEventListener("popstate", this.backButtonPressed);
  },
  watch: {
    selectedSeries() {
      this.getSeriesSeason();
      this.getSeriesFollowStatus();
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
    ...mapState(useAuthStore, {
      user: (store) => store.user,
      isAuthenticated: (store) => store.isAuthenticated,
    }),
    currentStep() {
      return this.steps.filter((step) => step.status === "current")[0];
    },
    filteredSeries() {
      return this.series
        .filter((series) => {
          return (
            series.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
            series.full_name
              .toLowerCase()
              .includes(this.searchText.toLowerCase())
          );
        })
        .filter((series) => {
          // Use case where no filters are selected
          if (!this.filterValue.length) {
            return true;
          }

          // Filter the series by the tag ids
          return series.tags.some((tag) => {
            return this.filterValue.length
              ? this.filterValue.includes(tag.id)
              : true;
          });
        });
    },
  },
};
</script>
