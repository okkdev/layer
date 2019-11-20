<template>
  <div class="h-full grid">
    <div
      ref="output"
      class="output flex flex-col justify-start overflow-y-auto"
    >
      <template v-for="(comp, index) in componentList">
        <component :is="comp" :key="index" :command="executedCommand" />
      </template>
    </div>

    <div class="flex flex-row border-2 bg-gray-900 rounded margin p-3">
      <label for="commandline" class="flex-grow-0 mr-2">></label>
      <input
        id="commandline"
        v-model="command"
        type="text"
        autofocus
        class="bg-transparent focus:outline-none flex-grow"
        @keyup.enter="execute"
      />
    </div>
  </div>
</template>

<script>
import History from '~/components/History'
import Invalid from '~/components/Invalid'

// Commands
import Help from '~/components/commands/Help'
import Whoami from '~/components/commands/Whoami'

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

      this.$nextTick(() => {
        this.$refs.output.scrollTop = this.$refs.output.scrollHeight
      })

      this.command = ''
    }
  }
}
</script>

<style>
.output > :first-child {
  margin-top: auto;
}

.grid {
  display: grid;
  grid-template-rows: 1fr min-content 1fr;
}
</style>
