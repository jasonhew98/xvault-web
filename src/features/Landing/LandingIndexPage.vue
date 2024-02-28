<template>
    <div class="page__container">
        <awesome-nav-bar :options="navBarOptions"></awesome-nav-bar>
        <div class="landing__content">
            <div ref="home" class="landing__section">
                <h1 class="landing__title">Take control of your finances</h1>
                <h1 class="landing__title">today!</h1>
                <div class="landing__caption">Track your daily expenses and manage your money with ease.</div>
                <div class="landing__actions">
                    <div class="landing__button button button--primary button--medium" @click="launchApp">Sign Up</div>
                    <div class="landing__button button button--secondary button--medium">Learn More</div>
                </div>
            </div>
            <!-- <div ref="about" class="landing__section">
                <div class="div grid landing__about">
                    <div class="landing__about-description">
                        <div class="landing__offset-text">Simplify</div>
                        <h1 class="landing__title">Track and Manage Your Personal Finances Easily</h1>
                        <div class="landing__actions">
                            <div class="landing__button button button--primary button--medium" @click="launchApp">Get Started</div>
                            <div class="landing__button button button--secondary button--medium">Learn More</div>
                        </div>
                    </div>
                    <div class="landing__about-features">Test</div>
                </div>
            </div>
            <div ref="solutions" class="landing__section">
                <h1 class="landing__title">Solutions</h1>
            </div>
            <div ref="blog" class="landing__section">
                <h1 class="landing__title">Blog</h1>
            </div> -->
            <landing-faq></landing-faq>
            <landing-footer></landing-footer>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue';
import AwesomeNavBar from '@/components/AwesomeNavBar.vue';
import LandingFaq from './@components/LandingFaq.vue';
import LandingFooter from './@components/LandingFooter.vue';

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

// region methods
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

onMounted(() => {
    home.value.focus();
    // about.value.focus();
    // solutions.value.focus();
    // blog.value.focus();
})

</script>

<style lang="scss">

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

.landing__title {
    font-size: var(--biggest-font-size);
    margin-bottom: var(--margin-1);
}

.landing__caption {
    color: var(--dull);
    line-height: 20px;
    margin-bottom: var(--margin-1);
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

</style>