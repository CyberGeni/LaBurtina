import Shop from './components/shop/shop.vue'
import Login from './components/account/login.vue'
import Signup from './components/account/signup.vue'
import Account from './components/account/account.vue'
import Cart from './components/shop/cart.vue'
import Checkout from './components/shop/checkout.vue'

export default [
    {path: '/', component: Shop},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/account', component: Account},
    {path: '/shop', component: Shop},
    {path: '/cart', component: Cart},
    {path: '/checkout', component: Checkout}
]