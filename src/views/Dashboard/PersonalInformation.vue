<template>
  <Layout>
      <div class="mt-5 p-5 mb-6">
            <h1 class="py-5 transition text-xl font-bold border-b border-gray-100 mb-10">Personal Information</h1>
           
          <div class="flex mb-6 space-x-5">
            <div class="w-1/2">
              <div class="bg-gray-100 p-4">
                <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="firstname">
                  First Name
                </label>
                <p>Akinola</p>
              </div>
            </div>
            <div class="w-1/2">
              <div class="bg-gray-100 p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                  Last Name
                </label>
                <p>Ayodeji</p>
              </div>
            </div>
          </div>
          <div class="mb-6 bg-gray-100 p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="dob">
                Date of Birth
              </label>
              <p>June 23, 1999</p>
          </div>
          <div class="mb-6 bg-gray-100 p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
                Country
              </label>
              <p>Nigeria</p>
          </div>
          <div class="mb-6 bg-gray-100 p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
               Zipcode
              </label>
              <p>120092</p>
          </div>
          <div class="flex mb-6 space-x-5">
            <div class="w-1/2">
              <div class="bg-gray-100 p-4">
                <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="state">
                  State
                </label>
              <p>Ondo State</p>
              </div>
            </div>
            <div class="w-1/2">
              <div class="bg-gray-100 p-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                  City
                </label>
                <p>Akure</p>
              </div>
            </div>
          </div>
          <div class="mb-6 bg-gray-100 p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
              Address
              </label>
              <p>Lydia Street Opposite Bennyrose Hotel</p>
          </div>
           <div class="mb-6 bg-gray-100 p-4">
              <label class="mr-2 block text-gray-700 text-sm font-bold mb-2" for="firstname">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
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

