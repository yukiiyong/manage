<template >
  <section>
    <el-form :model="coupon" :rules="rules" ref="couponForm" label-width="150px">
      <el-form-item label="优惠券名称：" prop="couponName">
        <el-input v-model="coupon.couponName"></el-input>
      </el-form-item>
      <el-form-item label="优惠券类型：" prop="couponType">
        <el-select v-model="coupon.couponType">
          <el-option v-for="(key, value) in typeMap" :key="key" :label="key" :value="value" ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="适用平台：" prop="">
        <el-select v-model="coupon.platform">
          <el-option v-for="(key, value) in platformMap" :key="key" :label="key" :value="value" ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发行量：" prop="total">
        <el-input v-model.number="coupon.total" placeholder="只能输入正整数"></el-input>
      </el-form-item>
      <el-form-item label="最低消费：" prop="min">
        <el-input v-model.number="coupon.min" placeholder="面值只能是数值，限2位小数">
          <template slot="prepend" >满</template>
          <template slot="append" >元可用</template>
        </el-input>
      </el-form-item>
      <el-form-item label="满减金额：" prop="discount">
        <el-input v-model.number="coupon.discount" placeholder="面值只能是数值，限2位小数">
          <template slot="append" >元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="每人限领：" prop="limit">
        <el-input v-model="coupon.limit"></el-input>
      </el-form-item>
      <el-form-item label="有效期：" prop="timeType">
        <el-date-picker type="date" placeholder="选择日期" v-model="coupon.startTime" style="width:150px;"></el-date-picker>
        <span style="margin-right: 20px;" >至</span>
        <el-date-picker type="date" placeholder="选择日期" v-model="coupon.endTime" style="width:150px;"></el-date-picker>
      </el-form-item>
      <el-form-item label="使用范围：" prop="goodsType">
        <el-radio-group v-model.number="coupon.goodsType">
          <el-radio-button v-for="(key, val) in goodsTypeMap" :label="val" >{{key}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="" v-if="coupon.goodsType === 1 ||coupon.goodsType == 2">
        目前不支持
      </el-form-item>
    </el-form>
    <div class="op-container mt40">
      <el-button >取消</el-button>
      <el-button @click="handleSubmit('couponForm')" type="primary">提交</el-button>
    </div>
  </section>
</template>
<script >
  import {updateCoupon, createCoupon} from 'api/request'
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
  const platformMap = {
		0: '全平台',
		1: '移动平台',
		2: 'PC平台'
  }
  export default {
    data() {
      return {
        coupon: {
          couponName: '',
          couponType: '',
          platform: '',
          total: '',
          min: '',
          discount: '',
          limit: 1,
          timeType: 0,
          goodsType: 0
        },
        rules: {
          couponName: [
            {required: true, message: '请输入优惠券名称', trigger: 'blur'},
            {min: 2, max: 40, message: '优惠券名称长度必须为2到40个字符之间', trigger: 'blur'}
          ],
          total: [
            {type: 'number', required: true, message: '面值只能是数值', trigger: 'blur'}
          ],
          discount: [
            {type: 'number', required: true, message: '面值只能是数值，限2位小数', trigger: 'blur'}
          ],
          min: [
          {type: 'number', required: true, message: '只能输入正整数', trigger: 'blur'}
          ]
        },
        goodsTypeMap,
        typeMap,
        platformMap,
        isEdit: false
      }
    },
    created() {
      if(this.$route.query.id) {
        this.isEdit = true
      } else {
        this.isEdit = false
      }
    },
    methods: {
      handleSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            this.$confirm('确定要提交吗？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              if(this.isEdit) {
                updateCoupon(this.$route.query.id, this.coupon).then(res => {
                  if(res && res.success) {
                    this.$refs[formName].resetFields()
                    this.$message({
                      message: '修改成功',
                      type: 'success',
                      duration: 1000
                    })
                    this.$router.back()
                  }
                })
              } else {
                createCoupon(this.coupon).then(res => {
                  if(res && res.success) {
                    this.$refs[formName].resetFields()
                    this.$message({
                      message: '修改成功',
                      type: 'success',
                      duration: 1000
                    })
                    this.$router.push({path: '/promotion/coupon'})
                  }
                })
              }
            })
          } else {
            this.$message({
              message: '验证失败',
              type: 'error',
              duration: 1000
            })
          }
        })
      }
    }
  }
</script>
<style scoped>
  .op-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mt40 {
    margin: 40px 0;
  }
</style>