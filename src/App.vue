<template>
  <div id="app" class="grid align-center h-100"> 
    <app-header></app-header>  
    <router-view></router-view>    
  </div>
</template>

<script>
// import Header from './components/header.vue'
import Shop from './components/shop/shop.vue'

export default {
  components: {
  //  'app-header': Header,
    'shop': Shop,   
    },
  data () {
    return {

    }
  }
}
</script>

<style>

/* override default styling */

*, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lora', 'Segoe UI';
  }
  ::placeholder, small, p, button, th, td, label {
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
  sup {
    color: red;
  }
  input:focus, textarea:focus {
    outline: #ccc;
  }
  input[type=text], input[type=email], input[type=number], input[type=address] {
    font-family: 'Outfit', 'Segoe UI';
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
    }
  ::-webkit-scrollbar-thumb {
    padding: 1px;
    background-color: #999;
    border-radius: 4px;
  }
</style>
