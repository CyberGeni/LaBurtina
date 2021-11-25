import Shop from './components/shop/shop.vue'
import Login from './components/account/login.vue'
import Signup from './components/account/signup.vue'
import Account from './components/account/account.vue'

export default [
    {path: '/', component: Shop},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/account', component: Account},
    {path: '/shop', component: Shop}
]