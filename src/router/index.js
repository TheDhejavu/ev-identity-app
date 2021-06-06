import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/home.vue'),
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/Faq/faq.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/views/Home/home.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes,
});

export default router;
