<template>
  <div class="container">
    <template v-for="(comp, index) in componentList">
      <component :is="comp" :key="index" :command="executedCommand" />
    </template>
    $
    <input v-model="command" type="text" autofocus @keyup.enter="execute" />
  </div>
</template>

<script>
import History from '~/components/History'

// Commands
import Help from '~/components/commands/Help'
import Whoami from '~/components/commands/Whoami'
import Invalid from '~/components/commands/Invalid'

export default {
  components: {
    Help,
    Whoami,
    Invalid,
    History
  },
  data: () => ({
    command: '',
    executedCommand: '',
    componentList: []
  }),
  methods: {
    execute(event) {
      this.executedCommand = this.command
      this.componentList.push(History)

      switch (this.command.toLowerCase().trim()) {
        case 'help':
          this.componentList.push(Help)
          break
        case 'whoami':
          this.componentList.push(Whoami)
          break
        default:
          this.componentList.push(Invalid)
      }

      this.command = ''
    }
  }
}
</script>

<style></style>
