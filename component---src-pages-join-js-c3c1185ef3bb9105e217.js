(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{HMs9:function(M,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.forceVisible=e.forceCheck=e.lazyload=void 0;var i=function(){function M(M,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(M,i.key,i)}}return function(e,t,i){return t&&M(e.prototype,t),i&&M(e,i),e}}(),n=t("q1tI"),I=g(n),N=g(t("17x9")),u=t("Seim"),j=g(t("tvXG")),l=g(t("PTkm")),a=g(t("uUxy"));function g(M){return M&&M.__esModule?M:{default:M}}function D(M,e){if(!(M instanceof e))throw new TypeError("Cannot call a class as a function")}function o(M,e){if(!M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?M:e}function c(M,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);M.prototype=Object.create(e&&e.prototype,{constructor:{value:M,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(M,e):M.__proto__=e)}var r=0,T=0,y=0,m=0,x="data-lazyload-listened",d=[],s=[],w=!1;try{var z=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,z)}catch(C){}var b=!!w&&{capture:!1,passive:!0},A=function(M){var e=M.ref;if(e instanceof HTMLElement){var t=(0,j.default)(e);(M.props.overflow&&t!==e.ownerDocument&&t!==document&&t!==document.documentElement?function(M,e){var t=M.ref,i=void 0,n=void 0,I=void 0,N=void 0;try{var u=e.getBoundingClientRect();i=u.top,n=u.left,I=u.height,N=u.width}catch(C){i=r,n=T,I=m,N=y}var j=window.innerHeight||document.documentElement.clientHeight,l=window.innerWidth||document.documentElement.clientWidth,a=Math.max(i,0),g=Math.max(n,0),D=Math.min(j,i+I)-a,o=Math.min(l,n+N)-g,c=void 0,x=void 0,d=void 0,s=void 0;try{var w=t.getBoundingClientRect();c=w.top,x=w.left,d=w.height,s=w.width}catch(C){c=r,x=T,d=m,s=y}var z=c-a,b=x-g,A=Array.isArray(M.props.offset)?M.props.offset:[M.props.offset,M.props.offset];return z-A[0]<=D&&z+d+A[1]>=0&&b-A[0]<=o&&b+s+A[1]>=0}(M,t):function(M){var e=M.ref;if(!(e.offsetWidth||e.offsetHeight||e.getClientRects().length))return!1;var t=void 0,i=void 0;try{var n=e.getBoundingClientRect();t=n.top,i=n.height}catch(C){t=r,i=m}var I=window.innerHeight||document.documentElement.clientHeight,N=Array.isArray(M.props.offset)?M.props.offset:[M.props.offset,M.props.offset];return t-N[0]<=I&&t+i+N[1]>=0}(M))?M.visible||(M.props.once&&s.push(M),M.visible=!0,M.forceUpdate()):M.props.once&&M.visible||(M.visible=!1,M.props.unmountIfInvisible&&M.forceUpdate())}},Z=function(){s.forEach((function(M){var e=d.indexOf(M);-1!==e&&d.splice(e,1)})),s=[]},E=function(){for(var M=0;M<d.length;++M){var e=d[M];A(e)}Z()},S=void 0,p=null,L=function(M){function e(M){D(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,M));return t.visible=!1,t.setRef=t.setRef.bind(t),t}return c(e,M),i(e,[{key:"componentDidMount",value:function(){var M=window,e=this.props.scrollContainer;e&&"string"==typeof e&&(M=M.document.querySelector(e));var t=void 0!==this.props.debounce&&"throttle"===S||"debounce"===S&&void 0===this.props.debounce;if(t&&((0,u.off)(M,"scroll",p,b),(0,u.off)(window,"resize",p,b),p=null),p||(void 0!==this.props.debounce?(p=(0,l.default)(E,"number"==typeof this.props.debounce?this.props.debounce:300),S="debounce"):void 0!==this.props.throttle?(p=(0,a.default)(E,"number"==typeof this.props.throttle?this.props.throttle:300),S="throttle"):p=E),this.props.overflow){var i=(0,j.default)(this.ref);if(i&&"function"==typeof i.getAttribute){var n=+i.getAttribute(x)+1;1===n&&i.addEventListener("scroll",p,b),i.setAttribute(x,n)}}else if(0===d.length||t){var I=this.props,N=I.scroll,g=I.resize;N&&(0,u.on)(M,"scroll",p,b),g&&(0,u.on)(window,"resize",p,b)}d.push(this),A(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var M=(0,j.default)(this.ref);if(M&&"function"==typeof M.getAttribute){var e=+M.getAttribute(x)-1;0===e?(M.removeEventListener("scroll",p,b),M.removeAttribute(x)):M.setAttribute(x,e)}}var t=d.indexOf(this);-1!==t&&d.splice(t,1),0===d.length&&"undefined"!=typeof window&&((0,u.off)(window,"resize",p,b),(0,u.off)(window,"scroll",p,b))}},{key:"setRef",value:function(M){M&&(this.ref=M)}},{key:"render",value:function(){var M=this.props,e=M.height,t=M.children,i=M.placeholder,n=M.classNamePrefix;return I.default.createElement("div",{className:n+"-wrapper",ref:this.setRef},this.visible?t:i||I.default.createElement("div",{style:{height:e},className:n+"-placeholder"}))}}]),e}(n.Component);L.propTypes={classNamePrefix:N.default.string,once:N.default.bool,height:N.default.oneOfType([N.default.number,N.default.string]),offset:N.default.oneOfType([N.default.number,N.default.arrayOf(N.default.number)]),overflow:N.default.bool,resize:N.default.bool,scroll:N.default.bool,children:N.default.node,throttle:N.default.oneOfType([N.default.number,N.default.bool]),debounce:N.default.oneOfType([N.default.number,N.default.bool]),placeholder:N.default.node,scrollContainer:N.default.oneOfType([N.default.string,N.default.object]),unmountIfInvisible:N.default.bool},L.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var O=function(M){return M.displayName||M.name||"Component"};e.lazyload=function(){var M=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){return function(t){function n(){D(this,n);var M=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return M.displayName="LazyLoad"+O(e),M}return c(n,t),i(n,[{key:"render",value:function(){return I.default.createElement(L,M,I.default.createElement(e,this.props))}}]),n}(n.Component)}},e.default=L,e.forceCheck=E,e.forceVisible=function(){for(var M=0;M<d.length;++M){var e=d[M];e.visible=!0,e.forceUpdate()}Z()}},L80X:function(M,e,t){"use strict";t.r(e),t.d(e,"query",(function(){return G}));var i=t("MUpH"),n=t("5D9J"),I=t("q1tI"),N=t.n(I),u=(t("HMs9"),t("UjZP")),j=t.n(u),l=t("MIyK"),a=t.n(l),g=t("WLgc"),D=t.n(g),o=t("XXkA"),c=t.n(o),r=t("UNzB"),T=t.n(r),y=t("j+iU"),m=t.n(y),x=t("7oih"),d=t("ik9V"),s=t("ajN4"),w=t("EYWl");t("rMck");function z(){var M=Object(i.a)(["\n  min-height: 50vh;\n  position: relative;\n  text-align: center;\n  background-image: url(","), url(","), url(","),\n    url(","), url(","), url(","),\n    url(","), url(",");\n  background-repeat: no-repeat;\n  background-position: left 96px, right 96px, -144px 33%, right -48px top 33%,\n    -96px 70%, right -144px top 70%, left bottom -288px, right bottom -288px;\n  "," {\n    background: none;\n  }\n"]);return z=function(){return M},M}function b(){var M=Object(i.a)(["\n  width: 100%;\n"]);return b=function(){return M},M}function A(){var M=Object(i.a)(["\n  margin: 0 auto;\n  display: inline-block;\n  width: 45%;\n  "," {\n    width: 80%;\n  }\n"]);return A=function(){return M},M}function Z(){var M=Object(i.a)(["\n  margin: 0 auto;\n  text-align: center;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1000px;\n  "," {\n    display: inline-grid;\n    grid-template-columns: 100%;\n    grid-row-gap: 48px;\n  }\n"]);return Z=function(){return M},M}function E(){var M=Object(i.a)(["\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n  /* display: flex;\n  width: 150%;\n  height: 150%;\n  transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg); \n  position: absolute;\n  z-index: 10;\n  object-fit: cover;\n  top: -20%;\n  left: -20%;\n  pointer-events: none; */\n"]);return E=function(){return M},M}function S(){var M=Object(i.a)(["\n  display: flex;\n  /* width: 80%;\n  padding-top: 80%; */\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  border-radius: 2px;\n  object-fit: cover;\n\n  /* transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);  */\n\n  /* non-essential styling */\n  -webkit-box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);\n  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);\n\n  "," {\n    width: 100px;\n    height: 100px;\n  }\n"]);return S=function(){return M},M}function p(){var M=Object(i.a)(["\n  max-width: ","px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]);return p=function(){return M},M}function L(){var M=Object(i.a)(["\n  width: 100%;\n  display: grid;\n  justify-content: center;\n  grid-column-gap: 12%;\n  grid-row-gap: 72px;\n  grid-template-columns: 25% 25% 25%;\n\n  "," {\n    grid-row-gap: 50px;\n    grid-column-gap: 8%;\n  }\n"]);return L=function(){return M},M}function O(){var M=Object(i.a)(["\n  line-height: 140%;\n"]);return O=function(){return M},M}function C(){var M=Object(i.a)(["\n  margin: 0 auto;\n  max-width: 700px;\n  "," {\n    max-width: 500px;\n  }\n"]);return C=function(){return M},M}var k="@media (max-width: 800px)",f=(n.a.div(C(),k),Object(n.a)(d.c)(O()),Object(n.a)("div")(L(),k),Object(n.a)("div")(p(),300),Object(n.a)("div")(S(),k),Object(n.a)("img")(E()),n.a.div(Z(),k),n.a.div(A(),k),n.a.img(b()),n.a.div(z(),T.a,j.a,m.a,a.a,D.a,c.a,j.a,T.a,k));e.default=function(M){var e=M.data.allContentfulProjectCaseStudy.nodes;return N.a.createElement(x.a,null,N.a.createElement(w.a,{metaTitle:"Nova | Join Us"}),N.a.createElement(f,null,N.a.createElement(d.k,null,N.a.createElement(d.j,{y:64}),N.a.createElement(d.e,{center:!0},"Fall 2021 Recruitment"),N.a.createElement(d.j,{y:24}),N.a.createElement(d.i,null,"This fall, Nova is looking for innovators and creators who are passionate about harnessing technology for good to join our family!"),N.a.createElement(d.j,{y:64}),N.a.createElement(d.f,null,"Links"),N.a.createElement(d.j,{y:24}),N.a.createElement(d.i,null,N.a.createElement(d.b,null,N.a.createElement(d.c,{href:"https://tinyurl.com/nova-fall2021app",target:"_blank",underline:!0},N.a.createElement("b",null,"Application"))," ","—"," ",N.a.createElement("i",null,N.a.createElement("b",null,"Due:")," Friday, 10/1 at 11:59pm PST!")),N.a.createElement(d.j,{y:12}),N.a.createElement(d.b,null,N.a.createElement(d.c,{href:"https://fb.me/e/1n7cnmoMC",target:"_blank",underline:!0},N.a.createElement("b",null,"Infosession Facebook Event"))," ","— Don't miss out on our infosessions, as we will have super special guests from nonprofits to talk about our projects!"," ",N.a.createElement("i",null,N.a.createElement("b",null,"Dates:")," Sunday 9/26 from 5-6PM, Tuesday 9/28 from 8-9PM")),N.a.createElement(d.j,{y:12}),N.a.createElement(d.b,null,N.a.createElement(d.c,{href:"https://tinyurl.com/nova-fall2021rsvp ",target:"_blank",underline:!0},N.a.createElement("b",null,"Infosession RSVP"))),N.a.createElement(d.j,{y:12}),N.a.createElement(d.b,null,N.a.createElement(d.c,{href:"https://www.instagram.com/novaforgood/",underline:!0,target:"_blank"},N.a.createElement("b",null,"Instagram"))," ","— We will be posting daily updates here during recruitment. Follow us!")),N.a.createElement(d.j,{y:64}),N.a.createElement(d.f,null,"Ongoing Projects"),N.a.createElement(d.j,{y:24}),N.a.createElement(d.i,null,"Here's a glimpse at our current projects:"),N.a.createElement(d.j,{y:36}),N.a.createElement(s.a,null,e.filter((function(M){return!M.featured&&M.inProgress})).sort((function(M,e){return M.name<e.name?1:-1})).map((function(M,e){return N.a.createElement(s.b,{data:M,idx:e})})))),N.a.createElement(d.j,{y:64})))};var G="3861688651"},MIyK:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIzIiBoZWlnaHQ9IjYzMCIgdmlld0JveD0iMCAwIDEyMyA2MzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC42MTc1IDI1NS4xNEw3LjI5NjIyIDI2MC4zNzFMNS45ODIzOCAyNTUuMTdMMi42NjY2OSAyNTQuNDI4TDUuOTQ5MjMgMjUzLjY5M0w3LjI5NjUzIDI0OC4zNTlMOC42NTEzMiAyNTMuNzIyTDExLjgwMTUgMjU0LjQyOEw4LjYxNzUgMjU1LjE0WiIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSByPSIzIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAzOC43MTQ1IDIwNi44MTEpIiBmaWxsPSIjRkZDNjUwIi8+CjxjaXJjbGUgcj0iMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSA0My4yMTQ1IDI0Mi4zMTEpIiBmaWxsPSIjRkZDNjUwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC41Njk2NSA1NDAuMjY5TDcuMjQ4MzcgNTQ1LjVMNS45MzQ1MyA1NDAuMjk4TDIuNjE4ODQgNTM5LjU1Nkw1LjkwMTM4IDUzOC44MjFMNy4yNDg2OCA1MzMuNDg3TDguNjAzNDcgNTM4Ljg1MUwxMS43NTM3IDUzOS41NTZMOC41Njk2NSA1NDAuMjY5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC43NjM3IDM2Ni4yNjlMNDAuMDg1IDM3MS41TDQxLjM5ODggMzY2LjI5OEw0NC43MTQ1IDM2NS41NTZMNDEuNDMyIDM2NC44MjFMNDAuMDg0NyAzNTkuNDg3TDM4LjcyOTkgMzY0Ljg1MUwzNS41Nzk3IDM2NS41NTZMMzguNzYzNyAzNjYuMjY5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Ni41Njk2IDYwNi4yNjlMODUuMjQ4NCA2MTEuNUw4My45MzQ1IDYwNi4yOThMODAuNjE4OCA2MDUuNTU2TDgzLjkwMTQgNjA0LjgyMUw4NS4yNDg3IDU5OS40ODdMODYuNjAzNSA2MDQuODUxTDg5Ljc1MzcgNjA1LjU1Nkw4Ni41Njk2IDYwNi4yNjlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU0LjQyMzEgMzgxLjgxNEw1Ni40NzU0IDM4OS45MzlMNTguNTE2IDM4MS44NjFMNjMuNjY2NyAzODAuNzA3TDU4LjU2ODYgMzc5LjU2Nkw1Ni40NzYgMzcxLjI4MUw1NC4zNzE3IDM3OS42MTJMNDkuNDc5MiAzODAuNzA3TDU0LjQyMzEgMzgxLjgxNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzAuOTEwMyA2MjEuODE0TDY4Ljg1OCA2MjkuOTM5TDY2LjgxNzQgNjIxLjg2MUw2MS42NjY3IDYyMC43MDdMNjYuNzY0OCA2MTkuNTY2TDY4Ljg1NzQgNjExLjI4MUw3MC45NjE2IDYxOS42MTJMNzUuODU0MSA2MjAuNzA3TDcwLjkxMDMgNjIxLjgxNFoiIGZpbGw9IiNGQTUyMkIiLz4KPGNpcmNsZSByPSIzIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAzOC42NjY3IDQ5MS45MzkpIiBmaWxsPSIjRkE1MjJCIi8+CjxjaXJjbGUgcj0iMyIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTE2LjY2NyA1NTcuOTM5KSIgZmlsbD0iI0ZGQzY1MCIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNDMuMTY2NyA1MjcuNDM5KSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iNC4xNjY2OSIgY3k9IjM1My40MzkiIHI9IjEuNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCA0LjE2NjY5IDM1My40MzkpIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTIxLjE2NyA1OTMuNDM5KSIgZmlsbD0iI0ZGQzY1MCIvPgo8L3N2Zz4K"},PTkm:function(M,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(M,e,t){var i=void 0,n=void 0,I=void 0,N=void 0,u=void 0,j=function j(){var l=+new Date-N;l<e&&l>=0?i=setTimeout(j,e-l):(i=null,t||(u=M.apply(I,n),i||(I=null,n=null)))};return function(){I=this,n=arguments,N=+new Date;var l=t&&!i;return i||(i=setTimeout(j,e)),l&&(u=M.apply(I,n),I=null,n=null),u}}},Seim:function(M,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.on=function(M,e,t,i){i=i||!1,M.addEventListener?M.addEventListener(e,t,i):M.attachEvent&&M.attachEvent("on"+e,(function(e){t.call(M,e||window.event)}))},e.off=function(M,e,t,i){i=i||!1,M.removeEventListener?M.removeEventListener(e,t,i):M.detachEvent&&M.detachEvent("on"+e,t)}},UjZP:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE2IiBoZWlnaHQ9IjY0MCIgdmlld0JveD0iMCAwIDExNiA2NDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4zMTE1OCA1NDkuNDU1TDguNjMyODYgNTU0LjY4Nkw5Ljk0NjcgNTQ5LjQ4NEwxMy4yNjI0IDU0OC43NDJMOS45Nzk4NCA1NDguMDA3TDguNjMyNTUgNTQyLjY3M0w3LjI3Nzc2IDU0OC4wMzdMNC4xMjc1NyA1NDguNzQyTDcuMzExNTggNTQ5LjQ1NVoiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgcj0iMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxMS43MTQ1IDM2Mi42MjUpIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNjQuNzE0NSA0MTEuNjI1KSIgZmlsbD0iI0ZGQzY1MCIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNDQuNzE0NSA0MzYuNjI1KSIgZmlsbD0iI0ZGQzY1MCIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNjQuNzE0NSA0MzYuNjI1KSIgZmlsbD0iI0ZGQzY1MCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNTMxMiAxODkuMjA1TDAuMjA5OTE0IDE5NC40MzZMLTEuMTAzOTMgMTg5LjIzNEwtNC40MTk2MiAxODguNDkyTC0xLjEzNzA3IDE4Ny43NTdMMC4yMTAyMjggMTgyLjQyM0wxLjU2NTAxIDE4Ny43ODdMNC43MTUyMSAxODguNDkyTDEuNTMxMiAxODkuMjA1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMS43MjUzIDE1LjIwNDZMMzMuMDQ2NiAyMC40MzU1TDM0LjM2MDQgMTUuMjM0MUwzNy42NzYxIDE0LjQ5MThMMzQuMzkzNSAxMy43NTY5TDMzLjA0NjIgOC40MjMwMkwzMS42OTE1IDEzLjc4NjZMMjguNTQxMyAxNC40OTE4TDMxLjcyNTMgMTUuMjA0NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzkuNTMxMiAyNTUuMjA1TDc4LjIwOTkgMjYwLjQzNkw3Ni44OTYxIDI1NS4yMzRMNzMuNTgwNCAyNTQuNDkyTDc2Ljg2MjkgMjUzLjc1N0w3OC4yMTAyIDI0OC40MjNMNzkuNTY1IDI1My43ODdMODIuNzE1MiAyNTQuNDkyTDc5LjUzMTIgMjU1LjIwNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMzg0NiAzMC43NDk4TDQ5LjQzNjkgMzguODc1TDUxLjQ3NzUgMzAuNzk2M0w1Ni42MjgyIDI5LjY0MzJMNTEuNTMwMSAyOC41MDE5TDQ5LjQzNzUgMjAuMjE3Mkw0Ny4zMzMzIDI4LjU0NzhMNDIuNDQwOCAyOS42NDMxTDQ3LjM4NDYgMzAuNzQ5OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjMuODcxOSAyNzAuNzVMNjEuODE5NSAyNzguODc1TDU5Ljc3ODkgMjcwLjc5Nkw1NC42MjgyIDI2OS42NDNMNTkuNzI2MyAyNjguNTAyTDYxLjgxOSAyNjAuMjE3TDYzLjkyMzIgMjY4LjU0OEw2OC44MTU3IDI2OS42NDNMNjMuODcxOSAyNzAuNzVaIiBmaWxsPSIjRkE1MjJCIi8+CjxjaXJjbGUgcj0iMyIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMzEuNjI4MiAxNDAuODc1KSIgZmlsbD0iI0ZBNTIyQiIvPgo8Y2lyY2xlIHI9IjMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDEwOS42MjggMjA2Ljg3NSkiIGZpbGw9IiNGRkM2NTAiLz4KPGNpcmNsZSByPSIxLjUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDM2LjEyODIgMTc2LjM3NSkiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgcj0iMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxMTQuMTI4IDI0Mi4zNzUpIiBmaWxsPSIjRkZDNjUwIi8+Cjwvc3ZnPgo="},WLgc:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU3IiBoZWlnaHQ9IjQ4NyIgdmlld0JveD0iMCAwIDE1NyA0ODciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAxLjkwMyAyOTguNjdMMTAwLjU4MiAyOTMuNDM5TDk5LjI2NzggMjk4LjY0MUw5NS45NTIxIDI5OS4zODNMOTkuMjM0NyAzMDAuMTE4TDEwMC41ODIgMzA1LjQ1MkwxMDEuOTM3IDMwMC4wODhMMTA1LjA4NyAyOTkuMzgzTDEwMS45MDMgMjk4LjY3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMzIuMDk3IDQ3Mi42N0wxMzMuNDE4IDQ2Ny40MzlMMTM0LjczMiA0NzIuNjQxTDEzOC4wNDggNDczLjM4M0wxMzQuNzY1IDQ3NC4xMThMMTMzLjQxOCA0NzkuNDUyTDEzMi4wNjMgNDc0LjA4OEwxMjguOTEzIDQ3My4zODNMMTMyLjA5NyA0NzIuNjdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMjQzNjMgMjM4LjEyNUw3LjE5MTI5IDIzMEw1LjE1MDY5IDIzOC4wNzlMMCAyMzkuMjMyTDUuMDk4MDkgMjQwLjM3M0w3LjE5MDczIDI0OC42NThMOS4yOTQ5NiAyNDAuMzI3TDE0LjE4NzQgMjM5LjIzMkw5LjI0MzYzIDIzOC4xMjVaIiBmaWxsPSIjRDdBM0UxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQ3Ljc1NiA0NTcuMTI1TDE0OS44MDkgNDQ5TDE1MS44NDkgNDU3LjA3OUwxNTcgNDU4LjIzMkwxNTEuOTAyIDQ1OS4zNzNMMTQ5LjgwOSA0NjcuNjU4TDE0Ny43MDUgNDU5LjMyN0wxNDIuODEzIDQ1OC4yMzJMMTQ3Ljc1NiA0NTcuMTI1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNjQuMjQ0IDIxNy4xMjVMMTYyLjE5MSAyMDlMMTYwLjE1MSAyMTcuMDc5TDE1NSAyMTguMjMyTDE2MC4wOTggMjE5LjM3M0wxNjIuMTkxIDIyNy42NThMMTY0LjI5NSAyMTkuMzI3TDE2OS4xODcgMjE4LjIzMkwxNjQuMjQ0IDIxNy4xMjVaIiBmaWxsPSIjRkE1MjJCIi8+CjxjaXJjbGUgY3g9IjEzMiIgY3k9IjM0NyIgcj0iMyIgZmlsbD0iI0ZBNTIyQiIvPgo8Y2lyY2xlIGN4PSIxMzYuNSIgY3k9IjMxMS41IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgcj0iMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA5Ny41IDQ4NS41KSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSByPSIxLjUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDQ0LjUgNDM2LjUpIiBmaWxsPSIjRkZDNjUwIi8+CjxjaXJjbGUgcj0iMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA2NC41IDQxMS41KSIgZmlsbD0iI0ZGQzY1MCIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNDQuNSA0MTEuNSkiIGZpbGw9IiNGRkM2NTAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjguMDk3IDIzLjY3MDRMMTI5LjQxOCAxOC40Mzk1TDEzMC43MzIgMjMuNjQwOUwxMzQuMDQ4IDI0LjM4MzJMMTMwLjc2NSAyNS4xMTgxTDEyOS40MTggMzAuNDUyTDEyOC4wNjMgMjUuMDg4NEwxMjQuOTEzIDI0LjM4MzJMMTI4LjA5NyAyMy42NzA0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNjAuMjQ0IDI0OC4xMjVMMTU4LjE5MSAyNDBMMTU2LjE1MSAyNDguMDc5TDE1MSAyNDkuMjMyTDE1Ni4wOTggMjUwLjM3M0wxNTguMTkxIDI1OC42NThMMTYwLjI5NSAyNTAuMzI3TDE2NS4xODcgMjQ5LjIzMkwxNjAuMjQ0IDI0OC4xMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0My43NTYgOC4xMjUxNkwxNDUuODA5IDBMMTQ3Ljg0OSA4LjA3ODcxTDE1MyA5LjIzMThMMTQ3LjkwMiAxMC4zNzMxTDE0NS44MDkgMTguNjU3OEwxNDMuNzA1IDEwLjMyNzJMMTM4LjgxMyA5LjIzMTkzTDE0My43NTYgOC4xMjUxNloiIGZpbGw9IiNGQTUyMkIiLz4KPGNpcmNsZSByPSIzIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA5OCA3MikiIGZpbGw9IiNGRkM2NTAiLz4KPGNpcmNsZSByPSIxLjUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDkzLjUgMzYuNSkiIGZpbGw9IiNGRkM2NTAiLz4KPC9zdmc+Cg=="},XXkA:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgzIiBoZWlnaHQ9Ijk0NSIgdmlld0JveD0iMCAwIDE4MyA5NDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjguNDAzIDg1NC42NTdMNjcuMDgxNyA4NTkuODg4TDY1Ljc2NzggODU0LjY4N0w2Mi40NTIxIDg1My45NDRMNjUuNzM0NyA4NTMuMjFMNjcuMDgyIDg0Ny44NzZMNjguNDM2OCA4NTMuMjM5TDcxLjU4NyA4NTMuOTQ0TDY4LjQwMyA4NTQuNjU3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05OC41OTcgNjgwLjY1N0w5OS45MTgzIDY4NS44ODhMMTAxLjIzMiA2ODAuNjg3TDEwNC41NDggNjc5Ljk0NEwxMDEuMjY1IDY3OS4yMUw5OS45MTggNjczLjg3Nkw5OC41NjMyIDY3OS4yMzlMOTUuNDEzIDY3OS45NDRMOTguNTk3IDY4MC42NTdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0Ni40MDMgOTIwLjY1N0wxNDUuMDgyIDkyNS44ODhMMTQzLjc2OCA5MjAuNjg3TDE0MC40NTIgOTE5Ljk0NEwxNDMuNzM1IDkxOS4yMUwxNDUuMDgyIDkxMy44NzZMMTQ2LjQzNyA5MTkuMjM5TDE0OS41ODcgOTE5Ljk0NEwxNDYuNDAzIDkyMC42NTdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExNC4yNTYgNjk2LjIwMkwxMTYuMzA5IDcwNC4zMjhMMTE4LjM0OSA2OTYuMjQ5TDEyMy41IDY5NS4wOTZMMTE4LjQwMiA2OTMuOTU1TDExNi4zMDkgNjg1LjY3TDExNC4yMDUgNjk0TDEwOS4zMTMgNjk1LjA5NkwxMTQuMjU2IDY5Ni4yMDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzMC43NDQgOTM2LjIwMkwxMjguNjkxIDk0NC4zMjhMMTI2LjY1MSA5MzYuMjQ5TDEyMS41IDkzNS4wOTZMMTI2LjU5OCA5MzMuOTU1TDEyOC42OTEgOTI1LjY3TDEzMC43OTUgOTM0TDEzNS42ODcgOTM1LjA5NkwxMzAuNzQ0IDkzNi4yMDJaIiBmaWxsPSIjRkE1MjJCIi8+CjxjaXJjbGUgcj0iMyIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgOTguNSA4MDYuMzI4KSIgZmlsbD0iI0ZBNTIyQiIvPgo8Y2lyY2xlIHI9IjMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDE3Ni41IDg3Mi4zMjgpIiBmaWxsPSIjRkZDNjUwIi8+CjxjaXJjbGUgcj0iMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxMDMgODQxLjgyOCkiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNjY3LjgyOCIgcj0iMS41IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDY0IDY2Ny44MjgpIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxMSIgY3k9IjcxNi44MjgiIHI9IjEuNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAxMSA3MTYuODI4KSIgZmlsbD0iI0ZGQzY1MCIvPgo8Y2lyY2xlIGN4PSIzMSIgY3k9Ijc0MS44MjgiIHI9IjEuNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAzMSA3NDEuODI4KSIgZmlsbD0iI0ZGQzY1MCIvPgo8Y2lyY2xlIGN4PSIxMSIgY3k9Ijc0MS44MjgiIHI9IjEuNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAxMSA3NDEuODI4KSIgZmlsbD0iI0ZGQzY1MCIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTgxIDkwNy44MjgpIiBmaWxsPSIjRkZDNjUwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDAuNjUzIDU5Ni4zM0wzOS4zMzE3IDYwMS41NjFMMzguMDE3OCA1OTYuMzU5TDM0LjcwMjEgNTk1LjYxN0wzNy45ODQ3IDU5NC44ODJMMzkuMzMyIDU4OS41NDhMNDAuNjg2OCA1OTQuOTEyTDQzLjgzNyA1OTUuNjE3TDQwLjY1MyA1OTYuMzNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNTA2MzcgMzcxLjg3NUwxMC41NTg3IDM4MEwxMi41OTkzIDM3MS45MjFMMTcuNzUgMzcwLjc2OEwxMi42NTE5IDM2OS42MjdMMTAuNTU5MyAzNjEuMzQyTDguNDU1MDQgMzY5LjY3M0wzLjU2MjU2IDM3MC43NjhMOC41MDYzNyAzNzEuODc1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC45OTM2IDYxMS44NzVMMjIuOTQxMyA2MjBMMjAuOTAwNyA2MTEuOTIxTDE1Ljc1IDYxMC43NjhMMjAuODQ4MSA2MDkuNjI3TDIyLjk0MDcgNjAxLjM0MkwyNS4wNDUgNjA5LjY3M0wyOS45Mzc0IDYxMC43NjhMMjQuOTkzNiA2MTEuODc1WiIgZmlsbD0iI0ZBNTIyQiIvPgo8Y2lyY2xlIHI9IjMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDcwLjc1IDU0OCkiIGZpbGw9IiNGRkM2NTAiLz4KPGNpcmNsZSByPSIxLjUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDc1LjI1IDU4My41KSIgZmlsbD0iI0ZGQzY1MCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMzYxNjkgMTg5LjAxN0w4LjY4Mjk3IDE5NC4yNDhMOS45OTY4MSAxODkuMDQ2TDEzLjMxMjUgMTg4LjMwNEwxMC4wMyAxODcuNTY5TDguNjgyNjYgMTgyLjIzNUw3LjMyNzg3IDE4Ny41OTlMNC4xNzc2OCAxODguMzA0TDcuMzYxNjkgMTg5LjAxN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAwLjAyMSAyNDkuNTYyTDEwMi4wNzMgMjU3LjY4N0wxMDQuMTE0IDI0OS42MDhMMTA5LjI2NSAyNDguNDU1TDEwNC4xNjcgMjQ3LjMxNEwxMDIuMDc0IDIzOS4wMjlMOTkuOTY5NyAyNDcuMzZMOTUuMDc3MiAyNDguNDU1TDEwMC4wMjEgMjQ5LjU2MloiIGZpbGw9IiNEN0EzRTEiLz4KPGNpcmNsZSByPSIxLjUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDExLjc2NDYgMi4xODcwMSkiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgcj0iMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSA2NC43NjQ2IDUxLjE4NykiIGZpbGw9IiNGRkM2NTAiLz4KPGNpcmNsZSByPSIxLjUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDQ0Ljc2NDYgNzYuMTg3KSIgZmlsbD0iI0ZGQzY1MCIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNjQuNzY0NiA3Ni4xODcpIiBmaWxsPSIjRkZDNjUwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTMuMjA4NSA0ODAuNTQ2TDU1LjI2MDkgNDg4LjY3MUw1Ny4zMDE1IDQ4MC41OTJMNjIuNDUyMSA0NzkuNDM5TDU3LjM1NDEgNDc4LjI5OEw1NS4yNjE0IDQ3MC4wMTNMNTMuMTU3MiA0NzguMzQ0TDQ4LjI2NDcgNDc5LjQzOUw1My4yMDg1IDQ4MC41NDZaIiBmaWxsPSIjRDdBM0UxIi8+CjxjaXJjbGUgcj0iMS41IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxNy45NTIxIDMwNy4xNzEpIiBmaWxsPSIjRkZDNjUwIi8+Cjwvc3ZnPgo="},ajN4:function(M,e,t){"use strict";t.d(e,"a",(function(){return Z}));var i=t("MUpH"),n=t("q1tI"),I=t.n(n),N=t("5D9J"),u=t("ik9V"),j=t("ma3e"),l=t("b6Qr");function a(){var M=Object(i.a)(["\n\tfont-family: Rubik;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 18px;\n\ttext-align: left;\n\tcolor: #565656;\n\t"," {\n\t\tfont-size: 12px;\n\t}\n"]);return a=function(){return M},M}function g(){var M=Object(i.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 150px auto;\n\tgrid-column-gap: 30px;\n\t"," {\n\t\tgrid-template-columns: 74px auto;\n\t\tgrid-column-gap: 20px;\n\t}\n"]);return g=function(){return M},M}function D(){var M=Object(i.a)(["\n  place-self: right;\n"]);return D=function(){return M},M}function o(){var M=Object(i.a)(["\n  place-self: left;\n  "," {\n  }\n"]);return o=function(){return M},M}function c(){var M=Object(i.a)(["\n  place-self: start;\n  font-family: Prompt;\n  font-size: 20px;\n  text-align: left;\n  "," {\n    font-size: 14px;\n  }\n"]);return c=function(){return M},M}function r(){var M=Object(i.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 150px auto 24px;\n  grid-column-gap: 30px;\n  "," {\n  \t  grid-template-columns: 74px auto 16px;\n\t  grid-column-gap: 20px;\n  }\n"]);return r=function(){return M},M}function T(){var M=Object(i.a)(["\n  width: 100%;\n  border: 1px solid rgba(196, 196, 196, 0.5);\n"]);return T=function(){return M},M}var y="@media (max-width: 800px)",m=l.isMobile?12:18,x=N.a.hr(T()),d=N.a.div(r(),y),s=N.a.div(c(),y),w=N.a.div(o(),y),z=N.a.div(D()),b=N.a.div(g(),y),A=N.a.div(a(),y);function Z(M){var e=M.children;return I.a.createElement(I.a.Fragment,null,I.a.createElement(b,null,I.a.createElement(A,null,"PARTNER"),I.a.createElement(A,null,"PROJECT DESCRIPTION")),e,I.a.createElement(x,null))}e.b=function(M){var e=M.data,t=(M.onClick,M.open,M.idx,e.name),i=e.description,n=e.slug;return I.a.createElement("div",null,I.a.createElement(x,null),I.a.createElement(u.j,{y:12}),I.a.createElement(d,null,I.a.createElement(s,null,I.a.createElement("b",null,t)),I.a.createElement(w,null,I.a.createElement(u.i,null,i&&i.description)),I.a.createElement(z,null,I.a.createElement(u.h,{to:"/work/"+n},I.a.createElement(j.a,{size:m})))),I.a.createElement(u.j,{y:12}))}},"j+iU":function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA3IiBoZWlnaHQ9Ijg1OCIgdmlld0JveD0iMCAwIDIwNyA4NTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEwLjE1MyA1NDEuNjk0TDIwOC44MzIgNTM2LjQ2M0wyMDcuNTE4IDU0MS42NjVMMjA0LjIwMiA1NDIuNDA3TDIwNy40ODUgNTQzLjE0MkwyMDguODMyIDU0OC40NzZMMjEwLjE4NyA1NDMuMTEyTDIxMy4zMzcgNTQyLjQwN0wyMTAuMTUzIDU0MS42OTRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2Mi4zNDcgMzAxLjY5NEwxNjMuNjY4IDI5Ni40NjNMMTY0Ljk4MiAzMDEuNjY1TDE2OC4yOTggMzAyLjQwN0wxNjUuMDE1IDMwMy4xNDJMMTYzLjY2OCAzMDguNDc2TDE2Mi4zMTMgMzAzLjExMkwxNTkuMTYzIDMwMi40MDdMMTYyLjM0NyAzMDEuNjk0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOTQuNDk0IDUyNi4xNDlMMTkyLjQ0MSA1MTguMDI0TDE5MC40MDEgNTI2LjEwM0wxODUuMjUgNTI3LjI1NkwxOTAuMzQ4IDUyOC4zOTdMMTkyLjQ0MSA1MzYuNjgyTDE5NC41NDUgNTI4LjM1MUwxOTkuNDM3IDUyNy4yNTZMMTk0LjQ5NCA1MjYuMTQ5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNzguMDA2IDI4Ni4xNDlMMTgwLjA1OSAyNzguMDI0TDE4Mi4wOTkgMjg2LjEwM0wxODcuMjUgMjg3LjI1NkwxODIuMTUyIDI4OC4zOTdMMTgwLjA1OSAyOTYuNjgyTDE3Ny45NTUgMjg4LjM1MUwxNzMuMDYzIDI4Ny4yNTZMMTc4LjAwNiAyODYuMTQ5WiIgZmlsbD0iI0ZBNTIyQiIvPgo8Y2lyY2xlIHI9IjMiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDEzMi4yNSAzNTAuMDI0KSIgZmlsbD0iI0ZGQzY1MCIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjA1Ljc1IDM4MC41MjQpIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTI3Ljc1IDMxNC41MjQpIiBmaWxsPSIjRkZDNjUwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYwLjA2MyAyNDguODk5TDE1OC4wMTEgMjU3LjAyNEwxNTUuOTcgMjQ4Ljk0NUwxNTAuODE5IDI0Ny43OTJMMTU1LjkxNyAyNDYuNjUxTDE1OC4wMSAyMzguMzY2TDE2MC4xMTQgMjQ2LjY5N0wxNjUuMDA3IDI0Ny43OTJMMTYwLjA2MyAyNDguODk5WiIgZmlsbD0iI0Q3QTNFMSIvPgo8Y2lyY2xlIGN4PSIxOTUuMzE5IiBjeT0iNTAuNTIzOSIgcj0iMS41IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDE5NS4zMTkgNTAuNTIzOSkiIGZpbGw9IiNGRkM2NTAiLz4KPGNpcmNsZSBjeD0iMTk1LjMxOSIgY3k9Ijc1LjUyMzkiIHI9IjEuNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAxOTUuMzE5IDc1LjUyMzkpIiBmaWxsPSIjRkZDNjUwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAyLjgxNiA2NjguOTk4TDEwMS40OTUgNjYzLjc2N0wxMDAuMTgxIDY2OC45NjlMOTYuODY1MiA2NjkuNzExTDEwMC4xNDggNjcwLjQ0NkwxMDEuNDk1IDY3NS43OEwxMDIuODUgNjcwLjQxNkwxMDYgNjY5LjcxMUwxMDIuODE2IDY2OC45OThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzMy4wMSA4NDIuOTk4TDEzNC4zMzEgODM3Ljc2N0wxMzUuNjQ1IDg0Mi45NjlMMTM4Ljk2MSA4NDMuNzExTDEzNS42NzggODQ0LjQ0NkwxMzQuMzMxIDg0OS43OEwxMzIuOTc2IDg0NC40MTZMMTI5LjgyNiA4NDMuNzExTDEzMy4wMSA4NDIuOTk4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODAuODE2IDYwMi45OThMMTc5LjQ5NSA1OTcuNzY3TDE3OC4xODEgNjAyLjk2OUwxNzQuODY1IDYwMy43MTFMMTc4LjE0OCA2MDQuNDQ2TDE3OS40OTUgNjA5Ljc4TDE4MC44NSA2MDQuNDE2TDE4NCA2MDMuNzExTDE4MC44MTYgNjAyLjk5OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMTU2NyA2MDguNDUzTDguMTA0MzggNjAwLjMyOEw2LjA2Mzc3IDYwOC40MDZMMC45MTMwODYgNjA5LjU1OUw2LjAxMTE3IDYxMC43MDFMOC4xMDM4MSA2MTguOTg1TDEwLjIwOCA2MTAuNjU1TDE1LjEwMDUgNjA5LjU2TDEwLjE1NjcgNjA4LjQ1M1oiIGZpbGw9IiNEN0EzRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDguNjY5IDgyNy40NTNMMTUwLjcyMiA4MTkuMzI4TDE1Mi43NjIgODI3LjQwNkwxNTcuOTEzIDgyOC41NTlMMTUyLjgxNSA4MjkuNzAxTDE1MC43MjIgODM3Ljk4NUwxNDguNjE4IDgyOS42NTVMMTQzLjcyNiA4MjguNTZMMTQ4LjY2OSA4MjcuNDUzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNjUuMTU3IDU4Ny40NTNMMTYzLjEwNCA1NzkuMzI4TDE2MS4wNjQgNTg3LjQwNkwxNTUuOTEzIDU4OC41NTlMMTYxLjAxMSA1ODkuNzAxTDE2My4xMDQgNTk3Ljk4NUwxNjUuMjA4IDU4OS42NTVMMTcwLjEwMSA1ODguNTZMMTY1LjE1NyA1ODcuNDUzWiIgZmlsbD0iI0ZBNTIyQiIvPgo8Y2lyY2xlIGN4PSIxMzIuOTEzIiBjeT0iNzE3LjMyOCIgcj0iMyIgZmlsbD0iI0ZBNTIyQiIvPgo8Y2lyY2xlIGN4PSIxMzcuNDEzIiBjeT0iNjgxLjgyOCIgcj0iMS41IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIHI9IjEuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgOTguNDEzMSA4NTUuODI4KSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSByPSIxLjUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDY1LjQxMzEgNzgxLjgyOCkiIGZpbGw9IiNGRkM2NTAiLz4KPGNpcmNsZSByPSIxLjUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDQ1LjQxMzEgNzgxLjgyOCkiIGZpbGw9IiNGRkM2NTAiLz4KPC9zdmc+Cg=="},tvXG:function(M,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(M){if(!(M instanceof HTMLElement))return document.documentElement;for(var e="absolute"===M.style.position,t=/(scroll|auto)/,i=M;i;){if(!i.parentNode)return M.ownerDocument||document.documentElement;var n=window.getComputedStyle(i),I=n.position,N=n.overflow,u=n["overflow-x"],j=n["overflow-y"];if("static"===I&&e)i=i.parentNode;else{if(t.test(N)&&t.test(u)&&t.test(j))return i;i=i.parentNode}}return M.ownerDocument||M.documentElement||document.documentElement}},uUxy:function(M,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(M,e,t){var i,n;return e||(e=250),function(){var I=t||this,N=+new Date,u=arguments;i&&N<i+e?(clearTimeout(n),n=setTimeout((function(){i=N,M.apply(I,u)}),e)):(i=N,M.apply(I,u))}}}}]);
//# sourceMappingURL=component---src-pages-join-js-c3c1185ef3bb9105e217.js.map