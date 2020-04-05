<template>
    <div>
        <div :key="idx" v-for="(category, idx) in categories">
            <h3>{{ category.name }}</h3>
            <Products :products="category.products"/>
        </div>
    </div>
</template>

<script>
    import Products from "@/components/Menu/Products";

    export default {
        name: "MenuFromServer",
        components: {Products},
        props: {
            categories: Array
        }
    }
</script>

<style scoped>

</style>