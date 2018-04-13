<template>
  <div id="app">
    <Header></Header>
    <Banner :list="listImg"></Banner>
    <div class="goods-info-content">
      <!-- 商品标题 -->
      <div class="goods-title"></div>
      <!-- 商品信息 -->
      <div class="goods-remark">
        <h2>商品信息</h2>
        <div class="goods-remark-item">
          <div class="item-title">商品编号</div>
          <div class="item-contnets">123456454</div>
        </div>
        <div class="goods-remark-item">
          <div class="item-title">产区</div>
          <div class="item-contnets">波尔多</div>
        </div>
        <div class="goods-remark-item">
          <div class="item-title">商品编号号码</div>
          <div class="item-contnets">商品编号商品编号商品编号商品编号商品编号</div>
        </div>
      </div>
    </div>
    <div style="padding-bottom:1.6rem"><img src="../../assets/goods-info.png" alt=""></div>
    <BuyFooter></BuyFooter>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import BuyFooter from '../../components/BuyFooter'
export default {
  name: 'App',
  data: function () {
    return {
      listImg: [
        {
          link: '#1',
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523528259923&di=8638721d393f3948d93ec0a889c7e29f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F10%2F03%2F78758PICfJU_1024.jpg'
        },
        {
          link: '#2',
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523528259923&di=8638721d393f3948d93ec0a889c7e29f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F10%2F03%2F78758PICfJU_1024.jpg'
        },
        {
          link: '#3',
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523528259923&di=8638721d393f3948d93ec0a889c7e29f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F10%2F03%2F78758PICfJU_1024.jpg'
        },
        {
          link: '#4',
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523528259923&di=8638721d393f3948d93ec0a889c7e29f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F10%2F03%2F78758PICfJU_1024.jpg'
        },
        {
          link: '#5',
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523528259923&di=8638721d393f3948d93ec0a889c7e29f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F10%2F03%2F78758PICfJU_1024.jpg'
        }
      ]
    }
  },
  components: {
    Header,
    Banner,
    BuyFooter
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
.goods-info-content {
  background: #ffffff;
  height: auto;
  padding: 0.5rem;
  text-align: left;
  h2 {
    font-size: 0.4rem;
  }
}

.goods-remark-item {
  font-size: 0.32rem;
  display: flex;
  flex-direction: row;
  min-height: 0.3rem;
  // background: red;
  padding: 0.15rem 0;
  // justify-content: center;
  // align-items: center;

  .item-title {
    height: auto;
    // background: blue;
    display: inline-block;
    width: 1.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-overflow: ellipsis;
    color: #000000;
    font-weight: 400;
  }
  .item-contnets {
    flex: 1;
    font-size: 0.3rem;
    color: #aaaaaa;
    padding-left: 1rem;
    // background: chocolate;
  }

}

  img{
    width:100%;
    padding:0;
  }
</style>
