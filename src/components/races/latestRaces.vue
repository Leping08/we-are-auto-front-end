<template>
  <div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          Latest Races
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-blue-200 sm:mt-4">
          Check out a few of the latest races.
        </p>
      </div>

      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        v-if="loadingLatestRaces"
      >
        <div v-for="index in numOfRaces" :key="index" class="flex flex-col">
          <div
            class="bg-white w-full h-90 rounded-lg shadow-lg overflow-hidden"
          >
            <div class="h-64 bg-gray-300 relative animate-pulse">
              <div
                class="
                  absolute
                  bottom-0
                  left-0
                  h-12
                  w-24
                  -my-5
                  ml-6
                  bg-gray-400
                  rounded-full
                "
              ></div>
              <div
                class="
                  absolute
                  bottom-0
                  right-0
                  -my-5
                  mr-6
                  h-10
                  w-10
                  bg-gray-400
                  rounded-full
                "
              ></div>
            </div>
            <div class="p-6 grid space-y-2 mt-4 animate-pulse">
              <div class="h-4 w-1/2 bg-gray-500 rounded-full"></div>
              <div class="h-4 w-1/3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        v-if="!loadingLatestRaces"
      >
        <router-link
          tag="div"
          :to="{ name: 'races.show', params: { id: race.id } }"
          v-for="race in races"
          :key="race.id"
        >
          <race-card :race="race" />
        </router-link>
      </div>
      <router-link
        class="
          flex
          justify-end
          items-center
          m-4
          text-blue-200 text-lg
          font-bold
          hover:text-blue-100
        "
        tag="div"
        :to="{ name: 'races.filter' }"
      >
        <div class="">View all</div>
        <arrow class="h-8 ml-2" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Race from "@/api/models/races";
import raceCard from "@/components/races/raceCard.vue";
export default {
  components: {
    raceCard,
  },
  data() {
    return {
      races: [],
      numOfRaces: 3,
      loadingLatestRaces: true,
    };
  },
  created() {
    this.getLatestRaces();
  },
  methods: {
    async getLatestRaces() {
      try {
        this.loadingLatestRaces = true;
        ({ data: this.races } = await new Race().latest(this.numOfRaces));
        this.loadingLatestRaces = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
