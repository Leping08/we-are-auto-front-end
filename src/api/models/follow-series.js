import authApi from "@/api/auth/index.js";

export default class FollowSeries {
  async index() {
    return await authApi.get(`/follow-series`);
  }

  async show(series_id) {
    return await authApi.get(`/follow-series/${series_id}`);
  }

  async store(prams) {
    return await authApi.post(`/follow-series`, prams);
  }
}
