<template>
    <v-container class="swiper-inner">
        <swiper :options="swiperOption">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </v-container>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'AboutUs',
    data() {
      return {
        swiperOption: {
          effect: 'cube',
          grabCursor: true,
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          },
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
              delay: 1800
          },
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-inner {
    position: relative;
    overflow: hidden;
    height: 330px;
    padding: 15px;
  }
  .swiper-container {
    width: 300px!important;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
</style>
