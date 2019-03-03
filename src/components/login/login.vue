<template >
  <section class="loginContainer">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="80px" class="loginFormWrapper">
      <h3 class="title">用户登录</h3>
      <el-form-item prop="userName" label="姓名">
        <el-input type="text" v-model="loginForm.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pwd" label="密码" class="pwdWrapper">
        <el-input :type="pwdInput" v-model="loginForm.pwd" placeholder="密码" ref="pwd"></el-input>
        <i :class="['fa-'+icon]" class="showpwd fa" @mousedown="showpwd=true" @mouseup="showpwd=false"></i>
      </el-form-item>
      <el-form-item label-width="0">
        <el-button class="submitBtn" @click="login" plain>登录</el-button>
      </el-form-item>
    </el-form>  
    <div>
      <el-checkbox v-model="remenbered" class="remenber">记住密码</el-checkbox>
    </div>   
  </section>                                 
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
        },
        remenbered: true,
        showpwd: false
        // pwdInput: 'password'
        //icon: 'eye-slash'
      }
    },
    computed: {
      icon() {
        return this.showpwd ? 'eye' : 'eye-slash'
      },
      pwdInput() {
        return this.showpwd ? 'text' : 'password'
      }
    },
    mounted() {
      let user = JSON.parse(localStorage.getItem('user'))
      if(user) {
        this.loginForm = {
          userName: user.username,
          pwd: user.password
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
                user.password = loginParam.password
                sessionStorage.setItem('user',JSON.stringify(user))
                if(this.remenbered) {
                  localStorage.setItem('user', JSON.stringify(user))
                }
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
  .loginContainer {
    width: 350px;
    padding: 30px;
    min-height: 120px;
    margin: 30px auto;
    border: 1px solid #999;
    border-radius: 6px;
  }
  .loginFormWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
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
  .pwdWrapper {
    position: relative;
  }
  .showpwd {
    position: absolute;
    padding: 10px 5px;
    right: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    font-size: 20px;
    line-height: 1;
    color: grey;
    cursor: pointer;
  }
</style>