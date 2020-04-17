<template>
  <div>
    <div id="mini-chart">
      <canvas id="my-mini-chart" height="100%" width="100%" ref="canvas"></canvas>
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
            backgroundColor: 'rgba(123, 223, 255, 0.52)',
            borderColor: '#7BDFFF',
            data: [40, 39, 10, 40, 39, 80, 40],
            pointRadius: 0
          }
        ]
      }, {
        legend: {
          display: false
        },
          responsive: true,
          maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }]
        }
        });
    },
  }
</script>

<style lang="scss" scoped>
  #chart-token {
    width: 100%;
    height: 100px;
  }
</style>
