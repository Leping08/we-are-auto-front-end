import axios from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_APP_BACKEND_URL}/api`;
axios.defaults.headers.common = {
  "content-type": "application/json",
  accept: "application/json",
};

export default axios;
