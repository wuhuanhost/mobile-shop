import './px2rem'
import Vue from 'vue'
import $ from 'jquery'
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer-mobile'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(layer)
Vue.prototype.$http = axios
Vue.prototype.$ = $
export default Vue
