<template>
  <div class="flex">
    <div class="mr-2">></div>
    <div>{{ executedCommand }}</div>
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
