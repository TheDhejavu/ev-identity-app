<template>
  <Layout>
    <div class="mt-5 p-5 mb-6">
        <h1 class="py-5 transition text-xl font-bold border-b border-gray-200 mb-10">Documents</h1>
           
       <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                Birth  Certificate
              </label>
              <p class="opacity-50 text-sm py-5 max-w-lg"> Click the link below to start facial scanning and enrollment for your digital identity system. It is Secure.</p>
              <a  target="_blank" :href="$store.getters.identity.birth_certificate" class="text-sm transition group relative inline-block py-2 px-10 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  View
              </a>
          </div>
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                National Identity  Card
              </label>
              <p class="opacity-50 text-sm py-5 max-w-lg"> Click the link below to start facial scanning and enrollment for your digital identity system. It is Secure.</p>
              <a  target="_blank" :href="$store.getters.identity.national_id_card" class="text-sm transition group relative py-2 px-10 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    View
              </a>
          </div>
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                Voter's Card (Optional)
              </label>
              <p class="opacity-50 text-sm py-5 max-w-lg"> Click the link below to start facial scanning and enrollment for your digital identity system. It is Secure.</p>
              <a  target="_blank" :href="$store.getters.identity.voter_card" class="text-sm transition group relative py-2 px-10 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                View
              </a>
          </div>      
    </div>
  </Layout>
</template>
<script>
import Layout from "./components/layout";
export default {
  name: "documents",
  components: {
    Layout,
  },
}
</script>

<style lang="scss" scoped>

</style>

