<template>
    <div class="component-container">
        <h2>Checkout</h2>
        <h3>Order details</h3>
        <CartView :should-remove="false"/>
        <CustomerForm/>
    </div>
</template>

<script>
    import CartView from "@/components/Cart/CartView";
    import CustomerForm from "@/components/Checkout/CustomerForm";

    export default {
        name: "Checkout",
        components: {CustomerForm, CartView},
        computed: {
            cart() {
                return this.$store.getters.cart;
            }
        }
    }
</script>

<style scoped>

</style>