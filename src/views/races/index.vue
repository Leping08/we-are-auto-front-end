<template>
  <div>
    <!-- Alternating Feature Sections -->
    <div class="relative overflow-hidden">
      <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48" />
      <div class="relative">
        <div
          class="
            lg:mx-auto lg:px-8
            py-20
            lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24
          "
        >
          <div class="relative max-w-xl mx-auto p-6 lg:p-0">
            <h3
              class="
                text-2xl
                font-extrabold
                text-gray-900
                tracking-tight
                sm:text-4xl
              "
            >
              It's like Netflix for gearheads
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              Races from a variety of series around the world available anytime
              anywhere.
            </p>

            <dl class="mt-10 space-y-10">
              <div v-for="item in features" :key="item.id" class="relative">
                <dt>
                  <div
                    class="
                      absolute
                      flex
                      items-center
                      justify-center
                      h-12
                      w-12
                      rounded-md
                      bg-gradient-to-r
                      from-blue-400
                      to-blue-600
                      text-white
                    "
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  {{ item.description }}
                </dd>
              </div>
            </dl>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div
              class="
                pl-4
                -mr-48
                sm:pl-6
                md:-mr-16
                lg:px-0 lg:m-0 lg:relative lg:h-full
              "
            >
              <img
                class="
                  w-full
                  rounded-xl
                  shadow-xl
                  ring-1 ring-black ring-opacity-5
                  lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none
                "
                src="@/assets/images/race-cars/mercedes-rolex-24.jpg"
                alt="IMSA Racing"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          relative
          px-4
          py-14
          sm:px-6
          lg:py-20 lg:px-8
          bg-gradient-to-r
          from-blue-400
          to-blue-600
        "
      >
        <div class="absolute inset-0">
          <div class="h-1/3 sm:h-2/3" />
        </div>
        <latest-races />
      </div>
    </div>
  </div>
</template>

<script>
import { shallowRef } from "vue";
import flag from "@/assets/icons/flag-checkered.vue";
import clockStart from "@/assets/icons/clock-start.vue";
import checkboxMarkedCircleOutline from "@/assets/icons/checkbox-marked-circle-outline.vue";
import formatListBulleted from "@/assets/icons/format-list-bulleted.vue";
import play from "@/assets/icons/play.vue";
import playProgress from "@/components/playProgress.vue";
import latestRaces from "@/components/races/latestRaces.vue";
export default {
  components: {
    flag,
    play,
    playProgress,
    latestRaces,
  },
  data() {
    return {
      features: [
        {
          id: 1,
          name: "Jump to start",
          description:
            "Jump directly to the start of the race skipping all of the pre race ceremonies.",
          icon: shallowRef(clockStart),
        },
        {
          id: 2,
          name: "Progress",
          description:
            "Done watching a race? Check it off to keep track all the races you have watched for a season.",
          icon: shallowRef(checkboxMarkedCircleOutline),
        },
        {
          id: 3,
          name: "Seasons",
          description:
            "Watch the races through a full season just like it happened live.",
          icon: shallowRef(formatListBulleted),
        },
      ],
    };
  },
};
</script>
