(this.webpackJsonpnetflixclone=this.webpackJsonpnetflixclone||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},47:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),o=n(17),r=n.n(o),s=(n(28),n(29),n(5)),l=n.n(s),u=n(6),d=n(4),h=n(18),f=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(47),n(19)),b=n(22),j=n.n(b);var p=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,o=Object(i.useState)([]),r=Object(d.a)(o,2),s=r[0],h=r[1],b=Object(i.useState)(""),p=Object(d.a)(b,2),g=p[0],m=p[1];return Object(i.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row__posters",children:s.map((function(e){return Object(c.jsx)("img",{onClick:function(){return function(e){g?m(""):j()((null===e||void 0===e?void 0:e.title)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),g&&Object(c.jsx)(v.a,{videoId:g,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},g="1fd53e386944e3f69145a25aab0e1e89",m={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(63);var O=function(){var e,t,n=Object(i.useState)([]),a=Object(d.a)(n,2),o=a[0],r=a[1];return Object(i.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(m.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(c.jsxs)("div",{className:"banner__contents",children:[Object(c.jsx)("h1",{className:"banner__title",children:(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)}),Object(c.jsxs)("div",{className:"banner__buttons",children:[Object(c.jsx)("button",{className:"banner__button",children:"Play"}),Object(c.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(c.jsx)("h1",{className:"banner__description",children:(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(c.jsx)("div",{className:"banner--fadeBottom"})]})};n(64);var _=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll",(function(){}))}}),[]),Object(c.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(c.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png",alt:"Logo"}),Object(c.jsx)("img",{className:"nav__avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Logo"})]})};var x=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(_,{}),Object(c.jsx)(O,{}),Object(c.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:m.fetchNetflixOriginals,isLargeRow:!0}),Object(c.jsx)(p,{title:"Trending Now",fetchUrl:m.fetchTrending}),Object(c.jsx)(p,{title:"Top Rated",fetchUrl:m.fetchNetflixOriginals}),Object(c.jsx)(p,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(c.jsx)(p,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(c.jsx)(p,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(c.jsx)(p,{title:"Romance Movies",fetchUrl:m.fetchRomanceMovies}),Object(c.jsx)(p,{title:"Documentaries",fetchUrl:m.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.32f84f72.chunk.js.map