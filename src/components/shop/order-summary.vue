<template>
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
                    <div class="single-payment-method">
                        <div class="payment-method-name" @click="cod = !cod, bank=false">
                                <input type="radio" id="directbank" name="paymentmethod" value="bank" class="custom-control-input">
                                <label class="custom-control-label" for="directbank">Cash on delivery</label>
                        </div>
                        <div class="payment-method-details" v-if="cod">
                            <p>Cash on delivery.</p>
                        </div>
                    </div>
                    <div class="single-payment-method">
                        <div class="payment-method-name" @click="bank = !bank, cod=false">
                                <input type="radio" id="directbank" name="paymentmethod" value="bank" class="custom-control-input">
                                <label class="custom-control-label" for="directbank">Direct Bank Transfer</label>
                        </div>
                        <div class="payment-method-details" v-if="bank">
                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account..</p>
                        </div>
                    </div>
                    <button>PLACE ORDER</button>
                </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            cod: false,
            checked: false,
            bank: false,
            tAndC: false
        }
    },
}
</script>
<style scoped>
    .column {
        width: 100%;
        max-width: 450px;
        margin: auto;
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
        border: 1px solid #ccc;
        padding: 18px;
        width: 100%;
    }
    td {
        padding: 18px 0;
        border: 1px solid #ccc;
        color: rgb(80, 80, 80);
    }
    .payment > * + * {
        margin-bottom: 1em;
        margin-top: 1em;
    }
    .single-payment-method > * + * {
        margin-bottom: 0.7em;
        margin-top: 0.7em;
    }
    .payment-method-details {
        background-color: #f1f1f1;
        padding: 14px;
        color: rgb(80, 80, 80);
    }
    button {
        padding: 10px 18px;
    }
</style>