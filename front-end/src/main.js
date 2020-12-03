import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './race-data.js'

let data = {
  races: mock,
  favs: []
}

Vue.config.productionTip = false

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
