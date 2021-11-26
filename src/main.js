import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// alternate routing 

// import Shop from './components/shop/shop.vue'
// import Login from './components/account/login.vue'
// import Signup from './components/account/signup.vue'
// import Account from './components/account/account.vue'
// import Cart from './components/shop/cart.vue'
// import Checkout from './components/shop/checkout.vue'

import Routes from './routes'

// router init

Vue.use(VueRouter);
const router = new VueRouter({
  routes : Routes,
  mode : 'history'
})

// vue app init

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
