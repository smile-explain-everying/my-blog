<template>
  <div class="videos">
    <div class="video-item">
      <ry-video :width="width" :height="height"></ry-video>
    </div>
    <div class="video-item">
      <ry-video :width="width" :height="height" :src="src" :poster="poster"></ry-video>
    </div>
  </div>
</template>

<script>
  import RyVideo from '~/components/RyVideo.vue'
  import { cropImage } from '~/utils'
  export default {
    name: 'NVideo',
    components: {
      RyVideo
    },
    data() {
      return {
        width: 940,
        height: 529,
        src: 'http://7xj610.com1.z0.glb.clouddn.com/TRF-SPORT.st.mp4',
        poster: cropImage('http://7xj610.com1.z0.glb.clouddn.com/poster2.png', 940, 529)
      }
    }
  }
</script>

<style lang="scss">
.videos {
  margin-top: 80px;
  margin-bottom: 80px;
}
.video-item {
  margin-bottom: 30px;
}
</style>
