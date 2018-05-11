<template>
  <div class="home">
    <div class="category" v-for="item in images" :key="item.id">
      <router-link :to="`${item.category}`">
        <img :src="cropImage(item.url, 300, 200)" alt="photography">
        <div class="intro">
          {{item.intro}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { cropImage, blurryImageCrop } from '~/utils'
import data from '~/data'

export default {
  name: 'Home',
  data() {
    return {
      images: data.images
    }
  },
  methods: {
    cropImage,
    blurryImageCrop
  }
}
</script>

<style lang="scss">
  .home {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .category {
    flex: 1 1;
    width: 300px;
    box-shadow: 0 20px 20px rgba(0,0,0,.08);
    transition: all 250ms cubic-bezier(.02, .01, .47, 1);
    background-color: #fff;
    &:hover {
      box-shadow: 0 40px 40px rgba(0,0,0,.16);
      transform: translate(0,-20px);
    }
    &:nth-child(2) {
      margin-left: 20px;
      margin-right: 20px;
    }
    a {
      display: block;
      height: 100%;
      text-decoration: none;
      font-size: 14px;
      line-height: 22px;
      color: #4a4a4a;
      img {
        display: block;
        width: 100%;
      }
    }
    .intro {
      display: flex;
      align-items: center;
      padding: 20px;
      height: 80px;
    }
  }
</style>
