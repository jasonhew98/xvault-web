<template>
    <div class="app">
        <ApplicationSideBar></ApplicationSideBar>
        <router-view></router-view>
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

</style>