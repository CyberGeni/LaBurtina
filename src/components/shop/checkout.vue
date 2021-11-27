<template>
    <main>
        <guest-header></guest-header>
        <section>          
        <div class="container">
            <div class="column">
                <h2>Billing details</h2>
                <form action="" method="get">
                    <div class="input-field">
                        <label for="name">First Name <sup>*</sup></label>
                        <input type="text" placeholder="First Name">
                    </div>
                    <div class="input-field">
                        <label for="name">Last Name<sup>*</sup></label>
                        <input type="text" placeholder="Last Name">
                    </div>
                    <div class="input-field">
                        <label for="name">Email Address <sup>*</sup></label>
                        <input type="email" placeholder="Email Address">
                    </div>
                    <div class="input-field">
                        <label for="name">Street Address <sup>*</sup></label>
                        <input type="address" placeholder="Address Line 1/2">
                    </div>
                    <div class="input-field">
                        <label for="name">Town/City <sup>*</sup></label>
                        <input type="text" placeholder="e.g, Ojo">
                    </div>
                    <div class="input-field">
                        <label for="name">State</label>
                        <input type="text" placeholder="e.g, Lagos">
                    </div>
                    <div class="input-field">
                        <label for="name">Phone</label>
                        <input type="number" placeholder="Phone Number">
                    </div>
                    <div class="createAccount">
                       <input type="checkbox" name="createAccount" id="" @click="createAccount = !createAccount">
                        <label for="">Create an account?</label> 
                    </div>
                    
                    <p class="createAccount" v-if="createAccount">Create an account by entering the information below. If you are a returning customer (you have made a purchase from this store before) please login at the top of the page.</p>
                    <div class="ifCreateAccount" v-if="createAccount">
                        <div class="input-field">
                            <label for="name">Account Password <sup>*</sup></label>
                            <input type="text" placeholder="Enter a password for your new account">
                        </div>
                    </div>
                    <div class="input-field">
                        <label for="name">Order Note</label>
                        <textarea type="text" placeholder="Notes about your order, e.g special notes for delivery."></textarea>
                    </div>
                </form>
            </div>
            <order-summary></order-summary>
        </div> 
        </section>     
           
    </main>
</template>
<script>
import guestHeader from '../guest-header.vue'
import OrderSummary from './order-summary.vue'
export default {
    components: { 
      'guest-header': guestHeader,  
      'order-summary': OrderSummary
    },
    data() {
        return {
            createAccount: false
        }
    },
}
</script>
<style scoped>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 80px auto;
        width: 100%;
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        margin: auto;
    }
    /*.container > * + * {
      margin-left: 1rem;
    }*/
    .column {
        max-width: 500px;
    }
    p.top-action {
        padding: 12px 24px;
        border-top: 4px solid orangered;
        background-color: #f7f7f7;
    }
    span {
        margin-left: 12px;
        color: orangered;
    }
    h2 {
        font-family: 'Outfit', 'Segoe UI';
        margin: 16px 0;
        padding: 12px 0;
        border-bottom: 1px solid #ccc;
    }
    .input-field {
        display: grid;
    }
    .input-field > * + * {
      margin-bottom: 1rem;
      margin-top: 0.5rem;
    }
    input {
        background-color: #f7f7f7;
        border: 1px solid #ccc;
        padding: 18px;
    }
    .createAccount {
        color: rgb(82, 82, 82);
        padding: 10px 0;
    }
    textarea {
        background-color: #f7f7f7;
        border: 1px solid #ccc;
        padding: 12px;
    }
</style>