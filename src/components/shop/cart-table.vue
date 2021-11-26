<template>
    <main>
        <!-- Cart for mobile view. This is hidden on screen larger than 640px -->
        <section>
            <h1>My Cart</h1>
            <div class="main-cart">
                <div class="cart-info">
                    <img src="src\assets\images\wallpaper.jpg" alt="">
                    <div class="text-info">
                        <h4>Wallpaper</h4>
                        <p>A nice wallpaper to use on your mobile device. Very minimalistic.</p> 
                        <h2>&#8358;{{ getTotal }}{{total}}</h2>
                    </div>
                    
                    <div class="quantity">
                        <img @click="quantity--" src="src\assets\images\minus.svg" alt="">
                        <p>{{ quantity }}</p>
                        <img @click="quantity++" src="src\assets\images\plus.svg" alt="">
                    </div> 
                </div>                
                <button>Remove</button>        
            </div>   
            <div class="main-cart">
                <div class="cart-info">
                    <img src="src\assets\images\wallpaper.jpg" alt="">
                    <div class="text-info">
                        <h4>Wallpaper</h4>
                        <p>A nice wallpaper to use on your mobile device. Very minimalistic.</p> 
                        <h2>&#8358;{{ getTotal }}{{total}}</h2>
                    </div>
                    
                    <div class="quantity">
                        <img @click="quantity--" src="src\assets\images\minus.svg" alt="">
                        <p>{{ quantity }}</p>
                        <img @click="quantity++" src="src\assets\images\plus.svg" alt="">
                    </div> 
                </div>                
                <button>Remove</button>        
            </div>             
        </section>
        <!-- Cart for desktop view. This is hidden on screen smaller than 640px -->
        <table>
            <thead>
                <th>IMAGE</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>REMOVE</th>
            </thead>
            <tbody>
                <td class="image-preview"><img src="src\assets\images\wallpaper.jpg" alt=""></td>
                <td>Wallpaper</td>
                <td> &#8358;{{ price }}</td>
                <td>
                    <div>
                        <img @click="quantity--" src="src\assets\images\minus.svg" alt="">
                        <p>{{ quantity }}</p>
                        <img @click="quantity++" src="src\assets\images\plus.svg" alt="">
                    </div>
                </td>
                <td> &#8358;{{ getTotal }}{{total}} </td>
                <td><img src="src\assets\images\delete.svg"></td>
            </tbody>
        </table>
    </main>
</template>
<script>
export default {
    data() {
        return {
            price: 50,
            quantity: 10,
            total: 0
        };
    },
    computed: {
        getTotal () {
            this.total = this.price * this.quantity
        }
    }
}
</script>
<style scoped>
    main {
        display: flex;
        justify-content: start;
        overflow-x: scroll;
        width: 90%;
        margin: 1em auto;
    }
    table {
        max-height: auto;        
        padding: 1em 0;
        border-collapse: collapse;
        margin: auto;
    }
    thead {
        background: orangered;
        border-collapse: collapse;
        padding: 1em 0;
        margin: 10px;
    }
    th {
        padding: 1em;
        color: white;
    }
    td {
        border: 1px solid rgb(207, 210, 212);
        text-align: center;
    }
    td div {
        display: flex;
        justify-content: space-evenly;
        margin: auto;
        padding: 4px;
        border: 1px solid rgb(229, 233, 236);
        width: 80%;
    }
    .image-preview {
        width: 50px;
        height: 60px;
    }
    .image-preview img {
        object-position: center;
        object-fit: cover;
        max-height: 100px;
    }
    ::-webkit-scrollbar {
        -webkit-appearance: none;
        height: 6px;
        background-color: rgb(226, 228, 231);
        border-radius: 4px;
        padding: 1px;
    }
    ::-webkit-scrollbar-button {
        -webkit-appearance: none;
        width: 0;
        background-color: orangered;
    }
    ::-webkit-scrollbar-thumb {
        padding: 1px;
        background-color: orangered;
        border-radius: 4px;
    }
    section {
        display: none;
    }
    @media (min-width: 640px) {
        main {
            overflow-x: hidden;       
            padding: 1em 0;
        }
    }
    @media (max-width: 640px) {
        table {
            display: none;
        }
        h1 {
            line-height: 70px;
            padding-left: 0.7em;
        }
        main {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            overflow-x: hidden;       
            padding: 0.5em 0;
            margin: auto; 
            margin-bottom: 2em;          
            width: 90%;           
            max-width: 500px;
            background: rgb(247, 251, 255);
        }
        section {
            display: flex;
            flex-direction: column;
            justify-content: start;
            width: 100%;
        }
        .main-cart {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            padding: 1.1em 1em;
            border-bottom: 1px solid rgb(214, 217, 219);
        }
        .main-cart img {
            object-position: center;
            object-fit: cover;
            max-height: 100px;
            padding: 0.2em;
        }
        .cart-info {
            display: flex;
            flex-direction: row;        
            justify-content: space-between;
            align-items: center;
            margin: auto 0;
            width: 100%;
        }
        .text-info > * + * {
            margin-top: 0.5rem;
        }
        .text-info {    
            padding: 8px;
        }
        .quantity {
            display: flex;
            flex-grow: 1;
            justify-content: space-evenly;
            padding: 2px;
            border: 1px solid rgb(229, 233, 236);
            border-radius: 4px;
            max-width: 100px;
        }
        .quantity p {
            align-self: center;
            font-size: 14px;
        }
        button {
            align-self: flex-end;
            height: fit-content;
            padding: 6px 12px;
            background-color: orangered;
            border: none;
            color: white;
            font-weight: 600;
            border-radius: 2px;
        }
    }
</style>