<template>
  <section>
		<el-card class="mt20" shadow="never">
			<div class="search-tit ">
				<i class="el-icon-search"></i>
				<span >筛选搜索</span>
				<el-button @click="resetSearch" class="search-btn" size="mini">重置</el-button>
				<el-button @click="getList" type="primary" class="search-btn" size="mini">查找</el-button>
			</div>
			<el-form :model="filters" ref="form" label-width="150px">
				<el-form-item label="订单编号:" prop="orderSn">
					<el-input v-model="filters.orderSn" placeholder="请输入订单编号" ></el-input>
				</el-form-item>
				<el-form-item label="用户账号:" prop="userName">
					<el-input v-model="filters.userName" placeholder="请输入用户账号" ></el-input>
				</el-form-item>
				<el-form-item label="提交时间:" prop="submitTime">
					<el-date-picker v-model="filters.submitTime" type="date" placeholder="请输入提交时间" ></el-date-picker>
				</el-form-item>
				<el-form-item label="订单分类:" prop="orderCategory">
					<el-select v-model="filters.orderCategory" placeholder="请选择订单分类" >
						<el-option v-for="(key,value) in categoryMap" :key="key" :label="key" :value="value" ></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="订单来源:" prop="orderSource">
					<el-select v-model="filters.orderSource" placeholder="请选择订单来源" >
						<el-option v-for="(key,value) in sourceMap" :key="key" :label="key" :value="key" ></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="订单状态:" prop="orderStatus">
					<el-select v-model="filters.orderStatus" placeholder="请选择订单状态" >
						<el-option v-for="(key,value) in statusMap" :key="key" :label="key" :value="value" ></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</el-card>
		<el-card shadow="never" class="mt20">
			<div class="tit">
				<i class="fa fa-file-text-o" ></i>
				<span>数据列表</span>
			</div>
		</el-card>
		<el-table :data="orders" v-loading="listLoading" style="margin: 20px 10px;" border>
			<el-table-column prop="orderSn" label="订单编号" align="center" width="100"></el-table-column>
			<el-table-column prop="userName" label="用户账号" align="center"></el-table-column>
			<el-table-column prop="totalPrice" label="订单金额" align="center">
				<template slot-scope="scope" >
					<span>{{scope.row.price}}</span>
					<span slot="append">元</span>
				</template>
			</el-table-column>
			<el-table-column prop="payWay" label="支付方式" align="center">
				<template slot-scope="scope" >
					<span >{{scope.row.payWay}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="submitTime" label="提交时间" align="center">
			</el-table-column>
			<el-table-column prop="orderSource" label="订单来源" align="center">
				<template slot-scope="scope" >
					<span >{{scope.row.orderSource}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="orderStatus" label="订单状态" align="center">
				<template slot-scope="scope" >
					<span >{{scope.row.orderStatus | filterOrderStatus}}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="250" align="center">
				<template slot-scope="scope" >
					<el-button size="mini" type="primary" @click="showDetail(scope.row)">查看订单</el-button>
					<el-button size="mini" v-show="scope.row.orderStatus === 1" @click="handleCloseOrder(scope.row)">关闭订单</el-button>
					<el-button size="mini" v-show="scope.row.orderStatus === 2" @click="handleDeliverOrder(scope.row)">订单发货</el-button>
					<el-button size="mini" v-show="scope.row.orderStatus === 3 || scope.row.orderStatus === 4" @click="handleTraceOrder(scope.row)">订单追踪</el-button>
					<el-button size="mini" type="danger" v-show="scope.row.orderStatus === 5" @click="handleDeleteOrder(scope.row)">删除订单</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-col :span="24" class="toolbar" >
			<el-pagination layout="total, prev, pager, next, jumper" background :page-size="15" :total="total" :current-page="page" @current-change="handleCurrentChange" ></el-pagination>
		</el-col>
		<el-dialog :visible.sync="dialogVisible" title="订单详情">
			<div>
				<el-row class="table-layout">
					<el-col :span="6" class="table-cell table-cell-title">订单编号</el-col>
					<el-col :span="6" class="table-cell table-cell-title">用户账号</el-col>
					<el-col :span="6" class="table-cell table-cell-title">支付方式</el-col>
					<el-col :span="6" class="table-cell table-cell-title">订单来源</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.orderSn}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.userName}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.payWay}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.orderSource}}</el-col>
				</el-row>
				<el-row class="table-layout">
					<el-col :span="6" class="table-cell table-cell-title">订单状态</el-col>
					<el-col :span="6" class="table-cell table-cell-title">配送方式</el-col>
					<el-col :span="6" class="table-cell table-cell-title">快递单号</el-col>
					<el-col :span="6" class="table-cell table-cell-title">收货地址</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.orderStatus | filterOrderStatus}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.deliveryCompany}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.deliverySn}}</el-col>
					<el-col :span="6" class="table-cell">
						<el-popover ref="popover" placement="top-start" width="50" trigger="focus" :content="orderDetail.order.address" >
							<span slot="reference">{{orderDetail.order.address}}</span>
						</el-popover>
					</el-col>
				</el-row>
				<div style="margin-top: 20px;" >
					<h4>商品信息</h4>
				</div>
				<el-table :data="orderDetail.orderGoods" style="margin-top: 20px; width: 100%;" border>
					<el-table-column label="编号" prop="goodsSn"></el-table-column>
					<el-table-column label="名称" prop="goodsName"></el-table-column>
					<el-table-column label="图片" prop="imageUrl">
						<template slot-scope="scope" >
							<img :src="scope.row.imageUrl" width="40">
						</template>
					</el-table-column>
					<el-table-column label="规格" prop="specifications">
						<template slot-scope="scope" >
							<span v-for="item in scope.row.specifications">{{item}} </span>
						</template>
					</el-table-column>
					<el-table-column label="数量" prop="number"></el-table-column>
					<el-table-column label="价格" prop="price"></el-table-column>
				</el-table>
				<div style="margin: 20px 0;">
					<h4>费用信息</h4>
				</div>
				<el-row class="table-layout">
					<el-col :span="6" class="table-cell table-cell-title">商品金额</el-col>
					<el-col :span="6" class="table-cell table-cell-title">运费</el-col>
					<el-col :span="6" class="table-cell table-cell-title">积分减免</el-col>
					<el-col :span="6" class="table-cell table-cell-title">应付款</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.goodsPrice}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.deliveryPrice}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.integralPrice}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.totalPrice}}</el-col>
				</el-row>
				<div style="margin: 20px 0;" v-if="orderDetail.order.orderStatus > 2">
					<h4>快递信息</h4>
				</div>
				<el-row class="table-layout" v-if="orderDetail.order.orderStatus > 2">
					<el-col :span="8" class="table-cell table-cell-title">快递公司</el-col>
					<el-col :span="8" class="table-cell table-cell-title">快递单号</el-col>
					<el-col :span="8" class="table-cell table-cell-title">发货时间</el-col>
					<el-col :span="8" class="table-cell">{{orderDetail.order.deliveryCompany}}</el-col>
					<el-col :span="8" class="table-cell">{{orderDetail.order.deliverySn}}</el-col>
					<el-col :span="8" class="table-cell">{{orderDetail.order.deliveryTime}}</el-col>
				</el-row>
				<div style="margin: 20px 0;" v-if="orderDetail.order.orderStatus === 5">
					<h4>退款信息</h4>
				</div>
				<el-row class="table-layout" v-if="orderDetail.order.orderStatus == 5"> 
					<el-col :span="6" class="table-cell table-cell-title">退款类型</el-col>
					<el-col :span="6" class="table-cell table-cell-title">退款金额</el-col>
					<el-col :span="6" class="table-cell table-cell-title">退款时间</el-col>
					<el-col :span="6" class="table-cell table-cell-title">退款备注</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.refundType}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.refundAmount}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.refundTime}}</el-col>
					<el-col :span="6" class="table-cell">{{orderDetail.order.refundContent}}</el-col>
				</el-row>
			</div>
		</el-dialog>
	</section>
</template>
<script >
	import {getOrderList, getOrderDetail} from 'api/request'

	const categoryMap = {
		0: '正常订单',
		1: '秒杀订单'
	}
	const sourceMap = {
		0: 'PC订单',
		1: 'APP订单'
	}
	const statusMap = {
    1: '待付款',
		2: '待发货',
		3: '已发货',
		4: '已完成',
		5: '已关闭'
	}
	const goodsTypeMap = {
		0: '全场通用',
		1: '指定商品',
		2: '指定分类'
	}
	export default {
		data() {
			return {
				orders: [{
					id: '',
					orderSn: '',
					userName: '',
					price: 0,
					payWay: '',
					submitTime: '',
					orderSource: '',
					orderStatus: ''
				}],
				filters: {
					orderSn: '',
					userName: '',
					submitTime: '',
					orderCategory: '',
					orderSource: '',
          orderStatus: ''
				}, 
				orderDetail: {
					order: {
						orderSn: ''
					}
				},
				total: 0,
				page: 1,
				listLoading: false,
				dialogVisible: false,
				categoryMap,
				sourceMap,
				statusMap
			}
		},
		filters: {
			filterPayWay(type) {
				return payWayMap[type]
			},
			filterOrderSource(type) {
				return sourceMap[type]
			},
			filterOrderStatus(status) {
				return statusMap[status]
			},
			createTime(time) {
				let date = new Date(time)
				return date
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList() {
				this.listLoading = true
				let param = {
					...this.filters,
					page: this.page
				}
				getOrderList(param).then(res => {
					if(res.success) {
						this.listLoading = false
						this.orders = res.list
						this.total = res.total
					}
				}).catch(e => {
					this.listLoading = false
					this.$message({
						type: 'danger',
						message: e
					})
				})
			},
			resetSearch() {
				this.$refs.form.resetFields()
			},
			handleCurrentChange(val) {
				this.page = val
				this.getList()
			},
			showDetail(row) {
				if(!row) return
				getOrderDetail({id:row.id}).then(res => {
					if(res && res.success) {
						this.orderDetail = res.data
						this.dialogVisible = true
					}
				})
				// this.$router.push({path: '/promotion/couponDetail',query: {id: row.id}})
			},
			handleDeleteOrder(index, row) {
				this.$confirm('确定要删除吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.orders.splice(index, 1)
				})
				this.getList()
			},
			handleCloseOrder(row) {
				
			},
			handleTraceOrder(row) {
				
			},
			handleDeliverOrder(row) {
				
			},
			addCoupon(row) {
				this.$router.push({path: '/promotion/addCoupon'})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.mt20 {
		margin: 20px 0;
	}
	.table-layout {
		margin-top: 10px;
		border-top: 1px solid #DCDFE6;
		border-left: 1px solid #DCDFE6;
	}
	.layout {
		margin-top: 10px;
	}
	.table-cell {
		border-right: 1px solid #DCDFE6;
		border-bottom: 1px solid #DCDFE6;
		text-align: center;
		line-height: 40px;
		height: 40px;
		padding: 0 10px;
		font-size: 14px;
		color: #606266;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.table-cell-title {
		background: #F2F6FC;
	}
	.search-tit {
		margin: 20px;
	}
	.search-btn {
		float:right;
		margin-right: 10px;
	}
	.tit {
		padding: 10px;
		overflow: hidden;
	}
</style>