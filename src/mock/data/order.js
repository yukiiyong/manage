import Mock from 'mockjs'

const OrderList = []
let OrderDetail = {}


for (let i = 0; i < 25; i++) {
	OrderList.push(Mock.mock({
		orderSn: Math.abs(Mock.Random.integer()),
		userName: Mock.Random.cname(),
		'price|0-100': 1,
		'payWay|1': ['微信', '支付宝'],
		payTime: Mock.Random.now('second'),
		submitTime: Mock.Random.now('second'),
		'orderSource|1': ['PC订单', 'APP订单'],
		'orderStatus|1-5': 1,
		'orderCategory|0-1': 1
	}))
}

OrderDetail = Mock.mock({
	order: {
		orderSn: Math.abs(Mock.Random.integer()),
		userName: Mock.Random.cname(),
		'price|0-100': 1,
		'payWay|1': ['微信', '支付宝'],
		payTime: Mock.Random.now('second'),
		submitTime: Mock.Random.now('second'),
		'orderSource|1': ['PC订单', 'APP订单'],
		'orderStatus|1-5': 1,
		address: '北京市市辖区东城区 世纪大道111号',
		message: Mock.Random.cparagraph(),
		totalPrice: 23.0, //总金额
		goodsPrice: 21.00, //商品金额
		deliveryPrice: 2.00, //快递费用
		integralPrice: 0.00, //积分减免
		deliveryCompany: '顺丰快递', //快递公司
		deliverySn: '201707196398345', //快递单号
		deliveryTime: "2018-10-16 15:43:41", //发货时间
		refundAmount: 0, //退款金额
		refundType: 0, //退款类型
		refundContent: '', //退款备注
		refundTime: null, //退款时间
		confirmTime: null, //确认收货时间
	},
	user: {
		nickname: 'user123'
	},
	orderGoods: [
		{
			id: 344,
			orderId: 312,
			goodsId: 1181148,
			goodsName: "小白鞋",
			goodsSn: "12542",
			productId: 469,
			number: 2,
			price: 1.00,
			specifications: [
				"标准"
			],
			imageUrl: Mock.Random.image('300x250', Mock.Random.color()),
			comment: 0,
			addTime: "2020-04-15 16:31:03",
			updateTime: "2020-04-15 16:31:03",
			deleted: false
		}
	]
})

let OrderSetting = Mock.mock({
	id: Mock.Random.id(),
	flashOrderOvertime: 60,
	normalOrderOvertime: 120,
	confirmOvertime: 15,
	finishOvertime: 7
})
export { OrderList,OrderDetail, OrderSetting}