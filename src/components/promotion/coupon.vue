<template>
  <section>
		<el-card class="mt20" shadow="never">
			<div class="search-tit ">
				<i class="el-icon-search"></i>
				<span >筛选搜索</span>
				<el-button @click="resetSearch" class="search-btn" size="mini">重置</el-button>
				<el-button @click="getCouponList" type="primary" class="search-btn" size="mini">查找</el-button>
			</div>
			<el-form :model="filters" ref="couponForm" label-width="150px">
				<el-form-item label="优惠券名称:" prop="name">
					<el-input v-model="filters.name" placeholder="请输入优惠券名称" ></el-input>
				</el-form-item>
				<el-form-item label="优惠券类型:" prop="type">
					<el-select v-model="filters.type" placeholder="请选择优惠券类型" >
						<el-option v-for="(key,value) in typeMap" :key="key" :label="key" :value="value" ></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="优惠券状态:" prop="status">
					<el-select v-model="filters.status" placeholder="请选择优惠券状态" >
						<el-option v-for="(key,value) in statusMap" :key="key" :label="key" :value="value" ></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</el-card>
		<el-card shadow="never" class="mt20">
			<div class="tit">
				<i class="fa fa-file-text-o" ></i>
				<span>数据列表</span>
				<el-button size="mini" @click="addCoupon" style="float: right;">添加</el-button>
			</div>
		</el-card>
		<el-table :data="coupons" v-loading="listLoading" style="margin: 20px 10px;" border>
			<el-table-column prop="couponSn" label="编号" align="center" width="100"></el-table-column>
			<el-table-column prop="couponName" label="优惠券名称" align="center"></el-table-column>
			<el-table-column prop="couponType" label="优惠券类型" align="center">
				<template slot-scope="scope" >
					<span >{{scope.row.couponType | filterCouponType}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="goodsType" label="使用范围" align="center">
				<template slot-scope="scope" >
					<span >{{scope.row.goodsType | filterGoodsType}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="min" label="使用门槛" align="center">
				<template slot-scope="scope" >
					<span >满{{scope.row.min}}元可用</span>
				</template>
			</el-table-column>
			<el-table-column prop="discount" label="满减金额" align="center"></el-table-column>
			<el-table-column prop="limit" label="每人限领" align="center"></el-table-column>
			<el-table-column prop="total" label="优惠券数量" align="center"></el-table-column>
			<el-table-column prop="status" label="状态" align="center">
				<template slot-scope="scope" >
					<span >{{scope.row.status | filterCouponStatus}}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="250" align="center">
				<template slot-scope="scope" >
					<el-button size="mini" type="primary" @click="showCouponDetail(scope.row)">详情</el-button>
					<el-button size="mini" @click="handleConponUpdate(scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleCouponDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-col :span="24" class="toolbar" >
			<el-pagination layout="total, prev, pager, next, jumper" background :page-size="15" :total="total" :current-page="page" @current-change="handleCurrentChange" ></el-pagination>
		</el-col>
	</section>
</template>
<script >
	import {getCouponList, getCouponDetail} from 'api/request'

	const statusMap = {
		0: '未使用',
		1: '已过期',
		2: '已下架',
		3: '已使用'
	}
	const typeMap = {
		0: '全场赠券',
    1: '会员赠券',
    2: '注册赠券'
	}
	const goodsTypeMap = {
		0: '全场通用',
		1: '指定商品',
		2: '指定分类'
	}
	export default {
		data() {
			return {
				coupons: [{
					id: '',
					couponSn: '',
					couponName: '',
					couponType: '',
					goodsType: '',
					min: 0,
					discount: 0,
					limit: '',
					total: 0,
					status: ''
				}],
				filters: {
					name: '',
          type: '',
          status: ''
				}, 
				couponDetail: {
					
				},
				total: 0,
				page: 1,
				listLoading: false,
				couponDialogVisible: false,
				statusMap,
				typeMap,
				goodsTypeMap
			}
		},
		filters: {
			filterCouponType(type) {
				return typeMap[type]
			},
			filterGoodsType(type) {
				return goodsTypeMap[type]
			},
			filterCouponStatus(status) {
				return statusMap[status]
			},
			createTime(time) {
				let date = new Date(time)
				return date
			}
		},
		mounted() {
			this.getCouponList()
		},
		methods: {
			getCouponList() {
				this.listLoading = true
				let param = {
					...this.filters,
					page: this.page
				}
				getCouponList(param).then(res => {
					if(res.success) {
						this.listLoading = false
						this.coupons = res.list
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
				this.$refs.couponForm.resetFields()
			},
			handleCurrentChange(val) {
				this.page = val
				this.getCouponList()
			},
			showCouponDetail(row) {
				if(!row) return
				this.$router.push({path: '/promotion/couponDetail',query: {id: row.id}})
			},
			handleCouponDelete(index, row) {
				this.$confirm('确定要删除吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.coupons.splice(index, 1)
				})
				this.getCouponList()
			},
			handleConponUpdate(row) {
				
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