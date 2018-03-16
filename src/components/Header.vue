<template>
  <div class="header">
    <slot name="left" class="header-left">
      <slot name="left-icon" class="header-item-icon"></slot>
      <slot name="left-label" class="header-item-label"></slot>
    </slot>
    <div class="header-center" slot="title">
      <slot name="title"></slot>
    </div>
    <div class="header-right">
      <div class="header-item-label" slot="right-label">
        <slot name="right-label"></slot>
      </div>
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
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="scss">
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
  position: absolute;
  top: 0;
  font-size: 0.36rem;
  div {
    height: 40px;
    line-height: 40px;
  }
}

.header-left {
  width: 1.5rem;
  // background: red;
  display: flex;
  flex-direction: row;
  // .header-item-icon {
  //   flex: 1;
  //   padding-left: 0.36rem;
  // }
  :first-child {
    flex: 1;
    padding-left: 0.36rem;
  }
  // .header-item-label {
  //   width: 1.04rem;
  //   // background: aquamarine;
  //   padding-left: 0.1rem;
  // }
  :last-child {
    width: 1.04rem;
    // background: aquamarine;
    padding-left: 0.1rem;
  }
}
.header-center {
  flex: 1;
  font-weight: bold;
  // background: pink;
}
.header-right {
  width: 1.5rem;
  // background: blueviolet;
  display: flex;
  flex-direction: row;
  // background: pink;
  .header-item-label {
    // background: red;
    text-align: right;
    flex: 1;
    padding-right: 0.36rem;
  }
}
</style>
