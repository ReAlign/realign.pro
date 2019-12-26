<template>
  <div id="app">
    <home-page />
    <beian />
  </div>
</template>

<script>
import HomePage from './components/home-page.vue';
import Beian from './components/beian.vue';

export default {
  name: 'app',
  components: {
    'home-page': HomePage,
    beian: Beian,
  }
}
</script>

<style>
body {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  background: #fff;
  overflow: visible;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
