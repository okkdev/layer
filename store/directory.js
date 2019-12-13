export const state = () => ({
  current: 0,
  directories: ['', 'projects/', 'socialmedia/']
})

export const getters = {
  currentDir(state) {
    return state.directories[state.current]
  }
}

export const mutations = {
  set(state, n) {
    state.current = n
  }
}
