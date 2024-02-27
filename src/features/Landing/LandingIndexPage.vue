<template>
    <div class="page__container">
        <awesome-nav-bar :options="navBarOptions"></awesome-nav-bar>
        <div class="landing__content">
            <div class="landing__attraction">
                <h1 class="landing__title">Save money, without <br> thinking about it.</h1>
                <div class="landing__caption">Xwallet tracks and analyzes your daily spending so you don't have to think about it.</div>

                <div class="landing__button button button--round button--medium">Sign Up Now</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import AwesomeNavBar from '@/components/AwesomeNavBar.vue';

const navBarOptions = computed(() => {
    return [
        {
            id: 1,
            displayName: "Home",
            ref: "home"
        },
        {
            id: 2,
            displayName: "About us",
            ref: "about"
        },
        {
            id: 3,
            displayName: "Solutions",
            ref: "solutions"
        },
        {
            id: 4,
            displayName: "Blog",
            ref: "blog"
        }
    ]
});

</script>

<style lang="scss" scoped>

.landing__content {
    height: 100%;
}

.landing__attraction {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.landing__title {
    font-size: var(--biggest-font-size);
    margin-bottom: var(--margin-1);
}

.landing__caption {
    max-width: 400px;
    line-height: 20px;
    margin-bottom: var(--margin-1);
    opacity: .5;
}

/* For large devices */
@media only screen and (min-width: 1150px) {
    .landing__attraction {
        padding: 0 8rem;
    }
}

/* For medium devices */
@media only screen and (min-width: 768px) {
}

@media only screen and (max-width: 576px) {
    .landing__attraction {
        text-align: start;
        align-items: normal;
    }
}

/* For small devices */
@media only screen and (max-width: 320px) {
}

</style>