<template>
  <div class="account-component">
    <div class="user-info">
      <div class="user-name">Андрей Петров</div>
      <div class="user-email">petrov@gmail.com</div>
    </div>
    <div class="user-avatar">
      <img src="../assets/img/user.jpg" alt="">
    </div>
  </div>
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
  .account-component {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .user-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .user-name {
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        color: #333333;
        margin-bottom: 8px;
      }
      .user-email {
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        display: flex;
        align-items: center;
        color: #28AA9A;
      }
    }
    .user-avatar {
      margin-left: 22px;
    }
  }
</style>
