import axios from 'axios'
import {api} from './config'

export const requestLogin = param => { return axios.post(api.base + api.login, param).then(res => res.data)}

export const getUserList = param => { return axios.get(api.base + api.userList, param).then(res => res.data)}

export const getAdminList = param => { return axios.get(api.base + api.adminList, param).then(res => res.data)}

export const removeUser = param => { return axios.post(api.base + api.removeUser, param).then(res => res.data)}

export const batchRemove = param => { return axios.post(api.base + api.batchRemove, param).then(res => res.data)}

export const editUser = param => { return axios.post(api.base + api.editUser, param).then(res => res.data)}

export const addUser = param => { return axios.post(api.base + api.addUser, param).then(res => res.data)}
