import Axios from 'axios'

// 获取用户信息的接口
function getUser () {
  return Axios.get('/test')
}
// 调用的时候getUser.then((response=>{})).catch((err)=>{})

export default {
  getUser

}
