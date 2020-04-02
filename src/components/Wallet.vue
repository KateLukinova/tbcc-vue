<template>
  <section class="wallet-section">
    <div class="header">
      <h2>Wallet</h2>
      <langSelect></langSelect>
    </div>
    <div class="place">
      <div class="tabs">
        <a v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">TBC</a>
        <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">USDtbc</a>
        <a v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]">EUROtbs           </a>
        <a v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]">CHYtbc</a>
      </div>

      <div class="content">
        <div v-if="activetab ==='1'" class="tabcontent">
          <div class="score-box">
            <div class="qr">
              <img src="../assets/img/qr.png" alt="">
            </div>
            <div class="score">
              1.4545741 TBC
              <span>~ 16261.62 USD</span>
            </div>
          </div>
        </div>
        <div v-if="activetab ==='2'" class="tabcontent">
         kjv
        </div>
        <div v-if="activetab ==='3'" class="tabcontent">
          kjkllk
        </div>
        <div v-if="activetab ==='4'" class="tabcontent">
          jkljk
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  data() {
    return {
      activetab: '1'
    };
  }

};
</script>

<style lang="scss" scoped>
  .tabs {
    display: flex;
    a {
      padding: 10px 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.03em;
      color: #28AA9A;
      border-bottom: 2px solid rgba(0, 231, 255, 0.1);
      transition: all 0.5s ease;
      &.active {
        color: #00E7FF;
        border-bottom: 2px solid #00E7FF;
      }
    }
  }
  .score-box {
    display: flex;
    margin-top: 45px;
    .qr {
      width: 67px;
      height: 67px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 25px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .score {
      font-family: 'Montserrat-Bold', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 1;
      letter-spacing: 0.03em;
      color: #333333;
      display: flex;
      flex-direction: column;
      span {
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #818181;
        margin-top: 5px;
      }
    }
  }
</style>
