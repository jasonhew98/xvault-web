<template>
    <div class="app__content">
        <h1>MVP</h1>
        <h1>Add Transaction</h1>
        <awesome-text-box label="Main Category" tooltip="Main Category" v-model="transaction.mainCategory"></awesome-text-box>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import AwesomeTextBox from '@/components/AwesomeTextBox.vue';
const app = getCurrentInstance();

const transaction = reactive({
    mainCategory: "",
    subCategory: ""
});

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