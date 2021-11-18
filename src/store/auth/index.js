import { SET_USER, SET_TOKEN } from "@/store/auth/mutation-types.js";
import axios from "axios";
import api from "@/api/auth/index.js";

const BACKEND_URL = `${process.env.VUE_APP_BACKEND_URL}/api`;

const state = () => ({
  user: null,
  token: localStorage.getItem("access_token") || null,
});

const getters = {
  // -> getters['user/isAdmin']
  isAdmin(state) {
    return state?.user?.role === "admin";
  },
  isAuthenticated(state) {
    return state.token ? true : false;
  },
};

const actions = {
  // -> dispatch('user/login')
  async login(context, data) {
    return await axios.post(`${BACKEND_URL}/login`, data);
  },
  async setUser(context) {
    try {
      const response = await api.get("/user");
      context.commit(SET_USER, response.data);
    } catch (error) {
      throw new Error(error);
    }
  },
  async setToken(context, token) {
    localStorage.setItem("access_token", token); //Set the token in local storage
    context.commit(SET_TOKEN, token); //Set the token in the store
  },
  async logout(context) {
    try {
      await api.post(`${BACKEND_URL}/logout`); //Make api call to invalidate backend tokens through Laravel passport
    } catch (error) {
      throw new Error(error);
    }
    context.commit(SET_USER, null); //Remove the user object from vuex storage
    context.commit(SET_TOKEN, null); //Remove the token from vuex storage
    localStorage.removeItem("access_token"); //Set the token in local storage
  },
};

const mutations = {
  // -> commit('user/login')
  [SET_USER](state, user) {
    state.user = user;
  },
  [SET_TOKEN](state, token) {
    state.token = token;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
