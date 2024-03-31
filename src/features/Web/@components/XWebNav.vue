<template>
    <header class="header" id="header" :class="headerClass">
        <nav class="nav">
            <div class="flex gap-1 font-semibold items-center cursor-pointer logo-name pr-4" @click="goToHome">
                <div class="w-8 h-8 icon icon-box-logo bg-green"></div>XVAULT
            </div>

            <div class="nav__menu xl:w-auto md:w-1/2 w-full" :class="navMenuClass">
                <!-- Region Mobile Side Option Navigation -->
                <ul class="md:hidden visible flex items-center text-sm font-medium gap-2 pb-12">
                    <li class="w-full text-center text-black bg-green rounded-md hover:bg-green-dark transition-background-color px-4 py-2 duration-200 ease-in-out"
                        v-for="(option, index) in sideOptions" :key="option.id" :index="index" @click="option.action">
                        <span class="cursor-pointer">{{ option.label }}</span>
                    </li>
                </ul>
                <!-- End Mobile Side Option Navigation -->

                <ul class="xl:flex items-center text-sm font-medium">
                    <li class="xl:px-4 py-2 duration-200 ease-in-out" v-for="option in options" :key="option.id">
                        <span class="hover:text-green transition-colors cursor-pointer" @click="onMenuClick(option)">{{ option.label }}</span>
                    </li>
                </ul>

                <div class="absolute text-xl top-5 right-5 cursor-pointer xl:hidden">
                    <i class="uil uil-times" @click="webNavStore.toggleWebNav"></i>
                </div>
            </div>

            <div class="flex flex-row items-center">
                <ul class="md:visible md:flex hidden items-center text-sm font-medium gap-4">
                    <li v-for="(option, index) in sideOptions" :key="option.id" :index="index">
                        <div v-if="option.actionType == 'button'"
                            class="px-4 py-2 text-black cursor-pointer bg-green hover:bg-green-dark transition-colors duration-200 ease-in-out"
                            @click="option.action">
                            <span>{{ option.label }}</span>
                        </div>
                        <span v-else class="cursor-pointer hover:text-green transition-colors duration-200 ease-in-out"
                            @click="option.action">{{ option.label }}
                        </span>
                    </li>
                </ul>

                <div class="xl:hidden pl-4 py-2" :class="{ hidden: !hasOptions }">
                    <i class="bx bx-menu cursor-pointer text-2xl" @click="webNavStore.toggleWebNav"></i>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, getCurrentInstance } from 'vue';
import { useWebNavStore } from '@/infrastructure/stores/webNav.js';

const webNavStore = useWebNavStore();

const app = getCurrentInstance();

// region ref
const showNavBar = ref(true);
const lastScrollPosition = ref(0);

// region props
const props = defineProps({
    options: { type: Array, required: true, default() { return []; } },
    sideOptions: { type: Array, required: true, default() { return []; } }
});

// region computed
const router = computed(() => {
    return app.appContext.config.globalProperties.$router;
});

const headerClass = computed(() => {
    return showNavBar.value ? "" : "header--hidden";
});

const navMenuClass = computed(() => {
    return webNavStore.isWebNavOpen ? "nav__menu--show" : "";
});

const hasOptions = computed(() => {
    return props.options.length > 0 || props.sideOptions.length > 0;
});

// region methods
const goToHome = () => {
    router.value.push({
        name: "LandingIndexPage"
    })
}

const onMenuClick = (option) => {
    webNavStore.toggleWebNav();
    option.action();
}

const onScroll = () => {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (currentScrollPosition < 0) {
        return;
    }

    showNavBar.value = currentScrollPosition < lastScrollPosition.value;
    lastScrollPosition.value = currentScrollPosition;
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
});
</script>

<style lang="scss" scoped>

.header {
    @apply w-full fixed bg-black top-0 left-0 z-[100];
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
}

.header--hidden {
    transform: translate3d(0, -100%, 0);
}

.nav {
    @apply h-14 py-0 px-6 relative flex justify-between items-center text-base;
}

.nav__menu {
    margin-right: auto;
}

@media screen and (max-width: 1280px) {
    .nav__menu {
        @apply bg-black-light;
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        padding: 6rem 3rem 0;
        transition: right .4s;
    }
}

.nav__menu--show {
    right: 0;
}

</style>
