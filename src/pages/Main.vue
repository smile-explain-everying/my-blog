<template>
  <div class="container">
    <n-header></n-header>
    <router-view></router-view>
    <n-footer></n-footer>
  </div>
</template>

<script>
import NHeader from '~/components/NHeader.vue'
import NFooter from '~/components/NFooter.vue'

export default {
  name: 'Main',
  components: {
    NHeader,
    NFooter
  }
}
</script>
<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    width: 940px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (max-width:640px) {
    .container {
      width: 100%;
      padding-top: 30px;
      padding-bottom: 30px;
    }
    div.logo {
      top: 15px;
      left: 15px;
    }
    div.moto {
      font-size: 20px;
      line-height: 26px;
      text-align: center;
    }
    div.home, div.photos, div.musics, div.videos {
      margin-top: 30px;
      margin-bottom: 30px;
      display: block;
    }
    div.category {
      width: 100%;
      margin-bottom: 20px;
      &:nth-child(2) {
        margin-left: 0;
        margin-right: 0;
      }
    }
    div.photo-item {
      width: 100%;
      margin-bottom: 20px;
      height: auto;
      &:nth-child(3n+2) {
        margin-left: 0;
        margin-right: 0;
      }
    }
    .footer {
      display: block;
      width: 300px;
      margin: 0 auto;
      .group {
        width: 100px;
        text-align: center;
      }
    }
    div.image-viewer-container {
      width: 100%;
      max-height: 400px;
      .image-viewer-slide {
        display: flex;
        justify-content: center;
        img {
          max-height: 400px;
        }
      }
    }
    a.image-viewer-close {
      top: 20px;
      right: 20px;
      svg {
        width: 24px;
        height: 24px;
      }
    }
    div.music-list {
      justify-content: space-between;
      padding-left: 15px;
      padding-right: 15px;
      margin-top: 30px;
    }
    div.music-item {
      width: 48%;
      margin-right: 0;
      .music-title {
        font-size: 14px;
      }
    }
  }
</style>
