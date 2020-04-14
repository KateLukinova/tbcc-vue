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
        labels: ['10', '11', '12', '13', '14', '15', '16'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(16, 16, 16, 0)',
            borderColor: '#7BDFFF',
            data: [40, 39, 10, 40, 39, 80, 40],
            pointRadius: 3,
            lineTension: 0,
          }
        ]
      }, {
          responsive: true,
          maintainAspectRatio: false,

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
