<template>
    <ContainerRowColumn>
        <CartIcon/>
        <ContainerRowColumn class="component-container">
            <Categories :categories="categoriesAndProducts"/>
        </ContainerRowColumn>
    </ContainerRowColumn>
</template>

<script>
    import ContainerRowColumn from "@/components/Helpers/ContainerRowColumn";
    import Categories from "@/components/Menu/Categories";
    import CartIcon from "@/components/Menu/CartIcon";

    export default {
        name: "Menu",
        components: {CartIcon, ContainerRowColumn, Categories},
        mounted() {
            this.$api
                .getCategoriesAndProducts()
                .then(result => this.categoriesAndProducts = result);
        },
        data: () => ({
            categoriesAndProducts: null
        })
    }
</script>

<style scoped>

</style>