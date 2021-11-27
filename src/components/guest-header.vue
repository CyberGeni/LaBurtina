<template>
    <div>
        <nav>
            <p class="text-2xl text-gray-900"><router-link to="/shop">La<span class="text-orange-500">Burtina</span></router-link> </p>
            <div class="icons">
                <ul>
                    <button><router-link to="/login">Log In</router-link></button>
                </ul>                
            </div>   
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
nav {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        width: 100%;
        padding: 0 2em;
        height: 75px;
        box-shadow: 0px -6px 16px 0px slategrey;
        backdrop-filter: blur(32px) saturate(100%);
        -webkit-backdrop-filter: blur(20px) saturate(100%);
    }
    ul button {
        font-size: 14px;
        font-weight: 700;
        background-color: orangered;
        color: white;
        padding: 6px 16px;
        border: none;
        border-radius: 2px;
        text-align: center;
    }
    p {
        font-weight: 500;
        font-size: 32px;
        color: slategrey;
    }
    span {
        color: orangered;
    }
</style>