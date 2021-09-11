import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import '@mdi/font/css/materialdesignicons.min.css'
import './main.scss'

Vue.config.productionTip = false
Vue.use(Buefy)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')