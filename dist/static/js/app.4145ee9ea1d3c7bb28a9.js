webpackJsonp([17],{EWeX:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return setStore}),__webpack_require__.d(__webpack_exports__,"a",function(){return getStore});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("mvHQ"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__=__webpack_require__("pFYg"),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__),setStore=function(e){var n=e.name,t=e.type,a=e.content,o={dataType:void 0===a?"undefined":__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(a),content:a,type:t,datetime:(new Date).getTime()};t&&window.localStorage.setItem(n,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(o)),window.sessionStorage.setItem(n,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(o))},getStore=function getStore(params){var name=params.name,type=params.type,obj={},content=void 0;return obj=type?window.sessionStorage.getItem(name):window.localStorage.getItem(name),obj?(obj=JSON.parse(obj),"boolean"===obj.dataType?content=eval(obj.content):"number"===obj.dataType?content=Number(obj.content):"string"!==obj.dataType&&"object"!==obj.dataType||(content=obj.content),content):""},removeStore=function(e){var n=e.name;window.localStorage.removeItem(n),window.sessionStorage.removeItem(n)}},HkIE:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("Dd8w"),o=t.n(a),r=t("7+uW"),u={name:"App",mounted:function(){var e=localStorage.getItem("themeValue");e&&window.document.documentElement.setAttribute("data-theme",e)}},s={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=t("VU/8")(u,s,!1,function(e){t("HkIE")},null,null).exports,c=t("NYxO"),d={addRoutes:function(e){return e.permission.addRoutes},permission_routers:function(e){return e.permission.routers},roles:function(e){return e.user.roles}},m=t("//Fk"),l=t.n(m),f=t("/ocq"),p={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._v(" "),t("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),t("br"),e._v(" "),t("li",[t("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};t("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},p,!1,function(e){t("RyTg")},"data-v-3b884edb",null).exports;r.default.use(f.a);var _=function(e){t.e(15).then(t.bind(null,"TyLo")).then(function(n){e(n)})},h=[{path:"/",component:_,redirect:"goods",hidden:!0},{path:"/goods",name:"商品管理",iconCls:"el-icon-message",component:_,redirect:"goods/list",children:[{path:"list",name:"商品列表",component:function(){return t.e(10).then(t.bind(null,"8SnZ"))}},{path:"create",name:"添加商品",component:function(){return t.e(2).then(t.bind(null,"FYQJ"))}}]},{path:"/order",name:"订单",iconCls:"fa fa-file-text-o",component:_,redirect:"order/list",children:[{path:"list",name:"订单列表",component:function(){return t.e(14).then(t.bind(null,"aEKa"))}}]},{path:"/promotion",name:"营销",iconCls:"fa fa-calendar-check-o",component:_,children:[{path:"coupon",name:"优惠券",component:function(){return t.e(7).then(t.bind(null,"eu0k"))}},{path:"addCoupon",name:"添加优惠券",component:function(){return t.e(8).then(t.bind(null,"/1AN"))},hidden:!0},{path:"sec",name:"秒杀活动列表",component:function(){return t.e(12).then(t.bind(null,"/y4V"))}}]},{path:"/chart",name:"chart",iconCls:"fa fa-bar-chart",component:_,hidden:!0,children:[{path:"chart",name:"图表",component:function(e){t.e(0).then(t.bind(null,"StQU")).then(function(n){e(n)})}}]},{path:"/login",component:function(e){t.e(13).then(t.bind(null,"EV1k")).then(function(n){e(n)})},hidden:!0}],g=new f.a({routes:h}),b=[{path:"/create",name:"数据修改",iconCls:"fa fa-id-card-o",component:_,hidden:!0,meta:{roles:["admin"]},children:[{path:"form",name:"新增用户",component:function(e){t.e(6).then(t.bind(null,"NTtZ")).then(function(n){e(n)})},meta:{roles:["admin"]}},{path:"upload",name:"上传表格",component:function(){return t.e(1).then(t.bind(null,"ePtl"))},meta:{roles:["admin"]}}]},{path:"/setting",name:"系统管理",iconCls:"fa fa-gear",component:_,redirect:"noredirect",children:[{path:"index",name:"设置",component:function(e){t.e(11).then(t.bind(null,"P7aR")).then(function(n){e(n)})}},{path:"mdInput",name:"input",component:function(){return t.e(3).then(t.bind(null,"8W7Z"))},hidden:!0},{path:"user",name:"用户列表",component:function(e){t.e(4).then(t.bind(null,"Hbkh")).then(function(n){e(n)})}},{path:"admin",name:"管理员列表",component:function(e){t.e(9).then(t.bind(null,"AcrN")).then(function(n){e(n)})}}]},{path:"*",redirect:"/404",hidden:!0},{path:"/404",component:function(){return t.e(5).then(t.bind(null,"djY+"))},hidden:!0}];var v={state:{addRoutes:[],routers:h},mutations:{SET_ROUTERS:function(e,n){e.addRoutes=n,e.routers=h.concat(n)}},actions:{GenerateRoutes:function(e,n){var t=e.commit;return new l.a(function(e,a){var o=n.roles,r=void 0;r=o.indexOf("admin")>0?b:function e(n,t){return n.filter(function(n){return!!function(e,n){return!e.meta||!e.meta.roles||n.some(function(n){return e.meta.roles.indexOf(n)>=0})}(n,t)&&(n.children&&n.children.length&&(n.children=e(n.children,t)),!0)})}(b,o),t("SET_ROUTERS",r),e()})}}},R=t("l/JR"),S=t("EWeX"),T={state:{token:"",roles:[],name:"",avatar:""},mutations:{SET_TOKEN:function(e,n){e.token=n},SET_NAME:function(e,n){e.name=n},SET_AVATAR:function(e,n){e.avatar=n},SET_ROLES:function(e,n){e.roles=n}},actions:{loginAction:function(e,n){var t=e.commit;return new l.a(function(e,a){Object(R.l)(n).then(function(n){n&&n.success&&(t("SET_TOKEN",n.data.accessToken),e(n))}).catch(function(e){a("login"+e)})})},getInfo:function(e){var n=e.commit;e.state;return new l.a(function(e,t){var a=Object(S.a)({name:"user"});a.roles&&a.roles.length>0?n("SET_ROLES",a.roles):t("getInfo: roles must be a non-null array"),n("SET_NAME",a.username),n("SET_AVATAR",a.userAvatar),e(a)}).catch(function(e){reject(e)})},FDLogout:function(e){var n=e.commit;return new l.a(function(e,t){Object(S.b)({name:"user",content:""}),n("SET_TOKEN",""),n("SET_ROLES",[]),n("SET_NAME",""),n("SET_AVATAR",""),e()}).catch(function(e){reject(e)})}}};r.default.use(c.a);for(var w=new c.a.Store({modules:{permission:v,user:T},getters:d}),y=t("zL8q"),E=t.n(y),k=(t("tvR6"),t("e0XP"),t("woOf")),O=t.n(k),P=t("zNUS"),N=t.n(P),j=t("mtWM"),M=t.n(j),C=t("KorX"),A=t.n(C),D=[{username:"admin",password:"123456"},{username:"123456",password:"123456"}],I={accessToken:N.a.Random.id(),username:N.a.Random.cname(),userAvatar:N.a.Random.image("300x250",N.a.Random.color()),sex:N.a.Random.integer(0,1),roles:["user"]},L=[],x=0;x<90;x++)L.push(N.a.mock({id:N.a.Random.id(),name:N.a.Random.cname(),sex:N.a.Random.integer(0,1),"age|18-60":1,birth:N.a.Random.date(),addr:N.a.Random.province()+N.a.Random.city()+N.a.Random.county()}));for(var U=[],W=0;W<40;W++)U.push(N.a.mock({name:N.a.Random.cname(),registime:N.a.Random.date(),addr:N.a.Random.province()+N.a.Random.city(),"roles|1":["管理员","超级管理员"]}));for(var J=[],G=[{skuName:"华为 HUAWEI P30",brand:"HUAWEI",tag:"手机",unit:"台"},{skuName:"优衣库 羽绒服",brand:"UNIQUE",tag:"服装",unit:"件"},{skuName:"康师傅 红烧牛肉面",brand:"康师傅",tag:"食品",unit:"桶"},{skuName:"松下 电视机",brand:"Panasonic",tag:"电器",unit:"台"},{skuName:"水蜜桃",brand:"",tag:"水果",unit:"斤"}],K=0;K<20;K++){var F=N.a.Random.integer(0,4);J.push(N.a.mock({skuId:N.a.Random.id(3),goodsSn:Math.abs(N.a.Random.integer()),skuName:G[F].skuName,brief:N.a.Random.cparagraph(),brand:G[F].brand,imageUrl:N.a.Random.image("300x250",N.a.Random.color()),details:N.a.Random.cparagraph(2),"price|0-100":1,"saleCount|0-100":1,"stock|0-100":1,categories:G[F].tag,"isOnSale|1":[!0,!1],"isNew|1":[!0,!1],unit:G[F].unit}))}for(var q,B=[],H=0;H<25;H++)B.push(N.a.mock({orderSn:Math.abs(N.a.Random.integer()),userName:N.a.Random.cname(),"price|0-100":1,"payWay|1":["微信","支付宝"],payTime:N.a.Random.now("second"),submitTime:N.a.Random.now("second"),"orderSource|1":["PC订单","APP订单"],"orderStatus|1-5":1,"orderCategory|0-1":1}));q=N.a.mock({order:{orderSn:Math.abs(N.a.Random.integer()),userName:N.a.Random.cname(),"price|0-100":1,"payWay|1":["微信","支付宝"],payTime:N.a.Random.now("second"),submitTime:N.a.Random.now("second"),"orderSource|1":["PC订单","APP订单"],"orderStatus|1-5":1,address:"北京市市辖区东城区 世纪大道111号",message:N.a.Random.cparagraph(),totalPrice:23,goodsPrice:21,deliveryPrice:2,integralPrice:0,deliveryCompany:"顺丰快递",deliverySn:"201707196398345",deliveryTime:"2018-10-16 15:43:41",refundAmount:0,refundType:0,refundContent:"",refundTime:null,confirmTime:null},user:{nickname:"user123"},orderGoods:[{id:344,orderId:312,goodsId:1181148,goodsName:"小白鞋",goodsSn:"12542",productId:469,number:2,price:1,specifications:["标准"],imageUrl:N.a.Random.image("300x250",N.a.Random.color()),comment:0,addTime:"2020-04-15 16:31:03",updateTime:"2020-04-15 16:31:03",deleted:!1}]});for(var V=N.a.mock({id:N.a.Random.id(),flashOrderOvertime:60,normalOrderOvertime:120,confirmOvertime:15,finishOvertime:7}),Y=[],X=0;X<8;X++)Y.push(N.a.mock({id:N.a.Random.id(),title:N.a.Random.ctitle(),"status|0-1":1,startDate:N.a.Random.date(),endDate:N.a.Random.date()}));var Q=[],$=[],Z=["全品类通用券","移动端全品类通用券","手机品类专用券","食品品类专用券"];console.log(Z[Math.random()*(Z.length-1)]);for(var z=Math.floor(49*Math.random()+1),ee=0;ee<28;ee++){var ne=N.a.Random.date();N.a.Random.natural(50,120);Q.push(N.a.mock({id:N.a.Random.id(),couponSn:Math.abs(N.a.Random.integer()),couponName:Z[Math.round(Math.random()*(Z.length-1))],"couponType|0-2":1,"goodsType|0-2":1,"min|20-100":1,"discount|5-15":1,"limit|1-4":1,"total|20-100":1,"status|0-3":1,"platform|0-2":1,startTime:ne,endTime:ue(ne,5),receiveCount:z,useCount:N.a.Random.natural(0,z)}))}for(var te=0;te<z;te++){var ae=N.a.Random.boolean(),oe=N.a.Random.date(),re=ue(oe,3);$.push(N.a.mock({couponCode:N.a.Random.id(),userName:N.a.Random.cname(),"getType|0-1":1,addTime:oe,useStatus:Number(ae),useTime:ae?re:null,orderSn:ae?Math.abs(N.a.Random.integer()):null}))}function ue(e,n){if("number"==typeof n){Math.floor(4*Math.random());var t=new Date(e);t.setTime(t.getTime()+864e5*n);var a=t,o=a.getFullYear()<10?"0"+a.getFullYear():a.getFullYear(),r=a.getMonth()+1;return o+"-"+(r=r<10?"0"+r:r)+"-"+(a.getDate()<10?"0"+a.getDate():a.getDate())}}var se=L,ie=U,ce=J,de=B,me=q,le=Q,fe=$,pe=Y,_e=V;({bootstrap:function(){var e=new A.a(M.a);e.onGet("/success").reply(200,{success:!0}),e.onGet("/error").reply(500,{success:!1}),e.onPost("/api/login").reply(function(e){var n=JSON.parse(e.data),t=n.username,a=n.password;return new l.a(function(e,n){setTimeout(function(){var n=O()({},I),o=D.some(function(e){if(e.username===t&&e.password===a)return n.username=t,"admin"===t&&(n.roles=["admin"]),!0});e(o?[200,{code:200,success:!0,msg:"登录成功",data:n}]:[200,{code:500,success:!1,msg:"登录失败！"}])},1e3)})}),e.onGet("/user/list").reply(function(e){var n=e.name,t=e.page,a=se.filter(function(e){return!n||-1!==e.name.indexOf(n)}),o=a.slice(15*(t-1),15*t);return new l.a(function(e,n){setTimeout(function(){e([200,{code:200,success:!0,total:a.length,users:o}])},1e3)})}),e.onGet("/user/admin").reply(function(e){var n=e.name,t=e.page,a=ie.filter(function(e){return!n||-1!==e.name.indexOf(n)}),o=a.slice(15*(t-1),15*t);return new l.a(function(e,n){setTimeout(function(){e([200,{success:!0,total:a.length,users:o}])},500)})}),e.onPost("/user/remove").reply(function(e){var n=JSON.parse(e.data),t=n.accessToken,a=n.id;return t?(se=se.filter(function(e){return e.id!==a}),new l.a(function(e,n){setTimeout(function(){e([200,{success:!0,msg:"用户删除成功"}])},500)})):new l.a(function(e,n){setTimeout(function(){e([200,{success:!1,msg:"token丢失"}])},500)})}),e.onPost("/user/batchremove").reply(function(e){var n=JSON.parse(e.data),t=n.accessToken,a=n.ids;return a=a.split(","),t?(se=se.filter(function(e){return!a.include(e.id)}),new l.a(function(e,n){setTimeout(function(){e([200,{success:!0,msg:"批量删除用户成功！"}])},500)})):new l.a(function(e,n){setTimeout(function(){e([200,{success:!1,msg:"token丢失"}])},500)})}),e.onPost("/user/edit").reply(function(e){var n=JSON.parse(e.data),t=n.id,a=n.name,o=n.age,r=n.sex,u=n.birth,s=n.addr;return se.some(function(e){if(e.id===t)return e.name=a,e.age=o,e.sex=r,e.birth=u,e.addr=s,!0}),new l.a(function(e,n){setTimeout(function(){e([200,{success:!0,msg:"用户资料更新成功"}])},500)})}),e.onPost("/user/add").reply(function(e){var n=JSON.parse(e.data),t=n.name,a=n.age,o=n.sex,r=n.birth,u=n.addr;return se.some(function(e){return e.name===t})?new l.a(function(e,n){setTimeout(function(){e([200,{success:!1,msg:"已存在用户"}])},500)}):(se.push({name:t,age:a,sex:o,birth:r,addr:u}),new l.a(function(e,n){setTimeout(function(){e([200,{success:!0,msg:"用户添加成功！"}])},500)}))}),e.onGet("/goods/list").reply(function(e){var n=e.id,t=e.num,a=e.name,o=e.page,r=ce.filter(function(e){return(!a||-1!==e.skuName.indexOf(a))&&((!n||-1!==e.skuId.indexOf(n))&&!(t>0&&e.skuNum!==t))}),u=r.slice(15*(o-1),15*o);return new l.a(function(e,n){setTimeout(function(){e([200,{code:200,success:!0,total:r.length,goodsList:u}])},1e3)})}),e.onPost("/storage/create").reply(function(e){e.data;return new l.a(function(e,n){e([200,{code:200,success:!0,data:"success"}])})}),e.onGet("/order/list").reply(function(e){var n=e.orderSn,t=e.userName,a=e.submitTime,o=(e.orderStatus,e.orderCategory),r=e.orderSource,u=e.page,s=de.filter(function(e){return(!n||n==e.orderSn)&&((!t||t===e.userName)&&((!a||""===a||e.submitTime==a)&&((!o||e.orderCategory===o)&&(!r||-1!==e.orderSource.indexof(r)))))}),i=s.slice(15*(u-1),15*u);return new l.a(function(e,n){e([200,{code:200,success:!0,list:i,total:s.length}])})}),e.onGet("/order/detail").reply(function(e){e.id;return new l.a(function(e,n){e([200,{code:200,success:!0,data:me}])})}),e.onGet("/coupon/list").reply(function(e){var n=e.name,t=e.couponType,a=e.status,o=e.page,r=le.filter(function(e){return(!n||e.couponName==n)&&((!t||e.couponType==t)&&(!a||e.status==a))}),u=r.slice(15*(o-1),15*o);return new l.a(function(e,n){e([200,{code:200,success:!0,list:u,total:r.length}])})}),e.onGet("/coupon/detail").reply(function(e){e.id;var n=e.orderSn,t=e.useStatus,a=e.page,o=fe.filter(function(e){return(!t||t==e.useStatus)&&(!n||e.orderSn==n)}),r=o.slice(15*(a-1),15*a);return new l.a(function(e,n){e([200,{code:200,success:!0,list:r,total:o.length}])})}),e.onGet("/coupon/read").reply(function(e){var n=e.id,t=le.filter(function(e){return!n||e.id==n});return 1===t.length&&(t=t[0]),new l.a(function(e,n){e([200,{code:200,success:!0,data:t}])})}),e.onPost("/coupon/create").reply(function(e){var n=JSON.parse(e.data),t=O()({},n);return t.id=N.a.Random.id(),t.couponSn=Math.abs(N.a.Random.integer()),t.receiveCount=0,t.useCount=0,t.status=0,le.push(t),new l.a(function(e,n){e([200,{code:200,success:!0}])})}),e.onPost("/coupon/update").reply(function(e){JSON.parse(e.data);return new l.a(function(e,n){e([200,{code:200,success:!0}])})}),e.onGet("/sec/list").reply(function(e){var n=e.title,t=e.page,a=pe.filter(function(e){return!n||e.title===n}),o=a.slice(15*(t-1),15*t);return new l.a(function(e,n){e([200,{success:!0,code:200,list:o,total:a.length}])})}),e.onPost("/sec/update/status").reply(function(e){var n=JSON.parse(e.data),t=n.id,a=(n.status,!1);return pe.forEach(function(e){e.id===t&&(e.status=e.status?0:1,a=!0)}),a?new l.a(function(e,n){e([200,{success:!0,code:200,list:pe,total:pe.length}])}):new l.a(function(e,n){e([200,{success:!1,code:200,msg:"秒杀活动不存在！"}])})}),e.onPost("/sec/create").reply(function(e){var n=JSON.parse(e.data);return console.log(n),n.id=N.a.Random.id(),pe.push(n),new l.a(function(e,n){e([200,{success:!0,code:200,list:pe,total:pe.length}])})}),e.onPost(/\/sec\/update\/\d+/).reply(function(e){var n=JSON.parse(e.data),t=/\/sec\/update\/(\d+)/.exec(e.url)[1],a=!1;return pe.forEach(function(e,o){e.id===t&&(pe[o]=O()({},n),a=!0)}),a?new l.a(function(e,n){e([200,{success:!0,code:200,list:pe,total:pe.length}])}):new l.a(function(e,n){e([200,{success:!1,code:200,msg:"秒杀活动不存在！"}])})}),e.onPost("/orderSetting/update").reply(function(e){var n=JSON.parse(e.data);return!n instanceof Object?new l.a(function(e,n){e([200,{success:!1,code:200,msg:"传入的参数不对"}])}):(_e=O()({},n),new l.a(function(e,n){e([200,{success:!0,code:200}])}))}),e.onGet("/orderSetting").reply(function(e){e.id;return new l.a(function(e,n){e([200,{success:!0,code:200,data:_e}])})})}}).bootstrap(),r.default.use(E.a),r.default.config.productionTip=!1,g.beforeEach(function(e,n,t){if("/login"===e.path)return sessionStorage.removeItem("user"),void t();var a=Object(S.a)({name:"user",type:!0});a.roles;a.accessToken?(console.log(w.getters.roles),0===w.getters.roles.length?w.dispatch("getInfo").then(function(n){var a=n.roles;w.dispatch("GenerateRoutes",{roles:a}).then(function(){var n=w.getters.addRoutes;g.options.routes=w.getters.permission_routers,g.addRoutes(n),t(o()({},e,{replace:!0}))})}).catch(function(e){alert(e)}):t()):t({path:"/login"})}),new r.default({el:"#app",router:g,store:w,render:function(e){return e(i)}})},RyTg:function(e,n){},T452:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a={base1:"http://rap2api.taobao.org/app/mock/119360/",base:"/",login:"api/login",userList:"user/list",adminList:"user/admin",removeUser:"user/remove",batchRemove:"user/batchremove",editUser:"user/edit",addUser:"user/add",goodsList:"goods/list",createStorage:"storage/create",orderList:"order/list",orderDetail:"order/detail",couponList:"coupon/list",couponDetail:"coupon/detail",couponRead:"coupon/read",updateCoupon:"coupon/update",createCoupon:"coupon/create",getSecList:"sec/list",updateSecStatus:"sec/update/status",createSec:"sec/create",updateSec:"sec/update",updateOrderSetting:"orderSetting/update",getOrderSetting:"orderSetting"}},e0XP:function(e,n){},"l/JR":function(e,n,t){"use strict";t.d(n,"l",function(){return u}),t.d(n,"j",function(){return s}),t.d(n,"f",function(){return i}),t.d(n,"k",function(){return c}),t.d(n,"b",function(){return d}),t.d(n,"e",function(){return m}),t.d(n,"a",function(){return l}),t.d(n,"h",function(){return f}),t.d(n,"p",function(){return p}),t.d(n,"g",function(){return _}),t.d(n,"m",function(){return h}),t.d(n,"c",function(){return g}),t.d(n,"i",function(){return b}),t.d(n,"o",function(){return v}),t.d(n,"d",function(){return R}),t.d(n,"n",function(){return S});var a=t("mtWM"),o=t.n(a),r=t("T452"),u=function(e){return o.a.post(r.a.base+r.a.login,e).then(function(e){return e.data})},s=function(e){return o.a.get(r.a.base+r.a.userList,e).then(function(e){return e.data})},i=function(e){return o.a.get(r.a.base+r.a.adminList,e).then(function(e){return e.data})},c=function(e){return o.a.post(r.a.base+r.a.removeUser,e).then(function(e){return e.data})},d=function(e){return o.a.post(r.a.base+r.a.batchRemove,e).then(function(e){return e.data})},m=function(e){return o.a.post(r.a.base+r.a.editUser,e).then(function(e){return e.data})},l=function(e){return o.a.post(r.a.base+r.a.addUser,e).then(function(e){return e.data})},f=function(e){return o.a.get(r.a.base+r.a.goodsList,e).then(function(e){return e.data})},p=r.a.base+r.a.createStorage,_=function(e){return o.a.get(r.a.base+r.a.couponList,e).then(function(e){return e.data})},h=function(e){return o.a.post(r.a.base+r.a.updateCoupon,e).then(function(e){return e.data})},g=function(e){return o.a.post(r.a.base+r.a.createCoupon,e).then(function(e){return e.data})},b=function(e){return o.a.get(r.a.base+r.a.getSecList,e).then(function(e){return e.data})},v=function(e){return o.a.post(r.a.base+r.a.updateSecStatus,e).then(function(e){return e.data})},R=function(e){return o.a.post(r.a.base+r.a.createSec,e).then(function(e){return e.data})},S=function(e,n){return o.a.post(r.a.base+r.a.updateSec+"/"+e,n).then(function(e){return e.data})}},tvR6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.4145ee9ea1d3c7bb28a9.js.map