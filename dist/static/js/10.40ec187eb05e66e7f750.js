webpackJsonp([10],{"8SnZ":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=l("l/JR"),s={data:function(){return{filters:{goodsId:"",goodsName:"",goodsNum:""},goods:[],listLoading:!1,total:-1,page:1,detailsVisible:!1,goodsDetail:{}}},mounted:function(){this.getGoodsList()},methods:{getGoodsList:function(t,e,l){var s=this,a={id:t||"",num:e||-1,name:l||"",page:this.page};this.listLoading=!0,Object(o.h)(a).then(function(t){t.success?(s.listLoading=!1,s.total=t.total,s.goods=t.goodsList):s.listLoading=!1})},handleAdd:function(){this.$router.push({path:"/goods/create"})},handlePageChange:function(t){console.log(t),this.page=t,this.getGoodsList()},viewDetails:function(t){console.log(this.goods),this.detailsVisible=!0,this.goodsDetail=t.details}}},a={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",[l("el-col",{staticClass:"toolbar",attrs:{span:24}},[l("el-form",{attrs:{inline:!0,model:t.filters}},[l("el-form-item",[l("el-input",{attrs:{placeholder:"请输入商品id"},model:{value:t.filters.goodsId,callback:function(e){t.$set(t.filters,"goodsId",e)},expression:"filters.goodsId"}})],1),t._v(" "),l("el-form-item",[l("el-input",{attrs:{placeholder:"请输入商品编号"},model:{value:t.filters.goodsNum,callback:function(e){t.$set(t.filters,"goodsNum",e)},expression:"filters.goodsNum"}})],1),t._v(" "),l("el-form-item",[l("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.filters.goodsName,callback:function(e){t.$set(t.filters,"goodsName",e)},expression:"filters.goodsName"}})],1),t._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.getGoodsList(t.filters.goodsId,t.filters.goodsNum,t.filters.goodsName)}}},[t._v("查询")])],1),t._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新建")])],1)],1)],1),t._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.goods,border:""}},[l("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-form",{attrs:{model:e.row}},[l("el-form-item",{attrs:{label:"商品编号"}},[l("span",[t._v(t._s(e.row.goodsSn))])]),t._v(" "),l("el-form-item",{attrs:{label:"商品图片"}},[l("img",{staticClass:"goods-img",attrs:{src:e.row.imageUrl,alt:e.row.skuName}})]),t._v(" "),l("el-form-item",{attrs:{label:"商品介绍"}},[l("span",[t._v(t._s(e.row.brief))])]),t._v(" "),l("el-form-item",{attrs:{label:"品牌"}},[l("span",[t._v(t._s(e.row.brand))])]),t._v(" "),l("el-form-item",{attrs:{label:"商品单位"}},[l("span",[t._v(t._s(e.row.unit))])])],1)]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"skuId",label:"商品ID",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"skuName",label:"商品名称",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"imageUrl",label:"商品图片",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[l("img",{staticClass:"goods-img",attrs:{src:t.row.imageUrl,alt:"商品图片"}})]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"详情",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{size:"small"},on:{click:function(l){t.viewDetails(e.row)}}},[t._v("查看")])]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"price",label:"商品售价",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"saleCount",label:"销量",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"stock",label:"库存",width:"80",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"categories",label:"标签",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.categories instanceof Array?l("div",t._l(e.row.categories,function(e){return l("el-tag",{key:e,attrs:{size:"medium"}},[t._v(t._s(e))])})):l("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.categories))])]}}])})],1),t._v(" "),l("el-col",{staticClass:"toolbar",attrs:{span:24}},[l("el-pagination",{attrs:{layout:"total,prev,pager,next",background:"","page-size":15,total:t.total,"current-page":t.page},on:{"current-change":t.handlePageChange}})],1),t._v(" "),l("el-dialog",{attrs:{title:"商品详情",visible:t.detailsVisible,center:""},on:{"update:visible":function(e){t.detailsVisible=e}}},[l("div",{staticClass:"goods-detail",domProps:{innerHTML:t._s(t.goodsDetail)}})])],1)},staticRenderFns:[]};var i=l("VU/8")(s,a,!1,function(t){l("biFe")},"data-v-5d6f7c7b",null);e.default=i.exports},biFe:function(t,e){}});
//# sourceMappingURL=10.40ec187eb05e66e7f750.js.map