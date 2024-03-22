import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useModalStore = defineStore('modal', () => {
	const defaultTitle = "Modal Title";
	const defaultBody = "";
	const defaultAction = [
		{
			id: "ok",
			label: "Done",
			action: () => {
				hide();
			}
		}
	];

	const isModalActive = ref(false);
	const modalDetails = reactive({
		title: defaultTitle,
		body: defaultBody,
		actions: defaultAction
	});

	const setModalDetails = ({ title = defaultTitle, body = defaultBody, actions = defaultAction }) => {
		modalDetails.title = title;
		modalDetails.body = body;
		modalDetails.actions = actions;
	};

	const show = () => {
		isModalActive.value = true;
	};

	const hide = () => {
		isModalActive.value = false;
	};

	return { isModalActive, modalDetails, show, hide, setModalDetails }
})
