<template>
    <div class="w-full h-full overflow-auto bg-gray-100 flex max-w-full flex-auto flex-col">
        <main id="page-content" class="w-full h-full bg-gray-100 flex justify-center items-center max-w-full flex-auto flex-col">
            <div class="container w-full p-4">
                <div class="md:p-16 p-4 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
                    <transaction-add-form></transaction-add-form>
                </div>
            </div>
        </main>
        <main id="page-content" class="w-full h-full bg-gray-100 flex justify-center items-center max-w-full flex-auto flex-col">
            <div class="container w-full p-4">
                <div class="md:p-16 p-4 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
                    <transaction-add-form></transaction-add-form>
                </div>
            </div>
        </main>
        <main id="page-content" class="w-full h-full bg-gray-100 flex justify-center items-center max-w-full flex-auto flex-col">
            <div class="container w-full p-4">
                <div class="md:p-16 p-4 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
                    <transaction-add-form></transaction-add-form>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import TransactionAddForm from './@components/TransactionAddForm.vue';
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