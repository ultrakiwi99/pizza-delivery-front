<template>
    <ContainerRowColumn>
        <Categories :categories="categories"/>

    </ContainerRowColumn>
</template>

<script>
    import ContainerRowColumn from "@/components/Helpers/ContainerRowColumn";
    import Categories from "@/components/Menu/Categories";

    export default {
        name: "Menu",
        components: {ContainerRowColumn, Categories}
    }
</script>

<style scoped>

</style>