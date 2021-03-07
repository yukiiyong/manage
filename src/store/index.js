import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import permission from './module/permission'
import user from './module/user'
import loading from './module/loading'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    user,
    loading
  },
  getters
})

export default store