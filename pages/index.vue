<template>
  <div class="container">
    <template v-for="(comp, index) in componentList">
      <component :is="comp" :key="index" />
    </template>
    $
    <input v-model="command" type="text" @keyup.enter="execute" />
  </div>
</template>

<script>
import Help from '~/components/Help'
import Whoami from '~/components/Whoami'

export default {
  components: {
    Help,
    Whoami
  },
  data: () => ({
    command: '',
    componentList: []
  }),
  methods: {
    execute(event) {
      switch (this.command.toLowerCase().trim()) {
        case 'help':
          this.componentList.push('Help')
          break
        case 'whoami':
          this.componentList.push('Whoami')
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
    }
  }
}
</script>

<style></style>
