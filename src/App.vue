<template>
  <main-container>
    <main-nav />
    <router-view></router-view>
  </main-container>
</template>

<script>
import MainNav from "./components/header/MainNav.vue";
import MainContainer from "./components/shared/MainContainer.vue";
export default {
  name: 'App',
  components: {
    MainNav,
    MainContainer
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
}
</style>
