webpackJsonp([12],{BknD:function(t,e){},TyLo:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),a=s.n(n),o=s("woOf"),l=s.n(o),r=s("NYxO"),i=s("EWeX"),c={data:function(){return{sysName:"后台管理系统",collapsed:!1,user:{}}},computed:{key:function(){return this.$route.path}},mounted:function(){var t=Object(i.a)({name:"user"});throw t&&t.accessToken&&(this.user=l()({},t)),Error("aaa")},methods:a()({collapse:function(){this.collapsed=!this.collapsed,console.log(this.$route),console.log(this.$router)},handleOpen:function(){},handleClose:function(){},handleSelect:function(){},logout:function(){var t=this;this.$confirm("确认退出？","提示",{}).then(function(){t.FDLogout().then(function(){t.$router.push("/login")})}).catch(function(t){console.log("logout err"+t)})},setting:function(){this.$router.push("/setting/index")},resolvePath:function(t,e){return"/"==t?t+e:t+"/"+e}},Object(r.b)(["FDLogout"]))},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{staticClass:"container"},[s("el-col",{staticClass:"header",attrs:{span:24}},[s("el-col",{staticClass:"logo",class:t.collapsed?"logo-collapsed-width":"logo-width",attrs:{span:10}},[t._v(t._s(t.collapsed?"":t.sysName))]),t._v(" "),s("el-col",{attrs:{span:10}},[s("div",{staticClass:"tool",on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[s("i",{staticClass:"fa fa-align-justify"})])]),t._v(" "),s("el-col",{staticClass:"userinfo",attrs:{span:4}},[s("el-dropdown",{attrs:{trigger:"hover"}},[s("span",{staticClass:"el-dropdown-link userinfo-inner"},[s("img",{attrs:{src:t.user.userAvatar}}),t._v(t._s(t.user.username)+",欢迎您")]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{nativeOn:{click:function(e){return t.setting(e)}}},[t._v("设置")]),t._v(" "),s("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出登录")])],1)],1)],1)],1),t._v(" "),s("el-col",{staticClass:"main",attrs:{span:24}},[s("aside",{staticClass:"menu",class:t.collapsed?"menu-collapse":""},[s("el-menu",{staticClass:"menu-class",attrs:{"default-active":t.$route.path,collapse:t.collapsed,router:"","unique-opened":""},on:{open:t.handleOpen,close:t.handleClose,select:t.handleSelect}},[t._l(t.$router.options.routes,function(e,n){return e.hidden?t._e():[e.children&&e.children.length>1?s("el-submenu",{attrs:{index:n+""}},[s("template",{slot:"title"},[s("i",{staticClass:"menu-icon",class:e.iconCls}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])]),t._v(" "),t._l(e.children,function(n){return n.hidden?t._e():s("el-menu-item",{key:t.resolvePath(e.path,n.path),attrs:{index:t.resolvePath(e.path,n.path)}},[t._v(t._s(n.name))])})],2):t._e(),t._v(" "),e.children&&1===e.children.length?s("el-menu-item",{attrs:{index:t.resolvePath(e.path,e.children[0].path)}},[s("i",{staticClass:"menu-icon",class:e.iconCls}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.children[0].name))])]):t._e()]})],2)],1),t._v(" "),s("section",{staticClass:"content-container"},[s("el-col",{staticClass:"breadcrumb-wrapper",attrs:{span:24}},[s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),t._l(t.$route.matched,function(e,n){return s("el-breadcrumb-item",{key:e.path,attrs:{to:{path:e.path}}},[t._v(t._s(e.name))])})],2)],1),t._v(" "),s("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view",{key:t.key})],1)],1)],1)])],1)},staticRenderFns:[]};var d=s("VU/8")(c,u,!1,function(t){s("BknD")},"data-v-44ab93f3",null);e.default=d.exports}});
//# sourceMappingURL=12.4554e6095ab1e4047769.js.map