<template>
  <v-select v-model="selected" :option="options" class="my-v-select"></v-select>
</template>

<script>
  import vSelect from 'vselect-component'

  export default {
    components: {
      vSelect
    },

    name: 'HelloWorld',
    data() {
      return {
        index: 1,
        options: [{
          value: 1,
          label: 'RU'
        }, {
          value: 2,
          label: 'EN'
        }],
        selected: {
          value: 1,
          label: 'RU'
        }
      }
    }
  }
</script>

<style lang="scss">
  .my-v-select {
    width: 50px!important;
    height: max-content!important;
    .up.input-control::after, .down.input-control::after {
      content: none;
    }
    .input-control {
      input {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #28AA9A;
        text-align: center;
        border: 1px solid #28AA9A;
        border-radius: 10px;
        background-color: transparent;
        cursor: pointer;
      }
    }
    .dropMenu {
      padding: 20px!important;
      right: 20px;
      top: 35px!important;
      min-width: auto!important;
      ul {
        overflow-y: hidden!important;
        li {
          height: auto;
          font-family: 'Montserrat-Regular', sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
          color: #28AA9A;
          &.active {
            color: black;
          }
        }
      }
    }
  }
</style>
