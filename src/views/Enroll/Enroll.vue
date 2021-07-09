<template>
  <Layout>
      <nav class="max-w-3xl mx-auto px-4 sm:px-12">
        <ul class="hidden md:flex space-x-10">
          <li 
            :class="currentStep =='first' ? 'active' : ''" 
            @click="changeStep('first')"
            class="py-5 transition text-base font-extrabold text-gray-500 hover:text-gray-900"
          >
            <i class="uil uil-user-circle text-xl"></i> Personal Information
          </li>
          <li 
            @click="changeStep('second')"
            :class="currentStep =='second' ? 'active' : ''" 
            class="py-5 transition text-base font-bold text-gray-500 hover:text-gray-900"
          >
            <i class="uil uil-user-circle text-xl"></i> Upload Documents
          </li>
          <li 
            @click="changeStep('last')"
            :class="currentStep =='last' ? 'active' : ''" 
            class="py-5 transition text-base font-bold text-gray-500 hover:text-gray-900"
          >
            <i class="uil uil-webcam"></i> Facial Enrollment
          </li>
        </ul>
      </nav>
      <div class="max-w-3xl mx-auto px-3 sm:px-6">
        <first-step 
          v-show="currentStep == 'first'"
          @next="changeStep('second')"
        />
        <second-step 
          v-show="currentStep == 'second'"
          @next="changeStep('last')"
        />
        <last-step 
          v-show="currentStep == 'last'"
        />
      </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/Default";
import FirstStep from "./components/firstStep/firstStep";
import SecondStep from "./components/secondStep/secondStep";
import LastStep from "./components/lastStep/lastStep";

export default {
  name: "Enroll",
  components: {
    Layout,
    FirstStep,
    SecondStep,
    LastStep
  },
  data() {
    return {
      currentStep: "first",
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
        facial_images: [],
        birth_certificate: "",
        national_id_card: "",
        voter_card: "",
      },
    }
  },
  beforeMount() {
    this.$store.commit("SET_IDENTITY", this.formControls)
  },
  methods: {
    changeStep( new_step ) {
      this.currentStep = new_step
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  @apply text-green-500 border-t-8 border-green-500;
  &:hover {
    @apply text-green-500
  }
}
</style>

