<template>
    <form class="space-y-6 dark:text-gray-100" onsubmit="return false;">
        <div class="space-y-1">
            <awesome-drop-down label="Main Category" v-model="transaction.mainCategory" :options="mainCategoryOptions"></awesome-drop-down>
        </div>
        <div class="space-y-1">
            <awesome-drop-down label="Sub Category" v-model="transaction.subCategory" :options="subCategoryOptions"></awesome-drop-down>
        </div>
        <div class="space-y-1">
            <AwesomeTextBox label="Notes" v-model="transaction.notes"></AwesomeTextBox>
        </div>
        <button type="submit" class="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
            Add Transaction
        </button>
    </form>
</template>

<script setup>
import AwesomeTextBox from '@/components/AwesomeTextBox.vue';
import AwesomeDropDown from '@/components/AwesomeDropDown.vue';
import { ref, reactive, computed, watch, onMounted, getCurrentInstance } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { formatDate } from '@/seedwork/formatters/dateFormatter';

const app = getCurrentInstance();

const transactionRepository = computed(() => {
    return app.appContext.config.globalProperties.$repository.transactionRepository;
});

const transaction = reactive({
    mainCategory: "",
    subCategory: "",
    transactionDate: "",
    notes: "",
    paymentMethod: "",
    paymentAmount: null
});

const mainCategoryOptions = computed(() => {
    return [
        {
            id: "electronics",
            label: "Electronics"
        },
        {
            id: "entertainment",
            label: "Entertainment"
        },
        {
            id: "foodBeverage",
            label: "Food & Beverage"
        },
        {
            id: "healthBeauty",
            label: "Health & Beauty"
        },
        {
            id: "homeProperty",
            label: "Home & Property"
        },
        {
            id: "leisureSports",
            label: "Leisure & Sports"
        },
        {
            id: "medical",
            label: "Medical"
        },
        {
            id: "shopping",
            label: "Shopping"
        },
        {
            id: "telecommunications",
            label: "Telecommunications"
        },
        {
            id: "transportation",
            label: "Transportation"
        },
        {
            id: "travel",
            label: "Travel"
        },
        {
            id: "utilities",
            label: "Utilities"
        },
    ];
});

const subCategoryOptions = computed(() => {
    return [
        {
            id: "householdAppliances",
            label: "Household appliances"
        },
        {
            id: "computer",
            label: "Computer"
        },
        {
            id: "digitalApplications",
            label: "Digital applications"
        },
        {
            id: "electronics",
            label: "Electronics"
        }
    ];
});



</script>