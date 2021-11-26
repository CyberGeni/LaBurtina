<template>
    <div>
        <guest-header></guest-header>
        <h1>Log into your account</h1>
        <form action="" method="get" class="space-y-12">
            <input type="email" placeholder="Email or Username" required>
            <input type="password" placeholder="Password" required>
            <small>Forgot Password?</small>
            <input type="submit" value="LOGIN" class="px-10 py-3">
            <p>Don't have an account? <router-link to='/signup'>Create an account</router-link></p>
        </form>
    </div>
</template>
<script>
import guestHeader from '../guest-header.vue'
export default {
    components: {
        'guest-header': guestHeader
    }
}
</script>
<style scoped>
    div {
        display: flex;
        width: 90%;
        max-width: 500px;
        margin: 1em auto;     
        flex-wrap: wrap;
    }
    input {
        padding: 8px;
        width: 100%;
    }
    form > * + * {
          margin-top: 1rem;
    }
    small {
        width: 100%;
        text-align: right;
        color: orangered;
    }
    h1 {
        margin: 1em 0;
    }
    p {
        width: 100%;
        text-align: center;
    }
    a {
        color: orangered;
    }
    a:hover {
        text-decoration: underline;
    }
</style>