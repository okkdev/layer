<template>
  <div class="p-3">
    <div class="img-overlay mx-auto w-32 rounded-full mb-2">
      <img src="/img/avatar.jpg" />
    </div>

    <div class="text-center">
      <h2 class="text-lg">Jen Stehlik</h2>
      <div class="text-purple-200">
        <a :href="'mailto:' + ma + '%40' + mb">{{ ma }}@{{ mb }}</a>
      </div>
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
