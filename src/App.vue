<template>
  <div id="app">
    <Header/>
    <Navigation/>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/common/css/reset.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
  import Header from '@/components/header/Header.vue'
  import Navigation from '@/components/navigation/Navigation.vue'
  //import {data} from '@/assets/json/api.js'

  export default {
    name: 'app',
    components: {
      Header,
      Navigation
    }
  }
</script>
