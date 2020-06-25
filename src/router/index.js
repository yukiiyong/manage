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
const Setting = (resolve) => {
	import('components/setting/setting').then(module => {
		resolve(module)
	})
}
export const constrantRouterMap = [
	{
		path: '/',
		component: Main,
    redirect: 'goods',
    hidden:true
	},
  {
    path: '/goods',
    name: '商品管理',
    iconCls: 'el-icon-message',
    component: Main,
    redirect: 'goods/list',
    children: [
      {path: 'list',name: '商品列表',component: () => import('components/goods/list')},
      {path: 'create',name:'添加商品',component:() => import('components/goods/create')}
    ]
  },
  {
    path: '/order',
    name: '订单',
    iconCls: 'fa fa-file-text-o',
    component: Main,
    redirect: 'order/list',
    children: [
      {path: 'list', name: '订单列表', component: () => import('components/order/orderList')}
    ]
  },
  {
    path: '/promotion',
    name: '营销',
    iconCls: 'fa fa-calendar-check-o',
    component: Main,
    children: [
      { path:'coupon', name: '优惠券', component: () => import('components/promotion/coupon')},
      // { path: 'couponDetail', name: '优惠券详情',component: () => import('components/promotion/couponDetail'), hidden: true},
      { path: 'addCoupon', name: '添加优惠券',component: () => import('components/promotion/addCoupon'), hidden: true},
      { path: 'sec',name: '秒杀活动列表',component: ()=> import('components/sec/secList')}
    ]
  },
  {
    path: '/chart',
    name: 'chart',
    iconCls: 'fa fa-bar-chart',
    component: Main,
    hidden: true,
    children: [
      {
        path: 'chart', name: '图表', component: Chart
      }
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
    path: '/create',
    name: '数据修改',
    iconCls: 'fa fa-id-card-o',
    component: Main,
    hidden: true,
    meta: {
      roles: ['admin']
    },
    children: [
      {path: 'form', name: '新增用户', component: Form,meta: {roles: ['admin']}},
      {path: 'upload', name: '上传表格', component: () => import('components/uploadExcel/uploadExcel'),meta: {roles: ['admin']}}
    ]
  },
  {
    path: '/setting',
    name: '系统管理',
    iconCls: 'fa fa-gear',
    component: Main,
    redirect: 'noredirect',
    children: [
      {path: 'index', name: '设置', component:Setting},
      {path: 'mdInput', name: 'input',component: () => import('components/setting/inputdemo'), hidden: true},
      {path: 'user', name: '用户列表', component: UserList},
      {path: 'admin', name: '管理员列表', component: AdminList}
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
