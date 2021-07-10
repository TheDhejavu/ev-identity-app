import { getAllCountry } from "@/api";

const defaultState = {
  countries: [],
  errors: [],
};

const actions = {
  ALL_COUNTRY: (context) => {
    getAllCountry()
    .then( (response) => {
      context.commit('SET_ALL_COUNTRY', response.data.data);
    })
    .catch(function (error) {
      console.log(error)
      const message = "Whoops!!!, Something wnet wrong" 
      context.commit('SET_ERRORS', "currency", message);
    })
  },
};

const mutations = {
  SET_ALL_COUNTRY: (state, currency) => {
    state.countries = currency;
  },
};

const getters = {
  countries: (state) => state.countries,
};

export default {
  state: defaultState,
  getters,
  mutations,
  actions,
};
