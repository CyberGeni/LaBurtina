<template>
    <div>
        <app-header></app-header>
        <product-item></product-item>
    </div>
</template>
<script>
import Header from '../Header.vue'
import ProductItem from './product-item.vue'
export default {
    components: {
        'app-header': Header,
        'product-item': ProductItem
    }
}
</script>
<style scoped>
    div {
        width: 90%;
        margin: auto;
    }
</style>