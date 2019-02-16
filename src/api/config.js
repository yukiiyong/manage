
export const header = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json',
    'Connection': 'close'
  }
}

export const api = {
  base: 'http://rap2api.taobao.org/app/mock/119360/',
  login: 'api/login',
  userList: 'user/list',
  adminList: 'user/admin',
  removeUser: 'user/remove',
  batchRemove: 'user/batchremove',
  editUser: 'user/edit',
  addUser: 'user/add'
}