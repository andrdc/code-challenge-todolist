import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './assets/css/main.css'
import './assets/scss/app.scss'
import router from './router'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
