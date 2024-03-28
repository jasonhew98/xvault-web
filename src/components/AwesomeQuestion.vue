<template>
    <div class="awesome__label-container">
        <div class="awesome__label">{{ awesomeLabel }}</div>
        <i class="uil uil-exclamation-circle cursor-pointer"></i>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: { type: String, required: false, default: "Question Label" },
    tooltip: { type: String, required: false, default: "Question Tooltip" }
});

const awesomeLabel = computed(() => {
    return props.label;
});
</script>

<style lang="scss" scoped>

.awesome__label-container {
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 1rem 0;
}

</style>