const getters = {
  addRoutes: state => state.permission.addRoutes,
  permission_routers: state => state.permission.routers,
  roles: state => state.user.roles
  // loading: state => state.loading.loading
}

export default getters