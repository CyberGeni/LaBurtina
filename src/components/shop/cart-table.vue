<template>
    <main>
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
                <td> ${{ price }}</td>
                <td>
                    <div>
                        <img @click="quantity--" src="src\assets\images\minus.svg" alt="">
                        <p>{{ quantity }}</p>
                        <img @click="quantity++" src="src\assets\images\plus.svg" alt="">
                    </div>
                </td>
                <td> ${{ getTotal() }}{{total}} </td>
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
    methods: {
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
        margin: 3.5em auto;
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
    /*    background-color: orangered; */
    }
    ::-webkit-scrollbar-thumb {
        padding: 1px;
        background-color: orangered;
        border-radius: 4px;
    }
    @media (min-width: 640px) {
        main {
            overflow-x: hidden;       
            padding: 1em 0;
        }
    }
</style>