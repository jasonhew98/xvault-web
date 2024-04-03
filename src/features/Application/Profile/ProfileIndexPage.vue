<template>
    <div class="w-full h-full overflow-auto flex max-w-full flex-col">
        <main id="page-content" class="w-full flex items-center max-w-full flex-col">
            <div class="container w-full p-4 bg-black-light">
                <div class="flex flex-row gap-12">
                    <div>
                    <AwesomeTextBox label="First Name" v-model="profile.firstName"></AwesomeTextBox>
                    </div>
                    <div>
                        <AwesomeTextBox label="Last Name" v-model="profile.lastName"></AwesomeTextBox>
                    </div>
                </div>
                <div>
                    <AwesomeTextBox label="Preferred Name" v-model="profile.preferredName"></AwesomeTextBox>
                </div>
                <div>
                    <AwesomeTextBox label="Current Salary" v-model="profile.currentSalary"></AwesomeTextBox>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import AwesomeTextBox from '@/components/AwesomeTextBox.vue';
import AwesomeDropDown from '@/components/AwesomeDropDown.vue';
import { ref, reactive, computed, getCurrentInstance, inject } from 'vue';

const profile = reactive({
    firstName: "",
    lastName: "",
    preferredName: "Nyann",
    currentSalary: 7800
});

</script>