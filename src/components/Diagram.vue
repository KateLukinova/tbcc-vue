<template>
  <div>
    <div id="chart">
      <canvas id="myChart" height="100%" width="100%" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
  import { Doughnut } from 'vue-chartjs'

  export default {
    extends: Doughnut,
    data() {
      return {

      }
    },
    mounted () {
      this.renderChart({

          datasets: [{
            labels: ['Приватные продажи', 'Продажа на Launchpad', 'Команда и эдвайзеры', 'Экосистема', 'Награды майнерам'],
            data: [10, 20, 23, 10, 47],
            backgroundColor: [
              "#7BDFFF",
              "#00E7FF",
              "#51C0E3",
              "#7BDFFF",
              "#01B0E8"
            ],
            hoverBackgroundColor: [
              "#1BDFF1",
              "#1BD0F1",
              "#1BDFF1",
              "#1BDFF1",
              "#1BDFF1"
            ],
            borderWidth: 0
          }]
      }, {
          responsive: true,
          maintainAspectRatio: false,
          legendCallback: function(chart) {
            var legendHtml = [];
            legendHtml.push('<ul>');
            var item = chart.data.datasets[0];
            for (var i=0; i < item.data.length; i++) {
              legendHtml.push('<li>');
              legendHtml.push('<span class="chart-legend" style="background-color:' + item.backgroundColor[i] +'"></span>');
              legendHtml.push('<span class="chart-legend-label-text">'+ item.labels[i]+' ' + item.data[i] + ' %  </span>');
              legendHtml.push('</li>');
            }

            legendHtml.push('</ul>');
            return legendHtml.join("");
          },
          tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
              label: function(tooltipItems, data) {
                return data.datasets[0].labels[tooltipItems.index] + ' ' + data.datasets[0].data[tooltipItems.index] + '%';
              }
            }
          }
        });

      const HTML = this.$data._chart.generateLegend()
      this.$emit('generated', HTML)
    },
  }
</script>

<style lang="scss" scoped>
  #chart {
    width: 100%;
    height: 100%;
  }
</style>
