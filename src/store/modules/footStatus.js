const state = {
  showFooter: true,
  changableNum: 1
}

const getters = {
  isShow (state) {
    return state.showFooter
  },
  getChangeNum (state) {
    return state.changableNum
  }
}

const mutations = {
  SHOW (state) {
    state.showFooter = true
  },
  HIDE (state) {
    state.showFooter = false
  },
  NEWNUM (state, num) {
    state.changableNum += num
  }
}

const actions = {
  hideFooter ({commit}) {
    commit('HIDE')
  },
  showFooter ({commit}) {
    commit('SHOW')
  },
  getNewNum ({commit}, num) {
    commit('NEWNUM', num)
  }
}

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
