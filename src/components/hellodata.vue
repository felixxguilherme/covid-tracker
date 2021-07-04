<template>
  <div class="hello">
    <bar-chart />
    <div class="" style="margin: 25px 25px;">
      {{ globalTodayCases }}
    </div>
    <div class="" style="margin: 25px 25px;">
      <pre>{{ countries }}</pre>
    </div>
    <div class="" style="margin: 25px 25px;">
      <pre>{{ globalHistorical }}</pre>
    </div>
  </div>
</template>

<script>

import BarChart from '@/components/charts/BarChart.vue'

export default {
  components: {
    BarChart
  },
  name: 'HelloData',
  data () {
    return {
      countries: [],
      globalTodayCases: [],
      globalHistorical: [],
      countryFinal: {
        name: [],
        cases: []
      }
    }
  },

  mounted () {
    this.$store.dispatch('getGlobalTodayStats')
    this.$store.dispatch('getCountriesStats')
    this.$store.dispatch('getGlobalHistoricalData')

    this.countries = this.$store.getters.CountriesStats[0]
    this.globalTodayCases = this.$store.getters.GlobalTodayStats
    this.globalHIstorical = this.$store.getters.GlobalHistoricalStats
    // this.teste = this.countries.map(data => data.country)
    // this.teste2 = this.countries.map(data => data.cases)
  }
}
</script>
