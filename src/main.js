/* eslint-disable no-new */
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'vuetify/dist/vuetify.min.css'
import 'swiper/dist/css/swiper.css'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
