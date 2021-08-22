import axios from "axios";

axios.defaults.baseURL = `${process.env.VUE_APP_BACKEND_URL}/api`;
axios.defaults.headers.common = {
  "content-type": "application/json",
  accept: "application/json",
};

export default axios;
