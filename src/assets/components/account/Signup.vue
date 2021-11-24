<template>
    <div>
        <h1>Create an account</h1>
        <form action="" method="get" class="grid">
            <input type="text" placeholder="Full Name">
            <input type="email" placeholder="Enter your Email">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Repeat your Password">
            <small>Forgot Password?</small>
            <input type="button" value="REGISTER">
            <p>Already have an account? <a href="">Login</a></p>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    form {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        flex-grow: 1;
    }
    input {
        padding: 10px;
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
    p {
        width: 100%;
        text-align: center;
    }
</style>