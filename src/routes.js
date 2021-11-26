import Shop from 'src/components/shop/shop.vue'
import Login from 'src/components/account/login.vue'
import Signup from 'src/components/account/signup.vue'
import Account from 'src/components/account/account.vue'
import Cart from 'src/components/shop/cart.vue'
import Checkout from 'src/components/shop/checkout.vue'

export default [
    {path: '/', component: Shop},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/account', component: Account},
    {path: '/shop', component: Shop},
    {path: '/cart', component: Cart},
    {path: '/checkout', component: Checkout}
]