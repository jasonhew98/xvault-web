<template>
    <div class="page__container">
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