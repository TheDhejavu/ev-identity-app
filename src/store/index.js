import Vue from 'vue';
import Vuex from 'vuex';
import collections from './collections';
import identity from './identity';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    identity,
    collections
  },
});