<template>
    <div class="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
        <div class="col-span-2">
            <p class="text-[#637381] dark:text-bodydark">{{ mainCategory }}</p>
        </div>
        <div class="col-span-2">
            <p class="text-[#637381] dark:text-bodydark">{{ subCategory }}</p>
        </div>
        <div class="col-span-2">
            <p class="text-[#637381] dark:text-bodydark">{{ transactionDate }}</p>
        </div>
        <div class="col-span-2">
            <p class="text-[#637381] dark:text-bodydark">{{ paymentMethod }}</p>
        </div>
        <div class="col-span-2">
            <p class="text-[#637381] dark:text-bodydark">{{ paymentAmount }}</p>
        </div>
        <div class="relative col-span-2 ml-auto">
            <div class="flex items-center space-x-3.5">
                <button class="hover:text-primary">
                    <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                            fill="" />
                        <path
                            d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                            fill="" />
                    </svg>
                </button>
                <button class="hover:text-primary">
                    <i class='bx bx-edit text-lg'></i>
                </button>
                <button class="hover:text-primary">
                    <i class='bx bx-trash text-lg'></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { formatDate } from '@/seedwork/formatters/dateFormatter';

const app = getCurrentInstance();

const props = defineProps({
    record: { type: Object, required: false, default() { return {} } },
});

// region computed
const transactionRepository = computed(() => {
    return app.appContext.config.globalProperties.$repository.transactionRepository;
});

const mainCategory = computed(() => {
    return props.record ? props.record.mainCategory : "-";
});

const subCategory = computed(() => {
    return props.record ? props.record.subCategory : "-";
});

const transactionDate = computed(() => {
    return props.record ? formatDate(props.record.transactionDate) : "-";
});

const paymentMethod = computed(() => {
    return props.record ? props.record.paymentMethod : "-";
});

const paymentAmount = computed(() => {
    return props.record ? props.record.paymentAmount : "-";
});

const viewTransaction = () => {

};

const editTransaction = () => {

};

const deleteTransaction = () => {

};

</script>