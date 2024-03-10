import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/NotFound.vue'

import LandingIndexPage from '@/features/Web/Landing/LandingIndexPage.vue'
import AuthIndexPage from '@/features/Web/Auth/AuthIndexPage.vue'

import ApplicationIndexPage from '@/features/Application/ApplicationIndexPage.vue'
import TransactionIndexPage from '@/features/Application/Transaction/TransactionIndexPage.vue'
import WalletIndexPage from '@/features/Application/Wallet/WalletIndexPage.vue'
import SettingsIndexPage from '@/features/Application/Settings/SettingsIndexPage.vue'

const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound
    },
    {
        path: "/",
        name: "LandingIndexPage",
        component: LandingIndexPage,
    },
    {
        path: "/auth",
        name: "AuthIndexPage",
        component: AuthIndexPage
    },
    {
        path: "/app",
        name: "ApplicationIndexPage",
        component: ApplicationIndexPage,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: "",
                component: TransactionIndexPage,
                name: "TransactionIndexPage"
            },
            {
                path: "",
                component: WalletIndexPage,
                name: "WalletIndexPage"
            },
            {
                path: "",
                component: SettingsIndexPage,
                name: "SettingsIndexPage"
            }
        ]
    },
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes : routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const isAuthenticated = hasValidCredentials();

        if (isAuthenticated) {
            next();
        } else {
            next('/auth');
        }
    } else {
        next();
    }
});

const hasValidCredentials = () => {
    const jwtToken = localStorage.getItem('jwtToken');
    const jwtExpiry = localStorage.getItem('jwtExpiry');

    if (!jwtToken || !jwtExpiry)
        return false;

    const now = new Date();
    const expiryDateTime = new Date(jwtExpiry);

    if (now > expiryDateTime) {
        localStorage.setItem('jwtToken', null);
        localStorage.setItem('jwtExpiry', null);
        return false;
    }

    return true;
}

export default router;