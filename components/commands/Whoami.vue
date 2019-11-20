<template>
  <div class="p-3">
    <div class="img-overlay mx-auto w-32 rounded-full mb-2">
      <img src="/img/avatar.jpg" />
    </div>

    <div class="text-center">
      <h2 class="text-lg">Jen Stehlik</h2>
      <div class="text-purple-200">
        <a :href="'mailto:' + mail">{{ mail }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mail: ''
  }),
  mounted() {
    const m = 'ZW0ua2lsaGV0c0BuZWo='
    this.mail = this.reverseString(atob(m))
  },
  methods: {
    reverseString(str) {
      return str === '' ? '' : this.reverseString(str.substr(1)) + str.charAt(0)
    }
  }
}
</script>
