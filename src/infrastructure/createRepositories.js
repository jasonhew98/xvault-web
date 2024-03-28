import lookUpRepository from "./repositories/lookUpRepository";
import authRepository from "./repositories/authRepository";
import userRepository from "./repositories/userRepository";
import transactionRepository from "./repositories/transactionRepository";

const repositories = {
    lookUpRepository,
    authRepository,
	userRepository,
    transactionRepository,
};

const createRepositories = {
    install(app) {
        app.config.globalProperties.$repository = repositories;
    },
};

export default createRepositories;
