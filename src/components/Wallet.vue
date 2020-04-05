<template>
  <section class="wallet-section">
    <div class="header">
      <h2>Wallet</h2>
      <langSelect class="mobile-none"></langSelect>
    </div>
    <div class="place">
      <div class="tbc-info">
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
        <div class="button-box">
          <a href="#" class="button-light">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M3.772 9.22754H1.39459C1.16805 9.22754 0.984436 9.41115 0.984436 9.6377V13.5898C0.984436 13.8164 1.16805 14 1.39459 14H3.77211C3.99855 14 4.18227 13.8164 4.18227 13.5898V9.6377C4.18216 9.41115 3.99855 9.22754 3.772 9.22754ZM3.36185 13.1797H1.80475V10.0479H3.36195V13.1797H3.36185Z" fill="#006B5E"/>
                <path d="M8.18385 7.01855H5.80634C5.57979 7.01855 5.39618 7.20216 5.39618 7.42871V13.5899C5.39618 13.8165 5.57979 14.0001 5.80634 14.0001H8.18385C8.41029 14.0001 8.59401 13.8165 8.59401 13.5899V7.42871C8.59401 7.20216 8.41029 7.01855 8.18385 7.01855ZM7.7737 13.1798H6.21649V7.83887H7.7737V13.1798Z" fill="#006B5E"/>
                <path d="M12.5957 3.68213H10.2183C9.99171 3.68213 9.80811 3.86574 9.80811 4.09229V13.5899C9.80811 13.8164 9.99171 14 10.2183 14H12.5957C12.8222 14 13.0058 13.8164 13.0058 13.5899V4.09229C13.0058 3.86574 12.8222 3.68213 12.5957 3.68213ZM12.1856 13.1797H10.6284V4.50233H12.1856V13.1797Z" fill="#006B5E"/>
                <path d="M1.42177 5.15664C1.48607 5.15664 1.55133 5.14147 1.61232 5.10943L5.8961 2.85678L7.60124 3.74075C7.72354 3.80419 7.86955 3.80195 7.98982 3.73477L11.7886 1.61499L11.6425 2.00058C11.5621 2.21238 11.6687 2.44918 11.8805 2.52951C11.9284 2.54756 11.9775 2.55621 12.0258 2.55621C12.1914 2.55621 12.3473 2.45527 12.4095 2.29132L12.9525 0.858653C12.9729 0.80482 12.9824 0.739772 12.9778 0.68156C12.9739 0.623027 12.9576 0.564494 12.9272 0.509914C12.8572 0.384517 12.7313 0.31039 12.5981 0.300884L11.1285 0.00800645C10.9064 -0.0363203 10.6903 0.107875 10.6461 0.330043C10.6018 0.552211 10.746 0.768184 10.9682 0.812511L11.392 0.896892L7.78282 2.91093L6.08355 2.02995C5.96446 1.96821 5.82261 1.96864 5.70395 2.03112L1.23047 4.38333C1.02998 4.48886 0.952969 4.73677 1.05839 4.93725C1.13177 5.07685 1.27426 5.15664 1.42177 5.15664Z" fill="#006B5E"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            График портфеля
          </a>
          <a href="#" class="button-light">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 1.75H8.75C8.5085 1.75 8.3125 1.946 8.3125 2.1875C8.3125 2.429 8.5085 2.625 8.75 2.625H10.5C10.9826 2.625 11.375 3.01744 11.375 3.5V10.5C11.375 10.9826 10.9826 11.375 10.5 11.375H3.5C3.01744 11.375 2.625 10.9826 2.625 10.5V3.5C2.625 3.01744 3.01744 2.625 3.5 2.625H5.25C5.4915 2.625 5.6875 2.429 5.6875 2.1875C5.6875 1.946 5.4915 1.75 5.25 1.75H3.5C2.53509 1.75 1.75 2.53509 1.75 3.5V10.5C1.75 11.4649 2.53509 12.25 3.5 12.25H10.5C11.4649 12.25 12.25 11.4649 12.25 10.5V3.5C12.25 2.53509 11.4649 1.75 10.5 1.75Z" fill="#006B5E"/>
              <path d="M6.56248 9.00638L5.55929 8.00319C5.38844 7.83234 5.11151 7.83234 4.94066 8.00319C4.76982 8.17403 4.76982 8.45097 4.94066 8.62181L6.69066 10.3718C6.77619 10.4573 6.88798 10.5 6.99998 10.5C7.11198 10.5 7.22376 10.4573 7.30929 10.3718L9.05929 8.62181C9.23013 8.45097 9.23013 8.17403 9.05929 8.00319C8.88844 7.83234 8.61151 7.83234 8.44066 8.00319L7.43748 9.00638V3.9375C7.43748 3.696 7.24148 3.5 6.99998 3.5C6.75848 3.5 6.56248 3.696 6.56248 3.9375V9.00638Z" fill="#006B5E"/>
            </svg>
            Ввести
          </a>
          <a href="#" class="button-light">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 12.25L5.25 12.25C5.4915 12.25 5.6875 12.054 5.6875 11.8125C5.6875 11.571 5.4915 11.375 5.25 11.375L3.5 11.375C3.01744 11.375 2.625 10.9826 2.625 10.5L2.625 3.5C2.625 3.01744 3.01744 2.625 3.5 2.625L10.5 2.625C10.9826 2.625 11.375 3.01744 11.375 3.5L11.375 10.5C11.375 10.9826 10.9826 11.375 10.5 11.375L8.75 11.375C8.5085 11.375 8.3125 11.571 8.3125 11.8125C8.3125 12.054 8.5085 12.25 8.75 12.25L10.5 12.25C11.4649 12.25 12.25 11.4649 12.25 10.5L12.25 3.5C12.25 2.53509 11.4649 1.75 10.5 1.75L3.5 1.75C2.5351 1.75 1.75 2.53509 1.75 3.5L1.75 10.5C1.75 11.4649 2.53509 12.25 3.5 12.25Z" fill="#006B5E"/>
              <path d="M7.43753 4.99362L8.44071 5.99681C8.61156 6.16766 8.88849 6.16766 9.05934 5.99681C9.23018 5.82597 9.23018 5.54903 9.05934 5.37819L7.30934 3.62819C7.22381 3.54266 7.11203 3.5 7.00003 3.5C6.88803 3.5 6.77624 3.54266 6.69071 3.62819L4.94071 5.37819C4.76987 5.54903 4.76987 5.82597 4.94071 5.99681C5.11156 6.16766 5.38849 6.16766 5.55934 5.99681L6.56253 4.99362L6.56252 10.0625C6.56252 10.304 6.75852 10.5 7.00002 10.5C7.24152 10.5 7.43752 10.304 7.43752 10.0625L7.43753 4.99362Z" fill="#006B5E"/>
            </svg>
            Вывести
          </a>
        </div>
      </div>
     <div class="tbc-chart">
      <div class="tbc-progress-box">
        <div class="tbc-progress-item">
          <div class="period">24ч</div>
          <div class="tbc-progress-value minus">1.94 %</div>
        </div>
        <div class="tbc-progress-item">
          <div class="period">неделя</div>
          <div class="tbc-progress-value minus">1.94 %</div>
        </div>
        <div class="tbc-progress-item">
          <div class="period">месяц</div>
          <div class="tbc-progress-value plus">1.94 %</div>
        </div>
        <div class="tbc-progress-item">
          <div class="period">все время</div>
          <div class="tbc-progress-value plus">1.94 %</div>
        </div>
      </div>
       <div class="chart">
         <img src="../assets/img/chart2.png" alt="">
       </div>
     </div>
    </div>
    <div class="place tbc-table">
      <div class="tbc-table-item">
        <div class="name">
          TBC
          <span>TBC</span>
        </div>
        <div class="tbc-table-value">
          158.018
          <span>~564.87 $</span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="tbc-table-item">
        <div class="name">
          TBC
          <span>TBC</span>
        </div>
        <div class="tbc-table-value">
          158.018
          <span>~564.87 $</span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="tbc-table-item">
        <div class="name">
          TBC
          <span>TBC</span>
        </div>
        <div class="tbc-table-value">
          158.018
          <span>~564.87 $</span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="tbc-table-item">
        <div class="name">
          TBC
          <span>TBC</span>
        </div>
        <div class="tbc-table-value">
          158.018
          <span>~564.87 $</span>
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
  .place {
    display: flex;
  }
  .tbc-info {
    width: 50%;
    border-right: 2px solid rgba(0, 0, 0, 0.1);
    padding-right: 20px;
    box-sizing: border-box;
  }
  .tabs {
    display: flex;
    flex-wrap: wrap;
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
  .tbc-chart {
    width: 50%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
    .tbc-progress-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 25px;
      .tbc-progress-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        .period {
          font-family: 'Montserrat-Regular', sans-serif;

          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          color: #979797;
          margin-bottom: 3px;
          white-space: nowrap;
        }
        .tbc-progress-value {
          min-width: 60px;
          height: 24px;
          padding: 3px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Montserrat-Regular', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #FCFCFC;
          border-radius: 3px;
          &.plus {
            background-color: #29B769;
          }
          &.minus {
            background-color: #EB454F;
          }
        }
      }
    }
  }
  .tbc-table {
    display: flex;
    justify-content: center;
    align-items: center;
    .tbc-table-item {
      width: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 250px;
      .name {
        display: flex;
        flex-direction: column;
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #28AA9A;
        span {
          font-size: 14px;
          color: #D0D0D0;
        }
      }
      .tbc-table-value {
        display: flex;
        flex-direction: column;
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        text-align: right;
        color: #131313;
        span {
          font-size: 14px;
          color: #979797;
        }
      }
    }
    .divider {
      width: 2px;
      height: 85px;
      background-color: rgba(0, 0, 0, 0.1);
      margin: 0 2.5%;
    }
  }
  @media (max-width: 1360px) {
    .tabs a {
      font-size: 14px;
    }
    .score-box {
      .score {
        font-size: 32px;
      }
    }
  }
  @media (max-width: 1200px) {
    .place {
      flex-direction: column;
      .tbc-info {
        width: 100%;
        border-right: none;
        margin-bottom: 30px;
      }
      &.tbc-table {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .tbc-table-item {
          width: 45%;
          margin-bottom: 30px;
        }
      }
      .divider {
        display: none;
      }
    }
  }
  @media (max-width: 640px) {
    .place {
      &.tbc-table {
        .tbc-table-item {
          width: 100%;
          max-width: 100%;
          margin-bottom: 30px;
        }
      }
    }
  }
</style>
