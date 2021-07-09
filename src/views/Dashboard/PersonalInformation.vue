<template>
  <Layout>
      <div class="mt-5 p-5 mb-6">
            <h1 class="py-5 transition text-xl font-bold border-b border-gray-200 mb-10">Personal Information</h1>
           
          <div class="flex mb-6 space-x-5">
            <div class="w-1/2">
              <div class="bg-white p-4">
                <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="firstname">
                  First Name
                </label>
                <p>{{$store.getters.identity.first_name}}</p>
              </div>
            </div>
            <div class="w-1/2">
              <div class="bg-white p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                  Last Name
                </label>
                <p>{{$store.getters.identity.last_name}}</p>
              </div>
            </div>
          </div>
          <div class="mb-6 bg-white p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email Address
              </label>
              <p>{{$store.getters.identity.email}}</p>
          </div>
          <div class="mb-6 bg-white p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
                Country of Origin
              </label>
              <p>{{$store.getters.identity.origin.country.name}}</p>
          </div>
          
          <div class="flex mb-6 space-x-5">
            <div class="w-1/2">
              <div class="bg-white p-4">
                <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="state">
                  State of Origin
                </label>
              <p>{{$store.getters.identity.origin.state}}</p>
              </div>
            </div>
            <div class="w-1/2">
              <div class="bg-white p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                  City of origin
                </label>
                <p>{{$store.getters.identity.origin.city}}</p>
              </div>
            </div>
          </div>
          <div class="mb-6 bg-white p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
                Residence Country
              </label>
              <p>{{$store.getters.identity.residence.country.name}}</p>
          </div>
          
          <div class="flex mb-6 space-x-5">
            <div class="w-1/2">
              <div class="bg-white p-4">
                <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="state">
                  Residence State
                </label>
              <p>{{$store.getters.identity.residence.state}}</p>
              </div>
            </div>
            <div class="w-1/2">
              <div class="bg-white p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                  Residence City
                </label>
                <p>{{$store.getters.identity.residence.city}}</p>
              </div>
            </div>
          </div>
          <div class="mb-6 bg-white p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
              Address
              </label>
              <p>{{$store.getters.identity.residence.address}}</p>
          </div>
           <div class="mb-6 bg-white p-4">
              <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="firstname">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-white">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              </div>
          </div>
        </div>
  </Layout>
</template>
<script>
import Layout from "./components/layout";

export default {
  name: "Identity",
  components: {
    Layout,
  },
}
</script>

<style lang="scss" scoped>

</style>

