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

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>

.awesome__text-box-container {

    .awesome__text-box {
        width: 100%;
        border: 0;
        outline: 0;
        padding: 7px 0;
        font-size: 16px;
        border-bottom: 1px solid #d2d2d2;
        background: transparent;
        transition: border-color 0.2s;
    }

    .awesome__text-box::placeholder {
        opacity: .5;
    }

    .awesome__text-box:focus {
        padding-bottom: 6px;
        border-bottom: 2px solid #009788;
    }
}

</style>