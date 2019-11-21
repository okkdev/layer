<template>
  <div>
    {{ message }}
    <div v-if="help" class="text-m flex">
      <div class="mr-3 text-orange-200">
        <div>count</div>
        <div>[number]</div>
      </div>
      <div>
        <div>- show amount of available backgrounds</div>
        <div>- change background to [number]</div>
      </div>
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
      } else if (param === 'help') {
        this.message =
          'Use without parameters to switch to random background. Parameters:'
        this.help = true
      } else {
        this.message =
          '"' +
          param +
          '" is not a valid parameter. Use "background help" to see possible parameters.'
      }
    }
  }
}
</script>
