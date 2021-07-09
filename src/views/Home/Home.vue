<template>
  <Layout>
    <div class="flex pt-20">
      <div class="w-1/2 text-left">
        <div class="p-5">
          <h1 class="text-6xl font-extrabold">Digital Identity</h1>
          <p class="opacity-50 text-xl py-10 leading-8 max-w-lg"> Your Digital Identity makes accessing government services online simpler, safer and more secure.</p>
          <div class="">
            <router-link to="/enroll" class="mr-5 pl-10 relative whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
              <span class="transition absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                DID Enrollment
            </router-link>
            <router-link to="/login" class="transition ml-4 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Login
            </router-link>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <img class="" src="../../assets/img/fg-print.svg" alt="Logo">
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/Default";

export default {
  name: "Home",
  components: {
    Layout
  }
}
</script>

<style>

</style>