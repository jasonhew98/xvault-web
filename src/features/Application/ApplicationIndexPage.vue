<template>
    <div class="app bg-gray-100 dark:bg-boxdark">
        <div class="app-content">
            <sidebar-area></sidebar-area>
            <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <header-area></header-area>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import HeaderArea from './@components/Header/HeaderArea.vue';
import SidebarArea from './@components/Sidebar/SidebarArea.vue';

</script>

<style lang="scss" scoped>
</style>