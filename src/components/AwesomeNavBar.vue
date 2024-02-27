<template>
    <header class="header" id="header">
        <nav class="nav container">
            <div class="nav__logo">
                <i class='bx bxl-codepen'></i> Xvault
            </div>

            <div class="nav__menu" :class="navMenuClass">
                <ul class="nav__list">
                    <li class="nav__item" v-for="option in options" :key="option.id">
                        <div class="nav__link">{{ option.displayName }}</div>
                    </li>
                </ul>

                <div class="nav__close">
                    <i class="uil uil-times nav__close" @click="toggleMenu"></i>
                </div>
            </div>

            <div class="nav__actions">
                <i class='bx bxs-user-circle'></i>

                <div class="nav__toggle">
                    <i class='bx bx-menu nav__open' @click="toggleMenu"></i>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, computed } from 'vue';

const showMenu = ref(false);

const props = defineProps({
    options: { type: Array, required: true, default() { return []; } }
});

const navMenuClass = computed(() => {
    return showMenu.value ? "nav__menu--show" : "";
});

const navToggleClass = computed(() => {
    return showMenu.value ? "nav__toggle--show" : "";
});

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};

const scrollToView = () => {
    // this.goToView(option.ref);
};
</script>

<style lang="scss" scoped>

.header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: var(--z-fixed);
}

.nav {
    position: relative;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__logo,
.nav__close,
.nav__toggle,
.nav__actions {
    display: flex;
    color: var(--title-color);
    cursor: pointer;
}

.nav__logo {
    font-weight: var(--font-semi-bold);
    column-gap: .25rem;
    align-items: center;
}

.nav__logo i {
    color: var(--title-color);
    font-size: 1.25rem;
    font-weight: initial;
}

.nav__actions {
    font-size: 1.25rem;
    column-gap: .5rem;
    align-items: center;
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
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
    transition: color .4s;
    cursor: pointer;
}

.nav__link:hover {
    color: var(--title-color-hover);
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
