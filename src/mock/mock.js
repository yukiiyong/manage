import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers, UserList, User} from './data/user'
import {AdminList} from './data/admin'
let _UserList = UserList
let _AdminList = AdminList
export default {
  bootstrap() {
    let mock = new MockAdapter(axios)
    //mock success request
    mock.onGet('/success').reply(200, {
      success: true
    })
    //mock error request
    mock.onGet('/error').reply(500, {
      success: false
    })
    //login
    mock.onPost('/api/login').reply(config => {
      let {username, password} = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          let _User = User
          let hasUser = LoginUsers.some(u => {
            if(u.username === username && u.password === password) {
              _User.username = username
              if(username === 'admin') {
                _User.roles = ['admin']
              }
              return true
            }
          })
          if(hasUser) {
            resolve([200, {code: 200, success: true,msg: '登录成功',data: _User}])
          } else {
            resolve([200, {code: 500, success: false,msg: '登录失败！'}])
          }
        }, 1000)
      })
    })
    //获取用户列表
    mock.onGet('/user/list').reply(config => {
      let {name, page} = config
      let userList = _UserList.filter(user => {
        if(name && user.name.indexOf(name) === -1) return false
          return true
      })
      let userListResult = userList.slice((page-1) * 15,page * 15)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {code: 200, success: true, total: userList.length, users: userListResult}])
        }, 1000)
      })
    })
    //获取管理员列表
    mock.onGet('/user/admin').reply(config => {
      let {name, page} = config
      let adminList = _AdminList.filter(admin => {
        if(name && admin.name.indexOf(name) === -1) return false
          return true
      })
      let adminListResult = adminList.slice((page-1) * 15, page * 15)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{success: true,total: adminList.length,users: adminListResult}])
        }, 500)
      })
    })
    //删除用户
    mock.onPost('/user/remove').reply(config => {
      let {accessToken, id} = JSON.parse(config.data) 
      if(!accessToken) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([200,{success: false,msg: 'token丢失'}])
          },500)
        })
      }
      //过滤userlist
      _UserList = _UserList.filter(u => u.id !== id)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{success: true,msg: '用户删除成功'}])
        },500)
      })
    })
    //批量删除用户
    mock.onPost('/user/batchremove').reply(config => {
      let {accessToken, ids} = JSON.parse(config.data) 
      ids = ids.split(',')
      if(!accessToken) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([200,{success: false,msg:'token丢失'}])
          }, 500)
        })
      }
      _UserList = _UserList.filter(u =>!ids.include(u.id))
      return new Promise((resolve,reject) => {
        setTimeout(()=>{
          resolve([200,{success: true, msg: '批量删除用户成功！'}])
        },500)
      })
    })
    //编辑用户
    mock.onPost('/user/edit').reply(config => {
      let {id, name, age, sex, birth, addr} = JSON.parse(config.data) 
      //遍历找出id,然后修改资料
      _UserList.some(u => {
        if(u.id === id) {
          u.name = name
          u.age = age
          u.sex = sex
          u.birth = birth
          u.addr = addr
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{success: true,msg: '用户资料更新成功'}])
        },500)
      })
    })
    //新增用户
    mock.onPost('/user/add').reply(config => {
      let {name, age, sex, birth, addr} = JSON.parse(config.data) 
      let hasUser = _UserList.some(user => {
        if(user.name === name) {return true}
        return false
      })
      if(hasUser) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([200,{success: false,msg:'已存在用户'}])
          },500)
        })
      }
      _UserList.push({
        name: name,
        age: age,
        sex: sex,
        birth: birth,
        addr: addr
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{success: true, msg: '用户添加成功！'}])
        },500)
      })
    })
  }
}