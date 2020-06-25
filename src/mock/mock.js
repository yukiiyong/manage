import Mock from 'mockjs'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers, UserList, User} from './data/user'
import {AdminList} from './data/admin'
import {GoodsList} from './data/goods'
import {OrderList, OrderDetail, OrderSetting} from './data/order'
import {SecList} from './data/sec'
import { CouponList, CouponDetail} from './data/coupon'

let _UserList = UserList
let _AdminList = AdminList
let _GoodsList = GoodsList
let _OrderList = OrderList
let _OrderDetail = OrderDetail
let _CouponList = CouponList
let _CouponDetail = CouponDetail
let _SecList = SecList
let _OrderSetting = OrderSetting

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
          let _User = Object.assign({}, User)
          // console.log(_User)
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
    //获取商品列表
    mock.onGet('/goods/list').reply(config => {
			let {id, num, name, page} = config
			let goodsList = _GoodsList.filter(goods => {
				if(name && goods.skuName.indexOf(name) === -1) {
					return false
				} else if(id && goods.skuId.indexOf(id) === -1) {
					return false
				} else if(num > 0 && goods.skuNum !== num) {
					return false
				}
				return true
			})
			let goodsListResult = goodsList.slice((page - 1)*15, page * 15)
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {code: 200, success: true, total: goodsList.length, goodsList: goodsListResult}])
				}, 1000)
			})
    })
    mock.onPost('/storage/create').reply(config => {
			let data = config.data
			return new Promise((resolve, reject) => {
				resolve([200, {code: 200, success: true, data: 'success'}])
			})
    })
    mock.onGet('/order/list').reply(config => {
      let {orderSn, userName, submitTime, orderStatus, orderCategory, orderSource, page} = config
			let orderList = _OrderList.filter(order => {
				if(orderSn && orderSn != order.orderSn) {
					return false
				} else if(userName && userName !== order.userName) {
          return false
				} else if(submitTime && submitTime !== '' && order.submitTime != submitTime) {
          return false
				} else if(orderCategory && order.orderCategory !== orderCategory) {
					return false
				} else if(orderSource && order.orderSource.indexof(orderSource) === -1) {
					return false
				}
				return true
			})
      let orderListResult = orderList.slice((page - 1) * 15, page * 15)
			return new Promise((resolve, reject) => {
				resolve([200, {code: 200, success: true, list: orderListResult, total:orderList.length}])
			})
    })
    mock.onGet('/order/detail').reply(config => {
      let {id} = config
      return new Promise((resolve, reject) => {
        resolve([200, {code: 200, success: true, data: _OrderDetail}])
      })
    })
    mock.onGet('/coupon/list').reply(config => {
      let {name, couponType, status, page} = config
      let couponList = _CouponList.filter(coupon => {
        if(name && coupon.couponName != name) {
          return false
        } else if(couponType && coupon.couponType != couponType) {
          return false
        } else if(status && coupon.status != status) {
          return false
        }
        return true
      })
      let couponListResult = couponList.slice((page - 1) * 15, page * 15)
      return new Promise((resolve, reject) => {
        resolve([200, {code: 200, success: true, list: couponListResult, total: couponList.length}])
      })
    })
    mock.onGet('/coupon/detail').reply(config => {
      let {id, orderSn, useStatus, page} = config
      let couponDetail = _CouponDetail.filter(coupon => {
        if(useStatus && useStatus != coupon.useStatus) {
          return false
        } else if(orderSn && coupon.orderSn != orderSn) {
          return false
        }
        return true
      })
      let couponDetailResult = couponDetail.slice((page - 1) * 15, page * 15)
      return new Promise((resolve, reject) => {
        resolve([200, {code: 200, success: true, list: couponDetailResult,total:couponDetail.length}])
      })
    })
    mock.onGet('/coupon/read').reply(config => {
      let {id} = config
      let coupon = _CouponList.filter(coupon => {
        if(id && coupon.id != id) {
          return false
        }
        return true
      })
      if(coupon.length === 1) {
        coupon = coupon[0]
      }
      return new Promise((resolve, reject) => {
        resolve([200, {code: 200,success: true, data: coupon}])
      })
    })
    mock.onPost('/coupon/create').reply(config => {
      let data = JSON.parse(config.data)
      let coupon = Object.assign({}, data)
      coupon.id = Mock.Random.id()
      coupon.couponSn = Math.abs(Mock.Random.integer())
      coupon.receiveCount = 0
      coupon.useCount = 0
      coupon.status = 0
      _CouponList.push(coupon)
      return new Promise((resolve, reject) => {
        resolve([200, {code: 200, success: true}])
      })
    })
    mock.onPost('/coupon/update').reply(config => {
      let data = JSON.parse(config.data)

      return new Promise((resolve, reject) => {
        resolve([200, {code: 200, success: true}])
      })
    })
    mock.onGet('/sec/list').reply(config => {
      let {title, page} = config
      let secList = _SecList.filter(sec => {
        if(title && sec.title !== title) {
          return false
        }
        return true
      })
      let secListResult = secList.slice((page - 1) * 15, page * 15)
      return new Promise((resolve, reject) => {
        resolve([200, {success: true, code: 200, list: secListResult, total: secList.length}])
      })
    })
    mock.onPost('/sec/update/status').reply(config => {
      let {id, status} = JSON.parse(config.data)
      let exist = false
      _SecList.forEach(sec => {
        if(sec.id === id) {
          sec.status = sec.status ? 0 : 1
          exist = true
        }
        
      })
      if(exist) {
        return new Promise((resolve, reject) => {
          resolve([200, {success: true, code: 200, list: _SecList, total: _SecList.length}])
        })
      } else {
        return new Promise((resolve, reject) => {
          resolve([200, {success: false, code: 200, msg: '秒杀活动不存在！'}])
        })
      }
    })
    mock.onPost('/sec/create').reply(config => {
      let sec = JSON.parse(config.data)
      console.log(sec)
      sec.id = Mock.Random.id()
      _SecList.push(sec)
      return new Promise((resolve, reject) => {
        resolve([200, {success: true, code: 200, list: _SecList, total: _SecList.length}])
      })
    })
    mock.onPost(/\/sec\/update\/\d+/).reply(config => {
      let sec = JSON.parse(config.data)
      let result = /\/sec\/update\/(\d+)/.exec(config.url)
      let id = result[1]
      let exist = false

      _SecList.forEach((_Sec, index) => {
        if(_Sec.id === id) {
          _SecList[index] = Object.assign({}, sec)
          exist = true
        }
        
      })
      if(exist) {
        return new Promise((resolve, reject) => {
          resolve([200, {success: true, code: 200, list: _SecList, total: _SecList.length}])
        })
      } else {
        return new Promise((resolve, reject) => {
          resolve([200, {success: false, code: 200, msg: '秒杀活动不存在！'}])
        })
      }
    })
    mock.onPost('/orderSetting/update').reply(config => {
      let setting = JSON.parse(config.data)
      if(!setting instanceof Object) {
        return new Promise((resolve, reject) => {
          resolve([200, {success: false, code: 200, msg: '传入的参数不对'}])
        })
      }
      _OrderSetting = Object.assign({}, setting)
      return new Promise((resolve, reject) => {
        resolve([200, {success: true, code: 200}])
      })
    })
    mock.onGet('/orderSetting').reply(config => {
      let {id} = config
      return new Promise((resolve, reject) => {
        resolve([200, {success: true, code: 200,data: _OrderSetting}])
      })
    })
  }
}