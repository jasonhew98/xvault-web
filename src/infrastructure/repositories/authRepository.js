import createHttpClient from "../createHttpClient";

const xwalletService = createHttpClient(process.env.VUE_APP_XWALLET_SERVICE_URL);

export default {
    async login(record) {
        return await xwalletService.post(`/api/auth/login`, record);
    },
    async signup(record) {
        return await xwalletService.post(`/api/auth/signup`, record);
    },
}