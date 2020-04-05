<template>
    <div class="component-container">
        <h3>Your order details:</h3>
            <CartView :cart="cart"/>
        <hr>
        <div style="margin-top: 2rem;">
            <router-link class="button primary" to="/">Menu</router-link>
            <router-link class="button secondary" to="/checkout">Checkout</router-link>
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
