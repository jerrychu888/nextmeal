(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c171d15"],{"179f":function(t,e,a){"use strict";var n=a("3b06"),r=a.n(n);r.a},"1af6":function(t,e,a){var n=a("63b6");n(n.S,"Array",{isArray:a("9003")})},"20fd":function(t,e,a){"use strict";var n=a("d9f6"),r=a("aebd");t.exports=function(t,e,a){e in t?n.f(t,e,r(0,a)):t[e]=a}},"3b06":function(t,e,a){},"46f8":function(t,e,a){},"52ae":function(t,e,a){"use strict";var n=a("a253"),r=a.n(n);r.a},"549b":function(t,e,a){"use strict";var n=a("d864"),r=a("63b6"),i=a("241e"),s=a("b0dc"),o=a("3702"),c=a("b447"),u=a("20fd"),d=a("7cd6");r(r.S+r.F*!a("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,r,p,l=i(t),m="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,f=void 0!==h,y=0,_=d(l);if(f&&(h=n(h,g>2?arguments[2]:void 0,2)),void 0==_||m==Array&&o(_))for(e=c(l.length),a=new m(e);e>y;y++)u(a,y,f?h(l[y],y):l[y]);else for(p=_.call(l),a=new m;!(r=p.next()).done;y++)u(a,y,f?s(p,h,[r.value,y],!0):r.value);return a.length=y,a}})},"54a1":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("95d5")},"75fc":function(t,e,a){"use strict";var n=a("a745"),r=a.n(n);function i(t){if(r()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var s=a("774e"),o=a.n(s),c=a("c8bb"),u=a.n(c);function d(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){return i(t)||d(t)||p()}a.d(e,"a",(function(){return l}))},"774e":function(t,e,a){t.exports=a("d2d5")},"85e3":function(t,e,a){"use strict";var n=a("46f8"),r=a.n(n);r.a},"89ad":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("header",[a("Navbar"),a("DropdownBanner",{attrs:{districts:t.districts,"current-district":t.currentDistrict}})],1),a("section",{staticClass:"popular"},[a("div",{staticClass:"container pt-3 pb-5"},[a("Header",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n          熱門餐廳\n        ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n          嘗試最受歡迎的餐廳\n        ")]},proxy:!0}])}),a("RestaurantCarousel",{attrs:{"popular-restaurants":t.popular_restaurants}})],1)]),a("section",{staticClass:"restaurants"},[a("div",{staticClass:"container pt-3 pb-5"},[a("Header",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n          更多選擇\n        ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n          探索更多在地餐廳\n        ")]},proxy:!0}])}),a("div",{staticClass:"card-wrapper row"},t._l(t.more_restaurants.rows,(function(t){return a("div",{key:t.id,staticClass:"col-12 col-md-6 col-lg-4 p-2"},[a("RestaurantCard",{attrs:{restaurant:t}})],1)})),0),a("div",{staticClass:"btn-container"},[t.currentPage!==t.totalPage?a("button",{staticClass:"btn mt-3",attrs:{href:"#"},on:{click:function(e){return t.fetchRestaurants(t.currentDistrict,t.currentPage+1)}}},[t._v("\n          瀏覽更多\n        ")]):t._e()])],1)]),a("section",{staticClass:"map bg-white"},[a("div",{staticClass:"container pt-3 pb-5"},[a("Header",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n          "+t._s(t.currentDistrict)+"餐廳\n        ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n          探索最近的美食地圖\n        ")]},proxy:!0}])}),t.isLoading?t._e():a("GMap",{staticClass:"shadow-sm rounded-sm",attrs:{center:{lat:parseFloat(t.map.center.lat),lng:parseFloat(t.map.center.lng)},locations:t.map.restaurants,"street-view-control":!1,"map-type-control":!1,"fullscreen-control":!0,"zoom-control":!0}})],1)]),a("Footer")],1)},r=[],i=a("75fc"),s=a("d178"),o=a("fd2d"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"“banner"},[a("div",{staticClass:"banner-container"},[a("div",{staticClass:"banner-img",style:{backgroundImage:t.getDistrictImageUrl(t.currentDistrict)}}),a("div",{staticClass:"banner-overlay"}),a("div",{staticClass:"banner-content"},[a("h1",{staticClass:"banner-content-title"},[t._v("\n        "+t._s(t.currentDistrict)+"\n      ")]),a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn dropdown-toggle p-0",attrs:{id:"dropdownMenuButton",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n          切換地區\n        ")]),a("div",{staticClass:"dropdown-menu rounded-sm",attrs:{"aria-labelledby":"dropdownMenuButton"}},t._l(t.districts,(function(e){return a("router-link",{key:e.eng_name,staticClass:"dropdown-item text-center",class:{disabled:e.chinese_name===t.currentDistrict},attrs:{to:{name:"restaurants",query:{dist:e.chinese_name}}}},[t._v("\n            "+t._s(e.chinese_name)+"\n          ")])})),1)])])])])},u=[],d={props:{districts:{type:Array,required:!0},currentDistrict:{type:String,required:!0}},methods:{getDistrictImageUrl:function(t){return"url(".concat(this.districts.filter((function(e){return e.chinese_name===t})),")")}}},p=d,l=(a("179f"),a("2877")),m=Object(l["a"])(p,c,u,!1,null,"360654b7",null),g=m.exports,h=a("e5a4"),f=a("e418"),y=a("8787"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-heading"},[a("h1",{staticClass:"header-heading-title"},[t._t("title")],2),a("p",{staticClass:"header-heading-description"},[t._t("description")],2)])},b=[],v=(a("85e3"),{}),x=Object(l["a"])(v,_,b,!1,null,"b921a5e0",null),w=x.exports,C={popular_restaurants:[{id:1,image:"https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",name:"餐廳一號",rating:3.4,category:"美式料理"},{id:2,image:"https://cdn.pixabay.com/photo/2017/03/30/15/47/churros-2188871_1280.jpg",name:"餐廳二號",rating:4.9,category:"韓式料理"},{id:3,image:"https://cdn.pixabay.com/photo/2016/10/03/23/15/ice-1713160_1280.jpg",name:"餐廳三號",rating:4.4,category:"美式料理"},{id:4,image:"https://via.placeholder.com/400x400/d3d3d3?text=Temp+Image",name:"餐廳四號",rating:2.3,category:"中東料理"},{id:5,image:"https://via.placeholder.com/400x400/d3d3d3?text=Temp+Image",name:"餐廳五號",rating:5.4,category:"中東料理"},{id:6,image:"https://via.placeholder.com/400x400/d3d3d3?text=Temp+Image",name:"餐廳六號",rating:3.4,category:"中東料理"}],more_restaurants:{count:16,pages:3,rows:[{id:7,image:"https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",name:"餐廳一號",rating:3.4,category:"美式料理"},{id:8,image:"https://cdn.pixabay.com/photo/2017/03/30/15/47/churros-2188871_1280.jpg",name:"餐廳二號",rating:4.9,category:"韓式料理"},{id:9,image:"https://cdn.pixabay.com/photo/2016/10/03/23/15/ice-1713160_1280.jpg",name:"餐廳三號",rating:4.4,category:"美式料理"},{id:10,image:"https://via.placeholder.com/400x400/d3d3d3?text=Temp+Image",name:"餐廳四號",rating:2.3,category:"中東料理"},{id:11,image:"https://via.placeholder.com/400x400/d3d3d3?text=Temp+Image",name:"餐廳五號",rating:5.4,category:"中東料理"},{id:12,image:"https://via.placeholder.com/400x400/d3d3d3?text=Temp+Image",name:"餐廳六號",rating:3.4,category:"中東料理"}]},map:{center:{chinese_name:"信義區",eng_name:"Xinyi",lng:"121.5716697",lat:"25.03062083"},restaurants:[{id:1,name:"餐廳一",lat:25.034,lng:121.5645},{id:2,name:"餐廳二",lat:25.036643,lng:121.567678},{id:3,name:"餐廳三",lat:25.033643,lng:121.566678},{id:4,name:"餐廳四",lat:25.031569,lng:121.568579}]},districts:[{chinese_name:"大安區",eng_name:"Da'an",image:"https://cdn.pixabay.com/photo/2013/11/13/21/14/san-francisco-210230_1280.jpg",lng:"121.5434446",lat:"25.02677012"},{chinese_name:"信義區",eng_name:"Xinyi",image:"https://cdn.pixabay.com/photo/2019/09/23/14/34/nyc-4498752_1280.jpg",lng:"121.5716697",lat:"25.03062083"},{chinese_name:"中山區",eng_name:"Zhongshan",image:"https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg",lng:"121.7308913",lat:"25.14986365"},{chinese_name:"松山區",eng_name:"Songshan",image:"https://cdn.pixabay.com/photo/2016/10/31/04/19/lan-yang-museum-1784871_1280.jpg",lng:"121.5575876",lat:"25.05999101"}]},j={components:{Navbar:s["a"],Footer:o["a"],DropdownBanner:g,RestaurantCarousel:h["a"],RestaurantCard:f["a"],GMap:y["a"],Header:w},data:function(){return{popular_restaurants:[],more_restaurants:{rows:[]},map:{},districts:[],currentDistrict:"",currentPage:0,totalPage:null,isLoading:!0}},created:function(){var t=this.$route.query.dist;this.currentDistrict=t||"信義區",this.fetchRestaurants(t,this.currentPage+1)},beforeRouteUpdate:function(t,e,a){this.currentPage=0,this.more_restaurants.rows=[];var n=t.query.dist;this.currentDistrict=n||"信義區",this.fetchRestaurants(n,this.currentPage+1),a()},methods:{fetchRestaurants:function(t,e){this.isLoading=!0,this.popular_restaurants=C.popular_restaurants||this.popular_restaurants,this.more_restaurants.rows=[].concat(Object(i["a"])(this.more_restaurants.rows),Object(i["a"])(C.more_restaurants.rows)),this.totalPage=this.more_restaurants.pages,this.map=C.map||this.map,this.districts=C.districts||this.districts,this.currentPage+=1,this.isLoading=!1}}},A=j,D=(a("52ae"),Object(l["a"])(A,n,r,!1,null,"466d4f70",null));e["default"]=D.exports},9003:function(t,e,a){var n=a("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"95d5":function(t,e,a){var n=a("40c3"),r=a("5168")("iterator"),i=a("481b");t.exports=a("584a").isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||i.hasOwnProperty(n(e))}},a253:function(t,e,a){},a745:function(t,e,a){t.exports=a("f410")},c8bb:function(t,e,a){t.exports=a("54a1")},d2d5:function(t,e,a){a("1654"),a("549b"),t.exports=a("584a").Array.from},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-3c171d15.e2c76bc3.js.map