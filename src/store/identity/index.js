import { getCurrentIdentity } from "@/api";


const defaultState = {
  banks: [],
  coins: [],
  currency: [],
  errors: [],
  assetsLoaded: 0
};

const actions = {
  GET_IDENTITY: (context) => {
    getCurrentIdentity()
    .then( (response) => {
      
      context.commit('SET_IDENTITY', response.data.data);
    })
    .catch(function (error) {
      console.log(error.response.data)
      context.commit('SET_IDENTITY', null);
    })
  },
};

const mutations = {
  SET_IDENTITY: (state, payload) => {
    state.identity =  payload
  },
};

const getters = {
  identity: (state) => state.identity,
};

export default {
  state: defaultState,
  getters,
  mutations,
  actions,
};
