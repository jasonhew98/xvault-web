import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/NotFound.vue'

import LandingIndexPage from '@/features/Landing/LandingIndexPage.vue'

const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound 
    },
    {
        path: "/",
        name: "LandingIndexPage",
        component: LandingIndexPage 
    },
]

const router = createRouter({
    history : createWebHistory(),
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