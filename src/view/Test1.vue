<template>
    <div class="page">
        <Header></Header>
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
export default {
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
  },
  created: function () {
    this.$store.commit('UPDATE_VIEW', {
      name: 'test1',
      desc: '描述......'
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
