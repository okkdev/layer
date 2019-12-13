<template>
  <div>
    {{ message }}
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
      message: ''
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
        if (param === 'projects' || param === 'projects/') {
          this.$store.commit('directory/set', 1)
        } else if (param === 'socialmedia' || param === 'socialmedia/') {
          this.$store.commit('directory/set', 2)
        } else {
          this.message = '"' + param + '" is not a directory'
        }
      } else {
        // Do stuff without param
        this.message = 'no directory stated'
      }
    }
  }
}
</script>
