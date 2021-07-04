<template>
  <div>
    <radar-chart :chartData="datacollection" />
  </div>
</template>

<script>

import RadarChart from '../../mixins/RadarChart.js'

export default {
  components: { RadarChart },
  data () {
    return {
      datacollection: null
    }
  },
  props: {
    labels: [],
    dataset: [],
    dataset2: []
  },
  mounted () {
    this.datacollection = {
      labels: this.labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: this.dataset
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: this.dataset2
        },
        { responsive: true, maintainAspectRatio: false }
      ]
    }
  }
}
</script>
