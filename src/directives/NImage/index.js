const NImage = {}

NImage.install = (Vue, options) => {
  let defaultOptions = {
    gutter: 100,
    activeClass: 'is-loaded',
    imageClass: 'n-loaded-image'
  }
  defaultOptions = Object.assign({}, defaultOptions, options)

  let scrollHandler = null

  const getScrollTop = () => {
    return window.pageYOffset || document.documentElement.scrollTop
  }

  const handleImageLoad = (el, src) => {
    const image = new Image()
    image.classList.add(defaultOptions.imageClass)
    image.onload = () => {
      el.classList.add(defaultOptions.activeClass)
      el.appendChild(image, el.firstChild)
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler, false)
      }
    }
    image.src = src
  }

  NImage.inserted = (el, binding, vnode) => {
    // here bind windows event
    const rect = el.getBoundingClientRect()
    const winHeight = window.innerHeight
    const bigSrc = el.getAttribute('data-src')
    // bind scroll event
    scrollHandler = (e) => {
      const winTop =  getScrollTop()
      if ((winTop + winHeight - defaultOptions.gutter) >= rect.top) {
        if (!el.classList.contains(defaultOptions.activeClass)) {
          handleImageLoad(el, bigSrc)
        }
      }
    }
    // first need call once
    scrollHandler()
    window.addEventListener('scroll', scrollHandler, false)
  }
  Vue.directive('n-image', NImage)
}

export default NImage
