<template>
  <div class="ryvideo" :class="{fullscreen: isFullScreen}">
    <div class="ryvideo-container" :style="`width: ${width}px;height: ${height}px;`">
      <video :poster="poster" :src="src" preload="true" :width="width" :height="height" ref="video" playsinline>
        <p>we believe you need to upgrade your browser :)</p>
      </video>
      <div class="ryvideo-controls">
        <div class="ryvideo-controls-inner">
          <div class="ryvideo-controls-play-pause">
            <a class="ryvideo-controls-play" @click="onVideoPlay" v-if="!isPlaying"></a>
            <a class="ryvideo-controls-pause" @click="onVideoPause" v-if="isPlaying"></a>
          </div>
          <span class="ryvideo-controls-currenttime">{{currentTime}}</span>
          <div class="ryvideo-progress" ref="progress" @click="setBackTo">
            <span class="ryvideo-progress-active" @click="setBackTo" :style="{width: activeProgress + '%'}"></span>
            <span class="ryvideo-progress-slider" :style="{left: activeProgress + '%'}" @mousedown="handleSliderMousedown"></span>
          </div>
          <span class="ryvideo-duration">{{duration}}</span>
          <a class="ryvideo-controls-fullscreen" @click="toggleFullScreen"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RyVideo',
    props: {
      poster: {
        type: String,
        default: 'http://7xj610.com1.z0.glb.clouddn.com/Rectangle-poster.png'
      },
      src: {
        type: String,
        default: 'http://7xj610.com1.z0.glb.clouddn.com/what-most-schools-dont-teach.mp4'
      },
      width: {
        type: Number,
        default: 320
      },
      height: {
        type: Number,
        default: 180
      },
      onPlay: {
        type: Function
      },
      onPause: {
        type: Function
      },
      onFullScreen: {
        type: Function
      },
      offFullScreen: {
        type: Function
      }
    },
    data() {
      return {
        currentTime: '00:00',
        duration: '00:00',
        progressValue: 0,
        activeProgress: 0,
        isPlaying: false,
        progressMax: 0,
        isFullScreen: false
      }
    },
    mounted() {
      const videoEle = this.$refs.video

      videoEle.addEventListener('loadeddata', () => {
        this.progressMax = parseInt(videoEle.duration)
        this.duration = this.formatTime(videoEle.duration)
      })
      videoEle.addEventListener('timeupdate', () => {
        this.currentTime = this.formatTime(videoEle.currentTime)
        this.progressValue = videoEle.currentTime
        this.activeProgress = parseFloat(this.progressValue / this.progressMax) * 100
        if (this.activeProgress > 100) {
          this.activeProgress = 100
        }
        if (this.activeProgress < 0) {
          this.activeProgress = 0
        }
      })
      videoEle.addEventListener('play', () => {
        if (!this.isPlaying) {
          this.isPlaying = true
        }
      })
      videoEle.addEventListener('pause', () => {
        if (this.isPlaying) {
          this.isPlaying = false
        }
      })
    },
    methods: {
      onVideoPlay() {
        if (this.onPlay && typeof this.onPlay === 'function') {
          this.onPlay(this.$refs.video)
        } else {
          this.$refs.video.play()
          this.isPlaying = true
        }
      },
      onVideoPause() {
        if (this.onPause && typeof this.onPause === 'function') {
          this.onPause(this.$refs.video)
        } else {
          this.$refs.video.pause()
          this.isPlaying = false
        }
      },
      formatTime(num) {
        const temp = parseFloat(num)
        let secs = parseInt(temp % 60)
        let mins = parseInt((temp / 60) % 60)
        secs = `0${secs}`.slice(-2)
        mins = `0${mins}`.slice(-2)
        return `${mins}:${secs}`
      },
      setBackTo(e) {
        e.stopPropagation()
        let x = e.pageX
        const progressEle = this.$refs.progress
        const videoEle = this.$refs.video
        const rect = progressEle.getBoundingClientRect()
        let diff = x - rect.left
        if (diff < 0) {
          diff = 0
        }
        if (diff > rect.width) {
          diff = rect.width
        }
        videoEle.currentTime = parseFloat(diff / rect.width) * videoEle.duration
      },
      toggleFullScreen() {
        if (this.isFullScreen) {
          if (this.offFullScreen && typeof this.offFullScreen === 'function') {
            this.offFullScreen(this.$refs.video)
          }
        } else {
          if (this.onFullScreen && typeof this.onFullScreen === 'function') {
            this.onFullScreen(this.$refs.video)
          }
        }
        this.isFullScreen = !this.isFullScreen
      },
      handleSliderMousedown(e) {
        e.stopPropagation()
        e.preventDefault()
        this.attachEventsOnDocument()
      },
      handleMousemove(e) {
        const videoEle = this.$refs.video
        const rect = this.$refs.progress.getBoundingClientRect()
        let x = e.pageX
        let diff = x - rect.left
        if (diff < 0) {
          diff = 0
        }
        if (diff > rect.width) {
          diff = rect.width
        }
        this.progressValue = parseFloat(diff / rect.width) * videoEle.duration
        this.activeProgress = parseFloat(this.progressValue / this.progressMax) * 100
        if (this.activeProgress > 100) {
          this.activeProgress = 100
        }
        if (this.activeProgress < 0) {
          this.activeProgress = 0
        }
        videoEle.currentTime = this.progressValue
      },
      handleMouseup(e) {
        document.removeEventListener('mousemove', this.handleMousemove, false)
      },
      attachEventsOnDocument() {
        document.addEventListener('mousemove', this.handleMousemove, false)
        document.addEventListener('mouseup', this.handleMouseup, false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ryvideo {
    &.fullscreen {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3000;
      background-color: rgba(0,0,0,0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      .ryvideo-controls {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 3100;
      }
    }
  }
  .ryvideo-container {
    position: relative;
    z-index: 1000;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ryvideo-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0.10) 0%, #1A1B1E 100%);
    z-index: 1100;
    -webkit-user-select: none;
    user-select: none;
  }
  .ryvideo-controls-inner {
    height: 45px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  .ryvideo-controls-play, .ryvideo-controls-pause, .ryvideo-controls-fullscreen {
    display: block;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    outline: none;
  }
  .ryvideo-controls-play {
    background-image: url('../assets/play.svg');
  }
  .ryvideo-controls-pause {
    background-image: url('../assets/pause.svg');
  }
  .ryvideo-controls-fullscreen {
    width: 30px;
    height: 24px;
    background-image: url('../assets/fullscreen.svg');
  }
  .ryvideo-controls-currenttime, .ryvideo-duration {
    font-size: 10px;
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;
  }
  .ryvideo-progress {
    flex: 1 1;
    display: flex;
    height: 2px;
    background-color: #d2d2d2;
    align-items: center;
    position: relative;
    z-index: 1200;
    cursor: pointer;
    .ryvideo-progress-active {
      position: absolute;
      left: 0;
      z-index: 1300;
      height: 2px;
      background-color: #1478F0;
      cursor: pointer;
    }
  }
  .ryvideo-progress-slider {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1400;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
  @media (max-width:640px) {
    .ryvideo-container {
      display: block;
      width: 100% !important;
      height: auto !important;
      video {
        width: 100% !important;
        height: auto !important;
      }
    }
  }
</style>


