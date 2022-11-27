<template>
  <div>
    <guest>
      <div class="p-4">
        <div>
          The {{ race.name }} has completed but we have not located the video
          yet. If you find the race on youtube send the link our way and we will
          get it added as soon as we can.
        </div>
      </div>
    </guest>

    <authenticated>
      <div class="px-4">
        <div>
          The {{ race.name }} has completed but we have not located the video
          yet. If you find the race on youtube send the link our way and we will
          get it added as soon as we can.
        </div>
      </div>

      <div v-for="(suggestion, index) in suggestions" :key="suggestion">
        <div class="flex items-center">
          <div class="px-4 py-2 w-full">
            <v-input
              :label="`Part ${suggestion.part}`"
              v-model="suggestion.link"
              v-model:validated="suggestion.validated"
              color="blue"
              placeholder="https://www.youtube.com/watch?v=q2KLwPlfPHs"
              :rules="['min:2', 'max:255', 'required']"
              type="text"
            />
          </div>
          <div class="">
            <v-button
              v-if="index > 0"
              color="red"
              outline
              size="sm"
              class="mt-5 mr-4"
              @click="removePart(index)"
            >
              x
            </v-button>
          </div>
        </div>
      </div>

      <div class="ml-4">
        Does the race have more than one part? Add multiple parts.
        <v-button color="blue" outline size="sm" @click="addPart"> + </v-button>
      </div>

      <div class="px-4 pb-4 pt-2">
        <v-button
          :color="!suggestionsValidated ? 'gray' : 'blue'"
          :outline="!suggestionsValidated"
          :disabled="!suggestionsValidated"
          @click="submitVideoSuggestion"
        >
          Send
        </v-button>
      </div>
    </authenticated>
  </div>
</template>

<script>
import Race from "@/api/models/races.js";
import guest from "@/components/auth/guest.vue";
import authenticated from "@/components/auth/authenticated.vue";
export default {
  components: {
    guest,
    authenticated
  },
  data() {
    return {
      response: null,
      suggestions: [
        {
          part: 1,
          link: "",
          validated: false,
        },
      ],
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
          validated: false,
        },
      ];
      //todo show success message
    },
    addPart() {
      this.suggestions.push({
        part: this.suggestions.length + 1,
        link: "",
        validated: false,
      });
    },
    removePart(index) {
      this.suggestions.splice(index, 1);
    },
  },
  computed: {
    suggestionsValidated() {
      return this.suggestions.every((suggestion) => suggestion.validated);
    },
  },
};
</script>
