<template>
    <div style="max-width: 780px; margin: 0 auto">
        <h3>Your order details:</h3>
        <div style="text-align: left">
            <ul style="margin-left: 1rem; list-style: none">
                <li :key="idx" style="margin-bottom: 1rem" v-for="(item, idx) in cart">
                    <div class="row cart-item-row">
                        <div class="col-sm-7" style="text-align: left">
                            <strong>{{ item.name }}</strong>
                        </div>
                        <div @click="$store.commit('remove', item)" class="col-sm-5" style="cursor: pointer">
                            {{ item.priceUsd }}&dollar; ({{ item.priceEur }}&euro;)
                            <span style="color: darkred">&times;</span>
                        </div>
                    </div>
                </li>
            </ul>
            <h4 style="margin-top: 2rem; text-align: center">
                Total order: {{ cartTotal.usd }}&dollar; ({{cartTotal.euro}}&euro;)
            </h4>
        </div>
        <hr>
        <div style="margin-top: 2rem;">
            <router-link class="button primary" to="/">Menu</router-link>
            <router-link class="button secondary" to="/checkout">Checkout</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        computed: {
            cart() {
                return this.$store.getters.cart;
            },
            cartTotal() {
                return this.$store.getters.cartTotal;
            }
        }
    }
</script>

<style scoped>
    .qty-controls button {
        margin: 0;
        margin-left: .4rem;
        margin-right: .4rem;
        padding: 2px;
        line-height: 1;
        width: 1.4rem;
        height: 1.4rem;
    }

    .cart-item-row div {
        text-align: center;
    }
</style>