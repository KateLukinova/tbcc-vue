<template>
  <section class="buy-token-section">
    <div class="header">
      <h2>Buy Token</h2>
      <accountComponent></accountComponent>
    </div>
  </section>
</template>

<script>
  import accountComponent from '~/components/AccountComponent.vue'
export default {

  components: {
    accountComponent
  },

  data() {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>

</style>
