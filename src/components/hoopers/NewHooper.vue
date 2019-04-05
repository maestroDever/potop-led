<template>
  <hooper :setttings="hooperSettings" :infiniteScroll="true" :autoPlay="true">
    <slide>
      slide 1
    </slide>
    <slide>
      slide 2
    </slide>
    <slide>
      slide 3
    </slide>
    <slide>
      slide 4
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  name: 'NewHooper',
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      hooperSettings: {
        autoPlay: true,
        centerMode: true,
        playSpeed: 1000,
        transition: 400,
        rtl: true,
        infiniteScroll: true,
      }
    }
  },
}
</script>
