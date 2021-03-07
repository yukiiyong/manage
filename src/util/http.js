import axios from 'axios'
import { Store } from 'vuex'

const service = axios.create({
  timeout: 300000,
  withCredentials: true
})

const cancelToken = axios.CancelToken

let hasLogoutStatus = false //是否某个请求存在需要退出的状态

let queue = []

/**拼接请求的url和方法
 * 同样的`url+method`可以视为相同的请求
 * @param {Object} config 请求头对象
*/
const token = config => {
  return `${config.url}_${config.method}`
}

//中断重复的请求，并从队列中移除
const removeQueue = config => {
  for(let i = 0; i < queue.length; i++) {
    let task = queue[i]
    if(!task) return
    //出现 401，403状态码中断后续请求
    const isLogout = token(config).includes('logout')
    //退出接口跳过中断逻辑
    if(!isLogout && hasLogoutStatus) {
      task.token()
      queue.splice(i, 1)
    } else {
      const cancelMethods = ['post','put','delete']  //需要中断的请求方式
      const {method} = config
      if(cancelMethods.includes(method)) {
        if(task.token === token(config)) {
          task.cancel()
          queue.splice(i, 1)
        }
      }
    }
  }
}
/**
 * 请求错误统一处理
 * @param {Object} response 错误对象
 */
const errHandler = response => {
  const {status, data: {message = ''}} = response
  let msg = message 
  if(!message) {
    switch(status) {
      case 401: 
        msg = '您没有权限访问此操作';
        break;
      case 403: 
        msg = '您的登录状态已失效，请重新登录';
        break;
      case 424: 
        msg = response.data.error;
        break;
      default: 
        msg = '服务请求异常，请刷新重试！'
    }
  }
  hasLogoutStatus = status === 401 || status === 403
  if(hasLogoutStatus) {
    message(error)
    //logout dispatch
  }
  console.log('error', msg)
  message('error', msg)
}

axios.interceptors.request.use(config => {
  //中断之前的同名请求
  removeQueue(config)
  //添加cancelToken
  config.cancelToken = new CancelToken(c => {
    queue.push({token: token(config), cancel: c})
  })
  //登录后添加token
  if(store.getters.token) {
    config.headers['Authorization'] = 
      store.getters.token.token_type + ' ' + store.getters.token.access_token
  }
  return config
}, err => {
  return Promise.reject(err)
})
//请求完成后，拦截请求病处理结果
axios.interceptors.response.use(response => {
  //请求完成后。自动移出队列
  removeQueue(response.config)
  //取消全局loading状态
  store.dispatch('CancelLoading')
  //状态码不为200 处理 reject
  if(response.status !== 200) {
    return Promise.reject(response)
  }
  return response
},err => {
  const {response} = err
  if(response) {
    errHandler(response)
    return Promise.reject(response)
  } else {
    //请求超时
    if(err.message.includes('timeout')) {
      console.log('request timeout')
      message('error', '请求已超时，请刷新或检查网络后重连')
    } else {
      console.log('断网了')
      message('error', '请检查网络是否连接')
    }
  }
})

export default {
  get: (url, data = {}) => {
    return new Promise((resolve, reject) => {
      service.get(store.getters.api.API + url, { params: data})
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    }).catch(error => {
      throw new Error(error)
    })
  },
  post: (url, data = {}) => {
    return new Promise((resolve, reject) => {
      service.post(store.getters.api.API + url, data, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
        withCredentials: true,
        transformRequest: [
          data => {
            return JSON.stringify(data)
          }
        ]
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
    }).catch(error => {
      new Promise.reject(error)
    })
  },
  exportFile: ({url = '', data= {}, method = 'get'}) => {
    return new Promise((resolve, reject) => {
      const isPost = method.toLocaleUpperCase() === 'POST' ?
        {
          headers: {'Content-Type': 'application/json'},
          data
        }
      : 
        {
          params: data
        }
      const downConfig = {
        withCredentials: true,
        responseType: 'blob',
        ...isPost
      }
      service[method](store.getters.api.API + url, downConfig)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    }).catch(error => {
      new Promise.reject(error)
    })
  }
}