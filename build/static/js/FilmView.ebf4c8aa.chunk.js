(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{31:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return u}));var c="https://api.themoviedb.org/3",i="6979cd1cbea8e51a3659aff13232cb9d",a=function(e){return"https://image.tmdb.org/t/p/".concat(e)};function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch(e).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))}))}function s(){return r("".concat(c,"/trending/movie/day?api_key=").concat(i))}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r("".concat(c,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&page=").concat(t))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return r("".concat(c,"/movie/").concat(e,"?api_key=").concat(i))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return r("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(i))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&page=").concat(t))}},32:function(e,t,n){"use strict";t.a=n.p+"static/media/noImagePlaceholder.bdcf787f.svg"},33:function(e,t,n){e.exports={filmCard:"FilmView_filmCard__z_yzc",filmDetails:"FilmView_filmDetails__38Kyy",addInfo:"FilmView_addInfo__2tAP2",link:"FilmView_link__1Lb3d",activeLink:"FilmView_activeLink__2vYwO FilmView_link__1Lb3d",addInfoList:"FilmView_addInfoList__3BxGL",cast:"FilmView_cast__2tm4f",backButton:"FilmView_backButton__1x5PU"}},36:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var c,i=n(5),a=n(12),r=n(0),s=n(1),o=n(6),l=n(31),d=n(32),u=n(33),j=n.n(u),b=n(10),h=n(13),f=n.n(h),m=n(2),v=Object(b.css)(c||(c=Object(a.a)(["\n  display: block;\n  text-align: center;\n  border-color: black;\n"]))),O=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,39))})),_=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,40))}));function x(){var e=l.a,t=Object(s.g)().filmId,n=Object(r.useState)(null),c=Object(i.a)(n,2),a=c[0],u=c[1],b=Object(s.f)();return Object(r.useEffect)((function(){l.c(t).then(u)}),[t]),Object(m.jsx)(m.Fragment,{children:a&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{type:"button",className:j.a.backButton,onClick:function(){return b(-1)},children:"Go back"}),Object(m.jsxs)("article",{children:[Object(m.jsxs)("div",{className:j.a.filmCard,children:[Object(m.jsx)("img",{src:a.poster_path?"".concat(e("w300")+a.poster_path):d.a,alt:a.original_title,width:"300",height:"450"}),Object(m.jsxs)("div",{className:j.a.filmDetails,children:[Object(m.jsx)("h2",{children:a.original_title}),Object(m.jsxs)("p",{children:["User Score: ",10*a.vote_average,"%"]}),Object(m.jsx)("h3",{children:"Overview"}),Object(m.jsx)("p",{children:a.overview}),Object(m.jsx)("h4",{children:"Genres"}),Object(m.jsx)("p",{children:void 0!==a.genres[0]?a.genres[0].name:"Other"})]})]}),Object(m.jsxs)("div",{className:j.a.addInfo,children:[Object(m.jsx)("h3",{children:"Additional information"}),Object(m.jsxs)("ul",{className:j.a.addInfoList,children:[Object(m.jsx)("li",{children:Object(m.jsx)(o.c,{to:"/movies/".concat(t,"/cast"),className:function(e){return e.isActive?j.a.activeLink:j.a.link},children:"Cast"})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.c,{to:"/movies/".concat(t,"/reviews"),className:function(e){return e.isActive?j.a.activeLink:j.a.link},children:"Reviews"})})]})]}),Object(m.jsx)("div",{className:j.a.cast,children:Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(f.a,{css:v,size:15}),children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{path:"cast",element:Object(m.jsx)(O,{filmId:t})}),Object(m.jsx)(s.a,{path:"reviews",element:Object(m.jsx)(_,{filmId:t})})]})})})]})]})})}}}]);
//# sourceMappingURL=FilmView.ebf4c8aa.chunk.js.map