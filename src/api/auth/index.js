import axios from "@/api/index.js";
import { useAuthStore } from '@/stores/auth'
import router from "@/router/index";

// This is used when the login action is run
function refreshHeaders() {
  const newToken = localStorage.getItem("access_token") || null;
  axios.defaults.headers.common = {
    Authorization: `Bearer ${newToken}`,
    "content-type": "application/json",
    accept: "application/json",
  };
}

const token = localStorage.getItem("access_token") || null;
axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
  "content-type": "application/json",
  accept: "application/json",
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
        let userStore = useAuthStore();
        userStore.logout();
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
export { refreshHeaders };
