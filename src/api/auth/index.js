import axios from "axios";
import store from "@/store/index";
import router from "@/router/index";

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;
const token = localStorage.getItem("access_token") || null;
axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
};

axios.interceptors.response.use(
  // Forward the normal response
  function (response) {
    return response;
  },

  // Catch any error responses
  function (error) {
    // Get the 401 unauthorized errors
    if (error.response != undefined && error.response.status === 401) {
      // Dispatch the logout method which will
      // null the token in local storage
      // and set the user to null
      try {
        store.dispatch("auth/logout");
      } catch (error) {
        throw new Error(error);
      }

      // Push the user over to the login page
      router.push({
        name: "login",
      });
    } else {
      return Promise.reject(error);
    }
  }
);

export default axios;
