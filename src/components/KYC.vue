<template>
  <section class="kyc-section">
    <div class="header">
      <h2>Welcom, {{userName}}</h2>
      <langSelect class="mobile-none"></langSelect>
    </div>
    <div class="text-center" v-if="kycModerate">
      <h3>Ваше KYC на модерации</h3>
      <p>После одобрения данных вы получите полный доступ к системе.</p>
    </div>
    <div class="text-center" v-else-if="kycError">
      <h3 class="error">Ваше KYC требует внимания</h3>
      <p>При проверке KYC были найдены ошибки. Исправьте их и отправьте данные на проверку повторно.</p>
      <router-link to="/kyc" class="button-primary">Исправить</router-link>
    </div>
    <div class="text-center" v-else>
      <h3 class="check">KYC пройдено!</h3>
      <p>Поздравляем! Теперь вы можете пользоваться всеми функциями системы.</p>
      <router-link to="/kyc" class="button-primary">Начать</router-link>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      userName: "Андрей",
      kycModerate: false,
      kycError: false
    };
  }
};
</script>

<style lang="scss" scoped>
  .text-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 200px;
    h3 {
      font-family: 'Montserrat-Bold', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 1.2;
      display: flex;
      align-items: center;
      color: #102724;
      &.error {
        color: #FC1A50;
      }
      &.check {
        color: #3FD045;
      }
    }
    p {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #102724;
      max-width: 470px;
      margin: 30px 0;
      margin-bottom: 40px;

    }
  }
  @media (max-width: 990px) {
    .text-center {
      margin-top: 100px;
    }
  }
</style>
