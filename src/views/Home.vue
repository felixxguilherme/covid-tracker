<template>
  <div class="home">
    <div class="grid grid-4">
      <div class="col-1">
        <infoCard />
      </div>
      <div class="col-1">
        <barchart  />
      </div>
      <div class="col-1">
        <linechart />
      </div>
      <div class="col-1">
        <areachart />
      </div>
      <div class="col-1">
        <piechart />
      </div>
      <div class="col-1">
        <radarchart :labels="getLabels()" :dataset="getCases" />
      </div>
    </div>
    <hellodata />
  </div>
</template>

<script>
// @ is an alias to /src
import hellodata from '@/components/hellodata.vue'
import barchart from '@/components/charts/BarChart.vue'
import linechart from '@/components/charts/LineChart.vue'
import areachart from '@/components/charts/AreaChart.vue'
import piechart from '@/components/charts/PieChart.vue'
import radarchart from '@/components/charts/RadarChart.vue'

import infoCard from '@/components/infoCard.vue'

export default {
  name: 'Home',
  components: {
    hellodata,
    barchart,
    linechart,
    areachart,
    piechart,
    radarchart,
    infoCard
  },

  data () {
    return {
      inputValue: ''
    }
  },

  methods: {
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

<style lang="stylus">

</style>
