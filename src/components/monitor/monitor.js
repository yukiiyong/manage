import {getStore, setStore} from '@/util/store.js'

let monitor = {
  errors: [],
  performance: [],
  resources: []
}
const getPerformance = () => {
  if(!window.performance) {
    return
  }
  const timing = window.performance.timing
  const performance = {
    redirect: timing.redirectEnd - timing.redirectStart, //重定向耗时
    whiteScreen: timing.domLoading - timing.navigationStart, //白屏时间
    dom: timing.domComplete - timing.domLoading, //Dom渲染耗时
    load: timing.loadEventEnd - timing.loadEventStart, //页面加载耗时
    unload: timing.unloadEventEnd - timing.unloadEventStart, //页面卸载耗时
    request: timing.responseEnd - timing.requestStart, //请求耗时
    time: new Date().getTime() //获取性能信息时当前时间
  }
  return performance
}
const getResource = () => {
  if(!window.performance) return
  const data = window.performance.getEntriesByType('resource')
  const resource = {
    xmlhttprequest: [],
    css: [],
    other: [],
    script: [],
    img: [],
    link: [],
    fetch: [],
    time: new Date().getTime()
  }
  data.forEach(item => {
    const arr = resource[item.initiatorType]
    arr && arr.push({
      name: item.name,
      duration: item.duration.toFixed(2),
      size: item.transferSize,
      protocol: item.nextHopProtocol
    })
  })
  return resource
}
window.addEventListener('error', e => {
  const target = e.target
  if(target != window) {
    monitor.errors.push({
      type: target.localName,
      url: target.src || target.href,
      msg: (target.src || target.href) + 'is load error',
      time: new Date().getTime()
    })
  }
}, true)

window.onerror = function(msg, url, row, col, error) {
  monitor.errors.push({
    type: 'javascript',
    row: row,
    col,
    msg: error && error.stack ?error.stack: msg,
    url: url,
    time: new Date().getTime()
  })
}

window.addEventListener('unhandledrejection', e => {
  monitor.errors.push({
    type: 'promise',
    msg: (e.reason && e.reason.msg) || e.reason || '',
    time: new Date().getTime()
  })
})

//upload data msg
window.onload = () => {
  // console.log('window is onload')
  if(window.requestIdleCallback) {
    window.requestIdleCallback(() => {
      monitor.performance = getPerformance()
      monitor.resources = getResource()
    })
  } else {
    setTimeout(() => {
      monitor.performance = getPerformance()
      monitor.resources = getResource()
    }, 0)
  }
}
// window.addEventListener('load', logData, false)
// function logData() {
//   navigator.sendBeacon('/log', monitor)
// }
export {getPerformance,getResource}