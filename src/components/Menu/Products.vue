<template>
    <div class="container">
        <div class="row">
            <section :key="product.name" class="col-sm-12 col-md-6 col-lg-4" v-for="product in products">
                <div class="card fluid">
                    <img :alt="product.name" class="section media" src="assets/pizza.jpeg" width="100%">
                    <div class="section">
                        {{ product.name }}
                    </div>
                    <div class="section">
                        <button @click="toCart(product)" class="primary">
                            <span class="icon-cart inverse"></span> Add
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Products",
        props: {
            products: Array
        },
        methods: {
            toCart(product) {
                this.$store.commit('cartAdd', product);
                this.$router.push('/cart');
            }
        }
    }
</script>

<style scoped>

</style>