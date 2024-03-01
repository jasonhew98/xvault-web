<template>
    <div class="faq__container">
        <div class="faq__title">Frequently Asked Questions</div>
        <div class="faq" v-for="faq in faqs" :key="faq.id" :id="faq.id">
            <div class="faq__question"><h3>{{ faq.question }}</h3></div>
            <div class="faq__answer"><p>{{ faq.answer }}</p></div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from 'vue';
const faqs = computed(() => {
    return [
        {
            id: "faq-1",
            question: "How to get started?",
            answer: "To get started, simply sign up for an account and start tracking your daily expenses. Our user-friendly interface makes it easy to input and categorize your expenses."
        },
        {
            id: "faq-2",
            question: "How secure is my data?",
            answer: "We take the security of your data seriously. Our website uses industry-standard encryption protocols to ensure that your personal and financial information is protected."
        },
        {
            id: "faq-3",
            question: "Can I access my data from multiple devices?",
            answer: "Yes, you can access your data from any device with an internet connection. Simply log in to your account and all your information will be synced across devices."
        },
        {
            id: "faq-4",
            question: "How can I track my expenses?",
            answer: "Tracking your expenses is easy. Use our intuitive interface to enter your expenses, assign categories, and view detailed reports to gain insights into your spending habits."
        },
        {
            id: "faq-5",
            question: "What if I need help?",
            answer: "If you need any assistance or have further questions, please don't hesitate to contact our support team. We're here to help!"
        }
    ]
});

const onToggle = (faqId) => {
    let faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq) => {
        faq.classList.remove("faq--active");
    })

    const element = document.getElementById(faqId);
    if (!element) return;
    element.classList.add("faq--active");
};

onMounted(() => {
    let faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq) => {
        faq.onclick = () => {
            var otherFaqs = Array.from(faqs).filter(x => x != faq);
            otherFaqs.forEach((otherFaq) => {
                otherFaq.classList.remove("faq--active");
            })
            faq.classList.toggle("faq--active");
        }
    })
})

</script>

<style lang="scss" scoped>

.faq__container {
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    max-width: 1248px;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.faq__title {
    font-size: var(--h1-font-size);
    text-align: center;
    margin-bottom: 24px;
}

.faq {
    width: 100%;
    max-width: 700px;
    padding: 2rem;
    cursor: pointer;
}

.faq__answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height .4s ease;

    p {
        padding-top: 1rem;
    }
}

.faq--active {
    background-color: var(--button-color);
    
    .faq__answer {
        max-height: 300px;
    }
}

.faq:hover {
    background-color: var(--button-color);
}

@media only screen and (min-width: 768px) {
    .faq {
        padding: 16px 24px;
        margin-bottom: 16px;
    }

    .faq__title {
        margin-bottom: 64px;
    }
}

@media only screen and (max-width: 576px) {
}

@media only screen and (max-width: 350px) {
}

</style>