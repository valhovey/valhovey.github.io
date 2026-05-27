var Fu=Object.defineProperty;var Ou=(i,e,t)=>e in i?Fu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var $e=(i,e,t)=>Ou(i,typeof e!="symbol"?e+"":e,t);import{a as It,f as qt,d as vo}from"../chunks/r6iy9GKE.js";import{o as Bu}from"../chunks/CgW0znJV.js";import{am as Dt,ak as yl,V as xo,a1 as _r,aS as ys,ag as El,ad as J,aJ as zu,p as ku,aX as ko,aT as Es,al as xs,d as bl,m as Hu,ar as Ho,a2 as zn,j as bi,W as Tr,a8 as Gu,aV as Vu,a6 as Wu,i as Xu,h as Ku,aA as Yu,aY as Go,E as qu,D as $u,aM as Tl,aD as Al,I as Wr,b as ju,Y as Zu,az as Ju,a7 as Qu,U as Mo,at as eh,ah as Aa,g as Pl,aI as So,f as th,M as ih,l as nh,B as sh,R as rh,a9 as ah,b3 as yo,G as oh,aw as ch,aC as us,b7 as wl,J as lh,K as uh,H as hh,C as Vo,w as Wo,A as dh,N as fh,ai as ph,af as mh,F as gh,Q as _h,s as vh,r as Dl,ax as Rl,b2 as xh,aK as Cl,aH as Mh,aZ as Ut,aG as Xo,b5 as ki,aO as Ye,b1 as ti,aE as Sh,X as Re,aW as Ne,aB as Si,$ as yh,aL as Se,b4 as li,ab as Eh}from"../chunks/lxDbxSYs.js";import{b as bh,d as Th,e as Os,a as Ot,s as St}from"../chunks/BTmjdIAC.js";import{b as Ko,i as Hi}from"../chunks/Bkwezt9T.js";import{B as Ah}from"../chunks/JdF8cX35.js";import{d as Ph}from"../chunks/DSmPUXog.js";const wh=Symbol("NaN");function Yo(i,e,t){Dt&&yl();var n=new Ah(i);xo(()=>{var s=e();s!==s&&(s=wh),n.ensure(s,t)})}function qo(i,e){return e}function Dh(i,e,t){for(var n=[],s=e.length,r,a=e.length,o=0;o<s;o++){let f=e[o];Al(f,()=>{if(r){if(r.pending.delete(f),r.done.add(f),r.pending.size===0){var d=i.outrogroups;Pa(i,Mo(r.done)),d.delete(r),d.size===0&&(i.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=n.length===0&&t!==null;if(c){var l=t,u=l.parentNode;Zu(u),u.append(l),i.items.clear()}Pa(i,e,!c)}else r={pending:new Set(e),done:new Set},(i.outrogroups??(i.outrogroups=new Set)).add(r)}function Pa(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const a of i.pending.values())for(const o of a)n.add(i.items.get(o).e)}for(var s=0;s<e.length;s++){var r=e[s];if(n!=null&&n.has(r)){r.f|=bi;const a=document.createDocumentFragment();Ju(r,a)}else Qu(e[s],t)}}var $o;function hs(i,e,t,n,s,r=null){var a=i,o=new Map,c=(e&Pl)!==0;if(c){var l=i;a=Dt?ys(El(l)):l.appendChild(_r())}Dt&&yl();var u=null,f=Wu(()=>{var M=t();return eh(M)?M:M==null?[]:Mo(M)}),d,m=new Map,g=!0;function _(M){E.effect.f&$u||(E.pending.delete(M),E.fallback=u,Rh(E,d,a,e,n),u!==null&&(d.length===0?u.f&bi?(u.f^=bi,Ms(u,null,a)):Tl(u):Al(u,()=>{u=null})))}function h(M){E.pending.delete(M)}var p=xo(()=>{d=J(f);var M=d.length;let T=!1;if(Dt){var L=zu(a)===ku;L!==(M===0)&&(a=ko(),ys(a),Es(!1),T=!0)}for(var P=new Set,A=zn,F=Vu(),Q=0;Q<M;Q+=1){Dt&&xs.nodeType===bl&&xs.data===Hu&&(a=xs,T=!0,Es(!1));var v=d[Q],S=n(v,Q),X=g?null:o.get(S);X?(X.v&&Ho(X.v,v),X.i&&Ho(X.i,Q),F&&A.unskip_effect(X.e)):(X=Ch(o,g?a:$o??($o=_r()),v,S,Q,s,e,t),g||(X.e.f|=bi),o.set(S,X)),P.add(S)}if(M===0&&r&&!u&&(g?u=Tr(()=>r(a)):(u=Tr(()=>r($o??($o=_r()))),u.f|=bi)),M>P.size&&Gu(),Dt&&M>0&&ys(ko()),!g)if(m.set(A,P),F){for(const[K,Y]of o)P.has(K)||A.skip_effect(Y.e);A.oncommit(_),A.ondiscard(h)}else _(A);T&&Es(!0),J(f)}),E={effect:p,items:o,pending:m,outrogroups:null,fallback:u};g=!1,Dt&&(a=xs)}function ds(i){for(;i!==null&&!(i.f&ju);)i=i.next;return i}function Rh(i,e,t,n,s){var v,S,X,K,Y,ie,H,re,W;var r=(n&th)!==0,a=e.length,o=i.items,c=ds(i.effect.first),l,u=null,f,d=[],m=[],g,_,h,p;if(r)for(p=0;p<a;p+=1)g=e[p],_=s(g,p),h=o.get(_).e,h.f&bi||((S=(v=h.nodes)==null?void 0:v.a)==null||S.measure(),(f??(f=new Set)).add(h));for(p=0;p<a;p+=1){if(g=e[p],_=s(g,p),h=o.get(_).e,i.outrogroups!==null)for(const pe of i.outrogroups)pe.pending.delete(h),pe.done.delete(h);if(h.f&Wr&&(Tl(h),r&&((K=(X=h.nodes)==null?void 0:X.a)==null||K.unfix(),(f??(f=new Set)).delete(h))),h.f&bi)if(h.f^=bi,h===c)Ms(h,null,t);else{var E=u?u.next:c;h===i.effect.last&&(i.effect.last=h.prev),h.prev&&(h.prev.next=h.next),h.next&&(h.next.prev=h.prev),Gi(i,u,h),Gi(i,h,E),Ms(h,E,t),u=h,d=[],m=[],c=ds(u.next);continue}if(h!==c){if(l!==void 0&&l.has(h)){if(d.length<m.length){var M=m[0],T;u=M.prev;var L=d[0],P=d[d.length-1];for(T=0;T<d.length;T+=1)Ms(d[T],M,t);for(T=0;T<m.length;T+=1)l.delete(m[T]);Gi(i,L.prev,P.next),Gi(i,u,L),Gi(i,P,M),c=M,u=P,p-=1,d=[],m=[]}else l.delete(h),Ms(h,c,t),Gi(i,h.prev,h.next),Gi(i,h,u===null?i.effect.first:u.next),Gi(i,u,h),u=h;continue}for(d=[],m=[];c!==null&&c!==h;)(l??(l=new Set)).add(c),m.push(c),c=ds(c.next);if(c===null)continue}h.f&bi||d.push(h),u=h,c=ds(h.next)}if(i.outrogroups!==null){for(const pe of i.outrogroups)pe.pending.size===0&&(Pa(i,Mo(pe.done)),(Y=i.outrogroups)==null||Y.delete(pe));i.outrogroups.size===0&&(i.outrogroups=null)}if(c!==null||l!==void 0){var A=[];if(l!==void 0)for(h of l)h.f&Wr||A.push(h);for(;c!==null;)!(c.f&Wr)&&c!==i.fallback&&A.push(c),c=ds(c.next);var F=A.length;if(F>0){var Q=n&Pl&&a===0?t:null;if(r){for(p=0;p<F;p+=1)(H=(ie=A[p].nodes)==null?void 0:ie.a)==null||H.measure();for(p=0;p<F;p+=1)(W=(re=A[p].nodes)==null?void 0:re.a)==null||W.fix()}Dh(i,A,Q)}}r&&So(()=>{var pe,de;if(f!==void 0)for(h of f)(de=(pe=h.nodes)==null?void 0:pe.a)==null||de.apply()})}function Ch(i,e,t,n,s,r,a,o){var c=a&Xu?a&Ku?Go(t):Yu(t,!1,!1):null,l=a&qu?Go(s):null;return{v:c,i:l,e:Tr(()=>(r(e,c??t,l??s,o),()=>{i.delete(n)}))}}function Ms(i,e,t){if(i.nodes)for(var n=i.nodes.start,s=i.nodes.end,r=e&&!(e.f&bi)?e.nodes.start:t;n!==null;){var a=Aa(n);if(r.before(n),n===s)return;n=a}}function Gi(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}const Lh=()=>performance.now(),Ii={tick:i=>requestAnimationFrame(i),now:()=>Lh(),tasks:new Set};function Ll(){const i=Ii.now();Ii.tasks.forEach(e=>{e.c(i)||(Ii.tasks.delete(e),e.f())}),Ii.tasks.size!==0&&Ii.tick(Ll)}function Ih(i){let e;return Ii.tasks.size===0&&Ii.tick(Ll),{promise:new Promise(t=>{Ii.tasks.add(e={c:i,f:t})}),abort(){Ii.tasks.delete(e)}}}function Bs(i,e){wl(()=>{i.dispatchEvent(new CustomEvent(e))})}function Uh(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const e=i.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function jo(i){const e={},t=i.split(";");for(const n of t){const[s,r]=n.split(":");if(!s||r===void 0)break;const a=Uh(s.trim());e[a]=r.trim()}return e}const Nh=i=>i;function En(i,e,t,n){var M;var s=(i&lh)!==0,r=(i&uh)!==0,a=s&&r,o=(i&oh)!==0,c=a?"both":s?"in":"out",l,u=e.inert,f=e.style.overflow,d,m;function g(){return wl(()=>l??(l=t()(e,(n==null?void 0:n())??{},{direction:c})))}var _={is_global:o,in(){var T;if(e.inert=u,!s){m==null||m.abort(),(T=m==null?void 0:m.reset)==null||T.call(m);return}r||d==null||d.abort(),d=wa(e,g(),m,1,()=>{Bs(e,"introstart")},()=>{Bs(e,"introend"),d==null||d.abort(),d=l=void 0,e.style.overflow=f})},out(T){if(!r){T==null||T(),l=void 0;return}e.inert=!0,m=wa(e,g(),d,0,()=>{Bs(e,"outrostart")},()=>{Bs(e,"outroend"),T==null||T()})},stop:()=>{d==null||d.abort(),m==null||m.abort()}},h=ih;if(((M=h.nodes).t??(M.t=[])).push(_),s&&bh){var p=o;if(!p){for(var E=h.parent;E&&E.f&nh;)for(;(E=E.parent)&&!(E.f&sh););p=!E||(E.f&rh)!==0}p&&ah(()=>{yo(()=>_.in())})}}function wa(i,e,t,n,s,r){var a=n===1;if(ch(e)){var o,c=!1;return So(()=>{if(!c){var p=e({direction:a?"in":"out"});o=wa(i,p,t,n,s,r)}}),{abort:()=>{c=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration)&&!(e!=null&&e.delay))return s(),r(),{abort:us,deactivate:us,reset:us,t:()=>n};const{delay:l=0,css:u,tick:f,easing:d=Nh}=e;var m=[];if(a&&t===void 0&&(f&&f(0,1),u)){var g=jo(u(0,1));m.push(g,g)}var _=()=>1-n,h=i.animate(m,{duration:l,fill:"forwards"});return h.onfinish=()=>{h.cancel(),s();var p=(t==null?void 0:t.t())??1-n;t==null||t.abort();var E=n-p,M=e.duration*Math.abs(E),T=[];if(M>0){var L=!1;if(u)for(var P=Math.ceil(M/16.666666666666668),A=0;A<=P;A+=1){var F=p+E*d(A/P),Q=jo(u(F,1-F));T.push(Q),L||(L=Q.overflow==="hidden")}L&&(i.style.overflow="hidden"),_=()=>{var v=h.currentTime;return p+E*d(v/M)},f&&Ih(()=>{if(h.playState!=="running")return!1;var v=_();return f(v,1-v),!0})}h=i.animate(T,{duration:M,fill:"forwards"}),h.onfinish=()=>{_=()=>n,f==null||f(n,1-n),r()}},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=us)},deactivate:()=>{r=us},reset:()=>{n===0&&(f==null||f(1,0))},t:()=>_()}}function Fh(i,e){let t=null,n=Dt;var s;if(Dt){t=xs;for(var r=El(document.head);r!==null&&(r.nodeType!==bl||r.data!==i);)r=Aa(r);if(r===null)Es(!1);else{var a=Aa(r);r.remove(),ys(a)}}Dt||(s=document.head.appendChild(_r()));try{xo(()=>{var o=Tr(()=>e(s));o.f|=hh})}finally{n&&(Es(!0),ys(t))}}const Zo=[...` 	
\r\f \v\uFEFF`];function Oh(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var s of Object.keys(t))if(t[s])n=n?n+" "+s:s;else if(n.length)for(var r=s.length,a=0;(a=n.indexOf(s,a))>=0;){var o=a+r;(a===0||Zo.includes(n[a-1]))&&(o===n.length||Zo.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Bh(i,e){return i==null?null:String(i)}function nn(i,e,t,n,s,r){var a=i[Vo];if(Dt||a!==t||a===void 0){var o=Oh(t,n,r);(!Dt||o!==i.getAttribute("class"))&&(o==null?i.removeAttribute("class"):e?i.className=o:i.setAttribute("class",o)),i[Vo]=t}else if(r&&s!==r)for(var c in r){var l=!!r[c];(s==null||l!==!!s[c])&&i.classList.toggle(c,l)}return r}function zs(i,e,t,n){var s=i[Wo];if(Dt||s!==e){var r=Bh(e);(!Dt||r!==i.getAttribute("style"))&&(r==null?i.removeAttribute("style"):i.style.cssText=r),i[Wo]=e}return n}const zh=Symbol("is custom element"),kh=Symbol("is html"),Hh=Dl?"link":"LINK",Gh=Dl?"progress":"PROGRESS";function jt(i){if(Dt){var e=!1,t=()=>{if(!e){if(e=!0,i.hasAttribute("value")){var n=i.value;Qt(i,"value",null),i.value=n}if(i.hasAttribute("checked")){var s=i.checked;Qt(i,"checked",null),i.checked=s}}};i[gh]=t,So(t),_h()}}function Vh(i,e){var t=Il(i);t.value===(t.value=e??void 0)||i.value===e&&(e!==0||i.nodeName!==Gh)||(i.value=e??"")}function Qt(i,e,t,n){var s=Il(i);Dt&&(s[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName===Hh)||s[e]!==(s[e]=t)&&(e==="loading"&&(i[vh]=t),t==null?i.removeAttribute(e):typeof t!="string"&&Wh(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function Il(i){var e;return i[e=dh]??(i[e]={[zh]:i.nodeName.includes("-"),[kh]:i.namespaceURI===fh})}var Jo=new Map;function Wh(i){var e=i.getAttribute("is")||i.nodeName,t=Jo.get(e);if(t)return t;Jo.set(e,t=[]);for(var n,s=i,r=Element.prototype;r!==s;){n=mh(s);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.push(a);s=ph(s)}return t}function Qo(i,e,t=e){var n=new WeakSet;Rl(i,"input",async s=>{var r=s?i.defaultValue:i.value;if(r=Xr(i)?Kr(r):r,t(r),zn!==null&&n.add(zn),await xh(),r!==(r=e())){var a=i.selectionStart,o=i.selectionEnd,c=i.value.length;if(i.value=r??"",o!==null){var l=i.value.length;a===o&&o===c&&l>c?(i.selectionStart=l,i.selectionEnd=l):(i.selectionStart=a,i.selectionEnd=Math.min(o,l))}}}),(Dt&&i.defaultValue!==i.value||yo(e)==null&&i.value)&&(t(Xr(i)?Kr(i.value):i.value),zn!==null&&n.add(zn)),Cl(()=>{var s=e();if(i===document.activeElement){var r=zn;if(n.has(r))return}Xr(i)&&s===Kr(i.value)||i.type==="date"&&!s&&!i.value||s!==i.value&&(i.value=s??"")})}function yi(i,e,t=e){Rl(i,"change",n=>{var s=n?i.defaultChecked:i.checked;t(s)}),(Dt&&i.defaultChecked!==i.checked||yo(e)==null)&&t(i.checked),Cl(()=>{var n=e();i.checked=!!n})}function Xr(i){var e=i.type;return e==="number"||e==="range"}function Kr(i){return i===""?null:+i}const Xh=i=>i;function bn(i,{delay:e=0,duration:t=400,easing:n=Xh}={}){const s=+getComputedStyle(i).opacity;return{delay:e,duration:t,easing:n,css:r=>`opacity: ${r*s}`}}var Kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ul={exports:{}};(function(i){((e,t)=>{i.exports?i.exports=t():e.fuzzysort=t()})(Kh,e=>{var t=(C,D)=>{if(!C||!D)return de;var G=g(C);H(D)||(D=m(D));var ee=G.bitflags;return(ee&D._bitflags)!==ee?de:h(G,D)},n=(C,D,G)=>{if(!C)return G!=null&&G.all?_(D,G):pe;var ee=g(C),ae=ee.bitflags,ne=ee.containsSpace,te=f((G==null?void 0:G.threshold)||0),ge=(G==null?void 0:G.limit)||re,ue=0,w=0,Ve=D.length;function ke(oe){ue<ge?(st.add(oe),++ue):(++w,oe._score>st.peek()._score&&st.replaceTop(oe))}if(G!=null&&G.key)for(var Be=G.key,me=0;me<Ve;++me){var Ge=D[me],_e=ie(Ge,Be);if(_e&&(H(_e)||(_e=m(_e)),(ae&_e._bitflags)===ae)){var b=h(ee,_e);b!==de&&(b._score<te||(b.obj=Ge,ke(b)))}}else if(G!=null&&G.keys){var x=G.keys,O=x.length;e:for(var me=0;me<Ve;++me){var Ge=D[me];{for(var q=0,Z=0;Z<O;++Z){var Be=x[Z],_e=ie(Ge,Be);if(!_e){K[Z]=Ce;continue}H(_e)||(_e=m(_e)),K[Z]=_e,q|=_e._bitflags}if((ae&q)!==ae)continue}if(ne)for(let ve=0;ve<ee.spaceSearches.length;ve++)S[ve]=W;for(var Z=0;Z<O;++Z){if(_e=K[Z],_e===Ce){Y[Z]=Ce;continue}if(Y[Z]=h(ee,_e,!1,ne),Y[Z]===de){Y[Z]=Ce;continue}if(ne)for(let Me=0;Me<ee.spaceSearches.length;Me++){if(X[Me]>-1e3&&S[Me]>W){var $=(S[Me]+X[Me])/4;$>S[Me]&&(S[Me]=$)}X[Me]>S[Me]&&(S[Me]=X[Me])}}if(ne){for(let ve=0;ve<ee.spaceSearches.length;ve++)if(S[ve]===W)continue e}else{var ce=!1;for(let ve=0;ve<O;ve++)if(Y[ve]._score!==W){ce=!0;break}if(!ce)continue}var he=new c(O);for(let ve=0;ve<O;ve++)he[ve]=Y[ve];if(ne){var fe=0;for(let ve=0;ve<ee.spaceSearches.length;ve++)fe+=S[ve]}else{var fe=W;for(let Me=0;Me<O;Me++){var b=he[Me];if(b._score>-1e3&&fe>W){var $=(fe+b._score)/4;$>fe&&(fe=$)}b._score>fe&&(fe=b._score)}}if(he.obj=Ge,he._score=fe,G!=null&&G.scoreFn){if(fe=G.scoreFn(he),!fe)continue;fe=f(fe),he._score=fe}fe<te||ke(he)}}else for(var me=0;me<Ve;++me){var _e=D[me];if(_e&&(H(_e)||(_e=m(_e)),(ae&_e._bitflags)===ae)){var b=h(ee,_e);b!==de&&(b._score<te||ke(b))}}if(ue===0)return pe;for(var qe=new Array(ue),me=ue-1;me>=0;--me)qe[me]=st.poll();return qe.total=ue+w,qe},s=(C,D="<b>",G="</b>")=>{for(var ee=typeof D=="function"?D:void 0,ae=C.target,ne=ae.length,te=C.indexes,ge="",ue=0,w=0,Ve=!1,ke=[],Be=0;Be<ne;++Be){var me=ae[Be];if(te[w]===Be){if(++w,Ve||(Ve=!0,ee?(ke.push(ge),ge=""):ge+=D),w===te.length){ee?(ge+=me,ke.push(ee(ge,ue++)),ge="",ke.push(ae.substr(Be+1))):ge+=me+G+ae.substr(Be+1);break}}else Ve&&(Ve=!1,ee?(ke.push(ee(ge,ue++)),ge=""):ge+=G);ge+=me}return ee?ke:ge},r=C=>{typeof C=="number"?C=""+C:typeof C!="string"&&(C="");var D=M(C);return l(C,{_targetLower:D._lower,_targetLowerCodes:D.lowerCodes,_bitflags:D.bitflags})},a=()=>{P.clear(),A.clear()};class o{get indexes(){return this._indexes.slice(0,this._indexes.len).sort((D,G)=>D-G)}set indexes(D){return this._indexes=D}highlight(D,G){return s(this,D,G)}get score(){return u(this._score)}set score(D){this._score=f(D)}}class c extends Array{get score(){return u(this._score)}set score(D){this._score=f(D)}}var l=(C,D)=>{const G=new o;return G.target=C,G.obj=D.obj??de,G._score=D._score??W,G._indexes=D._indexes??[],G._targetLower=D._targetLower??"",G._targetLowerCodes=D._targetLowerCodes??de,G._nextBeginningIndexes=D._nextBeginningIndexes??de,G._bitflags=D._bitflags??0,G},u=C=>C===W?0:C>1?C:Math.E**(((-C+1)**.04307-1)*-2),f=C=>C===0?W:C>1?C:1-Math.pow(Math.log(C)/-2+1,1/.04307),d=C=>{typeof C=="number"?C=""+C:typeof C!="string"&&(C=""),C=C.trim();var D=M(C),G=[];if(D.containsSpace){var ee=C.split(/\s+/);ee=[...new Set(ee)];for(var ae=0;ae<ee.length;ae++)if(ee[ae]!==""){var ne=M(ee[ae]);G.push({lowerCodes:ne.lowerCodes,_lower:ee[ae].toLowerCase(),containsSpace:!1})}}return{lowerCodes:D.lowerCodes,_lower:D._lower,containsSpace:D.containsSpace,bitflags:D.bitflags,spaceSearches:G}},m=C=>{if(C.length>999)return r(C);var D=P.get(C);return D!==void 0||(D=r(C),P.set(C,D)),D},g=C=>{if(C.length>999)return d(C);var D=A.get(C);return D!==void 0||(D=d(C),A.set(C,D)),D},_=(C,D)=>{var G=[];G.total=C.length;var ee=(D==null?void 0:D.limit)||re;if(D!=null&&D.key)for(var ae=0;ae<C.length;ae++){var ne=C[ae],te=ie(ne,D.key);if(te!=de){H(te)||(te=m(te));var ge=l(te.target,{_score:te._score,obj:ne});if(G.push(ge),G.length>=ee)return G}}else if(D!=null&&D.keys)for(var ae=0;ae<C.length;ae++){for(var ne=C[ae],ue=new c(D.keys.length),w=D.keys.length-1;w>=0;--w){var te=ie(ne,D.keys[w]);if(!te){ue[w]=Ce;continue}H(te)||(te=m(te)),te._score=W,te._indexes.len=0,ue[w]=te}if(ue.obj=ne,ue._score=W,G.push(ue),G.length>=ee)return G}else for(var ae=0;ae<C.length;ae++){var te=C[ae];if(te!=de&&(H(te)||(te=m(te)),te._score=W,te._indexes.len=0,G.push(te),G.length>=ee))return G}return G},h=(C,D,G=!1,ee=!1)=>{if(G===!1&&C.containsSpace)return p(C,D,ee);for(var ae=C._lower,ne=C.lowerCodes,te=ne[0],ge=D._targetLowerCodes,ue=ne.length,w=ge.length,me=0,Ve=0,ke=0;;){var Be=te===ge[Ve];if(Be){if(F[ke++]=Ve,++me,me===ue)break;te=ne[me]}if(++Ve,Ve>=w)return de}var me=0,Ge=!1,_e=0,b=D._nextBeginningIndexes;b===de&&(b=D._nextBeginningIndexes=L(D.target)),Ve=F[0]===0?0:b[F[0]-1];var x=0;if(Ve!==w)for(;;)if(Ve>=w){if(me<=0||(++x,x>200))break;--me;var O=Q[--_e];Ve=b[O]}else{var Be=ne[me]===ge[Ve];if(Be){if(Q[_e++]=Ve,++me,me===ue){Ge=!0;break}++Ve}else Ve=b[Ve]}var q=ue<=1?-1:D._targetLower.indexOf(ae,F[0]),Z=!!~q,$=Z?q===0||D._nextBeginningIndexes[q-1]===q:!1;if(Z&&!$){for(var ce=0;ce<b.length;ce=b[ce])if(!(ce<=q)){for(var he=0;he<ue&&ne[he]===D._targetLowerCodes[ce+he];he++);if(he===ue){q=ce,$=!0;break}}}var fe=ve=>{for(var Me=0,we=0,Xe=1;Xe<ue;++Xe)ve[Xe]-ve[Xe-1]!==1&&(Me-=ve[Xe],++we);var We=ve[ue-1]-ve[0]-(ue-1);if(Me-=(12+We)*we,ve[0]!==0&&(Me-=ve[0]*ve[0]*.2),!Ge)Me*=1e3;else{for(var ct=1,Xe=b[0];Xe<w;Xe=b[Xe])++ct;ct>24&&(Me*=(ct-24)*10)}return Me-=(w-ue)/2,Z&&(Me/=1+ue*ue*1),$&&(Me/=1+ue*ue*1),Me-=(w-ue)/2,Me};if(Ge)if($){for(var ce=0;ce<ue;++ce)F[ce]=q+ce;var qe=F,oe=fe(F)}else var qe=Q,oe=fe(Q);else{if(Z)for(var ce=0;ce<ue;++ce)F[ce]=q+ce;var qe=F,oe=fe(qe)}D._score=oe;for(var ce=0;ce<ue;++ce)D._indexes[ce]=qe[ce];D._indexes.len=ue;const be=new o;return be.target=D.target,be._score=D._score,be._indexes=D._indexes,be},p=(C,D,G)=>{for(var ee=new Set,ae=0,ne=de,te=0,ge=C.spaceSearches,ue=ge.length,w=0,Ve=()=>{for(let $=w-1;$>=0;$--)D._nextBeginningIndexes[v[$*2+0]]=v[$*2+1]},ke=!1,Z=0;Z<ue;++Z){X[Z]=W;var Be=ge[Z];if(ne=h(Be,D),G){if(ne===de)continue;ke=!0}else if(ne===de)return Ve(),de;var me=Z===ue-1;if(!me){var Ge=ne._indexes,_e=!0;for(let ce=0;ce<Ge.len-1;ce++)if(Ge[ce+1]-Ge[ce]!==1){_e=!1;break}if(_e){var b=Ge[Ge.len-1]+1,x=D._nextBeginningIndexes[b-1];for(let ce=b-1;ce>=0&&x===D._nextBeginningIndexes[ce];ce--)D._nextBeginningIndexes[ce]=b,v[w*2+0]=ce,v[w*2+1]=x,w++}}ae+=ne._score/ue,X[Z]=ne._score/ue,ne._indexes[0]<te&&(ae-=(te-ne._indexes[0])*2),te=ne._indexes[0];for(var O=0;O<ne._indexes.len;++O)ee.add(ne._indexes[O])}if(G&&!ke)return de;Ve();var q=h(C,D,!0);if(q!==de&&q._score>ae){if(G)for(var Z=0;Z<ue;++Z)X[Z]=q._score/ue;return q}G&&(ne=D),ne._score=ae;var Z=0;for(let $ of ee)ne._indexes[Z++]=$;return ne._indexes.len=Z,ne},E=C=>C.replace(new RegExp("\\p{Script=Latin}+","gu"),D=>D.normalize("NFD")).replace(/[\u0300-\u036f]/g,""),M=C=>{C=E(C);for(var D=C.length,G=C.toLowerCase(),ee=[],ae=0,ne=!1,te=0;te<D;++te){var ge=ee[te]=G.charCodeAt(te);if(ge===32){ne=!0;continue}var ue=ge>=97&&ge<=122?ge-97:ge>=48&&ge<=57?26:ge<=127?30:31;ae|=1<<ue}return{lowerCodes:ee,bitflags:ae,containsSpace:ne,_lower:G}},T=C=>{for(var D=C.length,G=[],ee=0,ae=!1,ne=!1,te=0;te<D;++te){var ge=C.charCodeAt(te),ue=ge>=65&&ge<=90,w=ue||ge>=97&&ge<=122||ge>=48&&ge<=57,Ve=ue&&!ae||!ne||!w;ae=ue,ne=w,Ve&&(G[ee++]=te)}return G},L=C=>{C=E(C);for(var D=C.length,G=T(C),ee=[],ae=G[0],ne=0,te=0;te<D;++te)ae>te?ee[te]=ae:(ae=G[++ne],ee[te]=ae===void 0?D:ae);return ee},P=new Map,A=new Map,F=[],Q=[],v=[],S=[],X=[],K=[],Y=[],ie=(C,D)=>{var G=C[D];if(G!==void 0)return G;if(typeof D=="function")return D(C);var ee=D;Array.isArray(D)||(ee=D.split("."));for(var ae=ee.length,ne=-1;C&&++ne<ae;)C=C[ee[ne]];return C},H=C=>typeof C=="object"&&typeof C._bitflags=="number",re=1/0,W=-re,pe=[];pe.total=0;var de=null,Ce=r(""),at=C=>{var D=[],G=0,ee={},ae=ne=>{for(var te=0,ge=D[te],ue=1;ue<G;){var w=ue+1;te=ue,w<G&&D[w]._score<D[ue]._score&&(te=w),D[te-1>>1]=D[te],ue=1+(te<<1)}for(var Ve=te-1>>1;te>0&&ge._score<D[Ve]._score;Ve=(te=Ve)-1>>1)D[te]=D[Ve];D[te]=ge};return ee.add=ne=>{var te=G;D[G++]=ne;for(var ge=te-1>>1;te>0&&ne._score<D[ge]._score;ge=(te=ge)-1>>1)D[te]=D[ge];D[te]=ne},ee.poll=ne=>{if(G!==0){var te=D[0];return D[0]=D[--G],ae(),te}},ee.peek=ne=>{if(G!==0)return D[0]},ee.replaceTop=ne=>{D[0]=ne,ae()},ee},st=at();return{single:t,go:n,prepare:r,cleanup:a}})})(Ul);var qh=Ul.exports;const ec=Yh(qh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="169",vn={ROTATE:0,DOLLY:1,PAN:2},Hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$h=0,tc=1,jh=2,Nl=1,Zh=2,Li=3,Qi=0,Wt=1,pi=2,Fi=0,Vn=1,Ai=2,ic=3,nc=4,Jh=5,fn=100,Qh=101,ed=102,td=103,id=104,nd=200,sd=201,rd=202,ad=203,Da=204,Ra=205,od=206,cd=207,ld=208,ud=209,hd=210,dd=211,fd=212,pd=213,md=214,Ca=0,La=1,Ia=2,Yn=3,Ua=4,Na=5,Fa=6,Oa=7,Fl=0,gd=1,_d=2,Zi=0,Ol=1,Bl=2,zl=3,kl=4,vd=5,Hl=6,Gl=7,Vl=300,qn=301,$n=302,Ba=303,za=304,Fr=306,ka=1e3,mn=1001,Ha=1002,ri=1003,xd=1004,ks=1005,mi=1006,Yr=1007,gn=1008,Bi=1009,Wl=1010,Xl=1011,Ps=1012,bo=1013,xn=1014,Ui=1015,Oi=1016,To=1017,Ao=1018,jn=1020,Kl=35902,Yl=1021,ql=1022,gi=1023,$l=1024,jl=1025,Wn=1026,Zn=1027,Zl=1028,Po=1029,Jl=1030,wo=1031,Do=1033,vr=33776,xr=33777,Mr=33778,Sr=33779,Ga=35840,Va=35841,Wa=35842,Xa=35843,Ka=36196,Ya=37492,qa=37496,$a=37808,ja=37809,Za=37810,Ja=37811,Qa=37812,eo=37813,to=37814,io=37815,no=37816,so=37817,ro=37818,ao=37819,oo=37820,co=37821,yr=36492,lo=36494,uo=36495,Ql=36283,ho=36284,fo=36285,po=36286,Md=3200,Sd=3201,yd=0,Ed=1,ji="",fi="srgb",en="srgb-linear",Ro="display-p3",Or="display-p3-linear",Ar="linear",pt="srgb",Pr="rec709",wr="p3",Tn=7680,sc=519,bd=512,Td=513,Ad=514,eu=515,Pd=516,wd=517,Dd=518,Rd=519,rc=35044,ac=35048,oc="300 es",Ni=2e3,Dr=2001;class yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cc=1234567;const Xn=Math.PI/180,ws=180/Math.PI;function is(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function Co(i,e){return(i%e+e)%e}function Cd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ld(i,e,t){return i!==e?(t-i)/(e-i):0}function bs(i,e,t){return(1-t)*i+t*e}function Id(i,e,t,n){return bs(i,e,1-Math.exp(-t*n))}function Ud(i,e=1){return e-Math.abs(Co(i,e*2)-e)}function Nd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Od(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bd(i,e){return i+Math.random()*(e-i)}function zd(i){return i*(.5-Math.random())}function kd(i){i!==void 0&&(cc=i);let e=cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hd(i){return i*Xn}function Gd(i){return i*ws}function Vd(i){return(i&i-1)===0&&i!==0}function Wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kd(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ts={DEG2RAD:Xn,RAD2DEG:ws,generateUUID:is,clamp:Ht,euclideanModulo:Co,mapLinear:Cd,inverseLerp:Ld,lerp:bs,damp:Id,pingpong:Ud,smoothstep:Nd,smootherstep:Fd,randInt:Od,randFloat:Bd,randFloatSpread:zd,seededRandom:kd,degToRad:Hd,radToDeg:Gd,isPowerOfTwo:Vd,ceilPowerOfTwo:Wd,floorPowerOfTwo:Xd,setQuaternionFromProperEuler:Kd,normalize:Gt,denormalize:kn};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,s,r,a,o,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],g=n[8],_=s[0],h=s[3],p=s[6],E=s[1],M=s[4],T=s[7],L=s[2],P=s[5],A=s[8];return r[0]=a*_+o*E+c*L,r[3]=a*h+o*M+c*P,r[6]=a*p+o*T+c*A,r[1]=l*_+u*E+f*L,r[4]=l*h+u*M+f*P,r[7]=l*p+u*T+f*A,r[2]=d*_+m*E+g*L,r[5]=d*h+m*M+g*P,r[8]=d*p+m*T+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*r,m=l*r-a*c,g=t*f+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qr.makeScale(e,t)),this}rotate(e){return this.premultiply(qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new Je;function tu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){const i=Ds("canvas");return i.style.display="block",i}const lc={};function Er(i){i in lc||(lc[i]=!0,console.warn(i))}function qd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function $d(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const uc=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hc=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fs={[en]:{transfer:Ar,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[fi]:{transfer:pt,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Or]:{transfer:Ar,primaries:wr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(hc),fromReference:i=>i.applyMatrix3(uc)},[Ro]:{transfer:pt,primaries:wr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(hc),fromReference:i=>i.applyMatrix3(uc).convertLinearToSRGB()}},Zd=new Set([en,Or]),ht={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=fs[e].toReference,s=fs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return fs[i].primaries},getTransfer:function(i){return i===ji?Ar:fs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(fs[e].luminanceCoefficients)}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let An;class Jd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{An===void 0&&(An=Ds("canvas")),An.width=e.width,An.height=e.height;const n=An.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=An}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qd=0;class iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jr(s[a].image)):r.push(jr(s[a]))}else r=jr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ef=0;class Xt extends yn{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=mn,s=mn,r=mi,a=gn,o=gi,c=Bi,l=Xt.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=is(),this.name="",this.source=new iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Vl;Xt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],g=c[9],_=c[2],h=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+h)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,T=(m+1)/2,L=(p+1)/2,P=(u+d)/4,A=(f+_)/4,F=(g+h)/4;return M>T&&M>L?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=P/n,r=A/n):T>L?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=P/s,r=F/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=F/r),this.set(n,s,r,t),this}let E=Math.sqrt((h-g)*(h-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(h-g)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tf extends yn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends tf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class nu extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nf extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==m||u!==g){let h=1-o;const p=c*d+l*m+u*g+f*_,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const L=Math.sqrt(M),P=Math.atan2(L,p*E);h=Math.sin(h*P)/L,o=Math.sin(o*P)/L}const T=o*E;if(c=c*h+d*T,l=l*h+m*T,u=u*h+g*T,f=f*h+_*T,h===1-o){const L=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=L,l*=L,u*=L,f*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*f+c*m-l*d,e[t+1]=c*g+u*d+l*f-o*m,e[t+2]=l*g+u*m+o*d-c*f,e[t+3]=u*g-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"YZX":this._x=d*u*f+l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f-d*m*g;break;case"XZY":this._x=d*u*f-l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zr.copy(this).projectOnVector(e),this.sub(Zr)}reflect(e){return this.sub(Zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new R,dc=new Mn;class ns{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Gs.subVectors(this.max,ps),Pn.subVectors(e.a,ps),wn.subVectors(e.b,ps),Dn.subVectors(e.c,ps),Vi.subVectors(wn,Pn),Wi.subVectors(Dn,wn),sn.subVectors(Pn,Dn);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-sn.z,sn.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,sn.z,0,-sn.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-sn.y,sn.x,0];return!Jr(t,Pn,wn,Dn,Gs)||(t=[1,0,0,0,1,0,0,0,1],!Jr(t,Pn,wn,Dn,Gs))?!1:(Vs.crossVectors(Vi,Wi),t=[Vs.x,Vs.y,Vs.z],Jr(t,Pn,wn,Dn,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new R,new R,new R,new R,new R,new R,new R,new R],ui=new R,Hs=new ns,Pn=new R,wn=new R,Dn=new R,Vi=new R,Wi=new R,sn=new R,ps=new R,Gs=new R,Vs=new R,rn=new R;function Jr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rn.fromArray(i,r);const o=s.x*Math.abs(rn.x)+s.y*Math.abs(rn.y)+s.z*Math.abs(rn.z),c=e.dot(rn),l=t.dot(rn),u=n.dot(rn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const sf=new ns,ms=new R,Qr=new R;class Ls{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Qr)),this.expandByPoint(ms.copy(e.center).sub(Qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new R,ea=new R,Ws=new R,Xi=new R,ta=new R,Xs=new R,ia=new R;class Br{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ea.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(ea);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ws),o=Xi.dot(this.direction),c=-Xi.dot(Ws),l=Xi.lengthSq(),u=Math.abs(1-a*a);let f,d,m,g;if(u>0)if(f=a*c-o,d=a*o-c,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ea).addScaledVector(Ws,d),m}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,s,r){ta.subVectors(t,e),Xs.subVectors(n,e),ia.crossVectors(ta,Xs);let a=this.direction.dot(ia),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const c=o*this.direction.dot(Xs.crossVectors(Xi,Xs));if(c<0)return null;const l=o*this.direction.dot(ta.cross(Xi));if(l<0||c+l>a)return null;const u=-o*Xi.dot(ia);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,s,r,a,o,c,l,u,f,d,m,g,_,h){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,f,d,m,g,_,h)}set(e,t,n,s,r,a,o,c,l,u,f,d,m,g,_,h){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Rn.setFromMatrixColumn(e,0).length(),r=1/Rn.setFromMatrixColumn(e,1).length(),a=1/Rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,g=l*u,_=l*f;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,g=l*u,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rf,e,af)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Ki.crossVectors(n,Zt),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Ki.crossVectors(n,Zt)),Ki.normalize(),Ks.crossVectors(Zt,Ki),s[0]=Ki.x,s[4]=Ks.x,s[8]=Zt.x,s[1]=Ki.y,s[5]=Ks.y,s[9]=Zt.y,s[2]=Ki.z,s[6]=Ks.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],g=n[2],_=n[6],h=n[10],p=n[14],E=n[3],M=n[7],T=n[11],L=n[15],P=s[0],A=s[4],F=s[8],Q=s[12],v=s[1],S=s[5],X=s[9],K=s[13],Y=s[2],ie=s[6],H=s[10],re=s[14],W=s[3],pe=s[7],de=s[11],Ce=s[15];return r[0]=a*P+o*v+c*Y+l*W,r[4]=a*A+o*S+c*ie+l*pe,r[8]=a*F+o*X+c*H+l*de,r[12]=a*Q+o*K+c*re+l*Ce,r[1]=u*P+f*v+d*Y+m*W,r[5]=u*A+f*S+d*ie+m*pe,r[9]=u*F+f*X+d*H+m*de,r[13]=u*Q+f*K+d*re+m*Ce,r[2]=g*P+_*v+h*Y+p*W,r[6]=g*A+_*S+h*ie+p*pe,r[10]=g*F+_*X+h*H+p*de,r[14]=g*Q+_*K+h*re+p*Ce,r[3]=E*P+M*v+T*Y+L*W,r[7]=E*A+M*S+T*ie+L*pe,r[11]=E*F+M*X+T*H+L*de,r[15]=E*Q+M*K+T*re+L*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],h=e[11],p=e[15];return g*(+r*c*f-s*l*f-r*o*d+n*l*d+s*o*m-n*c*m)+_*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*u-r*c*u)+h*(+t*l*f-t*o*m-r*a*f+n*a*m+r*o*u-n*l*u)+p*(-s*o*u-t*c*f+t*o*d+s*a*f-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],h=e[14],p=e[15],E=f*h*l-_*d*l+_*c*m-o*h*m-f*c*p+o*d*p,M=g*d*l-u*h*l-g*c*m+a*h*m+u*c*p-a*d*p,T=u*_*l-g*f*l+g*o*m-a*_*m-u*o*p+a*f*p,L=g*f*c-u*_*c-g*o*d+a*_*d+u*o*h-a*f*h,P=t*E+n*M+s*T+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=E*A,e[1]=(_*d*r-f*h*r-_*s*m+n*h*m+f*s*p-n*d*p)*A,e[2]=(o*h*r-_*c*r+_*s*l-n*h*l-o*s*p+n*c*p)*A,e[3]=(f*c*r-o*d*r-f*s*l+n*d*l+o*s*m-n*c*m)*A,e[4]=M*A,e[5]=(u*h*r-g*d*r+g*s*m-t*h*m-u*s*p+t*d*p)*A,e[6]=(g*c*r-a*h*r-g*s*l+t*h*l+a*s*p-t*c*p)*A,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*m+t*c*m)*A,e[8]=T*A,e[9]=(g*f*r-u*_*r-g*n*m+t*_*m+u*n*p-t*f*p)*A,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*A,e[11]=(u*o*r-a*f*r-u*n*l+t*f*l+a*n*m-t*o*m)*A,e[12]=L*A,e[13]=(u*_*s-g*f*s+g*n*d-t*_*d-u*n*h+t*f*h)*A,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*h-t*o*h)*A,e[15]=(a*f*s-u*o*s+u*n*c-t*f*c-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,f=o+o,d=r*l,m=r*u,g=r*f,_=a*u,h=a*f,p=o*f,E=c*l,M=c*u,T=c*f,L=n.x,P=n.y,A=n.z;return s[0]=(1-(_+p))*L,s[1]=(m+T)*L,s[2]=(g-M)*L,s[3]=0,s[4]=(m-T)*P,s[5]=(1-(d+p))*P,s[6]=(h+E)*P,s[7]=0,s[8]=(g+M)*A,s[9]=(h-E)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Rn.set(s[0],s[1],s[2]).length();const a=Rn.set(s[4],s[5],s[6]).length(),o=Rn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hi.copy(this);const l=1/r,u=1/a,f=1/o;return hi.elements[0]*=l,hi.elements[1]*=l,hi.elements[2]*=l,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=f,hi.elements[9]*=f,hi.elements[10]*=f,t.setFromRotationMatrix(hi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ni){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(o===Ni)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Dr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ni){const c=this.elements,l=1/(t-e),u=1/(n-s),f=1/(a-r),d=(t+e)*l,m=(n+s)*u;let g,_;if(o===Ni)g=(a+r)*f,_=-2*f;else if(o===Dr)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rn=new R,hi=new vt,rf=new R(0,0,0),af=new R(1,1,1),Ki=new R,Ks=new R,Zt=new R,fc=new vt,pc=new Mn;class zi{constructor(e=0,t=0,n=0,s=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let of=0;const mc=new R,Cn=new Mn,Di=new vt,Ys=new R,gs=new R,cf=new R,lf=new Mn,gc=new R(1,0,0),_c=new R(0,1,0),vc=new R(0,0,1),xc={type:"added"},uf={type:"removed"},Ln={type:"childadded",child:null},na={type:"childremoved",child:null};class Kt extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new R,t=new zi,n=new Mn,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Je}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.premultiply(Cn),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(vc,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(gs,Ys,this.up):Di.lookAt(Ys,gs,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Cn.setFromRotationMatrix(Di),this.quaternion.premultiply(Cn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xc),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uf),na.child=e,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xc),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new R(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new R,Ri=new R,sa=new R,Ci=new R,In=new R,Un=new R,Mc=new R,ra=new R,aa=new R,oa=new R,ca=new Mt,la=new Mt,ua=new Mt;class si{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),Ri.subVectors(n,t),sa.subVectors(e,t);const a=di.dot(di),o=di.dot(Ri),c=di.dot(sa),l=Ri.dot(Ri),u=Ri.dot(sa),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ci.x),c.addScaledVector(a,Ci.y),c.addScaledVector(o,Ci.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ca.setScalar(0),la.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(e,t),la.fromBufferAttribute(e,n),ua.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ca,r.x),a.addScaledVector(la,r.y),a.addScaledVector(ua,r.z),a}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),Ri.subVectors(e,t),di.cross(Ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),di.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return si.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;In.subVectors(s,n),Un.subVectors(r,n),ra.subVectors(e,n);const c=In.dot(ra),l=Un.dot(ra);if(c<=0&&l<=0)return t.copy(n);aa.subVectors(e,s);const u=In.dot(aa),f=Un.dot(aa);if(u>=0&&f<=u)return t.copy(s);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(In,a);oa.subVectors(e,r);const m=In.dot(oa),g=Un.dot(oa);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Un,o);const h=u*g-m*f;if(h<=0&&f-u>=0&&m-g>=0)return Mc.subVectors(r,s),o=(f-u)/(f-u+(m-g)),t.copy(s).addScaledVector(Mc,o);const p=1/(h+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(In,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},qs={h:0,s:0,l:0};function ha(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Co(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ha(a,r,e+1/3),this.g=ha(a,r,e),this.b=ha(a,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=fi){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const n=ru[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return ht.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ht(zt.r*255,0,255))*65536+Math.round(Ht(zt.g*255,0,255))*256+Math.round(Ht(zt.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=fi){ht.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(qs);const n=bs(Yi.h,qs.h,t),s=bs(Yi.s,qs.s,t),r=bs(Yi.l,qs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new it;it.NAMES=ru;let hf=0;class ss extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Vn,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ra,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Yn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tn,this.stencilZFail=Tn,this.stencilZPass=Tn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vn&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Tn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Tn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sn extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new R,$s=new He;class Ti{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}}class au extends Ti{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ou extends Ti{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Ti{constructor(e,t,n){super(new Float32Array(e),t,n)}}let df=0;const ii=new vt,da=new Kt,Nn=new R,Jt=new ns,_s=new ns,wt=new R;class xt extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tu(e)?ou:au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nn).negate(),this.translate(Nn.x,Nn.y,Nn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Jt.min,_s.min),Jt.expandByPoint(wt),wt.addVectors(Jt.max,_s.max),Jt.expandByPoint(wt)):(Jt.expandByPoint(_s.min),Jt.expandByPoint(_s.max))}Jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)wt.fromBufferAttribute(o,l),c&&(Nn.fromBufferAttribute(e,l),wt.add(Nn)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new R,c[F]=new R;const l=new R,u=new R,f=new R,d=new He,m=new He,g=new He,_=new R,h=new R;function p(F,Q,v){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,Q),f.fromBufferAttribute(n,v),d.fromBufferAttribute(r,F),m.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,v),u.sub(l),f.sub(l),m.sub(d),g.sub(d);const S=1/(m.x*g.y-g.x*m.y);isFinite(S)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(S),h.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(S),o[F].add(_),o[Q].add(_),o[v].add(_),c[F].add(h),c[Q].add(h),c[v].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,Q=E.length;F<Q;++F){const v=E[F],S=v.start,X=v.count;for(let K=S,Y=S+X;K<Y;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const M=new R,T=new R,L=new R,P=new R;function A(F){L.fromBufferAttribute(s,F),P.copy(L);const Q=o[F];M.copy(Q),M.sub(L.multiplyScalar(L.dot(Q))).normalize(),T.crossVectors(P,Q);const S=T.dot(c[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,S)}for(let F=0,Q=E.length;F<Q;++F){const v=E[F],S=v.start,X=v.count;for(let K=S,Y=S+X;K<Y;K+=3)A(e.getX(K+0)),A(e.getX(K+1)),A(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,u=new R,f=new R;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),h=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,h),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,h),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,h=c.length;_<h;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[m++]}return new Ti(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sc=new vt,an=new Br,js=new Ls,yc=new R,Zs=new R,Js=new R,Qs=new R,fa=new R,er=new R,Ec=new R,tr=new R;class Nt extends Kt{constructor(e=new xt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(fa.fromBufferAttribute(f,e),a?er.addScaledVector(fa,u):er.addScaledVector(fa.sub(t),u))}t.add(er)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),an.copy(e.ray).recast(e.near),!(js.containsPoint(an.origin)===!1&&(an.intersectSphere(js,yc)===null||an.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(Sc.copy(r).invert(),an.copy(e.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&an.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,an)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const h=d[g],p=a[h.materialIndex],E=Math.max(h.start,m.start),M=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let T=E,L=M;T<L;T+=3){const P=o.getX(T),A=o.getX(T+1),F=o.getX(T+2);s=ir(this,p,e,n,l,u,f,P,A,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let h=g,p=_;h<p;h+=3){const E=o.getX(h),M=o.getX(h+1),T=o.getX(h+2);s=ir(this,a,e,n,l,u,f,E,M,T),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const h=d[g],p=a[h.materialIndex],E=Math.max(h.start,m.start),M=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let T=E,L=M;T<L;T+=3){const P=T,A=T+1,F=T+2;s=ir(this,p,e,n,l,u,f,P,A,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let h=g,p=_;h<p;h+=3){const E=h,M=h+1,T=h+2;s=ir(this,a,e,n,l,u,f,E,M,T),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}}}function ff(i,e,t,n,s,r,a,o){let c;if(e.side===Wt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Qi,o),c===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(tr);return l<t.near||l>t.far?null:{distance:l,point:tr.clone(),object:i}}function ir(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Zs),i.getVertexPosition(c,Js),i.getVertexPosition(l,Qs);const u=ff(i,e,t,n,Zs,Js,Qs,Ec);if(u){const f=new R;si.getBarycoord(Ec,Zs,Js,Qs,f),s&&(u.uv=si.getInterpolatedAttribute(s,o,c,l,f,new He)),r&&(u.uv1=si.getInterpolatedAttribute(r,o,c,l,f,new He)),a&&(u.normal=si.getInterpolatedAttribute(a,o,c,l,f,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new R,materialIndex:0};si.getNormal(Zs,Js,Qs,d.normal),u.face=d,u.barycoord=f}return u}class rs extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function g(_,h,p,E,M,T,L,P,A,F,Q){const v=T/A,S=L/F,X=T/2,K=L/2,Y=P/2,ie=A+1,H=F+1;let re=0,W=0;const pe=new R;for(let de=0;de<H;de++){const Ce=de*S-K;for(let at=0;at<ie;at++){const st=at*v-X;pe[_]=st*E,pe[h]=Ce*M,pe[p]=Y,l.push(pe.x,pe.y,pe.z),pe[_]=0,pe[h]=0,pe[p]=P>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(at/A),f.push(1-de/F),re+=1}}for(let de=0;de<F;de++)for(let Ce=0;Ce<A;Ce++){const at=d+Ce+ie*de,st=d+Ce+ie*(de+1),C=d+(Ce+1)+ie*(de+1),D=d+(Ce+1)+ie*de;c.push(at,st,D),c.push(st,C,D),W+=6}o.addGroup(m,W,Q),m+=W,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=Jn(i[t]);for(const s in n)e[s]=n[s]}return e}function pf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Rs={clone:Jn,merge:Vt};var mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mt extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jn(e.uniforms),this.uniformsGroups=pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lu extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new R,bc=new He,Tc=new He;class ni extends lu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(Xn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,bc,Tc),t.subVectors(Tc,bc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xn*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fn=-90,On=1;class _f extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ni(Fn,On,e,t);s.layers=this.layers,this.add(s);const r=new ni(Fn,On,e,t);r.layers=this.layers,this.add(r);const a=new ni(Fn,On,e,t);a.layers=this.layers,this.add(a);const o=new ni(Fn,On,e,t);o.layers=this.layers,this.add(o);const c=new ni(Fn,On,e,t);c.layers=this.layers,this.add(c);const l=new ni(Fn,On,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uu extends Xt{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:qn,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vf extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new uu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rs(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Fi});r.uniforms.tEquirect.value=t;const a=new Nt(s,r),o=t.minFilter;return t.minFilter===gn&&(t.minFilter=mi),new _f(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const pa=new R,xf=new R,Mf=new Je;class $i{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=pa.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mf.getNormalMatrix(e),s=this.coplanarPoint(pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const on=new Ls,nr=new R;class hu{constructor(e=new $i,t=new $i,n=new $i,s=new $i,r=new $i,a=new $i){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],f=s[6],d=s[7],m=s[8],g=s[9],_=s[10],h=s[11],p=s[12],E=s[13],M=s[14],T=s[15];if(n[0].setComponents(c-r,d-l,h-m,T-p).normalize(),n[1].setComponents(c+r,d+l,h+m,T+p).normalize(),n[2].setComponents(c+a,d+u,h+g,T+E).normalize(),n[3].setComponents(c-a,d-u,h-g,T-E).normalize(),n[4].setComponents(c-o,d-f,h-_,T-M).normalize(),t===Ni)n[5].setComponents(c+o,d+f,h+_,T+M).normalize();else if(t===Dr)n[5].setComponents(o,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),on.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),on.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(on)}intersectsSprite(e){return on.center.set(0,0,0),on.radius=.7071067811865476,on.applyMatrix4(e.matrixWorld),this.intersectsSphere(on)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(nr.x=s.normal.x>0?e.max.x:e.min.x,nr.y=s.normal.y>0?e.max.y:e.min.y,nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function du(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sf(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Is extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=e/o,d=t/c,m=[],g=[],_=[],h=[];for(let p=0;p<u;p++){const E=p*d-a;for(let M=0;M<l;M++){const T=M*f-r;g.push(T,-E,0),_.push(0,0,1),h.push(M/o),h.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const M=E+l*p,T=E+l*(p+1),L=E+1+l*(p+1),P=E+1+l*p;m.push(M,T,P),m.push(T,L,P)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
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
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xf=`#define PI 3.141592653589793
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
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`
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
}`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
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
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
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
#endif`,Mp=`struct PhysicalMaterial {
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
}`,Sp=`
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cp=`#if defined( USE_POINTS_UV )
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
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wp=`#ifdef USE_NORMALMAP
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
#endif`,Xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a1=`float getShadowMask() {
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
}`,o1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
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
#endif`,l1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m1=`#ifdef USE_TRANSMISSION
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
#endif`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`#include <common>
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
}`,w1=`#if DEPTH_PACKING == 3200
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
}`,D1=`#define DISTANCE
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
}`,R1=`#define DISTANCE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`uniform float scale;
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
}`,U1=`uniform vec3 diffuse;
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
}`,N1=`#include <common>
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
}`,F1=`uniform vec3 diffuse;
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
}`,O1=`#define LAMBERT
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
}`,B1=`#define LAMBERT
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
}`,z1=`#define MATCAP
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
}`,k1=`#define MATCAP
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
}`,H1=`#define NORMAL
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
}`,G1=`#define NORMAL
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
}`,V1=`#define PHONG
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
}`,W1=`#define PHONG
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
}`,X1=`#define STANDARD
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
}`,K1=`#define STANDARD
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
}`,Y1=`#define TOON
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
}`,q1=`#define TOON
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
}`,$1=`uniform float size;
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
}`,j1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,J1=`uniform vec3 color;
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
}`,Q1=`uniform float rotation;
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
}`,e0=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:yf,alphahash_pars_fragment:Ef,alphamap_fragment:bf,alphamap_pars_fragment:Tf,alphatest_fragment:Af,alphatest_pars_fragment:Pf,aomap_fragment:wf,aomap_pars_fragment:Df,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Lf,beginnormal_vertex:If,bsdfs:Uf,iridescence_fragment:Nf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:zf,clipping_planes_vertex:kf,color_fragment:Hf,color_pars_fragment:Gf,color_pars_vertex:Vf,color_vertex:Wf,common:Xf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:Yf,displacementmap_pars_vertex:qf,displacementmap_vertex:$f,emissivemap_fragment:jf,emissivemap_pars_fragment:Zf,colorspace_fragment:Jf,colorspace_pars_fragment:Qf,envmap_fragment:ep,envmap_common_pars_fragment:tp,envmap_pars_fragment:ip,envmap_pars_vertex:np,envmap_physical_pars_fragment:pp,envmap_vertex:sp,fog_vertex:rp,fog_pars_vertex:ap,fog_fragment:op,fog_pars_fragment:cp,gradientmap_pars_fragment:lp,lightmap_pars_fragment:up,lights_lambert_fragment:hp,lights_lambert_pars_fragment:dp,lights_pars_begin:fp,lights_toon_fragment:mp,lights_toon_pars_fragment:gp,lights_phong_fragment:_p,lights_phong_pars_fragment:vp,lights_physical_fragment:xp,lights_physical_pars_fragment:Mp,lights_fragment_begin:Sp,lights_fragment_maps:yp,lights_fragment_end:Ep,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Tp,logdepthbuf_pars_vertex:Ap,logdepthbuf_vertex:Pp,map_fragment:wp,map_pars_fragment:Dp,map_particle_fragment:Rp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Up,morphcolor_vertex:Np,morphnormal_vertex:Fp,morphtarget_pars_vertex:Op,morphtarget_vertex:Bp,normal_fragment_begin:zp,normal_fragment_maps:kp,normal_pars_fragment:Hp,normal_pars_vertex:Gp,normal_vertex:Vp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:qp,opaque_fragment:$p,packing:jp,premultiplied_alpha_fragment:Zp,project_vertex:Jp,dithering_fragment:Qp,dithering_pars_fragment:e1,roughnessmap_fragment:t1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:s1,shadowmap_vertex:r1,shadowmask_pars_fragment:a1,skinbase_vertex:o1,skinning_pars_vertex:c1,skinning_vertex:l1,skinnormal_vertex:u1,specularmap_fragment:h1,specularmap_pars_fragment:d1,tonemapping_fragment:f1,tonemapping_pars_fragment:p1,transmission_fragment:m1,transmission_pars_fragment:g1,uv_pars_fragment:_1,uv_pars_vertex:v1,uv_vertex:x1,worldpos_vertex:M1,background_vert:S1,background_frag:y1,backgroundCube_vert:E1,backgroundCube_frag:b1,cube_vert:T1,cube_frag:A1,depth_vert:P1,depth_frag:w1,distanceRGBA_vert:D1,distanceRGBA_frag:R1,equirect_vert:C1,equirect_frag:L1,linedashed_vert:I1,linedashed_frag:U1,meshbasic_vert:N1,meshbasic_frag:F1,meshlambert_vert:O1,meshlambert_frag:B1,meshmatcap_vert:z1,meshmatcap_frag:k1,meshnormal_vert:H1,meshnormal_frag:G1,meshphong_vert:V1,meshphong_frag:W1,meshphysical_vert:X1,meshphysical_frag:K1,meshtoon_vert:Y1,meshtoon_frag:q1,points_vert:$1,points_frag:j1,shadow_vert:Z1,shadow_frag:J1,sprite_vert:Q1,sprite_frag:e0},ye={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ei={basic:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new it(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Vt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Vt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new it(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Vt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Vt([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Vt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Vt([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Vt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Vt([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Vt([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Vt([ye.lights,ye.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Ei.physical={uniforms:Vt([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const sr={r:0,b:0,g:0},cn=new zi,t0=new vt;function i0(i,e,t,n,s,r,a){const o=new it(0);let c=r===!0?0:1,l,u,f=null,d=0,m=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function _(E){let M=!1;const T=g(E);T===null?p(o,c):T&&T.isColor&&(p(T,1),M=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(E,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===Fr)?(u===void 0&&(u=new Nt(new rs(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Jn(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),cn.copy(M.backgroundRotation),cn.x*=-1,cn.y*=-1,cn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(cn)),u.material.toneMapped=ht.getTransfer(T.colorSpace)!==pt,(f!==T||d!==T.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Nt(new Is(2,2),new mt({name:"BackgroundMaterial",uniforms:Jn(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ht.getTransfer(T.colorSpace)!==pt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=T,d=T.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,M){E.getRGB(sr,cu(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),c=M,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:h}}function n0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(v,S,X,K,Y){let ie=!1;const H=f(K,X,S);r!==H&&(r=H,l(r.object)),ie=m(v,K,X,Y),ie&&g(v,K,X,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,T(v,S,X,K),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function f(v,S,X){const K=X.wireframe===!0;let Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let ie=Y[S.id];ie===void 0&&(ie={},Y[S.id]=ie);let H=ie[K];return H===void 0&&(H=d(c()),ie[K]=H),H}function d(v){const S=[],X=[],K=[];for(let Y=0;Y<t;Y++)S[Y]=0,X[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:X,attributeDivisors:K,object:v,attributes:{},index:null}}function m(v,S,X,K){const Y=r.attributes,ie=S.attributes;let H=0;const re=X.getAttributes();for(const W in re)if(re[W].location>=0){const de=Y[W];let Ce=ie[W];if(Ce===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Ce=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Ce=v.instanceColor)),de===void 0||de.attribute!==Ce||Ce&&de.data!==Ce.data)return!0;H++}return r.attributesNum!==H||r.index!==K}function g(v,S,X,K){const Y={},ie=S.attributes;let H=0;const re=X.getAttributes();for(const W in re)if(re[W].location>=0){let de=ie[W];de===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(de=v.instanceColor));const Ce={};Ce.attribute=de,de&&de.data&&(Ce.data=de.data),Y[W]=Ce,H++}r.attributes=Y,r.attributesNum=H,r.index=K}function _(){const v=r.newAttributes;for(let S=0,X=v.length;S<X;S++)v[S]=0}function h(v){p(v,0)}function p(v,S){const X=r.newAttributes,K=r.enabledAttributes,Y=r.attributeDivisors;X[v]=1,K[v]===0&&(i.enableVertexAttribArray(v),K[v]=1),Y[v]!==S&&(i.vertexAttribDivisor(v,S),Y[v]=S)}function E(){const v=r.newAttributes,S=r.enabledAttributes;for(let X=0,K=S.length;X<K;X++)S[X]!==v[X]&&(i.disableVertexAttribArray(X),S[X]=0)}function M(v,S,X,K,Y,ie,H){H===!0?i.vertexAttribIPointer(v,S,X,Y,ie):i.vertexAttribPointer(v,S,X,K,Y,ie)}function T(v,S,X,K){_();const Y=K.attributes,ie=X.getAttributes(),H=S.defaultAttributeValues;for(const re in ie){const W=ie[re];if(W.location>=0){let pe=Y[re];if(pe===void 0&&(re==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),re==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor)),pe!==void 0){const de=pe.normalized,Ce=pe.itemSize,at=e.get(pe);if(at===void 0)continue;const st=at.buffer,C=at.type,D=at.bytesPerElement,G=C===i.INT||C===i.UNSIGNED_INT||pe.gpuType===bo;if(pe.isInterleavedBufferAttribute){const ee=pe.data,ae=ee.stride,ne=pe.offset;if(ee.isInstancedInterleavedBuffer){for(let te=0;te<W.locationSize;te++)p(W.location+te,ee.meshPerAttribute);v.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<W.locationSize;te++)h(W.location+te);i.bindBuffer(i.ARRAY_BUFFER,st);for(let te=0;te<W.locationSize;te++)M(W.location+te,Ce/W.locationSize,C,de,ae*D,(ne+Ce/W.locationSize*te)*D,G)}else{if(pe.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)p(W.location+ee,pe.meshPerAttribute);v.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ee=0;ee<W.locationSize;ee++)h(W.location+ee);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ee=0;ee<W.locationSize;ee++)M(W.location+ee,Ce/W.locationSize,C,de,Ce*D,Ce/W.locationSize*ee*D,G)}}else if(H!==void 0){const de=H[re];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(W.location,de);break;case 3:i.vertexAttrib3fv(W.location,de);break;case 4:i.vertexAttrib4fv(W.location,de);break;default:i.vertexAttrib1fv(W.location,de)}}}}E()}function L(){F();for(const v in n){const S=n[v];for(const X in S){const K=S[X];for(const Y in K)u(K[Y].object),delete K[Y];delete S[X]}delete n[v]}}function P(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const X in S){const K=S[X];for(const Y in K)u(K[Y].object),delete K[Y];delete S[X]}delete n[v.id]}function A(v){for(const S in n){const X=n[S];if(X[v.id]===void 0)continue;const K=X[v.id];for(const Y in K)u(K[Y].object),delete K[Y];delete X[v.id]}}function F(){Q(),a=!0,r!==s&&(r=s,l(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:Q,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:h,disableUnusedAttributes:E}}function s0(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,n,1)}function c(l,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function r0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==gi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const F=A===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Bi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ui&&!F)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:L,maxSamples:P}}function a0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new $i,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,_=f.clipIntersection,h=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!h)r?u(null):l();else{const E=r?0:n,M=E*4;let T=p.clippingState||null;c.value=T,T=u(g,d,M,m);for(let L=0;L!==M;++L)T[L]=t[L];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,g){const _=f!==null?f.length:0;let h=null;if(_!==0){if(h=c.value,g!==!0||h===null){const p=m+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(h===null||h.length<p)&&(h=new Float32Array(p));for(let M=0,T=m;M!==_;++M,T+=4)a.copy(f[M]).applyMatrix4(E,o),a.normal.toArray(h,T),h[T+3]=a.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}function o0(i){let e=new WeakMap;function t(a,o){return o===Ba?a.mapping=qn:o===za&&(a.mapping=$n),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ba||o===za)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new vf(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class fu extends lu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gn=4,Ac=[.125,.215,.35,.446,.526,.582],pn=20,ma=new fu,Pc=new it;let ga=null,_a=0,va=0,xa=!1;const dn=(1+Math.sqrt(5))/2,Bn=1/dn,wc=[new R(-dn,Bn,0),new R(dn,Bn,0),new R(-Bn,0,dn),new R(Bn,0,dn),new R(0,dn,-Bn),new R(0,dn,Bn),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,_a,va),this._renderer.xr.enabled=xa,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Oi,format:gi,colorSpace:en,depthBuffer:!1},s=Rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c0(r)),this._blurMaterial=l0(r,e,t)}return s}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,s){const o=new ni(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Pc),u.toneMapping=Zi,u.autoClear=!1;const m=new Sn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Nt(new rs,m);let _=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,_=!0):(m.color.copy(Pc),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const M=this._cubeSize;rr(s,E*M,p>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===qn||e.mapping===$n;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;rr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wc[(s-r-1)%wc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Nt(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*pn-1),_=r/g,h=isFinite(r)?1+Math.floor(u*_):pn;h>pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${pn}`);const p=[];let E=0;for(let A=0;A<pn;++A){const F=A/_,Q=Math.exp(-F*F/2);p.push(Q),A===0?E+=Q:A<h&&(E+=2*Q)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const T=this._sizeLods[s],L=3*T*(s>M-Gn?s-M+Gn:0),P=4*(this._cubeSize-T);rr(t,L,P,3*T,2*T),c.setRenderTarget(t),c.render(f,ma)}}function c0(i){const e=[],t=[],n=[];let s=i;const r=i-Gn+1+Ac.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Gn?c=Ac[a-i+Gn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,h=2,p=1,E=new Float32Array(_*g*m),M=new Float32Array(h*g*m),T=new Float32Array(p*g*m);for(let P=0;P<m;P++){const A=P%3*2/3-1,F=P>2?0:-1,Q=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];E.set(Q,_*g*P),M.set(d,h*g*P);const v=[P,P,P,P,P,P];T.set(v,p*g*P)}const L=new xt;L.setAttribute("position",new Ti(E,_)),L.setAttribute("uv",new Ti(M,h)),L.setAttribute("faceIndex",new Ti(T,p)),e.push(L),s>Gn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rc(i,e,t){const n=new vi(i,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function l0(i,e,t){const n=new Float32Array(pn),s=new R(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Cc(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Lc(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Lo(){return`

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
	`}function u0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ba||c===za,u=c===qn||c===$n;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Dc(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Dc(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function h0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function d0(i,e,t,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let h=0,p=_.length;h<p;h++)e.remove(_[h])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let h=0,p=_.length;h<p;h++)e.update(_[h],i.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let M=0,T=E.length;M<T;M+=3){const L=E[M+0],P=E[M+1],A=E[M+2];d.push(L,P,P,A,A,L)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,T=E.length/3-1;M<T;M+=3){const L=M+0,P=M+1,A=M+2;d.push(L,P,P,A,A,L)}}else return;const h=new(tu(d)?ou:au)(d,1);h.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,h)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function f0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*a),t.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*a,g),t.update(m,n,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let h=0;for(let p=0;p<g;p++)h+=m[p];t.update(h,n,1)}function f(d,m,g,_){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<d.length;p++)l(d[p]/a,m[p],_[p]);else{h.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=m[E];for(let E=0;E<_.length;E++)t.update(p,n,_[E])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function p0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m0(i,e,t){const n=new WeakMap,s=new Mt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let Q=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",Q)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let T=o.attributes.position.count*M,L=1;T>e.maxTextureSize&&(L=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*L*4*f),A=new nu(P,T,L,f);A.type=Ui,A.needsUpdate=!0;const F=M*4;for(let v=0;v<f;v++){const S=h[v],X=p[v],K=E[v],Y=T*L*4*v;for(let ie=0;ie<S.count;ie++){const H=ie*F;m===!0&&(s.fromBufferAttribute(S,ie),P[Y+H+0]=s.x,P[Y+H+1]=s.y,P[Y+H+2]=s.z,P[Y+H+3]=0),g===!0&&(s.fromBufferAttribute(X,ie),P[Y+H+4]=s.x,P[Y+H+5]=s.y,P[Y+H+6]=s.z,P[Y+H+7]=0),_===!0&&(s.fromBufferAttribute(K,ie),P[Y+H+8]=s.x,P[Y+H+9]=s.y,P[Y+H+10]=s.z,P[Y+H+11]=K.itemSize===4?s.w:1)}}d={count:f,texture:A,size:new He(T,L)},n.set(o,d),o.addEventListener("dispose",Q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function g0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class pu extends Xt{constructor(e,t,n,s,r,a,o,c,l,u=Wn){if(u!==Wn&&u!==Zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wn&&(n=xn),n===void 0&&u===Zn&&(n=jn),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ri,this.minFilter=c!==void 0?c:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const mu=new Xt,Ic=new pu(1,1),gu=new nu,_u=new nf,vu=new uu,Uc=[],Nc=[],Fc=new Float32Array(16),Oc=new Float32Array(9),Bc=new Float32Array(4);function as(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Uc[s];if(r===void 0&&(r=new Float32Array(s),Uc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zr(i,e){let t=Nc[e];t===void 0&&(t=new Int32Array(e),Nc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function S0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Bc.set(n),i.uniformMatrix2fv(this.addr,!1,Bc),At(t,n)}}function y0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Oc.set(n),i.uniformMatrix3fv(this.addr,!1,Oc),At(t,n)}}function E0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Fc.set(n),i.uniformMatrix4fv(this.addr,!1,Fc),At(t,n)}}function b0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function w0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function D0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function L0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=eu,r=Ic):r=mu,t.setTexture2D(e||r,s)}function I0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_u,s)}function U0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vu,s)}function N0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gu,s)}function F0(i){switch(i){case 5126:return _0;case 35664:return v0;case 35665:return x0;case 35666:return M0;case 35674:return S0;case 35675:return y0;case 35676:return E0;case 5124:case 35670:return b0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return P0;case 5125:return w0;case 36294:return D0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}function O0(i,e){i.uniform1fv(this.addr,e)}function B0(i,e){const t=as(e,this.size,2);i.uniform2fv(this.addr,t)}function z0(i,e){const t=as(e,this.size,3);i.uniform3fv(this.addr,t)}function k0(i,e){const t=as(e,this.size,4);i.uniform4fv(this.addr,t)}function H0(i,e){const t=as(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function G0(i,e){const t=as(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function V0(i,e){const t=as(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function W0(i,e){i.uniform1iv(this.addr,e)}function X0(i,e){i.uniform2iv(this.addr,e)}function K0(i,e){i.uniform3iv(this.addr,e)}function Y0(i,e){i.uniform4iv(this.addr,e)}function q0(i,e){i.uniform1uiv(this.addr,e)}function $0(i,e){i.uniform2uiv(this.addr,e)}function j0(i,e){i.uniform3uiv(this.addr,e)}function Z0(i,e){i.uniform4uiv(this.addr,e)}function J0(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||mu,r[a])}function Q0(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_u,r[a])}function em(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vu,r[a])}function tm(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gu,r[a])}function im(i){switch(i){case 5126:return O0;case 35664:return B0;case 35665:return z0;case 35666:return k0;case 35674:return H0;case 35675:return G0;case 35676:return V0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return K0;case 35669:case 35673:return Y0;case 5125:return q0;case 36294:return $0;case 36295:return j0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}class nm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F0(t.type)}}class sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=im(t.type)}}class rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function zc(i,e){i.seq.push(e),i.map[e.id]=e}function am(i,e,t){const n=i.name,s=n.length;for(Ma.lastIndex=0;;){const r=Ma.exec(n),a=Ma.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){zc(t,l===void 0?new nm(o,i,e):new sm(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new rm(o),zc(t,f)),t=f}}}class br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);am(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function kc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const om=37297;let cm=0;function lm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function um(i){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(i);let n;switch(e===t?n="":e===wr&&t===Pr?n="LinearDisplayP3ToLinearSRGB":e===Pr&&t===wr&&(n="LinearSRGBToLinearDisplayP3"),i){case en:case Or:return[n,"LinearTransferOETF"];case fi:case Ro:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lm(i.getShaderSource(e),a)}else return s}function hm(i,e){const t=um(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dm(i,e){let t;switch(e){case Ol:t="Linear";break;case Bl:t="Reinhard";break;case zl:t="Cineon";break;case kl:t="ACESFilmic";break;case Hl:t="AgX";break;case Gl:t="Neutral";break;case vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ar=new R;function fm(){ht.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),e=ar.y.toFixed(4),t=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function mm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ss(i){return i!==""}function Gc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(i){return i.replace(_m,xm)}const vm=new Map;function xm(i,e){let t=Ze[e];if(t===void 0){const n=vm.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mo(t)}const Mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(i){return i.replace(Mm,Sm)}function Sm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ym(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Em(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qn:case $n:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function Tm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fl:e="ENVMAP_BLENDING_MULTIPLY";break;case gd:e="ENVMAP_BLENDING_MIX";break;case _d:e="ENVMAP_BLENDING_ADD";break}return e}function Am(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ym(t),l=Em(t),u=bm(t),f=Tm(t),d=Am(t),m=pm(t),g=mm(r),_=s.createProgram();let h,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),h.length>0&&(h+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(h=[Xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[Xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Zi?dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,hm("linearToOutputTexel",t.outputColorSpace),fm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=mo(a),a=Gc(a,t),a=Vc(a,t),o=mo(o),o=Gc(o,t),o=Vc(o,t),a=Wc(a),o=Wc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,p=["#define varying in",t.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+h+a,T=E+p+o,L=kc(s,s.VERTEX_SHADER,M),P=kc(s,s.FRAGMENT_SHADER,T);s.attachShader(_,L),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(S){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(_).trim(),K=s.getShaderInfoLog(L).trim(),Y=s.getShaderInfoLog(P).trim();let ie=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,P);else{const re=Hc(s,L,"vertex"),W=Hc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+X+`
`+re+`
`+W)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(K===""||Y==="")&&(H=!1);H&&(S.diagnostics={runnable:ie,programLog:X,vertexShader:{log:K,prefix:h},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(L),s.deleteShader(P),F=new br(s,_),Q=gm(s,_)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let Q;this.getAttributes=function(){return Q===void 0&&A(this),Q};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,om)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}let wm=0;class Dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rm(e),t.set(e,n)),n}}class Rm{constructor(e){this.id=wm++,this.code=e,this.usedTimes=0}}function Cm(i,e,t,n,s,r,a){const o=new su,c=new Dm,l=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,X,K,Y){const ie=K.fog,H=Y.geometry,re=v.isMeshStandardMaterial?K.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||re),pe=W&&W.mapping===Fr?W.image.height:null,de=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const Ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=Ce!==void 0?Ce.length:0;let st=0;H.morphAttributes.position!==void 0&&(st=1),H.morphAttributes.normal!==void 0&&(st=2),H.morphAttributes.color!==void 0&&(st=3);let C,D,G,ee;if(de){const Ct=Ei[de];C=Ct.vertexShader,D=Ct.fragmentShader}else C=v.vertexShader,D=v.fragmentShader,c.update(v),G=c.getVertexShaderID(v),ee=c.getFragmentShaderID(v);const ae=i.getRenderTarget(),ne=Y.isInstancedMesh===!0,te=Y.isBatchedMesh===!0,ge=!!v.map,ue=!!v.matcap,w=!!W,Ve=!!v.aoMap,ke=!!v.lightMap,Be=!!v.bumpMap,me=!!v.normalMap,Ge=!!v.displacementMap,_e=!!v.emissiveMap,b=!!v.metalnessMap,x=!!v.roughnessMap,O=v.anisotropy>0,q=v.clearcoat>0,Z=v.dispersion>0,$=v.iridescence>0,ce=v.sheen>0,he=v.transmission>0,fe=O&&!!v.anisotropyMap,qe=q&&!!v.clearcoatMap,oe=q&&!!v.clearcoatNormalMap,be=q&&!!v.clearcoatRoughnessMap,ve=$&&!!v.iridescenceMap,Me=$&&!!v.iridescenceThicknessMap,we=ce&&!!v.sheenColorMap,Xe=ce&&!!v.sheenRoughnessMap,We=!!v.specularMap,ct=!!v.specularColorMap,I=!!v.specularIntensityMap,De=he&&!!v.transmissionMap,j=he&&!!v.thicknessMap,se=!!v.gradientMap,Te=!!v.alphaMap,Le=v.alphaTest>0,rt=!!v.alphaHash,gt=!!v.extensions;let Rt=Zi;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Rt=i.toneMapping);const lt={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:C,fragmentShader:D,defines:v.defines,customVertexShaderID:G,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:te,batchingColor:te&&Y._colorsTexture!==null,instancing:ne,instancingColor:ne&&Y.instanceColor!==null,instancingMorph:ne&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:en,alphaToCoverage:!!v.alphaToCoverage,map:ge,matcap:ue,envMap:w,envMapMode:w&&W.mapping,envMapCubeUVHeight:pe,aoMap:Ve,lightMap:ke,bumpMap:Be,normalMap:me,displacementMap:m&&Ge,emissiveMap:_e,normalMapObjectSpace:me&&v.normalMapType===Ed,normalMapTangentSpace:me&&v.normalMapType===yd,metalnessMap:b,roughnessMap:x,anisotropy:O,anisotropyMap:fe,clearcoat:q,clearcoatMap:qe,clearcoatNormalMap:oe,clearcoatRoughnessMap:be,dispersion:Z,iridescence:$,iridescenceMap:ve,iridescenceThicknessMap:Me,sheen:ce,sheenColorMap:we,sheenRoughnessMap:Xe,specularMap:We,specularColorMap:ct,specularIntensityMap:I,transmission:he,transmissionMap:De,thicknessMap:j,gradientMap:se,opaque:v.transparent===!1&&v.blending===Vn&&v.alphaToCoverage===!1,alphaMap:Te,alphaTest:Le,alphaHash:rt,combine:v.combine,mapUv:ge&&h(v.map.channel),aoMapUv:Ve&&h(v.aoMap.channel),lightMapUv:ke&&h(v.lightMap.channel),bumpMapUv:Be&&h(v.bumpMap.channel),normalMapUv:me&&h(v.normalMap.channel),displacementMapUv:Ge&&h(v.displacementMap.channel),emissiveMapUv:_e&&h(v.emissiveMap.channel),metalnessMapUv:b&&h(v.metalnessMap.channel),roughnessMapUv:x&&h(v.roughnessMap.channel),anisotropyMapUv:fe&&h(v.anisotropyMap.channel),clearcoatMapUv:qe&&h(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&h(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&h(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&h(v.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&h(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&h(v.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&h(v.sheenRoughnessMap.channel),specularMapUv:We&&h(v.specularMap.channel),specularColorMapUv:ct&&h(v.specularColorMap.channel),specularIntensityMapUv:I&&h(v.specularIntensityMap.channel),transmissionMapUv:De&&h(v.transmissionMap.channel),thicknessMapUv:j&&h(v.thicknessMap.channel),alphaMapUv:Te&&h(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(me||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!H.attributes.uv&&(ge||Te),fog:!!ie,useFog:v.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:st,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:ge&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pi,flipSided:v.side===Wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function E(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const X in v.defines)S.push(X),S.push(v.defines[X]);return v.isRawShaderMaterial===!1&&(M(S,v),T(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function T(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function L(v){const S=_[v.type];let X;if(S){const K=Ei[S];X=Rs.clone(K.uniforms)}else X=v.uniforms;return X}function P(v,S){let X;for(let K=0,Y=u.length;K<Y;K++){const ie=u[K];if(ie.cacheKey===S){X=ie,++X.usedTimes;break}}return X===void 0&&(X=new Pm(i,S,v,r),u.push(X)),X}function A(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function F(v){c.remove(v)}function Q(){c.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:L,acquireProgram:P,releaseProgram:A,releaseShaderCache:F,programs:u,dispose:Q}}function Lm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,m,g,_,h){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:h},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=h),e++,p}function o(f,d,m,g,_,h){const p=a(f,d,m,g,_,h);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):t.push(p)}function c(f,d,m,g,_,h){const p=a(f,d,m,g,_,h);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||Im),n.length>1&&n.sort(d||Kc),s.length>1&&s.sort(d||Kc)}function u(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Um(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Yc,i.set(n,[a])):s>=r.length?(a=new Yc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Nm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new it};break;case"SpotLight":t={position:new R,direction:new R,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Fm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Om=0;function Bm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zm(i){const e=new Nm,t=Fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new vt,a=new vt;function o(l){let u=0,f=0,d=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let m=0,g=0,_=0,h=0,p=0,E=0,M=0,T=0,L=0,P=0,A=0;l.sort(Bm);for(let Q=0,v=l.length;Q<v;Q++){const S=l[Q],X=S.color,K=S.intensity,Y=S.distance,ie=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=X.r*K,f+=X.g*K,d+=X.b*K;else if(S.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(S.sh.coefficients[H],K);A++}else if(S.isDirectionalLight){const H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const re=S.shadow,W=t.get(S);W.shadowIntensity=re.intensity,W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=S.shadow.matrix,E++}n.directional[m]=H,m++}else if(S.isSpotLight){const H=e.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(X).multiplyScalar(K),H.distance=Y,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,n.spot[_]=H;const re=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,re.updateMatrices(S),S.castShadow&&P++),n.spotLightMatrix[_]=re.matrix,S.castShadow){const W=t.get(S);W.shadowIntensity=re.intensity,W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=ie,T++}_++}else if(S.isRectAreaLight){const H=e.get(S);H.color.copy(X).multiplyScalar(K),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),n.rectArea[h]=H,h++}else if(S.isPointLight){const H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const re=S.shadow,W=t.get(S);W.shadowIntensity=re.intensity,W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,W.shadowCameraNear=re.camera.near,W.shadowCameraFar=re.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=S.shadow.matrix,M++}n.point[g]=H,g++}else if(S.isHemisphereLight){const H=e.get(S);H.skyColor.copy(S.color).multiplyScalar(K),H.groundColor.copy(S.groundColor).multiplyScalar(K),n.hemi[p]=H,p++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==h||F.hemiLength!==p||F.numDirectionalShadows!==E||F.numPointShadows!==M||F.numSpotShadows!==T||F.numSpotMaps!==L||F.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=h,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=h,F.hemiLength=p,F.numDirectionalShadows=E,F.numPointShadows=M,F.numSpotShadows=T,F.numSpotMaps=L,F.numLightProbes=A,n.version=Om++)}function c(l,u){let f=0,d=0,m=0,g=0,_=0;const h=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const M=l[p];if(M.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),f++}else if(M.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),m++}else if(M.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),a.identity(),r.copy(M.matrixWorld),r.premultiply(h),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),d++}else if(M.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),_++}}}return{setup:o,setupView:c,state:n}}function qc(i){const e=new zm(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function km(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new qc(i),e.set(s,[o])):r>=a.length?(o=new qc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Hm extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gm extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(i,e,t){let n=new hu;const s=new He,r=new He,a=new Mt,o=new Hm({depthPacking:Sd}),c=new Gm,l={},u=t.maxTextureSize,f={[Qi]:Wt,[Wt]:Qi,[pi]:pi},d=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Vm,fragmentShader:Wm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new xt;g.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let p=this.type;this.render=function(P,A,F){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||P.length===0)return;const Q=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Fi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const K=p!==Li&&this.type===Li,Y=p===Li&&this.type!==Li;for(let ie=0,H=P.length;ie<H;ie++){const re=P[ie],W=re.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const pe=W.getFrameExtents();if(s.multiply(pe),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,W.mapSize.y=r.y)),W.map===null||K===!0||Y===!0){const Ce=this.type!==Li?{minFilter:ri,magFilter:ri}:{};W.map!==null&&W.map.dispose(),W.map=new vi(s.x,s.y,Ce),W.map.texture.name=re.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const de=W.getViewportCount();for(let Ce=0;Ce<de;Ce++){const at=W.getViewport(Ce);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),X.viewport(a),W.updateMatrices(re,Ce),n=W.getFrustum(),T(A,F,W.camera,re,this.type)}W.isPointLightShadow!==!0&&this.type===Li&&E(W,F),W.needsUpdate=!1}p=this.type,h.needsUpdate=!1,i.setRenderTarget(Q,v,S)};function E(P,A){const F=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new vi(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(A,null,F,d,_,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(A,null,F,m,_,null)}function M(P,A,F,Q){let v=null;const S=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)v=S;else if(v=F.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=v.uuid,K=A.uuid;let Y=l[X];Y===void 0&&(Y={},l[X]=Y);let ie=Y[K];ie===void 0&&(ie=v.clone(),Y[K]=ie,A.addEventListener("dispose",L)),v=ie}if(v.visible=A.visible,v.wireframe=A.wireframe,Q===Li?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:f[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,F.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const X=i.properties.get(v);X.light=F}return v}function T(P,A,F,Q,v){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===Li)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const K=e.update(P),Y=P.material;if(Array.isArray(Y)){const ie=K.groups;for(let H=0,re=ie.length;H<re;H++){const W=ie[H],pe=Y[W.materialIndex];if(pe&&pe.visible){const de=M(P,pe,Q,v);P.onBeforeShadow(i,P,A,F,K,de,W),i.renderBufferDirect(F,null,K,de,P,W),P.onAfterShadow(i,P,A,F,K,de,W)}}}else if(Y.visible){const ie=M(P,Y,Q,v);P.onBeforeShadow(i,P,A,F,K,ie,null),i.renderBufferDirect(F,null,K,ie,P,null),P.onAfterShadow(i,P,A,F,K,ie,null)}}const X=P.children;for(let K=0,Y=X.length;K<Y;K++)T(X[K],A,F,Q,v)}function L(P){P.target.removeEventListener("dispose",L);for(const F in l){const Q=l[F],v=P.target.uuid;v in Q&&(Q[v].dispose(),delete Q[v])}}}const Km={[Ca]:La,[Ia]:Fa,[Ua]:Oa,[Yn]:Na,[La]:Ca,[Fa]:Ia,[Oa]:Ua,[Na]:Yn};function Ym(i){function e(){let I=!1;const De=new Mt;let j=null;const se=new Mt(0,0,0,0);return{setMask:function(Te){j!==Te&&!I&&(i.colorMask(Te,Te,Te,Te),j=Te)},setLocked:function(Te){I=Te},setClear:function(Te,Le,rt,gt,Rt){Rt===!0&&(Te*=gt,Le*=gt,rt*=gt),De.set(Te,Le,rt,gt),se.equals(De)===!1&&(i.clearColor(Te,Le,rt,gt),se.copy(De))},reset:function(){I=!1,j=null,se.set(-1,0,0,0)}}}function t(){let I=!1,De=!1,j=null,se=null,Te=null;return{setReversed:function(Le){De=Le},setTest:function(Le){Le?G(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(Le){j!==Le&&!I&&(i.depthMask(Le),j=Le)},setFunc:function(Le){if(De&&(Le=Km[Le]),se!==Le){switch(Le){case Ca:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case Yn:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Fa:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=Le}},setLocked:function(Le){I=Le},setClear:function(Le){Te!==Le&&(i.clearDepth(Le),Te=Le)},reset:function(){I=!1,j=null,se=null,Te=null}}}function n(){let I=!1,De=null,j=null,se=null,Te=null,Le=null,rt=null,gt=null,Rt=null;return{setTest:function(lt){I||(lt?G(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(lt){De!==lt&&!I&&(i.stencilMask(lt),De=lt)},setFunc:function(lt,Ct,oi){(j!==lt||se!==Ct||Te!==oi)&&(i.stencilFunc(lt,Ct,oi),j=lt,se=Ct,Te=oi)},setOp:function(lt,Ct,oi){(Le!==lt||rt!==Ct||gt!==oi)&&(i.stencilOp(lt,Ct,oi),Le=lt,rt=Ct,gt=oi)},setLocked:function(lt){I=lt},setClear:function(lt){Rt!==lt&&(i.clearStencil(lt),Rt=lt)},reset:function(){I=!1,De=null,j=null,se=null,Te=null,Le=null,rt=null,gt=null,Rt=null}}}const s=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,d=[],m=null,g=!1,_=null,h=null,p=null,E=null,M=null,T=null,L=null,P=new it(0,0,0),A=0,F=!1,Q=null,v=null,S=null,X=null,K=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,H=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(re)[1]),ie=H>=1):re.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ie=H>=2);let W=null,pe={};const de=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),at=new Mt().fromArray(de),st=new Mt().fromArray(Ce);function C(I,De,j,se){const Te=new Uint8Array(4),Le=i.createTexture();i.bindTexture(I,Le),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<j;rt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(De+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return Le}const D={};D[i.TEXTURE_2D]=C(i.TEXTURE_2D,i.TEXTURE_2D,1),D[i.TEXTURE_CUBE_MAP]=C(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[i.TEXTURE_2D_ARRAY]=C(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),D[i.TEXTURE_3D]=C(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),G(i.DEPTH_TEST),r.setFunc(Yn),ke(!1),Be(tc),G(i.CULL_FACE),w(Fi);function G(I){l[I]!==!0&&(i.enable(I),l[I]=!0)}function ee(I){l[I]!==!1&&(i.disable(I),l[I]=!1)}function ae(I,De){return u[I]!==De?(i.bindFramebuffer(I,De),u[I]=De,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=De),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=De),!0):!1}function ne(I,De){let j=d,se=!1;if(I){j=f.get(De),j===void 0&&(j=[],f.set(De,j));const Te=I.textures;if(j.length!==Te.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,rt=Te.length;Le<rt;Le++)j[Le]=i.COLOR_ATTACHMENT0+Le;j.length=Te.length,se=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,se=!0);se&&i.drawBuffers(j)}function te(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const ge={[fn]:i.FUNC_ADD,[Qh]:i.FUNC_SUBTRACT,[ed]:i.FUNC_REVERSE_SUBTRACT};ge[td]=i.MIN,ge[id]=i.MAX;const ue={[nd]:i.ZERO,[sd]:i.ONE,[rd]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[ld]:i.DST_COLOR,[od]:i.DST_ALPHA,[ad]:i.ONE_MINUS_SRC_COLOR,[Ra]:i.ONE_MINUS_SRC_ALPHA,[ud]:i.ONE_MINUS_DST_COLOR,[cd]:i.ONE_MINUS_DST_ALPHA,[dd]:i.CONSTANT_COLOR,[fd]:i.ONE_MINUS_CONSTANT_COLOR,[pd]:i.CONSTANT_ALPHA,[md]:i.ONE_MINUS_CONSTANT_ALPHA};function w(I,De,j,se,Te,Le,rt,gt,Rt,lt){if(I===Fi){g===!0&&(ee(i.BLEND),g=!1);return}if(g===!1&&(G(i.BLEND),g=!0),I!==Jh){if(I!==_||lt!==F){if((h!==fn||M!==fn)&&(i.blendEquation(i.FUNC_ADD),h=fn,M=fn),lt)switch(I){case Vn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ai:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ai:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,E=null,T=null,L=null,P.set(0,0,0),A=0,_=I,F=lt}return}Te=Te||De,Le=Le||j,rt=rt||se,(De!==h||Te!==M)&&(i.blendEquationSeparate(ge[De],ge[Te]),h=De,M=Te),(j!==p||se!==E||Le!==T||rt!==L)&&(i.blendFuncSeparate(ue[j],ue[se],ue[Le],ue[rt]),p=j,E=se,T=Le,L=rt),(gt.equals(P)===!1||Rt!==A)&&(i.blendColor(gt.r,gt.g,gt.b,Rt),P.copy(gt),A=Rt),_=I,F=!1}function Ve(I,De){I.side===pi?ee(i.CULL_FACE):G(i.CULL_FACE);let j=I.side===Wt;De&&(j=!j),ke(j),I.blending===Vn&&I.transparent===!1?w(Fi):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const se=I.stencilWrite;a.setTest(se),se&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){Q!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),Q=I)}function Be(I){I!==$h?(G(i.CULL_FACE),I!==v&&(I===tc?i.cullFace(i.BACK):I===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),v=I}function me(I){I!==S&&(ie&&i.lineWidth(I),S=I)}function Ge(I,De,j){I?(G(i.POLYGON_OFFSET_FILL),(X!==De||K!==j)&&(i.polygonOffset(De,j),X=De,K=j)):ee(i.POLYGON_OFFSET_FILL)}function _e(I){I?G(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function b(I){I===void 0&&(I=i.TEXTURE0+Y-1),W!==I&&(i.activeTexture(I),W=I)}function x(I,De,j){j===void 0&&(W===null?j=i.TEXTURE0+Y-1:j=W);let se=pe[j];se===void 0&&(se={type:void 0,texture:void 0},pe[j]=se),(se.type!==I||se.texture!==De)&&(W!==j&&(i.activeTexture(j),W=j),i.bindTexture(I,De||D[I]),se.type=I,se.texture=De)}function O(){const I=pe[W];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(I){at.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),at.copy(I))}function we(I){st.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),st.copy(I))}function Xe(I,De){let j=c.get(De);j===void 0&&(j=new WeakMap,c.set(De,j));let se=j.get(I);se===void 0&&(se=i.getUniformBlockIndex(De,I.name),j.set(I,se))}function We(I,De){const se=c.get(De).get(I);o.get(De)!==se&&(i.uniformBlockBinding(De,se,I.__bindingPointIndex),o.set(De,se))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},W=null,pe={},u={},f=new WeakMap,d=[],m=null,g=!1,_=null,h=null,p=null,E=null,M=null,T=null,L=null,P=new it(0,0,0),A=0,F=!1,Q=null,v=null,S=null,X=null,K=null,at.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:G,disable:ee,bindFramebuffer:ae,drawBuffers:ne,useProgram:te,setBlending:w,setMaterial:Ve,setFlipSided:ke,setCullFace:Be,setLineWidth:me,setPolygonOffset:Ge,setScissorTest:_e,activeTexture:b,bindTexture:x,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:be,texImage3D:ve,updateUBOMapping:Xe,uniformBlockBinding:We,texStorage2D:qe,texStorage3D:oe,texSubImage2D:$,texSubImage3D:ce,compressedTexSubImage2D:he,compressedTexSubImage3D:fe,scissor:Me,viewport:we,reset:ct}}function $c(i,e,t,n){const s=qm(n);switch(t){case Yl:return i*e;case $l:return i*e;case jl:return i*e*2;case Zl:return i*e/s.components*s.byteLength;case Po:return i*e/s.components*s.byteLength;case Jl:return i*e*2/s.components*s.byteLength;case wo:return i*e*2/s.components*s.byteLength;case ql:return i*e*3/s.components*s.byteLength;case gi:return i*e*4/s.components*s.byteLength;case Do:return i*e*4/s.components*s.byteLength;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:case Xa:return Math.max(i,16)*Math.max(e,8)/4;case Ga:case Wa:return Math.max(i,8)*Math.max(e,8)/2;case Ka:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yr:case lo:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ql:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fo:case po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qm(i){switch(i){case Bi:case Wl:return{byteLength:1,components:1};case Ps:case Xl:case Oi:return{byteLength:2,components:1};case To:case Ao:return{byteLength:2,components:4};case xn:case bo:case Ui:return{byteLength:4,components:1};case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $m(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return m?new OffscreenCanvas(b,x):Ds("canvas")}function _(b,x,O){let q=1;const Z=_e(b);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const $=Math.floor(q*Z.width),ce=Math.floor(q*Z.height);f===void 0&&(f=g($,ce));const he=x?g($,ce):f;return he.width=$,he.height=ce,he.getContext("2d").drawImage(b,0,0,$,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+ce+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function h(b){return b.generateMipmaps&&b.minFilter!==ri&&b.minFilter!==mi}function p(b){i.generateMipmap(b)}function E(b,x,O,q,Z=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let $=x;if(x===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),x===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),x===i.RGBA){const ce=Z?Ar:ht.getTransfer(q);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=ce===pt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(b,x){let O;return b?x===null||x===xn||x===jn?O=i.DEPTH24_STENCIL8:x===Ui?O=i.DEPTH32F_STENCIL8:x===Ps&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xn||x===jn?O=i.DEPTH_COMPONENT24:x===Ui?O=i.DEPTH_COMPONENT32F:x===Ps&&(O=i.DEPTH_COMPONENT16),O}function T(b,x){return h(b)===!0||b.isFramebufferTexture&&b.minFilter!==ri&&b.minFilter!==mi?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function L(b){const x=b.target;x.removeEventListener("dispose",L),A(x),x.isVideoTexture&&u.delete(x)}function P(b){const x=b.target;x.removeEventListener("dispose",P),Q(x)}function A(b){const x=n.get(b);if(x.__webglInit===void 0)return;const O=b.source,q=d.get(O);if(q){const Z=q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(b),Object.keys(q).length===0&&d.delete(O)}n.remove(b)}function F(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const O=b.source,q=d.get(O);delete q[x.__cacheKey],a.memory.textures--}function Q(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Z=0;Z<x.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,Z=O.length;q<Z;q++){const $=n.get(O[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(b)}let v=0;function S(){v=0}function X(){const b=v;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),v+=1,b}function K(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function Y(b,x){const O=n.get(b);if(b.isVideoTexture&&me(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(O,b,x);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function ie(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){st(O,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function H(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){st(O,b,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function re(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){C(O,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const W={[ka]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},pe={[ri]:i.NEAREST,[xd]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[mi]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[gn]:i.LINEAR_MIPMAP_LINEAR},de={[bd]:i.NEVER,[Rd]:i.ALWAYS,[Td]:i.LESS,[eu]:i.LEQUAL,[Ad]:i.EQUAL,[Dd]:i.GEQUAL,[Pd]:i.GREATER,[wd]:i.NOTEQUAL};function Ce(b,x){if(x.type===Ui&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===mi||x.magFilter===Yr||x.magFilter===ks||x.magFilter===gn||x.minFilter===mi||x.minFilter===Yr||x.minFilter===ks||x.minFilter===gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,W[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,W[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,W[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,pe[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,de[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ri||x.minFilter!==ks&&x.minFilter!==gn||x.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function at(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",L));const q=x.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const $=K(x);if($!==b.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[$].usedTimes++;const ce=Z[b.__cacheKey];ce!==void 0&&(Z[b.__cacheKey].usedTimes--,ce.usedTimes===0&&F(x)),b.__cacheKey=$,b.__webglTexture=Z[$].texture}return O}function st(b,x,O){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const Z=at(b,x),$=x.source;t.bindTexture(q,b.__webglTexture,i.TEXTURE0+O);const ce=n.get($);if($.version!==ce.__version||Z===!0){t.activeTexture(i.TEXTURE0+O);const he=ht.getPrimaries(ht.workingColorSpace),fe=x.colorSpace===ji?null:ht.getPrimaries(x.colorSpace),qe=x.colorSpace===ji||he===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let oe=_(x.image,!1,s.maxTextureSize);oe=Ge(x,oe);const be=r.convert(x.format,x.colorSpace),ve=r.convert(x.type);let Me=E(x.internalFormat,be,ve,x.colorSpace,x.isVideoTexture);Ce(q,x);let we;const Xe=x.mipmaps,We=x.isVideoTexture!==!0,ct=ce.__version===void 0||Z===!0,I=$.dataReady,De=T(x,oe);if(x.isDepthTexture)Me=M(x.format===Zn,x.type),ct&&(We?t.texStorage2D(i.TEXTURE_2D,1,Me,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Me,oe.width,oe.height,0,be,ve,null));else if(x.isDataTexture)if(Xe.length>0){We&&ct&&t.texStorage2D(i.TEXTURE_2D,De,Me,Xe[0].width,Xe[0].height);for(let j=0,se=Xe.length;j<se;j++)we=Xe[j],We?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,we.width,we.height,be,ve,we.data):t.texImage2D(i.TEXTURE_2D,j,Me,we.width,we.height,0,be,ve,we.data);x.generateMipmaps=!1}else We?(ct&&t.texStorage2D(i.TEXTURE_2D,De,Me,oe.width,oe.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,be,ve,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Me,oe.width,oe.height,0,be,ve,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Me,Xe[0].width,Xe[0].height,oe.depth);for(let j=0,se=Xe.length;j<se;j++)if(we=Xe[j],x.format!==gi)if(be!==null)if(We){if(I)if(x.layerUpdates.size>0){const Te=$c(we.width,we.height,x.format,x.type);for(const Le of x.layerUpdates){const rt=we.data.subarray(Le*Te/we.data.BYTES_PER_ELEMENT,(Le+1)*Te/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Le,we.width,we.height,1,be,rt,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,we.width,we.height,oe.depth,be,we.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Me,we.width,we.height,oe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,we.width,we.height,oe.depth,be,ve,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Me,we.width,we.height,oe.depth,0,be,ve,we.data)}else{We&&ct&&t.texStorage2D(i.TEXTURE_2D,De,Me,Xe[0].width,Xe[0].height);for(let j=0,se=Xe.length;j<se;j++)we=Xe[j],x.format!==gi?be!==null?We?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,we.width,we.height,be,we.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Me,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,we.width,we.height,be,ve,we.data):t.texImage2D(i.TEXTURE_2D,j,Me,we.width,we.height,0,be,ve,we.data)}else if(x.isDataArrayTexture)if(We){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Me,oe.width,oe.height,oe.depth),I)if(x.layerUpdates.size>0){const j=$c(oe.width,oe.height,x.format,x.type);for(const se of x.layerUpdates){const Te=oe.data.subarray(se*j/oe.data.BYTES_PER_ELEMENT,(se+1)*j/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,be,ve,Te)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,be,ve,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,oe.width,oe.height,oe.depth,0,be,ve,oe.data);else if(x.isData3DTexture)We?(ct&&t.texStorage3D(i.TEXTURE_3D,De,Me,oe.width,oe.height,oe.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,be,ve,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Me,oe.width,oe.height,oe.depth,0,be,ve,oe.data);else if(x.isFramebufferTexture){if(ct)if(We)t.texStorage2D(i.TEXTURE_2D,De,Me,oe.width,oe.height);else{let j=oe.width,se=oe.height;for(let Te=0;Te<De;Te++)t.texImage2D(i.TEXTURE_2D,Te,Me,j,se,0,be,ve,null),j>>=1,se>>=1}}else if(Xe.length>0){if(We&&ct){const j=_e(Xe[0]);t.texStorage2D(i.TEXTURE_2D,De,Me,j.width,j.height)}for(let j=0,se=Xe.length;j<se;j++)we=Xe[j],We?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,be,ve,we):t.texImage2D(i.TEXTURE_2D,j,Me,be,ve,we);x.generateMipmaps=!1}else if(We){if(ct){const j=_e(oe);t.texStorage2D(i.TEXTURE_2D,De,Me,j.width,j.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,ve,oe)}else t.texImage2D(i.TEXTURE_2D,0,Me,be,ve,oe);h(x)&&p(q),ce.__version=$.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function C(b,x,O){if(x.image.length!==6)return;const q=at(b,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const $=n.get(Z);if(Z.version!==$.__version||q===!0){t.activeTexture(i.TEXTURE0+O);const ce=ht.getPrimaries(ht.workingColorSpace),he=x.colorSpace===ji?null:ht.getPrimaries(x.colorSpace),fe=x.colorSpace===ji||ce===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const qe=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,be=[];for(let se=0;se<6;se++)!qe&&!oe?be[se]=_(x.image[se],!0,s.maxCubemapSize):be[se]=oe?x.image[se].image:x.image[se],be[se]=Ge(x,be[se]);const ve=be[0],Me=r.convert(x.format,x.colorSpace),we=r.convert(x.type),Xe=E(x.internalFormat,Me,we,x.colorSpace),We=x.isVideoTexture!==!0,ct=$.__version===void 0||q===!0,I=Z.dataReady;let De=T(x,ve);Ce(i.TEXTURE_CUBE_MAP,x);let j;if(qe){We&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Xe,ve.width,ve.height);for(let se=0;se<6;se++){j=be[se].mipmaps;for(let Te=0;Te<j.length;Te++){const Le=j[Te];x.format!==gi?Me!==null?We?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,Xe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,Le.width,Le.height,Me,we,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,Xe,Le.width,Le.height,0,Me,we,Le.data)}}}else{if(j=x.mipmaps,We&&ct){j.length>0&&De++;const se=_e(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Xe,se.width,se.height)}for(let se=0;se<6;se++)if(oe){We?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be[se].width,be[se].height,Me,we,be[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,be[se].width,be[se].height,0,Me,we,be[se].data);for(let Te=0;Te<j.length;Te++){const rt=j[Te].image[se].image;We?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,rt.width,rt.height,Me,we,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,Xe,rt.width,rt.height,0,Me,we,rt.data)}}else{We?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Me,we,be[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,Me,we,be[se]);for(let Te=0;Te<j.length;Te++){const Le=j[Te];We?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,Me,we,Le.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,Xe,Me,we,Le.image[se])}}}h(x)&&p(i.TEXTURE_CUBE_MAP),$.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function D(b,x,O,q,Z,$){const ce=r.convert(O.format,O.colorSpace),he=r.convert(O.type),fe=E(O.internalFormat,ce,he,O.colorSpace);if(!n.get(x).__hasExternalTextures){const oe=Math.max(1,x.width>>$),be=Math.max(1,x.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,fe,oe,be,x.depth,0,ce,he,null):t.texImage2D(Z,$,fe,oe,be,0,ce,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,n.get(O).__webglTexture,0,ke(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,n.get(O).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(b,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const q=x.depthTexture,Z=q&&q.isDepthTexture?q.type:null,$=M(x.stencilBuffer,Z),ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=ke(x);Be(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,$,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,b)}else{const q=x.textures;for(let Z=0;Z<q.length;Z++){const $=q[Z],ce=r.convert($.format,$.colorSpace),he=r.convert($.type),fe=E($.internalFormat,ce,he,$.colorSpace),qe=ke(x);O&&Be(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,fe,x.width,x.height):Be(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,fe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,fe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const q=n.get(x.depthTexture).__webglTexture,Z=ke(x);if(x.depthTexture.format===Wn)Be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(x.depthTexture.format===Zn)Be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ae(b){const x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=q}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ee(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),G(x.__webglDepthbuffer[q],b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),G(x.__webglDepthbuffer,b,!1);else{const q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(b,x,O){const q=n.get(b);x!==void 0&&D(q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ae(b)}function te(b){const x=b.texture,O=n.get(b),q=n.get(x);b.addEventListener("dispose",P);const Z=b.textures,$=b.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let fe=0;fe<x.mipmaps.length;fe++)O.__webglFramebuffer[he][fe]=i.createFramebuffer()}else O.__webglFramebuffer[he]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)O.__webglFramebuffer[he]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ce)for(let he=0,fe=Z.length;he<fe;he++){const qe=n.get(Z[he]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Be(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<Z.length;he++){const fe=Z[he];O.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const qe=r.convert(fe.format,fe.colorSpace),oe=r.convert(fe.type),be=E(fe.internalFormat,qe,oe,fe.colorSpace,b.isXRRenderTarget===!0),ve=ke(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,be,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,O.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),G(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)D(O.__webglFramebuffer[he][fe],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else D(O.__webglFramebuffer[he],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);h(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let he=0,fe=Z.length;he<fe;he++){const qe=Z[he],oe=n.get(qe);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),Ce(i.TEXTURE_2D,qe),D(O.__webglFramebuffer,b,qe,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),h(qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),Ce(he,x),x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)D(O.__webglFramebuffer[fe],b,x,i.COLOR_ATTACHMENT0,he,fe);else D(O.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,he,0);h(x)&&p(he),t.unbindTexture()}b.depthBuffer&&ae(b)}function ge(b){const x=b.textures;for(let O=0,q=x.length;O<q;O++){const Z=x[O];if(h(Z)){const $=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(Z).__webglTexture;t.bindTexture($,ce),p($),t.unbindTexture()}}}const ue=[],w=[];function Ve(b){if(b.samples>0){if(Be(b)===!1){const x=b.textures,O=b.width,q=b.height;let Z=i.COLOR_BUFFER_BIT;const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(b),he=x.length>1;if(he)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[fe]);const qe=n.get(x[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,Z,i.NEAREST),c===!0&&(ue.length=0,w.length=0,ue.push(i.COLOR_ATTACHMENT0+fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ue.push($),w.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ce.__webglColorRenderbuffer[fe]);const qe=n.get(x[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ke(b){return Math.min(s.maxSamples,b.samples)}function Be(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(b){const x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function Ge(b,x){const O=b.colorSpace,q=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==en&&O!==ji&&(ht.getTransfer(O)===pt?(q!==gi||Z!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function _e(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=S,this.setTexture2D=Y,this.setTexture2DArray=ie,this.setTexture3D=H,this.setTextureCube=re,this.rebindTextures=ne,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=D,this.useMultisampledRTT=Be}function jm(i,e){function t(n,s=ji){let r;const a=ht.getTransfer(s);if(n===Bi)return i.UNSIGNED_BYTE;if(n===To)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===bo)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===Ui)return i.FLOAT;if(n===Oi)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===ql)return i.RGB;if(n===gi)return i.RGBA;if(n===$l)return i.LUMINANCE;if(n===jl)return i.LUMINANCE_ALPHA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===Zn)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===Jl)return i.RG;if(n===wo)return i.RG_INTEGER;if(n===Do)return i.RGBA_INTEGER;if(n===vr||n===xr||n===Mr||n===Sr)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Va||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===Ya||n===qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===Ya)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qa)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$a||n===ja||n===Za||n===Ja||n===Qa||n===eo||n===to||n===io||n===no||n===so||n===ro||n===ao||n===oo||n===co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===no)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===lo||n===uo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yr)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===ho||n===fo||n===po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Zm extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _i extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const h=t.getJointPose(_,n),p=this._getHandJoint(l,_);h!==null&&(p.matrix.fromArray(h.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=h.radius),p.visible=h!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e2=`
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

}`;class t2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mt({vertexShader:Qm,fragmentShader:e2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i2 extends yn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,g=null;const _=new t2,h=t.getContextAttributes();let p=null,E=null;const M=[],T=[],L=new He;let P=null;const A=new ni;A.layers.enable(1),A.viewport=new Mt;const F=new ni;F.layers.enable(2),F.viewport=new Mt;const Q=[A,F],v=new Zm;v.layers.enable(1),v.layers.enable(2);let S=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let D=M[C];return D===void 0&&(D=new Sa,M[C]=D),D.getTargetRaySpace()},this.getControllerGrip=function(C){let D=M[C];return D===void 0&&(D=new Sa,M[C]=D),D.getGripSpace()},this.getHand=function(C){let D=M[C];return D===void 0&&(D=new Sa,M[C]=D),D.getHandSpace()};function K(C){const D=T.indexOf(C.inputSource);if(D===-1)return;const G=M[D];G!==void 0&&(G.update(C.inputSource,C.frame,l||a),G.dispatchEvent({type:C.type,data:C.inputSource}))}function Y(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ie);for(let C=0;C<M.length;C++){const D=T[C];D!==null&&(T[C]=null,M[C].disconnect(D))}S=null,X=null,_.reset(),e.setRenderTarget(p),m=null,d=null,f=null,s=null,E=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){o=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ie),h.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const D={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,D),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new vi(m.framebufferWidth,m.framebufferHeight,{format:gi,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let D=null,G=null,ee=null;h.depth&&(ee=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=h.stencil?Zn:Wn,G=h.stencil?jn:xn);const ae={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new vi(d.textureWidth,d.textureHeight,{format:gi,type:Bi,depthTexture:new pu(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(C){for(let D=0;D<C.removed.length;D++){const G=C.removed[D],ee=T.indexOf(G);ee>=0&&(T[ee]=null,M[ee].disconnect(G))}for(let D=0;D<C.added.length;D++){const G=C.added[D];let ee=T.indexOf(G);if(ee===-1){for(let ne=0;ne<M.length;ne++)if(ne>=T.length){T.push(G),ee=ne;break}else if(T[ne]===null){T[ne]=G,ee=ne;break}if(ee===-1)break}const ae=M[ee];ae&&ae.connect(G)}}const H=new R,re=new R;function W(C,D,G){H.setFromMatrixPosition(D.matrixWorld),re.setFromMatrixPosition(G.matrixWorld);const ee=H.distanceTo(re),ae=D.projectionMatrix.elements,ne=G.projectionMatrix.elements,te=ae[14]/(ae[10]-1),ge=ae[14]/(ae[10]+1),ue=(ae[9]+1)/ae[5],w=(ae[9]-1)/ae[5],Ve=(ae[8]-1)/ae[0],ke=(ne[8]+1)/ne[0],Be=te*Ve,me=te*ke,Ge=ee/(-Ve+ke),_e=Ge*-Ve;if(D.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(_e),C.translateZ(Ge),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),ae[10]===-1)C.projectionMatrix.copy(D.projectionMatrix),C.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const b=te+Ge,x=ge+Ge,O=Be-_e,q=me+(ee-_e),Z=ue*ge/x*b,$=w*ge/x*b;C.projectionMatrix.makePerspective(O,q,Z,$,b,x),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function pe(C,D){D===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(D.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;let D=C.near,G=C.far;_.texture!==null&&(_.depthNear>0&&(D=_.depthNear),_.depthFar>0&&(G=_.depthFar)),v.near=F.near=A.near=D,v.far=F.far=A.far=G,(S!==v.near||X!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,X=v.far);const ee=C.parent,ae=v.cameras;pe(v,ee);for(let ne=0;ne<ae.length;ne++)pe(ae[ne],ee);ae.length===2?W(v,A,F):v.projectionMatrix.copy(A.projectionMatrix),de(C,v,ee)};function de(C,D,G){G===null?C.matrix.copy(D.matrixWorld):(C.matrix.copy(G.matrixWorld),C.matrix.invert(),C.matrix.multiply(D.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(D.projectionMatrix),C.projectionMatrixInverse.copy(D.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=ws*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(C){c=C,d!==null&&(d.fixedFoveation=C),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=C)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Ce=null;function at(C,D){if(u=D.getViewerPose(l||a),g=D,u!==null){const G=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ee=!1;G.length!==v.cameras.length&&(v.cameras.length=0,ee=!0);for(let ne=0;ne<G.length;ne++){const te=G[ne];let ge=null;if(m!==null)ge=m.getViewport(te);else{const w=f.getViewSubImage(d,te);ge=w.viewport,ne===0&&(e.setRenderTargetTextures(E,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(E))}let ue=Q[ne];ue===void 0&&(ue=new ni,ue.layers.enable(ne),ue.viewport=new Mt,Q[ne]=ue),ue.matrix.fromArray(te.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(te.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(ge.x,ge.y,ge.width,ge.height),ne===0&&(v.matrix.copy(ue.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ee===!0&&v.cameras.push(ue)}const ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const ne=f.getDepthInformation(G[0]);ne&&ne.isValid&&ne.texture&&_.init(e,ne,s.renderState)}}for(let G=0;G<M.length;G++){const ee=T[G],ae=M[G];ee!==null&&ae!==void 0&&ae.update(ee,D,l||a)}Ce&&Ce(C,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}const st=new du;st.setAnimationLoop(at),this.setAnimationLoop=function(C){Ce=C},this.dispose=function(){}}}const ln=new zi,n2=new vt;function s2(i,e){function t(h,p){h.matrixAutoUpdate===!0&&h.updateMatrix(),p.value.copy(h.matrix)}function n(h,p){p.color.getRGB(h.fogColor.value,cu(i)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function s(h,p,E,M,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),f(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&m(h,p,T)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),_(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(a(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?c(h,p,E,M):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map,t(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.bumpMap&&(h.bumpMap.value=p.bumpMap,t(p.bumpMap,h.bumpMapTransform),h.bumpScale.value=p.bumpScale,p.side===Wt&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,t(p.normalMap,h.normalMapTransform),h.normalScale.value.copy(p.normalScale),p.side===Wt&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,t(p.displacementMap,h.displacementMapTransform),h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,h.emissiveMapTransform)),p.specularMap&&(h.specularMap.value=p.specularMap,t(p.specularMap,h.specularMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const E=e.get(p),M=E.envMap,T=E.envMapRotation;M&&(h.envMap.value=M,ln.copy(T),ln.x*=-1,ln.y*=-1,ln.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ln.y*=-1,ln.z*=-1),h.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(ln)),h.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap&&(h.lightMap.value=p.lightMap,h.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,h.lightMapTransform)),p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,h.aoMapTransform))}function a(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,p.map&&(h.map.value=p.map,t(p.map,h.mapTransform))}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function c(h,p,E,M){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*E,h.scale.value=M*.5,p.map&&(h.map.value=p.map,t(p.map,h.uvTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map,t(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function f(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.metalness.value=p.metalness,p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,h.metalnessMapTransform)),h.roughness.value=p.roughness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,h.roughnessMapTransform)),p.envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function m(h,p,E){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,h.sheenColorMapTransform)),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,h.sheenRoughnessMapTransform))),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,h.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(h.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&h.clearcoatNormalScale.value.negate())),p.dispersion>0&&(h.dispersion.value=p.dispersion),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,h.iridescenceMapTransform)),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,h.transmissionMapTransform)),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(h.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(h.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,h.specularColorMapTransform)),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){const E=e.get(p).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r2(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const T=M.program;n.uniformBlockBinding(E,T)}function l(E,M){let T=s[E.id];T===void 0&&(g(E),T=u(E),s[E.id]=T,E.addEventListener("dispose",h));const L=M.program;n.updateUBOMapping(E,L);const P=e.render.frame;r[E.id]!==P&&(d(E),r[E.id]=P)}function u(E){const M=f();E.__bindingPointIndex=M;const T=i.createBuffer(),L=E.__size,P=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=s[E.id],T=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,A=T.length;P<A;P++){const F=Array.isArray(T[P])?T[P]:[T[P]];for(let Q=0,v=F.length;Q<v;Q++){const S=F[Q];if(m(S,P,Q,L)===!0){const X=S.__offset,K=Array.isArray(S.value)?S.value:[S.value];let Y=0;for(let ie=0;ie<K.length;ie++){const H=K[ie],re=_(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,X+Y,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,Y),Y+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,M,T,L){const P=E.value,A=M+"_"+T;if(L[A]===void 0)return typeof P=="number"||typeof P=="boolean"?L[A]=P:L[A]=P.clone(),!0;{const F=L[A];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return L[A]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(E){const M=E.uniforms;let T=0;const L=16;for(let A=0,F=M.length;A<F;A++){const Q=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,S=Q.length;v<S;v++){const X=Q[v],K=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,ie=K.length;Y<ie;Y++){const H=K[Y],re=_(H),W=T%L,pe=W%re.boundary,de=W+pe;T+=pe,de!==0&&L-de<re.storage&&(T+=L-de),X.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=re.storage}}}const P=T%L;return P>0&&(T+=L-P),E.__size=T,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function h(E){const M=E.target;M.removeEventListener("dispose",h);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class a2{constructor(e={}){const{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,h=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=Zi,this.toneMappingExposure=1;const M=this;let T=!1,L=0,P=0,A=null,F=-1,Q=null;const v=new Mt,S=new Mt;let X=null;const K=new it(0);let Y=0,ie=t.width,H=t.height,re=1,W=null,pe=null;const de=new Mt(0,0,ie,H),Ce=new Mt(0,0,ie,H);let at=!1;const st=new hu;let C=!1,D=!1;const G=new vt,ee=new vt,ae=new R,ne=new Mt,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function ue(){return A===null?re:1}let w=n;function Ve(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eo}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Le,!1),w===null){const U="webgl2";if(w=Ve(U,y),w===null)throw Ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ke,Be,me,Ge,_e,b,x,O,q,Z,$,ce,he,fe,qe,oe,be,ve,Me,we,Xe,We,ct,I;function De(){ke=new h0(w),ke.init(),We=new jm(w,ke),Be=new r0(w,ke,e,We),me=new Ym(w),Be.reverseDepthBuffer&&me.buffers.depth.setReversed(!0),Ge=new p0(w),_e=new Lm,b=new $m(w,ke,me,_e,Be,We,Ge),x=new o0(M),O=new u0(M),q=new Sf(w),ct=new n0(w,q),Z=new d0(w,q,Ge,ct),$=new g0(w,Z,q,Ge),Me=new m0(w,Be,b),oe=new a0(_e),ce=new Cm(M,x,O,ke,Be,ct,oe),he=new s2(M,_e),fe=new Um,qe=new km(ke),ve=new i0(M,x,O,me,$,d,c),be=new Xm(M,$,Be),I=new r2(w,Ge,Be,me),we=new s0(w,ke,Ge),Xe=new f0(w,ke,Ge),Ge.programs=ce.programs,M.capabilities=Be,M.extensions=ke,M.properties=_e,M.renderLists=fe,M.shadowMap=be,M.state=me,M.info=Ge}De();const j=new i2(M,w);this.xr=j,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=ke.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ke.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(y){y!==void 0&&(re=y,this.setSize(ie,H,!1))},this.getSize=function(y){return y.set(ie,H)},this.setSize=function(y,U,B=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=y,H=U,t.width=Math.floor(y*re),t.height=Math.floor(U*re),B===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(ie*re,H*re).floor()},this.setDrawingBufferSize=function(y,U,B){ie=y,H=U,re=B,t.width=Math.floor(y*B),t.height=Math.floor(U*B),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(v)},this.getViewport=function(y){return y.copy(de)},this.setViewport=function(y,U,B,k){y.isVector4?de.set(y.x,y.y,y.z,y.w):de.set(y,U,B,k),me.viewport(v.copy(de).multiplyScalar(re).round())},this.getScissor=function(y){return y.copy(Ce)},this.setScissor=function(y,U,B,k){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,U,B,k),me.scissor(S.copy(Ce).multiplyScalar(re).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(y){me.setScissorTest(at=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(y=!0,U=!0,B=!0){let k=0;if(y){let N=!1;if(A!==null){const le=A.texture.format;N=le===Do||le===wo||le===Po}if(N){const le=A.texture.type,xe=le===Bi||le===xn||le===Ps||le===jn||le===To||le===Ao,Pe=ve.getClearColor(),Ie=ve.getClearAlpha(),Oe=Pe.r,ze=Pe.g,Ue=Pe.b;xe?(m[0]=Oe,m[1]=ze,m[2]=Ue,m[3]=Ie,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=Oe,g[1]=ze,g[2]=Ue,g[3]=Ie,w.clearBufferiv(w.COLOR,0,g))}else k|=w.COLOR_BUFFER_BIT}U&&(k|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(k|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),fe.dispose(),qe.dispose(),_e.dispose(),x.dispose(),O.dispose(),$.dispose(),ct.dispose(),I.dispose(),ce.dispose(),j.dispose(),j.removeEventListener("sessionstart",cs),j.removeEventListener("sessionend",Us),xi.stop()};function se(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=Ge.autoReset,U=be.enabled,B=be.autoUpdate,k=be.needsUpdate,N=be.type;De(),Ge.autoReset=y,be.enabled=U,be.autoUpdate=B,be.needsUpdate=k,be.type=N}function Le(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function rt(y){const U=y.target;U.removeEventListener("dispose",rt),gt(U)}function gt(y){Rt(y),_e.remove(y)}function Rt(y){const U=_e.get(y).programs;U!==void 0&&(U.forEach(function(B){ce.releaseProgram(B)}),y.isShaderMaterial&&ce.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,B,k,N,le){U===null&&(U=te);const xe=N.isMesh&&N.matrixWorld.determinant()<0,Pe=Et(y,U,B,k,N);me.setMaterial(k,xe);let Ie=B.index,Oe=1;if(k.wireframe===!0){if(Ie=Z.getWireframeAttribute(B),Ie===void 0)return;Oe=2}const ze=B.drawRange,Ue=B.attributes.position;let Qe=ze.start*Oe,ot=(ze.start+ze.count)*Oe;le!==null&&(Qe=Math.max(Qe,le.start*Oe),ot=Math.min(ot,(le.start+le.count)*Oe)),Ie!==null?(Qe=Math.max(Qe,0),ot=Math.min(ot,Ie.count)):Ue!=null&&(Qe=Math.max(Qe,0),ot=Math.min(ot,Ue.count));const ut=ot-Qe;if(ut<0||ut===1/0)return;ct.setup(N,k,Pe,B,Ie);let _t,tt=we;if(Ie!==null&&(_t=q.get(Ie),tt=Xe,tt.setIndex(_t)),N.isMesh)k.wireframe===!0?(me.setLineWidth(k.wireframeLinewidth*ue()),tt.setMode(w.LINES)):tt.setMode(w.TRIANGLES);else if(N.isLine){let Ee=k.linewidth;Ee===void 0&&(Ee=1),me.setLineWidth(Ee*ue()),N.isLineSegments?tt.setMode(w.LINES):N.isLineLoop?tt.setMode(w.LINE_LOOP):tt.setMode(w.LINE_STRIP)}else N.isPoints?tt.setMode(w.POINTS):N.isSprite&&tt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ee=N._multiDrawStarts,je=N._multiDrawCounts,Ke=N._multiDrawCount,Lt=Ie?q.get(Ie).bytesPerElement:1,$t=_e.get(k).currentProgram.getUniforms();for(let Pt=0;Pt<Ke;Pt++)$t.setValue(w,"_gl_DrawID",Pt),tt.render(Ee[Pt]/Lt,je[Pt])}else if(N.isInstancedMesh)tt.renderInstances(Qe,ut,N.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,je=Math.min(B.instanceCount,Ee);tt.renderInstances(Qe,ut,je)}else tt.render(Qe,ut)};function lt(y,U,B){y.transparent===!0&&y.side===pi&&y.forceSinglePass===!1?(y.side=Wt,y.needsUpdate=!0,Ae(y,U,B),y.side=Qi,y.needsUpdate=!0,Ae(y,U,B),y.side=pi):Ae(y,U,B)}this.compile=function(y,U,B=null){B===null&&(B=y),h=qe.get(B),h.init(U),E.push(h),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),y!==B&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const k=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const Pe=le[xe];lt(Pe,B,N),k.add(Pe)}else lt(le,B,N),k.add(le)}),E.pop(),h=null,k},this.compileAsync=function(y,U,B=null){const k=this.compile(y,U,B);return new Promise(N=>{function le(){if(k.forEach(function(xe){_e.get(xe).currentProgram.isReady()&&k.delete(xe)}),k.size===0){N(y);return}setTimeout(le,10)}ke.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ct=null;function oi(y){Ct&&Ct(y)}function cs(){xi.stop()}function Us(){xi.start()}const xi=new du;xi.setAnimationLoop(oi),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(y){Ct=y,j.setAnimationLoop(y),y===null?xi.stop():xi.start()},j.addEventListener("sessionstart",cs),j.addEventListener("sessionend",Us),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,U,A),h=qe.get(y,E.length),h.init(U),E.push(h),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),st.setFromProjectionMatrix(ee),D=this.localClippingEnabled,C=oe.init(this.clippingPlanes,D),_=fe.get(y,p.length),_.init(),p.push(_),j.enabled===!0&&j.isPresenting===!0){const le=M.xr.getDepthSensingMesh();le!==null&&ls(le,U,-1/0,M.sortObjects)}ls(y,U,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(W,pe),ge=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ge&&ve.addToRenderList(_,y),this.info.render.frame++,C===!0&&oe.beginShadows();const B=h.state.shadowsArray;be.render(B,y,U),C===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,N=_.transmissive;if(h.setupLights(),U.isArrayCamera){const le=U.cameras;if(N.length>0)for(let xe=0,Pe=le.length;xe<Pe;xe++){const Ie=le[xe];Fs(k,N,y,Ie)}ge&&ve.render(y);for(let xe=0,Pe=le.length;xe<Pe;xe++){const Ie=le[xe];Ns(_,y,Ie,Ie.viewport)}}else N.length>0&&Fs(k,N,y,U),ge&&ve.render(y),Ns(_,y,U);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(M,y,U),ct.resetDefaultState(),F=-1,Q=null,E.pop(),E.length>0?(h=E[E.length-1],C===!0&&oe.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ls(y,U,B,k){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||st.intersectsSprite(y)){k&&ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);const xe=$.update(y),Pe=y.material;Pe.visible&&_.push(y,xe,Pe,B,ne.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||st.intersectsObject(y))){const xe=$.update(y),Pe=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ne.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ne.copy(xe.boundingSphere.center)),ne.applyMatrix4(y.matrixWorld).applyMatrix4(ee)),Array.isArray(Pe)){const Ie=xe.groups;for(let Oe=0,ze=Ie.length;Oe<ze;Oe++){const Ue=Ie[Oe],Qe=Pe[Ue.materialIndex];Qe&&Qe.visible&&_.push(y,xe,Qe,B,ne.z,Ue)}}else Pe.visible&&_.push(y,xe,Pe,B,ne.z,null)}}const le=y.children;for(let xe=0,Pe=le.length;xe<Pe;xe++)ls(le[xe],U,B,k)}function Ns(y,U,B,k){const N=y.opaque,le=y.transmissive,xe=y.transparent;h.setupLightsView(B),C===!0&&oe.setGlobalState(M.clippingPlanes,B),k&&me.viewport(v.copy(k)),N.length>0&&z(N,U,B),le.length>0&&z(le,U,B),xe.length>0&&z(xe,U,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Fs(y,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new vi(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Oi:Bi,minFilter:gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const le=h.state.transmissionRenderTarget[k.id],xe=k.viewport||v;le.setSize(xe.z,xe.w);const Pe=M.getRenderTarget();M.setRenderTarget(le),M.getClearColor(K),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),ge&&ve.render(B);const Ie=M.toneMapping;M.toneMapping=Zi;const Oe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),C===!0&&oe.setGlobalState(M.clippingPlanes,k),z(y,B,k),b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ue=0,Qe=U.length;Ue<Qe;Ue++){const ot=U[Ue],ut=ot.object,_t=ot.geometry,tt=ot.material,Ee=ot.group;if(tt.side===pi&&ut.layers.test(k.layers)){const je=tt.side;tt.side=Wt,tt.needsUpdate=!0,V(ut,B,k,_t,tt,Ee),tt.side=je,tt.needsUpdate=!0,ze=!0}}ze===!0&&(b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le))}M.setRenderTarget(Pe),M.setClearColor(K,Y),Oe!==void 0&&(k.viewport=Oe),M.toneMapping=Ie}function z(y,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,le=y.length;N<le;N++){const xe=y[N],Pe=xe.object,Ie=xe.geometry,Oe=k===null?xe.material:k,ze=xe.group;Pe.layers.test(B.layers)&&V(Pe,U,B,Ie,Oe,ze)}}function V(y,U,B,k,N,le){y.onBeforeRender(M,U,B,k,N,le),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(M,U,B,k,y,le),N.transparent===!0&&N.side===pi&&N.forceSinglePass===!1?(N.side=Wt,N.needsUpdate=!0,M.renderBufferDirect(B,U,k,N,y,le),N.side=Qi,N.needsUpdate=!0,M.renderBufferDirect(B,U,k,N,y,le),N.side=pi):M.renderBufferDirect(B,U,k,N,y,le),y.onAfterRender(M,U,B,k,N,le)}function Ae(y,U,B){U.isScene!==!0&&(U=te);const k=_e.get(y),N=h.state.lights,le=h.state.shadowsArray,xe=N.state.version,Pe=ce.getParameters(y,N.state,le,U,B),Ie=ce.getProgramCacheKey(Pe);let Oe=k.programs;k.environment=y.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(y.isMeshStandardMaterial?O:x).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Oe===void 0&&(y.addEventListener("dispose",rt),Oe=new Map,k.programs=Oe);let ze=Oe.get(Ie);if(ze!==void 0){if(k.currentProgram===ze&&k.lightsStateVersion===xe)return ft(y,Pe),ze}else Pe.uniforms=ce.getUniforms(y),y.onBeforeCompile(Pe,M),ze=ce.acquireProgram(Pe,Ie),Oe.set(Ie,ze),k.uniforms=Pe.uniforms;const Ue=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=oe.uniform),ft(y,Pe),k.needsLights=ci(y),k.lightsStateVersion=xe,k.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=ze,k.uniformsList=null,ze}function Fe(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=br.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function ft(y,U){const B=_e.get(y);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Et(y,U,B,k,N){U.isScene!==!0&&(U=te),b.resetTextureUnits();const le=U.fog,xe=k.isMeshStandardMaterial?U.environment:null,Pe=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:en,Ie=(k.isMeshStandardMaterial?O:x).get(k.envMap||xe),Oe=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ze=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ue=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color;let ut=Zi;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ut=M.toneMapping);const _t=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,tt=_t!==void 0?_t.length:0,Ee=_e.get(k),je=h.state.lights;if(C===!0&&(D===!0||y!==Q)){const ei=y===Q&&k.id===F;oe.setState(k,y,ei)}let Ke=!1;k.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==je.state.version||Ee.outputColorSpace!==Pe||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==Ie||k.fog===!0&&Ee.fog!==le||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==oe.numPlanes||Ee.numIntersection!==oe.numIntersection)||Ee.vertexAlphas!==Oe||Ee.vertexTangents!==ze||Ee.morphTargets!==Ue||Ee.morphNormals!==Qe||Ee.morphColors!==ot||Ee.toneMapping!==ut||Ee.morphTargetsCount!==tt)&&(Ke=!0):(Ke=!0,Ee.__version=k.version);let Lt=Ee.currentProgram;Ke===!0&&(Lt=Ae(k,U,N));let $t=!1,Pt=!1,tn=!1;const et=Lt.getUniforms(),Mi=Ee.uniforms;if(me.useProgram(Lt.program)&&($t=!0,Pt=!0,tn=!0),k.id!==F&&(F=k.id,Pt=!0),$t||Q!==y){Be.reverseDepthBuffer?(G.copy(y.projectionMatrix),$d(G),jd(G),et.setValue(w,"projectionMatrix",G)):et.setValue(w,"projectionMatrix",y.projectionMatrix),et.setValue(w,"viewMatrix",y.matrixWorldInverse);const ei=et.map.cameraPosition;ei!==void 0&&ei.setValue(w,ae.setFromMatrixPosition(y.matrixWorld)),Be.logarithmicDepthBuffer&&et.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&et.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Pt=!0,tn=!0)}if(N.isSkinnedMesh){et.setOptional(w,N,"bindMatrix"),et.setOptional(w,N,"bindMatrixInverse");const ei=N.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),et.setValue(w,"boneTexture",ei.boneTexture,b))}N.isBatchedMesh&&(et.setOptional(w,N,"batchingTexture"),et.setValue(w,"batchingTexture",N._matricesTexture,b),et.setOptional(w,N,"batchingIdTexture"),et.setValue(w,"batchingIdTexture",N._indirectTexture,b),et.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&et.setValue(w,"batchingColorTexture",N._colorsTexture,b));const Gr=B.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0)&&Me.update(N,B,Lt),(Pt||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,et.setValue(w,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Mi.envMap.value=Ie,Mi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Mi.envMapIntensity.value=U.environmentIntensity),Pt&&(et.setValue(w,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&Ft(Mi,tn),le&&k.fog===!0&&he.refreshFogUniforms(Mi,le),he.refreshMaterialUniforms(Mi,k,re,H,h.state.transmissionRenderTarget[y.id]),br.upload(w,Fe(Ee),Mi,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(br.upload(w,Fe(Ee),Mi,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&et.setValue(w,"center",N.center),et.setValue(w,"modelViewMatrix",N.modelViewMatrix),et.setValue(w,"normalMatrix",N.normalMatrix),et.setValue(w,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const ei=k.uniformsGroups;for(let Vr=0,Nu=ei.length;Vr<Nu;Vr++){const zo=ei[Vr];I.update(zo,Lt),I.bind(zo,Lt)}}return Lt}function Ft(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function ci(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,U,B){_e.get(y.texture).__webglTexture=U,_e.get(y.depthTexture).__webglTexture=B;const k=_e.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const B=_e.get(y);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,B=0){A=y,L=U,P=B;let k=!0,N=null,le=!1,xe=!1;if(y){const Ie=_e.get(y);if(Ie.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(w.FRAMEBUFFER,null),k=!1;else if(Ie.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(Ie.__hasExternalTextures)b.rebindTextures(y,_e.get(y.texture).__webglTexture,_e.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ue=y.depthTexture;if(Ie.__boundDepthTexture!==Ue){if(Ue!==null&&_e.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const ze=_e.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?N=ze[U][B]:N=ze[U],le=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?N=_e.get(y).__webglMultisampledFramebuffer:Array.isArray(ze)?N=ze[B]:N=ze,v.copy(y.viewport),S.copy(y.scissor),X=y.scissorTest}else v.copy(de).multiplyScalar(re).floor(),S.copy(Ce).multiplyScalar(re).floor(),X=at;if(me.bindFramebuffer(w.FRAMEBUFFER,N)&&k&&me.drawBuffers(y,N),me.viewport(v),me.scissor(S),me.setScissorTest(X),le){const Ie=_e.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ie.__webglTexture,B)}else if(xe){const Ie=_e.get(y.texture),Oe=U||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ie.__webglTexture,B||0,Oe)}F=-1},this.readRenderTargetPixels=function(y,U,B,k,N,le,xe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){me.bindFramebuffer(w.FRAMEBUFFER,Pe);try{const Ie=y.texture,Oe=Ie.format,ze=Ie.type;if(!Be.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-k&&B>=0&&B<=y.height-N&&w.readPixels(U,B,k,N,We.convert(Oe),We.convert(ze),le)}finally{const Ie=A!==null?_e.get(A).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(y,U,B,k,N,le,xe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){const Ie=y.texture,Oe=Ie.format,ze=Ie.type;if(!Be.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-k&&B>=0&&B<=y.height-N){me.bindFramebuffer(w.FRAMEBUFFER,Pe);const Ue=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ue),w.bufferData(w.PIXEL_PACK_BUFFER,le.byteLength,w.STREAM_READ),w.readPixels(U,B,k,N,We.convert(Oe),We.convert(ze),0);const Qe=A!==null?_e.get(A).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,Qe);const ot=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await qd(w,ot,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ue),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,le),w.deleteBuffer(Ue),w.deleteSync(ot),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,B=0){y.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(y.image.width*k),le=Math.floor(y.image.height*k),xe=U!==null?U.x:0,Pe=U!==null?U.y:0;b.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,xe,Pe,N,le),me.unbindTexture()},this.copyTextureToTexture=function(y,U,B=null,k=null,N=0){y.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let le,xe,Pe,Ie,Oe,ze;B!==null?(le=B.max.x-B.min.x,xe=B.max.y-B.min.y,Pe=B.min.x,Ie=B.min.y):(le=y.image.width,xe=y.image.height,Pe=0,Ie=0),k!==null?(Oe=k.x,ze=k.y):(Oe=0,ze=0);const Ue=We.convert(U.format),Qe=We.convert(U.type);b.setTexture2D(U,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const ot=w.getParameter(w.UNPACK_ROW_LENGTH),ut=w.getParameter(w.UNPACK_IMAGE_HEIGHT),_t=w.getParameter(w.UNPACK_SKIP_PIXELS),tt=w.getParameter(w.UNPACK_SKIP_ROWS),Ee=w.getParameter(w.UNPACK_SKIP_IMAGES),je=y.isCompressedTexture?y.mipmaps[N]:y.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,je.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,je.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Pe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ie),y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,N,Oe,ze,le,xe,Ue,Qe,je.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,N,Oe,ze,je.width,je.height,Ue,je.data):w.texSubImage2D(w.TEXTURE_2D,N,Oe,ze,le,xe,Ue,Qe,je),w.pixelStorei(w.UNPACK_ROW_LENGTH,ot),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ut),w.pixelStorei(w.UNPACK_SKIP_PIXELS,_t),w.pixelStorei(w.UNPACK_SKIP_ROWS,tt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ee),N===0&&U.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(y,U,B=null,k=null,N=0){y.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,y=arguments[2],U=arguments[3],N=arguments[4]||0);let le,xe,Pe,Ie,Oe,ze,Ue,Qe,ot;const ut=y.isCompressedTexture?y.mipmaps[N]:y.image;B!==null?(le=B.max.x-B.min.x,xe=B.max.y-B.min.y,Pe=B.max.z-B.min.z,Ie=B.min.x,Oe=B.min.y,ze=B.min.z):(le=ut.width,xe=ut.height,Pe=ut.depth,Ie=0,Oe=0,ze=0),k!==null?(Ue=k.x,Qe=k.y,ot=k.z):(Ue=0,Qe=0,ot=0);const _t=We.convert(U.format),tt=We.convert(U.type);let Ee;if(U.isData3DTexture)b.setTexture3D(U,0),Ee=w.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)b.setTexture2DArray(U,0),Ee=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const je=w.getParameter(w.UNPACK_ROW_LENGTH),Ke=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Lt=w.getParameter(w.UNPACK_SKIP_PIXELS),$t=w.getParameter(w.UNPACK_SKIP_ROWS),Pt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ut.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ut.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ie),w.pixelStorei(w.UNPACK_SKIP_ROWS,Oe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ze),y.isDataTexture||y.isData3DTexture?w.texSubImage3D(Ee,N,Ue,Qe,ot,le,xe,Pe,_t,tt,ut.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(Ee,N,Ue,Qe,ot,le,xe,Pe,_t,ut.data):w.texSubImage3D(Ee,N,Ue,Qe,ot,le,xe,Pe,_t,tt,ut),w.pixelStorei(w.UNPACK_ROW_LENGTH,je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ke),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Lt),w.pixelStorei(w.UNPACK_SKIP_ROWS,$t),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Pt),N===0&&U.generateMipmaps&&w.generateMipmap(Ee),me.unbindTexture()},this.initRenderTarget=function(y){_e.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),me.unbindTexture()},this.resetState=function(){L=0,P=0,A=null,me.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ro?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Or?"display-p3":"srgb"}}class o2 extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kr extends ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rr=new R,Cr=new R,jc=new vt,vs=new Br,or=new Ls,ya=new R,Zc=new R;class Lr extends Kt{constructor(e=new xt,t=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rr.fromBufferAttribute(t,s-1),Cr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rr.distanceTo(Cr);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),or.radius+=r,e.ray.intersectsSphere(or)===!1)return;jc.copy(s).invert(),vs.copy(e.ray).applyMatrix4(jc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=m,h=g-1;_<h;_+=l){const p=u.getX(_),E=u.getX(_+1),M=cr(this,e,vs,c,p,E);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),h=u.getX(m),p=cr(this,e,vs,c,_,h);p&&t.push(p)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=m,h=g-1;_<h;_+=l){const p=cr(this,e,vs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=cr(this,e,vs,c,g-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cr(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Rr.fromBufferAttribute(a,s),Cr.fromBufferAttribute(a,r),t.distanceSqToSegment(Rr,Cr,ya,Zc)>n)return;ya.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ya);if(!(c<e.near||c>e.far))return{distance:c,point:Zc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Jc=new R,Qc=new R;class Cs extends Lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Jc.fromBufferAttribute(t,s),Qc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jc.distanceTo(Qc);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class c2 extends Lr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class l2 extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const el=new vt,go=new Br,lr=new Ls,ur=new R;class Hr extends Kt{constructor(e=new xt,t=new l2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,e.ray.intersectsSphere(lr)===!1)return;el.copy(s).invert(),go.copy(e.ray).applyMatrix4(el);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const h=l.getX(g);ur.fromBufferAttribute(f,h),tl(ur,h,c,s,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=d,_=m;g<_;g++)ur.fromBufferAttribute(f,g),tl(ur,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tl(i,e,t,n,s,r,a){const o=go.distanceSqToPoint(i);if(o<t){const c=new R;go.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}const hr=new R,dr=new R,Ea=new R,fr=new si;class u2 extends xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Xn*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:h,c:p}=fr;if(_.fromBufferAttribute(o,l[0]),h.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),fr.getNormal(Ea),f[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,f[1]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const M=(E+1)%3,T=f[E],L=f[M],P=fr[u[E]],A=fr[u[M]],F=`${T}_${L}`,Q=`${L}_${T}`;Q in d&&d[Q]?(Ea.dot(d[Q].normal)<=r&&(m.push(P.x,P.y,P.z),m.push(A.x,A.y,A.z)),d[Q]=null):F in d||(d[F]={index0:l[E],index1:l[M],normal:Ea.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:h}=d[g];hr.fromBufferAttribute(o,_),dr.fromBufferAttribute(o,h),m.push(hr.x,hr.y,hr.z),m.push(dr.x,dr.y,dr.z)}this.setAttribute("position",new nt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Io extends xt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let f=e;const d=(t-e)/s,m=new R,g=new He;for(let _=0;_<=s;_++){for(let h=0;h<=n;h++){const p=r+h/n*a;m.x=f*Math.cos(p),m.y=f*Math.sin(p),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}f+=d}for(let _=0;_<s;_++){const h=_*(n+1);for(let p=0;p<n;p++){const E=p+h,M=E,T=E+n+1,L=E+n+2,P=E+1;o.push(M,T,P),o.push(T,L,P)}}this.setIndex(o),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qn extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new R,d=new R,m=[],g=[],_=[],h=[];for(let p=0;p<=n;p++){const E=[],M=p/n;let T=0;p===0&&a===0?T=.5/t:p===n&&c===Math.PI&&(T=-.5/t);for(let L=0;L<=t;L++){const P=L/t;f.x=-e*Math.cos(s+P*r)*Math.sin(a+M*o),f.y=e*Math.cos(a+M*o),f.z=e*Math.sin(s+P*r)*Math.sin(a+M*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),h.push(P+T,1-M),E.push(l++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const M=u[p][E+1],T=u[p][E],L=u[p+1][E],P=u[p+1][E+1];(p!==0||a>0)&&m.push(M,T,P),(p!==n-1||c<Math.PI)&&m.push(T,L,P)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class h2 extends mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const il={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class d2{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const f2=new d2;class Uo{constructor(e){this.manager=e!==void 0?e:f2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";class p2 extends Uo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=il.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ds("img");function c(){u(),il.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class m2 extends Uo{constructor(e){super(e)}load(e,t,n,s){const r=new Xt,a=new p2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class g2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nl(){return performance.now()}class sl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _2 extends yn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);const rl={type:"change"},No={type:"start"},xu={type:"end"},pr=new Br,al=new $i,v2=Math.cos(70*Ts.DEG2RAD),bt=new R,Yt=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ba=1e-6;class x2 extends _2{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vn.ROTATE,MIDDLE:vn.DOLLY,RIGHT:vn.PAN},this.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Mn,this._lastTargetPosition=new R,this._quat=new Mn().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sl,this._sphericalDelta=new sl,this._scale=1,this._panOffset=new R,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new R,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=S2.bind(this),this._onPointerDown=M2.bind(this),this._onPointerUp=y2.bind(this),this._onContextMenu=D2.bind(this),this._onMouseWheel=T2.bind(this),this._onKeyDown=A2.bind(this),this._onTouchStart=P2.bind(this),this._onTouchMove=w2.bind(this),this._onMouseDown=E2.bind(this),this._onMouseMove=b2.bind(this),this._interceptControlDown=R2.bind(this),this._interceptControlUp=C2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rl),this.update(),this.state=dt.NONE}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Yt:n>Math.PI&&(n-=Yt),s<-Math.PI?s+=Yt:s>Math.PI&&(s-=Yt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=bt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(pr.origin.copy(this.object.position),pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pr.direction))<v2?this.object.lookAt(this.target):(al.setFromNormalAndCoplanarPoint(this.object.up,this.target),pr.intersectPlane(al,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ba||this._lastTargetPosition.distanceToSquared(this.target)>ba?(this.dispatchEvent(rl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yt/60*this.autoRotateSpeed*e:Yt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;bt.copy(s).sub(this.target);let r=bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Yt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Yt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Yt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Yt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function M2(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function S2(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function y2(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xu),this.state=dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function E2(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=dt.DOLLY;break;case vn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}break;case vn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(No)}function b2(i){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function T2(i){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(i.preventDefault(),this.dispatchEvent(No),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(xu))}function A2(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function P2(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=dt.TOUCH_ROTATE;break;case Hn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Hn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=dt.TOUCH_DOLLY_PAN;break;case Hn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(No)}function w2(i){switch(this._trackPointer(i),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=dt.NONE}}function D2(i){this.enabled!==!1&&i.preventDefault()}function R2(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function C2(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Mu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class os{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const L2=new fu(-1,1,1,-1,0,1);class I2 extends xt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}}const U2=new I2;class Fo{constructor(e){this._mesh=new Nt(U2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,L2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class N2 extends os{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rs.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ol extends os{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class F2 extends os{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class O2{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new vi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new N2(Mu),this.copyPass.material.blending=Fi,this.clock=new g2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ol!==void 0&&(a instanceof ol?n=!0:a instanceof F2&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class B2 extends os{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new it}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const z2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class es extends os{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new it(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new vi(r,a,{type:Oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new vi(r,a,{type:Oi});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new vi(r,a,{type:Oi});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=z2;this.highPassUniforms=Rs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new He(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Mu;this.copyUniforms=Rs.clone(u.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ai,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new it,this.oldClearAlpha=1,this.basic=new Sn,this.fsQuad=new Fo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new He(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=es.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=es.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}es.BlurDirectionX=new He(1,0);es.BlurDirectionY=new He(0,1);const k2={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class H2 extends os{constructor(){super();const e=k2;this.uniforms=Rs.clone(e.uniforms),this.material=new h2({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Fo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ol?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ji=3,G2=6e3,V2=8e-4,W2=420,cl=500,_n=.0065,ts={bg:329482,gridStrong:4157331,orbit:10467788,planet:13030621},Su=23.4392811;class X2{constructor(e,t){$e(this,"positions");$e(this,"count");$e(this,"nodes");this.positions=e,this.count=t,this.nodes=new Int32Array(t);for(let n=0;n<t;n++)this.nodes[n]=n;this.build(0,t,0)}build(e,t,n){if(t-e<=1)return;const s=n%3,r=e+t>>>1;this.quickselect(e,t,r,s),this.build(e+1,r+1,n+1),this.build(r+1,t,n+1);const a=this.nodes[r];for(let o=r;o>e;o--)this.nodes[o]=this.nodes[o-1];this.nodes[e]=a}quickselect(e,t,n,s){for(;t-e>1;){const r=this.coord(this.nodes[e+t>>>1],s);let a=e,o=t-1;for(;a<=o;){for(;this.coord(this.nodes[a],s)<r;)a++;for(;this.coord(this.nodes[o],s)>r;)o--;if(a<=o){const c=this.nodes[a];this.nodes[a]=this.nodes[o],this.nodes[o]=c,a++,o--}}if(n<=o)t=o+1;else if(n>=a)e=a;else return}}coord(e,t){return this.positions[e*3+t]}nearest(e,t=1){const n=e[0],s=e[1],r=e[2],a=new Int32Array(t),o=new Float64Array(t);let c=0;const l=(m,g)=>{if(c<t){let _=c++;for(a[_]=m,o[_]=g;_>0;){const h=_-1>>>1;if(o[h]<o[_]){const p=a[h],E=o[h];a[h]=a[_],o[h]=o[_],a[_]=p,o[_]=E,_=h}else break}}else if(g<o[0]){a[0]=m,o[0]=g;let _=0;for(;;){const h=2*_+1,p=h+1;let E=_;if(h<c&&o[h]>o[E]&&(E=h),p<c&&o[p]>o[E]&&(E=p),E===_)break;const M=a[E],T=o[E];a[E]=a[_],o[E]=o[_],a[_]=M,o[_]=T,_=E}}},u=()=>c<t?1/0:o[0],f=(m,g,_)=>{if(g-m<=0)return;const h=this.nodes[m],p=this.positions[h*3]-n,E=this.positions[h*3+1]-s,M=this.positions[h*3+2]-r;if(l(h,p*p+E*E+M*M),g-m===1)return;const T=_%3,L=m+1+g>>>1,P=this.coord(h,T),F=(T===0?n:T===1?s:r)-P,Q=F<=0?[m+1,L+1]:[L+1,g],v=F<=0?[L+1,g]:[m+1,L+1];f(Q[0],Q[1],_+1),F*F<u()&&f(v[0],v[1],_+1)};f(0,this.count,0);const d=[];for(let m=0;m<c;m++)d.push({i:a[m],d:o[m]});return d.sort((m,g)=>m.d-g.d),d.map(m=>m.i)}withinRadius(e,t){const n=t*t,s=[],r=(a,o,c)=>{if(o-a<=0)return;const l=this.nodes[a],u=this.positions[l*3]-e[0],f=this.positions[l*3+1]-e[1],d=this.positions[l*3+2]-e[2];if(u*u+f*f+d*d<=n&&s.push(l),o-a===1)return;const m=c%3,g=a+1+o>>>1,_=this.coord(l,m),p=e[m]-_;p<=t&&r(a+1,g+1,c+1),p>=-t&&r(g+1,o,c+1)};return r(0,this.count,0),s}get size(){return this.count}}const ll=1314083905,ul=2;function Oo(i,e,t){const n=Math.round(i),s=Math.round(e),r=Math.round(t);return{hx:n,hy:s,hz:r,lx:i-n,ly:e-s,lz:t-r}}function K2(i){const e=new DataView(i),t=e.getUint32(0,!0),n=e.getUint32(4,!0);if(t!==ll)throw new Error(`stars-near.bin: bad magic 0x${t.toString(16)} (expected 0x${ll.toString(16)}); re-run export_starmap.py.`);if(n!==ul)throw new Error(`stars-near.bin: unsupported version ${n} (loader supports ${ul}).`);const s=e.getUint32(8,!0),r=e.getFloat32(12,!0),a=e.getFloat32(16,!0),o=e.getFloat32(20,!0),c=e.getFloat32(24,!0),l=e.getFloat32(28,!0),u=32,f=new Int16Array(i,u,s*4),d=new Uint8Array(i,u,s*8),m=new Float32Array(s*3),g=new Float32Array(s*3),_=new Float32Array(s*3),h=new Float32Array(s),p=new Float32Array(s),E=r/32767*Ji,M=o>a?(o-a)/255:0,T=l>c?(l-c)/255:0;for(let L=0;L<s;L++){const P=L*4,A=L*8,F=f[P]*E,Q=f[P+1]*E,v=f[P+2]*E;m[L*3]=F,m[L*3+1]=Q,m[L*3+2]=v;const S=Oo(F,Q,v);g[L*3]=S.hx,g[L*3+1]=S.hy,g[L*3+2]=S.hz,_[L*3]=S.lx,_[L*3+1]=S.ly,_[L*3+2]=S.lz,h[L]=a+d[A+6]*M,p[L]=c+d[A+7]*T}return{positions:m,positionsHi:g,positionsLo:_,mag:h,ci:p,count:s}}const yu=`
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
`,Y2=`
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
`,q2=`
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
`;function Bo(i,e){const t=i.uniforms.uCamHi.value,n=i.uniforms.uCamLo.value,s=Math.round(e.x),r=Math.round(e.y),a=Math.round(e.z);t.set(s,r,a),n.set(e.x-s,e.y-r,e.z-a)}function Eu(i,e,t){const n=new xt;n.setAttribute("position",new nt(i.positionsHi,3)),n.setAttribute("aPosLo",new nt(i.positionsLo,3)),n.setAttribute("aMag",new nt(i.mag,1)),n.setAttribute("aCI",new nt(i.ci,1));const s=new mt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uBaseSize:{value:t},uRefMag:{value:6},uAttenuate:{value:e?1:0},uIntensity:{value:e?.95:.6},uCamDist:{value:0},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:yu+Y2,fragmentShader:q2,transparent:!0,depthWrite:!1,blending:Ai}),r=new Hr(n,s);return r.frustumCulled=!1,r}function $2(i,e,t,n=1.5,s=!1){const r=i.length,a=new Float32Array(r*3),o=new Float32Array(r*3),c=new Float32Array(r*3);for(let d=0;d<r;d++){const m=i[d][0]*Ji,g=i[d][1]*Ji,_=i[d][2]*Ji;a[d*3]=m,a[d*3+1]=g,a[d*3+2]=_;const h=Oo(m,g,_);o[d*3]=h.hx,o[d*3+1]=h.hy,o[d*3+2]=h.hz,c[d*3]=h.lx,c[d*3+1]=h.ly,c[d*3+2]=h.lz}const l={positionsHi:o,positionsLo:c,mag:Float32Array.from(e),ci:Float32Array.from(t)},u=Eu(l,s,n),f=u.material;return f.uniforms.uIntensity.value=.95,{object:u,material:f,setCamPos(d){Bo(f,d)}}}const j2=`
	uniform float uPixelRatio;
	uniform float uSize;
	void main() {
		gl_Position = projectionMatrix * rteMvPosition();
		gl_PointSize = uSize * uPixelRatio;
	}
`,Z2=`
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
`;function J2(i){const e=i.length,t=new Float32Array(e*3),n=new Float32Array(e*3);for(let o=0;o<e;o++){const c=i[o],l=Oo(c.x,c.y,c.z);t[o*3]=l.hx,t[o*3+1]=l.hy,t[o*3+2]=l.hz,n[o*3]=l.lx,n[o*3+1]=l.ly,n[o*3+2]=l.lz}const s=new xt;s.setAttribute("position",new nt(t,3)),s.setAttribute("aPosLo",new nt(n,3));const r=new mt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:7.5},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:yu+j2,fragmentShader:Z2,transparent:!0,depthWrite:!1,blending:Ai}),a=new Hr(s,r);return a.frustumCulled=!1,{object:a,setCamPos(o){Bo(r,o)}}}async function Q2(i){const e=await fetch(`${i}/data/stars-near.bin`).then(a=>a.arrayBuffer()),t=K2(e),n=Eu(t,!0,.85),s=new X2(t.positions,t.count),r=n.material;return{near:n,nearCount:t.count,kdtree:s,setCamDist(a){r.uniforms.uCamDist.value=a},setCamPos(a){Bo(r,a)}}}const e3=`
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
`,t3=`
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
`,Ir=3,As=5,i3=2,n3=30;function s3(i,e,t){const n=Math.max(e,1),s=Math.tan(t*Math.PI/360),r=i*s*2/n,a=Math.log(r*n3/Ir)/Math.log(As),o=Math.floor(a),c=a-o,l=Ir*Math.pow(As,o);return{major:l*As,minor:l,f:c}}function r3(){const i=new _i,e=new mt({uniforms:{uRadius:{value:10},uCamLocal:{value:new R},uLookXY:{value:new He},uColor:{value:new it(15002350)},uPlaneScale:{value:1}},vertexShader:e3,fragmentShader:t3,transparent:!0,depthWrite:!1,side:pi}),t=new Nt(new Is(720,720,1,1),e);t.renderOrder=-1,t.frustumCulled=!1,i.add(t);const n=e.uniforms.uCamLocal.value,s=e.uniforms.uLookXY.value;return{group:i,update(r,a,o){const c=o*.4;e.uniforms.uRadius.value=c;const l=Math.max(1e-12,o*.001),u=Math.log(l*30/Ir)/Math.log(As),f=Math.floor(u)+i3,d=Ir*Math.pow(As,f),m=Math.floor(r.x/d)*d,g=Math.floor(r.y/d)*d;i.position.set(m,g,r.z);const _=(d+c)*1.2;e.uniforms.uPlaneScale.value=Math.min(1,Math.max(o/225,_/360)),s.set(r.x-m,r.y-g),n.copy(a).sub(i.position)}}}const a3=`
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
`,o3=`
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
`;function hl(i,e,t){const n=Math.round(i),s=Math.round(e),r=Math.round(t);return{hx:n,hy:s,hz:r,lx:i-n,ly:e-s,lz:t-r}}function c3(i){const e=i.length,t=new Float32Array(e*2*3),n=new Float32Array(e*2*3),s=new Float32Array(e*2*3),r=new Float32Array(e*2*3),a=new Float32Array(e*2);for(let u=0;u<e;u++){const f=i[u],d=hl(f.x,f.y,f.z),m=hl(f.x,f.y,0);t[u*6+0]=d.hx,t[u*6+1]=d.hy,t[u*6+2]=d.hz,n[u*6+0]=d.lx,n[u*6+1]=d.ly,n[u*6+2]=d.lz,a[u*2]=0,t[u*6+3]=m.hx,t[u*6+4]=m.hy,t[u*6+5]=m.hz,n[u*6+3]=m.lx,n[u*6+4]=m.ly,n[u*6+5]=m.lz,a[u*2+1]=1,s[u*6+0]=d.hx,s[u*6+1]=d.hy,s[u*6+2]=d.hz,r[u*6+0]=d.lx,r[u*6+1]=d.ly,r[u*6+2]=d.lz,s[u*6+3]=d.hx,s[u*6+4]=d.hy,s[u*6+5]=d.hz,r[u*6+3]=d.lx,r[u*6+4]=d.ly,r[u*6+5]=d.lz}const o=new xt;o.setAttribute("position",new nt(t,3)),o.setAttribute("aPosLo",new nt(n,3)),o.setAttribute("aStarHi",new nt(s,3)),o.setAttribute("aStarLo",new nt(r,3)),o.setAttribute("aFoot",new nt(a,1));const c=new mt({uniforms:{uCenter:{value:new R},uRadius:{value:10},uGridZ:{value:0},uOpacity:{value:.42},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:a3,fragmentShader:o3,transparent:!0,depthWrite:!1}),l=new Cs(o,c);return l.frustumCulled=!1,{object:l,update(u,f){c.uniforms.uCenter.value.copy(u),c.uniforms.uRadius.value=f,c.uniforms.uGridZ.value=u.z},setCamPos(u){const f=c.uniforms.uCamHi.value,d=c.uniforms.uCamLo.value,m=Math.round(u.x),g=Math.round(u.y),_=Math.round(u.z);f.set(m,g,_),d.set(u.x-m,u.y-g,u.z-_)}}}const bu=Su*Math.PI/180,dl=Math.cos(bu),fl=Math.sin(bu);function l3(i,e,t){const n=i*Math.PI/180,s=e*Math.PI/180,r=Math.cos(s)*Math.cos(n),a=Math.cos(s)*Math.sin(n),o=Math.sin(s),c=r,l=a*dl+o*fl,u=-a*fl+o*dl,f=t*Ji;return new R(c*f,l*f,u*f)}const ai=Math.PI/180,u3=114e-10,h3=.05,pl=.3,ml=.6,gl=.02;function d3(i){const e=l3(i.ra,i.dec,i.dist),t=[];let n=0,s=null;if(f3(i.children)){s=new _i,s.position.copy(e);let r=0;for(const o of i.children)o.kind==="planet"&&o.angle===void 0&&(o.angle=r*137.508*ai%(Math.PI*2),r++);const a=g3(i.children);for(const o of i.children){const c=p3(o,a);if(c&&s.add(c),o.kind==="planet"&&o.id){const l=v3(o);t.push({id:`${i.id}/${o.id}`,name:o.name??o.id,local:l}),n=Math.max(n,l.length())}if(o.kind==="planet"||o.kind==="orbit"){const l=o.kind==="planet"?o.orbitRadius:o.radius;n=Math.max(n,l)}if(o.kind==="star"&&o.offset){const l=o.offset;n=Math.max(n,Math.hypot(l[0],l[1],l[2]))}o.kind==="belt"&&(n=Math.max(n,o.outerR))}}return{def:i,center:e,bbox:S3(i.children),visualHalf:n,group:s,planets:t}}function f3(i){return!(i.length===0||i.length===1&&i[0].kind==="star")}function p3(i,e){switch(i.kind){case"star":return m3(i,e);case"planet":return _3(i);case"belt":return M3(i);case"orbit":return x3(i)}}function m3(i,e){const t=new _i,n=e>0?Math.max(gl,Math.min(1,e*pl/i.size)):1,s=e>0?Math.min(1,e*ml/i.size):1,r=i.halo&&e>0?Math.max(gl,Math.min(1,e*pl/i.halo.size)):1,a=i.halo&&e>0?Math.min(1,e*ml/i.halo.size):1,o=new Nt(new Qn(i.size,24,24),new Sn({color:i.color}));if(o.userData.bodyKind="star-sphere",o.userData.baseSize=i.size,o.userData.shrinkTarget=n,o.userData.upperBound=s,t.add(o),i.halo){const c=new Nt(new Qn(i.halo.size,24,24),new Sn({color:i.halo.color,transparent:!0,opacity:i.halo.opacity,blending:Ai,depthWrite:!1}));c.userData.bodyKind="star-halo",c.userData.baseSize=i.halo.size,c.userData.shrinkTarget=r,c.userData.upperBound=a,t.add(c)}return i.offset&&t.position.set(i.offset[0],i.offset[1],i.offset[2]),t}function g3(i){let e=1/0;for(const t of i)if(t.kind==="planet")e=Math.min(e,t.orbitRadius);else if(t.kind==="orbit")e=Math.min(e,t.radius);else if(t.kind==="belt")e=Math.min(e,t.innerR);else if(t.kind==="star"&&t.offset){const n=Math.hypot(t.offset[0],t.offset[1],t.offset[2]);n>0&&(e=Math.min(e,n))}return isFinite(e)?e:0}function _3(i){const e=new _i;e.add(Tu(i.orbitRadius));const n=(i.angle??Math.random()*Math.PI*2)+i.node*ai,s=Math.min(i.size,i.orbitRadius*.1),r=new Nt(new Qn(s,16,16),new Sn({color:i.color}));if(r.userData.bodyKind="planet-marker",r.userData.baseSize=s,i.realRadiusKm!=null){const a=i.realRadiusKm*u3;r.userData.realScaleTarget=Math.max(h3,Math.min(1,a/s))}r.position.set(Math.cos(n)*i.orbitRadius,Math.sin(n)*i.orbitRadius,0);{const a=s*2.5,o=s*1,c=new xt;c.setAttribute("position",new nt([0,0,-a,0,0,-o,0,0,o,0,0,a],3));const l=new Cs(c,new kr({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}));l.rotation.x=(i.obliquityDeg??0)*ai,l.userData.bodyKind="planet-axis",r.add(l)}if(i.rings){const a=new Nt(new Io(i.rings.innerR,i.rings.outerR,64,1),new Sn({color:i.rings.color,side:pi,transparent:!0,opacity:i.rings.opacity,depthWrite:!1}));a.rotation.x=(i.obliquityDeg??0)*ai,a.userData.bodyKind="planet-rings",r.add(a)}return e.add(r),Au(e,i.inc,i.node),e}function v3(i){const e=(i.angle??0)+i.node*ai,t=new R(Math.cos(e)*i.orbitRadius,Math.sin(e)*i.orbitRadius,0);if(i.inc!==0){const n=new R(Math.cos(i.node*ai),Math.sin(i.node*ai),0);t.applyAxisAngle(n,i.inc*ai)}return t}function x3(i){const e=new _i;return e.add(Tu(i.radius)),Au(e,i.inc,i.node),e}function Tu(i){const t=[];for(let r=0;r<256;r++){const a=r/256*Math.PI*2;t.push(Math.cos(a)*i,Math.sin(a)*i,0)}const n=new xt;n.setAttribute("position",new nt(t,3));const s=new c2(n,new kr({color:ts.orbit,transparent:!0,opacity:.85,blending:Ai,depthWrite:!1}));return s.renderOrder=1,s}function Au(i,e,t){e!==0&&i.rotateOnAxis(new R(Math.cos(t*ai),Math.sin(t*ai),0),e*ai)}function M3(i){const e=new Float32Array(i.count*3),t=i.outerR-i.innerR;for(let r=0;r<i.count;r++){const a=i.innerR+Math.random()*t,o=Math.random()*Math.PI*2,c=(Math.random()-.5)*2*i.thickness;e[r*3]=Math.cos(o)*a,e[r*3+1]=Math.sin(o)*a,e[r*3+2]=c}const n=new xt;n.setAttribute("position",new nt(e,3));const s=new mt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
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
		`,transparent:!0,depthWrite:!1});return new Hr(n,s)}function S3(i){const e=new ns;e.expandByPoint(new R(0,0,0));for(const s of i)switch(s.kind){case"star":{const r=s.offset??[0,0,0],a=s.halo?Math.max(s.size,s.halo.size):s.size;e.expandByPoint(new R(r[0]-a,r[1]-a,r[2]-a)),e.expandByPoint(new R(r[0]+a,r[1]+a,r[2]+a));break}case"planet":case"orbit":{const r=s.kind==="planet"?s.orbitRadius:s.radius,a=r*Math.abs(Math.sin(s.inc*ai));e.expandByPoint(new R(-r,-r,-a)),e.expandByPoint(new R(+r,+r,+a));break}case"belt":{e.expandByPoint(new R(-s.outerR,-s.outerR,-s.thickness)),e.expandByPoint(new R(+s.outerR,+s.outerR,+s.thickness));break}}const t=new R;e.getSize(t);const n=Math.max(t.x,t.y,t.z)*.5;return e.expandByScalar(Math.max(.06,.18*n)),e}function y3(){const i=new Cs(new u2(new rs(1,1,1)),new kr({color:ts.gridStrong,transparent:!0,opacity:.9}));i.renderOrder=2,i.frustumCulled=!1;const e=new R,t=new R(1,1,1),n=new R,s=new R(1,1,1);let r=!1;const a=new R,o=new R;return{object:i,setTo(c,l){l.getCenter(a),l.getSize(o),n.copy(c).add(a),s.copy(o),r||(e.copy(n),t.copy(s),i.position.copy(e),i.scale.copy(t),r=!0)},setVisible(c){i.visible=c},tick(){e.lerp(n,.18),t.lerp(s,.18),i.position.copy(e),i.scale.copy(t)}}}const _l=[{name:"Chained Maiden",iau:"And",segments:[25.9747,6.6249,12.8897,26.7885,10.7218,13.0592,26.7885,10.7218,13.0592,46.9464,27.549,26.482,76.3681,74.3307,56.2028,46.9464,27.549,26.482,46.9464,27.549,26.482,28.4124,15.8631,18.5299,28.4124,15.8631,18.5299,127.198,70.9409,93.0072]},{name:"Air Pump",iau:"Ant",segments:[-88.3833,11.7289,-68.2345,-23.281,4.7126,-23.3068]},{name:"Bird of Paradise",iau:"Aps",segments:[-21.5704,-77.4122,-129.7857,-3.3331,-26.0318,-38.9192,-3.3331,-26.0318,-38.9192,-3.3976,-27.4711,-38.8773]},{name:"Eagle",iau:"Aql",segments:[6.5172,-10.2601,6.1024,2.3556,-3.8027,2.5106,2.3556,-3.8027,2.5106,78.6348,-131.1868,92.7883,2.3556,-3.8027,2.5106,5.6501,-12.9095,6.5164,5.6501,-12.9095,6.5164,128.3452,-218.4644,99.9262,37.9878,-54.4269,22.5018,128.3452,-218.4644,99.9262,5.6501,-12.9095,6.5164,7.1495,-19.8628,15.4423,7.1495,-19.8628,15.4423,13.6609,-41.3987,33.5326,5.6501,-12.9095,6.5164,11.0769,-35.4934,11.7702]},{name:"Water Bearer",iau:"Aqr",segments:[132.8872,-98.7085,25.0794,177.6209,-89.1303,37.4123,177.6209,-89.1303,37.4123,35.1602,-15.1322,5.54,35.1602,-15.1322,5.54,25.9695,-10.0158,4.3317,25.9695,-10.0158,4.3317,50.7633,-18.0729,7.7139,50.7633,-18.0729,7.7139,106.1686,-35.3667,-.7551,106.1686,-35.3667,-.7551,43.871,-10.6876,-3.1587,43.871,-10.6876,-3.1587,46.6795,-13.8654,-12.8536,177.6209,-89.1303,37.4123,52.2016,-26.2964,2.7635,52.2016,-26.2964,2.7635,55.123,-33.4891,-2.3436,52.2016,-26.2964,2.7635,57.4381,-26.3118,-1.3543,57.4381,-26.3118,-1.3543,92.4901,-36.2544,-9.8535,92.4901,-36.2544,-9.8535,39.8905,-15.4137,-6.1559,39.8905,-15.4137,-6.1559,71.8099,-26.1115,-19.7471,49.3137,-55.3034,10.5198,132.8872,-98.7085,25.0794]},{name:"Altar",iau:"Ara",segments:[6.298,-303.1895,-152.2499,-6.4738,-73.0302,-36.6511,-6.4738,-73.0302,-36.6511,-25.6417,-142.8531,-94.5829,-25.6417,-142.8531,-94.5829,-14.5007,-73.9396,-55.3009,-14.5007,-73.9396,-55.3009,-4.2562,-54.7725,-41.9361,-4.2562,-54.7725,-41.9361,-28.4271,-284.4624,-186.4313,-28.4271,-284.4624,-186.4313,-18.7203,-184.4846,-117.0666,-18.7203,-184.4846,-117.0666,6.298,-303.1895,-152.2499]},{name:"Ram",iau:"Ari",segments:[33.2876,37.2348,9.2114,15.7321,12.1427,3.4917,15.7321,12.1427,3.4917,14.7527,9.9396,2.6545,14.7527,9.9396,2.6545,41.7697,27.3173,6.2717]},{name:"Charioteer",iau:"Aur",segments:[.0492,49.3018,12.0853,.0362,23.1376,9.118,.0362,23.1376,9.118,1.7126,11.9703,5.0991,1.7126,11.9703,5.0991,131.4405,653.8382,219.3016,131.4405,653.8382,219.3016,31.3476,131.9866,25.0313,5.2816,40.527,3.8526,31.3476,131.9866,25.0313,5.2816,40.527,3.8526,.0492,49.3018,12.0853]},{name:"Herdsman",iau:"Boo",segments:[-39.9256,-25.9652,25.1939,-8.8234,-3.9716,5.7535,-8.8234,-3.9716,5.7535,-48.4197,-25.8606,47.0903,-48.4197,-25.8606,47.0903,-20.2999,-13.2624,27.8606,-20.2999,-13.2624,27.8606,-38.4761,-17.3327,58.4063,-38.4761,-17.3327,58.4063,-16.3054,-5.1922,20.0723,-16.3054,-5.1922,20.0723,-34.2615,-14.3923,33.9949,-34.2615,-14.3923,33.9949,-8.8234,-3.9716,5.7535,-8.8234,-3.9716,5.7535,-9.4877,-3.3293,5.3636,-9.4877,-3.3293,5.3636,-63.6617,-22.1686,31.7177]},{name:"Great Dog",iau:"CMa",segments:[-18.9847,65.4126,-47.1978,-34.8809,97.9145,-81.1902,-34.8809,97.9145,-81.1902,-245.2542,776.7879,-674.9295,-245.2542,776.7879,-674.9295,-.4943,1.9707,-1.6811,-.4943,1.9707,-1.6811,-285.0116,742.3727,-827.2156,-285.0116,742.3727,-827.2156,-129.7334,299.8533,-368.6769,-129.7334,299.8533,-368.6769,-80.3942,167.564,-210.5207,-80.3942,167.564,-210.5207,-190.762,336.6705,-471.2381,-27.4979,72.5304,-97.0294,-93.704,237.2004,-306.3871,-93.704,237.2004,-306.3871,-129.7334,299.8533,-368.6769,-93.704,237.2004,-306.3871,-165.8789,505.6813,-566.2108,-165.8789,505.6813,-566.2108,-3.0802,14.8191,-13.7832,-3.0802,14.8191,-13.7832,-17.4617,84.6014,-89.61,-.4943,1.9707,-1.6811,-14.2097,112.672,-99.6064,-3.0802,14.8191,-13.7832,-.4943,1.9707,-1.6811,-8.5121,65.741,-89.1703,-27.4979,72.5304,-97.0294,-245.2542,776.7879,-674.9295,-18.9847,65.4126,-47.1978]},{name:"Lesser Dog",iau:"CMi",segments:[-1.4693,3.0414,-.9698,-18.2097,44.6401,-11.5631]},{name:"Hunting Dogs",iau:"CVn",segments:[-6.2908,1.3709,5.5075,-23.2636,2.2127,19.6929]},{name:"Engraving Tool",iau:"Cae",segments:[56.1269,66.8497,-190.0001,5.1567,7.6879,-18.1589,5.1567,7.6879,-18.1589,7.6828,12.9813,-24.6444]},{name:"Giraffe",iau:"Cam",segments:[291.1956,672.3074,604.6408,27.28,84.1613,78.3586,27.28,84.1613,78.3586,170.822,1076.0472,1030.991,291.1956,672.3074,604.6408,20.3155,73.9849,90.2028,20.3155,73.9849,90.2028,170.822,1076.0472,1030.991,20.3155,73.9849,90.2028,.6317,11.6383,17.2104]},{name:"Sea Goat",iau:"Cap",segments:[18.4888,-27.5573,4.0335,66.4654,-98.3635,9.5278,66.4654,-98.3635,9.5278,31.6212,-32.9238,-.4668,31.6212,-32.9238,-.4668,45.6168,-41.5341,-1.472,45.6168,-41.5341,-1.472,41.0902,-32.3455,-2.3356,41.0902,-32.3455,-2.3356,9.5345,-7.0442,-.5387,45.6168,-41.5341,-1.472,98.3802,-91.9438,-16.5121,98.3802,-91.9438,-16.5121,31.6212,-32.9238,-.4668,66.4654,-98.3635,9.5278,8.7725,-11.5746,-1.7906,31.6212,-32.9238,-.4668,103.0256,-132.0592,-26.4166]},{name:"Keel",iau:"Car",segments:[-8.9807,-5.605,-33.0438,-36.7994,-28.1756,-111.2454,-36.7994,-28.1756,-111.2454,-56.9809,-31.8317,-123.4754,-56.9809,-31.8317,-123.4754,-210.9756,-90.3264,-392.163,-210.9756,-90.3264,-392.163,-753.7473,-353.5249,-1247.752,-753.7473,-353.5249,-1247.752,-14.7843,-6.1049,-25.1799,-14.7843,-6.1049,-25.1799,-226.2193,-72.8357,-409.7547,-226.2193,-72.8357,-409.7547,-100.3964,-36.6914,-206.2573,-100.3964,-36.6914,-206.2573,-90.8878,-8.4734,-216.2668,-180.1868,5.2702,-524.7472,-54.8371,6.6077,-177.1162,-54.8371,6.6077,-177.1162,-5.9927,22.4267,-91.9002,-48.0063,-2.8648,-116.2623,-90.8878,-8.4734,-216.2668,-48.0063,-2.8648,-116.2623,-180.1868,5.2702,-524.7472,-5.9927,22.4267,-91.9002,-13.558,43.9401,-103.6433,-54.8371,6.6077,-177.1162,-130.675,115.4053,-282.8069]},{name:"Seated Queen",iau:"Cas",segments:[55.6026,78.7157,105.3508,14.0824,15.6017,22.073,14.0824,15.6017,22.073,79.8367,76.9122,126.698,79.8367,76.9122,126.698,38.5213,29.8626,51.5819,38.5213,29.8626,51.5819,8.5999,6.0479,13.0833]},{name:"Centaur",iau:"Cen",segments:[-.5038,-.8545,-.912,-50.954,-69.6001,-83.7001,-50.954,-69.6001,-83.7001,-70.7265,-72.1096,-83.5171,-70.7265,-72.1096,-83.5171,-69.5458,-69.426,-63.678,-69.5458,-69.426,-63.678,-80.7998,-78.9698,-66.4252,-80.7998,-78.9698,-66.4252,-89.3716,-79.17,-66.1252,-89.3716,-79.17,-66.1252,-82.403,-72.0222,-58.8494,-82.403,-72.0222,-58.8494,-197.912,-146.3289,-128.7601,-197.912,-146.3289,-128.7601,-13.4253,-8.7615,-7.8246,-82.403,-72.0222,-58.8494,-12.3588,-11.249,-6.7791,-89.3716,-79.17,-66.1252,-54.0862,-65.0289,-40.367,-54.0862,-65.0289,-40.367,-61.8728,-87.6931,-47.8539,-69.5458,-69.426,-63.678,-25.7719,-16.3031,-25.7365,-25.7719,-16.3031,-25.7365,-80.1167,-47.6182,-85.0668,-80.1167,-47.6182,-85.0668,-110.645,-57.5548,-122.6027,-110.645,-57.5548,-122.6027,-71.5877,-32.5548,-94.9883,-71.5877,-32.5548,-94.9883,-54.5066,-37.5232,-101.0827]},{name:"King",iau:"Cep",segments:[142.0305,35.3143,265.6382,14.0981,9.2398,32.541,14.0981,9.2398,32.541,55.2195,39.455,198.82,55.2195,39.455,198.82,5.2761,1.1966,14.0307,5.2761,1.1966,14.0307,142.0305,35.3143,265.6382,14.0981,9.2398,32.541,2.9416,5.1142,12.4641,2.9416,5.1142,12.4641,55.2195,39.455,198.82]},{name:"Sea Monster",iau:"Cet",segments:[79.3152,53.5821,-7.1415,47.6537,36.5263,-6.1577,3.1559,1.0144,-1.5328,27.5835,1.2446,-10.4796,27.5835,1.2446,-10.4796,84.1581,1.3457,-14.8741,27.5835,1.2446,-10.4796,34.7557,7.2403,-10.2594,34.7557,7.2403,-10.2594,31.8262,9.2621,-9.3591,31.8262,9.2621,-9.3591,67.5396,27.2194,-26.9862,67.5396,27.2194,-26.9862,135.3154,77.2385,-73.452,135.3154,77.2385,-73.452,17.6728,11.6269,-10.3186,17.6728,11.6269,-10.3186,87.1675,58.2562,-56.3289,87.1675,58.2562,-56.3289,17.5219,10.1585,-11.0112,17.5219,10.1585,-11.0112,3.1559,1.0144,-1.5328,75.1307,46.0798,-25.1676,17.6728,11.6269,-10.3186,75.1307,46.0798,-25.1676,149.5714,115.0665,-48.6695,149.5714,115.0665,-48.6695,18.4404,15.1648,-5.0731,18.4404,15.1648,-5.0731,53.3427,52.0916,-16.6461,53.3427,52.0916,-16.6461,95.5438,95.8551,-18.5053,95.5438,95.8551,-18.5053,19.6933,17.6956,-2.5804,19.6933,17.6956,-2.5804,47.6537,36.5263,-6.1577,47.6537,36.5263,-6.1577,95.6428,75.7716,-19.7204,95.6428,75.7716,-19.7204,18.4404,15.1648,-5.0731]},{name:"Chameleon",iau:"Cha",segments:[-2.5063,-4.2209,-18.8582,-25.0619,-44.1552,-126.1982,-25.0619,-44.1552,-126.1982,-17.2582,-37.7613,-83.6165]},{name:"Compass",iau:"Cir",segments:[-5.2638,-10.0527,-11.834,-44.3157,-96.9883,-86.8897,-5.2638,-10.0527,-11.834,-9.9719,-20.7267,-18.5802]},{name:"Crab",iau:"Cnc",segments:[-61.9264,84.1604,19.2272,-32.6313,42.467,2.9853,-32.6313,42.467,2.9853,-9.2988,15.4924,2.3677,-32.6313,42.467,2.9853,-26.2534,32.7438,.0565,-26.2534,32.7438,.0565,-54.8236,80.4972,-17.6775,-26.2534,32.7438,.0565,-37.5024,39.3242,-4.831]},{name:"Dove",iau:"Col",segments:[-5.3422,36.0752,-55.5481,-3.3944,29.8751,-49.0399,-3.3944,29.8751,-49.0399,2.8376,167.9084,-276.423,2.8376,167.9084,-276.423,.867,13.8563,-23.2707,.867,13.8563,-23.2707,.3689,54.3996,-123.6596,.867,13.8563,-23.2707,6.443,46.8483,-73.8737,6.443,46.8483,-73.8737,8.6981,43.5209,-72.788]},{name:"Bernice's Hair",iau:"Com",segments:[-16.2111,-2.5531,6.9587,-7.7336,-.5904,4.9435,-7.7336,-.5904,4.9435,-44.0323,4.7134,23.943]},{name:"Southern Crown",iau:"CrA",segments:[9.3381,-59.7635,-16.4582,28.4394,-138.6164,-36.5229,28.4394,-138.6164,-36.5229,6.3541,-29.7969,-7.7543,6.3541,-29.7969,-7.7543,3.9459,-16.2888,-4.305,3.9459,-16.2888,-4.305,8.695,-34.5275,-9.7496,8.695,-34.5275,-9.7496,39.6721,-158.3879,-49.1491,39.6721,-158.3879,-49.1491,12.6537,-52.3957,-17.3677,12.6537,-52.3957,-17.3677,11.0854,-50.6433,-18.1852,11.0854,-50.6433,-18.1852,17.2022,-88.9519,-32.6261,9.3381,-59.7635,-16.4582,7.4289,-65.3959,-19.4289]},{name:"Northern Crown",iau:"CrB",segments:[-58.8185,-48.4007,86.2553,-19.2809,-15.6786,25.7826,-19.2809,-15.6786,25.7826,-12.5275,-11.3975,16.5411,-12.5275,-11.3975,16.5411,-22.6331,-22.5333,31.3926,-22.6331,-22.5333,31.3926,-24.824,-26.6454,36.119,-24.824,-26.6454,36.119,-33.6559,-38.878,53.3769,-33.6559,-38.878,53.3769,-48.9075,-56.2868,86.2628]},{name:"Cup",iau:"Crt",segments:[-45.0108,4.9776,-18.9584,-87.4645,2.2069,-41.9903,-87.4645,2.2069,-41.9903,-24.9714,.3338,-8.9254,-24.9714,.3338,-8.9254,-55.9289,3.2376,-17.7418,-55.9289,3.2376,-17.7418,-45.0108,4.9776,-18.9584,-55.9289,3.2376,-17.7418,-118.6607,7.7826,-28.4834,-118.6607,7.7826,-28.4834,-90.3482,2.2218,-18.0651,-90.3482,2.2218,-18.0651,-73.449,-7.8463,-21.3078,-73.449,-7.8463,-21.3078,-99.5711,-7.0841,-33.0066,-99.5711,-7.0841,-33.0066,-24.9714,.3338,-8.9254]},{name:"Southern Cross",iau:"Cru",segments:[-14.6068,-10.9033,-20.1241,-44.3638,-39.7633,-78.7129,-42.1687,-37.4997,-64.0955,-72.2168,-51.8257,-107.5222]},{name:"Crow",iau:"Crv",segments:[-17.3484,-4.2661,-3.6967,-24.9767,-5.9741,-5.5508,-24.9767,-5.9741,-5.5508,-44.8059,-8.4869,-11.7944,-44.8059,-8.4869,-11.7944,-87.011,-17.9643,-31.7652,-87.011,-17.9643,-31.7652,-13.5943,-2.9502,-5.5496,-87.011,-17.9643,-31.7652,-41.2393,-12.8982,-14.0768,-41.2393,-12.8982,-14.0768,-24.9767,-5.9741,-5.5508]},{name:"Swan",iau:"Cyg",segments:[7.4369,-7.4581,36.258,8.8709,-7.9962,35.5925,8.8709,-7.9962,35.5925,14.7517,-14.122,42.6501,14.7517,-14.122,42.6501,249.3182,-175.6044,471.8265,249.3182,-175.6044,471.8265,197.2507,-90.6034,374.5477,249.3182,-175.6044,471.8265,12.7406,-8.0401,17.591,12.7406,-8.0401,17.591,29.5449,-15.027,31.6699,29.5449,-15.027,31.6699,16.0811,-5.7084,14.0653,249.3182,-175.6044,471.8265,16.8881,-18.1559,34.475,16.8881,-18.1559,34.475,37.92,-62.4863,83.9872]},{name:"Dolphin",iau:"Del",segments:[68.1781,-70.4501,54.5072,18.9942,-18.125,16.3534,18.9942,-18.125,16.3534,44.9383,-41.351,39.6923,44.9383,-41.351,39.6923,22.6976,-19.4758,19.2023,22.6976,-19.4758,19.2023,42.7417,-38.328,35.7952,42.7417,-38.328,35.7952,18.9942,-18.125,16.3534]},{name:"Swordfish",iau:"Dor",segments:[1.2474,.6204,-45.6993,.3183,1.6505,-27.2721,.3183,1.6505,-27.2721,18.0973,23.2658,-339.9282,18.0973,23.2658,-339.9282,1.2474,.6204,-45.6993,18.0973,23.2658,-339.9282,10.8578,8.4311,-49.8454,10.8578,8.4311,-49.8454,5.5753,4.1324,-19.2144]},{name:"Dragon",iau:"Dra",segments:[-.5309,-5.784,33.9175,-.4362,-12.2974,45.6752,-.4362,-12.2974,45.6752,-9.1693,-28.1642,112.7237,-9.1693,-28.1642,112.7237,-2.0629,-5.7937,29.2846,-2.0629,-5.7937,29.2846,-.5309,-5.784,33.9175,-.5309,-5.784,33.9175,3.548,1.0957,29.7543,3.548,1.0957,29.7543,7.1993,4.6209,46.1133,7.1993,4.6209,46.1133,4.2781,6.1118,45.5324,4.2781,6.1118,45.5324,.2194,.8755,8.0067,.2194,.8755,8.0067,-11.644,-.6878,127.2227,-11.644,-.6878,127.2227,-5.4318,-1.4035,27.4306,-5.4318,-1.4035,27.4306,-5.5316,-1.656,20.7318,-5.5316,-1.656,20.7318,-9.9255,-.8596,29.0878,-9.9255,-.8596,29.0878,-29.5884,12.2824,73.1965,-29.5884,12.2824,73.1965,-48.7653,46.672,125.689,-48.7653,46.672,125.689,-40.5079,47.7083,97.2675]},{name:"Little Horse",iau:"Equ",segments:[25.7325,-19.0916,15.0658,13.6611,-9.7643,7.7349,13.6611,-9.7643,7.7349,75.6174,-52.0966,35.3034,75.6174,-52.0966,35.3034,43.6692,-32.7672,20.0028,43.6692,-32.7672,20.0028,25.7325,-19.0916,15.0658]},{name:"River",iau:"Eri",segments:[21.0655,-5.522,-36.7913,9.5551,-.6267,-14.755,9.5551,-.6267,-14.755,23.7559,.4146,-39.52,23.7559,.4146,-39.52,86.9013,12.1135,-135.1755,86.9013,12.1135,-135.1755,24.8917,7.1304,-35.9687,24.8917,7.1304,-35.9687,26.3235,8.9467,-35.2219,26.3235,8.9467,-35.2219,26.8574,11.5513,-39.8588,26.8574,11.5513,-39.8588,2.8379,1.46,-5.1296,2.8379,1.46,-5.1296,21.7991,18.6551,-41.8437,21.7991,18.6551,-41.8437,29.0556,25.9406,-54.2246,29.0556,25.9406,-54.2246,19.4618,25.3656,-43.9482,19.4618,25.3656,-43.9482,30.2877,42.4416,-73.2,30.2877,42.4416,-73.2,20.0748,34.6103,-50.8762,20.0748,34.6103,-50.8762,8.9684,9.7397,-11.8744,8.9684,9.7397,-11.8744,54.3226,52.8356,-62.3343,54.3226,52.8356,-62.3343,56.3803,47.4932,-58.6514,56.3803,47.4932,-58.6514,17.349,11.9391,-16.9971,17.349,11.9391,-16.9971,10.1705,6.382,-7.723,10.1705,6.382,-7.723,29.2925,23.5097,-17.1541,29.2925,23.5097,-17.1541,23.6847,22.7349,-15.957,23.6847,22.7349,-15.957,1.9011,2.1238,-1.4975,1.9011,2.1238,-1.4975,5.0331,6.1849,-4.3614,5.0331,6.1849,-4.3614,74.3223,173.5311,-88.5244,74.3223,173.5311,-88.5244,54.8554,145.4538,-73.708,54.8554,145.4538,-73.708,19.2383,56.0186,-31.2216,19.2383,56.0186,-31.2216,6.1994,23.5903,-12.8937,6.1994,23.5903,-12.8937,59.993,227.2791,-144.2905,59.993,227.2791,-144.2905,11.7269,25.4427,-20.3561]},{name:"Furnace",iau:"For",segments:[33.8427,16.6781,-38.8736,8.1907,5.653,-9.8452]},{name:"Twins",iau:"Gem",segments:[-5.2662,32.861,-3.9346,-84.1194,314.1522,-11.5776,-84.1194,314.1522,-11.5776,-5.9071,17.6349,-.0579,-5.9071,17.6349,-.0579,-9.825,28.8956,-3.0115,-9.825,28.8956,-3.0115,-3.5316,17.821,-3.2375,-5.9071,17.6349,-.0579,-28.1502,72.0368,7.0604,-28.1502,72.0368,7.0604,-18.1443,41.4012,2.4311,-28.1502,72.0368,7.0604,-4.0555,9.455,1.2057,-28.1502,72.0368,7.0604,-13.4564,39.1751,4.177,-13.4564,39.1751,4.177,-31.6915,114.7086,16.2054,-31.6915,114.7086,16.2054,-5.3119,14.4062,2.7338,-31.6915,114.7086,16.2054,-11.2245,57.0884,11.3411,-31.6915,114.7086,16.2054,-46.0238,262.6544,9.6379,-46.0238,262.6544,9.6379,-19.7459,165.5339,-8.9011,-46.0238,262.6544,9.6379,-6.5621,70.7116,-1.0166,-6.5621,70.7116,-1.0166,-12.6667,210.9575,-3.2762,-12.6667,210.9575,-3.2762,-.7853,47.5444,-.1432]},{name:"Crane",iau:"Gru",segments:[28.5377,-17.256,-22.8682,66.9447,-53.055,-52.0325,66.9447,-53.055,-52.0325,18.6725,-18.0905,-16.8278,18.6725,-18.0905,-16.8278,34.9934,-27.0194,-31.4562,34.9934,-27.0194,-31.4562,43.3639,-26.5696,-37.2941,43.3639,-26.5696,-37.2941,28.5377,-17.256,-22.8682,34.9934,-27.0194,-31.4562,29.3916,-23.0181,-33.5969,34.9934,-27.0194,-31.4562,23.0665,-18.8595,-24.8135,18.6725,-18.0905,-16.8278,51.7954,-45.1215,-33.4588,51.7954,-45.1215,-33.4588,38.0468,-34.9622,-21.9867]},{name:"Hercules",iau:"Her",segments:[-9.5388,-53.4923,143.535,-3.1738,-119.3697,212.6579,-3.1738,-119.3697,212.6579,-15.1731,-58.1382,104.5976,-15.1731,-58.1382,104.5976,-7.832,-25.5433,46.4738,-7.832,-25.5433,46.4738,-17.5337,-54.1802,96.8726,-17.5337,-54.1802,96.8726,-8.7777,-14.4867,29.6841,-8.7777,-14.4867,29.6841,-24.8873,-33.3184,82.1929,-24.8873,-33.3184,82.1929,-28.7935,-28.1814,89.7737,-28.7935,-28.1814,89.7737,-6.1866,-4.8752,13.8091,-8.7777,-14.4867,29.6841,-3.0733,-5.6509,8.5704,-3.0733,-5.6509,8.5704,-16.1463,-29.2384,30.8236,-16.1463,-29.2384,30.8236,-23.2428,-39.0126,38.1153,-3.0733,-5.6509,8.5704,-11.1807,-28.1346,40.5404,-11.1807,-28.1346,40.5404,-4.0755,-14.9628,17.0344,-4.0755,-14.9628,17.0344,-13.7849,-77.4121,91.3958,-13.7849,-77.4121,91.3958,-.4359,-5.2177,6.4898,-.4359,-5.2177,6.4898,-.3567,-25.4095,33.3406,-.3567,-25.4095,33.3406,3.0854,-65.5115,84.5021,-11.1807,-28.1346,40.5404,-17.5337,-54.1802,96.8726,-16.1463,-29.2384,30.8236,-20.9956,-85.1703,66.7912]},{name:"Clock",iau:"Hor",segments:[11.906,12.2534,-31.7713,21.9024,.948,-44.2868,21.9024,.948,-44.2868,15.1763,-.4981,-40.5242]},{name:"Female Water Snake",iau:"Hya",segments:[-102.1663,112.2635,-38.5527,-73.3756,83.7875,-29.0147,-73.3756,83.7875,-29.0147,-34.2796,40.4149,-11.6444,-34.2796,40.4149,-11.6444,-26.1982,28.7463,-7.6335,-26.1982,28.7463,-7.6335,-63.8752,68.7143,-19.1756,-63.8752,68.7143,-19.1756,-102.1663,112.2635,-38.5527,-63.8752,68.7143,-19.1756,-32.3285,32.8109,-8.9281,-32.3285,32.8109,-8.9281,-27.6832,22.9925,-8.3426,-27.6832,22.9925,-8.3426,-144.8535,98.6719,-46.8678,-144.8535,98.6719,-46.8678,-14.3879,9.8574,-5.2325,-14.3879,9.8574,-5.2325,-43.0035,27.6298,-21.0495,-43.0035,27.6298,-21.0495,-62.3608,28.1685,-33.4888,-62.3608,28.1685,-33.4888,-28.8985,10.8812,-12.4848,-28.8985,10.8812,-12.4848,-65.6572,17.548,-31.2179,-65.6572,17.548,-31.2179,-38.472,6.5305,-15.6063,-38.472,6.5305,-15.6063,-33.7888,-4.7415,-20.9895,-33.7888,-4.7415,-20.9895,-78.7783,-18.8365,-49.5767,-78.7783,-18.8365,-49.5767,-62.6009,-28.9811,-17.9378,-62.6009,-28.9811,-17.9378,-33.8976,-17.2853,-9.3057]},{name:"Male Water Snake",iau:"Hyi",segments:[1.6352,-2.7245,-6.7481,9.8608,-11.5567,-64.5525,9.8608,-11.5567,-64.5525,13.3224,-7.1094,-44.3991,13.3224,-7.1094,-44.3991,12.7363,-7.5995,-40.3145,12.7363,-7.5995,-40.3145,8.0221,-2.5883,-17.4696]},{name:"Indian",iau:"Ind",segments:[13.7948,-20.2998,-17.6879,13.0838,-23.5029,-14.1546,13.0838,-23.5029,-14.1546,64.0614,-121.577,-111.9073,64.0614,-121.577,-111.9073,13.7948,-20.2998,-17.6879]},{name:"Lesser Lion",iau:"LMi",segments:[-24.0628,13.4059,12.8043,-34.8188,24.7998,19.9929,-34.8188,24.7998,19.9929,-19.8267,16.0501,10.3581,-19.8267,16.0501,10.3581,-37.9239,39.5186,20.7465,-19.8267,16.0501,10.3581,-24.0628,13.4059,12.8043]},{name:"Lizard",iau:"Lac",segments:[147.7162,-15.5039,145.4224,237.9234,5.9789,260.0552,237.9234,5.9789,260.0552,418.6354,38.2838,526.7646,418.6354,38.2838,526.7646,469.4853,48.2931,633.6963,469.4853,48.2931,633.6963,28.9654,4.3973,42.7307,28.9654,4.3973,42.7307,18.7885,2.6884,25.4547,18.7885,2.6884,25.4547,418.6354,38.2838,526.7646]},{name:"Lion",iau:"Leo",segments:[-10.6339,1.567,2.3371,-46.5056,13.8436,8.2717,-46.5056,13.8436,8.2717,-21.0188,12.2189,.1973,-21.0188,12.2189,.1973,-469.8671,294.6887,47.2144,-469.8671,294.6887,47.2144,-34.0031,19.9375,6.1126,-34.0031,19.9375,6.1126,-16.4424,5.5601,4.4351,-16.4424,5.5601,4.4351,-10.6339,1.567,2.3371,-34.0031,19.9375,6.1126,-58.8396,37.3905,14.6468,-58.8396,37.3905,14.6468,-29.266,23.3377,8.1949,-29.266,23.3377,8.1949,-53.1957,43.5327,11.7686,-16.4424,5.5601,4.4351,-46.5056,13.8436,8.2717]},{name:"Hare",iau:"Lep",segments:[-1.3307,40.189,-31.8302,.2275,11.8477,-9.1268,.2275,11.8477,-9.1268,1.2277,17.497,-13.8104,1.2277,17.497,-13.8104,76.8772,507.1638,-446.8164,76.8772,507.1638,-446.8164,10.2115,39.1866,-32.8509,76.8772,507.1638,-446.8164,1.2445,25.1502,-24.5705,1.2445,25.1502,-24.5705,.5575,6.1812,-6.3861,.5575,6.1812,-6.3861,6.1882,33.9585,-33.234,6.1882,33.9585,-33.234,13.9738,43.1494,-45.2996,76.8772,507.1638,-446.8164,6.1882,33.9585,-33.234,10.2115,39.1866,-32.8509,51.1872,236.3203,-176.8951,10.2115,39.1866,-32.8509,28.2847,112.6398,-83.7919,13.9738,43.1494,-45.2996,10.2115,39.1866,-32.8509,28.2847,112.6398,-83.7919,14.2669,56.2068,-40.1845,51.1872,236.3203,-176.8951,18.4027,86.5152,-62.7166]},{name:"Scales",iau:"Lib",segments:[-25.7207,-44.3214,3.1089,-28.1316,-40.3829,3.7748,-28.1316,-40.3829,3.7748,-36.5496,-42.6005,8.3847,-36.5496,-42.6005,8.3847,-16.4089,-16.4563,.1351,-16.4089,-16.4563,.1351,-50.0788,-61.1565,-10.6092,-50.0788,-61.1565,-10.6092,-28.1316,-40.3829,3.7748]},{name:"Wolf",iau:"Lup",segments:[-27.9456,-54.4712,-14.3364,-24.7463,-57.9416,-17.5342,-24.7463,-57.9416,-17.5342,-51.5529,-114.5577,-39.4755,-51.5529,-114.5577,-39.4755,-27.9456,-54.4712,-14.3364,-51.5529,-114.5577,-39.4755,-57.3888,-105.688,-46.7536,-57.3888,-105.688,-46.7536,-71.953,-118.1412,-54.2822,-71.953,-118.1412,-54.2822,-44.026,-69.0913,-25.3264,-71.953,-118.1412,-54.2822,-60.952,-87.131,-49.6887,-57.3888,-105.688,-46.7536,-27.9733,-53.6042,-25.0001,-27.9733,-53.6042,-25.0001,-14.2717,-25.4918,-18.8505,-14.2717,-25.4918,-18.8505,-73.3549,-99.1471,-71.2808,-14.2717,-25.4918,-18.8505,-53.709,-72.8998,-56.9525,-73.3549,-99.1471,-71.2808,-55.2161,-65.2512,-47.619,-73.3549,-99.1471,-71.2808,-60.952,-87.131,-49.6887]},{name:"Lynx",iau:"Lyn",segments:[-43.1553,48.1947,20.9749,-24.7189,28.8699,13.9089,-24.7189,28.8699,13.9089,-123.0848,160.1503,77.1064,-123.0848,160.1503,77.1064,-9.9087,14.0072,7.5369,-9.9087,14.0072,7.5369,-47.908,91.7973,44.178,-47.908,91.7973,44.178,-20.2751,72.0996,38.0752,-20.2751,72.0996,38.0752,-7.0809,43.9799,31.701,-7.0809,43.9799,31.701,-2.1511,39.6538,28.4568]},{name:"Lyre",iau:"Lyr",segments:[.9606,-3.5074,6.763,7.4425,-22.7605,42.0555,7.4425,-22.7605,42.0555,50.3185,-147.1049,230.3604,50.3185,-147.1049,230.3604,43.1117,-107.1229,164.9915,43.1117,-107.1229,164.9915,44.4839,-111.9741,203.0614,44.4839,-111.9741,203.0614,7.4425,-22.7605,42.0555]},{name:"Table Mountain",iau:"Men",segments:[.9446,-5.6053,-32.1863,15.4411,-13.3335,-142.0162]},{name:"Microscope",iau:"Mic",segments:[33.345,-37.119,-13.9804,46.8788,-59.0796,-19.737,46.8788,-59.0796,-19.737,68.0483,-94.958,-32.279]},{name:"Unicorn",iau:"Mon",segments:[-12.6109,169.7342,-96.9213,-25.823,177.3205,-104.5655,-25.823,177.3205,-104.5655,-39.1584,110.361,-49.0374,-39.1584,110.361,-49.0374,-4.2857,39.1015,-13.3278,-4.2857,39.1015,-13.3278,-6.9363,165.6855,-63.394,-39.1584,110.361,-49.0374,-163.758,232.6802,-118.363,-163.758,232.6802,-118.363,-18.8357,33.5911,-22.643]},{name:"Fly",iau:"Mus",segments:[-38.2492,-45.8329,-86.0288,-16.6171,-14.4409,-35.9352,-16.6171,-14.4409,-35.9352,-35.3119,-48.6353,-99.5178,-35.3119,-48.6353,-99.5178,-33.9923,-41.0519,-80.6996,-33.9923,-41.0519,-80.6996,-38.2492,-45.8329,-86.0288]},{name:"Carpenter's Square",iau:"Nor",segments:[-37.2581,-114.7513,-77.8772,-11.5053,-35.5538,-20.0903,-11.5053,-35.5538,-20.0903,-50.7556,-164.6565,-82.1327,-50.7556,-164.6565,-82.1327,-22.8247,-59.061,-33.5391,-22.8247,-59.061,-33.5391,-11.5053,-35.5538,-20.0903,-22.8247,-59.061,-33.5391,-37.2581,-114.7513,-77.8772]},{name:"Octant",iau:"Oct",segments:[3.4869,-9.7445,-16.4217,6.5044,-19.9944,-40.6509,6.5044,-19.9944,-40.6509,-8.1315,-41.9358,-81.4718,-8.1315,-41.9358,-81.4718,3.4869,-9.7445,-16.4217]},{name:"Serpent Bearer",iau:"Oph",segments:[-1.5871,-11.9719,8.7212,-1.8309,-22.4459,11.944,-5.6025,-26.2891,3.3946,-1.8309,-22.4459,11.944,-1.5871,-11.9719,8.7212,-7.1417,-21.7489,14.2133,-7.1417,-21.7489,14.2133,-14.0202,-28.1325,9.2747,-14.0202,-28.1325,9.2747,-46.9232,-123.7161,26.6587,-46.9232,-123.7161,26.6587,-5.6025,-26.2891,3.3946,-5.6025,-26.2891,3.3946,-14.2921,-124.902,-1.5034]},{name:"Hunter",iau:"Ori",segments:[18.9185,203.2148,-96.4444,62.7751,547.8791,-251.3906,62.7751,547.8791,-251.3906,25.8681,192.8997,-84.8402,-3.722,261.5709,-17.1289,-11.1598,217.9384,-35.3451,-11.1598,217.9384,-35.3451,-5.9115,182.8639,-27.8616,-5.9115,182.8639,-27.8616,.1991,8.6478,-.4771,-11.1598,217.9384,-35.3451,-.487,46.1339,-11.3243,-.487,46.1339,-11.3243,3.1893,146.703,-42.1512,3.1893,146.703,-42.1512,18.9185,203.2148,-96.4444,18.9185,203.2148,-96.4444,10.4441,165.9412,-108.2683,10.4441,165.9412,-108.2683,51.6011,220.5144,-136.739,51.6011,220.5144,-136.739,25.8681,192.8997,-84.8402,25.8681,192.8997,-84.8402,11.6585,73.1666,-22.3916,11.6585,73.1666,-22.3916,35.9075,325.6016,-77.8549,35.9075,325.6016,-77.8549,3.1893,146.703,-42.1512,11.6585,73.1666,-22.3916,2.4005,7.3551,-2.1288,2.4005,7.3551,-2.1288,76.009,235.34,-74.535,76.009,235.34,-74.535,53.7285,168.044,-63.9057,53.7285,168.044,-63.9057,62.9115,212.9095,-84.5625,2.4005,7.3551,-2.1288,19.762,62.1737,-15.6427,19.762,62.1737,-15.6427,10.2152,34.6962,-7.9299,-5.9115,182.8639,-27.8616,-.487,46.1339,-11.3243]},{name:"Peacock",iau:"Pav",segments:[17.8502,-40.4385,-32.4319,3.0248,-5.5463,-6.7681,3.0248,-5.5463,-6.7681,11.1754,-26.9876,-30.1999,11.1754,-26.9876,-30.1999,1.3118,-4.1322,-4.2901,1.3118,-4.1322,-4.2901,17.8502,-40.4385,-32.4319,1.3118,-4.1322,-4.2901,4.7215,-19.6216,-24.8212,4.7215,-19.6216,-24.8212,3.9246,-43.839,-49.1925,3.9246,-43.839,-49.1925,18.1454,-135.5407,-132.8475,18.1454,-135.5407,-132.8475,1.3118,-4.1322,-4.2901,18.1454,-135.5407,-132.8475,35.4532,-258.6422,-212.1701,35.4532,-258.6422,-212.1701,10.9638,-178.2831,-140.1845,10.9638,-178.2831,-140.1845,.6815,-31.3271,-26.5159,.6815,-31.3271,-26.5159,35.4532,-258.6422,-212.1701,.6815,-31.3271,-26.5159,-2.9963,-84.6765,-74.4621]},{name:"Winged Horse",iau:"Peg",segments:[138.6825,22.3525,31.3991,38.3114,-4.3748,13.5838,51.4333,-.5618,31.078,49.0523,-3.6769,34.5817,49.0523,-3.6769,34.5817,65.6747,-12.3394,58.1956,51.4333,-.5618,31.078,29.9698,-2.946,16.9594,29.9698,-2.946,16.9594,101.1674,-12.323,56.0198,101.1674,-12.323,56.0198,9.477,-2.6445,6.7006,9.477,-2.6445,6.7006,25.6259,-9.8707,20.4232,38.3114,-4.3748,13.5838,15.233,-3.2524,5.183,15.233,-3.2524,5.183,57.9621,-14.2888,19.0283,57.9621,-14.2888,19.0283,23.9945,-10.2677,7.652,23.9945,-10.2677,7.652,172.7699,-92.309,79.5396,25.9747,6.6249,12.8897,51.4333,-.5618,31.078,25.9747,6.6249,12.8897,138.6825,22.3525,31.3991,51.4333,-.5618,31.078,38.3114,-4.3748,13.5838]},{name:"Hero",iau:"Per",segments:[156.0846,283.2515,69.8314,114.9622,226.8368,50.9699,114.9622,226.8368,50.9699,167.1284,357.9585,105.439,167.1284,357.9585,105.439,72.9911,161.4906,61.4183,72.9911,161.4906,61.4183,60.5943,128.7813,73.4646,60.5943,128.7813,73.4646,62.8851,118.6738,77.9341,62.8851,118.6738,77.9341,29.1426,50.5204,40.1297,29.1426,50.5204,40.1297,126.2335,207.6325,186.3338,62.8851,118.6738,77.9341,14.1894,21.17,10.5192,14.1894,21.17,10.5192,50.7721,72.2704,33.1535,50.7721,72.2704,33.1535,22.3295,28.4122,13.8305]},{name:"Phoenix",iau:"Phe",segments:[48.6142,-15.4408,-73.2038,985.9208,-166.0635,-1118.2053,985.9208,-166.0635,-1118.2053,17.2205,-4.77,-15.9735,17.2205,-4.77,-15.9735,48.6142,-15.4408,-73.2038,985.9208,-166.0635,-1118.2053,26.4925,-2.9613,-34.8446,26.4925,-2.9613,-34.8446,62.3225,1.4348,-81.446,62.3225,1.4348,-81.446,985.9208,-166.0635,-1118.2053,985.9208,-166.0635,-1118.2053,50.4551,-1.6354,-55.2555,50.4551,-1.6354,-55.2555,17.2205,-4.77,-15.9735,17.2205,-4.77,-15.9735,19.0832,-4.9374,-16.9146,19.0832,-4.9374,-16.9146,30.84,-11.4399,-29.5717,30.84,-11.4399,-29.5717,17.2205,-4.77,-15.9735]},{name:"Painter's Easel",iau:"Pic",segments:[-2.9064,2.1027,-29.3852,1.4056,10.2361,-55.9484,1.4056,10.2361,-55.9484,.6842,5.2278,-18.9134]},{name:"Southern Fish",iau:"PsA",segments:[6.4504,-3.1656,-2.7777,141.4775,-77.3646,-50.1412,141.4775,-77.3646,-50.1412,191.2311,-147.9429,-66.0095,191.2311,-147.9429,-66.0095,70.7783,-62.3824,-28.0426,70.7783,-62.3824,-28.0426,13.8055,-10.5335,-6.2569,13.8055,-10.5335,-6.2569,35.4394,-22.8558,-16.4974,35.4394,-22.8558,-16.4974,42.2878,-22.3005,-20.9268]},{name:"Fishes",iau:"Psc",segments:[96.7799,49.7652,46.3746,105.4541,52.4839,32.674,96.7799,49.7652,46.3746,82.3632,45.2572,29.569,82.3632,45.2572,29.569,105.4541,52.4839,32.674,105.4541,52.4839,32.674,101.7384,51.4273,10.7311,101.7384,51.4273,10.7311,70.608,37.1378,-2.2566,70.608,37.1378,-2.2566,39.7287,22.3665,-7.2707,39.7287,22.3665,-7.2707,52.7109,27.464,-8.2702,52.7109,27.464,-8.2702,100.7571,48.0728,-9.1668,100.7571,48.0728,-9.1668,98.5432,42.104,-5.736,98.5432,42.104,-5.736,53.5401,16.9072,1.072,53.5401,16.9072,1.072,89.2427,22.4946,3.4979,89.2427,22.4946,3.4979,139.6701,19.5768,13.5118,139.6701,19.5768,13.5118,32.7917,1.4796,3.6604,32.7917,1.4796,3.6604,13.5366,-.5568,1.7005,13.5366,-.5568,1.7005,31.9406,-1.9043,1.9108,31.9406,-1.9043,1.9108,48.7006,-6.0629,3.8042,48.7006,-6.0629,3.8042,40.5431,-6.0931,5.2208,40.5431,-6.0931,5.2208,51.1405,-4.3043,8.159,51.1405,-4.3043,8.159,13.5366,-.5568,1.7005]},{name:"Stern",iau:"Pup",segments:[-9.3661,10.6279,-13.3354,-25.6575,35.3426,-43.6826,-25.6575,35.3426,-43.6826,-45.7183,78.2353,-148.0133,-45.7183,78.2353,-148.0133,-13.558,43.9401,-103.6433,-13.558,43.9401,-103.6433,-7.3125,13.9127,-50.9419,-7.3125,13.9127,-50.9419,-16.2271,20.2616,-52.6958,-16.2271,20.2616,-52.6958,-130.675,115.4053,-282.8069,-130.675,115.4053,-282.8069,-9.3661,10.6279,-13.3354]},{name:"Compass",iau:"Pyx",segments:[-62.0379,40.5952,-92.0652,-133.3514,88.2619,-183.4617,-133.3514,88.2619,-183.4617,-38.6499,26.5963,-44.1988]},{name:"Reticle",iau:"Ret",segments:[10.099,1.3307,-48.0897,4.109,1.4637,-17.9171,4.109,1.4637,-17.9171,40.0135,4.9516,-160.6295,40.0135,4.9516,-160.6295,7.8095,-1.1818,-31.8874,7.8095,-1.1818,-31.8874,10.099,1.3307,-48.0897]},{name:"Sculptor",iau:"Scl",segments:[44.0574,-18.4873,-29.5181,182.4239,1.5688,-116.2803,182.4239,1.5688,-116.2803,47.9744,-20.3657,-25.069,47.9744,-20.3657,-25.069,44.0574,-18.4873,-29.5181]},{name:"Scorpion",iau:"Sco",segments:[-16.0486,-169.3256,-41.7404,-8.7851,-142.3891,-39.9504,-8.7851,-142.3891,-39.9504,-29.2027,-674.9347,-202.8647,-29.2027,-674.9347,-202.8647,-6.6541,-86.4656,-30.957,-6.6541,-86.4656,-30.957,-3.3876,-20.7841,-7.7411,-3.3876,-20.7841,-7.7411,-314.8104,-1377.0533,-504.5975,-314.8104,-1377.0533,-504.5975,-123.1415,-499.6708,-141.9741,-123.1415,-499.6708,-141.9741,-4.8422,-18.5034,-3.9743,-4.8422,-18.5034,-3.9743,-45.96,-137.0175,-15.4969,-45.96,-137.0175,-15.4969,-58.5426,-158.7916,-13.5274,-58.5426,-158.7916,-13.5274,-69.3327,-133.592,-5.2193,-58.5426,-158.7916,-13.5274,-81.3015,-159.1502,-17.1307,-58.5426,-158.7916,-13.5274,-55.8814,-110.5786,2.1794]},{name:"Shield",iau:"Sct",segments:[41.9547,-191.1382,64.2861,80.7398,-368.0157,116.8143,80.7398,-368.0157,116.8143,128.9211,-546.5219,71.0179,128.9211,-546.5219,71.0179,11.8673,-94.656,14.5852,11.8673,-94.656,14.5852,8.558,-53.9324,14.5504,8.558,-53.9324,14.5504,41.9547,-191.1382,64.2861]},{name:"Serpent",iau:"Ser",segments:[-27.9632,-41.3621,14.5414,-11.7509,-16.3719,8.9753,-11.7509,-16.3719,8.9753,-12.623,-16.2004,9.7995,-12.623,-16.2004,9.7995,-40.7006,-45.7484,33.7751,-40.7006,-45.7484,33.7751,-24.6108,-29.2765,26.1162,-24.6108,-29.2765,26.1162,-5.5187,-7.2657,6.4352,-5.5187,-7.2657,6.4352,-60.4229,-71.4399,70.7907,-60.4229,-71.4399,70.7907,-24.6108,-29.2765,26.1162,9.9795,-35.372,18.6275,1.7683,-17.7811,6.658,1.7683,-17.7811,6.658,-3.8584,-47.8886,8.8955,-3.8584,-47.8886,8.8955,-2.8628,-29.9835,4.1981,-2.8628,-29.9835,4.1981,-10.3778,-60.6981,11.1499]},{name:"Sextant",iau:"Sex",segments:[-103.9728,38.8737,-18.2169,-115.2754,55.935,-25.174]},{name:"Arrow",iau:"Sge",segments:[55.1846,-91.0992,83.8698,71.7541,-108.8736,105.2616,71.7541,-108.8736,105.2616,52.6849,-87.4353,82.0529,71.7541,-108.8736,105.2616,41.1827,-54.5649,55.7351,41.1827,-54.5649,55.7351,23.3894,-28.7921,30.3398]},{name:"Archer",iau:"Sgr",segments:[10.1133,-126.2238,-14.3653,2.5619,-23.1417,-.8682,2.5771,-40.6481,-9.6866,3.8172,-42.9526,-8.4225,3.8172,-42.9526,-8.4225,.6771,-30.751,-3.7718,.6771,-30.751,-3.7718,-17.0995,-354.945,-27.4759,.6771,-30.751,-3.7718,10.1133,-126.2238,-14.3653,10.1133,-126.2238,-14.3653,3.8172,-42.9526,-8.4225,3.8172,-42.9526,-8.4225,6.3263,-26.0731,-3.3793,6.3263,-26.0731,-3.3793,14.5077,-80.7811,-5.673,14.5077,-80.7811,-5.673,10.1133,-126.2238,-14.3653,14.5077,-80.7811,-5.673,2.5619,-23.1417,-.8682,2.5619,-23.1417,-.8682,84.0149,-1496.3903,61.2983,6.3263,-26.0731,-3.3793,9.0049,-33.9999,-3.1321,9.0049,-33.9999,-3.1321,14.9509,-68.0836,-4.2018,14.9509,-68.0836,-4.2018,14.5077,-80.7811,-5.673,14.9509,-68.0836,-4.2018,27.6505,-115.6067,3.4474,27.6505,-115.6067,3.4474,10.8638,-40.5611,.6303,10.8638,-40.5611,.6303,46.3737,-139.8233,8.3872,46.3737,-139.8233,8.3872,13.2826,-37.6132,2.9461,9.0049,-33.9999,-3.1321,29.9985,-75.2999,-4.3501,29.9985,-75.2999,-4.3501,62.1268,-121.5851,-17.0218,62.1268,-121.5851,-17.0218,83.784,-180.7447,-51.0979,83.784,-180.7447,-51.0979,22.1462,-53.3168,-21.7686,22.1462,-53.3168,-21.7686,15.0028,-50.2112,-17.4126,22.1462,-53.3168,-21.7686,10.7884,-38.0485,-16.3792]},{name:"Bull",iau:"Tau",segments:[5.2816,40.527,3.8526,37.2301,115.637,1.5137,37.2301,115.637,1.5137,16.3959,41.549,-2.0027,7.027,19.0878,-1.9468,12.3919,135.7611,-5.2266,18.8226,41.8934,-4.6103,19.2949,45.1724,-3.4086,18.8226,41.8934,-4.6103,60.407,107.3563,-17.2243,60.407,107.3563,-17.2243,41.0374,50.9739,-10.7564,7.027,19.0878,-1.9468,16.3959,41.549,-2.0027,7.027,19.0878,-1.9468,17.1129,42.2751,-4.6636,17.1129,42.2751,-4.6636,18.8226,41.8934,-4.6103,16.3959,41.549,-2.0027,18.084,43.7341,-3.0501,18.084,43.7341,-3.0501,19.2949,45.1724,-3.4086,19.2949,45.1724,-3.4086,60.7823,106.8048,8.4154]},{name:"Telescope",iau:"Tel",segments:[3.0787,-33.5918,-16.2795,6.9938,-78.775,-32.9974]},{name:"Southern Triangle",iau:"Tra",segments:[-13.1274,-81.9196,-86.368,-13.6797,-36.3816,-43.324,-13.6797,-36.3816,-43.324,-2.88,-8.7809,-8.305,-2.88,-8.7809,-8.305,-13.1274,-81.9196,-86.368]},{name:"Triangle",iau:"Tri",segments:[24.513,23.2767,11.6054,26.9097,24.5311,13.6727,26.9097,24.5311,13.6727,14.9217,11.1876,5.6309,14.9217,11.1876,5.6309,24.513,23.2767,11.6054]},{name:"Toucan",iau:"Tuc",segments:[25.2765,-30.4766,-40.1566,11.7369,-9.6958,-16.8189,11.7369,-9.6958,-16.8189,3.6406,-2.8065,-7.2769,11.7369,-9.6958,-16.8189,19.7186,-13.007,-36.8674]},{name:"Great Bear",iau:"UMa",segments:[-18.5296,.9928,25.9075,-14.1158,3.598,21.9079,-14.1158,3.598,21.9079,-13.776,5.3065,20.5587,-13.776,5.3065,20.5587,-13.4629,7.4427,19.4483,-13.4629,7.4427,19.4483,-17.2987,17.1799,28.7282,-17.2987,17.1799,28.7282,-13.8827,11.8844,18.3598,-13.8827,11.8844,18.3598,-15.0949,8.5483,18.6951,-15.0949,8.5483,18.6951,-13.4629,7.4427,19.4483,-15.0949,8.5483,18.6951,-40.8039,20.2019,40.3447,-40.8039,20.2019,40.3447,-29.9706,18.1415,25.0241,-29.9706,18.1415,25.0241,-45.6298,38.903,34.4596,-29.9706,18.1415,25.0241,-38.3157,30.7683,27.2368,-13.8827,11.8844,18.3598,-77.6666,94.726,96.6065,-77.6666,94.726,96.6065,-6.7267,8.8415,7.7489,-6.7267,8.8415,7.7489,-53.6678,79.7556,53.2414,-6.7267,8.8415,7.7489,-6.8358,10.6072,7.1614,-77.6666,94.726,96.6065,-15.3314,20.8958,23.8756,-15.3314,20.8958,23.8756,-16.6279,39.1808,36.024,-16.6279,39.1808,36.024,-8.5825,14.3843,16.8491,-8.5825,14.3843,16.8491,-17.2987,17.1799,28.7282]},{name:"Little Bear",iau:"UMi",segments:[1.3431,53.7124,121.2552,-.4027,19.1745,52.5366,-.4027,19.1745,52.5366,-4.458,27.7195,97.4168,-4.458,27.7195,97.4168,-13.0114,25.0968,106.4083,-13.0114,25.0968,106.4083,-3.1842,5.4457,29.2506,-3.1842,5.4457,29.2506,-30.2676,23.9914,146.6072,-30.2676,23.9914,146.6072,-8.0581,8.5453,38.3879,-8.0581,8.5453,38.3879,-13.0114,25.0968,106.4083]},{name:"Sails",iau:"Vel",segments:[-124.3,79.6474,-309.0123,-54.8027,14.9573,-129.2654,-54.8027,14.9573,-129.2654,-9.394,1.8349,-22.7673,-9.394,1.8349,-22.7673,-77.6577,1.5019,-157.3078,-77.6577,1.5019,-157.3078,-261.7202,-27.2611,-454.8571,-261.7202,-27.2611,-454.8571,-21.2588,-3.9461,-26.7846,-21.2588,-3.9461,-26.7846,-16.6506,-2.1599,-20.7778,-16.6506,-2.1599,-20.7778,-21.015,1.1029,-23.5852,-21.015,1.1029,-23.5852,-11.3825,3.1056,-14.6555,-11.3825,3.1056,-14.6555,-88.6625,30.2045,-138.1928,-88.6625,30.2045,-138.1928,-124.3,79.6474,-309.0123]},{name:"Maiden",iau:"Vir",segments:[-100.7276,10.304,8.1223,-114.5886,-9.2127,2.2725,-114.5886,-9.2127,2.2725,-11.8183,-2.114,.5851,-11.8183,-2.114,.5851,-69.9908,-30.93,-2.745,-69.9908,-30.93,-2.745,-71.0336,-48.8086,4.3856,-71.0336,-48.8086,4.3856,-18.1594,-12.1553,2.7604,-18.1594,-12.1553,2.7604,-14.4439,-12.1763,3.2197,-69.9908,-30.93,-2.745,-20.9342,-8.515,3.4326,-20.9342,-8.515,3.4326,-59.9382,-31.5333,15.7139,-59.9382,-31.5333,15.7139,-30.7984,-24.5133,12.1105,-20.9342,-8.515,3.4326,-55.6692,-11.2865,8.6041,-55.6692,-11.2865,8.6041,-31.3083,-5.4868,9.2375,-55.6692,-11.2865,8.6041,-11.8183,-2.114,.5851]},{name:"Flying Fish",iau:"Vol",segments:[-5.7263,-5.8804,-43.8055,-4.0299,-3.3646,-40.5151,-4.0299,-3.3646,-40.5151,-38.167,-17.1271,-193.1621,-38.167,-17.1271,-193.1621,-5.7263,-5.8804,-43.8055,-38.167,-17.1271,-193.1621,-25.9818,-9.1616,-208.6176,-38.167,-17.1271,-193.1621,-7.9524,-2.1564,-32.0566,-7.9524,-2.1564,-32.0566,-11.0173,-4.1397,-36.6604,-11.0173,-4.1397,-36.6604,-38.167,-17.1271,-193.1621]},{name:"Fox",iau:"Vul",segments:[30.5619,-54.0014,63.9373,33.1894,-38.3825,54.3975]}],Ta=[{hip:677,pos:[25.9747,6.6249,12.8897],mag:2.06,ci:-.043,trueDistPc:29.74},{hip:746,pos:[8.5999,6.0479,13.0833],mag:2.27,ci:.339,trueDistPc:16.78},{hip:765,pos:[30.84,-11.4399,-29.5717],mag:3.87,ci:.917,trueDistPc:44.23},{hip:1067,pos:[138.6825,22.3525,31.3991],mag:2.84,ci:-.146,trueDistPc:143.94},{hip:1562,pos:[84.1581,1.3457,-14.8741],mag:3.55,ci:1.087,trueDistPc:85.47},{hip:1599,pos:[3.6406,-2.8065,-7.2769],mag:4.23,ci:.535,trueDistPc:8.61},{hip:1645,pos:[139.6701,19.5768,13.5118],mag:5.37,ci:1.209,trueDistPc:141.68},{hip:2021,pos:[1.6352,-2.7245,-6.7481],mag:2.79,ci:.577,trueDistPc:7.46},{hip:2072,pos:[17.2205,-4.77,-15.9735],mag:3.94,ci:.195,trueDistPc:23.97},{hip:2081,pos:[19.0832,-4.9374,-16.9146],mag:2.38,ci:.976,trueDistPc:25.97},{hip:2484,pos:[19.7186,-13.007,-36.8674],mag:4.289,ci:.016,trueDistPc:43.79},{hip:3092,pos:[26.7885,10.7218,13.0592],mag:3.28,ci:1.138,trueDistPc:31.67},{hip:3179,pos:[38.5213,29.8626,51.5819],mag:2.23,ci:1.045,trueDistPc:70.97},{hip:3419,pos:[27.5835,1.2446,-10.4796],mag:2.01,ci:.908,trueDistPc:29.53},{hip:3786,pos:[89.2427,22.4946,3.4979],mag:4.44,ci:1.333,trueDistPc:92.1},{hip:3881,pos:[127.198,70.9409,93.0072],mag:4.53,ci:-.078,trueDistPc:172.81},{hip:4427,pos:[79.8367,76.9122,126.698],mag:2.39,ci:-.035,trueDistPc:168.35},{hip:4436,pos:[28.4124,15.8631,18.5299],mag:3.87,ci:.152,trueDistPc:37.45},{hip:4577,pos:[182.4239,1.5688,-116.2803],mag:4.27,ci:-.103,trueDistPc:216.34},{hip:4889,pos:[96.7799,49.7652,46.3746],mag:5.5,ci:.007,trueDistPc:118.29},{hip:4906,pos:[53.5401,16.9072,1.072],mag:4.28,ci:.866,trueDistPc:56.16},{hip:5165,pos:[985.9208,-166.0635,-1118.2053],mag:3.3,ci:.807,trueDistPc:8333.33},{hip:5348,pos:[48.6142,-15.4408,-73.2038],mag:4.014,ci:-.04,trueDistPc:89.22},{hip:5364,pos:[34.7557,7.2403,-10.2594],mag:3.45,ci:1.036,trueDistPc:36.95},{hip:5447,pos:[46.9464,27.549,26.482],mag:2.05,ci:1.384,trueDistPc:60.53},{hip:5742,pos:[105.4541,52.4839,32.674],mag:4.66,ci:.926,trueDistPc:122.24},{hip:6193,pos:[82.3632,45.2572,29.569],mag:4.748,ci:.085,trueDistPc:98.52},{hip:6537,pos:[31.8262,9.2621,-9.3591],mag:3.59,ci:.951,trueDistPc:34.44},{hip:6686,pos:[14.0824,15.6017,22.073],mag:2.68,ci:.16,trueDistPc:30.48},{hip:6867,pos:[50.4551,-1.6354,-55.2555],mag:3.42,ci:1.384,trueDistPc:74.84},{hip:7007,pos:[98.5432,42.104,-5.736],mag:4.84,ci:1.223,trueDistPc:107.31},{hip:7083,pos:[26.4925,-2.9613,-34.8446],mag:3.935,ci:.886,trueDistPc:43.87},{hip:7097,pos:[101.7384,51.4273,10.7311],mag:3.62,ci:.883,trueDistPc:114.5},{hip:7588,pos:[21.0655,-5.522,-36.7913],mag:.46,ci:-.086,trueDistPc:42.75},{hip:7884,pos:[100.7571,48.0728,-9.1668],mag:4.44,ci:1.214,trueDistPc:112.01},{hip:8102,pos:[3.1559,1.0144,-1.5328],mag:3.5,ci:.662,trueDistPc:3.65},{hip:8198,pos:[70.608,37.1378,-2.2566],mag:4.26,ci:.866,trueDistPc:79.81},{hip:8645,pos:[67.5396,27.2194,-26.9862],mag:3.72,ci:1.019,trueDistPc:77.66},{hip:8796,pos:[14.9217,11.1876,5.6309],mag:3.42,ci:.458,trueDistPc:19.48},{hip:8832,pos:[41.7697,27.3173,6.2717],mag:4.562,ci:-.028,trueDistPc:50.3},{hip:8833,pos:[52.7109,27.464,-8.2702],mag:4.604,ci:.856,trueDistPc:60.01},{hip:8837,pos:[62.3225,1.4348,-81.446],mag:4.41,ci:1.402,trueDistPc:102.57},{hip:8886,pos:[55.6026,78.7157,105.3508],mag:3.37,ci:-.077,trueDistPc:142.78},{hip:8903,pos:[14.7527,9.9396,2.6545],mag:2.65,ci:.16,trueDistPc:17.99},{hip:9007,pos:[9.5551,-.6267,-14.755],mag:3.71,ci:.764,trueDistPc:17.59},{hip:9236,pos:[8.0221,-2.5883,-17.4696],mag:2.84,ci:.297,trueDistPc:19.4},{hip:9487,pos:[39.7287,22.3665,-7.2707],mag:4.155,ci:-.062,trueDistPc:46.17},{hip:9640,pos:[76.3681,74.3307,56.2028],mag:2.1,ci:1.07,trueDistPc:120.48},{hip:9884,pos:[15.7321,12.1427,3.4917],mag:2.01,ci:1.036,trueDistPc:20.18},{hip:10064,pos:[26.9097,24.5311,13.6727],mag:3,ci:.169,trueDistPc:38.9},{hip:10324,pos:[79.3152,53.5821,-7.1415],mag:4.35,ci:.798,trueDistPc:95.98},{hip:10602,pos:[23.7559,.4146,-39.52],mag:3.57,ci:-.052,trueDistPc:46.11},{hip:10670,pos:[24.513,23.2767,11.6054],mag:4,ci:.067,trueDistPc:35.74},{hip:10826,pos:[75.1307,46.0798,-25.1676],mag:6.53,ci:.985,trueDistPc:91.66},{hip:11001,pos:[12.7363,-7.5995,-40.3145],mag:4.09,ci:.075,trueDistPc:42.96},{hip:11345,pos:[135.3154,77.2385,-73.452],mag:4.866,ci:.029,trueDistPc:172.25},{hip:11407,pos:[86.9013,12.1135,-135.1755],mag:4.25,ci:-.069,trueDistPc:161.16},{hip:11484,pos:[47.6537,36.5263,-6.1577],mag:4.3,ci:.007,trueDistPc:60.36},{hip:11767,pos:[1.3431,53.7124,121.2552],mag:2.02,ci:.56,trueDistPc:132.63},{hip:11783,pos:[17.5219,10.1585,-11.0112],mag:4.75,ci:.432,trueDistPc:23.05},{hip:12093,pos:[95.6428,75.7716,-19.7204],mag:4.871,ci:.79,trueDistPc:123.6},{hip:12387,pos:[149.5714,115.0665,-48.6695],mag:4.07,ci:-.137,trueDistPc:194.89},{hip:12390,pos:[17.6728,11.6269,-10.3186],mag:4.87,ci:.441,trueDistPc:23.54},{hip:12394,pos:[13.3224,-7.1094,-44.3991],mag:4.096,ci:.008,trueDistPc:46.9},{hip:12413,pos:[24.8917,7.1304,-35.9687],mag:4.75,ci:.101,trueDistPc:44.32},{hip:12484,pos:[21.9024,.948,-44.2868],mag:5.21,ci:.39,trueDistPc:49.42},{hip:12486,pos:[26.3235,8.9467,-35.2219],mag:4.116,ci:.898,trueDistPc:44.87},{hip:12706,pos:[18.4404,15.1648,-5.0731],mag:3.47,ci:.126,trueDistPc:24.41},{hip:12770,pos:[87.1675,58.2562,-56.3289],mag:4.236,ci:-.055,trueDistPc:119.02},{hip:12828,pos:[19.6933,17.6956,-2.5804],mag:4.26,ci:.313,trueDistPc:26.6},{hip:12843,pos:[10.1705,6.382,-7.723],mag:4.46,ci:.458,trueDistPc:14.28},{hip:13147,pos:[33.8427,16.6781,-38.8736],mag:4.46,ci:.891,trueDistPc:54.17},{hip:13209,pos:[33.2876,37.2348,9.2114],mag:3.594,ci:-.032,trueDistPc:50.79},{hip:13254,pos:[22.3295,28.4122,13.8305],mag:4.14,ci:.504,trueDistPc:38.69},{hip:13268,pos:[126.2335,207.6325,186.3338],mag:3.79,ci:1.487,trueDistPc:306.21},{hip:13701,pos:[29.2925,23.5097,-17.1541],mag:3.87,ci:1.002,trueDistPc:41.29},{hip:13847,pos:[26.8574,11.5513,-39.8588],mag:3.228,ci:.42,trueDistPc:49.43},{hip:13954,pos:[95.5438,95.8551,-18.5053],mag:4.7,ci:-.052,trueDistPc:136.6},{hip:14135,pos:[53.3427,52.0916,-16.6461],mag:2.53,ci:1.444,trueDistPc:76.39},{hip:14146,pos:[17.349,11.9391,-16.9971],mag:4.09,ci:.186,trueDistPc:27.06},{hip:14240,pos:[15.1763,-.4981,-40.5242],mag:5.122,ci:.332,trueDistPc:43.28},{hip:14328,pos:[29.1426,50.5204,40.1297],mag:2.93,ci:.645,trueDistPc:70.8},{hip:14354,pos:[50.7721,72.2704,33.1535],mag:3.39,ci:1.452,trueDistPc:94.34},{hip:14576,pos:[14.1894,21.17,10.5192],mag:2.12,ci:.008,trueDistPc:27.57},{hip:14879,pos:[8.1907,5.653,-9.8452],mag:3.98,ci:.501,trueDistPc:14},{hip:15197,pos:[23.6847,22.7349,-15.957],mag:4.8,ci:.246,trueDistPc:36.5},{hip:15474,pos:[56.3803,47.4932,-58.6514],mag:3.7,ci:1.427,trueDistPc:94.2},{hip:15510,pos:[2.8379,1.46,-5.1296],mag:4.27,ci:.654,trueDistPc:6.04},{hip:15863,pos:[62.8851,118.6738,77.9341],mag:1.79,ci:.458,trueDistPc:155.28},{hip:15900,pos:[41.0374,50.9739,-10.7564],mag:3.6,ci:.806,trueDistPc:66.32},{hip:16228,pos:[291.1956,672.3074,604.6408],mag:4.22,ci:.399,trueDistPc:949.94},{hip:16537,pos:[1.9011,2.1238,-1.4975],mag:3.73,ci:.798,trueDistPc:3.22},{hip:16611,pos:[54.3226,52.8356,-62.3343],mag:4.25,ci:-.035,trueDistPc:98.12},{hip:17358,pos:[60.5943,128.7813,73.4646],mag:3.01,ci:-.052,trueDistPc:160.17},{hip:17378,pos:[5.0331,6.1849,-4.3614],mag:3.54,ci:.832,trueDistPc:9.09},{hip:17440,pos:[7.8095,-1.1818,-31.8874],mag:3.833,ci:1.015,trueDistPc:32.85},{hip:17448,pos:[156.0846,283.2515,69.8314],mag:3.91,ci:.05,trueDistPc:330.86},{hip:17651,pos:[8.9684,9.7397,-11.8744],mag:4.2,ci:.433,trueDistPc:17.78},{hip:17678,pos:[9.8608,-11.5567,-64.5525],mag:3.26,ci:1.427,trueDistPc:66.32},{hip:17797,pos:[21.7991,18.6551,-41.8437],mag:4.27,ci:.042,trueDistPc:50.74},{hip:17847,pos:[60.7823,106.8048,8.4154],mag:3.63,ci:-.027,trueDistPc:123.18},{hip:17874,pos:[29.0556,25.9406,-54.2246],mag:4.17,ci:.857,trueDistPc:66.76},{hip:17959,pos:[20.3155,73.9849,90.2028],mag:4.604,ci:.093,trueDistPc:118.42},{hip:18246,pos:[114.9622,226.8368,50.9699],mag:2.85,ci:.152,trueDistPc:259.36},{hip:18505,pos:[27.28,84.1613,78.3586],mag:5.04,ci:-.035,trueDistPc:118.18},{hip:18532,pos:[72.9911,161.4906,61.4183],mag:2.89,ci:-.103,trueDistPc:187.56},{hip:18597,pos:[40.0135,4.9516,-160.6295],mag:4.57,ci:1.427,trueDistPc:165.61},{hip:18614,pos:[167.1284,357.9585,105.439],mag:4.06,ci:.067,trueDistPc:408.88},{hip:18724,pos:[60.407,107.3563,-17.2243],mag:3.41,ci:-.052,trueDistPc:124.38},{hip:19747,pos:[11.906,12.2534,-31.7713],mag:3.86,ci:.985,trueDistPc:36.07},{hip:19780,pos:[10.099,1.3307,-48.0897],mag:3.36,ci:.824,trueDistPc:49.16},{hip:19893,pos:[5.5753,4.1324,-19.2144],mag:4.2,ci:.348,trueDistPc:20.43},{hip:19921,pos:[4.109,1.4637,-17.9171],mag:4.44,ci:.968,trueDistPc:18.44},{hip:20042,pos:[19.4618,25.3656,-43.9482],mag:3.56,ci:-.052,trueDistPc:54.35},{hip:20205,pos:[18.8226,41.8934,-4.6103],mag:3.65,ci:.891,trueDistPc:46.16},{hip:20455,pos:[19.2949,45.1724,-3.4086],mag:3.76,ci:.883,trueDistPc:49.24},{hip:20535,pos:[30.2877,42.4416,-73.2],mag:3.96,ci:1.316,trueDistPc:89.87},{hip:20648,pos:[18.084,43.7341,-3.0501],mag:4.298,ci:.11,trueDistPc:47.42},{hip:20889,pos:[16.3959,41.549,-2.0027],mag:3.53,ci:.908,trueDistPc:44.71},{hip:20894,pos:[17.1129,42.2751,-4.6636],mag:3.41,ci:.211,trueDistPc:45.85},{hip:21060,pos:[56.1269,66.8497,-190.0001],mag:5.059,ci:-.116,trueDistPc:209.09},{hip:21281,pos:[10.8578,8.4311,-49.8454],mag:3.28,ci:-.035,trueDistPc:51.71},{hip:21393,pos:[20.0748,34.6103,-50.8762],mag:3.82,ci:.883,trueDistPc:64.72},{hip:21421,pos:[7.027,19.0878,-1.9468],mag:.86,ci:1.359,trueDistPc:20.43},{hip:21444,pos:[74.3223,173.5311,-88.5244],mag:3.928,ci:-.112,trueDistPc:208.5},{hip:21594,pos:[11.7269,25.4427,-20.3561],mag:3.87,ci:.977,trueDistPc:34.63},{hip:21770,pos:[5.1567,7.6879,-18.1589],mag:4.45,ci:.339,trueDistPc:20.38},{hip:21861,pos:[7.6828,12.9813,-24.6444],mag:5.05,ci:.364,trueDistPc:28.89},{hip:21881,pos:[37.2301,115.637,1.5137],mag:4.258,ci:-.052,trueDistPc:121.49},{hip:21949,pos:[15.4411,-13.3335,-142.0162],mag:5.511,ci:-.052,trueDistPc:143.47},{hip:22109,pos:[54.8554,145.4538,-73.708],mag:4,ci:-.061,trueDistPc:172.04},{hip:22449,pos:[2.4005,7.3551,-2.1288],mag:3.19,ci:.424,trueDistPc:8.02},{hip:22509,pos:[19.762,62.1737,-15.6427],mag:4.35,ci:.059,trueDistPc:67.09},{hip:22549,pos:[76.009,235.34,-74.535],mag:3.68,ci:-.103,trueDistPc:258.3},{hip:22701,pos:[19.2383,56.0186,-31.2216],mag:4.4,ci:.254,trueDistPc:66.96},{hip:22730,pos:[53.7285,168.044,-63.9057],mag:5.324,ci:1.415,trueDistPc:187.64},{hip:22783,pos:[170.822,1076.0472,1030.991],mag:4.29,ci:.093,trueDistPc:1690.33},{hip:22845,pos:[10.2152,34.6962,-7.9299],mag:4.648,ci:.114,trueDistPc:37.03},{hip:23015,pos:[31.3476,131.9866,25.0313],mag:2.69,ci:1.35,trueDistPc:137.95},{hip:23123,pos:[62.9115,212.9095,-84.5625],mag:4.459,ci:1.235,trueDistPc:237.57},{hip:23453,pos:[131.4405,653.8382,219.3016],mag:3.75,ci:1.087,trueDistPc:702.05},{hip:23685,pos:[13.9738,43.1494,-45.2996],mag:3.18,ci:1.291,trueDistPc:64.1},{hip:23875,pos:[6.1994,23.5903,-12.8937],mag:2.79,ci:.161,trueDistPc:27.59},{hip:23972,pos:[59.993,227.2791,-144.2905],mag:4.27,ci:-.12,trueDistPc:275.82},{hip:24244,pos:[14.2669,56.2068,-40.1845],mag:4.45,ci:-.035,trueDistPc:70.55},{hip:24305,pos:[10.2115,39.1866,-32.8509],mag:3.29,ci:-.043,trueDistPc:52.14},{hip:24327,pos:[28.2847,112.6398,-83.7919],mag:4.44,ci:-.027,trueDistPc:143.21},{hip:24436,pos:[51.6011,220.5144,-136.739],mag:.13,ci:.025,trueDistPc:264.55},{hip:24608,pos:[1.7126,11.9703,5.0991],mag:.08,ci:.73,trueDistPc:13.12},{hip:24845,pos:[51.1872,236.3203,-176.8951],mag:4.29,ci:-.162,trueDistPc:299.6},{hip:24873,pos:[18.4027,86.5152,-62.7166],mag:5.284,ci:-.048,trueDistPc:108.43},{hip:25110,pos:[.6317,11.6383,17.2104],mag:4.956,ci:.642,trueDistPc:20.79},{hip:25336,pos:[11.6585,73.1666,-22.3916],mag:1.64,ci:-.137,trueDistPc:77.4},{hip:25428,pos:[5.2816,40.527,3.8526],mag:1.65,ci:-.06,trueDistPc:41.05},{hip:25606,pos:[6.1882,33.9585,-33.234],mag:2.84,ci:.747,trueDistPc:47.92},{hip:25859,pos:[8.6981,43.5209,-72.788],mag:3.87,ci:1.019,trueDistPc:85.25},{hip:25918,pos:[.9446,-5.6053,-32.1863],mag:5.2,ci:1.011,trueDistPc:32.68},{hip:25930,pos:[25.8681,192.8997,-84.8402],mag:2.41,ci:-.282,trueDistPc:212.31},{hip:25985,pos:[76.8772,507.1638,-446.8164],mag:2.57,ci:.22,trueDistPc:680.27},{hip:26069,pos:[18.0973,23.2658,-339.9282],mag:3.76,ci:.747,trueDistPc:341.2},{hip:26207,pos:[35.9075,325.6016,-77.8549],mag:3.66,ci:-.103,trueDistPc:336.7},{hip:26311,pos:[62.7751,547.8791,-251.3906],mag:1.69,ci:-.103,trueDistPc:606.06},{hip:26451,pos:[12.3919,135.7611,-5.2266],mag:3.03,ci:-.112,trueDistPc:136.43},{hip:26634,pos:[6.443,46.8483,-73.8737],mag:2.65,ci:-.052,trueDistPc:87.71},{hip:26727,pos:[18.9185,203.2148,-96.4444],mag:1.77,ci:-.129,trueDistPc:225.73},{hip:27072,pos:[.5575,6.1812,-6.3861],mag:3.6,ci:.45,trueDistPc:8.91},{hip:27100,pos:[1.2474,.6204,-45.6993],mag:4.36,ci:.229,trueDistPc:45.72},{hip:27288,pos:[1.2277,17.497,-13.8104],mag:3.525,ci:.145,trueDistPc:22.32},{hip:27321,pos:[.6842,5.2278,-18.9134],mag:3.86,ci:.195,trueDistPc:19.63},{hip:27366,pos:[10.4441,165.9412,-108.2683],mag:2.06,ci:-.103,trueDistPc:198.41},{hip:27530,pos:[1.4056,10.2361,-55.9484],mag:4.494,ci:.981,trueDistPc:56.89},{hip:27628,pos:[.867,13.8563,-23.2707],mag:3.12,ci:1.036,trueDistPc:27.1},{hip:27654,pos:[1.2445,25.1502,-24.5705],mag:3.85,ci:.883,trueDistPc:35.18},{hip:27890,pos:[.3183,1.6505,-27.2721],mag:4.66,ci:.934,trueDistPc:27.32},{hip:27913,pos:[.1991,8.6478,-.4771],mag:4.4,ci:.56,trueDistPc:8.66},{hip:27989,pos:[3.1893,146.703,-42.1512],mag:.42,ci:1.622,trueDistPc:152.67},{hip:28103,pos:[.2275,11.8477,-9.1268],mag:3.72,ci:.331,trueDistPc:14.96},{hip:28199,pos:[2.8376,167.9084,-276.423],mag:4.36,ci:-.103,trueDistPc:323.44},{hip:28328,pos:[.3689,54.3996,-123.6596],mag:3.96,ci:1.019,trueDistPc:135.1},{hip:28360,pos:[.0362,23.1376,9.118],mag:1.9,ci:.075,trueDistPc:24.87},{hip:28380,pos:[.0492,49.3018,12.0853],mag:2.62,ci:-.018,trueDistPc:50.76},{hip:28614,pos:[-.487,46.1339,-11.3243],mag:4.674,ci:.257,trueDistPc:47.51},{hip:28691,pos:[-3.722,261.5709,-17.1289],mag:5.13,ci:-.043,trueDistPc:262.16},{hip:28734,pos:[-.7853,47.5444,-.1432],mag:4.15,ci:.789,trueDistPc:47.55},{hip:28910,pos:[-1.3307,40.189,-31.8302],mag:4.663,ci:.087,trueDistPc:51.28},{hip:29038,pos:[-5.9115,182.8639,-27.8616],mag:4.397,ci:-.083,trueDistPc:185.07},{hip:29151,pos:[-6.9363,165.6855,-63.394],mag:5.73,ci:.11,trueDistPc:177.53},{hip:29426,pos:[-11.1598,217.9384,-35.3451],mag:4.48,ci:-.095,trueDistPc:221.07},{hip:29651,pos:[-12.6109,169.7342,-96.9213],mag:3.96,ci:1.163,trueDistPc:195.86},{hip:29655,pos:[-12.6667,210.9575,-3.2762],mag:3.28,ci:1.418,trueDistPc:211.36},{hip:29807,pos:[-3.3944,29.8751,-49.0399],mag:4.37,ci:.9,trueDistPc:57.52},{hip:30060,pos:[-2.1511,39.6538,28.4568],mag:4.434,ci:.074,trueDistPc:48.86},{hip:30122,pos:[-8.5121,65.741,-89.1703],mag:2.99,ci:-.095,trueDistPc:111.11},{hip:30277,pos:[-5.3422,36.0752,-55.5481],mag:3.85,ci:.798,trueDistPc:66.45},{hip:30324,pos:[-14.2097,112.672,-99.6064],mag:1.97,ci:-.154,trueDistPc:151.06},{hip:30343,pos:[-6.5621,70.7116,-1.0166],mag:2.87,ci:1.444,trueDistPc:71.02},{hip:30419,pos:[-4.2857,39.1015,-13.3278],mag:4.398,ci:.207,trueDistPc:41.53},{hip:30438,pos:[-5.9927,22.4267,-91.9002],mag:-.74,ci:.178,trueDistPc:94.79},{hip:30867,pos:[-25.823,177.3205,-104.5655],mag:3.74,ci:-.078,trueDistPc:207.47},{hip:30883,pos:[-19.7459,165.5339,-8.9011],mag:4.14,ci:-.069,trueDistPc:166.94},{hip:31416,pos:[-17.4617,84.6014,-89.61],mag:4.5,ci:.041,trueDistPc:124.47},{hip:31592,pos:[-3.0802,14.8191,-13.7832],mag:3.91,ci:.986,trueDistPc:20.47},{hip:31681,pos:[-5.2662,32.861,-3.9346],mag:1.92,ci:.05,trueDistPc:33.51},{hip:31685,pos:[-13.558,43.9401,-103.6433],mag:3.17,ci:-.044,trueDistPc:113.39},{hip:32246,pos:[-46.0238,262.6544,9.6379],mag:2.98,ci:1.248,trueDistPc:266.83},{hip:32349,pos:[-.4943,1.9707,-1.6811],mag:-1.46,ci:.05,trueDistPc:2.64},{hip:32362,pos:[-3.5316,17.821,-3.2375],mag:3.36,ci:.416,trueDistPc:18.45},{hip:32607,pos:[-2.9064,2.1027,-29.3852],mag:3.23,ci:.246,trueDistPc:29.6},{hip:32768,pos:[-7.3125,13.9127,-50.9419],mag:2.93,ci:1.07,trueDistPc:53.31},{hip:33018,pos:[-11.2245,57.0884,11.3411],mag:3.6,ci:.135,trueDistPc:59.28},{hip:33152,pos:[-165.8789,505.6813,-566.2108],mag:3.87,ci:1.521,trueDistPc:777.06},{hip:33160,pos:[-18.9847,65.4126,-47.1978],mag:4.08,ci:1.266,trueDistPc:82.87},{hip:33347,pos:[-245.2542,776.7879,-674.9295],mag:4.385,ci:-.025,trueDistPc:1057.87},{hip:33449,pos:[-7.0809,43.9799,31.701],mag:4.35,ci:.772,trueDistPc:54.67},{hip:33579,pos:[-27.4979,72.5304,-97.0294],mag:1.5,ci:-.129,trueDistPc:124.22},{hip:33856,pos:[-93.704,237.2004,-306.3871],mag:3.47,ci:1.52,trueDistPc:398.64},{hip:33977,pos:[-285.0116,742.3727,-827.2156],mag:3.02,ci:-.018,trueDistPc:1147.45},{hip:34045,pos:[-34.8809,97.9145,-81.1902],mag:4.12,ci:-.052,trueDistPc:131.89},{hip:34088,pos:[-84.1194,314.1522,-11.5776],mag:3.79,ci:.721,trueDistPc:325.43},{hip:34444,pos:[-129.7334,299.8533,-368.6769],mag:1.84,ci:.628,trueDistPc:492.61},{hip:34481,pos:[-4.0299,-3.3646,-40.5151],mag:3.746,ci:.924,trueDistPc:40.85},{hip:34693,pos:[-31.6915,114.7086,16.2054],mag:4.42,ci:1.121,trueDistPc:120.1},{hip:34769,pos:[-39.1584,110.361,-49.0374],mag:4.15,ci:.041,trueDistPc:126.96},{hip:35037,pos:[-80.3942,167.564,-210.5207],mag:3.82,ci:-.103,trueDistPc:280.82},{hip:35228,pos:[-25.9818,-9.1616,-208.6176],mag:3.99,ci:.722,trueDistPc:210.43},{hip:35264,pos:[-45.7183,78.2353,-148.0133],mag:2.7,ci:1.427,trueDistPc:173.55},{hip:35350,pos:[-9.825,28.8956,-3.0115],mag:3.559,ci:.148,trueDistPc:30.67},{hip:35550,pos:[-5.9071,17.6349,-.0579],mag:3.53,ci:.339,trueDistPc:18.6},{hip:35904,pos:[-190.762,336.6705,-471.2381],mag:2.45,ci:-.018,trueDistPc:609.76},{hip:36046,pos:[-13.4564,39.1751,4.177],mag:3.79,ci:.934,trueDistPc:41.63},{hip:36145,pos:[-20.2751,72.0996,38.0752],mag:4.61,ci:.036,trueDistPc:84.02},{hip:36188,pos:[-18.2097,44.6401,-11.5631],mag:2.89,ci:-.027,trueDistPc:49.58},{hip:36377,pos:[-16.2271,20.2616,-52.6958],mag:3.25,ci:1.342,trueDistPc:58.74},{hip:36850,pos:[-5.3119,14.4062,2.7338],mag:1.58,ci:.084,trueDistPc:15.6},{hip:36962,pos:[-28.1502,72.0368,7.0604],mag:4.06,ci:1.359,trueDistPc:77.66},{hip:37279,pos:[-1.4693,3.0414,-.9698],mag:.37,ci:.407,trueDistPc:3.51},{hip:37447,pos:[-18.8357,33.5911,-22.643],mag:3.93,ci:.917,trueDistPc:44.67},{hip:37504,pos:[-5.7263,-5.8804,-43.8055],mag:3.944,ci:.928,trueDistPc:44.57},{hip:37740,pos:[-18.1443,41.4012,2.4311],mag:3.57,ci:.832,trueDistPc:45.27},{hip:37826,pos:[-4.0555,9.455,1.2057],mag:1.14,ci:.9,trueDistPc:10.36},{hip:38146,pos:[-25.6575,35.3426,-43.6826],mag:5.313,ci:.682,trueDistPc:61.77},{hip:39429,pos:[-130.675,115.4053,-282.8069],mag:2.25,ci:-.179,trueDistPc:332.23},{hip:39757,pos:[-9.3661,10.6279,-13.3354],mag:2.81,ci:.416,trueDistPc:19.46},{hip:39794,pos:[-38.167,-17.1271,-193.1621],mag:4.398,ci:-.059,trueDistPc:197.64},{hip:39863,pos:[-163.758,232.6802,-118.363],mag:4.33,ci:.875,trueDistPc:308.17},{hip:39953,pos:[-124.3,79.6474,-309.0123],mag:1.83,ci:-.162,trueDistPc:342.47},{hip:40526,pos:[-54.8236,80.4972,-17.6775],mag:3.52,ci:1.308,trueDistPc:98.98},{hip:40702,pos:[-2.5063,-4.2209,-18.8582],mag:4.047,ci:.391,trueDistPc:19.49},{hip:40843,pos:[-9.2988,15.4924,2.3677],mag:4.989,ci:.66,trueDistPc:18.22},{hip:41037,pos:[-54.8371,6.6077,-177.1162],mag:1.86,ci:1.13,trueDistPc:185.53},{hip:41075,pos:[-47.908,91.7973,44.178],mag:4.25,ci:1.368,trueDistPc:112.58},{hip:41312,pos:[-7.9524,-2.1564,-32.0566],mag:3.759,ci:1.016,trueDistPc:33.1},{hip:41704,pos:[-16.6279,39.1808,36.024],mag:3.42,ci:.772,trueDistPc:55.76},{hip:42313,pos:[-34.2796,40.4149,-11.6444],mag:4.131,ci:.061,trueDistPc:54.26},{hip:42402,pos:[-73.3756,83.7875,-29.0147],mag:4.43,ci:1.07,trueDistPc:115.09},{hip:42515,pos:[-62.0379,40.5952,-92.0652],mag:3.954,ci:.841,trueDistPc:118.21},{hip:42536,pos:[-54.8027,14.9573,-129.2654],mag:3.63,ci:-.112,trueDistPc:141.2},{hip:42568,pos:[-180.1868,5.2702,-524.7472],mag:4.313,ci:-.061,trueDistPc:554.85},{hip:42799,pos:[-102.1663,112.2635,-38.5527],mag:4.3,ci:-.12,trueDistPc:156.61},{hip:42806,pos:[-32.6313,42.467,2.9853],mag:4.652,ci:.065,trueDistPc:53.64},{hip:42828,pos:[-133.3514,88.2619,-183.4617],mag:3.68,ci:-.103,trueDistPc:243.37},{hip:42911,pos:[-26.2534,32.7438,.0565],mag:3.94,ci:.968,trueDistPc:41.97},{hip:42913,pos:[-9.394,1.8349,-22.7673],mag:17.336,ci:0,trueDistPc:24.7},{hip:43103,pos:[-61.9264,84.1604,19.2272],mag:4.018,ci:.881,trueDistPc:106.24},{hip:43109,pos:[-26.1982,28.7463,-7.6335],mag:3.38,ci:.628,trueDistPc:39.64},{hip:43234,pos:[-63.8752,68.7143,-19.1756],mag:4.337,ci:.026,trueDistPc:95.76},{hip:43409,pos:[-38.6499,26.5963,-44.1988],mag:4.01,ci:1.121,trueDistPc:64.46},{hip:43813,pos:[-32.3285,32.8109,-8.9281],mag:3.1,ci:.9,trueDistPc:46.92},{hip:44066,pos:[-37.5024,39.3242,-4.831],mag:4.249,ci:.168,trueDistPc:54.55},{hip:44127,pos:[-6.8358,10.6072,7.1614],mag:3.14,ci:.211,trueDistPc:14.51},{hip:44248,pos:[-9.9087,14.0072,7.5369],mag:3.96,ci:.415,trueDistPc:18.74},{hip:44382,pos:[-11.0173,-4.1397,-36.6604],mag:3.99,ci:.181,trueDistPc:38.5},{hip:44471,pos:[-53.6678,79.7556,53.2414],mag:3.55,ci:.05,trueDistPc:109.89},{hip:44700,pos:[-123.0848,160.1503,77.1064],mag:4.539,ci:.924,trueDistPc:216.2},{hip:44816,pos:[-88.6625,30.2045,-138.1928],mag:2.21,ci:1.452,trueDistPc:166.94},{hip:45080,pos:[-48.0063,-2.8648,-116.2623],mag:3.4,ci:-.078,trueDistPc:125.82},{hip:45238,pos:[-8.9807,-5.605,-33.0438],mag:1.69,ci:.05,trueDistPc:34.7},{hip:45336,pos:[-27.6832,22.9925,-8.3426],mag:3.881,ci:-.038,trueDistPc:36.94},{hip:45556,pos:[-90.8878,-8.4734,-216.2668],mag:2.26,ci:.203,trueDistPc:234.74},{hip:45688,pos:[-24.7189,28.8699,13.9089],mag:3.92,ci:.084,trueDistPc:40.47},{hip:45860,pos:[-43.1553,48.1947,20.9749],mag:3.14,ci:1.367,trueDistPc:68.01},{hip:45941,pos:[-77.6577,1.5019,-157.3078],mag:2.473,ci:-.077,trueDistPc:175.44},{hip:46390,pos:[-43.0035,27.6298,-21.0495],mag:1.97,ci:1.283,trueDistPc:55.28},{hip:46509,pos:[-14.3879,9.8574,-5.2325],mag:4.6,ci:.441,trueDistPc:18.21},{hip:46651,pos:[-11.3825,3.1056,-14.6555],mag:3.6,ci:.356,trueDistPc:18.81},{hip:46733,pos:[-8.5825,14.3843,16.8491],mag:3.67,ci:.33,trueDistPc:23.76},{hip:46776,pos:[-144.8535,98.6719,-46.8678],mag:4.548,ci:.132,trueDistPc:181.43},{hip:46853,pos:[-6.7267,8.8415,7.7489],mag:3.18,ci:.441,trueDistPc:13.54},{hip:46952,pos:[-37.9239,39.5186,20.7465],mag:4.6,ci:.789,trueDistPc:58.57},{hip:47908,pos:[-53.1957,43.5327,11.7686],mag:2.98,ci:.738,trueDistPc:69.74},{hip:48319,pos:[-15.3314,20.8958,23.8756],mag:3.81,ci:.296,trueDistPc:35.24},{hip:48356,pos:[-62.3608,28.1685,-33.4888],mag:4.11,ci:.832,trueDistPc:76.18},{hip:48402,pos:[-77.6666,94.726,96.6065],mag:4.557,ci:.088,trueDistPc:156.01},{hip:48455,pos:[-29.266,23.3377,8.1949],mag:3.88,ci:1.087,trueDistPc:38.32},{hip:48774,pos:[-261.7202,-27.2611,-454.8571],mag:3.45,ci:-.035,trueDistPc:525.49},{hip:48926,pos:[-23.281,4.7126,-23.3068],mag:5.222,ci:.293,trueDistPc:33.28},{hip:49583,pos:[-469.8671,294.6887,47.2144],mag:3.41,ci:.033,trueDistPc:556.64},{hip:49593,pos:[-19.8267,16.0501,10.3581],mag:4.49,ci:.203,trueDistPc:27.53},{hip:49641,pos:[-115.2754,55.935,-25.174],mag:4.49,ci:.016,trueDistPc:130.58},{hip:49669,pos:[-21.0188,12.2189,.1973],mag:1.4,ci:-.086,trueDistPc:24.31},{hip:49841,pos:[-28.8985,10.8812,-12.4848],mag:3.61,ci:.9,trueDistPc:33.31},{hip:50099,pos:[-36.7994,-28.1756,-111.2454],mag:3.33,ci:-.018,trueDistPc:120.51},{hip:50191,pos:[-21.015,1.1029,-23.5852],mag:3.85,ci:.093,trueDistPc:31.61},{hip:50335,pos:[-58.8396,37.3905,14.6468],mag:3.41,ci:.313,trueDistPc:71.24},{hip:50371,pos:[-100.3964,-36.6914,-206.2573],mag:3.35,ci:1.367,trueDistPc:232.31},{hip:50372,pos:[-45.6298,38.903,34.4596],mag:3.45,ci:.075,trueDistPc:69.16},{hip:50583,pos:[-34.0031,19.9375,6.1126],mag:4,ci:0,trueDistPc:39.89},{hip:50801,pos:[-38.3157,30.7683,27.2368],mag:3.05,ci:1.401,trueDistPc:56.18},{hip:51069,pos:[-65.6572,17.548,-31.2179],mag:3.81,ci:1.308,trueDistPc:74.79},{hip:51172,pos:[-88.3833,11.7289,-68.2345],mag:4.25,ci:1.282,trueDistPc:112.27},{hip:51232,pos:[-226.2193,-72.8357,-409.7547],mag:3.81,ci:.306,trueDistPc:473.69},{hip:51233,pos:[-34.8188,24.7998,19.9929],mag:4.21,ci:.815,trueDistPc:47.19},{hip:51437,pos:[-103.9728,38.8737,-18.2169],mag:5.1,ci:-.069,trueDistPc:112.49},{hip:51839,pos:[-25.0619,-44.1552,-126.1982],mag:4.12,ci:1.393,trueDistPc:136.03},{hip:51986,pos:[-16.6506,-2.1599,-20.7778],mag:3.84,ci:.297,trueDistPc:26.71},{hip:52419,pos:[-56.9809,-31.8317,-123.4754],mag:2.76,ci:-.137,trueDistPc:139.66},{hip:52468,pos:[-210.9756,-90.3264,-392.163],mag:4.545,ci:1.473,trueDistPc:454.38},{hip:52727,pos:[-21.2588,-3.9461,-26.7846],mag:2.69,ci:.815,trueDistPc:34.42},{hip:52943,pos:[-38.472,6.5305,-15.6063],mag:3.11,ci:1.104,trueDistPc:42.03},{hip:53229,pos:[-24.0628,13.4059,12.8043],mag:3.83,ci:.934,trueDistPc:30.38},{hip:53253,pos:[-14.7843,-6.1049,-25.1799],mag:3.79,ci:.857,trueDistPc:29.83},{hip:53740,pos:[-45.0108,4.9776,-18.9584],mag:4.07,ci:.976,trueDistPc:49.09},{hip:53910,pos:[-13.8827,11.8844,18.3598],mag:2.37,ci:.033,trueDistPc:25.9},{hip:54061,pos:[-17.2987,17.1799,28.7282],mag:1.79,ci:.959,trueDistPc:37.68},{hip:54463,pos:[-753.7473,-353.5249,-1247.752],mag:3.83,ci:1.121,trueDistPc:4488.33},{hip:54539,pos:[-29.9706,18.1415,25.0241],mag:3.01,ci:1.019,trueDistPc:43.05},{hip:54682,pos:[-87.4645,2.2069,-41.9903],mag:4.449,ci:.072,trueDistPc:97.05},{hip:54872,pos:[-16.4424,5.5601,4.4351],mag:2.53,ci:.178,trueDistPc:17.91},{hip:54879,pos:[-46.5056,13.8436,8.2717],mag:3.35,ci:.033,trueDistPc:49.22},{hip:55282,pos:[-55.9289,3.2376,-17.7418],mag:3.56,ci:.994,trueDistPc:58.76},{hip:55687,pos:[-118.6607,7.7826,-28.4834],mag:4.802,ci:1.356,trueDistPc:122.28},{hip:55705,pos:[-24.9714,.3338,-8.9254],mag:4.06,ci:.212,trueDistPc:26.52},{hip:56211,pos:[-40.5079,47.7083,97.2675],mag:3.85,ci:1.427,trueDistPc:115.66},{hip:56343,pos:[-33.7888,-4.7415,-20.9895],mag:3.54,ci:.84,trueDistPc:40.06},{hip:56480,pos:[-71.5877,-32.5548,-94.9883],mag:4.607,ci:-.013,trueDistPc:123.32},{hip:56561,pos:[-54.5066,-37.5232,-101.0827],mag:3.14,ci:.016,trueDistPc:120.82},{hip:56633,pos:[-90.3482,2.2218,-18.0651],mag:4.673,ci:-.009,trueDistPc:92.16},{hip:57283,pos:[-99.5711,-7.0841,-33.0066],mag:4.706,ci:.875,trueDistPc:105.14},{hip:57363,pos:[-16.6171,-14.4409,-35.9352],mag:3.65,ci:.186,trueDistPc:42.14},{hip:57380,pos:[-100.7276,10.304,8.1223],mag:4.04,ci:1.325,trueDistPc:101.58},{hip:57399,pos:[-40.8039,20.2019,40.3447],mag:3.72,ci:1.053,trueDistPc:60.83},{hip:57632,pos:[-10.6339,1.567,2.3371],mag:2.13,ci:.126,trueDistPc:11},{hip:57936,pos:[-78.7783,-18.8365,-49.5767],mag:4.28,ci:-.035,trueDistPc:94.97},{hip:58001,pos:[-15.0949,8.5483,18.6951],mag:2.44,ci:.058,trueDistPc:25.5},{hip:58188,pos:[-73.449,-7.8463,-21.3078],mag:5.16,ci:.031,trueDistPc:76.88},{hip:59196,pos:[-110.645,-57.5548,-122.6027],mag:2.52,ci:-.06,trueDistPc:174.89},{hip:59199,pos:[-13.5943,-2.9502,-5.5496],mag:4.01,ci:.322,trueDistPc:14.98},{hip:59316,pos:[-87.011,-17.9643,-31.7652],mag:2.98,ci:1.189,trueDistPc:94.35},{hip:59747,pos:[-72.2168,-51.8257,-107.5222],mag:2.752,ci:-.106,trueDistPc:139.51},{hip:59774,pos:[-13.4629,7.4427,19.4483],mag:3.32,ci:.127,trueDistPc:24.8},{hip:59803,pos:[-44.8059,-8.4869,-11.7944],mag:2.58,ci:-.043,trueDistPc:47.1},{hip:6e4,pos:[-17.2582,-37.7613,-83.6165],mag:4.229,ci:-.056,trueDistPc:93.36},{hip:60030,pos:[-114.5886,-9.2127,2.2725],mag:5.897,ci:.179,trueDistPc:114.98},{hip:60718,pos:[-44.3638,-39.7633,-78.7129],mag:4,ci:0,trueDistPc:98.72},{hip:60742,pos:[-44.0323,4.7134,23.943],mag:4.34,ci:1.01,trueDistPc:50.34},{hip:60823,pos:[-80.1167,-47.6182,-85.0668],mag:3.91,ci:-.112,trueDistPc:126.18},{hip:60965,pos:[-24.9767,-5.9741,-5.5508],mag:2.94,ci:.008,trueDistPc:26.27},{hip:61084,pos:[-14.6068,-10.9033,-20.1241],mag:1.64,ci:1.402,trueDistPc:27.15},{hip:61174,pos:[-17.3484,-4.2661,-3.6967],mag:4.294,ci:.359,trueDistPc:18.24},{hip:61199,pos:[-35.3119,-48.6353,-99.5178],mag:3.88,ci:-.078,trueDistPc:116.26},{hip:61281,pos:[-48.7653,46.672,125.689],mag:3.89,ci:-.069,trueDistPc:142.67},{hip:61317,pos:[-6.2908,1.3709,5.5075],mag:4.25,ci:.569,trueDistPc:8.47},{hip:61359,pos:[-41.2393,-12.8982,-14.0768],mag:2.64,ci:.798,trueDistPc:45.44},{hip:61585,pos:[-33.9923,-41.0519,-80.6996],mag:2.649,ci:-.09,trueDistPc:96.71},{hip:61932,pos:[-25.7719,-16.3031,-25.7365],mag:2.17,ci:.042,trueDistPc:39.9},{hip:61941,pos:[-11.8183,-2.114,.5851],mag:2.74,ci:.356,trueDistPc:12.02},{hip:62322,pos:[-38.2492,-45.8329,-86.0288],mag:3.549,ci:-.158,trueDistPc:104.71},{hip:62434,pos:[-42.1687,-37.4997,-64.0955],mag:1.25,ci:-.146,trueDistPc:85.4},{hip:62956,pos:[-13.776,5.3065,20.5587],mag:1.77,ci:.033,trueDistPc:25.31},{hip:63090,pos:[-55.6692,-11.2865,8.6041],mag:3.38,ci:1.401,trueDistPc:57.45},{hip:63125,pos:[-23.2636,2.2127,19.6929],mag:2.88,ci:-.052,trueDistPc:30.56},{hip:63608,pos:[-31.3083,-5.4868,9.2375],mag:2.79,ci:.832,trueDistPc:33.1},{hip:64166,pos:[-62.6009,-28.9811,-17.9378],mag:4.934,ci:.939,trueDistPc:71.28},{hip:64241,pos:[-16.2111,-2.5531,6.9587],mag:4.32,ci:.432,trueDistPc:17.83},{hip:64394,pos:[-7.7336,-.5904,4.9435],mag:4.25,ci:.552,trueDistPc:9.2},{hip:64962,pos:[-33.8976,-17.2853,-9.3057],mag:3,ci:.832,trueDistPc:39.17},{hip:65109,pos:[-13.4253,-8.7615,-7.8246],mag:2.73,ci:.075,trueDistPc:17.84},{hip:65378,pos:[-14.1158,3.598,21.9079],mag:2.283,ci:.534,trueDistPc:26.31},{hip:65474,pos:[-69.9908,-30.93,-2.745],mag:.97,ci:-.146,trueDistPc:76.57},{hip:65936,pos:[-197.912,-146.3289,-128.7601],mag:3.88,ci:1.036,trueDistPc:277.78},{hip:66249,pos:[-20.9342,-8.515,3.4326],mag:3.38,ci:.152,trueDistPc:22.86},{hip:66657,pos:[-70.7265,-72.1096,-83.5171],mag:2.3,ci:-.137,trueDistPc:131.06},{hip:67301,pos:[-18.5296,.9928,25.9075],mag:1.86,ci:-.112,trueDistPc:31.87},{hip:67459,pos:[-63.6617,-22.1686,31.7177],mag:4.07,ci:1.342,trueDistPc:74.5},{hip:67464,pos:[-82.403,-72.0222,-58.8494],mag:3.386,ci:-.118,trueDistPc:124.26},{hip:67472,pos:[-89.3716,-79.17,-66.1252],mag:3.43,ci:-.086,trueDistPc:136.48},{hip:67927,pos:[-9.4877,-3.3293,5.3636],mag:2.68,ci:.534,trueDistPc:11.4},{hip:68002,pos:[-69.5458,-69.426,-63.678],mag:2.55,ci:-.137,trueDistPc:117.1},{hip:68282,pos:[-80.7998,-78.9698,-66.4252],mag:3.87,ci:-.12,trueDistPc:131.06},{hip:68520,pos:[-59.9382,-31.5333,15.7139],mag:4.237,ci:.13,trueDistPc:69.53},{hip:68702,pos:[-50.954,-69.6001,-83.7001],mag:.58,ci:0,trueDistPc:120.19},{hip:68756,pos:[-29.5884,12.2824,73.1965],mag:3.68,ci:.016,trueDistPc:79.9},{hip:68933,pos:[-12.3588,-11.249,-6.7791],mag:2.05,ci:.892,trueDistPc:18.03},{hip:69427,pos:[-71.0336,-48.8086,4.3856],mag:4.21,ci:1.172,trueDistPc:86.3},{hip:69673,pos:[-8.8234,-3.9716,5.7535],mag:-.05,ci:1.095,trueDistPc:11.26},{hip:69701,pos:[-18.1594,-12.1553,2.7604],mag:4.08,ci:.492,trueDistPc:22.03},{hip:70576,pos:[-55.2161,-65.2512,-47.619],mag:4.35,ci:.399,trueDistPc:97.85},{hip:70638,pos:[-8.1315,-41.9358,-81.4718],mag:4.304,ci:1.164,trueDistPc:91.99},{hip:71053,pos:[-34.2615,-14.3923,33.9949],mag:3.59,ci:1.155,trueDistPc:50.37},{hip:71075,pos:[-16.3054,-5.1922,20.0723],mag:3.02,ci:.212,trueDistPc:26.38},{hip:71352,pos:[-54.0862,-65.0289,-40.367],mag:2.31,ci:-.112,trueDistPc:93.72},{hip:71536,pos:[-53.709,-72.8998,-56.9525],mag:4.05,ci:-.078,trueDistPc:106.97},{hip:71683,pos:[-.5038,-.8545,-.912],mag:.01,ci:.654,trueDistPc:1.35},{hip:71795,pos:[-39.9256,-25.9652,25.1939],mag:3.78,ci:.092,trueDistPc:53.88},{hip:71860,pos:[-73.3549,-99.1471,-71.2808],mag:2.286,ci:-.086,trueDistPc:142.45},{hip:71908,pos:[-5.2638,-10.0527,-11.834],mag:3.19,ci:.254,trueDistPc:16.4},{hip:71957,pos:[-14.4439,-12.1763,3.2197],mag:3.88,ci:.373,trueDistPc:19.16},{hip:72105,pos:[-48.4197,-25.8606,47.0903],mag:2.45,ci:1.036,trueDistPc:72.32},{hip:72220,pos:[-30.7984,-24.5133,12.1105],mag:3.73,ci:.042,trueDistPc:41.18},{hip:72370,pos:[-21.5704,-77.4122,-129.7857],mag:3.798,ci:1.282,trueDistPc:152.65},{hip:72607,pos:[-8.0581,8.5453,38.3879],mag:2.08,ci:1.3,trueDistPc:40.14},{hip:72622,pos:[-16.4089,-16.4563,.1351],mag:2.75,ci:.178,trueDistPc:23.24},{hip:73273,pos:[-60.952,-87.131,-49.6887],mag:2.68,ci:-.137,trueDistPc:117.37},{hip:73334,pos:[-61.8728,-87.6931,-47.8539],mag:3.11,ci:-.103,trueDistPc:117.51},{hip:73555,pos:[-38.4761,-17.3327,58.4063],mag:3.52,ci:.857,trueDistPc:72.06},{hip:73714,pos:[-50.0788,-61.1565,-10.6092],mag:3.21,ci:1.495,trueDistPc:79.75},{hip:74395,pos:[-14.2717,-25.4918,-18.8505],mag:3.41,ci:.832,trueDistPc:34.77},{hip:74666,pos:[-20.2999,-13.2624,27.8606],mag:3.49,ci:.858,trueDistPc:36.93},{hip:74785,pos:[-36.5496,-42.6005,8.3847],mag:2.62,ci:-.043,trueDistPc:56.75},{hip:74824,pos:[-9.9719,-20.7267,-18.5802],mag:4.057,ci:.132,trueDistPc:29.57},{hip:74946,pos:[-13.6797,-36.3816,-43.324],mag:2.89,ci:.05,trueDistPc:58.2},{hip:75097,pos:[-30.2676,23.9914,146.6072],mag:3.002,ci:.105,trueDistPc:151.61},{hip:75141,pos:[-71.953,-118.1412,-54.2822],mag:3.19,ci:-.116,trueDistPc:148.6},{hip:75177,pos:[-44.026,-69.0913,-25.3264],mag:3.546,ci:1.351,trueDistPc:85.75},{hip:75323,pos:[-44.3157,-96.9883,-86.8897],mag:5.158,ci:.457,trueDistPc:137.55},{hip:75458,pos:[-9.9255,-.8596,29.0878],mag:3.29,ci:1.036,trueDistPc:30.75},{hip:75695,pos:[-19.2809,-15.6786,25.7826],mag:3.68,ci:.296,trueDistPc:35.81},{hip:76127,pos:[-58.8185,-48.4007,86.2553],mag:4.13,ci:-.061,trueDistPc:115.07},{hip:76267,pos:[-12.5275,-11.3975,16.5411],mag:2.24,ci:.033,trueDistPc:23.67},{hip:76276,pos:[-40.7006,-45.7484,33.7751],mag:4.084,ci:.375,trueDistPc:69.93},{hip:76297,pos:[-57.3888,-105.688,-46.7536],mag:2.765,ci:-.102,trueDistPc:129.03},{hip:76333,pos:[-28.1316,-40.3829,3.7748],mag:3.91,ci:.917,trueDistPc:49.36},{hip:76552,pos:[-27.9733,-53.6042,-25.0001],mag:4.33,ci:1.257,trueDistPc:65.43},{hip:76952,pos:[-22.6331,-22.5333,31.3926],mag:4.016,ci:.064,trueDistPc:44.78},{hip:77055,pos:[-13.0114,25.0968,106.4083],mag:4.274,ci:.086,trueDistPc:110.1},{hip:77070,pos:[-12.623,-16.2004,9.7995],mag:2.63,ci:1.044,trueDistPc:22.76},{hip:77233,pos:[-24.6108,-29.2765,26.1162],mag:3.67,ci:.101,trueDistPc:46.31},{hip:77450,pos:[-60.4229,-71.4399,70.7907],mag:4.09,ci:1.427,trueDistPc:117.33},{hip:77512,pos:[-24.824,-26.6454,36.119],mag:4.63,ci:.73,trueDistPc:51.29},{hip:77516,pos:[-27.9632,-41.3621,14.5414],mag:3.53,ci:.016,trueDistPc:52},{hip:77622,pos:[-11.7509,-16.3719,8.9753],mag:3.693,ci:.178,trueDistPc:22.06},{hip:77634,pos:[-27.9456,-54.4712,-14.3364],mag:3.946,ci:.019,trueDistPc:62.88},{hip:77760,pos:[-6.1866,-4.8752,13.8091],mag:4.62,ci:.535,trueDistPc:15.9},{hip:77853,pos:[-25.7207,-44.3214,3.1089],mag:4.16,ci:.909,trueDistPc:51.34},{hip:77952,pos:[-2.88,-8.7809,-8.305],mag:2.85,ci:.297,trueDistPc:12.42},{hip:78072,pos:[-5.5187,-7.2657,6.4352],mag:3.84,ci:.475,trueDistPc:11.17},{hip:78159,pos:[-33.6559,-38.878,53.3769],mag:4.13,ci:1.096,trueDistPc:74.12},{hip:78265,pos:[-81.3015,-159.1502,-17.1307],mag:2.91,ci:-.12,trueDistPc:179.53},{hip:78384,pos:[-51.5529,-114.5577,-39.4755],mag:3.41,ci:-.137,trueDistPc:131.68},{hip:78401,pos:[-69.3327,-133.592,-5.2193],mag:2.32,ci:-.052,trueDistPc:150.6},{hip:78493,pos:[-48.9075,-56.2868,86.2628],mag:4.971,ci:.007,trueDistPc:114.02},{hip:78527,pos:[-5.5316,-1.656,20.7318],mag:4,ci:.492,trueDistPc:21.52},{hip:78639,pos:[-22.8247,-59.061,-33.5391],mag:4.643,ci:.837,trueDistPc:71.65},{hip:78820,pos:[-55.8814,-110.5786,2.1794],mag:2.62,ci:-.009,trueDistPc:123.92},{hip:78970,pos:[-24.7463,-57.9416,-17.5342],mag:5.7,ci:.314,trueDistPc:65.4},{hip:79509,pos:[-37.2581,-114.7513,-77.8772],mag:4.94,ci:.934,trueDistPc:143.6},{hip:79822,pos:[-3.1842,5.4457,29.2506],mag:4.847,ci:.52,trueDistPc:29.92},{hip:79882,pos:[-14.0202,-28.1325,9.2747],mag:3.23,ci:.883,trueDistPc:32.77},{hip:79992,pos:[-28.7935,-28.1814,89.7737],mag:3.87,ci:-.069,trueDistPc:98.4},{hip:8e4,pos:[-11.5053,-35.5538,-20.0903],mag:4.02,ci:.968,trueDistPc:42.43},{hip:80170,pos:[-23.2428,-39.0126,38.1153],mag:3.76,ci:.28,trueDistPc:59.29},{hip:80331,pos:[-5.4318,-1.4035,27.4306],mag:2.74,ci:.824,trueDistPc:28},{hip:80582,pos:[-50.7556,-164.6565,-82.1327],mag:4.521,ci:-.02,trueDistPc:190.88},{hip:80763,pos:[-58.5426,-158.7916,-13.5274],mag:.91,ci:1.614,trueDistPc:169.78},{hip:80816,pos:[-16.1463,-29.2384,30.8236],mag:2.77,ci:.841,trueDistPc:45.45},{hip:81065,pos:[-3.3331,-26.0318,-38.9192],mag:3.854,ci:.84,trueDistPc:46.94},{hip:81126,pos:[-24.8873,-33.3184,82.1929],mag:4.196,ci:.034,trueDistPc:92.11},{hip:81266,pos:[-45.96,-137.0175,-15.4969],mag:2.81,ci:-.162,trueDistPc:145.35},{hip:81377,pos:[-46.9232,-123.7161,26.6587],mag:2.56,ci:.067,trueDistPc:134.97},{hip:81693,pos:[-3.0733,-5.6509,8.5704],mag:2.8,ci:.586,trueDistPc:10.72},{hip:81833,pos:[-8.7777,-14.4867,29.6841],mag:3.5,ci:.832,trueDistPc:34.18},{hip:81852,pos:[-3.3976,-27.4711,-38.8773],mag:4.24,ci:.951,trueDistPc:47.72},{hip:82080,pos:[-4.458,27.7195,97.4168],mag:4.212,ci:.812,trueDistPc:101.38},{hip:82273,pos:[-13.1274,-81.9196,-86.368],mag:1.88,ci:1.282,trueDistPc:119.76},{hip:82363,pos:[-14.5007,-73.9396,-55.3009],mag:3.744,ci:1.378,trueDistPc:93.46},{hip:82396,pos:[-4.8422,-18.5034,-3.9743],mag:2.29,ci:1.036,trueDistPc:19.54},{hip:82514,pos:[-123.1415,-499.6708,-141.9741],mag:2.98,ci:-.086,trueDistPc:533.85},{hip:82671,pos:[-314.8104,-1377.0533,-504.5975],mag:4.79,ci:.492,trueDistPc:1707.94},{hip:83e3,pos:[-7.1417,-21.7489,14.2133],mag:3.2,ci:1.036,trueDistPc:26.95},{hip:83081,pos:[-25.6417,-142.8531,-94.5829],mag:3.076,ci:1.431,trueDistPc:173.24},{hip:83207,pos:[-11.1807,-28.1346,40.5404],mag:3.92,ci:.042,trueDistPc:50.6},{hip:83895,pos:[-11.644,-.6878,127.2227],mag:3.17,ci:-.044,trueDistPc:127.76},{hip:84012,pos:[-5.6025,-26.2891,3.3946],mag:2.42,ci:.092,trueDistPc:27.09},{hip:84143,pos:[-3.3876,-20.7841,-7.7411],mag:3.33,ci:.399,trueDistPc:22.44},{hip:84345,pos:[-20.9956,-85.1703,66.7912],mag:5.239,ci:.942,trueDistPc:110.25},{hip:84379,pos:[-4.0755,-14.9628,17.0344],mag:3.13,ci:.118,trueDistPc:23.04},{hip:84380,pos:[-17.5337,-54.1802,96.8726],mag:3.18,ci:1.266,trueDistPc:112.37},{hip:84606,pos:[-7.832,-25.5433,46.4738],mag:4.65,ci:.092,trueDistPc:53.61},{hip:84880,pos:[-10.3778,-60.6981,11.1499],mag:4.324,ci:.081,trueDistPc:62.58},{hip:85112,pos:[-15.1731,-58.1382,104.5976],mag:4.17,ci:.05,trueDistPc:120.63},{hip:85258,pos:[-18.7203,-184.4846,-117.0666],mag:2.85,ci:1.291,trueDistPc:219.29},{hip:85267,pos:[-28.4271,-284.4624,-186.4313],mag:3.34,ci:-.06,trueDistPc:341.3},{hip:85670,pos:[-9.1693,-28.1642,112.7237],mag:2.81,ci:.883,trueDistPc:116.55},{hip:85693,pos:[-13.7849,-77.4121,91.3958],mag:4.41,ci:1.274,trueDistPc:120.56},{hip:85727,pos:[-4.2562,-54.7725,-41.9361],mag:3.62,ci:-.035,trueDistPc:69.11},{hip:85755,pos:[-14.2921,-124.902,-1.5034],mag:4.81,ci:.05,trueDistPc:125.73},{hip:85792,pos:[-6.4738,-73.0302,-36.6511],mag:2.95,ci:-.095,trueDistPc:81.97},{hip:85822,pos:[-.4027,19.1745,52.5366],mag:4.336,ci:.076,trueDistPc:55.93},{hip:85829,pos:[-2.0629,-5.7937,29.2846],mag:4.792,ci:.395,trueDistPc:29.92},{hip:85927,pos:[-16.0486,-169.3256,-41.7404],mag:1.63,ci:-.069,trueDistPc:175.13},{hip:86032,pos:[-1.5871,-11.9719,8.7212],mag:2.07,ci:.178,trueDistPc:14.9},{hip:86228,pos:[-6.6541,-86.4656,-30.957],mag:1.85,ci:.424,trueDistPc:92.08},{hip:86263,pos:[-2.8628,-29.9835,4.1981],mag:3.519,ci:.279,trueDistPc:30.41},{hip:86414,pos:[-9.5388,-53.4923,143.535],mag:3.8,ci:-.094,trueDistPc:153.48},{hip:86565,pos:[-3.8584,-47.8886,8.8955],mag:4.228,ci:.12,trueDistPc:48.86},{hip:86670,pos:[-8.7851,-142.3891,-39.9504],mag:2.386,ci:-.099,trueDistPc:148.15},{hip:86742,pos:[-1.8309,-22.4459,11.944],mag:2.75,ci:1.053,trueDistPc:25.49},{hip:86929,pos:[-2.9963,-84.6765,-74.4621],mag:3.581,ci:1.06,trueDistPc:112.8},{hip:86974,pos:[-.4359,-5.2177,6.4898],mag:3.42,ci:.688,trueDistPc:8.34},{hip:87072,pos:[-17.0995,-354.945,-27.4759],mag:4.54,ci:.73,trueDistPc:356.42},{hip:87073,pos:[-29.2027,-674.9347,-202.8647],mag:2.992,ci:.475,trueDistPc:705.37},{hip:87585,pos:[-.5309,-5.784,33.9175],mag:3.75,ci:1.053,trueDistPc:34.41},{hip:87808,pos:[-3.1738,-119.3697,212.6579],mag:3.88,ci:1.197,trueDistPc:243.89},{hip:87833,pos:[-.4362,-12.2974,45.6752],mag:2.23,ci:1.35,trueDistPc:47.3},{hip:87933,pos:[-.3567,-25.4095,33.3406],mag:3.7,ci:.849,trueDistPc:41.92},{hip:88635,pos:[.6771,-30.751,-3.7718],mag:2.99,ci:.908,trueDistPc:30.99},{hip:88714,pos:[6.298,-303.1895,-152.2499],mag:3.66,ci:-.018,trueDistPc:339.33},{hip:88794,pos:[3.0854,-65.5115,84.5021],mag:3.827,ci:.029,trueDistPc:106.97},{hip:88866,pos:[.6815,-31.3271,-26.5159],mag:4.328,ci:.256,trueDistPc:41.05},{hip:89341,pos:[84.0149,-1496.3903,61.2983],mag:3.85,ci:.237,trueDistPc:11111.11},{hip:89642,pos:[2.5771,-40.6481,-9.6866],mag:3.11,ci:1.376,trueDistPc:41.87},{hip:89931,pos:[10.1133,-126.2238,-14.3653],mag:2.668,ci:1.241,trueDistPc:127.44},{hip:89937,pos:[.2194,.8755,8.0067],mag:3.58,ci:.467,trueDistPc:8.06},{hip:89962,pos:[1.7683,-17.7811,6.658],mag:3.25,ci:.849,trueDistPc:19.07},{hip:90098,pos:[10.9638,-178.2831,-140.1845],mag:4.367,ci:1.297,trueDistPc:227.06},{hip:90185,pos:[3.8172,-42.9526,-8.4225],mag:1.81,ci:.059,trueDistPc:43.94},{hip:90422,pos:[6.9938,-78.775,-32.9974],mag:3.463,ci:-.089,trueDistPc:85.69},{hip:90496,pos:[2.5619,-23.1417,-.8682],mag:2.81,ci:.934,trueDistPc:23.3},{hip:90568,pos:[3.0787,-33.5918,-16.2795],mag:4.11,ci:.908,trueDistPc:37.46},{hip:90595,pos:[11.8673,-94.656,14.5852],mag:4.675,ci:.104,trueDistPc:96.51},{hip:90887,pos:[7.4289,-65.3959,-19.4289],mag:5.155,ci:.116,trueDistPc:68.62},{hip:91117,pos:[8.558,-53.9324,14.5504],mag:3.83,ci:1.189,trueDistPc:56.51},{hip:91262,pos:[.9606,-3.5074,6.763],mag:.03,ci:.05,trueDistPc:7.68},{hip:91792,pos:[3.9246,-43.839,-49.1925],mag:4.003,ci:1.015,trueDistPc:66.01},{hip:91875,pos:[9.3381,-59.7635,-16.4582],mag:5.111,ci:.109,trueDistPc:62.69},{hip:91971,pos:[7.4425,-22.7605,42.0555],mag:4.36,ci:.212,trueDistPc:48.4},{hip:92041,pos:[14.5077,-80.7811,-5.673],mag:3.14,ci:-.027,trueDistPc:82.27},{hip:92175,pos:[41.9547,-191.1382,64.2861],mag:4.22,ci:.977,trueDistPc:205.98},{hip:92202,pos:[80.7398,-368.0157,116.8143],mag:5.2,ci:1.3,trueDistPc:394.46},{hip:92420,pos:[50.3185,-147.1049,230.3604],mag:3.42,ci:.05,trueDistPc:277.92},{hip:92609,pos:[35.4532,-258.6422,-212.1701],mag:4.207,ci:-.085,trueDistPc:336.41},{hip:92791,pos:[44.4839,-111.9741,203.0614],mag:4.3,ci:1.469,trueDistPc:236.12},{hip:92814,pos:[128.9211,-546.5219,71.0179],mag:5.086,ci:.154,trueDistPc:566},{hip:92855,pos:[14.9509,-68.0836,-4.2018],mag:2.067,ci:-.072,trueDistPc:69.83},{hip:92946,pos:[9.9795,-35.372,18.6275],mag:4.57,ci:.194,trueDistPc:41.2},{hip:92953,pos:[17.2022,-88.9519,-32.6261],mag:5.346,ci:.896,trueDistPc:96.3},{hip:92989,pos:[28.4394,-138.6164,-36.5229],mag:5.38,ci:-.069,trueDistPc:146.14},{hip:93015,pos:[18.1454,-135.5407,-132.8475],mag:4.4,ci:.628,trueDistPc:190.65},{hip:93085,pos:[27.6505,-115.6067,3.4474],mag:3.51,ci:1.053,trueDistPc:118.92},{hip:93174,pos:[6.3541,-29.7969,-7.7543],mag:4.85,ci:.381,trueDistPc:31.44},{hip:93194,pos:[43.1117,-107.1229,164.9915],mag:3.25,ci:.008,trueDistPc:201.39},{hip:93244,pos:[13.6609,-41.3987,33.5326],mag:4.02,ci:.968,trueDistPc:55},{hip:93506,pos:[6.3263,-26.0731,-3.3793],mag:2.59,ci:.135,trueDistPc:27.04},{hip:93542,pos:[11.0854,-50.6433,-18.1852],mag:4.725,ci:.03,trueDistPc:54.94},{hip:93683,pos:[10.8638,-40.5611,.6303],mag:3.77,ci:.9,trueDistPc:42},{hip:93747,pos:[7.1495,-19.8628,15.4423],mag:2.99,ci:.058,trueDistPc:26.16},{hip:93805,pos:[11.0769,-35.4934,11.7702],mag:3.43,ci:-.027,trueDistPc:39},{hip:93825,pos:[3.9459,-16.2888,-4.305],mag:4.21,ci:.492,trueDistPc:17.3},{hip:93864,pos:[9.0049,-33.9999,-3.1321],mag:3.31,ci:1.07,trueDistPc:35.31},{hip:94005,pos:[12.6537,-52.3957,-17.3677],mag:4.571,ci:.979,trueDistPc:56.63},{hip:94114,pos:[8.695,-34.5275,-9.7496],mag:4.087,ci:.1,trueDistPc:36.92},{hip:94160,pos:[39.6721,-158.3879,-49.1491],mag:4.095,ci:1.058,trueDistPc:170.52},{hip:94376,pos:[3.548,1.0957,29.7543],mag:3.07,ci:.9,trueDistPc:29.99},{hip:94648,pos:[4.2781,6.1118,45.5324],mag:4.45,ci:1.113,trueDistPc:46.14},{hip:94779,pos:[7.4369,-7.4581,36.258],mag:3.76,ci:.875,trueDistPc:37.76},{hip:94820,pos:[46.3737,-139.8233,8.3872],mag:4.878,ci:.914,trueDistPc:147.55},{hip:95168,pos:[13.2826,-37.6132,2.9461],mag:3.93,ci:.237,trueDistPc:40},{hip:95294,pos:[10.7884,-38.0485,-16.3792],mag:4.27,ci:.331,trueDistPc:42.81},{hip:95347,pos:[15.0028,-50.2112,-17.4126],mag:3.943,ci:-.037,trueDistPc:55.22},{hip:95501,pos:[5.6501,-12.9095,6.5164],mag:3.36,ci:.322,trueDistPc:15.53},{hip:95771,pos:[30.5619,-54.0014,63.9373],mag:4.45,ci:1.325,trueDistPc:89.1},{hip:95853,pos:[8.8709,-7.9962,35.5925],mag:3.755,ci:.172,trueDistPc:37.54},{hip:95947,pos:[37.92,-62.4863,83.9872],mag:3.08,ci:1.011,trueDistPc:111.34},{hip:96406,pos:[29.9985,-75.2999,-4.3501],mag:5.64,ci:.194,trueDistPc:81.17},{hip:96757,pos:[52.6849,-87.4353,82.0529],mag:4.38,ci:.713,trueDistPc:130.97},{hip:96837,pos:[55.1846,-91.0992,83.8698],mag:4.38,ci:.942,trueDistPc:135.57},{hip:97165,pos:[14.7517,-14.122,42.6501],mag:2.87,ci:.033,trueDistPc:47.29},{hip:97278,pos:[78.6348,-131.1868,92.7883],mag:2.72,ci:1.333,trueDistPc:178.89},{hip:97365,pos:[71.7541,-108.8736,105.2616],mag:3.81,ci:1.163,trueDistPc:167.58},{hip:97433,pos:[7.1993,4.6209,46.1133],mag:3.91,ci:.832,trueDistPc:46.9},{hip:97649,pos:[2.3556,-3.8027,2.5106],mag:.76,ci:.237,trueDistPc:5.13},{hip:97804,pos:[128.3452,-218.4644,99.9262],mag:3.8,ci:.739,trueDistPc:272.37},{hip:98032,pos:[22.1462,-53.3168,-21.7686],mag:4.13,ci:.968,trueDistPc:61.7},{hip:98036,pos:[6.5172,-10.2601,6.1024],mag:3.71,ci:.772,trueDistPc:13.6},{hip:98110,pos:[16.8881,-18.1559,34.475],mag:3.88,ci:.925,trueDistPc:42.47},{hip:98337,pos:[41.1827,-54.5649,55.7351],mag:3.47,ci:1.384,trueDistPc:88.2},{hip:98412,pos:[83.784,-180.7447,-51.0979],mag:4.37,ci:-.078,trueDistPc:205.67},{hip:98495,pos:[4.7215,-19.6216,-24.8212],mag:3.94,ci:.039,trueDistPc:31.99},{hip:98543,pos:[33.1894,-38.3825,54.3975],mag:4.651,ci:.201,trueDistPc:74.39},{hip:98688,pos:[62.1268,-121.5851,-17.0218],mag:4.58,ci:1.453,trueDistPc:137.6},{hip:98920,pos:[23.3894,-28.7921,30.3398],mag:5.093,ci:.939,trueDistPc:47.92},{hip:99240,pos:[1.3118,-4.1322,-4.2901],mag:3.56,ci:.696,trueDistPc:6.1},{hip:99473,pos:[37.9878,-54.4269,22.5018],mag:3.22,ci:-.009,trueDistPc:70.08},{hip:100064,pos:[18.4888,-27.5573,4.0335],mag:3.58,ci:.841,trueDistPc:33.43},{hip:100345,pos:[66.4654,-98.3635,9.5278],mag:3.08,ci:.721,trueDistPc:119.1},{hip:100453,pos:[249.3182,-175.6044,471.8265],mag:2.23,ci:.62,trueDistPc:561.8},{hip:100751,pos:[17.8502,-40.4385,-32.4319],mag:1.918,ci:-.058,trueDistPc:54.82},{hip:101421,pos:[68.1781,-70.4501,54.5072],mag:4.03,ci:-.061,trueDistPc:112.17},{hip:101769,pos:[18.9942,-18.125,16.3534],mag:3.63,ci:.424,trueDistPc:30.93},{hip:101772,pos:[13.0838,-23.5029,-14.1546],mag:3.11,ci:.9,trueDistPc:30.4},{hip:101958,pos:[44.9383,-41.351,39.6923],mag:3.8,ci:-.001,trueDistPc:72.83},{hip:102098,pos:[197.2507,-90.6034,374.5477],mag:1.25,ci:.127,trueDistPc:432.9},{hip:102281,pos:[42.7417,-38.328,35.7952],mag:4.417,ci:.291,trueDistPc:67.65},{hip:102395,pos:[11.1754,-26.9876,-30.1999],mag:3.408,ci:.194,trueDistPc:42.01},{hip:102485,pos:[8.7725,-11.5746,-1.7906],mag:4.122,ci:.404,trueDistPc:14.63},{hip:102488,pos:[12.7406,-8.0401,17.591],mag:2.48,ci:.934,trueDistPc:23.16},{hip:102532,pos:[22.6976,-19.4758,19.2023],mag:4.25,ci:.909,trueDistPc:35.54},{hip:102618,pos:[49.3137,-55.3034,10.5198],mag:3.77,ci:.05,trueDistPc:74.84},{hip:102831,pos:[68.0483,-94.958,-32.279],mag:4.89,ci:.891,trueDistPc:121.2},{hip:102978,pos:[103.0256,-132.0592,-26.4166],mag:4.12,ci:1.436,trueDistPc:169.56},{hip:103227,pos:[64.0614,-121.577,-111.9073],mag:3.65,ci:1.113,trueDistPc:177.22},{hip:103738,pos:[46.8788,-59.0796,-19.737],mag:4.654,ci:.794,trueDistPc:77.96},{hip:104139,pos:[31.6212,-32.9238,-.4668],mag:4.07,ci:.041,trueDistPc:45.65},{hip:104521,pos:[25.7325,-19.0916,15.0658],mag:4.68,ci:.271,trueDistPc:35.41},{hip:104732,pos:[29.5449,-15.027,31.6699],mag:3.21,ci:.891,trueDistPc:45.84},{hip:104858,pos:[13.6611,-9.7643,7.7349],mag:4.49,ci:.475,trueDistPc:18.49},{hip:104987,pos:[43.6692,-32.7672,20.0028],mag:3.933,ci:.486,trueDistPc:58.14},{hip:105140,pos:[33.345,-37.119,-13.9804],mag:4.708,ci:.104,trueDistPc:51.82},{hip:105199,pos:[5.2761,1.1966,14.0307],mag:2.46,ci:.237,trueDistPc:15.04},{hip:105319,pos:[13.7948,-20.2998,-17.6879],mag:4.483,ci:.184,trueDistPc:30.25},{hip:105515,pos:[45.6168,-41.5341,-1.472],mag:4.27,ci:.823,trueDistPc:61.71},{hip:105570,pos:[75.6174,-52.0966,35.3034],mag:5.148,ci:.101,trueDistPc:98.38},{hip:105858,pos:[3.0248,-5.5463,-6.7681],mag:4.22,ci:.458,trueDistPc:9.26},{hip:105881,pos:[98.3802,-91.9438,-16.5121],mag:3.74,ci:.908,trueDistPc:135.66},{hip:106032,pos:[55.2195,39.455,198.82],mag:3.23,ci:-.137,trueDistPc:210.08},{hip:106278,pos:[132.8872,-98.7085,25.0794],mag:2.89,ci:.747,trueDistPc:167.43},{hip:106985,pos:[41.0902,-32.3455,-2.3356],mag:3.67,ci:.313,trueDistPc:52.35},{hip:107089,pos:[3.4869,-9.7445,-16.4217],mag:3.728,ci:.914,trueDistPc:19.41},{hip:107310,pos:[16.0811,-5.7084,14.0653],mag:4.621,ci:.634,trueDistPc:22.11},{hip:107315,pos:[172.7699,-92.309,79.5396],mag:2.39,ci:1.342,trueDistPc:211.42},{hip:107354,pos:[25.6259,-9.8707,20.4232],mag:4.135,ci:.405,trueDistPc:34.22},{hip:107556,pos:[9.5345,-7.0442,-.5387],mag:2.83,ci:.296,trueDistPc:11.87},{hip:107608,pos:[70.7783,-62.3824,-28.0426],mag:5.017,ci:.085,trueDistPc:98.43},{hip:108085,pos:[38.0468,-34.9622,-21.9867],mag:3.01,ci:-.052,trueDistPc:56.15},{hip:108661,pos:[191.2311,-147.9429,-66.0095],mag:5.751,ci:-.055,trueDistPc:250.63},{hip:109074,pos:[177.6209,-89.1303,37.4123],mag:2.94,ci:.866,trueDistPc:202.22},{hip:109111,pos:[51.7954,-45.1215,-33.4588],mag:4.458,ci:1.227,trueDistPc:76.41},{hip:109139,pos:[55.123,-33.4891,-2.3436],mag:4.27,ci:-.01,trueDistPc:64.54},{hip:109176,pos:[9.477,-2.6445,6.7006],mag:3.77,ci:.415,trueDistPc:11.9},{hip:109268,pos:[18.6725,-18.0905,-16.8278],mag:1.71,ci:-.06,trueDistPc:30.97},{hip:109352,pos:[65.6747,-12.3394,58.1956],mag:5.582,ci:.883,trueDistPc:88.61},{hip:109422,pos:[13.8055,-10.5335,-6.2569],mag:4.92,ci:.458,trueDistPc:18.46},{hip:109427,pos:[23.9945,-10.2677,7.652],mag:3.55,ci:.109,trueDistPc:27.2},{hip:109492,pos:[142.0305,35.3143,265.6382],mag:3.35,ci:1.368,trueDistPc:303.29},{hip:109937,pos:[147.7162,-15.5039,145.4224],mag:4.15,ci:1.291,trueDistPc:207.87},{hip:110003,pos:[52.2016,-26.2964,2.7635],mag:4.16,ci:.892,trueDistPc:58.52},{hip:110130,pos:[25.2765,-30.4766,-40.1566],mag:2.82,ci:1.206,trueDistPc:56.39},{hip:110395,pos:[35.1602,-15.1322,5.54],mag:3.834,ci:.013,trueDistPc:38.68},{hip:110538,pos:[28.9654,4.3973,42.7307],mag:4.44,ci:.917,trueDistPc:51.81},{hip:110609,pos:[469.4853,48.2931,633.6963],mag:4.58,ci:.127,trueDistPc:790.14},{hip:110960,pos:[25.9695,-10.0158,4.3317],mag:3.65,ci:.398,trueDistPc:28.17},{hip:110997,pos:[66.9447,-53.055,-52.0325],mag:3.97,ci:.925,trueDistPc:100.02},{hip:111022,pos:[418.6354,38.2838,526.7646],mag:4.37,ci:1.478,trueDistPc:673.95},{hip:111104,pos:[237.9234,5.9789,260.0552],mag:4.511,ci:-.044,trueDistPc:352.52},{hip:111123,pos:[57.4381,-26.3118,-1.3543],mag:4.81,ci:-.018,trueDistPc:63.19},{hip:111169,pos:[18.7885,2.6884,25.4547],mag:3.77,ci:.058,trueDistPc:31.75},{hip:111188,pos:[35.4394,-22.8558,-16.4974],mag:4.29,ci:.059,trueDistPc:45.28},{hip:111497,pos:[50.7633,-18.0729,7.7139],mag:4.03,ci:-.018,trueDistPc:54.43},{hip:111954,pos:[141.4775,-77.3646,-50.1412],mag:4.177,ci:-.04,trueDistPc:168.86},{hip:112029,pos:[57.9621,-14.2888,19.0283],mag:3.41,ci:-.018,trueDistPc:62.66},{hip:112122,pos:[34.9934,-27.0194,-31.4562],mag:2.11,ci:1.427,trueDistPc:54.26},{hip:112158,pos:[49.0523,-3.6769,34.5817],mag:2.95,ci:.781,trueDistPc:60.13},{hip:112405,pos:[6.5044,-19.9944,-40.6509],mag:4.128,ci:.224,trueDistPc:45.77},{hip:112440,pos:[101.1674,-12.323,56.0198],mag:3.93,ci:.959,trueDistPc:116.3},{hip:112447,pos:[15.233,-3.2524,5.183],mag:4.2,ci:.467,trueDistPc:16.42},{hip:112623,pos:[23.0665,-18.8595,-24.8135],mag:3.466,ci:.126,trueDistPc:38.77},{hip:112716,pos:[92.4901,-36.2544,-9.8535],mag:3.98,ci:1.402,trueDistPc:99.83},{hip:112724,pos:[14.0981,9.2398,32.541],mag:3.54,ci:.951,trueDistPc:36.65},{hip:112748,pos:[29.9698,-2.946,16.9594],mag:3.48,ci:.849,trueDistPc:34.56},{hip:112961,pos:[106.1686,-35.3667,-.7551],mag:3.79,ci:1.453,trueDistPc:111.91},{hip:113136,pos:[39.8905,-15.4137,-6.1559],mag:3.28,ci:.092,trueDistPc:43.21},{hip:113246,pos:[42.2878,-22.3005,-20.9268],mag:4.208,ci:.869,trueDistPc:52.19},{hip:113368,pos:[6.4504,-3.1656,-2.7777],mag:1.16,ci:.127,trueDistPc:7.7},{hip:113638,pos:[29.3916,-23.0181,-33.5969],mag:4.115,ci:.875,trueDistPc:50.22},{hip:113881,pos:[51.4333,-.5618,31.078],mag:2.42,ci:1.47,trueDistPc:60.1},{hip:113963,pos:[38.3114,-4.3748,13.5838],mag:2.48,ci:.016,trueDistPc:40.88},{hip:114131,pos:[28.5377,-17.256,-22.8682],mag:4.332,ci:.388,trueDistPc:40.44},{hip:114341,pos:[71.8099,-26.1115,-19.7471],mag:3.64,ci:1.095,trueDistPc:78.92},{hip:114421,pos:[43.3639,-26.5696,-37.2941],mag:3.877,ci:.9,trueDistPc:63.07},{hip:114855,pos:[43.871,-10.6876,-3.1587],mag:4.25,ci:.994,trueDistPc:45.26},{hip:114971,pos:[40.5431,-6.0931,5.2208],mag:3.7,ci:.832,trueDistPc:41.33},{hip:114996,pos:[11.7369,-9.6958,-16.8189],mag:3.98,ci:.381,trueDistPc:22.69},{hip:115102,pos:[47.9744,-20.3657,-25.069],mag:4.406,ci:1.004,trueDistPc:57.83},{hip:115438,pos:[46.6795,-13.8654,-12.8536],mag:3.98,ci:.985,trueDistPc:50.36},{hip:115738,pos:[48.7006,-6.0629,3.8042],mag:4.94,ci:.084,trueDistPc:49.22},{hip:115830,pos:[51.1405,-4.3043,8.159],mag:4.3,ci:.968,trueDistPc:51.97},{hip:116231,pos:[44.0574,-18.4873,-29.5181],mag:4.37,ci:-.026,trueDistPc:56.16},{hip:116727,pos:[2.9416,5.1142,12.4641],mag:2.943,ci:1.257,trueDistPc:13.79},{hip:116771,pos:[13.5366,-.5568,1.7005],mag:4.12,ci:.475,trueDistPc:13.65},{hip:116928,pos:[31.9406,-1.9043,1.9108],mag:4.51,ci:.228,trueDistPc:32.05},{hip:118268,pos:[32.7917,1.4796,3.6604],mag:3.924,ci:.602,trueDistPc:33.03}],E3=`
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
`,b3=`
	precision mediump float;
	uniform vec3 uColor;
	uniform float uOpacity;
	void main() {
		gl_FragColor = vec4(uColor, uOpacity);
	}
`;function T3(i,e,t){const n=Math.round(i),s=Math.round(e),r=Math.round(t);return{hx:n,hy:s,hz:r,lx:i-n,ly:e-s,lz:t-r}}function A3(){let i=0;for(const h of _l)i+=h.segments.length;const e=new Float32Array(i),t=new Float32Array(i);{let h=0;for(const p of _l)for(let E=0;E<p.segments.length;E+=3){const M=p.segments[E]*Ji,T=p.segments[E+1]*Ji,L=p.segments[E+2]*Ji,P=T3(M,T,L);e[h]=P.hx,e[h+1]=P.hy,e[h+2]=P.hz,t[h]=P.lx,t[h+1]=P.ly,t[h+2]=P.lz,h+=3}}const n=new xt;n.setAttribute("position",new nt(e,3)),n.setAttribute("aPosLo",new nt(t,3));function s(h,p){return new mt({uniforms:{uColor:{value:h},uOpacity:{value:p},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:E3,fragmentShader:b3,transparent:!0,depthWrite:!1,blending:Ai})}const r=s(new it(ts.gridStrong),.6),a=new Cs(n,r);a.renderOrder=1,a.frustumCulled=!1;const o=new it(ts.gridStrong).multiplyScalar(1.6),c=s(o,.32),l=new Cs(n,c);l.renderOrder=0,l.frustumCulled=!1;const u=Ta.map(h=>h.pos),f=Ta.map(h=>h.mag),d=Ta.map(h=>h.ci),m=$2(u,f,d,2.4,!1);m.object.renderOrder=1;const g=new _i;g.add(l),g.add(a),g.add(m.object),g.visible=!1;function _(h,p){const E=h.uniforms.uCamHi.value,M=h.uniforms.uCamLo.value,T=Math.round(p.x),L=Math.round(p.y),P=Math.round(p.z);E.set(T,L,P),M.set(p.x-T,p.y-L,p.z-P)}return{object:g,setVisible(h){g.visible=h},setCamDist(h){m.material.uniforms.uCamDist.value=h},setCamPos(h){_(r,h),_(c,h),m.setCamPos(h)},dispose(){n.dispose(),r.dispose(),c.dispose(),m.object.geometry.dispose(),m.material.dispose()}}}const kt=299792458,Pu=30856775814914e3,wu=9.80665,P3=1e6;function Du(i,e,t=P3){const n=e*wu,s=i*Pu,r=s/2,a=Math.sqrt((r/kt)**2+2*r/n),o=kt/n*Math.acosh(1+n*r/(kt*kt)),c=1+n*r/(kt*kt),l=kt*Math.sqrt(1-1/(c*c)),u=2*a,f=2*o,d=Math.exp(n*f/kt),m=t*(d-1),g=m*kt*kt;return{distanceM:s,accelMS2:n,shipTimeS:f,earthTimeS:u,vMax:l,massRatio:d,fuelMassKg:m,energyJ:g,payloadKg:t}}function vl(i){return Math.min(i,1-i)*2}function w3(i,e,t,n){const s=t*wu,r=e*Pu,a=n/2;let o;if(i<=a)o=kt*kt/s*(Math.sqrt(1+(s*i/kt)**2)-1);else{const c=n-i;o=r-kt*kt/s*(Math.sqrt(1+(s*c/kt)**2)-1)}return Math.max(0,Math.min(1,o/r))}const un=192,D3=96,R3=.55,Ru=10,C3=Ru,L3=1.4,I3=.55,U3=`
	attribute float aPhase;
	attribute float aArc;
	varying float vPhase;
	varying float vArc;
	void main() {
		vPhase = aPhase;
		vArc = aArc;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`,N3=`
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
`,F3=`
	uniform float uSize;
	void main() {
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		gl_PointSize = uSize;
	}
`,O3=`
	precision mediump float;
	uniform float uPhase;
	uniform float uAlpha;
	vec3 hsv2rgb(vec3 c) {
		vec3 p = abs(fract(c.xxx + vec3(0.0, 2.0/3.0, 1.0/3.0)) * 6.0 - 3.0);
		return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
	}
	void main() {
		vec2 d = gl_PointCoord - vec2(0.5);
		float r = length(d);
		if (r > 0.5) discard;
		// soft edge + bright core for a glowing-pip look
		float edge = smoothstep(0.5, 0.18, r);
		float core = smoothstep(0.25, 0.0, r);
		float h = clamp(uPhase, 0.0, 1.0) * 0.333;
		vec3 col = hsv2rgb(vec3(h, 0.95, 1.0));
		gl_FragColor = vec4(col * (1.0 + core * 0.7), edge * uAlpha);
	}
`;function xl(i,e){return new mt({uniforms:{uOpacity:{value:i},uBrightness:{value:e},uDashCount:{value:D3},uDashDuty:{value:R3}},vertexShader:U3,fragmentShader:N3,transparent:!0,depthWrite:!1,blending:Ai})}function B3(){const i=new Float32Array(un);for(let L=0;L<un;L++)i[L]=L/(un-1);const e=new xt,t=new nt(new Float32Array(un*3),3),n=new nt(new Float32Array(un),1),s=new nt(i,1);t.setUsage(ac),n.setUsage(ac),e.setAttribute("position",t),e.setAttribute("aPhase",n),e.setAttribute("aArc",s);const r=t.array,a=n.array,o=xl(.95,1),c=xl(.42,1.7),l=new Lr(e,o),u=new Lr(e,c);l.renderOrder=2,u.renderOrder=1,l.frustumCulled=!1,u.frustumCulled=!1;const f=new xt;f.setAttribute("position",new nt(new Float32Array([0,0,0]),3));const d=new mt({uniforms:{uSize:{value:22},uPhase:{value:0},uAlpha:{value:1}},vertexShader:F3,fragmentShader:O3,transparent:!0,depthWrite:!1,blending:Ai}),m=new Hr(f,d);m.renderOrder=3,m.frustumCulled=!1,m.visible=!1;const g=new _i;g.add(u),g.add(l),g.add(m),g.visible=!1;const _=new R,h=new R;let p=0,E=1,M=0,T=0;return{group:g,rebuild(L,P,A,F){for(let Q=0;Q<un;Q++){const v=Q/(un-1),S=Q*3;r[S]=L.x+(P.x-L.x)*v,r[S+1]=L.y+(P.y-L.y)*v,r[S+2]=L.z+(P.z-L.z)*v,a[Q]=vl(v)}t.needsUpdate=!0,n.needsUpdate=!0,_.copy(L),h.copy(P),p=F,E=A,M=Du(F,A).earthTimeS,T=performance.now()/1e3},setVisible(L){g.visible=L,m.visible=L},tick(L){if(!g.visible||M===0)return;const A=(L-T)%C3/Ru*M,F=w3(A,p,E,M);m.position.set(_.x+(h.x-_.x)*F,_.y+(h.y-_.y)*F,_.z+(h.z-_.z)*F),d.uniforms.uPhase.value=vl(F);const Q=Math.sin(L*2*Math.PI/L3);d.uniforms.uAlpha.value=1-I3*(.5-.5*Q)},dispose(){e.dispose(),o.dispose(),c.dispose(),f.dispose(),d.dispose()}}}const z3=`
	varying vec3 vDir;
	void main() {
		vDir = normalize(position);
		// Lock the sphere to the camera so it always renders as a backdrop.
		mat4 mvNoTrans = modelViewMatrix;
		mvNoTrans[3].xyz = vec3(0.0);
		gl_Position = projectionMatrix * mvNoTrans * vec4(position, 1.0);
		gl_Position.z = gl_Position.w; // force depth to far plane
	}
`,k3=`
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
`;async function H3(i,e=.34){const t=await new m2().loadAsync(i);t.colorSpace=fi,t.generateMipmaps=!1;const n=Su*Math.PI/180,s=new mt({side:Wt,depthWrite:!1,depthTest:!1,uniforms:{tEquirect:{value:t},uIntensity:{value:e},uCe:{value:Math.cos(n)},uSe:{value:Math.sin(n)}},vertexShader:z3,fragmentShader:k3}),r=new Nt(new Qn(1,64,32),s);return r.frustumCulled=!1,r.renderOrder=-1e3,{mesh:r,texture:t,setIntensity(a){s.uniforms.uIntensity.value=a}}}const Cu=[{id:"ALPHA_CENTAURI",name:"Alpha Centauri",ra:219.902,dec:-60.834,dist:1.34,tier:"primary",mag:-.1,children:[{kind:"star",size:.0013,color:16773848,halo:{size:.0017,color:16767392,opacity:.3}},{kind:"star",offset:[.0728,0,0],size:.0011,color:16763018,halo:{size:.0015,color:16755302,opacity:.3}}]},{id:"PROXIMA_CEN",name:"Proxima Centauri",ra:217.429,dec:-62.6795,dist:1.301,tier:"primary",mag:11.13,children:[{kind:"star",size:9e-4,color:16750950,halo:{size:.0013,color:16733491,opacity:.34}},{kind:"planet",id:"Proxima Cen d",name:"d",orbitRadius:187265e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Proxima Cen b",name:"b",orbitRadius:31512e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371}]},{id:"SIRIUS",name:"Sirius",ra:101.287,dec:-16.7209,dist:2.67,tier:"primary",mag:-1.46,children:[{kind:"star",size:.0017,color:13293567,halo:{size:.0024,color:8956671,opacity:.32}},{kind:"star",offset:[7960204194457797e-33,.13,0],size:6e-4,color:13162495,halo:{size:.001,color:8956671,opacity:.4}}]},{id:"PROCYON",name:"Procyon",ra:114.826,dec:5.225,dist:3.51,tier:"primary",mag:.37,children:[{kind:"star",size:.0014,color:16775398},{kind:"star",offset:[.0689429,.0689429,0],size:6e-4,color:13162495,halo:{size:9e-4,color:8956671,opacity:.36}}]},{id:"EPSILON_ERIDANI",name:"Epsilon Eridani",ra:53.2283,dec:-9.45817,dist:3.22,tier:"primary",mag:3.73,children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"eps Eri b",name:"b",orbitRadius:.022945,size:.00105,color:13030621,inc:5.0142,node:0,realRadiusKm:6371}]},{id:"40_ERIDANI",name:"40 Eridani",ra:63.8297,dec:-7.6709,dist:5.014,tier:"primary",mag:4.43,children:[{kind:"star",size:.0011,color:16769448},{kind:"star",offset:[-.11375,.197021,0],size:6e-4,color:13162495,halo:{size:.001,color:8956671,opacity:.36}}]},{id:"BARNARD_S_STAR",name:"Barnard's Star",ra:269.449,dec:4.73942,dist:1.828,tier:"secondary",mag:9.511,children:[{kind:"star",size:8e-4,color:16745779},{kind:"planet",id:"Barnard d",name:"d",orbitRadius:1222e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Barnard b",name:"b",orbitRadius:14885e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Barnard c",name:"c",orbitRadius:1781e-7,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"Barnard e",name:"e",orbitRadius:24765e-8,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371}]},{id:"LALANDE_21185",name:"Lalande 21185",ra:165.831,dec:35.9487,dist:2.546,tier:"secondary",mag:7.52,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"GJ 411 b",name:"b",orbitRadius:512135e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"HD 95735 c",name:"c",orbitRadius:.01911,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371}]},{id:"EPSILON_INDI",name:"Epsilon Indi",ra:330.872,dec:-56.7972,dist:3.638,tier:"secondary",mag:4.69,children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[-4.7125,-8.16229,0],size:5e-4,color:6702114,halo:{size:9e-4,color:5583633,opacity:.28}},{kind:"planet",id:"eps Ind A b",name:"b",orbitRadius:.13585,size:.00105,color:13030621,inc:5.214,node:0,realRadiusKm:6371}]},{id:"ROSS_128",name:"Ross 128",ra:176.935,dec:.8044,dist:3.375,tier:"secondary",mag:11.153,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"Ross 128 b",name:"b",orbitRadius:3224e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371}]},{id:"61_CYGNI",name:"61 Cygni",ra:316.748,dec:38.7639,dist:3.497,tier:"secondary",children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[.47285,.273,0],size:.001,color:16761994,halo:{size:.0014,color:16750950,opacity:.3}}]},{id:"GLIESE_570",name:"Gliese 570",ra:224.372,dec:-21.4231,dist:5.886,tier:"secondary",mag:5.72,children:[{kind:"star",size:.0011,color:16762008},{kind:"star",offset:[.1625,0,0],size:9e-4,color:16757898,halo:{size:.0012,color:16748902,opacity:.3}}]},{id:"ETA_CASSIOPEIAE",name:"Eta Cassiopeiae",ra:12.2812,dec:57.8157,dist:5.927,tier:"secondary",mag:3.44,children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[.23075,.399671,0],size:.001,color:16761994,halo:{size:.0013,color:16750950,opacity:.3}}]},{id:"TRAPPIST_1",name:"TRAPPIST-1",ra:346.622,dec:-5.0414,dist:12.467,tier:"secondary",mag:18.798,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"TRAPPIST-1 b",name:"b",orbitRadius:7501e-8,size:.00107033,color:13030621,inc:3.04896,node:0,realRadiusKm:7110.04},{kind:"planet",id:"TRAPPIST-1 c",name:"c",orbitRadius:1027e-7,size:.00106708,color:13030621,inc:3.03996,node:137.508,realRadiusKm:6988.99},{kind:"planet",id:"TRAPPIST-1 d",name:"d",orbitRadius:144755e-9,size:.00100959,color:13030621,inc:3.01872,node:275.016,realRadiusKm:5020.35},{kind:"planet",id:"TRAPPIST-1 e",name:"e",orbitRadius:190125e-9,size:.00103528,color:13030621,inc:3.03726,node:52.524,realRadiusKm:5861.32},{kind:"planet",id:"TRAPPIST-1 f",name:"f",orbitRadius:250185e-9,size:.00105803,color:13030621,inc:3.0468,node:190.032,realRadiusKm:6657.69},{kind:"planet",id:"TRAPPIST-1 g",name:"g",orbitRadius:304395e-9,size:.00107254,color:13030621,inc:3.04644,node:327.54,realRadiusKm:7192.86},{kind:"planet",id:"TRAPPIST-1 h",name:"h",orbitRadius:402285e-9,size:.00100287,color:13030621,inc:3.0351,node:105.048,realRadiusKm:4810.11}]},{id:"LHS_1140",name:"LHS 1140",ra:11.2472,dec:-15.2715,dist:14.964,tier:"secondary",mag:14.15,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"LHS 1140 c",name:"c",orbitRadius:1755e-7,size:.00109599,color:13030621,inc:3.036,node:0,realRadiusKm:8103.91},{kind:"planet",id:"LHS 1140 b",name:"b",orbitRadius:6149e-7,size:.00116223,color:13030621,inc:3.0252,node:137.508,realRadiusKm:11021.8}]},{id:"K2_18",name:"K2-18",ra:172.56,dec:7.5884,dist:38.099,tier:"secondary",mag:13.5,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"K2-18 c",name:"c",orbitRadius:39e-5,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"K2-18 b",name:"b",orbitRadius:92885e-8,size:.00123819,color:13030621,inc:15,node:137.508,realRadiusKm:15099.3}]},{id:"TOI_700",name:"TOI-700",ra:97.0968,dec:-65.5793,dist:31.121,tier:"secondary",mag:13.076,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"TOI-700 b",name:"b",orbitRadius:44005e-8,size:.00103415,color:13030621,inc:3.072,node:0,realRadiusKm:5823.09},{kind:"planet",id:"TOI-700 c",name:"c",orbitRadius:60385e-8,size:.001262,color:13030621,inc:3.19746,node:137.508,realRadiusKm:16564.6},{kind:"planet",id:"TOI-700 e",name:"e",orbitRadius:871e-6,size:.00104142,color:13030621,inc:3.072,node:275.016,realRadiusKm:6071.56},{kind:"planet",id:"TOI-700 d",name:"d",orbitRadius:.00106145,size:.00106293,color:13030621,inc:3.036,node:52.524,realRadiusKm:6836.08}]},{id:"GLIESE_667_C",name:"Gliese 667 C",ra:259.745,dec:-34.9968,dist:7.243,tier:"secondary",mag:10.22,children:[{kind:"star",size:.0011,color:16767159},{kind:"planet",id:"GJ 667 C c",name:"c",orbitRadius:8125e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C f",name:"f",orbitRadius:.001014,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C e",name:"e",orbitRadius:.0013845,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C g",name:"g",orbitRadius:.0035685,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371}]},{id:"TEEGARDEN_S_STAR",name:"Teegarden's Star",ra:43.2537,dec:16.8813,dist:3.832,tier:"secondary",mag:15.14,children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"Teegarden's Star b",name:"b",orbitRadius:16835e-8,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Teegarden's Star c",name:"c",orbitRadius:29575e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Teegarden's Star d",name:"d",orbitRadius:51415e-8,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"WOLF_1061",name:"Wolf 1061",ra:247.575,dec:-12.6626,dist:4.308,tier:"secondary",mag:10.072,children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"Wolf 1061 b",name:"b",orbitRadius:24375e-8,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Wolf 1061 c",name:"c",orbitRadius:5785e-7,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Wolf 1061 d",name:"d",orbitRadius:.003055,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"HD_219134",name:"HD 219134",ra:348.321,dec:57.1684,dist:6.542,tier:"secondary",mag:5.57,children:[{kind:"star",size:.0011,color:16758144},{kind:"planet",id:"HD 219134 b",name:"b",orbitRadius:25194e-8,size:.00114491,color:13030621,inc:3.891,node:0,realRadiusKm:10206.3},{kind:"planet",id:"HD 219134 c",name:"c",orbitRadius:42445e-8,size:.00113207,color:13030621,inc:3.4896,node:137.508,realRadiusKm:9626.58},{kind:"planet",id:"HD 219134 f",name:"f",orbitRadius:95095e-8,size:.00110197,color:13030621,inc:15,node:275.016,realRadiusKm:8346.01},{kind:"planet",id:"HD 219134 d",name:"d",orbitRadius:.0015405,size:.00114601,color:13030621,inc:15,node:52.524,realRadiusKm:10257.3},{kind:"planet",id:"HD 219134 g",name:"g",orbitRadius:.00243945,size:.00105,color:13030621,inc:15,node:190.032,realRadiusKm:6371},{kind:"planet",id:"HD 219134 h",name:"h",orbitRadius:.020215,size:.00105,color:13030621,inc:15,node:327.54,realRadiusKm:6371}]},{id:"UPSILON_ANDROMEDAE",name:"Upsilon Andromedae",ra:24.1993,dec:41.4055,dist:13.478,tier:"secondary",mag:4.1,children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"ups And b",name:"b",orbitRadius:384941e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"ups And c",name:"c",orbitRadius:.00538053,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"ups And d",name:"d",orbitRadius:.0163364,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"55_CANCRI",name:"55 Cancri",ra:133.149,dec:28.3308,dist:12.587,tier:"secondary",children:[{kind:"star",size:.0011,color:16769478},{kind:"planet",id:"55 Cnc e",name:"e",orbitRadius:10036e-8,size:.00118089,color:13030621,inc:4.1538,node:0,realRadiusKm:11945.6},{kind:"planet",id:"55 Cnc b",name:"b",orbitRadius:767e-6,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"55 Cnc c",name:"c",orbitRadius:.0016055,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"55 Cnc f",name:"f",orbitRadius:.005213,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371},{kind:"planet",id:"55 Cnc d",name:"d",orbitRadius:.0364,size:.00105,color:13030621,inc:15,node:190.032,realRadiusKm:6371}]}],G3=[{id:"TEEGARDEN_S_STAR",name:"Teegarden's Star",ra:43.253716,dec:16.881287,dist:3.8316,tier:"secondary",mag:15.14},{id:"WOLF_1061",name:"Wolf 1061",ra:247.575243,dec:-12.662589,dist:4.3078,tier:"secondary",mag:10.07},{id:"HD_219134",name:"HD 219134",ra:348.320729,dec:57.168357,dist:6.5418,tier:"secondary",mag:5.57},{id:"GLIESE_667_C",name:"Gliese 667 C",ra:259.745114,dec:-34.996837,dist:7.2429,tier:"secondary",mag:10.22},{id:"MUPHRID",name:"Muphrid",ra:208.671162,dec:18.397721,dist:11.396,tier:"secondary",mag:2.68},{id:"DENEB_ALGEDI",name:"Deneb Algedi",ra:326.760184,dec:-16.127287,dist:11.8666,tier:"secondary",mag:2.83},{id:"PORRIMA",name:"Porrima",ra:190.415118,dec:-1.449404,dist:12.0202,tier:"secondary",mag:2.74},{id:"TRAPPIST_1",name:"TRAPPIST-1",ra:346.622369,dec:-5.041399,dist:12.4669,tier:"secondary",mag:18.8},{id:"55_CANCRI",name:"55 Cancri",ra:133.149213,dec:28.330821,dist:12.5868,tier:"secondary"},{id:"UPSILON_ANDROMEDAE",name:"Upsilon Andromedae",ra:24.19934,dec:41.405459,dist:13.4782,tier:"secondary",mag:4.1},{id:"ALSHAIN",name:"Alshain",ra:298.828304,dec:6.406764,dist:13.6008,tier:"secondary",mag:3.71},{id:"ERRAI",name:"Errai",ra:354.837127,dec:77.632364,dist:13.7899,tier:"secondary"},{id:"RASALHAGUE",name:"Rasalhague",ra:263.733623,dec:12.560037,dist:14.8965,tier:"secondary",mag:2.07},{id:"LHS_1140",name:"LHS 1140",ra:11.247212,dec:-15.27154,dist:14.9636,tier:"secondary",mag:14.15},{id:"ALDERAMIN",name:"Alderamin",ra:319.644885,dec:62.585574,dist:15.0376,tier:"secondary",mag:2.46},{id:"CAPH",name:"Caph",ra:2.294522,dec:59.149781,dist:16.7842,tier:"secondary",mag:2.27},{id:"ZOSMA",name:"Zosma",ra:168.527089,dec:20.523718,dist:17.9147,tier:"secondary",mag:2.53},{id:"MENKENT",name:"Menkent",ra:211.670615,dec:-36.369955,dist:18.0343,tier:"secondary",mag:2.05},{id:"WASAT",name:"Wasat",ra:110.030727,dec:21.982304,dist:18.598,tier:"secondary",mag:3.53},{id:"SARIN",name:"Sarin",ra:258.757961,dec:24.839207,dist:23.0362,tier:"secondary",mag:3.13},{id:"ALJANAH",name:"Aljanah",ra:311.552801,dec:33.970328,dist:23.1605,tier:"secondary",mag:2.48},{id:"KAUS_BOREALIS",name:"Kaus Borealis",ra:276.99267,dec:-25.421698,dist:23.2993,tier:"secondary",mag:2.81},{id:"MEGREZ",name:"Megrez",ra:183.856499,dec:57.032617,dist:24.7967,tier:"secondary",mag:3.32},{id:"MENKALINAN",name:"Menkalinan",ra:89.882179,dec:44.947433,dist:24.8694,tier:"secondary",mag:1.9},{id:"ALCOR",name:"Alcor",ra:201.306408,dec:54.98796,dist:25.0564,tier:"secondary",mag:4.01},{id:"ALIOTH",name:"Alioth",ra:193.50729,dec:55.959823,dist:25.31,tier:"secondary",mag:1.77},{id:"CEBALRAI",name:"Cebalrai",ra:265.868133,dec:4.567304,dist:25.4917,tier:"secondary",mag:2.75},{id:"PHECDA",name:"Phecda",ra:178.457697,dec:53.69476,dist:25.5037,tier:"secondary",mag:2.44},{id:"MERAK",name:"Merak",ra:165.460332,dec:56.382434,dist:25.9047,tier:"secondary",mag:2.37},{id:"MIZAR",name:"Mizar",ra:200.981419,dec:54.925352,dist:26.3089,tier:"secondary"},{id:"SEGINUS",name:"Seginus",ra:218.019465,dec:38.308248,dist:26.3765,tier:"secondary",mag:3.02},{id:"ASCELLA",name:"Ascella",ra:285.653043,dec:-29.880063,dist:27.0416,tier:"secondary",mag:2.59},{id:"SABIK",name:"Sabik",ra:257.594529,dec:-15.724907,dist:27.0929,tier:"secondary",mag:2.42},{id:"GACRUX",name:"Gacrux",ra:187.791498,dec:-57.113213,dist:27.1518,tier:"secondary",mag:1.64},{id:"ALGOL",name:"Algol",ra:47.042219,dec:40.955647,dist:27.571,tier:"secondary",mag:2.12},{id:"ALPHERATZ",name:"Alpheratz",ra:2.096916,dec:29.090431,dist:29.7442,tier:"secondary",mag:2.06},{id:"RUCHBAH",name:"Ruchbah",ra:21.453964,dec:60.235284,dist:30.4785,tier:"secondary",mag:2.68},{id:"ALNAIR",name:"Alnair",ra:332.05827,dec:-46.960974,dist:30.9693,tier:"secondary",mag:1.71},{id:"TOI_700",name:"TOI-700",ra:97.096786,dec:-65.579311,dist:31.1208,tier:"secondary",mag:13.08},{id:"ALKAID",name:"Alkaid",ra:206.885157,dec:49.313267,dist:31.8674,tier:"secondary",mag:1.86},{id:"VINDEMIATRIX",name:"Vindemiatrix",ra:195.544154,dec:10.959149,dist:33.1005,tier:"secondary",mag:2.79},{id:"ALGEDI",name:"Algedi",ra:304.513565,dec:-12.544852,dist:33.4292,tier:"secondary",mag:3.58},{id:"ALHENA",name:"Alhena",ra:99.42796,dec:16.39928,dist:33.5121,tier:"secondary",mag:1.92},{id:"MIAPLACIDUS",name:"Miaplacidus",ra:138.299906,dec:-69.717208,dist:34.6981,tier:"secondary",mag:1.69},{id:"DUBHE",name:"Dubhe",ra:165.931965,dec:61.751035,dist:37.679,tier:"secondary",mag:1.79},{id:"K2_18",name:"K2-18",ra:172.560491,dec:7.588404,dist:38.0997,tier:"secondary",mag:13.5},{id:"ALGIEBA",name:"Algieba",ra:154.993127,dec:19.841485,dist:39.8883,tier:"secondary"},{id:"MUHLIFAIN",name:"Muhlifain",ra:190.379334,dec:-48.959872,dist:39.9042,tier:"secondary",mag:2.17},{id:"KOCHAB",name:"Kochab",ra:222.676357,dec:74.155504,dist:40.1445,tier:"secondary",mag:2.08},{id:"MARKAB",name:"Markab",ra:346.190223,dec:15.205267,dist:40.8831,tier:"secondary",mag:2.48},{id:"ELNATH",name:"Elnath",ra:81.572971,dec:28.607452,dist:41.0509,tier:"secondary",mag:1.65},{id:"ACHERNAR",name:"Achernar",ra:24.428523,dec:-57.236753,dist:42.7533,tier:"secondary",mag:.46},{id:"SKAT",name:"Skat",ra:343.662526,dec:-15.82082,dist:43.2057,tier:"secondary",mag:3.28},{id:"KAUS_AUSTRALIS",name:"Kaus Australis",ra:276.042993,dec:-34.384616,dist:43.9367,tier:"secondary",mag:1.81},{id:"AIN",name:"Ain",ra:67.154168,dec:19.180434,dist:44.7119,tier:"secondary",mag:3.53},{id:"KORNEPHOROS",name:"Kornephoros",ra:247.555001,dec:21.489611,dist:45.4498,tier:"secondary",mag:2.77},{id:"HYADUM_I",name:"Hyadum I",ra:64.94835,dec:15.627642,dist:46.1585,tier:"secondary",mag:3.65},{id:"PRIMA_HYADUM",name:"Prima Hyadum",ra:64.94835,dec:15.627642,dist:46.1585,tier:"secondary",mag:3.65},{id:"ELTANIN",name:"Eltanin",ra:269.151541,dec:51.488896,dist:47.3037,tier:"secondary",mag:2.23},{id:"CHERTAN",name:"Chertan",ra:168.560024,dec:15.429571,dist:49.2223,tier:"secondary",mag:3.35},{id:"HYADUM_II",name:"Hyadum II",ra:65.73373,dec:17.542514,dist:49.2388,tier:"secondary",mag:3.76},{id:"GOMEISA",name:"Gomeisa",ra:111.787674,dec:8.289316,dist:49.5786,tier:"secondary",mag:2.89},{id:"ACAMAR",name:"Acamar",ra:44.565318,dec:-40.304678,dist:50.2394,tier:"secondary",mag:3.18},{id:"MAHASIM",name:"Mahasim",ra:89.930292,dec:37.212585,dist:50.7614,tier:"secondary",mag:2.62},{id:"PEACOCK",name:"Peacock",ra:306.411904,dec:-56.73509,dist:54.8246,tier:"secondary",mag:1.92},{id:"ALPHARD",name:"Alphard",ra:141.896845,dec:-8.6586,dist:55.2792,tier:"secondary",mag:1.97},{id:"AUVA",name:"Auva",ra:193.900869,dec:3.397469,dist:57.4498,tier:"secondary",mag:3.38},{id:"ZAURAK",name:"Zaurak",ra:59.507358,dec:-13.508515,dist:58.818,tier:"secondary",mag:2.94},{id:"SCHEAT",name:"Scheat",ra:345.943573,dec:28.082787,dist:60.0962,tier:"secondary",mag:2.42},{id:"MATAR",name:"Matar",ra:340.750537,dec:30.221215,dist:60.1294,tier:"secondary",mag:2.95},{id:"MIRACH",name:"Mirach",ra:17.433016,dec:35.620558,dist:60.5327,tier:"secondary",mag:2.05},{id:"NUNKI",name:"Nunki",ra:283.81636,dec:-26.296724,dist:69.8324,tier:"secondary",mag:2.07},{id:"SCHEDAR",name:"Schedar",ra:10.126846,dec:56.537329,dist:70.9673,tier:"secondary",mag:2.23},{id:"NEKKAR",name:"Nekkar",ra:225.48651,dec:40.390569,dist:72.0565,tier:"secondary",mag:3.52},{id:"IZAR",name:"Izar",ra:221.24674,dec:27.074222,dist:72.3238,tier:"secondary",mag:2.45},{id:"ALBALI",name:"Albali",ra:311.918957,dec:-9.495777,dist:74.8397,tier:"secondary",mag:3.77},{id:"SPICA",name:"Spica",ra:201.298247,dec:-11.161319,dist:76.5697,tier:"secondary",mag:.97},{id:"BELLATRIX",name:"Bellatrix",ra:81.282764,dec:6.349703,dist:77.3994,tier:"secondary",mag:1.64},{id:"THUBAN",name:"Thuban",ra:211.097323,dec:64.37587,dist:79.9003,tier:"secondary",mag:3.68},{id:"MIMOSA",name:"Mimosa",ra:191.930287,dec:-59.688772,dist:85.3971,tier:"secondary",mag:1.25},{id:"CANOPUS",name:"Canopus",ra:95.987958,dec:-52.695661,dist:94.7867,tier:"secondary",mag:-.74},{id:"ACRUX",name:"Acrux",ra:186.649563,dec:-63.099093,dist:98.7167,tier:"secondary"},{id:"TAYGETA",name:"Taygeta",ra:56.302083,dec:24.467274,dist:104.7735,tier:"secondary",mag:4.3},{id:"RASALGETHI",name:"Rasalgethi",ra:258.661909,dec:14.390341,dist:110.2536,tier:"secondary"},{id:"ALPHERG",name:"Alpherg",ra:22.870867,dec:15.345832,dist:114.5016,tier:"secondary",mag:3.62},{id:"RASTABAN",name:"Rastaban",ra:262.608174,dec:52.301389,dist:116.5501,tier:"secondary",mag:2.81},{id:"DABIH",name:"Dabih",ra:305.252777,dec:-14.781408,dist:119.0958,tier:"secondary",mag:3.08},{id:"ELECTRA",name:"Electra",ra:56.218905,dec:24.113338,dist:119.8222,tier:"secondary",mag:3.7},{id:"HADAR",name:"Hadar",ra:210.955856,dec:-60.373035,dist:120.1923,tier:"secondary",mag:.58},{id:"ALMACH",name:"Almach",ra:30.974801,dec:42.329728,dist:120.4819,tier:"secondary",mag:2.1},{id:"ATLAS",name:"Atlas",ra:57.290596,dec:24.053417,dist:123.177,tier:"secondary",mag:3.63},{id:"ALCYONE",name:"Alcyone",ra:56.871152,dec:24.105136,dist:123.6094,tier:"secondary",mag:2.87},{id:"ACRAB",name:"Acrab",ra:241.3593,dec:-19.805453,dist:123.9157,tier:"secondary",mag:2.62},{id:"ADHARA",name:"Adhara",ra:104.656453,dec:-28.972086,dist:124.2236,tier:"secondary",mag:1.5},{id:"MAIA",name:"Maia",ra:56.456701,dec:24.367744,dist:130.356,tier:"secondary",mag:3.87},{id:"POLARIS",name:"Polaris",ra:37.954561,dec:89.264109,dist:132.626,tier:"secondary",mag:2.02},{id:"CELAENO",name:"Celaeno",ra:56.200896,dec:24.289468,dist:135.4059,tier:"secondary",mag:5.46},{id:"ASTEROPE",name:"Asterope",ra:56.476985,dec:24.55451,dist:136.8869,tier:"secondary",mag:5.76},{id:"PLEIONE",name:"Pleione",ra:57.296736,dec:24.13671,dist:138.0948,tier:"secondary",mag:5.09},{id:"MEROPE",name:"Merope",ra:56.581608,dec:23.948359,dist:141.5028,tier:"secondary",mag:4.18},{id:"SEGIN",name:"Segin",ra:28.598892,dec:63.6701,dist:142.7817,tier:"secondary",mag:3.37},{id:"ALGENIB",name:"Algenib",ra:3.308968,dec:15.183598,dist:143.9387,tier:"secondary",mag:2.84},{id:"DSCHUBBA",name:"Dschubba",ra:240.083355,dec:-22.621706,dist:150.6024,tier:"secondary",mag:2.32},{id:"MIRZAM",name:"Mirzam",ra:95.674939,dec:-17.955919,dist:151.0574,tier:"secondary",mag:1.97},{id:"PHERKAD",name:"Pherkad",ra:230.182098,dec:71.834025,dist:151.6093,tier:"secondary",mag:3},{id:"BETELGEUSE",name:"Betelgeuse",ra:88.792939,dec:7.407064,dist:152.6718,tier:"secondary",mag:.42}],V3=24611855e-1,W3=[{id:"MERCURY",name:"Mercury",color:10129544,radiusKm:2440.5,obliquityDeg:.034,aAU:.38709761,e:.2056373,iDeg:7.0034221,nodeDeg:48.297722,periDeg:29.200358,M0Deg:26.945045,nDegPerDay:4.0923553},{id:"VENUS",name:"Venus",color:15124625,radiusKm:6051.8,obliquityDeg:177.36,aAU:.72331056,e:.0067616859,iDeg:3.3944358,nodeDeg:76.606367,periDeg:54.964233,M0Deg:15.749959,nDegPerDay:1.6022005},{id:"EARTH",name:"Earth",color:4882355,radiusKm:6371,obliquityDeg:23.44,aAU:.99975785,e:.016602201,iDeg:.0046175334,nodeDeg:198.53965,periDeg:262.96032,M0Deg:140.77244,nDegPerDay:.98596577},{id:"MARS",name:"Mars",color:12873038,radiusKm:3389.5,obliquityDeg:25.19,aAU:1.5237188,e:.093424811,iDeg:1.8475809,nodeDeg:49.479943,periDeg:286.69756,M0Deg:31.223275,nDegPerDay:.52401874},{id:"JUPITER",name:"Jupiter",color:14264691,radiusKm:69911,obliquityDeg:3.13,aAU:5.2084558,e:.04832694,iDeg:1.3027428,nodeDeg:100.51068,periDeg:274.96363,M0Deg:99.890278,nDegPerDay:.08291643},{id:"SATURN",name:"Saturn",color:14795657,radiusKm:58232,obliquityDeg:26.73,aAU:9.535538,e:.055489251,iDeg:2.4895448,nodeDeg:113.59753,periDeg:339.3146,M0Deg:279.84299,nDegPerDay:.033472355,rings:{innerRKm:74500,outerRKm:140180,color:14073988,opacity:.55}},{id:"URANUS",name:"Uranus",color:10475232,radiusKm:25362,obliquityDeg:97.77,aAU:19.169878,e:.046359794,iDeg:.77275465,nodeDeg:74.024841,periDeg:98.953859,M0Deg:253.19433,nDegPerDay:.011742892},{id:"NEPTUNE",name:"Neptune",color:3826848,radiusKm:24622,obliquityDeg:28.32,aAU:30.081471,e:.0094937088,iDeg:1.7700055,nodeDeg:131.78219,periDeg:276.12009,M0Deg:314.75848,nDegPerDay:.0059738659},{id:"PLUTO",name:"Pluto",color:11902083,radiusKm:1188.3,obliquityDeg:122.53,aAU:39.482117,e:.2488273,iDeg:17.140012,nodeDeg:110.30394,periDeg:113.76498,M0Deg:53.186619,nDegPerDay:.0039755715}],hn=Math.PI/180;function X3(){return Date.now()/864e5+24405875e-1}function K3(i,e){const t=e-V3,n=(i.M0Deg+i.nDegPerDay*t)*hn,s=Y3(n,i.e),r=i.aAU,a=Math.cos(s),o=Math.sin(s),c=r*(a-i.e),l=r*Math.sqrt(1-i.e*i.e)*o,u=Math.cos(i.periDeg*hn),f=Math.sin(i.periDeg*hn),d=Math.cos(i.iDeg*hn),m=Math.sin(i.iDeg*hn),g=Math.cos(i.nodeDeg*hn),_=Math.sin(i.nodeDeg*hn),h=u*c-f*l,p=f*c+u*l,E=h,M=d*p,T=m*p,L=g*E-_*M,P=_*E+g*M,A=T;return new R(L*_n,P*_n,A*_n)}function Y3(i,e){let t=i;e>0&&(t=i+e*Math.sin(i));for(let n=0;n<4;n++){const s=t-e*Math.sin(t)-i,r=1-e*Math.cos(t);t-=s/r}return t}const mr=ts.planet;function q3(i){return Math.max(4e-4,4e-4+15e-5*Math.log2(i/1e3))}function $3(i,e){const t=K3(i,e),n=i.nodeDeg*Math.PI/180,s=i.iDeg*Math.PI/180,r=Math.cos(n),a=Math.sin(n),o=r*t.x+a*t.y,c=-a*t.x+r*t.y,l=Math.cos(s),u=Math.sin(s),f=l*c+u*t.z;return Math.atan2(f,o)}function j3(i,e){if(!i.rings)return;const t=i.rings.innerRKm/i.radiusKm,n=i.rings.outerRKm/i.radiusKm;return{innerR:e*t,outerR:e*n,color:i.rings.color,opacity:i.rings.opacity}}function Z3(){const i=X3(),e=[{kind:"star",size:.0011,color:16773848,halo:{size:.0014,color:16767392,opacity:.32}}];for(const t of W3){const n=q3(t.radiusKm),s={kind:"planet",id:t.id,name:t.name,orbitRadius:t.aAU*_n,size:n,color:t.color,inc:t.iDeg,node:t.nodeDeg,angle:$3(t,i),obliquityDeg:t.obliquityDeg,realRadiusKm:t.radiusKm},r=j3(t,n);r&&(s.rings=r),e.push(s)}return e.push({kind:"belt",innerR:2.1*_n,outerR:3.3*_n,thickness:.025*_n,count:1600}),e}const J3={id:"SOL",name:"Sol",ra:0,dec:0,dist:0,tier:"primary",mag:-10,children:Z3()},Q3={id:"TAU_CETI",name:"Tau Ceti",ra:26.00906,dec:-15.93368,dist:3.652,tier:"primary",mag:3.5,children:[{kind:"star",size:.0015,color:16769448},{kind:"planet",id:"TAU_CETI_B",name:"b",orbitRadius:.06,size:.0013,color:mr,inc:5,node:25},{kind:"planet",id:"TAU_CETI_C",name:"c",orbitRadius:.11,size:.0015,color:mr,inc:8,node:200},{kind:"planet",id:"TAU_CETI_E",name:"e",orbitRadius:.17,size:.0019,color:mr,inc:11,node:110},{kind:"planet",id:"TAU_CETI_F",name:"f",orbitRadius:.255,size:.0016,color:mr,inc:6,node:310}]},eg=[{name:"Alpha Centauri",ra:219.9021,dec:-60.834,dist:1.34,tier:"primary",mag:-.27},{name:"Sirius",ra:101.28663,dec:-16.72093,dist:2.67,tier:"primary",mag:-1.46},{name:"Procyon",ra:114.8255,dec:5.225,dist:3.51,tier:"primary",mag:.34},{name:"Epsilon Eridani",ra:53.22829,dec:-9.45817,dist:3.22,tier:"primary",mag:3.73},{name:"40 Eridani",ra:63.82966,dec:-7.6709,dist:5.014,tier:"primary",mag:4.43},{name:"Altair",ra:297.6958,dec:8.8683,dist:5.13,tier:"primary",mag:.76},{name:"Vega",ra:279.2347,dec:38.7837,dist:7.68,tier:"primary",mag:.03},{name:"Fomalhaut",ra:344.4127,dec:-29.6222,dist:7.7,tier:"primary",mag:1.16},{name:"Denebola",ra:177.265,dec:14.572,dist:11,tier:"primary",mag:2.14},{name:"Pollux",ra:116.3289,dec:28.0262,dist:10.34,tier:"primary",mag:1.14},{name:"Arcturus",ra:213.9154,dec:19.1825,dist:11.26,tier:"primary",mag:-.05},{name:"Capella",ra:79.35015,dec:45.83684,dist:13.301,tier:"primary",mag:.08},{name:"Castor",ra:113.65498,dec:31.86906,dist:15.08,tier:"primary",mag:1.58},{name:"Aldebaran",ra:68.9888,dec:16.50504,dist:21.163,tier:"primary",mag:.87},{name:"Regulus",ra:152.05272,dec:11.99695,dist:24.247,tier:"primary",mag:1.4},{name:"Barnard's Star",ra:269.4485,dec:4.73942,dist:1.828,tier:"secondary",mag:9.51},{name:"Wolf 359",ra:164.10319,dec:7.00273,dist:2.409,tier:"secondary",mag:13.54},{name:"Lalande 21185",ra:165.83096,dec:35.94865,dist:2.546,tier:"secondary",mag:7.52},{name:"Ross 154",ra:282.45879,dec:-23.8371,dist:2.976,tier:"secondary",mag:10.43},{name:"Ross 248",ra:355.48002,dec:44.17038,dist:3.16,tier:"secondary",mag:12.29},{name:"Lacaille 9352",ra:346.50392,dec:-35.84716,dist:3.288,tier:"secondary",mag:7.34},{name:"61 Cygni",ra:316.74848,dec:38.76386,dist:3.497,tier:"secondary",mag:5.21},{name:"Struve 2398",ra:280.68307,dec:59.63836,dist:3.523,tier:"secondary",mag:8.9},{name:"Epsilon Indi",ra:330.87241,dec:-56.79725,dist:3.638,tier:"secondary",mag:4.69},{name:"Kapteyn's Star",ra:77.95994,dec:-45.04381,dist:3.934,tier:"secondary",mag:8.85},{name:"70 Ophiuchi",ra:271.36591,dec:2.4942,dist:5.106,tier:"secondary",mag:4.03},{name:"Gliese 570",ra:224.37159,dec:-21.42314,dist:5.886,tier:"secondary",mag:5.72},{name:"Sigma Draconis",ra:293.0976,dec:69.65345,dist:5.764,tier:"secondary",mag:4.67},{name:"Eta Cassiopeiae",ra:12.28118,dec:57.81574,dist:5.927,tier:"secondary",mag:3.45},{name:"82 Eridani",ra:50.00034,dec:-43.06655,dist:6.041,tier:"secondary",mag:4.26},{name:"Delta Pavonis",ra:302.19504,dec:-66.18709,dist:6.099,tier:"secondary",mag:3.55},{name:"Gliese 105",ra:39.07168,dec:6.87809,dist:7.223,tier:"secondary",mag:5.79},{name:"107 Piscium",ra:25.62259,dec:20.26552,dist:7.644,tier:"secondary",mag:5.24},{name:"Ross 128",ra:176.935,dec:.8044,dist:3.375,tier:"secondary",mag:11.13},{name:"WISE 0855-0714",ra:133.7952,dec:-7.2451,dist:2.28,tier:"secondary",mag:25}];function tg(i){return i.toUpperCase().replace(/[^A-Z0-9]+/g,"_")}function ig(i){return{id:tg(i.name),name:i.name,ra:i.ra,dec:i.dec,dist:i.dist,tier:i.tier,mag:i.mag,children:[{kind:"star",size:.0011,color:16777215}]}}const ng=new Set(Cu.map(i=>i.id));function sg(i){return{id:i.id,name:i.name,ra:i.ra,dec:i.dec,dist:i.dist,tier:i.tier,mag:i.mag,children:[{kind:"star",size:.0011,color:16777215}]}}const Lu=[],Ml=new Set;for(const i of[J3,Q3,...eg.map(ig),...G3.map(sg)])Ml.has(i.id)||(Ml.add(i.id),Lu.push(i));const Iu=[...Cu,...Lu.filter(i=>!ng.has(i.id))],Ur=14,Uu=10,rg=8.4,ag=7.6,gr=9,og=500,Sl=.1,Nr=class Nr{constructor(e){$e(this,"renderer");$e(this,"scene",new o2);$e(this,"camera");$e(this,"controls");$e(this,"composer");$e(this,"bloom");$e(this,"canvas");$e(this,"grids");$e(this,"stems");$e(this,"skybox");$e(this,"markers");$e(this,"constellations");$e(this,"setStarCamDist");$e(this,"setStarCamPos");$e(this,"kd");$e(this,"nearCount",0);$e(this,"systems",new Map);$e(this,"cursor");$e(this,"selectedSystemId","SOL");$e(this,"travelPath");$e(this,"travelAccelG",1);$e(this,"travelStats",null);$e(this,"heldPanKeys",new Set);$e(this,"lastFrameTimeMs",performance.now());$e(this,"pickDownPos",null);$e(this,"basePath","");$e(this,"lastShrink",1);$e(this,"running",!1);$e(this,"onHud");$e(this,"trackedLabels",new Map);$e(this,"resize",()=>{var n,s;const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),(n=this.composer)==null||n.setSize(e,t),(s=this.bloom)==null||s.setSize(e,t)});$e(this,"onPickPointerDown",e=>{e.pointerType!=="mouse"&&e.pointerType!=="touch"&&e.pointerType!=="pen"||e.pointerType==="mouse"&&e.button!==0||(this.pickDownPos={x:e.clientX,y:e.clientY,pointerType:e.pointerType})});$e(this,"onPickPointerUp",e=>{const t=this.pickDownPos;if(this.pickDownPos=null,!t||e.pointerType!==t.pointerType||e.pointerType==="mouse"&&e.button!==0)return;const n=t.pointerType==="mouse"?4:10;Math.hypot(e.clientX-t.x,e.clientY-t.y)>n||this.pickSystemAt(e.clientX,e.clientY)});$e(this,"onPickPointerMove",e=>{if(!this.flyAbort)return;const t=this.pickDownPos;if(!t||e.pointerType!==t.pointerType)return;const n=t.pointerType==="mouse"?4:10;Math.hypot(e.clientX-t.x,e.clientY-t.y)>n&&this.flyAbort()});$e(this,"onPanKeyDown",e=>{if(!Nr.PAN_KEY_CODES.has(e.code))return;const t=e.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||e.ctrlKey||e.metaKey||e.altKey||(this.heldPanKeys.add(e.code),(e.code.startsWith("Arrow")||e.code==="Space")&&e.preventDefault())});$e(this,"onPanKeyUp",e=>{this.heldPanKeys.delete(e.code)});$e(this,"loop",()=>{var n,s,r,a,o,c,l,u,f,d;if(!this.running)return;requestAnimationFrame(this.loop);const e=performance.now(),t=Math.min(.1,(e-this.lastFrameTimeMs)/1e3);this.lastFrameTimeMs=e,this.tickKeyboardPan(t),this.controls.update(),(n=this.cursor)==null||n.tick(),(s=this.travelPath)==null||s.tick(performance.now()/1e3);{const m=this.controls.target,g=this.camera.position,_=g.distanceTo(m);(r=this.grids)==null||r.update(m,g,_),(a=this.stems)==null||a.update(m,_*.4),(o=this.stems)==null||o.setCamPos(g),(c=this.setStarCamDist)==null||c.call(this,_),(l=this.setStarCamPos)==null||l.call(this,g),(u=this.markers)==null||u.setCamPos(g),(f=this.constellations)==null||f.setCamDist(_),(d=this.constellations)==null||d.setCamPos(g),this.applyBodyShrink(_)}this.composer.render(),this.publishHud()});$e(this,"flyAbort",null);this.canvas=e,this.renderer=new a2({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=new it(ts.bg),this.camera=new ni(46,1,V2,G2),this.camera.up.set(0,0,1),this.camera.position.set(8,-13,9)}setHudCallback(e){this.onHud=e}async init(e){var a;this.basePath=e,this.grids=r3(),this.scene.add(this.grids.group),this.constellations=A3(),this.scene.add(this.constellations.object);for(const o of Iu){const c=d3(o);this.systems.set(o.id,c),c.group&&this.scene.add(c.group)}try{this.skybox=await H3(`${e}/data/skybox.webp`,.34),this.scene.add(this.skybox.mesh)}catch{}const t=await Q2(e);this.scene.add(t.near),this.nearCount=t.nearCount,this.setStarCamDist=t.setCamDist,this.setStarCamPos=t.setCamPos.bind(t),this.kd=t.kdtree;const n=[];for(const o of this.systems.values())n.push(o.center);this.markers=J2(n),this.scene.add(this.markers.object),this.stems=c3(n),this.scene.add(this.stems.object),this.cursor=y3(),this.cursor.object.visible=!1,this.scene.add(this.cursor.object);const s=this.systems.get(this.selectedSystemId);s&&this.cursor.setTo(s.center,s.bbox),this.travelPath=B3(),this.scene.add(this.travelPath.group),this.refreshTravelPath(),this.controls=new x2(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.rotateSpeed=.6,this.controls.zoomSpeed=1.15,this.controls.minDistance=.001,this.controls.maxDistance=W2,this.controls.target.set(0,0,0);const r=typeof window<"u"&&((a=window.matchMedia)==null?void 0:a.call(window,"(pointer: coarse)").matches);this.controls.enablePan=!r,this.controls.screenSpacePanning=!1,this.controls.mouseButtons.MIDDLE=vn.PAN,window.addEventListener("keydown",this.onPanKeyDown),window.addEventListener("keyup",this.onPanKeyUp),this.canvas.addEventListener("pointerdown",this.onPickPointerDown),this.canvas.addEventListener("pointerup",this.onPickPointerUp),this.canvas.addEventListener("pointermove",this.onPickPointerMove),this.composer=new O2(this.renderer),this.composer.addPass(new B2(this.scene,this.camera)),this.bloom=new es(new He(1,1),.26,.32,.22),this.composer.addPass(this.bloom),this.composer.addPass(new H2),this.resize(),this.start()}start(){this.running=!0,this.loop()}pickSystemAt(e,t){const s=this.canvas.getBoundingClientRect(),r=e-s.left,a=t-s.top,o=this.canvas.clientWidth,c=this.canvas.clientHeight,l=new R,u=new R;let f=null,d=22*22;const m=(h,p)=>{if(l.copy(h).project(this.camera),l.z>1)return;const E=(l.x*.5+.5)*o,M=(-l.y*.5+.5)*c,T=(E-r)**2+(M-a)**2;T<d&&(d=T,f=p)};for(const h of this.systems.values()){m(h.center,h.def.id);for(const p of h.planets)u.copy(p.local).add(h.center),m(u,h.def.id)}if(!f)return;const g=this.systems.get(f);if(!g)return;this.selectSystem(f);const _=this.camera.position.clone().sub(this.controls.target);this.flyTo(g.center.clone().add(_),g.center.clone())}tickKeyboardPan(e){if(this.heldPanKeys.size===0)return;const t=this.heldPanKeys;let n=0,s=0,r=0;if((t.has("ArrowLeft")||t.has("KeyA"))&&(n-=1),(t.has("ArrowRight")||t.has("KeyD"))&&(n+=1),(t.has("ArrowUp")||t.has("KeyW"))&&(s+=1),(t.has("ArrowDown")||t.has("KeyS"))&&(s-=1),t.has("Space")&&(r+=1),(t.has("ShiftLeft")||t.has("ShiftRight"))&&(r-=1),n===0&&s===0&&r===0)return;const a=this.controls.target,c=this.camera.position.distanceTo(a)*.95*e,l=new R().setFromMatrixColumn(this.camera.matrix,0),u=new R().crossVectors(this.camera.up,l),f=new R().addScaledVector(l,n*c).addScaledVector(u,s*c).addScaledVector(this.camera.up,r*c),d=a.clone().add(f);d.length()>cl&&(d.setLength(cl),f.subVectors(d,a)),a.add(f),this.camera.position.add(f)}applyBodyShrink(e){const t=Ts.smoothstep(e,.002,.05);if(!(Math.abs(t-this.lastShrink)<.005)){this.lastShrink=t;for(const n of this.systems.values()){const s=n.group;s&&s.traverse(r=>{var o;const a=(o=r.userData)==null?void 0:o.bodyKind;if(r instanceof Nt){if(a==="planet-marker"){const c=r.userData.realScaleTarget??Sl;r.scale.setScalar(Ts.lerp(c,1,t))}else if(a==="star-sphere"||a==="star-halo"){const c=Math.min(Sl,r.userData.shrinkTarget??1),l=r.userData.upperBound??1;r.scale.setScalar(Ts.lerp(c,l,t))}}})}}}publishHud(){if(!this.onHud)return;const e=this.camera.position.distanceTo(this.controls.target),t=this.canvas.clientWidth,n=this.canvas.clientHeight,s=performance.now(),r=this.collectLabelAnchors(e,t,n),a=new Map;for(const d of r)a.set(d.key,d);const o=lg(r,t,n),c=new Set(o.map(d=>d.key));for(const d of r){const m=c.has(d.key),g=this.trackedLabels.get(d.key);g?(g.anchor=d,g.visible=m,m&&(g.lastSeen=s)):m&&this.trackedLabels.set(d.key,{anchor:d,visible:!0,lastSeen:s})}for(const[d,m]of this.trackedLabels)a.has(d)&&c.has(d)||(m.visible=!1),!m.visible&&s-m.lastSeen>og&&this.trackedLabels.delete(d);const l=[];for(const[d,m]of this.trackedLabels){const g=m.anchor,_=g.x+Ur,h=g.y-Ur,p=_+Uu;l.push({key:d,name:g.name,kind:g.kind,tier:g.tier,ax:g.x,ay:g.y,lx:p,ly:h,elbowX:_,opacity:m.visible?g.opacity:0})}const u=this.systems.get(this.selectedSystemId),f=s3(e,this.canvas.clientHeight||n,this.camera.fov);this.onHud({labels:l,camDist:e,nearCount:this.nearCount,selectedSystemName:u?u.def.name:"—",travel:{eligible:this.selectedSystemId!=="SOL",stats:this.travelStats},gridScale:f})}collectLabelAnchors(e,t,n){const s=[],r=new R,a=new R,o=this.camera.position;for(const c of this.systems.values()){const l=c.def.tier;if(r.copy(c.center).project(this.camera),r.z<=1&&r.x>=-1.05&&r.x<=1.05&&r.y>=-1.05&&r.y<=1.05&&s.push({key:c.def.id,name:c.def.name.toUpperCase(),kind:"system",tier:l,camDist:o.distanceTo(c.center),x:(r.x*.5+.5)*t,y:(-r.y*.5+.5)*n,opacity:1}),c.planets.length===0)continue;const u=o.distanceTo(c.center),f=cg(u,c.visualHalf);if(!(f<=.01))for(const d of c.planets)a.copy(d.local).add(c.center),r.copy(a).project(this.camera),!(r.z>1||r.x<-1.05||r.x>1.05||r.y<-1.05||r.y>1.05)&&s.push({key:d.id,name:d.name.toUpperCase(),kind:"planet",tier:"secondary",camDist:o.distanceTo(a),x:(r.x*.5+.5)*t,y:(-r.y*.5+.5)*n,opacity:f})}return s}setConstellationsVisible(e){var t;(t=this.constellations)==null||t.setVisible(e)}setGridVisible(e){this.grids&&(this.grids.group.visible=e),this.stems&&(this.stems.object.visible=e)}selectSystem(e){const t=this.systems.get(e);t&&(this.selectedSystemId=e,this.cursor.setTo(t.center,t.bbox),this.refreshTravelPath())}setTravelPathVisible(e){var t;(t=this.travelPath)==null||t.setVisible(e&&this.selectedSystemId!=="SOL")}setTravelAccelG(e){this.travelAccelG=e,this.refreshTravelPath()}refreshTravelPath(){if(!this.travelPath)return;const e=this.systems.get(this.selectedSystemId);if(!e||this.selectedSystemId==="SOL"){this.travelStats=null,this.travelPath.setVisible(!1);return}this.travelPath.rebuild(this.earthWorldPos(),e.center,this.travelAccelG,e.def.dist),this.travelStats=Du(e.def.dist,this.travelAccelG)}earthWorldPos(){const e=this.systems.get("SOL"),t=e==null?void 0:e.planets.find(n=>n.id==="SOL/EARTH");return!e||!t?new R(0,0,0):e.center.clone().add(t.local)}focusSystem(e){const t=this.systems.get(e);if(!t)return;this.selectSystem(e);const s=t.planets.length>0?Math.max(t.visualHalf*3,.0015):.8,r=new R(s*.46,-s*.74,s*.49);this.flyTo(t.center.clone().add(r),t.center)}viewHome(){this.selectSystem("SOL"),this.flyTo(new R(8,-13,9),new R(0,0,0))}getCameraState(){const e=this.controls.target,t=new R().subVectors(this.camera.position,e),n=t.length(),s=Math.atan2(t.y,t.x),r=Math.asin(t.z/Math.max(n,1e-9));return{systemId:this.selectedSystemId,dist:n,yaw:s,pitch:r}}applyCameraState(e){var g;const t=e.systemId??this.selectedSystemId,n=this.systems.get(t);if(!n)return;this.selectSystem(t);const r=n.planets.length>0?Math.max(n.visualHalf*3,.0015):.8,a=new R(.46,-.74,.49).normalize(),o=Math.atan2(a.y,a.x),c=Math.asin(a.z),l=e.dist??r,u=e.yaw??o,f=e.pitch??c,d=Math.cos(f),m=new R(Math.cos(u)*d,Math.sin(u)*d,Math.sin(f));(g=this.flyAbort)==null||g.call(this),this.controls.target.copy(n.center),this.camera.position.copy(n.center).addScaledVector(m,l)}viewPleiades(){const e=new R(192.837,331.484,28.244),n=e.clone().setZ(0).normalize().multiplyScalar(-4);n.z=0,this.flyTo(n,e)}flyTo(e,t){var l;(l=this.flyAbort)==null||l.call(this);const n=this.camera.position.clone(),s=this.controls.target.clone(),r=performance.now(),a=900;let o=!1;const c=()=>{if(o)return;const u=Math.min(1,(performance.now()-r)/a),f=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;this.camera.position.lerpVectors(n,e,f),this.controls.target.lerpVectors(s,t,f),u<1?requestAnimationFrame(c):this.flyAbort=null};this.flyAbort=()=>{o=!0,this.flyAbort=null},c()}dispose(){var e,t,n;this.running=!1,window.removeEventListener("resize",this.resize),window.removeEventListener("keydown",this.onPanKeyDown),window.removeEventListener("keyup",this.onPanKeyUp),this.canvas.removeEventListener("pointerdown",this.onPickPointerDown),this.canvas.removeEventListener("pointerup",this.onPickPointerUp),this.canvas.removeEventListener("pointermove",this.onPickPointerMove),(e=this.flyAbort)==null||e.call(this),(t=this.controls)==null||t.dispose(),(n=this.travelPath)==null||n.dispose(),this.renderer.dispose()}};$e(Nr,"PAN_KEY_CODES",new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight"]));let _o=Nr;function cg(i,e){const t=Math.max(e,5e-4);return 1-Ts.smoothstep(i,t*3,t*12)}function lg(i,e,t){if(i.length===0)return[];const n=i.slice().sort((a,o)=>a.camDist-o.camDist),s=[],r=[];for(const a of n){const o=a.x+Ur,c=a.y-Ur,l=o+Uu;if(c<-2*gr||c>t+2*gr)continue;const u=a.kind==="planet"?ag:rg,f=Math.max(8,a.name.length*u),d={l:l-2,r:l+f+2,t:c-gr,b:c+gr};let m=!1;for(const g of s)if(d.l<g.r&&d.r>g.l&&d.t<g.b&&d.b>g.t){m=!0;break}m||(s.push(d),r.push({key:a.key,name:a.name,kind:a.kind,tier:a.tier,ax:a.x,ay:a.y,lx:l,ly:c,elbowX:o,opacity:a.opacity}))}return r}var ug=qt('<link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-1uha8ag"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" class="svelte-1uha8ag"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400;500;700&amp;display=swap" rel="stylesheet" class="svelte-1uha8ag"/>',1),hg=vo('<g><circle class="ring svelte-1uha8ag" r="5"></circle><polyline class="svelte-1uha8ag"></polyline></g>'),dg=qt('<div><span class="name svelte-1uha8ag"> </span></div>'),fg=qt("<li> </li>"),pg=qt('<ul class="search-results svelte-1uha8ag"></ul>'),mg=qt('<div class="travel-readout svelte-1uha8ag"><div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Distance</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Ship Time</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Earth Time</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Peak v</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Fuel Mass</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Energy</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-foot svelte-1uha8ag">Payload 1,000 t · photonic drive (vₑ = c)</div></div> <div class="overlay-slider svelte-1uha8ag"><div class="slider-head svelte-1uha8ag"><span class="slider-label svelte-1uha8ag">Constant Accel</span> <span class="slider-value svelte-1uha8ag"> </span></div> <input type="range" min="0.1" max="5" step="0.1" aria-label="Constant proper acceleration in g" class="svelte-1uha8ag"/> <div class="slider-ticks svelte-1uha8ag" aria-hidden="true"><span class="svelte-1uha8ag">0.1</span><span class="svelte-1uha8ag">1</span><span class="svelte-1uha8ag">5</span></div></div>',1),gg=vo('<line y1="4" y2="10" class="minor svelte-1uha8ag"></line>'),_g=vo('<line y1="1" y2="13" class="major svelte-1uha8ag"></line>'),vg=qt('<b class="svelte-1uha8ag"> </b>'),xg=qt('<b class="svelte-1uha8ag"> </b>'),Mg=qt('<aside class="hud scale-legend svelte-1uha8ag" aria-label="Grid scale legend"><div class="scale-title svelte-1uha8ag">Grid Scale</div> <svg class="scale-bar svelte-1uha8ag" preserveAspectRatio="none" aria-hidden="true"><defs class="svelte-1uha8ag"><clipPath id="scaleBarClip" class="svelte-1uha8ag"><rect x="0" y="0" height="14" class="svelte-1uha8ag"></rect></clipPath></defs><g clip-path="url(#scaleBarClip)" class="svelte-1uha8ag"><line x1="0" y1="7" y2="7" class="baseline svelte-1uha8ag"></line><g class="minor-ticks svelte-1uha8ag"></g><g class="major-caps svelte-1uha8ag"></g></g></svg> <div class="scale-rows svelte-1uha8ag"><div class="scale-row major svelte-1uha8ag"><span class="dot svelte-1uha8ag"></span><span class="lbl svelte-1uha8ag">Major</span> <!></div> <div class="scale-row minor svelte-1uha8ag"><span class="dot minor-dot svelte-1uha8ag"></span> <span class="lbl svelte-1uha8ag">Minor</span> <!></div></div></aside>'),Sg=qt('<div class="overlay svelte-1uha8ag"><div class="boot svelte-1uha8ag"><div class="boot-label svelte-1uha8ag">Initialising Stellar Catalogue</div> <div class="boot-bar svelte-1uha8ag"><span class="svelte-1uha8ag"></span></div> <div class="boot-sub svelte-1uha8ag">Gaia DR3 · All-Sky Astrometry</div></div></div>'),yg=qt('<div class="overlay svelte-1uha8ag"><div class="boot err svelte-1uha8ag"><div class="boot-label svelte-1uha8ag">Catalogue Load Failed</div> <div class="boot-sub svelte-1uha8ag"> </div></div></div>'),Eg=qt(`<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="About this atlas"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Atlas</div> <h2 class="about-title svelte-1uha8ag">About GAIA Atlas</h2> <div class="about-rule svelte-1uha8ag"></div> <p class="about-body svelte-1uha8ag">Welcome to GAIA Atlas! This is an expansion of the original recreation of the <a href="https://valhovey.github.io/gaia-mary/" target="_blank" class="svelte-1uha8ag">Project Hail Mary star map</a> built using the <a href="https://www.cosmos.esa.int/web/gaia/dr3" target="_blank" class="svelte-1uha8ag">GAIA DR3 dataset</a> which contains 1.8 billion stars as well as their parameters (location, distance, spectra). Exoplanets are sourced from NASA's <a href="https://science.nasa.gov/exoplanets/exoplanet-catalog/" target="_blank" class="svelte-1uha8ag">exoplanet catalog</a>. Where GAIA was missing information, stellar data was supplemented with <a href="https://simbad.u-strasbg.fr/simbad/" target="_blank" class="svelte-1uha8ag">SIMBAD</a> information. All planet locations in the solar system are accurate on page load, and Pluto is included because I love them. Constellations are using the <a href="https://iauarchive.eso.org/public/themes/constellations/" target="_blank" class="svelte-1uha8ag">IAU standard sky culture</a>. The skybox is rendered from the remaining stars in the full GAIA dataset that are not included in the 3D system loaded in the browser (which means that if a star is in the map, it does not show up in the skybox). Also, for relativistic rocket calculations I used the equations in <a href="https://math.ucr.edu/home/baez/physics/Relativity/SR/Rocket/rocket.html" target="_blank" class="svelte-1uha8ag">John Baez' Relativistic Rocket FAQ</a>. For much more detailed calculations use <a href="https://www.overvieweffekt.com/tools/relativistic-travel-calculator" target="_blank" class="svelte-1uha8ag">Overview Effekt's wonderful calculator</a>. I hope you enjoy your explorations!</p> <p class="about-body svelte-1uha8ag"></p> <p class="about-sign svelte-1uha8ag">— <a href="https://valhovey.github.io" target="_blank" rel="noreferrer" class="svelte-1uha8ag">Val</a></p></div></div>`),bg=qt('<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about controls svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="Controls"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Controls</div> <h2 class="about-title svelte-1uha8ag">Navigation</h2> <div class="about-rule svelte-1uha8ag"></div> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Move</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><kbd class="svelte-1uha8ag">W</kbd><kbd class="svelte-1uha8ag">A</kbd><kbd class="svelte-1uha8ag">S</kbd><kbd class="svelte-1uha8ag">D</kbd></span> <span class="desc svelte-1uha8ag">Pan along the ecliptic plane</span> <span class="keys svelte-1uha8ag"><kbd class="svelte-1uha8ag">↑</kbd><kbd class="svelte-1uha8ag">←</kbd><kbd class="svelte-1uha8ag">↓</kbd><kbd class="svelte-1uha8ag">→</kbd></span> <span class="desc svelte-1uha8ag">Arrow-key alternative — same pan</span> <span class="keys svelte-1uha8ag"><kbd class="kbd-wide svelte-1uha8ag">Space</kbd><kbd class="kbd-wide svelte-1uha8ag">Shift</kbd></span> <span class="desc svelte-1uha8ag">Rise · descend (out of the ecliptic plane)</span></div></section> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Look</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Drag</span></span> <span class="desc svelte-1uha8ag">Orbit camera around the target</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Scroll</span></span> <span class="desc svelte-1uha8ag">Zoom in · out</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Mid-drag</span></span> <span class="desc svelte-1uha8ag">Pan (mouse only)</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Pinch</span></span> <span class="desc svelte-1uha8ag">Zoom (touch)</span></div></section> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Select</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Tap / Click</span></span> <span class="desc svelte-1uha8ag">Focus a star or planet</span> <span class="keys svelte-1uha8ag"><kbd class="kbd-wide svelte-1uha8ag">Esc</kbd></span> <span class="desc svelte-1uha8ag">Close panel · dismiss search</span></div></section></div></div>'),Tg=qt('<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about share svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="Share view"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Transmission</div> <h2 class="about-title svelte-1uha8ag">Share View</h2> <div class="about-rule svelte-1uha8ag"></div> <p class="share-lede svelte-1uha8ag">Choose which pieces of your current view to include in the link.</p> <div class="share-grid svelte-1uha8ag"><label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">System</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Zoom</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Camera Direction</span></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Constellations</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Grid</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Travel Mode</span> <em class="share-hint svelte-1uha8ag"> </em></label></div> <div class="share-url svelte-1uha8ag"><input type="text" readonly="" aria-label="Share URL" class="svelte-1uha8ag"/> <button type="button"> </button></div></div></div>'),Ag=qt('<div><canvas class="svelte-1uha8ag"></canvas> <div class="scrim svelte-1uha8ag"></div> <svg class="leaders svelte-1uha8ag" aria-hidden="true"></svg> <div class="labels svelte-1uha8ag"></div> <div class="frame svelte-1uha8ag"><span class="corner tl svelte-1uha8ag"></span> <span class="corner tr svelte-1uha8ag"></span> <span class="corner bl svelte-1uha8ag"></span> <span class="corner br svelte-1uha8ag"></span></div> <header class="hud tl-panel svelte-1uha8ag"><div class="title svelte-1uha8ag">GAIA ATLAS</div> <div class="rule svelte-1uha8ag"></div> <div class="subtitle svelte-1uha8ag">Local Stellar Atlas</div> <div class="tl-btn-row svelte-1uha8ag"><button class="about-btn svelte-1uha8ag"><span class="ico svelte-1uha8ag">i</span>About</button> <button class="about-btn controls-btn svelte-1uha8ag" aria-label="Show keyboard and tap controls"><span class="ico kb svelte-1uha8ag" aria-hidden="true">⌨</span>Controls</button></div></header> <section class="hud tr-panel svelte-1uha8ag"><div><input type="search" inputmode="search" enterkeyhint="search" placeholder="Search" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" class="svelte-1uha8ag"/> <!> <label class="search-filter svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Only exoplanet systems</span></label></div> <div class="row system svelte-1uha8ag"><span class="svelte-1uha8ag">System</span><b class="svelte-1uha8ag"> </b></div> <div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Range</span><b class="svelte-1uha8ag"> </b></div></section> <div class="hud bottom-left-stack svelte-1uha8ag"><section class="overlays-panel svelte-1uha8ag"><div class="overlays-deck svelte-1uha8ag"><!></div> <div class="overlays-title svelte-1uha8ag">Overlays</div> <label class="overlay-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Constellations</span></label> <label class="overlay-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Grid</span></label> <label><input type="checkbox" class="svelte-1uha8ag"/> <span class="lbl-full svelte-1uha8ag">Interstellar Travel Time</span> <span class="lbl-short svelte-1uha8ag">Travel</span></label></section> <nav class="action-row svelte-1uha8ag" aria-label="View actions"><button class="action-btn svelte-1uha8ag" type="button"><span class="action-glyph svelte-1uha8ag" aria-hidden="true">◇</span>Home</button> <button class="action-btn svelte-1uha8ag" type="button"><span class="action-glyph svelte-1uha8ag" aria-hidden="true">⇗</span>Share</button></nav></div> <!> <footer class="hud br-panel svelte-1uha8ag"><span class="hint svelte-1uha8ag">Drag orbit · Scroll zoom<em class="svelte-1uha8ag">/</em></span>GAIA Atlas</footer> <!> <!> <!> <!> <!></div>');function Ng(i,e){Mh(e,!0);const t=500;let n,s=null,r=Ut(Xo({labels:[],camDist:0,nearCount:0,selectedSystemName:"Sol",travel:{eligible:!1,stats:null},gridScale:{major:0,minor:0,f:0}})),a=Ut(!0),o=Ut(null),c=Ut(!1),l=Ut(!1),u=Ut(!1),f=Xo({system:!0,zoom:!0,direction:!0,constellations:!0,grid:!0,travel:!0}),d=Ut(!1),m=null,g=Ut(0);const _=3.26156,h=365.25*86400;function p(z){return z<1?`${(z*_).toFixed(3)} ly`:z<100?`${z.toFixed(2)} pc / ${(z*_).toFixed(1)} ly`:`${z.toFixed(0)} pc / ${(z*_).toFixed(0)} ly`}const E=206264.806;function M(z){if(z<=0)return"—";const V=z/3;if(V>=1e3)return`${(V/1e3).toPrecision(3)} kpc`;if(V>=10)return`${V.toPrecision(3)} pc`;if(V>=1)return`${V.toFixed(2)} pc`;const Ae=V*_;if(Ae>=1)return`${Ae.toPrecision(3)} ly`;const Fe=V*E;return Fe>=1?`${Fe.toPrecision(3)} AU`:`${Fe.toExponential(2)} AU`}function T(z){if(z<86400)return`${(z/3600).toFixed(1)} h`;const V=z/h;if(V<1)return`${(z/86400).toFixed(1)} d`;if(V<10){const Ae=Math.floor(V),Fe=Math.round((V-Ae)*12);return Fe===12?`${Ae+1} y`:Fe>0?`${Ae} y ${Fe} mo`:`${Ae} y`}return V<1e3?`${V.toFixed(1)} yr`:V<1e6?`${(V/1e3).toFixed(2)} kyr`:V<1e9?`${(V/1e6).toFixed(2)} Myr`:`${V.toExponential(2)} yr`}function L(z){const V=z/1e3;return V<1?`${(V*1e3).toFixed(0)} kg`:V<1e3?`${V.toFixed(1)} t`:V<1e6?`${(V/1e3).toFixed(2)} kt`:V<1e9?`${(V/1e6).toFixed(2)} Mt`:V<1e12?`${(V/1e9).toFixed(2)} Gt`:`${V.toExponential(2)} t`}function P(z){const V=[[1,"J"],[1e3,"kJ"],[1e6,"MJ"],[1e9,"GJ"],[1e12,"TJ"],[1e15,"PJ"],[1e18,"EJ"],[1e21,"ZJ"],[1e24,"YJ"]];if(z<1)return`${z.toExponential(2)} J`;for(let Ae=V.length-1;Ae>=0;Ae--)if(z>=V[Ae][0]){const[Fe,ft]=V[Ae];return`${(z/Fe).toFixed(2)} ${ft}`}return`${z.toExponential(2)} J`}function A(z){const V=z/9460730472580800;return V<1?`${(V*1e3).toFixed(0)} mly`:V<100?`${V.toFixed(2)} ly`:V<1e4?`${V.toFixed(1)} ly`:V<1e6?`${(V/1e3).toFixed(2)} kly`:V<1e9?`${(V/1e6).toFixed(2)} Mly`:`${V.toExponential(2)} ly`}const F=Iu.map(z=>({id:z.id,name:z.name,prepared:ec.prepare(z.name),hasPlanets:z.children.some(V=>V.kind==="planet")}));let Q=Ut(""),v=Ut(!1),S=Ut(0),X=Ut(null),K=Ut(!1),Y=Ut(!1),ie=Ut(!0),H=Ut(1),re=Ut(!1);ki(()=>{const z=J(Y);s&&s.setConstellationsVisible(z)}),ki(()=>{const z=J(ie);s&&s.setGridVisible(z)}),ki(()=>{const z=J(H);s&&s.setTravelAccelG(z)}),ki(()=>{const z=J(re);s&&s.setTravelPathVisible(z)}),ki(()=>{!J(r).travel.eligible&&J(re)&&Ye(re,!1)});const W=li(()=>{const z=J(K)?F.filter(Fe=>Fe.hasPlanets):F,V=J(Q).trim();return V?ec.go(V,z,{key:"prepared",limit:50}).map(Fe=>Fe.obj):z});function pe(z){var V;Ye(v,!1),Ye(Q,""),(V=J(X))==null||V.blur(),s==null||s.focusSystem(z)}function de(z){var Ae;const V=J(W).length;if(!V){z.key==="Escape"&&Ye(v,!1);return}z.key==="ArrowDown"?(z.preventDefault(),Ye(S,(J(S)+1)%V)):z.key==="ArrowUp"?(z.preventDefault(),Ye(S,(J(S)-1+V)%V)):z.key==="Enter"?(z.preventDefault(),pe(J(W)[J(S)].id)):z.key==="Escape"&&(Ye(v,!1),(Ae=J(X))==null||Ae.blur())}ki(()=>{J(S)>=J(W).length&&Ye(S,0)}),ki(()=>{J(S);const z=document.querySelector(".search-results li.active");z==null||z.scrollIntoView({block:"nearest"})});function Ce(z,V=4){return isFinite(z)?parseFloat(z.toPrecision(V)).toString():"0"}function at(){const z=new URLSearchParams,V=s==null?void 0:s.getCameraState();f.system&&V&&z.set("s",V.systemId),f.zoom&&V&&z.set("d",Ce(V.dist,5)),f.direction&&V&&(z.set("y",Ce(V.yaw,4)),z.set("p",Ce(V.pitch,4))),f.constellations&&z.set("c",J(Y)?"1":"0"),f.grid&&z.set("g",J(ie)?"1":"0"),f.travel&&(z.set("t",J(re)?"1":"0"),J(re)&&z.set("a",Ce(J(H),2)));const Ae=typeof window<"u"?`${window.location.origin}${window.location.pathname}`:"",Fe=z.toString();return Fe?`${Ae}?${Fe}`:Ae}const st=li(()=>(J(g),f.system,f.zoom,f.direction,f.constellations,f.grid,f.travel,J(Y),J(ie),J(re),J(H),at()));ki(()=>{if(!J(u))return;const z=setInterval(()=>Ye(g,J(g)+1),250);return()=>clearInterval(z)});async function C(){try{await navigator.clipboard.writeText(J(st)),Ye(d,!0),m&&clearTimeout(m),m=setTimeout(()=>Ye(d,!1),1500)}catch{const z=document.querySelector(".share-url input");z==null||z.select()}}function D(){Ye(Y,!1),Ye(ie,!0),Ye(re,!1),Ye(H,1),Ye(K,!1),s==null||s.viewHome()}Bu(()=>{const z=new _o(n);return s=z,window.starmap=z,z.setHudCallback(V=>{Ye(r,V,!0)}),window.addEventListener("resize",z.resize),z.init(Ph).then(()=>{Ye(a,!1);const V=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams;if(V.has("c")&&Ye(Y,V.get("c")==="1"),V.has("g")&&Ye(ie,V.get("g")==="1"),V.has("t")&&Ye(re,V.get("t")==="1"),V.has("a")){const Fe=parseFloat(V.get("a"));isFinite(Fe)&&Fe>0&&Ye(H,Fe,!0)}const Ae={};if(V.has("s")&&(Ae.systemId=V.get("s")),V.has("d")){const Fe=parseFloat(V.get("d"));isFinite(Fe)&&Fe>0&&(Ae.dist=Fe)}if(V.has("y")){const Fe=parseFloat(V.get("y"));isFinite(Fe)&&(Ae.yaw=Fe)}if(V.has("p")){const Fe=parseFloat(V.get("p"));isFinite(Fe)&&(Ae.pitch=Fe)}Object.keys(Ae).length>0&&z.applyCameraState(Ae),z.setConstellationsVisible(J(Y)),z.setGridVisible(J(ie)),z.setTravelAccelG(J(H)),z.setTravelPathVisible(J(re))}).catch(V=>{Ye(o,V instanceof Error?V.message:String(V),!0),Ye(a,!1)}),()=>{window.removeEventListener("resize",z.resize),z.dispose()}});var G=Ag();Fh("1uha8ag",z=>{var V=ug();Si(4),It(z,V)}),Os("keydown",yh,z=>{z.key==="Escape"&&(Ye(c,!1),Ye(l,!1),Ye(u,!1))});let ee;var ae=Re(G);Ko(ae,z=>n=z,()=>n);var ne=Ne(ae,4);hs(ne,21,()=>J(r).labels,z=>z.key,(z,V)=>{var Ae=hg(),Fe=Re(Ae),ft=Ne(Fe);Se(Ae),ti(()=>{nn(Ae,0,`leader ${J(V).kind??""} ${J(V).tier??""}`,"svelte-1uha8ag"),zs(Ae,`opacity:${J(V).opacity??""}`),Qt(Fe,"cx",J(V).ax),Qt(Fe,"cy",J(V).ay),Qt(ft,"points",`${J(V).ax??""},${J(V).ay??""} ${J(V).elbowX??""},${J(V).ly??""} ${J(V).lx??""},${J(V).ly??""}`)}),En(1,Ae,()=>bn,()=>({duration:t})),It(z,Ae)}),Se(ne);var te=Ne(ne,2);hs(te,21,()=>J(r).labels,z=>z.key,(z,V)=>{var Ae=dg(),Fe=Re(Ae),ft=Re(Fe,!0);Se(Fe),Se(Ae),ti(()=>{nn(Ae,1,`label ${J(V).kind??""} ${J(V).tier??""}`,"svelte-1uha8ag"),zs(Ae,`transform:translate3d(${J(V).lx??""}px,${J(V).ly??""}px,0); opacity:${J(V).opacity??""}`),St(ft,J(V).name)}),En(1,Ae,()=>bn,()=>({duration:t})),It(z,Ae)}),Se(te);var ge=Ne(te,4),ue=Ne(Re(ge),6),w=Re(ue),Ve=Ne(w,2);Se(ue),Se(ge);var ke=Ne(ge,2),Be=Re(ke);let me;var Ge=Re(Be);jt(Ge),Ko(Ge,z=>Ye(X,z),()=>J(X));var _e=Ne(Ge,2);{var b=z=>{var V=pg();hs(V,23,()=>J(W),Ae=>Ae.id,(Ae,Fe,ft)=>{var Et=fg();let Ft;var ci=Re(Et,!0);Se(Et),ti(()=>{Ft=nn(Et,1,"svelte-1uha8ag",null,Ft,{active:J(ft)===J(S)}),St(ci,J(Fe).name)}),Ot("mousedown",Et,()=>pe(J(Fe).id)),Os("mouseenter",Et,()=>Ye(S,J(ft),!0)),It(Ae,Et)}),Se(V),It(z,V)};Hi(_e,z=>{J(v)&&J(W).length&&z(b)})}var x=Ne(_e,2),O=Re(x);jt(O),Si(2),Se(x),Se(Be);var q=Ne(Be,2),Z=Ne(Re(q)),$=Re(Z,!0);Se(Z),Se(q);var ce=Ne(q,2),he=Ne(Re(ce)),fe=Re(he,!0);Se(he),Se(ce),Se(ke);var qe=Ne(ke,2),oe=Re(qe),be=Re(oe),ve=Re(be);{var Me=z=>{var V=mg(),Ae=Eh(V),Fe=Re(Ae),ft=Ne(Re(Fe)),Et=Re(ft,!0);Se(ft),Se(Fe);var Ft=Ne(Fe,2),ci=Ne(Re(Ft)),y=Re(ci,!0);Se(ci),Se(Ft);var U=Ne(Ft,2),B=Ne(Re(U)),k=Re(B,!0);Se(B),Se(U);var N=Ne(U,2),le=Ne(Re(N)),xe=Re(le);Se(le),Se(N);var Pe=Ne(N,2),Ie=Ne(Re(Pe)),Oe=Re(Ie,!0);Se(Ie),Se(Pe);var ze=Ne(Pe,2),Ue=Ne(Re(ze)),Qe=Re(Ue,!0);Se(Ue),Se(ze),Si(2),Se(Ae);var ot=Ne(Ae,2),ut=Re(ot),_t=Ne(Re(ut),2),tt=Re(_t);Se(_t),Se(ut);var Ee=Ne(ut,2);jt(Ee),Si(2),Se(ot),ti((je,Ke,Lt,$t,Pt,tn,et)=>{St(Et,je),St(y,Ke),St(k,Lt),St(xe,`${$t??""} c`),St(Oe,Pt),St(Qe,tn),St(tt,`${et??""} g`)},[()=>A(J(r).travel.stats.distanceM),()=>T(J(r).travel.stats.shipTimeS),()=>T(J(r).travel.stats.earthTimeS),()=>(J(r).travel.stats.vMax/299792458).toFixed(4),()=>L(J(r).travel.stats.fuelMassKg),()=>P(J(r).travel.stats.energyJ),()=>J(H).toFixed(1)]),En(3,Ae,()=>bn,()=>({duration:160})),Qo(Ee,()=>J(H),je=>Ye(H,je)),En(3,ot,()=>bn,()=>({duration:160})),It(z,V)};Hi(ve,z=>{J(re)&&J(r).travel.eligible&&J(r).travel.stats&&z(Me)})}Se(be);var we=Ne(be,4),Xe=Re(we);jt(Xe),Si(2),Se(we);var We=Ne(we,2),ct=Re(We);jt(ct),Si(2),Se(We);var I=Ne(We,2);let De;var j=Re(I);jt(j),Si(4),Se(I),Se(oe);var se=Ne(oe,2),Te=Re(se),Le=Ne(Te,2);Se(se),Se(qe);var rt=Ne(qe,2);{var gt=z=>{const V=li(()=>M(J(r).gridScale.major)),Ae=li(()=>M(J(r).gridScale.minor)),Fe=li(()=>J(r).gridScale.f),ft=li(()=>Math.max(0,1-J(Fe))),Et=li(()=>150),Ft=li(()=>J(Et)*Math.pow(5,-J(Fe))),ci=li(()=>J(Ft)/5),y=li(()=>[0,1,2,3,4,5].map(Ee=>Ee*J(Ft))),U=li(()=>[0,1,2,3,4].flatMap(Ee=>[1,2,3,4].map(je=>Ee*J(Ft)+je*J(ci))));var B=Mg(),k=Ne(Re(B),2);Qt(k,"viewBox",`0 0 ${J(Et)??""} 14`);var N=Re(k),le=Re(N),xe=Re(le);Qt(xe,"width",J(Et)),Se(le),Se(N);var Pe=Ne(N),Ie=Re(Pe);Qt(Ie,"x2",J(Et));var Oe=Ne(Ie);hs(Oe,21,()=>J(U),qo,(Ee,je)=>{var Ke=gg();ti(()=>{Qt(Ke,"x1",J(je)),Qt(Ke,"x2",J(je))}),It(Ee,Ke)}),Se(Oe);var ze=Ne(Oe);hs(ze,21,()=>J(y),qo,(Ee,je)=>{var Ke=_g();ti(()=>{Qt(Ke,"x1",J(je)),Qt(Ke,"x2",J(je))}),It(Ee,Ke)}),Se(ze),Se(Pe),Se(k);var Ue=Ne(k,2),Qe=Re(Ue),ot=Ne(Re(Qe),3);Yo(ot,()=>J(V),Ee=>{var je=vg(),Ke=Re(je,!0);Se(je),ti(()=>St(Ke,J(V))),En(1,je,()=>bn,()=>({duration:220})),It(Ee,je)}),Se(Qe);var ut=Ne(Qe,2),_t=Re(ut),tt=Ne(_t,4);Yo(tt,()=>J(Ae),Ee=>{var je=xg(),Ke=Re(je,!0);Se(je),ti(()=>St(Ke,J(Ae))),En(1,je,()=>bn,()=>({duration:220})),It(Ee,je)}),Se(ut),Se(Ue),Se(B),ti(()=>{zs(Oe,`opacity:${J(ft)??""}`),zs(_t,`opacity:${J(ft)??""}`)}),It(z,B)};Hi(rt,z=>{J(ie)&&z(gt)})}var Rt=Ne(rt,4);{var lt=z=>{var V=Sg();It(z,V)};Hi(Rt,z=>{J(a)&&z(lt)})}var Ct=Ne(Rt,2);{var oi=z=>{var V=yg(),Ae=Re(V),Fe=Ne(Re(Ae),2),ft=Re(Fe,!0);Se(Fe),Se(Ae),Se(V),ti(()=>St(ft,J(o))),It(z,V)};Hi(Ct,z=>{J(o)&&z(oi)})}var cs=Ne(Ct,2);{var Us=z=>{var V=Eg(),Ae=Re(V),Fe=Re(Ae);Si(12),Se(Ae),Se(V),Ot("click",V,()=>Ye(c,!1)),Ot("click",Ae,ft=>ft.stopPropagation()),Ot("click",Fe,()=>Ye(c,!1)),It(z,V)};Hi(cs,z=>{J(c)&&z(Us)})}var xi=Ne(cs,2);{var ls=z=>{var V=bg(),Ae=Re(V),Fe=Re(Ae);Si(12),Se(Ae),Se(V),Ot("click",V,()=>Ye(l,!1)),Ot("click",Ae,ft=>ft.stopPropagation()),Ot("click",Fe,()=>Ye(l,!1)),It(z,V)};Hi(xi,z=>{J(l)&&z(ls)})}var Ns=Ne(xi,2);{var Fs=z=>{var V=Tg(),Ae=Re(V),Fe=Re(Ae),ft=Ne(Fe,10),Et=Re(ft),Ft=Re(Et);jt(Ft);var ci=Ne(Ft,4),y=Re(ci,!0);Se(ci),Se(Et);var U=Ne(Et,2),B=Re(U);jt(B);var k=Ne(B,4),N=Re(k,!0);Se(k),Se(U);var le=Ne(U,2),xe=Re(le);jt(xe),Si(2),Se(le);var Pe=Ne(le,2),Ie=Re(Pe);jt(Ie);var Oe=Ne(Ie,4),ze=Re(Oe,!0);Se(Oe),Se(Pe);var Ue=Ne(Pe,2),Qe=Re(Ue);jt(Qe);var ot=Ne(Qe,4),ut=Re(ot,!0);Se(ot),Se(Ue);var _t=Ne(Ue,2),tt=Re(_t);jt(tt);var Ee=Ne(tt,4),je=Re(Ee,!0);Se(Ee),Se(_t),Se(ft);var Ke=Ne(ft,2),Lt=Re(Ke);jt(Lt);var $t=Ne(Lt,2);let Pt;var tn=Re($t,!0);Se($t),Se(Ke),Se(Ae),Se(V),ti((et,Mi)=>{St(y,J(r).selectedSystemName),St(N,et),St(ze,J(Y)?"on":"off"),St(ut,J(ie)?"on":"off"),St(je,Mi),Vh(Lt,J(st)),Pt=nn($t,1,"share-copy svelte-1uha8ag",null,Pt,{copied:J(d)}),St(tn,J(d)?"Copied":"Copy Link")},[()=>p(J(r).camDist),()=>J(re)?`on · ${J(H).toFixed(1)} g`:"off"]),Ot("click",V,()=>Ye(u,!1)),Ot("click",Ae,et=>et.stopPropagation()),Ot("click",Fe,()=>Ye(u,!1)),yi(Ft,()=>f.system,et=>f.system=et),yi(B,()=>f.zoom,et=>f.zoom=et),yi(xe,()=>f.direction,et=>f.direction=et),yi(Ie,()=>f.constellations,et=>f.constellations=et),yi(Qe,()=>f.grid,et=>f.grid=et),yi(tt,()=>f.travel,et=>f.travel=et),Ot("click",$t,C),It(z,V)};Hi(Ns,z=>{J(u)&&z(Fs)})}Se(G),ti(z=>{ee=nn(G,1,"stage svelte-1uha8ag",null,ee,{ready:!J(a)}),me=nn(Be,1,"search-box svelte-1uha8ag",null,me,{open:J(v)}),St($,J(r).selectedSystemName),St(fe,z),De=nn(I,1,"overlay-row svelte-1uha8ag",null,De,{disabled:!J(r).travel.eligible}),Qt(I,"title",J(r).travel.eligible?"":"Please select a star different from our Sun"),j.disabled=!J(r).travel.eligible},[()=>p(J(r).camDist)]),Ot("click",w,()=>Ye(c,!0)),Ot("click",Ve,()=>Ye(l,!0)),Os("focus",Ge,()=>Ye(v,!0)),Os("blur",Ge,()=>setTimeout(()=>Ye(v,!1),130)),Ot("keydown",Ge,de),Qo(Ge,()=>J(Q),z=>Ye(Q,z)),yi(O,()=>J(K),z=>Ye(K,z)),yi(Xe,()=>J(Y),z=>Ye(Y,z)),yi(ct,()=>J(ie),z=>Ye(ie,z)),yi(j,()=>J(re),z=>Ye(re,z)),Ot("click",Te,D),Ot("click",Le,()=>Ye(u,!0)),It(i,G),Sh()}Th(["click","keydown","mousedown"]);export{Ng as component};
