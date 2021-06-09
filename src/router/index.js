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
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: "/dashboard/identity",
  },
  {
    path: '/dashboard/personal-information',
    name: 'personal-information',
    component: () => import('@/views/Dashboard/PersonalInformation.vue'),
  },
  {
    path: '/dashboard/identity',
    name: 'identity',
    component: () => import('@/views/Dashboard/Identity.vue'),
  },
  {
    path: '/dashboard/documents',
    name: 'documents',
    component: () => import('@/views/Dashboard/Documents.vue'),
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
