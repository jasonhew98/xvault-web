<template>
    <div class="w-full h-full overflow-auto flex max-w-full flex-auto flex-col">
        <main id="page-content" class="w-full flex justify-center items-center max-w-full flex-auto flex-col">
            <div class="container w-full p-4">
                <transaction-table :records="transactions.value"></transaction-table>
            </div>
        </main>
        <main id="page-content" class="w-full flex justify-center items-center max-w-full flex-auto flex-col">
            <div class="container w-full p-4">
                <div class="md:p-16 p-4 rounded-xl bg-black-light text-white">
                    <transaction-add-form></transaction-add-form>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { reactive, computed, onBeforeMount, getCurrentInstance, provide } from 'vue';
import TransactionTable from './@components/TransactionTable.vue';
import TransactionAddForm from './@components/TransactionAddForm.vue';
import { usePageStateStore } from '@/infrastructure/stores/pageState.js';

const pageStateStore = usePageStateStore();

const app = getCurrentInstance();
const transactions = reactive({
    value: []
});

const transactionRepository = computed(() => {
    return app.appContext.config.globalProperties.$repository.transactionRepository;
});

const getList = async () => {
    try {
        const [error, result] = await transactionRepository.value.getTransactions();
        transactions.value = result;
    } catch (err) {
        pageStateStore.setError({});
    }
};

const forceRefresh = async () => {
    await getList();
};

const deleteTransaction = async (transactionId) => {
    try {
        transactions.value = transactions.value.filter(x => x.transactionId != transactionId);

        pageStateStore.setLoading({
            title: "Processing Transaction...",
            body: "Please wait while we delete your transaction. This should only take a moment."
        });
        
        const [error, result] = await transactionRepository.value.deleteTransaction(transactionId);
        if (error) {
            pageStateStore.setError({});
            return;
        }

        pageStateStore.setCompleted({});
    } catch (err) {
        pageStateStore.setError({});
    }
};

const lookUpRepository = computed(() => {
    return app.appContext.config.globalProperties.$repository.lookUpRepository;
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

provide('options', {
    mainCategories: mainCategoryOptions,
    subCategories: subCategoryOptions,
    paymentMethods: paymentMethodOptions,
});
provide('forceRefresh', forceRefresh);
provide('deleteTransaction', deleteTransaction);

onBeforeMount(async () => {
    await loadOptions();
    await getList();
});

</script>

<style lang="scss" scoped></style>