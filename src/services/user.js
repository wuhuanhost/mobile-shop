import user from '../api/user'
import goods from '../api/goods'

function getUserInfoAndGoodsInfo () {
  return Promise.all([user.getUser(), goods.getGoods()]).then(result => {
    console.log(result)
    // result = null
    return new Promise(function (resolve, reject) {
      if (!result) {
        reject(new Error('ERROR'))
      }
      resolve({
        user: result[0].data,
        goods: result[1].data
      })
    })
  })
}

export default{
  getUserInfoAndGoodsInfo
}
