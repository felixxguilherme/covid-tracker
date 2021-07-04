<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import LineChart from '../../mixins/LineChart.js'

export default {
  components: {
    LineChart
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
