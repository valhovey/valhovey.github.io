var Qu=Object.defineProperty;var ed=(n,e,t)=>e in n?Qu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var He=(n,e,t)=>ed(n,typeof e!="symbol"?e+"":e,t);import{a as at,f as St,c as Nh,d as Rn,t as td}from"../chunks/YpcDfA_S.js";import{o as gl}from"../chunks/YaYzGkqm.js";import{ap as Yt,an as kh,aA as id,W as vl,a2 as or,a$ as cs,aj as Fh,ag as T,aQ as nd,p as ad,b4 as Bl,b0 as hs,ao as rs,d as Oh,m as sd,au as zl,a3 as Aa,j as $i,X as gr,aa as rd,b2 as od,a8 as ld,aw as cd,V as _l,i as hd,h as ud,aH as lr,b5 as Gl,E as dd,D as pd,aT as Bh,aK as zh,I as Fr,b as fd,Z as md,aG as gd,a9 as vd,ak as Eo,g as Gh,aP as yl,f as _d,O as yd,l as Sd,B as xd,R as Md,ab as bd,bc as Ot,J as Ed,az as Ad,aJ as Ja,bg as Hh,K as Td,M as wd,H as Pd,C as Hl,x as Vl,A as Dd,N as Cd,al as Rd,ai as Id,F as Ld,U as Ud,s as Nd,r as Vh,aE as Wh,bb as kd,aR as Kh,_ as Fd,bf as Od,be as pi,aV as Wl,aU as Bd,a4 as An,a7 as zd,aO as Tr,ba as vt,aL as wr,bd as ti,ae as $n,b6 as Pt,Y as ne,aX as Ge,aS as ee,ad as Gd,aC as Or,aD as Hd,b3 as le,aN as Kl,aI as bi,$ as Vd}from"../chunks/B9YW0Ofq.js";import{b as Wd,s as rt,d as Kd,e as ws,a as Xt}from"../chunks/DAfgHUhi.js";import{b as fs,i as Dt,p as Ut}from"../chunks/Cqu4ogRy.js";import{B as Xd}from"../chunks/Cziyss_d.js";import{d as qd}from"../chunks/DIed-_2l.js";const Yd=Symbol("NaN");function Xl(n,e,t){Yt&&kh();var i=new Xd(n),a=!id();vl(()=>{var s=e();s!==s&&(s=Yd),a&&s!==null&&typeof s=="object"&&(s={}),i.ensure(s,t)})}function ql(n,e){return e}function jd(n,e,t){for(var i=[],a=e.length,s,r=e.length,o=0;o<a;o++){let u=e[o];zh(u,()=>{if(s){if(s.pending.delete(u),s.done.add(u),s.pending.size===0){var d=n.outrogroups;Ao(n,_l(s.done)),d.delete(s),d.size===0&&(n.outrogroups=null)}}else r-=1},!1)}if(r===0){var l=i.length===0&&t!==null;if(l){var c=t,h=c.parentNode;md(h),h.append(c),n.items.clear()}Ao(n,e,!l)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function Ao(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const r of n.pending.values())for(const o of r)i.add(n.items.get(o).e)}for(var a=0;a<e.length;a++){var s=e[a];if(i!=null&&i.has(s)){s.f|=$i;const r=document.createDocumentFragment();gd(s,r)}else vd(e[a],t)}}var Yl;function vn(n,e,t,i,a,s=null){var r=n,o=new Map,l=(e&Gh)!==0;if(l){var c=n;r=Yt?cs(Fh(c)):c.appendChild(or())}Yt&&kh();var h=null,u=ld(()=>{var _=t();return cd(_)?_:_==null?[]:_l(_)}),d,m=new Map,g=!0;function v(_){x.effect.f&pd||(x.pending.delete(_),x.fallback=h,$d(x,d,r,e,i),h!==null&&(d.length===0?h.f&$i?(h.f^=$i,os(h,null,r)):Bh(h):zh(h,()=>{h=null})))}function p(_){x.pending.delete(_)}var f=vl(()=>{d=T(u);var _=d.length;let E=!1;if(Yt){var U=nd(r)===ad;U!==(_===0)&&(r=Bl(),cs(r),hs(!1),E=!0)}for(var P=new Set,w=Aa,k=od(),q=0;q<_;q+=1){Yt&&rs.nodeType===Oh&&rs.data===sd&&(r=rs,E=!0,hs(!1));var y=d[q],M=i(y,q),W=g?null:o.get(M);W?(W.v&&zl(W.v,y),W.i&&zl(W.i,q),k&&w.unskip_effect(W.e)):(W=Zd(o,g?r:Yl??(Yl=or()),y,M,q,a,e,t),g||(W.e.f|=$i),o.set(M,W)),P.add(M)}if(_===0&&s&&!h&&(g?h=gr(()=>s(r)):(h=gr(()=>s(Yl??(Yl=or()))),h.f|=$i)),_>P.size&&rd(),Yt&&_>0&&cs(Bl()),!g)if(m.set(w,P),k){for(const[K,Y]of o)P.has(K)||w.skip_effect(Y.e);w.oncommit(v),w.ondiscard(p)}else v(w);E&&hs(!0),T(u)}),x={effect:f,items:o,pending:m,outrogroups:null,fallback:h};g=!1,Yt&&(r=rs)}function Qa(n){for(;n!==null&&!(n.f&fd);)n=n.next;return n}function $d(n,e,t,i,a){var y,M,W,K,Y,te,z,ae,V;var s=(i&_d)!==0,r=e.length,o=n.items,l=Qa(n.effect.first),c,h=null,u,d=[],m=[],g,v,p,f;if(s)for(f=0;f<r;f+=1)g=e[f],v=a(g,f),p=o.get(v).e,p.f&$i||((M=(y=p.nodes)==null?void 0:y.a)==null||M.measure(),(u??(u=new Set)).add(p));for(f=0;f<r;f+=1){if(g=e[f],v=a(g,f),p=o.get(v).e,n.outrogroups!==null)for(const ue of n.outrogroups)ue.pending.delete(p),ue.done.delete(p);if(p.f&Fr&&(Bh(p),s&&((K=(W=p.nodes)==null?void 0:W.a)==null||K.unfix(),(u??(u=new Set)).delete(p))),p.f&$i)if(p.f^=$i,p===l)os(p,null,t);else{var x=h?h.next:l;p===n.effect.last&&(n.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),_n(n,h,p),_n(n,p,x),os(p,x,t),h=p,d=[],m=[],l=Qa(h.next);continue}if(p!==l){if(c!==void 0&&c.has(p)){if(d.length<m.length){var _=m[0],E;h=_.prev;var U=d[0],P=d[d.length-1];for(E=0;E<d.length;E+=1)os(d[E],_,t);for(E=0;E<m.length;E+=1)c.delete(m[E]);_n(n,U.prev,P.next),_n(n,h,U),_n(n,P,_),l=_,h=P,f-=1,d=[],m=[]}else c.delete(p),os(p,l,t),_n(n,p.prev,p.next),_n(n,p,h===null?n.effect.first:h.next),_n(n,h,p),h=p;continue}for(d=[],m=[];l!==null&&l!==p;)(c??(c=new Set)).add(l),m.push(l),l=Qa(l.next);if(l===null)continue}p.f&$i||d.push(p),h=p,l=Qa(p.next)}if(n.outrogroups!==null){for(const ue of n.outrogroups)ue.pending.size===0&&(Ao(n,_l(ue.done)),(Y=n.outrogroups)==null||Y.delete(ue));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var w=[];if(c!==void 0)for(p of c)p.f&Fr||w.push(p);for(;l!==null;)!(l.f&Fr)&&l!==n.fallback&&w.push(l),l=Qa(l.next);var k=w.length;if(k>0){var q=i&Gh&&r===0?t:null;if(s){for(f=0;f<k;f+=1)(z=(te=w[f].nodes)==null?void 0:te.a)==null||z.measure();for(f=0;f<k;f+=1)(V=(ae=w[f].nodes)==null?void 0:ae.a)==null||V.fix()}jd(n,w,q)}}s&&yl(()=>{var ue,pe;if(u!==void 0)for(p of u)(pe=(ue=p.nodes)==null?void 0:ue.a)==null||pe.apply()})}function Zd(n,e,t,i,a,s,r,o){var l=r&hd?r&ud?Gl(t):lr(t,!1,!1):null,c=r&dd?Gl(a):null;return{v:l,i:c,e:gr(()=>(s(e,l??t,c??a,o),()=>{n.delete(i)}))}}function os(n,e,t){if(n.nodes)for(var i=n.nodes.start,a=n.nodes.end,s=e&&!(e.f&$i)?e.nodes.start:t;i!==null;){var r=Eo(i);if(s.before(i),i===a)return;i=r}}function _n(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const Jd=()=>performance.now(),ln={tick:n=>requestAnimationFrame(n),now:()=>Jd(),tasks:new Set};function Xh(){const n=ln.now();ln.tasks.forEach(e=>{e.c(n)||(ln.tasks.delete(e),e.f())}),ln.tasks.size!==0&&ln.tick(Xh)}function Qd(n){let e;return ln.tasks.size===0&&ln.tick(Xh),{promise:new Promise(t=>{ln.tasks.add(e={c:n,f:t})}),abort(){ln.tasks.delete(e)}}}function Ps(n,e){Hh(()=>{n.dispatchEvent(new CustomEvent(e))})}function ep(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function jl(n){const e={},t=n.split(";");for(const i of t){const[a,s]=i.split(":");if(!a||s===void 0)break;const r=ep(a.trim());e[r]=s.trim()}return e}const tp=n=>n;function Ji(n,e,t,i){var _;var a=(n&Td)!==0,s=(n&wd)!==0,r=a&&s,o=(n&Ed)!==0,l=r?"both":a?"in":"out",c,h=e.inert,u=e.style.overflow,d,m;function g(){return Hh(()=>c??(c=t()(e,(i==null?void 0:i())??{},{direction:l})))}var v={is_global:o,in(){var E;if(e.inert=h,!a){m==null||m.abort(),(E=m==null?void 0:m.reset)==null||E.call(m);return}s||d==null||d.abort(),d=To(e,g(),m,1,()=>{Ps(e,"introstart")},()=>{Ps(e,"introend"),d==null||d.abort(),d=c=void 0,e.style.overflow=u})},out(E){if(!s){E==null||E(),c=void 0;return}e.inert=!0,m=To(e,g(),d,0,()=>{Ps(e,"outrostart")},()=>{Ps(e,"outroend"),E==null||E()})},stop:()=>{d==null||d.abort(),m==null||m.abort()}},p=yd;if(((_=p.nodes).t??(_.t=[])).push(v),a&&Wd){var f=o;if(!f){for(var x=p.parent;x&&x.f&Sd;)for(;(x=x.parent)&&!(x.f&xd););f=!x||(x.f&Md)!==0}f&&bd(()=>{Ot(()=>v.in())})}}function To(n,e,t,i,a,s){var r=i===1;if(Ad(e)){var o,l=!1;return yl(()=>{if(!l){var f=e({direction:r?"in":"out"});o=To(n,f,t,i,a,s)}}),{abort:()=>{l=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration)&&!(e!=null&&e.delay))return a(),s(),{abort:Ja,deactivate:Ja,reset:Ja,t:()=>i};const{delay:c=0,css:h,tick:u,easing:d=tp}=e;var m=[];if(r&&t===void 0&&(u&&u(0,1),h)){var g=jl(h(0,1));m.push(g,g)}var v=()=>1-i,p=n.animate(m,{duration:c,fill:"forwards"});return p.onfinish=()=>{p.cancel(),a();var f=(t==null?void 0:t.t())??1-i;t==null||t.abort();var x=i-f,_=e.duration*Math.abs(x),E=[];if(_>0){var U=!1;if(h)for(var P=Math.ceil(_/16.666666666666668),w=0;w<=P;w+=1){var k=f+x*d(w/P),q=jl(h(k,1-k));E.push(q),U||(U=q.overflow==="hidden")}U&&(n.style.overflow="hidden"),v=()=>{var y=p.currentTime;return f+x*d(y/_)},u&&Qd(()=>{if(p.playState!=="running")return!1;var y=v();return u(y,1-y),!0})}p=n.animate(E,{duration:_,fill:"forwards"}),p.onfinish=()=>{v=()=>i,u==null||u(i,1-i),s()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=Ja)},deactivate:()=>{s=Ja},reset:()=>{i===0&&(u==null||u(1,0))},t:()=>v()}}function ip(n,e){let t=null,i=Yt;var a;if(Yt){t=rs;for(var s=Fh(document.head);s!==null&&(s.nodeType!==Oh||s.data!==n);)s=Eo(s);if(s===null)hs(!1);else{var r=Eo(s);s.remove(),cs(r)}}Yt||(a=document.head.appendChild(or()));try{vl(()=>{var o=gr(()=>e(a));o.f|=Pd})}finally{i&&(hs(!0),cs(t))}}const $l=[...` 	
\r\f \v\uFEFF`];function np(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var a of Object.keys(t))if(t[a])i=i?i+" "+a:a;else if(i.length)for(var s=a.length,r=0;(r=i.indexOf(a,r))>=0;){var o=r+s;(r===0||$l.includes(i[r-1]))&&(o===i.length||$l.includes(i[o]))?i=(r===0?"":i.substring(0,r))+i.substring(o+1):r=o}}return i===""?null:i}function ap(n,e){return n==null?null:String(n)}function rn(n,e,t,i,a,s){var r=n[Hl];if(Yt||r!==t||r===void 0){var o=np(t,i,s);(!Yt||o!==n.getAttribute("class"))&&(o==null?n.removeAttribute("class"):e?n.className=o:n.setAttribute("class",o)),n[Hl]=t}else if(s&&a!==s)for(var l in s){var c=!!s[l];(a==null||c!==!!a[l])&&n.classList.toggle(l,c)}return s}function qn(n,e,t,i){var a=n[Vl];if(Yt||a!==e){var s=ap(e);(!Yt||s!==n.getAttribute("style"))&&(s==null?n.removeAttribute("style"):n.style.cssText=s),n[Vl]=e}return i}const sp=Symbol("is custom element"),rp=Symbol("is html"),op=Vh?"link":"LINK",lp=Vh?"progress":"PROGRESS";function _i(n){if(Yt){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var i=n.value;nt(n,"value",null),n.value=i}if(n.hasAttribute("checked")){var a=n.checked;nt(n,"checked",null),n.checked=a}}};n[Ld]=t,yl(t),Ud()}}function cp(n,e){var t=qh(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==lp)||(n.value=e??"")}function nt(n,e,t,i){var a=qh(n);Yt&&(a[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName===op)||a[e]!==(a[e]=t)&&(e==="loading"&&(n[Nd]=t),t==null?n.removeAttribute(e):typeof t!="string"&&hp(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function qh(n){var e;return n[e=Dd]??(n[e]={[sp]:n.nodeName.includes("-"),[rp]:n.namespaceURI===Cd})}var Zl=new Map;function hp(n){var e=n.getAttribute("is")||n.nodeName,t=Zl.get(e);if(t)return t;Zl.set(e,t=[]);for(var i,a=n,s=Element.prototype;s!==a;){i=Id(a);for(var r in i)i[r].set&&r!=="innerHTML"&&r!=="textContent"&&r!=="innerText"&&t.push(r);a=Rd(a)}return t}function Jl(n,e,t=e){var i=new WeakSet;Wh(n,"input",async a=>{var s=a?n.defaultValue:n.value;if(s=Br(n)?zr(s):s,t(s),Aa!==null&&i.add(Aa),await kd(),s!==(s=e())){var r=n.selectionStart,o=n.selectionEnd,l=n.value.length;if(n.value=s??"",o!==null){var c=n.value.length;r===o&&o===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=r,n.selectionEnd=Math.min(o,c))}}}),(Yt&&n.defaultValue!==n.value||Ot(e)==null&&n.value)&&(t(Br(n)?zr(n.value):n.value),Aa!==null&&i.add(Aa)),Kh(()=>{var a=e();if(n===document.activeElement){var s=Aa;if(i.has(s))return}Br(n)&&a===zr(n.value)||n.type==="date"&&!a&&!n.value||a!==n.value&&(n.value=a??"")})}function Yi(n,e,t=e){Wh(n,"change",i=>{var a=i?n.defaultChecked:n.checked;t(a)}),(Yt&&n.defaultChecked!==n.checked||Ot(e)==null)&&t(n.checked),Kh(()=>{var i=e();n.checked=!!i})}function Br(n){var e=n.type;return e==="number"||e==="range"}function zr(n){return n===""?null:+n}function up(n=!1){const e=Fd,t=e.l.u;if(!t)return;let i=()=>An(e.s);if(n){let a=0,s={};const r=zd(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&a++,a});i=()=>T(r)}t.b.length&&Od(()=>{Ql(e,i),Wl(t.b)}),pi(()=>{const a=Ot(()=>t.m.map(Bd));return()=>{for(const s of a)typeof s=="function"&&s()}}),t.a.length&&pi(()=>{Ql(e,i),Wl(t.a)})}function Ql(n,e){if(n.l.s)for(const t of n.l.s)T(t);e()}const dp=n=>n;function Qi(n,{delay:e=0,duration:t=400,easing:i=dp}={}){const a=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:s=>`opacity: ${s*a}`}}var pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yh={exports:{}};(function(n){((e,t)=>{n.exports?n.exports=t():e.fuzzysort=t()})(pp,e=>{var t=(I,D)=>{if(!I||!D)return pe;var B=g(I);z(D)||(D=m(D));var ie=B.bitflags;return(ie&D._bitflags)!==ie?pe:p(B,D)},i=(I,D,B)=>{if(!I)return B!=null&&B.all?v(D,B):ue;var ie=g(I),ce=ie.bitflags,se=ie.containsSpace,re=u((B==null?void 0:B.threshold)||0),xe=(B==null?void 0:B.limit)||ae,ge=0,L=0,qe=D.length;function We(fe){ge<xe?(Ue.add(fe),++ge):(++L,fe._score>Ue.peek()._score&&Ue.replaceTop(fe))}if(B!=null&&B.key)for(var Ve=B.key,Me=0;Me<qe;++Me){var Qe=D[Me],Ae=te(Qe,Ve);if(Ae&&(z(Ae)||(Ae=m(Ae)),(ce&Ae._bitflags)===ce)){var A=p(ie,Ae);A!==pe&&(A._score<re||(A.obj=Qe,We(A)))}}else if(B!=null&&B.keys){var S=B.keys,H=S.length;e:for(var Me=0;Me<qe;++Me){var Qe=D[Me];{for(var Q=0,Z=0;Z<H;++Z){var Ve=S[Z],Ae=te(Qe,Ve);if(!Ae){K[Z]=de;continue}z(Ae)||(Ae=m(Ae)),K[Z]=Ae,Q|=Ae._bitflags}if((ce&Q)!==ce)continue}if(se)for(let Ee=0;Ee<ie.spaceSearches.length;Ee++)M[Ee]=V;for(var Z=0;Z<H;++Z){if(Ae=K[Z],Ae===de){Y[Z]=de;continue}if(Y[Z]=p(ie,Ae,!1,se),Y[Z]===pe){Y[Z]=de;continue}if(se)for(let we=0;we<ie.spaceSearches.length;we++){if(W[we]>-1e3&&M[we]>V){var $=(M[we]+W[we])/4;$>M[we]&&(M[we]=$)}W[we]>M[we]&&(M[we]=W[we])}}if(se){for(let Ee=0;Ee<ie.spaceSearches.length;Ee++)if(M[Ee]===V)continue e}else{var me=!1;for(let Ee=0;Ee<H;Ee++)if(Y[Ee]._score!==V){me=!0;break}if(!me)continue}var ve=new l(H);for(let Ee=0;Ee<H;Ee++)ve[Ee]=Y[Ee];if(se){var _e=0;for(let Ee=0;Ee<ie.spaceSearches.length;Ee++)_e+=M[Ee]}else{var _e=V;for(let we=0;we<H;we++){var A=ve[we];if(A._score>-1e3&&_e>V){var $=(_e+A._score)/4;$>_e&&(_e=$)}A._score>_e&&(_e=A._score)}}if(ve.obj=Qe,ve._score=_e,B!=null&&B.scoreFn){if(_e=B.scoreFn(ve),!_e)continue;_e=u(_e),ve._score=_e}_e<re||We(ve)}}else for(var Me=0;Me<qe;++Me){var Ae=D[Me];if(Ae&&(z(Ae)||(Ae=m(Ae)),(ce&Ae._bitflags)===ce)){var A=p(ie,Ae);A!==pe&&(A._score<re||We(A))}}if(ge===0)return ue;for(var Ze=new Array(ge),Me=ge-1;Me>=0;--Me)Ze[Me]=Ue.poll();return Ze.total=ge+L,Ze},a=(I,D="<b>",B="</b>")=>{for(var ie=typeof D=="function"?D:void 0,ce=I.target,se=ce.length,re=I.indexes,xe="",ge=0,L=0,qe=!1,We=[],Ve=0;Ve<se;++Ve){var Me=ce[Ve];if(re[L]===Ve){if(++L,qe||(qe=!0,ie?(We.push(xe),xe=""):xe+=D),L===re.length){ie?(xe+=Me,We.push(ie(xe,ge++)),xe="",We.push(ce.substr(Ve+1))):xe+=Me+B+ce.substr(Ve+1);break}}else qe&&(qe=!1,ie?(We.push(ie(xe,ge++)),xe=""):xe+=B);xe+=Me}return ie?We:xe},s=I=>{typeof I=="number"?I=""+I:typeof I!="string"&&(I="");var D=_(I);return c(I,{_targetLower:D._lower,_targetLowerCodes:D.lowerCodes,_bitflags:D.bitflags})},r=()=>{P.clear(),w.clear()};class o{get indexes(){return this._indexes.slice(0,this._indexes.len).sort((D,B)=>D-B)}set indexes(D){return this._indexes=D}highlight(D,B){return a(this,D,B)}get score(){return h(this._score)}set score(D){this._score=u(D)}}class l extends Array{get score(){return h(this._score)}set score(D){this._score=u(D)}}var c=(I,D)=>{const B=new o;return B.target=I,B.obj=D.obj??pe,B._score=D._score??V,B._indexes=D._indexes??[],B._targetLower=D._targetLower??"",B._targetLowerCodes=D._targetLowerCodes??pe,B._nextBeginningIndexes=D._nextBeginningIndexes??pe,B._bitflags=D._bitflags??0,B},h=I=>I===V?0:I>1?I:Math.E**(((-I+1)**.04307-1)*-2),u=I=>I===0?V:I>1?I:1-Math.pow(Math.log(I)/-2+1,1/.04307),d=I=>{typeof I=="number"?I=""+I:typeof I!="string"&&(I=""),I=I.trim();var D=_(I),B=[];if(D.containsSpace){var ie=I.split(/\s+/);ie=[...new Set(ie)];for(var ce=0;ce<ie.length;ce++)if(ie[ce]!==""){var se=_(ie[ce]);B.push({lowerCodes:se.lowerCodes,_lower:ie[ce].toLowerCase(),containsSpace:!1})}}return{lowerCodes:D.lowerCodes,_lower:D._lower,containsSpace:D.containsSpace,bitflags:D.bitflags,spaceSearches:B}},m=I=>{if(I.length>999)return s(I);var D=P.get(I);return D!==void 0||(D=s(I),P.set(I,D)),D},g=I=>{if(I.length>999)return d(I);var D=w.get(I);return D!==void 0||(D=d(I),w.set(I,D)),D},v=(I,D)=>{var B=[];B.total=I.length;var ie=(D==null?void 0:D.limit)||ae;if(D!=null&&D.key)for(var ce=0;ce<I.length;ce++){var se=I[ce],re=te(se,D.key);if(re!=pe){z(re)||(re=m(re));var xe=c(re.target,{_score:re._score,obj:se});if(B.push(xe),B.length>=ie)return B}}else if(D!=null&&D.keys)for(var ce=0;ce<I.length;ce++){for(var se=I[ce],ge=new l(D.keys.length),L=D.keys.length-1;L>=0;--L){var re=te(se,D.keys[L]);if(!re){ge[L]=de;continue}z(re)||(re=m(re)),re._score=V,re._indexes.len=0,ge[L]=re}if(ge.obj=se,ge._score=V,B.push(ge),B.length>=ie)return B}else for(var ce=0;ce<I.length;ce++){var re=I[ce];if(re!=pe&&(z(re)||(re=m(re)),re._score=V,re._indexes.len=0,B.push(re),B.length>=ie))return B}return B},p=(I,D,B=!1,ie=!1)=>{if(B===!1&&I.containsSpace)return f(I,D,ie);for(var ce=I._lower,se=I.lowerCodes,re=se[0],xe=D._targetLowerCodes,ge=se.length,L=xe.length,Me=0,qe=0,We=0;;){var Ve=re===xe[qe];if(Ve){if(k[We++]=qe,++Me,Me===ge)break;re=se[Me]}if(++qe,qe>=L)return pe}var Me=0,Qe=!1,Ae=0,A=D._nextBeginningIndexes;A===pe&&(A=D._nextBeginningIndexes=U(D.target)),qe=k[0]===0?0:A[k[0]-1];var S=0;if(qe!==L)for(;;)if(qe>=L){if(Me<=0||(++S,S>200))break;--Me;var H=q[--Ae];qe=A[H]}else{var Ve=se[Me]===xe[qe];if(Ve){if(q[Ae++]=qe,++Me,Me===ge){Qe=!0;break}++qe}else qe=A[qe]}var Q=ge<=1?-1:D._targetLower.indexOf(ce,k[0]),Z=!!~Q,$=Z?Q===0||D._nextBeginningIndexes[Q-1]===Q:!1;if(Z&&!$){for(var me=0;me<A.length;me=A[me])if(!(me<=Q)){for(var ve=0;ve<ge&&se[ve]===D._targetLowerCodes[me+ve];ve++);if(ve===ge){Q=me,$=!0;break}}}var _e=Ee=>{for(var we=0,Le=0,$e=1;$e<ge;++$e)Ee[$e]-Ee[$e-1]!==1&&(we-=Ee[$e],++Le);var Ye=Ee[ge-1]-Ee[0]-(ge-1);if(we-=(12+Ye)*Le,Ee[0]!==0&&(we-=Ee[0]*Ee[0]*.2),!Qe)we*=1e3;else{for(var ct=1,$e=A[0];$e<L;$e=A[$e])++ct;ct>24&&(we*=(ct-24)*10)}return we-=(L-ge)/2,Z&&(we/=1+ge*ge*1),$&&(we/=1+ge*ge*1),we-=(L-ge)/2,we};if(Qe)if($){for(var me=0;me<ge;++me)k[me]=Q+me;var Ze=k,fe=_e(k)}else var Ze=q,fe=_e(q);else{if(Z)for(var me=0;me<ge;++me)k[me]=Q+me;var Ze=k,fe=_e(Ze)}D._score=fe;for(var me=0;me<ge;++me)D._indexes[me]=Ze[me];D._indexes.len=ge;const Te=new o;return Te.target=D.target,Te._score=D._score,Te._indexes=D._indexes,Te},f=(I,D,B)=>{for(var ie=new Set,ce=0,se=pe,re=0,xe=I.spaceSearches,ge=xe.length,L=0,qe=()=>{for(let $=L-1;$>=0;$--)D._nextBeginningIndexes[y[$*2+0]]=y[$*2+1]},We=!1,Z=0;Z<ge;++Z){W[Z]=V;var Ve=xe[Z];if(se=p(Ve,D),B){if(se===pe)continue;We=!0}else if(se===pe)return qe(),pe;var Me=Z===ge-1;if(!Me){var Qe=se._indexes,Ae=!0;for(let me=0;me<Qe.len-1;me++)if(Qe[me+1]-Qe[me]!==1){Ae=!1;break}if(Ae){var A=Qe[Qe.len-1]+1,S=D._nextBeginningIndexes[A-1];for(let me=A-1;me>=0&&S===D._nextBeginningIndexes[me];me--)D._nextBeginningIndexes[me]=A,y[L*2+0]=me,y[L*2+1]=S,L++}}ce+=se._score/ge,W[Z]=se._score/ge,se._indexes[0]<re&&(ce-=(re-se._indexes[0])*2),re=se._indexes[0];for(var H=0;H<se._indexes.len;++H)ie.add(se._indexes[H])}if(B&&!We)return pe;qe();var Q=p(I,D,!0);if(Q!==pe&&Q._score>ce){if(B)for(var Z=0;Z<ge;++Z)W[Z]=Q._score/ge;return Q}B&&(se=D),se._score=ce;var Z=0;for(let $ of ie)se._indexes[Z++]=$;return se._indexes.len=Z,se},x=I=>I.replace(new RegExp("\\p{Script=Latin}+","gu"),D=>D.normalize("NFD")).replace(/[\u0300-\u036f]/g,""),_=I=>{I=x(I);for(var D=I.length,B=I.toLowerCase(),ie=[],ce=0,se=!1,re=0;re<D;++re){var xe=ie[re]=B.charCodeAt(re);if(xe===32){se=!0;continue}var ge=xe>=97&&xe<=122?xe-97:xe>=48&&xe<=57?26:xe<=127?30:31;ce|=1<<ge}return{lowerCodes:ie,bitflags:ce,containsSpace:se,_lower:B}},E=I=>{for(var D=I.length,B=[],ie=0,ce=!1,se=!1,re=0;re<D;++re){var xe=I.charCodeAt(re),ge=xe>=65&&xe<=90,L=ge||xe>=97&&xe<=122||xe>=48&&xe<=57,qe=ge&&!ce||!se||!L;ce=ge,se=L,qe&&(B[ie++]=re)}return B},U=I=>{I=x(I);for(var D=I.length,B=E(I),ie=[],ce=B[0],se=0,re=0;re<D;++re)ce>re?ie[re]=ce:(ce=B[++se],ie[re]=ce===void 0?D:ce);return ie},P=new Map,w=new Map,k=[],q=[],y=[],M=[],W=[],K=[],Y=[],te=(I,D)=>{var B=I[D];if(B!==void 0)return B;if(typeof D=="function")return D(I);var ie=D;Array.isArray(D)||(ie=D.split("."));for(var ce=ie.length,se=-1;I&&++se<ce;)I=I[ie[se]];return I},z=I=>typeof I=="object"&&typeof I._bitflags=="number",ae=1/0,V=-ae,ue=[];ue.total=0;var pe=null,de=s(""),Oe=I=>{var D=[],B=0,ie={},ce=se=>{for(var re=0,xe=D[re],ge=1;ge<B;){var L=ge+1;re=ge,L<B&&D[L]._score<D[ge]._score&&(re=L),D[re-1>>1]=D[re],ge=1+(re<<1)}for(var qe=re-1>>1;re>0&&xe._score<D[qe]._score;qe=(re=qe)-1>>1)D[re]=D[qe];D[re]=xe};return ie.add=se=>{var re=B;D[B++]=se;for(var xe=re-1>>1;re>0&&se._score<D[xe]._score;xe=(re=xe)-1>>1)D[re]=D[xe];D[re]=se},ie.poll=se=>{if(B!==0){var re=D[0];return D[0]=D[--B],ce(),re}},ie.peek=se=>{if(B!==0)return D[0]},ie.replaceTop=se=>{D[0]=se,ce()},ie},Ue=Oe();return{single:t,go:i,prepare:s,cleanup:r}})})(Yh);var mp=Yh.exports;const ec=fp(mp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="169",Qn={ROTATE:0,DOLLY:1,PAN:2},wa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gp=0,tc=1,vp=2,jh=1,_p=2,on=3,Cn=0,ri=1,Bi=2,un=0,Da=1,Wi=2,ic=3,nc=4,yp=5,Yn=100,Sp=101,xp=102,Mp=103,bp=104,Ep=200,Ap=201,Tp=202,wp=203,wo=204,Po=205,Pp=206,Dp=207,Cp=208,Rp=209,Ip=210,Lp=211,Up=212,Np=213,kp=214,Do=0,Co=1,Ro=2,La=3,Io=4,Lo=5,Uo=6,No=7,$h=0,Fp=1,Op=2,Dn=0,Zh=1,Jh=2,Qh=3,eu=4,Bp=5,tu=6,iu=7,nu=300,Ua=301,Na=302,ko=303,Fo=304,Pr=306,Oo=1e3,Zn=1001,Bo=1002,wi=1003,zp=1004,Ds=1005,zi=1006,Gr=1007,Jn=1008,pn=1009,au=1010,su=1011,ms=1012,xl=1013,ea=1014,cn=1015,dn=1016,Ml=1017,bl=1018,ka=1020,ru=35902,ou=1021,lu=1022,Gi=1023,cu=1024,hu=1025,Ca=1026,Fa=1027,uu=1028,El=1029,du=1030,Al=1031,Tl=1033,cr=33776,hr=33777,ur=33778,dr=33779,zo=35840,Go=35841,Ho=35842,Vo=35843,Wo=36196,Ko=37492,Xo=37496,qo=37808,Yo=37809,jo=37810,$o=37811,Zo=37812,Jo=37813,Qo=37814,el=37815,tl=37816,il=37817,nl=37818,al=37819,sl=37820,rl=37821,pr=36492,ol=36494,ll=36495,pu=36283,cl=36284,hl=36285,ul=36286,Gp=3200,Hp=3201,Vp=0,Wp=1,wn="",Oi="srgb",In="srgb-linear",wl="display-p3",Dr="display-p3-linear",vr="linear",bt="srgb",_r="rec709",yr="p3",ha=7680,ac=519,Kp=512,Xp=513,qp=514,fu=515,Yp=516,jp=517,$p=518,Zp=519,sc=35044,rc=35048,oc="300 es",hn=2e3,Sr=2001;class na{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const Ra=Math.PI/180,gs=180/Math.PI;function Ha(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function ii(n,e,t){return Math.max(e,Math.min(t,n))}function Pl(n,e){return(n%e+e)%e}function Jp(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function Qp(n,e,t){return n!==e?(t-n)/(e-n):0}function us(n,e,t){return(1-t)*n+t*e}function ef(n,e,t,i){return us(n,e,1-Math.exp(-t*i))}function tf(n,e=1){return e-Math.abs(Pl(n,e*2)-e)}function nf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function af(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rf(n,e){return n+Math.random()*(e-n)}function of(n){return n*(.5-Math.random())}function lf(n){n!==void 0&&(lc=n);let e=lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cf(n){return n*Ra}function hf(n){return n*gs}function uf(n){return(n&n-1)===0&&n!==0}function df(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ff(n,e,t,i,a){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+i)/2),h=r((e+i)/2),u=s((e-i)/2),d=r((e-i)/2),m=s((i-e)/2),g=r((i-e)/2);switch(a){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ta(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ds={DEG2RAD:Ra,RAD2DEG:gs,generateUUID:Ha,clamp:ii,euclideanModulo:Pl,mapLinear:Jp,inverseLerp:Qp,lerp:us,damp:ef,pingpong:tf,smoothstep:nf,smootherstep:af,randInt:sf,randFloat:rf,randFloatSpread:of,seededRandom:lf,degToRad:cf,radToDeg:hf,isPowerOfTwo:uf,ceilPowerOfTwo:df,floorPowerOfTwo:pf,setQuaternionFromProperEuler:ff,normalize:ni,denormalize:Ta};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ii(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,a,s,r,o,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,c)}set(e,t,i,a,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],v=a[0],p=a[3],f=a[6],x=a[1],_=a[4],E=a[7],U=a[2],P=a[5],w=a[8];return s[0]=r*v+o*x+l*U,s[3]=r*p+o*_+l*P,s[6]=r*f+o*E+l*w,s[1]=c*v+h*x+u*U,s[4]=c*p+h*_+u*P,s[7]=c*f+h*E+u*w,s[2]=d*v+m*x+g*U,s[5]=d*p+m*_+g*P,s[8]=d*f+m*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,d=o*l-h*s,m=c*s-r*l,g=t*u+i*d+a*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(a*c-h*i)*v,e[2]=(o*i-a*r)*v,e[3]=d*v,e[4]=(h*t-a*l)*v,e[5]=(a*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(r*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hr.makeScale(e,t)),this}rotate(e){return this.premultiply(Hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new it;function mu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mf(){const n=vs("canvas");return n.style.display="block",n}const cc={};function fr(n){n in cc||(cc[n]=!0,console.warn(n))}function gf(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function vf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _f(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hc=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uc=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[In]:{transfer:vr,primaries:_r,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Oi]:{transfer:bt,primaries:_r,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Dr]:{transfer:vr,primaries:yr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(uc),fromReference:n=>n.applyMatrix3(hc)},[wl]:{transfer:bt,primaries:yr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(uc),fromReference:n=>n.applyMatrix3(hc).convertLinearToSRGB()}},yf=new Set([In,Dr]),ft={enabled:!0,_workingColorSpace:In,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=es[e].toReference,a=es[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return es[n].primaries},getTransfer:function(n){return n===wn?vr:es[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(es[e].luminanceCoefficients)}};function Ia(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ua;class Sf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ua===void 0&&(ua=vs("canvas")),ua.width=e.width,ua.height=e.height;const i=ua.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ua}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Ia(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ia(t[i]/255)*255):t[i]=Ia(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xf=0;class gu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Wr(a[r].image)):s.push(Wr(a[r]))}else s=Wr(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mf=0;class oi extends na{constructor(e=oi.DEFAULT_IMAGE,t=oi.DEFAULT_MAPPING,i=Zn,a=Zn,s=zi,r=Jn,o=Gi,l=pn,c=oi.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Ha(),this.name="",this.source=new gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=nu;oi.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,E=(m+1)/2,U=(f+1)/2,P=(h+d)/4,w=(u+v)/4,k=(g+p)/4;return _>E&&_>U?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=P/i,s=w/i):E>U?E<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(E),i=P/a,s=k/a):U<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(U),i=w/s,a=k/s),this.set(i,a,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bf extends na{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new oi(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends bf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vu extends oi{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=wi,this.minFilter=wi,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ef extends oi{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=wi,this.minFilter=wi,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],u=i[a+3];const d=s[r+0],m=s[r+1],g=s[r+2],v=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==m||h!==g){let p=1-o;const f=l*d+c*m+h*g+u*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const U=Math.sqrt(_),P=Math.atan2(U,f*x);p=Math.sin(p*P)/U,o=Math.sin(o*P)/U}const E=o*x;if(l=l*p+d*E,c=c*p+m*E,h=h*p+g*E,u=u*p+v*E,p===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],u=s[r],d=s[r+1],m=s[r+2],g=s[r+3];return e[t]=o*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-o*m,e[t+2]=c*g+h*m+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),u=o(s/2),d=l(i/2),m=l(a/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(r-a)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(a+r)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(a+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(r-a)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ii(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*i+t*this._x,this._y=m*a+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=a*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),h=2*(o*t-s*a),u=2*(s*i-r*t);return this.x=t+l*c+r*u-o*h,this.y=i+l*h+o*c-s*u,this.z=a+l*u+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ii(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new R,dc=new ta;class Va{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Ni):Ni.fromBufferAttribute(s,r),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cs.copy(i.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Rs.subVectors(this.max,ts),da.subVectors(e.a,ts),pa.subVectors(e.b,ts),fa.subVectors(e.c,ts),yn.subVectors(pa,da),Sn.subVectors(fa,pa),On.subVectors(da,fa);let t=[0,-yn.z,yn.y,0,-Sn.z,Sn.y,0,-On.z,On.y,yn.z,0,-yn.x,Sn.z,0,-Sn.x,On.z,0,-On.x,-yn.y,yn.x,0,-Sn.y,Sn.x,0,-On.y,On.x,0];return!Xr(t,da,pa,fa,Rs)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,da,pa,fa,Rs))?!1:(Is.crossVectors(yn,Sn),t=[Is.x,Is.y,Is.z],Xr(t,da,pa,fa,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new R,new R,new R,new R,new R,new R,new R,new R],Ni=new R,Cs=new Va,da=new R,pa=new R,fa=new R,yn=new R,Sn=new R,On=new R,ts=new R,Rs=new R,Is=new R,Bn=new R;function Xr(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){Bn.fromArray(n,s);const o=a.x*Math.abs(Bn.x)+a.y*Math.abs(Bn.y)+a.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),h=i.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Af=new Va,is=new R,qr=new R;class xs{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Af.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(is,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(qr)),this.expandByPoint(is.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new R,Yr=new R,Ls=new R,xn=new R,jr=new R,Us=new R,$r=new R;class Cr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Yr.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Yr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ls),o=xn.dot(this.direction),l=-xn.dot(Ls),c=xn.lengthSq(),h=Math.abs(1-r*r);let u,d,m,g;if(h>0)if(u=r*l-o,d=r*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,m=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(Yr).addScaledVector(Ls,d),m}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const i=tn.dot(this.direction),a=tn.dot(tn)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,i,a,s){jr.subVectors(t,e),Us.subVectors(i,e),$r.crossVectors(jr,Us);let r=this.direction.dot($r),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;xn.subVectors(this.origin,e);const l=o*this.direction.dot(Us.crossVectors(xn,Us));if(l<0)return null;const c=o*this.direction.dot(jr.cross(xn));if(c<0||l+c>r)return null;const h=-o*xn.dot($r);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,a,s,r,o,l,c,h,u,d,m,g,v,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,o,l,c,h,u,d,m,g,v,p)}set(e,t,i,a,s,r,o,l,c,h,u,d,m,g,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ma.setFromMatrixColumn(e,0).length(),s=1/ma.setFromMatrixColumn(e,1).length(),r=1/ma.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,m=r*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-m,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-r*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=r*h,t[9]=v-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,m=r*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,m=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=r*l,m=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=r*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tf,e,wf)}lookAt(e,t,i){const a=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Mn.crossVectors(i,yi),Mn.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Mn.crossVectors(i,yi)),Mn.normalize(),Ns.crossVectors(yi,Mn),a[0]=Mn.x,a[4]=Ns.x,a[8]=yi.x,a[1]=Mn.y,a[5]=Ns.y,a[9]=yi.y,a[2]=Mn.z,a[6]=Ns.z,a[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],x=i[3],_=i[7],E=i[11],U=i[15],P=a[0],w=a[4],k=a[8],q=a[12],y=a[1],M=a[5],W=a[9],K=a[13],Y=a[2],te=a[6],z=a[10],ae=a[14],V=a[3],ue=a[7],pe=a[11],de=a[15];return s[0]=r*P+o*y+l*Y+c*V,s[4]=r*w+o*M+l*te+c*ue,s[8]=r*k+o*W+l*z+c*pe,s[12]=r*q+o*K+l*ae+c*de,s[1]=h*P+u*y+d*Y+m*V,s[5]=h*w+u*M+d*te+m*ue,s[9]=h*k+u*W+d*z+m*pe,s[13]=h*q+u*K+d*ae+m*de,s[2]=g*P+v*y+p*Y+f*V,s[6]=g*w+v*M+p*te+f*ue,s[10]=g*k+v*W+p*z+f*pe,s[14]=g*q+v*K+p*ae+f*de,s[3]=x*P+_*y+E*Y+U*V,s[7]=x*w+_*M+E*te+U*ue,s[11]=x*k+_*W+E*z+U*pe,s[15]=x*q+_*K+E*ae+U*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+s*l*u-a*c*u-s*o*d+i*c*d+a*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*r*d-a*r*m+a*c*h-s*l*h)+p*(+t*c*u-t*o*m-s*r*u+i*r*m+s*o*h-i*c*h)+f*(-a*o*h-t*l*u+t*o*d+a*r*u-i*r*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],x=u*p*c-v*d*c+v*l*m-o*p*m-u*l*f+o*d*f,_=g*d*c-h*p*c-g*l*m+r*p*m+h*l*f-r*d*f,E=h*v*c-g*u*c+g*o*m-r*v*m-h*o*f+r*u*f,U=g*u*l-h*v*l-g*o*d+r*v*d+h*o*p-r*u*p,P=t*x+i*_+a*E+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=x*w,e[1]=(v*d*s-u*p*s-v*a*m+i*p*m+u*a*f-i*d*f)*w,e[2]=(o*p*s-v*l*s+v*a*c-i*p*c-o*a*f+i*l*f)*w,e[3]=(u*l*s-o*d*s-u*a*c+i*d*c+o*a*m-i*l*m)*w,e[4]=_*w,e[5]=(h*p*s-g*d*s+g*a*m-t*p*m-h*a*f+t*d*f)*w,e[6]=(g*l*s-r*p*s-g*a*c+t*p*c+r*a*f-t*l*f)*w,e[7]=(r*d*s-h*l*s+h*a*c-t*d*c-r*a*m+t*l*m)*w,e[8]=E*w,e[9]=(g*u*s-h*v*s-g*i*m+t*v*m+h*i*f-t*u*f)*w,e[10]=(r*v*s-g*o*s+g*i*c-t*v*c-r*i*f+t*o*f)*w,e[11]=(h*o*s-r*u*s-h*i*c+t*u*c+r*i*m-t*o*m)*w,e[12]=U*w,e[13]=(h*v*a-g*u*a+g*i*d-t*v*d-h*i*p+t*u*p)*w,e[14]=(g*o*a-r*v*a-g*i*l+t*v*l+r*i*p-t*o*p)*w,e[15]=(r*u*a-h*o*a+h*i*l-t*u*l-r*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,u=o+o,d=s*c,m=s*h,g=s*u,v=r*h,p=r*u,f=o*u,x=l*c,_=l*h,E=l*u,U=i.x,P=i.y,w=i.z;return a[0]=(1-(v+f))*U,a[1]=(m+E)*U,a[2]=(g-_)*U,a[3]=0,a[4]=(m-E)*P,a[5]=(1-(d+f))*P,a[6]=(p+x)*P,a[7]=0,a[8]=(g+_)*w,a[9]=(p-x)*w,a[10]=(1-(d+v))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=ma.set(a[0],a[1],a[2]).length();const r=ma.set(a[4],a[5],a[6]).length(),o=ma.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],ki.copy(this);const c=1/s,h=1/r,u=1/o;return ki.elements[0]*=c,ki.elements[1]*=c,ki.elements[2]*=c,ki.elements[4]*=h,ki.elements[5]*=h,ki.elements[6]*=h,ki.elements[8]*=u,ki.elements[9]*=u,ki.elements[10]*=u,t.setFromRotationMatrix(ki),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,a,s,r,o=hn){const l=this.elements,c=2*s/(t-e),h=2*s/(i-a),u=(t+e)/(t-e),d=(i+a)/(i-a);let m,g;if(o===hn)m=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===Sr)m=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,r,o=hn){const l=this.elements,c=1/(t-e),h=1/(i-a),u=1/(r-s),d=(t+e)*c,m=(i+a)*h;let g,v;if(o===hn)g=(r+s)*u,v=-2*u;else if(o===Sr)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ma=new R,ki=new Rt,Tf=new R(0,0,0),wf=new R(1,1,1),Mn=new R,Ns=new R,yi=new R,pc=new Rt,fc=new ta;class fn{constructor(e=0,t=0,i=0,a=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],u=a[2],d=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(ii(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ii(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ii(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ii(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ii(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ii(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pf=0;const mc=new R,ga=new ta,nn=new Rt,ks=new R,ns=new R,Df=new R,Cf=new ta,gc=new R(1,0,0),vc=new R(0,1,0),_c=new R(0,0,1),yc={type:"added"},Rf={type:"removed"},va={type:"childadded",child:null},Zr={type:"childremoved",child:null};class li extends na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new R,t=new fn,i=new ta,a=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Rt},normalMatrix:{value:new it}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ga.setFromAxisAngle(e,t),this.quaternion.multiply(ga),this}rotateOnWorldAxis(e,t){return ga.setFromAxisAngle(e,t),this.quaternion.premultiply(ga),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ks.copy(e):ks.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(ns,ks,this.up):nn.lookAt(ks,ns,this.up),this.quaternion.setFromRotationMatrix(nn),a&&(nn.extractRotation(a.matrixWorld),ga.setFromRotationMatrix(nn),this.quaternion.premultiply(ga.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yc),va.child=e,this.dispatchEvent(va),va.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yc),va.child=e,this.dispatchEvent(va),va.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,Df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),m=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}li.DEFAULT_UP=new R(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new R,an=new R,Jr=new R,sn=new R,_a=new R,ya=new R,Sc=new R,Qr=new R,eo=new R,to=new R,io=new Nt,no=new Nt,ao=new Nt;class Ti{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Fi.subVectors(e,t),a.cross(Fi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Fi.subVectors(a,t),an.subVectors(i,t),Jr.subVectors(e,t);const r=Fi.dot(Fi),o=Fi.dot(an),l=Fi.dot(Jr),c=an.dot(an),h=an.dot(Jr),u=r*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(r*h-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,i,a,s,r,o,l){return this.getBarycoord(e,t,i,a,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sn.x),l.addScaledVector(r,sn.y),l.addScaledVector(o,sn.z),l)}static getInterpolatedAttribute(e,t,i,a,s,r){return io.setScalar(0),no.setScalar(0),ao.setScalar(0),io.fromBufferAttribute(e,t),no.fromBufferAttribute(e,i),ao.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(io,s.x),r.addScaledVector(no,s.y),r.addScaledVector(ao,s.z),r}static isFrontFacing(e,t,i,a){return Fi.subVectors(i,t),an.subVectors(e,t),Fi.cross(an).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Fi.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return Ti.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let r,o;_a.subVectors(a,i),ya.subVectors(s,i),Qr.subVectors(e,i);const l=_a.dot(Qr),c=ya.dot(Qr);if(l<=0&&c<=0)return t.copy(i);eo.subVectors(e,a);const h=_a.dot(eo),u=ya.dot(eo);if(h>=0&&u<=h)return t.copy(a);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(_a,r);to.subVectors(e,s);const m=_a.dot(to),g=ya.dot(to);if(g>=0&&m<=g)return t.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ya,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Sc.subVectors(s,a),o=(u-h)/(u-h+(m-g)),t.copy(a).addScaledVector(Sc,o);const f=1/(p+v+d);return r=v*f,o=d*f,t.copy(i).addScaledVector(_a,r).addScaledVector(ya,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function so(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=ft.workingColorSpace){if(e=Pl(e,1),t=ii(t,0,1),i=ii(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=so(r,s,e+1/3),this.g=so(r,s,e),this.b=so(r,s,e-1/3)}return ft.toWorkingColorSpace(this,a),this}setStyle(e,t=Oi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oi){const i=yu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oi){return ft.fromWorkingColorSpace(ei.copy(this),e),Math.round(ii(ei.r*255,0,255))*65536+Math.round(ii(ei.g*255,0,255))*256+Math.round(ii(ei.b*255,0,255))}getHexString(e=Oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(ei.copy(this),t);const i=ei.r,a=ei.g,s=ei.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case i:l=(a-s)/u+(a<s?6:0);break;case a:l=(s-i)/u+2;break;case s:l=(i-a)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=Oi){ft.fromWorkingColorSpace(ei.copy(this),e);const t=ei.r,i=ei.g,a=ei.b;return e!==Oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(Fs);const i=us(bn.h,Fs.h,t),a=us(bn.s,Fs.s,t),s=us(bn.l,Fs.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new st;st.NAMES=yu;let If=0;class aa extends na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=Da,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Po,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ha,this.stencilZFail=ha,this.stencilZPass=ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Da&&(i.blending=this.blending),this.side!==Cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wo&&(i.blendSrc=this.blendSrc),this.blendDst!==Po&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ha&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ha&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ha&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ia extends aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new R,Os=new Ke;class Zi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ta(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),i=ni(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),i=ni(i,this.array),a=ni(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),i=ni(i,this.array),a=ni(a,this.array),s=ni(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}}class Su extends Zi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xu extends Zi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends Zi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lf=0;const Ei=new Rt,ro=new li,Sa=new R,Si=new Va,as=new Va,qt=new R;class Tt extends na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mu(e)?xu:Su)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sa).negate(),this.translate(Sa.x,Sa.y,Sa.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];Si.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];as.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Si.min,as.min),Si.expandByPoint(qt),qt.addVectors(Si.max,as.max),Si.expandByPoint(qt)):(Si.expandByPoint(as.min),Si.expandByPoint(as.max))}Si.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)qt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(qt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qt.fromBufferAttribute(o,c),l&&(Sa.fromBufferAttribute(e,c),qt.add(Sa)),a=Math.max(a,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<i.count;k++)o[k]=new R,l[k]=new R;const c=new R,h=new R,u=new R,d=new Ke,m=new Ke,g=new Ke,v=new R,p=new R;function f(k,q,y){c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,q),u.fromBufferAttribute(i,y),d.fromBufferAttribute(s,k),m.fromBufferAttribute(s,q),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),m.sub(d),g.sub(d);const M=1/(m.x*g.y-g.x*m.y);isFinite(M)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(M),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(M),o[k].add(v),o[q].add(v),o[y].add(v),l[k].add(p),l[q].add(p),l[y].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let k=0,q=x.length;k<q;++k){const y=x[k],M=y.start,W=y.count;for(let K=M,Y=M+W;K<Y;K+=3)f(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const _=new R,E=new R,U=new R,P=new R;function w(k){U.fromBufferAttribute(a,k),P.copy(U);const q=o[k];_.copy(q),_.sub(U.multiplyScalar(U.dot(q))).normalize(),E.crossVectors(P,q);const M=E.dot(l[k])<0?-1:1;r.setXYZW(k,_.x,_.y,_.z,M)}for(let k=0,q=x.length;k<q;++k){const y=x[k],M=y.start,W=y.count;for(let K=M,Y=M+W;K<Y;K+=3)w(e.getX(K+0)),w(e.getX(K+1)),w(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const a=new R,s=new R,r=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),h.subVectors(r,s),u.subVectors(a,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)a.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(a,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new Zi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(a[l]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new Rt,zn=new Cr,Bs=new xs,Mc=new R,zs=new R,Gs=new R,Hs=new R,oo=new R,Vs=new R,bc=new R,Ws=new R;class Gt extends li{constructor(e=new Tt,t=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){Vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(oo.fromBufferAttribute(u,e),r?Vs.addScaledVector(oo,h):Vs.addScaledVector(oo.sub(t),h))}t.add(Vs)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(Bs.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Bs,Mc)===null||zn.origin.distanceToSquared(Mc)>(e.far-e.near)**2))&&(xc.copy(s).invert(),zn.copy(e.ray).applyMatrix4(xc),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=r[p.materialIndex],x=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=x,U=_;E<U;E+=3){const P=o.getX(E),w=o.getX(E+1),k=o.getX(E+2);a=Ks(this,f,e,i,c,h,u,P,w,k),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const x=o.getX(p),_=o.getX(p+1),E=o.getX(p+2);a=Ks(this,r,e,i,c,h,u,x,_,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=r[p.materialIndex],x=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=x,U=_;E<U;E+=3){const P=E,w=E+1,k=E+2;a=Ks(this,f,e,i,c,h,u,P,w,k),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const x=p,_=p+1,E=p+2;a=Ks(this,r,e,i,c,h,u,x,_,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Uf(n,e,t,i,a,s,r,o){let l;if(e.side===ri?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===Cn,o),l===null)return null;Ws.copy(o),Ws.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ws);return c<t.near||c>t.far?null:{distance:c,point:Ws.clone(),object:n}}function Ks(n,e,t,i,a,s,r,o,l,c){n.getVertexPosition(o,zs),n.getVertexPosition(l,Gs),n.getVertexPosition(c,Hs);const h=Uf(n,e,t,i,zs,Gs,Hs,bc);if(h){const u=new R;Ti.getBarycoord(bc,zs,Gs,Hs,u),a&&(h.uv=Ti.getInterpolatedAttribute(a,o,l,c,u,new Ke)),s&&(h.uv1=Ti.getInterpolatedAttribute(s,o,l,c,u,new Ke)),r&&(h.normal=Ti.getInterpolatedAttribute(r,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new R,materialIndex:0};Ti.getNormal(zs,Gs,Hs,d.normal),h.face=d,h.barycoord=u}return h}class Wa extends Tt{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,a,r,2),g("x","z","y",1,-1,e,i,-t,a,r,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(v,p,f,x,_,E,U,P,w,k,q){const y=E/w,M=U/k,W=E/2,K=U/2,Y=P/2,te=w+1,z=k+1;let ae=0,V=0;const ue=new R;for(let pe=0;pe<z;pe++){const de=pe*M-K;for(let Oe=0;Oe<te;Oe++){const Ue=Oe*y-W;ue[v]=Ue*x,ue[p]=de*_,ue[f]=Y,c.push(ue.x,ue.y,ue.z),ue[v]=0,ue[p]=0,ue[f]=P>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(Oe/w),u.push(1-pe/k),ae+=1}}for(let pe=0;pe<k;pe++)for(let de=0;de<w;de++){const Oe=d+de+te*pe,Ue=d+de+te*(pe+1),I=d+(de+1)+te*(pe+1),D=d+(de+1)+te*pe;l.push(Oe,Ue,D),l.push(Ue,I,D),V+=6}o.addGroup(m,V,q),m+=V,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function ai(n){const e={};for(let t=0;t<n.length;t++){const i=Oa(n[t]);for(const a in i)e[a]=i[a]}return e}function Nf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const _s={clone:Oa,merge:ai};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yt extends aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oa(e.uniforms),this.uniformsGroups=Nf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bu extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new R,Ec=new Ke,Ac=new Ke;class Ai extends bu{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,Ac),t.subVectors(Ac,Ec)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xa=-90,Ma=1;class Of extends li{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ai(xa,Ma,e,t);a.layers=this.layers,this.add(a);const s=new Ai(xa,Ma,e,t);s.layers=this.layers,this.add(s);const r=new Ai(xa,Ma,e,t);r.layers=this.layers,this.add(r);const o=new Ai(xa,Ma,e,t);o.layers=this.layers,this.add(o);const l=new Ai(xa,Ma,e,t);l.layers=this.layers,this.add(l);const c=new Ai(xa,Ma,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===hn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,r),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Eu extends oi{constructor(e,t,i,a,s,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ua,super(e,t,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bf extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Eu(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Wa(5,5,5),s=new yt({name:"CubemapFromEquirect",uniforms:Oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:un});s.uniforms.tEquirect.value=t;const r=new Gt(a,s),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=zi),new Of(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}}const lo=new R,zf=new R,Gf=new it;class Tn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=lo.subVectors(i,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(lo),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gf.getNormalMatrix(e),a=this.coplanarPoint(lo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new xs,Xs=new R;class Au{constructor(e=new Tn,t=new Tn,i=new Tn,a=new Tn,s=new Tn,r=new Tn){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hn){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],h=a[5],u=a[6],d=a[7],m=a[8],g=a[9],v=a[10],p=a[11],f=a[12],x=a[13],_=a[14],E=a[15];if(i[0].setComponents(l-s,d-c,p-m,E-f).normalize(),i[1].setComponents(l+s,d+c,p+m,E+f).normalize(),i[2].setComponents(l+r,d+h,p+g,E+x).normalize(),i[3].setComponents(l-r,d-h,p-g,E-x).normalize(),i[4].setComponents(l-o,d-u,p-v,E-_).normalize(),t===hn)i[5].setComponents(l+o,d+u,p+v,E+_).normalize();else if(t===Sr)i[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Xs.x=a.normal.x>0?e.max.x:e.min.x,Xs.y=a.normal.y>0?e.max.y:e.min.y,Xs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tu(){let n=null,e=!1,t=null,i=null;function a(s,r){t(s,r),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hf(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}class Ka extends Tt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,u=e/o,d=t/l,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){const x=f*d-r;for(let _=0;_<c;_++){const E=_*u-s;g.push(E,-x,0),v.push(0,0,1),p.push(_/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const _=x+c*f,E=x+c*(f+1),U=x+1+c*(f+1),P=x+1+c*f;m.push(_,E,P),m.push(E,U,P)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
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
#endif`,Kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
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
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
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
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i1=`#ifdef USE_IRIDESCENCE
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
#endif`,n1=`#ifdef USE_BUMPMAP
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
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d1=`#define PI 3.141592653589793
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
} // validated`,p1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f1=`vec3 transformedNormal = objectNormal;
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
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",S1=`
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
}`,x1=`#ifdef USE_ENVMAP
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
#endif`,M1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
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
}`,R1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U1=`uniform bool receiveShadow;
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
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,k1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z1=`PhysicalMaterial material;
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
#endif`,G1=`struct PhysicalMaterial {
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
}`,H1=`
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
#endif`,V1=`#if defined( RE_IndirectDiffuse )
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
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J1=`#if defined( USE_POINTS_UV )
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
#endif`,Q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,I0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
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
}`,j0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,nm=`uniform vec3 diffuse;
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
}`,am=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
}`,rm=`#define MATCAP
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
}`,om=`#define MATCAP
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
}`,lm=`#define NORMAL
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
}`,cm=`#define NORMAL
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
}`,hm=`#define PHONG
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
}`,um=`#define PHONG
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
}`,dm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
}`,fm=`#define TOON
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
}`,mm=`#define TOON
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
}`,gm=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,ym=`uniform vec3 color;
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
}`,Sm=`uniform float rotation;
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
}`,xm=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Vf,alphahash_pars_fragment:Wf,alphamap_fragment:Kf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:jf,aomap_pars_fragment:$f,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:Qf,beginnormal_vertex:e1,bsdfs:t1,iridescence_fragment:i1,bumpmap_pars_fragment:n1,clipping_planes_fragment:a1,clipping_planes_pars_fragment:s1,clipping_planes_pars_vertex:r1,clipping_planes_vertex:o1,color_fragment:l1,color_pars_fragment:c1,color_pars_vertex:h1,color_vertex:u1,common:d1,cube_uv_reflection_fragment:p1,defaultnormal_vertex:f1,displacementmap_pars_vertex:m1,displacementmap_vertex:g1,emissivemap_fragment:v1,emissivemap_pars_fragment:_1,colorspace_fragment:y1,colorspace_pars_fragment:S1,envmap_fragment:x1,envmap_common_pars_fragment:M1,envmap_pars_fragment:b1,envmap_pars_vertex:E1,envmap_physical_pars_fragment:N1,envmap_vertex:A1,fog_vertex:T1,fog_pars_vertex:w1,fog_fragment:P1,fog_pars_fragment:D1,gradientmap_pars_fragment:C1,lightmap_pars_fragment:R1,lights_lambert_fragment:I1,lights_lambert_pars_fragment:L1,lights_pars_begin:U1,lights_toon_fragment:k1,lights_toon_pars_fragment:F1,lights_phong_fragment:O1,lights_phong_pars_fragment:B1,lights_physical_fragment:z1,lights_physical_pars_fragment:G1,lights_fragment_begin:H1,lights_fragment_maps:V1,lights_fragment_end:W1,logdepthbuf_fragment:K1,logdepthbuf_pars_fragment:X1,logdepthbuf_pars_vertex:q1,logdepthbuf_vertex:Y1,map_fragment:j1,map_pars_fragment:$1,map_particle_fragment:Z1,map_particle_pars_fragment:J1,metalnessmap_fragment:Q1,metalnessmap_pars_fragment:e0,morphinstance_vertex:t0,morphcolor_vertex:i0,morphnormal_vertex:n0,morphtarget_pars_vertex:a0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:o0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:v0,premultiplied_alpha_fragment:_0,project_vertex:y0,dithering_fragment:S0,dithering_pars_fragment:x0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:A0,shadowmap_vertex:T0,shadowmask_pars_fragment:w0,skinbase_vertex:P0,skinning_pars_vertex:D0,skinning_vertex:C0,skinnormal_vertex:R0,specularmap_fragment:I0,specularmap_pars_fragment:L0,tonemapping_fragment:U0,tonemapping_pars_fragment:N0,transmission_fragment:k0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:G0,background_vert:H0,background_frag:V0,backgroundCube_vert:W0,backgroundCube_frag:K0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:j0,distanceRGBA_vert:$0,distanceRGBA_frag:Z0,equirect_vert:J0,equirect_frag:Q0,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:im,meshbasic_frag:nm,meshlambert_vert:am,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:om,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:hm,meshphong_frag:um,meshphysical_vert:dm,meshphysical_frag:pm,meshtoon_vert:fm,meshtoon_frag:mm,points_vert:gm,points_frag:vm,shadow_vert:_m,shadow_frag:ym,sprite_vert:Sm,sprite_frag:xm},Pe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ji={basic:{uniforms:ai([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:ai([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:ai([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:ai([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:ai([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:ai([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:ai([Pe.points,Pe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:ai([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:ai([Pe.common,Pe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:ai([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:ai([Pe.sprite,Pe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:ai([Pe.common,Pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:ai([Pe.lights,Pe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ji.physical={uniforms:ai([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const qs={r:0,b:0,g:0},Hn=new fn,Mm=new Rt;function bm(n,e,t,i,a,s,r){const o=new st(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const E=g(x);E===null?f(o,l):E&&E.isColor&&(f(E,1),_=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(x,_){const E=g(_);E&&(E.isCubeTexture||E.mapping===Pr)?(h===void 0&&(h=new Gt(new Wa(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Oa(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Hn.copy(_.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Hn)),h.material.toneMapped=ft.getTransfer(E.colorSpace)!==bt,(u!==E||d!==E.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,m=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Gt(new Ka(2,2),new yt({name:"BackgroundMaterial",uniforms:Oa(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ft.getTransfer(E.colorSpace)!==bt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,m=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(qs,Mu(n)),i.buffers.color.setClear(qs.r,qs.g,qs.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:v,addToRenderList:p}}function Em(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=d(null);let s=a,r=!1;function o(y,M,W,K,Y){let te=!1;const z=u(K,W,M);s!==z&&(s=z,c(s.object)),te=m(y,K,W,Y),te&&g(y,K,W,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(te||r)&&(r=!1,E(y,M,W,K),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,M,W){const K=W.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let te=Y[M.id];te===void 0&&(te={},Y[M.id]=te);let z=te[K];return z===void 0&&(z=d(l()),te[K]=z),z}function d(y){const M=[],W=[],K=[];for(let Y=0;Y<t;Y++)M[Y]=0,W[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:W,attributeDivisors:K,object:y,attributes:{},index:null}}function m(y,M,W,K){const Y=s.attributes,te=M.attributes;let z=0;const ae=W.getAttributes();for(const V in ae)if(ae[V].location>=0){const pe=Y[V];let de=te[V];if(de===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),pe===void 0||pe.attribute!==de||de&&pe.data!==de.data)return!0;z++}return s.attributesNum!==z||s.index!==K}function g(y,M,W,K){const Y={},te=M.attributes;let z=0;const ae=W.getAttributes();for(const V in ae)if(ae[V].location>=0){let pe=te[V];pe===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor));const de={};de.attribute=pe,pe&&pe.data&&(de.data=pe.data),Y[V]=de,z++}s.attributes=Y,s.attributesNum=z,s.index=K}function v(){const y=s.newAttributes;for(let M=0,W=y.length;M<W;M++)y[M]=0}function p(y){f(y,0)}function f(y,M){const W=s.newAttributes,K=s.enabledAttributes,Y=s.attributeDivisors;W[y]=1,K[y]===0&&(n.enableVertexAttribArray(y),K[y]=1),Y[y]!==M&&(n.vertexAttribDivisor(y,M),Y[y]=M)}function x(){const y=s.newAttributes,M=s.enabledAttributes;for(let W=0,K=M.length;W<K;W++)M[W]!==y[W]&&(n.disableVertexAttribArray(W),M[W]=0)}function _(y,M,W,K,Y,te,z){z===!0?n.vertexAttribIPointer(y,M,W,Y,te):n.vertexAttribPointer(y,M,W,K,Y,te)}function E(y,M,W,K){v();const Y=K.attributes,te=W.getAttributes(),z=M.defaultAttributeValues;for(const ae in te){const V=te[ae];if(V.location>=0){let ue=Y[ae];if(ue===void 0&&(ae==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),ae==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),ue!==void 0){const pe=ue.normalized,de=ue.itemSize,Oe=e.get(ue);if(Oe===void 0)continue;const Ue=Oe.buffer,I=Oe.type,D=Oe.bytesPerElement,B=I===n.INT||I===n.UNSIGNED_INT||ue.gpuType===xl;if(ue.isInterleavedBufferAttribute){const ie=ue.data,ce=ie.stride,se=ue.offset;if(ie.isInstancedInterleavedBuffer){for(let re=0;re<V.locationSize;re++)f(V.location+re,ie.meshPerAttribute);y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<V.locationSize;re++)p(V.location+re);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let re=0;re<V.locationSize;re++)_(V.location+re,de/V.locationSize,I,pe,ce*D,(se+de/V.locationSize*re)*D,B)}else{if(ue.isInstancedBufferAttribute){for(let ie=0;ie<V.locationSize;ie++)f(V.location+ie,ue.meshPerAttribute);y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ie=0;ie<V.locationSize;ie++)p(V.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let ie=0;ie<V.locationSize;ie++)_(V.location+ie,de/V.locationSize,I,pe,de*D,de/V.locationSize*ie*D,B)}}else if(z!==void 0){const pe=z[ae];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(V.location,pe);break;case 3:n.vertexAttrib3fv(V.location,pe);break;case 4:n.vertexAttrib4fv(V.location,pe);break;default:n.vertexAttrib1fv(V.location,pe)}}}}x()}function U(){k();for(const y in i){const M=i[y];for(const W in M){const K=M[W];for(const Y in K)h(K[Y].object),delete K[Y];delete M[W]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const W in M){const K=M[W];for(const Y in K)h(K[Y].object),delete K[Y];delete M[W]}delete i[y.id]}function w(y){for(const M in i){const W=i[M];if(W[y.id]===void 0)continue;const K=W[y.id];for(const Y in K)h(K[Y].object),delete K[Y];delete W[y.id]}}function k(){q(),r=!0,s!==a&&(s=a,c(s.object))}function q(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:k,resetDefaultState:q,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function Am(n,e,t){let i;function a(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function r(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,i,1)}function l(c,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)t.update(g,i,d[v])}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tm(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(w){return!(w!==Gi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const k=w===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==pn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==cn&&!k)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:U,maxSamples:P}}function wm(n){const e=this;let t=null,i=0,a=!1,s=!1;const r=new Tn,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||a;return a=d,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!a||g===null||g.length===0||s&&!p)s?h(null):c();else{const x=s?0:i,_=x*4;let E=f.clippingState||null;l.value=E,E=h(g,d,_,m);for(let U=0;U!==_;++U)E[U]=t[U];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const f=m+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,E=m;_!==v;++_,E+=4)r.copy(u[_]).applyMatrix4(x,o),r.normal.toArray(p,E),p[E+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Pm(n){let e=new WeakMap;function t(r,o){return o===ko?r.mapping=Ua:o===Fo&&(r.mapping=Na),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===ko||o===Fo)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Bf(l.height);return c.fromEquirectangularTexture(n,r),e.set(r,c),r.addEventListener("dispose",a),t(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Dl extends bu{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pa=4,Tc=[.125,.215,.35,.446,.526,.582],jn=20,co=new Dl,wc=new st;let ho=null,uo=0,po=0,fo=!1;const Xn=(1+Math.sqrt(5))/2,ba=1/Xn,Pc=[new R(-Xn,ba,0),new R(Xn,ba,0),new R(-ba,0,Xn),new R(ba,0,Xn),new R(0,Xn,-ba),new R(0,Xn,ba),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,uo,po),this._renderer.xr.enabled=fo,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ua||e.mapping===Na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:dn,format:Gi,colorSpace:In,depthBuffer:!1},a=Cc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dm(s)),this._blurMaterial=Cm(s,e,t)}return a}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,i,a){const o=new Ai(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wc),h.toneMapping=Dn,h.autoClear=!1;const m=new ia({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),g=new Gt(new Wa,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(wc),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;Ys(a,x*_,f>2?_:0,_,_),h.setRenderTarget(a),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ua||e.mapping===Na;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new Gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ys(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,co)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pc[(a-s-1)%Pc.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Gt(this._lodPlanes[a],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jn-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):jn;p>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jn}`);const f=[];let x=0;for(let w=0;w<jn;++w){const k=w/v,q=Math.exp(-k*k/2);f.push(q),w===0?x+=q:w<p&&(x+=2*q)}for(let w=0;w<f.length;w++)f[w]=f[w]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const E=this._sizeLods[a],U=3*E*(a>_-Pa?a-_+Pa:0),P=4*(this._cubeSize-E);Ys(t,U,P,3*E,2*E),l.setRenderTarget(t),l.render(u,co)}}function Dm(n){const e=[],t=[],i=[];let a=n;const s=n-Pa+1+Tc.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>n-Pa?l=Tc[r-n+Pa-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,f=1,x=new Float32Array(v*g*m),_=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let P=0;P<m;P++){const w=P%3*2/3-1,k=P>2?0:-1,q=[w,k,0,w+2/3,k,0,w+2/3,k+1,0,w,k,0,w+2/3,k+1,0,w,k+1,0];x.set(q,v*g*P),_.set(d,p*g*P);const y=[P,P,P,P,P,P];E.set(y,f*g*P)}const U=new Tt;U.setAttribute("position",new Zi(x,v)),U.setAttribute("uv",new Zi(_,p)),U.setAttribute("faceIndex",new Zi(E,f)),e.push(U),a>Pa&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cc(n,e,t){const i=new Vi(n,e,t);return i.texture.mapping=Pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ys(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Cm(n,e,t){const i=new Float32Array(jn),a=new R(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Rc(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Ic(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function Rm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ko||l===Fo,h=l===Ua||l===Na;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Dc(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&a(m)?(t===null&&(t=new Dc(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function a(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Im(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Lm(n,e,t,i){const a={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",r),delete a[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",r),a[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let _=0,E=x.length;_<E;_+=3){const U=x[_+0],P=x[_+1],w=x[_+2];d.push(U,P,P,w,w,U)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,E=x.length/3-1;_<E;_+=3){const U=_+0,P=_+1,w=_+2;d.push(U,P,P,w,w,U)}}else return;const p=new(mu(d)?xu:Su)(d,1);p.version=v;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Um(n,e,t){let i;function a(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*r),t.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*r,g),t.update(m,i,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,i,1)}function u(d,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/r,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=m[x];for(let x=0;x<v.length;x++)t.update(f,i,v[x])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Nm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function km(n,e,t){const i=new WeakMap,a=new Nt;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let q=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let E=o.attributes.position.count*_,U=1;E>e.maxTextureSize&&(U=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const P=new Float32Array(E*U*4*u),w=new vu(P,E,U,u);w.type=cn,w.needsUpdate=!0;const k=_*4;for(let y=0;y<u;y++){const M=p[y],W=f[y],K=x[y],Y=E*U*4*y;for(let te=0;te<M.count;te++){const z=te*k;m===!0&&(a.fromBufferAttribute(M,te),P[Y+z+0]=a.x,P[Y+z+1]=a.y,P[Y+z+2]=a.z,P[Y+z+3]=0),g===!0&&(a.fromBufferAttribute(W,te),P[Y+z+4]=a.x,P[Y+z+5]=a.y,P[Y+z+6]=a.z,P[Y+z+7]=0),v===!0&&(a.fromBufferAttribute(K,te),P[Y+z+8]=a.x,P[Y+z+9]=a.y,P[Y+z+10]=a.z,P[Y+z+11]=K.itemSize===4?a.w:1)}}d={count:u,texture:w,size:new Ke(E,U)},i.set(o,d),o.addEventListener("dispose",q)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Fm(n,e,t,i){let a=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(a.get(u)!==c&&(e.update(u),a.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return u}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class wu extends oi{constructor(e,t,i,a,s,r,o,l,c,h=Ca){if(h!==Ca&&h!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ca&&(i=ea),i===void 0&&h===Fa&&(i=ka),super(null,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wi,this.minFilter=l!==void 0?l:wi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Pu=new oi,Lc=new wu(1,1),Du=new vu,Cu=new Ef,Ru=new Eu,Uc=[],Nc=[],kc=new Float32Array(16),Fc=new Float32Array(9),Oc=new Float32Array(4);function Xa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=Uc[a];if(s===void 0&&(s=new Float32Array(a),Uc[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(s,o)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rr(n,e){let t=Nc[e];t===void 0&&(t=new Int32Array(e),Nc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function Gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function Hm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Oc.set(i),n.uniformMatrix2fv(this.addr,!1,Oc),Vt(t,i)}}function Vm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Fc.set(i),n.uniformMatrix3fv(this.addr,!1,Fc),Vt(t,i)}}function Wm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;kc.set(i),n.uniformMatrix4fv(this.addr,!1,kc),Vt(t,i)}}function Km(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function jm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function Zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function Qm(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(Lc.compareFunction=fu,s=Lc):s=Pu,t.setTexture2D(e||s,a)}function e2(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Cu,a)}function t2(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Ru,a)}function i2(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Du,a)}function n2(n){switch(n){case 5126:return Om;case 35664:return Bm;case 35665:return zm;case 35666:return Gm;case 35674:return Hm;case 35675:return Vm;case 35676:return Wm;case 5124:case 35670:return Km;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return jm;case 36294:return $m;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return i2}}function a2(n,e){n.uniform1fv(this.addr,e)}function s2(n,e){const t=Xa(e,this.size,2);n.uniform2fv(this.addr,t)}function r2(n,e){const t=Xa(e,this.size,3);n.uniform3fv(this.addr,t)}function o2(n,e){const t=Xa(e,this.size,4);n.uniform4fv(this.addr,t)}function l2(n,e){const t=Xa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c2(n,e){const t=Xa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function h2(n,e){const t=Xa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function u2(n,e){n.uniform1iv(this.addr,e)}function d2(n,e){n.uniform2iv(this.addr,e)}function p2(n,e){n.uniform3iv(this.addr,e)}function f2(n,e){n.uniform4iv(this.addr,e)}function m2(n,e){n.uniform1uiv(this.addr,e)}function g2(n,e){n.uniform2uiv(this.addr,e)}function v2(n,e){n.uniform3uiv(this.addr,e)}function _2(n,e){n.uniform4uiv(this.addr,e)}function y2(n,e,t){const i=this.cache,a=e.length,s=Rr(t,a);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||Pu,s[r])}function S2(n,e,t){const i=this.cache,a=e.length,s=Rr(t,a);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||Cu,s[r])}function x2(n,e,t){const i=this.cache,a=e.length,s=Rr(t,a);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||Ru,s[r])}function M2(n,e,t){const i=this.cache,a=e.length,s=Rr(t,a);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||Du,s[r])}function b2(n){switch(n){case 5126:return a2;case 35664:return s2;case 35665:return r2;case 35666:return o2;case 35674:return l2;case 35675:return c2;case 35676:return h2;case 5124:case 35670:return u2;case 35667:case 35671:return d2;case 35668:case 35672:return p2;case 35669:case 35673:return f2;case 5125:return m2;case 36294:return g2;case 36295:return v2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return S2;case 35680:case 36300:case 36308:case 36293:return x2;case 36289:case 36303:case 36311:case 36292:return M2}}class E2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=n2(t.type)}}class A2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b2(t.type)}}class T2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],i)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Bc(n,e){n.seq.push(e),n.map[e.id]=e}function w2(n,e,t){const i=n.name,a=i.length;for(mo.lastIndex=0;;){const s=mo.exec(i),r=mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Bc(t,c===void 0?new E2(o,n,e):new A2(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new T2(o),Bc(t,u)),t=u}}}class mr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);w2(s,r,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&i.push(r)}return i}}function zc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const P2=37297;let D2=0;function C2(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}function R2(n){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(n);let i;switch(e===t?i="":e===yr&&t===_r?i="LinearDisplayP3ToLinearSRGB":e===_r&&t===yr&&(i="LinearSRGBToLinearDisplayP3"),n){case In:case Dr:return[i,"LinearTransferOETF"];case Oi:case wl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Gc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+C2(n.getShaderSource(e),r)}else return a}function I2(n,e){const t=R2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function L2(n,e){let t;switch(e){case Zh:t="Linear";break;case Jh:t="Reinhard";break;case Qh:t="Cineon";break;case eu:t="ACESFilmic";break;case tu:t="AgX";break;case iu:t="Neutral";break;case Bp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new R;function U2(){ft.getLuminanceCoefficients(js);const n=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function k2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function F2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function ls(n){return n!==""}function Hc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O2=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(n){return n.replace(O2,z2)}const B2=new Map;function z2(n,e){let t=tt[e];if(t===void 0){const i=B2.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dl(t)}const G2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(n){return n.replace(G2,H2)}function H2(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Kc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function V2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_p?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function W2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ua:case Na:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Na:e="ENVMAP_MODE_REFRACTION";break}return e}function X2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $h:e="ENVMAP_BLENDING_MULTIPLY";break;case Fp:e="ENVMAP_BLENDING_MIX";break;case Op:e="ENVMAP_BLENDING_ADD";break}return e}function q2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Y2(n,e,t,i){const a=n.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=V2(t),c=W2(t),h=K2(t),u=X2(t),d=q2(t),m=N2(t),g=k2(s),v=a.createProgram();let p,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(p=[Kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[Kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Dn?L2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,I2("linearToOutputTexel",t.outputColorSpace),U2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),r=dl(r),r=Hc(r,t),r=Vc(r,t),o=dl(o),o=Hc(o,t),o=Vc(o,t),r=Wc(r),o=Wc(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+p+r,E=x+f+o,U=zc(a,a.VERTEX_SHADER,_),P=zc(a,a.FRAGMENT_SHADER,E);a.attachShader(v,U),a.attachShader(v,P),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function w(M){if(n.debug.checkShaderErrors){const W=a.getProgramInfoLog(v).trim(),K=a.getShaderInfoLog(U).trim(),Y=a.getShaderInfoLog(P).trim();let te=!0,z=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,v,U,P);else{const ae=Gc(a,U,"vertex"),V=Gc(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+W+`
`+ae+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(K===""||Y==="")&&(z=!1);z&&(M.diagnostics={runnable:te,programLog:W,vertexShader:{log:K,prefix:p},fragmentShader:{log:Y,prefix:f}})}a.deleteShader(U),a.deleteShader(P),k=new mr(a,v),q=F2(a,v)}let k;this.getUniforms=function(){return k===void 0&&w(this),k};let q;this.getAttributes=function(){return q===void 0&&w(this),q};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(v,P2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=P,this}let j2=0;class $2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Z2(e),t.set(e,i)),i}}class Z2{constructor(e){this.id=j2++,this.code=e,this.usedTimes=0}}function J2(n,e,t,i,a,s,r){const o=new _u,l=new $2,c=new Set,h=[],u=a.logarithmicDepthBuffer,d=a.reverseDepthBuffer,m=a.vertexTextures;let g=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,M,W,K,Y){const te=K.fog,z=Y.geometry,ae=y.isMeshStandardMaterial?K.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||ae),ue=V&&V.mapping===Pr?V.image.height:null,pe=v[y.type];y.precision!==null&&(g=a.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const de=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Oe=de!==void 0?de.length:0;let Ue=0;z.morphAttributes.position!==void 0&&(Ue=1),z.morphAttributes.normal!==void 0&&(Ue=2),z.morphAttributes.color!==void 0&&(Ue=3);let I,D,B,ie;if(pe){const Wt=ji[pe];I=Wt.vertexShader,D=Wt.fragmentShader}else I=y.vertexShader,D=y.fragmentShader,l.update(y),B=l.getVertexShaderID(y),ie=l.getFragmentShaderID(y);const ce=n.getRenderTarget(),se=Y.isInstancedMesh===!0,re=Y.isBatchedMesh===!0,xe=!!y.map,ge=!!y.matcap,L=!!V,qe=!!y.aoMap,We=!!y.lightMap,Ve=!!y.bumpMap,Me=!!y.normalMap,Qe=!!y.displacementMap,Ae=!!y.emissiveMap,A=!!y.metalnessMap,S=!!y.roughnessMap,H=y.anisotropy>0,Q=y.clearcoat>0,Z=y.dispersion>0,$=y.iridescence>0,me=y.sheen>0,ve=y.transmission>0,_e=H&&!!y.anisotropyMap,Ze=Q&&!!y.clearcoatMap,fe=Q&&!!y.clearcoatNormalMap,Te=Q&&!!y.clearcoatRoughnessMap,Ee=$&&!!y.iridescenceMap,we=$&&!!y.iridescenceThicknessMap,Le=me&&!!y.sheenColorMap,$e=me&&!!y.sheenRoughnessMap,Ye=!!y.specularMap,ct=!!y.specularColorMap,N=!!y.specularIntensityMap,Ce=ve&&!!y.transmissionMap,J=ve&&!!y.thicknessMap,oe=!!y.gradientMap,De=!!y.alphaMap,Ie=y.alphaTest>0,ot=!!y.alphaHash,wt=!!y.extensions;let Zt=Dn;y.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Zt=n.toneMapping);const lt={shaderID:pe,shaderType:y.type,shaderName:y.name,vertexShader:I,fragmentShader:D,defines:y.defines,customVertexShaderID:B,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:re,batchingColor:re&&Y._colorsTexture!==null,instancing:se,instancingColor:se&&Y.instanceColor!==null,instancingMorph:se&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:In,alphaToCoverage:!!y.alphaToCoverage,map:xe,matcap:ge,envMap:L,envMapMode:L&&V.mapping,envMapCubeUVHeight:ue,aoMap:qe,lightMap:We,bumpMap:Ve,normalMap:Me,displacementMap:m&&Qe,emissiveMap:Ae,normalMapObjectSpace:Me&&y.normalMapType===Wp,normalMapTangentSpace:Me&&y.normalMapType===Vp,metalnessMap:A,roughnessMap:S,anisotropy:H,anisotropyMap:_e,clearcoat:Q,clearcoatMap:Ze,clearcoatNormalMap:fe,clearcoatRoughnessMap:Te,dispersion:Z,iridescence:$,iridescenceMap:Ee,iridescenceThicknessMap:we,sheen:me,sheenColorMap:Le,sheenRoughnessMap:$e,specularMap:Ye,specularColorMap:ct,specularIntensityMap:N,transmission:ve,transmissionMap:Ce,thicknessMap:J,gradientMap:oe,opaque:y.transparent===!1&&y.blending===Da&&y.alphaToCoverage===!1,alphaMap:De,alphaTest:Ie,alphaHash:ot,combine:y.combine,mapUv:xe&&p(y.map.channel),aoMapUv:qe&&p(y.aoMap.channel),lightMapUv:We&&p(y.lightMap.channel),bumpMapUv:Ve&&p(y.bumpMap.channel),normalMapUv:Me&&p(y.normalMap.channel),displacementMapUv:Qe&&p(y.displacementMap.channel),emissiveMapUv:Ae&&p(y.emissiveMap.channel),metalnessMapUv:A&&p(y.metalnessMap.channel),roughnessMapUv:S&&p(y.roughnessMap.channel),anisotropyMapUv:_e&&p(y.anisotropyMap.channel),clearcoatMapUv:Ze&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:$e&&p(y.sheenRoughnessMap.channel),specularMapUv:Ye&&p(y.specularMap.channel),specularColorMapUv:ct&&p(y.specularColorMap.channel),specularIntensityMapUv:N&&p(y.specularIntensityMap.channel),transmissionMapUv:Ce&&p(y.transmissionMap.channel),thicknessMapUv:J&&p(y.thicknessMap.channel),alphaMapUv:De&&p(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Me||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!z.attributes.uv&&(xe||De),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:xe&&y.map.isVideoTexture===!0&&ft.getTransfer(y.map.colorSpace)===bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bi,flipSided:y.side===ri,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:wt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&y.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function x(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)M.push(W),M.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(_(M,y),E(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function _(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),y.push(o.mask)}function U(y){const M=v[y.type];let W;if(M){const K=ji[M];W=_s.clone(K.uniforms)}else W=y.uniforms;return W}function P(y,M){let W;for(let K=0,Y=h.length;K<Y;K++){const te=h[K];if(te.cacheKey===M){W=te,++W.usedTimes;break}}return W===void 0&&(W=new Y2(n,M,y,s),h.push(W)),W}function w(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function k(y){l.remove(y)}function q(){l.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:U,acquireProgram:P,releaseProgram:w,releaseShaderCache:k,programs:h,dispose:q}}function Q2(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function a(r,o,l){n.get(r)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function e3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qc(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(u,d,m,g,v,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),e++,f}function o(u,d,m,g,v,p){const f=r(u,d,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?a.push(f):t.push(f)}function l(u,d,m,g,v,p){const f=r(u,d,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?a.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||e3),i.length>1&&i.sort(d||Xc),a.length>1&&a.sort(d||Xc)}function h(){for(let u=e,d=n.length;u<d;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:h,sort:c}}function t3(){let n=new WeakMap;function e(i,a){const s=n.get(i);let r;return s===void 0?(r=new qc,n.set(i,[r])):a>=s.length?(r=new qc,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function i3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new st};break;case"SpotLight":t={position:new R,direction:new R,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function n3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let a3=0;function s3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function r3(n){const e=new i3,t=n3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const a=new R,s=new Rt,r=new Rt;function o(c){let h=0,u=0,d=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,x=0,_=0,E=0,U=0,P=0,w=0;c.sort(s3);for(let q=0,y=c.length;q<y;q++){const M=c[q],W=M.color,K=M.intensity,Y=M.distance,te=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=W.r*K,u+=W.g*K,d+=W.b*K;else if(M.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(M.sh.coefficients[z],K);w++}else if(M.isDirectionalLight){const z=e.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const ae=M.shadow,V=t.get(M);V.shadowIntensity=ae.intensity,V.shadowBias=ae.bias,V.shadowNormalBias=ae.normalBias,V.shadowRadius=ae.radius,V.shadowMapSize=ae.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=M.shadow.matrix,x++}i.directional[m]=z,m++}else if(M.isSpotLight){const z=e.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(W).multiplyScalar(K),z.distance=Y,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,i.spot[v]=z;const ae=M.shadow;if(M.map&&(i.spotLightMap[U]=M.map,U++,ae.updateMatrices(M),M.castShadow&&P++),i.spotLightMatrix[v]=ae.matrix,M.castShadow){const V=t.get(M);V.shadowIntensity=ae.intensity,V.shadowBias=ae.bias,V.shadowNormalBias=ae.normalBias,V.shadowRadius=ae.radius,V.shadowMapSize=ae.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=te,E++}v++}else if(M.isRectAreaLight){const z=e.get(M);z.color.copy(W).multiplyScalar(K),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),i.rectArea[p]=z,p++}else if(M.isPointLight){const z=e.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const ae=M.shadow,V=t.get(M);V.shadowIntensity=ae.intensity,V.shadowBias=ae.bias,V.shadowNormalBias=ae.normalBias,V.shadowRadius=ae.radius,V.shadowMapSize=ae.mapSize,V.shadowCameraNear=ae.camera.near,V.shadowCameraFar=ae.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=M.shadow.matrix,_++}i.point[g]=z,g++}else if(M.isHemisphereLight){const z=e.get(M);z.skyColor.copy(M.color).multiplyScalar(K),z.groundColor.copy(M.groundColor).multiplyScalar(K),i.hemi[f]=z,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const k=i.hash;(k.directionalLength!==m||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==p||k.hemiLength!==f||k.numDirectionalShadows!==x||k.numPointShadows!==_||k.numSpotShadows!==E||k.numSpotMaps!==U||k.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=w,k.directionalLength=m,k.pointLength=g,k.spotLength=v,k.rectAreaLength=p,k.hemiLength=f,k.numDirectionalShadows=x,k.numPointShadows=_,k.numSpotShadows=E,k.numSpotMaps=U,k.numLightProbes=w,i.version=a3++)}function l(c,h){let u=0,d=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(p),u++}else if(_.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),r.identity(),s.copy(_.matrixWorld),s.premultiply(p),r.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:i}}function Yc(n){const e=new r3(n),t=[],i=[];function a(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function r(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function o3(n){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new Yc(n),e.set(a,[o])):s>=r.length?(o=new Yc(n),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class l3 extends aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c3 extends aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u3=`uniform sampler2D shadow_pass;
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
}`;function d3(n,e,t){let i=new Au;const a=new Ke,s=new Ke,r=new Nt,o=new l3({depthPacking:Hp}),l=new c3,c={},h=t.maxTextureSize,u={[Cn]:ri,[ri]:Cn,[Bi]:Bi},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:h3,fragmentShader:u3}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Gt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let f=this.type;this.render=function(P,w,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const q=n.getRenderTarget(),y=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),W=n.state;W.setBlending(un),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const K=f!==on&&this.type===on,Y=f===on&&this.type!==on;for(let te=0,z=P.length;te<z;te++){const ae=P[te],V=ae.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const ue=V.getFrameExtents();if(a.multiply(ue),s.copy(V.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/ue.x),a.x=s.x*ue.x,V.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/ue.y),a.y=s.y*ue.y,V.mapSize.y=s.y)),V.map===null||K===!0||Y===!0){const de=this.type!==on?{minFilter:wi,magFilter:wi}:{};V.map!==null&&V.map.dispose(),V.map=new Vi(a.x,a.y,de),V.map.texture.name=ae.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const pe=V.getViewportCount();for(let de=0;de<pe;de++){const Oe=V.getViewport(de);r.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),W.viewport(r),V.updateMatrices(ae,de),i=V.getFrustum(),E(w,k,V.camera,ae,this.type)}V.isPointLightShadow!==!0&&this.type===on&&x(V,k),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(q,y,M)};function x(P,w){const k=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Vi(a.x,a.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(w,null,k,d,v,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(w,null,k,m,v,null)}function _(P,w,k,q){let y=null;const M=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(M!==void 0)y=M;else if(y=k.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=y.uuid,K=w.uuid;let Y=c[W];Y===void 0&&(Y={},c[W]=Y);let te=Y[K];te===void 0&&(te=y.clone(),Y[K]=te,w.addEventListener("dispose",U)),y=te}if(y.visible=w.visible,y.wireframe=w.wireframe,q===on?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=n.properties.get(y);W.light=k}return y}function E(P,w,k,q,y){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===on)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const K=e.update(P),Y=P.material;if(Array.isArray(Y)){const te=K.groups;for(let z=0,ae=te.length;z<ae;z++){const V=te[z],ue=Y[V.materialIndex];if(ue&&ue.visible){const pe=_(P,ue,q,y);P.onBeforeShadow(n,P,w,k,K,pe,V),n.renderBufferDirect(k,null,K,pe,P,V),P.onAfterShadow(n,P,w,k,K,pe,V)}}}else if(Y.visible){const te=_(P,Y,q,y);P.onBeforeShadow(n,P,w,k,K,te,null),n.renderBufferDirect(k,null,K,te,P,null),P.onAfterShadow(n,P,w,k,K,te,null)}}const W=P.children;for(let K=0,Y=W.length;K<Y;K++)E(W[K],w,k,q,y)}function U(P){P.target.removeEventListener("dispose",U);for(const k in c){const q=c[k],y=P.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}const p3={[Do]:Co,[Ro]:Uo,[Io]:No,[La]:Lo,[Co]:Do,[Uo]:Ro,[No]:Io,[Lo]:La};function f3(n){function e(){let N=!1;const Ce=new Nt;let J=null;const oe=new Nt(0,0,0,0);return{setMask:function(De){J!==De&&!N&&(n.colorMask(De,De,De,De),J=De)},setLocked:function(De){N=De},setClear:function(De,Ie,ot,wt,Zt){Zt===!0&&(De*=wt,Ie*=wt,ot*=wt),Ce.set(De,Ie,ot,wt),oe.equals(Ce)===!1&&(n.clearColor(De,Ie,ot,wt),oe.copy(Ce))},reset:function(){N=!1,J=null,oe.set(-1,0,0,0)}}}function t(){let N=!1,Ce=!1,J=null,oe=null,De=null;return{setReversed:function(Ie){Ce=Ie},setTest:function(Ie){Ie?B(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(Ie){J!==Ie&&!N&&(n.depthMask(Ie),J=Ie)},setFunc:function(Ie){if(Ce&&(Ie=p3[Ie]),oe!==Ie){switch(Ie){case Do:n.depthFunc(n.NEVER);break;case Co:n.depthFunc(n.ALWAYS);break;case Ro:n.depthFunc(n.LESS);break;case La:n.depthFunc(n.LEQUAL);break;case Io:n.depthFunc(n.EQUAL);break;case Lo:n.depthFunc(n.GEQUAL);break;case Uo:n.depthFunc(n.GREATER);break;case No:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Ie}},setLocked:function(Ie){N=Ie},setClear:function(Ie){De!==Ie&&(n.clearDepth(Ie),De=Ie)},reset:function(){N=!1,J=null,oe=null,De=null}}}function i(){let N=!1,Ce=null,J=null,oe=null,De=null,Ie=null,ot=null,wt=null,Zt=null;return{setTest:function(lt){N||(lt?B(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(lt){Ce!==lt&&!N&&(n.stencilMask(lt),Ce=lt)},setFunc:function(lt,Wt,gi){(J!==lt||oe!==Wt||De!==gi)&&(n.stencilFunc(lt,Wt,gi),J=lt,oe=Wt,De=gi)},setOp:function(lt,Wt,gi){(Ie!==lt||ot!==Wt||wt!==gi)&&(n.stencilOp(lt,Wt,gi),Ie=lt,ot=Wt,wt=gi)},setLocked:function(lt){N=lt},setClear:function(lt){Zt!==lt&&(n.clearStencil(lt),Zt=lt)},reset:function(){N=!1,Ce=null,J=null,oe=null,De=null,Ie=null,ot=null,wt=null,Zt=null}}}const a=new e,s=new t,r=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],m=null,g=!1,v=null,p=null,f=null,x=null,_=null,E=null,U=null,P=new st(0,0,0),w=0,k=!1,q=null,y=null,M=null,W=null,K=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,z=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ae)[1]),te=z>=1):ae.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),te=z>=2);let V=null,ue={};const pe=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Oe=new Nt().fromArray(pe),Ue=new Nt().fromArray(de);function I(N,Ce,J,oe){const De=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(N,Ie),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<J;ot++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ce+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Ie}const D={};D[n.TEXTURE_2D]=I(n.TEXTURE_2D,n.TEXTURE_2D,1),D[n.TEXTURE_CUBE_MAP]=I(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[n.TEXTURE_2D_ARRAY]=I(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),D[n.TEXTURE_3D]=I(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),r.setClear(0),B(n.DEPTH_TEST),s.setFunc(La),We(!1),Ve(tc),B(n.CULL_FACE),L(un);function B(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function ie(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function ce(N,Ce){return h[N]!==Ce?(n.bindFramebuffer(N,Ce),h[N]=Ce,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ce),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function se(N,Ce){let J=d,oe=!1;if(N){J=u.get(Ce),J===void 0&&(J=[],u.set(Ce,J));const De=N.textures;if(J.length!==De.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,ot=De.length;Ie<ot;Ie++)J[Ie]=n.COLOR_ATTACHMENT0+Ie;J.length=De.length,oe=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,oe=!0);oe&&n.drawBuffers(J)}function re(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const xe={[Yn]:n.FUNC_ADD,[Sp]:n.FUNC_SUBTRACT,[xp]:n.FUNC_REVERSE_SUBTRACT};xe[Mp]=n.MIN,xe[bp]=n.MAX;const ge={[Ep]:n.ZERO,[Ap]:n.ONE,[Tp]:n.SRC_COLOR,[wo]:n.SRC_ALPHA,[Ip]:n.SRC_ALPHA_SATURATE,[Cp]:n.DST_COLOR,[Pp]:n.DST_ALPHA,[wp]:n.ONE_MINUS_SRC_COLOR,[Po]:n.ONE_MINUS_SRC_ALPHA,[Rp]:n.ONE_MINUS_DST_COLOR,[Dp]:n.ONE_MINUS_DST_ALPHA,[Lp]:n.CONSTANT_COLOR,[Up]:n.ONE_MINUS_CONSTANT_COLOR,[Np]:n.CONSTANT_ALPHA,[kp]:n.ONE_MINUS_CONSTANT_ALPHA};function L(N,Ce,J,oe,De,Ie,ot,wt,Zt,lt){if(N===un){g===!0&&(ie(n.BLEND),g=!1);return}if(g===!1&&(B(n.BLEND),g=!0),N!==yp){if(N!==v||lt!==k){if((p!==Yn||_!==Yn)&&(n.blendEquation(n.FUNC_ADD),p=Yn,_=Yn),lt)switch(N){case Da:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wi:n.blendFunc(n.ONE,n.ONE);break;case ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}f=null,x=null,E=null,U=null,P.set(0,0,0),w=0,v=N,k=lt}return}De=De||Ce,Ie=Ie||J,ot=ot||oe,(Ce!==p||De!==_)&&(n.blendEquationSeparate(xe[Ce],xe[De]),p=Ce,_=De),(J!==f||oe!==x||Ie!==E||ot!==U)&&(n.blendFuncSeparate(ge[J],ge[oe],ge[Ie],ge[ot]),f=J,x=oe,E=Ie,U=ot),(wt.equals(P)===!1||Zt!==w)&&(n.blendColor(wt.r,wt.g,wt.b,Zt),P.copy(wt),w=Zt),v=N,k=!1}function qe(N,Ce){N.side===Bi?ie(n.CULL_FACE):B(n.CULL_FACE);let J=N.side===ri;Ce&&(J=!J),We(J),N.blending===Da&&N.transparent===!1?L(un):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),a.setMask(N.colorWrite);const oe=N.stencilWrite;r.setTest(oe),oe&&(r.setMask(N.stencilWriteMask),r.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),r.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Qe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){q!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),q=N)}function Ve(N){N!==gp?(B(n.CULL_FACE),N!==y&&(N===tc?n.cullFace(n.BACK):N===vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),y=N}function Me(N){N!==M&&(te&&n.lineWidth(N),M=N)}function Qe(N,Ce,J){N?(B(n.POLYGON_OFFSET_FILL),(W!==Ce||K!==J)&&(n.polygonOffset(Ce,J),W=Ce,K=J)):ie(n.POLYGON_OFFSET_FILL)}function Ae(N){N?B(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function A(N){N===void 0&&(N=n.TEXTURE0+Y-1),V!==N&&(n.activeTexture(N),V=N)}function S(N,Ce,J){J===void 0&&(V===null?J=n.TEXTURE0+Y-1:J=V);let oe=ue[J];oe===void 0&&(oe={type:void 0,texture:void 0},ue[J]=oe),(oe.type!==N||oe.texture!==Ce)&&(V!==J&&(n.activeTexture(J),V=J),n.bindTexture(N,Ce||D[N]),oe.type=N,oe.texture=Ce)}function H(){const N=ue[V];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(N){Oe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Oe.copy(N))}function Le(N){Ue.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ue.copy(N))}function $e(N,Ce){let J=l.get(Ce);J===void 0&&(J=new WeakMap,l.set(Ce,J));let oe=J.get(N);oe===void 0&&(oe=n.getUniformBlockIndex(Ce,N.name),J.set(N,oe))}function Ye(N,Ce){const oe=l.get(Ce).get(N);o.get(Ce)!==oe&&(n.uniformBlockBinding(Ce,oe,N.__bindingPointIndex),o.set(Ce,oe))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,ue={},h={},u=new WeakMap,d=[],m=null,g=!1,v=null,p=null,f=null,x=null,_=null,E=null,U=null,P=new st(0,0,0),w=0,k=!1,q=null,y=null,M=null,W=null,K=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),r.reset()}return{buffers:{color:a,depth:s,stencil:r},enable:B,disable:ie,bindFramebuffer:ce,drawBuffers:se,useProgram:re,setBlending:L,setMaterial:qe,setFlipSided:We,setCullFace:Ve,setLineWidth:Me,setPolygonOffset:Qe,setScissorTest:Ae,activeTexture:A,bindTexture:S,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:Z,texImage2D:Te,texImage3D:Ee,updateUBOMapping:$e,uniformBlockBinding:Ye,texStorage2D:Ze,texStorage3D:fe,texSubImage2D:$,texSubImage3D:me,compressedTexSubImage2D:ve,compressedTexSubImage3D:_e,scissor:we,viewport:Le,reset:ct}}function jc(n,e,t,i){const a=m3(i);switch(t){case ou:return n*e;case cu:return n*e;case hu:return n*e*2;case uu:return n*e/a.components*a.byteLength;case El:return n*e/a.components*a.byteLength;case du:return n*e*2/a.components*a.byteLength;case Al:return n*e*2/a.components*a.byteLength;case lu:return n*e*3/a.components*a.byteLength;case Gi:return n*e*4/a.components*a.byteLength;case Tl:return n*e*4/a.components*a.byteLength;case cr:case hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ur:case dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Go:case Vo:return Math.max(n,16)*Math.max(e,8)/4;case zo:case Ho:return Math.max(n,8)*Math.max(e,8)/2;case Wo:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pr:case ol:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pu:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m3(n){switch(n){case pn:case au:return{byteLength:1,components:1};case ms:case su:case dn:return{byteLength:2,components:1};case Ml:case bl:return{byteLength:2,components:4};case ea:case xl:case cn:return{byteLength:4,components:1};case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function g3(n,e,t,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):vs("canvas")}function v(A,S,H){let Q=1;const Z=Ae(A);if((Z.width>H||Z.height>H)&&(Q=H/Math.max(Z.width,Z.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(Q*Z.width),me=Math.floor(Q*Z.height);u===void 0&&(u=g($,me));const ve=S?g($,me):u;return ve.width=$,ve.height=me,ve.getContext("2d").drawImage(A,0,0,$,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+me+")."),ve}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==wi&&A.minFilter!==zi}function f(A){n.generateMipmap(A)}function x(A,S,H,Q,Z=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=S;if(S===n.RED&&(H===n.FLOAT&&($=n.R32F),H===n.HALF_FLOAT&&($=n.R16F),H===n.UNSIGNED_BYTE&&($=n.R8)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.R8UI),H===n.UNSIGNED_SHORT&&($=n.R16UI),H===n.UNSIGNED_INT&&($=n.R32UI),H===n.BYTE&&($=n.R8I),H===n.SHORT&&($=n.R16I),H===n.INT&&($=n.R32I)),S===n.RG&&(H===n.FLOAT&&($=n.RG32F),H===n.HALF_FLOAT&&($=n.RG16F),H===n.UNSIGNED_BYTE&&($=n.RG8)),S===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RG8UI),H===n.UNSIGNED_SHORT&&($=n.RG16UI),H===n.UNSIGNED_INT&&($=n.RG32UI),H===n.BYTE&&($=n.RG8I),H===n.SHORT&&($=n.RG16I),H===n.INT&&($=n.RG32I)),S===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGB8UI),H===n.UNSIGNED_SHORT&&($=n.RGB16UI),H===n.UNSIGNED_INT&&($=n.RGB32UI),H===n.BYTE&&($=n.RGB8I),H===n.SHORT&&($=n.RGB16I),H===n.INT&&($=n.RGB32I)),S===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGBA8UI),H===n.UNSIGNED_SHORT&&($=n.RGBA16UI),H===n.UNSIGNED_INT&&($=n.RGBA32UI),H===n.BYTE&&($=n.RGBA8I),H===n.SHORT&&($=n.RGBA16I),H===n.INT&&($=n.RGBA32I)),S===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),S===n.RGBA){const me=Z?vr:ft.getTransfer(Q);H===n.FLOAT&&($=n.RGBA32F),H===n.HALF_FLOAT&&($=n.RGBA16F),H===n.UNSIGNED_BYTE&&($=me===bt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(A,S){let H;return A?S===null||S===ea||S===ka?H=n.DEPTH24_STENCIL8:S===cn?H=n.DEPTH32F_STENCIL8:S===ms&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ea||S===ka?H=n.DEPTH_COMPONENT24:S===cn?H=n.DEPTH_COMPONENT32F:S===ms&&(H=n.DEPTH_COMPONENT16),H}function E(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==wi&&A.minFilter!==zi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function U(A){const S=A.target;S.removeEventListener("dispose",U),w(S),S.isVideoTexture&&h.delete(S)}function P(A){const S=A.target;S.removeEventListener("dispose",P),q(S)}function w(A){const S=i.get(A);if(S.__webglInit===void 0)return;const H=A.source,Q=d.get(H);if(Q){const Z=Q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&k(A),Object.keys(Q).length===0&&d.delete(H)}i.remove(A)}function k(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const H=A.source,Q=d.get(H);delete Q[S.__cacheKey],r.memory.textures--}function q(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let Z=0;Z<S.__webglFramebuffer[Q].length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Q][Z]);else n.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=A.textures;for(let Q=0,Z=H.length;Q<Z;Q++){const $=i.get(H[Q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),r.memory.textures--),i.remove(H[Q])}i.remove(A)}let y=0;function M(){y=0}function W(){const A=y;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),y+=1,A}function K(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Y(A,S){const H=i.get(A);if(A.isVideoTexture&&Me(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(H,A,S);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function te(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){Ue(H,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function z(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){Ue(H,A,S);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function ae(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){I(H,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}const V={[Oo]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},ue={[wi]:n.NEAREST,[zp]:n.NEAREST_MIPMAP_NEAREST,[Ds]:n.NEAREST_MIPMAP_LINEAR,[zi]:n.LINEAR,[Gr]:n.LINEAR_MIPMAP_NEAREST,[Jn]:n.LINEAR_MIPMAP_LINEAR},pe={[Kp]:n.NEVER,[Zp]:n.ALWAYS,[Xp]:n.LESS,[fu]:n.LEQUAL,[qp]:n.EQUAL,[$p]:n.GEQUAL,[Yp]:n.GREATER,[jp]:n.NOTEQUAL};function de(A,S){if(S.type===cn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===zi||S.magFilter===Gr||S.magFilter===Ds||S.magFilter===Jn||S.minFilter===zi||S.minFilter===Gr||S.minFilter===Ds||S.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,V[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,V[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,V[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ue[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ue[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wi||S.minFilter!==Ds&&S.minFilter!==Jn||S.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Oe(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",U));const Q=S.source;let Z=d.get(Q);Z===void 0&&(Z={},d.set(Q,Z));const $=K(S);if($!==A.__cacheKey){Z[$]===void 0&&(Z[$]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,H=!0),Z[$].usedTimes++;const me=Z[A.__cacheKey];me!==void 0&&(Z[A.__cacheKey].usedTimes--,me.usedTimes===0&&k(S)),A.__cacheKey=$,A.__webglTexture=Z[$].texture}return H}function Ue(A,S,H){let Q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=n.TEXTURE_3D);const Z=Oe(A,S),$=S.source;t.bindTexture(Q,A.__webglTexture,n.TEXTURE0+H);const me=i.get($);if($.version!==me.__version||Z===!0){t.activeTexture(n.TEXTURE0+H);const ve=ft.getPrimaries(ft.workingColorSpace),_e=S.colorSpace===wn?null:ft.getPrimaries(S.colorSpace),Ze=S.colorSpace===wn||ve===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let fe=v(S.image,!1,a.maxTextureSize);fe=Qe(S,fe);const Te=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type);let we=x(S.internalFormat,Te,Ee,S.colorSpace,S.isVideoTexture);de(Q,S);let Le;const $e=S.mipmaps,Ye=S.isVideoTexture!==!0,ct=me.__version===void 0||Z===!0,N=$.dataReady,Ce=E(S,fe);if(S.isDepthTexture)we=_(S.format===Fa,S.type),ct&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,we,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,we,fe.width,fe.height,0,Te,Ee,null));else if(S.isDataTexture)if($e.length>0){Ye&&ct&&t.texStorage2D(n.TEXTURE_2D,Ce,we,$e[0].width,$e[0].height);for(let J=0,oe=$e.length;J<oe;J++)Le=$e[J],Ye?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Le.width,Le.height,Te,Ee,Le.data):t.texImage2D(n.TEXTURE_2D,J,we,Le.width,Le.height,0,Te,Ee,Le.data);S.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(n.TEXTURE_2D,Ce,we,fe.width,fe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Te,Ee,fe.data)):t.texImage2D(n.TEXTURE_2D,0,we,fe.width,fe.height,0,Te,Ee,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,we,$e[0].width,$e[0].height,fe.depth);for(let J=0,oe=$e.length;J<oe;J++)if(Le=$e[J],S.format!==Gi)if(Te!==null)if(Ye){if(N)if(S.layerUpdates.size>0){const De=jc(Le.width,Le.height,S.format,S.type);for(const Ie of S.layerUpdates){const ot=Le.data.subarray(Ie*De/Le.data.BYTES_PER_ELEMENT,(Ie+1)*De/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ie,Le.width,Le.height,1,Te,ot,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Le.width,Le.height,fe.depth,Te,Le.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,we,Le.width,Le.height,fe.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Le.width,Le.height,fe.depth,Te,Ee,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,we,Le.width,Le.height,fe.depth,0,Te,Ee,Le.data)}else{Ye&&ct&&t.texStorage2D(n.TEXTURE_2D,Ce,we,$e[0].width,$e[0].height);for(let J=0,oe=$e.length;J<oe;J++)Le=$e[J],S.format!==Gi?Te!==null?Ye?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Le.width,Le.height,Te,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,J,we,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Le.width,Le.height,Te,Ee,Le.data):t.texImage2D(n.TEXTURE_2D,J,we,Le.width,Le.height,0,Te,Ee,Le.data)}else if(S.isDataArrayTexture)if(Ye){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,we,fe.width,fe.height,fe.depth),N)if(S.layerUpdates.size>0){const J=jc(fe.width,fe.height,S.format,S.type);for(const oe of S.layerUpdates){const De=fe.data.subarray(oe*J/fe.data.BYTES_PER_ELEMENT,(oe+1)*J/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,fe.width,fe.height,1,Te,Ee,De)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,Ee,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,fe.width,fe.height,fe.depth,0,Te,Ee,fe.data);else if(S.isData3DTexture)Ye?(ct&&t.texStorage3D(n.TEXTURE_3D,Ce,we,fe.width,fe.height,fe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,Ee,fe.data)):t.texImage3D(n.TEXTURE_3D,0,we,fe.width,fe.height,fe.depth,0,Te,Ee,fe.data);else if(S.isFramebufferTexture){if(ct)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ce,we,fe.width,fe.height);else{let J=fe.width,oe=fe.height;for(let De=0;De<Ce;De++)t.texImage2D(n.TEXTURE_2D,De,we,J,oe,0,Te,Ee,null),J>>=1,oe>>=1}}else if($e.length>0){if(Ye&&ct){const J=Ae($e[0]);t.texStorage2D(n.TEXTURE_2D,Ce,we,J.width,J.height)}for(let J=0,oe=$e.length;J<oe;J++)Le=$e[J],Ye?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Te,Ee,Le):t.texImage2D(n.TEXTURE_2D,J,we,Te,Ee,Le);S.generateMipmaps=!1}else if(Ye){if(ct){const J=Ae(fe);t.texStorage2D(n.TEXTURE_2D,Ce,we,J.width,J.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ee,fe)}else t.texImage2D(n.TEXTURE_2D,0,we,Te,Ee,fe);p(S)&&f(Q),me.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function I(A,S,H){if(S.image.length!==6)return;const Q=Oe(A,S),Z=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);const $=i.get(Z);if(Z.version!==$.__version||Q===!0){t.activeTexture(n.TEXTURE0+H);const me=ft.getPrimaries(ft.workingColorSpace),ve=S.colorSpace===wn?null:ft.getPrimaries(S.colorSpace),_e=S.colorSpace===wn||me===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ze=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!Ze&&!fe?Te[oe]=v(S.image[oe],!0,a.maxCubemapSize):Te[oe]=fe?S.image[oe].image:S.image[oe],Te[oe]=Qe(S,Te[oe]);const Ee=Te[0],we=s.convert(S.format,S.colorSpace),Le=s.convert(S.type),$e=x(S.internalFormat,we,Le,S.colorSpace),Ye=S.isVideoTexture!==!0,ct=$.__version===void 0||Q===!0,N=Z.dataReady;let Ce=E(S,Ee);de(n.TEXTURE_CUBE_MAP,S);let J;if(Ze){Ye&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,$e,Ee.width,Ee.height);for(let oe=0;oe<6;oe++){J=Te[oe].mipmaps;for(let De=0;De<J.length;De++){const Ie=J[De];S.format!==Gi?we!==null?Ye?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Ie.width,Ie.height,we,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,$e,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Ie.width,Ie.height,we,Le,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,$e,Ie.width,Ie.height,0,we,Le,Ie.data)}}}else{if(J=S.mipmaps,Ye&&ct){J.length>0&&Ce++;const oe=Ae(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,$e,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(fe){Ye?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,we,Le,Te[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,Te[oe].width,Te[oe].height,0,we,Le,Te[oe].data);for(let De=0;De<J.length;De++){const ot=J[De].image[oe].image;Ye?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,ot.width,ot.height,we,Le,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,$e,ot.width,ot.height,0,we,Le,ot.data)}}else{Ye?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,we,Le,Te[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,$e,we,Le,Te[oe]);for(let De=0;De<J.length;De++){const Ie=J[De];Ye?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,we,Le,Ie.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,$e,we,Le,Ie.image[oe])}}}p(S)&&f(n.TEXTURE_CUBE_MAP),$.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function D(A,S,H,Q,Z,$){const me=s.convert(H.format,H.colorSpace),ve=s.convert(H.type),_e=x(H.internalFormat,me,ve,H.colorSpace);if(!i.get(S).__hasExternalTextures){const fe=Math.max(1,S.width>>$),Te=Math.max(1,S.height>>$);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,_e,fe,Te,S.depth,0,me,ve,null):t.texImage2D(Z,$,_e,fe,Te,0,me,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Ve(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Z,i.get(H).__webglTexture,0,We(S)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,Z,i.get(H).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(A,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,Z=Q&&Q.isDepthTexture?Q.type:null,$=_(S.stencilBuffer,Z),me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=We(S);Ve(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,$,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,$,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,$,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,A)}else{const Q=S.textures;for(let Z=0;Z<Q.length;Z++){const $=Q[Z],me=s.convert($.format,$.colorSpace),ve=s.convert($.type),_e=x($.internalFormat,me,ve,$.colorSpace),Ze=We(S);H&&Ve(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,_e,S.width,S.height):Ve(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze,_e,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,_e,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const Q=i.get(S.depthTexture).__webglTexture,Z=We(S);if(S.depthTexture.format===Ca)Ve(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Fa)Ve(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ce(A){const S=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",Z)};Q.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ie(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=n.createRenderbuffer(),B(S.__webglDepthbuffer[Q],A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),B(S.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(A,S,H){const Q=i.get(A);S!==void 0&&D(Q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ce(A)}function re(A){const S=A.texture,H=i.get(A),Q=i.get(S);A.addEventListener("dispose",P);const Z=A.textures,$=A.isWebGLCubeRenderTarget===!0,me=Z.length>1;if(me||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=S.version,r.memory.textures++),$){H.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ve]=[];for(let _e=0;_e<S.mipmaps.length;_e++)H.__webglFramebuffer[ve][_e]=n.createFramebuffer()}else H.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)H.__webglFramebuffer[ve]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(me)for(let ve=0,_e=Z.length;ve<_e;ve++){const Ze=i.get(Z[ve]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),r.memory.textures++)}if(A.samples>0&&Ve(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ve=0;ve<Z.length;ve++){const _e=Z[ve];H.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ve]);const Ze=s.convert(_e.format,_e.colorSpace),fe=s.convert(_e.type),Te=x(_e.internalFormat,Ze,fe,_e.colorSpace,A.isXRRenderTarget===!0),Ee=We(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Te,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,H.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),B(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),de(n.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)D(H.__webglFramebuffer[ve][_e],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,_e);else D(H.__webglFramebuffer[ve],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(S)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ve=0,_e=Z.length;ve<_e;ve++){const Ze=Z[ve],fe=i.get(Ze);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),de(n.TEXTURE_2D,Ze),D(H.__webglFramebuffer,A,Ze,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),p(Ze)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ve=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Q.__webglTexture),de(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)D(H.__webglFramebuffer[_e],A,S,n.COLOR_ATTACHMENT0,ve,_e);else D(H.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,ve,0);p(S)&&f(ve),t.unbindTexture()}A.depthBuffer&&ce(A)}function xe(A){const S=A.textures;for(let H=0,Q=S.length;H<Q;H++){const Z=S[H];if(p(Z)){const $=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(Z).__webglTexture;t.bindTexture($,me),f($),t.unbindTexture()}}}const ge=[],L=[];function qe(A){if(A.samples>0){if(Ve(A)===!1){const S=A.textures,H=A.width,Q=A.height;let Z=n.COLOR_BUFFER_BIT;const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(A),ve=S.length>1;if(ve)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Ze=i.get(S[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ze,0)}n.blitFramebuffer(0,0,H,Q,0,0,H,Q,Z,n.NEAREST),l===!0&&(ge.length=0,L.length=0,ge.push(n.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ge.push($),L.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Ze=i.get(S[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function We(A){return Math.min(a.maxSamples,A.samples)}function Ve(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Me(A){const S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Qe(A,S){const H=A.colorSpace,Q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==In&&H!==wn&&(ft.getTransfer(H)===bt?(Q!==Gi||Z!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=M,this.setTexture2D=Y,this.setTexture2DArray=te,this.setTexture3D=z,this.setTextureCube=ae,this.rebindTextures=se,this.setupRenderTarget=re,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=D,this.useMultisampledRTT=Ve}function v3(n,e){function t(i,a=wn){let s;const r=ft.getTransfer(a);if(i===pn)return n.UNSIGNED_BYTE;if(i===Ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===au)return n.BYTE;if(i===su)return n.SHORT;if(i===ms)return n.UNSIGNED_SHORT;if(i===xl)return n.INT;if(i===ea)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===dn)return n.HALF_FLOAT;if(i===ou)return n.ALPHA;if(i===lu)return n.RGB;if(i===Gi)return n.RGBA;if(i===cu)return n.LUMINANCE;if(i===hu)return n.LUMINANCE_ALPHA;if(i===Ca)return n.DEPTH_COMPONENT;if(i===Fa)return n.DEPTH_STENCIL;if(i===uu)return n.RED;if(i===El)return n.RED_INTEGER;if(i===du)return n.RG;if(i===Al)return n.RG_INTEGER;if(i===Tl)return n.RGBA_INTEGER;if(i===cr||i===hr||i===ur||i===dr)if(r===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===Go||i===Ho||i===Vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wo||i===Ko||i===Xo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wo||i===Ko)return r===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xo)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qo||i===Yo||i===jo||i===$o||i===Zo||i===Jo||i===Qo||i===el||i===tl||i===il||i===nl||i===al||i===sl||i===rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qo)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yo)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$o)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zo)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jo)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qo)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===el)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tl)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===il)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nl)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sl)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rl)return r===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pr||i===ol||i===ll)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pr)return r===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ol)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pu||i===cl||i===hl||i===ul)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ka?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class _3 extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hi extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y3={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y3)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const S3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x3=`
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

}`;class M3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new oi,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yt({vertexShader:S3,fragmentShader:x3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b3 extends na{constructor(e,t){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const v=new M3,p=t.getContextAttributes();let f=null,x=null;const _=[],E=[],U=new Ke;let P=null;const w=new Ai;w.layers.enable(1),w.viewport=new Nt;const k=new Ai;k.layers.enable(2),k.viewport=new Nt;const q=[w,k],y=new _3;y.layers.enable(1),y.layers.enable(2);let M=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let D=_[I];return D===void 0&&(D=new go,_[I]=D),D.getTargetRaySpace()},this.getControllerGrip=function(I){let D=_[I];return D===void 0&&(D=new go,_[I]=D),D.getGripSpace()},this.getHand=function(I){let D=_[I];return D===void 0&&(D=new go,_[I]=D),D.getHandSpace()};function K(I){const D=E.indexOf(I.inputSource);if(D===-1)return;const B=_[D];B!==void 0&&(B.update(I.inputSource,I.frame,c||r),B.dispatchEvent({type:I.type,data:I.inputSource}))}function Y(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",te);for(let I=0;I<_.length;I++){const D=E[I];D!==null&&(E[I]=null,_[I].disconnect(D))}M=null,W=null,v.reset(),e.setRenderTarget(f),m=null,d=null,u=null,a=null,x=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(I){if(a=I,a!==null){if(f=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",te),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),a.renderState.layers===void 0){const D={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(a,t,D),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Vi(m.framebufferWidth,m.framebufferHeight,{format:Gi,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let D=null,B=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=p.stencil?Fa:Ca,B=p.stencil?ka:ea);const ce={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(a,t),d=u.createProjectionLayer(ce),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Vi(d.textureWidth,d.textureHeight,{format:Gi,type:pn,depthTexture:new wu(d.textureWidth,d.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Ue.setContext(a),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function te(I){for(let D=0;D<I.removed.length;D++){const B=I.removed[D],ie=E.indexOf(B);ie>=0&&(E[ie]=null,_[ie].disconnect(B))}for(let D=0;D<I.added.length;D++){const B=I.added[D];let ie=E.indexOf(B);if(ie===-1){for(let se=0;se<_.length;se++)if(se>=E.length){E.push(B),ie=se;break}else if(E[se]===null){E[se]=B,ie=se;break}if(ie===-1)break}const ce=_[ie];ce&&ce.connect(B)}}const z=new R,ae=new R;function V(I,D,B){z.setFromMatrixPosition(D.matrixWorld),ae.setFromMatrixPosition(B.matrixWorld);const ie=z.distanceTo(ae),ce=D.projectionMatrix.elements,se=B.projectionMatrix.elements,re=ce[14]/(ce[10]-1),xe=ce[14]/(ce[10]+1),ge=(ce[9]+1)/ce[5],L=(ce[9]-1)/ce[5],qe=(ce[8]-1)/ce[0],We=(se[8]+1)/se[0],Ve=re*qe,Me=re*We,Qe=ie/(-qe+We),Ae=Qe*-qe;if(D.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ae),I.translateZ(Qe),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),ce[10]===-1)I.projectionMatrix.copy(D.projectionMatrix),I.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const A=re+Qe,S=xe+Qe,H=Ve-Ae,Q=Me+(ie-Ae),Z=ge*xe/S*A,$=L*xe/S*A;I.projectionMatrix.makePerspective(H,Q,Z,$,A,S),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function ue(I,D){D===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(D.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(a===null)return;let D=I.near,B=I.far;v.texture!==null&&(v.depthNear>0&&(D=v.depthNear),v.depthFar>0&&(B=v.depthFar)),y.near=k.near=w.near=D,y.far=k.far=w.far=B,(M!==y.near||W!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,W=y.far);const ie=I.parent,ce=y.cameras;ue(y,ie);for(let se=0;se<ce.length;se++)ue(ce[se],ie);ce.length===2?V(y,w,k):y.projectionMatrix.copy(w.projectionMatrix),pe(I,y,ie)};function pe(I,D,B){B===null?I.matrix.copy(D.matrixWorld):(I.matrix.copy(B.matrixWorld),I.matrix.invert(),I.matrix.multiply(D.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(D.projectionMatrix),I.projectionMatrixInverse.copy(D.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=gs*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let de=null;function Oe(I,D){if(h=D.getViewerPose(c||r),g=D,h!==null){const B=h.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let ie=!1;B.length!==y.cameras.length&&(y.cameras.length=0,ie=!0);for(let se=0;se<B.length;se++){const re=B[se];let xe=null;if(m!==null)xe=m.getViewport(re);else{const L=u.getViewSubImage(d,re);xe=L.viewport,se===0&&(e.setRenderTargetTextures(x,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let ge=q[se];ge===void 0&&(ge=new Ai,ge.layers.enable(se),ge.viewport=new Nt,q[se]=ge),ge.matrix.fromArray(re.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(re.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(xe.x,xe.y,xe.width,xe.height),se===0&&(y.matrix.copy(ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ie===!0&&y.cameras.push(ge)}const ce=a.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const se=u.getDepthInformation(B[0]);se&&se.isValid&&se.texture&&v.init(e,se,a.renderState)}}for(let B=0;B<_.length;B++){const ie=E[B],ce=_[B];ie!==null&&ce!==void 0&&ce.update(ie,D,c||r)}de&&de(I,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}const Ue=new Tu;Ue.setAnimationLoop(Oe),this.setAnimationLoop=function(I){de=I},this.dispose=function(){}}}const Vn=new fn,E3=new Rt;function A3(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Mu(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function a(p,f,x,_,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,x,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ri&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ri&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=e.get(f),_=x.envMap,E=x.envMapRotation;_&&(p.envMap.value=_,Vn.copy(E),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),p.envMapRotation.value.setFromMatrix4(E3.makeRotationFromEuler(Vn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,x,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=_*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ri&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const x=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function T3(n,e,t,i){let a={},s={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const E=_.program;i.uniformBlockBinding(x,E)}function c(x,_){let E=a[x.id];E===void 0&&(g(x),E=h(x),a[x.id]=E,x.addEventListener("dispose",p));const U=_.program;i.updateUBOMapping(x,U);const P=e.render.frame;s[x.id]!==P&&(d(x),s[x.id]=P)}function h(x){const _=u();x.__bindingPointIndex=_;const E=n.createBuffer(),U=x.__size,P=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,U,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,E),E}function u(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=a[x.id],E=x.uniforms,U=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let P=0,w=E.length;P<w;P++){const k=Array.isArray(E[P])?E[P]:[E[P]];for(let q=0,y=k.length;q<y;q++){const M=k[q];if(m(M,P,q,U)===!0){const W=M.__offset,K=Array.isArray(M.value)?M.value:[M.value];let Y=0;for(let te=0;te<K.length;te++){const z=K[te],ae=v(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,W+Y,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,Y),Y+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,_,E,U){const P=x.value,w=_+"_"+E;if(U[w]===void 0)return typeof P=="number"||typeof P=="boolean"?U[w]=P:U[w]=P.clone(),!0;{const k=U[w];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return U[w]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function g(x){const _=x.uniforms;let E=0;const U=16;for(let w=0,k=_.length;w<k;w++){const q=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,M=q.length;y<M;y++){const W=q[y],K=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,te=K.length;Y<te;Y++){const z=K[Y],ae=v(z),V=E%U,ue=V%ae.boundary,pe=V+ue;E+=ue,pe!==0&&U-pe<ae.storage&&(E+=U-pe),W.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=ae.storage}}}const P=E%U;return P>0&&(E+=U-P),x.__size=E,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){const _=x.target;_.removeEventListener("dispose",p);const E=r.indexOf(_.__bindingPointIndex);r.splice(E,1),n.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(const x in a)n.deleteBuffer(a[x]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}class Iu{constructor(e={}){const{canvas:t=mf(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oi,this.toneMapping=Dn,this.toneMappingExposure=1;const _=this;let E=!1,U=0,P=0,w=null,k=-1,q=null;const y=new Nt,M=new Nt;let W=null;const K=new st(0);let Y=0,te=t.width,z=t.height,ae=1,V=null,ue=null;const pe=new Nt(0,0,te,z),de=new Nt(0,0,te,z);let Oe=!1;const Ue=new Au;let I=!1,D=!1;const B=new Rt,ie=new Rt,ce=new R,se=new Nt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function ge(){return w===null?ae:1}let L=i;function qe(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sl}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),L===null){const F="webgl2";if(L=qe(F,b),L===null)throw qe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let We,Ve,Me,Qe,Ae,A,S,H,Q,Z,$,me,ve,_e,Ze,fe,Te,Ee,we,Le,$e,Ye,ct,N;function Ce(){We=new Im(L),We.init(),Ye=new v3(L,We),Ve=new Tm(L,We,e,Ye),Me=new f3(L),Ve.reverseDepthBuffer&&Me.buffers.depth.setReversed(!0),Qe=new Nm(L),Ae=new Q2,A=new g3(L,We,Me,Ae,Ve,Ye,Qe),S=new Pm(_),H=new Rm(_),Q=new Hf(L),ct=new Em(L,Q),Z=new Lm(L,Q,Qe,ct),$=new Fm(L,Z,Q,Qe),we=new km(L,Ve,A),fe=new wm(Ae),me=new J2(_,S,H,We,Ve,ct,fe),ve=new A3(_,Ae),_e=new t3,Ze=new o3(We),Ee=new bm(_,S,H,Me,$,d,l),Te=new d3(_,$,Ve),N=new T3(L,Qe,Ve,Me),Le=new Am(L,We,Qe),$e=new Um(L,We,Qe),Qe.programs=me.programs,_.capabilities=Ve,_.extensions=We,_.properties=Ae,_.renderLists=_e,_.shadowMap=Te,_.state=Me,_.info=Qe}Ce();const J=new b3(_,L);this.xr=J,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=We.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=We.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(b){b!==void 0&&(ae=b,this.setSize(te,z,!1))},this.getSize=function(b){return b.set(te,z)},this.setSize=function(b,F,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,z=F,t.width=Math.floor(b*ae),t.height=Math.floor(F*ae),X===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(te*ae,z*ae).floor()},this.setDrawingBufferSize=function(b,F,X){te=b,z=F,ae=X,t.width=Math.floor(b*X),t.height=Math.floor(F*X),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(pe)},this.setViewport=function(b,F,X,j){b.isVector4?pe.set(b.x,b.y,b.z,b.w):pe.set(b,F,X,j),Me.viewport(y.copy(pe).multiplyScalar(ae).round())},this.getScissor=function(b){return b.copy(de)},this.setScissor=function(b,F,X,j){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,F,X,j),Me.scissor(M.copy(de).multiplyScalar(ae).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){Me.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(b=!0,F=!0,X=!0){let j=0;if(b){let O=!1;if(w!==null){const ye=w.texture.format;O=ye===Tl||ye===Al||ye===El}if(O){const ye=w.texture.type,Re=ye===pn||ye===ea||ye===ms||ye===ka||ye===Ml||ye===bl,Ne=Ee.getClearColor(),ke=Ee.getClearAlpha(),Xe=Ne.r,je=Ne.g,Be=Ne.b;Re?(m[0]=Xe,m[1]=je,m[2]=Be,m[3]=ke,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Xe,g[1]=je,g[2]=Be,g[3]=ke,L.clearBufferiv(L.COLOR,0,g))}else j|=L.COLOR_BUFFER_BIT}F&&(j|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),_e.dispose(),Ze.dispose(),Ae.dispose(),S.dispose(),H.dispose(),$.dispose(),ct.dispose(),N.dispose(),me.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ms),J.removeEventListener("sessionend",bs),Pi.stop()};function oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=Qe.autoReset,F=Te.enabled,X=Te.autoUpdate,j=Te.needsUpdate,O=Te.type;Ce(),Qe.autoReset=b,Te.enabled=F,Te.autoUpdate=X,Te.needsUpdate=j,Te.type=O}function Ie(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ot(b){const F=b.target;F.removeEventListener("dispose",ot),wt(F)}function wt(b){Zt(b),Ae.remove(b)}function Zt(b){const F=Ae.get(b).programs;F!==void 0&&(F.forEach(function(X){me.releaseProgram(X)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,X,j,O,ye){F===null&&(F=re);const Re=O.isMesh&&O.matrixWorld.determinant()<0,Ne=Nr(b,F,X,j,O);Me.setMaterial(j,Re);let ke=X.index,Xe=1;if(j.wireframe===!0){if(ke=Z.getWireframeAttribute(X),ke===void 0)return;Xe=2}const je=X.drawRange,Be=X.attributes.position;let ut=je.start*Xe,mt=(je.start+je.count)*Xe;ye!==null&&(ut=Math.max(ut,ye.start*Xe),mt=Math.min(mt,(ye.start+ye.count)*Xe)),ke!==null?(ut=Math.max(ut,0),mt=Math.min(mt,ke.count)):Be!=null&&(ut=Math.max(ut,0),mt=Math.min(mt,Be.count));const Et=mt-ut;if(Et<0||Et===1/0)return;ct.setup(O,j,Ne,X,ke);let Jt,ht=Le;if(ke!==null&&(Jt=Q.get(ke),ht=$e,ht.setIndex(Jt)),O.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*ge()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(O.isLine){let ze=j.linewidth;ze===void 0&&(ze=1),Me.setLineWidth(ze*ge()),O.isLineSegments?ht.setMode(L.LINES):O.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else O.isPoints?ht.setMode(L.POINTS):O.isSprite&&ht.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ze=O._multiDrawStarts,Bt=O._multiDrawCounts,C=O._multiDrawCount,G=ke?Q.get(ke).bytesPerElement:1,Se=Ae.get(j).currentProgram.getUniforms();for(let he=0;he<C;he++)Se.setValue(L,"_gl_DrawID",he),ht.render(ze[he]/G,Bt[he])}else if(O.isInstancedMesh)ht.renderInstances(ut,Et,O.count);else if(X.isInstancedBufferGeometry){const ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Bt=Math.min(X.instanceCount,ze);ht.renderInstances(ut,Et,Bt)}else ht.render(ut,Et)};function lt(b,F,X){b.transparent===!0&&b.side===Bi&&b.forceSinglePass===!1?(b.side=ri,b.needsUpdate=!0,Un(b,F,X),b.side=Cn,b.needsUpdate=!0,Un(b,F,X),b.side=Bi):Un(b,F,X)}this.compile=function(b,F,X=null){X===null&&(X=b),p=Ze.get(X),p.init(F),x.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==X&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const j=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ye=O.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Ne=ye[Re];lt(Ne,X,O),j.add(Ne)}else lt(ye,X,O),j.add(ye)}),x.pop(),p=null,j},this.compileAsync=function(b,F,X=null){const j=this.compile(b,F,X);return new Promise(O=>{function ye(){if(j.forEach(function(Re){Ae.get(Re).currentProgram.isReady()&&j.delete(Re)}),j.size===0){O(b);return}setTimeout(ye,10)}We.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Wt=null;function gi(b){Wt&&Wt(b)}function Ms(){Pi.stop()}function bs(){Pi.start()}const Pi=new Tu;Pi.setAnimationLoop(gi),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(b){Wt=b,J.setAnimationLoop(b),b===null?Pi.stop():Pi.start()},J.addEventListener("sessionstart",Ms),J.addEventListener("sessionend",bs),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,F,w),p=Ze.get(b,x.length),p.init(F),x.push(p),ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ue.setFromProjectionMatrix(ie),D=this.localClippingEnabled,I=fe.init(this.clippingPlanes,D),v=_e.get(b,f.length),v.init(),f.push(v),J.enabled===!0&&J.isPresenting===!0){const ye=_.xr.getDepthSensingMesh();ye!==null&&ra(ye,F,-1/0,_.sortObjects)}ra(b,F,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(V,ue),xe=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,xe&&Ee.addToRenderList(v,b),this.info.render.frame++,I===!0&&fe.beginShadows();const X=p.state.shadowsArray;Te.render(X,b,F),I===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,O=v.transmissive;if(p.setupLights(),F.isArrayCamera){const ye=F.cameras;if(O.length>0)for(let Re=0,Ne=ye.length;Re<Ne;Re++){const ke=ye[Re];Ya(j,O,b,ke)}xe&&Ee.render(b);for(let Re=0,Ne=ye.length;Re<Ne;Re++){const ke=ye[Re];oa(v,b,ke,ke.viewport)}}else O.length>0&&Ya(j,O,b,F),xe&&Ee.render(b),oa(v,b,F);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(_,b,F),ct.resetDefaultState(),k=-1,q=null,x.pop(),x.length>0?(p=x[x.length-1],I===!0&&fe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ra(b,F,X,j){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){j&&se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);const Re=$.update(b),Ne=b.material;Ne.visible&&v.push(b,Re,Ne,X,se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const Re=$.update(b),Ne=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),se.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),se.copy(Re.boundingSphere.center)),se.applyMatrix4(b.matrixWorld).applyMatrix4(ie)),Array.isArray(Ne)){const ke=Re.groups;for(let Xe=0,je=ke.length;Xe<je;Xe++){const Be=ke[Xe],ut=Ne[Be.materialIndex];ut&&ut.visible&&v.push(b,Re,ut,X,se.z,Be)}}else Ne.visible&&v.push(b,Re,Ne,X,se.z,null)}}const ye=b.children;for(let Re=0,Ne=ye.length;Re<Ne;Re++)ra(ye[Re],F,X,j)}function oa(b,F,X,j){const O=b.opaque,ye=b.transmissive,Re=b.transparent;p.setupLightsView(X),I===!0&&fe.setGlobalState(_.clippingPlanes,X),j&&Me.viewport(y.copy(j)),O.length>0&&Ln(O,F,X),ye.length>0&&Ln(ye,F,X),Re.length>0&&Ln(Re,F,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ya(b,F,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Vi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?dn:pn,minFilter:Jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const ye=p.state.transmissionRenderTarget[j.id],Re=j.viewport||y;ye.setSize(Re.z,Re.w);const Ne=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(K),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),xe&&Ee.render(X);const ke=_.toneMapping;_.toneMapping=Dn;const Xe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),I===!0&&fe.setGlobalState(_.clippingPlanes,j),Ln(b,X,j),A.updateMultisampleRenderTarget(ye),A.updateRenderTargetMipmap(ye),We.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Be=0,ut=F.length;Be<ut;Be++){const mt=F[Be],Et=mt.object,Jt=mt.geometry,ht=mt.material,ze=mt.group;if(ht.side===Bi&&Et.layers.test(j.layers)){const Bt=ht.side;ht.side=ri,ht.needsUpdate=!0,ja(Et,X,j,Jt,ht,ze),ht.side=Bt,ht.needsUpdate=!0,je=!0}}je===!0&&(A.updateMultisampleRenderTarget(ye),A.updateRenderTargetMipmap(ye))}_.setRenderTarget(Ne),_.setClearColor(K,Y),Xe!==void 0&&(j.viewport=Xe),_.toneMapping=ke}function Ln(b,F,X){const j=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ye=b.length;O<ye;O++){const Re=b[O],Ne=Re.object,ke=Re.geometry,Xe=j===null?Re.material:j,je=Re.group;Ne.layers.test(X.layers)&&ja(Ne,F,X,ke,Xe,je)}}function ja(b,F,X,j,O,ye){b.onBeforeRender(_,F,X,j,O,ye),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(_,F,X,j,b,ye),O.transparent===!0&&O.side===Bi&&O.forceSinglePass===!1?(O.side=ri,O.needsUpdate=!0,_.renderBufferDirect(X,F,j,O,b,ye),O.side=Cn,O.needsUpdate=!0,_.renderBufferDirect(X,F,j,O,b,ye),O.side=Bi):_.renderBufferDirect(X,F,j,O,b,ye),b.onAfterRender(_,F,X,j,O,ye)}function Un(b,F,X){F.isScene!==!0&&(F=re);const j=Ae.get(b),O=p.state.lights,ye=p.state.shadowsArray,Re=O.state.version,Ne=me.getParameters(b,O.state,ye,F,X),ke=me.getProgramCacheKey(Ne);let Xe=j.programs;j.environment=b.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(b.isMeshStandardMaterial?H:S).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Xe===void 0&&(b.addEventListener("dispose",ot),Xe=new Map,j.programs=Xe);let je=Xe.get(ke);if(je!==void 0){if(j.currentProgram===je&&j.lightsStateVersion===Re)return $a(b,Ne),je}else Ne.uniforms=me.getUniforms(b),b.onBeforeCompile(Ne,_),je=me.acquireProgram(Ne,ke),Xe.set(ke,je),j.uniforms=Ne.uniforms;const Be=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=fe.uniform),$a(b,Ne),j.needsLights=Es(b),j.lightsStateVersion=Re,j.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),j.currentProgram=je,j.uniformsList=null,je}function Nn(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=mr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function $a(b,F){const X=Ae.get(b);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Nr(b,F,X,j,O){F.isScene!==!0&&(F=re),A.resetTextureUnits();const ye=F.fog,Re=j.isMeshStandardMaterial?F.environment:null,Ne=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:In,ke=(j.isMeshStandardMaterial?H:S).get(j.envMap||Re),Xe=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,je=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Be=!!X.morphAttributes.position,ut=!!X.morphAttributes.normal,mt=!!X.morphAttributes.color;let Et=Dn;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Et=_.toneMapping);const Jt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ht=Jt!==void 0?Jt.length:0,ze=Ae.get(j),Bt=p.state.lights;if(I===!0&&(D===!0||b!==q)){const xt=b===q&&j.id===k;fe.setState(j,b,xt)}let C=!1;j.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Bt.state.version||ze.outputColorSpace!==Ne||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isBatchedMesh&&ze.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ze.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==ke||j.fog===!0&&ze.fog!==ye||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==fe.numPlanes||ze.numIntersection!==fe.numIntersection)||ze.vertexAlphas!==Xe||ze.vertexTangents!==je||ze.morphTargets!==Be||ze.morphNormals!==ut||ze.morphColors!==mt||ze.toneMapping!==Et||ze.morphTargetsCount!==ht)&&(C=!0):(C=!0,ze.__version=j.version);let G=ze.currentProgram;C===!0&&(G=Un(j,F,O));let Se=!1,he=!1,Fe=!1;const be=G.getUniforms(),Je=ze.uniforms;if(Me.useProgram(G.program)&&(Se=!0,he=!0,Fe=!0),j.id!==k&&(k=j.id,he=!0),Se||q!==b){Ve.reverseDepthBuffer?(B.copy(b.projectionMatrix),vf(B),_f(B),be.setValue(L,"projectionMatrix",B)):be.setValue(L,"projectionMatrix",b.projectionMatrix),be.setValue(L,"viewMatrix",b.matrixWorldInverse);const xt=be.map.cameraPosition;xt!==void 0&&xt.setValue(L,ce.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&be.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&be.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,he=!0,Fe=!0)}if(O.isSkinnedMesh){be.setOptional(L,O,"bindMatrix"),be.setOptional(L,O,"bindMatrixInverse");const xt=O.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),be.setValue(L,"boneTexture",xt.boneTexture,A))}O.isBatchedMesh&&(be.setOptional(L,O,"batchingTexture"),be.setValue(L,"batchingTexture",O._matricesTexture,A),be.setOptional(L,O,"batchingIdTexture"),be.setValue(L,"batchingIdTexture",O._indirectTexture,A),be.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&be.setValue(L,"batchingColorTexture",O._colorsTexture,A));const It=X.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&we.update(O,X,G),(he||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,be.setValue(L,"receiveShadow",O.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Je.envMap.value=ke,Je.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(Je.envMapIntensity.value=F.environmentIntensity),he&&(be.setValue(L,"toneMappingExposure",_.toneMappingExposure),ze.needsLights&&mn(Je,Fe),ye&&j.fog===!0&&ve.refreshFogUniforms(Je,ye),ve.refreshMaterialUniforms(Je,j,ae,z,p.state.transmissionRenderTarget[b.id]),mr.upload(L,Nn(ze),Je,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(mr.upload(L,Nn(ze),Je,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&be.setValue(L,"center",O.center),be.setValue(L,"modelViewMatrix",O.modelViewMatrix),be.setValue(L,"normalMatrix",O.normalMatrix),be.setValue(L,"modelMatrix",O.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const xt=j.uniformsGroups;for(let dt=0,pt=xt.length;dt<pt;dt++){const Mt=xt[dt];N.update(Mt,G),N.bind(Mt,G)}}return G}function mn(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Es(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,F,X){Ae.get(b.texture).__webglTexture=F,Ae.get(b.depthTexture).__webglTexture=X;const j=Ae.get(b);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const X=Ae.get(b);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,X=0){w=b,U=F,P=X;let j=!0,O=null,ye=!1,Re=!1;if(b){const ke=Ae.get(b);if(ke.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(ke.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(ke.__hasExternalTextures)A.rebindTextures(b,Ae.get(b.texture).__webglTexture,Ae.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(ke.__boundDepthTexture!==Be){if(Be!==null&&Ae.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const Xe=b.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);const je=Ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(je[F])?O=je[F][X]:O=je[F],ye=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?O=Ae.get(b).__webglMultisampledFramebuffer:Array.isArray(je)?O=je[X]:O=je,y.copy(b.viewport),M.copy(b.scissor),W=b.scissorTest}else y.copy(pe).multiplyScalar(ae).floor(),M.copy(de).multiplyScalar(ae).floor(),W=Oe;if(Me.bindFramebuffer(L.FRAMEBUFFER,O)&&j&&Me.drawBuffers(b,O),Me.viewport(y),Me.scissor(M),Me.setScissorTest(W),ye){const ke=Ae.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,ke.__webglTexture,X)}else if(Re){const ke=Ae.get(b.texture),Xe=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,X||0,Xe)}k=-1},this.readRenderTargetPixels=function(b,F,X,j,O,ye,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){Me.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const ke=b.texture,Xe=ke.format,je=ke.type;if(!Ve.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-j&&X>=0&&X<=b.height-O&&L.readPixels(F,X,j,O,Ye.convert(Xe),Ye.convert(je),ye)}finally{const ke=w!==null?Ae.get(w).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,F,X,j,O,ye,Re){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){const ke=b.texture,Xe=ke.format,je=ke.type;if(!Ve.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-j&&X>=0&&X<=b.height-O){Me.bindFramebuffer(L.FRAMEBUFFER,Ne);const Be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.bufferData(L.PIXEL_PACK_BUFFER,ye.byteLength,L.STREAM_READ),L.readPixels(F,X,j,O,Ye.convert(Xe),Ye.convert(je),0);const ut=w!==null?Ae.get(w).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ut);const mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await gf(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ye),L.deleteBuffer(Be),L.deleteSync(mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,X=0){b.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const j=Math.pow(2,-X),O=Math.floor(b.image.width*j),ye=Math.floor(b.image.height*j),Re=F!==null?F.x:0,Ne=F!==null?F.y:0;A.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Re,Ne,O,ye),Me.unbindTexture()},this.copyTextureToTexture=function(b,F,X=null,j=null,O=0){b.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,X=null);let ye,Re,Ne,ke,Xe,je;X!==null?(ye=X.max.x-X.min.x,Re=X.max.y-X.min.y,Ne=X.min.x,ke=X.min.y):(ye=b.image.width,Re=b.image.height,Ne=0,ke=0),j!==null?(Xe=j.x,je=j.y):(Xe=0,je=0);const Be=Ye.convert(F.format),ut=Ye.convert(F.type);A.setTexture2D(F,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const mt=L.getParameter(L.UNPACK_ROW_LENGTH),Et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Jt=L.getParameter(L.UNPACK_SKIP_PIXELS),ht=L.getParameter(L.UNPACK_SKIP_ROWS),ze=L.getParameter(L.UNPACK_SKIP_IMAGES),Bt=b.isCompressedTexture?b.mipmaps[O]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),L.pixelStorei(L.UNPACK_SKIP_ROWS,ke),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Xe,je,ye,Re,Be,ut,Bt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Xe,je,Bt.width,Bt.height,Be,Bt.data):L.texSubImage2D(L.TEXTURE_2D,O,Xe,je,ye,Re,Be,ut,Bt),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Jt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze),O===0&&F.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,F,X=null,j=null,O=0){b.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,j=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0);let ye,Re,Ne,ke,Xe,je,Be,ut,mt;const Et=b.isCompressedTexture?b.mipmaps[O]:b.image;X!==null?(ye=X.max.x-X.min.x,Re=X.max.y-X.min.y,Ne=X.max.z-X.min.z,ke=X.min.x,Xe=X.min.y,je=X.min.z):(ye=Et.width,Re=Et.height,Ne=Et.depth,ke=0,Xe=0,je=0),j!==null?(Be=j.x,ut=j.y,mt=j.z):(Be=0,ut=0,mt=0);const Jt=Ye.convert(F.format),ht=Ye.convert(F.type);let ze;if(F.isData3DTexture)A.setTexture3D(F,0),ze=L.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)A.setTexture2DArray(F,0),ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Bt=L.getParameter(L.UNPACK_ROW_LENGTH),C=L.getParameter(L.UNPACK_IMAGE_HEIGHT),G=L.getParameter(L.UNPACK_SKIP_PIXELS),Se=L.getParameter(L.UNPACK_SKIP_ROWS),he=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Et.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,je),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(ze,O,Be,ut,mt,ye,Re,Ne,Jt,ht,Et.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(ze,O,Be,ut,mt,ye,Re,Ne,Jt,Et.data):L.texSubImage3D(ze,O,Be,ut,mt,ye,Re,Ne,Jt,ht,Et),L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,C),L.pixelStorei(L.UNPACK_SKIP_PIXELS,G),L.pixelStorei(L.UNPACK_SKIP_ROWS,Se),L.pixelStorei(L.UNPACK_SKIP_IMAGES,he),O===0&&F.generateMipmaps&&L.generateMipmap(ze),Me.unbindTexture()},this.initRenderTarget=function(b){Ae.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){U=0,P=0,w=null,Me.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wl?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Dr?"display-p3":"srgb"}}class Lu extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ir extends aa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xr=new R,Mr=new R,$c=new Rt,ss=new Cr,$s=new xs,vo=new R,Zc=new R;class ys extends li{constructor(e=new Tt,t=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)xr.fromBufferAttribute(t,a-1),Mr.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=xr.distanceTo(Mr);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(a),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;$c.copy(a).invert(),ss.copy(e.ray).applyMatrix4($c);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=m,p=g-1;v<p;v+=c){const f=h.getX(v),x=h.getX(v+1),_=Zs(this,e,ss,l,f,x);_&&t.push(_)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(m),f=Zs(this,e,ss,l,v,p);f&&t.push(f)}}else{const m=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let v=m,p=g-1;v<p;v+=c){const f=Zs(this,e,ss,l,v,v+1);f&&t.push(f)}if(this.isLineLoop){const v=Zs(this,e,ss,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zs(n,e,t,i,a,s){const r=n.geometry.attributes.position;if(xr.fromBufferAttribute(r,a),Mr.fromBufferAttribute(r,s),t.distanceSqToSegment(xr,Mr,vo,Zc)>i)return;vo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(vo);if(!(l<e.near||l>e.far))return{distance:l,point:Zc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Jc=new R,Qc=new R;class Ss extends ys{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,s=t.count;a<s;a+=2)Jc.fromBufferAttribute(t,a),Qc.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Jc.distanceTo(Qc);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class w3 extends ys{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class P3 extends aa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eh=new Rt,pl=new Cr,Js=new xs,Qs=new R;class sa extends li{constructor(e=new Tt,t=new P3){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(a),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;eh.copy(a).invert(),pl.copy(e.ray).applyMatrix4(eh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let g=d,v=m;g<v;g++){const p=c.getX(g);Qs.fromBufferAttribute(u,p),th(Qs,p,l,a,e,t,this)}}else{const d=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let g=d,v=m;g<v;g++)Qs.fromBufferAttribute(u,g),th(Qs,g,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function th(n,e,t,i,a,s,r){const o=pl.distanceSqToPoint(n);if(o<t){const l=new R;pl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}const er=new R,tr=new R,_o=new R,ir=new Ti;class D3 extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),s=Math.cos(Ra*t),r=e.getIndex(),o=e.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:p,c:f}=ir;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),ir.getNormal(_o),u[0]=`${Math.round(v.x*a)},${Math.round(v.y*a)},${Math.round(v.z*a)}`,u[1]=`${Math.round(p.x*a)},${Math.round(p.y*a)},${Math.round(p.z*a)}`,u[2]=`${Math.round(f.x*a)},${Math.round(f.y*a)},${Math.round(f.z*a)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const _=(x+1)%3,E=u[x],U=u[_],P=ir[h[x]],w=ir[h[_]],k=`${E}_${U}`,q=`${U}_${E}`;q in d&&d[q]?(_o.dot(d[q].normal)<=s&&(m.push(P.x,P.y,P.z),m.push(w.x,w.y,w.z)),d[q]=null):k in d||(d[k]={index0:c[x],index1:c[_],normal:_o.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:p}=d[g];er.fromBufferAttribute(o,v),tr.fromBufferAttribute(o,p),m.push(er.x,er.y,er.z),m.push(tr.x,tr.y,tr.z)}this.setAttribute("position",new et(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rl extends Tt{constructor(e=.5,t=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/a,m=new R,g=new Ke;for(let v=0;v<=a;v++){for(let p=0;p<=i;p++){const f=s+p/i*r;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<a;v++){const p=v*(i+1);for(let f=0;f<i;f++){const x=f+p,_=x,E=x+i+1,U=x+i+2,P=x+1;o.push(_,E,P),o.push(E,U,P)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ba extends Tt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new R,d=new R,m=[],g=[],v=[],p=[];for(let f=0;f<=i;f++){const x=[],_=f/i;let E=0;f===0&&r===0?E=.5/t:f===i&&l===Math.PI&&(E=-.5/t);for(let U=0;U<=t;U++){const P=U/t;u.x=-e*Math.cos(a+P*s)*Math.sin(r+_*o),u.y=e*Math.cos(r+_*o),u.z=e*Math.sin(a+P*s)*Math.sin(r+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(P+E,1-_),x.push(c++)}h.push(x)}for(let f=0;f<i;f++)for(let x=0;x<t;x++){const _=h[f][x+1],E=h[f][x],U=h[f+1][x],P=h[f+1][x+1];(f!==0||r>0)&&m.push(_,E,P),(f!==i-1||l<Math.PI)&&m.push(E,U,P)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class C3 extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const ih={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class R3{constructor(e,t,i){const a=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&a.onStart!==void 0&&a.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,a.onProgress!==void 0&&a.onProgress(h,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const I3=new R3;class Il{constructor(e){this.manager=e!==void 0?e:I3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,s){i.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Il.DEFAULT_MATERIAL_NAME="__DEFAULT";class L3 extends Il{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ih.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=vs("img");function l(){h(),ih.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),a&&a(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class U3 extends Il{constructor(e){super(e)}load(e,t,i,a){const s=new oi,r=new L3(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,a),s}}class N3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nh(){return performance.now()}class ah{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ii(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class k3 extends na{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);const sh={type:"change"},Ll={type:"start"},Uu={type:"end"},nr=new Cr,rh=new Tn,F3=Math.cos(70*ds.DEG2RAD),zt=new R,di=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yo=1e-6;class O3 extends k3{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.DOLLY,RIGHT:Qn.PAN},this.touches={ONE:wa.ROTATE,TWO:wa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new ta,this._lastTargetPosition=new R,this._quat=new ta().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ah,this._sphericalDelta=new ah,this._scale=1,this._panOffset=new R,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new R,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z3.bind(this),this._onPointerDown=B3.bind(this),this._onPointerUp=G3.bind(this),this._onContextMenu=Y3.bind(this),this._onMouseWheel=W3.bind(this),this._onKeyDown=K3.bind(this),this._onTouchStart=X3.bind(this),this._onTouchMove=q3.bind(this),this._onMouseDown=H3.bind(this),this._onMouseMove=V3.bind(this),this._interceptControlDown=j3.bind(this),this._interceptControlUp=$3.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sh),this.update(),this.state=_t.NONE}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=di:i>Math.PI&&(i-=di),a<-Math.PI?a+=di:a>Math.PI&&(a-=di),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=zt.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(nr.origin.copy(this.object.position),nr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nr.direction))<F3?this.object.lookAt(this.target):(rh.setFromNormalAndCoplanarPoint(this.object.up,this.target),nr.intersectPlane(rh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>yo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yo||this._lastTargetPosition.distanceToSquared(this.target)>yo?(this.dispatchEvent(sh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?di/60*this.autoRotateSpeed*e:di/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;zt.copy(a).sub(this.target);let s=zt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,s=t-i.top,r=i.width,o=i.height;this._mouse.x=a/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(di*this._rotateDelta.x/t.clientHeight),this._rotateUp(di*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(di*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-di*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(di*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-di*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,s=Math.sqrt(i*i+a*a);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(a,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(di*this._rotateDelta.x/t.clientHeight),this._rotateUp(di*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,s=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function B3(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function z3(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function G3(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uu),this.state=_t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function H3(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_t.DOLLY;break;case Qn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}break;case Qn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Ll)}function V3(n){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function W3(n){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(n.preventDefault(),this.dispatchEvent(Ll),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Uu))}function K3(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function X3(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case wa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_t.TOUCH_ROTATE;break;case wa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case wa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_t.TOUCH_DOLLY_PAN;break;case wa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Ll)}function q3(n){switch(this._trackPointer(n),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_t.NONE}}function Y3(n){this.enabled!==!1&&n.preventDefault()}function j3(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $3(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Nu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class qa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Z3=new Dl(-1,1,1,-1,0,1);class J3 extends Tt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}}const Q3=new J3;class Ul{constructor(e){this._mesh=new Gt(Q3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Z3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class eg extends qa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_s.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ul(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class oh extends qa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const a=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.buffers.stencil.setFunc(a.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(a.EQUAL,1,4294967295),s.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.buffers.stencil.setLocked(!0)}}class tg extends qa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ig{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ke);this._width=i.width,this._height=i.height,t=new Vi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eg(Nu),this.copyPass.material.blending=un,this.clock=new N3}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let a=0,s=this.passes.length;a<s;a++){const r=this.passes[a];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oh!==void 0&&(r instanceof oh?i=!0:r instanceof tg&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ng extends qa{constructor(e,t,i=null,a=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(e,t,i){const a=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=a}}const ag={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class za extends qa{constructor(e,t,i,a){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=a,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Vi(s,r,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Vi(s,r,{type:dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Vi(s,r,{type:dn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),r=Math.round(r/2)}const o=ag;this.highPassUniforms=_s.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ke(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Nu;this.copyUniforms=_s.clone(h.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Wi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new ia,this.fsQuad=new Ul(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(i,a);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,a),this.renderTargetsVertical[s].setSize(i,a),this.separableBlurMaterials[s].uniforms.invSize.value=new Ke(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2)}render(e,t,i,a,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=za.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=za.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}za.BlurDirectionX=new Ke(1,0);za.BlurDirectionY=new Ke(0,1);const sg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class rg extends qa{constructor(){super();const e=sg;this.uniforms=_s.clone(e.uniforms),this.material=new C3({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ul(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===iu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const mi=3,og=6e3,lh=5e-5,ch=420,ar=500,fi=1024,jt=8192,Pn=.0065,lg=mi/206264.806,ku=lg/Pn,cg=Math.sqrt(ku),Ga={bg:329482,gridStrong:4157331,orbit:10467788,planet:13030621},Fu=23.4392811;class hg{constructor(e,t){He(this,"positions");He(this,"count");He(this,"nodes");this.positions=e,this.count=t,this.nodes=new Int32Array(t);for(let i=0;i<t;i++)this.nodes[i]=i;this.build(0,t,0)}build(e,t,i){if(t-e<=1)return;const a=i%3,s=e+t>>>1;this.quickselect(e,t,s,a),this.build(e+1,s+1,i+1),this.build(s+1,t,i+1);const r=this.nodes[s];for(let o=s;o>e;o--)this.nodes[o]=this.nodes[o-1];this.nodes[e]=r}quickselect(e,t,i,a){for(;t-e>1;){const s=this.coord(this.nodes[e+t>>>1],a);let r=e,o=t-1;for(;r<=o;){for(;this.coord(this.nodes[r],a)<s;)r++;for(;this.coord(this.nodes[o],a)>s;)o--;if(r<=o){const l=this.nodes[r];this.nodes[r]=this.nodes[o],this.nodes[o]=l,r++,o--}}if(i<=o)t=o+1;else if(i>=r)e=r;else return}}coord(e,t){return this.positions[e*3+t]}nearest(e,t=1){const i=e[0],a=e[1],s=e[2],r=new Int32Array(t),o=new Float64Array(t);let l=0;const c=(m,g)=>{if(l<t){let v=l++;for(r[v]=m,o[v]=g;v>0;){const p=v-1>>>1;if(o[p]<o[v]){const f=r[p],x=o[p];r[p]=r[v],o[p]=o[v],r[v]=f,o[v]=x,v=p}else break}}else if(g<o[0]){r[0]=m,o[0]=g;let v=0;for(;;){const p=2*v+1,f=p+1;let x=v;if(p<l&&o[p]>o[x]&&(x=p),f<l&&o[f]>o[x]&&(x=f),x===v)break;const _=r[x],E=o[x];r[x]=r[v],o[x]=o[v],r[v]=_,o[v]=E,v=x}}},h=()=>l<t?1/0:o[0],u=(m,g,v)=>{if(g-m<=0)return;const p=this.nodes[m],f=this.positions[p*3]-i,x=this.positions[p*3+1]-a,_=this.positions[p*3+2]-s;if(c(p,f*f+x*x+_*_),g-m===1)return;const E=v%3,U=m+1+g>>>1,P=this.coord(p,E),k=(E===0?i:E===1?a:s)-P,q=k<=0?[m+1,U+1]:[U+1,g],y=k<=0?[U+1,g]:[m+1,U+1];u(q[0],q[1],v+1),k*k<h()&&u(y[0],y[1],v+1)};u(0,this.count,0);const d=[];for(let m=0;m<l;m++)d.push({i:r[m],d:o[m]});return d.sort((m,g)=>m.d-g.d),d.map(m=>m.i)}withinRadius(e,t){const i=t*t,a=[],s=(r,o,l)=>{if(o-r<=0)return;const c=this.nodes[r],h=this.positions[c*3]-e[0],u=this.positions[c*3+1]-e[1],d=this.positions[c*3+2]-e[2];if(h*h+u*u+d*d<=i&&a.push(c),o-r===1)return;const m=l%3,g=r+1+o>>>1,v=this.coord(c,m),f=e[m]-v;f<=t&&s(r+1,g+1,l+1),f>=-t&&s(g+1,o,l+1)};return s(0,this.count,0),a}get size(){return this.count}}const hh=1314083905,uh=2;function Lr(n,e,t,i=fi){const a=Math.round(n*i)/i,s=Math.round(e*i)/i,r=Math.round(t*i)/i;return{hx:a,hy:s,hz:r,lx:n-a,ly:e-s,lz:t-r}}function ug(n){const e=new DataView(n),t=e.getUint32(0,!0),i=e.getUint32(4,!0);if(t!==hh)throw new Error(`stars-near.bin: bad magic 0x${t.toString(16)} (expected 0x${hh.toString(16)}); re-run export_starmap.py.`);if(i!==uh)throw new Error(`stars-near.bin: unsupported version ${i} (loader supports ${uh}).`);const a=e.getUint32(8,!0),s=e.getFloat32(12,!0),r=e.getFloat32(16,!0),o=e.getFloat32(20,!0),l=e.getFloat32(24,!0),c=e.getFloat32(28,!0),h=32,u=new Int16Array(n,h,a*4),d=new Uint8Array(n,h,a*8),m=new Float32Array(a*3),g=new Float32Array(a*3),v=new Float32Array(a*3),p=new Float32Array(a),f=new Float32Array(a),x=s/32767*mi,_=o>r?(o-r)/255:0,E=c>l?(c-l)/255:0;for(let U=0;U<a;U++){const P=U*4,w=U*8,k=u[P]*x,q=u[P+1]*x,y=u[P+2]*x;m[U*3]=k,m[U*3+1]=q,m[U*3+2]=y;const M=Lr(k,q,y,jt);g[U*3]=M.hx,g[U*3+1]=M.hy,g[U*3+2]=M.hz,v[U*3]=M.lx,v[U*3+1]=M.ly,v[U*3+2]=M.lz,p[U]=r+d[w+6]*_,f[U]=l+d[w+7]*E}return{positions:m,positionsHi:g,positionsLo:v,mag:p,ci:f,count:a}}const Nl=`
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
`,dg=`
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
`,pg=`
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
`;function Ur(n,e,t=fi){const i=n.uniforms.uCamHi.value,a=n.uniforms.uCamLo.value,s=Math.round(e.x*t)/t,r=Math.round(e.y*t)/t,o=Math.round(e.z*t)/t;i.set(s,r,o),a.set(e.x-s,e.y-r,e.z-o)}function Ou(n,e,t){const i=new Tt;i.setAttribute("position",new et(n.positionsHi,3)),i.setAttribute("aPosLo",new et(n.positionsLo,3)),i.setAttribute("aMag",new et(n.mag,1)),i.setAttribute("aCI",new et(n.ci,1)),i.setAttribute("aHidden",new et(new Float32Array(n.count),1));const a=new yt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uBaseSize:{value:t},uRefMag:{value:6},uAttenuate:{value:e?1:0},uIntensity:{value:e?1.15:.7},uCamDist:{value:0},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:Nl+dg,fragmentShader:pg,transparent:!0,depthWrite:!1,blending:Wi}),s=new sa(i,a);return s.frustumCulled=!1,s}function fg(n,e,t,i=1.5,a=!1){const s=n.length,r=new Float32Array(s*3),o=new Float32Array(s*3),l=new Float32Array(s*3);for(let d=0;d<s;d++){const m=n[d][0]*mi,g=n[d][1]*mi,v=n[d][2]*mi;r[d*3]=m,r[d*3+1]=g,r[d*3+2]=v;const p=Lr(m,g,v);o[d*3]=p.hx,o[d*3+1]=p.hy,o[d*3+2]=p.hz,l[d*3]=p.lx,l[d*3+1]=p.ly,l[d*3+2]=p.lz}const c={positionsHi:o,positionsLo:l,mag:Float32Array.from(e),ci:Float32Array.from(t),count:s},h=Ou(c,a,i),u=h.material;return u.uniforms.uIntensity.value=.95,{object:h,material:u,setCamPos(d){Ur(u,d)}}}const Bu=`
	uniform float uPixelRatio;
	uniform float uSize;
	void main() {
		gl_Position = projectionMatrix * rteMvPosition();
		gl_PointSize = uSize * uPixelRatio;
	}
`,mg=`
	precision mediump float;
	void main() {
		discard;
	}
`;function gg(n){const e=n.length,t=new Float32Array(e*3),i=new Float32Array(e*3);for(let o=0;o<e;o++){const l=n[o],c=Lr(l.x,l.y,l.z,jt);t[o*3]=c.hx,t[o*3+1]=c.hy,t[o*3+2]=c.hz,i[o*3]=c.lx,i[o*3+1]=c.ly,i[o*3+2]=c.lz}const a=new Tt;a.setAttribute("position",new et(t,3)),a.setAttribute("aPosLo",new et(i,3));const s=new yt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:7.5},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:Nl+Bu,fragmentShader:mg,transparent:!0,depthWrite:!1,blending:Wi}),r=new sa(a,s);return r.frustumCulled=!1,{object:r,setCamPos(o){Ur(s,o,jt)}}}const vg=`
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
`;function _g(n){const e=n.length,t=new Tt,i=new et(new Float32Array(e*3),3),a=new et(new Float32Array(e*3),3);t.setAttribute("position",i),t.setAttribute("aPosLo",a);const s=i.array,r=a.array;let o=null;function l(){let u=0;for(const d of n){if(d.id===o)continue;const m=Lr(d.pos.x,d.pos.y,d.pos.z,jt);s[u*3]=m.hx,s[u*3+1]=m.hy,s[u*3+2]=m.hz,r[u*3]=m.lx,r[u*3+1]=m.ly,r[u*3+2]=m.lz,u++}i.needsUpdate=!0,a.needsUpdate=!0,t.setDrawRange(0,u)}l();const c=new yt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:22},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:Nl+Bu,fragmentShader:vg,transparent:!0,depthWrite:!1}),h=new sa(t,c);return h.frustumCulled=!1,h.visible=!1,h.renderOrder=3,{object:h,setVisible(u){h.visible=u},setSelectedSystemId(u){u!==o&&(o=u,l())},setCamPos(u){Ur(c,u,jt)}}}async function yg(n){const e=await fetch(`${n}/data/stars-near.bin`).then(u=>u.arrayBuffer()),t=ug(e),i=Ou(t,!0,.85),a=new hg(t.positions,t.count),s=i.material,r=t.positions,o=i.geometry.getAttribute("aHidden"),l=o.array;let c=null;const h=.03*.03;return{near:i,nearCount:t.count,kdtree:a,setCamDist(u){s.uniforms.uCamDist.value=u},setCamPos(u){Ur(s,u,jt)},setHiddenNear(u){c!==null&&(l[c]=0,c=null);let d=null;if(u){const m=a.nearest([u.x,u.y,u.z],1)[0];if(m!==void 0){const g=r[m*3]-u.x,v=r[m*3+1]-u.y,p=r[m*3+2]-u.z;g*g+v*v+p*p<h&&(l[m]=1,c=m,d={mag:t.mag[m],ci:t.ci[m]})}}return o.needsUpdate=!0,d}}}const Sg=`
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
`,xg=`
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
`,br=3,ps=5,Mg=2,bg=30;function Eg(n,e,t){const i=Math.max(e,1),a=Math.tan(t*Math.PI/360),s=n*a*2/i,r=Math.log(s*bg/br)/Math.log(ps),o=Math.floor(r),l=r-o,c=br*Math.pow(ps,o);return{major:c*ps,minor:c,f:l}}function Ag(){const n=new Hi,e=new yt({uniforms:{uRadius:{value:10},uCamLocal:{value:new R},uLookXY:{value:new Ke},uColor:{value:new st(15002350)},uPlaneScale:{value:1}},vertexShader:Sg,fragmentShader:xg,transparent:!0,depthWrite:!1,side:Bi}),t=new Gt(new Ka(720,720,1,1),e);t.renderOrder=-1,t.frustumCulled=!1,n.add(t);const i=e.uniforms.uCamLocal.value,a=e.uniforms.uLookXY.value;return{group:n,update(s,r,o){const l=o*.4;e.uniforms.uRadius.value=l;const c=Math.max(1e-12,o*.001),h=Math.log(c*30/br)/Math.log(ps),u=Math.floor(h)+Mg,d=br*Math.pow(ps,u),m=Math.floor(s.x/d)*d,g=Math.floor(s.y/d)*d;n.position.set(m,g,s.z);const v=(d+l)*1.2;e.uniforms.uPlaneScale.value=Math.min(1,Math.max(o/225,v/360)),a.set(s.x-m,s.y-g),i.copy(r).sub(n.position)}}}const Tg=`
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
`,wg=`
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
`;function dh(n,e,t){const i=Math.round(n*jt)/jt,a=Math.round(e*jt)/jt,s=Math.round(t*jt)/jt;return{hx:i,hy:a,hz:s,lx:n-i,ly:e-a,lz:t-s}}function Pg(n){const e=n.length,t=new Float32Array(e*2*3),i=new Float32Array(e*2*3),a=new Float32Array(e*2*3),s=new Float32Array(e*2*3),r=new Float32Array(e*2);for(let h=0;h<e;h++){const u=n[h],d=dh(u.x,u.y,u.z),m=dh(u.x,u.y,0);t[h*6+0]=d.hx,t[h*6+1]=d.hy,t[h*6+2]=d.hz,i[h*6+0]=d.lx,i[h*6+1]=d.ly,i[h*6+2]=d.lz,r[h*2]=0,t[h*6+3]=m.hx,t[h*6+4]=m.hy,t[h*6+5]=m.hz,i[h*6+3]=m.lx,i[h*6+4]=m.ly,i[h*6+5]=m.lz,r[h*2+1]=1,a[h*6+0]=d.hx,a[h*6+1]=d.hy,a[h*6+2]=d.hz,s[h*6+0]=d.lx,s[h*6+1]=d.ly,s[h*6+2]=d.lz,a[h*6+3]=d.hx,a[h*6+4]=d.hy,a[h*6+5]=d.hz,s[h*6+3]=d.lx,s[h*6+4]=d.ly,s[h*6+5]=d.lz}const o=new Tt;o.setAttribute("position",new et(t,3)),o.setAttribute("aPosLo",new et(i,3)),o.setAttribute("aStarHi",new et(a,3)),o.setAttribute("aStarLo",new et(s,3)),o.setAttribute("aFoot",new et(r,1));const l=new yt({uniforms:{uCenter:{value:new R},uRadius:{value:10},uGridZ:{value:0},uOpacity:{value:.42},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:Tg,fragmentShader:wg,transparent:!0,depthWrite:!1}),c=new Ss(o,l);return c.frustumCulled=!1,{object:c,update(h,u){l.uniforms.uCenter.value.copy(h),l.uniforms.uRadius.value=u,l.uniforms.uGridZ.value=h.z},setCamPos(h){const u=l.uniforms.uCamHi.value,d=l.uniforms.uCamLo.value,m=Math.round(h.x*jt)/jt,g=Math.round(h.y*jt)/jt,v=Math.round(h.z*jt)/jt;u.set(m,g,v),d.set(h.x-m,h.y-g,h.z-v)}}}const zu=Fu*Math.PI/180,ph=Math.cos(zu),fh=Math.sin(zu);function Dg(n,e,t){const i=n*Math.PI/180,a=e*Math.PI/180,s=Math.cos(a)*Math.cos(i),r=Math.cos(a)*Math.sin(i),o=Math.sin(a),l=s,c=r*ph+o*fh,h=-r*fh+o*ph,u=t*mi;return new R(l*u,c*u,h*u)}const si=Math.PI/180,Gu=114e-10,Cg=.01,mh=.3,gh=.6,vh=.02,_h=1.2;function Rg(n){return n<1?.3:.1}function Ig(n){return n<1?.15:.1}const Lg={orbitScale:1,bodyScale:1};function yh(n,e=Lg){const t=n.pos?new R(n.pos[0]*mi,n.pos[1]*mi,n.pos[2]*mi):Dg(n.ra,n.dec,n.dist),i=[];let a=0;const{orbitScale:s,bodyScale:r}=e,o=n.id==="SOL",l=n.children.find(f=>f.kind==="star"),c=((l==null?void 0:l.size)??1/0)*r;let h=0;for(const f of n.children)f.kind==="planet"&&(h=Math.max(h,f.size*r));const u=isFinite(c)&&h>_h*c?_h*c/h:1,d=Ig(r);let m=0;for(const f of n.children)if(f.kind==="planet"&&f.realRadiusKm!=null){const x=f.realRadiusKm*Gu*r,_=f.orbitRadius*s;_>0&&(m=Math.max(m,x/_))}const g=m>d?d/m:1;let v=null,p;if(Ug(n.children)){v=new Hi,v.position.copy(t);let f=0;for(const _ of n.children)_.kind==="planet"&&_.angle===void 0&&(_.angle=f*137.508*si%(Math.PI*2),f++);const x=zg(n.children)*s;for(const _ of n.children){if(_.kind!=="star"||o){const E=Ng(_,x,u,g,e);E&&v.add(E)}if(_.kind==="planet"&&_.id){const E=Hg(_).multiplyScalar(s);i.push({id:`${n.id}/${_.id}`,name:_.name??_.id,local:E}),a=Math.max(a,E.length())}if(_.kind==="planet"||_.kind==="orbit"){const E=(_.kind==="planet"?_.orbitRadius:_.radius)*s;a=Math.max(a,E)}if(_.kind==="star"&&_.offset){const E=_.offset;a=Math.max(a,Math.hypot(E[0],E[1],E[2])*s)}_.kind==="belt"&&(a=Math.max(a,_.outerR*s))}!o&&s!==1&&l&&(p=Bg(n.mag),v.add(p))}return{def:n,center:t,bbox:Kg(n.children,e),visualHalf:a,group:v,planets:i,starAnchor:p}}function Ug(n){return!(n.length===0||n.length===1&&n[0].kind==="star")}function Ng(n,e,t,i,a){switch(n.kind){case"star":return kg(n,e,a);case"planet":return Gg(n,t,i,a);case"belt":return Wg(n,a);case"orbit":return Vg(n,a)}}function kg(n,e,t){const i=new Hi,{orbitScale:a,bodyScale:s}=t,r=n.size*s,o=n.halo?n.halo.size*s:0,l=e>0?Math.max(vh,Math.min(1,e*mh/r)):1,c=e>0?Math.min(1,e*gh/r):1,h=n.halo&&e>0?Math.max(vh,Math.min(1,e*mh/o)):1,u=n.halo&&e>0?Math.min(1,e*gh/o):1,d=new Gt(new Ba(r,24,24),new ia({color:n.color}));if(d.userData.bodyKind="star-sphere",d.userData.baseSize=r,d.userData.shrinkTarget=l,d.userData.upperBound=c,i.add(d),n.halo){const m=new Gt(new Ba(o,24,24),new ia({color:n.halo.color,transparent:!0,opacity:n.halo.opacity,blending:Wi,depthWrite:!1}));m.userData.bodyKind="star-halo",m.userData.baseSize=o,m.userData.shrinkTarget=h,m.userData.upperBound=u,i.add(m)}return n.offset&&i.position.set(n.offset[0]*a,n.offset[1]*a,n.offset[2]*a),i}const Fg=`
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
`,Og=`
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
`;function Bg(n){const e=new Tt;e.setAttribute("position",new et([0,0,0],3));const t=new yt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uRefMag:{value:6},uIntensity:{value:1.15},uMag:{value:n??8},uCI:{value:.8}},vertexShader:Fg,fragmentShader:Og,transparent:!0,depthWrite:!1,depthTest:!1,blending:Wi}),i=new sa(e,t);return i.frustumCulled=!1,i.renderOrder=4,i.visible=!1,i}function zg(n){let e=1/0;for(const t of n)if(t.kind==="planet")e=Math.min(e,t.orbitRadius);else if(t.kind==="orbit")e=Math.min(e,t.radius);else if(t.kind==="belt")e=Math.min(e,t.innerR);else if(t.kind==="star"&&t.offset){const i=Math.hypot(t.offset[0],t.offset[1],t.offset[2]);i>0&&(e=Math.min(e,i))}return isFinite(e)?e:0}function Gg(n,e,t,i){const a=new Hi,{orbitScale:s,bodyScale:r}=i,o=n.orbitRadius*s,l=n.ecc??0,c=(n.argPeriDeg??0)*si;a.add(Hu(o,l,c+n.node*si));const h=n.angle??Math.random()*Math.PI*2,u=h+n.node*si,d=kl(o,l,h-c),m=n.size*r*e,g=Math.min(m,o*Rg(r)),v=new Gt(new Ba(g,16,16),new ia({color:n.color}));if(v.userData.bodyKind="planet-marker",v.userData.baseSize=g,n.realRadiusKm!=null){const f=n.realRadiusKm*Gu*r*t;v.userData.realScaleTarget=Math.max(Cg,Math.min(1,f/g))}v.position.set(Math.cos(u)*d,Math.sin(u)*d,0);{const p=g*2.5,f=g*1,x=new Tt;x.setAttribute("position",new et([0,0,-p,0,0,-f,0,0,f,0,0,p],3));const _=new Ss(x,new Ir({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}));_.rotation.x=(n.obliquityDeg??0)*si,_.userData.bodyKind="planet-axis",v.add(_)}if(n.rings){const p=n.size>0?g/(n.size*r):1,f=n.rings.innerR*r*p,x=n.rings.outerR*r*p,_=new Gt(new Rl(f,x,64,1),new ia({color:n.rings.color,side:Bi,transparent:!0,opacity:n.rings.opacity,depthWrite:!1}));_.rotation.x=(n.obliquityDeg??0)*si,_.userData.bodyKind="planet-rings",v.add(_)}return a.add(v),Vu(a,n.inc,n.node),a}function Hg(n){const e=n.angle??0,t=kl(n.orbitRadius,n.ecc??0,e-(n.argPeriDeg??0)*si),i=e+n.node*si,a=new R(Math.cos(i)*t,Math.sin(i)*t,0);if(n.inc!==0){const s=new R(Math.cos(n.node*si),Math.sin(n.node*si),0);a.applyAxisAngle(s,n.inc*si)}return a}function Vg(n,e){const t=new Hi;return t.add(Hu(n.radius*e.orbitScale)),Vu(t,n.inc,n.node),t}function kl(n,e,t){return e>0?n*(1-e*e)/(1+e*Math.cos(t)):n}function Hu(n,e=0,t=0){const a=[];for(let o=0;o<256;o++){const l=o/256*Math.PI*2,c=kl(n,e,l),h=t+l;a.push(Math.cos(h)*c,Math.sin(h)*c,0)}const s=new Tt;s.setAttribute("position",new et(a,3));const r=new w3(s,new Ir({color:Ga.orbit,transparent:!0,opacity:.85,blending:Wi,depthWrite:!1}));return r.renderOrder=1,r}function Vu(n,e,t){e!==0&&n.rotateOnAxis(new R(Math.cos(t*si),Math.sin(t*si),0),e*si)}function Wg(n,e){const t=new Float32Array(n.count*3),i=n.innerR*e.orbitScale,a=n.outerR*e.orbitScale,s=n.thickness*e.orbitScale,r=a-i;for(let h=0;h<n.count;h++){const u=i+Math.random()*r,d=Math.random()*Math.PI*2,m=(Math.random()-.5)*2*s;t[h*3]=Math.cos(d)*u,t[h*3+1]=Math.sin(d)*u,t[h*3+2]=m}const o=new Tt;o.setAttribute("position",new et(t,3));const l=new yt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
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
		`,transparent:!0,depthWrite:!1,depthTest:!1}),c=new sa(o,l);return c.renderOrder=2,c}function Kg(n,e){const t=new Va;t.expandByPoint(new R(0,0,0));const{orbitScale:i,bodyScale:a}=e;for(const o of n)switch(o.kind){case"star":{const l=o.offset??[0,0,0],c=l[0]*i,h=l[1]*i,u=l[2]*i,d=(o.halo?Math.max(o.size,o.halo.size):o.size)*a;t.expandByPoint(new R(c-d,h-d,u-d)),t.expandByPoint(new R(c+d,h+d,u+d));break}case"planet":case"orbit":{const l=(o.kind==="planet"?o.orbitRadius:o.radius)*i,c=l*Math.abs(Math.sin(o.inc*si));t.expandByPoint(new R(-l,-l,-c)),t.expandByPoint(new R(+l,+l,+c));break}case"belt":{const l=o.outerR*i,c=o.thickness*i;t.expandByPoint(new R(-l,-l,-c)),t.expandByPoint(new R(+l,+l,+c));break}}const s=new R;t.getSize(s);const r=Math.max(s.x,s.y,s.z)*.5;return t.expandByScalar(Math.max(.06,.18*r)),t}function Xg(){const n=new Ss(new D3(new Wa(1,1,1)),new Ir({color:Ga.gridStrong,transparent:!0,opacity:.9}));n.renderOrder=2,n.frustumCulled=!1;const e=new R,t=new R(1,1,1),i=new R,a=new R(1,1,1);let s=!1;const r=new R,o=new R;return{object:n,setTo(l,c){c.getCenter(r),c.getSize(o),i.copy(l).add(r),a.copy(o),s||(e.copy(i),t.copy(a),n.position.copy(e),n.scale.copy(t),s=!0)},setVisible(l){n.visible=l},tick(){e.lerp(i,.18),t.lerp(a,.18),n.position.copy(e),n.scale.copy(t)}}}const Sh=[{name:"Chained Maiden",iau:"And",segments:[25.9747,6.6249,12.8897,26.7885,10.7218,13.0592,26.7885,10.7218,13.0592,46.9464,27.549,26.482,76.3681,74.3307,56.2028,46.9464,27.549,26.482,46.9464,27.549,26.482,28.4124,15.8631,18.5299,28.4124,15.8631,18.5299,127.198,70.9409,93.0072]},{name:"Air Pump",iau:"Ant",segments:[-88.3833,11.7289,-68.2345,-23.281,4.7126,-23.3068]},{name:"Bird of Paradise",iau:"Aps",segments:[-21.5704,-77.4122,-129.7857,-3.3331,-26.0318,-38.9192,-3.3331,-26.0318,-38.9192,-3.3976,-27.4711,-38.8773]},{name:"Eagle",iau:"Aql",segments:[6.5172,-10.2601,6.1024,2.3556,-3.8027,2.5106,2.3556,-3.8027,2.5106,78.6348,-131.1868,92.7883,2.3556,-3.8027,2.5106,5.6501,-12.9095,6.5164,5.6501,-12.9095,6.5164,128.3452,-218.4644,99.9262,37.9878,-54.4269,22.5018,128.3452,-218.4644,99.9262,5.6501,-12.9095,6.5164,7.1495,-19.8628,15.4423,7.1495,-19.8628,15.4423,13.6609,-41.3987,33.5326,5.6501,-12.9095,6.5164,11.0769,-35.4934,11.7702]},{name:"Water Bearer",iau:"Aqr",segments:[132.8872,-98.7085,25.0794,177.6209,-89.1303,37.4123,177.6209,-89.1303,37.4123,35.1602,-15.1322,5.54,35.1602,-15.1322,5.54,25.9695,-10.0158,4.3317,25.9695,-10.0158,4.3317,50.7633,-18.0729,7.7139,50.7633,-18.0729,7.7139,106.1686,-35.3667,-.7551,106.1686,-35.3667,-.7551,43.871,-10.6876,-3.1587,43.871,-10.6876,-3.1587,46.6795,-13.8654,-12.8536,177.6209,-89.1303,37.4123,52.2016,-26.2964,2.7635,52.2016,-26.2964,2.7635,55.123,-33.4891,-2.3436,52.2016,-26.2964,2.7635,57.4381,-26.3118,-1.3543,57.4381,-26.3118,-1.3543,92.4901,-36.2544,-9.8535,92.4901,-36.2544,-9.8535,39.8905,-15.4137,-6.1559,39.8905,-15.4137,-6.1559,71.8099,-26.1115,-19.7471,49.3137,-55.3034,10.5198,132.8872,-98.7085,25.0794]},{name:"Altar",iau:"Ara",segments:[6.298,-303.1895,-152.2499,-6.4738,-73.0302,-36.6511,-6.4738,-73.0302,-36.6511,-25.6417,-142.8531,-94.5829,-25.6417,-142.8531,-94.5829,-14.5007,-73.9396,-55.3009,-14.5007,-73.9396,-55.3009,-4.2562,-54.7725,-41.9361,-4.2562,-54.7725,-41.9361,-28.4271,-284.4624,-186.4313,-28.4271,-284.4624,-186.4313,-18.7203,-184.4846,-117.0666,-18.7203,-184.4846,-117.0666,6.298,-303.1895,-152.2499]},{name:"Ram",iau:"Ari",segments:[33.2876,37.2348,9.2114,15.7321,12.1427,3.4917,15.7321,12.1427,3.4917,14.7527,9.9396,2.6545,14.7527,9.9396,2.6545,41.7697,27.3173,6.2717]},{name:"Charioteer",iau:"Aur",segments:[.0492,49.3018,12.0853,.0362,23.1376,9.118,.0362,23.1376,9.118,1.7126,11.9703,5.0991,1.7126,11.9703,5.0991,131.4405,653.8382,219.3016,131.4405,653.8382,219.3016,31.3476,131.9866,25.0313,5.2816,40.527,3.8526,31.3476,131.9866,25.0313,5.2816,40.527,3.8526,.0492,49.3018,12.0853]},{name:"Herdsman",iau:"Boo",segments:[-39.9256,-25.9652,25.1939,-8.8234,-3.9716,5.7535,-8.8234,-3.9716,5.7535,-48.4197,-25.8606,47.0903,-48.4197,-25.8606,47.0903,-20.2999,-13.2624,27.8606,-20.2999,-13.2624,27.8606,-38.4761,-17.3327,58.4063,-38.4761,-17.3327,58.4063,-16.3054,-5.1922,20.0723,-16.3054,-5.1922,20.0723,-34.2615,-14.3923,33.9949,-34.2615,-14.3923,33.9949,-8.8234,-3.9716,5.7535,-8.8234,-3.9716,5.7535,-9.4877,-3.3293,5.3636,-9.4877,-3.3293,5.3636,-63.6617,-22.1686,31.7177]},{name:"Great Dog",iau:"CMa",segments:[-18.9847,65.4126,-47.1978,-34.8809,97.9145,-81.1902,-34.8809,97.9145,-81.1902,-245.2542,776.7879,-674.9295,-245.2542,776.7879,-674.9295,-.4943,1.9707,-1.6811,-.4943,1.9707,-1.6811,-285.0116,742.3727,-827.2156,-285.0116,742.3727,-827.2156,-129.7334,299.8533,-368.6769,-129.7334,299.8533,-368.6769,-80.3942,167.564,-210.5207,-80.3942,167.564,-210.5207,-190.762,336.6705,-471.2381,-27.4979,72.5304,-97.0294,-93.704,237.2004,-306.3871,-93.704,237.2004,-306.3871,-129.7334,299.8533,-368.6769,-93.704,237.2004,-306.3871,-165.8789,505.6813,-566.2108,-165.8789,505.6813,-566.2108,-3.0802,14.8191,-13.7832,-3.0802,14.8191,-13.7832,-17.4617,84.6014,-89.61,-.4943,1.9707,-1.6811,-14.2097,112.672,-99.6064,-3.0802,14.8191,-13.7832,-.4943,1.9707,-1.6811,-8.5121,65.741,-89.1703,-27.4979,72.5304,-97.0294,-245.2542,776.7879,-674.9295,-18.9847,65.4126,-47.1978]},{name:"Lesser Dog",iau:"CMi",segments:[-1.4693,3.0414,-.9698,-18.2097,44.6401,-11.5631]},{name:"Hunting Dogs",iau:"CVn",segments:[-6.2908,1.3709,5.5075,-23.2636,2.2127,19.6929]},{name:"Engraving Tool",iau:"Cae",segments:[56.1269,66.8497,-190.0001,5.1567,7.6879,-18.1589,5.1567,7.6879,-18.1589,7.6828,12.9813,-24.6444]},{name:"Giraffe",iau:"Cam",segments:[291.1956,672.3074,604.6408,27.28,84.1613,78.3586,27.28,84.1613,78.3586,170.822,1076.0472,1030.991,291.1956,672.3074,604.6408,20.3155,73.9849,90.2028,20.3155,73.9849,90.2028,170.822,1076.0472,1030.991,20.3155,73.9849,90.2028,.6317,11.6383,17.2104]},{name:"Sea Goat",iau:"Cap",segments:[18.4888,-27.5573,4.0335,66.4654,-98.3635,9.5278,66.4654,-98.3635,9.5278,31.6212,-32.9238,-.4668,31.6212,-32.9238,-.4668,45.6168,-41.5341,-1.472,45.6168,-41.5341,-1.472,41.0902,-32.3455,-2.3356,41.0902,-32.3455,-2.3356,9.5345,-7.0442,-.5387,45.6168,-41.5341,-1.472,98.3802,-91.9438,-16.5121,98.3802,-91.9438,-16.5121,31.6212,-32.9238,-.4668,66.4654,-98.3635,9.5278,8.7725,-11.5746,-1.7906,31.6212,-32.9238,-.4668,103.0256,-132.0592,-26.4166]},{name:"Keel",iau:"Car",segments:[-8.9807,-5.605,-33.0438,-36.7994,-28.1756,-111.2454,-36.7994,-28.1756,-111.2454,-56.9809,-31.8317,-123.4754,-56.9809,-31.8317,-123.4754,-210.9756,-90.3264,-392.163,-210.9756,-90.3264,-392.163,-753.7473,-353.5249,-1247.752,-753.7473,-353.5249,-1247.752,-14.7843,-6.1049,-25.1799,-14.7843,-6.1049,-25.1799,-226.2193,-72.8357,-409.7547,-226.2193,-72.8357,-409.7547,-100.3964,-36.6914,-206.2573,-100.3964,-36.6914,-206.2573,-90.8878,-8.4734,-216.2668,-180.1868,5.2702,-524.7472,-54.8371,6.6077,-177.1162,-54.8371,6.6077,-177.1162,-5.9927,22.4267,-91.9002,-48.0063,-2.8648,-116.2623,-90.8878,-8.4734,-216.2668,-48.0063,-2.8648,-116.2623,-180.1868,5.2702,-524.7472,-5.9927,22.4267,-91.9002,-13.558,43.9401,-103.6433,-54.8371,6.6077,-177.1162,-130.675,115.4053,-282.8069]},{name:"Seated Queen",iau:"Cas",segments:[55.6026,78.7157,105.3508,14.0824,15.6017,22.073,14.0824,15.6017,22.073,79.8367,76.9122,126.698,79.8367,76.9122,126.698,38.5213,29.8626,51.5819,38.5213,29.8626,51.5819,8.5999,6.0479,13.0833]},{name:"Centaur",iau:"Cen",segments:[-.5038,-.8545,-.912,-50.954,-69.6001,-83.7001,-50.954,-69.6001,-83.7001,-70.7265,-72.1096,-83.5171,-70.7265,-72.1096,-83.5171,-69.5458,-69.426,-63.678,-69.5458,-69.426,-63.678,-80.7998,-78.9698,-66.4252,-80.7998,-78.9698,-66.4252,-89.3716,-79.17,-66.1252,-89.3716,-79.17,-66.1252,-82.403,-72.0222,-58.8494,-82.403,-72.0222,-58.8494,-197.912,-146.3289,-128.7601,-197.912,-146.3289,-128.7601,-13.4253,-8.7615,-7.8246,-82.403,-72.0222,-58.8494,-12.3588,-11.249,-6.7791,-89.3716,-79.17,-66.1252,-54.0862,-65.0289,-40.367,-54.0862,-65.0289,-40.367,-61.8728,-87.6931,-47.8539,-69.5458,-69.426,-63.678,-25.7719,-16.3031,-25.7365,-25.7719,-16.3031,-25.7365,-80.1167,-47.6182,-85.0668,-80.1167,-47.6182,-85.0668,-110.645,-57.5548,-122.6027,-110.645,-57.5548,-122.6027,-71.5877,-32.5548,-94.9883,-71.5877,-32.5548,-94.9883,-54.5066,-37.5232,-101.0827]},{name:"King",iau:"Cep",segments:[142.0305,35.3143,265.6382,14.0981,9.2398,32.541,14.0981,9.2398,32.541,55.2195,39.455,198.82,55.2195,39.455,198.82,5.2761,1.1966,14.0307,5.2761,1.1966,14.0307,142.0305,35.3143,265.6382,14.0981,9.2398,32.541,2.9416,5.1142,12.4641,2.9416,5.1142,12.4641,55.2195,39.455,198.82]},{name:"Sea Monster",iau:"Cet",segments:[79.3152,53.5821,-7.1415,47.6537,36.5263,-6.1577,3.1559,1.0144,-1.5328,27.5835,1.2446,-10.4796,27.5835,1.2446,-10.4796,84.1581,1.3457,-14.8741,27.5835,1.2446,-10.4796,34.7557,7.2403,-10.2594,34.7557,7.2403,-10.2594,31.8262,9.2621,-9.3591,31.8262,9.2621,-9.3591,67.5396,27.2194,-26.9862,67.5396,27.2194,-26.9862,135.3154,77.2385,-73.452,135.3154,77.2385,-73.452,17.6728,11.6269,-10.3186,17.6728,11.6269,-10.3186,87.1675,58.2562,-56.3289,87.1675,58.2562,-56.3289,17.5219,10.1585,-11.0112,17.5219,10.1585,-11.0112,3.1559,1.0144,-1.5328,75.1307,46.0798,-25.1676,17.6728,11.6269,-10.3186,75.1307,46.0798,-25.1676,149.5714,115.0665,-48.6695,149.5714,115.0665,-48.6695,18.4404,15.1648,-5.0731,18.4404,15.1648,-5.0731,53.3427,52.0916,-16.6461,53.3427,52.0916,-16.6461,95.5438,95.8551,-18.5053,95.5438,95.8551,-18.5053,19.6933,17.6956,-2.5804,19.6933,17.6956,-2.5804,47.6537,36.5263,-6.1577,47.6537,36.5263,-6.1577,95.6428,75.7716,-19.7204,95.6428,75.7716,-19.7204,18.4404,15.1648,-5.0731]},{name:"Chameleon",iau:"Cha",segments:[-2.5063,-4.2209,-18.8582,-25.0619,-44.1552,-126.1982,-25.0619,-44.1552,-126.1982,-17.2582,-37.7613,-83.6165]},{name:"Compass",iau:"Cir",segments:[-5.2638,-10.0527,-11.834,-44.3157,-96.9883,-86.8897,-5.2638,-10.0527,-11.834,-9.9719,-20.7267,-18.5802]},{name:"Crab",iau:"Cnc",segments:[-61.9264,84.1604,19.2272,-32.6313,42.467,2.9853,-32.6313,42.467,2.9853,-9.2988,15.4924,2.3677,-32.6313,42.467,2.9853,-26.2534,32.7438,.0565,-26.2534,32.7438,.0565,-54.8236,80.4972,-17.6775,-26.2534,32.7438,.0565,-37.5024,39.3242,-4.831]},{name:"Dove",iau:"Col",segments:[-5.3422,36.0752,-55.5481,-3.3944,29.8751,-49.0399,-3.3944,29.8751,-49.0399,2.8376,167.9084,-276.423,2.8376,167.9084,-276.423,.867,13.8563,-23.2707,.867,13.8563,-23.2707,.3689,54.3996,-123.6596,.867,13.8563,-23.2707,6.443,46.8483,-73.8737,6.443,46.8483,-73.8737,8.6981,43.5209,-72.788]},{name:"Bernice's Hair",iau:"Com",segments:[-16.2111,-2.5531,6.9587,-7.7336,-.5904,4.9435,-7.7336,-.5904,4.9435,-44.0323,4.7134,23.943]},{name:"Southern Crown",iau:"CrA",segments:[9.3381,-59.7635,-16.4582,28.4394,-138.6164,-36.5229,28.4394,-138.6164,-36.5229,6.3541,-29.7969,-7.7543,6.3541,-29.7969,-7.7543,3.9459,-16.2888,-4.305,3.9459,-16.2888,-4.305,8.695,-34.5275,-9.7496,8.695,-34.5275,-9.7496,39.6721,-158.3879,-49.1491,39.6721,-158.3879,-49.1491,12.6537,-52.3957,-17.3677,12.6537,-52.3957,-17.3677,11.0854,-50.6433,-18.1852,11.0854,-50.6433,-18.1852,17.2022,-88.9519,-32.6261,9.3381,-59.7635,-16.4582,7.4289,-65.3959,-19.4289]},{name:"Northern Crown",iau:"CrB",segments:[-58.8185,-48.4007,86.2553,-19.2809,-15.6786,25.7826,-19.2809,-15.6786,25.7826,-12.5275,-11.3975,16.5411,-12.5275,-11.3975,16.5411,-22.6331,-22.5333,31.3926,-22.6331,-22.5333,31.3926,-24.824,-26.6454,36.119,-24.824,-26.6454,36.119,-33.6559,-38.878,53.3769,-33.6559,-38.878,53.3769,-48.9075,-56.2868,86.2628]},{name:"Cup",iau:"Crt",segments:[-45.0108,4.9776,-18.9584,-87.4645,2.2069,-41.9903,-87.4645,2.2069,-41.9903,-24.9714,.3338,-8.9254,-24.9714,.3338,-8.9254,-55.9289,3.2376,-17.7418,-55.9289,3.2376,-17.7418,-45.0108,4.9776,-18.9584,-55.9289,3.2376,-17.7418,-118.6607,7.7826,-28.4834,-118.6607,7.7826,-28.4834,-90.3482,2.2218,-18.0651,-90.3482,2.2218,-18.0651,-73.449,-7.8463,-21.3078,-73.449,-7.8463,-21.3078,-99.5711,-7.0841,-33.0066,-99.5711,-7.0841,-33.0066,-24.9714,.3338,-8.9254]},{name:"Southern Cross",iau:"Cru",segments:[-14.6068,-10.9033,-20.1241,-44.3638,-39.7633,-78.7129,-42.1687,-37.4997,-64.0955,-72.2168,-51.8257,-107.5222]},{name:"Crow",iau:"Crv",segments:[-17.3484,-4.2661,-3.6967,-24.9767,-5.9741,-5.5508,-24.9767,-5.9741,-5.5508,-44.8059,-8.4869,-11.7944,-44.8059,-8.4869,-11.7944,-87.011,-17.9643,-31.7652,-87.011,-17.9643,-31.7652,-13.5943,-2.9502,-5.5496,-87.011,-17.9643,-31.7652,-41.2393,-12.8982,-14.0768,-41.2393,-12.8982,-14.0768,-24.9767,-5.9741,-5.5508]},{name:"Swan",iau:"Cyg",segments:[7.4369,-7.4581,36.258,8.8709,-7.9962,35.5925,8.8709,-7.9962,35.5925,14.7517,-14.122,42.6501,14.7517,-14.122,42.6501,249.3182,-175.6044,471.8265,249.3182,-175.6044,471.8265,197.2507,-90.6034,374.5477,249.3182,-175.6044,471.8265,12.7406,-8.0401,17.591,12.7406,-8.0401,17.591,29.5449,-15.027,31.6699,29.5449,-15.027,31.6699,16.0811,-5.7084,14.0653,249.3182,-175.6044,471.8265,16.8881,-18.1559,34.475,16.8881,-18.1559,34.475,37.92,-62.4863,83.9872]},{name:"Dolphin",iau:"Del",segments:[68.1781,-70.4501,54.5072,18.9942,-18.125,16.3534,18.9942,-18.125,16.3534,44.9383,-41.351,39.6923,44.9383,-41.351,39.6923,22.6976,-19.4758,19.2023,22.6976,-19.4758,19.2023,42.7417,-38.328,35.7952,42.7417,-38.328,35.7952,18.9942,-18.125,16.3534]},{name:"Swordfish",iau:"Dor",segments:[1.2474,.6204,-45.6993,.3183,1.6505,-27.2721,.3183,1.6505,-27.2721,18.0973,23.2658,-339.9282,18.0973,23.2658,-339.9282,1.2474,.6204,-45.6993,18.0973,23.2658,-339.9282,10.8578,8.4311,-49.8454,10.8578,8.4311,-49.8454,5.5753,4.1324,-19.2144]},{name:"Dragon",iau:"Dra",segments:[-.5309,-5.784,33.9175,-.4362,-12.2974,45.6752,-.4362,-12.2974,45.6752,-9.1693,-28.1642,112.7237,-9.1693,-28.1642,112.7237,-2.0629,-5.7937,29.2846,-2.0629,-5.7937,29.2846,-.5309,-5.784,33.9175,-.5309,-5.784,33.9175,3.548,1.0957,29.7543,3.548,1.0957,29.7543,7.1993,4.6209,46.1133,7.1993,4.6209,46.1133,4.2781,6.1118,45.5324,4.2781,6.1118,45.5324,.2194,.8755,8.0067,.2194,.8755,8.0067,-11.644,-.6878,127.2227,-11.644,-.6878,127.2227,-5.4318,-1.4035,27.4306,-5.4318,-1.4035,27.4306,-5.5316,-1.656,20.7318,-5.5316,-1.656,20.7318,-9.9255,-.8596,29.0878,-9.9255,-.8596,29.0878,-29.5884,12.2824,73.1965,-29.5884,12.2824,73.1965,-48.7653,46.672,125.689,-48.7653,46.672,125.689,-40.5079,47.7083,97.2675]},{name:"Little Horse",iau:"Equ",segments:[25.7325,-19.0916,15.0658,13.6611,-9.7643,7.7349,13.6611,-9.7643,7.7349,75.6174,-52.0966,35.3034,75.6174,-52.0966,35.3034,43.6692,-32.7672,20.0028,43.6692,-32.7672,20.0028,25.7325,-19.0916,15.0658]},{name:"River",iau:"Eri",segments:[21.0655,-5.522,-36.7913,9.5551,-.6267,-14.755,9.5551,-.6267,-14.755,23.7559,.4146,-39.52,23.7559,.4146,-39.52,86.9013,12.1135,-135.1755,86.9013,12.1135,-135.1755,24.8917,7.1304,-35.9687,24.8917,7.1304,-35.9687,26.3235,8.9467,-35.2219,26.3235,8.9467,-35.2219,26.8574,11.5513,-39.8588,26.8574,11.5513,-39.8588,2.8379,1.46,-5.1296,2.8379,1.46,-5.1296,21.7991,18.6551,-41.8437,21.7991,18.6551,-41.8437,29.0556,25.9406,-54.2246,29.0556,25.9406,-54.2246,19.4618,25.3656,-43.9482,19.4618,25.3656,-43.9482,30.2877,42.4416,-73.2,30.2877,42.4416,-73.2,20.0748,34.6103,-50.8762,20.0748,34.6103,-50.8762,8.9684,9.7397,-11.8744,8.9684,9.7397,-11.8744,54.3226,52.8356,-62.3343,54.3226,52.8356,-62.3343,56.3803,47.4932,-58.6514,56.3803,47.4932,-58.6514,17.349,11.9391,-16.9971,17.349,11.9391,-16.9971,10.1705,6.382,-7.723,10.1705,6.382,-7.723,29.2925,23.5097,-17.1541,29.2925,23.5097,-17.1541,23.6847,22.7349,-15.957,23.6847,22.7349,-15.957,1.9011,2.1238,-1.4975,1.9011,2.1238,-1.4975,5.0331,6.1849,-4.3614,5.0331,6.1849,-4.3614,74.3223,173.5311,-88.5244,74.3223,173.5311,-88.5244,54.8554,145.4538,-73.708,54.8554,145.4538,-73.708,19.2383,56.0186,-31.2216,19.2383,56.0186,-31.2216,6.1994,23.5903,-12.8937,6.1994,23.5903,-12.8937,59.993,227.2791,-144.2905,59.993,227.2791,-144.2905,11.7269,25.4427,-20.3561]},{name:"Furnace",iau:"For",segments:[33.8427,16.6781,-38.8736,8.1907,5.653,-9.8452]},{name:"Twins",iau:"Gem",segments:[-5.2662,32.861,-3.9346,-84.1194,314.1522,-11.5776,-84.1194,314.1522,-11.5776,-5.9071,17.6349,-.0579,-5.9071,17.6349,-.0579,-9.825,28.8956,-3.0115,-9.825,28.8956,-3.0115,-3.5316,17.821,-3.2375,-5.9071,17.6349,-.0579,-28.1502,72.0368,7.0604,-28.1502,72.0368,7.0604,-18.1443,41.4012,2.4311,-28.1502,72.0368,7.0604,-4.0555,9.455,1.2057,-28.1502,72.0368,7.0604,-13.4564,39.1751,4.177,-13.4564,39.1751,4.177,-31.6915,114.7086,16.2054,-31.6915,114.7086,16.2054,-5.3119,14.4062,2.7338,-31.6915,114.7086,16.2054,-11.2245,57.0884,11.3411,-31.6915,114.7086,16.2054,-46.0238,262.6544,9.6379,-46.0238,262.6544,9.6379,-19.7459,165.5339,-8.9011,-46.0238,262.6544,9.6379,-6.5621,70.7116,-1.0166,-6.5621,70.7116,-1.0166,-12.6667,210.9575,-3.2762,-12.6667,210.9575,-3.2762,-.7853,47.5444,-.1432]},{name:"Crane",iau:"Gru",segments:[28.5377,-17.256,-22.8682,66.9447,-53.055,-52.0325,66.9447,-53.055,-52.0325,18.6725,-18.0905,-16.8278,18.6725,-18.0905,-16.8278,34.9934,-27.0194,-31.4562,34.9934,-27.0194,-31.4562,43.3639,-26.5696,-37.2941,43.3639,-26.5696,-37.2941,28.5377,-17.256,-22.8682,34.9934,-27.0194,-31.4562,29.3916,-23.0181,-33.5969,34.9934,-27.0194,-31.4562,23.0665,-18.8595,-24.8135,18.6725,-18.0905,-16.8278,51.7954,-45.1215,-33.4588,51.7954,-45.1215,-33.4588,38.0468,-34.9622,-21.9867]},{name:"Hercules",iau:"Her",segments:[-9.5388,-53.4923,143.535,-3.1738,-119.3697,212.6579,-3.1738,-119.3697,212.6579,-15.1731,-58.1382,104.5976,-15.1731,-58.1382,104.5976,-7.832,-25.5433,46.4738,-7.832,-25.5433,46.4738,-17.5337,-54.1802,96.8726,-17.5337,-54.1802,96.8726,-8.7777,-14.4867,29.6841,-8.7777,-14.4867,29.6841,-24.8873,-33.3184,82.1929,-24.8873,-33.3184,82.1929,-28.7935,-28.1814,89.7737,-28.7935,-28.1814,89.7737,-6.1866,-4.8752,13.8091,-8.7777,-14.4867,29.6841,-3.0733,-5.6509,8.5704,-3.0733,-5.6509,8.5704,-16.1463,-29.2384,30.8236,-16.1463,-29.2384,30.8236,-23.2428,-39.0126,38.1153,-3.0733,-5.6509,8.5704,-11.1807,-28.1346,40.5404,-11.1807,-28.1346,40.5404,-4.0755,-14.9628,17.0344,-4.0755,-14.9628,17.0344,-13.7849,-77.4121,91.3958,-13.7849,-77.4121,91.3958,-.4359,-5.2177,6.4898,-.4359,-5.2177,6.4898,-.3567,-25.4095,33.3406,-.3567,-25.4095,33.3406,3.0854,-65.5115,84.5021,-11.1807,-28.1346,40.5404,-17.5337,-54.1802,96.8726,-16.1463,-29.2384,30.8236,-20.9956,-85.1703,66.7912]},{name:"Clock",iau:"Hor",segments:[11.906,12.2534,-31.7713,21.9024,.948,-44.2868,21.9024,.948,-44.2868,15.1763,-.4981,-40.5242]},{name:"Female Water Snake",iau:"Hya",segments:[-102.1663,112.2635,-38.5527,-73.3756,83.7875,-29.0147,-73.3756,83.7875,-29.0147,-34.2796,40.4149,-11.6444,-34.2796,40.4149,-11.6444,-26.1982,28.7463,-7.6335,-26.1982,28.7463,-7.6335,-63.8752,68.7143,-19.1756,-63.8752,68.7143,-19.1756,-102.1663,112.2635,-38.5527,-63.8752,68.7143,-19.1756,-32.3285,32.8109,-8.9281,-32.3285,32.8109,-8.9281,-27.6832,22.9925,-8.3426,-27.6832,22.9925,-8.3426,-144.8535,98.6719,-46.8678,-144.8535,98.6719,-46.8678,-14.3879,9.8574,-5.2325,-14.3879,9.8574,-5.2325,-43.0035,27.6298,-21.0495,-43.0035,27.6298,-21.0495,-62.3608,28.1685,-33.4888,-62.3608,28.1685,-33.4888,-28.8985,10.8812,-12.4848,-28.8985,10.8812,-12.4848,-65.6572,17.548,-31.2179,-65.6572,17.548,-31.2179,-38.472,6.5305,-15.6063,-38.472,6.5305,-15.6063,-33.7888,-4.7415,-20.9895,-33.7888,-4.7415,-20.9895,-78.7783,-18.8365,-49.5767,-78.7783,-18.8365,-49.5767,-62.6009,-28.9811,-17.9378,-62.6009,-28.9811,-17.9378,-33.8976,-17.2853,-9.3057]},{name:"Male Water Snake",iau:"Hyi",segments:[1.6352,-2.7245,-6.7481,9.8608,-11.5567,-64.5525,9.8608,-11.5567,-64.5525,13.3224,-7.1094,-44.3991,13.3224,-7.1094,-44.3991,12.7363,-7.5995,-40.3145,12.7363,-7.5995,-40.3145,8.0221,-2.5883,-17.4696]},{name:"Indian",iau:"Ind",segments:[13.7948,-20.2998,-17.6879,13.0838,-23.5029,-14.1546,13.0838,-23.5029,-14.1546,64.0614,-121.577,-111.9073,64.0614,-121.577,-111.9073,13.7948,-20.2998,-17.6879]},{name:"Lesser Lion",iau:"LMi",segments:[-24.0628,13.4059,12.8043,-34.8188,24.7998,19.9929,-34.8188,24.7998,19.9929,-19.8267,16.0501,10.3581,-19.8267,16.0501,10.3581,-37.9239,39.5186,20.7465,-19.8267,16.0501,10.3581,-24.0628,13.4059,12.8043]},{name:"Lizard",iau:"Lac",segments:[147.7162,-15.5039,145.4224,237.9234,5.9789,260.0552,237.9234,5.9789,260.0552,418.6354,38.2838,526.7646,418.6354,38.2838,526.7646,469.4853,48.2931,633.6963,469.4853,48.2931,633.6963,28.9654,4.3973,42.7307,28.9654,4.3973,42.7307,18.7885,2.6884,25.4547,18.7885,2.6884,25.4547,418.6354,38.2838,526.7646]},{name:"Lion",iau:"Leo",segments:[-10.6339,1.567,2.3371,-46.5056,13.8436,8.2717,-46.5056,13.8436,8.2717,-21.0188,12.2189,.1973,-21.0188,12.2189,.1973,-469.8671,294.6887,47.2144,-469.8671,294.6887,47.2144,-34.0031,19.9375,6.1126,-34.0031,19.9375,6.1126,-16.4424,5.5601,4.4351,-16.4424,5.5601,4.4351,-10.6339,1.567,2.3371,-34.0031,19.9375,6.1126,-58.8396,37.3905,14.6468,-58.8396,37.3905,14.6468,-29.266,23.3377,8.1949,-29.266,23.3377,8.1949,-53.1957,43.5327,11.7686,-16.4424,5.5601,4.4351,-46.5056,13.8436,8.2717]},{name:"Hare",iau:"Lep",segments:[-1.3307,40.189,-31.8302,.2275,11.8477,-9.1268,.2275,11.8477,-9.1268,1.2277,17.497,-13.8104,1.2277,17.497,-13.8104,76.8772,507.1638,-446.8164,76.8772,507.1638,-446.8164,10.2115,39.1866,-32.8509,76.8772,507.1638,-446.8164,1.2445,25.1502,-24.5705,1.2445,25.1502,-24.5705,.5575,6.1812,-6.3861,.5575,6.1812,-6.3861,6.1882,33.9585,-33.234,6.1882,33.9585,-33.234,13.9738,43.1494,-45.2996,76.8772,507.1638,-446.8164,6.1882,33.9585,-33.234,10.2115,39.1866,-32.8509,51.1872,236.3203,-176.8951,10.2115,39.1866,-32.8509,28.2847,112.6398,-83.7919,13.9738,43.1494,-45.2996,10.2115,39.1866,-32.8509,28.2847,112.6398,-83.7919,14.2669,56.2068,-40.1845,51.1872,236.3203,-176.8951,18.4027,86.5152,-62.7166]},{name:"Scales",iau:"Lib",segments:[-25.7207,-44.3214,3.1089,-28.1316,-40.3829,3.7748,-28.1316,-40.3829,3.7748,-36.5496,-42.6005,8.3847,-36.5496,-42.6005,8.3847,-16.4089,-16.4563,.1351,-16.4089,-16.4563,.1351,-50.0788,-61.1565,-10.6092,-50.0788,-61.1565,-10.6092,-28.1316,-40.3829,3.7748]},{name:"Wolf",iau:"Lup",segments:[-27.9456,-54.4712,-14.3364,-24.7463,-57.9416,-17.5342,-24.7463,-57.9416,-17.5342,-51.5529,-114.5577,-39.4755,-51.5529,-114.5577,-39.4755,-27.9456,-54.4712,-14.3364,-51.5529,-114.5577,-39.4755,-57.3888,-105.688,-46.7536,-57.3888,-105.688,-46.7536,-71.953,-118.1412,-54.2822,-71.953,-118.1412,-54.2822,-44.026,-69.0913,-25.3264,-71.953,-118.1412,-54.2822,-60.952,-87.131,-49.6887,-57.3888,-105.688,-46.7536,-27.9733,-53.6042,-25.0001,-27.9733,-53.6042,-25.0001,-14.2717,-25.4918,-18.8505,-14.2717,-25.4918,-18.8505,-73.3549,-99.1471,-71.2808,-14.2717,-25.4918,-18.8505,-53.709,-72.8998,-56.9525,-73.3549,-99.1471,-71.2808,-55.2161,-65.2512,-47.619,-73.3549,-99.1471,-71.2808,-60.952,-87.131,-49.6887]},{name:"Lynx",iau:"Lyn",segments:[-43.1553,48.1947,20.9749,-24.7189,28.8699,13.9089,-24.7189,28.8699,13.9089,-123.0848,160.1503,77.1064,-123.0848,160.1503,77.1064,-9.9087,14.0072,7.5369,-9.9087,14.0072,7.5369,-47.908,91.7973,44.178,-47.908,91.7973,44.178,-20.2751,72.0996,38.0752,-20.2751,72.0996,38.0752,-7.0809,43.9799,31.701,-7.0809,43.9799,31.701,-2.1511,39.6538,28.4568]},{name:"Lyre",iau:"Lyr",segments:[.9606,-3.5074,6.763,7.4425,-22.7605,42.0555,7.4425,-22.7605,42.0555,50.3185,-147.1049,230.3604,50.3185,-147.1049,230.3604,43.1117,-107.1229,164.9915,43.1117,-107.1229,164.9915,44.4839,-111.9741,203.0614,44.4839,-111.9741,203.0614,7.4425,-22.7605,42.0555]},{name:"Table Mountain",iau:"Men",segments:[.9446,-5.6053,-32.1863,15.4411,-13.3335,-142.0162]},{name:"Microscope",iau:"Mic",segments:[33.345,-37.119,-13.9804,46.8788,-59.0796,-19.737,46.8788,-59.0796,-19.737,68.0483,-94.958,-32.279]},{name:"Unicorn",iau:"Mon",segments:[-12.6109,169.7342,-96.9213,-25.823,177.3205,-104.5655,-25.823,177.3205,-104.5655,-39.1584,110.361,-49.0374,-39.1584,110.361,-49.0374,-4.2857,39.1015,-13.3278,-4.2857,39.1015,-13.3278,-6.9363,165.6855,-63.394,-39.1584,110.361,-49.0374,-163.758,232.6802,-118.363,-163.758,232.6802,-118.363,-18.8357,33.5911,-22.643]},{name:"Fly",iau:"Mus",segments:[-38.2492,-45.8329,-86.0288,-16.6171,-14.4409,-35.9352,-16.6171,-14.4409,-35.9352,-35.3119,-48.6353,-99.5178,-35.3119,-48.6353,-99.5178,-33.9923,-41.0519,-80.6996,-33.9923,-41.0519,-80.6996,-38.2492,-45.8329,-86.0288]},{name:"Carpenter's Square",iau:"Nor",segments:[-37.2581,-114.7513,-77.8772,-11.5053,-35.5538,-20.0903,-11.5053,-35.5538,-20.0903,-50.7556,-164.6565,-82.1327,-50.7556,-164.6565,-82.1327,-22.8247,-59.061,-33.5391,-22.8247,-59.061,-33.5391,-11.5053,-35.5538,-20.0903,-22.8247,-59.061,-33.5391,-37.2581,-114.7513,-77.8772]},{name:"Octant",iau:"Oct",segments:[3.4869,-9.7445,-16.4217,6.5044,-19.9944,-40.6509,6.5044,-19.9944,-40.6509,-8.1315,-41.9358,-81.4718,-8.1315,-41.9358,-81.4718,3.4869,-9.7445,-16.4217]},{name:"Serpent Bearer",iau:"Oph",segments:[-1.5871,-11.9719,8.7212,-1.8309,-22.4459,11.944,-5.6025,-26.2891,3.3946,-1.8309,-22.4459,11.944,-1.5871,-11.9719,8.7212,-7.1417,-21.7489,14.2133,-7.1417,-21.7489,14.2133,-14.0202,-28.1325,9.2747,-14.0202,-28.1325,9.2747,-46.9232,-123.7161,26.6587,-46.9232,-123.7161,26.6587,-5.6025,-26.2891,3.3946,-5.6025,-26.2891,3.3946,-14.2921,-124.902,-1.5034]},{name:"Hunter",iau:"Ori",segments:[18.9185,203.2148,-96.4444,62.7751,547.8791,-251.3906,62.7751,547.8791,-251.3906,25.8681,192.8997,-84.8402,-3.722,261.5709,-17.1289,-11.1598,217.9384,-35.3451,-11.1598,217.9384,-35.3451,-5.9115,182.8639,-27.8616,-5.9115,182.8639,-27.8616,.1991,8.6478,-.4771,-11.1598,217.9384,-35.3451,-.487,46.1339,-11.3243,-.487,46.1339,-11.3243,3.1893,146.703,-42.1512,3.1893,146.703,-42.1512,18.9185,203.2148,-96.4444,18.9185,203.2148,-96.4444,10.4441,165.9412,-108.2683,10.4441,165.9412,-108.2683,51.6011,220.5144,-136.739,51.6011,220.5144,-136.739,25.8681,192.8997,-84.8402,25.8681,192.8997,-84.8402,11.6585,73.1666,-22.3916,11.6585,73.1666,-22.3916,35.9075,325.6016,-77.8549,35.9075,325.6016,-77.8549,3.1893,146.703,-42.1512,11.6585,73.1666,-22.3916,2.4005,7.3551,-2.1288,2.4005,7.3551,-2.1288,76.009,235.34,-74.535,76.009,235.34,-74.535,53.7285,168.044,-63.9057,53.7285,168.044,-63.9057,62.9115,212.9095,-84.5625,2.4005,7.3551,-2.1288,19.762,62.1737,-15.6427,19.762,62.1737,-15.6427,10.2152,34.6962,-7.9299,-5.9115,182.8639,-27.8616,-.487,46.1339,-11.3243]},{name:"Peacock",iau:"Pav",segments:[17.8502,-40.4385,-32.4319,3.0248,-5.5463,-6.7681,3.0248,-5.5463,-6.7681,11.1754,-26.9876,-30.1999,11.1754,-26.9876,-30.1999,1.3118,-4.1322,-4.2901,1.3118,-4.1322,-4.2901,17.8502,-40.4385,-32.4319,1.3118,-4.1322,-4.2901,4.7215,-19.6216,-24.8212,4.7215,-19.6216,-24.8212,3.9246,-43.839,-49.1925,3.9246,-43.839,-49.1925,18.1454,-135.5407,-132.8475,18.1454,-135.5407,-132.8475,1.3118,-4.1322,-4.2901,18.1454,-135.5407,-132.8475,35.4532,-258.6422,-212.1701,35.4532,-258.6422,-212.1701,10.9638,-178.2831,-140.1845,10.9638,-178.2831,-140.1845,.6815,-31.3271,-26.5159,.6815,-31.3271,-26.5159,35.4532,-258.6422,-212.1701,.6815,-31.3271,-26.5159,-2.9963,-84.6765,-74.4621]},{name:"Winged Horse",iau:"Peg",segments:[138.6825,22.3525,31.3991,38.3114,-4.3748,13.5838,51.4333,-.5618,31.078,49.0523,-3.6769,34.5817,49.0523,-3.6769,34.5817,65.6747,-12.3394,58.1956,51.4333,-.5618,31.078,29.9698,-2.946,16.9594,29.9698,-2.946,16.9594,101.1674,-12.323,56.0198,101.1674,-12.323,56.0198,9.477,-2.6445,6.7006,9.477,-2.6445,6.7006,25.6259,-9.8707,20.4232,38.3114,-4.3748,13.5838,15.233,-3.2524,5.183,15.233,-3.2524,5.183,57.9621,-14.2888,19.0283,57.9621,-14.2888,19.0283,23.9945,-10.2677,7.652,23.9945,-10.2677,7.652,172.7699,-92.309,79.5396,25.9747,6.6249,12.8897,51.4333,-.5618,31.078,25.9747,6.6249,12.8897,138.6825,22.3525,31.3991,51.4333,-.5618,31.078,38.3114,-4.3748,13.5838]},{name:"Hero",iau:"Per",segments:[156.0846,283.2515,69.8314,114.9622,226.8368,50.9699,114.9622,226.8368,50.9699,167.1284,357.9585,105.439,167.1284,357.9585,105.439,72.9911,161.4906,61.4183,72.9911,161.4906,61.4183,60.5943,128.7813,73.4646,60.5943,128.7813,73.4646,62.8851,118.6738,77.9341,62.8851,118.6738,77.9341,29.1426,50.5204,40.1297,29.1426,50.5204,40.1297,126.2335,207.6325,186.3338,62.8851,118.6738,77.9341,14.1894,21.17,10.5192,14.1894,21.17,10.5192,50.7721,72.2704,33.1535,50.7721,72.2704,33.1535,22.3295,28.4122,13.8305]},{name:"Phoenix",iau:"Phe",segments:[48.6142,-15.4408,-73.2038,985.9208,-166.0635,-1118.2053,985.9208,-166.0635,-1118.2053,17.2205,-4.77,-15.9735,17.2205,-4.77,-15.9735,48.6142,-15.4408,-73.2038,985.9208,-166.0635,-1118.2053,26.4925,-2.9613,-34.8446,26.4925,-2.9613,-34.8446,62.3225,1.4348,-81.446,62.3225,1.4348,-81.446,985.9208,-166.0635,-1118.2053,985.9208,-166.0635,-1118.2053,50.4551,-1.6354,-55.2555,50.4551,-1.6354,-55.2555,17.2205,-4.77,-15.9735,17.2205,-4.77,-15.9735,19.0832,-4.9374,-16.9146,19.0832,-4.9374,-16.9146,30.84,-11.4399,-29.5717,30.84,-11.4399,-29.5717,17.2205,-4.77,-15.9735]},{name:"Painter's Easel",iau:"Pic",segments:[-2.9064,2.1027,-29.3852,1.4056,10.2361,-55.9484,1.4056,10.2361,-55.9484,.6842,5.2278,-18.9134]},{name:"Southern Fish",iau:"PsA",segments:[6.4504,-3.1656,-2.7777,141.4775,-77.3646,-50.1412,141.4775,-77.3646,-50.1412,191.2311,-147.9429,-66.0095,191.2311,-147.9429,-66.0095,70.7783,-62.3824,-28.0426,70.7783,-62.3824,-28.0426,13.8055,-10.5335,-6.2569,13.8055,-10.5335,-6.2569,35.4394,-22.8558,-16.4974,35.4394,-22.8558,-16.4974,42.2878,-22.3005,-20.9268]},{name:"Fishes",iau:"Psc",segments:[96.7799,49.7652,46.3746,105.4541,52.4839,32.674,96.7799,49.7652,46.3746,82.3632,45.2572,29.569,82.3632,45.2572,29.569,105.4541,52.4839,32.674,105.4541,52.4839,32.674,101.7384,51.4273,10.7311,101.7384,51.4273,10.7311,70.608,37.1378,-2.2566,70.608,37.1378,-2.2566,39.7287,22.3665,-7.2707,39.7287,22.3665,-7.2707,52.7109,27.464,-8.2702,52.7109,27.464,-8.2702,100.7571,48.0728,-9.1668,100.7571,48.0728,-9.1668,98.5432,42.104,-5.736,98.5432,42.104,-5.736,53.5401,16.9072,1.072,53.5401,16.9072,1.072,89.2427,22.4946,3.4979,89.2427,22.4946,3.4979,139.6701,19.5768,13.5118,139.6701,19.5768,13.5118,32.7917,1.4796,3.6604,32.7917,1.4796,3.6604,13.5366,-.5568,1.7005,13.5366,-.5568,1.7005,31.9406,-1.9043,1.9108,31.9406,-1.9043,1.9108,48.7006,-6.0629,3.8042,48.7006,-6.0629,3.8042,40.5431,-6.0931,5.2208,40.5431,-6.0931,5.2208,51.1405,-4.3043,8.159,51.1405,-4.3043,8.159,13.5366,-.5568,1.7005]},{name:"Stern",iau:"Pup",segments:[-9.3661,10.6279,-13.3354,-25.6575,35.3426,-43.6826,-25.6575,35.3426,-43.6826,-45.7183,78.2353,-148.0133,-45.7183,78.2353,-148.0133,-13.558,43.9401,-103.6433,-13.558,43.9401,-103.6433,-7.3125,13.9127,-50.9419,-7.3125,13.9127,-50.9419,-16.2271,20.2616,-52.6958,-16.2271,20.2616,-52.6958,-130.675,115.4053,-282.8069,-130.675,115.4053,-282.8069,-9.3661,10.6279,-13.3354]},{name:"Compass",iau:"Pyx",segments:[-62.0379,40.5952,-92.0652,-133.3514,88.2619,-183.4617,-133.3514,88.2619,-183.4617,-38.6499,26.5963,-44.1988]},{name:"Reticle",iau:"Ret",segments:[10.099,1.3307,-48.0897,4.109,1.4637,-17.9171,4.109,1.4637,-17.9171,40.0135,4.9516,-160.6295,40.0135,4.9516,-160.6295,7.8095,-1.1818,-31.8874,7.8095,-1.1818,-31.8874,10.099,1.3307,-48.0897]},{name:"Sculptor",iau:"Scl",segments:[44.0574,-18.4873,-29.5181,182.4239,1.5688,-116.2803,182.4239,1.5688,-116.2803,47.9744,-20.3657,-25.069,47.9744,-20.3657,-25.069,44.0574,-18.4873,-29.5181]},{name:"Scorpion",iau:"Sco",segments:[-16.0486,-169.3256,-41.7404,-8.7851,-142.3891,-39.9504,-8.7851,-142.3891,-39.9504,-29.2027,-674.9347,-202.8647,-29.2027,-674.9347,-202.8647,-6.6541,-86.4656,-30.957,-6.6541,-86.4656,-30.957,-3.3876,-20.7841,-7.7411,-3.3876,-20.7841,-7.7411,-314.8104,-1377.0533,-504.5975,-314.8104,-1377.0533,-504.5975,-123.1415,-499.6708,-141.9741,-123.1415,-499.6708,-141.9741,-4.8422,-18.5034,-3.9743,-4.8422,-18.5034,-3.9743,-45.96,-137.0175,-15.4969,-45.96,-137.0175,-15.4969,-58.5426,-158.7916,-13.5274,-58.5426,-158.7916,-13.5274,-69.3327,-133.592,-5.2193,-58.5426,-158.7916,-13.5274,-81.3015,-159.1502,-17.1307,-58.5426,-158.7916,-13.5274,-55.8814,-110.5786,2.1794]},{name:"Shield",iau:"Sct",segments:[41.9547,-191.1382,64.2861,80.7398,-368.0157,116.8143,80.7398,-368.0157,116.8143,128.9211,-546.5219,71.0179,128.9211,-546.5219,71.0179,11.8673,-94.656,14.5852,11.8673,-94.656,14.5852,8.558,-53.9324,14.5504,8.558,-53.9324,14.5504,41.9547,-191.1382,64.2861]},{name:"Serpent",iau:"Ser",segments:[-27.9632,-41.3621,14.5414,-11.7509,-16.3719,8.9753,-11.7509,-16.3719,8.9753,-12.623,-16.2004,9.7995,-12.623,-16.2004,9.7995,-40.7006,-45.7484,33.7751,-40.7006,-45.7484,33.7751,-24.6108,-29.2765,26.1162,-24.6108,-29.2765,26.1162,-5.5187,-7.2657,6.4352,-5.5187,-7.2657,6.4352,-60.4229,-71.4399,70.7907,-60.4229,-71.4399,70.7907,-24.6108,-29.2765,26.1162,9.9795,-35.372,18.6275,1.7683,-17.7811,6.658,1.7683,-17.7811,6.658,-3.8584,-47.8886,8.8955,-3.8584,-47.8886,8.8955,-2.8628,-29.9835,4.1981,-2.8628,-29.9835,4.1981,-10.3778,-60.6981,11.1499]},{name:"Sextant",iau:"Sex",segments:[-103.9728,38.8737,-18.2169,-115.2754,55.935,-25.174]},{name:"Arrow",iau:"Sge",segments:[55.1846,-91.0992,83.8698,71.7541,-108.8736,105.2616,71.7541,-108.8736,105.2616,52.6849,-87.4353,82.0529,71.7541,-108.8736,105.2616,41.1827,-54.5649,55.7351,41.1827,-54.5649,55.7351,23.3894,-28.7921,30.3398]},{name:"Archer",iau:"Sgr",segments:[10.1133,-126.2238,-14.3653,2.5619,-23.1417,-.8682,2.5771,-40.6481,-9.6866,3.8172,-42.9526,-8.4225,3.8172,-42.9526,-8.4225,.6771,-30.751,-3.7718,.6771,-30.751,-3.7718,-17.0995,-354.945,-27.4759,.6771,-30.751,-3.7718,10.1133,-126.2238,-14.3653,10.1133,-126.2238,-14.3653,3.8172,-42.9526,-8.4225,3.8172,-42.9526,-8.4225,6.3263,-26.0731,-3.3793,6.3263,-26.0731,-3.3793,14.5077,-80.7811,-5.673,14.5077,-80.7811,-5.673,10.1133,-126.2238,-14.3653,14.5077,-80.7811,-5.673,2.5619,-23.1417,-.8682,2.5619,-23.1417,-.8682,84.0149,-1496.3903,61.2983,6.3263,-26.0731,-3.3793,9.0049,-33.9999,-3.1321,9.0049,-33.9999,-3.1321,14.9509,-68.0836,-4.2018,14.9509,-68.0836,-4.2018,14.5077,-80.7811,-5.673,14.9509,-68.0836,-4.2018,27.6505,-115.6067,3.4474,27.6505,-115.6067,3.4474,10.8638,-40.5611,.6303,10.8638,-40.5611,.6303,46.3737,-139.8233,8.3872,46.3737,-139.8233,8.3872,13.2826,-37.6132,2.9461,9.0049,-33.9999,-3.1321,29.9985,-75.2999,-4.3501,29.9985,-75.2999,-4.3501,62.1268,-121.5851,-17.0218,62.1268,-121.5851,-17.0218,83.784,-180.7447,-51.0979,83.784,-180.7447,-51.0979,22.1462,-53.3168,-21.7686,22.1462,-53.3168,-21.7686,15.0028,-50.2112,-17.4126,22.1462,-53.3168,-21.7686,10.7884,-38.0485,-16.3792]},{name:"Bull",iau:"Tau",segments:[5.2816,40.527,3.8526,37.2301,115.637,1.5137,37.2301,115.637,1.5137,16.3959,41.549,-2.0027,7.027,19.0878,-1.9468,12.3919,135.7611,-5.2266,18.8226,41.8934,-4.6103,19.2949,45.1724,-3.4086,18.8226,41.8934,-4.6103,60.407,107.3563,-17.2243,60.407,107.3563,-17.2243,41.0374,50.9739,-10.7564,7.027,19.0878,-1.9468,16.3959,41.549,-2.0027,7.027,19.0878,-1.9468,17.1129,42.2751,-4.6636,17.1129,42.2751,-4.6636,18.8226,41.8934,-4.6103,16.3959,41.549,-2.0027,18.084,43.7341,-3.0501,18.084,43.7341,-3.0501,19.2949,45.1724,-3.4086,19.2949,45.1724,-3.4086,60.7823,106.8048,8.4154]},{name:"Telescope",iau:"Tel",segments:[3.0787,-33.5918,-16.2795,6.9938,-78.775,-32.9974]},{name:"Southern Triangle",iau:"Tra",segments:[-13.1274,-81.9196,-86.368,-13.6797,-36.3816,-43.324,-13.6797,-36.3816,-43.324,-2.88,-8.7809,-8.305,-2.88,-8.7809,-8.305,-13.1274,-81.9196,-86.368]},{name:"Triangle",iau:"Tri",segments:[24.513,23.2767,11.6054,26.9097,24.5311,13.6727,26.9097,24.5311,13.6727,14.9217,11.1876,5.6309,14.9217,11.1876,5.6309,24.513,23.2767,11.6054]},{name:"Toucan",iau:"Tuc",segments:[25.2765,-30.4766,-40.1566,11.7369,-9.6958,-16.8189,11.7369,-9.6958,-16.8189,3.6406,-2.8065,-7.2769,11.7369,-9.6958,-16.8189,19.7186,-13.007,-36.8674]},{name:"Great Bear",iau:"UMa",segments:[-18.5296,.9928,25.9075,-14.1158,3.598,21.9079,-14.1158,3.598,21.9079,-13.776,5.3065,20.5587,-13.776,5.3065,20.5587,-13.4629,7.4427,19.4483,-13.4629,7.4427,19.4483,-17.2987,17.1799,28.7282,-17.2987,17.1799,28.7282,-13.8827,11.8844,18.3598,-13.8827,11.8844,18.3598,-15.0949,8.5483,18.6951,-15.0949,8.5483,18.6951,-13.4629,7.4427,19.4483,-15.0949,8.5483,18.6951,-40.8039,20.2019,40.3447,-40.8039,20.2019,40.3447,-29.9706,18.1415,25.0241,-29.9706,18.1415,25.0241,-45.6298,38.903,34.4596,-29.9706,18.1415,25.0241,-38.3157,30.7683,27.2368,-13.8827,11.8844,18.3598,-77.6666,94.726,96.6065,-77.6666,94.726,96.6065,-6.7267,8.8415,7.7489,-6.7267,8.8415,7.7489,-53.6678,79.7556,53.2414,-6.7267,8.8415,7.7489,-6.8358,10.6072,7.1614,-77.6666,94.726,96.6065,-15.3314,20.8958,23.8756,-15.3314,20.8958,23.8756,-16.6279,39.1808,36.024,-16.6279,39.1808,36.024,-8.5825,14.3843,16.8491,-8.5825,14.3843,16.8491,-17.2987,17.1799,28.7282]},{name:"Little Bear",iau:"UMi",segments:[1.3431,53.7124,121.2552,-.4027,19.1745,52.5366,-.4027,19.1745,52.5366,-4.458,27.7195,97.4168,-4.458,27.7195,97.4168,-13.0114,25.0968,106.4083,-13.0114,25.0968,106.4083,-3.1842,5.4457,29.2506,-3.1842,5.4457,29.2506,-30.2676,23.9914,146.6072,-30.2676,23.9914,146.6072,-8.0581,8.5453,38.3879,-8.0581,8.5453,38.3879,-13.0114,25.0968,106.4083]},{name:"Sails",iau:"Vel",segments:[-124.3,79.6474,-309.0123,-54.8027,14.9573,-129.2654,-54.8027,14.9573,-129.2654,-9.394,1.8349,-22.7673,-9.394,1.8349,-22.7673,-77.6577,1.5019,-157.3078,-77.6577,1.5019,-157.3078,-261.7202,-27.2611,-454.8571,-261.7202,-27.2611,-454.8571,-21.2588,-3.9461,-26.7846,-21.2588,-3.9461,-26.7846,-16.6506,-2.1599,-20.7778,-16.6506,-2.1599,-20.7778,-21.015,1.1029,-23.5852,-21.015,1.1029,-23.5852,-11.3825,3.1056,-14.6555,-11.3825,3.1056,-14.6555,-88.6625,30.2045,-138.1928,-88.6625,30.2045,-138.1928,-124.3,79.6474,-309.0123]},{name:"Maiden",iau:"Vir",segments:[-100.7276,10.304,8.1223,-114.5886,-9.2127,2.2725,-114.5886,-9.2127,2.2725,-11.8183,-2.114,.5851,-11.8183,-2.114,.5851,-69.9908,-30.93,-2.745,-69.9908,-30.93,-2.745,-71.0336,-48.8086,4.3856,-71.0336,-48.8086,4.3856,-18.1594,-12.1553,2.7604,-18.1594,-12.1553,2.7604,-14.4439,-12.1763,3.2197,-69.9908,-30.93,-2.745,-20.9342,-8.515,3.4326,-20.9342,-8.515,3.4326,-59.9382,-31.5333,15.7139,-59.9382,-31.5333,15.7139,-30.7984,-24.5133,12.1105,-20.9342,-8.515,3.4326,-55.6692,-11.2865,8.6041,-55.6692,-11.2865,8.6041,-31.3083,-5.4868,9.2375,-55.6692,-11.2865,8.6041,-11.8183,-2.114,.5851]},{name:"Flying Fish",iau:"Vol",segments:[-5.7263,-5.8804,-43.8055,-4.0299,-3.3646,-40.5151,-4.0299,-3.3646,-40.5151,-38.167,-17.1271,-193.1621,-38.167,-17.1271,-193.1621,-5.7263,-5.8804,-43.8055,-38.167,-17.1271,-193.1621,-25.9818,-9.1616,-208.6176,-38.167,-17.1271,-193.1621,-7.9524,-2.1564,-32.0566,-7.9524,-2.1564,-32.0566,-11.0173,-4.1397,-36.6604,-11.0173,-4.1397,-36.6604,-38.167,-17.1271,-193.1621]},{name:"Fox",iau:"Vul",segments:[30.5619,-54.0014,63.9373,33.1894,-38.3825,54.3975]}],So=[{hip:677,pos:[25.9747,6.6249,12.8897],mag:2.06,ci:-.043,trueDistPc:29.74},{hip:746,pos:[8.5999,6.0479,13.0833],mag:2.27,ci:.339,trueDistPc:16.78},{hip:765,pos:[30.84,-11.4399,-29.5717],mag:3.87,ci:.917,trueDistPc:44.23},{hip:1067,pos:[138.6825,22.3525,31.3991],mag:2.84,ci:-.146,trueDistPc:143.94},{hip:1562,pos:[84.1581,1.3457,-14.8741],mag:3.55,ci:1.087,trueDistPc:85.47},{hip:1599,pos:[3.6406,-2.8065,-7.2769],mag:4.23,ci:.535,trueDistPc:8.61},{hip:1645,pos:[139.6701,19.5768,13.5118],mag:5.37,ci:1.209,trueDistPc:141.68},{hip:2021,pos:[1.6352,-2.7245,-6.7481],mag:2.79,ci:.577,trueDistPc:7.46},{hip:2072,pos:[17.2205,-4.77,-15.9735],mag:3.94,ci:.195,trueDistPc:23.97},{hip:2081,pos:[19.0832,-4.9374,-16.9146],mag:2.38,ci:.976,trueDistPc:25.97},{hip:2484,pos:[19.7186,-13.007,-36.8674],mag:4.289,ci:.016,trueDistPc:43.79},{hip:3092,pos:[26.7885,10.7218,13.0592],mag:3.28,ci:1.138,trueDistPc:31.67},{hip:3179,pos:[38.5213,29.8626,51.5819],mag:2.23,ci:1.045,trueDistPc:70.97},{hip:3419,pos:[27.5835,1.2446,-10.4796],mag:2.01,ci:.908,trueDistPc:29.53},{hip:3786,pos:[89.2427,22.4946,3.4979],mag:4.44,ci:1.333,trueDistPc:92.1},{hip:3881,pos:[127.198,70.9409,93.0072],mag:4.53,ci:-.078,trueDistPc:172.81},{hip:4427,pos:[79.8367,76.9122,126.698],mag:2.39,ci:-.035,trueDistPc:168.35},{hip:4436,pos:[28.4124,15.8631,18.5299],mag:3.87,ci:.152,trueDistPc:37.45},{hip:4577,pos:[182.4239,1.5688,-116.2803],mag:4.27,ci:-.103,trueDistPc:216.34},{hip:4889,pos:[96.7799,49.7652,46.3746],mag:5.5,ci:.007,trueDistPc:118.29},{hip:4906,pos:[53.5401,16.9072,1.072],mag:4.28,ci:.866,trueDistPc:56.16},{hip:5165,pos:[985.9208,-166.0635,-1118.2053],mag:3.3,ci:.807,trueDistPc:8333.33},{hip:5348,pos:[48.6142,-15.4408,-73.2038],mag:4.014,ci:-.04,trueDistPc:89.22},{hip:5364,pos:[34.7557,7.2403,-10.2594],mag:3.45,ci:1.036,trueDistPc:36.95},{hip:5447,pos:[46.9464,27.549,26.482],mag:2.05,ci:1.384,trueDistPc:60.53},{hip:5742,pos:[105.4541,52.4839,32.674],mag:4.66,ci:.926,trueDistPc:122.24},{hip:6193,pos:[82.3632,45.2572,29.569],mag:4.748,ci:.085,trueDistPc:98.52},{hip:6537,pos:[31.8262,9.2621,-9.3591],mag:3.59,ci:.951,trueDistPc:34.44},{hip:6686,pos:[14.0824,15.6017,22.073],mag:2.68,ci:.16,trueDistPc:30.48},{hip:6867,pos:[50.4551,-1.6354,-55.2555],mag:3.42,ci:1.384,trueDistPc:74.84},{hip:7007,pos:[98.5432,42.104,-5.736],mag:4.84,ci:1.223,trueDistPc:107.31},{hip:7083,pos:[26.4925,-2.9613,-34.8446],mag:3.935,ci:.886,trueDistPc:43.87},{hip:7097,pos:[101.7384,51.4273,10.7311],mag:3.62,ci:.883,trueDistPc:114.5},{hip:7588,pos:[21.0655,-5.522,-36.7913],mag:.46,ci:-.086,trueDistPc:42.75},{hip:7884,pos:[100.7571,48.0728,-9.1668],mag:4.44,ci:1.214,trueDistPc:112.01},{hip:8102,pos:[3.1559,1.0144,-1.5328],mag:3.5,ci:.662,trueDistPc:3.65},{hip:8198,pos:[70.608,37.1378,-2.2566],mag:4.26,ci:.866,trueDistPc:79.81},{hip:8645,pos:[67.5396,27.2194,-26.9862],mag:3.72,ci:1.019,trueDistPc:77.66},{hip:8796,pos:[14.9217,11.1876,5.6309],mag:3.42,ci:.458,trueDistPc:19.48},{hip:8832,pos:[41.7697,27.3173,6.2717],mag:4.562,ci:-.028,trueDistPc:50.3},{hip:8833,pos:[52.7109,27.464,-8.2702],mag:4.604,ci:.856,trueDistPc:60.01},{hip:8837,pos:[62.3225,1.4348,-81.446],mag:4.41,ci:1.402,trueDistPc:102.57},{hip:8886,pos:[55.6026,78.7157,105.3508],mag:3.37,ci:-.077,trueDistPc:142.78},{hip:8903,pos:[14.7527,9.9396,2.6545],mag:2.65,ci:.16,trueDistPc:17.99},{hip:9007,pos:[9.5551,-.6267,-14.755],mag:3.71,ci:.764,trueDistPc:17.59},{hip:9236,pos:[8.0221,-2.5883,-17.4696],mag:2.84,ci:.297,trueDistPc:19.4},{hip:9487,pos:[39.7287,22.3665,-7.2707],mag:4.155,ci:-.062,trueDistPc:46.17},{hip:9640,pos:[76.3681,74.3307,56.2028],mag:2.1,ci:1.07,trueDistPc:120.48},{hip:9884,pos:[15.7321,12.1427,3.4917],mag:2.01,ci:1.036,trueDistPc:20.18},{hip:10064,pos:[26.9097,24.5311,13.6727],mag:3,ci:.169,trueDistPc:38.9},{hip:10324,pos:[79.3152,53.5821,-7.1415],mag:4.35,ci:.798,trueDistPc:95.98},{hip:10602,pos:[23.7559,.4146,-39.52],mag:3.57,ci:-.052,trueDistPc:46.11},{hip:10670,pos:[24.513,23.2767,11.6054],mag:4,ci:.067,trueDistPc:35.74},{hip:10826,pos:[75.1307,46.0798,-25.1676],mag:6.53,ci:.985,trueDistPc:91.66},{hip:11001,pos:[12.7363,-7.5995,-40.3145],mag:4.09,ci:.075,trueDistPc:42.96},{hip:11345,pos:[135.3154,77.2385,-73.452],mag:4.866,ci:.029,trueDistPc:172.25},{hip:11407,pos:[86.9013,12.1135,-135.1755],mag:4.25,ci:-.069,trueDistPc:161.16},{hip:11484,pos:[47.6537,36.5263,-6.1577],mag:4.3,ci:.007,trueDistPc:60.36},{hip:11767,pos:[1.3431,53.7124,121.2552],mag:2.02,ci:.56,trueDistPc:132.63},{hip:11783,pos:[17.5219,10.1585,-11.0112],mag:4.75,ci:.432,trueDistPc:23.05},{hip:12093,pos:[95.6428,75.7716,-19.7204],mag:4.871,ci:.79,trueDistPc:123.6},{hip:12387,pos:[149.5714,115.0665,-48.6695],mag:4.07,ci:-.137,trueDistPc:194.89},{hip:12390,pos:[17.6728,11.6269,-10.3186],mag:4.87,ci:.441,trueDistPc:23.54},{hip:12394,pos:[13.3224,-7.1094,-44.3991],mag:4.096,ci:.008,trueDistPc:46.9},{hip:12413,pos:[24.8917,7.1304,-35.9687],mag:4.75,ci:.101,trueDistPc:44.32},{hip:12484,pos:[21.9024,.948,-44.2868],mag:5.21,ci:.39,trueDistPc:49.42},{hip:12486,pos:[26.3235,8.9467,-35.2219],mag:4.116,ci:.898,trueDistPc:44.87},{hip:12706,pos:[18.4404,15.1648,-5.0731],mag:3.47,ci:.126,trueDistPc:24.41},{hip:12770,pos:[87.1675,58.2562,-56.3289],mag:4.236,ci:-.055,trueDistPc:119.02},{hip:12828,pos:[19.6933,17.6956,-2.5804],mag:4.26,ci:.313,trueDistPc:26.6},{hip:12843,pos:[10.1705,6.382,-7.723],mag:4.46,ci:.458,trueDistPc:14.28},{hip:13147,pos:[33.8427,16.6781,-38.8736],mag:4.46,ci:.891,trueDistPc:54.17},{hip:13209,pos:[33.2876,37.2348,9.2114],mag:3.594,ci:-.032,trueDistPc:50.79},{hip:13254,pos:[22.3295,28.4122,13.8305],mag:4.14,ci:.504,trueDistPc:38.69},{hip:13268,pos:[126.2335,207.6325,186.3338],mag:3.79,ci:1.487,trueDistPc:306.21},{hip:13701,pos:[29.2925,23.5097,-17.1541],mag:3.87,ci:1.002,trueDistPc:41.29},{hip:13847,pos:[26.8574,11.5513,-39.8588],mag:3.228,ci:.42,trueDistPc:49.43},{hip:13954,pos:[95.5438,95.8551,-18.5053],mag:4.7,ci:-.052,trueDistPc:136.6},{hip:14135,pos:[53.3427,52.0916,-16.6461],mag:2.53,ci:1.444,trueDistPc:76.39},{hip:14146,pos:[17.349,11.9391,-16.9971],mag:4.09,ci:.186,trueDistPc:27.06},{hip:14240,pos:[15.1763,-.4981,-40.5242],mag:5.122,ci:.332,trueDistPc:43.28},{hip:14328,pos:[29.1426,50.5204,40.1297],mag:2.93,ci:.645,trueDistPc:70.8},{hip:14354,pos:[50.7721,72.2704,33.1535],mag:3.39,ci:1.452,trueDistPc:94.34},{hip:14576,pos:[14.1894,21.17,10.5192],mag:2.12,ci:.008,trueDistPc:27.57},{hip:14879,pos:[8.1907,5.653,-9.8452],mag:3.98,ci:.501,trueDistPc:14},{hip:15197,pos:[23.6847,22.7349,-15.957],mag:4.8,ci:.246,trueDistPc:36.5},{hip:15474,pos:[56.3803,47.4932,-58.6514],mag:3.7,ci:1.427,trueDistPc:94.2},{hip:15510,pos:[2.8379,1.46,-5.1296],mag:4.27,ci:.654,trueDistPc:6.04},{hip:15863,pos:[62.8851,118.6738,77.9341],mag:1.79,ci:.458,trueDistPc:155.28},{hip:15900,pos:[41.0374,50.9739,-10.7564],mag:3.6,ci:.806,trueDistPc:66.32},{hip:16228,pos:[291.1956,672.3074,604.6408],mag:4.22,ci:.399,trueDistPc:949.94},{hip:16537,pos:[1.9011,2.1238,-1.4975],mag:3.73,ci:.798,trueDistPc:3.22},{hip:16611,pos:[54.3226,52.8356,-62.3343],mag:4.25,ci:-.035,trueDistPc:98.12},{hip:17358,pos:[60.5943,128.7813,73.4646],mag:3.01,ci:-.052,trueDistPc:160.17},{hip:17378,pos:[5.0331,6.1849,-4.3614],mag:3.54,ci:.832,trueDistPc:9.09},{hip:17440,pos:[7.8095,-1.1818,-31.8874],mag:3.833,ci:1.015,trueDistPc:32.85},{hip:17448,pos:[156.0846,283.2515,69.8314],mag:3.91,ci:.05,trueDistPc:330.86},{hip:17651,pos:[8.9684,9.7397,-11.8744],mag:4.2,ci:.433,trueDistPc:17.78},{hip:17678,pos:[9.8608,-11.5567,-64.5525],mag:3.26,ci:1.427,trueDistPc:66.32},{hip:17797,pos:[21.7991,18.6551,-41.8437],mag:4.27,ci:.042,trueDistPc:50.74},{hip:17847,pos:[60.7823,106.8048,8.4154],mag:3.63,ci:-.027,trueDistPc:123.18},{hip:17874,pos:[29.0556,25.9406,-54.2246],mag:4.17,ci:.857,trueDistPc:66.76},{hip:17959,pos:[20.3155,73.9849,90.2028],mag:4.604,ci:.093,trueDistPc:118.42},{hip:18246,pos:[114.9622,226.8368,50.9699],mag:2.85,ci:.152,trueDistPc:259.36},{hip:18505,pos:[27.28,84.1613,78.3586],mag:5.04,ci:-.035,trueDistPc:118.18},{hip:18532,pos:[72.9911,161.4906,61.4183],mag:2.89,ci:-.103,trueDistPc:187.56},{hip:18597,pos:[40.0135,4.9516,-160.6295],mag:4.57,ci:1.427,trueDistPc:165.61},{hip:18614,pos:[167.1284,357.9585,105.439],mag:4.06,ci:.067,trueDistPc:408.88},{hip:18724,pos:[60.407,107.3563,-17.2243],mag:3.41,ci:-.052,trueDistPc:124.38},{hip:19747,pos:[11.906,12.2534,-31.7713],mag:3.86,ci:.985,trueDistPc:36.07},{hip:19780,pos:[10.099,1.3307,-48.0897],mag:3.36,ci:.824,trueDistPc:49.16},{hip:19893,pos:[5.5753,4.1324,-19.2144],mag:4.2,ci:.348,trueDistPc:20.43},{hip:19921,pos:[4.109,1.4637,-17.9171],mag:4.44,ci:.968,trueDistPc:18.44},{hip:20042,pos:[19.4618,25.3656,-43.9482],mag:3.56,ci:-.052,trueDistPc:54.35},{hip:20205,pos:[18.8226,41.8934,-4.6103],mag:3.65,ci:.891,trueDistPc:46.16},{hip:20455,pos:[19.2949,45.1724,-3.4086],mag:3.76,ci:.883,trueDistPc:49.24},{hip:20535,pos:[30.2877,42.4416,-73.2],mag:3.96,ci:1.316,trueDistPc:89.87},{hip:20648,pos:[18.084,43.7341,-3.0501],mag:4.298,ci:.11,trueDistPc:47.42},{hip:20889,pos:[16.3959,41.549,-2.0027],mag:3.53,ci:.908,trueDistPc:44.71},{hip:20894,pos:[17.1129,42.2751,-4.6636],mag:3.41,ci:.211,trueDistPc:45.85},{hip:21060,pos:[56.1269,66.8497,-190.0001],mag:5.059,ci:-.116,trueDistPc:209.09},{hip:21281,pos:[10.8578,8.4311,-49.8454],mag:3.28,ci:-.035,trueDistPc:51.71},{hip:21393,pos:[20.0748,34.6103,-50.8762],mag:3.82,ci:.883,trueDistPc:64.72},{hip:21421,pos:[7.027,19.0878,-1.9468],mag:.86,ci:1.359,trueDistPc:20.43},{hip:21444,pos:[74.3223,173.5311,-88.5244],mag:3.928,ci:-.112,trueDistPc:208.5},{hip:21594,pos:[11.7269,25.4427,-20.3561],mag:3.87,ci:.977,trueDistPc:34.63},{hip:21770,pos:[5.1567,7.6879,-18.1589],mag:4.45,ci:.339,trueDistPc:20.38},{hip:21861,pos:[7.6828,12.9813,-24.6444],mag:5.05,ci:.364,trueDistPc:28.89},{hip:21881,pos:[37.2301,115.637,1.5137],mag:4.258,ci:-.052,trueDistPc:121.49},{hip:21949,pos:[15.4411,-13.3335,-142.0162],mag:5.511,ci:-.052,trueDistPc:143.47},{hip:22109,pos:[54.8554,145.4538,-73.708],mag:4,ci:-.061,trueDistPc:172.04},{hip:22449,pos:[2.4005,7.3551,-2.1288],mag:3.19,ci:.424,trueDistPc:8.02},{hip:22509,pos:[19.762,62.1737,-15.6427],mag:4.35,ci:.059,trueDistPc:67.09},{hip:22549,pos:[76.009,235.34,-74.535],mag:3.68,ci:-.103,trueDistPc:258.3},{hip:22701,pos:[19.2383,56.0186,-31.2216],mag:4.4,ci:.254,trueDistPc:66.96},{hip:22730,pos:[53.7285,168.044,-63.9057],mag:5.324,ci:1.415,trueDistPc:187.64},{hip:22783,pos:[170.822,1076.0472,1030.991],mag:4.29,ci:.093,trueDistPc:1690.33},{hip:22845,pos:[10.2152,34.6962,-7.9299],mag:4.648,ci:.114,trueDistPc:37.03},{hip:23015,pos:[31.3476,131.9866,25.0313],mag:2.69,ci:1.35,trueDistPc:137.95},{hip:23123,pos:[62.9115,212.9095,-84.5625],mag:4.459,ci:1.235,trueDistPc:237.57},{hip:23453,pos:[131.4405,653.8382,219.3016],mag:3.75,ci:1.087,trueDistPc:702.05},{hip:23685,pos:[13.9738,43.1494,-45.2996],mag:3.18,ci:1.291,trueDistPc:64.1},{hip:23875,pos:[6.1994,23.5903,-12.8937],mag:2.79,ci:.161,trueDistPc:27.59},{hip:23972,pos:[59.993,227.2791,-144.2905],mag:4.27,ci:-.12,trueDistPc:275.82},{hip:24244,pos:[14.2669,56.2068,-40.1845],mag:4.45,ci:-.035,trueDistPc:70.55},{hip:24305,pos:[10.2115,39.1866,-32.8509],mag:3.29,ci:-.043,trueDistPc:52.14},{hip:24327,pos:[28.2847,112.6398,-83.7919],mag:4.44,ci:-.027,trueDistPc:143.21},{hip:24436,pos:[51.6011,220.5144,-136.739],mag:.13,ci:.025,trueDistPc:264.55},{hip:24608,pos:[1.7126,11.9703,5.0991],mag:.08,ci:.73,trueDistPc:13.12},{hip:24845,pos:[51.1872,236.3203,-176.8951],mag:4.29,ci:-.162,trueDistPc:299.6},{hip:24873,pos:[18.4027,86.5152,-62.7166],mag:5.284,ci:-.048,trueDistPc:108.43},{hip:25110,pos:[.6317,11.6383,17.2104],mag:4.956,ci:.642,trueDistPc:20.79},{hip:25336,pos:[11.6585,73.1666,-22.3916],mag:1.64,ci:-.137,trueDistPc:77.4},{hip:25428,pos:[5.2816,40.527,3.8526],mag:1.65,ci:-.06,trueDistPc:41.05},{hip:25606,pos:[6.1882,33.9585,-33.234],mag:2.84,ci:.747,trueDistPc:47.92},{hip:25859,pos:[8.6981,43.5209,-72.788],mag:3.87,ci:1.019,trueDistPc:85.25},{hip:25918,pos:[.9446,-5.6053,-32.1863],mag:5.2,ci:1.011,trueDistPc:32.68},{hip:25930,pos:[25.8681,192.8997,-84.8402],mag:2.41,ci:-.282,trueDistPc:212.31},{hip:25985,pos:[76.8772,507.1638,-446.8164],mag:2.57,ci:.22,trueDistPc:680.27},{hip:26069,pos:[18.0973,23.2658,-339.9282],mag:3.76,ci:.747,trueDistPc:341.2},{hip:26207,pos:[35.9075,325.6016,-77.8549],mag:3.66,ci:-.103,trueDistPc:336.7},{hip:26311,pos:[62.7751,547.8791,-251.3906],mag:1.69,ci:-.103,trueDistPc:606.06},{hip:26451,pos:[12.3919,135.7611,-5.2266],mag:3.03,ci:-.112,trueDistPc:136.43},{hip:26634,pos:[6.443,46.8483,-73.8737],mag:2.65,ci:-.052,trueDistPc:87.71},{hip:26727,pos:[18.9185,203.2148,-96.4444],mag:1.77,ci:-.129,trueDistPc:225.73},{hip:27072,pos:[.5575,6.1812,-6.3861],mag:3.6,ci:.45,trueDistPc:8.91},{hip:27100,pos:[1.2474,.6204,-45.6993],mag:4.36,ci:.229,trueDistPc:45.72},{hip:27288,pos:[1.2277,17.497,-13.8104],mag:3.525,ci:.145,trueDistPc:22.32},{hip:27321,pos:[.6842,5.2278,-18.9134],mag:3.86,ci:.195,trueDistPc:19.63},{hip:27366,pos:[10.4441,165.9412,-108.2683],mag:2.06,ci:-.103,trueDistPc:198.41},{hip:27530,pos:[1.4056,10.2361,-55.9484],mag:4.494,ci:.981,trueDistPc:56.89},{hip:27628,pos:[.867,13.8563,-23.2707],mag:3.12,ci:1.036,trueDistPc:27.1},{hip:27654,pos:[1.2445,25.1502,-24.5705],mag:3.85,ci:.883,trueDistPc:35.18},{hip:27890,pos:[.3183,1.6505,-27.2721],mag:4.66,ci:.934,trueDistPc:27.32},{hip:27913,pos:[.1991,8.6478,-.4771],mag:4.4,ci:.56,trueDistPc:8.66},{hip:27989,pos:[3.1893,146.703,-42.1512],mag:.42,ci:1.622,trueDistPc:152.67},{hip:28103,pos:[.2275,11.8477,-9.1268],mag:3.72,ci:.331,trueDistPc:14.96},{hip:28199,pos:[2.8376,167.9084,-276.423],mag:4.36,ci:-.103,trueDistPc:323.44},{hip:28328,pos:[.3689,54.3996,-123.6596],mag:3.96,ci:1.019,trueDistPc:135.1},{hip:28360,pos:[.0362,23.1376,9.118],mag:1.9,ci:.075,trueDistPc:24.87},{hip:28380,pos:[.0492,49.3018,12.0853],mag:2.62,ci:-.018,trueDistPc:50.76},{hip:28614,pos:[-.487,46.1339,-11.3243],mag:4.674,ci:.257,trueDistPc:47.51},{hip:28691,pos:[-3.722,261.5709,-17.1289],mag:5.13,ci:-.043,trueDistPc:262.16},{hip:28734,pos:[-.7853,47.5444,-.1432],mag:4.15,ci:.789,trueDistPc:47.55},{hip:28910,pos:[-1.3307,40.189,-31.8302],mag:4.663,ci:.087,trueDistPc:51.28},{hip:29038,pos:[-5.9115,182.8639,-27.8616],mag:4.397,ci:-.083,trueDistPc:185.07},{hip:29151,pos:[-6.9363,165.6855,-63.394],mag:5.73,ci:.11,trueDistPc:177.53},{hip:29426,pos:[-11.1598,217.9384,-35.3451],mag:4.48,ci:-.095,trueDistPc:221.07},{hip:29651,pos:[-12.6109,169.7342,-96.9213],mag:3.96,ci:1.163,trueDistPc:195.86},{hip:29655,pos:[-12.6667,210.9575,-3.2762],mag:3.28,ci:1.418,trueDistPc:211.36},{hip:29807,pos:[-3.3944,29.8751,-49.0399],mag:4.37,ci:.9,trueDistPc:57.52},{hip:30060,pos:[-2.1511,39.6538,28.4568],mag:4.434,ci:.074,trueDistPc:48.86},{hip:30122,pos:[-8.5121,65.741,-89.1703],mag:2.99,ci:-.095,trueDistPc:111.11},{hip:30277,pos:[-5.3422,36.0752,-55.5481],mag:3.85,ci:.798,trueDistPc:66.45},{hip:30324,pos:[-14.2097,112.672,-99.6064],mag:1.97,ci:-.154,trueDistPc:151.06},{hip:30343,pos:[-6.5621,70.7116,-1.0166],mag:2.87,ci:1.444,trueDistPc:71.02},{hip:30419,pos:[-4.2857,39.1015,-13.3278],mag:4.398,ci:.207,trueDistPc:41.53},{hip:30438,pos:[-5.9927,22.4267,-91.9002],mag:-.74,ci:.178,trueDistPc:94.79},{hip:30867,pos:[-25.823,177.3205,-104.5655],mag:3.74,ci:-.078,trueDistPc:207.47},{hip:30883,pos:[-19.7459,165.5339,-8.9011],mag:4.14,ci:-.069,trueDistPc:166.94},{hip:31416,pos:[-17.4617,84.6014,-89.61],mag:4.5,ci:.041,trueDistPc:124.47},{hip:31592,pos:[-3.0802,14.8191,-13.7832],mag:3.91,ci:.986,trueDistPc:20.47},{hip:31681,pos:[-5.2662,32.861,-3.9346],mag:1.92,ci:.05,trueDistPc:33.51},{hip:31685,pos:[-13.558,43.9401,-103.6433],mag:3.17,ci:-.044,trueDistPc:113.39},{hip:32246,pos:[-46.0238,262.6544,9.6379],mag:2.98,ci:1.248,trueDistPc:266.83},{hip:32349,pos:[-.4943,1.9707,-1.6811],mag:-1.46,ci:.05,trueDistPc:2.64},{hip:32362,pos:[-3.5316,17.821,-3.2375],mag:3.36,ci:.416,trueDistPc:18.45},{hip:32607,pos:[-2.9064,2.1027,-29.3852],mag:3.23,ci:.246,trueDistPc:29.6},{hip:32768,pos:[-7.3125,13.9127,-50.9419],mag:2.93,ci:1.07,trueDistPc:53.31},{hip:33018,pos:[-11.2245,57.0884,11.3411],mag:3.6,ci:.135,trueDistPc:59.28},{hip:33152,pos:[-165.8789,505.6813,-566.2108],mag:3.87,ci:1.521,trueDistPc:777.06},{hip:33160,pos:[-18.9847,65.4126,-47.1978],mag:4.08,ci:1.266,trueDistPc:82.87},{hip:33347,pos:[-245.2542,776.7879,-674.9295],mag:4.385,ci:-.025,trueDistPc:1057.87},{hip:33449,pos:[-7.0809,43.9799,31.701],mag:4.35,ci:.772,trueDistPc:54.67},{hip:33579,pos:[-27.4979,72.5304,-97.0294],mag:1.5,ci:-.129,trueDistPc:124.22},{hip:33856,pos:[-93.704,237.2004,-306.3871],mag:3.47,ci:1.52,trueDistPc:398.64},{hip:33977,pos:[-285.0116,742.3727,-827.2156],mag:3.02,ci:-.018,trueDistPc:1147.45},{hip:34045,pos:[-34.8809,97.9145,-81.1902],mag:4.12,ci:-.052,trueDistPc:131.89},{hip:34088,pos:[-84.1194,314.1522,-11.5776],mag:3.79,ci:.721,trueDistPc:325.43},{hip:34444,pos:[-129.7334,299.8533,-368.6769],mag:1.84,ci:.628,trueDistPc:492.61},{hip:34481,pos:[-4.0299,-3.3646,-40.5151],mag:3.746,ci:.924,trueDistPc:40.85},{hip:34693,pos:[-31.6915,114.7086,16.2054],mag:4.42,ci:1.121,trueDistPc:120.1},{hip:34769,pos:[-39.1584,110.361,-49.0374],mag:4.15,ci:.041,trueDistPc:126.96},{hip:35037,pos:[-80.3942,167.564,-210.5207],mag:3.82,ci:-.103,trueDistPc:280.82},{hip:35228,pos:[-25.9818,-9.1616,-208.6176],mag:3.99,ci:.722,trueDistPc:210.43},{hip:35264,pos:[-45.7183,78.2353,-148.0133],mag:2.7,ci:1.427,trueDistPc:173.55},{hip:35350,pos:[-9.825,28.8956,-3.0115],mag:3.559,ci:.148,trueDistPc:30.67},{hip:35550,pos:[-5.9071,17.6349,-.0579],mag:3.53,ci:.339,trueDistPc:18.6},{hip:35904,pos:[-190.762,336.6705,-471.2381],mag:2.45,ci:-.018,trueDistPc:609.76},{hip:36046,pos:[-13.4564,39.1751,4.177],mag:3.79,ci:.934,trueDistPc:41.63},{hip:36145,pos:[-20.2751,72.0996,38.0752],mag:4.61,ci:.036,trueDistPc:84.02},{hip:36188,pos:[-18.2097,44.6401,-11.5631],mag:2.89,ci:-.027,trueDistPc:49.58},{hip:36377,pos:[-16.2271,20.2616,-52.6958],mag:3.25,ci:1.342,trueDistPc:58.74},{hip:36850,pos:[-5.3119,14.4062,2.7338],mag:1.58,ci:.084,trueDistPc:15.6},{hip:36962,pos:[-28.1502,72.0368,7.0604],mag:4.06,ci:1.359,trueDistPc:77.66},{hip:37279,pos:[-1.4693,3.0414,-.9698],mag:.37,ci:.407,trueDistPc:3.51},{hip:37447,pos:[-18.8357,33.5911,-22.643],mag:3.93,ci:.917,trueDistPc:44.67},{hip:37504,pos:[-5.7263,-5.8804,-43.8055],mag:3.944,ci:.928,trueDistPc:44.57},{hip:37740,pos:[-18.1443,41.4012,2.4311],mag:3.57,ci:.832,trueDistPc:45.27},{hip:37826,pos:[-4.0555,9.455,1.2057],mag:1.14,ci:.9,trueDistPc:10.36},{hip:38146,pos:[-25.6575,35.3426,-43.6826],mag:5.313,ci:.682,trueDistPc:61.77},{hip:39429,pos:[-130.675,115.4053,-282.8069],mag:2.25,ci:-.179,trueDistPc:332.23},{hip:39757,pos:[-9.3661,10.6279,-13.3354],mag:2.81,ci:.416,trueDistPc:19.46},{hip:39794,pos:[-38.167,-17.1271,-193.1621],mag:4.398,ci:-.059,trueDistPc:197.64},{hip:39863,pos:[-163.758,232.6802,-118.363],mag:4.33,ci:.875,trueDistPc:308.17},{hip:39953,pos:[-124.3,79.6474,-309.0123],mag:1.83,ci:-.162,trueDistPc:342.47},{hip:40526,pos:[-54.8236,80.4972,-17.6775],mag:3.52,ci:1.308,trueDistPc:98.98},{hip:40702,pos:[-2.5063,-4.2209,-18.8582],mag:4.047,ci:.391,trueDistPc:19.49},{hip:40843,pos:[-9.2988,15.4924,2.3677],mag:4.989,ci:.66,trueDistPc:18.22},{hip:41037,pos:[-54.8371,6.6077,-177.1162],mag:1.86,ci:1.13,trueDistPc:185.53},{hip:41075,pos:[-47.908,91.7973,44.178],mag:4.25,ci:1.368,trueDistPc:112.58},{hip:41312,pos:[-7.9524,-2.1564,-32.0566],mag:3.759,ci:1.016,trueDistPc:33.1},{hip:41704,pos:[-16.6279,39.1808,36.024],mag:3.42,ci:.772,trueDistPc:55.76},{hip:42313,pos:[-34.2796,40.4149,-11.6444],mag:4.131,ci:.061,trueDistPc:54.26},{hip:42402,pos:[-73.3756,83.7875,-29.0147],mag:4.43,ci:1.07,trueDistPc:115.09},{hip:42515,pos:[-62.0379,40.5952,-92.0652],mag:3.954,ci:.841,trueDistPc:118.21},{hip:42536,pos:[-54.8027,14.9573,-129.2654],mag:3.63,ci:-.112,trueDistPc:141.2},{hip:42568,pos:[-180.1868,5.2702,-524.7472],mag:4.313,ci:-.061,trueDistPc:554.85},{hip:42799,pos:[-102.1663,112.2635,-38.5527],mag:4.3,ci:-.12,trueDistPc:156.61},{hip:42806,pos:[-32.6313,42.467,2.9853],mag:4.652,ci:.065,trueDistPc:53.64},{hip:42828,pos:[-133.3514,88.2619,-183.4617],mag:3.68,ci:-.103,trueDistPc:243.37},{hip:42911,pos:[-26.2534,32.7438,.0565],mag:3.94,ci:.968,trueDistPc:41.97},{hip:42913,pos:[-9.394,1.8349,-22.7673],mag:17.336,ci:0,trueDistPc:24.7},{hip:43103,pos:[-61.9264,84.1604,19.2272],mag:4.018,ci:.881,trueDistPc:106.24},{hip:43109,pos:[-26.1982,28.7463,-7.6335],mag:3.38,ci:.628,trueDistPc:39.64},{hip:43234,pos:[-63.8752,68.7143,-19.1756],mag:4.337,ci:.026,trueDistPc:95.76},{hip:43409,pos:[-38.6499,26.5963,-44.1988],mag:4.01,ci:1.121,trueDistPc:64.46},{hip:43813,pos:[-32.3285,32.8109,-8.9281],mag:3.1,ci:.9,trueDistPc:46.92},{hip:44066,pos:[-37.5024,39.3242,-4.831],mag:4.249,ci:.168,trueDistPc:54.55},{hip:44127,pos:[-6.8358,10.6072,7.1614],mag:3.14,ci:.211,trueDistPc:14.51},{hip:44248,pos:[-9.9087,14.0072,7.5369],mag:3.96,ci:.415,trueDistPc:18.74},{hip:44382,pos:[-11.0173,-4.1397,-36.6604],mag:3.99,ci:.181,trueDistPc:38.5},{hip:44471,pos:[-53.6678,79.7556,53.2414],mag:3.55,ci:.05,trueDistPc:109.89},{hip:44700,pos:[-123.0848,160.1503,77.1064],mag:4.539,ci:.924,trueDistPc:216.2},{hip:44816,pos:[-88.6625,30.2045,-138.1928],mag:2.21,ci:1.452,trueDistPc:166.94},{hip:45080,pos:[-48.0063,-2.8648,-116.2623],mag:3.4,ci:-.078,trueDistPc:125.82},{hip:45238,pos:[-8.9807,-5.605,-33.0438],mag:1.69,ci:.05,trueDistPc:34.7},{hip:45336,pos:[-27.6832,22.9925,-8.3426],mag:3.881,ci:-.038,trueDistPc:36.94},{hip:45556,pos:[-90.8878,-8.4734,-216.2668],mag:2.26,ci:.203,trueDistPc:234.74},{hip:45688,pos:[-24.7189,28.8699,13.9089],mag:3.92,ci:.084,trueDistPc:40.47},{hip:45860,pos:[-43.1553,48.1947,20.9749],mag:3.14,ci:1.367,trueDistPc:68.01},{hip:45941,pos:[-77.6577,1.5019,-157.3078],mag:2.473,ci:-.077,trueDistPc:175.44},{hip:46390,pos:[-43.0035,27.6298,-21.0495],mag:1.97,ci:1.283,trueDistPc:55.28},{hip:46509,pos:[-14.3879,9.8574,-5.2325],mag:4.6,ci:.441,trueDistPc:18.21},{hip:46651,pos:[-11.3825,3.1056,-14.6555],mag:3.6,ci:.356,trueDistPc:18.81},{hip:46733,pos:[-8.5825,14.3843,16.8491],mag:3.67,ci:.33,trueDistPc:23.76},{hip:46776,pos:[-144.8535,98.6719,-46.8678],mag:4.548,ci:.132,trueDistPc:181.43},{hip:46853,pos:[-6.7267,8.8415,7.7489],mag:3.18,ci:.441,trueDistPc:13.54},{hip:46952,pos:[-37.9239,39.5186,20.7465],mag:4.6,ci:.789,trueDistPc:58.57},{hip:47908,pos:[-53.1957,43.5327,11.7686],mag:2.98,ci:.738,trueDistPc:69.74},{hip:48319,pos:[-15.3314,20.8958,23.8756],mag:3.81,ci:.296,trueDistPc:35.24},{hip:48356,pos:[-62.3608,28.1685,-33.4888],mag:4.11,ci:.832,trueDistPc:76.18},{hip:48402,pos:[-77.6666,94.726,96.6065],mag:4.557,ci:.088,trueDistPc:156.01},{hip:48455,pos:[-29.266,23.3377,8.1949],mag:3.88,ci:1.087,trueDistPc:38.32},{hip:48774,pos:[-261.7202,-27.2611,-454.8571],mag:3.45,ci:-.035,trueDistPc:525.49},{hip:48926,pos:[-23.281,4.7126,-23.3068],mag:5.222,ci:.293,trueDistPc:33.28},{hip:49583,pos:[-469.8671,294.6887,47.2144],mag:3.41,ci:.033,trueDistPc:556.64},{hip:49593,pos:[-19.8267,16.0501,10.3581],mag:4.49,ci:.203,trueDistPc:27.53},{hip:49641,pos:[-115.2754,55.935,-25.174],mag:4.49,ci:.016,trueDistPc:130.58},{hip:49669,pos:[-21.0188,12.2189,.1973],mag:1.4,ci:-.086,trueDistPc:24.31},{hip:49841,pos:[-28.8985,10.8812,-12.4848],mag:3.61,ci:.9,trueDistPc:33.31},{hip:50099,pos:[-36.7994,-28.1756,-111.2454],mag:3.33,ci:-.018,trueDistPc:120.51},{hip:50191,pos:[-21.015,1.1029,-23.5852],mag:3.85,ci:.093,trueDistPc:31.61},{hip:50335,pos:[-58.8396,37.3905,14.6468],mag:3.41,ci:.313,trueDistPc:71.24},{hip:50371,pos:[-100.3964,-36.6914,-206.2573],mag:3.35,ci:1.367,trueDistPc:232.31},{hip:50372,pos:[-45.6298,38.903,34.4596],mag:3.45,ci:.075,trueDistPc:69.16},{hip:50583,pos:[-34.0031,19.9375,6.1126],mag:4,ci:0,trueDistPc:39.89},{hip:50801,pos:[-38.3157,30.7683,27.2368],mag:3.05,ci:1.401,trueDistPc:56.18},{hip:51069,pos:[-65.6572,17.548,-31.2179],mag:3.81,ci:1.308,trueDistPc:74.79},{hip:51172,pos:[-88.3833,11.7289,-68.2345],mag:4.25,ci:1.282,trueDistPc:112.27},{hip:51232,pos:[-226.2193,-72.8357,-409.7547],mag:3.81,ci:.306,trueDistPc:473.69},{hip:51233,pos:[-34.8188,24.7998,19.9929],mag:4.21,ci:.815,trueDistPc:47.19},{hip:51437,pos:[-103.9728,38.8737,-18.2169],mag:5.1,ci:-.069,trueDistPc:112.49},{hip:51839,pos:[-25.0619,-44.1552,-126.1982],mag:4.12,ci:1.393,trueDistPc:136.03},{hip:51986,pos:[-16.6506,-2.1599,-20.7778],mag:3.84,ci:.297,trueDistPc:26.71},{hip:52419,pos:[-56.9809,-31.8317,-123.4754],mag:2.76,ci:-.137,trueDistPc:139.66},{hip:52468,pos:[-210.9756,-90.3264,-392.163],mag:4.545,ci:1.473,trueDistPc:454.38},{hip:52727,pos:[-21.2588,-3.9461,-26.7846],mag:2.69,ci:.815,trueDistPc:34.42},{hip:52943,pos:[-38.472,6.5305,-15.6063],mag:3.11,ci:1.104,trueDistPc:42.03},{hip:53229,pos:[-24.0628,13.4059,12.8043],mag:3.83,ci:.934,trueDistPc:30.38},{hip:53253,pos:[-14.7843,-6.1049,-25.1799],mag:3.79,ci:.857,trueDistPc:29.83},{hip:53740,pos:[-45.0108,4.9776,-18.9584],mag:4.07,ci:.976,trueDistPc:49.09},{hip:53910,pos:[-13.8827,11.8844,18.3598],mag:2.37,ci:.033,trueDistPc:25.9},{hip:54061,pos:[-17.2987,17.1799,28.7282],mag:1.79,ci:.959,trueDistPc:37.68},{hip:54463,pos:[-753.7473,-353.5249,-1247.752],mag:3.83,ci:1.121,trueDistPc:4488.33},{hip:54539,pos:[-29.9706,18.1415,25.0241],mag:3.01,ci:1.019,trueDistPc:43.05},{hip:54682,pos:[-87.4645,2.2069,-41.9903],mag:4.449,ci:.072,trueDistPc:97.05},{hip:54872,pos:[-16.4424,5.5601,4.4351],mag:2.53,ci:.178,trueDistPc:17.91},{hip:54879,pos:[-46.5056,13.8436,8.2717],mag:3.35,ci:.033,trueDistPc:49.22},{hip:55282,pos:[-55.9289,3.2376,-17.7418],mag:3.56,ci:.994,trueDistPc:58.76},{hip:55687,pos:[-118.6607,7.7826,-28.4834],mag:4.802,ci:1.356,trueDistPc:122.28},{hip:55705,pos:[-24.9714,.3338,-8.9254],mag:4.06,ci:.212,trueDistPc:26.52},{hip:56211,pos:[-40.5079,47.7083,97.2675],mag:3.85,ci:1.427,trueDistPc:115.66},{hip:56343,pos:[-33.7888,-4.7415,-20.9895],mag:3.54,ci:.84,trueDistPc:40.06},{hip:56480,pos:[-71.5877,-32.5548,-94.9883],mag:4.607,ci:-.013,trueDistPc:123.32},{hip:56561,pos:[-54.5066,-37.5232,-101.0827],mag:3.14,ci:.016,trueDistPc:120.82},{hip:56633,pos:[-90.3482,2.2218,-18.0651],mag:4.673,ci:-.009,trueDistPc:92.16},{hip:57283,pos:[-99.5711,-7.0841,-33.0066],mag:4.706,ci:.875,trueDistPc:105.14},{hip:57363,pos:[-16.6171,-14.4409,-35.9352],mag:3.65,ci:.186,trueDistPc:42.14},{hip:57380,pos:[-100.7276,10.304,8.1223],mag:4.04,ci:1.325,trueDistPc:101.58},{hip:57399,pos:[-40.8039,20.2019,40.3447],mag:3.72,ci:1.053,trueDistPc:60.83},{hip:57632,pos:[-10.6339,1.567,2.3371],mag:2.13,ci:.126,trueDistPc:11},{hip:57936,pos:[-78.7783,-18.8365,-49.5767],mag:4.28,ci:-.035,trueDistPc:94.97},{hip:58001,pos:[-15.0949,8.5483,18.6951],mag:2.44,ci:.058,trueDistPc:25.5},{hip:58188,pos:[-73.449,-7.8463,-21.3078],mag:5.16,ci:.031,trueDistPc:76.88},{hip:59196,pos:[-110.645,-57.5548,-122.6027],mag:2.52,ci:-.06,trueDistPc:174.89},{hip:59199,pos:[-13.5943,-2.9502,-5.5496],mag:4.01,ci:.322,trueDistPc:14.98},{hip:59316,pos:[-87.011,-17.9643,-31.7652],mag:2.98,ci:1.189,trueDistPc:94.35},{hip:59747,pos:[-72.2168,-51.8257,-107.5222],mag:2.752,ci:-.106,trueDistPc:139.51},{hip:59774,pos:[-13.4629,7.4427,19.4483],mag:3.32,ci:.127,trueDistPc:24.8},{hip:59803,pos:[-44.8059,-8.4869,-11.7944],mag:2.58,ci:-.043,trueDistPc:47.1},{hip:6e4,pos:[-17.2582,-37.7613,-83.6165],mag:4.229,ci:-.056,trueDistPc:93.36},{hip:60030,pos:[-114.5886,-9.2127,2.2725],mag:5.897,ci:.179,trueDistPc:114.98},{hip:60718,pos:[-44.3638,-39.7633,-78.7129],mag:4,ci:0,trueDistPc:98.72},{hip:60742,pos:[-44.0323,4.7134,23.943],mag:4.34,ci:1.01,trueDistPc:50.34},{hip:60823,pos:[-80.1167,-47.6182,-85.0668],mag:3.91,ci:-.112,trueDistPc:126.18},{hip:60965,pos:[-24.9767,-5.9741,-5.5508],mag:2.94,ci:.008,trueDistPc:26.27},{hip:61084,pos:[-14.6068,-10.9033,-20.1241],mag:1.64,ci:1.402,trueDistPc:27.15},{hip:61174,pos:[-17.3484,-4.2661,-3.6967],mag:4.294,ci:.359,trueDistPc:18.24},{hip:61199,pos:[-35.3119,-48.6353,-99.5178],mag:3.88,ci:-.078,trueDistPc:116.26},{hip:61281,pos:[-48.7653,46.672,125.689],mag:3.89,ci:-.069,trueDistPc:142.67},{hip:61317,pos:[-6.2908,1.3709,5.5075],mag:4.25,ci:.569,trueDistPc:8.47},{hip:61359,pos:[-41.2393,-12.8982,-14.0768],mag:2.64,ci:.798,trueDistPc:45.44},{hip:61585,pos:[-33.9923,-41.0519,-80.6996],mag:2.649,ci:-.09,trueDistPc:96.71},{hip:61932,pos:[-25.7719,-16.3031,-25.7365],mag:2.17,ci:.042,trueDistPc:39.9},{hip:61941,pos:[-11.8183,-2.114,.5851],mag:2.74,ci:.356,trueDistPc:12.02},{hip:62322,pos:[-38.2492,-45.8329,-86.0288],mag:3.549,ci:-.158,trueDistPc:104.71},{hip:62434,pos:[-42.1687,-37.4997,-64.0955],mag:1.25,ci:-.146,trueDistPc:85.4},{hip:62956,pos:[-13.776,5.3065,20.5587],mag:1.77,ci:.033,trueDistPc:25.31},{hip:63090,pos:[-55.6692,-11.2865,8.6041],mag:3.38,ci:1.401,trueDistPc:57.45},{hip:63125,pos:[-23.2636,2.2127,19.6929],mag:2.88,ci:-.052,trueDistPc:30.56},{hip:63608,pos:[-31.3083,-5.4868,9.2375],mag:2.79,ci:.832,trueDistPc:33.1},{hip:64166,pos:[-62.6009,-28.9811,-17.9378],mag:4.934,ci:.939,trueDistPc:71.28},{hip:64241,pos:[-16.2111,-2.5531,6.9587],mag:4.32,ci:.432,trueDistPc:17.83},{hip:64394,pos:[-7.7336,-.5904,4.9435],mag:4.25,ci:.552,trueDistPc:9.2},{hip:64962,pos:[-33.8976,-17.2853,-9.3057],mag:3,ci:.832,trueDistPc:39.17},{hip:65109,pos:[-13.4253,-8.7615,-7.8246],mag:2.73,ci:.075,trueDistPc:17.84},{hip:65378,pos:[-14.1158,3.598,21.9079],mag:2.283,ci:.534,trueDistPc:26.31},{hip:65474,pos:[-69.9908,-30.93,-2.745],mag:.97,ci:-.146,trueDistPc:76.57},{hip:65936,pos:[-197.912,-146.3289,-128.7601],mag:3.88,ci:1.036,trueDistPc:277.78},{hip:66249,pos:[-20.9342,-8.515,3.4326],mag:3.38,ci:.152,trueDistPc:22.86},{hip:66657,pos:[-70.7265,-72.1096,-83.5171],mag:2.3,ci:-.137,trueDistPc:131.06},{hip:67301,pos:[-18.5296,.9928,25.9075],mag:1.86,ci:-.112,trueDistPc:31.87},{hip:67459,pos:[-63.6617,-22.1686,31.7177],mag:4.07,ci:1.342,trueDistPc:74.5},{hip:67464,pos:[-82.403,-72.0222,-58.8494],mag:3.386,ci:-.118,trueDistPc:124.26},{hip:67472,pos:[-89.3716,-79.17,-66.1252],mag:3.43,ci:-.086,trueDistPc:136.48},{hip:67927,pos:[-9.4877,-3.3293,5.3636],mag:2.68,ci:.534,trueDistPc:11.4},{hip:68002,pos:[-69.5458,-69.426,-63.678],mag:2.55,ci:-.137,trueDistPc:117.1},{hip:68282,pos:[-80.7998,-78.9698,-66.4252],mag:3.87,ci:-.12,trueDistPc:131.06},{hip:68520,pos:[-59.9382,-31.5333,15.7139],mag:4.237,ci:.13,trueDistPc:69.53},{hip:68702,pos:[-50.954,-69.6001,-83.7001],mag:.58,ci:0,trueDistPc:120.19},{hip:68756,pos:[-29.5884,12.2824,73.1965],mag:3.68,ci:.016,trueDistPc:79.9},{hip:68933,pos:[-12.3588,-11.249,-6.7791],mag:2.05,ci:.892,trueDistPc:18.03},{hip:69427,pos:[-71.0336,-48.8086,4.3856],mag:4.21,ci:1.172,trueDistPc:86.3},{hip:69673,pos:[-8.8234,-3.9716,5.7535],mag:-.05,ci:1.095,trueDistPc:11.26},{hip:69701,pos:[-18.1594,-12.1553,2.7604],mag:4.08,ci:.492,trueDistPc:22.03},{hip:70576,pos:[-55.2161,-65.2512,-47.619],mag:4.35,ci:.399,trueDistPc:97.85},{hip:70638,pos:[-8.1315,-41.9358,-81.4718],mag:4.304,ci:1.164,trueDistPc:91.99},{hip:71053,pos:[-34.2615,-14.3923,33.9949],mag:3.59,ci:1.155,trueDistPc:50.37},{hip:71075,pos:[-16.3054,-5.1922,20.0723],mag:3.02,ci:.212,trueDistPc:26.38},{hip:71352,pos:[-54.0862,-65.0289,-40.367],mag:2.31,ci:-.112,trueDistPc:93.72},{hip:71536,pos:[-53.709,-72.8998,-56.9525],mag:4.05,ci:-.078,trueDistPc:106.97},{hip:71683,pos:[-.5038,-.8545,-.912],mag:.01,ci:.654,trueDistPc:1.35},{hip:71795,pos:[-39.9256,-25.9652,25.1939],mag:3.78,ci:.092,trueDistPc:53.88},{hip:71860,pos:[-73.3549,-99.1471,-71.2808],mag:2.286,ci:-.086,trueDistPc:142.45},{hip:71908,pos:[-5.2638,-10.0527,-11.834],mag:3.19,ci:.254,trueDistPc:16.4},{hip:71957,pos:[-14.4439,-12.1763,3.2197],mag:3.88,ci:.373,trueDistPc:19.16},{hip:72105,pos:[-48.4197,-25.8606,47.0903],mag:2.45,ci:1.036,trueDistPc:72.32},{hip:72220,pos:[-30.7984,-24.5133,12.1105],mag:3.73,ci:.042,trueDistPc:41.18},{hip:72370,pos:[-21.5704,-77.4122,-129.7857],mag:3.798,ci:1.282,trueDistPc:152.65},{hip:72607,pos:[-8.0581,8.5453,38.3879],mag:2.08,ci:1.3,trueDistPc:40.14},{hip:72622,pos:[-16.4089,-16.4563,.1351],mag:2.75,ci:.178,trueDistPc:23.24},{hip:73273,pos:[-60.952,-87.131,-49.6887],mag:2.68,ci:-.137,trueDistPc:117.37},{hip:73334,pos:[-61.8728,-87.6931,-47.8539],mag:3.11,ci:-.103,trueDistPc:117.51},{hip:73555,pos:[-38.4761,-17.3327,58.4063],mag:3.52,ci:.857,trueDistPc:72.06},{hip:73714,pos:[-50.0788,-61.1565,-10.6092],mag:3.21,ci:1.495,trueDistPc:79.75},{hip:74395,pos:[-14.2717,-25.4918,-18.8505],mag:3.41,ci:.832,trueDistPc:34.77},{hip:74666,pos:[-20.2999,-13.2624,27.8606],mag:3.49,ci:.858,trueDistPc:36.93},{hip:74785,pos:[-36.5496,-42.6005,8.3847],mag:2.62,ci:-.043,trueDistPc:56.75},{hip:74824,pos:[-9.9719,-20.7267,-18.5802],mag:4.057,ci:.132,trueDistPc:29.57},{hip:74946,pos:[-13.6797,-36.3816,-43.324],mag:2.89,ci:.05,trueDistPc:58.2},{hip:75097,pos:[-30.2676,23.9914,146.6072],mag:3.002,ci:.105,trueDistPc:151.61},{hip:75141,pos:[-71.953,-118.1412,-54.2822],mag:3.19,ci:-.116,trueDistPc:148.6},{hip:75177,pos:[-44.026,-69.0913,-25.3264],mag:3.546,ci:1.351,trueDistPc:85.75},{hip:75323,pos:[-44.3157,-96.9883,-86.8897],mag:5.158,ci:.457,trueDistPc:137.55},{hip:75458,pos:[-9.9255,-.8596,29.0878],mag:3.29,ci:1.036,trueDistPc:30.75},{hip:75695,pos:[-19.2809,-15.6786,25.7826],mag:3.68,ci:.296,trueDistPc:35.81},{hip:76127,pos:[-58.8185,-48.4007,86.2553],mag:4.13,ci:-.061,trueDistPc:115.07},{hip:76267,pos:[-12.5275,-11.3975,16.5411],mag:2.24,ci:.033,trueDistPc:23.67},{hip:76276,pos:[-40.7006,-45.7484,33.7751],mag:4.084,ci:.375,trueDistPc:69.93},{hip:76297,pos:[-57.3888,-105.688,-46.7536],mag:2.765,ci:-.102,trueDistPc:129.03},{hip:76333,pos:[-28.1316,-40.3829,3.7748],mag:3.91,ci:.917,trueDistPc:49.36},{hip:76552,pos:[-27.9733,-53.6042,-25.0001],mag:4.33,ci:1.257,trueDistPc:65.43},{hip:76952,pos:[-22.6331,-22.5333,31.3926],mag:4.016,ci:.064,trueDistPc:44.78},{hip:77055,pos:[-13.0114,25.0968,106.4083],mag:4.274,ci:.086,trueDistPc:110.1},{hip:77070,pos:[-12.623,-16.2004,9.7995],mag:2.63,ci:1.044,trueDistPc:22.76},{hip:77233,pos:[-24.6108,-29.2765,26.1162],mag:3.67,ci:.101,trueDistPc:46.31},{hip:77450,pos:[-60.4229,-71.4399,70.7907],mag:4.09,ci:1.427,trueDistPc:117.33},{hip:77512,pos:[-24.824,-26.6454,36.119],mag:4.63,ci:.73,trueDistPc:51.29},{hip:77516,pos:[-27.9632,-41.3621,14.5414],mag:3.53,ci:.016,trueDistPc:52},{hip:77622,pos:[-11.7509,-16.3719,8.9753],mag:3.693,ci:.178,trueDistPc:22.06},{hip:77634,pos:[-27.9456,-54.4712,-14.3364],mag:3.946,ci:.019,trueDistPc:62.88},{hip:77760,pos:[-6.1866,-4.8752,13.8091],mag:4.62,ci:.535,trueDistPc:15.9},{hip:77853,pos:[-25.7207,-44.3214,3.1089],mag:4.16,ci:.909,trueDistPc:51.34},{hip:77952,pos:[-2.88,-8.7809,-8.305],mag:2.85,ci:.297,trueDistPc:12.42},{hip:78072,pos:[-5.5187,-7.2657,6.4352],mag:3.84,ci:.475,trueDistPc:11.17},{hip:78159,pos:[-33.6559,-38.878,53.3769],mag:4.13,ci:1.096,trueDistPc:74.12},{hip:78265,pos:[-81.3015,-159.1502,-17.1307],mag:2.91,ci:-.12,trueDistPc:179.53},{hip:78384,pos:[-51.5529,-114.5577,-39.4755],mag:3.41,ci:-.137,trueDistPc:131.68},{hip:78401,pos:[-69.3327,-133.592,-5.2193],mag:2.32,ci:-.052,trueDistPc:150.6},{hip:78493,pos:[-48.9075,-56.2868,86.2628],mag:4.971,ci:.007,trueDistPc:114.02},{hip:78527,pos:[-5.5316,-1.656,20.7318],mag:4,ci:.492,trueDistPc:21.52},{hip:78639,pos:[-22.8247,-59.061,-33.5391],mag:4.643,ci:.837,trueDistPc:71.65},{hip:78820,pos:[-55.8814,-110.5786,2.1794],mag:2.62,ci:-.009,trueDistPc:123.92},{hip:78970,pos:[-24.7463,-57.9416,-17.5342],mag:5.7,ci:.314,trueDistPc:65.4},{hip:79509,pos:[-37.2581,-114.7513,-77.8772],mag:4.94,ci:.934,trueDistPc:143.6},{hip:79822,pos:[-3.1842,5.4457,29.2506],mag:4.847,ci:.52,trueDistPc:29.92},{hip:79882,pos:[-14.0202,-28.1325,9.2747],mag:3.23,ci:.883,trueDistPc:32.77},{hip:79992,pos:[-28.7935,-28.1814,89.7737],mag:3.87,ci:-.069,trueDistPc:98.4},{hip:8e4,pos:[-11.5053,-35.5538,-20.0903],mag:4.02,ci:.968,trueDistPc:42.43},{hip:80170,pos:[-23.2428,-39.0126,38.1153],mag:3.76,ci:.28,trueDistPc:59.29},{hip:80331,pos:[-5.4318,-1.4035,27.4306],mag:2.74,ci:.824,trueDistPc:28},{hip:80582,pos:[-50.7556,-164.6565,-82.1327],mag:4.521,ci:-.02,trueDistPc:190.88},{hip:80763,pos:[-58.5426,-158.7916,-13.5274],mag:.91,ci:1.614,trueDistPc:169.78},{hip:80816,pos:[-16.1463,-29.2384,30.8236],mag:2.77,ci:.841,trueDistPc:45.45},{hip:81065,pos:[-3.3331,-26.0318,-38.9192],mag:3.854,ci:.84,trueDistPc:46.94},{hip:81126,pos:[-24.8873,-33.3184,82.1929],mag:4.196,ci:.034,trueDistPc:92.11},{hip:81266,pos:[-45.96,-137.0175,-15.4969],mag:2.81,ci:-.162,trueDistPc:145.35},{hip:81377,pos:[-46.9232,-123.7161,26.6587],mag:2.56,ci:.067,trueDistPc:134.97},{hip:81693,pos:[-3.0733,-5.6509,8.5704],mag:2.8,ci:.586,trueDistPc:10.72},{hip:81833,pos:[-8.7777,-14.4867,29.6841],mag:3.5,ci:.832,trueDistPc:34.18},{hip:81852,pos:[-3.3976,-27.4711,-38.8773],mag:4.24,ci:.951,trueDistPc:47.72},{hip:82080,pos:[-4.458,27.7195,97.4168],mag:4.212,ci:.812,trueDistPc:101.38},{hip:82273,pos:[-13.1274,-81.9196,-86.368],mag:1.88,ci:1.282,trueDistPc:119.76},{hip:82363,pos:[-14.5007,-73.9396,-55.3009],mag:3.744,ci:1.378,trueDistPc:93.46},{hip:82396,pos:[-4.8422,-18.5034,-3.9743],mag:2.29,ci:1.036,trueDistPc:19.54},{hip:82514,pos:[-123.1415,-499.6708,-141.9741],mag:2.98,ci:-.086,trueDistPc:533.85},{hip:82671,pos:[-314.8104,-1377.0533,-504.5975],mag:4.79,ci:.492,trueDistPc:1707.94},{hip:83e3,pos:[-7.1417,-21.7489,14.2133],mag:3.2,ci:1.036,trueDistPc:26.95},{hip:83081,pos:[-25.6417,-142.8531,-94.5829],mag:3.076,ci:1.431,trueDistPc:173.24},{hip:83207,pos:[-11.1807,-28.1346,40.5404],mag:3.92,ci:.042,trueDistPc:50.6},{hip:83895,pos:[-11.644,-.6878,127.2227],mag:3.17,ci:-.044,trueDistPc:127.76},{hip:84012,pos:[-5.6025,-26.2891,3.3946],mag:2.42,ci:.092,trueDistPc:27.09},{hip:84143,pos:[-3.3876,-20.7841,-7.7411],mag:3.33,ci:.399,trueDistPc:22.44},{hip:84345,pos:[-20.9956,-85.1703,66.7912],mag:5.239,ci:.942,trueDistPc:110.25},{hip:84379,pos:[-4.0755,-14.9628,17.0344],mag:3.13,ci:.118,trueDistPc:23.04},{hip:84380,pos:[-17.5337,-54.1802,96.8726],mag:3.18,ci:1.266,trueDistPc:112.37},{hip:84606,pos:[-7.832,-25.5433,46.4738],mag:4.65,ci:.092,trueDistPc:53.61},{hip:84880,pos:[-10.3778,-60.6981,11.1499],mag:4.324,ci:.081,trueDistPc:62.58},{hip:85112,pos:[-15.1731,-58.1382,104.5976],mag:4.17,ci:.05,trueDistPc:120.63},{hip:85258,pos:[-18.7203,-184.4846,-117.0666],mag:2.85,ci:1.291,trueDistPc:219.29},{hip:85267,pos:[-28.4271,-284.4624,-186.4313],mag:3.34,ci:-.06,trueDistPc:341.3},{hip:85670,pos:[-9.1693,-28.1642,112.7237],mag:2.81,ci:.883,trueDistPc:116.55},{hip:85693,pos:[-13.7849,-77.4121,91.3958],mag:4.41,ci:1.274,trueDistPc:120.56},{hip:85727,pos:[-4.2562,-54.7725,-41.9361],mag:3.62,ci:-.035,trueDistPc:69.11},{hip:85755,pos:[-14.2921,-124.902,-1.5034],mag:4.81,ci:.05,trueDistPc:125.73},{hip:85792,pos:[-6.4738,-73.0302,-36.6511],mag:2.95,ci:-.095,trueDistPc:81.97},{hip:85822,pos:[-.4027,19.1745,52.5366],mag:4.336,ci:.076,trueDistPc:55.93},{hip:85829,pos:[-2.0629,-5.7937,29.2846],mag:4.792,ci:.395,trueDistPc:29.92},{hip:85927,pos:[-16.0486,-169.3256,-41.7404],mag:1.63,ci:-.069,trueDistPc:175.13},{hip:86032,pos:[-1.5871,-11.9719,8.7212],mag:2.07,ci:.178,trueDistPc:14.9},{hip:86228,pos:[-6.6541,-86.4656,-30.957],mag:1.85,ci:.424,trueDistPc:92.08},{hip:86263,pos:[-2.8628,-29.9835,4.1981],mag:3.519,ci:.279,trueDistPc:30.41},{hip:86414,pos:[-9.5388,-53.4923,143.535],mag:3.8,ci:-.094,trueDistPc:153.48},{hip:86565,pos:[-3.8584,-47.8886,8.8955],mag:4.228,ci:.12,trueDistPc:48.86},{hip:86670,pos:[-8.7851,-142.3891,-39.9504],mag:2.386,ci:-.099,trueDistPc:148.15},{hip:86742,pos:[-1.8309,-22.4459,11.944],mag:2.75,ci:1.053,trueDistPc:25.49},{hip:86929,pos:[-2.9963,-84.6765,-74.4621],mag:3.581,ci:1.06,trueDistPc:112.8},{hip:86974,pos:[-.4359,-5.2177,6.4898],mag:3.42,ci:.688,trueDistPc:8.34},{hip:87072,pos:[-17.0995,-354.945,-27.4759],mag:4.54,ci:.73,trueDistPc:356.42},{hip:87073,pos:[-29.2027,-674.9347,-202.8647],mag:2.992,ci:.475,trueDistPc:705.37},{hip:87585,pos:[-.5309,-5.784,33.9175],mag:3.75,ci:1.053,trueDistPc:34.41},{hip:87808,pos:[-3.1738,-119.3697,212.6579],mag:3.88,ci:1.197,trueDistPc:243.89},{hip:87833,pos:[-.4362,-12.2974,45.6752],mag:2.23,ci:1.35,trueDistPc:47.3},{hip:87933,pos:[-.3567,-25.4095,33.3406],mag:3.7,ci:.849,trueDistPc:41.92},{hip:88635,pos:[.6771,-30.751,-3.7718],mag:2.99,ci:.908,trueDistPc:30.99},{hip:88714,pos:[6.298,-303.1895,-152.2499],mag:3.66,ci:-.018,trueDistPc:339.33},{hip:88794,pos:[3.0854,-65.5115,84.5021],mag:3.827,ci:.029,trueDistPc:106.97},{hip:88866,pos:[.6815,-31.3271,-26.5159],mag:4.328,ci:.256,trueDistPc:41.05},{hip:89341,pos:[84.0149,-1496.3903,61.2983],mag:3.85,ci:.237,trueDistPc:11111.11},{hip:89642,pos:[2.5771,-40.6481,-9.6866],mag:3.11,ci:1.376,trueDistPc:41.87},{hip:89931,pos:[10.1133,-126.2238,-14.3653],mag:2.668,ci:1.241,trueDistPc:127.44},{hip:89937,pos:[.2194,.8755,8.0067],mag:3.58,ci:.467,trueDistPc:8.06},{hip:89962,pos:[1.7683,-17.7811,6.658],mag:3.25,ci:.849,trueDistPc:19.07},{hip:90098,pos:[10.9638,-178.2831,-140.1845],mag:4.367,ci:1.297,trueDistPc:227.06},{hip:90185,pos:[3.8172,-42.9526,-8.4225],mag:1.81,ci:.059,trueDistPc:43.94},{hip:90422,pos:[6.9938,-78.775,-32.9974],mag:3.463,ci:-.089,trueDistPc:85.69},{hip:90496,pos:[2.5619,-23.1417,-.8682],mag:2.81,ci:.934,trueDistPc:23.3},{hip:90568,pos:[3.0787,-33.5918,-16.2795],mag:4.11,ci:.908,trueDistPc:37.46},{hip:90595,pos:[11.8673,-94.656,14.5852],mag:4.675,ci:.104,trueDistPc:96.51},{hip:90887,pos:[7.4289,-65.3959,-19.4289],mag:5.155,ci:.116,trueDistPc:68.62},{hip:91117,pos:[8.558,-53.9324,14.5504],mag:3.83,ci:1.189,trueDistPc:56.51},{hip:91262,pos:[.9606,-3.5074,6.763],mag:.03,ci:.05,trueDistPc:7.68},{hip:91792,pos:[3.9246,-43.839,-49.1925],mag:4.003,ci:1.015,trueDistPc:66.01},{hip:91875,pos:[9.3381,-59.7635,-16.4582],mag:5.111,ci:.109,trueDistPc:62.69},{hip:91971,pos:[7.4425,-22.7605,42.0555],mag:4.36,ci:.212,trueDistPc:48.4},{hip:92041,pos:[14.5077,-80.7811,-5.673],mag:3.14,ci:-.027,trueDistPc:82.27},{hip:92175,pos:[41.9547,-191.1382,64.2861],mag:4.22,ci:.977,trueDistPc:205.98},{hip:92202,pos:[80.7398,-368.0157,116.8143],mag:5.2,ci:1.3,trueDistPc:394.46},{hip:92420,pos:[50.3185,-147.1049,230.3604],mag:3.42,ci:.05,trueDistPc:277.92},{hip:92609,pos:[35.4532,-258.6422,-212.1701],mag:4.207,ci:-.085,trueDistPc:336.41},{hip:92791,pos:[44.4839,-111.9741,203.0614],mag:4.3,ci:1.469,trueDistPc:236.12},{hip:92814,pos:[128.9211,-546.5219,71.0179],mag:5.086,ci:.154,trueDistPc:566},{hip:92855,pos:[14.9509,-68.0836,-4.2018],mag:2.067,ci:-.072,trueDistPc:69.83},{hip:92946,pos:[9.9795,-35.372,18.6275],mag:4.57,ci:.194,trueDistPc:41.2},{hip:92953,pos:[17.2022,-88.9519,-32.6261],mag:5.346,ci:.896,trueDistPc:96.3},{hip:92989,pos:[28.4394,-138.6164,-36.5229],mag:5.38,ci:-.069,trueDistPc:146.14},{hip:93015,pos:[18.1454,-135.5407,-132.8475],mag:4.4,ci:.628,trueDistPc:190.65},{hip:93085,pos:[27.6505,-115.6067,3.4474],mag:3.51,ci:1.053,trueDistPc:118.92},{hip:93174,pos:[6.3541,-29.7969,-7.7543],mag:4.85,ci:.381,trueDistPc:31.44},{hip:93194,pos:[43.1117,-107.1229,164.9915],mag:3.25,ci:.008,trueDistPc:201.39},{hip:93244,pos:[13.6609,-41.3987,33.5326],mag:4.02,ci:.968,trueDistPc:55},{hip:93506,pos:[6.3263,-26.0731,-3.3793],mag:2.59,ci:.135,trueDistPc:27.04},{hip:93542,pos:[11.0854,-50.6433,-18.1852],mag:4.725,ci:.03,trueDistPc:54.94},{hip:93683,pos:[10.8638,-40.5611,.6303],mag:3.77,ci:.9,trueDistPc:42},{hip:93747,pos:[7.1495,-19.8628,15.4423],mag:2.99,ci:.058,trueDistPc:26.16},{hip:93805,pos:[11.0769,-35.4934,11.7702],mag:3.43,ci:-.027,trueDistPc:39},{hip:93825,pos:[3.9459,-16.2888,-4.305],mag:4.21,ci:.492,trueDistPc:17.3},{hip:93864,pos:[9.0049,-33.9999,-3.1321],mag:3.31,ci:1.07,trueDistPc:35.31},{hip:94005,pos:[12.6537,-52.3957,-17.3677],mag:4.571,ci:.979,trueDistPc:56.63},{hip:94114,pos:[8.695,-34.5275,-9.7496],mag:4.087,ci:.1,trueDistPc:36.92},{hip:94160,pos:[39.6721,-158.3879,-49.1491],mag:4.095,ci:1.058,trueDistPc:170.52},{hip:94376,pos:[3.548,1.0957,29.7543],mag:3.07,ci:.9,trueDistPc:29.99},{hip:94648,pos:[4.2781,6.1118,45.5324],mag:4.45,ci:1.113,trueDistPc:46.14},{hip:94779,pos:[7.4369,-7.4581,36.258],mag:3.76,ci:.875,trueDistPc:37.76},{hip:94820,pos:[46.3737,-139.8233,8.3872],mag:4.878,ci:.914,trueDistPc:147.55},{hip:95168,pos:[13.2826,-37.6132,2.9461],mag:3.93,ci:.237,trueDistPc:40},{hip:95294,pos:[10.7884,-38.0485,-16.3792],mag:4.27,ci:.331,trueDistPc:42.81},{hip:95347,pos:[15.0028,-50.2112,-17.4126],mag:3.943,ci:-.037,trueDistPc:55.22},{hip:95501,pos:[5.6501,-12.9095,6.5164],mag:3.36,ci:.322,trueDistPc:15.53},{hip:95771,pos:[30.5619,-54.0014,63.9373],mag:4.45,ci:1.325,trueDistPc:89.1},{hip:95853,pos:[8.8709,-7.9962,35.5925],mag:3.755,ci:.172,trueDistPc:37.54},{hip:95947,pos:[37.92,-62.4863,83.9872],mag:3.08,ci:1.011,trueDistPc:111.34},{hip:96406,pos:[29.9985,-75.2999,-4.3501],mag:5.64,ci:.194,trueDistPc:81.17},{hip:96757,pos:[52.6849,-87.4353,82.0529],mag:4.38,ci:.713,trueDistPc:130.97},{hip:96837,pos:[55.1846,-91.0992,83.8698],mag:4.38,ci:.942,trueDistPc:135.57},{hip:97165,pos:[14.7517,-14.122,42.6501],mag:2.87,ci:.033,trueDistPc:47.29},{hip:97278,pos:[78.6348,-131.1868,92.7883],mag:2.72,ci:1.333,trueDistPc:178.89},{hip:97365,pos:[71.7541,-108.8736,105.2616],mag:3.81,ci:1.163,trueDistPc:167.58},{hip:97433,pos:[7.1993,4.6209,46.1133],mag:3.91,ci:.832,trueDistPc:46.9},{hip:97649,pos:[2.3556,-3.8027,2.5106],mag:.76,ci:.237,trueDistPc:5.13},{hip:97804,pos:[128.3452,-218.4644,99.9262],mag:3.8,ci:.739,trueDistPc:272.37},{hip:98032,pos:[22.1462,-53.3168,-21.7686],mag:4.13,ci:.968,trueDistPc:61.7},{hip:98036,pos:[6.5172,-10.2601,6.1024],mag:3.71,ci:.772,trueDistPc:13.6},{hip:98110,pos:[16.8881,-18.1559,34.475],mag:3.88,ci:.925,trueDistPc:42.47},{hip:98337,pos:[41.1827,-54.5649,55.7351],mag:3.47,ci:1.384,trueDistPc:88.2},{hip:98412,pos:[83.784,-180.7447,-51.0979],mag:4.37,ci:-.078,trueDistPc:205.67},{hip:98495,pos:[4.7215,-19.6216,-24.8212],mag:3.94,ci:.039,trueDistPc:31.99},{hip:98543,pos:[33.1894,-38.3825,54.3975],mag:4.651,ci:.201,trueDistPc:74.39},{hip:98688,pos:[62.1268,-121.5851,-17.0218],mag:4.58,ci:1.453,trueDistPc:137.6},{hip:98920,pos:[23.3894,-28.7921,30.3398],mag:5.093,ci:.939,trueDistPc:47.92},{hip:99240,pos:[1.3118,-4.1322,-4.2901],mag:3.56,ci:.696,trueDistPc:6.1},{hip:99473,pos:[37.9878,-54.4269,22.5018],mag:3.22,ci:-.009,trueDistPc:70.08},{hip:100064,pos:[18.4888,-27.5573,4.0335],mag:3.58,ci:.841,trueDistPc:33.43},{hip:100345,pos:[66.4654,-98.3635,9.5278],mag:3.08,ci:.721,trueDistPc:119.1},{hip:100453,pos:[249.3182,-175.6044,471.8265],mag:2.23,ci:.62,trueDistPc:561.8},{hip:100751,pos:[17.8502,-40.4385,-32.4319],mag:1.918,ci:-.058,trueDistPc:54.82},{hip:101421,pos:[68.1781,-70.4501,54.5072],mag:4.03,ci:-.061,trueDistPc:112.17},{hip:101769,pos:[18.9942,-18.125,16.3534],mag:3.63,ci:.424,trueDistPc:30.93},{hip:101772,pos:[13.0838,-23.5029,-14.1546],mag:3.11,ci:.9,trueDistPc:30.4},{hip:101958,pos:[44.9383,-41.351,39.6923],mag:3.8,ci:-.001,trueDistPc:72.83},{hip:102098,pos:[197.2507,-90.6034,374.5477],mag:1.25,ci:.127,trueDistPc:432.9},{hip:102281,pos:[42.7417,-38.328,35.7952],mag:4.417,ci:.291,trueDistPc:67.65},{hip:102395,pos:[11.1754,-26.9876,-30.1999],mag:3.408,ci:.194,trueDistPc:42.01},{hip:102485,pos:[8.7725,-11.5746,-1.7906],mag:4.122,ci:.404,trueDistPc:14.63},{hip:102488,pos:[12.7406,-8.0401,17.591],mag:2.48,ci:.934,trueDistPc:23.16},{hip:102532,pos:[22.6976,-19.4758,19.2023],mag:4.25,ci:.909,trueDistPc:35.54},{hip:102618,pos:[49.3137,-55.3034,10.5198],mag:3.77,ci:.05,trueDistPc:74.84},{hip:102831,pos:[68.0483,-94.958,-32.279],mag:4.89,ci:.891,trueDistPc:121.2},{hip:102978,pos:[103.0256,-132.0592,-26.4166],mag:4.12,ci:1.436,trueDistPc:169.56},{hip:103227,pos:[64.0614,-121.577,-111.9073],mag:3.65,ci:1.113,trueDistPc:177.22},{hip:103738,pos:[46.8788,-59.0796,-19.737],mag:4.654,ci:.794,trueDistPc:77.96},{hip:104139,pos:[31.6212,-32.9238,-.4668],mag:4.07,ci:.041,trueDistPc:45.65},{hip:104521,pos:[25.7325,-19.0916,15.0658],mag:4.68,ci:.271,trueDistPc:35.41},{hip:104732,pos:[29.5449,-15.027,31.6699],mag:3.21,ci:.891,trueDistPc:45.84},{hip:104858,pos:[13.6611,-9.7643,7.7349],mag:4.49,ci:.475,trueDistPc:18.49},{hip:104987,pos:[43.6692,-32.7672,20.0028],mag:3.933,ci:.486,trueDistPc:58.14},{hip:105140,pos:[33.345,-37.119,-13.9804],mag:4.708,ci:.104,trueDistPc:51.82},{hip:105199,pos:[5.2761,1.1966,14.0307],mag:2.46,ci:.237,trueDistPc:15.04},{hip:105319,pos:[13.7948,-20.2998,-17.6879],mag:4.483,ci:.184,trueDistPc:30.25},{hip:105515,pos:[45.6168,-41.5341,-1.472],mag:4.27,ci:.823,trueDistPc:61.71},{hip:105570,pos:[75.6174,-52.0966,35.3034],mag:5.148,ci:.101,trueDistPc:98.38},{hip:105858,pos:[3.0248,-5.5463,-6.7681],mag:4.22,ci:.458,trueDistPc:9.26},{hip:105881,pos:[98.3802,-91.9438,-16.5121],mag:3.74,ci:.908,trueDistPc:135.66},{hip:106032,pos:[55.2195,39.455,198.82],mag:3.23,ci:-.137,trueDistPc:210.08},{hip:106278,pos:[132.8872,-98.7085,25.0794],mag:2.89,ci:.747,trueDistPc:167.43},{hip:106985,pos:[41.0902,-32.3455,-2.3356],mag:3.67,ci:.313,trueDistPc:52.35},{hip:107089,pos:[3.4869,-9.7445,-16.4217],mag:3.728,ci:.914,trueDistPc:19.41},{hip:107310,pos:[16.0811,-5.7084,14.0653],mag:4.621,ci:.634,trueDistPc:22.11},{hip:107315,pos:[172.7699,-92.309,79.5396],mag:2.39,ci:1.342,trueDistPc:211.42},{hip:107354,pos:[25.6259,-9.8707,20.4232],mag:4.135,ci:.405,trueDistPc:34.22},{hip:107556,pos:[9.5345,-7.0442,-.5387],mag:2.83,ci:.296,trueDistPc:11.87},{hip:107608,pos:[70.7783,-62.3824,-28.0426],mag:5.017,ci:.085,trueDistPc:98.43},{hip:108085,pos:[38.0468,-34.9622,-21.9867],mag:3.01,ci:-.052,trueDistPc:56.15},{hip:108661,pos:[191.2311,-147.9429,-66.0095],mag:5.751,ci:-.055,trueDistPc:250.63},{hip:109074,pos:[177.6209,-89.1303,37.4123],mag:2.94,ci:.866,trueDistPc:202.22},{hip:109111,pos:[51.7954,-45.1215,-33.4588],mag:4.458,ci:1.227,trueDistPc:76.41},{hip:109139,pos:[55.123,-33.4891,-2.3436],mag:4.27,ci:-.01,trueDistPc:64.54},{hip:109176,pos:[9.477,-2.6445,6.7006],mag:3.77,ci:.415,trueDistPc:11.9},{hip:109268,pos:[18.6725,-18.0905,-16.8278],mag:1.71,ci:-.06,trueDistPc:30.97},{hip:109352,pos:[65.6747,-12.3394,58.1956],mag:5.582,ci:.883,trueDistPc:88.61},{hip:109422,pos:[13.8055,-10.5335,-6.2569],mag:4.92,ci:.458,trueDistPc:18.46},{hip:109427,pos:[23.9945,-10.2677,7.652],mag:3.55,ci:.109,trueDistPc:27.2},{hip:109492,pos:[142.0305,35.3143,265.6382],mag:3.35,ci:1.368,trueDistPc:303.29},{hip:109937,pos:[147.7162,-15.5039,145.4224],mag:4.15,ci:1.291,trueDistPc:207.87},{hip:110003,pos:[52.2016,-26.2964,2.7635],mag:4.16,ci:.892,trueDistPc:58.52},{hip:110130,pos:[25.2765,-30.4766,-40.1566],mag:2.82,ci:1.206,trueDistPc:56.39},{hip:110395,pos:[35.1602,-15.1322,5.54],mag:3.834,ci:.013,trueDistPc:38.68},{hip:110538,pos:[28.9654,4.3973,42.7307],mag:4.44,ci:.917,trueDistPc:51.81},{hip:110609,pos:[469.4853,48.2931,633.6963],mag:4.58,ci:.127,trueDistPc:790.14},{hip:110960,pos:[25.9695,-10.0158,4.3317],mag:3.65,ci:.398,trueDistPc:28.17},{hip:110997,pos:[66.9447,-53.055,-52.0325],mag:3.97,ci:.925,trueDistPc:100.02},{hip:111022,pos:[418.6354,38.2838,526.7646],mag:4.37,ci:1.478,trueDistPc:673.95},{hip:111104,pos:[237.9234,5.9789,260.0552],mag:4.511,ci:-.044,trueDistPc:352.52},{hip:111123,pos:[57.4381,-26.3118,-1.3543],mag:4.81,ci:-.018,trueDistPc:63.19},{hip:111169,pos:[18.7885,2.6884,25.4547],mag:3.77,ci:.058,trueDistPc:31.75},{hip:111188,pos:[35.4394,-22.8558,-16.4974],mag:4.29,ci:.059,trueDistPc:45.28},{hip:111497,pos:[50.7633,-18.0729,7.7139],mag:4.03,ci:-.018,trueDistPc:54.43},{hip:111954,pos:[141.4775,-77.3646,-50.1412],mag:4.177,ci:-.04,trueDistPc:168.86},{hip:112029,pos:[57.9621,-14.2888,19.0283],mag:3.41,ci:-.018,trueDistPc:62.66},{hip:112122,pos:[34.9934,-27.0194,-31.4562],mag:2.11,ci:1.427,trueDistPc:54.26},{hip:112158,pos:[49.0523,-3.6769,34.5817],mag:2.95,ci:.781,trueDistPc:60.13},{hip:112405,pos:[6.5044,-19.9944,-40.6509],mag:4.128,ci:.224,trueDistPc:45.77},{hip:112440,pos:[101.1674,-12.323,56.0198],mag:3.93,ci:.959,trueDistPc:116.3},{hip:112447,pos:[15.233,-3.2524,5.183],mag:4.2,ci:.467,trueDistPc:16.42},{hip:112623,pos:[23.0665,-18.8595,-24.8135],mag:3.466,ci:.126,trueDistPc:38.77},{hip:112716,pos:[92.4901,-36.2544,-9.8535],mag:3.98,ci:1.402,trueDistPc:99.83},{hip:112724,pos:[14.0981,9.2398,32.541],mag:3.54,ci:.951,trueDistPc:36.65},{hip:112748,pos:[29.9698,-2.946,16.9594],mag:3.48,ci:.849,trueDistPc:34.56},{hip:112961,pos:[106.1686,-35.3667,-.7551],mag:3.79,ci:1.453,trueDistPc:111.91},{hip:113136,pos:[39.8905,-15.4137,-6.1559],mag:3.28,ci:.092,trueDistPc:43.21},{hip:113246,pos:[42.2878,-22.3005,-20.9268],mag:4.208,ci:.869,trueDistPc:52.19},{hip:113368,pos:[6.4504,-3.1656,-2.7777],mag:1.16,ci:.127,trueDistPc:7.7},{hip:113638,pos:[29.3916,-23.0181,-33.5969],mag:4.115,ci:.875,trueDistPc:50.22},{hip:113881,pos:[51.4333,-.5618,31.078],mag:2.42,ci:1.47,trueDistPc:60.1},{hip:113963,pos:[38.3114,-4.3748,13.5838],mag:2.48,ci:.016,trueDistPc:40.88},{hip:114131,pos:[28.5377,-17.256,-22.8682],mag:4.332,ci:.388,trueDistPc:40.44},{hip:114341,pos:[71.8099,-26.1115,-19.7471],mag:3.64,ci:1.095,trueDistPc:78.92},{hip:114421,pos:[43.3639,-26.5696,-37.2941],mag:3.877,ci:.9,trueDistPc:63.07},{hip:114855,pos:[43.871,-10.6876,-3.1587],mag:4.25,ci:.994,trueDistPc:45.26},{hip:114971,pos:[40.5431,-6.0931,5.2208],mag:3.7,ci:.832,trueDistPc:41.33},{hip:114996,pos:[11.7369,-9.6958,-16.8189],mag:3.98,ci:.381,trueDistPc:22.69},{hip:115102,pos:[47.9744,-20.3657,-25.069],mag:4.406,ci:1.004,trueDistPc:57.83},{hip:115438,pos:[46.6795,-13.8654,-12.8536],mag:3.98,ci:.985,trueDistPc:50.36},{hip:115738,pos:[48.7006,-6.0629,3.8042],mag:4.94,ci:.084,trueDistPc:49.22},{hip:115830,pos:[51.1405,-4.3043,8.159],mag:4.3,ci:.968,trueDistPc:51.97},{hip:116231,pos:[44.0574,-18.4873,-29.5181],mag:4.37,ci:-.026,trueDistPc:56.16},{hip:116727,pos:[2.9416,5.1142,12.4641],mag:2.943,ci:1.257,trueDistPc:13.79},{hip:116771,pos:[13.5366,-.5568,1.7005],mag:4.12,ci:.475,trueDistPc:13.65},{hip:116928,pos:[31.9406,-1.9043,1.9108],mag:4.51,ci:.228,trueDistPc:32.05},{hip:118268,pos:[32.7917,1.4796,3.6604],mag:3.924,ci:.602,trueDistPc:33.03}],qg=`
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
`,Yg=`
	precision mediump float;
	uniform vec3 uColor;
	uniform float uOpacity;
	void main() {
		gl_FragColor = vec4(uColor, uOpacity);
	}
`;function jg(n,e,t){const i=Math.round(n*fi)/fi,a=Math.round(e*fi)/fi,s=Math.round(t*fi)/fi;return{hx:i,hy:a,hz:s,lx:n-i,ly:e-a,lz:t-s}}function $g(){let n=0;for(const p of Sh)n+=p.segments.length;const e=new Float32Array(n),t=new Float32Array(n);{let p=0;for(const f of Sh)for(let x=0;x<f.segments.length;x+=3){const _=f.segments[x]*mi,E=f.segments[x+1]*mi,U=f.segments[x+2]*mi,P=jg(_,E,U);e[p]=P.hx,e[p+1]=P.hy,e[p+2]=P.hz,t[p]=P.lx,t[p+1]=P.ly,t[p+2]=P.lz,p+=3}}const i=new Tt;i.setAttribute("position",new et(e,3)),i.setAttribute("aPosLo",new et(t,3));function a(p,f){return new yt({uniforms:{uColor:{value:p},uOpacity:{value:f},uCamHi:{value:new R},uCamLo:{value:new R}},vertexShader:qg,fragmentShader:Yg,transparent:!0,depthWrite:!1,blending:Wi})}const s=a(new st(Ga.gridStrong),.6),r=new Ss(i,s);r.renderOrder=1,r.frustumCulled=!1;const o=new st(Ga.gridStrong).multiplyScalar(1.6),l=a(o,.32),c=new Ss(i,l);c.renderOrder=0,c.frustumCulled=!1;const h=So.map(p=>p.pos),u=So.map(p=>p.mag),d=So.map(p=>p.ci),m=fg(h,u,d,2.4,!1);m.object.renderOrder=1;const g=new Hi;g.add(c),g.add(r),g.add(m.object),g.visible=!1;function v(p,f){const x=p.uniforms.uCamHi.value,_=p.uniforms.uCamLo.value,E=Math.round(f.x*fi)/fi,U=Math.round(f.y*fi)/fi,P=Math.round(f.z*fi)/fi;x.set(E,U,P),_.set(f.x-E,f.y-U,f.z-P)}return{object:g,setVisible(p){g.visible=p},setCamDist(p){m.material.uniforms.uCamDist.value=p},setCamPos(p){v(s,p),v(l,p),m.setCamPos(p)},dispose(){i.dispose(),s.dispose(),l.dispose(),m.object.geometry.dispose(),m.material.dispose()}}}const Ct=299792458,Fl=30856775814914e3,Ol=9.80665,xh=365.25*86400,Zg=1e6;function Wu(n,e,t=Zg){const i=e*Ol,a=n*Fl,s=a/2,r=Math.sqrt((s/Ct)**2+2*s/i),o=Ct/i*Math.acosh(1+i*s/(Ct*Ct)),l=1+i*s/(Ct*Ct),c=Ct*Math.sqrt(1-1/(l*l)),h=2*r,u=2*o,d=Math.exp(i*u/Ct),m=t*(d-1),g=m*Ct*Ct;return{distanceM:a,accelMS2:i,shipTimeS:u,earthTimeS:h,vMax:c,massRatio:d,fuelMassKg:m,energyJ:g,payloadKg:t}}function Mh(n){return Math.min(n,1-n)*2}function Jg(n,e,t,i){const a=t*Ol,s=e*Fl,r=i/2;let o;if(n<=r)o=Ct*Ct/a*(Math.sqrt(1+(a*n/Ct)**2)-1);else{const l=i-n;o=s-Ct*Ct/a*(Math.sqrt(1+(a*l/Ct)**2)-1)}return Math.max(0,Math.min(1,o/s))}function Qg(n,e,t,i){const a=t*Ol,s=e*Fl,r=i/2;let o;if(n<=r)o=Ct*Ct/a*(Math.cosh(a*n/Ct)-1);else{const l=i-n;o=s-Ct*Ct/a*(Math.cosh(a*l/Ct)-1)}return Math.max(0,Math.min(1,o/s))}const Wn=192,e4=96,t4=.55,Ku=10,i4=Ku,n4=1.4,a4=.55,s4=`
	attribute float aPhase;
	attribute float aArc;
	varying float vPhase;
	varying float vArc;
	void main() {
		vPhase = aPhase;
		vArc = aArc;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`,r4=`
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
`,o4=`
	uniform float uSize;
	void main() {
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		gl_PointSize = uSize;
	}
`,l4=`
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
`;function bh(n,e){return new yt({uniforms:{uOpacity:{value:n},uBrightness:{value:e},uDashCount:{value:e4},uDashDuty:{value:t4}},vertexShader:s4,fragmentShader:r4,transparent:!0,depthWrite:!1,blending:Wi})}function c4(){const n=new Float32Array(Wn);for(let q=0;q<Wn;q++)n[q]=q/(Wn-1);const e=new Tt,t=new et(new Float32Array(Wn*3),3),i=new et(new Float32Array(Wn),1),a=new et(n,1);t.setUsage(rc),i.setUsage(rc),e.setAttribute("position",t),e.setAttribute("aPhase",i),e.setAttribute("aArc",a);const s=t.array,r=i.array,o=bh(.95,1),l=bh(.42,1.7),c=new ys(e,o),h=new ys(e,l);c.renderOrder=2,h.renderOrder=1,c.frustumCulled=!1,h.frustumCulled=!1;const u=new Tt;u.setAttribute("position",new et(new Float32Array([0,0,0]),3));const d=new yt({uniforms:{uSize:{value:26},uPhase:{value:0},uAlpha:{value:1},uAngle:{value:0}},vertexShader:o4,fragmentShader:l4,transparent:!0,depthWrite:!1,blending:Wi}),m=new sa(u,d);m.renderOrder=3,m.frustumCulled=!1,m.visible=!1;const g=new Hi;g.add(h),g.add(c),g.add(m),g.visible=!1;const v=new R,p=new R;let f=0,x=1,_=0,E=!1,U=[],P=0;const w=new R,k=new R;return{group:g,rebuild(q,y,M,W){for(let te=0;te<Wn;te++){const z=te/(Wn-1),ae=te*3;s[ae]=q.x+(y.x-q.x)*z,s[ae+1]=q.y+(y.y-q.y)*z,s[ae+2]=q.z+(y.z-q.z)*z,r[te]=Mh(z)}t.needsUpdate=!0,i.needsUpdate=!0,v.copy(q),p.copy(y),f=W,x=M;const K=Wu(W,M);_=K.earthTimeS,E=!0,P=performance.now()/1e3,U=[];const Y=K.shipTimeS/xh;for(let te=1;te<Y;te++){const z=Qg(te*xh,W,M,K.shipTimeS);z<=0||z>=1||U.push({worldPos:new R(q.x+(y.x-q.x)*z,q.y+(y.y-q.y)*z,q.z+(y.z-q.z)*z),label:`${te} y`})}},setVisible(q){g.visible=q,m.visible=q},tick(q,y,M,W){if(!g.visible||_===0)return;const Y=(q-P)%i4/Ku*_,te=Jg(Y,f,x,_);m.position.set(v.x+(p.x-v.x)*te,v.y+(p.y-v.y)*te,v.z+(p.z-v.z)*te),d.uniforms.uPhase.value=Mh(te);const z=Math.sin(q*2*Math.PI/n4);d.uniforms.uAlpha.value=1-a4*(.5-.5*z),w.copy(v).project(y),k.copy(p).project(y);const ae=(w.x*.5+.5)*M,V=(-w.y*.5+.5)*W,ue=(k.x*.5+.5)*M,pe=(-k.y*.5+.5)*W,de=te<.5?1:-1,Oe=(ue-ae)*de,Ue=(pe-V)*de;Oe*Oe+Ue*Ue>1e-6&&(d.uniforms.uAngle.value=Math.atan2(-Ue,Oe))},getTicks(){return U},getEndpoints(){return E?{from:v,to:p}:null},dispose(){e.dispose(),o.dispose(),l.dispose(),u.dispose(),d.dispose()}}}const h4=`
	varying vec3 vDir;
	void main() {
		vDir = normalize(position);
		// Lock the sphere to the camera so it always renders as a backdrop.
		mat4 mvNoTrans = modelViewMatrix;
		mvNoTrans[3].xyz = vec3(0.0);
		gl_Position = projectionMatrix * mvNoTrans * vec4(position, 1.0);
		gl_Position.z = gl_Position.w; // force depth to far plane
	}
`,u4=`
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
`;async function d4(n,e=.34){const t=await new U3().loadAsync(n);t.colorSpace=Oi,t.generateMipmaps=!1;const i=Fu*Math.PI/180,a=new yt({side:ri,depthWrite:!1,depthTest:!1,uniforms:{tEquirect:{value:t},uIntensity:{value:e},uCe:{value:Math.cos(i)},uSe:{value:Math.sin(i)}},vertexShader:h4,fragmentShader:u4}),s=new Gt(new Ba(1,64,32),a);return s.frustumCulled=!1,s.renderOrder=-1e3,{mesh:s,texture:t,setIntensity(r){a.uniforms.uIntensity.value=r}}}const Xu=[{id:"ALPHA_CENTAURI",name:"Alpha Centauri",ra:219.818254,dec:-60.941842,dist:1.3491,tier:"primary",mag:-.1,pos:[-.50329822,-.85408183,-.91508767],children:[{kind:"star",size:.0013,color:16773848,halo:{size:.0017,color:16767392,opacity:.3}},{kind:"star",offset:[.0728,0,0],size:.0011,color:16763018,halo:{size:.0015,color:16755302,opacity:.3}}]},{id:"PROXIMA_CEN",name:"Proxima Centauri",ra:217.564292,dec:-62.688378,dist:1.3,tier:"primary",mag:11.13,pos:[-.4727953,-.79307598,-.91508767],children:[{kind:"star",size:9e-4,color:16750950,halo:{size:.0013,color:16733491,opacity:.34}},{kind:"planet",id:"Proxima Cen d",name:"d",orbitRadius:187265e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Proxima Cen b",name:"b",orbitRadius:31512e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371}]},{id:"SIRIUS",name:"Sirius",ra:101.336393,dec:-16.70207,dist:2.6327,tier:"primary",mag:-1.46,pos:[-.49567249,1.96743849,-1.67766073],children:[{kind:"star",size:.0017,color:13293567,halo:{size:.0024,color:8956671,opacity:.32}},{kind:"star",offset:[7960204194457797e-33,.13,0],size:6e-4,color:13162495,halo:{size:.001,color:8956671,opacity:.4}}]},{id:"PROCYON",name:"Procyon",ra:114.857433,dec:5.250598,dist:3.5159,tier:"primary",mag:.37,pos:[-1.47176601,3.04266651,-.96846779],children:[{kind:"star",size:.0014,color:16775398},{kind:"star",offset:[.0689429,.0689429,0],size:6e-4,color:13162495,halo:{size:9e-4,color:8956671,opacity:.36}}]},{id:"EPSILON_ERIDANI",name:"Epsilon Eridani",ra:53.214787,dec:-9.454435,dist:3.2146,tier:"primary",mag:3.73,pos:[1.89880692,2.11995311,-1.4946432],children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"eps Eri b",name:"b",orbitRadius:.022945,size:.00105,color:13030621,inc:5.0142,node:0,realRadiusKm:6371}]},{id:"40_ERIDANI",name:"40 Eridani",ra:63.870617,dec:-7.646216,dist:5.0141,tier:"primary",mag:4.43,pos:[2.18858468,3.82811676,-2.38685368],children:[{kind:"star",size:.0011,color:16769448},{kind:"star",offset:[-.11375,.197021,0],size:6e-4,color:13162495,halo:{size:.001,color:8956671,opacity:.36}}]},{id:"BARNARD_S_STAR",name:"Barnard's Star",ra:269.519619,dec:4.731608,dist:1.8253,tier:"secondary",mag:9.511,pos:[-.01525146,-1.60902916,.86170756],children:[{kind:"star",size:8e-4,color:16745779},{kind:"planet",id:"Barnard d",name:"d",orbitRadius:1222e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Barnard b",name:"b",orbitRadius:14885e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Barnard c",name:"c",orbitRadius:1781e-7,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"Barnard e",name:"e",orbitRadius:24765e-8,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371}]},{id:"LALANDE_21185",name:"Lalande 21185",ra:165.804898,dec:36.032434,dist:2.5484,tier:"secondary",mag:7.52,pos:[-1.99794142,1.05997655,1.17436251],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"GJ 411 b",name:"b",orbitRadius:512135e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"HD 95735 c",name:"c",orbitRadius:.01911,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371}]},{id:"EPSILON_INDI",name:"Epsilon Indi",ra:330.956268,dec:-56.851064,dist:3.637,tier:"secondary",mag:4.69,pos:[1.73866658,-2.09707591,-2.40973087],children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[-4.7125,-8.16229,0],size:5e-4,color:6702114,halo:{size:9e-4,color:5583633,opacity:.28}},{kind:"planet",id:"eps Ind A b",name:"b",orbitRadius:.13585,size:.00105,color:13030621,inc:5.214,node:0,realRadiusKm:6371}]},{id:"ROSS_128",name:"Ross 128",ra:176.94229,dec:.760661,dist:3.3757,tier:"secondary",mag:11.153,pos:[-3.37057292,.18301753,-.03050292],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"Ross 128 b",name:"b",orbitRadius:3224e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371}]},{id:"61_CYGNI",name:"61 Cygni",ra:316.650271,dec:38.759359,dist:3.4966,tier:"secondary",pos:[1.98268996,-.8464561,2.75288875],children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[.47285,.273,0],size:.001,color:16761994,halo:{size:.0014,color:16750950,opacity:.3}}]},{id:"GLIESE_570",name:"Gliese 570",ra:224.337479,dec:-21.429304,dist:5.8872,tier:"secondary",mag:5.72,pos:[-3.91962553,-4.36954363,-.44991811],children:[{kind:"star",size:.0011,color:16762008},{kind:"star",offset:[.1625,0,0],size:9e-4,color:16757898,halo:{size:.0012,color:16748902,opacity:.3}}]},{id:"ETA_CASSIOPEIAE",name:"Eta Cassiopeiae",ra:12.183737,dec:57.805427,dist:5.9302,tier:"secondary",mag:3.44,pos:[3.08842089,2.60799986,4.33904071],children:[{kind:"star",size:.0011,color:16777215},{kind:"star",offset:[.23075,.399671,0],size:.001,color:16761994,halo:{size:.0013,color:16750950,opacity:.3}}]},{id:"TRAPPIST_1",name:"TRAPPIST-1",ra:346.615635,dec:-5.046733,dist:12.4647,tier:"secondary",mag:18.798,pos:[12.07915726,-3.07316943,.13726315],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"TRAPPIST-1 b",name:"b",orbitRadius:7501e-8,size:.00107033,color:13030621,inc:3.04896,node:0,realRadiusKm:7110.04},{kind:"planet",id:"TRAPPIST-1 c",name:"c",orbitRadius:1027e-7,size:.00106708,color:13030621,inc:3.03996,node:137.508,realRadiusKm:6988.99},{kind:"planet",id:"TRAPPIST-1 d",name:"d",orbitRadius:144755e-9,size:.00100959,color:13030621,inc:3.01872,node:275.016,realRadiusKm:5020.35},{kind:"planet",id:"TRAPPIST-1 e",name:"e",orbitRadius:190125e-9,size:.00103528,color:13030621,inc:3.03726,node:52.524,realRadiusKm:5861.32},{kind:"planet",id:"TRAPPIST-1 f",name:"f",orbitRadius:250185e-9,size:.00105803,color:13030621,inc:3.0468,node:190.032,realRadiusKm:6657.69},{kind:"planet",id:"TRAPPIST-1 g",name:"g",orbitRadius:304395e-9,size:.00107254,color:13030621,inc:3.04644,node:327.54,realRadiusKm:7192.86},{kind:"planet",id:"TRAPPIST-1 h",name:"h",orbitRadius:402285e-9,size:.00100287,color:13030621,inc:3.0351,node:105.048,realRadiusKm:4810.11}]},{id:"LHS_1140",name:"LHS 1140",ra:11.240038,dec:-15.269014,dist:14.9662,tier:"secondary",mag:14.15,pos:[14.16098172,1.01422217,-4.7355787],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"LHS 1140 c",name:"c",orbitRadius:1755e-7,size:.00109599,color:13030621,inc:3.036,node:0,realRadiusKm:8103.91},{kind:"planet",id:"LHS 1140 b",name:"b",orbitRadius:6149e-7,size:.00116223,color:13030621,inc:3.0252,node:137.508,realRadiusKm:11021.8}]},{id:"K2_18",name:"K2-18",ra:172.557234,dec:7.586269,dist:38.1017,tier:"secondary",mag:13.5,pos:[-37.44996296,6.48949674,2.66900571],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"K2-18 c",name:"c",orbitRadius:39e-5,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"K2-18 b",name:"b",orbitRadius:92885e-8,size:.00123819,color:13030621,inc:15,node:137.508,realRadiusKm:15099.3}]},{id:"TOI_700",name:"TOI-700",ra:97.082237,dec:-65.580502,dist:31.1185,tier:"secondary",mag:13.076,pos:[-1.58615196,.44229237,-31.07485218],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"TOI-700 b",name:"b",orbitRadius:44005e-8,size:.00103415,color:13030621,inc:3.072,node:0,realRadiusKm:5823.09},{kind:"planet",id:"TOI-700 c",name:"c",orbitRadius:60385e-8,size:.001262,color:13030621,inc:3.19746,node:137.508,realRadiusKm:16564.6},{kind:"planet",id:"TOI-700 e",name:"e",orbitRadius:871e-6,size:.00104142,color:13030621,inc:3.072,node:275.016,realRadiusKm:6071.56},{kind:"planet",id:"TOI-700 d",name:"d",orbitRadius:.00106145,size:.00106293,color:13030621,inc:3.036,node:52.524,realRadiusKm:6836.08}]},{id:"GLIESE_667_C",name:"Gliese 667 C",ra:259.782103,dec:-34.987564,dist:7.241,tier:"secondary",mag:10.22,pos:[-1.05235082,-7.00804642,-1.48701747],children:[{kind:"star",size:.0011,color:16767159},{kind:"planet",id:"GJ 667 C c",name:"c",orbitRadius:8125e-7,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C f",name:"f",orbitRadius:.001014,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C e",name:"e",orbitRadius:.0013845,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"GJ 667 C g",name:"g",orbitRadius:.0035685,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371}]},{id:"TEEGARDEN_S_STAR",name:"Teegarden's Star",ra:43.23724,dec:16.89872,dist:3.8289,tier:"secondary",mag:15.14,pos:[2.66900571,2.74526301,.02287719],children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"Teegarden's Star b",name:"b",orbitRadius:16835e-8,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Teegarden's Star c",name:"c",orbitRadius:29575e-8,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Teegarden's Star d",name:"d",orbitRadius:51415e-8,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"WOLF_1061",name:"Wolf 1061",ra:247.609593,dec:-12.675592,dist:4.3091,tier:"secondary",mag:10.072,pos:[-1.60140343,-3.94250272,.67869002],children:[{kind:"star",size:.0011,color:16745779},{kind:"planet",id:"Wolf 1061 b",name:"b",orbitRadius:24375e-8,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"Wolf 1061 c",name:"c",orbitRadius:5785e-7,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"Wolf 1061 d",name:"d",orbitRadius:.003055,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"HD_219134",name:"HD 219134",ra:348.260917,dec:57.19172,dist:6.5405,tier:"secondary",mag:5.57,pos:[3.46970742,1.52514612,5.33038569],children:[{kind:"star",size:.0011,color:16758144},{kind:"planet",id:"HD 219134 b",name:"b",orbitRadius:25194e-8,size:.00114491,color:13030621,inc:3.891,node:0,realRadiusKm:10206.3},{kind:"planet",id:"HD 219134 c",name:"c",orbitRadius:42445e-8,size:.00113207,color:13030621,inc:3.4896,node:137.508,realRadiusKm:9626.58},{kind:"planet",id:"HD 219134 f",name:"f",orbitRadius:95095e-8,size:.00110197,color:13030621,inc:15,node:275.016,realRadiusKm:8346.01},{kind:"planet",id:"HD 219134 d",name:"d",orbitRadius:.0015405,size:.00114601,color:13030621,inc:15,node:52.524,realRadiusKm:10257.3},{kind:"planet",id:"HD 219134 g",name:"g",orbitRadius:.00243945,size:.00105,color:13030621,inc:15,node:190.032,realRadiusKm:6371},{kind:"planet",id:"HD 219134 h",name:"h",orbitRadius:.020215,size:.00105,color:13030621,inc:15,node:327.54,realRadiusKm:6371}]},{id:"UPSILON_ANDROMEDAE",name:"Upsilon Andromedae",ra:24.224027,dec:41.400744,dist:13.4777,tier:"secondary",mag:4.1,pos:[9.21950829,7.35120429,6.52762539],children:[{kind:"star",size:.0011,color:16777215},{kind:"planet",id:"ups And b",name:"b",orbitRadius:384941e-9,size:.00105,color:13030621,inc:15,node:0,realRadiusKm:6371},{kind:"planet",id:"ups And c",name:"c",orbitRadius:.00538053,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"ups And d",name:"d",orbitRadius:.0163364,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371}]},{id:"55_CANCRI",name:"55 Cancri",ra:133.162081,dec:28.325526,dist:12.588,tier:"secondary",pos:[-7.57997621,9.79143809,2.26484199],children:[{kind:"star",size:.0011,color:16769478},{kind:"planet",id:"55 Cnc e",name:"e",orbitRadius:10036e-8,size:.00118089,color:13030621,inc:4.1538,node:0,realRadiusKm:11945.6},{kind:"planet",id:"55 Cnc b",name:"b",orbitRadius:767e-6,size:.00105,color:13030621,inc:15,node:137.508,realRadiusKm:6371},{kind:"planet",id:"55 Cnc c",name:"c",orbitRadius:.0016055,size:.00105,color:13030621,inc:15,node:275.016,realRadiusKm:6371},{kind:"planet",id:"55 Cnc f",name:"f",orbitRadius:.005213,size:.00105,color:13030621,inc:15,node:52.524,realRadiusKm:6371},{kind:"planet",id:"55 Cnc d",name:"d",orbitRadius:.0364,size:.00105,color:13030621,inc:15,node:190.032,realRadiusKm:6371}]}],p4=[{id:"TEEGARDEN_S_STAR",name:"Teegarden's Star",ra:43.23724,dec:16.89872,dist:3.8289,tier:"secondary",mag:15.14,pos:[2.66900571,2.74526301,.02287719]},{id:"WOLF_1061",name:"Wolf 1061",ra:247.609593,dec:-12.675592,dist:4.3091,tier:"secondary",mag:10.07,pos:[-1.60140343,-3.94250272,.67869002]},{id:"HD_219134",name:"HD 219134",ra:348.260917,dec:57.19172,dist:6.5405,tier:"secondary",mag:5.57,pos:[3.46970742,1.52514612,5.33038569]},{id:"GLIESE_667_C",name:"Gliese 667 C",ra:259.782103,dec:-34.987564,dist:7.241,tier:"secondary",mag:10.22,pos:[-1.05235082,-7.00804642,-1.48701747]},{id:"MUPHRID",name:"Muphrid",ra:208.68252,dec:18.380204,dist:11.3946,tier:"secondary",mag:2.68,pos:[-9.48640886,-3.33244427,5.36088861]},{id:"DENEB_ALGEDI",name:"Deneb Algedi",ra:326.750282,dec:-16.119945,dist:11.6369,tier:"secondary",mag:2.83,pos:[9.34914571,-6.90891192,-.52617541]},{id:"PORRIMA",name:"Porrima",ra:190.410483,dec:-1.437166,dist:12.0215,tier:"secondary",mag:2.74,pos:[-11.81988242,-2.11232738,.58718126]},{id:"TRAPPIST_1",name:"TRAPPIST-1",ra:346.615635,dec:-5.046733,dist:12.4647,tier:"secondary",mag:18.8,pos:[12.07915726,-3.07316943,.13726315]},{id:"55_CANCRI",name:"55 Cancri",ra:133.162081,dec:28.325526,dist:12.588,tier:"secondary",pos:[-7.57997621,9.79143809,2.26484199]},{id:"UPSILON_ANDROMEDAE",name:"Upsilon Andromedae",ra:24.224027,dec:41.400744,dist:13.4777,tier:"secondary",mag:4.1,pos:[9.21950829,7.35120429,6.52762539]},{id:"ALSHAIN",name:"Alshain",ra:298.846792,dec:6.406353,dist:13.5987,tier:"secondary",mag:3.71,pos:[6.51999966,-10.25660765,6.10058448]},{id:"ERRAI",name:"Errai",ra:354.916565,dec:77.623904,dist:13.788,tier:"secondary",pos:[2.94353201,5.11686523,12.46044379]},{id:"RASALHAGUE",name:"Rasalhague",ra:263.737797,dec:12.567117,dist:14.8983,tier:"secondary",mag:2.07,pos:[-1.58615196,-11.97239704,8.7238358]},{id:"LHS_1140",name:"LHS 1140",ra:11.240038,dec:-15.269014,dist:14.9662,tier:"secondary",mag:14.15,pos:[14.16098172,1.01422217,-4.7355787]},{id:"ALDERAMIN",name:"Alderamin",ra:319.651571,dec:62.585616,dist:15.0386,tier:"secondary",mag:2.46,pos:[5.27700557,1.1972397,14.0313443]},{id:"CAPH",name:"Caph",ra:2.283409,dec:59.14796,dist:16.7868,tier:"secondary",mag:2.27,pos:[8.60182411,6.04720436,13.0857537]},{id:"ZOSMA",name:"Zosma",ra:168.533303,dec:20.532935,dist:17.914,tier:"secondary",mag:2.53,pos:[-16.44107517,5.5591576,4.43817521]},{id:"MENKENT",name:"Menkent",ra:211.661922,dec:-36.366346,dist:18.0354,tier:"secondary",mag:2.05,pos:[-12.3613093,-11.24795263,-6.7792745]},{id:"WASAT",name:"Wasat",ra:110.034447,dec:21.972241,dist:18.6022,tier:"secondary",mag:3.53,pos:[-5.90994121,17.63831487,-.06100584]},{id:"SARIN",name:"Sarin",ra:258.76097,dec:24.844483,dist:23.5414,tier:"secondary",mag:3.13,pos:[-4.16364891,-15.28958985,17.40954295]},{id:"ALJANAH",name:"Aljanah",ra:311.560656,dec:33.975383,dist:23.1619,tier:"secondary",mag:2.48,pos:[12.74259583,-8.03752005,17.59256049]},{id:"KAUS_BOREALIS",name:"Kaus Borealis",ra:276.99314,dec:-25.424124,dist:23.3017,tier:"secondary",mag:2.81,pos:[2.56224548,-23.14409236,-.86933329]},{id:"MEGREZ",name:"Megrez",ra:183.852924,dec:57.03639,dist:24.7928,tier:"secondary",mag:3.32,pos:[-13.4594145,7.44271306,19.44561302]},{id:"MENKALINAN",name:"Menkalinan",ra:89.87587,dec:44.953527,dist:24.8692,tier:"secondary",mag:1.9,pos:[.03812865,23.13646663,9.12037379]},{id:"ALCOR",name:"Alcor",ra:201.308276,dec:54.992366,dist:24.712,tier:"secondary",mag:4.01,pos:[-13.20776539,3.32481854,20.61997553]},{id:"ALIOTH",name:"Alioth",ra:193.500507,dec:55.954317,dist:25.3125,tier:"secondary",mag:1.77,pos:[-13.77969519,5.3075085,20.55896969]},{id:"CEBALRAI",name:"Cebalrai",ra:265.869134,dec:4.566768,dist:25.4877,tier:"secondary",mag:2.75,pos:[-1.83017534,-22.44252515,11.94189411]},{id:"PHECDA",name:"Phecda",ra:178.461627,dec:53.705282,dist:25.5039,tier:"secondary",mag:2.44,pos:[-15.09132085,8.548444,18.69829142]},{id:"MERAK",name:"Merak",ra:165.480905,dec:56.379374,dist:25.9071,tier:"secondary",mag:2.37,pos:[-13.88645542,11.88088827,18.36275928]},{id:"MIZAR",name:"Mizar",ra:200.971614,dec:54.917482,dist:24.8658,tier:"secondary",pos:[-13.34502854,3.40107585,20.70385857]},{id:"SEGINUS",name:"Seginus",ra:218.02272,dec:38.306984,dist:26.3747,tier:"secondary",mag:3.02,pos:[-16.30381202,-5.19312254,20.07092293]},{id:"ASCELLA",name:"Ascella",ra:285.660482,dec:-29.876982,dist:27.0415,tier:"secondary",mag:2.59,pos:[6.3293564,-26.07237291,-3.37819865]},{id:"SABIK",name:"Sabik",ra:257.587767,dec:-15.72609,dist:27.0902,tier:"secondary",mag:2.42,pos:[-5.60491199,-26.28589337,3.39345012]},{id:"GACRUX",name:"Gacrux",ra:187.798343,dec:-57.119978,dist:27.1506,tier:"secondary",mag:1.64,pos:[-14.60327409,-10.90479475,-20.12430304]},{id:"ALGOL",name:"Algol",ra:47.03889,dec:40.947926,dist:27.5701,tier:"secondary",mag:2.12,pos:[14.19148464,21.16902814,10.51588249]},{id:"ALPHERATZ",name:"Alpheratz",ra:2.102629,dec:29.089481,dist:29.7424,tier:"secondary",mag:2.06,pos:[25.97323841,6.62675989,12.88748471]},{id:"RUCHBAH",name:"Ruchbah",ra:21.456866,dec:60.230901,dist:31.2228,tier:"secondary",mag:2.68,pos:[14.42788229,15.98353133,22.61029122]},{id:"ALNAIR",name:"Alnair",ra:332.069036,dec:-46.960762,dist:30.971,tier:"secondary",mag:1.71,pos:[18.67541423,-18.08823297,-16.82998743]},{id:"TOI_700",name:"TOI-700",ra:97.082237,dec:-65.580502,dist:31.1185,tier:"secondary",mag:13.08,pos:[-1.58615196,.44229237,-31.07485218]},{id:"ALKAID",name:"Alkaid",ra:206.884366,dec:49.308268,dist:31.8655,tier:"secondary",mag:1.86,pos:[-18.53052535,.99134498,25.90460684]},{id:"VINDEMIATRIX",name:"Vindemiatrix",ra:195.53476,dec:10.956998,dist:33.1019,tier:"secondary",mag:2.79,pos:[-31.31124983,-5.4829003,9.23475975]},{id:"ALGEDI",name:"Algedi",ra:304.516626,dec:-12.54414,dist:33.4329,tier:"secondary",mag:3.58,pos:[18.4923967,-27.55939038,4.03401149]},{id:"ALHENA",name:"Alhena",ra:99.433983,dec:16.398152,dist:33.5109,tier:"secondary",mag:1.92,pos:[-5.26937984,32.85927314,-3.93487699]},{id:"MIAPLACIDUS",name:"Miaplacidus",ra:138.309257,dec:-69.714189,dist:34.6973,tier:"secondary",mag:1.69,pos:[-8.98311064,-5.60491199,-33.04229067]},{id:"DUBHE",name:"Dubhe",ra:165.924263,dec:61.754044,dist:37.6761,tier:"secondary",mag:1.79,pos:[-17.29515699,17.18077103,28.72612716]},{id:"K2_18",name:"K2-18",ra:172.557234,dec:7.586269,dist:38.1017,tier:"secondary",mag:13.5,pos:[-37.44996296,6.48949674,2.66900571]},{id:"ALGIEBA",name:"Algieba",ra:154.952202,dec:19.979464,dist:40.5814,tier:"secondary",pos:[-34.55218533,20.33019777,6.29885347]},{id:"MUHLIFAIN",name:"Muhlifain",ra:190.379227,dec:-48.95706,dist:39.9067,tier:"secondary",mag:2.17,pos:[-25.77496942,-16.30381202,-25.73684076]},{id:"KOCHAB",name:"Kochab",ra:222.657238,dec:74.156434,dist:40.1457,tier:"secondary",mag:2.08,pos:[-8.06039724,8.548444,38.38792782]},{id:"MARKAB",name:"Markab",ra:346.188569,dec:15.200821,dist:40.8827,tier:"secondary",mag:2.48,pos:[38.31167052,-4.37716936,13.58142619]},{id:"ELNATH",name:"Elnath",ra:81.569105,dec:28.604457,dist:41.0548,tier:"secondary",mag:1.65,pos:[5.2846313,40.53075812,3.85099395]},{id:"ACHERNAR",name:"Achernar",ra:24.436431,dec:-57.240771,dist:42.7541,tier:"secondary",mag:.46,pos:[21.06226791,-5.52102895,-36.79415013]},{id:"SKAT",name:"Skat",ra:343.663945,dec:-15.817697,dist:43.2044,tier:"secondary",mag:3.28,pos:[39.89019675,-15.41160154,-6.15396459]},{id:"KAUS_AUSTRALIS",name:"Kaus Australis",ra:276.047436,dec:-34.378852,dist:43.9394,tier:"secondary",mag:1.81,pos:[3.82049103,-42.95574045,-8.41880658]},{id:"AIN",name:"Ain",ra:67.157215,dec:19.177296,dist:44.7152,tier:"secondary",mag:3.53,pos:[16.39532078,41.55260602,-2.00556715]},{id:"KORNEPHOROS",name:"Kornephoros",ra:247.557533,dec:21.490888,dist:45.4477,tier:"secondary",mag:2.77,pos:[-16.14367167,-29.23705111,30.82320307]},{id:"HYADUM_I",name:"Hyadum I",ra:64.952892,dec:15.624451,dist:46.16,tier:"secondary",mag:3.65,pos:[18.82030311,41.8957639,-4.61356701]},{id:"PRIMA_HYADUM",name:"Prima Hyadum",ra:64.952892,dec:15.624451,dist:46.16,tier:"secondary",mag:3.65,pos:[18.82030311,41.8957639,-4.61356701]},{id:"ELTANIN",name:"Eltanin",ra:269.15455,dec:51.486447,dist:47.3073,tier:"secondary",mag:2.23,pos:[-.43466664,-12.30030345,45.67812627]},{id:"CHERTAN",name:"Chertan",ra:168.565088,dec:15.429673,dist:49.2254,tier:"secondary",mag:3.35,pos:[-46.50933091,13.84070103,8.2739177]},{id:"HYADUM_II",name:"Hyadum II",ra:65.736923,dec:17.542998,dist:49.2403,tier:"secondary",mag:3.76,pos:[19.29309841,45.17482805,-3.40870158]},{id:"GOMEISA",name:"Gomeisa",ra:111.788278,dec:8.292385,dist:49.579,tier:"secondary",mag:2.89,pos:[-18.21024466,44.64102691,-11.56060758]},{id:"ACAMAR",name:"Acamar",ra:44.563906,dec:-40.298412,dist:50.2404,tier:"secondary",mag:3.18,pos:[27.30011554,11.74362512,-40.50788093]},{id:"MAHASIM",name:"Mahasim",ra:89.93515,dec:37.214551,dist:50.7604,tier:"secondary",mag:2.62,pos:[.04575438,49.30034831,12.086783]},{id:"PEACOCK",name:"Peacock",ra:306.413734,dec:-56.734225,dist:54.8258,tier:"secondary",mag:1.92,pos:[17.85183533,-40.43924935,-32.43223223]},{id:"ALPHARD",name:"Alphard",ra:141.897726,dec:-8.657438,dist:55.2758,tier:"secondary",mag:1.97,pos:[-43.00149483,27.62802195,-21.04701645]},{id:"AUVA",name:"Auva",ra:193.89999,dec:3.395647,dist:57.448,tier:"secondary",mag:3.38,pos:[-55.66783335,-11.28608128,8.60182411]},{id:"ZAURAK",name:"Zaurak",ra:59.503184,dec:-13.512457,dist:58.8184,tier:"secondary",mag:2.94,pos:[29.02353065,39.74530787,-32.21108604]},{id:"SCHEAT",name:"Scheat",ra:345.943092,dec:28.07841,dist:60.0964,tier:"secondary",mag:2.42,pos:[51.43555287,-.56430406,31.07485218]},{id:"MATAR",name:"Matar",ra:340.750079,dec:30.224133,dist:60.1269,tier:"secondary",mag:2.95,pos:[49.0486992,-3.67560215,34.58268825]},{id:"MIRACH",name:"Mirach",ra:17.435673,dec:35.6239,dist:60.533,tier:"secondary",mag:2.05,pos:[46.94399755,27.55176464,26.48416236]},{id:"NUNKI",name:"Nunki",ra:283.819405,dec:-26.296493,dist:69.832,tier:"secondary",mag:2.07,pos:[14.9540577,-68.08252276,-4.20177756]},{id:"SCHEDAR",name:"Schedar",ra:10.12636,dec:56.534059,dist:70.9683,tier:"secondary",mag:2.23,pos:[38.52519097,29.86236102,51.58044175]},{id:"NEKKAR",name:"Nekkar",ra:225.484176,dec:40.388702,dist:72.0577,tier:"secondary",mag:3.52,pos:[-38.47943659,-17.33328565,58.40547064]},{id:"IZAR",name:"Izar",ra:221.243136,dec:27.073295,dist:72.3247,tier:"secondary",mag:2.45,pos:[-48.42338929,-25.85885245,47.08888643]},{id:"ALBALI",name:"Albali",ra:311.921641,dec:-9.498155,dist:74.8392,tier:"secondary",mag:3.77,pos:[49.31559977,-55.30179829,10.51588249]},{id:"SPICA",name:"Spica",ra:201.298673,dec:-11.161731,dist:76.568,tier:"secondary",mag:.97,pos:[-69.98895541,-30.9299633,-2.74526301]},{id:"BELLATRIX",name:"Bellatrix",ra:81.282005,dec:6.351924,dist:77.401,tier:"secondary",mag:1.64,pos:[11.65974208,73.16888507,-22.38914503]},{id:"THUBAN",name:"Thuban",ra:211.096016,dec:64.377746,dist:79.9031,tier:"secondary",mag:3.68,pos:[-29.58783471,12.28505199,73.199388]},{id:"MIMOSA",name:"Mimosa",ra:191.934793,dec:-59.687501,dist:85.3985,tier:"secondary",mag:1.25,pos:[-42.1702902,-37.50334307,-64.09426566]},{id:"CANOPUS",name:"Canopus",ra:95.98916,dec:-52.694922,dist:94.7845,tier:"secondary",mag:-.74,pos:[-5.99382425,22.42727368,-91.89767942]},{id:"ACRUX",name:"Acrux",ra:186.631368,dec:-63.122043,dist:106.4217,tier:"secondary",pos:[-47.79045365,-42.85660595,-84.88200727]},{id:"TAYGETA",name:"Taygeta",ra:56.302694,dec:24.466136,dist:104.7696,tier:"secondary",mag:4.3,pos:[52.90731888,90.05225261,8.25104051]},{id:"RASALGETHI",name:"Rasalgethi",ra:258.756039,dec:14.283567,dist:107.994,tier:"secondary",mag:3.48,pos:[-20.40645508,-83.57800734,65.27625391]},{id:"ALPHERG",name:"Alpherg",ra:22.872181,dec:15.345544,dist:114.4986,tier:"secondary",mag:3.62,pos:[101.73487189,51.42792714,10.72940295]},{id:"RASTABAN",name:"Rastaban",ra:262.610512,dec:52.302641,dist:116.5492,tier:"secondary",mag:2.81,pos:[-9.16612818,-28.16182309,112.72354968]},{id:"DABIH",name:"Dabih",ra:305.25313,dec:-14.782973,dist:119.0964,tier:"secondary",mag:3.08,pos:[66.46586788,-98.36429896,9.52453751]},{id:"ELECTRA",name:"Electra",ra:56.219484,dec:24.113537,dist:119.8193,tier:"secondary",mag:3.7,pos:[60.80757578,102.87110575,8.75433872]},{id:"HADAR",name:"Hadar",ra:210.955302,dec:-60.372628,dist:120.1927,tier:"secondary",mag:.58,pos:[-50.95513185,-69.60004315,-83.70001903]},{id:"ALMACH",name:"Almach",ra:30.972513,dec:42.328345,dist:120.482,tier:"secondary",mag:2.1,pos:[76.37169192,74.32799612,56.2016345]},{id:"ATLAS",name:"Atlas",ra:57.290343,dec:24.051279,dist:123.1789,tier:"secondary",mag:3.63,pos:[60.78469858,106.80598273,8.41118085]},{id:"ALCYONE",name:"Alcyone",ra:56.870764,dec:24.114723,dist:136.774,tier:"secondary",mag:2.87,pos:[68.22741165,118.14544413,9.68467786]},{id:"ACRAB",name:"Acrab",ra:241.359941,dec:-19.804854,dist:123.9176,tier:"secondary",mag:2.62,pos:[-55.88135381,-110.58071938,2.18095895]},{id:"ADHARA",name:"Adhara",ra:104.656914,dec:-28.9729,dist:124.2228,tier:"secondary",mag:1.5,pos:[-27.49838453,72.5283237,-97.02979611]},{id:"MAIA",name:"Maia",ra:56.458157,dec:24.366384,dist:130.3558,tier:"secondary",mag:3.87,pos:[65.61178605,112.19737427,9.97445562]},{id:"POLARIS",name:"Polaris",ra:38.037552,dec:89.263824,dist:132.6287,tier:"secondary",mag:2.02,pos:[1.34212858,53.71564632,121.25674221]},{id:"CELAENO",name:"Celaeno",ra:56.202161,dec:24.288037,dist:135.4054,tier:"secondary",mag:5.46,pos:[68.65445256,116.25426294,10.30236204]},{id:"ASTEROPE",name:"Asterope",ra:56.477885,dec:24.555692,dist:136.8896,tier:"secondary",mag:5.76,pos:[68.76121279,117.8632921,10.90479475]},{id:"PLEIONE",name:"Pleione",ra:57.295876,dec:24.135021,dist:138.0942,tier:"secondary",mag:5.09,pos:[68.0901485,119.75447329,9.62367201]},{id:"MEROPE",name:"Merope",ra:56.581604,dec:23.94791,dist:141.5041,tier:"secondary",mag:4.18,pos:[71.22432377,121.88205212,9.76093516]},{id:"SEGIN",name:"Segin",ra:28.598662,dec:63.671104,dist:142.7777,tier:"secondary",mag:3.37,pos:[55.59920178,78.71279122,105.34946819]},{id:"ALGENIB",name:"Algenib",ra:3.309088,dec:15.182071,dist:143.9368,tier:"secondary",mag:2.84,pos:[138.68153663,22.35101638,31.39513287]},{id:"DSCHUBBA",name:"Dschubba",ra:240.084047,dec:-22.620504,dist:150.6053,tier:"secondary",mag:2.32,pos:[-69.33314258,-133.59517432,-5.21599973]},{id:"MIRZAM",name:"Mirzam",ra:95.673815,dec:-17.95667,dist:151.0563,tier:"secondary",mag:1.97,pos:[-14.2067361,112.67016956,-99.60729305]},{id:"PHERKAD",name:"Pherkad",ra:230.182972,dec:71.834023,dist:151.6065,tier:"secondary",mag:3,pos:[-30.26652474,23.99054846,146.60467072]},{id:"BETELGEUSE",name:"Betelgeuse",ra:88.793589,dec:7.408511,dist:152.6714,tier:"secondary",mag:.42,pos:[3.18755539,146.70380521,-42.14741301]}],f4=24611855e-1,m4=[{id:"MERCURY",name:"Mercury",color:10129544,radiusKm:2440.5,obliquityDeg:.034,aAU:.38709761,e:.2056373,iDeg:7.0034221,nodeDeg:48.297722,periDeg:29.200358,M0Deg:26.945045,nDegPerDay:4.0923553},{id:"VENUS",name:"Venus",color:15124625,radiusKm:6051.8,obliquityDeg:177.36,aAU:.72331056,e:.0067616859,iDeg:3.3944358,nodeDeg:76.606367,periDeg:54.964233,M0Deg:15.749959,nDegPerDay:1.6022005},{id:"EARTH",name:"Earth",color:4882355,radiusKm:6371,obliquityDeg:23.44,aAU:.99975785,e:.016602201,iDeg:.0046175334,nodeDeg:198.53965,periDeg:262.96032,M0Deg:140.77244,nDegPerDay:.98596577},{id:"MARS",name:"Mars",color:12873038,radiusKm:3389.5,obliquityDeg:25.19,aAU:1.5237188,e:.093424811,iDeg:1.8475809,nodeDeg:49.479943,periDeg:286.69756,M0Deg:31.223275,nDegPerDay:.52401874},{id:"JUPITER",name:"Jupiter",color:14264691,radiusKm:69911,obliquityDeg:3.13,aAU:5.2084558,e:.04832694,iDeg:1.3027428,nodeDeg:100.51068,periDeg:274.96363,M0Deg:99.890278,nDegPerDay:.08291643},{id:"SATURN",name:"Saturn",color:14795657,radiusKm:58232,obliquityDeg:26.73,aAU:9.535538,e:.055489251,iDeg:2.4895448,nodeDeg:113.59753,periDeg:339.3146,M0Deg:279.84299,nDegPerDay:.033472355,rings:{innerRKm:74500,outerRKm:140180,color:14073988,opacity:.55}},{id:"URANUS",name:"Uranus",color:10475232,radiusKm:25362,obliquityDeg:97.77,aAU:19.169878,e:.046359794,iDeg:.77275465,nodeDeg:74.024841,periDeg:98.953859,M0Deg:253.19433,nDegPerDay:.011742892},{id:"NEPTUNE",name:"Neptune",color:3826848,radiusKm:24622,obliquityDeg:28.32,aAU:30.081471,e:.0094937088,iDeg:1.7700055,nodeDeg:131.78219,periDeg:276.12009,M0Deg:314.75848,nDegPerDay:.0059738659},{id:"PLUTO",name:"Pluto",color:11902083,radiusKm:1188.3,obliquityDeg:122.53,aAU:39.482117,e:.2488273,iDeg:17.140012,nodeDeg:110.30394,periDeg:113.76498,M0Deg:53.186619,nDegPerDay:.0039755715}],Kn=Math.PI/180;function g4(){return Date.now()/864e5+24405875e-1}function v4(n,e){const t=e-f4,i=(n.M0Deg+n.nDegPerDay*t)*Kn,a=_4(i,n.e),s=n.aAU,r=Math.cos(a),o=Math.sin(a),l=s*(r-n.e),c=s*Math.sqrt(1-n.e*n.e)*o,h=Math.cos(n.periDeg*Kn),u=Math.sin(n.periDeg*Kn),d=Math.cos(n.iDeg*Kn),m=Math.sin(n.iDeg*Kn),g=Math.cos(n.nodeDeg*Kn),v=Math.sin(n.nodeDeg*Kn),p=h*l-u*c,f=u*l+h*c,x=p,_=d*f,E=m*f,U=g*x-v*_,P=v*x+g*_,w=E;return new R(U*Pn,P*Pn,w*Pn)}function _4(n,e){let t=n;e>0&&(t=n+e*Math.sin(n));for(let i=0;i<4;i++){const a=t-e*Math.sin(t)-n,s=1-e*Math.cos(t);t-=a/s}return t}const sr=Ga.planet;function y4(n){return Math.max(4e-4,4e-4+15e-5*Math.log2(n/1e3))}function S4(n,e){const t=v4(n,e),i=n.nodeDeg*Math.PI/180,a=n.iDeg*Math.PI/180,s=Math.cos(i),r=Math.sin(i),o=s*t.x+r*t.y,l=-r*t.x+s*t.y,c=Math.cos(a),h=Math.sin(a),u=c*l+h*t.z;return Math.atan2(u,o)}function x4(n,e){if(!n.rings)return;const t=n.rings.innerRKm/n.radiusKm,i=n.rings.outerRKm/n.radiusKm;return{innerR:e*t,outerR:e*i,color:n.rings.color,opacity:n.rings.opacity}}function M4(){const n=g4(),e=[{kind:"star",size:.0011,color:16773848,halo:{size:.0014,color:16767392,opacity:.32}}];for(const t of m4){const i=y4(t.radiusKm),a={kind:"planet",id:t.id,name:t.name,orbitRadius:t.aAU*Pn,size:i,color:t.color,inc:t.iDeg,node:t.nodeDeg,ecc:t.e,argPeriDeg:t.periDeg,angle:S4(t,n),obliquityDeg:t.obliquityDeg,realRadiusKm:t.radiusKm},s=x4(t,i);s&&(a.rings=s),e.push(a)}return e.push({kind:"belt",innerR:2.1*Pn,outerR:3.3*Pn,thickness:.025*Pn,count:1600}),e}const b4={id:"SOL",name:"Sol",ra:0,dec:0,dist:0,tier:"primary",mag:-10,children:M4()},E4={id:"TAU_CETI",name:"Tau Ceti",ra:26.006373,dec:-15.93361,dist:3.6531,tier:"primary",mag:3.5,pos:[3.15705247,1.01422217,-1.53277185],children:[{kind:"star",size:.0015,color:16769448},{kind:"planet",id:"TAU_CETI_B",name:"b",orbitRadius:.06,size:.0013,color:sr,inc:5,node:25},{kind:"planet",id:"TAU_CETI_C",name:"c",orbitRadius:.11,size:.0015,color:sr,inc:8,node:200},{kind:"planet",id:"TAU_CETI_E",name:"e",orbitRadius:.17,size:.0019,color:sr,inc:11,node:110},{kind:"planet",id:"TAU_CETI_F",name:"f",orbitRadius:.255,size:.0016,color:sr,inc:6,node:310}]},A4=[{name:"Alpha Centauri",ra:219.81825,dec:-60.94184,dist:1.3491,tier:"primary",mag:-.27,pos:[-.50329822,-.85408183,-.91508767]},{name:"Sirius",ra:101.33639,dec:-16.70207,dist:2.6327,tier:"primary",mag:-1.46,pos:[-.49567249,1.96743849,-1.67766073]},{name:"Procyon",ra:114.85743,dec:5.2506,dist:3.5159,tier:"primary",mag:.34,pos:[-1.47176601,3.04266651,-.96846779]},{name:"Epsilon Eridani",ra:53.21479,dec:-9.45444,dist:3.2146,tier:"primary",mag:3.73,pos:[1.89880692,2.11995311,-1.4946432]},{name:"40 Eridani",ra:63.87062,dec:-7.64622,dist:5.0141,tier:"primary",mag:4.43,pos:[2.18858468,3.82811676,-2.38685368]},{name:"Altair",ra:297.69463,dec:8.83661,dist:5.1309,tier:"primary",mag:.76,pos:[2.35635075,-3.80523957,2.50886537]},{name:"Vega",ra:279.23591,dec:38.78381,dist:7.6799,tier:"primary",mag:.03,pos:[.96084206,-3.50783607,6.76402304]},{name:"Fomalhaut",ra:344.41528,dec:-29.60504,dist:7.7033,tier:"primary",mag:1.16,pos:[6.45136808,-3.1646782,-2.77576594]},{name:"Denebola",ra:177.27438,dec:14.55281,dist:10.9951,tier:"primary",mag:2.14,pos:[-10.63026845,1.56327477,2.33347356]},{name:"Pollux",ra:116.33368,dec:28.01993,dist:10.3597,tier:"primary",mag:1.14,pos:[-4.05688868,9.45590594,1.20486543]},{name:"Arcturus",ra:213.9157,dec:19.16421,dist:11.2557,tier:"primary",mag:-.05,pos:[-8.8229703,-3.97300564,5.74980087]},{name:"Capella",ra:79.15369,dec:46.00295,dist:13.1266,tier:"primary",mag:.08,pos:[1.71578938,11.97239704,5.10161377]},{name:"Castor",ra:113.66142,dec:31.87255,dist:15.5951,tier:"primary",mag:1.58,pos:[-5.31513423,14.4050051,2.73001155]},{name:"Aldebaran",ra:68.98884,dec:16.5164,dist:20.4311,tier:"primary",mag:.87,pos:[7.02329788,19.08720368,-1.9445613]},{name:"Regulus",ra:152.09615,dec:11.96867,dist:24.31,tier:"primary",mag:1.4,pos:[-21.01651352,12.21642042,.198269]},{name:"Barnard's Star",ra:269.51962,dec:4.73161,dist:1.8253,tier:"secondary",mag:9.51,pos:[-.01525146,-1.60902916,.86170756]},{name:"Wolf 359",ra:164.13184,dec:6.95659,dist:2.412,tier:"secondary",mag:13.54,pos:[-2.30297064,.71681868,.00762573]},{name:"Lalande 21185",ra:165.8049,dec:36.03243,dist:2.5484,tier:"secondary",mag:7.52,pos:[-1.99794142,1.05997655,1.17436251]},{name:"Ross 154",ra:282.44155,dec:-23.82957,dist:2.9794,tier:"secondary",mag:10.43,pos:[.58718126,-2.92065482,-.04575438]},{name:"Ross 248",ra:355.42895,dec:44.16204,dist:3.1565,tier:"secondary",mag:12.29,pos:[2.25721626,.70919295,2.08945018]},{name:"Lacaille 9352",ra:346.53586,dec:-35.80476,dist:3.2873,tier:"secondary",mag:7.34,pos:[2.5927484,-1.33450285,-1.51752039]},{name:"61 Cygni",ra:316.65027,dec:38.75936,dist:3.4966,tier:"secondary",mag:5.21,pos:[1.98268996,-.8464561,2.75288875]},{name:"Struve 2398",ra:280.61243,dec:59.63993,dist:3.5227,tier:"secondary",mag:8.9,pos:[.32790642,-.39653799,3.48495888]},{name:"Epsilon Indi",ra:330.95627,dec:-56.85106,dist:3.637,tier:"secondary",mag:4.69,pos:[1.73866658,-2.09707591,-2.40973087]},{name:"Kapteyn's Star",ra:77.97287,dec:-45.04051,dist:3.9362,tier:"secondary",mag:8.85,pos:[.57955553,1.38788297,-3.63747349]},{name:"70 Ophiuchi",ra:271.3703,dec:2.5127,dist:5.107,tier:"secondary",mag:4.03,pos:[.12201169,-4.59068982,2.23433906]},{name:"Gliese 570",ra:224.33748,dec:-21.4293,dist:5.8872,tier:"secondary",mag:5.72,pos:[-3.91962553,-4.36954363,-.44991811]},{name:"Sigma Draconis",ra:293.08181,dec:69.64923,dist:5.761,tier:"secondary",mag:4.67,pos:[.78545025,.45754384,5.68879502]},{name:"Eta Cassiopeiae",ra:12.18374,dec:57.80543,dist:5.9302,tier:"secondary",mag:3.45,pos:[3.08842089,2.60799986,4.33904071]},{name:"82 Eridani",ra:50.03359,dec:-43.05505,dist:6.044,tier:"secondary",mag:4.26,pos:[2.83677178,1.46414027,-5.13211669]},{name:"Delta Pavonis",ra:302.18152,dec:-66.19797,dist:6.1021,tier:"secondary",mag:3.55,pos:[1.31162566,-4.13314598,-4.29328633]},{name:"Gliese 105",ra:39.08339,dec:6.86258,dist:7.2233,tier:"secondary",mag:5.79,pos:[5.56678334,4.49155532,-1.00659644]},{name:"107 Piscium",ra:25.60488,dec:20.27128,dist:7.6443,tier:"secondary",mag:5.24,pos:[6.46661955,3.89674833,1.1972397]},{name:"Ross 128",ra:176.94229,dec:.76066,dist:3.3757,tier:"secondary",mag:11.13,pos:[-3.37057292,.18301753,-.03050292]},{name:"WISE 0855-0714",ra:133.79659,dec:-7.32971,dist:2.2774,tier:"secondary",mag:25,pos:[-1.56327477,1.38025724,-.91508767]}];function T4(n){return n.toUpperCase().replace(/[^A-Z0-9]+/g,"_")}function w4(n){return{id:T4(n.name),name:n.name,ra:n.ra,dec:n.dec,dist:n.dist,tier:n.tier,mag:n.mag,pos:n.pos,children:[{kind:"star",size:.0011,color:16777215}]}}const P4=new Set(Xu.map(n=>n.id));function D4(n){return{id:n.id,name:n.name,ra:n.ra,dec:n.dec,dist:n.dist,tier:n.tier,mag:n.mag,pos:n.pos,children:[{kind:"star",size:.0011,color:16777215}]}}const qu=[],Eh=new Set;for(const n of[b4,E4,...A4.map(w4),...p4.map(D4)])Eh.has(n.id)||(Eh.add(n.id),qu.push(n));const fl=[...Xu,...qu.filter(n=>!P4.has(n.id))],Er=14,Yu=10,C4=8.4,R4=7.6,rr=9,I4=500,Ah=.1;function L4(n){n.traverse(e=>{var t;if(e instanceof Gt||e instanceof sa||e instanceof ys){(t=e.geometry)==null||t.dispose();const i=e.material;if(Array.isArray(i))for(const a of i)a.dispose();else i instanceof aa&&i.dispose()}})}const Ar=class Ar{constructor(e){He(this,"renderer");He(this,"scene",new Lu);He(this,"camera");He(this,"controls");He(this,"composer");He(this,"bloom");He(this,"canvas");He(this,"grids");He(this,"stems");He(this,"skybox");He(this,"markers");He(this,"exoRings");He(this,"constellations");He(this,"setStarCamDist");He(this,"setStarCamPos");He(this,"kd");He(this,"nearCount",0);He(this,"nearStars");He(this,"starField");He(this,"frameTimes",[]);He(this,"systems",new Map);He(this,"cursor");He(this,"selectedSystemId","SOL");He(this,"travelPath");He(this,"travelAccelG",1);He(this,"travelStats",null);He(this,"accurateOrbitScale",!1);He(this,"heldPanKeys",new Set);He(this,"lastFrameTimeMs",performance.now());He(this,"pickDownPos",null);He(this,"twoFingerMode",null);He(this,"twoFingerStartDist",0);He(this,"twoFingerStartCx",0);He(this,"twoFingerStartCy",0);He(this,"basePath","");He(this,"lastShrink",1);He(this,"running",!1);He(this,"onHud");He(this,"trackedLabels",new Map);He(this,"resize",()=>{var i,a;const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),(i=this.composer)==null||i.setSize(e,t),(a=this.bloom)==null||a.setSize(e,t)});He(this,"onPickPointerDown",e=>{e.pointerType!=="mouse"&&e.pointerType!=="touch"&&e.pointerType!=="pen"||e.pointerType==="mouse"&&e.button!==0||(this.pickDownPos={x:e.clientX,y:e.clientY,pointerType:e.pointerType})});He(this,"onPickPointerUp",e=>{const t=this.pickDownPos;if(this.pickDownPos=null,!t||e.pointerType!==t.pointerType||e.pointerType==="mouse"&&e.button!==0)return;const i=t.pointerType==="mouse"?4:10;Math.hypot(e.clientX-t.x,e.clientY-t.y)>i||this.pickSystemAt(e.clientX,e.clientY)});He(this,"onPickPointerMove",e=>{if(!this.flyAbort)return;const t=this.pickDownPos;if(!t||e.pointerType!==t.pointerType)return;const i=t.pointerType==="mouse"?4:10;Math.hypot(e.clientX-t.x,e.clientY-t.y)>i&&this.flyAbort()});He(this,"onTouchStart",e=>{if(e.touches.length!==2)return;const t=this.twoFingerGeom(e.touches);this.twoFingerStartCx=t.cx,this.twoFingerStartCy=t.cy,this.twoFingerStartDist=t.dist,this.twoFingerMode="detecting",this.controls.enablePan=!1,this.controls.enableZoom=!1});He(this,"onTouchMove",e=>{if(this.twoFingerMode!=="detecting"||e.touches.length!==2)return;const t=this.twoFingerGeom(e.touches),i=Math.hypot(t.cx-this.twoFingerStartCx,t.cy-this.twoFingerStartCy),a=Math.abs(t.dist-this.twoFingerStartDist);if(Math.max(i,a)<10)return;const r=this.controls;a>i?(this.controls.enableZoom=!0,r._dollyStart.set(0,t.dist),this.twoFingerMode="zoom"):(this.controls.enablePan=!0,r._panStart.set(t.cx,t.cy),this.twoFingerMode="pan")});He(this,"onTouchEnd",e=>{e.touches.length>=2||(this.twoFingerMode=null,this.controls.enablePan=!0,this.controls.enableZoom=!0)});He(this,"onPanKeyDown",e=>{if(!Ar.PAN_KEY_CODES.has(e.code))return;const t=e.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||e.ctrlKey||e.metaKey||e.altKey||(this.heldPanKeys.add(e.code),(e.code.startsWith("Arrow")||e.code==="Space")&&e.preventDefault())});He(this,"onPanKeyUp",e=>{this.heldPanKeys.delete(e.code)});He(this,"loop",()=>{var a,s,r,o,l,c,h,u,d,m,g;if(!this.running)return;requestAnimationFrame(this.loop);const e=performance.now(),t=e-this.lastFrameTimeMs,i=Math.min(.1,t/1e3);this.lastFrameTimeMs=e,this.tickKeyboardPan(i),this.controls.update(),(a=this.cursor)==null||a.tick(),(s=this.travelPath)==null||s.tick(performance.now()/1e3,this.camera,this.canvas.clientWidth||1,this.canvas.clientHeight||1);{const v=this.controls.target,p=this.camera.position,f=p.distanceTo(v);(r=this.grids)==null||r.update(v,p,f),(o=this.stems)==null||o.update(v,f*.4),(l=this.stems)==null||l.setCamPos(p),(c=this.setStarCamDist)==null||c.call(this,f),(h=this.setStarCamPos)==null||h.call(this,p),(u=this.markers)==null||u.setCamPos(p),(d=this.exoRings)==null||d.setCamPos(p),(m=this.constellations)==null||m.setCamDist(f),(g=this.constellations)==null||g.setCamPos(p),this.applyBodyShrink(f)}this.composer.render(),this.publishHud()});He(this,"flyAbort",null);this.canvas=e,this.renderer=new Iu({canvas:e,antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=new st(Ga.bg),this.camera=new Ai(46,1,lh,og),this.camera.up.set(0,0,1),this.camera.position.set(8,-13,9)}setHudCallback(e){this.onHud=e}async init(e){this.basePath=e,this.grids=Ag(),this.scene.add(this.grids.group),this.constellations=$g(),this.scene.add(this.constellations.object);for(const r of fl){const o=yh(r,this.buildScale());this.systems.set(r.id,o),o.group&&this.scene.add(o.group)}try{this.skybox=await d4(`${e}/data/skybox.webp`,.34),this.scene.add(this.skybox.mesh)}catch{}const t=await yg(e);this.scene.add(t.near),this.starField=t,this.nearStars=t.near,this.nearCount=t.nearCount,this.setStarCamDist=t.setCamDist,this.setStarCamPos=t.setCamPos.bind(t),this.kd=t.kdtree;const i=[];for(const r of this.systems.values())i.push(r.center);this.markers=gg(i),this.scene.add(this.markers.object),this.stems=Pg(i),this.scene.add(this.stems.object);const a=[];for(const r of this.systems.values())r.def.children.some(o=>o.kind==="planet")&&a.push({id:r.def.id,pos:r.center});this.exoRings=_g(a),this.exoRings.setSelectedSystemId(this.selectedSystemId),this.scene.add(this.exoRings.object),this.cursor=Xg(),this.cursor.object.visible=!1,this.scene.add(this.cursor.object);const s=this.systems.get(this.selectedSystemId);s&&this.cursor.setTo(s.center,s.bbox),this.travelPath=c4(),this.scene.add(this.travelPath.group),this.refreshTravelPath(),this.controls=new O3(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.rotateSpeed=.6,this.controls.zoomSpeed=1.15,this.controls.minDistance=3e-4,this.controls.maxDistance=ch,this.controls.target.set(0,0,0),this.controls.enablePan=!0,this.controls.screenSpacePanning=!1,this.controls.mouseButtons.MIDDLE=Qn.PAN,window.addEventListener("keydown",this.onPanKeyDown),window.addEventListener("keyup",this.onPanKeyUp),this.canvas.addEventListener("pointerdown",this.onPickPointerDown),this.canvas.addEventListener("pointerup",this.onPickPointerUp),this.canvas.addEventListener("pointermove",this.onPickPointerMove),this.canvas.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.canvas.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.canvas.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.canvas.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.composer=new ig(this.renderer),this.composer.addPass(new ng(this.scene,this.camera)),this.bloom=new za(new Ke(1,1),.26,.32,.22),this.composer.addPass(this.bloom),this.composer.addPass(new rg),this.resize(),this.start()}start(){this.running=!0,this.loop()}twoFingerGeom(e){const t=e[0],i=e[1],a=.5*(t.pageX+i.pageX),s=.5*(t.pageY+i.pageY),r=Math.hypot(t.pageX-i.pageX,t.pageY-i.pageY);return{cx:a,cy:s,dist:r}}pickSystemAt(e,t){const a=this.canvas.getBoundingClientRect(),s=e-a.left,r=t-a.top,o=this.canvas.clientWidth,l=this.canvas.clientHeight,c=new R,h=new R;let u=null,d=22*22;const m=(p,f)=>{if(this.projectRTE(p,c),c.z>1)return;const x=(c.x*.5+.5)*o,_=(-c.y*.5+.5)*l,E=(x-s)**2+(_-r)**2;E<d&&(d=E,u=f)};for(const p of this.systems.values()){m(p.center,p.def.id);for(const f of p.planets)h.copy(f.local).add(p.center),m(h,p.def.id)}if(!u)return;const g=this.systems.get(u);if(!g)return;this.selectSystem(u);const v=this.camera.position.clone().sub(this.controls.target);this.flyTo(g.center.clone().add(v),g.center.clone())}tickKeyboardPan(e){if(this.heldPanKeys.size===0)return;const t=this.heldPanKeys;let i=0,a=0,s=0;if((t.has("ArrowLeft")||t.has("KeyA"))&&(i-=1),(t.has("ArrowRight")||t.has("KeyD"))&&(i+=1),(t.has("ArrowUp")||t.has("KeyW"))&&(a+=1),(t.has("ArrowDown")||t.has("KeyS"))&&(a-=1),t.has("Space")&&(s+=1),(t.has("ShiftLeft")||t.has("ShiftRight"))&&(s-=1),i===0&&a===0&&s===0)return;const r=this.controls.target,l=this.camera.position.distanceTo(r)*.95*e,c=new R().setFromMatrixColumn(this.camera.matrix,0),h=new R().crossVectors(this.camera.up,c),u=new R().addScaledVector(c,i*l).addScaledVector(h,a*l).addScaledVector(this.camera.up,s*l),d=r.clone().add(u);d.length()>ar&&(d.setLength(ar),u.subVectors(d,r)),r.add(u),this.camera.position.add(u)}applyBodyShrink(e){const t=ds.smoothstep(e,.002,.05);if(!(Math.abs(t-this.lastShrink)<.005)){this.lastShrink=t;for(const i of this.systems.values()){const a=i.group;a&&a.traverse(s=>{var o;const r=(o=s.userData)==null?void 0:o.bodyKind;if(s instanceof Gt){if(r==="planet-marker"){const l=s.userData.realScaleTarget??Ah;s.scale.setScalar(ds.lerp(l,1,t))}else if(r==="star-sphere"||r==="star-halo"){const l=Math.min(Ah,s.userData.shrinkTarget??1),c=s.userData.upperBound??1;s.scale.setScalar(ds.lerp(l,c,t))}}})}}}publishHud(){if(!this.onHud)return;const e=this.camera.position.distanceTo(this.controls.target),t=this.canvas.clientWidth,i=this.canvas.clientHeight,a=performance.now(),s=this.collectLabelAnchors(e,t,i),r=new Map;for(const d of s)r.set(d.key,d);const o=N4(s,t,i),l=new Set(o.map(d=>d.key));for(const d of s){const m=l.has(d.key),g=this.trackedLabels.get(d.key);g?(g.anchor=d,g.visible=m,m&&(g.lastSeen=a)):m&&this.trackedLabels.set(d.key,{anchor:d,visible:!0,lastSeen:a})}for(const[d,m]of this.trackedLabels)r.has(d)&&l.has(d)||(m.visible=!1),!m.visible&&a-m.lastSeen>I4&&this.trackedLabels.delete(d);const c=[];for(const[d,m]of this.trackedLabels){const g=m.anchor,v=g.x+Er,p=g.y-Er,f=v+Yu;c.push({key:d,name:g.name,kind:g.kind,tier:g.tier,ax:g.x,ay:g.y,lx:f,ly:p,elbowX:v,opacity:m.visible?g.opacity:0})}const h=this.systems.get(this.selectedSystemId),u=Eg(e,this.canvas.clientHeight||i,this.camera.fov);this.onHud({labels:c,camDist:e,nearCount:this.nearCount,selectedSystemName:h?h.def.name:"—",selectedSystemId:this.selectedSystemId,cameraTargetDistPc:this.controls.target.length()/mi,travel:{eligible:this.selectedSystemId!=="SOL",stats:this.travelStats,ticks:this.projectTravelTicks(t,i)},gridScale:u})}projectTravelTicks(e,t){const i=this.travelPath;if(!i||!i.group.visible)return[];const a=i.getEndpoints(),s=i.getTicks();if(!a||s.length===0)return[];const r=new R;this.projectRTE(a.from,r);const o=(r.x*.5+.5)*e,l=(-r.y*.5+.5)*t;this.projectRTE(a.to,r);const c=(r.x*.5+.5)*e,h=(-r.y*.5+.5)*t,u=c-o,d=h-l,m=Math.hypot(u,d);if(m<1)return[];const g=-d/m,v=u/m,p=6,f=12,x=[];for(let _=0;_<s.length;_++){const E=s[_].worldPos;if(this.projectRTE(E,r),r.z>1)continue;const U=(r.x*.5+.5)*e,P=(-r.y*.5+.5)*t;x.push({key:`tick-${s[_].label}`,x1:U-g*p,y1:P-v*p,x2:U+g*p,y2:P+v*p,lx:U+g*f,ly:P+v*f,label:s[_].label})}return x}projectRTE(e,t){const i=this.camera,a=e.x-i.position.x,s=e.y-i.position.y,r=e.z-i.position.z,o=i.matrixWorld.elements,l=o[0]*a+o[1]*s+o[2]*r,c=o[4]*a+o[5]*s+o[6]*r,h=o[8]*a+o[9]*s+o[10]*r,u=i.projectionMatrix.elements,d=u[0]*l+u[4]*c+u[8]*h+u[12],m=u[1]*l+u[5]*c+u[9]*h+u[13],g=u[2]*l+u[6]*c+u[10]*h+u[14],v=u[3]*l+u[7]*c+u[11]*h+u[15],p=v===0?0:1/v;return t.set(d*p,m*p,g*p),t.z<=1}collectLabelAnchors(e,t,i){const a=[],s=new R,r=new R,o=this.camera.position;for(const l of this.systems.values()){const c=l.def.tier;if(this.projectRTE(l.center,s),s.z<=1&&s.x>=-1.05&&s.x<=1.05&&s.y>=-1.05&&s.y<=1.05&&a.push({key:l.def.id,name:l.def.name.toUpperCase(),kind:"system",tier:c,camDist:o.distanceTo(l.center),x:(s.x*.5+.5)*t,y:(-s.y*.5+.5)*i,opacity:1}),l.planets.length===0)continue;const h=o.distanceTo(l.center),u=U4(h,l.visualHalf);if(!(u<=.01))for(const d of l.planets)r.copy(d.local).add(l.center),this.projectRTE(r,s),!(s.z>1||s.x<-1.05||s.x>1.05||s.y<-1.05||s.y>1.05)&&a.push({key:d.id,name:d.name.toUpperCase(),kind:"planet",tier:"secondary",camDist:o.distanceTo(r),x:(s.x*.5+.5)*t,y:(-s.y*.5+.5)*i,opacity:u})}return a}setConstellationsVisible(e){var t;(t=this.constellations)==null||t.setVisible(e)}setExoplanetRingsVisible(e){var t;(t=this.exoRings)==null||t.setVisible(e)}setGridVisible(e){this.grids&&(this.grids.group.visible=e),this.stems&&(this.stems.object.visible=e)}buildScale(){return this.accurateOrbitScale?{orbitScale:ku,bodyScale:cg}:{orbitScale:1,bodyScale:1}}setAccurateOrbitScale(e,t={}){var p,f;if(e===this.accurateOrbitScale)return;const i=t.animate??!0,a=this.systems.get(this.selectedSystemId),s=(a==null?void 0:a.visualHalf)??0,r=!!a&&a.planets.length>0,o=(((p=this.controls)==null?void 0:p.minDistance)??3e-4)*1.5,l=r?Math.max(s*3,o):1/0,c=a?this.camera.position.distanceTo(a.center):0;this.accurateOrbitScale=e,this.camera.near=e?1e-9:lh,this.camera.updateProjectionMatrix(),this.controls&&(this.controls.minDistance=e?1e-8:3e-4);const h=this.buildScale();for(const x of fl){const _=this.systems.get(x.id);_!=null&&_.group&&(this.scene.remove(_.group),L4(_.group));const E=yh(x,h);this.systems.set(x.id,E),E.group&&this.scene.add(E.group)}const u=this.systems.get(this.selectedSystemId);u&&this.cursor.setTo(u.center,u.bbox),this.updateFocusStar(),this.refreshTravelPath();const d=mi/3.2616,g=(!e?.1:100)*d,v=Math.max(g,l);if(i&&u&&r&&s>0&&c>0&&c<v){const x=(((f=this.controls)==null?void 0:f.minDistance)??3e-4)*1.5,_=u.visualHalf/s,E=Math.max(c*_,x),U=new R().subVectors(this.camera.position,u.center),P=U.length();if(P>1e-12){U.multiplyScalar(E/P);const w=u.center.clone().add(U);this.flyTo(w,u.center.clone(),{logZoom:!0})}}}publishHudNow(){this.publishHud()}selectSystem(e){var i;const t=this.systems.get(e);t&&(this.selectedSystemId=e,this.cursor.setTo(t.center,t.bbox),(i=this.exoRings)==null||i.setSelectedSystemId(e),this.updateFocusStar(),this.refreshTravelPath())}updateFocusStar(){var t,i;for(const a of this.systems.values())a.starAnchor&&(a.starAnchor.visible=!1);const e=this.systems.get(this.selectedSystemId);if(this.accurateOrbitScale&&e&&this.selectedSystemId!=="SOL"){const a=((t=this.starField)==null?void 0:t.setHiddenNear(e.center))??null;if(e.starAnchor&&(e.starAnchor.visible=!0,a)){const s=e.starAnchor.material.uniforms;s.uMag.value=a.mag,s.uCI.value=a.ci}}else(i=this.starField)==null||i.setHiddenNear(null)}setTravelPathVisible(e){var t;(t=this.travelPath)==null||t.setVisible(e&&this.selectedSystemId!=="SOL")}setTravelAccelG(e){this.travelAccelG=e,this.refreshTravelPath()}beginTravelView(){let e=this.selectedSystemId;if(e==="SOL"){if(!this.systems.has("TAU_CETI"))return;e="TAU_CETI"}this.focusTravel(e)}focusTravel(e){const t=this.systems.get(e);t&&(this.selectSystem(e),this.frameTravelView(t.center),this.publishHud())}frameTravelView(e){const t=new R().subVectors(e,new R(0,0,0)),i=t.length();let a=Math.atan2(t.y,t.x);Math.hypot(t.x,t.y)<1e-6&&(a=Math.atan2(-.74,.46));const s=a+Math.PI/4,r=Math.asin(new R(.46,-.74,.49).normalize().z),o=1.3,l=this.camera.fov*Math.PI/180,c=2*Math.atan(Math.tan(l/2)*this.camera.aspect),h=Math.min(l,c);let u=i*o/Math.sin(h/2);u=Math.min(Math.max(u,.5),ch);const d=Math.cos(r),m=new R(Math.cos(s)*d,Math.sin(s)*d,Math.sin(r));this.flyTo(e.clone().addScaledVector(m,u),e.clone())}refreshTravelPath(){if(!this.travelPath)return;const e=this.systems.get(this.selectedSystemId);if(!e||this.selectedSystemId==="SOL"){this.travelStats=null,this.travelPath.setVisible(!1);return}this.travelPath.rebuild(this.earthWorldPos(),e.center,this.travelAccelG,e.def.dist),this.travelStats=Wu(e.def.dist,this.travelAccelG)}earthWorldPos(){const e=this.systems.get("SOL"),t=e==null?void 0:e.planets.find(i=>i.id==="SOL/EARTH");return!e||!t?new R(0,0,0):e.center.clone().add(t.local)}focusSystem(e){var o;const t=this.systems.get(e);if(!t)return;this.selectSystem(e);const i=t.planets.length>0,a=(((o=this.controls)==null?void 0:o.minDistance)??3e-4)*1.5,s=i?Math.max(t.visualHalf*3,a):.8,r=new R(s*.46,-s*.74,s*.49);this.flyTo(t.center.clone().add(r),t.center)}viewHome(){this.selectSystem("SOL"),this.flyTo(new R(8,-13,9),new R(0,0,0))}getCameraState(){const e=this.controls.target,t=new R().subVectors(this.camera.position,e),i=t.length(),a=Math.atan2(t.y,t.x),s=Math.asin(t.z/Math.max(i,1e-9)),r=this.systems.get(this.selectedSystemId),o=r?new R().subVectors(e,r.center):new R;return{systemId:this.selectedSystemId,dist:i,yaw:a,pitch:s,cx:o.x,cy:o.y,cz:o.z}}debugSnapshot(){var i,a,s,r,o,l;if(!this.running||!this.controls)return{ready:!1};const e=this.renderer.info.render,t=this.renderer.info.memory;return{ready:this.running,frame:e.frame,draw:{calls:e.calls,triangles:e.triangles,points:e.points,lines:e.lines},memory:{geometries:t.geometries,textures:t.textures},camera:this.getCameraState(),selectedSystemId:this.selectedSystemId,nearStarCount:this.nearCount,systemCount:this.systems.size,accurateOrbitScale:this.accurateOrbitScale,travelAccelG:this.travelAccelG,hasTravelStats:this.travelStats!=null,layers:{constellations:!!((i=this.constellations)!=null&&i.object.visible),grid:!!((a=this.grids)!=null&&a.group.visible),stems:!!((s=this.stems)!=null&&s.object.visible),exoRings:!!((r=this.exoRings)!=null&&r.object.visible),travelPath:!!((o=this.travelPath)!=null&&o.group.visible),markers:!!((l=this.markers)!=null&&l.object.visible)}}}getPerf(){const e=this.frameTimes,t=e.length?e.reduce((r,o)=>r+o,0)/e.length:0,i=[...e].sort((r,o)=>r-o),a=r=>i.length?i[Math.min(i.length-1,Math.floor(r*i.length))]:0,s=this.renderer.info.render;return{fps:t>0?1e3/t:0,frameMs:{p50:a(.5),p95:a(.95),last:e[e.length-1]??0},history:[...e],draws:s.calls,tris:s.triangles,points:s.points,lines:s.lines,dpr:this.renderer.getPixelRatio()}}benchmarkLayers(e=40){const t=this.renderer.getContext(),i=this.composer,a=this.running;this.running=!1;const s=()=>{for(let u=0;u<6;u++)i.render();t.finish();const h=performance.now();for(let u=0;u<e;u++)i.render();return t.finish(),(performance.now()-h)/e},r=s(),o=(h,u)=>{h();const d=r-s();return u(),Math.max(0,d)},l={};if(l.bloom=o(()=>this.bloom.enabled=!1,()=>this.bloom.enabled=!0),this.nearStars){const h=this.nearStars;l.stars=o(()=>h.visible=!1,()=>h.visible=!0)}if(this.skybox){const h=this.skybox;l.skybox=o(()=>h.mesh.visible=!1,()=>h.mesh.visible=!0)}if(this.grids){const h=this.grids,u=h.group.visible;l.grid=o(()=>h.group.visible=!1,()=>h.group.visible=u)}this.running=a,a&&this.loop();const c=this.renderer.info.render;return{baseMs:r,fps:r>0?1e3/r:0,dpr:this.renderer.getPixelRatio(),draws:c.calls,points:c.points,tris:c.triangles,layers:l}}applyCameraState(e){var v;const t=e.systemId??this.selectedSystemId,i=this.systems.get(t);if(!i)return;this.selectSystem(t);const s=i.planets.length>0?Math.max(i.visualHalf*3,.0015):.8,r=new R(.46,-.74,.49).normalize(),o=Math.atan2(r.y,r.x),l=Math.asin(r.z),c=e.dist??s,h=e.yaw??o,u=e.pitch??l,d=Math.cos(u),m=new R(Math.cos(h)*d,Math.sin(h)*d,Math.sin(u)),g=i.center.clone().add(new R(e.cx??0,e.cy??0,e.cz??0));g.length()>ar&&g.setLength(ar),(v=this.flyAbort)==null||v.call(this),this.controls.target.copy(g),this.camera.position.copy(g).addScaledVector(m,c)}viewPleiades(){const e=new R(192.837,331.484,28.244),i=e.clone().setZ(0).normalize().multiplyScalar(-4);i.z=0,this.flyTo(i,e)}flyTo(e,t,i={}){var _;(_=this.flyAbort)==null||_.call(this);const a=this.camera.position.clone(),s=this.controls.target.clone(),r=performance.now(),o=900;let l=!1;const c=new R().subVectors(a,s),h=new R().subVectors(e,t),u=c.length(),d=h.length(),m=!!i.logZoom&&u>1e-30&&d>1e-30,g=m?c.clone().divideScalar(u):null,v=m?h.clone().divideScalar(d):null,p=m?Math.log(u):0,f=m?Math.log(d):0,x=()=>{if(l)return;const E=Math.min(1,(performance.now()-r)/o),U=E<.5?2*E*E:1-Math.pow(-2*E+2,2)/2;if(m&&g&&v){const P=Math.exp(p*(1-U)+f*U),w=new R().lerpVectors(g,v,U).normalize();this.controls.target.lerpVectors(s,t,U),this.camera.position.copy(this.controls.target).addScaledVector(w,P)}else this.camera.position.lerpVectors(a,e,U),this.controls.target.lerpVectors(s,t,U);E<1?requestAnimationFrame(x):this.flyAbort=null};this.flyAbort=()=>{l=!0,this.flyAbort=null},x()}dispose(){var e,t,i;this.running=!1,window.removeEventListener("resize",this.resize),window.removeEventListener("keydown",this.onPanKeyDown),window.removeEventListener("keyup",this.onPanKeyUp),this.canvas.removeEventListener("pointerdown",this.onPickPointerDown),this.canvas.removeEventListener("pointerup",this.onPickPointerUp),this.canvas.removeEventListener("pointermove",this.onPickPointerMove),this.canvas.removeEventListener("touchstart",this.onTouchStart),this.canvas.removeEventListener("touchmove",this.onTouchMove),this.canvas.removeEventListener("touchend",this.onTouchEnd),this.canvas.removeEventListener("touchcancel",this.onTouchEnd),(e=this.flyAbort)==null||e.call(this),(t=this.controls)==null||t.dispose(),(i=this.travelPath)==null||i.dispose(),this.renderer.dispose()}};He(Ar,"PAN_KEY_CODES",new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight"]));let ml=Ar;function U4(n,e){const t=Math.max(e,5e-4);return 1-ds.smoothstep(n,t*3,t*12)}function N4(n,e,t){if(n.length===0)return[];const i=n.slice().sort((r,o)=>r.camDist-o.camDist),a=[],s=[];for(const r of i){const o=r.x+Er,l=r.y-Er,c=o+Yu;if(l<-2*rr||l>t+2*rr)continue;const h=r.kind==="planet"?R4:C4,u=Math.max(8,r.name.length*h),d={l:c-2,r:c+u+2,t:l-rr,b:l+rr};let m=!1;for(const g of a)if(d.l<g.r&&d.r>g.l&&d.t<g.b&&d.b>g.t){m=!0;break}m||(a.push(d),s.push({key:r.key,name:r.name,kind:r.kind,tier:r.tier,ax:r.x,ay:r.y,lx:c,ly:l,elbowX:o,opacity:r.opacity}))}return s}const k4=[{id:"107_PISCIUM",appMag:5.24,specType:"K1V",evolStage:"Main Sequence",massSolar:.86,radiusSolar:.82,ageGyr:6.3,teffK:5172,summary:"107 Piscium is a single star in the constellation of Pisces. 107 Piscium is the star's Flamsteed designation. John Flamsteed numbered the stars of Pisces from 1 to 113, publishing his Catalogus Britannicus in 1725. He accidentally numbered 107 Piscium twice, as he also allocated it the designation of 2 Arietis.",wikipediaUrl:"https://en.wikipedia.org/wiki/107_Piscium"},{id:"40_ERIDANI",appMag:4.43,specType:"K0.5V",evolStage:"Main Sequence",massSolar:.84,radiusSolar:.812,ageGyr:5.6,teffK:5300,summary:"40 Eridani is a triple star system in the constellation of Eridanus, abbreviated 40 Eri. It has the Bayer designation Omicron2 Eridani, which is Latinized from ο2 Eridani and abbreviated Omicron2 Eri or ο2 Eri. Based on parallax measurements taken by the Gaia mission, it is about 16.3 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/40_Eridani"},{id:"55_CANCRI",specType:"K0IV-V",evolStage:"Subgiant",massSolar:.905,radiusSolar:.98,ageGyr:8.6,teffK:5172,summary:"55 Cancri is a binary star system located 41 light-years away from the Sun in the zodiac constellation of Cancer. It has the Bayer designation Rho1 Cancri (ρ1 Cancri); 55 Cancri is the Flamsteed designation. The system consists of a K-type star and a smaller red dwarf.",wikipediaUrl:"https://en.wikipedia.org/wiki/55_Cancri"},{id:"61_CYGNI",appMag:5.216,specType:"K5V",evolStage:"Main Sequence",massSolar:.6771,radiusSolar:.667,ageGyr:6.1,teffK:4398,summary:"61 Cygni is a binary star system in the northern constellation Cygnus, consisting of a pair of K-type dwarf stars that orbit each other in a period of about 659 years.",wikipediaUrl:"https://en.wikipedia.org/wiki/61_Cygni"},{id:"70_OPHIUCHI",appMag:4.03,specType:"K0-V",evolStage:"Main Sequence",massSolar:.8656,radiusSolar:.831,ageGyr:2.81,teffK:5301,summary:"70 Ophiuchi is a binary star system located 16.7 light-years away from the Earth. It is in the constellation Ophiuchus. At magnitude 4 it appears as a dim star visible to the unaided eye away from city lights.",wikipediaUrl:"https://en.wikipedia.org/wiki/70_Ophiuchi"},{id:"82_ERIDANI",appMag:4.27,specType:"G6V",evolStage:"Main Sequence",massSolar:.8,radiusSolar:.93,ageGyr:9,teffK:5473,summary:"82 G. Eridani is a star 19.7 light-years away from Earth in the constellation Eridanus. It is a main-sequence star with a stellar classification of G6 V, and it hosts a system of three confirmed planets and a dust disk.",wikipediaUrl:"https://en.wikipedia.org/wiki/82_G._Eridani"},{id:"ACAMAR",appMag:3.1173,specType:"A2V",evolStage:"Main Sequence",massSolar:2.39,radiusSolar:3.9,teffK:7900,summary:"Theta Eridani, Latinized from θ Eridani, is a triple star system in the constellation of Eridanus, with a combined apparent magnitude of 2.88. The primary component has the proper name Acamar, the traditional name of the system. The system's distance based on parallax measurements is 164–167 light-years.",wikipediaUrl:"https://en.wikipedia.org/wiki/Theta_Eridani"},{id:"ACHERNAR",appMag:.46,specType:"B6Vpe",evolStage:"Main Sequence",massSolar:6.7,radiusSolar:7.3,ageGyr:.063,teffK:14510,summary:"Achernar is the brightest star in the constellation of Eridanus and the ninth-brightest in the night sky. It has the Bayer designation Alpha Eridani, which is Latinized from α Eridani and abbreviated Alpha Eri or α Eri. The name Achernar applies to the primary component of a binary system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Achernar"},{id:"ACRAB",appMag:2.5,specType:"B1V+B2V",evolStage:"Main Sequence",massSolar:15,radiusSolar:6.3,teffK:28e3,summary:"Beta Scorpii is a multiple star system in the southern zodiac constellation of Scorpius. It bore the traditional proper name of Acrab, though the International Astronomical Union now regards that name as applying only to the β Scorpii Aa component.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Scorpii"},{id:"ACRUX",appMag:.76,specType:"B0.5IV + B1V",evolStage:"Subgiant",massSolar:17.8,radiusSolar:7.8,ageGyr:.0108,teffK:24e3,summary:"Acrux is a multiple star system the brightest star in the southern constellation of Crux. It has the Bayer designation α Crucis, which is Latinised to Alpha Crucis and abbreviated Alpha Cru or α Cru. With a combined visual magnitude of +0.76, it is the 13th-brightest star in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Acrux"},{id:"ADHARA",appMag:1.5,specType:"B1.5II",evolStage:"Bright Giant",massSolar:13.1,radiusSolar:10.7,teffK:22500,summary:"Epsilon Canis Majoris is a binary star system and the second-brightest star in the constellation of Canis Major. Its name is a Bayer designation that is Latinised from ε Canis Majoris, and abbreviated Epsilon CMa or ε CMa. This is the 22nd-brightest star in the night sky with an apparent magnitude of 1.50.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Canis_Majoris"},{id:"AIN",appMag:3.53,specType:"G9.5IIICN0.5",evolStage:"Giant",massSolar:2.458,radiusSolar:12.46,ageGyr:.6,teffK:4880,summary:"Epsilon Tauri or ε Tauri, formally named Ain, is an orange giant star located approximately 146 light-years from the Sun in the constellation of Taurus. An exoplanet is believed to be orbiting the star.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Tauri"},{id:"ALBALI",appMag:3.77,specType:"B9.5V",evolStage:"Main Sequence",massSolar:2.98,radiusSolar:4.2,ageGyr:.388,teffK:9622,summary:"Epsilon Aquarii is a binary star system in the equatorial zodiac constellation of Aquarius, located near the western constellation border with Capricornus. Its identifier is a Bayer designation that is Latinized from ε Aquarii, and abbreviated Eps Aqr or ε Aqr, respectively.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Aquarii"},{id:"ALCOR",appMag:4.01,specType:"A5V+M3-4V",evolStage:"Main Sequence",massSolar:1.842,radiusSolar:2.002,ageGyr:.422,teffK:7556,summary:"Alcor is a binary star system in the constellation of Ursa Major. It is the fainter companion of Mizar, the two stars forming a naked eye double in the handle of the Big Dipper asterism in Ursa Major. The two lie about 83 light-years away from the Sun, as measured by the Hipparcos astrometry satellite.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alcor_(star)"},{id:"ALCYONE",appMag:2.87,specType:"B7III",evolStage:"Giant",radiusSolar:10.56,ageGyr:.07,teffK:12258,summary:"Alcyone, is a blue-white giant star and the brightest star in the Pleiades open cluster. At apparent magnitude 2.87, it is also the third-brightest star in the Taurus constellation. The star has the Bayer designation Eta Tauri, Latinized from η Tauri and abbreviated Eta Tau or η Tau.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alcyone_(star)"},{id:"ALDEBARAN",appMag:.87,specType:"K5III",evolStage:"Giant",massSolar:1.16,radiusSolar:45.1,ageGyr:6.4,teffK:3910,summary:"Aldebaran is a star in the zodiac constellation of Taurus. It has the Bayer designation α Tauri, which is Latinized to Alpha Tauri and abbreviated Alpha Tau or α Tau.",wikipediaUrl:"https://en.wikipedia.org/wiki/Aldebaran"},{id:"ALDERAMIN",appMag:2.46,specType:"A8Vn",evolStage:"Main Sequence",massSolar:1.92,radiusSolar:2.162,ageGyr:.99,teffK:8558,summary:"Alpha Cephei is a second magnitude star in the northern constellation of Cepheus. It has the official name Alderamin, pronounced ; Alpha Cephei is its Bayer designation, which is Latinized from α Cephei and abbreviated Alpha Cep or α Cep.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Cephei"},{id:"ALGEDI",appMag:3.58,specType:"G9III",evolStage:"Giant",massSolar:2.05,radiusSolar:8.38,ageGyr:1.3,teffK:5030,summary:"Alpha2 Capricorni is a triple star system in the southern constellation of Capricornus. It has the proper name Algedi, pronounced ; Alpha2 Capricorni is its Bayer designation. This system is visible to the naked eye as a point of light with an apparent visual magnitude of +3.57.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha2_Capricorni"},{id:"ALGENIB",appMag:2.84,specType:"B2IV",evolStage:"Subgiant",massSolar:8.8,radiusSolar:5.4,ageGyr:.0219,teffK:22e3,summary:"Gamma Pegasi is a binary star in the constellation of Pegasus, located at the southeast corner of the asterism known as the Great Square. It has the formal name Algenib ; the Bayer designation Gamma Pegasi is Latinized from γ Pegasi and abbreviated Gamma Peg or γ Peg.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Pegasi"},{id:"ALGIEBA",appMag:2.37,specType:"K1-III+G7IIIb",evolStage:"Giant",massSolar:1.66,radiusSolar:26.08,ageGyr:1.75,teffK:4457,summary:"Gamma Leonis, also named Algieba, is a binary star system in the constellation of Leo, made up of two red giants. The primary star is orbited by one known exoplanet.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Leonis"},{id:"ALGOL",appMag:2.12,specType:"B8V",evolStage:"Main Sequence",massSolar:3.17,radiusSolar:2.73,ageGyr:.57,teffK:13e3,summary:"Algol, designated Beta Persei, known colloquially as the Demon Star, is a bright multiple star in the constellation of Perseus and one of the first non-nova variable stars to be discovered.",wikipediaUrl:"https://en.wikipedia.org/wiki/Algol"},{id:"ALHENA",appMag:1.92,specType:"A1.5IV+",evolStage:"Subgiant",massSolar:2.81,radiusSolar:6.06,ageGyr:2,teffK:9190,summary:"Gamma Geminorum, formally named Alhena, is the third-brightest object in the constellation of Gemini. It has an apparent visual magnitude of 1.9, making it easily visible to the naked eye even in urban regions.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Geminorum"},{id:"ALIOTH",appMag:1.77,specType:"A1III-IVpkB9",evolStage:"Giant",massSolar:2.91,radiusSolar:4.29,ageGyr:.3,teffK:8908,summary:"Alioth, also called Epsilon Ursae Majoris, is a star in the northern constellation of Ursa Major. The designation is Latinised from ε Ursae Majoris and abbreviated Epsilon UMa or ε UMa.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alioth"},{id:"ALJANAH",appMag:2.48,specType:"K0III",evolStage:"Giant",massSolar:1.103,radiusSolar:11.13,ageGyr:9.62,teffK:4699,summary:"Epsilon Cygni is a binary star in the constellation of Cygnus. With an apparent visual magnitude of 2.48, it is readily visible to the naked eye at night, and is the third-brightest star in the constellation. Based upon parallax measurement, Epsilon Cygni is about 73 light-years distant.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Cygni"},{id:"ALKAID",appMag:1.86,specType:"B3V",evolStage:"Main Sequence",massSolar:5.071,radiusSolar:2.894,ageGyr:.006,teffK:16329,summary:"Alkaid, also called Eta Ursae Majoris, is a star in the constellation of Ursa Major. It is the easternmost star in the Big Dipper asterism. However, unlike most stars of the Big Dipper, it is not a member of the Ursa Major moving group.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alkaid"},{id:"ALMACH",appMag:2.1,specType:"K2+IIb",evolStage:"Bright Giant",massSolar:14.5,radiusSolar:98.5,ageGyr:.0065,teffK:4248,summary:"Gamma Andromedae is a multiple star system in the northern constellation of Andromeda. It is the third-brightest star in the constellation, after Alpheratz and Mirach. Its identifier is a Bayer designation that is Latinized from γ Andromedae, and is abbreviated Gam1 And or γ1 And, respectively.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Andromedae"},{id:"ALNAIR",appMag:1.71,specType:"B6V",evolStage:"Main Sequence",massSolar:3.82,radiusSolar:3.4,ageGyr:.1,teffK:14245,summary:"Alpha Gruis is the brightest star in the southern constellation of Grus. It is officially named Alnair; Alpha Gruis is the star's Bayer designation, which is Latinized from α Gruis and abbreviated α Gru.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Gruis"},{id:"ALPHARD",appMag:1.97,specType:"K3IIIa",evolStage:"Giant",massSolar:3.2,radiusSolar:57.59,ageGyr:.42,teffK:4117,summary:"Alphard is the brightest star in the constellation of Hydra. It has the Bayer designation Alpha Hydrae, which is that is Latinized from α Hydrae, and abbreviated Alpha Hya or α Hya. It is a giant star, cooler than the Sun but larger and more luminous. It is about 177 light-years away.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alphard"},{id:"ALPHA_CENTAURI",appMag:-.27,specType:"G2V + K1V",evolStage:"Main Sequence",massSolar:1.079,radiusSolar:1.2175,ageGyr:5.3,teffK:5790,summary:"Alpha Centauri is a star system in the southern constellation of Centaurus. It consists of three stars: Rigil Kentaurus, Toliman, and Proxima Centauri.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Centauri"},{id:"ALPHERATZ",appMag:2.06,specType:"B8IV-VHgMn",evolStage:"Subgiant",massSolar:3.63,radiusSolar:2.8,ageGyr:.2,teffK:11950,summary:"Alpheratz is a prominent star system in the constellation of Andromeda. Pronounced, it has the Bayer designation Alpha Andromedae, Latinised from α Andromedae, and abbreviated Alpha And or α And, respectively. Alpheratz is the brightest star in the constellation when Mirach undergoes its periodical dimming.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpheratz"},{id:"ALPHERG",appMag:3.62,specType:"G7IIIa",evolStage:"Giant",massSolar:3.78,radiusSolar:28.67,ageGyr:.22,teffK:4843,summary:"Eta Piscium is a binary star and the brightest star in the equatorial-northern constellation of Pisces, with an apparent visual magnitude of +3.6.",wikipediaUrl:"https://en.wikipedia.org/wiki/Eta_Piscium"},{id:"ALSHAIN",appMag:3.71,specType:"G8IV",evolStage:"Subgiant",massSolar:1.24,radiusSolar:3.096,ageGyr:4.77,teffK:5090,summary:"Beta Aquilae is a triple star system in the equatorial constellation of Aquila. Its name is a Bayer designation that is Latinized from β Aquilae, and abbreviated Beta Aql or β Aql. This system is visible to the naked eye as a point-like source with an apparent visual magnitude of 3.87.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Aquilae"},{id:"ALTAIR",appMag:.76,specType:"A7V",evolStage:"Main Sequence",massSolar:1.79,radiusSolar:1.79,ageGyr:.1,teffK:7550,summary:"Altair is the brightest star in the equatorial constellation of Aquila and the twelfth-brightest star in the night sky. It has the Bayer designation Alpha Aquilae, which is Latinised from α Aquilae and abbreviated Alpha Aql or α Aql.",wikipediaUrl:"https://en.wikipedia.org/wiki/Altair"},{id:"ARCTURUS",appMag:-.05,specType:"K1.5III",evolStage:"Giant",massSolar:1.08,radiusSolar:25.4,ageGyr:7.1,teffK:4286,summary:"Arcturus is a red giant star in the northern constellation of Boötes, and the brightest star in the constellation. It has the Bayer designation α Boötis, which is Latinized to Alpha Boötis and abbreviated Alpha Boo or α Boo.",wikipediaUrl:"https://en.wikipedia.org/wiki/Arcturus"},{id:"ASCELLA",appMag:2.59,specType:"A2.5Va",evolStage:"Main Sequence",massSolar:1.83,radiusSolar:1.9,ageGyr:.7,teffK:8230,summary:"Zeta Sagittarii is a triple star system and the third-brightest star in the constellation of Sagittarius after Kaus Australis and Nunki. Based upon parallax measurements, it is about 88 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Zeta_Sagittarii"},{id:"ASTEROPE",appMag:5.76,specType:"B8V",evolStage:"Main Sequence",massSolar:2.93,radiusSolar:100,ageGyr:.1,teffK:11041,summary:"21 Tauri, formally named Asterope, is a component of the Sterope double star in the Pleiades open cluster. 21 Tauri is the star's Flamsteed designation.",wikipediaUrl:"https://en.wikipedia.org/wiki/21_Tauri"},{id:"ATLAS",appMag:3.63,specType:"B8III",evolStage:"Giant",massSolar:5.04,radiusSolar:7.81,ageGyr:2,teffK:12525,summary:"Atlas, designation 27 Tauri, is a binary star system in the constellation of Taurus. It is a member of the Pleiades, an open star cluster (M45). It is 444 light-years away, and is 3.92 degrees north of the ecliptic.",wikipediaUrl:"https://en.wikipedia.org/wiki/Atlas_(star)"},{id:"AUVA",appMag:3.38,specType:"M3III",evolStage:"Giant",massSolar:1.19,radiusSolar:67.4,teffK:3643,summary:"Delta Virginis, formally named Minelauva, is a star in the zodiac constellation of Virgo. With an apparent visual magnitude of 3.4, this star is bright enough to be seen with the naked eye. It is located at a distance of about 200 light-years from Earth.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Virginis"},{id:"BARNARD_S_STAR",appMag:9.51,specType:"M4.0V",evolStage:"Main Sequence",massSolar:.144,radiusSolar:.196,ageGyr:10,teffK:3134,summary:"Barnard's Star is a small red dwarf star in the constellation of Ophiuchus. At a distance of 5.96 light-years (1.83 pc) from Earth, it is the fourth-nearest-known individual star to the Sun after the three components of the Alpha Centauri system, and is the closest star in the northern celestial hemisphere.",wikipediaUrl:"https://en.wikipedia.org/wiki/Barnard's_Star"},{id:"BELLATRIX",appMag:1.64,specType:"B2III",evolStage:"Giant",massSolar:8.6,radiusSolar:5.75,ageGyr:.025,teffK:21800,summary:"Bellatrix is the third-brightest star in the constellation of Orion, positioned 5° west of the red supergiant Betelgeuse. It has the Bayer designation γ Orionis, which is Latinized to Gamma Orionis. With a slightly variable magnitude of around 1.6, it is typically the 25th-brightest star in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Bellatrix"},{id:"BETELGEUSE",appMag:.42,specType:"M1-2Ia-Iab",evolStage:"Red Supergiant",massSolar:16.5,radiusSolar:887,ageGyr:.0085,teffK:3600,summary:"Betelgeuse is a red supergiant star in the equatorial constellation of Orion. It is usually the tenth-brightest star in the night sky and, after Rigel, the second brightest in its constellation.",wikipediaUrl:"https://en.wikipedia.org/wiki/Betelgeuse"},{id:"CANOPUS",appMag:-.74,specType:"A9II",evolStage:"Bright Giant",massSolar:8,radiusSolar:71,ageGyr:.025,teffK:7400,summary:"Canopus is the brightest star in the southern constellation of Carina and the second-brightest star in the night sky. It is designated α Carinae, which is romanized (transliterated) to Alpha Carinae. With a visual apparent magnitude of −0.74, it is outshone only by Sirius.",wikipediaUrl:"https://en.wikipedia.org/wiki/Canopus"},{id:"CAPELLA",appMag:.08,specType:"G3III + K0III",evolStage:"Giant",massSolar:2.5687,radiusSolar:11.98,ageGyr:.59,teffK:4970,summary:"Capella is the brightest star in the northern constellation of Auriga. It has the Bayer designation α Aurigae, which is Latinised to Alpha Aurigae and abbreviated Alpha Aur or α Aur.",wikipediaUrl:"https://en.wikipedia.org/wiki/Capella"},{id:"CAPH",appMag:2.27,specType:"F2III",evolStage:"Giant",massSolar:1.91,radiusSolar:3.79,ageGyr:1.18,teffK:6167,summary:"Beta Cassiopeiae is a Delta Scuti variable star in the constellation of Cassiopeia. It has the proper name Caph, pronounced ; Beta Cassiopeiae is its Bayer designation, which is Latinized from β Cassiopeiae and abbreviated Beta Cas or β Cas. This is a giant star belonging to the spectral class F2.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Cassiopeiae"},{id:"CASTOR",appMag:1.58,specType:"A1V + A2Vm",evolStage:"Main Sequence",massSolar:2.76,radiusSolar:2.4,ageGyr:.2,teffK:10286,summary:"Castor is the second-brightest object in the zodiac constellation of Gemini. It has the Bayer designation α Geminorum, which is Latinised to Alpha Geminorum and abbreviated Alpha Gem or α Gem. With an apparent visual magnitude of 1.58, it is one of the brightest stars in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Castor_(star)"},{id:"CEBALRAI",appMag:2.75,specType:"K2IIICN0.5",evolStage:"Giant",massSolar:1.44,radiusSolar:12.17,ageGyr:2.75,teffK:4559,summary:"Beta Ophiuchi or β Ophiuchi, also named Cebalrai, is a star in the equatorial constellation of Ophiuchus. The apparent visual magnitude of this star is 2.7, which is readily visible to the naked eye even from urban skies.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Ophiuchi"},{id:"CELAENO",appMag:5.46,specType:"B7V",evolStage:"Main Sequence",massSolar:4,radiusSolar:2.34,ageGyr:.122,teffK:12800,summary:"Celaeno, designated 16 Tauri, is a star in the constellation of Taurus and a member of the Pleiades open star cluster (M45) of stars.",wikipediaUrl:"https://en.wikipedia.org/wiki/Celaeno_(star)"},{id:"CHERTAN",appMag:3.35,specType:"A2IV",evolStage:"Subgiant",massSolar:2.8,radiusSolar:4.03,ageGyr:.407,teffK:9480,summary:"Theta Leonis, Latinized from θ Leonis, formally named Chertan, is a star in the equatorial-northern constellation of Leo. With an apparent visual magnitude of +3.324 it is visible to the naked eye and forms one of the brighter stars in the constellation.",wikipediaUrl:"https://en.wikipedia.org/wiki/Theta_Leonis"},{id:"DABIH",appMag:3.08,specType:"G9II:+B8p:Si:",evolStage:"Bright Giant",massSolar:3.69,radiusSolar:31.4,ageGyr:.23,teffK:4870,summary:"Beta Capricorni is a multiple star system in the constellation of Capricornus. Its name is a Bayer designation that is Latinized from β Capricorni, and abbreviated Beta Cap or β Cap. Based on Parallax measurements, it is located at a distance of approximately 390 light years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Capricorni"},{id:"DELTA_PAVONIS",appMag:3.56,specType:"G8IV",evolStage:"Subgiant",massSolar:1.07,radiusSolar:1.197,ageGyr:6.1,teffK:5609,summary:"Delta Pavonis is a single star in the southern constellation of Pavo. Its name is a Bayer designation that is Latinized from δ Pavonis, and abbreviated Delta Pav or δ Pav. It has an apparent visual magnitude of 3.56, making it a fourth-magnitude star that is visible to the naked eye from the southern hemisphere.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Pavonis"},{id:"DENEBOLA",appMag:2.14,specType:"A3V",evolStage:"Main Sequence",massSolar:1.78,radiusSolar:1.728,ageGyr:.4,teffK:8500,summary:"Denebola is the second-brightest star in the zodiac constellation of Leo. It is the easternmost of the bright stars of Leo. It has the Bayer designation Beta Leonis or β Leonis, which are abbreviated Beta Leo or β Leo.",wikipediaUrl:"https://en.wikipedia.org/wiki/Denebola"},{id:"DENEB_ALGEDI",appMag:2.84,specType:"kA5hF0mF2III",massSolar:1.54,radiusSolar:1.87,ageGyr:1.4,teffK:7e3,summary:"Delta Capricorni is the brightest star in the constellation of Capricornus, the Sea Goat. It is a binary star system whose components are seen to eclipse each other, known as an eclipsing binary.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Capricorni"},{id:"DSCHUBBA",appMag:2.32,specType:"B0.3IV",evolStage:"Subgiant",massSolar:13,radiusSolar:8.5,teffK:27400,summary:"Delta Scorpii is a binary star in the constellation of Scorpius. The primary star is named Dschubba.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Scorpii"},{id:"DUBHE",appMag:1.79,specType:"G9III+A7.5",evolStage:"Giant",massSolar:3.7,radiusSolar:27.33,ageGyr:.28,teffK:4810,summary:'Dubhe is a multiple star system in the northern constellation of Ursa Major. It is formally designated Alpha Ursae Majoris, Latinised from α Ursae Majoris, Despite being designated "α" (alpha), it is the second-brightest object in the constellation.',wikipediaUrl:"https://en.wikipedia.org/wiki/Dubhe"},{id:"ELECTRA",appMag:3.7,specType:"B6IIIe",evolStage:"Giant",massSolar:4.6,radiusSolar:6.06,ageGyr:.115,teffK:13484,summary:"Electra, designated 17 Tauri, is a blue-white giant star in the constellation of Taurus located approximately 440 light years away. It is the third-brightest star in the Pleiades open star cluster (M45), visible to the naked eye with an apparent magnitude of 3.7.",wikipediaUrl:"https://en.wikipedia.org/wiki/Electra_(star)"},{id:"ELNATH",appMag:1.65,specType:"B7III",evolStage:"Giant",massSolar:5,radiusSolar:4.79,ageGyr:.1,teffK:13600,summary:"Beta Tauri is the second-brightest star in the constellation of Taurus. It has the official name Elnath; Beta Tauri is the current Bayer designation, which is Latinised from β Tauri and abbreviated Beta Tau or β Tau. The original designation of Gamma Aurigae is now rarely used.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Tauri"},{id:"ELTANIN",appMag:2.23,specType:"K5III",evolStage:"Giant",massSolar:2.14,radiusSolar:51.8,ageGyr:1.3,teffK:3964,summary:"Gamma Draconis, formally named Eltanin, is a star in the northern constellation of Draco. Contrary to its gamma-designation, it is the brightest object in Draco at magnitude 2.2, outshining Beta Draconis by nearly half a magnitude and Alpha Draconis by over a magnitude.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Draconis"},{id:"EPSILON_ERIDANI",appMag:3.73,specType:"K2V",evolStage:"Main Sequence",massSolar:.82,radiusSolar:.738,ageGyr:.6,teffK:5084,summary:"Epsilon Eridani, proper name Ran, is a star in the southern constellation of Eridanus. At a declination of −9.46°, it is visible from most of Earth's surface.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Eridani"},{id:"EPSILON_INDI",appMag:4.69,specType:"K5V",evolStage:"Main Sequence",massSolar:.762,radiusSolar:.711,ageGyr:1.3,teffK:4649,summary:"Epsilon Indi, Latinized from ε Indi, is a star system located at a distance of approximately 12 light-years from Earth in the southern constellation of Indus. The star has an orange hue and is faintly visible to the naked eye with an apparent visual magnitude of 4.674.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Indi"},{id:"ERRAI",appMag:3.22,specType:"K1III-IVCN1",evolStage:"Giant",massSolar:1.27,radiusSolar:4.74,ageGyr:5.7,teffK:4806,summary:"Gamma Cephei is a binary star system in the northern constellation of Cepheus. Its name is a Bayer designation that is Latinized from γ Cephei, and abbreviated Gamma Cep or γ Cep. This system is visible to the naked eye as a point of light with a combined apparent visual magnitude of 3.21.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Cephei"},{id:"ETA_CASSIOPEIAE",appMag:3.44,specType:"F9V",evolStage:"Main Sequence",massSolar:1.0258,radiusSolar:1.0336,ageGyr:5.4,teffK:6012,summary:"Eta Cassiopeiae is a binary star system in the northern constellation of Cassiopeia. Its name is a Bayer designation that is Latinized from η Cassiopeiae and abbreviated Eta Cas or η Cas. The binary nature of this system was first discovered by William Herschel in August 1779.",wikipediaUrl:"https://en.wikipedia.org/wiki/Eta_Cassiopeiae"},{id:"FOMALHAUT",appMag:1.16,specType:"A3V",evolStage:"Main Sequence",massSolar:1.92,radiusSolar:1.842,ageGyr:.44,teffK:8590,summary:"Fomalhaut is the brightest star in the southern constellation of Piscis Austrinus, the Southern Fish, and one of the brightest stars in the night sky. It has the Bayer designation Alpha Piscis Austrini, which is an alternative form of α Piscis Austrini, and is abbreviated Alpha PsA or α PsA.",wikipediaUrl:"https://en.wikipedia.org/wiki/Fomalhaut"},{id:"GACRUX",appMag:1.64,specType:"M3.5III",evolStage:"Giant",massSolar:1.5,radiusSolar:84,ageGyr:5,teffK:3626,summary:"Gacrux is the third-brightest star in the southern constellation of Crux, the Southern Cross. It has the Bayer designation Gamma Crucis, which is Latinised from γ Crucis and abbreviated Gamma Cru or γ Cru. With an apparent visual magnitude of +1.63, it is the 26th brightest star in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gacrux"},{id:"GLIESE_105",massSolar:.8,radiusSolar:.73,ageGyr:11,teffK:4886,summary:"Gliese 105 is a triple star system in the constellation of Cetus. It is located relatively near the Sun at a distance of 23.6 light years. Despite this, even the brightest component is barely visible with the unaided eye (see Bortle scale). No planets have yet been detected around any of the stars in this system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gliese_105"},{id:"GLIESE_570",appMag:5.72,specType:"K4V",evolStage:"Main Sequence",radiusSolar:.715,teffK:4505,summary:"Gliese 570 is a quaternary star system approximately 19 light-years away. The primary star is an orange dwarf star. The other secondary stars are themselves a binary system, two red dwarfs that orbit the primary star. A brown dwarf has been confirmed to be orbiting in the system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gliese_570"},{id:"GLIESE_667_C",appMag:5.89,specType:"M1.5V",evolStage:"Main Sequence",massSolar:.65,radiusSolar:.76,teffK:4270,summary:"Gliese 667 is a triple-star system in the constellation Scorpius lying at a distance of about 7.2 parsecs from Earth. All three of the stars have masses smaller than the Sun. To the naked eye, the system appears to be a single faint star of magnitude 5.89.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gliese_667"},{id:"GOMEISA",appMag:2.89,specType:"B8Ve",evolStage:"Main Sequence",massSolar:3.64,radiusSolar:4.12,ageGyr:.16,teffK:11772,summary:"Beta Canis Minoris is a variable star in the constellation of Canis Minor. It has the proper name Gomeisa, pronounced ; Beta Canis Minoris is its Bayer designation. In the night sky it is notable for its proximity to the prominent star Procyon. This is a probable binary star system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Canis_Minoris"},{id:"HADAR",appMag:.6,specType:"B1III",evolStage:"Giant",massSolar:12.02,radiusSolar:7.07,ageGyr:.0141,teffK:25e3,summary:"Beta Centauri is a triple star system in the southern constellation of Centaurus. It is officially called Hadar. The Bayer designation of Beta Centauri is Latinised from β Centauri, and abbreviated Beta Cen or β Cen.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Centauri"},{id:"HD_219134",appMag:5.57,specType:"K3V",evolStage:"Main Sequence",massSolar:.763,radiusSolar:.748,ageGyr:10.151,teffK:4817.1,summary:"HD 219134 is a main-sequence star in the constellation of Cassiopeia. It is smaller and less luminous than the Sun, with a spectral class of K3V, which makes it an orange-hued star. HD 219134 is relatively close to our system, with an estimated distance of 21.34 light years.",wikipediaUrl:"https://en.wikipedia.org/wiki/HD_219134"},{id:"HYADUM_I",appMag:3.65,specType:"K0III",evolStage:"Giant",massSolar:2.7,radiusSolar:13.4,ageGyr:.43,teffK:4844,summary:'Gamma Tauri is either a solitary, binary or double star that marks the tip of the "V" in the constellation of Taurus. It is a member of, and located within about 2.5 parsecs of the center of, the Hyades star cluster, the nearest open cluster to the Sun.',wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Tauri"},{id:"HYADUM_II",appMag:3.76,specType:"K0- IIICN0.5",evolStage:"Giant",massSolar:2.75,radiusSolar:14.9,ageGyr:.588,teffK:4819,summary:"Delta1 Tauri is a double star in the zodiac constellation of Taurus. Based upon an annual parallax shift of 20.96 mas as seen from Earth, it is located roughly 156 light-years distant from the Sun. The system is faintly visible to the naked eye with a combined apparent visual magnitude of +3.772.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta1_Tauri"},{id:"IZAR",appMag:2.39,specType:"K0-II-III",evolStage:"Bright Giant",massSolar:5.36,radiusSolar:37.61,teffK:4755,summary:"Epsilon Boötis is a binary star system in the northern constellation of Boötes. The two components have the proper names Izar and Pulcherrima respectively; both are traditional names for the system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Bo%C3%B6tis"},{id:"K2_18",appMag:13.5,specType:"dM2.5",massSolar:.495,radiusSolar:.469,ageGyr:2.9,teffK:3645,summary:"K2-18, also known as EPIC 201912552, is a red dwarf star with two planetary companions located 124 light-years from Earth, in the constellation of Leo.",wikipediaUrl:"https://en.wikipedia.org/wiki/K2-18"},{id:"KAPTEYN_S_STAR",appMag:8.853,specType:"M1VIp",evolStage:"Subdwarf",massSolar:.281,radiusSolar:.291,ageGyr:11.5,teffK:3570,summary:"Kapteyn's Star is a class M1 red subdwarf about 12.83 light-years from Earth in the southern constellation Pictor; it is the closest halo star to the Solar System and one of the nearest stars. With a slightly variable apparent magnitude of about 8.8, it is visible through binoculars or a telescope.",wikipediaUrl:"https://en.wikipedia.org/wiki/Kapteyn's_Star"},{id:"KAUS_AUSTRALIS",appMag:1.81,specType:"B9IVp_lB?",evolStage:"Subgiant",massSolar:3.8,radiusSolar:8.8,ageGyr:.232,teffK:11720,summary:"Epsilon Sagittarii, formally named Kaus Australis, is a binary star system in the southern zodiac constellation of Sagittarius. The apparent visual magnitude of +1.85 makes it the brightest star in Sagittarius. Based upon parallax measurements, this star is around 143 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Sagittarii"},{id:"KAUS_BOREALIS",appMag:2.81,specType:"K1IIIb",evolStage:"Giant",massSolar:1.79,radiusSolar:11.234,teffK:4768,summary:"Lambda Sagittarii, formally named Kaus Borealis, is a star in the southern constellation of Sagittarius. The star marks the top of the Archer's bow.",wikipediaUrl:"https://en.wikipedia.org/wiki/Lambda_Sagittarii"},{id:"KOCHAB",appMag:2.08,specType:"K4-III",evolStage:"Giant",massSolar:1.3,radiusSolar:44.13,ageGyr:2.95,teffK:4008,summary:"Kochab, Bayer designation Beta Ursae Minoris, is the brightest star in the bowl of the Little Dipper asterism, and only slightly fainter than Polaris, the northern pole star and brightest star in Ursa Minor. Kochab is 16 degrees from Polaris and has an apparent visual magnitude of 2.08.",wikipediaUrl:"https://en.wikipedia.org/wiki/Kochab"},{id:"KORNEPHOROS",appMag:2.77,specType:"G7IIIaFe-0.5",evolStage:"Giant",massSolar:2.85,radiusSolar:15.92,ageGyr:.42,teffK:5092,summary:"Beta Herculis, formally named Kornephoros, is a binary star and the brightest star in the northern constellation of Hercules at a base apparent visual magnitude of 2.81. This is a suspected variable star with an apparent magnitude that may rise as high as 2.76.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Herculis"},{id:"LACAILLE_9352",appMag:7.392,specType:"M2V",evolStage:"Main Sequence",massSolar:.479,radiusSolar:.474,ageGyr:4.57,teffK:3672,summary:"Gliese 887, also Lacaille 9352, is a red dwarf star in the southern constellation of Piscis Austrinus. With an apparent visual magnitude of 7.34, this star is too faint to be viewed with the naked eye except possibly under excellent seeing conditions.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gliese_887"},{id:"LALANDE_21185",appMag:7.52,specType:"M2V",evolStage:"Main Sequence",massSolar:.39,radiusSolar:.392,ageGyr:5,teffK:3601,summary:"Lalande 21185 is a star in the south of Ursa Major. It is the apparent brightest red dwarf in the northern hemisphere. Despite this, and being relatively close by, it is very dim, being only magnitude 7.5 in visible light and thus too faint to be seen with the unaided eye.",wikipediaUrl:"https://en.wikipedia.org/wiki/Lalande_21185"},{id:"LHS_1140",appMag:14.15,specType:"M4.5V",evolStage:"Main Sequence",massSolar:.1844,radiusSolar:.2159,ageGyr:5,teffK:3096,summary:"LHS 1140 is a red dwarf star in the constellation of Cetus. Based on stellar parallax measurement, it is 48.8 light-years away from the Sun. 'LHS' refers to the Luyten Half-Second Catalogue of stars with proper motions exceeding half a second of arc annually.",wikipediaUrl:"https://en.wikipedia.org/wiki/LHS_1140"},{id:"MAHASIM",appMag:2.62,specType:"A0VpSi",evolStage:"Main Sequence",massSolar:3.24,radiusSolar:4.68,ageGyr:.288,teffK:10220,summary:"Theta Aurigae is a binary star system in the constellation of Auriga. Its name is a Bayer designation that is Latinized from θ Aurigae, and abbreviated Theta Aur or θ Aur. This is a variable star with an apparent visual magnitude that varies from 2.62 to 2.70, which is bright enough to be seen with the naked eye.",wikipediaUrl:"https://en.wikipedia.org/wiki/Theta_Aurigae"},{id:"MAIA",appMag:3.87,specType:"B7III",evolStage:"Giant",massSolar:4.74,radiusSolar:6.61,ageGyr:.126,teffK:12550,summary:"Maia, designated 20 Tauri, is a star in the constellation of Taurus. It is a blue giant of spectral type B8 III, a chemically peculiar star.",wikipediaUrl:"https://en.wikipedia.org/wiki/Maia_(star)"},{id:"MARKAB",appMag:2.48,specType:"A0IV",evolStage:"Subgiant",massSolar:3.5,radiusSolar:4.62,ageGyr:.2,teffK:10100,summary:"Alpha Pegasi, formally named Markab, is the third-brightest star in the constellation of Pegasus and one of the four stars in the asterism known as the Great Square of Pegasus.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Pegasi"},{id:"MATAR",appMag:2.95,specType:"G8II+F0V",evolStage:"Bright Giant",massSolar:3.51,radiusSolar:24.51,ageGyr:.27,teffK:4970,summary:"Eta Pegasi or η Pegasi, formally named Matar, is a binary star in the constellation of Pegasus. The apparent visual magnitude of this star is +2.95, making it the fifth-brightest member of Pegasus. Based upon parallax measurements, the distance to this star is about 214 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Eta_Pegasi"},{id:"MEGREZ",appMag:3.32,specType:"A2Vn",evolStage:"Main Sequence",massSolar:2.062,radiusSolar:2.512,ageGyr:.414,teffK:6909,summary:"Megrez, also called Delta Ursae Majoris, is a star in the northern constellation of Ursa Major. With an apparent magnitude of +3.3, it is the dimmest of the seven stars in the Big Dipper asterism. Parallax measurements yield a distance estimate of 80.5 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Megrez"},{id:"MENKALINAN",appMag:1.9,specType:"A1IV-Vp",evolStage:"Subgiant",massSolar:2.3885,radiusSolar:2.762,ageGyr:.4,teffK:8985,summary:"Beta Aurigae is a binary star system in the northern constellation of Auriga. Its identifier is a Bayer designation that is Latinized from β Aurigae, and abbreviated Beta Aur or β Aur. This star has the official name Menkalinan, pronounced.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Aurigae"},{id:"MENKENT",appMag:2.05,specType:"K0-IIIb",evolStage:"Giant",massSolar:1.32,radiusSolar:10.96,teffK:4853,summary:"Theta Centauri is a single star in the southern constellation of Centaurus, the centaur. It has the official name Menkent, pronounced ; Theta Centauri is its Bayer designation, which is Latinized from θ Centauri and abbreviated Theta Cen or θ Cen.",wikipediaUrl:"https://en.wikipedia.org/wiki/Theta_Centauri"},{id:"MERAK",appMag:2.37,specType:"A1IVps",evolStage:"Subgiant",massSolar:2.7,radiusSolar:2.81,ageGyr:.39,teffK:9700,summary:"Merak, also called Beta Ursae Majoris, is a star in the northern constellation of Ursa Major.",wikipediaUrl:"https://en.wikipedia.org/wiki/Merak_(star)"},{id:"MEROPE",appMag:4.18,specType:"B6IV(e)",evolStage:"Subgiant",massSolar:4.25,radiusSolar:4.79,ageGyr:.212,teffK:14550,summary:"Merope, designated 23 Tauri, is a star in the constellation of Taurus and a member of the Pleiades star cluster. It is approximately 440 light-years (135 pc) away.",wikipediaUrl:"https://en.wikipedia.org/wiki/Merope_(star)"},{id:"MIAPLACIDUS",appMag:1.69,specType:"A1III-",evolStage:"Giant",massSolar:3.88,radiusSolar:5.82,ageGyr:.26,teffK:9150,summary:"Beta Carinae is the second-brightest star in the southern constellation of Carina. It has the official name Miaplacidus; Beta Carinae is the star's Bayer designation, which is Latinised from β Carinae and abbreviated Beta Car or β Car. With apparent magnitude of 1.69, it is one of the brightest stars in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Carinae"},{id:"MIMOSA",appMag:1.25,specType:"B0.5III",evolStage:"Giant",massSolar:16,radiusSolar:8.4,ageGyr:.01,teffK:27e3,summary:"Mimosa is the second-brightest object in the southern constellation of Crux, and the 20th-brightest star in the night sky. It has the Bayer designation β Crucis, which is Latinised to Beta Crucis and abbreviated Beta Cru or β Cru. Mimosa forms part of the prominent asterism called the Southern Cross.",wikipediaUrl:"https://en.wikipedia.org/wiki/Mimosa_(star)"},{id:"MIRACH",appMag:2.05,specType:"M0+IIIa",evolStage:"Giant",massSolar:2.49,radiusSolar:86.4,teffK:3762,summary:"Mirach is a prominent star in the northern constellation of Andromeda. It is pronounced and has the Bayer designation Beta Andromedae, which is Latinized from β Andromedae. This star is positioned northeast of the Great Square of Pegasus and is potentially visible to all observers north of latitude 54° S.",wikipediaUrl:"https://en.wikipedia.org/wiki/Mirach"},{id:"MIRZAM",appMag:1.97,specType:"B1II-III",evolStage:"Bright Giant",massSolar:13,radiusSolar:8.44,ageGyr:.0122,teffK:25180,summary:'Beta Canis Majoris is a star in the southern constellation of Canis Major, the "Great Dog". Its name is a Bayer designation; it has the proper name Mirzam, pronounced. Visible to the naked eye, this is a variable star that ranges in apparent visual magnitude from 1.97 to 2.01 over a period of six hours.',wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Canis_Majoris"},{id:"MIZAR",specType:"A2V",evolStage:"Main Sequence",massSolar:2.2224,radiusSolar:2.4,ageGyr:.37,teffK:9e3,summary:"Mizar is a second-magnitude star in the handle of the Big Dipper asterism in the constellation of Ursa Major. It has the Bayer designation ζ Ursae Majoris. It forms a well-known naked eye double star with the fainter star Alcor, and is itself a quadruple star system.",wikipediaUrl:"https://en.wikipedia.org/wiki/Mizar"},{id:"MUHLIFAIN",appMag:2.17,specType:"A1IV+",evolStage:"Subgiant",massSolar:2.8,radiusSolar:36.5,teffK:9300,summary:"Gamma Centauri is a binary star system in the southern constellation of Centaurus, which is probably part of a wider system together with Tau Centauri. The system is visible to the naked eye as a single point of light with a combined apparent visual magnitude of +2.17; individually they are third-magnitude stars.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Centauri"},{id:"MUPHRID",appMag:2.68,specType:"G0IV",evolStage:"Subgiant",massSolar:1.71,radiusSolar:2.659,ageGyr:2.7,teffK:6161,summary:"Eta Boötis is a candidate binary star system in the constellation of Boötes. Its name is a Bayer designation that is Latinized from η Boötis, and abbreviated Eta Boo or η Boo. This system is visible to the naked eye as a point of light with an apparent visual magnitude of 2.68.",wikipediaUrl:"https://en.wikipedia.org/wiki/Eta_Bo%C3%B6tis"},{id:"NEKKAR",appMag:3.52,specType:"G8IIIaFe-0.5",evolStage:"Giant",massSolar:3.23,radiusSolar:18.44,ageGyr:.32,teffK:4997,summary:"Beta Boötis is a star in the northern constellation of Boötes. Its name is a Bayer designation that is Latinized from β Boötis, and abbreviated Beta Boo or β Boo. The star has the official name Nekkar, pronounced, which is derived from an Arabic name for 'the Herdsman'.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Bo%C3%B6tis"},{id:"NUNKI",appMag:2.067,specType:"B2.5V",evolStage:"Main Sequence",massSolar:6.5,radiusSolar:4.1,ageGyr:.0314,teffK:18500,summary:"Sigma Sagittarii, Latinized from σ Sagittarii; formally named Nunki, is the second-brightest star in the constellation of Sagittarius. It is a binary star system, viewed as a single star of combined apparent magnitude +2.05, about the same brightness as Saiph in Orion.",wikipediaUrl:"https://en.wikipedia.org/wiki/Sigma_Sagittarii"},{id:"PEACOCK",appMag:1.918,specType:"B2IV",evolStage:"Subgiant",massSolar:5.91,radiusSolar:4.83,ageGyr:.048,teffK:17711,summary:"Alpha Pavonis, formally named Peacock, is a binary star in the southern constellation of Pavo, near the border with the constellation Telescopium.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Pavonis"},{id:"PHECDA",appMag:2.44,specType:"A0V",evolStage:"Main Sequence",massSolar:2.412,radiusSolar:3.385,ageGyr:.333,teffK:6751,summary:"Phecda, also called Gamma Ursae Majoris, is a star in the constellation of Ursa Major. Since 1943, the spectrum of this star has served as one of the stable anchor points by which other stars are classified.",wikipediaUrl:"https://en.wikipedia.org/wiki/Phecda"},{id:"PHERKAD",appMag:3.002,specType:"A2III",evolStage:"Giant",massSolar:4.8,radiusSolar:15,ageGyr:.1,teffK:8280,summary:'Pherkad, also known as Gamma Ursae Minoris or γ Ursae Minoris, abbreviated Gamma UMi, γ UMi, is a star in the northern constellation of Ursa Minor. Together with Beta Ursae Minoris (Kochab), it forms the end of the dipper pan of the "Little Dipper", which is an asterism forming the tail of the bear.',wikipediaUrl:"https://en.wikipedia.org/wiki/Pherkad"},{id:"PLEIONE",appMag:5.09,specType:"B8Vne",evolStage:"Main Sequence",massSolar:2.888,radiusSolar:4.17,ageGyr:.125,teffK:11058,summary:"Pleione is a binary star system in the Pleiades star cluster, within the constellation of Taurus. It has the variable star designation BU Tauri and the Flamsteed designation 28 Tauri.",wikipediaUrl:"https://en.wikipedia.org/wiki/Pleione_(star)"},{id:"POLARIS",appMag:1.98,specType:"F7Ib",evolStage:"Supergiant",massSolar:5.4,radiusSolar:37.5,ageGyr:.07,teffK:6015,summary:"Polaris is a yellow supergiant star in the northern circumpolar constellation of Ursa Minor. It is designated α Ursae Minoris and is commonly called the North Star. With an apparent magnitude that fluctuates around 1.98, it is the brightest star in the constellation and is readily visible to the naked eye at night.",wikipediaUrl:"https://en.wikipedia.org/wiki/Polaris"},{id:"POLLUX",appMag:1.14,specType:"K0III",evolStage:"Giant",massSolar:1.91,radiusSolar:8.8,ageGyr:.724,teffK:4666,summary:"Pollux is the brightest star in the constellation of Gemini. It has the Bayer designation β Geminorum, which is Latinised to Beta Geminorum and abbreviated Beta Gem or β Gem. This is an orange-hued, evolved red giant located at a distance of 34 light-years, making it the closest red giant to the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Pollux_(star)"},{id:"PORRIMA",appMag:2.74,specType:"F1-F2V",massSolar:1.429,radiusSolar:1.45,ageGyr:1.46,teffK:6922,summary:"Gamma Virginis, officially named Porrima, is a binary star system in the constellation of Virgo. It consists of two almost identical main sequence stars at a distance of about 38 light-years.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Virginis"},{id:"PRIMA_HYADUM",appMag:3.65,specType:"G9.5IIIabCN0.5",evolStage:"Giant",massSolar:2.7,radiusSolar:13.4,ageGyr:.43,teffK:4844,summary:'Gamma Tauri is either a solitary, binary or double star that marks the tip of the "V" in the constellation of Taurus. It is a member of, and located within about 2.5 parsecs of the center of, the Hyades star cluster, the nearest open cluster to the Sun.',wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Tauri"},{id:"PROCYON",appMag:.34,specType:"F5IV-V",evolStage:"Subgiant",massSolar:1.499,radiusSolar:2.048,ageGyr:1.87,teffK:6530,summary:"Procyon is the brightest star in the constellation of Canis Minor and usually the eighth-brightest star in the night sky, with an apparent visual magnitude of 0.34. It has the Bayer designation α Canis Minoris, which is Latinized to Alpha Canis Minoris, and abbreviated α CMi or Alpha CMi, respectively.",wikipediaUrl:"https://en.wikipedia.org/wiki/Procyon"},{id:"RASALGETHI",appMag:-2.3,specType:"M5Ib-II+G5III+F2V:",evolStage:"Red Supergiant",massSolar:2.5,radiusSolar:264,teffK:3155,summary:"Alpha Herculis, also designated Rasalgethi and 64 Herculis, is a multiple star system in the constellation of Hercules. Appearing as a single point of light to the naked eye, it is resolvable into a number of components through a telescope.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Herculis"},{id:"RASALHAGUE",appMag:2.07,specType:"A5IVnn",evolStage:"Subgiant",massSolar:2.2,radiusSolar:2.858,ageGyr:.77,teffK:7569,summary:"Alpha Ophiuchi, also named Rasalhague, is a binary star and the brightest star in the constellation of Ophiuchus. Five degrees west-north-west of Rasalhague lies Rasalgethi, one of the brightest stars in the nearby constellation Hercules.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Ophiuchi"},{id:"RASTABAN",appMag:2.81,specType:"G2Ib-IIa",evolStage:"Supergiant",massSolar:6,radiusSolar:40,ageGyr:.065,teffK:5160,summary:"Beta Draconis is a binary star system and the third-brightest star in the northern circumpolar constellation of Draco. The two components are designated Beta Draconis A and B respectively. With a combined apparent visual magnitude of 2.79, it is bright enough to be easily seen with the naked eye.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Draconis"},{id:"REGULUS",appMag:1.4,specType:"B8IV",evolStage:"Subgiant",massSolar:3.8,radiusSolar:4.35,ageGyr:1,teffK:12460,summary:"Regulus is the brightest object in the constellation Leo and one of the brightest stars in the night sky. It has the Bayer designation designated α Leonis, which is Latinized to Alpha Leonis, and abbreviated Alpha Leo or α Leo.",wikipediaUrl:"https://en.wikipedia.org/wiki/Regulus"},{id:"ROSS_128",appMag:11.153,specType:"dM4",massSolar:.176,radiusSolar:.198,ageGyr:5,teffK:3189,summary:"Ross 128 is a red dwarf star in the equatorial zodiac constellation of Virgo, near β Virginis. The apparent magnitude of Ross 128 is 11.13, which is too faint to be seen with the unaided eye.",wikipediaUrl:"https://en.wikipedia.org/wiki/Ross_128"},{id:"ROSS_154",appMag:10.495,specType:"M3.5Ve",evolStage:"Main Sequence",massSolar:.177,radiusSolar:.2,ageGyr:1,teffK:3248,summary:"Ross 154 is a red dwarf star in the southern zodiac constellation of Sagittarius. It has an apparent visual magnitude of 10.44, making it much too faint to be seen with the naked eye. At a minimum, viewing Ross 154 requires a telescope with an aperture of 6.5 cm (3 in) under ideal conditions.",wikipediaUrl:"https://en.wikipedia.org/wiki/Ross_154"},{id:"ROSS_248",appMag:12.28,specType:"M5.0V",evolStage:"Main Sequence",massSolar:.145,radiusSolar:.19,ageGyr:2.6,teffK:2930,summary:"Ross 248, also called HH Andromedae or Gliese 905, is a red dwarf star approximately 10.30 light-years from Earth in the northern constellation of Andromeda. Despite its proximity it is too dim to be seen with the naked eye.",wikipediaUrl:"https://en.wikipedia.org/wiki/Ross_248"},{id:"RUCHBAH",appMag:2.68,specType:"A5IV",evolStage:"Subgiant",massSolar:2.49,radiusSolar:3.9,ageGyr:.6,teffK:7980,summary:"Delta Cassiopeiae is an eclipsing binary star system in the northern circumpolar constellation of Cassiopeia. Its name is a Bayer designation that is Latinized from δ Cassiopeiae, and abbreviated Delta Cas or δ Cas.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Cassiopeiae"},{id:"SABIK",appMag:2.42,specType:"A2IV-V",evolStage:"Subgiant",massSolar:2.25,radiusSolar:2.5,ageGyr:.5,teffK:9e3,summary:"Eta Ophiuchi is a binary star in the constellation of Ophiuchus. Its name is a Bayer designation that is Latinized from η Ophiuchi, and abbreviated Eta Oph or η Oph. With a combined apparent magnitude of +2.43, it is the second-brightest of the constellation and one of the brightest stars in the night sky.",wikipediaUrl:"https://en.wikipedia.org/wiki/Eta_Ophiuchi"},{id:"SARIN",appMag:3.13,specType:"A1IVn",evolStage:"Subgiant",massSolar:2.4,radiusSolar:2.2,ageGyr:.37,teffK:9620,summary:"Delta Herculis is a spectroscopic binary in the constellation of Hercules. Its light produces to us apparent magnitude 3.12, as such the third-brightest star in the large, fairly dim constellation. Based on parallax measurement taken during the Hipparcos mission, it is approximately 23.1 parsecs from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Herculis"},{id:"SCHEAT",appMag:2.42,specType:"M2.5II-III",evolStage:"Bright Giant",massSolar:1.7,radiusSolar:109,teffK:3606,summary:"Beta Pegasi, formally named Scheat, is a red giant star and the second-brightest star in the constellation of Pegasus. It forms the upper right corner of the Great Square of Pegasus, a prominent rectangular asterism.",wikipediaUrl:"https://en.wikipedia.org/wiki/Beta_Pegasi"},{id:"SCHEDAR",appMag:2.23,specType:"K0-IIIa",evolStage:"Giant",massSolar:4.98,radiusSolar:42.15,ageGyr:.22,teffK:4625,summary:"Alpha Cassiopeiae is a star in the northern constellation of Cassiopeia. It has the proper name Schedar, pronounced ); Alpha Cassiopeiae is its Bayer designation, which is Latinized from α Cassiopeiae and abbreviated Alpha Cas or α Cas.",wikipediaUrl:"https://en.wikipedia.org/wiki/Alpha_Cassiopeiae"},{id:"SEGIN",appMag:3.37,specType:"B3Vp_sh",evolStage:"Main Sequence",massSolar:9.2,radiusSolar:6.1,ageGyr:.0154,teffK:15174,summary:"Epsilon Cassiopeiae is a single star in the northern constellation of Cassiopeia. It has the proper name Segin, pronounced ; Epsilon Cassiopeiae is the Bayer designation, which is Latinized from ε Cassiopeiae and abbreviated Epsilon Cas or ε Cas.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Cassiopeiae"},{id:"SEGINUS",appMag:3.02,specType:"A7IV+(n)",evolStage:"Subgiant",massSolar:2.1,radiusSolar:4.03,ageGyr:.9,teffK:7800,summary:"Gamma Boötis is a binary star system in the northern constellation of Boötes the herdsman, forming the left shoulder of this asterism. Its name is a Bayer designation that is Latinised from γ Boötis, and abbreviated Gamma Boo or γ Boo.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Bo%C3%B6tis"},{id:"SIGMA_DRACONIS",appMag:4.68,specType:"K0V",evolStage:"Main Sequence",massSolar:.84,radiusSolar:.772,ageGyr:4.54,teffK:5255,summary:"Sigma Draconis is a single star in the northern constellation of Draco. It has the proper name Alsafi, while Sigma Draconis, which is latinised from σ Draconis and abbreviated Sig Dra or σ Dra, is the Bayer designation.",wikipediaUrl:"https://en.wikipedia.org/wiki/Sigma_Draconis"},{id:"SIRIUS",appMag:-1.46,specType:"A1V",evolStage:"Main Sequence",massSolar:2.063,radiusSolar:1.711,ageGyr:.242,teffK:9940,summary:"Sirius is the brightest star in the night sky, located in the southern constellation of Canis Major. Its name is derived from the Greek word Σείριος. The star is designated α Canis Majoris, Latinized to Alpha Canis Majoris, and abbreviated α CMa or Alpha CMa.",wikipediaUrl:"https://en.wikipedia.org/wiki/Sirius"},{id:"SKAT",appMag:3.28,specType:"A3Vp",evolStage:"Main Sequence",massSolar:3.19,radiusSolar:4.16,ageGyr:.3,teffK:8650,summary:"Delta Aquarii is a binary star system in the constellation of Aquarius. Its identifier is a Bayer designation that is Latinized from δ Aquarii, and abbreviated Delta Aqr or δ Aqr, respectively. This system has the official name Skat, pronounced.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Aquarii"},{id:"SOL",appMag:-26.74,specType:"G2V",evolStage:"Main Sequence",massSolar:1,radiusSolar:1,ageGyr:4.6,teffK:5778,summary:"The Sun is the star located at the centre of the Solar System. It is a massive sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies.",wikipediaUrl:"https://en.wikipedia.org/wiki/Sun"},{id:"SPICA",appMag:.97,specType:"B1III-IV",evolStage:"Giant",massSolar:11.43,radiusSolar:7.47,ageGyr:.0125,teffK:22400,summary:"Spica is the brightest object in the constellation of Virgo and one of the 20 brightest stars in the night sky. It has the Bayer designation α Virginis, which is Latinised to Alpha Virginis and abbreviated Alpha Vir or α Vir. Analysis of its parallax shows that it is located 250±10 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Spica"},{id:"STRUVE_2398",massSolar:.33,radiusSolar:.351,ageGyr:6.2,teffK:3433,summary:"Struve 2398 is a binary star system in the northern constellation of Draco. Struve 2398 is star number 2398 in the Struve Double Star Catalog of Russian-German astronomer Friedrich Georg Wilhelm von Struve.",wikipediaUrl:"https://en.wikipedia.org/wiki/Struve_2398"},{id:"TAU_CETI",appMag:3.5,specType:"G8V",evolStage:"Main Sequence",massSolar:.783,radiusSolar:.793,ageGyr:5.8,teffK:5344,summary:"Tau Ceti is a single star in the constellation Cetus. Its name is a Bayer designation that is Latinized from τ Ceti, and abbreviated Tau Cet or τ Cet. Spectrally, this star is similar to the Sun, although it has only about 78% of the Sun's mass.",wikipediaUrl:"https://en.wikipedia.org/wiki/Tau_Ceti"},{id:"TAYGETA",appMag:4.3,specType:"B6IV",evolStage:"Subgiant",massSolar:4.41,radiusSolar:4.36,ageGyr:.00441,teffK:13696,summary:"Taygeta is a double star in the constellation of Taurus and a member of the Pleiades open star cluster (M45).",wikipediaUrl:"https://en.wikipedia.org/wiki/Taygeta"},{id:"TEEGARDEN_S_STAR",appMag:15.14,specType:"M7V",evolStage:"Main Sequence",massSolar:.097,radiusSolar:.107,ageGyr:8,teffK:2904,summary:"Teegarden's Star is an M-type red dwarf star in the constellation Aries, 12.5 light-years from the Solar System. Although it is near Earth it is a dim magnitude 15 and can only be seen through large telescopes. This star was found to have a very large proper motion of about 5 arcseconds per year.",wikipediaUrl:"https://en.wikipedia.org/wiki/Teegarden's_Star"},{id:"THUBAN",appMag:3.68,specType:"A0III",evolStage:"Giant",massSolar:3.186,radiusSolar:4.932,ageGyr:.28,teffK:10225,summary:"Thuban, with Bayer designation Alpha Draconis or α Draconis, is a binary star system in the northern constellation of Draco. A relatively inconspicuous star in the night sky of the Northern Hemisphere, it is historically significant as having been the north pole star from the 4th to 2nd millennium BC.",wikipediaUrl:"https://en.wikipedia.org/wiki/Thuban"},{id:"TOI_700",appMag:13.08,specType:"M2V",evolStage:"Main Sequence",massSolar:.416,radiusSolar:.42,ageGyr:1.5,teffK:3480,summary:"TOI-700 is a red dwarf 101.4 light-years away from Earth located in the Dorado constellation that hosts TOI-700 d, the first Earth-sized exoplanet in the habitable zone discovered by the Transiting Exoplanet Survey Satellite (TESS).",wikipediaUrl:"https://en.wikipedia.org/wiki/TOI-700"},{id:"TRAPPIST_1",appMag:18.8,specType:"M8V",evolStage:"Main Sequence",massSolar:.0898,radiusSolar:.1192,ageGyr:7.6,teffK:2566,summary:"TRAPPIST-1 is a red dwarf star with seven known planets. It lies in the constellation Aquarius approximately 40.66 light-years (12.47 pc) away from Earth. An ultra-cool dwarf, it has a surface temperature of about 2,566 K. Its radius is slightly larger than Jupiter's and it has a mass of about 9% of the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/TRAPPIST-1"},{id:"UPSILON_ANDROMEDAE",appMag:4.1,specType:"F9V",evolStage:"Main Sequence",massSolar:1.23,radiusSolar:1.57,ageGyr:4.02,teffK:6614,summary:"Upsilon Andromedae is a binary star located 44 light-years from Earth in the constellation of Andromeda. The system consists of an F-type main-sequence star and a smaller red dwarf.",wikipediaUrl:"https://en.wikipedia.org/wiki/Upsilon_Andromedae"},{id:"VEGA",appMag:.03,specType:"A0V",evolStage:"Main Sequence",massSolar:2.135,radiusSolar:2.362,ageGyr:.455,teffK:9602,summary:"Vega is the brightest star in the northern constellation of Lyra. It has the Bayer designation α Lyrae, which is Latinised to Alpha Lyrae and abbreviated Alpha Lyr or α Lyr.",wikipediaUrl:"https://en.wikipedia.org/wiki/Vega"},{id:"VINDEMIATRIX",appMag:2.79,specType:"G8III-IIIb",evolStage:"Giant",massSolar:2.72,radiusSolar:11.98,ageGyr:.562,teffK:5020,summary:"Epsilon Virginis, formally named Vindemiatrix, is a star in the zodiac constellation of Virgo. The apparent visual magnitude of this star is +2.8, making it the third-brightest member of Virgo.",wikipediaUrl:"https://en.wikipedia.org/wiki/Epsilon_Virginis"},{id:"WASAT",appMag:3.53,specType:"F2VkF0mF0",evolStage:"Main Sequence",massSolar:1.57,radiusSolar:2.06,ageGyr:1.6,teffK:6900,summary:"Delta Geminorum, formally named Wasat, is a binary star system in the constellation of Gemini.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Geminorum"},{id:"WISE_0855_0714",appMag:26.54,specType:"Y2",ageGyr:3.15,teffK:276,summary:"WISE 0855−0714 is a brown dwarf of spectral class Y4, located 7.4 light-years from the Sun in the constellation Hydra. It is the fourth-closest stellar or substellar system to the Sun and was discovered by Kevin Luhman in 2013 using data from the Wide-field Infrared Survey Explorer (WISE).",wikipediaUrl:"https://en.wikipedia.org/wiki/WISE_0855%E2%88%920714"},{id:"WOLF_1061",appMag:10.072,specType:"M3V",evolStage:"Main Sequence",massSolar:.304,radiusSolar:.319,teffK:3307,summary:"Wolf 1061 is an M-class red dwarf star located about 14.1 light-years away in the constellation Ophiuchus. It is the 36th-closest-known star system to the Sun and has a relatively high proper motion of 1.2 seconds of arc per year. Wolf 1061 does not have any unusual spectroscopic features.",wikipediaUrl:"https://en.wikipedia.org/wiki/Wolf_1061"},{id:"WOLF_359",appMag:13.54,specType:"M6.5V",evolStage:"Main Sequence",massSolar:.11,radiusSolar:.144,ageGyr:.25,teffK:2749,summary:"Wolf 359 is a red dwarf star located in the constellation Leo, near the ecliptic. At a distance of 7.86 light-years from Earth, it has an apparent magnitude of 13.54 and can only be seen with a large telescope.",wikipediaUrl:"https://en.wikipedia.org/wiki/Wolf_359"},{id:"ZAURAK",appMag:2.94,specType:"M0III-IIIb",evolStage:"Giant",massSolar:1.55,radiusSolar:58.7,teffK:3779,summary:"Gamma Eridani, formally named Zaurak, is a variable star in the constellation of Eridanus. It is visible to the naked eye with an apparent visual magnitude that varies around 2.9, and lies at a distance of about 203 light years from the Sun, as determined by the Hipparcos astrometry satellite.",wikipediaUrl:"https://en.wikipedia.org/wiki/Gamma_Eridani"},{id:"ZOSMA",appMag:2.53,specType:"A5IV(n)",evolStage:"Subgiant",massSolar:2.2,ageGyr:.6,teffK:8296,summary:"Delta Leonis, also named Zosma, is a star in the zodiac constellation of Leo. Based upon parallax measurements, it lies at a distance of about 58.4 light-years from the Sun.",wikipediaUrl:"https://en.wikipedia.org/wiki/Delta_Leonis"}],F4=new Map(k4.map(n=>[n.id,n]));function O4(n){return F4.get(n)??{id:n}}function B4(n){const e=Math.min(4e4,Math.max(1500,n))/100;let t,i,a;e<=66?(t=255,i=99.4708025861*Math.log(e)-161.1195681661):(t=329.698727446*Math.pow(e-60,-.1332047592),i=288.1221695283*Math.pow(e-60,-.0755148492)),e>=66?a=255:e<=19?a=0:a=138.5177312231*Math.log(e-10)-305.0447927307;const s=r=>Math.min(255,Math.max(0,r))/255;return[s(t),s(i),s(a)]}const z4={O:3e4,B:15e3,A:8500,F:6500,G:5600,K:4200,M:3200,L:1800,T:1300,Y:600};function ju(n){if(!n)return;const e=n.trim().toUpperCase().match(/[OBAFGKMLTY]/);return e?z4[e[0]]:void 0}const G4={"white dwarf":1.4,subdwarf:1.55,"main sequence":1.8,subgiant:2.2,giant:2.6,"bright giant":2.9,supergiant:3.15,"red supergiant":3.15},H4=1.8,V4=.95;function W4(n){const e=n&&G4[n.toLowerCase()]||H4,t=e+2*V4;return{canvasEm:t,discRadius:e/t}}function K4(n){let e=0;for(let t=0;t<n.length;t++)e=e*31+n.charCodeAt(t)>>>0;return e%1e3/1e3}var X4=St('<canvas class="star-badge svelte-1mvj1zy" aria-hidden="true"></canvas>');function q4(n,e){Tr(e,!0);let t,i;const a=ti(()=>B4(e.teffK??ju(e.specType)??5800)),s=ti(()=>W4(e.evolStage)),r=`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position.xy, 0.0, 1.0);
		}
	`,o=`
		precision highp float;
		varying vec2 vUv;
		uniform float uTime;
		uniform vec3  uColor;
		uniform float uDiscRadius;
		uniform float uSeed;

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
			float band = exp(-pow((dC - lr) / (lr * 0.34), 2.0));
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
			float thF = 1.98; // foot angle from apex (circle meets the limb)
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

			// --- corona / fake bloom (scaled to the corona room, not the disc) ---
			float falloff = (r - uDiscRadius) / (room * 0.5);
			float glow = exp(-max(falloff, 0.0)) * edge;
			vec3 glowCol = mix(baseCol, vec3(1.0), 0.25) * glow * 0.9;

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
			float alpha = clamp(max(disc, glow * 0.85 + flame), 0.0, 1.0);

			col = pow(max(col, 0.0), vec3(0.9)); // a touch of punch
			gl_FragColor = vec4(col, alpha);
		}
	`;gl(()=>{let c;try{c=new Iu({canvas:t,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch{return}c.setPixelRatio(Math.min(window.devicePixelRatio,2));const h=t.getBoundingClientRect();c.setSize(h.width||38,h.height||38,!1),c.setClearColor(0,0);const u=new Lu,d=new Dl(-1,1,1,-1,0,1),m=new Ka(2,2);i=new yt({vertexShader:r,fragmentShader:o,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new R(T(a)[0],T(a)[1],T(a)[2])},uDiscRadius:{value:T(s).discRadius},uSeed:{value:K4(`${e.specType??""}|${e.evolStage??""}|${e.teffK??""}`)}}});const g=new Gt(m,i);u.add(g);let v=0;const p=performance.now(),f=()=>{i.uniforms.uTime.value=(performance.now()-p)*.001,c.render(u,d),v=requestAnimationFrame(f)};return v=requestAnimationFrame(f),()=>{cancelAnimationFrame(v),m.dispose(),i.dispose(),i=void 0,c.dispose(),c.forceContextLoss()}}),pi(()=>{const c=T(a),h=T(s).discRadius;i&&(i.uniforms.uColor.value.set(c[0],c[1],c[2]),i.uniforms.uDiscRadius.value=h)});var l=X4();fs(l,c=>t=c,()=>t),vt(()=>qn(l,`width:${T(s).canvasEm??""}em; height:${T(s).canvasEm??""}em`)),at(n,l),wr()}const Th=662607015e-42,xo=299792458,Y4=1380649e-29;function j4(n,e){const t=n*1e-9,i=2*Th*xo*xo/Math.pow(t,5),a=Th*xo/(t*Y4*e);return i/Math.expm1(a)}const $4=2897771955e-3;function Z4(n){const e=$4/n;return[.4*e,4*e]}const J4=380,Q4=700,wh=[78,36,116],Ph=[122,18,18];function e5(n){let e=0,t=0,i=0;n<440?(e=-(n-440)/60,i=1):n<490?(t=(n-440)/50,i=1):n<510?(t=1,i=-(n-510)/20):n<580?(e=(n-510)/70,t=1):n<645?(e=1,t=-(n-645)/65):e=1;let a=1;n<420&&(a=.35+.65*((n-380)/40));const s=.8;return[255*Math.pow(e*a,s),255*Math.pow(t*a,s),255*Math.pow(i*a,s)]}const Mo=350,Dh=410,bo=660,Ch=760,Rh=n=>n<0?0:n>1?1:n;function Ih(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t]}function t5(n){if(n<=Mo)return wh;if(n>=Ch)return Ph;const e=e5(Math.min(Q4,Math.max(J4,n)));return n<Dh?Ih(wh,e,Rh((n-Mo)/(Dh-Mo))):n>bo?Ih(e,Ph,Rh((n-bo)/(Ch-bo))):e}function i5(n){const e=n/5,t=Math.pow(10,Math.floor(Math.log10(e))),i=e/t;return(i<1.5?1:i<3?2:i<7?5:10)*t}var n5=St('<div class="spectrum-chart svelte-nth41w" role="img"><canvas aria-hidden="true" class="svelte-nth41w"></canvas></div>');function a5(n,e){Tr(e,!0);const t=ti(()=>e.teffK??ju(e.specType));let i=Pt(void 0);function a(l){const c=T(i);if(!c)return;const h=c.getContext("2d");if(!h)return;const u=Math.min(window.devicePixelRatio||1,2),d=c.clientWidth,m=c.clientHeight,g=Math.max(1,Math.round(d*u)),v=Math.max(1,Math.round(m*u));if(c.width=g,c.height=v,h.clearRect(0,0,g,v),!l||!d||!m)return;const p=Math.round(9*u),f=Math.round(6*u),x=Math.round(11*u),_=p,E=g-p,U=v-x,P=E-_,w=U-f;if(P<=2||w<=1)return;const[k,q]=Z4(l),y=q-k,M=P,W=new Float64Array(M);let K=0;for(let de=0;de<M;de++){const Oe=k+y*(de/(M-1)),Ue=j4(Oe,l);W[de]=Ue,Ue>K&&(K=Ue)}if(K<=0)return;for(let de=0;de<M;de++){const Oe=k+y*(de/(M-1)),Ue=W[de]/K*w,[I,D,B]=t5(Oe);h.fillStyle=`rgb(${I|0},${D|0},${B|0})`,h.fillRect(_+de,U-Ue,1,Ue)}h.beginPath();for(let de=0;de<M;de++){const Oe=U-W[de]/K*w;de===0?h.moveTo(_+de,Oe):h.lineTo(_+de,Oe)}h.strokeStyle="rgba(225,233,240,0.6)",h.lineWidth=Math.max(1,u*.9),h.stroke();const Y="rgba(120,145,162,0.85)",te=Math.max(1,Math.round(u)),z=Math.round(4*u);h.strokeStyle=Y,h.fillStyle=Y,h.lineWidth=te;const ae=E+Math.round(6*u);h.beginPath(),h.moveTo(_,U+.5),h.lineTo(ae,U+.5),h.stroke(),h.beginPath(),h.moveTo(ae,U),h.lineTo(ae-z*1.6,U-z),h.lineTo(ae-z*1.6,U+z),h.closePath(),h.fill();const V=f-Math.round(3*u);h.beginPath(),h.moveTo(_+.5,U),h.lineTo(_+.5,V),h.stroke(),h.beginPath(),h.moveTo(_,V),h.lineTo(_-z,V+z*1.6),h.lineTo(_+z,V+z*1.6),h.closePath(),h.fill(),h.font=`${Math.round(7*u)}px "JetBrains Mono", monospace`,h.textBaseline="top",h.textAlign="center";const ue=i5(y),pe=de=>_+(de-k)/y*P;for(let de=Math.ceil(k/ue)*ue;de<=q;de+=ue){const Oe=Math.round(pe(de));if(Oe>ae-z)break;h.fillStyle="rgba(93,118,137,0.85)",h.fillRect(Oe,U+te,te,Math.round(3*u)),h.fillStyle="rgba(120,145,162,0.95)",h.fillText(String(Math.round(de)),Oe,U+Math.round(4*u))}}gl(()=>{let l=0;const c=()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>a(T(t)))},h=new ResizeObserver(c);return h.observe(T(i)),c(),()=>{cancelAnimationFrame(l),h.disconnect()}}),pi(()=>{const l=T(t);requestAnimationFrame(()=>a(l))});var s=Nh(),r=$n(s);{var o=l=>{var c=n5(),h=ne(c);fs(h,u=>Ge(i,u),()=>T(i)),ee(c),vt(u=>nt(c,"aria-label",u),[()=>`Idealised black-body emission spectrum for an effective temperature of about ${Math.round(T(t))} kelvin, plotted against wavelength in nanometres`]),at(l,c)};Dt(r,l=>{T(t)&&l(o)})}at(n,s),wr()}Gd();function Lh(n,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?n.style.fontSize=e.replace("x","em"):n.style.fontSize=""}function s5(n,e,t,i,a,s=1,r="",o=""){let l=1,c=1;a&&(a=="horizontal"?l=-1:a=="vertical"?c=-1:l=c=-1),typeof n=="string"&&(n=parseFloat(n)),typeof e=="string"&&(e=parseFloat(e)),typeof t=="string"&&(t=parseFloat(t));const h=`${e*s}${r}`,u=`${t*s}${r}`;let d=`translate(${h},${u}) scale(${l*n},${c*n})`;return i&&(d+=` rotate(${i}${o})`),d}var r5=Rn('<title class="svelte-q6zoq1"> </title>'),o5=Rn('<path class="svelte-q6zoq1"></path>'),l5=Rn('<path class="svelte-q6zoq1"></path><path class="svelte-q6zoq1"></path>',1),c5=Rn('<svg role="img" xmlns="http://www.w3.org/2000/svg"><!><g class="svelte-q6zoq1"><g class="svelte-q6zoq1"><!></g></g></svg>');function Ea(n,e){Tr(e,!1);const t=lr(),i=lr();let a=Ut(e,"class",24,()=>{}),s=Ut(e,"id",24,()=>{}),r=Ut(e,"style",24,()=>{}),o=Ut(e,"icon",8),l=Ut(e,"title",24,()=>{}),c=Ut(e,"size",24,()=>{}),h=Ut(e,"color",24,()=>{}),u=Ut(e,"fw",8,!1),d=Ut(e,"pull",24,()=>{}),m=Ut(e,"scale",8,1),g=Ut(e,"translateX",8,0),v=Ut(e,"translateY",8,0),p=Ut(e,"rotate",24,()=>{}),f=Ut(e,"flip",24,()=>{}),x=Ut(e,"spin",8,!1),_=Ut(e,"pulse",8,!1),E=Ut(e,"primaryColor",8,""),U=Ut(e,"secondaryColor",8,""),P=Ut(e,"primaryOpacity",8,1),w=Ut(e,"secondaryOpacity",8,.4),k=Ut(e,"swapOpacity",8,!1),q=lr();Or(()=>(T(q),An(c()),Lh),()=>{T(q)&&c()&&Lh(T(q),c())}),Or(()=>An(o()),()=>{Ge(t,o()&&o().icon||[0,0,"",[],""])}),Or(()=>(An(m()),An(g()),An(v()),An(p()),An(f())),()=>{Ge(i,s5(m(),g(),v(),p(),f(),512))}),Hd(),up();var y=Nh(),M=$n(y);{var W=K=>{var Y=c5();let te;var z=ne(Y);{var ae=Ue=>{var I=r5(),D=ne(I,!0);ee(I),vt(()=>rt(D,l())),at(Ue,I)};Dt(z,Ue=>{l()&&Ue(ae)})}var V=le(z),ue=ne(V),pe=ne(ue);{var de=Ue=>{var I=o5();vt(()=>{nt(I,"d",(T(t),Ot(()=>T(t)[4]))),nt(I,"fill",h()||E()||"currentColor"),nt(I,"transform",`translate(${T(t),Ot(()=>T(t)[0]/-2)??""} ${T(t),Ot(()=>T(t)[1]/-2)??""})`)}),at(Ue,I)},Oe=Ue=>{var I=l5(),D=$n(I),B=le(D);vt(()=>{nt(D,"d",(T(t),Ot(()=>T(t)[4][0]))),nt(D,"fill",U()||h()||"currentColor"),nt(D,"fill-opacity",k()!=!1?P():w()),nt(D,"transform",`translate(${T(t),Ot(()=>T(t)[0]/-2)??""} ${T(t),Ot(()=>T(t)[1]/-2)??""})`),nt(B,"d",(T(t),Ot(()=>T(t)[4][1]))),nt(B,"fill",E()||h()||"currentColor"),nt(B,"fill-opacity",k()!=!1?w():P()),nt(B,"transform",`translate(${T(t),Ot(()=>T(t)[0]/-2)??""} ${T(t),Ot(()=>T(t)[1]/-2)??""})`)}),at(Ue,I)};Dt(pe,Ue=>{T(t),Ot(()=>typeof T(t)[4]=="string")?Ue(de):Ue(Oe,-1)})}ee(ue),ee(V),ee(Y),fs(Y,Ue=>Ge(q,Ue),()=>T(q)),vt(()=>{nt(Y,"id",s()),te=rn(Y,0,`svelte-fa svelte-fa-base ${a()??""}`,"svelte-q6zoq1",te,{pulse:_(),"svelte-fa-size-lg":c()==="lg","svelte-fa-size-sm":c()==="sm","svelte-fa-size-xs":c()==="xs","svelte-fa-fw":u(),"svelte-fa-pull-left":d()==="left","svelte-fa-pull-right":d()==="right",spin:x()}),qn(Y,r()),nt(Y,"viewBox",`0 0 ${T(t),Ot(()=>T(t)[0])??""} ${T(t),Ot(()=>T(t)[1])??""}`),nt(Y,"aria-hidden",l()===void 0),nt(V,"transform",`translate(${T(t),Ot(()=>T(t)[0]/2)??""} ${T(t),Ot(()=>T(t)[1]/2)??""})`),nt(V,"transform-origin",`${T(t),Ot(()=>T(t)[0]/4)??""} 0`),nt(ue,"transform",T(i))}),at(K,Y)};Dt(M,K=>{T(t),Ot(()=>T(t)[4])&&K(W)})}at(n,y),wr()}/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var h5={prefix:"fas",iconName:"share-nodes",icon:[512,512,["share-alt"],"f1e0","M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z"]},u5={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0-10.4-31.2C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},Uh={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]};/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var d5={prefix:"far",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zm230.7 89.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L211.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"]},p5={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]};/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var f5={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},m5=St('<link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-1uha8ag"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" class="svelte-1uha8ag"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400;500;700&amp;display=swap" rel="stylesheet" class="svelte-1uha8ag"/>',1),g5=Rn('<g><circle class="ring svelte-1uha8ag" r="5"></circle><polyline class="svelte-1uha8ag"></polyline></g>'),v5=St('<div><span class="name svelte-1uha8ag"> </span></div>'),_5=Rn('<line class="svelte-1uha8ag"></line>'),y5=St('<div class="travel-tick-label svelte-1uha8ag"> </div>'),S5=St('<svg class="travel-ticks svelte-1uha8ag" aria-hidden="true"></svg> <div class="travel-tick-labels svelte-1uha8ag"></div>',1),x5=St('<li role="option"> </li>'),M5=St('<ul class="search-results svelte-1uha8ag" role="listbox" aria-label="Search results"></ul>'),b5=St('<div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Class</span><b class="mono-tight svelte-1uha8ag"> </b></div>'),E5=St('<div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Mass</span><b class="svelte-1uha8ag"> </b></div>'),A5=St('<div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Radius</span><b class="svelte-1uha8ag"> </b></div>'),T5=St('<div class="rule-thin svelte-1uha8ag" aria-hidden="true"></div> <!> <!> <!> <button class="info-btn svelte-1uha8ag" type="button"><span class="ico svelte-1uha8ag" aria-hidden="true">i</span>Star Info</button>',1),w5=St('<button type="button"> </button>'),P5=St('<div class="travel-readout svelte-1uha8ag"><div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Distance</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Ship Time</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Earth Time</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Peak v</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Fuel Mass</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-row svelte-1uha8ag"><span class="svelte-1uha8ag">Energy</span><b class="svelte-1uha8ag"> </b></div> <div class="travel-foot svelte-1uha8ag">Payload 1,000 t · photonic drive (vₑ = c)</div></div> <div class="overlay-slider svelte-1uha8ag"><div class="slider-head svelte-1uha8ag"><span class="slider-label svelte-1uha8ag">Constant Accel</span> <span class="slider-value svelte-1uha8ag"> </span></div> <input type="range" min="0.1" max="5" step="0.1" aria-label="Constant proper acceleration in g" class="svelte-1uha8ag"/> <div class="slider-ticks svelte-1uha8ag" aria-hidden="true"><span class="svelte-1uha8ag">0.1</span><span class="svelte-1uha8ag">1</span><span class="svelte-1uha8ag">5</span></div></div> <div class="accel-buttons svelte-1uha8ag" role="group" aria-label="Constant proper acceleration"></div>',1),D5=Rn('<line y1="4" y2="10" class="minor svelte-1uha8ag"></line>'),C5=Rn('<line y1="1" y2="13" class="major svelte-1uha8ag"></line>'),R5=St('<b class="svelte-1uha8ag"> </b>'),I5=St('<b class="svelte-1uha8ag"> </b>'),L5=St('<aside class="hud scale-legend svelte-1uha8ag" aria-label="Grid scale legend"><div class="scale-title svelte-1uha8ag">Grid Scale</div> <svg class="scale-bar svelte-1uha8ag" preserveAspectRatio="none" aria-hidden="true"><defs class="svelte-1uha8ag"><clipPath id="scaleBarClip" class="svelte-1uha8ag"><rect x="0" y="0" height="14" class="svelte-1uha8ag"></rect></clipPath></defs><g clip-path="url(#scaleBarClip)" class="svelte-1uha8ag"><line x1="0" y1="7" y2="7" class="baseline svelte-1uha8ag"></line><g class="minor-ticks svelte-1uha8ag"></g><g class="major-caps svelte-1uha8ag"></g></g></svg> <div class="scale-rows svelte-1uha8ag"><div class="scale-row major svelte-1uha8ag"><span class="dot svelte-1uha8ag"></span><span class="lbl svelte-1uha8ag">Major</span> <!></div> <div class="scale-row minor svelte-1uha8ag"><span class="dot minor-dot svelte-1uha8ag"></span> <span class="lbl svelte-1uha8ag">Minor</span> <!></div></div></aside>'),U5=St('<div class="overlay svelte-1uha8ag"><div class="boot svelte-1uha8ag"><div class="boot-label svelte-1uha8ag">Initialising Stellar Catalogue</div> <div class="boot-bar svelte-1uha8ag"><span class="svelte-1uha8ag"></span></div> <div class="boot-sub svelte-1uha8ag">Gaia DR3 · All-Sky Astrometry</div></div></div>'),N5=St('<div class="overlay svelte-1uha8ag"><div class="boot err svelte-1uha8ag"><div class="boot-label svelte-1uha8ag">Catalogue Load Failed</div> <div class="boot-sub svelte-1uha8ag"> </div></div></div>'),k5=St(`<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="About this atlas" tabindex="-1"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Atlas</div> <h2 class="about-title svelte-1uha8ag">About GAIA Atlas</h2> <div class="about-rule svelte-1uha8ag"></div> <p class="about-body svelte-1uha8ag">Welcome to GAIA Atlas! This is an expansion of the original recreation of the <a href="https://valhovey.github.io/gaia-mary/" target="_blank" class="svelte-1uha8ag">Project Hail Mary star map</a> built using the <a href="https://www.cosmos.esa.int/web/gaia/dr3" target="_blank" class="svelte-1uha8ag">GAIA DR3 dataset</a> which contains 1.8 billion stars as well as their parameters (location, distance, spectra). Exoplanets are sourced from NASA's <a href="https://science.nasa.gov/exoplanets/exoplanet-catalog/" target="_blank" class="svelte-1uha8ag">exoplanet catalog</a>. Where GAIA was missing information, stellar data was supplemented with <a href="https://simbad.u-strasbg.fr/simbad/" target="_blank" class="svelte-1uha8ag">SIMBAD</a> information. All planet locations in the solar system are accurate on page load, and Pluto is included because I love them. Constellations are using the <a href="https://iauarchive.eso.org/public/themes/constellations/" target="_blank" class="svelte-1uha8ag">IAU standard sky culture</a>. The skybox is rendered from the full GAIA dataset. Also, for relativistic rocket calculations I used the equations in <a href="https://math.ucr.edu/home/baez/physics/Relativity/SR/Rocket/rocket.html" target="_blank" class="svelte-1uha8ag">John Baez' Relativistic Rocket FAQ</a>. For much more detailed calculations use <a href="https://www.overvieweffekt.com/tools/relativistic-travel-calculator" target="_blank" class="svelte-1uha8ag">Overview Effekt's wonderful calculator</a>. I hope you enjoy your explorations!</p> <p class="about-body svelte-1uha8ag"></p> <p class="about-sign svelte-1uha8ag">— Val <span class="about-socials svelte-1uha8ag"><a href="https://valhovey.github.io" target="_blank" rel="noreferrer" title="Personal site" aria-label="Personal site" class="svelte-1uha8ag"><!></a> <a href="https://www.instagram.com/valence.photography" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram" class="svelte-1uha8ag"><!></a> <a href="https://app.astrobin.com/u/valence" target="_blank" rel="noreferrer" title="AstroBin" aria-label="AstroBin" class="svelte-1uha8ag"><!></a></span></p></div></div>`),F5=St('<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about controls svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="Controls" tabindex="-1"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Controls</div> <h2 class="about-title svelte-1uha8ag">Navigation</h2> <div class="about-rule svelte-1uha8ag"></div> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Move</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><kbd class="svelte-1uha8ag">W</kbd><kbd class="svelte-1uha8ag">A</kbd><kbd class="svelte-1uha8ag">S</kbd><kbd class="svelte-1uha8ag">D</kbd></span> <span class="desc svelte-1uha8ag">Pan along the ecliptic plane</span> <span class="keys svelte-1uha8ag"><kbd class="svelte-1uha8ag">↑</kbd><kbd class="svelte-1uha8ag">←</kbd><kbd class="svelte-1uha8ag">↓</kbd><kbd class="svelte-1uha8ag">→</kbd></span> <span class="desc svelte-1uha8ag">Arrow-key alternative — same pan</span> <span class="keys svelte-1uha8ag"><kbd class="kbd-wide svelte-1uha8ag">Space</kbd><kbd class="kbd-wide svelte-1uha8ag">Shift</kbd></span> <span class="desc svelte-1uha8ag">Rise · descend (out of the ecliptic plane)</span></div></section> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Look</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Drag</span></span> <span class="desc svelte-1uha8ag">Orbit camera around the target</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Scroll</span></span> <span class="desc svelte-1uha8ag">Zoom in · out</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Mid-drag</span></span> <span class="desc svelte-1uha8ag">Pan (mouse only)</span> <span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Pinch</span></span> <span class="desc svelte-1uha8ag">Zoom (touch)</span></div></section> <section class="ctl-group svelte-1uha8ag"><div class="ctl-group-title svelte-1uha8ag">Select</div> <div class="ctl-grid svelte-1uha8ag"><span class="keys svelte-1uha8ag"><span class="chip svelte-1uha8ag">Tap / Click</span></span> <span class="desc svelte-1uha8ag">Focus a star or planet</span> <span class="keys svelte-1uha8ag"><kbd class="kbd-wide svelte-1uha8ag">Esc</kbd></span> <span class="desc svelte-1uha8ag">Close panel · dismiss search</span></div></section></div></div>'),O5=St('<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about share svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="Share view" tabindex="-1"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="about-kicker svelte-1uha8ag">◢ Transmission</div> <h2 class="about-title svelte-1uha8ag">Share View</h2> <div class="about-rule svelte-1uha8ag"></div> <p class="share-lede svelte-1uha8ag">Choose which pieces of your current view to include in the link.</p> <div class="share-grid svelte-1uha8ag"><label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">System</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Camera Location</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Constellations</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Grid</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Accurate Orbit Scale</span> <em class="share-hint svelte-1uha8ag"> </em></label> <label class="overlay-row share-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Travel Mode</span> <em class="share-hint svelte-1uha8ag"> </em></label></div> <div class="share-url svelte-1uha8ag"><input type="text" readonly="" aria-label="Share URL" class="svelte-1uha8ag"/> <button type="button"> </button></div></div></div>'),B5=St('<a target="_blank" rel="noreferrer" class="svelte-1uha8ag">Wikipedia</a>'),z5=St('<p class="info-summary svelte-1uha8ag"> </p> <p class="info-attribution svelte-1uha8ag">Excerpt from <!> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer" class="svelte-1uha8ag">CC BY-SA 4.0</a></p>',1),G5=St('<div class="info-actions svelte-1uha8ag"><a class="info-wiki svelte-1uha8ag" target="_blank" rel="noreferrer"><span class="ico svelte-1uha8ag" aria-hidden="true">W</span>Full article on Wikipedia <span class="ext svelte-1uha8ag" aria-hidden="true">↗</span></a></div>'),H5=St('<div class="modal-scrim svelte-1uha8ag" role="presentation"><div class="about system-info svelte-1uha8ag" role="dialog" aria-modal="true" aria-label="Star information" tabindex="-1"><button class="about-close svelte-1uha8ag" aria-label="Close">✕</button> <div class="system-info-head svelte-1uha8ag"><!> <h2 class="about-title system-info-title svelte-1uha8ag"> </h2> <!></div> <div class="about-rule svelte-1uha8ag"></div> <div class="info-grid svelte-1uha8ag" aria-label="Stellar parameters"><div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">App. Magnitude</span> <b class="svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Spectral Class</span> <b class="mono-tight svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Evolution</span> <b class="svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Mass</span> <b class="svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Radius</span> <b class="svelte-1uha8ag"> </b></div> <div class="info-cell svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Temperature</span> <b class="svelte-1uha8ag"> </b></div> <div class="info-cell wide svelte-1uha8ag"><span class="lbl svelte-1uha8ag">Age</span> <b class="svelte-1uha8ag"> </b></div></div> <!> <!></div></div>'),V5=St('<div><canvas class="svelte-1uha8ag"></canvas> <div class="scrim svelte-1uha8ag"></div> <!> <svg class="leaders svelte-1uha8ag" aria-hidden="true"></svg> <div class="labels svelte-1uha8ag"></div> <!> <div class="frame svelte-1uha8ag"><span class="corner tl svelte-1uha8ag"></span> <span class="corner tr svelte-1uha8ag"></span> <span class="corner bl svelte-1uha8ag"></span> <span class="corner br svelte-1uha8ag"></span></div> <header class="hud tl-panel svelte-1uha8ag"><div class="title svelte-1uha8ag">GAIA ATLAS</div> <div class="rule svelte-1uha8ag"></div> <div class="subtitle svelte-1uha8ag">Local Stellar Atlas</div> <div class="tl-btn-row svelte-1uha8ag"><button class="about-btn svelte-1uha8ag"><span class="ico svelte-1uha8ag">i</span>About</button> <button class="about-btn controls-btn svelte-1uha8ag" aria-label="Show keyboard and tap controls"><span class="ico kb svelte-1uha8ag" aria-hidden="true">⌨</span>Controls</button></div></header> <section class="hud tr-panel svelte-1uha8ag"><div><input type="search" inputmode="search" enterkeyhint="search" placeholder="Search" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" class="svelte-1uha8ag"/> <!> <label class="search-filter svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Only planetary systems</span></label></div> <div class="row system svelte-1uha8ag"><span class="svelte-1uha8ag">System</span><b class="svelte-1uha8ag"> </b></div> <div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Dist from Sol</span><b class="svelte-1uha8ag"> </b></div> <div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">Zoom Dist</span><b class="svelte-1uha8ag"> </b></div> <!></section> <div class="hud bottom-left-stack svelte-1uha8ag"><section class="overlays-panel svelte-1uha8ag"><div class="overlays-deck svelte-1uha8ag"><!></div> <div class="overlays-title svelte-1uha8ag">Options</div> <label class="overlay-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Constellations</span></label> <label class="overlay-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">Grid</span></label> <label class="overlay-row svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="lbl-full svelte-1uha8ag">Accurate Orbit Scale</span> <span class="lbl-short svelte-1uha8ag">Real Orbits</span></label></section> <nav class="action-row svelte-1uha8ag" aria-label="View actions"><button class="action-btn svelte-1uha8ag" type="button"><span class="action-glyph svelte-1uha8ag" aria-hidden="true"><!></span>Home</button> <button type="button" title="Plot an interstellar trajectory"><span class="action-check svelte-1uha8ag" aria-hidden="true"><!></span>Travel Calc</button> <button class="action-btn svelte-1uha8ag" type="button"><span class="action-glyph svelte-1uha8ag" aria-hidden="true"><!></span>Share</button></nav></div> <!> <!> <!> <!> <!> <!> <!></div>');function J5(n,e){Tr(e,!0);const t=500;let i,a=Pt(null),s=Pt(Kl({labels:[],camDist:0,nearCount:0,selectedSystemName:"Sol",selectedSystemId:"SOL",cameraTargetDistPc:0,travel:{eligible:!1,stats:null,ticks:[]},gridScale:{major:0,minor:0,f:0}})),r=Pt(!0),o=Pt(null),l=Pt(!1),c=Pt(!1),h=Pt(!1),u=Pt(!1);const d=ti(()=>O4(T(s).selectedSystemId));function m(C,G=2){return C===void 0||!isFinite(C)?"—":C>=100?`${C.toFixed(0)}`:C>=10?`${C.toFixed(1)}`:`${C.toFixed(G)}`}function g(C){return C===void 0||!isFinite(C)||C<=0?"—":C<.001?`${(C*1e6).toFixed(0)} kyr`:C<1?`${(C*1e3).toFixed(0)} Myr`:C<10?`${C.toFixed(2)} Gyr`:`${C.toFixed(1)} Gyr`}function v(C){return C===void 0||!isFinite(C)?"—":`${C.toFixed(0)} K`}function p(C){return C===void 0||!isFinite(C)?"—":C.toFixed(2)}function f(C){return`${Math.min(C/299792458,.9999).toFixed(4)} c`}let x=Pt(!1),_=Kl({system:!0,camera:!0,constellations:!0,grid:!0,accurateOrbit:!0,travel:!0}),E=Pt(!1),U=null,P=Pt(0);const w=3.26156,k=365.25*86400;function q(C){return C<1?`${(C*w).toFixed(6)} ly`:C<100?`${C.toFixed(2)} pc / ${(C*w).toFixed(1)} ly`:`${C.toFixed(0)} pc / ${(C*w).toFixed(0)} ly`}const y=206264.806;function M(C){if(C<=0)return"—";const G=C/3;if(G>=1e3)return`${(G/1e3).toPrecision(3)} kpc`;if(G>=10)return`${G.toPrecision(3)} pc`;if(G>=1)return`${G.toFixed(2)} pc`;const Se=G*w;if(Se>=1)return`${Se.toPrecision(3)} ly`;const he=G*y;return he>=1?`${he.toPrecision(3)} AU`:`${he.toExponential(2)} AU`}function W(C){if(C<86400)return`${(C/3600).toFixed(1)} h`;const G=C/k;if(G<1)return`${(C/86400).toFixed(1)} d`;if(G<10){const Se=Math.floor(G),he=Math.round((G-Se)*12);return he===12?`${Se+1} y`:he>0?`${Se} y ${he} mo`:`${Se} y`}return G<1e3?`${G.toFixed(1)} yr`:G<1e6?`${(G/1e3).toFixed(2)} kyr`:G<1e9?`${(G/1e6).toFixed(2)} Myr`:`${G.toExponential(2)} yr`}function K(C){const G=C/1e3;return G<1?`${(G*1e3).toFixed(0)} kg`:G<1e3?`${G.toFixed(1)} t`:G<1e6?`${(G/1e3).toFixed(2)} kt`:G<1e9?`${(G/1e6).toFixed(2)} Mt`:G<1e12?`${(G/1e9).toFixed(2)} Gt`:`${G.toExponential(2)} t`}function Y(C){const G=[[1,"J"],[1e3,"kJ"],[1e6,"MJ"],[1e9,"GJ"],[1e12,"TJ"],[1e15,"PJ"],[1e18,"EJ"],[1e21,"ZJ"],[1e24,"YJ"]];if(C<1)return`${C.toExponential(2)} J`;for(let Se=G.length-1;Se>=0;Se--)if(C>=G[Se][0]){const[he,Fe]=G[Se];return`${(C/he).toFixed(2)} ${Fe}`}return`${C.toExponential(2)} J`}function te(C){const G=C/9460730472580800;return G<1?`${(G*1e3).toFixed(0)} mly`:G<100?`${G.toFixed(2)} ly`:G<1e4?`${G.toFixed(1)} ly`:G<1e6?`${(G/1e3).toFixed(2)} kly`:G<1e9?`${(G/1e6).toFixed(2)} Mly`:`${G.toExponential(2)} ly`}const z=fl.map(C=>({id:C.id,name:C.name,prepared:ec.prepare(C.name),hasPlanets:C.children.some(G=>G.kind==="planet")}));let ae=Pt(""),V=Pt(!1),ue=Pt(0),pe=Pt(null),de=Pt(!1),Oe=Pt(!1),Ue=Pt(!0),I=Pt(!1),D=Pt(1),B=Pt(!1);pi(()=>{const C=T(Oe);T(a)&&T(a).setConstellationsVisible(C)}),pi(()=>{const C=T(de);T(a)&&T(a).setExoplanetRingsVisible(C)}),pi(()=>{const C=T(Ue);T(a)&&T(a).setGridVisible(C)}),pi(()=>{const C=T(I);T(a)&&T(a).setAccurateOrbitScale(C)}),pi(()=>{const C=T(D);T(a)&&T(a).setTravelAccelG(C)}),pi(()=>{const C=T(B);T(a)&&T(a).setTravelPathVisible(C)}),pi(()=>{!T(s).travel.eligible&&T(B)&&Ge(B,!1)});function ie(){var C;if(T(B)){Ge(B,!1);return}(C=T(a))==null||C.beginTravelView(),Ge(B,!0)}const ce=ti(()=>{const C=T(de)?z.filter(he=>he.hasPlanets):z,G=T(ae).trim();return G?ec.go(G,C,{key:"prepared",limit:50}).map(he=>he.obj):C});function se(C){var G,Se,he;Ge(V,!1),Ge(ae,""),(G=T(pe))==null||G.blur(),T(B)&&C!=="SOL"?(Se=T(a))==null||Se.focusTravel(C):(he=T(a))==null||he.focusSystem(C)}function re(C){var Se;const G=T(ce).length;if(!G){C.key==="Escape"&&Ge(V,!1);return}C.key==="ArrowDown"?(C.preventDefault(),Ge(ue,(T(ue)+1)%G)):C.key==="ArrowUp"?(C.preventDefault(),Ge(ue,(T(ue)-1+G)%G)):C.key==="Enter"?(C.preventDefault(),se(T(ce)[T(ue)].id)):C.key==="Escape"&&(Ge(V,!1),(Se=T(pe))==null||Se.blur())}pi(()=>{T(ue)>=T(ce).length&&Ge(ue,0)}),pi(()=>{T(ue);const C=document.querySelector(".search-results li.active");C==null||C.scrollIntoView({block:"nearest"})});function xe(C,G=4){return isFinite(C)?parseFloat(C.toPrecision(G)).toString():"0"}function ge(){var Fe;const C=new URLSearchParams,G=(Fe=T(a))==null?void 0:Fe.getCameraState();if(_.system&&G&&C.set("s",G.systemId),_.camera&&G){C.set("d",xe(G.dist,5)),C.set("y",xe(G.yaw,4)),C.set("p",xe(G.pitch,4));const be=1e-4;(Math.abs(G.cx)>be||Math.abs(G.cy)>be||Math.abs(G.cz)>be)&&C.set("ct",`${xe(G.cx,5)},${xe(G.cy,5)},${xe(G.cz,5)}`)}_.constellations&&C.set("c",T(Oe)?"1":"0"),_.grid&&C.set("g",T(Ue)?"1":"0"),_.accurateOrbit&&C.set("o",T(I)?"1":"0"),_.travel&&(C.set("t",T(B)?"1":"0"),T(B)&&C.set("a",xe(T(D),2)));const Se=typeof window<"u"?`${window.location.origin}${window.location.pathname}`:"",he=C.toString();return he?`${Se}?${he}`:Se}const L=ti(()=>(T(P),_.system,_.camera,_.constellations,_.grid,_.accurateOrbit,_.travel,T(Oe),T(Ue),T(I),T(B),T(D),ge()));pi(()=>{if(!T(x))return;const C=setInterval(()=>Ge(P,T(P)+1),250);return()=>clearInterval(C)});async function qe(){var he;const C=T(L),G=document.querySelector(".share-url input");let Se=!1;if((he=navigator.clipboard)!=null&&he.writeText)try{await navigator.clipboard.writeText(C),Se=!0}catch{}if(!Se&&G){const Fe=G.readOnly;G.readOnly=!1,G.focus(),G.setSelectionRange(0,C.length);try{Se=document.execCommand("copy")}catch{Se=!1}G.readOnly=Fe,G.blur()}Se&&(Ge(E,!0),U&&clearTimeout(U),U=setTimeout(()=>Ge(E,!1),1500))}function We(){var C;Ge(B,!1),(C=T(a))==null||C.viewHome()}gl(()=>{const C=new ml(i);Ge(a,C),window.starmap=C,C.setHudCallback(he=>{Ge(s,he,!0)}),window.addEventListener("resize",C.resize);const G=window.matchMedia("(min-width: 641px)");Ge(l,G.matches,!0);const Se=he=>Ge(l,he.matches,!0);return G.addEventListener("change",Se),C.init(qd).then(()=>{Ge(r,!1);const he=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams;if(he.has("c")&&Ge(Oe,he.get("c")==="1"),he.has("g")&&Ge(Ue,he.get("g")==="1"),he.has("o")&&Ge(I,he.get("o")==="1"),he.has("t")&&Ge(B,he.get("t")==="1"),he.has("a")){const be=parseFloat(he.get("a"));isFinite(be)&&be>0&&Ge(D,be,!0)}const Fe={};if(he.has("s")&&(Fe.systemId=he.get("s")),he.has("d")){const be=parseFloat(he.get("d"));isFinite(be)&&be>0&&(Fe.dist=be)}if(he.has("y")){const be=parseFloat(he.get("y"));isFinite(be)&&(Fe.yaw=be)}if(he.has("p")){const be=parseFloat(he.get("p"));isFinite(be)&&(Fe.pitch=be)}if(he.has("ct")){const be=he.get("ct").split(",").map(parseFloat);be.length===3&&be.every(isFinite)&&([Fe.cx,Fe.cy,Fe.cz]=be)}Object.keys(Fe).length>0&&(C.applyCameraState(Fe),C.publishHudNow()),C.setConstellationsVisible(T(Oe)),C.setGridVisible(T(Ue)),C.setExoplanetRingsVisible(T(de)),C.setAccurateOrbitScale(T(I),{animate:!1}),C.setTravelAccelG(T(D)),C.setTravelPathVisible(T(B))}).catch(he=>{Ge(o,he instanceof Error?he.message:String(he),!0),Ge(r,!1),window.__starmapError=T(o)}),()=>{window.removeEventListener("resize",C.resize),G.removeEventListener("change",Se),C.dispose()}});var Ve=V5();ip("1uha8ag",C=>{var G=m5();bi(4),at(C,G)}),ws("keydown",Vd,C=>{C.key==="Escape"&&(Ge(c,!1),Ge(h,!1),Ge(x,!1),Ge(u,!1))});let Me;var Qe=ne(Ve);fs(Qe,C=>i=C,()=>i);var Ae=le(Qe,4);Dt(Ae,C=>{});var A=le(Ae,2);vn(A,21,()=>T(s).labels,C=>C.key,(C,G)=>{var Se=g5(),he=ne(Se),Fe=le(he);ee(Se),vt(()=>{rn(Se,0,`leader ${T(G).kind??""} ${T(G).tier??""}`,"svelte-1uha8ag"),qn(Se,`opacity:${T(G).opacity??""}`),nt(he,"cx",T(G).ax),nt(he,"cy",T(G).ay),nt(Fe,"points",`${T(G).ax+3.54},${T(G).ay-3.54} ${T(G).elbowX??""},${T(G).ly??""} ${T(G).lx??""},${T(G).ly??""}`)}),Ji(1,Se,()=>Qi,()=>({duration:t})),at(C,Se)}),ee(A);var S=le(A,2);vn(S,21,()=>T(s).labels,C=>C.key,(C,G)=>{var Se=v5(),he=ne(Se),Fe=ne(he,!0);ee(he),ee(Se),vt(()=>{rn(Se,1,`label ${T(G).kind??""} ${T(G).tier??""}`,"svelte-1uha8ag"),qn(Se,`transform:translate3d(${T(G).lx??""}px,${T(G).ly??""}px,0); opacity:${T(G).opacity??""}`),rt(Fe,T(G).name)}),Ji(1,Se,()=>Qi,()=>({duration:t})),at(C,Se)}),ee(S);var H=le(S,2);{var Q=C=>{var G=S5(),Se=$n(G);vn(Se,21,()=>T(s).travel.ticks,Fe=>Fe.key,(Fe,be)=>{var Je=_5();vt(()=>{nt(Je,"x1",T(be).x1),nt(Je,"y1",T(be).y1),nt(Je,"x2",T(be).x2),nt(Je,"y2",T(be).y2)}),at(Fe,Je)}),ee(Se);var he=le(Se,2);vn(he,21,()=>T(s).travel.ticks,Fe=>Fe.key,(Fe,be)=>{var Je=y5(),It=ne(Je,!0);ee(Je),vt(()=>{qn(Je,`transform:translate3d(${T(be).lx??""}px,${T(be).ly??""}px,0) translate(-50%,-50%)`),rt(It,T(be).label)}),at(Fe,Je)}),ee(he),Ji(1,Se,()=>Qi,()=>({duration:200})),Ji(1,he,()=>Qi,()=>({duration:200})),at(C,G)};Dt(H,C=>{T(s).travel.ticks.length>0&&C(Q)})}var Z=le(H,4),$=le(ne(Z),6),me=ne($),ve=le(me,2);ee($),ee(Z);var _e=le(Z,2),Ze=ne(_e);let fe;var Te=ne(Ze);_i(Te),fs(Te,C=>Ge(pe,C),()=>T(pe));var Ee=le(Te,2);{var we=C=>{var G=M5();vn(G,23,()=>T(ce),Se=>Se.id,(Se,he,Fe)=>{var be=x5();let Je;var It=ne(be,!0);ee(be),vt(()=>{nt(be,"aria-selected",T(Fe)===T(ue)),Je=rn(be,1,"svelte-1uha8ag",null,Je,{active:T(Fe)===T(ue)}),rt(It,T(he).name)}),Xt("mousedown",be,()=>se(T(he).id)),ws("mouseenter",be,()=>Ge(ue,T(Fe),!0)),at(Se,be)}),ee(G),at(C,G)};Dt(Ee,C=>{T(V)&&T(ce).length&&C(we)})}var Le=le(Ee,2),$e=ne(Le);_i($e),bi(2),ee(Le),ee(Ze);var Ye=le(Ze,2),ct=le(ne(Ye)),N=ne(ct,!0);ee(ct),ee(Ye);var Ce=le(Ye,2),J=le(ne(Ce)),oe=ne(J,!0);ee(J),ee(Ce);var De=le(Ce,2),Ie=le(ne(De)),ot=ne(Ie,!0);ee(Ie),ee(De);var wt=le(De,2);{var Zt=C=>{var G=T5(),Se=le($n(G),2);{var he=dt=>{var pt=b5(),Mt=le(ne(pt)),kt=ne(Mt,!0);ee(Mt),ee(pt),vt(()=>rt(kt,T(d).specType)),at(dt,pt)};Dt(Se,dt=>{T(d).specType&&dt(he)})}var Fe=le(Se,2);{var be=dt=>{var pt=E5(),Mt=le(ne(pt)),kt=ne(Mt);ee(Mt),ee(pt),vt($t=>rt(kt,`${$t??""} M☉`),[()=>m(T(d).massSolar)]),at(dt,pt)};Dt(Fe,dt=>{T(d).massSolar!==void 0&&dt(be)})}var Je=le(Fe,2);{var It=dt=>{var pt=A5(),Mt=le(ne(pt)),kt=ne(Mt);ee(Mt),ee(pt),vt($t=>rt(kt,`${$t??""} R☉`),[()=>m(T(d).radiusSolar)]),at(dt,pt)};Dt(Je,dt=>{T(d).radiusSolar!==void 0&&dt(It)})}var xt=le(Je,2);Xt("click",xt,()=>Ge(u,!0)),at(C,G)};Dt(wt,C=>{(T(d).specType||T(d).massSolar!==void 0||T(d).radiusSolar!==void 0)&&C(Zt)})}ee(_e);var lt=le(_e,2),Wt=ne(lt),gi=ne(Wt),Ms=ne(gi);{var bs=C=>{var G=P5(),Se=$n(G),he=ne(Se),Fe=le(ne(he)),be=ne(Fe,!0);ee(Fe),ee(he);var Je=le(he,2),It=le(ne(Je)),xt=ne(It,!0);ee(It),ee(Je);var dt=le(Je,2),pt=le(ne(dt)),Mt=ne(pt,!0);ee(pt),ee(dt);var kt=le(dt,2),$t=le(ne(kt)),Ki=ne($t,!0);ee($t),ee(kt);var Di=le(kt,2),Ci=le(ne(Di)),vi=ne(Ci,!0);ee(Ci),ee(Di);var Ri=le(Di,2),xi=le(ne(Ri)),Xi=ne(xi,!0);ee(xi),ee(Ri),bi(2),ee(Se);var Mi=le(Se,2),ci=ne(Mi),Ii=le(ne(ci),2),kn=ne(Ii);ee(Ii),ee(ci);var Lt=le(ci,2);_i(Lt),bi(2),ee(Mi);var gt=le(Mi,2);vn(gt,20,()=>[.5,1,2,5],At=>At,(At,Li)=>{var hi=w5();let qi;var Ui=ne(hi);ee(hi),vt(()=>{qi=rn(hi,1,"accel-btn svelte-1uha8ag",null,qi,{active:T(D)===Li}),nt(hi,"aria-pressed",T(D)===Li),rt(Ui,`${Li??""}g`)}),Xt("click",hi,()=>Ge(D,Li,!0)),at(At,hi)}),ee(gt),vt((At,Li,hi,qi,Ui,la,Za)=>{rt(be,At),rt(xt,Li),rt(Mt,hi),rt(Ki,qi),rt(vi,Ui),rt(Xi,la),rt(kn,`${Za??""} g`)},[()=>te(T(s).travel.stats.distanceM),()=>W(T(s).travel.stats.shipTimeS),()=>W(T(s).travel.stats.earthTimeS),()=>f(T(s).travel.stats.vMax),()=>K(T(s).travel.stats.fuelMassKg),()=>Y(T(s).travel.stats.energyJ),()=>T(D).toFixed(1)]),Ji(3,Se,()=>Qi,()=>({duration:160})),Jl(Lt,()=>T(D),At=>Ge(D,At)),Ji(3,Mi,()=>Qi,()=>({duration:160})),Ji(3,gt,()=>Qi,()=>({duration:160})),at(C,G)};Dt(Ms,C=>{T(B)&&T(s).travel.eligible&&T(s).travel.stats&&C(bs)})}ee(gi);var Pi=le(gi,4),ra=ne(Pi);_i(ra),bi(2),ee(Pi);var oa=le(Pi,2),Ya=ne(oa);_i(Ya),bi(2),ee(oa);var Ln=le(oa,2),ja=ne(Ln);_i(ja),bi(4),ee(Ln),ee(Wt);var Un=le(Wt,2),Nn=ne(Un),$a=ne(Nn),Nr=ne($a);Ea(Nr,{get icon(){return Uh}}),ee($a),bi(),ee(Nn);var mn=le(Nn,2);let Es;var b=ne(mn),F=ne(b);{let C=ti(()=>T(B)?d5:p5);Ea(F,{get icon(){return T(C)}})}ee(b),bi(),ee(mn);var X=le(mn,2),j=ne(X),O=ne(j);Ea(O,{get icon(){return h5}}),ee(j),bi(),ee(X),ee(Un),ee(lt);var ye=le(lt,2);{var Re=C=>{const G=ti(()=>M(T(s).gridScale.major)),Se=ti(()=>M(T(s).gridScale.minor)),he=ti(()=>T(s).gridScale.f),Fe=ti(()=>Math.max(0,1-T(he))),be=ti(()=>150),Je=ti(()=>T(be)*Math.pow(5,-T(he))),It=ti(()=>T(Je)/5),xt=ti(()=>[0,1,2,3,4,5].map(Lt=>Lt*T(Je))),dt=ti(()=>[0,1,2,3,4].flatMap(Lt=>[1,2,3,4].map(gt=>Lt*T(Je)+gt*T(It))));var pt=L5(),Mt=le(ne(pt),2);nt(Mt,"viewBox",`0 0 ${T(be)??""} 14`);var kt=ne(Mt),$t=ne(kt),Ki=ne($t);nt(Ki,"width",T(be)),ee($t),ee(kt);var Di=le(kt),Ci=ne(Di);nt(Ci,"x2",T(be));var vi=le(Ci);vn(vi,21,()=>T(dt),ql,(Lt,gt)=>{var At=D5();vt(()=>{nt(At,"x1",T(gt)),nt(At,"x2",T(gt))}),at(Lt,At)}),ee(vi);var Ri=le(vi);vn(Ri,21,()=>T(xt),ql,(Lt,gt)=>{var At=C5();vt(()=>{nt(At,"x1",T(gt)),nt(At,"x2",T(gt))}),at(Lt,At)}),ee(Ri),ee(Di),ee(Mt);var xi=le(Mt,2),Xi=ne(xi),Mi=le(ne(Xi),3);Xl(Mi,()=>T(G),Lt=>{var gt=R5(),At=ne(gt,!0);ee(gt),vt(()=>rt(At,T(G))),Ji(1,gt,()=>Qi,()=>({duration:220})),at(Lt,gt)}),ee(Xi);var ci=le(Xi,2),Ii=ne(ci),kn=le(Ii,4);Xl(kn,()=>T(Se),Lt=>{var gt=I5(),At=ne(gt,!0);ee(gt),vt(()=>rt(At,T(Se))),Ji(1,gt,()=>Qi,()=>({duration:220})),at(Lt,gt)}),ee(ci),ee(xi),ee(pt),vt(()=>{qn(vi,`opacity:${T(Fe)??""}`),qn(Ii,`opacity:${T(Fe)??""}`)}),at(C,pt)};Dt(ye,C=>{T(Ue)&&C(Re)})}var Ne=le(ye,2);{var ke=C=>{var G=U5();at(C,G)};Dt(Ne,C=>{T(r)&&C(ke)})}var Xe=le(Ne,2);{var je=C=>{var G=N5(),Se=ne(G),he=le(ne(Se),2),Fe=ne(he,!0);ee(he),ee(Se),ee(G),vt(()=>rt(Fe,T(o))),at(C,G)};Dt(Xe,C=>{T(o)&&C(je)})}var Be=le(Xe,2);{var ut=C=>{var G=k5(),Se=ne(G),he=ne(Se),Fe=le(he,12),be=le(ne(Fe)),Je=ne(be),It=ne(Je);Ea(It,{get icon(){return Uh}}),ee(Je);var xt=le(Je,2),dt=ne(xt);Ea(dt,{get icon(){return f5}}),ee(xt);var pt=le(xt,2),Mt=ne(pt);Ea(Mt,{get icon(){return u5}}),ee(pt),ee(be),ee(Fe),ee(Se),ee(G),Xt("click",G,kt=>{kt.target===kt.currentTarget&&Ge(c,!1)}),Xt("click",he,()=>Ge(c,!1)),at(C,G)};Dt(Be,C=>{T(c)&&C(ut)})}var mt=le(Be,2);{var Et=C=>{var G=F5(),Se=ne(G),he=ne(Se);bi(12),ee(Se),ee(G),Xt("click",G,Fe=>{Fe.target===Fe.currentTarget&&Ge(h,!1)}),Xt("click",he,()=>Ge(h,!1)),at(C,G)};Dt(mt,C=>{T(h)&&C(Et)})}var Jt=le(mt,2);{var ht=C=>{var G=O5(),Se=ne(G),he=ne(Se),Fe=le(he,10),be=ne(Fe),Je=ne(be);_i(Je);var It=le(Je,4),xt=ne(It,!0);ee(It),ee(be);var dt=le(be,2),pt=ne(dt);_i(pt);var Mt=le(pt,4),kt=ne(Mt,!0);ee(Mt),ee(dt);var $t=le(dt,2),Ki=ne($t);_i(Ki);var Di=le(Ki,4),Ci=ne(Di,!0);ee(Di),ee($t);var vi=le($t,2),Ri=ne(vi);_i(Ri);var xi=le(Ri,4),Xi=ne(xi,!0);ee(xi),ee(vi);var Mi=le(vi,2),ci=ne(Mi);_i(ci);var Ii=le(ci,4),kn=ne(Ii,!0);ee(Ii),ee(Mi);var Lt=le(Mi,2),gt=ne(Lt);_i(gt);var At=le(gt,4),Li=ne(At,!0);ee(At),ee(Lt),ee(Fe);var hi=le(Fe,2),qi=ne(hi);_i(qi);var Ui=le(qi,2);let la;var Za=ne(Ui,!0);ee(Ui),ee(hi),ee(Se),ee(G),vt((Kt,ui)=>{rt(xt,T(s).selectedSystemName),rt(kt,Kt),rt(Ci,T(Oe)?"on":"off"),rt(Xi,T(Ue)?"on":"off"),rt(kn,T(I)?"on":"off"),rt(Li,ui),cp(qi,T(L)),la=rn(Ui,1,"share-copy svelte-1uha8ag",null,la,{copied:T(E)}),rt(Za,T(E)?"Copied":"Copy Link")},[()=>q(T(s).camDist),()=>T(B)?`on · ${T(D).toFixed(1)} g`:"off"]),Xt("click",G,Kt=>{Kt.target===Kt.currentTarget&&Ge(x,!1)}),Xt("click",he,()=>Ge(x,!1)),Yi(Je,()=>_.system,Kt=>_.system=Kt),Yi(pt,()=>_.camera,Kt=>_.camera=Kt),Yi(Ki,()=>_.constellations,Kt=>_.constellations=Kt),Yi(Ri,()=>_.grid,Kt=>_.grid=Kt),Yi(ci,()=>_.accurateOrbit,Kt=>_.accurateOrbit=Kt),Yi(gt,()=>_.travel,Kt=>_.travel=Kt),Xt("click",Ui,qe),at(C,G)};Dt(Jt,C=>{T(x)&&C(ht)})}var ze=le(Jt,2);{var Bt=C=>{var G=H5(),Se=ne(G),he=ne(Se),Fe=le(he,2),be=ne(Fe);q4(be,{get teffK(){return T(d).teffK},get evolStage(){return T(d).evolStage},get specType(){return T(d).specType}});var Je=le(be,2),It=ne(Je,!0);ee(Je);var xt=le(Je,2);a5(xt,{get teffK(){return T(d).teffK},get specType(){return T(d).specType}}),ee(Fe);var dt=le(Fe,4),pt=ne(dt),Mt=le(ne(pt),2),kt=ne(Mt,!0);ee(Mt),ee(pt);var $t=le(pt,2),Ki=le(ne($t),2),Di=ne(Ki,!0);ee(Ki),ee($t);var Ci=le($t,2),vi=le(ne(Ci),2),Ri=ne(vi,!0);ee(vi),ee(Ci);var xi=le(Ci,2),Xi=le(ne(xi),2),Mi=ne(Xi,!0);ee(Xi),ee(xi);var ci=le(xi,2),Ii=le(ne(ci),2),kn=ne(Ii,!0);ee(Ii),ee(ci);var Lt=le(ci,2),gt=le(ne(Lt),2),At=ne(gt,!0);ee(gt),ee(Lt);var Li=le(Lt,2),hi=le(ne(Li),2),qi=ne(hi,!0);ee(hi),ee(Li),ee(dt);var Ui=le(dt,2);{var la=ui=>{var gn=z5(),Fn=$n(gn),kr=ne(Fn,!0);ee(Fn);var As=le(Fn,2),$u=le(ne(As));{var Zu=ca=>{var Ts=B5();vt(()=>nt(Ts,"href",T(d).wikipediaUrl)),at(ca,Ts)},Ju=ca=>{var Ts=td("Wikipedia");at(ca,Ts)};Dt($u,ca=>{T(d).wikipediaUrl?ca(Zu):ca(Ju,-1)})}bi(2),ee(As),vt(()=>rt(kr,T(d).summary)),at(ui,gn)};Dt(Ui,ui=>{T(d).summary&&ui(la)})}var Za=le(Ui,2);{var Kt=ui=>{var gn=G5(),Fn=ne(gn);ee(gn),vt(()=>nt(Fn,"href",T(d).wikipediaUrl)),at(ui,gn)};Dt(Za,ui=>{T(d).wikipediaUrl&&ui(Kt)})}ee(Se),ee(G),vt((ui,gn,Fn,kr,As)=>{rt(It,T(s).selectedSystemName),rt(kt,ui),rt(Di,T(d).specType??"—"),rt(Ri,T(d).evolStage??"—"),rt(Mi,gn),rt(kn,Fn),rt(At,kr),rt(qi,As)},[()=>p(T(d).appMag),()=>T(d).massSolar!==void 0?`${m(T(d).massSolar)} M☉`:"—",()=>T(d).radiusSolar!==void 0?`${m(T(d).radiusSolar)} R☉`:"—",()=>v(T(d).teffK),()=>g(T(d).ageGyr)]),Xt("click",G,ui=>{ui.target===ui.currentTarget&&Ge(u,!1)}),Xt("click",he,()=>Ge(u,!1)),at(C,G)};Dt(ze,C=>{T(u)&&C(Bt)})}ee(Ve),vt((C,G)=>{Me=rn(Ve,1,"stage svelte-1uha8ag",null,Me,{ready:!T(r)}),fe=rn(Ze,1,"search-box svelte-1uha8ag",null,fe,{open:T(V)}),rt(N,T(s).selectedSystemName),rt(oe,C),rt(ot,G),Es=rn(mn,1,"action-btn travel-btn svelte-1uha8ag",null,Es,{active:T(B)}),nt(mn,"aria-pressed",T(B))},[()=>q(T(s).cameraTargetDistPc),()=>q(T(s).camDist)]),Xt("click",me,()=>Ge(c,!0)),Xt("click",ve,()=>Ge(h,!0)),ws("focus",Te,()=>Ge(V,!0)),ws("blur",Te,()=>setTimeout(()=>Ge(V,!1),130)),Xt("keydown",Te,re),Jl(Te,()=>T(ae),C=>Ge(ae,C)),Yi($e,()=>T(de),C=>Ge(de,C)),Yi(ra,()=>T(Oe),C=>Ge(Oe,C)),Yi(Ya,()=>T(Ue),C=>Ge(Ue,C)),Yi(ja,()=>T(I),C=>Ge(I,C)),Xt("click",Nn,We),Xt("click",mn,ie),Xt("click",X,()=>Ge(x,!0)),at(n,Ve),wr()}Kd(["click","keydown","mousedown"]);export{J5 as component};
