export const strict = false

export const state = () => ({
  count: 0,
})

export const mutations = {
  incrCount (state) {
    state.count += 1
  }
}

export const actions = {
  incrCount ({ commit }) {
    commit('incrCount')
  }
}
