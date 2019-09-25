<template>
  <div class="container">
    $
    <input v-model="command" type="text" @keyup.enter="execute" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      command: ''
    }
  },
  methods: {
    execute(event) {
      switch (this.command.trim) {
        case 'help':
          // code block
          break
        case 'whoami':
          // code block
          break
        case '':
          break
        default:
          return (
            '"' +
            this.command +
            '"' +
            ' is not a valid command. Run help to see valid commands.'
          )
      }
      alert(this.command)
    }
  }
}
</script>

<style></style>
