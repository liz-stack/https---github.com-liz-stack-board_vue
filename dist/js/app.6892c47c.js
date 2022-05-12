(function(){"use strict";var t={1613:function(t,e,n){var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("AppHeader")],1),n("v-main",[n("router-view")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headerWrap"},[n("div",{style:{fontSize:"x-large"},attrs:{align:"center"}},[t._v("home")]),n("br"),n("v-spacer")],1)},u=[],c={},s=c,l=n(1001),d=n(3453),f=n.n(d),v=n(9762),p=(0,l.Z)(s,i,u,!1,null,null,null),b=p.exports;f()(p,{VSpacer:v.Z});var h={name:"App",components:{AppHeader:b},data:()=>({})},m=h,g=n(7524),_=n(7199),y=n(7877),Z=(0,l.Z)(m,o,a,!1,null,null,null),w=Z.exports;f()(Z,{VApp:g.Z,VAppBar:_.Z,VMain:y.Z});var k=n(8345),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"max-auto justify-center"},[n("v-layout",[n("br"),n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12",md:"2"}},[n("v-select",{attrs:{label:"검색조건"}},[t._v("검색 ")])],1)],1)],1),n("div",[n("div",[t._v("총 건")]),n("table",{staticClass:"table"},[n("tr",[n("th",[t._v("카테고리")]),n("th",[t._v("제목")]),n("th",[t._v("작성자")]),n("th",[t._v("조회수")]),n("th",[t._v("등록일시")]),n("th",[t._v("수정일시")])]),t._l(t.boards,(function(e){return n("tr",{key:e.boardId},[n("td",[t._v(t._s(e.category))]),n("td",[n("a",{on:{click:function(n){return t.clickDetail(e.boardId)}}},[t._v(t._s(e.title))])]),n("td",[t._v(t._s(e.userName))]),n("td",[t._v(t._s(e.viewCount))]),n("td",[t._v(t._s(e.createDate))]),n("td",[t._v(t._s(e.modifyDate))])])})),0==t.boards.length?n("tr",[n("td",[t._v("데이터가 없습니다.")])]):t._e()],2)]),n("div"),n("div",{staticClass:"buttons"},[n("button",[t._v("목록")]),n("button",{on:{click:function(e){return t.register("/write")}}},[t._v("등록")])])],1)},O=[],j=n(8828),A={name:"Boards",data(){return{boards:[]}},methods:{getBoardList(){j.Z.getBoardsAPI().then((t=>{this.boards=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))},clickDetail(t){this.$router.push(`${t}`)}},mounted(){this.getBoardList()}},x=A,E=n(2102),P=n(4228),V=n(4470),B=n(2877),S=n(426),T=(0,l.Z)(x,C,O,!1,null,"5f4f3729",null),$=T.exports;f()(T,{VCol:E.Z,VContainer:P.Z,VLayout:V.Z,VRow:B.Z,VSelect:S.Z}),r.Z.use(k.Z);const D=[{path:"/",name:"List",component:$},{path:"/boards/:boardId",name:"Detail",component:()=>n.e(925).then(n.bind(n,7925))}],I=new k.Z({mode:"history",base:"/",routes:D});var L=I,M=n(9132);r.Z.use(M.Z);var N=new M.Z({});r.Z.config.productionTip=!0,new r.Z({router:L,vuetify:N,render:t=>t(w)}).$mount("#app")},8828:function(t,e,n){var r=n(9669),o=n.n(r);const a="http://localhost:8000/api/boards";class i{getBoardsAPI(){return o().get(a)}getBoardDetailAPI(t){return o().get(a+`/${t}`)}}e["Z"]=new i}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".4afee925.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="board-study:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[o];var f=function(e,n){u.onerror=u.onload=null,clearTimeout(v);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkboard_study"]=self["webpackChunkboard_study"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1613)}));r=n.O(r)})();
//# sourceMappingURL=app.6892c47c.js.map