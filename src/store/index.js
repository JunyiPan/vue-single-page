import Vue from 'vue'
import Vuex from 'vuex'
import collection from './modules/collection'
import footStatus from './modules/footStatus'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collection,
    footStatus
  }
})
