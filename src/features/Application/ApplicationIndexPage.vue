<template>
    <div class="app">
        <div class="app-content">
            <ApplicationSideBar></ApplicationSideBar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import ApplicationSideBar from './@components/ApplicationSideBar.vue';
</script>

<style lang="scss" scoped>

.app {
    display: flex;
}

.app-content {
    width: 100%;
    height: 100%;
    display: flex;
}



</style>