<template>
  <div id="app" class="grid align-center h-100">
    <app-header></app-header>
    <account></account>
  </div>
</template>

<script>
import Header from './assets/components/Header.vue'
import Account from './assets/components/account/Account.vue'

export default {
  components: {
    'app-header': Header,
    'account': Account,
    },
  data () {
    return {

    }
  }
}
</script>

<style>
h1, h2, h3, h4, h5, h6 {
  font-family: 'Lora', 'Segoe UI';
}
::placeholder, small, p, button {
  font-family: 'Outfit', 'Segoe UI';
  
}
::placeholder {
  font-style: italic;
  letter-spacing: 0.5px;
}
</style>
