(function(e){function t(t){for(var n,o,s=t[0],d=t[1],c=t[2],l=0,u=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);f&&f(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=d(d.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function s(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-6782f2f4":"4c5986d8","chunk-6d59bf4c":"2642b12d","chunk-6f8b1196":"78fda0dd","chunk-e59ac37e":"e4ee942e"}[e]+".js"}function d(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,d),r.l=!0,r.exports}d.e=function(e){var t=[],r={"chunk-6782f2f4":1,"chunk-6d59bf4c":1,"chunk-6f8b1196":1,"chunk-e59ac37e":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-6782f2f4":"4320296f","chunk-6d59bf4c":"61f9fedc","chunk-6f8b1196":"f6f040d9","chunk-e59ac37e":"c9bb1969"}[e]+".css",a=d.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],l=c.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=s(e);var u=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=n,d.d=function(e,t,r){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(d.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)d.d(r,n,function(t){return e[t]}.bind(null,n));return r},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/wms/",d.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"07ab":function(e,t,r){"use strict";var n=r("7a23"),o=Object(n["j"])({functional:!0,render(){return Object(n["l"])(n["b"],{mode:"out-in",name:"fade"},this.$slots.default)}});r("c709"),t["a"]=o},"3f07":function(e,t,r){},4754:function(e,t,r){"use strict";r("3f07")},7869:function(e,t,r){},c709:function(e,t,r){"use strict";r("7869")},cd49:function(e,t,r){"use strict";r.r(t);var n=r("7a23");function o(e,t,r,o,a,i){const s=Object(n["A"])("TransitionFade"),d=Object(n["A"])("router-view");return Object(n["s"])(),Object(n["f"])(d,null,{default:Object(n["G"])(({Component:e})=>[Object(n["i"])(s,null,{default:Object(n["G"])(()=>[(Object(n["s"])(),Object(n["f"])(Object(n["B"])(e)))]),_:2},1024)]),_:1})}var a=r("07ab"),i=Object(n["j"])({components:{TransitionFade:a["a"]},name:"App"});r("4754");i.render=o;var s=i,d=r("6c02");const c=[{path:"/",name:"Hello-page",component:()=>r.e("chunk-6782f2f4").then(r.bind(null,"1e4b"))},{path:"/delivery-points",name:"Delivery-Point-list",component:()=>r.e("chunk-6f8b1196").then(r.bind(null,"3aca"))},{path:"/delivery-points/:id(\\d+)",name:"Delivery-Point",component:()=>r.e("chunk-e59ac37e").then(r.bind(null,"4398"))},{path:"/:pathMatch(.*)*",name:"Page-not-found",component:()=>r.e("chunk-6d59bf4c").then(r.bind(null,"9be1"))}],l=Object(d["a"])({history:Object(d["b"])("/wms/"),routes:c});var u=l,f=r("5502"),m=[{shortName:"НЧЛ-ВХТ",id:1},{shortName:"ЕКБ-1",id:2}],h=[{orderId:1,deliveryInfo:{deliveryPoint:{id:1,shortName:"НЧЛ-ВХТ"}},customer:{customerId:1,firstName:"Иван",lastName:"Иванов"}},{orderId:2,deliveryInfo:{deliveryPoint:{id:1,shortName:"НЧЛ-ВХТ"}},customer:{customerId:1,firstName:"Иван",lastName:"Иванов"}},{orderId:3,deliveryInfo:{deliveryPoint:{id:1,shortName:"НЧЛ-ВХТ"}},customer:{customerId:1,firstName:"Иван",lastName:"Иванов"}},{orderId:4,deliveryInfo:{deliveryPoint:{id:1,shortName:"НЧЛ-ВХТ"}},customer:{customerId:1,firstName:"Иван",lastName:"Иванов"}},{orderId:5,deliveryInfo:{deliveryPoint:{id:2,shortName:"ЕКБ-1"}},customer:{customerId:2,firstName:"Петр",lastName:"Петров"}},{orderId:6,deliveryInfo:{deliveryPoint:{id:1,shortName:"НЧЛ-ВХТ"}},customer:{customerId:1,firstName:"Иван",lastName:"Иванов"}}],v={getDeliveryPoints(){return new Promise(e=>{setTimeout(()=>{e(JSON.parse(JSON.stringify(m)))},500)})},getOrders(){return new Promise(e=>{setTimeout(()=>{e(JSON.parse(JSON.stringify(h)))},500)})},getDeliveryPoint(e){return new Promise((t,r)=>{setTimeout(()=>{const n=m.find(t=>t.id===e);void 0===n?r(new Error(`Пункт выдачи с номерм ${e} не найден`)):t(JSON.parse(JSON.stringify(n)))},500)})}};const y=()=>({deliveryPoints:{data:[],loading:!1,error:null,loaded:!1},deliveryPoint:{data:null,loading:!1,error:null,loaded:!1}}),p=y(),g={getDeliveryPointById:({deliveryPoints:e})=>t=>e.data.find(e=>e.id===t),deliveryPointListIsEmpty:({deliveryPoints:e})=>0===e.data.length},E={SET_DELIVERY_POINTS(e,t){Object.assign(e.deliveryPoints,t)},SET_DELIVERY_POINT(e,t){Object.assign(e.deliveryPoint,t)},SET_STATE(e,t){Object.assign(e,t)}},O={async getDeliveryPoints({commit:e}){e("SET_DELIVERY_POINTS",{loading:!0,error:null,loaded:!1});try{const t=await v.getDeliveryPoints();e("SET_DELIVERY_POINTS",{data:t,loaded:!0})}catch(t){e("SET_DELIVERY_POINTS",{error:t.message})}finally{e("SET_DELIVERY_POINTS",{loading:!1})}},async getDeliveryPoint({commit:e},t){e("SET_DELIVERY_POINT",{loading:!0,error:null,loaded:!1});try{const r=await v.getDeliveryPoint(t);e("SET_DELIVERY_POINT",{data:r,loaded:!0})}catch(r){e("SET_DELIVERY_POINT",{error:r.message})}finally{e("SET_DELIVERY_POINT",{loading:!1})}},clearDeliveryPoint({commit:e}){e("SET_DELIVERY_POINT",y().deliveryPoint)}},b={state:p,getters:g,mutations:E,actions:O,namespaced:!0};var S=b;const T=()=>({orders:{data:[],loading:!1,error:null,loaded:!1},scanning:{order:null,result:null}}),I=T(),N={notScannedOrders:({orders:e})=>e.data.filter(e=>!e.scanningResult),scannedOrders:({orders:e})=>e.data.filter(e=>void 0!==e.scanningResult),rightOrders:({orders:e})=>e.data.filter(e=>!0===e.scanningResult),falseOrders:({orders:e})=>e.data.filter(e=>!1===e.scanningResult),allOrdersScanned:({orders:e})=>!!e.data.length&&e.data.every(e=>void 0!==e.scanningResult),orderListIsEmpty:({orders:e})=>0===e.data.length},P={SET_ORDERS(e,t){Object.assign(e.orders,t)},SET_SCANNING(e,t){Object.assign(e.scanning,t)},SET_SCANNING_RESULT_TO_ORDER(e,{orderId:t,result:r}){const n=e.orders.data.findIndex(e=>e.orderId===t);e.orders.data[n].scanningResult=r},SET_STATE(e,t){Object.assign(e,t)}},_={async getOrders({commit:e}){e("SET_ORDERS",{loading:!0,error:null,loaded:!1});try{const t=await v.getOrders();e("SET_ORDERS",{data:t,loaded:!0})}catch(t){e("SET_ORDERS",{error:t.message})}finally{e("SET_ORDERS",{loading:!1})}},clearState({commit:e}){e("SET_STATE",T())},scan({commit:e,state:t,rootState:r}){const n=r.deliveryPoint.deliveryPoint.data,o=t.scanning.order;if(!n||!o)return;const a=o.deliveryInfo.deliveryPoint.id===n.id;e("SET_SCANNING",{result:a}),e("SET_SCANNING_RESULT_TO_ORDER",{orderId:o.orderId,result:a})}},j={state:I,getters:N,mutations:P,actions:_,namespaced:!0};var R=j;const D={deliveryPoint:S,order:R};var w=Object(f["a"])({modules:D});Object(n["e"])(s).use(w).use(u).mount("#app")}});
//# sourceMappingURL=app.5154d5d3.js.map