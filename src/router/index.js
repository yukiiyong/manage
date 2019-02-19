import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Main = (resolve) => {
  import('components/main/main').then((module) => {
    resolve(module)
  })
}
const Login = (resolve) => {
  import('components/login/login').then((module) => {
    resolve(module)
  })
}
const UserList = (resolve) => {
  import('components/userList/userList').then((module) => {
    resolve(module)
  })
}
const AdminList = (resolve) => {
  import('components/adminList/adminList').then((module) => {
    resolve(module)
  })
}
const Form = (resolve) => {
  import('components/form/form').then((module) => {
    resolve(module)
  })
}
const Chart = (resolve) => {
  import('components/chart/chart').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Main',
    //   component: Main
    // },
    {
      path: '/',
      name: '数据管理',
      iconCls: 'el-icon-message',
      component: Main,
      redirect: {path: '/user'},
      children: [
        { path: '/user', name: '用户列表', component: UserList},
        {path: '/admin', name: '管理员列表', component: AdminList}
      ]
    },
    {
      path: '/',
      name: '数据修改',
      iconCls: 'fa fa-id-card-o',
      component: Main,
      children: [
        // { path: '/table', name: 'table', component: Table},
        {path: '/form', name: 'form', component: Form}
      ]
    },
    {
      path: '/',
      name: 'chart',
      iconCls: 'fa fa-bar-chart',
      component: Main,
      children: [
        {
          path: '/chart', name: 'chart', component: Chart
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      hidden: true
    }
  ]
})
