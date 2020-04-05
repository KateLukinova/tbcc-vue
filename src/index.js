// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')
import vSelect from 'vselect-component'
import VueRouter from "vue-router";

Vue.use(VueRouter)
Vue.use(vSelect)

window.EventBus = new Vue();

// Vue components (for use in html)
const Main = Vue.component('Main', require('./components/Main.vue').default)
const Login = Vue.component('Login', require('./components/Login.vue').default)
const Register = Vue.component('Register', require('./components/Register.vue').default)
const MFooter = Vue.component('MFooter', require('./components/MFooter.vue').default)
const Home = Vue.component('Home', require('./components/Home.vue').default)
const HeaderMobile = Vue.component('HeaderMobile', require('./components/HeaderMobile.vue').default)
const KYC = Vue.component('KYC', require('./components/KYC.vue').default)
const LangSelect = Vue.component('LangSelect', require('./components/LangSelect.vue').default)
const PriceChartItem = Vue.component('PriceChartItem', require('./components/PriceChartItem.vue').default)
const SidebarNav = Vue.component('SidebarNav', require('./components/SidebarNav.vue').default)
const BuyToken = Vue.component('BuyToken', require('./components/BuyToken.vue').default)
const Wallet = Vue.component('Wallet', require('./components/Wallet.vue').default)
const AccountComponent = Vue.component('BuyToken', require('./components/AccountComponent.vue').default)

const routes = [
  { path: '/', component: Main },
  { path: '/home', component: Home },
  { path: '/kyc', component: KYC },
  { path: '/buy-token', component: BuyToken },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/wallet', component: Wallet }
]

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})

// Vue init
const app = new Vue({
  router
}).$mount('#app')
