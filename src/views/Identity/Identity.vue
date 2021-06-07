<template>
  <Layout>
      <div class="max-w-2xl mx-auto px-3 sm:px-6">
        <div class="shadow-md p-5 mb-6">
            <h1 class="py-5 transition text-base font-medium text-gray-500 hover:text-gray-900">Personal Information</h1>
        </div>
        <div class="shadow-md p-5 mb-6">
          <h1 class="py-5 transition text-base font-medium text-gray-500 hover:text-gray-900">Documents</h1>
        </div>
        <div class="shadow-md p-5 mb-6">
          <h1 class="py-5 transition text-base font-medium text-gray-500 hover:text-gray-900">Facial Enrollment</h1>
        </div>
      </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/Default";

export default {
  name: "Identity",
  components: {
    Layout,
  },
}
</script>

<style lang="scss" scoped>

</style>

