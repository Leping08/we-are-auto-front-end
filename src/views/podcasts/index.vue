<template>
  <div class="bg-white">
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
            class="text-2xl font-bold text-gray-900 tracking-tight sm:text-4xl"
          >
            The <span class="text-blue-500">We Are Auto Show</span>
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            A weekly show covering auto news, racing news, car spots, interviews
            and just plain old car banter.
          </p>

          <dl class="mt-8 space-y-8">
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
                <p
                  class="
                    mb-1
                    ml-16
                    text-lg
                    font-semibold
                    leading-6
                    text-gray-900
                  "
                >
                  {{ item.name }}
                </p>
              </dt>
              <dd class="ml-16 text-base text-gray-500">
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
                ring-1 ring-blue ring-opacity-5
                m-2
              "
              src="@/assets/images/mics.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-100">
    <!-- <div
      class="
        bg-gradient-to-r
        from-blue-400
        to-blue-600
        h-24
        -mb-12
        -mx-12
        transform
        -rotate-2
      "
    />
    <div class="bg-gradient-to-r from-blue-400 to-blue-600">
      <div class="grid grid-cols-2 gap-4 py-10">
        <div class="p-10">
          <div
            class="
              shadow-lg
              h-64
              w-64
              rounded-full
              bg-white
              overflow-hidden
              mx-auto
            "
          >
            <img
              class="object-cover h-full"
              src="@/assets/images/profile/mike.png"
              alt=""
            />
          </div>
          <div class="text-center text-blue-50 text-2xl p-2">Michael</div>
          <div class="text-center text-gray-200 text-md p-2">
            A driving instructor with 5+ years of experience.
          </div>
        </div>
        <div class="p-10">
          <div
            class="
              shadow-lg
              h-64
              w-64
              rounded-full
              bg-white
              overflow-hidden
              mx-auto
            "
          >
            <img
              class="object-cover h-full"
              src="@/assets/images/profile/derek.png"
              alt=""
            />
          </div>
          <div class="text-center text-blue-50 text-2xl p-2">Derek</div>
          <div class="text-center text-gray-200 text-md p-2">
            A software developer with 8+ years of experience in the automotive
            industry.
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        bg-gradient-to-r
        from-blue-400
        to-blue-600
        h-24
        -mb-12
        -mx-12
        transform
        -rotate-2
        -mt-12
      "
    /> -->

    <!-- <div class="flex text-gray-600 space-x-2 pt-24 m-4">
      <a
        href="https://podcasts.apple.com/us/podcast/we-are-auto/id1557884758?i=1000527608218"
        target="_blank"
      >
        <apple-podcast class="h-14 w-14 p-2" />
      </a>
      <a
        href="https://podcasts.google.com/feed/aHR0cHM6Ly93ZWFyZWF1dG8ubGlic3luLmNvbS9yc3M"
        target="_blank"
      >
        <google-podcast class="h-14 w-14 p-2" />
      </a>
      <a
        href="https://open.spotify.com/show/1ePLe4BB9nUGBWGVfpx14q?si=D_FQ3Ap-S-iKfaSetQML1g&dl_branch=1"
        target="_blank"
      >
        <spotify class="h-14 w-14" />
      </a>
    </div> -->

    <div class="m-6" v-if="loading">
      <template v-for="index in 5" :key="index">
        <div
          class="
            border border-blue-300
            shadow
            rounded-md
            w-full
            mx-auto
            m-4
            space-y-2
            animate-pulse
          "
        >
          <div class="flex items-center border-b p-4">
            <div class="pr-4">
              <play-circle-outline class="h-10 w-10 text-blue-500" />
            </div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-blue-400 rounded w-full md:w-4/12"></div>
              <div class="h-2 bg-blue-400 rounded w-2/12"></div>
            </div>
          </div>
          <div class="flex p-4">
            <div class="flex-1 space-y-4">
              <div class="space-y-2">
                <div class="h-3 bg-blue-400 rounded"></div>
                <div class="h-3 bg-blue-400 rounded"></div>
                <div class="h-3 bg-blue-400 rounded w-3/6"></div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="m-6" v-if="!loading">
      <template
        v-for="(podcast, index) in podcasts?.rss?.channel?.item"
        :key="podcast"
      >
        <div
          border
          padding
          @click="startPodcast(podcasts?.rss?.channel?.item?.length - index)"
          class="bg-white shadow-md rounded-lg my-4 cursor-pointer"
        >
          <div class="px-4 py-2 w-full relative">
            <div
              class="
                -ml-4
                -mt-2
                flex
                justify-between
                items-center
                flex-wrap
                sm:flex-nowrap
              "
            >
              <div class="ml-4 mt-4 flex items-center">
                <div class="pr-4">
                  <play-circle-outline class="h-10 w-10 text-blue-500" />
                </div>
                <div>
                  <h3
                    class="text-xl leading-6 font-medium text-gray-900"
                    :class="
                      withinTheLastSevenDays(podcast['pubDate']['#text'])
                        ? 'pr-12'
                        : ''
                    "
                  >
                    {{ podcast["itunes:title"]["#text"] }}
                  </h3>
                  <p class="mt-1 text-sm leading-5 text-gray-500">
                    {{ formatDate(podcast["pubDate"]["#text"]) }}
                  </p>
                </div>
              </div>
              <div
                v-if="withinTheLastSevenDays(podcast['pubDate']['#text'])"
                class="right-0 top-0 absolute p-4"
              >
                <div
                  class="
                    px-2
                    py-0.5
                    bg-blue-200
                    text-blue-800
                    rounded-full
                    text-sm
                  "
                >
                  New
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { shallowRef } from "vue";
import { mapMutations } from "vuex";
import { all } from "@/api/podcast/index.js";
import playCircleOutline from "@/assets/icons/play-circle-outline.vue";
import news from "@/assets/icons/news.vue";
import people from "@/assets/icons/people.vue";
import shift from "@/assets/icons/car-shift-pattern.vue";
import applePodcast from "@/assets/icons/apple-podcast.vue";
import googlePodcast from "@/assets/icons/google-podcast.vue";
import spotify from "@/assets/icons/spotify.vue";
export default {
  components: {
    playCircleOutline,
    applePodcast,
    googlePodcast,
    spotify,
  },
  data() {
    return {
      loading: false,
      podcasts: {},
      features: [
        {
          id: 1,
          name: "News",
          description:
            "The latest auto industry news as well as whats going on in the racing world.",
          icon: shallowRef(news),
        },
        {
          id: 2,
          name: "Interviews",
          description:
            "Conversations with a verity of guests from all corners of the automotive industry.",
          icon: shallowRef(people),
        },
        {
          id: 3,
          name: "Car Banter",
          description: "Simply car enthusiast's talking about car stuff.",
          icon: shallowRef(shift),
        },
      ],
    };
  },
  async created() {
    this.loading = true;
    this.podcasts = await all();
    this.loading = false;
  },
  methods: {
    formatDate(date) {
      const number = Date.parse(date);
      return new Date(number).toLocaleDateString();
    },
    withinTheLastSevenDays(date) {
      // get last date of week
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      // if date is equal or within the first and last dates of the week
      const podcastDate = Date.parse(date);
      return podcastDate >= sevenDaysAgo;
    },
    startPodcast(showNumber) {
      this.selectPodcast(showNumber);
    },
    ...mapMutations("podcast", ["selectPodcast"]),
  },
};
</script>
