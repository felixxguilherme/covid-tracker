<template>
  <div class="small">
    <bar-chart :chart-data="datacollection"></bar-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import BarChart from '../../mixins/BarChart.js'

export default {
  components: {
    BarChart
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: this.getLabels(),
        datasets: [
          {
            label: 'Casos de Covid',
            backgroundColor: '#f87979',
            data: this.getCases()
          }
        ]
      }
    },
    getLabels () {
      const stats = this.$store.getters.CountriesStats[0]
      const labels = stats.map(el => el.country)
      return labels
    },

    getCases () {
      const stats = this.$store.getters.CountriesStats[0]
      const cases = stats.map(el => el.cases)
      return cases
    }
  }
}
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
