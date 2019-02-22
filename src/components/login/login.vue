<template >
  <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="80px" class="container">
    <h3 class="title">用户登录</h3>
    <el-form-item prop="userName" label="姓名">
      <el-input type="text" v-model="loginForm.userName" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="pwd" label="密码">
      <el-input type="password" v-model="loginForm.pwd" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item label-width="0">
      <el-button class="submitBtn" @click="login" plain>登录</el-button>
    </el-form-item>
  </el-form>                                      
</template>
<script type="text/ecmascript-6" >
  import config from 'api/config'
  import {requestLogin} from 'api/request'
  export default {
    data() {
      return {
        loginForm: {
          userName: '',
          pwd: ''
        },
        loginRules: {
          userName: [
            {required: true, message: '请输入用户名',trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login() {
        this.$refs.loginForm.validate((valid) => {
          if(valid) {
            let loginParam = {username: this.loginForm.userName, password: this.loginForm.pwd}
            let role
            let username = loginParam.username
            if(loginParam.username === 'admin') {
              role="超级管理员"
            } else {
              role="管理员"
            }
            requestLogin(loginParam).then(data => {                
              if(data && data.success) {  
                console.log(data)      
                let user = data.data
                user.username = username
                user.role = role
                sessionStorage.setItem('user',JSON.stringify(data.data))
                this.$message({
                  type: 'success',
                  message: data.msg
                })
                this.$router.push({path: '/'})
              } else {
                this.$message({
                  message: data.msg,
                  type: 'error'
                })
              }
            })
          }
        })
      }
    }
  }
</script>
<style  scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    padding: 30px;
    min-height: 120px;
    margin: 30px auto;
    border: 1px solid #999;
    border-radius: 6px;
  }
  .title {
    height: 50px;
    background-color: ;
    font-size: 26px;
    color: #000;
    font-weight: 600;
  }
  .submitBtn {
    width: 100px;
    height: 40px;
    color: #333;
    font-size: 16px;
    /*justify-content: center;*/
  }
</style>