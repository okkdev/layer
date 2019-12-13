export const state = () => ({
  image: 0,
  imageNo: 44
})

export const mutations = {
  random(state) {
    state.image = Math.floor(Math.random() * state.imageNo)
  },
  set(state, n) {
    if (n <= state.imageNo) {
      state.image = n
    }
  }
}
