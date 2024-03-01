<template>
    <div class="page__container flex-center">
        <form action="#" class="login__form" @submit.prevent="login">
            <h1 class="login__title">Login</h1>

            <div class="input__box">
                <i class='bx bxs-user'></i>
                <input type="text" placeholder="Username" v-model="username">
            </div>
            <div class="input__box">
                <i class='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Password" v-model="password">
            </div>

            <div class="session__box">
                <label for="remember">
                    <input type="checkbox" id="remember" v-model="rememberMe">
                    Remember me
                </label>
                <a href="#">Forgot Password?</a>
            </div>

            <button class="login__btn">Login</button>

            <p class="register">
                Don't have an account?
                <a href="#">Register</a>
            </p>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';

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
        const [error, result] = await authRepository.value.login(record);
        if (error)
            return;

        let jwtToken = result.jwtToken;

        // Assuming you have the JWT token available as 'accessToken'
        const accessToken = jwtToken.token;
        const expiryDate = jwtToken.expiry;

        if (rememberMe.value) {
            document.cookie = `accessToken=${accessToken}; expires=${expiryDate}; path=/;`;
        }

        localStorage.setItem("jwtToken", accessToken);

        goToApp();        
    } catch (ex) {
        console.log(ex);
    }
}

</script>

<style lang="scss" scoped>

.login__form {
    background: rgba(64, 64, 64, 0.15);
    padding: 30px;
    border-radius: 16px;
    backdrop-filter: blur(25px);
    text-align: center;
    color: white;
    width: 400px;
    height: fit-content;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.15);
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

.login__btn {
    width: 100%;
    padding: 10px 0;
    background: #2F9CF4;
    border: none;
    border-radius: 99px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}
.login__btn:hover {
    background: #0B87EC;
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