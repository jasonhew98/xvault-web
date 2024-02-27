import * as Vue from "vue";
import App from "./App.vue";
import router from "./infrastructure/routes"
import createRepositories from "./infrastructure/createRepositories";

const app = Vue.createApp(App);

app.use(router);

app.use(createRepositories);

app.mount("#xvault__app");
