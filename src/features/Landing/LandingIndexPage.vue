<template>
    <div class="page__container">
        <awesome-nav-bar :options="navBarOptions"></awesome-nav-bar>
        <div class="landing__content">
            <div ref="home" class="landing__attraction">
                <h1 class="landing__title">Save money, without <br> thinking about it.</h1>
                <div class="landing__caption">Xvault tracks and analyzes your daily spending so you don't have to think about it.</div>

                <div class="landing__button button button--round button--medium">Sign Up Now</div>
            </div>
            <div ref="about" class="landing__attraction">
                <h1 class="landing__title">About</h1>
            </div>
            <div ref="solutions" class="landing__attraction">
                <h1 class="landing__title">Solutions</h1>
            </div>
            <div ref="blog" class="landing__attraction">
                <h1 class="landing__title">Blog</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import AwesomeNavBar from '@/components/AwesomeNavBar.vue';

const home = ref();
const about = ref();
const solutions = ref();
const blog = ref();

onMounted(() => {
    home.value.focus();
    about.value.focus();
    solutions.value.focus();
    blog.value.focus();
})

const navBarOptions = computed(() => {
    return [
        {
            id: 1,
            displayName: "Home",
            action: () => { home.value.scrollIntoView({ behavior: "smooth" }) }
        },
        {
            id: 2,
            displayName: "About us",
            action: () => { about.value.scrollIntoView({ behavior: "smooth" }) }
        },
        {
            id: 3,
            displayName: "Solutions",
            action: () => { solutions.value.scrollIntoView({ behavior: "smooth" }) }
        },
        {
            id: 4,
            displayName: "Blog",
            action: () => { blog.value.scrollIntoView({ behavior: "smooth" }) }
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