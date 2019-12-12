<template>
  <div
    class="bg-cover bg-center h-full"
    :style="'background-image: url(/img/bg/' + bgImage + '.gif)'"
  >
    <div class="bg-overlay overflow-hidden h-full">
      <div class="container mx-auto h-full">
        <Commandline class="stutter"></Commandline>
      </div>
    </div>
  </div>
</template>

<script>
import Commandline from '~/components/Commandline'

export default {
  components: {
    Commandline
  },
  computed: {
    bgImage() {
      return this.$store.state.background.image
    }
  },
  mounted() {
    this.$store.commit('background/random')
  }
}
</script>

<style>
.stutter {
  animation: stutter 0.9ms linear infinite;
}

@keyframes stutter {
  from {
    transform: translate(0px, 0px);
    opacity: 1;
  }
  to {
    transform: translate(0px, 1px);
    opacity: 0.9;
  }
}

.bg-overlay {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
