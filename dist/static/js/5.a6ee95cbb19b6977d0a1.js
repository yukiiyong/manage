webpackJsonp([5],{AcrN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("l/JR"),l={data:function(){return{filters:{name:""},users:[],total:0,page:1,listLoading:!1}},mounted:function(){this.getAdminList(),console.log(this.devWidth)},computed:{devWidth:function(){var t=void 0;return document.body.clientWidth?t=document.body.clientWidth:document.documentElement.clientWidth&&(t=document.documentElement.clientWidth),console.log("devWidth",t),t}},methods:{getAdminList:function(t){var e=this,a={name:t,page:this.page};this.listLoading=!0,Object(n.d)(a).then(function(t){t.success&&(e.listLoading=!1,e.total=t.total,e.users=t.users)}).catch(function(t){e.listLoading=!1,e.$message({type:"danger",message:t})})},handleCurrentChange:function(t){this.page=t,this.getAdminList()}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"姓名"},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.getAdminList(t.filters.name)}}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.users}},[a("el-table-column",{staticStyle:{width:"20%"},attrs:{prop:"name",label:"姓名",sortable:""}}),t._v(" "),a("el-table-column",{staticStyle:{width:"25%"},attrs:{prop:"registime",label:"注册时间",sortable:""}}),t._v(" "),a("el-table-column",{staticStyle:{width:"30%"},attrs:{prop:"addr",label:"地址",sortable:""}}),t._v(" "),a("el-table-column",{staticStyle:{width:"25%"},attrs:{prop:"role",label:"权限"}})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{attrs:{layout:"prev,pager,next",background:"","page-size":10,total:t.total,"current-page":t.page},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var s=a("VU/8")(l,i,!1,function(t){a("vrnz")},"data-v-50d3bb8b",null);e.default=s.exports},vrnz:function(t,e){}});
//# sourceMappingURL=5.a6ee95cbb19b6977d0a1.js.map