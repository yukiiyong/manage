// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import Mock from './mock'
import {getStore} from '@/util/store'
Mock.bootstrap()

Vue.use(ElementUI)
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   let user = JSON.parse(sessionStorage.getItem('user'))
//   if(user.token) { //判断有无token
//     if(to.path === '/login') {next('/')}
//     else {
//       if(store.getters.roles.length === 0) { 
//         store.dispatch('getInfo').then(data => {
//           let roles = data.roles
//           store.dispatch('GenerateRoutes', {roles}).then(() => {
//             console.log('addRoutes', store.getters.addRoutes)
//             router.addRoutes(store.getters.addRoutes)
//             next({...to, replace: true}) // make sure addRoutes complete
//           })
//         }).catch(e => {
//           alert(e)
//         })
//       } else {
//         next() //用户有权限时直接进入下一个url
//       }
//     }
//   } else {
//     let whiteList = ['/login']
//     if(whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next({path: '/login'})
//     }
//   }
// })
router.beforeEach((to, from, next) => {
  if(to.path === '/login') {
    sessionStorage.removeItem('user')
    next()
    return
  }
  let user = getStore({name: 'user', type: true})
  let roles = user.roles || []
  // next()
  if(!user.accessToken) {
    next({path: '/login'})
  } else {
      console.log(store.getters.roles)
    if(store.getters.roles.length === 0) { 
      store.dispatch('getInfo').then(data => {
        let roles = data.roles
        store.dispatch('GenerateRoutes', {roles}).then(() => {
          let routes = store.getters.addRoutes
          // console.log('addRoutes', store.getters.addRoutes)
          router.options.routes = store.getters.permission_routers //router.options.routes 不是响应式的，需要手动设置
          router.addRoutes(routes)
          next({...to, replace: true}) // make sure addRoutes complete
        })
      }).catch(e => {
        alert(e)
      })
    } else {
      next() //用户有权限时直接进入下一个url
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>',
  render: h => h(App)
})
