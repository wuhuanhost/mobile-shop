<template>
  <div class="header">
    <div @click="back()">{{currentNavbar.leftTitle}}</div>
    <div>{{currentNavbar.title}}</div>
    <div>{{currentNavbar.rightTitle}}</div>
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
  methods: {
    back () {
      this.$store.commit('POP_VIEW')
      this.$router.go(-1)
    }
  },
  computed: {
    currentNavbar: function () {
      console.log('.............')
      return this.$store.getters.getCurrentNavbar[0]
      // return this.$store.getters.currentNavbar('home')
    }
  }
}
</script>
<style scoped>
.header {
  width: 7.5rem;
  height: 40px;
  border-bottom: 1px solid #cccccc;
  box-sizing: border-box;
  line-height: 40px;
  text-align: center;
  background: #eeeeee;
  display: flex;
  flex-direction: row;
  position:absolute;
  top:0;
}
.header div {
  flex: 1;
  padding:0 10px;
}
.header div:first-child {
  text-align: left;
}
.header div:last-child {
  text-align: right;
}
</style>
