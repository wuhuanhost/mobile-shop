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

<style lang="scss">
/**------------------全局变量的定义------------------------------**/

/**----------------------全局mixin定义---------------------------**/

/**---------------------全局function定义-------------------------**/

@import './style/index.scss';

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  width: $app-width;
  height: 100%;
  margin: 0 auto;
  font-size: 16px;
  // @include font-dpr;
}

.page {
  width: $app-width;
  height: 100%;
  display: relative;
}

.content {
  height: calc(100% - 1.36rem);
  position: absolute;
  top: 40px;
  background: #ffffff;
  width: 7.5rem;
  // overflow: auto;
}
.v--modal {
  /* width: 6rem !important;
  height: auto !important; */
  /* margin: 0 auto; */
}
</style>
