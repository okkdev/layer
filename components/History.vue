<template>
  <div>> {{ command }}</div>
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
