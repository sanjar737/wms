(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e59ac37e"],{"0121":function(e,t,r){"use strict";r("029b")},"029b":function(e,t,r){},"0bf4":function(e,t,r){e.exports=r.p+"img/success.04bdd291.svg"},"1d3e":function(e,t,r){"use strict";r("ed26")},"1dc5":function(e,t,r){},"1e3e":function(e,t,r){e.exports=r.p+"img/shipment.30b6843b.svg"},4398:function(e,t,r){"use strict";r.r(t);var s=r("7a23");const c=Object(s["H"])("data-v-4fb1e817");Object(s["v"])("data-v-4fb1e817");const a={key:0,class:"loader"},n={key:1,class:"error"},d={key:2,class:"delivery-point"},i={class:"left-side"},o={class:"right-side"},b={class:"orders"},l=Object(s["i"])("div",{class:"title"},"Неотсканировано",-1),u={class:"loader",key:"load"},O={class:"error",key:"error"},j={class:"empty-list",key:"empty"},v={class:"result",key:"result"},f=Object(s["i"])("div",{class:"title"},"Отлично, приступайте к отгрузке! ",-1),m=Object(s["i"])("div",{class:"message"},"Проверенные заказы соответсвуют ПВЗ.",-1);Object(s["t"])();const p=c((e,t,r,p,y,g)=>{const h=Object(s["A"])("ScanProgress"),C=Object(s["A"])("CurrentScan"),k=Object(s["A"])("OrderList"),N=Object(s["A"])("TransitionFade"),_=Object(s["A"])("AppLayout");return Object(s["s"])(),Object(s["f"])(_,{breadcrumbs:e.breadcrumbs},{default:c(()=>[e.deliveryPoint.loading?(Object(s["s"])(),Object(s["f"])("div",a,"Загрузка")):e.deliveryPoint.error?(Object(s["s"])(),Object(s["f"])("div",n,Object(s["D"])(e.deliveryPoint.error),1)):e.deliveryPoint.data?(Object(s["s"])(),Object(s["f"])("div",d,[Object(s["i"])("div",i,[Object(s["i"])(h,{cityName:e.deliveryPoint.data.shortName,scannedOrdersCount:e.rightOrders.length,ordersCount:e.orders.data.length},null,8,["cityName","scannedOrdersCount","ordersCount"])]),Object(s["i"])("div",o,[Object(s["i"])(C,{class:"current-scan",scannedOrdersCount:e.rightOrders.length,ordersCount:e.orders.data.length,scanningOrder:e.scanningOrder,scanningResult:e.scanningResult},null,8,["scannedOrdersCount","ordersCount","scanningOrder","scanningResult"]),Object(s["i"])("div",b,[l,Object(s["i"])(N,null,{default:c(()=>[e.orders.loading?(Object(s["s"])(),Object(s["f"])("div",u,"Загрузка")):e.orders.error?(Object(s["s"])(),Object(s["f"])("div",O,Object(s["D"])(e.orders.error),1)):e.orders.loaded&&e.orderListIsEmpty?(Object(s["s"])(),Object(s["f"])("div",j,"Нет заказов")):e.allOrdersScanned?(Object(s["s"])(),Object(s["f"])("div",v,[f,m])):(Object(s["s"])(),Object(s["f"])(k,{orders:e.notScannedOrders,key:"orders",modelValue:e.scanningOrder,"onUpdate:modelValue":[t[1]||(t[1]=t=>e.scanningOrder=t),e.scan]},null,8,["orders","modelValue","onUpdate:modelValue"]))]),_:1})])])])):Object(s["g"])("",!0)]),_:1},8,["breadcrumbs"])}),y=Object(s["H"])("data-v-934bd832");Object(s["v"])("data-v-934bd832");const g={class:"order-list"};Object(s["t"])();const h=y((e,t,r,c,a,n)=>{const d=Object(s["A"])("OrderItem");return Object(s["s"])(),Object(s["f"])("ul",g,[Object(s["i"])(s["c"],{name:"list"},{default:y(()=>[(Object(s["s"])(!0),Object(s["f"])(s["a"],null,Object(s["y"])(e.orders,t=>(Object(s["s"])(),Object(s["f"])(d,{class:"order-item",order:t,key:t.orderId,onClick:r=>e.choice(t)},null,8,["order","onClick"]))),128))]),_:1})])});var C=r("1e3e"),k=r.n(C);const N=Object(s["H"])("data-v-6ac93c3f");Object(s["v"])("data-v-6ac93c3f");const _={class:"order-item"},I={class:"id"},$={class:"name"},x=Object(s["i"])("div",{class:"image-wrapper"},[Object(s["i"])("img",{src:k.a})],-1);Object(s["t"])();const w=N((e,t,r,c,a,n)=>(Object(s["s"])(),Object(s["f"])("div",_,[Object(s["i"])("div",I,"Номер заказа: "+Object(s["D"])(e.order.orderId),1),Object(s["i"])("div",$,Object(s["D"])(e.fullName),1),x])));var A=Object(s["j"])({name:"order-item",props:{order:{type:Object,required:!0}},computed:{fullName(){return`${this.order.customer.lastName} ${this.order.customer.firstName[0]}.`}}});r("1d3e");A.render=w,A.__scopeId="data-v-6ac93c3f";var P=A,D=Object(s["j"])({name:"order-list",components:{OrderItem:P},emits:{"update:modelValue":function(e){return"number"===typeof e.orderId&&void 0!==e.deliveryInfo&&void 0!==e.customer}},props:{orders:{type:Array,required:!1,default:()=>[]},modelValue:{type:Object,required:!1,default:()=>null}},methods:{choice(e){this.$emit("update:modelValue",e)}}});r("ad7a");D.render=h,D.__scopeId="data-v-934bd832";var S=D,V=r("c970"),q=r.n(V),H=r("7314"),L=r.n(H),F=r("0bf4"),R=r.n(F);const B=Object(s["H"])("data-v-628c0e9f");Object(s["v"])("data-v-628c0e9f");const E={class:"current-scan"},U={class:"title-wrapper"},T=Object(s["i"])("div",{class:"title"},"Текущее сканирование",-1),G={class:"status"},J={class:"warn",key:"warn"},M=Object(s["i"])("div",{class:"text"},"Начните сканировать заказы для проверки",-1),Z=Object(s["i"])("div",{class:"status-image-wrapper"},[Object(s["i"])("img",{src:q.a})],-1),z={class:"text"},K={class:"id"},Q={class:"city"},W=Object(s["h"])("Город: "),X={class:"city-name"},Y={class:"customer"},ee=Object(s["i"])("div",{class:"status-image-wrapper"},[Object(s["i"])("img",{src:L.a})],-1),te={class:"text"},re={class:"id"},se={class:"city"},ce=Object(s["h"])("Город: "),ae={class:"city-name"},ne={class:"customer"},de=Object(s["i"])("div",{class:"status-image-wrapper"},[Object(s["i"])("img",{src:R.a})],-1);Object(s["t"])();const ie=B((e,t,r,c,a,n)=>(Object(s["s"])(),Object(s["f"])("div",E,[Object(s["i"])("div",U,[T,Object(s["i"])("span",G,Object(s["D"])(e.scannedOrdersCount)+" из "+Object(s["D"])(e.ordersCount),1)]),Object(s["i"])(s["b"],{name:"bounce",mode:"out-in"},{default:B(()=>[null===e.scanningResult?(Object(s["s"])(),Object(s["f"])("div",J,[M,Z])):!1===e.scanningResult?(Object(s["s"])(),Object(s["f"])("div",{class:"error",key:e.scanningOrder.orderId},[Object(s["i"])("div",z,[Object(s["i"])("div",K,"Номер заказа: "+Object(s["D"])(e.scanningOrder.orderId),1),Object(s["i"])("div",Q,[W,Object(s["i"])("span",X,Object(s["D"])(e.scanningOrder.deliveryInfo.deliveryPoint.shortName),1)]),Object(s["i"])("div",Y,"Покупатель: "+Object(s["D"])(e.fullName),1)]),ee])):(Object(s["s"])(),Object(s["f"])("div",{class:"info",key:e.scanningOrder.orderId},[Object(s["i"])("div",te,[Object(s["i"])("div",re,"Номер заказа: "+Object(s["D"])(e.scanningOrder.orderId),1),Object(s["i"])("div",se,[ce,Object(s["i"])("span",ae,Object(s["D"])(e.scanningOrder.deliveryInfo.deliveryPoint.shortName),1)]),Object(s["i"])("div",ne,"Покупатель: "+Object(s["D"])(e.fullName),1)]),de]))]),_:1})])));var oe=Object(s["j"])({name:"current-scan",props:{scanningOrder:{type:Object,required:!1,default:null},scannedOrdersCount:{type:Number,required:!1,default:0},ordersCount:{type:Number,required:!1,default:0},scanningResult:{type:Boolean,required:!1,default:null}},computed:{fullName(){return this.scanningOrder?`${this.scanningOrder.customer.lastName} ${this.scanningOrder.customer.firstName[0]}.`:""}}});r("0121");oe.render=ie,oe.__scopeId="data-v-628c0e9f";var be=oe;const le=Object(s["H"])("data-v-353b8f5d");Object(s["v"])("data-v-353b8f5d");const ue={class:"point-block"},Oe={class:"city"},je={class:"order-count"};Object(s["t"])();const ve=le((e,t,r,c,a,n)=>{const d=Object(s["A"])("StatusBar");return Object(s["s"])(),Object(s["f"])("div",ue,[Object(s["i"])(d,{class:"progress",currentValue:e.scannedOrdersCount,maxValue:e.ordersCount},null,8,["currentValue","maxValue"]),Object(s["i"])("div",Oe,Object(s["D"])(e.cityName),1),Object(s["i"])("div",je,Object(s["D"])(e.ordersCount)+" заказов",1)])}),fe=Object(s["H"])("data-v-6d7164a2");Object(s["v"])("data-v-6d7164a2");const me={class:"progress",viewBox:"0 0 110 110",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pe=Object(s["i"])("circle",{cx:"55",cy:"55",r:"46",fill:"#ECEFF4"},null,-1),ye=Object(s["i"])("path",{d:"M66.2206 62.8148C66.2206 62.8148 64.2446 62.8046 63.1314 62.8148C61.2949 62.8148 56.2274 62.3931 52.7097 59.8011C49.4503 57.4 45.7703 52.2229 44.9074 49.3783C44.2903 47.3394 39.0811 47.8309 39.0811 47.8309C39.0811 47.8309 39.1966 44.912 42.4674 44.6834C42.4674 42.8606 43.1474 41.5017 44.8149 41.224C46.0034 41.0263 47.4354 41.944 48.0263 42.5211C48.0583 40.8937 48.5211 39 51.0857 39C52.5726 39 53.8434 40.9074 54.2366 42.2434C54.6686 41.3166 55.7726 40.1429 57.0777 40.1429C58.2754 40.1429 59.4251 41.4114 59.4251 43.5097C62.8011 43.5097 62.7897 45.7246 62.8537 46.7531C60.0023 46.7017 56.3543 45.7737 57.232 52.1886C58.0789 58.3577 61.5211 59.6617 66.2206 61.6708V62.8148ZM39.0537 64.2434C39.0914 66.464 41.2263 68.336 42.9417 69.6446C42.9417 69.6446 43.4983 70.7531 44.9886 70.7531C46.4789 70.7531 47.3166 68.4983 48.584 68.4983C49.968 68.4983 50.5006 70.7531 52.5989 70.7531C54.696 70.7531 54.8926 68.4983 56.5531 68.4983C58.2126 68.4983 59.0343 70.7531 60.6309 70.7531C62.2297 70.7531 63.4823 68.4983 64.728 68.4983C66.5863 68.4983 66.5703 70.7531 68.1063 70.7531C69.5749 70.7531 70.7931 65.8423 70.7931 65.8423C70.7931 65.8423 70.3657 65.1508 70.0834 65.1508C68.6503 65.1508 60.1531 65.1508 56.5143 65.1508C52.16 65.1508 52.4686 65.4571 48.888 64.8C44.5966 64.0126 44.4914 62.2308 44.4914 59.1737C44.4914 56.1154 43.1566 55.2377 41.4194 54.9703C40.2434 54.7897 38.8869 55.4309 39.0103 56.632C39.1886 58.3577 42.648 56.8549 42.648 58.4137C42.6446 60.2274 38.9931 60.5211 39.0537 64.2434Z",fill:"#303236"},null,-1),ge=Object(s["i"])("defs",null,[Object(s["i"])("linearGradient",{id:"paint0_linear",x1:"5.11765",y1:"71.6274",x2:"55",y2:"2.00001",gradientUnits:"userSpaceOnUse"},[Object(s["i"])("stop",{"stop-color":"#F04040"}),Object(s["i"])("stop",{offset:"1","stop-color":"#F04040","stop-opacity":"0.58"})])],-1);Object(s["t"])();const he=fe((e,t,r,c,a,n)=>(Object(s["s"])(),Object(s["f"])("svg",me,[Object(s["i"])("circle",{class:"ring",cx:"55",cy:"55",transform:"rotate(-90 55 55)",r:"53",stroke:"url(#paint0_linear)","stroke-width":"3","stroke-dasharray":e.strokeFillLength+", 333"},null,8,["stroke-dasharray"]),pe,ye,ge])));var Ce=Object(s["j"])({name:"status-bar",props:{currentValue:{type:Number,required:!1,default:0},maxValue:{type:Number,required:!1,default:0}},computed:{strokeFillLength(){const e=333,t=this.maxValue||1;return e/t*this.currentValue}}});r("9a86");Ce.render=he,Ce.__scopeId="data-v-6d7164a2";var ke=Ce,Ne=Object(s["j"])({name:"scan-progress",components:{StatusBar:ke},props:{cityName:{type:String,required:!0},scannedOrdersCount:{type:Number,required:!1,default:0},ordersCount:{type:Number,required:!1,default:0}}});r("bbe5");Ne.render=ve,Ne.__scopeId="data-v-353b8f5d";var _e=Ne,Ie=r("6e29"),$e=r("07ab"),xe=Object(s["j"])({name:"delivery-point-list",components:{ScanProgress:_e,CurrentScan:be,OrderList:S,AppLayout:Ie["a"],TransitionFade:$e["a"]},computed:{scanningOrder:{get(){return this.$store.state.order.scanning.order},set(e){return this.$store.commit("order/SET_SCANNING",{order:e})}},scanningResult(){return this.$store.state.order.scanning.result},deliveryPoint(){return this.$store.state.deliveryPoint.deliveryPoint},orders(){return this.$store.state.order.orders},orderListIsEmpty(){return this.$store.getters["order/orderListIsEmpty"]},scannedOrders(){return this.$store.getters["order/scannedOrders"]},notScannedOrders(){return this.$store.getters["order/notScannedOrders"]},allOrdersScanned(){return this.$store.getters["order/allOrdersScanned"]},rightOrders(){return this.$store.getters["order/rightOrders"]},breadcrumbs(){var e,t;let r="...";return this.deliveryPoint.error&&(r="неизвестно"),(null===(e=this.deliveryPoint.data)||void 0===e?void 0:e.shortName)&&(r=null===(t=this.deliveryPoint.data)||void 0===t?void 0:t.shortName),[{href:"/delivery-points",text:"Маршрутные листы"},{href:this.$route.fullPath,text:"Отгрузка в "+r}]}},methods:{scan(){this.$store.dispatch("order/scan")}},async mounted(){const e=Number(this.$route.params.id);await this.$store.dispatch("deliveryPoint/getDeliveryPoint",e),this.$store.dispatch("order/getOrders")},unmounted(){this.$store.dispatch("order/clearState"),this.$store.dispatch("deliveryPoint/clearDeliveryPoint")}});r("b849");xe.render=p,xe.__scopeId="data-v-4fb1e817";t["default"]=xe},5670:function(e,t,r){"use strict";r("b01c")},"6e29":function(e,t,r){"use strict";var s=r("7a23");const c=Object(s["H"])("data-v-54ef4f68");Object(s["v"])("data-v-54ef4f68");const a={class:"desktop-layout"},n={class:"container"};Object(s["t"])();const d=c((e,t,r,c,d,i)=>{const o=Object(s["A"])("AppHeader");return Object(s["s"])(),Object(s["f"])("div",a,[Object(s["i"])(o,Object(s["n"])({class:"header"},e.$attrs),null,16),Object(s["i"])("div",n,[Object(s["z"])(e.$slots,"default",{},void 0,!0)])])}),i=Object(s["H"])("data-v-2c33816d");Object(s["v"])("data-v-2c33816d");const o={class:"header"};Object(s["t"])();const b=i((e,t,r,c,a,n)=>{const d=Object(s["A"])("Breadcrumbs");return Object(s["s"])(),Object(s["f"])("div",o,[Object(s["i"])(d,e.$attrs,null,16)])}),l=Object(s["H"])("data-v-5fe8a67c");Object(s["v"])("data-v-5fe8a67c");const u={class:"breadcrumbs"},O={key:0,class:"breadcrumb-list"},j={class:"breadcrumb-item"},v={class:"current-breadcrumb"};Object(s["t"])();const f=l((e,t,r,c,a,n)=>{const d=Object(s["A"])("router-link");return Object(s["s"])(),Object(s["f"])("div",u,[e.breadcrumbs.length>1?(Object(s["s"])(),Object(s["f"])("ul",O,[(Object(s["s"])(!0),Object(s["f"])(s["a"],null,Object(s["y"])(e.breadcrumbs,(t,r)=>(Object(s["s"])(),Object(s["f"])("li",j,[r!==e.breadcrumbs.length-1?(Object(s["s"])(),Object(s["f"])(d,{key:0,class:"link",to:t.href},{default:l(()=>[Object(s["h"])(Object(s["D"])(t.text),1)]),_:2},1032,["to"])):Object(s["g"])("",!0)]))),256))])):Object(s["g"])("",!0),Object(s["i"])("div",v,Object(s["D"])(e.breadcrumbs[e.breadcrumbs.length-1].text),1)])});var m=Object(s["j"])({inheritAttrs:!1,name:"breadcrumbs",props:{breadcrumbs:{type:Array,required:!0}}});r("bbea");m.render=f,m.__scopeId="data-v-5fe8a67c";var p=m,y=Object(s["j"])({inheritAttrs:!1,name:"app-header",components:{Breadcrumbs:p}});r("5670");y.render=b,y.__scopeId="data-v-2c33816d";var g=y,h=Object(s["j"])({inheritAttrs:!1,name:"desktop-layout",components:{AppHeader:g}});r("e3cb");h.render=d,h.__scopeId="data-v-54ef4f68";t["a"]=h},7314:function(e,t,r){e.exports=r.p+"img/error.6ba0f25b.svg"},"9a86":function(e,t,r){"use strict";r("1dc5")},a04f:function(e,t,r){},ad7a:function(e,t,r){"use strict";r("e26b")},b01c:function(e,t,r){},b849:function(e,t,r){"use strict";r("a04f")},b879:function(e,t,r){},bbe5:function(e,t,r){"use strict";r("b879")},bbea:function(e,t,r){"use strict";r("e90b")},c3f8:function(e,t,r){},c970:function(e,t,r){e.exports=r.p+"img/scan.08f9cce2.svg"},e26b:function(e,t,r){},e3cb:function(e,t,r){"use strict";r("c3f8")},e90b:function(e,t,r){},ed26:function(e,t,r){}}]);
//# sourceMappingURL=chunk-e59ac37e.e4ee942e.js.map