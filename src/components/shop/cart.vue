<template>
    <main>
        <cart-table></cart-table>
        <cart-summary></cart-summary>
    </main>
</template>
<script>

import CartSummary from './cart-summary.vue'
import CartTable from './cart-table.vue'
export default {
    components: {
        'cart-summary': CartSummary,
        'cart-table': CartTable
    }
}
</script>
<style scoped>
main {
    margin-top: 100px;
    overflow-x: hidden;
}
</style>