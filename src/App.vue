<template>
  <div id="app" class="grid align-center h-100">
    
    <router-view>
      <app-header></app-header>
    </router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Shop from './components/shop/shop.vue'

export default {
  components: {
    'app-header': Header,
    'shop': Shop,
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
