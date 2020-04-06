<template>
    <ContainerRowColumn>
        <CartIcon/>
        <ContainerRowColumn class="component-container">
            <Categories :categories="categoriesAndProducts"/>
            <Categories :categories="categoriesAndProducts" v-if="categoriesAndProducts"/>
            <div class="centered-content">
                <h3 ref="loading">
                    <span class="spinner"></span>
                </h3>
            </div>
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
                .then(result => {
                    if (result instanceof Error) {
                        throw result;
                    }
                    this.categoriesAndProducts = result
                })
                .catch(() => {
                    this.$refs['loading'].textContent = "Server is down. Cannot load menu."
                });
        },
        data: () => ({
            categoriesAndProducts: null
        })
    }
</script>

<style scoped>

</style>