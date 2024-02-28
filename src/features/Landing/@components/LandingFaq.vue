<template>
    <div class="faq__container">
        <div class="faq__title">Frequently Asked Questions</div>
        <div class="faq">
            <div class="faq__question">How to get started?</div>
            <div class="faq__answer">To get started, simply sign up for an account and start tracking your daily expenses. Our user-friendly interface makes it easy to input and categorize your expenses.</div>
        </div>
        <div class="faq">
            <div class="faq__question">How secure is my data?</div>
            <div class="faq__answer">We take the security of your data seriously. Our website uses industry-standard encryption protocols to ensure that your personal and financial information is protected.</div>
        </div>
        <div class="faq">
            <div class="faq__question">Can I access my data from multiple devices?</div>
            <div class="faq__answer">Yes, you can access your data from any device with an internet connection. Simply log in to your account and all your information will be synced across devices.</div>
        </div>
        <div class="faq">
            <div class="faq__question">How can I track my expenses?</div>
            <div class="faq__answer">Tracking your expenses is easy. Use our intuitive interface to enter your expenses, assign categories, and view detailed reports to gain insights into your spending habits.</div>
        </div>
        <div class="faq">
            <div class="faq__question">What if I need help?</div>
            <div class="faq__answer">If you need any assistance or have further questions, please don't hesitate to contact our support team. We're here to help!</div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.faq__container {
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
}

.faq__question {
    margin-bottom: 16px;
}

.faq {
    border-radius: 16px;
}

.faq:hover {
    background-color: var(--button-color);
}

@media only screen and (min-width: 768px) {
    .faq {
        padding: 16px 24px;
        margin-bottom: 16px;
    }
}

@media only screen and (max-width: 576px) {
}

@media only screen and (max-width: 350px) {
}

</style>