<template>
    <div class="component-container">
        <h3>Your order details:</h3>
            <CartView/>
        <hr>
        <div style="margin-top: 2rem;">
            <router-link class="button primary" to="/">
                <span class="icon-edit inverse"></span> Menu
            </router-link>
            <router-link class="button secondary" to="/checkout">
                <span class="icon-credit inverse"></span> Checkout
            </router-link>
        </div>
    </div>
</template>

<script>
    import CartView from "@/views/CartView";

    export default {
        name: "Cart",
        components: {CartView},
    }
</script>
