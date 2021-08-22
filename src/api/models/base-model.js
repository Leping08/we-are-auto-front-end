import axios from "@/api/index.js";
import authApi from "@/api/auth/index.js";

export default class Model {
  constructor(model, auth) {
    this.model = model;
    auth ? (this.axios = axios) : (this.axios = authApi);
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
