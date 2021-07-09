<template>
   <form v-on:submit.prevent class="shadowmd bg-white rounded px-8 pt-6 pb-8 mb-4" autocomplete="off" >
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                Birth  Certificate
              </label>
              <p class="opacity-50 text-sm py-5 max-w-lg"> Click the link below to upload your birth certificate. This is a secure channel!</p>
               <input 
                    type="file"
                    name="birth_certificate"
                    @change="onFileChange"
                    accept="image/*" 
                    class="input-file"
                    hidden
                    id="upload-cert"
                 >
                <div class="flex">
                  <label for="upload-cert" class="text-sm inline-block transition group relative py-2 px-10 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Upload
                  </label>
                  <p 
                    class="p-2 text-sm  -ml-4 pl-5 rounded-md bg-green-100"
                    v-if="$store.getters.identity.birth_certificate != ''"
                  >
                    <i class="uil uil-file-info-alt"></i> {{$store.getters.identity.birth_certificate.name}}
                  </p>
                </div>
          </div>
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                National Identity  Card
              </label>
              <p class="opacity-50 text-sm py-5 max-w-lg"> Click the link below to upload your National Identity  Card. This is a secure channel!</p>
              <input 
                    type="file"
                    name="national_id_card"
                    @change="onFileChange"
                    accept="image/*" 
                    class="input-file"
                    hidden
                    id="upload-national_id_card"
                 >
                <div class="flex">
                  <label for="upload-national_id_card" class="text-sm inline-block transition group relative py-2 px-10 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Upload
                  </label>
                  <p 
                    class="p-2 text-sm  -ml-4 pl-5 rounded-md bg-green-100"
                    v-if="$store.getters.identity.national_id_card != ''"
                  >
                    <i class="uil uil-file-info-alt"></i> {{$store.getters.identity.national_id_card.name}}
                  </p>
                </div>
          </div>
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                Voter's Card
              </label>
              <p class="opacity-50 text-sm py-5 max-w-lg"> Click the link below to upload your  Voter's Card. This is a secure channel!</p>
              <input 
                    type="file"
                    name="voter_card"
                    @change="onFileChange"
                    accept="image/*" 
                    class="input-file"
                    hidden
                    id="upload-voter-card"
                 >
                <div class="flex">
                  <label for="upload-voter-card" class="text-sm inline-block transition group relative py-2 px-10 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Upload
                  </label>
                  <p 
                    class="p-2 text-sm  -ml-4 pl-5 rounded-md bg-green-100"
                    v-if="$store.getters.identity.voter_card != ''"
                  >
                    <i class="uil uil-file-info-alt"></i> {{$store.getters.identity.voter_card.name}}
                  </p>
                </div>
          </div>
          <div class="flex items-center justify-between pt-10">
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
    name: "second-step",
    data() {
      return {}
    },
    methods: {
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        var name = e.target.name
        var file = files[0]
        this.$store.getters.identity[name] = file
      },
    }
}
</script>

<style>

</style>