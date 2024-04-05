<template>
    <div class="landing-container h-full">
        <div class="main main-landing flex flex-col">
            <XWebNav :options="actionConfigurations" :sideOptions="sideActionConfigurations"></XWebNav>
            <main class="flex-1">
                <div class="h-full mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 flex flex-col justify-center md:items-center gap-y-6">
                    <div class="text-8xl">404</div>
                    <div class="text-4xl">Oops! Page Not Found</div>
                    <div class="text-xl">Sorry! The page you’re looking for cannot be found.</div>
                    <div class="text-center button button-secondary button-large mt-8" @click="goToHome">Back To Home</div>
                </div>
            </main>
            <XWebFooter type="minimalist"></XWebFooter>
        </div>
    </div>
</template>

<script setup>
import XWebNav from '@/features/Web/@components/XWebNav.vue';
import XWebFooter from '@/features/Web/@components/XWebFooter.vue';

import { useRouter } from 'vue-router'

const router = useRouter();

const goToHome = () => {
    router.push({
        name: "LandingIndexPage"
    });
};

</script>