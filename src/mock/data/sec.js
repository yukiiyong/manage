import Mock from 'mockjs'

const SecList = []

for(let i = 0; i < 8; i++) {
  SecList.push(Mock.mock({
    id: Mock.Random.id(),
    title: Mock.Random.ctitle(),
    'status|0-1': 1,
    startDate: Mock.Random.date(),
    endDate: Mock.Random.date()
  }))
}

export {SecList}