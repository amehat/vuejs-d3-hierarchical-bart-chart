<template>
  <div id="app">
    <h1>Chart 1</h1>
    <hierarchical-bar-chart
      selector=".paf"
    />
    <div class="paf"></div>
    <h1>Chart 2</h1>
    <hierarchical-bar-chart
      selector=".plop"
      :data="NiveauImpactDommage"
      BackgroundColor="green"
      :barLabelWidth="360"
    />
    <div class="plop"></div>
  </div>
</template>

<script>
import HierarchicalBarChart from './components/HierarchicalBarChart';

export default {
  name: 'app',
  components: {
    HierarchicalBarChart,
  },
  data() {
    return {
      NiveauImpactDommage: [
        {
          Name: 'user logger',
          ValueBar: 10,
        },
        {
          Name: 'fail',
          ValueBar: 30,
        },
        {
          Name: 'try',
          ValueBar: 4,
        },
        {
          Name: 'retry login, but retry, but retry, but retry...',
          ValueBar: 50,
        },
        {
          Name: 'user logout',
          ValueBar: 16,
        },
        {
          Name: 'login after logout after login...',
          ValueBar: 78,
        },
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
