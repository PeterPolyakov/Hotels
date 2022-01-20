<template>
  <header-comp></header-comp>

  <hr/>
  
  <router-view></router-view>

  <footer-comp></footer-comp>
</template>

<script>
import HeaderComp from './components/layout/Header.vue'
import FooterComp from './components/layout/Footer.vue'


export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
