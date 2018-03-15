<template>
  <div id="app">
    <modal name="alert">测试alert</modal>
    <v-dialog></v-dialog>
    <modals-container></modals-container>
    <Header></Header>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
export default {
  name: 'app',
  data () {
    return {
      name: 'qwe'
    }
  },
  components: {
    Header,
    Footer,
    Loading
  },
  created () {
    this.name = this.$store.state.home.name
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 7.5rem;
  height: 100%;
  margin: 0 auto;
  font-size: 0.22rem;
  display: flex;
  flex-direction: column;
}

.v--modal {
  width: 6rem !important;
  height: auto !important;
  margin: 0 auto;
}
</style>
