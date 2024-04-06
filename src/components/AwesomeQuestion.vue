<template>
    <div class="flex flex-row items-center gap-2 text-gray-light pb-2">
        <span class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{{ awesomeLabel }}</span>
        <i class="uil uil-exclamation-circle cursor-pointer"></i>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: { type: [null, String], required: false, default: "Question Label" },
    tooltip: { type: String, required: false, default: "Question Tooltip" }
});

const awesomeLabel = computed(() => {
    return props.label;
});
</script>

<style lang="scss" scoped>

</style>