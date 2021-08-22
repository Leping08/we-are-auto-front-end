import Model from "@/api/models/base-model.js";

export default class Race extends Model {
  constructor() {
    super("races");
  }

  async latest(count) {
    return await this.axios.get(`/${this.model}/latest/${count}`);
  }
}
