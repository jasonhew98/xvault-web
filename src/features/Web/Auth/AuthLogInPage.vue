<template>
    <div class="landing-container h-full">
        <div class="main main-landing flex flex-col">
            <XWebNav :options="actionConfigurations" :sideOptions="sideActionConfigurations"></XWebNav>
            <main class="flex-1">
                <div class="h-full mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 flex flex-col justify-center">
                    <div class="">
                        <div class="flex flex-wrap items-stretch">
                            <div class="w-full px-4 sm:px-12.5 flex items-center justify-center xl:w-1/2 py-6">
                                <div class="w-full py-17.5 md:max-w-[384px]">
                                    <h2 class="text-3xl font-bold text-white dark:text-white sm:text-title-xl2 mb-9">
                                        Log In
                                    </h2>
                                    <form @submit.prevent="login">
                                        <div class="mb-4">
                                            <label class="mb-2.5 block font-medium text-white dark:text-white">Username</label>
                                            <div class="relative flex items-center justify-center border border-stroke rounded-lg hover:border-primary-100
                                                transition-colors duration-250 ease-in-out">
                                                <input type="text" v-model="username" class="w-full h-12 pl-6 pr-10 outline-none bg-transparent focus-visible:shadow-none text-white" />
                                                <span class="absolute right-4">
                                                    <svg class="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.5">
                                                            <path d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"fill=""></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <label class="mb-2.5 block font-medium text-white dark:text-white">Password</label>
                                            <div class="relative flex items-center justify-center border border-stroke rounded-lg hover:border-primary-100
                                                transition-colors duration-250 ease-in-out">
                                                <input type="password" v-model="password" class="w-full h-12 pl-6 pr-10 outline-none bg-transparent focus-visible:shadow-none text-white" />
                                                <span class="absolute right-4">
                                                        <svg class="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.5">
                                                            <path d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z" fill=""></path>
                                                            <path d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z" fill=""></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mb-5 mt-6">
                                            <button class="w-full h-12 cursor-pointer rounded-lg border border-primary bg-primary px-4 font-medium text-white transition hover:bg-opacity-90">
                                                <i class="fa fa-spinner fa-spin" :class="{'hidden': !isLoginLoading}"></i>
                                                <span :class="{'hidden': isLoginLoading}">Next</span>
                                            </button>
                                            <!-- <input type="submit" class="w-full h-12 cursor-pointer rounded-lg border border-primary bg-primary px-4 font-medium text-white transition hover:bg-opacity-90" value="Next"> -->
                                        </div>
                                        <button class="flex w-full h-12 items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray px-4 font-medium hover:bg-opacity-70">
                                            <span>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_191_13499)">
                                                        <path d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217" fill="#4285F4"></path>
                                                        <path d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999" fill="#34A853"></path>
                                                        <path d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z" fill="#FBBC05"></path>
                                                        <path d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z" fill="#EB4335"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_191_13499">
                                                            <rect width="20" height="20" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span> 
                                            Continue with Google 
                                        </button>
                                        <div class="mt-6 text-center">
                                            <p class="font-medium"> Don’t have any account?
                                                <a href="/register"
                                                    class="text-primary">
                                                    Sign up
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="hidden w-full items-center justify-center xl:flex xl:w-1/2">
                                <div class="py-17.5 text-center w-full max-w-[350px]">
                                    <!-- <a href="#" class="flex items-center justify-center mb-5.5 logo-name pr-4 gap-2">
                                        <div class="w-8 h-8 icon icon-box-logo"></div>XVAULT
                                    </a> -->
                                    <p class="font-medium">
                                    </p>
                                    <span class="mt-15 inline-block">
                                        <img src="@/assets/images/illustration/illustration-03.svg" alt="illustration">
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </main>
            <XWebFooter type="minimalist"></XWebFooter>
        </div>
    </div>
</template>

<script setup>
import XWebNav from '../@components/XWebNav.vue';
import XWebFooter from '../@components/XWebFooter.vue';
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import { usePageStateStore } from '@/infrastructure/stores/pageState.js';

const pageStateStore = usePageStateStore();

const app = getCurrentInstance();

const router = computed(() => {
    return app.appContext.config.globalProperties.$router;
});

const authRepository = computed(() => {
    return app.appContext.config.globalProperties.$repository.authRepository;
});

const username = ref();
const password = ref();
const rememberMe = ref(false);
const isLoginLoading = ref(false);

const actionConfigurations = computed(() => {
    return [
    ]
});

const sideActionConfigurations = computed(() => {
    return [
    ]
});

const goToApp = () => {
    router.value.push({
        name: "ApplicationIndexPage"
    })
}

const login = async () => {
    const record = {
        userName: username.value,
        password: password.value
    }

    try {
        isLoginLoading.value = true;
        const [error, result] = await authRepository.value.login(record);
        if (error) {
            isLoginLoading.value = false;
            pageStateStore.setError({});
            return;
        }

        let jwtToken = result.jwtToken;

        const accessToken = jwtToken.token;
        const expiryDate = jwtToken.expiry;

        if (rememberMe.value) {
            document.cookie = `accessToken=${accessToken}; expires=${expiryDate}; path=/;`;
        }

        localStorage.setItem("jwtToken", accessToken);
        localStorage.setItem("jwtExpiry", expiryDate);

        goToApp();
    } catch (ex) {
        pageStateStore.setError({});
    }

    isLoginLoading.value = false;
}

</script>

<style lang="scss" scoped>
.login__form {
    padding: 30px;
    border-radius: 16px;
    backdrop-filter: blur(25px);
    text-align: center;
    color: white;
    width: 400px;
    height: fit-content;
}

.login__title {
    font-size: 40px;
    margin-bottom: 40px;
}

.input__box {
    margin: 20px 0;
    position: relative;
}

.input__box input {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 12px 12px 12px 45px;
    border-radius: 99px;
    outline: 3px solid transparent;
    transition: 0.3s;
    font-size: 17px;
    color: white;
    font-weight: 600;
}

.input__box input::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-size: 17px;
    font-weight: 500;
}

.input__box input:focus {
    outline: 3px solid rgba(255, 255, 255, 0.3);
}

.input__box input::-ms-reveal {
    filter: invert(100%);
}

.input__box i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: rgba(255, 255, 255, 0.8);
}

.session__box {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    font-size: 15px;
}

.session__box label {
    display: flex;
    gap: 8px;
    cursor: pointer;
}

.session__box input {
    accent-color: white;
    cursor: pointer;
}

.session__box a {
    color: white;
    text-decoration: none;
}

.session__box a:hover {
    text-decoration: underline;
}

.login-button {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-radius: 99px;
    font-size: 16px;
    font-weight: 600;
}

.register {
    margin-top: 15px;
    font-size: 15px;
}

.register a {
    color: white;
    text-decoration: none;
    font-weight: 500;
}

.register a:hover {
    text-decoration: underline;
}
</style>