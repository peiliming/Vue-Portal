<template>
  <div id="contents">
    I am a Portal Test

  </div>
</template>

<style lang="scss" scoped>

</style>
<script>
  export default {
    data() {
      return {
        data: null
      }
    },
//    computed: {
//      display: function() {
//        return this.portal()
//      }
//    },
    activated() {
      this.portal()
    },
    methods: {
      portal: function() {
        window.onload = () => {
          if(!('HTMLPortalElement' in window)) {
            return;
          }

          const contents = document.getElementById('contents')
          const portal = document.createElement('portal')
          portal.src = 'http://github.com'
          portal.style.position = 'fixed'
          portal.style.width = '100%'
          portal.style.height = '100%'
          portal.style.transform = 'scale(0.4)'
          portal.style.left = '40px'
          portal.style.bottom = '20px'
          portal.style.transformOrigin = 'bottom left'
          contents.appendChild(portal)

          portal.addEventListener('click', () => {
            doSomeFancyAnimation(portal)
          })

          /*portal.addEventListener('transitionend', (e) => {
            if(e.properyName === 'transform') {
              portal.activate()
            }
          })*/

          window.addEventListener('portalactivate', evt => {
            const portal = evt.adoptPredecessor()
            contents.body.append(portal)
          })

          const doSomeFancyAnimation = (portal) => {
            portal.style.transform = `
              scale(1.0)
              translateX(-20px)
              translateY(20px)
            `
            portal.style.transition = 'transform .4s'
          }
        }
      }
    }
  }
</script>
