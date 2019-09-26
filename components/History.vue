<template>
  <div>$ {{ lastCommand }}</div>
</template>

<script>
export default {
  props: {
    command: {
      default: '',
      type: String
    }
  },
  data() {
    return {
      lastCommand: this.command
    }
  }
}
</script>
