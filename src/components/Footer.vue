<template>
  <div class="footer">
      <div v-for="item in tabbar" :key="item.id" @click="go(item.name)">
        <span v-if="current===item.name" style="color:orange">{{item.title}}</span>
        <span v-else>{{item.title}}</span>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      leftIcon: '',
      title: '首页',
      rightIcon: ''
    }
  },
  computed: {
    tabbar: function () {
      return this.$store.getters.getTabbar
    },
    current: function () {
      return this.$store.getters.getCurrent
    }
  },
  methods: {
    go (name) {
      this.$store.commit('UPDATE_VIEW', name)
      this.$router.push({ path: name })
    }
  }
}
</script>
<style scoped>
.footer {
  width: 7.5rem;
  height: 40px;
  border-top: 1px solid #cccccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background: #eeeeee;
}
.footer div {
  flex: 1;
  border-right: 1px solid #cccccc;
  text-align: center;
  line-height: 40px;
}
</style>
