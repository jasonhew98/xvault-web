<template>
  <div class="w-full h-full overflow-auto flex max-w-full flex-col">
    <main id="page-content" class="w-full h-full flex items-center max-w-full flex-col">
      <div class="container w-full h-full mb-8 flex flex-col gap-8 p-4 border border-solid border-gray-dark rounded-md">
        <div class="flex flex-row gap-12">
          <div>
            <AwesomeTextBox :label="messages.labelFirstName()" v-model="profile.firstName">
            </AwesomeTextBox>
          </div>
          <div>
            <AwesomeTextBox :label="messages.labelLastName()" v-model="profile.lastName">
            </AwesomeTextBox>
          </div>
        </div>
        <div>
          <AwesomeTextBox :label="messages.labelPreferredName()" v-model="profile.preferredName">
          </AwesomeTextBox>
        </div>
        <div>
          <AwesomeTextBox :label="messages.labelCurrentSalary()" v-model="profile.currentSalary">
          </AwesomeTextBox>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import AwesomeTextBox from '@/components/AwesomeTextBox.vue';
import AwesomeDropDown from '@/components/AwesomeDropDown.vue';

import { reactive, inject, onBeforeMount } from 'vue';

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
    if (error) {
      pageStateStore.setError({})
    }
    setProfile(result);
  } catch (err) {
    pageStateStore.setError({
      body: err.message
    });
  }
};

function setProfile(data) {
  profile.firstName = data.firstName;
  profile.lastName = data.lastName;
  profile.preferredName = data.preferredName;
  profile.currentSalary = data.currentSalary;
}

onBeforeMount(async () => {
  await getProfile();
});

</script>