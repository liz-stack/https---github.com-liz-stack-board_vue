"use strict";(self["webpackChunkboard_study"]=self["webpackChunkboard_study"]||[]).push([[925],{7925:function(t,a,e){e.r(a),e.d(a,{default:function(){return l}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",{staticClass:"board-contents"},[e("div",{staticClass:"rows"},[e("div",{staticClass:"row col-md-1"},[t._v(t._s(t.userName))]),e("div",{staticClass:"row col-md-4"},[t._v("등록일시 "+t._s(t.createDate))]),e("div",{staticClass:"row"},[t._v("수정일시"+t._s(t.modifyDate))])]),e("div",{staticClass:"board-main"},[e("div",{staticClass:"board-header"},[e("h3",[t._v(" "+t._s(t.category)+" "),e("span",[t._v(" "+t._s(t.title))]),e("span",[t._v(" 조회수: "+t._s(t.viewCount))])])]),e("div",{staticClass:"board-content"},[e("div",[t._v(" "+t._s(t.content)+" ")])])]),e("div",{staticClass:"buttons"},[e("button",[t._v("목록")]),e("button",[t._v("수정")]),e("button",{on:{click:function(a){return t.movePage("/write")}}},[t._v("등록")])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("h2",[t._v("게시판 - 보기")])])])}],i=e(8828),n={name:"Detail",data(){return{body:this.$route.query,boardId:"",userName:"",createDate:"",modifyDate:"",category:"",title:"",content:""}},mounted(){this.getBoardDetailAPI()},methods:{getBoardDetailAPI(){i.Z.getBoardDetail.then((t=>{this.boardDetail=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))}}},r=n,d=e(1001),c=(0,d.Z)(r,s,o,!1,null,"147a204a",null),l=c.exports}}]);
//# sourceMappingURL=925.4afee925.js.map