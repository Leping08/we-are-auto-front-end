<template>
  <div>
    <audio style="display: none" ref="player" :id="playerId">
      <source :src="url" type="audio/mpeg" />
    </audio>
  </div>
  <div class="p-2 relative">
    <input
      v-model="playbackTime"
      type="range"
      class="slider"
      min="0"
      :max="audioDuration"
      :name="playerId"
    />
  </div>
  <div class="grid grid-cols-5 text-center items-center">
    <div class="text-sm text-gray-500">
      {{ formattedPlaybackTime || null }}
    </div>
    <div>
      <button @click.prevent="subSeconds(30)" class="p-2 focus:outline-none">
        <svg class="text-gray-500 w-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19,14V20C19,21.11 18.11,22 17,22H15A2,2 0 0,1 13,20V14A2,2 0 0,1 15,12H17C18.11,12 19,12.9 19,14M15,14V20H17V14H15M11,20C11,21.11 10.1,22 9,22H5V20H9V18H7V16H9V14H5V12H9A2,2 0 0,1 11,14V15.5A1.5,1.5 0 0,1 9.5,17A1.5,1.5 0 0,1 11,18.5V20M12.5,3C17.15,3 21.08,6.03 22.47,10.22L20.1,11C19.05,7.81 16.04,5.5 12.5,5.5C10.54,5.5 8.77,6.22 7.38,7.38L10,10H3V3L5.6,5.6C7.45,4 9.85,3 12.5,3Z"
          />
        </svg>
      </button>
    </div>
    <div>
      <button
        @click.prevent="toggleAudio()"
        class="p-1 bg-white shadow-lg rounded-full focus:outline-none"
      >
        <svg v-if="!isPlaying" class="text-gray-800 w-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
        <svg v-if="isPlaying" class="text-gray-800 w-10" viewBox="0 0 24 24">
          <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
        </svg>
      </button>
    </div>
    <div>
      <button @click.prevent="addSeconds(30)" class="p-2 focus:outline-none">
        <svg class="text-gray-500 w-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11.5,3C6.85,3 2.92,6.03 1.53,10.22L3.9,11C4.95,7.81 7.96,5.5 11.5,5.5C13.46,5.5 15.23,6.22 16.62,7.38L14,10H21V3L18.4,5.6C16.55,4 14.15,3 11.5,3M19,14V20C19,21.11 18.11,22 17,22H15A2,2 0 0,1 13,20V14A2,2 0 0,1 15,12H17C18.11,12 19,12.9 19,14M15,14V20H17V14H15M11,20C11,21.11 10.1,22 9,22H5V20H9V18H7V16H9V14H5V12H9A2,2 0 0,1 11,14V15.5A1.5,1.5 0 0,1 9.5,17A1.5,1.5 0 0,1 11,18.5V20Z"
          />
        </svg>
      </button>
    </div>
    <div class="text-sm text-gray-500">
      {{ formattedTotalTime || null }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      required: true,
      type: String,
    },
    playerId: {
      required: true,
      type: String,
    },
    playOnStart: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      playbackTime: 0, //local var that syncs to audio.currentTime
      audioDuration: 100, //duration of audio file in seconds
      formattedPlaybackTime: 0, //playback time but in a nice format
      formattedTotalTime: 0, //playback time but in a nice format
      audioLoaded: false, //the audio loading state
      isPlaying: false, //boolean (true if audio is playing)
      listenerActive: false, //the state of the listener
    };
  },
  watch: {
    //Update current audio position when user drags progress slider
    playbackTime() {
      const diff = Math.abs(this.playbackTime - this.$refs.player.currentTime);
      //Throttle synchronization to prevent infinite loop between playback listener and this watcher
      if (diff > 0.01) {
        this.$refs.player.currentTime = this.playbackTime;
      }
      this.formattedPlaybackTime = this.secondsToHMS(this.playbackTime);
    },
    isPlaying() {
      if (this.isPlaying) {
        const audio = this.$refs.player;
        this.initSlider();
        //prevent starting multiple listeners at the same time
        if (!this.listenerActive) {
          this.listenerActive = true;
          //for a more consistent timeupdate, include freqtimeupdate.js and replace both instances of 'timeupdate' with 'freqtimeupdate'
          audio.addEventListener("timeupdate", this.playbackListener);
        }
      }
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const audio = this.$refs.player;
      // Wait for audio to load, then run initSlider() to get audio duration and set the max value of our slider
      // "loademetadata" Event https://www.w3schools.com/tags/av_event_loadedmetadata.asp
      audio.addEventListener("loadedmetadata", () => {
        this.initSlider();
      });

      // "canplay" HTML Event lets us know audio is ready for play https://www.w3schools.com/tags/av_event_canplay.asp
      audio.addEventListener("canplay", () => {
        this.audioLoaded = true;
        this.playOnStart ? this.toggleAudio() : null;
      });
    },
    secondsToHMS(timestamp) {
      const roundedTimeStamp = Math.round(timestamp);
      const hours = Math.floor(roundedTimeStamp / 60 / 60);
      const minutes = Math.floor(roundedTimeStamp / 60) - hours * 60;
      const seconds = roundedTimeStamp % 60;
      return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${(
        "0" + seconds
      ).slice(-2)}`;
    },
    //Set the range slider max value equal to audio duration
    initSlider() {
      const audio = this.$refs.player;
      if (audio) {
        this.audioDuration = Math.round(audio.duration);
        this.formattedTotalTime = this.secondsToHMS(this.audioDuration);
        this.formattedPlaybackTime = this.secondsToHMS(this.playbackTime);
      }
    },
    //Playback listener function runs every 100ms while audio is playing
    playbackListener() {
      const audio = this.$refs.player;
      if (audio) {
        //Sync local 'playbackTime' var to audio.currentTime and update global state
        this.playbackTime = audio.currentTime;

        //Add listeners for audio pause and audio end events
        audio.addEventListener("ended", this.endListener);
        audio.addEventListener("pause", this.pauseListener);
      }
    },
    //Function to run when audio is paused by user
    pauseListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    //Function to run when audio play reaches the end of file
    endListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    //Remove listeners after audio play stops
    cleanupListeners() {
      const audio = this.$refs.player;
      if (audio) {
        audio.removeEventListener("timeupdate", this.playbackListener);
        audio.removeEventListener("ended", this.endListener);
        audio.removeEventListener("pause", this.pauseListener);
      }
    },
    toggleAudio() {
      const audio = this.$refs.player;
      if (audio.paused) {
        audio.play();
        this.isPlaying = true;
      } else {
        audio.pause();
        this.isPlaying = false;
      }
    },
    subSeconds(seconds) {
      if (this.playbackTime - seconds < 0) {
        this.playbackTime = 0;
      } else {
        this.playbackTime = this.playbackTime - seconds;
      }
      this.initSlider();
    },
    addSeconds(seconds) {
      if (this.playbackTime + seconds > this.audioDuration) {
        this.playbackTime = this.audioDuration;
      } else {
        this.playbackTime = this.playbackTime + seconds;
      }
      this.initSlider();
    },
  },
};
</script>

<style scoped>
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 0.2rem;
  border-radius: 0.5rem;
  background: #cbd5e1;
  outline: none;
  transition: opacity 0.2s;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06) !important;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0.5rem;
  width: 15px;
  height: 15px;
  background: #0ea5e9;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  background: #06b6d4;
  cursor: pointer;
}
</style>
