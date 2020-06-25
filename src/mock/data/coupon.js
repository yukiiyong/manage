import Mock from 'mockjs'

const CouponList = []
const CouponDetail = []
const couponNameArr = ['全品类通用券','移动端全品类通用券','手机品类专用券','食品品类专用券'] 
console.log(couponNameArr[Math.random()*(couponNameArr.length-1)],)
let receiveCount = Math.floor((Math.random() * 49)+1)
for(let i = 0; i < 28; i++) {
  let startTime = Mock.Random.date()
  let publishCount = Mock.Random.natural(50,120)
  CouponList.push(Mock.mock({
    id: Mock.Random.id(),
    couponSn: Math.abs(Mock.Random.integer()),
    couponName: couponNameArr[Math.round(Math.random()*(couponNameArr.length-1))],
    'couponType|0-2': 1, //优惠券类型 0-全场赠券 1-会员赠券 2-注册赠券
    'goodsType|0-2': 1, //商品使用范围 0-全场通用 1-指定商品 2-指定分类
    'min|20-100': 1, //最低消费
    'discount|5-15': 1, //满减金额
    'limit|1-4': 1, // 每人限领
    'total|20-100': 1,   //优惠券总数 发行量
    'status|0-3': 1,
    'platform|0-2': 1,
    startTime: startTime,
    endTime: createTime(startTime, 5), 
    receiveCount: receiveCount, //已领取
    useCount: Mock.Random.natural(0,receiveCount),  //已使用
  }))
}
for(let j = 0; j < receiveCount; j++) {
  let useStatus = Mock.Random.boolean()
  let addTime = Mock.Random.date()
  let useTime = createTime(addTime,3)
  CouponDetail.push(Mock.mock({
    couponCode: Mock.Random.id(),
    userName: Mock.Random.cname(),
    'getType|0-1': 1, //获取方式
    addTime: addTime, //添加时间
    useStatus: Number(useStatus), //使用状态
    useTime: useStatus? useTime: null, //使用时间
    orderSn:  useStatus?Math.abs(Mock.Random.integer()):null, //订单编号
  }))
}

function createTime(time, inteval) {
  if(typeof inteval != 'number') {return}
  let fromNowOn = Math.floor(Math.random()* 4)
  let datetime = new Date(time)
  datetime.setTime(datetime.getTime() + 24*60*60*1000*inteval)
  let dateNum = datetime
  let year = dateNum.getFullYear() < 10 ? '0' + dateNum.getFullYear() :dateNum.getFullYear()
  let month = dateNum.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = dateNum.getDate() < 10?'0' + dateNum.getDate():dateNum.getDate()
  return year + '-' + month + '-' + day 
}
export {CouponList,CouponDetail}