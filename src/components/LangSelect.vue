<template>
  <v-select v-model="selected" :option="options"></v-select>
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

<style lang="scss" scoped>
  .select {
    width: 50px!important;
    .input-control::after {
      display: none!important;
    }
  }
</style>
