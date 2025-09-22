(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[662],{115:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!==s--;)if(!o(e[s],i[s]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!o(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!==s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!==s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!==s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!o(e[l[s]],i[l[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},1287:function(e,t,r){"use strict";var n;r.d(t,{s:function(){return i}});var a=r(6540),o=!!(n||(n=r.t(a,2))).useInsertionEffect&&(n||(n=r.t(a,2))).useInsertionEffect,i=o||function(e){return e()};o||a.useLayoutEffect},2098:function(e,t,r){"use strict";var n,a=r(6540),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map(function(e){return e.props})),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},2309:function(e,t,r){"use strict";r.d(t,{A:function(){return ae}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),a=Math.abs,o=String.fromCharCode,i=Object.assign;function c(e){return e.trim()}function s(e,t,r){return e.replace(t,r)}function l(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function d(e){return e.length}function p(e){return e.length}function g(e,t){return t.push(e),e}var m=1,y=1,M=0,h=0,v=0,b="";function x(e,t,r,n,a,o,i){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:m,column:y,length:i,return:""}}function N(e,t){return i(x("",null,null,"",null,null,0),e,{length:-e.length},t)}function I(){return v=h>0?u(b,--h):0,y--,10===v&&(y=1,m--),v}function j(){return v=h<M?u(b,h++):0,y++,10===v&&(y=1,m++),v}function w(){return u(b,h)}function T(){return h}function A(e,t){return f(b,e,t)}function k(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D(e){return m=y=1,M=d(b=e),h=0,[]}function z(e){return b="",e}function O(e){return c(A(h-1,E(91===e?e+2:40===e?e+1:e)))}function S(e){for(;(v=w())&&v<33;)j();return k(e)>2||k(v)>3?"":" "}function C(e,t){for(;--t&&j()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return A(e,T()+(t<6&&32==w()&&32==j()))}function E(e){for(;j();)switch(v){case e:return h;case 34:case 39:34!==e&&39!==e&&E(v);break;case 40:41===e&&E(e);break;case 92:j()}return h}function L(e,t){for(;j()&&e+v!==57&&(e+v!==84||47!==w()););return"/*"+A(t,h-1)+"*"+o(47===e?e:j())}function P(e){for(;!k(w());)j();return A(e,h)}var Y="-ms-",R="-moz-",U="-webkit-",Q="comm",G="rule",_="decl",Z="@keyframes";function F(e,t){for(var r="",n=p(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function B(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case _:return e.return=e.return||e.value;case Q:return"";case Z:return e.return=e.value+"{"+F(e.children,n)+"}";case G:e.value=e.props.join(",")}return d(r=F(e.children,n))?e.return=e.value+"{"+r+"}":""}function W(e){return z($("",null,null,null,[""],e=D(e),0,[0],e))}function $(e,t,r,n,a,i,c,f,p){for(var m=0,y=0,M=c,h=0,v=0,b=0,x=1,N=1,A=1,k=0,D="",z=a,E=i,Y=n,R=D;N;)switch(b=k,k=j()){case 40:if(108!=b&&58==u(R,M-1)){-1!=l(R+=s(O(k),"&","&\f"),"&\f")&&(A=-1);break}case 34:case 39:case 91:R+=O(k);break;case 9:case 10:case 13:case 32:R+=S(b);break;case 92:R+=C(T()-1,7);continue;case 47:switch(w()){case 42:case 47:g(J(L(j(),T()),t,r),p);break;default:R+="/"}break;case 123*x:f[m++]=d(R)*A;case 125*x:case 59:case 0:switch(k){case 0:case 125:N=0;case 59+y:-1==A&&(R=s(R,/\f/g,"")),v>0&&d(R)-M&&g(v>32?X(R+";",n,r,M-1):X(s(R," ","")+";",n,r,M-2),p);break;case 59:R+=";";default:if(g(Y=H(R,t,r,m,y,a,f,D,z=[],E=[],M),i),123===k)if(0===y)$(R,t,Y,Y,z,i,M,f,E);else switch(99===h&&110===u(R,3)?100:h){case 100:case 108:case 109:case 115:$(e,Y,Y,n&&g(H(e,Y,Y,0,0,a,f,D,a,z=[],M),E),a,E,M,f,n?z:E);break;default:$(R,Y,Y,Y,[""],E,0,f,E)}}m=y=v=0,x=A=1,D=R="",M=c;break;case 58:M=1+d(R),v=b;default:if(x<1)if(123==k)--x;else if(125==k&&0==x++&&125==I())continue;switch(R+=o(k),k*x){case 38:A=y>0?1:(R+="\f",-1);break;case 44:f[m++]=(d(R)-1)*A,A=1;break;case 64:45===w()&&(R+=O(j())),h=w(),y=M=d(D=R+=P(T())),k++;break;case 45:45===b&&2==d(R)&&(x=0)}}return i}function H(e,t,r,n,o,i,l,u,d,g,m){for(var y=o-1,M=0===o?i:[""],h=p(M),v=0,b=0,N=0;v<n;++v)for(var I=0,j=f(e,y+1,y=a(b=l[v])),w=e;I<h;++I)(w=c(b>0?M[I]+" "+j:s(j,/&\f/g,M[I])))&&(d[N++]=w);return x(e,t,r,0===o?G:u,d,g,m)}function J(e,t,r){return x(e,t,r,Q,o(v),f(e,2,-2),0)}function X(e,t,r,n){return x(e,t,r,_,f(e,0,n),f(e,n+1,-1),n)}var q=function(e,t,r){for(var n=0,a=0;n=a,a=w(),38===n&&12===a&&(t[r]=1),!k(a);)j();return A(e,h)},V=function(e,t){return z(function(e,t){var r=-1,n=44;do{switch(k(n)){case 0:38===n&&12===w()&&(t[r]=1),e[r]+=q(h-1,t,r);break;case 2:e[r]+=O(n);break;case 4:if(44===n){e[++r]=58===w()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=o(n)}}while(n=j());return e}(D(e),t))},K=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||K.get(r))&&!n){K.set(e,!0);for(var a=[],o=V(t,a),i=r.props,c=0,s=0;c<o.length;c++)for(var l=0;l<i.length;l++,s++)e.props[s]=a[c]?o[c].replace(/&\f/g,i[l]):i[l]+" "+o[c]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function re(e,t){switch(function(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+R+e+Y+e+e;case 6828:case 4268:return U+e+Y+e+e;case 6165:return U+e+Y+"flex-"+e+e;case 5187:return U+e+s(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return U+e+Y+"flex-item-"+s(e,/flex-|-self/,"")+e;case 4675:return U+e+Y+"flex-line-pack"+s(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+Y+s(e,"shrink","negative")+e;case 5292:return U+e+Y+s(e,"basis","preferred-size")+e;case 6060:return U+"box-"+s(e,"-grow","")+U+e+Y+s(e,"grow","positive")+e;case 4554:return U+s(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return s(s(s(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return s(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+R+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~l(e,"stretch")?re(s(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,d(e)-3-(~l(e,"!important")&&10))){case 107:return s(e,":",":"+U)+e;case 101:return s(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(45===u(e,14)?"inline-":"")+"box$3$1"+U+"$2$3$1"+Y+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return U+e+Y+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Y+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Y+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+Y+e+e}return e}var ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case _:e.return=re(e.value,e.length);break;case Z:return F([N(e,{value:s(e.value,"@","@"+U)})],n);case G:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return F([N(e,{props:[s(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return F([N(e,{props:[s(t,/:(plac\w+)/,":"+U+"input-$1")]}),N(e,{props:[s(t,/:(plac\w+)/,":-moz-$1")]}),N(e,{props:[s(t,/:(plac\w+)/,Y+"input-$1")]})],n)}return""})}}],ae=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var a,o,i=e.stylisPlugins||ne,c={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;s.push(e)});var l,u,f,d,g=[B,(d=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],m=(u=[ee,te].concat(i,g),f=p(u),function(e,t,r,n){for(var a="",o=0;o<f;o++)a+=u[o](e,t,r,n)||"";return a});o=function(e,t,r,n){l=r,F(W(e?e+"{"+t.styles+"}":t.styles),m),n&&(y.inserted[t.name]=!0)};var y={key:t,sheet:new n({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:o};return y.sheet.hydrate(s),y}},2852:function(e,t,r){"use strict";r.d(t,{A:function(){return B}});var n=r(6540),a=r(3467),o=r(4810),i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0NyA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE0N180KSI+CjxwYXRoIGQ9Ik04LjQzMTA1IDE1LjQ3NTZMLTAuMDUwNzgxMiAyMy45NTc1TDExLjUxNDEgMzUuNTIyM0wxOS45OTU5IDI3LjA0MDVMOC40MzEwNSAxNS40NzU2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkuNTkzODMgMTMuNDM2MkwyMy4zOTMzIDI3LjIzNTZDMjMuMzkzMyAyNy4yMzU2IDIyLjExOSAyOC40NjIyIDIwLjg4NjIgMjkuNjc1MUMxOS43NTQxIDMwLjc4OSAxOC41MjI0IDMxLjYzOCAxOS40MzE1IDMyLjc0OTJDMjAuMzQwNyAzMy44NjA0IDE4LjA2NzggMzIuNTIxOSAxOC4wNjc4IDMyLjUyMTlMMTcuNTIyMyAzMy4wMjJMMTcuNjEzMyAzNC44NDAyQzE2LjM0MDUgMzMuNDc2NSAxNS4xNDQzIDM1LjM2OSAxNC4xMDExIDM2LjUyNzhMMC4zMDE2NjUgMjIuNzI4M0w5LjU5MzgzIDEzLjQzNjJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMzguMTQxIDE0Ljk3OTlMNDYuNjIyOCAyMy40NjE3TDM0LjA0NjIgMzYuMDM4M0wyNS41NjQ0IDI3LjU1NjVMMzguMTQxIDE0Ljk3OTlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTUuOTUxMSAzNS41NzRDMTYuMzA2MSAzNS4yMTkgMTYuODgxNyAzNS4yMTkgMTcuMjM2OCAzNS41NzRMMTguMjY1NCAzNi42MDI2QzE4LjYyMDQgMzYuOTU3NiAxOC42MjA0IDM3LjUzMzMgMTguMjY1NCAzNy44ODgzTDE2Ljc0NTYgMzkuNDA4MUwxNC40MzEzIDM3LjA5MzhMMTUuOTUxMSAzNS41NzRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTguODkwNSAzOC4zMzI4QzE5LjI0NTUgMzcuOTc3NyAxOS44MjEyIDM3Ljk3NzcgMjAuMTc2MiAzOC4zMzI4TDIxLjEzOTcgMzkuMjk2MkMyMS40OTQ3IDM5LjY1MTMgMjEuNDk0NyA0MC4yMjY5IDIxLjEzOTcgNDAuNTgyTDE5LjYxOTkgNDIuMTAxN0wxNy4zNzA3IDM5Ljg1MjVMMTguODkwNSAzOC4zMzI4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIxLjU3MjIgNDEuMDI5QzIxLjkyNzMgNDAuNjczOSAyMi41MDI5IDQwLjY3MzkgMjIuODU4IDQxLjAyOUwyNC41NzU1IDQyLjc0NjVMMjIuNDI4IDQ0Ljg5NDFMMjAuMDY3NiA0Mi41MzM2TDIxLjU3MjIgNDEuMDI5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTM3LjE4MzkgMTQuNTY2NEwzOS40OTgyIDE2Ljg4MDdMMjMuMjMyNSAzMy4xNDY0QzIyLjUyMjQgMzMuODU2NSAyMS4zNzExIDMzLjg1NjUgMjAuNjYxIDMzLjE0NjRMMjAuMjc1MyAzMi43NjA3QzE5LjkyMDMgMzIuNDA1NiAxOS45MjAzIDMxLjgzIDIwLjI3NTMgMzEuNDc1TDM3LjE4MzkgMTQuNTY2NFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMy4yNzcgMzAuNTA2TDE1LjIwNjIgMjguNTc2OEwyOC40MjE0IDQxLjc5MkwyNi40OTIxIDQzLjcyMTJMMTMuMjc3IDMwLjUwNloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yNS4xNjA3IDMyLjQxMTFMMjcuMTg1OSAzMC4zODU4TDMzLjcwODkgMzYuOTA4OEwzMS42ODM2IDM4LjkzNEwyNS4xNjA3IDMyLjQxMTFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjIuNjE1IDM0Ljk1NjVMMjQuNjQwMyAzMi45MzEzTDMxLjE2MzIgMzkuNDU0MkwyOS4xMzggNDEuNDc5NUwyMi42MTUgMzQuOTU2NVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMS45MDk0IDM0LjM0MTZDMjIuNTMwMSAzNC40Mjc0IDIzLjE1NzEgMzQuMjM1OSAyMy42MjQxIDMzLjgxODFMMjQuNjE1MyAzMi45MzEzTDI0LjE2MDcgMzYuNDc2OUwyMS45MDk0IDM0LjM0MTZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjMuNTIzNiAxMS42MjIzTDI3Ljg5NSAxNS45OTM4TDIzLjUyMzYgMjAuMzY1MkwxOS4xNTIxIDE1Ljk5MzhMMjMuNTIzNiAxMS42MjIzWiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8cmVjdCB4PSIyMy41MjM0IiB5PSIxLjA5NjI3IiB3aWR0aD0iMzIuMDkyOCIgaGVpZ2h0PSIzMi4wOTI0IiByeD0iOS41IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAyMy41MjM0IDEuMDk2MjcpIiBzdHJva2U9ImJsYWNrIi8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE0N180Ij4KPHJlY3QgeD0iMjMuNTIzNCIgeT0iMC4zODkxNiIgd2lkdGg9IjMzLjA5MjgiIGhlaWdodD0iMzMuMDkyNCIgcng9IjEwIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAyMy41MjM0IDAuMzg5MTYpIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";const c="@media (max-width: 800px)",s=a.A.div`
  display: flex;
  ${c} {
    display: none;
  }
`,l=a.A.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  inset-inline: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`,u=a.A.nav`
  pointer-events: auto;
  margin-top: 2rem;
  height: 4rem;
  width: min(92vw, 58rem);
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 100px;
  background: #fff;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
`,f=a.A.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,d=a.A.div`
  flex: 1;
`,p=a.A.div`
  display: flex;
  align-items: center;
`,g=(0,a.A)(o.N_)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 0 0.5rem;
`,m=a.A.img`
  height: 2.5rem;
  width: auto;
`,y=a.A.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,M=(0,a.A)(o.N_)`
  /* theme vars */
  --grad: var(
    --Gradient,
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );
  --active-underline: var(
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );

  font-family: "InstrumentSans", system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;
  text-decoration: none;
  color: #000;
  position: relative;
  transition: color 200ms ease, opacity 200ms ease;

  /* subtle base hover */
  &:hover {
    opacity: 0.85;
  }

  /* gradient text on hover/focus (with safe fallback) */
  &:hover,
  &:focus-visible {
    opacity: 1;
    outline: none;
  }
  @supports (-webkit-background-clip: text) or (background-clip: text) {
    &:hover,
    &:focus-visible {
      background: var(--grad);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }

  /* underline base (hidden) */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    height: 2px;
    border-radius: 2px;
    background: transparent;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 200ms ease, background 200ms ease, opacity 200ms ease;
  }

  /* gradient underline on hover/focus */
  &:hover::after,
  &:focus-visible::after {
    background: var(--grad);
    transform: scaleX(1);
  }

  /* active state underline (solid/accent) */
  &.active::after {
    background: var(--active-underline);
    transform: scaleX(1);
  }
`,h=(0,a.A)(o.N_)`
  --grad: var(
    --Gradient,
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 12px 12px;
  border: 1.5px solid #000;
  border-radius: 9999px;
  background: #000;
  color: #fff;
  text-decoration: none;
  font: 500 16px InstrumentSans;
  transition: background 0.18s, color 0.18s, transform 0.18s, border-color 0.18s;
  &:hover {
    background: var(--grad);
    color: #fff;
    border-color: transparent;
  }
`,v=a.A.header`
  display: none;
  ${c} {
    display: block;
    position: relative;
    z-index: 1000;
    width: 100%;
  }
`,b=a.A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`,x=a.A.button`
  --bar: 2px;
  width: 36px;
  height: 28px;
  position: relative;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;

  &::before,
  &::after,
  span {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: var(--bar);
    background: #000;
    border-radius: 1px;
    transition: transform 0.2s, opacity 0.2s;
  }
  &::before {
    top: 4px;
  }
  &::after {
    bottom: 4px;
  }
  span {
    top: 50%;
    transform: translateY(-50%);
  }

  &[data-open="true"]::before {
    transform: translateY(10px) rotate(45deg);
  }
  &[data-open="true"]::after {
    transform: translateY(-10px) rotate(-45deg);
  }
  &[data-open="true"] span {
    opacity: 0;
  }
`,N=(0,a.A)("nav",{shouldForwardProp:e=>"$open"!==e})`
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-height: ${e=>{let{$open:t}=e;return t?"320px":"0"}};
  transition: max-height 0.25s ease;
`,I=a.A.div`
  display: grid;
  gap: 8px;
  padding: 12px 16px 16px;
`,j=(0,a.A)(o.N_)`
  display: block;
  padding: 10px 4px;
  color: #000;
  text-decoration: none;
  font: 500 18px InstrumentSans;
`,w=(0,a.A)(o.N_)`
  --grad: var(
    --Gradient,
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border: 1.5px solid #000;
  border-radius: 9999px;
  background: #000;
  color: #fff;
  text-decoration: none;
  font: 600 16px InstrumentSans;
  margin-top: 8px;
  &:hover {
    background: var(--grad);
    border-color: transparent;
  }
`;function T(){const{0:e,1:t}=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(s,null,n.createElement(l,null,n.createElement(u,null,n.createElement(f,null,n.createElement(g,{to:"/"},n.createElement(m,{src:i,alt:"Nova Logo"})),n.createElement(y,null,n.createElement(M,{to:"/about",activeClassName:"active"},"about"),n.createElement(M,{to:"/work",activeClassName:"active"},"work"),n.createElement(M,{to:"/team",activeClassName:"active"},"our team"),n.createElement(M,{to:"/join",activeClassName:"active"},"for students"))),n.createElement(d,null),n.createElement(p,null,n.createElement(h,{to:"/contact"},"Contact Us"))))),n.createElement(v,null,n.createElement(b,null,n.createElement(g,{to:"/"},n.createElement(m,{src:i,alt:"Nova Logo"})),n.createElement(x,{"aria-label":"Open navigation menu","aria-controls":"mobile-menu","aria-expanded":e,"data-open":e,onClick:()=>t(e=>!e)},n.createElement("span",null))),n.createElement(N,{id:"mobile-menu",$open:e},n.createElement(I,null,n.createElement(j,{to:"/about",onClick:()=>t(!1)},"About"),n.createElement(j,{to:"/work",onClick:()=>t(!1)},"Work"),n.createElement(j,{to:"/team",onClick:()=>t(!1)},"Our Team"),n.createElement(j,{to:"/join",onClick:()=>t(!1)},"For Students"),n.createElement(w,{to:"/contact",onClick:()=>t(!1)},"Contact Us")))))}var A=r(1612),k="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4OF8yNjUpIj4KPHBhdGggZD0iTTEwLjA5OTMgMTguMTYzOEwzLjA1MTc2ZS0wNSAyOC4yNjMxTDEzLjc3MDIgNDIuMDMzMkwyMy44Njk1IDMxLjkzNEwxMC4wOTkzIDE4LjE2MzhaIiBmaWxsPSIjRkFGQ0ZGIi8+CjxwYXRoIGQ9Ik0xMS40ODM4IDE1LjczNTRMMjcuOTE0NyAzMi4xNjYzQzI3LjkxNDcgMzIuMTY2MyAyNi4zOTc1IDMzLjYyNjggMjQuOTI5NSAzNS4wNzExQzIzLjU4MTUgMzYuMzk3MyAyMi4xMTUgMzcuNDA4MyAyMy4xOTc1IDM4LjczMTNDMjQuMjggNDAuMDU0NCAyMS41NzM3IDM4LjQ2MDcgMjEuNTczNyAzOC40NjA3TDIwLjkyNDIgMzkuMDU2MUwyMS4wMzI1IDQxLjIyMTFDMTkuNTE3IDM5LjU5NzQgMTguMDkyNyA0MS44NTA3IDE2Ljg1MDYgNDMuMjMwNUwwLjQxOTY4NiAyNi43OTk1TDExLjQ4MzggMTUuNzM1NFoiIGZpbGw9IiNGQUZDRkYiLz4KPHBhdGggZD0iTTQ1LjQ3NDcgMTcuNTczNUw1NS41NzQgMjcuNjcyOEw0MC41OTkxIDQyLjY0NzZMMzAuNDk5OCAzMi41NDg0TDQ1LjQ3NDcgMTcuNTczNVoiIGZpbGw9IiNGQUZDRkYiLz4KPHBhdGggZD0iTTE5LjA1MzMgNDIuMDk0OEMxOS40NzYxIDQxLjY3MjEgMjAuMTYxNSA0MS42NzIxIDIwLjU4NDIgNDIuMDk0OEwyMS44MDg5IDQzLjMxOTVDMjIuMjMxNyA0My43NDIzIDIyLjIzMTcgNDQuNDI3NyAyMS44MDg5IDQ0Ljg1MDRMMTkuOTk5NCA0Ni42NkwxNy4yNDM3IDQzLjkwNDRMMTkuMDUzMyA0Mi4wOTQ4WiIgZmlsbD0iI0ZBRkNGRiIvPgo8cGF0aCBkPSJNMjIuNTUzMyA0NS4zNzk2QzIyLjk3NiA0NC45NTY5IDIzLjY2MTQgNDQuOTU2OSAyNC4wODQyIDQ1LjM3OTZMMjUuMjMxNCA0Ni41MjY4QzI1LjY1NDEgNDYuOTQ5NiAyNS42NTQxIDQ3LjYzNSAyNS4yMzE0IDQ4LjA1NzdMMjMuNDIxOCA0OS44NjczTDIwLjc0MzcgNDcuMTg5MkwyMi41NTMzIDQ1LjM3OTZaIiBmaWxsPSIjRkFGQ0ZGIi8+CjxwYXRoIGQ9Ik0yNS43NDY0IDQ4LjU5QzI2LjE2OTIgNDguMTY3MyAyNi44NTQ2IDQ4LjE2NzMgMjcuMjc3MyA0OC41OUwyOS4zMjI0IDUwLjYzNTFMMjYuNzY1NCA1My4xOTIxTDIzLjk1NDggNTAuMzgxNkwyNS43NDY0IDQ4LjU5WiIgZmlsbD0iI0ZBRkNGRiIvPgo8cGF0aCBkPSJNNDQuMzM1MSAxNy4wODEyTDQ3LjA5MDcgMTkuODM2OEwyNy43MjMzIDM5LjIwNDNDMjYuODc3OCA0MC4wNDk4IDI1LjUwNyA0MC4wNDk4IDI0LjY2MTUgMzkuMjA0M0wyNC4yMDIyIDM4Ljc0NUMyMy43Nzk1IDM4LjMyMjMgMjMuNzc5NSAzNy42MzY5IDI0LjIwMjIgMzcuMjE0MUw0NC4zMzUxIDE3LjA4MTJaIiBmaWxsPSIjRkFGQ0ZGIi8+CjxwYXRoIGQ9Ik0xNS44NjkzIDM2LjA2MDRMMTguMTY2NCAzMy43NjMzTDMzLjkwMTYgNDkuNDk4NUwzMS42MDQ1IDUxLjc5NTZMMTUuODY5MyAzNi4wNjA0WiIgZmlsbD0iI0ZBRkNGRiIvPgo8cGF0aCBkPSJNMzAuMDE5MSAzOC4zMjg3TDMyLjQzMDYgMzUuOTE3M0w0MC4xOTc0IDQzLjY4NDFMMzcuNzg2IDQ2LjA5NTZMMzAuMDE5MSAzOC4zMjg3WiIgZmlsbD0iI0ZBRkNGRiIvPgo8cGF0aCBkPSJNMjYuOTg4IDQxLjM1OTZMMjkuMzk5NSAzOC45NDgxTDM3LjE2NjMgNDYuNzE0OUwzNC43NTQ5IDQ5LjEyNjRMMjYuOTg4IDQxLjM1OTZaIiBmaWxsPSIjRkFGQ0ZGIi8+CjxwYXRoIGQ9Ik0yNi4xNDc4IDQwLjYyNzRDMjYuODg2OSA0MC43Mjk1IDI3LjYzMzUgNDAuNTAxNiAyOC4xODk2IDQwLjAwNDFMMjkuMzY5NyAzOC45NDgxTDI4LjgyODUgNDMuMTY5OUwyNi4xNDc4IDQwLjYyNzRaIiBmaWxsPSIjRkFGQ0ZGIi8+CjxwYXRoIGQ9Ik0yOC4wNjk5IDEzLjU3NTdMMzMuMjc0OSAxOC43ODA3TDI4LjA2OTkgMjMuOTg1OEwyMi44NjQ4IDE4Ljc4MDdMMjguMDY5OSAxMy41NzU3WiIgZmlsbD0iI0ZBRkNGRiIvPgo8L2c+CjxyZWN0IHg9IjI4LjA3IiB5PSIxLjA0MjE0IiB3aWR0aD0iMzguMjEyNyIgaGVpZ2h0PSIzOC4yMTIyIiByeD0iMTEuMzExNiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMjguMDcgMS4wNDIxNCkiIHN0cm9rZT0iI0ZBRkNGRiIgc3Ryb2tlLXdpZHRoPSIxLjE5MDY5Ii8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4OF8yNjUiPgo8cmVjdCB4PSIyOC4wNyIgeT0iMC4yMDAxOTUiIHdpZHRoPSIzOS40MDM0IiBoZWlnaHQ9IjM5LjQwMjkiIHJ4PSIxMS45MDY5IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAyOC4wNyAwLjIwMDE5NSkiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";const D="@media (max-width: 900px)",z=a.A.footer`
  background: linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%);
  color: #fff;
`,O=a.A.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 56px) clamp(16px, 4vw, 32px);
`,S=a.A.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: clamp(16px, 3vw, 40px);

  ${D} {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 24px;
  }
`,C=a.A.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 16px;
  row-gap: 6px;

  ${D} {
    justify-items: center;
    grid-template-columns: auto 1fr;
  }
`,E=a.A.img`
  width: clamp(36px, 5vw, 56px);
  height: auto;
  grid-row: span 2;
`,L=a.A.h1`
  margin: 0;
  font-family: "Unbounded", system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #fff;
  font-size: clamp(22px, 4.4vw, 40px);
  line-height: 1.1;
  text-align: center;

  ${D} {
    grid-column: 1 / -1;
  }
`,P=a.A.p`
  margin: 0;
  color: #ffffff;
  opacity: 0.95;
  font-family: InstrumentSans, system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-size: clamp(12px, 1.6vw, 16px);
  text-align: center;

  a {
    color: #ffffff;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  ${D} {
    grid-column: 1 / -1;
  }
`,Y=a.A.div`
  display: grid;
  gap: 16px;
  justify-items: end;

  ${D} {
    justify-items: center;
  }
`,R=a.A.nav`
  display: flex;
  gap: clamp(16px, 3vw, 32px);
  flex-wrap: wrap;
`,U=(0,a.A)(o.N_)`
  color: #ffffff;
  text-decoration: none;
  font-family: InstrumentSans, system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-size: clamp(14px, 1.8vw, 18px);
  letter-spacing: 0.01em;
  transition: opacity 160ms ease;

  &:hover,
  &:focus-visible {
    opacity: 0.85;
    outline: none;
  }
`,Q=a.A.div`
  display: flex;
  gap: 16px;
`,G=a.A.a`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #ffffff;
  color: #6dbff2; /* icon color */
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  transition: transform 160ms ease, box-shadow 160ms ease, color 160ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
    color: #b78df2;
  }
`;function _(){const e=new Date,t=e.toLocaleString("default",{month:"long"}),r=e.getFullYear();return n.createElement(z,null,n.createElement(O,null,n.createElement(S,null,n.createElement(C,null,n.createElement(E,{src:k,alt:"Nova logo"}),n.createElement(L,null,"Nova, Tech for Good"),n.createElement(P,null,n.createElement("a",{href:"mailto:hello@novaforgood.org"},"hello@novaforgood.org")," | Last updated ",t,", ",r)),n.createElement(Y,null,n.createElement(R,{"aria-label":"Footer navigation"},n.createElement(U,{to:"/about"},"About"),n.createElement(U,{to:"/work"},"Work"),n.createElement(U,{to:"/team"},"Our Team"),n.createElement(U,{to:"/join"},"For Students"),n.createElement(U,{to:"/contact"},"Contact")),n.createElement(Q,null,n.createElement(G,{href:"https://www.facebook.com/novaforgood",target:"_blank",rel:"noreferrer","aria-label":"Facebook"},n.createElement(A.ok6,{size:18})),n.createElement(G,{href:"https://www.instagram.com/novaforgood/",target:"_blank",rel:"noreferrer","aria-label":"Instagram"},n.createElement(A.ao$,{size:18})),n.createElement(G,{href:"https://github.com/novaforgood",target:"_blank",rel:"noreferrer","aria-label":"GitHub"},n.createElement(A.hL4,{size:18})))))))}const Z=(0,a.A)("div")`
  display: flex;
  flex-direction: column;
  position: relative;
`,F=(0,a.A)("div",{shouldForwardProp:e=>"home"!==e})`
  /* If home, no padding. Otherwise, add space for the floating header */
  padding-top: ${e=>{let{home:t}=e;return t?"0":"clamp(5rem, 8vw, 6.5rem)"}};

  ${"@media (max-width: 800px)"} {
    padding-top: 0;
  }
`;function B(e){let{home:t=!1,children:r}=e;return n.createElement(Z,null,n.createElement(T,null),n.createElement(F,{home:t},r),n.createElement(_,null))}},3467:function(e,t,r){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(null,arguments)}r.d(t,{A:function(){return w}});var a=r(5515);var o={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},i=r(6289),c=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!=typeof e},f=(0,i.A)(function(e){return l(e)?e:e.replace(c,"-$&").toLowerCase()}),d=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(s,function(e,t,r){return g={name:t,styles:r,next:g},t})}return 1===o[e]||l(e)||"number"!=typeof t||0===t?t:t+"px"};function p(e,t,r){if(null==r)return"";var n=r;if(void 0!==n.__emotion_styles)return n;switch(typeof r){case"boolean":return"";case"object":var a=r;if(1===a.anim)return g={name:a.name,styles:a.styles,next:g},a.name;var o=r;if(void 0!==o.styles){var i=o.next;if(void 0!==i)for(;void 0!==i;)g={name:i.name,styles:i.styles,next:g},i=i.next;return o.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=p(e,t,r[a])+";";else for(var o in r){var i=r[o];if("object"!=typeof i){var c=i;null!=t&&void 0!==t[c]?n+=o+"{"+t[c]+"}":u(c)&&(n+=f(o)+":"+d(o,c)+";")}else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=p(e,t,i);switch(o){case"animation":case"animationName":n+=f(o)+":"+s+";";break;default:n+=o+"{"+s+"}"}}else for(var l=0;l<i.length;l++)u(i[l])&&(n+=f(o)+":"+d(o,i[l])+";")}return n}(e,t,r);case"function":if(void 0!==e){var c=g,s=r(e);return g=c,p(e,t,s)}}var l=r;if(null==t)return l;var m=t[l];return void 0!==m?m:l}var g,m=/label:\s*([^\s;{]+)\s*(;|$)/g;var y=r(1287);var M=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},h=r(6540),v=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,b=(0,i.A)(function(e){return v.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),x=function(e){return"theme"!==e},N=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?b:x},I=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},j=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return M(t,r,n),(0,y.s)(function(){return function(e,t,r){M(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)}),null},w=(r(4634),function e(t,r){var o,i,c=t.__emotion_real===t,s=c&&t.__emotion_base||t;void 0!==r&&(o=r.label,i=r.target);var l=I(t,r,c),u=l||N(s),f=!u("as");return function(){var d=arguments,y=c&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&y.push("label:"+o+";"),null==d[0]||void 0===d[0].raw)y.push.apply(y,d);else{var M=d[0];y.push(M[0]);for(var v=d.length,b=1;b<v;b++)y.push(d[b],M[b])}var x=(0,a.w)(function(e,t,r){var n,o,c,d,M=f&&e.as||s,v="",b=[],x=e;if(null==e.theme){for(var I in x={},e)x[I]=e[I];x.theme=h.useContext(a.T)}"string"==typeof e.className?(n=t.registered,o=b,c=e.className,d="",c.split(" ").forEach(function(e){void 0!==n[e]?o.push(n[e]+";"):e&&(d+=e+" ")}),v=d):null!=e.className&&(v=e.className+" ");var w=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";g=void 0;var o=e[0];null==o||void 0===o.raw?(n=!1,a+=p(r,t,o)):a+=o[0];for(var i=1;i<e.length;i++)a+=p(r,t,e[i]),n&&(a+=o[i]);m.lastIndex=0;for(var c,s="";null!==(c=m.exec(a));)s+="-"+c[1];var l=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+s;return{name:l,styles:a,next:g}}(y.concat(b),t.registered,x);v+=t.key+"-"+w.name,void 0!==i&&(v+=" "+i);var T=f&&void 0===l?N(M):u,A={};for(var k in e)f&&"as"===k||T(k)&&(A[k]=e[k]);return A.className=v,r&&(A.ref=r),h.createElement(h.Fragment,null,h.createElement(j,{cache:t,serialized:w,isStringTag:"string"==typeof M}),h.createElement(M,A))});return x.displayName=void 0!==o?o:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=s,x.__emotion_styles=y,x.__emotion_forwardProp=l,Object.defineProperty(x,"toString",{value:function(){return"."+i}}),x.withComponent=function(t,a){return e(t,n({},r,a,{shouldForwardProp:I(x,a,!0)})).apply(void 0,y)},x}}.bind(null));["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){w[e]=w(e)})},4084:function(e,t,r){"use strict";r.d(t,{k5:function(){return l}});var n=r(6540),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};function s(e){return e&&e.map(function(e,t){return n.createElement(e.tag,i({key:t},e.attr),s(e.child))})}function l(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var r,a=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var o=e.attr,s=e.title,l=c(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(a)}},4634:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5515:function(e,t,r){"use strict";r.d(t,{E:function(){return m},T:function(){return u},c:function(){return p},h:function(){return f},w:function(){return l}});var n=r(6540),a=r(2309);var o=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},i=r(5631),c=r(1287),s=n.createContext("undefined"!=typeof HTMLElement?(0,a.A)({key:"css"}):null),l=(s.Provider,function(e){return(0,n.forwardRef)(function(t,r){var a=(0,n.useContext)(s);return e(t,a,r)})}),u=n.createContext({});var f={}.hasOwnProperty,d="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",p=function(e,t){var r={};for(var n in t)f.call(t,n)&&(r[n]=t[n]);return r[d]=e,r},g=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return o(t,r,n),(0,c.s)(function(){return function(e,t,r){o(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)}),null},m=l(function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var o=e[d],c=[a],s="";"string"==typeof e.className?s=function(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(n+=r+" ")}),n}(t.registered,c,e.className):null!=e.className&&(s=e.className+" ");var l=(0,i.J)(c,void 0,n.useContext(u));s+=t.key+"-"+l.name;var p={};for(var m in e)f.call(e,m)&&"css"!==m&&m!==d&&(p[m]=e[m]);return p.className=s,r&&(p.ref=r),n.createElement(n.Fragment,null,n.createElement(g,{cache:t,serialized:l,isStringTag:"string"==typeof o}),n.createElement(o,p))})},5631:function(e,t,r){"use strict";r.d(t,{J:function(){return y}});var n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a=r(6289),o=!1,i=/[A-Z]|^ms/g,c=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},l=function(e){return null!=e&&"boolean"!=typeof e},u=(0,a.A)(function(e){return s(e)?e:e.replace(i,"-$&").toLowerCase()}),f=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(c,function(e,t,r){return g={name:t,styles:r,next:g},t})}return 1===n[e]||s(e)||"number"!=typeof t||0===t?t:t+"px"},d="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function p(e,t,r){if(null==r)return"";var n=r;if(void 0!==n.__emotion_styles)return n;switch(typeof r){case"boolean":return"";case"object":var a=r;if(1===a.anim)return g={name:a.name,styles:a.styles,next:g},a.name;var i=r;if(void 0!==i.styles){var c=i.next;if(void 0!==c)for(;void 0!==c;)g={name:c.name,styles:c.styles,next:g},c=c.next;return i.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=p(e,t,r[a])+";";else for(var i in r){var c=r[i];if("object"!=typeof c){var s=c;null!=t&&void 0!==t[s]?n+=i+"{"+t[s]+"}":l(s)&&(n+=u(i)+":"+f(i,s)+";")}else{if("NO_COMPONENT_SELECTOR"===i&&o)throw new Error(d);if(!Array.isArray(c)||"string"!=typeof c[0]||null!=t&&void 0!==t[c[0]]){var g=p(e,t,c);switch(i){case"animation":case"animationName":n+=u(i)+":"+g+";";break;default:n+=i+"{"+g+"}"}}else for(var m=0;m<c.length;m++)l(c[m])&&(n+=u(i)+":"+f(i,c[m])+";")}}return n}(e,t,r);case"function":if(void 0!==e){var s=g,m=r(e);return g=s,p(e,t,m)}}var y=r;if(null==t)return y;var M=t[y];return void 0!==M?M:y}var g,m=/label:\s*([^\s;{]+)\s*(;|$)/g;function y(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";g=void 0;var o=e[0];null==o||void 0===o.raw?(n=!1,a+=p(r,t,o)):a+=o[0];for(var i=1;i<e.length;i++){if(a+=p(r,t,e[i]),n)a+=o[i]}m.lastIndex=0;for(var c,s="";null!==(c=m.exec(a));)s+="-"+c[1];var l=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+s;return{name:l,styles:a,next:g}}},6289:function(e,t,r){"use strict";function n(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{A:function(){return n}})},8828:function(e){"use strict";e.exports=Object.assign},9945:function(e,t,r){"use strict";r.d(t,{A:function(){return ge}});var n,a,o,i,c=r(6540),s=r(5556),l=r.n(s),u=r(2098),f=r.n(u),d=r(115),p=r.n(d),g=r(8828),m=r.n(g),y="bodyAttributes",M="htmlAttributes",h="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(v).map(function(e){return v[e]}),"charset"),x="cssText",N="href",I="http-equiv",j="innerHTML",w="itemprop",T="name",A="property",k="rel",D="src",z="target",O={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},S="defaultTitle",C="defer",E="encodeSpecialCharacters",L="onChangeClientState",P="titleTemplate",Y=Object.keys(O).reduce(function(e,t){return e[O[t]]=t,e},{}),R=[v.NOSCRIPT,v.SCRIPT,v.STYLE],U="data-react-helmet",Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},B=function(e){var t=X(e,v.TITLE),r=X(e,P);if(r&&t)return r.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t});var n=X(e,S);return t||n||void 0},W=function(e){return X(e,L)||function(){}},$=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return _({},e,t)},{})},H=function(e,t){return t.filter(function(e){return void 0!==e[v.BASE]}).map(function(e){return e[v.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t},[])},J=function(e,t,r){var n={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+Q(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var a={};r.filter(function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||r===k&&"canonical"===e[r].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==j&&c!==x&&c!==w||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=m()({},n[c],a[c]);n[c]=s}return e},[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout(function(){q(e)},0)}),V=function(e){return clearTimeout(e)},K="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||q:r.g.requestAnimationFrame||q,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||V:r.g.cancelAnimationFrame||V,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ne=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;ie(v.BODY,n),ie(v.HTML,a),oe(f,d);var p={baseTag:ce(v.BASE,r),linkTags:ce(v.LINK,o),metaTags:ce(v.META,i),noscriptTags:ce(v.NOSCRIPT,c),scriptTags:ce(v.SCRIPT,l),styleTags:ce(v.STYLE,u)},g={},m={};Object.keys(p).forEach(function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(g[e]=r),n.length&&(m[e]=p[e].oldTags)}),t&&t(),s(e,g,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ie(v.TITLE,t)},ie=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(U),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(U):r.getAttribute(U)!==i.join(",")&&r.setAttribute(U,i.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+U+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===j)r.innerHTML=t.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(U,"true"),a.some(function(e,t){return i=t,r.isEqualNode(e)})?a.splice(i,1):o.push(r)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return r.appendChild(e)}),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[O[r]||r]=e[r],t},t)},ue=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[U]=!0,a=le(r,n),[c.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ae(t);return a?"<"+e+" "+U+'="true" '+a+">"+F(o,n)+"</"+e+">":"<"+e+" "+U+'="true">'+F(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case M:return{toComponent:function(){return le(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n,a=((n={key:r})[U]=!0,n);return Object.keys(t).forEach(function(e){var r=O[e]||e;if(r===j||r===x){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]}),c.createElement(e,a)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var a=Object.keys(n).filter(function(e){return!(e===j||e===x)}).reduce(function(e,t){var a=void 0===n[t]?t:t+'="'+F(n[t],r)+'"';return e?e+" "+a:a},""),o=n.innerHTML||n.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+" "+U+'="true" '+a+(i?"/>":">"+o+"</"+e+">")},"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:ue(v.BASE,t,n),bodyAttributes:ue(y,r,n),htmlAttributes:ue(M,a,n),link:ue(v.LINK,o,n),meta:ue(v.META,i,n),noscript:ue(v.NOSCRIPT,c,n),script:ue(v.SCRIPT,s,n),style:ue(v.STYLE,l,n),title:ue(v.TITLE,{title:f,titleAttributes:d},n)}},de=f()(function(e){return{baseTag:H([N,z],e),bodyAttributes:$(y,e),defer:X(e,C),encode:X(e,E),htmlAttributes:$(M,e),linkTags:J(v.LINK,[k,N],e),metaTags:J(v.META,[T,b,I,A,w],e),noscriptTags:J(v.NOSCRIPT,[j],e),onChangeClientState:W(e),scriptTags:J(v.SCRIPT,[D,j],e),styleTags:J(v.STYLE,[x],e),title:B(e),titleAttributes:$(h,e)}},function(e){re&&ee(re),e.defer?re=K(function(){ne(e,function(){re=null})}):(ne(e),re=null)},fe)(function(){return null}),pe=(a=de,i=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return _({},n,((t={})[r.type]=[].concat(n[r.type]||[],[_({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return _({},a,((t={})[n.type]=i,t.titleAttributes=_({},o),t));case v.BODY:return _({},a,{bodyAttributes:_({},o)});case v.HTML:return _({},a,{htmlAttributes:_({},o)})}return _({},a,((r={})[n.type]=_({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=_({},t);return Object.keys(e).forEach(function(t){var n;r=_({},r,((n={})[t]=e[t],n))}),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[Y[r]||r]=e[r],t},t)}(Z(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}}),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Z(e,["children"]),n=_({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},G(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);pe.renderStatic=pe.rewind;r.p;var ge=e=>{let{metaTitle:t,metaDescription:r}=e;const n=t||"Nova, Tech for Good",a=r||"We are a team of students at UCLA who aim to create high-impact technology that empowers nonprofits to better serve their communities.";return c.createElement(pe,{title:n,meta:[{name:"description",content:a},{property:"og:image",content:"https://i.imgur.com/ivlhp1U.jpg"},{property:"og:title",content:n},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:n},{name:"twitter:description",content:a}]})}}}]);
//# sourceMappingURL=63677c9702a4c8f9df60760e36f9ec8c8e083852-bc27c11f6ca8a4b2bd18.js.map