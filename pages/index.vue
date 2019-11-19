<template>
  <div class="bg-cover" :style="'background-image: url(' + bgImage + ')'">
    <div class="container mx-auto h-screen">
      <Commandline></Commandline>
    </div>
  </div>
</template>

<script>
import Commandline from '~/components/Commandline'

export default {
  components: {
    Commandline
  },
  data: () => ({
    bgImage: '',
    imageNo: 40
  }),
  mounted() {
    this.bgImage = 'img/' + Math.floor(Math.random() * this.imageNo) + '.gif'
  }
}
</script>

<style>
body {
  font-family: 'Overpass Mono', 'Courier New', Courier, monospace;
  font-size: 1.2em;
  color: beige;
  background-color: black;
}
</style>
