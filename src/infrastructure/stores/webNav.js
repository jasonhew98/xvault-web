import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWebNavStore = defineStore('webNav', () => {
    const isWebNavOpen = ref(false);

    function toggleWebNav() {
        isWebNavOpen.value = !isWebNavOpen.value;
        if (isWebNavOpen.value) document.body.classList.add("overflow-hidden")
        else document.body.classList.remove("overflow-hidden");
    }

    return { isWebNavOpen, toggleWebNav }
})