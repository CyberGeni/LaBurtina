<template>
  <div id="app" class="grid align-center h-100">   
      <router-view></router-view>    
  </div>
</template>

<script>
import Shop from './components/shop/shop.vue'

export default {
  components: {
    'shop': Shop
    },
  data () {
    return {

    }
  }
}
</script>

<style>
*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Lora', 'Segoe UI';
}
::placeholder, small, p, button {
  font-family: 'Outfit', 'Segoe UI';
}
::placeholder {
  letter-spacing: 0.5px;
}
</style>
