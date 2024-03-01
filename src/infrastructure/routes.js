import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/NotFound.vue'

import AuthIndexPage from '@/features/Auth/AuthIndexPage.vue'
import LandingIndexPage from '@/features/Landing/LandingIndexPage.vue'
import ApplicationIndexPage from '@/features/Application/ApplicationIndexPage.vue'
import TransactionIndexPage from '@/features/Transaction/TransactionIndexPage.vue'
import WalletIndexPage from '@/features/Wallet/WalletIndexPage.vue'
import SettingsIndexPage from '@/features/Settings/SettingsIndexPage.vue'

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
        const token = localStorage.getItem('jwtToken');
        if (token) {
            next();
        } else {
            next('/auth');
        }
    } else {
        next();
    }
});

export default router;