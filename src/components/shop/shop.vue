<template>
    <div>
        <app-header></app-header>
        <product-item></product-item>
        <router-link to="/account"><button>Account Settings</button></router-link>
    </div>
</template>
<script>
import Header from '../header.vue'
import ProductItem from './product-item.vue'
import Login from '../account/login.vue'
import Account from '../account/account.vue'
export default {
    components: {
        'app-header': Header,
        'product-item': ProductItem,
        'login': Login,
        'account': Account
    }
}
</script>
<style scoped>
    div {
        width: 90%;
        margin: auto;
    }
    button {
        padding: 10px 12px;
        width: 100%;
        margin: 1.5em auto;
        text-decoration: none;
    }
</style>