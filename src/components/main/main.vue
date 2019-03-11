/*
* @Author: yuki
* @Date:   2018-11-23 22:45:41
* @Last Modified by:   yuki
* @Last Modified time: 2018-11-23 22:46:01
*/
<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo" :class="collapsed?'logo-collapsed-width':'logo-width'" >{{collapsed? '' : sysName}}</el-col>
      <el-col :span="10">
        <div class="tool" @click.prevent="collapse">
          <i class="fa fa-align-justify"></i>
        </div>
      </el-col>
      <el-col  :span="4" class="userinfo" >
        <el-dropdown trigger="hover" >
          <span class="el-dropdown-link userinfo-inner"><img :src="user.userAvatar">{{user.username}},欢迎您</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="setting">设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside class="menu" :class="collapsed? 'menu-collapse': ''" >
        <el-menu :default-active="$route.path" class="menu-class" @open="handleOpen" @close="handleClose" @select="handleSelect" :collapse="collapsed" router unique-opened>
         <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
           <el-submenu :index="index+ ''" v-if="item.children.length > 1" >
             <template slot="title"><i class="menu-icon" :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
             <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item> 
           </el-submenu>
           <el-menu-item v-if="item.children && item.children.length===1" :index="item.children[0].path" >
            <i class="menu-icon" :class="item.iconCls"></i>
            <span slot="title">{{item.children[0].name}}</span>
          </el-menu-item>
         </template>
        </el-menu>
      </aside>
      <section class="content-container">
        <el-col :span="24" >
          <el-breadcrumb separator="/" class="breadcrumb-inner">
          <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="item.path" :to="{path: item.path}">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="in-out">
            <router-view></router-view>
          </transition>
        </el-col>
      </section>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6" >
import {mapGetters, mapActions} from 'vuex' 
import {getStore} from '@/util/store'
  export default {
    data() {
      return {
        sysName: '后台管理系统',
        collapsed: false,
        user: {}
      }
    },
    mounted() {
      let user = getStore({name: 'user'})

      if(user && user.accessToken) {
        this.user = Object.assign({}, user)
      }
    },
    computed: {
    },
    methods: {
      collapse() {
        this.collapsed = !this.collapsed
      },
      handleOpen() {
        //console.log('menu-open')
      },
      handleClose() {
        //console.log('menu-Close')
      },
      handleSelect() {
        //onsole.log('select')
      },
      logout() {
        this.$confirm('确认退出？', '提示', {})
          .then(() => {
            this.FDLogout().then(() => {
              this.$router.push('/login')            
            })
          }).catch((e) => {
            console.log('logout err'+e)
          })
      },
      setting() {
        this.$router.push('/setting')
      },
      ...mapActions([
        'FDLogout'
      ])
    }
  }
</script>
<style lang="scss" scoped>
  @import 'styles/variable';
  @import "styles/mixin";

  .container {
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    width: 100%;
  }
  .header {
    height: 60px;
    line-height: 60px;
    @include bg_color($color-primary);
    color: #fff;
    overflow: hidden;
  }
  .logo {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-right:1px solid #fff;
  }
  .logo-width {
    width: 230px;
  }
  .logo-collapsed-width {
    width: 60px;
  }
  .tool {
    padding: 0 20px;
    width: 14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  .userinfo {
    padding-right: 10px;
    float: right;
    text-align: right;
  }
  .userinfo-inner {
    color: #fff;
    cursor: pointer;
  }
  .userinfo img {
    width:40px;
    height: 40px;
    border-radius: 50%;
    margin:10px 0 10px 10px;
    float: right;
  }
  .main {
    display: flex;
    height: 100%;
  }
  .menu {
    flex: 0 0 230px;
  }
  .menu-collapse {
    flex: 0 0 60px;
  }
  .menu-class {
     height: 100%;
  }
  .menu-icon {
    width: 16px;
    height: 14px;
    margin-right: 5px;
  }
  .el-menu--collapse {
    width: 60px;
  }
  .content-container {
    flex: 1;
    padding: 20px;
    overflow-y: scroll; 
  }
  .breadcrumb-inner {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: 400;
  }
  .content-wrapper {
    background: #fff;
    box-sizing: border-box;
  }
</style>