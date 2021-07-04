<template>
    <div class="info__card">
        <span>Hoje no Mundo</span>

        {{ this.$store.state.tracker.selectedItem }}

        <select @change="currentVal">
          <option v-for="(country, index) in countriesStats[0]" :key="index" :value="country.country">{{country.country}}</option>
        </select>

        <infoItem :value="currentItem.cases" label="casos totais" color="purple" />
        <infoItem :value="currentItem.todayCases" label="casos reportados hoje" color="lightred" />
        <infoItem :value="currentItem.deaths" label="mortes totais" color="black" />
        <infoItem :value="currentItem.todayDeaths" label="mortes hoje" color="red" />

        <pre>{{ currentItem }}</pre>

    </div>
</template>

<script>

import infoItem from './ui/infoItem.vue'

export default {

  components: { infoItem },
  data () {
    return {
      globalTodayCases: [],
      countriesStats: [],
      currentItem: []
    }
  },
  mounted () {
    this.globalTodayCases = this.$store.getters.GlobalTodayStats[0]
    this.countriesStats = this.$store.getters.CountriesStats
  },

  methods: {
    currentVal (event) {
      const itemFinal = this.countriesStats[0].filter(item => item.country === event.target.value).map(item => item)
      this.currentItem = itemFinal[0]
      this.$store.dispatch('setCurrentItem', this.currentItem)
    }
  }

}
</script>

<style>

</style>
