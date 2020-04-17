<template>
  <div class="price-chart-item">
    <div class="crypto">
      <img src="../assets/img/cropped-bitcoin.png" alt="">
      <div class="name">
        Bitcoin
        <span>BTC</span>
      </div>
    </div>
    <div class="chart">
      <mini-chart></mini-chart>
    </div>
    <div class="info">
      <div class="value">94.53</div>
      <div class="value-dynamics minus">- 6.06%</div>
    </div>
  </div>
</template>

<script>
  import MiniChart from "./MiniChart.vue";


export default {
  components: {
    MiniChart
  },
  data() {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
  .price-chart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }
  .crypto {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    img {
      margin-right: 10px;
    }
    .name {
      display: flex;
      flex-direction: column;
      font-family: "Montserrat-Bold", sans-serif;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      span {
        color: #D0D0D0;
        font-family: 'Montserrat-Light', sans-serif;
        font-size: 14px;
      }
    }
  }
  .chart {
    width: 50%;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .value {
      font-family: "Montserrat-Bold", sans-serif;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    }
    .value-dynamics {
      font-family: "Montserrat-Regular", sans-serif;
      font-size: 13px;
      line-height: 19px;
      color: #000000;
      &.minus {
        color: #FC1A50;
      }
      &.plus {
        color: #3FD045;
      }
    }
  }

</style>
