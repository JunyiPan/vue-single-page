const state = {
  collects: []
}

const getters = {
  renderCollects (state) {
    return state.collects
  }
}

const mutations = {
  PUSHCOLLECTS (state, items) {
    state.collects.push(items)
  }
}

const actions = {
  invokePushItems ({commit}, item) {
    commit('PUSHCOLLECTS', item)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
