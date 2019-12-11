<template>
  <div>
    {{ message }}
    <div v-if="help" class="text-m">
      <div class="command">count</div>
      <div class="description">show amount of available backgrounds</div>
      <div class="command">current</div>
      <div class="description">show current background number</div>
      <div class="command">[number]</div>
      <div class="description">change background to [number]</div>
    </div>
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
    this.updateBg(this.executedCommand)
  },
  methods: {
    updateBg(comm) {
      const param = comm.split(' ', 2)[1]

      if (param) {
        this.handleParam(param)
      } else {
        this.$store.commit('background/random')
        this.message = 'Changed random background image'
      }
    },
    handleParam(param) {
      if (param <= this.$store.state.background.imageNo) {
        this.$store.commit('background/set', param)
        this.message = 'Set background to ' + param
      } else if (param === 'count') {
        this.message = this.$store.state.background.imageNo
      } else if (param === 'current') {
        this.message = this.$store.state.background.image
      } else if (param === 'help') {
        this.message =
          'Use without parameters to switch to random background. Parameters:'
        this.help = true
      } else {
        this.message =
          '"' +
          param +
          '" is not a valid parameter. Use "' +
          this.executedCommand.split(' ', 2)[0] +
          ' help" to see possible parameters.'
      }
    }
  }
}
</script>
