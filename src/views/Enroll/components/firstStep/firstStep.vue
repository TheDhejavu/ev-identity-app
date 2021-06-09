<template>
   <form v-on:submit.prevent class="bg-white rounded px-8 pt-6 pb-8 mb-4" autocomplete="off" >
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
              <input class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " id="firstname" type="text" placeholder="Firstname">
            </div>
            <div class="w-1/2">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                Last Name
              </label>
              <input class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " id="lastname" type="text" placeholder="Lastname">
            </div>
          </div>
          
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " id="password" type="" placeholder="******************">
          </div>
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="dob">
                Date of Birth
              </label>
              <input class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " id="dob" type="text" placeholder="Date Of Birth">
          </div>
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
                Country
              </label>
              <input class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " id="country" type="text" placeholder="country">
          </div>
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
               Zipcode
              </label>
              <input class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " id="zipcode" type="text" placeholder="zipcode E.G 9209292">
          </div>
          <div class="flex mb-6 space-x-5">
            <div class="w-1/2">
              <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="state">
                State
              </label>
              <input class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " id="state" type="text" placeholder="state">
            </div>
            <div class="w-1/2">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                City
              </label>
              <input class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " id="city" type="text" placeholder="city">
            </div>
          </div>
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
              Address
              </label>
              <input class="rounded-lg appearance-none transition rounded-none relative block w-full px-3 py-4 bg-gray-100 border border-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 " id="address" type="text" placeholder="address">
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" @click="$emit('next')" class="transition group relative w-full flex justify-center py-4 px-4 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
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
    name: "first-step"
}
</script>

<style>

</style>