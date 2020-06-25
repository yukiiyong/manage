<template>
	<section class="wrapper">
		<el-form :model="goods" :rules="rules" label-width="150px">
			<el-form-item label="商品名称" prop="skuName">
				<el-input v-model="goods.skuName" ></el-input>
			</el-form-item>
			<el-form-item label="商品品牌" prop="brand" >
				<el-input v-model="goods.brand" ></el-input>
			</el-form-item>
			<el-form-item label="分类" prop="categories" >
				<el-input v-model="goods.categories" ></el-input>
			</el-form-item>
			<el-form-item label="商品编号" prop="goodsSn" >
				<el-input v-model="goods.goodsSn" ></el-input>
			</el-form-item>
			<el-form-item label="商品单位" prop="unit" >
				<el-input v-model="goods.unit" ></el-input>
			</el-form-item>
			<el-form-item label="商品售价" prop="price" >
				<el-input v-model="goods.price" >
					<template slot="append" >元</template>
				</el-input>
			</el-form-item>
			<el-form-item label="商品简介" prop="brief" >
				<el-input v-model="goods.brief" ></el-input>
			</el-form-item>
			<el-form-item label="商品介绍" prop="details" >
				<tinymce-editor id="tinymce" :value="goods.details" ></tinymce-editor>
			</el-form-item>
			<el-form-item label="图片" prop="imageUrl">
				<el-upload action="#" :show-file-list="false" :http-request="httpRequest" :before-upload="beforePicUpload" class="pic-uploader" accept=".jpg,.jpeg,.png,.gif">
					<img v-if="goods.imageUrl" :src="goods.imageUrl" class="pic">
					<i v-else class="el-icon-plus pic-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item label="库存" prop="stock" >
				<el-input v-model="goods.stock" ></el-input>
			</el-form-item>
		</el-form>	
		<el-card class="pd20 mt40">
			<div slot="header">
				<h3>商品规格</h3>
			</div>				
			<el-row :gutter="20" type="flex" align="middle" style="height: 40px;">
				<el-col :span="14" >
					<el-radio-group v-model="multiSpec" >
						<el-radio :label="false" >默认规格</el-radio>
						<el-radio :label="true" >多规格</el-radio>
					</el-radio-group>
				</el-col>
				<el-col :span="10" v-if="multiSpec">
					<el-button type="primary" @click="handleSpecificationShow" size="mini">添加</el-button>
				</el-col>
			</el-row>
			<el-table :data="specifications" :row-style="{height: '60px'}">
				<el-table-column prop="specName" label="规格名" ></el-table-column>
				<el-table-column prop="value" label="规格值" ></el-table-column> 
				<el-table-column v-if="multiSpec" label="操作">
					<template slot-scope="scope" >
						<el-button type="primary" @click="handleSpecificationShow(scope.row)" size="mini">设置</el-button>
						<el-button type="danger" @click="handleSpecDelete(scope.row)" size="mini">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-dialog :visible.sync="specDialogVisible" title="设置规格">
				<el-form :model="specForm" label-width="80px" ref="specForm">
					<el-form-item label="规格名" prop="specName">
						<el-input v-model="specForm.specName" ></el-input>
					</el-form-item>
					<el-form-item label="规格值" prop="value">
						<el-input v-model="specForm.value" ></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" >
					<el-button @click="specDialogVisible=false" >取消</el-button>
					<el-button @click="handleSpecAdd()" type="primary" >确定</el-button>
				</div>
			</el-dialog>
		</el-card>
		<el-card class="pd20">
			<div slot="header" >
				<h3>商品库存</h3>
			</div>
			<el-table :data="products" >
				<el-table-column prop="specifications" label="商品规格" >
					<template slot-scope="scope" >
						<el-tag v-for="tag in scope.row.specifications" :key="tag">{{tag}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="price" label="售价" ></el-table-column>
				<el-table-column prop="stock" label="库存" ></el-table-column>
				<el-table-column label="操作" >
					<template slot-scope="scope" >
						<el-button type="primary" @click="handleProductShow(scope.row)" size="mini">设置</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-dialog :visible.sync="productDialogVisible" >
				<el-form :model="productForm" ref="productForm" label-width="80px">
					<el-form-item prop="specifications" label="规格" >
						<template slot-scope="scope" >
							<el-tag v-for="tag in scope.row.specifications" :key="tag" >
								{{tag}}
							</el-tag>
						</template>
					</el-form-item>
					<el-form-item prop="price" label="售价" >
						<el-input v-model="productForm.price" ></el-input>
					</el-form-item>
					<el-form-item prop="stock" label="库存" >
						<el-input v-model="productForm.stock" ></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" >
					<el-button @click="productDialogVisible=false" >取消</el-button>
					<el-button @click="handleProductAdd" type="primary">确定</el-button>
				</div>
			</el-dialog>
		</el-card>
		<div class="op-container mt40" >
			<el-button @click="handleCancel" >取消</el-button>
			<el-button type="primary" @click="handleSubmit" >提交</el-button>
		</div>
	</section>
</template>
<script  >
	import tinymce from 'tinymce/tinymce'
	import Editor from '@tinymce/tinymce-vue'
	import 'tinymce/themes/silver'
	import TinymceEditor from 'components/tinymce/tinymce-editor'
	import {uploadPath} from 'api/request'

	let canBack = false
	export default {
		data() {
			return {
				uploadPath,  
				goods: {skuName: '',brand: '',categories:'',goodsSn: '',unit:'',price:0,details:'',stock:0,imageUrl: ''},
				rules: {
					goodsSn: [{required: true, message: '商品编号不能为空',trigger: 'blur'}],
					brand: [{required: true, message: '商品品牌不能为空', trigger: 'blur'}],
					skuName: [{required: true, message: '商品名称不能为空', trigger: 'blur'}],
					categories: [{required: true, message: '商品分类不能为空', trigger: 'blur'}]
				},
				multiSpec: false,
				specifications: [{specName: '规格', value: '标准'}],
				products: [{id: 0, specifications: ['标准'], price: 0.00,stock: 0}],
				specForm: {specName: '', value: ''},
				specDialogVisible: false,
				productForm: {id: 0, specifications: ['标准'], price: 0.00,stock: 0},
				productDialogVisible: false,
				isSpecEdit: false,
				init: {
					language_url: '/static/tinymce/langs/zh_CN.js', //语言包地址
					language: 'zh_CN', //语言
					skin_url: '/static/tinymce/skins/ui/oxide',
					height: 500,
					convert_urls: false,
					// plugins: ['advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'],
					// toolbar: ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'],
					images_upload_handler: (blobInfo, success, failure) => {
						const img = 'data:image/jpeg;base64,' + blobInfo.base64()
						success(img)
					}
                },
			}
		},
		mounted() {
			tinymce.init({theme: 'silver',skin: 'oxide'})
		},
		methods: {
			handleCancel() {				
				if(!canBack) {
					this.$router.push({path: '/404'})
				} else {
					this.$router.push({path:'/goods/list'})
				}
			},
			handleSubmit() {
				console.log(this.products)
				console.log(this.goods)
			},
			handleSpecificationShow(row) {
				if(row && row.specName) {
					this.specForm = {...row}
					this.isSpecEdit = true
				}
				this.specDialogVisible = true
			},
			handleProductShow(row) {
				this.productDialogVisible = true
				this.productForm = row
			},
			handleSpecDelete(row) {
				// let specifsications = this.specifications

				const index = this.specifications.indexOf(row)
				this.specifications.splice(index, 1)
				this.specToProduct()
			},
			handleSpecAdd(isEdit) {
				let index = this.specifications.length - 1
				let specForm = this.specForm

				for(let i = 0; i < this.specifications.length; i++) {
					const spec = this.specifications[i]
					if(spec.specName === specForm.specName) {
						if(spec.value === specForm.value) {
							this.$message({
									type: 'warning',
									message: '已存在相同的规格，请重新输入'
							})
							return
						} else {
							index = i
						}
					}
				}

				if(this.isSpecEdit) {
					console.log('isEdit change specifications')
					this.specifications.splice(index, 1, specForm)
					this.isSpecEdit = false
				} else {
					this.specifications.splice(index + 1, 0, specForm)
				}
	
				this.specForm = {specName: '', value: ''}
				this.specToProduct()
				this.specDialogVisible = false
			},
			specToProduct() {
				//把specifications数组里的元素按不同名称排列组合成一个新的数组
				//combination用来存放specification的下标 [3,2,4]
				// 000-001-002-003-010-011-012-013-100-101...
				//把specifications按specName分类为一个数组，数组中同名的为一项，一项中存放同名的值的位置（为二维数组）

				//把specifications组合到products的specifications项中
                //算法来源 https://blog.csdn.net/tyhj_sf/article/details/53893125
				if(this.specifications.length === 0) {
					return 
				}

				let spec = this.specifications[0].specName

				let values = []
				let specValues = []

				// values.push(0)

				let len = []
				for(let i = 0; i < this.specifications.length; i++) {
					let aspec = this.specifications[i].specName
					if(spec === aspec) {
						values.push(i)
					} else {
						specValues.push(values)
						spec = aspec
						values = []
						values.push(i)
					}
				}
				specValues.push(values)
				console.log(specValues)
				let productIndex = 0
				let products = []
				let combination = []
				let n = specValues.length

				for(let i = 0; i < n; i++) {
					combination.push(0)
				}
				let isContinue = false
				let index = 0
				do {
					//此次循环的specification需重置
					let specification = []
					for(let z = 0; z < n; z++) {
						let index = specValues[z][combination[z]]

						specification.push(this.specifications[index].value)
					}
		
					products[productIndex] = {id: productIndex,specifications: specification,price: 0.00, stock: 0}
					productIndex++

					//combination需末位加一，值由index决定
					index++
					combination[n - 1] = index
					console.log(combination)
					//check combination and resolve it
					for(let j = n - 1; j >= 0; j--) {
						if(combination[j] >= specValues[j].length) {
							combination[j] = 0 
							index = 0
							if(j - 1 >= 0) {
								combination[j - 1] = combination[j - 1] + 1
							}
						}
					}
					console.log(combination)
					//check combination, if any of combination is true ,set isContinue true
					isContinue = false
					for(let i = 0; i < n; i++) {
						 if(combination[i] > 0) {
							 isContinue = true
						 }
					}

				} while(isContinue)

        this.products = products     
			},
			handleProductAdd() {
				let index
				let productForm = Object.assign({}, this.productForm) 
				for(let i = 0; i < this.products.length; i++) {
					if(this.products[i].id === productForm.id) {
						this.products.splice(i,1,productForm)
						break
					}
				}
				this.$refs.productForm.resetFields()
				this.productDialogVisible = false
			},
			handleUploadSuccess(res, file) {
				// this.goods.imageUrl = URL.createObjectURL(file.raw)
			},
			beforePicUpload(file) {
				const isLt2M = file.size / 1024 / 1024 < 2
				if(!isLt2M) {
					this.$message.error('上传图像大小不能超过2MB')
				}
				return isLt2M
			},
			httpRequest(data) {
					//处理上传前将文件转为base64，然后显示缩略图
					//data里的goods要初始化imageUrl属性，不然不是响应式，图片转为base64后，缩略图无法显示
					let fr = new FileReader()
					let file = data.file
					fr.readAsDataURL(file) //文件读取转换为base64类型
					fr.onloadend = (e) => {
							// console.log(e.currentTarget.result)
							this.goods.imageUrl = e.currentTarget.result
					}
			}
		},
		watch: {
			multiSpec: {
				handler: function(val, oldVal) {
					console.log(`multiSec changed`)
					if(val) {
						this.specifications = []
						this.products = []
					} else {
						this.specifications = [{specName: '规格', value: '标准'}]
						this.products = [{id: 0, specifications: ['标准'], price: 0.00,stock: 0}]
					}
				},
				immediate: true	
			}
		},
		components: {
			Editor,
      TinymceEditor
		},
		beforeRouteEnter(to, from, next) {
			if(from.path === '/goods/list') {
				canBack = true
			} else {
				canBack = false
			}
			//由于调用此钩子时为对应路由被confirm前调用，所以为了不妨碍页面渲染，要使用next()
			next()
		}
	}
</script>
<style lang="scss" scoped>
	.wrapper {
		padding: 40px 10px 0;
	}
	.pd20 {
		padding: 20px;
	}
	.mt40 {
		margin: 40px 0; 
	}
	.pic {
		width: 178px;
		height: 178px;
		display: block;
	}
	.pic-uploader-icon {
		font-size: 28px;
		color:#8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.op-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
<style lang="scss" >
  .pic-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px; 
		position: relative;
		overflow: hidden;
	}
	.pic-uploader .el-upload:hover {
		border-color: #409EFF;
	}
</style>