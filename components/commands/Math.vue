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
    try {
      // eslint-disable-next-line
      this.message = eval(this.executedCommand)
    } catch {
      this.message = 'not a valid mathematical expression'
    }
  }
}
</script>
