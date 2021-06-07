import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from './router';
import store from './store';
import Toaster from './components/Toaster';
import AlertModal from './components/Modals/AlertModal';
// import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false

Vue.use(AlertModal);
Vue.use(Toaster);
new Vue({
    router,
    store,
    render: (h) => (h(App)),
  }).$mount('#app');