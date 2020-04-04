import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from "@/views/Cart";
import Checkout from "@/views/Checkout";
import Menu from "@/views/Menu";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Menu
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
];

const router = new VueRouter({
    routes
});

export default router;
