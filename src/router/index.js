import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: '/identity',
    name: 'identity',
    component: () => import('@/views/Identity/Identity.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '/enroll',
    name: 'enroll',
    component: () => import('@/views/Enroll/Enroll.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/views/Home/Home.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes,
});

export default router;
