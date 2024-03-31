<template>
    <aside
        class="sidebar lg:relative absolute lg:translate-x-0 -translate-x-full duration-300 ease-linear bg-black"
        ref="target" :class="{
            'translate-x-0': appSidebarStore.isAppSidebarOpen,
            '-translate-x-full': !appSidebarStore.isAppSidebarOpen
        }">
        <div class="h-full w-full flex flex-col border-r border-gray-dark">
            <div class="mb-20 mr-4 flex flex-col items-center text-center">
                <div class="mb-3 rounded-full bg-black-light p-1.5">
                    <svg width="30" height="35" viewBox="0 0 515 595"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="515" height="595" rx="30" class="fill-black-light"></rect>
                        <path d="M368.998 211.716H208.787V463.918H368.998V211.716Z" stroke="black" stroke-width="6"
                            class="fill-green"></path>
                        <path
                            d="M208.787 461.998L315.071 395.199L315.269 347.153L368.57 384.987L368.998 467.508L208.839 504.508L208.787 461.998Z"
                            stroke="black" stroke-width="6" class="fill-green"></path>
                        <path
                            d="M125.429 120.649H290.429L308.087 228.649H345.429V303.649L312.301 327.541L310.363 375.396L159.13 453.349L105.429 452.349V146.902L125.429 120.649Z"
                            stroke="black" stroke-width="6" class="fill-black"></path>
                        <path
                            d="M307.737 221.518H264.722L270.458 298.945L153.839 339.092L89.7945 328.578V351.519L153.839 374.46V406.961L131.854 432.77L111.78 411.74L89.7945 427.034L85.0151 478.652H142.368L314.429 389.755V345.784L299.134 320.93L307.737 221.518Z"
                            stroke="black" stroke-width="6" class="fill-white"></path>
                        <path
                            d="M133.023 110.313L262.38 90.4921L377.517 140.566L422.031 239.68L413.644 304.175L422.031 365.179L439.353 360.66L432.003 402.082L409.981 420.157H373.078L336.175 393.044L295.311 338.136L283.84 239.68L217.522 226.108L175.825 199.532H126.118L96.5111 194.753L75.6472 140.566L96.5111 153.084L133.023 110.313Z"
                            stroke="black" stroke-width="6" class="fill-white"></path>
                    </svg>
                </div>
                <div class="flex flex-col justify-center">
                    <div class="text-sm font-medium">Nyann</div>
                </div>
            </div>

            <div class="sidebar__menu">
                <div v-for="menuItem in topMenuItems"
                    :key="menuItem.id">
                    <div class="sidebar__description">
                        <div class="inline-flex items-center cursor-pointer text-gray-light hover:text-white transition-colors duration-200 ease-in-out"
                            @click="setSelectedMenuItem(menuItem.id)">
                            <div class="mr-4 flex h-9 w-9 items-center justify-center rounded-md bg-black-light"
                                :class="{ 'bg-green': isCurrentSelected(menuItem.id) }">
                                <i :class="[{ 'text-green-darker': isCurrentSelected(menuItem.id) }, menuItem.iconClass]"></i>
                            </div>
                            <span class="text-base font-medium"
                                :class="{ 'text-white': isCurrentSelected(menuItem.id) }">
                                {{ menuItem.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-1"></div>

            <div class="sidebar__menu">
                <div v-for="menuItem in bottomMenuItems"
                    :key="menuItem.id">
                    <div class="sidebar__description">
                        <div class="inline-flex items-center cursor-pointer text-gray-light hover:text-white transition-colors duration-200 ease-in-out"
                            @click="setSelectedMenuItem(menuItem.id)">
                            <div class="mr-4 flex h-9 w-9 items-center justify-center rounded-md bg-black-light"
                                :class="{ 'bg-green': isCurrentSelected(menuItem.id) }">
                                <i :class="[{ 'text-green-darker': isCurrentSelected(menuItem.id) }, menuItem.iconClass]"></i>
                            </div>
                            <span class="text-base font-medium"
                                :class="{ 'text-white': isCurrentSelected(menuItem.id) }">
                                {{ menuItem.name }}
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="sidebar__description">
                        <div class="inline-flex items-center cursor-pointer text-gray-light hover:text-white transition-colors duration-200 ease-in-out"
                            @click="logOut">
                            <div class="mr-4 flex h-9 w-9 items-center justify-center">
                                <i class='bx bx-log-out'></i>
                            </div>
                            <span class="text-base font-medium">
                                Exit
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>
<script setup>
import { ref, reactive, computed, watch, onMounted, getCurrentInstance } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useAppSidebarStore } from '@/infrastructure/stores/appSidebar.js';

const appSidebarStore = useAppSidebarStore();

const app = getCurrentInstance();
const MENUPAGES = {
    dashboard: "TransactionIndexPage",
    wallet: "WalletIndexPage",
    settings: "SettingsIndexPage",
    home: "LandingIndexPage"
};

// region ref
const selectedMenuItemId = ref();
const isExpanded = ref(true);
const target = ref(null);

// region computed
const router = computed(() => {
    return app.appContext.config.globalProperties.$router;
});

const topMenuItems = computed(() => {
    return [
        {
            id: "dashboard",
            name: "Dashboard",
            iconClass: "bx bx-grid-alt"
        },
        {
            id: "wallet",
            name: "Wallet",
            iconClass: "bx bx-wallet-alt"
        },
    ];
});

const bottomMenuItems = computed(() => {
    return [
        {
            id: "settings",
            name: "Settings",
            iconClass: "bx bx-cog"
        }
    ];
});

const isCurrentSelected = computed(() => {
    return (id) => {
        return id == selectedMenuItemId.value;
    };
});

const setSelectedMenuItem = (menuItemId) => {
    selectedMenuItemId.value = menuItemId;
};

const logOut = () => {
    localStorage.setItem("jwtToken", "");
    router.value.replace({
        name: MENUPAGES.home
    });
};

const goToPage = () => {
    router.value.replace({
        name: MENUPAGES[selectedMenuItemId.value]
    });
}

// region watch
watch(selectedMenuItemId, async () => {
    goToPage();
});

setSelectedMenuItem("dashboard");

onMounted(() => {
    let menuPreference = localStorage.getItem("isMenuExpanded");
    isExpanded.value = menuPreference == null ? true : menuPreference;
    //goToPage();
});

onClickOutside(target, () => {
    appSidebarStore.isAppSidebarOpen = false;
});

</script>

<style lang="scss" scoped>
.sidebar {
    @apply w-[240px] h-full min-h-screen py-4 pl-4 overflow-hidden text-white;

    .sidebar__logo-section {
        height: 48px;
        display: flex;
        justify-content: center;
    }

    .sidebar__logo {
        display: flex;
        align-items: center;
        column-gap: .25rem;

        i {
            font-size: 2rem;
            font-weight: initial;
        }

        img {
            width: 2rem;
        }
    }

    .sidebar__description {
        text-decoration: none;
        padding: 0.5rem 1rem;
        margin-top: 1rem;
    }

    .sidebar__icons {
        display: flex;
        font-size: 1.25rem;
        color: var(--font-color);
        margin-right: .5rem;
    }

    .menu-toggle-wrap {
        display: flex;
        margin-left: auto;

        .menu__toggle {
            display: flex;
            align-self: center;
        }
    }

    @media (max-width: 1024px) {
        z-index: 99;
    }
}
</style>