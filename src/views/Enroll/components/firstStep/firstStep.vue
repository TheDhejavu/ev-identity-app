<template>
   <form v-on:submit.prevent class="bg-white rounded px-8 pt-6 pb-8 mb-4" autocomplete="off" >
        <h2 class="text-lg font-bold py-5  font-bold border-b border-gray-100 mb-4">Basic Information</h2>
          <div class="mb-6">
              <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="firstname">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-100 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Change
                </button>
              </div>
          </div>
          <div class="flex mb-6 space-x-5">
            
            <div class="w-1/2">
              <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="firstname">
                First Name
              </label>
              <input  
                v-model="$store.getters.identity.first_name" 
                class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 
                text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " 
                id="firstname" 
                type="text" 
                placeholder="Firstname"
              >
            </div>
            <div class="w-1/2">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                Last Name
              </label>
              <input 
                v-model="$store.getters.identity.last_name" 
                class="rounded-lg appearance-none transition rounded-none relative block w-full px-3
                 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " 
                id="lastname" 
                type="text" 
                placeholder="Lastname"
              >
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email Address
            </label>
            <input 
              v-model="$store.getters.identity.email" 
              class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 
              bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 "
              id="email"
              type="email"
              placeholder="Email address"
            >
          </div>
        
          <h2 class="text-lg font-bold py-5  border-b border-gray-100 mb-4">Origin</h2>
          <div class="">
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
                  Country
                </label>
                <option>

                </option>
                <select 
                 class="rounded-lg appearance-none transition rounded-none
                  relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 
                  text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 "
                  id="country"
                  type="text"
                  placeholder="country"
                  v-model="$store.getters.identity.origin.country"
                >
                <option selected value="" hidden> 
                    Select country 
                </option>
                <option
                    v-for="country in countries" 
                    v-bind:key="country.id"
                    :value="country.id"
                > 
                    {{ country.name }} 
                </option>
                </select>
            </div>
            
            <div class="flex mb-6 space-x-5">
              <div class="w-1/2">
                <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="state">
                  State
                </label>
                <input 
                  v-model="$store.getters.identity.origin.state" 
                  class="rounded-lg appearance-none transition 
                  rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500
                   text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " 
                  id="state"
                  type="text"
                  placeholder="state"
                >
              </div>
              <div class="w-1/2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                  City
                </label>
                <input  
                 v-model="$store.getters.identity.origin.city" 
                 class="rounded-lg appearance-none transition 
                 rounded-none relative block w-full px-3 py-4 bg-gray-100 
                 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 
                 focus:border-green-500 focus:z-10 "
                 id="city" 
                 type="text" 
                 placeholder="city"
                >
              </div>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                Address
                </label>
                <input 
                  v-model="$store.getters.identity.origin.address" 
                  class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4
                   bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 
                   focus:border-green-500 focus:z-10 "
                  id="address"
                  type="text"
                  placeholder="address"
                  >
            </div>
          </div>
          <h2 class="text-lg font-bold py-5  border-b border-gray-100 mb-4">Residence</h2>
          <div class="">
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="residenceCountry">
                  Country
                </label>
                <option>

                </option>
                <select 
                 class="rounded-lg appearance-none transition rounded-none
                  relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 
                  text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 "
                  id="residenceCountry"
                  type="text"
                  placeholder="country"
                  v-model="$store.getters.identity.residence.country"
                >
                <option selected value="" hidden> 
                    Select country 
                </option>
                <option
                    v-for="country in countries" 
                    v-bind:key="country.id"
                    :value="country.id"
                > 
                    {{ country.name }} 
                </option>
                </select>
            </div>
            
            <div class="flex mb-6 space-x-5">
              <div class="w-1/2">
                <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="residenceState">
                  State
                </label>
                <input 
                  v-model="$store.getters.identity.residence.state" 
                  class="rounded-lg appearance-none transition 
                  rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none
                   focus:ring-green-500 focus:border-green-500 focus:z-10 "
                   id="residenceState"
                   type="text"
                   placeholder="state"
                  >
              </div>
              <div class="w-1/2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="residenceCity">
                  City
                </label>
                <input 
                  v-model="$store.getters.identity.residence.city" 
                  class="rounded-lg appearance-none transition rounded-none relative block w-full 
                   px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 
                   focus:border-green-500 focus:z-10 "
                  id="residenceCity"
                  type="text"
                  placeholder="city"
                >
              </div>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="residenceAddress">
                Address
                </label>
                <input 
                v-model="$store.getters.identity.residence.address" 
                class="rounded-lg appearance-none transition rounded-none 
                relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 
                focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 "
                id="residenceAddress"
                type="text"
                placeholder="address"
              >
            </div>
          </div>
          <h2 class="text-lg font-bold py-5  border-b border-gray-100 mb-4">Security</h2>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input 
              v-model="$store.getters.identity.password" 
              class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 
              bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 "
              id="password"
              type="password"
              placeholder="******************"
            >
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" @click="handleNext" class="transition group relative w-full flex justify-center py-4 px-4 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Next
          </button>
          </div>
    </form>
</template>

<script>
export default {
  name: "first-step",
  data() {
        return {
            formControls : {
              first_name: "",
              last_name: "",
              password: "",
              origin: {
                country: "",
                city: "",
                state: "",
                address: ""
              },
              residence: {
                country: "",
                city: "",
                state: "",
                address: ""
              },
              email: "",
            },
            isLoading: false,
            countries: this.$store.getters.countries
        }
    },
  methods: {
    handleNext() {
      this.$emit('next')
    },
  }
}
</script>

<style>

</style>