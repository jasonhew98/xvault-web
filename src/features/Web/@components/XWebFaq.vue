<template>
  <div class="container md:pb-4 mx-auto pt-14 px-6">
    <div class="grid lg:grid-cols-12 grid-cols-1 md:gap-x-20 md:gap-y-16 md:pb-16 pb-4">
      <div class="lg:col-span-12 md:text-center md:col-span-7 col-span-12">
        <h1 class="section__title">Frequently Asked Questions</h1>
      </div>
    </div>
    <!-- Accordion -->
    <div class="flex justify-center align-items-center flex-col gap-4 2xl:px-80 md:px-8">
      <div class="px-2 py-4 transition-colors duration-150 ease-in-out hover:bg-gray-dark"
        v-for="faq in faqs.value"
        :key="faq.id"
        :class="{
          'pb-4': faq.id == faqs.value.length,
          'bg-gray-dark': faq.active,
        }
        ">
        <div class="faq-title" @click="toggleAccordion(faq.id)">
          <h5 class="tracking-wide font-semibold">{{ faq.question }}</h5>
          <i v-if="!faq.active" class='bx bx-plus'></i>
          <i v-else class='bx bx-minus'></i>
        </div>
        <div class="faq-answer" :class="faq.active ? 'max-h-64' : 'max-h-0'">
          <ul class="list-none mt-6 space-y-2">
            <li>
              <div class="footer__menu-link">
                {{ faq.answer }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

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
.faq-title {
  @apply flex items-center select-none;
  cursor: pointer;

  i {
    @apply ml-auto;
  }
}

.faq-answer {
  @apply grid overflow-hidden;
}
</style>