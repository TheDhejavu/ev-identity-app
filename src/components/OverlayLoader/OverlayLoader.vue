<template>
    <transition name="fade">
        <div v-show="visible" class="overlay-loader absolute top-0 left-0 right-0 bottom-0 ">
            <div class="text-center flex justify-center items-center h-full">
                <loader
                    color="#aaa" 
                    size="15px"
                ></loader>
            </div>
        </div>
    </transition>
</template>

<script>
import Loader from 'vue-spinner/src/PulseLoader.vue';
export default {
    name: "overlay-loader",
    components: {
        Loader
    },
    props: {
        visible: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style lang="scss">
.overlay-loader {
    width: 100%;
    background: rgba(255,255,255,0.8);
    border-radius: 20px;
    z-index: 88;
}
</style>