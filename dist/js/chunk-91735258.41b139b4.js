(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91735258"],{"04a9":function(t,a,e){},"3ad6":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"px-0 mx-0 mt-0 pt-0",attrs:{fluid:""}},[e("v-img",{staticClass:"grey lighten-2",attrs:{height:"600",width:"100%",src:"/articles/"+t.article.hero,gradient:"rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"}},[e("v-layout",{attrs:{"fill-height":"","align-center":"","pa-3":""}},[e("v-flex",{attrs:{xs12:"",md8:"","offset-md4":""}},[e("h1",{staticClass:"display-3 font-weight-light white-text"},[t._v(" "+t._s(t.article.title)+" ")]),e("div",{staticClass:"subheading text-uppercase pl-2 mb-4 white-text"},[t._v(" "+t._s(t.article.blurb)+" ")]),e("div",{staticClass:"caption white-text"},[t._v(" "+t._s(t.article.author)+" "),e("br"),t.article.formatted_start_date?e("div",[t._v(" "+t._s(t.article.formatted_start_date)+" - "+t._s(t.article.formatted_end_date)+" ")]):t._e()])])],1)],1),e("v-row",{staticClass:"mt-0 pt-0"},[e("v-container",{staticClass:"article-text mt-0 pt-0"},[e("div",{staticClass:"mt-10 mx-5",domProps:{innerHTML:t._s(t.article.text)}})])],1)],1)},r=[],s=(e("7db0"),e("d3b7"),e("7c5c")),c=e("bc3a"),n=e.n(c),l=e("c1df"),d=e.n(l),o={name:"Article",data:function(){return{article:{title:void 0,text:void 0}}},mounted:function(){var t=this,a=n.a.get("/data/articles_markdown/".concat(this.$route.params.id,".md"));a.then((function(a){t.article.text=Object(s["marked"])(a.data)}));var e=n.a.get("/data/articles.json");e.then((function(a){var e=a.data.find((function(a){return a.href===t.$route.params.id}));for(var i in e)t.article[i]=e[i];if(document.title="".concat(t.article.title," | Camping With The Keller's"),t.article.start_date){var r=d()(t.article.start_date);t.article.formatted_start_date=r.format("MMMM Do, YYYY")}if(t.article.end_date){var s=d()(t.article.end_date);t.article.formatted_end_date=s.format("MMMM Do, YYYY")}}))}},f=o,u=(e("4935"),e("2877")),m=e("6544"),_=e.n(m),h=e("a523"),v=e("0e8f"),p=e("adda"),g=e("a722"),x=e("0fd9"),b=Object(u["a"])(f,i,r,!1,null,null,null);a["default"]=b.exports;_()(b,{VContainer:h["a"],VFlex:v["a"],VImg:p["a"],VLayout:g["a"],VRow:x["a"]})},4935:function(t,a,e){"use strict";e("04a9")}}]);
//# sourceMappingURL=chunk-91735258.41b139b4.js.map