<template>
    <div class="page__container">
        <div class="landing__button button button--round button--medium" @click="login">Login</div>
        <div class="landing__button button button--round button--medium" @click="add">Add</div>
        <div class="landing__button button button--round button--medium" @click="getList">Get List</div>
        <div class="landing__button button button--round button--medium">Get Page Size</div>
        <div class="landing__button button button--round button--medium">Update</div>
        <div class="landing__button button button--round button--medium">Delete</div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue';
const app = getCurrentInstance();

const transactionRepository = computed(() => {
    return app.appContext.config.globalProperties.$repository.transactionRepository;
});

const authRepository = computed(() => {
    return app.appContext.config.globalProperties.$repository.authRepository;
});

const login = async () => {
    const record = {
        userName: "jasonhew98",
        password: "Dferas@98"
    }

    try {
        const [error, result] = await authRepository.value.login(record);
        let jwtToken = result.jwtToken;

        // Assuming you have the JWT token available as 'accessToken'
        const accessToken = jwtToken.token;
        const expiryDate = jwtToken.expiry;

        localStorage.setItem("jwtToken", accessToken);
        // Set the cookie
        document.cookie = `accessToken=${accessToken}; expires=${expiryDate}; path=/;`;
    } catch (ex) {
        console.log(ex);
    }
}

const add = async () => {
    try {
        var record = {
            "MainCategory": "test",
            "SubCategory": "test",
            "TransactionDate": "2024-02-01T11:41:32.123Z",
            "Notes": "test",
            "PaymentMethod": "Cash",
            "PaymentAmount": 250.00
        }
        const [error, result] = await transactionRepository.value.addTransaction(record);
    } catch (err) {
        console.log(err)
    }
}

const getList = async () => {
    try {
        const [error, result] = await transactionRepository.value.getTransactions();
    } catch (err) {
        console.log(err)
    }
}

</script>

<style lang="scss" scoped>

</style>