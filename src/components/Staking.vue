<template>
  <section class="wallet-section">
    <div class="header">
      <h2>Staking</h2>
      <langSelect class="mobile-none"></langSelect>
    </div>
    <div class="place">
      <div class="supply-info">
        <div class="caption">Circulating Supply</div>
        <div>1 900 000 000</div>
      </div>
      <div class="time-box">
        <div class="caption">Next Distribution</div>
        <Countdown deadline="August 22, 2020"></Countdown>
      </div>
    </div>
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
            <td v-for="(column, index) in row">
              <template v-if="index === 4">
                <button :class="column.isActive ? 'active-button' : ''">{{ column.button }}</button>
              </template>
              <template v-else>
                {{ column }}
              </template>
            </td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>
  </section>
</template>

<script>
  import Countdown from 'vuejs-countdown'

  import { VuejsDatatableFactory } from 'vuejs-datatable';
  Vue.use( VuejsDatatableFactory );


  const debug = false;

  var track = (text) => {
    if (debug) {
      console.log(text);
    }
  };

export default {

  components: {
    Countdown
  },
  data() {
    return {
      activetab: '1',
      table: {
        currentPage: 1,
        rowsPerPage: '100',
        textFilter: "",
        sortColumn: null
      },
      columns: ["Rank", "Node Name", "Node Category", "Yield", "Stake"],
      rows: [
        ["1", " ", "Exchange", "15%-16%", {button: "JOIN", isActive: true}],
        ["2", " ", "Exchange", "15%-16%", {button: "JOIN", isActive: false}],
        ["3", " ", "Exchange", "15%-16%", {button: "JOIN", isActive: false}],
      ],
    }
  },
  methods: {

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
        case 'join': return 'join';
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
  .supply-info {
    width: 50%;
    padding-right: 20px;
    box-sizing: border-box;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: 0.03em;
    color: #333333;
    .caption {
      margin-bottom: 35px;
      font-size: 20px;
      letter-spacing: 0.03em;
      color: #28AA9A;
    }
  }
  .time-box {
    width: 50%;
    padding-right: 20px;
    box-sizing: border-box;
    font-family: 'Montserrat-Bold', sans-serif;
    .caption {
      margin-bottom: 20px;
      font-size: 20px;
      letter-spacing: 0.03em;
      color: #28AA9A;
    }
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
        a {
          font-family: 'Montserrat-Bold', sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.03em;
          color: #28AA9A;
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
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.03em;
      color: #102724;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        padding: 8px 0;
        font-family: 'Montserrat-Regular', sans-serif;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        background: #D0D0D0;
        border-radius: 10px;
        align-self: center;
        margin: auto;
        &.active-button {
          background: #00E7FF;
          box-shadow: 0 5px 6px rgba(0, 231, 255, 0.15);
        }
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
  }
  .wallet-address {
    position: relative;
    span {
      color: #818181;;
      font-size: 14px;
      margin-top: 15px;
    }
    &::after {
      content: url("../assets/img/address.png");
      position: absolute;
      right: 20px;
      top: 65px;
      transform: translateY(-50%);
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
  }
</style>
