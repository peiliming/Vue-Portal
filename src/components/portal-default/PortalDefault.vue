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
            portal.activate()
          })

        }
      }
    }
  }
</script>
