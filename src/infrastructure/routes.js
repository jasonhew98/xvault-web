import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/NotFound.vue'

import AuthIndexPage from '@/features/Auth/AuthIndexPage.vue'
import LandingIndexPage from '@/features/Landing/LandingIndexPage.vue'
import TransactionIndexPage from '@/features/Transaction/TransactionIndexPage.vue'

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
        name: "TransactionIndexPage",
        component: TransactionIndexPage,
        meta: {
            requiresAuth: true
        }
    },
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes : routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('jwt');
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