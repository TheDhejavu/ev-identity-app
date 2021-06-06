// we need our modal component
/* eslint-disable */
import AlertModal from './AlertModal.vue';

AlertModal.install = (Vue, options = {}) => {
  Vue.prototype.$AlertModal = new (Vue.extend(AlertModal))({ propsData: options });
  Vue.AlertModal = Vue.prototype.$AlertModal;
  if (process.env.NODE_ENV === 'development') window.AlertModal = Vue.prototype.AlertModal;
};
export default AlertModal;
