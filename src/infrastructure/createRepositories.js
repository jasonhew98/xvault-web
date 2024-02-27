import lookupRepository from "./repositories/lookupRepository";
import authRepository from "./repositories/authRepository";
import userRepository from "./repositories/userRepository";

const repositories = {
    lookupRepository,
    authRepository,
	userRepository,
};

const createRepositories = {
    install(app) {
        app.config.globalProperties.$repository = repositories;
    },
};

export default createRepositories;
