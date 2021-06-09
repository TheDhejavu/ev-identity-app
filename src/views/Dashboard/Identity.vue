<template>
  <Layout>
    <div class="mt-5 p-5 mb-6">
        <h1 class="py-5 transition text-xl font-bold border-b border-gray-100 mb-10">Digital Identity</h1>
           <img src="../../assets/img/digital-identity.png"/>
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
              <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
               Public View Key
              </label>
              <p class="break-words text-sm">
                MIIBfDCCASGgAwIBAgIQY0CXerxuM+EhTbpVxxLRKjAKBggqhkjO
              </p>
          </div>
          <div class="mb-6 bg-gray-100 p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
               Public Access Key
              </label>
              <p class="break-words text-sm">
                MIIBfDCCASGgAwIBAgIQY0CXerxuM+EhTbpVxxLRKjAKBggqhkjO
              </p>
          </div>
          <div class="mb-6 bg-gray-100 p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
               Certificate
              </label>
              <p class="break-words text-xs">
                ----BEGIN CERTIFICATE-----
                MIIBfDCCASGgAwIBAgIQY0CXerxuM+EhTbpVxxLRKjAKBggqhkjOPQQDAjAcMRow
                GAYDVQQDExFTbWFsbHN0ZXAgUm9vdCBDQTAeFw0xODExMDIyMzU0MTNaFw0yODEw
                MzAyMzU0MTNaMBwxGjAYBgNVBAMTEVNtYWxsc3RlcCBSb290IENBMFkwEwYHKoZI
                zj0CAQYIKoZIzj0DAQcDQgAEEGa7ZeL4WVIfPFDS7glJkIVsITVQgjfyz+AhcYaS
                rkJZlWOGZ60br9uE/wEfUcX1zavrX1Wz+bSJzTvT0AVBNqNFMEMwDgYDVR0PAQH/
                BAQDAgGmMBIGA1UdEwEB/wQIMAYBAf8CAQEwHQYDVR0OBBYEFNCKTrwMgZ5/VIQ6
                jkM153xFN2mDMAoGCCqGSM49BAMCA0kAMEYCIQCRA4EdlTTMhs2Zd1cT75ZgxeGa
                mjVPl1vqBxLkHqEO+QIhAPKVm7E452ZBe2o5rQRxGwa94MI+CyuEIH9md3nTgWWX
                <br/>-----END CERTIFICATE-----
            </p>
           </div>
           <div class="mb-6 bg-gray-100 p-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
              Private Key
              </label>
              <p class="break-words text-xs">
               <button type="submit" class="text-sm transition group relative flex justify-center py-2 px-10 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg class="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                  </span> Request Secure Access
              </button>
            </p>
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
}
</script>

<style lang="scss" scoped>

</style>

