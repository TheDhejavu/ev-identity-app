<template>
    <div>
        <Modal
            :isVisible='isVisible'
            @close='closeModal'
            classNames='amount-modal py-2'
        >
            <div class='p-8 relative'>
                <ModalClose 
                    @click='closeModal' 
                    classNames="absolute block top-2 right-5" 
                />
                <OverlayLoader :visible="assetsLoaded"/> 
                <ValidationObserver  v-slot='{invalid }' ref="form">
                <form class="hero-card__form w-full" @submit.prevent="handleSubmit">
                    <h4 class="text-2xl py-4 font-semibold">Amount</h4>
                     <p class="opacity-50">
                         Enter an amount  - between 
                         <span class="font-semibold">{{ rules.currency }}{{ rules.min_sell_in_fiat | formatAmount}}</span> & 
                         <span class="font-semibold">{{ rules.currency }}{{ rules.max_sell_in_fiat | formatAmount}}</span>
                    </p>
                        <ValidationProvider 
                            :rules='{
                                required: true, 
                                max_value: rules.max_sell_in_fiat,
                                min_value: rules.min_sell_in_fiat
                            }'
                            v-slot='{ errors , changed}' 
                            name='recipient_amount' 
                            ref="recipient_amount"
                            >
                        <div class="form-group my-5" :class="{ 'is-danger': changed && errors[0] }">
                            <label class="text-md mb-2 block">Amount:</label>
                            <div class="flex form-input__wrap bg-gray-primary px-4 py-1 rounded-lg " style="border: 1px solid #E5E9F2;">
                                <input v-model="formControls.amount" class="input text-sm w-2/3 md:w-5/6  lg:w-5/6  xl:w-5/6 bg-gray-primary "  type="text" placeholder='Enter amount'/>
                                <select v-model="formControls.currency" class="input-select my-2 w-1/3  md:w-1/6  lg:w-1/6 xl:w-1/6 bg-white px-2 rounded-lg"  type="text">
                                    <option
                                        v-for="currency in currencies" 
                                        v-bind:key="currency.id"
                                        :value="currency.id"
                                    > 
                                        {{ currency.fiat_symbol }} 
                                    </option>
                                </select>
                            </div>
                            <transition name="fade">
                                <span v-show="changed && errors" class="form-feedback is-danger">{{ errors[0] }}</span>
                            </transition>
                        </div>
                    </ValidationProvider>
                    <div class="text-xs leading-6 opacity-50">
                        <span class="font-semibold">
                            Note:</span> While FastTrack does not charge fees, the external wallet service you 
use might charge additional fees. This method has a - transaction limit.
                    </div>
                    <div class="form-group py-4">
                        <BaseButton
                            color="#FFCE00"
                            buttonClasses="m-2"
                            kind="filled"
                            :disabled="invalid"
                            :loading="loading"
                        >
                            Continue
                        </BaseButton>
                    </div>
                </form>
                </ValidationObserver>
            </div>
        </Modal>
        <SendMoneyModal
            :isVisible="isSendMoneyModalVisible"
            :data="sendData"
            @close="toggleSendMoneyModal(false)"
        />
    </div>
</template>

<script>
import Modal from "./Modal.vue";
import SendMoneyModal from "./SendMoneyModal";
import ModalClose from "../Icons/ModalClose";
import {  tradeRule, getRate } from "@/api";
import { formatAmount } from '@/utils/number';
import OverlayLoader from "@/components/OverlayLoader/OverlayLoader";
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import axios from "axios";

export default {
  filters: { formatAmount },
    name: "amount-modal",
    components: {
        BaseButton: () =>
            import('@patricia_engineering/patricia-ui-components')
                .then(m => m.BaseButton)
                .catch(),
        Modal,
        SendMoneyModal,
        ModalClose,
        OverlayLoader,
        ValidationProvider,
        ValidationObserver,
    },
    props: {
        isVisible: {
        type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            formControls: {
                amount: "",
                coin: "",
                currency: ""
            },
            loading: false,
            isSendMoneyModalVisible: false,
            coins: this.$store.getters.coins,
            currencies: this.$store.getters.currency,
            sendData: {},
            networkRate: {},
            rules: {
                currency: "₦",
                max_buy_in_fiat: 0,
                max_sell_in_fiat: 0,
                min_buy_in_fiat: 0,
                min_sell_in_fiat: 0,
                loading: true,
            },
            getRateRequestSource: null
        }
    },
    mounted() {
        this.getRules();
    },
    computed: {
        assetsLoaded() {
            return this.$store.getters.assetsLoaded !== 3 || this.rules.loading === true;
        }
    },
    watch: {
        "$store.getters.coins": function(data) {
            this.coins = data;
            if(this.coins.length > 0){
                this.formControls.coin = this.coins[0].id
            }
        },
        "$store.getters.currency": function(data) {
            this.currencies = data;
            if(this.currencies.length > 0){
                this.formControls.currency = this.currencies[0].id
            }
        }
    },
    methods: {
        closeModal() {
            this.formControls = {
                ...this.formControls,
                amount: "",
            },
            this.$emit("close");
            if(this.getRateRequestSource != null) {
                this.getRateRequestSource.cancel();
            }
        },
        toggleSendMoneyModal(bool) {
            this.isSendMoneyModalVisible = bool;
        },
        resetModal() {
            this.$emit("close");
            this.formControls =  {
                ...this.formControls,
                amount: "",
            };
            this.$nextTick(() => {
                this.$refs.form.reset();
            });
        },
        async handleSubmit() {
            const isValid = await this.$refs.form.validate();
            if (isValid) {
                this.loading = true;
                const { coin, currency } = this.getTradeParams();
                const cancelToken = axios.CancelToken.source();
                this.getRateRequestSource = cancelToken

                getRate(coin, currency, cancelToken.token)
                .then( (response) =>{
                    const USD = parseFloat(this.formControls.amount) / response.data.sell_rate
                    const crypto_value = USD / response.data.usd_sell_rate;
                    this.sendData = {
                        "crypto_id": this.formControls.coin,
                        "country_id": this.formControls.currency,
                        "amount_in_crypto": crypto_value,
                    };
                    this.toggleSendMoneyModal(true);
                    this.resetModal();
                })
                .catch( (error)=> {
                    if (axios.isCancel(error)) return;

                    const message = error.response.data.error || "Whoops!! something went wrong";
                    this.$toaster.error(message);
                }).finally(()=> {
                    this.loading =  false;
                })
            }
        },
        getRules(){
            const { coin, currency } = this.getTradeParams();
            tradeRule(coin, currency)
            .then( (response) => {
                this.rules = response.data
                this.rules.currency = (this.rules.currency == "Naira") ? "₦" : "$";
            })
            .catch(function () {})
            .finally( () => {
                this.rules.loading = false;
            });
        },
        getTradeParams(){
            // let coin = this.coins.filter( 
            //     coin => this.formControls.coin == coin.id 
            // )[0]
            // coin = coin.symbol.toLowerCase();

            // let currency = this.currencies.filter( 
            //     currency => this.formControls.currency == currency.id 
            // )[0]
            // currency = currency.fiat_symbol.toLowerCase();

            return {coin: "btc", currency: "ngn"}
        },
    }
};
</script>
<style lang="scss">
.amount-modal {
  max-width: 500px;
}
</style>
