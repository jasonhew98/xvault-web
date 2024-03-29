<template>
    <div class="app bg-black dark:bg-black">
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
import HeaderArea from './@components/Header/HeaderArea.vue';
import SidebarArea from './@components/Sidebar/SidebarArea.vue';

</script>

<style lang="scss" scoped>
</style>