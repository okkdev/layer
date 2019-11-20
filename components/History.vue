<template>
  <div>> {{ executedCommand }}</div>
</template>

<script>
export default {
  props: {
    command: {
      default: '',
      type: String
    }
  },
  data: () => {
      executedCommand: this.command
    }
  }
}
</script>
