<template>
  <div class="page">
    <Header>
      <div slot="left" class="header-left" @click="this.back">
        <div slot='left-icon'>&lt;</div>
        <div slot='left-label'>返回</div>
      </div>
      <div slot='title'>弹框测试</div>
      <div slot='right-label'>确定</div>
    </Header>
    <div class="content">
      <div class="list-view">
        <TestAsyncComp></TestAsyncComp>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoadingComp from '../components/Loading'
import mixins from '../utils/mixins'
export default {
  name: 'test1',
  mixins: [mixins],
  data () {
    return {
      list: []
    }
  },
  components: {
    Header,
    Footer,
    TestAsyncComp: () => ({
      // 需要加载的组件。应当是一个 Promise
      component: import('../components/TestAsyncComp.vue'),
      // 加载中应当渲染的组件
      loading: LoadingComp,
      // 出错时渲染的组件
      error: LoadingComp,
      // 渲染加载中组件前的等待时间。默认：200ms。
      delay: 0,
      // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
      timeout: 3000
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-view {
  overflow: auto;
  height: 100%;
}
</style>
