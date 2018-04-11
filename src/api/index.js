/**
 * 首页数据请求api
 */
import axios from 'axios'

export function getGoodsList () {
  return axios.get('/get')
}
