// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './utils/px2rem'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VModal from 'vue-js-modal'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Mint from 'mint-ui'
import './mock' // 导入mock数据
import 'mint-ui/lib/style.css'

Vue.use(Mint)
Vue.use(VueAxios, axios)
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
