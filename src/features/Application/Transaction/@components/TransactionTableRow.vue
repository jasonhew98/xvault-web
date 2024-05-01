<template>
  <div class="grid grid-cols-12 hover:bg-gray-dark border-t border-gray-dark px-5 py-2 lg:px-7.5 2xl:px-11">
    <div class="col-span-2 items-center inline-flex">
      <p class="text-white">{{ mapMainCategory }}</p>
    </div>
    <div class="col-span-2 items-center inline-flex">
      <p class="text-white">{{ mapSubCategory }}</p>
    </div>
    <div class="col-span-2 items-center inline-flex">
      <p class="text-white">{{ transactionDate }}</p>
    </div>
    <div class="col-span-2 items-center inline-flex">
      <p class="text-white">{{ mapPaymentMethod }}</p>
    </div>
    <div class="col-span-2 items-center inline-flex">
      <p class="text-white">{{ paymentAmount }}</p>
    </div>
    <div class="relative col-span-2 ml-auto items-center inline-flex">
      <div class="flex items-center space-x-3.5 text-white">
        <div class="hover:text-green cursor-pointer" @click="viewTransaction">
          <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
              fill="" />
            <path
              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
              fill="" />
          </svg>
        </div>
        <div class="hover:text-green cursor-pointer" @click="editTransaction">
          <i class='bx bx-edit text-lg'></i>
        </div>
        <div class="hover:text-green cursor-pointer" @click="deleteTransaction(transactionId)">
          <i class='bx bx-trash text-lg'></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { formatUTCToLocal } from '@/seedwork/formatters/dateFormatter';

const props = defineProps({
  record: { type: Object, required: false, default() { return {} } },
});

const options = inject('options', {
  mainCategories: ref([]),
  subCategories: ref([]),
  paymentMethods: ref([]),
});

// region computed
const transactionRepository = inject('transactionRepository');

const transactionId = computed(() => {
  return props.record ? props.record.transactionId : "-";
});

const mainCategory = computed(() => {
  return props.record ? props.record.mainCategory : "-";
});

const mapMainCategory = computed(() => {
  let mapped = options.mainCategories.value.find(x => x.id.toLowerCase() == mainCategory.value.toLowerCase());
  if (!mapped) return mainCategory;

  return mapped.label;
});

const subCategory = computed(() => {
  return props.record ? props.record.subCategory : "-";
});

const mapSubCategory = computed(() => {
  let selectedOption = options.subCategories.value.find(
    x => x.categoryId.toLowerCase() == mainCategory.value.toLowerCase()
  );

  let mapped = selectedOption.subCategories.find(
    x => x.subCategoryId.toLowerCase() == subCategory.value.toLowerCase()
  );

  if (!mapped)
    return subCategory;

  return mapped.label;
});

const transactionDate = computed(() => {
  return props.record ? formatUTCToLocal(props.record.transactionDate) : "-";
});

const paymentMethod = computed(() => {
  return props.record ? props.record.paymentMethod : "-";
});

const mapPaymentMethod = computed(() => {
  let mapped = options.paymentMethods.value.find(x => x.id.toLowerCase() == paymentMethod.value.toLowerCase());
  if (!mapped) return paymentMethod.value;

  return mapped.label;
});

const paymentAmount = computed(() => {
  return props.record ? props.record.paymentAmount : "-";
});

const viewTransaction = () => {

};

const editTransaction = () => {

};

const deleteTransaction = inject('deleteTransaction', () => { });

</script>