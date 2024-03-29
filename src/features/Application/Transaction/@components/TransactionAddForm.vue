<template>
    <form class="space-y-6 dark:text-gray-100" @submit.prevent="addTransaction">
        <div class="space-y-1">
            <awesome-drop-down label="Main Category" v-model="transaction.mainCategory" :options="mainCategoryOptions.value"></awesome-drop-down>
        </div>
        <div class="space-y-1">
            <awesome-drop-down label="Sub Category" v-model="transaction.subCategory" :options="subCategoryOptions.value"></awesome-drop-down>
        </div>
        <div class="space-y-1">
            <AwesomeTextBox label="Notes" v-model="transaction.notes"></AwesomeTextBox>
        </div>
        <div class="space-y-1">
            <awesome-drop-down label="Payment Method" v-model="transaction.paymentMethod" :options="paymentMethodOptions.value"></awesome-drop-down>
        </div>
        <div class="space-y-1">
            <AwesomeTextBox label="Payment Amount" v-model="transaction.paymentAmount"></AwesomeTextBox>
        </div>
        <button type="submit" class="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
            Add Transaction
        </button>
    </form>
</template>

<script setup>
import AwesomeTextBox from '@/components/AwesomeTextBox.vue';
import AwesomeDropDown from '@/components/AwesomeDropDown.vue';
import { reactive, computed, onBeforeMount, getCurrentInstance } from 'vue';
import { usePageStateStore } from '@/infrastructure/stores/pageState.js';

const pageStateStore = usePageStateStore();

const app = getCurrentInstance();

const lookUpRepository = computed(() => {
    return app.appContext.config.globalProperties.$repository.lookUpRepository;
});

const transactionRepository = computed(() => {
    return app.appContext.config.globalProperties.$repository.transactionRepository;
});

const transaction = reactive({
    mainCategory: "",
    subCategory: "",
    transactionDate: "2024-02-01T11:41:32.123Z",
    notes: "",
    paymentMethod: "",
    paymentAmount: ""
});

const mainCategoryOptions = reactive({ value: [] });
const subCategoryOptions = reactive({ value: [] });
const paymentMethodOptions = reactive({ value: [] });

const loadOptions = async () => {
    const [
        [, mainCategory_Options],
        [, subCategory_Options],
        [, paymentMethod_Options],
    ] = await Promise.all([
        lookUpRepository.value.getMainCategories(),
        lookUpRepository.value.getSubCategories(),
        lookUpRepository.value.getPaymentMethods(),
    ]);

    mainCategoryOptions.value = mainCategory_Options;
    subCategoryOptions.value = subCategory_Options;
    paymentMethodOptions.value = paymentMethod_Options;
};

const addTransaction = async () => {
    try {
        pageStateStore.setLoading({
            title: "Processing Transaction...",
            body: "Please wait while we create your transaction. This should only take a moment."
        });
        const [error, result] = await transactionRepository.value.addTransaction(transaction);
    } catch (err) {
        pageStateStore.setError({});
    }
};

onBeforeMount(async () => {
    await loadOptions();
});

</script>