<template>
  <div>
    "{{ executedCommand }}" is not a valid command. Run help to see valid
    commands.
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
      executedCommand: this.command
    }
  }
}
</script>
