<template>
    <main>
        <product-item></product-item>
        <router-link to="/account"><button>Account Settings</button></router-link>
    </main>
</template>
<script>

import ProductItem from './product-item.vue'

export default {
    components: {
        'product-item': ProductItem,
    }
}
</script>
<style scoped>
    main {
        width: 100%;
        margin: auto;
        margin-top: 100px;
    }
    button {
        padding: 10px 12px;
        width: 100%;
        margin: 1.5em auto;
        text-decoration: none;
    }
</style>