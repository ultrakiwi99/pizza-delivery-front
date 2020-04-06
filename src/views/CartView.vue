<template>
    <div style="text-align: left">
        <ul style="margin-left: 1rem; list-style: none">
            <li :key="idx" style="margin-bottom: 1rem" v-for="(item, idx) in cart">
                <div class="row cart-item-row">
                    <div class="col-sm-6" style="text-align: left">
                        <strong>{{ item.name }}</strong>
                    </div>
                    <div @click="remove(item)" class="col-sm-6" style="cursor: pointer; text-align: right">
                        {{ item.priceUsd }}&dollar; ({{ item.priceEur }}&euro;)
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

</style>