<template>
  <div
    class="md:flex p-3 mx-auto border-2 border-gray-200 rounded-lg bg-dark-800 md:ml-0 md:mr-auto"
  >
    <div
      class="img-overlay mx-auto w-24 rounded-full mb-2 md:mb-0 md:mx-0 md:mr-3"
    >
      <img src="/img/avatar.jpg" />
    </div>

    <div class="text-center md:text-left md:flex md:flex-col md:justify-center">
      <h2 class="text-2xl">Jen Stehlik</h2>
      <div class="text-purple-200">
        <a :href="'mailto:' + ma + '%40' + mb">{{ ma }}@{{ mb }}</a>
      </div>
      <div>Software Developer</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    ma: 'bmVq',
    mb: 'ZW0ua2lsaGV0cw=='
  }),
  mounted() {
    this.ma = this.decode(this.ma)
    this.mb = this.decode(this.mb)
  },
  methods: {
    reverseString(str) {
      return str === '' ? '' : this.reverseString(str.substr(1)) + str.charAt(0)
    },
    decode(x) {
      return this.reverseString(atob(x))
    }
  }
}
</script>
