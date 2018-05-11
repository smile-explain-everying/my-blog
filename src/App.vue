<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="normalize.css"></style>
<style src="swiper/dist/css/swiper.css"></style>
<style lang="scss">
html, body {
  height: 100%;
}
a {
  text-decoration: none;
}
body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga" on;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0;
  color: #4a4a4a;
  background-color: #fafafa;
  word-break: break-all;
}
</style>
