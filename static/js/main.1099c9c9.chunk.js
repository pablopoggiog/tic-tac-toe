(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t(0),r=t.n(i),l=t(14),s=t.n(l),a=(t(24),t(25),t(2)),o=t(3);function d(){var e=Object(a.a)(["2s "," 1"]);return d=function(){return e},e}function u(){var e=Object(a.a)(["\n  display: flex;\n  background: linear-gradient(to right, #4a00e0, #8e2de2);\n  animation: ",";\n  border-radius: 1em;\n  align-items: center;\n  justify-content: center;\n\n  & > p {\n    font-size: 40px;\n    margin: 0;\n    font-weight: 600;\n    color: white;\n  }\n"]);return u=function(){return e},e}function f(){var e=Object(a.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return f=function(){return e},e}function b(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em;\n  width: 90%;\n  height: 90vw;\n  justify-self: center;\n  padding-top: 1em;\n\n  @media (min-aspect-ratio: 3/4) {\n    width: 60vh;\n    height: 60vh;\n  }\n"]);return b=function(){return e},e}function j(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n"]);return j=function(){return e},e}var p=o.b.div(j()),h=o.b.div(b()),g=Object(o.c)(f()),O=o.b.div(u(),(function(e){return e.flip?Object(o.a)(d(),g):""})),m=function(e){var n=e.handleClick,t=e.squares;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p,{children:Object(c.jsx)(h,{children:Array(9).fill(null).map((function(e,i){return Object(c.jsx)(O,{onClick:function(){return n(i)},flip:t[i].flip,children:Object(c.jsx)("p",{children:t[i].selected})})}))})})})},v=t(10),x=t(5),w=t(30),y=t(31),k=t(32),S=t(33),T={0:{flip:!1,selected:null},1:{flip:!1,selected:null},2:{flip:!1,selected:null},3:{flip:!1,selected:null},4:{flip:!1,selected:null},5:{flip:!1,selected:null},6:{flip:!1,selected:null},7:{flip:!1,selected:null},8:{flip:!1,selected:null}};function C(){var e=Object(a.a)(["\n  padding: 1em;\n  margin: 2em auto;\n  background: #8e2de2;\n  border-radius: 1em;\n  border: none;\n  font-weight: 600;\n  width: 140px;\n  opacity: 0.9;\n  transition: 0.9s;\n  color: white;\n\n  &:hover {\n    opacity: 1;\n    background: #4a00e0;\n  }\n\n  &:focus {\n    outline: 0;\n    background: #4a00e0;\n    opacity: 1;\n  }\n"]);return C=function(){return e},e}function z(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  align-self: center;\n  width: 30%;\n\n  @media (min-aspect-ratio: 3/4) {\n    width: 200px;\n  }\n\n  & > button:focus {\n    outline: 0;\n  }\n"]);return z=function(){return e},e}function E(){var e=Object(a.a)(["\n          "," 2s ease 0s 2 alternate\n        "]);return E=function(){return e},e}function J(){var e=Object(a.a)(["\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  animation: ",";\n  z-index: ",";\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & > p {\n    font-size: 40px;\n    margin: 0;\n    font-weight: 600;\n    background: -webkit-linear-gradient(#eee, #333);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  & > span {\n    font-size: 28px;\n    margin: 0;\n    text-align: center;\n  }\n"]);return J=function(){return e},e}function N(){var e=Object(a.a)(["\n    from {\n        visibility: visible;\n        opacity: 0;\n        height: 100%;\n        width: 100%;\n    }\n\n    to {\n        visibility: visible;\n        opacity: 1;\n        height: 100%;\n        width: 100%;\n    }\n}"]);return N=function(){return e},e}function F(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  gap: 8vh;\n\n  @media (max-aspect-ratio: 3/4) {\n    justify-content: space-evenly;\n  }\n"]);return F=function(){return e},e}var L=o.b.div(F()),A=Object(o.c)(N()),P=o.b.div(J(),(function(e){return e.active?Object(o.a)(E(),A):""}),(function(e){return e.active?1:0})),q=o.b.div(z()),I=o.b.button(C()),B=function(){var e=Object(i.useState)(0),n=Object(x.a)(e,2),t=n[0],r=n[1],l=Object(i.useState)(null),s=Object(x.a)(l,2),a=s[0],o=s[1],d=Object(i.useState)(null),u=Object(x.a)(d,2),f=u[0],b=u[1],j=Object(i.useState)(JSON.parse(JSON.stringify(T))),p=Object(x.a)(j,2),h=p[0],g=p[1];Object(i.useEffect)((function(){9===t&&(b("tie"),setTimeout((function(){b(null)}),4500))}),[t]);return Object(c.jsxs)(L,{children:[Object(c.jsxs)(P,{active:!!f,children:[Object(c.jsx)("span",{children:"\ud83c\udf88"}),"winner"===f?Object(c.jsxs)("p",{children:[" PLAYER ",a," WON "]}):"tie"===f?Object(c.jsx)("p",{children:" GAME TIED! "}):Object(c.jsx)("p",{children:" LET'S PLAY! "}),Object(c.jsx)("span",{children:"\ud83e\udd73"})]}),Object(c.jsx)(m,{handleClick:function(e){var n=function(e){return e[0].selected&&e[0].selected===e[1].selected&&e[1].selected===e[2].selected?e[0].selected:e[3].selected&&e[3].selected===e[4].selected&&e[4].selected===e[5].selected?e[3].selected:e[6].selected&&e[6].selected===e[7].selected&&e[7].selected===e[8].selected?e[6].selected:e[0].selected&&e[0].selected===e[3].selected&&e[3].selected===e[6].selected?e[0].selected:e[1].selected&&e[1].selected===e[4].selected&&e[4].selected===e[7].selected?e[1].selected:e[2].selected&&e[2].selected===e[5].selected&&e[5].selected===e[8].selected?e[2].selected:e[0].selected&&e[0].selected===e[4].selected&&e[4].selected===e[8].selected?e[0].selected:e[2].selected&&e[2].selected===e[4].selected&&e[4].selected===e[6].selected?e[2].selected:void 0}(h);n&&!a&&(o(n),b("winner"),setTimeout((function(){b(null)}),4500)),!a&&function(e){if(!h[e].selected){r(t+1);var n=Object(v.a)({},h);n[e].flip=!0,n[e].selected=t%2?"X":"O",g(Object(v.a)({},n)),setTimeout((function(){n[e].flip=!1,g(Object(v.a)({},n))}),2e3)}}(e)},squares:h}),Object(c.jsx)(I,{onClick:function(){b("reset"),setTimeout((function(){b(null)}),4500),o(null),r(0),setTimeout((function(){g(JSON.parse(JSON.stringify(T)))}),2200)},children:"New Game"}),Object(c.jsxs)(q,{children:[Object(c.jsx)(w.a,{url:"www.google.com",quote:"This is a pretty good game, check it out!",children:Object(c.jsx)(y.a,{size:32,round:!0})}),Object(c.jsx)(k.a,{url:"www.google.com",title:"This is a pretty good game, check it out!",children:Object(c.jsx)(S.a,{size:32,round:!0})})]})]})};var D=function(){return Object(c.jsx)(B,{})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,l=n.getTTFB;t(e),c(e),i(e),r(e),l(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),G()}},[[28,1,2]]]);
//# sourceMappingURL=main.1099c9c9.chunk.js.map