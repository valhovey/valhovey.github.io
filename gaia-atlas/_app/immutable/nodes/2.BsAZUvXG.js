var l1=Object.defineProperty;var c1=(i,e,t)=>e in i?l1(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var We=(i,e,t)=>c1(i,typeof e!="symbol"?e+"":e,t);import{a as it,f as yt,c as zh,d as Un,t as h1}from"../chunks/YpcDfA_S.js";import{o as bl}from"../chunks/YaYzGkqm.js";import{ap as jt,an as Gh,aA as u1,W as El,a2 as hr,a$ as ps,aj as Hh,ag as T,aQ as d1,p as p1,b4 as Kl,b0 as fs,ao as hs,d as Vh,m as f1,au as Xl,a3 as Ca,j as Zi,X as yr,aa as m1,b2 as g1,a8 as v1,aw as _1,V as wl,i as y1,h as S1,aH as ur,b5 as ql,E as x1,D as M1,aT as Wh,aK as Kh,I as Hr,b as b1,Z as E1,aG as w1,a9 as A1,ak as Co,g as Xh,aP as Al,f as T1,O as P1,l as C1,B as D1,R as R1,ab as qh,bc as kt,J as I1,az as L1,aJ as is,bg as Yh,K as U1,M as N1,H as k1,C as Yl,x as jl,A as F1,N as O1,al as B1,ai as z1,F as G1,U as H1,s as V1,r as jh,aE as $h,bb as W1,aR as Zh,_ as K1,bf as X1,be as ii,aV as $l,aU as q1,a4 as Tn,a7 as Y1,aO as Dr,ae as Dn,Y as ne,aS as J,b3 as le,ba as gt,aL as Rr,bd as Jt,b6 as At,aX as Oe,aI as bi,ad as j1,aC as Vr,aD as $1,aN as Zl,$ as Z1}from"../chunks/B9YW0Ofq.js";import{b as J1,d as Jh,a as Nt,s as st,e as Ds}from"../chunks/DAfgHUhi.js";import{b as Fa,i as Ct,p as Ut}from"../chunks/Cqu4ogRy.js";import{B as Q1}from"../chunks/Cziyss_d.js";import{d as ed}from"../chunks/CiT1xTjl.js";const td=Symbol("NaN");function Jl(i,e,t){jt&&Gh();var n=new Q1(i),a=!u1();El(()=>{var s=e();s!==s&&(s=td),a&&s!==null&&typeof s=="object"&&(s={}),n.ensure(s,t)})}function Ql(i,e){return e}function id(i,e,t){for(var n=[],a=e.length,s,r=e.length,o=0;o<a;o++){let d=e[o];Kh(d,()=>{if(s){if(s.pending.delete(d),s.done.add(d),s.pending.size===0){var p=i.outrogroups;Do(i,wl(s.done)),p.delete(s),p.size===0&&(i.outrogroups=null)}}else r-=1},!1)}if(r===0){var l=n.length===0&&t!==null;if(l){var c=t,u=c.parentNode;E1(u),u.append(c),i.items.clear()}Do(i,e,!l)}else s={pending:new Set(e),done:new Set},(i.outrogroups??(i.outrogroups=new Set)).add(s)}function Do(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const r of i.pending.values())for(const o of r)n.add(i.items.get(o).e)}for(var a=0;a<e.length;a++){var s=e[a];if(n!=null&&n.has(s)){s.f|=Zi;const r=document.createDocumentFragment();w1(s,r)}else A1(e[a],t)}}var ec;function yn(i,e,t,n,a,s=null){var r=i,o=new Map,l=(e&Xh)!==0;if(l){var c=i;r=jt?ps(Hh(c)):c.appendChild(hr())}jt&&Gh();var u=null,d=v1(()=>{var y=t();return _1(y)?y:y==null?[]:wl(y)}),p,f=new Map,g=!0;function v(y){S.effect.f&M1||(S.pending.delete(y),S.fallback=u,nd(S,p,r,e,n),u!==null&&(p.length===0?u.f&Zi?(u.f^=Zi,us(u,null,r)):Wh(u):Kh(u,()=>{u=null})))}function h(y){S.pending.delete(y)}var m=El(()=>{p=T(d);var y=p.length;let M=!1;if(jt){var L=d1(r)===p1;L!==(y===0)&&(r=Kl(),ps(r),fs(!1),M=!0)}for(var A=new Set,P=Ca,N=g1(),j=0;j<y;j+=1){jt&&hs.nodeType===Vh&&hs.data===f1&&(r=hs,M=!0,fs(!1));var _=p[j],b=n(_,j),K=g?null:o.get(b);K?(K.v&&Xl(K.v,_),K.i&&Xl(K.i,j),N&&P.unskip_effect(K.e)):(K=ad(o,g?r:ec??(ec=hr()),_,b,j,a,e,t),g||(K.e.f|=Zi),o.set(b,K)),A.add(b)}if(y===0&&s&&!u&&(g?u=yr(()=>s(r)):(u=yr(()=>s(ec??(ec=hr()))),u.f|=Zi)),y>A.size&&m1(),jt&&y>0&&ps(Kl()),!g)if(f.set(P,A),N){for(const[V,X]of o)A.has(V)||P.skip_effect(X.e);P.oncommit(v),P.ondiscard(h)}else v(P);M&&fs(!0),T(d)}),S={effect:m,items:o,pending:f,outrogroups:null,fallback:u};g=!1,jt&&(r=hs)}function ns(i){for(;i!==null&&!(i.f&b1);)i=i.next;return i}function nd(i,e,t,n,a){var _,b,K,V,X,Q,z,se,W;var s=(n&T1)!==0,r=e.length,o=i.items,l=ns(i.effect.first),c,u=null,d,p=[],f=[],g,v,h,m;if(s)for(m=0;m<r;m+=1)g=e[m],v=a(g,m),h=o.get(v).e,h.f&Zi||((b=(_=h.nodes)==null?void 0:_.a)==null||b.measure(),(d??(d=new Set)).add(h));for(m=0;m<r;m+=1){if(g=e[m],v=a(g,m),h=o.get(v).e,i.outrogroups!==null)for(const ge of i.outrogroups)ge.pending.delete(h),ge.done.delete(h);if(h.f&Hr&&(Wh(h),s&&((V=(K=h.nodes)==null?void 0:K.a)==null||V.unfix(),(d??(d=new Set)).delete(h))),h.f&Zi)if(h.f^=Zi,h===l)us(h,null,t);else{var S=u?u.next:l;h===i.effect.last&&(i.effect.last=h.prev),h.prev&&(h.prev.next=h.next),h.next&&(h.next.prev=h.prev),Sn(i,u,h),Sn(i,h,S),us(h,S,t),u=h,p=[],f=[],l=ns(u.next);continue}if(h!==l){if(c!==void 0&&c.has(h)){if(p.length<f.length){var y=f[0],M;u=y.prev;var L=p[0],A=p[p.length-1];for(M=0;M<p.length;M+=1)us(p[M],y,t);for(M=0;M<f.length;M+=1)c.delete(f[M]);Sn(i,L.prev,A.next),Sn(i,u,L),Sn(i,A,y),l=y,u=A,m-=1,p=[],f=[]}else c.delete(h),us(h,l,t),Sn(i,h.prev,h.next),Sn(i,h,u===null?i.effect.first:u.next),Sn(i,u,h),u=h;continue}for(p=[],f=[];l!==null&&l!==h;)(c??(c=new Set)).add(l),f.push(l),l=ns(l.next);if(l===null)continue}h.f&Zi||p.push(h),u=h,l=ns(h.next)}if(i.outrogroups!==null){for(const ge of i.outrogroups)ge.pending.size===0&&(Do(i,wl(ge.done)),(X=i.outrogroups)==null||X.delete(ge));i.outrogroups.size===0&&(i.outrogroups=null)}if(l!==null||c!==void 0){var P=[];if(c!==void 0)for(h of c)h.f&Hr||P.push(h);for(;l!==null;)!(l.f&Hr)&&l!==i.fallback&&P.push(l),l=ns(l.next);var N=P.length;if(N>0){var j=n&Xh&&r===0?t:null;if(s){for(m=0;m<N;m+=1)(z=(Q=P[m].nodes)==null?void 0:Q.a)==null||z.measure();for(m=0;m<N;m+=1)(W=(se=P[m].nodes)==null?void 0:se.a)==null||W.fix()}id(i,P,j)}}s&&Al(()=>{var ge,he;if(d!==void 0)for(h of d)(he=(ge=h.nodes)==null?void 0:ge.a)==null||he.apply()})}function ad(i,e,t,n,a,s,r,o){var l=r&y1?r&S1?ql(t):ur(t,!1,!1):null,c=r&x1?ql(a):null;return{v:l,i:c,e:yr(()=>(s(e,l??t,c??a,o),()=>{i.delete(n)}))}}function us(i,e,t){if(i.nodes)for(var n=i.nodes.start,a=i.nodes.end,s=e&&!(e.f&Zi)?e.nodes.start:t;n!==null;){var r=Co(n);if(s.before(n),n===a)return;n=r}}function Sn(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}const sd=()=>performance.now(),hn={tick:i=>requestAnimationFrame(i),now:()=>sd(),tasks:new Set};function Qh(){const i=hn.now();hn.tasks.forEach(e=>{e.c(i)||(hn.tasks.delete(e),e.f())}),hn.tasks.size!==0&&hn.tick(Qh)}function rd(i){let e;return hn.tasks.size===0&&hn.tick(Qh),{promise:new Promise(t=>{hn.tasks.add(e={c:i,f:t})}),abort(){hn.tasks.delete(e)}}}function Rs(i,e){Yh(()=>{i.dispatchEvent(new CustomEvent(e))})}function od(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const e=i.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function tc(i){const e={},t=i.split(";");for(const n of t){const[a,s]=n.split(":");if(!a||s===void 0)break;const r=od(a.trim());e[r]=s.trim()}return e}const ld=i=>i;function Yt(i,e,t,n){var y;var a=(i&U1)!==0,s=(i&N1)!==0,r=a&&s,o=(i&I1)!==0,l=r?"both":a?"in":"out",c,u=e.inert,d=e.style.overflow,p,f;function g(){return Yh(()=>c??(c=t()(e,(n==null?void 0:n())??{},{direction:l})))}var v={is_global:o,in(){var M;if(e.inert=u,!a){f==null||f.abort(),(M=f==null?void 0:f.reset)==null||M.call(f);return}s||p==null||p.abort(),p=Ro(e,g(),f,1,()=>{Rs(e,"introstart")},()=>{Rs(e,"introend"),p==null||p.abort(),p=c=void 0,e.style.overflow=d})},out(M){if(!s){M==null||M(),c=void 0;return}e.inert=!0,f=Ro(e,g(),p,0,()=>{Rs(e,"outrostart")},()=>{Rs(e,"outroend"),M==null||M()})},stop:()=>{p==null||p.abort(),f==null||f.abort()}},h=P1;if(((y=h.nodes).t??(y.t=[])).push(v),a&&J1){var m=o;if(!m){for(var S=h.parent;S&&S.f&C1;)for(;(S=S.parent)&&!(S.f&D1););m=!S||(S.f&R1)!==0}m&&qh(()=>{kt(()=>v.in())})}}function Ro(i,e,t,n,a,s){var r=n===1;if(L1(e)){var o,l=!1;return Al(()=>{if(!l){var m=e({direction:r?"in":"out"});o=Ro(i,m,t,n,a,s)}}),{abort:()=>{l=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration)&&!(e!=null&&e.delay))return a(),s(),{abort:is,deactivate:is,reset:is,t:()=>n};const{delay:c=0,css:u,tick:d,easing:p=ld}=e;var f=[];if(r&&t===void 0&&(d&&d(0,1),u)){var g=tc(u(0,1));f.push(g,g)}var v=()=>1-n,h=i.animate(f,{duration:c,fill:"forwards"});return h.onfinish=()=>{h.cancel(),a();var m=(t==null?void 0:t.t())??1-n;t==null||t.abort();var S=n-m,y=e.duration*Math.abs(S),M=[];if(y>0){var L=!1;if(u)for(var A=Math.ceil(y/16.666666666666668),P=0;P<=A;P+=1){var N=m+S*p(P/A),j=tc(u(N,1-N));M.push(j),L||(L=j.overflow==="hidden")}L&&(i.style.overflow="hidden"),v=()=>{var _=h.currentTime;return m+S*p(_/y)},d&&rd(()=>{if(h.playState!=="running")return!1;var _=v();return d(_,1-_),!0})}h=i.animate(M,{duration:y,fill:"forwards"}),h.onfinish=()=>{v=()=>n,d==null||d(n,1-n),s()}},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=is)},deactivate:()=>{s=is},reset:()=>{n===0&&(d==null||d(1,0))},t:()=>v()}}function cd(i,e){let t=null,n=jt;var a;if(jt){t=hs;for(var s=Hh(document.head);s!==null&&(s.nodeType!==Vh||s.data!==i);)s=Co(s);if(s===null)fs(!1);else{var r=Co(s);s.remove(),ps(r)}}jt||(a=document.head.appendChild(hr()));try{El(()=>{var o=yr(()=>e(a));o.f|=k1})}finally{n&&(fs(!0),ps(t))}}function hd(i,e,t){qh(()=>{var n=kt(()=>e(i,t==null?void 0:t())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}const ic=[...` 	
\r\f \v\uFEFF`];function ud(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var a of Object.keys(t))if(t[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,r=0;(r=n.indexOf(a,r))>=0;){var o=r+s;(r===0||ic.includes(n[r-1]))&&(o===n.length||ic.includes(n[o]))?n=(r===0?"":n.substring(0,r))+n.substring(o+1):r=o}}return n===""?null:n}function dd(i,e){return i==null?null:String(i)}function ln(i,e,t,n,a,s){var r=i[Yl];if(jt||r!==t||r===void 0){var o=ud(t,n,s);(!jt||o!==i.getAttribute("class"))&&(o==null?i.removeAttribute("class"):e?i.className=o:i.setAttribute("class",o)),i[Yl]=t}else if(s&&a!==s)for(var l in s){var c=!!s[l];(a==null||c!==!!a[l])&&i.classList.toggle(l,c)}return s}function Qn(i,e,t,n){var a=i[jl];if(jt||a!==e){var s=dd(e);(!jt||s!==i.getAttribute("style"))&&(s==null?i.removeAttribute("style"):i.style.cssText=s),i[jl]=e}return n}const pd=Symbol("is custom element"),fd=Symbol("is html"),md=jh?"link":"LINK",gd=jh?"progress":"PROGRESS";function mi(i){if(jt){var e=!1,t=()=>{if(!e){if(e=!0,i.hasAttribute("value")){var n=i.value;et(i,"value",null),i.value=n}if(i.hasAttribute("checked")){var a=i.checked;et(i,"checked",null),i.checked=a}}};i[G1]=t,Al(t),H1()}}function vd(i,e){var t=eu(i);t.value===(t.value=e??void 0)||i.value===e&&(e!==0||i.nodeName!==gd)||(i.value=e??"")}function et(i,e,t,n){var a=eu(i);jt&&(a[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName===md)||a[e]!==(a[e]=t)&&(e==="loading"&&(i[V1]=t),t==null?i.removeAttribute(e):typeof t!="string"&&_d(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function eu(i){var e;return i[e=F1]??(i[e]={[pd]:i.nodeName.includes("-"),[fd]:i.namespaceURI===O1})}var nc=new Map;function _d(i){var e=i.getAttribute("is")||i.nodeName,t=nc.get(e);if(t)return t;nc.set(e,t=[]);for(var n,a=i,s=Element.prototype;s!==a;){n=z1(a);for(var r in n)n[r].set&&r!=="innerHTML"&&r!=="textContent"&&r!=="innerText"&&t.push(r);a=B1(a)}return t}function ac(i,e,t=e){var n=new WeakSet;$h(i,"input",async a=>{var s=a?i.defaultValue:i.value;if(s=Wr(i)?Kr(s):s,t(s),Ca!==null&&n.add(Ca),await W1(),s!==(s=e())){var r=i.selectionStart,o=i.selectionEnd,l=i.value.length;if(i.value=s??"",o!==null){var c=i.value.length;r===o&&o===l&&c>l?(i.selectionStart=c,i.selectionEnd=c):(i.selectionStart=r,i.selectionEnd=Math.min(o,c))}}}),(jt&&i.defaultValue!==i.value||kt(e)==null&&i.value)&&(t(Wr(i)?Kr(i.value):i.value),Ca!==null&&n.add(Ca)),Zh(()=>{var a=e();if(i===document.activeElement){var s=Ca;if(n.has(s))return}Wr(i)&&a===Kr(i.value)||i.type==="date"&&!a&&!i.value||a!==i.value&&(i.value=a??"")})}function Gi(i,e,t=e){$h(i,"change",n=>{var a=n?i.defaultChecked:i.checked;t(a)}),(jt&&i.defaultChecked!==i.checked||kt(e)==null)&&t(i.checked),Zh(()=>{var n=e();i.checked=!!n})}function Wr(i){var e=i.type;return e==="number"||e==="range"}function Kr(i){return i===""?null:+i}function yd(i=!1){const e=K1,t=e.l.u;if(!t)return;let n=()=>Tn(e.s);if(i){let a=0,s={};const r=Y1(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&a++,a});n=()=>T(r)}t.b.length&&X1(()=>{sc(e,n),$l(t.b)}),ii(()=>{const a=kt(()=>t.m.map(q1));return()=>{for(const s of a)typeof s=="function"&&s()}}),t.a.length&&ii(()=>{sc(e,n),$l(t.a)})}function sc(i,e){if(i.l.s)for(const t of i.l.s)T(t);e()}const Sd=i=>i;function gi(i,{delay:e=0,duration:t=400,easing:n=Sd}={}){const a=+getComputedStyle(i).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*a}`}}function xd(i){const e=i-1;return e*e*e+1}var Md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var tu={exports:{}};(function(i){((e,t)=>{i.exports?i.exports=t():e.fuzzysort=t()})(Md,e=>{var t=(C,D)=>{if(!C||!D)return he;var H=g(C);z(D)||(D=f(D));var $=H.bitflags;return($&D._bitflags)!==$?he:h(H,D)},n=(C,D,H)=>{if(!C)return H!=null&&H.all?v(D,H):ge;var $=g(C),pe=$.bitflags,re=$.containsSpace,oe=d((H==null?void 0:H.threshold)||0),xe=(H==null?void 0:H.limit)||se,ue=0,R=0,He=D.length;function Ke(me){ue<xe?(Ne.add(me),++ue):(++R,me._score>Ne.peek()._score&&Ne.replaceTop(me))}if(H!=null&&H.key)for(var Ve=H.key,ye=0;ye<He;++ye){var $e=D[ye],be=Q($e,Ve);if(be&&(z(be)||(be=f(be)),(pe&be._bitflags)===pe)){var w=h($,be);w!==he&&(w._score<oe||(w.obj=$e,Ke(w)))}}else if(H!=null&&H.keys){var x=H.keys,G=x.length;e:for(var ye=0;ye<He;++ye){var $e=D[ye];{for(var ee=0,te=0;te<G;++te){var Ve=x[te],be=Q($e,Ve);if(!be){V[te]=Ae;continue}z(be)||(be=f(be)),V[te]=be,ee|=be._bitflags}if((pe&ee)!==pe)continue}if(re)for(let Me=0;Me<$.spaceSearches.length;Me++)b[Me]=W;for(var te=0;te<G;++te){if(be=V[te],be===Ae){X[te]=Ae;continue}if(X[te]=h($,be,!1,re),X[te]===he){X[te]=Ae;continue}if(re)for(let we=0;we<$.spaceSearches.length;we++){if(K[we]>-1e3&&b[we]>W){var Z=(b[we]+K[we])/4;Z>b[we]&&(b[we]=Z)}K[we]>b[we]&&(b[we]=K[we])}}if(re){for(let Me=0;Me<$.spaceSearches.length;Me++)if(b[Me]===W)continue e}else{var ae=!1;for(let Me=0;Me<G;Me++)if(X[Me]._score!==W){ae=!0;break}if(!ae)continue}var fe=new l(G);for(let Me=0;Me<G;Me++)fe[Me]=X[Me];if(re){var ve=0;for(let Me=0;Me<$.spaceSearches.length;Me++)ve+=b[Me]}else{var ve=W;for(let we=0;we<G;we++){var w=fe[we];if(w._score>-1e3&&ve>W){var Z=(ve+w._score)/4;Z>ve&&(ve=Z)}w._score>ve&&(ve=w._score)}}if(fe.obj=$e,fe._score=ve,H!=null&&H.scoreFn){if(ve=H.scoreFn(fe),!ve)continue;ve=d(ve),fe._score=ve}ve<oe||Ke(fe)}}else for(var ye=0;ye<He;++ye){var be=D[ye];if(be&&(z(be)||(be=f(be)),(pe&be._bitflags)===pe)){var w=h($,be);w!==he&&(w._score<oe||Ke(w))}}if(ue===0)return ge;for(var qe=new Array(ue),ye=ue-1;ye>=0;--ye)qe[ye]=Ne.poll();return qe.total=ue+R,qe},a=(C,D="<b>",H="</b>")=>{for(var $=typeof D=="function"?D:void 0,pe=C.target,re=pe.length,oe=C.indexes,xe="",ue=0,R=0,He=!1,Ke=[],Ve=0;Ve<re;++Ve){var ye=pe[Ve];if(oe[R]===Ve){if(++R,He||(He=!0,$?(Ke.push(xe),xe=""):xe+=D),R===oe.length){$?(xe+=ye,Ke.push($(xe,ue++)),xe="",Ke.push(pe.substr(Ve+1))):xe+=ye+H+pe.substr(Ve+1);break}}else He&&(He=!1,$?(Ke.push($(xe,ue++)),xe=""):xe+=H);xe+=ye}return $?Ke:xe},s=C=>{typeof C=="number"?C=""+C:typeof C!="string"&&(C="");var D=y(C);return c(C,{_targetLower:D._lower,_targetLowerCodes:D.lowerCodes,_bitflags:D.bitflags})},r=()=>{A.clear(),P.clear()};class o{get indexes(){return this._indexes.slice(0,this._indexes.len).sort((D,H)=>D-H)}set indexes(D){return this._indexes=D}highlight(D,H){return a(this,D,H)}get score(){return u(this._score)}set score(D){this._score=d(D)}}class l extends Array{get score(){return u(this._score)}set score(D){this._score=d(D)}}var c=(C,D)=>{const H=new o;return H.target=C,H.obj=D.obj??he,H._score=D._score??W,H._indexes=D._indexes??[],H._targetLower=D._targetLower??"",H._targetLowerCodes=D._targetLowerCodes??he,H._nextBeginningIndexes=D._nextBeginningIndexes??he,H._bitflags=D._bitflags??0,H},u=C=>C===W?0:C>1?C:Math.E**(((-C+1)**.04307-1)*-2),d=C=>C===0?W:C>1?C:1-Math.pow(Math.log(C)/-2+1,1/.04307),p=C=>{typeof C=="number"?C=""+C:typeof C!="string"&&(C=""),C=C.trim();var D=y(C),H=[];if(D.containsSpace){var $=C.split(/\s+/);$=[...new Set($)];for(var pe=0;pe<$.length;pe++)if($[pe]!==""){var re=y($[pe]);H.push({lowerCodes:re.lowerCodes,_lower:$[pe].toLowerCase(),containsSpace:!1})}}return{lowerCodes:D.lowerCodes,_lower:D._lower,containsSpace:D.containsSpace,bitflags:D.bitflags,spaceSearches:H}},f=C=>{if(C.length>999)return s(C);var D=A.get(C);return D!==void 0||(D=s(C),A.set(C,D)),D},g=C=>{if(C.length>999)return p(C);var D=P.get(C);return D!==void 0||(D=p(C),P.set(C,D)),D},v=(C,D)=>{var H=[];H.total=C.length;var $=(D==null?void 0:D.limit)||se;if(D!=null&&D.key)for(var pe=0;pe<C.length;pe++){var re=C[pe],oe=Q(re,D.key);if(oe!=he){z(oe)||(oe=f(oe));var xe=c(oe.target,{_score:oe._score,obj:re});if(H.push(xe),H.length>=$)return H}}else if(D!=null&&D.keys)for(var pe=0;pe<C.length;pe++){for(var re=C[pe],ue=new l(D.keys.length),R=D.keys.length-1;R>=0;--R){var oe=Q(re,D.keys[R]);if(!oe){ue[R]=Ae;continue}z(oe)||(oe=f(oe)),oe._score=W,oe._indexes.len=0,ue[R]=oe}if(ue.obj=re,ue._score=W,H.push(ue),H.length>=$)return H}else for(var pe=0;pe<C.length;pe++){var oe=C[pe];if(oe!=he&&(z(oe)||(oe=f(oe)),oe._score=W,oe._indexes.len=0,H.push(oe),H.length>=$))return H}return H},h=(C,D,H=!1,$=!1)=>{if(H===!1&&C.containsSpace)return m(C,D,$);for(var pe=C._lower,re=C.lowerCodes,oe=re[0],xe=D._targetLowerCodes,ue=re.length,R=xe.length,ye=0,He=0,Ke=0;;){var Ve=oe===xe[He];if(Ve){if(N[Ke++]=He,++ye,ye===ue)break;oe=re[ye]}if(++He,He>=R)return he}var ye=0,$e=!1,be=0,w=D._nextBeginningIndexes;w===he&&(w=D._nextBeginningIndexes=L(D.target)),He=N[0]===0?0:w[N[0]-1];var x=0;if(He!==R)for(;;)if(He>=R){if(ye<=0||(++x,x>200))break;--ye;var G=j[--be];He=w[G]}else{var Ve=re[ye]===xe[He];if(Ve){if(j[be++]=He,++ye,ye===ue){$e=!0;break}++He}else He=w[He]}var ee=ue<=1?-1:D._targetLower.indexOf(pe,N[0]),te=!!~ee,Z=te?ee===0||D._nextBeginningIndexes[ee-1]===ee:!1;if(te&&!Z){for(var ae=0;ae<w.length;ae=w[ae])if(!(ae<=ee)){for(var fe=0;fe<ue&&re[fe]===D._targetLowerCodes[ae+fe];fe++);if(fe===ue){ee=ae,Z=!0;break}}}var ve=Me=>{for(var we=0,Le=0,Ze=1;Ze<ue;++Ze)Me[Ze]-Me[Ze-1]!==1&&(we-=Me[Ze],++Le);var Je=Me[ue-1]-Me[0]-(ue-1);if(we-=(12+Je)*Le,Me[0]!==0&&(we-=Me[0]*Me[0]*.2),!$e)we*=1e3;else{for(var lt=1,Ze=w[0];Ze<R;Ze=w[Ze])++lt;lt>24&&(we*=(lt-24)*10)}return we-=(R-ue)/2,te&&(we/=1+ue*ue*1),Z&&(we/=1+ue*ue*1),we-=(R-ue)/2,we};if($e)if(Z){for(var ae=0;ae<ue;++ae)N[ae]=ee+ae;var qe=N,me=ve(N)}else var qe=j,me=ve(j);else{if(te)for(var ae=0;ae<ue;++ae)N[ae]=ee+ae;var qe=N,me=ve(qe)}D._score=me;for(var ae=0;ae<ue;++ae)D._indexes[ae]=qe[ae];D._indexes.len=ue;const Pe=new o;return Pe.target=D.target,Pe._score=D._score,Pe._indexes=D._indexes,Pe},m=(C,D,H)=>{for(var $=new Set,pe=0,re=he,oe=0,xe=C.spaceSearches,ue=xe.length,R=0,He=()=>{for(let Z=R-1;Z>=0;Z--)D._nextBeginningIndexes[_[Z*2+0]]=_[Z*2+1]},Ke=!1,te=0;te<ue;++te){K[te]=W;var Ve=xe[te];if(re=h(Ve,D),H){if(re===he)continue;Ke=!0}else if(re===he)return He(),he;var ye=te===ue-1;if(!ye){var $e=re._indexes,be=!0;for(let ae=0;ae<$e.len-1;ae++)if($e[ae+1]-$e[ae]!==1){be=!1;break}if(be){var w=$e[$e.len-1]+1,x=D._nextBeginningIndexes[w-1];for(let ae=w-1;ae>=0&&x===D._nextBeginningIndexes[ae];ae--)D._nextBeginningIndexes[ae]=w,_[R*2+0]=ae,_[R*2+1]=x,R++}}pe+=re._score/ue,K[te]=re._score/ue,re._indexes[0]<oe&&(pe-=(oe-re._indexes[0])*2),oe=re._indexes[0];for(var G=0;G<re._indexes.len;++G)$.add(re._indexes[G])}if(H&&!Ke)return he;He();var ee=h(C,D,!0);if(ee!==he&&ee._score>pe){if(H)for(var te=0;te<ue;++te)K[te]=ee._score/ue;return ee}H&&(re=D),re._score=pe;var te=0;for(let Z of $)re._indexes[te++]=Z;return re._indexes.len=te,re},S=C=>C.replace(new RegExp("\\p{Script=Latin}+","gu"),D=>D.normalize("NFD")).replace(/[\u0300-\u036f]/g,""),y=C=>{C=S(C);for(var D=C.length,H=C.toLowerCase(),$=[],pe=0,re=!1,oe=0;oe<D;++oe){var xe=$[oe]=H.charCodeAt(oe);if(xe===32){re=!0;continue}var ue=xe>=97&&xe<=122?xe-97:xe>=48&&xe<=57?26:xe<=127?30:31;pe|=1<<ue}return{lowerCodes:$,bitflags:pe,containsSpace:re,_lower:H}},M=C=>{for(var D=C.length,H=[],$=0,pe=!1,re=!1,oe=0;oe<D;++oe){var xe=C.charCodeAt(oe),ue=xe>=65&&xe<=90,R=ue||xe>=97&&xe<=122||xe>=48&&xe<=57,He=ue&&!pe||!re||!R;pe=ue,re=R,He&&(H[$++]=oe)}return H},L=C=>{C=S(C);for(var D=C.length,H=M(C),$=[],pe=H[0],re=0,oe=0;oe<D;++oe)pe>oe?$[oe]=pe:(pe=H[++re],$[oe]=pe===void 0?D:pe);return $},A=new Map,P=new Map,N=[],j=[],_=[],b=[],K=[],V=[],X=[],Q=(C,D)=>{var H=C[D];if(H!==void 0)return H;if(typeof D=="function")return D(C);var $=D;Array.isArray(D)||($=D.split("."));for(var pe=$.length,re=-1;C&&++re<pe;)C=C[$[re]];return C},z=C=>typeof C=="object"&&typeof C._bitflags=="number",se=1/0,W=-se,ge=[];ge.total=0;var he=null,Ae=s(""),ze=C=>{var D=[],H=0,$={},pe=re=>{for(var oe=0,xe=D[oe],ue=1;ue<H;){var R=ue+1;oe=ue,R<H&&D[R]._score<D[ue]._score&&(oe=R),D[oe-1>>1]=D[oe],ue=1+(oe<<1)}for(var He=oe-1>>1;oe>0&&xe._score<D[He]._score;He=(oe=He)-1>>1)D[oe]=D[He];D[oe]=xe};return $.add=re=>{var oe=H;D[H++]=re;for(var xe=oe-1>>1;oe>0&&re._score<D[xe]._score;xe=(oe=xe)-1>>1)D[oe]=D[xe];D[oe]=re},$.poll=re=>{if(H!==0){var oe=D[0];return D[0]=D[--H],pe(),oe}},$.peek=re=>{if(H!==0)return D[0]},$.replaceTop=re=>{D[0]=re,pe()},$},Ne=ze();return{single:t,go:n,prepare:s,cleanup:r}})})(tu);var Ed=tu.exports;const rc=bd(Ed);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tl="169",aa={ROTATE:0,DOLLY:1,PAN:2},Ra={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wd=0,oc=1,Ad=2,iu=1,Td=2,cn=3,Ln=0,ci=1,Vi=2,pn=0,La=1,Ui=2,lc=3,cc=4,Pd=5,ea=100,Cd=101,Dd=102,Rd=103,Id=104,Ld=200,Ud=201,Nd=202,kd=203,Io=204,Lo=205,Fd=206,Od=207,Bd=208,zd=209,Gd=210,Hd=211,Vd=212,Wd=213,Kd=214,Uo=0,No=1,ko=2,Oa=3,Fo=4,Oo=5,Bo=6,zo=7,nu=0,Xd=1,qd=2,In=0,au=1,su=2,ru=3,ou=4,Yd=5,lu=6,cu=7,hu=300,Ba=301,za=302,Go=303,Ho=304,Ir=306,Vo=1e3,ia=1001,Wo=1002,Ii=1003,jd=1004,Is=1005,Wi=1006,Xr=1007,na=1008,fn=1009,uu=1010,du=1011,ys=1012,Pl=1013,sa=1014,un=1015,Ji=1016,Cl=1017,Dl=1018,Ga=1020,pu=35902,fu=1021,mu=1022,Ki=1023,gu=1024,vu=1025,Ua=1026,Ha=1027,_u=1028,Rl=1029,yu=1030,Il=1031,Ll=1033,dr=33776,pr=33777,fr=33778,mr=33779,Ko=35840,Xo=35841,qo=35842,Yo=35843,jo=36196,$o=37492,Zo=37496,Jo=37808,Qo=37809,el=37810,tl=37811,il=37812,nl=37813,al=37814,sl=37815,rl=37816,ol=37817,ll=37818,cl=37819,hl=37820,ul=37821,gr=36492,dl=36494,pl=36495,Su=36283,fl=36284,ml=36285,gl=36286,$d=3200,Zd=3201,Jd=0,Qd=1,Cn="",Hi="srgb",Nn="srgb-linear",Ul="display-p3",Lr="display-p3-linear",Sr="linear",bt="srgb",xr="rec709",Mr="p3",fa=7680,hc=519,e0=512,t0=513,i0=514,xu=515,n0=516,a0=517,s0=518,r0=519,uc=35044,ms=35048,dc="300 es",dn=2e3,br=2001;class ca{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pc=1234567;const Na=Math.PI/180,Ss=180/Math.PI;function qa(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]).toLowerCase()}function ni(i,e,t){return Math.max(e,Math.min(t,i))}function Nl(i,e){return(i%e+e)%e}function o0(i,e,t,n,a){return n+(i-e)*(a-n)/(t-e)}function l0(i,e,t){return i!==e?(t-i)/(e-i):0}function gs(i,e,t){return(1-t)*i+t*e}function c0(i,e,t,n){return gs(i,e,1-Math.exp(-t*n))}function h0(i,e=1){return e-Math.abs(Nl(i,e*2)-e)}function u0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function d0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function p0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function f0(i,e){return i+Math.random()*(e-i)}function m0(i){return i*(.5-Math.random())}function g0(i){i!==void 0&&(pc=i);let e=pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(i){return i*Na}function _0(i){return i*Ss}function y0(i){return(i&i-1)===0&&i!==0}function S0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function x0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function M0(i,e,t,n,a){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),u=r((e+n)/2),d=s((e-n)/2),p=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(a){case"XYX":i.set(o*u,l*d,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Da(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vs={DEG2RAD:Na,RAD2DEG:Ss,generateUUID:qa,clamp:ni,euclideanModulo:Nl,mapLinear:o0,inverseLerp:l0,lerp:gs,damp:c0,pingpong:h0,smoothstep:u0,smootherstep:d0,randInt:p0,randFloat:f0,randFloatSpread:m0,seededRandom:g0,degToRad:v0,radToDeg:_0,isPowerOfTwo:y0,ceilPowerOfTwo:S0,floorPowerOfTwo:x0,setQuaternionFromProperEuler:M0,normalize:ri,denormalize:Da};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ni(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,a,s,r,o,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,l,c)}set(e,t,n,a,s,r,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],f=n[5],g=n[8],v=a[0],h=a[3],m=a[6],S=a[1],y=a[4],M=a[7],L=a[2],A=a[5],P=a[8];return s[0]=r*v+o*S+l*L,s[3]=r*h+o*y+l*A,s[6]=r*m+o*M+l*P,s[1]=c*v+u*S+d*L,s[4]=c*h+u*y+d*A,s[7]=c*m+u*M+d*P,s[2]=p*v+f*S+g*L,s[5]=p*h+f*y+g*A,s[8]=p*m+f*M+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*s*u+n*o*l+a*s*c-a*r*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*r-o*c,p=o*l-u*s,f=c*s-r*l,g=t*d+n*p+a*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(a*c-u*n)*v,e[2]=(o*n-a*r)*v,e[3]=p*v,e[4]=(u*t-a*l)*v,e[5]=(a*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qr.makeScale(e,t)),this}rotate(e){return this.premultiply(qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new nt;function Mu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function b0(){const i=xs("canvas");return i.style.display="block",i}const fc={};function vr(i){i in fc||(fc[i]=!0,console.warn(i))}function E0(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function w0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function A0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mc=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gc=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),as={[Nn]:{transfer:Sr,primaries:xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Hi]:{transfer:bt,primaries:xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Lr]:{transfer:Sr,primaries:Mr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(gc),fromReference:i=>i.applyMatrix3(mc)},[Ul]:{transfer:bt,primaries:Mr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(gc),fromReference:i=>i.applyMatrix3(mc).convertLinearToSRGB()}},T0=new Set([Nn,Lr]),mt={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!T0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=as[e].toReference,a=as[t].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return as[i].primaries},getTransfer:function(i){return i===Cn?Sr:as[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(as[e].luminanceCoefficients)}};function ka(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ma;class P0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ma===void 0&&(ma=xs("canvas")),ma.width=e.width,ma.height=e.height;const n=ma.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ma}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ka(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ka(t[n]/255)*255):t[n]=ka(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C0=0;class bu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(jr(a[r].image)):s.push(jr(a[r]))}else s=jr(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?P0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D0=0;class hi extends ca{constructor(e=hi.DEFAULT_IMAGE,t=hi.DEFAULT_MAPPING,n=ia,a=ia,s=Wi,r=na,o=Ki,l=fn,c=hi.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=qa(),this.name="",this.source=new bu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vo:e.x=e.x-Math.floor(e.x);break;case ia:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vo:e.y=e.y-Math.floor(e.y);break;case ia:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=hu;hi.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,a=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],f=l[5],g=l[9],v=l[2],h=l[6],m=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+h)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,L=(m+1)/2,A=(u+p)/4,P=(d+v)/4,N=(g+h)/4;return y>M&&y>L?y<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(y),a=A/n,s=P/n):M>L?M<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(M),n=A/a,s=N/a):L<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(L),n=P/s,a=N/s),this.set(n,a,s,t),this}let S=Math.sqrt((h-g)*(h-g)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(h-g)/S,this.y=(d-v)/S,this.z=(p-u)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends ca{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const a={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new hi(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends R0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Eu extends hi{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I0 extends hi{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let l=n[a+0],c=n[a+1],u=n[a+2],d=n[a+3];const p=s[r+0],f=s[r+1],g=s[r+2],v=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==p||c!==f||u!==g){let h=1-o;const m=l*p+c*f+u*g+d*v,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const L=Math.sqrt(y),A=Math.atan2(L,m*S);h=Math.sin(h*A)/L,o=Math.sin(o*A)/L}const M=o*S;if(l=l*h+p*M,c=c*h+f*M,u=u*h+g*M,d=d*h+v*M,h===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,a,s,r){const o=n[a],l=n[a+1],c=n[a+2],u=n[a+3],d=s[r],p=s[r+1],f=s[r+2],g=s[r+3];return e[t]=o*g+u*d+l*f-c*p,e[t+1]=l*g+u*p+c*d-o*f,e[t+2]=c*g+u*f+o*p-l*d,e[t+3]=u*g-o*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(a/2),d=o(s/2),p=l(n/2),f=l(a/2),g=l(s/2);switch(r){case"XYZ":this._x=p*u*d+c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d-p*f*g;break;case"YXZ":this._x=p*u*d+c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d+p*f*g;break;case"ZXY":this._x=p*u*d-c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d-p*f*g;break;case"ZYX":this._x=p*u*d-c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d+p*f*g;break;case"YZX":this._x=p*u*d+c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d-p*f*g;break;case"XZY":this._x=p*u*d-c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(r-a)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(a+r)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(a+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(r-a)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ni(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+a*c-s*l,this._y=a*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-a*o,this._w=r*u-n*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*a+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=r*d+this._w*p,this._x=n*d+this._x*p,this._y=a*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*n),u=2*(o*t-s*a),d=2*(s*n-r*t);return this.x=t+l*c+r*d-o*u,this.y=n+l*u+o*c-s*d,this.z=a+l*d+s*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-n*l,this.z=n*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $r.copy(this).projectOnVector(e),this.sub($r)}reflect(e){return this.sub($r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ni(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new I,vc=new ra;class Ya{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Oi):Oi.fromBufferAttribute(s,r),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Us.subVectors(this.max,ss),ga.subVectors(e.a,ss),va.subVectors(e.b,ss),_a.subVectors(e.c,ss),xn.subVectors(va,ga),Mn.subVectors(_a,va),Vn.subVectors(ga,_a);let t=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-Vn.z,Vn.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,Vn.z,0,-Vn.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-Vn.y,Vn.x,0];return!Zr(t,ga,va,_a,Us)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,ga,va,_a,Us))?!1:(Ns.crossVectors(xn,Mn),t=[Ns.x,Ns.y,Ns.z],Zr(t,ga,va,_a,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new I,new I,new I,new I,new I,new I,new I,new I],Oi=new I,Ls=new Ya,ga=new I,va=new I,_a=new I,xn=new I,Mn=new I,Vn=new I,ss=new I,Us=new I,Ns=new I,Wn=new I;function Zr(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){Wn.fromArray(i,s);const o=a.x*Math.abs(Wn.x)+a.y*Math.abs(Wn.y)+a.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),u=n.dot(Wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const L0=new Ya,rs=new I,Jr=new I;class ws{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):L0.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);const t=rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(rs,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(Jr)),this.expandByPoint(rs.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new I,Qr=new I,ks=new I,bn=new I,eo=new I,Fs=new I,to=new I;class Ur{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Qr.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Qr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ks),o=bn.dot(this.direction),l=-bn.dot(ks),c=bn.lengthSq(),u=Math.abs(1-r*r);let d,p,f,g;if(u>0)if(d=r*l-o,p=r*o-l,g=s*u,d>=0)if(p>=-g)if(p<=g){const v=1/u;d*=v,p*=v,f=d*(d+r*p+2*o)+p*(r*d+p+2*l)+c}else p=s,d=Math.max(0,-(r*p+o)),f=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(r*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-r*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(d=Math.max(0,-(r*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c);else p=r>0?-s:s,d=Math.max(0,-(r*p+o)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Qr).addScaledVector(ks,p),f}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),a=an.dot(an)-n*n,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,a=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,a=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,r=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,r=(e.min.y-p.y)*u),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>a)||((o>n||n!==n)&&(n=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,a,s){eo.subVectors(t,e),Fs.subVectors(n,e),to.crossVectors(eo,Fs);let r=this.direction.dot(to),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;bn.subVectors(this.origin,e);const l=o*this.direction.dot(Fs.crossVectors(bn,Fs));if(l<0)return null;const c=o*this.direction.dot(eo.cross(bn));if(c<0||l+c>r)return null;const u=-o*bn.dot(to);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,a,s,r,o,l,c,u,d,p,f,g,v,h){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,l,c,u,d,p,f,g,v,h)}set(e,t,n,a,s,r,o,l,c,u,d,p,f,g,v,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=a,m[1]=s,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=p,m[3]=f,m[7]=g,m[11]=v,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/ya.setFromMatrixColumn(e,0).length(),s=1/ya.setFromMatrixColumn(e,1).length(),r=1/ya.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=r*u,f=r*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=p-v*c,t[9]=-o*l,t[2]=v-p*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const p=l*u,f=l*d,g=c*u,v=c*d;t[0]=p+v*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*d,t[5]=r*u,t[9]=-o,t[2]=f*o-g,t[6]=v+p*o,t[10]=r*l}else if(e.order==="ZXY"){const p=l*u,f=l*d,g=c*u,v=c*d;t[0]=p-v*o,t[4]=-r*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*u,t[9]=v-p*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const p=r*u,f=r*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=p*c+v,t[1]=l*d,t[5]=v*c+p,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const p=r*l,f=r*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-p*d,t[8]=g*d+f,t[1]=d,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=p-v*d}else if(e.order==="XZY"){const p=r*l,f=r*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+v,t[5]=r*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U0,e,N0)}lookAt(e,t,n){const a=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),En.crossVectors(n,xi),En.lengthSq()===0&&(Math.abs(n.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),En.crossVectors(n,xi)),En.normalize(),Os.crossVectors(xi,En),a[0]=En.x,a[4]=Os.x,a[8]=xi.x,a[1]=En.y,a[5]=Os.y,a[9]=xi.y,a[2]=En.z,a[6]=Os.z,a[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],f=n[13],g=n[2],v=n[6],h=n[10],m=n[14],S=n[3],y=n[7],M=n[11],L=n[15],A=a[0],P=a[4],N=a[8],j=a[12],_=a[1],b=a[5],K=a[9],V=a[13],X=a[2],Q=a[6],z=a[10],se=a[14],W=a[3],ge=a[7],he=a[11],Ae=a[15];return s[0]=r*A+o*_+l*X+c*W,s[4]=r*P+o*b+l*Q+c*ge,s[8]=r*N+o*K+l*z+c*he,s[12]=r*j+o*V+l*se+c*Ae,s[1]=u*A+d*_+p*X+f*W,s[5]=u*P+d*b+p*Q+f*ge,s[9]=u*N+d*K+p*z+f*he,s[13]=u*j+d*V+p*se+f*Ae,s[2]=g*A+v*_+h*X+m*W,s[6]=g*P+v*b+h*Q+m*ge,s[10]=g*N+v*K+h*z+m*he,s[14]=g*j+v*V+h*se+m*Ae,s[3]=S*A+y*_+M*X+L*W,s[7]=S*P+y*b+M*Q+L*ge,s[11]=S*N+y*K+M*z+L*he,s[15]=S*j+y*V+M*se+L*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],f=e[14],g=e[3],v=e[7],h=e[11],m=e[15];return g*(+s*l*d-a*c*d-s*o*p+n*c*p+a*o*f-n*l*f)+v*(+t*l*f-t*c*p+s*r*p-a*r*f+a*c*u-s*l*u)+h*(+t*c*d-t*o*f-s*r*d+n*r*f+s*o*u-n*c*u)+m*(-a*o*u-t*l*d+t*o*p+a*r*d-n*r*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],f=e[11],g=e[12],v=e[13],h=e[14],m=e[15],S=d*h*c-v*p*c+v*l*f-o*h*f-d*l*m+o*p*m,y=g*p*c-u*h*c-g*l*f+r*h*f+u*l*m-r*p*m,M=u*v*c-g*d*c+g*o*f-r*v*f-u*o*m+r*d*m,L=g*d*l-u*v*l-g*o*p+r*v*p+u*o*h-r*d*h,A=t*S+n*y+a*M+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=S*P,e[1]=(v*p*s-d*h*s-v*a*f+n*h*f+d*a*m-n*p*m)*P,e[2]=(o*h*s-v*l*s+v*a*c-n*h*c-o*a*m+n*l*m)*P,e[3]=(d*l*s-o*p*s-d*a*c+n*p*c+o*a*f-n*l*f)*P,e[4]=y*P,e[5]=(u*h*s-g*p*s+g*a*f-t*h*f-u*a*m+t*p*m)*P,e[6]=(g*l*s-r*h*s-g*a*c+t*h*c+r*a*m-t*l*m)*P,e[7]=(r*p*s-u*l*s+u*a*c-t*p*c-r*a*f+t*l*f)*P,e[8]=M*P,e[9]=(g*d*s-u*v*s-g*n*f+t*v*f+u*n*m-t*d*m)*P,e[10]=(r*v*s-g*o*s+g*n*c-t*v*c-r*n*m+t*o*m)*P,e[11]=(u*o*s-r*d*s-u*n*c+t*d*c+r*n*f-t*o*f)*P,e[12]=L*P,e[13]=(u*v*a-g*d*a+g*n*p-t*v*p-u*n*h+t*d*h)*P,e[14]=(g*o*a-r*v*a-g*n*l+t*v*l+r*n*h-t*o*h)*P,e[15]=(r*d*a-u*o*a+u*n*l-t*d*l-r*n*p+t*o*p)*P,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+n,u*l-a*r,0,c*l-a*o,u*l+a*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,u=r+r,d=o+o,p=s*c,f=s*u,g=s*d,v=r*u,h=r*d,m=o*d,S=l*c,y=l*u,M=l*d,L=n.x,A=n.y,P=n.z;return a[0]=(1-(v+m))*L,a[1]=(f+M)*L,a[2]=(g-y)*L,a[3]=0,a[4]=(f-M)*A,a[5]=(1-(p+m))*A,a[6]=(h+S)*A,a[7]=0,a[8]=(g+y)*P,a[9]=(h-S)*P,a[10]=(1-(p+v))*P,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let s=ya.set(a[0],a[1],a[2]).length();const r=ya.set(a[4],a[5],a[6]).length(),o=ya.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Bi.copy(this);const c=1/s,u=1/r,d=1/o;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=u,Bi.elements[5]*=u,Bi.elements[6]*=u,Bi.elements[8]*=d,Bi.elements[9]*=d,Bi.elements[10]*=d,t.setFromRotationMatrix(Bi),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,a,s,r,o=dn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-a),d=(t+e)/(t-e),p=(n+a)/(n-a);let f,g;if(o===dn)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===br)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=dn){const l=this.elements,c=1/(t-e),u=1/(n-a),d=1/(r-s),p=(t+e)*c,f=(n+a)*u;let g,v;if(o===dn)g=(r+s)*d,v=-2*d;else if(o===br)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ya=new I,Bi=new It,U0=new I(0,0,0),N0=new I(1,1,1),En=new I,Os=new I,xi=new I,_c=new It,yc=new ra;class mn{constructor(e=0,t=0,n=0,a=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],u=a[9],d=a[2],p=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(ni(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ni(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ni(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ni(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ni(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ni(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _c.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let k0=0;const Sc=new I,Sa=new ra,sn=new It,Bs=new I,os=new I,F0=new I,O0=new ra,xc=new I(1,0,0),Mc=new I(0,1,0),bc=new I(0,0,1),Ec={type:"added"},B0={type:"removed"},xa={type:"childadded",child:null},io={type:"childremoved",child:null};class ui extends ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new I,t=new mn,n=new ra,a=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new It},normalMatrix:{value:new nt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sa.setFromAxisAngle(e,t),this.quaternion.multiply(Sa),this}rotateOnWorldAxis(e,t){return Sa.setFromAxisAngle(e,t),this.quaternion.premultiply(Sa),this}rotateX(e){return this.rotateOnAxis(xc,e)}rotateY(e){return this.rotateOnAxis(Mc,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xc,e)}translateY(e){return this.translateOnAxis(Mc,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(os,Bs,this.up):sn.lookAt(Bs,os,this.up),this.quaternion.setFromRotationMatrix(sn),a&&(sn.extractRotation(a.matrixWorld),Sa.setFromRotationMatrix(sn),this.quaternion.premultiply(Sa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ec),xa.child=e,this.dispatchEvent(xa),xa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B0),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ec),xa.child=e,this.dispatchEvent(xa),xa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,F0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,O0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),p=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=a,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}ui.DEFAULT_UP=new I(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zi=new I,rn=new I,no=new I,on=new I,Ma=new I,ba=new I,wc=new I,ao=new I,so=new I,ro=new I,oo=new Ft,lo=new Ft,co=new Ft;class Ri{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),zi.subVectors(e,t),a.cross(zi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){zi.subVectors(a,t),rn.subVectors(n,t),no.subVectors(e,t);const r=zi.dot(zi),o=zi.dot(rn),l=zi.dot(no),c=rn.dot(rn),u=rn.dot(no),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(c*l-o*u)*p,g=(r*u-o*l)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,a,s,r,o,l){return this.getBarycoord(e,t,n,a,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,on.x),l.addScaledVector(r,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(e,t,n,a,s,r){return oo.setScalar(0),lo.setScalar(0),co.setScalar(0),oo.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,n),co.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(oo,s.x),r.addScaledVector(lo,s.y),r.addScaledVector(co,s.z),r}static isFrontFacing(e,t,n,a){return zi.subVectors(n,t),rn.subVectors(e,t),zi.cross(rn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),zi.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return Ri.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let r,o;Ma.subVectors(a,n),ba.subVectors(s,n),ao.subVectors(e,n);const l=Ma.dot(ao),c=ba.dot(ao);if(l<=0&&c<=0)return t.copy(n);so.subVectors(e,a);const u=Ma.dot(so),d=ba.dot(so);if(u>=0&&d<=u)return t.copy(a);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(Ma,r);ro.subVectors(e,s);const f=Ma.dot(ro),g=ba.dot(ro);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ba,o);const h=u*g-f*d;if(h<=0&&d-u>=0&&f-g>=0)return wc.subVectors(s,a),o=(d-u)/(d-u+(f-g)),t.copy(a).addScaledVector(wc,o);const m=1/(h+v+p);return r=v*m,o=p*m,t.copy(n).addScaledVector(Ma,r).addScaledVector(ba,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=mt.workingColorSpace){if(e=Nl(e,1),t=ni(t,0,1),n=ni(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ho(r,s,e+1/3),this.g=ho(r,s,e),this.b=ho(r,s,e-1/3)}return mt.toWorkingColorSpace(this,a),this}setStyle(e,t=Hi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hi){const n=Au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hi){return mt.fromWorkingColorSpace(ti.copy(this),e),Math.round(ni(ti.r*255,0,255))*65536+Math.round(ni(ti.g*255,0,255))*256+Math.round(ni(ti.b*255,0,255))}getHexString(e=Hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(ti.copy(this),t);const n=ti.r,a=ti.g,s=ti.b,r=Math.max(n,a,s),o=Math.min(n,a,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case n:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-n)/d+2;break;case s:l=(n-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=Hi){mt.fromWorkingColorSpace(ti.copy(this),e);const t=ti.r,n=ti.g,a=ti.b;return e!==Hi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(zs);const n=gs(wn.h,zs.h,t),a=gs(wn.s,zs.s,t),s=gs(wn.l,zs.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new rt;rt.NAMES=Au;let z0=0;class ha extends ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=La,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Lo,this.blendEquation=ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==La&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==ea&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oa extends ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new I,Gs=new Xe;class Qi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Da(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ri(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Da(t,this.array)),t}setX(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Da(t,this.array)),t}setY(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Da(t,this.array)),t}setW(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),n=ri(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),n=ri(n,this.array),a=ri(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),n=ri(n,this.array),a=ri(a,this.array),s=ri(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}}class Tu extends Qi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pu extends Qi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends Qi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let G0=0;const Ci=new It,uo=new ui,Ea=new I,Mi=new Ya,ls=new Ya,qt=new I;class Tt extends ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?Pu:Tu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,n){return Ci.makeTranslation(e,t,n),this.applyMatrix4(Ci),this}scale(e,t,n){return Ci.makeScale(e,t,n),this.applyMatrix4(Ci),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ea).negate(),this.translate(Ea.x,Ea.y,Ea.z),this}setFromPoints(e){const t=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];Mi.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Mi.min,ls.min),Mi.expandByPoint(qt),qt.addVectors(Mi.max,ls.max),Mi.expandByPoint(qt)):(Mi.expandByPoint(ls.min),Mi.expandByPoint(ls.max))}Mi.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)qt.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(qt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qt.fromBufferAttribute(o,c),l&&(Ea.fromBufferAttribute(e,c),qt.add(Ea)),a=Math.max(a,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new I,l[N]=new I;const c=new I,u=new I,d=new I,p=new Xe,f=new Xe,g=new Xe,v=new I,h=new I;function m(N,j,_){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,j),d.fromBufferAttribute(n,_),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,j),g.fromBufferAttribute(s,_),u.sub(c),d.sub(c),f.sub(p),g.sub(p);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(b),h.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(b),o[N].add(v),o[j].add(v),o[_].add(v),l[N].add(h),l[j].add(h),l[_].add(h))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,j=S.length;N<j;++N){const _=S[N],b=_.start,K=_.count;for(let V=b,X=b+K;V<X;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new I,M=new I,L=new I,A=new I;function P(N){L.fromBufferAttribute(a,N),A.copy(L);const j=o[N];y.copy(j),y.sub(L.multiplyScalar(L.dot(j))).normalize(),M.crossVectors(A,j);const b=M.dot(l[N])<0?-1:1;r.setXYZW(N,y.x,y.y,y.z,b)}for(let N=0,j=S.length;N<j;++N){const _=S[N],b=_.start,K=_.count;for(let V=b,X=b+K;V<X;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const a=new I,s=new I,r=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),v=e.getX(p+1),h=e.getX(p+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,h),u.subVectors(r,s),d.subVectors(a,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,h),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)a.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),r.fromBufferAttribute(t,p+2),u.subVectors(r,s),d.subVectors(a,s),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,h=l.length;v<h;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)p[g++]=c[f++]}return new Qi(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(a[l]=u,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new It,Kn=new Ur,Hs=new ws,Tc=new I,Vs=new I,Ws=new I,Ks=new I,po=new I,Xs=new I,Pc=new I,qs=new I;class Bt extends ui{constructor(e=new Tt,t=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){Xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(po.fromBufferAttribute(d,e),r?Xs.addScaledVector(po,u):Xs.addScaledVector(po.sub(t),u))}t.add(Xs)}return t}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),Kn.copy(e.ray).recast(e.near),!(Hs.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Hs,Tc)===null||Kn.origin.distanceToSquared(Tc)>(e.far-e.near)**2))&&(Ac.copy(s).invert(),Kn.copy(e.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const h=p[g],m=r[h.materialIndex],S=Math.max(h.start,f.start),y=Math.min(o.count,Math.min(h.start+h.count,f.start+f.count));for(let M=S,L=y;M<L;M+=3){const A=o.getX(M),P=o.getX(M+1),N=o.getX(M+2);a=Ys(this,m,e,n,c,u,d,A,P,N),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let h=g,m=v;h<m;h+=3){const S=o.getX(h),y=o.getX(h+1),M=o.getX(h+2);a=Ys(this,r,e,n,c,u,d,S,y,M),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const h=p[g],m=r[h.materialIndex],S=Math.max(h.start,f.start),y=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let M=S,L=y;M<L;M+=3){const A=M,P=M+1,N=M+2;a=Ys(this,m,e,n,c,u,d,A,P,N),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let h=g,m=v;h<m;h+=3){const S=h,y=h+1,M=h+2;a=Ys(this,r,e,n,c,u,d,S,y,M),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}}}function H0(i,e,t,n,a,s,r,o){let l;if(e.side===ci?l=n.intersectTriangle(r,s,a,!0,o):l=n.intersectTriangle(a,s,r,e.side===Ln,o),l===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:i}}function Ys(i,e,t,n,a,s,r,o,l,c){i.getVertexPosition(o,Vs),i.getVertexPosition(l,Ws),i.getVertexPosition(c,Ks);const u=H0(i,e,t,n,Vs,Ws,Ks,Pc);if(u){const d=new I;Ri.getBarycoord(Pc,Vs,Ws,Ks,d),a&&(u.uv=Ri.getInterpolatedAttribute(a,o,l,c,d,new Xe)),s&&(u.uv1=Ri.getInterpolatedAttribute(s,o,l,c,d,new Xe)),r&&(u.normal=Ri.getInterpolatedAttribute(r,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new I,materialIndex:0};Ri.getNormal(Vs,Ws,Ks,p.normal),u.face=p,u.barycoord=d}return u}class ja extends Tt{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,a,r,2),g("x","z","y",1,-1,e,n,-t,a,r,3),g("x","y","z",1,-1,e,t,n,a,s,4),g("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(d,2));function g(v,h,m,S,y,M,L,A,P,N,j){const _=M/P,b=L/N,K=M/2,V=L/2,X=A/2,Q=P+1,z=N+1;let se=0,W=0;const ge=new I;for(let he=0;he<z;he++){const Ae=he*b-V;for(let ze=0;ze<Q;ze++){const Ne=ze*_-K;ge[v]=Ne*S,ge[h]=Ae*y,ge[m]=X,c.push(ge.x,ge.y,ge.z),ge[v]=0,ge[h]=0,ge[m]=A>0?1:-1,u.push(ge.x,ge.y,ge.z),d.push(ze/P),d.push(1-he/N),se+=1}}for(let he=0;he<N;he++)for(let Ae=0;Ae<P;Ae++){const ze=p+Ae+Q*he,Ne=p+Ae+Q*(he+1),C=p+(Ae+1)+Q*(he+1),D=p+(Ae+1)+Q*he;l.push(ze,Ne,D),l.push(Ne,C,D),W+=6}o.addGroup(f,W,j),f+=W,p+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Va(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function oi(i){const e={};for(let t=0;t<i.length;t++){const n=Va(i[t]);for(const a in n)e[a]=n[a]}return e}function V0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Ms={clone:Va,merge:oi};var W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _t extends ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Va(e.uniforms),this.uniformsGroups=V0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Du extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new I,Cc=new Xe,Dc=new Xe;class Di extends Du{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,Cc,Dc),t.subVectors(Dc,Cc)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Na*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*n/c,a*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wa=-90,Aa=1;class X0 extends ui{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Di(wa,Aa,e,t);a.layers=this.layers,this.add(a);const s=new Di(wa,Aa,e,t);s.layers=this.layers,this.add(s);const r=new Di(wa,Aa,e,t);r.layers=this.layers,this.add(r);const o=new Di(wa,Aa,e,t);o.layers=this.layers,this.add(o);const l=new Di(wa,Aa,e,t);l.layers=this.layers,this.add(l);const c=new Di(wa,Aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,s),e.setRenderTarget(n,1,a),e.render(t,r),e.setRenderTarget(n,2,a),e.render(t,o),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,a),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ru extends hi{constructor(e,t,n,a,s,r,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ba,super(e,t,n,a,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q0 extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Ru(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ja(5,5,5),s=new _t({name:"CubemapFromEquirect",uniforms:Va(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ci,blending:pn});s.uniforms.tEquirect.value=t;const r=new Bt(a,s),o=t.minFilter;return t.minFilter===na&&(t.minFilter=Wi),new X0(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}}const fo=new I,Y0=new I,j0=new nt;class Pn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=fo.subVectors(n,t).cross(Y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fo),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||j0.getNormalMatrix(e),a=this.coplanarPoint(fo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new ws,js=new I;class Iu{constructor(e=new Pn,t=new Pn,n=new Pn,a=new Pn,s=new Pn,r=new Pn){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){const n=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],u=a[5],d=a[6],p=a[7],f=a[8],g=a[9],v=a[10],h=a[11],m=a[12],S=a[13],y=a[14],M=a[15];if(n[0].setComponents(l-s,p-c,h-f,M-m).normalize(),n[1].setComponents(l+s,p+c,h+f,M+m).normalize(),n[2].setComponents(l+r,p+u,h+g,M+S).normalize(),n[3].setComponents(l-r,p-u,h-g,M-S).normalize(),n[4].setComponents(l-o,p-d,h-v,M-y).normalize(),t===dn)n[5].setComponents(l+o,p+d,h+v,M+y).normalize();else if(t===br)n[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(js.x=a.normal.x>0?e.max.x:e.min.x,js.y=a.normal.y>0?e.max.y:e.min.y,js.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lu(){let i=null,e=!1,t=null,n=null;function a(s,r){t(s,r),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function $0(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}class la extends Tt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(a),c=o+1,u=l+1,d=e/o,p=t/l,f=[],g=[],v=[],h=[];for(let m=0;m<u;m++){const S=m*p-r;for(let y=0;y<c;y++){const M=y*d-s;g.push(M,-S,0),v.push(0,0,1),h.push(y/o),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const y=S+c*m,M=S+c*(m+1),L=S+1+c*(m+1),A=S+1+c*m;f.push(y,M,A),f.push(M,L,A)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sp=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`
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
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
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
#endif`,jp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,of=`#if defined( USE_POINTS_UV )
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
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
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
#endif`,ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
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
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kf=`float getShadowMask() {
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
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Of=`#ifdef USE_SKINNING
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
#endif`,Bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kf=`#ifdef USE_TRANSMISSION
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
#endif`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
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
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`#include <common>
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
}`,a2=`#if DEPTH_PACKING == 3200
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
}`,s2=`#define DISTANCE
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
}`,r2=`#define DISTANCE
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
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`uniform float scale;
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
}`,h2=`uniform vec3 diffuse;
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
}`,u2=`#include <common>
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
}`,d2=`uniform vec3 diffuse;
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
}`,p2=`#define LAMBERT
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
}`,f2=`#define LAMBERT
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
}`,m2=`#define MATCAP
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
}`,g2=`#define MATCAP
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
}`,v2=`#define NORMAL
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
}`,_2=`#define NORMAL
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
}`,y2=`#define PHONG
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
}`,S2=`#define PHONG
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
}`,x2=`#define STANDARD
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
}`,M2=`#define STANDARD
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
}`,b2=`#define TOON
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
}`,E2=`#define TOON
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
}`,w2=`uniform float size;
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
}`,A2=`uniform vec3 diffuse;
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
}`,T2=`#include <common>
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
}`,P2=`uniform vec3 color;
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
}`,C2=`uniform float rotation;
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
}`,D2=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Z0,alphahash_pars_fragment:J0,alphamap_fragment:Q0,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:ip,aomap_fragment:np,aomap_pars_fragment:ap,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:vp,color_pars_vertex:_p,color_vertex:yp,common:Sp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:bp,displacementmap_vertex:Ep,emissivemap_fragment:wp,emissivemap_pars_fragment:Ap,colorspace_fragment:Tp,colorspace_pars_fragment:Pp,envmap_fragment:Cp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Rp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Vp,envmap_vertex:Lp,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:kp,fog_pars_fragment:Fp,gradientmap_pars_fragment:Op,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Hp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Kp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:jp,lights_fragment_begin:$p,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:nf,map_fragment:af,map_pars_fragment:sf,map_particle_fragment:rf,map_particle_pars_fragment:of,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphinstance_vertex:hf,morphcolor_vertex:uf,morphnormal_vertex:df,morphtarget_pars_vertex:pf,morphtarget_vertex:ff,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:vf,normal_pars_vertex:_f,normal_vertex:yf,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Ef,opaque_fragment:wf,packing:Af,premultiplied_alpha_fragment:Tf,project_vertex:Pf,dithering_fragment:Cf,dithering_pars_fragment:Df,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Uf,shadowmap_vertex:Nf,shadowmask_pars_fragment:kf,skinbase_vertex:Ff,skinning_pars_vertex:Of,skinning_vertex:Bf,skinnormal_vertex:zf,specularmap_fragment:Gf,specularmap_pars_fragment:Hf,tonemapping_fragment:Vf,tonemapping_pars_fragment:Wf,transmission_fragment:Kf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:Yf,uv_vertex:jf,worldpos_vertex:$f,background_vert:Zf,background_frag:Jf,backgroundCube_vert:Qf,backgroundCube_frag:e2,cube_vert:t2,cube_frag:i2,depth_vert:n2,depth_frag:a2,distanceRGBA_vert:s2,distanceRGBA_frag:r2,equirect_vert:o2,equirect_frag:l2,linedashed_vert:c2,linedashed_frag:h2,meshbasic_vert:u2,meshbasic_frag:d2,meshlambert_vert:p2,meshlambert_frag:f2,meshmatcap_vert:m2,meshmatcap_frag:g2,meshnormal_vert:v2,meshnormal_frag:_2,meshphong_vert:y2,meshphong_frag:S2,meshphysical_vert:x2,meshphysical_frag:M2,meshtoon_vert:b2,meshtoon_frag:E2,points_vert:w2,points_frag:A2,shadow_vert:T2,shadow_frag:P2,sprite_vert:C2,sprite_frag:D2},Te={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},$i={basic:{uniforms:oi([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:oi([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:oi([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:oi([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:oi([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:oi([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:oi([Te.points,Te.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:oi([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:oi([Te.common,Te.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:oi([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:oi([Te.sprite,Te.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:oi([Te.common,Te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:oi([Te.lights,Te.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};$i.physical={uniforms:oi([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const $s={r:0,b:0,g:0},qn=new mn,R2=new It;function I2(i,e,t,n,a,s,r){const o=new rt(0);let l=s===!0?0:1,c,u,d=null,p=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function v(S){let y=!1;const M=g(S);M===null?m(o,l):M&&M.isColor&&(m(M,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(S,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===Ir)?(u===void 0&&(u=new Bt(new ja(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:Va($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),qn.copy(y.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(R2.makeRotationFromEuler(qn)),u.material.toneMapped=mt.getTransfer(M.colorSpace)!==bt,(d!==M||p!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,p=M.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Bt(new la(2,2),new _t({name:"BackgroundMaterial",uniforms:Va($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=mt.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,p=M.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,y){S.getRGB($s,Cu(i)),n.buffers.color.setClear($s.r,$s.g,$s.b,y,r)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:v,addToRenderList:h}}function L2(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=p(null);let s=a,r=!1;function o(_,b,K,V,X){let Q=!1;const z=d(V,K,b);s!==z&&(s=z,c(s.object)),Q=f(_,V,K,X),Q&&g(_,V,K,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,M(_,b,K,V),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,b,K){const V=K.wireframe===!0;let X=n[_.id];X===void 0&&(X={},n[_.id]=X);let Q=X[b.id];Q===void 0&&(Q={},X[b.id]=Q);let z=Q[V];return z===void 0&&(z=p(l()),Q[V]=z),z}function p(_){const b=[],K=[],V=[];for(let X=0;X<t;X++)b[X]=0,K[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:K,attributeDivisors:V,object:_,attributes:{},index:null}}function f(_,b,K,V){const X=s.attributes,Q=b.attributes;let z=0;const se=K.getAttributes();for(const W in se)if(se[W].location>=0){const he=X[W];let Ae=Q[W];if(Ae===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(Ae=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(Ae=_.instanceColor)),he===void 0||he.attribute!==Ae||Ae&&he.data!==Ae.data)return!0;z++}return s.attributesNum!==z||s.index!==V}function g(_,b,K,V){const X={},Q=b.attributes;let z=0;const se=K.getAttributes();for(const W in se)if(se[W].location>=0){let he=Q[W];he===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(he=_.instanceColor));const Ae={};Ae.attribute=he,he&&he.data&&(Ae.data=he.data),X[W]=Ae,z++}s.attributes=X,s.attributesNum=z,s.index=V}function v(){const _=s.newAttributes;for(let b=0,K=_.length;b<K;b++)_[b]=0}function h(_){m(_,0)}function m(_,b){const K=s.newAttributes,V=s.enabledAttributes,X=s.attributeDivisors;K[_]=1,V[_]===0&&(i.enableVertexAttribArray(_),V[_]=1),X[_]!==b&&(i.vertexAttribDivisor(_,b),X[_]=b)}function S(){const _=s.newAttributes,b=s.enabledAttributes;for(let K=0,V=b.length;K<V;K++)b[K]!==_[K]&&(i.disableVertexAttribArray(K),b[K]=0)}function y(_,b,K,V,X,Q,z){z===!0?i.vertexAttribIPointer(_,b,K,X,Q):i.vertexAttribPointer(_,b,K,V,X,Q)}function M(_,b,K,V){v();const X=V.attributes,Q=K.getAttributes(),z=b.defaultAttributeValues;for(const se in Q){const W=Q[se];if(W.location>=0){let ge=X[se];if(ge===void 0&&(se==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),se==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor)),ge!==void 0){const he=ge.normalized,Ae=ge.itemSize,ze=e.get(ge);if(ze===void 0)continue;const Ne=ze.buffer,C=ze.type,D=ze.bytesPerElement,H=C===i.INT||C===i.UNSIGNED_INT||ge.gpuType===Pl;if(ge.isInterleavedBufferAttribute){const $=ge.data,pe=$.stride,re=ge.offset;if($.isInstancedInterleavedBuffer){for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe,$.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<W.locationSize;oe++)h(W.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let oe=0;oe<W.locationSize;oe++)y(W.location+oe,Ae/W.locationSize,C,he,pe*D,(re+Ae/W.locationSize*oe)*D,H)}else{if(ge.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)m(W.location+$,ge.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let $=0;$<W.locationSize;$++)h(W.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let $=0;$<W.locationSize;$++)y(W.location+$,Ae/W.locationSize,C,he,Ae*D,Ae/W.locationSize*$*D,H)}}else if(z!==void 0){const he=z[se];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(W.location,he);break;case 3:i.vertexAttrib3fv(W.location,he);break;case 4:i.vertexAttrib4fv(W.location,he);break;default:i.vertexAttrib1fv(W.location,he)}}}}S()}function L(){N();for(const _ in n){const b=n[_];for(const K in b){const V=b[K];for(const X in V)u(V[X].object),delete V[X];delete b[K]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const b=n[_.id];for(const K in b){const V=b[K];for(const X in V)u(V[X].object),delete V[X];delete b[K]}delete n[_.id]}function P(_){for(const b in n){const K=n[b];if(K[_.id]===void 0)continue;const V=K[_.id];for(const X in V)u(V[X].object),delete V[X];delete K[_.id]}}function N(){j(),r=!0,s!==a&&(s=a,c(s.object))}function j(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:j,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:h,disableUnusedAttributes:S}}function U2(i,e,t){let n;function a(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function r(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function l(c,u,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<p.length;v++)t.update(g,n,p[v])}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function N2(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(P){return!(P!==Ki&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const N=P===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==fn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==un&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:L,maxSamples:A}}function k2(i){const e=this;let t=null,n=0,a=!1,s=!1;const r=new Pn,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||a;return a=p,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,v=d.clipIntersection,h=d.clipShadows,m=i.get(d);if(!a||g===null||g.length===0||s&&!h)s?u(null):c();else{const S=s?0:n,y=S*4;let M=m.clippingState||null;l.value=M,M=u(g,p,y,f);for(let L=0;L!==y;++L)M[L]=t[L];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,f,g){const v=d!==null?d.length:0;let h=null;if(v!==0){if(h=l.value,g!==!0||h===null){const m=f+v*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(h===null||h.length<m)&&(h=new Float32Array(m));for(let y=0,M=f;y!==v;++y,M+=4)r.copy(d[y]).applyMatrix4(S,o),r.normal.toArray(h,M),h[M+3]=r.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,h}}function F2(i){let e=new WeakMap;function t(r,o){return o===Go?r.mapping=Ba:o===Ho&&(r.mapping=za),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Go||o===Ho)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new q0(l.height);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",a),t(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Er extends Du{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ia=4,Rc=[.125,.215,.35,.446,.526,.582],ta=20,mo=new Er,Ic=new rt;let go=null,vo=0,_o=0,yo=!1;const Jn=(1+Math.sqrt(5))/2,Ta=1/Jn,Lc=[new I(-Jn,Ta,0),new I(Jn,Ta,0),new I(-Ta,0,Jn),new I(Ta,0,Jn),new I(0,Jn,-Ta),new I(0,Jn,Ta),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,vo,_o),this._renderer.xr.enabled=yo,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ba||e.mapping===za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:Ji,format:Ki,colorSpace:Nn,depthBuffer:!1},a=Nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O2(s)),this._blurMaterial=B2(s,e,t)}return a}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,a){const o=new Di(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ic),u.toneMapping=In,u.autoClear=!1;const f=new oa({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1}),g=new Bt(new ja,f);let v=!1;const h=e.background;h?h.isColor&&(f.color.copy(h),e.background=null,v=!0):(f.color.copy(Ic),v=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;Zs(a,S*y,m>2?y:0,y,y),u.setRenderTarget(a),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Ba||e.mapping===za;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new Bt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lc[(a-s-1)%Lc.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,a,"latitudinal",s),this._halfBlur(r,e,n,n,a,"longitudinal",s)}_halfBlur(e,t,n,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Bt(this._lodPlanes[a],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ta-1),v=s/g,h=isFinite(s)?1+Math.floor(u*v):ta;h>ta&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ta}`);const m=[];let S=0;for(let P=0;P<ta;++P){const N=P/v,j=Math.exp(-N*N/2);m.push(j),P===0?S+=j:P<h&&(S+=2*j)}for(let P=0;P<m.length;P++)m[P]=m[P]/S;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=m,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-n;const M=this._sizeLods[a],L=3*M*(a>y-Ia?a-y+Ia:0),A=4*(this._cubeSize-M);Zs(t,L,A,3*M,2*M),l.setRenderTarget(t),l.render(d,mo)}}function O2(i){const e=[],t=[],n=[];let a=i;const s=i-Ia+1+Rc.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>i-Ia?l=Rc[r-i+Ia-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,h=2,m=1,S=new Float32Array(v*g*f),y=new Float32Array(h*g*f),M=new Float32Array(m*g*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,N=A>2?0:-1,j=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];S.set(j,v*g*A),y.set(p,h*g*A);const _=[A,A,A,A,A,A];M.set(_,m*g*A)}const L=new Tt;L.setAttribute("position",new Qi(S,v)),L.setAttribute("uv",new Qi(y,h)),L.setAttribute("faceIndex",new Qi(M,m)),e.push(L),a>Ia&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nc(i,e,t){const n=new Li(i,e,t);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function B2(i,e,t){const n=new Float32Array(ta),a=new I(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:ta,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:kl(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function kc(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Fc(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function z2(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Go||l===Ho,u=l===Ba||l===za;if(c||u){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Uc(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&a(f)?(t===null&&(t=new Uc(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function G2(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function H2(i,e,t,n){const a={},s=new WeakMap;function r(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let h=0,m=v.length;h<m;h++)e.remove(v[h])}p.removeEventListener("dispose",r),delete a[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return a[p.id]===!0||(p.addEventListener("dispose",r),a[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let h=0,m=v.length;h<m;h++)e.update(v[h],i.ARRAY_BUFFER)}}function c(d){const p=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let y=0,M=S.length;y<M;y+=3){const L=S[y+0],A=S[y+1],P=S[y+2];p.push(L,A,A,P,P,L)}}else if(g!==void 0){const S=g.array;v=g.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const L=y+0,A=y+1,P=y+2;p.push(L,A,A,P,P,L)}}else return;const h=new(Mu(p)?Pu:Tu)(p,1);h.version=v;const m=s.get(d);m&&e.remove(m),s.set(d,h)}function u(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function V2(i,e,t){let n;function a(p){n=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,f){i.drawElements(n,f,s,p*r),t.update(f,n,1)}function c(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,p*r,g),t.update(f,n,g))}function u(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,g);let h=0;for(let m=0;m<g;m++)h+=f[m];t.update(h,n,1)}function d(p,f,g,v){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<p.length;m++)c(p[m]/r,f[m],v[m]);else{h.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,v,0,g);let m=0;for(let S=0;S<g;S++)m+=f[S];for(let S=0;S<v.length;S++)t.update(m,n,v[S])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function W2(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function K2(i,e,t){const n=new WeakMap,a=new Ft;function s(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let j=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",j)};p!==void 0&&p.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let M=o.attributes.position.count*y,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*L*4*d),P=new Eu(A,M,L,d);P.type=un,P.needsUpdate=!0;const N=y*4;for(let _=0;_<d;_++){const b=h[_],K=m[_],V=S[_],X=M*L*4*_;for(let Q=0;Q<b.count;Q++){const z=Q*N;f===!0&&(a.fromBufferAttribute(b,Q),A[X+z+0]=a.x,A[X+z+1]=a.y,A[X+z+2]=a.z,A[X+z+3]=0),g===!0&&(a.fromBufferAttribute(K,Q),A[X+z+4]=a.x,A[X+z+5]=a.y,A[X+z+6]=a.z,A[X+z+7]=0),v===!0&&(a.fromBufferAttribute(V,Q),A[X+z+8]=a.x,A[X+z+9]=a.y,A[X+z+10]=a.z,A[X+z+11]=V.itemSize===4?a.w:1)}}p={count:d,texture:P,size:new Xe(M,L)},n.set(o,p),o.addEventListener("dispose",j)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function X2(i,e,t,n){let a=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;a.get(p)!==c&&(p.update(),a.set(p,c))}return d}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class Uu extends hi{constructor(e,t,n,a,s,r,o,l,c,u=Ua){if(u!==Ua&&u!==Ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ua&&(n=sa),n===void 0&&u===Ha&&(n=Ga),super(null,a,s,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ii,this.minFilter=l!==void 0?l:Ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nu=new hi,Oc=new Uu(1,1),ku=new Eu,Fu=new I0,Ou=new Ru,Bc=[],zc=[],Gc=new Float32Array(16),Hc=new Float32Array(9),Vc=new Float32Array(4);function $a(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=Bc[a];if(s===void 0&&(s=new Float32Array(a),Bc[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nr(i,e){let t=zc[e];t===void 0&&(t=new Int32Array(e),zc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function q2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Y2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function j2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function $2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Z2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Vc.set(n),i.uniformMatrix2fv(this.addr,!1,Vc),Wt(t,n)}}function J2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),Wt(t,n)}}function Q2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),Wt(t,n)}}function e3(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function t3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function i3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function n3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function a3(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function s3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function r3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function o3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function l3(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(Oc.compareFunction=xu,s=Oc):s=Nu,t.setTexture2D(e||s,a)}function c3(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Fu,a)}function h3(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Ou,a)}function u3(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||ku,a)}function d3(i){switch(i){case 5126:return q2;case 35664:return Y2;case 35665:return j2;case 35666:return $2;case 35674:return Z2;case 35675:return J2;case 35676:return Q2;case 5124:case 35670:return e3;case 35667:case 35671:return t3;case 35668:case 35672:return i3;case 35669:case 35673:return n3;case 5125:return a3;case 36294:return s3;case 36295:return r3;case 36296:return o3;case 35678:case 36198:case 36298:case 36306:case 35682:return l3;case 35679:case 36299:case 36307:return c3;case 35680:case 36300:case 36308:case 36293:return h3;case 36289:case 36303:case 36311:case 36292:return u3}}function p3(i,e){i.uniform1fv(this.addr,e)}function f3(i,e){const t=$a(e,this.size,2);i.uniform2fv(this.addr,t)}function m3(i,e){const t=$a(e,this.size,3);i.uniform3fv(this.addr,t)}function g3(i,e){const t=$a(e,this.size,4);i.uniform4fv(this.addr,t)}function v3(i,e){const t=$a(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _3(i,e){const t=$a(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function y3(i,e){const t=$a(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function S3(i,e){i.uniform1iv(this.addr,e)}function x3(i,e){i.uniform2iv(this.addr,e)}function M3(i,e){i.uniform3iv(this.addr,e)}function b3(i,e){i.uniform4iv(this.addr,e)}function E3(i,e){i.uniform1uiv(this.addr,e)}function w3(i,e){i.uniform2uiv(this.addr,e)}function A3(i,e){i.uniform3uiv(this.addr,e)}function T3(i,e){i.uniform4uiv(this.addr,e)}function P3(i,e,t){const n=this.cache,a=e.length,s=Nr(t,a);Vt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||Nu,s[r])}function C3(i,e,t){const n=this.cache,a=e.length,s=Nr(t,a);Vt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||Fu,s[r])}function D3(i,e,t){const n=this.cache,a=e.length,s=Nr(t,a);Vt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||Ou,s[r])}function R3(i,e,t){const n=this.cache,a=e.length,s=Nr(t,a);Vt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||ku,s[r])}function I3(i){switch(i){case 5126:return p3;case 35664:return f3;case 35665:return m3;case 35666:return g3;case 35674:return v3;case 35675:return _3;case 35676:return y3;case 5124:case 35670:return S3;case 35667:case 35671:return x3;case 35668:case 35672:return M3;case 35669:case 35673:return b3;case 5125:return E3;case 36294:return w3;case 36295:return A3;case 36296:return T3;case 35678:case 36198:case 36298:case 36306:case 35682:return P3;case 35679:case 36299:case 36307:return C3;case 35680:case 36300:case 36308:case 36293:return D3;case 36289:case 36303:case 36311:case 36292:return R3}}class L3{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=d3(t.type)}}class U3{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I3(t.type)}}class N3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function Wc(i,e){i.seq.push(e),i.map[e.id]=e}function k3(i,e,t){const n=i.name,a=n.length;for(So.lastIndex=0;;){const s=So.exec(n),r=So.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Wc(t,c===void 0?new L3(o,i,e):new U3(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new N3(o),Wc(t,d)),t=d}}}class _r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);k3(s,r,this)}}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function Kc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const F3=37297;let O3=0;function B3(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function z3(i){const e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(i);let n;switch(e===t?n="":e===Mr&&t===xr?n="LinearDisplayP3ToLinearSRGB":e===xr&&t===Mr&&(n="LinearSRGBToLinearDisplayP3"),i){case Nn:case Lr:return[n,"LinearTransferOETF"];case Hi:case Ul:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Xc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+B3(i.getShaderSource(e),r)}else return a}function G3(i,e){const t=z3(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function H3(i,e){let t;switch(e){case au:t="Linear";break;case su:t="Reinhard";break;case ru:t="Cineon";break;case ou:t="ACESFilmic";break;case lu:t="AgX";break;case cu:t="Neutral";break;case Yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Js=new I;function V3(){mt.getLuminanceCoefficients(Js);const i=Js.x.toFixed(4),e=Js.y.toFixed(4),t=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function K3(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X3(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),r=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function ds(i){return i!==""}function qc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q3=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(q3,j3)}const Y3=new Map;function j3(i,e){let t=tt[e];if(t===void 0){const n=Y3.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vl(t)}const $3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace($3,Z3)}function Z3(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function $c(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function J3(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Q3(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ba:case za:e="ENVMAP_TYPE_CUBE";break;case Ir:e="ENVMAP_TYPE_CUBE_UV";break}return e}function em(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case za:e="ENVMAP_MODE_REFRACTION";break}return e}function tm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nu:e="ENVMAP_BLENDING_MULTIPLY";break;case Xd:e="ENVMAP_BLENDING_MIX";break;case qd:e="ENVMAP_BLENDING_ADD";break}return e}function im(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nm(i,e,t,n){const a=i.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=J3(t),c=Q3(t),u=em(t),d=tm(t),p=im(t),f=W3(t),g=K3(s),v=a.createProgram();let h,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),h.length>0&&(h+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`)):(h=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),m=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?tt.tonemapping_pars_fragment:"",t.toneMapping!==In?H3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,G3("linearToOutputTexel",t.outputColorSpace),V3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),r=vl(r),r=qc(r,t),r=Yc(r,t),o=vl(o),o=qc(o,t),o=Yc(o,t),r=jc(r),o=jc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+h+r,M=S+m+o,L=Kc(a,a.VERTEX_SHADER,y),A=Kc(a,a.FRAGMENT_SHADER,M);a.attachShader(v,L),a.attachShader(v,A),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function P(b){if(i.debug.checkShaderErrors){const K=a.getProgramInfoLog(v).trim(),V=a.getShaderInfoLog(L).trim(),X=a.getShaderInfoLog(A).trim();let Q=!0,z=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,v,L,A);else{const se=Xc(a,L,"vertex"),W=Xc(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+K+`
`+se+`
`+W)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(V===""||X==="")&&(z=!1);z&&(b.diagnostics={runnable:Q,programLog:K,vertexShader:{log:V,prefix:h},fragmentShader:{log:X,prefix:m}})}a.deleteShader(L),a.deleteShader(A),N=new _r(a,v),j=X3(a,v)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let j;this.getAttributes=function(){return j===void 0&&P(this),j};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=a.getProgramParameter(v,F3)),_},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O3++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}let am=0;class sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rm(e),t.set(e,n)),n}}class rm{constructor(e){this.id=am++,this.code=e,this.usedTimes=0}}function om(i,e,t,n,a,s,r){const o=new wu,l=new sm,c=new Set,u=[],d=a.logarithmicDepthBuffer,p=a.reverseDepthBuffer,f=a.vertexTextures;let g=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,b,K,V,X){const Q=V.fog,z=X.geometry,se=_.isMeshStandardMaterial?V.environment:null,W=(_.isMeshStandardMaterial?t:e).get(_.envMap||se),ge=W&&W.mapping===Ir?W.image.height:null,he=v[_.type];_.precision!==null&&(g=a.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const Ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ze=Ae!==void 0?Ae.length:0;let Ne=0;z.morphAttributes.position!==void 0&&(Ne=1),z.morphAttributes.normal!==void 0&&(Ne=2),z.morphAttributes.color!==void 0&&(Ne=3);let C,D,H,$;if(he){const Kt=$i[he];C=Kt.vertexShader,D=Kt.fragmentShader}else C=_.vertexShader,D=_.fragmentShader,l.update(_),H=l.getVertexShaderID(_),$=l.getFragmentShaderID(_);const pe=i.getRenderTarget(),re=X.isInstancedMesh===!0,oe=X.isBatchedMesh===!0,xe=!!_.map,ue=!!_.matcap,R=!!W,He=!!_.aoMap,Ke=!!_.lightMap,Ve=!!_.bumpMap,ye=!!_.normalMap,$e=!!_.displacementMap,be=!!_.emissiveMap,w=!!_.metalnessMap,x=!!_.roughnessMap,G=_.anisotropy>0,ee=_.clearcoat>0,te=_.dispersion>0,Z=_.iridescence>0,ae=_.sheen>0,fe=_.transmission>0,ve=G&&!!_.anisotropyMap,qe=ee&&!!_.clearcoatMap,me=ee&&!!_.clearcoatNormalMap,Pe=ee&&!!_.clearcoatRoughnessMap,Me=Z&&!!_.iridescenceMap,we=Z&&!!_.iridescenceThicknessMap,Le=ae&&!!_.sheenColorMap,Ze=ae&&!!_.sheenRoughnessMap,Je=!!_.specularMap,lt=!!_.specularColorMap,k=!!_.specularIntensityMap,Ie=fe&&!!_.transmissionMap,ie=fe&&!!_.thicknessMap,ce=!!_.gradientMap,De=!!_.alphaMap,Re=_.alphaTest>0,ot=!!_.alphaHash,Dt=!!_.extensions;let Qt=In;_.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Qt=i.toneMapping);const ct={shaderID:he,shaderType:_.type,shaderName:_.name,vertexShader:C,fragmentShader:D,defines:_.defines,customVertexShaderID:H,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:oe,batchingColor:oe&&X._colorsTexture!==null,instancing:re,instancingColor:re&&X.instanceColor!==null,instancingMorph:re&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Nn,alphaToCoverage:!!_.alphaToCoverage,map:xe,matcap:ue,envMap:R,envMapMode:R&&W.mapping,envMapCubeUVHeight:ge,aoMap:He,lightMap:Ke,bumpMap:Ve,normalMap:ye,displacementMap:f&&$e,emissiveMap:be,normalMapObjectSpace:ye&&_.normalMapType===Qd,normalMapTangentSpace:ye&&_.normalMapType===Jd,metalnessMap:w,roughnessMap:x,anisotropy:G,anisotropyMap:ve,clearcoat:ee,clearcoatMap:qe,clearcoatNormalMap:me,clearcoatRoughnessMap:Pe,dispersion:te,iridescence:Z,iridescenceMap:Me,iridescenceThicknessMap:we,sheen:ae,sheenColorMap:Le,sheenRoughnessMap:Ze,specularMap:Je,specularColorMap:lt,specularIntensityMap:k,transmission:fe,transmissionMap:Ie,thicknessMap:ie,gradientMap:ce,opaque:_.transparent===!1&&_.blending===La&&_.alphaToCoverage===!1,alphaMap:De,alphaTest:Re,alphaHash:ot,combine:_.combine,mapUv:xe&&h(_.map.channel),aoMapUv:He&&h(_.aoMap.channel),lightMapUv:Ke&&h(_.lightMap.channel),bumpMapUv:Ve&&h(_.bumpMap.channel),normalMapUv:ye&&h(_.normalMap.channel),displacementMapUv:$e&&h(_.displacementMap.channel),emissiveMapUv:be&&h(_.emissiveMap.channel),metalnessMapUv:w&&h(_.metalnessMap.channel),roughnessMapUv:x&&h(_.roughnessMap.channel),anisotropyMapUv:ve&&h(_.anisotropyMap.channel),clearcoatMapUv:qe&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:me&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&h(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:we&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&h(_.sheenRoughnessMap.channel),specularMapUv:Je&&h(_.specularMap.channel),specularColorMapUv:lt&&h(_.specularColorMap.channel),specularIntensityMapUv:k&&h(_.specularIntensityMap.channel),transmissionMapUv:Ie&&h(_.transmissionMap.channel),thicknessMapUv:ie&&h(_.thicknessMap.channel),alphaMapUv:De&&h(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ye||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!z.attributes.uv&&(xe||De),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:p,skinning:X.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:Ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:xe&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===bt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vi,flipSided:_.side===ci,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Dt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&_.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function S(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const K in _.defines)b.push(K),b.push(_.defines[K]);return _.isRawShaderMaterial===!1&&(y(b,_),M(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function y(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),_.push(o.mask)}function L(_){const b=v[_.type];let K;if(b){const V=$i[b];K=Ms.clone(V.uniforms)}else K=_.uniforms;return K}function A(_,b){let K;for(let V=0,X=u.length;V<X;V++){const Q=u[V];if(Q.cacheKey===b){K=Q,++K.usedTimes;break}}return K===void 0&&(K=new nm(i,b,_,s),u.push(K)),K}function P(_){if(--_.usedTimes===0){const b=u.indexOf(_);u[b]=u[u.length-1],u.pop(),_.destroy()}}function N(_){l.remove(_)}function j(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:L,acquireProgram:A,releaseProgram:P,releaseShaderCache:N,programs:u,dispose:j}}function lm(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,l){i.get(r)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function cm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jc(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(d,p,f,g,v,h){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:h},i[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=h),e++,m}function o(d,p,f,g,v,h){const m=r(d,p,f,g,v,h);f.transmission>0?n.push(m):f.transparent===!0?a.push(m):t.push(m)}function l(d,p,f,g,v,h){const m=r(d,p,f,g,v,h);f.transmission>0?n.unshift(m):f.transparent===!0?a.unshift(m):t.unshift(m)}function c(d,p){t.length>1&&t.sort(d||cm),n.length>1&&n.sort(p||Zc),a.length>1&&a.sort(p||Zc)}function u(){for(let d=e,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:o,unshift:l,finish:u,sort:c}}function hm(){let i=new WeakMap;function e(n,a){const s=i.get(n);let r;return s===void 0?(r=new Jc,i.set(n,[r])):a>=s.length?(r=new Jc,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function um(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new rt};break;case"SpotLight":t={position:new I,direction:new I,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function dm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pm=0;function fm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mm(i){const e=new um,t=dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const a=new I,s=new It,r=new It;function o(c){let u=0,d=0,p=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let f=0,g=0,v=0,h=0,m=0,S=0,y=0,M=0,L=0,A=0,P=0;c.sort(fm);for(let j=0,_=c.length;j<_;j++){const b=c[j],K=b.color,V=b.intensity,X=b.distance,Q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=K.r*V,d+=K.g*V,p+=K.b*V;else if(b.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(b.sh.coefficients[z],V);P++}else if(b.isDirectionalLight){const z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const se=b.shadow,W=t.get(b);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=b.shadow.matrix,S++}n.directional[f]=z,f++}else if(b.isSpotLight){const z=e.get(b);z.position.setFromMatrixPosition(b.matrixWorld),z.color.copy(K).multiplyScalar(V),z.distance=X,z.coneCos=Math.cos(b.angle),z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),z.decay=b.decay,n.spot[v]=z;const se=b.shadow;if(b.map&&(n.spotLightMap[L]=b.map,L++,se.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[v]=se.matrix,b.castShadow){const W=t.get(b);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=Q,M++}v++}else if(b.isRectAreaLight){const z=e.get(b);z.color.copy(K).multiplyScalar(V),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),n.rectArea[h]=z,h++}else if(b.isPointLight){const z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),z.distance=b.distance,z.decay=b.decay,b.castShadow){const se=b.shadow,W=t.get(b);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,W.shadowCameraNear=se.camera.near,W.shadowCameraFar=se.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=z,g++}else if(b.isHemisphereLight){const z=e.get(b);z.skyColor.copy(b.color).multiplyScalar(V),z.groundColor.copy(b.groundColor).multiplyScalar(V),n.hemi[m]=z,m++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==h||N.hemiLength!==m||N.numDirectionalShadows!==S||N.numPointShadows!==y||N.numSpotShadows!==M||N.numSpotMaps!==L||N.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=h,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,N.directionalLength=f,N.pointLength=g,N.spotLength=v,N.rectAreaLength=h,N.hemiLength=m,N.numDirectionalShadows=S,N.numPointShadows=y,N.numSpotShadows=M,N.numSpotMaps=L,N.numLightProbes=P,n.version=pm++)}function l(c,u){let d=0,p=0,f=0,g=0,v=0;const h=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const y=c[m];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(h),d++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(h),f++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),r.identity(),s.copy(y.matrixWorld),s.premultiply(h),r.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),v++}}}return{setup:o,setupView:l,state:n}}function Qc(i){const e=new mm(i),t=[],n=[];function a(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function r(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function gm(i){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new Qc(i),e.set(a,[o])):s>=r.length?(o=new Qc(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class vm extends ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _m extends ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
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
}`;function xm(i,e,t){let n=new Iu;const a=new Xe,s=new Xe,r=new Ft,o=new vm({depthPacking:Zd}),l=new _m,c={},u=t.maxTextureSize,d={[Ln]:ci,[ci]:Ln,[Vi]:Vi},p=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ym,fragmentShader:Sm}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(g,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let m=this.type;this.render=function(A,P,N){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||A.length===0)return;const j=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),K=i.state;K.setBlending(pn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const V=m!==cn&&this.type===cn,X=m===cn&&this.type!==cn;for(let Q=0,z=A.length;Q<z;Q++){const se=A[Q],W=se.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const ge=W.getFrameExtents();if(a.multiply(ge),s.copy(W.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/ge.x),a.x=s.x*ge.x,W.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/ge.y),a.y=s.y*ge.y,W.mapSize.y=s.y)),W.map===null||V===!0||X===!0){const Ae=this.type!==cn?{minFilter:Ii,magFilter:Ii}:{};W.map!==null&&W.map.dispose(),W.map=new Li(a.x,a.y,Ae),W.map.texture.name=se.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const he=W.getViewportCount();for(let Ae=0;Ae<he;Ae++){const ze=W.getViewport(Ae);r.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),K.viewport(r),W.updateMatrices(se,Ae),n=W.getFrustum(),M(P,N,W.camera,se,this.type)}W.isPointLightShadow!==!0&&this.type===cn&&S(W,N),W.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(j,_,b)};function S(A,P){const N=e.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(a.x,a.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,N,p,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,N,f,v,null)}function y(A,P,N,j){let _=null;const b=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)_=b;else if(_=N.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const K=_.uuid,V=P.uuid;let X=c[K];X===void 0&&(X={},c[K]=X);let Q=X[V];Q===void 0&&(Q=_.clone(),X[V]=Q,P.addEventListener("dispose",L)),_=Q}if(_.visible=P.visible,_.wireframe=P.wireframe,j===cn?_.side=P.shadowSide!==null?P.shadowSide:P.side:_.side=P.shadowSide!==null?P.shadowSide:d[P.side],_.alphaMap=P.alphaMap,_.alphaTest=P.alphaTest,_.map=P.map,_.clipShadows=P.clipShadows,_.clippingPlanes=P.clippingPlanes,_.clipIntersection=P.clipIntersection,_.displacementMap=P.displacementMap,_.displacementScale=P.displacementScale,_.displacementBias=P.displacementBias,_.wireframeLinewidth=P.wireframeLinewidth,_.linewidth=P.linewidth,N.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const K=i.properties.get(_);K.light=N}return _}function M(A,P,N,j,_){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const V=e.update(A),X=A.material;if(Array.isArray(X)){const Q=V.groups;for(let z=0,se=Q.length;z<se;z++){const W=Q[z],ge=X[W.materialIndex];if(ge&&ge.visible){const he=y(A,ge,j,_);A.onBeforeShadow(i,A,P,N,V,he,W),i.renderBufferDirect(N,null,V,he,A,W),A.onAfterShadow(i,A,P,N,V,he,W)}}}else if(X.visible){const Q=y(A,X,j,_);A.onBeforeShadow(i,A,P,N,V,Q,null),i.renderBufferDirect(N,null,V,Q,A,null),A.onAfterShadow(i,A,P,N,V,Q,null)}}const K=A.children;for(let V=0,X=K.length;V<X;V++)M(K[V],P,N,j,_)}function L(A){A.target.removeEventListener("dispose",L);for(const N in c){const j=c[N],_=A.target.uuid;_ in j&&(j[_].dispose(),delete j[_])}}}const Mm={[Uo]:No,[ko]:Bo,[Fo]:zo,[Oa]:Oo,[No]:Uo,[Bo]:ko,[zo]:Fo,[Oo]:Oa};function bm(i){function e(){let k=!1;const Ie=new Ft;let ie=null;const ce=new Ft(0,0,0,0);return{setMask:function(De){ie!==De&&!k&&(i.colorMask(De,De,De,De),ie=De)},setLocked:function(De){k=De},setClear:function(De,Re,ot,Dt,Qt){Qt===!0&&(De*=Dt,Re*=Dt,ot*=Dt),Ie.set(De,Re,ot,Dt),ce.equals(Ie)===!1&&(i.clearColor(De,Re,ot,Dt),ce.copy(Ie))},reset:function(){k=!1,ie=null,ce.set(-1,0,0,0)}}}function t(){let k=!1,Ie=!1,ie=null,ce=null,De=null;return{setReversed:function(Re){Ie=Re},setTest:function(Re){Re?H(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!k&&(i.depthMask(Re),ie=Re)},setFunc:function(Re){if(Ie&&(Re=Mm[Re]),ce!==Re){switch(Re){case Uo:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case Oa:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Re}},setLocked:function(Re){k=Re},setClear:function(Re){De!==Re&&(i.clearDepth(Re),De=Re)},reset:function(){k=!1,ie=null,ce=null,De=null}}}function n(){let k=!1,Ie=null,ie=null,ce=null,De=null,Re=null,ot=null,Dt=null,Qt=null;return{setTest:function(ct){k||(ct?H(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(ct){Ie!==ct&&!k&&(i.stencilMask(ct),Ie=ct)},setFunc:function(ct,Kt,yi){(ie!==ct||ce!==Kt||De!==yi)&&(i.stencilFunc(ct,Kt,yi),ie=ct,ce=Kt,De=yi)},setOp:function(ct,Kt,yi){(Re!==ct||ot!==Kt||Dt!==yi)&&(i.stencilOp(ct,Kt,yi),Re=ct,ot=Kt,Dt=yi)},setLocked:function(ct){k=ct},setClear:function(ct){Qt!==ct&&(i.clearStencil(ct),Qt=ct)},reset:function(){k=!1,Ie=null,ie=null,ce=null,De=null,Re=null,ot=null,Dt=null,Qt=null}}}const a=new e,s=new t,r=new n,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,p=[],f=null,g=!1,v=null,h=null,m=null,S=null,y=null,M=null,L=null,A=new rt(0,0,0),P=0,N=!1,j=null,_=null,b=null,K=null,V=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,z=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(se)[1]),Q=z>=1):se.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Q=z>=2);let W=null,ge={};const he=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),ze=new Ft().fromArray(he),Ne=new Ft().fromArray(Ae);function C(k,Ie,ie,ce){const De=new Uint8Array(4),Re=i.createTexture();i.bindTexture(k,Re),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<ie;ot++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Ie+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Re}const D={};D[i.TEXTURE_2D]=C(i.TEXTURE_2D,i.TEXTURE_2D,1),D[i.TEXTURE_CUBE_MAP]=C(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[i.TEXTURE_2D_ARRAY]=C(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),D[i.TEXTURE_3D]=C(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),r.setClear(0),H(i.DEPTH_TEST),s.setFunc(Oa),Ke(!1),Ve(oc),H(i.CULL_FACE),R(pn);function H(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function $(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function pe(k,Ie){return u[k]!==Ie?(i.bindFramebuffer(k,Ie),u[k]=Ie,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ie),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function re(k,Ie){let ie=p,ce=!1;if(k){ie=d.get(Ie),ie===void 0&&(ie=[],d.set(Ie,ie));const De=k.textures;if(ie.length!==De.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,ot=De.length;Re<ot;Re++)ie[Re]=i.COLOR_ATTACHMENT0+Re;ie.length=De.length,ce=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ce=!0);ce&&i.drawBuffers(ie)}function oe(k){return f!==k?(i.useProgram(k),f=k,!0):!1}const xe={[ea]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Dd]:i.FUNC_REVERSE_SUBTRACT};xe[Rd]=i.MIN,xe[Id]=i.MAX;const ue={[Ld]:i.ZERO,[Ud]:i.ONE,[Nd]:i.SRC_COLOR,[Io]:i.SRC_ALPHA,[Gd]:i.SRC_ALPHA_SATURATE,[Bd]:i.DST_COLOR,[Fd]:i.DST_ALPHA,[kd]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[Kd]:i.ONE_MINUS_CONSTANT_ALPHA};function R(k,Ie,ie,ce,De,Re,ot,Dt,Qt,ct){if(k===pn){g===!0&&($(i.BLEND),g=!1);return}if(g===!1&&(H(i.BLEND),g=!0),k!==Pd){if(k!==v||ct!==N){if((h!==ea||y!==ea)&&(i.blendEquation(i.FUNC_ADD),h=ea,y=ea),ct)switch(k){case La:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case La:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}m=null,S=null,M=null,L=null,A.set(0,0,0),P=0,v=k,N=ct}return}De=De||Ie,Re=Re||ie,ot=ot||ce,(Ie!==h||De!==y)&&(i.blendEquationSeparate(xe[Ie],xe[De]),h=Ie,y=De),(ie!==m||ce!==S||Re!==M||ot!==L)&&(i.blendFuncSeparate(ue[ie],ue[ce],ue[Re],ue[ot]),m=ie,S=ce,M=Re,L=ot),(Dt.equals(A)===!1||Qt!==P)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Qt),A.copy(Dt),P=Qt),v=k,N=!1}function He(k,Ie){k.side===Vi?$(i.CULL_FACE):H(i.CULL_FACE);let ie=k.side===ci;Ie&&(ie=!ie),Ke(ie),k.blending===La&&k.transparent===!1?R(pn):R(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),a.setMask(k.colorWrite);const ce=k.stencilWrite;r.setTest(ce),ce&&(r.setMask(k.stencilWriteMask),r.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),r.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),$e(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(k){j!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),j=k)}function Ve(k){k!==wd?(H(i.CULL_FACE),k!==_&&(k===oc?i.cullFace(i.BACK):k===Ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),_=k}function ye(k){k!==b&&(Q&&i.lineWidth(k),b=k)}function $e(k,Ie,ie){k?(H(i.POLYGON_OFFSET_FILL),(K!==Ie||V!==ie)&&(i.polygonOffset(Ie,ie),K=Ie,V=ie)):$(i.POLYGON_OFFSET_FILL)}function be(k){k?H(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function w(k){k===void 0&&(k=i.TEXTURE0+X-1),W!==k&&(i.activeTexture(k),W=k)}function x(k,Ie,ie){ie===void 0&&(W===null?ie=i.TEXTURE0+X-1:ie=W);let ce=ge[ie];ce===void 0&&(ce={type:void 0,texture:void 0},ge[ie]=ce),(ce.type!==k||ce.texture!==Ie)&&(W!==ie&&(i.activeTexture(ie),W=ie),i.bindTexture(k,Ie||D[k]),ce.type=k,ce.texture=Ie)}function G(){const k=ge[W];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(k){ze.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ze.copy(k))}function Le(k){Ne.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ne.copy(k))}function Ze(k,Ie){let ie=l.get(Ie);ie===void 0&&(ie=new WeakMap,l.set(Ie,ie));let ce=ie.get(k);ce===void 0&&(ce=i.getUniformBlockIndex(Ie,k.name),ie.set(k,ce))}function Je(k,Ie){const ce=l.get(Ie).get(k);o.get(Ie)!==ce&&(i.uniformBlockBinding(Ie,ce,k.__bindingPointIndex),o.set(Ie,ce))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,ge={},u={},d=new WeakMap,p=[],f=null,g=!1,v=null,h=null,m=null,S=null,y=null,M=null,L=null,A=new rt(0,0,0),P=0,N=!1,j=null,_=null,b=null,K=null,V=null,ze.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),r.reset()}return{buffers:{color:a,depth:s,stencil:r},enable:H,disable:$,bindFramebuffer:pe,drawBuffers:re,useProgram:oe,setBlending:R,setMaterial:He,setFlipSided:Ke,setCullFace:Ve,setLineWidth:ye,setPolygonOffset:$e,setScissorTest:be,activeTexture:w,bindTexture:x,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:te,texImage2D:Pe,texImage3D:Me,updateUBOMapping:Ze,uniformBlockBinding:Je,texStorage2D:qe,texStorage3D:me,texSubImage2D:Z,texSubImage3D:ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:we,viewport:Le,reset:lt}}function eh(i,e,t,n){const a=Em(n);switch(t){case fu:return i*e;case gu:return i*e;case vu:return i*e*2;case _u:return i*e/a.components*a.byteLength;case Rl:return i*e/a.components*a.byteLength;case yu:return i*e*2/a.components*a.byteLength;case Il:return i*e*2/a.components*a.byteLength;case mu:return i*e*3/a.components*a.byteLength;case Ki:return i*e*4/a.components*a.byteLength;case Ll:return i*e*4/a.components*a.byteLength;case dr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fr:case mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:case Yo:return Math.max(i,16)*Math.max(e,8)/4;case Ko:case qo:return Math.max(i,8)*Math.max(e,8)/2;case jo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case gr:case dl:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Su:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Em(i){switch(i){case fn:case uu:return{byteLength:1,components:1};case ys:case du:case Ji:return{byteLength:2,components:1};case Cl:case Dl:return{byteLength:2,components:4};case sa:case Pl:case un:return{byteLength:4,components:1};case pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wm(i,e,t,n,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return f?new OffscreenCanvas(w,x):xs("canvas")}function v(w,x,G){let ee=1;const te=be(w);if((te.width>G||te.height>G)&&(ee=G/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(ee*te.width),ae=Math.floor(ee*te.height);d===void 0&&(d=g(Z,ae));const fe=x?g(Z,ae):d;return fe.width=Z,fe.height=ae,fe.getContext("2d").drawImage(w,0,0,Z,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+ae+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function h(w){return w.generateMipmaps&&w.minFilter!==Ii&&w.minFilter!==Wi}function m(w){i.generateMipmap(w)}function S(w,x,G,ee,te=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=x;if(x===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),x===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),x===i.RGBA){const ae=te?Sr:mt.getTransfer(ee);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=ae===bt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(w,x){let G;return w?x===null||x===sa||x===Ga?G=i.DEPTH24_STENCIL8:x===un?G=i.DEPTH32F_STENCIL8:x===ys&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===sa||x===Ga?G=i.DEPTH_COMPONENT24:x===un?G=i.DEPTH_COMPONENT32F:x===ys&&(G=i.DEPTH_COMPONENT16),G}function M(w,x){return h(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ii&&w.minFilter!==Wi?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function L(w){const x=w.target;x.removeEventListener("dispose",L),P(x),x.isVideoTexture&&u.delete(x)}function A(w){const x=w.target;x.removeEventListener("dispose",A),j(x)}function P(w){const x=n.get(w);if(x.__webglInit===void 0)return;const G=w.source,ee=p.get(G);if(ee){const te=ee[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(w),Object.keys(ee).length===0&&p.delete(G)}n.remove(w)}function N(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const G=w.source,ee=p.get(G);delete ee[x.__cacheKey],r.memory.textures--}function j(w){const x=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let te=0;te<x.__webglFramebuffer[ee].length;te++)i.deleteFramebuffer(x.__webglFramebuffer[ee][te]);else i.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[ee]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=w.textures;for(let ee=0,te=G.length;ee<te;ee++){const Z=n.get(G[ee]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),r.memory.textures--),n.remove(G[ee])}n.remove(w)}let _=0;function b(){_=0}function K(){const w=_;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),_+=1,w}function V(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function X(w,x){const G=n.get(w);if(w.isVideoTexture&&ye(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(G,w,x);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function Q(w,x){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Ne(G,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function z(w,x){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Ne(G,w,x);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function se(w,x){const G=n.get(w);if(w.version>0&&G.__version!==w.version){C(G,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const W={[Vo]:i.REPEAT,[ia]:i.CLAMP_TO_EDGE,[Wo]:i.MIRRORED_REPEAT},ge={[Ii]:i.NEAREST,[jd]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[Wi]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[na]:i.LINEAR_MIPMAP_LINEAR},he={[e0]:i.NEVER,[r0]:i.ALWAYS,[t0]:i.LESS,[xu]:i.LEQUAL,[i0]:i.EQUAL,[s0]:i.GEQUAL,[n0]:i.GREATER,[a0]:i.NOTEQUAL};function Ae(w,x){if(x.type===un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wi||x.magFilter===Xr||x.magFilter===Is||x.magFilter===na||x.minFilter===Wi||x.minFilter===Xr||x.minFilter===Is||x.minFilter===na)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,W[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,W[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,W[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ge[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,he[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ii||x.minFilter!==Is&&x.minFilter!==na||x.type===un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ze(w,x){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",L));const ee=x.source;let te=p.get(ee);te===void 0&&(te={},p.set(ee,te));const Z=V(x);if(Z!==w.__cacheKey){te[Z]===void 0&&(te[Z]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,G=!0),te[Z].usedTimes++;const ae=te[w.__cacheKey];ae!==void 0&&(te[w.__cacheKey].usedTimes--,ae.usedTimes===0&&N(x)),w.__cacheKey=Z,w.__webglTexture=te[Z].texture}return G}function Ne(w,x,G){let ee=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=i.TEXTURE_3D);const te=ze(w,x),Z=x.source;t.bindTexture(ee,w.__webglTexture,i.TEXTURE0+G);const ae=n.get(Z);if(Z.version!==ae.__version||te===!0){t.activeTexture(i.TEXTURE0+G);const fe=mt.getPrimaries(mt.workingColorSpace),ve=x.colorSpace===Cn?null:mt.getPrimaries(x.colorSpace),qe=x.colorSpace===Cn||fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let me=v(x.image,!1,a.maxTextureSize);me=$e(x,me);const Pe=s.convert(x.format,x.colorSpace),Me=s.convert(x.type);let we=S(x.internalFormat,Pe,Me,x.colorSpace,x.isVideoTexture);Ae(ee,x);let Le;const Ze=x.mipmaps,Je=x.isVideoTexture!==!0,lt=ae.__version===void 0||te===!0,k=Z.dataReady,Ie=M(x,me);if(x.isDepthTexture)we=y(x.format===Ha,x.type),lt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,we,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,we,me.width,me.height,0,Pe,Me,null));else if(x.isDataTexture)if(Ze.length>0){Je&&lt&&t.texStorage2D(i.TEXTURE_2D,Ie,we,Ze[0].width,Ze[0].height);for(let ie=0,ce=Ze.length;ie<ce;ie++)Le=Ze[ie],Je?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Le.width,Le.height,Pe,Me,Le.data):t.texImage2D(i.TEXTURE_2D,ie,we,Le.width,Le.height,0,Pe,Me,Le.data);x.generateMipmaps=!1}else Je?(lt&&t.texStorage2D(i.TEXTURE_2D,Ie,we,me.width,me.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Pe,Me,me.data)):t.texImage2D(i.TEXTURE_2D,0,we,me.width,me.height,0,Pe,Me,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Je&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,we,Ze[0].width,Ze[0].height,me.depth);for(let ie=0,ce=Ze.length;ie<ce;ie++)if(Le=Ze[ie],x.format!==Ki)if(Pe!==null)if(Je){if(k)if(x.layerUpdates.size>0){const De=eh(Le.width,Le.height,x.format,x.type);for(const Re of x.layerUpdates){const ot=Le.data.subarray(Re*De/Le.data.BYTES_PER_ELEMENT,(Re+1)*De/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Re,Le.width,Le.height,1,Pe,ot,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,me.depth,Pe,Le.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,we,Le.width,Le.height,me.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,me.depth,Pe,Me,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,we,Le.width,Le.height,me.depth,0,Pe,Me,Le.data)}else{Je&&lt&&t.texStorage2D(i.TEXTURE_2D,Ie,we,Ze[0].width,Ze[0].height);for(let ie=0,ce=Ze.length;ie<ce;ie++)Le=Ze[ie],x.format!==Ki?Pe!==null?Je?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Le.width,Le.height,Pe,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,we,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Le.width,Le.height,Pe,Me,Le.data):t.texImage2D(i.TEXTURE_2D,ie,we,Le.width,Le.height,0,Pe,Me,Le.data)}else if(x.isDataArrayTexture)if(Je){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,we,me.width,me.height,me.depth),k)if(x.layerUpdates.size>0){const ie=eh(me.width,me.height,x.format,x.type);for(const ce of x.layerUpdates){const De=me.data.subarray(ce*ie/me.data.BYTES_PER_ELEMENT,(ce+1)*ie/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,me.width,me.height,1,Pe,Me,De)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Pe,Me,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,me.width,me.height,me.depth,0,Pe,Me,me.data);else if(x.isData3DTexture)Je?(lt&&t.texStorage3D(i.TEXTURE_3D,Ie,we,me.width,me.height,me.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Pe,Me,me.data)):t.texImage3D(i.TEXTURE_3D,0,we,me.width,me.height,me.depth,0,Pe,Me,me.data);else if(x.isFramebufferTexture){if(lt)if(Je)t.texStorage2D(i.TEXTURE_2D,Ie,we,me.width,me.height);else{let ie=me.width,ce=me.height;for(let De=0;De<Ie;De++)t.texImage2D(i.TEXTURE_2D,De,we,ie,ce,0,Pe,Me,null),ie>>=1,ce>>=1}}else if(Ze.length>0){if(Je&&lt){const ie=be(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Ie,we,ie.width,ie.height)}for(let ie=0,ce=Ze.length;ie<ce;ie++)Le=Ze[ie],Je?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Pe,Me,Le):t.texImage2D(i.TEXTURE_2D,ie,we,Pe,Me,Le);x.generateMipmaps=!1}else if(Je){if(lt){const ie=be(me);t.texStorage2D(i.TEXTURE_2D,Ie,we,ie.width,ie.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,Me,me)}else t.texImage2D(i.TEXTURE_2D,0,we,Pe,Me,me);h(x)&&m(ee),ae.__version=Z.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function C(w,x,G){if(x.image.length!==6)return;const ee=ze(w,x),te=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);const Z=n.get(te);if(te.version!==Z.__version||ee===!0){t.activeTexture(i.TEXTURE0+G);const ae=mt.getPrimaries(mt.workingColorSpace),fe=x.colorSpace===Cn?null:mt.getPrimaries(x.colorSpace),ve=x.colorSpace===Cn||ae===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const qe=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,Pe=[];for(let ce=0;ce<6;ce++)!qe&&!me?Pe[ce]=v(x.image[ce],!0,a.maxCubemapSize):Pe[ce]=me?x.image[ce].image:x.image[ce],Pe[ce]=$e(x,Pe[ce]);const Me=Pe[0],we=s.convert(x.format,x.colorSpace),Le=s.convert(x.type),Ze=S(x.internalFormat,we,Le,x.colorSpace),Je=x.isVideoTexture!==!0,lt=Z.__version===void 0||ee===!0,k=te.dataReady;let Ie=M(x,Me);Ae(i.TEXTURE_CUBE_MAP,x);let ie;if(qe){Je&&lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ze,Me.width,Me.height);for(let ce=0;ce<6;ce++){ie=Pe[ce].mipmaps;for(let De=0;De<ie.length;De++){const Re=ie[De];x.format!==Ki?we!==null?Je?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,0,0,Re.width,Re.height,we,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,Ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,0,0,Re.width,Re.height,we,Le,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De,Ze,Re.width,Re.height,0,we,Le,Re.data)}}}else{if(ie=x.mipmaps,Je&&lt){ie.length>0&&Ie++;const ce=be(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ze,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(me){Je?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe[ce].width,Pe[ce].height,we,Le,Pe[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ze,Pe[ce].width,Pe[ce].height,0,we,Le,Pe[ce].data);for(let De=0;De<ie.length;De++){const ot=ie[De].image[ce].image;Je?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,0,0,ot.width,ot.height,we,Le,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,Ze,ot.width,ot.height,0,we,Le,ot.data)}}else{Je?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,we,Le,Pe[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ze,we,Le,Pe[ce]);for(let De=0;De<ie.length;De++){const Re=ie[De];Je?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,0,0,we,Le,Re.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,De+1,Ze,we,Le,Re.image[ce])}}}h(x)&&m(i.TEXTURE_CUBE_MAP),Z.__version=te.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function D(w,x,G,ee,te,Z){const ae=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),ve=S(G.internalFormat,ae,fe,G.colorSpace);if(!n.get(x).__hasExternalTextures){const me=Math.max(1,x.width>>Z),Pe=Math.max(1,x.height>>Z);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,ve,me,Pe,x.depth,0,ae,fe,null):t.texImage2D(te,Z,ve,me,Pe,0,ae,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,te,n.get(G).__webglTexture,0,Ke(x)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,te,n.get(G).__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(w,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const ee=x.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,Z=y(x.stencilBuffer,te),ae=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=Ke(x);Ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Z,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,w)}else{const ee=x.textures;for(let te=0;te<ee.length;te++){const Z=ee[te],ae=s.convert(Z.format,Z.colorSpace),fe=s.convert(Z.type),ve=S(Z.internalFormat,ae,fe,Z.colorSpace),qe=Ke(x);G&&Ve(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,ve,x.width,x.height):Ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,ve,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ve,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const ee=n.get(x.depthTexture).__webglTexture,te=Ke(x);if(x.depthTexture.format===Ua)Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(x.depthTexture.format===Ha)Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function pe(w){const x=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const ee=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ee){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ee.removeEventListener("dispose",te)};ee.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=ee}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");$(x.__webglFramebuffer,w)}else if(G){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]===void 0)x.__webglDepthbuffer[ee]=i.createRenderbuffer(),H(x.__webglDepthbuffer[ee],w,!1);else{const te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),H(x.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(w,x,G){const ee=n.get(w);x!==void 0&&D(ee.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&pe(w)}function oe(w){const x=w.texture,G=n.get(w),ee=n.get(x);w.addEventListener("dispose",A);const te=w.textures,Z=w.isWebGLCubeRenderTarget===!0,ae=te.length>1;if(ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=x.version,r.memory.textures++),Z){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let ve=0;ve<x.mipmaps.length;ve++)G.__webglFramebuffer[fe][ve]=i.createFramebuffer()}else G.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)G.__webglFramebuffer[fe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ae)for(let fe=0,ve=te.length;fe<ve;fe++){const qe=n.get(te[fe]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),r.memory.textures++)}if(w.samples>0&&Ve(w)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ve=te[fe];G.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const qe=s.convert(ve.format,ve.colorSpace),me=s.convert(ve.type),Pe=S(ve.internalFormat,qe,me,ve.colorSpace,w.isXRRenderTarget===!0),Me=Ke(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,Pe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),H(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)D(G.__webglFramebuffer[fe][ve],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else D(G.__webglFramebuffer[fe],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);h(x)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let fe=0,ve=te.length;fe<ve;fe++){const qe=te[fe],me=n.get(qe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Ae(i.TEXTURE_2D,qe),D(G.__webglFramebuffer,w,qe,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),h(qe)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),Ae(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)D(G.__webglFramebuffer[ve],w,x,i.COLOR_ATTACHMENT0,fe,ve);else D(G.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,fe,0);h(x)&&m(fe),t.unbindTexture()}w.depthBuffer&&pe(w)}function xe(w){const x=w.textures;for(let G=0,ee=x.length;G<ee;G++){const te=x[G];if(h(te)){const Z=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(te).__webglTexture;t.bindTexture(Z,ae),m(Z),t.unbindTexture()}}}const ue=[],R=[];function He(w){if(w.samples>0){if(Ve(w)===!1){const x=w.textures,G=w.width,ee=w.height;let te=i.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(w),fe=x.length>1;if(fe)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ve]);const qe=n.get(x[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,G,ee,0,0,G,ee,te,i.NEAREST),l===!0&&(ue.length=0,R.length=0,ue.push(i.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ue.push(Z),R.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ve]);const qe=n.get(x[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ke(w){return Math.min(a.maxSamples,w.samples)}function Ve(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ye(w){const x=r.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function $e(w,x){const G=w.colorSpace,ee=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==Nn&&G!==Cn&&(mt.getTransfer(G)===bt?(ee!==Ki||te!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=b,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=z,this.setTextureCube=se,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=D,this.useMultisampledRTT=Ve}function Am(i,e){function t(n,a=Cn){let s;const r=mt.getTransfer(a);if(n===fn)return i.UNSIGNED_BYTE;if(n===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return i.BYTE;if(n===du)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===sa)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Ji)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===mu)return i.RGB;if(n===Ki)return i.RGBA;if(n===gu)return i.LUMINANCE;if(n===vu)return i.LUMINANCE_ALPHA;if(n===Ua)return i.DEPTH_COMPONENT;if(n===Ha)return i.DEPTH_STENCIL;if(n===_u)return i.RED;if(n===Rl)return i.RED_INTEGER;if(n===yu)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===dr||n===pr||n===fr||n===mr)if(r===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===Xo||n===qo||n===Yo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===$o||n===Zo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jo||n===$o)return r===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zo)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jo||n===Qo||n===el||n===tl||n===il||n===nl||n===al||n===sl||n===rl||n===ol||n===ll||n===cl||n===hl||n===ul)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Jo)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qo)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===dl||n===pl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===gr)return r===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Su||n===fl||n===ml||n===gl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===gr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ga?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Tm extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xi extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pm={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const h=t.getJointPose(v,n),m=this._getHandJoint(c,v);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dm=`
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

}`;class Rm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new hi,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _t({vertexShader:Cm,fragmentShader:Dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new la(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Im extends ca{constructor(e,t){super();const n=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,f=null,g=null;const v=new Rm,h=t.getContextAttributes();let m=null,S=null;const y=[],M=[],L=new Xe;let A=null;const P=new Di;P.layers.enable(1),P.viewport=new Ft;const N=new Di;N.layers.enable(2),N.viewport=new Ft;const j=[P,N],_=new Tm;_.layers.enable(1),_.layers.enable(2);let b=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let D=y[C];return D===void 0&&(D=new xo,y[C]=D),D.getTargetRaySpace()},this.getControllerGrip=function(C){let D=y[C];return D===void 0&&(D=new xo,y[C]=D),D.getGripSpace()},this.getHand=function(C){let D=y[C];return D===void 0&&(D=new xo,y[C]=D),D.getHandSpace()};function V(C){const D=M.indexOf(C.inputSource);if(D===-1)return;const H=y[D];H!==void 0&&(H.update(C.inputSource,C.frame,c||r),H.dispatchEvent({type:C.type,data:C.inputSource}))}function X(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",Q);for(let C=0;C<y.length;C++){const D=M[C];D!==null&&(M[C]=null,y[C].disconnect(D))}b=null,K=null,v.reset(),e.setRenderTarget(m),f=null,p=null,d=null,a=null,S=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){o=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(C){c=C},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(C){if(a=C,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",X),a.addEventListener("inputsourceschange",Q),h.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),a.renderState.layers===void 0){const D={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(a,t,D),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Li(f.framebufferWidth,f.framebufferHeight,{format:Ki,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let D=null,H=null,$=null;h.depth&&($=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=h.stencil?Ha:Ua,H=h.stencil?Ga:sa);const pe={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:s};d=new XRWebGLBinding(a,t),p=d.createProjectionLayer(pe),a.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new Li(p.textureWidth,p.textureHeight,{format:Ki,type:fn,depthTexture:new Uu(p.textureWidth,p.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Ne.setContext(a),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(C){for(let D=0;D<C.removed.length;D++){const H=C.removed[D],$=M.indexOf(H);$>=0&&(M[$]=null,y[$].disconnect(H))}for(let D=0;D<C.added.length;D++){const H=C.added[D];let $=M.indexOf(H);if($===-1){for(let re=0;re<y.length;re++)if(re>=M.length){M.push(H),$=re;break}else if(M[re]===null){M[re]=H,$=re;break}if($===-1)break}const pe=y[$];pe&&pe.connect(H)}}const z=new I,se=new I;function W(C,D,H){z.setFromMatrixPosition(D.matrixWorld),se.setFromMatrixPosition(H.matrixWorld);const $=z.distanceTo(se),pe=D.projectionMatrix.elements,re=H.projectionMatrix.elements,oe=pe[14]/(pe[10]-1),xe=pe[14]/(pe[10]+1),ue=(pe[9]+1)/pe[5],R=(pe[9]-1)/pe[5],He=(pe[8]-1)/pe[0],Ke=(re[8]+1)/re[0],Ve=oe*He,ye=oe*Ke,$e=$/(-He+Ke),be=$e*-He;if(D.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(be),C.translateZ($e),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),pe[10]===-1)C.projectionMatrix.copy(D.projectionMatrix),C.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const w=oe+$e,x=xe+$e,G=Ve-be,ee=ye+($-be),te=ue*xe/x*w,Z=R*xe/x*w;C.projectionMatrix.makePerspective(G,ee,te,Z,w,x),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function ge(C,D){D===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(D.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(a===null)return;let D=C.near,H=C.far;v.texture!==null&&(v.depthNear>0&&(D=v.depthNear),v.depthFar>0&&(H=v.depthFar)),_.near=N.near=P.near=D,_.far=N.far=P.far=H,(b!==_.near||K!==_.far)&&(a.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,K=_.far);const $=C.parent,pe=_.cameras;ge(_,$);for(let re=0;re<pe.length;re++)ge(pe[re],$);pe.length===2?W(_,P,N):_.projectionMatrix.copy(P.projectionMatrix),he(C,_,$)};function he(C,D,H){H===null?C.matrix.copy(D.matrixWorld):(C.matrix.copy(H.matrixWorld),C.matrix.invert(),C.matrix.multiply(D.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(D.projectionMatrix),C.projectionMatrixInverse.copy(D.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=Ss*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(C){l=C,p!==null&&(p.fixedFoveation=C),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=C)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Ae=null;function ze(C,D){if(u=D.getViewerPose(c||r),g=D,u!==null){const H=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let $=!1;H.length!==_.cameras.length&&(_.cameras.length=0,$=!0);for(let re=0;re<H.length;re++){const oe=H[re];let xe=null;if(f!==null)xe=f.getViewport(oe);else{const R=d.getViewSubImage(p,oe);xe=R.viewport,re===0&&(e.setRenderTargetTextures(S,R.colorTexture,p.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(S))}let ue=j[re];ue===void 0&&(ue=new Di,ue.layers.enable(re),ue.viewport=new Ft,j[re]=ue),ue.matrix.fromArray(oe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(oe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(xe.x,xe.y,xe.width,xe.height),re===0&&(_.matrix.copy(ue.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),$===!0&&_.cameras.push(ue)}const pe=a.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const re=d.getDepthInformation(H[0]);re&&re.isValid&&re.texture&&v.init(e,re,a.renderState)}}for(let H=0;H<y.length;H++){const $=M[H],pe=y[H];$!==null&&pe!==void 0&&pe.update($,D,c||r)}Ae&&Ae(C,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}const Ne=new Lu;Ne.setAnimationLoop(ze),this.setAnimationLoop=function(C){Ae=C},this.dispose=function(){}}}const Yn=new mn,Lm=new It;function Um(i,e){function t(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,Cu(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function a(h,m,S,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(h,m):m.isMeshToonMaterial?(s(h,m),d(h,m)):m.isMeshPhongMaterial?(s(h,m),u(h,m)):m.isMeshStandardMaterial?(s(h,m),p(h,m),m.isMeshPhysicalMaterial&&f(h,m,M)):m.isMeshMatcapMaterial?(s(h,m),g(h,m)):m.isMeshDepthMaterial?s(h,m):m.isMeshDistanceMaterial?(s(h,m),v(h,m)):m.isMeshNormalMaterial?s(h,m):m.isLineBasicMaterial?(r(h,m),m.isLineDashedMaterial&&o(h,m)):m.isPointsMaterial?l(h,m,S,y):m.isSpriteMaterial?c(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,t(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===ci&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,t(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===ci&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,t(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,t(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,M=S.envMapRotation;y&&(h.envMap.value=y,Yn.copy(M),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.envMapRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(Yn)),h.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,h.aoMapTransform))}function r(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform))}function o(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function l(h,m,S,y){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*S,h.scale.value=y*.5,m.map&&(h.map.value=m.map,t(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function u(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function d(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function p(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function f(h,m,S){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ci&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=S.texture,h.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,m){m.matcap&&(h.matcap.value=m.matcap)}function v(h,m){const S=e.get(m).light;h.referencePosition.value.setFromMatrixPosition(S.matrixWorld),h.nearDistance.value=S.shadow.camera.near,h.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Nm(i,e,t,n){let a={},s={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function c(S,y){let M=a[S.id];M===void 0&&(g(S),M=u(S),a[S.id]=M,S.addEventListener("dispose",h));const L=y.program;n.updateUBOMapping(S,L);const A=e.render.frame;s[S.id]!==A&&(p(S),s[S.id]=A)}function u(S){const y=d();S.__bindingPointIndex=y;const M=i.createBuffer(),L=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function d(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const y=a[S.id],M=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,P=M.length;A<P;A++){const N=Array.isArray(M[A])?M[A]:[M[A]];for(let j=0,_=N.length;j<_;j++){const b=N[j];if(f(b,A,j,L)===!0){const K=b.__offset,V=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let Q=0;Q<V.length;Q++){const z=V[Q],se=v(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,K+X,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,X),X+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,M,L){const A=S.value,P=y+"_"+M;if(L[P]===void 0)return typeof A=="number"||typeof A=="boolean"?L[P]=A:L[P]=A.clone(),!0;{const N=L[P];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return L[P]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(S){const y=S.uniforms;let M=0;const L=16;for(let P=0,N=y.length;P<N;P++){const j=Array.isArray(y[P])?y[P]:[y[P]];for(let _=0,b=j.length;_<b;_++){const K=j[_],V=Array.isArray(K.value)?K.value:[K.value];for(let X=0,Q=V.length;X<Q;X++){const z=V[X],se=v(z),W=M%L,ge=W%se.boundary,he=W+ge;M+=ge,he!==0&&L-he<se.storage&&(M+=L-he),K.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=se.storage}}}const A=M%L;return A>0&&(M+=L-A),S.__size=M,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function h(S){const y=S.target;y.removeEventListener("dispose",h);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(a[y.id]),delete a[y.id],delete s[y.id]}function m(){for(const S in a)i.deleteBuffer(a[S]);r=[],a={},s={}}return{bind:l,update:c,dispose:m}}class _l{constructor(e={}){const{canvas:t=b0(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,h=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hi,this.toneMapping=In,this.toneMappingExposure=1;const y=this;let M=!1,L=0,A=0,P=null,N=-1,j=null;const _=new Ft,b=new Ft;let K=null;const V=new rt(0);let X=0,Q=t.width,z=t.height,se=1,W=null,ge=null;const he=new Ft(0,0,Q,z),Ae=new Ft(0,0,Q,z);let ze=!1;const Ne=new Iu;let C=!1,D=!1;const H=new It,$=new It,pe=new I,re=new Ft,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function ue(){return P===null?se:1}let R=n;function He(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tl}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Re,!1),R===null){const F="webgl2";if(R=He(F,E),R===null)throw He(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ke,Ve,ye,$e,be,w,x,G,ee,te,Z,ae,fe,ve,qe,me,Pe,Me,we,Le,Ze,Je,lt,k;function Ie(){Ke=new G2(R),Ke.init(),Je=new Am(R,Ke),Ve=new N2(R,Ke,e,Je),ye=new bm(R),Ve.reverseDepthBuffer&&ye.buffers.depth.setReversed(!0),$e=new W2(R),be=new lm,w=new wm(R,Ke,ye,be,Ve,Je,$e),x=new F2(y),G=new z2(y),ee=new $0(R),lt=new L2(R,ee),te=new H2(R,ee,$e,lt),Z=new X2(R,te,ee,$e),we=new K2(R,Ve,w),me=new k2(be),ae=new om(y,x,G,Ke,Ve,lt,me),fe=new Um(y,be),ve=new hm,qe=new gm(Ke),Me=new I2(y,x,G,ye,Z,p,l),Pe=new xm(y,Z,Ve),k=new Nm(R,$e,Ve,ye),Le=new U2(R,Ke,$e),Ze=new V2(R,Ke,$e),$e.programs=ae.programs,y.capabilities=Ve,y.extensions=Ke,y.properties=be,y.renderLists=ve,y.shadowMap=Pe,y.state=ye,y.info=$e}Ie();const ie=new Im(y,R);this.xr=ie,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(Q,z,!1))},this.getSize=function(E){return E.set(Q,z)},this.setSize=function(E,F,q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,z=F,t.width=Math.floor(E*se),t.height=Math.floor(F*se),q===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Q*se,z*se).floor()},this.setDrawingBufferSize=function(E,F,q){Q=E,z=F,se=q,t.width=Math.floor(E*q),t.height=Math.floor(F*q),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(he)},this.setViewport=function(E,F,q,Y){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,F,q,Y),ye.viewport(_.copy(he).multiplyScalar(se).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,F,q,Y){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,F,q,Y),ye.scissor(b.copy(Ae).multiplyScalar(se).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(E){ye.setScissorTest(ze=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(E=!0,F=!0,q=!0){let Y=0;if(E){let O=!1;if(P!==null){const Se=P.texture.format;O=Se===Ll||Se===Il||Se===Rl}if(O){const Se=P.texture.type,Ce=Se===fn||Se===sa||Se===ys||Se===Ga||Se===Cl||Se===Dl,ke=Me.getClearColor(),Fe=Me.getClearAlpha(),Ye=ke.r,je=ke.g,Be=ke.b;Ce?(f[0]=Ye,f[1]=je,f[2]=Be,f[3]=Fe,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=Ye,g[1]=je,g[2]=Be,g[3]=Fe,R.clearBufferiv(R.COLOR,0,g))}else Y|=R.COLOR_BUFFER_BIT}F&&(Y|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),ve.dispose(),qe.dispose(),be.dispose(),x.dispose(),G.dispose(),Z.dispose(),lt.dispose(),k.dispose(),ae.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ua),ie.removeEventListener("sessionend",As),en.stop()};function ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=$e.autoReset,F=Pe.enabled,q=Pe.autoUpdate,Y=Pe.needsUpdate,O=Pe.type;Ie(),$e.autoReset=E,Pe.enabled=F,Pe.autoUpdate=q,Pe.needsUpdate=Y,Pe.type=O}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ot(E){const F=E.target;F.removeEventListener("dispose",ot),Dt(F)}function Dt(E){Qt(E),be.remove(E)}function Qt(E){const F=be.get(E).programs;F!==void 0&&(F.forEach(function(q){ae.releaseProgram(q)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,q,Y,O,Se){F===null&&(F=oe);const Ce=O.isMesh&&O.matrixWorld.determinant()<0,ke=Ts(E,F,q,Y,O);ye.setMaterial(Y,Ce);let Fe=q.index,Ye=1;if(Y.wireframe===!0){if(Fe=te.getWireframeAttribute(q),Fe===void 0)return;Ye=2}const je=q.drawRange,Be=q.attributes.position;let ut=je.start*Ye,xt=(je.start+je.count)*Ye;Se!==null&&(ut=Math.max(ut,Se.start*Ye),xt=Math.min(xt,(Se.start+Se.count)*Ye)),Fe!==null?(ut=Math.max(ut,0),xt=Math.min(xt,Fe.count)):Be!=null&&(ut=Math.max(ut,0),xt=Math.min(xt,Be.count));const Et=xt-ut;if(Et<0||Et===1/0)return;lt.setup(O,Y,ke,q,Fe);let ai,ht=Le;if(Fe!==null&&(ai=ee.get(Fe),ht=Ze,ht.setIndex(ai)),O.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*ue()),ht.setMode(R.LINES)):ht.setMode(R.TRIANGLES);else if(O.isLine){let Ge=Y.linewidth;Ge===void 0&&(Ge=1),ye.setLineWidth(Ge*ue()),O.isLineSegments?ht.setMode(R.LINES):O.isLineLoop?ht.setMode(R.LINE_LOOP):ht.setMode(R.LINE_STRIP)}else O.isPoints?ht.setMode(R.POINTS):O.isSprite&&ht.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ge=O._multiDrawStarts,zt=O._multiDrawCounts,dt=O._multiDrawCount,U=Fe?ee.get(Fe).bytesPerElement:1,B=be.get(Y).currentProgram.getUniforms();for(let de=0;de<dt;de++)B.setValue(R,"_gl_DrawID",de),ht.render(Ge[de]/U,zt[de])}else if(O.isInstancedMesh)ht.renderInstances(ut,Et,O.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zt=Math.min(q.instanceCount,Ge);ht.renderInstances(ut,Et,zt)}else ht.render(ut,Et)};function ct(E,F,q){E.transparent===!0&&E.side===Vi&&E.forceSinglePass===!1?(E.side=ci,E.needsUpdate=!0,Bn(E,F,q),E.side=Ln,E.needsUpdate=!0,Bn(E,F,q),E.side=Vi):Bn(E,F,q)}this.compile=function(E,F,q=null){q===null&&(q=E),h=qe.get(q),h.init(F),S.push(h),q.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),E!==q&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const Y=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const Se=O.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const ke=Se[Ce];ct(ke,q,O),Y.add(ke)}else ct(Se,q,O),Y.add(Se)}),S.pop(),h=null,Y},this.compileAsync=function(E,F,q=null){const Y=this.compile(E,F,q);return new Promise(O=>{function Se(){if(Y.forEach(function(Ce){be.get(Ce).currentProgram.isReady()&&Y.delete(Ce)}),Y.size===0){O(E);return}setTimeout(Se,10)}Ke.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Kt=null;function yi(E){Kt&&Kt(E)}function ua(){en.stop()}function As(){en.start()}const en=new Lu;en.setAnimationLoop(yi),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(E){Kt=E,ie.setAnimationLoop(E),E===null?en.stop():en.start()},ie.addEventListener("sessionstart",ua),ie.addEventListener("sessionend",As),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,F,P),h=qe.get(E,S.length),h.init(F),S.push(h),$.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ne.setFromProjectionMatrix($),D=this.localClippingEnabled,C=me.init(this.clippingPlanes,D),v=ve.get(E,m.length),v.init(),m.push(v),ie.enabled===!0&&ie.isPresenting===!0){const Se=y.xr.getDepthSensingMesh();Se!==null&&Fn(Se,F,-1/0,y.sortObjects)}Fn(E,F,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(W,ge),xe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,xe&&Me.addToRenderList(v,E),this.info.render.frame++,C===!0&&me.beginShadows();const q=h.state.shadowsArray;Pe.render(q,E,F),C===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,O=v.transmissive;if(h.setupLights(),F.isArrayCamera){const Se=F.cameras;if(O.length>0)for(let Ce=0,ke=Se.length;Ce<ke;Ce++){const Fe=Se[Ce];da(Y,O,E,Fe)}xe&&Me.render(E);for(let Ce=0,ke=Se.length;Ce<ke;Ce++){const Fe=Se[Ce];Ja(v,E,Fe,Fe.viewport)}}else O.length>0&&da(Y,O,E,F),xe&&Me.render(E),Ja(v,E,F);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(y,E,F),lt.resetDefaultState(),N=-1,j=null,S.pop(),S.length>0?(h=S[S.length-1],C===!0&&me.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Fn(E,F,q,Y){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ne.intersectsSprite(E)){Y&&re.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const Ce=Z.update(E),ke=E.material;ke.visible&&v.push(E,Ce,ke,q,re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ne.intersectsObject(E))){const Ce=Z.update(E),ke=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),re.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),re.copy(Ce.boundingSphere.center)),re.applyMatrix4(E.matrixWorld).applyMatrix4($)),Array.isArray(ke)){const Fe=Ce.groups;for(let Ye=0,je=Fe.length;Ye<je;Ye++){const Be=Fe[Ye],ut=ke[Be.materialIndex];ut&&ut.visible&&v.push(E,Ce,ut,q,re.z,Be)}}else ke.visible&&v.push(E,Ce,ke,q,re.z,null)}}const Se=E.children;for(let Ce=0,ke=Se.length;Ce<ke;Ce++)Fn(Se[Ce],F,q,Y)}function Ja(E,F,q,Y){const O=E.opaque,Se=E.transmissive,Ce=E.transparent;h.setupLightsView(q),C===!0&&me.setGlobalState(y.clippingPlanes,q),Y&&ye.viewport(_.copy(Y)),O.length>0&&On(O,F,q),Se.length>0&&On(Se,F,q),Ce.length>0&&On(Ce,F,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function da(E,F,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Li(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Ji:fn,minFilter:na,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const Se=h.state.transmissionRenderTarget[Y.id],Ce=Y.viewport||_;Se.setSize(Ce.z,Ce.w);const ke=y.getRenderTarget();y.setRenderTarget(Se),y.getClearColor(V),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),xe&&Me.render(q);const Fe=y.toneMapping;y.toneMapping=In;const Ye=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),C===!0&&me.setGlobalState(y.clippingPlanes,Y),On(E,q,Y),w.updateMultisampleRenderTarget(Se),w.updateRenderTargetMipmap(Se),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Be=0,ut=F.length;Be<ut;Be++){const xt=F[Be],Et=xt.object,ai=xt.geometry,ht=xt.material,Ge=xt.group;if(ht.side===Vi&&Et.layers.test(Y.layers)){const zt=ht.side;ht.side=ci,ht.needsUpdate=!0,Qa(Et,q,Y,ai,ht,Ge),ht.side=zt,ht.needsUpdate=!0,je=!0}}je===!0&&(w.updateMultisampleRenderTarget(Se),w.updateRenderTargetMipmap(Se))}y.setRenderTarget(ke),y.setClearColor(V,X),Ye!==void 0&&(Y.viewport=Ye),y.toneMapping=Fe}function On(E,F,q){const Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,Se=E.length;O<Se;O++){const Ce=E[O],ke=Ce.object,Fe=Ce.geometry,Ye=Y===null?Ce.material:Y,je=Ce.group;ke.layers.test(q.layers)&&Qa(ke,F,q,Fe,Ye,je)}}function Qa(E,F,q,Y,O,Se){E.onBeforeRender(y,F,q,Y,O,Se),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(y,F,q,Y,E,Se),O.transparent===!0&&O.side===Vi&&O.forceSinglePass===!1?(O.side=ci,O.needsUpdate=!0,y.renderBufferDirect(q,F,Y,O,E,Se),O.side=Ln,O.needsUpdate=!0,y.renderBufferDirect(q,F,Y,O,E,Se),O.side=Vi):y.renderBufferDirect(q,F,Y,O,E,Se),E.onAfterRender(y,F,q,Y,O,Se)}function Bn(E,F,q){F.isScene!==!0&&(F=oe);const Y=be.get(E),O=h.state.lights,Se=h.state.shadowsArray,Ce=O.state.version,ke=ae.getParameters(E,O.state,Se,F,q),Fe=ae.getProgramCacheKey(ke);let Ye=Y.programs;Y.environment=E.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(E.isMeshStandardMaterial?G:x).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",ot),Ye=new Map,Y.programs=Ye);let je=Ye.get(Fe);if(je!==void 0){if(Y.currentProgram===je&&Y.lightsStateVersion===Ce)return zn(E,ke),je}else ke.uniforms=ae.getUniforms(E),E.onBeforeCompile(ke,y),je=ae.acquireProgram(ke,Fe),Ye.set(Fe,je),Y.uniforms=ke.uniforms;const Be=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=me.uniform),zn(E,ke),Y.needsLights=gn(E),Y.lightsStateVersion=Ce,Y.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=je,Y.uniformsList=null,je}function es(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=_r.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function zn(E,F){const q=be.get(E);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Ts(E,F,q,Y,O){F.isScene!==!0&&(F=oe),w.resetTextureUnits();const Se=F.fog,Ce=Y.isMeshStandardMaterial?F.environment:null,ke=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Nn,Fe=(Y.isMeshStandardMaterial?G:x).get(Y.envMap||Ce),Ye=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!q.morphAttributes.position,ut=!!q.morphAttributes.normal,xt=!!q.morphAttributes.color;let Et=In;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Et=y.toneMapping);const ai=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=ai!==void 0?ai.length:0,Ge=be.get(Y),zt=h.state.lights;if(C===!0&&(D===!0||E!==j)){const ft=E===j&&Y.id===N;me.setState(Y,E,ft)}let dt=!1;Y.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==zt.state.version||Ge.outputColorSpace!==ke||O.isBatchedMesh&&Ge.batching===!1||!O.isBatchedMesh&&Ge.batching===!0||O.isBatchedMesh&&Ge.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ge.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ge.instancing===!1||!O.isInstancedMesh&&Ge.instancing===!0||O.isSkinnedMesh&&Ge.skinning===!1||!O.isSkinnedMesh&&Ge.skinning===!0||O.isInstancedMesh&&Ge.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ge.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ge.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ge.instancingMorph===!1&&O.morphTexture!==null||Ge.envMap!==Fe||Y.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==me.numPlanes||Ge.numIntersection!==me.numIntersection)||Ge.vertexAlphas!==Ye||Ge.vertexTangents!==je||Ge.morphTargets!==Be||Ge.morphNormals!==ut||Ge.morphColors!==xt||Ge.toneMapping!==Et||Ge.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Ge.__version=Y.version);let U=Ge.currentProgram;dt===!0&&(U=Bn(Y,F,O));let B=!1,de=!1,_e=!1;const Ee=U.getUniforms(),Ue=Ge.uniforms;if(ye.useProgram(U.program)&&(B=!0,de=!0,_e=!0),Y.id!==N&&(N=Y.id,de=!0),B||j!==E){Ve.reverseDepthBuffer?(H.copy(E.projectionMatrix),w0(H),A0(H),Ee.setValue(R,"projectionMatrix",H)):Ee.setValue(R,"projectionMatrix",E.projectionMatrix),Ee.setValue(R,"viewMatrix",E.matrixWorldInverse);const ft=Ee.map.cameraPosition;ft!==void 0&&ft.setValue(R,pe.setFromMatrixPosition(E.matrixWorld)),Ve.logarithmicDepthBuffer&&Ee.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,de=!0,_e=!0)}if(O.isSkinnedMesh){Ee.setOptional(R,O,"bindMatrix"),Ee.setOptional(R,O,"bindMatrixInverse");const ft=O.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Ee.setValue(R,"boneTexture",ft.boneTexture,w))}O.isBatchedMesh&&(Ee.setOptional(R,O,"batchingTexture"),Ee.setValue(R,"batchingTexture",O._matricesTexture,w),Ee.setOptional(R,O,"batchingIdTexture"),Ee.setValue(R,"batchingIdTexture",O._indirectTexture,w),Ee.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&Ee.setValue(R,"batchingColorTexture",O._colorsTexture,w));const at=q.morphAttributes;if((at.position!==void 0||at.normal!==void 0||at.color!==void 0)&&we.update(O,q,U),(de||Ge.receiveShadow!==O.receiveShadow)&&(Ge.receiveShadow=O.receiveShadow,Ee.setValue(R,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ue.envMap.value=Fe,Ue.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Ue.envMapIntensity.value=F.environmentIntensity),de&&(Ee.setValue(R,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&Br(Ue,_e),Se&&Y.fog===!0&&fe.refreshFogUniforms(Ue,Se),fe.refreshMaterialUniforms(Ue,Y,se,z,h.state.transmissionRenderTarget[E.id]),_r.upload(R,es(Ge),Ue,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(_r.upload(R,es(Ge),Ue,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(R,"center",O.center),Ee.setValue(R,"modelViewMatrix",O.modelViewMatrix),Ee.setValue(R,"normalMatrix",O.normalMatrix),Ee.setValue(R,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ft=Y.uniformsGroups;for(let Zt=0,Mt=ft.length;Zt<Mt;Zt++){const pt=ft[Zt];k.update(pt,U),k.bind(pt,U)}}return U}function Br(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function gn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,q){be.get(E.texture).__webglTexture=F,be.get(E.depthTexture).__webglTexture=q;const Y=be.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const q=be.get(E);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,q=0){P=E,L=F,A=q;let Y=!0,O=null,Se=!1,Ce=!1;if(E){const Fe=be.get(E);if(Fe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(R.FRAMEBUFFER,null),Y=!1;else if(Fe.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(Fe.__hasExternalTextures)w.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Be=E.depthTexture;if(Fe.__boundDepthTexture!==Be){if(Be!==null&&be.has(Be)&&(E.width!==Be.image.width||E.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ce=!0);const je=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[F])?O=je[F][q]:O=je[F],Se=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?O=be.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?O=je[q]:O=je,_.copy(E.viewport),b.copy(E.scissor),K=E.scissorTest}else _.copy(he).multiplyScalar(se).floor(),b.copy(Ae).multiplyScalar(se).floor(),K=ze;if(ye.bindFramebuffer(R.FRAMEBUFFER,O)&&Y&&ye.drawBuffers(E,O),ye.viewport(_),ye.scissor(b),ye.setScissorTest(K),Se){const Fe=be.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Fe.__webglTexture,q)}else if(Ce){const Fe=be.get(E.texture),Ye=F||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Fe.__webglTexture,q||0,Ye)}N=-1},this.readRenderTargetPixels=function(E,F,q,Y,O,Se,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(ke=ke[Ce]),ke){ye.bindFramebuffer(R.FRAMEBUFFER,ke);try{const Fe=E.texture,Ye=Fe.format,je=Fe.type;if(!Ve.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-Y&&q>=0&&q<=E.height-O&&R.readPixels(F,q,Y,O,Je.convert(Ye),Je.convert(je),Se)}finally{const Fe=P!==null?be.get(P).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,F,q,Y,O,Se,Ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(ke=ke[Ce]),ke){const Fe=E.texture,Ye=Fe.format,je=Fe.type;if(!Ve.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-Y&&q>=0&&q<=E.height-O){ye.bindFramebuffer(R.FRAMEBUFFER,ke);const Be=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Be),R.bufferData(R.PIXEL_PACK_BUFFER,Se.byteLength,R.STREAM_READ),R.readPixels(F,q,Y,O,Je.convert(Ye),Je.convert(je),0);const ut=P!==null?be.get(P).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,ut);const xt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await E0(R,xt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Be),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Se),R.deleteBuffer(Be),R.deleteSync(xt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,q=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-q),O=Math.floor(E.image.width*Y),Se=Math.floor(E.image.height*Y),Ce=F!==null?F.x:0,ke=F!==null?F.y:0;w.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,Ce,ke,O,Se),ye.unbindTexture()},this.copyTextureToTexture=function(E,F,q=null,Y=null,O=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,q=null);let Se,Ce,ke,Fe,Ye,je;q!==null?(Se=q.max.x-q.min.x,Ce=q.max.y-q.min.y,ke=q.min.x,Fe=q.min.y):(Se=E.image.width,Ce=E.image.height,ke=0,Fe=0),Y!==null?(Ye=Y.x,je=Y.y):(Ye=0,je=0);const Be=Je.convert(F.format),ut=Je.convert(F.type);w.setTexture2D(F,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const xt=R.getParameter(R.UNPACK_ROW_LENGTH),Et=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ai=R.getParameter(R.UNPACK_SKIP_PIXELS),ht=R.getParameter(R.UNPACK_SKIP_ROWS),Ge=R.getParameter(R.UNPACK_SKIP_IMAGES),zt=E.isCompressedTexture?E.mipmaps[O]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,zt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,zt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ke),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fe),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,O,Ye,je,Se,Ce,Be,ut,zt.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,O,Ye,je,zt.width,zt.height,Be,zt.data):R.texSubImage2D(R.TEXTURE_2D,O,Ye,je,Se,Ce,Be,ut,zt),R.pixelStorei(R.UNPACK_ROW_LENGTH,xt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Et),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ai),R.pixelStorei(R.UNPACK_SKIP_ROWS,ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ge),O===0&&F.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(E,F,q=null,Y=null,O=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0);let Se,Ce,ke,Fe,Ye,je,Be,ut,xt;const Et=E.isCompressedTexture?E.mipmaps[O]:E.image;q!==null?(Se=q.max.x-q.min.x,Ce=q.max.y-q.min.y,ke=q.max.z-q.min.z,Fe=q.min.x,Ye=q.min.y,je=q.min.z):(Se=Et.width,Ce=Et.height,ke=Et.depth,Fe=0,Ye=0,je=0),Y!==null?(Be=Y.x,ut=Y.y,xt=Y.z):(Be=0,ut=0,xt=0);const ai=Je.convert(F.format),ht=Je.convert(F.type);let Ge;if(F.isData3DTexture)w.setTexture3D(F,0),Ge=R.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)w.setTexture2DArray(F,0),Ge=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const zt=R.getParameter(R.UNPACK_ROW_LENGTH),dt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),U=R.getParameter(R.UNPACK_SKIP_PIXELS),B=R.getParameter(R.UNPACK_SKIP_ROWS),de=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Et.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Et.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,je),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ge,O,Be,ut,xt,Se,Ce,ke,ai,ht,Et.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(Ge,O,Be,ut,xt,Se,Ce,ke,ai,Et.data):R.texSubImage3D(Ge,O,Be,ut,xt,Se,Ce,ke,ai,ht,Et),R.pixelStorei(R.UNPACK_ROW_LENGTH,zt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,U),R.pixelStorei(R.UNPACK_SKIP_ROWS,B),R.pixelStorei(R.UNPACK_SKIP_IMAGES,de),O===0&&F.generateMipmaps&&R.generateMipmap(Ge),ye.unbindTexture()},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){L=0,A=0,P=null,ye.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ul?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===Lr?"display-p3":"srgb"}}class yl extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kr extends ha{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wr=new I,Ar=new I,th=new It,cs=new Ur,Qs=new ws,Mo=new I,ih=new I;class bs extends ui{constructor(e=new Tt,t=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,s=t.count;a<s;a++)wr.fromBufferAttribute(t,a-1),Ar.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=wr.distanceTo(Ar);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(a),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;th.copy(a).invert(),cs.copy(e.ray).applyMatrix4(th);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let v=f,h=g-1;v<h;v+=c){const m=u.getX(v),S=u.getX(v+1),y=er(this,e,cs,l,m,S);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(g-1),h=u.getX(f),m=er(this,e,cs,l,v,h);m&&t.push(m)}}else{const f=Math.max(0,r.start),g=Math.min(p.count,r.start+r.count);for(let v=f,h=g-1;v<h;v+=c){const m=er(this,e,cs,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=er(this,e,cs,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function er(i,e,t,n,a,s){const r=i.geometry.attributes.position;if(wr.fromBufferAttribute(r,a),Ar.fromBufferAttribute(r,s),t.distanceSqToSegment(wr,Ar,Mo,ih)>n)return;Mo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Mo);if(!(l<e.near||l>e.far))return{distance:l,point:ih.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const nh=new I,ah=new I;class Es extends bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,s=t.count;a<s;a+=2)nh.fromBufferAttribute(t,a),ah.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+nh.distanceTo(ah);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class km extends bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fm extends ha{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sh=new It,Sl=new Ur,tr=new ws,ir=new I;class kn extends ui{constructor(e=new Tt,t=new Fm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(a),tr.radius+=s,e.ray.intersectsSphere(tr)===!1)return;sh.copy(a).invert(),Sl.copy(e.ray).applyMatrix4(sh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=p,v=f;g<v;g++){const h=c.getX(g);ir.fromBufferAttribute(d,h),rh(ir,h,l,a,e,t,this)}}else{const p=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=p,v=f;g<v;g++)ir.fromBufferAttribute(d,g),rh(ir,g,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rh(i,e,t,n,a,s,r){const o=Sl.distanceSqToPoint(i);if(o<t){const l=new I;Sl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}const nr=new I,ar=new I,bo=new I,sr=new Ri;class Om extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),s=Math.cos(Na*t),r=e.getIndex(),o=e.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),p={},f=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:h,c:m}=sr;if(v.fromBufferAttribute(o,c[0]),h.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),sr.getNormal(bo),d[0]=`${Math.round(v.x*a)},${Math.round(v.y*a)},${Math.round(v.z*a)}`,d[1]=`${Math.round(h.x*a)},${Math.round(h.y*a)},${Math.round(h.z*a)}`,d[2]=`${Math.round(m.x*a)},${Math.round(m.y*a)},${Math.round(m.z*a)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){const y=(S+1)%3,M=d[S],L=d[y],A=sr[u[S]],P=sr[u[y]],N=`${M}_${L}`,j=`${L}_${M}`;j in p&&p[j]?(bo.dot(p[j].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(P.x,P.y,P.z)),p[j]=null):N in p||(p[N]={index0:c[S],index1:c[y],normal:bo.clone()})}}for(const g in p)if(p[g]){const{index0:v,index1:h}=p[g];nr.fromBufferAttribute(o,v),ar.fromBufferAttribute(o,h),f.push(nr.x,nr.y,nr.z),f.push(ar.x,ar.y,ar.z)}this.setAttribute("position",new Qe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fl extends Tt{constructor(e=.5,t=1,n=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:a,thetaStart:s,thetaLength:r},n=Math.max(3,n),a=Math.max(1,a);const o=[],l=[],c=[],u=[];let d=e;const p=(t-e)/a,f=new I,g=new Xe;for(let v=0;v<=a;v++){for(let h=0;h<=n;h++){const m=s+h/n*r;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=p}for(let v=0;v<a;v++){const h=v*(n+1);for(let m=0;m<n;m++){const S=m+h,y=S,M=S+n+1,L=S+n+2,A=S+1;o.push(y,M,A),o.push(M,L,A)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wa extends Tt{constructor(e=1,t=32,n=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const u=[],d=new I,p=new I,f=[],g=[],v=[],h=[];for(let m=0;m<=n;m++){const S=[],y=m/n;let M=0;m===0&&r===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){const A=L/t;d.x=-e*Math.cos(a+A*s)*Math.sin(r+y*o),d.y=e*Math.cos(r+y*o),d.z=e*Math.sin(a+A*s)*Math.sin(r+y*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),h.push(A+M,1-y),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const y=u[m][S+1],M=u[m][S],L=u[m+1][S],A=u[m+1][S+1];(m!==0||r>0)&&f.push(y,M,A),(m!==n-1||l<Math.PI)&&f.push(M,L,A)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bm extends _t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const oh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class zm{constructor(e,t,n){const a=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&a.onStart!==void 0&&a.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,a.onProgress!==void 0&&a.onProgress(u,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Gm=new zm;class Ol{constructor(e){this.manager=e!==void 0?e:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,s){n.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";class Hm extends Ol{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=oh.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=xs("img");function l(){u(),oh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),a&&a(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Vm extends Ol{constructor(e){super(e)}load(e,t,n,a){const s=new hi,r=new Hm(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,a),s}}class Wm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lh(){return performance.now()}class ch{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ni(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Km extends ca{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);const hh={type:"change"},Bl={type:"start"},Bu={type:"end"},rr=new Ur,uh=new Pn,Xm=Math.cos(70*vs.DEG2RAD),Ht=new I,fi=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eo=1e-6;class qm extends Km{constructor(e,t=null){super(e,t),this.state=St.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:aa.ROTATE,MIDDLE:aa.DOLLY,RIGHT:aa.PAN},this.touches={ONE:Ra.ROTATE,TWO:Ra.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ra,this._lastTargetPosition=new I,this._quat=new ra().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ch,this._sphericalDelta=new ch,this._scale=1,this._panOffset=new I,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new I,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jm.bind(this),this._onPointerDown=Ym.bind(this),this._onPointerUp=$m.bind(this),this._onContextMenu=n4.bind(this),this._onMouseWheel=Qm.bind(this),this._onKeyDown=e4.bind(this),this._onTouchStart=t4.bind(this),this._onTouchMove=i4.bind(this),this._onMouseDown=Zm.bind(this),this._onMouseMove=Jm.bind(this),this._interceptControlDown=a4.bind(this),this._interceptControlUp=s4.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hh),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(n)&&isFinite(a)&&(n<-Math.PI?n+=fi:n>Math.PI&&(n-=fi),a<-Math.PI?a+=fi:a>Math.PI&&(a-=fi),n<=a?this._spherical.theta=Math.max(n,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+a)/2?Math.max(n,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Ht.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(rr.origin.copy(this.object.position),rr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rr.direction))<Xm?this.object.lookAt(this.target):(uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),rr.intersectPlane(uh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Eo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eo||this._lastTargetPosition.distanceToSquared(this.target)>Eo?(this.dispatchEvent(hh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fi/60*this.autoRotateSpeed*e:fi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Ht.copy(a).sub(this.target);let s=Ht.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),a=e-n.left,s=t-n.top,r=n.width,o=n.height;this._mouse.x=a/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/t.clientHeight),this._rotateUp(fi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(fi*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-fi*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(fi*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-fi*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(n,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(n,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,s=Math.sqrt(n*n+a*a);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(a,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/t.clientHeight),this._rotateUp(fi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(n,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,s=Math.sqrt(n*n+a*a);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ym(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function jm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $m(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bu),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Zm(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case aa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=St.DOLLY;break;case aa.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}break;case aa.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(Bl)}function Jm(i){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Qm(i){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(i.preventDefault(),this.dispatchEvent(Bl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Bu))}function e4(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function t4(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ra.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=St.TOUCH_ROTATE;break;case Ra.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Ra.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=St.TOUCH_DOLLY_PAN;break;case Ra.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(Bl)}function i4(i){switch(this._trackPointer(i),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=St.NONE}}function n4(i){this.enabled!==!1&&i.preventDefault()}function a4(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s4(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Za{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const r4=new Er(-1,1,1,-1,0,1);class o4 extends Tt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const l4=new o4;class zl{constructor(e){this._mesh=new Bt(l4,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,r4)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class c4 extends Za{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ms.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new zl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class dh extends Za{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const a=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.buffers.stencil.setFunc(a.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(a.EQUAL,1,4294967295),s.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.buffers.stencil.setLocked(!0)}}class h4 extends Za{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class u4{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Xe);this._width=n.width,this._height=n.height,t=new Li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ji}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new c4(zu),this.copyPass.material.blending=pn,this.clock=new Wm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let a=0,s=this.passes.length;a<s;a++){const r=this.passes[a];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}dh!==void 0&&(r instanceof dh?n=!0:r instanceof h4&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(n,a),this.renderTarget2.setSize(n,a);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class d4 extends Za{constructor(e,t,n=null,a=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,n){const a=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=a}}const p4={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ka extends Za{constructor(e,t,n,a){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=a,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Li(s,r,{type:Ji}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new Li(s,r,{type:Ji});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const f=new Li(s,r,{type:Ji});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const o=p4;this.highPassUniforms=Ms.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Xe(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=zu;this.copyUniforms=Ms.clone(u.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ui,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new oa,this.fsQuad=new zl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(n,a);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,a),this.renderTargetsVertical[s].setSize(n,a),this.separableBlurMaterials[s].uniforms.invSize.value=new Xe(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2)}render(e,t,n,a,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ka.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ka.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new _t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ka.BlurDirectionX=new Xe(1,0);Ka.BlurDirectionY=new Xe(0,1);const f4={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class m4 extends Za{constructor(){super();const e=f4;this.uniforms=Ms.clone(e.uniforms),this.material=new Bm({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new zl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===au?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===su?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ou?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const _i=3,g4=6e3,ph=5e-5,fh=420,or=500,vi=1024,$t=8192,Rn=.0065,v4=_i/206264.806,Gu=v4/Rn,_4=Math.sqrt(Gu),Xa={bg:329482,gridStrong:4157331,orbit:10467788,planet:13030621},Hu=23.4392811;class y4{constructor(e,t){We(this,"positions");We(this,"count");We(this,"nodes");this.positions=e,this.count=t,this.nodes=new Int32Array(t);for(let n=0;n<t;n++)this.nodes[n]=n;this.build(0,t,0)}build(e,t,n){if(t-e<=1)return;const a=n%3,s=e+t>>>1;this.quickselect(e,t,s,a),this.build(e+1,s+1,n+1),this.build(s+1,t,n+1);const r=this.nodes[s];for(let o=s;o>e;o--)this.nodes[o]=this.nodes[o-1];this.nodes[e]=r}quickselect(e,t,n,a){for(;t-e>1;){const s=this.coord(this.nodes[e+t>>>1],a);let r=e,o=t-1;for(;r<=o;){for(;this.coord(this.nodes[r],a)<s;)r++;for(;this.coord(this.nodes[o],a)>s;)o--;if(r<=o){const l=this.nodes[r];this.nodes[r]=this.nodes[o],this.nodes[o]=l,r++,o--}}if(n<=o)t=o+1;else if(n>=r)e=r;else return}}coord(e,t){return this.positions[e*3+t]}nearest(e,t=1){const n=e[0],a=e[1],s=e[2],r=new Int32Array(t),o=new Float64Array(t);let l=0;const c=(f,g)=>{if(l<t){let v=l++;for(r[v]=f,o[v]=g;v>0;){const h=v-1>>>1;if(o[h]<o[v]){const m=r[h],S=o[h];r[h]=r[v],o[h]=o[v],r[v]=m,o[v]=S,v=h}else break}}else if(g<o[0]){r[0]=f,o[0]=g;let v=0;for(;;){const h=2*v+1,m=h+1;let S=v;if(h<l&&o[h]>o[S]&&(S=h),m<l&&o[m]>o[S]&&(S=m),S===v)break;const y=r[S],M=o[S];r[S]=r[v],o[S]=o[v],r[v]=y,o[v]=M,v=S}}},u=()=>l<t?1/0:o[0],d=(f,g,v)=>{if(g-f<=0)return;const h=this.nodes[f],m=this.positions[h*3]-n,S=this.positions[h*3+1]-a,y=this.positions[h*3+2]-s;if(c(h,m*m+S*S+y*y),g-f===1)return;const M=v%3,L=f+1+g>>>1,A=this.coord(h,M),N=(M===0?n:M===1?a:s)-A,j=N<=0?[f+1,L+1]:[L+1,g],_=N<=0?[L+1,g]:[f+1,L+1];d(j[0],j[1],v+1),N*N<u()&&d(_[0],_[1],v+1)};d(0,this.count,0);const p=[];for(let f=0;f<l;f++)p.push({i:r[f],d:o[f]});return p.sort((f,g)=>f.d-g.d),p.map(f=>f.i)}withinRadius(e,t){const n=t*t,a=[],s=(r,o,l)=>{if(o-r<=0)return;const c=this.nodes[r],u=this.positions[c*3]-e[0],d=this.positions[c*3+1]-e[1],p=this.positions[c*3+2]-e[2];if(u*u+d*d+p*p<=n&&a.push(c),o-r===1)return;const f=l%3,g=r+1+o>>>1,v=this.coord(c,f),m=e[f]-v;m<=t&&s(r+1,g+1,l+1),m>=-t&&s(g+1,o,l+1)};return s(0,this.count,0),a}get size(){return this.count}}const mh=1314083905,gh=2,S4=4.67,x4=.82;function Fr(i,e,t,n=vi){const a=Math.round(i*n)/n,s=Math.round(e*n)/n,r=Math.round(t*n)/n;return{hx:a,hy:s,hz:r,lx:i-a,ly:e-s,lz:t-r}}function M4(i){const e=new DataView(i),t=e.getUint32(0,!0),n=e.getUint32(4,!0);if(t!==mh)throw new Error(`stars-near.bin: bad magic 0x${t.toString(16)} (expected 0x${mh.toString(16)}); re-run export_starmap.py.`);if(n!==gh)throw new Error(`stars-near.bin: unsupported version ${n} (loader supports ${gh}).`);const a=e.getUint32(8,!0),s=e.getFloat32(12,!0),r=e.getFloat32(16,!0),o=e.getFloat32(20,!0),l=e.getFloat32(24,!0),c=e.getFloat32(28,!0),u=32,d=new Int16Array(i,u,a*4),p=new Uint8Array(i,u,a*8),f=new Float32Array(a*3),g=new Float32Array(a*3),v=new Float32Array(a*3),h=new Float32Array(a),m=new Float32Array(a),S=s/32767*_i,y=o>r?(o-r)/255:0,M=c>l?(c-l)/255:0;for(let L=0;L<a;L++){const A=L*4,P=L*8,N=d[A]*S,j=d[A+1]*S,_=d[A+2]*S;f[L*3]=N,f[L*3+1]=j,f[L*3+2]=_;const b=Fr(N,j,_,$t);g[L*3]=b.hx,g[L*3+1]=b.hy,g[L*3+2]=b.hz,v[L*3]=b.lx,v[L*3+1]=b.ly,v[L*3+2]=b.lz,h[L]=r+p[P+6]*y,m[L]=l+p[P+7]*M}return{positions:f,positionsHi:g,positionsLo:v,mag:h,ci:m,count:a}}const Gl=`
	// Three.js's ShaderMaterial auto-declares attribute vec3 position
	// (and the renderer also uses geometry.attributes.position.count for
	// the draw count). We piggy-back the hi half of the RTE split onto
	// that standard slot; the lo half is a custom attribute alongside.
	attribute vec3 aPosLo;
	uniform vec3 uCamHi;
	uniform vec3 uCamLo;
	vec3 rtePosition() {
		// (position - uCamHi) cancels exactly in f32 when star and camera
		// share an RTE_TILE tile, and is an exact multiple-of-tile difference
		// otherwise; the small (aPosLo - uCamLo) term carries the sub-tile
		// offset. Sum is camera-relative position in world axes.
		return (position - uCamHi) + (aPosLo - uCamLo);
	}
	vec4 rteMvPosition() {
		// viewMatrix's rotation only — translation = -camPos is now baked
		// into the rtePosition() output, so applying the full viewMatrix
		// would double-subtract the camera.
		return vec4(mat3(viewMatrix) * rtePosition(), 1.0);
	}
`,Vu=`
	attribute float aMag;
	attribute float aCI;
	attribute float aHidden;   // 1 = suppress this point (focused star, drawn f64 by its system group instead)
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
		// Suppressed points (the focused system's host star, which its system
		// group draws f64-exact to avoid RTE jitter) are culled outright.
		if (aHidden > 0.5) {
			gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
			gl_PointSize = 0.0;
			return;
		}
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
		// 110 px close-zoom ceiling (was 70). At "planetary" zoom inside a
		// system, bright neighbour stars clamp here — bumping the ceiling
		// lets the host read as a proper disc instead of a stamp.
		gl_PointSize = clamp(gl_PointSize, 0.0, 110.0);

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
`,Wu=`
	precision mediump float;
	varying float vAlpha;
	varying vec3 vColor;
	uniform float uIntensity;

	void main() {
		vec2 uv = gl_PointCoord - 0.5;
		float d = length(uv);
		if (d > 0.5) discard;
		float core = smoothstep(0.5, 0.0, d);
		// Softer falloff (pow 8 vs the previous 13.4) widens the visible
		// FWHM so stars read as small discs rather than sharp specks.
		// The (glow + 0.22*core) term lifts the surrounding halo so the
		// disc has a softer edge.
		float glow = pow(core, 13.4);
		float a = vAlpha * glow * uIntensity;
		gl_FragColor = vec4(vColor * (glow + 0.18 * core), a);
	}
`,b4=Vu.replace("vec4 mvPosition = rteMvPosition();","vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);");function Or(i,e,t=vi){const n=i.uniforms.uCamHi.value,a=i.uniforms.uCamLo.value,s=Math.round(e.x*t)/t,r=Math.round(e.y*t)/t,o=Math.round(e.z*t)/t;n.set(s,r,o),a.set(e.x-s,e.y-r,e.z-o)}function Ku(i,e,t){const n=new Tt;n.setAttribute("position",new Qe(i.positionsHi,3)),n.setAttribute("aPosLo",new Qe(i.positionsLo,3)),n.setAttribute("aMag",new Qe(i.mag,1)),n.setAttribute("aCI",new Qe(i.ci,1)),n.setAttribute("aHidden",new Qe(new Float32Array(i.count),1));const a=new _t({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uBaseSize:{value:t},uRefMag:{value:6},uAttenuate:{value:e?1:0},uIntensity:{value:e?1.15:.7},uCamDist:{value:0},uCamHi:{value:new I},uCamLo:{value:new I}},vertexShader:Gl+Vu,fragmentShader:Wu,transparent:!0,depthWrite:!1,blending:Ui}),s=new kn(n,a);return s.frustumCulled=!1,s}function E4(i,e,t,n=1.5,a=!1){const s=i.length,r=new Float32Array(s*3),o=new Float32Array(s*3),l=new Float32Array(s*3);for(let p=0;p<s;p++){const f=i[p][0]*_i,g=i[p][1]*_i,v=i[p][2]*_i;r[p*3]=f,r[p*3+1]=g,r[p*3+2]=v;const h=Fr(f,g,v);o[p*3]=h.hx,o[p*3+1]=h.hy,o[p*3+2]=h.hz,l[p*3]=h.lx,l[p*3+1]=h.ly,l[p*3+2]=h.lz}const c={positionsHi:o,positionsLo:l,mag:Float32Array.from(e),ci:Float32Array.from(t),count:s},u=Ku(c,a,n),d=u.material;return d.uniforms.uIntensity.value=.95,{object:u,material:d,setCamPos(p){Or(d,p)}}}const Xu=`
	uniform float uPixelRatio;
	uniform float uSize;
	void main() {
		gl_Position = projectionMatrix * rteMvPosition();
		gl_PointSize = uSize * uPixelRatio;
	}
`,w4=`
	precision mediump float;
	void main() {
		discard;
	}
`;function A4(i){const e=i.length,t=new Float32Array(e*3),n=new Float32Array(e*3);for(let o=0;o<e;o++){const l=i[o],c=Fr(l.x,l.y,l.z,$t);t[o*3]=c.hx,t[o*3+1]=c.hy,t[o*3+2]=c.hz,n[o*3]=c.lx,n[o*3+1]=c.ly,n[o*3+2]=c.lz}const a=new Tt;a.setAttribute("position",new Qe(t,3)),a.setAttribute("aPosLo",new Qe(n,3));const s=new _t({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:7.5},uCamHi:{value:new I},uCamLo:{value:new I}},vertexShader:Gl+Xu,fragmentShader:w4,transparent:!0,depthWrite:!1,blending:Ui}),r=new kn(a,s);return r.frustumCulled=!1,{object:r,setCamPos(o){Or(s,o,$t)}}}const T4=`
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
`;function P4(i){const e=i.length,t=new Tt,n=new Qe(new Float32Array(e*3),3),a=new Qe(new Float32Array(e*3),3);t.setAttribute("position",n),t.setAttribute("aPosLo",a);const s=n.array,r=a.array;let o=null;function l(){let d=0;for(const p of i){if(p.id===o)continue;const f=Fr(p.pos.x,p.pos.y,p.pos.z,$t);s[d*3]=f.hx,s[d*3+1]=f.hy,s[d*3+2]=f.hz,r[d*3]=f.lx,r[d*3+1]=f.ly,r[d*3+2]=f.lz,d++}n.needsUpdate=!0,a.needsUpdate=!0,t.setDrawRange(0,d)}l();const c=new _t({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:22},uCamHi:{value:new I},uCamLo:{value:new I}},vertexShader:Gl+Xu,fragmentShader:T4,transparent:!0,depthWrite:!1}),u=new kn(t,c);return u.frustumCulled=!1,u.visible=!1,u.renderOrder=3,{object:u,setVisible(d){u.visible=d},setSelectedSystemId(d){d!==o&&(o=d,l())},setCamPos(d){Or(c,d,$t)}}}function C4(i){const e=i.count+1,t=new Float32Array(e*3),n=new Float32Array(e*3),a=new Float32Array(e*3),s=new Float32Array(e),r=new Float32Array(e);return t.set(i.positions),n.set(i.positionsHi),a.set(i.positionsLo),s.set(i.mag),r.set(i.ci),s[i.count]=S4,r[i.count]=x4,{positions:t,positionsHi:n,positionsLo:a,mag:s,ci:r,count:e}}async function D4(i){const e=await fetch(`${i}/data/stars-near.bin`).then(A=>A.arrayBuffer()),t=C4(M4(e)),n=Ku(t,!0,.85),a=new y4(t.positions,t.count),s=n.material,r=t.positions,o=n.geometry.getAttribute("aHidden"),l=o.array,c=.6,u=256,d=new Tt,p=new Qe(new Float32Array(u*3),3),f=new Qe(new Float32Array(u),1),g=new Qe(new Float32Array(u),1),v=new Qe(new Float32Array(u),1);p.setUsage(ms),f.setUsage(ms),g.setUsage(ms),d.setAttribute("position",p),d.setAttribute("aMag",f),d.setAttribute("aCI",g),d.setAttribute("aHidden",v);const h=new _t({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uBaseSize:{value:.85},uRefMag:{value:6},uAttenuate:{value:1},uIntensity:{value:1.15},uCamDist:{value:0}},vertexShader:b4,fragmentShader:Wu,transparent:!0,depthWrite:!1,blending:Ui}),m=new kn(d,h);m.frustumCulled=!1,m.visible=!1;const S=p.array,y=f.array,M=g.array;let L=[];return{near:n,nearCount:t.count,kdtree:a,focusNear:m,setCamDist(A){s.uniforms.uCamDist.value=A,h.uniforms.uCamDist.value=A},setCamPos(A){Or(s,A,$t)},setFocus(A,P){if(L.length){for(const Q of L)l[Q]=0;L=[],o.needsUpdate=!0}if(!A){m.visible=!1;return}const N=c*c,j=[];let _=-1,b=1/0;for(let Q=0;Q<t.count;Q++){const z=r[Q*3]-A.x,se=r[Q*3+1]-A.y,W=r[Q*3+2]-A.z,ge=z*z+se*se+W*W;ge<=N&&(j.push(Q),ge<b&&(b=ge,_=Q))}const K=.015*.015,V=_>=0&&b<K?_:-1;S[0]=0,S[1]=0,S[2]=0,V>=0?(y[0]=t.mag[V],M[0]=t.ci[V],l[V]=1,L.push(V)):(y[0]=P??8,M[0]=.8);let X=1;for(const Q of j){if(X>=u)break;if(Q===V)continue;const z=r[Q*3]-A.x,se=r[Q*3+1]-A.y,W=r[Q*3+2]-A.z;S[X*3]=z,S[X*3+1]=se,S[X*3+2]=W,y[X]=t.mag[Q],M[X]=t.ci[Q],l[Q]=1,L.push(Q),X++}p.needsUpdate=!0,f.needsUpdate=!0,g.needsUpdate=!0,o.needsUpdate=!0,d.setDrawRange(0,X),m.position.copy(A),m.visible=!0}}}const R4=`
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
`,I4=`
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
`,Tr=3,_s=5,L4=2,U4=30;function N4(i,e,t){const n=Math.max(e,1),a=Math.tan(t*Math.PI/360),s=i*a*2/n,r=Math.log(s*U4/Tr)/Math.log(_s),o=Math.floor(r),l=r-o,c=Tr*Math.pow(_s,o);return{major:c*_s,minor:c,f:l}}function k4(){const i=new Xi,e=new _t({uniforms:{uRadius:{value:10},uCamLocal:{value:new I},uLookXY:{value:new Xe},uColor:{value:new rt(15002350)},uPlaneScale:{value:1}},vertexShader:R4,fragmentShader:I4,transparent:!0,depthWrite:!1,side:Vi}),t=new Bt(new la(720,720,1,1),e);t.renderOrder=-1,t.frustumCulled=!1,i.add(t);const n=e.uniforms.uCamLocal.value,a=e.uniforms.uLookXY.value;return{group:i,update(s,r,o){const l=o*.4;e.uniforms.uRadius.value=l;const c=Math.max(1e-12,o*.001),u=Math.log(c*30/Tr)/Math.log(_s),d=Math.floor(u)+L4,p=Tr*Math.pow(_s,d),f=Math.floor(s.x/p)*p,g=Math.floor(s.y/p)*p;i.position.set(f,g,s.z);const v=(p+l)*1.2;e.uniforms.uPlaneScale.value=Math.min(1,Math.max(o/225,v/360)),a.set(s.x-f,s.y-g),n.copy(r).sub(i.position)}}}const F4=`
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
`,O4=`
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
`;function vh(i,e,t){const n=Math.round(i*$t)/$t,a=Math.round(e*$t)/$t,s=Math.round(t*$t)/$t;return{hx:n,hy:a,hz:s,lx:i-n,ly:e-a,lz:t-s}}function B4(i){const e=i.length,t=new Float32Array(e*2*3),n=new Float32Array(e*2*3),a=new Float32Array(e*2*3),s=new Float32Array(e*2*3),r=new Float32Array(e*2);for(let u=0;u<e;u++){const d=i[u],p=vh(d.x,d.y,d.z),f=vh(d.x,d.y,0);t[u*6+0]=p.hx,t[u*6+1]=p.hy,t[u*6+2]=p.hz,n[u*6+0]=p.lx,n[u*6+1]=p.ly,n[u*6+2]=p.lz,r[u*2]=0,t[u*6+3]=f.hx,t[u*6+4]=f.hy,t[u*6+5]=f.hz,n[u*6+3]=f.lx,n[u*6+4]=f.ly,n[u*6+5]=f.lz,r[u*2+1]=1,a[u*6+0]=p.hx,a[u*6+1]=p.hy,a[u*6+2]=p.hz,s[u*6+0]=p.lx,s[u*6+1]=p.ly,s[u*6+2]=p.lz,a[u*6+3]=p.hx,a[u*6+4]=p.hy,a[u*6+5]=p.hz,s[u*6+3]=p.lx,s[u*6+4]=p.ly,s[u*6+5]=p.lz}const o=new Tt;o.setAttribute("position",new Qe(t,3)),o.setAttribute("aPosLo",new Qe(n,3)),o.setAttribute("aStarHi",new Qe(a,3)),o.setAttribute("aStarLo",new Qe(s,3)),o.setAttribute("aFoot",new Qe(r,1));const l=new _t({uniforms:{uCenter:{value:new I},uRadius:{value:10},uGridZ:{value:0},uOpacity:{value:.42},uCamHi:{value:new I},uCamLo:{value:new I}},vertexShader:F4,fragmentShader:O4,transparent:!0,depthWrite:!1}),c=new Es(o,l);return c.frustumCulled=!1,{object:c,update(u,d){l.uniforms.uCenter.value.copy(u),l.uniforms.uRadius.value=d,l.uniforms.uGridZ.value=u.z},setCamPos(u){const d=l.uniforms.uCamHi.value,p=l.uniforms.uCamLo.value,f=Math.round(u.x*$t)/$t,g=Math.round(u.y*$t)/$t,v=Math.round(u.z*$t)/$t;d.set(f,g,v),p.set(u.x-f,u.y-g,u.z-v)}}}const qu=Hu*Math.PI/180,_h=Math.cos(qu),yh=Math.sin(qu);function z4(i,e,t){const n=i*Math.PI/180,a=e*Math.PI/180,s=Math.cos(a)*Math.cos(n),r=Math.cos(a)*Math.sin(n),o=Math.sin(a),l=s,c=r*_h+o*yh,u=-r*yh+o*_h,d=t*_i;return new I(l*d,c*d,u*d)}const li=Math.PI/180,Yu=114e-10,G4=.01,Sh=.3,xh=.6,Mh=.02,bh=1.2;function H4(i){return i<1?.18:.1}function V4(i){return i<1?.09:.1}const W4={orbitScale:1,bodyScale:1};function Eh(i,e=W4){const t=i.pos?new I(i.pos[0]*_i,i.pos[1]*_i,i.pos[2]*_i):z4(i.ra,i.dec,i.dist),n=[];let a=0;const{orbitScale:s,bodyScale:r}=e,o=i.children.find(h=>h.kind==="star"),l=((o==null?void 0:o.size)??1/0)*r;let c=0;for(const h of i.children)h.kind==="planet"&&(c=Math.max(c,h.size*r));const u=isFinite(l)&&c>bh*l?bh*l/c:1,d=V4(r);let p=0;for(const h of i.children)if(h.kind==="planet"&&h.realRadiusKm!=null){const m=h.realRadiusKm*Yu*r,S=h.orbitRadius*s;S>0&&(p=Math.max(p,m/S))}const f=p>d?d/p:1;let g=null,v;if(K4(i.children)){g=new Xi,g.position.copy(t);let h=0;for(const S of i.children)S.kind==="planet"&&S.angle===void 0&&(S.angle=h*137.508*li%(Math.PI*2),h++);const m=Z4(i.children)*s;for(const S of i.children){if(S.kind!=="star"){const y=X4(S,m,u,f,e);y&&g.add(y)}if(S.kind==="planet"&&S.id){const y=Q4(S).multiplyScalar(s);n.push({id:`${i.id}/${S.id}`,name:S.name??S.id,local:y}),a=Math.max(a,y.length())}if(S.kind==="planet"||S.kind==="orbit"){const y=(S.kind==="planet"?S.orbitRadius:S.radius)*s;a=Math.max(a,y)}if(S.kind==="star"&&S.offset){const y=S.offset;a=Math.max(a,Math.hypot(y[0],y[1],y[2])*s)}S.kind==="belt"&&(a=Math.max(a,S.outerR*s))}i.id!=="SOL"&&s!==1&&o&&(v=$4(i.mag),g.add(v))}return{def:i,center:t,bbox:i5(i.children,e),visualHalf:a,group:g,planets:n,starAnchor:v}}function K4(i){return!(i.length===0||i.length===1&&i[0].kind==="star")}function X4(i,e,t,n,a){switch(i.kind){case"star":return q4(i,e,a);case"planet":return J4(i,t,n,a);case"belt":return t5(i,a);case"orbit":return e5(i,a)}}function q4(i,e,t){const n=new Xi,{orbitScale:a,bodyScale:s}=t,r=i.size*s,o=i.halo?i.halo.size*s:0,l=e>0?Math.max(Mh,Math.min(1,e*Sh/r)):1,c=e>0?Math.min(1,e*xh/r):1,u=i.halo&&e>0?Math.max(Mh,Math.min(1,e*Sh/o)):1,d=i.halo&&e>0?Math.min(1,e*xh/o):1,p=new Bt(new Wa(r,24,24),new oa({color:i.color}));if(p.userData.bodyKind="star-sphere",p.userData.baseSize=r,p.userData.shrinkTarget=l,p.userData.upperBound=c,n.add(p),i.halo){const f=new Bt(new Wa(o,24,24),new oa({color:i.halo.color,transparent:!0,opacity:i.halo.opacity,blending:Ui,depthWrite:!1}));f.userData.bodyKind="star-halo",f.userData.baseSize=o,f.userData.shrinkTarget=u,f.userData.upperBound=d,n.add(f)}return i.offset&&n.position.set(i.offset[0]*a,i.offset[1]*a,i.offset[2]*a),n}const Y4=`
	uniform float uPixelRatio;
	uniform float uRefMag;
	uniform float uMag;
	uniform float uCI;
	varying float vAlpha;
	varying vec3 vColor;

	vec3 ciColor(float ci) {
		vec3 cBlue  = vec3(0.40, 0.58, 1.00);
		vec3 cWhite = vec3(1.00, 0.96, 0.90);
		vec3 cWarm  = vec3(1.00, 0.52, 0.20);
		float t = clamp((ci + 0.4) / 2.4, 0.0, 1.0);
		return t < 0.5 ? mix(cBlue, cWhite, t * 2.0)
		               : mix(cWhite, cWarm, (t - 0.5) * 2.0);
	}

	void main() {
		vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix * mvPosition;

		float flux = pow(10.0, -0.4 * (uMag - uRefMag));
		flux = clamp(flux, 0.0, 14.0);
		float s = 0.85 * (0.45 + 1.7 * sqrt(flux));
		gl_PointSize = s * uPixelRatio * (780.0 / max(-mvPosition.z, 0.05));
		gl_PointSize = clamp(gl_PointSize, 0.0, 110.0);

		vAlpha = clamp(0.05 + 0.62 * sqrt(flux), 0.0, 1.0);

		vec3 sc = ciColor(uCI);
		float lum = dot(sc, vec3(0.2126, 0.7152, 0.0722));
		vColor = clamp(lum + (sc - lum) * 2.6, 0.0, 1.0);
	}
`,j4=`
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
		if (a < 0.004) discard;
		gl_FragColor = vec4(vColor * (glow + 0.18 * core), a);
	}
`;function $4(i){const e=new Tt;e.setAttribute("position",new Qe([0,0,0],3));const t=new _t({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uRefMag:{value:6},uIntensity:{value:1.15},uMag:{value:i??8},uCI:{value:.8}},vertexShader:Y4,fragmentShader:j4,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ui}),n=new kn(e,t);return n.frustumCulled=!1,n.renderOrder=4,n.visible=!1,n}function Z4(i){let e=1/0;for(const t of i)if(t.kind==="planet")e=Math.min(e,t.orbitRadius);else if(t.kind==="orbit")e=Math.min(e,t.radius);else if(t.kind==="belt")e=Math.min(e,t.innerR);else if(t.kind==="star"&&t.offset){const n=Math.hypot(t.offset[0],t.offset[1],t.offset[2]);n>0&&(e=Math.min(e,n))}return isFinite(e)?e:0}function J4(i,e,t,n){const a=new Xi,{orbitScale:s,bodyScale:r}=n,o=i.orbitRadius*s,l=i.ecc??0,c=(i.argPeriDeg??0)*li;a.add(ju(o,l,c+i.node*li));const u=i.angle??Math.random()*Math.PI*2,d=u+i.node*li,p=Hl(o,l,u-c),f=i.size*r*e,g=Math.min(f,o*H4(r)),v=new Bt(new Wa(g,16,16),new oa({color:i.color}));if(v.userData.bodyKind="planet-marker",v.userData.baseSize=g,i.realRadiusKm!=null){const m=i.realRadiusKm*Yu*r*t;v.userData.realScaleTarget=Math.max(G4,Math.min(1,m/g))}v.position.set(Math.cos(d)*p,Math.sin(d)*p,0);{const h=g*2.5,m=g*1,S=new Tt;S.setAttribute("position",new Qe([0,0,-h,0,0,-m,0,0,m,0,0,h],3));const y=new Es(S,new kr({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}));y.rotation.x=(i.obliquityDeg??0)*li,y.userData.bodyKind="planet-axis",v.add(y)}if(i.rings){const h=i.size>0?g/(i.size*r):1,m=i.rings.innerR*r*h,S=i.rings.outerR*r*h,y=new Bt(new Fl(m,S,64,1),new oa({color:i.rings.color,side:Vi,transparent:!0,opacity:i.rings.opacity,depthWrite:!1}));y.rotation.x=(i.obliquityDeg??0)*li,y.userData.bodyKind="planet-rings",v.add(y)}return a.add(v),$u(a,i.inc,i.node),a}function Q4(i){const e=i.angle??0,t=Hl(i.orbitRadius,i.ecc??0,e-(i.argPeriDeg??0)*li),n=e+i.node*li,a=new I(Math.cos(n)*t,Math.sin(n)*t,0);if(i.inc!==0){const s=new I(Math.cos(i.node*li),Math.sin(i.node*li),0);a.applyAxisAngle(s,i.inc*li)}return a}function e5(i,e){const t=new Xi;return t.add(ju(i.radius*e.orbitScale)),$u(t,i.inc,i.node),t}function Hl(i,e,t){return e>0?i*(1-e*e)/(1+e*Math.cos(t)):i}function ju(i,e=0,t=0){const a=[];for(let o=0;o<256;o++){const l=o/256*Math.PI*2,c=Hl(i,e,l),u=t+l;a.push(Math.cos(u)*c,Math.sin(u)*c,0)}const s=new Tt;s.setAttribute("position",new Qe(a,3));const r=new km(s,new kr({color:Xa.orbit,transparent:!0,opacity:.85,blending:Ui,depthWrite:!1}));return r.renderOrder=1,r}function $u(i,e,t){e!==0&&i.rotateOnAxis(new I(Math.cos(t*li),Math.sin(t*li),0),e*li)}function t5(i,e){const t=new Float32Array(i.count*3),n=i.innerR*e.orbitScale,a=i.outerR*e.orbitScale,s=i.thickness*e.orbitScale,r=a-n;for(let u=0;u<i.count;u++){const d=n+Math.random()*r,p=Math.random()*Math.PI*2,f=(Math.random()-.5)*2*s;t[u*3]=Math.cos(p)*d,t[u*3+1]=Math.sin(p)*d,t[u*3+2]=f}const o=new Tt;o.setAttribute("position",new Qe(t,3));const l=new _t({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
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
		`,transparent:!0,depthWrite:!1,depthTest:!1}),c=new kn(o,l);return c.renderOrder=2,c}function i5(i,e){const t=new Ya;t.expandByPoint(new I(0,0,0));const{orbitScale:n,bodyScale:a}=e;for(const o of i)switch(o.kind){case"star":{const l=o.offset??[0,0,0],c=l[0]*n,u=l[1]*n,d=l[2]*n,p=(o.halo?Math.max(o.size,o.halo.size):o.size)*a;t.expandByPoint(new I(c-p,u-p,d-p)),t.expandByPoint(new I(c+p,u+p,d+p));break}case"planet":case"orbit":{const l=(o.kind==="planet"?o.orbitRadius:o.radius)*n,c=l*Math.abs(Math.sin(o.inc*li));t.expandByPoint(new I(-l,-l,-c)),t.expandByPoint(new I(+l,+l,+c));break}case"belt":{const l=o.outerR*n,c=o.thickness*n;t.expandByPoint(new I(-l,-l,-c)),t.expandByPoint(new I(+l,+l,+c));break}}const s=new I;t.getSize(s);const r=Math.max(s.x,s.y,s.z)*.5;return t.expandByScalar(Math.max(.06,.18*r)),t}function n5(){const i=new Es(new Om(new ja(1,1,1)),new kr({color:Xa.gridStrong,transparent:!0,opacity:.9}));i.renderOrder=2,i.frustumCulled=!1;const e=new I,t=new I(1,1,1),n=new I,a=new I(1,1,1);let s=!1;const r=new I,o=new I;return{object:i,setTo(l,c){c.getCenter(r),c.getSize(o),n.copy(l).add(r),a.copy(o),s||(e.copy(n),t.copy(a),i.position.copy(e),i.scale.copy(t),s=!0)},setVisible(l){i.visible=l},tick(){e.lerp(n,.18),t.lerp(a,.18),i.position.copy(e),i.scale.copy(t)}}}const wh=[{name:"Chained Maiden",iau:"And",segments:[25.97323841,6.62675989,12.88748471,26.78919159,10.72177722,13.06287651,26.78919159,10.72177722,13.06287651,46.94399755,27.55176464,26.48416236,76.37169192,74.32799612,56.2016345,46.94399755,27.55176464,26.48416236,46.94399755,27.55176464,26.48416236,28.4134722,15.86151964,18.53052535,28.4134722,15.86151964,18.53052535,127.19718635,70.94217174,93.01103608]},{name:"Air Pump",iau:"Ant",segments:[-88.38221761,11.72837366,-68.23503738,-23.28135551,4.71270151,-23.3042327]},{name:"Bird of Paradise",iau:"Aps",segments:[-21.57319186,-77.40879128,-129.78230902,-3.33244427,-26.03424426,-38.92172896,-3.33244427,-26.03424426,-38.92172896,-3.40107585,-27.46788161,-38.87597458]},{name:"Eagle",iau:"Aql",segments:[6.51999966,-10.25660765,6.10058448,2.35635075,-3.80523957,2.50886537,2.35635075,-3.80523957,2.50886537,78.63653391,-131.18544345,92.7898899,2.35635075,-3.80523957,2.50886537,5.65066637,-12.9103619,6.51999966,5.65066637,-12.9103619,6.51999966,128.34523476,-218.46444408,99.9262056,37.99138983,-54.42483927,22.50353099,128.34523476,-218.46444408,99.9262056,5.65066637,-12.9103619,6.51999966,7.1529353,-19.8650282,15.44210446,7.1529353,-19.8650282,15.44210446,13.6576835,-41.40009141,33.53033743,5.65066637,-12.9103619,6.51999966,11.08018656,-35.4901502,11.76650231]},{name:"Water Bearer",iau:"Aqr",segments:[132.88598137,-98.70745684,25.08102793,177.61851705,-89.12953921,37.41183431,177.61851705,-89.12953921,37.41183431,35.16224378,-15.1294495,5.53628041,35.16224378,-15.1294495,5.53628041,25.97323841,-10.01258427,4.33141498,25.97323841,-10.01258427,4.33141498,50.76448858,-18.07298151,7.71723936,50.76448858,-18.07298151,7.71723936,106.16542136,-35.36813851,-.75494733,106.16542136,-35.36813851,-.75494733,43.87082812,-10.6912743,-3.15705247,43.87082812,-10.6912743,-3.15705247,46.67709698,-13.86357822,-12.85698179,177.61851705,-89.12953921,37.41183431,52.19812593,-26.2935191,2.76051448,52.19812593,-26.2935191,2.76051448,55.12640648,-33.49220878,-2.34109929,52.19812593,-26.2935191,2.76051448,57.43700285,-26.30877056,-1.35738005,57.43700285,-26.30877056,-1.35738005,92.4924864,-36.25272326,-9.85244393,92.4924864,-36.25272326,-9.85244393,39.89019675,-15.41160154,-6.15396459,39.89019675,-15.41160154,-6.15396459,71.81150503,-26.11050156,-19.75064224,49.31559977,-55.30179829,10.51588249,132.88598137,-98.70745684,25.08102793]},{name:"Altar",iau:"Ara",segments:[6.29802532,-303.18953821,-152.24985652,-6.47424528,-73.03162192,-36.64926125,-6.47424528,-73.03162192,-36.64926125,-25.645332,-142.85281126,-94.58193659,-25.645332,-142.85281126,-94.58193659,-14.50413959,-73.93908386,-55.30179829,-14.50413959,-73.93908386,-55.30179829,-4.25515767,-54.77562287,-41.93389255,-4.25515767,-54.77562287,-41.93389255,-28.42706962,-284.46238978,-186.43133802,-28.42706962,-284.46238978,-186.43133802,-18.72116861,-184.48167459,-117.07021612,-18.72116861,-184.48167459,-117.07021612,6.29802532,-303.18953821,-152.24985652]},{name:"Ram",iau:"Ari",segments:[33.28631405,37.2364425,9.21188256,15.73188222,12.14016311,3.49258461,15.73188222,12.14016311,3.49258461,14.7557887,9.93632697,2.65375425,14.7557887,9.93632697,2.65375425,41.76612648,27.315367,6.26835055]},{name:"Charioteer",iau:"Aur",segments:[.04575438,49.30034831,12.086783,.03812865,23.13646663,9.12037379,.03812865,23.13646663,9.12037379,1.71578938,11.97239704,5.10161377,1.71578938,11.97239704,5.10161377,131.44049585,653.83819919,219.30159168,131.44049585,653.83819919,219.30159168,31.34937848,131.98614516,25.02764782,5.2846313,40.53075812,3.85099395,31.34937848,131.98614516,25.02764782,5.2846313,40.53075812,3.85099395,.04575438,49.30034831,12.086783]},{name:"Herdsman",iau:"Boo",segments:[-39.9283254,-25.96561268,25.19541389,-8.8229703,-3.97300564,5.74980087,-8.8229703,-3.97300564,5.74980087,-48.42338929,-25.85885245,47.08888643,-48.42338929,-25.85885245,47.08888643,-20.29969485,-13.26114551,27.8644196,-20.29969485,-13.26114551,27.8644196,-38.47943659,-17.33328565,58.40547064,-38.47943659,-17.33328565,58.40547064,-16.30381202,-5.19312254,20.07092293,-16.30381202,-5.19312254,20.07092293,-34.26240757,-14.38975364,33.995507,-34.26240757,-14.38975364,33.995507,-8.8229703,-3.97300564,5.74980087,-8.8229703,-3.97300564,5.74980087,-9.48640886,-3.33244427,5.36088861,-9.48640886,-3.33244427,5.36088861,-63.65959902,-22.16799884,31.71541355]},{name:"Great Dog",iau:"CMa",segments:[-18.98806919,65.41351706,-47.19564666,-34.88009175,97.91438086,-81.19115366,-34.88009175,97.91438086,-81.19115366,-245.25418499,776.78788856,-674.9294789,-245.25418499,776.78788856,-674.9294789,-.49567249,1.96743849,-1.67766073,-.49567249,1.96743849,-1.67766073,-285.01155338,742.37265768,-827.21563698,-285.01155338,742.37265768,-827.21563698,-129.73338364,299.85331949,-368.67692242,-129.73338364,299.85331949,-368.67692242,-80.3942029,167.56399677,-210.5206602,-80.3942029,167.56399677,-210.5206602,-190.7620398,336.67047377,-471.23808714,-27.49838453,72.5283237,-97.02979611,-93.70401327,237.20039063,-306.38710211,-93.70401327,237.20039063,-306.38710211,-129.73338364,299.85331949,-368.67692242,-93.70401327,237.20039063,-306.38710211,-165.87886577,505.68126771,-566.21082253,-165.87886577,505.68126771,-566.21082253,-3.08079516,14.81679455,-13.77969519,-3.08079516,14.81679455,-13.77969519,-17.46292307,84.59985524,-89.60996024,-.49567249,1.96743849,-1.67766073,-14.2067361,112.67016956,-99.60729305,-3.08079516,14.81679455,-13.77969519,-.49567249,1.96743849,-1.67766073,-8.51031535,65.74142347,-89.16766786,-27.49838453,72.5283237,-97.02979611,-245.25418499,776.78788856,-674.9294789,-18.98806919,65.41351706,-47.19564666]},{name:"Lesser Dog",iau:"CMi",segments:[-1.47176601,3.04266651,-.96846779,-18.21024466,44.64102691,-11.56060758]},{name:"Hunting Dogs",iau:"CVn",segments:[-6.29122774,1.37263151,5.50577749,-23.26610405,2.21146187,19.6896364]},{name:"Engraving Tool",iau:"Cae",segments:[56.12537719,66.84715441,-190.00270354,5.15499388,7.68673644,-18.15686455,5.15499388,7.68673644,-18.15686455,7.67911071,12.97899348,-24.64636129]},{name:"Giraffe",iau:"Cam",segments:[291.19555067,672.30744916,604.64082852,27.27723834,84.15756286,78.36200761,27.27723834,84.15756286,78.36200761,170.82201275,1076.04715696,1030.99095824,291.19555067,672.30744916,604.64082852,20.31494631,73.98483825,90.20476723,20.31494631,73.98483825,90.20476723,170.82201275,1076.04715696,1030.99095824,20.31494631,73.98483825,90.20476723,.63293564,11.63686489,17.21127396]},{name:"Sea Goat",iau:"Cap",segments:[18.4923967,-27.55939038,4.03401149,66.46586788,-98.36429896,9.52453751,66.46586788,-98.36429896,9.52453751,31.62390478,-32.92027898,-.46516957,31.62390478,-32.92027898,-.46516957,45.61712043,-41.53735456,-1.47176601,45.61712043,-41.53735456,-1.47176601,41.08743645,-32.34834919,-2.33347356,41.08743645,-32.34834919,-2.33347356,9.34914571,-6.90891192,-.52617541,45.61712043,-41.53735456,-1.47176601,98.37955042,-91.9434338,-16.50970674,98.37955042,-91.9434338,-16.50970674,31.62390478,-32.92027898,-.46516957,66.46586788,-98.36429896,9.52453751,8.76959019,-11.57585905,-1.79204669,31.62390478,-32.92027898,-.46516957,103.02362036,-132.06240247,-26.41553079]},{name:"Keel",iau:"Car",segments:[-8.98311064,-5.60491199,-33.04229067,-36.80177586,-28.17707455,-111.24415794,-36.80177586,-28.17707455,-111.24415794,-56.97945902,-31.82979951,-123.47582982,-56.97945902,-31.82979951,-123.47582982,-210.97559589,-90.32635599,-392.16302294,-210.97559589,-90.32635599,-392.16302294,-753.74732231,-353.52487788,-1247.75203259,-753.74732231,-353.52487788,-1247.75203259,-14.78629163,-6.10821021,-25.18016243,-14.78629163,-6.10821021,-25.18016243,-226.21928387,-72.83565363,-409.75467825,-226.21928387,-72.83565363,-409.75467825,-100.3927433,-36.69501563,-206.26076117,-100.3927433,-36.69501563,-206.26076117,-90.89108298,-8.47218669,-216.26571971,-180.186799,5.27020587,-524.74724887,-54.83662872,6.61150843,-177.11521883,-54.83662872,6.61150843,-177.11521883,-5.99382425,22.42727368,-91.89767942,-48.0039741,-2.8672747,-116.26188867,-90.89108298,-8.47218669,-216.26571971,-48.0039741,-2.8672747,-116.26188867,-180.186799,5.27020587,-524.74724887,-5.99382425,22.42727368,-91.89767942,-13.558549,43.9394597,-103.64130454,-54.83662872,6.61150843,-177.11521883,-130.67500288,115.40527577,-282.80686631]},{name:"Seated Queen",iau:"Cas",segments:[55.59920178,78.71279122,105.34946819,14.42788229,15.98353133,22.61029122,14.42788229,15.98353133,22.61029122,79.83377361,76.9131188,126.70151386,79.83377361,76.9131188,126.70151386,38.52519097,29.86236102,51.58044175,38.52519097,29.86236102,51.58044175,8.60182411,6.04720436,13.0857537]},{name:"Centaur",iau:"Cen",segments:[-.50329822,-.85408183,-.91508767,-50.95513185,-69.60004315,-83.70001903,-50.95513185,-69.60004315,-83.70001903,-70.72865128,-72.10890852,-83.51700149,-70.72865128,-72.10890852,-83.51700149,-69.54666304,-69.42465135,-63.67485048,-69.54666304,-69.42465135,-63.67485048,-80.8022414,-78.97206606,-66.42773923,-80.8022414,-78.97206606,-66.42773923,-89.37356259,-79.17033505,-66.12271,-89.37356259,-79.17033505,-66.12271,-82.40364482,-72.02502548,-58.84776301,-82.40364482,-72.02502548,-58.84776301,-197.91202105,-146.32892833,-128.76012769,-197.91202105,-146.32892833,-128.76012769,-13.42891158,-8.76196446,-7.82399959,-82.40364482,-72.02502548,-58.84776301,-12.3613093,-11.24795263,-6.7792745,-89.37356259,-79.17033505,-66.12271,-54.08930712,-65.03223053,-40.37061778,-54.08930712,-65.03223053,-40.37061778,-61.87517806,-87.69590186,-47.85145949,-69.54666304,-69.42465135,-63.67485048,-25.77496942,-16.30381202,-25.73684076,-25.77496942,-16.30381202,-25.73684076,-80.11592565,-47.61506184,-85.0650248,-80.11592565,-47.61506184,-85.0650248,-110.64172522,-57.55138881,-122.60649653,-110.64172522,-57.55138881,-122.60649653,-71.59035884,-32.55424392,-94.98610031,-71.59035884,-32.55424392,-94.98610031,-54.5087223,-37.52622027,-101.07905906]},{name:"King",iau:"Cep",segments:[142.03049916,35.31426777,265.63815833,14.09997587,9.24238548,32.53899245,14.09997587,9.24238548,32.53899245,55.21791525,39.45553011,198.81804811,55.21791525,39.45553011,198.81804811,5.27700557,1.1972397,14.0313443,5.27700557,1.1972397,14.0313443,142.03049916,35.31426777,265.63815833,14.09997587,9.24238548,32.53899245,2.94353201,5.11686523,12.46044379,2.94353201,5.11686523,12.46044379,55.21791525,39.45553011,198.81804811]},{name:"Sea Monster",iau:"Cet",segments:[79.31522393,53.57838317,-7.14530957,47.6531905,36.52724956,-6.15396459,3.15705247,1.01422217,-1.53277185,27.58226757,1.24299409,-10.47775384,27.58226757,1.24299409,-10.47775384,84.15756286,1.34212858,-14.87780039,27.58226757,1.24299409,-10.47775384,34.75808006,7.23681834,-10.25660765,34.75808006,7.23681834,-10.25660765,31.82979951,9.26526267,-9.35677144,31.82979951,9.26526267,-9.35677144,67.54109589,27.2162325,-26.98746058,67.54109589,27.2162325,-26.98746058,135.31858943,77.24102521,-73.4510371,135.31858943,77.24102521,-73.4510371,17.67644352,11.62923916,-10.3176135,17.67644352,11.62923916,-10.3176135,87.16972645,58.25295603,-56.33127192,87.16972645,58.25295603,-56.33127192,17.52392891,10.15747315,-11.01155498,17.52392891,10.15747315,-11.01155498,3.15705247,1.01422217,-1.53277185,75.12869784,46.08228999,-25.16491097,17.67644352,11.62923916,-10.3176135,75.12869784,46.08228999,-25.16491097,149.57107992,115.06464897,-48.66741267,149.57107992,115.06464897,-48.66741267,18.43901658,15.16757816,-5.07111085,18.43901658,15.16757816,-5.07111085,53.34198552,52.0913657,-16.64696989,53.34198552,52.0913657,-16.64696989,95.54277864,95.8554336,-18.50764816,95.54277864,95.8554336,-18.50764816,19.6896364,17.69932071,-2.57749694,19.6896364,17.69932071,-2.57749694,47.6531905,36.52724956,-6.15396459,47.6531905,36.52724956,-6.15396459,95.64191314,75.76925921,-19.72013932,95.64191314,75.76925921,-19.72013932,18.43901658,15.16757816,-5.07111085]},{name:"Chameleon",iau:"Cha",segments:[-2.50886537,-4.22465475,-18.85843176,-25.05815074,-44.15298015,-126.19821564,-25.05815074,-44.15298015,-126.19821564,-17.25702834,-37.76261791,-83.61613599]},{name:"Compass",iau:"Cir",segments:[-5.26175411,-10.05071293,-11.83513389,-44.3131205,-96.99166746,-86.88757442,-5.26175411,-10.05071293,-11.83513389,-9.97445562,-20.72673576,-18.58390546]},{name:"Crab",iau:"Cnc",segments:[-61.92855817,84.15756286,19.22446683,-32.63050122,42.46769369,2.98166066,-32.63050122,42.46769369,2.98166066,-9.2957656,15.49548457,2.36397648,-32.63050122,42.46769369,2.98166066,-26.25539044,32.74488718,.05338011,-26.25539044,32.74488718,.05338011,-54.82137726,80.49721218,-17.67644352,-26.25539044,32.74488718,.05338011,-37.50334307,39.32589269,-4.8347132]},{name:"Dove",iau:"Col",segments:[-5.34563715,36.07733145,-55.54582166,-3.39345012,29.87761248,-49.04107347,-3.39345012,29.87761248,-49.04107347,2.83755532,167.90844986,-276.42298599,2.83755532,167.90844986,-276.42298599,.86933329,13.85595249,-23.27372978,.86933329,13.85595249,-23.27372978,.36603507,54.40196207,-123.65884735,.86933329,13.85595249,-23.27372978,6.44374235,46.84486305,-73.87045229,6.44374235,46.84486305,-73.87045229,8.70095861,43.52004451,-72.78759854]},{name:"Bernice's Hair",iau:"Com",segments:[-16.21230325,-2.55461975,6.96229203,-7.73249082,-.58718126,4.94147343,-7.73249082,-.58718126,4.94147343,-44.03096846,4.71270151,23.94479407]},{name:"Southern Crown",iau:"CrA",segments:[9.34151998,-59.76285068,-16.45632663,28.43634939,-138.61290505,-36.51962383,28.43634939,-138.61290505,-36.51962383,6.35223359,-29.79372944,-7.75536802,6.35223359,-29.79372944,-7.75536802,3.94250272,-16.28856055,-4.30853779,3.94250272,-16.28856055,-4.30853779,8.69333288,-34.52930814,-9.75330943,8.69333288,-34.52930814,-9.75330943,39.66905056,-158.38642449,-49.14783369,39.66905056,-158.38642449,-49.14783369,12.65108706,-52.39639493,-17.3714143,12.65108706,-52.39639493,-17.3714143,11.08781229,-50.64247689,-18.18736747,11.08781229,-50.64247689,-18.18736747,17.20364823,-88.95414741,-32.62287549,9.34151998,-59.76285068,-16.45632663,7.4274616,-65.39826559,-19.43036156]},{name:"Northern Crown",iau:"CrB",segments:[-58.81726009,-48.4005121,86.25463878,-19.27784695,-15.67850211,25.78259515,-19.27784695,-15.67850211,25.78259515,-12.52907537,-11.40046724,16.54020966,-12.52907537,-11.40046724,16.54020966,-22.63316841,-22.53403391,31.39513287,-22.63316841,-22.53403391,31.39513287,-24.82175309,-26.6443027,36.1154601,-24.82175309,-26.6443027,36.1154601,-33.65234912,-38.87597458,53.38011417,-33.65234912,-38.87597458,53.38011417,-48.90381031,-56.28551753,86.26226451]},{name:"Cup",iau:"Crt",segments:[-45.00706198,4.97960208,-18.95756626,-87.46712994,2.20383614,-41.98727266,-87.46712994,2.20383614,-41.98727266,-24.9742677,.33553215,-8.9221048,-24.9742677,.33553215,-8.9221048,-55.92710819,3.2409355,-17.7450751,-55.92710819,3.2409355,-17.7450751,-45.00706198,4.97960208,-18.95756626,-55.92710819,3.2409355,-17.7450751,-118.66399381,7.78587094,-28.48210378,-118.66399381,7.78587094,-28.48210378,-90.34965611,2.2190876,-18.06535578,-90.34965611,2.2190876,-18.06535578,-73.4510371,-7.84687678,-21.30629129,-73.4510371,-7.84687678,-21.30629129,-99.5691644,-7.08430372,-33.00416202,-99.5691644,-7.08430372,-33.00416202,-24.9742677,.33553215,-8.9221048]},{name:"Southern Cross",iau:"Cru",segments:[-14.60327409,-10.90479475,-20.12430304,-44.36650061,-39.76055933,-78.71279122,-42.1702902,-37.50334307,-64.09426566,-72.21566875,-51.82446513,-107.52280141]},{name:"Crow",iau:"Crv",segments:[-17.34853711,-4.2627834,-3.69847934,-24.9742677,-5.97094706,-5.55153187,-24.9742677,-5.97094706,-5.55153187,-44.80879298,-8.48743815,-11.79700523,-44.80879298,-8.48743815,-11.79700523,-87.00958611,-17.96622129,-31.76879366,-87.00958611,-17.96622129,-31.76879366,-13.59667765,-2.95115774,-5.55153187,-87.00958611,-17.96622129,-31.76879366,-41.23995107,-12.89511044,-14.07709868,-41.23995107,-12.89511044,-14.07709868,-24.9742677,-5.97094706,-5.55153187]},{name:"Swan",iau:"Cyg",segments:[7.43508733,-7.45796452,36.26034899,8.86872468,-7.9993914,35.58928469,8.86872468,-7.9993914,35.58928469,14.74816297,-14.12285306,42.65071123,14.74816297,-14.12285306,42.65071123,249.31823949,-175.60438662,471.82648285,249.31823949,-175.60438662,471.82648285,197.25067279,-90.60337338,374.54770807,249.31823949,-175.60438662,471.82648285,12.74259583,-8.03752005,17.59256049,12.74259583,-8.03752005,17.59256049,29.54208033,-15.03031501,31.66965917,29.54208033,-15.03031501,31.66965917,16.08266583,-5.71167222,14.06184722,249.31823949,-175.60438662,471.82648285,16.89099327,-18.15686455,34.47592803,16.89099327,-18.15686455,34.47592803,37.92275826,-62.48523651,83.98979679]},{name:"Dolphin",iau:"Del",segments:[68.18165726,-70.44649925,54.5087223,18.99569492,-18.12636163,16.3495664,18.99569492,-18.12636163,16.3495664,44.9384304,-41.35433702,39.69192775,44.9384304,-41.35433702,39.69192775,22.69417425,-19.47611594,19.20158964,22.69417425,-19.47611594,19.20158964,42.74221999,-38.32692198,35.79517942,42.74221999,-38.32692198,35.79517942,18.99569492,-18.12636163,16.3495664]},{name:"Swordfish",iau:"Dor",segments:[1.25061982,.61768418,-45.70100346,.32028069,1.64715781,-27.26961261,.32028069,1.64715781,-27.26961261,18.09730633,23.2658368,-339.92822607,18.09730633,23.2658368,-339.92822607,1.25061982,.61768418,-45.70100346,18.09730633,23.2658368,-339.92822607,10.85904037,8.43405804,-49.84177518,10.85904037,8.43405804,-49.84177518,5.57440907,4.13314598,-19.2168411]},{name:"Dragon",iau:"Dra",segments:[-.53380114,-5.78030379,33.91924969,-.43466664,-12.30030345,45.67812627,-.43466664,-12.30030345,45.67812627,-9.16612818,-28.16182309,112.72354968,-9.16612818,-28.16182309,112.72354968,-2.06657299,-5.79555525,29.28280549,-2.06657299,-5.79555525,29.28280549,-.53380114,-5.78030379,33.91924969,-.53380114,-5.78030379,33.91924969,3.54596473,1.09810521,29.75560079,3.54596473,1.09810521,29.75560079,7.19868968,4.62119274,46.11279292,7.19868968,4.62119274,46.11279292,4.27803486,6.10821021,45.53323739,4.27803486,6.10821021,45.53323739,.22114619,.87695902,8.00701713,.22114619,.87695902,8.00701713,-11.64449062,-.68631575,127.22006354,-11.64449062,-.68631575,127.22006354,-5.42952018,-1.40313443,27.42975296,-5.42952018,-1.40313443,27.42975296,-5.52865468,-1.65478354,20.73436149,-5.52865468,-1.65478354,20.73436149,-9.92870124,-.86170756,29.08453649,-9.92870124,-.86170756,29.08453649,-29.58783471,12.28505199,73.199388,-29.58783471,12.28505199,73.199388,-48.76654716,46.66947125,125.68729169,-48.76654716,46.66947125,125.68729169,-40.50788093,47.70657061,97.26619376]},{name:"Little Horse",iau:"Equ",segments:[25.72921503,-19.09482941,15.06844366,13.6576835,-9.76093516,7.73249082,13.6576835,-9.76093516,7.73249082,75.61674459,-52.09899143,35.30713266,75.61674459,-52.09899143,35.30713266,43.67255913,-32.76776437,20.00229135,43.67255913,-32.76776437,20.00229135,25.72921503,-19.09482941,15.06844366]},{name:"River",iau:"Eri",segments:[21.06226791,-5.52102895,-36.79415013,9.55504044,-.62530991,-14.7557887,9.55504044,-.62530991,-14.7557887,23.75415081,.41178945,-39.51653595,23.75415081,.41178945,-39.51653595,86.90282588,12.11728592,-135.17370055,86.90282588,12.11728592,-135.17370055,24.89038467,7.13005811,-35.97057122,24.89038467,7.13005811,-35.97057122,26.32402202,8.94498199,-35.22324962,26.32402202,8.94498199,-35.22324962,27.30011554,11.74362512,-40.50788093,27.30011554,11.74362512,-40.50788093,2.83677178,1.46414027,-5.13211669,2.83677178,1.46414027,-5.13211669,21.80196378,18.65253704,-41.84238378,21.80196378,18.65253704,-41.84238378,29.05403357,25.94273549,-54.22657027,29.05403357,25.94273549,-54.22657027,19.46086448,25.36317996,-43.94708543,19.46086448,25.36317996,-43.94708543,30.28940193,42.4448165,-73.199388,30.28940193,42.4448165,-73.199388,20.07854866,34.61319118,-50.87887454,20.07854866,34.61319118,-50.87887454,8.96785918,9.73805797,-11.87326254,8.96785918,9.73805797,-11.87326254,54.32570477,52.8386873,-62.3327219,54.32570477,52.8386873,-62.3327219,56.3770263,47.49305015,-58.64949402,56.3770263,47.49305015,-58.64949402,17.34853711,11.94189411,-16.9977535,17.34853711,11.94189411,-16.9977535,10.17272462,6.38273651,-7.72486509,10.17272462,6.38273651,-7.72486509,29.29043122,23.51012743,-17.15789384,29.29043122,23.51012743,-17.15789384,23.68551923,22.73230291,-15.96065414,23.68551923,22.73230291,-15.96065414,1.89880692,2.11995311,-1.4946432,1.89880692,2.11995311,-1.4946432,5.03298219,6.18446751,-4.3619179,5.03298219,6.18446751,-4.3619179,74.32037039,173.53112545,-88.52710649,74.32037039,173.53112545,-88.52710649,54.85188018,145.4531854,-73.71031195,54.85188018,145.4531854,-73.71031195,19.23971829,56.01861696,-31.21974106,19.23971829,56.01861696,-31.21974106,6.19971897,23.59401047,-12.89511044,6.19971897,23.59401047,-12.89511044,59.9930017,227.27909644,-144.29049772,59.9930017,227.27909644,-144.29049772,11.72837366,25.43943727,-20.35307496]},{name:"Furnace",iau:"For",segments:[33.84299239,16.67747281,-38.87597458,8.19003466,5.65066637,-9.8448182]},{name:"Twins",iau:"Gem",segments:[-5.26937984,32.85927314,-3.93487699,-84.11944457,314.15224148,-11.57757543,-84.11944457,314.15224148,-11.57757543,-5.90994121,17.63831487,-.06100584,-5.90994121,17.63831487,-.06100584,-9.82194101,28.89389323,-3.01216359,-9.82194101,28.89389323,-3.01216359,-3.53071327,17.8213324,-3.2409355,-5.90994121,17.63831487,-.06100584,-28.14657163,72.04027694,7.06142653,-28.14657163,72.04027694,7.06142653,-18.14161309,41.40009141,2.43260806,-28.14657163,72.04027694,7.06142653,-4.05688868,9.45590594,1.20486543,-28.14657163,72.04027694,7.06142653,-13.4594145,39.17337807,4.17890037,-13.4594145,39.17337807,4.17890037,-31.69253636,114.70623963,16.20467752,-31.69253636,114.70623963,16.20467752,-5.31513423,14.4050051,2.73001155,-31.69253636,114.70623963,16.20467752,-11.22507544,57.08621924,11.3394614,-31.69253636,114.70623963,16.20467752,-46.02381325,262.65441114,9.63794477,-46.02381325,262.65441114,9.63794477,-19.74301651,165.53173406,-8.89922761,-46.02381325,262.65441114,9.63794477,-6.56575404,70.71339982,-1.01422217,-6.56575404,70.71339982,-1.01422217,-12.66633852,210.95821122,-3.27906416,-12.66633852,210.95821122,-3.27906416,-.78545025,47.54643027,-.14488888]},{name:"Crane",iau:"Gru",segments:[28.53548389,-17.25702834,-22.86956606,66.94628891,-53.05220776,-52.03035986,66.94628891,-53.05220776,-52.03035986,18.67541423,-18.08823297,-16.82998743,18.67541423,-18.08823297,-16.82998743,34.99447771,-27.0179635,-31.45613871,34.99447771,-27.0179635,-31.45613871,43.3675299,-26.5680454,-37.29744835,43.3675299,-26.5680454,-37.29744835,28.53548389,-17.25702834,-22.86956606,34.99447771,-27.0179635,-31.45613871,29.38956572,-23.01445494,-33.59896901,34.99447771,-27.0179635,-31.45613871,23.06783505,-18.85843176,-24.81412736,18.67541423,-18.08823297,-16.82998743,51.79396221,-45.12144794,-33.46170586,51.79396221,-45.12144794,-33.46170586,38.04476995,-34.96397478,-21.98498131]},{name:"Hercules",iau:"Her",segments:[-9.53978898,-53.49450013,143.53150129,-3.17230393,-119.37318676,212.65874914,-3.17230393,-119.37318676,212.65874914,-15.17520389,-58.13857007,104.59452086,-15.17520389,-58.13857007,104.59452086,-7.83162532,-25.5461975,46.47120225,-7.83162532,-25.5461975,46.47120225,-17.53155464,-54.18081589,96.86965577,-17.53155464,-54.18081589,96.86965577,-8.77721592,-14.48888813,29.68696921,-8.77721592,-14.48888813,29.68696921,-24.89038467,-33.31681698,82.19012437,-24.89038467,-33.31681698,82.19012437,-28.79475873,-28.18470028,89.77010058,-28.79475873,-28.18470028,89.77010058,-6.18446751,-4.87284185,13.81019811,-8.77721592,-14.48888813,29.68696921,-3.07316943,-5.65066637,8.57132119,-3.07316943,-5.65066637,8.57132119,-16.14367167,-29.23705111,30.82320307,-16.14367167,-29.23705111,30.82320307,-23.24322686,-39.01323773,38.11340152,-3.07316943,-5.65066637,8.57132119,-11.17932105,-28.13132017,40.53838385,-11.17932105,-28.13132017,40.53838385,-4.16364891,-15.28958985,17.40954295,-4.16364891,-15.28958985,17.40954295,-13.78732092,-77.40879128,91.3943812,-13.78732092,-77.40879128,91.3943812,-.43466664,-5.21599973,6.48949674,-.43466664,-5.21599973,6.48949674,-.35840934,-25.40893435,33.33969417,-.35840934,-25.40893435,33.33969417,3.08842089,-65.51265155,84.50072074,-11.17932105,-28.13132017,40.53838385,-17.53155464,-54.18081589,96.86965577,-16.14367167,-29.23705111,30.82320307,-20.40645508,-83.57800734,65.27625391]},{name:"Clock",iau:"Hor",segments:[11.90376546,12.25454907,-31.76879366,21.90109827,.94559059,-44.2902433,21.90109827,.94559059,-44.2902433,15.17520389,-.49567249,-40.52313239]},{name:"Female Water Snake",iau:"Hya",segments:[-102.16953853,112.26600584,-38.5556939,-73.3747798,83.78390206,-29.01590492,-73.3747798,83.78390206,-29.01590492,-34.27765903,40.41637216,-11.64449062,-34.27765903,40.41637216,-11.64449062,-26.1943846,28.74900435,-7.63335633,-26.1943846,28.74900435,-7.63335633,-63.87311948,68.7154584,-19.17871245,-63.87311948,68.7154584,-19.17871245,-102.16953853,112.26600584,-38.5556939,-63.87311948,68.7154584,-19.17871245,-32.325472,32.81351876,-8.92973053,-32.325472,32.81351876,-8.92973053,-27.68140207,22.99157775,-8.34254927,-27.68140207,22.99157775,-8.34254927,-144.85075268,98.66932819,-46.86774025,-144.85075268,98.66932819,-46.86774025,-14.38975364,9.86006966,-5.23125119,-14.38975364,9.86006966,-5.23125119,-43.00149483,27.62802195,-21.04701645,-43.00149483,27.62802195,-21.04701645,-62.36322482,28.16944882,-33.49220878,-62.36322482,28.16944882,-33.49220878,-28.90151896,10.88191756,-12.48332099,-28.90151896,10.88191756,-12.48332099,-65.65754044,17.5468061,-31.21974106,-65.65754044,17.5468061,-31.21974106,-38.47181086,6.52762539,-15.60987053,-38.47181086,6.52762539,-15.60987053,-33.78961227,-4.74320443,-20.9860106,-33.78961227,-4.74320443,-20.9860106,-78.78142279,-18.83555457,-49.57487461,-78.78142279,-18.83555457,-49.57487461,-62.59962247,-28.97777627,-17.93571836,-62.59962247,-28.97777627,-17.93571836,-33.8963725,-17.28753126,-9.30339133]},{name:"Male Water Snake",iau:"Hyi",segments:[1.63190635,-2.72238582,-6.74877158,9.86006966,-11.55298185,-64.5518095,9.86006966,-11.55298185,-64.5518095,13.32215135,-7.10718092,-44.39700353,13.32215135,-7.10718092,-44.39700353,12.7349701,-7.6028534,-40.31723766,12.7349701,-7.6028534,-40.31723766,8.02226859,-2.58512267,-17.4705488]},{name:"Indian",iau:"Ind",segments:[13.79494665,-20.29969485,-17.69169498,13.0857537,-23.5025017,-14.15335599,13.0857537,-23.5025017,-14.15335599,64.06376274,-121.5770229,-111.9075965,64.06376274,-121.5770229,-111.9075965,13.79494665,-20.29969485,-17.69169498]},{name:"Lesser Lion",iau:"LMi",segments:[-24.05918003,13.40603439,12.80360167,-34.8190859,24.7988759,19.99466562,-34.8190859,24.7988759,19.99466562,-19.82689955,16.05216291,10.35574215,-19.82689955,16.05216291,10.35574215,-37.92275826,39.51653595,20.74961295,-19.82689955,16.05216291,10.35574215,-24.05918003,13.40603439,12.80360167]},{name:"Lizard",iau:"Lac",segments:[147.71802738,-15.5031103,145.42268247,237.92336131,5.97886741,260.05518105,237.92336131,5.97886741,260.05518105,418.63542072,38.28380764,526.76462405,418.63542072,38.28380764,526.76462405,469.4853154,48.29313172,633.69634153,469.4853154,48.29313172,633.69634153,28.96252481,4.40004655,42.72696853,28.96252481,4.40004655,42.72696853,18.78980019,2.6918829,25.45468873,18.78980019,2.6918829,25.45468873,418.63542072,38.28380764,526.76462405]},{name:"Lion",iau:"Leo",segments:[-10.63026845,1.56327477,2.33347356,-46.50933091,13.84070103,8.2739177,-46.50933091,13.84070103,8.2739177,-21.01651352,12.21642042,.198269,-21.01651352,12.21642042,.198269,-469.86714103,294.68869675,47.21441879,-469.86714103,294.68869675,47.21441879,-34.55218533,20.33019777,6.29885347,-34.55218533,20.33019777,6.29885347,-16.44107517,5.5591576,4.43817521,-16.44107517,5.5591576,4.43817521,-10.63026845,1.56327477,2.33347356,-34.55218533,20.33019777,6.29885347,-58.84013728,37.38895711,14.64902848,-58.84013728,37.38895711,14.64902848,-29.26755403,23.33473563,8.19766039,-29.26755403,23.33473563,8.19766039,-53.19709664,43.53529598,11.76650231,-16.44107517,5.5591576,4.43817521,-46.50933091,13.84070103,8.2739177]},{name:"Hare",iau:"Lep",segments:[-1.33450285,40.18760024,-31.82979951,.22877192,11.85038535,-9.12799952,.22877192,11.85038535,-9.12799952,1.22774263,17.49342599,-13.81019811,1.22774263,17.49342599,-13.81019811,76.8771601,507.1638378,-446.81638953,76.8771601,507.1638378,-446.81638953,10.21085327,39.18862954,-32.85164741,76.8771601,507.1638378,-446.81638953,1.24299409,25.14965951,-24.57010398,1.24299409,25.14965951,-24.57010398,.55667833,6.18446751,-6.38273651,.55667833,6.18446751,-6.38273651,6.18446751,33.95737835,-33.23293394,6.18446751,33.95737835,-33.23293394,13.97033845,43.14638371,-45.29683974,76.8771601,507.1638378,-446.81638953,6.18446751,33.95737835,-33.23293394,10.21085327,39.18862954,-32.85164741,51.18718201,236.32029086,-176.89510019,10.21085327,39.18862954,-32.85164741,28.28383478,112.63966664,-83.79152779,13.97033845,43.14638371,-45.29683974,10.21085327,39.18862954,-32.85164741,28.28383478,112.63966664,-83.79152779,14.26774195,56.20926023,-40.18760024,51.18718201,236.32029086,-176.89510019,18.40088793,86.51391362,-62.71400843]},{name:"Scales",iau:"Lib",segments:[-25.7215893,-44.32074623,3.11129808,-28.13132017,-40.38586924,3.77473665,-28.13132017,-40.38586924,3.77473665,-36.55012675,-42.59733111,8.38830366,-36.55012675,-42.59733111,8.38830366,-16.41057224,-16.45632663,.13726315,-16.41057224,-16.45632663,.13726315,-50.07817283,-61.15835938,-10.60739126,-50.07817283,-61.15835938,-10.60739126,-28.13132017,-40.38586924,3.77473665]},{name:"Wolf",iau:"Lup",segments:[-27.94830264,-54.47059365,-14.33637352,-24.74549579,-57.94030107,-17.53155464,-24.74549579,-57.94030107,-17.53155464,-51.54993883,-114.56135075,-39.4784073,-51.54993883,-114.56135075,-39.4784073,-27.94830264,-54.47059365,-14.33637352,-51.54993883,-114.56135075,-39.4784073,-57.39124847,-105.68500034,-46.75335429,-57.39124847,-105.68500034,-46.75335429,-71.95639391,-118.1378184,-54.27995039,-71.95639391,-118.1378184,-54.27995039,-44.02334273,-69.0891192,-25.32505131,-71.95639391,-118.1378184,-54.27995039,-60.95246466,-87.13159779,-49.68926057,-57.39124847,-105.68500034,-46.75335429,-27.97117983,-53.60126036,-24.9971449,-27.97117983,-53.60126036,-24.9971449,-14.27536768,-25.49281738,-18.85080603,-14.27536768,-25.49281738,-18.85080603,-73.35190261,-99.14974921,-71.27770388,-14.27536768,-25.49281738,-18.85080603,-53.70802059,-72.9019845,-56.94895609,-73.35190261,-99.14974921,-71.27770388,-55.21791525,-65.25337671,-47.62268757,-73.35190261,-99.14974921,-71.27770388,-60.95246466,-87.13159779,-49.68926057]},{name:"Lynx",iau:"Lyn",segments:[-43.15400945,48.19461737,20.97838487,-24.72261859,28.87101604,13.90933261,-24.72261859,28.87101604,13.90933261,-123.08691756,160.14796826,77.10376206,-123.08691756,160.14796826,77.10376206,-9.90582404,14.00846711,7.53422183,-9.90582404,14.00846711,7.53422183,-47.90483961,91.79854492,44.17585735,-47.90483961,91.79854492,44.17585735,-20.27681766,72.10128279,38.07527287,-20.27681766,72.10128279,38.07527287,-7.08430372,43.97758835,31.70016209,-7.08430372,43.97758835,31.70016209,-2.15045603,39.6537991,28.45922659]},{name:"Lyre",iau:"Lyr",segments:[.96084206,-3.50783607,6.76402304,7.44271306,-22.76280583,42.05590424,7.44271306,-22.76280583,42.05590424,50.31851404,-147.10489549,230.3603896,50.31851404,-147.10489549,230.3603896,43.10825506,-107.12626342,164.99030718,43.10825506,-107.12626342,164.99030718,44.48088657,-111.97622808,203.05795432,44.48088657,-111.97622808,203.05795432,7.44271306,-22.76280583,42.05590424]},{name:"Table Mountain",iau:"Men",segments:[.94559059,-5.60491199,-32.18820885,15.44210446,-13.32977708,-142.0139809]},{name:"Microscope",iau:"Mic",segments:[33.3473199,-37.12205654,-13.97796418,46.87536598,-59.07653493,-19.73539078,46.87536598,-59.07653493,-19.73539078,68.05201984,-94.95559739,-32.27971761]},{name:"Unicorn",iau:"Mon",segments:[-12.61295841,169.73351162,-96.92303588,-25.8207238,177.32111356,-104.56401794,-25.8207238,177.32111356,-104.56401794,-39.15812661,110.35957319,-49.04107347,-39.15812661,110.35957319,-49.04107347,-4.2856606,39.1047465,-13.32977708,-4.2856606,39.1047465,-13.32977708,-6.93941484,165.68424867,-63.39269845,-39.15812661,110.35957319,-49.04107347,-163.75795862,232.68018686,-118.36299168,-163.75795862,232.68018686,-118.36299168,-18.83555457,33.59134328,-22.64079414]},{name:"Fly",iau:"Mus",segments:[-38.25066467,-45.83064088,-86.02586686,-16.61646697,-14.44313375,-35.93244257,-16.61646697,-14.44313375,-35.93244257,-35.31475839,-48.63690974,-99.51578428,-35.31475839,-48.63690974,-99.51578428,-33.995507,-41.0493078,-80.7031069,-33.995507,-41.0493078,-80.7031069,-38.25066467,-45.83064088,-86.02586686]},{name:"Carpenter's Square",iau:"Nor",segments:[-37.25931969,-114.75199402,-77.87396085,-11.50722747,-35.55115604,-20.09380012,-11.50722747,-35.55115604,-20.09380012,-50.75686285,-164.65477504,-82.12911852,-50.75686285,-164.65477504,-82.12911852,-22.82381168,-59.06128347,-33.53796316,-22.82381168,-59.06128347,-33.53796316,-11.50722747,-35.55115604,-20.09380012,-22.82381168,-59.06128347,-33.53796316,-37.25931969,-114.75199402,-77.87396085]},{name:"Octant",iau:"Oct",segments:[3.48495888,-9.7456837,-16.41819797,6.5047482,-19.99466562,-40.65276981,6.5047482,-19.99466562,-40.65276981,-8.12902882,-41.93389255,-81.47330569,-8.12902882,-41.93389255,-81.47330569,3.48495888,-9.7456837,-16.41819797]},{name:"Serpent Bearer",iau:"Oph",segments:[-1.58615196,-11.97239704,8.7238358,-1.83017534,-22.44252515,11.94189411,-5.60491199,-26.28589337,3.39345012,-1.83017534,-22.44252515,11.94189411,-1.58615196,-11.97239704,8.7238358,-7.14530957,-21.74858366,14.21436183,-7.14530957,-21.74858366,14.21436183,-14.02371857,-28.13132017,9.27288841,-14.02371857,-28.13132017,9.27288841,-46.92112036,-123.7198532,26.65955417,-46.92112036,-123.7198532,26.65955417,-5.60491199,-26.28589337,3.39345012,-5.60491199,-26.28589337,3.39345012,-14.29061914,-124.90184144,-1.50226893]},{name:"Hunter",iau:"Ori",segments:[18.91943761,203.21809466,-96.44261485,62.7751003,547.87910639,-251.39059208,62.7751003,547.87910639,-251.39059208,25.86647818,192.90048117,-84.84387862,-3.7220108,261.57089218,-17.12890921,-11.15644386,217.93575472,-35.34526131,-11.15644386,217.93575472,-35.34526131,-5.90994121,182.8650197,-27.8644196,-5.90994121,182.8650197,-27.8644196,.198269,8.6475785,-.48042103,-11.15644386,217.93575472,-35.34526131,-.48804676,46.13567011,-11.32420994,-.48804676,46.13567011,-11.32420994,3.18755539,146.70380521,-42.14741301,3.18755539,146.70380521,-42.14741301,18.91943761,203.21809466,-96.44261485,18.91943761,203.21809466,-96.44261485,10.44725092,165.94352351,-108.27012301,10.44725092,165.94352351,-108.27012301,51.60106652,220.51444443,-136.738993,51.60106652,220.51444443,-136.738993,25.86647818,192.90048117,-84.84387862,25.86647818,192.90048117,-84.84387862,11.65974208,73.16888507,-22.38914503,11.65974208,73.16888507,-22.38914503,35.90746212,325.60156721,-77.85493132,35.90746212,325.60156721,-77.85493132,3.18755539,146.70380521,-42.14741301,11.65974208,73.16888507,-22.38914503,2.40210514,7.35883003,-2.12757884,2.40210514,7.35883003,-2.12757884,76.00901288,235.34003241,-74.53496877,76.00901288,235.34003241,-74.53496877,53.73089778,168.04059942,-63.9036224,53.73089778,168.04059942,-63.9036224,62.91227742,212.91039825,-84.56172658,2.40210514,7.35883003,-2.12757884,19.75826798,62.17258155,-15.64037345,19.75826798,62.17258155,-15.64037345,10.218479,34.69707421,-7.93075982,-5.90994121,182.8650197,-27.8644196,-.48804676,46.13567011,-11.32420994]},{name:"Peacock",iau:"Pav",segments:[17.85183533,-40.43924935,-32.43223223,3.02741505,-5.54390614,-6.77164877,3.02741505,-5.54390614,-6.77164877,11.17169532,-26.98746058,-30.19789316,11.17169532,-26.98746058,-30.19789316,1.31162566,-4.13314598,-4.29328633,1.31162566,-4.13314598,-4.29328633,17.85183533,-40.43924935,-32.43223223,1.31162566,-4.13314598,-4.29328633,4.72032724,-19.62100482,-24.82175309,4.72032724,-19.62100482,-24.82175309,3.92725126,-43.8403252,-49.19358808,3.92725126,-43.8403252,-49.19358808,18.14161309,-135.53973562,-132.84785272,18.14161309,-135.53973562,-132.84785272,1.31162566,-4.13314598,-4.29328633,18.14161309,-135.53973562,-132.84785272,35.45318017,-258.64223077,-212.17011493,35.45318017,-258.64223077,-212.17011493,10.9658006,-178.28195561,-140.18380555,10.9658006,-178.28195561,-140.18380555,.67869002,-31.32650129,-26.51466528,.67869002,-31.32650129,-26.51466528,35.45318017,-258.64223077,-212.17011493,.67869002,-31.32650129,-26.51466528,-2.99691212,-84.67611254,-74.46525927]},{name:"Winged Horse",iau:"Peg",segments:[138.68153663,22.35101638,31.39513287,38.31167052,-4.37716936,13.58142619,51.43555287,-.56430406,31.07485218,49.0486992,-3.67560215,34.58268825,49.0486992,-3.67560215,34.58268825,65.6727919,-12.33843211,58.19195018,51.43555287,-.56430406,31.07485218,29.96912124,-2.94353201,16.95962485,29.96912124,-2.94353201,16.95962485,101.17056782,-12.32318064,56.01861696,101.17056782,-12.32318064,56.01861696,9.47878313,-2.64612852,6.70301719,9.47878313,-2.64612852,6.70301719,25.6224548,-9.86769539,20.42170654,38.31167052,-4.37716936,13.58142619,15.23620973,-3.25618696,5.18549681,15.23620973,-3.25618696,5.18549681,57.96317826,-14.29061914,19.02619784,57.96317826,-14.29061914,19.02619784,23.99817419,-10.26423338,7.64860779,23.99817419,-10.26423338,7.64860779,172.76855239,-92.30946887,79.53637012,25.97323841,6.62675989,12.88748471,51.43555287,-.56430406,31.07485218,25.97323841,6.62675989,12.88748471,138.68153663,22.35101638,31.39513287,51.43555287,-.56430406,31.07485218,38.31167052,-4.37716936,13.58142619]},{name:"Hero",iau:"Per",segments:[156.08458827,283.25153434,69.83138161,114.96217028,226.83680223,50.96991902,114.96217028,226.83680223,50.96991902,167.12836978,357.95851998,105.43903757,167.12836978,357.95851998,105.43903757,72.99349327,161.49009684,61.41763422,72.99349327,161.49009684,61.41763422,60.59405532,128.78333831,73.46628857,60.59405532,128.78333831,73.46628857,62.8817745,118.67161954,77.9349667,62.8817745,118.67161954,77.9349667,29.14554234,50.5204652,40.1265944,29.14554234,50.5204652,40.1265944,126.23350611,207.63246495,186.33384399,62.8817745,118.67161954,77.9349667,14.19148464,21.16902814,10.51588249,14.19148464,21.16902814,10.51588249,50.77211431,72.26904886,33.15667663,50.77211431,72.26904886,33.15667663,22.32813919,28.4134722,13.8330753]},{name:"Phoenix",iau:"Phe",segments:[48.61403255,-15.44210446,-73.20701373,985.92076452,-166.06345585,-1118.20533656,985.92076452,-166.06345585,-1118.20533656,17.21889969,-4.77370735,-15.9759056,17.21889969,-4.77370735,-15.9759056,48.61403255,-15.44210446,-73.20701373,985.92076452,-166.06345585,-1118.20533656,26.49178809,-2.95878347,-34.8419631,26.49178809,-2.95878347,-34.8419631,62.32509616,1.43363735,-81.44280277,62.32509616,1.43363735,-81.44280277,985.92076452,-166.06345585,-1118.20533656,985.92076452,-166.06345585,-1118.20533656,50.45183363,-1.63190635,-55.2560439,50.45183363,-1.63190635,-55.2560439,17.21889969,-4.77370735,-15.9759056,17.21889969,-4.77370735,-15.9759056,19.07957795,-4.9338477,-16.91387046,19.07957795,-4.9338477,-16.91387046,30.83845453,-11.43859589,-29.57258325,30.83845453,-11.43859589,-29.57258325,17.21889969,-4.77370735,-15.9759056]},{name:"Painter's Easel",iau:"Pic",segments:[-2.90540336,2.10470164,-29.38193999,1.40313443,10.23373046,-55.94998539,1.40313443,10.23373046,-55.94998539,.68631575,5.23125119,-18.91181188]},{name:"Southern Fish",iau:"PsA",segments:[6.45136808,-3.1646782,-2.77576594,141.48017976,-77.3630369,-50.13917867,141.48017976,-77.3630369,-50.13917867,191.23105078,-147.94293881,-66.00945285,191.23105078,-147.94293881,-66.00945285,70.7820314,-62.38610201,-28.0398114,70.7820314,-62.38610201,-28.0398114,13.80257238,-10.53113395,-6.25309909,13.80257238,-10.53113395,-6.25309909,35.43677008,-22.8543146,-16.49445528,35.43677008,-22.8543146,-16.49445528,42.28467616,-22.29763626,-20.92500476]},{name:"Fishes",iau:"Psc",segments:[96.778147,49.76551787,46.37206776,105.45622842,52.48027796,32.67625561,96.778147,49.76551787,46.37206776,82.36551617,45.25871109,29.57258325,82.36551617,45.25871109,29.57258325,105.45622842,52.48027796,32.67625561,105.45622842,52.48027796,32.67625561,101.73487189,51.42792714,10.72940295,101.73487189,51.42792714,10.72940295,70.60663959,37.137308,-2.25721626,70.60663959,37.137308,-2.25721626,39.73005641,22.36626784,-7.26732126,39.73005641,22.36626784,-7.26732126,52.70904988,27.46025588,-8.2739177,52.70904988,27.46025588,-8.2739177,100.75877837,48.07260568,-9.16612818,100.75877837,48.07260568,-9.16612818,98.53969077,42.10165862,-5.73454941,98.53969077,42.10165862,-5.73454941,53.54025452,16.90624473,1.07522801,53.54025452,16.90624473,1.07522801,89.24392517,22.49590526,3.50021034,89.24392517,22.49590526,3.50021034,139.6728816,19.57525044,13.51279462,139.6728816,19.57525044,13.51279462,32.79064156,1.47939174,3.66035069,32.79064156,1.47939174,3.66035069,13.53567181,-.55667833,1.70053792,13.53567181,-.55667833,1.70053792,31.94418547,-1.90643265,1.91405838,31.94418547,-1.90643265,1.91405838,48.69791559,-6.06245582,3.80523957,48.69791559,-6.06245582,3.80523957,40.54600958,-6.09295875,5.22362546,40.54600958,-6.09295875,5.22362546,51.13814938,-4.30091206,8.15953174,51.13814938,-4.30091206,8.15953174,13.53567181,-.55667833,1.70053792]},{name:"Stern",iau:"Pup",segments:[-9.36439717,10.63026845,-13.33740281,-25.66058346,35.34526131,-43.68018486,-25.66058346,35.34526131,-43.68018486,-45.71625493,78.23237019,-148.01543088,-45.71625493,78.23237019,-148.01543088,-13.558549,43.9394597,-103.64130454,-13.558549,43.9394597,-103.64130454,-7.31307564,13.90933261,-50.93988038,-7.31307564,13.90933261,-50.93988038,-16.22755471,20.26156619,-52.69379842,-16.22755471,20.26156619,-52.69379842,-130.67500288,115.40527577,-282.80686631,-130.67500288,115.40527577,-282.80686631,-9.36439717,10.63026845,-13.33740281]},{name:"Compass",iau:"Pyx",segments:[-62.0353184,40.59176396,-92.06544549,-133.35115094,88.26020592,-183.45982669,-133.35115094,88.26020592,-183.45982669,-38.64720266,26.59854832,-44.19873454]},{name:"Reticle",iau:"Ret",segments:[10.09646731,1.32687712,-48.08785714,4.11026879,1.46414027,-17.9204669,4.11026879,1.46414027,-17.9204669,40.01220844,4.94909916,-160.62838928,40.01220844,4.94909916,-160.62838928,7.80874813,-1.18198824,-31.89080535,7.80874813,-1.18198824,-31.89080535,10.09646731,1.32687712,-48.08785714]},{name:"Sculptor",iau:"Scl",segments:[44.05384566,-18.48477097,-29.51920314,182.42272733,1.5709005,-116.27714013,182.42272733,1.5709005,-116.27714013,47.97347118,-20.36832642,-25.06577647,47.97347118,-20.36832642,-25.06577647,44.05384566,-18.48477097,-29.51920314]},{name:"Scorpion",iau:"Sco",segments:[-16.05216291,-169.32934789,-41.74324928,-8.78484165,-142.3876417,-39.95120259,-8.78484165,-142.3876417,-39.95120259,-29.20274684,-674.93473911,-202.86473423,-29.20274684,-674.93473911,-202.86473423,-6.65726281,-86.46815923,-30.96046622,-6.65726281,-86.46815923,-30.96046622,-3.38582438,-20.78774161,-7.74011656,-3.38582438,-20.78774161,-7.74011656,-314.81036507,-1377.05331296,-504.59747059,-314.81036507,-1377.05331296,-504.59747059,-123.14149305,-499.67079567,-141.97406052,-123.14149305,-499.67079567,-141.97406052,-4.84233893,-18.50002243,-3.97300564,-4.84233893,-18.50002243,-3.97300564,-45.9602783,-137.01912736,-15.49548457,-45.9602783,-137.01912736,-15.49548457,-58.54273379,-158.79058821,-13.52804608,-58.54273379,-158.79058821,-13.52804608,-69.33314258,-133.59517432,-5.21599973,-58.54273379,-158.79058821,-13.52804608,-81.29791389,-159.14899755,-17.12739092,-58.54273379,-158.79058821,-13.52804608,-55.88135381,-110.58071938,2.18095895]},{name:"Shield",iau:"Sct",segments:[41.95676974,-191.1389374,64.28490893,80.73983662,-368.01571879,116.81432783,80.73983662,-368.01571879,116.81432783,128.92106237,-546.52189164,71.01790936,128.92106237,-546.52189164,71.01790936,11.86563681,-94.65819389,14.58802263,11.86563681,-94.65819389,14.58802263,8.55606973,-53.92916678,14.54989398,8.55606973,-53.92916678,14.54989398,41.95676974,-191.1389374,64.28490893]},{name:"Serpent",iau:"Ser",segments:[-27.9635541,-41.36196276,14.54226825,-11.75125085,-16.37244359,8.97548491,-11.75125085,-16.37244359,8.97548491,-12.62058414,-16.19705179,9.79906382,-12.62058414,-16.19705179,9.79906382,-40.69852419,-45.74675785,33.77436081,-40.69852419,-45.74675785,33.77436081,-24.60823263,-29.27517976,26.11812729,-24.60823263,-29.27517976,26.11812729,-5.52102895,-7.26732126,6.43611662,-5.52102895,-7.26732126,6.43611662,-60.42628925,-71.43784423,70.78965713,-60.42628925,-71.43784423,70.78965713,-24.60823263,-29.27517976,26.11812729,9.98208135,-35.37576424,18.62965985,1.7691695,-17.78320375,6.65726281,1.7691695,-17.78320375,6.65726281,-3.85861968,-47.88958815,8.89922761,-3.85861968,-47.88958815,8.89922761,-2.85964897,-29.98437271,4.20177756,-2.85964897,-29.98437271,4.20177756,-10.37861934,-60.70081555,11.14881813]},{name:"Sextant",iau:"Sex",segments:[-103.96921095,38.87597458,-18.21787039,-115.27816943,55.93473392,-25.1725367]},{name:"Arrow",iau:"Sge",segments:[55.18741233,-91.0969777,83.8677851,71.75049918,-108.87255573,105.25795942,71.75049918,-108.87255573,105.25795942,52.68617269,-87.43662702,82.05286122,71.75049918,-108.87255573,105.25795942,41.17894522,-54.56210242,55.73646493,41.17894522,-54.56210242,55.73646493,23.38811574,-28.79475873,30.34278204]},{name:"Archer",iau:"Sgr",segments:[10.11171877,-126.22109283,-14.36687644,2.56224548,-23.14409236,-.86933329,2.57749694,-40.64514408,-9.68467786,3.82049103,-42.95574045,-8.41880658,3.82049103,-42.95574045,-8.41880658,.67869002,-30.7545715,-3.77473665,.67869002,-30.7545715,-3.77473665,-17.09951517,-354.94501806,-27.47594857,.67869002,-30.7545715,-3.77473665,10.11171877,-126.22109283,-14.36687644,10.11171877,-126.22109283,-14.36687644,3.82049103,-42.95574045,-8.41880658,3.82049103,-42.95574045,-8.41880658,6.3293564,-26.07237291,-3.37819865,6.3293564,-26.07237291,-3.37819865,14.50413959,-80.77936421,-5.67354356,14.50413959,-80.77936421,-5.67354356,10.11171877,-126.22109283,-14.36687644,14.50413959,-80.77936421,-5.67354356,2.56224548,-23.14409236,-.86933329,2.56224548,-23.14409236,-.86933329,84.01486361,-1496.39033027,61.29830474,6.3293564,-26.07237291,-3.37819865,9.00598783,-34.00313273,-3.13417528,9.00598783,-34.00313273,-3.13417528,14.9540577,-68.08252276,-4.20177756,14.9540577,-68.08252276,-4.20177756,14.50413959,-80.77936421,-5.67354356,14.9540577,-68.08252276,-4.20177756,27.65089914,-115.60607584,3.44683023,27.65089914,-115.60607584,3.44683023,10.8666661,-40.56126104,.63293564,10.8666661,-40.56126104,.63293564,46.37206776,-139.82539622,8.38830366,46.37206776,-139.82539622,8.38830366,13.2840227,-37.6101033,2.94353201,9.00598783,-34.00313273,-3.13417528,29.99962417,-75.29646391,-4.34666644,29.99962417,-75.29646391,-4.34666644,62.12682717,-121.58464863,-17.02063069,62.12682717,-121.58464863,-17.02063069,83.78390206,-180.7450666,-51.10002073,83.78390206,-180.7450666,-51.10002073,22.14512165,-53.31910833,-21.77146085,22.14512165,-53.31910833,-21.77146085,14.99981208,-50.20781025,-17.40954295,22.14512165,-53.31910833,-21.77146085,10.79040879,-38.04476995,-16.38006932]},{name:"Bull",iau:"Tau",segments:[5.2846313,40.53075812,3.85099395,37.22881677,115.63657876,1.51752039,37.22881677,115.63657876,1.51752039,16.39532078,41.55260602,-2.00556715,7.02329788,19.08720368,-1.9445613,12.39181222,135.76088181,-5.22362546,18.82030311,41.8957639,-4.61356701,19.29309841,45.17482805,-3.40870158,18.82030311,41.8957639,-4.61356701,60.40341205,107.35503534,-17.22652542,60.40341205,107.35503534,-17.22652542,41.03405634,50.97038331,-10.75990587,7.02329788,19.08720368,-1.9445613,16.39532078,41.55260602,-2.00556715,7.02329788,19.08720368,-1.9445613,17.11213946,42.27705043,-4.66694713,17.11213946,42.27705043,-4.66694713,18.82030311,41.8957639,-4.61356701,16.39532078,41.55260602,-2.00556715,18.08060724,43.73356497,-3.05029224,18.08060724,43.73356497,-3.05029224,19.29309841,45.17482805,-3.40870158,19.29309841,45.17482805,-3.40870158,60.78469858,106.80598273,8.41118085]},{name:"Telescope",iau:"Tel",segments:[3.08079516,-33.59134328,-16.28093482,6.99279496,-78.77379706,-32.99653629]},{name:"Southern Triangle",iau:"Tra",segments:[-13.12388236,-81.9232238,-86.36902474,-13.68056069,-36.38236068,-43.32177552,-13.68056069,-36.38236068,-43.32177552,-2.88252617,-8.77721592,-8.30442062,-2.88252617,-8.77721592,-8.30442062,-13.12388236,-81.9232238,-86.36902474]},{name:"Triangle",iau:"Tri",segments:[24.51672387,23.27372978,11.60636197,26.91120327,24.53197533,13.67293496,26.91120327,24.53197533,13.67293496,14.92355478,11.18694678,5.62778918,14.92355478,11.18694678,5.62778918,24.51672387,23.27372978,11.60636197]},{name:"Toucan",iau:"Tuc",segments:[25.27929693,-30.48004519,-40.15709732,11.73599939,-9.69230359,-16.8223617,11.73599939,-9.69230359,-16.8223617,3.63747349,-2.80626886,-7.27494699,11.73599939,-9.69230359,-16.8223617,19.72013932,-13.0094964,-36.87040743]},{name:"Great Bear",iau:"UMa",segments:[-18.53052535,.99134498,25.90460684,-14.11522733,3.59934484,21.908724,-14.11522733,3.59934484,21.908724,-13.77969519,5.3075085,20.55896969,-13.77969519,5.3075085,20.55896969,-13.4594145,7.44271306,19.44561302,-13.4594145,7.44271306,19.44561302,-17.29515699,17.18077103,28.72612716,-17.29515699,17.18077103,28.72612716,-13.88645542,11.88088827,18.36275928,-13.88645542,11.88088827,18.36275928,-15.09132085,8.548444,18.69829142,-15.09132085,8.548444,18.69829142,-13.4594145,7.44271306,19.44561302,-15.09132085,8.548444,18.69829142,-40.80528442,20.20056035,40.34774059,-40.80528442,20.20056035,40.34774059,-29.96912124,18.14161309,25.02764782,-29.96912124,18.14161309,25.02764782,-45.63237189,38.9064775,34.46067657,-29.96912124,18.14161309,25.02764782,-38.31929625,30.76982296,27.23910969,-13.88645542,11.88088827,18.36275928,-77.66806612,94.72682547,96.6027552,-77.66806612,94.72682547,96.6027552,-6.72589439,8.83822176,7.74774229,-6.72589439,8.83822176,7.74774229,-53.66989194,79.75751631,53.24285102,-6.72589439,8.83822176,7.74774229,-6.83265461,10.60739126,7.16056103,-77.66806612,94.72682547,96.6027552,-15.3277185,20.89450183,23.8761625,-15.3277185,20.89450183,23.8761625,-16.6240927,39.1810038,36.02395134,-16.6240927,39.1810038,36.02395134,-8.57894692,14.3821279,16.85286462,-8.57894692,14.3821279,16.85286462,-17.29515699,17.18077103,28.72612716]},{name:"Little Bear",iau:"UMi",segments:[1.34212858,53.71564632,121.25674221,-.40416372,19.17108672,52.53365808,-.40416372,19.17108672,52.53365808,-4.4610524,27.71953072,97.41870837,-4.4610524,27.71953072,97.41870837,-13.0094964,25.09627939,106.40944474,-13.0094964,25.09627939,106.40944474,-3.18755539,5.44477165,29.25230257,-3.18755539,5.44477165,29.25230257,-30.26652474,23.99054846,146.60467072,-30.26652474,23.99054846,146.60467072,-8.06039724,8.548444,38.38792782,-8.06039724,8.548444,38.38792782,-13.0094964,25.09627939,106.40944474]},{name:"Sails",iau:"Vel",segments:[-124.30002058,79.64741685,-309.01227507,-54.8061258,14.9540577,-129.26375934,-54.8061258,14.9540577,-129.26375934,-9.39490009,1.83780107,-22.77043156,-9.39490009,1.83780107,-22.77043156,-77.66044039,1.50226893,-157.31119647,-77.66044039,1.50226893,-157.31119647,-261.72022477,-27.26113417,-454.85708649,-261.72022477,-27.26113417,-454.85708649,-21.2605369,-3.94250272,-26.78156585,-21.2605369,-3.94250272,-26.78156585,-16.64696989,-2.15808176,-20.78011588,-16.64696989,-2.15808176,-20.78011588,-21.01651352,1.10573094,-23.58638473,-21.01651352,1.10573094,-23.58638473,-11.38521578,3.10367235,-14.65665421,-11.38521578,3.10367235,-14.65665421,-88.66436964,30.20551889,-138.19348987,-88.66436964,30.20551889,-138.19348987,-124.30002058,79.64741685,-309.01227507]},{name:"Maiden",iau:"Vir",segments:[-100.72827545,10.30236204,8.12140309,-114.59185367,-9.21188256,2.27246772,-114.59185367,-9.21188256,2.27246772,-11.81988242,-2.11232738,.58718126,-11.81988242,-2.11232738,.58718126,-69.98895541,-30.9299633,-2.74526301,-69.98895541,-30.9299633,-2.74526301,-71.03368051,-48.81230155,4.38479509,-71.03368051,-48.81230155,4.38479509,-18.15686455,-12.15541457,2.76051448,-18.15686455,-12.15541457,2.76051448,-14.44313375,-12.17829176,3.21805831,-69.98895541,-30.9299633,-2.74526301,-20.93263049,-8.51794108,3.43157877,-20.93263049,-8.51794108,3.43157877,-59.93824249,-31.53239602,15.71663076,-59.93824249,-31.53239602,15.71663076,-30.80032588,-24.51672387,12.10966019,-20.93263049,-8.51794108,3.43157877,-55.66783335,-11.28608128,8.60182411,-55.66783335,-11.28608128,8.60182411,-31.31124983,-5.4829003,9.23475975,-55.66783335,-11.28608128,8.60182411,-11.81988242,-2.11232738,.58718126]},{name:"Flying Fish",iau:"Vol",segments:[-5.72692368,-5.87943829,-43.80219655,-4.02638575,-3.36294719,-40.51550666,-4.02638575,-3.36294719,-40.51550666,-38.16678164,-17.12739092,-193.15975601,-38.16678164,-17.12739092,-193.15975601,-5.72692368,-5.87943829,-43.80219655,-38.16678164,-17.12739092,-193.15975601,-25.98086414,-9.15850245,-208.61711193,-38.16678164,-17.12739092,-193.15975601,-7.95363701,-2.15808176,-32.05857143,-7.95363701,-2.15808176,-32.05857143,-11.01918071,-4.14077171,-36.65688698,-11.01918071,-4.14077171,-36.65688698,-38.16678164,-17.12739092,-193.15975601]},{name:"Fox",iau:"Vul",segments:[30.56392823,-53.99779835,63.93412532,33.18717956,-38.38030209,54.39433634]}],wo=[{hip:677,pos:[25.97323841,6.62675989,12.88748471],mag:2.06,ci:-.043,trueDistPc:29.74},{hip:746,pos:[8.60182411,6.04720436,13.0857537],mag:2.27,ci:.339,trueDistPc:16.78},{hip:765,pos:[30.83845453,-11.43859589,-29.57258325],mag:3.87,ci:.917,trueDistPc:44.23},{hip:1067,pos:[138.68153663,22.35101638,31.39513287],mag:2.84,ci:-.146,trueDistPc:143.94},{hip:1562,pos:[84.15756286,1.34212858,-14.87780039],mag:3.55,ci:1.087,trueDistPc:85.47},{hip:1599,pos:[3.63747349,-2.80626886,-7.27494699],mag:4.23,ci:.535,trueDistPc:8.61},{hip:1645,pos:[139.6728816,19.57525044,13.51279462],mag:5.37,ci:1.209,trueDistPc:141.68},{hip:2021,pos:[1.63190635,-2.72238582,-6.74877158],mag:2.79,ci:.577,trueDistPc:7.46},{hip:2072,pos:[17.21889969,-4.77370735,-15.9759056],mag:3.94,ci:.195,trueDistPc:23.97},{hip:2081,pos:[19.07957795,-4.9338477,-16.91387046],mag:2.38,ci:.976,trueDistPc:25.97},{hip:2484,pos:[19.72013932,-13.0094964,-36.87040743],mag:4.289,ci:.016,trueDistPc:43.79},{hip:3092,pos:[26.78919159,10.72177722,13.06287651],mag:3.28,ci:1.138,trueDistPc:31.67},{hip:3179,pos:[38.52519097,29.86236102,51.58044175],mag:2.23,ci:1.045,trueDistPc:70.97},{hip:3419,pos:[27.58226757,1.24299409,-10.47775384],mag:2.01,ci:.908,trueDistPc:29.53},{hip:3786,pos:[89.24392517,22.49590526,3.50021034],mag:4.44,ci:1.333,trueDistPc:92.1},{hip:3881,pos:[127.19718635,70.94217174,93.01103608],mag:4.53,ci:-.078,trueDistPc:172.81},{hip:4427,pos:[79.83377361,76.9131188,126.70151386],mag:2.39,ci:-.035,trueDistPc:168.35},{hip:4436,pos:[28.4134722,15.86151964,18.53052535],mag:3.87,ci:.152,trueDistPc:37.45},{hip:4577,pos:[182.42272733,1.5709005,-116.27714013],mag:4.27,ci:-.103,trueDistPc:216.34},{hip:4889,pos:[96.778147,49.76551787,46.37206776],mag:5.5,ci:.007,trueDistPc:118.29},{hip:4906,pos:[53.54025452,16.90624473,1.07522801],mag:4.28,ci:.866,trueDistPc:56.16},{hip:5165,pos:[985.92076452,-166.06345585,-1118.20533656],mag:3.3,ci:.807,trueDistPc:8333.33},{hip:5348,pos:[48.61403255,-15.44210446,-73.20701373],mag:4.014,ci:-.04,trueDistPc:89.22},{hip:5364,pos:[34.75808006,7.23681834,-10.25660765],mag:3.45,ci:1.036,trueDistPc:36.95},{hip:5447,pos:[46.94399755,27.55176464,26.48416236],mag:2.05,ci:1.384,trueDistPc:60.53},{hip:5742,pos:[105.45622842,52.48027796,32.67625561],mag:4.66,ci:.926,trueDistPc:122.24},{hip:6193,pos:[82.36551617,45.25871109,29.57258325],mag:4.748,ci:.085,trueDistPc:98.52},{hip:6537,pos:[31.82979951,9.26526267,-9.35677144],mag:3.59,ci:.951,trueDistPc:34.44},{hip:6686,pos:[14.42788229,15.98353133,22.61029122],mag:2.68,ci:.16,trueDistPc:30.48},{hip:6867,pos:[50.45183363,-1.63190635,-55.2560439],mag:3.42,ci:1.384,trueDistPc:74.84},{hip:7007,pos:[98.53969077,42.10165862,-5.73454941],mag:4.84,ci:1.223,trueDistPc:107.31},{hip:7083,pos:[26.49178809,-2.95878347,-34.8419631],mag:3.935,ci:.886,trueDistPc:43.87},{hip:7097,pos:[101.73487189,51.42792714,10.72940295],mag:3.62,ci:.883,trueDistPc:114.5},{hip:7588,pos:[21.06226791,-5.52102895,-36.79415013],mag:.46,ci:-.086,trueDistPc:42.75},{hip:7884,pos:[100.75877837,48.07260568,-9.16612818],mag:4.44,ci:1.214,trueDistPc:112.01},{hip:8102,pos:[3.15705247,1.01422217,-1.53277185],mag:3.5,ci:.662,trueDistPc:3.65},{hip:8198,pos:[70.60663959,37.137308,-2.25721626],mag:4.26,ci:.866,trueDistPc:79.81},{hip:8645,pos:[67.54109589,27.2162325,-26.98746058],mag:3.72,ci:1.019,trueDistPc:77.66},{hip:8796,pos:[14.92355478,11.18694678,5.62778918],mag:3.42,ci:.458,trueDistPc:19.48},{hip:8832,pos:[41.76612648,27.315367,6.26835055],mag:4.562,ci:-.028,trueDistPc:50.3},{hip:8833,pos:[52.70904988,27.46025588,-8.2739177],mag:4.604,ci:.856,trueDistPc:60.01},{hip:8837,pos:[62.32509616,1.43363735,-81.44280277],mag:4.41,ci:1.402,trueDistPc:102.57},{hip:8886,pos:[55.59920178,78.71279122,105.34946819],mag:3.37,ci:-.077,trueDistPc:142.78},{hip:8903,pos:[14.7557887,9.93632697,2.65375425],mag:2.65,ci:.16,trueDistPc:17.99},{hip:9007,pos:[9.55504044,-.62530991,-14.7557887],mag:3.71,ci:.764,trueDistPc:17.59},{hip:9236,pos:[8.02226859,-2.58512267,-17.4705488],mag:2.84,ci:.297,trueDistPc:19.4},{hip:9487,pos:[39.73005641,22.36626784,-7.26732126],mag:4.155,ci:-.062,trueDistPc:46.17},{hip:9640,pos:[76.37169192,74.32799612,56.2016345],mag:2.1,ci:1.07,trueDistPc:120.48},{hip:9884,pos:[15.73188222,12.14016311,3.49258461],mag:2.01,ci:1.036,trueDistPc:20.18},{hip:10064,pos:[26.91120327,24.53197533,13.67293496],mag:3,ci:.169,trueDistPc:38.9},{hip:10324,pos:[79.31522393,53.57838317,-7.14530957],mag:4.35,ci:.798,trueDistPc:95.98},{hip:10602,pos:[23.75415081,.41178945,-39.51653595],mag:3.57,ci:-.052,trueDistPc:46.11},{hip:10670,pos:[24.51672387,23.27372978,11.60636197],mag:4,ci:.067,trueDistPc:35.74},{hip:10826,pos:[75.12869784,46.08228999,-25.16491097],mag:6.53,ci:.985,trueDistPc:91.66},{hip:11001,pos:[12.7349701,-7.6028534,-40.31723766],mag:4.09,ci:.075,trueDistPc:42.96},{hip:11345,pos:[135.31858943,77.24102521,-73.4510371],mag:4.866,ci:.029,trueDistPc:172.25},{hip:11407,pos:[86.90282588,12.11728592,-135.17370055],mag:4.25,ci:-.069,trueDistPc:161.16},{hip:11484,pos:[47.6531905,36.52724956,-6.15396459],mag:4.3,ci:.007,trueDistPc:60.36},{hip:11767,pos:[1.34212858,53.71564632,121.25674221],mag:2.02,ci:.56,trueDistPc:132.63},{hip:11783,pos:[17.52392891,10.15747315,-11.01155498],mag:4.75,ci:.432,trueDistPc:23.05},{hip:12093,pos:[95.64191314,75.76925921,-19.72013932],mag:4.871,ci:.79,trueDistPc:123.6},{hip:12387,pos:[149.57107992,115.06464897,-48.66741267],mag:4.07,ci:-.137,trueDistPc:194.89},{hip:12390,pos:[17.67644352,11.62923916,-10.3176135],mag:4.87,ci:.441,trueDistPc:23.54},{hip:12394,pos:[13.32215135,-7.10718092,-44.39700353],mag:4.096,ci:.008,trueDistPc:46.9},{hip:12413,pos:[24.89038467,7.13005811,-35.97057122],mag:4.75,ci:.101,trueDistPc:44.32},{hip:12484,pos:[21.90109827,.94559059,-44.2902433],mag:5.21,ci:.39,trueDistPc:49.42},{hip:12486,pos:[26.32402202,8.94498199,-35.22324962],mag:4.116,ci:.898,trueDistPc:44.87},{hip:12706,pos:[18.43901658,15.16757816,-5.07111085],mag:3.47,ci:.126,trueDistPc:24.41},{hip:12770,pos:[87.16972645,58.25295603,-56.33127192],mag:4.236,ci:-.055,trueDistPc:119.02},{hip:12828,pos:[19.6896364,17.69932071,-2.57749694],mag:4.26,ci:.313,trueDistPc:26.6},{hip:12843,pos:[10.17272462,6.38273651,-7.72486509],mag:4.46,ci:.458,trueDistPc:14.28},{hip:13147,pos:[33.84299239,16.67747281,-38.87597458],mag:4.46,ci:.891,trueDistPc:54.17},{hip:13209,pos:[33.28631405,37.2364425,9.21188256],mag:3.594,ci:-.032,trueDistPc:50.79},{hip:13254,pos:[22.32813919,28.4134722,13.8330753],mag:4.14,ci:.504,trueDistPc:38.69},{hip:13268,pos:[126.23350611,207.63246495,186.33384399],mag:3.79,ci:1.487,trueDistPc:306.21},{hip:13701,pos:[29.29043122,23.51012743,-17.15789384],mag:3.87,ci:1.002,trueDistPc:41.29},{hip:13847,pos:[27.30011554,11.74362512,-40.50788093],mag:3.228,ci:.42,trueDistPc:49.43},{hip:13954,pos:[95.54277864,95.8554336,-18.50764816],mag:4.7,ci:-.052,trueDistPc:136.6},{hip:14135,pos:[53.34198552,52.0913657,-16.64696989],mag:2.53,ci:1.444,trueDistPc:76.39},{hip:14146,pos:[17.34853711,11.94189411,-16.9977535],mag:4.09,ci:.186,trueDistPc:27.06},{hip:14240,pos:[15.17520389,-.49567249,-40.52313239],mag:5.122,ci:.332,trueDistPc:43.28},{hip:14328,pos:[29.14554234,50.5204652,40.1265944],mag:2.93,ci:.645,trueDistPc:70.8},{hip:14354,pos:[50.77211431,72.26904886,33.15667663],mag:3.39,ci:1.452,trueDistPc:94.34},{hip:14576,pos:[14.19148464,21.16902814,10.51588249],mag:2.12,ci:.008,trueDistPc:27.57},{hip:14879,pos:[8.19003466,5.65066637,-9.8448182],mag:3.98,ci:.501,trueDistPc:14},{hip:15197,pos:[23.68551923,22.73230291,-15.96065414],mag:4.8,ci:.246,trueDistPc:36.5},{hip:15474,pos:[56.3770263,47.49305015,-58.64949402],mag:3.7,ci:1.427,trueDistPc:94.2},{hip:15510,pos:[2.83677178,1.46414027,-5.13211669],mag:4.27,ci:.654,trueDistPc:6.04},{hip:15863,pos:[62.8817745,118.67161954,77.9349667],mag:1.79,ci:.458,trueDistPc:155.28},{hip:15900,pos:[41.03405634,50.97038331,-10.75990587],mag:3.6,ci:.806,trueDistPc:66.32},{hip:16228,pos:[291.19555067,672.30744916,604.64082852],mag:4.22,ci:.399,trueDistPc:949.94},{hip:16537,pos:[1.89880692,2.11995311,-1.4946432],mag:3.73,ci:.798,trueDistPc:3.22},{hip:16611,pos:[54.32570477,52.8386873,-62.3327219],mag:4.25,ci:-.035,trueDistPc:98.12},{hip:17358,pos:[60.59405532,128.78333831,73.46628857],mag:3.01,ci:-.052,trueDistPc:160.17},{hip:17378,pos:[5.03298219,6.18446751,-4.3619179],mag:3.54,ci:.832,trueDistPc:9.09},{hip:17440,pos:[7.80874813,-1.18198824,-31.89080535],mag:3.833,ci:1.015,trueDistPc:32.85},{hip:17448,pos:[156.08458827,283.25153434,69.83138161],mag:3.91,ci:.05,trueDistPc:330.86},{hip:17651,pos:[8.96785918,9.73805797,-11.87326254],mag:4.2,ci:.433,trueDistPc:17.78},{hip:17678,pos:[9.86006966,-11.55298185,-64.5518095],mag:3.26,ci:1.427,trueDistPc:66.32},{hip:17797,pos:[21.80196378,18.65253704,-41.84238378],mag:4.27,ci:.042,trueDistPc:50.74},{hip:17847,pos:[60.78469858,106.80598273,8.41118085],mag:3.63,ci:-.027,trueDistPc:123.18},{hip:17874,pos:[29.05403357,25.94273549,-54.22657027],mag:4.17,ci:.857,trueDistPc:66.76},{hip:17959,pos:[20.31494631,73.98483825,90.20476723],mag:4.604,ci:.093,trueDistPc:118.42},{hip:18246,pos:[114.96217028,226.83680223,50.96991902],mag:2.85,ci:.152,trueDistPc:259.36},{hip:18505,pos:[27.27723834,84.15756286,78.36200761],mag:5.04,ci:-.035,trueDistPc:118.18},{hip:18532,pos:[72.99349327,161.49009684,61.41763422],mag:2.89,ci:-.103,trueDistPc:187.56},{hip:18597,pos:[40.01220844,4.94909916,-160.62838928],mag:4.57,ci:1.427,trueDistPc:165.61},{hip:18614,pos:[167.12836978,357.95851998,105.43903757],mag:4.06,ci:.067,trueDistPc:408.88},{hip:18724,pos:[60.40341205,107.35503534,-17.22652542],mag:3.41,ci:-.052,trueDistPc:124.38},{hip:19747,pos:[11.90376546,12.25454907,-31.76879366],mag:3.86,ci:.985,trueDistPc:36.07},{hip:19780,pos:[10.09646731,1.32687712,-48.08785714],mag:3.36,ci:.824,trueDistPc:49.16},{hip:19893,pos:[5.57440907,4.13314598,-19.2168411],mag:4.2,ci:.348,trueDistPc:20.43},{hip:19921,pos:[4.11026879,1.46414027,-17.9204669],mag:4.44,ci:.968,trueDistPc:18.44},{hip:20042,pos:[19.46086448,25.36317996,-43.94708543],mag:3.56,ci:-.052,trueDistPc:54.35},{hip:20205,pos:[18.82030311,41.8957639,-4.61356701],mag:3.65,ci:.891,trueDistPc:46.16},{hip:20455,pos:[19.29309841,45.17482805,-3.40870158],mag:3.76,ci:.883,trueDistPc:49.24},{hip:20535,pos:[30.28940193,42.4448165,-73.199388],mag:3.96,ci:1.316,trueDistPc:89.87},{hip:20648,pos:[18.08060724,43.73356497,-3.05029224],mag:4.298,ci:.11,trueDistPc:47.42},{hip:20889,pos:[16.39532078,41.55260602,-2.00556715],mag:3.53,ci:.908,trueDistPc:44.71},{hip:20894,pos:[17.11213946,42.27705043,-4.66694713],mag:3.41,ci:.211,trueDistPc:45.85},{hip:21060,pos:[56.12537719,66.84715441,-190.00270354],mag:5.059,ci:-.116,trueDistPc:209.09},{hip:21281,pos:[10.85904037,8.43405804,-49.84177518],mag:3.28,ci:-.035,trueDistPc:51.71},{hip:21393,pos:[20.07854866,34.61319118,-50.87887454],mag:3.82,ci:.883,trueDistPc:64.72},{hip:21421,pos:[7.02329788,19.08720368,-1.9445613],mag:.86,ci:1.359,trueDistPc:20.43},{hip:21444,pos:[74.32037039,173.53112545,-88.52710649],mag:3.928,ci:-.112,trueDistPc:208.5},{hip:21594,pos:[11.72837366,25.43943727,-20.35307496],mag:3.87,ci:.977,trueDistPc:34.63},{hip:21770,pos:[5.15499388,7.68673644,-18.15686455],mag:4.45,ci:.339,trueDistPc:20.38},{hip:21861,pos:[7.67911071,12.97899348,-24.64636129],mag:5.05,ci:.364,trueDistPc:28.89},{hip:21881,pos:[37.22881677,115.63657876,1.51752039],mag:4.258,ci:-.052,trueDistPc:121.49},{hip:21949,pos:[15.44210446,-13.32977708,-142.0139809],mag:5.511,ci:-.052,trueDistPc:143.47},{hip:22109,pos:[54.85188018,145.4531854,-73.71031195],mag:4,ci:-.061,trueDistPc:172.04},{hip:22449,pos:[2.40210514,7.35883003,-2.12757884],mag:3.19,ci:.424,trueDistPc:8.02},{hip:22509,pos:[19.75826798,62.17258155,-15.64037345],mag:4.35,ci:.059,trueDistPc:67.09},{hip:22549,pos:[76.00901288,235.34003241,-74.53496877],mag:3.68,ci:-.103,trueDistPc:258.3},{hip:22701,pos:[19.23971829,56.01861696,-31.21974106],mag:4.4,ci:.254,trueDistPc:66.96},{hip:22730,pos:[53.73089778,168.04059942,-63.9036224],mag:5.324,ci:1.415,trueDistPc:187.64},{hip:22783,pos:[170.82201275,1076.04715696,1030.99095824],mag:4.29,ci:.093,trueDistPc:1690.33},{hip:22845,pos:[10.218479,34.69707421,-7.93075982],mag:4.648,ci:.114,trueDistPc:37.03},{hip:23015,pos:[31.34937848,131.98614516,25.02764782],mag:2.69,ci:1.35,trueDistPc:137.95},{hip:23123,pos:[62.91227742,212.91039825,-84.56172658],mag:4.459,ci:1.235,trueDistPc:237.57},{hip:23453,pos:[131.44049585,653.83819919,219.30159168],mag:3.75,ci:1.087,trueDistPc:702.05},{hip:23685,pos:[13.97033845,43.14638371,-45.29683974],mag:3.18,ci:1.291,trueDistPc:64.1},{hip:23875,pos:[6.19971897,23.59401047,-12.89511044],mag:2.79,ci:.161,trueDistPc:27.59},{hip:23972,pos:[59.9930017,227.27909644,-144.29049772],mag:4.27,ci:-.12,trueDistPc:275.82},{hip:24244,pos:[14.26774195,56.20926023,-40.18760024],mag:4.45,ci:-.035,trueDistPc:70.55},{hip:24305,pos:[10.21085327,39.18862954,-32.85164741],mag:3.29,ci:-.043,trueDistPc:52.14},{hip:24327,pos:[28.28383478,112.63966664,-83.79152779],mag:4.44,ci:-.027,trueDistPc:143.21},{hip:24436,pos:[51.60106652,220.51444443,-136.738993],mag:.13,ci:.025,trueDistPc:264.55},{hip:24608,pos:[1.71578938,11.97239704,5.10161377],mag:.08,ci:.73,trueDistPc:13.12},{hip:24845,pos:[51.18718201,236.32029086,-176.89510019],mag:4.29,ci:-.162,trueDistPc:299.6},{hip:24873,pos:[18.40088793,86.51391362,-62.71400843],mag:5.284,ci:-.048,trueDistPc:108.43},{hip:25110,pos:[.63293564,11.63686489,17.21127396],mag:4.956,ci:.642,trueDistPc:20.79},{hip:25336,pos:[11.65974208,73.16888507,-22.38914503],mag:1.64,ci:-.137,trueDistPc:77.4},{hip:25428,pos:[5.2846313,40.53075812,3.85099395],mag:1.65,ci:-.06,trueDistPc:41.05},{hip:25606,pos:[6.18446751,33.95737835,-33.23293394],mag:2.84,ci:.747,trueDistPc:47.92},{hip:25859,pos:[8.70095861,43.52004451,-72.78759854],mag:3.87,ci:1.019,trueDistPc:85.25},{hip:25918,pos:[.94559059,-5.60491199,-32.18820885],mag:5.2,ci:1.011,trueDistPc:32.68},{hip:25930,pos:[25.86647818,192.90048117,-84.84387862],mag:2.41,ci:-.282,trueDistPc:212.31},{hip:25985,pos:[76.8771601,507.1638378,-446.81638953],mag:2.57,ci:.22,trueDistPc:680.27},{hip:26069,pos:[18.09730633,23.2658368,-339.92822607],mag:3.76,ci:.747,trueDistPc:341.2},{hip:26207,pos:[35.90746212,325.60156721,-77.85493132],mag:3.66,ci:-.103,trueDistPc:336.7},{hip:26311,pos:[62.7751003,547.87910639,-251.39059208],mag:1.69,ci:-.103,trueDistPc:606.06},{hip:26451,pos:[12.39181222,135.76088181,-5.22362546],mag:3.03,ci:-.112,trueDistPc:136.43},{hip:26634,pos:[6.44374235,46.84486305,-73.87045229],mag:2.65,ci:-.052,trueDistPc:87.71},{hip:26727,pos:[18.91943761,203.21809466,-96.44261485],mag:1.77,ci:-.129,trueDistPc:225.73},{hip:27072,pos:[.55667833,6.18446751,-6.38273651],mag:3.6,ci:.45,trueDistPc:8.91},{hip:27100,pos:[1.25061982,.61768418,-45.70100346],mag:4.36,ci:.229,trueDistPc:45.72},{hip:27288,pos:[1.22774263,17.49342599,-13.81019811],mag:3.525,ci:.145,trueDistPc:22.32},{hip:27321,pos:[.68631575,5.23125119,-18.91181188],mag:3.86,ci:.195,trueDistPc:19.63},{hip:27366,pos:[10.44725092,165.94352351,-108.27012301],mag:2.06,ci:-.103,trueDistPc:198.41},{hip:27530,pos:[1.40313443,10.23373046,-55.94998539],mag:4.494,ci:.981,trueDistPc:56.89},{hip:27628,pos:[.86933329,13.85595249,-23.27372978],mag:3.12,ci:1.036,trueDistPc:27.1},{hip:27654,pos:[1.24299409,25.14965951,-24.57010398],mag:3.85,ci:.883,trueDistPc:35.18},{hip:27890,pos:[.32028069,1.64715781,-27.26961261],mag:4.66,ci:.934,trueDistPc:27.32},{hip:27913,pos:[.198269,8.6475785,-.48042103],mag:4.4,ci:.56,trueDistPc:8.66},{hip:27989,pos:[3.18755539,146.70380521,-42.14741301],mag:.42,ci:1.622,trueDistPc:152.67},{hip:28103,pos:[.22877192,11.85038535,-9.12799952],mag:3.72,ci:.331,trueDistPc:14.96},{hip:28199,pos:[2.83755532,167.90844986,-276.42298599],mag:4.36,ci:-.103,trueDistPc:323.44},{hip:28328,pos:[.36603507,54.40196207,-123.65884735],mag:3.96,ci:1.019,trueDistPc:135.1},{hip:28360,pos:[.03812865,23.13646663,9.12037379],mag:1.9,ci:.075,trueDistPc:24.87},{hip:28380,pos:[.04575438,49.30034831,12.086783],mag:2.62,ci:-.018,trueDistPc:50.76},{hip:28614,pos:[-.48804676,46.13567011,-11.32420994],mag:4.674,ci:.257,trueDistPc:47.51},{hip:28691,pos:[-3.7220108,261.57089218,-17.12890921],mag:5.13,ci:-.043,trueDistPc:262.16},{hip:28734,pos:[-.78545025,47.54643027,-.14488888],mag:4.15,ci:.789,trueDistPc:47.55},{hip:28910,pos:[-1.33450285,40.18760024,-31.82979951],mag:4.663,ci:.087,trueDistPc:51.28},{hip:29038,pos:[-5.90994121,182.8650197,-27.8644196],mag:4.397,ci:-.083,trueDistPc:185.07},{hip:29151,pos:[-6.93941484,165.68424867,-63.39269845],mag:5.73,ci:.11,trueDistPc:177.53},{hip:29426,pos:[-11.15644386,217.93575472,-35.34526131],mag:4.48,ci:-.095,trueDistPc:221.07},{hip:29651,pos:[-12.61295841,169.73351162,-96.92303588],mag:3.96,ci:1.163,trueDistPc:195.86},{hip:29655,pos:[-12.66633852,210.95821122,-3.27906416],mag:3.28,ci:1.418,trueDistPc:211.36},{hip:29807,pos:[-3.39345012,29.87761248,-49.04107347],mag:4.37,ci:.9,trueDistPc:57.52},{hip:30060,pos:[-2.15045603,39.6537991,28.45922659],mag:4.434,ci:.074,trueDistPc:48.86},{hip:30122,pos:[-8.51031535,65.74142347,-89.16766786],mag:2.99,ci:-.095,trueDistPc:111.11},{hip:30277,pos:[-5.34563715,36.07733145,-55.54582166],mag:3.85,ci:.798,trueDistPc:66.45},{hip:30324,pos:[-14.2067361,112.67016956,-99.60729305],mag:1.97,ci:-.154,trueDistPc:151.06},{hip:30343,pos:[-6.56575404,70.71339982,-1.01422217],mag:2.87,ci:1.444,trueDistPc:71.02},{hip:30419,pos:[-4.2856606,39.1047465,-13.32977708],mag:4.398,ci:.207,trueDistPc:41.53},{hip:30438,pos:[-5.99382425,22.42727368,-91.89767942],mag:-.74,ci:.178,trueDistPc:94.79},{hip:30867,pos:[-25.8207238,177.32111356,-104.56401794],mag:3.74,ci:-.078,trueDistPc:207.47},{hip:30883,pos:[-19.74301651,165.53173406,-8.89922761],mag:4.14,ci:-.069,trueDistPc:166.94},{hip:31416,pos:[-17.46292307,84.59985524,-89.60996024],mag:4.5,ci:.041,trueDistPc:124.47},{hip:31592,pos:[-3.08079516,14.81679455,-13.77969519],mag:3.91,ci:.986,trueDistPc:20.47},{hip:31681,pos:[-5.26937984,32.85927314,-3.93487699],mag:1.92,ci:.05,trueDistPc:33.51},{hip:31685,pos:[-13.558549,43.9394597,-103.64130454],mag:3.17,ci:-.044,trueDistPc:113.39},{hip:32246,pos:[-46.02381325,262.65441114,9.63794477],mag:2.98,ci:1.248,trueDistPc:266.83},{hip:32349,pos:[-.49567249,1.96743849,-1.67766073],mag:-1.46,ci:.05,trueDistPc:2.64},{hip:32362,pos:[-3.53071327,17.8213324,-3.2409355],mag:3.36,ci:.416,trueDistPc:18.45},{hip:32607,pos:[-2.90540336,2.10470164,-29.38193999],mag:3.23,ci:.246,trueDistPc:29.6},{hip:32768,pos:[-7.31307564,13.90933261,-50.93988038],mag:2.93,ci:1.07,trueDistPc:53.31},{hip:33018,pos:[-11.22507544,57.08621924,11.3394614],mag:3.6,ci:.135,trueDistPc:59.28},{hip:33152,pos:[-165.87886577,505.68126771,-566.21082253],mag:3.87,ci:1.521,trueDistPc:777.06},{hip:33160,pos:[-18.98806919,65.41351706,-47.19564666],mag:4.08,ci:1.266,trueDistPc:82.87},{hip:33347,pos:[-245.25418499,776.78788856,-674.9294789],mag:4.385,ci:-.025,trueDistPc:1057.87},{hip:33449,pos:[-7.08430372,43.97758835,31.70016209],mag:4.35,ci:.772,trueDistPc:54.67},{hip:33579,pos:[-27.49838453,72.5283237,-97.02979611],mag:1.5,ci:-.129,trueDistPc:124.22},{hip:33856,pos:[-93.70401327,237.20039063,-306.38710211],mag:3.47,ci:1.52,trueDistPc:398.64},{hip:33977,pos:[-285.01155338,742.37265768,-827.21563698],mag:3.02,ci:-.018,trueDistPc:1147.45},{hip:34045,pos:[-34.88009175,97.91438086,-81.19115366],mag:4.12,ci:-.052,trueDistPc:131.89},{hip:34088,pos:[-84.11944457,314.15224148,-11.57757543],mag:3.79,ci:.721,trueDistPc:325.43},{hip:34444,pos:[-129.73338364,299.85331949,-368.67692242],mag:1.84,ci:.628,trueDistPc:492.61},{hip:34481,pos:[-4.02638575,-3.36294719,-40.51550666],mag:3.746,ci:.924,trueDistPc:40.85},{hip:34693,pos:[-31.69253636,114.70623963,16.20467752],mag:4.42,ci:1.121,trueDistPc:120.1},{hip:34769,pos:[-39.15812661,110.35957319,-49.04107347],mag:4.15,ci:.041,trueDistPc:126.96},{hip:35037,pos:[-80.3942029,167.56399677,-210.5206602],mag:3.82,ci:-.103,trueDistPc:280.82},{hip:35228,pos:[-25.98086414,-9.15850245,-208.61711193],mag:3.99,ci:.722,trueDistPc:210.43},{hip:35264,pos:[-45.71625493,78.23237019,-148.01543088],mag:2.7,ci:1.427,trueDistPc:173.55},{hip:35350,pos:[-9.82194101,28.89389323,-3.01216359],mag:3.559,ci:.148,trueDistPc:30.67},{hip:35550,pos:[-5.90994121,17.63831487,-.06100584],mag:3.53,ci:.339,trueDistPc:18.6},{hip:35904,pos:[-190.7620398,336.67047377,-471.23808714],mag:2.45,ci:-.018,trueDistPc:609.76},{hip:36046,pos:[-13.4594145,39.17337807,4.17890037],mag:3.79,ci:.934,trueDistPc:41.63},{hip:36145,pos:[-20.27681766,72.10128279,38.07527287],mag:4.61,ci:.036,trueDistPc:84.02},{hip:36188,pos:[-18.21024466,44.64102691,-11.56060758],mag:2.89,ci:-.027,trueDistPc:49.58},{hip:36377,pos:[-16.22755471,20.26156619,-52.69379842],mag:3.25,ci:1.342,trueDistPc:58.74},{hip:36850,pos:[-5.31513423,14.4050051,2.73001155],mag:1.58,ci:.084,trueDistPc:15.6},{hip:36962,pos:[-28.14657163,72.04027694,7.06142653],mag:4.06,ci:1.359,trueDistPc:77.66},{hip:37279,pos:[-1.47176601,3.04266651,-.96846779],mag:.37,ci:.407,trueDistPc:3.51},{hip:37447,pos:[-18.83555457,33.59134328,-22.64079414],mag:3.93,ci:.917,trueDistPc:44.67},{hip:37504,pos:[-5.72692368,-5.87943829,-43.80219655],mag:3.944,ci:.928,trueDistPc:44.57},{hip:37740,pos:[-18.14161309,41.40009141,2.43260806],mag:3.57,ci:.832,trueDistPc:45.27},{hip:37826,pos:[-4.05688868,9.45590594,1.20486543],mag:1.14,ci:.9,trueDistPc:10.36},{hip:38146,pos:[-25.66058346,35.34526131,-43.68018486],mag:5.313,ci:.682,trueDistPc:61.77},{hip:39429,pos:[-130.67500288,115.40527577,-282.80686631],mag:2.25,ci:-.179,trueDistPc:332.23},{hip:39757,pos:[-9.36439717,10.63026845,-13.33740281],mag:2.81,ci:.416,trueDistPc:19.46},{hip:39794,pos:[-38.16678164,-17.12739092,-193.15975601],mag:4.398,ci:-.059,trueDistPc:197.64},{hip:39863,pos:[-163.75795862,232.68018686,-118.36299168],mag:4.33,ci:.875,trueDistPc:308.17},{hip:39953,pos:[-124.30002058,79.64741685,-309.01227507],mag:1.83,ci:-.162,trueDistPc:342.47},{hip:40526,pos:[-54.82137726,80.49721218,-17.67644352],mag:3.52,ci:1.308,trueDistPc:98.98},{hip:40702,pos:[-2.50886537,-4.22465475,-18.85843176],mag:4.047,ci:.391,trueDistPc:19.49},{hip:40843,pos:[-9.2957656,15.49548457,2.36397648],mag:4.989,ci:.66,trueDistPc:18.22},{hip:41037,pos:[-54.83662872,6.61150843,-177.11521883],mag:1.86,ci:1.13,trueDistPc:185.53},{hip:41075,pos:[-47.90483961,91.79854492,44.17585735],mag:4.25,ci:1.368,trueDistPc:112.58},{hip:41312,pos:[-7.95363701,-2.15808176,-32.05857143],mag:3.759,ci:1.016,trueDistPc:33.1},{hip:41704,pos:[-16.6240927,39.1810038,36.02395134],mag:3.42,ci:.772,trueDistPc:55.76},{hip:42313,pos:[-34.27765903,40.41637216,-11.64449062],mag:4.131,ci:.061,trueDistPc:54.26},{hip:42402,pos:[-73.3747798,83.78390206,-29.01590492],mag:4.43,ci:1.07,trueDistPc:115.09},{hip:42515,pos:[-62.0353184,40.59176396,-92.06544549],mag:3.954,ci:.841,trueDistPc:118.21},{hip:42536,pos:[-54.8061258,14.9540577,-129.26375934],mag:3.63,ci:-.112,trueDistPc:141.2},{hip:42568,pos:[-180.186799,5.27020587,-524.74724887],mag:4.313,ci:-.061,trueDistPc:554.85},{hip:42799,pos:[-102.16953853,112.26600584,-38.5556939],mag:4.3,ci:-.12,trueDistPc:156.61},{hip:42806,pos:[-32.63050122,42.46769369,2.98166066],mag:4.652,ci:.065,trueDistPc:53.64},{hip:42828,pos:[-133.35115094,88.26020592,-183.45982669],mag:3.68,ci:-.103,trueDistPc:243.37},{hip:42911,pos:[-26.25539044,32.74488718,.05338011],mag:3.94,ci:.968,trueDistPc:41.97},{hip:42913,pos:[-9.39490009,1.83780107,-22.77043156],mag:17.336,ci:0,trueDistPc:24.7},{hip:43103,pos:[-61.92855817,84.15756286,19.22446683],mag:4.018,ci:.881,trueDistPc:106.24},{hip:43109,pos:[-26.1943846,28.74900435,-7.63335633],mag:3.38,ci:.628,trueDistPc:39.64},{hip:43234,pos:[-63.87311948,68.7154584,-19.17871245],mag:4.337,ci:.026,trueDistPc:95.76},{hip:43409,pos:[-38.64720266,26.59854832,-44.19873454],mag:4.01,ci:1.121,trueDistPc:64.46},{hip:43813,pos:[-32.325472,32.81351876,-8.92973053],mag:3.1,ci:.9,trueDistPc:46.92},{hip:44066,pos:[-37.50334307,39.32589269,-4.8347132],mag:4.249,ci:.168,trueDistPc:54.55},{hip:44127,pos:[-6.83265461,10.60739126,7.16056103],mag:3.14,ci:.211,trueDistPc:14.51},{hip:44248,pos:[-9.90582404,14.00846711,7.53422183],mag:3.96,ci:.415,trueDistPc:18.74},{hip:44382,pos:[-11.01918071,-4.14077171,-36.65688698],mag:3.99,ci:.181,trueDistPc:38.5},{hip:44471,pos:[-53.66989194,79.75751631,53.24285102],mag:3.55,ci:.05,trueDistPc:109.89},{hip:44700,pos:[-123.08691756,160.14796826,77.10376206],mag:4.539,ci:.924,trueDistPc:216.2},{hip:44816,pos:[-88.66436964,30.20551889,-138.19348987],mag:2.21,ci:1.452,trueDistPc:166.94},{hip:45080,pos:[-48.0039741,-2.8672747,-116.26188867],mag:3.4,ci:-.078,trueDistPc:125.82},{hip:45238,pos:[-8.98311064,-5.60491199,-33.04229067],mag:1.69,ci:.05,trueDistPc:34.7},{hip:45336,pos:[-27.68140207,22.99157775,-8.34254927],mag:3.881,ci:-.038,trueDistPc:36.94},{hip:45556,pos:[-90.89108298,-8.47218669,-216.26571971],mag:2.26,ci:.203,trueDistPc:234.74},{hip:45688,pos:[-24.72261859,28.87101604,13.90933261],mag:3.92,ci:.084,trueDistPc:40.47},{hip:45860,pos:[-43.15400945,48.19461737,20.97838487],mag:3.14,ci:1.367,trueDistPc:68.01},{hip:45941,pos:[-77.66044039,1.50226893,-157.31119647],mag:2.473,ci:-.077,trueDistPc:175.44},{hip:46390,pos:[-43.00149483,27.62802195,-21.04701645],mag:1.97,ci:1.283,trueDistPc:55.28},{hip:46509,pos:[-14.38975364,9.86006966,-5.23125119],mag:4.6,ci:.441,trueDistPc:18.21},{hip:46651,pos:[-11.38521578,3.10367235,-14.65665421],mag:3.6,ci:.356,trueDistPc:18.81},{hip:46733,pos:[-8.57894692,14.3821279,16.85286462],mag:3.67,ci:.33,trueDistPc:23.76},{hip:46776,pos:[-144.85075268,98.66932819,-46.86774025],mag:4.548,ci:.132,trueDistPc:181.43},{hip:46853,pos:[-6.72589439,8.83822176,7.74774229],mag:3.18,ci:.441,trueDistPc:13.54},{hip:46952,pos:[-37.92275826,39.51653595,20.74961295],mag:4.6,ci:.789,trueDistPc:58.57},{hip:47908,pos:[-53.19709664,43.53529598,11.76650231],mag:2.98,ci:.738,trueDistPc:69.74},{hip:48319,pos:[-15.3277185,20.89450183,23.8761625],mag:3.81,ci:.296,trueDistPc:35.24},{hip:48356,pos:[-62.36322482,28.16944882,-33.49220878],mag:4.11,ci:.832,trueDistPc:76.18},{hip:48402,pos:[-77.66806612,94.72682547,96.6027552],mag:4.557,ci:.088,trueDistPc:156.01},{hip:48455,pos:[-29.26755403,23.33473563,8.19766039],mag:3.88,ci:1.087,trueDistPc:38.32},{hip:48774,pos:[-261.72022477,-27.26113417,-454.85708649],mag:3.45,ci:-.035,trueDistPc:525.49},{hip:48926,pos:[-23.28135551,4.71270151,-23.3042327],mag:5.222,ci:.293,trueDistPc:33.28},{hip:49583,pos:[-469.86714103,294.68869675,47.21441879],mag:3.41,ci:.033,trueDistPc:556.64},{hip:49593,pos:[-19.82689955,16.05216291,10.35574215],mag:4.49,ci:.203,trueDistPc:27.53},{hip:49641,pos:[-115.27816943,55.93473392,-25.1725367],mag:4.49,ci:.016,trueDistPc:130.58},{hip:49669,pos:[-21.01651352,12.21642042,.198269],mag:1.4,ci:-.086,trueDistPc:24.31},{hip:49841,pos:[-28.90151896,10.88191756,-12.48332099],mag:3.61,ci:.9,trueDistPc:33.31},{hip:50099,pos:[-36.80177586,-28.17707455,-111.24415794],mag:3.33,ci:-.018,trueDistPc:120.51},{hip:50191,pos:[-21.01651352,1.10573094,-23.58638473],mag:3.85,ci:.093,trueDistPc:31.61},{hip:50335,pos:[-58.84013728,37.38895711,14.64902848],mag:3.41,ci:.313,trueDistPc:71.24},{hip:50371,pos:[-100.3927433,-36.69501563,-206.26076117],mag:3.35,ci:1.367,trueDistPc:232.31},{hip:50372,pos:[-45.63237189,38.9064775,34.46067657],mag:3.45,ci:.075,trueDistPc:69.16},{hip:50583,pos:[-34.55218533,20.33019777,6.29885347],mag:4,ci:0,trueDistPc:39.89},{hip:50801,pos:[-38.31929625,30.76982296,27.23910969],mag:3.05,ci:1.401,trueDistPc:56.18},{hip:51069,pos:[-65.65754044,17.5468061,-31.21974106],mag:3.81,ci:1.308,trueDistPc:74.79},{hip:51172,pos:[-88.38221761,11.72837366,-68.23503738],mag:4.25,ci:1.282,trueDistPc:112.27},{hip:51232,pos:[-226.21928387,-72.83565363,-409.75467825],mag:3.81,ci:.306,trueDistPc:473.69},{hip:51233,pos:[-34.8190859,24.7988759,19.99466562],mag:4.21,ci:.815,trueDistPc:47.19},{hip:51437,pos:[-103.96921095,38.87597458,-18.21787039],mag:5.1,ci:-.069,trueDistPc:112.49},{hip:51839,pos:[-25.05815074,-44.15298015,-126.19821564],mag:4.12,ci:1.393,trueDistPc:136.03},{hip:51986,pos:[-16.64696989,-2.15808176,-20.78011588],mag:3.84,ci:.297,trueDistPc:26.71},{hip:52419,pos:[-56.97945902,-31.82979951,-123.47582982],mag:2.76,ci:-.137,trueDistPc:139.66},{hip:52468,pos:[-210.97559589,-90.32635599,-392.16302294],mag:4.545,ci:1.473,trueDistPc:454.38},{hip:52727,pos:[-21.2605369,-3.94250272,-26.78156585],mag:2.69,ci:.815,trueDistPc:34.42},{hip:52943,pos:[-38.47181086,6.52762539,-15.60987053],mag:3.11,ci:1.104,trueDistPc:42.03},{hip:53229,pos:[-24.05918003,13.40603439,12.80360167],mag:3.83,ci:.934,trueDistPc:30.38},{hip:53253,pos:[-14.78629163,-6.10821021,-25.18016243],mag:3.79,ci:.857,trueDistPc:29.83},{hip:53740,pos:[-45.00706198,4.97960208,-18.95756626],mag:4.07,ci:.976,trueDistPc:49.09},{hip:53910,pos:[-13.88645542,11.88088827,18.36275928],mag:2.37,ci:.033,trueDistPc:25.9},{hip:54061,pos:[-17.29515699,17.18077103,28.72612716],mag:1.79,ci:.959,trueDistPc:37.68},{hip:54463,pos:[-753.74732231,-353.52487788,-1247.75203259],mag:3.83,ci:1.121,trueDistPc:4488.33},{hip:54539,pos:[-29.96912124,18.14161309,25.02764782],mag:3.01,ci:1.019,trueDistPc:43.05},{hip:54682,pos:[-87.46712994,2.20383614,-41.98727266],mag:4.449,ci:.072,trueDistPc:97.05},{hip:54872,pos:[-16.44107517,5.5591576,4.43817521],mag:2.53,ci:.178,trueDistPc:17.91},{hip:54879,pos:[-46.50933091,13.84070103,8.2739177],mag:3.35,ci:.033,trueDistPc:49.22},{hip:55282,pos:[-55.92710819,3.2409355,-17.7450751],mag:3.56,ci:.994,trueDistPc:58.76},{hip:55687,pos:[-118.66399381,7.78587094,-28.48210378],mag:4.802,ci:1.356,trueDistPc:122.28},{hip:55705,pos:[-24.9742677,.33553215,-8.9221048],mag:4.06,ci:.212,trueDistPc:26.52},{hip:56211,pos:[-40.50788093,47.70657061,97.26619376],mag:3.85,ci:1.427,trueDistPc:115.66},{hip:56343,pos:[-33.78961227,-4.74320443,-20.9860106],mag:3.54,ci:.84,trueDistPc:40.06},{hip:56480,pos:[-71.59035884,-32.55424392,-94.98610031],mag:4.607,ci:-.013,trueDistPc:123.32},{hip:56561,pos:[-54.5087223,-37.52622027,-101.07905906],mag:3.14,ci:.016,trueDistPc:120.82},{hip:56633,pos:[-90.34965611,2.2190876,-18.06535578],mag:4.673,ci:-.009,trueDistPc:92.16},{hip:57283,pos:[-99.5691644,-7.08430372,-33.00416202],mag:4.706,ci:.875,trueDistPc:105.14},{hip:57363,pos:[-16.61646697,-14.44313375,-35.93244257],mag:3.65,ci:.186,trueDistPc:42.14},{hip:57380,pos:[-100.72827545,10.30236204,8.12140309],mag:4.04,ci:1.325,trueDistPc:101.58},{hip:57399,pos:[-40.80528442,20.20056035,40.34774059],mag:3.72,ci:1.053,trueDistPc:60.83},{hip:57632,pos:[-10.63026845,1.56327477,2.33347356],mag:2.13,ci:.126,trueDistPc:11},{hip:57936,pos:[-78.78142279,-18.83555457,-49.57487461],mag:4.28,ci:-.035,trueDistPc:94.97},{hip:58001,pos:[-15.09132085,8.548444,18.69829142],mag:2.44,ci:.058,trueDistPc:25.5},{hip:58188,pos:[-73.4510371,-7.84687678,-21.30629129],mag:5.16,ci:.031,trueDistPc:76.88},{hip:59196,pos:[-110.64172522,-57.55138881,-122.60649653],mag:2.52,ci:-.06,trueDistPc:174.89},{hip:59199,pos:[-13.59667765,-2.95115774,-5.55153187],mag:4.01,ci:.322,trueDistPc:14.98},{hip:59316,pos:[-87.00958611,-17.96622129,-31.76879366],mag:2.98,ci:1.189,trueDistPc:94.35},{hip:59747,pos:[-72.21566875,-51.82446513,-107.52280141],mag:2.752,ci:-.106,trueDistPc:139.51},{hip:59774,pos:[-13.4594145,7.44271306,19.44561302],mag:3.32,ci:.127,trueDistPc:24.8},{hip:59803,pos:[-44.80879298,-8.48743815,-11.79700523],mag:2.58,ci:-.043,trueDistPc:47.1},{hip:6e4,pos:[-17.25702834,-37.76261791,-83.61613599],mag:4.229,ci:-.056,trueDistPc:93.36},{hip:60030,pos:[-114.59185367,-9.21188256,2.27246772],mag:5.897,ci:.179,trueDistPc:114.98},{hip:60718,pos:[-44.36650061,-39.76055933,-78.71279122],mag:4,ci:0,trueDistPc:98.72},{hip:60742,pos:[-44.03096846,4.71270151,23.94479407],mag:4.34,ci:1.01,trueDistPc:50.34},{hip:60823,pos:[-80.11592565,-47.61506184,-85.0650248],mag:3.91,ci:-.112,trueDistPc:126.18},{hip:60965,pos:[-24.9742677,-5.97094706,-5.55153187],mag:2.94,ci:.008,trueDistPc:26.27},{hip:61084,pos:[-14.60327409,-10.90479475,-20.12430304],mag:1.64,ci:1.402,trueDistPc:27.15},{hip:61174,pos:[-17.34853711,-4.2627834,-3.69847934],mag:4.294,ci:.359,trueDistPc:18.24},{hip:61199,pos:[-35.31475839,-48.63690974,-99.51578428],mag:3.88,ci:-.078,trueDistPc:116.26},{hip:61281,pos:[-48.76654716,46.66947125,125.68729169],mag:3.89,ci:-.069,trueDistPc:142.67},{hip:61317,pos:[-6.29122774,1.37263151,5.50577749],mag:4.25,ci:.569,trueDistPc:8.47},{hip:61359,pos:[-41.23995107,-12.89511044,-14.07709868],mag:2.64,ci:.798,trueDistPc:45.44},{hip:61585,pos:[-33.995507,-41.0493078,-80.7031069],mag:2.649,ci:-.09,trueDistPc:96.71},{hip:61932,pos:[-25.77496942,-16.30381202,-25.73684076],mag:2.17,ci:.042,trueDistPc:39.9},{hip:61941,pos:[-11.81988242,-2.11232738,.58718126],mag:2.74,ci:.356,trueDistPc:12.02},{hip:62322,pos:[-38.25066467,-45.83064088,-86.02586686],mag:3.549,ci:-.158,trueDistPc:104.71},{hip:62434,pos:[-42.1702902,-37.50334307,-64.09426566],mag:1.25,ci:-.146,trueDistPc:85.4},{hip:62956,pos:[-13.77969519,5.3075085,20.55896969],mag:1.77,ci:.033,trueDistPc:25.31},{hip:63090,pos:[-55.66783335,-11.28608128,8.60182411],mag:3.38,ci:1.401,trueDistPc:57.45},{hip:63125,pos:[-23.26610405,2.21146187,19.6896364],mag:2.88,ci:-.052,trueDistPc:30.56},{hip:63608,pos:[-31.31124983,-5.4829003,9.23475975],mag:2.79,ci:.832,trueDistPc:33.1},{hip:64166,pos:[-62.59962247,-28.97777627,-17.93571836],mag:4.934,ci:.939,trueDistPc:71.28},{hip:64241,pos:[-16.21230325,-2.55461975,6.96229203],mag:4.32,ci:.432,trueDistPc:17.83},{hip:64394,pos:[-7.73249082,-.58718126,4.94147343],mag:4.25,ci:.552,trueDistPc:9.2},{hip:64962,pos:[-33.8963725,-17.28753126,-9.30339133],mag:3,ci:.832,trueDistPc:39.17},{hip:65109,pos:[-13.42891158,-8.76196446,-7.82399959],mag:2.73,ci:.075,trueDistPc:17.84},{hip:65378,pos:[-14.11522733,3.59934484,21.908724],mag:2.283,ci:.534,trueDistPc:26.31},{hip:65474,pos:[-69.98895541,-30.9299633,-2.74526301],mag:.97,ci:-.146,trueDistPc:76.57},{hip:65936,pos:[-197.91202105,-146.32892833,-128.76012769],mag:3.88,ci:1.036,trueDistPc:277.78},{hip:66249,pos:[-20.93263049,-8.51794108,3.43157877],mag:3.38,ci:.152,trueDistPc:22.86},{hip:66657,pos:[-70.72865128,-72.10890852,-83.51700149],mag:2.3,ci:-.137,trueDistPc:131.06},{hip:67301,pos:[-18.53052535,.99134498,25.90460684],mag:1.86,ci:-.112,trueDistPc:31.87},{hip:67459,pos:[-63.65959902,-22.16799884,31.71541355],mag:4.07,ci:1.342,trueDistPc:74.5},{hip:67464,pos:[-82.40364482,-72.02502548,-58.84776301],mag:3.386,ci:-.118,trueDistPc:124.26},{hip:67472,pos:[-89.37356259,-79.17033505,-66.12271],mag:3.43,ci:-.086,trueDistPc:136.48},{hip:67927,pos:[-9.48640886,-3.33244427,5.36088861],mag:2.68,ci:.534,trueDistPc:11.4},{hip:68002,pos:[-69.54666304,-69.42465135,-63.67485048],mag:2.55,ci:-.137,trueDistPc:117.1},{hip:68282,pos:[-80.8022414,-78.97206606,-66.42773923],mag:3.87,ci:-.12,trueDistPc:131.06},{hip:68520,pos:[-59.93824249,-31.53239602,15.71663076],mag:4.237,ci:.13,trueDistPc:69.53},{hip:68702,pos:[-50.95513185,-69.60004315,-83.70001903],mag:.58,ci:0,trueDistPc:120.19},{hip:68756,pos:[-29.58783471,12.28505199,73.199388],mag:3.68,ci:.016,trueDistPc:79.9},{hip:68933,pos:[-12.3613093,-11.24795263,-6.7792745],mag:2.05,ci:.892,trueDistPc:18.03},{hip:69427,pos:[-71.03368051,-48.81230155,4.38479509],mag:4.21,ci:1.172,trueDistPc:86.3},{hip:69673,pos:[-8.8229703,-3.97300564,5.74980087],mag:-.05,ci:1.095,trueDistPc:11.26},{hip:69701,pos:[-18.15686455,-12.15541457,2.76051448],mag:4.08,ci:.492,trueDistPc:22.03},{hip:70576,pos:[-55.21791525,-65.25337671,-47.62268757],mag:4.35,ci:.399,trueDistPc:97.85},{hip:70638,pos:[-8.12902882,-41.93389255,-81.47330569],mag:4.304,ci:1.164,trueDistPc:91.99},{hip:71053,pos:[-34.26240757,-14.38975364,33.995507],mag:3.59,ci:1.155,trueDistPc:50.37},{hip:71075,pos:[-16.30381202,-5.19312254,20.07092293],mag:3.02,ci:.212,trueDistPc:26.38},{hip:71352,pos:[-54.08930712,-65.03223053,-40.37061778],mag:2.31,ci:-.112,trueDistPc:93.72},{hip:71536,pos:[-53.70802059,-72.9019845,-56.94895609],mag:4.05,ci:-.078,trueDistPc:106.97},{hip:71683,pos:[-.50329822,-.85408183,-.91508767],mag:.01,ci:.654,trueDistPc:1.35},{hip:71795,pos:[-39.9283254,-25.96561268,25.19541389],mag:3.78,ci:.092,trueDistPc:53.88},{hip:71860,pos:[-73.35190261,-99.14974921,-71.27770388],mag:2.286,ci:-.086,trueDistPc:142.45},{hip:71908,pos:[-5.26175411,-10.05071293,-11.83513389],mag:3.19,ci:.254,trueDistPc:16.4},{hip:71957,pos:[-14.44313375,-12.17829176,3.21805831],mag:3.88,ci:.373,trueDistPc:19.16},{hip:72105,pos:[-48.42338929,-25.85885245,47.08888643],mag:2.45,ci:1.036,trueDistPc:72.32},{hip:72220,pos:[-30.80032588,-24.51672387,12.10966019],mag:3.73,ci:.042,trueDistPc:41.18},{hip:72370,pos:[-21.57319186,-77.40879128,-129.78230902],mag:3.798,ci:1.282,trueDistPc:152.65},{hip:72607,pos:[-8.06039724,8.548444,38.38792782],mag:2.08,ci:1.3,trueDistPc:40.14},{hip:72622,pos:[-16.41057224,-16.45632663,.13726315],mag:2.75,ci:.178,trueDistPc:23.24},{hip:73273,pos:[-60.95246466,-87.13159779,-49.68926057],mag:2.68,ci:-.137,trueDistPc:117.37},{hip:73334,pos:[-61.87517806,-87.69590186,-47.85145949],mag:3.11,ci:-.103,trueDistPc:117.51},{hip:73555,pos:[-38.47943659,-17.33328565,58.40547064],mag:3.52,ci:.857,trueDistPc:72.06},{hip:73714,pos:[-50.07817283,-61.15835938,-10.60739126],mag:3.21,ci:1.495,trueDistPc:79.75},{hip:74395,pos:[-14.27536768,-25.49281738,-18.85080603],mag:3.41,ci:.832,trueDistPc:34.77},{hip:74666,pos:[-20.29969485,-13.26114551,27.8644196],mag:3.49,ci:.858,trueDistPc:36.93},{hip:74785,pos:[-36.55012675,-42.59733111,8.38830366],mag:2.62,ci:-.043,trueDistPc:56.75},{hip:74824,pos:[-9.97445562,-20.72673576,-18.58390546],mag:4.057,ci:.132,trueDistPc:29.57},{hip:74946,pos:[-13.68056069,-36.38236068,-43.32177552],mag:2.89,ci:.05,trueDistPc:58.2},{hip:75097,pos:[-30.26652474,23.99054846,146.60467072],mag:3.002,ci:.105,trueDistPc:151.61},{hip:75141,pos:[-71.95639391,-118.1378184,-54.27995039],mag:3.19,ci:-.116,trueDistPc:148.6},{hip:75177,pos:[-44.02334273,-69.0891192,-25.32505131],mag:3.546,ci:1.351,trueDistPc:85.75},{hip:75323,pos:[-44.3131205,-96.99166746,-86.88757442],mag:5.158,ci:.457,trueDistPc:137.55},{hip:75458,pos:[-9.92870124,-.86170756,29.08453649],mag:3.29,ci:1.036,trueDistPc:30.75},{hip:75695,pos:[-19.27784695,-15.67850211,25.78259515],mag:3.68,ci:.296,trueDistPc:35.81},{hip:76127,pos:[-58.81726009,-48.4005121,86.25463878],mag:4.13,ci:-.061,trueDistPc:115.07},{hip:76267,pos:[-12.52907537,-11.40046724,16.54020966],mag:2.24,ci:.033,trueDistPc:23.67},{hip:76276,pos:[-40.69852419,-45.74675785,33.77436081],mag:4.084,ci:.375,trueDistPc:69.93},{hip:76297,pos:[-57.39124847,-105.68500034,-46.75335429],mag:2.765,ci:-.102,trueDistPc:129.03},{hip:76333,pos:[-28.13132017,-40.38586924,3.77473665],mag:3.91,ci:.917,trueDistPc:49.36},{hip:76552,pos:[-27.97117983,-53.60126036,-24.9971449],mag:4.33,ci:1.257,trueDistPc:65.43},{hip:76952,pos:[-22.63316841,-22.53403391,31.39513287],mag:4.016,ci:.064,trueDistPc:44.78},{hip:77055,pos:[-13.0094964,25.09627939,106.40944474],mag:4.274,ci:.086,trueDistPc:110.1},{hip:77070,pos:[-12.62058414,-16.19705179,9.79906382],mag:2.63,ci:1.044,trueDistPc:22.76},{hip:77233,pos:[-24.60823263,-29.27517976,26.11812729],mag:3.67,ci:.101,trueDistPc:46.31},{hip:77450,pos:[-60.42628925,-71.43784423,70.78965713],mag:4.09,ci:1.427,trueDistPc:117.33},{hip:77512,pos:[-24.82175309,-26.6443027,36.1154601],mag:4.63,ci:.73,trueDistPc:51.29},{hip:77516,pos:[-27.9635541,-41.36196276,14.54226825],mag:3.53,ci:.016,trueDistPc:52},{hip:77622,pos:[-11.75125085,-16.37244359,8.97548491],mag:3.693,ci:.178,trueDistPc:22.06},{hip:77634,pos:[-27.94830264,-54.47059365,-14.33637352],mag:3.946,ci:.019,trueDistPc:62.88},{hip:77760,pos:[-6.18446751,-4.87284185,13.81019811],mag:4.62,ci:.535,trueDistPc:15.9},{hip:77853,pos:[-25.7215893,-44.32074623,3.11129808],mag:4.16,ci:.909,trueDistPc:51.34},{hip:77952,pos:[-2.88252617,-8.77721592,-8.30442062],mag:2.85,ci:.297,trueDistPc:12.42},{hip:78072,pos:[-5.52102895,-7.26732126,6.43611662],mag:3.84,ci:.475,trueDistPc:11.17},{hip:78159,pos:[-33.65234912,-38.87597458,53.38011417],mag:4.13,ci:1.096,trueDistPc:74.12},{hip:78265,pos:[-81.29791389,-159.14899755,-17.12739092],mag:2.91,ci:-.12,trueDistPc:179.53},{hip:78384,pos:[-51.54993883,-114.56135075,-39.4784073],mag:3.41,ci:-.137,trueDistPc:131.68},{hip:78401,pos:[-69.33314258,-133.59517432,-5.21599973],mag:2.32,ci:-.052,trueDistPc:150.6},{hip:78493,pos:[-48.90381031,-56.28551753,86.26226451],mag:4.971,ci:.007,trueDistPc:114.02},{hip:78527,pos:[-5.52865468,-1.65478354,20.73436149],mag:4,ci:.492,trueDistPc:21.52},{hip:78639,pos:[-22.82381168,-59.06128347,-33.53796316],mag:4.643,ci:.837,trueDistPc:71.65},{hip:78820,pos:[-55.88135381,-110.58071938,2.18095895],mag:2.62,ci:-.009,trueDistPc:123.92},{hip:78970,pos:[-24.74549579,-57.94030107,-17.53155464],mag:5.7,ci:.314,trueDistPc:65.4},{hip:79509,pos:[-37.25931969,-114.75199402,-77.87396085],mag:4.94,ci:.934,trueDistPc:143.6},{hip:79822,pos:[-3.18755539,5.44477165,29.25230257],mag:4.847,ci:.52,trueDistPc:29.92},{hip:79882,pos:[-14.02371857,-28.13132017,9.27288841],mag:3.23,ci:.883,trueDistPc:32.77},{hip:79992,pos:[-28.79475873,-28.18470028,89.77010058],mag:3.87,ci:-.069,trueDistPc:98.4},{hip:8e4,pos:[-11.50722747,-35.55115604,-20.09380012],mag:4.02,ci:.968,trueDistPc:42.43},{hip:80170,pos:[-23.24322686,-39.01323773,38.11340152],mag:3.76,ci:.28,trueDistPc:59.29},{hip:80331,pos:[-5.42952018,-1.40313443,27.42975296],mag:2.74,ci:.824,trueDistPc:28},{hip:80582,pos:[-50.75686285,-164.65477504,-82.12911852],mag:4.521,ci:-.02,trueDistPc:190.88},{hip:80763,pos:[-58.54273379,-158.79058821,-13.52804608],mag:.91,ci:1.614,trueDistPc:169.78},{hip:80816,pos:[-16.14367167,-29.23705111,30.82320307],mag:2.77,ci:.841,trueDistPc:45.45},{hip:81065,pos:[-3.33244427,-26.03424426,-38.92172896],mag:3.854,ci:.84,trueDistPc:46.94},{hip:81126,pos:[-24.89038467,-33.31681698,82.19012437],mag:4.196,ci:.034,trueDistPc:92.11},{hip:81266,pos:[-45.9602783,-137.01912736,-15.49548457],mag:2.81,ci:-.162,trueDistPc:145.35},{hip:81377,pos:[-46.92112036,-123.7198532,26.65955417],mag:2.56,ci:.067,trueDistPc:134.97},{hip:81693,pos:[-3.07316943,-5.65066637,8.57132119],mag:2.8,ci:.586,trueDistPc:10.72},{hip:81833,pos:[-8.77721592,-14.48888813,29.68696921],mag:3.5,ci:.832,trueDistPc:34.18},{hip:81852,pos:[-3.40107585,-27.46788161,-38.87597458],mag:4.24,ci:.951,trueDistPc:47.72},{hip:82080,pos:[-4.4610524,27.71953072,97.41870837],mag:4.212,ci:.812,trueDistPc:101.38},{hip:82273,pos:[-13.12388236,-81.9232238,-86.36902474],mag:1.88,ci:1.282,trueDistPc:119.76},{hip:82363,pos:[-14.50413959,-73.93908386,-55.30179829],mag:3.744,ci:1.378,trueDistPc:93.46},{hip:82396,pos:[-4.84233893,-18.50002243,-3.97300564],mag:2.29,ci:1.036,trueDistPc:19.54},{hip:82514,pos:[-123.14149305,-499.67079567,-141.97406052],mag:2.98,ci:-.086,trueDistPc:533.85},{hip:82671,pos:[-314.81036507,-1377.05331296,-504.59747059],mag:4.79,ci:.492,trueDistPc:1707.94},{hip:83e3,pos:[-7.14530957,-21.74858366,14.21436183],mag:3.2,ci:1.036,trueDistPc:26.95},{hip:83081,pos:[-25.645332,-142.85281126,-94.58193659],mag:3.076,ci:1.431,trueDistPc:173.24},{hip:83207,pos:[-11.17932105,-28.13132017,40.53838385],mag:3.92,ci:.042,trueDistPc:50.6},{hip:83895,pos:[-11.64449062,-.68631575,127.22006354],mag:3.17,ci:-.044,trueDistPc:127.76},{hip:84012,pos:[-5.60491199,-26.28589337,3.39345012],mag:2.42,ci:.092,trueDistPc:27.09},{hip:84143,pos:[-3.38582438,-20.78774161,-7.74011656],mag:3.33,ci:.399,trueDistPc:22.44},{hip:84345,pos:[-20.40645508,-83.57800734,65.27625391],mag:5.239,ci:.942,trueDistPc:110.25},{hip:84379,pos:[-4.16364891,-15.28958985,17.40954295],mag:3.13,ci:.118,trueDistPc:23.04},{hip:84380,pos:[-17.53155464,-54.18081589,96.86965577],mag:3.18,ci:1.266,trueDistPc:112.37},{hip:84606,pos:[-7.83162532,-25.5461975,46.47120225],mag:4.65,ci:.092,trueDistPc:53.61},{hip:84880,pos:[-10.37861934,-60.70081555,11.14881813],mag:4.324,ci:.081,trueDistPc:62.58},{hip:85112,pos:[-15.17520389,-58.13857007,104.59452086],mag:4.17,ci:.05,trueDistPc:120.63},{hip:85258,pos:[-18.72116861,-184.48167459,-117.07021612],mag:2.85,ci:1.291,trueDistPc:219.29},{hip:85267,pos:[-28.42706962,-284.46238978,-186.43133802],mag:3.34,ci:-.06,trueDistPc:341.3},{hip:85670,pos:[-9.16612818,-28.16182309,112.72354968],mag:2.81,ci:.883,trueDistPc:116.55},{hip:85693,pos:[-13.78732092,-77.40879128,91.3943812],mag:4.41,ci:1.274,trueDistPc:120.56},{hip:85727,pos:[-4.25515767,-54.77562287,-41.93389255],mag:3.62,ci:-.035,trueDistPc:69.11},{hip:85755,pos:[-14.29061914,-124.90184144,-1.50226893],mag:4.81,ci:.05,trueDistPc:125.73},{hip:85792,pos:[-6.47424528,-73.03162192,-36.64926125],mag:2.95,ci:-.095,trueDistPc:81.97},{hip:85822,pos:[-.40416372,19.17108672,52.53365808],mag:4.336,ci:.076,trueDistPc:55.93},{hip:85829,pos:[-2.06657299,-5.79555525,29.28280549],mag:4.792,ci:.395,trueDistPc:29.92},{hip:85927,pos:[-16.05216291,-169.32934789,-41.74324928],mag:1.63,ci:-.069,trueDistPc:175.13},{hip:86032,pos:[-1.58615196,-11.97239704,8.7238358],mag:2.07,ci:.178,trueDistPc:14.9},{hip:86228,pos:[-6.65726281,-86.46815923,-30.96046622],mag:1.85,ci:.424,trueDistPc:92.08},{hip:86263,pos:[-2.85964897,-29.98437271,4.20177756],mag:3.519,ci:.279,trueDistPc:30.41},{hip:86414,pos:[-9.53978898,-53.49450013,143.53150129],mag:3.8,ci:-.094,trueDistPc:153.48},{hip:86565,pos:[-3.85861968,-47.88958815,8.89922761],mag:4.228,ci:.12,trueDistPc:48.86},{hip:86670,pos:[-8.78484165,-142.3876417,-39.95120259],mag:2.386,ci:-.099,trueDistPc:148.15},{hip:86742,pos:[-1.83017534,-22.44252515,11.94189411],mag:2.75,ci:1.053,trueDistPc:25.49},{hip:86929,pos:[-2.99691212,-84.67611254,-74.46525927],mag:3.581,ci:1.06,trueDistPc:112.8},{hip:86974,pos:[-.43466664,-5.21599973,6.48949674],mag:3.42,ci:.688,trueDistPc:8.34},{hip:87072,pos:[-17.09951517,-354.94501806,-27.47594857],mag:4.54,ci:.73,trueDistPc:356.42},{hip:87073,pos:[-29.20274684,-674.93473911,-202.86473423],mag:2.992,ci:.475,trueDistPc:705.37},{hip:87585,pos:[-.53380114,-5.78030379,33.91924969],mag:3.75,ci:1.053,trueDistPc:34.41},{hip:87808,pos:[-3.17230393,-119.37318676,212.65874914],mag:3.88,ci:1.197,trueDistPc:243.89},{hip:87833,pos:[-.43466664,-12.30030345,45.67812627],mag:2.23,ci:1.35,trueDistPc:47.3},{hip:87933,pos:[-.35840934,-25.40893435,33.33969417],mag:3.7,ci:.849,trueDistPc:41.92},{hip:88635,pos:[.67869002,-30.7545715,-3.77473665],mag:2.99,ci:.908,trueDistPc:30.99},{hip:88714,pos:[6.29802532,-303.18953821,-152.24985652],mag:3.66,ci:-.018,trueDistPc:339.33},{hip:88794,pos:[3.08842089,-65.51265155,84.50072074],mag:3.827,ci:.029,trueDistPc:106.97},{hip:88866,pos:[.67869002,-31.32650129,-26.51466528],mag:4.328,ci:.256,trueDistPc:41.05},{hip:89341,pos:[84.01486361,-1496.39033027,61.29830474],mag:3.85,ci:.237,trueDistPc:11111.11},{hip:89642,pos:[2.57749694,-40.64514408,-9.68467786],mag:3.11,ci:1.376,trueDistPc:41.87},{hip:89931,pos:[10.11171877,-126.22109283,-14.36687644],mag:2.668,ci:1.241,trueDistPc:127.44},{hip:89937,pos:[.22114619,.87695902,8.00701713],mag:3.58,ci:.467,trueDistPc:8.06},{hip:89962,pos:[1.7691695,-17.78320375,6.65726281],mag:3.25,ci:.849,trueDistPc:19.07},{hip:90098,pos:[10.9658006,-178.28195561,-140.18380555],mag:4.367,ci:1.297,trueDistPc:227.06},{hip:90185,pos:[3.82049103,-42.95574045,-8.41880658],mag:1.81,ci:.059,trueDistPc:43.94},{hip:90422,pos:[6.99279496,-78.77379706,-32.99653629],mag:3.463,ci:-.089,trueDistPc:85.69},{hip:90496,pos:[2.56224548,-23.14409236,-.86933329],mag:2.81,ci:.934,trueDistPc:23.3},{hip:90568,pos:[3.08079516,-33.59134328,-16.28093482],mag:4.11,ci:.908,trueDistPc:37.46},{hip:90595,pos:[11.86563681,-94.65819389,14.58802263],mag:4.675,ci:.104,trueDistPc:96.51},{hip:90887,pos:[7.4274616,-65.39826559,-19.43036156],mag:5.155,ci:.116,trueDistPc:68.62},{hip:91117,pos:[8.55606973,-53.92916678,14.54989398],mag:3.83,ci:1.189,trueDistPc:56.51},{hip:91262,pos:[.96084206,-3.50783607,6.76402304],mag:.03,ci:.05,trueDistPc:7.68},{hip:91792,pos:[3.92725126,-43.8403252,-49.19358808],mag:4.003,ci:1.015,trueDistPc:66.01},{hip:91875,pos:[9.34151998,-59.76285068,-16.45632663],mag:5.111,ci:.109,trueDistPc:62.69},{hip:91971,pos:[7.44271306,-22.76280583,42.05590424],mag:4.36,ci:.212,trueDistPc:48.4},{hip:92041,pos:[14.50413959,-80.77936421,-5.67354356],mag:3.14,ci:-.027,trueDistPc:82.27},{hip:92175,pos:[41.95676974,-191.1389374,64.28490893],mag:4.22,ci:.977,trueDistPc:205.98},{hip:92202,pos:[80.73983662,-368.01571879,116.81432783],mag:5.2,ci:1.3,trueDistPc:394.46},{hip:92420,pos:[50.31851404,-147.10489549,230.3603896],mag:3.42,ci:.05,trueDistPc:277.92},{hip:92609,pos:[35.45318017,-258.64223077,-212.17011493],mag:4.207,ci:-.085,trueDistPc:336.41},{hip:92791,pos:[44.48088657,-111.97622808,203.05795432],mag:4.3,ci:1.469,trueDistPc:236.12},{hip:92814,pos:[128.92106237,-546.52189164,71.01790936],mag:5.086,ci:.154,trueDistPc:566},{hip:92855,pos:[14.9540577,-68.08252276,-4.20177756],mag:2.067,ci:-.072,trueDistPc:69.83},{hip:92946,pos:[9.98208135,-35.37576424,18.62965985],mag:4.57,ci:.194,trueDistPc:41.2},{hip:92953,pos:[17.20364823,-88.95414741,-32.62287549],mag:5.346,ci:.896,trueDistPc:96.3},{hip:92989,pos:[28.43634939,-138.61290505,-36.51962383],mag:5.38,ci:-.069,trueDistPc:146.14},{hip:93015,pos:[18.14161309,-135.53973562,-132.84785272],mag:4.4,ci:.628,trueDistPc:190.65},{hip:93085,pos:[27.65089914,-115.60607584,3.44683023],mag:3.51,ci:1.053,trueDistPc:118.92},{hip:93174,pos:[6.35223359,-29.79372944,-7.75536802],mag:4.85,ci:.381,trueDistPc:31.44},{hip:93194,pos:[43.10825506,-107.12626342,164.99030718],mag:3.25,ci:.008,trueDistPc:201.39},{hip:93244,pos:[13.6576835,-41.40009141,33.53033743],mag:4.02,ci:.968,trueDistPc:55},{hip:93506,pos:[6.3293564,-26.07237291,-3.37819865],mag:2.59,ci:.135,trueDistPc:27.04},{hip:93542,pos:[11.08781229,-50.64247689,-18.18736747],mag:4.725,ci:.03,trueDistPc:54.94},{hip:93683,pos:[10.8666661,-40.56126104,.63293564],mag:3.77,ci:.9,trueDistPc:42},{hip:93747,pos:[7.1529353,-19.8650282,15.44210446],mag:2.99,ci:.058,trueDistPc:26.16},{hip:93805,pos:[11.08018656,-35.4901502,11.76650231],mag:3.43,ci:-.027,trueDistPc:39},{hip:93825,pos:[3.94250272,-16.28856055,-4.30853779],mag:4.21,ci:.492,trueDistPc:17.3},{hip:93864,pos:[9.00598783,-34.00313273,-3.13417528],mag:3.31,ci:1.07,trueDistPc:35.31},{hip:94005,pos:[12.65108706,-52.39639493,-17.3714143],mag:4.571,ci:.979,trueDistPc:56.63},{hip:94114,pos:[8.69333288,-34.52930814,-9.75330943],mag:4.087,ci:.1,trueDistPc:36.92},{hip:94160,pos:[39.66905056,-158.38642449,-49.14783369],mag:4.095,ci:1.058,trueDistPc:170.52},{hip:94376,pos:[3.54596473,1.09810521,29.75560079],mag:3.07,ci:.9,trueDistPc:29.99},{hip:94648,pos:[4.27803486,6.10821021,45.53323739],mag:4.45,ci:1.113,trueDistPc:46.14},{hip:94779,pos:[7.43508733,-7.45796452,36.26034899],mag:3.76,ci:.875,trueDistPc:37.76},{hip:94820,pos:[46.37206776,-139.82539622,8.38830366],mag:4.878,ci:.914,trueDistPc:147.55},{hip:95168,pos:[13.2840227,-37.6101033,2.94353201],mag:3.93,ci:.237,trueDistPc:40},{hip:95294,pos:[10.79040879,-38.04476995,-16.38006932],mag:4.27,ci:.331,trueDistPc:42.81},{hip:95347,pos:[14.99981208,-50.20781025,-17.40954295],mag:3.943,ci:-.037,trueDistPc:55.22},{hip:95501,pos:[5.65066637,-12.9103619,6.51999966],mag:3.36,ci:.322,trueDistPc:15.53},{hip:95771,pos:[30.56392823,-53.99779835,63.93412532],mag:4.45,ci:1.325,trueDistPc:89.1},{hip:95853,pos:[8.86872468,-7.9993914,35.58928469],mag:3.755,ci:.172,trueDistPc:37.54},{hip:95947,pos:[37.92275826,-62.48523651,83.98979679],mag:3.08,ci:1.011,trueDistPc:111.34},{hip:96406,pos:[29.99962417,-75.29646391,-4.34666644],mag:5.64,ci:.194,trueDistPc:81.17},{hip:96757,pos:[52.68617269,-87.43662702,82.05286122],mag:4.38,ci:.713,trueDistPc:130.97},{hip:96837,pos:[55.18741233,-91.0969777,83.8677851],mag:4.38,ci:.942,trueDistPc:135.57},{hip:97165,pos:[14.74816297,-14.12285306,42.65071123],mag:2.87,ci:.033,trueDistPc:47.29},{hip:97278,pos:[78.63653391,-131.18544345,92.7898899],mag:2.72,ci:1.333,trueDistPc:178.89},{hip:97365,pos:[71.75049918,-108.87255573,105.25795942],mag:3.81,ci:1.163,trueDistPc:167.58},{hip:97433,pos:[7.19868968,4.62119274,46.11279292],mag:3.91,ci:.832,trueDistPc:46.9},{hip:97649,pos:[2.35635075,-3.80523957,2.50886537],mag:.76,ci:.237,trueDistPc:5.13},{hip:97804,pos:[128.34523476,-218.46444408,99.9262056],mag:3.8,ci:.739,trueDistPc:272.37},{hip:98032,pos:[22.14512165,-53.31910833,-21.77146085],mag:4.13,ci:.968,trueDistPc:61.7},{hip:98036,pos:[6.51999966,-10.25660765,6.10058448],mag:3.71,ci:.772,trueDistPc:13.6},{hip:98110,pos:[16.89099327,-18.15686455,34.47592803],mag:3.88,ci:.925,trueDistPc:42.47},{hip:98337,pos:[41.17894522,-54.56210242,55.73646493],mag:3.47,ci:1.384,trueDistPc:88.2},{hip:98412,pos:[83.78390206,-180.7450666,-51.10002073],mag:4.37,ci:-.078,trueDistPc:205.67},{hip:98495,pos:[4.72032724,-19.62100482,-24.82175309],mag:3.94,ci:.039,trueDistPc:31.99},{hip:98543,pos:[33.18717956,-38.38030209,54.39433634],mag:4.651,ci:.201,trueDistPc:74.39},{hip:98688,pos:[62.12682717,-121.58464863,-17.02063069],mag:4.58,ci:1.453,trueDistPc:137.6},{hip:98920,pos:[23.38811574,-28.79475873,30.34278204],mag:5.093,ci:.939,trueDistPc:47.92},{hip:99240,pos:[1.31162566,-4.13314598,-4.29328633],mag:3.56,ci:.696,trueDistPc:6.1},{hip:99473,pos:[37.99138983,-54.42483927,22.50353099],mag:3.22,ci:-.009,trueDistPc:70.08},{hip:100064,pos:[18.4923967,-27.55939038,4.03401149],mag:3.58,ci:.841,trueDistPc:33.43},{hip:100345,pos:[66.46586788,-98.36429896,9.52453751],mag:3.08,ci:.721,trueDistPc:119.1},{hip:100453,pos:[249.31823949,-175.60438662,471.82648285],mag:2.23,ci:.62,trueDistPc:561.8},{hip:100751,pos:[17.85183533,-40.43924935,-32.43223223],mag:1.918,ci:-.058,trueDistPc:54.82},{hip:101421,pos:[68.18165726,-70.44649925,54.5087223],mag:4.03,ci:-.061,trueDistPc:112.17},{hip:101769,pos:[18.99569492,-18.12636163,16.3495664],mag:3.63,ci:.424,trueDistPc:30.93},{hip:101772,pos:[13.0857537,-23.5025017,-14.15335599],mag:3.11,ci:.9,trueDistPc:30.4},{hip:101958,pos:[44.9384304,-41.35433702,39.69192775],mag:3.8,ci:-.001,trueDistPc:72.83},{hip:102098,pos:[197.25067279,-90.60337338,374.54770807],mag:1.25,ci:.127,trueDistPc:432.9},{hip:102281,pos:[42.74221999,-38.32692198,35.79517942],mag:4.417,ci:.291,trueDistPc:67.65},{hip:102395,pos:[11.17169532,-26.98746058,-30.19789316],mag:3.408,ci:.194,trueDistPc:42.01},{hip:102485,pos:[8.76959019,-11.57585905,-1.79204669],mag:4.122,ci:.404,trueDistPc:14.63},{hip:102488,pos:[12.74259583,-8.03752005,17.59256049],mag:2.48,ci:.934,trueDistPc:23.16},{hip:102532,pos:[22.69417425,-19.47611594,19.20158964],mag:4.25,ci:.909,trueDistPc:35.54},{hip:102618,pos:[49.31559977,-55.30179829,10.51588249],mag:3.77,ci:.05,trueDistPc:74.84},{hip:102831,pos:[68.05201984,-94.95559739,-32.27971761],mag:4.89,ci:.891,trueDistPc:121.2},{hip:102978,pos:[103.02362036,-132.06240247,-26.41553079],mag:4.12,ci:1.436,trueDistPc:169.56},{hip:103227,pos:[64.06376274,-121.5770229,-111.9075965],mag:3.65,ci:1.113,trueDistPc:177.22},{hip:103738,pos:[46.87536598,-59.07653493,-19.73539078],mag:4.654,ci:.794,trueDistPc:77.96},{hip:104139,pos:[31.62390478,-32.92027898,-.46516957],mag:4.07,ci:.041,trueDistPc:45.65},{hip:104521,pos:[25.72921503,-19.09482941,15.06844366],mag:4.68,ci:.271,trueDistPc:35.41},{hip:104732,pos:[29.54208033,-15.03031501,31.66965917],mag:3.21,ci:.891,trueDistPc:45.84},{hip:104858,pos:[13.6576835,-9.76093516,7.73249082],mag:4.49,ci:.475,trueDistPc:18.49},{hip:104987,pos:[43.67255913,-32.76776437,20.00229135],mag:3.933,ci:.486,trueDistPc:58.14},{hip:105140,pos:[33.3473199,-37.12205654,-13.97796418],mag:4.708,ci:.104,trueDistPc:51.82},{hip:105199,pos:[5.27700557,1.1972397,14.0313443],mag:2.46,ci:.237,trueDistPc:15.04},{hip:105319,pos:[13.79494665,-20.29969485,-17.69169498],mag:4.483,ci:.184,trueDistPc:30.25},{hip:105515,pos:[45.61712043,-41.53735456,-1.47176601],mag:4.27,ci:.823,trueDistPc:61.71},{hip:105570,pos:[75.61674459,-52.09899143,35.30713266],mag:5.148,ci:.101,trueDistPc:98.38},{hip:105858,pos:[3.02741505,-5.54390614,-6.77164877],mag:4.22,ci:.458,trueDistPc:9.26},{hip:105881,pos:[98.37955042,-91.9434338,-16.50970674],mag:3.74,ci:.908,trueDistPc:135.66},{hip:106032,pos:[55.21791525,39.45553011,198.81804811],mag:3.23,ci:-.137,trueDistPc:210.08},{hip:106278,pos:[132.88598137,-98.70745684,25.08102793],mag:2.89,ci:.747,trueDistPc:167.43},{hip:106985,pos:[41.08743645,-32.34834919,-2.33347356],mag:3.67,ci:.313,trueDistPc:52.35},{hip:107089,pos:[3.48495888,-9.7456837,-16.41819797],mag:3.728,ci:.914,trueDistPc:19.41},{hip:107310,pos:[16.08266583,-5.71167222,14.06184722],mag:4.621,ci:.634,trueDistPc:22.11},{hip:107315,pos:[172.76855239,-92.30946887,79.53637012],mag:2.39,ci:1.342,trueDistPc:211.42},{hip:107354,pos:[25.6224548,-9.86769539,20.42170654],mag:4.135,ci:.405,trueDistPc:34.22},{hip:107556,pos:[9.34914571,-6.90891192,-.52617541],mag:2.83,ci:.296,trueDistPc:11.87},{hip:107608,pos:[70.7820314,-62.38610201,-28.0398114],mag:5.017,ci:.085,trueDistPc:98.43},{hip:108085,pos:[38.04476995,-34.96397478,-21.98498131],mag:3.01,ci:-.052,trueDistPc:56.15},{hip:108661,pos:[191.23105078,-147.94293881,-66.00945285],mag:5.751,ci:-.055,trueDistPc:250.63},{hip:109074,pos:[177.61851705,-89.12953921,37.41183431],mag:2.94,ci:.866,trueDistPc:202.22},{hip:109111,pos:[51.79396221,-45.12144794,-33.46170586],mag:4.458,ci:1.227,trueDistPc:76.41},{hip:109139,pos:[55.12640648,-33.49220878,-2.34109929],mag:4.27,ci:-.01,trueDistPc:64.54},{hip:109176,pos:[9.47878313,-2.64612852,6.70301719],mag:3.77,ci:.415,trueDistPc:11.9},{hip:109268,pos:[18.67541423,-18.08823297,-16.82998743],mag:1.71,ci:-.06,trueDistPc:30.97},{hip:109352,pos:[65.6727919,-12.33843211,58.19195018],mag:5.582,ci:.883,trueDistPc:88.61},{hip:109422,pos:[13.80257238,-10.53113395,-6.25309909],mag:4.92,ci:.458,trueDistPc:18.46},{hip:109427,pos:[23.99817419,-10.26423338,7.64860779],mag:3.55,ci:.109,trueDistPc:27.2},{hip:109492,pos:[142.03049916,35.31426777,265.63815833],mag:3.35,ci:1.368,trueDistPc:303.29},{hip:109937,pos:[147.71802738,-15.5031103,145.42268247],mag:4.15,ci:1.291,trueDistPc:207.87},{hip:110003,pos:[52.19812593,-26.2935191,2.76051448],mag:4.16,ci:.892,trueDistPc:58.52},{hip:110130,pos:[25.27929693,-30.48004519,-40.15709732],mag:2.82,ci:1.206,trueDistPc:56.39},{hip:110395,pos:[35.16224378,-15.1294495,5.53628041],mag:3.834,ci:.013,trueDistPc:38.68},{hip:110538,pos:[28.96252481,4.40004655,42.72696853],mag:4.44,ci:.917,trueDistPc:51.81},{hip:110609,pos:[469.4853154,48.29313172,633.69634153],mag:4.58,ci:.127,trueDistPc:790.14},{hip:110960,pos:[25.97323841,-10.01258427,4.33141498],mag:3.65,ci:.398,trueDistPc:28.17},{hip:110997,pos:[66.94628891,-53.05220776,-52.03035986],mag:3.97,ci:.925,trueDistPc:100.02},{hip:111022,pos:[418.63542072,38.28380764,526.76462405],mag:4.37,ci:1.478,trueDistPc:673.95},{hip:111104,pos:[237.92336131,5.97886741,260.05518105],mag:4.511,ci:-.044,trueDistPc:352.52},{hip:111123,pos:[57.43700285,-26.30877056,-1.35738005],mag:4.81,ci:-.018,trueDistPc:63.19},{hip:111169,pos:[18.78980019,2.6918829,25.45468873],mag:3.77,ci:.058,trueDistPc:31.75},{hip:111188,pos:[35.43677008,-22.8543146,-16.49445528],mag:4.29,ci:.059,trueDistPc:45.28},{hip:111497,pos:[50.76448858,-18.07298151,7.71723936],mag:4.03,ci:-.018,trueDistPc:54.43},{hip:111954,pos:[141.48017976,-77.3630369,-50.13917867],mag:4.177,ci:-.04,trueDistPc:168.86},{hip:112029,pos:[57.96317826,-14.29061914,19.02619784],mag:3.41,ci:-.018,trueDistPc:62.66},{hip:112122,pos:[34.99447771,-27.0179635,-31.45613871],mag:2.11,ci:1.427,trueDistPc:54.26},{hip:112158,pos:[49.0486992,-3.67560215,34.58268825],mag:2.95,ci:.781,trueDistPc:60.13},{hip:112405,pos:[6.5047482,-19.99466562,-40.65276981],mag:4.128,ci:.224,trueDistPc:45.77},{hip:112440,pos:[101.17056782,-12.32318064,56.01861696],mag:3.93,ci:.959,trueDistPc:116.3},{hip:112447,pos:[15.23620973,-3.25618696,5.18549681],mag:4.2,ci:.467,trueDistPc:16.42},{hip:112623,pos:[23.06783505,-18.85843176,-24.81412736],mag:3.466,ci:.126,trueDistPc:38.77},{hip:112716,pos:[92.4924864,-36.25272326,-9.85244393],mag:3.98,ci:1.402,trueDistPc:99.83},{hip:112724,pos:[14.09997587,9.24238548,32.53899245],mag:3.54,ci:.951,trueDistPc:36.65},{hip:112748,pos:[29.96912124,-2.94353201,16.95962485],mag:3.48,ci:.849,trueDistPc:34.56},{hip:112961,pos:[106.16542136,-35.36813851,-.75494733],mag:3.79,ci:1.453,trueDistPc:111.91},{hip:113136,pos:[39.89019675,-15.41160154,-6.15396459],mag:3.28,ci:.092,trueDistPc:43.21},{hip:113246,pos:[42.28467616,-22.29763626,-20.92500476],mag:4.208,ci:.869,trueDistPc:52.19},{hip:113368,pos:[6.45136808,-3.1646782,-2.77576594],mag:1.16,ci:.127,trueDistPc:7.7},{hip:113638,pos:[29.38956572,-23.01445494,-33.59896901],mag:4.115,ci:.875,trueDistPc:50.22},{hip:113881,pos:[51.43555287,-.56430406,31.07485218],mag:2.42,ci:1.47,trueDistPc:60.1},{hip:113963,pos:[38.31167052,-4.37716936,13.58142619],mag:2.48,ci:.016,trueDistPc:40.88},{hip:114131,pos:[28.53548389,-17.25702834,-22.86956606],mag:4.332,ci:.388,trueDistPc:40.44},{hip:114341,pos:[71.81150503,-26.11050156,-19.75064224],mag:3.64,ci:1.095,trueDistPc:78.92},{hip:114421,pos:[43.3675299,-26.5680454,-37.29744835],mag:3.877,ci:.9,trueDistPc:63.07},{hip:114855,pos:[43.87082812,-10.6912743,-3.15705247],mag:4.25,ci:.994,trueDistPc:45.26},{hip:114971,pos:[40.54600958,-6.09295875,5.22362546],mag:3.7,ci:.832,trueDistPc:41.33},{hip:114996,pos:[11.73599939,-9.69230359,-16.8223617],mag:3.98,ci:.381,trueDistPc:22.69},{hip:115102,pos:[47.97347118,-20.36832642,-25.06577647],mag:4.406,ci:1.004,trueDistPc:57.83},{hip:115438,pos:[46.67709698,-13.86357822,-12.85698179],mag:3.98,ci:.985,trueDistPc:50.36},{hip:115738,pos:[48.69791559,-6.06245582,3.80523957],mag:4.94,ci:.084,trueDistPc:49.22},{hip:115830,pos:[51.13814938,-4.30091206,8.15953174],mag:4.3,ci:.968,trueDistPc:51.97},{hip:116231,pos:[44.05384566,-18.48477097,-29.51920314],mag:4.37,ci:-.026,trueDistPc:56.16},{hip:116727,pos:[2.94353201,5.11686523,12.46044379],mag:2.943,ci:1.257,trueDistPc:13.79},{hip:116771,pos:[13.53567181,-.55667833,1.70053792],mag:4.12,ci:.475,trueDistPc:13.65},{hip:116928,pos:[31.94418547,-1.90643265,1.91405838],mag:4.51,ci:.228,trueDistPc:32.05},{hip:118268,pos:[32.79064156,1.47939174,3.66035069],mag:3.924,ci:.602,trueDistPc:33.03}],a5=`
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
`,s5=`
	precision mediump float;
	uniform vec3 uColor;
	uniform float uOpacity;
	void main() {
		gl_FragColor = vec4(uColor, uOpacity);
	}
`;function r5(i,e,t){const n=Math.round(i*vi)/vi,a=Math.round(e*vi)/vi,s=Math.round(t*vi)/vi;return{hx:n,hy:a,hz:s,lx:i-n,ly:e-a,lz:t-s}}function o5(){let i=0;for(const h of wh)i+=h.segments.length;const e=new Float32Array(i),t=new Float32Array(i);{let h=0;for(const m of wh)for(let S=0;S<m.segments.length;S+=3){const y=m.segments[S]*_i,M=m.segments[S+1]*_i,L=m.segments[S+2]*_i,A=r5(y,M,L);e[h]=A.hx,e[h+1]=A.hy,e[h+2]=A.hz,t[h]=A.lx,t[h+1]=A.ly,t[h+2]=A.lz,h+=3}}const n=new Tt;n.setAttribute("position",new Qe(e,3)),n.setAttribute("aPosLo",new Qe(t,3));function a(h,m){return new _t({uniforms:{uColor:{value:h},uOpacity:{value:m},uCamHi:{value:new I},uCamLo:{value:new I}},vertexShader:a5,fragmentShader:s5,transparent:!0,depthWrite:!1,blending:Ui})}const s=a(new rt(Xa.gridStrong),.6),r=new Es(n,s);r.renderOrder=1,r.frustumCulled=!1;const o=new rt(Xa.gridStrong).multiplyScalar(1.6),l=a(o,.32),c=new Es(n,l);c.renderOrder=0,c.frustumCulled=!1;const u=wo.map(h=>h.pos),d=wo.map(h=>h.mag),p=wo.map(h=>h.ci),f=E4(u,d,p,2.4,!1);f.object.renderOrder=1;const g=new Xi;g.add(c),g.add(r),g.add(f.object),g.visible=!1;function v(h,m){const S=h.uniforms.uCamHi.value,y=h.uniforms.uCamLo.value,M=Math.round(m.x*vi)/vi,L=Math.round(m.y*vi)/vi,A=Math.round(m.z*vi)/vi;S.set(M,L,A),y.set(m.x-M,m.y-L,m.z-A)}return{object:g,setVisible(h){g.visible=h},setCamDist(h){f.material.uniforms.uCamDist.value=h},setCamPos(h){v(s,h),v(l,h),f.setCamPos(h)},dispose(){n.dispose(),s.dispose(),l.dispose(),f.object.geometry.dispose(),f.material.dispose()}}}const Rt=299792458,Vl=30856775814914e3,Wl=9.80665,Ah=365.25*86400,l5=1e6;function Zu(i,e,t=l5){const n=e*Wl,a=i*Vl,s=a/2,r=Math.sqrt((s/Rt)**2+2*s/n),o=Rt/n*Math.acosh(1+n*s/(Rt*Rt)),l=1+n*s/(Rt*Rt),c=Rt*Math.sqrt(1-1/(l*l)),u=2*r,d=2*o,p=Math.exp(n*d/Rt),f=t*(p-1),g=f*Rt*Rt;return{distanceM:a,accelMS2:n,shipTimeS:d,earthTimeS:u,vMax:c,massRatio:p,fuelMassKg:f,energyJ:g,payloadKg:t}}function Th(i){return Math.min(i,1-i)*2}function c5(i,e,t,n){const a=t*Wl,s=e*Vl,r=n/2;let o;if(i<=r)o=Rt*Rt/a*(Math.sqrt(1+(a*i/Rt)**2)-1);else{const l=n-i;o=s-Rt*Rt/a*(Math.sqrt(1+(a*l/Rt)**2)-1)}return Math.max(0,Math.min(1,o/s))}function h5(i,e,t,n){const a=t*Wl,s=e*Vl,r=n/2;let o;if(i<=r)o=Rt*Rt/a*(Math.cosh(a*i/Rt)-1);else{const l=n-i;o=s-Rt*Rt/a*(Math.cosh(a*l/Rt)-1)}return Math.max(0,Math.min(1,o/s))}const jn=192,u5=96,d5=.55,Ju=10,p5=Ju,f5=1.4,m5=.55,g5=`
	attribute float aPhase;
	attribute float aArc;
	varying float vPhase;
	varying float vArc;
	void main() {
		vPhase = aPhase;
		vArc = aArc;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`,v5=`
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
`,_5=`
	uniform float uSize;
	void main() {
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		gl_PointSize = uSize;
	}
`,y5=`
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
`;function Ph(i,e){return new _t({uniforms:{uOpacity:{value:i},uBrightness:{value:e},uDashCount:{value:u5},uDashDuty:{value:d5}},vertexShader:g5,fragmentShader:v5,transparent:!0,depthWrite:!1,blending:Ui})}function S5(){const i=new Float32Array(jn);for(let _=0;_<jn;_++)i[_]=_/(jn-1);const e=new Tt,t=new Qe(new Float32Array(jn*3),3),n=new Qe(new Float32Array(jn),1),a=new Qe(i,1);t.setUsage(ms),n.setUsage(ms),e.setAttribute("position",t),e.setAttribute("aPhase",n),e.setAttribute("aArc",a);const s=t.array,r=n.array,o=Ph(.95,1),l=Ph(.42,1.7),c=new bs(e,o),u=new bs(e,l);c.renderOrder=2,u.renderOrder=1,c.frustumCulled=!1,u.frustumCulled=!1;const d=new Tt;d.setAttribute("position",new Qe(new Float32Array([0,0,0]),3));const p=new _t({uniforms:{uSize:{value:26},uPhase:{value:0},uAlpha:{value:1},uAngle:{value:0}},vertexShader:_5,fragmentShader:y5,transparent:!0,depthWrite:!1,blending:Ui}),f=new kn(d,p);f.renderOrder=3,f.frustumCulled=!1,f.visible=!1;const g=new Xi;g.add(u),g.add(c),g.add(f),g.visible=!1;const v=new I,h=new I;let m=0,S=1,y=0,M=!1,L=[],A=0;const P=new I,N=new I,j=new I;return{group:g,rebuild(_,b,K,V){j.copy(b),g.position.copy(j);for(let z=0;z<jn;z++){const se=z/(jn-1),W=z*3;s[W]=_.x+(b.x-_.x)*se-j.x,s[W+1]=_.y+(b.y-_.y)*se-j.y,s[W+2]=_.z+(b.z-_.z)*se-j.z,r[z]=Th(se)}t.needsUpdate=!0,n.needsUpdate=!0,v.copy(_),h.copy(b),m=V,S=K;const X=Zu(V,K);y=X.earthTimeS,M=!0,A=performance.now()/1e3,L=[];const Q=X.shipTimeS/Ah;for(let z=1;z<Q;z++){const se=h5(z*Ah,V,K,X.shipTimeS);se<=0||se>=1||L.push({worldPos:new I(_.x+(b.x-_.x)*se,_.y+(b.y-_.y)*se,_.z+(b.z-_.z)*se),label:`${z} y`})}},setVisible(_){g.visible=_,f.visible=_},tick(_,b,K,V){if(!g.visible||y===0)return;const Q=(_-A)%p5/Ju*y,z=c5(Q,m,S,y);f.position.set(v.x+(h.x-v.x)*z-j.x,v.y+(h.y-v.y)*z-j.y,v.z+(h.z-v.z)*z-j.z),p.uniforms.uPhase.value=Th(z);const se=Math.sin(_*2*Math.PI/f5);p.uniforms.uAlpha.value=1-m5*(.5-.5*se),P.copy(v).project(b),N.copy(h).project(b);const W=(P.x*.5+.5)*K,ge=(-P.y*.5+.5)*V,he=(N.x*.5+.5)*K,Ae=(-N.y*.5+.5)*V,ze=z<.5?1:-1,Ne=(he-W)*ze,C=(Ae-ge)*ze;Ne*Ne+C*C>1e-6&&(p.uniforms.uAngle.value=Math.atan2(-C,Ne))},getTicks(){return L},getEndpoints(){return M?{from:v,to:h}:null},dispose(){e.dispose(),o.dispose(),l.dispose(),d.dispose(),p.dispose()}}}const x5=`
	varying vec3 vDir;
	void main() {
		vDir = normalize(position);
		// Lock the sphere to the camera so it always renders as a backdrop.
		mat4 mvNoTrans = modelViewMatrix;
		mvNoTrans[3].xyz = vec3(0.0);
		gl_Position = projectionMatrix * mvNoTrans * vec4(position, 1.0);
		gl_Position.z = gl_Position.w; // force depth to far plane
	}
`,M5=`
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
`;async function b5(i,e=.34){const t=await new Vm().loadAsync(i);t.colorSpace=Hi,t.generateMipmaps=!1;const n=Hu*Math.PI/180,a=new _t({side:ci,depthWrite:!1,depthTest:!1,uniforms:{tEquirect:{value:t},uIntensity:{value:e},uCe:{value:Math.cos(n)},uSe:{value:Math.sin(n)}},vertexShader:x5,fragmentShader:M5}),s=new Bt(new Wa(1,64,32),a);return s.frustumCulled=!1,s.renderOrder=-1e3,{mesh:s,texture:t,setIntensity(r){a.uniforms.uIntensity.value=r}}}const Qu=[{id:"ALPHA_CENTAURI",name:"Alpha Centauri",ra:219.818254,dec:-60.941842,dist:1.3491,tier:"primary",mag:-.1,pos:[-.50329822,-.85408183,-.91508767],children:[{kind:"star",size:.0013,color:16773848,halo:{size:.0017,color:16767392,opacity:.3}},{kind:"star",offset:[.0728,0,0],size:.0011,color:16763018,halo:{size:.0015,color:16755302,opacity:.3}}]},{id:"PROXIMA_CEN",name:"Proxima Centauri",ra:217.564292,dec:-62.688378,dist:1.3,tier:"primary",mag:11.13,pos:[-.4727953,-.79307598,-.91508767],children:[{kind:"star",size:9e-4,color:16750950,halo:{size:.0013,color:16733491,opacity:.34}},{kind:"planet",id:"Proxima Cen d",name:"d",orbitRadius:187265e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Proxima Cen b",name:"b",orbitRadius:31512e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371}]},{id:"SIRIUS",name:"Sirius",ra:101.336393,dec:-16.70207,dist:2.6327,tier:"primary",mag:-1.46,pos:[-.49567249,1.96743849,-1.67766073],children:[{kind:"star",size:.0017,color:13293567,halo:{size:.0024,color:8956671,opacity:.32}},{kind:"star",offset:[7960204194457797e-33,.13,0],size:6e-4,color:13162495,halo:{size:.001,color:8956671,opacity:.4}}]},{id:"PROCYON",name:"Procyon",ra:114.857433,dec:5.250598,dist:3.5159,tier:"primary",mag:.37,pos:[-1.47176601,3.04266651,-.96846779],children:[{kind:"star",size:.0014,color:16775398},{kind:"star",offset:[.0689429,.0689429,0],size:6e-4,color:13162495,halo:{size:9e-4,color:8956671,opacity:.36}}]},{id:"EPSILON_ERIDANI",name:"Epsilon Eridani",ra:53.214787,dec:-9.454435,dist:3.2146,tier:"primary",mag:3.73,pos:[1.89880692,2.11995311,-1.4946432],children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"eps Eri b",name:"b",orbitRadius:.022945,size:.00105,color:13030621,inc:5.0142,node:0,realRadiusKm:6371}]},{id:"40_ERIDANI",name:"40 Eridani",ra:63.870617,dec:-7.646216,dist:5.0141,tier:"primary",mag:4.43,pos:[2.18858468,3.82811676,-2.38685368],children:[{kind:"star",size:.0011,color:16769448},{kind:"star",offset:[-.11375,.197021,0],size:6e-4,color:13162495,halo:{size:.001,color:8956671,opacity:.36}}]},{id:"BARNARD_S_STAR",name:"Barnard's Star",ra:269.519619,dec:4.731608,dist:1.8253,tier:"secondary",mag:9.511,pos:[-.01525146,-1.60902916,.86170756],children:[{kind:"star",size:8e-4,color:16745779},{kind:"planet",id:"Barnard d",name:"d",orbitRadius:1222e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Barnard b",name:"b",orbitRadius:14885e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Barnard c",name:"c",orbitRadius:1781e-7,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"Barnard e",name:"e",orbitRadius:24765e-8,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371}]},{id:"LALANDE_21185",name:"Lalande 21185",ra:165.804898,dec:36.032434,dist:2.5484,tier:"secondary",mag:7.52,pos:[-1.99794142,1.05997655,1.17436251],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"GJ 411 b",name:"b",orbitRadius:512135e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"HD 95735 c",name:"c",orbitRadius:.01911,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371}]},{id:"EPSILON_INDI",name:"Epsilon Indi",ra:330.956268,dec:-56.851064,dist:3.637,tier:"secondary",mag:4.69,pos:[1.73866658,-2.09707591,-2.40973087],children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[-4.7125,-8.16229,0],size:5e-4,color:6702114,halo:{size:9e-4,color:5583633,opacity:.28}},{kind:"planet",id:"eps Ind A b",name:"b",orbitRadius:.13585,size:.00105,color:13030621,inc:5.214,node:0,realRadiusKm:6371}]},{id:"ROSS_128",name:"Ross 128",ra:176.94229,dec:.760661,dist:3.3757,tier:"secondary",mag:11.153,pos:[-3.37057292,.18301753,-.03050292],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"Ross 128 b",name:"b",orbitRadius:3224e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371}]},{id:"61_CYGNI",name:"61 Cygni",ra:316.650271,dec:38.759359,dist:3.4966,tier:"secondary",mag:5.21,pos:[1.98268996,-.8464561,2.75288875],children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[.47285,.273,0],size:.001,color:16761994,halo:{size:.0014,color:16750950,opacity:.3}}]},{id:"GLIESE_570",name:"Gliese 570",ra:224.337479,dec:-21.429304,dist:5.8872,tier:"secondary",mag:5.72,pos:[-3.91962553,-4.36954363,-.44991811],children:[{kind:"star",size:.0011,color:16762008},{kind:"star",offset:[.1625,0,0],size:9e-4,color:16757898,halo:{size:.0012,color:16748902,opacity:.3}}]},{id:"ETA_CASSIOPEIAE",name:"Eta Cassiopeiae",ra:12.183737,dec:57.805427,dist:5.9302,tier:"secondary",mag:3.44,pos:[3.08842089,2.60799986,4.33904071],children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[.23075,.399671,0],size:.001,color:16761994,halo:{size:.0013,color:16750950,opacity:.3}}]},{id:"TRAPPIST_1",name:"TRAPPIST-1",ra:346.615635,dec:-5.046733,dist:12.4647,tier:"secondary",mag:18.798,pos:[12.07915726,-3.07316943,.13726315],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"TRAPPIST-1 b",name:"b",orbitRadius:7501e-8,size:.00107033,color:13030621,inc:3.04896,node:0,realRadiusKm:7110.04},{kind:"planet",id:"TRAPPIST-1 c",name:"c",orbitRadius:1027e-7,size:.00106708,color:13030621,inc:3.03996,node:137.508,realRadiusKm:6988.99},{kind:"planet",id:"TRAPPIST-1 d",name:"d",orbitRadius:144755e-9,size:.00100959,color:13030621,inc:3.01872,node:275.016,realRadiusKm:5020.35},{kind:"planet",id:"TRAPPIST-1 e",name:"e",orbitRadius:190125e-9,size:.00103528,color:13030621,inc:3.03726,node:52.524,realRadiusKm:5861.32},{kind:"planet",id:"TRAPPIST-1 f",name:"f",orbitRadius:250185e-9,size:.00105803,color:13030621,inc:3.0468,node:190.032,realRadiusKm:6657.69},{kind:"planet",id:"TRAPPIST-1 g",name:"g",orbitRadius:304395e-9,size:.00107254,color:13030621,inc:3.04644,node:327.54,realRadiusKm:7192.86},{kind:"planet",id:"TRAPPIST-1 h",name:"h",orbitRadius:402285e-9,size:.00100287,color:13030621,inc:3.0351,node:105.048,realRadiusKm:4810.11}]},{id:"LHS_1140",name:"LHS 1140",ra:11.240038,dec:-15.269014,dist:14.9662,tier:"secondary",mag:14.15,pos:[14.16098172,1.01422217,-4.7355787],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"LHS 1140 c",name:"c",orbitRadius:1755e-7,size:.00109599,color:13030621,inc:3.036,node:0,realRadiusKm:8103.91},{kind:"planet",id:"LHS 1140 b",name:"b",orbitRadius:6149e-7,size:.00116223,color:13030621,inc:3.0252,node:137.508,realRadiusKm:11021.8}]},{id:"K2_18",name:"K2-18",ra:172.557234,dec:7.586269,dist:38.1017,tier:"secondary",mag:13.5,pos:[-37.44996296,6.48949674,2.66900571],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"K2-18 c",name:"c",orbitRadius:39e-5,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"K2-18 b",name:"b",orbitRadius:92885e-8,size:.00123819,color:13030621,inc:15,node:137.508,realRadiusKm:15099.3}]},{id:"TOI_700",name:"TOI-700",ra:97.082237,dec:-65.580502,dist:31.1185,tier:"secondary",mag:13.076,pos:[-1.58615196,.44229237,-31.07485218],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"TOI-700 b",name:"b",orbitRadius:44005e-8,size:.00103415,color:13030621,inc:3.072,node:0,realRadiusKm:5823.09},{kind:"planet",id:"TOI-700 c",name:"c",orbitRadius:60385e-8,size:.001262,color:13030621,inc:3.19746,node:137.508,realRadiusKm:16564.6},{kind:"planet",id:"TOI-700 e",name:"e",orbitRadius:871e-6,size:.00104142,color:13030621,inc:3.072,node:275.016,realRadiusKm:6071.56},{kind:"planet",id:"TOI-700 d",name:"d",orbitRadius:.00106145,size:.00106293,color:13030621,inc:3.036,node:52.524,realRadiusKm:6836.08}]},{id:"GLIESE_667_C",name:"Gliese 667 C",ra:259.782103,dec:-34.987564,dist:7.241,tier:"secondary",mag:10.22,pos:[-1.05235082,-7.00804642,-1.48701747],children:[{kind:"star",size:.0011,color:16767159},{kind:"planet",id:"GJ 667 C c",name:"c",orbitRadius:8125e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C f",name:"f",orbitRadius:.001014,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C e",name:"e",orbitRadius:.0013845,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C g",name:"g",orbitRadius:.0035685,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371}]},{id:"TEEGARDEN_S_STAR",name:"Teegarden's Star",ra:43.23724,dec:16.89872,dist:3.8289,tier:"secondary",mag:15.14,pos:[2.66900571,2.74526301,.02287719],children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"Teegarden's Star b",name:"b",orbitRadius:16835e-8,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Teegarden's Star c",name:"c",orbitRadius:29575e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Teegarden's Star d",name:"d",orbitRadius:51415e-8,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"WOLF_1061",name:"Wolf 1061",ra:247.609593,dec:-12.675592,dist:4.3091,tier:"secondary",mag:10.072,pos:[-1.60140343,-3.94250272,.67869002],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"Wolf 1061 b",name:"b",orbitRadius:24375e-8,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Wolf 1061 c",name:"c",orbitRadius:5785e-7,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Wolf 1061 d",name:"d",orbitRadius:.003055,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"HD_219134",name:"HD 219134",ra:348.260917,dec:57.19172,dist:6.5405,tier:"secondary",mag:5.57,pos:[3.46970742,1.52514612,5.33038569],children:[{kind:"star",size:.0011,color:16758144},{kind:"planet",id:"HD 219134 b",name:"b",orbitRadius:25194e-8,size:.00114491,color:13030621,inc:3.891,node:0,realRadiusKm:10206.3},{kind:"planet",id:"HD 219134 c",name:"c",orbitRadius:42445e-8,size:.00113207,color:13030621,inc:3.4896,node:137.508,realRadiusKm:9626.58},{kind:"planet",id:"HD 219134 f",name:"f",orbitRadius:95095e-8,size:.00110197,color:13030621,inc:15,node:275.016,realRadiusKm:8346.01},{kind:"planet",id:"HD 219134 d",name:"d",orbitRadius:.0015405,size:.00114601,color:13030621,inc:15,node:52.524,realRadiusKm:10257.3},{kind:"planet",id:"HD 219134 g",name:"g",orbitRadius:.00243945,size:.00105,color:13030621,inc:15,node:190.032,realRadiusKm:6371},{kind:"planet",id:"HD 219134 h",name:"h",orbitRadius:.020215,size:.00105,color:13030621,inc:15,node:327.54,realRadiusKm:6371}]},{id:"UPSILON_ANDROMEDAE",name:"Upsilon Andromedae",ra:24.224027,dec:41.400744,dist:13.4777,tier:"secondary",mag:4.1,pos:[9.21950829,7.35120429,6.52762539],children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"ups And b",name:"b",orbitRadius:384941e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"ups And c",name:"c",orbitRadius:.00538053,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"ups And d",name:"d",orbitRadius:.0163364,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"55_CANCRI",name:"55 Cancri",ra:133.162081,dec:28.325526,dist:12.588,tier:"secondary",mag:5.95,pos:[-7.57997621,9.79143809,2.26484199],children:[{kind:"star",size:.0011,color:16769478},{kind:"planet",id:"55 Cnc e",name:"e",orbitRadius:10036e-8,size:.00118089,color:13030621,inc:4.1538,node:0,realRadiusKm:11945.6},{kind:"planet",id:"55 Cnc b",name:"b",orbitRadius:767e-6,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"55 Cnc c",name:"c",orbitRadius:.0016055,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"55 Cnc f",name:"f",orbitRadius:.005213,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371},{kind:"planet",id:"55 Cnc d",name:"d",orbitRadius:.0364,size:.00105,color:13030621,inc:15,node:190.032,realRadiusKm:6371}]}],E5=[{id:"TEEGARDEN_S_STAR",name:"Teegarden's Star",ra:43.23724,dec:16.89872,dist:3.8289,tier:"secondary",mag:15.14,pos:[2.66900571,2.74526301,.02287719]},{id:"WOLF_1061",name:"Wolf 1061",ra:247.609593,dec:-12.675592,dist:4.3091,tier:"secondary",mag:10.07,pos:[-1.60140343,-3.94250272,.67869002]},{id:"HD_219134",name:"HD 219134",ra:348.260917,dec:57.19172,dist:6.5405,tier:"secondary",mag:5.57,pos:[3.46970742,1.52514612,5.33038569]},{id:"GLIESE_667_C",name:"Gliese 667 C",ra:259.782103,dec:-34.987564,dist:7.241,tier:"secondary",mag:10.22,pos:[-1.05235082,-7.00804642,-1.48701747]},{id:"MUPHRID",name:"Muphrid",ra:208.68252,dec:18.380204,dist:11.3946,tier:"secondary",mag:2.68,pos:[-9.48640886,-3.33244427,5.36088861]},{id:"DENEB_ALGEDI",name:"Deneb Algedi",ra:326.750282,dec:-16.119945,dist:11.6369,tier:"secondary",mag:2.83,pos:[9.34914571,-6.90891192,-.52617541]},{id:"PORRIMA",name:"Porrima",ra:190.410483,dec:-1.437166,dist:12.0215,tier:"secondary",mag:2.74,pos:[-11.81988242,-2.11232738,.58718126]},{id:"TRAPPIST_1",name:"TRAPPIST-1",ra:346.615635,dec:-5.046733,dist:12.4647,tier:"secondary",mag:18.8,pos:[12.07915726,-3.07316943,.13726315]},{id:"55_CANCRI",name:"55 Cancri",ra:133.162081,dec:28.325526,dist:12.588,tier:"secondary",pos:[-7.57997621,9.79143809,2.26484199]},{id:"UPSILON_ANDROMEDAE",name:"Upsilon Andromedae",ra:24.224027,dec:41.400744,dist:13.4777,tier:"secondary",mag:4.1,pos:[9.21950829,7.35120429,6.52762539]},{id:"ALSHAIN",name:"Alshain",ra:298.846792,dec:6.406353,dist:13.5987,tier:"secondary",mag:3.71,pos:[6.51999966,-10.25660765,6.10058448]},{id:"ERRAI",name:"Errai",ra:354.916565,dec:77.623904,dist:13.788,tier:"secondary",pos:[2.94353201,5.11686523,12.46044379]},{id:"RASALHAGUE",name:"Rasalhague",ra:263.737797,dec:12.567117,dist:14.8983,tier:"secondary",mag:2.07,pos:[-1.58615196,-11.97239704,8.7238358]},{id:"LHS_1140",name:"LHS 1140",ra:11.240038,dec:-15.269014,dist:14.9662,tier:"secondary",mag:14.15,pos:[14.16098172,1.01422217,-4.7355787]},{id:"ALDERAMIN",name:"Alderamin",ra:319.651571,dec:62.585616,dist:15.0386,tier:"secondary",mag:2.46,pos:[5.27700557,1.1972397,14.0313443]},{id:"CAPH",name:"Caph",ra:2.283409,dec:59.14796,dist:16.7868,tier:"secondary",mag:2.27,pos:[8.60182411,6.04720436,13.0857537]},{id:"ZOSMA",name:"Zosma",ra:168.533303,dec:20.532935,dist:17.914,tier:"secondary",mag:2.53,pos:[-16.44107517,5.5591576,4.43817521]},{id:"MENKENT",name:"Menkent",ra:211.661922,dec:-36.366346,dist:18.0354,tier:"secondary",mag:2.05,pos:[-12.3613093,-11.24795263,-6.7792745]},{id:"WASAT",name:"Wasat",ra:110.034447,dec:21.972241,dist:18.6022,tier:"secondary",mag:3.53,pos:[-5.90994121,17.63831487,-.06100584]},{id:"SARIN",name:"Sarin",ra:258.76097,dec:24.844483,dist:23.5414,tier:"secondary",mag:3.13,pos:[-4.16364891,-15.28958985,17.40954295]},{id:"ALJANAH",name:"Aljanah",ra:311.560656,dec:33.975383,dist:23.1619,tier:"secondary",mag:2.48,pos:[12.74259583,-8.03752005,17.59256049]},{id:"KAUS_BOREALIS",name:"Kaus Borealis",ra:276.99314,dec:-25.424124,dist:23.3017,tier:"secondary",mag:2.81,pos:[2.56224548,-23.14409236,-.86933329]},{id:"MEGREZ",name:"Megrez",ra:183.852924,dec:57.03639,dist:24.7928,tier:"secondary",mag:3.32,pos:[-13.4594145,7.44271306,19.44561302]},{id:"MENKALINAN",name:"Menkalinan",ra:89.87587,dec:44.953527,dist:24.8692,tier:"secondary",mag:1.9,pos:[.03812865,23.13646663,9.12037379]},{id:"ALCOR",name:"Alcor",ra:201.308276,dec:54.992366,dist:24.712,tier:"secondary",mag:4.01,pos:[-13.20776539,3.32481854,20.61997553]},{id:"ALIOTH",name:"Alioth",ra:193.500507,dec:55.954317,dist:25.3125,tier:"secondary",mag:1.77,pos:[-13.77969519,5.3075085,20.55896969]},{id:"CEBALRAI",name:"Cebalrai",ra:265.869134,dec:4.566768,dist:25.4877,tier:"secondary",mag:2.75,pos:[-1.83017534,-22.44252515,11.94189411]},{id:"PHECDA",name:"Phecda",ra:178.461627,dec:53.705282,dist:25.5039,tier:"secondary",mag:2.44,pos:[-15.09132085,8.548444,18.69829142]},{id:"MERAK",name:"Merak",ra:165.480905,dec:56.379374,dist:25.9071,tier:"secondary",mag:2.37,pos:[-13.88645542,11.88088827,18.36275928]},{id:"MIZAR",name:"Mizar",ra:200.971614,dec:54.917482,dist:24.8658,tier:"secondary",pos:[-13.34502854,3.40107585,20.70385857]},{id:"SEGINUS",name:"Seginus",ra:218.02272,dec:38.306984,dist:26.3747,tier:"secondary",mag:3.02,pos:[-16.30381202,-5.19312254,20.07092293]},{id:"ASCELLA",name:"Ascella",ra:285.660482,dec:-29.876982,dist:27.0415,tier:"secondary",mag:2.59,pos:[6.3293564,-26.07237291,-3.37819865]},{id:"SABIK",name:"Sabik",ra:257.587767,dec:-15.72609,dist:27.0902,tier:"secondary",mag:2.42,pos:[-5.60491199,-26.28589337,3.39345012]},{id:"GACRUX",name:"Gacrux",ra:187.798343,dec:-57.119978,dist:27.1506,tier:"secondary",mag:1.64,pos:[-14.60327409,-10.90479475,-20.12430304]},{id:"ALGOL",name:"Algol",ra:47.03889,dec:40.947926,dist:27.5701,tier:"secondary",mag:2.12,pos:[14.19148464,21.16902814,10.51588249]},{id:"ALPHERATZ",name:"Alpheratz",ra:2.102629,dec:29.089481,dist:29.7424,tier:"secondary",mag:2.06,pos:[25.97323841,6.62675989,12.88748471]},{id:"RUCHBAH",name:"Ruchbah",ra:21.456866,dec:60.230901,dist:31.2228,tier:"secondary",mag:2.68,pos:[14.42788229,15.98353133,22.61029122]},{id:"ALNAIR",name:"Alnair",ra:332.069036,dec:-46.960762,dist:30.971,tier:"secondary",mag:1.71,pos:[18.67541423,-18.08823297,-16.82998743]},{id:"TOI_700",name:"TOI-700",ra:97.082237,dec:-65.580502,dist:31.1185,tier:"secondary",mag:13.08,pos:[-1.58615196,.44229237,-31.07485218]},{id:"ALKAID",name:"Alkaid",ra:206.884366,dec:49.308268,dist:31.8655,tier:"secondary",mag:1.86,pos:[-18.53052535,.99134498,25.90460684]},{id:"VINDEMIATRIX",name:"Vindemiatrix",ra:195.53476,dec:10.956998,dist:33.1019,tier:"secondary",mag:2.79,pos:[-31.31124983,-5.4829003,9.23475975]},{id:"ALGEDI",name:"Algedi",ra:304.516626,dec:-12.54414,dist:33.4329,tier:"secondary",mag:3.58,pos:[18.4923967,-27.55939038,4.03401149]},{id:"ALHENA",name:"Alhena",ra:99.433983,dec:16.398152,dist:33.5109,tier:"secondary",mag:1.92,pos:[-5.26937984,32.85927314,-3.93487699]},{id:"MIAPLACIDUS",name:"Miaplacidus",ra:138.309257,dec:-69.714189,dist:34.6973,tier:"secondary",mag:1.69,pos:[-8.98311064,-5.60491199,-33.04229067]},{id:"DUBHE",name:"Dubhe",ra:165.924263,dec:61.754044,dist:37.6761,tier:"secondary",mag:1.79,pos:[-17.29515699,17.18077103,28.72612716]},{id:"K2_18",name:"K2-18",ra:172.557234,dec:7.586269,dist:38.1017,tier:"secondary",mag:13.5,pos:[-37.44996296,6.48949674,2.66900571]},{id:"ALGIEBA",name:"Algieba",ra:154.952202,dec:19.979464,dist:40.5814,tier:"secondary",pos:[-34.55218533,20.33019777,6.29885347]},{id:"MUHLIFAIN",name:"Muhlifain",ra:190.379227,dec:-48.95706,dist:39.9067,tier:"secondary",mag:2.17,pos:[-25.77496942,-16.30381202,-25.73684076]},{id:"KOCHAB",name:"Kochab",ra:222.657238,dec:74.156434,dist:40.1457,tier:"secondary",mag:2.08,pos:[-8.06039724,8.548444,38.38792782]},{id:"MARKAB",name:"Markab",ra:346.188569,dec:15.200821,dist:40.8827,tier:"secondary",mag:2.48,pos:[38.31167052,-4.37716936,13.58142619]},{id:"ELNATH",name:"Elnath",ra:81.569105,dec:28.604457,dist:41.0548,tier:"secondary",mag:1.65,pos:[5.2846313,40.53075812,3.85099395]},{id:"ACHERNAR",name:"Achernar",ra:24.436431,dec:-57.240771,dist:42.7541,tier:"secondary",mag:.46,pos:[21.06226791,-5.52102895,-36.79415013]},{id:"SKAT",name:"Skat",ra:343.663945,dec:-15.817697,dist:43.2044,tier:"secondary",mag:3.28,pos:[39.89019675,-15.41160154,-6.15396459]},{id:"KAUS_AUSTRALIS",name:"Kaus Australis",ra:276.047436,dec:-34.378852,dist:43.9394,tier:"secondary",mag:1.81,pos:[3.82049103,-42.95574045,-8.41880658]},{id:"AIN",name:"Ain",ra:67.157215,dec:19.177296,dist:44.7152,tier:"secondary",mag:3.53,pos:[16.39532078,41.55260602,-2.00556715]},{id:"KORNEPHOROS",name:"Kornephoros",ra:247.557533,dec:21.490888,dist:45.4477,tier:"secondary",mag:2.77,pos:[-16.14367167,-29.23705111,30.82320307]},{id:"HYADUM_I",name:"Hyadum I",ra:64.952892,dec:15.624451,dist:46.16,tier:"secondary",mag:3.65,pos:[18.82030311,41.8957639,-4.61356701]},{id:"PRIMA_HYADUM",name:"Prima Hyadum",ra:64.952892,dec:15.624451,dist:46.16,tier:"secondary",mag:3.65,pos:[18.82030311,41.8957639,-4.61356701]},{id:"ELTANIN",name:"Eltanin",ra:269.15455,dec:51.486447,dist:47.3073,tier:"secondary",mag:2.23,pos:[-.43466664,-12.30030345,45.67812627]},{id:"CHERTAN",name:"Chertan",ra:168.565088,dec:15.429673,dist:49.2254,tier:"secondary",mag:3.35,pos:[-46.50933091,13.84070103,8.2739177]},{id:"HYADUM_II",name:"Hyadum II",ra:65.736923,dec:17.542998,dist:49.2403,tier:"secondary",mag:3.76,pos:[19.29309841,45.17482805,-3.40870158]},{id:"GOMEISA",name:"Gomeisa",ra:111.788278,dec:8.292385,dist:49.579,tier:"secondary",mag:2.89,pos:[-18.21024466,44.64102691,-11.56060758]},{id:"ACAMAR",name:"Acamar",ra:44.563906,dec:-40.298412,dist:50.2404,tier:"secondary",mag:3.18,pos:[27.30011554,11.74362512,-40.50788093]},{id:"MAHASIM",name:"Mahasim",ra:89.93515,dec:37.214551,dist:50.7604,tier:"secondary",mag:2.62,pos:[.04575438,49.30034831,12.086783]},{id:"PEACOCK",name:"Peacock",ra:306.413734,dec:-56.734225,dist:54.8258,tier:"secondary",mag:1.92,pos:[17.85183533,-40.43924935,-32.43223223]},{id:"ALPHARD",name:"Alphard",ra:141.897726,dec:-8.657438,dist:55.2758,tier:"secondary",mag:1.97,pos:[-43.00149483,27.62802195,-21.04701645]},{id:"AUVA",name:"Auva",ra:193.89999,dec:3.395647,dist:57.448,tier:"secondary",mag:3.38,pos:[-55.66783335,-11.28608128,8.60182411]},{id:"ZAURAK",name:"Zaurak",ra:59.503184,dec:-13.512457,dist:58.8184,tier:"secondary",mag:2.94,pos:[29.02353065,39.74530787,-32.21108604]},{id:"SCHEAT",name:"Scheat",ra:345.943092,dec:28.07841,dist:60.0964,tier:"secondary",mag:2.42,pos:[51.43555287,-.56430406,31.07485218]},{id:"MATAR",name:"Matar",ra:340.750079,dec:30.224133,dist:60.1269,tier:"secondary",mag:2.95,pos:[49.0486992,-3.67560215,34.58268825]},{id:"MIRACH",name:"Mirach",ra:17.435673,dec:35.6239,dist:60.533,tier:"secondary",mag:2.05,pos:[46.94399755,27.55176464,26.48416236]},{id:"NUNKI",name:"Nunki",ra:283.819405,dec:-26.296493,dist:69.832,tier:"secondary",mag:2.07,pos:[14.9540577,-68.08252276,-4.20177756]},{id:"SCHEDAR",name:"Schedar",ra:10.12636,dec:56.534059,dist:70.9683,tier:"secondary",mag:2.23,pos:[38.52519097,29.86236102,51.58044175]},{id:"NEKKAR",name:"Nekkar",ra:225.484176,dec:40.388702,dist:72.0577,tier:"secondary",mag:3.52,pos:[-38.47943659,-17.33328565,58.40547064]},{id:"IZAR",name:"Izar",ra:221.243136,dec:27.073295,dist:72.3247,tier:"secondary",mag:2.45,pos:[-48.42338929,-25.85885245,47.08888643]},{id:"ALBALI",name:"Albali",ra:311.921641,dec:-9.498155,dist:74.8392,tier:"secondary",mag:3.77,pos:[49.31559977,-55.30179829,10.51588249]},{id:"SPICA",name:"Spica",ra:201.298673,dec:-11.161731,dist:76.568,tier:"secondary",mag:.97,pos:[-69.98895541,-30.9299633,-2.74526301]},{id:"BELLATRIX",name:"Bellatrix",ra:81.282005,dec:6.351924,dist:77.401,tier:"secondary",mag:1.64,pos:[11.65974208,73.16888507,-22.38914503]},{id:"THUBAN",name:"Thuban",ra:211.096016,dec:64.377746,dist:79.9031,tier:"secondary",mag:3.68,pos:[-29.58783471,12.28505199,73.199388]},{id:"MIMOSA",name:"Mimosa",ra:191.934793,dec:-59.687501,dist:85.3985,tier:"secondary",mag:1.25,pos:[-42.1702902,-37.50334307,-64.09426566]},{id:"CANOPUS",name:"Canopus",ra:95.98916,dec:-52.694922,dist:94.7845,tier:"secondary",mag:-.74,pos:[-5.99382425,22.42727368,-91.89767942]},{id:"ACRUX",name:"Acrux",ra:186.631368,dec:-63.122043,dist:106.4217,tier:"secondary",pos:[-47.79045365,-42.85660595,-84.88200727]},{id:"TAYGETA",name:"Taygeta",ra:56.302694,dec:24.466136,dist:104.7696,tier:"secondary",mag:4.3,pos:[52.90731888,90.05225261,8.25104051]},{id:"RASALGETHI",name:"Rasalgethi",ra:258.756039,dec:14.283567,dist:107.994,tier:"secondary",mag:3.48,pos:[-20.40645508,-83.57800734,65.27625391]},{id:"ALPHERG",name:"Alpherg",ra:22.872181,dec:15.345544,dist:114.4986,tier:"secondary",mag:3.62,pos:[101.73487189,51.42792714,10.72940295]},{id:"RASTABAN",name:"Rastaban",ra:262.610512,dec:52.302641,dist:116.5492,tier:"secondary",mag:2.81,pos:[-9.16612818,-28.16182309,112.72354968]},{id:"DABIH",name:"Dabih",ra:305.25313,dec:-14.782973,dist:119.0964,tier:"secondary",mag:3.08,pos:[66.46586788,-98.36429896,9.52453751]},{id:"ELECTRA",name:"Electra",ra:56.219484,dec:24.113537,dist:119.8193,tier:"secondary",mag:3.7,pos:[60.80757578,102.87110575,8.75433872]},{id:"HADAR",name:"Hadar",ra:210.955302,dec:-60.372628,dist:120.1927,tier:"secondary",mag:.58,pos:[-50.95513185,-69.60004315,-83.70001903]},{id:"ALMACH",name:"Almach",ra:30.972513,dec:42.328345,dist:120.482,tier:"secondary",mag:2.1,pos:[76.37169192,74.32799612,56.2016345]},{id:"ATLAS",name:"Atlas",ra:57.290343,dec:24.051279,dist:123.1789,tier:"secondary",mag:3.63,pos:[60.78469858,106.80598273,8.41118085]},{id:"ALCYONE",name:"Alcyone",ra:56.870764,dec:24.114723,dist:136.774,tier:"secondary",mag:2.87,pos:[68.22741165,118.14544413,9.68467786]},{id:"ACRAB",name:"Acrab",ra:241.359941,dec:-19.804854,dist:123.9176,tier:"secondary",mag:2.62,pos:[-55.88135381,-110.58071938,2.18095895]},{id:"ADHARA",name:"Adhara",ra:104.656914,dec:-28.9729,dist:124.2228,tier:"secondary",mag:1.5,pos:[-27.49838453,72.5283237,-97.02979611]},{id:"MAIA",name:"Maia",ra:56.458157,dec:24.366384,dist:130.3558,tier:"secondary",mag:3.87,pos:[65.61178605,112.19737427,9.97445562]},{id:"POLARIS",name:"Polaris",ra:38.037552,dec:89.263824,dist:132.6287,tier:"secondary",mag:2.02,pos:[1.34212858,53.71564632,121.25674221]},{id:"CELAENO",name:"Celaeno",ra:56.202161,dec:24.288037,dist:135.4054,tier:"secondary",mag:5.46,pos:[68.65445256,116.25426294,10.30236204]},{id:"ASTEROPE",name:"Asterope",ra:56.477885,dec:24.555692,dist:136.8896,tier:"secondary",mag:5.76,pos:[68.76121279,117.8632921,10.90479475]},{id:"PLEIONE",name:"Pleione",ra:57.295876,dec:24.135021,dist:138.0942,tier:"secondary",mag:5.09,pos:[68.0901485,119.75447329,9.62367201]},{id:"MEROPE",name:"Merope",ra:56.581604,dec:23.94791,dist:141.5041,tier:"secondary",mag:4.18,pos:[71.22432377,121.88205212,9.76093516]},{id:"SEGIN",name:"Segin",ra:28.598662,dec:63.671104,dist:142.7777,tier:"secondary",mag:3.37,pos:[55.59920178,78.71279122,105.34946819]},{id:"ALGENIB",name:"Algenib",ra:3.309088,dec:15.182071,dist:143.9368,tier:"secondary",mag:2.84,pos:[138.68153663,22.35101638,31.39513287]},{id:"DSCHUBBA",name:"Dschubba",ra:240.084047,dec:-22.620504,dist:150.6053,tier:"secondary",mag:2.32,pos:[-69.33314258,-133.59517432,-5.21599973]},{id:"MIRZAM",name:"Mirzam",ra:95.673815,dec:-17.95667,dist:151.0563,tier:"secondary",mag:1.97,pos:[-14.2067361,112.67016956,-99.60729305]},{id:"PHERKAD",name:"Pherkad",ra:230.182972,dec:71.834023,dist:151.6065,tier:"secondary",mag:3,pos:[-30.26652474,23.99054846,146.60467072]},{id:"BETELGEUSE",name:"Betelgeuse",ra:88.793589,dec:7.408511,dist:152.6714,tier:"secondary",mag:.42,pos:[3.18755539,146.70380521,-42.14741301]}],w5=24611855e-1,A5=[{id:"MERCURY",name:"Mercury",color:10129544,radiusKm:2440.5,obliquityDeg:.034,aAU:.38709761,e:.2056373,iDeg:7.0034221,nodeDeg:48.297722,periDeg:29.200358,M0Deg:26.945045,nDegPerDay:4.0923553},{id:"VENUS",name:"Venus",color:15124625,radiusKm:6051.8,obliquityDeg:177.36,aAU:.72331056,e:.0067616859,iDeg:3.3944358,nodeDeg:76.606367,periDeg:54.964233,M0Deg:15.749959,nDegPerDay:1.6022005},{id:"EARTH",name:"Earth",color:4882355,radiusKm:6371,obliquityDeg:23.44,aAU:.99975785,e:.016602201,iDeg:.0046175334,nodeDeg:198.53965,periDeg:262.96032,M0Deg:140.77244,nDegPerDay:.98596577},{id:"MARS",name:"Mars",color:12873038,radiusKm:3389.5,obliquityDeg:25.19,aAU:1.5237188,e:.093424811,iDeg:1.8475809,nodeDeg:49.479943,periDeg:286.69756,M0Deg:31.223275,nDegPerDay:.52401874},{id:"JUPITER",name:"Jupiter",color:14264691,radiusKm:69911,obliquityDeg:3.13,aAU:5.2084558,e:.04832694,iDeg:1.3027428,nodeDeg:100.51068,periDeg:274.96363,M0Deg:99.890278,nDegPerDay:.08291643},{id:"SATURN",name:"Saturn",color:14795657,radiusKm:58232,obliquityDeg:26.73,aAU:9.535538,e:.055489251,iDeg:2.4895448,nodeDeg:113.59753,periDeg:339.3146,M0Deg:279.84299,nDegPerDay:.033472355,rings:{innerRKm:74500,outerRKm:140180,color:14073988,opacity:.55}},{id:"URANUS",name:"Uranus",color:10475232,radiusKm:25362,obliquityDeg:97.77,aAU:19.169878,e:.046359794,iDeg:.77275465,nodeDeg:74.024841,periDeg:98.953859,M0Deg:253.19433,nDegPerDay:.011742892},{id:"NEPTUNE",name:"Neptune",color:3826848,radiusKm:24622,obliquityDeg:28.32,aAU:30.081471,e:.0094937088,iDeg:1.7700055,nodeDeg:131.78219,periDeg:276.12009,M0Deg:314.75848,nDegPerDay:.0059738659},{id:"PLUTO",name:"Pluto",color:11902083,radiusKm:1188.3,obliquityDeg:122.53,aAU:39.482117,e:.2488273,iDeg:17.140012,nodeDeg:110.30394,periDeg:113.76498,M0Deg:53.186619,nDegPerDay:.0039755715}],$n=Math.PI/180;function T5(){return Date.now()/864e5+24405875e-1}function P5(i,e){const t=e-w5,n=(i.M0Deg+i.nDegPerDay*t)*$n,a=C5(n,i.e),s=i.aAU,r=Math.cos(a),o=Math.sin(a),l=s*(r-i.e),c=s*Math.sqrt(1-i.e*i.e)*o,u=Math.cos(i.periDeg*$n),d=Math.sin(i.periDeg*$n),p=Math.cos(i.iDeg*$n),f=Math.sin(i.iDeg*$n),g=Math.cos(i.nodeDeg*$n),v=Math.sin(i.nodeDeg*$n),h=u*l-d*c,m=d*l+u*c,S=h,y=p*m,M=f*m,L=g*S-v*y,A=v*S+g*y,P=M;return new I(L*Rn,A*Rn,P*Rn)}function C5(i,e){let t=i;e>0&&(t=i+e*Math.sin(i));for(let n=0;n<4;n++){const a=t-e*Math.sin(t)-i,s=1-e*Math.cos(t);t-=a/s}return t}const lr=Xa.planet;function D5(i){return Math.max(4e-4,4e-4+15e-5*Math.log2(i/1e3))}function R5(i,e){const t=P5(i,e),n=i.nodeDeg*Math.PI/180,a=i.iDeg*Math.PI/180,s=Math.cos(n),r=Math.sin(n),o=s*t.x+r*t.y,l=-r*t.x+s*t.y,c=Math.cos(a),u=Math.sin(a),d=c*l+u*t.z;return Math.atan2(d,o)}function I5(i,e){if(!i.rings)return;const t=i.rings.innerRKm/i.radiusKm,n=i.rings.outerRKm/i.radiusKm;return{innerR:e*t,outerR:e*n,color:i.rings.color,opacity:i.rings.opacity}}function L5(){const i=T5(),e=[{kind:"star",size:.0011,color:16773848,halo:{size:.0014,color:16767392,opacity:.32}}];for(const t of A5){const n=D5(t.radiusKm),a={kind:"planet",id:t.id,name:t.name,orbitRadius:t.aAU*Rn,size:n,color:t.color,inc:t.iDeg,node:t.nodeDeg,ecc:t.e,argPeriDeg:t.periDeg,angle:R5(t,i),obliquityDeg:t.obliquityDeg,realRadiusKm:t.radiusKm},s=I5(t,n);s&&(a.rings=s),e.push(a)}return e.push({kind:"belt",innerR:2.1*Rn,outerR:3.3*Rn,thickness:.025*Rn,count:1600}),e}const U5={id:"SOL",name:"Sol",ra:0,dec:0,dist:0,tier:"primary",mag:-10,children:L5()},N5={id:"TAU_CETI",name:"Tau Ceti",ra:26.006373,dec:-15.93361,dist:3.6531,tier:"primary",mag:3.5,pos:[3.15705247,1.01422217,-1.53277185],children:[{kind:"star",size:.0015,color:16769448},{kind:"planet",id:"TAU_CETI_B",name:"b",orbitRadius:.06,size:.0013,color:lr,inc:5,node:25},{kind:"planet",id:"TAU_CETI_C",name:"c",orbitRadius:.11,size:.0015,color:lr,inc:8,node:200},{kind:"planet",id:"TAU_CETI_E",name:"e",orbitRadius:.17,size:.0019,color:lr,inc:11,node:110},{kind:"planet",id:"TAU_CETI_F",name:"f",orbitRadius:.255,size:.0016,color:lr,inc:6,node:310}]},k5=[{name:"Alpha Centauri",ra:219.81825,dec:-60.94184,dist:1.3491,tier:"primary",mag:-.27,pos:[-.50329822,-.85408183,-.91508767]},{name:"Sirius",ra:101.33639,dec:-16.70207,dist:2.6327,tier:"primary",mag:-1.46,pos:[-.49567249,1.96743849,-1.67766073]},{name:"Procyon",ra:114.85743,dec:5.2506,dist:3.5159,tier:"primary",mag:.34,pos:[-1.47176601,3.04266651,-.96846779]},{name:"Epsilon Eridani",ra:53.21479,dec:-9.45444,dist:3.2146,tier:"primary",mag:3.73,pos:[1.89880692,2.11995311,-1.4946432]},{name:"40 Eridani",ra:63.87062,dec:-7.64622,dist:5.0141,tier:"primary",mag:4.43,pos:[2.18858468,3.82811676,-2.38685368]},{name:"Altair",ra:297.69463,dec:8.83661,dist:5.1309,tier:"primary",mag:.76,pos:[2.35635075,-3.80523957,2.50886537]},{name:"Vega",ra:279.23591,dec:38.78381,dist:7.6799,tier:"primary",mag:.03,pos:[.96084206,-3.50783607,6.76402304]},{name:"Fomalhaut",ra:344.41528,dec:-29.60504,dist:7.7033,tier:"primary",mag:1.16,pos:[6.45136808,-3.1646782,-2.77576594]},{name:"Denebola",ra:177.27438,dec:14.55281,dist:10.9951,tier:"primary",mag:2.14,pos:[-10.63026845,1.56327477,2.33347356]},{name:"Pollux",ra:116.33368,dec:28.01993,dist:10.3597,tier:"primary",mag:1.14,pos:[-4.05688868,9.45590594,1.20486543]},{name:"Arcturus",ra:213.9157,dec:19.16421,dist:11.2557,tier:"primary",mag:-.05,pos:[-8.8229703,-3.97300564,5.74980087]},{name:"Capella",ra:79.15369,dec:46.00295,dist:13.1266,tier:"primary",mag:.08,pos:[1.71578938,11.97239704,5.10161377]},{name:"Castor",ra:113.66142,dec:31.87255,dist:15.5951,tier:"primary",mag:1.58,pos:[-5.31513423,14.4050051,2.73001155]},{name:"Aldebaran",ra:68.98884,dec:16.5164,dist:20.4311,tier:"primary",mag:.87,pos:[7.02329788,19.08720368,-1.9445613]},{name:"Regulus",ra:152.09615,dec:11.96867,dist:24.31,tier:"primary",mag:1.4,pos:[-21.01651352,12.21642042,.198269]},{name:"Barnard's Star",ra:269.51962,dec:4.73161,dist:1.8253,tier:"secondary",mag:9.51,pos:[-.01525146,-1.60902916,.86170756]},{name:"Wolf 359",ra:164.13184,dec:6.95659,dist:2.412,tier:"secondary",mag:13.54,pos:[-2.30297064,.71681868,.00762573]},{name:"Lalande 21185",ra:165.8049,dec:36.03243,dist:2.5484,tier:"secondary",mag:7.52,pos:[-1.99794142,1.05997655,1.17436251]},{name:"Ross 154",ra:282.44155,dec:-23.82957,dist:2.9794,tier:"secondary",mag:10.43,pos:[.58718126,-2.92065482,-.04575438]},{name:"Ross 248",ra:355.42895,dec:44.16204,dist:3.1565,tier:"secondary",mag:12.29,pos:[2.25721626,.70919295,2.08945018]},{name:"Lacaille 9352",ra:346.53586,dec:-35.80476,dist:3.2873,tier:"secondary",mag:7.34,pos:[2.5927484,-1.33450285,-1.51752039]},{name:"61 Cygni",ra:316.65027,dec:38.75936,dist:3.4966,tier:"secondary",mag:5.21,pos:[1.98268996,-.8464561,2.75288875]},{name:"Struve 2398",ra:280.61243,dec:59.63993,dist:3.5227,tier:"secondary",mag:8.9,pos:[.32790642,-.39653799,3.48495888]},{name:"Epsilon Indi",ra:330.95627,dec:-56.85106,dist:3.637,tier:"secondary",mag:4.69,pos:[1.73866658,-2.09707591,-2.40973087]},{name:"Kapteyn's Star",ra:77.97287,dec:-45.04051,dist:3.9362,tier:"secondary",mag:8.85,pos:[.57955553,1.38788297,-3.63747349]},{name:"70 Ophiuchi",ra:271.3703,dec:2.5127,dist:5.107,tier:"secondary",mag:4.03,pos:[.12201169,-4.59068982,2.23433906]},{name:"Gliese 570",ra:224.33748,dec:-21.4293,dist:5.8872,tier:"secondary",mag:5.72,pos:[-3.91962553,-4.36954363,-.44991811]},{name:"Sigma Draconis",ra:293.08181,dec:69.64923,dist:5.761,tier:"secondary",mag:4.67,pos:[.78545025,.45754384,5.68879502]},{name:"Eta Cassiopeiae",ra:12.18374,dec:57.80543,dist:5.9302,tier:"secondary",mag:3.45,pos:[3.08842089,2.60799986,4.33904071]},{name:"82 Eridani",ra:50.03359,dec:-43.05505,dist:6.044,tier:"secondary",mag:4.26,pos:[2.83677178,1.46414027,-5.13211669]},{name:"Delta Pavonis",ra:302.18152,dec:-66.19797,dist:6.1021,tier:"secondary",mag:3.55,pos:[1.31162566,-4.13314598,-4.29328633]},{name:"Gliese 105",ra:39.08339,dec:6.86258,dist:7.2233,tier:"secondary",mag:5.79,pos:[5.56678334,4.49155532,-1.00659644]},{name:"107 Piscium",ra:25.60488,dec:20.27128,dist:7.6443,tier:"secondary",mag:5.24,pos:[6.46661955,3.89674833,1.1972397]},{name:"Ross 128",ra:176.94229,dec:.76066,dist:3.3757,tier:"secondary",mag:11.13,pos:[-3.37057292,.18301753,-.03050292]},{name:"WISE 0855-0714",ra:133.79659,dec:-7.32971,dist:2.2774,tier:"secondary",mag:25,pos:[-1.56327477,1.38025724,-.91508767]}];function F5(i){return i.toUpperCase().replace(/[^A-Z0-9]+/g,"_")}function O5(i){return{id:F5(i.name),name:i.name,ra:i.ra,dec:i.dec,dist:i.dist,tier:i.tier,mag:i.mag,pos:i.pos,children:[{kind:"star",size:.0011,color:16777215}]}}const B5=new Set(Qu.map(i=>i.id));function z5(i){return{id:i.id,name:i.name,ra:i.ra,dec:i.dec,dist:i.dist,tier:i.tier,mag:i.mag,pos:i.pos,children:[{kind:"star",size:.0011,color:16777215}]}}const e1=[],Ch=new Set;for(const i of[U5,N5,...k5.map(O5),...E5.map(z5)])Ch.has(i.id)||(Ch.add(i.id),e1.push(i));const xl=[...Qu,...e1.filter(i=>!B5.has(i.id))],Pr=14,t1=10,G5=8.4,H5=7.6,cr=9,V5=500,Dh=.1;function W5(i){i.traverse(e=>{var t;if(e instanceof Bt||e instanceof kn||e instanceof bs){(t=e.geometry)==null||t.dispose();const n=e.material;if(Array.isArray(n))for(const a of n)a.dispose();else n instanceof ha&&n.dispose()}})}const Cr=class Cr{constructor(e){We(this,"renderer");We(this,"scene",new yl);We(this,"camera");We(this,"controls");We(this,"composer");We(this,"bloom");We(this,"canvas");We(this,"grids");We(this,"stems");We(this,"skybox");We(this,"markers");We(this,"exoRings");We(this,"constellations");We(this,"setStarCamDist");We(this,"setStarCamPos");We(this,"kd");We(this,"nearCount",0);We(this,"nearStars");We(this,"starField");We(this,"frameTimes",[]);We(this,"systems",new Map);We(this,"cursor");We(this,"selectedSystemId","SOL");We(this,"travelPath");We(this,"travelAccelG",1);We(this,"travelStats",null);We(this,"accurateOrbitScale",!1);We(this,"heldPanKeys",new Set);We(this,"lastFrameTimeMs",performance.now());We(this,"pickDownPos",null);We(this,"twoFingerMode",null);We(this,"twoFingerStartDist",0);We(this,"twoFingerStartCx",0);We(this,"twoFingerStartCy",0);We(this,"basePath","");We(this,"lastShrink",1);We(this,"running",!1);We(this,"onHud");We(this,"trackedLabels",new Map);We(this,"resize",()=>{var n,a;const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),(n=this.composer)==null||n.setSize(e,t),(a=this.bloom)==null||a.setSize(e,t)});We(this,"onPickPointerDown",e=>{e.pointerType!=="mouse"&&e.pointerType!=="touch"&&e.pointerType!=="pen"||e.pointerType==="mouse"&&e.button!==0||(this.pickDownPos={x:e.clientX,y:e.clientY,pointerType:e.pointerType})});We(this,"onPickPointerUp",e=>{const t=this.pickDownPos;if(this.pickDownPos=null,!t||e.pointerType!==t.pointerType||e.pointerType==="mouse"&&e.button!==0)return;const n=t.pointerType==="mouse"?4:10;Math.hypot(e.clientX-t.x,e.clientY-t.y)>n||this.pickSystemAt(e.clientX,e.clientY)});We(this,"onPickPointerMove",e=>{if(!this.flyAbort)return;const t=this.pickDownPos;if(!t||e.pointerType!==t.pointerType)return;const n=t.pointerType==="mouse"?4:10;Math.hypot(e.clientX-t.x,e.clientY-t.y)>n&&this.flyAbort()});We(this,"onTouchStart",e=>{if(e.touches.length!==2)return;const t=this.twoFingerGeom(e.touches);this.twoFingerStartCx=t.cx,this.twoFingerStartCy=t.cy,this.twoFingerStartDist=t.dist,this.twoFingerMode="detecting",this.controls.enablePan=!1,this.controls.enableZoom=!1});We(this,"onTouchMove",e=>{if(this.twoFingerMode!=="detecting"||e.touches.length!==2)return;const t=this.twoFingerGeom(e.touches),n=Math.hypot(t.cx-this.twoFingerStartCx,t.cy-this.twoFingerStartCy),a=Math.abs(t.dist-this.twoFingerStartDist);if(Math.max(n,a)<10)return;const r=this.controls;a>n?(this.controls.enableZoom=!0,r._dollyStart.set(0,t.dist),this.twoFingerMode="zoom"):(this.controls.enablePan=!0,r._panStart.set(t.cx,t.cy),this.twoFingerMode="pan")});We(this,"onTouchEnd",e=>{e.touches.length>=2||(this.twoFingerMode=null,this.controls.enablePan=!0,this.controls.enableZoom=!0)});We(this,"onPanKeyDown",e=>{if(!Cr.PAN_KEY_CODES.has(e.code))return;const t=e.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||e.ctrlKey||e.metaKey||e.altKey||(this.heldPanKeys.add(e.code),(e.code.startsWith("Arrow")||e.code==="Space")&&e.preventDefault())});We(this,"onPanKeyUp",e=>{this.heldPanKeys.delete(e.code)});We(this,"loop",()=>{var a,s,r,o,l,c,u,d,p,f,g;if(!this.running)return;requestAnimationFrame(this.loop);const e=performance.now(),t=e-this.lastFrameTimeMs,n=Math.min(.1,t/1e3);this.lastFrameTimeMs=e,this.tickKeyboardPan(n),this.controls.update(),(a=this.cursor)==null||a.tick(),(s=this.travelPath)==null||s.tick(performance.now()/1e3,this.camera,this.canvas.clientWidth||1,this.canvas.clientHeight||1);{const v=this.controls.target,h=this.camera.position,m=h.distanceTo(v);(r=this.grids)==null||r.update(v,h,m),(o=this.stems)==null||o.update(v,m*.4),(l=this.stems)==null||l.setCamPos(h),(c=this.setStarCamDist)==null||c.call(this,m),(u=this.setStarCamPos)==null||u.call(this,h),(d=this.markers)==null||d.setCamPos(h),(p=this.exoRings)==null||p.setCamPos(h),(f=this.constellations)==null||f.setCamDist(m),(g=this.constellations)==null||g.setCamPos(h),this.applyBodyShrink(m)}this.composer.render(),this.publishHud()});We(this,"flyAbort",null);this.canvas=e,this.renderer=new _l({canvas:e,antialias:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=new rt(Xa.bg),this.camera=new Di(46,1,ph,g4),this.camera.up.set(0,0,1),this.camera.position.set(8,-13,9)}setHudCallback(e){this.onHud=e}async init(e){this.basePath=e,this.grids=k4(),this.scene.add(this.grids.group),this.constellations=o5(),this.scene.add(this.constellations.object);for(const c of xl){const u=Eh(c,this.buildScale());this.systems.set(c.id,u),u.group&&this.scene.add(u.group)}try{this.skybox=await b5(`${e}/data/skybox.webp`,.34),this.scene.add(this.skybox.mesh)}catch{}const t=await D4(e);this.scene.add(t.near),this.scene.add(t.focusNear),this.starField=t,this.nearStars=t.near,this.nearCount=t.nearCount,this.setStarCamDist=t.setCamDist,this.setStarCamPos=t.setCamPos.bind(t),this.kd=t.kdtree;const n=[];for(const c of this.systems.values())n.push(c.center);this.markers=A4(n),this.scene.add(this.markers.object),this.stems=B4(n),this.scene.add(this.stems.object);const a=[];for(const c of this.systems.values())c.def.children.some(u=>u.kind==="planet")&&a.push({id:c.def.id,pos:c.center});this.exoRings=P4(a),this.exoRings.setSelectedSystemId(this.selectedSystemId),this.scene.add(this.exoRings.object),this.cursor=n5(),this.cursor.object.visible=!1,this.scene.add(this.cursor.object);const s=this.systems.get(this.selectedSystemId);s&&this.cursor.setTo(s.center,s.bbox),this.travelPath=S5(),this.scene.add(this.travelPath.group),this.refreshTravelPath(),this.controls=new qm(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.rotateSpeed=.6,this.controls.zoomSpeed=1.15,this.controls.minDistance=3e-4,this.controls.maxDistance=fh,this.controls.target.set(0,0,0),this.controls.enablePan=!0,this.controls.screenSpacePanning=!1,this.controls.mouseButtons.MIDDLE=aa.PAN,window.addEventListener("keydown",this.onPanKeyDown),window.addEventListener("keyup",this.onPanKeyUp),this.canvas.addEventListener("pointerdown",this.onPickPointerDown),this.canvas.addEventListener("pointerup",this.onPickPointerUp),this.canvas.addEventListener("pointermove",this.onPickPointerMove),this.canvas.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.canvas.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.canvas.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.canvas.addEventListener("touchcancel",this.onTouchEnd,{passive:!0});const r=this.renderer.getSize(new Xe),o=this.renderer.getPixelRatio(),l=new Li(r.width*o,r.height*o,{type:Ji,samples:4});this.composer=new u4(this.renderer,l),this.composer.addPass(new d4(this.scene,this.camera)),this.bloom=new Ka(new Xe(1,1),.26,.32,.22),this.composer.addPass(this.bloom),this.composer.addPass(new m4),this.resize(),this.focusSystem("SOL",{animate:!1}),this.start()}start(){this.running=!0,this.loop()}twoFingerGeom(e){const t=e[0],n=e[1],a=.5*(t.pageX+n.pageX),s=.5*(t.pageY+n.pageY),r=Math.hypot(t.pageX-n.pageX,t.pageY-n.pageY);return{cx:a,cy:s,dist:r}}pickSystemAt(e,t){const a=this.canvas.getBoundingClientRect(),s=e-a.left,r=t-a.top,o=this.canvas.clientWidth,l=this.canvas.clientHeight,c=new I,u=new I;let d=null,p=22*22;const f=(h,m)=>{if(this.projectRTE(h,c),c.z>1)return;const S=(c.x*.5+.5)*o,y=(-c.y*.5+.5)*l,M=(S-s)**2+(y-r)**2;M<p&&(p=M,d=m)};for(const h of this.systems.values()){f(h.center,h.def.id);for(const m of h.planets)u.copy(m.local).add(h.center),f(u,h.def.id)}if(!d)return;const g=this.systems.get(d);if(!g)return;this.selectSystem(d);const v=this.camera.position.clone().sub(this.controls.target);this.flyTo(g.center.clone().add(v),g.center.clone())}tickKeyboardPan(e){if(this.heldPanKeys.size===0)return;const t=this.heldPanKeys;let n=0,a=0,s=0;if((t.has("ArrowLeft")||t.has("KeyA"))&&(n-=1),(t.has("ArrowRight")||t.has("KeyD"))&&(n+=1),(t.has("ArrowUp")||t.has("KeyW"))&&(a+=1),(t.has("ArrowDown")||t.has("KeyS"))&&(a-=1),t.has("Space")&&(s+=1),(t.has("ShiftLeft")||t.has("ShiftRight"))&&(s-=1),n===0&&a===0&&s===0)return;const r=this.controls.target,l=this.camera.position.distanceTo(r)*.95*e,c=new I().setFromMatrixColumn(this.camera.matrix,0),u=new I().crossVectors(this.camera.up,c),d=new I().addScaledVector(c,n*l).addScaledVector(u,a*l).addScaledVector(this.camera.up,s*l),p=r.clone().add(d);p.length()>or&&(p.setLength(or),d.subVectors(p,r)),r.add(d),this.camera.position.add(d)}applyBodyShrink(e){const t=vs.smoothstep(e,.002,.05);if(!(Math.abs(t-this.lastShrink)<.005)){this.lastShrink=t;for(const n of this.systems.values()){const a=n.group;a&&a.traverse(s=>{var o;const r=(o=s.userData)==null?void 0:o.bodyKind;if(s instanceof Bt){if(r==="planet-marker"){const l=s.userData.realScaleTarget??Dh;s.scale.setScalar(vs.lerp(l,1,t))}else if(r==="star-sphere"||r==="star-halo"){const l=Math.min(Dh,s.userData.shrinkTarget??1),c=s.userData.upperBound??1;s.scale.setScalar(vs.lerp(l,c,t))}}})}}}publishHud(){if(!this.onHud)return;const e=this.camera.position.distanceTo(this.controls.target),t=this.canvas.clientWidth,n=this.canvas.clientHeight,a=performance.now(),s=this.collectLabelAnchors(e,t,n),r=new Map;for(const p of s)r.set(p.key,p);const o=X5(s,t,n),l=new Set(o.map(p=>p.key));for(const p of s){const f=l.has(p.key),g=this.trackedLabels.get(p.key);g?(g.anchor=p,g.visible=f,f&&(g.lastSeen=a)):f&&this.trackedLabels.set(p.key,{anchor:p,visible:!0,lastSeen:a})}for(const[p,f]of this.trackedLabels)r.has(p)&&l.has(p)||(f.visible=!1),!f.visible&&a-f.lastSeen>V5&&this.trackedLabels.delete(p);const c=[];for(const[p,f]of this.trackedLabels){const g=f.anchor,v=g.x+Pr,h=g.y-Pr,m=v+t1;c.push({key:p,name:g.name,kind:g.kind,tier:g.tier,ax:g.x,ay:g.y,lx:m,ly:h,elbowX:v,opacity:f.visible?g.opacity:0})}const u=this.systems.get(this.selectedSystemId),d=N4(e,this.canvas.clientHeight||n,this.camera.fov);this.onHud({labels:c,camDist:e,nearCount:this.nearCount,selectedSystemName:u?u.def.name:"—",selectedSystemId:this.selectedSystemId,cameraTargetDistPc:this.controls.target.length()/_i,travel:{eligible:this.selectedSystemId!=="SOL",stats:this.travelStats,ticks:this.projectTravelTicks(t,n)},gridScale:d})}projectTravelTicks(e,t){const n=this.travelPath;if(!n||!n.group.visible)return[];const a=n.getEndpoints(),s=n.getTicks();if(!a||s.length===0)return[];const r=new I;this.projectRTE(a.from,r);const o=(r.x*.5+.5)*e,l=(-r.y*.5+.5)*t;this.projectRTE(a.to,r);const c=(r.x*.5+.5)*e,u=(-r.y*.5+.5)*t,d=c-o,p=u-l,f=Math.hypot(d,p);if(f<1)return[];const g=-p/f,v=d/f,h=6,m=12,S=[];for(let y=0;y<s.length;y++){const M=s[y].worldPos;if(this.projectRTE(M,r),r.z>1)continue;const L=(r.x*.5+.5)*e,A=(-r.y*.5+.5)*t;S.push({key:`tick-${s[y].label}`,x1:L-g*h,y1:A-v*h,x2:L+g*h,y2:A+v*h,lx:L+g*m,ly:A+v*m,label:s[y].label})}return S}projectRTE(e,t){const n=this.camera,a=e.x-n.position.x,s=e.y-n.position.y,r=e.z-n.position.z,o=n.matrixWorld.elements,l=o[0]*a+o[1]*s+o[2]*r,c=o[4]*a+o[5]*s+o[6]*r,u=o[8]*a+o[9]*s+o[10]*r,d=n.projectionMatrix.elements,p=d[0]*l+d[4]*c+d[8]*u+d[12],f=d[1]*l+d[5]*c+d[9]*u+d[13],g=d[2]*l+d[6]*c+d[10]*u+d[14],v=d[3]*l+d[7]*c+d[11]*u+d[15],h=v===0?0:1/v;return t.set(p*h,f*h,g*h),t.z<=1}collectLabelAnchors(e,t,n){const a=[],s=new I,r=new I,o=this.camera.position;for(const l of this.systems.values()){const c=l.def.tier;if(this.projectRTE(l.center,s),s.z<=1&&s.x>=-1.05&&s.x<=1.05&&s.y>=-1.05&&s.y<=1.05&&a.push({key:l.def.id,name:l.def.name.toUpperCase(),kind:"system",tier:c,camDist:o.distanceTo(l.center),x:(s.x*.5+.5)*t,y:(-s.y*.5+.5)*n,opacity:1}),l.planets.length===0)continue;const u=o.distanceTo(l.center),d=K5(u,l.visualHalf);if(!(d<=.01))for(const p of l.planets)r.copy(p.local).add(l.center),this.projectRTE(r,s),!(s.z>1||s.x<-1.05||s.x>1.05||s.y<-1.05||s.y>1.05)&&a.push({key:p.id,name:p.name.toUpperCase(),kind:"planet",tier:"secondary",camDist:o.distanceTo(r),x:(s.x*.5+.5)*t,y:(-s.y*.5+.5)*n,opacity:d})}return a}setConstellationsVisible(e){var t;(t=this.constellations)==null||t.setVisible(e)}setExoplanetRingsVisible(e){var t;(t=this.exoRings)==null||t.setVisible(e)}setGridVisible(e){this.grids&&(this.grids.group.visible=e),this.stems&&(this.stems.object.visible=e)}buildScale(){return this.accurateOrbitScale?{orbitScale:Gu,bodyScale:_4}:{orbitScale:1,bodyScale:1}}setAccurateOrbitScale(e,t={}){var h,m;if(e===this.accurateOrbitScale)return;const n=t.animate??!0,a=this.systems.get(this.selectedSystemId),s=(a==null?void 0:a.visualHalf)??0,r=!!a&&a.planets.length>0,o=(((h=this.controls)==null?void 0:h.minDistance)??3e-4)*1.5,l=r?Math.max(s*3,o):1/0,c=a?this.camera.position.distanceTo(a.center):0;this.accurateOrbitScale=e,this.camera.near=e?1e-9:ph,this.camera.updateProjectionMatrix(),this.controls&&(this.controls.minDistance=e?1e-8:3e-4);const u=this.buildScale();for(const S of xl){const y=this.systems.get(S.id);y!=null&&y.group&&(this.scene.remove(y.group),W5(y.group));const M=Eh(S,u);this.systems.set(S.id,M),M.group&&this.scene.add(M.group)}const d=this.systems.get(this.selectedSystemId);d&&this.cursor.setTo(d.center,d.bbox),this.updateFocusStar(),this.refreshTravelPath();const p=_i/3.2616,g=(!e?.1:100)*p,v=Math.max(g,l);if(n&&d&&r&&s>0&&c>0&&c<v){const S=(((m=this.controls)==null?void 0:m.minDistance)??3e-4)*1.5,y=d.visualHalf/s,M=Math.max(c*y,S),L=new I().subVectors(this.camera.position,d.center),A=L.length();if(A>1e-12){L.multiplyScalar(M/A);const P=d.center.clone().add(L);this.flyTo(P,d.center.clone(),{logZoom:!0})}}}publishHudNow(){this.publishHud()}selectSystem(e){var n;const t=this.systems.get(e);t&&(this.selectedSystemId=e,this.cursor.setTo(t.center,t.bbox),(n=this.exoRings)==null||n.setSelectedSystemId(e),this.updateFocusStar(),this.refreshTravelPath())}updateFocusStar(){var t,n;for(const a of this.systems.values())a.starAnchor&&(a.starAnchor.visible=!1);const e=this.systems.get(this.selectedSystemId);e&&this.selectedSystemId!=="SOL"?(t=this.starField)==null||t.setFocus(e.center,e.def.mag):(n=this.starField)==null||n.setFocus(null)}setTravelPathVisible(e){var t;(t=this.travelPath)==null||t.setVisible(e&&this.selectedSystemId!=="SOL")}setTravelAccelG(e){this.travelAccelG=e,this.refreshTravelPath()}beginTravelView(){let e=this.selectedSystemId;if(e==="SOL"){if(!this.systems.has("TAU_CETI"))return;e="TAU_CETI"}this.focusTravel(e)}focusTravel(e){const t=this.systems.get(e);t&&(this.selectSystem(e),this.frameTravelView(t.center),this.publishHud())}frameTravelView(e){const t=new I().subVectors(e,new I(0,0,0)),n=t.length();let a=Math.atan2(t.y,t.x);Math.hypot(t.x,t.y)<1e-6&&(a=Math.atan2(-.74,.46));const s=a+Math.PI/4,r=Math.asin(new I(.46,-.74,.49).normalize().z),o=1.3,l=this.camera.fov*Math.PI/180,c=2*Math.atan(Math.tan(l/2)*this.camera.aspect),u=Math.min(l,c);let d=n*o/Math.sin(u/2);d=Math.min(Math.max(d,.5),fh);const p=Math.cos(r),f=new I(Math.cos(s)*p,Math.sin(s)*p,Math.sin(r));this.flyTo(e.clone().addScaledVector(f,d),e.clone())}refreshTravelPath(){if(!this.travelPath)return;const e=this.systems.get(this.selectedSystemId);if(!e||this.selectedSystemId==="SOL"){this.travelStats=null,this.travelPath.setVisible(!1);return}this.travelPath.rebuild(this.earthWorldPos(),e.center,this.travelAccelG,e.def.dist),this.travelStats=Zu(e.def.dist,this.travelAccelG)}earthWorldPos(){const e=this.systems.get("SOL"),t=e==null?void 0:e.planets.find(n=>n.id==="SOL/EARTH");return!e||!t?new I(0,0,0):e.center.clone().add(t.local)}focusSystem(e,t={}){var c,u;const n=this.systems.get(e);if(!n)return;this.selectSystem(e);const a=n.planets.length>0,s=(((c=this.controls)==null?void 0:c.minDistance)??3e-4)*1.5,r=a?Math.max(n.visualHalf*3,s):.8,o=new I(r*.46,-r*.74,r*.49),l=n.center.clone().add(o);if(t.animate===!1){(u=this.flyAbort)==null||u.call(this),this.controls.target.copy(n.center),this.camera.position.copy(l);return}this.flyTo(l,n.center,{logZoom:!0})}viewHome(){this.focusSystem("SOL")}getCameraState(){const e=this.controls.target,t=new I().subVectors(this.camera.position,e),n=t.length(),a=Math.atan2(t.y,t.x),s=Math.asin(t.z/Math.max(n,1e-9)),r=this.systems.get(this.selectedSystemId),o=r?new I().subVectors(e,r.center):new I;return{systemId:this.selectedSystemId,dist:n,yaw:a,pitch:s,cx:o.x,cy:o.y,cz:o.z}}debugSnapshot(){var n,a,s,r,o,l;if(!this.running||!this.controls)return{ready:!1};const e=this.renderer.info.render,t=this.renderer.info.memory;return{ready:this.running,frame:e.frame,draw:{calls:e.calls,triangles:e.triangles,points:e.points,lines:e.lines},memory:{geometries:t.geometries,textures:t.textures},camera:this.getCameraState(),selectedSystemId:this.selectedSystemId,nearStarCount:this.nearCount,systemCount:this.systems.size,accurateOrbitScale:this.accurateOrbitScale,travelAccelG:this.travelAccelG,hasTravelStats:this.travelStats!=null,layers:{constellations:!!((n=this.constellations)!=null&&n.object.visible),grid:!!((a=this.grids)!=null&&a.group.visible),stems:!!((s=this.stems)!=null&&s.object.visible),exoRings:!!((r=this.exoRings)!=null&&r.object.visible),travelPath:!!((o=this.travelPath)!=null&&o.group.visible),markers:!!((l=this.markers)!=null&&l.object.visible)}}}getPerf(){const e=this.frameTimes,t=e.length?e.reduce((r,o)=>r+o,0)/e.length:0,n=[...e].sort((r,o)=>r-o),a=r=>n.length?n[Math.min(n.length-1,Math.floor(r*n.length))]:0,s=this.renderer.info.render;return{fps:t>0?1e3/t:0,frameMs:{p50:a(.5),p95:a(.95),last:e[e.length-1]??0},history:[...e],draws:s.calls,tris:s.triangles,points:s.points,lines:s.lines,dpr:this.renderer.getPixelRatio()}}benchmarkLayers(e=40){const t=this.renderer.getContext(),n=this.composer,a=this.running;this.running=!1;const s=()=>{for(let d=0;d<6;d++)n.render();t.finish();const u=performance.now();for(let d=0;d<e;d++)n.render();return t.finish(),(performance.now()-u)/e},r=s(),o=(u,d)=>{u();const p=r-s();return d(),Math.max(0,p)},l={};if(l.bloom=o(()=>this.bloom.enabled=!1,()=>this.bloom.enabled=!0),this.nearStars){const u=this.nearStars;l.stars=o(()=>u.visible=!1,()=>u.visible=!0)}if(this.skybox){const u=this.skybox;l.skybox=o(()=>u.mesh.visible=!1,()=>u.mesh.visible=!0)}if(this.grids){const u=this.grids,d=u.group.visible;l.grid=o(()=>u.group.visible=!1,()=>u.group.visible=d)}this.running=a,a&&this.loop();const c=this.renderer.info.render;return{baseMs:r,fps:r>0?1e3/r:0,dpr:this.renderer.getPixelRatio(),draws:c.calls,points:c.points,tris:c.triangles,layers:l}}applyCameraState(e){var v;const t=e.systemId??this.selectedSystemId,n=this.systems.get(t);if(!n)return;this.selectSystem(t);const s=n.planets.length>0?Math.max(n.visualHalf*3,.0015):.8,r=new I(.46,-.74,.49).normalize(),o=Math.atan2(r.y,r.x),l=Math.asin(r.z),c=e.dist??s,u=e.yaw??o,d=e.pitch??l,p=Math.cos(d),f=new I(Math.cos(u)*p,Math.sin(u)*p,Math.sin(d)),g=n.center.clone().add(new I(e.cx??0,e.cy??0,e.cz??0));g.length()>or&&g.setLength(or),(v=this.flyAbort)==null||v.call(this),this.controls.target.copy(g),this.camera.position.copy(g).addScaledVector(f,c)}viewPleiades(){const e=new I(192.837,331.484,28.244),n=e.clone().setZ(0).normalize().multiplyScalar(-4);n.z=0,this.flyTo(n,e)}flyTo(e,t,n={}){var y;(y=this.flyAbort)==null||y.call(this);const a=this.camera.position.clone(),s=this.controls.target.clone(),r=performance.now(),o=900;let l=!1;const c=new I().subVectors(a,s),u=new I().subVectors(e,t),d=c.length(),p=u.length(),f=!!n.logZoom&&d>1e-30&&p>1e-30,g=f?c.clone().divideScalar(d):null,v=f?u.clone().divideScalar(p):null,h=f?Math.log(d):0,m=f?Math.log(p):0,S=()=>{if(l)return;const M=Math.min(1,(performance.now()-r)/o),L=M<.5?2*M*M:1-Math.pow(-2*M+2,2)/2;if(f&&g&&v){const A=Math.exp(h*(1-L)+m*L),P=new I().lerpVectors(g,v,L).normalize();this.controls.target.lerpVectors(s,t,L),this.camera.position.copy(this.controls.target).addScaledVector(P,A)}else this.camera.position.lerpVectors(a,e,L),this.controls.target.lerpVectors(s,t,L);M<1?requestAnimationFrame(S):this.flyAbort=null};this.flyAbort=()=>{l=!0,this.flyAbort=null},S()}dispose(){var e,t,n;this.running=!1,window.removeEventListener("resize",this.resize),window.removeEventListener("keydown",this.onPanKeyDown),window.removeEventListener("keyup",this.onPanKeyUp),this.canvas.removeEventListener("pointerdown",this.onPickPointerDown),this.canvas.removeEventListener("pointerup",this.onPickPointerUp),this.canvas.removeEventListener("pointermove",this.onPickPointerMove),this.canvas.removeEventListener("touchstart",this.onTouchStart),this.canvas.removeEventListener("touchmove",this.onTouchMove),this.canvas.removeEventListener("touchend",this.onTouchEnd),this.canvas.removeEventListener("touchcancel",this.onTouchEnd),(e=this.flyAbort)==null||e.call(this),(t=this.controls)==null||t.dispose(),(n=this.travelPath)==null||n.dispose(),this.renderer.dispose()}};We(Cr,"PAN_KEY_CODES",new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight"]));let Ml=Cr;function K5(i,e){const t=Math.max(e,5e-4);return 1-vs.smoothstep(i,t*3,t*12)}function X5(i,e,t){if(i.length===0)return[];const n=i.slice().sort((r,o)=>r.camDist-o.camDist),a=[],s=[];for(const r of n){const o=r.x+Pr,l=r.y-Pr,c=o+t1;if(l<-2*cr||l>t+2*cr)continue;const u=r.kind==="planet"?H5:G5,d=Math.max(8,r.name.length*u),p={l:c-2,r:c+d+2,t:l-cr,b:l+cr};let f=!1;for(const g of a)if(p.l<g.r&&p.r>g.l&&p.t<g.b&&p.b>g.t){f=!0;break}f||(a.push(p),s.push({key:r.key,name:r.name,kind:r.kind,tier:r.tier,ax:r.x,ay:r.y,lx:c,ly:l,elbowX:o,opacity:r.opacity}))}return s}const q5=[{id:"107_PISCIUM",appMag:5.24,specType:"K1V",evolStage:"Main Sequence",massSolar:.86,radiusSolar:.82,ageGyr:6.3,teffK:5172,summary:"107 Piscium is a single star in the constellation of Pisces. 107 Piscium is the star's Flamsteed designation. John Flamsteed numbered the stars of Pisces from 1 to 113, publishing his Catalogus Britannicus in 1725. He accidentally numbered 107 Piscium twice, as he also allocated it the designation of 2 Arietis.",wikipediaUrl:"https://en.wikipedia.org/wiki/107_Piscium"},{id:"40_ERIDANI",appMag:4.43,specType:"K0.5V",evolStage:"Main Sequence",massSolar:.84,radiusSolar:.812,ageGyr:5.6,teffK:5300,summary:"40 Eridani is a triple star system in the constellation of Eridanus, abbreviated 40 Eri. It has the Bayer designation Omicron2 Eridani, which is Latinized from ο2 Eridani and abbreviated Omicron2 Eri or ο2 Eri. Based on parallax measurements taken by the Gaia mission, it is about 16.3 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/40_Eridani"},{id:"55_CANCRI",appMag:5.95,specType:"K0IV-V",evolStage:"Subgiant",massSolar:.905,radiusSolar:.98,ageGyr:8.6,teffK:5172,summary:"55 Cancri is a binary star system located 41 light-years away from the Sun in the zodiac constellation of Cancer. It has the Bayer designation Rho1 Cancri (ρ1 Cancri); 55 Cancri is the Flamsteed designation. The system consists of a K-type star and a smaller red dwarf.",wikipediaUrl:"https://en.wikipedia.org/wiki/55_Cancri"},{id:"61_CYGNI",appMag:5.216,specType:"K5V",evolStage:"Main Sequence",massSolar:.6771,radiusSolar:.667,ageGyr:6.1,teffK:4398,summary:"61 Cygni is a binary star system in the northern constellation Cygnus, consisting of a pair of K-type dwarf stars that orbit each other in a period of about 659 years.",wikipediaUrl:"https://en.wikipedia.org/wiki/61_Cygni"},{id:"70_OPHIUCHI",appMag:4.03,specType:"K0-V",evolStage:"Main Sequence",massSolar:.8656,radiusSolar:.831,ageGyr:2.81,teffK:5301,summary:"70 Ophiuchi is a binary star system located 16.7 light-years away from the Earth. It is in the constellation Ophiuchus. At magnitude 4 it appears as a dim star visible to the unaided eye away from city lights.",wikipediaUrl:"https://en.wikipedia.org/wiki/70_Ophiuchi"},{id:"82_ERIDANI",appMag:4.27,specType:"G6V",evolStage:"Main Sequence",massSolar:.8,radiusSolar:.93,ageGyr:9,teffK:5473,summary:"82 G. Eridani is a star 19.7 light-years away from Earth in the constellation Eridanus. It is a main-sequence star with a stellar classification of G6 V, and it hosts a system of three confirmed planets and a dust disk.",wikipediaUrl:"https://en.wikipedia.org/wiki/82_G._Eridani"},{id:"ACAMAR",appMag:3.1173,specType:"A2V",evolStage:"Main Sequence",massSolar:2.39,radiusSolar:3.9,teffK:7900,summary:"Theta Eridani, Latinized from θ Eridani, is a triple star system in the constellation of Eridanus, with a combined apparent magnitude of 2.88. The primary component has the proper name Acamar, the traditional name of the system. The system's distance based on parallax measurements is 164–167 light-years.",wikipediaUrl:"https://en.wikipedia.org/wiki/Theta_Eridani"},{id:"ACHERNAR",appMag:.46,specType:"B6Vpe",evolStage:"Main Sequence",massSolar:6.7,radiusSolar:7.3,ageGyr:.063,teffK:14510,summary:"Achernar is the brightest star in the constellation of Eridanus and the ninth-brightest in the night sky. It has the Bayer designation Alpha Eridani, which is Latinized from α Eridani and abbreviated Alpha Eri or α Eri. The name Achernar applies to the primary component of a binary system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Achernar"},{id:"ACRAB",appMag:2.5,specType:"B1V+B2V",evolStage:"Main Sequence",massSolar:15,radiusSolar:6.3,teffK:28e3,summary:"Beta Scorpii is a multiple star system in the southern zodiac constellation of Scorpius. It bore the traditional proper name of Acrab, though the International Astronomical Union now regards that name as applying only to the β Scorpii Aa component.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Scorpii"},{id:"ACRUX",appMag:.76,specType:"B0.5IV + B1V",evolStage:"Subgiant",massSolar:17.8,radiusSolar:7.8,ageGyr:.0108,teffK:24e3,summary:"Acrux is a multiple star system the brightest star in the southern constellation of Crux. It has the Bayer designation α Crucis, which is Latinised to Alpha Crucis and abbreviated Alpha Cru or α Cru. With a combined visual magnitude of +0.76, it is the 13th-brightest star in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Acrux"},{id:"ADHARA",appMag:1.5,specType:"B1.5II",evolStage:"Bright Giant",massSolar:13.1,radiusSolar:10.7,teffK:22500,summary:"Epsilon Canis Majoris is a binary star system and the second-brightest star in the constellation of Canis Major. Its name is a Bayer designation that is Latinised from ε Canis Majoris, and abbreviated Epsilon CMa or ε CMa. This is the 22nd-brightest star in the night sky with an apparent magnitude of 1.50.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Canis_Majoris"},{id:"AIN",appMag:3.53,specType:"G9.5IIICN0.5",evolStage:"Giant",massSolar:2.458,radiusSolar:12.46,ageGyr:.6,teffK:4880,summary:"Epsilon Tauri or ε Tauri, formally named Ain, is an orange giant star located approximately 146 light-years from the Sun in the constellation of Taurus. An exoplanet is believed to be orbiting the star.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Tauri"},{id:"ALBALI",appMag:3.77,specType:"B9.5V",evolStage:"Main Sequence",massSolar:2.98,radiusSolar:4.2,ageGyr:.388,teffK:9622,summary:"Epsilon Aquarii is a binary star system in the equatorial zodiac constellation of Aquarius, located near the western constellation border with Capricornus. Its identifier is a Bayer designation that is Latinized from ε Aquarii, and abbreviated Eps Aqr or ε Aqr, respectively.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Aquarii"},{id:"ALCOR",appMag:4.01,specType:"A5V+M3-4V",evolStage:"Main Sequence",massSolar:1.842,radiusSolar:2.002,ageGyr:.422,teffK:7556,summary:"Alcor is a binary star system in the constellation of Ursa Major. It is the fainter companion of Mizar, the two stars forming a naked eye double in the handle of the Big Dipper asterism in Ursa Major. The two lie about 83 light-years away from the Sun, as measured by the Hipparcos astrometry satellite.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alcor_(star)"},{id:"ALCYONE",appMag:2.87,specType:"B7III",evolStage:"Giant",massSolar:6,radiusSolar:10.56,ageGyr:.07,teffK:12258,summary:"Alcyone, is a blue-white giant star and the brightest star in the Pleiades open cluster. At apparent magnitude 2.87, it is also the third-brightest star in the Taurus constellation. The star has the Bayer designation Eta Tauri, Latinized from η Tauri and abbreviated Eta Tau or η Tau.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alcyone_(star)"},{id:"ALDEBARAN",appMag:.87,specType:"K5III",evolStage:"Giant",massSolar:1.16,radiusSolar:45.1,ageGyr:6.4,teffK:3910,summary:"Aldebaran is a star in the zodiac constellation of Taurus. It has the Bayer designation α Tauri, which is Latinized to Alpha Tauri and abbreviated Alpha Tau or α Tau.",wikipediaUrl:"https://en.wikipedia.org/wiki/Aldebaran"},{id:"ALDERAMIN",appMag:2.46,specType:"A8Vn",evolStage:"Main Sequence",massSolar:1.92,radiusSolar:2.162,ageGyr:.99,teffK:8558,summary:"Alpha Cephei is a second magnitude star in the northern constellation of Cepheus. It has the official name Alderamin, pronounced ; Alpha Cephei is its Bayer designation, which is Latinized from α Cephei and abbreviated Alpha Cep or α Cep.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Cephei"},{id:"ALGEDI",appMag:3.58,specType:"G9III",evolStage:"Giant",massSolar:2.05,radiusSolar:8.38,ageGyr:1.3,teffK:5030,summary:"Alpha2 Capricorni is a triple star system in the southern constellation of Capricornus. It has the proper name Algedi, pronounced ; Alpha2 Capricorni is its Bayer designation. This system is visible to the naked eye as a point of light with an apparent visual magnitude of +3.57.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha2_Capricorni"},{id:"ALGENIB",appMag:2.84,specType:"B2IV",evolStage:"Subgiant",massSolar:8.8,radiusSolar:5.4,ageGyr:.0219,teffK:22e3,summary:"Gamma Pegasi is a binary star in the constellation of Pegasus, located at the southeast corner of the asterism known as the Great Square. It has the formal name Algenib ; the Bayer designation Gamma Pegasi is Latinized from γ Pegasi and abbreviated Gamma Peg or γ Peg.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Pegasi"},{id:"ALGIEBA",appMag:2.37,specType:"K1-III+G7IIIb",evolStage:"Giant",massSolar:1.66,radiusSolar:26.08,ageGyr:1.75,teffK:4457,summary:"Gamma Leonis, also named Algieba, is a binary star system in the constellation of Leo, made up of two red giants. The primary star is orbited by one known exoplanet.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Leonis"},{id:"ALGOL",appMag:2.12,specType:"B8V",evolStage:"Main Sequence",massSolar:3.17,radiusSolar:2.73,ageGyr:.57,teffK:13e3,summary:"Algol, designated Beta Persei, known colloquially as the Demon Star, is a bright multiple star in the constellation of Perseus and one of the first non-nova variable stars to be discovered.",wikipediaUrl:"https://en.wikipedia.org/wiki/Algol"},{id:"ALHENA",appMag:1.92,specType:"A1.5IV+",evolStage:"Subgiant",massSolar:2.81,radiusSolar:6.06,ageGyr:2,teffK:9190,summary:"Gamma Geminorum, formally named Alhena, is the third-brightest object in the constellation of Gemini. It has an apparent visual magnitude of 1.9, making it easily visible to the naked eye even in urban regions.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Geminorum"},{id:"ALIOTH",appMag:1.77,specType:"A1III-IVpkB9",evolStage:"Giant",massSolar:2.91,radiusSolar:4.29,ageGyr:.3,teffK:8908,summary:"Alioth, also called Epsilon Ursae Majoris, is a star in the northern constellation of Ursa Major. The designation is Latinised from ε Ursae Majoris and abbreviated Epsilon UMa or ε UMa.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alioth"},{id:"ALJANAH",appMag:2.48,specType:"K0III",evolStage:"Giant",massSolar:1.103,radiusSolar:11.13,ageGyr:9.62,teffK:4699,summary:"Epsilon Cygni is a binary star in the constellation of Cygnus. With an apparent visual magnitude of 2.48, it is readily visible to the naked eye at night, and is the third-brightest star in the constellation. Based upon parallax measurement, Epsilon Cygni is about 73 light-years distant.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Cygni"},{id:"ALKAID",appMag:1.86,specType:"B3V",evolStage:"Main Sequence",massSolar:5.071,radiusSolar:2.894,ageGyr:.006,teffK:16329,summary:"Alkaid, also called Eta Ursae Majoris, is a star in the constellation of Ursa Major. It is the easternmost star in the Big Dipper asterism. However, unlike most stars of the Big Dipper, it is not a member of the Ursa Major moving group.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alkaid"},{id:"ALMACH",appMag:2.1,specType:"K2+IIb",evolStage:"Bright Giant",massSolar:14.5,radiusSolar:98.5,ageGyr:.0065,teffK:4248,summary:"Gamma Andromedae is a multiple star system in the northern constellation of Andromeda. It is the third-brightest star in the constellation, after Alpheratz and Mirach. Its identifier is a Bayer designation that is Latinized from γ Andromedae, and is abbreviated Gam1 And or γ1 And, respectively.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Andromedae"},{id:"ALNAIR",appMag:1.71,specType:"B6V",evolStage:"Main Sequence",massSolar:3.82,radiusSolar:3.4,ageGyr:.1,teffK:14245,summary:"Alpha Gruis is the brightest star in the southern constellation of Grus. It is officially named Alnair; Alpha Gruis is the star's Bayer designation, which is Latinized from α Gruis and abbreviated α Gru.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Gruis"},{id:"ALPHARD",appMag:1.97,specType:"K3IIIa",evolStage:"Giant",massSolar:3.2,radiusSolar:57.59,ageGyr:.42,teffK:4117,summary:"Alphard is the brightest star in the constellation of Hydra. It has the Bayer designation Alpha Hydrae, which is that is Latinized from α Hydrae, and abbreviated Alpha Hya or α Hya. It is a giant star, cooler than the Sun but larger and more luminous. It is about 177 light-years away.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alphard"},{id:"ALPHA_CENTAURI",appMag:-.27,specType:"G2V + K1V",evolStage:"Main Sequence",massSolar:1.079,radiusSolar:1.2175,ageGyr:5.3,teffK:5790,summary:"Alpha Centauri is a star system in the southern constellation of Centaurus. It consists of three stars: Rigil Kentaurus, Toliman, and Proxima Centauri.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Centauri"},{id:"ALPHERATZ",appMag:2.06,specType:"B8IV-VHgMn",evolStage:"Subgiant",massSolar:3.63,radiusSolar:2.8,ageGyr:.2,teffK:11950,summary:"Alpheratz is a prominent star system in the constellation of Andromeda. Pronounced, it has the Bayer designation Alpha Andromedae, Latinised from α Andromedae, and abbreviated Alpha And or α And, respectively. Alpheratz is the brightest star in the constellation when Mirach undergoes its periodical dimming.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpheratz"},{id:"ALPHERG",appMag:3.62,specType:"G7IIIa",evolStage:"Giant",massSolar:3.78,radiusSolar:28.67,ageGyr:.22,teffK:4843,summary:"Eta Piscium is a binary star and the brightest star in the equatorial-northern constellation of Pisces, with an apparent visual magnitude of +3.6.",wikipediaUrl:"https://en.wikipedia.org/wiki/Eta_Piscium"},{id:"ALSHAIN",appMag:3.71,specType:"G8IV",evolStage:"Subgiant",massSolar:1.24,radiusSolar:3.096,ageGyr:4.77,teffK:5090,summary:"Beta Aquilae is a triple star system in the equatorial constellation of Aquila. Its name is a Bayer designation that is Latinized from β Aquilae, and abbreviated Beta Aql or β Aql. This system is visible to the naked eye as a point-like source with an apparent visual magnitude of 3.87.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Aquilae"},{id:"ALTAIR",appMag:.76,specType:"A7V",evolStage:"Main Sequence",massSolar:1.79,radiusSolar:1.79,ageGyr:.1,teffK:7550,summary:"Altair is the brightest star in the equatorial constellation of Aquila and the twelfth-brightest star in the night sky. It has the Bayer designation Alpha Aquilae, which is Latinised from α Aquilae and abbreviated Alpha Aql or α Aql.",wikipediaUrl:"https://en.wikipedia.org/wiki/Altair"},{id:"ARCTURUS",appMag:-.05,specType:"K1.5III",evolStage:"Giant",massSolar:1.08,radiusSolar:25.4,ageGyr:7.1,teffK:4286,summary:"Arcturus is a red giant star in the northern constellation of Boötes, and the brightest star in the constellation. It has the Bayer designation α Boötis, which is Latinized to Alpha Boötis and abbreviated Alpha Boo or α Boo.",wikipediaUrl:"https://en.wikipedia.org/wiki/Arcturus"},{id:"ASCELLA",appMag:2.59,specType:"A2.5Va",evolStage:"Main Sequence",massSolar:1.83,radiusSolar:1.9,ageGyr:.7,teffK:8230,summary:"Zeta Sagittarii is a triple star system and the third-brightest star in the constellation of Sagittarius after Kaus Australis and Nunki. Based upon parallax measurements, it is about 88 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Zeta_Sagittarii"},{id:"ASTEROPE",appMag:5.76,specType:"B8V",evolStage:"Main Sequence",massSolar:2.93,radiusSolar:100,ageGyr:.1,teffK:11041,summary:"21 Tauri, formally named Asterope, is a component of the Sterope double star in the Pleiades open cluster. 21 Tauri is the star's Flamsteed designation.",wikipediaUrl:"https://en.wikipedia.org/wiki/21_Tauri"},{id:"ATLAS",appMag:3.63,specType:"B8III",evolStage:"Giant",massSolar:5.04,radiusSolar:7.81,ageGyr:2,teffK:12525,summary:"Atlas, designation 27 Tauri, is a binary star system in the constellation of Taurus. It is a member of the Pleiades, an open star cluster (M45). It is 444 light-years away, and is 3.92 degrees north of the ecliptic.",wikipediaUrl:"https://en.wikipedia.org/wiki/Atlas_(star)"},{id:"AUVA",appMag:3.38,specType:"M3III",evolStage:"Giant",massSolar:1.19,radiusSolar:67.4,teffK:3643,summary:"Delta Virginis, formally named Minelauva, is a star in the zodiac constellation of Virgo. With an apparent visual magnitude of 3.4, this star is bright enough to be seen with the naked eye. It is located at a distance of about 200 light-years from Earth.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Virginis"},{id:"BARNARD_S_STAR",appMag:9.51,specType:"M4.0V",evolStage:"Main Sequence",massSolar:.144,radiusSolar:.196,ageGyr:10,teffK:3134,summary:"Barnard's Star is a small red dwarf star in the constellation of Ophiuchus. At a distance of 5.96 light-years (1.83 pc) from Earth, it is the fourth-nearest-known individual star to the Sun after the three components of the Alpha Centauri system, and is the closest star in the northern celestial hemisphere.",wikipediaUrl:"https://en.wikipedia.org/wiki/Barnard's_Star"},{id:"BELLATRIX",appMag:1.64,specType:"B2III",evolStage:"Giant",massSolar:8.6,radiusSolar:5.75,ageGyr:.025,teffK:21800,summary:"Bellatrix is the third-brightest star in the constellation of Orion, positioned 5° west of the red supergiant Betelgeuse. It has the Bayer designation γ Orionis, which is Latinized to Gamma Orionis. With a slightly variable magnitude of around 1.6, it is typically the 25th-brightest star in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Bellatrix"},{id:"BETELGEUSE",appMag:.42,specType:"M1-2Ia-Iab",evolStage:"Red Supergiant",massSolar:16.5,radiusSolar:887,ageGyr:.0085,teffK:3600,summary:"Betelgeuse is a red supergiant star in the equatorial constellation of Orion. It is usually the tenth-brightest star in the night sky and, after Rigel, the second brightest in its constellation.",wikipediaUrl:"https://en.wikipedia.org/wiki/Betelgeuse"},{id:"CANOPUS",appMag:-.74,specType:"A9II",evolStage:"Bright Giant",massSolar:8,radiusSolar:71,ageGyr:.025,teffK:7400,summary:"Canopus is the brightest star in the southern constellation of Carina and the second-brightest star in the night sky. It is designated α Carinae, which is romanized (transliterated) to Alpha Carinae. With a visual apparent magnitude of −0.74, it is outshone only by Sirius.",wikipediaUrl:"https://en.wikipedia.org/wiki/Canopus"},{id:"CAPELLA",appMag:.08,specType:"G3III + K0III",evolStage:"Giant",massSolar:2.5687,radiusSolar:11.98,ageGyr:.59,teffK:4970,summary:"Capella is the brightest star in the northern constellation of Auriga. It has the Bayer designation α Aurigae, which is Latinised to Alpha Aurigae and abbreviated Alpha Aur or α Aur.",wikipediaUrl:"https://en.wikipedia.org/wiki/Capella"},{id:"CAPH",appMag:2.27,specType:"F2III",evolStage:"Giant",massSolar:1.91,radiusSolar:3.79,ageGyr:1.18,teffK:6167,summary:"Beta Cassiopeiae is a Delta Scuti variable star in the constellation of Cassiopeia. It has the proper name Caph, pronounced ; Beta Cassiopeiae is its Bayer designation, which is Latinized from β Cassiopeiae and abbreviated Beta Cas or β Cas. This is a giant star belonging to the spectral class F2.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Cassiopeiae"},{id:"CASTOR",appMag:1.58,specType:"A1V + A2Vm",evolStage:"Main Sequence",massSolar:2.76,radiusSolar:2.4,ageGyr:.2,teffK:10286,summary:"Castor is the second-brightest object in the zodiac constellation of Gemini. It has the Bayer designation α Geminorum, which is Latinised to Alpha Geminorum and abbreviated Alpha Gem or α Gem. With an apparent visual magnitude of 1.58, it is one of the brightest stars in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Castor_(star)"},{id:"CEBALRAI",appMag:2.75,specType:"K2IIICN0.5",evolStage:"Giant",massSolar:1.44,radiusSolar:12.17,ageGyr:2.75,teffK:4559,summary:"Beta Ophiuchi or β Ophiuchi, also named Cebalrai, is a star in the equatorial constellation of Ophiuchus. The apparent visual magnitude of this star is 2.7, which is readily visible to the naked eye even from urban skies.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Ophiuchi"},{id:"CELAENO",appMag:5.46,specType:"B7V",evolStage:"Main Sequence",massSolar:4,radiusSolar:2.34,ageGyr:.122,teffK:12800,summary:"Celaeno, designated 16 Tauri, is a star in the constellation of Taurus and a member of the Pleiades open star cluster (M45) of stars.",wikipediaUrl:"https://en.wikipedia.org/wiki/Celaeno_(star)"},{id:"CHERTAN",appMag:3.35,specType:"A2IV",evolStage:"Subgiant",massSolar:2.8,radiusSolar:4.03,ageGyr:.407,teffK:9480,summary:"Theta Leonis, Latinized from θ Leonis, formally named Chertan, is a star in the equatorial-northern constellation of Leo. With an apparent visual magnitude of +3.324 it is visible to the naked eye and forms one of the brighter stars in the constellation.",wikipediaUrl:"https://en.wikipedia.org/wiki/Theta_Leonis"},{id:"DABIH",appMag:3.08,specType:"G9II:+B8p:Si:",evolStage:"Bright Giant",massSolar:3.69,radiusSolar:31.4,ageGyr:.23,teffK:4870,summary:"Beta Capricorni is a multiple star system in the constellation of Capricornus. Its name is a Bayer designation that is Latinized from β Capricorni, and abbreviated Beta Cap or β Cap. Based on Parallax measurements, it is located at a distance of approximately 390 light years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Capricorni"},{id:"DELTA_PAVONIS",appMag:3.56,specType:"G8IV",evolStage:"Subgiant",massSolar:1.07,radiusSolar:1.197,ageGyr:6.1,teffK:5609,summary:"Delta Pavonis is a single star in the southern constellation of Pavo. Its name is a Bayer designation that is Latinized from δ Pavonis, and abbreviated Delta Pav or δ Pav. It has an apparent visual magnitude of 3.56, making it a fourth-magnitude star that is visible to the naked eye from the southern hemisphere.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Pavonis"},{id:"DENEBOLA",appMag:2.14,specType:"A3V",evolStage:"Main Sequence",massSolar:1.78,radiusSolar:1.728,ageGyr:.4,teffK:8500,summary:"Denebola is the second-brightest star in the zodiac constellation of Leo. It is the easternmost of the bright stars of Leo. It has the Bayer designation Beta Leonis or β Leonis, which are abbreviated Beta Leo or β Leo.",wikipediaUrl:"https://en.wikipedia.org/wiki/Denebola"},{id:"DENEB_ALGEDI",appMag:2.84,specType:"kA5hF0mF2III",evolStage:"Giant",massSolar:1.54,radiusSolar:1.87,ageGyr:1.4,teffK:7e3,summary:"Delta Capricorni is the brightest star in the constellation of Capricornus, the Sea Goat. It is a binary star system whose components are seen to eclipse each other, known as an eclipsing binary.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Capricorni"},{id:"DSCHUBBA",appMag:2.32,specType:"B0.3IV",evolStage:"Subgiant",massSolar:13,radiusSolar:8.5,teffK:27400,summary:"Delta Scorpii is a binary star in the constellation of Scorpius. The primary star is named Dschubba.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Scorpii"},{id:"DUBHE",appMag:1.79,specType:"G9III+A7.5",evolStage:"Giant",massSolar:3.7,radiusSolar:27.33,ageGyr:.28,teffK:4810,summary:'Dubhe is a multiple star system in the northern constellation of Ursa Major. It is formally designated Alpha Ursae Majoris, Latinised from α Ursae Majoris, Despite being designated "α" (alpha), it is the second-brightest object in the constellation.',wikipediaUrl:"https://en.wikipedia.org/wiki/Dubhe"},{id:"ELECTRA",appMag:3.7,specType:"B6IIIe",evolStage:"Giant",massSolar:4.6,radiusSolar:6.06,ageGyr:.115,teffK:13484,summary:"Electra, designated 17 Tauri, is a blue-white giant star in the constellation of Taurus located approximately 440 light years away. It is the third-brightest star in the Pleiades open star cluster (M45), visible to the naked eye with an apparent magnitude of 3.7.",wikipediaUrl:"https://en.wikipedia.org/wiki/Electra_(star)"},{id:"ELNATH",appMag:1.65,specType:"B7III",evolStage:"Giant",massSolar:5,radiusSolar:4.79,ageGyr:.1,teffK:13600,summary:"Beta Tauri is the second-brightest star in the constellation of Taurus. It has the official name Elnath; Beta Tauri is the current Bayer designation, which is Latinised from β Tauri and abbreviated Beta Tau or β Tau. The original designation of Gamma Aurigae is now rarely used.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Tauri"},{id:"ELTANIN",appMag:2.23,specType:"K5III",evolStage:"Giant",massSolar:2.14,radiusSolar:51.8,ageGyr:1.3,teffK:3964,summary:"Gamma Draconis, formally named Eltanin, is a star in the northern constellation of Draco. Contrary to its gamma-designation, it is the brightest object in Draco at magnitude 2.2, outshining Beta Draconis by nearly half a magnitude and Alpha Draconis by over a magnitude.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Draconis"},{id:"EPSILON_ERIDANI",appMag:3.73,specType:"K2V",evolStage:"Main Sequence",massSolar:.82,radiusSolar:.738,ageGyr:.6,teffK:5084,summary:"Epsilon Eridani, proper name Ran, is a star in the southern constellation of Eridanus. At a declination of −9.46°, it is visible from most of Earth's surface.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Eridani"},{id:"EPSILON_INDI",appMag:4.69,specType:"K5V",evolStage:"Main Sequence",massSolar:.762,radiusSolar:.711,ageGyr:1.3,teffK:4649,summary:"Epsilon Indi, Latinized from ε Indi, is a star system located at a distance of approximately 12 light-years from Earth in the southern constellation of Indus. The star has an orange hue and is faintly visible to the naked eye with an apparent visual magnitude of 4.674.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Indi"},{id:"ERRAI",appMag:3.22,specType:"K1III-IVCN1",evolStage:"Giant",massSolar:1.27,radiusSolar:4.74,ageGyr:5.7,teffK:4806,summary:"Gamma Cephei is a binary star system in the northern constellation of Cepheus. Its name is a Bayer designation that is Latinized from γ Cephei, and abbreviated Gamma Cep or γ Cep. This system is visible to the naked eye as a point of light with a combined apparent visual magnitude of 3.21.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Cephei"},{id:"ETA_CASSIOPEIAE",appMag:3.44,specType:"F9V",evolStage:"Main Sequence",massSolar:1.0258,radiusSolar:1.0336,ageGyr:5.4,teffK:6012,summary:"Eta Cassiopeiae is a binary star system in the northern constellation of Cassiopeia. Its name is a Bayer designation that is Latinized from η Cassiopeiae and abbreviated Eta Cas or η Cas. The binary nature of this system was first discovered by William Herschel in August 1779.",wikipediaUrl:"https://en.wikipedia.org/wiki/Eta_Cassiopeiae"},{id:"FOMALHAUT",appMag:1.16,specType:"A3V",evolStage:"Main Sequence",massSolar:1.92,radiusSolar:1.842,ageGyr:.44,teffK:8590,summary:"Fomalhaut is the brightest star in the southern constellation of Piscis Austrinus, the Southern Fish, and one of the brightest stars in the night sky. It has the Bayer designation Alpha Piscis Austrini, which is an alternative form of α Piscis Austrini, and is abbreviated Alpha PsA or α PsA.",wikipediaUrl:"https://en.wikipedia.org/wiki/Fomalhaut"},{id:"GACRUX",appMag:1.64,specType:"M3.5III",evolStage:"Giant",massSolar:1.5,radiusSolar:84,ageGyr:5,teffK:3626,summary:"Gacrux is the third-brightest star in the southern constellation of Crux, the Southern Cross. It has the Bayer designation Gamma Crucis, which is Latinised from γ Crucis and abbreviated Gamma Cru or γ Cru. With an apparent visual magnitude of +1.63, it is the 26th brightest star in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gacrux"},{id:"GLIESE_105",appMag:5.83,specType:"K3V",evolStage:"Main Sequence",massSolar:.8,radiusSolar:.73,ageGyr:11,teffK:4886,summary:"Gliese 105 is a triple star system in the constellation of Cetus. It is located relatively near the Sun at a distance of 23.6 light years. Despite this, even the brightest component is barely visible with the unaided eye (see Bortle scale). No planets have yet been detected around any of the stars in this system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gliese_105"},{id:"GLIESE_570",appMag:5.72,specType:"K4V",evolStage:"Main Sequence",massSolar:.802,radiusSolar:.715,teffK:4505,summary:"Gliese 570 is a quaternary star system approximately 19 light-years away. The primary star is an orange dwarf star. The other secondary stars are themselves a binary system, two red dwarfs that orbit the primary star. A brown dwarf has been confirmed to be orbiting in the system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gliese_570"},{id:"GLIESE_667_C",appMag:5.89,specType:"M1.5V",evolStage:"Main Sequence",massSolar:.65,radiusSolar:.76,teffK:4270,summary:"Gliese 667 is a triple-star system in the constellation Scorpius lying at a distance of about 7.2 parsecs from Earth. All three of the stars have masses smaller than the Sun. To the naked eye, the system appears to be a single faint star of magnitude 5.89.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gliese_667"},{id:"GOMEISA",appMag:2.89,specType:"B8Ve",evolStage:"Main Sequence",massSolar:3.64,radiusSolar:4.12,ageGyr:.16,teffK:11772,summary:"Beta Canis Minoris is a variable star in the constellation of Canis Minor. It has the proper name Gomeisa, pronounced ; Beta Canis Minoris is its Bayer designation. In the night sky it is notable for its proximity to the prominent star Procyon. This is a probable binary star system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Canis_Minoris"},{id:"HADAR",appMag:.6,specType:"B1III",evolStage:"Giant",massSolar:12.02,radiusSolar:7.07,ageGyr:.0141,teffK:25e3,summary:"Beta Centauri is a triple star system in the southern constellation of Centaurus. It is officially called Hadar. The Bayer designation of Beta Centauri is Latinised from β Centauri, and abbreviated Beta Cen or β Cen.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Centauri"},{id:"HD_219134",appMag:5.57,specType:"K3V",evolStage:"Main Sequence",massSolar:.763,radiusSolar:.748,ageGyr:10.151,teffK:4817.1,summary:"HD 219134 is a main-sequence star in the constellation of Cassiopeia. It is smaller and less luminous than the Sun, with a spectral class of K3V, which makes it an orange-hued star. HD 219134 is relatively close to our system, with an estimated distance of 21.34 light years.",wikipediaUrl:"https://en.wikipedia.org/wiki/HD_219134"},{id:"HYADUM_I",appMag:3.65,specType:"K0III",evolStage:"Giant",massSolar:2.7,radiusSolar:13.4,ageGyr:.43,teffK:4844,summary:'Gamma Tauri is either a solitary, binary or double star that marks the tip of the "V" in the constellation of Taurus. It is a member of, and located within about 2.5 parsecs of the center of, the Hyades star cluster, the nearest open cluster to the Sun.',wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Tauri"},{id:"HYADUM_II",appMag:3.76,specType:"K0- IIICN0.5",evolStage:"Giant",massSolar:2.75,radiusSolar:14.9,ageGyr:.588,teffK:4819,summary:"Delta1 Tauri is a double star in the zodiac constellation of Taurus. Based upon an annual parallax shift of 20.96 mas as seen from Earth, it is located roughly 156 light-years distant from the Sun. The system is faintly visible to the naked eye with a combined apparent visual magnitude of +3.772.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta1_Tauri"},{id:"IZAR",appMag:2.39,specType:"K0-II-III",evolStage:"Bright Giant",massSolar:5.36,radiusSolar:37.61,teffK:4755,summary:"Epsilon Boötis is a binary star system in the northern constellation of Boötes. The two components have the proper names Izar and Pulcherrima respectively; both are traditional names for the system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Bo%C3%B6tis"},{id:"K2_18",appMag:13.5,specType:"dM2.5",evolStage:"Main Sequence",massSolar:.495,radiusSolar:.469,ageGyr:2.9,teffK:3645,summary:"K2-18, also known as EPIC 201912552, is a red dwarf star with two planetary companions located 124 light-years from Earth, in the constellation of Leo.",wikipediaUrl:"https://en.wikipedia.org/wiki/K2-18"},{id:"KAPTEYN_S_STAR",appMag:8.853,specType:"M1VIp",evolStage:"Subdwarf",massSolar:.281,radiusSolar:.291,ageGyr:11.5,teffK:3570,summary:"Kapteyn's Star is a class M1 red subdwarf about 12.83 light-years from Earth in the southern constellation Pictor; it is the closest halo star to the Solar System and one of the nearest stars. With a slightly variable apparent magnitude of about 8.8, it is visible through binoculars or a telescope.",wikipediaUrl:"https://en.wikipedia.org/wiki/Kapteyn's_Star"},{id:"KAUS_AUSTRALIS",appMag:1.81,specType:"B9IVp_lB?",evolStage:"Subgiant",massSolar:3.8,radiusSolar:8.8,ageGyr:.232,teffK:11720,summary:"Epsilon Sagittarii, formally named Kaus Australis, is a binary star system in the southern zodiac constellation of Sagittarius. The apparent visual magnitude of +1.85 makes it the brightest star in Sagittarius. Based upon parallax measurements, this star is around 143 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Sagittarii"},{id:"KAUS_BOREALIS",appMag:2.81,specType:"K1IIIb",evolStage:"Giant",massSolar:1.79,radiusSolar:11.234,teffK:4768,summary:"Lambda Sagittarii, formally named Kaus Borealis, is a star in the southern constellation of Sagittarius. The star marks the top of the Archer's bow.",wikipediaUrl:"https://en.wikipedia.org/wiki/Lambda_Sagittarii"},{id:"KOCHAB",appMag:2.08,specType:"K4-III",evolStage:"Giant",massSolar:1.3,radiusSolar:44.13,ageGyr:2.95,teffK:4008,summary:"Kochab, Bayer designation Beta Ursae Minoris, is the brightest star in the bowl of the Little Dipper asterism, and only slightly fainter than Polaris, the northern pole star and brightest star in Ursa Minor. Kochab is 16 degrees from Polaris and has an apparent visual magnitude of 2.08.",wikipediaUrl:"https://en.wikipedia.org/wiki/Kochab"},{id:"KORNEPHOROS",appMag:2.77,specType:"G7IIIaFe-0.5",evolStage:"Giant",massSolar:2.85,radiusSolar:15.92,ageGyr:.42,teffK:5092,summary:"Beta Herculis, formally named Kornephoros, is a binary star and the brightest star in the northern constellation of Hercules at a base apparent visual magnitude of 2.81. This is a suspected variable star with an apparent magnitude that may rise as high as 2.76.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Herculis"},{id:"LACAILLE_9352",appMag:7.392,specType:"M2V",evolStage:"Main Sequence",massSolar:.479,radiusSolar:.474,ageGyr:4.57,teffK:3672,summary:"Gliese 887, also Lacaille 9352, is a red dwarf star in the southern constellation of Piscis Austrinus. With an apparent visual magnitude of 7.34, this star is too faint to be viewed with the naked eye except possibly under excellent seeing conditions.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gliese_887"},{id:"LALANDE_21185",appMag:7.52,specType:"M2V",evolStage:"Main Sequence",massSolar:.39,radiusSolar:.392,ageGyr:5,teffK:3601,summary:"Lalande 21185 is a star in the south of Ursa Major. It is the apparent brightest red dwarf in the northern hemisphere. Despite this, and being relatively close by, it is very dim, being only magnitude 7.5 in visible light and thus too faint to be seen with the unaided eye.",wikipediaUrl:"https://en.wikipedia.org/wiki/Lalande_21185"},{id:"LHS_1140",appMag:14.15,specType:"M4.5V",evolStage:"Main Sequence",massSolar:.1844,radiusSolar:.2159,ageGyr:5,teffK:3096,summary:"LHS 1140 is a red dwarf star in the constellation of Cetus. Based on stellar parallax measurement, it is 48.8 light-years away from the Sun. 'LHS' refers to the Luyten Half-Second Catalogue of stars with proper motions exceeding half a second of arc annually.",wikipediaUrl:"https://en.wikipedia.org/wiki/LHS_1140"},{id:"MAHASIM",appMag:2.62,specType:"A0VpSi",evolStage:"Main Sequence",massSolar:3.24,radiusSolar:4.68,ageGyr:.288,teffK:10220,summary:"Theta Aurigae is a binary star system in the constellation of Auriga. Its name is a Bayer designation that is Latinized from θ Aurigae, and abbreviated Theta Aur or θ Aur. This is a variable star with an apparent visual magnitude that varies from 2.62 to 2.70, which is bright enough to be seen with the naked eye.",wikipediaUrl:"https://en.wikipedia.org/wiki/Theta_Aurigae"},{id:"MAIA",appMag:3.87,specType:"B7III",evolStage:"Giant",massSolar:4.74,radiusSolar:6.61,ageGyr:.126,teffK:12550,summary:"Maia, designated 20 Tauri, is a star in the constellation of Taurus. It is a blue giant of spectral type B8 III, a chemically peculiar star.",wikipediaUrl:"https://en.wikipedia.org/wiki/Maia_(star)"},{id:"MARKAB",appMag:2.48,specType:"A0IV",evolStage:"Subgiant",massSolar:3.5,radiusSolar:4.62,ageGyr:.2,teffK:10100,summary:"Alpha Pegasi, formally named Markab, is the third-brightest star in the constellation of Pegasus and one of the four stars in the asterism known as the Great Square of Pegasus.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Pegasi"},{id:"MATAR",appMag:2.95,specType:"G8II+F0V",evolStage:"Bright Giant",massSolar:3.51,radiusSolar:24.51,ageGyr:.27,teffK:4970,summary:"Eta Pegasi or η Pegasi, formally named Matar, is a binary star in the constellation of Pegasus. The apparent visual magnitude of this star is +2.95, making it the fifth-brightest member of Pegasus. Based upon parallax measurements, the distance to this star is about 214 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Eta_Pegasi"},{id:"MEGREZ",appMag:3.32,specType:"A2Vn",evolStage:"Main Sequence",massSolar:2.062,radiusSolar:2.512,ageGyr:.414,teffK:6909,summary:"Megrez, also called Delta Ursae Majoris, is a star in the northern constellation of Ursa Major. With an apparent magnitude of +3.3, it is the dimmest of the seven stars in the Big Dipper asterism. Parallax measurements yield a distance estimate of 80.5 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Megrez"},{id:"MENKALINAN",appMag:1.9,specType:"A1IV-Vp",evolStage:"Subgiant",massSolar:2.3885,radiusSolar:2.762,ageGyr:.4,teffK:8985,summary:"Beta Aurigae is a binary star system in the northern constellation of Auriga. Its identifier is a Bayer designation that is Latinized from β Aurigae, and abbreviated Beta Aur or β Aur. This star has the official name Menkalinan, pronounced.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Aurigae"},{id:"MENKENT",appMag:2.05,specType:"K0-IIIb",evolStage:"Giant",massSolar:1.32,radiusSolar:10.96,teffK:4853,summary:"Theta Centauri is a single star in the southern constellation of Centaurus, the centaur. It has the official name Menkent, pronounced ; Theta Centauri is its Bayer designation, which is Latinized from θ Centauri and abbreviated Theta Cen or θ Cen.",wikipediaUrl:"https://en.wikipedia.org/wiki/Theta_Centauri"},{id:"MERAK",appMag:2.37,specType:"A1IVps",evolStage:"Subgiant",massSolar:2.7,radiusSolar:2.81,ageGyr:.39,teffK:9700,summary:"Merak, also called Beta Ursae Majoris, is a star in the northern constellation of Ursa Major.",wikipediaUrl:"https://en.wikipedia.org/wiki/Merak_(star)"},{id:"MEROPE",appMag:4.18,specType:"B6IV(e)",evolStage:"Subgiant",massSolar:4.25,radiusSolar:4.79,ageGyr:.212,teffK:14550,summary:"Merope, designated 23 Tauri, is a star in the constellation of Taurus and a member of the Pleiades star cluster. It is approximately 440 light-years (135 pc) away.",wikipediaUrl:"https://en.wikipedia.org/wiki/Merope_(star)"},{id:"MIAPLACIDUS",appMag:1.69,specType:"A1III-",evolStage:"Giant",massSolar:3.88,radiusSolar:5.82,ageGyr:.26,teffK:9150,summary:"Beta Carinae is the second-brightest star in the southern constellation of Carina. It has the official name Miaplacidus; Beta Carinae is the star's Bayer designation, which is Latinised from β Carinae and abbreviated Beta Car or β Car. With apparent magnitude of 1.69, it is one of the brightest stars in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Carinae"},{id:"MIMOSA",appMag:1.25,specType:"B0.5III",evolStage:"Giant",massSolar:16,radiusSolar:8.4,ageGyr:.01,teffK:27e3,summary:"Mimosa is the second-brightest object in the southern constellation of Crux, and the 20th-brightest star in the night sky. It has the Bayer designation β Crucis, which is Latinised to Beta Crucis and abbreviated Beta Cru or β Cru. Mimosa forms part of the prominent asterism called the Southern Cross.",wikipediaUrl:"https://en.wikipedia.org/wiki/Mimosa_(star)"},{id:"MIRACH",appMag:2.05,specType:"M0+IIIa",evolStage:"Giant",massSolar:2.49,radiusSolar:86.4,teffK:3762,summary:"Mirach is a prominent star in the northern constellation of Andromeda. It is pronounced and has the Bayer designation Beta Andromedae, which is Latinized from β Andromedae. This star is positioned northeast of the Great Square of Pegasus and is potentially visible to all observers north of latitude 54° S.",wikipediaUrl:"https://en.wikipedia.org/wiki/Mirach"},{id:"MIRZAM",appMag:1.97,specType:"B1II-III",evolStage:"Bright Giant",massSolar:13,radiusSolar:8.44,ageGyr:.0122,teffK:25180,summary:'Beta Canis Majoris is a star in the southern constellation of Canis Major, the "Great Dog". Its name is a Bayer designation; it has the proper name Mirzam, pronounced. Visible to the naked eye, this is a variable star that ranges in apparent visual magnitude from 1.97 to 2.01 over a period of six hours.',wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Canis_Majoris"},{id:"MIZAR",appMag:2.04,specType:"A2V",evolStage:"Main Sequence",massSolar:2.2224,radiusSolar:2.4,ageGyr:.37,teffK:9e3,summary:"Mizar is a second-magnitude star in the handle of the Big Dipper asterism in the constellation of Ursa Major. It has the Bayer designation ζ Ursae Majoris. It forms a well-known naked eye double star with the fainter star Alcor, and is itself a quadruple star system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Mizar"},{id:"MUHLIFAIN",appMag:2.17,specType:"A1IV+",evolStage:"Subgiant",massSolar:2.8,radiusSolar:36.5,teffK:9300,summary:"Gamma Centauri is a binary star system in the southern constellation of Centaurus, which is probably part of a wider system together with Tau Centauri. The system is visible to the naked eye as a single point of light with a combined apparent visual magnitude of +2.17; individually they are third-magnitude stars.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Centauri"},{id:"MUPHRID",appMag:2.68,specType:"G0IV",evolStage:"Subgiant",massSolar:1.71,radiusSolar:2.659,ageGyr:2.7,teffK:6161,summary:"Eta Boötis is a candidate binary star system in the constellation of Boötes. Its name is a Bayer designation that is Latinized from η Boötis, and abbreviated Eta Boo or η Boo. This system is visible to the naked eye as a point of light with an apparent visual magnitude of 2.68.",wikipediaUrl:"https://en.wikipedia.org/wiki/Eta_Bo%C3%B6tis"},{id:"NEKKAR",appMag:3.52,specType:"G8IIIaFe-0.5",evolStage:"Giant",massSolar:3.23,radiusSolar:18.44,ageGyr:.32,teffK:4997,summary:"Beta Boötis is a star in the northern constellation of Boötes. Its name is a Bayer designation that is Latinized from β Boötis, and abbreviated Beta Boo or β Boo. The star has the official name Nekkar, pronounced, which is derived from an Arabic name for 'the Herdsman'.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Bo%C3%B6tis"},{id:"NUNKI",appMag:2.067,specType:"B2.5V",evolStage:"Main Sequence",massSolar:6.5,radiusSolar:4.1,ageGyr:.0314,teffK:18500,summary:"Sigma Sagittarii, Latinized from σ Sagittarii; formally named Nunki, is the second-brightest star in the constellation of Sagittarius. It is a binary star system, viewed as a single star of combined apparent magnitude +2.05, about the same brightness as Saiph in Orion.",wikipediaUrl:"https://en.wikipedia.org/wiki/Sigma_Sagittarii"},{id:"PEACOCK",appMag:1.918,specType:"B2IV",evolStage:"Subgiant",massSolar:5.91,radiusSolar:4.83,ageGyr:.048,teffK:17711,summary:"Alpha Pavonis, formally named Peacock, is a binary star in the southern constellation of Pavo, near the border with the constellation Telescopium.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Pavonis"},{id:"PHECDA",appMag:2.44,specType:"A0V",evolStage:"Main Sequence",massSolar:2.412,radiusSolar:3.385,ageGyr:.333,teffK:6751,summary:"Phecda, also called Gamma Ursae Majoris, is a star in the constellation of Ursa Major. Since 1943, the spectrum of this star has served as one of the stable anchor points by which other stars are classified.",wikipediaUrl:"https://en.wikipedia.org/wiki/Phecda"},{id:"PHERKAD",appMag:3.002,specType:"A2III",evolStage:"Giant",massSolar:4.8,radiusSolar:15,ageGyr:.1,teffK:8280,summary:'Pherkad, also known as Gamma Ursae Minoris or γ Ursae Minoris, abbreviated Gamma UMi, γ UMi, is a star in the northern constellation of Ursa Minor. Together with Beta Ursae Minoris (Kochab), it forms the end of the dipper pan of the "Little Dipper", which is an asterism forming the tail of the bear.',wikipediaUrl:"https://en.wikipedia.org/wiki/Pherkad"},{id:"PLEIONE",appMag:5.09,specType:"B8Vne",evolStage:"Main Sequence",massSolar:2.888,radiusSolar:4.17,ageGyr:.125,teffK:11058,summary:"Pleione is a binary star system in the Pleiades star cluster, within the constellation of Taurus. It has the variable star designation BU Tauri and the Flamsteed designation 28 Tauri.",wikipediaUrl:"https://en.wikipedia.org/wiki/Pleione_(star)"},{id:"POLARIS",appMag:1.98,specType:"F7Ib",evolStage:"Supergiant",massSolar:5.4,radiusSolar:37.5,ageGyr:.07,teffK:6015,summary:"Polaris is a yellow supergiant star in the northern circumpolar constellation of Ursa Minor. It is designated α Ursae Minoris and is commonly called the North Star. With an apparent magnitude that fluctuates around 1.98, it is the brightest star in the constellation and is readily visible to the naked eye at night.",wikipediaUrl:"https://en.wikipedia.org/wiki/Polaris"},{id:"POLLUX",appMag:1.14,specType:"K0III",evolStage:"Giant",massSolar:1.91,radiusSolar:8.8,ageGyr:.724,teffK:4666,summary:"Pollux is the brightest star in the constellation of Gemini. It has the Bayer designation β Geminorum, which is Latinised to Beta Geminorum and abbreviated Beta Gem or β Gem. This is an orange-hued, evolved red giant located at a distance of 34 light-years, making it the closest red giant to the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Pollux_(star)"},{id:"PORRIMA",appMag:2.74,specType:"F1-F2V",evolStage:"Main Sequence",massSolar:1.429,radiusSolar:1.45,ageGyr:1.46,teffK:6922,summary:"Gamma Virginis, officially named Porrima, is a binary star system in the constellation of Virgo. It consists of two almost identical main sequence stars at a distance of about 38 light-years.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Virginis"},{id:"PRIMA_HYADUM",appMag:3.65,specType:"G9.5IIIabCN0.5",evolStage:"Giant",massSolar:2.7,radiusSolar:13.4,ageGyr:.43,teffK:4844,summary:'Gamma Tauri is either a solitary, binary or double star that marks the tip of the "V" in the constellation of Taurus. It is a member of, and located within about 2.5 parsecs of the center of, the Hyades star cluster, the nearest open cluster to the Sun.',wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Tauri"},{id:"PROCYON",appMag:.34,specType:"F5IV-V",evolStage:"Subgiant",massSolar:1.499,radiusSolar:2.048,ageGyr:1.87,teffK:6530,summary:"Procyon is the brightest star in the constellation of Canis Minor and usually the eighth-brightest star in the night sky, with an apparent visual magnitude of 0.34. It has the Bayer designation α Canis Minoris, which is Latinized to Alpha Canis Minoris, and abbreviated α CMi or Alpha CMi, respectively.",wikipediaUrl:"https://en.wikipedia.org/wiki/Procyon"},{id:"PROXIMA_CEN",appMag:11.13,specType:"M5.5Ve",evolStage:"Main Sequence",massSolar:.1221,radiusSolar:.1542,ageGyr:4.85,teffK:3042,summary:"Proxima Centauri is a small, low-mass star located 4.2465 light-years away from the Sun in the southern constellation of Centaurus. It is the nearest-known star to the Sun and the third member of the Alpha Centauri system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Proxima_Centauri"},{id:"RASALGETHI",appMag:-2.3,specType:"M5Ib-II+G5III+F2V:",evolStage:"Red Supergiant",massSolar:2.5,radiusSolar:264,teffK:3155,summary:"Alpha Herculis, also designated Rasalgethi and 64 Herculis, is a multiple star system in the constellation of Hercules. Appearing as a single point of light to the naked eye, it is resolvable into a number of components through a telescope.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Herculis"},{id:"RASALHAGUE",appMag:2.07,specType:"A5IVnn",evolStage:"Subgiant",massSolar:2.2,radiusSolar:2.858,ageGyr:.77,teffK:7569,summary:"Alpha Ophiuchi, also named Rasalhague, is a binary star and the brightest star in the constellation of Ophiuchus. Five degrees west-north-west of Rasalhague lies Rasalgethi, one of the brightest stars in the nearby constellation Hercules.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Ophiuchi"},{id:"RASTABAN",appMag:2.81,specType:"G2Ib-IIa",evolStage:"Supergiant",massSolar:6,radiusSolar:40,ageGyr:.065,teffK:5160,summary:"Beta Draconis is a binary star system and the third-brightest star in the northern circumpolar constellation of Draco. The two components are designated Beta Draconis A and B respectively. With a combined apparent visual magnitude of 2.79, it is bright enough to be easily seen with the naked eye.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Draconis"},{id:"REGULUS",appMag:1.4,specType:"B8IV",evolStage:"Subgiant",massSolar:3.8,radiusSolar:4.35,ageGyr:1,teffK:12460,summary:"Regulus is the brightest object in the constellation Leo and one of the brightest stars in the night sky. It has the Bayer designation designated α Leonis, which is Latinized to Alpha Leonis, and abbreviated Alpha Leo or α Leo.",wikipediaUrl:"https://en.wikipedia.org/wiki/Regulus"},{id:"ROSS_128",appMag:11.153,specType:"dM4",evolStage:"Main Sequence",massSolar:.176,radiusSolar:.198,ageGyr:5,teffK:3189,summary:"Ross 128 is a red dwarf star in the equatorial zodiac constellation of Virgo, near β Virginis. The apparent magnitude of Ross 128 is 11.13, which is too faint to be seen with the unaided eye.",wikipediaUrl:"https://en.wikipedia.org/wiki/Ross_128"},{id:"ROSS_154",appMag:10.495,specType:"M3.5Ve",evolStage:"Main Sequence",massSolar:.177,radiusSolar:.2,ageGyr:1,teffK:3248,summary:"Ross 154 is a red dwarf star in the southern zodiac constellation of Sagittarius. It has an apparent visual magnitude of 10.44, making it much too faint to be seen with the naked eye. At a minimum, viewing Ross 154 requires a telescope with an aperture of 6.5 cm (3 in) under ideal conditions.",wikipediaUrl:"https://en.wikipedia.org/wiki/Ross_154"},{id:"ROSS_248",appMag:12.28,specType:"M5.0V",evolStage:"Main Sequence",massSolar:.145,radiusSolar:.19,ageGyr:2.6,teffK:2930,summary:"Ross 248, also called HH Andromedae or Gliese 905, is a red dwarf star approximately 10.30 light-years from Earth in the northern constellation of Andromeda. Despite its proximity it is too dim to be seen with the naked eye.",wikipediaUrl:"https://en.wikipedia.org/wiki/Ross_248"},{id:"RUCHBAH",appMag:2.68,specType:"A5IV",evolStage:"Subgiant",massSolar:2.49,radiusSolar:3.9,ageGyr:.6,teffK:7980,summary:"Delta Cassiopeiae is an eclipsing binary star system in the northern circumpolar constellation of Cassiopeia. Its name is a Bayer designation that is Latinized from δ Cassiopeiae, and abbreviated Delta Cas or δ Cas.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Cassiopeiae"},{id:"SABIK",appMag:2.42,specType:"A2IV-V",evolStage:"Subgiant",massSolar:2.25,radiusSolar:2.5,ageGyr:.5,teffK:9e3,summary:"Eta Ophiuchi is a binary star in the constellation of Ophiuchus. Its name is a Bayer designation that is Latinized from η Ophiuchi, and abbreviated Eta Oph or η Oph. With a combined apparent magnitude of +2.43, it is the second-brightest of the constellation and one of the brightest stars in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Eta_Ophiuchi"},{id:"SARIN",appMag:3.13,specType:"A1IVn",evolStage:"Subgiant",massSolar:2.4,radiusSolar:2.2,ageGyr:.37,teffK:9620,summary:"Delta Herculis is a spectroscopic binary in the constellation of Hercules. Its light produces to us apparent magnitude 3.12, as such the third-brightest star in the large, fairly dim constellation. Based on parallax measurement taken during the Hipparcos mission, it is approximately 23.1 parsecs from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Herculis"},{id:"SCHEAT",appMag:2.42,specType:"M2.5II-III",evolStage:"Bright Giant",massSolar:1.7,radiusSolar:109,teffK:3606,summary:"Beta Pegasi, formally named Scheat, is a red giant star and the second-brightest star in the constellation of Pegasus. It forms the upper right corner of the Great Square of Pegasus, a prominent rectangular asterism.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Pegasi"},{id:"SCHEDAR",appMag:2.23,specType:"K0-IIIa",evolStage:"Giant",massSolar:4.98,radiusSolar:42.15,ageGyr:.22,teffK:4625,summary:"Alpha Cassiopeiae is a star in the northern constellation of Cassiopeia. It has the proper name Schedar, pronounced ); Alpha Cassiopeiae is its Bayer designation, which is Latinized from α Cassiopeiae and abbreviated Alpha Cas or α Cas.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Cassiopeiae"},{id:"SEGIN",appMag:3.37,specType:"B3Vp_sh",evolStage:"Main Sequence",massSolar:9.2,radiusSolar:6.1,ageGyr:.0154,teffK:15174,summary:"Epsilon Cassiopeiae is a single star in the northern constellation of Cassiopeia. It has the proper name Segin, pronounced ; Epsilon Cassiopeiae is the Bayer designation, which is Latinized from ε Cassiopeiae and abbreviated Epsilon Cas or ε Cas.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Cassiopeiae"},{id:"SEGINUS",appMag:3.02,specType:"A7IV+(n)",evolStage:"Subgiant",massSolar:2.1,radiusSolar:4.03,ageGyr:.9,teffK:7800,summary:"Gamma Boötis is a binary star system in the northern constellation of Boötes the herdsman, forming the left shoulder of this asterism. Its name is a Bayer designation that is Latinised from γ Boötis, and abbreviated Gamma Boo or γ Boo.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Bo%C3%B6tis"},{id:"SIGMA_DRACONIS",appMag:4.68,specType:"K0V",evolStage:"Main Sequence",massSolar:.84,radiusSolar:.772,ageGyr:4.54,teffK:5255,summary:"Sigma Draconis is a single star in the northern constellation of Draco. It has the proper name Alsafi, while Sigma Draconis, which is latinised from σ Draconis and abbreviated Sig Dra or σ Dra, is the Bayer designation.",wikipediaUrl:"https://en.wikipedia.org/wiki/Sigma_Draconis"},{id:"SIRIUS",appMag:-1.46,specType:"A1V",evolStage:"Main Sequence",massSolar:2.063,radiusSolar:1.711,ageGyr:.242,teffK:9940,summary:"Sirius is the brightest star in the night sky, located in the southern constellation of Canis Major. Its name is derived from the Greek word Σείριος. The star is designated α Canis Majoris, Latinized to Alpha Canis Majoris, and abbreviated α CMa or Alpha CMa.",wikipediaUrl:"https://en.wikipedia.org/wiki/Sirius"},{id:"SKAT",appMag:3.28,specType:"A3Vp",evolStage:"Main Sequence",massSolar:3.19,radiusSolar:4.16,ageGyr:.3,teffK:8650,summary:"Delta Aquarii is a binary star system in the constellation of Aquarius. Its identifier is a Bayer designation that is Latinized from δ Aquarii, and abbreviated Delta Aqr or δ Aqr, respectively. This system has the official name Skat, pronounced.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Aquarii"},{id:"SOL",appMag:-26.74,specType:"G2V",evolStage:"Main Sequence",massSolar:1,radiusSolar:1,ageGyr:4.6,teffK:5778,summary:"The Sun is the star located at the centre of the Solar System. It is a massive sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies.",wikipediaUrl:"https://en.wikipedia.org/wiki/Sun"},{id:"SPICA",appMag:.97,specType:"B1III-IV",evolStage:"Giant",massSolar:11.43,radiusSolar:7.47,ageGyr:.0125,teffK:22400,summary:"Spica is the brightest object in the constellation of Virgo and one of the 20 brightest stars in the night sky. It has the Bayer designation α Virginis, which is Latinised to Alpha Virginis and abbreviated Alpha Vir or α Vir. Analysis of its parallax shows that it is located 250±10 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Spica"},{id:"STRUVE_2398",appMag:8.94,specType:"M3V",evolStage:"Main Sequence",massSolar:.33,radiusSolar:.351,ageGyr:6.2,teffK:3433,summary:"Struve 2398 is a binary star system in the northern constellation of Draco. Struve 2398 is star number 2398 in the Struve Double Star Catalog of Russian-German astronomer Friedrich Georg Wilhelm von Struve.",wikipediaUrl:"https://en.wikipedia.org/wiki/Struve_2398"},{id:"TAU_CETI",appMag:3.5,specType:"G8V",evolStage:"Main Sequence",massSolar:.783,radiusSolar:.793,ageGyr:5.8,teffK:5344,summary:"Tau Ceti is a single star in the constellation Cetus. Its name is a Bayer designation that is Latinized from τ Ceti, and abbreviated Tau Cet or τ Cet. Spectrally, this star is similar to the Sun, although it has only about 78% of the Sun's mass.",wikipediaUrl:"https://en.wikipedia.org/wiki/Tau_Ceti"},{id:"TAYGETA",appMag:4.3,specType:"B6IV",evolStage:"Subgiant",massSolar:4.41,radiusSolar:4.36,ageGyr:.00441,teffK:13696,summary:"Taygeta is a double star in the constellation of Taurus and a member of the Pleiades open star cluster (M45).",wikipediaUrl:"https://en.wikipedia.org/wiki/Taygeta"},{id:"TEEGARDEN_S_STAR",appMag:15.14,specType:"M7V",evolStage:"Main Sequence",massSolar:.097,radiusSolar:.107,ageGyr:8,teffK:2904,summary:"Teegarden's Star is an M-type red dwarf star in the constellation Aries, 12.5 light-years from the Solar System. Although it is near Earth it is a dim magnitude 15 and can only be seen through large telescopes. This star was found to have a very large proper motion of about 5 arcseconds per year.",wikipediaUrl:"https://en.wikipedia.org/wiki/Teegarden's_Star"},{id:"THUBAN",appMag:3.68,specType:"A0III",evolStage:"Giant",massSolar:3.186,radiusSolar:4.932,ageGyr:.28,teffK:10225,summary:"Thuban, with Bayer designation Alpha Draconis or α Draconis, is a binary star system in the northern constellation of Draco. A relatively inconspicuous star in the night sky of the Northern Hemisphere, it is historically significant as having been the north pole star from the 4th to 2nd millennium BC.",wikipediaUrl:"https://en.wikipedia.org/wiki/Thuban"},{id:"TOI_700",appMag:13.08,specType:"M2V",evolStage:"Main Sequence",massSolar:.416,radiusSolar:.42,ageGyr:1.5,teffK:3480,summary:"TOI-700 is a red dwarf 101.4 light-years away from Earth located in the Dorado constellation that hosts TOI-700 d, the first Earth-sized exoplanet in the habitable zone discovered by the Transiting Exoplanet Survey Satellite (TESS).",wikipediaUrl:"https://en.wikipedia.org/wiki/TOI-700"},{id:"TRAPPIST_1",appMag:18.8,specType:"M8V",evolStage:"Main Sequence",massSolar:.0898,radiusSolar:.1192,ageGyr:7.6,teffK:2566,summary:"TRAPPIST-1 is a red dwarf star with seven known planets. It lies in the constellation Aquarius approximately 40.66 light-years (12.47 pc) away from Earth. An ultra-cool dwarf, it has a surface temperature of about 2,566 K. Its radius is slightly larger than Jupiter's and it has a mass of about 9% of the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/TRAPPIST-1"},{id:"UPSILON_ANDROMEDAE",appMag:4.1,specType:"F9V",evolStage:"Main Sequence",massSolar:1.23,radiusSolar:1.57,ageGyr:4.02,teffK:6614,summary:"Upsilon Andromedae is a binary star located 44 light-years from Earth in the constellation of Andromeda. The system consists of an F-type main-sequence star and a smaller red dwarf.",wikipediaUrl:"https://en.wikipedia.org/wiki/Upsilon_Andromedae"},{id:"VEGA",appMag:.03,specType:"A0V",evolStage:"Main Sequence",massSolar:2.135,radiusSolar:2.362,ageGyr:.455,teffK:9602,summary:"Vega is the brightest star in the northern constellation of Lyra. It has the Bayer designation α Lyrae, which is Latinised to Alpha Lyrae and abbreviated Alpha Lyr or α Lyr.",wikipediaUrl:"https://en.wikipedia.org/wiki/Vega"},{id:"VINDEMIATRIX",appMag:2.79,specType:"G8III-IIIb",evolStage:"Giant",massSolar:2.72,radiusSolar:11.98,ageGyr:.562,teffK:5020,summary:"Epsilon Virginis, formally named Vindemiatrix, is a star in the zodiac constellation of Virgo. The apparent visual magnitude of this star is +2.8, making it the third-brightest member of Virgo.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Virginis"},{id:"WASAT",appMag:3.53,specType:"F2VkF0mF0",evolStage:"Main Sequence",massSolar:1.57,radiusSolar:2.06,ageGyr:1.6,teffK:6900,summary:"Delta Geminorum, formally named Wasat, is a binary star system in the constellation of Gemini.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Geminorum"},{id:"WISE_0855_0714",appMag:26.54,specType:"Y4V",evolStage:"Brown Dwarf",massSolar:.00382,radiusSolar:.107,ageGyr:3.15,teffK:276,summary:"WISE 0855−0714 is a brown dwarf of spectral class Y4, located 7.4 light-years from the Sun in the constellation Hydra. It is the fourth-closest stellar or substellar system to the Sun and was discovered by Kevin Luhman in 2013 using data from the Wide-field Infrared Survey Explorer (WISE).",wikipediaUrl:"https://en.wikipedia.org/wiki/WISE_0855%E2%88%920714"},{id:"WOLF_1061",appMag:10.072,specType:"M3V",evolStage:"Main Sequence",massSolar:.304,radiusSolar:.319,teffK:3307,summary:"Wolf 1061 is an M-class red dwarf star located about 14.1 light-years away in the constellation Ophiuchus. It is the 36th-closest-known star system to the Sun and has a relatively high proper motion of 1.2 seconds of arc per year. Wolf 1061 does not have any unusual spectroscopic features.",wikipediaUrl:"https://en.wikipedia.org/wiki/Wolf_1061"},{id:"WOLF_359",appMag:13.54,specType:"M6.5V",evolStage:"Main Sequence",massSolar:.11,radiusSolar:.144,ageGyr:.25,teffK:2749,summary:"Wolf 359 is a red dwarf star located in the constellation Leo, near the ecliptic. At a distance of 7.86 light-years from Earth, it has an apparent magnitude of 13.54 and can only be seen with a large telescope.",wikipediaUrl:"https://en.wikipedia.org/wiki/Wolf_359"},{id:"ZAURAK",appMag:2.94,specType:"M0III-IIIb",evolStage:"Giant",massSolar:1.55,radiusSolar:58.7,teffK:3779,summary:"Gamma Eridani, formally named Zaurak, is a variable star in the constellation of Eridanus. It is visible to the naked eye with an apparent visual magnitude that varies around 2.9, and lies at a distance of about 203 light years from the Sun, as determined by the Hipparcos astrometry satellite.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Eridani"},{id:"ZOSMA",appMag:2.53,specType:"A5IV(n)",evolStage:"Subgiant",massSolar:2.2,radiusSolar:2.14,ageGyr:.6,teffK:8296,summary:"Delta Leonis, also named Zosma, is a star in the zodiac constellation of Leo. Based upon parallax measurements, it lies at a distance of about 58.4 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Leonis"}],Y5=new Map(q5.map(i=>[i.id,i]));function j5(i){return Y5.get(i)??{id:i}}function $5(i){const e=Math.min(4e4,Math.max(1500,i))/100;let t,n,a;e<=66?(t=255,n=99.4708025861*Math.log(e)-161.1195681661):(t=329.698727446*Math.pow(e-60,-.1332047592),n=288.1221695283*Math.pow(e-60,-.0755148492)),e>=66?a=255:e<=19?a=0:a=138.5177312231*Math.log(e-10)-305.0447927307;const s=r=>Math.min(255,Math.max(0,r))/255;return[s(t),s(n),s(a)]}const Z5={O:3e4,B:15e3,A:8500,F:6500,G:5600,K:4200,M:3200,L:1800,T:1300,Y:600};function i1(i){if(!i)return;const e=i.trim().toUpperCase().match(/[OBAFGKMLTY]/);return e?Z5[e[0]]:void 0}const J5={"brown dwarf":1.25,"white dwarf":1.4,subdwarf:1.55,"main sequence":1.8,subgiant:2.2,giant:2.6,"bright giant":2.9,supergiant:3.15,"red supergiant":3.15},Q5=1.8,e6=.95;function t6(i){const e=i&&J5[i.toLowerCase()]||Q5,t=e+2*e6;return{canvasEm:t,discRadius:e/t}}function i6(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)>>>0;return e%1e3/1e3}var n6=yt('<div class="star-focus-name svelte-1mvj1zy"> </div>'),a6=yt('<div class="star-focus svelte-1mvj1zy"><button type="button" class="star-focus-scrim svelte-1mvj1zy" aria-label="Close enlarged star view"></button> <div class="star-focus-stage svelte-1mvj1zy" role="dialog" aria-modal="true"><canvas class="star-focus-canvas svelte-1mvj1zy" aria-hidden="true"></canvas> <!></div> <button type="button" class="star-focus-close svelte-1mvj1zy" aria-label="Close">✕</button></div>'),s6=yt('<button type="button" class="star-badge-btn svelte-1mvj1zy" title="Enlarge"><canvas class="star-badge svelte-1mvj1zy" aria-hidden="true"></canvas></button> <!>',1);function r6(i,e){Dr(e,!0);let t,n;const a=Jt(()=>$5(e.teffK??i1(e.specType)??5800)),s=Jt(()=>t6(e.evolStage)),r=Jt(()=>i6(`${e.specType??""}|${e.evolStage??""}|${e.teffK??""}`));let o=At(!1),l=At(void 0);function c(y){return document.body.appendChild(y),{destroy:()=>{var M;return(M=y.parentNode)==null?void 0:M.removeChild(y)}}}const u=()=>Oe(o,!0),d=()=>Oe(o,!1),p=`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position.xy, 0.0, 1.0);
		}
	`,f=`
		precision highp float;
		varying vec2 vUv;
		uniform float uTime;
		uniform vec3  uColor;
		uniform float uDiscRadius;
		uniform float uSeed;
		// Overall exposure. 1.0 for the tiny badge (reads as a bright dot); the
		// full-screen focus view dims it so the disc no longer clips to flat white
		// and the granulation / sunspots / flares stay legible under the glow.
		uniform float uExposure;
		// Corona/bloom boost. 1.0 = badge (unchanged); the focus view raises it so
		// the glow widens + brightens into a real bloom — done in-shader so it
		// composites with straight alpha (an EffectComposer bloom blew an opaque
		// black box over the transparent scrim). See [[Star focus view]].
		uniform float uGlow;

		// Ashima 3D simplex noise (webgl-noise, MIT).
		vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
		vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
		vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
		vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
		float snoise(vec3 v){
			const vec2 C = vec2(1.0/6.0, 1.0/3.0);
			const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
			vec3 i  = floor(v + dot(v, C.yyy));
			vec3 x0 = v - i + dot(i, C.xxx);
			vec3 g = step(x0.yzx, x0.xyz);
			vec3 l = 1.0 - g;
			vec3 i1 = min(g.xyz, l.zxy);
			vec3 i2 = max(g.xyz, l.zxy);
			vec3 x1 = x0 - i1 + C.xxx;
			vec3 x2 = x0 - i2 + C.yyy;
			vec3 x3 = x0 - D.yyy;
			i = mod289(i);
			vec4 p = permute( permute( permute(
					 i.z + vec4(0.0, i1.z, i2.z, 1.0))
				   + i.y + vec4(0.0, i1.y, i2.y, 1.0))
				   + i.x + vec4(0.0, i1.x, i2.x, 1.0));
			float n_ = 0.142857142857;
			vec3 ns = n_ * D.wyz - D.xzx;
			vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
			vec4 x_ = floor(j * ns.z);
			vec4 y_ = floor(j - 7.0 * x_);
			vec4 x = x_ * ns.x + ns.yyyy;
			vec4 y = y_ * ns.x + ns.yyyy;
			vec4 h = 1.0 - abs(x) - abs(y);
			vec4 b0 = vec4( x.xy, y.xy );
			vec4 b1 = vec4( x.zw, y.zw );
			vec4 s0 = floor(b0)*2.0 + 1.0;
			vec4 s1 = floor(b1)*2.0 + 1.0;
			vec4 sh = -step(h, vec4(0.0));
			vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
			vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
			vec3 p0 = vec3(a0.xy, h.x);
			vec3 p1 = vec3(a0.zw, h.y);
			vec3 p2 = vec3(a1.xy, h.z);
			vec3 p3 = vec3(a1.zw, h.w);
			vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
			p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
			vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
			m = m * m;
			return 42.0 * dot( m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)) );
		}
		float fbm(vec3 p){
			float v = 0.0, a = 0.5;
			for (int i = 0; i < 5; i++) { v += a * snoise(p); p *= 2.02; a *= 0.5; }
			return v;
		}

		vec3 saturate3(vec3 c, float amt){
			float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
			return clamp(mix(vec3(l), c, amt), 0.0, 1.0);
		}
		float hash11(float n){ return fract(sin(n * 127.1) * 43758.5453); }

		// One Ω loop: a thin strand-textured band (a circle cutting the limb at two
		// footpoints) + a footpoint glow + optional coronal rain. openAmt empties
		// the apex (the loop opening / draining at the top); rainAmt fades in the
		// clumps sliding down the legs and the plasma pooling at the feet.
		float loopShape(vec2 p, float baseR, float room, vec2 dir, float lr,
				float openAmt, float rainAmt, float ph, float ts, float t){
			if (lr < 0.0006) return 0.0;
			vec2 perp = vec2(-dir.y, dir.x);
			vec2 C = dir * (baseR + lr * 0.4);
			vec2 dd = p - C;
			float dC = length(dd);
			vec2 nrm = dd / max(dC, 1e-4);
			float phi = atan(dot(nrm, perp), dot(nrm, dir)); // 0 apex, ±toward feet
			float thF = 1.98; // foot angle from apex (circle meets the limb)
			float band = exp(-pow((dC - lr) / (lr * 0.34), 2.0));
			// Clip to the ARCH above the footpoints: past ±thF the circle dips back
			// below the surface into the star, and drawing it there closes the loop
			// into a full RING. Fade the band out at the feet so only the Ω over the
			// top survives — an arch, not a ring.
			band *= smoothstep(thF + 0.12, thF - 0.10, abs(phi));
			float strand = 0.5 + 0.5 * snoise(vec3(phi * 3.0, lr * 9.0, ts * 3.0 + t * 0.5));
			band *= mix(0.4, 1.0, strand);
			band *= 1.0 - 0.75 * openAmt * exp(-pow(phi / 0.55, 2.0)); // apex empties
			float rain = 0.0;
			for (int m = 0; m < 2; m++){
				float fm = float(m);
				float side = mod(fm, 2.0) < 0.5 ? 1.0 : -1.0;
				float rel = hash11(fm * 5.1 + ts * 2.0) * 0.28;
				float tt = clamp((ph - 0.5 - rel) / 0.45, 0.0, 1.0);
				float clumpPhi = side * mix(0.12, 1.95, tt * tt); // gravity-accelerated
				rain += exp(-pow((phi - clumpPhi) / 0.14, 2.0)) * (1.0 - tt);
			}
			vec2 f1 = C + lr * (cos(thF) * dir + sin(thF) * perp);
			vec2 f2 = C + lr * (cos(thF) * dir - sin(thF) * perp);
			float foot = exp(-pow(length(p - f1) / (room * 0.09), 2.0))
					   + exp(-pow(length(p - f2) / (room * 0.09), 2.0));
			return band * (1.0 + 2.5 * rain * rainAmt) + foot * rainAmt * 0.7;
		}

		// Coronal loops, modelled on real magnetohydrodynamics: plasma frozen to
		// Ω-shaped magnetic field lines. Each flare EXPANDs (ease-out) -> HANGs near
		// apex -> DRAINs back into the star: the apex empties first, coronal-rain
		// clumps slide down the legs and pool at the feet, the loop collapses. It is
		// confined — nothing escapes, no splitting. Several TRACKS run concurrently
		// (staggered timelines, independent seeds) so multiple loops coexist; size is
		// skewed small via pow(s3, 2.5) so most are small and a full-size one is rare.
		// Time t is pre-slowed by the caller; rot is the (real-time) surface rotation
		// angle, so flares are anchored to the surface and rotate with it.
		float prominences(vec2 p, float discR, float t, float rot, float seed, out float hot){
			hot = 0.0;
			float room = max(1.0 - discR, 0.08);
			const float L = 3.4;            // per-track slot length (s, in slowed time)
			const int TRACKS = 6;
			float acc = 0.0;
			for (int k = 0; k < TRACKS; k++){
				float fk = float(k);
				float tk = t + fk * (L / float(TRACKS));   // stagger the tracks in time
				float ts = seed + fk * 7.13;               // independent per-track seed
				float i0 = floor(tk / L);
				if (hash11(i0 * 2.3 + ts * 13.0) < 0.10) continue; // occasional quiet slot
				float lifeDur = L * 0.6;                   // < L so a track never self-overlaps
				float start = i0 * L + hash11(i0 * 7.1 + ts * 4.0) * (L - lifeDur);
				float ph = (tk - start) / lifeDur;         // 0..1 over this flare
				if (ph < 0.0 || ph > 1.0) continue;

				float s3 = hash11(i0 * 9.1 + ts * 51.7);
				float lr0 = room * mix(0.13, 0.50, pow(s3, 2.5)); // size skewed small
				float grow = 1.0 - pow(1.0 - clamp(ph / 0.5, 0.0, 1.0), 2.0); // ease-out
				float env = smoothstep(0.0, 0.10, ph) * (1.0 - smoothstep(0.88, 1.0, ph));

				// Anchor the flare to a surface longitude/latitude that ROTATES with the
				// star (same rate + direction as the granulation) instead of a fixed
				// screen edge. Orthographic projection of the footpoint: it drifts across
				// the disc and around the limb, foreshortening as it faces the viewer.
				float lon = hash11(i0 * 3.7 + ts * 5.0) * 6.2831 - rot;
				float lat = (hash11(i0 * 8.3 + ts * 2.1) - 0.5) * 1.7;
				float cl = cos(lat);
				vec2 F = vec2(cl * sin(lon), sin(lat));        // footpoint, unit-disc coords
				float fsh = length(F);                          // 0 facing viewer .. 1 at limb
				vec2 dir = fsh > 1e-3 ? F / fsh : vec2(1.0, 0.0); // projected outward normal
				float front = smoothstep(-0.2, 0.12, cos(lon));   // fade around the far side

				// EXPAND (ease-out) -> HANG -> DRAIN back into the star, foreshortened by
				// how edge-on the loop is. Confined — nothing escapes, no splitting.
				float drain = smoothstep(0.5, 0.74, ph);
				float collapse = 1.0 - 0.4 * smoothstep(0.6, 1.0, ph);
				float lr = lr0 * grow * collapse * fsh;
				float inten = loopShape(p, fsh * discR, room, dir, lr, drain, drain, ph, ts, t);

				inten *= env * front * mix(0.6, 1.0, fsh); // dimmer face-on, bright at limb
				acc += inten;
				hot = max(hot, inten);
			}
			return acc;
		}

		void main(){
			vec2 p = (vUv - 0.5) * 2.0;
			float r = length(p);
			float seed = uSeed;

			// --- photosphere: project disc pixels onto a hemisphere ---
			vec2 sp = p / uDiscRadius;
			float mu = sqrt(max(1.0 - dot(sp, sp), 0.0)); // cos(view angle), 0 at limb
			vec3 N = vec3(sp, mu);

			// rotation so granulation + spots drift across the limb (2× speed)
			float ang = uTime * 0.24 + seed * 6.2831;
			float ca = cos(ang), sa = sin(ang);
			vec3 sN = vec3(N.x*ca + N.z*sa, N.y, -N.x*sa + N.z*ca);

			// undulating granulation
			float gran = fbm(sN * 4.5 + vec3(0.0, uTime * 0.06, seed * 10.0));
			float surf = 0.82 + 0.22 * gran;

			// sunspots: cool, low-frequency patches
			float spotF = fbm(sN * 2.1 + vec3(seed * 23.0));
			float spot = smoothstep(0.34, 0.55, spotF);
			surf *= mix(1.0, 0.26, spot);

			// limb darkening
			float limb = 0.32 + 0.68 * pow(clamp(mu, 0.0, 1.0), 0.55);

			// punch up chroma so the spectral hue reads at a glance
			vec3 baseCol = saturate3(uColor, 1.4);
			// white-hot core easing to the star's true colour toward the limb
			vec3 hot = mix(baseCol, vec3(1.0), 0.4 * pow(clamp(mu, 0.0, 1.0), 1.5));
			vec3 discCol = hot * surf * limb;
			discCol += baseCol * pow(clamp(mu, 0.0, 1.0), 7.0) * 0.3; // bright centre
			discCol *= 1.42;

			float disc = smoothstep(uDiscRadius, uDiscRadius - 0.02, r);

			// edge fade so corona + flares never hard-clip at the canvas bound
			float edge = smoothstep(1.0, 0.9, r);
			float room = 1.0 - uDiscRadius; // corona space to the canvas edge (NDC)

			// --- corona / bloom (scaled to the corona room, not the disc) ---
			// uGlow widens the falloff and lifts the intensity together so the
			// focus view reads as a soft bloom while the badge (uGlow=1.0) is
			// byte-for-byte unchanged.
			float gi = 0.5 + 0.5 * uGlow;                       // 1.0 at badge
			float gSpread = room * 0.5 * (0.6 + 0.4 * uGlow);   // room*0.5 at badge
			float falloff = (r - uDiscRadius) / gSpread;
			float glow = exp(-max(falloff, 0.0)) * edge;
			vec3 glowCol = mix(baseCol, vec3(1.0), 0.25) * glow * 0.9 * gi;

			// --- flares: faint limb haze + a single occasional loop prominence ---
			float th = atan(p.y, p.x);
			vec3 ring = vec3(cos(th), sin(th), 0.0);     // seam-free angular coord
			float beyond = r - uDiscRadius;
			float haze = 0.0;
			if (beyond > 0.0) {
				haze = smoothstep((1.0 - uDiscRadius) * 0.12, 0.0, beyond);
				haze *= 0.5 + 0.5 * smoothstep(-0.3, 0.6,
					fbm(ring * 7.0 + vec3(0.0, 0.0, uTime * 0.5) + seed * 9.0));
				haze *= 0.18;
			}
			float promHot;
			// flares 3× slower in lifecycle, but rotate with the surface (uTime*0.24)
			float prom = prominences(p, uDiscRadius, uTime / 3.0, uTime * 0.24, seed, promHot);
			float flame = (haze + prom * 1.5) * edge;
			// leading strands run white-hot; the loop body keeps the star's hue
			float hotMix = smoothstep(0.3, 0.95, promHot);
			vec3 warm = vec3(1.0, 0.9, 0.66);
			vec3 flameCol = mix(mix(baseCol, warm, 0.35), warm, hotMix) * flame * 1.9;

			// --- composite (straight alpha over the dark modal) ---
			vec3 col = discCol * disc;
			col += glowCol * (1.0 - disc);
			col += flameCol; // flares render over the disc too, rotating with the surface
			float alpha = clamp(max(disc, glow * 0.85 * gi + flame), 0.0, 1.0);

			col *= uExposure;
			col = pow(max(col, 0.0), vec3(0.9)); // a touch of punch
			gl_FragColor = vec4(col, alpha);
		}
	`;bl(()=>{let y;try{y=new _l({canvas:t,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch{return}y.setPixelRatio(Math.min(window.devicePixelRatio,2));const M=t.getBoundingClientRect();y.setSize(M.width||38,M.height||38,!1),y.setClearColor(0,0);const L=new yl,A=new Er(-1,1,1,-1,0,1),P=new la(2,2);n=new _t({vertexShader:p,fragmentShader:f,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new I(T(a)[0],T(a)[1],T(a)[2])},uDiscRadius:{value:T(s).discRadius},uSeed:{value:T(r)},uExposure:{value:1},uGlow:{value:1}}});const N=new Bt(P,n);L.add(N);let j=0;const _=performance.now(),b=()=>{n.uniforms.uTime.value=(performance.now()-_)*.001,y.render(L,A),j=requestAnimationFrame(b)};return j=requestAnimationFrame(b),()=>{cancelAnimationFrame(j),P.dispose(),n.dispose(),n=void 0,y.dispose(),y.forceContextLoss()}}),ii(()=>{const y=T(a),M=T(s).discRadius;n&&(n.uniforms.uColor.value.set(y[0],y[1],y[2]),n.uniforms.uDiscRadius.value=M)}),ii(()=>{const y=T(l);if(!y)return;const M=T(a);let L;try{L=new _l({canvas:y,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch{return}L.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.setClearColor(0,0);const A=new yl,P=new Er(-1,1,1,-1,0,1),N=new la(2,2),j=new _t({vertexShader:p,fragmentShader:f,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new I(M[0],M[1],M[2])},uDiscRadius:{value:T(s).discRadius*.92},uSeed:{value:T(r)},uExposure:{value:.62},uGlow:{value:2.2}}});A.add(new Bt(N,j));const _=()=>{const Q=y.getBoundingClientRect();L.setSize(Math.max(1,Math.round(Q.width)),Math.max(1,Math.round(Q.height)),!1)};_(),window.addEventListener("resize",_);const b=Q=>{Q.key==="Escape"&&d()};window.addEventListener("keydown",b);let K=0;const V=performance.now(),X=()=>{j.uniforms.uTime.value=(performance.now()-V)*.001,L.render(A,P),K=requestAnimationFrame(X)};return K=requestAnimationFrame(X),()=>{cancelAnimationFrame(K),window.removeEventListener("resize",_),window.removeEventListener("keydown",b),N.dispose(),j.dispose(),L.dispose(),L.forceContextLoss()}});var g=s6(),v=Dn(g),h=ne(v);Fa(h,y=>t=y,()=>t),J(v);var m=le(v,2);{var S=y=>{var M=a6(),L=ne(M),A=le(L,2),P=ne(A);Fa(P,b=>Oe(l,b),()=>T(l));var N=le(P,2);{var j=b=>{var K=n6(),V=ne(K,!0);J(K),gt(()=>st(V,e.name)),it(b,K)};Ct(N,b=>{e.name&&b(j)})}J(A);var _=le(A,2);J(M),hd(M,b=>c==null?void 0:c(b)),gt(()=>et(A,"aria-label",e.name?`${e.name} — enlarged`:"Enlarged star")),Nt("click",L,d),Nt("click",_,d),Yt(3,M,()=>gi,()=>({duration:280})),it(y,M)};Ct(m,y=>{T(o)&&y(S)})}gt(()=>{et(v,"aria-label",e.name?`Enlarge ${e.name}`:"Enlarge star"),Qn(h,`width:${T(s).canvasEm??""}em; height:${T(s).canvasEm??""}em`)}),Nt("click",v,u),it(i,g),Rr()}Jh(["click"]);const Rh=662607015e-42,Ao=299792458,o6=1380649e-29;function l6(i,e){const t=i*1e-9,n=2*Rh*Ao*Ao/Math.pow(t,5),a=Rh*Ao/(t*o6*e);return n/Math.expm1(a)}const c6=2897771955e-3;function h6(i){const e=c6/i;return[.4*e,4*e]}const n1=380,a1=700,u6=380,d6=10,Zn=[2e-4,8e-4,.0028,.0074,.0175,.0273,.0379,.0468,.06,.091,.139,.208,.323,.503,.71,.862,.954,.99495,.995,.952,.87,.757,.631,.503,.381,.265,.175,.107,.061,.032,.017,.00821,.0041];function p6(i){const e=(i-u6)/d6;if(e<0||e>Zn.length-1)return 0;const t=Math.floor(e);return t>=Zn.length-1?Zn[Zn.length-1]:Zn[t]+(Zn[t+1]-Zn[t])*(e-t)}const Ih=[78,36,116],Lh=[122,18,18];function f6(i){let e=0,t=0,n=0;i<440?(e=-(i-440)/60,n=1):i<490?(t=(i-440)/50,n=1):i<510?(t=1,n=-(i-510)/20):i<580?(e=(i-510)/70,t=1):i<645?(e=1,t=-(i-645)/65):e=1;let a=1;i<420&&(a=.35+.65*((i-380)/40));const s=.8;return[255*Math.pow(e*a,s),255*Math.pow(t*a,s),255*Math.pow(n*a,s)]}const To=350,Uh=410,Po=660,Nh=760,kh=i=>i<0?0:i>1?1:i;function Fh(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}function m6(i){if(i<=To)return Ih;if(i>=Nh)return Lh;const e=f6(Math.min(a1,Math.max(n1,i)));return i<Uh?Fh(Ih,e,kh((i-To)/(Uh-To))):i>Po?Fh(e,Lh,kh((i-Po)/(Nh-Po))):e}function g6(i){const e=i/5,t=Math.pow(10,Math.floor(Math.log10(e))),n=e/t;return(n<1.5?1:n<3?2:n<7?5:10)*t}var v6=yt('<div class="spectrum-chart svelte-nth41w"><div class="spectrum-plot svelte-nth41w" role="img"><canvas aria-hidden="true" class="svelte-nth41w"></canvas></div> <label class="visual-toggle svelte-nth41w" title="Scale the curve to the visible spectrum, weighted by human eye sensitivity (photopic Vλ)"><input type="checkbox" aria-label="Show the eye-perceived (visible) spectrum" class="svelte-nth41w"/> <span class="visual-label svelte-nth41w"><span class="lbl-show svelte-nth41w">Show&nbsp;</span>visible</span></label></div>');function _6(i,e){Dr(e,!0);const t=Jt(()=>e.teffK??i1(e.specType));let n=At(void 0),a=At(!1),s=0,r=0;function o(f,g=0){const v=T(n);if(!v)return;const h=v.getContext("2d");if(!h)return;const m=Math.min(window.devicePixelRatio||1,3),S=v.clientWidth,y=v.clientHeight,M=Math.max(1,Math.round(S*m)),L=Math.max(1,Math.round(y*m));if(v.width=M,v.height=L,h.clearRect(0,0,M,L),!f||!S||!y)return;const A=Math.round(4*m),P=`italic ${Math.round(9*m)}px "JetBrains Mono", monospace`,N=`${Math.round(8*m)}px "JetBrains Mono", monospace`,j="(nm)",_=Math.round(3*m);h.font=P;const b=h.measureText("λ"),K=Math.max(b.width,b.actualBoundingBoxRight||0);h.font=N;const V=h.measureText(j),X=Math.max(V.width,V.actualBoundingBoxRight||0),Q=K+_+X+Math.round(3*m),z=Math.round(3*m),se=Math.round(6*m),W=Math.round(9*m),ge=W+se+A+z+Q,he=Math.round(6*m),Ae=Math.round(15*m),ze=W,Ne=M-ge,C=L-Ae,D=Ne-ze,H=C-he;if(D<=2||H<=1)return;const[$,pe]=h6(f),re=$+(n1-$)*g,oe=pe+(a1-pe)*g,xe=oe-re,ue=D,R=new Float64Array(ue);let He=0;for(let ae=0;ae<ue;ae++){const fe=re+xe*(ae/(ue-1)),ve=l6(fe,f)*(1+g*(p6(fe)-1));R[ae]=ve,ve>He&&(He=ve)}if(He<=0)return;for(let ae=0;ae<ue;ae++){const fe=re+xe*(ae/(ue-1)),ve=R[ae]/He*H,[qe,me,Pe]=m6(fe);h.fillStyle=`rgb(${qe|0},${me|0},${Pe|0})`,h.fillRect(ze+ae,C-ve,1,ve)}h.beginPath();for(let ae=0;ae<ue;ae++){const fe=C-R[ae]/He*H;ae===0?h.moveTo(ze+ae,fe):h.lineTo(ze+ae,fe)}h.strokeStyle="rgba(225,233,240,0.6)",h.lineWidth=Math.max(1,m*.9),h.stroke();const Ke="rgba(168,190,206,0.95)",Ve=Math.max(1,Math.round(m));h.strokeStyle=Ke,h.fillStyle=Ke,h.lineWidth=Ve;const ye=Ne+se;h.beginPath(),h.moveTo(ze,C+.5),h.lineTo(ye,C+.5),h.stroke(),h.beginPath(),h.moveTo(ye,C),h.lineTo(ye-A*1.6,C-A),h.lineTo(ye-A*1.6,C+A),h.closePath(),h.fill();const $e=ye+A+z;h.textBaseline="middle",h.textAlign="left",h.fillStyle="rgba(214,228,240,0.98)",h.font=P,h.fillText("λ",$e,C),h.font=N,h.fillStyle="rgba(176,196,212,0.95)",h.fillText(j,$e+K+_,C);const be=he-Math.round(3*m);h.beginPath(),h.moveTo(ze+.5,C),h.lineTo(ze+.5,be),h.stroke(),h.beginPath(),h.moveTo(ze,be),h.lineTo(ze-A,be+A*1.6),h.lineTo(ze+A,be+A*1.6),h.closePath(),h.fill(),h.font=`${Math.round(8*m)}px "JetBrains Mono", monospace`,h.textBaseline="top",h.textAlign="center";const w=g6(xe),x=ae=>ze+(ae-re)/xe*D,G=w/xe*D,ee=h.measureText(String(Math.round(oe))).width,te=Math.max(1,Math.ceil((ee+6*m)/G));let Z=0;for(let ae=Math.ceil(re/w)*w;ae<=oe;ae+=w,Z++){const fe=Math.round(x(ae));if(fe>ye-A)break;if(h.fillStyle="rgba(150,172,190,0.9)",h.fillRect(fe,C+Ve,Ve,Math.round(3*m)),Z%te!==0)continue;const ve=ee/2,qe=Math.min(Math.max(fe,ze+ve),ye-A-ve);h.fillStyle="rgba(208,224,238,0.98)",h.fillText(String(Math.round(ae)),qe,C+Math.round(4*m))}}const l=f=>f<.5?2*f*f:1-Math.pow(-2*f+2,2)/2;function c(f){cancelAnimationFrame(r);const g=s,v=620,h=performance.now(),m=S=>{const y=Math.min(1,(S-h)/v);s=g+(f-g)*l(y),o(T(t),s),y<1&&(r=requestAnimationFrame(m))};r=requestAnimationFrame(m)}bl(()=>{let f=0;const g=()=>{cancelAnimationFrame(f),f=requestAnimationFrame(()=>o(T(t),s))},v=new ResizeObserver(g);return v.observe(T(n)),g(),()=>{cancelAnimationFrame(f),cancelAnimationFrame(r),v.disconnect()}}),ii(()=>{const f=T(t);requestAnimationFrame(()=>o(f,s))}),ii(()=>{c(T(a)?1:0)});var u=zh(),d=Dn(u);{var p=f=>{var g=v6(),v=ne(g),h=ne(v);Fa(h,y=>Oe(n,y),()=>T(n)),J(v);var m=le(v,2),S=ne(m);mi(S),bi(2),J(m),J(g),gt(y=>et(v,"aria-label",y),[()=>`Idealised black-body emission spectrum for an effective temperature of about ${Math.round(T(t))} kelvin, plotted against wavelength in nanometres${T(a)?", scaled to the visible band and weighted by human eye sensitivity":""}`]),Gi(S,()=>T(a),y=>Oe(a,y)),it(f,g)};Ct(d,f=>{T(t)&&f(p)})}it(i,u),Rr()}j1();function Oh(i,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?i.style.fontSize=e.replace("x","em"):i.style.fontSize=""}function y6(i,e,t,n,a,s=1,r="",o=""){let l=1,c=1;a&&(a=="horizontal"?l=-1:a=="vertical"?c=-1:l=c=-1),typeof i=="string"&&(i=parseFloat(i)),typeof e=="string"&&(e=parseFloat(e)),typeof t=="string"&&(t=parseFloat(t));const u=`${e*s}${r}`,d=`${t*s}${r}`;let p=`translate(${u},${d}) scale(${l*i},${c*i})`;return n&&(p+=` rotate(${n}${o})`),p}var S6=Un('<title class="svelte-q6zoq1"> </title>'),x6=Un('<path class="svelte-q6zoq1"></path>'),M6=Un('<path class="svelte-q6zoq1"></path><path class="svelte-q6zoq1"></path>',1),b6=Un('<svg role="img" xmlns="http://www.w3.org/2000/svg"><!><g class="svelte-q6zoq1"><g class="svelte-q6zoq1"><!></g></g></svg>');function Pa(i,e){Dr(e,!1);const t=ur(),n=ur();let a=Ut(e,"class",24,()=>{}),s=Ut(e,"id",24,()=>{}),r=Ut(e,"style",24,()=>{}),o=Ut(e,"icon",8),l=Ut(e,"title",24,()=>{}),c=Ut(e,"size",24,()=>{}),u=Ut(e,"color",24,()=>{}),d=Ut(e,"fw",8,!1),p=Ut(e,"pull",24,()=>{}),f=Ut(e,"scale",8,1),g=Ut(e,"translateX",8,0),v=Ut(e,"translateY",8,0),h=Ut(e,"rotate",24,()=>{}),m=Ut(e,"flip",24,()=>{}),S=Ut(e,"spin",8,!1),y=Ut(e,"pulse",8,!1),M=Ut(e,"primaryColor",8,""),L=Ut(e,"secondaryColor",8,""),A=Ut(e,"primaryOpacity",8,1),P=Ut(e,"secondaryOpacity",8,.4),N=Ut(e,"swapOpacity",8,!1),j=ur();Vr(()=>(T(j),Tn(c()),Oh),()=>{T(j)&&c()&&Oh(T(j),c())}),Vr(()=>Tn(o()),()=>{Oe(t,o()&&o().icon||[0,0,"",[],""])}),Vr(()=>(Tn(f()),Tn(g()),Tn(v()),Tn(h()),Tn(m())),()=>{Oe(n,y6(f(),g(),v(),h(),m(),512))}),$1(),yd();var _=zh(),b=Dn(_);{var K=V=>{var X=b6();let Q;var z=ne(X);{var se=Ne=>{var C=S6(),D=ne(C,!0);J(C),gt(()=>st(D,l())),it(Ne,C)};Ct(z,Ne=>{l()&&Ne(se)})}var W=le(z),ge=ne(W),he=ne(ge);{var Ae=Ne=>{var C=x6();gt(()=>{et(C,"d",(T(t),kt(()=>T(t)[4]))),et(C,"fill",u()||M()||"currentColor"),et(C,"transform",`translate(${T(t),kt(()=>T(t)[0]/-2)??""} ${T(t),kt(()=>T(t)[1]/-2)??""})`)}),it(Ne,C)},ze=Ne=>{var C=M6(),D=Dn(C),H=le(D);gt(()=>{et(D,"d",(T(t),kt(()=>T(t)[4][0]))),et(D,"fill",L()||u()||"currentColor"),et(D,"fill-opacity",N()!=!1?A():P()),et(D,"transform",`translate(${T(t),kt(()=>T(t)[0]/-2)??""} ${T(t),kt(()=>T(t)[1]/-2)??""})`),et(H,"d",(T(t),kt(()=>T(t)[4][1]))),et(H,"fill",M()||u()||"currentColor"),et(H,"fill-opacity",N()!=!1?P():A()),et(H,"transform",`translate(${T(t),kt(()=>T(t)[0]/-2)??""} ${T(t),kt(()=>T(t)[1]/-2)??""})`)}),it(Ne,C)};Ct(he,Ne=>{T(t),kt(()=>typeof T(t)[4]=="string")?Ne(Ae):Ne(ze,-1)})}J(ge),J(W),J(X),Fa(X,Ne=>Oe(j,Ne),()=>T(j)),gt(()=>{et(X,"id",s()),Q=ln(X,0,`svelte-fa svelte-fa-base ${a()??""}`,"svelte-q6zoq1",Q,{pulse:y(),"svelte-fa-size-lg":c()==="lg","svelte-fa-size-sm":c()==="sm","svelte-fa-size-xs":c()==="xs","svelte-fa-fw":d(),"svelte-fa-pull-left":p()==="left","svelte-fa-pull-right":p()==="right",spin:S()}),Qn(X,r()),et(X,"viewBox",`0 0 ${T(t),kt(()=>T(t)[0])??""} ${T(t),kt(()=>T(t)[1])??""}`),et(X,"aria-hidden",l()===void 0),et(W,"transform",`translate(${T(t),kt(()=>T(t)[0]/2)??""} ${T(t),kt(()=>T(t)[1]/2)??""})`),et(W,"transform-origin",`${T(t),kt(()=>T(t)[0]/4)??""} 0`),et(ge,"transform",T(n))}),it(V,X)};Ct(b,V=>{T(t),kt(()=>T(t)[4])&&V(K)})}it(i,_),Rr()}/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var E6={prefix:"fas",iconName:"share-nodes",icon:[512,512,["share-alt"],"f1e0","M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z"]},w6={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0-10.4-31.2C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},Bh={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]};/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var A6={prefix:"far",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zm230.7 89.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L211.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"]},T6={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]};/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var P6={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},C6=yt('<link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-1uha8ag"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" class="svelte-1uha8ag"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400;500;700&amp;display=swap" rel="stylesheet" class="svelte-1uha8ag"/>',1),D6=Un('<g><circle class="ring svelte-1uha8ag" r="5"></circle><polyline class="svelte-1uha8ag"></polyline></g>'),R6=yt('<div><span class="name svelte-1uha8ag"> </span></div>'),I6=Un('<line class="svelte-1uha8ag"></line>'),L6=yt('<div class="travel-tick-label svelte-1uha8ag"> </div>'),U6=yt('<svg class="travel-ticks svelte-1uha8ag" aria-hidden="true"></svg> <div class="travel-tick-labels svelte-1uha8ag"></div>',1),N6=yt('<li role="option"> </li>'),k6=yt('<ul class="search-results svelte-1uha8ag" role="listbox" aria-label="Search results"></ul>'),F6=yt('<div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Class</span><b class="mono-tight svelte-1uha8ag"> </b></div>'),O6=yt('<div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Mass</span><b class="svelte-1uha8ag"> </b></div>'),B6=yt('<div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Radius</span><b class="svelte-1uha8ag"> </b></div>'),z6=yt('<div class="rule-thin svelte-1uha8ag" aria-hidden="true"></div> <!> <!> <!> <button class="info-btn svelte-1uha8ag" type="button"><span class="ico svelte-1uha8ag" aria-hidden="true">i</span>Star Info</button>',1),G6=yt('<button type="button"> </button>'),H6=yt('<div class="travel-readout svelte-1uha8ag"><div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Distance</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Ship Time</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Earth Time</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Peak v</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Fuel Mass</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Energy</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-foot svelte-1uha8ag">Payload 1,000 t · photonic drive (vₑ = c)</div></div> <div class="overlay-slider svelte-1uha8ag"><div class="slider-head svelte-1uha8ag"><span class="slider-label svelte-1uha8ag">Constant Accel</span> <span class="slider-value svelte-1uha8ag"> </span></div> <input type="range" min="0.1" max="5" step="0.1" aria-label="Constant proper acceleration in g" class="svelte-1uha8ag"/> <div class="slider-ticks svelte-1uha8ag" aria-hidden="true"><span class="tick tick-major tick-start svelte-1uha8ag" style="--p: 0">0.1</span> <span class="tick tick-minor svelte-1uha8ag" style="--p: 0.0816"></span> <span class="tick tick-major svelte-1uha8ag" style="--p: 0.1837">1</span> <span class="tick tick-minor svelte-1uha8ag" style="--p: 0.2857"></span> <span class="tick tick-major svelte-1uha8ag" style="--p: 0.3878">2</span> <span class="tick tick-minor svelte-1uha8ag" style="--p: 0.4898"></span> <span class="tick tick-major svelte-1uha8ag" style="--p: 0.5918">3</span> <span class="tick tick-minor svelte-1uha8ag" style="--p: 0.6939"></span> <span class="tick tick-major svelte-1uha8ag" style="--p: 0.7959">4</span> <span class="tick tick-minor svelte-1uha8ag" style="--p: 0.8980"></span> <span class="tick tick-major tick-end svelte-1uha8ag" style="--p: 1">5</span></div></div> <div class="accel-buttons svelte-1uha8ag" role="group" aria-label="Constant proper acceleration"></div>',1),V6=Un('<line y1="4" y2="10" class="minor svelte-1uha8ag"></line>'),W6=Un('<line y1="1" y2="13" class="major svelte-1uha8ag"></line>'),K6=yt('<b class="svelte-1uha8ag"> </b>'),X6=yt('<b class="svelte-1uha8ag"> </b>'),q6=yt('<aside class="hud scale-legend svelte-1uha8ag" aria-label="Grid scale legend"><div class="scale-title svelte-1uha8ag">Grid Scale</div> <svg class="scale-bar svelte-1uha8ag" preserveAspectRatio="none" aria-hidden="true"><defs class="svelte-1uha8ag"><clipPath id="scaleBarClip" class="svelte-1uha8ag"><rect x="0" y="0" height="14" class="svelte-1uha8ag"></rect></clipPath></defs><g clip-path="url(#scaleBarClip)" class="svelte-1uha8ag"><line x1="0" y1="7" y2="7" class="baseline svelte-1uha8ag"></line><g class="minor-ticks svelte-1uha8ag"></g><g class="major-caps svelte-1uha8ag"></g></g></svg> <div class="scale-rows svelte-1uha8ag"><div class="scale-row major svelte-1uha8ag"><span class="dot svelte-1uha8ag"></span><span class="lbl svelte-1uha8ag">Major</span> <!></div> <div class="scale-row minor svelte-1uha8ag"><span class="dot minor-dot svelte-1uha8ag"></span> <span class="lbl svelte-1uha8ag">Minor</span> <!></div></div></aside>'),Y6=yt('<div class="overlay svelte-1uha8ag"><div class="boot svelte-1uha8ag"><div class="boot-label svelte-1uha8ag">Initialising Stellar Catalogue</div> <div class="boot-bar svelte-1uha8ag"><span class="svelte-1uha8ag"></span></div> <div class="boot-sub svelte-1uha8ag">Gaia DR3 · All-Sky Astrometry</div></div></div>'),j6=yt('<div class="overlay svelte-1uha8ag"><div class="boot err svelte-1uha8ag"><div class="boot-label svelte-1uha8ag">Catalogue Load Failed</div> <div class="boot-sub svelte-1uha8ag"> </div></div></div>'),$6=yt(`<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="About this atlas" tabindex="-1"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Atlas</div> <h2 class="about-title svelte-1uha8ag">About GAIA Atlas</h2> <div class="about-rule svelte-1uha8ag"></div> <p class="about-body svelte-1uha8ag">Welcome to GAIA Atlas! This is an expansion of the original recreation of the <a href="https://valhovey.github.io/gaia-mary/" target="_blank" class="svelte-1uha8ag">Project Hail Mary star map</a> built using the <a href="https://www.cosmos.esa.int/web/gaia/dr3" target="_blank" class="svelte-1uha8ag">GAIA DR3 dataset</a> which contains 1.8 billion stars as well as their parameters (location, distance, spectra). Exoplanets are sourced from NASA's <a href="https://science.nasa.gov/exoplanets/exoplanet-catalog/" target="_blank" class="svelte-1uha8ag">exoplanet catalog</a>. Where GAIA was missing information, stellar data was supplemented with <a href="https://simbad.u-strasbg.fr/simbad/" target="_blank" class="svelte-1uha8ag">SIMBAD</a> information. All planet locations in the solar system are accurate on page load, and Pluto is included because I love them. Constellations are using the <a href="https://iauarchive.eso.org/public/themes/constellations/" target="_blank" class="svelte-1uha8ag">IAU standard sky culture</a>. The skybox is rendered from the full GAIA dataset. Also, for relativistic rocket calculations I used the equations in <a href="https://math.ucr.edu/home/baez/physics/Relativity/SR/Rocket/rocket.html" target="_blank" class="svelte-1uha8ag">John Baez' Relativistic Rocket FAQ</a>. For much more detailed calculations use <a href="https://www.overvieweffekt.com/tools/relativistic-travel-calculator" target="_blank" class="svelte-1uha8ag">Overview Effekt's wonderful calculator</a>. I hope you enjoy your explorations!</p> <p class="about-body svelte-1uha8ag"></p> <p class="about-sign svelte-1uha8ag">— Val <span class="about-socials svelte-1uha8ag"><a href="https://valhovey.github.io" target="_blank" rel="noreferrer" title="Personal site" aria-label="Personal site" class="svelte-1uha8ag"><!></a> <a href="https://www.instagram.com/valence.photography" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram" class="svelte-1uha8ag"><!></a> <a href="https://app.astrobin.com/u/valence" target="_blank" rel="noreferrer" title="AstroBin" aria-label="AstroBin" class="svelte-1uha8ag"><!></a></span></p></div></div>`),Z6=yt('<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about controls svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="Controls" tabindex="-1"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Controls</div> <h2 class="about-title svelte-1uha8ag">Navigation</h2> <div class="about-rule svelte-1uha8ag"></div> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Move</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><kbd class="svelte-1uha8ag">W</kbd><kbd class="svelte-1uha8ag">A</kbd><kbd class="svelte-1uha8ag">S</kbd><kbd class="svelte-1uha8ag">D</kbd></span> <span class="desc svelte-1uha8ag">Pan along the ecliptic plane</span> <span class="keys svelte-1uha8ag"><kbd class="svelte-1uha8ag">↑</kbd><kbd class="svelte-1uha8ag">←</kbd><kbd class="svelte-1uha8ag">↓</kbd><kbd class="svelte-1uha8ag">→</kbd></span> <span class="desc svelte-1uha8ag">Arrow-key alternative — same pan</span> <span class="keys svelte-1uha8ag"><kbd class="kbd-wide svelte-1uha8ag">Space</kbd><kbd class="kbd-wide svelte-1uha8ag">Shift</kbd></span> <span class="desc svelte-1uha8ag">Rise · descend (out of the ecliptic plane)</span></div></section> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Look</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Drag</span></span> <span class="desc svelte-1uha8ag">Orbit camera around the target</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Scroll</span></span> <span class="desc svelte-1uha8ag">Zoom in · out</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Mid-drag</span></span> <span class="desc svelte-1uha8ag">Pan (mouse only)</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Pinch</span></span> <span class="desc svelte-1uha8ag">Zoom (touch)</span></div></section> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Select</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Tap / Click</span></span> <span class="desc svelte-1uha8ag">Focus a star or planet</span> <span class="keys svelte-1uha8ag"><kbd class="kbd-wide svelte-1uha8ag">Esc</kbd></span> <span class="desc svelte-1uha8ag">Close panel · dismiss search</span></div></section></div></div>'),J6=yt('<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about share svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="Share view" tabindex="-1"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Transmission</div> <h2 class="about-title svelte-1uha8ag">Share View</h2> <div class="about-rule svelte-1uha8ag"></div> <p class="share-lede svelte-1uha8ag">Choose which pieces of your current view to include in the link.</p> <div class="share-grid svelte-1uha8ag"><label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">System</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Camera Location</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Constellations</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Grid</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Accurate Orbit Scale</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Travel Mode</span> <em class="share-hint svelte-1uha8ag"> </em></label></div> <div class="share-url svelte-1uha8ag"><input type="text" readonly="" aria-label="Share URL" class="svelte-1uha8ag"/> <button type="button"> </button></div></div></div>'),Q6=yt('<a target="_blank" rel="noreferrer" class="svelte-1uha8ag">Wikipedia</a>'),e8=yt('<p class="info-summary svelte-1uha8ag"> </p> <p class="info-attribution svelte-1uha8ag">Excerpt from <!> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer" class="svelte-1uha8ag">CC BY-SA 4.0</a></p>',1),t8=yt('<div class="info-actions svelte-1uha8ag"><a class="info-wiki svelte-1uha8ag" target="_blank" rel="noreferrer"><span class="ico svelte-1uha8ag" aria-hidden="true">W</span>Full article on Wikipedia <span class="ext svelte-1uha8ag" aria-hidden="true">↗</span></a></div>'),i8=yt('<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about system-info svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="Star information" tabindex="-1"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="system-info-head svelte-1uha8ag"><div class="sih-top svelte-1uha8ag"><!> <h2 class="about-title system-info-title svelte-1uha8ag"> </h2></div> <!></div> <div class="about-rule svelte-1uha8ag"></div> <div class="info-grid svelte-1uha8ag" aria-label="Stellar parameters"><div class="info-cell wide svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Evolution</span> <b class="svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">App. Mag</span> <b class="svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Class</span> <b class="mono-tight svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Mass</span> <b class="svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Radius</span> <b class="svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Temp</span> <b class="svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Age</span> <b class="svelte-1uha8ag"> </b></div></div> <!> <!></div></div>'),n8=yt('<div><canvas class="svelte-1uha8ag"></canvas> <div class="scrim svelte-1uha8ag"></div> <!> <svg class="leaders svelte-1uha8ag" aria-hidden="true"></svg> <div class="labels svelte-1uha8ag"></div> <!> <div class="frame svelte-1uha8ag"><span class="corner tl svelte-1uha8ag"></span> <span class="corner tr svelte-1uha8ag"></span> <span class="corner bl svelte-1uha8ag"></span> <span class="corner br svelte-1uha8ag"></span></div> <header class="hud tl-panel svelte-1uha8ag"><div class="title svelte-1uha8ag">GAIA ATLAS</div> <div class="rule svelte-1uha8ag"></div> <div class="subtitle svelte-1uha8ag">Local Stellar Map</div> <div class="tl-btn-row svelte-1uha8ag"><button class="about-btn svelte-1uha8ag"><span class="ico svelte-1uha8ag">i</span>About</button> <button class="about-btn controls-btn svelte-1uha8ag" aria-label="Show keyboard and tap controls"><span class="ico kb svelte-1uha8ag" aria-hidden="true">⌨</span>Controls</button></div></header> <section class="hud tr-panel svelte-1uha8ag"><div><label class="sr-only svelte-1uha8ag" for="system-search">Search systems</label> <input id="system-search" type="search" inputmode="search" enterkeyhint="search" placeholder="Search" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" class="svelte-1uha8ag"/> <!> <label class="search-filter svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Only planetary systems</span></label></div> <div class="row system svelte-1uha8ag"><span class="svelte-1uha8ag">System</span><b class="svelte-1uha8ag"> </b></div> <div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Dist from Sol</span><b class="svelte-1uha8ag"> </b></div> <div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Zoom Dist</span><b class="svelte-1uha8ag"> </b></div> <!></section> <div class="hud bottom-left-stack svelte-1uha8ag"><section class="overlays-panel svelte-1uha8ag"><div class="overlays-deck svelte-1uha8ag"><!></div> <div class="overlays-title svelte-1uha8ag">Options</div> <label class="overlay-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Constellations</span></label> <label class="overlay-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Grid</span></label> <label class="overlay-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="lbl-full svelte-1uha8ag">Accurate Orbit Scale</span> <span class="lbl-short svelte-1uha8ag">Real Orbits</span></label></section> <nav class="action-row svelte-1uha8ag" aria-label="View actions"><button class="action-btn svelte-1uha8ag" type="button"><span class="action-glyph svelte-1uha8ag" aria-hidden="true"><!></span>Home</button> <button type="button" title="Plot an interstellar trajectory"><span class="action-check svelte-1uha8ag" aria-hidden="true"><!></span>Travel Calc</button> <button class="action-btn svelte-1uha8ag" type="button"><span class="action-glyph svelte-1uha8ag" aria-hidden="true"><!></span>Share</button></nav></div> <!> <!> <!> <!> <!> <!> <!></div>');function d8(i,e){Dr(e,!0);const t=500;function n(U,{duration:B=300}={}){return{duration:B,easing:xd,css:de=>`opacity:${de}; transform: translateY(${(1-de)*15}px) scale(${.97+de*.03})`}}let a,s=At(null),r=At(Zl({labels:[],camDist:0,nearCount:0,selectedSystemName:"Sol",selectedSystemId:"SOL",cameraTargetDistPc:0,travel:{eligible:!1,stats:null,ticks:[]},gridScale:{major:0,minor:0,f:0}})),o=At(!0),l=At(null),c=At(!1),u=At(!1),d=At(!1),p=At(!1);const f=Jt(()=>j5(T(r).selectedSystemId));function g(U,B=2){return U===void 0||!isFinite(U)?"—":U>=100?`${U.toFixed(0)}`:U>=10?`${U.toFixed(1)}`:U>=.1?`${U.toFixed(B)}`:U>0?`${Number(U.toPrecision(2))}`:`${U.toFixed(B)}`}function v(U){return U===void 0||!isFinite(U)||U<=0?"—":U<.001?`${(U*1e6).toFixed(0)} kyr`:U<1?`${(U*1e3).toFixed(0)} Myr`:U<10?`${U.toFixed(2)} Gyr`:`${U.toFixed(1)} Gyr`}function h(U){return U===void 0||!isFinite(U)?"—":`${U.toFixed(0)} K`}function m(U){return U===void 0||!isFinite(U)?"—":U.toFixed(2)}function S(U){return`${Math.min(U/299792458,.9999).toFixed(4)} c`}let y=At(!1),M=Zl({system:!0,camera:!0,constellations:!0,grid:!0,accurateOrbit:!0,travel:!0}),L=At(!1),A=null,P=At(0);const N=3.26156,j=365.25*86400;function _(U){return U<1?`${(U*N).toFixed(6)} ly`:U<100?`${U.toFixed(2)} pc / ${(U*N).toFixed(1)} ly`:`${U.toFixed(0)} pc / ${(U*N).toFixed(0)} ly`}const b=206264.806;function K(U){if(U<=0)return"—";const B=U/3;if(B>=1e3)return`${(B/1e3).toPrecision(3)} kpc`;if(B>=10)return`${B.toPrecision(3)} pc`;if(B>=1)return`${B.toFixed(2)} pc`;const de=B*N;if(de>=1)return`${de.toPrecision(3)} ly`;const _e=B*b;return _e>=1?`${_e.toPrecision(3)} AU`:`${_e.toExponential(2)} AU`}function V(U){if(U<86400)return`${(U/3600).toFixed(1)} h`;const B=U/j;if(B<1)return`${(U/86400).toFixed(1)} d`;if(B<10){const de=Math.floor(B),_e=Math.round((B-de)*12);return _e===12?`${de+1} y`:_e>0?`${de} y ${_e} mo`:`${de} y`}return B<1e3?`${B.toFixed(1)} yr`:B<1e6?`${(B/1e3).toFixed(2)} kyr`:B<1e9?`${(B/1e6).toFixed(2)} Myr`:`${B.toExponential(2)} yr`}function X(U){const B=U/1e3;return B<1?`${(B*1e3).toFixed(0)} kg`:B<1e3?`${B.toFixed(1)} t`:B<1e6?`${(B/1e3).toFixed(2)} kt`:B<1e9?`${(B/1e6).toFixed(2)} Mt`:B<1e12?`${(B/1e9).toFixed(2)} Gt`:`${B.toExponential(2)} t`}function Q(U){const B=[[1,"J"],[1e3,"kJ"],[1e6,"MJ"],[1e9,"GJ"],[1e12,"TJ"],[1e15,"PJ"],[1e18,"EJ"],[1e21,"ZJ"],[1e24,"YJ"]];if(U<1)return`${U.toExponential(2)} J`;for(let de=B.length-1;de>=0;de--)if(U>=B[de][0]){const[_e,Ee]=B[de];return`${(U/_e).toFixed(2)} ${Ee}`}return`${U.toExponential(2)} J`}function z(U){const B=U/9460730472580800;return B<1?`${(B*1e3).toFixed(0)} mly`:B<100?`${B.toFixed(2)} ly`:B<1e4?`${B.toFixed(1)} ly`:B<1e6?`${(B/1e3).toFixed(2)} kly`:B<1e9?`${(B/1e6).toFixed(2)} Mly`:`${B.toExponential(2)} ly`}const se=xl.map(U=>({id:U.id,name:U.name,prepared:rc.prepare(U.name),hasPlanets:U.children.some(B=>B.kind==="planet")}));let W=At(""),ge=At(!1),he=At(0),Ae=At(null),ze=At(!1),Ne=At(!1),C=At(!0),D=At(!1),H=At(1),$=At(!1);ii(()=>{const U=T(Ne);T(s)&&T(s).setConstellationsVisible(U)}),ii(()=>{const U=T(ze);T(s)&&T(s).setExoplanetRingsVisible(U)}),ii(()=>{const U=T(C);T(s)&&T(s).setGridVisible(U)}),ii(()=>{const U=T(D);T(s)&&T(s).setAccurateOrbitScale(U)}),ii(()=>{const U=T(H);T(s)&&T(s).setTravelAccelG(U)}),ii(()=>{const U=T($);T(s)&&T(s).setTravelPathVisible(U)}),ii(()=>{!T(r).travel.eligible&&T($)&&Oe($,!1)});function pe(){var U;if(T($)){Oe($,!1);return}(U=T(s))==null||U.beginTravelView(),Oe($,!0)}const re=Jt(()=>{const U=T(ze)?se.filter(_e=>_e.hasPlanets):se,B=T(W).trim();return B?rc.go(B,U,{key:"prepared",limit:50}).map(_e=>_e.obj):[...U].sort((_e,Ee)=>_e.name.localeCompare(Ee.name))});function oe(U){var B,de,_e;Oe(ge,!1),Oe(W,""),(B=T(Ae))==null||B.blur(),T($)&&U!=="SOL"?(de=T(s))==null||de.focusTravel(U):(_e=T(s))==null||_e.focusSystem(U)}function xe(U){var de;const B=T(re).length;if(!B){U.key==="Escape"&&Oe(ge,!1);return}U.key==="ArrowDown"?(U.preventDefault(),Oe(he,(T(he)+1)%B)):U.key==="ArrowUp"?(U.preventDefault(),Oe(he,(T(he)-1+B)%B)):U.key==="Enter"?(U.preventDefault(),oe(T(re)[T(he)].id)):U.key==="Escape"&&(Oe(ge,!1),(de=T(Ae))==null||de.blur())}ii(()=>{T(he)>=T(re).length&&Oe(he,0)}),ii(()=>{T(he);const U=document.querySelector(".search-results li.active");U==null||U.scrollIntoView({block:"nearest"})});function ue(U,B=4){return isFinite(U)?parseFloat(U.toPrecision(B)).toString():"0"}function R(){var Ee;const U=new URLSearchParams,B=(Ee=T(s))==null?void 0:Ee.getCameraState();if(M.system&&B&&U.set("s",B.systemId),M.camera&&B){U.set("d",ue(B.dist,5)),U.set("y",ue(B.yaw,4)),U.set("p",ue(B.pitch,4));const Ue=1e-4;(Math.abs(B.cx)>Ue||Math.abs(B.cy)>Ue||Math.abs(B.cz)>Ue)&&U.set("ct",`${ue(B.cx,5)},${ue(B.cy,5)},${ue(B.cz,5)}`)}M.constellations&&U.set("c",T(Ne)?"1":"0"),M.grid&&U.set("g",T(C)?"1":"0"),M.accurateOrbit&&U.set("o",T(D)?"1":"0"),M.travel&&(U.set("t",T($)?"1":"0"),T($)&&U.set("a",ue(T(H),2)));const de=typeof window<"u"?`${window.location.origin}${window.location.pathname}`:"",_e=U.toString();return _e?`${de}?${_e}`:de}const He=Jt(()=>(T(P),M.system,M.camera,M.constellations,M.grid,M.accurateOrbit,M.travel,T(Ne),T(C),T(D),T($),T(H),R()));ii(()=>{if(!T(y))return;const U=setInterval(()=>Oe(P,T(P)+1),250);return()=>clearInterval(U)});async function Ke(){var _e;const U=T(He),B=document.querySelector(".share-url input");let de=!1;if((_e=navigator.clipboard)!=null&&_e.writeText)try{await navigator.clipboard.writeText(U),de=!0}catch{}if(!de&&B){const Ee=B.readOnly;B.readOnly=!1,B.focus(),B.setSelectionRange(0,U.length);try{de=document.execCommand("copy")}catch{de=!1}B.readOnly=Ee,B.blur()}de&&(Oe(L,!0),A&&clearTimeout(A),A=setTimeout(()=>Oe(L,!1),1500))}function Ve(){var U;Oe($,!1),(U=T(s))==null||U.viewHome()}bl(()=>{const U=new Ml(a);Oe(s,U),window.starmap=U,U.setHudCallback(_e=>{Oe(r,_e,!0)}),window.addEventListener("resize",U.resize);const B=window.matchMedia("(min-width: 641px)");Oe(c,B.matches,!0);const de=_e=>Oe(c,_e.matches,!0);return B.addEventListener("change",de),U.init(ed).then(()=>{Oe(o,!1);const _e=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams;if(_e.has("c")&&Oe(Ne,_e.get("c")==="1"),_e.has("g")&&Oe(C,_e.get("g")==="1"),_e.has("o")&&Oe(D,_e.get("o")==="1"),_e.has("t")&&Oe($,_e.get("t")==="1"),_e.has("a")){const Ue=parseFloat(_e.get("a"));isFinite(Ue)&&Ue>0&&Oe(H,Ue,!0)}const Ee={};if(_e.has("s")&&(Ee.systemId=_e.get("s")),_e.has("d")){const Ue=parseFloat(_e.get("d"));isFinite(Ue)&&Ue>0&&(Ee.dist=Ue)}if(_e.has("y")){const Ue=parseFloat(_e.get("y"));isFinite(Ue)&&(Ee.yaw=Ue)}if(_e.has("p")){const Ue=parseFloat(_e.get("p"));isFinite(Ue)&&(Ee.pitch=Ue)}if(_e.has("ct")){const Ue=_e.get("ct").split(",").map(parseFloat);Ue.length===3&&Ue.every(isFinite)&&([Ee.cx,Ee.cy,Ee.cz]=Ue)}Object.keys(Ee).length>0&&(U.applyCameraState(Ee),U.publishHudNow()),U.setConstellationsVisible(T(Ne)),U.setGridVisible(T(C)),U.setExoplanetRingsVisible(T(ze)),U.setAccurateOrbitScale(T(D),{animate:!1}),U.setTravelAccelG(T(H)),U.setTravelPathVisible(T($))}).catch(_e=>{Oe(l,_e instanceof Error?_e.message:String(_e),!0),Oe(o,!1),window.__starmapError=T(l)}),()=>{window.removeEventListener("resize",U.resize),B.removeEventListener("change",de),U.dispose()}});var ye=n8();cd("1uha8ag",U=>{var B=C6();bi(4),it(U,B)}),Ds("keydown",Z1,U=>{U.key==="Escape"&&(Oe(u,!1),Oe(d,!1),Oe(y,!1),Oe(p,!1))});let $e;var be=ne(ye);Fa(be,U=>a=U,()=>a);var w=le(be,4);Ct(w,U=>{});var x=le(w,2);yn(x,21,()=>T(r).labels,U=>U.key,(U,B)=>{var de=D6(),_e=ne(de),Ee=le(_e);J(de),gt(()=>{ln(de,0,`leader ${T(B).kind??""} ${T(B).tier??""}`,"svelte-1uha8ag"),Qn(de,`opacity:${T(B).opacity??""}`),et(_e,"cx",T(B).ax),et(_e,"cy",T(B).ay),et(Ee,"points",`${T(B).ax+3.54},${T(B).ay-3.54} ${T(B).elbowX??""},${T(B).ly??""} ${T(B).lx??""},${T(B).ly??""}`)}),Yt(1,de,()=>gi,()=>({duration:t})),it(U,de)}),J(x);var G=le(x,2);yn(G,21,()=>T(r).labels,U=>U.key,(U,B)=>{var de=R6(),_e=ne(de),Ee=ne(_e,!0);J(_e),J(de),gt(()=>{ln(de,1,`label ${T(B).kind??""} ${T(B).tier??""}`,"svelte-1uha8ag"),Qn(de,`transform:translate3d(${T(B).lx??""}px,${T(B).ly??""}px,0); opacity:${T(B).opacity??""}`),st(Ee,T(B).name)}),Yt(1,de,()=>gi,()=>({duration:t})),it(U,de)}),J(G);var ee=le(G,2);{var te=U=>{var B=U6(),de=Dn(B);yn(de,21,()=>T(r).travel.ticks,Ee=>Ee.key,(Ee,Ue)=>{var at=I6();gt(()=>{et(at,"x1",T(Ue).x1),et(at,"y1",T(Ue).y1),et(at,"x2",T(Ue).x2),et(at,"y2",T(Ue).y2)}),it(Ee,at)}),J(de);var _e=le(de,2);yn(_e,21,()=>T(r).travel.ticks,Ee=>Ee.key,(Ee,Ue)=>{var at=L6(),ft=ne(at,!0);J(at),gt(()=>{Qn(at,`transform:translate3d(${T(Ue).lx??""}px,${T(Ue).ly??""}px,0) translate(-50%,-50%)`),st(ft,T(Ue).label)}),it(Ee,at)}),J(_e),Yt(1,de,()=>gi,()=>({duration:200})),Yt(1,_e,()=>gi,()=>({duration:200})),it(U,B)};Ct(ee,U=>{T(r).travel.ticks.length>0&&U(te)})}var Z=le(ee,4),ae=le(ne(Z),6),fe=ne(ae),ve=le(fe,2);J(ae),J(Z);var qe=le(Z,2),me=ne(qe);let Pe;var Me=le(ne(me),2);mi(Me),Fa(Me,U=>Oe(Ae,U),()=>T(Ae));var we=le(Me,2);{var Le=U=>{var B=k6();yn(B,23,()=>T(re),de=>de.id,(de,_e,Ee)=>{var Ue=N6();let at;var ft=ne(Ue,!0);J(Ue),gt(()=>{et(Ue,"aria-selected",T(Ee)===T(he)),at=ln(Ue,1,"svelte-1uha8ag",null,at,{active:T(Ee)===T(he)}),st(ft,T(_e).name)}),Nt("mousedown",Ue,()=>oe(T(_e).id)),Ds("mouseenter",Ue,()=>Oe(he,T(Ee),!0)),it(de,Ue)}),J(B),it(U,B)};Ct(we,U=>{T(ge)&&T(re).length&&U(Le)})}var Ze=le(we,2),Je=ne(Ze);mi(Je),bi(2),J(Ze),J(me);var lt=le(me,2),k=le(ne(lt)),Ie=ne(k,!0);J(k),J(lt);var ie=le(lt,2),ce=le(ne(ie)),De=ne(ce,!0);J(ce),J(ie);var Re=le(ie,2),ot=le(ne(Re)),Dt=ne(ot,!0);J(ot),J(Re);var Qt=le(Re,2);{var ct=U=>{var B=z6(),de=le(Dn(B),2);{var _e=Mt=>{var pt=F6(),Pt=le(ne(pt)),Lt=ne(Pt,!0);J(Pt),J(pt),gt(()=>st(Lt,T(f).specType)),it(Mt,pt)};Ct(de,Mt=>{T(f).specType&&Mt(_e)})}var Ee=le(de,2);{var Ue=Mt=>{var pt=O6(),Pt=le(ne(pt)),Lt=ne(Pt);J(Pt),J(pt),gt(si=>st(Lt,`${si??""} M☉`),[()=>g(T(f).massSolar)]),it(Mt,pt)};Ct(Ee,Mt=>{T(f).massSolar!==void 0&&Mt(Ue)})}var at=le(Ee,2);{var ft=Mt=>{var pt=B6(),Pt=le(ne(pt)),Lt=ne(Pt);J(Pt),J(pt),gt(si=>st(Lt,`${si??""} R☉`),[()=>g(T(f).radiusSolar)]),it(Mt,pt)};Ct(at,Mt=>{T(f).radiusSolar!==void 0&&Mt(ft)})}var Zt=le(at,2);Nt("click",Zt,()=>Oe(p,!0)),it(U,B)};Ct(Qt,U=>{(T(f).specType||T(f).massSolar!==void 0||T(f).radiusSolar!==void 0)&&U(ct)})}J(qe);var Kt=le(qe,2),yi=ne(Kt),ua=ne(yi),As=ne(ua);{var en=U=>{var B=H6(),de=Dn(B),_e=ne(de),Ee=le(ne(_e)),Ue=ne(Ee,!0);J(Ee),J(_e);var at=le(_e,2),ft=le(ne(at)),Zt=ne(ft,!0);J(ft),J(at);var Mt=le(at,2),pt=le(ne(Mt)),Pt=ne(pt,!0);J(pt),J(Mt);var Lt=le(Mt,2),si=le(ne(Lt)),Ni=ne(si,!0);J(si),J(Lt);var Ei=le(Lt,2),tn=le(ne(Ei)),di=ne(tn,!0);J(tn),J(Ei);var wi=le(Ei,2),qi=le(ne(wi)),ki=ne(qi,!0);J(qi),J(wi),bi(2),J(de);var Si=le(de,2),Ai=ne(Si),Ti=le(ne(Ai),2),vn=ne(Ti);J(Ti),J(Ai);var Gt=le(Ai,2);mi(Gt),bi(2),J(Si);var vt=le(Si,2);yn(vt,20,()=>[.5,1,2,5],wt=>wt,(wt,Yi)=>{var pi=G6();let Fi;var ji=ne(pi);J(pi),gt(()=>{Fi=ln(pi,1,"accel-btn svelte-1uha8ag",null,Fi,{active:T(H)===Yi}),et(pi,"aria-pressed",T(H)===Yi),st(ji,`${Yi??""}g`)}),Nt("click",pi,()=>Oe(H,Yi,!0)),it(wt,pi)}),J(vt),gt((wt,Yi,pi,Fi,ji,Gn,ts)=>{st(Ue,wt),st(Zt,Yi),st(Pt,pi),st(Ni,Fi),st(di,ji),st(ki,Gn),st(vn,`${ts??""} g`)},[()=>z(T(r).travel.stats.distanceM),()=>V(T(r).travel.stats.shipTimeS),()=>V(T(r).travel.stats.earthTimeS),()=>S(T(r).travel.stats.vMax),()=>X(T(r).travel.stats.fuelMassKg),()=>Q(T(r).travel.stats.energyJ),()=>T(H).toFixed(1)]),Yt(3,de,()=>gi,()=>({duration:160})),ac(Gt,()=>T(H),wt=>Oe(H,wt)),Yt(3,Si,()=>gi,()=>({duration:160})),Yt(3,vt,()=>gi,()=>({duration:160})),it(U,B)};Ct(As,U=>{T($)&&T(r).travel.eligible&&T(r).travel.stats&&U(en)})}J(ua);var Fn=le(ua,4),Ja=ne(Fn);mi(Ja),bi(2),J(Fn);var da=le(Fn,2),On=ne(da);mi(On),bi(2),J(da);var Qa=le(da,2),Bn=ne(Qa);mi(Bn),bi(4),J(Qa),J(yi);var es=le(yi,2),zn=ne(es),Ts=ne(zn),Br=ne(Ts);Pa(Br,{get icon(){return Bh}}),J(Ts),bi(),J(zn);var gn=le(zn,2);let E;var F=ne(gn),q=ne(F);{let U=Jt(()=>T($)?A6:T6);Pa(q,{get icon(){return T(U)}})}J(F),bi(),J(gn);var Y=le(gn,2),O=ne(Y),Se=ne(O);Pa(Se,{get icon(){return E6}}),J(O),bi(),J(Y),J(es),J(Kt);var Ce=le(Kt,2);{var ke=U=>{const B=Jt(()=>K(T(r).gridScale.major)),de=Jt(()=>K(T(r).gridScale.minor)),_e=Jt(()=>T(r).gridScale.f),Ee=Jt(()=>Math.max(0,1-T(_e))),Ue=Jt(()=>150),at=Jt(()=>T(Ue)*Math.pow(5,-T(_e))),ft=Jt(()=>T(at)/5),Zt=Jt(()=>[0,1,2,3,4,5].map(Gt=>Gt*T(at))),Mt=Jt(()=>[0,1,2,3,4].flatMap(Gt=>[1,2,3,4].map(vt=>Gt*T(at)+vt*T(ft))));var pt=q6(),Pt=le(ne(pt),2);et(Pt,"viewBox",`0 0 ${T(Ue)??""} 14`);var Lt=ne(Pt),si=ne(Lt),Ni=ne(si);et(Ni,"width",T(Ue)),J(si),J(Lt);var Ei=le(Lt),tn=ne(Ei);et(tn,"x2",T(Ue));var di=le(tn);yn(di,21,()=>T(Mt),Ql,(Gt,vt)=>{var wt=V6();gt(()=>{et(wt,"x1",T(vt)),et(wt,"x2",T(vt))}),it(Gt,wt)}),J(di);var wi=le(di);yn(wi,21,()=>T(Zt),Ql,(Gt,vt)=>{var wt=W6();gt(()=>{et(wt,"x1",T(vt)),et(wt,"x2",T(vt))}),it(Gt,wt)}),J(wi),J(Ei),J(Pt);var qi=le(Pt,2),ki=ne(qi),Si=le(ne(ki),3);Jl(Si,()=>T(B),Gt=>{var vt=K6(),wt=ne(vt,!0);J(vt),gt(()=>st(wt,T(B))),Yt(1,vt,()=>gi,()=>({duration:220})),it(Gt,vt)}),J(ki);var Ai=le(ki,2),Ti=ne(Ai),vn=le(Ti,4);Jl(vn,()=>T(de),Gt=>{var vt=X6(),wt=ne(vt,!0);J(vt),gt(()=>st(wt,T(de))),Yt(1,vt,()=>gi,()=>({duration:220})),it(Gt,vt)}),J(Ai),J(qi),J(pt),gt(()=>{Qn(di,`opacity:${T(Ee)??""}`),Qn(Ti,`opacity:${T(Ee)??""}`)}),it(U,pt)};Ct(Ce,U=>{T(C)&&U(ke)})}var Fe=le(Ce,2);{var Ye=U=>{var B=Y6();it(U,B)};Ct(Fe,U=>{T(o)&&U(Ye)})}var je=le(Fe,2);{var Be=U=>{var B=j6(),de=ne(B),_e=le(ne(de),2),Ee=ne(_e,!0);J(_e),J(de),J(B),gt(()=>st(Ee,T(l))),it(U,B)};Ct(je,U=>{T(l)&&U(Be)})}var ut=le(je,2);{var xt=U=>{var B=$6(),de=ne(B),_e=ne(de),Ee=le(_e,12),Ue=le(ne(Ee)),at=ne(Ue),ft=ne(at);Pa(ft,{get icon(){return Bh}}),J(at);var Zt=le(at,2),Mt=ne(Zt);Pa(Mt,{get icon(){return P6}}),J(Zt);var pt=le(Zt,2),Pt=ne(pt);Pa(Pt,{get icon(){return w6}}),J(pt),J(Ue),J(Ee),J(de),J(B),Nt("click",B,Lt=>{Lt.target===Lt.currentTarget&&Oe(u,!1)}),Nt("click",_e,()=>Oe(u,!1)),Yt(3,de,()=>n),Yt(3,B,()=>gi,()=>({duration:200})),it(U,B)};Ct(ut,U=>{T(u)&&U(xt)})}var Et=le(ut,2);{var ai=U=>{var B=Z6(),de=ne(B),_e=ne(de);bi(12),J(de),J(B),Nt("click",B,Ee=>{Ee.target===Ee.currentTarget&&Oe(d,!1)}),Nt("click",_e,()=>Oe(d,!1)),Yt(3,de,()=>n),Yt(3,B,()=>gi,()=>({duration:200})),it(U,B)};Ct(Et,U=>{T(d)&&U(ai)})}var ht=le(Et,2);{var Ge=U=>{var B=J6(),de=ne(B),_e=ne(de),Ee=le(_e,10),Ue=ne(Ee),at=ne(Ue);mi(at);var ft=le(at,4),Zt=ne(ft,!0);J(ft),J(Ue);var Mt=le(Ue,2),pt=ne(Mt);mi(pt);var Pt=le(pt,4),Lt=ne(Pt,!0);J(Pt),J(Mt);var si=le(Mt,2),Ni=ne(si);mi(Ni);var Ei=le(Ni,4),tn=ne(Ei,!0);J(Ei),J(si);var di=le(si,2),wi=ne(di);mi(wi);var qi=le(wi,4),ki=ne(qi,!0);J(qi),J(di);var Si=le(di,2),Ai=ne(Si);mi(Ai);var Ti=le(Ai,4),vn=ne(Ti,!0);J(Ti),J(Si);var Gt=le(Si,2),vt=ne(Gt);mi(vt);var wt=le(vt,4),Yi=ne(wt,!0);J(wt),J(Gt),J(Ee);var pi=le(Ee,2),Fi=ne(pi);mi(Fi);var ji=le(Fi,2);let Gn;var ts=ne(ji,!0);J(ji),J(pi),J(de),J(B),gt((Xt,zr)=>{st(Zt,T(r).selectedSystemName),st(Lt,Xt),st(tn,T(Ne)?"on":"off"),st(ki,T(C)?"on":"off"),st(vn,T(D)?"on":"off"),st(Yi,zr),vd(Fi,T(He)),Gn=ln(ji,1,"share-copy svelte-1uha8ag",null,Gn,{copied:T(L)}),st(ts,T(L)?"Copied":"Copy Link")},[()=>_(T(r).camDist),()=>T($)?`on · ${T(H).toFixed(1)} g`:"off"]),Nt("click",B,Xt=>{Xt.target===Xt.currentTarget&&Oe(y,!1)}),Nt("click",_e,()=>Oe(y,!1)),Gi(at,()=>M.system,Xt=>M.system=Xt),Gi(pt,()=>M.camera,Xt=>M.camera=Xt),Gi(Ni,()=>M.constellations,Xt=>M.constellations=Xt),Gi(wi,()=>M.grid,Xt=>M.grid=Xt),Gi(Ai,()=>M.accurateOrbit,Xt=>M.accurateOrbit=Xt),Gi(vt,()=>M.travel,Xt=>M.travel=Xt),Nt("click",ji,Ke),Yt(3,de,()=>n),Yt(3,B,()=>gi,()=>({duration:200})),it(U,B)};Ct(ht,U=>{T(y)&&U(Ge)})}var zt=le(ht,2);{var dt=U=>{var B=i8(),de=ne(B),_e=ne(de),Ee=le(_e,2),Ue=ne(Ee),at=ne(Ue);r6(at,{get teffK(){return T(f).teffK},get evolStage(){return T(f).evolStage},get specType(){return T(f).specType},get name(){return T(r).selectedSystemName}});var ft=le(at,2),Zt=ne(ft,!0);J(ft),J(Ue);var Mt=le(Ue,2);_6(Mt,{get teffK(){return T(f).teffK},get specType(){return T(f).specType}}),J(Ee);var pt=le(Ee,4),Pt=ne(pt),Lt=le(ne(Pt),2),si=ne(Lt,!0);J(Lt),J(Pt);var Ni=le(Pt,2),Ei=le(ne(Ni),2),tn=ne(Ei,!0);J(Ei),J(Ni);var di=le(Ni,2),wi=le(ne(di),2),qi=ne(wi,!0);J(wi),J(di);var ki=le(di,2),Si=le(ne(ki),2),Ai=ne(Si,!0);J(Si),J(ki);var Ti=le(ki,2),vn=le(ne(Ti),2),Gt=ne(vn,!0);J(vn),J(Ti);var vt=le(Ti,2),wt=le(ne(vt),2),Yi=ne(wt,!0);J(wt),J(vt);var pi=le(vt,2),Fi=le(ne(pi),2),ji=ne(Fi,!0);J(Fi),J(pi),J(pt);var Gn=le(pt,2);{var ts=Pi=>{var _n=e8(),Hn=Dn(_n),Gr=ne(Hn,!0);J(Hn);var Ps=le(Hn,2),s1=le(ne(Ps));{var r1=pa=>{var Cs=Q6();gt(()=>et(Cs,"href",T(f).wikipediaUrl)),it(pa,Cs)},o1=pa=>{var Cs=h1("Wikipedia");it(pa,Cs)};Ct(s1,pa=>{T(f).wikipediaUrl?pa(r1):pa(o1,-1)})}bi(2),J(Ps),gt(()=>st(Gr,T(f).summary)),it(Pi,_n)};Ct(Gn,Pi=>{T(f).summary&&Pi(ts)})}var Xt=le(Gn,2);{var zr=Pi=>{var _n=t8(),Hn=ne(_n);J(_n),gt(()=>et(Hn,"href",T(f).wikipediaUrl)),it(Pi,_n)};Ct(Xt,Pi=>{T(f).wikipediaUrl&&Pi(zr)})}J(de),J(B),gt((Pi,_n,Hn,Gr,Ps)=>{st(Zt,T(r).selectedSystemName),st(si,T(f).evolStage??"—"),st(tn,Pi),st(qi,T(f).specType??"—"),st(Ai,_n),st(Gt,Hn),st(Yi,Gr),st(ji,Ps)},[()=>m(T(f).appMag),()=>T(f).massSolar!==void 0?`${g(T(f).massSolar)} M☉`:"—",()=>T(f).radiusSolar!==void 0?`${g(T(f).radiusSolar)} R☉`:"—",()=>h(T(f).teffK),()=>v(T(f).ageGyr)]),Nt("click",B,Pi=>{Pi.target===Pi.currentTarget&&Oe(p,!1)}),Nt("click",_e,()=>Oe(p,!1)),Yt(3,de,()=>n),Yt(3,B,()=>gi,()=>({duration:200})),it(U,B)};Ct(zt,U=>{T(p)&&U(dt)})}J(ye),gt((U,B)=>{$e=ln(ye,1,"stage svelte-1uha8ag",null,$e,{ready:!T(o)}),Pe=ln(me,1,"search-box svelte-1uha8ag",null,Pe,{open:T(ge)}),st(Ie,T(r).selectedSystemName),st(De,U),st(Dt,B),E=ln(gn,1,"action-btn travel-btn svelte-1uha8ag",null,E,{active:T($)}),et(gn,"aria-pressed",T($))},[()=>_(T(r).cameraTargetDistPc),()=>_(T(r).camDist)]),Nt("click",fe,()=>Oe(u,!0)),Nt("click",ve,()=>Oe(d,!0)),Ds("focus",Me,()=>Oe(ge,!0)),Ds("blur",Me,()=>setTimeout(()=>Oe(ge,!1),130)),Nt("keydown",Me,xe),ac(Me,()=>T(W),U=>Oe(W,U)),Gi(Je,()=>T(ze),U=>Oe(ze,U)),Gi(Ja,()=>T(Ne),U=>Oe(Ne,U)),Gi(On,()=>T(C),U=>Oe(C,U)),Gi(Bn,()=>T(D),U=>Oe(D,U)),Nt("click",zn,Ve),Nt("click",gn,pe),Nt("click",Y,()=>Oe(y,!0)),it(i,ye),Rr()}Jh(["click","keydown","mousedown"]);export{d8 as component};
