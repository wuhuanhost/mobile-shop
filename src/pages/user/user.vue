<template>
  <div id="app" @click="asd">
    <img src="../../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    asd: function () {
      this.$layer.loading('加载中...')
    }}
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: red;
  width: 7.5rem;
  img {
    width: 20px;
  }
}
</style>
