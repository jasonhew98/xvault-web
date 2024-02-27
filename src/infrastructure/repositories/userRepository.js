import createHttpClient from "../createHttpClient";

const xvaultService = createHttpClient(process.env.VUE_APP_XWALLET_SERVICE_URL);

export default {
    async login() {
        return await xvaultService.post(`/api/auth/login`, {
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