const hn=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};hn();function j(){}function ue(t,e){for(const n in e)t[n]=e[n];return t}function Re(t){return t()}function de(){return Object.create(null)}function ut(t){t.forEach(Re)}function Fe(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let St;function Vt(t,e){return St||(St=document.createElement("a")),St.href=e,t===St.href}function mn(t){return Object.keys(t).length===0}function pn(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(pn(e,n))}function he(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ne(t){return t&&Fe(t.destroy)?t.destroy:j}function y(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function De(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function gn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function at(t){return document.createTextNode(t)}function P(){return at(" ")}function vn(){return at("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bn(t){return Array.from(t.childNodes)}function vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}class yn{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=gn(n.nodeName):this.e=x(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)N(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(T)}}let _t;function kt(t){_t=t}function Be(){if(!_t)throw new Error("Function called outside component initialization");return _t}function wn(t){Be().$$.before_update.push(t)}function Cn(t){Be().$$.on_mount.push(t)}const wt=[],me=[],jt=[],pe=[],kn=Promise.resolve();let Yt=!1;function xn(){Yt||(Yt=!0,kn.then(We))}function Xt(t){jt.push(t)}const Ut=new Set;let At=0;function We(){const t=_t;do{for(;At<wt.length;){const e=wt[At];At++,kt(e),_n(e.$$)}for(kt(null),wt.length=0,At=0;me.length;)me.pop()();for(let e=0;e<jt.length;e+=1){const n=jt[e];Ut.has(n)||(Ut.add(n),n())}jt.length=0}while(wt.length);for(;pe.length;)pe.pop()();Yt=!1,Ut.clear(),kt(t)}function _n(t){if(t.fragment!==null){t.update(),ut(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Xt)}}const Pt=new Set;let ht;function ct(){ht={r:0,c:[],p:ht}}function ft(){ht.r||ut(ht.c),ht=ht.p}function z(t,e){t&&t.i&&(Pt.delete(t),t.i(e))}function A(t,e,n,i){if(t&&t.o){if(Pt.has(t))return;Pt.add(t),ht.c.push(()=>{Pt.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Z(t){t&&t.c()}function Y(t,e,n,i){const{fragment:a,on_mount:o,on_destroy:r,after_update:s}=t.$$;a&&a.m(e,n),i||Xt(()=>{const c=o.map(Re).filter(Fe);r?r.push(...c):ut(c),t.$$.on_mount=[]}),s.forEach(Xt)}function X(t,e){const n=t.$$;n.fragment!==null&&(ut(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mn(t,e){t.$$.dirty[0]===-1&&(wt.push(t),xn(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,i,a,o,r,s=[-1]){const c=_t;kt(t);const l=t.$$={fragment:null,ctx:null,props:o,update:j,not_equal:a,bound:de(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:de(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let w=!1;if(l.ctx=n?n(t,e.props||{},(m,C,..._)=>{const g=_.length?_[0]:C;return l.ctx&&a(l.ctx[m],l.ctx[m]=g)&&(!l.skip_bound&&l.bound[m]&&l.bound[m](g),w&&Mn(t,m)),C}):[],l.update(),w=!0,ut(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const m=bn(e.target);l.fragment&&l.fragment.l(m),m.forEach(T)}else l.fragment&&l.fragment.c();e.intro&&z(t.$$.fragment),Y(t,e.target,e.anchor,e.customElement),We()}kt(c)}class tt{$destroy(){X(this,1),this.$destroy=j}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(e){this.$$set&&!mn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function xt(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xt=function(e){return typeof e}:xt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(t)}function In(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ge(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function zn(t,e,n){return e&&ge(t.prototype,e),n&&ge(t,n),t}function Ln(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),i.forEach(function(a){Ln(t,a,n[a])})}return t}function Ue(t,e){return Sn(t)||An(t,e)||Hn()}function Sn(t){if(Array.isArray(t))return t}function An(t,e){var n=[],i=!0,a=!1,o=void 0;try{for(var r=t[Symbol.iterator](),s;!(i=(s=r.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(c){a=!0,o=c}finally{try{!i&&r.return!=null&&r.return()}finally{if(a)throw o}}return n}function Hn(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var ve=function(){},ie={},$e={},jn=null,Ge={mark:ve,measure:ve};try{typeof window!="undefined"&&(ie=window),typeof document!="undefined"&&($e=document),typeof MutationObserver!="undefined"&&(jn=MutationObserver),typeof performance!="undefined"&&(Ge=performance)}catch{}var Pn=ie.navigator||{},be=Pn.userAgent,ye=be===void 0?"":be,Dt=ie,D=$e,Ht=Ge;Dt.document;var ae=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function";~ye.indexOf("MSIE")||~ye.indexOf("Trident/");var rt="___FONT_AWESOME___",qe="fa",Ye="svg-inline--fa",Vn="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var $t={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xe=Dt.FontAwesomeConfig||{};function En(t){var e=D.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Tn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(D&&typeof D.querySelector=="function"){var Nn=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Nn.forEach(function(t){var e=Ue(t,2),n=e[0],i=e[1],a=Tn(En(n));a!=null&&(Xe[i]=a)})}var On={familyPrefix:qe,replacementClass:Ye,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Zt=L({},On,Xe);Zt.autoReplaceSvg||(Zt.observeMutations=!1);var $=L({},Zt);Dt.FontAwesomeConfig=$;var ot=Dt||{};ot[rt]||(ot[rt]={});ot[rt].styles||(ot[rt].styles={});ot[rt].hooks||(ot[rt].hooks={});ot[rt].shims||(ot[rt].shims=[]);var Q=ot[rt],Rn=[],Fn=function t(){D.removeEventListener("DOMContentLoaded",t),Jt=1,Rn.map(function(e){return e()})},Jt=!1;ae&&(Jt=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),Jt||D.addEventListener("DOMContentLoaded",Fn));var re="pending",Ze="settled",Et="fulfilled",Tt="rejected",Dn=function(){},Je=typeof global!="undefined"&&typeof global.process!="undefined"&&typeof global.process.emit=="function",Bn=typeof setImmediate=="undefined"?setTimeout:setImmediate,Ct=[],Qt;function Wn(){for(var t=0;t<Ct.length;t++)Ct[t][0](Ct[t][1]);Ct=[],Qt=!1}function Nt(t,e){Ct.push([t,e]),Qt||(Qt=!0,Bn(Wn,0))}function Un(t,e){function n(a){oe(e,a)}function i(a){Mt(e,a)}try{t(n,i)}catch(a){i(a)}}function Qe(t){var e=t.owner,n=e._state,i=e._data,a=t[n],o=t.then;if(typeof a=="function"){n=Et;try{i=a(i)}catch(r){Mt(o,r)}}Ke(o,i)||(n===Et&&oe(o,i),n===Tt&&Mt(o,i))}function Ke(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||xt(e)==="object")){var i=e.then;if(typeof i=="function")return i.call(e,function(a){n||(n=!0,e===a?tn(t,a):oe(t,a))},function(a){n||(n=!0,Mt(t,a))}),!0}}catch(a){return n||Mt(t,a),!0}return!1}function oe(t,e){(t===e||!Ke(t,e))&&tn(t,e)}function tn(t,e){t._state===re&&(t._state=Ze,t._data=e,Nt($n,t))}function Mt(t,e){t._state===re&&(t._state=Ze,t._data=e,Nt(Gn,t))}function en(t){t._then=t._then.forEach(Qe)}function $n(t){t._state=Et,en(t)}function Gn(t){t._state=Tt,en(t),!t._handled&&Je&&global.process.emit("unhandledRejection",t._data,t)}function qn(t){global.process.emit("rejectionHandled",t)}function q(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof q))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],Un(t,this)}q.prototype={constructor:q,_state:re,_then:null,_data:void 0,_handled:!1,then:function(e,n){var i={owner:this,then:new this.constructor(Dn),fulfilled:e,rejected:n};return(n||e)&&!this._handled&&(this._handled=!0,this._state===Tt&&Je&&Nt(qn,this)),this._state===Et||this._state===Tt?Nt(Qe,i):this._then.push(i),i.then},catch:function(e){return this.then(null,e)}};q.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new q(function(e,n){var i=[],a=0;function o(c){return a++,function(l){i[c]=l,--a||e(i)}}for(var r=0,s;r<t.length;r++)s=t[r],s&&typeof s.then=="function"?s.then(o(r),n):i[r]=s;a||e(i)})};q.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new q(function(e,n){for(var i=0,a;i<t.length;i++)a=t[i],a&&typeof a.then=="function"?a.then(e,n):e(a)})};q.resolve=function(t){return t&&xt(t)==="object"&&t.constructor===q?t:new q(function(e){e(t)})};q.reject=function(t){return new q(function(e,n){n(t)})};var gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yn(t){if(!(!t||!ae)){var e=D.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=D.head.childNodes,i=null,a=n.length-1;a>-1;a--){var o=n[a],r=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(i=o)}return D.head.insertBefore(e,i),t}}var Xn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ot(){for(var t=12,e="";t-- >0;)e+=Xn[Math.random()*62|0];return e}function nn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(nn(t[n]),'" ')},"").trim()}function an(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function rn(t){return t.size!==gt.size||t.x!==gt.x||t.y!==gt.y||t.rotate!==gt.rotate||t.flipX||t.flipY}function on(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),r="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(r," ").concat(s)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:c,path:l}}var Gt={x:0,y:0,width:"100%",height:"100%"};function we(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Jn(t){return t.tag==="g"?t.children:[t]}function Qn(t){var e=t.children,n=t.attributes,i=t.main,a=t.mask,o=t.maskId,r=t.transform,s=i.width,c=i.icon,l=a.width,w=a.icon,m=on({transform:r,containerWidth:l,iconWidth:s}),C={tag:"rect",attributes:L({},Gt,{fill:"white"})},_=c.children?{children:c.children.map(we)}:{},g={tag:"g",attributes:L({},m.inner),children:[we(L({tag:c.tag,attributes:L({},c.attributes,m.path)},_))]},I={tag:"g",attributes:L({},m.outer),children:[g]},f="mask-".concat(o||Ot()),u="clip-".concat(o||Ot()),p={tag:"mask",attributes:L({},Gt,{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,I]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:u},children:Jn(w)},p]};return e.push(b,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(u,")"),mask:"url(#".concat(f,")")},Gt)}),{children:e,attributes:n}}function Kn(t){var e=t.children,n=t.attributes,i=t.main,a=t.transform,o=t.styles,r=an(o);if(r.length>0&&(n.style=r),rn(a)){var s=on({transform:a,containerWidth:i.width,iconWidth:i.width});e.push({tag:"g",attributes:L({},s.outer),children:[{tag:"g",attributes:L({},s.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:L({},i.icon.attributes,s.path)}]}]})}else e.push(i.icon);return{children:e,attributes:n}}function ti(t){var e=t.children,n=t.main,i=t.mask,a=t.attributes,o=t.styles,r=t.transform;if(rn(r)&&n.found&&!i.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};a.style=an(L({},o,{"transform-origin":"".concat(l.x+r.x/16,"em ").concat(l.y+r.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function ei(t){var e=t.prefix,n=t.iconName,i=t.children,a=t.attributes,o=t.symbol,r=o===!0?"".concat(e,"-").concat($.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L({},a,{id:r}),children:i}]}]}function ni(t){var e=t.icons,n=e.main,i=e.mask,a=t.prefix,o=t.iconName,r=t.transform,s=t.symbol,c=t.title,l=t.maskId,w=t.titleId,m=t.extra,C=t.watchable,_=C===void 0?!1:C,g=i.found?i:n,I=g.width,f=g.height,u=a==="fak",p=u?"":"fa-w-".concat(Math.ceil(I/f*16)),b=[$.replacementClass,o?"".concat($.familyPrefix,"-").concat(o):"",p].filter(function(et){return m.classes.indexOf(et)===-1}).filter(function(et){return et!==""||!!et}).concat(m.classes).join(" "),v={children:[],attributes:L({},m.attributes,{"data-prefix":a,"data-icon":o,class:b,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(f)})},S=u&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/f*16*.0625,"em")}:{};_&&(v.attributes[Vn]=""),c&&v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(w||Ot())},children:[c]});var d=L({},v,{prefix:a,iconName:o,main:n,mask:i,maskId:l,transform:r,symbol:s,styles:L({},S,m.styles)}),E=i.found&&n.found?Qn(d):Kn(d),O=E.children,R=E.attributes;return d.children=O,d.attributes=R,s?ei(d):ti(d)}var Ce=function(){};$.measurePerformance&&Ht&&Ht.mark&&Ht.measure;var ii=function(e,n){return function(i,a,o,r){return e.call(n,i,a,o,r)}},qt=function(e,n,i,a){var o=Object.keys(e),r=o.length,s=a!==void 0?ii(n,a):n,c,l,w;for(i===void 0?(c=1,w=e[o[0]]):(c=0,w=i);c<r;c++)l=o[c],w=s(w,e[l],l,e);return w};function sn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,a=i===void 0?!1:i,o=Object.keys(e).reduce(function(r,s){var c=e[s],l=!!c.icon;return l?r[c.iconName]=c.icon:r[s]=c,r},{});typeof Q.hooks.addPack=="function"&&!a?Q.hooks.addPack(t,o):Q.styles[t]=L({},Q.styles[t]||{},o),t==="fas"&&sn("fa",e)}var ke=Q.styles,ai=Q.shims,ln=function(){var e=function(a){return qt(ke,function(o,r,s){return o[s]=qt(r,a,{}),o},{})};e(function(i,a,o){return a[3]&&(i[a[3]]=o),i}),e(function(i,a,o){var r=a[2];return i[o]=o,r.forEach(function(s){i[s]=o}),i});var n="far"in ke;qt(ai,function(i,a){var o=a[0],r=a[1],s=a[2];return r==="far"&&!n&&(r="fas"),i[o]={prefix:r,iconName:s},i},{})};ln();Q.styles;function xe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function cn(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,a=t.children,o=a===void 0?[]:a;return typeof t=="string"?nn(t):"<".concat(e," ").concat(Zn(i),">").concat(o.map(cn).join(""),"</").concat(e,">")}var ri=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(i,a){var o=a.toLowerCase().split("-"),r=o[0],s=o.slice(1).join("-");if(r&&s==="h")return i.flipX=!0,i;if(r&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(r){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n):n};function Kt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}Kt.prototype=Object.create(Error.prototype);Kt.prototype.constructor=Kt;var Bt={fill:"currentColor"},fn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};L({},Bt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var se=L({},fn,{attributeName:"opacity"});L({},Bt,{cx:"256",cy:"364",r:"28"}),L({},fn,{attributeName:"r",values:"28;14;28;28;14;28;"}),L({},se,{values:"1;0;1;1;0;1;"});L({},Bt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),L({},se,{values:"1;0;0;0;0;1;"});L({},Bt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),L({},se,{values:"0;0;1;1;0;0;"});Q.styles;function _e(t){var e=t[0],n=t[1],i=t.slice(4),a=Ue(i,1),o=a[0],r=null;return Array.isArray(o)?r={tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat($t.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat($t.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat($t.PRIMARY),fill:"currentColor",d:o[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:r}}Q.styles;var oi=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function si(){var t=qe,e=Ye,n=$.familyPrefix,i=$.replacementClass,a=oi;if(n!==t||i!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),r=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(n,"-")).replace(r,"--".concat(n,"-")).replace(s,".".concat(i))}return a}var li=function(){function t(){In(this,t),this.definitions={}}return zn(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var r=a.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(s){n.definitions[s]=L({},n.definitions[s]||{},r[s]),sn(s,r[s]),ln()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var a=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(a).map(function(o){var r=a[o],s=r.prefix,c=r.iconName,l=r.icon;n[s]||(n[s]={}),n[s][c]=l}),n}}]),t}();function ci(){$.autoAddCss&&!Me&&(Yn(si()),Me=!0)}function fi(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return cn(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!ae){var i=D.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function te(t){var e=t.prefix,n=e===void 0?"fa":e,i=t.iconName;if(!!i)return xe(di.definitions,n,i)||xe(Q.styles,n,i)}function ui(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:te(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:te(a||{})),t(i,L({},n,{mask:a}))}}var di=new li,Me=!1,hi={transform:function(e){return ri(e)}},mi=ui(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,i=n===void 0?gt:n,a=e.symbol,o=a===void 0?!1:a,r=e.mask,s=r===void 0?null:r,c=e.maskId,l=c===void 0?null:c,w=e.title,m=w===void 0?null:w,C=e.titleId,_=C===void 0?null:C,g=e.classes,I=g===void 0?[]:g,f=e.attributes,u=f===void 0?{}:f,p=e.styles,b=p===void 0?{}:p;if(!!t){var v=t.prefix,S=t.iconName,d=t.icon;return fi(L({type:"icon"},t),function(){return ci(),$.autoA11y&&(m?u["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(_||Ot()):(u["aria-hidden"]="true",u.focusable="false")),ni({icons:{main:_e(d),mask:s?_e(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:S,transform:L({},gt,i),symbol:o,title:m,maskId:l,titleId:_,extra:{attributes:u,styles:b,classes:I}})})}});function Ie(t){if(t===null||typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2){const[e,n]=t;return{prefix:e,iconName:n}}if(typeof t=="string")return{prefix:"fas",iconName:t}}function pi(t){let e,n;return{c(){e=new yn(!1),n=vn(),e.a=n},m(i,a){e.m(t[0],i,a),N(i,n,a)},p(i,[a]){a&1&&e.p(i[0])},i:j,o:j,d(i){i&&T(n),i&&e.d()}}}function gi(t,e,n){let i,a,{border:o=!1}=e,{fixedWidth:r=!1}=e,{flip:s=null}=e,{icon:c=null}=e,{mask:l=null}=e,{listItem:w=!1}=e,{pull:m=null}=e,{pulse:C=!1}=e,{rotation:_=null}=e,{swapOpacity:g=!1}=e,{size:I=null}=e,{spin:f=!1}=e,{transform:u={}}=e,{symbol:p=!1}=e,{title:b=null}=e,{inverse:v=!1}=e,S="";return wn(()=>{const d=Ie(c);if(!d)return;const E=te(d),O=mi(E||c,{symbol:p,title:b,styles:e.style?a:{},classes:[...Object.keys(i).map(R=>i[R]?R:null).filter(R=>!!R),(e.class||"").split(" ")],transform:{...typeof u=="string"?hi.transform(u):u},mask:Ie(l)});if(!O){console.warn("Could not find one or more icon(s)",E||c,l);return}n(0,S=O.html)}),t.$$set=d=>{n(19,e=ue(ue({},e),he(d))),"border"in d&&n(1,o=d.border),"fixedWidth"in d&&n(2,r=d.fixedWidth),"flip"in d&&n(3,s=d.flip),"icon"in d&&n(4,c=d.icon),"mask"in d&&n(5,l=d.mask),"listItem"in d&&n(6,w=d.listItem),"pull"in d&&n(7,m=d.pull),"pulse"in d&&n(8,C=d.pulse),"rotation"in d&&n(9,_=d.rotation),"swapOpacity"in d&&n(10,g=d.swapOpacity),"size"in d&&n(11,I=d.size),"spin"in d&&n(12,f=d.spin),"transform"in d&&n(13,u=d.transform),"symbol"in d&&n(14,p=d.symbol),"title"in d&&n(15,b=d.title),"inverse"in d&&n(16,v=d.inverse)},t.$$.update=()=>{t.$$.dirty&73678&&(i={"fa-spin":f,"fa-pulse":C,"fa-fw":r,"fa-border":o,"fa-li":w,"fa-inverse":v,"fa-flip-horizontal":["both","horizontal"].includes(s),"fa-flip-vertical":["both","vertical"].includes(s),[`fa-${I}`]:I!==null,[`fa-rotate-${_}`]:_!==null,[`fa-pull-${m}`]:m!==null,"fa-swap-opacity":g}),a=(e.style||"").split(";").filter(d=>!!d).map(d=>d.split(":").map(E=>E.trim())).reduce((d,E)=>{const[O,R]=E;return d[O]=R,d},{})},e=he(e),[S,o,r,s,c,l,w,m,C,_,g,I,f,u,p,b,v]}class le extends tt{constructor(e){super(),K(this,e,gi,pi,J,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var vi={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"]},bi=vi,yi={prefix:"fas",iconName:"calculator",icon:[384,512,[128425],"f1ec","M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z"]},wi={prefix:"fas",iconName:"camera-retro",icon:[512,512,[128247],"f083","M64 64V48C64 39.16 71.16 32 80 32H144C152.8 32 160 39.16 160 48V64H192L242.5 38.76C251.4 34.31 261.2 32 271.1 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V128C0 92.65 28.65 64 64 64zM220.6 121.2C211.7 125.7 201.9 128 192 128H64V192H178.8C200.8 176.9 227.3 168 256 168C284.7 168 311.2 176.9 333.2 192H448V96H271.1L220.6 121.2zM256 216C207.4 216 168 255.4 168 304C168 352.6 207.4 392 256 392C304.6 392 344 352.6 344 304C344 255.4 304.6 216 256 216z"]},Ci={prefix:"fas",iconName:"car",icon:[512,512,[128664,"automobile"],"f1b9","M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"]},ki={prefix:"fas",iconName:"certificate",icon:[512,512,[],"f0a3","M256 53.46L300.1 7.261C307 1.034 315.1-1.431 324.4 .8185C332.8 3.068 339.3 9.679 341.4 18.1L357.3 80.6L419.3 63.07C427.7 60.71 436.7 63.05 442.8 69.19C448.1 75.34 451.3 84.33 448.9 92.69L431.4 154.7L493.9 170.6C502.3 172.7 508.9 179.2 511.2 187.6C513.4 196 510.1 204.1 504.7 211L458.5 256L504.7 300.1C510.1 307 513.4 315.1 511.2 324.4C508.9 332.8 502.3 339.3 493.9 341.4L431.4 357.3L448.9 419.3C451.3 427.7 448.1 436.7 442.8 442.8C436.7 448.1 427.7 451.3 419.3 448.9L357.3 431.4L341.4 493.9C339.3 502.3 332.8 508.9 324.4 511.2C315.1 513.4 307 510.1 300.1 504.7L256 458.5L211 504.7C204.1 510.1 196 513.4 187.6 511.2C179.2 508.9 172.7 502.3 170.6 493.9L154.7 431.4L92.69 448.9C84.33 451.3 75.34 448.1 69.19 442.8C63.05 436.7 60.71 427.7 63.07 419.3L80.6 357.3L18.1 341.4C9.679 339.3 3.068 332.8 .8186 324.4C-1.431 315.1 1.034 307 7.261 300.1L53.46 256L7.261 211C1.034 204.1-1.431 196 .8186 187.6C3.068 179.2 9.679 172.7 18.1 170.6L80.6 154.7L63.07 92.69C60.71 84.33 63.05 75.34 69.19 69.19C75.34 63.05 84.33 60.71 92.69 63.07L154.7 80.6L170.6 18.1C172.7 9.679 179.2 3.068 187.6 .8185C196-1.431 204.1 1.034 211 7.261L256 53.46z"]},xi={prefix:"fas",iconName:"chess-board",icon:[448,512,[],"f43c","M192 224H128v64h64V224zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM384 160h-64v64h64v64h-64v64h64v64h-64v-64h-64v64H192v-64H128v64H64v-64h64V288H64V224h64V160H64V96h64v64h64V96h64v64h64V96h64V160zM192 288v64h64V288H192zM256 224V160H192v64H256zM256 288h64V224h-64V288z"]},_i={prefix:"fas",iconName:"code-compare",icon:[512,512,[],"e13a","M320 488C320 497.5 314.4 506.1 305.8 509.9C297.1 513.8 286.1 512.2 279.9 505.8L199.9 433.8C194.9 429.3 192 422.8 192 416C192 409.2 194.9 402.7 199.9 398.2L279.9 326.2C286.1 319.8 297.1 318.2 305.8 322.1C314.4 325.9 320 334.5 320 344V384H336C371.3 384 400 355.3 400 320V153.3C371.7 140.1 352 112.8 352 80C352 35.82 387.8 0 432 0C476.2 0 512 35.82 512 80C512 112.8 492.3 140.1 464 153.3V320C464 390.7 406.7 448 336 448H320V488zM456 79.1C456 66.74 445.3 55.1 432 55.1C418.7 55.1 408 66.74 408 79.1C408 93.25 418.7 103.1 432 103.1C445.3 103.1 456 93.25 456 79.1zM192 24C192 14.52 197.6 5.932 206.2 2.076C214.9-1.78 225-.1789 232.1 6.161L312.1 78.16C317.1 82.71 320 89.2 320 96C320 102.8 317.1 109.3 312.1 113.8L232.1 185.8C225 192.2 214.9 193.8 206.2 189.9C197.6 186.1 192 177.5 192 168V128H176C140.7 128 112 156.7 112 192V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V192C48 121.3 105.3 64 176 64H192V24zM56 432C56 445.3 66.75 456 80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432z"]},Mi={prefix:"fas",iconName:"diagram-project",icon:[576,512,["project-diagram"],"f542","M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"]},Ii=Mi,zi={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M323.5 51.25C302.8 70.5 284 90.75 267.4 111.1C240.1 73.62 206.2 35.5 168 0C69.75 91.12 0 210 0 281.6C0 408.9 100.2 512 224 512s224-103.1 224-230.4C448 228.4 396 118.5 323.5 51.25zM304.1 391.9C282.4 407 255.8 416 226.9 416c-72.13 0-130.9-47.73-130.9-125.2c0-38.63 24.24-72.64 72.74-130.8c7 8 98.88 125.4 98.88 125.4l58.63-66.88c4.125 6.75 7.867 13.52 11.24 19.9C364.9 290.6 353.4 357.4 304.1 391.9z"]},Li={prefix:"fas",iconName:"kitchen-set",icon:[576,512,[],"e51a","M80 144C80 108.7 108.7 80 144 80C179.3 80 208 108.7 208 144C208 179.3 179.3 208 144 208C108.7 208 80 179.3 80 144zM284.4 176C269.9 240.1 212.5 288 144 288C64.47 288 0 223.5 0 144C0 64.47 64.47 0 144 0C212.5 0 269.9 47.87 284.4 112H356.2C365 102.2 377.8 96 392 96H496C522.5 96 544 117.5 544 144C544 170.5 522.5 192 496 192H392C377.8 192 365 185.8 356.2 176H284.4zM144 48C90.98 48 48 90.98 48 144C48 197 90.98 240 144 240C197 240 240 197 240 144C240 90.98 197 48 144 48zM424 264V272H520C533.3 272 544 282.7 544 296C544 309.3 533.3 320 520 320H280C266.7 320 256 309.3 256 296C256 282.7 266.7 272 280 272H376V264C376 250.7 386.7 240 400 240C413.3 240 424 250.7 424 264zM288 464V352H512V464C512 490.5 490.5 512 464 512H336C309.5 512 288 490.5 288 464zM176 320C202.5 320 224 341.5 224 368C224 394.5 202.5 416 176 416H160C160 433.7 145.7 448 128 448H64C46.33 448 32 433.7 32 416V336C32 327.2 39.16 320 48 320H176zM192 368C192 359.2 184.8 352 176 352H160V384H176C184.8 384 192 376.8 192 368zM200 464C213.3 464 224 474.7 224 488C224 501.3 213.3 512 200 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464H200z"]},Si={prefix:"fas",iconName:"laptop-code",icon:[640,512,[],"f5fc","M128 96h384v256h64V80C576 53.63 554.4 32 528 32h-416C85.63 32 64 53.63 64 80V352h64V96zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM365.9 286.2C369.8 290.1 374.9 292 380 292s10.23-1.938 14.14-5.844l48-48c7.812-7.813 7.812-20.5 0-28.31l-48-48c-7.812-7.813-20.47-7.813-28.28 0c-7.812 7.813-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84C358 265.7 358 278.4 365.9 286.2zM274.1 161.9c-7.812-7.813-20.47-7.813-28.28 0l-48 48c-7.812 7.813-7.812 20.5 0 28.31l48 48C249.8 290.1 254.9 292 260 292s10.23-1.938 14.14-5.844c7.812-7.813 7.812-20.5 0-28.31L240.3 224l33.86-33.84C281.1 182.4 281.1 169.7 274.1 161.9z"]},Ai={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z"]},Hi={prefix:"fas",iconName:"person-hiking",icon:[384,512,["hiking"],"f6ec","M240 96c26.5 0 48-21.5 48-48S266.5 0 240 0C213.5 0 192 21.5 192 48S213.5 96 240 96zM80.01 287.1c7.31 0 13.97-4.762 15.87-11.86L137 117c.3468-1.291 .5125-2.588 .5125-3.866c0-7.011-4.986-13.44-12.39-15.13C118.4 96.38 111.7 95.6 105.1 95.6c-36.65 0-70 23.84-79.32 59.53L.5119 253.3C.1636 254.6-.0025 255.9-.0025 257.2c0 7.003 4.961 13.42 12.36 15.11L76.01 287.5C77.35 287.8 78.69 287.1 80.01 287.1zM368 160h-15.1c-8.875 0-15.1 7.125-15.1 16V192h-34.75l-46.75-46.75C243.4 134.1 228.6 128 212.9 128C185.9 128 162.5 146.3 155.9 172.5L129 280.3C128.4 282.8 128 285.5 128 288.1c0 8.325 3.265 16.44 9.354 22.53l86.62 86.63V480c0 17.62 14.37 32 31.1 32s32-14.38 32-32v-82.75c0-17.12-6.625-33.13-18.75-45.25l-46.87-46.88c.25-.5 .5-.875 .625-1.375l19.1-79.5l22.37 22.38C271.4 252.6 279.5 256 288 256h47.1v240c0 8.875 7.125 16 15.1 16h15.1C376.9 512 384 504.9 384 496v-320C384 167.1 376.9 160 368 160zM81.01 472.3c-.672 2.63-.993 5.267-.993 7.86c0 14.29 9.749 27.29 24.24 30.89C106.9 511.8 109.5 512 112 512c14.37 0 27.37-9.75 30.1-24.25l25.25-101l-52.75-52.75L81.01 472.3z"]},ji=Hi,Pi={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"]},Vi={prefix:"fas",iconName:"satellite",icon:[512,512,[128752],"f7bf","M502.8 264.1l-80.37-80.37l47.87-47.88c13-13.12 13-34.37 0-47.5l-47.5-47.5c-13.12-13.12-34.38-13.12-47.5 0l-47.88 47.88L247.1 9.25C241 3.375 232.9 0 224.5 0c-8.5 0-16.62 3.375-22.5 9.25l-96.75 96.75c-12.38 12.5-12.38 32.62 0 45.12L185.5 231.5L175.8 241.4c-54-24.5-116.3-22.5-168.5 5.375c-8.498 4.625-9.623 16.38-2.873 23.25l107.6 107.5l-17.88 17.75c-2.625-.75-5-1.625-7.75-1.625c-17.75 0-32 14.38-32 32c0 17.75 14.25 32 32 32c17.62 0 32-14.25 32-32c0-2.75-.875-5.125-1.625-7.75l17.75-17.88l107.6 107.6c6.75 6.75 18.62 5.625 23.12-2.875c27.88-52.25 29.88-114.5 5.375-168.5l10-9.873l80.25 80.36c12.5 12.38 32.62 12.38 44.1 0l96.75-96.75C508.6 304.1 512 295.1 512 287.5C512 279.1 508.6 270.1 502.8 264.1zM219.5 197.4L150.6 128.5l73.87-73.75l68.86 68.88L219.5 197.4zM383.5 361.4L314.6 292.5l73.75-73.88l68.88 68.87L383.5 361.4z"]},Ei={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M413.8 447.1L256 448l0 31.99C256 497.7 241.8 512 224.1 512c-17.67 0-32.1-14.32-32.1-31.99l0-31.99l-158.9-.0099c-28.5 0-43.69-34.49-24.69-56.4l68.98-79.59H62.22c-25.41 0-39.15-29.8-22.67-49.13l60.41-70.85H89.21c-21.28 0-32.87-22.5-19.28-37.31l134.8-146.5c10.4-11.3 28.22-11.3 38.62-.0033l134.9 146.5c13.62 14.81 2.001 37.31-19.28 37.31h-10.77l60.35 70.86c16.46 19.34 2.716 49.12-22.68 49.12h-15.2l68.98 79.59C458.7 413.7 443.1 447.1 413.8 447.1z"]},Ti={prefix:"fas",iconName:"wave-square",icon:[640,512,[],"f83e","M476 480h-152c-19.88 0-36-16.12-36-36v-348H192v156c0 19.88-16.12 36-36 36H31.1C14.33 288 0 273.7 0 256s14.33-31.1 31.1-31.1H128v-156c0-19.88 16.12-36 36-36h152c19.88 0 36 16.12 36 36v348h96v-156c0-19.88 16.12-36 36-36h124C625.7 224 640 238.3 640 256s-14.33 32-31.1 32H512v156C512 463.9 495.9 480 476 480z"]},U=(t=>(t.Main="main",t.Project="project",t.Photos="photos",t))(U||{});const pt=[];function ce(t,e=j){let n;const i=new Set;function a(s){if(J(t,s)&&(t=s,n)){const c=!pt.length;for(const l of i)l[1](),pt.push(l,t);if(c){for(let l=0;l<pt.length;l+=2)pt[l][0](pt[l+1]);pt.length=0}}}function o(s){a(s(t))}function r(s,c=j){const l=[s,c];return i.add(l),i.size===1&&(n=e(a)||j),s(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:a,update:o,subscribe:r}}function Ni(){const{subscribe:t,set:e}=ce(null);return{subscribe:t,setProject(n){e(n)}}}const ee=Ni();function Oi(){const{subscribe:t,set:e}=ce(U.Main);return{subscribe:t,setView(n){e(n)}}}const Wt=Oi();function Ri(t){var u,p,b;let e,n,i,a,o,r,s=((u=t[0])==null?void 0:u.title)+"",c,l,w,m,C=((p=t[0])==null?void 0:p.brief)+"",_,g,I,f;return a=new le({props:{icon:(b=t[0])==null?void 0:b.icon}}),{c(){e=x("li"),n=x("button"),i=x("div"),Z(a.$$.fragment),o=P(),r=x("span"),c=at(s),l=P(),w=x("div"),m=x("span"),_=at(C),k(r,"class","title"),k(i,"class","title-section"),k(m,"class","brief")},m(v,S){N(v,e,S),y(e,n),y(n,i),Y(a,i,null),y(i,o),y(i,r),y(r,c),y(n,l),y(n,w),y(w,m),y(m,_),g=!0,I||(f=It(n,"click",t[1]),I=!0)},p(v,[S]){var E,O,R;const d={};S&1&&(d.icon=(E=v[0])==null?void 0:E.icon),a.$set(d),(!g||S&1)&&s!==(s=((O=v[0])==null?void 0:O.title)+"")&&vt(c,s),(!g||S&1)&&C!==(C=((R=v[0])==null?void 0:R.brief)+"")&&vt(_,C)},i(v){g||(z(a.$$.fragment,v),g=!0)},o(v){A(a.$$.fragment,v),g=!1},d(v){v&&T(e),X(a),I=!1,f()}}}function Fi(t,e,n){let{project:i}=e;const a=()=>{ee.setProject(i),Wt.setView(U.Project)};return t.$$set=o=>{"project"in o&&n(0,i=o.project)},[i,a]}class Di extends tt{constructor(e){super(),K(this,e,Fi,Ri,J,{project:0})}}function fe(t,{root:e=null,rootMargin:n="0px 0px 0px 0px",threshold:i=0}={}){if(window&&"IntersectionObserver"in window){const a=new IntersectionObserver(o=>{o.forEach(r=>{if(r.isIntersecting){const s=r.target;s.dataset.src&&(s.src=s.dataset.src),s.dataset.srcset&&(s.srcset=s.dataset.srcset),a.unobserve(s)}})},{root:e,rootMargin:n,threshold:i});return a.observe(t),{destroy(){a&&a.unobserve(t)}}}}function Bi(t){var R,et,zt;let e,n,i,a,o,r=((R=t[0])==null?void 0:R.title)+"",s,c,l,w,m,C=((et=t[0])==null?void 0:et.description)+"",_,g,I,f,u,p,b,v,S,d,E,O;return l=new le({props:{icon:(zt=t[0])==null?void 0:zt.icon}}),{c(){var V,G;e=x("div"),n=x("button"),n.textContent="\u21D0",i=P(),a=x("div"),o=x("h3"),s=at(r),c=P(),Z(l.$$.fragment),w=P(),m=x("p"),_=at(C),g=P(),I=x("a"),f=at("(Link)"),p=P(),b=x("div"),v=x("img"),k(n,"class","back-button"),k(a,"class","focused-title-section"),k(I,"href",u=(V=t[0])==null?void 0:V.link),k(I,"rel","noreferrer"),k(I,"target","_blank"),Vt(v.src,S=(G=t[0])==null?void 0:G.image)||k(v,"src",S),k(v,"alt","The project"),k(b,"class","project-image-container"),k(e,"class","details")},m(V,G){N(V,e,G),y(e,n),y(e,i),y(e,a),y(a,o),y(o,s),y(a,c),Y(l,a,null),y(e,w),y(e,m),y(m,_),y(e,g),y(e,I),y(I,f),y(e,p),y(e,b),y(b,v),d=!0,E||(O=[It(n,"click",t[1]),ne(fe.call(null,v))],E=!0)},p(V,[G]){var W,yt,h,M,H;(!d||G&1)&&r!==(r=((W=V[0])==null?void 0:W.title)+"")&&vt(s,r);const bt={};G&1&&(bt.icon=(yt=V[0])==null?void 0:yt.icon),l.$set(bt),(!d||G&1)&&C!==(C=((h=V[0])==null?void 0:h.description)+"")&&vt(_,C),(!d||G&1&&u!==(u=(M=V[0])==null?void 0:M.link))&&k(I,"href",u),(!d||G&1&&!Vt(v.src,S=(H=V[0])==null?void 0:H.image))&&k(v,"src",S)},i(V){d||(z(l.$$.fragment,V),d=!0)},o(V){A(l.$$.fragment,V),d=!1},d(V){V&&T(e),X(l),E=!1,ut(O)}}}function Wi(t,e,n){let i;Ft(t,ee,o=>n(0,i=o));function a(){ee.setProject(null),Wt.setView(U.Main)}return[i,a]}class Ui extends tt{constructor(e){super(),K(this,e,Wi,Bi,J,{})}}const un=t=>{if(!t)return null;const e=t.index.toString().padStart(2,"0"),n="images/photo_portfolio/";return{thumbnail:`${n}/thumbnail/Portfolio_Thumbnail-${e}.jpg`,full:`${n}/full_size/Portfolio-${e}.jpg`}};function $i(){const{subscribe:t,set:e}=ce(null);return{subscribe:t,setSelectedPhoto(n){e(n)}}}const Rt=$i();function Gi(t){let e,n,i,a,o,r,s;return{c(){e=x("li"),n=x("button"),i=x("img"),Vt(i.src,a=t[2].thumbnail)||k(i,"src",a),k(i,"alt",o=t[0].description)},m(c,l){N(c,e,l),y(e,n),y(n,i),r||(s=[ne(fe.call(null,i)),It(n,"click",t[1])],r=!0)},p(c,[l]){l&1&&o!==(o=c[0].description)&&k(i,"alt",o)},i:j,o:j,d(c){c&&T(e),r=!1,ut(s)}}}function qi(t,e,n){let{photo:i}=e;const a=()=>{Rt.setSelectedPhoto(i)},o=un(i);return t.$$set=r=>{"photo"in r&&n(0,i=r.photo)},[i,a,o]}class Yi extends tt{constructor(e){super(),K(this,e,qi,Gi,J,{photo:0})}}function Xi(t){let e,n,i,a=t[0].title+"",o,r,s,c=t[0].description+"",l,w,m,C,_,g,I,f,u,p;return{c(){e=x("div"),n=x("div"),i=x("span"),o=at(a),r=P(),s=x("span"),l=at(c),w=P(),m=x("div"),C=x("img"),I=P(),f=x("button"),f.textContent="\u21D0 ",k(i,"class","photo-title"),k(n,"class","photo-container-header"),k(s,"class","photo-description"),Vt(C.src,_=t[1].full)||k(C,"src",_),k(C,"alt",g=t[0].description),k(m,"class","photo-rows"),k(f,"class","back-button"),k(e,"class","full-photo-container")},m(b,v){N(b,e,v),y(e,n),y(n,i),y(i,o),y(e,r),y(e,s),y(s,l),y(e,w),y(e,m),y(m,C),y(e,I),y(e,f),u||(p=[ne(fe.call(null,C)),It(f,"click",t[2])],u=!0)},p(b,[v]){v&1&&a!==(a=b[0].title+"")&&vt(o,a),v&1&&c!==(c=b[0].description+"")&&vt(l,c),v&1&&g!==(g=b[0].description)&&k(C,"alt",g)},i:j,o:j,d(b){b&&T(e),u=!1,ut(p)}}}function Zi(t,e,n){let i;Ft(t,Rt,r=>n(0,i=r));const a=un(i);return[i,a,()=>{Rt.setSelectedPhoto(null)}]}class Ji extends tt{constructor(e){super(),K(this,e,Zi,Xi,J,{})}}const ze=[{title:"Hackberry Canyon",description:"A resonant slot canyon in Capitol Reef."},{title:"Willow",description:"Our sweet and wonderful Willow."},{title:"Optics",description:""},{title:"Miwok Homes",description:""},{title:"Radio Nowhere",description:""},{title:"Ascent",description:""},{title:"Mosquito Lake",description:"Composed similarly to a photo by my late uncle Bob Hovey."},{title:"Trix Yogurt Sunset",description:""},{title:"Crimson Butte",description:""},{title:"Secluded Cove",description:""},{title:"Three Phase",description:""},{title:"Rayleigh's Gleaming",description:"Taken after an early Winter storm."},{title:"Continuum",description:""},{title:"Badlands",description:""},{title:"Rhyolite",description:""},{title:"Solar Quills",description:""},{title:"Living in the Moment",description:""},{title:"Lil Fren",description:""},{title:"The Sisters",description:""},{title:"Strata",description:""},{title:"Shoreline",description:""},{title:"Amador Iris",description:""},{title:"Vein",description:""},{title:"Lunar Eclipse",description:""},{title:"Darmera Peltata",description:""},{title:"Granite Spring",description:"Taken using lens-whacking on a 50mm."},{title:"Hammock Horizon",description:""},{title:"Caldor Burn Scar",description:""},{title:"Tiger Pool",description:""},{title:"Laminar",description:""},{title:"Evening Lichen",description:""},{title:"Electra Bloom",description:""},{title:"Forgotten Garden",description:""},{title:"All of Us, Stars",description:""},{title:"Grand Teton",description:""},{title:"Freel from Winemucca Lake",description:""},{title:"Transmissions",description:""},{title:"Batholiths",description:""},{title:"Jade",description:""},{title:"Orion Nebula",description:""}].map((t,e)=>({...t,index:e+1}));function Le(t,e,n){const i=t.slice();return i[2]=e[n],i}function Se(t){let e,n,i=ze,a=[];for(let r=0;r<i.length;r+=1)a[r]=Ae(Le(t,i,r));const o=r=>A(a[r],1,1,()=>{a[r]=null});return{c(){e=x("ul");for(let r=0;r<a.length;r+=1)a[r].c();k(e,"class","photo-list")},m(r,s){N(r,e,s);for(let c=0;c<a.length;c+=1)a[c].m(e,null);n=!0},p(r,s){if(s&0){i=ze;let c;for(c=0;c<i.length;c+=1){const l=Le(r,i,c);a[c]?(a[c].p(l,s),z(a[c],1)):(a[c]=Ae(l),a[c].c(),z(a[c],1),a[c].m(e,null))}for(ct(),c=i.length;c<a.length;c+=1)o(c);ft()}},i(r){if(!n){for(let s=0;s<i.length;s+=1)z(a[s]);n=!0}},o(r){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)A(a[s]);n=!1},d(r){r&&T(e),De(a,r)}}}function Ae(t){let e,n;return e=new Yi({props:{photo:t[2]}}),{c(){Z(e.$$.fragment)},m(i,a){Y(e,i,a),n=!0},p:j,i(i){n||(z(e.$$.fragment,i),n=!0)},o(i){A(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function He(t){let e,n;return e=new Ji({}),{c(){Z(e.$$.fragment)},m(i,a){Y(e,i,a),n=!0},i(i){n||(z(e.$$.fragment,i),n=!0)},o(i){A(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Qi(t){let e,n,i,a,o,r,s,c,l=t[0]===null&&Se(t),w=t[0]!==null&&He();return{c(){e=x("div"),n=x("button"),n.textContent="\u21D0 ",i=P(),a=x("div"),l&&l.c(),o=P(),w&&w.c(),k(n,"class","back-button"),k(a,"class","photo-portfolio-container")},m(m,C){N(m,e,C),y(e,n),y(e,i),y(e,a),l&&l.m(a,null),y(a,o),w&&w.m(a,null),r=!0,s||(c=It(n,"click",t[1]),s=!0)},p(m,[C]){m[0]===null?l?(l.p(m,C),C&1&&z(l,1)):(l=Se(m),l.c(),z(l,1),l.m(a,o)):l&&(ct(),A(l,1,1,()=>{l=null}),ft()),m[0]!==null?w?C&1&&z(w,1):(w=He(),w.c(),z(w,1),w.m(a,null)):w&&(ct(),A(w,1,1,()=>{w=null}),ft())},i(m){r||(z(l),z(w),r=!0)},o(m){A(l),A(w),r=!1},d(m){m&&T(e),l&&l.d(),w&&w.d(),s=!1,c()}}}function Ki(t,e,n){let i;return Ft(t,Rt,o=>n(0,i=o)),[i,()=>{Wt.setView(U.Main)}]}class ta extends tt{constructor(e){super(),K(this,e,Ki,Qi,J,{})}}function ea(t){let e;return{c(){e=x("div"),e.innerHTML=`<ul class="soc"><li><a class="soc-linkedin" target="_blank" href="http://linkedin.com/in/val-hovey" rel="noreferrer"><span>My Linkedin</span></a></li> 
    <li><a class="soc-github soc-icon-last" target="_blank" href="http://github.com/valhovey" rel="noreferrer"><span>My GitHub</span></a></li></ul> 
  <div class="links"><a href="blog">Blog</a> 
    <span class="divider">|</span> 
    <a href="https://github.com/valhovey/resume/raw/master/val_hovey_resume.pdf">Resume</a> 
    <span class="divider">|</span> 
    <a href="MATH_5620">Math 5620</a></div>`,k(e,"class","bottom-bar")},m(n,i){N(n,e,i)},p:j,i:j,o:j,d(n){n&&T(e)}}}class na extends tt{constructor(e){super(),K(this,e,null,ea,J,{})}}function ia(t){let e;return{c(){e=x("canvas"),k(e,"id","boids-canvas"),k(e,"class","full-canvas")},m(n,i){N(n,e,i)},p:j,i:j,o:j,d(n){n&&T(e)}}}function aa(t){const e={r:63,g:66,b:65},n={r:150,g:200,b:255};return Cn(()=>{const i=document.getElementById("boids-canvas"),a=i.getContext("2d"),o=()=>{i.width=window.innerWidth,i.height=window.innerHeight};window.addEventListener("resize",o),o();const r=h=>{if(a===null)return;const[M,H]=h.pos,[F,nt]=h.dS,st=Math.atan2(nt,F);a.save(),a.translate(M,H),a.rotate(st),a.beginPath(),a.moveTo(10,0),a.lineTo(-10,5),a.lineTo(-10,-5),a.closePath(),a.fillStyle=zt(et(h)),a.fill(),a.restore()},s=1,c=200,l=.5,w=2,m=.4,C=.001,_=.95,g=1e-6,I=.001,f=.01,u=([h,M],[H,F])=>[h+H,M+F],p=([h,M],[H,F])=>[h-H,M-F],b=(h,[M,H])=>[h*M,h*H],v=([h,M])=>Math.sqrt(h*h+M*M),S=(h,M)=>v(p(h,M)),d=h=>{const M=v(h);return M!==0?b(1/M,h):h},E=h=>1/(1+Math.exp(40*(h-.5)**2)),O=(h,M,H)=>(1-h)*M+h*H,R=(h,{r:M,g:H,b:F},{r:nt,g:st,b:B})=>({r:O(h,M,nt),g:O(h,H,st),b:O(h,F,B)}),et=h=>R(E(h.activation),e,n),zt=({r:h,g:M,b:H})=>`rgb(${h},${M},${H})`,V=(h,M)=>{const H=p(h,M),F=v(H);return b(Math.min(C,F),d(H))},G=(h,M)=>{let H=0,F=[0,0],nt=[0,0],st=[0,0],B=0;for(const lt of M){const it=S(lt.pos,h.pos);it>0&&it<=c&&(H+=1,F=u(F,b(1/it,d(lt.dS))),nt=u(nt,lt.pos),st=b(1/it,d(p(h.pos,lt.pos))),B+=E(lt.activation)/it)}let mt=[0,0],Lt=[0,0],dt=[0,0];if(H>0){const lt=b(s,d(st));mt=b(l,V(lt,h.dS));const it=b(s,d(F));Lt=b(w,V(it,h.dS));const dn=b(s,d(p(nt,h.pos)));dt=b(m,V(dn,h.dS))}return[mt,Lt,dt,B]},bt=(h,M)=>{const[H,F,nt,st]=G(h,M),B=u(h.pos,h.dS),mt=u(h.dS,h.d2S),Lt=u(u(H,u(F,nt)),h.d2S);let dt=h.activation*_;dt<=g&&(dt=0,(st>=f||Math.random()>1-I)&&(dt=1));const it=v(mt)>s?b(s,d(mt)):mt;return B[0]>i.width&&(B[0]=0),B[0]<0&&(B[0]=i.width),B[1]>i.height&&(B[1]=0),B[1]<0&&(B[1]=i.height),{pos:B,dS:it,d2S:Lt,activation:dt}},W=[];for(let h=0;h<200;h++){const M=Math.random()*2*Math.PI;W.push({pos:[Math.random()*i.width,Math.random()*i.height],dS:[Math.cos(M),Math.sin(M)],d2S:[0,0],activation:0})}for(let h=0;h<100;h++)for(let M=0;M<W.length;M++)W[M]=bt(W[M],W);const yt=()=>{requestAnimationFrame(yt),a.clearRect(0,0,i.width,i.height);for(let h=0;h<W.length;h++)r(W[h]),W[h]=bt(W[h],W)};window.innerWidth>600&&yt()}),[]}class ra extends tt{constructor(e){super(),K(this,e,aa,ia,J,{})}}function oa(t){let e;return{c(){e=x("div"),e.innerHTML=`<h2>Project Portfolio</h2> 
  <p>Hi! My name is Val. I grew up in a small community in the Sierra Nevada
    foothills. In 2019, I graduated Utah State University with a BS in
    Computational Mathematics. My passions include astrophotography, mathematics,
    electrical engineering, programming, music, hiking, and biking. Here you
    can see some highlights from my past/current projects. Check out my blog for
    posts on math, programming, and astrophotography.</p>`},m(n,i){N(n,e,i)},p:j,i:j,o:j,d(n){n&&T(e)}}}class sa extends tt{constructor(e){super(),K(this,e,null,oa,J,{})}}const la="images/projects/chef_dex.png",ca="images/projects/diffraction.png",fa="images/projects/haskell.png",ua="images/projects/balatro.png",da="images/projects/cal_sim.png",ha="images/projects/myst_net.png",ma="images/projects/fireplace.png",pa="images/projects/euler_golf.png",ga="images/projects/hail_mary_dithered.png",va="images/projects/gaia_atlas_dithered.png",ba="images/projects/fiery_furnace.png",ya="images/projects/8_bit_spaghetti.png",wa="images/projects/acoustic-forest.png",Ca="images/projects/station_analysis.png",ka="images/projects/villein_translator.png",xa="images/projects/automata_exploration.png",je=[{title:"GAIA Mary",icon:Vi,image:ga,year:"2026",brief:"Recreation of the starmap of Project Hail Mary",description:"Using the GAIA DR3 all sky survey data from the European Space Agency, I recreated an accurate starmap of our local system inspired by the in-ship map in the movie Project Hail Mary. I have been obsessed with this story and have seen the movie multiple times. I happened to be working with the GAIA data to see if I could render accurate Milky Way skyboxes. That work ended up turning into a hail mary of my own to try and recreate my favorite UI in the whole film.",link:"https://valhovey.github.io/gaia-mary"},{title:"GAIA Atlas",icon:Pi,image:va,year:"2026",brief:"3D atlas of stars, exoplanets, constellations, and more",description:"This is a sequel to my GAIA Mary project which adds features letting you explore our local star system. Go to stars, view 3D constellations, chart interstellar travel and calculate the time it would take to visit neighboring systems. Planetary locations are accurate on load, and information about dozens of named stars are included in the map. Visit exoplanetary systems and learn about their host stars. Most of all, have fun.",link:"https://valhovey.github.io/gaia-atlas"},{title:"Chef-Dex",icon:Li,image:la,year:"2025",brief:"Recursive recipe browser for Risk of Rain 2",description:"In the roguelike videogame Risk of Rain 2 there is a mechanic added in the Alloyed Collective DLC that allows you to combine items to create new ones that benefit your build. Some ingredients themselves are also craftable, making for a multi-dimensional puzzle of finding alternate recipes to get items. I built a small Unity C# mod to export the recipes from the game runtime then created a web browser that displays recipe trees dynamically for each craftable item.",link:"https://chef-dex.vercel.app/"},{title:"A Tour of Haskell",icon:Si,image:fa,year:"2025",brief:"Educational overview of professional Haskell",description:"At Mercury, I have had the joy of getting to work with Haskell professionally over multiple years. I'm grateful that I get to work with such a wonderful language, and I have written both a blog post and presented a talk on how to approach professional Haskell as a newcomer. I based the talk on what I wish I could have known going into learning Haskell my first time.",link:"https://github.com/valhovey/a-tour-of-haskell"},{title:"State With Elm",icon:_i,image:ua,year:"2025",brief:"My talk on FE state management",description:"At a local UtahJS meetup I gave a talk on one of my favorite web frameworks: Elm. Elm inspired much of the state models of React, the error messages in Rust, and has roots in Haskell as an ML type language. To demonstrate state management, I built a minimal Balatro clone that does hand score calculation.",link:"https://github.com/valhovey/rethinking-state-with-elm"},{title:"Star Spike Simulations",icon:ki,image:ca,year:"2025",brief:"Simulating telescope star spikes",description:"My Newtonian reflector telescope has a non-standard offset secondary vane structure, and I was curious how this would change the star spikes in my images. I used the Poppy diffraction modeling library by Space Telescope Science Institute to simulate different offsets, misalignments, and support structures. I used the results to help diagnose minor calibration errors so I can tune my secondary more easily.",link:"https://github.com/valhovey/star-simulations?tab=readme-ov-file"},{title:"Automata Browser",icon:xi,image:xa,year:"2020",brief:"Global map of all life-like Cellular Automata",description:"I was researching emergent complexity in cellular automata and found a classification scheme for all quarter million life-like automata. The embedding compresses all of the rules into a nebula of points where distance between any two points provides a decent approximation of how simililarly the rules behave given a random initial board state. I built this browser with React so that I could better explore the dataset.",link:"/automata-nebula-explorer/index.html"},{title:"Fiery Furnace",icon:ji,image:ba,year:"2020",brief:"Interactive map of the Fiery Furnace in Arches National Park",description:"Pre-pandemic, my partner Hannah and I took a trip down to Arches National Park in Utah. The highlight was exploring the Fiery Furnace: a labrynth of ancient sandstone with no main trail, only meandering boulder routes and washes. I exported the route data (recorded with my watch) and interpolated photo time-stamps with location time-stamps to create an interactive map of our path with pictures along the way using Mapbox.",link:"/FieryFurnace/index.html"},{title:"Myst Net",icon:Ii,image:ha,year:"2019",brief:"Neural Net for parsing D'ni numerals",description:"This was my last hackathon project. The D'ni numeral system is from the world of Myst, a game series that I am a very large fan of. The system is base-25, and has a rotational glyph system with a base-5 sub-pattern. I wanted to see if I could reproduce the MNIST convnet example using D'ni numbers. To generate training data, I wrote the segments in isolation and created a script to produce combinatorial sets of the individual segments I created. In the end, the network had over 99% validation accuracy and responded well to novel handwritten D'ni digits.",link:"https://github.com/valhovey/myst-net"},{title:"CALSim",icon:Ti,image:da,year:"2016",brief:"In-browser WireWorld cellular automata simulator",description:"This is a WireWorld Cellular Automata simulator written in JavaScript. WireWorld is a CA capable of logic simulation. In fact, it is Turing Complete! This in-browser interpreter allows you to create structures, copy, paste, delete, and pause/play/step simulations.",link:"CALSim/index.html"},{title:"Villein Translator",icon:yi,image:ka,year:"2016",brief:"Translator for Obduction's Villein numbers",description:`In Cyan's new game Obduction there is an alien race called the Villeins. Part of the game is figuring out their numbering system, which uses a three-by-three grid on which five "digits" can lie. The whole system is base-4, and I had a bunch of fun figuring it out. I wanted to create a translator to quickly verify numbers, so I made one husing the html5 canvas.`,link:"Villein/index.html"},{title:"Euler Golf",icon:bi,image:pa,year:"2015",brief:"Recursive puzzle involving complex numbers",description:"When I was attending Cuesta College in San Luis Obispo, I had an idea for a game over the Gaussian Integers (complex numbers of the form a+bi where a and b are both integers). I quickly found that the game was evil in difficulty, and as I shared it with friends I also learned that it was not just me. In light of this newfound challenge, I created an in-browser version as a Hackathon project. More info can be found on the site.",link:"EulerGolf/index.html"},{title:"Station Report",icon:Ci,image:Ca,year:"2018",brief:"Analysis to find the best spots for new EV chargers",description:"In Utah, where the air is bad enough each winter to take years off of the average person's life expectancy, electric vehicle adoption is one of the many solutions to our air quality. At the Utah Power and Electronics Lab (UPEL), I helped Rocky Mountain Power determine where to place/fund new electric vehicle charging stations in Utah. We worked with the Utah Department of Transportation to combine traffic information, as well as network analysis on the roadways to find the locations that would have the highest impact for EV adoption. This interactive report summarizes the findings of the analysis and visualizes what corridors are affected.",link:"stationReport/index.html"},{title:"8-Bit Spaghetti",icon:Ai,image:ya,year:"2012",brief:"8-Bit Computer designed from the ground up",description:'One fateful night of playing Minecraft with my best friend and I was convinced that I had to learn more about the inner workings of a CPU. We had just installed a mod that added basic digital components to the game, and my friend was constructing a processor. I knew nothing about architecture at that point, but I wanted to learn more. I began my journey reading "Digital Computer Electronics" by Malvino and started constructing the basic modular components of a computer. Eventually I had constructed a processor of my own design. The final product had EM interference which induced signalling issues, but the knowledge I gained benefits me to this day. I made a website and tutorial to aid anyone who wishes to acheive the same goal. I know of a few individuals so far that have used my instructions to build their own CPU.',link:"https://8-bitspaghetti.com"},{title:"Fireplace",icon:zi,image:ma,year:"2016",brief:"Custom simulator written to mimic a campfire",description:"One of my favorite things to do in my free time is to program new patterns for the Adafruit Neopixel shield (a 5x8 RGB LED matrix for the Arduino). Since I camp a lot, I wanted to simulate fire on it with the hopes of creating a calming lantern for my tent. I decided to go with a slightly neural-network inspired approach. I created an ember class that has an internal fire value and a customized sigmoid curve function that will map the embers' fire values to something between 0 and 1. A stoke method adds a random integer in a specified range, and a diminish method multiplies the fire variable by a predetermined constant (0<k<1). I was so happy with the results that I wanted to create an in-browser version. This time, I used HTML5 and JS to create a grid of embers. I shaped the fire on the page by making the range for the random constant that each ember is stoked with depend on the ember's position on the page. Vertically there is a linear gradient, and horizontally there is a gaussian distribution determined by page width.",link:"FirePlace/index.html"},{title:"Acoustic Forest",icon:Ei,image:wa,year:"2016",brief:"2D Procedural landscape that is reactive to sound",description:`A natural continuation of my FirePlace project and an ode to John Muir and the mountains, I created Acoustic Forest: a music visualizer that uses procedurally generated terrain with unique elements augmented by distinct frequency bands in a song. I decided to go with Muse's "Exogenesis Symphony Part 3" which I claim absolutely no rights to and will take down at first request of any proprietor's request. I chose the song because it just so happened that Muse's masterful composition consists of a crescendo of increasing layers of elements, then a decrescendo back out. The structure of the song itself is a mountain in shape, which made it perfect to bring in elements slowly, then bring them out in reverse order. Currently this only runs in Chrome/Safari for desktop, so apologies to mobile users. Granted, this was created in Canvas without WebGL, so expect heavy processor usage.`,link:"AcousticForest/index.html"}];function Pe(t,e,n){const i=t.slice();return i[2]=e[n],i}function Ve(t){let e,n;return e=new sa({}),{c(){Z(e.$$.fragment)},m(i,a){Y(e,i,a),n=!0},i(i){n||(z(e.$$.fragment,i),n=!0)},o(i){A(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Ee(t){let e,n,i,a,o,r,s,c,l,w,m,C,_=je,g=[];for(let f=0;f<_.length;f+=1)g[f]=Te(Pe(t,_,f));const I=f=>A(g[f],1,1,()=>{g[f]=null});return l=new le({props:{icon:wi}}),{c(){e=x("ul");for(let f=0;f<g.length;f+=1)g[f].c();n=P(),i=x("hr"),a=P(),o=x("div"),r=x("a"),s=x("button"),c=x("div"),Z(l.$$.fragment),w=P(),m=x("span"),m.textContent="Astrophotography",k(e,"class","projects-list"),k(i,"class","divider"),k(m,"class","title"),k(c,"class","title-section"),k(s,"class","photography-portfolio-link"),k(r,"href","https://app.astrobin.com/u/valence#gallery"),k(r,"target","_blank"),k(o,"class","photography-button-container")},m(f,u){N(f,e,u);for(let p=0;p<g.length;p+=1)g[p].m(e,null);N(f,n,u),N(f,i,u),N(f,a,u),N(f,o,u),y(o,r),y(r,s),y(s,c),Y(l,c,null),y(c,w),y(c,m),C=!0},p(f,u){if(u&0){_=je;let p;for(p=0;p<_.length;p+=1){const b=Pe(f,_,p);g[p]?(g[p].p(b,u),z(g[p],1)):(g[p]=Te(b),g[p].c(),z(g[p],1),g[p].m(e,null))}for(ct(),p=_.length;p<g.length;p+=1)I(p);ft()}},i(f){if(!C){for(let u=0;u<_.length;u+=1)z(g[u]);z(l.$$.fragment,f),C=!0}},o(f){g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)A(g[u]);A(l.$$.fragment,f),C=!1},d(f){f&&T(e),De(g,f),f&&T(n),f&&T(i),f&&T(a),f&&T(o),X(l)}}}function Te(t){let e,n;return e=new Di({props:{project:t[2]}}),{c(){Z(e.$$.fragment)},m(i,a){Y(e,i,a),n=!0},p:j,i(i){n||(z(e.$$.fragment,i),n=!0)},o(i){A(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Ne(t){let e,n;return e=new Ui({}),{c(){Z(e.$$.fragment)},m(i,a){Y(e,i,a),n=!0},i(i){n||(z(e.$$.fragment,i),n=!0)},o(i){A(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Oe(t){let e,n;return e=new ta({}),{c(){Z(e.$$.fragment)},m(i,a){Y(e,i,a),n=!0},i(i){n||(z(e.$$.fragment,i),n=!0)},o(i){A(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function _a(t){let e,n,i,a,o,r,s,c,l,w,m,C,_,g,I;i=new ra({});let f=t[0]===U.Main&&Ve(),u=t[0]===U.Main&&Ee(t),p=t[0]===U.Project&&Ne(),b=t[0]===U.Photos&&Oe();return g=new na({}),{c(){e=x("main"),n=x("div"),Z(i.$$.fragment),a=P(),o=x("div"),r=x("div"),s=x("div"),c=x("div"),l=P(),f&&f.c(),w=P(),u&&u.c(),m=P(),p&&p.c(),C=P(),b&&b.c(),_=P(),Z(g.$$.fragment),k(c,"class","logo"),k(s,"class","description"),k(r,"class","main"),k(o,"class","content"),k(n,"class","container")},m(v,S){N(v,e,S),y(e,n),Y(i,n,null),y(n,a),y(n,o),y(o,r),y(r,s),y(s,c),y(s,l),f&&f.m(s,null),y(r,w),u&&u.m(r,null),y(r,m),p&&p.m(r,null),y(r,C),b&&b.m(r,null),y(r,_),Y(g,r,null),I=!0},p(v,[S]){v[0]===U.Main?f?S&1&&z(f,1):(f=Ve(),f.c(),z(f,1),f.m(s,null)):f&&(ct(),A(f,1,1,()=>{f=null}),ft()),v[0]===U.Main?u?(u.p(v,S),S&1&&z(u,1)):(u=Ee(v),u.c(),z(u,1),u.m(r,m)):u&&(ct(),A(u,1,1,()=>{u=null}),ft()),v[0]===U.Project?p?S&1&&z(p,1):(p=Ne(),p.c(),z(p,1),p.m(r,C)):p&&(ct(),A(p,1,1,()=>{p=null}),ft()),v[0]===U.Photos?b?S&1&&z(b,1):(b=Oe(),b.c(),z(b,1),b.m(r,_)):b&&(ct(),A(b,1,1,()=>{b=null}),ft())},i(v){I||(z(i.$$.fragment,v),z(f),z(u),z(p),z(b),z(g.$$.fragment,v),I=!0)},o(v){A(i.$$.fragment,v),A(f),A(u),A(p),A(b),A(g.$$.fragment,v),I=!1},d(v){v&&T(e),X(i),f&&f.d(),u&&u.d(),p&&p.d(),b&&b.d(),X(g)}}}function Ma(t,e,n){let i;return Ft(t,Wt,a=>n(0,i=a)),[i]}class Ia extends tt{constructor(e){super(),K(this,e,Ma,_a,J,{})}}new Ia({target:document.getElementById("app")});
