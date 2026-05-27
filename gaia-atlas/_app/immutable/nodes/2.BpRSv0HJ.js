var zu=Object.defineProperty;var ku=(n,e,t)=>e in n?zu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ye=(n,e,t)=>ku(n,typeof e!="symbol"?e+"":e,t);import{a as bt,f as Gt,d as Hr}from"../chunks/r6iy9GKE.js";import{o as Hu}from"../chunks/CgW0znJV.js";import{am as Ct,ak as wl,V as Eo,a1 as yr,aS as Ts,ag as Dl,ad as q,aJ as Gu,p as Vu,aX as Wo,aT as As,al as ys,d as Rl,m as Wu,ar as Xo,a2 as Hn,j as Si,W as Rr,a8 as Xu,aV as Ku,a6 as Yu,i as qu,h as $u,aA as ju,aY as Ko,E as Zu,D as Ju,aM as Cl,aD as Ll,I as $r,b as Qu,Y as eh,az as th,a7 as ih,U as bo,at as nh,ah as Ca,g as Il,aI as To,f as sh,M as rh,l as ah,B as oh,R as ch,a9 as lh,b3 as Ao,G as uh,aw as hh,aC as fs,b7 as Ul,J as dh,K as fh,H as ph,C as Yo,w as qo,A as mh,N as gh,ai as _h,af as vh,F as xh,Q as Mh,s as Sh,r as Nl,ax as Fl,b2 as yh,aK as Ol,aH as Eh,aZ as Ut,aG as $o,b5 as Ti,aO as Xe,b1 as jt,aE as bh,X as be,aW as Ue,aB as vi,$ as Th,aL as ge,b4 as oi,ab as jo}from"../chunks/lxDbxSYs.js";import{b as Ah,d as Ph,e as Vs,a as Bt,s as vt}from"../chunks/BTmjdIAC.js";import{b as Zo,i as Ai}from"../chunks/Bkwezt9T.js";import{B as wh}from"../chunks/JdF8cX35.js";import{d as Dh}from"../chunks/DJ97d8uV.js";const Rh=Symbol("NaN");function Jo(n,e,t){Ct&&wl();var i=new wh(n);Eo(()=>{var s=e();s!==s&&(s=Rh),i.ensure(s,t)})}function Qo(n,e){return e}function Ch(n,e,t){for(var i=[],s=e.length,r,a=e.length,o=0;o<s;o++){let d=e[o];Ll(d,()=>{if(r){if(r.pending.delete(d),r.done.add(d),r.pending.size===0){var f=n.outrogroups;La(n,bo(r.done)),f.delete(r),f.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=i.length===0&&t!==null;if(c){var l=t,u=l.parentNode;eh(u),u.append(l),n.items.clear()}La(n,e,!c)}else r={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function La(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var s=0;s<e.length;s++){var r=e[s];if(i!=null&&i.has(r)){r.f|=Si;const a=document.createDocumentFragment();th(r,a)}else ih(e[s],t)}}var ec;function nn(n,e,t,i,s,r=null){var a=n,o=new Map,c=(e&Il)!==0;if(c){var l=n;a=Ct?Ts(Dl(l)):l.appendChild(yr())}Ct&&wl();var u=null,d=Yu(()=>{var S=t();return nh(S)?S:S==null?[]:bo(S)}),f,m=new Map,g=!0;function _(S){E.effect.f&Ju||(E.pending.delete(S),E.fallback=u,Lh(E,f,a,e,i),u!==null&&(f.length===0?u.f&Si?(u.f^=Si,Es(u,null,a)):Cl(u):Ll(u,()=>{u=null})))}function h(S){E.pending.delete(S)}var p=Eo(()=>{f=q(d);var S=f.length;let T=!1;if(Ct){var I=Gu(a)===Vu;I!==(S===0)&&(a=Wo(),Ts(a),As(!1),T=!0)}for(var P=new Set,A=Hn,F=Ku(),$=0;$<S;$+=1){Ct&&ys.nodeType===Rl&&ys.data===Wu&&(a=ys,T=!0,As(!1));var v=f[$],y=i(v,$),W=g?null:o.get(y);W?(W.v&&Xo(W.v,v),W.i&&Xo(W.i,$),F&&A.unskip_effect(W.e)):(W=Ih(o,g?a:ec??(ec=yr()),v,y,$,s,e,t),g||(W.e.f|=Si),o.set(y,W)),P.add(y)}if(S===0&&r&&!u&&(g?u=Rr(()=>r(a)):(u=Rr(()=>r(ec??(ec=yr()))),u.f|=Si)),S>P.size&&Xu(),Ct&&S>0&&Ts(Wo()),!g)if(m.set(A,P),F){for(const[X,Y]of o)P.has(X)||A.skip_effect(Y.e);A.oncommit(_),A.ondiscard(h)}else _(A);T&&As(!0),q(d)}),E={effect:p,items:o,pending:m,outrogroups:null,fallback:u};g=!1,Ct&&(a=ys)}function ps(n){for(;n!==null&&!(n.f&Qu);)n=n.next;return n}function Lh(n,e,t,i,s){var v,y,W,X,Y,ee,k,ie,K;var r=(i&sh)!==0,a=e.length,o=n.items,c=ps(n.effect.first),l,u=null,d,f=[],m=[],g,_,h,p;if(r)for(p=0;p<a;p+=1)g=e[p],_=s(g,p),h=o.get(_).e,h.f&Si||((y=(v=h.nodes)==null?void 0:v.a)==null||y.measure(),(d??(d=new Set)).add(h));for(p=0;p<a;p+=1){if(g=e[p],_=s(g,p),h=o.get(_).e,n.outrogroups!==null)for(const pe of n.outrogroups)pe.pending.delete(h),pe.done.delete(h);if(h.f&$r&&(Cl(h),r&&((X=(W=h.nodes)==null?void 0:W.a)==null||X.unfix(),(d??(d=new Set)).delete(h))),h.f&Si)if(h.f^=Si,h===c)Es(h,null,t);else{var E=u?u.next:c;h===n.effect.last&&(n.effect.last=h.prev),h.prev&&(h.prev.next=h.next),h.next&&(h.next.prev=h.prev),Hi(n,u,h),Hi(n,h,E),Es(h,E,t),u=h,f=[],m=[],c=ps(u.next);continue}if(h!==c){if(l!==void 0&&l.has(h)){if(f.length<m.length){var S=m[0],T;u=S.prev;var I=f[0],P=f[f.length-1];for(T=0;T<f.length;T+=1)Es(f[T],S,t);for(T=0;T<m.length;T+=1)l.delete(m[T]);Hi(n,I.prev,P.next),Hi(n,u,I),Hi(n,P,S),c=S,u=P,p-=1,f=[],m=[]}else l.delete(h),Es(h,c,t),Hi(n,h.prev,h.next),Hi(n,h,u===null?n.effect.first:u.next),Hi(n,u,h),u=h;continue}for(f=[],m=[];c!==null&&c!==h;)(l??(l=new Set)).add(c),m.push(c),c=ps(c.next);if(c===null)continue}h.f&Si||f.push(h),u=h,c=ps(h.next)}if(n.outrogroups!==null){for(const pe of n.outrogroups)pe.pending.size===0&&(La(n,bo(pe.done)),(Y=n.outrogroups)==null||Y.delete(pe));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||l!==void 0){var A=[];if(l!==void 0)for(h of l)h.f&$r||A.push(h);for(;c!==null;)!(c.f&$r)&&c!==n.fallback&&A.push(c),c=ps(c.next);var F=A.length;if(F>0){var $=i&Il&&a===0?t:null;if(r){for(p=0;p<F;p+=1)(k=(ee=A[p].nodes)==null?void 0:ee.a)==null||k.measure();for(p=0;p<F;p+=1)(K=(ie=A[p].nodes)==null?void 0:ie.a)==null||K.fix()}Ch(n,A,$)}}r&&To(()=>{var pe,le;if(d!==void 0)for(h of d)(le=(pe=h.nodes)==null?void 0:pe.a)==null||le.apply()})}function Ih(n,e,t,i,s,r,a,o){var c=a&qu?a&$u?Ko(t):ju(t,!1,!1):null,l=a&Zu?Ko(s):null;return{v:c,i:l,e:Rr(()=>(r(e,c??t,l??s,o),()=>{n.delete(i)}))}}function Es(n,e,t){if(n.nodes)for(var i=n.nodes.start,s=n.nodes.end,r=e&&!(e.f&Si)?e.nodes.start:t;i!==null;){var a=Ca(i);if(r.before(i),i===s)return;i=a}}function Hi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const Uh=()=>performance.now(),Ii={tick:n=>requestAnimationFrame(n),now:()=>Uh(),tasks:new Set};function Bl(){const n=Ii.now();Ii.tasks.forEach(e=>{e.c(n)||(Ii.tasks.delete(e),e.f())}),Ii.tasks.size!==0&&Ii.tick(Bl)}function Nh(n){let e;return Ii.tasks.size===0&&Ii.tick(Bl),{promise:new Promise(t=>{Ii.tasks.add(e={c:n,f:t})}),abort(){Ii.tasks.delete(e)}}}function Ws(n,e){Ul(()=>{n.dispatchEvent(new CustomEvent(e))})}function Fh(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function tc(n){const e={},t=n.split(";");for(const i of t){const[s,r]=i.split(":");if(!s||r===void 0)break;const a=Fh(s.trim());e[a]=r.trim()}return e}const Oh=n=>n;function Gi(n,e,t,i){var S;var s=(n&dh)!==0,r=(n&fh)!==0,a=s&&r,o=(n&uh)!==0,c=a?"both":s?"in":"out",l,u=e.inert,d=e.style.overflow,f,m;function g(){return Ul(()=>l??(l=t()(e,(i==null?void 0:i())??{},{direction:c})))}var _={is_global:o,in(){var T;if(e.inert=u,!s){m==null||m.abort(),(T=m==null?void 0:m.reset)==null||T.call(m);return}r||f==null||f.abort(),f=Ia(e,g(),m,1,()=>{Ws(e,"introstart")},()=>{Ws(e,"introend"),f==null||f.abort(),f=l=void 0,e.style.overflow=d})},out(T){if(!r){T==null||T(),l=void 0;return}e.inert=!0,m=Ia(e,g(),f,0,()=>{Ws(e,"outrostart")},()=>{Ws(e,"outroend"),T==null||T()})},stop:()=>{f==null||f.abort(),m==null||m.abort()}},h=rh;if(((S=h.nodes).t??(S.t=[])).push(_),s&&Ah){var p=o;if(!p){for(var E=h.parent;E&&E.f&ah;)for(;(E=E.parent)&&!(E.f&oh););p=!E||(E.f&ch)!==0}p&&lh(()=>{Ao(()=>_.in())})}}function Ia(n,e,t,i,s,r){var a=i===1;if(hh(e)){var o,c=!1;return To(()=>{if(!c){var p=e({direction:a?"in":"out"});o=Ia(n,p,t,i,s,r)}}),{abort:()=>{c=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration)&&!(e!=null&&e.delay))return s(),r(),{abort:fs,deactivate:fs,reset:fs,t:()=>i};const{delay:l=0,css:u,tick:d,easing:f=Oh}=e;var m=[];if(a&&t===void 0&&(d&&d(0,1),u)){var g=tc(u(0,1));m.push(g,g)}var _=()=>1-i,h=n.animate(m,{duration:l,fill:"forwards"});return h.onfinish=()=>{h.cancel(),s();var p=(t==null?void 0:t.t())??1-i;t==null||t.abort();var E=i-p,S=e.duration*Math.abs(E),T=[];if(S>0){var I=!1;if(u)for(var P=Math.ceil(S/16.666666666666668),A=0;A<=P;A+=1){var F=p+E*f(A/P),$=tc(u(F,1-F));T.push($),I||(I=$.overflow==="hidden")}I&&(n.style.overflow="hidden"),_=()=>{var v=h.currentTime;return p+E*f(v/S)},d&&Nh(()=>{if(h.playState!=="running")return!1;var v=_();return d(v,1-v),!0})}h=n.animate(T,{duration:S,fill:"forwards"}),h.onfinish=()=>{_=()=>i,d==null||d(i,1-i),r()}},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=fs)},deactivate:()=>{r=fs},reset:()=>{i===0&&(d==null||d(1,0))},t:()=>_()}}function Bh(n,e){let t=null,i=Ct;var s;if(Ct){t=ys;for(var r=Dl(document.head);r!==null&&(r.nodeType!==Rl||r.data!==n);)r=Ca(r);if(r===null)As(!1);else{var a=Ca(r);r.remove(),Ts(a)}}Ct||(s=document.head.appendChild(yr()));try{Eo(()=>{var o=Rr(()=>e(s));o.f|=ph})}finally{i&&(As(!0),Ts(t))}}const ic=[...` 	
\r\f \v\uFEFF`];function zh(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var s of Object.keys(t))if(t[s])i=i?i+" "+s:s;else if(i.length)for(var r=s.length,a=0;(a=i.indexOf(s,a))>=0;){var o=a+r;(a===0||ic.includes(i[a-1]))&&(o===i.length||ic.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function kh(n,e){return n==null?null:String(n)}function sn(n,e,t,i,s,r){var a=n[Yo];if(Ct||a!==t||a===void 0){var o=zh(t,i,r);(!Ct||o!==n.getAttribute("class"))&&(o==null?n.removeAttribute("class"):e?n.className=o:n.setAttribute("class",o)),n[Yo]=t}else if(r&&s!==r)for(var c in r){var l=!!r[c];(s==null||l!==!!s[c])&&n.classList.toggle(c,l)}return r}function ms(n,e,t,i){var s=n[qo];if(Ct||s!==e){var r=kh(e);(!Ct||r!==n.getAttribute("style"))&&(r==null?n.removeAttribute("style"):n.style.cssText=r),n[qo]=e}return i}const Hh=Symbol("is custom element"),Gh=Symbol("is html"),Vh=Nl?"link":"LINK",Wh=Nl?"progress":"PROGRESS";function Jt(n){if(Ct){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var i=n.value;Nt(n,"value",null),n.value=i}if(n.hasAttribute("checked")){var s=n.checked;Nt(n,"checked",null),n.checked=s}}};n[xh]=t,To(t),Mh()}}function Xh(n,e){var t=zl(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==Wh)||(n.value=e??"")}function Nt(n,e,t,i){var s=zl(n);Ct&&(s[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName===Vh)||s[e]!==(s[e]=t)&&(e==="loading"&&(n[Sh]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Kh(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function zl(n){var e;return n[e=mh]??(n[e]={[Hh]:n.nodeName.includes("-"),[Gh]:n.namespaceURI===gh})}var nc=new Map;function Kh(n){var e=n.getAttribute("is")||n.nodeName,t=nc.get(e);if(t)return t;nc.set(e,t=[]);for(var i,s=n,r=Element.prototype;r!==s;){i=vh(s);for(var a in i)i[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.push(a);s=_h(s)}return t}function sc(n,e,t=e){var i=new WeakSet;Fl(n,"input",async s=>{var r=s?n.defaultValue:n.value;if(r=jr(n)?Zr(r):r,t(r),Hn!==null&&i.add(Hn),await yh(),r!==(r=e())){var a=n.selectionStart,o=n.selectionEnd,c=n.value.length;if(n.value=r??"",o!==null){var l=n.value.length;a===o&&o===c&&l>c?(n.selectionStart=l,n.selectionEnd=l):(n.selectionStart=a,n.selectionEnd=Math.min(o,l))}}}),(Ct&&n.defaultValue!==n.value||Ao(e)==null&&n.value)&&(t(jr(n)?Zr(n.value):n.value),Hn!==null&&i.add(Hn)),Ol(()=>{var s=e();if(n===document.activeElement){var r=Hn;if(i.has(r))return}jr(n)&&s===Zr(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function xi(n,e,t=e){Fl(n,"change",i=>{var s=i?n.defaultChecked:n.checked;t(s)}),(Ct&&n.defaultChecked!==n.checked||Ao(e)==null)&&t(n.checked),Ol(()=>{var i=e();n.checked=!!i})}function jr(n){var e=n.type;return e==="number"||e==="range"}function Zr(n){return n===""?null:+n}const Yh=n=>n;function Vi(n,{delay:e=0,duration:t=400,easing:i=Yh}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}var qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $h(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var kl={exports:{}};(function(n){((e,t)=>{n.exports?n.exports=t():e.fuzzysort=t()})(qh,e=>{var t=(L,D)=>{if(!L||!D)return le;var V=g(L);k(D)||(D=m(D));var te=V.bitflags;return(te&D._bitflags)!==te?le:h(V,D)},i=(L,D,V)=>{if(!L)return V!=null&&V.all?_(D,V):pe;var te=g(L),ae=te.bitflags,se=te.containsSpace,ne=d((V==null?void 0:V.threshold)||0),ve=(V==null?void 0:V.limit)||ie,he=0,w=0,He=D.length;function Be(ce){he<ve?(qe.add(ce),++he):(++w,ce._score>qe.peek()._score&&qe.replaceTop(ce))}if(V!=null&&V.key)for(var ze=V.key,me=0;me<He;++me){var We=D[me],Me=ee(We,ze);if(Me&&(k(Me)||(Me=m(Me)),(ae&Me._bitflags)===ae)){var b=h(te,Me);b!==le&&(b._score<ne||(b.obj=We,Be(b)))}}else if(V!=null&&V.keys){var M=V.keys,z=M.length;e:for(var me=0;me<He;++me){var We=D[me];{for(var Z=0,J=0;J<z;++J){var ze=M[J],Me=ee(We,ze);if(!Me){X[J]=Te;continue}k(Me)||(Me=m(Me)),X[J]=Me,Z|=Me._bitflags}if((ae&Z)!==ae)continue}if(se)for(let xe=0;xe<te.spaceSearches.length;xe++)y[xe]=K;for(var J=0;J<z;++J){if(Me=X[J],Me===Te){Y[J]=Te;continue}if(Y[J]=h(te,Me,!1,se),Y[J]===le){Y[J]=Te;continue}if(se)for(let Se=0;Se<te.spaceSearches.length;Se++){if(W[Se]>-1e3&&y[Se]>K){var j=(y[Se]+W[Se])/4;j>y[Se]&&(y[Se]=j)}W[Se]>y[Se]&&(y[Se]=W[Se])}}if(se){for(let xe=0;xe<te.spaceSearches.length;xe++)if(y[xe]===K)continue e}else{var oe=!1;for(let xe=0;xe<z;xe++)if(Y[xe]._score!==K){oe=!0;break}if(!oe)continue}var de=new c(z);for(let xe=0;xe<z;xe++)de[xe]=Y[xe];if(se){var fe=0;for(let xe=0;xe<te.spaceSearches.length;xe++)fe+=y[xe]}else{var fe=K;for(let Se=0;Se<z;Se++){var b=de[Se];if(b._score>-1e3&&fe>K){var j=(fe+b._score)/4;j>fe&&(fe=j)}b._score>fe&&(fe=b._score)}}if(de.obj=We,de._score=fe,V!=null&&V.scoreFn){if(fe=V.scoreFn(de),!fe)continue;fe=d(fe),de._score=fe}fe<ne||Be(de)}}else for(var me=0;me<He;++me){var Me=D[me];if(Me&&(k(Me)||(Me=m(Me)),(ae&Me._bitflags)===ae)){var b=h(te,Me);b!==le&&(b._score<ne||Be(b))}}if(he===0)return pe;for(var Ke=new Array(he),me=he-1;me>=0;--me)Ke[me]=qe.poll();return Ke.total=he+w,Ke},s=(L,D="<b>",V="</b>")=>{for(var te=typeof D=="function"?D:void 0,ae=L.target,se=ae.length,ne=L.indexes,ve="",he=0,w=0,He=!1,Be=[],ze=0;ze<se;++ze){var me=ae[ze];if(ne[w]===ze){if(++w,He||(He=!0,te?(Be.push(ve),ve=""):ve+=D),w===ne.length){te?(ve+=me,Be.push(te(ve,he++)),ve="",Be.push(ae.substr(ze+1))):ve+=me+V+ae.substr(ze+1);break}}else He&&(He=!1,te?(Be.push(te(ve,he++)),ve=""):ve+=V);ve+=me}return te?Be:ve},r=L=>{typeof L=="number"?L=""+L:typeof L!="string"&&(L="");var D=S(L);return l(L,{_targetLower:D._lower,_targetLowerCodes:D.lowerCodes,_bitflags:D.bitflags})},a=()=>{P.clear(),A.clear()};class o{get indexes(){return this._indexes.slice(0,this._indexes.len).sort((D,V)=>D-V)}set indexes(D){return this._indexes=D}highlight(D,V){return s(this,D,V)}get score(){return u(this._score)}set score(D){this._score=d(D)}}class c extends Array{get score(){return u(this._score)}set score(D){this._score=d(D)}}var l=(L,D)=>{const V=new o;return V.target=L,V.obj=D.obj??le,V._score=D._score??K,V._indexes=D._indexes??[],V._targetLower=D._targetLower??"",V._targetLowerCodes=D._targetLowerCodes??le,V._nextBeginningIndexes=D._nextBeginningIndexes??le,V._bitflags=D._bitflags??0,V},u=L=>L===K?0:L>1?L:Math.E**(((-L+1)**.04307-1)*-2),d=L=>L===0?K:L>1?L:1-Math.pow(Math.log(L)/-2+1,1/.04307),f=L=>{typeof L=="number"?L=""+L:typeof L!="string"&&(L=""),L=L.trim();var D=S(L),V=[];if(D.containsSpace){var te=L.split(/\s+/);te=[...new Set(te)];for(var ae=0;ae<te.length;ae++)if(te[ae]!==""){var se=S(te[ae]);V.push({lowerCodes:se.lowerCodes,_lower:te[ae].toLowerCase(),containsSpace:!1})}}return{lowerCodes:D.lowerCodes,_lower:D._lower,containsSpace:D.containsSpace,bitflags:D.bitflags,spaceSearches:V}},m=L=>{if(L.length>999)return r(L);var D=P.get(L);return D!==void 0||(D=r(L),P.set(L,D)),D},g=L=>{if(L.length>999)return f(L);var D=A.get(L);return D!==void 0||(D=f(L),A.set(L,D)),D},_=(L,D)=>{var V=[];V.total=L.length;var te=(D==null?void 0:D.limit)||ie;if(D!=null&&D.key)for(var ae=0;ae<L.length;ae++){var se=L[ae],ne=ee(se,D.key);if(ne!=le){k(ne)||(ne=m(ne));var ve=l(ne.target,{_score:ne._score,obj:se});if(V.push(ve),V.length>=te)return V}}else if(D!=null&&D.keys)for(var ae=0;ae<L.length;ae++){for(var se=L[ae],he=new c(D.keys.length),w=D.keys.length-1;w>=0;--w){var ne=ee(se,D.keys[w]);if(!ne){he[w]=Te;continue}k(ne)||(ne=m(ne)),ne._score=K,ne._indexes.len=0,he[w]=ne}if(he.obj=se,he._score=K,V.push(he),V.length>=te)return V}else for(var ae=0;ae<L.length;ae++){var ne=L[ae];if(ne!=le&&(k(ne)||(ne=m(ne)),ne._score=K,ne._indexes.len=0,V.push(ne),V.length>=te))return V}return V},h=(L,D,V=!1,te=!1)=>{if(V===!1&&L.containsSpace)return p(L,D,te);for(var ae=L._lower,se=L.lowerCodes,ne=se[0],ve=D._targetLowerCodes,he=se.length,w=ve.length,me=0,He=0,Be=0;;){var ze=ne===ve[He];if(ze){if(F[Be++]=He,++me,me===he)break;ne=se[me]}if(++He,He>=w)return le}var me=0,We=!1,Me=0,b=D._nextBeginningIndexes;b===le&&(b=D._nextBeginningIndexes=I(D.target)),He=F[0]===0?0:b[F[0]-1];var M=0;if(He!==w)for(;;)if(He>=w){if(me<=0||(++M,M>200))break;--me;var z=$[--Me];He=b[z]}else{var ze=se[me]===ve[He];if(ze){if($[Me++]=He,++me,me===he){We=!0;break}++He}else He=b[He]}var Z=he<=1?-1:D._targetLower.indexOf(ae,F[0]),J=!!~Z,j=J?Z===0||D._nextBeginningIndexes[Z-1]===Z:!1;if(J&&!j){for(var oe=0;oe<b.length;oe=b[oe])if(!(oe<=Z)){for(var de=0;de<he&&se[de]===D._targetLowerCodes[oe+de];de++);if(de===he){Z=oe,j=!0;break}}}var fe=xe=>{for(var Se=0,Ce=0,Ge=1;Ge<he;++Ge)xe[Ge]-xe[Ge-1]!==1&&(Se-=xe[Ge],++Ce);var Ve=xe[he-1]-xe[0]-(he-1);if(Se-=(12+Ve)*Ce,xe[0]!==0&&(Se-=xe[0]*xe[0]*.2),!We)Se*=1e3;else{for(var ot=1,Ge=b[0];Ge<w;Ge=b[Ge])++ot;ot>24&&(Se*=(ot-24)*10)}return Se-=(w-he)/2,J&&(Se/=1+he*he*1),j&&(Se/=1+he*he*1),Se-=(w-he)/2,Se};if(We)if(j){for(var oe=0;oe<he;++oe)F[oe]=Z+oe;var Ke=F,ce=fe(F)}else var Ke=$,ce=fe($);else{if(J)for(var oe=0;oe<he;++oe)F[oe]=Z+oe;var Ke=F,ce=fe(Ke)}D._score=ce;for(var oe=0;oe<he;++oe)D._indexes[oe]=Ke[oe];D._indexes.len=he;const De=new o;return De.target=D.target,De._score=D._score,De._indexes=D._indexes,De},p=(L,D,V)=>{for(var te=new Set,ae=0,se=le,ne=0,ve=L.spaceSearches,he=ve.length,w=0,He=()=>{for(let j=w-1;j>=0;j--)D._nextBeginningIndexes[v[j*2+0]]=v[j*2+1]},Be=!1,J=0;J<he;++J){W[J]=K;var ze=ve[J];if(se=h(ze,D),V){if(se===le)continue;Be=!0}else if(se===le)return He(),le;var me=J===he-1;if(!me){var We=se._indexes,Me=!0;for(let oe=0;oe<We.len-1;oe++)if(We[oe+1]-We[oe]!==1){Me=!1;break}if(Me){var b=We[We.len-1]+1,M=D._nextBeginningIndexes[b-1];for(let oe=b-1;oe>=0&&M===D._nextBeginningIndexes[oe];oe--)D._nextBeginningIndexes[oe]=b,v[w*2+0]=oe,v[w*2+1]=M,w++}}ae+=se._score/he,W[J]=se._score/he,se._indexes[0]<ne&&(ae-=(ne-se._indexes[0])*2),ne=se._indexes[0];for(var z=0;z<se._indexes.len;++z)te.add(se._indexes[z])}if(V&&!Be)return le;He();var Z=h(L,D,!0);if(Z!==le&&Z._score>ae){if(V)for(var J=0;J<he;++J)W[J]=Z._score/he;return Z}V&&(se=D),se._score=ae;var J=0;for(let j of te)se._indexes[J++]=j;return se._indexes.len=J,se},E=L=>L.replace(new RegExp("\\p{Script=Latin}+","gu"),D=>D.normalize("NFD")).replace(/[\u0300-\u036f]/g,""),S=L=>{L=E(L);for(var D=L.length,V=L.toLowerCase(),te=[],ae=0,se=!1,ne=0;ne<D;++ne){var ve=te[ne]=V.charCodeAt(ne);if(ve===32){se=!0;continue}var he=ve>=97&&ve<=122?ve-97:ve>=48&&ve<=57?26:ve<=127?30:31;ae|=1<<he}return{lowerCodes:te,bitflags:ae,containsSpace:se,_lower:V}},T=L=>{for(var D=L.length,V=[],te=0,ae=!1,se=!1,ne=0;ne<D;++ne){var ve=L.charCodeAt(ne),he=ve>=65&&ve<=90,w=he||ve>=97&&ve<=122||ve>=48&&ve<=57,He=he&&!ae||!se||!w;ae=he,se=w,He&&(V[te++]=ne)}return V},I=L=>{L=E(L);for(var D=L.length,V=T(L),te=[],ae=V[0],se=0,ne=0;ne<D;++ne)ae>ne?te[ne]=ae:(ae=V[++se],te[ne]=ae===void 0?D:ae);return te},P=new Map,A=new Map,F=[],$=[],v=[],y=[],W=[],X=[],Y=[],ee=(L,D)=>{var V=L[D];if(V!==void 0)return V;if(typeof D=="function")return D(L);var te=D;Array.isArray(D)||(te=D.split("."));for(var ae=te.length,se=-1;L&&++se<ae;)L=L[te[se]];return L},k=L=>typeof L=="object"&&typeof L._bitflags=="number",ie=1/0,K=-ie,pe=[];pe.total=0;var le=null,Te=r(""),et=L=>{var D=[],V=0,te={},ae=se=>{for(var ne=0,ve=D[ne],he=1;he<V;){var w=he+1;ne=he,w<V&&D[w]._score<D[he]._score&&(ne=w),D[ne-1>>1]=D[ne],he=1+(ne<<1)}for(var He=ne-1>>1;ne>0&&ve._score<D[He]._score;He=(ne=He)-1>>1)D[ne]=D[He];D[ne]=ve};return te.add=se=>{var ne=V;D[V++]=se;for(var ve=ne-1>>1;ne>0&&se._score<D[ve]._score;ve=(ne=ve)-1>>1)D[ne]=D[ve];D[ne]=se},te.poll=se=>{if(V!==0){var ne=D[0];return D[0]=D[--V],ae(),ne}},te.peek=se=>{if(V!==0)return D[0]},te.replaceTop=se=>{D[0]=se,ae()},te},qe=et();return{single:t,go:i,prepare:r,cleanup:a}})})(kl);var jh=kl.exports;const rc=$h(jh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="169",xn={ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zh=0,ac=1,Jh=2,Hl=1,Qh=2,Li=3,Qi=0,Xt=1,di=2,Fi=0,Xn=1,Ei=2,oc=3,cc=4,ed=5,pn=100,td=101,id=102,nd=103,sd=104,rd=200,ad=201,od=202,cd=203,Ua=204,Na=205,ld=206,ud=207,hd=208,dd=209,fd=210,pd=211,md=212,gd=213,_d=214,Fa=0,Oa=1,Ba=2,$n=3,za=4,ka=5,Ha=6,Ga=7,Gl=0,vd=1,xd=2,Ji=0,Vl=1,Wl=2,Xl=3,Kl=4,Md=5,Yl=6,ql=7,$l=300,jn=301,Zn=302,Va=303,Wa=304,Gr=306,Xa=1e3,gn=1001,Ka=1002,ri=1003,Sd=1004,Xs=1005,fi=1006,Jr=1007,_n=1008,zi=1009,jl=1010,Zl=1011,Rs=1012,wo=1013,Mn=1014,Ui=1015,Oi=1016,Do=1017,Ro=1018,Jn=1020,Jl=35902,Ql=1021,eu=1022,pi=1023,tu=1024,iu=1025,Kn=1026,Qn=1027,nu=1028,Co=1029,su=1030,Lo=1031,Io=1033,Er=33776,br=33777,Tr=33778,Ar=33779,Ya=35840,qa=35841,$a=35842,ja=35843,Za=36196,Ja=37492,Qa=37496,eo=37808,to=37809,io=37810,no=37811,so=37812,ro=37813,ao=37814,oo=37815,co=37816,lo=37817,uo=37818,ho=37819,fo=37820,po=37821,Pr=36492,mo=36494,go=36495,ru=36283,_o=36284,vo=36285,xo=36286,yd=3200,Ed=3201,bd=0,Td=1,Zi="",hi="srgb",en="srgb-linear",Uo="display-p3",Vr="display-p3-linear",Cr="linear",pt="srgb",Lr="rec709",Ir="p3",Pn=7680,lc=519,Ad=512,Pd=513,wd=514,au=515,Dd=516,Rd=517,Cd=518,Ld=519,uc=35044,hc=35048,dc="300 es",Ni=2e3,Ur=2001;class En{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fc=1234567;const Yn=Math.PI/180,Cs=180/Math.PI;function ss(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function No(n,e){return(n%e+e)%e}function Id(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ud(n,e,t){return n!==e?(t-n)/(e-n):0}function Ps(n,e,t){return(1-t)*n+t*e}function Nd(n,e,t,i){return Ps(n,e,1-Math.exp(-t*i))}function Fd(n,e=1){return e-Math.abs(No(n,e*2)-e)}function Od(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kd(n,e){return n+Math.random()*(e-n)}function Hd(n){return n*(.5-Math.random())}function Gd(n){n!==void 0&&(fc=n);let e=fc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vd(n){return n*Yn}function Wd(n){return n*Cs}function Xd(n){return(n&n-1)===0&&n!==0}function Kd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qd(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),f=a((e-i)/2),m=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,c*d,c*f,o*l);break;case"YZY":n.set(c*f,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*f,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*m,o*l);break;case"YXY":n.set(c*m,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ws={DEG2RAD:Yn,RAD2DEG:Cs,generateUUID:ss,clamp:Ht,euclideanModulo:No,mapLinear:Id,inverseLerp:Ud,lerp:Ps,damp:Nd,pingpong:Fd,smoothstep:Od,smootherstep:Bd,randInt:zd,randFloat:kd,randFloatSpread:Hd,seededRandom:Gd,degToRad:Vd,radToDeg:Wd,isPowerOfTwo:Xd,ceilPowerOfTwo:Kd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:qd,normalize:Vt,denormalize:Gn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,r,a,o,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=s[0],h=s[3],p=s[6],E=s[1],S=s[4],T=s[7],I=s[2],P=s[5],A=s[8];return r[0]=a*_+o*E+c*I,r[3]=a*h+o*S+c*P,r[6]=a*p+o*T+c*A,r[1]=l*_+u*E+d*I,r[4]=l*h+u*S+d*P,r[7]=l*p+u*T+d*A,r[2]=f*_+m*E+g*I,r[5]=f*h+m*S+g*P,r[8]=f*p+m*T+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*r,m=l*r-a*c,g=t*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Je;function ou(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $d(){const n=Ls("canvas");return n.style.display="block",n}const pc={};function wr(n){n in pc||(pc[n]=!0,console.warn(n))}function jd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Zd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jd(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mc=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gc=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[en]:{transfer:Cr,primaries:Lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[hi]:{transfer:pt,primaries:Lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Vr]:{transfer:Cr,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(gc),fromReference:n=>n.applyMatrix3(mc)},[Uo]:{transfer:pt,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(gc),fromReference:n=>n.applyMatrix3(mc).convertLinearToSRGB()}},Qd=new Set([en,Vr]),ut={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=gs[e].toReference,s=gs[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return gs[n].primaries},getTransfer:function(n){return n===Zi?Cr:gs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(gs[e].luminanceCoefficients)}};function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wn;class ef{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wn===void 0&&(wn=Ls("canvas")),wn.width=e.width,wn.height=e.height;const i=wn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qn(t[i]/255)*255):t[i]=qn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tf=0;class cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ta(s[a].image)):r.push(ta(s[a]))}else r=ta(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ef.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nf=0;class Kt extends En{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=gn,s=gn,r=fi,a=_n,o=pi,c=zi,l=Kt.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=ss(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xa:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xa:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=$l;Kt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],h=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+h)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,T=(m+1)/2,I=(p+1)/2,P=(u+f)/4,A=(d+_)/4,F=(g+h)/4;return S>T&&S>I?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=P/i,r=A/i):T>I?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=P/s,r=F/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=A/r,s=F/r),this.set(i,s,r,t),this}let E=Math.sqrt((h-g)*(h-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(h-g)/E,this.y=(d-_)/E,this.z=(f-u)/E,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sf extends En{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends sf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lu extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rf extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==m||u!==g){let h=1-o;const p=c*f+l*m+u*g+d*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const I=Math.sqrt(S),P=Math.atan2(I,p*E);h=Math.sin(h*P)/I,o=Math.sin(o*P)/I}const T=o*E;if(c=c*h+f*T,l=l*h+m*T,u=u*h+g*T,d=d*h+_*T,h===1-o){const I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*m-l*f,e[t+1]=c*g+u*f+l*d-o*m,e[t+2]=l*g+u*m+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),f=c(i/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new R,_c=new Sn;class rs{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ks.copy(i.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),Ys.subVectors(this.max,_s),Dn.subVectors(e.a,_s),Rn.subVectors(e.b,_s),Cn.subVectors(e.c,_s),Wi.subVectors(Rn,Dn),Xi.subVectors(Cn,Rn),rn.subVectors(Dn,Cn);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-rn.z,rn.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,rn.z,0,-rn.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-rn.y,rn.x,0];return!na(t,Dn,Rn,Cn,Ys)||(t=[1,0,0,0,1,0,0,0,1],!na(t,Dn,Rn,Cn,Ys))?!1:(qs.crossVectors(Wi,Xi),t=[qs.x,qs.y,qs.z],na(t,Dn,Rn,Cn,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new R,new R,new R,new R,new R,new R,new R,new R],ci=new R,Ks=new rs,Dn=new R,Rn=new R,Cn=new R,Wi=new R,Xi=new R,rn=new R,_s=new R,Ys=new R,qs=new R,an=new R;function na(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){an.fromArray(n,r);const o=s.x*Math.abs(an.x)+s.y*Math.abs(an.y)+s.z*Math.abs(an.z),c=e.dot(an),l=t.dot(an),u=i.dot(an);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const af=new rs,vs=new R,sa=new R;class Ns{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):af.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(vs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(sa)),this.expandByPoint(vs.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new R,ra=new R,$s=new R,Ki=new R,aa=new R,js=new R,oa=new R;class Wr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ra.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(ra);const r=e.distanceTo(t)*.5,a=-this.direction.dot($s),o=Ki.dot(this.direction),c=-Ki.dot($s),l=Ki.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*c-o,f=a*o-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ra).addScaledVector($s,f),m}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,r){aa.subVectors(t,e),js.subVectors(i,e),oa.crossVectors(aa,js);let a=this.direction.dot(oa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,e);const c=o*this.direction.dot(js.crossVectors(Ki,js));if(c<0)return null;const l=o*this.direction.dot(aa.cross(Ki));if(l<0||c+l>a)return null;const u=-o*Ki.dot(oa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,s,r,a,o,c,l,u,d,f,m,g,_,h){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,d,f,m,g,_,h)}set(e,t,i,s,r,a,o,c,l,u,d,f,m,g,_,h){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ln.setFromMatrixColumn(e,0).length(),r=1/Ln.setFromMatrixColumn(e,1).length(),a=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,g=l*u,_=l*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,g=l*u,_=l*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(of,e,cf)}lookAt(e,t,i){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Yi.crossVectors(i,Qt),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Yi.crossVectors(i,Qt)),Yi.normalize(),Zs.crossVectors(Qt,Yi),s[0]=Yi.x,s[4]=Zs.x,s[8]=Qt.x,s[1]=Yi.y,s[5]=Zs.y,s[9]=Qt.y,s[2]=Yi.z,s[6]=Zs.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],h=i[10],p=i[14],E=i[3],S=i[7],T=i[11],I=i[15],P=s[0],A=s[4],F=s[8],$=s[12],v=s[1],y=s[5],W=s[9],X=s[13],Y=s[2],ee=s[6],k=s[10],ie=s[14],K=s[3],pe=s[7],le=s[11],Te=s[15];return r[0]=a*P+o*v+c*Y+l*K,r[4]=a*A+o*y+c*ee+l*pe,r[8]=a*F+o*W+c*k+l*le,r[12]=a*$+o*X+c*ie+l*Te,r[1]=u*P+d*v+f*Y+m*K,r[5]=u*A+d*y+f*ee+m*pe,r[9]=u*F+d*W+f*k+m*le,r[13]=u*$+d*X+f*ie+m*Te,r[2]=g*P+_*v+h*Y+p*K,r[6]=g*A+_*y+h*ee+p*pe,r[10]=g*F+_*W+h*k+p*le,r[14]=g*$+_*X+h*ie+p*Te,r[3]=E*P+S*v+T*Y+I*K,r[7]=E*A+S*y+T*ee+I*pe,r[11]=E*F+S*W+T*k+I*le,r[15]=E*$+S*X+T*ie+I*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],h=e[11],p=e[15];return g*(+r*c*d-s*l*d-r*o*f+i*l*f+s*o*m-i*c*m)+_*(+t*c*m-t*l*f+r*a*f-s*a*m+s*l*u-r*c*u)+h*(+t*l*d-t*o*m-r*a*d+i*a*m+r*o*u-i*l*u)+p*(-s*o*u-t*c*d+t*o*f+s*a*d-i*a*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],h=e[14],p=e[15],E=d*h*l-_*f*l+_*c*m-o*h*m-d*c*p+o*f*p,S=g*f*l-u*h*l-g*c*m+a*h*m+u*c*p-a*f*p,T=u*_*l-g*d*l+g*o*m-a*_*m-u*o*p+a*d*p,I=g*d*c-u*_*c-g*o*f+a*_*f+u*o*h-a*d*h,P=t*E+i*S+s*T+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=E*A,e[1]=(_*f*r-d*h*r-_*s*m+i*h*m+d*s*p-i*f*p)*A,e[2]=(o*h*r-_*c*r+_*s*l-i*h*l-o*s*p+i*c*p)*A,e[3]=(d*c*r-o*f*r-d*s*l+i*f*l+o*s*m-i*c*m)*A,e[4]=S*A,e[5]=(u*h*r-g*f*r+g*s*m-t*h*m-u*s*p+t*f*p)*A,e[6]=(g*c*r-a*h*r-g*s*l+t*h*l+a*s*p-t*c*p)*A,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*m+t*c*m)*A,e[8]=T*A,e[9]=(g*d*r-u*_*r-g*i*m+t*_*m+u*i*p-t*d*p)*A,e[10]=(a*_*r-g*o*r+g*i*l-t*_*l-a*i*p+t*o*p)*A,e[11]=(u*o*r-a*d*r-u*i*l+t*d*l+a*i*m-t*o*m)*A,e[12]=I*A,e[13]=(u*_*s-g*d*s+g*i*f-t*_*f-u*i*h+t*d*h)*A,e[14]=(g*o*s-a*_*s-g*i*c+t*_*c+a*i*h-t*o*h)*A,e[15]=(a*d*s-u*o*s+u*i*c-t*d*c-a*i*f+t*o*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,f=r*l,m=r*u,g=r*d,_=a*u,h=a*d,p=o*d,E=c*l,S=c*u,T=c*d,I=i.x,P=i.y,A=i.z;return s[0]=(1-(_+p))*I,s[1]=(m+T)*I,s[2]=(g-S)*I,s[3]=0,s[4]=(m-T)*P,s[5]=(1-(f+p))*P,s[6]=(h+E)*P,s[7]=0,s[8]=(g+S)*A,s[9]=(h-E)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ln.set(s[0],s[1],s[2]).length();const a=Ln.set(s[4],s[5],s[6]).length(),o=Ln.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],li.copy(this);const l=1/r,u=1/a,d=1/o;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,t.setFromRotationMatrix(li),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ni){const c=this.elements,l=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,g;if(o===Ni)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ur)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ni){const c=this.elements,l=1/(t-e),u=1/(i-s),d=1/(a-r),f=(t+e)*l,m=(i+s)*u;let g,_;if(o===Ni)g=(a+r)*d,_=-2*d;else if(o===Ur)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ln=new R,li=new Mt,of=new R(0,0,0),cf=new R(1,1,1),Yi=new R,Zs=new R,Qt=new R,vc=new Mt,xc=new Sn;class ki{constructor(e=0,t=0,i=0,s=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lf=0;const Mc=new R,In=new Sn,Di=new Mt,Js=new R,xs=new R,uf=new R,hf=new Sn,Sc=new R(1,0,0),yc=new R(0,1,0),Ec=new R(0,0,1),bc={type:"added"},df={type:"removed"},Un={type:"childadded",child:null},ca={type:"childremoved",child:null};class Yt extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new R,t=new ki,i=new Sn,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(Sc,e)}rotateY(e){return this.rotateOnAxis(yc,e)}rotateZ(e){return this.rotateOnAxis(Ec,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sc,e)}translateY(e){return this.translateOnAxis(yc,e)}translateZ(e){return this.translateOnAxis(Ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Js.copy(e):Js.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(xs,Js,this.up):Di.lookAt(Js,xs,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),In.setFromRotationMatrix(Di),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bc),Un.child=e,this.dispatchEvent(Un),Un.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(df),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bc),Un.child=e,this.dispatchEvent(Un),Un.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new R(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new R,Ri=new R,la=new R,Ci=new R,Nn=new R,Fn=new R,Tc=new R,ua=new R,ha=new R,da=new R,fa=new yt,pa=new yt,ma=new yt;class si{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ui.subVectors(e,t),s.cross(ui);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ui.subVectors(s,t),Ri.subVectors(i,t),la.subVectors(e,t);const a=ui.dot(ui),o=ui.dot(Ri),c=ui.dot(la),l=Ri.dot(Ri),u=Ri.dot(la),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ci.x),c.addScaledVector(a,Ci.y),c.addScaledVector(o,Ci.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,i),ma.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(fa,r.x),a.addScaledVector(pa,r.y),a.addScaledVector(ma,r.z),a}static isFrontFacing(e,t,i,s){return ui.subVectors(i,t),Ri.subVectors(e,t),ui.cross(Ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ui.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return si.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Nn.subVectors(s,i),Fn.subVectors(r,i),ua.subVectors(e,i);const c=Nn.dot(ua),l=Fn.dot(ua);if(c<=0&&l<=0)return t.copy(i);ha.subVectors(e,s);const u=Nn.dot(ha),d=Fn.dot(ha);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Nn,a);da.subVectors(e,r);const m=Nn.dot(da),g=Fn.dot(da);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Fn,o);const h=u*g-m*d;if(h<=0&&d-u>=0&&m-g>=0)return Tc.subVectors(r,s),o=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Tc,o);const p=1/(h+_+f);return a=_*p,o=f*p,t.copy(i).addScaledVector(Nn,a).addScaledVector(Fn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function ga(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=No(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ga(a,r,e+1/3),this.g=ga(a,r,e),this.b=ga(a,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=hi){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const i=hu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return ut.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ht(kt.r*255,0,255))*65536+Math.round(Ht(kt.g*255,0,255))*256+Math.round(Ht(kt.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=hi){ut.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Qs);const i=Ps(qi.h,Qs.h,t),s=Ps(qi.s,Qs.s,t),r=Ps(qi.l,Qs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new nt;nt.NAMES=hu;let ff=0;class as extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Xn,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=$n,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pn,this.stencilZFail=Pn,this.stencilZPass=Pn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ua&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==pn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$n&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yn extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new R,er=new ke;class yi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uc,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}}class du extends yi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fu extends yi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qe extends yi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pf=0;const ii=new Mt,_a=new Yt,On=new R,ei=new rs,Ms=new rs,Rt=new R;class _t extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ou(e)?fu:du)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(ei.min,Ms.min),ei.expandByPoint(Rt),Rt.addVectors(ei.max,Ms.max),ei.expandByPoint(Rt)):(ei.expandByPoint(Ms.min),ei.expandByPoint(Ms.max))}ei.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Rt.fromBufferAttribute(o,l),c&&(On.fromBufferAttribute(e,l),Rt.add(On)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new R,c[F]=new R;const l=new R,u=new R,d=new R,f=new ke,m=new ke,g=new ke,_=new R,h=new R;function p(F,$,v){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,$),d.fromBufferAttribute(i,v),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,$),g.fromBufferAttribute(r,v),u.sub(l),d.sub(l),m.sub(f),g.sub(f);const y=1/(m.x*g.y-g.x*m.y);isFinite(y)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(y),h.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(y),o[F].add(_),o[$].add(_),o[v].add(_),c[F].add(h),c[$].add(h),c[v].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,$=E.length;F<$;++F){const v=E[F],y=v.start,W=v.count;for(let X=y,Y=y+W;X<Y;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const S=new R,T=new R,I=new R,P=new R;function A(F){I.fromBufferAttribute(s,F),P.copy(I);const $=o[F];S.copy($),S.sub(I.multiplyScalar(I.dot($))).normalize(),T.crossVectors(P,$);const y=T.dot(c[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,y)}for(let F=0,$=E.length;F<$;++F){const v=E[F],y=v.start,W=v.count;for(let X=y,Y=y+W;X<Y;X+=3)A(e.getX(X+0)),A(e.getX(X+1)),A(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,u=new R,d=new R;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),h=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,h),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,h),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(h,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,h=c.length;_<h;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[m++]}return new yi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new Mt,on=new Wr,tr=new Ns,Pc=new R,ir=new R,nr=new R,sr=new R,va=new R,rr=new R,wc=new R,ar=new R;class Ft extends Yt{constructor(e=new _t,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(va.fromBufferAttribute(d,e),a?rr.addScaledVector(va,u):rr.addScaledVector(va.sub(t),u))}t.add(rr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere),tr.applyMatrix4(r),on.copy(e.ray).recast(e.near),!(tr.containsPoint(on.origin)===!1&&(on.intersectSphere(tr,Pc)===null||on.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Ac.copy(r).invert(),on.copy(e.ray).applyMatrix4(Ac),!(i.boundingBox!==null&&on.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,on)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const h=f[g],p=a[h.materialIndex],E=Math.max(h.start,m.start),S=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let T=E,I=S;T<I;T+=3){const P=o.getX(T),A=o.getX(T+1),F=o.getX(T+2);s=or(this,p,e,i,l,u,d,P,A,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let h=g,p=_;h<p;h+=3){const E=o.getX(h),S=o.getX(h+1),T=o.getX(h+2);s=or(this,a,e,i,l,u,d,E,S,T),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const h=f[g],p=a[h.materialIndex],E=Math.max(h.start,m.start),S=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let T=E,I=S;T<I;T+=3){const P=T,A=T+1,F=T+2;s=or(this,p,e,i,l,u,d,P,A,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let h=g,p=_;h<p;h+=3){const E=h,S=h+1,T=h+2;s=or(this,a,e,i,l,u,d,E,S,T),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}}}function mf(n,e,t,i,s,r,a,o){let c;if(e.side===Xt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Qi,o),c===null)return null;ar.copy(o),ar.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ar);return l<t.near||l>t.far?null:{distance:l,point:ar.clone(),object:n}}function or(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,ir),n.getVertexPosition(c,nr),n.getVertexPosition(l,sr);const u=mf(n,e,t,i,ir,nr,sr,wc);if(u){const d=new R;si.getBarycoord(wc,ir,nr,sr,d),s&&(u.uv=si.getInterpolatedAttribute(s,o,c,l,d,new ke)),r&&(u.uv1=si.getInterpolatedAttribute(r,o,c,l,d,new ke)),a&&(u.normal=si.getInterpolatedAttribute(a,o,c,l,d,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new R,materialIndex:0};si.getNormal(ir,nr,sr,f.normal),u.face=f,u.barycoord=d}return u}class os extends _t{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(d,2));function g(_,h,p,E,S,T,I,P,A,F,$){const v=T/A,y=I/F,W=T/2,X=I/2,Y=P/2,ee=A+1,k=F+1;let ie=0,K=0;const pe=new R;for(let le=0;le<k;le++){const Te=le*y-X;for(let et=0;et<ee;et++){const qe=et*v-W;pe[_]=qe*E,pe[h]=Te*S,pe[p]=Y,l.push(pe.x,pe.y,pe.z),pe[_]=0,pe[h]=0,pe[p]=P>0?1:-1,u.push(pe.x,pe.y,pe.z),d.push(et/A),d.push(1-le/F),ie+=1}}for(let le=0;le<F;le++)for(let Te=0;Te<A;Te++){const et=f+Te+ee*le,qe=f+Te+ee*(le+1),L=f+(Te+1)+ee*(le+1),D=f+(Te+1)+ee*le;c.push(et,qe,D),c.push(qe,L,D),K+=6}o.addGroup(m,K,$),m+=K,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=es(n[t]);for(const s in i)e[s]=i[s]}return e}function gf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Is={clone:es,merge:Wt};var _f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mt extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mu extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new R,Dc=new ke,Rc=new ke;class ni extends mu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(Yn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Dc,Rc),t.subVectors(Rc,Dc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yn*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bn=-90,zn=1;class xf extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ni(Bn,zn,e,t);s.layers=this.layers,this.add(s);const r=new ni(Bn,zn,e,t);r.layers=this.layers,this.add(r);const a=new ni(Bn,zn,e,t);a.layers=this.layers,this.add(a);const o=new ni(Bn,zn,e,t);o.layers=this.layers,this.add(o);const c=new ni(Bn,zn,e,t);c.layers=this.layers,this.add(c);const l=new ni(Bn,zn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gu extends Kt{constructor(e,t,i,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:jn,super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mf extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new os(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Fi});r.uniforms.tEquirect.value=t;const a=new Ft(s,r),o=t.minFilter;return t.minFilter===_n&&(t.minFilter=fi),new xf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const xa=new R,Sf=new R,yf=new Je;class ji{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=xa.subVectors(i,t).cross(Sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yf.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cn=new Ns,cr=new R;class _u{constructor(e=new ji,t=new ji,i=new ji,s=new ji,r=new ji,a=new ji){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ni){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],h=s[11],p=s[12],E=s[13],S=s[14],T=s[15];if(i[0].setComponents(c-r,f-l,h-m,T-p).normalize(),i[1].setComponents(c+r,f+l,h+m,T+p).normalize(),i[2].setComponents(c+a,f+u,h+g,T+E).normalize(),i[3].setComponents(c-a,f-u,h-g,T-E).normalize(),i[4].setComponents(c-o,f-d,h-_,T-S).normalize(),t===Ni)i[5].setComponents(c+o,f+d,h+_,T+S).normalize();else if(t===Ur)i[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cn)}intersectsSprite(e){return cn.center.set(0,0,0),cn.radius=.7071067811865476,cn.applyMatrix4(e.matrixWorld),this.intersectsSphere(cn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(cr.x=s.normal.x>0?e.max.x:e.min.x,cr.y=s.normal.y>0?e.max.y:e.min.y,cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ef(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Fs extends _t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=e/o,f=t/c,m=[],g=[],_=[],h=[];for(let p=0;p<u;p++){const E=p*f-a;for(let S=0;S<l;S++){const T=S*d-r;g.push(T,-E,0),_.push(0,0,1),h.push(S/o),h.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const S=E+l*p,T=E+l*(p+1),I=E+1+l*(p+1),P=E+1+l*p;m.push(S,T,P),m.push(T,I,P)}this.setIndex(m),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Of=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:bf,alphahash_pars_fragment:Tf,alphamap_fragment:Af,alphamap_pars_fragment:Pf,alphatest_fragment:wf,alphatest_pars_fragment:Df,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Lf,batching_vertex:If,begin_vertex:Uf,beginnormal_vertex:Nf,bsdfs:Ff,iridescence_fragment:Of,bumpmap_pars_fragment:Bf,clipping_planes_fragment:zf,clipping_planes_pars_fragment:kf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:Gf,color_fragment:Vf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:Kf,common:Yf,cube_uv_reflection_fragment:qf,defaultnormal_vertex:$f,displacementmap_pars_vertex:jf,displacementmap_vertex:Zf,emissivemap_fragment:Jf,emissivemap_pars_fragment:Qf,colorspace_fragment:ep,colorspace_pars_fragment:tp,envmap_fragment:ip,envmap_common_pars_fragment:np,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:gp,envmap_vertex:ap,fog_vertex:op,fog_pars_vertex:cp,fog_fragment:lp,fog_pars_fragment:up,gradientmap_pars_fragment:hp,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:_p,lights_toon_pars_fragment:vp,lights_phong_fragment:xp,lights_phong_pars_fragment:Mp,lights_physical_fragment:Sp,lights_physical_pars_fragment:yp,lights_fragment_begin:Ep,lights_fragment_maps:bp,lights_fragment_end:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Pp,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Dp,map_fragment:Rp,map_pars_fragment:Cp,map_particle_fragment:Lp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Np,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Bp,morphtarget_pars_vertex:zp,morphtarget_vertex:kp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Vp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:Kp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:jp,opaque_fragment:Zp,packing:Jp,premultiplied_alpha_fragment:Qp,project_vertex:e1,dithering_fragment:t1,dithering_pars_fragment:i1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:a1,shadowmap_vertex:o1,shadowmask_pars_fragment:c1,skinbase_vertex:l1,skinning_pars_vertex:u1,skinning_vertex:h1,skinnormal_vertex:d1,specularmap_fragment:f1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:_1,transmission_pars_fragment:v1,uv_pars_fragment:x1,uv_pars_vertex:M1,uv_vertex:S1,worldpos_vertex:y1,background_vert:E1,background_frag:b1,backgroundCube_vert:T1,backgroundCube_frag:A1,cube_vert:P1,cube_frag:w1,depth_vert:D1,depth_frag:R1,distanceRGBA_vert:C1,distanceRGBA_frag:L1,equirect_vert:I1,equirect_frag:U1,linedashed_vert:N1,linedashed_frag:F1,meshbasic_vert:O1,meshbasic_frag:B1,meshlambert_vert:z1,meshlambert_frag:k1,meshmatcap_vert:H1,meshmatcap_frag:G1,meshnormal_vert:V1,meshnormal_frag:W1,meshphong_vert:X1,meshphong_frag:K1,meshphysical_vert:Y1,meshphysical_frag:q1,meshtoon_vert:$1,meshtoon_frag:j1,points_vert:Z1,points_frag:J1,shadow_vert:Q1,shadow_frag:e0,sprite_vert:t0,sprite_frag:i0},ye={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Mi={basic:{uniforms:Wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Wt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Wt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Wt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Wt([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Wt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Wt([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Wt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Wt([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Wt([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Wt([ye.lights,ye.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Mi.physical={uniforms:Wt([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const lr={r:0,b:0,g:0},ln=new ki,n0=new Mt;function s0(n,e,t,i,s,r,a){const o=new nt(0);let c=r===!0?0:1,l,u,d=null,f=0,m=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const T=g(E);T===null?p(o,c):T&&T.isColor&&(p(T,1),S=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(E,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===Gr)?(u===void 0&&(u=new Ft(new os(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:es(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ln.copy(S.backgroundRotation),ln.x*=-1,ln.y*=-1,ln.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ln.y*=-1,ln.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(ln)),u.material.toneMapped=ut.getTransfer(T.colorSpace)!==pt,(d!==T||f!==T.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ft(new Fs(2,2),new mt({name:"BackgroundMaterial",uniforms:es(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ut.getTransfer(T.colorSpace)!==pt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,f=T.version,m=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,S){E.getRGB(lr,pu(n)),i.buffers.color.setClear(lr.r,lr.g,lr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:h}}function r0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(v,y,W,X,Y){let ee=!1;const k=d(X,W,y);r!==k&&(r=k,l(r.object)),ee=m(v,X,W,Y),ee&&g(v,X,W,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,T(v,y,W,X),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function d(v,y,W){const X=W.wireframe===!0;let Y=i[v.id];Y===void 0&&(Y={},i[v.id]=Y);let ee=Y[y.id];ee===void 0&&(ee={},Y[y.id]=ee);let k=ee[X];return k===void 0&&(k=f(c()),ee[X]=k),k}function f(v){const y=[],W=[],X=[];for(let Y=0;Y<t;Y++)y[Y]=0,W[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:W,attributeDivisors:X,object:v,attributes:{},index:null}}function m(v,y,W,X){const Y=r.attributes,ee=y.attributes;let k=0;const ie=W.getAttributes();for(const K in ie)if(ie[K].location>=0){const le=Y[K];let Te=ee[K];if(Te===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(Te=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(Te=v.instanceColor)),le===void 0||le.attribute!==Te||Te&&le.data!==Te.data)return!0;k++}return r.attributesNum!==k||r.index!==X}function g(v,y,W,X){const Y={},ee=y.attributes;let k=0;const ie=W.getAttributes();for(const K in ie)if(ie[K].location>=0){let le=ee[K];le===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));const Te={};Te.attribute=le,le&&le.data&&(Te.data=le.data),Y[K]=Te,k++}r.attributes=Y,r.attributesNum=k,r.index=X}function _(){const v=r.newAttributes;for(let y=0,W=v.length;y<W;y++)v[y]=0}function h(v){p(v,0)}function p(v,y){const W=r.newAttributes,X=r.enabledAttributes,Y=r.attributeDivisors;W[v]=1,X[v]===0&&(n.enableVertexAttribArray(v),X[v]=1),Y[v]!==y&&(n.vertexAttribDivisor(v,y),Y[v]=y)}function E(){const v=r.newAttributes,y=r.enabledAttributes;for(let W=0,X=y.length;W<X;W++)y[W]!==v[W]&&(n.disableVertexAttribArray(W),y[W]=0)}function S(v,y,W,X,Y,ee,k){k===!0?n.vertexAttribIPointer(v,y,W,Y,ee):n.vertexAttribPointer(v,y,W,X,Y,ee)}function T(v,y,W,X){_();const Y=X.attributes,ee=W.getAttributes(),k=y.defaultAttributeValues;for(const ie in ee){const K=ee[ie];if(K.location>=0){let pe=Y[ie];if(pe===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor)),pe!==void 0){const le=pe.normalized,Te=pe.itemSize,et=e.get(pe);if(et===void 0)continue;const qe=et.buffer,L=et.type,D=et.bytesPerElement,V=L===n.INT||L===n.UNSIGNED_INT||pe.gpuType===wo;if(pe.isInterleavedBufferAttribute){const te=pe.data,ae=te.stride,se=pe.offset;if(te.isInstancedInterleavedBuffer){for(let ne=0;ne<K.locationSize;ne++)p(K.location+ne,te.meshPerAttribute);v.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<K.locationSize;ne++)h(K.location+ne);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ne=0;ne<K.locationSize;ne++)S(K.location+ne,Te/K.locationSize,L,le,ae*D,(se+Te/K.locationSize*ne)*D,V)}else{if(pe.isInstancedBufferAttribute){for(let te=0;te<K.locationSize;te++)p(K.location+te,pe.meshPerAttribute);v.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let te=0;te<K.locationSize;te++)h(K.location+te);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let te=0;te<K.locationSize;te++)S(K.location+te,Te/K.locationSize,L,le,Te*D,Te/K.locationSize*te*D,V)}}else if(k!==void 0){const le=k[ie];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(K.location,le);break;case 3:n.vertexAttrib3fv(K.location,le);break;case 4:n.vertexAttrib4fv(K.location,le);break;default:n.vertexAttrib1fv(K.location,le)}}}}E()}function I(){F();for(const v in i){const y=i[v];for(const W in y){const X=y[W];for(const Y in X)u(X[Y].object),delete X[Y];delete y[W]}delete i[v]}}function P(v){if(i[v.id]===void 0)return;const y=i[v.id];for(const W in y){const X=y[W];for(const Y in X)u(X[Y].object),delete X[Y];delete y[W]}delete i[v.id]}function A(v){for(const y in i){const W=i[y];if(W[v.id]===void 0)continue;const X=W[v.id];for(const Y in X)u(X[Y].object),delete X[Y];delete W[v.id]}}function F(){$(),a=!0,r!==s&&(r=s,l(r.object))}function $(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:$,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:h,disableUnusedAttributes:E}}function a0(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function c(l,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function o0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==pi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const F=A===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ui&&!F)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:I,maxSamples:P}}function c0(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ji,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,h=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!h)r?u(null):l();else{const E=r?0:i,S=E*4;let T=p.clippingState||null;c.value=T,T=u(g,f,S,m);for(let I=0;I!==S;++I)T[I]=t[I];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let h=null;if(_!==0){if(h=c.value,g!==!0||h===null){const p=m+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(h===null||h.length<p)&&(h=new Float32Array(p));for(let S=0,T=m;S!==_;++S,T+=4)a.copy(d[S]).applyMatrix4(E,o),a.normal.toArray(h,T),h[T+3]=a.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}function l0(n){let e=new WeakMap;function t(a,o){return o===Va?a.mapping=jn:o===Wa&&(a.mapping=Zn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Va||o===Wa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Mf(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class xu extends mu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wn=4,Cc=[.125,.215,.35,.446,.526,.582],mn=20,Ma=new xu,Lc=new nt;let Sa=null,ya=0,Ea=0,ba=!1;const fn=(1+Math.sqrt(5))/2,kn=1/fn,Ic=[new R(-fn,kn,0),new R(fn,kn,0),new R(-kn,0,fn),new R(kn,0,fn),new R(0,fn,-kn),new R(0,fn,kn),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,ya,Ea),this._renderer.xr.enabled=ba,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===Zn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Oi,format:pi,colorSpace:en,depthBuffer:!1},s=Nc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u0(r)),this._blurMaterial=h0(r,e,t)}return s}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,i,s){const o=new ni(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Lc),u.toneMapping=Ji,u.autoClear=!1;const m=new yn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new Ft(new os,m);let _=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,_=!0):(m.color.copy(Lc),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const S=this._cubeSize;ur(s,E*S,p>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===jn||e.mapping===Zn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ur(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ma)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ic[(s-r-1)%Ic.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ft(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*mn-1),_=r/g,h=isFinite(r)?1+Math.floor(u*_):mn;h>mn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${mn}`);const p=[];let E=0;for(let A=0;A<mn;++A){const F=A/_,$=Math.exp(-F*F/2);p.push($),A===0?E+=$:A<h&&(E+=2*$)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const T=this._sizeLods[s],I=3*T*(s>S-Wn?s-S+Wn:0),P=4*(this._cubeSize-T);ur(t,I,P,3*T,2*T),c.setRenderTarget(t),c.render(d,Ma)}}function u0(n){const e=[],t=[],i=[];let s=n;const r=n-Wn+1+Cc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Wn?c=Cc[a-n+Wn-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,h=2,p=1,E=new Float32Array(_*g*m),S=new Float32Array(h*g*m),T=new Float32Array(p*g*m);for(let P=0;P<m;P++){const A=P%3*2/3-1,F=P>2?0:-1,$=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];E.set($,_*g*P),S.set(f,h*g*P);const v=[P,P,P,P,P,P];T.set(v,p*g*P)}const I=new _t;I.setAttribute("position",new yi(E,_)),I.setAttribute("uv",new yi(S,h)),I.setAttribute("faceIndex",new yi(T,p)),e.push(I),s>Wn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nc(n,e,t){const i=new gi(n,e,t);return i.texture.mapping=Gr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function h0(n,e,t){const i=new Float32Array(mn),s=new R(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Fc(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Oc(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Fo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Va||c===Wa,u=c===jn||c===Zn;if(l||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Uc(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Uc(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function f0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&wr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function p0(n,e,t,i){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let h=0,p=_.length;h<p;h++)e.remove(_[h])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let h=0,p=_.length;h<p;h++)e.update(_[h],n.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let S=0,T=E.length;S<T;S+=3){const I=E[S+0],P=E[S+1],A=E[S+2];f.push(I,P,P,A,A,I)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,T=E.length/3-1;S<T;S+=3){const I=S+0,P=S+1,A=S+2;f.push(I,P,P,A,A,I)}}else return;const h=new(ou(f)?fu:du)(f,1);h.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,h)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function m0(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,m){n.drawElements(i,m,r,f*a),t.update(m,i,1)}function l(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*a,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let h=0;for(let p=0;p<g;p++)h+=m[p];t.update(h,i,1)}function d(f,m,g,_){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<f.length;p++)l(f[p]/a,m[p],_[p]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=m[E];for(let E=0;E<_.length;E++)t.update(p,i,_[E])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function g0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _0(n,e,t){const i=new WeakMap,s=new yt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let $=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",$)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let T=o.attributes.position.count*S,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*I*4*d),A=new lu(P,T,I,d);A.type=Ui,A.needsUpdate=!0;const F=S*4;for(let v=0;v<d;v++){const y=h[v],W=p[v],X=E[v],Y=T*I*4*v;for(let ee=0;ee<y.count;ee++){const k=ee*F;m===!0&&(s.fromBufferAttribute(y,ee),P[Y+k+0]=s.x,P[Y+k+1]=s.y,P[Y+k+2]=s.z,P[Y+k+3]=0),g===!0&&(s.fromBufferAttribute(W,ee),P[Y+k+4]=s.x,P[Y+k+5]=s.y,P[Y+k+6]=s.z,P[Y+k+7]=0),_===!0&&(s.fromBufferAttribute(X,ee),P[Y+k+8]=s.x,P[Y+k+9]=s.y,P[Y+k+10]=s.z,P[Y+k+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:A,size:new ke(T,I)},i.set(o,f),o.addEventListener("dispose",$)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function v0(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Mu extends Kt{constructor(e,t,i,s,r,a,o,c,l,u=Kn){if(u!==Kn&&u!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Kn&&(i=Mn),i===void 0&&u===Qn&&(i=Jn),super(null,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ri,this.minFilter=c!==void 0?c:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Su=new Kt,Bc=new Mu(1,1),yu=new lu,Eu=new rf,bu=new gu,zc=[],kc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Vc=new Float32Array(4);function cs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=zc[s];if(r===void 0&&(r=new Float32Array(s),zc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xr(n,e){let t=kc[e];t===void 0&&(t=new Int32Array(e),kc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function x0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function M0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function S0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function E0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(wt(t,i))return;Vc.set(i),n.uniformMatrix2fv(this.addr,!1,Vc),Dt(t,i)}}function b0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(wt(t,i))return;Gc.set(i),n.uniformMatrix3fv(this.addr,!1,Gc),Dt(t,i)}}function T0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(wt(t,i))return;Hc.set(i),n.uniformMatrix4fv(this.addr,!1,Hc),Dt(t,i)}}function A0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function P0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function R0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function L0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function I0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function U0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bc.compareFunction=au,r=Bc):r=Su,t.setTexture2D(e||r,s)}function N0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Eu,s)}function F0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bu,s)}function O0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yu,s)}function B0(n){switch(n){case 5126:return x0;case 35664:return M0;case 35665:return S0;case 35666:return y0;case 35674:return E0;case 35675:return b0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return P0;case 35668:case 35672:return w0;case 35669:case 35673:return D0;case 5125:return R0;case 36294:return C0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}function z0(n,e){n.uniform1fv(this.addr,e)}function k0(n,e){const t=cs(e,this.size,2);n.uniform2fv(this.addr,t)}function H0(n,e){const t=cs(e,this.size,3);n.uniform3fv(this.addr,t)}function G0(n,e){const t=cs(e,this.size,4);n.uniform4fv(this.addr,t)}function V0(n,e){const t=cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function W0(n,e){const t=cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function X0(n,e){const t=cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function K0(n,e){n.uniform1iv(this.addr,e)}function Y0(n,e){n.uniform2iv(this.addr,e)}function q0(n,e){n.uniform3iv(this.addr,e)}function $0(n,e){n.uniform4iv(this.addr,e)}function j0(n,e){n.uniform1uiv(this.addr,e)}function Z0(n,e){n.uniform2uiv(this.addr,e)}function J0(n,e){n.uniform3uiv(this.addr,e)}function Q0(n,e){n.uniform4uiv(this.addr,e)}function em(n,e,t){const i=this.cache,s=e.length,r=Xr(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Su,r[a])}function tm(n,e,t){const i=this.cache,s=e.length,r=Xr(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Eu,r[a])}function im(n,e,t){const i=this.cache,s=e.length,r=Xr(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bu,r[a])}function nm(n,e,t){const i=this.cache,s=e.length,r=Xr(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||yu,r[a])}function sm(n){switch(n){case 5126:return z0;case 35664:return k0;case 35665:return H0;case 35666:return G0;case 35674:return V0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return K0;case 35667:case 35671:return Y0;case 35668:case 35672:return q0;case 35669:case 35673:return $0;case 5125:return j0;case 36294:return Z0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return nm}}class rm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=B0(t.type)}}class am{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sm(t.type)}}class om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Wc(n,e){n.seq.push(e),n.map[e.id]=e}function cm(n,e,t){const i=n.name,s=i.length;for(Ta.lastIndex=0;;){const r=Ta.exec(i),a=Ta.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Wc(t,l===void 0?new rm(o,n,e):new am(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new om(o),Wc(t,d)),t=d}}}class Dr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);cm(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Xc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lm=37297;let um=0;function hm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function dm(n){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(n);let i;switch(e===t?i="":e===Ir&&t===Lr?i="LinearDisplayP3ToLinearSRGB":e===Lr&&t===Ir&&(i="LinearSRGBToLinearDisplayP3"),n){case en:case Vr:return[i,"LinearTransferOETF"];case hi:case Uo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Kc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hm(n.getShaderSource(e),a)}else return s}function fm(n,e){const t=dm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pm(n,e){let t;switch(e){case Vl:t="Linear";break;case Wl:t="Reinhard";break;case Xl:t="Cineon";break;case Kl:t="ACESFilmic";break;case Yl:t="AgX";break;case ql:t="Neutral";break;case Md:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hr=new R;function mm(){ut.getLuminanceCoefficients(hr);const n=hr.x.toFixed(4),e=hr.y.toFixed(4),t=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function _m(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function bs(n){return n!==""}function Yc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(n){return n.replace(xm,Sm)}const Mm=new Map;function Sm(n,e){let t=Ze[e];if(t===void 0){const i=Mm.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mo(t)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(n){return n.replace(ym,Em)}function Em(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Tm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jn:case Zn:e="ENVMAP_TYPE_CUBE";break;case Gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Am(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zn:e="ENVMAP_MODE_REFRACTION";break}return e}function Pm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case vd:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function wm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Dm(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=bm(t),l=Tm(t),u=Am(t),d=Pm(t),f=wm(t),m=gm(t),g=_m(r),_=s.createProgram();let h,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),h.length>0&&(h+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(h=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ji?pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,fm("linearToOutputTexel",t.outputColorSpace),mm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),a=Mo(a),a=Yc(a,t),a=qc(a,t),o=Mo(o),o=Yc(o,t),o=qc(o,t),a=$c(a),o=$c(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,p=["#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+h+a,T=E+p+o,I=Xc(s,s.VERTEX_SHADER,S),P=Xc(s,s.FRAGMENT_SHADER,T);s.attachShader(_,I),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(y){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),X=s.getShaderInfoLog(I).trim(),Y=s.getShaderInfoLog(P).trim();let ee=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,I,P);else{const ie=Kc(s,I,"vertex"),K=Kc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+W+`
`+ie+`
`+K)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||Y==="")&&(k=!1);k&&(y.diagnostics={runnable:ee,programLog:W,vertexShader:{log:X,prefix:h},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(I),s.deleteShader(P),F=new Dr(s,_),$=vm(s,_)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let $;this.getAttributes=function(){return $===void 0&&A(this),$};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,lm)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=um++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=P,this}let Rm=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Lm(e),t.set(e,i)),i}}class Lm{constructor(e){this.id=Rm++,this.code=e,this.usedTimes=0}}function Im(n,e,t,i,s,r,a){const o=new uu,c=new Cm,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,y,W,X,Y){const ee=X.fog,k=Y.geometry,ie=v.isMeshStandardMaterial?X.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||ie),pe=K&&K.mapping===Gr?K.image.height:null,le=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const Te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=Te!==void 0?Te.length:0;let qe=0;k.morphAttributes.position!==void 0&&(qe=1),k.morphAttributes.normal!==void 0&&(qe=2),k.morphAttributes.color!==void 0&&(qe=3);let L,D,V,te;if(le){const Ot=Mi[le];L=Ot.vertexShader,D=Ot.fragmentShader}else L=v.vertexShader,D=v.fragmentShader,c.update(v),V=c.getVertexShaderID(v),te=c.getFragmentShaderID(v);const ae=n.getRenderTarget(),se=Y.isInstancedMesh===!0,ne=Y.isBatchedMesh===!0,ve=!!v.map,he=!!v.matcap,w=!!K,He=!!v.aoMap,Be=!!v.lightMap,ze=!!v.bumpMap,me=!!v.normalMap,We=!!v.displacementMap,Me=!!v.emissiveMap,b=!!v.metalnessMap,M=!!v.roughnessMap,z=v.anisotropy>0,Z=v.clearcoat>0,J=v.dispersion>0,j=v.iridescence>0,oe=v.sheen>0,de=v.transmission>0,fe=z&&!!v.anisotropyMap,Ke=Z&&!!v.clearcoatMap,ce=Z&&!!v.clearcoatNormalMap,De=Z&&!!v.clearcoatRoughnessMap,xe=j&&!!v.iridescenceMap,Se=j&&!!v.iridescenceThicknessMap,Ce=oe&&!!v.sheenColorMap,Ge=oe&&!!v.sheenRoughnessMap,Ve=!!v.specularMap,ot=!!v.specularColorMap,U=!!v.specularIntensityMap,Re=de&&!!v.transmissionMap,Q=de&&!!v.thicknessMap,re=!!v.gradientMap,Ae=!!v.alphaMap,Pe=v.alphaTest>0,st=!!v.alphaHash,gt=!!v.extensions;let Lt=Ji;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Lt=n.toneMapping);const at={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:L,fragmentShader:D,defines:v.defines,customVertexShaderID:V,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:ne,batchingColor:ne&&Y._colorsTexture!==null,instancing:se,instancingColor:se&&Y.instanceColor!==null,instancingMorph:se&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:en,alphaToCoverage:!!v.alphaToCoverage,map:ve,matcap:he,envMap:w,envMapMode:w&&K.mapping,envMapCubeUVHeight:pe,aoMap:He,lightMap:Be,bumpMap:ze,normalMap:me,displacementMap:m&&We,emissiveMap:Me,normalMapObjectSpace:me&&v.normalMapType===Td,normalMapTangentSpace:me&&v.normalMapType===bd,metalnessMap:b,roughnessMap:M,anisotropy:z,anisotropyMap:fe,clearcoat:Z,clearcoatMap:Ke,clearcoatNormalMap:ce,clearcoatRoughnessMap:De,dispersion:J,iridescence:j,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:oe,sheenColorMap:Ce,sheenRoughnessMap:Ge,specularMap:Ve,specularColorMap:ot,specularIntensityMap:U,transmission:de,transmissionMap:Re,thicknessMap:Q,gradientMap:re,opaque:v.transparent===!1&&v.blending===Xn&&v.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Pe,alphaHash:st,combine:v.combine,mapUv:ve&&h(v.map.channel),aoMapUv:He&&h(v.aoMap.channel),lightMapUv:Be&&h(v.lightMap.channel),bumpMapUv:ze&&h(v.bumpMap.channel),normalMapUv:me&&h(v.normalMap.channel),displacementMapUv:We&&h(v.displacementMap.channel),emissiveMapUv:Me&&h(v.emissiveMap.channel),metalnessMapUv:b&&h(v.metalnessMap.channel),roughnessMapUv:M&&h(v.roughnessMap.channel),anisotropyMapUv:fe&&h(v.anisotropyMap.channel),clearcoatMapUv:Ke&&h(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&h(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&h(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&h(v.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&h(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&h(v.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&h(v.sheenRoughnessMap.channel),specularMapUv:Ve&&h(v.specularMap.channel),specularColorMapUv:ot&&h(v.specularColorMap.channel),specularIntensityMapUv:U&&h(v.specularIntensityMap.channel),transmissionMapUv:Re&&h(v.transmissionMap.channel),thicknessMapUv:Q&&h(v.thicknessMap.channel),alphaMapUv:Ae&&h(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(me||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(ve||Ae),fog:!!ee,useFog:v.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:ve&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===Xt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function E(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)y.push(W),y.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(S(y,v),T(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function S(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function T(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),v.push(o.mask)}function I(v){const y=_[v.type];let W;if(y){const X=Mi[y];W=Is.clone(X.uniforms)}else W=v.uniforms;return W}function P(v,y){let W;for(let X=0,Y=u.length;X<Y;X++){const ee=u[X];if(ee.cacheKey===y){W=ee,++W.usedTimes;break}}return W===void 0&&(W=new Dm(n,y,v,r),u.push(W)),W}function A(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function F(v){c.remove(v)}function $(){c.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:I,acquireProgram:P,releaseProgram:A,releaseShaderCache:F,programs:u,dispose:$}}function Um(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Nm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,f,m,g,_,h){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:h},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=h),e++,p}function o(d,f,m,g,_,h){const p=a(d,f,m,g,_,h);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):t.push(p)}function c(d,f,m,g,_,h){const p=a(d,f,m,g,_,h);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||Nm),i.length>1&&i.sort(f||Zc),s.length>1&&s.sort(f||Zc)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Fm(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Jc,n.set(i,[a])):s>=r.length?(a=new Jc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Om(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new nt};break;case"SpotLight":t={position:new R,direction:new R,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function Bm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zm=0;function km(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hm(n){const e=new Om,t=Bm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);const s=new R,r=new Mt,a=new Mt;function o(l){let u=0,d=0,f=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let m=0,g=0,_=0,h=0,p=0,E=0,S=0,T=0,I=0,P=0,A=0;l.sort(km);for(let $=0,v=l.length;$<v;$++){const y=l[$],W=y.color,X=y.intensity,Y=y.distance,ee=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=W.r*X,d+=W.g*X,f+=W.b*X;else if(y.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(y.sh.coefficients[k],X);A++}else if(y.isDirectionalLight){const k=e.get(y);if(k.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const ie=y.shadow,K=t.get(y);K.shadowIntensity=ie.intensity,K.shadowBias=ie.bias,K.shadowNormalBias=ie.normalBias,K.shadowRadius=ie.radius,K.shadowMapSize=ie.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=y.shadow.matrix,E++}i.directional[m]=k,m++}else if(y.isSpotLight){const k=e.get(y);k.position.setFromMatrixPosition(y.matrixWorld),k.color.copy(W).multiplyScalar(X),k.distance=Y,k.coneCos=Math.cos(y.angle),k.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),k.decay=y.decay,i.spot[_]=k;const ie=y.shadow;if(y.map&&(i.spotLightMap[I]=y.map,I++,ie.updateMatrices(y),y.castShadow&&P++),i.spotLightMatrix[_]=ie.matrix,y.castShadow){const K=t.get(y);K.shadowIntensity=ie.intensity,K.shadowBias=ie.bias,K.shadowNormalBias=ie.normalBias,K.shadowRadius=ie.radius,K.shadowMapSize=ie.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=ee,T++}_++}else if(y.isRectAreaLight){const k=e.get(y);k.color.copy(W).multiplyScalar(X),k.halfWidth.set(y.width*.5,0,0),k.halfHeight.set(0,y.height*.5,0),i.rectArea[h]=k,h++}else if(y.isPointLight){const k=e.get(y);if(k.color.copy(y.color).multiplyScalar(y.intensity),k.distance=y.distance,k.decay=y.decay,y.castShadow){const ie=y.shadow,K=t.get(y);K.shadowIntensity=ie.intensity,K.shadowBias=ie.bias,K.shadowNormalBias=ie.normalBias,K.shadowRadius=ie.radius,K.shadowMapSize=ie.mapSize,K.shadowCameraNear=ie.camera.near,K.shadowCameraFar=ie.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=y.shadow.matrix,S++}i.point[g]=k,g++}else if(y.isHemisphereLight){const k=e.get(y);k.skyColor.copy(y.color).multiplyScalar(X),k.groundColor.copy(y.groundColor).multiplyScalar(X),i.hemi[p]=k,p++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==h||F.hemiLength!==p||F.numDirectionalShadows!==E||F.numPointShadows!==S||F.numSpotShadows!==T||F.numSpotMaps!==I||F.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=h,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=h,F.hemiLength=p,F.numDirectionalShadows=E,F.numPointShadows=S,F.numSpotShadows=T,F.numSpotMaps=I,F.numLightProbes=A,i.version=zm++)}function c(l,u){let d=0,f=0,m=0,g=0,_=0;const h=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const S=l[p];if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),d++}else if(S.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),m++}else if(S.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),a.identity(),r.copy(S.matrixWorld),r.premultiply(h),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),f++}else if(S.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(h),_++}}}return{setup:o,setupView:c,state:i}}function Qc(n){const e=new Hm(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Gm(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Qc(n),e.set(s,[o])):r>=a.length?(o=new Qc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Vm extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wm extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Km=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ym(n,e,t){let i=new _u;const s=new ke,r=new ke,a=new yt,o=new Vm({depthPacking:Ed}),c=new Wm,l={},u=t.maxTextureSize,d={[Qi]:Xt,[Xt]:Qi,[di]:di},f=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Xm,fragmentShader:Km}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let p=this.type;this.render=function(P,A,F){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||P.length===0)return;const $=n.getRenderTarget(),v=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Fi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=p!==Li&&this.type===Li,Y=p===Li&&this.type!==Li;for(let ee=0,k=P.length;ee<k;ee++){const ie=P[ee],K=ie.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const pe=K.getFrameExtents();if(s.multiply(pe),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,K.mapSize.y=r.y)),K.map===null||X===!0||Y===!0){const Te=this.type!==Li?{minFilter:ri,magFilter:ri}:{};K.map!==null&&K.map.dispose(),K.map=new gi(s.x,s.y,Te),K.map.texture.name=ie.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const le=K.getViewportCount();for(let Te=0;Te<le;Te++){const et=K.getViewport(Te);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),W.viewport(a),K.updateMatrices(ie,Te),i=K.getFrustum(),T(A,F,K.camera,ie,this.type)}K.isPointLightShadow!==!0&&this.type===Li&&E(K,F),K.needsUpdate=!1}p=this.type,h.needsUpdate=!1,n.setRenderTarget($,v,y)};function E(P,A){const F=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new gi(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(A,null,F,f,_,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(A,null,F,m,_,null)}function S(P,A,F,$){let v=null;const y=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(y!==void 0)v=y;else if(v=F.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=v.uuid,X=A.uuid;let Y=l[W];Y===void 0&&(Y={},l[W]=Y);let ee=Y[X];ee===void 0&&(ee=v.clone(),Y[X]=ee,A.addEventListener("dispose",I)),v=ee}if(v.visible=A.visible,v.wireframe=A.wireframe,$===Li?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,F.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const W=n.properties.get(v);W.light=F}return v}function T(P,A,F,$,v){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===Li)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const X=e.update(P),Y=P.material;if(Array.isArray(Y)){const ee=X.groups;for(let k=0,ie=ee.length;k<ie;k++){const K=ee[k],pe=Y[K.materialIndex];if(pe&&pe.visible){const le=S(P,pe,$,v);P.onBeforeShadow(n,P,A,F,X,le,K),n.renderBufferDirect(F,null,X,le,P,K),P.onAfterShadow(n,P,A,F,X,le,K)}}}else if(Y.visible){const ee=S(P,Y,$,v);P.onBeforeShadow(n,P,A,F,X,ee,null),n.renderBufferDirect(F,null,X,ee,P,null),P.onAfterShadow(n,P,A,F,X,ee,null)}}const W=P.children;for(let X=0,Y=W.length;X<Y;X++)T(W[X],A,F,$,v)}function I(P){P.target.removeEventListener("dispose",I);for(const F in l){const $=l[F],v=P.target.uuid;v in $&&($[v].dispose(),delete $[v])}}}const qm={[Fa]:Oa,[Ba]:Ha,[za]:Ga,[$n]:ka,[Oa]:Fa,[Ha]:Ba,[Ga]:za,[ka]:$n};function $m(n){function e(){let U=!1;const Re=new yt;let Q=null;const re=new yt(0,0,0,0);return{setMask:function(Ae){Q!==Ae&&!U&&(n.colorMask(Ae,Ae,Ae,Ae),Q=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,Pe,st,gt,Lt){Lt===!0&&(Ae*=gt,Pe*=gt,st*=gt),Re.set(Ae,Pe,st,gt),re.equals(Re)===!1&&(n.clearColor(Ae,Pe,st,gt),re.copy(Re))},reset:function(){U=!1,Q=null,re.set(-1,0,0,0)}}}function t(){let U=!1,Re=!1,Q=null,re=null,Ae=null;return{setReversed:function(Pe){Re=Pe},setTest:function(Pe){Pe?V(n.DEPTH_TEST):te(n.DEPTH_TEST)},setMask:function(Pe){Q!==Pe&&!U&&(n.depthMask(Pe),Q=Pe)},setFunc:function(Pe){if(Re&&(Pe=qm[Pe]),re!==Pe){switch(Pe){case Fa:n.depthFunc(n.NEVER);break;case Oa:n.depthFunc(n.ALWAYS);break;case Ba:n.depthFunc(n.LESS);break;case $n:n.depthFunc(n.LEQUAL);break;case za:n.depthFunc(n.EQUAL);break;case ka:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=Pe}},setLocked:function(Pe){U=Pe},setClear:function(Pe){Ae!==Pe&&(n.clearDepth(Pe),Ae=Pe)},reset:function(){U=!1,Q=null,re=null,Ae=null}}}function i(){let U=!1,Re=null,Q=null,re=null,Ae=null,Pe=null,st=null,gt=null,Lt=null;return{setTest:function(at){U||(at?V(n.STENCIL_TEST):te(n.STENCIL_TEST))},setMask:function(at){Re!==at&&!U&&(n.stencilMask(at),Re=at)},setFunc:function(at,Ot,ti){(Q!==at||re!==Ot||Ae!==ti)&&(n.stencilFunc(at,Ot,ti),Q=at,re=Ot,Ae=ti)},setOp:function(at,Ot,ti){(Pe!==at||st!==Ot||gt!==ti)&&(n.stencilOp(at,Ot,ti),Pe=at,st=Ot,gt=ti)},setLocked:function(at){U=at},setClear:function(at){Lt!==at&&(n.clearStencil(at),Lt=at)},reset:function(){U=!1,Re=null,Q=null,re=null,Ae=null,Pe=null,st=null,gt=null,Lt=null}}}const s=new e,r=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,f=[],m=null,g=!1,_=null,h=null,p=null,E=null,S=null,T=null,I=null,P=new nt(0,0,0),A=0,F=!1,$=null,v=null,y=null,W=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,k=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ee=k>=1):ie.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ee=k>=2);let K=null,pe={};const le=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),et=new yt().fromArray(le),qe=new yt().fromArray(Te);function L(U,Re,Q,re){const Ae=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(U,Pe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<Q;st++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Re+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Pe}const D={};D[n.TEXTURE_2D]=L(n.TEXTURE_2D,n.TEXTURE_2D,1),D[n.TEXTURE_CUBE_MAP]=L(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[n.TEXTURE_2D_ARRAY]=L(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),D[n.TEXTURE_3D]=L(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),V(n.DEPTH_TEST),r.setFunc($n),Be(!1),ze(ac),V(n.CULL_FACE),w(Fi);function V(U){l[U]!==!0&&(n.enable(U),l[U]=!0)}function te(U){l[U]!==!1&&(n.disable(U),l[U]=!1)}function ae(U,Re){return u[U]!==Re?(n.bindFramebuffer(U,Re),u[U]=Re,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Re),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function se(U,Re){let Q=f,re=!1;if(U){Q=d.get(Re),Q===void 0&&(Q=[],d.set(Re,Q));const Ae=U.textures;if(Q.length!==Ae.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,st=Ae.length;Pe<st;Pe++)Q[Pe]=n.COLOR_ATTACHMENT0+Pe;Q.length=Ae.length,re=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,re=!0);re&&n.drawBuffers(Q)}function ne(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const ve={[pn]:n.FUNC_ADD,[td]:n.FUNC_SUBTRACT,[id]:n.FUNC_REVERSE_SUBTRACT};ve[nd]=n.MIN,ve[sd]=n.MAX;const he={[rd]:n.ZERO,[ad]:n.ONE,[od]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[fd]:n.SRC_ALPHA_SATURATE,[hd]:n.DST_COLOR,[ld]:n.DST_ALPHA,[cd]:n.ONE_MINUS_SRC_COLOR,[Na]:n.ONE_MINUS_SRC_ALPHA,[dd]:n.ONE_MINUS_DST_COLOR,[ud]:n.ONE_MINUS_DST_ALPHA,[pd]:n.CONSTANT_COLOR,[md]:n.ONE_MINUS_CONSTANT_COLOR,[gd]:n.CONSTANT_ALPHA,[_d]:n.ONE_MINUS_CONSTANT_ALPHA};function w(U,Re,Q,re,Ae,Pe,st,gt,Lt,at){if(U===Fi){g===!0&&(te(n.BLEND),g=!1);return}if(g===!1&&(V(n.BLEND),g=!0),U!==ed){if(U!==_||at!==F){if((h!==pn||S!==pn)&&(n.blendEquation(n.FUNC_ADD),h=pn,S=pn),at)switch(U){case Xn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ei:n.blendFunc(n.ONE,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Xn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ei:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,E=null,T=null,I=null,P.set(0,0,0),A=0,_=U,F=at}return}Ae=Ae||Re,Pe=Pe||Q,st=st||re,(Re!==h||Ae!==S)&&(n.blendEquationSeparate(ve[Re],ve[Ae]),h=Re,S=Ae),(Q!==p||re!==E||Pe!==T||st!==I)&&(n.blendFuncSeparate(he[Q],he[re],he[Pe],he[st]),p=Q,E=re,T=Pe,I=st),(gt.equals(P)===!1||Lt!==A)&&(n.blendColor(gt.r,gt.g,gt.b,Lt),P.copy(gt),A=Lt),_=U,F=!1}function He(U,Re){U.side===di?te(n.CULL_FACE):V(n.CULL_FACE);let Q=U.side===Xt;Re&&(Q=!Q),Be(Q),U.blending===Xn&&U.transparent===!1?w(Fi):w(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const re=U.stencilWrite;a.setTest(re),re&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),We(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){$!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),$=U)}function ze(U){U!==Zh?(V(n.CULL_FACE),U!==v&&(U===ac?n.cullFace(n.BACK):U===Jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):te(n.CULL_FACE),v=U}function me(U){U!==y&&(ee&&n.lineWidth(U),y=U)}function We(U,Re,Q){U?(V(n.POLYGON_OFFSET_FILL),(W!==Re||X!==Q)&&(n.polygonOffset(Re,Q),W=Re,X=Q)):te(n.POLYGON_OFFSET_FILL)}function Me(U){U?V(n.SCISSOR_TEST):te(n.SCISSOR_TEST)}function b(U){U===void 0&&(U=n.TEXTURE0+Y-1),K!==U&&(n.activeTexture(U),K=U)}function M(U,Re,Q){Q===void 0&&(K===null?Q=n.TEXTURE0+Y-1:Q=K);let re=pe[Q];re===void 0&&(re={type:void 0,texture:void 0},pe[Q]=re),(re.type!==U||re.texture!==Re)&&(K!==Q&&(n.activeTexture(Q),K=Q),n.bindTexture(U,Re||D[U]),re.type=U,re.texture=Re)}function z(){const U=pe[K];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(U){et.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function Ce(U){qe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),qe.copy(U))}function Ge(U,Re){let Q=c.get(Re);Q===void 0&&(Q=new WeakMap,c.set(Re,Q));let re=Q.get(U);re===void 0&&(re=n.getUniformBlockIndex(Re,U.name),Q.set(U,re))}function Ve(U,Re){const re=c.get(Re).get(U);o.get(Re)!==re&&(n.uniformBlockBinding(Re,re,U.__bindingPointIndex),o.set(Re,re))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},K=null,pe={},u={},d=new WeakMap,f=[],m=null,g=!1,_=null,h=null,p=null,E=null,S=null,T=null,I=null,P=new nt(0,0,0),A=0,F=!1,$=null,v=null,y=null,W=null,X=null,et.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:V,disable:te,bindFramebuffer:ae,drawBuffers:se,useProgram:ne,setBlending:w,setMaterial:He,setFlipSided:Be,setCullFace:ze,setLineWidth:me,setPolygonOffset:We,setScissorTest:Me,activeTexture:b,bindTexture:M,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:De,texImage3D:xe,updateUBOMapping:Ge,uniformBlockBinding:Ve,texStorage2D:Ke,texStorage3D:ce,texSubImage2D:j,texSubImage3D:oe,compressedTexSubImage2D:de,compressedTexSubImage3D:fe,scissor:Se,viewport:Ce,reset:ot}}function el(n,e,t,i){const s=jm(i);switch(t){case Ql:return n*e;case tu:return n*e;case iu:return n*e*2;case nu:return n*e/s.components*s.byteLength;case Co:return n*e/s.components*s.byteLength;case su:return n*e*2/s.components*s.byteLength;case Lo:return n*e*2/s.components*s.byteLength;case eu:return n*e*3/s.components*s.byteLength;case pi:return n*e*4/s.components*s.byteLength;case Io:return n*e*4/s.components*s.byteLength;case Er:case br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tr:case Ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:case ja:return Math.max(n,16)*Math.max(e,8)/4;case Ya:case $a:return Math.max(n,8)*Math.max(e,8)/2;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case io:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case no:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ro:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case co:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pr:case mo:case go:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ru:case _o:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vo:case xo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jm(n){switch(n){case zi:case jl:return{byteLength:1,components:1};case Rs:case Zl:case Oi:return{byteLength:2,components:1};case Do:case Ro:return{byteLength:2,components:4};case Mn:case wo:case Ui:return{byteLength:4,components:1};case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Zm(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return m?new OffscreenCanvas(b,M):Ls("canvas")}function _(b,M,z){let Z=1;const J=Me(b);if((J.width>z||J.height>z)&&(Z=z/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(Z*J.width),oe=Math.floor(Z*J.height);d===void 0&&(d=g(j,oe));const de=M?g(j,oe):d;return de.width=j,de.height=oe,de.getContext("2d").drawImage(b,0,0,j,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+oe+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function h(b){return b.generateMipmaps&&b.minFilter!==ri&&b.minFilter!==fi}function p(b){n.generateMipmap(b)}function E(b,M,z,Z,J=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=M;if(M===n.RED&&(z===n.FLOAT&&(j=n.R32F),z===n.HALF_FLOAT&&(j=n.R16F),z===n.UNSIGNED_BYTE&&(j=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.R8UI),z===n.UNSIGNED_SHORT&&(j=n.R16UI),z===n.UNSIGNED_INT&&(j=n.R32UI),z===n.BYTE&&(j=n.R8I),z===n.SHORT&&(j=n.R16I),z===n.INT&&(j=n.R32I)),M===n.RG&&(z===n.FLOAT&&(j=n.RG32F),z===n.HALF_FLOAT&&(j=n.RG16F),z===n.UNSIGNED_BYTE&&(j=n.RG8)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RG8UI),z===n.UNSIGNED_SHORT&&(j=n.RG16UI),z===n.UNSIGNED_INT&&(j=n.RG32UI),z===n.BYTE&&(j=n.RG8I),z===n.SHORT&&(j=n.RG16I),z===n.INT&&(j=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGB8UI),z===n.UNSIGNED_SHORT&&(j=n.RGB16UI),z===n.UNSIGNED_INT&&(j=n.RGB32UI),z===n.BYTE&&(j=n.RGB8I),z===n.SHORT&&(j=n.RGB16I),z===n.INT&&(j=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),z===n.UNSIGNED_INT&&(j=n.RGBA32UI),z===n.BYTE&&(j=n.RGBA8I),z===n.SHORT&&(j=n.RGBA16I),z===n.INT&&(j=n.RGBA32I)),M===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),M===n.RGBA){const oe=J?Cr:ut.getTransfer(Z);z===n.FLOAT&&(j=n.RGBA32F),z===n.HALF_FLOAT&&(j=n.RGBA16F),z===n.UNSIGNED_BYTE&&(j=oe===pt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(b,M){let z;return b?M===null||M===Mn||M===Jn?z=n.DEPTH24_STENCIL8:M===Ui?z=n.DEPTH32F_STENCIL8:M===Rs&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mn||M===Jn?z=n.DEPTH_COMPONENT24:M===Ui?z=n.DEPTH_COMPONENT32F:M===Rs&&(z=n.DEPTH_COMPONENT16),z}function T(b,M){return h(b)===!0||b.isFramebufferTexture&&b.minFilter!==ri&&b.minFilter!==fi?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function I(b){const M=b.target;M.removeEventListener("dispose",I),A(M),M.isVideoTexture&&u.delete(M)}function P(b){const M=b.target;M.removeEventListener("dispose",P),$(M)}function A(b){const M=i.get(b);if(M.__webglInit===void 0)return;const z=b.source,Z=f.get(z);if(Z){const J=Z[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(b),Object.keys(Z).length===0&&f.delete(z)}i.remove(b)}function F(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const z=b.source,Z=f.get(z);delete Z[M.__cacheKey],a.memory.textures--}function $(b){const M=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let J=0;J<M.__webglFramebuffer[Z].length;J++)n.deleteFramebuffer(M.__webglFramebuffer[Z][J]);else n.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[Z]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=b.textures;for(let Z=0,J=z.length;Z<J;Z++){const j=i.get(z[Z]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(z[Z])}i.remove(b)}let v=0;function y(){v=0}function W(){const b=v;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),v+=1,b}function X(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function Y(b,M){const z=i.get(b);if(b.isVideoTexture&&me(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(z,b,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function ee(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){qe(z,b,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function k(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){qe(z,b,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function ie(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){L(z,b,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}const K={[Xa]:n.REPEAT,[gn]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},pe={[ri]:n.NEAREST,[Sd]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[fi]:n.LINEAR,[Jr]:n.LINEAR_MIPMAP_NEAREST,[_n]:n.LINEAR_MIPMAP_LINEAR},le={[Ad]:n.NEVER,[Ld]:n.ALWAYS,[Pd]:n.LESS,[au]:n.LEQUAL,[wd]:n.EQUAL,[Cd]:n.GEQUAL,[Dd]:n.GREATER,[Rd]:n.NOTEQUAL};function Te(b,M){if(M.type===Ui&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===fi||M.magFilter===Jr||M.magFilter===Xs||M.magFilter===_n||M.minFilter===fi||M.minFilter===Jr||M.minFilter===Xs||M.minFilter===_n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,K[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,K[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,K[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,pe[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ri||M.minFilter!==Xs&&M.minFilter!==_n||M.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function et(b,M){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",I));const Z=M.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const j=X(M);if(j!==b.__cacheKey){J[j]===void 0&&(J[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[j].usedTimes++;const oe=J[b.__cacheKey];oe!==void 0&&(J[b.__cacheKey].usedTimes--,oe.usedTimes===0&&F(M)),b.__cacheKey=j,b.__webglTexture=J[j].texture}return z}function qe(b,M,z){let Z=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=n.TEXTURE_3D);const J=et(b,M),j=M.source;t.bindTexture(Z,b.__webglTexture,n.TEXTURE0+z);const oe=i.get(j);if(j.version!==oe.__version||J===!0){t.activeTexture(n.TEXTURE0+z);const de=ut.getPrimaries(ut.workingColorSpace),fe=M.colorSpace===Zi?null:ut.getPrimaries(M.colorSpace),Ke=M.colorSpace===Zi||de===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ce=_(M.image,!1,s.maxTextureSize);ce=We(M,ce);const De=r.convert(M.format,M.colorSpace),xe=r.convert(M.type);let Se=E(M.internalFormat,De,xe,M.colorSpace,M.isVideoTexture);Te(Z,M);let Ce;const Ge=M.mipmaps,Ve=M.isVideoTexture!==!0,ot=oe.__version===void 0||J===!0,U=j.dataReady,Re=T(M,ce);if(M.isDepthTexture)Se=S(M.format===Qn,M.type),ot&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Se,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Se,ce.width,ce.height,0,De,xe,null));else if(M.isDataTexture)if(Ge.length>0){Ve&&ot&&t.texStorage2D(n.TEXTURE_2D,Re,Se,Ge[0].width,Ge[0].height);for(let Q=0,re=Ge.length;Q<re;Q++)Ce=Ge[Q],Ve?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,De,xe,Ce.data):t.texImage2D(n.TEXTURE_2D,Q,Se,Ce.width,Ce.height,0,De,xe,Ce.data);M.generateMipmaps=!1}else Ve?(ot&&t.texStorage2D(n.TEXTURE_2D,Re,Se,ce.width,ce.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,De,xe,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Se,ce.width,ce.height,0,De,xe,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Se,Ge[0].width,Ge[0].height,ce.depth);for(let Q=0,re=Ge.length;Q<re;Q++)if(Ce=Ge[Q],M.format!==pi)if(De!==null)if(Ve){if(U)if(M.layerUpdates.size>0){const Ae=el(Ce.width,Ce.height,M.format,M.type);for(const Pe of M.layerUpdates){const st=Ce.data.subarray(Pe*Ae/Ce.data.BYTES_PER_ELEMENT,(Pe+1)*Ae/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Pe,Ce.width,Ce.height,1,De,st,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Ce.width,Ce.height,ce.depth,De,Ce.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Se,Ce.width,Ce.height,ce.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Ce.width,Ce.height,ce.depth,De,xe,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Se,Ce.width,Ce.height,ce.depth,0,De,xe,Ce.data)}else{Ve&&ot&&t.texStorage2D(n.TEXTURE_2D,Re,Se,Ge[0].width,Ge[0].height);for(let Q=0,re=Ge.length;Q<re;Q++)Ce=Ge[Q],M.format!==pi?De!==null?Ve?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Se,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,De,xe,Ce.data):t.texImage2D(n.TEXTURE_2D,Q,Se,Ce.width,Ce.height,0,De,xe,Ce.data)}else if(M.isDataArrayTexture)if(Ve){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Se,ce.width,ce.height,ce.depth),U)if(M.layerUpdates.size>0){const Q=el(ce.width,ce.height,M.format,M.type);for(const re of M.layerUpdates){const Ae=ce.data.subarray(re*Q/ce.data.BYTES_PER_ELEMENT,(re+1)*Q/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,ce.width,ce.height,1,De,xe,Ae)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,De,xe,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ce.width,ce.height,ce.depth,0,De,xe,ce.data);else if(M.isData3DTexture)Ve?(ot&&t.texStorage3D(n.TEXTURE_3D,Re,Se,ce.width,ce.height,ce.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,De,xe,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ce.width,ce.height,ce.depth,0,De,xe,ce.data);else if(M.isFramebufferTexture){if(ot)if(Ve)t.texStorage2D(n.TEXTURE_2D,Re,Se,ce.width,ce.height);else{let Q=ce.width,re=ce.height;for(let Ae=0;Ae<Re;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Se,Q,re,0,De,xe,null),Q>>=1,re>>=1}}else if(Ge.length>0){if(Ve&&ot){const Q=Me(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Re,Se,Q.width,Q.height)}for(let Q=0,re=Ge.length;Q<re;Q++)Ce=Ge[Q],Ve?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,De,xe,Ce):t.texImage2D(n.TEXTURE_2D,Q,Se,De,xe,Ce);M.generateMipmaps=!1}else if(Ve){if(ot){const Q=Me(ce);t.texStorage2D(n.TEXTURE_2D,Re,Se,Q.width,Q.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,xe,ce)}else t.texImage2D(n.TEXTURE_2D,0,Se,De,xe,ce);h(M)&&p(Z),oe.__version=j.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function L(b,M,z){if(M.image.length!==6)return;const Z=et(b,M),J=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+z);const j=i.get(J);if(J.version!==j.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const oe=ut.getPrimaries(ut.workingColorSpace),de=M.colorSpace===Zi?null:ut.getPrimaries(M.colorSpace),fe=M.colorSpace===Zi||oe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,De=[];for(let re=0;re<6;re++)!Ke&&!ce?De[re]=_(M.image[re],!0,s.maxCubemapSize):De[re]=ce?M.image[re].image:M.image[re],De[re]=We(M,De[re]);const xe=De[0],Se=r.convert(M.format,M.colorSpace),Ce=r.convert(M.type),Ge=E(M.internalFormat,Se,Ce,M.colorSpace),Ve=M.isVideoTexture!==!0,ot=j.__version===void 0||Z===!0,U=J.dataReady;let Re=T(M,xe);Te(n.TEXTURE_CUBE_MAP,M);let Q;if(Ke){Ve&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ge,xe.width,xe.height);for(let re=0;re<6;re++){Q=De[re].mipmaps;for(let Ae=0;Ae<Q.length;Ae++){const Pe=Q[Ae];M.format!==pi?Se!==null?Ve?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,Pe.width,Pe.height,Se,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,Ge,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,Pe.width,Pe.height,Se,Ce,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,Ge,Pe.width,Pe.height,0,Se,Ce,Pe.data)}}}else{if(Q=M.mipmaps,Ve&&ot){Q.length>0&&Re++;const re=Me(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ge,re.width,re.height)}for(let re=0;re<6;re++)if(ce){Ve?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De[re].width,De[re].height,Se,Ce,De[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,De[re].width,De[re].height,0,Se,Ce,De[re].data);for(let Ae=0;Ae<Q.length;Ae++){const st=Q[Ae].image[re].image;Ve?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,st.width,st.height,Se,Ce,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,Ge,st.width,st.height,0,Se,Ce,st.data)}}else{Ve?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Se,Ce,De[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Se,Ce,De[re]);for(let Ae=0;Ae<Q.length;Ae++){const Pe=Q[Ae];Ve?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,Se,Ce,Pe.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,Ge,Se,Ce,Pe.image[re])}}}h(M)&&p(n.TEXTURE_CUBE_MAP),j.__version=J.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function D(b,M,z,Z,J,j){const oe=r.convert(z.format,z.colorSpace),de=r.convert(z.type),fe=E(z.internalFormat,oe,de,z.colorSpace);if(!i.get(M).__hasExternalTextures){const ce=Math.max(1,M.width>>j),De=Math.max(1,M.height>>j);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,j,fe,ce,De,M.depth,0,oe,de,null):t.texImage2D(J,j,fe,ce,De,0,oe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ze(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,i.get(z).__webglTexture,0,Be(M)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,i.get(z).__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(b,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer){const Z=M.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,j=S(M.stencilBuffer,J),oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=Be(M);ze(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,j,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,j,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,j,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,b)}else{const Z=M.textures;for(let J=0;J<Z.length;J++){const j=Z[J],oe=r.convert(j.format,j.colorSpace),de=r.convert(j.type),fe=E(j.internalFormat,oe,de,j.colorSpace),Ke=Be(M);z&&ze(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,fe,M.width,M.height):ze(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,fe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,fe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function te(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,J=Be(M);if(M.depthTexture.format===Kn)ze(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Qn)ze(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ae(b){const M=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const Z=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Z}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");te(M.__webglFramebuffer,b)}else if(z){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=n.createRenderbuffer(),V(M.__webglDepthbuffer[Z],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),V(M.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(b,M,z){const Z=i.get(b);M!==void 0&&D(Z.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ae(b)}function ne(b){const M=b.texture,z=i.get(b),Z=i.get(M);b.addEventListener("dispose",P);const J=b.textures,j=b.isWebGLCubeRenderTarget===!0,oe=J.length>1;if(oe||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=M.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let fe=0;fe<M.mipmaps.length;fe++)z.__webglFramebuffer[de][fe]=n.createFramebuffer()}else z.__webglFramebuffer[de]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)z.__webglFramebuffer[de]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(oe)for(let de=0,fe=J.length;de<fe;de++){const Ke=i.get(J[de]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&ze(b)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<J.length;de++){const fe=J[de];z.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const Ke=r.convert(fe.format,fe.colorSpace),ce=r.convert(fe.type),De=E(fe.internalFormat,Ke,ce,fe.colorSpace,b.isXRRenderTarget===!0),xe=Be(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,De,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,z.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),V(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Te(n.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)D(z.__webglFramebuffer[de][fe],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,fe);else D(z.__webglFramebuffer[de],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);h(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let de=0,fe=J.length;de<fe;de++){const Ke=J[de],ce=i.get(Ke);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Te(n.TEXTURE_2D,Ke),D(z.__webglFramebuffer,b,Ke,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),h(Ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Z.__webglTexture),Te(de,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)D(z.__webglFramebuffer[fe],b,M,n.COLOR_ATTACHMENT0,de,fe);else D(z.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,de,0);h(M)&&p(de),t.unbindTexture()}b.depthBuffer&&ae(b)}function ve(b){const M=b.textures;for(let z=0,Z=M.length;z<Z;z++){const J=M[z];if(h(J)){const j=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(J).__webglTexture;t.bindTexture(j,oe),p(j),t.unbindTexture()}}}const he=[],w=[];function He(b){if(b.samples>0){if(ze(b)===!1){const M=b.textures,z=b.width,Z=b.height;let J=n.COLOR_BUFFER_BIT;const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(b),de=M.length>1;if(de)for(let fe=0;fe<M.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[fe]);const Ke=i.get(M[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,z,Z,0,0,z,Z,J,n.NEAREST),c===!0&&(he.length=0,w.length=0,he.push(n.COLOR_ATTACHMENT0+fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(he.push(j),w.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let fe=0;fe<M.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,oe.__webglColorRenderbuffer[fe]);const Ke=i.get(M[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const M=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Be(b){return Math.min(s.maxSamples,b.samples)}function ze(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(b){const M=a.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function We(b,M){const z=b.colorSpace,Z=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==en&&z!==Zi&&(ut.getTransfer(z)===pt?(Z!==pi||J!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Me(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=y,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=k,this.setTextureCube=ie,this.rebindTextures=se,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=D,this.useMultisampledRTT=ze}function Jm(n,e){function t(i,s=Zi){let r;const a=ut.getTransfer(s);if(i===zi)return n.UNSIGNED_BYTE;if(i===Do)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ro)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jl)return n.BYTE;if(i===Zl)return n.SHORT;if(i===Rs)return n.UNSIGNED_SHORT;if(i===wo)return n.INT;if(i===Mn)return n.UNSIGNED_INT;if(i===Ui)return n.FLOAT;if(i===Oi)return n.HALF_FLOAT;if(i===Ql)return n.ALPHA;if(i===eu)return n.RGB;if(i===pi)return n.RGBA;if(i===tu)return n.LUMINANCE;if(i===iu)return n.LUMINANCE_ALPHA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===Qn)return n.DEPTH_STENCIL;if(i===nu)return n.RED;if(i===Co)return n.RED_INTEGER;if(i===su)return n.RG;if(i===Lo)return n.RG_INTEGER;if(i===Io)return n.RGBA_INTEGER;if(i===Er||i===br||i===Tr||i===Ar)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===qa||i===$a||i===ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===Ja||i===Qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Za||i===Ja)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Qa)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===eo||i===to||i===io||i===no||i===so||i===ro||i===ao||i===oo||i===co||i===lo||i===uo||i===ho||i===fo||i===po)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===eo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===to)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===io)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===no)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===so)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ro)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ao)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===co)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ho)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pr||i===mo||i===go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pr)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ru||i===_o||i===vo||i===xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Qm extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mi extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e2={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const h=t.getJointPose(_,i),p=this._getHandJoint(l,_);h!==null&&(p.matrix.fromArray(h.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=h.radius),p.visible=h!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e2)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mt({vertexShader:t2,fragmentShader:i2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s2 extends En{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null;const _=new n2,h=t.getContextAttributes();let p=null,E=null;const S=[],T=[],I=new ke;let P=null;const A=new ni;A.layers.enable(1),A.viewport=new yt;const F=new ni;F.layers.enable(2),F.viewport=new yt;const $=[A,F],v=new Qm;v.layers.enable(1),v.layers.enable(2);let y=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let D=S[L];return D===void 0&&(D=new Aa,S[L]=D),D.getTargetRaySpace()},this.getControllerGrip=function(L){let D=S[L];return D===void 0&&(D=new Aa,S[L]=D),D.getGripSpace()},this.getHand=function(L){let D=S[L];return D===void 0&&(D=new Aa,S[L]=D),D.getHandSpace()};function X(L){const D=T.indexOf(L.inputSource);if(D===-1)return;const V=S[D];V!==void 0&&(V.update(L.inputSource,L.frame,l||a),V.dispatchEvent({type:L.type,data:L.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ee);for(let L=0;L<S.length;L++){const D=T[L];D!==null&&(T[L]=null,S[L].disconnect(D))}y=null,W=null,_.reset(),e.setRenderTarget(p),m=null,f=null,d=null,s=null,E=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ee),h.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const D={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,D),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new gi(m.framebufferWidth,m.framebufferHeight,{format:pi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let D=null,V=null,te=null;h.depth&&(te=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=h.stencil?Qn:Kn,V=h.stencil?Jn:Mn);const ae={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new gi(f.textureWidth,f.textureHeight,{format:pi,type:zi,depthTexture:new Mu(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(L){for(let D=0;D<L.removed.length;D++){const V=L.removed[D],te=T.indexOf(V);te>=0&&(T[te]=null,S[te].disconnect(V))}for(let D=0;D<L.added.length;D++){const V=L.added[D];let te=T.indexOf(V);if(te===-1){for(let se=0;se<S.length;se++)if(se>=T.length){T.push(V),te=se;break}else if(T[se]===null){T[se]=V,te=se;break}if(te===-1)break}const ae=S[te];ae&&ae.connect(V)}}const k=new R,ie=new R;function K(L,D,V){k.setFromMatrixPosition(D.matrixWorld),ie.setFromMatrixPosition(V.matrixWorld);const te=k.distanceTo(ie),ae=D.projectionMatrix.elements,se=V.projectionMatrix.elements,ne=ae[14]/(ae[10]-1),ve=ae[14]/(ae[10]+1),he=(ae[9]+1)/ae[5],w=(ae[9]-1)/ae[5],He=(ae[8]-1)/ae[0],Be=(se[8]+1)/se[0],ze=ne*He,me=ne*Be,We=te/(-He+Be),Me=We*-He;if(D.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Me),L.translateZ(We),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),ae[10]===-1)L.projectionMatrix.copy(D.projectionMatrix),L.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const b=ne+We,M=ve+We,z=ze-Me,Z=me+(te-Me),J=he*ve/M*b,j=w*ve/M*b;L.projectionMatrix.makePerspective(z,Z,J,j,b,M),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function pe(L,D){D===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(D.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let D=L.near,V=L.far;_.texture!==null&&(_.depthNear>0&&(D=_.depthNear),_.depthFar>0&&(V=_.depthFar)),v.near=F.near=A.near=D,v.far=F.far=A.far=V,(y!==v.near||W!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,W=v.far);const te=L.parent,ae=v.cameras;pe(v,te);for(let se=0;se<ae.length;se++)pe(ae[se],te);ae.length===2?K(v,A,F):v.projectionMatrix.copy(A.projectionMatrix),le(L,v,te)};function le(L,D,V){V===null?L.matrix.copy(D.matrixWorld):(L.matrix.copy(V.matrixWorld),L.matrix.invert(),L.matrix.multiply(D.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(D.projectionMatrix),L.projectionMatrixInverse.copy(D.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Cs*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(L){c=L,f!==null&&(f.fixedFoveation=L),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Te=null;function et(L,D){if(u=D.getViewerPose(l||a),g=D,u!==null){const V=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let te=!1;V.length!==v.cameras.length&&(v.cameras.length=0,te=!0);for(let se=0;se<V.length;se++){const ne=V[se];let ve=null;if(m!==null)ve=m.getViewport(ne);else{const w=d.getViewSubImage(f,ne);ve=w.viewport,se===0&&(e.setRenderTargetTextures(E,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(E))}let he=$[se];he===void 0&&(he=new ni,he.layers.enable(se),he.viewport=new yt,$[se]=he),he.matrix.fromArray(ne.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ne.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ve.x,ve.y,ve.width,ve.height),se===0&&(v.matrix.copy(he.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),te===!0&&v.cameras.push(he)}const ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const se=d.getDepthInformation(V[0]);se&&se.isValid&&se.texture&&_.init(e,se,s.renderState)}}for(let V=0;V<S.length;V++){const te=T[V],ae=S[V];te!==null&&ae!==void 0&&ae.update(te,D,l||a)}Te&&Te(L,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}const qe=new vu;qe.setAnimationLoop(et),this.setAnimationLoop=function(L){Te=L},this.dispose=function(){}}}const un=new ki,r2=new Mt;function a2(n,e){function t(h,p){h.matrixAutoUpdate===!0&&h.updateMatrix(),p.value.copy(h.matrix)}function i(h,p){p.color.getRGB(h.fogColor.value,pu(n)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function s(h,p,E,S,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),d(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&m(h,p,T)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),_(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(a(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?c(h,p,E,S):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map,t(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.bumpMap&&(h.bumpMap.value=p.bumpMap,t(p.bumpMap,h.bumpMapTransform),h.bumpScale.value=p.bumpScale,p.side===Xt&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,t(p.normalMap,h.normalMapTransform),h.normalScale.value.copy(p.normalScale),p.side===Xt&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,t(p.displacementMap,h.displacementMapTransform),h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,h.emissiveMapTransform)),p.specularMap&&(h.specularMap.value=p.specularMap,t(p.specularMap,h.specularMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,T=E.envMapRotation;S&&(h.envMap.value=S,un.copy(T),un.x*=-1,un.y*=-1,un.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(un.y*=-1,un.z*=-1),h.envMapRotation.value.setFromMatrix4(r2.makeRotationFromEuler(un)),h.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap&&(h.lightMap.value=p.lightMap,h.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,h.lightMapTransform)),p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,h.aoMapTransform))}function a(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,p.map&&(h.map.value=p.map,t(p.map,h.mapTransform))}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function c(h,p,E,S){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*E,h.scale.value=S*.5,p.map&&(h.map.value=p.map,t(p.map,h.uvTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map,t(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function d(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.metalness.value=p.metalness,p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,h.metalnessMapTransform)),h.roughness.value=p.roughness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,h.roughnessMapTransform)),p.envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function m(h,p,E){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,h.sheenColorMapTransform)),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,h.sheenRoughnessMapTransform))),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,h.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(h.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&h.clearcoatNormalScale.value.negate())),p.dispersion>0&&(h.dispersion.value=p.dispersion),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,h.iridescenceMapTransform)),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,h.transmissionMapTransform)),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(h.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(h.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,h.specularColorMapTransform)),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){const E=e.get(p).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function o2(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const T=S.program;i.uniformBlockBinding(E,T)}function l(E,S){let T=s[E.id];T===void 0&&(g(E),T=u(E),s[E.id]=T,E.addEventListener("dispose",h));const I=S.program;i.updateUBOMapping(E,I);const P=e.render.frame;r[E.id]!==P&&(f(E),r[E.id]=P)}function u(E){const S=d();E.__bindingPointIndex=S;const T=n.createBuffer(),I=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=s[E.id],T=E.uniforms,I=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,A=T.length;P<A;P++){const F=Array.isArray(T[P])?T[P]:[T[P]];for(let $=0,v=F.length;$<v;$++){const y=F[$];if(m(y,P,$,I)===!0){const W=y.__offset,X=Array.isArray(y.value)?y.value:[y.value];let Y=0;for(let ee=0;ee<X.length;ee++){const k=X[ee],ie=_(k);typeof k=="number"||typeof k=="boolean"?(y.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,W+Y,y.__data)):k.isMatrix3?(y.__data[0]=k.elements[0],y.__data[1]=k.elements[1],y.__data[2]=k.elements[2],y.__data[3]=0,y.__data[4]=k.elements[3],y.__data[5]=k.elements[4],y.__data[6]=k.elements[5],y.__data[7]=0,y.__data[8]=k.elements[6],y.__data[9]=k.elements[7],y.__data[10]=k.elements[8],y.__data[11]=0):(k.toArray(y.__data,Y),Y+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,S,T,I){const P=E.value,A=S+"_"+T;if(I[A]===void 0)return typeof P=="number"||typeof P=="boolean"?I[A]=P:I[A]=P.clone(),!0;{const F=I[A];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return I[A]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(E){const S=E.uniforms;let T=0;const I=16;for(let A=0,F=S.length;A<F;A++){const $=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,y=$.length;v<y;v++){const W=$[v],X=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,ee=X.length;Y<ee;Y++){const k=X[Y],ie=_(k),K=T%I,pe=K%ie.boundary,le=K+pe;T+=pe,le!==0&&I-le<ie.storage&&(T+=I-le),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=ie.storage}}}const P=T%I;return P>0&&(T+=I-P),E.__size=T,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function h(E){const S=E.target;S.removeEventListener("dispose",h);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class c2{constructor(e={}){const{canvas:t=$d(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,h=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=Ji,this.toneMappingExposure=1;const S=this;let T=!1,I=0,P=0,A=null,F=-1,$=null;const v=new yt,y=new yt;let W=null;const X=new nt(0);let Y=0,ee=t.width,k=t.height,ie=1,K=null,pe=null;const le=new yt(0,0,ee,k),Te=new yt(0,0,ee,k);let et=!1;const qe=new _u;let L=!1,D=!1;const V=new Mt,te=new Mt,ae=new R,se=new yt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function he(){return A===null?ie:1}let w=i;function He(x,C){return t.getContext(x,C)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Po}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),w===null){const C="webgl2";if(w=He(C,x),w===null)throw He(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Be,ze,me,We,Me,b,M,z,Z,J,j,oe,de,fe,Ke,ce,De,xe,Se,Ce,Ge,Ve,ot,U;function Re(){Be=new f0(w),Be.init(),Ve=new Jm(w,Be),ze=new o0(w,Be,e,Ve),me=new $m(w),ze.reverseDepthBuffer&&me.buffers.depth.setReversed(!0),We=new g0(w),Me=new Um,b=new Zm(w,Be,me,Me,ze,Ve,We),M=new l0(S),z=new d0(S),Z=new Ef(w),ot=new r0(w,Z),J=new p0(w,Z,We,ot),j=new v0(w,J,Z,We),Se=new _0(w,ze,b),ce=new c0(Me),oe=new Im(S,M,z,Be,ze,ot,ce),de=new a2(S,Me),fe=new Fm,Ke=new Gm(Be),xe=new s0(S,M,z,me,j,f,c),De=new Ym(S,j,ze),U=new o2(w,We,ze,me),Ce=new a0(w,Be,We),Ge=new m0(w,Be,We),We.programs=oe.programs,S.capabilities=ze,S.extensions=Be,S.properties=Me,S.renderLists=fe,S.shadowMap=De,S.state=me,S.info=We}Re();const Q=new s2(S,w);this.xr=Q,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=Be.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Be.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(x){x!==void 0&&(ie=x,this.setSize(ee,k,!1))},this.getSize=function(x){return x.set(ee,k)},this.setSize=function(x,C,O=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=x,k=C,t.width=Math.floor(x*ie),t.height=Math.floor(C*ie),O===!0&&(t.style.width=x+"px",t.style.height=C+"px"),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(ee*ie,k*ie).floor()},this.setDrawingBufferSize=function(x,C,O){ee=x,k=C,ie=O,t.width=Math.floor(x*O),t.height=Math.floor(C*O),this.setViewport(0,0,x,C)},this.getCurrentViewport=function(x){return x.copy(v)},this.getViewport=function(x){return x.copy(le)},this.setViewport=function(x,C,O,B){x.isVector4?le.set(x.x,x.y,x.z,x.w):le.set(x,C,O,B),me.viewport(v.copy(le).multiplyScalar(ie).round())},this.getScissor=function(x){return x.copy(Te)},this.setScissor=function(x,C,O,B){x.isVector4?Te.set(x.x,x.y,x.z,x.w):Te.set(x,C,O,B),me.scissor(y.copy(Te).multiplyScalar(ie).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(x){me.setScissorTest(et=x)},this.setOpaqueSort=function(x){K=x},this.setTransparentSort=function(x){pe=x},this.getClearColor=function(x){return x.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(x=!0,C=!0,O=!0){let B=0;if(x){let N=!1;if(A!==null){const ue=A.texture.format;N=ue===Io||ue===Lo||ue===Co}if(N){const ue=A.texture.type,_e=ue===zi||ue===Mn||ue===Rs||ue===Jn||ue===Do||ue===Ro,we=xe.getClearColor(),Le=xe.getClearAlpha(),Fe=we.r,Oe=we.g,Ne=we.b;_e?(m[0]=Fe,m[1]=Oe,m[2]=Ne,m[3]=Le,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=Fe,g[1]=Oe,g[2]=Ne,g[3]=Le,w.clearBufferiv(w.COLOR,0,g))}else B|=w.COLOR_BUFFER_BIT}C&&(B|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),fe.dispose(),Ke.dispose(),Me.dispose(),M.dispose(),z.dispose(),j.dispose(),ot.dispose(),U.dispose(),oe.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Bs),Q.removeEventListener("sessionend",us),bi.stop()};function re(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=We.autoReset,C=De.enabled,O=De.autoUpdate,B=De.needsUpdate,N=De.type;Re(),We.autoReset=x,De.enabled=C,De.autoUpdate=O,De.needsUpdate=B,De.type=N}function Pe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function st(x){const C=x.target;C.removeEventListener("dispose",st),gt(C)}function gt(x){Lt(x),Me.remove(x)}function Lt(x){const C=Me.get(x).programs;C!==void 0&&(C.forEach(function(O){oe.releaseProgram(O)}),x.isShaderMaterial&&oe.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,O,B,N,ue){C===null&&(C=ne);const _e=N.isMesh&&N.matrixWorld.determinant()<0,we=H(x,C,O,B,N);me.setMaterial(B,_e);let Le=O.index,Fe=1;if(B.wireframe===!0){if(Le=J.getWireframeAttribute(O),Le===void 0)return;Fe=2}const Oe=O.drawRange,Ne=O.attributes.position;let $e=Oe.start*Fe,rt=(Oe.start+Oe.count)*Fe;ue!==null&&($e=Math.max($e,ue.start*Fe),rt=Math.min(rt,(ue.start+ue.count)*Fe)),Le!==null?($e=Math.max($e,0),rt=Math.min(rt,Le.count)):Ne!=null&&($e=Math.max($e,0),rt=Math.min(rt,Ne.count));const ct=rt-$e;if(ct<0||ct===1/0)return;ot.setup(N,B,we,O,Le);let St,je=Ce;if(Le!==null&&(St=Z.get(Le),je=Ge,je.setIndex(St)),N.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*he()),je.setMode(w.LINES)):je.setMode(w.TRIANGLES);else if(N.isLine){let Ie=B.linewidth;Ie===void 0&&(Ie=1),me.setLineWidth(Ie*he()),N.isLineSegments?je.setMode(w.LINES):N.isLineLoop?je.setMode(w.LINE_LOOP):je.setMode(w.LINE_STRIP)}else N.isPoints?je.setMode(w.POINTS):N.isSprite&&je.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ie=N._multiDrawStarts,ft=N._multiDrawCounts,tt=N._multiDrawCount,Et=Le?Z.get(Le).bytesPerElement:1,qt=Me.get(B).currentProgram.getUniforms();for(let lt=0;lt<tt;lt++)qt.setValue(w,"_gl_DrawID",lt),je.render(Ie[lt]/Et,ft[lt])}else if(N.isInstancedMesh)je.renderInstances($e,ct,N.count);else if(O.isInstancedBufferGeometry){const Ie=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ft=Math.min(O.instanceCount,Ie);je.renderInstances($e,ct,ft)}else je.render($e,ct)};function at(x,C,O){x.transparent===!0&&x.side===di&&x.forceSinglePass===!1?(x.side=Xt,x.needsUpdate=!0,An(x,C,O),x.side=Qi,x.needsUpdate=!0,An(x,C,O),x.side=di):An(x,C,O)}this.compile=function(x,C,O=null){O===null&&(O=x),h=Ke.get(O),h.init(C),E.push(h),O.traverseVisible(function(N){N.isLight&&N.layers.test(C.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),x!==O&&x.traverseVisible(function(N){N.isLight&&N.layers.test(C.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const B=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ue=N.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const we=ue[_e];at(we,O,N),B.add(we)}else at(ue,O,N),B.add(ue)}),E.pop(),h=null,B},this.compileAsync=function(x,C,O=null){const B=this.compile(x,C,O);return new Promise(N=>{function ue(){if(B.forEach(function(_e){Me.get(_e).currentProgram.isReady()&&B.delete(_e)}),B.size===0){N(x);return}setTimeout(ue,10)}Be.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ot=null;function ti(x){Ot&&Ot(x)}function Bs(){bi.stop()}function us(){bi.start()}const bi=new vu;bi.setAnimationLoop(ti),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(x){Ot=x,Q.setAnimationLoop(x),x===null?bi.stop():bi.start()},Q.addEventListener("sessionstart",Bs),Q.addEventListener("sessionend",us),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(C),C=Q.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,C,A),h=Ke.get(x,E.length),h.init(C),E.push(h),te.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),qe.setFromProjectionMatrix(te),D=this.localClippingEnabled,L=ce.init(this.clippingPlanes,D),_=fe.get(x,p.length),_.init(),p.push(_),Q.enabled===!0&&Q.isPresenting===!0){const ue=S.xr.getDepthSensingMesh();ue!==null&&bn(ue,C,-1/0,S.sortObjects)}bn(x,C,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(K,pe),ve=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ve&&xe.addToRenderList(_,x),this.info.render.frame++,L===!0&&ce.beginShadows();const O=h.state.shadowsArray;De.render(O,x,C),L===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,N=_.transmissive;if(h.setupLights(),C.isArrayCamera){const ue=C.cameras;if(N.length>0)for(let _e=0,we=ue.length;_e<we;_e++){const Le=ue[_e];hs(B,N,x,Le)}ve&&xe.render(x);for(let _e=0,we=ue.length;_e<we;_e++){const Le=ue[_e];zs(_,x,Le,Le.viewport)}}else N.length>0&&hs(B,N,x,C),ve&&xe.render(x),zs(_,x,C);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(S,x,C),ot.resetDefaultState(),F=-1,$=null,E.pop(),E.length>0?(h=E[E.length-1],L===!0&&ce.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function bn(x,C,O,B){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||qe.intersectsSprite(x)){B&&se.setFromMatrixPosition(x.matrixWorld).applyMatrix4(te);const _e=j.update(x),we=x.material;we.visible&&_.push(x,_e,we,O,se.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||qe.intersectsObject(x))){const _e=j.update(x),we=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),se.copy(x.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),se.copy(_e.boundingSphere.center)),se.applyMatrix4(x.matrixWorld).applyMatrix4(te)),Array.isArray(we)){const Le=_e.groups;for(let Fe=0,Oe=Le.length;Fe<Oe;Fe++){const Ne=Le[Fe],$e=we[Ne.materialIndex];$e&&$e.visible&&_.push(x,_e,$e,O,se.z,Ne)}}else we.visible&&_.push(x,_e,we,O,se.z,null)}}const ue=x.children;for(let _e=0,we=ue.length;_e<we;_e++)bn(ue[_e],C,O,B)}function zs(x,C,O,B){const N=x.opaque,ue=x.transmissive,_e=x.transparent;h.setupLightsView(O),L===!0&&ce.setGlobalState(S.clippingPlanes,O),B&&me.viewport(v.copy(B)),N.length>0&&Tn(N,C,O),ue.length>0&&Tn(ue,C,O),_e.length>0&&Tn(_e,C,O),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function hs(x,C,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new gi(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Oi:zi,minFilter:_n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const ue=h.state.transmissionRenderTarget[B.id],_e=B.viewport||v;ue.setSize(_e.z,_e.w);const we=S.getRenderTarget();S.setRenderTarget(ue),S.getClearColor(X),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),ve&&xe.render(O);const Le=S.toneMapping;S.toneMapping=Ji;const Fe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),L===!0&&ce.setGlobalState(S.clippingPlanes,B),Tn(x,O,B),b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ne=0,$e=C.length;Ne<$e;Ne++){const rt=C[Ne],ct=rt.object,St=rt.geometry,je=rt.material,Ie=rt.group;if(je.side===di&&ct.layers.test(B.layers)){const ft=je.side;je.side=Xt,je.needsUpdate=!0,ds(ct,O,B,St,je,Ie),je.side=ft,je.needsUpdate=!0,Oe=!0}}Oe===!0&&(b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue))}S.setRenderTarget(we),S.setClearColor(X,Y),Fe!==void 0&&(B.viewport=Fe),S.toneMapping=Le}function Tn(x,C,O){const B=C.isScene===!0?C.overrideMaterial:null;for(let N=0,ue=x.length;N<ue;N++){const _e=x[N],we=_e.object,Le=_e.geometry,Fe=B===null?_e.material:B,Oe=_e.group;we.layers.test(O.layers)&&ds(we,C,O,Le,Fe,Oe)}}function ds(x,C,O,B,N,ue){x.onBeforeRender(S,C,O,B,N,ue),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,C,O,B,x,ue),N.transparent===!0&&N.side===di&&N.forceSinglePass===!1?(N.side=Xt,N.needsUpdate=!0,S.renderBufferDirect(O,C,B,N,x,ue),N.side=Qi,N.needsUpdate=!0,S.renderBufferDirect(O,C,B,N,x,ue),N.side=di):S.renderBufferDirect(O,C,B,N,x,ue),x.onAfterRender(S,C,O,B,N,ue)}function An(x,C,O){C.isScene!==!0&&(C=ne);const B=Me.get(x),N=h.state.lights,ue=h.state.shadowsArray,_e=N.state.version,we=oe.getParameters(x,N.state,ue,C,O),Le=oe.getProgramCacheKey(we);let Fe=B.programs;B.environment=x.isMeshStandardMaterial?C.environment:null,B.fog=C.fog,B.envMap=(x.isMeshStandardMaterial?z:M).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,Fe===void 0&&(x.addEventListener("dispose",st),Fe=new Map,B.programs=Fe);let Oe=Fe.get(Le);if(Oe!==void 0){if(B.currentProgram===Oe&&B.lightsStateVersion===_e)return Hs(x,we),Oe}else we.uniforms=oe.getUniforms(x),x.onBeforeCompile(we,S),Oe=oe.acquireProgram(we,Le),Fe.set(Le,Oe),B.uniforms=we.uniforms;const Ne=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ne.clippingPlanes=ce.uniform),Hs(x,we),B.needsLights=Ee(x),B.lightsStateVersion=_e,B.needsLights&&(Ne.ambientLightColor.value=N.state.ambient,Ne.lightProbe.value=N.state.probe,Ne.directionalLights.value=N.state.directional,Ne.directionalLightShadows.value=N.state.directionalShadow,Ne.spotLights.value=N.state.spot,Ne.spotLightShadows.value=N.state.spotShadow,Ne.rectAreaLights.value=N.state.rectArea,Ne.ltc_1.value=N.state.rectAreaLTC1,Ne.ltc_2.value=N.state.rectAreaLTC2,Ne.pointLights.value=N.state.point,Ne.pointLightShadows.value=N.state.pointShadow,Ne.hemisphereLights.value=N.state.hemi,Ne.directionalShadowMap.value=N.state.directionalShadowMap,Ne.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ne.spotShadowMap.value=N.state.spotShadowMap,Ne.spotLightMatrix.value=N.state.spotLightMatrix,Ne.spotLightMap.value=N.state.spotLightMap,Ne.pointShadowMap.value=N.state.pointShadowMap,Ne.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Oe,B.uniformsList=null,Oe}function ks(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=Dr.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function Hs(x,C){const O=Me.get(x);O.outputColorSpace=C.outputColorSpace,O.batching=C.batching,O.batchingColor=C.batchingColor,O.instancing=C.instancing,O.instancingColor=C.instancingColor,O.instancingMorph=C.instancingMorph,O.skinning=C.skinning,O.morphTargets=C.morphTargets,O.morphNormals=C.morphNormals,O.morphColors=C.morphColors,O.morphTargetsCount=C.morphTargetsCount,O.numClippingPlanes=C.numClippingPlanes,O.numIntersection=C.numClipIntersection,O.vertexAlphas=C.vertexAlphas,O.vertexTangents=C.vertexTangents,O.toneMapping=C.toneMapping}function H(x,C,O,B,N){C.isScene!==!0&&(C=ne),b.resetTextureUnits();const ue=C.fog,_e=B.isMeshStandardMaterial?C.environment:null,we=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:en,Le=(B.isMeshStandardMaterial?z:M).get(B.envMap||_e),Fe=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Oe=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ne=!!O.morphAttributes.position,$e=!!O.morphAttributes.normal,rt=!!O.morphAttributes.color;let ct=Ji;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ct=S.toneMapping);const St=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,je=St!==void 0?St.length:0,Ie=Me.get(B),ft=h.state.lights;if(L===!0&&(D===!0||x!==$)){const It=x===$&&B.id===F;ce.setState(B,x,It)}let tt=!1;B.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ft.state.version||Ie.outputColorSpace!==we||N.isBatchedMesh&&Ie.batching===!1||!N.isBatchedMesh&&Ie.batching===!0||N.isBatchedMesh&&Ie.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ie.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ie.instancing===!1||!N.isInstancedMesh&&Ie.instancing===!0||N.isSkinnedMesh&&Ie.skinning===!1||!N.isSkinnedMesh&&Ie.skinning===!0||N.isInstancedMesh&&Ie.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ie.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ie.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ie.instancingMorph===!1&&N.morphTexture!==null||Ie.envMap!==Le||B.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ce.numPlanes||Ie.numIntersection!==ce.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==Oe||Ie.morphTargets!==Ne||Ie.morphNormals!==$e||Ie.morphColors!==rt||Ie.toneMapping!==ct||Ie.morphTargetsCount!==je)&&(tt=!0):(tt=!0,Ie.__version=B.version);let Et=Ie.currentProgram;tt===!0&&(Et=An(B,C,N));let qt=!1,lt=!1,dt=!1;const it=Et.getUniforms(),$t=Ie.uniforms;if(me.useProgram(Et.program)&&(qt=!0,lt=!0,dt=!0),B.id!==F&&(F=B.id,lt=!0),qt||$!==x){ze.reverseDepthBuffer?(V.copy(x.projectionMatrix),Zd(V),Jd(V),it.setValue(w,"projectionMatrix",V)):it.setValue(w,"projectionMatrix",x.projectionMatrix),it.setValue(w,"viewMatrix",x.matrixWorldInverse);const It=it.map.cameraPosition;It!==void 0&&It.setValue(w,ae.setFromMatrixPosition(x.matrixWorld)),ze.logarithmicDepthBuffer&&it.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),$!==x&&($=x,lt=!0,dt=!0)}if(N.isSkinnedMesh){it.setOptional(w,N,"bindMatrix"),it.setOptional(w,N,"bindMatrixInverse");const It=N.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),it.setValue(w,"boneTexture",It.boneTexture,b))}N.isBatchedMesh&&(it.setOptional(w,N,"batchingTexture"),it.setValue(w,"batchingTexture",N._matricesTexture,b),it.setOptional(w,N,"batchingIdTexture"),it.setValue(w,"batchingIdTexture",N._indirectTexture,b),it.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&it.setValue(w,"batchingColorTexture",N._colorsTexture,b));const _i=O.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Se.update(N,O,Et),(lt||Ie.receiveShadow!==N.receiveShadow)&&(Ie.receiveShadow=N.receiveShadow,it.setValue(w,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&($t.envMap.value=Le,$t.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&C.environment!==null&&($t.envMapIntensity.value=C.environmentIntensity),lt&&(it.setValue(w,"toneMappingExposure",S.toneMappingExposure),Ie.needsLights&&G($t,dt),ue&&B.fog===!0&&de.refreshFogUniforms($t,ue),de.refreshMaterialUniforms($t,B,ie,k,h.state.transmissionRenderTarget[x.id]),Dr.upload(w,ks(Ie),$t,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Dr.upload(w,ks(Ie),$t,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(w,"center",N.center),it.setValue(w,"modelViewMatrix",N.modelViewMatrix),it.setValue(w,"normalMatrix",N.normalMatrix),it.setValue(w,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const It=B.uniformsGroups;for(let tn=0,At=It.length;tn<At;tn++){const Gs=It[tn];U.update(Gs,Et),U.bind(Gs,Et)}}return Et}function G(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function Ee(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,C,O){Me.get(x.texture).__webglTexture=C,Me.get(x.depthTexture).__webglTexture=O;const B=Me.get(x);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,C){const O=Me.get(x);O.__webglFramebuffer=C,O.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,O=0){A=x,I=C,P=O;let B=!0,N=null,ue=!1,_e=!1;if(x){const Le=Me.get(x);if(Le.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(w.FRAMEBUFFER,null),B=!1;else if(Le.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(Le.__hasExternalTextures)b.rebindTextures(x,Me.get(x.texture).__webglTexture,Me.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ne=x.depthTexture;if(Le.__boundDepthTexture!==Ne){if(Ne!==null&&Me.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}const Fe=x.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(_e=!0);const Oe=Me.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Oe[C])?N=Oe[C][O]:N=Oe[C],ue=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?N=Me.get(x).__webglMultisampledFramebuffer:Array.isArray(Oe)?N=Oe[O]:N=Oe,v.copy(x.viewport),y.copy(x.scissor),W=x.scissorTest}else v.copy(le).multiplyScalar(ie).floor(),y.copy(Te).multiplyScalar(ie).floor(),W=et;if(me.bindFramebuffer(w.FRAMEBUFFER,N)&&B&&me.drawBuffers(x,N),me.viewport(v),me.scissor(y),me.setScissorTest(W),ue){const Le=Me.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+C,Le.__webglTexture,O)}else if(_e){const Le=Me.get(x.texture),Fe=C||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Le.__webglTexture,O||0,Fe)}F=-1},this.readRenderTargetPixels=function(x,C,O,B,N,ue,_e){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){me.bindFramebuffer(w.FRAMEBUFFER,we);try{const Le=x.texture,Fe=Le.format,Oe=Le.type;if(!ze.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-B&&O>=0&&O<=x.height-N&&w.readPixels(C,O,B,N,Ve.convert(Fe),Ve.convert(Oe),ue)}finally{const Le=A!==null?Me.get(A).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(x,C,O,B,N,ue,_e){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){const Le=x.texture,Fe=Le.format,Oe=Le.type;if(!ze.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=x.width-B&&O>=0&&O<=x.height-N){me.bindFramebuffer(w.FRAMEBUFFER,we);const Ne=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ne),w.bufferData(w.PIXEL_PACK_BUFFER,ue.byteLength,w.STREAM_READ),w.readPixels(C,O,B,N,Ve.convert(Fe),Ve.convert(Oe),0);const $e=A!==null?Me.get(A).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,$e);const rt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await jd(w,rt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ne),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ue),w.deleteBuffer(Ne),w.deleteSync(rt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,C=null,O=0){x.isTexture!==!0&&(wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,x=arguments[1]);const B=Math.pow(2,-O),N=Math.floor(x.image.width*B),ue=Math.floor(x.image.height*B),_e=C!==null?C.x:0,we=C!==null?C.y:0;b.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,_e,we,N,ue),me.unbindTexture()},this.copyTextureToTexture=function(x,C,O=null,B=null,N=0){x.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1],C=arguments[2],N=arguments[3]||0,O=null);let ue,_e,we,Le,Fe,Oe;O!==null?(ue=O.max.x-O.min.x,_e=O.max.y-O.min.y,we=O.min.x,Le=O.min.y):(ue=x.image.width,_e=x.image.height,we=0,Le=0),B!==null?(Fe=B.x,Oe=B.y):(Fe=0,Oe=0);const Ne=Ve.convert(C.format),$e=Ve.convert(C.type);b.setTexture2D(C,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,C.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,C.unpackAlignment);const rt=w.getParameter(w.UNPACK_ROW_LENGTH),ct=w.getParameter(w.UNPACK_IMAGE_HEIGHT),St=w.getParameter(w.UNPACK_SKIP_PIXELS),je=w.getParameter(w.UNPACK_SKIP_ROWS),Ie=w.getParameter(w.UNPACK_SKIP_IMAGES),ft=x.isCompressedTexture?x.mipmaps[N]:x.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ft.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ft.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,we),w.pixelStorei(w.UNPACK_SKIP_ROWS,Le),x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,N,Fe,Oe,ue,_e,Ne,$e,ft.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,N,Fe,Oe,ft.width,ft.height,Ne,ft.data):w.texSubImage2D(w.TEXTURE_2D,N,Fe,Oe,ue,_e,Ne,$e,ft),w.pixelStorei(w.UNPACK_ROW_LENGTH,rt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ct),w.pixelStorei(w.UNPACK_SKIP_PIXELS,St),w.pixelStorei(w.UNPACK_SKIP_ROWS,je),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ie),N===0&&C.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(x,C,O=null,B=null,N=0){x.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,x=arguments[2],C=arguments[3],N=arguments[4]||0);let ue,_e,we,Le,Fe,Oe,Ne,$e,rt;const ct=x.isCompressedTexture?x.mipmaps[N]:x.image;O!==null?(ue=O.max.x-O.min.x,_e=O.max.y-O.min.y,we=O.max.z-O.min.z,Le=O.min.x,Fe=O.min.y,Oe=O.min.z):(ue=ct.width,_e=ct.height,we=ct.depth,Le=0,Fe=0,Oe=0),B!==null?(Ne=B.x,$e=B.y,rt=B.z):(Ne=0,$e=0,rt=0);const St=Ve.convert(C.format),je=Ve.convert(C.type);let Ie;if(C.isData3DTexture)b.setTexture3D(C,0),Ie=w.TEXTURE_3D;else if(C.isDataArrayTexture||C.isCompressedArrayTexture)b.setTexture2DArray(C,0),Ie=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,C.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,C.unpackAlignment);const ft=w.getParameter(w.UNPACK_ROW_LENGTH),tt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Et=w.getParameter(w.UNPACK_SKIP_PIXELS),qt=w.getParameter(w.UNPACK_SKIP_ROWS),lt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ct.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ct.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Le),w.pixelStorei(w.UNPACK_SKIP_ROWS,Fe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Oe),x.isDataTexture||x.isData3DTexture?w.texSubImage3D(Ie,N,Ne,$e,rt,ue,_e,we,St,je,ct.data):C.isCompressedArrayTexture?w.compressedTexSubImage3D(Ie,N,Ne,$e,rt,ue,_e,we,St,ct.data):w.texSubImage3D(Ie,N,Ne,$e,rt,ue,_e,we,St,je,ct),w.pixelStorei(w.UNPACK_ROW_LENGTH,ft),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,tt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Et),w.pixelStorei(w.UNPACK_SKIP_ROWS,qt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,lt),N===0&&C.generateMipmaps&&w.generateMipmap(Ie),me.unbindTexture()},this.initRenderTarget=function(x){Me.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),me.unbindTexture()},this.resetState=function(){I=0,P=0,A=null,me.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Uo?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Vr?"display-p3":"srgb"}}class l2 extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kr extends as{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nr=new R,Fr=new R,tl=new Mt,Ss=new Wr,dr=new Ns,Pa=new R,il=new R;class Or extends Yt{constructor(e=new _t,t=new Kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Nr.fromBufferAttribute(t,s-1),Fr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Nr.distanceTo(Fr);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(s),dr.radius+=r,e.ray.intersectsSphere(dr)===!1)return;tl.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(tl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=m,h=g-1;_<h;_+=l){const p=u.getX(_),E=u.getX(_+1),S=fr(this,e,Ss,c,p,E);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),h=u.getX(m),p=fr(this,e,Ss,c,_,h);p&&t.push(p)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=m,h=g-1;_<h;_+=l){const p=fr(this,e,Ss,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=fr(this,e,Ss,c,g-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fr(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(Nr.fromBufferAttribute(a,s),Fr.fromBufferAttribute(a,r),t.distanceSqToSegment(Nr,Fr,Pa,il)>i)return;Pa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Pa);if(!(c<e.near||c>e.far))return{distance:c,point:il.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const nl=new R,sl=new R;class Us extends Or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)nl.fromBufferAttribute(t,s),sl.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+nl.distanceTo(sl);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u2 extends Or{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class h2 extends as{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rl=new Mt,So=new Wr,pr=new Ns,mr=new R;class Os extends Yt{constructor(e=new _t,t=new h2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,e.ray.intersectsSphere(pr)===!1)return;rl.copy(s).invert(),So.copy(e.ray).applyMatrix4(rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const h=l.getX(g);mr.fromBufferAttribute(d,h),al(mr,h,c,s,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)mr.fromBufferAttribute(d,g),al(mr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function al(n,e,t,i,s,r,a){const o=So.distanceSqToPoint(n);if(o<t){const c=new R;So.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}const gr=new R,_r=new R,wa=new R,vr=new si;class d2 extends _t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Yn*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),f={},m=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:h,c:p}=vr;if(_.fromBufferAttribute(o,l[0]),h.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),vr.getNormal(wa),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){const S=(E+1)%3,T=d[E],I=d[S],P=vr[u[E]],A=vr[u[S]],F=`${T}_${I}`,$=`${I}_${T}`;$ in f&&f[$]?(wa.dot(f[$].normal)<=r&&(m.push(P.x,P.y,P.z),m.push(A.x,A.y,A.z)),f[$]=null):F in f||(f[F]={index0:l[E],index1:l[S],normal:wa.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:h}=f[g];gr.fromBufferAttribute(o,_),_r.fromBufferAttribute(o,h),m.push(gr.x,gr.y,gr.z),m.push(_r.x,_r.y,_r.z)}this.setAttribute("position",new Qe(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Oo extends _t{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=e;const f=(t-e)/s,m=new R,g=new ke;for(let _=0;_<=s;_++){for(let h=0;h<=i;h++){const p=r+h/i*a;m.x=d*Math.cos(p),m.y=d*Math.sin(p),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const h=_*(i+1);for(let p=0;p<i;p++){const E=p+h,S=E,T=E+i+1,I=E+i+2,P=E+1;o.push(S,T,P),o.push(T,I,P)}}this.setIndex(o),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ts extends _t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new R,f=new R,m=[],g=[],_=[],h=[];for(let p=0;p<=i;p++){const E=[],S=p/i;let T=0;p===0&&a===0?T=.5/t:p===i&&c===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){const P=I/t;d.x=-e*Math.cos(s+P*r)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(s+P*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),h.push(P+T,1-S),E.push(l++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const S=u[p][E+1],T=u[p][E],I=u[p+1][E],P=u[p+1][E+1];(p!==0||a>0)&&m.push(S,T,P),(p!==i-1||c<Math.PI)&&m.push(T,I,P)}this.setIndex(m),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class f2 extends mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const ol={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class p2{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const m2=new p2;class Bo{constructor(e){this.manager=e!==void 0?e:m2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";class g2 extends Bo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ol.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ls("img");function c(){u(),ol.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class _2 extends Bo{constructor(e){super(e)}load(e,t,i,s){const r=new Kt,a=new g2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class v2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cl(){return performance.now()}class ll{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class x2 extends En{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);const ul={type:"change"},zo={type:"start"},Tu={type:"end"},xr=new Wr,hl=new ji,M2=Math.cos(70*ws.DEG2RAD),Pt=new R,Zt=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Da=1e-6;class S2 extends x2{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xn.ROTATE,MIDDLE:xn.DOLLY,RIGHT:xn.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Sn,this._lastTargetPosition=new R,this._quat=new Sn().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ll,this._sphericalDelta=new ll,this._scale=1,this._panOffset=new R,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new R,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=E2.bind(this),this._onPointerDown=y2.bind(this),this._onPointerUp=b2.bind(this),this._onContextMenu=C2.bind(this),this._onMouseWheel=P2.bind(this),this._onKeyDown=w2.bind(this),this._onTouchStart=D2.bind(this),this._onTouchMove=R2.bind(this),this._onMouseDown=T2.bind(this),this._onMouseMove=A2.bind(this),this._interceptControlDown=L2.bind(this),this._interceptControlUp=I2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ul),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Zt:i>Math.PI&&(i-=Zt),s<-Math.PI?s+=Zt:s>Math.PI&&(s-=Zt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xr.origin.copy(this.object.position),xr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xr.direction))<M2?this.object.lookAt(this.target):(hl.setFromNormalAndCoplanarPoint(this.object.up,this.target),xr.intersectPlane(hl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Da||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Da||this._lastTargetPosition.distanceToSquared(this.target)>Da?(this.dispatchEvent(ul),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pt.copy(s).sub(this.target);let r=Pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function y2(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function E2(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function b2(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tu),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function T2(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ht.DOLLY;break;case xn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}break;case xn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(zo)}function A2(n){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function P2(n){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(n.preventDefault(),this.dispatchEvent(zo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Tu))}function w2(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function D2(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ht.TOUCH_ROTATE;break;case Vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case Vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ht.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(zo)}function R2(n){switch(this._trackPointer(n),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ht.NONE}}function C2(n){this.enabled!==!1&&n.preventDefault()}function L2(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function I2(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Au={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const U2=new xu(-1,1,1,-1,0,1);class N2 extends _t{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const F2=new N2;class ko{constructor(e){this._mesh=new Ft(F2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class O2 extends ls{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Is.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ko(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class dl extends ls{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class B2 extends ls{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class z2{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ke);this._width=i.width,this._height=i.height,t=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new O2(Au),this.copyPass.material.blending=Fi,this.clock=new v2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}dl!==void 0&&(a instanceof dl?i=!0:a instanceof B2&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class k2 extends ls{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new nt}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const H2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class is extends ls{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new gi(r,a,{type:Oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new gi(r,a,{type:Oi});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new gi(r,a,{type:Oi});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=H2;this.highPassUniforms=Is.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ke(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Au;this.copyUniforms=Is.clone(u.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ei,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new nt,this.oldClearAlpha=1,this.basic=new yn,this.fsQuad=new ko(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ke(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=is.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=is.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}is.BlurDirectionX=new ke(1,0);is.BlurDirectionY=new ke(0,1);const G2={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class V2 extends ls{constructor(){super();const e=G2;this.uniforms=Is.clone(e.uniforms),this.material=new f2({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ko(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ql&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Bi=3,W2=6e3,X2=8e-4,K2=420,fl=500,vn=.0065,ns={bg:329482,gridStrong:4157331,orbit:10467788,planet:13030621},Pu=23.4392811;class Y2{constructor(e,t){Ye(this,"positions");Ye(this,"count");Ye(this,"nodes");this.positions=e,this.count=t,this.nodes=new Int32Array(t);for(let i=0;i<t;i++)this.nodes[i]=i;this.build(0,t,0)}build(e,t,i){if(t-e<=1)return;const s=i%3,r=e+t>>>1;this.quickselect(e,t,r,s),this.build(e+1,r+1,i+1),this.build(r+1,t,i+1);const a=this.nodes[r];for(let o=r;o>e;o--)this.nodes[o]=this.nodes[o-1];this.nodes[e]=a}quickselect(e,t,i,s){for(;t-e>1;){const r=this.coord(this.nodes[e+t>>>1],s);let a=e,o=t-1;for(;a<=o;){for(;this.coord(this.nodes[a],s)<r;)a++;for(;this.coord(this.nodes[o],s)>r;)o--;if(a<=o){const c=this.nodes[a];this.nodes[a]=this.nodes[o],this.nodes[o]=c,a++,o--}}if(i<=o)t=o+1;else if(i>=a)e=a;else return}}coord(e,t){return this.positions[e*3+t]}nearest(e,t=1){const i=e[0],s=e[1],r=e[2],a=new Int32Array(t),o=new Float64Array(t);let c=0;const l=(m,g)=>{if(c<t){let _=c++;for(a[_]=m,o[_]=g;_>0;){const h=_-1>>>1;if(o[h]<o[_]){const p=a[h],E=o[h];a[h]=a[_],o[h]=o[_],a[_]=p,o[_]=E,_=h}else break}}else if(g<o[0]){a[0]=m,o[0]=g;let _=0;for(;;){const h=2*_+1,p=h+1;let E=_;if(h<c&&o[h]>o[E]&&(E=h),p<c&&o[p]>o[E]&&(E=p),E===_)break;const S=a[E],T=o[E];a[E]=a[_],o[E]=o[_],a[_]=S,o[_]=T,_=E}}},u=()=>c<t?1/0:o[0],d=(m,g,_)=>{if(g-m<=0)return;const h=this.nodes[m],p=this.positions[h*3]-i,E=this.positions[h*3+1]-s,S=this.positions[h*3+2]-r;if(l(h,p*p+E*E+S*S),g-m===1)return;const T=_%3,I=m+1+g>>>1,P=this.coord(h,T),F=(T===0?i:T===1?s:r)-P,$=F<=0?[m+1,I+1]:[I+1,g],v=F<=0?[I+1,g]:[m+1,I+1];d($[0],$[1],_+1),F*F<u()&&d(v[0],v[1],_+1)};d(0,this.count,0);const f=[];for(let m=0;m<c;m++)f.push({i:a[m],d:o[m]});return f.sort((m,g)=>m.d-g.d),f.map(m=>m.i)}withinRadius(e,t){const i=t*t,s=[],r=(a,o,c)=>{if(o-a<=0)return;const l=this.nodes[a],u=this.positions[l*3]-e[0],d=this.positions[l*3+1]-e[1],f=this.positions[l*3+2]-e[2];if(u*u+d*d+f*f<=i&&s.push(l),o-a===1)return;const m=c%3,g=a+1+o>>>1,_=this.coord(l,m),p=e[m]-_;p<=t&&r(a+1,g+1,c+1),p>=-t&&r(g+1,o,c+1)};return r(0,this.count,0),s}get size(){return this.count}}const pl=1314083905,ml=2;function Yr(n,e,t){const i=Math.round(n),s=Math.round(e),r=Math.round(t);return{hx:i,hy:s,hz:r,lx:n-i,ly:e-s,lz:t-r}}function q2(n){const e=new DataView(n),t=e.getUint32(0,!0),i=e.getUint32(4,!0);if(t!==pl)throw new Error(`stars-near.bin: bad magic 0x${t.toString(16)} (expected 0x${pl.toString(16)}); re-run export_starmap.py.`);if(i!==ml)throw new Error(`stars-near.bin: unsupported version ${i} (loader supports ${ml}).`);const s=e.getUint32(8,!0),r=e.getFloat32(12,!0),a=e.getFloat32(16,!0),o=e.getFloat32(20,!0),c=e.getFloat32(24,!0),l=e.getFloat32(28,!0),u=32,d=new Int16Array(n,u,s*4),f=new Uint8Array(n,u,s*8),m=new Float32Array(s*3),g=new Float32Array(s*3),_=new Float32Array(s*3),h=new Float32Array(s),p=new Float32Array(s),E=r/32767*Bi,S=o>a?(o-a)/255:0,T=l>c?(l-c)/255:0;for(let I=0;I<s;I++){const P=I*4,A=I*8,F=d[P]*E,$=d[P+1]*E,v=d[P+2]*E;m[I*3]=F,m[I*3+1]=$,m[I*3+2]=v;const y=Yr(F,$,v);g[I*3]=y.hx,g[I*3+1]=y.hy,g[I*3+2]=y.hz,_[I*3]=y.lx,_[I*3+1]=y.ly,_[I*3+2]=y.lz,h[I]=a+f[A+6]*S,p[I]=c+f[A+7]*T}return{positions:m,positionsHi:g,positionsLo:_,mag:h,ci:p,count:s}}const Ho=`
	// Three.js's ShaderMaterial auto-declares attribute vec3 position
	// (and the renderer also uses geometry.attributes.position.count for
	// the draw count). We piggy-back the hi half of the RTE split onto
	// that standard slot; the lo half is a custom attribute alongside.
	attribute vec3 aPosLo;
	uniform vec3 uCamHi;
	uniform vec3 uCamLo;
	vec3 rtePosition() {
		// (position - uCamHi) cancels exactly in f32 when star and camera
		// share a tile, and is a precise integer difference otherwise; the
		// small (aPosLo - uCamLo) term carries the sub-wu offset at ~6e-8
		// precision. Sum is camera-relative position in world axes.
		return (position - uCamHi) + (aPosLo - uCamLo);
	}
	vec4 rteMvPosition() {
		// viewMatrix's rotation only — translation = -camPos is now baked
		// into the rtePosition() output, so applying the full viewMatrix
		// would double-subtract the camera.
		return vec4(mat3(viewMatrix) * rtePosition(), 1.0);
	}
`,$2=`
	attribute float aMag;
	attribute float aCI;
	uniform float uPixelRatio;
	uniform float uBaseSize;
	uniform float uRefMag;
	uniform float uAttenuate;   // 1.0 = perspective near field, 0.0 = far shell
	uniform float uCamDist;     // camera-to-target distance in world units
	varying float vAlpha;
	varying vec3 vColor;

	vec3 ciColor(float ci) {
		// vivid endpoints so spectral class reads at a glance
		vec3 cBlue  = vec3(0.40, 0.58, 1.00);
		vec3 cWhite = vec3(1.00, 0.96, 0.90);
		vec3 cWarm  = vec3(1.00, 0.52, 0.20);
		float t = clamp((ci + 0.4) / 2.4, 0.0, 1.0);
		return t < 0.5 ? mix(cBlue, cWhite, t * 2.0)
		               : mix(cWhite, cWarm, (t - 0.5) * 2.0);
	}

	void main() {
		vec4 mvPosition = rteMvPosition();
		gl_Position = projectionMatrix * mvPosition;

		float flux = pow(10.0, -0.4 * (aMag - uRefMag));
		flux = clamp(flux, 0.0, 14.0);
		float s = uBaseSize * (0.45 + 1.7 * sqrt(flux));

		if (uAttenuate > 0.5) {
			gl_PointSize = s * uPixelRatio * (780.0 / max(-mvPosition.z, 0.05));
		} else {
			gl_PointSize = s * uPixelRatio * 0.85;
		}
		gl_PointSize = clamp(gl_PointSize, 0.0, 70.0);

		vAlpha = clamp(0.05 + 0.62 * sqrt(flux), 0.0, 1.0);

		// LOD: at far zoom, fade dimmer stars so the dense cloud thins out
		// and the brightest neighbours stay legible. Hits hardest for
		// G > ~10 at the full galactic pullback.
		float dimFade = smoothstep(8.0, 13.0, aMag) * smoothstep(50.0, 180.0, uCamDist);
		vAlpha *= 1.0 - 0.7 * dimFade;
		gl_PointSize *= 1.0 - 0.5 * dimFade;

		// strongly boost chrominance about luminance so the hue is unmistakable
		vec3 sc = ciColor(aCI);
		float lum = dot(sc, vec3(0.2126, 0.7152, 0.0722));
		vColor = clamp(lum + (sc - lum) * 2.6, 0.0, 1.0);
	}
`,j2=`
	precision mediump float;
	varying float vAlpha;
	varying vec3 vColor;
	uniform float uIntensity;

	void main() {
		vec2 uv = gl_PointCoord - 0.5;
		float d = length(uv);
		if (d > 0.5) discard;
		float core = smoothstep(0.5, 0.0, d);
		float glow = pow(core, 13.4);
		float a = vAlpha * glow * uIntensity;
		gl_FragColor = vec4(vColor * (glow + 0.18 * core), a);
	}
`;function qr(n,e){const t=n.uniforms.uCamHi.value,i=n.uniforms.uCamLo.value,s=Math.round(e.x),r=Math.round(e.y),a=Math.round(e.z);t.set(s,r,a),i.set(e.x-s,e.y-r,e.z-a)}function wu(n,e,t){const i=new _t;i.setAttribute("position",new Qe(n.positionsHi,3)),i.setAttribute("aPosLo",new Qe(n.positionsLo,3)),i.setAttribute("aMag",new Qe(n.mag,1)),i.setAttribute("aCI",new Qe(n.ci,1));const s=new mt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uBaseSize:{value:t},uRefMag:{value:6},uAttenuate:{value:e?1:0},uIntensity:{value:e?.95:.6},uCamDist:{value:0},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:Ho+$2,fragmentShader:j2,transparent:!0,depthWrite:!1,blending:Ei}),r=new Os(i,s);return r.frustumCulled=!1,r}function Z2(n,e,t,i=1.5,s=!1){const r=n.length,a=new Float32Array(r*3),o=new Float32Array(r*3),c=new Float32Array(r*3);for(let f=0;f<r;f++){const m=n[f][0]*Bi,g=n[f][1]*Bi,_=n[f][2]*Bi;a[f*3]=m,a[f*3+1]=g,a[f*3+2]=_;const h=Yr(m,g,_);o[f*3]=h.hx,o[f*3+1]=h.hy,o[f*3+2]=h.hz,c[f*3]=h.lx,c[f*3+1]=h.ly,c[f*3+2]=h.lz}const l={positionsHi:o,positionsLo:c,mag:Float32Array.from(e),ci:Float32Array.from(t)},u=wu(l,s,i),d=u.material;return d.uniforms.uIntensity.value=.95,{object:u,material:d,setCamPos(f){qr(d,f)}}}const Du=`
	uniform float uPixelRatio;
	uniform float uSize;
	void main() {
		gl_Position = projectionMatrix * rteMvPosition();
		gl_PointSize = uSize * uPixelRatio;
	}
`,J2=`
	precision mediump float;
	void main() {
		vec2 uv = gl_PointCoord - 0.5;
		float d = length(uv);
		if (d > 0.5) discard;
		// Just a soft dot — the "catalogued" ring is now drawn in the SVG
		// overlay only for systems that actually have a label attached, so
		// the marker doesn't double-circle labelled anchors.
		float core = smoothstep(0.5, 0.0, d);
		gl_FragColor = vec4(1.0, 1.0, 1.0, pow(core, 1.7) * 0.9);
	}
`;function Q2(n){const e=n.length,t=new Float32Array(e*3),i=new Float32Array(e*3);for(let o=0;o<e;o++){const c=n[o],l=Yr(c.x,c.y,c.z);t[o*3]=l.hx,t[o*3+1]=l.hy,t[o*3+2]=l.hz,i[o*3]=l.lx,i[o*3+1]=l.ly,i[o*3+2]=l.lz}const s=new _t;s.setAttribute("position",new Qe(t,3)),s.setAttribute("aPosLo",new Qe(i,3));const r=new mt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:7.5},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:Ho+Du,fragmentShader:J2,transparent:!0,depthWrite:!1,blending:Ei}),a=new Os(s,r);return a.frustumCulled=!1,{object:a,setCamPos(o){qr(r,o)}}}const e3=`
	precision mediump float;
	void main() {
		vec2 uv = gl_PointCoord - 0.5;
		float d = length(uv) * 2.0;
		if (d > 1.0) discard;
		// Annular ring centred at d=0.78 with ~0.18-wide stroke, AA'd at both edges.
		float inner = smoothstep(0.58, 0.66, d);
		float outer = 1.0 - smoothstep(0.92, 1.0, d);
		float ring = inner * outer;
		if (ring < 0.01) discard;
		gl_FragColor = vec4(0.22, 0.95, 0.50, ring * 0.95);
	}
`;function t3(n){const e=n.length,t=new _t,i=new Qe(new Float32Array(e*3),3),s=new Qe(new Float32Array(e*3),3);t.setAttribute("position",i),t.setAttribute("aPosLo",s);const r=i.array,a=s.array;let o=null;function c(){let d=0;for(const f of n){if(f.id===o)continue;const m=Yr(f.pos.x,f.pos.y,f.pos.z);r[d*3]=m.hx,r[d*3+1]=m.hy,r[d*3+2]=m.hz,a[d*3]=m.lx,a[d*3+1]=m.ly,a[d*3+2]=m.lz,d++}i.needsUpdate=!0,s.needsUpdate=!0,t.setDrawRange(0,d)}c();const l=new mt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:22},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:Ho+Du,fragmentShader:e3,transparent:!0,depthWrite:!1}),u=new Os(t,l);return u.frustumCulled=!1,u.visible=!1,u.renderOrder=3,{object:u,setVisible(d){u.visible=d},setSelectedSystemId(d){d!==o&&(o=d,c())},setCamPos(d){qr(l,d)}}}async function i3(n){const e=await fetch(`${n}/data/stars-near.bin`).then(a=>a.arrayBuffer()),t=q2(e),i=wu(t,!0,.85),s=new Y2(t.positions,t.count),r=i.material;return{near:i,nearCount:t.count,kdtree:s,setCamDist(a){r.uniforms.uCamDist.value=a},setCamPos(a){qr(r,a)}}}const n3=`
	uniform float uPlaneScale;
	varying vec3 vLocal;
	void main() {
		// Pass the plane's LOCAL position (not world). Two precision battles
		// share this single line:
		//
		// 1. When the look-point is far from origin (e.g. Pleiades, ~470 wu
		//    from Sol), passing world coords blows up the LOD math below —
		//    fract() and fwidth() collapse to noise. Local coords keep the
		//    operand bounded around the visible patch.
		// 2. When the look-point is at Sol but the camera is *inside* the
		//    solar-system inset (camDist ≪ 1 wu), the visible patch is
		//    microscopic next to the 720-wu plane. Varying interpolators
		//    on many GPUs quantize across the full vertex range, so
		//    adjacent screen pixels can quantize to the *same* vLocal —
		//    fwidth collapses and the grid wobbles. Scaling the plane in
		//    lockstep with the visible radius (via uPlaneScale on the CPU
		//    side) keeps the visible-to-plane ratio bounded so quantization
		//    leaves plenty of per-pixel steps. Capped at scale 1 so the
		//    Pleiades fix's geometry footprint never grows.
		vec3 scaled = position * uPlaneScale;
		vLocal = scaled;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(scaled, 1.0);
	}
`,s3=`
	precision highp float;
	varying vec3 vLocal;
	uniform float uRadius;
	uniform vec3 uCamLocal;  // camera position in plane-local coords (uCamPos - groupPos)
	uniform vec2 uLookXY;    // look-point (controls.target.xy) in plane-local
	uniform vec3 uColor;

	const float SUBDIV = 5.0;
	const float BASE = 3.0;    // 1 parsec, in world units
	const float TARGET = 30.0; // desired screen px per finest cell

	// solid line intensity for a grid of the given spacing
	float gridAt(float s) {
		vec2 c = vLocal.xy / s;
		vec2 d = max(fwidth(c), 1e-7);
		vec2 g = abs(fract(c - 0.5) - 0.5) / d;
		float lineX = 1.0 - min(g.x, 1.0); // constant-x lines
		float lineY = 1.0 - min(g.y, 1.0); // constant-y lines
		return max(lineX, lineY);
	}

	void main() {
		// world units per screen pixel -> adaptive level of detail
		float pix = max(fwidth(vLocal.x), fwidth(vLocal.y));
		float level = log(pix * TARGET / BASE) / log(SUBDIV);
		float k = floor(level);
		float f = fract(level);

		// three nested grids, cross-faded so nothing pops in or out as the
		// LOD shifts — this is what kills the moiré at oblique angles
		float sFine = BASE * pow(SUBDIV, k);
		float sMid = sFine * SUBDIV;
		float sCoarse = sMid * SUBDIV;

		float gF = gridAt(sFine);
		float gM = gridAt(sMid);
		float gC = gridAt(sCoarse);

		// fine fades out (1-f), mid is always full, coarse fades in (f);
		// every grid line is continuous in intensity across LOD steps
		float line = max(gF * (1.0 - f), max(gM, gC * f));

		// spherical falloff around the camera's look-point. The plane snaps
		// to a coarse cell so the look-point is at vLocal.xy = uLookXY
		// (the offset of the target from the snapped group origin), not
		// necessarily the local origin.
		float r = length(vLocal.xy - uLookXY);
		float fade = 1.0 - smoothstep(uRadius * 0.45, uRadius, r);

		// fade where the plane is edge-on (kills horizon streaks)
		vec3 viewDir = normalize(vLocal - uCamLocal);
		fade *= smoothstep(0.04, 0.22, abs(viewDir.z));

		// 0.6 attenuation = grid reads as a quiet reference layer behind
		// the [[Interstellar travel time]] trajectory rather than competing
		// with it. Drop-stems (stems.ts) keep their original intensity.
		float a = line * fade * 0.6;
		if (a < 0.004) discard;
		gl_FragColor = vec4(uColor, min(a, 1.0));
	}
`,Br=3,Ds=5,r3=2,a3=30;function o3(n,e,t){const i=Math.max(e,1),s=Math.tan(t*Math.PI/360),r=n*s*2/i,a=Math.log(r*a3/Br)/Math.log(Ds),o=Math.floor(a),c=a-o,l=Br*Math.pow(Ds,o);return{major:l*Ds,minor:l,f:c}}function c3(){const n=new mi,e=new mt({uniforms:{uRadius:{value:10},uCamLocal:{value:new R},uLookXY:{value:new ke},uColor:{value:new nt(15002350)},uPlaneScale:{value:1}},vertexShader:n3,fragmentShader:s3,transparent:!0,depthWrite:!1,side:di}),t=new Ft(new Fs(720,720,1,1),e);t.renderOrder=-1,t.frustumCulled=!1,n.add(t);const i=e.uniforms.uCamLocal.value,s=e.uniforms.uLookXY.value;return{group:n,update(r,a,o){const c=o*.4;e.uniforms.uRadius.value=c;const l=Math.max(1e-12,o*.001),u=Math.log(l*30/Br)/Math.log(Ds),d=Math.floor(u)+r3,f=Br*Math.pow(Ds,d),m=Math.floor(r.x/f)*f,g=Math.floor(r.y/f)*f;n.position.set(m,g,r.z);const _=(f+c)*1.2;e.uniforms.uPlaneScale.value=Math.min(1,Math.max(o/225,_/360)),s.set(r.x-m,r.y-g),i.copy(a).sub(n.position)}}}const l3=`
	// Three.js auto-declares attribute vec3 position and reads vertex
	// count from geometry.attributes.position — so we route the hi half of
	// the RTE split through that standard slot. The lo half + the star
	// hi/lo (for the visibility-fade screen check) sit alongside as custom
	// attributes.
	attribute vec3 aPosLo;
	attribute vec3 aStarHi;
	attribute vec3 aStarLo;
	attribute float aFoot;   // 1 = the stem's foot, 0 = the star end
	uniform vec3 uCamHi;
	uniform vec3 uCamLo;
	uniform float uGridZ;    // world z of the main reference grid
	varying vec3 vWorld;
	varying float vInView;

	vec3 rteFrom(vec3 hi, vec3 lo) {
		return (hi - uCamHi) + (lo - uCamLo);
	}

	void main() {
		// Camera-relative position with hi/lo cancellation. For the stem foot
		// we also override z so it sits on the live grid plane (uGridZ).
		vec3 relPos = rteFrom(position, aPosLo);
		float footZ = uGridZ - (uCamHi.z + uCamLo.z); // grid-z, RTE-relative
		relPos.z = mix(relPos.z, footZ, aFoot);
		// Reconstruct an approximate world position for the spherical falloff
		// in the FRAG shader. Precision here doesn't matter — uCenter has the
		// same f32 ceiling and the fade is a smoothstep over ~1 wu.
		vWorld = relPos + uCamHi + uCamLo;
		gl_Position = projectionMatrix * vec4(mat3(viewMatrix) * relPos, 1.0);

		// project the star (top of the stem) and fade as it leaves the view
		vec3 relStar = rteFrom(aStarHi, aStarLo);
		vec4 sc = projectionMatrix * vec4(mat3(viewMatrix) * relStar, 1.0);
		vec3 ndc = sc.xyz / sc.w;
		float inFront = step(0.0001, sc.w);
		float ex = 1.0 - smoothstep(0.86, 1.14, abs(ndc.x));
		float ey = 1.0 - smoothstep(0.86, 1.14, abs(ndc.y));
		vInView = inFront * ex * ey;
	}
`,u3=`
	precision mediump float;
	varying vec3 vWorld;
	varying float vInView;
	uniform vec3 uCenter;
	uniform float uRadius;
	uniform float uOpacity;
	void main() {
		float r = length(vWorld - uCenter);
		float fade = 1.0 - smoothstep(uRadius * 0.45, uRadius, r);
		float a = fade * vInView * uOpacity;
		if (a < 0.004) discard;
		gl_FragColor = vec4(1.0, 1.0, 1.0, a);
	}
`;function gl(n,e,t){const i=Math.round(n),s=Math.round(e),r=Math.round(t);return{hx:i,hy:s,hz:r,lx:n-i,ly:e-s,lz:t-r}}function h3(n){const e=n.length,t=new Float32Array(e*2*3),i=new Float32Array(e*2*3),s=new Float32Array(e*2*3),r=new Float32Array(e*2*3),a=new Float32Array(e*2);for(let u=0;u<e;u++){const d=n[u],f=gl(d.x,d.y,d.z),m=gl(d.x,d.y,0);t[u*6+0]=f.hx,t[u*6+1]=f.hy,t[u*6+2]=f.hz,i[u*6+0]=f.lx,i[u*6+1]=f.ly,i[u*6+2]=f.lz,a[u*2]=0,t[u*6+3]=m.hx,t[u*6+4]=m.hy,t[u*6+5]=m.hz,i[u*6+3]=m.lx,i[u*6+4]=m.ly,i[u*6+5]=m.lz,a[u*2+1]=1,s[u*6+0]=f.hx,s[u*6+1]=f.hy,s[u*6+2]=f.hz,r[u*6+0]=f.lx,r[u*6+1]=f.ly,r[u*6+2]=f.lz,s[u*6+3]=f.hx,s[u*6+4]=f.hy,s[u*6+5]=f.hz,r[u*6+3]=f.lx,r[u*6+4]=f.ly,r[u*6+5]=f.lz}const o=new _t;o.setAttribute("position",new Qe(t,3)),o.setAttribute("aPosLo",new Qe(i,3)),o.setAttribute("aStarHi",new Qe(s,3)),o.setAttribute("aStarLo",new Qe(r,3)),o.setAttribute("aFoot",new Qe(a,1));const c=new mt({uniforms:{uCenter:{value:new R},uRadius:{value:10},uGridZ:{value:0},uOpacity:{value:.42},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:l3,fragmentShader:u3,transparent:!0,depthWrite:!1}),l=new Us(o,c);return l.frustumCulled=!1,{object:l,update(u,d){c.uniforms.uCenter.value.copy(u),c.uniforms.uRadius.value=d,c.uniforms.uGridZ.value=u.z},setCamPos(u){const d=c.uniforms.uCamHi.value,f=c.uniforms.uCamLo.value,m=Math.round(u.x),g=Math.round(u.y),_=Math.round(u.z);d.set(m,g,_),f.set(u.x-m,u.y-g,u.z-_)}}}const Ru=Pu*Math.PI/180,_l=Math.cos(Ru),vl=Math.sin(Ru);function d3(n,e,t){const i=n*Math.PI/180,s=e*Math.PI/180,r=Math.cos(s)*Math.cos(i),a=Math.cos(s)*Math.sin(i),o=Math.sin(s),c=r,l=a*_l+o*vl,u=-a*vl+o*_l,d=t*Bi;return new R(c*d,l*d,u*d)}const ai=Math.PI/180,f3=114e-10,p3=.05,xl=.3,Ml=.6,Sl=.02;function m3(n){const e=d3(n.ra,n.dec,n.dist),t=[];let i=0,s=null;if(g3(n.children)){s=new mi,s.position.copy(e);let r=0;for(const o of n.children)o.kind==="planet"&&o.angle===void 0&&(o.angle=r*137.508*ai%(Math.PI*2),r++);const a=x3(n.children);for(const o of n.children){const c=_3(o,a);if(c&&s.add(c),o.kind==="planet"&&o.id){const l=S3(o);t.push({id:`${n.id}/${o.id}`,name:o.name??o.id,local:l}),i=Math.max(i,l.length())}if(o.kind==="planet"||o.kind==="orbit"){const l=o.kind==="planet"?o.orbitRadius:o.radius;i=Math.max(i,l)}if(o.kind==="star"&&o.offset){const l=o.offset;i=Math.max(i,Math.hypot(l[0],l[1],l[2]))}o.kind==="belt"&&(i=Math.max(i,o.outerR))}}return{def:n,center:e,bbox:b3(n.children),visualHalf:i,group:s,planets:t}}function g3(n){return!(n.length===0||n.length===1&&n[0].kind==="star")}function _3(n,e){switch(n.kind){case"star":return v3(n,e);case"planet":return M3(n);case"belt":return E3(n);case"orbit":return y3(n)}}function v3(n,e){const t=new mi,i=e>0?Math.max(Sl,Math.min(1,e*xl/n.size)):1,s=e>0?Math.min(1,e*Ml/n.size):1,r=n.halo&&e>0?Math.max(Sl,Math.min(1,e*xl/n.halo.size)):1,a=n.halo&&e>0?Math.min(1,e*Ml/n.halo.size):1,o=new Ft(new ts(n.size,24,24),new yn({color:n.color}));if(o.userData.bodyKind="star-sphere",o.userData.baseSize=n.size,o.userData.shrinkTarget=i,o.userData.upperBound=s,t.add(o),n.halo){const c=new Ft(new ts(n.halo.size,24,24),new yn({color:n.halo.color,transparent:!0,opacity:n.halo.opacity,blending:Ei,depthWrite:!1}));c.userData.bodyKind="star-halo",c.userData.baseSize=n.halo.size,c.userData.shrinkTarget=r,c.userData.upperBound=a,t.add(c)}return n.offset&&t.position.set(n.offset[0],n.offset[1],n.offset[2]),t}function x3(n){let e=1/0;for(const t of n)if(t.kind==="planet")e=Math.min(e,t.orbitRadius);else if(t.kind==="orbit")e=Math.min(e,t.radius);else if(t.kind==="belt")e=Math.min(e,t.innerR);else if(t.kind==="star"&&t.offset){const i=Math.hypot(t.offset[0],t.offset[1],t.offset[2]);i>0&&(e=Math.min(e,i))}return isFinite(e)?e:0}function M3(n){const e=new mi;e.add(Cu(n.orbitRadius));const i=(n.angle??Math.random()*Math.PI*2)+n.node*ai,s=Math.min(n.size,n.orbitRadius*.1),r=new Ft(new ts(s,16,16),new yn({color:n.color}));if(r.userData.bodyKind="planet-marker",r.userData.baseSize=s,n.realRadiusKm!=null){const a=n.realRadiusKm*f3;r.userData.realScaleTarget=Math.max(p3,Math.min(1,a/s))}r.position.set(Math.cos(i)*n.orbitRadius,Math.sin(i)*n.orbitRadius,0);{const a=s*2.5,o=s*1,c=new _t;c.setAttribute("position",new Qe([0,0,-a,0,0,-o,0,0,o,0,0,a],3));const l=new Us(c,new Kr({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}));l.rotation.x=(n.obliquityDeg??0)*ai,l.userData.bodyKind="planet-axis",r.add(l)}if(n.rings){const a=new Ft(new Oo(n.rings.innerR,n.rings.outerR,64,1),new yn({color:n.rings.color,side:di,transparent:!0,opacity:n.rings.opacity,depthWrite:!1}));a.rotation.x=(n.obliquityDeg??0)*ai,a.userData.bodyKind="planet-rings",r.add(a)}return e.add(r),Lu(e,n.inc,n.node),e}function S3(n){const e=(n.angle??0)+n.node*ai,t=new R(Math.cos(e)*n.orbitRadius,Math.sin(e)*n.orbitRadius,0);if(n.inc!==0){const i=new R(Math.cos(n.node*ai),Math.sin(n.node*ai),0);t.applyAxisAngle(i,n.inc*ai)}return t}function y3(n){const e=new mi;return e.add(Cu(n.radius)),Lu(e,n.inc,n.node),e}function Cu(n){const t=[];for(let r=0;r<256;r++){const a=r/256*Math.PI*2;t.push(Math.cos(a)*n,Math.sin(a)*n,0)}const i=new _t;i.setAttribute("position",new Qe(t,3));const s=new u2(i,new Kr({color:ns.orbit,transparent:!0,opacity:.85,blending:Ei,depthWrite:!1}));return s.renderOrder=1,s}function Lu(n,e,t){e!==0&&n.rotateOnAxis(new R(Math.cos(t*ai),Math.sin(t*ai),0),e*ai)}function E3(n){const e=new Float32Array(n.count*3),t=n.outerR-n.innerR;for(let r=0;r<n.count;r++){const a=n.innerR+Math.random()*t,o=Math.random()*Math.PI*2,c=(Math.random()-.5)*2*n.thickness;e[r*3]=Math.cos(o)*a,e[r*3+1]=Math.sin(o)*a,e[r*3+2]=c}const i=new _t;i.setAttribute("position",new Qe(e,3));const s=new mt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
			uniform float uPixelRatio;
			void main() {
				vec4 mv = modelViewMatrix * vec4(position, 1.0);
				gl_Position = projectionMatrix * mv;
				gl_PointSize = clamp(
					0.9 * uPixelRatio / max(-mv.z, 0.02), 1.0, 7.0);
			}
		`,fragmentShader:`
			precision mediump float;
			void main() {
				float d = length(gl_PointCoord - 0.5);
				if (d > 0.5) discard;
				gl_FragColor = vec4(0.78, 0.84, 0.88,
					smoothstep(0.5, 0.0, d) * 0.7);
			}
		`,transparent:!0,depthWrite:!1});return new Os(i,s)}function b3(n){const e=new rs;e.expandByPoint(new R(0,0,0));for(const s of n)switch(s.kind){case"star":{const r=s.offset??[0,0,0],a=s.halo?Math.max(s.size,s.halo.size):s.size;e.expandByPoint(new R(r[0]-a,r[1]-a,r[2]-a)),e.expandByPoint(new R(r[0]+a,r[1]+a,r[2]+a));break}case"planet":case"orbit":{const r=s.kind==="planet"?s.orbitRadius:s.radius,a=r*Math.abs(Math.sin(s.inc*ai));e.expandByPoint(new R(-r,-r,-a)),e.expandByPoint(new R(+r,+r,+a));break}case"belt":{e.expandByPoint(new R(-s.outerR,-s.outerR,-s.thickness)),e.expandByPoint(new R(+s.outerR,+s.outerR,+s.thickness));break}}const t=new R;e.getSize(t);const i=Math.max(t.x,t.y,t.z)*.5;return e.expandByScalar(Math.max(.06,.18*i)),e}function T3(){const n=new Us(new d2(new os(1,1,1)),new Kr({color:ns.gridStrong,transparent:!0,opacity:.9}));n.renderOrder=2,n.frustumCulled=!1;const e=new R,t=new R(1,1,1),i=new R,s=new R(1,1,1);let r=!1;const a=new R,o=new R;return{object:n,setTo(c,l){l.getCenter(a),l.getSize(o),i.copy(c).add(a),s.copy(o),r||(e.copy(i),t.copy(s),n.position.copy(e),n.scale.copy(t),r=!0)},setVisible(c){n.visible=c},tick(){e.lerp(i,.18),t.lerp(s,.18),n.position.copy(e),n.scale.copy(t)}}}const yl=[{name:"Chained Maiden",iau:"And",segments:[25.9747,6.6249,12.8897,26.7885,10.7218,13.0592,26.7885,10.7218,13.0592,46.9464,27.549,26.482,76.3681,74.3307,56.2028,46.9464,27.549,26.482,46.9464,27.549,26.482,28.4124,15.8631,18.5299,28.4124,15.8631,18.5299,127.198,70.9409,93.0072]},{name:"Air Pump",iau:"Ant",segments:[-88.3833,11.7289,-68.2345,-23.281,4.7126,-23.3068]},{name:"Bird of Paradise",iau:"Aps",segments:[-21.5704,-77.4122,-129.7857,-3.3331,-26.0318,-38.9192,-3.3331,-26.0318,-38.9192,-3.3976,-27.4711,-38.8773]},{name:"Eagle",iau:"Aql",segments:[6.5172,-10.2601,6.1024,2.3556,-3.8027,2.5106,2.3556,-3.8027,2.5106,78.6348,-131.1868,92.7883,2.3556,-3.8027,2.5106,5.6501,-12.9095,6.5164,5.6501,-12.9095,6.5164,128.3452,-218.4644,99.9262,37.9878,-54.4269,22.5018,128.3452,-218.4644,99.9262,5.6501,-12.9095,6.5164,7.1495,-19.8628,15.4423,7.1495,-19.8628,15.4423,13.6609,-41.3987,33.5326,5.6501,-12.9095,6.5164,11.0769,-35.4934,11.7702]},{name:"Water Bearer",iau:"Aqr",segments:[132.8872,-98.7085,25.0794,177.6209,-89.1303,37.4123,177.6209,-89.1303,37.4123,35.1602,-15.1322,5.54,35.1602,-15.1322,5.54,25.9695,-10.0158,4.3317,25.9695,-10.0158,4.3317,50.7633,-18.0729,7.7139,50.7633,-18.0729,7.7139,106.1686,-35.3667,-.7551,106.1686,-35.3667,-.7551,43.871,-10.6876,-3.1587,43.871,-10.6876,-3.1587,46.6795,-13.8654,-12.8536,177.6209,-89.1303,37.4123,52.2016,-26.2964,2.7635,52.2016,-26.2964,2.7635,55.123,-33.4891,-2.3436,52.2016,-26.2964,2.7635,57.4381,-26.3118,-1.3543,57.4381,-26.3118,-1.3543,92.4901,-36.2544,-9.8535,92.4901,-36.2544,-9.8535,39.8905,-15.4137,-6.1559,39.8905,-15.4137,-6.1559,71.8099,-26.1115,-19.7471,49.3137,-55.3034,10.5198,132.8872,-98.7085,25.0794]},{name:"Altar",iau:"Ara",segments:[6.298,-303.1895,-152.2499,-6.4738,-73.0302,-36.6511,-6.4738,-73.0302,-36.6511,-25.6417,-142.8531,-94.5829,-25.6417,-142.8531,-94.5829,-14.5007,-73.9396,-55.3009,-14.5007,-73.9396,-55.3009,-4.2562,-54.7725,-41.9361,-4.2562,-54.7725,-41.9361,-28.4271,-284.4624,-186.4313,-28.4271,-284.4624,-186.4313,-18.7203,-184.4846,-117.0666,-18.7203,-184.4846,-117.0666,6.298,-303.1895,-152.2499]},{name:"Ram",iau:"Ari",segments:[33.2876,37.2348,9.2114,15.7321,12.1427,3.4917,15.7321,12.1427,3.4917,14.7527,9.9396,2.6545,14.7527,9.9396,2.6545,41.7697,27.3173,6.2717]},{name:"Charioteer",iau:"Aur",segments:[.0492,49.3018,12.0853,.0362,23.1376,9.118,.0362,23.1376,9.118,1.7126,11.9703,5.0991,1.7126,11.9703,5.0991,131.4405,653.8382,219.3016,131.4405,653.8382,219.3016,31.3476,131.9866,25.0313,5.2816,40.527,3.8526,31.3476,131.9866,25.0313,5.2816,40.527,3.8526,.0492,49.3018,12.0853]},{name:"Herdsman",iau:"Boo",segments:[-39.9256,-25.9652,25.1939,-8.8234,-3.9716,5.7535,-8.8234,-3.9716,5.7535,-48.4197,-25.8606,47.0903,-48.4197,-25.8606,47.0903,-20.2999,-13.2624,27.8606,-20.2999,-13.2624,27.8606,-38.4761,-17.3327,58.4063,-38.4761,-17.3327,58.4063,-16.3054,-5.1922,20.0723,-16.3054,-5.1922,20.0723,-34.2615,-14.3923,33.9949,-34.2615,-14.3923,33.9949,-8.8234,-3.9716,5.7535,-8.8234,-3.9716,5.7535,-9.4877,-3.3293,5.3636,-9.4877,-3.3293,5.3636,-63.6617,-22.1686,31.7177]},{name:"Great Dog",iau:"CMa",segments:[-18.9847,65.4126,-47.1978,-34.8809,97.9145,-81.1902,-34.8809,97.9145,-81.1902,-245.2542,776.7879,-674.9295,-245.2542,776.7879,-674.9295,-.4943,1.9707,-1.6811,-.4943,1.9707,-1.6811,-285.0116,742.3727,-827.2156,-285.0116,742.3727,-827.2156,-129.7334,299.8533,-368.6769,-129.7334,299.8533,-368.6769,-80.3942,167.564,-210.5207,-80.3942,167.564,-210.5207,-190.762,336.6705,-471.2381,-27.4979,72.5304,-97.0294,-93.704,237.2004,-306.3871,-93.704,237.2004,-306.3871,-129.7334,299.8533,-368.6769,-93.704,237.2004,-306.3871,-165.8789,505.6813,-566.2108,-165.8789,505.6813,-566.2108,-3.0802,14.8191,-13.7832,-3.0802,14.8191,-13.7832,-17.4617,84.6014,-89.61,-.4943,1.9707,-1.6811,-14.2097,112.672,-99.6064,-3.0802,14.8191,-13.7832,-.4943,1.9707,-1.6811,-8.5121,65.741,-89.1703,-27.4979,72.5304,-97.0294,-245.2542,776.7879,-674.9295,-18.9847,65.4126,-47.1978]},{name:"Lesser Dog",iau:"CMi",segments:[-1.4693,3.0414,-.9698,-18.2097,44.6401,-11.5631]},{name:"Hunting Dogs",iau:"CVn",segments:[-6.2908,1.3709,5.5075,-23.2636,2.2127,19.6929]},{name:"Engraving Tool",iau:"Cae",segments:[56.1269,66.8497,-190.0001,5.1567,7.6879,-18.1589,5.1567,7.6879,-18.1589,7.6828,12.9813,-24.6444]},{name:"Giraffe",iau:"Cam",segments:[291.1956,672.3074,604.6408,27.28,84.1613,78.3586,27.28,84.1613,78.3586,170.822,1076.0472,1030.991,291.1956,672.3074,604.6408,20.3155,73.9849,90.2028,20.3155,73.9849,90.2028,170.822,1076.0472,1030.991,20.3155,73.9849,90.2028,.6317,11.6383,17.2104]},{name:"Sea Goat",iau:"Cap",segments:[18.4888,-27.5573,4.0335,66.4654,-98.3635,9.5278,66.4654,-98.3635,9.5278,31.6212,-32.9238,-.4668,31.6212,-32.9238,-.4668,45.6168,-41.5341,-1.472,45.6168,-41.5341,-1.472,41.0902,-32.3455,-2.3356,41.0902,-32.3455,-2.3356,9.5345,-7.0442,-.5387,45.6168,-41.5341,-1.472,98.3802,-91.9438,-16.5121,98.3802,-91.9438,-16.5121,31.6212,-32.9238,-.4668,66.4654,-98.3635,9.5278,8.7725,-11.5746,-1.7906,31.6212,-32.9238,-.4668,103.0256,-132.0592,-26.4166]},{name:"Keel",iau:"Car",segments:[-8.9807,-5.605,-33.0438,-36.7994,-28.1756,-111.2454,-36.7994,-28.1756,-111.2454,-56.9809,-31.8317,-123.4754,-56.9809,-31.8317,-123.4754,-210.9756,-90.3264,-392.163,-210.9756,-90.3264,-392.163,-753.7473,-353.5249,-1247.752,-753.7473,-353.5249,-1247.752,-14.7843,-6.1049,-25.1799,-14.7843,-6.1049,-25.1799,-226.2193,-72.8357,-409.7547,-226.2193,-72.8357,-409.7547,-100.3964,-36.6914,-206.2573,-100.3964,-36.6914,-206.2573,-90.8878,-8.4734,-216.2668,-180.1868,5.2702,-524.7472,-54.8371,6.6077,-177.1162,-54.8371,6.6077,-177.1162,-5.9927,22.4267,-91.9002,-48.0063,-2.8648,-116.2623,-90.8878,-8.4734,-216.2668,-48.0063,-2.8648,-116.2623,-180.1868,5.2702,-524.7472,-5.9927,22.4267,-91.9002,-13.558,43.9401,-103.6433,-54.8371,6.6077,-177.1162,-130.675,115.4053,-282.8069]},{name:"Seated Queen",iau:"Cas",segments:[55.6026,78.7157,105.3508,14.0824,15.6017,22.073,14.0824,15.6017,22.073,79.8367,76.9122,126.698,79.8367,76.9122,126.698,38.5213,29.8626,51.5819,38.5213,29.8626,51.5819,8.5999,6.0479,13.0833]},{name:"Centaur",iau:"Cen",segments:[-.5038,-.8545,-.912,-50.954,-69.6001,-83.7001,-50.954,-69.6001,-83.7001,-70.7265,-72.1096,-83.5171,-70.7265,-72.1096,-83.5171,-69.5458,-69.426,-63.678,-69.5458,-69.426,-63.678,-80.7998,-78.9698,-66.4252,-80.7998,-78.9698,-66.4252,-89.3716,-79.17,-66.1252,-89.3716,-79.17,-66.1252,-82.403,-72.0222,-58.8494,-82.403,-72.0222,-58.8494,-197.912,-146.3289,-128.7601,-197.912,-146.3289,-128.7601,-13.4253,-8.7615,-7.8246,-82.403,-72.0222,-58.8494,-12.3588,-11.249,-6.7791,-89.3716,-79.17,-66.1252,-54.0862,-65.0289,-40.367,-54.0862,-65.0289,-40.367,-61.8728,-87.6931,-47.8539,-69.5458,-69.426,-63.678,-25.7719,-16.3031,-25.7365,-25.7719,-16.3031,-25.7365,-80.1167,-47.6182,-85.0668,-80.1167,-47.6182,-85.0668,-110.645,-57.5548,-122.6027,-110.645,-57.5548,-122.6027,-71.5877,-32.5548,-94.9883,-71.5877,-32.5548,-94.9883,-54.5066,-37.5232,-101.0827]},{name:"King",iau:"Cep",segments:[142.0305,35.3143,265.6382,14.0981,9.2398,32.541,14.0981,9.2398,32.541,55.2195,39.455,198.82,55.2195,39.455,198.82,5.2761,1.1966,14.0307,5.2761,1.1966,14.0307,142.0305,35.3143,265.6382,14.0981,9.2398,32.541,2.9416,5.1142,12.4641,2.9416,5.1142,12.4641,55.2195,39.455,198.82]},{name:"Sea Monster",iau:"Cet",segments:[79.3152,53.5821,-7.1415,47.6537,36.5263,-6.1577,3.1559,1.0144,-1.5328,27.5835,1.2446,-10.4796,27.5835,1.2446,-10.4796,84.1581,1.3457,-14.8741,27.5835,1.2446,-10.4796,34.7557,7.2403,-10.2594,34.7557,7.2403,-10.2594,31.8262,9.2621,-9.3591,31.8262,9.2621,-9.3591,67.5396,27.2194,-26.9862,67.5396,27.2194,-26.9862,135.3154,77.2385,-73.452,135.3154,77.2385,-73.452,17.6728,11.6269,-10.3186,17.6728,11.6269,-10.3186,87.1675,58.2562,-56.3289,87.1675,58.2562,-56.3289,17.5219,10.1585,-11.0112,17.5219,10.1585,-11.0112,3.1559,1.0144,-1.5328,75.1307,46.0798,-25.1676,17.6728,11.6269,-10.3186,75.1307,46.0798,-25.1676,149.5714,115.0665,-48.6695,149.5714,115.0665,-48.6695,18.4404,15.1648,-5.0731,18.4404,15.1648,-5.0731,53.3427,52.0916,-16.6461,53.3427,52.0916,-16.6461,95.5438,95.8551,-18.5053,95.5438,95.8551,-18.5053,19.6933,17.6956,-2.5804,19.6933,17.6956,-2.5804,47.6537,36.5263,-6.1577,47.6537,36.5263,-6.1577,95.6428,75.7716,-19.7204,95.6428,75.7716,-19.7204,18.4404,15.1648,-5.0731]},{name:"Chameleon",iau:"Cha",segments:[-2.5063,-4.2209,-18.8582,-25.0619,-44.1552,-126.1982,-25.0619,-44.1552,-126.1982,-17.2582,-37.7613,-83.6165]},{name:"Compass",iau:"Cir",segments:[-5.2638,-10.0527,-11.834,-44.3157,-96.9883,-86.8897,-5.2638,-10.0527,-11.834,-9.9719,-20.7267,-18.5802]},{name:"Crab",iau:"Cnc",segments:[-61.9264,84.1604,19.2272,-32.6313,42.467,2.9853,-32.6313,42.467,2.9853,-9.2988,15.4924,2.3677,-32.6313,42.467,2.9853,-26.2534,32.7438,.0565,-26.2534,32.7438,.0565,-54.8236,80.4972,-17.6775,-26.2534,32.7438,.0565,-37.5024,39.3242,-4.831]},{name:"Dove",iau:"Col",segments:[-5.3422,36.0752,-55.5481,-3.3944,29.8751,-49.0399,-3.3944,29.8751,-49.0399,2.8376,167.9084,-276.423,2.8376,167.9084,-276.423,.867,13.8563,-23.2707,.867,13.8563,-23.2707,.3689,54.3996,-123.6596,.867,13.8563,-23.2707,6.443,46.8483,-73.8737,6.443,46.8483,-73.8737,8.6981,43.5209,-72.788]},{name:"Bernice's Hair",iau:"Com",segments:[-16.2111,-2.5531,6.9587,-7.7336,-.5904,4.9435,-7.7336,-.5904,4.9435,-44.0323,4.7134,23.943]},{name:"Southern Crown",iau:"CrA",segments:[9.3381,-59.7635,-16.4582,28.4394,-138.6164,-36.5229,28.4394,-138.6164,-36.5229,6.3541,-29.7969,-7.7543,6.3541,-29.7969,-7.7543,3.9459,-16.2888,-4.305,3.9459,-16.2888,-4.305,8.695,-34.5275,-9.7496,8.695,-34.5275,-9.7496,39.6721,-158.3879,-49.1491,39.6721,-158.3879,-49.1491,12.6537,-52.3957,-17.3677,12.6537,-52.3957,-17.3677,11.0854,-50.6433,-18.1852,11.0854,-50.6433,-18.1852,17.2022,-88.9519,-32.6261,9.3381,-59.7635,-16.4582,7.4289,-65.3959,-19.4289]},{name:"Northern Crown",iau:"CrB",segments:[-58.8185,-48.4007,86.2553,-19.2809,-15.6786,25.7826,-19.2809,-15.6786,25.7826,-12.5275,-11.3975,16.5411,-12.5275,-11.3975,16.5411,-22.6331,-22.5333,31.3926,-22.6331,-22.5333,31.3926,-24.824,-26.6454,36.119,-24.824,-26.6454,36.119,-33.6559,-38.878,53.3769,-33.6559,-38.878,53.3769,-48.9075,-56.2868,86.2628]},{name:"Cup",iau:"Crt",segments:[-45.0108,4.9776,-18.9584,-87.4645,2.2069,-41.9903,-87.4645,2.2069,-41.9903,-24.9714,.3338,-8.9254,-24.9714,.3338,-8.9254,-55.9289,3.2376,-17.7418,-55.9289,3.2376,-17.7418,-45.0108,4.9776,-18.9584,-55.9289,3.2376,-17.7418,-118.6607,7.7826,-28.4834,-118.6607,7.7826,-28.4834,-90.3482,2.2218,-18.0651,-90.3482,2.2218,-18.0651,-73.449,-7.8463,-21.3078,-73.449,-7.8463,-21.3078,-99.5711,-7.0841,-33.0066,-99.5711,-7.0841,-33.0066,-24.9714,.3338,-8.9254]},{name:"Southern Cross",iau:"Cru",segments:[-14.6068,-10.9033,-20.1241,-44.3638,-39.7633,-78.7129,-42.1687,-37.4997,-64.0955,-72.2168,-51.8257,-107.5222]},{name:"Crow",iau:"Crv",segments:[-17.3484,-4.2661,-3.6967,-24.9767,-5.9741,-5.5508,-24.9767,-5.9741,-5.5508,-44.8059,-8.4869,-11.7944,-44.8059,-8.4869,-11.7944,-87.011,-17.9643,-31.7652,-87.011,-17.9643,-31.7652,-13.5943,-2.9502,-5.5496,-87.011,-17.9643,-31.7652,-41.2393,-12.8982,-14.0768,-41.2393,-12.8982,-14.0768,-24.9767,-5.9741,-5.5508]},{name:"Swan",iau:"Cyg",segments:[7.4369,-7.4581,36.258,8.8709,-7.9962,35.5925,8.8709,-7.9962,35.5925,14.7517,-14.122,42.6501,14.7517,-14.122,42.6501,249.3182,-175.6044,471.8265,249.3182,-175.6044,471.8265,197.2507,-90.6034,374.5477,249.3182,-175.6044,471.8265,12.7406,-8.0401,17.591,12.7406,-8.0401,17.591,29.5449,-15.027,31.6699,29.5449,-15.027,31.6699,16.0811,-5.7084,14.0653,249.3182,-175.6044,471.8265,16.8881,-18.1559,34.475,16.8881,-18.1559,34.475,37.92,-62.4863,83.9872]},{name:"Dolphin",iau:"Del",segments:[68.1781,-70.4501,54.5072,18.9942,-18.125,16.3534,18.9942,-18.125,16.3534,44.9383,-41.351,39.6923,44.9383,-41.351,39.6923,22.6976,-19.4758,19.2023,22.6976,-19.4758,19.2023,42.7417,-38.328,35.7952,42.7417,-38.328,35.7952,18.9942,-18.125,16.3534]},{name:"Swordfish",iau:"Dor",segments:[1.2474,.6204,-45.6993,.3183,1.6505,-27.2721,.3183,1.6505,-27.2721,18.0973,23.2658,-339.9282,18.0973,23.2658,-339.9282,1.2474,.6204,-45.6993,18.0973,23.2658,-339.9282,10.8578,8.4311,-49.8454,10.8578,8.4311,-49.8454,5.5753,4.1324,-19.2144]},{name:"Dragon",iau:"Dra",segments:[-.5309,-5.784,33.9175,-.4362,-12.2974,45.6752,-.4362,-12.2974,45.6752,-9.1693,-28.1642,112.7237,-9.1693,-28.1642,112.7237,-2.0629,-5.7937,29.2846,-2.0629,-5.7937,29.2846,-.5309,-5.784,33.9175,-.5309,-5.784,33.9175,3.548,1.0957,29.7543,3.548,1.0957,29.7543,7.1993,4.6209,46.1133,7.1993,4.6209,46.1133,4.2781,6.1118,45.5324,4.2781,6.1118,45.5324,.2194,.8755,8.0067,.2194,.8755,8.0067,-11.644,-.6878,127.2227,-11.644,-.6878,127.2227,-5.4318,-1.4035,27.4306,-5.4318,-1.4035,27.4306,-5.5316,-1.656,20.7318,-5.5316,-1.656,20.7318,-9.9255,-.8596,29.0878,-9.9255,-.8596,29.0878,-29.5884,12.2824,73.1965,-29.5884,12.2824,73.1965,-48.7653,46.672,125.689,-48.7653,46.672,125.689,-40.5079,47.7083,97.2675]},{name:"Little Horse",iau:"Equ",segments:[25.7325,-19.0916,15.0658,13.6611,-9.7643,7.7349,13.6611,-9.7643,7.7349,75.6174,-52.0966,35.3034,75.6174,-52.0966,35.3034,43.6692,-32.7672,20.0028,43.6692,-32.7672,20.0028,25.7325,-19.0916,15.0658]},{name:"River",iau:"Eri",segments:[21.0655,-5.522,-36.7913,9.5551,-.6267,-14.755,9.5551,-.6267,-14.755,23.7559,.4146,-39.52,23.7559,.4146,-39.52,86.9013,12.1135,-135.1755,86.9013,12.1135,-135.1755,24.8917,7.1304,-35.9687,24.8917,7.1304,-35.9687,26.3235,8.9467,-35.2219,26.3235,8.9467,-35.2219,26.8574,11.5513,-39.8588,26.8574,11.5513,-39.8588,2.8379,1.46,-5.1296,2.8379,1.46,-5.1296,21.7991,18.6551,-41.8437,21.7991,18.6551,-41.8437,29.0556,25.9406,-54.2246,29.0556,25.9406,-54.2246,19.4618,25.3656,-43.9482,19.4618,25.3656,-43.9482,30.2877,42.4416,-73.2,30.2877,42.4416,-73.2,20.0748,34.6103,-50.8762,20.0748,34.6103,-50.8762,8.9684,9.7397,-11.8744,8.9684,9.7397,-11.8744,54.3226,52.8356,-62.3343,54.3226,52.8356,-62.3343,56.3803,47.4932,-58.6514,56.3803,47.4932,-58.6514,17.349,11.9391,-16.9971,17.349,11.9391,-16.9971,10.1705,6.382,-7.723,10.1705,6.382,-7.723,29.2925,23.5097,-17.1541,29.2925,23.5097,-17.1541,23.6847,22.7349,-15.957,23.6847,22.7349,-15.957,1.9011,2.1238,-1.4975,1.9011,2.1238,-1.4975,5.0331,6.1849,-4.3614,5.0331,6.1849,-4.3614,74.3223,173.5311,-88.5244,74.3223,173.5311,-88.5244,54.8554,145.4538,-73.708,54.8554,145.4538,-73.708,19.2383,56.0186,-31.2216,19.2383,56.0186,-31.2216,6.1994,23.5903,-12.8937,6.1994,23.5903,-12.8937,59.993,227.2791,-144.2905,59.993,227.2791,-144.2905,11.7269,25.4427,-20.3561]},{name:"Furnace",iau:"For",segments:[33.8427,16.6781,-38.8736,8.1907,5.653,-9.8452]},{name:"Twins",iau:"Gem",segments:[-5.2662,32.861,-3.9346,-84.1194,314.1522,-11.5776,-84.1194,314.1522,-11.5776,-5.9071,17.6349,-.0579,-5.9071,17.6349,-.0579,-9.825,28.8956,-3.0115,-9.825,28.8956,-3.0115,-3.5316,17.821,-3.2375,-5.9071,17.6349,-.0579,-28.1502,72.0368,7.0604,-28.1502,72.0368,7.0604,-18.1443,41.4012,2.4311,-28.1502,72.0368,7.0604,-4.0555,9.455,1.2057,-28.1502,72.0368,7.0604,-13.4564,39.1751,4.177,-13.4564,39.1751,4.177,-31.6915,114.7086,16.2054,-31.6915,114.7086,16.2054,-5.3119,14.4062,2.7338,-31.6915,114.7086,16.2054,-11.2245,57.0884,11.3411,-31.6915,114.7086,16.2054,-46.0238,262.6544,9.6379,-46.0238,262.6544,9.6379,-19.7459,165.5339,-8.9011,-46.0238,262.6544,9.6379,-6.5621,70.7116,-1.0166,-6.5621,70.7116,-1.0166,-12.6667,210.9575,-3.2762,-12.6667,210.9575,-3.2762,-.7853,47.5444,-.1432]},{name:"Crane",iau:"Gru",segments:[28.5377,-17.256,-22.8682,66.9447,-53.055,-52.0325,66.9447,-53.055,-52.0325,18.6725,-18.0905,-16.8278,18.6725,-18.0905,-16.8278,34.9934,-27.0194,-31.4562,34.9934,-27.0194,-31.4562,43.3639,-26.5696,-37.2941,43.3639,-26.5696,-37.2941,28.5377,-17.256,-22.8682,34.9934,-27.0194,-31.4562,29.3916,-23.0181,-33.5969,34.9934,-27.0194,-31.4562,23.0665,-18.8595,-24.8135,18.6725,-18.0905,-16.8278,51.7954,-45.1215,-33.4588,51.7954,-45.1215,-33.4588,38.0468,-34.9622,-21.9867]},{name:"Hercules",iau:"Her",segments:[-9.5388,-53.4923,143.535,-3.1738,-119.3697,212.6579,-3.1738,-119.3697,212.6579,-15.1731,-58.1382,104.5976,-15.1731,-58.1382,104.5976,-7.832,-25.5433,46.4738,-7.832,-25.5433,46.4738,-17.5337,-54.1802,96.8726,-17.5337,-54.1802,96.8726,-8.7777,-14.4867,29.6841,-8.7777,-14.4867,29.6841,-24.8873,-33.3184,82.1929,-24.8873,-33.3184,82.1929,-28.7935,-28.1814,89.7737,-28.7935,-28.1814,89.7737,-6.1866,-4.8752,13.8091,-8.7777,-14.4867,29.6841,-3.0733,-5.6509,8.5704,-3.0733,-5.6509,8.5704,-16.1463,-29.2384,30.8236,-16.1463,-29.2384,30.8236,-23.2428,-39.0126,38.1153,-3.0733,-5.6509,8.5704,-11.1807,-28.1346,40.5404,-11.1807,-28.1346,40.5404,-4.0755,-14.9628,17.0344,-4.0755,-14.9628,17.0344,-13.7849,-77.4121,91.3958,-13.7849,-77.4121,91.3958,-.4359,-5.2177,6.4898,-.4359,-5.2177,6.4898,-.3567,-25.4095,33.3406,-.3567,-25.4095,33.3406,3.0854,-65.5115,84.5021,-11.1807,-28.1346,40.5404,-17.5337,-54.1802,96.8726,-16.1463,-29.2384,30.8236,-20.9956,-85.1703,66.7912]},{name:"Clock",iau:"Hor",segments:[11.906,12.2534,-31.7713,21.9024,.948,-44.2868,21.9024,.948,-44.2868,15.1763,-.4981,-40.5242]},{name:"Female Water Snake",iau:"Hya",segments:[-102.1663,112.2635,-38.5527,-73.3756,83.7875,-29.0147,-73.3756,83.7875,-29.0147,-34.2796,40.4149,-11.6444,-34.2796,40.4149,-11.6444,-26.1982,28.7463,-7.6335,-26.1982,28.7463,-7.6335,-63.8752,68.7143,-19.1756,-63.8752,68.7143,-19.1756,-102.1663,112.2635,-38.5527,-63.8752,68.7143,-19.1756,-32.3285,32.8109,-8.9281,-32.3285,32.8109,-8.9281,-27.6832,22.9925,-8.3426,-27.6832,22.9925,-8.3426,-144.8535,98.6719,-46.8678,-144.8535,98.6719,-46.8678,-14.3879,9.8574,-5.2325,-14.3879,9.8574,-5.2325,-43.0035,27.6298,-21.0495,-43.0035,27.6298,-21.0495,-62.3608,28.1685,-33.4888,-62.3608,28.1685,-33.4888,-28.8985,10.8812,-12.4848,-28.8985,10.8812,-12.4848,-65.6572,17.548,-31.2179,-65.6572,17.548,-31.2179,-38.472,6.5305,-15.6063,-38.472,6.5305,-15.6063,-33.7888,-4.7415,-20.9895,-33.7888,-4.7415,-20.9895,-78.7783,-18.8365,-49.5767,-78.7783,-18.8365,-49.5767,-62.6009,-28.9811,-17.9378,-62.6009,-28.9811,-17.9378,-33.8976,-17.2853,-9.3057]},{name:"Male Water Snake",iau:"Hyi",segments:[1.6352,-2.7245,-6.7481,9.8608,-11.5567,-64.5525,9.8608,-11.5567,-64.5525,13.3224,-7.1094,-44.3991,13.3224,-7.1094,-44.3991,12.7363,-7.5995,-40.3145,12.7363,-7.5995,-40.3145,8.0221,-2.5883,-17.4696]},{name:"Indian",iau:"Ind",segments:[13.7948,-20.2998,-17.6879,13.0838,-23.5029,-14.1546,13.0838,-23.5029,-14.1546,64.0614,-121.577,-111.9073,64.0614,-121.577,-111.9073,13.7948,-20.2998,-17.6879]},{name:"Lesser Lion",iau:"LMi",segments:[-24.0628,13.4059,12.8043,-34.8188,24.7998,19.9929,-34.8188,24.7998,19.9929,-19.8267,16.0501,10.3581,-19.8267,16.0501,10.3581,-37.9239,39.5186,20.7465,-19.8267,16.0501,10.3581,-24.0628,13.4059,12.8043]},{name:"Lizard",iau:"Lac",segments:[147.7162,-15.5039,145.4224,237.9234,5.9789,260.0552,237.9234,5.9789,260.0552,418.6354,38.2838,526.7646,418.6354,38.2838,526.7646,469.4853,48.2931,633.6963,469.4853,48.2931,633.6963,28.9654,4.3973,42.7307,28.9654,4.3973,42.7307,18.7885,2.6884,25.4547,18.7885,2.6884,25.4547,418.6354,38.2838,526.7646]},{name:"Lion",iau:"Leo",segments:[-10.6339,1.567,2.3371,-46.5056,13.8436,8.2717,-46.5056,13.8436,8.2717,-21.0188,12.2189,.1973,-21.0188,12.2189,.1973,-469.8671,294.6887,47.2144,-469.8671,294.6887,47.2144,-34.0031,19.9375,6.1126,-34.0031,19.9375,6.1126,-16.4424,5.5601,4.4351,-16.4424,5.5601,4.4351,-10.6339,1.567,2.3371,-34.0031,19.9375,6.1126,-58.8396,37.3905,14.6468,-58.8396,37.3905,14.6468,-29.266,23.3377,8.1949,-29.266,23.3377,8.1949,-53.1957,43.5327,11.7686,-16.4424,5.5601,4.4351,-46.5056,13.8436,8.2717]},{name:"Hare",iau:"Lep",segments:[-1.3307,40.189,-31.8302,.2275,11.8477,-9.1268,.2275,11.8477,-9.1268,1.2277,17.497,-13.8104,1.2277,17.497,-13.8104,76.8772,507.1638,-446.8164,76.8772,507.1638,-446.8164,10.2115,39.1866,-32.8509,76.8772,507.1638,-446.8164,1.2445,25.1502,-24.5705,1.2445,25.1502,-24.5705,.5575,6.1812,-6.3861,.5575,6.1812,-6.3861,6.1882,33.9585,-33.234,6.1882,33.9585,-33.234,13.9738,43.1494,-45.2996,76.8772,507.1638,-446.8164,6.1882,33.9585,-33.234,10.2115,39.1866,-32.8509,51.1872,236.3203,-176.8951,10.2115,39.1866,-32.8509,28.2847,112.6398,-83.7919,13.9738,43.1494,-45.2996,10.2115,39.1866,-32.8509,28.2847,112.6398,-83.7919,14.2669,56.2068,-40.1845,51.1872,236.3203,-176.8951,18.4027,86.5152,-62.7166]},{name:"Scales",iau:"Lib",segments:[-25.7207,-44.3214,3.1089,-28.1316,-40.3829,3.7748,-28.1316,-40.3829,3.7748,-36.5496,-42.6005,8.3847,-36.5496,-42.6005,8.3847,-16.4089,-16.4563,.1351,-16.4089,-16.4563,.1351,-50.0788,-61.1565,-10.6092,-50.0788,-61.1565,-10.6092,-28.1316,-40.3829,3.7748]},{name:"Wolf",iau:"Lup",segments:[-27.9456,-54.4712,-14.3364,-24.7463,-57.9416,-17.5342,-24.7463,-57.9416,-17.5342,-51.5529,-114.5577,-39.4755,-51.5529,-114.5577,-39.4755,-27.9456,-54.4712,-14.3364,-51.5529,-114.5577,-39.4755,-57.3888,-105.688,-46.7536,-57.3888,-105.688,-46.7536,-71.953,-118.1412,-54.2822,-71.953,-118.1412,-54.2822,-44.026,-69.0913,-25.3264,-71.953,-118.1412,-54.2822,-60.952,-87.131,-49.6887,-57.3888,-105.688,-46.7536,-27.9733,-53.6042,-25.0001,-27.9733,-53.6042,-25.0001,-14.2717,-25.4918,-18.8505,-14.2717,-25.4918,-18.8505,-73.3549,-99.1471,-71.2808,-14.2717,-25.4918,-18.8505,-53.709,-72.8998,-56.9525,-73.3549,-99.1471,-71.2808,-55.2161,-65.2512,-47.619,-73.3549,-99.1471,-71.2808,-60.952,-87.131,-49.6887]},{name:"Lynx",iau:"Lyn",segments:[-43.1553,48.1947,20.9749,-24.7189,28.8699,13.9089,-24.7189,28.8699,13.9089,-123.0848,160.1503,77.1064,-123.0848,160.1503,77.1064,-9.9087,14.0072,7.5369,-9.9087,14.0072,7.5369,-47.908,91.7973,44.178,-47.908,91.7973,44.178,-20.2751,72.0996,38.0752,-20.2751,72.0996,38.0752,-7.0809,43.9799,31.701,-7.0809,43.9799,31.701,-2.1511,39.6538,28.4568]},{name:"Lyre",iau:"Lyr",segments:[.9606,-3.5074,6.763,7.4425,-22.7605,42.0555,7.4425,-22.7605,42.0555,50.3185,-147.1049,230.3604,50.3185,-147.1049,230.3604,43.1117,-107.1229,164.9915,43.1117,-107.1229,164.9915,44.4839,-111.9741,203.0614,44.4839,-111.9741,203.0614,7.4425,-22.7605,42.0555]},{name:"Table Mountain",iau:"Men",segments:[.9446,-5.6053,-32.1863,15.4411,-13.3335,-142.0162]},{name:"Microscope",iau:"Mic",segments:[33.345,-37.119,-13.9804,46.8788,-59.0796,-19.737,46.8788,-59.0796,-19.737,68.0483,-94.958,-32.279]},{name:"Unicorn",iau:"Mon",segments:[-12.6109,169.7342,-96.9213,-25.823,177.3205,-104.5655,-25.823,177.3205,-104.5655,-39.1584,110.361,-49.0374,-39.1584,110.361,-49.0374,-4.2857,39.1015,-13.3278,-4.2857,39.1015,-13.3278,-6.9363,165.6855,-63.394,-39.1584,110.361,-49.0374,-163.758,232.6802,-118.363,-163.758,232.6802,-118.363,-18.8357,33.5911,-22.643]},{name:"Fly",iau:"Mus",segments:[-38.2492,-45.8329,-86.0288,-16.6171,-14.4409,-35.9352,-16.6171,-14.4409,-35.9352,-35.3119,-48.6353,-99.5178,-35.3119,-48.6353,-99.5178,-33.9923,-41.0519,-80.6996,-33.9923,-41.0519,-80.6996,-38.2492,-45.8329,-86.0288]},{name:"Carpenter's Square",iau:"Nor",segments:[-37.2581,-114.7513,-77.8772,-11.5053,-35.5538,-20.0903,-11.5053,-35.5538,-20.0903,-50.7556,-164.6565,-82.1327,-50.7556,-164.6565,-82.1327,-22.8247,-59.061,-33.5391,-22.8247,-59.061,-33.5391,-11.5053,-35.5538,-20.0903,-22.8247,-59.061,-33.5391,-37.2581,-114.7513,-77.8772]},{name:"Octant",iau:"Oct",segments:[3.4869,-9.7445,-16.4217,6.5044,-19.9944,-40.6509,6.5044,-19.9944,-40.6509,-8.1315,-41.9358,-81.4718,-8.1315,-41.9358,-81.4718,3.4869,-9.7445,-16.4217]},{name:"Serpent Bearer",iau:"Oph",segments:[-1.5871,-11.9719,8.7212,-1.8309,-22.4459,11.944,-5.6025,-26.2891,3.3946,-1.8309,-22.4459,11.944,-1.5871,-11.9719,8.7212,-7.1417,-21.7489,14.2133,-7.1417,-21.7489,14.2133,-14.0202,-28.1325,9.2747,-14.0202,-28.1325,9.2747,-46.9232,-123.7161,26.6587,-46.9232,-123.7161,26.6587,-5.6025,-26.2891,3.3946,-5.6025,-26.2891,3.3946,-14.2921,-124.902,-1.5034]},{name:"Hunter",iau:"Ori",segments:[18.9185,203.2148,-96.4444,62.7751,547.8791,-251.3906,62.7751,547.8791,-251.3906,25.8681,192.8997,-84.8402,-3.722,261.5709,-17.1289,-11.1598,217.9384,-35.3451,-11.1598,217.9384,-35.3451,-5.9115,182.8639,-27.8616,-5.9115,182.8639,-27.8616,.1991,8.6478,-.4771,-11.1598,217.9384,-35.3451,-.487,46.1339,-11.3243,-.487,46.1339,-11.3243,3.1893,146.703,-42.1512,3.1893,146.703,-42.1512,18.9185,203.2148,-96.4444,18.9185,203.2148,-96.4444,10.4441,165.9412,-108.2683,10.4441,165.9412,-108.2683,51.6011,220.5144,-136.739,51.6011,220.5144,-136.739,25.8681,192.8997,-84.8402,25.8681,192.8997,-84.8402,11.6585,73.1666,-22.3916,11.6585,73.1666,-22.3916,35.9075,325.6016,-77.8549,35.9075,325.6016,-77.8549,3.1893,146.703,-42.1512,11.6585,73.1666,-22.3916,2.4005,7.3551,-2.1288,2.4005,7.3551,-2.1288,76.009,235.34,-74.535,76.009,235.34,-74.535,53.7285,168.044,-63.9057,53.7285,168.044,-63.9057,62.9115,212.9095,-84.5625,2.4005,7.3551,-2.1288,19.762,62.1737,-15.6427,19.762,62.1737,-15.6427,10.2152,34.6962,-7.9299,-5.9115,182.8639,-27.8616,-.487,46.1339,-11.3243]},{name:"Peacock",iau:"Pav",segments:[17.8502,-40.4385,-32.4319,3.0248,-5.5463,-6.7681,3.0248,-5.5463,-6.7681,11.1754,-26.9876,-30.1999,11.1754,-26.9876,-30.1999,1.3118,-4.1322,-4.2901,1.3118,-4.1322,-4.2901,17.8502,-40.4385,-32.4319,1.3118,-4.1322,-4.2901,4.7215,-19.6216,-24.8212,4.7215,-19.6216,-24.8212,3.9246,-43.839,-49.1925,3.9246,-43.839,-49.1925,18.1454,-135.5407,-132.8475,18.1454,-135.5407,-132.8475,1.3118,-4.1322,-4.2901,18.1454,-135.5407,-132.8475,35.4532,-258.6422,-212.1701,35.4532,-258.6422,-212.1701,10.9638,-178.2831,-140.1845,10.9638,-178.2831,-140.1845,.6815,-31.3271,-26.5159,.6815,-31.3271,-26.5159,35.4532,-258.6422,-212.1701,.6815,-31.3271,-26.5159,-2.9963,-84.6765,-74.4621]},{name:"Winged Horse",iau:"Peg",segments:[138.6825,22.3525,31.3991,38.3114,-4.3748,13.5838,51.4333,-.5618,31.078,49.0523,-3.6769,34.5817,49.0523,-3.6769,34.5817,65.6747,-12.3394,58.1956,51.4333,-.5618,31.078,29.9698,-2.946,16.9594,29.9698,-2.946,16.9594,101.1674,-12.323,56.0198,101.1674,-12.323,56.0198,9.477,-2.6445,6.7006,9.477,-2.6445,6.7006,25.6259,-9.8707,20.4232,38.3114,-4.3748,13.5838,15.233,-3.2524,5.183,15.233,-3.2524,5.183,57.9621,-14.2888,19.0283,57.9621,-14.2888,19.0283,23.9945,-10.2677,7.652,23.9945,-10.2677,7.652,172.7699,-92.309,79.5396,25.9747,6.6249,12.8897,51.4333,-.5618,31.078,25.9747,6.6249,12.8897,138.6825,22.3525,31.3991,51.4333,-.5618,31.078,38.3114,-4.3748,13.5838]},{name:"Hero",iau:"Per",segments:[156.0846,283.2515,69.8314,114.9622,226.8368,50.9699,114.9622,226.8368,50.9699,167.1284,357.9585,105.439,167.1284,357.9585,105.439,72.9911,161.4906,61.4183,72.9911,161.4906,61.4183,60.5943,128.7813,73.4646,60.5943,128.7813,73.4646,62.8851,118.6738,77.9341,62.8851,118.6738,77.9341,29.1426,50.5204,40.1297,29.1426,50.5204,40.1297,126.2335,207.6325,186.3338,62.8851,118.6738,77.9341,14.1894,21.17,10.5192,14.1894,21.17,10.5192,50.7721,72.2704,33.1535,50.7721,72.2704,33.1535,22.3295,28.4122,13.8305]},{name:"Phoenix",iau:"Phe",segments:[48.6142,-15.4408,-73.2038,985.9208,-166.0635,-1118.2053,985.9208,-166.0635,-1118.2053,17.2205,-4.77,-15.9735,17.2205,-4.77,-15.9735,48.6142,-15.4408,-73.2038,985.9208,-166.0635,-1118.2053,26.4925,-2.9613,-34.8446,26.4925,-2.9613,-34.8446,62.3225,1.4348,-81.446,62.3225,1.4348,-81.446,985.9208,-166.0635,-1118.2053,985.9208,-166.0635,-1118.2053,50.4551,-1.6354,-55.2555,50.4551,-1.6354,-55.2555,17.2205,-4.77,-15.9735,17.2205,-4.77,-15.9735,19.0832,-4.9374,-16.9146,19.0832,-4.9374,-16.9146,30.84,-11.4399,-29.5717,30.84,-11.4399,-29.5717,17.2205,-4.77,-15.9735]},{name:"Painter's Easel",iau:"Pic",segments:[-2.9064,2.1027,-29.3852,1.4056,10.2361,-55.9484,1.4056,10.2361,-55.9484,.6842,5.2278,-18.9134]},{name:"Southern Fish",iau:"PsA",segments:[6.4504,-3.1656,-2.7777,141.4775,-77.3646,-50.1412,141.4775,-77.3646,-50.1412,191.2311,-147.9429,-66.0095,191.2311,-147.9429,-66.0095,70.7783,-62.3824,-28.0426,70.7783,-62.3824,-28.0426,13.8055,-10.5335,-6.2569,13.8055,-10.5335,-6.2569,35.4394,-22.8558,-16.4974,35.4394,-22.8558,-16.4974,42.2878,-22.3005,-20.9268]},{name:"Fishes",iau:"Psc",segments:[96.7799,49.7652,46.3746,105.4541,52.4839,32.674,96.7799,49.7652,46.3746,82.3632,45.2572,29.569,82.3632,45.2572,29.569,105.4541,52.4839,32.674,105.4541,52.4839,32.674,101.7384,51.4273,10.7311,101.7384,51.4273,10.7311,70.608,37.1378,-2.2566,70.608,37.1378,-2.2566,39.7287,22.3665,-7.2707,39.7287,22.3665,-7.2707,52.7109,27.464,-8.2702,52.7109,27.464,-8.2702,100.7571,48.0728,-9.1668,100.7571,48.0728,-9.1668,98.5432,42.104,-5.736,98.5432,42.104,-5.736,53.5401,16.9072,1.072,53.5401,16.9072,1.072,89.2427,22.4946,3.4979,89.2427,22.4946,3.4979,139.6701,19.5768,13.5118,139.6701,19.5768,13.5118,32.7917,1.4796,3.6604,32.7917,1.4796,3.6604,13.5366,-.5568,1.7005,13.5366,-.5568,1.7005,31.9406,-1.9043,1.9108,31.9406,-1.9043,1.9108,48.7006,-6.0629,3.8042,48.7006,-6.0629,3.8042,40.5431,-6.0931,5.2208,40.5431,-6.0931,5.2208,51.1405,-4.3043,8.159,51.1405,-4.3043,8.159,13.5366,-.5568,1.7005]},{name:"Stern",iau:"Pup",segments:[-9.3661,10.6279,-13.3354,-25.6575,35.3426,-43.6826,-25.6575,35.3426,-43.6826,-45.7183,78.2353,-148.0133,-45.7183,78.2353,-148.0133,-13.558,43.9401,-103.6433,-13.558,43.9401,-103.6433,-7.3125,13.9127,-50.9419,-7.3125,13.9127,-50.9419,-16.2271,20.2616,-52.6958,-16.2271,20.2616,-52.6958,-130.675,115.4053,-282.8069,-130.675,115.4053,-282.8069,-9.3661,10.6279,-13.3354]},{name:"Compass",iau:"Pyx",segments:[-62.0379,40.5952,-92.0652,-133.3514,88.2619,-183.4617,-133.3514,88.2619,-183.4617,-38.6499,26.5963,-44.1988]},{name:"Reticle",iau:"Ret",segments:[10.099,1.3307,-48.0897,4.109,1.4637,-17.9171,4.109,1.4637,-17.9171,40.0135,4.9516,-160.6295,40.0135,4.9516,-160.6295,7.8095,-1.1818,-31.8874,7.8095,-1.1818,-31.8874,10.099,1.3307,-48.0897]},{name:"Sculptor",iau:"Scl",segments:[44.0574,-18.4873,-29.5181,182.4239,1.5688,-116.2803,182.4239,1.5688,-116.2803,47.9744,-20.3657,-25.069,47.9744,-20.3657,-25.069,44.0574,-18.4873,-29.5181]},{name:"Scorpion",iau:"Sco",segments:[-16.0486,-169.3256,-41.7404,-8.7851,-142.3891,-39.9504,-8.7851,-142.3891,-39.9504,-29.2027,-674.9347,-202.8647,-29.2027,-674.9347,-202.8647,-6.6541,-86.4656,-30.957,-6.6541,-86.4656,-30.957,-3.3876,-20.7841,-7.7411,-3.3876,-20.7841,-7.7411,-314.8104,-1377.0533,-504.5975,-314.8104,-1377.0533,-504.5975,-123.1415,-499.6708,-141.9741,-123.1415,-499.6708,-141.9741,-4.8422,-18.5034,-3.9743,-4.8422,-18.5034,-3.9743,-45.96,-137.0175,-15.4969,-45.96,-137.0175,-15.4969,-58.5426,-158.7916,-13.5274,-58.5426,-158.7916,-13.5274,-69.3327,-133.592,-5.2193,-58.5426,-158.7916,-13.5274,-81.3015,-159.1502,-17.1307,-58.5426,-158.7916,-13.5274,-55.8814,-110.5786,2.1794]},{name:"Shield",iau:"Sct",segments:[41.9547,-191.1382,64.2861,80.7398,-368.0157,116.8143,80.7398,-368.0157,116.8143,128.9211,-546.5219,71.0179,128.9211,-546.5219,71.0179,11.8673,-94.656,14.5852,11.8673,-94.656,14.5852,8.558,-53.9324,14.5504,8.558,-53.9324,14.5504,41.9547,-191.1382,64.2861]},{name:"Serpent",iau:"Ser",segments:[-27.9632,-41.3621,14.5414,-11.7509,-16.3719,8.9753,-11.7509,-16.3719,8.9753,-12.623,-16.2004,9.7995,-12.623,-16.2004,9.7995,-40.7006,-45.7484,33.7751,-40.7006,-45.7484,33.7751,-24.6108,-29.2765,26.1162,-24.6108,-29.2765,26.1162,-5.5187,-7.2657,6.4352,-5.5187,-7.2657,6.4352,-60.4229,-71.4399,70.7907,-60.4229,-71.4399,70.7907,-24.6108,-29.2765,26.1162,9.9795,-35.372,18.6275,1.7683,-17.7811,6.658,1.7683,-17.7811,6.658,-3.8584,-47.8886,8.8955,-3.8584,-47.8886,8.8955,-2.8628,-29.9835,4.1981,-2.8628,-29.9835,4.1981,-10.3778,-60.6981,11.1499]},{name:"Sextant",iau:"Sex",segments:[-103.9728,38.8737,-18.2169,-115.2754,55.935,-25.174]},{name:"Arrow",iau:"Sge",segments:[55.1846,-91.0992,83.8698,71.7541,-108.8736,105.2616,71.7541,-108.8736,105.2616,52.6849,-87.4353,82.0529,71.7541,-108.8736,105.2616,41.1827,-54.5649,55.7351,41.1827,-54.5649,55.7351,23.3894,-28.7921,30.3398]},{name:"Archer",iau:"Sgr",segments:[10.1133,-126.2238,-14.3653,2.5619,-23.1417,-.8682,2.5771,-40.6481,-9.6866,3.8172,-42.9526,-8.4225,3.8172,-42.9526,-8.4225,.6771,-30.751,-3.7718,.6771,-30.751,-3.7718,-17.0995,-354.945,-27.4759,.6771,-30.751,-3.7718,10.1133,-126.2238,-14.3653,10.1133,-126.2238,-14.3653,3.8172,-42.9526,-8.4225,3.8172,-42.9526,-8.4225,6.3263,-26.0731,-3.3793,6.3263,-26.0731,-3.3793,14.5077,-80.7811,-5.673,14.5077,-80.7811,-5.673,10.1133,-126.2238,-14.3653,14.5077,-80.7811,-5.673,2.5619,-23.1417,-.8682,2.5619,-23.1417,-.8682,84.0149,-1496.3903,61.2983,6.3263,-26.0731,-3.3793,9.0049,-33.9999,-3.1321,9.0049,-33.9999,-3.1321,14.9509,-68.0836,-4.2018,14.9509,-68.0836,-4.2018,14.5077,-80.7811,-5.673,14.9509,-68.0836,-4.2018,27.6505,-115.6067,3.4474,27.6505,-115.6067,3.4474,10.8638,-40.5611,.6303,10.8638,-40.5611,.6303,46.3737,-139.8233,8.3872,46.3737,-139.8233,8.3872,13.2826,-37.6132,2.9461,9.0049,-33.9999,-3.1321,29.9985,-75.2999,-4.3501,29.9985,-75.2999,-4.3501,62.1268,-121.5851,-17.0218,62.1268,-121.5851,-17.0218,83.784,-180.7447,-51.0979,83.784,-180.7447,-51.0979,22.1462,-53.3168,-21.7686,22.1462,-53.3168,-21.7686,15.0028,-50.2112,-17.4126,22.1462,-53.3168,-21.7686,10.7884,-38.0485,-16.3792]},{name:"Bull",iau:"Tau",segments:[5.2816,40.527,3.8526,37.2301,115.637,1.5137,37.2301,115.637,1.5137,16.3959,41.549,-2.0027,7.027,19.0878,-1.9468,12.3919,135.7611,-5.2266,18.8226,41.8934,-4.6103,19.2949,45.1724,-3.4086,18.8226,41.8934,-4.6103,60.407,107.3563,-17.2243,60.407,107.3563,-17.2243,41.0374,50.9739,-10.7564,7.027,19.0878,-1.9468,16.3959,41.549,-2.0027,7.027,19.0878,-1.9468,17.1129,42.2751,-4.6636,17.1129,42.2751,-4.6636,18.8226,41.8934,-4.6103,16.3959,41.549,-2.0027,18.084,43.7341,-3.0501,18.084,43.7341,-3.0501,19.2949,45.1724,-3.4086,19.2949,45.1724,-3.4086,60.7823,106.8048,8.4154]},{name:"Telescope",iau:"Tel",segments:[3.0787,-33.5918,-16.2795,6.9938,-78.775,-32.9974]},{name:"Southern Triangle",iau:"Tra",segments:[-13.1274,-81.9196,-86.368,-13.6797,-36.3816,-43.324,-13.6797,-36.3816,-43.324,-2.88,-8.7809,-8.305,-2.88,-8.7809,-8.305,-13.1274,-81.9196,-86.368]},{name:"Triangle",iau:"Tri",segments:[24.513,23.2767,11.6054,26.9097,24.5311,13.6727,26.9097,24.5311,13.6727,14.9217,11.1876,5.6309,14.9217,11.1876,5.6309,24.513,23.2767,11.6054]},{name:"Toucan",iau:"Tuc",segments:[25.2765,-30.4766,-40.1566,11.7369,-9.6958,-16.8189,11.7369,-9.6958,-16.8189,3.6406,-2.8065,-7.2769,11.7369,-9.6958,-16.8189,19.7186,-13.007,-36.8674]},{name:"Great Bear",iau:"UMa",segments:[-18.5296,.9928,25.9075,-14.1158,3.598,21.9079,-14.1158,3.598,21.9079,-13.776,5.3065,20.5587,-13.776,5.3065,20.5587,-13.4629,7.4427,19.4483,-13.4629,7.4427,19.4483,-17.2987,17.1799,28.7282,-17.2987,17.1799,28.7282,-13.8827,11.8844,18.3598,-13.8827,11.8844,18.3598,-15.0949,8.5483,18.6951,-15.0949,8.5483,18.6951,-13.4629,7.4427,19.4483,-15.0949,8.5483,18.6951,-40.8039,20.2019,40.3447,-40.8039,20.2019,40.3447,-29.9706,18.1415,25.0241,-29.9706,18.1415,25.0241,-45.6298,38.903,34.4596,-29.9706,18.1415,25.0241,-38.3157,30.7683,27.2368,-13.8827,11.8844,18.3598,-77.6666,94.726,96.6065,-77.6666,94.726,96.6065,-6.7267,8.8415,7.7489,-6.7267,8.8415,7.7489,-53.6678,79.7556,53.2414,-6.7267,8.8415,7.7489,-6.8358,10.6072,7.1614,-77.6666,94.726,96.6065,-15.3314,20.8958,23.8756,-15.3314,20.8958,23.8756,-16.6279,39.1808,36.024,-16.6279,39.1808,36.024,-8.5825,14.3843,16.8491,-8.5825,14.3843,16.8491,-17.2987,17.1799,28.7282]},{name:"Little Bear",iau:"UMi",segments:[1.3431,53.7124,121.2552,-.4027,19.1745,52.5366,-.4027,19.1745,52.5366,-4.458,27.7195,97.4168,-4.458,27.7195,97.4168,-13.0114,25.0968,106.4083,-13.0114,25.0968,106.4083,-3.1842,5.4457,29.2506,-3.1842,5.4457,29.2506,-30.2676,23.9914,146.6072,-30.2676,23.9914,146.6072,-8.0581,8.5453,38.3879,-8.0581,8.5453,38.3879,-13.0114,25.0968,106.4083]},{name:"Sails",iau:"Vel",segments:[-124.3,79.6474,-309.0123,-54.8027,14.9573,-129.2654,-54.8027,14.9573,-129.2654,-9.394,1.8349,-22.7673,-9.394,1.8349,-22.7673,-77.6577,1.5019,-157.3078,-77.6577,1.5019,-157.3078,-261.7202,-27.2611,-454.8571,-261.7202,-27.2611,-454.8571,-21.2588,-3.9461,-26.7846,-21.2588,-3.9461,-26.7846,-16.6506,-2.1599,-20.7778,-16.6506,-2.1599,-20.7778,-21.015,1.1029,-23.5852,-21.015,1.1029,-23.5852,-11.3825,3.1056,-14.6555,-11.3825,3.1056,-14.6555,-88.6625,30.2045,-138.1928,-88.6625,30.2045,-138.1928,-124.3,79.6474,-309.0123]},{name:"Maiden",iau:"Vir",segments:[-100.7276,10.304,8.1223,-114.5886,-9.2127,2.2725,-114.5886,-9.2127,2.2725,-11.8183,-2.114,.5851,-11.8183,-2.114,.5851,-69.9908,-30.93,-2.745,-69.9908,-30.93,-2.745,-71.0336,-48.8086,4.3856,-71.0336,-48.8086,4.3856,-18.1594,-12.1553,2.7604,-18.1594,-12.1553,2.7604,-14.4439,-12.1763,3.2197,-69.9908,-30.93,-2.745,-20.9342,-8.515,3.4326,-20.9342,-8.515,3.4326,-59.9382,-31.5333,15.7139,-59.9382,-31.5333,15.7139,-30.7984,-24.5133,12.1105,-20.9342,-8.515,3.4326,-55.6692,-11.2865,8.6041,-55.6692,-11.2865,8.6041,-31.3083,-5.4868,9.2375,-55.6692,-11.2865,8.6041,-11.8183,-2.114,.5851]},{name:"Flying Fish",iau:"Vol",segments:[-5.7263,-5.8804,-43.8055,-4.0299,-3.3646,-40.5151,-4.0299,-3.3646,-40.5151,-38.167,-17.1271,-193.1621,-38.167,-17.1271,-193.1621,-5.7263,-5.8804,-43.8055,-38.167,-17.1271,-193.1621,-25.9818,-9.1616,-208.6176,-38.167,-17.1271,-193.1621,-7.9524,-2.1564,-32.0566,-7.9524,-2.1564,-32.0566,-11.0173,-4.1397,-36.6604,-11.0173,-4.1397,-36.6604,-38.167,-17.1271,-193.1621]},{name:"Fox",iau:"Vul",segments:[30.5619,-54.0014,63.9373,33.1894,-38.3825,54.3975]}],Ra=[{hip:677,pos:[25.9747,6.6249,12.8897],mag:2.06,ci:-.043,trueDistPc:29.74},{hip:746,pos:[8.5999,6.0479,13.0833],mag:2.27,ci:.339,trueDistPc:16.78},{hip:765,pos:[30.84,-11.4399,-29.5717],mag:3.87,ci:.917,trueDistPc:44.23},{hip:1067,pos:[138.6825,22.3525,31.3991],mag:2.84,ci:-.146,trueDistPc:143.94},{hip:1562,pos:[84.1581,1.3457,-14.8741],mag:3.55,ci:1.087,trueDistPc:85.47},{hip:1599,pos:[3.6406,-2.8065,-7.2769],mag:4.23,ci:.535,trueDistPc:8.61},{hip:1645,pos:[139.6701,19.5768,13.5118],mag:5.37,ci:1.209,trueDistPc:141.68},{hip:2021,pos:[1.6352,-2.7245,-6.7481],mag:2.79,ci:.577,trueDistPc:7.46},{hip:2072,pos:[17.2205,-4.77,-15.9735],mag:3.94,ci:.195,trueDistPc:23.97},{hip:2081,pos:[19.0832,-4.9374,-16.9146],mag:2.38,ci:.976,trueDistPc:25.97},{hip:2484,pos:[19.7186,-13.007,-36.8674],mag:4.289,ci:.016,trueDistPc:43.79},{hip:3092,pos:[26.7885,10.7218,13.0592],mag:3.28,ci:1.138,trueDistPc:31.67},{hip:3179,pos:[38.5213,29.8626,51.5819],mag:2.23,ci:1.045,trueDistPc:70.97},{hip:3419,pos:[27.5835,1.2446,-10.4796],mag:2.01,ci:.908,trueDistPc:29.53},{hip:3786,pos:[89.2427,22.4946,3.4979],mag:4.44,ci:1.333,trueDistPc:92.1},{hip:3881,pos:[127.198,70.9409,93.0072],mag:4.53,ci:-.078,trueDistPc:172.81},{hip:4427,pos:[79.8367,76.9122,126.698],mag:2.39,ci:-.035,trueDistPc:168.35},{hip:4436,pos:[28.4124,15.8631,18.5299],mag:3.87,ci:.152,trueDistPc:37.45},{hip:4577,pos:[182.4239,1.5688,-116.2803],mag:4.27,ci:-.103,trueDistPc:216.34},{hip:4889,pos:[96.7799,49.7652,46.3746],mag:5.5,ci:.007,trueDistPc:118.29},{hip:4906,pos:[53.5401,16.9072,1.072],mag:4.28,ci:.866,trueDistPc:56.16},{hip:5165,pos:[985.9208,-166.0635,-1118.2053],mag:3.3,ci:.807,trueDistPc:8333.33},{hip:5348,pos:[48.6142,-15.4408,-73.2038],mag:4.014,ci:-.04,trueDistPc:89.22},{hip:5364,pos:[34.7557,7.2403,-10.2594],mag:3.45,ci:1.036,trueDistPc:36.95},{hip:5447,pos:[46.9464,27.549,26.482],mag:2.05,ci:1.384,trueDistPc:60.53},{hip:5742,pos:[105.4541,52.4839,32.674],mag:4.66,ci:.926,trueDistPc:122.24},{hip:6193,pos:[82.3632,45.2572,29.569],mag:4.748,ci:.085,trueDistPc:98.52},{hip:6537,pos:[31.8262,9.2621,-9.3591],mag:3.59,ci:.951,trueDistPc:34.44},{hip:6686,pos:[14.0824,15.6017,22.073],mag:2.68,ci:.16,trueDistPc:30.48},{hip:6867,pos:[50.4551,-1.6354,-55.2555],mag:3.42,ci:1.384,trueDistPc:74.84},{hip:7007,pos:[98.5432,42.104,-5.736],mag:4.84,ci:1.223,trueDistPc:107.31},{hip:7083,pos:[26.4925,-2.9613,-34.8446],mag:3.935,ci:.886,trueDistPc:43.87},{hip:7097,pos:[101.7384,51.4273,10.7311],mag:3.62,ci:.883,trueDistPc:114.5},{hip:7588,pos:[21.0655,-5.522,-36.7913],mag:.46,ci:-.086,trueDistPc:42.75},{hip:7884,pos:[100.7571,48.0728,-9.1668],mag:4.44,ci:1.214,trueDistPc:112.01},{hip:8102,pos:[3.1559,1.0144,-1.5328],mag:3.5,ci:.662,trueDistPc:3.65},{hip:8198,pos:[70.608,37.1378,-2.2566],mag:4.26,ci:.866,trueDistPc:79.81},{hip:8645,pos:[67.5396,27.2194,-26.9862],mag:3.72,ci:1.019,trueDistPc:77.66},{hip:8796,pos:[14.9217,11.1876,5.6309],mag:3.42,ci:.458,trueDistPc:19.48},{hip:8832,pos:[41.7697,27.3173,6.2717],mag:4.562,ci:-.028,trueDistPc:50.3},{hip:8833,pos:[52.7109,27.464,-8.2702],mag:4.604,ci:.856,trueDistPc:60.01},{hip:8837,pos:[62.3225,1.4348,-81.446],mag:4.41,ci:1.402,trueDistPc:102.57},{hip:8886,pos:[55.6026,78.7157,105.3508],mag:3.37,ci:-.077,trueDistPc:142.78},{hip:8903,pos:[14.7527,9.9396,2.6545],mag:2.65,ci:.16,trueDistPc:17.99},{hip:9007,pos:[9.5551,-.6267,-14.755],mag:3.71,ci:.764,trueDistPc:17.59},{hip:9236,pos:[8.0221,-2.5883,-17.4696],mag:2.84,ci:.297,trueDistPc:19.4},{hip:9487,pos:[39.7287,22.3665,-7.2707],mag:4.155,ci:-.062,trueDistPc:46.17},{hip:9640,pos:[76.3681,74.3307,56.2028],mag:2.1,ci:1.07,trueDistPc:120.48},{hip:9884,pos:[15.7321,12.1427,3.4917],mag:2.01,ci:1.036,trueDistPc:20.18},{hip:10064,pos:[26.9097,24.5311,13.6727],mag:3,ci:.169,trueDistPc:38.9},{hip:10324,pos:[79.3152,53.5821,-7.1415],mag:4.35,ci:.798,trueDistPc:95.98},{hip:10602,pos:[23.7559,.4146,-39.52],mag:3.57,ci:-.052,trueDistPc:46.11},{hip:10670,pos:[24.513,23.2767,11.6054],mag:4,ci:.067,trueDistPc:35.74},{hip:10826,pos:[75.1307,46.0798,-25.1676],mag:6.53,ci:.985,trueDistPc:91.66},{hip:11001,pos:[12.7363,-7.5995,-40.3145],mag:4.09,ci:.075,trueDistPc:42.96},{hip:11345,pos:[135.3154,77.2385,-73.452],mag:4.866,ci:.029,trueDistPc:172.25},{hip:11407,pos:[86.9013,12.1135,-135.1755],mag:4.25,ci:-.069,trueDistPc:161.16},{hip:11484,pos:[47.6537,36.5263,-6.1577],mag:4.3,ci:.007,trueDistPc:60.36},{hip:11767,pos:[1.3431,53.7124,121.2552],mag:2.02,ci:.56,trueDistPc:132.63},{hip:11783,pos:[17.5219,10.1585,-11.0112],mag:4.75,ci:.432,trueDistPc:23.05},{hip:12093,pos:[95.6428,75.7716,-19.7204],mag:4.871,ci:.79,trueDistPc:123.6},{hip:12387,pos:[149.5714,115.0665,-48.6695],mag:4.07,ci:-.137,trueDistPc:194.89},{hip:12390,pos:[17.6728,11.6269,-10.3186],mag:4.87,ci:.441,trueDistPc:23.54},{hip:12394,pos:[13.3224,-7.1094,-44.3991],mag:4.096,ci:.008,trueDistPc:46.9},{hip:12413,pos:[24.8917,7.1304,-35.9687],mag:4.75,ci:.101,trueDistPc:44.32},{hip:12484,pos:[21.9024,.948,-44.2868],mag:5.21,ci:.39,trueDistPc:49.42},{hip:12486,pos:[26.3235,8.9467,-35.2219],mag:4.116,ci:.898,trueDistPc:44.87},{hip:12706,pos:[18.4404,15.1648,-5.0731],mag:3.47,ci:.126,trueDistPc:24.41},{hip:12770,pos:[87.1675,58.2562,-56.3289],mag:4.236,ci:-.055,trueDistPc:119.02},{hip:12828,pos:[19.6933,17.6956,-2.5804],mag:4.26,ci:.313,trueDistPc:26.6},{hip:12843,pos:[10.1705,6.382,-7.723],mag:4.46,ci:.458,trueDistPc:14.28},{hip:13147,pos:[33.8427,16.6781,-38.8736],mag:4.46,ci:.891,trueDistPc:54.17},{hip:13209,pos:[33.2876,37.2348,9.2114],mag:3.594,ci:-.032,trueDistPc:50.79},{hip:13254,pos:[22.3295,28.4122,13.8305],mag:4.14,ci:.504,trueDistPc:38.69},{hip:13268,pos:[126.2335,207.6325,186.3338],mag:3.79,ci:1.487,trueDistPc:306.21},{hip:13701,pos:[29.2925,23.5097,-17.1541],mag:3.87,ci:1.002,trueDistPc:41.29},{hip:13847,pos:[26.8574,11.5513,-39.8588],mag:3.228,ci:.42,trueDistPc:49.43},{hip:13954,pos:[95.5438,95.8551,-18.5053],mag:4.7,ci:-.052,trueDistPc:136.6},{hip:14135,pos:[53.3427,52.0916,-16.6461],mag:2.53,ci:1.444,trueDistPc:76.39},{hip:14146,pos:[17.349,11.9391,-16.9971],mag:4.09,ci:.186,trueDistPc:27.06},{hip:14240,pos:[15.1763,-.4981,-40.5242],mag:5.122,ci:.332,trueDistPc:43.28},{hip:14328,pos:[29.1426,50.5204,40.1297],mag:2.93,ci:.645,trueDistPc:70.8},{hip:14354,pos:[50.7721,72.2704,33.1535],mag:3.39,ci:1.452,trueDistPc:94.34},{hip:14576,pos:[14.1894,21.17,10.5192],mag:2.12,ci:.008,trueDistPc:27.57},{hip:14879,pos:[8.1907,5.653,-9.8452],mag:3.98,ci:.501,trueDistPc:14},{hip:15197,pos:[23.6847,22.7349,-15.957],mag:4.8,ci:.246,trueDistPc:36.5},{hip:15474,pos:[56.3803,47.4932,-58.6514],mag:3.7,ci:1.427,trueDistPc:94.2},{hip:15510,pos:[2.8379,1.46,-5.1296],mag:4.27,ci:.654,trueDistPc:6.04},{hip:15863,pos:[62.8851,118.6738,77.9341],mag:1.79,ci:.458,trueDistPc:155.28},{hip:15900,pos:[41.0374,50.9739,-10.7564],mag:3.6,ci:.806,trueDistPc:66.32},{hip:16228,pos:[291.1956,672.3074,604.6408],mag:4.22,ci:.399,trueDistPc:949.94},{hip:16537,pos:[1.9011,2.1238,-1.4975],mag:3.73,ci:.798,trueDistPc:3.22},{hip:16611,pos:[54.3226,52.8356,-62.3343],mag:4.25,ci:-.035,trueDistPc:98.12},{hip:17358,pos:[60.5943,128.7813,73.4646],mag:3.01,ci:-.052,trueDistPc:160.17},{hip:17378,pos:[5.0331,6.1849,-4.3614],mag:3.54,ci:.832,trueDistPc:9.09},{hip:17440,pos:[7.8095,-1.1818,-31.8874],mag:3.833,ci:1.015,trueDistPc:32.85},{hip:17448,pos:[156.0846,283.2515,69.8314],mag:3.91,ci:.05,trueDistPc:330.86},{hip:17651,pos:[8.9684,9.7397,-11.8744],mag:4.2,ci:.433,trueDistPc:17.78},{hip:17678,pos:[9.8608,-11.5567,-64.5525],mag:3.26,ci:1.427,trueDistPc:66.32},{hip:17797,pos:[21.7991,18.6551,-41.8437],mag:4.27,ci:.042,trueDistPc:50.74},{hip:17847,pos:[60.7823,106.8048,8.4154],mag:3.63,ci:-.027,trueDistPc:123.18},{hip:17874,pos:[29.0556,25.9406,-54.2246],mag:4.17,ci:.857,trueDistPc:66.76},{hip:17959,pos:[20.3155,73.9849,90.2028],mag:4.604,ci:.093,trueDistPc:118.42},{hip:18246,pos:[114.9622,226.8368,50.9699],mag:2.85,ci:.152,trueDistPc:259.36},{hip:18505,pos:[27.28,84.1613,78.3586],mag:5.04,ci:-.035,trueDistPc:118.18},{hip:18532,pos:[72.9911,161.4906,61.4183],mag:2.89,ci:-.103,trueDistPc:187.56},{hip:18597,pos:[40.0135,4.9516,-160.6295],mag:4.57,ci:1.427,trueDistPc:165.61},{hip:18614,pos:[167.1284,357.9585,105.439],mag:4.06,ci:.067,trueDistPc:408.88},{hip:18724,pos:[60.407,107.3563,-17.2243],mag:3.41,ci:-.052,trueDistPc:124.38},{hip:19747,pos:[11.906,12.2534,-31.7713],mag:3.86,ci:.985,trueDistPc:36.07},{hip:19780,pos:[10.099,1.3307,-48.0897],mag:3.36,ci:.824,trueDistPc:49.16},{hip:19893,pos:[5.5753,4.1324,-19.2144],mag:4.2,ci:.348,trueDistPc:20.43},{hip:19921,pos:[4.109,1.4637,-17.9171],mag:4.44,ci:.968,trueDistPc:18.44},{hip:20042,pos:[19.4618,25.3656,-43.9482],mag:3.56,ci:-.052,trueDistPc:54.35},{hip:20205,pos:[18.8226,41.8934,-4.6103],mag:3.65,ci:.891,trueDistPc:46.16},{hip:20455,pos:[19.2949,45.1724,-3.4086],mag:3.76,ci:.883,trueDistPc:49.24},{hip:20535,pos:[30.2877,42.4416,-73.2],mag:3.96,ci:1.316,trueDistPc:89.87},{hip:20648,pos:[18.084,43.7341,-3.0501],mag:4.298,ci:.11,trueDistPc:47.42},{hip:20889,pos:[16.3959,41.549,-2.0027],mag:3.53,ci:.908,trueDistPc:44.71},{hip:20894,pos:[17.1129,42.2751,-4.6636],mag:3.41,ci:.211,trueDistPc:45.85},{hip:21060,pos:[56.1269,66.8497,-190.0001],mag:5.059,ci:-.116,trueDistPc:209.09},{hip:21281,pos:[10.8578,8.4311,-49.8454],mag:3.28,ci:-.035,trueDistPc:51.71},{hip:21393,pos:[20.0748,34.6103,-50.8762],mag:3.82,ci:.883,trueDistPc:64.72},{hip:21421,pos:[7.027,19.0878,-1.9468],mag:.86,ci:1.359,trueDistPc:20.43},{hip:21444,pos:[74.3223,173.5311,-88.5244],mag:3.928,ci:-.112,trueDistPc:208.5},{hip:21594,pos:[11.7269,25.4427,-20.3561],mag:3.87,ci:.977,trueDistPc:34.63},{hip:21770,pos:[5.1567,7.6879,-18.1589],mag:4.45,ci:.339,trueDistPc:20.38},{hip:21861,pos:[7.6828,12.9813,-24.6444],mag:5.05,ci:.364,trueDistPc:28.89},{hip:21881,pos:[37.2301,115.637,1.5137],mag:4.258,ci:-.052,trueDistPc:121.49},{hip:21949,pos:[15.4411,-13.3335,-142.0162],mag:5.511,ci:-.052,trueDistPc:143.47},{hip:22109,pos:[54.8554,145.4538,-73.708],mag:4,ci:-.061,trueDistPc:172.04},{hip:22449,pos:[2.4005,7.3551,-2.1288],mag:3.19,ci:.424,trueDistPc:8.02},{hip:22509,pos:[19.762,62.1737,-15.6427],mag:4.35,ci:.059,trueDistPc:67.09},{hip:22549,pos:[76.009,235.34,-74.535],mag:3.68,ci:-.103,trueDistPc:258.3},{hip:22701,pos:[19.2383,56.0186,-31.2216],mag:4.4,ci:.254,trueDistPc:66.96},{hip:22730,pos:[53.7285,168.044,-63.9057],mag:5.324,ci:1.415,trueDistPc:187.64},{hip:22783,pos:[170.822,1076.0472,1030.991],mag:4.29,ci:.093,trueDistPc:1690.33},{hip:22845,pos:[10.2152,34.6962,-7.9299],mag:4.648,ci:.114,trueDistPc:37.03},{hip:23015,pos:[31.3476,131.9866,25.0313],mag:2.69,ci:1.35,trueDistPc:137.95},{hip:23123,pos:[62.9115,212.9095,-84.5625],mag:4.459,ci:1.235,trueDistPc:237.57},{hip:23453,pos:[131.4405,653.8382,219.3016],mag:3.75,ci:1.087,trueDistPc:702.05},{hip:23685,pos:[13.9738,43.1494,-45.2996],mag:3.18,ci:1.291,trueDistPc:64.1},{hip:23875,pos:[6.1994,23.5903,-12.8937],mag:2.79,ci:.161,trueDistPc:27.59},{hip:23972,pos:[59.993,227.2791,-144.2905],mag:4.27,ci:-.12,trueDistPc:275.82},{hip:24244,pos:[14.2669,56.2068,-40.1845],mag:4.45,ci:-.035,trueDistPc:70.55},{hip:24305,pos:[10.2115,39.1866,-32.8509],mag:3.29,ci:-.043,trueDistPc:52.14},{hip:24327,pos:[28.2847,112.6398,-83.7919],mag:4.44,ci:-.027,trueDistPc:143.21},{hip:24436,pos:[51.6011,220.5144,-136.739],mag:.13,ci:.025,trueDistPc:264.55},{hip:24608,pos:[1.7126,11.9703,5.0991],mag:.08,ci:.73,trueDistPc:13.12},{hip:24845,pos:[51.1872,236.3203,-176.8951],mag:4.29,ci:-.162,trueDistPc:299.6},{hip:24873,pos:[18.4027,86.5152,-62.7166],mag:5.284,ci:-.048,trueDistPc:108.43},{hip:25110,pos:[.6317,11.6383,17.2104],mag:4.956,ci:.642,trueDistPc:20.79},{hip:25336,pos:[11.6585,73.1666,-22.3916],mag:1.64,ci:-.137,trueDistPc:77.4},{hip:25428,pos:[5.2816,40.527,3.8526],mag:1.65,ci:-.06,trueDistPc:41.05},{hip:25606,pos:[6.1882,33.9585,-33.234],mag:2.84,ci:.747,trueDistPc:47.92},{hip:25859,pos:[8.6981,43.5209,-72.788],mag:3.87,ci:1.019,trueDistPc:85.25},{hip:25918,pos:[.9446,-5.6053,-32.1863],mag:5.2,ci:1.011,trueDistPc:32.68},{hip:25930,pos:[25.8681,192.8997,-84.8402],mag:2.41,ci:-.282,trueDistPc:212.31},{hip:25985,pos:[76.8772,507.1638,-446.8164],mag:2.57,ci:.22,trueDistPc:680.27},{hip:26069,pos:[18.0973,23.2658,-339.9282],mag:3.76,ci:.747,trueDistPc:341.2},{hip:26207,pos:[35.9075,325.6016,-77.8549],mag:3.66,ci:-.103,trueDistPc:336.7},{hip:26311,pos:[62.7751,547.8791,-251.3906],mag:1.69,ci:-.103,trueDistPc:606.06},{hip:26451,pos:[12.3919,135.7611,-5.2266],mag:3.03,ci:-.112,trueDistPc:136.43},{hip:26634,pos:[6.443,46.8483,-73.8737],mag:2.65,ci:-.052,trueDistPc:87.71},{hip:26727,pos:[18.9185,203.2148,-96.4444],mag:1.77,ci:-.129,trueDistPc:225.73},{hip:27072,pos:[.5575,6.1812,-6.3861],mag:3.6,ci:.45,trueDistPc:8.91},{hip:27100,pos:[1.2474,.6204,-45.6993],mag:4.36,ci:.229,trueDistPc:45.72},{hip:27288,pos:[1.2277,17.497,-13.8104],mag:3.525,ci:.145,trueDistPc:22.32},{hip:27321,pos:[.6842,5.2278,-18.9134],mag:3.86,ci:.195,trueDistPc:19.63},{hip:27366,pos:[10.4441,165.9412,-108.2683],mag:2.06,ci:-.103,trueDistPc:198.41},{hip:27530,pos:[1.4056,10.2361,-55.9484],mag:4.494,ci:.981,trueDistPc:56.89},{hip:27628,pos:[.867,13.8563,-23.2707],mag:3.12,ci:1.036,trueDistPc:27.1},{hip:27654,pos:[1.2445,25.1502,-24.5705],mag:3.85,ci:.883,trueDistPc:35.18},{hip:27890,pos:[.3183,1.6505,-27.2721],mag:4.66,ci:.934,trueDistPc:27.32},{hip:27913,pos:[.1991,8.6478,-.4771],mag:4.4,ci:.56,trueDistPc:8.66},{hip:27989,pos:[3.1893,146.703,-42.1512],mag:.42,ci:1.622,trueDistPc:152.67},{hip:28103,pos:[.2275,11.8477,-9.1268],mag:3.72,ci:.331,trueDistPc:14.96},{hip:28199,pos:[2.8376,167.9084,-276.423],mag:4.36,ci:-.103,trueDistPc:323.44},{hip:28328,pos:[.3689,54.3996,-123.6596],mag:3.96,ci:1.019,trueDistPc:135.1},{hip:28360,pos:[.0362,23.1376,9.118],mag:1.9,ci:.075,trueDistPc:24.87},{hip:28380,pos:[.0492,49.3018,12.0853],mag:2.62,ci:-.018,trueDistPc:50.76},{hip:28614,pos:[-.487,46.1339,-11.3243],mag:4.674,ci:.257,trueDistPc:47.51},{hip:28691,pos:[-3.722,261.5709,-17.1289],mag:5.13,ci:-.043,trueDistPc:262.16},{hip:28734,pos:[-.7853,47.5444,-.1432],mag:4.15,ci:.789,trueDistPc:47.55},{hip:28910,pos:[-1.3307,40.189,-31.8302],mag:4.663,ci:.087,trueDistPc:51.28},{hip:29038,pos:[-5.9115,182.8639,-27.8616],mag:4.397,ci:-.083,trueDistPc:185.07},{hip:29151,pos:[-6.9363,165.6855,-63.394],mag:5.73,ci:.11,trueDistPc:177.53},{hip:29426,pos:[-11.1598,217.9384,-35.3451],mag:4.48,ci:-.095,trueDistPc:221.07},{hip:29651,pos:[-12.6109,169.7342,-96.9213],mag:3.96,ci:1.163,trueDistPc:195.86},{hip:29655,pos:[-12.6667,210.9575,-3.2762],mag:3.28,ci:1.418,trueDistPc:211.36},{hip:29807,pos:[-3.3944,29.8751,-49.0399],mag:4.37,ci:.9,trueDistPc:57.52},{hip:30060,pos:[-2.1511,39.6538,28.4568],mag:4.434,ci:.074,trueDistPc:48.86},{hip:30122,pos:[-8.5121,65.741,-89.1703],mag:2.99,ci:-.095,trueDistPc:111.11},{hip:30277,pos:[-5.3422,36.0752,-55.5481],mag:3.85,ci:.798,trueDistPc:66.45},{hip:30324,pos:[-14.2097,112.672,-99.6064],mag:1.97,ci:-.154,trueDistPc:151.06},{hip:30343,pos:[-6.5621,70.7116,-1.0166],mag:2.87,ci:1.444,trueDistPc:71.02},{hip:30419,pos:[-4.2857,39.1015,-13.3278],mag:4.398,ci:.207,trueDistPc:41.53},{hip:30438,pos:[-5.9927,22.4267,-91.9002],mag:-.74,ci:.178,trueDistPc:94.79},{hip:30867,pos:[-25.823,177.3205,-104.5655],mag:3.74,ci:-.078,trueDistPc:207.47},{hip:30883,pos:[-19.7459,165.5339,-8.9011],mag:4.14,ci:-.069,trueDistPc:166.94},{hip:31416,pos:[-17.4617,84.6014,-89.61],mag:4.5,ci:.041,trueDistPc:124.47},{hip:31592,pos:[-3.0802,14.8191,-13.7832],mag:3.91,ci:.986,trueDistPc:20.47},{hip:31681,pos:[-5.2662,32.861,-3.9346],mag:1.92,ci:.05,trueDistPc:33.51},{hip:31685,pos:[-13.558,43.9401,-103.6433],mag:3.17,ci:-.044,trueDistPc:113.39},{hip:32246,pos:[-46.0238,262.6544,9.6379],mag:2.98,ci:1.248,trueDistPc:266.83},{hip:32349,pos:[-.4943,1.9707,-1.6811],mag:-1.46,ci:.05,trueDistPc:2.64},{hip:32362,pos:[-3.5316,17.821,-3.2375],mag:3.36,ci:.416,trueDistPc:18.45},{hip:32607,pos:[-2.9064,2.1027,-29.3852],mag:3.23,ci:.246,trueDistPc:29.6},{hip:32768,pos:[-7.3125,13.9127,-50.9419],mag:2.93,ci:1.07,trueDistPc:53.31},{hip:33018,pos:[-11.2245,57.0884,11.3411],mag:3.6,ci:.135,trueDistPc:59.28},{hip:33152,pos:[-165.8789,505.6813,-566.2108],mag:3.87,ci:1.521,trueDistPc:777.06},{hip:33160,pos:[-18.9847,65.4126,-47.1978],mag:4.08,ci:1.266,trueDistPc:82.87},{hip:33347,pos:[-245.2542,776.7879,-674.9295],mag:4.385,ci:-.025,trueDistPc:1057.87},{hip:33449,pos:[-7.0809,43.9799,31.701],mag:4.35,ci:.772,trueDistPc:54.67},{hip:33579,pos:[-27.4979,72.5304,-97.0294],mag:1.5,ci:-.129,trueDistPc:124.22},{hip:33856,pos:[-93.704,237.2004,-306.3871],mag:3.47,ci:1.52,trueDistPc:398.64},{hip:33977,pos:[-285.0116,742.3727,-827.2156],mag:3.02,ci:-.018,trueDistPc:1147.45},{hip:34045,pos:[-34.8809,97.9145,-81.1902],mag:4.12,ci:-.052,trueDistPc:131.89},{hip:34088,pos:[-84.1194,314.1522,-11.5776],mag:3.79,ci:.721,trueDistPc:325.43},{hip:34444,pos:[-129.7334,299.8533,-368.6769],mag:1.84,ci:.628,trueDistPc:492.61},{hip:34481,pos:[-4.0299,-3.3646,-40.5151],mag:3.746,ci:.924,trueDistPc:40.85},{hip:34693,pos:[-31.6915,114.7086,16.2054],mag:4.42,ci:1.121,trueDistPc:120.1},{hip:34769,pos:[-39.1584,110.361,-49.0374],mag:4.15,ci:.041,trueDistPc:126.96},{hip:35037,pos:[-80.3942,167.564,-210.5207],mag:3.82,ci:-.103,trueDistPc:280.82},{hip:35228,pos:[-25.9818,-9.1616,-208.6176],mag:3.99,ci:.722,trueDistPc:210.43},{hip:35264,pos:[-45.7183,78.2353,-148.0133],mag:2.7,ci:1.427,trueDistPc:173.55},{hip:35350,pos:[-9.825,28.8956,-3.0115],mag:3.559,ci:.148,trueDistPc:30.67},{hip:35550,pos:[-5.9071,17.6349,-.0579],mag:3.53,ci:.339,trueDistPc:18.6},{hip:35904,pos:[-190.762,336.6705,-471.2381],mag:2.45,ci:-.018,trueDistPc:609.76},{hip:36046,pos:[-13.4564,39.1751,4.177],mag:3.79,ci:.934,trueDistPc:41.63},{hip:36145,pos:[-20.2751,72.0996,38.0752],mag:4.61,ci:.036,trueDistPc:84.02},{hip:36188,pos:[-18.2097,44.6401,-11.5631],mag:2.89,ci:-.027,trueDistPc:49.58},{hip:36377,pos:[-16.2271,20.2616,-52.6958],mag:3.25,ci:1.342,trueDistPc:58.74},{hip:36850,pos:[-5.3119,14.4062,2.7338],mag:1.58,ci:.084,trueDistPc:15.6},{hip:36962,pos:[-28.1502,72.0368,7.0604],mag:4.06,ci:1.359,trueDistPc:77.66},{hip:37279,pos:[-1.4693,3.0414,-.9698],mag:.37,ci:.407,trueDistPc:3.51},{hip:37447,pos:[-18.8357,33.5911,-22.643],mag:3.93,ci:.917,trueDistPc:44.67},{hip:37504,pos:[-5.7263,-5.8804,-43.8055],mag:3.944,ci:.928,trueDistPc:44.57},{hip:37740,pos:[-18.1443,41.4012,2.4311],mag:3.57,ci:.832,trueDistPc:45.27},{hip:37826,pos:[-4.0555,9.455,1.2057],mag:1.14,ci:.9,trueDistPc:10.36},{hip:38146,pos:[-25.6575,35.3426,-43.6826],mag:5.313,ci:.682,trueDistPc:61.77},{hip:39429,pos:[-130.675,115.4053,-282.8069],mag:2.25,ci:-.179,trueDistPc:332.23},{hip:39757,pos:[-9.3661,10.6279,-13.3354],mag:2.81,ci:.416,trueDistPc:19.46},{hip:39794,pos:[-38.167,-17.1271,-193.1621],mag:4.398,ci:-.059,trueDistPc:197.64},{hip:39863,pos:[-163.758,232.6802,-118.363],mag:4.33,ci:.875,trueDistPc:308.17},{hip:39953,pos:[-124.3,79.6474,-309.0123],mag:1.83,ci:-.162,trueDistPc:342.47},{hip:40526,pos:[-54.8236,80.4972,-17.6775],mag:3.52,ci:1.308,trueDistPc:98.98},{hip:40702,pos:[-2.5063,-4.2209,-18.8582],mag:4.047,ci:.391,trueDistPc:19.49},{hip:40843,pos:[-9.2988,15.4924,2.3677],mag:4.989,ci:.66,trueDistPc:18.22},{hip:41037,pos:[-54.8371,6.6077,-177.1162],mag:1.86,ci:1.13,trueDistPc:185.53},{hip:41075,pos:[-47.908,91.7973,44.178],mag:4.25,ci:1.368,trueDistPc:112.58},{hip:41312,pos:[-7.9524,-2.1564,-32.0566],mag:3.759,ci:1.016,trueDistPc:33.1},{hip:41704,pos:[-16.6279,39.1808,36.024],mag:3.42,ci:.772,trueDistPc:55.76},{hip:42313,pos:[-34.2796,40.4149,-11.6444],mag:4.131,ci:.061,trueDistPc:54.26},{hip:42402,pos:[-73.3756,83.7875,-29.0147],mag:4.43,ci:1.07,trueDistPc:115.09},{hip:42515,pos:[-62.0379,40.5952,-92.0652],mag:3.954,ci:.841,trueDistPc:118.21},{hip:42536,pos:[-54.8027,14.9573,-129.2654],mag:3.63,ci:-.112,trueDistPc:141.2},{hip:42568,pos:[-180.1868,5.2702,-524.7472],mag:4.313,ci:-.061,trueDistPc:554.85},{hip:42799,pos:[-102.1663,112.2635,-38.5527],mag:4.3,ci:-.12,trueDistPc:156.61},{hip:42806,pos:[-32.6313,42.467,2.9853],mag:4.652,ci:.065,trueDistPc:53.64},{hip:42828,pos:[-133.3514,88.2619,-183.4617],mag:3.68,ci:-.103,trueDistPc:243.37},{hip:42911,pos:[-26.2534,32.7438,.0565],mag:3.94,ci:.968,trueDistPc:41.97},{hip:42913,pos:[-9.394,1.8349,-22.7673],mag:17.336,ci:0,trueDistPc:24.7},{hip:43103,pos:[-61.9264,84.1604,19.2272],mag:4.018,ci:.881,trueDistPc:106.24},{hip:43109,pos:[-26.1982,28.7463,-7.6335],mag:3.38,ci:.628,trueDistPc:39.64},{hip:43234,pos:[-63.8752,68.7143,-19.1756],mag:4.337,ci:.026,trueDistPc:95.76},{hip:43409,pos:[-38.6499,26.5963,-44.1988],mag:4.01,ci:1.121,trueDistPc:64.46},{hip:43813,pos:[-32.3285,32.8109,-8.9281],mag:3.1,ci:.9,trueDistPc:46.92},{hip:44066,pos:[-37.5024,39.3242,-4.831],mag:4.249,ci:.168,trueDistPc:54.55},{hip:44127,pos:[-6.8358,10.6072,7.1614],mag:3.14,ci:.211,trueDistPc:14.51},{hip:44248,pos:[-9.9087,14.0072,7.5369],mag:3.96,ci:.415,trueDistPc:18.74},{hip:44382,pos:[-11.0173,-4.1397,-36.6604],mag:3.99,ci:.181,trueDistPc:38.5},{hip:44471,pos:[-53.6678,79.7556,53.2414],mag:3.55,ci:.05,trueDistPc:109.89},{hip:44700,pos:[-123.0848,160.1503,77.1064],mag:4.539,ci:.924,trueDistPc:216.2},{hip:44816,pos:[-88.6625,30.2045,-138.1928],mag:2.21,ci:1.452,trueDistPc:166.94},{hip:45080,pos:[-48.0063,-2.8648,-116.2623],mag:3.4,ci:-.078,trueDistPc:125.82},{hip:45238,pos:[-8.9807,-5.605,-33.0438],mag:1.69,ci:.05,trueDistPc:34.7},{hip:45336,pos:[-27.6832,22.9925,-8.3426],mag:3.881,ci:-.038,trueDistPc:36.94},{hip:45556,pos:[-90.8878,-8.4734,-216.2668],mag:2.26,ci:.203,trueDistPc:234.74},{hip:45688,pos:[-24.7189,28.8699,13.9089],mag:3.92,ci:.084,trueDistPc:40.47},{hip:45860,pos:[-43.1553,48.1947,20.9749],mag:3.14,ci:1.367,trueDistPc:68.01},{hip:45941,pos:[-77.6577,1.5019,-157.3078],mag:2.473,ci:-.077,trueDistPc:175.44},{hip:46390,pos:[-43.0035,27.6298,-21.0495],mag:1.97,ci:1.283,trueDistPc:55.28},{hip:46509,pos:[-14.3879,9.8574,-5.2325],mag:4.6,ci:.441,trueDistPc:18.21},{hip:46651,pos:[-11.3825,3.1056,-14.6555],mag:3.6,ci:.356,trueDistPc:18.81},{hip:46733,pos:[-8.5825,14.3843,16.8491],mag:3.67,ci:.33,trueDistPc:23.76},{hip:46776,pos:[-144.8535,98.6719,-46.8678],mag:4.548,ci:.132,trueDistPc:181.43},{hip:46853,pos:[-6.7267,8.8415,7.7489],mag:3.18,ci:.441,trueDistPc:13.54},{hip:46952,pos:[-37.9239,39.5186,20.7465],mag:4.6,ci:.789,trueDistPc:58.57},{hip:47908,pos:[-53.1957,43.5327,11.7686],mag:2.98,ci:.738,trueDistPc:69.74},{hip:48319,pos:[-15.3314,20.8958,23.8756],mag:3.81,ci:.296,trueDistPc:35.24},{hip:48356,pos:[-62.3608,28.1685,-33.4888],mag:4.11,ci:.832,trueDistPc:76.18},{hip:48402,pos:[-77.6666,94.726,96.6065],mag:4.557,ci:.088,trueDistPc:156.01},{hip:48455,pos:[-29.266,23.3377,8.1949],mag:3.88,ci:1.087,trueDistPc:38.32},{hip:48774,pos:[-261.7202,-27.2611,-454.8571],mag:3.45,ci:-.035,trueDistPc:525.49},{hip:48926,pos:[-23.281,4.7126,-23.3068],mag:5.222,ci:.293,trueDistPc:33.28},{hip:49583,pos:[-469.8671,294.6887,47.2144],mag:3.41,ci:.033,trueDistPc:556.64},{hip:49593,pos:[-19.8267,16.0501,10.3581],mag:4.49,ci:.203,trueDistPc:27.53},{hip:49641,pos:[-115.2754,55.935,-25.174],mag:4.49,ci:.016,trueDistPc:130.58},{hip:49669,pos:[-21.0188,12.2189,.1973],mag:1.4,ci:-.086,trueDistPc:24.31},{hip:49841,pos:[-28.8985,10.8812,-12.4848],mag:3.61,ci:.9,trueDistPc:33.31},{hip:50099,pos:[-36.7994,-28.1756,-111.2454],mag:3.33,ci:-.018,trueDistPc:120.51},{hip:50191,pos:[-21.015,1.1029,-23.5852],mag:3.85,ci:.093,trueDistPc:31.61},{hip:50335,pos:[-58.8396,37.3905,14.6468],mag:3.41,ci:.313,trueDistPc:71.24},{hip:50371,pos:[-100.3964,-36.6914,-206.2573],mag:3.35,ci:1.367,trueDistPc:232.31},{hip:50372,pos:[-45.6298,38.903,34.4596],mag:3.45,ci:.075,trueDistPc:69.16},{hip:50583,pos:[-34.0031,19.9375,6.1126],mag:4,ci:0,trueDistPc:39.89},{hip:50801,pos:[-38.3157,30.7683,27.2368],mag:3.05,ci:1.401,trueDistPc:56.18},{hip:51069,pos:[-65.6572,17.548,-31.2179],mag:3.81,ci:1.308,trueDistPc:74.79},{hip:51172,pos:[-88.3833,11.7289,-68.2345],mag:4.25,ci:1.282,trueDistPc:112.27},{hip:51232,pos:[-226.2193,-72.8357,-409.7547],mag:3.81,ci:.306,trueDistPc:473.69},{hip:51233,pos:[-34.8188,24.7998,19.9929],mag:4.21,ci:.815,trueDistPc:47.19},{hip:51437,pos:[-103.9728,38.8737,-18.2169],mag:5.1,ci:-.069,trueDistPc:112.49},{hip:51839,pos:[-25.0619,-44.1552,-126.1982],mag:4.12,ci:1.393,trueDistPc:136.03},{hip:51986,pos:[-16.6506,-2.1599,-20.7778],mag:3.84,ci:.297,trueDistPc:26.71},{hip:52419,pos:[-56.9809,-31.8317,-123.4754],mag:2.76,ci:-.137,trueDistPc:139.66},{hip:52468,pos:[-210.9756,-90.3264,-392.163],mag:4.545,ci:1.473,trueDistPc:454.38},{hip:52727,pos:[-21.2588,-3.9461,-26.7846],mag:2.69,ci:.815,trueDistPc:34.42},{hip:52943,pos:[-38.472,6.5305,-15.6063],mag:3.11,ci:1.104,trueDistPc:42.03},{hip:53229,pos:[-24.0628,13.4059,12.8043],mag:3.83,ci:.934,trueDistPc:30.38},{hip:53253,pos:[-14.7843,-6.1049,-25.1799],mag:3.79,ci:.857,trueDistPc:29.83},{hip:53740,pos:[-45.0108,4.9776,-18.9584],mag:4.07,ci:.976,trueDistPc:49.09},{hip:53910,pos:[-13.8827,11.8844,18.3598],mag:2.37,ci:.033,trueDistPc:25.9},{hip:54061,pos:[-17.2987,17.1799,28.7282],mag:1.79,ci:.959,trueDistPc:37.68},{hip:54463,pos:[-753.7473,-353.5249,-1247.752],mag:3.83,ci:1.121,trueDistPc:4488.33},{hip:54539,pos:[-29.9706,18.1415,25.0241],mag:3.01,ci:1.019,trueDistPc:43.05},{hip:54682,pos:[-87.4645,2.2069,-41.9903],mag:4.449,ci:.072,trueDistPc:97.05},{hip:54872,pos:[-16.4424,5.5601,4.4351],mag:2.53,ci:.178,trueDistPc:17.91},{hip:54879,pos:[-46.5056,13.8436,8.2717],mag:3.35,ci:.033,trueDistPc:49.22},{hip:55282,pos:[-55.9289,3.2376,-17.7418],mag:3.56,ci:.994,trueDistPc:58.76},{hip:55687,pos:[-118.6607,7.7826,-28.4834],mag:4.802,ci:1.356,trueDistPc:122.28},{hip:55705,pos:[-24.9714,.3338,-8.9254],mag:4.06,ci:.212,trueDistPc:26.52},{hip:56211,pos:[-40.5079,47.7083,97.2675],mag:3.85,ci:1.427,trueDistPc:115.66},{hip:56343,pos:[-33.7888,-4.7415,-20.9895],mag:3.54,ci:.84,trueDistPc:40.06},{hip:56480,pos:[-71.5877,-32.5548,-94.9883],mag:4.607,ci:-.013,trueDistPc:123.32},{hip:56561,pos:[-54.5066,-37.5232,-101.0827],mag:3.14,ci:.016,trueDistPc:120.82},{hip:56633,pos:[-90.3482,2.2218,-18.0651],mag:4.673,ci:-.009,trueDistPc:92.16},{hip:57283,pos:[-99.5711,-7.0841,-33.0066],mag:4.706,ci:.875,trueDistPc:105.14},{hip:57363,pos:[-16.6171,-14.4409,-35.9352],mag:3.65,ci:.186,trueDistPc:42.14},{hip:57380,pos:[-100.7276,10.304,8.1223],mag:4.04,ci:1.325,trueDistPc:101.58},{hip:57399,pos:[-40.8039,20.2019,40.3447],mag:3.72,ci:1.053,trueDistPc:60.83},{hip:57632,pos:[-10.6339,1.567,2.3371],mag:2.13,ci:.126,trueDistPc:11},{hip:57936,pos:[-78.7783,-18.8365,-49.5767],mag:4.28,ci:-.035,trueDistPc:94.97},{hip:58001,pos:[-15.0949,8.5483,18.6951],mag:2.44,ci:.058,trueDistPc:25.5},{hip:58188,pos:[-73.449,-7.8463,-21.3078],mag:5.16,ci:.031,trueDistPc:76.88},{hip:59196,pos:[-110.645,-57.5548,-122.6027],mag:2.52,ci:-.06,trueDistPc:174.89},{hip:59199,pos:[-13.5943,-2.9502,-5.5496],mag:4.01,ci:.322,trueDistPc:14.98},{hip:59316,pos:[-87.011,-17.9643,-31.7652],mag:2.98,ci:1.189,trueDistPc:94.35},{hip:59747,pos:[-72.2168,-51.8257,-107.5222],mag:2.752,ci:-.106,trueDistPc:139.51},{hip:59774,pos:[-13.4629,7.4427,19.4483],mag:3.32,ci:.127,trueDistPc:24.8},{hip:59803,pos:[-44.8059,-8.4869,-11.7944],mag:2.58,ci:-.043,trueDistPc:47.1},{hip:6e4,pos:[-17.2582,-37.7613,-83.6165],mag:4.229,ci:-.056,trueDistPc:93.36},{hip:60030,pos:[-114.5886,-9.2127,2.2725],mag:5.897,ci:.179,trueDistPc:114.98},{hip:60718,pos:[-44.3638,-39.7633,-78.7129],mag:4,ci:0,trueDistPc:98.72},{hip:60742,pos:[-44.0323,4.7134,23.943],mag:4.34,ci:1.01,trueDistPc:50.34},{hip:60823,pos:[-80.1167,-47.6182,-85.0668],mag:3.91,ci:-.112,trueDistPc:126.18},{hip:60965,pos:[-24.9767,-5.9741,-5.5508],mag:2.94,ci:.008,trueDistPc:26.27},{hip:61084,pos:[-14.6068,-10.9033,-20.1241],mag:1.64,ci:1.402,trueDistPc:27.15},{hip:61174,pos:[-17.3484,-4.2661,-3.6967],mag:4.294,ci:.359,trueDistPc:18.24},{hip:61199,pos:[-35.3119,-48.6353,-99.5178],mag:3.88,ci:-.078,trueDistPc:116.26},{hip:61281,pos:[-48.7653,46.672,125.689],mag:3.89,ci:-.069,trueDistPc:142.67},{hip:61317,pos:[-6.2908,1.3709,5.5075],mag:4.25,ci:.569,trueDistPc:8.47},{hip:61359,pos:[-41.2393,-12.8982,-14.0768],mag:2.64,ci:.798,trueDistPc:45.44},{hip:61585,pos:[-33.9923,-41.0519,-80.6996],mag:2.649,ci:-.09,trueDistPc:96.71},{hip:61932,pos:[-25.7719,-16.3031,-25.7365],mag:2.17,ci:.042,trueDistPc:39.9},{hip:61941,pos:[-11.8183,-2.114,.5851],mag:2.74,ci:.356,trueDistPc:12.02},{hip:62322,pos:[-38.2492,-45.8329,-86.0288],mag:3.549,ci:-.158,trueDistPc:104.71},{hip:62434,pos:[-42.1687,-37.4997,-64.0955],mag:1.25,ci:-.146,trueDistPc:85.4},{hip:62956,pos:[-13.776,5.3065,20.5587],mag:1.77,ci:.033,trueDistPc:25.31},{hip:63090,pos:[-55.6692,-11.2865,8.6041],mag:3.38,ci:1.401,trueDistPc:57.45},{hip:63125,pos:[-23.2636,2.2127,19.6929],mag:2.88,ci:-.052,trueDistPc:30.56},{hip:63608,pos:[-31.3083,-5.4868,9.2375],mag:2.79,ci:.832,trueDistPc:33.1},{hip:64166,pos:[-62.6009,-28.9811,-17.9378],mag:4.934,ci:.939,trueDistPc:71.28},{hip:64241,pos:[-16.2111,-2.5531,6.9587],mag:4.32,ci:.432,trueDistPc:17.83},{hip:64394,pos:[-7.7336,-.5904,4.9435],mag:4.25,ci:.552,trueDistPc:9.2},{hip:64962,pos:[-33.8976,-17.2853,-9.3057],mag:3,ci:.832,trueDistPc:39.17},{hip:65109,pos:[-13.4253,-8.7615,-7.8246],mag:2.73,ci:.075,trueDistPc:17.84},{hip:65378,pos:[-14.1158,3.598,21.9079],mag:2.283,ci:.534,trueDistPc:26.31},{hip:65474,pos:[-69.9908,-30.93,-2.745],mag:.97,ci:-.146,trueDistPc:76.57},{hip:65936,pos:[-197.912,-146.3289,-128.7601],mag:3.88,ci:1.036,trueDistPc:277.78},{hip:66249,pos:[-20.9342,-8.515,3.4326],mag:3.38,ci:.152,trueDistPc:22.86},{hip:66657,pos:[-70.7265,-72.1096,-83.5171],mag:2.3,ci:-.137,trueDistPc:131.06},{hip:67301,pos:[-18.5296,.9928,25.9075],mag:1.86,ci:-.112,trueDistPc:31.87},{hip:67459,pos:[-63.6617,-22.1686,31.7177],mag:4.07,ci:1.342,trueDistPc:74.5},{hip:67464,pos:[-82.403,-72.0222,-58.8494],mag:3.386,ci:-.118,trueDistPc:124.26},{hip:67472,pos:[-89.3716,-79.17,-66.1252],mag:3.43,ci:-.086,trueDistPc:136.48},{hip:67927,pos:[-9.4877,-3.3293,5.3636],mag:2.68,ci:.534,trueDistPc:11.4},{hip:68002,pos:[-69.5458,-69.426,-63.678],mag:2.55,ci:-.137,trueDistPc:117.1},{hip:68282,pos:[-80.7998,-78.9698,-66.4252],mag:3.87,ci:-.12,trueDistPc:131.06},{hip:68520,pos:[-59.9382,-31.5333,15.7139],mag:4.237,ci:.13,trueDistPc:69.53},{hip:68702,pos:[-50.954,-69.6001,-83.7001],mag:.58,ci:0,trueDistPc:120.19},{hip:68756,pos:[-29.5884,12.2824,73.1965],mag:3.68,ci:.016,trueDistPc:79.9},{hip:68933,pos:[-12.3588,-11.249,-6.7791],mag:2.05,ci:.892,trueDistPc:18.03},{hip:69427,pos:[-71.0336,-48.8086,4.3856],mag:4.21,ci:1.172,trueDistPc:86.3},{hip:69673,pos:[-8.8234,-3.9716,5.7535],mag:-.05,ci:1.095,trueDistPc:11.26},{hip:69701,pos:[-18.1594,-12.1553,2.7604],mag:4.08,ci:.492,trueDistPc:22.03},{hip:70576,pos:[-55.2161,-65.2512,-47.619],mag:4.35,ci:.399,trueDistPc:97.85},{hip:70638,pos:[-8.1315,-41.9358,-81.4718],mag:4.304,ci:1.164,trueDistPc:91.99},{hip:71053,pos:[-34.2615,-14.3923,33.9949],mag:3.59,ci:1.155,trueDistPc:50.37},{hip:71075,pos:[-16.3054,-5.1922,20.0723],mag:3.02,ci:.212,trueDistPc:26.38},{hip:71352,pos:[-54.0862,-65.0289,-40.367],mag:2.31,ci:-.112,trueDistPc:93.72},{hip:71536,pos:[-53.709,-72.8998,-56.9525],mag:4.05,ci:-.078,trueDistPc:106.97},{hip:71683,pos:[-.5038,-.8545,-.912],mag:.01,ci:.654,trueDistPc:1.35},{hip:71795,pos:[-39.9256,-25.9652,25.1939],mag:3.78,ci:.092,trueDistPc:53.88},{hip:71860,pos:[-73.3549,-99.1471,-71.2808],mag:2.286,ci:-.086,trueDistPc:142.45},{hip:71908,pos:[-5.2638,-10.0527,-11.834],mag:3.19,ci:.254,trueDistPc:16.4},{hip:71957,pos:[-14.4439,-12.1763,3.2197],mag:3.88,ci:.373,trueDistPc:19.16},{hip:72105,pos:[-48.4197,-25.8606,47.0903],mag:2.45,ci:1.036,trueDistPc:72.32},{hip:72220,pos:[-30.7984,-24.5133,12.1105],mag:3.73,ci:.042,trueDistPc:41.18},{hip:72370,pos:[-21.5704,-77.4122,-129.7857],mag:3.798,ci:1.282,trueDistPc:152.65},{hip:72607,pos:[-8.0581,8.5453,38.3879],mag:2.08,ci:1.3,trueDistPc:40.14},{hip:72622,pos:[-16.4089,-16.4563,.1351],mag:2.75,ci:.178,trueDistPc:23.24},{hip:73273,pos:[-60.952,-87.131,-49.6887],mag:2.68,ci:-.137,trueDistPc:117.37},{hip:73334,pos:[-61.8728,-87.6931,-47.8539],mag:3.11,ci:-.103,trueDistPc:117.51},{hip:73555,pos:[-38.4761,-17.3327,58.4063],mag:3.52,ci:.857,trueDistPc:72.06},{hip:73714,pos:[-50.0788,-61.1565,-10.6092],mag:3.21,ci:1.495,trueDistPc:79.75},{hip:74395,pos:[-14.2717,-25.4918,-18.8505],mag:3.41,ci:.832,trueDistPc:34.77},{hip:74666,pos:[-20.2999,-13.2624,27.8606],mag:3.49,ci:.858,trueDistPc:36.93},{hip:74785,pos:[-36.5496,-42.6005,8.3847],mag:2.62,ci:-.043,trueDistPc:56.75},{hip:74824,pos:[-9.9719,-20.7267,-18.5802],mag:4.057,ci:.132,trueDistPc:29.57},{hip:74946,pos:[-13.6797,-36.3816,-43.324],mag:2.89,ci:.05,trueDistPc:58.2},{hip:75097,pos:[-30.2676,23.9914,146.6072],mag:3.002,ci:.105,trueDistPc:151.61},{hip:75141,pos:[-71.953,-118.1412,-54.2822],mag:3.19,ci:-.116,trueDistPc:148.6},{hip:75177,pos:[-44.026,-69.0913,-25.3264],mag:3.546,ci:1.351,trueDistPc:85.75},{hip:75323,pos:[-44.3157,-96.9883,-86.8897],mag:5.158,ci:.457,trueDistPc:137.55},{hip:75458,pos:[-9.9255,-.8596,29.0878],mag:3.29,ci:1.036,trueDistPc:30.75},{hip:75695,pos:[-19.2809,-15.6786,25.7826],mag:3.68,ci:.296,trueDistPc:35.81},{hip:76127,pos:[-58.8185,-48.4007,86.2553],mag:4.13,ci:-.061,trueDistPc:115.07},{hip:76267,pos:[-12.5275,-11.3975,16.5411],mag:2.24,ci:.033,trueDistPc:23.67},{hip:76276,pos:[-40.7006,-45.7484,33.7751],mag:4.084,ci:.375,trueDistPc:69.93},{hip:76297,pos:[-57.3888,-105.688,-46.7536],mag:2.765,ci:-.102,trueDistPc:129.03},{hip:76333,pos:[-28.1316,-40.3829,3.7748],mag:3.91,ci:.917,trueDistPc:49.36},{hip:76552,pos:[-27.9733,-53.6042,-25.0001],mag:4.33,ci:1.257,trueDistPc:65.43},{hip:76952,pos:[-22.6331,-22.5333,31.3926],mag:4.016,ci:.064,trueDistPc:44.78},{hip:77055,pos:[-13.0114,25.0968,106.4083],mag:4.274,ci:.086,trueDistPc:110.1},{hip:77070,pos:[-12.623,-16.2004,9.7995],mag:2.63,ci:1.044,trueDistPc:22.76},{hip:77233,pos:[-24.6108,-29.2765,26.1162],mag:3.67,ci:.101,trueDistPc:46.31},{hip:77450,pos:[-60.4229,-71.4399,70.7907],mag:4.09,ci:1.427,trueDistPc:117.33},{hip:77512,pos:[-24.824,-26.6454,36.119],mag:4.63,ci:.73,trueDistPc:51.29},{hip:77516,pos:[-27.9632,-41.3621,14.5414],mag:3.53,ci:.016,trueDistPc:52},{hip:77622,pos:[-11.7509,-16.3719,8.9753],mag:3.693,ci:.178,trueDistPc:22.06},{hip:77634,pos:[-27.9456,-54.4712,-14.3364],mag:3.946,ci:.019,trueDistPc:62.88},{hip:77760,pos:[-6.1866,-4.8752,13.8091],mag:4.62,ci:.535,trueDistPc:15.9},{hip:77853,pos:[-25.7207,-44.3214,3.1089],mag:4.16,ci:.909,trueDistPc:51.34},{hip:77952,pos:[-2.88,-8.7809,-8.305],mag:2.85,ci:.297,trueDistPc:12.42},{hip:78072,pos:[-5.5187,-7.2657,6.4352],mag:3.84,ci:.475,trueDistPc:11.17},{hip:78159,pos:[-33.6559,-38.878,53.3769],mag:4.13,ci:1.096,trueDistPc:74.12},{hip:78265,pos:[-81.3015,-159.1502,-17.1307],mag:2.91,ci:-.12,trueDistPc:179.53},{hip:78384,pos:[-51.5529,-114.5577,-39.4755],mag:3.41,ci:-.137,trueDistPc:131.68},{hip:78401,pos:[-69.3327,-133.592,-5.2193],mag:2.32,ci:-.052,trueDistPc:150.6},{hip:78493,pos:[-48.9075,-56.2868,86.2628],mag:4.971,ci:.007,trueDistPc:114.02},{hip:78527,pos:[-5.5316,-1.656,20.7318],mag:4,ci:.492,trueDistPc:21.52},{hip:78639,pos:[-22.8247,-59.061,-33.5391],mag:4.643,ci:.837,trueDistPc:71.65},{hip:78820,pos:[-55.8814,-110.5786,2.1794],mag:2.62,ci:-.009,trueDistPc:123.92},{hip:78970,pos:[-24.7463,-57.9416,-17.5342],mag:5.7,ci:.314,trueDistPc:65.4},{hip:79509,pos:[-37.2581,-114.7513,-77.8772],mag:4.94,ci:.934,trueDistPc:143.6},{hip:79822,pos:[-3.1842,5.4457,29.2506],mag:4.847,ci:.52,trueDistPc:29.92},{hip:79882,pos:[-14.0202,-28.1325,9.2747],mag:3.23,ci:.883,trueDistPc:32.77},{hip:79992,pos:[-28.7935,-28.1814,89.7737],mag:3.87,ci:-.069,trueDistPc:98.4},{hip:8e4,pos:[-11.5053,-35.5538,-20.0903],mag:4.02,ci:.968,trueDistPc:42.43},{hip:80170,pos:[-23.2428,-39.0126,38.1153],mag:3.76,ci:.28,trueDistPc:59.29},{hip:80331,pos:[-5.4318,-1.4035,27.4306],mag:2.74,ci:.824,trueDistPc:28},{hip:80582,pos:[-50.7556,-164.6565,-82.1327],mag:4.521,ci:-.02,trueDistPc:190.88},{hip:80763,pos:[-58.5426,-158.7916,-13.5274],mag:.91,ci:1.614,trueDistPc:169.78},{hip:80816,pos:[-16.1463,-29.2384,30.8236],mag:2.77,ci:.841,trueDistPc:45.45},{hip:81065,pos:[-3.3331,-26.0318,-38.9192],mag:3.854,ci:.84,trueDistPc:46.94},{hip:81126,pos:[-24.8873,-33.3184,82.1929],mag:4.196,ci:.034,trueDistPc:92.11},{hip:81266,pos:[-45.96,-137.0175,-15.4969],mag:2.81,ci:-.162,trueDistPc:145.35},{hip:81377,pos:[-46.9232,-123.7161,26.6587],mag:2.56,ci:.067,trueDistPc:134.97},{hip:81693,pos:[-3.0733,-5.6509,8.5704],mag:2.8,ci:.586,trueDistPc:10.72},{hip:81833,pos:[-8.7777,-14.4867,29.6841],mag:3.5,ci:.832,trueDistPc:34.18},{hip:81852,pos:[-3.3976,-27.4711,-38.8773],mag:4.24,ci:.951,trueDistPc:47.72},{hip:82080,pos:[-4.458,27.7195,97.4168],mag:4.212,ci:.812,trueDistPc:101.38},{hip:82273,pos:[-13.1274,-81.9196,-86.368],mag:1.88,ci:1.282,trueDistPc:119.76},{hip:82363,pos:[-14.5007,-73.9396,-55.3009],mag:3.744,ci:1.378,trueDistPc:93.46},{hip:82396,pos:[-4.8422,-18.5034,-3.9743],mag:2.29,ci:1.036,trueDistPc:19.54},{hip:82514,pos:[-123.1415,-499.6708,-141.9741],mag:2.98,ci:-.086,trueDistPc:533.85},{hip:82671,pos:[-314.8104,-1377.0533,-504.5975],mag:4.79,ci:.492,trueDistPc:1707.94},{hip:83e3,pos:[-7.1417,-21.7489,14.2133],mag:3.2,ci:1.036,trueDistPc:26.95},{hip:83081,pos:[-25.6417,-142.8531,-94.5829],mag:3.076,ci:1.431,trueDistPc:173.24},{hip:83207,pos:[-11.1807,-28.1346,40.5404],mag:3.92,ci:.042,trueDistPc:50.6},{hip:83895,pos:[-11.644,-.6878,127.2227],mag:3.17,ci:-.044,trueDistPc:127.76},{hip:84012,pos:[-5.6025,-26.2891,3.3946],mag:2.42,ci:.092,trueDistPc:27.09},{hip:84143,pos:[-3.3876,-20.7841,-7.7411],mag:3.33,ci:.399,trueDistPc:22.44},{hip:84345,pos:[-20.9956,-85.1703,66.7912],mag:5.239,ci:.942,trueDistPc:110.25},{hip:84379,pos:[-4.0755,-14.9628,17.0344],mag:3.13,ci:.118,trueDistPc:23.04},{hip:84380,pos:[-17.5337,-54.1802,96.8726],mag:3.18,ci:1.266,trueDistPc:112.37},{hip:84606,pos:[-7.832,-25.5433,46.4738],mag:4.65,ci:.092,trueDistPc:53.61},{hip:84880,pos:[-10.3778,-60.6981,11.1499],mag:4.324,ci:.081,trueDistPc:62.58},{hip:85112,pos:[-15.1731,-58.1382,104.5976],mag:4.17,ci:.05,trueDistPc:120.63},{hip:85258,pos:[-18.7203,-184.4846,-117.0666],mag:2.85,ci:1.291,trueDistPc:219.29},{hip:85267,pos:[-28.4271,-284.4624,-186.4313],mag:3.34,ci:-.06,trueDistPc:341.3},{hip:85670,pos:[-9.1693,-28.1642,112.7237],mag:2.81,ci:.883,trueDistPc:116.55},{hip:85693,pos:[-13.7849,-77.4121,91.3958],mag:4.41,ci:1.274,trueDistPc:120.56},{hip:85727,pos:[-4.2562,-54.7725,-41.9361],mag:3.62,ci:-.035,trueDistPc:69.11},{hip:85755,pos:[-14.2921,-124.902,-1.5034],mag:4.81,ci:.05,trueDistPc:125.73},{hip:85792,pos:[-6.4738,-73.0302,-36.6511],mag:2.95,ci:-.095,trueDistPc:81.97},{hip:85822,pos:[-.4027,19.1745,52.5366],mag:4.336,ci:.076,trueDistPc:55.93},{hip:85829,pos:[-2.0629,-5.7937,29.2846],mag:4.792,ci:.395,trueDistPc:29.92},{hip:85927,pos:[-16.0486,-169.3256,-41.7404],mag:1.63,ci:-.069,trueDistPc:175.13},{hip:86032,pos:[-1.5871,-11.9719,8.7212],mag:2.07,ci:.178,trueDistPc:14.9},{hip:86228,pos:[-6.6541,-86.4656,-30.957],mag:1.85,ci:.424,trueDistPc:92.08},{hip:86263,pos:[-2.8628,-29.9835,4.1981],mag:3.519,ci:.279,trueDistPc:30.41},{hip:86414,pos:[-9.5388,-53.4923,143.535],mag:3.8,ci:-.094,trueDistPc:153.48},{hip:86565,pos:[-3.8584,-47.8886,8.8955],mag:4.228,ci:.12,trueDistPc:48.86},{hip:86670,pos:[-8.7851,-142.3891,-39.9504],mag:2.386,ci:-.099,trueDistPc:148.15},{hip:86742,pos:[-1.8309,-22.4459,11.944],mag:2.75,ci:1.053,trueDistPc:25.49},{hip:86929,pos:[-2.9963,-84.6765,-74.4621],mag:3.581,ci:1.06,trueDistPc:112.8},{hip:86974,pos:[-.4359,-5.2177,6.4898],mag:3.42,ci:.688,trueDistPc:8.34},{hip:87072,pos:[-17.0995,-354.945,-27.4759],mag:4.54,ci:.73,trueDistPc:356.42},{hip:87073,pos:[-29.2027,-674.9347,-202.8647],mag:2.992,ci:.475,trueDistPc:705.37},{hip:87585,pos:[-.5309,-5.784,33.9175],mag:3.75,ci:1.053,trueDistPc:34.41},{hip:87808,pos:[-3.1738,-119.3697,212.6579],mag:3.88,ci:1.197,trueDistPc:243.89},{hip:87833,pos:[-.4362,-12.2974,45.6752],mag:2.23,ci:1.35,trueDistPc:47.3},{hip:87933,pos:[-.3567,-25.4095,33.3406],mag:3.7,ci:.849,trueDistPc:41.92},{hip:88635,pos:[.6771,-30.751,-3.7718],mag:2.99,ci:.908,trueDistPc:30.99},{hip:88714,pos:[6.298,-303.1895,-152.2499],mag:3.66,ci:-.018,trueDistPc:339.33},{hip:88794,pos:[3.0854,-65.5115,84.5021],mag:3.827,ci:.029,trueDistPc:106.97},{hip:88866,pos:[.6815,-31.3271,-26.5159],mag:4.328,ci:.256,trueDistPc:41.05},{hip:89341,pos:[84.0149,-1496.3903,61.2983],mag:3.85,ci:.237,trueDistPc:11111.11},{hip:89642,pos:[2.5771,-40.6481,-9.6866],mag:3.11,ci:1.376,trueDistPc:41.87},{hip:89931,pos:[10.1133,-126.2238,-14.3653],mag:2.668,ci:1.241,trueDistPc:127.44},{hip:89937,pos:[.2194,.8755,8.0067],mag:3.58,ci:.467,trueDistPc:8.06},{hip:89962,pos:[1.7683,-17.7811,6.658],mag:3.25,ci:.849,trueDistPc:19.07},{hip:90098,pos:[10.9638,-178.2831,-140.1845],mag:4.367,ci:1.297,trueDistPc:227.06},{hip:90185,pos:[3.8172,-42.9526,-8.4225],mag:1.81,ci:.059,trueDistPc:43.94},{hip:90422,pos:[6.9938,-78.775,-32.9974],mag:3.463,ci:-.089,trueDistPc:85.69},{hip:90496,pos:[2.5619,-23.1417,-.8682],mag:2.81,ci:.934,trueDistPc:23.3},{hip:90568,pos:[3.0787,-33.5918,-16.2795],mag:4.11,ci:.908,trueDistPc:37.46},{hip:90595,pos:[11.8673,-94.656,14.5852],mag:4.675,ci:.104,trueDistPc:96.51},{hip:90887,pos:[7.4289,-65.3959,-19.4289],mag:5.155,ci:.116,trueDistPc:68.62},{hip:91117,pos:[8.558,-53.9324,14.5504],mag:3.83,ci:1.189,trueDistPc:56.51},{hip:91262,pos:[.9606,-3.5074,6.763],mag:.03,ci:.05,trueDistPc:7.68},{hip:91792,pos:[3.9246,-43.839,-49.1925],mag:4.003,ci:1.015,trueDistPc:66.01},{hip:91875,pos:[9.3381,-59.7635,-16.4582],mag:5.111,ci:.109,trueDistPc:62.69},{hip:91971,pos:[7.4425,-22.7605,42.0555],mag:4.36,ci:.212,trueDistPc:48.4},{hip:92041,pos:[14.5077,-80.7811,-5.673],mag:3.14,ci:-.027,trueDistPc:82.27},{hip:92175,pos:[41.9547,-191.1382,64.2861],mag:4.22,ci:.977,trueDistPc:205.98},{hip:92202,pos:[80.7398,-368.0157,116.8143],mag:5.2,ci:1.3,trueDistPc:394.46},{hip:92420,pos:[50.3185,-147.1049,230.3604],mag:3.42,ci:.05,trueDistPc:277.92},{hip:92609,pos:[35.4532,-258.6422,-212.1701],mag:4.207,ci:-.085,trueDistPc:336.41},{hip:92791,pos:[44.4839,-111.9741,203.0614],mag:4.3,ci:1.469,trueDistPc:236.12},{hip:92814,pos:[128.9211,-546.5219,71.0179],mag:5.086,ci:.154,trueDistPc:566},{hip:92855,pos:[14.9509,-68.0836,-4.2018],mag:2.067,ci:-.072,trueDistPc:69.83},{hip:92946,pos:[9.9795,-35.372,18.6275],mag:4.57,ci:.194,trueDistPc:41.2},{hip:92953,pos:[17.2022,-88.9519,-32.6261],mag:5.346,ci:.896,trueDistPc:96.3},{hip:92989,pos:[28.4394,-138.6164,-36.5229],mag:5.38,ci:-.069,trueDistPc:146.14},{hip:93015,pos:[18.1454,-135.5407,-132.8475],mag:4.4,ci:.628,trueDistPc:190.65},{hip:93085,pos:[27.6505,-115.6067,3.4474],mag:3.51,ci:1.053,trueDistPc:118.92},{hip:93174,pos:[6.3541,-29.7969,-7.7543],mag:4.85,ci:.381,trueDistPc:31.44},{hip:93194,pos:[43.1117,-107.1229,164.9915],mag:3.25,ci:.008,trueDistPc:201.39},{hip:93244,pos:[13.6609,-41.3987,33.5326],mag:4.02,ci:.968,trueDistPc:55},{hip:93506,pos:[6.3263,-26.0731,-3.3793],mag:2.59,ci:.135,trueDistPc:27.04},{hip:93542,pos:[11.0854,-50.6433,-18.1852],mag:4.725,ci:.03,trueDistPc:54.94},{hip:93683,pos:[10.8638,-40.5611,.6303],mag:3.77,ci:.9,trueDistPc:42},{hip:93747,pos:[7.1495,-19.8628,15.4423],mag:2.99,ci:.058,trueDistPc:26.16},{hip:93805,pos:[11.0769,-35.4934,11.7702],mag:3.43,ci:-.027,trueDistPc:39},{hip:93825,pos:[3.9459,-16.2888,-4.305],mag:4.21,ci:.492,trueDistPc:17.3},{hip:93864,pos:[9.0049,-33.9999,-3.1321],mag:3.31,ci:1.07,trueDistPc:35.31},{hip:94005,pos:[12.6537,-52.3957,-17.3677],mag:4.571,ci:.979,trueDistPc:56.63},{hip:94114,pos:[8.695,-34.5275,-9.7496],mag:4.087,ci:.1,trueDistPc:36.92},{hip:94160,pos:[39.6721,-158.3879,-49.1491],mag:4.095,ci:1.058,trueDistPc:170.52},{hip:94376,pos:[3.548,1.0957,29.7543],mag:3.07,ci:.9,trueDistPc:29.99},{hip:94648,pos:[4.2781,6.1118,45.5324],mag:4.45,ci:1.113,trueDistPc:46.14},{hip:94779,pos:[7.4369,-7.4581,36.258],mag:3.76,ci:.875,trueDistPc:37.76},{hip:94820,pos:[46.3737,-139.8233,8.3872],mag:4.878,ci:.914,trueDistPc:147.55},{hip:95168,pos:[13.2826,-37.6132,2.9461],mag:3.93,ci:.237,trueDistPc:40},{hip:95294,pos:[10.7884,-38.0485,-16.3792],mag:4.27,ci:.331,trueDistPc:42.81},{hip:95347,pos:[15.0028,-50.2112,-17.4126],mag:3.943,ci:-.037,trueDistPc:55.22},{hip:95501,pos:[5.6501,-12.9095,6.5164],mag:3.36,ci:.322,trueDistPc:15.53},{hip:95771,pos:[30.5619,-54.0014,63.9373],mag:4.45,ci:1.325,trueDistPc:89.1},{hip:95853,pos:[8.8709,-7.9962,35.5925],mag:3.755,ci:.172,trueDistPc:37.54},{hip:95947,pos:[37.92,-62.4863,83.9872],mag:3.08,ci:1.011,trueDistPc:111.34},{hip:96406,pos:[29.9985,-75.2999,-4.3501],mag:5.64,ci:.194,trueDistPc:81.17},{hip:96757,pos:[52.6849,-87.4353,82.0529],mag:4.38,ci:.713,trueDistPc:130.97},{hip:96837,pos:[55.1846,-91.0992,83.8698],mag:4.38,ci:.942,trueDistPc:135.57},{hip:97165,pos:[14.7517,-14.122,42.6501],mag:2.87,ci:.033,trueDistPc:47.29},{hip:97278,pos:[78.6348,-131.1868,92.7883],mag:2.72,ci:1.333,trueDistPc:178.89},{hip:97365,pos:[71.7541,-108.8736,105.2616],mag:3.81,ci:1.163,trueDistPc:167.58},{hip:97433,pos:[7.1993,4.6209,46.1133],mag:3.91,ci:.832,trueDistPc:46.9},{hip:97649,pos:[2.3556,-3.8027,2.5106],mag:.76,ci:.237,trueDistPc:5.13},{hip:97804,pos:[128.3452,-218.4644,99.9262],mag:3.8,ci:.739,trueDistPc:272.37},{hip:98032,pos:[22.1462,-53.3168,-21.7686],mag:4.13,ci:.968,trueDistPc:61.7},{hip:98036,pos:[6.5172,-10.2601,6.1024],mag:3.71,ci:.772,trueDistPc:13.6},{hip:98110,pos:[16.8881,-18.1559,34.475],mag:3.88,ci:.925,trueDistPc:42.47},{hip:98337,pos:[41.1827,-54.5649,55.7351],mag:3.47,ci:1.384,trueDistPc:88.2},{hip:98412,pos:[83.784,-180.7447,-51.0979],mag:4.37,ci:-.078,trueDistPc:205.67},{hip:98495,pos:[4.7215,-19.6216,-24.8212],mag:3.94,ci:.039,trueDistPc:31.99},{hip:98543,pos:[33.1894,-38.3825,54.3975],mag:4.651,ci:.201,trueDistPc:74.39},{hip:98688,pos:[62.1268,-121.5851,-17.0218],mag:4.58,ci:1.453,trueDistPc:137.6},{hip:98920,pos:[23.3894,-28.7921,30.3398],mag:5.093,ci:.939,trueDistPc:47.92},{hip:99240,pos:[1.3118,-4.1322,-4.2901],mag:3.56,ci:.696,trueDistPc:6.1},{hip:99473,pos:[37.9878,-54.4269,22.5018],mag:3.22,ci:-.009,trueDistPc:70.08},{hip:100064,pos:[18.4888,-27.5573,4.0335],mag:3.58,ci:.841,trueDistPc:33.43},{hip:100345,pos:[66.4654,-98.3635,9.5278],mag:3.08,ci:.721,trueDistPc:119.1},{hip:100453,pos:[249.3182,-175.6044,471.8265],mag:2.23,ci:.62,trueDistPc:561.8},{hip:100751,pos:[17.8502,-40.4385,-32.4319],mag:1.918,ci:-.058,trueDistPc:54.82},{hip:101421,pos:[68.1781,-70.4501,54.5072],mag:4.03,ci:-.061,trueDistPc:112.17},{hip:101769,pos:[18.9942,-18.125,16.3534],mag:3.63,ci:.424,trueDistPc:30.93},{hip:101772,pos:[13.0838,-23.5029,-14.1546],mag:3.11,ci:.9,trueDistPc:30.4},{hip:101958,pos:[44.9383,-41.351,39.6923],mag:3.8,ci:-.001,trueDistPc:72.83},{hip:102098,pos:[197.2507,-90.6034,374.5477],mag:1.25,ci:.127,trueDistPc:432.9},{hip:102281,pos:[42.7417,-38.328,35.7952],mag:4.417,ci:.291,trueDistPc:67.65},{hip:102395,pos:[11.1754,-26.9876,-30.1999],mag:3.408,ci:.194,trueDistPc:42.01},{hip:102485,pos:[8.7725,-11.5746,-1.7906],mag:4.122,ci:.404,trueDistPc:14.63},{hip:102488,pos:[12.7406,-8.0401,17.591],mag:2.48,ci:.934,trueDistPc:23.16},{hip:102532,pos:[22.6976,-19.4758,19.2023],mag:4.25,ci:.909,trueDistPc:35.54},{hip:102618,pos:[49.3137,-55.3034,10.5198],mag:3.77,ci:.05,trueDistPc:74.84},{hip:102831,pos:[68.0483,-94.958,-32.279],mag:4.89,ci:.891,trueDistPc:121.2},{hip:102978,pos:[103.0256,-132.0592,-26.4166],mag:4.12,ci:1.436,trueDistPc:169.56},{hip:103227,pos:[64.0614,-121.577,-111.9073],mag:3.65,ci:1.113,trueDistPc:177.22},{hip:103738,pos:[46.8788,-59.0796,-19.737],mag:4.654,ci:.794,trueDistPc:77.96},{hip:104139,pos:[31.6212,-32.9238,-.4668],mag:4.07,ci:.041,trueDistPc:45.65},{hip:104521,pos:[25.7325,-19.0916,15.0658],mag:4.68,ci:.271,trueDistPc:35.41},{hip:104732,pos:[29.5449,-15.027,31.6699],mag:3.21,ci:.891,trueDistPc:45.84},{hip:104858,pos:[13.6611,-9.7643,7.7349],mag:4.49,ci:.475,trueDistPc:18.49},{hip:104987,pos:[43.6692,-32.7672,20.0028],mag:3.933,ci:.486,trueDistPc:58.14},{hip:105140,pos:[33.345,-37.119,-13.9804],mag:4.708,ci:.104,trueDistPc:51.82},{hip:105199,pos:[5.2761,1.1966,14.0307],mag:2.46,ci:.237,trueDistPc:15.04},{hip:105319,pos:[13.7948,-20.2998,-17.6879],mag:4.483,ci:.184,trueDistPc:30.25},{hip:105515,pos:[45.6168,-41.5341,-1.472],mag:4.27,ci:.823,trueDistPc:61.71},{hip:105570,pos:[75.6174,-52.0966,35.3034],mag:5.148,ci:.101,trueDistPc:98.38},{hip:105858,pos:[3.0248,-5.5463,-6.7681],mag:4.22,ci:.458,trueDistPc:9.26},{hip:105881,pos:[98.3802,-91.9438,-16.5121],mag:3.74,ci:.908,trueDistPc:135.66},{hip:106032,pos:[55.2195,39.455,198.82],mag:3.23,ci:-.137,trueDistPc:210.08},{hip:106278,pos:[132.8872,-98.7085,25.0794],mag:2.89,ci:.747,trueDistPc:167.43},{hip:106985,pos:[41.0902,-32.3455,-2.3356],mag:3.67,ci:.313,trueDistPc:52.35},{hip:107089,pos:[3.4869,-9.7445,-16.4217],mag:3.728,ci:.914,trueDistPc:19.41},{hip:107310,pos:[16.0811,-5.7084,14.0653],mag:4.621,ci:.634,trueDistPc:22.11},{hip:107315,pos:[172.7699,-92.309,79.5396],mag:2.39,ci:1.342,trueDistPc:211.42},{hip:107354,pos:[25.6259,-9.8707,20.4232],mag:4.135,ci:.405,trueDistPc:34.22},{hip:107556,pos:[9.5345,-7.0442,-.5387],mag:2.83,ci:.296,trueDistPc:11.87},{hip:107608,pos:[70.7783,-62.3824,-28.0426],mag:5.017,ci:.085,trueDistPc:98.43},{hip:108085,pos:[38.0468,-34.9622,-21.9867],mag:3.01,ci:-.052,trueDistPc:56.15},{hip:108661,pos:[191.2311,-147.9429,-66.0095],mag:5.751,ci:-.055,trueDistPc:250.63},{hip:109074,pos:[177.6209,-89.1303,37.4123],mag:2.94,ci:.866,trueDistPc:202.22},{hip:109111,pos:[51.7954,-45.1215,-33.4588],mag:4.458,ci:1.227,trueDistPc:76.41},{hip:109139,pos:[55.123,-33.4891,-2.3436],mag:4.27,ci:-.01,trueDistPc:64.54},{hip:109176,pos:[9.477,-2.6445,6.7006],mag:3.77,ci:.415,trueDistPc:11.9},{hip:109268,pos:[18.6725,-18.0905,-16.8278],mag:1.71,ci:-.06,trueDistPc:30.97},{hip:109352,pos:[65.6747,-12.3394,58.1956],mag:5.582,ci:.883,trueDistPc:88.61},{hip:109422,pos:[13.8055,-10.5335,-6.2569],mag:4.92,ci:.458,trueDistPc:18.46},{hip:109427,pos:[23.9945,-10.2677,7.652],mag:3.55,ci:.109,trueDistPc:27.2},{hip:109492,pos:[142.0305,35.3143,265.6382],mag:3.35,ci:1.368,trueDistPc:303.29},{hip:109937,pos:[147.7162,-15.5039,145.4224],mag:4.15,ci:1.291,trueDistPc:207.87},{hip:110003,pos:[52.2016,-26.2964,2.7635],mag:4.16,ci:.892,trueDistPc:58.52},{hip:110130,pos:[25.2765,-30.4766,-40.1566],mag:2.82,ci:1.206,trueDistPc:56.39},{hip:110395,pos:[35.1602,-15.1322,5.54],mag:3.834,ci:.013,trueDistPc:38.68},{hip:110538,pos:[28.9654,4.3973,42.7307],mag:4.44,ci:.917,trueDistPc:51.81},{hip:110609,pos:[469.4853,48.2931,633.6963],mag:4.58,ci:.127,trueDistPc:790.14},{hip:110960,pos:[25.9695,-10.0158,4.3317],mag:3.65,ci:.398,trueDistPc:28.17},{hip:110997,pos:[66.9447,-53.055,-52.0325],mag:3.97,ci:.925,trueDistPc:100.02},{hip:111022,pos:[418.6354,38.2838,526.7646],mag:4.37,ci:1.478,trueDistPc:673.95},{hip:111104,pos:[237.9234,5.9789,260.0552],mag:4.511,ci:-.044,trueDistPc:352.52},{hip:111123,pos:[57.4381,-26.3118,-1.3543],mag:4.81,ci:-.018,trueDistPc:63.19},{hip:111169,pos:[18.7885,2.6884,25.4547],mag:3.77,ci:.058,trueDistPc:31.75},{hip:111188,pos:[35.4394,-22.8558,-16.4974],mag:4.29,ci:.059,trueDistPc:45.28},{hip:111497,pos:[50.7633,-18.0729,7.7139],mag:4.03,ci:-.018,trueDistPc:54.43},{hip:111954,pos:[141.4775,-77.3646,-50.1412],mag:4.177,ci:-.04,trueDistPc:168.86},{hip:112029,pos:[57.9621,-14.2888,19.0283],mag:3.41,ci:-.018,trueDistPc:62.66},{hip:112122,pos:[34.9934,-27.0194,-31.4562],mag:2.11,ci:1.427,trueDistPc:54.26},{hip:112158,pos:[49.0523,-3.6769,34.5817],mag:2.95,ci:.781,trueDistPc:60.13},{hip:112405,pos:[6.5044,-19.9944,-40.6509],mag:4.128,ci:.224,trueDistPc:45.77},{hip:112440,pos:[101.1674,-12.323,56.0198],mag:3.93,ci:.959,trueDistPc:116.3},{hip:112447,pos:[15.233,-3.2524,5.183],mag:4.2,ci:.467,trueDistPc:16.42},{hip:112623,pos:[23.0665,-18.8595,-24.8135],mag:3.466,ci:.126,trueDistPc:38.77},{hip:112716,pos:[92.4901,-36.2544,-9.8535],mag:3.98,ci:1.402,trueDistPc:99.83},{hip:112724,pos:[14.0981,9.2398,32.541],mag:3.54,ci:.951,trueDistPc:36.65},{hip:112748,pos:[29.9698,-2.946,16.9594],mag:3.48,ci:.849,trueDistPc:34.56},{hip:112961,pos:[106.1686,-35.3667,-.7551],mag:3.79,ci:1.453,trueDistPc:111.91},{hip:113136,pos:[39.8905,-15.4137,-6.1559],mag:3.28,ci:.092,trueDistPc:43.21},{hip:113246,pos:[42.2878,-22.3005,-20.9268],mag:4.208,ci:.869,trueDistPc:52.19},{hip:113368,pos:[6.4504,-3.1656,-2.7777],mag:1.16,ci:.127,trueDistPc:7.7},{hip:113638,pos:[29.3916,-23.0181,-33.5969],mag:4.115,ci:.875,trueDistPc:50.22},{hip:113881,pos:[51.4333,-.5618,31.078],mag:2.42,ci:1.47,trueDistPc:60.1},{hip:113963,pos:[38.3114,-4.3748,13.5838],mag:2.48,ci:.016,trueDistPc:40.88},{hip:114131,pos:[28.5377,-17.256,-22.8682],mag:4.332,ci:.388,trueDistPc:40.44},{hip:114341,pos:[71.8099,-26.1115,-19.7471],mag:3.64,ci:1.095,trueDistPc:78.92},{hip:114421,pos:[43.3639,-26.5696,-37.2941],mag:3.877,ci:.9,trueDistPc:63.07},{hip:114855,pos:[43.871,-10.6876,-3.1587],mag:4.25,ci:.994,trueDistPc:45.26},{hip:114971,pos:[40.5431,-6.0931,5.2208],mag:3.7,ci:.832,trueDistPc:41.33},{hip:114996,pos:[11.7369,-9.6958,-16.8189],mag:3.98,ci:.381,trueDistPc:22.69},{hip:115102,pos:[47.9744,-20.3657,-25.069],mag:4.406,ci:1.004,trueDistPc:57.83},{hip:115438,pos:[46.6795,-13.8654,-12.8536],mag:3.98,ci:.985,trueDistPc:50.36},{hip:115738,pos:[48.7006,-6.0629,3.8042],mag:4.94,ci:.084,trueDistPc:49.22},{hip:115830,pos:[51.1405,-4.3043,8.159],mag:4.3,ci:.968,trueDistPc:51.97},{hip:116231,pos:[44.0574,-18.4873,-29.5181],mag:4.37,ci:-.026,trueDistPc:56.16},{hip:116727,pos:[2.9416,5.1142,12.4641],mag:2.943,ci:1.257,trueDistPc:13.79},{hip:116771,pos:[13.5366,-.5568,1.7005],mag:4.12,ci:.475,trueDistPc:13.65},{hip:116928,pos:[31.9406,-1.9043,1.9108],mag:4.51,ci:.228,trueDistPc:32.05},{hip:118268,pos:[32.7917,1.4796,3.6604],mag:3.924,ci:.602,trueDistPc:33.03}],A3=`
	// The standard position attribute (auto-declared by Three.js) carries
	// the hi half of the RTE split; aPosLo is the small delta. See stars.ts
	// for the precision rationale.
	attribute vec3 aPosLo;
	uniform vec3 uCamHi;
	uniform vec3 uCamLo;
	void main() {
		vec3 relPos = (position - uCamHi) + (aPosLo - uCamLo);
		gl_Position = projectionMatrix * vec4(mat3(viewMatrix) * relPos, 1.0);
	}
`,P3=`
	precision mediump float;
	uniform vec3 uColor;
	uniform float uOpacity;
	void main() {
		gl_FragColor = vec4(uColor, uOpacity);
	}
`;function w3(n,e,t){const i=Math.round(n),s=Math.round(e),r=Math.round(t);return{hx:i,hy:s,hz:r,lx:n-i,ly:e-s,lz:t-r}}function D3(){let n=0;for(const h of yl)n+=h.segments.length;const e=new Float32Array(n),t=new Float32Array(n);{let h=0;for(const p of yl)for(let E=0;E<p.segments.length;E+=3){const S=p.segments[E]*Bi,T=p.segments[E+1]*Bi,I=p.segments[E+2]*Bi,P=w3(S,T,I);e[h]=P.hx,e[h+1]=P.hy,e[h+2]=P.hz,t[h]=P.lx,t[h+1]=P.ly,t[h+2]=P.lz,h+=3}}const i=new _t;i.setAttribute("position",new Qe(e,3)),i.setAttribute("aPosLo",new Qe(t,3));function s(h,p){return new mt({uniforms:{uColor:{value:h},uOpacity:{value:p},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:A3,fragmentShader:P3,transparent:!0,depthWrite:!1,blending:Ei})}const r=s(new nt(ns.gridStrong),.6),a=new Us(i,r);a.renderOrder=1,a.frustumCulled=!1;const o=new nt(ns.gridStrong).multiplyScalar(1.6),c=s(o,.32),l=new Us(i,c);l.renderOrder=0,l.frustumCulled=!1;const u=Ra.map(h=>h.pos),d=Ra.map(h=>h.mag),f=Ra.map(h=>h.ci),m=Z2(u,d,f,2.4,!1);m.object.renderOrder=1;const g=new mi;g.add(l),g.add(a),g.add(m.object),g.visible=!1;function _(h,p){const E=h.uniforms.uCamHi.value,S=h.uniforms.uCamLo.value,T=Math.round(p.x),I=Math.round(p.y),P=Math.round(p.z);E.set(T,I,P),S.set(p.x-T,p.y-I,p.z-P)}return{object:g,setVisible(h){g.visible=h},setCamDist(h){m.material.uniforms.uCamDist.value=h},setCamPos(h){_(r,h),_(c,h),m.setCamPos(h)},dispose(){i.dispose(),r.dispose(),c.dispose(),m.object.geometry.dispose(),m.material.dispose()}}}const xt=299792458,Go=30856775814914e3,Vo=9.80665,El=365.25*86400,R3=1e6;function Iu(n,e,t=R3){const i=e*Vo,s=n*Go,r=s/2,a=Math.sqrt((r/xt)**2+2*r/i),o=xt/i*Math.acosh(1+i*r/(xt*xt)),c=1+i*r/(xt*xt),l=xt*Math.sqrt(1-1/(c*c)),u=2*a,d=2*o,f=Math.exp(i*d/xt),m=t*(f-1),g=m*xt*xt;return{distanceM:s,accelMS2:i,shipTimeS:d,earthTimeS:u,vMax:l,massRatio:f,fuelMassKg:m,energyJ:g,payloadKg:t}}function bl(n){return Math.min(n,1-n)*2}function C3(n,e,t,i){const s=t*Vo,r=e*Go,a=i/2;let o;if(n<=a)o=xt*xt/s*(Math.sqrt(1+(s*n/xt)**2)-1);else{const c=i-n;o=r-xt*xt/s*(Math.sqrt(1+(s*c/xt)**2)-1)}return Math.max(0,Math.min(1,o/r))}function L3(n,e,t,i){const s=t*Vo,r=e*Go,a=i/2;let o;if(n<=a)o=xt*xt/s*(Math.cosh(s*n/xt)-1);else{const c=i-n;o=r-xt*xt/s*(Math.cosh(s*c/xt)-1)}return Math.max(0,Math.min(1,o/r))}const hn=192,I3=96,U3=.55,Uu=10,N3=Uu,F3=1.4,O3=.55,B3=`
	attribute float aPhase;
	attribute float aArc;
	varying float vPhase;
	varying float vArc;
	void main() {
		vPhase = aPhase;
		vArc = aArc;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`,z3=`
	precision mediump float;
	varying float vPhase;
	varying float vArc;
	uniform float uOpacity;
	uniform float uBrightness;
	uniform float uDashCount;
	uniform float uDashDuty;

	// Branchless HSV → RGB (Inigo Quilez).
	vec3 hsv2rgb(vec3 c) {
		vec3 p = abs(fract(c.xxx + vec3(0.0, 2.0/3.0, 1.0/3.0)) * 6.0 - 3.0);
		return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
	}

	void main() {
		// vPhase ∈ [0, 1] is spatial distance from the nearest endpoint.
		// Hue sweeps 0 (red) → 0.333 (green); full red endpoints, saturated
		// green mid-trip.
		float h = clamp(vPhase, 0.0, 1.0) * 0.333;
		vec3 col = hsv2rgb(vec3(h, 0.95, 1.0)) * uBrightness;
		// Dashes CENTERED on uDashCount+1 evenly-spaced ticks, with the
		// outermost ticks landing exactly at vArc=0 and vArc=1. This
		// guarantees the line reaches both Earth and the target star —
		// the naive fract(vArc * N) form left a gap at the very end (last
		// ~0.5% of the chord), which read as a ~2 wu shortfall on distant
		// targets like Electra.
		float pos = vArc * uDashCount;
		float dist = abs(pos - floor(pos + 0.5));
		if (dist > uDashDuty * 0.5) discard;
		gl_FragColor = vec4(col, uOpacity);
	}
`,k3=`
	uniform float uSize;
	void main() {
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		gl_PointSize = uSize;
	}
`,H3=`
	precision mediump float;
	uniform float uPhase;
	uniform float uAlpha;
	uniform float uAngle;
	vec3 hsv2rgb(vec3 c) {
		vec3 p = abs(fract(c.xxx + vec3(0.0, 2.0/3.0, 1.0/3.0)) * 6.0 - 3.0);
		return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
	}
	void main() {
		// Centre coords. PointCoord's y axis goes top→bottom; flip so +y is
		// screen-up, matching the angle convention used in tick().
		vec2 p = gl_PointCoord - vec2(0.5);
		p.y = -p.y;
		// Rotate into arrow-local space (arrow forward = +x in this frame).
		float s = sin(uAngle), c = cos(uAngle);
		vec2 r = vec2(c * p.x + s * p.y, -s * p.x + c * p.y);
		// Triangle: tip at (+0.46, 0), back corners at (-0.34, ±0.34).
		float backEdge = r.x + 0.34;          // >0 inside the back
		float sideMax = (0.46 - r.x) * 0.425; // half-height bound at this x
		float sideEdge = sideMax - abs(r.y);  // >0 inside the side
		float alpha =
			smoothstep(-0.025, 0.005, backEdge) *
			smoothstep(-0.025, 0.005, sideEdge) *
			smoothstep(-0.05, 0.0, 0.46 - r.x);
		if (alpha < 0.01) discard;
		// Bright core just behind the tip — gives the arrow a glowing point.
		float t = clamp((r.x + 0.34) / 0.8, 0.0, 1.0);
		float core = smoothstep(0.5, 0.95, t);
		float h = clamp(uPhase, 0.0, 1.0) * 0.333;
		vec3 col = hsv2rgb(vec3(h, 0.95, 1.0));
		gl_FragColor = vec4(col * (1.0 + core * 0.9), alpha * uAlpha);
	}
`;function Tl(n,e){return new mt({uniforms:{uOpacity:{value:n},uBrightness:{value:e},uDashCount:{value:I3},uDashDuty:{value:U3}},vertexShader:B3,fragmentShader:z3,transparent:!0,depthWrite:!1,blending:Ei})}function G3(){const n=new Float32Array(hn);for(let $=0;$<hn;$++)n[$]=$/(hn-1);const e=new _t,t=new Qe(new Float32Array(hn*3),3),i=new Qe(new Float32Array(hn),1),s=new Qe(n,1);t.setUsage(hc),i.setUsage(hc),e.setAttribute("position",t),e.setAttribute("aPhase",i),e.setAttribute("aArc",s);const r=t.array,a=i.array,o=Tl(.95,1),c=Tl(.42,1.7),l=new Or(e,o),u=new Or(e,c);l.renderOrder=2,u.renderOrder=1,l.frustumCulled=!1,u.frustumCulled=!1;const d=new _t;d.setAttribute("position",new Qe(new Float32Array([0,0,0]),3));const f=new mt({uniforms:{uSize:{value:26},uPhase:{value:0},uAlpha:{value:1},uAngle:{value:0}},vertexShader:k3,fragmentShader:H3,transparent:!0,depthWrite:!1,blending:Ei}),m=new Os(d,f);m.renderOrder=3,m.frustumCulled=!1,m.visible=!1;const g=new mi;g.add(u),g.add(l),g.add(m),g.visible=!1;const _=new R,h=new R;let p=0,E=1,S=0,T=!1,I=[],P=0;const A=new R,F=new R;return{group:g,rebuild($,v,y,W){for(let ee=0;ee<hn;ee++){const k=ee/(hn-1),ie=ee*3;r[ie]=$.x+(v.x-$.x)*k,r[ie+1]=$.y+(v.y-$.y)*k,r[ie+2]=$.z+(v.z-$.z)*k,a[ee]=bl(k)}t.needsUpdate=!0,i.needsUpdate=!0,_.copy($),h.copy(v),p=W,E=y;const X=Iu(W,y);S=X.earthTimeS,T=!0,P=performance.now()/1e3,I=[];const Y=X.shipTimeS/El;for(let ee=1;ee<Y;ee++){const k=L3(ee*El,W,y,X.shipTimeS);k<=0||k>=1||I.push({worldPos:new R($.x+(v.x-$.x)*k,$.y+(v.y-$.y)*k,$.z+(v.z-$.z)*k),label:`${ee} y`})}},setVisible($){g.visible=$,m.visible=$},tick($,v,y,W){if(!g.visible||S===0)return;const Y=($-P)%N3/Uu*S,ee=C3(Y,p,E,S);m.position.set(_.x+(h.x-_.x)*ee,_.y+(h.y-_.y)*ee,_.z+(h.z-_.z)*ee),f.uniforms.uPhase.value=bl(ee);const k=Math.sin($*2*Math.PI/F3);f.uniforms.uAlpha.value=1-O3*(.5-.5*k),A.copy(_).project(v),F.copy(h).project(v);const ie=(A.x*.5+.5)*y,K=(-A.y*.5+.5)*W,pe=(F.x*.5+.5)*y,le=(-F.y*.5+.5)*W,Te=ee<.5?1:-1,et=(pe-ie)*Te,qe=(le-K)*Te;et*et+qe*qe>1e-6&&(f.uniforms.uAngle.value=Math.atan2(-qe,et))},getTicks(){return I},getEndpoints(){return T?{from:_,to:h}:null},dispose(){e.dispose(),o.dispose(),c.dispose(),d.dispose(),f.dispose()}}}const V3=`
	varying vec3 vDir;
	void main() {
		vDir = normalize(position);
		// Lock the sphere to the camera so it always renders as a backdrop.
		mat4 mvNoTrans = modelViewMatrix;
		mvNoTrans[3].xyz = vec3(0.0);
		gl_Position = projectionMatrix * mvNoTrans * vec4(position, 1.0);
		gl_Position.z = gl_Position.w; // force depth to far plane
	}
`,W3=`
	precision highp float;
	uniform sampler2D tEquirect;
	uniform float uIntensity;
	uniform float uCe;
	uniform float uSe;
	varying vec3 vDir;

	void main() {
		vec3 dEcl = normalize(vDir);

		// Ecliptic → equatorial (+obliquity about X).
		vec3 dEq = vec3(
			dEcl.x,
			uCe * dEcl.y - uSe * dEcl.z,
			uSe * dEcl.y + uCe * dEcl.z
		);

		// Equatorial → galactic (IAU/Hipparcos, J2000). Row-major dots so
		// the GLSL column-major mat3 quirk doesn't bite.
		vec3 r0 = vec3(-0.0548755604162154, -0.8734370902348850, -0.4838350155487132);
		vec3 r1 = vec3( 0.4941094278755837, -0.4448296299600112,  0.7469822444972189);
		vec3 r2 = vec3(-0.8676661490190047, -0.1980763734312015,  0.4559837761750669);
		vec3 dGal = vec3(dot(r0, dEq), dot(r1, dEq), dot(r2, dEq));

		// Galactic → cube atlas axes:
		//   cube +X = galactic +Y (l=90°)
		//   cube +Y = galactic +Z (NP)
		//   cube +Z = galactic -X (anti-centre)
		vec3 dCube = vec3(dGal.y, dGal.z, -dGal.x);

		// Equirect UV (matches cube_to_equirect.py and Three.js equirectUv).
		vec3 dn = normalize(dCube);
		vec2 uv = vec2(
			atan(dn.z, dn.x) * 0.15915494309189535 + 0.5,
			asin(clamp(dn.y, -1.0, 1.0)) * 0.3183098861837907 + 0.5
		);
		vec4 c = texture2D(tEquirect, uv);
		gl_FragColor = vec4(c.rgb * uIntensity, 1.0);
	}
`;async function X3(n,e=.34){const t=await new _2().loadAsync(n);t.colorSpace=hi,t.generateMipmaps=!1;const i=Pu*Math.PI/180,s=new mt({side:Xt,depthWrite:!1,depthTest:!1,uniforms:{tEquirect:{value:t},uIntensity:{value:e},uCe:{value:Math.cos(i)},uSe:{value:Math.sin(i)}},vertexShader:V3,fragmentShader:W3}),r=new Ft(new ts(1,64,32),s);return r.frustumCulled=!1,r.renderOrder=-1e3,{mesh:r,texture:t,setIntensity(a){s.uniforms.uIntensity.value=a}}}const Nu=[{id:"ALPHA_CENTAURI",name:"Alpha Centauri",ra:219.902,dec:-60.834,dist:1.34,tier:"primary",mag:-.1,children:[{kind:"star",size:.0013,color:16773848,halo:{size:.0017,color:16767392,opacity:.3}},{kind:"star",offset:[.0728,0,0],size:.0011,color:16763018,halo:{size:.0015,color:16755302,opacity:.3}}]},{id:"PROXIMA_CEN",name:"Proxima Centauri",ra:217.429,dec:-62.6795,dist:1.301,tier:"primary",mag:11.13,children:[{kind:"star",size:9e-4,color:16750950,halo:{size:.0013,color:16733491,opacity:.34}},{kind:"planet",id:"Proxima Cen d",name:"d",orbitRadius:187265e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Proxima Cen b",name:"b",orbitRadius:31512e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371}]},{id:"SIRIUS",name:"Sirius",ra:101.287,dec:-16.7209,dist:2.67,tier:"primary",mag:-1.46,children:[{kind:"star",size:.0017,color:13293567,halo:{size:.0024,color:8956671,opacity:.32}},{kind:"star",offset:[7960204194457797e-33,.13,0],size:6e-4,color:13162495,halo:{size:.001,color:8956671,opacity:.4}}]},{id:"PROCYON",name:"Procyon",ra:114.826,dec:5.225,dist:3.51,tier:"primary",mag:.37,children:[{kind:"star",size:.0014,color:16775398},{kind:"star",offset:[.0689429,.0689429,0],size:6e-4,color:13162495,halo:{size:9e-4,color:8956671,opacity:.36}}]},{id:"EPSILON_ERIDANI",name:"Epsilon Eridani",ra:53.2283,dec:-9.45817,dist:3.22,tier:"primary",mag:3.73,children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"eps Eri b",name:"b",orbitRadius:.022945,size:.00105,color:13030621,inc:5.0142,node:0,realRadiusKm:6371}]},{id:"40_ERIDANI",name:"40 Eridani",ra:63.8297,dec:-7.6709,dist:5.014,tier:"primary",mag:4.43,children:[{kind:"star",size:.0011,color:16769448},{kind:"star",offset:[-.11375,.197021,0],size:6e-4,color:13162495,halo:{size:.001,color:8956671,opacity:.36}}]},{id:"BARNARD_S_STAR",name:"Barnard's Star",ra:269.449,dec:4.73942,dist:1.828,tier:"secondary",mag:9.511,children:[{kind:"star",size:8e-4,color:16745779},{kind:"planet",id:"Barnard d",name:"d",orbitRadius:1222e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Barnard b",name:"b",orbitRadius:14885e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Barnard c",name:"c",orbitRadius:1781e-7,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"Barnard e",name:"e",orbitRadius:24765e-8,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371}]},{id:"LALANDE_21185",name:"Lalande 21185",ra:165.831,dec:35.9487,dist:2.546,tier:"secondary",mag:7.52,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"GJ 411 b",name:"b",orbitRadius:512135e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"HD 95735 c",name:"c",orbitRadius:.01911,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371}]},{id:"EPSILON_INDI",name:"Epsilon Indi",ra:330.872,dec:-56.7972,dist:3.638,tier:"secondary",mag:4.69,children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[-4.7125,-8.16229,0],size:5e-4,color:6702114,halo:{size:9e-4,color:5583633,opacity:.28}},{kind:"planet",id:"eps Ind A b",name:"b",orbitRadius:.13585,size:.00105,color:13030621,inc:5.214,node:0,realRadiusKm:6371}]},{id:"ROSS_128",name:"Ross 128",ra:176.935,dec:.8044,dist:3.375,tier:"secondary",mag:11.153,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"Ross 128 b",name:"b",orbitRadius:3224e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371}]},{id:"61_CYGNI",name:"61 Cygni",ra:316.748,dec:38.7639,dist:3.497,tier:"secondary",children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[.47285,.273,0],size:.001,color:16761994,halo:{size:.0014,color:16750950,opacity:.3}}]},{id:"GLIESE_570",name:"Gliese 570",ra:224.372,dec:-21.4231,dist:5.886,tier:"secondary",mag:5.72,children:[{kind:"star",size:.0011,color:16762008},{kind:"star",offset:[.1625,0,0],size:9e-4,color:16757898,halo:{size:.0012,color:16748902,opacity:.3}}]},{id:"ETA_CASSIOPEIAE",name:"Eta Cassiopeiae",ra:12.2812,dec:57.8157,dist:5.927,tier:"secondary",mag:3.44,children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[.23075,.399671,0],size:.001,color:16761994,halo:{size:.0013,color:16750950,opacity:.3}}]},{id:"TRAPPIST_1",name:"TRAPPIST-1",ra:346.622,dec:-5.0414,dist:12.467,tier:"secondary",mag:18.798,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"TRAPPIST-1 b",name:"b",orbitRadius:7501e-8,size:.00107033,color:13030621,inc:3.04896,node:0,realRadiusKm:7110.04},{kind:"planet",id:"TRAPPIST-1 c",name:"c",orbitRadius:1027e-7,size:.00106708,color:13030621,inc:3.03996,node:137.508,realRadiusKm:6988.99},{kind:"planet",id:"TRAPPIST-1 d",name:"d",orbitRadius:144755e-9,size:.00100959,color:13030621,inc:3.01872,node:275.016,realRadiusKm:5020.35},{kind:"planet",id:"TRAPPIST-1 e",name:"e",orbitRadius:190125e-9,size:.00103528,color:13030621,inc:3.03726,node:52.524,realRadiusKm:5861.32},{kind:"planet",id:"TRAPPIST-1 f",name:"f",orbitRadius:250185e-9,size:.00105803,color:13030621,inc:3.0468,node:190.032,realRadiusKm:6657.69},{kind:"planet",id:"TRAPPIST-1 g",name:"g",orbitRadius:304395e-9,size:.00107254,color:13030621,inc:3.04644,node:327.54,realRadiusKm:7192.86},{kind:"planet",id:"TRAPPIST-1 h",name:"h",orbitRadius:402285e-9,size:.00100287,color:13030621,inc:3.0351,node:105.048,realRadiusKm:4810.11}]},{id:"LHS_1140",name:"LHS 1140",ra:11.2472,dec:-15.2715,dist:14.964,tier:"secondary",mag:14.15,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"LHS 1140 c",name:"c",orbitRadius:1755e-7,size:.00109599,color:13030621,inc:3.036,node:0,realRadiusKm:8103.91},{kind:"planet",id:"LHS 1140 b",name:"b",orbitRadius:6149e-7,size:.00116223,color:13030621,inc:3.0252,node:137.508,realRadiusKm:11021.8}]},{id:"K2_18",name:"K2-18",ra:172.56,dec:7.5884,dist:38.099,tier:"secondary",mag:13.5,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"K2-18 c",name:"c",orbitRadius:39e-5,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"K2-18 b",name:"b",orbitRadius:92885e-8,size:.00123819,color:13030621,inc:15,node:137.508,realRadiusKm:15099.3}]},{id:"TOI_700",name:"TOI-700",ra:97.0968,dec:-65.5793,dist:31.121,tier:"secondary",mag:13.076,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"TOI-700 b",name:"b",orbitRadius:44005e-8,size:.00103415,color:13030621,inc:3.072,node:0,realRadiusKm:5823.09},{kind:"planet",id:"TOI-700 c",name:"c",orbitRadius:60385e-8,size:.001262,color:13030621,inc:3.19746,node:137.508,realRadiusKm:16564.6},{kind:"planet",id:"TOI-700 e",name:"e",orbitRadius:871e-6,size:.00104142,color:13030621,inc:3.072,node:275.016,realRadiusKm:6071.56},{kind:"planet",id:"TOI-700 d",name:"d",orbitRadius:.00106145,size:.00106293,color:13030621,inc:3.036,node:52.524,realRadiusKm:6836.08}]},{id:"GLIESE_667_C",name:"Gliese 667 C",ra:259.745,dec:-34.9968,dist:7.243,tier:"secondary",mag:10.22,children:[{kind:"star",size:.0011,color:16767159},{kind:"planet",id:"GJ 667 C c",name:"c",orbitRadius:8125e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C f",name:"f",orbitRadius:.001014,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C e",name:"e",orbitRadius:.0013845,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C g",name:"g",orbitRadius:.0035685,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371}]},{id:"TEEGARDEN_S_STAR",name:"Teegarden's Star",ra:43.2537,dec:16.8813,dist:3.832,tier:"secondary",mag:15.14,children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"Teegarden's Star b",name:"b",orbitRadius:16835e-8,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Teegarden's Star c",name:"c",orbitRadius:29575e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Teegarden's Star d",name:"d",orbitRadius:51415e-8,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"WOLF_1061",name:"Wolf 1061",ra:247.575,dec:-12.6626,dist:4.308,tier:"secondary",mag:10.072,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"Wolf 1061 b",name:"b",orbitRadius:24375e-8,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Wolf 1061 c",name:"c",orbitRadius:5785e-7,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Wolf 1061 d",name:"d",orbitRadius:.003055,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"HD_219134",name:"HD 219134",ra:348.321,dec:57.1684,dist:6.542,tier:"secondary",mag:5.57,children:[{kind:"star",size:.0011,color:16758144},{kind:"planet",id:"HD 219134 b",name:"b",orbitRadius:25194e-8,size:.00114491,color:13030621,inc:3.891,node:0,realRadiusKm:10206.3},{kind:"planet",id:"HD 219134 c",name:"c",orbitRadius:42445e-8,size:.00113207,color:13030621,inc:3.4896,node:137.508,realRadiusKm:9626.58},{kind:"planet",id:"HD 219134 f",name:"f",orbitRadius:95095e-8,size:.00110197,color:13030621,inc:15,node:275.016,realRadiusKm:8346.01},{kind:"planet",id:"HD 219134 d",name:"d",orbitRadius:.0015405,size:.00114601,color:13030621,inc:15,node:52.524,realRadiusKm:10257.3},{kind:"planet",id:"HD 219134 g",name:"g",orbitRadius:.00243945,size:.00105,color:13030621,inc:15,node:190.032,realRadiusKm:6371},{kind:"planet",id:"HD 219134 h",name:"h",orbitRadius:.020215,size:.00105,color:13030621,inc:15,node:327.54,realRadiusKm:6371}]},{id:"UPSILON_ANDROMEDAE",name:"Upsilon Andromedae",ra:24.1993,dec:41.4055,dist:13.478,tier:"secondary",mag:4.1,children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"ups And b",name:"b",orbitRadius:384941e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"ups And c",name:"c",orbitRadius:.00538053,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"ups And d",name:"d",orbitRadius:.0163364,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"55_CANCRI",name:"55 Cancri",ra:133.149,dec:28.3308,dist:12.587,tier:"secondary",children:[{kind:"star",size:.0011,color:16769478},{kind:"planet",id:"55 Cnc e",name:"e",orbitRadius:10036e-8,size:.00118089,color:13030621,inc:4.1538,node:0,realRadiusKm:11945.6},{kind:"planet",id:"55 Cnc b",name:"b",orbitRadius:767e-6,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"55 Cnc c",name:"c",orbitRadius:.0016055,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"55 Cnc f",name:"f",orbitRadius:.005213,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371},{kind:"planet",id:"55 Cnc d",name:"d",orbitRadius:.0364,size:.00105,color:13030621,inc:15,node:190.032,realRadiusKm:6371}]}],K3=[{id:"TEEGARDEN_S_STAR",name:"Teegarden's Star",ra:43.253716,dec:16.881287,dist:3.8316,tier:"secondary",mag:15.14},{id:"WOLF_1061",name:"Wolf 1061",ra:247.575243,dec:-12.662589,dist:4.3078,tier:"secondary",mag:10.07},{id:"HD_219134",name:"HD 219134",ra:348.320729,dec:57.168357,dist:6.5418,tier:"secondary",mag:5.57},{id:"GLIESE_667_C",name:"Gliese 667 C",ra:259.745114,dec:-34.996837,dist:7.2429,tier:"secondary",mag:10.22},{id:"MUPHRID",name:"Muphrid",ra:208.671162,dec:18.397721,dist:11.396,tier:"secondary",mag:2.68},{id:"DENEB_ALGEDI",name:"Deneb Algedi",ra:326.760184,dec:-16.127287,dist:11.8666,tier:"secondary",mag:2.83},{id:"PORRIMA",name:"Porrima",ra:190.415118,dec:-1.449404,dist:12.0202,tier:"secondary",mag:2.74},{id:"TRAPPIST_1",name:"TRAPPIST-1",ra:346.622369,dec:-5.041399,dist:12.4669,tier:"secondary",mag:18.8},{id:"55_CANCRI",name:"55 Cancri",ra:133.149213,dec:28.330821,dist:12.5868,tier:"secondary"},{id:"UPSILON_ANDROMEDAE",name:"Upsilon Andromedae",ra:24.19934,dec:41.405459,dist:13.4782,tier:"secondary",mag:4.1},{id:"ALSHAIN",name:"Alshain",ra:298.828304,dec:6.406764,dist:13.6008,tier:"secondary",mag:3.71},{id:"ERRAI",name:"Errai",ra:354.837127,dec:77.632364,dist:13.7899,tier:"secondary"},{id:"RASALHAGUE",name:"Rasalhague",ra:263.733623,dec:12.560037,dist:14.8965,tier:"secondary",mag:2.07},{id:"LHS_1140",name:"LHS 1140",ra:11.247212,dec:-15.27154,dist:14.9636,tier:"secondary",mag:14.15},{id:"ALDERAMIN",name:"Alderamin",ra:319.644885,dec:62.585574,dist:15.0376,tier:"secondary",mag:2.46},{id:"CAPH",name:"Caph",ra:2.294522,dec:59.149781,dist:16.7842,tier:"secondary",mag:2.27},{id:"ZOSMA",name:"Zosma",ra:168.527089,dec:20.523718,dist:17.9147,tier:"secondary",mag:2.53},{id:"MENKENT",name:"Menkent",ra:211.670615,dec:-36.369955,dist:18.0343,tier:"secondary",mag:2.05},{id:"WASAT",name:"Wasat",ra:110.030727,dec:21.982304,dist:18.598,tier:"secondary",mag:3.53},{id:"SARIN",name:"Sarin",ra:258.757961,dec:24.839207,dist:23.0362,tier:"secondary",mag:3.13},{id:"ALJANAH",name:"Aljanah",ra:311.552801,dec:33.970328,dist:23.1605,tier:"secondary",mag:2.48},{id:"KAUS_BOREALIS",name:"Kaus Borealis",ra:276.99267,dec:-25.421698,dist:23.2993,tier:"secondary",mag:2.81},{id:"MEGREZ",name:"Megrez",ra:183.856499,dec:57.032617,dist:24.7967,tier:"secondary",mag:3.32},{id:"MENKALINAN",name:"Menkalinan",ra:89.882179,dec:44.947433,dist:24.8694,tier:"secondary",mag:1.9},{id:"ALCOR",name:"Alcor",ra:201.306408,dec:54.98796,dist:25.0564,tier:"secondary",mag:4.01},{id:"ALIOTH",name:"Alioth",ra:193.50729,dec:55.959823,dist:25.31,tier:"secondary",mag:1.77},{id:"CEBALRAI",name:"Cebalrai",ra:265.868133,dec:4.567304,dist:25.4917,tier:"secondary",mag:2.75},{id:"PHECDA",name:"Phecda",ra:178.457697,dec:53.69476,dist:25.5037,tier:"secondary",mag:2.44},{id:"MERAK",name:"Merak",ra:165.460332,dec:56.382434,dist:25.9047,tier:"secondary",mag:2.37},{id:"MIZAR",name:"Mizar",ra:200.981419,dec:54.925352,dist:26.3089,tier:"secondary"},{id:"SEGINUS",name:"Seginus",ra:218.019465,dec:38.308248,dist:26.3765,tier:"secondary",mag:3.02},{id:"ASCELLA",name:"Ascella",ra:285.653043,dec:-29.880063,dist:27.0416,tier:"secondary",mag:2.59},{id:"SABIK",name:"Sabik",ra:257.594529,dec:-15.724907,dist:27.0929,tier:"secondary",mag:2.42},{id:"GACRUX",name:"Gacrux",ra:187.791498,dec:-57.113213,dist:27.1518,tier:"secondary",mag:1.64},{id:"ALGOL",name:"Algol",ra:47.042219,dec:40.955647,dist:27.571,tier:"secondary",mag:2.12},{id:"ALPHERATZ",name:"Alpheratz",ra:2.096916,dec:29.090431,dist:29.7442,tier:"secondary",mag:2.06},{id:"RUCHBAH",name:"Ruchbah",ra:21.453964,dec:60.235284,dist:30.4785,tier:"secondary",mag:2.68},{id:"ALNAIR",name:"Alnair",ra:332.05827,dec:-46.960974,dist:30.9693,tier:"secondary",mag:1.71},{id:"TOI_700",name:"TOI-700",ra:97.096786,dec:-65.579311,dist:31.1208,tier:"secondary",mag:13.08},{id:"ALKAID",name:"Alkaid",ra:206.885157,dec:49.313267,dist:31.8674,tier:"secondary",mag:1.86},{id:"VINDEMIATRIX",name:"Vindemiatrix",ra:195.544154,dec:10.959149,dist:33.1005,tier:"secondary",mag:2.79},{id:"ALGEDI",name:"Algedi",ra:304.513565,dec:-12.544852,dist:33.4292,tier:"secondary",mag:3.58},{id:"ALHENA",name:"Alhena",ra:99.42796,dec:16.39928,dist:33.5121,tier:"secondary",mag:1.92},{id:"MIAPLACIDUS",name:"Miaplacidus",ra:138.299906,dec:-69.717208,dist:34.6981,tier:"secondary",mag:1.69},{id:"DUBHE",name:"Dubhe",ra:165.931965,dec:61.751035,dist:37.679,tier:"secondary",mag:1.79},{id:"K2_18",name:"K2-18",ra:172.560491,dec:7.588404,dist:38.0997,tier:"secondary",mag:13.5},{id:"ALGIEBA",name:"Algieba",ra:154.993127,dec:19.841485,dist:39.8883,tier:"secondary"},{id:"MUHLIFAIN",name:"Muhlifain",ra:190.379334,dec:-48.959872,dist:39.9042,tier:"secondary",mag:2.17},{id:"KOCHAB",name:"Kochab",ra:222.676357,dec:74.155504,dist:40.1445,tier:"secondary",mag:2.08},{id:"MARKAB",name:"Markab",ra:346.190223,dec:15.205267,dist:40.8831,tier:"secondary",mag:2.48},{id:"ELNATH",name:"Elnath",ra:81.572971,dec:28.607452,dist:41.0509,tier:"secondary",mag:1.65},{id:"ACHERNAR",name:"Achernar",ra:24.428523,dec:-57.236753,dist:42.7533,tier:"secondary",mag:.46},{id:"SKAT",name:"Skat",ra:343.662526,dec:-15.82082,dist:43.2057,tier:"secondary",mag:3.28},{id:"KAUS_AUSTRALIS",name:"Kaus Australis",ra:276.042993,dec:-34.384616,dist:43.9367,tier:"secondary",mag:1.81},{id:"AIN",name:"Ain",ra:67.154168,dec:19.180434,dist:44.7119,tier:"secondary",mag:3.53},{id:"KORNEPHOROS",name:"Kornephoros",ra:247.555001,dec:21.489611,dist:45.4498,tier:"secondary",mag:2.77},{id:"HYADUM_I",name:"Hyadum I",ra:64.94835,dec:15.627642,dist:46.1585,tier:"secondary",mag:3.65},{id:"PRIMA_HYADUM",name:"Prima Hyadum",ra:64.94835,dec:15.627642,dist:46.1585,tier:"secondary",mag:3.65},{id:"ELTANIN",name:"Eltanin",ra:269.151541,dec:51.488896,dist:47.3037,tier:"secondary",mag:2.23},{id:"CHERTAN",name:"Chertan",ra:168.560024,dec:15.429571,dist:49.2223,tier:"secondary",mag:3.35},{id:"HYADUM_II",name:"Hyadum II",ra:65.73373,dec:17.542514,dist:49.2388,tier:"secondary",mag:3.76},{id:"GOMEISA",name:"Gomeisa",ra:111.787674,dec:8.289316,dist:49.5786,tier:"secondary",mag:2.89},{id:"ACAMAR",name:"Acamar",ra:44.565318,dec:-40.304678,dist:50.2394,tier:"secondary",mag:3.18},{id:"MAHASIM",name:"Mahasim",ra:89.930292,dec:37.212585,dist:50.7614,tier:"secondary",mag:2.62},{id:"PEACOCK",name:"Peacock",ra:306.411904,dec:-56.73509,dist:54.8246,tier:"secondary",mag:1.92},{id:"ALPHARD",name:"Alphard",ra:141.896845,dec:-8.6586,dist:55.2792,tier:"secondary",mag:1.97},{id:"AUVA",name:"Auva",ra:193.900869,dec:3.397469,dist:57.4498,tier:"secondary",mag:3.38},{id:"ZAURAK",name:"Zaurak",ra:59.507358,dec:-13.508515,dist:58.818,tier:"secondary",mag:2.94},{id:"SCHEAT",name:"Scheat",ra:345.943573,dec:28.082787,dist:60.0962,tier:"secondary",mag:2.42},{id:"MATAR",name:"Matar",ra:340.750537,dec:30.221215,dist:60.1294,tier:"secondary",mag:2.95},{id:"MIRACH",name:"Mirach",ra:17.433016,dec:35.620558,dist:60.5327,tier:"secondary",mag:2.05},{id:"NUNKI",name:"Nunki",ra:283.81636,dec:-26.296724,dist:69.8324,tier:"secondary",mag:2.07},{id:"SCHEDAR",name:"Schedar",ra:10.126846,dec:56.537329,dist:70.9673,tier:"secondary",mag:2.23},{id:"NEKKAR",name:"Nekkar",ra:225.48651,dec:40.390569,dist:72.0565,tier:"secondary",mag:3.52},{id:"IZAR",name:"Izar",ra:221.24674,dec:27.074222,dist:72.3238,tier:"secondary",mag:2.45},{id:"ALBALI",name:"Albali",ra:311.918957,dec:-9.495777,dist:74.8397,tier:"secondary",mag:3.77},{id:"SPICA",name:"Spica",ra:201.298247,dec:-11.161319,dist:76.5697,tier:"secondary",mag:.97},{id:"BELLATRIX",name:"Bellatrix",ra:81.282764,dec:6.349703,dist:77.3994,tier:"secondary",mag:1.64},{id:"THUBAN",name:"Thuban",ra:211.097323,dec:64.37587,dist:79.9003,tier:"secondary",mag:3.68},{id:"MIMOSA",name:"Mimosa",ra:191.930287,dec:-59.688772,dist:85.3971,tier:"secondary",mag:1.25},{id:"CANOPUS",name:"Canopus",ra:95.987958,dec:-52.695661,dist:94.7867,tier:"secondary",mag:-.74},{id:"ACRUX",name:"Acrux",ra:186.649563,dec:-63.099093,dist:98.7167,tier:"secondary"},{id:"TAYGETA",name:"Taygeta",ra:56.302083,dec:24.467274,dist:104.7735,tier:"secondary",mag:4.3},{id:"RASALGETHI",name:"Rasalgethi",ra:258.661909,dec:14.390341,dist:110.2536,tier:"secondary"},{id:"ALPHERG",name:"Alpherg",ra:22.870867,dec:15.345832,dist:114.5016,tier:"secondary",mag:3.62},{id:"RASTABAN",name:"Rastaban",ra:262.608174,dec:52.301389,dist:116.5501,tier:"secondary",mag:2.81},{id:"DABIH",name:"Dabih",ra:305.252777,dec:-14.781408,dist:119.0958,tier:"secondary",mag:3.08},{id:"ELECTRA",name:"Electra",ra:56.218905,dec:24.113338,dist:119.8222,tier:"secondary",mag:3.7},{id:"HADAR",name:"Hadar",ra:210.955856,dec:-60.373035,dist:120.1923,tier:"secondary",mag:.58},{id:"ALMACH",name:"Almach",ra:30.974801,dec:42.329728,dist:120.4819,tier:"secondary",mag:2.1},{id:"ATLAS",name:"Atlas",ra:57.290596,dec:24.053417,dist:123.177,tier:"secondary",mag:3.63},{id:"ALCYONE",name:"Alcyone",ra:56.871152,dec:24.105136,dist:123.6094,tier:"secondary",mag:2.87},{id:"ACRAB",name:"Acrab",ra:241.3593,dec:-19.805453,dist:123.9157,tier:"secondary",mag:2.62},{id:"ADHARA",name:"Adhara",ra:104.656453,dec:-28.972086,dist:124.2236,tier:"secondary",mag:1.5},{id:"MAIA",name:"Maia",ra:56.456701,dec:24.367744,dist:130.356,tier:"secondary",mag:3.87},{id:"POLARIS",name:"Polaris",ra:37.954561,dec:89.264109,dist:132.626,tier:"secondary",mag:2.02},{id:"CELAENO",name:"Celaeno",ra:56.200896,dec:24.289468,dist:135.4059,tier:"secondary",mag:5.46},{id:"ASTEROPE",name:"Asterope",ra:56.476985,dec:24.55451,dist:136.8869,tier:"secondary",mag:5.76},{id:"PLEIONE",name:"Pleione",ra:57.296736,dec:24.13671,dist:138.0948,tier:"secondary",mag:5.09},{id:"MEROPE",name:"Merope",ra:56.581608,dec:23.948359,dist:141.5028,tier:"secondary",mag:4.18},{id:"SEGIN",name:"Segin",ra:28.598892,dec:63.6701,dist:142.7817,tier:"secondary",mag:3.37},{id:"ALGENIB",name:"Algenib",ra:3.308968,dec:15.183598,dist:143.9387,tier:"secondary",mag:2.84},{id:"DSCHUBBA",name:"Dschubba",ra:240.083355,dec:-22.621706,dist:150.6024,tier:"secondary",mag:2.32},{id:"MIRZAM",name:"Mirzam",ra:95.674939,dec:-17.955919,dist:151.0574,tier:"secondary",mag:1.97},{id:"PHERKAD",name:"Pherkad",ra:230.182098,dec:71.834025,dist:151.6093,tier:"secondary",mag:3},{id:"BETELGEUSE",name:"Betelgeuse",ra:88.792939,dec:7.407064,dist:152.6718,tier:"secondary",mag:.42}],Y3=24611855e-1,q3=[{id:"MERCURY",name:"Mercury",color:10129544,radiusKm:2440.5,obliquityDeg:.034,aAU:.38709761,e:.2056373,iDeg:7.0034221,nodeDeg:48.297722,periDeg:29.200358,M0Deg:26.945045,nDegPerDay:4.0923553},{id:"VENUS",name:"Venus",color:15124625,radiusKm:6051.8,obliquityDeg:177.36,aAU:.72331056,e:.0067616859,iDeg:3.3944358,nodeDeg:76.606367,periDeg:54.964233,M0Deg:15.749959,nDegPerDay:1.6022005},{id:"EARTH",name:"Earth",color:4882355,radiusKm:6371,obliquityDeg:23.44,aAU:.99975785,e:.016602201,iDeg:.0046175334,nodeDeg:198.53965,periDeg:262.96032,M0Deg:140.77244,nDegPerDay:.98596577},{id:"MARS",name:"Mars",color:12873038,radiusKm:3389.5,obliquityDeg:25.19,aAU:1.5237188,e:.093424811,iDeg:1.8475809,nodeDeg:49.479943,periDeg:286.69756,M0Deg:31.223275,nDegPerDay:.52401874},{id:"JUPITER",name:"Jupiter",color:14264691,radiusKm:69911,obliquityDeg:3.13,aAU:5.2084558,e:.04832694,iDeg:1.3027428,nodeDeg:100.51068,periDeg:274.96363,M0Deg:99.890278,nDegPerDay:.08291643},{id:"SATURN",name:"Saturn",color:14795657,radiusKm:58232,obliquityDeg:26.73,aAU:9.535538,e:.055489251,iDeg:2.4895448,nodeDeg:113.59753,periDeg:339.3146,M0Deg:279.84299,nDegPerDay:.033472355,rings:{innerRKm:74500,outerRKm:140180,color:14073988,opacity:.55}},{id:"URANUS",name:"Uranus",color:10475232,radiusKm:25362,obliquityDeg:97.77,aAU:19.169878,e:.046359794,iDeg:.77275465,nodeDeg:74.024841,periDeg:98.953859,M0Deg:253.19433,nDegPerDay:.011742892},{id:"NEPTUNE",name:"Neptune",color:3826848,radiusKm:24622,obliquityDeg:28.32,aAU:30.081471,e:.0094937088,iDeg:1.7700055,nodeDeg:131.78219,periDeg:276.12009,M0Deg:314.75848,nDegPerDay:.0059738659},{id:"PLUTO",name:"Pluto",color:11902083,radiusKm:1188.3,obliquityDeg:122.53,aAU:39.482117,e:.2488273,iDeg:17.140012,nodeDeg:110.30394,periDeg:113.76498,M0Deg:53.186619,nDegPerDay:.0039755715}],dn=Math.PI/180;function $3(){return Date.now()/864e5+24405875e-1}function j3(n,e){const t=e-Y3,i=(n.M0Deg+n.nDegPerDay*t)*dn,s=Z3(i,n.e),r=n.aAU,a=Math.cos(s),o=Math.sin(s),c=r*(a-n.e),l=r*Math.sqrt(1-n.e*n.e)*o,u=Math.cos(n.periDeg*dn),d=Math.sin(n.periDeg*dn),f=Math.cos(n.iDeg*dn),m=Math.sin(n.iDeg*dn),g=Math.cos(n.nodeDeg*dn),_=Math.sin(n.nodeDeg*dn),h=u*c-d*l,p=d*c+u*l,E=h,S=f*p,T=m*p,I=g*E-_*S,P=_*E+g*S,A=T;return new R(I*vn,P*vn,A*vn)}function Z3(n,e){let t=n;e>0&&(t=n+e*Math.sin(n));for(let i=0;i<4;i++){const s=t-e*Math.sin(t)-n,r=1-e*Math.cos(t);t-=s/r}return t}const Mr=ns.planet;function J3(n){return Math.max(4e-4,4e-4+15e-5*Math.log2(n/1e3))}function Q3(n,e){const t=j3(n,e),i=n.nodeDeg*Math.PI/180,s=n.iDeg*Math.PI/180,r=Math.cos(i),a=Math.sin(i),o=r*t.x+a*t.y,c=-a*t.x+r*t.y,l=Math.cos(s),u=Math.sin(s),d=l*c+u*t.z;return Math.atan2(d,o)}function eg(n,e){if(!n.rings)return;const t=n.rings.innerRKm/n.radiusKm,i=n.rings.outerRKm/n.radiusKm;return{innerR:e*t,outerR:e*i,color:n.rings.color,opacity:n.rings.opacity}}function tg(){const n=$3(),e=[{kind:"star",size:.0011,color:16773848,halo:{size:.0014,color:16767392,opacity:.32}}];for(const t of q3){const i=J3(t.radiusKm),s={kind:"planet",id:t.id,name:t.name,orbitRadius:t.aAU*vn,size:i,color:t.color,inc:t.iDeg,node:t.nodeDeg,angle:Q3(t,n),obliquityDeg:t.obliquityDeg,realRadiusKm:t.radiusKm},r=eg(t,i);r&&(s.rings=r),e.push(s)}return e.push({kind:"belt",innerR:2.1*vn,outerR:3.3*vn,thickness:.025*vn,count:1600}),e}const ig={id:"SOL",name:"Sol",ra:0,dec:0,dist:0,tier:"primary",mag:-10,children:tg()},ng={id:"TAU_CETI",name:"Tau Ceti",ra:26.00906,dec:-15.93368,dist:3.652,tier:"primary",mag:3.5,children:[{kind:"star",size:.0015,color:16769448},{kind:"planet",id:"TAU_CETI_B",name:"b",orbitRadius:.06,size:.0013,color:Mr,inc:5,node:25},{kind:"planet",id:"TAU_CETI_C",name:"c",orbitRadius:.11,size:.0015,color:Mr,inc:8,node:200},{kind:"planet",id:"TAU_CETI_E",name:"e",orbitRadius:.17,size:.0019,color:Mr,inc:11,node:110},{kind:"planet",id:"TAU_CETI_F",name:"f",orbitRadius:.255,size:.0016,color:Mr,inc:6,node:310}]},sg=[{name:"Alpha Centauri",ra:219.9021,dec:-60.834,dist:1.34,tier:"primary",mag:-.27},{name:"Sirius",ra:101.28663,dec:-16.72093,dist:2.67,tier:"primary",mag:-1.46},{name:"Procyon",ra:114.8255,dec:5.225,dist:3.51,tier:"primary",mag:.34},{name:"Epsilon Eridani",ra:53.22829,dec:-9.45817,dist:3.22,tier:"primary",mag:3.73},{name:"40 Eridani",ra:63.82966,dec:-7.6709,dist:5.014,tier:"primary",mag:4.43},{name:"Altair",ra:297.6958,dec:8.8683,dist:5.13,tier:"primary",mag:.76},{name:"Vega",ra:279.2347,dec:38.7837,dist:7.68,tier:"primary",mag:.03},{name:"Fomalhaut",ra:344.4127,dec:-29.6222,dist:7.7,tier:"primary",mag:1.16},{name:"Denebola",ra:177.265,dec:14.572,dist:11,tier:"primary",mag:2.14},{name:"Pollux",ra:116.3289,dec:28.0262,dist:10.34,tier:"primary",mag:1.14},{name:"Arcturus",ra:213.9154,dec:19.1825,dist:11.26,tier:"primary",mag:-.05},{name:"Capella",ra:79.35015,dec:45.83684,dist:13.301,tier:"primary",mag:.08},{name:"Castor",ra:113.65498,dec:31.86906,dist:15.08,tier:"primary",mag:1.58},{name:"Aldebaran",ra:68.9888,dec:16.50504,dist:21.163,tier:"primary",mag:.87},{name:"Regulus",ra:152.05272,dec:11.99695,dist:24.247,tier:"primary",mag:1.4},{name:"Barnard's Star",ra:269.4485,dec:4.73942,dist:1.828,tier:"secondary",mag:9.51},{name:"Wolf 359",ra:164.10319,dec:7.00273,dist:2.409,tier:"secondary",mag:13.54},{name:"Lalande 21185",ra:165.83096,dec:35.94865,dist:2.546,tier:"secondary",mag:7.52},{name:"Ross 154",ra:282.45879,dec:-23.8371,dist:2.976,tier:"secondary",mag:10.43},{name:"Ross 248",ra:355.48002,dec:44.17038,dist:3.16,tier:"secondary",mag:12.29},{name:"Lacaille 9352",ra:346.50392,dec:-35.84716,dist:3.288,tier:"secondary",mag:7.34},{name:"61 Cygni",ra:316.74848,dec:38.76386,dist:3.497,tier:"secondary",mag:5.21},{name:"Struve 2398",ra:280.68307,dec:59.63836,dist:3.523,tier:"secondary",mag:8.9},{name:"Epsilon Indi",ra:330.87241,dec:-56.79725,dist:3.638,tier:"secondary",mag:4.69},{name:"Kapteyn's Star",ra:77.95994,dec:-45.04381,dist:3.934,tier:"secondary",mag:8.85},{name:"70 Ophiuchi",ra:271.36591,dec:2.4942,dist:5.106,tier:"secondary",mag:4.03},{name:"Gliese 570",ra:224.37159,dec:-21.42314,dist:5.886,tier:"secondary",mag:5.72},{name:"Sigma Draconis",ra:293.0976,dec:69.65345,dist:5.764,tier:"secondary",mag:4.67},{name:"Eta Cassiopeiae",ra:12.28118,dec:57.81574,dist:5.927,tier:"secondary",mag:3.45},{name:"82 Eridani",ra:50.00034,dec:-43.06655,dist:6.041,tier:"secondary",mag:4.26},{name:"Delta Pavonis",ra:302.19504,dec:-66.18709,dist:6.099,tier:"secondary",mag:3.55},{name:"Gliese 105",ra:39.07168,dec:6.87809,dist:7.223,tier:"secondary",mag:5.79},{name:"107 Piscium",ra:25.62259,dec:20.26552,dist:7.644,tier:"secondary",mag:5.24},{name:"Ross 128",ra:176.935,dec:.8044,dist:3.375,tier:"secondary",mag:11.13},{name:"WISE 0855-0714",ra:133.7952,dec:-7.2451,dist:2.28,tier:"secondary",mag:25}];function rg(n){return n.toUpperCase().replace(/[^A-Z0-9]+/g,"_")}function ag(n){return{id:rg(n.name),name:n.name,ra:n.ra,dec:n.dec,dist:n.dist,tier:n.tier,mag:n.mag,children:[{kind:"star",size:.0011,color:16777215}]}}const og=new Set(Nu.map(n=>n.id));function cg(n){return{id:n.id,name:n.name,ra:n.ra,dec:n.dec,dist:n.dist,tier:n.tier,mag:n.mag,children:[{kind:"star",size:.0011,color:16777215}]}}const Fu=[],Al=new Set;for(const n of[ig,ng,...sg.map(ag),...K3.map(cg)])Al.has(n.id)||(Al.add(n.id),Fu.push(n));const Ou=[...Nu,...Fu.filter(n=>!og.has(n.id))],zr=14,Bu=10,lg=8.4,ug=7.6,Sr=9,hg=500,Pl=.1,kr=class kr{constructor(e){Ye(this,"renderer");Ye(this,"scene",new l2);Ye(this,"camera");Ye(this,"controls");Ye(this,"composer");Ye(this,"bloom");Ye(this,"canvas");Ye(this,"grids");Ye(this,"stems");Ye(this,"skybox");Ye(this,"markers");Ye(this,"exoRings");Ye(this,"constellations");Ye(this,"setStarCamDist");Ye(this,"setStarCamPos");Ye(this,"kd");Ye(this,"nearCount",0);Ye(this,"systems",new Map);Ye(this,"cursor");Ye(this,"selectedSystemId","SOL");Ye(this,"travelPath");Ye(this,"travelAccelG",1);Ye(this,"travelStats",null);Ye(this,"heldPanKeys",new Set);Ye(this,"lastFrameTimeMs",performance.now());Ye(this,"pickDownPos",null);Ye(this,"basePath","");Ye(this,"lastShrink",1);Ye(this,"running",!1);Ye(this,"onHud");Ye(this,"trackedLabels",new Map);Ye(this,"resize",()=>{var i,s;const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),(i=this.composer)==null||i.setSize(e,t),(s=this.bloom)==null||s.setSize(e,t)});Ye(this,"onPickPointerDown",e=>{e.pointerType!=="mouse"&&e.pointerType!=="touch"&&e.pointerType!=="pen"||e.pointerType==="mouse"&&e.button!==0||(this.pickDownPos={x:e.clientX,y:e.clientY,pointerType:e.pointerType})});Ye(this,"onPickPointerUp",e=>{const t=this.pickDownPos;if(this.pickDownPos=null,!t||e.pointerType!==t.pointerType||e.pointerType==="mouse"&&e.button!==0)return;const i=t.pointerType==="mouse"?4:10;Math.hypot(e.clientX-t.x,e.clientY-t.y)>i||this.pickSystemAt(e.clientX,e.clientY)});Ye(this,"onPickPointerMove",e=>{if(!this.flyAbort)return;const t=this.pickDownPos;if(!t||e.pointerType!==t.pointerType)return;const i=t.pointerType==="mouse"?4:10;Math.hypot(e.clientX-t.x,e.clientY-t.y)>i&&this.flyAbort()});Ye(this,"onPanKeyDown",e=>{if(!kr.PAN_KEY_CODES.has(e.code))return;const t=e.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||e.ctrlKey||e.metaKey||e.altKey||(this.heldPanKeys.add(e.code),(e.code.startsWith("Arrow")||e.code==="Space")&&e.preventDefault())});Ye(this,"onPanKeyUp",e=>{this.heldPanKeys.delete(e.code)});Ye(this,"loop",()=>{var i,s,r,a,o,c,l,u,d,f,m;if(!this.running)return;requestAnimationFrame(this.loop);const e=performance.now(),t=Math.min(.1,(e-this.lastFrameTimeMs)/1e3);this.lastFrameTimeMs=e,this.tickKeyboardPan(t),this.controls.update(),(i=this.cursor)==null||i.tick(),(s=this.travelPath)==null||s.tick(performance.now()/1e3,this.camera,this.canvas.clientWidth||1,this.canvas.clientHeight||1);{const g=this.controls.target,_=this.camera.position,h=_.distanceTo(g);(r=this.grids)==null||r.update(g,_,h),(a=this.stems)==null||a.update(g,h*.4),(o=this.stems)==null||o.setCamPos(_),(c=this.setStarCamDist)==null||c.call(this,h),(l=this.setStarCamPos)==null||l.call(this,_),(u=this.markers)==null||u.setCamPos(_),(d=this.exoRings)==null||d.setCamPos(_),(f=this.constellations)==null||f.setCamDist(h),(m=this.constellations)==null||m.setCamPos(_),this.applyBodyShrink(h)}this.composer.render(),this.publishHud()});Ye(this,"flyAbort",null);this.canvas=e,this.renderer=new c2({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=new nt(ns.bg),this.camera=new ni(46,1,X2,W2),this.camera.up.set(0,0,1),this.camera.position.set(8,-13,9)}setHudCallback(e){this.onHud=e}async init(e){var o;this.basePath=e,this.grids=c3(),this.scene.add(this.grids.group),this.constellations=D3(),this.scene.add(this.constellations.object);for(const c of Ou){const l=m3(c);this.systems.set(c.id,l),l.group&&this.scene.add(l.group)}try{this.skybox=await X3(`${e}/data/skybox.webp`,.34),this.scene.add(this.skybox.mesh)}catch{}const t=await i3(e);this.scene.add(t.near),this.nearCount=t.nearCount,this.setStarCamDist=t.setCamDist,this.setStarCamPos=t.setCamPos.bind(t),this.kd=t.kdtree;const i=[];for(const c of this.systems.values())i.push(c.center);this.markers=Q2(i),this.scene.add(this.markers.object),this.stems=h3(i),this.scene.add(this.stems.object);const s=[];for(const c of this.systems.values())c.def.children.some(l=>l.kind==="planet")&&s.push({id:c.def.id,pos:c.center});this.exoRings=t3(s),this.exoRings.setSelectedSystemId(this.selectedSystemId),this.scene.add(this.exoRings.object),this.cursor=T3(),this.cursor.object.visible=!1,this.scene.add(this.cursor.object);const r=this.systems.get(this.selectedSystemId);r&&this.cursor.setTo(r.center,r.bbox),this.travelPath=G3(),this.scene.add(this.travelPath.group),this.refreshTravelPath(),this.controls=new S2(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.rotateSpeed=.6,this.controls.zoomSpeed=1.15,this.controls.minDistance=.001,this.controls.maxDistance=K2,this.controls.target.set(0,0,0);const a=typeof window<"u"&&((o=window.matchMedia)==null?void 0:o.call(window,"(pointer: coarse)").matches);this.controls.enablePan=!a,this.controls.screenSpacePanning=!1,this.controls.mouseButtons.MIDDLE=xn.PAN,window.addEventListener("keydown",this.onPanKeyDown),window.addEventListener("keyup",this.onPanKeyUp),this.canvas.addEventListener("pointerdown",this.onPickPointerDown),this.canvas.addEventListener("pointerup",this.onPickPointerUp),this.canvas.addEventListener("pointermove",this.onPickPointerMove),this.composer=new z2(this.renderer),this.composer.addPass(new k2(this.scene,this.camera)),this.bloom=new is(new ke(1,1),.26,.32,.22),this.composer.addPass(this.bloom),this.composer.addPass(new V2),this.resize(),this.start()}start(){this.running=!0,this.loop()}pickSystemAt(e,t){const s=this.canvas.getBoundingClientRect(),r=e-s.left,a=t-s.top,o=this.canvas.clientWidth,c=this.canvas.clientHeight,l=new R,u=new R;let d=null,f=22*22;const m=(h,p)=>{if(l.copy(h).project(this.camera),l.z>1)return;const E=(l.x*.5+.5)*o,S=(-l.y*.5+.5)*c,T=(E-r)**2+(S-a)**2;T<f&&(f=T,d=p)};for(const h of this.systems.values()){m(h.center,h.def.id);for(const p of h.planets)u.copy(p.local).add(h.center),m(u,h.def.id)}if(!d)return;const g=this.systems.get(d);if(!g)return;this.selectSystem(d);const _=this.camera.position.clone().sub(this.controls.target);this.flyTo(g.center.clone().add(_),g.center.clone())}tickKeyboardPan(e){if(this.heldPanKeys.size===0)return;const t=this.heldPanKeys;let i=0,s=0,r=0;if((t.has("ArrowLeft")||t.has("KeyA"))&&(i-=1),(t.has("ArrowRight")||t.has("KeyD"))&&(i+=1),(t.has("ArrowUp")||t.has("KeyW"))&&(s+=1),(t.has("ArrowDown")||t.has("KeyS"))&&(s-=1),t.has("Space")&&(r+=1),(t.has("ShiftLeft")||t.has("ShiftRight"))&&(r-=1),i===0&&s===0&&r===0)return;const a=this.controls.target,c=this.camera.position.distanceTo(a)*.95*e,l=new R().setFromMatrixColumn(this.camera.matrix,0),u=new R().crossVectors(this.camera.up,l),d=new R().addScaledVector(l,i*c).addScaledVector(u,s*c).addScaledVector(this.camera.up,r*c),f=a.clone().add(d);f.length()>fl&&(f.setLength(fl),d.subVectors(f,a)),a.add(d),this.camera.position.add(d)}applyBodyShrink(e){const t=ws.smoothstep(e,.002,.05);if(!(Math.abs(t-this.lastShrink)<.005)){this.lastShrink=t;for(const i of this.systems.values()){const s=i.group;s&&s.traverse(r=>{var o;const a=(o=r.userData)==null?void 0:o.bodyKind;if(r instanceof Ft){if(a==="planet-marker"){const c=r.userData.realScaleTarget??Pl;r.scale.setScalar(ws.lerp(c,1,t))}else if(a==="star-sphere"||a==="star-halo"){const c=Math.min(Pl,r.userData.shrinkTarget??1),l=r.userData.upperBound??1;r.scale.setScalar(ws.lerp(c,l,t))}}})}}}publishHud(){if(!this.onHud)return;const e=this.camera.position.distanceTo(this.controls.target),t=this.canvas.clientWidth,i=this.canvas.clientHeight,s=performance.now(),r=this.collectLabelAnchors(e,t,i),a=new Map;for(const f of r)a.set(f.key,f);const o=fg(r,t,i),c=new Set(o.map(f=>f.key));for(const f of r){const m=c.has(f.key),g=this.trackedLabels.get(f.key);g?(g.anchor=f,g.visible=m,m&&(g.lastSeen=s)):m&&this.trackedLabels.set(f.key,{anchor:f,visible:!0,lastSeen:s})}for(const[f,m]of this.trackedLabels)a.has(f)&&c.has(f)||(m.visible=!1),!m.visible&&s-m.lastSeen>hg&&this.trackedLabels.delete(f);const l=[];for(const[f,m]of this.trackedLabels){const g=m.anchor,_=g.x+zr,h=g.y-zr,p=_+Bu;l.push({key:f,name:g.name,kind:g.kind,tier:g.tier,ax:g.x,ay:g.y,lx:p,ly:h,elbowX:_,opacity:m.visible?g.opacity:0})}const u=this.systems.get(this.selectedSystemId),d=o3(e,this.canvas.clientHeight||i,this.camera.fov);this.onHud({labels:l,camDist:e,nearCount:this.nearCount,selectedSystemName:u?u.def.name:"—",cameraTargetDistPc:this.controls.target.length()/Bi,travel:{eligible:this.selectedSystemId!=="SOL",stats:this.travelStats,ticks:this.projectTravelTicks(t,i)},gridScale:d})}projectTravelTicks(e,t){const i=this.travelPath;if(!i||!i.group.visible)return[];const s=i.getEndpoints(),r=i.getTicks();if(!s||r.length===0)return[];const a=new R;a.copy(s.from).project(this.camera);const o=(a.x*.5+.5)*e,c=(-a.y*.5+.5)*t;a.copy(s.to).project(this.camera);const l=(a.x*.5+.5)*e,u=(-a.y*.5+.5)*t,d=l-o,f=u-c,m=Math.hypot(d,f);if(m<1)return[];const g=-f/m,_=d/m,h=6,p=12,E=[];for(let S=0;S<r.length;S++){const T=r[S].worldPos;if(a.copy(T).project(this.camera),a.z>1)continue;const I=(a.x*.5+.5)*e,P=(-a.y*.5+.5)*t;E.push({key:`tick-${r[S].label}`,x1:I-g*h,y1:P-_*h,x2:I+g*h,y2:P+_*h,lx:I+g*p,ly:P+_*p,label:r[S].label})}return E}collectLabelAnchors(e,t,i){const s=[],r=new R,a=new R,o=this.camera.position;for(const c of this.systems.values()){const l=c.def.tier;if(r.copy(c.center).project(this.camera),r.z<=1&&r.x>=-1.05&&r.x<=1.05&&r.y>=-1.05&&r.y<=1.05&&s.push({key:c.def.id,name:c.def.name.toUpperCase(),kind:"system",tier:l,camDist:o.distanceTo(c.center),x:(r.x*.5+.5)*t,y:(-r.y*.5+.5)*i,opacity:1}),c.planets.length===0)continue;const u=o.distanceTo(c.center),d=dg(u,c.visualHalf);if(!(d<=.01))for(const f of c.planets)a.copy(f.local).add(c.center),r.copy(a).project(this.camera),!(r.z>1||r.x<-1.05||r.x>1.05||r.y<-1.05||r.y>1.05)&&s.push({key:f.id,name:f.name.toUpperCase(),kind:"planet",tier:"secondary",camDist:o.distanceTo(a),x:(r.x*.5+.5)*t,y:(-r.y*.5+.5)*i,opacity:d})}return s}setConstellationsVisible(e){var t;(t=this.constellations)==null||t.setVisible(e)}setExoplanetRingsVisible(e){var t;(t=this.exoRings)==null||t.setVisible(e)}setGridVisible(e){this.grids&&(this.grids.group.visible=e),this.stems&&(this.stems.object.visible=e)}publishHudNow(){this.publishHud()}selectSystem(e){var i;const t=this.systems.get(e);t&&(this.selectedSystemId=e,this.cursor.setTo(t.center,t.bbox),(i=this.exoRings)==null||i.setSelectedSystemId(e),this.refreshTravelPath())}setTravelPathVisible(e){var t;(t=this.travelPath)==null||t.setVisible(e&&this.selectedSystemId!=="SOL")}setTravelAccelG(e){this.travelAccelG=e,this.refreshTravelPath()}refreshTravelPath(){if(!this.travelPath)return;const e=this.systems.get(this.selectedSystemId);if(!e||this.selectedSystemId==="SOL"){this.travelStats=null,this.travelPath.setVisible(!1);return}this.travelPath.rebuild(this.earthWorldPos(),e.center,this.travelAccelG,e.def.dist),this.travelStats=Iu(e.def.dist,this.travelAccelG)}earthWorldPos(){const e=this.systems.get("SOL"),t=e==null?void 0:e.planets.find(i=>i.id==="SOL/EARTH");return!e||!t?new R(0,0,0):e.center.clone().add(t.local)}focusSystem(e){const t=this.systems.get(e);if(!t)return;this.selectSystem(e);const s=t.planets.length>0?Math.max(t.visualHalf*3,.0015):.8,r=new R(s*.46,-s*.74,s*.49);this.flyTo(t.center.clone().add(r),t.center)}viewHome(){this.selectSystem("SOL"),this.flyTo(new R(8,-13,9),new R(0,0,0))}getCameraState(){const e=this.controls.target,t=new R().subVectors(this.camera.position,e),i=t.length(),s=Math.atan2(t.y,t.x),r=Math.asin(t.z/Math.max(i,1e-9));return{systemId:this.selectedSystemId,dist:i,yaw:s,pitch:r}}applyCameraState(e){var g;const t=e.systemId??this.selectedSystemId,i=this.systems.get(t);if(!i)return;this.selectSystem(t);const r=i.planets.length>0?Math.max(i.visualHalf*3,.0015):.8,a=new R(.46,-.74,.49).normalize(),o=Math.atan2(a.y,a.x),c=Math.asin(a.z),l=e.dist??r,u=e.yaw??o,d=e.pitch??c,f=Math.cos(d),m=new R(Math.cos(u)*f,Math.sin(u)*f,Math.sin(d));(g=this.flyAbort)==null||g.call(this),this.controls.target.copy(i.center),this.camera.position.copy(i.center).addScaledVector(m,l)}viewPleiades(){const e=new R(192.837,331.484,28.244),i=e.clone().setZ(0).normalize().multiplyScalar(-4);i.z=0,this.flyTo(i,e)}flyTo(e,t){var l;(l=this.flyAbort)==null||l.call(this);const i=this.camera.position.clone(),s=this.controls.target.clone(),r=performance.now(),a=900;let o=!1;const c=()=>{if(o)return;const u=Math.min(1,(performance.now()-r)/a),d=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;this.camera.position.lerpVectors(i,e,d),this.controls.target.lerpVectors(s,t,d),u<1?requestAnimationFrame(c):this.flyAbort=null};this.flyAbort=()=>{o=!0,this.flyAbort=null},c()}dispose(){var e,t,i;this.running=!1,window.removeEventListener("resize",this.resize),window.removeEventListener("keydown",this.onPanKeyDown),window.removeEventListener("keyup",this.onPanKeyUp),this.canvas.removeEventListener("pointerdown",this.onPickPointerDown),this.canvas.removeEventListener("pointerup",this.onPickPointerUp),this.canvas.removeEventListener("pointermove",this.onPickPointerMove),(e=this.flyAbort)==null||e.call(this),(t=this.controls)==null||t.dispose(),(i=this.travelPath)==null||i.dispose(),this.renderer.dispose()}};Ye(kr,"PAN_KEY_CODES",new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight"]));let yo=kr;function dg(n,e){const t=Math.max(e,5e-4);return 1-ws.smoothstep(n,t*3,t*12)}function fg(n,e,t){if(n.length===0)return[];const i=n.slice().sort((a,o)=>a.camDist-o.camDist),s=[],r=[];for(const a of i){const o=a.x+zr,c=a.y-zr,l=o+Bu;if(c<-2*Sr||c>t+2*Sr)continue;const u=a.kind==="planet"?ug:lg,d=Math.max(8,a.name.length*u),f={l:l-2,r:l+d+2,t:c-Sr,b:c+Sr};let m=!1;for(const g of s)if(f.l<g.r&&f.r>g.l&&f.t<g.b&&f.b>g.t){m=!0;break}m||(s.push(f),r.push({key:a.key,name:a.name,kind:a.kind,tier:a.tier,ax:a.x,ay:a.y,lx:l,ly:c,elbowX:o,opacity:a.opacity}))}return r}var pg=Gt('<link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-1uha8ag"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" class="svelte-1uha8ag"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400;500;700&amp;display=swap" rel="stylesheet" class="svelte-1uha8ag"/>',1),mg=Hr('<g><circle class="ring svelte-1uha8ag" r="5"></circle><polyline class="svelte-1uha8ag"></polyline></g>'),gg=Gt('<div><span class="name svelte-1uha8ag"> </span></div>'),_g=Hr('<line class="svelte-1uha8ag"></line>'),vg=Gt('<div class="travel-tick-label svelte-1uha8ag"> </div>'),xg=Gt('<svg class="travel-ticks svelte-1uha8ag" aria-hidden="true"></svg> <div class="travel-tick-labels svelte-1uha8ag"></div>',1),Mg=Gt("<li> </li>"),Sg=Gt('<ul class="search-results svelte-1uha8ag"></ul>'),yg=Gt('<div class="travel-readout svelte-1uha8ag"><div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Distance</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Ship Time</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Earth Time</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Peak v</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Fuel Mass</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Energy</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-foot svelte-1uha8ag">Payload 1,000 t · photonic drive (vₑ = c)</div></div> <div class="overlay-slider svelte-1uha8ag"><div class="slider-head svelte-1uha8ag"><span class="slider-label svelte-1uha8ag">Constant Accel</span> <span class="slider-value svelte-1uha8ag"> </span></div> <input type="range" min="0.1" max="5" step="0.1" aria-label="Constant proper acceleration in g" class="svelte-1uha8ag"/> <div class="slider-ticks svelte-1uha8ag" aria-hidden="true"><span class="svelte-1uha8ag">0.1</span><span class="svelte-1uha8ag">1</span><span class="svelte-1uha8ag">5</span></div></div>',1),Eg=Hr('<line y1="4" y2="10" class="minor svelte-1uha8ag"></line>'),bg=Hr('<line y1="1" y2="13" class="major svelte-1uha8ag"></line>'),Tg=Gt('<b class="svelte-1uha8ag"> </b>'),Ag=Gt('<b class="svelte-1uha8ag"> </b>'),Pg=Gt('<aside class="hud scale-legend svelte-1uha8ag" aria-label="Grid scale legend"><div class="scale-title svelte-1uha8ag">Grid Scale</div> <svg class="scale-bar svelte-1uha8ag" preserveAspectRatio="none" aria-hidden="true"><defs class="svelte-1uha8ag"><clipPath id="scaleBarClip" class="svelte-1uha8ag"><rect x="0" y="0" height="14" class="svelte-1uha8ag"></rect></clipPath></defs><g clip-path="url(#scaleBarClip)" class="svelte-1uha8ag"><line x1="0" y1="7" y2="7" class="baseline svelte-1uha8ag"></line><g class="minor-ticks svelte-1uha8ag"></g><g class="major-caps svelte-1uha8ag"></g></g></svg> <div class="scale-rows svelte-1uha8ag"><div class="scale-row major svelte-1uha8ag"><span class="dot svelte-1uha8ag"></span><span class="lbl svelte-1uha8ag">Major</span> <!></div> <div class="scale-row minor svelte-1uha8ag"><span class="dot minor-dot svelte-1uha8ag"></span> <span class="lbl svelte-1uha8ag">Minor</span> <!></div></div></aside>'),wg=Gt('<div class="overlay svelte-1uha8ag"><div class="boot svelte-1uha8ag"><div class="boot-label svelte-1uha8ag">Initialising Stellar Catalogue</div> <div class="boot-bar svelte-1uha8ag"><span class="svelte-1uha8ag"></span></div> <div class="boot-sub svelte-1uha8ag">Gaia DR3 · All-Sky Astrometry</div></div></div>'),Dg=Gt('<div class="overlay svelte-1uha8ag"><div class="boot err svelte-1uha8ag"><div class="boot-label svelte-1uha8ag">Catalogue Load Failed</div> <div class="boot-sub svelte-1uha8ag"> </div></div></div>'),Rg=Gt(`<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="About this atlas"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Atlas</div> <h2 class="about-title svelte-1uha8ag">About GAIA Atlas</h2> <div class="about-rule svelte-1uha8ag"></div> <p class="about-body svelte-1uha8ag">Welcome to GAIA Atlas! This is an expansion of the original recreation of the <a href="https://valhovey.github.io/gaia-mary/" target="_blank" class="svelte-1uha8ag">Project Hail Mary star map</a> built using the <a href="https://www.cosmos.esa.int/web/gaia/dr3" target="_blank" class="svelte-1uha8ag">GAIA DR3 dataset</a> which contains 1.8 billion stars as well as their parameters (location, distance, spectra). Exoplanets are sourced from NASA's <a href="https://science.nasa.gov/exoplanets/exoplanet-catalog/" target="_blank" class="svelte-1uha8ag">exoplanet catalog</a>. Where GAIA was missing information, stellar data was supplemented with <a href="https://simbad.u-strasbg.fr/simbad/" target="_blank" class="svelte-1uha8ag">SIMBAD</a> information. All planet locations in the solar system are accurate on page load, and Pluto is included because I love them. Constellations are using the <a href="https://iauarchive.eso.org/public/themes/constellations/" target="_blank" class="svelte-1uha8ag">IAU standard sky culture</a>. The skybox is rendered from the remaining stars in the full GAIA dataset that are not included in the 3D system loaded in the browser (which means that if a star is in the map, it does not show up in the skybox). Also, for relativistic rocket calculations I used the equations in <a href="https://math.ucr.edu/home/baez/physics/Relativity/SR/Rocket/rocket.html" target="_blank" class="svelte-1uha8ag">John Baez' Relativistic Rocket FAQ</a>. For much more detailed calculations use <a href="https://www.overvieweffekt.com/tools/relativistic-travel-calculator" target="_blank" class="svelte-1uha8ag">Overview Effekt's wonderful calculator</a>. I hope you enjoy your explorations!</p> <p class="about-body svelte-1uha8ag"></p> <p class="about-sign svelte-1uha8ag">— <a href="https://valhovey.github.io" target="_blank" rel="noreferrer" class="svelte-1uha8ag">Val</a></p></div></div>`),Cg=Gt('<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about controls svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="Controls"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Controls</div> <h2 class="about-title svelte-1uha8ag">Navigation</h2> <div class="about-rule svelte-1uha8ag"></div> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Move</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><kbd class="svelte-1uha8ag">W</kbd><kbd class="svelte-1uha8ag">A</kbd><kbd class="svelte-1uha8ag">S</kbd><kbd class="svelte-1uha8ag">D</kbd></span> <span class="desc svelte-1uha8ag">Pan along the ecliptic plane</span> <span class="keys svelte-1uha8ag"><kbd class="svelte-1uha8ag">↑</kbd><kbd class="svelte-1uha8ag">←</kbd><kbd class="svelte-1uha8ag">↓</kbd><kbd class="svelte-1uha8ag">→</kbd></span> <span class="desc svelte-1uha8ag">Arrow-key alternative — same pan</span> <span class="keys svelte-1uha8ag"><kbd class="kbd-wide svelte-1uha8ag">Space</kbd><kbd class="kbd-wide svelte-1uha8ag">Shift</kbd></span> <span class="desc svelte-1uha8ag">Rise · descend (out of the ecliptic plane)</span></div></section> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Look</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Drag</span></span> <span class="desc svelte-1uha8ag">Orbit camera around the target</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Scroll</span></span> <span class="desc svelte-1uha8ag">Zoom in · out</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Mid-drag</span></span> <span class="desc svelte-1uha8ag">Pan (mouse only)</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Pinch</span></span> <span class="desc svelte-1uha8ag">Zoom (touch)</span></div></section> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Select</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Tap / Click</span></span> <span class="desc svelte-1uha8ag">Focus a star or planet</span> <span class="keys svelte-1uha8ag"><kbd class="kbd-wide svelte-1uha8ag">Esc</kbd></span> <span class="desc svelte-1uha8ag">Close panel · dismiss search</span></div></section></div></div>'),Lg=Gt('<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about share svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="Share view"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Transmission</div> <h2 class="about-title svelte-1uha8ag">Share View</h2> <div class="about-rule svelte-1uha8ag"></div> <p class="share-lede svelte-1uha8ag">Choose which pieces of your current view to include in the link.</p> <div class="share-grid svelte-1uha8ag"><label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">System</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Zoom</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Camera Direction</span></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Constellations</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Grid</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Travel Mode</span> <em class="share-hint svelte-1uha8ag"> </em></label></div> <div class="share-url svelte-1uha8ag"><input type="text" readonly="" aria-label="Share URL" class="svelte-1uha8ag"/> <button type="button"> </button></div></div></div>'),Ig=Gt('<div><canvas class="svelte-1uha8ag"></canvas> <div class="scrim svelte-1uha8ag"></div> <svg class="leaders svelte-1uha8ag" aria-hidden="true"></svg> <div class="labels svelte-1uha8ag"></div> <!> <div class="frame svelte-1uha8ag"><span class="corner tl svelte-1uha8ag"></span> <span class="corner tr svelte-1uha8ag"></span> <span class="corner bl svelte-1uha8ag"></span> <span class="corner br svelte-1uha8ag"></span></div> <header class="hud tl-panel svelte-1uha8ag"><div class="title svelte-1uha8ag">GAIA ATLAS</div> <div class="rule svelte-1uha8ag"></div> <div class="subtitle svelte-1uha8ag">Local Stellar Atlas</div> <div class="tl-btn-row svelte-1uha8ag"><button class="about-btn svelte-1uha8ag"><span class="ico svelte-1uha8ag">i</span>About</button> <button class="about-btn controls-btn svelte-1uha8ag" aria-label="Show keyboard and tap controls"><span class="ico kb svelte-1uha8ag" aria-hidden="true">⌨</span>Controls</button></div></header> <section class="hud tr-panel svelte-1uha8ag"><div><input type="search" inputmode="search" enterkeyhint="search" placeholder="Search" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" class="svelte-1uha8ag"/> <!> <label class="search-filter svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Only planetary systems</span></label></div> <div class="row system svelte-1uha8ag"><span class="svelte-1uha8ag">System</span><b class="svelte-1uha8ag"> </b></div> <div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Dist from Sol</span><b class="svelte-1uha8ag"> </b></div> <div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Zoom Dist</span><b class="svelte-1uha8ag"> </b></div></section> <div class="hud bottom-left-stack svelte-1uha8ag"><section class="overlays-panel svelte-1uha8ag"><div class="overlays-deck svelte-1uha8ag"><!></div> <div class="overlays-title svelte-1uha8ag">Overlays</div> <label class="overlay-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Constellations</span></label> <label class="overlay-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Grid</span></label> <label><input type="checkbox" class="svelte-1uha8ag"/> <span class="lbl-full svelte-1uha8ag">Interstellar Travel Time</span> <span class="lbl-short svelte-1uha8ag">Travel</span></label></section> <nav class="action-row svelte-1uha8ag" aria-label="View actions"><button class="action-btn svelte-1uha8ag" type="button"><span class="action-glyph svelte-1uha8ag" aria-hidden="true">◇</span>Home</button> <button class="action-btn svelte-1uha8ag" type="button"><span class="action-glyph svelte-1uha8ag" aria-hidden="true">⇗</span>Share</button></nav></div> <!> <footer class="hud br-panel svelte-1uha8ag"><span class="hint svelte-1uha8ag">Drag orbit · Scroll zoom<em class="svelte-1uha8ag">/</em></span>GAIA Atlas</footer> <!> <!> <!> <!> <!></div>');function Gg(n,e){Eh(e,!0);const t=500;let i,s=null,r=Ut($o({labels:[],camDist:0,nearCount:0,selectedSystemName:"Sol",cameraTargetDistPc:0,travel:{eligible:!1,stats:null,ticks:[]},gridScale:{major:0,minor:0,f:0}})),a=Ut(!0),o=Ut(null),c=Ut(!1),l=Ut(!1),u=Ut(!1),d=$o({system:!0,zoom:!0,direction:!0,constellations:!0,grid:!0,travel:!0}),f=Ut(!1),m=null,g=Ut(0);const _=3.26156,h=365.25*86400;function p(H){return H<1?`${(H*_).toFixed(3)} ly`:H<100?`${H.toFixed(2)} pc / ${(H*_).toFixed(1)} ly`:`${H.toFixed(0)} pc / ${(H*_).toFixed(0)} ly`}const E=206264.806;function S(H){if(H<=0)return"—";const G=H/3;if(G>=1e3)return`${(G/1e3).toPrecision(3)} kpc`;if(G>=10)return`${G.toPrecision(3)} pc`;if(G>=1)return`${G.toFixed(2)} pc`;const Ee=G*_;if(Ee>=1)return`${Ee.toPrecision(3)} ly`;const x=G*E;return x>=1?`${x.toPrecision(3)} AU`:`${x.toExponential(2)} AU`}function T(H){if(H<86400)return`${(H/3600).toFixed(1)} h`;const G=H/h;if(G<1)return`${(H/86400).toFixed(1)} d`;if(G<10){const Ee=Math.floor(G),x=Math.round((G-Ee)*12);return x===12?`${Ee+1} y`:x>0?`${Ee} y ${x} mo`:`${Ee} y`}return G<1e3?`${G.toFixed(1)} yr`:G<1e6?`${(G/1e3).toFixed(2)} kyr`:G<1e9?`${(G/1e6).toFixed(2)} Myr`:`${G.toExponential(2)} yr`}function I(H){const G=H/1e3;return G<1?`${(G*1e3).toFixed(0)} kg`:G<1e3?`${G.toFixed(1)} t`:G<1e6?`${(G/1e3).toFixed(2)} kt`:G<1e9?`${(G/1e6).toFixed(2)} Mt`:G<1e12?`${(G/1e9).toFixed(2)} Gt`:`${G.toExponential(2)} t`}function P(H){const G=[[1,"J"],[1e3,"kJ"],[1e6,"MJ"],[1e9,"GJ"],[1e12,"TJ"],[1e15,"PJ"],[1e18,"EJ"],[1e21,"ZJ"],[1e24,"YJ"]];if(H<1)return`${H.toExponential(2)} J`;for(let Ee=G.length-1;Ee>=0;Ee--)if(H>=G[Ee][0]){const[x,C]=G[Ee];return`${(H/x).toFixed(2)} ${C}`}return`${H.toExponential(2)} J`}function A(H){const G=H/9460730472580800;return G<1?`${(G*1e3).toFixed(0)} mly`:G<100?`${G.toFixed(2)} ly`:G<1e4?`${G.toFixed(1)} ly`:G<1e6?`${(G/1e3).toFixed(2)} kly`:G<1e9?`${(G/1e6).toFixed(2)} Mly`:`${G.toExponential(2)} ly`}const F=Ou.map(H=>({id:H.id,name:H.name,prepared:rc.prepare(H.name),hasPlanets:H.children.some(G=>G.kind==="planet")}));let $=Ut(""),v=Ut(!1),y=Ut(0),W=Ut(null),X=Ut(!1),Y=Ut(!1),ee=Ut(!0),k=Ut(1),ie=Ut(!1);Ti(()=>{const H=q(Y);s&&s.setConstellationsVisible(H)}),Ti(()=>{const H=q(X);s&&s.setExoplanetRingsVisible(H)}),Ti(()=>{const H=q(ee);s&&s.setGridVisible(H)}),Ti(()=>{const H=q(k);s&&s.setTravelAccelG(H)}),Ti(()=>{const H=q(ie);s&&s.setTravelPathVisible(H)}),Ti(()=>{!q(r).travel.eligible&&q(ie)&&Xe(ie,!1)});const K=oi(()=>{const H=q(X)?F.filter(x=>x.hasPlanets):F,G=q($).trim();return G?rc.go(G,H,{key:"prepared",limit:50}).map(x=>x.obj):H});function pe(H){var G;Xe(v,!1),Xe($,""),(G=q(W))==null||G.blur(),s==null||s.focusSystem(H)}function le(H){var Ee;const G=q(K).length;if(!G){H.key==="Escape"&&Xe(v,!1);return}H.key==="ArrowDown"?(H.preventDefault(),Xe(y,(q(y)+1)%G)):H.key==="ArrowUp"?(H.preventDefault(),Xe(y,(q(y)-1+G)%G)):H.key==="Enter"?(H.preventDefault(),pe(q(K)[q(y)].id)):H.key==="Escape"&&(Xe(v,!1),(Ee=q(W))==null||Ee.blur())}Ti(()=>{q(y)>=q(K).length&&Xe(y,0)}),Ti(()=>{q(y);const H=document.querySelector(".search-results li.active");H==null||H.scrollIntoView({block:"nearest"})});function Te(H,G=4){return isFinite(H)?parseFloat(H.toPrecision(G)).toString():"0"}function et(){const H=new URLSearchParams,G=s==null?void 0:s.getCameraState();d.system&&G&&H.set("s",G.systemId),d.zoom&&G&&H.set("d",Te(G.dist,5)),d.direction&&G&&(H.set("y",Te(G.yaw,4)),H.set("p",Te(G.pitch,4))),d.constellations&&H.set("c",q(Y)?"1":"0"),d.grid&&H.set("g",q(ee)?"1":"0"),d.travel&&(H.set("t",q(ie)?"1":"0"),q(ie)&&H.set("a",Te(q(k),2)));const Ee=typeof window<"u"?`${window.location.origin}${window.location.pathname}`:"",x=H.toString();return x?`${Ee}?${x}`:Ee}const qe=oi(()=>(q(g),d.system,d.zoom,d.direction,d.constellations,d.grid,d.travel,q(Y),q(ee),q(ie),q(k),et()));Ti(()=>{if(!q(u))return;const H=setInterval(()=>Xe(g,q(g)+1),250);return()=>clearInterval(H)});async function L(){try{await navigator.clipboard.writeText(q(qe)),Xe(f,!0),m&&clearTimeout(m),m=setTimeout(()=>Xe(f,!1),1500)}catch{const H=document.querySelector(".share-url input");H==null||H.select()}}function D(){Xe(Y,!1),Xe(ee,!0),Xe(ie,!1),Xe(k,1),Xe(X,!1),s==null||s.viewHome()}Hu(()=>{const H=new yo(i);return s=H,window.starmap=H,H.setHudCallback(G=>{Xe(r,G,!0)}),window.addEventListener("resize",H.resize),H.init(Dh).then(()=>{Xe(a,!1);const G=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams;if(G.has("c")&&Xe(Y,G.get("c")==="1"),G.has("g")&&Xe(ee,G.get("g")==="1"),G.has("t")&&Xe(ie,G.get("t")==="1"),G.has("a")){const x=parseFloat(G.get("a"));isFinite(x)&&x>0&&Xe(k,x,!0)}const Ee={};if(G.has("s")&&(Ee.systemId=G.get("s")),G.has("d")){const x=parseFloat(G.get("d"));isFinite(x)&&x>0&&(Ee.dist=x)}if(G.has("y")){const x=parseFloat(G.get("y"));isFinite(x)&&(Ee.yaw=x)}if(G.has("p")){const x=parseFloat(G.get("p"));isFinite(x)&&(Ee.pitch=x)}Object.keys(Ee).length>0&&(H.applyCameraState(Ee),H.publishHudNow()),H.setConstellationsVisible(q(Y)),H.setGridVisible(q(ee)),H.setExoplanetRingsVisible(q(X)),H.setTravelAccelG(q(k)),H.setTravelPathVisible(q(ie))}).catch(G=>{Xe(o,G instanceof Error?G.message:String(G),!0),Xe(a,!1)}),()=>{window.removeEventListener("resize",H.resize),H.dispose()}});var V=Ig();Bh("1uha8ag",H=>{var G=pg();vi(4),bt(H,G)}),Vs("keydown",Th,H=>{H.key==="Escape"&&(Xe(c,!1),Xe(l,!1),Xe(u,!1))});let te;var ae=be(V);Zo(ae,H=>i=H,()=>i);var se=Ue(ae,4);nn(se,21,()=>q(r).labels,H=>H.key,(H,G)=>{var Ee=mg(),x=be(Ee),C=Ue(x);ge(Ee),jt(()=>{sn(Ee,0,`leader ${q(G).kind??""} ${q(G).tier??""}`,"svelte-1uha8ag"),ms(Ee,`opacity:${q(G).opacity??""}`),Nt(x,"cx",q(G).ax),Nt(x,"cy",q(G).ay),Nt(C,"points",`${q(G).ax??""},${q(G).ay??""} ${q(G).elbowX??""},${q(G).ly??""} ${q(G).lx??""},${q(G).ly??""}`)}),Gi(1,Ee,()=>Vi,()=>({duration:t})),bt(H,Ee)}),ge(se);var ne=Ue(se,2);nn(ne,21,()=>q(r).labels,H=>H.key,(H,G)=>{var Ee=gg(),x=be(Ee),C=be(x,!0);ge(x),ge(Ee),jt(()=>{sn(Ee,1,`label ${q(G).kind??""} ${q(G).tier??""}`,"svelte-1uha8ag"),ms(Ee,`transform:translate3d(${q(G).lx??""}px,${q(G).ly??""}px,0); opacity:${q(G).opacity??""}`),vt(C,q(G).name)}),Gi(1,Ee,()=>Vi,()=>({duration:t})),bt(H,Ee)}),ge(ne);var ve=Ue(ne,2);{var he=H=>{var G=xg(),Ee=jo(G);nn(Ee,21,()=>q(r).travel.ticks,C=>C.key,(C,O)=>{var B=_g();jt(()=>{Nt(B,"x1",q(O).x1),Nt(B,"y1",q(O).y1),Nt(B,"x2",q(O).x2),Nt(B,"y2",q(O).y2)}),bt(C,B)}),ge(Ee);var x=Ue(Ee,2);nn(x,21,()=>q(r).travel.ticks,C=>C.key,(C,O)=>{var B=vg(),N=be(B,!0);ge(B),jt(()=>{ms(B,`transform:translate3d(${q(O).lx??""}px,${q(O).ly??""}px,0) translate(-50%,-50%)`),vt(N,q(O).label)}),bt(C,B)}),ge(x),Gi(1,Ee,()=>Vi,()=>({duration:200})),Gi(1,x,()=>Vi,()=>({duration:200})),bt(H,G)};Ai(ve,H=>{q(r).travel.ticks.length>0&&H(he)})}var w=Ue(ve,4),He=Ue(be(w),6),Be=be(He),ze=Ue(Be,2);ge(He),ge(w);var me=Ue(w,2),We=be(me);let Me;var b=be(We);Jt(b),Zo(b,H=>Xe(W,H),()=>q(W));var M=Ue(b,2);{var z=H=>{var G=Sg();nn(G,23,()=>q(K),Ee=>Ee.id,(Ee,x,C)=>{var O=Mg();let B;var N=be(O,!0);ge(O),jt(()=>{B=sn(O,1,"svelte-1uha8ag",null,B,{active:q(C)===q(y)}),vt(N,q(x).name)}),Bt("mousedown",O,()=>pe(q(x).id)),Vs("mouseenter",O,()=>Xe(y,q(C),!0)),bt(Ee,O)}),ge(G),bt(H,G)};Ai(M,H=>{q(v)&&q(K).length&&H(z)})}var Z=Ue(M,2),J=be(Z);Jt(J),vi(2),ge(Z),ge(We);var j=Ue(We,2),oe=Ue(be(j)),de=be(oe,!0);ge(oe),ge(j);var fe=Ue(j,2),Ke=Ue(be(fe)),ce=be(Ke,!0);ge(Ke),ge(fe);var De=Ue(fe,2),xe=Ue(be(De)),Se=be(xe,!0);ge(xe),ge(De),ge(me);var Ce=Ue(me,2),Ge=be(Ce),Ve=be(Ge),ot=be(Ve);{var U=H=>{var G=yg(),Ee=jo(G),x=be(Ee),C=Ue(be(x)),O=be(C,!0);ge(C),ge(x);var B=Ue(x,2),N=Ue(be(B)),ue=be(N,!0);ge(N),ge(B);var _e=Ue(B,2),we=Ue(be(_e)),Le=be(we,!0);ge(we),ge(_e);var Fe=Ue(_e,2),Oe=Ue(be(Fe)),Ne=be(Oe);ge(Oe),ge(Fe);var $e=Ue(Fe,2),rt=Ue(be($e)),ct=be(rt,!0);ge(rt),ge($e);var St=Ue($e,2),je=Ue(be(St)),Ie=be(je,!0);ge(je),ge(St),vi(2),ge(Ee);var ft=Ue(Ee,2),tt=be(ft),Et=Ue(be(tt),2),qt=be(Et);ge(Et),ge(tt);var lt=Ue(tt,2);Jt(lt),vi(2),ge(ft),jt((dt,it,$t,_i,It,tn,At)=>{vt(O,dt),vt(ue,it),vt(Le,$t),vt(Ne,`${_i??""} c`),vt(ct,It),vt(Ie,tn),vt(qt,`${At??""} g`)},[()=>A(q(r).travel.stats.distanceM),()=>T(q(r).travel.stats.shipTimeS),()=>T(q(r).travel.stats.earthTimeS),()=>(q(r).travel.stats.vMax/299792458).toFixed(4),()=>I(q(r).travel.stats.fuelMassKg),()=>P(q(r).travel.stats.energyJ),()=>q(k).toFixed(1)]),Gi(3,Ee,()=>Vi,()=>({duration:160})),sc(lt,()=>q(k),dt=>Xe(k,dt)),Gi(3,ft,()=>Vi,()=>({duration:160})),bt(H,G)};Ai(ot,H=>{q(ie)&&q(r).travel.eligible&&q(r).travel.stats&&H(U)})}ge(Ve);var Re=Ue(Ve,4),Q=be(Re);Jt(Q),vi(2),ge(Re);var re=Ue(Re,2),Ae=be(re);Jt(Ae),vi(2),ge(re);var Pe=Ue(re,2);let st;var gt=be(Pe);Jt(gt),vi(4),ge(Pe),ge(Ge);var Lt=Ue(Ge,2),at=be(Lt),Ot=Ue(at,2);ge(Lt),ge(Ce);var ti=Ue(Ce,2);{var Bs=H=>{const G=oi(()=>S(q(r).gridScale.major)),Ee=oi(()=>S(q(r).gridScale.minor)),x=oi(()=>q(r).gridScale.f),C=oi(()=>Math.max(0,1-q(x))),O=oi(()=>150),B=oi(()=>q(O)*Math.pow(5,-q(x))),N=oi(()=>q(B)/5),ue=oi(()=>[0,1,2,3,4,5].map(lt=>lt*q(B))),_e=oi(()=>[0,1,2,3,4].flatMap(lt=>[1,2,3,4].map(dt=>lt*q(B)+dt*q(N))));var we=Pg(),Le=Ue(be(we),2);Nt(Le,"viewBox",`0 0 ${q(O)??""} 14`);var Fe=be(Le),Oe=be(Fe),Ne=be(Oe);Nt(Ne,"width",q(O)),ge(Oe),ge(Fe);var $e=Ue(Fe),rt=be($e);Nt(rt,"x2",q(O));var ct=Ue(rt);nn(ct,21,()=>q(_e),Qo,(lt,dt)=>{var it=Eg();jt(()=>{Nt(it,"x1",q(dt)),Nt(it,"x2",q(dt))}),bt(lt,it)}),ge(ct);var St=Ue(ct);nn(St,21,()=>q(ue),Qo,(lt,dt)=>{var it=bg();jt(()=>{Nt(it,"x1",q(dt)),Nt(it,"x2",q(dt))}),bt(lt,it)}),ge(St),ge($e),ge(Le);var je=Ue(Le,2),Ie=be(je),ft=Ue(be(Ie),3);Jo(ft,()=>q(G),lt=>{var dt=Tg(),it=be(dt,!0);ge(dt),jt(()=>vt(it,q(G))),Gi(1,dt,()=>Vi,()=>({duration:220})),bt(lt,dt)}),ge(Ie);var tt=Ue(Ie,2),Et=be(tt),qt=Ue(Et,4);Jo(qt,()=>q(Ee),lt=>{var dt=Ag(),it=be(dt,!0);ge(dt),jt(()=>vt(it,q(Ee))),Gi(1,dt,()=>Vi,()=>({duration:220})),bt(lt,dt)}),ge(tt),ge(je),ge(we),jt(()=>{ms(ct,`opacity:${q(C)??""}`),ms(Et,`opacity:${q(C)??""}`)}),bt(H,we)};Ai(ti,H=>{q(ee)&&H(Bs)})}var us=Ue(ti,4);{var bi=H=>{var G=wg();bt(H,G)};Ai(us,H=>{q(a)&&H(bi)})}var bn=Ue(us,2);{var zs=H=>{var G=Dg(),Ee=be(G),x=Ue(be(Ee),2),C=be(x,!0);ge(x),ge(Ee),ge(G),jt(()=>vt(C,q(o))),bt(H,G)};Ai(bn,H=>{q(o)&&H(zs)})}var hs=Ue(bn,2);{var Tn=H=>{var G=Rg(),Ee=be(G),x=be(Ee);vi(12),ge(Ee),ge(G),Bt("click",G,()=>Xe(c,!1)),Bt("click",Ee,C=>C.stopPropagation()),Bt("click",x,()=>Xe(c,!1)),bt(H,G)};Ai(hs,H=>{q(c)&&H(Tn)})}var ds=Ue(hs,2);{var An=H=>{var G=Cg(),Ee=be(G),x=be(Ee);vi(12),ge(Ee),ge(G),Bt("click",G,()=>Xe(l,!1)),Bt("click",Ee,C=>C.stopPropagation()),Bt("click",x,()=>Xe(l,!1)),bt(H,G)};Ai(ds,H=>{q(l)&&H(An)})}var ks=Ue(ds,2);{var Hs=H=>{var G=Lg(),Ee=be(G),x=be(Ee),C=Ue(x,10),O=be(C),B=be(O);Jt(B);var N=Ue(B,4),ue=be(N,!0);ge(N),ge(O);var _e=Ue(O,2),we=be(_e);Jt(we);var Le=Ue(we,4),Fe=be(Le,!0);ge(Le),ge(_e);var Oe=Ue(_e,2),Ne=be(Oe);Jt(Ne),vi(2),ge(Oe);var $e=Ue(Oe,2),rt=be($e);Jt(rt);var ct=Ue(rt,4),St=be(ct,!0);ge(ct),ge($e);var je=Ue($e,2),Ie=be(je);Jt(Ie);var ft=Ue(Ie,4),tt=be(ft,!0);ge(ft),ge(je);var Et=Ue(je,2),qt=be(Et);Jt(qt);var lt=Ue(qt,4),dt=be(lt,!0);ge(lt),ge(Et),ge(C);var it=Ue(C,2),$t=be(it);Jt($t);var _i=Ue($t,2);let It;var tn=be(_i,!0);ge(_i),ge(it),ge(Ee),ge(G),jt((At,Gs)=>{vt(ue,q(r).selectedSystemName),vt(Fe,At),vt(St,q(Y)?"on":"off"),vt(tt,q(ee)?"on":"off"),vt(dt,Gs),Xh($t,q(qe)),It=sn(_i,1,"share-copy svelte-1uha8ag",null,It,{copied:q(f)}),vt(tn,q(f)?"Copied":"Copy Link")},[()=>p(q(r).camDist),()=>q(ie)?`on · ${q(k).toFixed(1)} g`:"off"]),Bt("click",G,()=>Xe(u,!1)),Bt("click",Ee,At=>At.stopPropagation()),Bt("click",x,()=>Xe(u,!1)),xi(B,()=>d.system,At=>d.system=At),xi(we,()=>d.zoom,At=>d.zoom=At),xi(Ne,()=>d.direction,At=>d.direction=At),xi(rt,()=>d.constellations,At=>d.constellations=At),xi(Ie,()=>d.grid,At=>d.grid=At),xi(qt,()=>d.travel,At=>d.travel=At),Bt("click",_i,L),bt(H,G)};Ai(ks,H=>{q(u)&&H(Hs)})}ge(V),jt((H,G)=>{te=sn(V,1,"stage svelte-1uha8ag",null,te,{ready:!q(a)}),Me=sn(We,1,"search-box svelte-1uha8ag",null,Me,{open:q(v)}),vt(de,q(r).selectedSystemName),vt(ce,H),vt(Se,G),st=sn(Pe,1,"overlay-row svelte-1uha8ag",null,st,{disabled:!q(r).travel.eligible}),Nt(Pe,"title",q(r).travel.eligible?"":"Please select a star different from our Sun"),gt.disabled=!q(r).travel.eligible},[()=>p(q(r).cameraTargetDistPc),()=>p(q(r).camDist)]),Bt("click",Be,()=>Xe(c,!0)),Bt("click",ze,()=>Xe(l,!0)),Vs("focus",b,()=>Xe(v,!0)),Vs("blur",b,()=>setTimeout(()=>Xe(v,!1),130)),Bt("keydown",b,le),sc(b,()=>q($),H=>Xe($,H)),xi(J,()=>q(X),H=>Xe(X,H)),xi(Q,()=>q(Y),H=>Xe(Y,H)),xi(Ae,()=>q(ee),H=>Xe(ee,H)),xi(gt,()=>q(ie),H=>Xe(ie,H)),Bt("click",at,D),Bt("click",Ot,()=>Xe(u,!0)),bt(n,V),bh()}Ph(["click","keydown","mousedown"]);export{Gg as component};
