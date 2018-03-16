<template>
  <div id="app">
    <modal name="alert">测试alert</modal>
    <v-dialog></v-dialog>
    <modals-container></modals-container>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Loading from './components/Loading'
export default {
  name: 'app',
  data () {
    return {
      name: 'qwe'
    }
  },
  components: {
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
  overflow: hidden;
}

#app {
  width: 7.5rem;
  height: 100%;
  margin: 0 auto;
  font-size: 0.22rem;
}
.page {
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
.v--modal {
  /* width: 6rem !important;
  height: auto !important; */
  /* margin: 0 auto; */
}
</style>
