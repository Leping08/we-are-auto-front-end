import Model from "@/api/models/base-model.js";

export default class Series extends Model {
  constructor() {
    super("series");
  }

  async series_season(series_id, season_id) {
    return await this.axios.get(`/series/${series_id}/season/${season_id}`);
  }
}
