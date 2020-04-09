<template>
  <nav class="main-menu" :class="['main-menu', {'main-menu--open': this.open}]">
    <router-link to="/home" class="logo">
      <img src="../assets/img/logo.png" alt="">
    </router-link>
    <ul class="sidebar-menu">
      <li>
        <router-link to="/home" class="sidebar-menu__item" v-on:click.native="toggleNav">
          <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26 14.9922L13 4.901L0 14.9922V10.8777L13 0.786499L26 10.8777V14.9922ZM22.75 14.625V24.375H16.25V17.875H9.75V24.375H3.25V14.625L13 7.3125L22.75 14.625Z"/>
          </svg>
          <span class="nav-text">Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/card" class="sidebar-menu__item" v-on:click.native="toggleNav">
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5625 0.25H2.4375C1.09688 0.25 0 1.34688 0 2.6875V17.3125C0 18.6531 1.09688 19.75 2.4375 19.75H23.5625C24.9031 19.75 26 18.6531 26 17.3125V2.6875C26 1.34688 24.9031 0.25 23.5625 0.25ZM2.4375 1.875H23.5625C24.0029 1.875 24.375 2.24713 24.375 2.6875V5.125H1.625V2.6875C1.625 2.24713 1.99713 1.875 2.4375 1.875ZM23.5625 18.125H2.4375C1.99713 18.125 1.625 17.7529 1.625 17.3125V10H24.375V17.3125C24.375 17.7529 24.0029 18.125 23.5625 18.125ZM3.25 13.25H4.875V16.5H3.25V13.25ZM6.5 13.25H8.125V16.5H6.5V13.25ZM9.75 13.25H11.375V16.5H9.75V13.25Z" />
          </svg>
          <span class="nav-text">Card</span>
        </router-link>

      </li>
      <li>
        <router-link to="/wallet" class="sidebar-menu__item" v-on:click.native="toggleNav">
          <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.2021 10.3404H24.0638V8.95745C24.0638 7.35319 22.8745 6.02553 21.2979 5.80426V4.11702C21.2979 2.37447 19.8596 0.936172 18.117 0.936172H3.37447C1.54894 0.936172 0.0276596 2.40213 0 4.25532V19.883C0 21.6255 1.4383 23.0638 3.18085 23.0638H20.883C22.6255 23.0638 24.0638 21.6255 24.0638 19.883V18.3617H24.2021C25.1979 18.3617 26 17.5596 26 16.5638V12.1383C26 11.1426 25.1979 10.3404 24.2021 10.3404ZM1.93617 4.31064C1.93617 3.50851 2.6 2.87234 3.37447 2.87234H18.0894C18.7809 2.87234 19.334 3.42553 19.334 4.11702V5.7766H3.37447C2.6 5.7766 1.93617 5.11277 1.93617 4.31064ZM24.0638 16.4255H19.5C18.366 16.4255 17.4255 15.4851 17.4255 14.3511C17.4255 13.217 18.366 12.2766 19.5 12.2766H24.0638V16.4255Z"/>
          </svg>
          <span class="nav-text">Wallet</span>
        </router-link>
      </li>
      <li>
        <router-link to="/buy-token" class="sidebar-menu__item" v-on:click.native="toggleNav">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0009 0C5.82121 0 0.000976562 5.82023 0.000976562 13C0.000976562 20.1797 5.82121 25.9999 13.0009 25.9999C20.1805 25.9999 26.0007 20.1797 26.0007 13C26.0007 5.82023 20.1805 0 13.0009 0ZM19.4764 3.37592L18.648 4.60036C17.5457 3.85782 16.2892 3.32708 14.9367 3.06512L15.2273 1.61592C16.7506 1.91049 18.1909 2.5071 19.4764 3.37592ZM13.6732 18.7695V20.2789H12.4455V18.7771C11.5685 18.6808 10.7455 18.3448 10.1267 17.769C9.50776 17.1934 9.22467 16.347 9.24502 15.231L9.27641 15.1925H11.4448C11.4448 15.8941 11.6008 16.3598 11.9128 16.6539C12.2248 16.9481 12.6216 17.0954 13.1035 17.0954C13.5651 17.0954 13.9189 16.9727 14.1649 16.7265C14.4109 16.4805 14.5339 16.1497 14.5339 15.7338C14.5339 15.3228 14.4159 14.9882 14.1801 14.7295C13.9443 14.4708 13.5397 14.23 12.9666 14.0067C11.8404 13.5958 11.0047 13.1382 10.4595 12.6334C9.91415 12.1287 9.64159 11.4173 9.64159 10.4992C9.64159 9.64692 9.89354 8.94832 10.4387 8.40302C10.9839 7.8578 11.7437 7.53692 12.6207 7.44045V5.80875H13.8484V7.45553C14.7254 7.58752 15.4542 7.96032 15.964 8.57403C16.4738 9.18783 16.7294 9.97509 16.7193 10.954L16.7024 10.9829H14.5339C14.5339 10.369 14.4109 9.93194 14.1649 9.60728C13.9188 9.28271 13.5828 9.12486 13.1568 9.12486C12.7204 9.12486 12.3959 9.25264 12.1829 9.50371C11.9698 9.75479 11.8634 10.0896 11.8634 10.5055C11.8634 10.9011 11.9762 11.2225 12.2019 11.4685C12.4276 11.7146 12.8423 11.9571 13.446 12.1954C14.567 12.6367 15.3976 13.1085 15.9378 13.6108C16.478 14.1129 16.7481 14.8156 16.7481 15.7184C16.7481 16.601 16.4533 17.3062 15.9107 17.8337C15.3679 18.3614 14.6379 18.6732 13.6732 18.7695ZM10.7746 1.61592L11.0545 3.06723C9.70245 3.33067 8.44644 3.86256 7.34487 4.60632L6.52551 3.37592C7.81099 2.5071 9.25116 1.91049 10.7746 1.61592ZM3.3769 6.52445L4.60134 7.35284C3.8588 8.45511 3.32814 9.71156 3.06619 11.064L1.61689 10.7734C1.91156 9.25018 2.50817 7.80992 3.3769 6.52445ZM3.37681 19.4753C2.50799 18.1898 1.91147 16.7496 1.61689 15.2263L3.0682 14.9463C3.33165 16.2984 3.86354 17.5545 4.6073 18.656L3.37681 19.4753ZM6.52534 22.6239L7.35373 21.3995C8.456 22.1421 9.71254 22.6728 11.0651 22.9348L10.7745 24.3841C9.25107 24.0893 7.81072 23.4928 6.52534 22.6239ZM15.2272 24.3841L14.9473 22.9328C16.2994 22.6693 17.5554 22.1374 18.6571 21.3936L19.4764 22.624C18.1909 23.4929 16.7505 24.0895 15.2272 24.3841ZM22.625 19.4754L21.4005 18.647C22.1431 17.5447 22.6737 16.2881 22.9357 14.9357L24.3849 15.2263C24.0902 16.7496 23.4937 18.1899 22.625 19.4754ZM22.9336 11.0535C22.6701 9.70147 22.1383 8.44538 21.3944 7.34372L22.6248 6.52436C23.4936 7.80983 24.0902 9.25018 24.3848 10.7735L22.9336 11.0535Z"/>
          </svg>
          <span class="nav-text">BuyToken</span>
        </router-link>

      </li>
      <li>
        <router-link to="/staking" class="sidebar-menu__item">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26 10.0815L17.017 8.77662L13 0.636993L8.983 8.77662L0 10.0815L6.5 16.4174L4.966 25.363L13 21.1396L21.034 25.363L19.5 16.4174L26 10.0815Z"/>
          </svg>
          <span class="nav-text">Staking</span>
        </router-link>
      </li>
    </ul>

    <ul class="sidebar-menu logout">
      <li>
        <router-link to="/kyc" class="sidebar-menu__item" v-on:click.native="toggleNav">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1407 10.3378L16.6671 8.88579L14.5405 8.5838C14.2943 8.54881 14.0801 8.3956 13.9678 8.17318L13 6.25858L12.0323 8.17318C11.9199 8.3956 11.7057 8.54881 11.4595 8.5838L9.33289 8.88579L10.8593 10.3378C11.0438 10.5141 11.1286 10.7707 11.0846 11.0213L10.7201 13.0944L12.6519 12.1029C12.8706 11.9913 13.1294 11.9913 13.3481 12.1029L15.2798 13.0944L14.9153 11.0213C14.8715 10.7706 14.9563 10.5141 15.1407 10.3378Z" fill="white" fill-opacity="0.5"/>
            <path d="M13 0C7.54022 0 3.09808 4.44214 3.09808 9.90189C3.09808 15.3616 7.54022 19.8038 13 19.8038C18.4597 19.8038 22.9019 15.3616 22.9019 9.90189C22.9019 4.44214 18.4597 0 13 0ZM18.8569 8.90439L16.4871 11.1597L17.0457 14.3403C17.1537 14.9577 16.5057 15.4394 15.947 15.1496L13 13.6367L10.0529 15.1497C9.49586 15.4358 8.8455 14.9623 8.95428 14.3404L9.51292 11.1597L7.14306 8.90444C6.68243 8.46488 6.93324 7.68706 7.56109 7.59825L10.8518 7.13111L12.3202 4.22647C12.579 3.71323 13.421 3.71323 13.6799 4.22647L15.1482 7.13111L18.4389 7.59825C19.0667 7.68701 19.3175 8.46488 18.8569 8.90439Z" fill="white" fill-opacity="0.5"/>
            <path d="M13 21.3272C11.0745 21.3272 9.26137 20.8438 7.66821 19.9992V25.2371C7.66821 25.8465 8.35041 26.2077 8.85238 25.8708L13 23.1061L17.1476 25.8709C17.6519 26.2071 18.3318 25.8458 18.3318 25.2372V19.9992C16.7386 20.8439 14.9255 21.3272 13 21.3272Z" fill="white" fill-opacity="0.5"/>
          </svg>
          <span class="nav-text">KYC</span>
        </router-link>
      </li>
      <li>
        <router-link to="/settings" class="sidebar-menu__item" v-on:click.native="toggleNav">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7087 15.4944C22.3454 13.1316 23.1644 10.1042 25.5401 8.72787L22.9856 4.303C22.256 4.73037 21.4061 4.97575 20.501 4.97575C17.771 4.97575 15.5577 2.74787 15.5577 0H10.4471C10.4536 0.84825 10.2424 1.70787 9.78735 2.49437C8.42398 4.85712 5.3901 5.65987 3.0111 4.29163L0.456604 8.7165C1.19273 9.13412 1.82973 9.74675 2.28148 10.5316C3.64323 12.8911 2.82748 15.912 0.461479 17.2916L3.01598 21.7165C3.74398 21.2924 4.58735 21.0503 5.48923 21.0503C8.2111 21.0503 10.4179 23.2635 10.4325 26H15.5431C15.5415 25.1599 15.7527 24.31 16.2029 23.5316C17.5646 21.1721 20.5904 20.3678 22.9677 21.7279L25.5222 17.303C24.791 16.8854 24.1589 16.2744 23.7087 15.4944ZM13 18.265C10.0929 18.265 7.73498 15.9087 7.73498 13C7.73498 10.0913 10.0912 7.735 13 7.735C15.9071 7.735 18.265 10.0913 18.265 13C18.265 15.9087 15.9087 18.265 13 18.265Z" fill="white" fill-opacity="0.5"/>
          </svg>
          <span class="nav-text">Settings</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      open: false,
      isSubMenuOpened: false
    }
  },
  methods: {
    toggleNav: function() {
      console.log('fgdfg')
      EventBus.$emit('MENU_ITEM_CLICKED');
      this.open = !this.open
    }
  },
  mounted() {
    EventBus.$on('MENU_CLICKED', isOpened => {
      this.open = isOpened;
    });
  }
};
</script>

<style lang="scss" scoped>
  @media (min-width: 990px) {
    .main-menu:hover, nav.main-menu.expanded {
      width: 480px;
      overflow: visible;
      .sidebar-menu__item {
        .nav-text {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          width: max-content;
          margin-left: 20px;
        }
      }
      li {
        width: 200px;
      }

    }
  }

  .main-menu {
    background: #00312B;
    border: 1px solid #006B5E;
    position: fixed;
    top: 0;
    bottom:0;
    height: 100vh;
    left: 0;
    width: 180px;
    overflow:hidden;
    transition: all 0.5s ease;
    z-index:10;
    padding: 40px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      width: 45%;
      height: 23vh;
      max-width: 140px;
      align-items: flex-start;
      transition: all 0.5s ease;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .sidebar-menu__item {
    font-family: 'Montserrat-Regular', sans-serif;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 26px;
    text-decoration:none;
    line-height: 32px;
    transition: all 0.5s ease;
    svg {
      fill: rgba(255, 255, 255, 0.5);
      transition: all 0.5s ease;
    }
    &:hover {
      color: #00E7FF;
      svg {
        fill: #00E7FF;
      }
    }
  }

  .main-menu>ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-menu li {
    position:relative;
    display: flex;
    width: max-content;
    margin-bottom: 3vh;
  }

  .main-menu .nav-text {
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    transition: all 0.5s ease;
    width: 0;
  }

  .sidebar-menu.logout {
    position:absolute;
    bottom: 0;
    padding-top: 40px;
    border-top: 1px solid #006B5E;
    box-sizing: border-box;
    width: 100%;
  }

  @media (max-width: 990px) {
    .main-menu {
      display: none;
      &--open {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        width: 100vw;
        padding: 90px 0;
      }
      .logo {
        width: 90px;
        height: auto;
        margin-bottom: 25px;
      }
      li {
        margin-bottom: 20px;
        width: 200px;
      }
    }
    .sidebar-menu__item svg {
      width: 16px;
      margin-right: 15px;
    }
    .main-menu .nav-text {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)!important;
      width: max-content;
      font-size: 14px;
    }
  }
</style>
