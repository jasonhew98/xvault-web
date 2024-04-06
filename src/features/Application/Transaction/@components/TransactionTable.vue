<template>
	<div class="custom-table w-full overflow-x-auto rounded-xl">
		<div class="min-w-[1170px] bg-black-light p-4">
			<div class="grid grid-cols-12 px-5 py-4 lg:px-7.5 2xl:px-11">
				<div class="col-span-2" v-for="(header, index) in tableHeaders"
					:key="header.id"
					:index="index">
					<h5 class="font-medium text-gray-light">{{ header.label }}</h5>
				</div>
				<div class="col-span-1">
					<h5 class="text-right font-medium text-white"></h5>
				</div>
			</div>
			<div v-if="hasRecords">
				<transaction-table-row v-for="(record, index) in records"
					:key="record.transactionId"
					:index="index"
					:record="record">
                </transaction-table-row>
			</div>
            <div v-else class="h-[460px] flex justify-center items-center text-gray-light">
                Looks like there's nothing to show here.
            </div>
		</div>
	</div>
</template>

<script setup>
import TransactionTableRow from './TransactionTableRow.vue';

import { computed } from 'vue';

const props = defineProps({
	records: { type: Array, required: true, default() { return [] } },
});

const hasRecords = computed(() => {
    return props.records.length > 0;
});

const tableHeaders = computed(() => {
    return [
        {
            id: 1,
            label: "Main Category",
            property: "mainCategory"
        },
        {
            id: 2,
            label: "Sub Category",
            property: "subCategory"
        },
        {
            id: 3,
            label: "Transaction Date",
            property: "transactionDate"
        },
        {
            id: 4,
            label: "Payment Method",
            property: "paymentMethod"
        },
        {
            id: 5,
            label: "Payment Amount",
            property: "paymentAmount"
        }
    ];
});

</script>

<style lang="scss" scoped>

.custom-table::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}

.custom-table::-webkit-scrollbar {
	height: 4px;
}

.custom-table::-webkit-scrollbar-thumb {
    @apply bg-green;
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
}

</style>