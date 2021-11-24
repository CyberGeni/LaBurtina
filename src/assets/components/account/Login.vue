<template>
    <div>
        <h1>Log into your account</h1>
        <form action="" method="get" class="space-y-12">
            <input type="email" placeholder="Email or Username">
            <input type="password" placeholder="Password">
            <small>Forgot Password?</small>
            <input type="button" value="LOGIN" class="px-10 py-3">
            <p>Don't have an account? <a href="">Create an account</a></p>
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
        overflow: hidden;
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