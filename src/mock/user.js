import Mock from 'mockjs'

const USERINFO = Mock.mock({
  'array|20-40': [
    {
      'name|+1': [
        '李明'
      ],
      'age|1-20': 20,
      'addr|+1': [
        '陕西省',
        '河南省'
      ]
    }
  ]
})

const USERGOODS = Mock.mock({
  'goods|1-10': [
    {
      'name|2': '淘宝购物券'
    }
  ]
})
function getUser () {
  return USERINFO.array
}

function getGoods () {
  return USERGOODS
}

export default{
  getUser,
  getGoods
}
