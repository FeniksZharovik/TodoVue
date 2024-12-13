import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/main' // Mengimpor Vuex store dari store/main.js

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, // Menghubungkan router ke aplikasi
  store   // Menghubungkan Vuex store ke aplikasi
}).$mount('#app')
