<template>
    <div>
        <guest-header></guest-header>
        <h1>Log into your account</h1>
        <form action="" method="get" class="space-y-12">
            <input type="email" placeholder="Email or Username">
            <input type="password" placeholder="Password">
            <small>Forgot Password?</small>
            <input type="button" value="LOGIN" class="px-10 py-3">
            <p>Don't have an account? <router-link to='/signup'>Create an account</router-link></p>
        </form>
    </div>
</template>
<script>
import GuestHeader from '../guest-header.vue'
export default {
    components: {
        'guest-header': GuestHeader
    }
}
</script>
<style scoped>
    div {
        display: flex;
        width: 90%;
        max-width: 500px;
        margin: auto;
        flex-wrap: wrap;
        overflow: hidden;
    }
    input {
        padding: 10px;
        width: 94%;
    }
    form > * + * {
          margin-top: 1rem;
    }
    small {
        width: 100%;
        text-align: right;
        color: orangered;
    }
    p {
        width: 100%;
        text-align: center;
    }
</style>