<template>
    <div class="w-full h-full overflow-auto flex max-w-full flex-col">
        <main id="page-content" class="w-full flex items-center max-w-full flex-col">
            <div class="container w-full p-4">
                <transaction-table :records="transactions.value"></transaction-table>
            </div>
        </main>
        <main id="page-content" class="w-full flex justify-center items-center max-w-full flex-col">
            <div class="container w-full p-4">
                <div class="md:p-16 p-4 rounded-xl bg-black-light text-white">
                    <transaction-add-form></transaction-add-form>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import TransactionTable from './@components/TransactionTable.vue';
import TransactionAddForm from './@components/TransactionAddForm.vue';

import { reactive, onBeforeMount, provide, inject } from 'vue';

import { usePageStateStore } from '@/infrastructure/stores/pageState.js';

const pageStateStore = usePageStateStore();

// get transactions
const transactions = reactive({
    value: []
});

const transactionRepository = inject('transactionRepository');

const getList = async () => {
    try {
        const [error, result] = await transactionRepository.getTransactions();
        transactions.value = result;
    } catch (err) {
        pageStateStore.setError({});
    }
};

const forceRefresh = async () => {
    await getList();
};

provide('forceRefresh', forceRefresh);

// delete transaction
const deleteTransaction = async (transactionId) => {
    try {
        transactions.value = transactions.value.filter(x => x.transactionId != transactionId);

        pageStateStore.setLoading({
            title: "Processing Transaction...",
            body: "Please wait while we delete your transaction. This should only take a moment."
        });
        
        const [error, result] = await transactionRepository.deleteTransaction(transactionId);
        if (error) {
            pageStateStore.setError({});
            return;
        }

        pageStateStore.setCompleted({});
    } catch (err) {
        pageStateStore.setError({});
    }
};

provide('deleteTransaction', deleteTransaction);

// lookUp options
const lookUpRepository = inject('lookUpRepository');

const mainCategoryOptions = reactive({ value: [] });
const subCategoryOptions = reactive({ value: [] });
const paymentMethodOptions = reactive({ value: [] });

const loadOptions = async () => {
    const [
        [, mainCategory_Options],
        [, subCategory_Options],
        [, paymentMethod_Options],
    ] = await Promise.all([
        lookUpRepository.getMainCategories(),
        lookUpRepository.getSubCategories(),
        lookUpRepository.getPaymentMethods(),
    ]);

    mainCategoryOptions.value = mainCategory_Options;
    subCategoryOptions.value = subCategory_Options;
    paymentMethodOptions.value = paymentMethod_Options;
};

provide('options', {
    mainCategories: mainCategoryOptions,
    subCategories: subCategoryOptions,
    paymentMethods: paymentMethodOptions,
});

onBeforeMount(async () => {
    await loadOptions();
    await getList();
});

</script>