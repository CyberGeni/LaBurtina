<template>
    <main>
        <app-header></app-header>
        <cart-table></cart-table>
        <cart-summary></cart-summary>
    </main>
</template>
<script>

import CartSummary from './cart-summary.vue'
import CartTable from './cart-table.vue'
import Header from '../header.vue'
export default {
    components: {
        'cart-summary': CartSummary,
        'cart-table': CartTable,
        'app-header': Header
    }
}
</script>
<style scoped>
main {
    margin-top: 100px;
    overflow-x: hidden;
}
</style>