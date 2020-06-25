import axios from 'axios'
import {api} from './config'

export const requestLogin = param => { return axios.post(api.base + api.login, param).then(res => res.data)}

export const getUserList = param => { return axios.get(api.base + api.userList, param).then(res => res.data)}

export const getAdminList = param => { return axios.get(api.base + api.adminList, param).then(res => res.data)}

export const removeUser = param => { return axios.post(api.base + api.removeUser, param).then(res => res.data)}

export const batchRemove = param => { return axios.post(api.base + api.batchRemove, param).then(res => res.data)}

export const editUser = param => { return axios.post(api.base + api.editUser, param).then(res => res.data)}

export const addUser = param => { return axios.post(api.base + api.addUser, param).then(res => res.data)}

export const getGoodsList = param => { return axios.get(api.base + api.goodsList, param).then(res => res.data)}

export const createStorage = param => { return axios.post(api.base + api.createStorage, param).then(res => res.data)}

export const uploadPath = api.base + api.createStorage

export const getOrderList = param => { return axios.get(api.base + api.orderList, param).then(res => res.data) }

export const getOrderDetail = param => {return axios.get(api.base + api.orderDetail, param).then(res => res.data)}

export const getCouponList = param => {return axios.get(api.base + api.couponList, param).then(res => res.data)}

export const getCouponDetail = param => {return axios.get(api.base + api.couponDetail, param).then(res => res.data)}

export const getCoupon = param => {return axios.get(api.base + api.couponRead, param).then(res => res.data)}

export const updateCoupon = param => {return axios.post(api.base + api.updateCoupon, param).then(res => res.data)}

export const createCoupon = param => {return axios.post(api.base + api.createCoupon, param).then(res => res.data)}

export const getSecList = param => { return axios.get(api.base + api.getSecList, param).then(res => res.data)}

export const updateSecStatus = (param) => { return axios.post(api.base + api.updateSecStatus, param).then(res => res.data)}

export const createSec = param => { return axios.post(api.base + api.createSec, param).then(res => res.data)}

export const updateSec = (id,param) => { return axios.post(api.base + api.updateSec+ '/'+ id, param).then(res => res.data)}

export const getOrderSetting = param => { return axios.get(api.base + api.getOrderSetting, param).then(res => res.data)}

export const updateOrderSetting = param => { return axios.post(api.base + api.updateOrderSetting, param).then(res => res.data)}