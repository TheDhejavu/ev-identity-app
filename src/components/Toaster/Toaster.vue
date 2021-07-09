<template>
    <div class="toaster-container">
        <transition-group
           name="slide"
            enter-active-class="animated quick bounceInRight"
            leave-active-class="animated quick  bounceOutRight"
        >
        <div :class="[t.theme, 'toaster flex']" v-for='t in toasters' :key='t.key'>
            <span :class="[t.icon, 'icon']"></span>
            <span class="message pl-5">{{ t.message }} </span>
            <button class="btn btn-close absolute top-2 right-0" @click="remove(t)"><i class='uil uil-times'></i></button>
        </div>
    </transition-group>
    </div>
</template>
<script>
import shortId from 'shortid';

export default {
  props: {
    timeout: {
      type: Number,
      default: 5000,
    },
  },
  methods: {
    success(message, option = {}) {
        this.add(message, { theme: 'success', timeout: option.timeout });
    },
    info(message, option = {}) {
        this.add(message, { theme: 'info', timeout: option.timeout });
    },
    warning(message, option = {}) {
        this.add(message, { theme: 'warning', timeout: option.timeout });
    },
    error(message, option = {}) {
        this.add(message, { theme: 'error', timeout: option.timeout });
    },
    setIcon() {
        return 'uil uil-bell';
    },
    add(message, { theme, timeout }) {
      if (!this.$parent) {
        this.$mount();
        document.body.appendChild(this.$el);
      }
      const icon = this.setIcon(theme);
      const toast = { message, theme, icon, key: shortId.generate() };
      this.toasters.push(toast);
      setTimeout(() => this.remove(toast), timeout || this.timeout);
    },
    remove(toast) {
      const i = this.toasters.indexOf(toast);
      if (i >= 0) {
        this.toasters.splice(i, 1);
      }
    },
  },
  data() {
    return {
      toasters: [],
    };
  },
};
</script>

<style lang="scss">

.toaster-container{
    position: fixed;
    bottom: 50px;
    right: 0;
    z-index: 99999;
    width: 300px;
    padding-left: 10px;
    padding-right :10px;
    .toaster{
        margin-bottom:20px;
        box-shadow:0 4px 8px 0 rgba(0,0,0,0.07);
        border-radius:5px;
        width:260px;
        min-height:50px;
        position:relative;
        padding:10px;
        transition: transform .3s ease-out;
        transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1);
        transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1);
        transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1), -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1);
        transition: all 0.3s cubic-bezier(0, 0, 0.21, 1);
        .icon{
            padding:11px 10px;
            border-radius:100%;
            position:relative;
            display:block;
            color:#fff;
            background:rgba(0,0,0,0.09);
            border:none;
            border-radius:100%;
            display:none;
        }
        .message{
            font-size:0.8rem;
            padding:3px;
            padding-top:7px;
            line-height:1.1rem;
            letter-spacing:0.01rem;
            color:#fff;
            font-weight: 500;
        }
        .btn-close{
            // background:rgba(0,0,0,0.09);
            border:none;
            border-radius:100%;
            // top:0;
            // right:0;
            padding:4px 3px;
            color:#fff;
            box-shadow:none;
        }
        &.success {
            background: #4CAF50;
        }

        &.error {
            background: #F44336;
        }

        &.info {
            background: #3F51B5;
        }

    }

}
</style>
