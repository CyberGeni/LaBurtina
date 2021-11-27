<template>
    <main>
        <p class="top-action">RETURNING CUSTOMER? <router-link to="/login"><span>CLICK HERE TO LOGIN</span></router-link></p>
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
                    <input type="checkbox" name="createAccount" id="">
                    <label for="">Create an account?</label>
                    <div class="ifCreateAccount">
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
        <!--    <div class="column">
                <h2>Order Summary</h2>
                table
            </div> -->
        </div>
    </main>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 100px auto;
        width: 90%;
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
        padding: 12px;
    }
    textarea {
        background-color: #f7f7f7;
        border: 1px solid #ccc;
        padding: 12px;
    }
    
    
    
    
    
</style>