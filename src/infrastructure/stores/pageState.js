import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useModalStore } from './modal.js';

export const usePageStateStore = defineStore('pageState', () => {
	const isLoading = ref(false);
	const isError = ref(false);

	const modalStore = useModalStore();

	const setLoading = () => {
		isLoading.value = true;
		modalStore.setModalDetails({
			title: "Loading",
			body: "Currently Loading",
		});
		modalStore.show();
	};

	const setError = ({
		title = "Oops! Something Went Wrong",
		body = "We encountered an issue while processing your request. Please try again later.",
		actions = [{
			id: "ok",
			label: "OK",
			action: () => modalStore.hide()
		}]
	}) => {
		isError.value = true;
		modalStore.setModalDetails({
			title: title,
			body: body,
			actions: actions
		});
		modalStore.show();
	};

	const setCompleted = () => {
		isLoading.value = false;
		modalStore.hide();
	};

	return { isLoading, setLoading, setCompleted, setError }
})
