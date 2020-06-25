<template >
	<section>
		<el-col :span="24" class="toolbar">
			<el-form :inline="true" :model="filters">
				<el-form-item >
					<el-input v-model="filters.goodsId" placeholder="请输入商品id" ></el-input>
				</el-form-item>
				<el-form-item >
					<el-input v-model="filters.goodsNum" placeholder="请输入商品编号"></el-input>
				</el-form-item>
				<el-form-item >
					<el-input v-model="filters.goodsName" placeholder="请输入商品名称" ></el-input>
				</el-form-item>
				<el-form-item >
					<el-button type="primary" @click="getGoodsList(filters.goodsId,filters.goodsNum,filters.goodsName)">查询</el-button>
				</el-form-item>
				<el-form-item >
					<el-button type="primary" @click="handleAdd" >新建</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<el-table :data="goods" v-loading="listLoading" style="width: 100%;" border >
			<el-table-column type="expand" >
				<template slot-scope="scope" >
					<el-form :model="scope.row" >
						<el-form-item label="商品编号" >
								<span >{{scope.row.goodsSn}}</span>
						</el-form-item>
						<el-form-item label="商品图片" >
								<img :src="scope.row.imageUrl" :alt="scope.row.skuName" class="goods-img">
						</el-form-item>
						<el-form-item label="商品介绍" >
								<span >{{scope.row.brief}}</span>
						</el-form-item>
						<el-form-item label="品牌" >
								<span >{{scope.row.brand}}</span>
						</el-form-item>
						<el-form-item label="商品单位" >
								<span >{{scope.row.unit}}</span>
						</el-form-item>
							<!-- <el-form-item label="" >
									<span >{{scope.row,}}</span>
							</el-form-item>
							<el-form-item label="" >
									<span >{{scope.row,}}</span>
							</el-form-item> -->
						</el-form>
				</template>
			</el-table-column>
			<el-table-column prop="skuId" label="商品ID" width="100" align="center"></el-table-column>
			<el-table-column prop="skuName" label="商品名称" width="100" align="center"></el-table-column>
			<el-table-column prop="imageUrl" label="商品图片" width="160" align="center">
				<template slot-scope="scope" align="center">
					<img :src="scope.row.imageUrl" alt="商品图片" class="goods-img"/>
				</template>
			</el-table-column>
			<el-table-column label="详情" width="80" align="center">
				<template slot-scope="scope" >
					<el-button size="small" @click="viewDetails(scope.row)" >查看</el-button>
				</template> 
			</el-table-column>
			<el-table-column prop="price" label="商品售价" align="center"></el-table-column>
			<el-table-column prop="saleCount" label="销量" width="100" align="center"></el-table-column>
			<el-table-column prop="stock" label="库存" width="80" align="center"></el-table-column>
			<el-table-column prop="categories" label="标签" align="center">
				<template slot-scope="scope" >
					<div v-if="(scope.row.categories instanceof Array)" >
						<el-tag v-for="item in scope.row.categories" size="medium" :key="item">{{item}}</el-tag>
					</div>
					<el-tag size="medium" v-else>{{scope.row.categories}}</el-tag>
				</template>
			</el-table-column>
		</el-table>
        <el-col :span="24" class="toolbar" >
            <el-pagination layout="total,prev,pager,next" background :page-size="15" :total="total" :current-page="page" @current-change="handlePageChange" ></el-pagination>
        </el-col>
        <el-dialog title="商品详情" :visible.sync="detailsVisible" center>
            <div class="goods-detail" v-html="goodsDetail" ></div>
        </el-dialog>
	</section>							
</template>
<script type="text/ecmascript-6" >
import {getGoodsList} from 'api/request'

export default {
	data() {
		return {
			filters: {
				goodsId: '',
				goodsName: '',
				goodsNum: ''
			},
			goods: [],
			listLoading: false,
			total: -1,
			page: 1,
            detailsVisible: false,
            goodsDetail: {}
		}
	},
	mounted() {
		this.getGoodsList()
	},
	methods: {
		getGoodsList(id,num,name) {
			let nameParam = name || ''
			let idParam = id || ''
			let numParam = num || -1
			let param = {
				id: idParam,
				num: numParam,
				name: nameParam,
				page: this.page
			}
			this.listLoading = true
			getGoodsList(param).then(res => {
				// console.log(res)
				if(res.success) {
					this.listLoading = false
					this.total = res.total
					this.goods = res.goodsList
				} else {
					this.listLoading = false
				}
			})
		},
		handleAdd() {
            this.$router.push({path: '/goods/create'})
		},
        handlePageChange(val) {
            console.log(val)
            this.page = val
            this.getGoodsList()
        },
        viewDetails(row) {
            console.log(this.goods)
            this.detailsVisible = true
            this.goodsDetail = row.details
        }
	}
}
</script>
<style scoped>
    .goods-detail img{
        display: inline-block;
        width: 100%;
    }
    .goods-img {
        display: inline-block;
        width: 100px;
        height: 80px;
        background: #e9e9e9;
    }
</style>