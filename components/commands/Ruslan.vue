<template>
  <div>
    <a href="https://ruslansteiger.app/" target="_">
      You are a 🎁 for the {{ globe }}
    </a>
  </div>
</template>

<script>
export default {
  data: () => ({
    globe: '🌍'
  }),
  mounted() {
    setInterval(() => {
      this.rotateGlobe()
    }, 500)
  },
  methods: {
    rotateGlobe() {
      switch (this.globe) {
        case '🌍':
          this.globe = '🌎'
          break
        case '🌎':
          this.globe = '🌏'
          break
        case '🌏':
          this.globe = '🌍'
          break
      }
    }
  }
}
</script>
