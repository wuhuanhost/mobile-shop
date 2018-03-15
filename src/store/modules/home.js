import { ADD } from '../mutation-types'
// 状态
const state = {
  name: 'vue2.x',
  num: 0
}

// 获取状态，过滤需要的值，第一个参数为（state）
const getters = {
  getMinTwo (state) {
    return state.num > 2 ? state.num : ''
  }
}

// 修改状态，只能同步提交
const mutations = {
  [ADD] (state, data) {
    state.num += 1
  }
}

// 提交mutation，可以有异步操作
const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions

}
