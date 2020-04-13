<template>
  <section class="buy-token-section">
    <div class="header">
      <h2>Lottery</h2>
      <langSelect class="mobile-none"></langSelect>
    </div>
    <div class="place">
      <div class="completed-info">
        <div class="logo">
          <img src="../assets/img/logo-mobile.png" alt="">
        </div>
        <div class="text">
          <div class="caption">TBC - USDtbc</div>
          <div class="status">Завершено</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sem pellentesque urna eget. Diam nunc id.
          </p>
        </div>
      </div>
      <div class="token-box">
        <div class="info-item">
          <span>Цена за токен</span>
          1 TBC = 0.0003234 USDtbc
        </div>
        <div class="info-item">
          <span>Цена за токен</span>
          800,000,000 TBC
        </div>
        <div class="info-item">
          <span>Аллокация на выигрышный билет</span>
          200 USD = 100 USDtbc
        </div>
      </div>
      <div class="icon-box">
        <a href="#">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M14.341 3.579C13.994 3.106 13.51 2.552 12.979 2.021C12.448 1.49 11.894 1.006 11.421 0.659C10.615 0.068 10.224 0 10 0H2.25C1.561 0 1 0.561 1 1.25V14.75C1 15.439 1.561 16 2.25 16H13.75C14.439 16 15 15.439 15 14.75V5C15 4.776 14.932 4.385 14.341 3.579ZM12.271 2.729C12.751 3.209 13.127 3.641 13.405 4H10.999V1.595C11.358 1.873 11.791 2.249 12.27 2.729H12.271ZM14 14.75C14 14.886 13.886 15 13.75 15H2.25C2.115 15 2 14.886 2 14.75V1.25C2 1.115 2.115 1 2.25 1C2.25 1 9.999 1 10 1V4.5C10 4.776 10.224 5 10.5 5H14V14.75Z" fill="#28AA9A"/>
              <path d="M11.5 13H4.5C4.224 13 4 12.776 4 12.5C4 12.224 4.224 12 4.5 12H11.5C11.776 12 12 12.224 12 12.5C12 12.776 11.776 13 11.5 13Z" fill="#28AA9A"/>
              <path d="M11.5 11H4.5C4.224 11 4 10.776 4 10.5C4 10.224 4.224 10 4.5 10H11.5C11.776 10 12 10.224 12 10.5C12 10.776 11.776 11 11.5 11Z" fill="#28AA9A"/>
              <path d="M11.5 9H4.5C4.224 9 4 8.776 4 8.5C4 8.224 4.224 8 4.5 8H11.5C11.776 8 12 8.224 12 8.5C12 8.776 11.776 9 11.5 9Z" fill="#28AA9A"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="#">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M16 6.707C16 3.568 15.081 1.02 13.946 1C13.951 1 13.955 1 13.96 1H12.664C12.664 1 9.62 3.287 5.239 4.184C5.105 4.892 5.02 5.735 5.02 6.707C5.02 7.679 5.105 8.523 5.239 9.23C9.621 10.127 12.664 12.414 12.664 12.414H13.96C13.955 12.414 13.951 12.414 13.946 12.413C15.082 12.393 16 9.846 16 6.706V6.707ZM13.513 11.551C13.366 11.551 13.208 11.399 13.126 11.308C12.929 11.088 12.739 10.746 12.576 10.319C12.213 9.362 12.012 8.08 12.012 6.708C12.012 5.336 12.212 4.053 12.576 3.097C12.738 2.669 12.929 2.327 13.126 2.107C13.207 2.016 13.366 1.864 13.513 1.864C13.66 1.864 13.818 2.016 13.9 2.107C14.097 2.327 14.287 2.669 14.45 3.097C14.813 4.054 15.014 5.336 15.014 6.708C15.014 8.08 14.814 9.363 14.45 10.319C14.288 10.747 14.097 11.089 13.9 11.308C13.819 11.399 13.66 11.551 13.513 11.551ZM3.935 6.707C3.935 5.895 3.995 5.107 4.108 4.377C3.368 4.479 2.718 4.538 1.915 4.538C0.867 4.538 0.867 4.538 0.867 4.538L0 6.017V7.395L0.867 8.874C0.867 8.874 0.867 8.874 1.915 8.874C2.718 8.874 3.368 8.933 4.108 9.035C3.995 8.306 3.935 7.517 3.935 6.705V6.707ZM5.752 10.034L3.752 9.651L5.031 14.675C5.097 14.935 5.355 15.066 5.604 14.966L7.456 14.225C7.705 14.125 7.805 13.851 7.678 13.614L5.752 10.033V10.034ZM13.513 8.574C13.456 8.574 13.395 8.515 13.364 8.48C13.288 8.395 13.215 8.263 13.152 8.099C13.012 7.73 12.935 7.236 12.935 6.707C12.935 6.178 13.012 5.684 13.152 5.315C13.215 5.15 13.288 5.018 13.364 4.934C13.395 4.899 13.456 4.84 13.513 4.84C13.57 4.84 13.631 4.899 13.662 4.934C13.738 5.019 13.811 5.151 13.874 5.315C14.014 5.684 14.091 6.178 14.091 6.707C14.091 7.236 14.014 7.73 13.874 8.099C13.811 8.264 13.738 8.396 13.662 8.48C13.631 8.515 13.57 8.574 13.513 8.574Z" fill="#28AA9A"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>

        </a>
      </div>
    </div>
    <div class="lottery-box">
      <div class="timeline">
        <div class="caption">
          Сроки лотереи
        </div>
        <ul class="ul-step">
          <li><div class="number"><span>1</span></div> <p>Подготовка</p></li>
          <li><div class="number"><span>2</span></div><p>Заявка на билет 12-03-2020</p></li>
          <li><div class="number"><span>3</span></div><p>Лотерея 14-03-2020</p></li>
          <li><div class="number"><span>4</span></div><p>Анонс результатов 14-03-2020</p></li>
        </ul>
        <div class="lottery-text">
          <p>Уведомление о выигрышных билетах - Если у вас есть выигрышный билет, TBCC спишет соответствующее количество TBC с вашего счета.</p>
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2929 7.35355H0V6.35355H19.2929L13.6464 0.707107L14.3536 0L20.8536 6.5L21.2071 6.85355L20.8536 7.20711L14.3536 13.7071L13.6464 13L19.2929 7.35355Z" fill="#00E7FF"/>
          </svg>
        </div>
      </div>
      <div class="place">
        <div class="place-item-top">
          <div class="lottery-result">
            <div class="caption">Общие результаты лотереи</div>
            <div class="item-box">
              <div class="info-item">
                <span>Кол-во выигрышных билетов:</span>
                2000
              </div>
              <div class="info-item">
                <span>% выигрышных билетов:</span>
                22.57
              </div>
            </div>
          </div>
          <button class="button-primary">Войти</button>
        </div>
        <div class="lottery-result">
          <div class="caption">Номера выиграшных билетов (хвостовые цифры)</div>
          <div class="item-box">
            <div class="info-item">
              <span>1&nbsp;цифра:</span>
              7, 2
            </div>
            <div class="info-item">
              <span>2&nbsp;цифра:</span>
              08, 83
            </div>
            <div class="info-item">
              <span>3&nbsp;цифра:</span>
              435, 474, 711,
              976, 324
            </div>
            <div class="info-item">
              <span>4&nbsp;цифра:</span>
              3649, 8021, 9044,
              4145, 5496, 0546
            </div>
            <div class="info-item">
              <span>5&nbsp;цифра:</span>
              17390, 59413,
              86281, 75210
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bay-token-content">
      <div class="caption">Ключевые преимущества и характеристики</div>
      <div class="icon-box">
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" rx="11" fill="#28AA9A" fill-opacity="0.3"/>
            <path d="M11.7345 18.3333V11.6432H13.9801L14.3163 9.0359H11.7345V7.37124C11.7345 6.61639 11.9441 6.10191 13.0267 6.10191L14.4073 6.10128V3.76937C14.1684 3.73771 13.3489 3.66675 12.3955 3.66675C10.4049 3.66675 9.04209 4.88175 9.04209 7.11315V9.03597H6.79065V11.6432H9.04202V18.3334L11.7345 18.3333Z" fill="white"/>
          </svg>
        </a>
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" rx="11" fill="#28AA9A" fill-opacity="0.3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4454 16.4471C14.2142 16.7834 14.5026 16.0787 14.5026 16.0787L16.5368 5.85924C16.5208 5.17047 15.5918 5.58694 15.5918 5.58694L4.20305 10.0559C4.20305 10.0559 3.65844 10.2481 3.70649 10.5845C3.75455 10.9209 4.18703 11.0811 4.18703 11.0811L7.05423 12.0421C7.05423 12.0421 7.9192 14.8773 8.0954 15.4219C8.25557 15.9505 8.39974 15.9665 8.39974 15.9665C8.55992 16.0306 8.70408 15.9185 8.70408 15.9185L10.5622 14.2366L13.4454 16.4471ZM13.9419 7.66928C13.9419 7.66928 14.3424 7.42901 14.3264 7.66928C14.3264 7.66928 14.3904 7.70132 14.1822 7.92557C13.99 8.11778 9.45692 12.1863 8.84824 12.7309C8.80019 12.763 8.76815 12.811 8.76815 12.8751L8.59195 14.3808C8.55992 14.541 8.35169 14.557 8.30363 14.4128L7.55079 11.9461C7.51875 11.85 7.55079 11.7378 7.6469 11.6738L13.9419 7.66928Z" fill="white"/>
          </svg>
        </a>
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" rx="11" fill="#28AA9A" fill-opacity="0.3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9968 7.57831C18.0988 7.23838 17.9968 6.98853 17.5115 6.98853H15.907C15.499 6.98853 15.311 7.20434 15.209 7.44238C15.209 7.44238 14.393 9.43121 13.237 10.7231C12.8631 11.0971 12.6931 11.2159 12.4891 11.2159C12.3871 11.2159 12.2395 11.0971 12.2395 10.7571V7.57831C12.2395 7.1703 12.1211 6.98853 11.781 6.98853H9.2596C9.0047 6.98853 8.85136 7.17786 8.85136 7.35734C8.85136 7.74415 9.42922 7.83332 9.48882 8.9212V11.2841C9.48882 11.8021 9.3953 11.8961 9.19129 11.8961C8.64735 11.8961 7.32429 9.89825 6.53944 7.61235C6.38564 7.168 6.23137 6.98853 5.8213 6.98853H4.21675C3.75831 6.98853 3.66663 7.20434 3.66663 7.44238C3.66663 7.86736 4.21068 9.97527 6.19951 12.763C7.52555 14.6667 9.39346 15.6989 11.0934 15.6989C12.1134 15.6989 12.2395 15.4697 12.2395 15.0748V13.6359C12.2395 13.1775 12.3361 13.086 12.6589 13.086C12.8971 13.086 13.305 13.205 14.2571 14.1229C15.3449 15.2107 15.5242 15.6989 16.1362 15.6989H17.7407C18.1992 15.6989 18.4284 15.4697 18.2961 15.0173C18.1515 14.5664 17.6321 13.9125 16.9428 13.137C16.5689 12.695 16.0078 12.219 15.838 11.9811C15.5999 11.675 15.6679 11.5391 15.838 11.2673C15.838 11.2673 17.7928 8.51341 17.9968 7.57842V7.57831Z" fill="white"/>
          </svg>
        </a>
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" rx="11" fill="#28AA9A" fill-opacity="0.3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4019 21.4632C13.3305 21.8117 12.1871 22.0001 11 22.0001C9.81202 22.0001 8.66786 21.8114 7.59583 21.4625C8.09104 21.5219 8.27403 21.1995 8.27403 20.9211C8.27403 20.7999 8.27197 20.5861 8.2692 20.3002C8.266 19.9693 8.26186 19.5418 8.25891 19.0491C5.19885 19.7143 4.55328 17.5734 4.55328 17.5734C4.05347 16.3021 3.33228 15.9635 3.33228 15.9635C2.33335 15.2803 3.40791 15.2942 3.40791 15.2942C4.51135 15.372 5.09228 16.4287 5.09228 16.4287C6.07403 18.1108 7.66697 17.6251 8.29397 17.343C8.39366 16.6317 8.67828 16.1465 8.99247 15.8714C6.54978 15.5935 3.98197 14.6496 3.98197 10.4316C3.98197 9.22965 4.41028 8.24732 5.11428 7.47743C5.00085 7.19887 4.62341 6.08018 5.22153 4.56455C5.22153 4.56455 6.14553 4.26869 8.24653 5.69284C9.12447 5.44854 10.065 5.32691 11.0007 5.32194C11.935 5.32674 12.8762 5.44854 13.7548 5.69284C15.8544 4.26869 16.7763 4.56455 16.7763 4.56455C17.3765 6.08018 16.9991 7.19887 16.8857 7.47743C17.591 8.24732 18.0166 9.22965 18.0166 10.4316C18.0166 14.6598 15.4447 15.5908 12.9944 15.8632C13.389 16.203 13.741 16.8744 13.741 17.9016C13.741 18.8857 13.7349 19.7423 13.7308 20.3099C13.7288 20.5912 13.7273 20.8015 13.7273 20.9212C13.7273 21.2009 13.9059 21.524 14.4019 21.4632Z" fill="white"/>
          </svg>
        </a>
        <a href="#">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" rx="11" fill="#28AA9A" fill-opacity="0.3"/>
            <path d="M16.3912 8.62231C16.3912 8.74263 16.3912 8.86294 16.3912 8.96606C16.3912 12.5239 13.6756 16.6317 8.72556 16.6317C7.19587 16.6317 5.7865 16.1848 4.58337 15.4286C4.78962 15.4458 5.01306 15.4629 5.21931 15.4629C6.474 15.4629 7.64275 15.0333 8.57087 14.3114C7.38494 14.2942 6.38806 13.5036 6.0615 12.4379C6.23337 12.4723 6.38806 12.4895 6.57712 12.4895C6.81775 12.4895 7.05837 12.4551 7.28181 12.3864C6.04431 12.1458 5.11619 11.0629 5.11619 9.75669C5.11619 9.7395 5.11619 9.7395 5.11619 9.72231C5.47712 9.92856 5.88962 10.0489 6.3365 10.0661C5.61462 9.58481 5.13337 8.75981 5.13337 7.8145C5.13337 7.31606 5.27087 6.852 5.49431 6.45669C6.81775 8.0895 8.8115 9.15513 11.0459 9.27544C10.9943 9.08638 10.9771 8.86294 10.9771 8.65669C10.9771 7.16138 12.1802 5.95825 13.6756 5.95825C14.449 5.95825 15.1537 6.28481 15.6349 6.80044C16.2537 6.68013 16.8209 6.45669 17.3537 6.14731C17.1474 6.78325 16.7177 7.29888 16.1677 7.64263C16.7177 7.57388 17.2334 7.43638 17.7146 7.21294C17.3709 7.76294 16.924 8.24419 16.3912 8.62231Z" fill="white"/>
          </svg>
        </a>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet aliquet nulla ut sed. Aliquam placerat ullamcorper ornare malesuada vitae a sagittis porta. Commodo sagittis fames pulvinar lobortis amet posuere velit. Lacus, ullamcorper eget tempus ipsum, eget imperdiet cras quam blandit. Leo sed etiam egestas eget. Sem ornare cras ipsum nulla volutpat in et. Ultrices lacus posuere vulputate nunc nisi, nisl.
        Ac posuere quis elit ac sit posuere in aliquet lorem. In blandit nibh ipsum a metus. Viverra ut sed faucibus cursus integer porttitor. Euismod phasellus curabitur ut adipiscing lectus. Ipsum fermentum massa sit dolor gravida faucibus donec ornare. Elit hac eu bibendum sit et. Dolor.
      </p>
      <div class="caption">
        Продажа токенов TBC и экономика
      </div>
      <div class="info-table">
        <div class="info-table__row">
          <div class="item-table-name">
            Общее количество токенов
          </div>
          <div class="item-table-value">
            10 000 000 000 TROY
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Цена токена в рамках
          </div>
          <div class="item-table-value">
            12,9% от общего количества токенов
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Первоначальный оборот
          </div>
          <div class="item-table-value">
            0,005 USD (определение в день публичной продажи)
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Количество токенов к продаже на Launchpad
          </div>
          <div class="item-table-value">
            800 000 000 TROY (8% от общего кол-ва)
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Максимальное количество выигрышных билетов
          </div>
          <div class="item-table-value">
            20000
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Аллокация на выигрышный билет
          </div>
          <div class="item-table-value">
            200 USD (40,000 TROY)
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Период вестинга при публичной продаже
          </div>
          <div class="item-table-value">
            Нет локапа
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Цена токена на приватном раунде
          </div>
          <div class="item-table-value">
            1 TROY = 0,007 USD
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Аллокация на приватном раунде
          </div>
          <div class="item-table-value">
            12% от общего количества
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Период вестинга при приватной продаже
          </div>
          <div class="item-table-value">
            Квартальная разблокировка через год
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Тип токена
          </div>
          <div class="item-table-value">
            BEP2
          </div>
        </div>
        <div class="info-table__row">
          <div class="item-table-name">
            Распределение токенов
          </div>
          <div class="item-table-value">
            В течение 15 дней после окончания продажи токенов
          </div>
        </div>
      </div>
      <div class="caption">Аллокация токенов</div>
      <div class="circle-diagram">
        <diagram @generated="setLegend" class="donut-diagram"></diagram>
        <div class="legend-con" v-html="message"></div>
      </div>
      <div class="caption">Расписание выпуска токенов</div>
      <ChartToken></ChartToken>
    </div>
  </section>
</template>

<script>
  import Diagram from "./Diagram.vue";
  import ChartToken from "./ChartToken.vue";

  export default {
    components: {
      ChartToken,
      Diagram
    },
    data() {
      return {
        message: ' '
      }
    },
    methods: {
      setLegend (html) {
        this.message = html
      }
    }
  }
</script>

<style lang="scss" scoped>
  .completed-info {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 20px;
    box-sizing: border-box;
    width: 40%;
    border-right: 1px solid rgba(40, 170, 154, 0.1);
    .logo {
      width: 95px;
      min-width: 95px;
      height: 95px;
      background: rgba(40, 170, 154, 0.1);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      margin-bottom: 20px;
      img {
        width: 50px;
      }
    }
    .caption {
      font-family: 'Montserrat-Bold', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #102724;
      margin-bottom: 6px;
    }
    .status {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #3FD045;
    }
    p {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #797979;
      margin-top: 15px;
      max-width: 340px;
    }
  }
  .place {
    display: flex;
    position: relative;
    .icon-box {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: absolute;
      bottom: 15px;
      right: 15px;
      padding: 0;
      a {
        width: max-content;
        min-width: max-content;
        margin: 0;
        margin-top: 15px;
      }
      svg {
        margin-left: 20px;
      }
    }
  }
  .token-box {
    display: flex;
    width: 60%;
    justify-content: space-around;
    align-items: center;
    height: 140px;
    padding-left: 20px;
    box-sizing: border-box;
  }
  .info-item {
    font-family: 'Montserrat-Bold', sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    flex-direction: column;
    letter-spacing: 0.03em;
    color: #102724;
    margin: 0 20px;
    margin-left: 0;
    margin-bottom: 20px;
    min-width: 120px;
    span {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #797979;
      margin-bottom: 6px;
    }
  }
  .lottery-box {
    display: flex;
    justify-content: space-between;
    .timeline {
      width: 45%;
    }
    .place {
      width: 50%;
      flex-direction: column;
      .place-item-top {
        display: flex;
        justify-content: space-between;
        .button-primary {
          max-width: 140px;
          max-height: 48px;
        }
      }
      .lottery-result {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        .caption {
          font-family: 'Montserrat-Bold', sans-serif;
          font-style: normal;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
          letter-spacing: 0.03em;
          color: #00312B;
          margin-bottom: 30px;
        }
        .item-box {
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
  }
  .caption {
    font-family: 'Montserrat-Bold', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
    color: #00312B;
    margin-bottom: 30px;
  }
  .timeline {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .ul-step {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 80px;
      .number {
        font-family: 'Montserrat-Bold', sans-serif;
        font-style: normal;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        border-radius: 100%;
        background-color: rgba(0, 231, 255, 0.03);
        position: relative;
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        &::after {
          position: absolute;
          border-radius: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          content: '';
          width: 40px;
          height: 40px;
          background: linear-gradient(180deg, #00E7FF 0%, #01B0E8 100%), rgba(40, 170, 154, 0.2);
        }
      }
      p {
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.03em;
        color: #006B5E;
        margin: 15px 0;
        min-width: 125px;
      }
    }
    &::after {
      content: '';
      width: 100%;
      height: 80px;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(270deg, rgba(0, 231, 255, 0.05) 0%, rgba(0, 231, 255, 0) 100%);
      border-radius: 50px;
    }
  }
  .lottery-text {
    position: relative;
    background: rgba(0, 231, 255, 0.05);
    border-radius: 10px;
    padding: 15px;
    font-family: 'Montserrat-Regular', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    color: #102724;
    margin-top: 20px;
    p {
      margin-right: 15px;
    }
    &:after {
      content: '';
      position: absolute;
      right: 40px;
      top: 0;
      transform: translateY(-100%);
      border: 5px solid transparent;
      border-bottom: 7px solid rgba(0, 231, 255, 0.05);
    }
  }
  .bay-token-content {
    max-width: 760px;
    width: 100%;
    .icon-box {
      justify-content: flex-start;
      padding-left: 0;
      margin-bottom: 30px;
      a {
        width: max-content;
        min-width: max-content;
        margin-left: 0;
      }
    }
    p {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 1.5;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: 30px;
    }
  }
  .info-table {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .info-table__row {
      display: flex;
      .item-table-name {
        width: 49%;
        margin-right: 20px;
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 30px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        color: rgba(0, 0, 0, 0.5);
        padding-left: 10px;
        box-sizing: border-box;
      }
      .item-table-value {
        width: 50%;
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 30px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        color: rgba(0, 0, 0, 0.8);
        padding-left: 10px;
      }
      &:nth-child(2n) {
        background-color: rgba(40, 170, 154, 0.05);
      }
    }
  }
  .circle-diagram {
    display: flex;
    align-items: center;
  }
  .donut-diagram {
    width: 200px;
    height: 200px;
    margin-right: 70px;
  }

  @media (max-width: 1200px) {
    .place {
      flex-direction: column;
    }
    .completed-info {
      width: 100%;
      border-right: none;
    }
    .token-box {
      width: 100%;
    }
    .lottery-box {
      flex-direction: column;
      .timeline {
        width: 100%;
        max-width: 700px;
        margin-bottom: 50px;
      }
      .place {
        width: 100%;
        max-width: 700px;
      }
    }
  }
  @media (max-width: 768px) {
    .bay-token-content {
      .icon-box {
        flex-direction: row;
      }
    }
  }
  @media (max-width: 640px) {
    .token-box {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 30px;
      padding-left: 0;
    }
    .completed-info {
      flex-direction: column;
    }
    .ul-step {
      flex-wrap: wrap;
      justify-content: space-around;
      &:after {
        display: none;
      }
      li {
        width: max-content;
        .number {
          height: 120px;
          width: 120px;
        }
        p {
          max-width: 80px;
        }
      }
    }
    .place-item-top {
      flex-direction: column;
      .button-primary {
        margin: 25px 0;
      }
    }
    .item-box {
      flex-wrap: wrap;
      .info-item {
        margin-bottom: 25px;
      }
    }
    .info-table {
      .info-table__row {
        flex-direction: column;
        .item-table-name, .item-table-value {
          width: 100%;
        }
        .item-table-value {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
</style>
