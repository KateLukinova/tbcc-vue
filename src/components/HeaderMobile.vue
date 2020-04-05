<template>
  <div class="header-mobile">
    <div class="menu-icon" @click="toggleNav" :class="['menu-icon', {'menu-icon--open': this.open}]">
      <span class="line line-top"></span>
      <span class="line"></span>
      <span class="line line-bottom"></span>
    </div>
    <router-link to="/home" class="logo-mobile">
      <img src="../assets/img/logo-mobile.png" alt="">
    </router-link>
    <lang-select></lang-select>
  </div>
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
      this.open = !this.open
      EventBus.$emit('MENU_CLICKED', this.open);
    }
  }
};
</script>

<style lang="scss" scoped>
  .header-mobile {
    display: none;
  }
  @media (max-width: 990px) {
    .header-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      width: 100%;
      background-color: #00312B;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      padding: 0 15px;
      box-sizing: border-box;
    }
    .logo-mobile {
      margin-left: 20px;
    }
    .menu-icon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 22px;
      width: 30px;
      .line {
        width: 30px;
        height: 2px;
        background-color: white;
        transition: all 0.5s ease;
        &.line-top {
          width: 19px;
        }
        &.line-bottom {
          width: 18px;
        }
      }
      &--open {
        justify-content: center;
        align-items: center;
        height: 30px;
        .line {
          display: none;
          &.line-top {
            display: flex;
            width: 30px;
            transform: rotate(45deg) translate(1px, 1px);
          }
          &.line-bottom {
            display: flex;
            width: 30px;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
</style>
