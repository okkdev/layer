<template>
  <div>
    "{{ command }}" is not a valid command. Run help to see valid commands.
  </div>
</template>

<script>
export default {
  props: {
    command: {
      default: '',
      type: String
    }
  }
}
</script>
