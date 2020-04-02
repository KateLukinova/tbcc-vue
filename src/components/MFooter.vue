<template>
 <div class="footer">
   <a href="#" class="footer-item mobile-none">Центр помощи</a>
   <a href="#" class="footer-item mobile-none">Русский
     <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M4 0L7.4641 6H0.535898L4 0Z" fill="white" fill-opacity="0.7"/>
     </svg>
   </a>
   <a href="#" class="footer-item">Copyright © 2018-2020 Tbbc Inc. All Rights Reserved. </a>
   <a href="#" class="footer-item mobile-none">Условия использования</a>
   <a href="#" class="footer-item mobile-none">Политика конфиденциальности</a>
   <a href="#" class="footer-item mobile-none">Политика допустимого использования</a>
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

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 10%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    flex-wrap: nowrap;
    .footer-item {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-size: 12px;
      line-height: 1.3;
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, 0.7);
      margin: 10px 15px;
      text-align: center;
      white-space: nowrap;
      svg {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 1240px) {
    .footer {
      flex-wrap: wrap;
      .footer-item {
        white-space: normal;
      }
    }
  }
  @media (max-width: 768px) {
    .footer {
      .mobile-none {
        display: none;
      }
    }
  }

</style>
