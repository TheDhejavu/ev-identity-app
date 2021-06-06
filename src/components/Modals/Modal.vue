<template>
  <div class="modal-container">
      <div class="modal-backdrop" v-bind:style="modalBackdropStyle" ></div>
      <div class="modal-container__panel" v-bind:style="modalContainerPanelStyle" @click="close">
        <div
            class="modal"
            role="modal"
            v-bind:style="modalStyle"
            :class="classNames"
            v-on:click.stop
        >
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'modal',
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
        classNames: {
            type: String,
        },
    },
    watch: {
        isVisible(val, isVisible) {
            // if(document.body.style.overflowY == 'hidden') return;
             
            if (this.isVisible) {
                document.body.style.overflowY ='hidden';
            } else {
                document.body.style.overflowY ='scroll';
            }
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
    computed: {
        modalContainerPanelStyle() {
            if (this.isVisible) {
                return {
                   visibility: 'visible',
                   filter: "blur(0px)",
                };
            }
        },
        modalStyle() {
            if (this.isVisible) {
                return {
                    transform: 'scale(1)',
                    opacity: 1,
                    WebkitTransform: 'scale(1)',
                };
            }
        },
        modalBackdropStyle() {
            if (this.isVisible) {
                return {
                    opacity: 0.7,
                    visibility: 'visible',
                };
            }
        },
    },
};
</script>
<style lang="scss">
</style>
