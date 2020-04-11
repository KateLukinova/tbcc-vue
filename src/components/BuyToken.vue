<template>
  <section class="buy-token-section">
    <div class="header">
      <h2>Buy Token</h2>
      <langSelect class="mobile-none"></langSelect>
    </div>
    <div class="place">
      <div class="completed-info">
        <div class="logo">
          <img src="../assets/img/logo-mobile.png" alt="">
        </div>
        <div class="text">
          <div class="caption">TBC - USDtbc</div>
          <div class="status">Завершено</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sem pellentesque urna eget. Diam nunc id.
          </p>
        </div>
      </div>
      <div class="token-box">
        <div class="info-item">
          <span>Цена за токен</span>
          1 TBC = 0.0003234 USDtbc
        </div>
        <div class="info-item">
          <span>Цена за токен</span>
          800,000,000 TBC
        </div>
        <div class="info-item">
          <span>Аллокация на выигрышный билет</span>
          200 USD = 100 USDtbc
        </div>
      </div>
      <div class="icon-box">
        <a href="#">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M14.341 3.579C13.994 3.106 13.51 2.552 12.979 2.021C12.448 1.49 11.894 1.006 11.421 0.659C10.615 0.068 10.224 0 10 0H2.25C1.561 0 1 0.561 1 1.25V14.75C1 15.439 1.561 16 2.25 16H13.75C14.439 16 15 15.439 15 14.75V5C15 4.776 14.932 4.385 14.341 3.579ZM12.271 2.729C12.751 3.209 13.127 3.641 13.405 4H10.999V1.595C11.358 1.873 11.791 2.249 12.27 2.729H12.271ZM14 14.75C14 14.886 13.886 15 13.75 15H2.25C2.115 15 2 14.886 2 14.75V1.25C2 1.115 2.115 1 2.25 1C2.25 1 9.999 1 10 1V4.5C10 4.776 10.224 5 10.5 5H14V14.75Z" fill="#28AA9A"/>
              <path d="M11.5 13H4.5C4.224 13 4 12.776 4 12.5C4 12.224 4.224 12 4.5 12H11.5C11.776 12 12 12.224 12 12.5C12 12.776 11.776 13 11.5 13Z" fill="#28AA9A"/>
              <path d="M11.5 11H4.5C4.224 11 4 10.776 4 10.5C4 10.224 4.224 10 4.5 10H11.5C11.776 10 12 10.224 12 10.5C12 10.776 11.776 11 11.5 11Z" fill="#28AA9A"/>
              <path d="M11.5 9H4.5C4.224 9 4 8.776 4 8.5C4 8.224 4.224 8 4.5 8H11.5C11.776 8 12 8.224 12 8.5C12 8.776 11.776 9 11.5 9Z" fill="#28AA9A"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="#">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M16 6.707C16 3.568 15.081 1.02 13.946 1C13.951 1 13.955 1 13.96 1H12.664C12.664 1 9.62 3.287 5.239 4.184C5.105 4.892 5.02 5.735 5.02 6.707C5.02 7.679 5.105 8.523 5.239 9.23C9.621 10.127 12.664 12.414 12.664 12.414H13.96C13.955 12.414 13.951 12.414 13.946 12.413C15.082 12.393 16 9.846 16 6.706V6.707ZM13.513 11.551C13.366 11.551 13.208 11.399 13.126 11.308C12.929 11.088 12.739 10.746 12.576 10.319C12.213 9.362 12.012 8.08 12.012 6.708C12.012 5.336 12.212 4.053 12.576 3.097C12.738 2.669 12.929 2.327 13.126 2.107C13.207 2.016 13.366 1.864 13.513 1.864C13.66 1.864 13.818 2.016 13.9 2.107C14.097 2.327 14.287 2.669 14.45 3.097C14.813 4.054 15.014 5.336 15.014 6.708C15.014 8.08 14.814 9.363 14.45 10.319C14.288 10.747 14.097 11.089 13.9 11.308C13.819 11.399 13.66 11.551 13.513 11.551ZM3.935 6.707C3.935 5.895 3.995 5.107 4.108 4.377C3.368 4.479 2.718 4.538 1.915 4.538C0.867 4.538 0.867 4.538 0.867 4.538L0 6.017V7.395L0.867 8.874C0.867 8.874 0.867 8.874 1.915 8.874C2.718 8.874 3.368 8.933 4.108 9.035C3.995 8.306 3.935 7.517 3.935 6.705V6.707ZM5.752 10.034L3.752 9.651L5.031 14.675C5.097 14.935 5.355 15.066 5.604 14.966L7.456 14.225C7.705 14.125 7.805 13.851 7.678 13.614L5.752 10.033V10.034ZM13.513 8.574C13.456 8.574 13.395 8.515 13.364 8.48C13.288 8.395 13.215 8.263 13.152 8.099C13.012 7.73 12.935 7.236 12.935 6.707C12.935 6.178 13.012 5.684 13.152 5.315C13.215 5.15 13.288 5.018 13.364 4.934C13.395 4.899 13.456 4.84 13.513 4.84C13.57 4.84 13.631 4.899 13.662 4.934C13.738 5.019 13.811 5.151 13.874 5.315C14.014 5.684 14.091 6.178 14.091 6.707C14.091 7.236 14.014 7.73 13.874 8.099C13.811 8.264 13.738 8.396 13.662 8.48C13.631 8.515 13.57 8.574 13.513 8.574Z" fill="#28AA9A"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>

        </a>
      </div>
    </div>
    <div class="lottery-box">
      <div class="timeline">
        <div class="caption">
          Сроки лотереи
        </div>
        <ul class="ul-step">
          <li><div class="number"><span>1</span></div> <p>Подготовка</p></li>
          <li><div class="number"><span>2</span></div><p>Заявка на билет 12-03-2020</p></li>
          <li><div class="number"><span>3</span></div><p>Лотерея 14-03-2020</p></li>
          <li><div class="number"><span>4</span></div><p>Анонс результатов 14-03-2020</p></li>
        </ul>
      </div>
      <div class="place">
        <div class="place-item-top">
          <div class="lottery-result">
            <div class="caption">Общие результаты лотереи</div>
            <div class="item-box">
              <div class="info-item">
                <span>Кол-во выигрышных билетов:</span>
                2000
              </div>
              <div class="info-item">
                <span>% выигрышных билетов:</span>
                22.57
              </div>
            </div>
          </div>
          <button class="button-primary">Войти</button>
        </div>
        <div class="lottery-result">
          <div class="caption">Номера выиграшных билетов (хвостовые цифры)</div>
          <div class="item-box">
            <div class="info-item">
              <span>1&nbsp;цифра:</span>
              7, 2
            </div>
            <div class="info-item">
              <span>2&nbsp;цифра:</span>
              08, 83
            </div>
            <div class="info-item">
              <span>3&nbsp;цифра:</span>
              435, 474, 711,
              976, 324
            </div>
            <div class="info-item">
              <span>4&nbsp;цифра:</span>
              3649, 8021, 9044,
              4145, 5496, 0546
            </div>
            <div class="info-item">
              <span>5&nbsp;цифра:</span>
              17390, 59413,
              86281, 75210
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {


  data() {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
  .completed-info {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 20px;
    box-sizing: border-box;
    width: 40%;
    border-right: 1px solid rgba(40, 170, 154, 0.1);
    .logo {
      width: 95px;
      min-width: 95px;
      height: 95px;
      background: rgba(40, 170, 154, 0.1);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      margin-bottom: 20px;
      img {
        width: 50px;
      }
    }
    .caption {
      font-family: 'Montserrat-Bold', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #102724;
      margin-bottom: 6px;
    }
    .status {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #3FD045;
    }
    p {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #797979;
      margin-top: 15px;
      max-width: 340px;
    }
  }
  .place {
    display: flex;
    position: relative;
    .icon-box {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: absolute;
      bottom: 15px;
      right: 15px;
      padding: 0;
      a {
        width: max-content;
        min-width: max-content;
        margin: 0;
        margin-top: 15px;
      }
      svg {
        margin-left: 20px;
      }
    }
  }
  .token-box {
    display: flex;
    width: 60%;
    justify-content: space-around;
    align-items: center;
    height: 140px;
    padding-left: 20px;
    box-sizing: border-box;
  }
  .info-item {
    font-family: 'Montserrat-Bold', sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    flex-direction: column;
    letter-spacing: 0.03em;
    color: #102724;
    margin: 0 20px;
    margin-left: 0;
    span {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #797979;
      margin-bottom: 6px;
    }
  }
  .lottery-box {
    display: flex;
    .timeline {
      width: 50%;
    }
    .place {
      width: 50%;
      flex-direction: column;
      .place-item-top {
        display: flex;
        .button-primary {
          max-width: 140px;
          max-height: 48px;
        }
      }
      .lottery-result {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        .caption {
          font-family: 'Montserrat-Bold', sans-serif;
          font-style: normal;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
          letter-spacing: 0.03em;
          color: #00312B;
          margin-bottom: 30px;
        }
        .item-box {
          display: flex;
        }
      }
    }
  }
  .timeline {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    box-sizing: border-box;
    .caption {
      font-family: 'Montserrat-Bold', sans-serif;
      font-style: normal;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #00312B;
      margin-bottom: 30px;
    }
  }
  .ul-step {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 80px;
      .number {
        font-family: 'Montserrat-Bold', sans-serif;
        font-style: normal;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        border-radius: 100%;
        background-color: rgba(0, 231, 255, 0.03);
        position: relative;
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        &::after {
          position: absolute;
          border-radius: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          content: '';
          width: 40px;
          height: 40px;
          background: linear-gradient(180deg, #00E7FF 0%, #01B0E8 100%), rgba(40, 170, 154, 0.2);
        }
      }
      p {
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.03em;
        color: #006B5E;
        margin: 15px 0;
        min-width: 125px;
      }
    }
    &::after {
      content: '';
      width: 100%;
      height: 80px;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(270deg, rgba(0, 231, 255, 0.05) 0%, rgba(0, 231, 255, 0) 100%);
      border-radius: 50px;
    }
  }

  @media (max-width: 1200px) {
    .place {
      flex-direction: column;
    }
    .completed-info {
      width: 100%;
      border-right: none;
    }
    .token-box {
      width: 100%;
    }
  }
  @media (max-width: 640px) {
    .token-box {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 30px;
      padding-left: 0;
    }
    .completed-info {
      flex-direction: column;
    }
  }
</style>
