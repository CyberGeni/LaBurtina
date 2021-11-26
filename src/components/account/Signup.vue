<template>
    <div>
    <!--    <guest-header></guest-header>  -->
        <h1>Create an account</h1>
        <form action="" method="get" class="grid">
            <input type="text" placeholder="Full Name">
            <input type="email" placeholder="Enter your Email">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Repeat your Password">
            
            <input type="submit" value="REGISTER">
            <p>Already have an account? <router-link to='/login'>Log In</router-link></p>
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
        margin: auto;
        margin: 5em auto;   
        flex-wrap: wrap;
    }
    input {
        padding: 10px 12px;
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