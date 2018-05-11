<template>
  <div>
    <div class="photos">
      <div class="photo-item" v-for="(item, index) in photos" :key="item.id" @click="showViewer(index)">
        <img :src="cropImage(item.url, 300, 300)" alt="photography">
      </div>
    </div>
    <image-viewer :show="isShowViewer" :images="photos" :active-index="activeIndex" :on-close="handleClose"></image-viewer>
  </div>
</template>

<script>
  import data from '~/data'
  import { cropImage, blurryImageCrop } from '~/utils'
  import ImageViewer from '~/components/ImageViewer.vue'
  export default {
    name: 'NPhoto',
    components: {
      ImageViewer
    },
    data() {
      return {
        photos: data.photos,
        isShowViewer: false,
        activeIndex: 0
      }
    },
    methods: {
      cropImage,
      blurryImageCrop,
      showViewer(index) {
        this.isShowViewer = true
        this.activeIndex = index
      },
      handleClose() {
        this.isShowViewer = false
      }
    }
  }
</script>

<style lang="scss">
.photos {
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
}
.photo-item {
  width: 300px;
  height: 300px;
  background-color: #fff;
  margin-bottom: 20px;
  cursor: zoom-in;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:nth-child(3n+2) {
    margin-left: 20px;
    margin-right: 20px;
  }
  img {
    display: block;
    width: 100%;
  }
}
</style>
