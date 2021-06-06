/* eslint-disable */
import Toaster from './Toaster.vue';

Toaster.install = (Vue, options = {}) => {
  Vue.prototype.$toaster = new (Vue.extend(Toaster))({ propsData: options });
  Vue.toaster = Vue.prototype.$toaster;
  if (process.env.NODE_ENV === 'development') window.$toaster = Vue.prototype.$toaster;
};
export default Toaster;
