### 简介
一个使用Vue和element-ui的后台管理系统，数据均为mock数据
> 地址：http://yukiiyong.github.io/manage/dist/
### 功能
>用户列表浏览

>修改用户信息

>新增用户

>echarts图表查看 

##### 其中，如果新增用户的用户名和用户列表的重复，将会报“用户已存在”，且不会重复添加用户
##### 对用户列表的用户进行删除的时候，如果此时登录的不是超级管理员，则不会进行删除操作

> 普通账户：123456 密码 123456 超级账户 admin 密码 123456

> todo ：解决font-awesome图标不显示问题
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
#
