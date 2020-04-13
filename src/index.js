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
import VueChartJs from "vue-chartjs";
import VueMask from 'v-mask'
import { VuejsDatatableFactory } from 'vuejs-datatable';

Vue.use( VuejsDatatableFactory );
Vue.use(VueMask);
Vue.use(VueRouter)
Vue.use(vSelect)
Vue.use(VueChartJs)

window.EventBus = new Vue();

// Vue components (for use in html)
const Main = Vue.component('Main', require('./components/Main.vue').default)
const Login = Vue.component('Login', require('./components/Login.vue').default)
const Register = Vue.component('Register', require('./components/Register.vue').default)
const MFooter = Vue.component('MFooter', require('./components/MFooter.vue').default)
const Home = Vue.component('Home', require('./components/Home.vue').default)
const Card = Vue.component('Card', require('./components/Card.vue').default)
const HeaderMobile = Vue.component('HeaderMobile', require('./components/HeaderMobile.vue').default)
const KYC = Vue.component('KYC', require('./components/KYC.vue').default)
const Settings = Vue.component('Settings', require('./components/Settings.vue').default)
const Staking = Vue.component('Staking', require('./components/Staking.vue').default)
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
  { path: '/wallet', component: Wallet },
  { path: '/card', component: Card },
  { path: '/settings', component: Settings },
  { path: '/staking', component: Staking }
]

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})

// Vue init
const app = new Vue({
  router
}).$mount('#app')
