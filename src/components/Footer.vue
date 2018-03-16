<template>
  <div class="footer">

    <div class="tabbar-item">
      <router-link to="/home">
        <div class="tabbar-item-icon-block">
          <div class="tabbar-item-icon tabbar-item-icon-home"></div>
          <sup>1</sup>
        </div>
        <div class="tabbar-item-label tabbar-item-label-home">首页</div>
      </router-link>
    </div>
    <div class="tabbar-item">
      <router-link to="/test">
        <div class="tabbar-item-icon-block">
          <div class="tabbar-item-icon tabbar-item-icon-mine"></div>
          <!-- <sup class="tip"></sup> -->
        </div>
        <div class="tabbar-item-label tabbar-item-label-mine">测试</div>
      </router-link>
    </div>
    <div class="tabbar-item">
      <router-link to="/test1">
        <div class="tabbar-item-icon-block">
          <div class="tabbar-item-icon tabbar-item-icon-mine"></div>
          <!-- <sup class="tip"></sup> -->
        </div>
        <div class="tabbar-item-label tabbar-item-label-mine">测试1</div>
      </router-link>
    </div>
    <div class="tabbar-item">
      <router-link to="/mine">
        <div class="tabbar-item-icon-block">
          <div class="tabbar-item-icon tabbar-item-icon-mine"></div>
          <sup class="tip"></sup>
        </div>
        <div class="tabbar-item-label tabbar-item-label-mine">我的</div>
      </router-link>
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
  }
}
</script>
<style lang="scss" scoped>
.footer {
  width: 7.5rem;
  height: 0.96rem;
  border-top: 1px solid #cccccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background: #eeeeee;
  position: absolute;
  bottom: 0;

  .tabbar-item {
    flex: 1;
    // border-right: 1px solid #cccccc;
    text-align: center;
    // line-height: 0.4rem;
    height: 100%;
    width: 100%;

    //navbar激活后的样式
    .router-link-active {
      .tabbar-item-icon {
        background: pink !important;
      }
      .tabbar-item-label {
        color: orangered;
      }
    }
    //navbar 默认样式
    a {
      display: block;
      height: inherit;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: #aaaaaa;
    }
    .tabbar-item-icon-block {
      height: 0.6rem;
      width: 0.5rem;
      // background: red;
      margin: 0 auto;
      position: relative;
    }

    .tabbar-item-label {
      flex: 1;
      text-align: center;
      font-size: 0.16rem;
      // background: blue;
    }
  }
  .tabbar-item-icon {
    position: absolute;
    height: 0.46rem;
    width: 100%;
    top: 0.1rem;
    background: chartreuse;
  }
  sup {
    display: inline-block;
    min-width: 0.3rem;
    height: 0.3rem;
    background: red;
    border-radius: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    position: absolute;
    left: 0.4rem;
    top: 0.04rem;
    color: #eeeeee;
  }

  .tip {
    display: inline-block;
    min-width: 0.2rem;
    height: 0.2rem;
    background: red;
    border-radius: 0.1rem;
    line-height: 0.1rem;
    text-align: center;
    position: absolute;
    left: 0.4rem;
    top: 0.04rem;
  }
}
</style>
