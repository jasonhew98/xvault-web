<template>
    <div class="landing-container">
        <div class="main main-landing">
            <XWebNav :options="actionConfigurations" :sideOptions="sideActionConfigurations"></XWebNav>
            <main class="section-hero py-16 w-screen md:h-screen">
                <div class="container md:pb-4 mx-auto pt-14 px-6 z-10">
                    <div class="grid lg:grid-cols-12 grid-cols-1 md:gap-x-20 md:gap-y-16">
                        <div class="lg:col-span-12 md:text-center md:col-span-7 lg:order-none col-span-12 pb-4 order-2">
                            <h1 class="landing__title">Take control of your finances <br>today!</h1>
                            <div class="landing__caption">Track your daily expenses and manage your money with ease.</div>
                            <div class="landing__actions md:justify-center">
                                <div class="landing__button button button-primary" @click="launchApp">Sign Up</div>
                                <div class="landing__button button button-secondary">Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div class="section-faq py-16">
                <XWebFaq></XWebFaq>
            </div>
            <XWebFooter></XWebFooter>
        </div>
    </div>
</template>

<script setup>
import XWebNav from '../@components/XWebNav.vue';
import XWebFaq from '../@components/XWebFaq.vue';
import XWebFooter from '../@components/XWebFooter.vue';
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';

const app = getCurrentInstance();

// region ref
const home = ref();
const about = ref();
const solutions = ref();
const blog = ref();

// region computed
const router = computed(() => {
    return app.appContext.config.globalProperties.$router;
});

const actionConfigurations = computed(() => {
    return [
        {
            id: 1,
            label: "Home",
            action: () => {  }
        },
        {
            id: 2,
            label: "About us",
            action: () => {  }
        },
        {
            id: 3,
            label: "Solutions",
            action: () => {  }
        },
        {
            id: 4,
            label: "Blog",
            action: () => {  }
        }
    ]
});

const sideActionConfigurations = computed(() => {
    return [
        {
            id: 1,
            label: "Log In",
            actionType: "label",
            action: () => launchApp()
        },
        {
            id: 2,
            label: "Sign Up",
            actionType: "button",
            action: () => launchApp()
        }
    ]
});

// region methods
const goToApp = () => {
    router.value.push({
        name: "ApplicationIndexPage"
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

onMounted(() => {
    
})

</script>

<style lang="scss" scoped>

body {
    background-color: var(--body-color);
}

.section-hero {
    display: flex;
    justify-content: center;
    align-items: center;
}

.intro-background > canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.landing__content {
    height: 100%;
}

.landing__section {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 12rem 0;
}

.landing__about {
    grid-template-columns: repeat(2, 1fr);
}

.landing__cta {
    width: 49%;
}

.landing__assets {
    width: 40.5%;
    padding-left: 5rem;
}

.landing__attraction {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.landing__actions {
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding-top: 8px;
}

.landing__button {
    text-align: center;
}

/* For large devices */
@media only screen and (min-width: 1150px) {
    .landing__attraction {
        padding: 0 8rem;
    }
}

/* For medium devices */
@media only screen and (min-width: 768px) {
    .landing__section--hero {
        padding: 48px 24px;
    }
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

</style>../@components/LandingNav.vue../@components/LandingFaq.vue../@components/LandingFooter.vue