<template>
    <div class="relative">
        <awesome-question :label="label" :tooltip="tooltip"></awesome-question>
        <div ref="target">
            <div class="w-full rounded-lg text-sm px-4 py-2.5 text-center cursor-pointer inline-flex items-center border border-gray-light text-white"
                @click="toggleDropDown">
                {{ buttonLabel }}
                <svg class="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            <div class="w-full max-h-[190px] bg-black-light text-base z-50 list-none border border-gray-dark divide-y divide-gray-100 rounded shadow my-2 absolute overflow-y-auto"
                :class="{ 'hidden': !isActive }">
                <ul class="py-1">
                    <li v-for="option in props.options" :key="option.id">
                        <div class="text-sm hover:bg-gray-dark text-white block px-4 py-2 cursor-pointer"
                            :class="{ 'bg-gray-dark': option.id === selectedValue }"
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