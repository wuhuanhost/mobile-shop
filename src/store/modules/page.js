/**
 * 页面状态管理
 */
import { UPDATE_VIEW, POP_VIEW } from '../mutation-types'

const state = {
  current: 'home', // 当前页面名称,
  pageStack: ['home'],
  navBar: [// 导航
    {
      name: 'home',
      leftIcon: '',
      leftTitle: '返回',
      title: '首页',
      rightIcon: '',
      rightTitle: '',
      type: '0'// navbar类型,比如中间带搜索框的navbar,0=正常导航，1=中间带搜索框的导航
    }, {
      name: 'mine',
      leftIcon: '',
      leftTitle: '返回',
      title: '我的',
      rightIcon: '',
      rightTitle: '',
      type: ''
    }
  ],
  tabBar: [// 选项卡切换页面
    {
      name: 'home',
      title: '首页',
      icon: '',
      hoverIcon: ''
    }, {
      name: 'mine',
      title: '我的',
      icon: '',
      hoverIcon: ''
    }

  ]
}

const getters = {
  getCurrentNavbar: (state) => {
    return state.navBar.filter((item) => { return item.name === state.current })
  },
  getTabbar: (state) => {
    return state.tabBar
  },
  getCurrent: (state) => {
    return state.current
  }

}

const mutations = {
  [UPDATE_VIEW] (state, data) {
    state.pageStack.push(data)
    state.current = data
  },
  [POP_VIEW] (state, data) {
    state.pageStack.pop()
    console.log(state.pageStack[state.pageStack.length - 1])
    state.current = state.pageStack[state.pageStack.length - 1]
  }
}

export default {
  state,
  getters,
  mutations
}
