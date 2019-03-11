import {requestLogin} from 'api/request'
import {getStore, setStore, removeStore} from '@/util/store'
const user = {
  state: {
      token: '',
      roles: [],
      name: '',
      avatar: ''
  },
  mutations: {
    SET_TOKEN: (state, token) =>{
      state.token = token
    },
    SET_NAME: (state, name) =>{
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    loginAction({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        requestLogin(userInfo).then(resp => {
          if(resp && resp.success) {
            commit('SET_TOKEN', resp.data.accessToken)
            resolve(resp)
          }
        }).catch(e => {
          reject('login'+e)
        })
      })
    },
    getInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        let data = getStore({name: 'user'})
        if(data.roles && data.roles.length > 0) {
          commit('SET_ROLES', data.roles)
        } else {
          reject('getInfo: roles must be a non-null array')
        }
        commit('SET_NAME',data.username)
        commit('SET_AVATAR', data.userAvatar)
        resolve(data)
      }).catch(e => {
        reject(e)
      })
    },
    FDLogout({commit}) {
      return new Promise((resolve, reject) => {
        setStore({name: 'user', content: ''})
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_NAME', '')
        commit('SET_AVATAR', '')
        resolve()
      }).catch(e => {
        reject(e)
      })
    } 
  } 
}
export default user