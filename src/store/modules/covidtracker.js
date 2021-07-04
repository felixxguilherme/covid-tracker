import axios from 'axios'
import _ from 'lodash'

const tracker = {
  state: {
    selectedItem: [],
    globalTodayStats: [],
    countriesStats: [],
    globalHistoricalStats: [],
    globalBrHistoricalStats: [],
    vaccineStats: [],
    vaccineCountryStats: []
  },

  mutations: {
    LOAD_WORLD_DATA (state, payload) {
      state.globalTodayStats.push(payload)
    },
    LOAD_COUNTRY_DATA (state, payload) {
      state.countriesStats.push(payload)
    },
    LOAD_HISTORICAL_DATA (state, payload) {
      state.globalHistoricalStats.push(payload)
    },
    LOAD_BRHISTORICAL_DATA (state, payload) {
      state.globalBrHistoricalStats.push(payload)
    },
    LOAD_VACCINE_STATS (state, payload) {
      state.vaccineStats.push(payload)
    },
    LOAD_VACCINE_STATS_BYCOUNTRY (state, payload) {
      state.vaccineStats.push(payload)
    },
    SET_CURRENT_ITEM (state, payload) {
      state.selectedItem = payload
    }

  },

  actions: {
    async getGlobalTodayStats ({ commit }) {
      try {
        const res = await axios.get('https://disease.sh/v3/covid-19/all?yesterday=false&allowNull=false')
        commit('LOAD_WORLD_DATA', res.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getCountriesStats ({ commit }) {
      try {
        const res = await axios.get('https://disease.sh/v3/covid-19/countries')
        commit('LOAD_COUNTRY_DATA', res.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getGlobalHistoricalData ({ commit }) {
      try {
        const res = await axios.get('https://disease.sh/v3/covid-19/historical/all')
        commit('LOAD_HISTORICAL_DATA', res.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getBrazilHistoricalData ({ commit }) {
      try {
        const res = await axios.get('https://disease.sh/v3/covid-19/historical/brasil?lastdays=30')
        commit('LOAD_BRHISTORICAL_DATA', res.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getVaccineCoverage ({ commit }) {
      try {
        const res = await axios.get('https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=30&fullData=true')
        commit('LOAD_HISTORICAL_DATA', res.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getVaccineCoverageByCountry ({ commit }) {
      try {
        const res = await axios.get('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30&fullData=true')
        commit('LOAD_VACCINE_STATS_BYCOUNTRY', res.data)
      } catch (error) {
        console.log(error)
      }
    },

    setCurrentItem ({ commit }, item) {
      commit('SET_CURRENT_ITEM', item)
    }
  },
  getters: {
    GlobalTodayStats: (state) => _.cloneDeep(state.globalTodayStats),
    CountriesStats: (state) => _.cloneDeep(state.countriesStats),
    GlobalHistoricalStats: (state) => _.cloneDeep(state.globalHistoricalStats),
    VaccineStats: (state) => _.cloneDeep(state.vaccineStats),
    VaccineCountryStats: (state) => [...state.vaccineCountryStats],
    SelectedItem: (state) => state.selectedItem
  }
}

export default tracker
