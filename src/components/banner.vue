<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,key) in list">
                <a :href="item.link"><img :src="item.url" :alt="key" /></a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'banner',
  props: ['list'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
          //   type: 'custom',
          //   renderCustom: function (swiper, current, total) {
          //     var _html = ''
          //     for (var i = 1; i <= total; i++) {
          //       _html += '<span class="swiper-pagination-bullet"></span>'
          //     }
          //     return _html // 返回所有的页码html
          //   }
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        }
      }
    }
  },

  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 3rem;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-pagination-bullet {
    width: 0.233rem;
    height: 0.233rem;
    display: inline-block;
    background: #7c5e53;
  }
}

.swiper-pagination {
  display: flex;
  flex-direction: row;
  width: 1.6rem !important;
  height: 0.4rem;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0.4rem;
  padding: 0 0.1rem;
  margin-left: calc(calc(100% - 1.6rem) / 2);
  .swiper-pagination-bullet {
    width: 0.14rem;
    height: 0.14rem;
    background: #666666;
    border-radius: 0.14rem;
  }

  .swiper-pagination-bullet-active {
    background: #656565;
  }
}
</style>
