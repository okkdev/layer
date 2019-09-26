<template>
  <div>
    "{{ lastCommand }}" is not a valid command. Run help to see valid commands.
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
      lastCommand: this.command
    }
  }
}
</script>
