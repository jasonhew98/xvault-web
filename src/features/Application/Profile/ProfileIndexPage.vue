<template>
    <div class="w-full h-full overflow-auto flex max-w-full flex-col">
        <main id="page-content" class="w-full flex items-center max-w-full flex-col">
            <div class="container w-full p-4 bg-black-light">
                <div class="flex flex-row gap-12">
                    <div>
                    <AwesomeTextBox
                        :label="messages.labelFirstName()"
                        v-model="profile.firstName">
                    </AwesomeTextBox>
                    </div>
                    <div>
                        <AwesomeTextBox
                            :label="messages.labelLastName()"
                            v-model="profile.lastName">
                        </AwesomeTextBox>
                    </div>
                </div>
                <div>
                    <AwesomeTextBox
                        :label="messages.labelPreferredName()"
                        v-model="profile.preferredName">
                    </AwesomeTextBox>
                </div>
                <div>
                    <AwesomeTextBox
                        :label="messages.labelCurrentSalary()"
                        v-model="profile.currentSalary">
                    </AwesomeTextBox>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import AwesomeTextBox from '@/components/AwesomeTextBox.vue';
import AwesomeDropDown from '@/components/AwesomeDropDown.vue';

import { reactive, inject } from 'vue';

import { usePageStateStore } from '@/infrastructure/stores/pageState.js';

const messages = inject('messages');

const pageStateStore = usePageStateStore();

const profile = reactive({
    firstName: null,
    lastName: null,
    preferredName: null,
    currentSalary: null
});

const userRepository = inject('userRepository');

const getProfile = async () => {
    try {
        const [error, result] = await userRepository.getMyProfile();
        transactions.value = result;
    } catch (err) {
        pageStateStore.setError({});
    }
};

</script>