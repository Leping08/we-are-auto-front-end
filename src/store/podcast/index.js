export default {
  namespaced: true,
  state: {
    showPodcastFooter: false,
    episodeSelected: null,
  },
  getters: {
    episodeIndex: (state) => state.episodeSelected,
  },
  mutations: {
    closePodcastFooter(state) {
      state.showPodcastFooter = false;
    },
    selectPodcast(state, index) {
      state.episodeSelected = index;
      state.showPodcastFooter = true;
    },
  },
  actions: {},
  modules: {},
};
