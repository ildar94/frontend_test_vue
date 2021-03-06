import Vue from 'vue'
import App from './App.vue'
import './assets/styles/style.scss'
import store from './vuex/store'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
