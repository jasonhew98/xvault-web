import createHttpClient from "../createHttpClient";

const xwalletService = createHttpClient(process.env.VUE_APP_XWALLET_SERVICE_URL);

export default {
    async login() {
        return await xwalletService.post(`/api/auth/login`, {
            UserName: "jasonhew98",
            Password: "Dferas@98"
        });
    },
    async getMyProfile() {
        // return await portfolioService.get(`api/user/profile/me`, { authType: 'bearer' });

        return [null, 
            {
                
            }];
    }
}