<template>
  <div>{{ message }}</div>
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
      param: 0,
      message: ''
    }
  },
  mounted() {
    this.updateBg(this.executedCommand)
  },
  methods: {
    updateBg(comm) {
      const param = comm.split(' ', 2)[1]

      if (param) {
        this.handleParam(param)
      } else {
        this.$store.commit('background/random')
        this.message = 'Refreshed random background image'
      }
    },
    handleParam(param) {
      if (param <= this.$store.state.background.imageNo) {
        this.$store.commit('background/set', param)
        this.message = 'Set background to ' + param
      } else if (param === 'count') {
        this.message = this.$store.state.background.imageNo
      } else {
        this.message = '"' + param + '" is not a valid parameter'
      }
    }
  }
}
</script>
