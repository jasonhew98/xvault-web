<template>
	<div class="custom-table w-full overflow-x-auto">
		<div class="min-w-[1170px]">
			<div class="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
				<div class="col-span-2" v-for="(header, index) in tableHeaders"
					:key="header.id"
					:index="index">
					<h5 class="font-medium text-white">{{ header.label }}</h5>
				</div>
				<div class="col-span-1">
					<h5 class="text-right font-medium text-white"></h5>
				</div>
			</div>
			<div class="bg-white dark:bg-boxdark rounded-b-[10px]">
				<transaction-table-row v-for="(record, index) in records"
					:key="record.transactionId"
					:index="index"
					:record="record"></transaction-table-row>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import TransactionTableRow from './TransactionTableRow.vue';

const props = defineProps({
	records: { type: Array, required: true, default() { return [] } },
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
    ]
});

</script>

<style lang="scss" scoped>

.custom-table::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
    background-color: white;
}

.custom-table::-webkit-scrollbar
{
	height: 6px;
}

.custom-table::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
	background-color: var(--text-200);
}

</style>