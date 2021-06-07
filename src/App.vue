<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700&display=swap');
#app {
  font-family: Muli,sans-serif;
  -webkit-font-smoothing: antialiased;
  /* background: #000; */
}
h1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
