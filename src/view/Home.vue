<template>
  <div class="page">
    <Header>
      <div slot="left" class="header-left" @click="this.back">
        <div slot='left-icon'>&lt;</div>
        <div slot='left-label'>返回</div>
      </div>
      <div slot='title'>首页</div>
      <div slot='right-label'>确定</div>
    </Header>
    <div class="content">
      <div class="list-view">
        <p v-for="(item,key) in list" :key="item.id">
          Line:{{key}}
          <span v-text="item"></span>
        </p>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfiniteLoading from 'vue-infinite-loading'
import mixins from '../utils/mixins'
export default {
  name: 'homne',
  mixins: [mixins],
  data () {
    return {
      list: []
    }
  },
  methods: {
    infiniteHandler ($state) {
      setTimeout(() => {
        const temp = []
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i)
        }
        this.list = this.list.concat(temp)
        $state.loaded()
      }, 1000)
    },
    back: function () {
      this.$router.go(-1)
    }
  },
  components: {
    Header,
    Footer,
    InfiniteLoading
  },
  created: function () {
    this.$store.commit('UPDATE_VIEW', {
      name: 'home',
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
