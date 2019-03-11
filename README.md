### 简介
一个使用Vue和element-ui的后台管理系统，数据均为mock数据
> 地址：http://yukiiyong.github.io/manage/dist/
### 功能
>用户列表浏览

>导出excel

>修改用户信息

>新增用户(需要管理员权限)

>echarts图表查看 

>更改顶部主题色

>vuex实现权限控制

##### 其中，如果新增用户的用户名和用户列表的重复，将会报“用户已存在”，且不会重复添加用户
##### 对用户列表的用户进行删除的时候，如果此时登录的不是超级管理员，则不会进行删除操作

> 普通账户：123456 密码 123456 管理员账户 admin 密码 123456

###### solutions 
> font-awesome图标不显示问题 (config/index build的assetPublicPath 把'/'改为'./')

> 主题色切换 documentElement.setAttribute(data-theme),然后sass 使用mixin根据data-theme设置颜色（浏览器自动识别data-theme）

> 水波纹效果 创建一个span，宽高为按钮宽高的最大值，然后插入到按钮内，最后设置top，left（按钮要为relative定位，overflow：hidden，span绝对定位）。参考链接：http://ju.outofmemory.cn/entry/137539

> 导出excel 要外部提供bookType，filename，autoCellWidth，系统创建header和data，然后使用export_json_to_excel创建excel文件

> 导出pdf window.print()

> 权限控制 login之后把token存到vuex上，然后再路由的拦截函数beforeEach中检查roles，roles为空则拉取用户信息，根据用户的roles来生成routes，然后调用router.addRoutes来动态添加路由。

> 由于侧边栏是根据$router.options.routes来生成的，所以需要在拦截函数中给router.options.routes重新赋值routes。参考链接：https://juejin.im/post/591aa14f570c35006961acac

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
