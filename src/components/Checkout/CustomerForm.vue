<template>
    <form @submit.prevent="makeOrder">
        <fieldset>
            <legend>How you want to get your order?</legend>
            <div class="button-group">
                <button type="button">Pickup</button>
                <button type="button">Delivery</button>
            </div>
            <div style="color: lightslategrey">
                <small>Delivery will add 8&dollar;(10&euro;) to your total order price.</small>
            </div>
        </fieldset>
        <fieldset>
            <legend>How can we get in touch with you?</legend>
            <input placeholder="Your name" required type="text">
            <input placeholder="Your phone" required type="tel">
            <input placeholder="Your email" type="email">
        </fieldset>

        <fieldset>
            <legend>Anything else to add?</legend>
            <textarea placeholder="comments" style="width: 100%"></textarea>
        </fieldset>
        <router-link class="button secondary" to="/cart">
            <span class="icon-cart inverse"></span> To cart
        </router-link>
        <button class="primary" type="submit">
            <span class="icon-credit inverse"></span> Make order
        </button>
    </form>
</template>

<script>
    export default {
        name: "CustomerForm",
        methods: {
            makeOrder() {
                this.$router.push({name: 'Result'})
            }
        }
    }
</script>

<style scoped>

</style>