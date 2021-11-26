<template>
    <div>
        <nav>
            <p class="text-2xl text-gray-900"><router-link to="/shop">La<span class="text-orange-500">Burtina</span></router-link> </p>
            <div class="icons">
                <ul>
                    <li><router-link to="/cart"><img src="../assets/images/shopping-cart.svg" alt="shopping cart" class="cart"></router-link></li>
                    <p>16</p>
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
    ul p {
        position: absolute;
        font-size: 10px;
        font-weight: 700;
        background-color: orangered;
        color: white;
        margin-top: -18px;
        margin-left: 16px;
        padding: 3px;
        border-radius: 50%;
        width: 19px;
        height: 19px;
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