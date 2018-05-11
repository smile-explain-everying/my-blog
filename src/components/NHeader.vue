<template>
  <header class="nheader">
    <div class="logo">
      <router-link :to="{name: 'home'}">
        <img src="../assets/logo1.png" alt="logo">
      </router-link>
    </div>
    <div class="moto">
      有你有我,程序人生
    </div>
    <div class="tabs">
      <router-link :to="{name: 'nphoto'}">PHOTO</router-link>
      <router-link :to="{name: 'nmusic'}">MUSIC</router-link>
      <router-link :to="{name: 'nvideo'}">VIDEO</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'NHeader'
  }
</script>

<style lang="scss">
.logo {
  position: absolute;
  top: 30px;
  left: 30px;
  img {
    display: block;
    width: 35px;
  }
}
.moto {
  margin-top: 30px;
  font-size: 30px;
  line-height: 44px;
  letter-spacing: 0.05em;
  font-weight: 300;
  color: rgba(0,0,0,0.44);
  text-align: center;
}
.tabs {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: block;
    padding: 7px 18px;
    border: 1px solid rgba(0,0,0,0.44);
    border-radius: 20px;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 13px;
    color: rgba(0,0,0,0.44);
    &:hover, &.router-link-active {
      color: #4a4a4a;
      border-color: #4a4a4a;
    }
  }
}
</style>
