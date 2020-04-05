<template>
    <ContainerRowColumn>
        <CartIcon/>
        <Categories :categories="categories"/>
        <ProductCard/>
    </ContainerRowColumn>
</template>

<script>
    import ContainerRowColumn from "@/components/Helpers/ContainerRowColumn";
    import Categories from "@/components/Menu/Categories";
    import ProductCard from "@/components/Menu/ProductCard";
    import CartIcon from "@/components/Menu/CartIcon";

    export default {
        name: "Menu",
        components: {CartIcon, ProductCard, ContainerRowColumn, Categories},
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