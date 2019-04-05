<template>
    <v-container class="swiper-inner">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in slideItems" :key="index">
              <v-card>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-action>
                  <img :src="item.image" alt="Image">
                </v-card-action>
              </v-card>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 3,
          initialSlide: 3,
          loop: true,
          coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            delay: 1500
          },
          speed: 1000
        },
        slideItems: [
          {
            'title': 'title1',
            'image': 'https://www.canstarblue.com.au/wp-content/uploads/2016/08/Replacing-light-bulb-for-CFL.jpg',
          },
          {
            'title': 'title2',
            'image': 'http://teamac.co/wp-content/uploads/2018/04/led-lights-lamp-dispose-of-light-bulbs-led-lights-light-spectrum.jpg',
          },
          {
            'title': 'title3',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-BFS5urzqdcjBoNslWQaDHEEwcX0tF-XG9cwowcSZ-ECNlI-xQ',
          },
          {
            'title': 'title4',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDStSOQvkEPlfRvMmqW0fxnSla6o3iTltby2E5lUtw84ID8WI',
          },
          {
            'title': 'title5',
            'image': 'http://timenerdworld.files.wordpress.com/2014/03/light-up-golf-ball1.jpg?w=720&h=480&crop=1',
          },
          {
            'title': 'title6',
            'image': 'https://cdn.shopify.com/s/files/1/0206/8076/products/LEDT8-A2FR_1024x1024_3a13a01e-5b95-49d3-90f2-d883df0020b1_1024x1024.jpg?v=1490771823',
          },
          {
            'title': 'title7',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSucIe-JAhKyLf6W0p7l0oiKlcLOUDRDwjBIffCwV_ZB-Mb_4cg',
          },
        ],
      }
    }
  }
</script>

<style scoped>
  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>