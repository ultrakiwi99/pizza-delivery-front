import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from "@/views/Cart";
import Checkout from "@/views/Checkout";
import Menu from "@/views/Menu";
import Result from "@/views/Result";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Menu',
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
    {
        path: '/result',
        name: 'Result',
        component: Result
    }
];

const router = new VueRouter({
    routes
});

export default router;
