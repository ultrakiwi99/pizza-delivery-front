<template>
    <div style="text-align: left">
        <ul style="margin-left: 1rem; list-style: none">
            <li :key="idx" style="margin-bottom: 1rem" v-for="(item, idx) in cart">
                <div class="row cart-item-row">
                    <div class="col-sm-4" style="text-align: left">
                        <strong>{{ item.name }}</strong>
                    </div>
                    <div class="col-sm-4" style="text-align: center">
                        <div v-if="shouldRemove">
                            <strong @click="$store.commit('cartDelOne', item)" class="btn-qty">-</strong>
                            &nbsp;{{ item.qty }}&nbsp;
                            <strong @click="$store.commit('cartAddOne', item)" class="btn-qty">+</strong>
                        </div>
                        <div v-else>
                            {{ item.qty }} x {{ item.priceUsd }}&dollar; ({{ item.priceEur }}&euro;)

                        </div>
                    </div>
                    <div @click="remove(item)" class="col-sm-4" style="cursor: pointer; text-align: right">
                        {{ item.totalUsd }}&dollar; ({{ item.totalEur }}&euro;)
                        <span style="color: darkred" v-if="shouldRemove">&times;</span>
                    </div>
                </div>
            </li>
        </ul>
        <h4 style="margin-top: 2rem; text-align: center">
            Total: {{ cartTotal.usd }}&dollar; ({{cartTotal.euro}}&euro;)
        </h4>
    </div>
</template>

<script>
    export default {
        name: "CartView",
        props: {
            shouldRemove: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            remove(item) {
                if (this.shouldRemove) {
                    this.$store.commit('remove', item);
                }
            }
        },
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
    .btn-qty {
        padding: 10px;
        cursor: pointer;
        margin: 0 auto;
        border-radius: 0.5rem;
    }

    .btn-qty:hover {
        background: lightgray;
    }
</style>