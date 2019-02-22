import Mock from 'mockjs'

const AdminList = []
for(let i = 0; i < 40;i++) {
  AdminList.push(Mock.mock({
    name: Mock.Random.cname(),
    registime: Mock.Random.date(),
    addr: Mock.Random.province() + Mock.Random.city(),
    'role|1': ['管理员','超级管理员'] 
  }))
}
export {AdminList}