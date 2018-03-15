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
import Services from '../services'
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
      Services.user.getUserInfoAndGoodsInfo().then(response => {
        console.log(response)
        this.data = response.user
        inst.close()
        this.$nextTick(() => {
          this.scroll = new Bscroll(this.$refs.wrapper, {})
        })
      }).catch(() => {
        this.$toast('数据获取出现异常！！！')
      })
    }, 3000)
  },
  components: {}
}
</script>

<style scoped>

</style>
