<template>
	<aside class="sidebar lg:relative absolute flex flex-col lg:translate-x-0 -translate-x-full duration-300 ease-linear" :class="sidebarMenuClass">
        <div class="sidebar__logo-section">
            <div class="sidebar__logo pointer logo-name" v-show="isExpanded">
                <i class='icon__medium bx bxl-codepen'></i>XVAULT
            </div>

            <div class="menu-toggle-wrap">
                <div class="menu__toggle sidebar__icons pointer" @click="toggleMenu"><i class='bx bx-menu'></i></div>
            </div>
        </div>

		<div class="sidebar__menu">
			<div class="sidebar__button"
                :class="{'sidebar__button--selected' : isCurrentSelected(menuItem.id)}"
                v-for="menuItem in topMenuItems"
                :key="menuItem.id"
                @click="setSelectedMenuItem(menuItem.id)">
                <div class="sidebar__description">
                    <div class="sidebar__icons"><i :class="menuItem.iconClass"></i></div>
                    <div class="sidebar__text">{{ menuItem.name }}</div>
                </div>
			</div>
		</div>

		<div class="flex"></div>
		
		<div class="sidebar__menu">
			<div class="sidebar__button"
                :class="{'sidebar__button--selected' : isCurrentSelected(menuItem.id)}"
                v-for="menuItem in bottomMenuItems"
                :key="menuItem.id"
                @click="setSelectedMenuItem(menuItem.id)">
				<div class="sidebar__description">
                    <div class="sidebar__icons"><i :class="menuItem.iconClass"></i></div>
                    <div class="sidebar__text">{{ menuItem.name }}</div>
                </div>
			</div>
            <div class="sidebar__button" @click="logOut">
				<div class="sidebar__description">
                    <div class="sidebar__icons"><i class='bx bx-log-out'></i></div>
                    <div class="sidebar__text">Exit</div>
                </div>
			</div>
		</div>
	</aside>
</template>
<script setup>
import { ref, reactive, computed, watch, onMounted, getCurrentInstance } from 'vue';

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

// region computed
const router = computed(() => {
    return app.appContext.config.globalProperties.$router;
});

const sidebarMenuClass = computed(() => {
    return !isExpanded.value ? "sidebar--collapsed" : "";
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

// region methods
const toggleMenu = () => {
    isExpanded.value = !isExpanded.value;
    localStorage.setItem("isMenuExpanded", isExpanded.value)
};

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
})

</script>

<style lang="scss" scoped>
.sidebar {
	background-color: var(--body-color);
	color: var(--clear);
	width: var(--sidebar-width);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

    .sidebar__logo-section {
        height: 48px;
        display: flex;
        justify-content: center;
    }

	.flex {
		flex: 1 1 0%;
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
        display: flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition: .25s;
        padding: 0.5rem 1rem;
        border-radius: 12px;
        margin-top: 1rem;

        &:hover {
            color: var(--body-color);
            background-color: #fff;

            .sidebar__icons {
                color: var(--body-color);
            }
        }
    }

    .sidebar__button--selected {
        .sidebar__description {
            color: var(--body-color);
            background-color: #fff;

            .sidebar__icons {
                color: var(--body-color);
            }
        }
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

	&.sidebar--collapsed {
        width: calc(3rem + 32px);

        .sidebar__description {
            justify-content: center;
            margin-left: auto;
        }

        .menu-toggle-wrap {
            margin-left: 0;
        }

        .sidebar__icons {
            margin-right: auto;
        }

        .sidebar__text {
            display: none;
        }
	}

	@media (max-width: 1024px) {
		z-index: 99;
	}
}
</style>