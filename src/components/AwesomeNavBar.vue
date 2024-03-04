<template>
    <header class="header" id="header" :class="headerClass">
        <nav class="nav">
            <a href="#" class="nav__logo logo-name">
                <div class="w-12 h-12 icon icon-logo"></div>XVAULT
            </a>

            <div class="nav__menu" :class="navMenuClass">
                <ul class="nav__list">
                    <li class="nav__item" v-for="option in options" :key="option.id">
                        <div class="nav__link" @click="onClick(option)">{{ option.displayName }}</div>
                    </li>
                </ul>

                <div class="nav__close">
                    <i class="uil uil-times nav__close" @click="toggleMenu"></i>
                </div>
            </div>

            <div class="nav__actions">
                <div class="button button-secondary text-center" @click="launchApp">Launch</div>

                <!-- <div class="nav__toggle">
                    <i class='bx bx-menu nav__open' @click="toggleMenu"></i>
                </div> -->
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, getCurrentInstance } from 'vue';

const app = getCurrentInstance();

// region ref
const showNavBar = ref(true);
const lastScrollPosition = ref(0);
const showMenu = ref(false);

// region props
const props = defineProps({
    options: { type: Array, required: true, default() { return []; } }
});

// region computed
const router = computed(() => {
    return app.appContext.config.globalProperties.$router;
});

const headerClass = computed(() => {
    return showNavBar.value ? "" : "header--hidden";
});

const navMenuClass = computed(() => {
    return showMenu.value ? "nav__menu--show" : "";
});

// region methods
const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};

const goToApp = () => {
    router.value.push({
        name: "TransactionIndexPage"
    })
};

const goToAuth = () => {
    router.value.push({
        name: "AuthIndexPage"
    })
};

const launchApp = () => {
    if (localStorage.getItem("jwtToken"))
        goToApp();
    else
        goToAuth();
};

const onClick = (option) => {
    toggleMenu();
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
    background-color: var(--body-color);
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
    margin-left: auto;
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

@media screen and (max-width: 1150px) {
    .nav__menu {
        position: fixed;
        top: 0;
        right: -100%;
        background-color: hsla(228, 24%, 6%, .2);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        width: 80%;
        height: 100%;
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
