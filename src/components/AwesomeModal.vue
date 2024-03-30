<template>
    <div class="flex h-full min-h-screen w-full items-center justify-center px-4 py-5">
        <div class="w-[570px] rounded-lg bg-black-light py-12 px-8 text-center md:py-15 md:px-17.5">
            <h3 class="pb-2 text-xl font-bold text-green sm:text-2xl mb-8">
                {{ props.title }}
            </h3>
            <p class="mb-10 font-medium text-gray-light">{{ props.body }}</p>
            <div class="-mx-3 flex gap-y-4">
                <div class="w-full px-3 2xsm:w-1/2" v-for="action in props.actions">
                    <button class="block w-full rounded border" :class="buttonStyles[action.id]"
                        @click="action.action">
                        {{ action.label }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';

import { useModalStore } from '@/infrastructure/stores/modal.js';

const modalStore = useModalStore();

const buttonStyles = {
    ok: "button-positive",
    cancel: "button-negative"
};

const lorumIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex tellus, pellentesque mollis magna nec, condimentum interdum mi. Phasellus purus tortor, ornare eget fermentum congue, imperdiet quis neque. Pellentesque bibendum ipsum ut consequat tincidunt. In blandit, est at ultrices molestie, arcu sem vulputate quam, in posuere arcu odio sed velit.";

const props = defineProps({
    title: { type: String, required: false, default: "Modal Title" },
    body: { type: String, required: false, default: lorumIpsum },
    actions: { type: Array, required: false, default() { return [] } }
});

</script>

<style>

.button-negative {
    @apply border-stroke p-3 text-center font-medium text-black
        transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white
        dark:hover:border-meta-1 dark:hover:bg-meta-1;
}

.button-positive {
    @apply border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90;
}

</style>