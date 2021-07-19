<template>
  <Layout>
    <div class="mt-5 p-5 mb-6">
        <h1 class="py-5 transition text-xl font-bold border-b border-gray-200 mb-5">Digital Identity</h1>
      
          <div class="" v-if="identity">
            <!-- <div class="">
               <h1 class="pt-0 font-bold py-5 text-base"> Virtual Card </h1>
              <img src="../../assets/img/Screenshot 2021-06-14 at 11.26.32 PM.png"/>
            </div> -->
             <div class="mb-6 bg-white p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
                Digits
                </label>
                <p class="break-words">
                  {{identity.digits}}
                </p>
            </div>
            <h1 class="font-bold py-5 text-base"> Identity Keys </h1>
            
            <div class="mb-6 bg-white p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
                Public View Key <strong class="text-sm px-2 rounded-md bg-green-100">(Base58 Encode)</strong>
                </label>
                <p class="break-words text-sm">
                  {{$store.getters.identity.wallet.public_view_key}}
                </p>
            </div>
            <div class="mb-6 bg-white p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
                Private view Key
                </label>
                <p class="break-words text-xs">
                <button type="submit" class="text-sm transition group relative flex justify-center py-2 px-10 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg class="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                      </svg>
                    </span> Private 
                </button>
              </p>
            </div>
            <div class="mb-6 bg-white p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
                Public Main Key <strong class="text-sm px-2 rounded-md bg-green-100">RSA(Base58 Encode)</strong>
                </label>
                <p class="break-words text-sm">
                  {{$store.getters.identity.wallet.public_main_key}}
                </p>
            </div>
            <div class="mb-6 bg-white p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
                Private Main Key 
                </label>
                <p class="break-words text-xs">
                <button type="submit" class="text-sm transition group relative flex justify-center py-2 px-10 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg class="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                      </svg>
                    </span> Private 
                </button>
              </p>
            </div>
            <div class="mb-6 bg-white p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
                Certificate <strong class="text-sm px-2 rounded-md bg-green-100">(Base58 Encode)</strong>
                </label>
                <p class="break-words text-xs">
                  {{$store.getters.identity.wallet.certificate}}
              </p>
            </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Layout from "./components/layout";
export default {
  name: "identity",
  components: {
    Layout,
  },
  computed: {
    identity(){
      return this.$store.getters.identity
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

