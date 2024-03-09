import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppSidebarStore = defineStore('sidebar', () => {
    const isAppSidebarOpen = ref(false);
	const page = useStorage('page', ref('transaction'));
    const selected = useStorage('selected', ref('transaction'));

    function toggleSidebar() {
		isAppSidebarOpen.value = !isAppSidebarOpen.value
    }

    return { isAppSidebarOpen, toggleSidebar, selected, page }
})
