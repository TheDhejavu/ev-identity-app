import Vue from 'vue';
import VueRouter from 'vue-router';
import { isAuthenticated } from "@/helpers/auth";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
    meta: {
      page: true,
    },
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
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: '/dashboard/personal-information',
    name: 'personal-information',
    component: () => import('@/views/Dashboard/PersonalInformation.vue'),
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: '/dashboard/identity',
    name: 'identity',
    component: () => import('@/views/Dashboard/Identity.vue'),
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: '/dashboard/documents',
    name: 'documents',
    component: () => import('@/views/Dashboard/Documents.vue'),
    meta: {
      requiresLogin: true,
    },
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


router.beforeEach((to, from, next) => {
  const currentUser = isAuthenticated();
  const requiresLogin = to.matched.some((record) => record.meta.requiresLogin);
  const page = to.matched.some((record) => record.meta.page);
  
  if (page) return next();
  if (requiresLogin && !currentUser) return next('login');
  if (!requiresLogin && currentUser) return next({ path: '/dashboard/identity' });
  
  return next();
});
export default router;
