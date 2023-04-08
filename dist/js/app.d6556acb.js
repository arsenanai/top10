(function(){"use strict";var t={4909:function(t,e,n){var o=n(9242),l=n(3396),i=n(7139);const r={class:"w-full h-full"},s=(0,l.uE)('<section class="top text-stone-50 flex flex-col items-center justify-center"><div class="w-full flex align-middle justify-start px-4 py-2"><span class="text-stone-50 font-semibold text-2xl">Brand</span></div><h3 class="font-extrabold text-3xl lg:text-8xl leading-normal pt-14 mb-10"> Global Top 10 </h3><p class="font-light text-md lg:text-lg leading-normal"> Example Top 10 slider carousel page. </p></section>',1),a={class:"slider pt-52 pb-96"},c={class:"mx-auto text-stone-50 flex flex-col items-center justify-center"},u={class:"w-full"},d=["onClick"],f={class:"justify-center w-full mt-4 font-extrabold leading-none font-sans text-stone-600 slider-index hidden md:flex"},p={class:"leading-tight font-600 text-xs md:text-sm lg:text-base xl:text-xl"},h=["href"],x={class:"absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 drop-shadow-md min-w-min",style:{"background-image":"linear-gradient(transparent 0px, rgba(0, 0, 0, 0.5) 100%)"}},g={class:"mx-auto text-xs tracking-wider text-center uppercase font-600 hidden lg:block"};function v(t,e,n,o,v,b){return(0,l.wg)(),(0,l.iD)("div",r,[s,(0,l._)("section",a,[(0,l._)("div",c,[(0,l._)("div",u,[null!==v.list?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"relative max-w-full mx-auto py-1 md:py-3 lg:px-8 flex flex-row align-middle items-stretch slider-container",onMouseover:e[0]||(e[0]=t=>v.loop=!1),onMouseout:e[1]||(e[1]=t=>v.loop=!0),onTouchstart:e[2]||(e[2]=t=>v.loop=!1),onTouchend:e[3]||(e[3]=t=>v.loop=!0)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.list,((t,e)=>((0,l.wg)(),(0,l.iD)("button",{class:(0,i.C_)(["flex flex-col-reverse md:flex-row grow items-stretch justify-between text-center text-stone-50 one-slide transition-all ease-out duration-300",{active:!0===t.active,"lg:w-6 lg:hover:w-32":!0!==t.active}]),style:(0,i.j5)(`z-index: ${v.list.length-e};box-shadow: 5px 5px 40px black;`),onClick:t=>b.activate(e),key:e},[(0,l._)("div",{class:(0,i.C_)(["relative md:w-32 lg:w-64 bg-black pb-1 md:pb-3 lg:pb-6",{block:!0===t.active,hidden:!0!==t.active}])},[(0,l._)("div",f,(0,i.zw)(e+1),1),(0,l._)("div",{class:(0,i.C_)(["absolute bottom-0 z-40 w-full h-full md:h-auto px-3 lg:px-6 md:bottom-3 lg:bottom-6",{block:!0===t.active,hidden:!0!==t.active}])},[(0,l._)("span",p,[(0,l.Uk)(" Watched for "),(0,l._)("b",null,(0,i.zw)(t.views),1),(0,l.Uk)(" million hours this week. ")]),(0,l._)("p",null,[(0,l._)("a",{class:"text-red-600 text-xs sm:text-sm md:text-base lg:text-xl underline",href:t.url,target:"_blank"}," Watch now ",8,h)])],2)],2),(0,l._)("div",{class:(0,i.C_)(["group relative grow bg-cover bg-no-repeat bg-center movie-thumb overflow-hidden",{active:!0===t.active}]),style:(0,i.j5)(b.getBackground(t))},[(0,l._)("div",{class:(0,i.C_)(["h-full md:pb-3 lg:pb-6",{"backdrop-brightness-50 group-hover:backdrop-brightness-75":!0!==t.active}]),style:{width:"calc(100% + 1px)"}},[(0,l._)("div",{class:(0,i.C_)(["absolute top-1.5 right-1 text-right w-full opacity-90 lg:opacity-60 text-white lg:font-bold text-xs lg:text-base drop-shadow-md shadow-stone-950 leading-none",{hidden:!0===t.active}])},(0,i.zw)(e+1),3),(0,l._)("div",x,[(0,l._)("div",g,(0,i.zw)(t.title),1)])],2)],6)],14,d)))),128))],32)):(0,l.kq)("",!0)])])])])}var b=n(4161),m={name:"App",components:{},data(){return{load:!0,active:0,list:null,time:null,loop:!0}},created(){(0,b.Z)({method:"GET",url:"/example.json"}).then((t=>{this.list=t.data.videos,this.activate(0),this.rotate()})).catch((t=>{console.log("error",t)})).then((()=>{this.load=!1}))},methods:{activate(t){for(let e=0;e<this.list.length;e+=1)this.list[e].active=e===t;this.active=t},nextSlide(){!0===this.loop&&this.activate((this.active+1)%this.list.length)},async rotate(){while(1)await this.sleep(8e3),this.nextSlide()},sleep(t){return new Promise((e=>setTimeout(e,t)))},getBackground(t){return window.innerWidth>500?`background-image: url('${t.thumbs["1920x1080"]}');`:`background-image: url('${t.portrait_thumbs["720x1080"]}');`}}},w=n(89);const k=(0,w.Z)(m,[["render",v]]);var y=k;(0,o.ri)(y).mount("#app")}},e={};function n(o){var l=e[o];if(void 0!==l)return l.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,l,i){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],l=t[u][1],i=t[u][2];for(var s=!0,a=0;a<o.length;a++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(s=!1,i<r&&(r=i));if(s){t.splice(u--,1);var c=l();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,l,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var l,i,r=o[0],s=o[1],a=o[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(a)var u=a(n)}for(e&&e(o);c<r.length;c++)i=r[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunktop10"]=self["webpackChunktop10"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4909)}));o=n.O(o)})();
//# sourceMappingURL=app.d6556acb.js.map