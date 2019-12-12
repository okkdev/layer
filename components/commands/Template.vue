<template>
  <div>
    {{ message }}
    <div v-if="help" class="text-m">
      <!-- add parameter help here -->
      Parameters:
      <div class="ml-2">
        <div class="command">Parameter</div>
        <div class="description">Parameter description</div>
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
    this.handleParam(this.executedCommand)
  },
  methods: {
    handleParam(comm) {
      const param = comm.split(' ', 2)[1]

      if (param) {
        // Do stuff with param
        if (param === 'really') {
          this.message = 'yes this is just a template'
        } else if (param === 'help') {
          this.help = true
        } else {
          this.message =
            '"' +
            param +
            '" is not a valid parameter. Run "' +
            comm.split(' ', 2)[0] +
            ' help to see possible parameters."'
        }
      } else {
        // Do stuff without param
        this.message = 'this is just a template'
      }
    }
  }
}
</script>
