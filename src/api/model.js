import axios from "axios";

axios.defaults.baseURL = `${process.env.VUE_APP_BACKEND_URL}/api`;

export default class Model {
  constructor(model) {
    this.model = model;
    this.axios = axios;
  }

  async index() {
    return await axios.get(`/${this.model}`);
  }

  async store(prams) {
    return await axios.post(`/${this.model}`, prams);
  }

  async show(id) {
    return await axios.get(`/${this.model}/${id}`);
  }

  async update(id, prams) {
    return await axios.post(`/${this.model}/${id}`, prams);
  }

  async delete(id) {
    return await axios.delete(`/${this.model}/${id}`);
  }
}
