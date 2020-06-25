
export const header = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'
    // 'Connection': 'close'
  }
}

export const api = {
  base1: 'http://rap2api.taobao.org/app/mock/119360/',
  base: '/',
  login: 'api/login',
  userList: 'user/list',
  adminList: 'user/admin',
  removeUser: 'user/remove',
  batchRemove: 'user/batchremove',
  editUser: 'user/edit',
  addUser: 'user/add',
  goodsList: 'goods/list',
  createStorage: 'storage/create',
  orderList: 'order/list',
  orderDetail: 'order/detail',
  couponList: 'coupon/list',
  couponDetail: 'coupon/detail',
  couponRead: 'coupon/read',
  updateCoupon: 'coupon/update',
  createCoupon: 'coupon/create',
  getSecList: 'sec/list',
  updateSecStatus: 'sec/update/status',
  createSec: 'sec/create',
  updateSec: 'sec/update',
  updateOrderSetting: 'orderSetting/update',
  getOrderSetting: 'orderSetting'
}