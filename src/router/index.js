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
export const constrantRouterMap = [
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
      name: 'chart',
      iconCls: 'fa fa-bar-chart',
      component: Main,
      children: [
        {
          path: '/chart', name: '图表', component: Chart
        }
      ]
    },
    {
      path: '/',
      name: '设置',
      iconCls: 'fa fa-gear',
      component: Main,
      children: [
        {path: '/setting', name: '设置', component:() => import('components/setting/setting')},
        {path: '/mdInput', name: 'input',component: () => import('components/setting/inputdemo')}
      ]
    },
    {
      path: '/login',
      component: Login,
      hidden: true
    }
  ]
export default new Router({
  routes: constrantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/',
    name: '数据修改',
    iconCls: 'fa fa-id-card-o',
    component: Main,
    meta: {
      roles: ['admin']
    },
    children: [
      {path: '/form', name: '新增用户', component: Form,meta: {roles: ['admin']}},
      { path: '/upload', name: '上传表格', component: () => import('components/uploadExcel/uploadExcel'),meta: {roles: ['admin']}}
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  },
  {
    path: '/404',
    component: () => import('components/error/error'),
    hidden: true
  }
]
