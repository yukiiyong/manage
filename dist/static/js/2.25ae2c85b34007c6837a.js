webpackJsonp([2],{EV1k:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("mvHQ"),o=r.n(s),n=(r("T452"),r("l/JR")),a={data:function(){return{loginForm:{userName:"",pwd:""},loginRules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login:function(){var e=this;this.$refs.loginForm.validate(function(t){if(t){var r={username:e.loginForm.userName,password:e.loginForm.pwd},s=void 0,a=r.username;s="admin"===r.username?"超级管理员":"管理员",Object(n.g)(r).then(function(t){if(t&&t.success){console.log(t);var r=t.data;r.username=a,r.role=s,sessionStorage.setItem("user",o()(t.data)),e.$message({type:"success",message:t.msg}),e.$router.push({path:"/"})}else e.$message({message:t.msg,type:"error"})})}})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"loginForm",staticClass:"container",attrs:{model:e.loginForm,rules:e.loginRules,"label-width":"80px"}},[r("h3",{staticClass:"title"},[e._v("用户登录")]),e._v(" "),r("el-form-item",{attrs:{prop:"userName",label:"姓名"}},[r("el-input",{attrs:{type:"text",placeholder:"用户名"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"pwd",label:"密码"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.loginForm.pwd,callback:function(t){e.$set(e.loginForm,"pwd",t)},expression:"loginForm.pwd"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":"0"}},[r("el-button",{staticClass:"submitBtn",attrs:{plain:""},on:{click:e.login}},[e._v("登录")])],1)],1)},staticRenderFns:[]};var i=r("VU/8")(a,l,!1,function(e){r("J/dC")},"data-v-3f2e3b42",null);t.default=i.exports},"J/dC":function(e,t){},mvHQ:function(e,t,r){e.exports={default:r("qkKv"),__esModule:!0}},qkKv:function(e,t,r){var s=r("FeBl"),o=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}}});
//# sourceMappingURL=2.25ae2c85b34007c6837a.js.map