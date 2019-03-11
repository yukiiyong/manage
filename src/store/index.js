import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import permission from './module/permission'
import user from './module/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    user
  },
  getters
})

export default store