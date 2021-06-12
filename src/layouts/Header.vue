<template>
<header class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <router-link to="/"> 
          <span class="sr-only">Identit.app</span>
          <!-- <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-green-600.svg" alt="">
           -->
           <img class="mx-auto h-12 w-auto" src="@/assets/logo.svg" alt="Logo">
        </router-link>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
     
      </div>
       <nav class="hidden md:flex space-x-10" hi>
      <!-- <nav class="hidden md:hidden space-x-10"> -->

        <router-link to="/dashboard" class="text-base font-medium text-gray-500 hover:text-gray-900 py-6">
          <i class="uil uil-user-circle text-xl"></i> Dashboard
        </router-link>

       <a href="http://localhost:8080" target="_blank"  class="text-base font-medium text-gray-500 hover:text-gray-900 py-6">
          <i class="uil uil-layers text-xl"></i> Voting 
        </a>


      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <router-link to="/login" class="transition whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Login
        </router-link>
        <router-link to="/enroll" class=" transition pl-10 relative ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>DID Enrollment
        </router-link>
      </div>
    </div>
  </div>

</header>

</template>
<script>
export default {
    name: "app-header"
}
</script>

<style lang="scss" scoped>
.header {
  background: rgba(255, 255, 255, 255);
}
nav {
  .active {
    @apply text-green-500 border-b-4 border-green-500;
    &:hover {
      @apply text-green-500
    }
  }
}
</style>