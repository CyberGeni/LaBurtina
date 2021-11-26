import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Shop from './components/shop/shop.vue'
import Login from './components/account/login.vue'
import Signup from './components/account/signup.vue'
import Account from './components/account/account.vue'
import Cart from './components/shop/cart.vue'
import Checkout from './components/shop/checkout.vue'
// import Routes from './routes.js'

Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    {path: '/', component: Shop},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/account', component: Account},
    {path: '/shop', component: Shop},
    {path: '/cart', component: Cart},
    {path: '/checkout', component: Checkout}
],
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
