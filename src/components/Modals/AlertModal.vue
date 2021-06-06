<template>
    <Modal
        :isVisible='isVisible'
        classNames='alert-modal'
        @close='close'
    >
        <header class="modal-header">
            <h4 class="title text-center" v-if="title">{{ title }}</h4>
            <p class="message text-center" v-if="text">{{ text }}</p>
        </header>
         <footer class="modal-footer">
            <div class='modal-footer__panel to-right'>
                <BaseButton 
                    color="#FFCE00"
                    buttonClasses="m-2"
                    kind="filled"
                    :loading='isLoading' 
                    @click='confirm'
                >
                    Confirm
                </BaseButton>
                <BaseButton 
                    color="#dc143c"
                    buttonClasses="m-2"
                    kind="filled"
                    @click='close'
                >
                    Cancel
                </BaseButton>
            </div>
        </footer>
    </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
    name: 'alert',
    components: {
        Modal,
        BaseButton: () =>
            import('@patricia_engineering/patricia-ui-components')
                .then(m => m.BaseButton)
                .catch(),
    },
    data() {
        return {
            title: null,
            text: null,
            confirmEnabled: true,
            isLoading: false,
            onConfirm: () => {},
            isVisible: false,
        };
    },
    methods: {
        close() {
            // method for closing modal
            this.isVisible = false;
        },
        async confirm() {
            this.isLoading = true;
            // we must check if this.onConfirm is function
            if (typeof this.onConfirm === 'function') {
                // run passed function and then close the modal
                this.onConfirm()
                this.isLoading = false;
                this.close();
            } else {
                // we only close the modal
                this.close();
            }
        },

        show(params) {
            if (!this.$parent) {
                this.$mount();
                document.body.appendChild(this.$el);
            }
            setTimeout(() => {
                // making dialog visible
                this.isVisible = true;
                // setting title and text
                this.title = params.title;
                this.text = params.text;
                this.confirmEnabled = params.confirmEnabled;
                // setting callback function
                this.onConfirm = params.onConfirm;
            }, 100);
        },

    },
};
</script>

<style lang='scss'>
.alert-modal {
    max-width:400px;
    top:200px !important;
    .modal-header{
        padding: 30px 5px !important;
    }
}
</style>
