<template>
  <div id="app" class="grid align-center h-100"> 
    <app-header></app-header>  
    <router-view></router-view>    
  </div>
</template>

<script>
import Shop from './components/shop/shop.vue'
import Header from './components/header.vue'

export default {
  components: {
    'shop': Shop,
    'app-header': Header
    },
  data () {
    return {

    }
  }
}
</script>

<style>

/* override defaults */
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lora', 'Segoe UI';
  }
  ::placeholder, small, p, button, th, td {
    font-family: 'Outfit', 'Segoe UI';
  }
  ::placeholder {
    letter-spacing: 0.5px;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: currentColor;
  }
  ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 6px;
        background-color: rgb(226, 228, 231);
        border-radius: 4px;
        padding: 1px;
    }
    ::-webkit-scrollbar-button {
        -webkit-appearance: none;
        height: 0;
    /*    background-color: orangered; */
    }
    ::-webkit-scrollbar-thumb {
        padding: 1px;
        background-color: #999;
        border-radius: 4px;
    }
</style>
