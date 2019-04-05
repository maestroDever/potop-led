<template>
  <v-container>
    <v-responsive style="height: 500px;">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
      </swiper>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
    &.slide-1 {
      background-image:url('https://www.canstarblue.com.au/wp-content/uploads/2016/08/Replacing-light-bulb-for-CFL.jpg');
    }
    &.slide-2 {
      background-image:url('http://teamac.co/wp-content/uploads/2018/04/led-lights-lamp-dispose-of-light-bulbs-led-lights-light-spectrum.jpg');
    }
    &.slide-3 {
      background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-BFS5urzqdcjBoNslWQaDHEEwcX0tF-XG9cwowcSZ-ECNlI-xQ');
    }
    &.slide-4 {
      background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDStSOQvkEPlfRvMmqW0fxnSla6o3iTltby2E5lUtw84ID8WI');
    }
    &.slide-5 {
      background-image:url('http://timenerdworld.files.wordpress.com/2014/03/light-up-golf-ball1.jpg?w=720&h=480&crop=1');
    }
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>