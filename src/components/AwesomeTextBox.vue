<template>
    <div class="awesome__text-box-container">
        <awesome-question :label="label" :tooltip="tooltip"></awesome-question>
        <input type="text" class="awesome__text-box" :value="modelValue" @input="updateValue" :readonly="readonly" :placeholder="placeholder">
    </div>
</template>

<script setup>
import AwesomeQuestion from './AwesomeQuestion.vue';

const props = defineProps({
    modelValue: { type: [String, Number], required: true, default: null },
    label: { type: String, required: false, default: undefined },
    tooltip: { type: String, required: false, default: undefined },
    placeholder: { type: String, required: false, default: undefined },
    readonly: { type: Boolean, required: false, default: false },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>

<style lang="scss" scoped>

.awesome__text-box-container {

    .awesome__text-box {
        @apply border-b border-solid border-gray-light;
        width: 100%;
        outline: 0;
        padding: 7px 0;
        font-size: 16px;
        background: transparent;
        transition: border-color 0.2s;
    }

    .awesome__text-box::placeholder {
        opacity: .5;
    }

    .awesome__text-box:focus {
        @apply border-b-2 border-solid border-green;
        padding-bottom: 6px;
    }
}

</style>