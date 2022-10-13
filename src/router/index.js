import { createRouter, createWebHistory } from 'vue-router'

const home = () => import("../page/home/Home.vue")
const category = () => import("../page/category/Category.vue")
const cart = () => import("../page/cart/Cart.vue")
const profile = () => import("../page/profile/Profile.vue")


const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: home
    },
    {
        path: "/category",
        component: category
    },
    {
        path: "/cart",
        component: cart
    },
    {
        path: "/profile",
        component: profile
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;