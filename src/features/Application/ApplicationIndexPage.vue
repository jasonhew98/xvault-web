<template>
    <div class="app bg-gray-100">
        <div class="app-content">
            <application-nav-bar></application-nav-bar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
import ApplicationNavBar from './@components/ApplicationNavBar.vue';

</script>

<style lang="scss" scoped>





</style>