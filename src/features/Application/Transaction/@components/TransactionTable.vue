<template>
    <div
		class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
		<div class="max-w-full overflow-x-auto">
			<table class="w-full table-auto">
				<thead>
					<tr class="bg-primary text-white text-left dark:bg-meta-4">
						<th v-for="(header, index) in props.headers" :key="header.id" :index="index"
                            class="min-w-[220px] py-4 px-4 font-medium dark:text-white">
							{{ header.label }}
						</th>
						<th class="py-4 px-4 font-medium dark:text-white"></th>
					</tr>
				</thead>
				<tbody>
                    <transaction-table-row v-for="(record, index) in records" :key="record.transactionId"
                        :index="index" :record="record">
					</transaction-table-row>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import TransactionTableRow from './TransactionTableRow.vue';

const props = defineProps({
    headers: { type: Array, required: true, default() { return [] } },
    records: { type: Array, required: true, default() { return [] } },
});

</script>