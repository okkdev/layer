<template>
  <div class="h-full grid">
    <div
      ref="output"
      class="output flex flex-col justify-start overflow-y-auto px-4"
    >
      <template v-for="(comp, index) in componentList">
        <component :is="comp" :key="index" :command="executedCommand" />
      </template>
    </div>

    <div
      class="flex flex-row border-2 border-gray-200 bg-texture shadow-md rounded margin p-3"
    >
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

.bg-texture {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.5' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
