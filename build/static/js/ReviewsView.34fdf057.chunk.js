(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{40:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var c=n(5),r=n(0),s=n(31),i=n(2);function u(t){var e=t.filmId,n=Object(r.useState)(null),u=Object(c.a)(n,2),o=u[0],h=u[1];return Object(r.useEffect)((function(){s.e(e).then(h)}),[e]),o&&0!==o.total_results?Object(i.jsx)("ul",{children:o.results.map((function(t){var e=t.author,n=t.id,c=t.content;return Object(i.jsxs)("li",{children:[Object(i.jsxs)("h3",{children:["Author: ",e]}),Object(i.jsx)("p",{children:c})]},n)}))}):Object(i.jsx)("p",{children:"We don't have any reviews for this monie."})}}}]);
//# sourceMappingURL=ReviewsView.34fdf057.chunk.js.map