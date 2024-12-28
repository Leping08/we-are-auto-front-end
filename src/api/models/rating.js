import authApi from "@/api/auth/index.js";

export default class Rating {

  async store(prams) {
    return await authApi.post(`/race/rate`, prams);
  }
  
}
