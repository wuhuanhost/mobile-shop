import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import mine from './modules/mine'
import page from './modules/page'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home,
    mine,
    page
  },
  strict: debug
})
