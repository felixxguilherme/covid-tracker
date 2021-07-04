import { Radar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Radar,
  props: ['chartdata'],
  mixins: [reactiveProp],
  mounted () {
    this.renderChart(this.chartdata)
  }
}
