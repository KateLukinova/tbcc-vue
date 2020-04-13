<template>
  <div>
    <div id="chart-token">
      <canvas id="myChartToken" height="100%" width="100%" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    data() {
      return {

      }
    },
    mounted () {
      this.renderChart({

          datasets: [{
            labels: ['10', '11', '12', '13', '14'],
            data: [10, 100, 80, 105, 47],
            backgroundColor: [
              "#7BDFFF"
            ]
          }]
      }, {
          responsive: true,
          maintainAspectRatio: false
        });
    },
  }
</script>

<style lang="scss" scoped>
  #chart-token {
    width: 100%;
    height: 250px;
  }
</style>
