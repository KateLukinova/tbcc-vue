<template>
  <section class="home-section">
    <div class="header">
      <h2>Welcom, {{userName}}</h2>
      <langSelect class="mobile-none"></langSelect>
    </div>
    <div class="text-center" v-if="noRegister">
      <h3>Вам необходимо пройти KYC</h3>
      <p>После одобрения данных вы получите полный доступ к системе.</p>
      <router-link to="/kyc" class="button-primary">Начать</router-link>
    </div>
    <div class="home-content" v-else>
      <div class="place">
        <div class="place-header content-end">
          <div class="in-progress">
            in Progress
            <span>0% complete</span>
          </div>
        </div>
        <div class="place-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh fames volutpat aenean sapien, mauris donec eget turpis sed. Dignissim nec viverra erat nulla eget. Faucibus turpis dui amet et. Laoreet id egestas quisque et duis eu. Eget pellentesque ullamcorper porttitor ac eleifend.
          </p>
          <router-link to="/home" class="text-link">Our blog</router-link>
          <router-link to="/home" class="button-primary">Продолжить</router-link>
        </div>
      </div>
      <div class="place sidebar">
        <div class="place-header">Price chart</div>
        <div class="divider"></div>
        <div class="place-body">
          <price-chart-item></price-chart-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      userName: "Андрей",
      noRegister: false
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
  .in-progress {
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat-Bold', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    letter-spacing: 0.03em;
    color: #102724;
    position: relative;
    padding-left: 20px;
    box-sizing: border-box;
    &::after {
      content: '';
      position: absolute;
      top: 5px;
      left: 0;
      background-color: #3FD045;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      box-sizing: border-box;
    }
    span {
      font-family: 'Montserrat-Light', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #797979;
      margin-top: 5px;
    }
  }
  .home-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .place {
    width: 67%;
  }
  .place.sidebar {
    width: 100%;
    min-width: 360px;
    max-width: 500px;
    margin-left: 20px;
  }
  @media (max-width: 1200px) {
    .home-content {
      flex-direction: column-reverse;
    }
    .place {
      width: 100%;
    }
    .place.sidebar {
      margin-left: 0;
    }
  }
</style>
