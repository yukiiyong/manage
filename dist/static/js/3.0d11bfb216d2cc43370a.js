webpackJsonp([3],{"+KVj":function(e,t){},Hbkh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("woOf"),r=a.n(s),i=a("l/JR"),o=a("yt7g"),l={name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},n={name:"",sex:-1,age:0,birth:"",addr:""},d={name:"",sex:-1,age:0,birth:"",addr:""},m={data:function(){return{user:{},users:[],total:0,page:1,sels:[],listLoading:!1,filters:{name:""},addFormVisible:!1,addForm:n,addLoading:!1,editFormVisible:!1,editForm:d,editFormRules:l,editLoading:!1}},mounted:function(){this.getUsers(),this.user=JSON.parse(sessionStorage.getItem("user")),console.log(this.user)},methods:{formatSex:function(e){return 1===e.sex?"男":0===e.sex?"女":"未知"},getUsers:function(e){var t=this,a=e||"",s={page:this.page,name:a};this.listLoading=!0,Object(i.e)(s).then(function(e){e.success&&(t.listLoading=!1,t.total=e.total,t.users=e.users)}).catch(function(e){t.listLoading=!1})},handleSelsChange:function(e){this.sels=e},handleAdd:function(){this.addFormVisible=!0,this.addForm=n},handleCurrentChange:function(e){this.page=e,this.getUsers()},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=t},handleDel:function(e,t){var a=this;this.$confirm("确认删除该项记录吗？","提示",{type:"warning"}).then(function(){if("超级管理员"===a.user.role){a.listLoading=!0;var e={accessToken:a.user.accessToken,id:t.id};Object(i.f)(e).then(function(e){a.listLoading=!1,e.success?(a.$message({message:e.msg,type:"success"}),a.getUsers()):a.$message({type:"error",message:e.msg})})}else a.$message({type:"danger",message:"权限不足"})}).catch(function(e){a.listLoading=!1,a.$message({message:e,type:"error"})})},batchRemove:function(){var e=this,t=this.sels.map(function(e){return e.id});this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){e.listLoading=!0;var a={accessToken:e.user.accessToken,ids:t};Object(i.b)(a).then(function(t){e.listLoading=!1,t.success?(e.$message({message:t.msg,type:"success"}),e.getUsers()):e.$message({type:"error",message:t.msg})})}).catch(function(t){e.listLoading=!1,e.$message({message:t,type:"danger"})})},addSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{type:"warning"}).then(function(){e.addLoading=!0;var t=r()({},e.addForm);t.birth=Object(o.a)(t.birth),Object(i.a)(t).then(function(t){e.addLoading=!1,t.success?(e.$message({type:"success",message:t.msg}),e.$refs.addForm.resetFields(),e.addFormVisible=!1,e.getUsers()):e.$message({type:"error",message:t.msg})})}).catch(function(t){e.addLoading=!1,e.$message({type:"danger",message:t})})})},editSubmit:function(){var e=this;this.$refs.editForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{type:"warning"}).then(function(){e.editLoading=!0;var t=r()({},e.editForm);t.birth=Object(o.a)(t.birth),Object(i.c)(t).then(function(t){e.editLoading=!1,t.success?(e.$message({type:"success",message:"提交成功"}),e.$refs.editForm.resetFields(),e.editFormVisible=!1,e.getUsers()):e.$message({type:"error",message:t.msg})})}).catch(function(t){e.editLoading=!1,e.$message({type:"danger",message:t})})})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.getUsers(e.filters.name)}}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.users},on:{"selection-change":e.handleSelsChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"60",index:15*(e.page-1)+1}}),e._v(" "),a("el-table-column",{attrs:{label:"姓名",prop:"name",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"性别",prop:"sex",formatter:e.formatSex,width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"年龄",prop:"age",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"生日",prop:"birth",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"地址",prop:"addr",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-button",{attrs:{type:"danger",disabled:0===e.sels.length},on:{click:e.batchRemove}},[e._v("批量删除")]),e._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev,pager,next",background:"",total:e.total,"page-size":15,"current-page":e.page},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editFormVisible,title:"编辑","close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-radio-group",{model:{value:e.editForm.sex,callback:function(t){e.$set(e.editForm,"sex",t)},expression:"editForm.sex"}},[a("el-radio",{attrs:{label:1}},[e._v("男")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄",prop:"age"}},[a("el-input-number",{model:{value:e.editForm.age,callback:function(t){e.$set(e.editForm,"age",t)},expression:"editForm.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生日",prop:"birth"}},[a("el-date-picker",{attrs:{placeholder:"选择生日"},model:{value:e.editForm.birth,callback:function(t){e.$set(e.editForm,"birth",t)},expression:"editForm.birth"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址",prop:"addr"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入地址"},model:{value:e.editForm.addr,callback:function(t){e.$set(e.editForm,"addr",t)},expression:"editForm.addr"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.editLoading},on:{click:e.editSubmit}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addFormVisible,title:"新增","close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.editFormRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-radio-group",{model:{value:e.addForm.sex,callback:function(t){e.$set(e.addForm,"sex",t)},expression:"addForm.sex"}},[a("el-radio",{attrs:{label:1}},[e._v("男")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄",prop:"age"}},[a("el-input-number",{attrs:{min:0,max:150},model:{value:e.addForm.age,callback:function(t){e.$set(e.addForm,"age",t)},expression:"addForm.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生日",prop:"birth"}},[a("el-date-picker",{attrs:{placeholder:"选择生日"},model:{value:e.addForm.birth,callback:function(t){e.$set(e.addForm,"birth",t)},expression:"addForm.birth"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址",prop:"addr"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入地址"},model:{value:e.addForm.addr,callback:function(t){e.$set(e.addForm,"addr",t)},expression:"addForm.addr"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.addLoading},on:{click:e.addSubmit}},[e._v("创建")]),e._v(" "),a("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(m,c,!1,function(e){a("+KVj")},"data-v-875445c6",null);t.default=u.exports},yt7g:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var s=function(e){var t=new Date(e),a=t.getFullYear()+"-"+t.getMonth()+"-"+t.getDay();return console.log(a),a}}});
//# sourceMappingURL=3.0d11bfb216d2cc43370a.js.map