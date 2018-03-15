import Axios from 'axios'

// 获取用户已购商品
function getGoods () {
  return Axios.get('/goods')
}

export default {
  getGoods
}
