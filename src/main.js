import * as Vue from "vue";
import App from "./App.vue";
import router from "./infrastructure/routes"

// repositories
import authRepository from "./infrastructure/repositories/authRepository";
import lookUpRepository from "./infrastructure/repositories/lookUpRepository";
import transactionRepository from "./infrastructure/repositories/transactionRepository";
import userRepository from "./infrastructure/repositories/userRepository";

import messages from "./domain/messages";
import { createPinia } from 'pinia'

const app = Vue.createApp(App);
app.use(createPinia());
app.use(router);

app.provide('router', router);
app.provide('authRepository', authRepository);
app.provide('lookUpRepository', lookUpRepository);
app.provide('transactionRepository', transactionRepository);
app.provide('userRepository', userRepository);

app.provide('messages', messages);

app.mount("#xvault__app");