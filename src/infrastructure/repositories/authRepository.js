import createHttpClient from "../createHttpClient";

const xvaultService = createHttpClient(process.env.VUE_APP_XVAULT_SERVICE_URL);

export default {
  async login(record) {
    return await xvaultService.post(`/api/auth/login`, record);
  },
  async signup(record) {
    return await xvaultService.post(`/api/auth/signup`, record);
  },
};
