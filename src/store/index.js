import { createStore } from "vuex";
import podcast from "@/store/podcast/index.js";
import auth from "@/store/auth/index.js";

export default createStore({
  modules: {
    podcast,
    auth,
  },
});
