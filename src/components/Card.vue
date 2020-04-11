<template>
  <section class="card-section">
    <div class="header">
      <h2>Card</h2>
      <langSelect class="mobile-none"></langSelect>
    </div>
    <div class="card-wrapper">
      <div class="card-item active">
        <div class="card-name">Дебетовая карта</div>
        <div class="card-number">
          <span>1245</span>
          <span>34**</span>
          <span>****</span>
          <span>1245</span>
        </div>
        <button class="card-button" @click="showModalCardReplenish = true">Пополнить</button>
      </div>
      <div class="card-item">
        <div class="card-name">Дебетовая карта</div>
        <div class="card-number">
          <span>1245</span>
          <span>34**</span>
          <span>****</span>
          <span>1245</span>
        </div>
        <button class="card-button" @click="showModalCardActivate = true">Активировать</button>
      </div>

<!--      card replenish modal-->

      <div class="overlay" v-bind:class="{ active: showModalCardReplenish }" @click="showModalCardReplenish = false"></div>
      <div class="modal" v-if="showModalCardReplenish">
          <button class="modal-close" @click="showModalCardReplenish = false">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1L16 15.5" stroke="#006B5E"/>
              <path d="M15.5 1L0.999999 15.5" stroke="#006B5E"/>
            </svg>
          </button>
          <div class="form-caption">Personal Information</div>
          <form action="#" class="modal-form">
            <div class="input-box">
              <select name="select-btc" class="select-btc">
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
            <div class="input-box btc-address">
              <input type="text" value="846ogjs38o45sLKHLJHj439ge">
              <span>BTC адресс кошелька</span>
            </div>
            <div class="qr">
              <img src="../assets/img/qr.png" alt="">
            </div>
            <div class="attention">
              <div class="caption">Важно</div>
              <p>Пожалуйста, отправляйте только BTC на этот адрес. Время обработки может быть разным.</p>
            </div>
            <div class="button-primary button-modal">ok</div>
          </form>
        </div>


      <!--      card activate modal-->
      <div class="overlay" v-bind:class="{ active: showModalCardActivate }" @click="showModalCardActivate = false"></div>
      <div class="modal" v-if="showModalCardActivate">
        <button class="modal-close" @click="showModalCardActivate = false">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1L16 15.5" stroke="#006B5E"/>
            <path d="M15.5 1L0.999999 15.5" stroke="#006B5E"/>
          </svg>
        </button>
        <div class="form-caption">Активация карты</div>
        <form action="#" class="modal-form">
          <div class="input-box">
            <input type="email" placeholder="Email">
          </div>
          <div class="input-box">
            <input type="text"  v-mask="modalPhone" v-model="myInputModel3" placeholder="Phone">
          </div>
          <div class="button-primary button-modal">ok</div>
        </form>
      </div>


    </div>
  </section>
</template>

<script>
  import { VueMaskDirective } from 'v-mask'
  Vue.directive('mask', VueMaskDirective);
export default {

  data() {
    return {
      showModalCardReplenish: false,
      showModalCardActivate: false,
      myInputModel3: '',
      modalPhone: '+# (###) ###-####'
    };
  }
};
</script>

<style lang="scss" scoped>
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .card-item {
    width: 340px;
    height: 195px;
    background-color: #F5F5F5;
    box-shadow: 5px 5px 10px rgba(40, 170, 154, 0.2);
    border-radius: 12px;
    padding: 24px;
    box-sizing: border-box;
    margin-right: 40px;
    margin-bottom: 40px;
    .card-name {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 2.2;
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: 20px;
    }
    .card-number {
      width: 100%;
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 1.4;
      color: rgba(0, 0, 0, 0.8);
      opacity: 0.8;
      display: flex;
      justify-content: space-between;
    }
    .card-button {
      padding: 10px 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.03em;
      color: #FFFFFF;
      background-color: #28AA9A;
      border-radius: 10px;
      margin-top: 35px;
      border: 1px solid #28AA9A;
    }
    &.active {
      background-color: #23CCB7;
      .card-name {
        color: rgba(0, 0, 0, 0.8);
      }
      .card-number {
        color: rgba(0, 0, 0, 0.5);
      }
      .card-button {
        background-color: transparent;
        border: 1px solid white;
      }
    }
  }

  .overlay {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 107, 94, 0.8);
    display: none;
    &.active {
      display: flex;
    }
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 600px;
    height: auto;
    max-height: 90vh;
    overflow-y: scroll;
    z-index: 9999;
    padding: 20px 30px;
    background-color: #fff;
    border: 1px solid rgba(40, 170, 154, 0.1);
    box-sizing: border-box;
    box-shadow: 0 10px 30px rgba(0, 107, 94, 0.05);
    border-radius: 10px;
  }

  .modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
  }

  .modal-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .qr {
    width: 134px;
    margin-bottom: 40px;
    img {
      width: 100%;
      height: auto;
    }
  }

  .form-caption {
    font-family: 'Montserrat-Regular', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    display: flex;
    align-items: center;
    color: #102724;
    margin: 40px 0;
  }

  .input-box {
    width: 100%;
    margin-bottom: 40px;
    input, .btc-address, select {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid #006B5E;
      box-sizing: border-box;
      border-radius: 4px;
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: rgba(0, 107, 94, 0.7);
      padding: 20px 30px;
      &::placeholder {
        color: rgba(0, 107, 94, 0.7);
      }
    }
  }
  .btc-address {
    position: relative;
    span {
      color: #3FD045;
      font-size: 12px;
      margin-top: 5px;
    }
    &::after {
      content: url("../assets/img/address.png");
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .button-primary.button-modal {
    width: 100%;
  }

</style>
