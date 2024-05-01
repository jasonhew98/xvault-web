import createHttpClient from "../createHttpClient";

const xvaultService = createHttpClient(process.env.VUE_APP_XVAULT_SERVICE_URL);

export default {
  async getMyProfile() {
    // return await xvaultService.get(`api/user/profile/me`, { authType: 'bearer' });

    return [
      null,
      {
        firstName: "Jia Sheng",
        lastName: "Hew",
        preferredName: "Jason",
        currentSalary: "7800",
        countryCode: "MY",
        currency: "MYR",
      },
    ];
  },
};
