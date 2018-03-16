<template>
  <div class="page">
    <Header>
      <div slot="left" class="header-left" @click="this.back">
        <div slot='left-icon'>&lt;</div>
        <div slot='left-label'>返回</div>
      </div>
      <div slot='title'>异步组件测试</div>
      <div slot='right-label'>确定</div>
    </Header>
    <div class="content">
      <div class="list-view">
        <div class="da dasdsa">
          <div style="width:1rem;" class="test-ell">你好啊测试下超出长度如何处理......</div>
        </div>
        <h2>日期格式化过滤器使用</h2>
        <h3>{{date|dateformat('yyyy-mm-dd hh:MM:ss','123')}}</h3>
        <div class="test-directive" v-color="color">测试自定义指令</div>
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
  name: 'test',
  mixins: [mixins],
  data () {
    return {
      list: [],
      date: new Date(),
      color: 'blue'
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
    }
  },
  components: {
    Header,
    Footer,
    InfiniteLoading
  },
  created: function () {
    this.$store.commit('UPDATE_VIEW', {
      name: 'test',
      desc: '描述......'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/index.scss";

.test-ell {
  @include morell(2);
}

.list-view {
  overflow: auto;
  height: 100%;
}
.test-directive {
  width: 2rem;
  height: 2rem;
  background: red;
}

.da {
  width: 100%;
  height: 1rem;
  background: #ffffff;
  @include onepx("bottom",red);
}
</style>
