<template>
    <div class="app bg-gray-100">
        <div class="app-content">
            <application-side-bar></application-side-bar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import ApplicationNavBar from './@components/ApplicationNavBar.vue';
import ApplicationSideBar from './@components/ApplicationSideBar.vue';

</script>

<style lang="scss" scoped>





</style>