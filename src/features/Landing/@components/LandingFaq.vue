<template>
    <div class="container md:pb-4 mx-auto pt-14 px-6">
        <div class="grid lg:grid-cols-12 grid-cols-1 md:gap-x-20 md:gap-y-16">
            <div class="lg:col-span-12 md:text-center md:col-span-7 col-span-12 pb-4">
                <h1 class="landing__title">Frequently Asked Questions</h1>
                <div class="landing__caption">Check our website's FAQs for quick answers about our services.</div>
            </div>
        </div>
            <!-- Accordion -->
            <transition-group name="accordion" tag="div" >
            <div class="lg:col-span-12 md:col-span-7 col-span-12 border-t border-white-100 mt-4 pt-4" v-for="faq in faqs.value" :key="faq.id" :class="faq.id == faqs.value.length ? 'last-faq' : ''">
                <div class="faq-title" @click="toggleAccordion(faq.id)">
                    <h5 class="tracking-wide font-semibold">{{ faq.question }}</h5>
                    <i v-if="!faq.active" class='bx bx-plus'></i>
                    <i v-else class='bx bx-minus' ></i>
                </div>
                <div class="faq-answer" :class="faq.active ? 'grid-rows-[1fr] max-h-64' : 'grid-rows-[0fr] max-h-0'">
                    <ul class="list-none mt-6 space-y-2">
                        <li>
                            <div class="footer__menu-link">
                                {{ faq.answer }}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';

const faqs = reactive({
    value: [{
        id: 1,
        active: false,
        question: "How to get started?",
        answer: "To get started, simply sign up for an account and start tracking your daily expenses. Our user-friendly interface makes it easy to input and categorize your expenses."
    },
    {
        id: 2,
        active: false,
        question: "How secure is my data?",
        answer: "We take the security of your data seriously. Our website uses industry-standard encryption protocols to ensure that your personal and financial information is protected."
    },
    {
        id: 3,
        active: false,
        question: "Can I access my data from multiple devices?",
        answer: "Yes, you can access your data from any device with an internet connection. Simply log in to your account and all your information will be synced across devices."
    },
    {
        id: 4,
        active: false,
        question: "How can I track my expenses?",
        answer: "Tracking your expenses is easy. Use our intuitive interface to enter your expenses, assign categories, and view detailed reports to gain insights into your spending habits."
    },
    {
        id: 5,
        active: false,
        question: "What if I need help?",
        answer: "If you need any assistance or have further questions, please don't hesitate to contact our support team. We're here to help!"
    }]
});

const toggleAccordion = (id) => {
    faqs.value = faqs.value.map((faq) => ({
        ...faq,
        active: faq.id === id ? !faq.active : false
    }));
};

</script>

<style lang="scss" scoped>

.faq {
    @apply lg:col-span-10 md:col-span-10 border-t border-white-100 mt-4 pt-4 col-span-1;
}

.last-faq {
    @apply border-b pb-4;
}

.faq-title {
    @apply flex items-center;
    cursor: pointer;

    i {
        @apply ml-auto;
    }
}

.faq-answer {
    @apply grid overflow-hidden transition-all duration-500;
}

</style>