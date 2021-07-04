import Vue from 'vue'
import Vuex from 'vuex'

import tracker from './modules/covidtracker.js'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tracker: tracker
  },
  plugins: [createPersistedState()]
})
