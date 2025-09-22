/*! For license information please see 590e3d7a5cf8943140fd64c980a35fdfa8200e5a-cdafa987f9865c8f7359.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[29],{999:function(e,t,n){n.d(t,{FL:function(){return x},Pf:function(){return y},Wv:function(){return O},Xc:function(){return u},Zk:function(){return E},bi:function(){return v},cR:function(){return p},ck:function(){return k},jO:function(){return m},pp:function(){return $},vg:function(){return f},zH:function(){return w}});var o=n(3467),i=n(4810),r=n(6540),s=n(7774),a=n.n(s),l=n(3711);const d="InstrumentSans",c="@media (max-width: 800px)",u=o.A.div`
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 900; /* Black */
  font-size: 158px;
  line-height: 60%;
  color: black;
  text-align: ${e=>{let{center:t}=e;return t?"center":"left"}};

  ${c} {
    font-size: 100px;
  }
`,f=o.A.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 800;
  /* fluid between 32px and 72px, driven by viewport width */
  font-size: clamp(32px, 7vw, 72px);
  line-height: 1.1;
  width: ${e=>{let{width:t}=e;return t||"auto"}};
  text-align: ${e=>{let{center:t}=e;return t?"center":"left"}};
  color: black;
  margin-top: 0; /* 1% is relative to width and can feel jumpy */

  word-break: keep-all;
  overflow-wrap: normal;

  ${c} {
    margin-left: 0; /* avoid pushing it right on small screens */
    /* no font-size override here */
  }
`,p=o.A.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 800;
  /* fluid between 32px and 72px, driven by viewport width */
  font-size: clamp(32px, 8vw, 108px);
  line-height: 1.1;
  width: ${e=>{let{width:t}=e;return t||"auto"}};
  text-align: ${e=>{let{center:t}=e;return t?"center":"left"}};
  color: black;
  margin-top: 0; /* 1% is relative to width and can feel jumpy */

  word-break: keep-all;
  overflow-wrap: normal;

  ${c} {
    margin-left: 0; /* avoid pushing it right on small screens */
    /* no font-size override here */
  }
`,h=o.A.div`
  font-family: ${d};
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 135%;
  /* identical to box height, or 49px */
  text-align: ${e=>{let{center:t}=e;return t?"center":"left"}};
  letter-spacing: 0.05em;
  margin: 0;
  color: #013668;

  ${c} {
    font-size: 24px;
  }
`,m=o.A.div`
  font-family: ${d};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  /* or 32px */

  text-align: ${e=>{let{center:t}=e;return t?"center":"left"}};
  letter-spacing: 0.05em;
  color: ${e=>{let{color:t}=e;return`${t||"white"}`}};

  ${c} {
    font-size: 18px;
  }
`,v=(o.A.div`
  font-family: InstrumentSans;
  line-height: ${e=>{let{lineHeight:t}=e;return`${t||"100%"}`}};
  font-size: ${e=>{let{fontSize:t}=e;return`${t||20}px`}};
  text-align: ${e=>{let{center:t}=e;return t?"center":"left"}};

  ${c} {
    font-size: ${e=>{let{fontSize:t}=e;return`${2/3*t||12}px`}};
  }
`,o.A.div`
  width: 100%;
  height: ${e=>{let{y:t}=e;return`${t}`}}px;
  ${c} {
    height: ${e=>{let{mobileY:t,y:n}=e;return`${t||2/3*n}`}}px;
  }
`),y=(o.A.div`
  margin-top: 100px;
  width: 70%;
  min-width: 760px;
  margin: 0 auto;

  ${c} {
    width: 95%;
    min-width: 0;
  }
`,o.A.p`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: InstrumentSans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  width: ${e=>{let{width:t}=e;return t||"auto"}};
  /* or 38px */
  text-align: ${e=>{let{center:t}=e;return t?"center":"left"}};
  color: black;
  margin: 0;
  ${c} {
    font-size: 16px;
  }
`),b=(0,o.A)(i.N_)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: ${e=>{let{textColor:t}=e;return`${t||"#FFFFFF"}`}};

  /* solid color fallback */
  ${e=>{let{backgroundColor:t}=e;return t&&!`${t}`.includes("gradient")?`background-color: ${t};`:""}}

  /* gradient or custom background */
  ${e=>{let{background:t,bg:n,backgroundColor:o}=e;const i=t||n||o;return i&&`${i}`.includes("gradient")?`background: ${i};`:""}}

  border: ${e=>{let{borderColor:t}=e;return`1.5px solid ${t||""}`}};
  box-sizing: border-box;
  border-radius: ${e=>{let{borderRadius:t}=e;return`${t||"10px"}`}};
  font-family: InstrumentSans;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  font-size: ${e=>{let{fontSize:t}=e;return`${t||"20px"}`}};
  padding: ${e=>{let{padding:t}=e;return`${t||"15px 70px"}`}};
  margin: 0 10px;
  text-decoration: none;
  text-align: center;

  /* ✨ Hover micro-interactions */
  transition:
    transform 200ms ease,
    /*box-shadow 200ms ease,*/
    filter 200ms ease,
    background 200ms ease,
    color 200ms ease,
    border-color 200ms ease;
  will-change: transform;

  &:hover {
    transform: translateY(-2px);
    /*box-shadow: 0 10px 24px rgba(0,0,0,0.15);*/
  }
  &:active {
    transform: translateY(0);
    filter: brightness(0.98);
    /*box-shadow: 0 6px 16px rgba(0,0,0,0.12);*/
  }

  /* 💡 subtle “shine” sweep */
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255,255,255,0.32),
      transparent
    );
    transform: translateX(-120%);
    transition: transform 300ms ease;
  }
  &:hover::before {
    transform: translateX(120%);
  }

  ${c} {
    font-size: 14px;
    width: 250px;
    padding: 12px 15px;
    margin: 5px;
  }
`;function w(e){const{0:t,1:n}=(0,r.useState)(!1);return r.createElement(l.A,{hide:!t},r.createElement(b,Object.assign({onMouseOver:()=>n(!0),onMouseLeave:()=>n(!1)},e),e.children))}const g=o.A.div`
  width: 60%;
  min-width: 760px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0);
  ${c} {
    width: 95%;
    min-width: 0;
  }
`,x=e=>{let{children:t}=e;return r.createElement(a(),null,t)},E=e=>{let{children:t}=e;return r.createElement(a(),null,r.createElement(g,null,t))},$=((0,o.A)(h)`
  font-family: ${d};
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  ${c} {
    font-size: 28px;
  }
  line-height: 135%;
  margin: 0;
  /* identical to box height, or 65px */
  letter-spacing: 0.05em;
`,o.A.h2`
  font-family: ${d};
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 135%;
  /* identical to box height, or 65px */

  letter-spacing: 0.05em;

  ${c} {
    font-size: 20px;
  }
`,(0,o.A)(i.N_)`
  color: #013668;
  text-decoration: none;
  border-bottom: ${e=>{let{underline:t}=e;return t?"2px solid #013668":"none"}};
  &:hover {
    color: #013668;
  }
`),O=o.A.a`
  /* base + theme vars */
  --grad: var(
    --Gradient,
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );

  position: relative;
  color: #000000;
  text-decoration: none;
  border-bottom: ${e=>{let{underline:t}=e;return t?"2px solid #000000":"none"}};
  transition: color 200ms ease;

  /* Fallback hover color (for browsers without background-clip:text) */
  &:hover {
    color: #b78df2;
  }

  /* Gradient text on hover (where supported) */
  @supports (-webkit-background-clip: text) or (background-clip: text) {
    &:hover {
      background: var(--grad);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent; /* Safari/WebKit */
      color: transparent; /* others */
    }
  }

  /* Gradient underline on hover when underline=true */
  ${e=>{let{underline:t}=e;return t&&'\n    &:hover {\n      border-bottom: none; /* replace the solid underline */\n    }\n    &:hover::after {\n      content: "";\n      position: absolute;\n      left: 0; right: 0;\n      bottom: -2px;\n      height: 2px;\n      background: var(--grad);\n      border-radius: 1px;\n    }\n  '}}
`,k=(o.A.img`
  width: 100%;
  margin: 48px 0;
  max-height: ${e=>{let{maxHeight:t}=e;return t||"auto"}};
  min-height: ${e=>{let{minHeight:t}=e;return t||"auto"}};
  object-fit: cover;
  ${c} {
    margin: 32px 0;
  }
`,o.A.span`
  font-family: InstrumentSans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */
  color: #ffffff;
`,o.A.li`
  list-style-type: none;
  list-style-position: inside;
  text-indent: -1em;
  padding-left: 1em;
  &::before {
    content: "•\xa0\xa0";
  }
`);o.A.b`
  color: #013668;
  font-family: Prompt;
  font-size: 24px;
  font-weight: 900;
  ${c} {
    font-size: 14px;
  }
`},2799:function(e,t){var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,d=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,g=n?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case c:case u:case r:case a:case s:case p:return e;default:switch(e=e&&e.$$typeof){case d:case f:case v:case m:case l:return e;default:return t}}case i:return t}}}function E(e){return x(e)===u}t.AsyncMode=c,t.ConcurrentMode=u,t.ContextConsumer=d,t.ContextProvider=l,t.Element=o,t.ForwardRef=f,t.Fragment=r,t.Lazy=v,t.Memo=m,t.Portal=i,t.Profiler=a,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return E(e)||x(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return x(e)===d},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===f},t.isFragment=function(e){return x(e)===r},t.isLazy=function(e){return x(e)===v},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===i},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===s},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===u||e===a||e===s||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===l||e.$$typeof===d||e.$$typeof===f||e.$$typeof===b||e.$$typeof===w||e.$$typeof===g||e.$$typeof===y)},t.typeOf=x},3032:function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=function(e,t,n,o){return"in"in e&&(e.when=e.in),r.default.Children.count(o)<2?r.default.createElement(s.default,i({},e,{inEffect:t,outEffect:n,children:o})):(o=r.default.Children.map(o,function(o){return r.default.createElement(s.default,i({},e,{inEffect:t,outEffect:n,children:o}))}),"Fragment"in r.default?r.default.createElement(r.default.Fragment,null,o):r.default.createElement("span",null,o))};var r=o(n(6540)),s=o(n(4448));e.exports=t.default},3546:function(e,t){function n(e){try{return p.insertRule(e,p.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",o,!0),n("."+i+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,n,o,i){var r=Math.log(o),s=(Math.log(i)-r)/(n-t);return Math.exp(r+s*(e-t))},t.animation=function(e){if(!p)return"";var t="@keyframes "+(h+u)+"{"+e+"}",n=f[e];return n?""+h+n:(p.insertRule(t,p.cssRules.length),f[e]=u,""+h+u++)},t.hideAll=o,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var i=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,a=t.raf=function(e){return window.setTimeout(e,66)},l=t.disableSsr=function(){return t.ssr=r=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),c=(t.ie10=!1,t.collapseend=void 0),u=1,f={},p=!1,h=i+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||a,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(l,1500),s||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(p=m.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},3711:function(e,t,n){var o=n(6540),i=n(3467),r=n(7437);const s=(e,t)=>Math.floor(Math.random()*(t-e))+e,a="(prefers-reduced-motion: no-preference)",l="undefined"==typeof window,d=()=>!!l||!window.matchMedia(a).matches;const c=["#FEB71F","#FFFFFF","#C5E6F5","#FFE7FF"],u=()=>({id:String(s(1e4,99999)),createdAt:Date.now(),color:c[s(0,c.length)],size:s(10,20),style:{top:s(-15,115)+"%",left:s(-15,115)+"%"}}),f=e=>{let{size:t,color:n,style:i}=e;return o.createElement(v,{style:i},o.createElement(y,{width:t,height:t,viewBox:"0 0 68 68",fill:"none"},o.createElement("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:n})))},p=r.i7`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`,h=r.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`,m=i.A.span`
  display: inline-block;
  position: relative;
  visibility: ${e=>{let{hide:t}=e;return t?"hidden":"visible"}};
  ${"@media (max-width: 700px)"} {
    overflow: hidden;
  }
`,v=i.A.span`
  pointer-events: none;
  position: absolute;
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${p} 700ms forwards;
  }
`,y=i.A.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${h} 1000ms linear;
  }
`,b=i.A.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
  visibility: visible;
`;t.A=e=>{let{hide:t,children:n}=e;const[i,r]=o.useState(()=>function(e,t,n){void 0===n&&(n=1);let o=[];void 0===t&&(t=e,e=0);for(let i=e;i<t;i+=n)o.push(i);return o}(100).map(()=>u())),l=function(){const[e,t]=o.useState(d);return o.useEffect(()=>{const e=window.matchMedia(a),n=e=>{t(!e.matches)};return e.addListener(n),()=>{e.removeListener(n)}},[]),e}();return((e,t,n)=>{const i=o.useRef(null),r=o.useRef(e);o.useEffect(()=>{r.current=e}),o.useEffect(()=>{if("number"==typeof t&&"number"==typeof n){const e=()=>{const o=s(t,n);i.current=window.setTimeout(()=>{r.current(),e()},o)};e()}return()=>window.clearTimeout(i.current)},[t,n]),o.useCallback(function(){window.clearTimeout(i.current)},[])})(()=>{const e=u(),t=Date.now(),n=i.filter(e=>t-e.createdAt<750);n.push(e),r(n)},l?null:50,l?null:100),o.createElement(m,{hide:t},i.map(e=>o.createElement(f,{key:e.id,color:e.color,size:e.size,style:e.style})),o.createElement(b,null,n))}},4146:function(e,t,n){var o=n(4363),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return o.isMemo(e)?s:a[e.$$typeof]||i}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=s;var d=Object.defineProperty,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,o){if("string"!=typeof n){if(h){var i=p(n);i&&i!==h&&e(t,i,o)}var s=c(n);u&&(s=s.concat(u(n)));for(var a=l(t),m=l(n),v=0;v<s.length;++v){var y=s[v];if(!(r[y]||o&&o[y]||m&&m[y]||a&&a[y])){var b=f(n,y);try{d(t,y,b)}catch(w){}}}}return t}},4363:function(e,t,n){e.exports=n(2799)},4448:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(6540),d=(o=l)&&o.__esModule?o:{default:o},c=n(5556),u=n(3546),f=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),p={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:f.isRequired,outEffect:(0,c.oneOfType)([f,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},h={transitionGroup:c.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.isOn=void 0===e.when||!!e.when,o.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:o.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},o.savedChild=!1,o.isShown=!1,u.observerMode?o.handleObserve=o.handleObserve.bind(o):(o.revealHandler=o.makeHandler(o.reveal),o.resizeHandler=o.makeHandler(o.resize)),o.saveRef=o.saveRef.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var o=this,i=n.forever,r=n.count,s=n.delay,a=n.duration;if(!i){this.animationEndTimeout=window.setTimeout(function(){o&&o.el&&(o.animationEndTimeout=void 0,e.call(o))},s+(a+(t?a:0)*r))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var o=n.duration+(t.cascade?n.duration:0),i=this.isOn?this.getDimensionValue():0,r=void 0,s=void 0;if(t.collapseOnly)r=n.duration/3,s=n.delay;else{var a=o>>2,l=a>>1;r=a,s=n.delay+(this.isOn?0:o-a-l),e.style.animationDuration=o-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:i,transition:"height "+r+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],o="style"in n&&n.style.animationName||void 0,i=void 0;e.collapseOnly?i={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(o=n.make),i={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:o}),className:n.className}),this.setState(e.collapse?this.collapse(i,e,n):i),t?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){r(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):n||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,o=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!o||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return d.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):d.default.Children.toArray(e);var o=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=o.duration,a=o.reverse,l=n.length,c=2*r;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),r=c/2);var f=a?l:0;return n.map(function(e){return"object"===(void 0===e?"undefined":i(e))&&e?d.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(a?f--:f++,0,l,r,c))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===i(this.props.children)){var e=d.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:d.default.createElement("div",null,e)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,o=t.props,i=o.style,r=o.className,a=o.children,l=this.props.disabled?r:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(n=this.cascade(a),c=s({},i,{opacity:1})):c=this.props.disabled?i:s({},i,this.state.style);var f=s({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:c},this.props.refProp,this.saveRef)),p=d.default.cloneElement(t,f,e?n||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,o=window.pageYOffset-t.getTop(this.el),i=Math.min(n,window.innerHeight)*(u.globalHide?e.fraction:0);return o>i-window.innerHeight&&o<n-i}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(d.default.Component);m.propTypes=p,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=h,m.displayName="RevealBase",t.default=m,e.exports=t.default},7437:function(e,t,n){n.d(t,{i7:function(){return c}});var o,i,r=n(5515),s=n(6540),a=(n(1287),n(5631)),l=(n(2309),n(4634),n(4146),function(e,t){var n=arguments;if(null==t||!r.h.call(t,"css"))return s.createElement.apply(void 0,n);var o=n.length,i=new Array(o);i[0]=r.E,i[1]=(0,r.c)(e,t);for(var a=2;a<o;a++)i[a]=n[a];return s.createElement.apply(null,i)});o=l||(l={}),i||(i=o.JSX||(o.JSX={}));function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.J)(t)}function c(){var e=d.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},7774:function(e,t,n){function o(e,t){var n=t.distance,o=t.left,i=t.right,r=t.up,s=t.down,l=t.top,d=t.bottom,c=t.big,f=t.mirror,p=t.opposite,h=(n?n.toString():0)+((o?1:0)|(i?2:0)|(l||s?4:0)|(d||r?8:0)|(f?16:0)|(p?32:0)|(e?64:0)|(c?128:0));if(u.hasOwnProperty(h))return u[h];var m=o||i||r||s||l||d,v=void 0,y=void 0;if(m){if(!f!=!(e&&p)){var b=[i,o,d,l,s,r];o=b[0],i=b[1],l=b[2],d=b[3],r=b[4],s=b[5]}var w=n||(c?"2000px":"100%");v=o?"-"+w:i?w:"0",y=s||l?"-"+w:r||d?w:"0"}return u[h]=(0,a.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[h]}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,i=(e.out,e.forever),r=e.timeout,s=e.duration,l=void 0===s?a.defaults.duration:s,c=e.delay,u=void 0===c?a.defaults.delay:c,f=e.count,p=void 0===f?a.defaults.count:f,h=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===r?l:r,delay:u,forever:i,count:p,style:{animationFillMode:"both"},reverse:h.left};return t?(0,d.default)(h,m,m,n):m}Object.defineProperty(t,"__esModule",{value:!0});var r,s=n(5556),a=n(3546),l=n(3032),d=(r=l)&&r.__esModule?r:{default:r},c={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},u={};i.propTypes=c,t.default=i,e.exports=t.default}}]);
//# sourceMappingURL=590e3d7a5cf8943140fd64c980a35fdfa8200e5a-cdafa987f9865c8f7359.js.map