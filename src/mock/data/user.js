import Mock from 'mockjs'
const LoginUsers = [
  {
    username: 'admin',
    password: '123456'
  },
  {
    username: '123456',
    password: '123456'
  }
]
const User = {
  accessToken: Mock.Random.id(),
  username: Mock.Random.cname(),
  userAvatar: Mock.Random.image('300x250',Mock.Random.color()),
  sex: Mock.Random.integer(0, 1),
  'role|1': ['管理员','超级管理员']
}
const UserList = []

for(let i = 0;i < 90; i++) {
  UserList.push(Mock.mock({
    id: Mock.Random.id(),
    name: Mock.Random.cname(),
    sex: Mock.Random.integer(0, 1),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    addr: Mock.Random.province() + Mock.Random.city() + Mock.Random.county()
  }))
}
export {LoginUsers, UserList, User}