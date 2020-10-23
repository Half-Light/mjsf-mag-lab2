import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'jquery/dist/jquery'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
