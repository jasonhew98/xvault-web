<template>
    <footer class="w-full">
        <div class="container md:pb-4 mx-auto pt-14 px-6">
            <div class="grid md:grid-cols-12 grid-cols-1 md:gap-x-20 md:gap-y-16">
                <div class="lg:col-span-5 md:col-span-6 col-span-12 pb-4">
                    <div class="-m-2 flex items-center">
                        <div class="w-10 h-10 icon icon-logo"></div><span class="tracking-widest">XVAULT</span>
                    </div>
                    <p class="mt-4">Join our newsletter to receive updates on new features and releases.</p>
                    <form class="flex md:flex-row flex-col gap-4 py-2" action="">
                        <input type="text" class="md:w-80 w-full newsletter__email" placeholder="johndoe@email.com">
                        <div class="button button--secondary button--small text-center tracking-wide">Subscribe</div>
                    </form>
                </div>
                <!-- Default -->
                <div class="footer-section">
                    <h5 class="tracking-wide font-semibold">About Us</h5>
                    <ul class="list-none mt-6 space-y-2">
                        <li>
                            <div href="#" class="footer__menu-link">
                                About
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                Careers
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                Announcements
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                News
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                Blog
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                Terms
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                Privacy
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h5 class="tracking-wide font-semibold">Service</h5>
                    <ul class="list-none mt-6 space-y-2">
                        <li>
                            <div href="#" class="footer__menu-link">
                                Expense Tracker
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                Budget Planner
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                Financial Tips
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                Saving Strategies
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h5 class="tracking-wide font-semibold">Support</h5>
                    <ul class="list-none mt-6 space-y-2">
                        <li>
                            <div href="#" class="footer__menu-link">
                                24/7 Chat Support
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                Support Center
                            </div>
                        </li>
                        <li>
                            <div href="#" class="footer__menu-link">
                                Product Feedback & Suggestions
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- Accordion -->
                <div class="accordion">
                    <div class="accordion-title" @click="toggleAccordionA">
                        <h5 class="tracking-wide font-semibold">About Us</h5>
                        <i v-if="!accordionA" class='bx bx-plus'></i>
                        <i v-else class='bx bx-minus' ></i>
                    </div>
                    <div class="accordion-answer" :class="accordionAClass">
                        <ul class="list-none mt-6 space-y-2">
                            <li>
                                <div class="footer__menu-link">
                                    About
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    Careers
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    Announcements
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    News
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    Blog
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    Terms
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    Privacy
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="accordion">
                    <div class="accordion-title" @click="toggleAccordionB">
                        <h5 class="tracking-wide font-semibold">Service</h5>
                        <i v-if="!accordionB" class='bx bx-plus'></i>
                        <i v-else class='bx bx-minus' ></i>
                    </div>
                    <div class="accordion-answer" :class="accordionBClass">
                        <ul class="list-none mt-6 space-y-2">
                            <li>
                                <div class="footer__menu-link">
                                    Expense Tracker
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    Budget Planner
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    Financial Tips
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    Saving Strategies
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="accordion">
                    <div class="accordion-title" @click="toggleAccordionC">
                        <h5 class="tracking-wide font-semibold">Support</h5>
                        <i v-if="!accordionC" class='bx bx-plus'></i>
                        <i v-else class='bx bx-minus' ></i>
                    </div>
                    <div class="accordion-answer" :class="accordionCClass">
                        <ul class="list-none mt-6 space-y-2">
                            <li>
                                <div class="footer__menu-link">
                                    24/7 Chat Support
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    Support Center
                                </div>
                            </li>
                            <li>
                                <div class="footer__menu-link">
                                    Product Feedback & Suggestions
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 border-t border-white">
            <div class="text-center container mx-auto py-7 px-6">
                &copy; {{ currentYear }} <span class="tracking-widest">XVAULT</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';

const accordionA = ref(false);
const accordionB = ref(false);
const accordionC = ref(false);

const toggleAccordionA = () => {
    accordionB.value = false;
    accordionC.value = false;

    accordionA.value = !accordionA.value;
}

const accordionAClass = computed(() => {
    return accordionA.value ? 'grid-rows-[1fr] max-h-56' : 'grid-rows-[0fr] max-h-0';
})

const toggleAccordionB = () => {
    accordionA.value = false;
    accordionC.value = false;

    accordionB.value = !accordionB.value;
}

const accordionBClass = computed(() => {
    return accordionB.value ? 'grid-rows-[1fr] max-h-56' : 'grid-rows-[0fr] max-h-0';
})

const toggleAccordionC = () => {
    accordionA.value = false;
    accordionB.value = false;

    accordionC.value = !accordionC.value;
}

const accordionCClass = computed(() => {
    return accordionC.value ? 'grid-rows-[1fr] max-h-56' : 'grid-rows-[0fr] max-h-0';
})

const currentYear = computed(() => {
    return new Date().getFullYear();
})

</script>

<style lang="scss" scoped>

.footer-section {
    @apply lg:col-span-2 md:col-span-6 md:pt-0 md:block pt-4 col-span-12 hidden;
}

.footer__menu-link {
    cursor: pointer;
    transition: .3s;

    &:hover {
        color: var(--dull);
    }
}

.newsletter__email {
    @apply py-2 px-4 outline-none text-black;
    font-size: var(--normal-font-size);
    border-radius: 0;
}

.accordion {
    @apply md:hidden border-t border-white mt-4 pt-4 col-span-12;
}

.accordion-title {
    @apply flex items-center;

    i {
        @apply ml-auto;
    }
}

.accordion-answer {
    @apply grid overflow-hidden transition-all duration-500;
}

.footer__subscribe {
    display: flex;
    gap: 16px;
}

.footer__copyright-line {
    width: 100%;
    height: 1px;
    background-color: var(--primary-visible);
}

.footer__copyright-text {
    color: var(--dull);
}

@media only screen and (min-width: 768px) {

}

</style>