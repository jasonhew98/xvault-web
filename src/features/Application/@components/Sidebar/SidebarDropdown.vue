<template>
	<ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
		<template v-for="(childItem, index) in items" :key="index">
			<li>
				<router-link
					:to="childItem.route"
					@click="handleItemClick(index)"
					class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-black"
					:class="{
						'!text-white': childItem.label === sidebarStore.selected
					}">
					{{ childItem.label }}
				</router-link>
			</li>
		</template>
	</ul>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import { useAppSidebarStore } from '@/infrastructure/stores/appSidebar.js';
const sidebarStore = useAppSidebarStore();

const props = defineProps(['items', 'page'])
const items = ref(props.items)

const handleItemClick = (index) => {
  	const pageName = sidebarStore.selected === props.items[index].label ? '' : props.items[index].label;
	  sidebarStore.selected = pageName;
}
</script>