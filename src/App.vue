<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import { isAuthenticated , removeAuthToken} from "@/helpers/auth";
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('ALL_COUNTRY')
    if(isAuthenticated()){
      this.$store.dispatch("GET_IDENTITY")
    }
  },
  watch: {
    "$store.getters.errors": (errors)=>{
      
      if(errors.data && errors.data.status === 401 && errors.type == "identity") {
        removeAuthToken()
        this.$route.push("/login")
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700&display=swap');
body {
  @apply bg-gray-100
}
#app {
  font-family: Muli,sans-serif;
  -webkit-font-smoothing: antialiased;
  /* background: #000; */
}
h1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.swal2-confirm , .swal2-styled {
  background: rgb(224, 224, 224) !important;
  color:#000 !important;
  padding:10px 30px !important;
}
</style>
