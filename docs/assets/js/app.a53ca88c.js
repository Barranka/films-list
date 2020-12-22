(function(t){function e(e){for(var s,a,l=e[0],o=e[1],c=e[2],m=0,f=[];m<l.length;m++)a=l[m],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,l=1;l<i.length;l++){var o=i[l];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={app:0},r=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1cf1":function(t,e,i){"use strict";var s=i("ab8e"),n=i.n(s);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("header",[i("NavBar")],1),i("body",[i("router-view")],1)])},r=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-navbar"},[i("div",{staticClass:"navbar"},[i("div",{staticClass:"navbar__title"},[t._v("#movienow")])])])}],o=i("2877"),c={},u=Object(o["a"])(c,a,l,!1,null,null,null),m=u.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-content"},[i("SortingMenu",{attrs:{listFilms:t.listFilms}}),t.listFilms?i("div",{staticClass:"list-container"},[i("FilmsList",{attrs:{listFilms:t.listFilms}})],1):i("div",{staticClass:"preloading-container"},[i("Preloading")],1)],1)},v=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("div",{staticClass:"sorting-menu"},[i("h1",{staticClass:"title"},[t._v("Фильмы")]),i("div",{staticClass:"vars-sort"},[i("input",{staticClass:"vars-sort__input",attrs:{id:"title",name:"sort",type:"radio"}}),i("label",{staticClass:"vars-sort__label",attrs:{for:"title"},on:{click:function(e){return t.sortFilms("title")}}},[t._v("Отсортировать по названию")]),i("input",{staticClass:"vars-sort__input",attrs:{id:"year",name:"sort",type:"radio"}}),i("label",{staticClass:"vars-sort__label",attrs:{for:"year"},on:{click:function(e){return t.sortFilms("year")}}},[t._v("Отсортировать по году")])])])])},p=[],_=(i("4e82"),{props:{listFilms:Array,default:function(){}},data:function(){return{currentSort:"title"}},methods:{sortFilms:function(t){this.currentSort=t,this.sortedFilms()},sortedFilms:function(){var t=this;this.listFilms.sort((function(e,i){return e[t.currentSort]<i[t.currentSort]?-1:1})),this.$store.dispatch("setSortedFilms",this.listFilms)}}}),h=_,F=Object(o["a"])(h,d,p,!1,null,null,null),b=F.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[t.listFilms?i("div",{staticClass:"films-list"},t._l(t.listFilms,(function(t){return i("FilmCard",{key:t.id,attrs:{film:t,theme:"hover"}})})),1):t._e()])},C=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"film-container",class:{hover:"hover"==t.theme}},[i("div",{staticClass:"poster-wrap"},[i("img",{staticClass:"poster",attrs:{src:t.film.poster,alt:"Постер"}})]),i("div",{staticClass:"film-info"},[i("div",{staticClass:"film-header"},[t.film.url&&"hover"==t.theme?i("router-link",{attrs:{to:"film/"+t.film.url}},[i("div",{staticClass:"film-header__title",on:{click:function(e){return t.setActiveFilm(t.film)}}},[t._v(t._s(t.film.title))])]):i("div",{staticClass:"film-header__title"},[t._v(" "+t._s(t.film.title)+" ")]),t.film.collapse.duration?i("div",{staticClass:"film-header__times"},[i("div",{staticClass:"times"},[t._v(t._s(t.film.collapse.duration.join(", ")))]),i("div",{staticClass:"icon"})]):t._e()],1),t.film.year&&t.film.genres?i("div",{staticClass:"film-info__year"},[t._v(t._s(t.film.year)+", "+t._s(t.film.genres.join(", ")))]):t._e(),t.film.composers?i("div",{staticClass:"film-info__composers"},[t._v(" РЕЖИССЁР: "+t._s(t.film.composers.join(", ")))]):t._e(),t.film.actors?i("div",{staticClass:"film-info__actors"},[i("div",{staticClass:"film-info__actor-title"},[t._v("АКТЁРЫ:")]),i("div",{staticClass:"film-info__actor-descr"},[t._v(t._s(t.film.actors.join(", ")))])]):t._e(),t.film.description?i("div",{staticClass:"film-info__descr"},[t._v(" "+t._s(t.film.description))]):t._e()])])},k=[],j=i("bc3a"),w=i.n(j),x={props:{film:{type:Object,default:function(){}},theme:{type:String,required:!0}},data:function(){return{id:+this.$route.params.id}},computed:{listFilms:function(){return this.$store.getters.getListFilms}},methods:{setActiveFilm:function(t){this.$store.dispatch("setActiveFilm",t)}}},O=x,$=Object(o["a"])(O,y,k,!1,null,null,null),S=$.exports,E={components:{FilmCard:S},props:{listFilms:Array,default:function(){}}},A=E,P=Object(o["a"])(A,g,C,!1,null,null,null),L=P.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"preloading-wrap"},[s("img",{attrs:{src:i("9868"),alt:"Прелоадинг"}})])])}],B=(i("a339"),{}),D=Object(o["a"])(B,M,T,!1,null,null,null),J=D.exports,N={components:{SortingMenu:b,FilmsList:L,Preloading:J},computed:{listFilms:function(){return this.$store.getters.getListFilms}},created:function(){this.$store.dispatch("setFilms")}},R=N,q=Object(o["a"])(R,f,v,!1,null,null,null),z=q.exports,G={components:{NavBar:m,PageListFilms:z}},H=G,I=Object(o["a"])(H,n,r,!1,null,null,null),K=I.exports,Q=i("8c4f"),U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-content"},[s("section",[s("div",{staticClass:"film-back-link"},[s("router-link",{staticClass:"film-back-link__link",attrs:{to:"/"}},[s("div",{staticClass:"film-back-link__wrap"},[s("img",{attrs:{src:i("de32"),alt:"Назад"}}),s("div",{staticClass:"film-back-link__text"},[t._v("Назад к списку")])])])],1),t.film?s("div",{staticClass:"active-film-container"},[s("FilmCard",{attrs:{film:t.film,theme:"no-hover"}})],1):s("div",{staticClass:"not-found-container"},[s("div",{staticClass:"not-found-container__text"},[t._v(" К сожалению, по вашему запросу ничего не найдено... ")])])])])},V=[],W=(i("96cf"),i("1da1")),X={components:{FilmCard:S},watch:{$route:function(t,e){this.getData()}},methods:{getData:function(){var t=this;return Object(W["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("https://floating-sierra-20135.herokuapp.com/api/movie/".concat(t.film.id));case 3:i=e.sent,t.film=i,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},computed:{film:function(){return this.$store.getters.getActiveFilm}}},Y=X,Z=Object(o["a"])(Y,U,V,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-content"},[i("section",[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[t._v("Страница не найдена!")]),i("p",[t._v("Вернуться на "),i("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("главную?")])],1)])])])},it=[],st=(i("1cf1"),{}),nt=Object(o["a"])(st,et,it,!1,null,"7bc113b6",null),rt=nt.exports;s["a"].use(Q["a"]);var at=new Q["a"]({routes:[{path:"/",name:"list-films",component:z},{path:"/film/:url",name:"film",component:tt},{path:"/film",redirect:"/"},{path:"*",name:"notFound",component:rt}]}),lt=i("2f62");s["a"].use(lt["a"]);var ot=new lt["a"].Store({state:{listFilms:null,activeFilm:null},mutations:{setFilms:function(t,e){t.listFilms=e},setActiveFilm:function(t,e){t.activeFilm=e}},actions:{setFilms:function(t,e){var i=t.commit;w.a.get("https://floating-sierra-20135.herokuapp.com/api/movies").then((function(t){var e=t.data.data;i("setFilms",e)}))},setSortedFilms:function(t,e){var i=t.commit;i("setFilms",e)},setActiveFilm:function(t,e){var i=t.commit;console.log(e),i("setActiveFilm",e)}},getters:{getListFilms:function(t){return t.listFilms},getActiveFilm:function(t){return t.activeFilm}}});i("c1c3");s["a"].config.productionTip=!1,new s["a"]({router:at,store:ot,render:function(t){return t(K)}}).$mount("#app")},9868:function(t,e,i){t.exports=i.p+"assets/img/preload.3ce69258.svg"},"9a15":function(t,e,i){},a339:function(t,e,i){"use strict";var s=i("9a15"),n=i.n(s);n.a},ab8e:function(t,e,i){},c1c3:function(t,e,i){},de32:function(t,e,i){t.exports=i.p+"assets/img/arrow-back.318af019.svg"}});