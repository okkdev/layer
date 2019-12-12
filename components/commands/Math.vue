<template>
  <div>
    {{ message }}
  </div>
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
      executedCommand: this.command,
      message: '',
      help: false
    }
  },
  mounted() {
    // eslint-disable-next-line
    this.message = eval(this.executedCommand)
  }
}
</script>
