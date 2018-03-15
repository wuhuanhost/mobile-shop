// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './utils/px2rem'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VModal from 'vue-js-modal'
Vue.use(VModal, { dialog: true, dynamic: true })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
