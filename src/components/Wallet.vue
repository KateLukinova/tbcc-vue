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
            <div class="wallet-box">
              <div class="qr">
                <img src="../assets/img/qr.png" alt="">
              </div>
              <div class="input-box wallet-address">
                <span>Wallet address</span>
                <input type="text" value="846ogjs38o45sLKHLJHj439ge">
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
                <path d="M3.772 9.22754H1.39459C1.16805 9.22754 0.984436 9.41115 0.984436 9.6377V13.5898C0.984436 13.8164 1.16805 14 1.39459 14H3.77211C3.99855 14 4.18227 13.8164 4.18227 13.5898V9.6377C4.18216 9.41115 3.99855 9.22754 3.772 9.22754ZM3.36185 13.1797H1.80475V10.0479H3.36195V13.1797H3.36185Z"/>
                <path d="M8.18385 7.01855H5.80634C5.57979 7.01855 5.39618 7.20216 5.39618 7.42871V13.5899C5.39618 13.8165 5.57979 14.0001 5.80634 14.0001H8.18385C8.41029 14.0001 8.59401 13.8165 8.59401 13.5899V7.42871C8.59401 7.20216 8.41029 7.01855 8.18385 7.01855ZM7.7737 13.1798H6.21649V7.83887H7.7737V13.1798Z"/>
                <path d="M12.5957 3.68213H10.2183C9.99171 3.68213 9.80811 3.86574 9.80811 4.09229V13.5899C9.80811 13.8164 9.99171 14 10.2183 14H12.5957C12.8222 14 13.0058 13.8164 13.0058 13.5899V4.09229C13.0058 3.86574 12.8222 3.68213 12.5957 3.68213ZM12.1856 13.1797H10.6284V4.50233H12.1856V13.1797Z"/>
                <path d="M1.42177 5.15664C1.48607 5.15664 1.55133 5.14147 1.61232 5.10943L5.8961 2.85678L7.60124 3.74075C7.72354 3.80419 7.86955 3.80195 7.98982 3.73477L11.7886 1.61499L11.6425 2.00058C11.5621 2.21238 11.6687 2.44918 11.8805 2.52951C11.9284 2.54756 11.9775 2.55621 12.0258 2.55621C12.1914 2.55621 12.3473 2.45527 12.4095 2.29132L12.9525 0.858653C12.9729 0.80482 12.9824 0.739772 12.9778 0.68156C12.9739 0.623027 12.9576 0.564494 12.9272 0.509914C12.8572 0.384517 12.7313 0.31039 12.5981 0.300884L11.1285 0.00800645C10.9064 -0.0363203 10.6903 0.107875 10.6461 0.330043C10.6018 0.552211 10.746 0.768184 10.9682 0.812511L11.392 0.896892L7.78282 2.91093L6.08355 2.02995C5.96446 1.96821 5.82261 1.96864 5.70395 2.03112L1.23047 4.38333C1.02998 4.48886 0.952969 4.73677 1.05839 4.93725C1.13177 5.07685 1.27426 5.15664 1.42177 5.15664Z"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            График портфеля
          </a>
          <a href="#" class="button-light" @click="showModalWalletForm = true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 1.75H8.75C8.5085 1.75 8.3125 1.946 8.3125 2.1875C8.3125 2.429 8.5085 2.625 8.75 2.625H10.5C10.9826 2.625 11.375 3.01744 11.375 3.5V10.5C11.375 10.9826 10.9826 11.375 10.5 11.375H3.5C3.01744 11.375 2.625 10.9826 2.625 10.5V3.5C2.625 3.01744 3.01744 2.625 3.5 2.625H5.25C5.4915 2.625 5.6875 2.429 5.6875 2.1875C5.6875 1.946 5.4915 1.75 5.25 1.75H3.5C2.53509 1.75 1.75 2.53509 1.75 3.5V10.5C1.75 11.4649 2.53509 12.25 3.5 12.25H10.5C11.4649 12.25 12.25 11.4649 12.25 10.5V3.5C12.25 2.53509 11.4649 1.75 10.5 1.75Z"/>
              <path d="M6.56248 9.00638L5.55929 8.00319C5.38844 7.83234 5.11151 7.83234 4.94066 8.00319C4.76982 8.17403 4.76982 8.45097 4.94066 8.62181L6.69066 10.3718C6.77619 10.4573 6.88798 10.5 6.99998 10.5C7.11198 10.5 7.22376 10.4573 7.30929 10.3718L9.05929 8.62181C9.23013 8.45097 9.23013 8.17403 9.05929 8.00319C8.88844 7.83234 8.61151 7.83234 8.44066 8.00319L7.43748 9.00638V3.9375C7.43748 3.696 7.24148 3.5 6.99998 3.5C6.75848 3.5 6.56248 3.696 6.56248 3.9375V9.00638Z"/>
            </svg>
            Ввести
          </a>
          <a href="#" class="button-light">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 12.25L5.25 12.25C5.4915 12.25 5.6875 12.054 5.6875 11.8125C5.6875 11.571 5.4915 11.375 5.25 11.375L3.5 11.375C3.01744 11.375 2.625 10.9826 2.625 10.5L2.625 3.5C2.625 3.01744 3.01744 2.625 3.5 2.625L10.5 2.625C10.9826 2.625 11.375 3.01744 11.375 3.5L11.375 10.5C11.375 10.9826 10.9826 11.375 10.5 11.375L8.75 11.375C8.5085 11.375 8.3125 11.571 8.3125 11.8125C8.3125 12.054 8.5085 12.25 8.75 12.25L10.5 12.25C11.4649 12.25 12.25 11.4649 12.25 10.5L12.25 3.5C12.25 2.53509 11.4649 1.75 10.5 1.75L3.5 1.75C2.5351 1.75 1.75 2.53509 1.75 3.5L1.75 10.5C1.75 11.4649 2.53509 12.25 3.5 12.25Z"/>
              <path d="M7.43753 4.99362L8.44071 5.99681C8.61156 6.16766 8.88849 6.16766 9.05934 5.99681C9.23018 5.82597 9.23018 5.54903 9.05934 5.37819L7.30934 3.62819C7.22381 3.54266 7.11203 3.5 7.00003 3.5C6.88803 3.5 6.77624 3.54266 6.69071 3.62819L4.94071 5.37819C4.76987 5.54903 4.76987 5.82597 4.94071 5.99681C5.11156 6.16766 5.38849 6.16766 5.55934 5.99681L6.56253 4.99362L6.56252 10.0625C6.56252 10.304 6.75852 10.5 7.00002 10.5C7.24152 10.5 7.43752 10.304 7.43752 10.0625L7.43753 4.99362Z"/>
            </svg>
            Вывести
          </a>
        </div>
      </div>
      <div class="score-box">
          <div class="caption">Balance</div>
          <div class="score-value">1.4545741 TBC</div>
          <span>~ 16734.34 USD</span>
      </div>
    </div>
<!--    <div class="place tbc-table">-->
<!--      <div class="tbc-table-item">-->
<!--        <div class="name">-->
<!--          TBC-->
<!--          <span>TBC</span>-->
<!--        </div>-->
<!--        <div class="tbc-table-value">-->
<!--          158.018-->
<!--          <span>~564.87 $</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="divider"></div>-->
<!--      <div class="tbc-table-item">-->
<!--        <div class="name">-->
<!--          TBC-->
<!--          <span>TBC</span>-->
<!--        </div>-->
<!--        <div class="tbc-table-value">-->
<!--          158.018-->
<!--          <span>~564.87 $</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="divider"></div>-->
<!--      <div class="tbc-table-item">-->
<!--        <div class="name">-->
<!--          TBC-->
<!--          <span>TBC</span>-->
<!--        </div>-->
<!--        <div class="tbc-table-value">-->
<!--          158.018-->
<!--          <span>~564.87 $</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="divider"></div>-->
<!--      <div class="tbc-table-item">-->
<!--        <div class="name">-->
<!--          TBC-->
<!--          <span>TBC</span>-->
<!--        </div>-->
<!--        <div class="tbc-table-value">-->
<!--          158.018-->
<!--          <span>~564.87 $</span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="place table">
      <div class="table-container">

        <table class="table">
          <thead>
          <tr>
            <th v-for="(column, index) in columns">
              <a href="#" v-on:click="table.sortColumn = index">{{ column }}</a>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="row in paginatedRows">
            <td v-for="(column, index) in row" :class="index === 7 ? getStatusClass(column) : ''">
              {{ column }}
            </td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>

    <div class="table-settings">
      <div class="form-group">
        <span>Показывать</span>
        <select v-model="table.rowsPerPage" class="form-control">
          <option>5</option>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
      <div class="pagination-table-box">

        <button class="pagination-button prev" @click="prevPageTable">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1L1 8L8 15" stroke="#006B5E"/>
          </svg>
        </button>

        <ul class="pagination" v-if="pagination > 1">
          <li v-for="p in pagination" class="page-item" v-bind:class="{ active : p == table.currentPage }">
            <div class="page-link" v-on:click="table.currentPage = p" >{{ p }}</div>
          </li>
        </ul>

        <button class="pagination-button next" @click="nextPageTable">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 15L8 8L1 0.999999" stroke="#006B5E"/>
          </svg>
        </button>

      </div>
    </div>




    <!--      wallet form-->

    <div class="overlay" v-bind:class="{ active: showModalWalletForm }" @click="showModalWalletForm = false">
      <div class="modal" v-if="showModalWalletForm">
        <button class="modal-close" @click="showModalWalletForm = false">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1L16 15.5" stroke="#006B5E"/>
            <path d="M15.5 1L0.999999 15.5" stroke="#006B5E"/>
          </svg>
        </button>
        <div class="form-caption">Отправить TBC</div>
        <form action="#" class="modal-form">
          <div class="form-row">
            <div class="input-box input-box-select">
              <label for="select-btc">Валюта</label>
              <select name="select-btc" class="select-btc" id="select-btc">
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
            <div class="input-box input-box-where-from">
              <label for="where-from-btc">Откуда</label>
              <select name="where-from-btc" class="where-from-btc" id="where-from-btc">
                <option value="Мой (1.4545741 BTC)">Мой (1.4545741 BTC)</option>
                <option value="Мой (1.4545741 BTC)">Мой (1.4545741 BTC)</option>
                <option value="Мой (1.4545741 BTC)">Мой (1.4545741 BTC)</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="input-box input-box-where-to">
              <label for="where-to-btc">Куда</label>
              <input type="text" placeholder="Вставь или отсканируй" id="where-to-btc">
            </div>
            <div class="qr">
              <img src="../assets/img/qr.png" alt="">
            </div>
          </div>
          <div class="form-row">
            <div class="input-box input-box-amount">
              <label for="amount">Сумма</label>
              <input type="text" value="21339.45 USD" id="amount">
            </div>
            <span class="equally">=</span>
            <div class="input-box input-box-amount">
              <label for="amount-btc">Куда</label>
              <input type="text" value="3 BTC" id="amount-btc">
            </div>
          </div>
          <div class="input-box">
            <label for="comment">Комментарий</label>
            <textarea id="comment"></textarea>
          </div>
          <div class="button-primary button-modal">ok</div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import { VuejsDatatableFactory } from 'vuejs-datatable';
  Vue.use( VuejsDatatableFactory );

  const debug = false;

  var track = (text) => {
    if (debug) {
      console.log(text);
    }
  };

  var colsC = [{ field: "nombre", type: "text", sortable: false }];

  var rowsC = [
    { nombre: "perro", gato: "asd" },
    { nombre: "perro", gato: "asd" }
  ];
export default {

  data() {
    return {
      activetab: '1',
      showModalWalletForm: false,
      table: {
        currentPage: 1,
        rowsPerPage: 10,
        textFilter: "",
        sortColumn: null
      },
      columns: ["Transaction ID", "Сумма", "Валюта", "FEE", "Отправитель", "Получатель", "Время", "Статус"],
      rows: [
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "NO"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "Processing"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],
        ["23423423", "1000", "TBC", "0.3 tbc", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR", "FrbxvTAzvKwqW1E2jPjV1jVf2Bv2yjvmrpkS3htvmtqR",  "07.04.2020, 15:25:17", "OK"],

      ],
      counter: 1
    }
  },
  methods: {
    prevPageTable() {
      if (this.table.currentPage > 1) {
        this.table.currentPage--
      }
    },
    nextPageTable() {
      if (this.table.currentPage < this.pagination) {
        this.table.currentPage++
      }
    },

    resetCurrentPage() {
      this.table.currentPage = 1;
    },

    sortRows(rows, columnIndex) {
      var nRows = [];
      var colIsString = false;

      rows.forEach((row) => {
        if (isNaN(row[columnIndex])) {
          colIsString = true;
          return;
        }
      });

      if (colIsString) {
        console.log("col is alphanumeric");
        nRows = rows.sort((a, b) => {
          if (a[columnIndex] < b[columnIndex]) return -1;
          if (a[columnIndex] > b[columnIndex]) return 1;
          return 0;
        });
      } else {
        console.log("col is numeric");
        nRows = rows.sort((a, b) => {
          return parseInt(a[columnIndex]) - parseInt(b[columnIndex]);
        });
      }

      return nRows;
    },
    getStatusClass(status) {
      switch (status) {
        case 'OK': return 'status-ok';
        case 'NO': return 'status-no';
        case 'Processing': return 'status-processing';
        default: return '';
      }
    },
    filterRows(rows, textFilter, sortColumn) {
      if (textFilter != "") {
        rows = rows.filter((row) => {
          return row.join("").indexOf(textFilter) >= 0;
        });
      }

      if (sortColumn != null) {
        rows = this.sortRows(rows, sortColumn);
      }

      track("filter");
      track(rows);
      return rows;
    },

    // retorna las filas paginadas
    paginateRows(rows, rowsPerPage, currentPage) {
      if (rows.length > 0) {
        let end = rowsPerPage * currentPage;
        let start = end - rowsPerPage;
        rows = rows.slice(start, end);
      }
      track("paginate");
      track(rows);
      return rows;
    },

    getAmountPages(length, limit) {
      track("changed pagination");
      return Math.ceil(length / limit);
    }
  },
  watch: {
    rows() {
      this.resetCurrentPage();
    },
    "table.sortColumn"() {
      console.log(this.table.sortColumn);
    },
    "table.textFilter"() {
      track("st watcher");
      this.resetCurrentPage();
    },
    "table.rowsPerPage"() {
      track("watcher triggered");
      this.resetCurrentPage();
    }
  },
  computed: {
    paginatedRows() {
      track("paginated rows");
      return this.paginateRows(
        this.filteredRows,
        this.table.rowsPerPage,
        this.table.currentPage
      );
    },
    filteredRows() {
      track("filtered rows");
      return this.filterRows(
        this.rows,
        this.table.textFilter,
        this.table.sortColumn
      );
    },
    pagination() {
      return this.getAmountPages(this.filteredRows.length, this.table.rowsPerPage);
    }
  }
}
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
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    padding-left: 10%;
    width: max-content;
    .score-value {
      font-family: 'Montserrat-Bold', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 1;
      letter-spacing: 0.03em;
      color: #006B5E;
      display: flex;
      flex-direction: column;
    }
    .caption {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 15px;
      color: #818181;
    }
    span {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 24px;
      color: #333333;
      margin-top: 15px;
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
  .place.table {
    display: flex;
    flex-direction: column;
  }

  .table-container {
    overflow-x: scroll;
  }
  .table {
    width: 100%;
    thead {
      border-bottom: 1px solid rgba(40, 170, 154, 0.1);
      th {
        max-width: 200px;
        min-width: 100px;
        text-align: center;
        padding-bottom: 24px;
        &:nth-child(2n+3) {
          font-family: 'Montserrat-Bold', sans-serif;
        }
        a {
          color: #111111;
        }
      }
    }
    td {
      max-width: 200px;
      min-width: 100px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 20px 15px;
      box-sizing: border-box;
      &.status-processing {
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #818181;
      }
      &.status-ok {
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #3FD045;
        text-transform: uppercase;
      }
      &.status-no {
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #FC1A50;
        text-transform: uppercase;
      }
    }
  }
  .pagination-table-box {
    display: flex;
    align-items: center;
    .pagination-button {
      background: #FFFFFF;
      border: 1px solid #006B5E;
      box-sizing: border-box;
      border-radius: 10px;
      width: 42px;
      height: 42px;
      &.prev {
        margin-right: 20px;
      }
    }
  }
  .table-settings {
    width: 100%;
    justify-content: space-between;
    display: flex;
    .form-group{
      display: flex;
      align-items: center;
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-size: 16px;
      line-height: 20px;
      color: #102724;
      span {
        margin-right: 15px;
      }
      select {
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #006B5E;
        box-sizing: border-box;
        border-radius: 10px;
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #006B5E;
      }
    }
    ul.pagination {
      display: flex;
      align-items: center;
      .page-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        background: #FFFFFF;
        border: 1px solid #006B5E;
        box-sizing: border-box;
        border-radius: 10px;
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        padding: 10px;
        max-height: 42px;
        min-width: 42px;
        cursor: pointer;
        &:nth-child(n+3) {
          display: none;
        }
        &:nth-last-child(1) {
          display: flex;
        }
        &:nth-child(2) {
          position: relative;
          margin-right: 60px;
          &::after {
            content: '...';
            position: absolute;
            right: -35px;
          }
        }
        div {
          color: #006B5E;
        }
        &.active {
          border: 1px solid rgba(0, 107, 94, 0.4);
          div {
            color: rgba(0, 107, 94, 0.4);
          }
        }
      }
    }
  }
  .wallet-box {
    display: flex;
    align-items: center;
    margin-top: 55px;
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
  }
  .input-box {
    width: calc(100% - 100px);
    max-width: 350px;
    input, .wallet-address {
      background: rgba(255, 255, 255, 0.1);
      border: none;
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
      padding: 20px 0;
      padding-right: 55px;
      min-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      &::placeholder {
        color: rgba(0, 107, 94, 0.7);
      }
    }
    label {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #818181;
      margin-bottom: 7px;
    }
  }
  .wallet-address {
    position: relative;
    span {
      color: #818181;;
      font-size: 14px;
      margin-bottom: 15px;

    }
    &::after {
      content: url("../assets/img/address.png");
      position: absolute;
      right: 20px;
      top: 33px;
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
    max-width: 400px;
    margin-bottom: 40px;
    input, select, textarea {
      background: rgba(255, 255, 255, 0.1);
      border: none;
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
      padding: 0;
      padding-right: 50px;
      &::placeholder {
        color: rgba(0, 107, 94, 0.7);
      }
    }
  }
  .form-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .input-box {
      border: 1px solid #006b5e;
      padding: 10px;
      border-radius: 4px;
    }
    .input-box-select {
      width: 25%;
    }
    .input-box-where-from {
      width: 70%;
    }
  }
  .input-box-where-to {
    width: calc(100% - 100px);
  }
  .qr {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 65px;
    padding: 0 15px;
    box-sizing: border-box;
    border: 1px solid #006B5E;
  }
  .input-box-amount {
    width: 45%;
  }
  .equally {
    height: 86px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    .score-box {
      align-self: normal;
      padding-left: 0;
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
    .score-box {
      .score-value {
        font-size: 30px;
      }
      span {
        font-size: 18px;
      }
    }

    .form-row {
      flex-direction: column;
      .input-box-select {
        width: 100%;
        min-width: 150px;
      }
      .input-box-where-from, .input-box-where-to, .input-box-amount {
        width: 100%;
      }
      .equally {
        margin-bottom: 0;
        height: 10px;
      }
    }
    .table-settings ul.pagination {
      display: none;
    }
  }
</style>
