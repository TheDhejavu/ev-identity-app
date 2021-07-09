<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { isAuthenticated } from "@/helpers/auth";
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('ALL_COUNTRY')
    if(isAuthenticated()){
      this.$store.dispatch("GET_IDENTITY")
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700&display=swap');
#app {
  font-family: Muli,sans-serif;
  -webkit-font-smoothing: antialiased;
}
h1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
