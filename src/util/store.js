export const setStore = (params) => {
  const {
    name,
    type, //remenber
    content
  } = params
  const obj = {
    dataType: typeof(content),
    content,
    type,
    datetime: new Date().getTime()
  }
  if(type) window.localStorage.setItem(name, JSON.stringify(obj))
    window.sessionStorage.setItem(name, JSON.stringify(obj))
}

export const getStore = (params) => { 
//type = true 获取localStorage，为false获取sessionStora
  const {name, type} = params
  let obj = {}
  let content
  if(type) {
    obj = window.sessionStorage.getItem(name)    
  } else {
    obj = window.localStorage.getItem(name)
  }
  if(!obj) {
    return ''
  } else {
    obj = JSON.parse(obj)
  }
  if(obj.dataType === 'boolean') {
    content = eval(obj.content)
  } else if(obj.dataType === 'number') {
    content = Number(obj.content)
  } else if(obj.dataType === 'string' || obj.dataType === 'object') {
    content = obj.content
  }
  return content
}

export const removeStore = (params) => {
  const {name} = params
  window.localStorage.removeItem(name)
  window.sessionStorage.removeItem(name)
}