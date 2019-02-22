<template>
  <section>
    <el-col :span="24" class="container">
      <el-form label-width="80px" :model="form" :rules="formRules" ref="form">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名" ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="form.sex" >
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日" prop="birth">
          <el-date-picker v-model="form.birth" placeholder="请选择您的出生日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input type="textarea" v-model="form.addr" :rows="2" placeholder="请填写您的地址"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="handleSubmit" :loading="submitLoading">提交</el-button>
          <el-button @click="resetForm" >重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </section>
</template>
<script type="text/ecmascript-6" >
  import {addUser} from 'api/request'
  import {formatDate} from 'util/util'
  export default {
    data() {
      return {
        form: {name: '',sex: 1,age: 0, birth: '',addr: ''},
        formRules: {
          name:[{ required: true,message: '请输入姓名', trigger: 'blur'}]
        },
        submitLoading: false
      }
    },
    methods: {
      formatDate(str) {
        let date = new Date(str)
        let dateStr = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()
        console.log(dateStr)
        return dateStr
      },
      handleSubmit() {
        this.$refs.form.validate(valid => {
          if(valid) {
            this.$confirm('是否确认提交信息？','提示',{
              type:'warning'
            }).then(() => {
              this.submitLoading = true
              let param = Object.assign({}, this.form)
              param.birth = formatDate(param.birth)
              addUser(param).then(res => {
                this.submitLoading = false
                if(res.success) {
                  this.$message({
                    type: 'success',
                    message: res.msg
                  })
                  this.$refs.form.resetFields()
                }else {
                  this.$message({
                    type: 'error',
                    message: res.msg
                  })
                }
              })
            }).catch(e => {
              this.submitLoading = false
              this.$message({
                type: 'danger',
                message: e
              })
            })
          }
        })
      },
      resetForm() {
        this.$refs.form.resetFields()
      }
    }
  }
</script>
<style scoped >
  .container {
    padding: 40px 10px 0;
  }
</style>