import store from './store'

export default {
  bind(el, binding) {
    const {value} = binding.value //格式必须为['editor','admin'],传入的角色
    const roles = store.getters.roles // 用户拥有的角色
    if(value && typeof value === 'array' && value.length > 0) {
      const permissionRoles = Object.assign({}, value)
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })
      if(!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error('needs roles! Like v-permission=[editor,admin]')
    }
  }
}