<template>
  <Layout>
      <div class="flex flex-wrap max-w-4xl m-auto">
        <nav class="w-1/3 pt-8">
        <ul class="p-5">
            <li 
            class="transition text-base font-extrabold text-gray-500 hover:text-gray-900"
          >
            <router-link to="/dashboard/identity" class=" px-3 py-3  block">e-Identity </router-link>
          </li>
          <li 
            class="transition text-base font-extrabold text-gray-500 hover:text-gray-900"
          >
             <router-link to="/dashboard/personal-information" class="px-3 py-3 block">Personal Information </router-link>
          </li>
          <li 
            class="transition text-base font-bold text-gray-500 hover:text-gray-900"
          >
            <router-link to="/dashboard/documents" class="py-3 px-3 block"> Documents </router-link>
          </li>
        </ul>
      </nav>
      <div class="w-2/3">
        <slot/>
      </div>
      </div>
  </Layout>
</template>
<script>
import Layout from "@/layouts/Default";

export default {
  name: "dashboard",
  components: {
    Layout,
  },
}
</script>

<style lang="scss" scoped>
nav {
  .active {
    @apply bg-gray-100 text-black;
  }
}
</style>

