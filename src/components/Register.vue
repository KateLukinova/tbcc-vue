<template>
  <div class="login">
    <form action="#" class="form-login">
      <div class="form-caption">Создайте учетную запись</div>
      <div class="input-two-box">
        <input type="text" placeholder="Имя">
        <input type="text" placeholder="Фамилия">
      </div>
      <div class="input-box">
        <input type="email" placeholder="Электронная почта">
      </div>
      <div class="input-box">
        <input type="password" placeholder="Выберите пароль">
      </div>
      <div class="form-group checkbox">
        <input type="checkbox" id="person-check" checked>
        <label for="person-check">Я подтверждаю, что мне исполнилось 18, и принимаю положения следующих документов: Пользовательское Соглашение и Политика конфиденциальности</label>
      </div>
      <button class="form-button" type="submit">Создать учетную запись</button>
      <div class="form-question">Уже есть учетная запись в системе?</div>
      <p><router-link to="/login">Войти в систему </router-link>в свою учетную запись с системе Coinbase или
        <a href="#">Регистрация</a> как юридическое лицо.</p>
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
  input[type=checkbox] {
    display: none;
  }
  .checkbox label {
    position: relative;
    cursor: pointer;
    font-family: 'Montserrat-Light', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: flex-start;
    color: #FFFFFF;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .form-group label:before {
    content:'';
    -webkit-appearance: none;
    padding: 8px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 30px;
    min-width: 26px;
    width: 26px;
    height: 26px;
    background-color: #28AA9A;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 2px;
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  .form-group input:checked+ label:before {
    background-color: #28AA9A;
  }
  .form-group input:hover + label:before {
    background-color: #e0e0e0;
  }

  .form-group input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 10px;
    width: 6px;
    height: 14px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
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
    .checkbox label {
      font-size: 12px;
      margin-top: 15px;
      margin-bottom: 25px;
    }
    .form-group input:checked + label:before {
      margin-right: 15px;
    }
  }
</style>
