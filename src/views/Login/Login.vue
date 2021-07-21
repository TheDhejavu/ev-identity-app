<template>
  <Layout>
    <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="@/assets/logo.svg" alt="Logo" />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your identity
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="">
              <label for="did-digits" class="sr-only">11-DID Digits</label>
              <input
                id="did-digits"
                name="did-digits"
                type="text"
                required
                class="
                  bg-white
                  rounded-t-md
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-4
                  py-6
                  border border-gray-200
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-green-500
                  focus:border-green-500
                  focus:z-10
                "
                placeholder="11-DID Digits"
                v-model="formControls.digits"
              />
            </div>
            <div class="">
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                class="
                  bg-white
                  rounded-b-md
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-4
                  py-6
                  border border-gray-200
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-green-500
                  focus:border-green-500
                  focus:z-10
                "
                placeholder="Password"
                v-model="formControls.password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              :disabled="isLoading"
              @click="handleSubmit"
              class="
                login-button
                transition
                group
                relative
                w-full
                flex
                justify-center
                py-4
                px-4
                border border-transparent
                font-extrabold
                rounded-md
                text-white
                bg-green-600
                hover:bg-green-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-green-500
              "
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-green-500 group-hover:text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <loader :loading="isLoading" size="16px"></loader>
              <span v-if="!isLoading">Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/Default";
import { loginIdentity } from "@/api";
import Loader from "vue-spinner/src/PulseLoader.vue";
import { setAuthToken } from "@/helpers/auth";

export default {
  name: "Login",
  components: {
    Layout,
    Loader,
  },
  data() {
    return {
      formControls: {
        digits: "",
        passowrd: "",
      },
      isLoading: false,
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      this.isLoading = true;
      loginIdentity(this.formControls)
        .then((response) => {
          // console.log(response.data)
          this.$store.commit("SET_IDENTITY", response.data.data.identity);
          this.$swal({
            icon: 'success',
            title: `<strong>${response.data.message}</strong>`,
            html:"Welcome back to <strong>identity.app</strong>. ",
            showCloseButton: true,
            focusConfirm: false,
          })
          setAuthToken(response.data.data.access_token);
          this.$router.push("/dashboard/identity");
        })
        .catch((error) => {
         console.log(error);
          var message = "Whoops!! something went wrong"
          if (error.response) {
            if (typeof error.response.data.data !== "undefined") {
              for (const key in error.response.data.data) {
                message   = error.response.data.data[key]
                break;
              }
            } else {
              message = error.response.data.message
            }
          } 
          this.$swal({
            icon: 'error',
            title: `<strong>Authentication Failed.</strong>`,
            html:`${message}`,
            showCloseButton: true,
            focusConfirm: false,
          })
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-button:disabled {
  @apply opacity-70 cursor-not-allowed;
  &:hover {
    @apply bg-green-600;
  }
}
</style>