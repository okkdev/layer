<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.getIp()
  },
  methods: {
    async getIp() {
      this.message = await this.$axios.$get('http://icanhazip.com')
    }
  }
}
</script>
