<template>
    <div class="relative">
        <awesome-question :label="label" :tooltip="tooltip"></awesome-question>
        <div ref="target">
            <div class="w-full rounded-lg text-sm px-4 py-2.5 text-center cursor-pointer inline-flex items-center border border-gray-300 text-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                @click="toggleDropDown">
                {{ buttonLabel }}
                <svg class="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            <div class="w-full max-h-[190px] bg-white dark:bg-boxdark text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-2 absolute overflow-y-auto dark:placeholder-gray-400"
                :class="{ 'hidden': !isActive }">
                <ul class="py-1">
                    <li v-for="option in props.options" :key="option.id">
                        <div class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 cursor-pointer dark:text-white dark:hover:bg-gray-700"
                            :class="{ 'bg-gray-100 dark:bg-gray-700': option.id === selectedValue }"
                            @click="selectOption(option.id)">{{ option.label }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import AwesomeQuestion from './AwesomeQuestion.vue';
import { ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
    modelValue: { type: [String, Number], required: true, default: null },
    label: { type: String, required: false, default: undefined },
    tooltip: { type: String, required: false, default: undefined },
    readonly: { type: Boolean, required: false, default: false },
    options: { type: Array, required: false, default() { return []; } },
});

const emit = defineEmits(['update:modelValue']);

const target = ref(null);
const isActive = ref(false);
const selectedValue = ref(props.modelValue);

const toggleDropDown = () => {
    isActive.value = !isActive.value;
};

const buttonLabel = computed(() => {
    let label = props.options.find(x => x.id === selectedValue.value)?.label;
    return label || "Select an option"
});

const selectOption = (id) => {
    selectedValue.value = id;
    isActive.value = false;
    emit('update:modelValue', id);
};

onClickOutside(target, () => {
	isActive.value = false;
});

</script>

<style lang="scss" scoped>

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
    background-color: white;
}

::-webkit-scrollbar
{
	width: 6px;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
	background-color: var(--scrollbar-color);
}

</style>