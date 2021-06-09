<template>
   <div class="bg-white shadowmd rounded px-8 pt-6 pb-8 mb-4">
       <h1 class="text-2xl font-extrabold">Facial Enrollment</h1>
        <p class="opacity-50 text-lg py-5 max-w-lg"> Click the link below to start facial scanning and enrollment for your digital identity system. It is Secure.</p>
       <button type="submit" @click="$emit('next')" class="transition group relative w-full flex justify-center py-4 px-4 border border-transparent font-extrabold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Open Camera
       </button>
   </div>
</template>

<script>
export default {
    name: "last-step"
}
</script>

<style>

</style>