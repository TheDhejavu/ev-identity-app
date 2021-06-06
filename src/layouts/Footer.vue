<template>
  <footer>
    <div class="footer max-w-screen-xl px-1 py-5 md:px-5 md:py-10  lg:px-5 lg:py-10 xl:px-5 xl:py-10 m-auto mx-5 xl:mx-auto">
        <div class="logo pt-0 p-2">
          <router-link to="/">
            Identity.app
          </router-link>
        </div>
        <p class="opacity-50 text-xs md:text-sm xl:text-sm lg:text-sm p-2">© 2021  All rights reserved. Powered By Crypto </p>
    </div>
  </footer>
</template>

<script>
export default {
    name: "app-footer"
}
</script>

<style lang="scss">
.footer {
  // border-top: 1px solid rgb(238, 238, 238);
  .logo {
    width:130px;
  }
}
</style>