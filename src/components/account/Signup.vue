<template>
    <div>
        <guest-header></guest-header>
        <h1>Create an account</h1>
        <form action="" method="get" class="grid">
            <input type="text" placeholder="Full Name">
            <input type="email" placeholder="Enter your Email">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Repeat your Password">
            
            <input type="button" value="REGISTER">
            <p>Already have an account? <router-link to='/login'>Log In</router-link></p>
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
        padding: 10px 12px;
        width: 93%;
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