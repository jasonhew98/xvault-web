<template>
    <header class="header" id="header" :class="headerClass">
        <nav class="nav">
            <div class="nav__logo logo-name pr-4" @click="goToHome">
                <div class="w-8 h-8 icon icon-box-logo"></div>XVAULT
            </div>

            <div class="nav__menu xl:w-auto md:w-1/2 w-full" :class="navMenuClass">
                <ul class="md:hidden visible flex items-center text-sm font-medium gap-2 pb-12">
                    <li class="w-full text-center bg-bg-300 rounded-md hover:bg-bg-200 transition-background-color pointer px-4 py-2 duration-200 ease-in-out"
                        v-for="(option, index) in sideOptions" :key="option.id" :index="index">
                        <div @click="option.action">{{ option.label }}</div>
                    </li>
                </ul>

                <ul class="xl:flex items-center text-sm font-medium">
                    <li class="pointer xl:px-4 py-2 duration-200 ease-in-out" v-for="option in options" :key="option.id">
                        <div class="hover:text-primary-300 transition-colors" @click="onMenuClick(option)">{{ option.label }}</div>
                    </li>
                </ul>

                <div class="nav__close">
                    <i class="uil uil-times nav__close" @click="webNavStore.toggleWebNav"></i>
                </div>
            </div>

            <div class="flex flex-row items-center">
                <ul class="md:visible md:flex hidden items-center text-sm font-medium">
                    <li class="pointer px-4 py-2 duration-200 ease-in-out" v-for="(option, index) in sideOptions" :key="option.id" :index="index"
                        :class="{
                            'hover:text-primary-300 transition-colors': option.actionType == 'label',
                            'bg-bg-300 rounded-md hover:bg-bg-200 transition-background-color': option.actionType == 'button'
                        }">
                        <div @click="option.action">{{ option.label }}</div>
                    </li>
                </ul>

                <div class="xl:hidden pl-4 py-2" :class="{hidden: !hasOptions}">
                    <i class='bx bx-menu nav__open' @click="webNavStore.toggleWebNav"></i>
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
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);

    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
}

.header--hidden {
    transform: translate3d(0, -100%, 0);
}

.nav {
    @apply text-base;
    position: relative;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
}

.nav__menu {
    margin-right: auto;
}

.nav__logo,
.nav__close,
.nav__toggle,
.nav__actions {
    display: flex;
    cursor: pointer;
}

.nav__logo {
    @apply font-semibold;
    column-gap: .25rem;
    align-items: center;
}

.nav__logo i {
    font-size: 2rem;
    font-weight: initial;
}

.nav__actions {
    column-gap: .5rem;
    align-items: center;

    .button {
        text-align: center;
    }
}

@media screen and (max-width: 1280px) {
    .nav__menu {
        position: fixed;
        top: 0;
        right: -100%;
        background-color: var(--bg-200);
        height: 100vh;
        padding: 6rem 3rem 0;
        transition: right .4s;
    }
}

.nav__list {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
}

.nav__link {
    @apply font-semibold;
    transition: color .4s;
    cursor: pointer;
    position: relative;
}

.nav__close {
    position: absolute;
    top: 1.15rem;
    right: 1.5rem;
    font-size: 1.25rem;
}

.nav__menu--show {
    right: 0;
}

</style>
