<template>
  <div id="app">
    <header></header>
    <banner :list="listImg"></banner>
  </div>
</template>

<script>
import banner from '../../components/banner'
export default {
  name: 'App',
  data: function () {
    return {
      listImg: [
        {link: '#1',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523528259923&di=8638721d393f3948d93ec0a889c7e29f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F10%2F03%2F78758PICfJU_1024.jpg'
        }, {
          link: '#2',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523528259923&di=8638721d393f3948d93ec0a889c7e29f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F10%2F03%2F78758PICfJU_1024.jpg'
        }, {
          link: '#3',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523528259923&di=8638721d393f3948d93ec0a889c7e29f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F10%2F03%2F78758PICfJU_1024.jpg'
        }, {
          link: '#4',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523528259923&di=8638721d393f3948d93ec0a889c7e29f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F10%2F03%2F78758PICfJU_1024.jpg'
        }, {
          link: '#5',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523528259923&di=8638721d393f3948d93ec0a889c7e29f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F10%2F03%2F78758PICfJU_1024.jpg'
        }
      ]
    }
  },
  components: {
    banner
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0 auto;
  width: 7.5rem;
  background: #f5f4f9;
  height: 100%;
}

header {
  width: 7.5rem;
  height: 3.2rem;
  background: #ffffff;
  height: auto;
  margin-top: 0.4rem;
  padding-bottom: 0.3rem;
}
</style>
