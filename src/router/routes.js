import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";

function loadPage (component) {
    // '@' is aliased to src/components
    return () => import(/* webpackChunkName:
    "[request]" */ `@/pages/${component}.vue`)
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: loadPage('Home'),
    },
    {
        path: '/register',
        name: 'Register',
        component: loadPage('Register'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: loadPage('Dashboard'),
        meta: {
            authRequired: true,
        },
    },
];

//modified for Vue x3.0
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const auth = getAuth();
    if (to.matched.some(record => record.meta.authRequired)) {
        if (auth.currentUser != null) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
});

export default router;
