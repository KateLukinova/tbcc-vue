<template>
  <section class="settings-section">

    <div class="header">
      <h2>Settings</h2>
      <langSelect class="mobile-none"></langSelect>
    </div>

    <div class="form-settings">
      <form action="#" method="post">
        <div class="form-wrap">
          <div class="place form">
            <div class="form-caption">Edit User</div>
            <div class="form-row">
              <div class="input-box">
                <input type="email" placeholder="Email">
              </div>
              <div class="input-box">
                <input type="password" placeholder="Password (6 characters minimum)">
              </div>
            </div>
            <div class="form-row">
              <div class="input-box">
                <input type="password" placeholder="Password confirmation">
              </div>
              <div class="input-box">
                <input type="password" placeholder="Current password">
              </div>
            </div>
          </div>
          <button type="submit" class="button-primary">Сохранить</button>
        </div>
      </form>
    </div>

  </section>
</template>

<script>

export default {

  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .place {
    &.form {
      padding: 80px 120px;
      display: flex;
      flex-direction: column;
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
      .form-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        .input-box {
          width: 47%;
          input, .date-input, select, .file-input {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid #006B5E;
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
            padding: 20px 30px;
            &::placeholder {
              color: rgba(0, 107, 94, 0.7);
            }
          }
          input[type=file] {
            display: none!important;
          }
          .file-input {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #F8FFFE;
            border: 1px dashed #006B5E;
            box-sizing: border-box;
            border-radius: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }

  .form-wrap {
    display: flex;
    flex-direction: column;
  }
  .button-primary {
    align-self: flex-end;
    margin-bottom: 70px;
  }
  @media (max-width: 990px) {
    .place.form {
      padding: 20px;
      .form-row {
        flex-direction: column;
        margin-bottom: 0;
        .input-box {
          width: 100%;
          margin-bottom: 15px;
        }
        .form-column {
          width: 100%;
        }
      }
    }
  }
</style>
