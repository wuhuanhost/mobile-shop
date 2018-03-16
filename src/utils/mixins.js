/**
 * 抽取一些组件的公共方法到mixin中
 */

import router from '../router'

var mixins = {
  methods: {
    back: function () {
      router.go(-1)
    }
  }
}
export default mixins
