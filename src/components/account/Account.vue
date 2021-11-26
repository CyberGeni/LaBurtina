<template>
    <div class="account-options">
        <div class="buttons">
            <button @click="login = true, signup = false">Login</button>
            <button @click="signup = true, login = false">Sign Up</button>
        </div>
        <login v-show="login"></login>
        <sign-up v-show="signup"></sign-up>
   </div>
</template>
<script>
import Signup from './signup.vue'
import Login from './login.vue'
import GuestHeader from '../guest-header.vue'

export default {
    components: {
        'login': Login,
        'sign-up': Signup,
        'guest-header': GuestHeader
    },
    data() {
        return {
            login: true,
            signup: false  
        }
    },
    computed: {
        
    },
}
</script>
<style scoped>
    .account-options {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        width: 90%;
        max-width: 500px;
        overflow-y: hidden;
        margin: auto;
    }
    .buttons {
        display: flex;
        width: 90%;     
    }
    button {
        display: flex;
        width: 100%;
        padding: 12px;
        height: max-content;
    }
</style>