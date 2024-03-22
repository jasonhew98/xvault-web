<template>
  	<div class="content-container">
		<div v-if="!hideModal" class="fixed h-full min-h-screen w-full flex justify-center items-center bg-black/90 z-[999999]">
			<awesome-modal :title="modalStore.modalDetails.title"
				:body="modalStore.modalDetails.body"
				:actions="modalStore.modalDetails.actions">
			</awesome-modal>
		</div>
      	<router-view></router-view>
    </div>
</template>

<script setup>
import AwesomeModal from '@/components/AwesomeModal.vue';
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';

import { useModalStore } from '@/infrastructure/stores/modal.js';
import { usePageStateStore } from '@/infrastructure/stores/pageState.js';

const modalStore = useModalStore();
const pageStateStore = usePageStateStore();

const hideModal = computed(() => {
	return !modalStore.isModalActive;
});

</script>

<style lang="scss">
	@import "./styles.scss";

	.content-container {
		height: 100%;
		width: 100%;
	}
</style>
