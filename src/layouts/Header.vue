<template>
<header class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <router-link to="/"> 
          <span class="sr-only">identity.app</span>
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
       <nav class="hidden md:flex space-x-10" v-if="isLoggedIn">
     
        <router-link to="/dashboard" class="active text-base font-medium text-gray-500 hover:text-gray-900 py-6">
          <i class="uil uil-create-dashboard text-xl"></i> Dashboard
        </router-link>

       <a href="http://localhost:8080" target="_blank"  class="text-base font-medium text-gray-500 hover:text-gray-900 py-6">
          <i class="uil uil-layers text-xl"></i> Voting 
        </a>


      </nav>

    
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <span v-if="!isLoggedIn" class="py-5 block">
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
        </span>
        <figcaption class="x-6 p-2" v-if="isLoggedIn && $store.getters.identity">
          <span @click="logout" class="cursor-pointer flex items-center space-x-4 p">
            <div  class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <!-- <img src="../assets/img/fg-print.svg" alt="" class="w-12 h-12 rounded-full bg-purple-100" loading="lazy"> -->
              <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
              </span>
            </div>
            <div class="flex-auto">
              {{$store.getters.identity.first_name}}
            </div>
          </span>
        </figcaption>
      </div>
    </div>
  </div>

</header>

</template>
<script>
import {  isAuthenticated, removeAuthToken } from "@/helpers/auth";

export default {
    name: "app-header",
    computed: {
      isLoggedIn() {
        return isAuthenticated()
      }
    },
    methods: {
      logout() {
        removeAuthToken()
        this.$store.commit("SET_IDENTITY", null)
        return  window.location ="/login"
      }
    }
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