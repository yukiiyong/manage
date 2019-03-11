import {constrantRouterMap, asyncRouterMap} from '@/router'
/**
 * [hasPermission description]
 * 对传入的route进行鉴权，如果其meta.role中含有传入的roles数组中的role，返回true
 * @param  {[type]}  roles  [用户权限列表]
 * @param  {[type]}  routes [需要操作的路由(单个)，route.meta.role]
 * @return {Boolean}        [description]
 */
function hasPermission(route, roles) {
  if(route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)     
  }
  else {
    return true
  }
}
/**
 * [filterAsyncRoutes description]
 * 对传入的asyncRouterMap进行比较，如果其meta.role中含有传入的roles数组中的role，返回true
 * 然后检测是否含有children，有则对children的route进行比较
 * @param  {[type]} asyncRouterMap [description]
 * @param  {[type]} roles          [description]
 * @return {[type]} accessedRouters  [description]
 */
function filterAsyncRoutes(asyncRouterMap, roles) {
  let accessedRouters = asyncRouterMap.filter(route => {
    if(hasPermission(route, roles)) {
      if(route.children && route.children.length) {
        route.children = filterAsyncRoutes(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    addRoutes: [],
    routers: constrantRouterMap
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRoutes = routers
      state.routers = constrantRouterMap.concat(routers) 
    }
  },
  actions: {
    /**
     * [GenerateRoutes description]
     * 首先将函数封装成promise，然后检测role中是否含有admin，是则accessedRouters = asyncRouterMap
     * 否则对asyncRouterMap进行过滤
     * 返回accessedRouters
     * @param {[type]} options.commit [description]
     * @param {[type]} data           [description]
     */
    GenerateRoutes({commit}, data) {
      return new Promise((resolve, reject) => {
        const {roles} = data
        let accessedRouters 
        if(roles.indexOf('admin') > 0) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRoutes(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission