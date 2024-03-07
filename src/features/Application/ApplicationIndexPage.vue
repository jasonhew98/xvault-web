<template>
    <div class="app bg-gray-100">
        <div class="app-content">
            <SidebarArea />
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import ApplicationNavBar from './@components/ApplicationNavBar.vue';
import ApplicationSideBar from './@components/ApplicationSideBar.vue';
import SidebarArea from './@components/Sidebar/SidebarArea.vue';

</script>

<style lang="scss" scoped>





</style>