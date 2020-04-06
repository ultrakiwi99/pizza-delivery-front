<template>
    <ContainerRowColumn class="centered-content">
        <h5>
            Thank you for your order. <br>
            We will get in touch with you anytime soon!
        </h5>
        <router-link class="button primary" to="/">
            <span class="icon-cart inverse"></span> To menu
        </router-link>
    </ContainerRowColumn>
</template>

<script>
    import ContainerRowColumn from "@/components/Helpers/ContainerRowColumn";

    export default {
        name: "Result",
        components: {ContainerRowColumn}
    }
</script>

<style scoped>

</style>