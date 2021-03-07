import Vue from 'vue'
import UILoading from './loading.vue'

let loading = undefined //Loading生成的实例

const Loading = Vue.extend(UILoading)
//调用close时需要先把this.$loading()的返回值缓存起来(loadings)，再用loadings.close()
Loading.prototype.close = function() {
  if(loading) {
    loading = undefined
  }
  console.log('loading close is using')
  this.isShow = false
  setTimeout(() => {
    if(this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.$destroy()
  }, 300)
}

const LoadingInit = (options = {}) => {
  if(loading) {
    loading.close()
  }
  let parent 
  if(options.parent && Object.prototype.toString.call(options.parent) === '[object String]') {
    parent = document.querySelector(options.parent)
  } else {
    parent = document.body
  }
  loading = new Loading({
    el: document.createElement('div'),
    data: options
  })
  parent.appendChild(loading.$el)
  Vue.nextTick(() => {
    loading.isShow = true
  })

  return loading //返回处理后的Loading实例
}

Vue.prototype.$loadings = LoadingInit
Vue.directive('loadings', {
  bind(el,binding) {
    const loading = new Loading({
      el: document.createElement('div'),
      data: {}
    })
    el.appendChild(loading.$el)
    el.loading = loading
    loading.isShow = binding.value
    // Vue.nextTick(() => { 
    //   //会产生update执行而nextTick还没执行的情况
    //   //因为页面的loading存在初始值
    //   loading.isShow = binding.value
    // })
  },
  update(el, binding) {
    console.log(binding)
    if(binding.oldValue !== binding.value) {
      el.loading.isShow = binding.value
    }
  },
  unbind(el) {
    let loading = el.loading
    if(loading.$el.parentNode) {
      loading.$el.parentNode.removeChild(loading.$el)
    }
    loading.$destroy()
    loading = null
  }
})
export default LoadingInit