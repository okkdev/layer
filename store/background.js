export const state = () => ({
  image: 0,
  imageNo: 40
})

export const mutations = {
  random(state) {
    state.image = Math.floor(Math.random() * state.imageNo)
  },
  set(state, no) {
    if (no <= state.imageNo) {
      state.image = no
    }
  }
}
