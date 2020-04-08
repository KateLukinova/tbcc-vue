<template>
  <div class="login">
    <form action="#" class="form-login">
      <div class="form-caption">Вход в учетную запись</div>
      <div class="input-box">
        <input type="email" placeholder="Электронная почта">
      </div>
      <div class="input-box">
        <input type="password" placeholder="Пароль">
      </div>
<!--      <button class="form-button" type="submit">Создать учетную запись</button>-->
<!--      временная мера-->
      <router-link to="/home" class="form-button" type="submit">Создать учетную запись</router-link>
      <div class="form-question">Впервые в системе?</div>
      <p>Пройдите быструю регистрацию в системе
        <router-link to="/register">Регистрация</router-link>
      </p>
    </form>
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
  .login {
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: #28AA9A;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
  }
  .form-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 520px;
    input {
      height: 72px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 0 30px;
      margin-bottom: 30px;
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      &::placeholder {
        color: #FFFFFF;
      }
    }
    .form-button {
      height: 72px;
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      font-family: 'Montserrat-Bold', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #28AA9A;
    }
    p {
      font-family: 'Montserrat-Light', sans-serif;
      font-style: normal;
      font-size: 14px;
      line-height: 1.7;
      text-align: center;
      color: #FFFFFF;
      a {
        font-family: 'Montserrat-Bold', sans-serif;
        color: #FFFFFF;
      }
    }
  }
  .form-caption {
    font-family: 'Montserrat-Bold', sans-serif;
    font-style: normal;
    font-size: 26px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 70px;
  }
  .form-question {
    font-family: 'Montserrat-Bold', sans-serif;
    font-style: normal;
    font-size: 18px;
    line-height: 1.1;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    margin: 70px auto;
  }

  a.form-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .form-caption {
      font-size: 18px;
      margin-bottom: 35px;
    }
    .form-login input {
      height: 55px;
      font-size: 14px;
      padding-left: 15px;
      margin-bottom: 15px;
    }
    .form-login .form-button {
      height: 55px;
    }
    .form-question {
      margin: 35px 0;
    }
  }
</style>
