webpackJsonp([17],{EWeX:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return setStore}),__webpack_require__.d(__webpack_exports__,"a",function(){return getStore});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("mvHQ"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__=__webpack_require__("pFYg"),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__),setStore=function(e){var t=e.name,n=e.type,a=e.content,o={dataType:void 0===a?"undefined":__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(a),content:a,type:n,datetime:(new Date).getTime()};n&&window.localStorage.setItem(t,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(o)),window.sessionStorage.setItem(t,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(o))},getStore=function getStore(params){var name=params.name,type=params.type,obj={},content=void 0;return obj=type?window.sessionStorage.getItem(name):window.localStorage.getItem(name),obj?(obj=JSON.parse(obj),"boolean"===obj.dataType?content=eval(obj.content):"number"===obj.dataType?content=Number(obj.content):"string"!==obj.dataType&&"object"!==obj.dataType||(content=obj.content),content):""},removeStore=function(e){var t=e.name;window.localStorage.removeItem(t),window.sessionStorage.removeItem(t)}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),o=n.n(a),r=n("7+uW"),i=n("EWeX"),u={errors:[],performance:[],resources:[]},s=function(){if(window.performance){var e=window.performance.timing;return{redirect:e.redirectEnd-e.redirectStart,whiteScreen:e.domLoading-e.navigationStart,dom:e.domComplete-e.domLoading,load:e.loadEventEnd-e.loadEventStart,unload:e.unloadEventEnd-e.unloadEventStart,request:e.responseEnd-e.requestStart,time:(new Date).getTime()}}},c=function(){if(window.performance){var e=window.performance.getEntriesByType("resource"),t={xmlhttprequest:[],css:[],other:[],script:[],img:[],link:[],fetch:[],time:(new Date).getTime()};return e.forEach(function(e){var n=t[e.initiatorType];n&&n.push({name:e.name,duration:e.duration.toFixed(2),size:e.transferSize,protocol:e.nextHopProtocol})}),t}};window.addEventListener("error",function(e){var t=e.target;t!=window&&u.errors.push({type:t.localName,url:t.src||t.href,msg:(t.src||t.href)+"is load error",time:(new Date).getTime()})},!0),window.onerror=function(e,t,n,a,o){u.errors.push({type:"javascript",row:n,col:a,msg:o&&o.stack?o.stack:e,url:t,time:(new Date).getTime()})},window.addEventListener("unhandledrejection",function(e){u.errors.push({type:"promise",msg:e.reason&&e.reason.msg||e.reason||"",time:(new Date).getTime()})}),window.onload=function(){window.requestIdleCallback?window.requestIdleCallback(function(){u.performance=s(),u.resources=c()}):setTimeout(function(){u.performance=s(),u.resources=c()},0)};var d={name:"App",mounted:function(){var e=localStorage.getItem("themeValue");e&&window.document.documentElement.setAttribute("data-theme",e)},watch:{$route:function(e,t){console.log(s()),console.log(c())}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var m=n("VU/8")(d,l,!1,function(e){n("Pe/i")},null,null).exports,f=n("NYxO"),p={addRoutes:function(e){return e.permission.addRoutes},permission_routers:function(e){return e.permission.routers},roles:function(e){return e.user.roles}},h=n("//Fk"),_=n.n(h),g=n("/ocq"),v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(e){n("RyTg")},"data-v-3b884edb",null).exports;r.default.use(g.a);var b=function(e){n.e(12).then(n.bind(null,"TyLo")).then(function(t){e(t)})},w=[{path:"/",component:b,redirect:"goods",hidden:!0},{path:"/goods",name:"商品管理",iconCls:"el-icon-message",component:b,redirect:"goods/list",children:[{path:"list",name:"商品列表",component:function(){return n.e(7).then(n.bind(null,"8SnZ"))}},{path:"create",name:"添加商品",component:function(){return n.e(2).then(n.bind(null,"FYQJ"))}}]},{path:"/order",name:"订单",iconCls:"fa fa-file-text-o",component:b,redirect:"order/list",children:[{path:"list",name:"订单列表",component:function(){return n.e(9).then(n.bind(null,"aEKa"))}}]},{path:"/promotion",name:"营销",iconCls:"fa fa-calendar-check-o",component:b,children:[{path:"coupon",name:"优惠券",component:function(){return n.e(8).then(n.bind(null,"eu0k"))}},{path:"addCoupon",name:"添加优惠券",component:function(){return n.e(10).then(n.bind(null,"/1AN"))},hidden:!0},{path:"sec",name:"秒杀活动列表",component:function(){return n.e(14).then(n.bind(null,"/y4V"))}}]},{path:"/chart",name:"chart",iconCls:"fa fa-bar-chart",component:b,hidden:!0,children:[{path:"chart",name:"图表",component:function(e){n.e(0).then(n.bind(null,"StQU")).then(function(t){e(t)})}}]},{path:"/login",component:function(e){n.e(15).then(n.bind(null,"EV1k")).then(function(t){e(t)})},hidden:!0}],S=new g.a({routes:w}),T=[{path:"/create",name:"数据修改",iconCls:"fa fa-id-card-o",component:b,hidden:!0,meta:{roles:["admin"]},children:[{path:"form",name:"新增用户",component:function(e){n.e(6).then(n.bind(null,"NTtZ")).then(function(t){e(t)})},meta:{roles:["admin"]}},{path:"upload",name:"上传表格",component:function(){return n.e(1).then(n.bind(null,"ePtl"))},meta:{roles:["admin"]}}]},{path:"/setting",name:"系统管理",iconCls:"fa fa-gear",component:b,redirect:"noredirect",children:[{path:"index",name:"设置",component:function(e){n.e(11).then(n.bind(null,"P7aR")).then(function(t){e(t)})}},{path:"mdInput",name:"input",component:function(){return n.e(3).then(n.bind(null,"8W7Z"))},hidden:!0},{path:"user",name:"用户列表",component:function(e){n.e(4).then(n.bind(null,"Hbkh")).then(function(t){e(t)})}},{path:"admin",name:"管理员列表",component:function(e){n.e(13).then(n.bind(null,"AcrN")).then(function(t){e(t)})}}]},{path:"*",redirect:"/404",hidden:!0},{path:"/404",component:function(){return n.e(5).then(n.bind(null,"djY+"))},hidden:!0}];var y={state:{addRoutes:[],routers:w},mutations:{SET_ROUTERS:function(e,t){e.addRoutes=t,e.routers=w.concat(t)}},actions:{GenerateRoutes:function(e,t){var n=e.commit;return new _.a(function(e,a){var o=t.roles,r=void 0;r=o.indexOf("admin")>0?T:function e(t,n){return t.filter(function(t){return!!function(e,t){return!e.meta||!e.meta.roles||t.some(function(t){return e.meta.roles.indexOf(t)>=0})}(t,n)&&(t.children&&t.children.length&&(t.children=e(t.children,n)),!0)})}(T,o),n("SET_ROUTERS",r),e()})}}},R=n("l/JR"),E={state:{token:"",roles:[],name:"",avatar:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t},SET_ROLES:function(e,t){e.roles=t}},actions:{loginAction:function(e,t){var n=e.commit;return new _.a(function(e,a){Object(R.n)(t).then(function(t){t&&t.success&&(n("SET_TOKEN",t.data.accessToken),e(t))}).catch(function(e){a("login"+e)})})},getInfo:function(e){var t=e.commit;e.state;return new _.a(function(e,n){var a=Object(i.a)({name:"user"});a.roles&&a.roles.length>0?t("SET_ROLES",a.roles):n("getInfo: roles must be a non-null array"),t("SET_NAME",a.username),t("SET_AVATAR",a.userAvatar),e(a)}).catch(function(e){reject(e)})},FDLogout:function(e){var t=e.commit;return new _.a(function(e,n){Object(i.b)({name:"user",content:""}),t("SET_TOKEN",""),t("SET_ROLES",[]),t("SET_NAME",""),t("SET_AVATAR",""),e()}).catch(function(e){reject(e)})}}},O=n("fZjL"),k=n.n(O),N={state:{},mutations:{SET_LOADING:function(e,t){"[object Object]"===Object.prototype.toString.call(t)&&k()(t).forEach(function(n){r.default.set(e,n,t[n])})},CANCEL_LOADING:function(e){k()(e).forEach(function(t){r.default.delete(e,t)})}},actions:{setLoading:function(e,t){(0,e.commit)("SET_LOADING",t)},cancelLoading:function(e,t){(0,e.commit)("CANCEL_LOADING",t)}}};r.default.use(f.a);for(var C=new f.a.Store({modules:{permission:y,user:E,loading:N},getters:p}),j=n("zL8q"),P=n.n(j),D=(n("tvR6"),n("e0XP"),n("woOf")),L=n.n(D),A=n("zNUS"),M=n.n(A),x=n("mtWM"),I=n.n(x),U=n("KorX"),W=n.n(U),G=[{username:"admin",password:"123456"},{username:"123456",password:"123456"}],$={accessToken:M.a.Random.id(),username:M.a.Random.cname(),userAvatar:M.a.Random.image("300x250",M.a.Random.color()),sex:M.a.Random.integer(0,1),roles:["user"]},q=[],J=0;J<90;J++)q.push(M.a.mock({id:M.a.Random.id(),name:M.a.Random.cname(),sex:M.a.Random.integer(0,1),"age|18-60":1,birth:M.a.Random.date(),addr:M.a.Random.province()+M.a.Random.city()+M.a.Random.county()}));for(var K=[],F=0;F<40;F++)K.push(M.a.mock({name:M.a.Random.cname(),registime:M.a.Random.date(),addr:M.a.Random.province()+M.a.Random.city(),"roles|1":["管理员","超级管理员"]}));for(var B=[],V=[{skuName:"华为 HUAWEI P30",brand:"HUAWEI",tag:"手机",unit:"台"},{skuName:"优衣库 羽绒服",brand:"UNIQUE",tag:"服装",unit:"件"},{skuName:"康师傅 红烧牛肉面",brand:"康师傅",tag:"食品",unit:"桶"},{skuName:"松下 电视机",brand:"Panasonic",tag:"电器",unit:"台"},{skuName:"水蜜桃",brand:"",tag:"水果",unit:"斤"}],H=0;H<20;H++){var Y=M.a.Random.integer(0,4);B.push(M.a.mock({skuId:M.a.Random.id(3),goodsSn:Math.abs(M.a.Random.integer()),skuName:V[Y].skuName,brief:M.a.Random.cparagraph(),brand:V[Y].brand,imageUrl:M.a.Random.image("300x250",M.a.Random.color()),details:M.a.Random.cparagraph(2),"price|0-100":1,"saleCount|0-100":1,"stock|0-100":1,categories:V[Y].tag,"isOnSale|1":[!0,!1],"isNew|1":[!0,!1],unit:V[Y].unit}))}for(var X,z=[],Q=0;Q<25;Q++)z.push(M.a.mock({id:M.a.Random.id(),orderSn:Math.abs(M.a.Random.integer()),userName:M.a.Random.cname(),"price|0-100":1,"payWay|1":["微信","支付宝"],payTime:M.a.Random.now("second"),submitTime:M.a.Random.now("second"),"orderSource|1":["PC订单","APP订单"],"orderStatus|1-5":1,"orderCategory|0-1":1}));X=M.a.mock({order:{orderSn:Math.abs(M.a.Random.integer()),userName:M.a.Random.cname(),"price|0-100":1,"payWay|1":["微信","支付宝"],payTime:M.a.Random.now("second"),submitTime:M.a.Random.now("second"),"orderSource|1":["PC订单","APP订单"],"orderStatus|1-5":1,address:"北京市市辖区东城区 世纪大道111号",message:M.a.Random.cparagraph(),totalPrice:220,goodsPrice:210,deliveryPrice:10,integralPrice:0,deliveryCompany:"顺丰快递",deliverySn:"201707196398345",deliveryTime:"2018-10-16 15:43:41",refundAmount:5,refundType:0,refundContent:"不想要了",refundTime:null,confirmTime:null},user:{nickname:"user123"},orderGoods:[{id:344,orderId:312,goodsId:1181148,goodsName:"小白鞋",goodsSn:"12542",productId:469,number:2,price:1,specifications:["标准"],imageUrl:M.a.Random.image("300x250",M.a.Random.color()),comment:0,addTime:"2020-04-15 16:31:03",updateTime:"2020-04-15 16:31:03",deleted:!1}]});for(var Z=M.a.mock({id:M.a.Random.id(),flashOrderOvertime:60,normalOrderOvertime:120,confirmOvertime:15,finishOvertime:7}),ee=[],te=0;te<8;te++)ee.push(M.a.mock({id:M.a.Random.id(),title:M.a.Random.ctitle(),"status|0-1":1,startDate:M.a.Random.date(),endDate:M.a.Random.date()}));var ne=[],ae=[],oe=["全品类通用券","移动端全品类通用券","手机品类专用券","食品品类专用券"];console.log(oe[Math.random()*(oe.length-1)]);for(var re=Math.floor(49*Math.random()+1),ie=0;ie<28;ie++){var ue=M.a.Random.date();M.a.Random.natural(50,120);ne.push(M.a.mock({id:M.a.Random.id(),couponSn:Math.abs(M.a.Random.integer()),couponName:oe[Math.round(Math.random()*(oe.length-1))],"couponType|0-2":1,"goodsType|0-2":1,"min|20-100":1,"discount|5-15":1,"limit|1-4":1,"total|20-100":1,"status|0-3":1,"platform|0-2":1,startTime:ue,endTime:me(ue,5),receiveCount:re,useCount:M.a.Random.natural(0,re)}))}for(var se=0;se<re;se++){var ce=M.a.Random.boolean(),de=M.a.Random.date(),le=me(de,3);ae.push(M.a.mock({couponCode:M.a.Random.id(),userName:M.a.Random.cname(),"getType|0-1":1,addTime:de,useStatus:Number(ce),useTime:ce?le:null,orderSn:ce?Math.abs(M.a.Random.integer()):null}))}function me(e,t){if("number"==typeof t){Math.floor(4*Math.random());var n=new Date(e);n.setTime(n.getTime()+864e5*t);var a=n,o=a.getFullYear()<10?"0"+a.getFullYear():a.getFullYear(),r=a.getMonth()+1;return o+"-"+(r=r<10?"0"+r:r)+"-"+(a.getDate()<10?"0"+a.getDate():a.getDate())}}var fe=q,pe=K,he=B,_e=z,ge=X,ve=ne,be=ae,we=ee,Se=Z,Te={bootstrap:function(){var e=new W.a(I.a);e.onGet("/success").reply(200,{success:!0}),e.onGet("/error").reply(500,{success:!1}),e.onPost("/api/login").reply(function(e){var t=JSON.parse(e.data),n=t.username,a=t.password;return new _.a(function(e,t){setTimeout(function(){var t=L()({},$),o=G.some(function(e){if(e.username===n&&e.password===a)return t.username=n,"admin"===n&&(t.roles=["admin"]),!0});e(o?[200,{code:200,success:!0,msg:"登录成功",data:t}]:[200,{code:500,success:!1,msg:"登录失败！"}])},1e3)})}),e.onGet("/user/list").reply(function(e){var t=e.name,n=e.page,a=fe.filter(function(e){return!t||-1!==e.name.indexOf(t)}),o=a.slice(15*(n-1),15*n);return new _.a(function(e,t){setTimeout(function(){e([200,{code:200,success:!0,total:a.length,users:o}])},1e3)})}),e.onGet("/user/admin").reply(function(e){var t=e.name,n=e.page,a=pe.filter(function(e){return!t||-1!==e.name.indexOf(t)}),o=a.slice(15*(n-1),15*n);return new _.a(function(e,t){setTimeout(function(){e([200,{success:!0,total:a.length,users:o}])},500)})}),e.onPost("/user/remove").reply(function(e){var t=JSON.parse(e.data),n=t.accessToken,a=t.id;return n?(fe=fe.filter(function(e){return e.id!==a}),new _.a(function(e,t){setTimeout(function(){e([200,{success:!0,msg:"用户删除成功"}])},500)})):new _.a(function(e,t){setTimeout(function(){e([200,{success:!1,msg:"token丢失"}])},500)})}),e.onPost("/user/batchremove").reply(function(e){var t=JSON.parse(e.data),n=t.accessToken,a=t.ids;return a=a.split(","),n?(fe=fe.filter(function(e){return!a.include(e.id)}),new _.a(function(e,t){setTimeout(function(){e([200,{success:!0,msg:"批量删除用户成功！"}])},500)})):new _.a(function(e,t){setTimeout(function(){e([200,{success:!1,msg:"token丢失"}])},500)})}),e.onPost("/user/edit").reply(function(e){var t=JSON.parse(e.data),n=t.id,a=t.name,o=t.age,r=t.sex,i=t.birth,u=t.addr;return fe.some(function(e){if(e.id===n)return e.name=a,e.age=o,e.sex=r,e.birth=i,e.addr=u,!0}),new _.a(function(e,t){setTimeout(function(){e([200,{success:!0,msg:"用户资料更新成功"}])},500)})}),e.onPost("/user/add").reply(function(e){var t=JSON.parse(e.data),n=t.name,a=t.age,o=t.sex,r=t.birth,i=t.addr;return fe.some(function(e){return e.name===n})?new _.a(function(e,t){setTimeout(function(){e([200,{success:!1,msg:"已存在用户"}])},500)}):(fe.push({name:n,age:a,sex:o,birth:r,addr:i}),new _.a(function(e,t){setTimeout(function(){e([200,{success:!0,msg:"用户添加成功！"}])},500)}))}),e.onGet("/goods/list").reply(function(e){var t=e.id,n=e.num,a=e.name,o=e.page,r=he.filter(function(e){return(!a||-1!==e.skuName.indexOf(a))&&((!t||-1!==e.skuId.indexOf(t))&&!(n>0&&e.skuNum!==n))}),i=r.slice(15*(o-1),15*o);return new _.a(function(e,t){setTimeout(function(){e([200,{code:200,success:!0,total:r.length,goodsList:i}])},1e3)})}),e.onPost("/storage/create").reply(function(e){e.data;return new _.a(function(e,t){e([200,{code:200,success:!0,data:"success"}])})}),e.onGet("/order/list").reply(function(e){var t=e.orderSn,n=e.userName,a=e.submitTime,o=e.orderStatus,r=e.orderCategory,i=e.orderSource,u=e.page,s=_e.filter(function(e){return(!t||t==e.orderSn)&&((!n||n===e.userName)&&((!a||""===a||e.submitTime==a)&&((!r||e.orderCategory==r)&&((!i||e.orderSource==i)&&(!o||e.orderStatus==o)))))}),c=s.slice(15*(u-1),15*u);return new _.a(function(e,t){e([200,{code:200,success:!0,list:c,total:s.length}])})}),e.onGet("/order/detail").reply(function(e){var t=e.id,n=_e.filter(function(e){return!(!t||e.id!=t)}),a=ge;return a.order=L()(a.order,n[0]),new _.a(function(e,t){e([200,{code:200,success:!0,data:a}])})}),e.onGet("/coupon/list").reply(function(e){var t=e.name,n=e.couponType,a=e.status,o=e.page,r=ve.filter(function(e){return(!t||e.couponName==t)&&((!n||e.couponType==n)&&(!a||e.status==a))}),i=r.slice(15*(o-1),15*o);return new _.a(function(e,t){e([200,{code:200,success:!0,list:i,total:r.length}])})}),e.onGet("/coupon/detail").reply(function(e){e.id;var t=e.orderSn,n=e.useStatus,a=e.page,o=be.filter(function(e){return(!n||n==e.useStatus)&&(!t||e.orderSn==t)}),r=o.slice(15*(a-1),15*a);return new _.a(function(e,t){e([200,{code:200,success:!0,list:r,total:o.length}])})}),e.onGet("/coupon/read").reply(function(e){var t=e.id,n=ve.filter(function(e){return!t||e.id==t});return 1===n.length&&(n=n[0]),new _.a(function(e,t){e([200,{code:200,success:!0,data:n}])})}),e.onPost("/coupon/create").reply(function(e){var t=JSON.parse(e.data),n=L()({},t);return n.id=M.a.Random.id(),n.couponSn=Math.abs(M.a.Random.integer()),n.receiveCount=0,n.useCount=0,n.status=0,ve.push(n),new _.a(function(e,t){e([200,{code:200,success:!0}])})}),e.onPost("/coupon/update").reply(function(e){JSON.parse(e.data);return new _.a(function(e,t){e([200,{code:200,success:!0}])})}),e.onGet("/sec/list").reply(function(e){var t=e.title,n=e.page,a=we.filter(function(e){return!t||e.title===t}),o=a.slice(15*(n-1),15*n);return new _.a(function(e,t){e([200,{success:!0,code:200,list:o,total:a.length}])})}),e.onPost("/sec/update/status").reply(function(e){var t=JSON.parse(e.data),n=t.id,a=(t.status,!1);return we.forEach(function(e){e.id===n&&(e.status=e.status?0:1,a=!0)}),a?new _.a(function(e,t){e([200,{success:!0,code:200,list:we,total:we.length}])}):new _.a(function(e,t){e([200,{success:!1,code:200,msg:"秒杀活动不存在！"}])})}),e.onPost("/sec/create").reply(function(e){var t=JSON.parse(e.data);return console.log(t),t.id=M.a.Random.id(),we.push(t),new _.a(function(e,t){e([200,{success:!0,code:200,list:we,total:we.length}])})}),e.onPost(/\/sec\/update\/\d+/).reply(function(e){var t=JSON.parse(e.data),n=/\/sec\/update\/(\d+)/.exec(e.url)[1],a=!1;return we.forEach(function(e,o){e.id===n&&(we[o]=L()({},t),a=!0)}),a?new _.a(function(e,t){e([200,{success:!0,code:200,list:we,total:we.length}])}):new _.a(function(e,t){e([200,{success:!1,code:200,msg:"秒杀活动不存在！"}])})}),e.onPost("/orderSetting/update").reply(function(e){var t=JSON.parse(e.data);return!t instanceof Object?new _.a(function(e,t){e([200,{success:!1,code:200,msg:"传入的参数不对"}])}):(Se=L()({},t),new _.a(function(e,t){e([200,{success:!0,code:200}])}))}),e.onGet("/orderSetting").reply(function(e){e.id;return new _.a(function(e,t){e([200,{success:!0,code:200,data:Se}])})}),e.onPost("/log").reply(function(e){console.log(e)})}},ye={props:{text:{type:String,default:"loading..."},isShow:{type:Boolean,default:!1}}},Re={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"loading"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"isShow"}],staticClass:"ui-loading-wrap"},[t("div",{staticClass:"ui-loading-mask"}),this._v(" "),t("div",{staticClass:"ui-loading"},[t("div",{staticClass:"ui-loading-icon"}),this._v(" "),t("div",{staticClass:"ui-loading-text"},[this._v(this._s(this.text))])])])])},staticRenderFns:[]};var Ee=n("VU/8")(ye,Re,!1,function(e){n("fC2p")},"data-v-eecbd004",null).exports,Oe=void 0,ke=r.default.extend(Ee);ke.prototype.close=function(){var e=this;Oe&&(Oe=void 0),console.log("loading close is using"),this.isShow=!1,setTimeout(function(){e.$el&&e.$el.parentNode&&e.$el.parentNode.removeChild(e.$el),e.$destroy()},300)};var Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Oe&&Oe.close();var t=void 0;return t=e.parent&&"[object String]"===Object.prototype.toString.call(e.parent)?document.querySelector(e.parent):document.body,Oe=new ke({el:document.createElement("div"),data:e}),t.appendChild(Oe.$el),r.default.nextTick(function(){Oe.isShow=!0}),Oe};r.default.prototype.$loadings=Ne,r.default.directive("loadings",{bind:function(e,t){var n=new ke({el:document.createElement("div"),data:{}});e.appendChild(n.$el),e.loading=n,n.isShow=t.value},update:function(e,t){console.log(t),t.oldValue!==t.value&&(e.loading.isShow=t.value)},unbind:function(e){var t=e.loading;t.$el.parentNode&&t.$el.parentNode.removeChild(t.$el),t.$destroy(),t=null}});Te.bootstrap(),r.default.use(P.a),r.default.config.productionTip=!1,S.beforeEach(function(e,t,n){if("/login"===e.path)return sessionStorage.removeItem("user"),void n();var a=Object(i.a)({name:"user",type:!0});a.roles;a.accessToken?(console.log(C.getters.roles),0===C.getters.roles.length?C.dispatch("getInfo").then(function(t){var a=t.roles;C.dispatch("GenerateRoutes",{roles:a}).then(function(){var t=C.getters.addRoutes;S.options.routes=C.getters.permission_routers,S.addRoutes(t),n(o()({},e,{replace:!0}))})}).catch(function(e){alert(e)}):n()):n({path:"/login"})}),r.default.config.errorHandler=function(e,t,n){var a=Object(i.a)({name:"error",type:!0}),o={type:e.name,msg:e.message,time:(new Date).getTime()};(!a instanceof Array||0===a.length)&&(a=[]),a.push(o);var r={name:"error",type:!0,content:a};Object(i.b)(r)},new r.default({el:"#app",router:S,store:C,render:function(e){return e(m)}})},"Pe/i":function(e,t){},RyTg:function(e,t){},T452:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={base1:"http://rap2api.taobao.org/app/mock/119360/",base:"/",login:"api/login",userList:"user/list",adminList:"user/admin",removeUser:"user/remove",batchRemove:"user/batchremove",editUser:"user/edit",addUser:"user/add",goodsList:"goods/list",createStorage:"storage/create",orderList:"order/list",orderDetail:"order/detail",couponList:"coupon/list",couponDetail:"coupon/detail",couponRead:"coupon/read",updateCoupon:"coupon/update",createCoupon:"coupon/create",getSecList:"sec/list",updateSecStatus:"sec/update/status",createSec:"sec/create",updateSec:"sec/update",updateOrderSetting:"orderSetting/update",getOrderSetting:"orderSetting"}},e0XP:function(e,t){},fC2p:function(e,t){},"l/JR":function(e,t,n){"use strict";n.d(t,"n",function(){return i}),n.d(t,"l",function(){return u}),n.d(t,"f",function(){return s}),n.d(t,"m",function(){return c}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return l}),n.d(t,"a",function(){return m}),n.d(t,"h",function(){return f}),n.d(t,"r",function(){return p}),n.d(t,"j",function(){return h}),n.d(t,"i",function(){return _}),n.d(t,"g",function(){return g}),n.d(t,"o",function(){return v}),n.d(t,"c",function(){return b}),n.d(t,"k",function(){return w}),n.d(t,"q",function(){return S}),n.d(t,"d",function(){return T}),n.d(t,"p",function(){return y});var a=n("mtWM"),o=n.n(a),r=n("T452"),i=function(e){return o.a.post(r.a.base+r.a.login,e).then(function(e){return e.data})},u=function(e){return o.a.get(r.a.base+r.a.userList,e).then(function(e){return e.data})},s=function(e){return o.a.get(r.a.base+r.a.adminList,e).then(function(e){return e.data})},c=function(e){return o.a.post(r.a.base+r.a.removeUser,e).then(function(e){return e.data})},d=function(e){return o.a.post(r.a.base+r.a.batchRemove,e).then(function(e){return e.data})},l=function(e){return o.a.post(r.a.base+r.a.editUser,e).then(function(e){return e.data})},m=function(e){return o.a.post(r.a.base+r.a.addUser,e).then(function(e){return e.data})},f=function(e){return o.a.get(r.a.base+r.a.goodsList,e).then(function(e){return e.data})},p=r.a.base+r.a.createStorage,h=function(e){return o.a.get(r.a.base+r.a.orderList,e).then(function(e){return e.data})},_=function(e){return o.a.get(r.a.base+r.a.orderDetail,e).then(function(e){return e.data})},g=function(e){return o.a.get(r.a.base+r.a.couponList,e).then(function(e){return e.data})},v=function(e){return o.a.post(r.a.base+r.a.updateCoupon,e).then(function(e){return e.data})},b=function(e){return o.a.post(r.a.base+r.a.createCoupon,e).then(function(e){return e.data})},w=function(e){return o.a.get(r.a.base+r.a.getSecList,e).then(function(e){return e.data})},S=function(e){return o.a.post(r.a.base+r.a.updateSecStatus,e).then(function(e){return e.data})},T=function(e){return o.a.post(r.a.base+r.a.createSec,e).then(function(e){return e.data})},y=function(e,t){return o.a.post(r.a.base+r.a.updateSec+"/"+e,t).then(function(e){return e.data})}},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f2595ff724a74d5d57bb.js.map