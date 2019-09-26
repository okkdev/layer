<template>
  <div>$ {{ executedCommand }}</div>
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
      executedCommand: this.command
    }
  }
}
</script>
