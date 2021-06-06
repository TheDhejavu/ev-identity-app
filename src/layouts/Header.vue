<template>
  <header class="header">
      <div class="header-panel max-w-screen-xl pt-10 m-auto flex mx-5 xl:mx-auto">
        <div class="logo pt-0 p-2">
          <router-link to="/">
            Identity.app
          </router-link>
        </div>
      </div>
  </header>
</template>

<script>
export default {
    name: "app-header"
}
</script>

<style lang="scss">
.header {
  .logo {
    width:160px;
  }
}
</style>