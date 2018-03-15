<template>
  <div class="page">
    <Header></Header>
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
export default {
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
<style scoped>
.list-view {
  overflow: auto;
  height: 100%;
}
</style>
