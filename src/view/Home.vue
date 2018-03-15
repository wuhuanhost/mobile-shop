<template>
  <div class="view">
    <div class="content">
      <div class="list-view">
        <p v-for="(item,key) in list" :key="item.id">
          Line:{{key}}
          <span v-text="item"></span>
        </p>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </div>
    </div>
  </div>
</template>

<script>
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
    InfiniteLoading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  width: 7.5rem;
  height: 100%;
  display: relative;
}
.content {
  height: calc(100% - 40px - 40px);
  position: absolute;
  top: 40px;
  background: #ffffff;
  width: 7.5rem;
}

.list-view{
  overflow: auto;
  height:100%;
}
</style>
