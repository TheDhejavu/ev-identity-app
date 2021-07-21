<template>
  <div>
    <div class="bg-white shadowmd rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-2xl font-extrabold">Biometric Facial Enrollment</h1>
      <p class="opacity-50 text-lg py-5 max-w-lg">
        Click the button below to start facial capturing and enrollment for your
        digital identity system. It is Secure.
      </p>
      <div class="camera relative">
        <button
          @click="init()"
          v-show="!cameraEnabled"
          class="
            absolute
            z-50
            top-1/2
            text-center
            left-1/4
            transition-group
            w-1/2
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
          <i class="uil uil-webcam"></i>
          Enable Camera
        </button>
        <video autoplay class="feed"></video>
        <button class="snap" v-on:click="takePicture" v-show="cameraEnabled">
          <i class="uil uil-capture text-4xl"></i>
        </button>
      </div>
      <div class="pictures flex flex-wrap" ref="pictures"></div>
    </div>
    <button
      type="submit"
      :disabled="isLoading"
      @click="handleSubmit"
      class="
        transition
        group
        enroll-button
        relative
        w-full
        flex
        justify-center
        py-4
        px-4
        border border-transparent
        font-extrabold
        rounded-md
        text-white text-lg
        bg-green-600
        hover:bg-green-700
        focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-green-500
      "
    >
      <loader :loading="isLoading" size="16px"></loader>
      <span v-if="!isLoading">Complete Enrollment</span>
    </button>
    <sweet-modal icon="success" ref="modal" :title="message"></sweet-modal>
  </div>
</template>

<script>
import { createIdentity } from "@/api";

import Loader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "last-step",
  components: {
    Loader,
  },
  data() {
    return {
      cameraEnabled: false,
      isLoading: false,
      message: "",
    };
  },
  beforeDestroy() {
    this.webCamOff();
  },
  methods: {
    init() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        let constraints = {
          video: {
            width: { min: 600, max: 800 },
            height: { min: 360, max: 800 },
          },
        };
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
          this.videoPlayer = document.querySelector("video");
          this.videoPlayer.srcObject = stream;
          this.webcam = stream;
          this.videoPlayer.play();
          this.cameraEnabled = true;
        });
      }
    },
    webCamOff() {
      if (this.webcam) {
        this.webcam.getTracks().forEach((track) => {
          track.stop();
          this.cameraEnabled = false;
        });
      }
    },
    takePicture() {
      var canvasPicture = document.createElement("canvas");
      canvasPicture.width = 200;
      canvasPicture.height = 200;
      const ctx = canvasPicture.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(
        document.querySelector("video"),
        0,
        0,
        canvasPicture.width,
        canvasPicture.height
      );
      var picture = document.createElement("div");
      picture.className = "picture m-2";

      picture.appendChild(canvasPicture);
      canvasPicture.className = "rounded-2xl shadow-xl";
      this.$refs["pictures"].appendChild(picture);

      this.setImages(canvasPicture.toDataURL("image/png"));
    },
    setImages(dataURL) {
      var binary = atob(dataURL.split(",")[1]);
      var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      var file = new Blob([new Uint8Array(array)], { type: "image/png" });
      this.$store.getters.identity.facial_images.push(file);
    },
    handleSubmit() {
      let formData = new FormData();

      for (const [key, value] of Object.entries(this.$store.getters.identity)) {
        if (key === "facial_images") {
          for (var x = 0; x < value.length; x++) {
            formData.append("facial_images", value[x], `facial_image_${x}.png`);
          }
        } else {
          if (key === "origin" || key === "residence") {
            formData.append(key, JSON.stringify(value));
          } else {
            formData.append(key, value);
          }
        }
      }

      this.isLoading = true;
      createIdentity(formData)
        .then((response) => {
          console.log(response)
          this.$toaster.success(response.data.message);
          this.$router.push("/login");
          var data = response.data.data;
          this.$swal({
            icon: 'success',
            title: '<strong><i class="uil uil-thumbs-up"></i> Successfully Enrolled</strong>',
            html:
              `You have been successfully enrolled and your digital identity information is listed below

              <h2 class="text-left pt-10 pl-5 text-lg font-bold">Basic Information</h5>
              <div class="text-xs text-left  leading-6 bg-green-100 rounded-lg p-5 m-3">
                <strong>Name:</strong> ${data.first_name} ${data.last_name} <br/>
                <strong>Digits:</strong> ${data.digits} <br/>
                <strong>Email Address:</strong> ${data.email} <br/>
                
              </div>
              <h2 class="text-left pl-5 text-lg font-bold">Identity keys</h5>
              <div class="text-xs text-left  leading-6 bg-green-100 rounded-lg p-5 m-3">
                <strong>Public main key:</strong> ${data.wallet.public_main_key} <br/>
                <strong>Public view key:</strong> ${data.wallet.public_view_key} <br/>
                <strong>Digital Certificate:</strong><br/> ${data.wallet.certificate} <br/>
              </div>`,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: "Proceed to Login!"
          })
        })
        .catch((error) => {
          console.log(error.response.data);
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
.camera {
  padding: 25px;
  box-sizing: border-box;
}
.feed {
  display: block;
  width: 100%;
  max-width: 700px;
  box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.35);
  margin: 0 auto;
  background-color: #171717;
  border-radius: 25px;
}
.snap {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: block;
  background-color: transparentize($color: #ffce00, $amount: 0.75);
  border: 1px solid #c7c6c6;
  outline: none;
  margin: 25px auto;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #dc143c;
    border: 1px solid #dc143c;
    color: #fff;
  }
  &:active {
    background-color: darken($color: #ffce00, $amount: 15);
  }
}

.picture {
  padding: 20px;
  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.35);
  canvas {
    display: block;
    width: 100%;
    margin: 0 auto;
    box-shadow: 4px 4px 12px 0px transparentize($color: #17171717, $amount: 0.5);
    border-radius: 25px;
  }
}
.enroll-button:disabled {
  @apply opacity-70 cursor-not-allowed;
  &:hover {
    @apply bg-green-600;
  }
}
</style>