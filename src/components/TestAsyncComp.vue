<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <ul>
        <li v-for="item in data" :key="item.id" style="font-size:0.22rem;line-height:1rem;">{{item.name}}{{item.age}}{{item.addr}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    toast: function () {
      this.$toast('数据正在获取中......')
    }
  },
  created: function () {
    var inst = this.$toast('数据正在获取中......')
    setTimeout(() => {
      this.axios.get('/test').then(response => {
        this.data = response.data
        inst.close()
        this.$nextTick(() => {
          this.scroll = new Bscroll(this.$refs.wrapper, {})
        })
      })
    }, 3000)
  },
  components: {}
}
</script>

<style scoped>

</style>
