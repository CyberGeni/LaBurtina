<template>
    <main>
        <p class="title">Cart Totals</p>
        <div class="column">
            <p>Sub Total</p>
            <p>$250</p>
        </div>
        <div class="column">
            <p>Shipping</p>
            <p>$50</p>
        </div>
        <div class="column">
            <p>Total</p>
            <p>$300</p>
        </div>
        <router-link to="/checkout"><button>PROCEED TO CHECKOUT</button></router-link>
    </main>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    main {
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        margin: auto;
        margin-bottom: 2em;
        max-width: 500px;
        background: rgb(247, 251, 255);
    }
    .title {
        font-size: 20px;
        padding: 1em;
        font-weight: 500;
    }
    .column {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1.2em;
        border-bottom: 1px solid rgb(214, 217, 219);
    }
    button, a {
        width: 100%;
        background-color: orangered;
        color: white;
        padding: 8px;
        border: none;
        font-size: 14px;
        letter-spacing: 0.5px;
        font-weight: 600;
    }
</style>