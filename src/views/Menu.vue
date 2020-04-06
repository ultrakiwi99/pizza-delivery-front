<template>
    <ContainerRowColumn>
        <ContainerRowColumn class="component-container">
            <Categories :categories="categoriesAndProducts" v-if="categoriesAndProducts"/>
            <div class="centered-content" ref="loading" v-else>
                <span class="spinner"></span>
            </div>
        </ContainerRowColumn>
    </ContainerRowColumn>
</template>

<script>
    import ContainerRowColumn from "@/components/Helpers/ContainerRowColumn";
    import Categories from "@/components/Menu/Categories";

    export default {
        name: "Menu",
        components: {ContainerRowColumn, Categories},
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
    h3 {
        width: 100%;
        height: 100vh;
    }
</style>