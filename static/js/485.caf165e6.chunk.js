"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{261:function(n,t,e){e.d(t,{DC:function(){return i},IV:function(){return u},LI:function(){return o},Mc:function(){return c},wH:function(){return a}});var r="1f500d9f06eb9497ae6be27946cb1f23",i=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(n){return n.json()}))},o=function(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.json()}))},c=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))}},146:function(n,t,e){e.d(t,{e:function(){return f}});var r,i=e(731),o=e(739),c=e(168),u=e(842).Z.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),a=e(184),f=function(n){var t=n.moviesData,e=(0,o.TH)();return(0,a.jsx)(u,{children:t.map((function(n){return(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},485:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,i,o=e(861),c=e(885),u=e(687),a=e.n(u),f=e(146),s=e(791),h=e(168),l=e(842),p=l.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),d=l.Z.h1(i||(i=(0,h.Z)(["\n  font-weight: 900;\n  font-size: 36px;\n"]))),v=e(261),g=e(184),m=function(){var n=(0,s.useState)(null),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=(0,s.useState)(!1),u=(0,c.Z)(i,2),h=u[0],l=u[1];return(0,s.useEffect)((function(){function n(){return(n=(0,o.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,(0,v.DC)();case 4:t=n.sent,e=t.results,r(e),n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",alert("Sorry, please try again"));case 13:return n.prev=13,l(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,g.jsxs)(p,{children:[(0,g.jsx)(d,{children:"Trending today"}),h&&(0,g.jsx)("div",{children:"...Loading"}),e&&(0,g.jsx)(f.e,{moviesData:e})]})}},861:function(n,t,e){function r(n,t,e,r,i,o,c){try{var u=n[o](c),a=u.value}catch(f){return void e(f)}u.done?t(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var c=n.apply(t,e);function u(n){r(c,i,o,u,a,"next",n)}function a(n){r(c,i,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=485.caf165e6.chunk.js.map