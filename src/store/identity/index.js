import { getCurrentIdentity } from "@/api";

const defaultState = {
  identity: {},
  errors: {},
};

const actions = {
  GET_IDENTITY: (context) => {
    getCurrentIdentity()
    .then( (response) => {
      
      context.commit('SET_IDENTITY', response.data.data);
    })
    .catch(function (error) {
      console.log(error.response.data)
      context.commit('SET_ERRORS', {
        type: "identity",
        data: error.response.data,
      });
      context.commit('SET_IDENTITY', null);
    })
  },
};

const mutations = {
  SET_IDENTITY: (state, payload) => {
    state.identity = payload
  },
  SET_ERRORS: (state, payload) => {
    state.errors = payload
  },
};

const getters = {
  identity: (state) => state.identity,
  errors: (state) => state.errors,
};

export default {
  state: defaultState,
  getters,
  mutations,
  actions,
};