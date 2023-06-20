import Model from "@/api/models/base-model.js";
import authApi from "@/api/auth/index.js";

export default class Race extends Model {
  constructor() {
    super("races");
  }

  async latest(count) {
    return await this.axios.get(`/${this.model}/latest/${count}`);
  }

  async suggestion(data) {
    return await authApi.post(`/${this.model}/suggestion`, data);
  }

  async random(count) {
    return await this.axios.get(`/${this.model}/random/${count}`);
  }
}
