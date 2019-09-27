<template>
  <div class="absolute overflow-y-auto">
    <div class="flex flex-col text-left">
      <template v-for="(comp, index) in componentList">
        <component
          :is="comp"
          :key="index"
          :command="executedCommand"
          class="flex-row"
        />
      </template>

      <div class="flex-row sticky bottom-0 bg-black">
        <label for="commandline" class="flex-none mr-3">$</label>
        <input
          id="commandline"
          v-model="command"
          type="text"
          class="flex-1 appearance-none bg-transparent"
          autofocus
          @keyup.enter="execute"
        />
      </div>
    </div>
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
  mounted() {
    window.addEventListener('keydown', function(event) {
      if (!event.ctrlKey) {
        document.getElementById('commandline').focus()
      }
    })
  },
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
        case 'clear':
          this.componentList = []
          break
        case '':
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
