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
				<el-form-item label="活动标题:" prop="title">
					<el-input v-model="filters.title" placeholder="请输入活动名称" ></el-input>
				</el-form-item>
			</el-form>
		</el-card>
		<el-card shadow="never" class="mt20">
			<div class="tit">
				<i class="fa fa-file-text-o" ></i>
				<span>数据列表</span>
				<el-button size="mini" @click="handleAdd" style="float: right;">添加</el-button>
			</div>
		</el-card>
		<el-table :data="list" v-loading="listLoading" style="margin: 20px 10px;" border>
			<el-table-column prop="id" label="编号" align="center" width="100"></el-table-column>
			<el-table-column prop="title" label="活动标题" align="center"></el-table-column>
			<el-table-column prop="activeStatus" label="活动状态" align="center">
				<template slot-scope="scope" >
					<span >{{scope.row | filterActiveStatus}}</span>
				</template>
      </el-table-column>
      <el-table-column prop="startDate" label="开始时间" align="center"></el-table-column>
			<el-table-column prop="endDate" label="结束时间" align="center"></el-table-column>
			<el-table-column label="上线/下线" align="center">
				<template slot-scope="scope" >
					<el-switch @change="handleStatusChange(scope.row,scope.$index)" :active-value="1" :inactive-value="0" v-model="scope.row.status"></el-switch>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="250" align="center">
				<template slot-scope="scope" >
					<el-button size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-col :span="24" class="toolbar" >
			<el-pagination layout="total, prev, pager, next, jumper" background :page-size="15" :total="total" :current-page="page" @current-change="handleCurrentChange" ></el-pagination>
		</el-col>
		<el-dialog :visible.sync="dialogVisible" :title="isEdit? '编辑活动':'添加活动'">
			<div>
				<el-form :model="secPromotion" label-width="100px" ref="secPromotionForm" >
					<el-form-item label="活动标题" prop="title">
						<el-input v-model="secPromotion.title" placeholder="请输入活动标题" ></el-input>
					</el-form-item>
					<el-form-item label="开始时间" prop="startDate">
						<el-date-picker v-model="secPromotion.startDate" type="date" placeholder="请选择时间" ></el-date-picker>
					</el-form-item>
					<el-form-item label="结束时间" prop="endDate">
						<el-date-picker v-model="secPromotion.endDate" type="date" placeholder="请选择时间" ></el-date-picker>
					</el-form-item>
					<el-form-item label="上线/下线" prop="status">
						<el-radio-group v-model="secPromotion.status" >
							<el-radio :label="1" >上线</el-radio>
							<el-radio :label="0" >下线</el-radio>
						</el-radio-group>
					</el-form-item>
				</el-form>
				<div class="op-container mt40" >
					<el-button @click="handleReset" >重置</el-button>
					<el-button type="primary" @click="handleSubmit" >提交</el-button>
				</div>
			</div>
		</el-dialog>
	</section>
</template>
<script >
	import {getSecList, updateSecStatus, updateSec, createSec} from 'api/request'

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
				list:[{
          id: '',
          title: '',
          activeStatus: 0,
          startDate: '',
          endDate: '',
          status: 0
        }],
				filters: {
					title: ''
				}, 
				secPromotion: {},
				isEdit: false,
				total: 0,
				page: 1,
				listLoading: false,
				dialogVisible: false,
				statusMap,
				typeMap,
				goodsTypeMap
			}
		},
		filters: {
			filterActiveStatus(row) {
        let nowTime = new Date().getTime()
        if(nowTime >= row.startDate && nowTime <= row.endDate) {
          return '活动进行中'
        } else if(nowTime < row.startDate) {
          return '活动未开始'
        } else {
          return '活动已结束'
        }
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
				getSecList(param).then(res => {
					if(res.success) {
						this.listLoading = false
						this.list = res.list
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
			handleDelete(index, row) {
				this.$confirm('确定要删除吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.list.splice(index, 1)
				})
				this.getList()
      },
      handleAdd(index, row) {
				//添加秒杀活动
				this.dialogVisible = true
				this.isEdit = false
				this.secPromotion = Object.assign({}, row)
      },
      handleUpdate(row) {
				//编辑秒杀活动，UI复用
				this.dialogVisible = true
				this.isEdit = true //标识是编辑还是添加，dialog提交时使用
				this.secPromotion = Object.assign({}, row)
      },
			handleReset() {
				this.$refs.secPromotion.resetFields()
			},
			handleSubmit() {
				this.$confirm('确定提交？','提示',{
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.secPromotion.startDate = this.formatDate(this.secPromotion.startDate)
					this.secPromotion.endDate = this.formatDate(this.secPromotion.endDate)
					if(this.isEdit) {
						updateSec(this.secPromotion.id, this.secPromotion).then(res => {
							if(res && res.success) {
								this.$message({
									type: 'success',
									message: '修改成功！'
								})
								this.dialogVisible = false
								// this.secPromotion = this.options.data.secPromotion
								this.getList()
							}
						})
					} else {
						createSec(this.secPromotion).then(res => {
							if(res && res.success) {
								this.$message({
									type: 'success',
									message: '创建成功！'
								})
								this.dialogVisible = false
								console.log(this.$options.data().secPromotion)
								// this.secPromotion = this.$options.data.secPromotion
								this.getList()
							}
						})
					}
				}).catch(e => {
					console.log(e)
				})
			},
			formatDate(date) {
				//传入2020-06-07T16:00:00.000Z
				//返回2020-06-07
				let dateVal = new Date(date)
				dateVal.setMinutes(dateVal.getMinutes() - dateVal.getTimezoneOffset()) //时区补偿
				dateVal=dateVal.toJSON().substr(0,10).replace(/[T]/g, '')
				return dateVal
			},
			handleStatusChange(row, index) {
        this.$confirm('是否修改该状态', '提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
					const param={
						id: row.id,
						status: row.status
					}
          updateSecStatus(param).then(res => {
            if(res && res.success) {
              this.$message({
                type: 'success',
                message: '状态修改成功！'
              })
            } else {
							this.$message({
								type: 'error',
								message: res.msg
							})
						}
            this.getList()
          }).catch(e => {
            this.$message({
              type: 'error',
              message: '修改失败！' + e
            })
          })
        })
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
	.op-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>