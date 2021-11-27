<template>
    <div>
        <div class="column">
                <h2>Order Summary</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="single-product.html">Suscipit Vestibulum <strong> × 1</strong></a></td>
                            <td>&#8358;165</td>
                        </tr>
                        <tr>
                            <td><a href="single-product.html">Ami Vestibulum suscipit <strong> × 4</strong></a></td>
                            <td>&#8358;165</td>
                        </tr>
                        <tr>
                            <td><a href="single-product.html">Vestibulum suscipit <strong> × 2</strong></a></td>
                            <td>&#8358;165</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Sub Total</td>
                            <td><strong>&#8358;400</strong></td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>&#8358;500</td>
                        </tr>
                        <tr>
                            <td>Total Amount</td>
                            <td><strong>&#8358;900</strong></td>
                        </tr>
                    </tfoot>
                </table>
                <div class="payment">
                    <input type="radio" name="" id="">
                    <input type="radio" name="" id="">
                    <form action="">
                        <div @click="cod = !cod">
                            <input type="radio" name="cash" id="cod" value="cod">
                            <label for="cod">Cash On Delivery (Lagos Only)</label>
                            <p v-if="cod">Pay with cash upon delivery.</p> 
                        </div>
                        <div @click="bank = !bank">
                            <input type="radio" name="bank" id="bank" value="bank"  @click="bank = !bank">
                            <label for="bank">Direct Bank Transfer</label>
                            <p v-if="bank">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account..</p>  
                        </div>                   
                        <input type="checkbox" name="" id="">
                        <label for="" @click="tAndC = !tAndC">I have read and agree to the website <strong> terms and conditions.</strong></label>
                        <button v-if="tAndC" disabled>Place Order</button>
                    </form>                    
                </div>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cod: false,
            bank: false,
            tAndC: false
        }
    },
}
</script>
<style scoped>
    .column {
        max-width: 500px;
    }
    h2 {
        font-family: 'Outfit', 'Segoe UI';
        margin: 16px 0;
        padding: 12px 0;
        border-bottom: 1px solid #ccc;
    }
    table {
        background-color: #f7f7f7;
        width: 100%;
        max-width: 500px;
        text-align: center;
        border-collapse: collapse;
        border: 1px solid #ccc;
    }
    th {
        padding: 18px 0;
        border: 1px solid #ccc;
    }
    td {
        padding: 18px 0;
        border: 1px solid #ccc;
        color: rgb(80, 80, 80);
    }
    
    
</style>