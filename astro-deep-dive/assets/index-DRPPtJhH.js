(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const qu=!1;var ql=Array.isArray,zh=Array.prototype.indexOf,_a=Array.prototype.includes,La=Array.from,Hh=Object.defineProperty,us=Object.getOwnPropertyDescriptor,$u=Object.getOwnPropertyDescriptors,Vh=Object.prototype,Gh=Array.prototype,$l=Object.getPrototypeOf,_c=Object.isExtensible;const Ia=()=>{};function Wh(i){return i()}function Oo(i){for(var t=0;t<i.length;t++)i[t]()}function Xu(){var i,t,e=new Promise((n,r)=>{i=n,t=r});return{promise:e,resolve:i,reject:t}}const Fe=2,kr=4,_s=8,Xl=1<<24,yn=16,wn=32,Ei=64,Bo=128,dn=512,Te=1024,De=2048,kn=4096,We=8192,Mn=16384,Xr=32768,zo=1<<25,Ji=65536,xa=1<<17,qh=1<<18,Yr=1<<19,Yu=1<<20,Pn=1<<25,Qi=65536,ya=1<<21,Cr=1<<22,_i=1<<23,xi=Symbol("$state"),$h=Symbol(""),ju=Symbol("attributes"),Ho=Symbol("class"),Vo=Symbol("style"),Go=Symbol("text"),aa=Symbol("form reset"),Da=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Ku=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml");function Xh(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Yh(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function jh(i,t,e){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Kh(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Zh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Jh(i){throw new Error("https://svelte.dev/e/effect_orphan")}function Qh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function tf(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ef(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function nf(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function rf(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const sf=1,af=2,Zu=4,of=8,lf=16,cf=1,uf=2,we=Symbol("uninitialized"),df="http://www.w3.org/1999/xhtml",hf="@attach";function ff(){console.warn("https://svelte.dev/e/derived_inert")}function pf(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function mf(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ju(i){return i===this.v}function gf(i,t){return i!=i?t==t:i!==t||i!==null&&typeof i=="object"||typeof i=="function"}function Qu(i){return!gf(i,this.v)}let xs=!1,vf=!1;function _f(){xs=!0}let me=null;function Nr(i){me=i}function ir(i,t=!1,e){me={p:me,i:!1,c:null,e:null,s:i,x:null,r:ne,l:xs&&!t?{s:null,u:null,$:[]}:null}}function rr(i){var t=me,e=t.e;if(e!==null){t.e=null;for(var n of e)yd(n)}return t.i=!0,me=t.p,{}}function ys(){return!xs||me!==null&&me.l===null}let Gi=[];function td(){var i=Gi;Gi=[],Oo(i)}function Zn(i){if(Gi.length===0&&!ds){var t=Gi;queueMicrotask(()=>{t===Gi&&td()})}Gi.push(i)}function xf(){for(;Gi.length>0;)td()}function ed(i){var t=ne;if(t===null)return re.f|=_i,i;if((t.f&Xr)===0&&(t.f&kr)===0)throw i;mi(i,t)}function mi(i,t){for(;t!==null;){if((t.f&Bo)!==0){if((t.f&Xr)===0)throw i;try{t.b.error(i);return}catch(e){i=e}}t=t.parent}throw i}const yf=-7169;function ve(i,t){i.f=i.f&yf|t}function Yl(i){(i.f&dn)!==0||i.deps===null?ve(i,Te):ve(i,kn)}function nd(i){if(i!==null)for(const t of i)(t.f&Fe)===0||(t.f&Qi)===0||(t.f^=Qi,nd(t.deps))}function id(i,t,e){(i.f&De)!==0?t.add(i):(i.f&kn)!==0&&e.add(i),nd(i.deps),ve(i,Te)}let Ya=null,ur=null,Zt=null,Wo=null,Sn=null,qo=null,ds=!1,ja=!1,Ar=null,oa=null;var xc=0;let Sf=1;class Mi{id=Sf++;#e=!1;linked=!0;#a=null;#t=null;async_deriveds=new Map;current=new Map;previous=new Map;#l=new Set;#i=new Set;#s=0;#n=new Map;#o=null;#r=[];#p=[];#c=new Set;#u=new Set;#h=new Map;#g=new Set;is_fork=!1;#d=!1;constructor(){ur===null?Ya=ur=this:(ur.#t=this,this.#a=ur),ur=this}#_(){if(this.is_fork)return!0;for(const n of this.#n.keys()){for(var t=n,e=!1;t.parent!==null;){if(this.#h.has(t)){e=!0;break}t=t.parent}if(!e)return!0}return!1}skip_effect(t){this.#h.has(t)||this.#h.set(t,{d:[],m:[]}),this.#g.delete(t)}unskip_effect(t,e=n=>this.schedule(n)){var n=this.#h.get(t);if(n){this.#h.delete(t);for(var r of n.d)ve(r,De),e(r);for(r of n.m)ve(r,kn),e(r)}this.#g.add(t)}#v(){this.#e=!0,xc++>1e3&&(this.#m(),Ef());for(const l of this.#c)this.#u.delete(l),ve(l,De),this.schedule(l);for(const l of this.#u)ve(l,kn),this.schedule(l);const t=this.#r;this.#r=[],this.apply();var e=Ar=[],n=[],r=oa=[];for(const l of t)try{this.#S(l,e,n)}catch(c){throw ad(l),this.#_()||this.discard(),c}if(Zt=null,r.length>0){var s=Mi.ensure();for(const l of r)s.schedule(l)}if(Ar=null,oa=null,this.#_()){this.#f(n),this.#f(e);for(const[l,c]of this.#h)sd(l,c);r.length>0&&Zt.#v();return}const a=this.#b();if(a){this.#f(n),this.#f(e),a.#x(this);return}this.#c.clear(),this.#u.clear();for(const l of this.#l)l(this);this.#l.clear(),Wo=this,yc(n),yc(e),Wo=null,this.#o?.resolve();var o=Zt;if(this.#s===0&&(this.#r.length===0||o!==null)&&this.#m(),this.#r.length>0)if(o!==null){const l=o;l.#r.push(...this.#r.filter(c=>!l.#r.includes(c)))}else o=this;o!==null&&o.#v()}#S(t,e,n){t.f^=Te;for(var r=t.first;r!==null;){var s=r.f,a=(s&(wn|Ei))!==0,o=a&&(s&Te)!==0,l=o||(s&We)!==0||this.#h.has(r);if(!l&&r.fn!==null){a?r.f^=Te:(s&kr)!==0?e.push(r):bs(r)&&((s&yn)!==0&&this.#u.add(r),Or(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}}#b(){for(var t=this.#a;t!==null;){if(!t.is_fork){for(const[e,[,n]]of this.current)if(t.current.has(e)&&!n)return t}t=t.#a}return null}#x(t){for(const[n,r]of t.current)!this.previous.has(n)&&t.previous.has(n)&&this.previous.set(n,t.previous.get(n)),this.current.set(n,r);for(const[n,r]of t.async_deriveds){const s=this.async_deriveds.get(n);s&&r.promise.then(s.resolve).catch(s.reject)}this.transfer_effects(t.#c,t.#u);const e=n=>{var r=n.reactions;if(r!==null)for(const o of r){var s=o.f;if((s&Fe)!==0)e(o);else{var a=o;s&(Cr|yn)&&!this.async_deriveds.has(a)&&(this.#u.delete(a),ve(a,De),this.schedule(a))}}};for(const n of this.current.keys())e(n);this.oncommit(()=>t.discard()),t.#m(),Zt=this,this.#v()}#f(t){for(var e=0;e<t.length;e+=1)id(t[e],this.#c,this.#u)}capture(t,e,n=!1){t.v!==we&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&_i)===0&&(this.current.set(t,[e,n]),Sn?.set(t,e)),this.is_fork||(t.v=e)}activate(){Zt=this}deactivate(){Zt=null,Sn=null}flush(){try{ja=!0,Zt=this,this.#v()}finally{xc=0,qo=null,Ar=null,oa=null,ja=!1,Zt=null,Sn=null,ji.clear()}}discard(){for(const t of this.#i)t(this);this.#i.clear(),this.#m(),this.#o?.resolve()}register_created_effect(t){this.#p.push(t)}#y(){for(let u=Ya;u!==null;u=u.#t){var t=u.id<this.id,e=[];for(const[d,[h,p]]of this.current){if(u.current.has(d)){var n=u.current.get(d)[0];if(t&&h!==n)u.current.set(d,[h,p]);else continue}e.push(d)}if(t)for(const[d,h]of this.async_deriveds){const p=u.async_deriveds.get(d);p&&h.promise.then(p.resolve).catch(p.reject)}if(u.#e){var r=[...u.current.keys()].filter(d=>!u.current.get(d)[1]&&!this.current.has(d));if(r.length===0)t&&u.discard();else if(e.length>0){if(t)for(const d of this.#g)u.unskip_effect(d,h=>{(h.f&(yn|Cr))!==0?u.schedule(h):u.#f([h])});u.activate();var s=new Set,a=new Map;for(var o of e)rd(o,r,s,a);a=new Map;var l=[...u.current].filter(([d,h])=>{const p=this.current.get(d);return p?p[0]!==h[0]||p[1]!==h[1]:!0}).map(([d])=>d);if(l.length>0)for(const d of this.#p)(d.f&(Mn|We|xa))===0&&jl(d,l,a)&&((d.f&(Cr|yn))!==0?(ve(d,De),u.schedule(d)):u.#c.add(d));if(u.#r.length>0&&!u.#d){u.apply();for(var c of u.#r)u.#S(c,[],[]);u.#r=[]}u.deactivate()}}}}increment(t,e){if(this.#s+=1,t){let n=this.#n.get(e)??0;this.#n.set(e,n+1)}}decrement(t,e){if(this.#s-=1,t){let n=this.#n.get(e)??0;n===1?this.#n.delete(e):this.#n.set(e,n-1)}this.#d||(this.#d=!0,Zn(()=>{this.#d=!1,this.linked&&this.flush()}))}transfer_effects(t,e){for(const n of t)this.#c.add(n);for(const n of e)this.#u.add(n);t.clear(),e.clear()}oncommit(t){this.#l.add(t)}ondiscard(t){this.#i.add(t)}settled(){return(this.#o??=Xu()).promise}static ensure(){if(Zt===null){const t=Zt=new Mi;!ja&&!ds&&Zn(()=>{t.#e||t.flush()})}return Zt}apply(){{Sn=null;return}}schedule(t){if(qo=t,t.b?.is_pending&&(t.f&(kr|_s|Xl))!==0&&(t.f&Xr)===0){t.b.defer_effect(t);return}for(var e=t;e.parent!==null;){e=e.parent;var n=e.f;if(Ar!==null&&e===ne&&(re===null||(re.f&Fe)===0))return;if((n&(Ei|wn))!==0){if((n&Te)===0)return;e.f^=Te}}this.#r.push(e)}#m(){if(this.linked){var t=this.#a,e=this.#t;t===null?Ya=e:t.#t=e,e===null?ur=t:e.#a=t,this.linked=!1}}}function bf(i){var t=ds;ds=!0;try{for(var e;;){if(xf(),Zt===null)return e;Zt.flush()}}finally{ds=t}}function Ef(){try{Qh()}catch(i){mi(i,qo)}}let qn=null;function yc(i){var t=i.length;if(t!==0){for(var e=0;e<t;){var n=i[e++];if((n.f&(Mn|We))===0&&bs(n)&&(qn=new Set,Or(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Ed(n),qn?.size>0)){ji.clear();for(const r of qn){if((r.f&(Mn|We))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)qn.has(a)&&(qn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Mn|We))===0&&Or(l)}}qn.clear()}}qn=null}}function rd(i,t,e,n){if(!e.has(i)&&(e.add(i),i.reactions!==null))for(const r of i.reactions){const s=r.f;(s&Fe)!==0?rd(r,t,e,n):(s&(Cr|yn))!==0&&(s&De)===0&&jl(r,t,n)&&(ve(r,De),Kl(r))}}function jl(i,t,e){const n=e.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const r of i.deps){if(_a.call(t,r))return!0;if((r.f&Fe)!==0&&jl(r,t,e))return e.set(r,!0),!0}return e.set(i,!1),!1}function Kl(i){Zt.schedule(i)}function sd(i,t){if(!((i.f&wn)!==0&&(i.f&Te)!==0)){(i.f&De)!==0?t.d.push(i):(i.f&kn)!==0&&t.m.push(i),ve(i,Te);for(var e=i.first;e!==null;)sd(e,t),e=e.next}}function ad(i){ve(i,Te);for(var t=i.first;t!==null;)ad(t),t=t.next}function Mf(i){let t=0,e=wi(0),n;return()=>{Ql()&&(K(e),ec(()=>(t===0&&(n=Es(()=>i(()=>hs(e)))),t+=1,()=>{Zn(()=>{t-=1,t===0&&(n?.(),n=void 0,hs(e))})})))}}var wf=Ji|Yr;function Af(i,t,e,n){new Tf(i,t,e,n)}class Tf{parent;is_pending=!1;transform_error;#e;#a=null;#t;#l;#i;#s=null;#n=null;#o=null;#r=null;#p=0;#c=0;#u=!1;#h=new Set;#g=new Set;#d=null;#_=Mf(()=>(this.#d=wi(this.#p),()=>{this.#d=null}));constructor(t,e,n,r){this.#e=t,this.#t=e,this.#l=s=>{var a=ne;a.b=this,a.f|=Bo,n(s)},this.parent=ne.b,this.transform_error=r??this.parent?.transform_error??(s=>s),this.#i=Ua(()=>{this.#x()},wf)}#v(){try{this.#s=Ke(()=>this.#l(this.#e))}catch(t){this.error(t)}}#S(t){const e=this.#t.failed;e&&(this.#o=Ke(()=>{e(this.#e,()=>t,()=>()=>{})}))}#b(){const t=this.#t.pending;t&&(this.is_pending=!0,this.#n=Ke(()=>t(this.#e)),Zn(()=>{var e=this.#r=document.createDocumentFragment(),n=yi();e.append(n),this.#s=this.#y(()=>Ke(()=>this.#l(n))),this.#c===0&&(this.#e.before(e),this.#r=null,Ki(this.#n,()=>{this.#n=null}),this.#f(Zt))}))}#x(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#p=0,this.#s=Ke(()=>{this.#l(this.#e)}),this.#c>0){var t=this.#r=document.createDocumentFragment();ic(this.#s,t);const e=this.#t.pending;this.#n=Ke(()=>e(this.#e))}else this.#f(Zt)}catch(e){this.error(e)}}#f(t){this.is_pending=!1,t.transfer_effects(this.#h,this.#g)}defer_effect(t){id(t,this.#h,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#t.pending}#y(t){var e=ne,n=re,r=me;Nn(this.#i),hn(this.#i),Nr(this.#i.ctx);try{return Mi.ensure(),t()}catch(s){return ed(s),null}finally{Nn(e),hn(n),Nr(r)}}#m(t,e){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t,e);return}this.#c+=t,this.#c===0&&(this.#f(e),this.#n&&Ki(this.#n,()=>{this.#n=null}),this.#r&&(this.#e.before(this.#r),this.#r=null))}update_pending_count(t,e){this.#m(t,e),this.#p+=t,!(!this.#d||this.#u)&&(this.#u=!0,Zn(()=>{this.#u=!1,this.#d&&Ur(this.#d,this.#p)}))}get_effect_pending(){return this.#_(),K(this.#d)}error(t){if(!this.#t.onerror&&!this.#t.failed)throw t;Zt?.is_fork?(this.#s&&Zt.skip_effect(this.#s),this.#n&&Zt.skip_effect(this.#n),this.#o&&Zt.skip_effect(this.#o),Zt.oncommit(()=>{this.#E(t)})):this.#E(t)}#E(t){this.#s&&(Ue(this.#s),this.#s=null),this.#n&&(Ue(this.#n),this.#n=null),this.#o&&(Ue(this.#o),this.#o=null);var e=this.#t.onerror;let n=this.#t.failed;var r=!1,s=!1;const a=()=>{if(r){mf();return}r=!0,s&&rf(),this.#o!==null&&Ki(this.#o,()=>{this.#o=null}),this.#y(()=>{this.#x()})},o=l=>{try{s=!0,e?.(l,a),s=!1}catch(c){mi(c,this.#i&&this.#i.parent)}n&&(this.#o=this.#y(()=>{try{return Ke(()=>{var c=ne;c.b=this,c.f|=Bo,n(this.#e,()=>l,()=>a)})}catch(c){return mi(c,this.#i.parent),null}}))};Zn(()=>{var l;try{l=this.transform_error(t)}catch(c){mi(c,this.#i&&this.#i.parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,c=>mi(c,this.#i&&this.#i.parent)):o(l)})}}function od(i,t,e,n){const r=ys()?ka:Zl;var s=i.filter(h=>!h.settled);if(e.length===0&&s.length===0){n(t.map(r));return}var a=ne,o=Rf(),l=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function c(h){if((a.f&Mn)===0){o();try{n(h)}catch(p){mi(p,a)}Sa()}}var u=ld();if(e.length===0){l.then(()=>c(t.map(r))).finally(u);return}function d(){Promise.all(e.map(h=>Cf(h))).then(h=>c([...t.map(r),...h])).catch(h=>mi(h,a)).finally(u)}l?l.then(()=>{o(),d(),Sa()}):d()}function Rf(){var i=ne,t=re,e=me,n=Zt;return function(s=!0){Nn(i),hn(t),Nr(e),s&&(i.f&Mn)===0&&(n?.activate(),n?.apply())}}function Sa(i=!0){Nn(null),hn(null),Nr(null),i&&Zt?.deactivate()}function ld(){var i=ne,t=i.b,e=Zt,n=!!t?.is_rendered();return t?.update_pending_count(1,e),e.increment(n,i),()=>{t?.update_pending_count(-1,e),e.decrement(n,i)}}function ka(i){var t=Fe|De;return ne!==null&&(ne.f|=Yr),{ctx:me,deps:null,effects:null,equals:Ju,f:t,fn:i,reactions:null,rv:0,v:we,wv:0,parent:ne,ac:null}}const Is=Symbol("obsolete");function Cf(i,t,e){let n=ne;n===null&&Yh();var r=void 0,s=wi(we),a=!re,o=new Set;return Gf(()=>{var l=ne,c=Xu();r=c.promise;try{Promise.resolve(i()).then(c.resolve,p=>{p!==Da&&c.reject(p)}).finally(Sa)}catch(p){c.reject(p),Sa()}var u=Zt;if(a){if((l.f&Xr)!==0)var d=ld();if(n.b?.is_rendered())u.async_deriveds.get(l)?.reject(Is);else for(const p of o.values())p.reject(Is);o.add(c),u.async_deriveds.set(l,c)}const h=(p,_=void 0)=>{d?.(),o.delete(c),_!==Is&&(u.activate(),_?(s.f|=_i,Ur(s,_)):((s.f&_i)!==0&&(s.f^=_i),Ur(s,p)),u.deactivate())};c.promise.then(h,p=>h(null,p||"unknown"))}),xd(()=>{for(const l of o)l.reject(Is)}),new Promise(l=>{function c(u){function d(){u===r?l(s):c(r)}u.then(d,d)}c(r)})}function Rn(i){const t=ka(i);return Ad(t),t}function Zl(i){const t=ka(i);return t.equals=Qu,t}function Pf(i){var t=i.effects;if(t!==null){i.effects=null;for(var e=0;e<t.length;e+=1)Ue(t[e])}}function Jl(i){var t,e=ne,n=i.parent;if(!Ai&&n!==null&&i.v!==we&&(n.f&(Mn|We))!==0)return ff(),i.v;Nn(n);try{i.f&=~Qi,Pf(i),t=Pd(i)}finally{Nn(e)}return t}function cd(i){var t=Jl(i);if(!i.equals(t)&&(i.wv=Rd(),(!Zt?.is_fork||i.deps===null)&&(Zt!==null?(Zt.capture(i,t,!0),Wo?.capture(i,t,!0)):i.v=t,i.deps===null))){ve(i,Te);return}Ai||(Sn!==null?(Ql()||Zt?.is_fork)&&Sn.set(i,t):Yl(i))}function Lf(i){if(i.effects!==null)for(const t of i.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(Da),t.fn!==null&&(t.teardown=Ia),t.ac=null,ms(t,0),nc(t))}function ud(i){if(i.effects!==null)for(const t of i.effects)t.teardown&&t.fn!==null&&Or(t)}let ba=new Set;const ji=new Map;let dd=!1;function wi(i,t){var e={f:0,v:i,reactions:null,equals:Ju,rv:0,wv:0};return e}function Ae(i,t){const e=wi(i);return Ad(e),e}function hd(i,t=!1,e=!0){const n=wi(i);return t||(n.equals=Qu),xs&&e&&me!==null&&me.l!==null&&(me.l.s??=[]).push(n),n}function ye(i,t,e=!1){re!==null&&(!bn||(re.f&xa)!==0)&&ys()&&(re.f&(Fe|yn|Cr|xa))!==0&&(In===null||!In.has(i))&&nf();let n=e?Wi(t):t;return Ur(i,n,oa)}function Ur(i,t,e=null){if(!i.equals(t)){ji.set(i,Ai?t:i.v);var n=Mi.ensure();if(n.capture(i,t),(i.f&Fe)!==0){const r=i;(i.f&De)!==0&&Jl(r),Sn===null&&Yl(r)}i.wv=Rd(),fd(i,De,e),ys()&&ne!==null&&(ne.f&Te)!==0&&(ne.f&(wn|Ei))===0&&(ln===null?$f([i]):ln.push(i)),!n.is_fork&&ba.size>0&&!dd&&If()}return t}function If(){dd=!1;for(const i of ba){(i.f&Te)!==0&&ve(i,kn);let t;try{t=bs(i)}catch{t=!0}t&&Or(i)}ba.clear()}function hs(i){ye(i,i.v+1)}function fd(i,t,e){var n=i.reactions;if(n!==null)for(var r=ys(),s=n.length,a=0;a<s;a++){var o=n[a],l=o.f;if(!(!r&&o===ne)){var c=(l&De)===0;if(c&&ve(o,t),(l&xa)!==0)ba.add(o);else if((l&Fe)!==0){var u=o;Sn?.delete(u),(l&Qi)===0&&(l&dn&&(ne===null||(ne.f&ya)===0)&&(o.f|=Qi),fd(u,kn,e))}else if(c){var d=o;(l&yn)!==0&&qn!==null&&qn.add(d),e!==null?e.push(d):Kl(d)}}}}function Wi(i){if(typeof i!="object"||i===null||xi in i)return i;const t=$l(i);if(t!==Vh&&t!==Gh)return i;var e=new Map,n=ql(i),r=Ae(0),s=Zi,a=o=>{if(Zi===s)return o();var l=re,c=Zi;hn(null),wc(s);var u=o();return hn(l),wc(c),u};return n&&e.set("length",Ae(i.length)),new Proxy(i,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&tf();var u=e.get(l);return u===void 0?a(()=>{var d=Ae(c.value);return e.set(l,d),d}):ye(u,c.value,!0),!0},deleteProperty(o,l){var c=e.get(l);if(c===void 0){if(l in o){const u=a(()=>Ae(we));e.set(l,u),hs(r)}}else ye(c,we),hs(r);return!0},get(o,l,c){if(l===xi)return i;var u=e.get(l),d=l in o;if(u===void 0&&(!d||us(o,l)?.writable)&&(u=a(()=>{var p=Wi(d?o[l]:we),_=Ae(p);return _}),e.set(l,u)),u!==void 0){var h=K(u);return h===we?void 0:h}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=e.get(l);u&&(c.value=K(u))}else if(c===void 0){var d=e.get(l),h=d?.v;if(d!==void 0&&h!==we)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){if(l===xi)return!0;var c=e.get(l),u=c!==void 0&&c.v!==we||Reflect.has(o,l);if(c!==void 0||ne!==null&&(!u||us(o,l)?.writable)){c===void 0&&(c=a(()=>{var h=u?Wi(o[l]):we,p=Ae(h);return p}),e.set(l,c));var d=K(c);if(d===we)return!1}return u},set(o,l,c,u){var d=e.get(l),h=l in o;if(n&&l==="length")for(var p=c;p<d.v;p+=1){var _=e.get(p+"");_!==void 0?ye(_,we):p in o&&(_=a(()=>Ae(we)),e.set(p+"",_))}if(d===void 0)(!h||us(o,l)?.writable)&&(d=a(()=>Ae(void 0)),ye(d,Wi(c)),e.set(l,d));else{h=d.v!==we;var g=a(()=>Wi(c));ye(d,g)}var m=Reflect.getOwnPropertyDescriptor(o,l);if(m?.set&&m.set.call(u,c),!h){if(n&&typeof l=="string"){var f=e.get("length"),w=Number(l);Number.isInteger(w)&&w>=f.v&&ye(f,w+1)}hs(r)}return!0},ownKeys(o){K(r);var l=Reflect.ownKeys(o).filter(d=>{var h=e.get(d);return h===void 0||h.v!==we});for(var[c,u]of e)u.v!==we&&!(c in o)&&l.push(c);return l},setPrototypeOf(){ef()}})}function Sc(i){try{if(i!==null&&typeof i=="object"&&xi in i)return i[xi]}catch{}return i}function Df(i,t){return Object.is(Sc(i),Sc(t))}var bc,pd,md,gd;function kf(){if(bc===void 0){bc=window,pd=/Firefox/.test(navigator.userAgent);var i=Element.prototype,t=Node.prototype,e=Text.prototype;md=us(t,"firstChild").get,gd=us(t,"nextSibling").get,_c(i)&&(i[Ho]=void 0,i[ju]=null,i[Vo]=void 0,i.__e=void 0),_c(e)&&(e[Go]=void 0)}}function yi(i=""){return document.createTextNode(i)}function Fr(i){return md.call(i)}function Ss(i){return gd.call(i)}function st(i,t){return Fr(i)}function Re(i,t=!1){{var e=Fr(i);return e instanceof Comment&&e.data===""?Ss(e):e}}function pt(i,t=1,e=!1){let n=i;for(;t--;)n=Ss(n);return n}function Nf(i){i.textContent=""}function vd(){return!1}function Uf(i,t,e){return e?document.createElement(i,{is:e}):document.createElement(i)}function Ff(i,t){if(t){const e=document.body;i.autofocus=!0,Zn(()=>{document.activeElement===e&&i.focus()})}}let Ec=!1;function Of(){Ec||(Ec=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(const t of i.target.elements)t[aa]?.()})},{capture:!0}))}function Na(i){var t=re,e=ne;hn(null),Nn(null);try{return i()}finally{hn(t),Nn(e)}}function Bf(i,t,e,n=e){i.addEventListener(t,()=>Na(e));const r=i[aa];r?i[aa]=()=>{r(),n(!0)}:i[aa]=()=>n(!0),Of()}function _d(i){ne===null&&(re===null&&Jh(),Zh()),Ai&&Kh()}function zf(i,t){var e=t.last;e===null?t.last=t.first=i:(e.next=i,i.prev=e,t.last=i)}function An(i,t){var e=ne;e!==null&&(e.f&We)!==0&&(i|=We);var n={ctx:me,deps:null,nodes:null,f:i|De|dn,first:null,fn:t,last:null,next:null,parent:e,b:e&&e.b,prev:null,teardown:null,wv:0,ac:null};Zt?.register_created_effect(n);var r=n;if((i&kr)!==0)Ar!==null?Ar.push(n):Mi.ensure().schedule(n);else if(t!==null){try{Or(n)}catch(a){throw Ue(n),a}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Yr)===0&&(r=r.first,(i&yn)!==0&&(i&Ji)!==0&&r!==null&&(r.f|=Ji))}if(r!==null&&(r.parent=e,e!==null&&zf(r,e),re!==null&&(re.f&Fe)!==0&&(i&Ei)===0)){var s=re;(s.effects??=[]).push(r)}return n}function Ql(){return re!==null&&!bn}function xd(i){const t=An(_s,null);return ve(t,Te),t.teardown=i,t}function ps(i){_d();var t=ne.f,e=!re&&(t&wn)!==0&&me!==null&&!me.i;if(e){var n=me;(n.e??=[]).push(i)}else return yd(i)}function yd(i){return An(kr|Yu,i)}function Hf(i){return _d(),An(_s|Yu,i)}function Vf(i){Mi.ensure();const t=An(Ei|Yr,i);return(e={})=>new Promise(n=>{e.outro?Ki(t,()=>{Ue(t),n(void 0)}):(Ue(t),n(void 0))})}function tc(i){return An(kr,i)}function Gf(i){return An(Cr|Yr,i)}function ec(i,t=0){return An(_s|t,i)}function oe(i,t=[],e=[],n=[]){od(n,t,e,r=>{An(_s,()=>i(...r.map(K)))})}function Ua(i,t=0){var e=An(yn|t,i);return e}function Sd(i,t=0){var e=An(Xl|t,i);return e}function Ke(i){return An(wn|Yr,i)}function bd(i){var t=i.teardown;if(t!==null){const e=Ai,n=re;Mc(!0),hn(null);try{t.call(null)}finally{Mc(e),hn(n)}}}function nc(i,t=!1){var e=i.first;for(i.first=i.last=null;e!==null;){const r=e.ac;r!==null&&Na(()=>{r.abort(Da)});var n=e.next;(e.f&Ei)!==0?e.parent=null:Ue(e,t),e=n}}function Wf(i){for(var t=i.first;t!==null;){var e=t.next;(t.f&wn)===0&&Ue(t),t=e}}function Ue(i,t=!0){var e=!1;(t||(i.f&qh)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(qf(i.nodes.start,i.nodes.end),e=!0),ve(i,zo),nc(i,t&&!e),ms(i,0);var n=i.nodes&&i.nodes.t;if(n!==null)for(const s of n)s.stop();bd(i),i.f^=zo,i.f|=Mn;var r=i.parent;r!==null&&r.first!==null&&Ed(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=i.b=null}function qf(i,t){for(;i!==null;){var e=i===t?null:Ss(i);i.remove(),i=e}}function Ed(i){var t=i.parent,e=i.prev,n=i.next;e!==null&&(e.next=n),n!==null&&(n.prev=e),t!==null&&(t.first===i&&(t.first=n),t.last===i&&(t.last=e))}function Ki(i,t,e=!0){var n=[];Md(i,n,!0);var r=()=>{e&&Ue(i),t&&t()},s=n.length;if(s>0){var a=()=>--s||r();for(var o of n)o.out(a)}else r()}function Md(i,t,e){if((i.f&We)===0){i.f^=We;var n=i.nodes&&i.nodes.t;if(n!==null)for(const o of n)(o.is_global||e)&&t.push(o);for(var r=i.first;r!==null;){var s=r.next;if((r.f&Ei)===0){var a=(r.f&Ji)!==0||(r.f&wn)!==0&&(i.f&yn)!==0;Md(r,t,a?e:!1)}r=s}}}function Ea(i){wd(i,!0)}function wd(i,t){if((i.f&We)!==0){i.f^=We,(i.f&Te)===0&&(ve(i,De),Mi.ensure().schedule(i));for(var e=i.first;e!==null;){var n=e.next,r=(e.f&Ji)!==0||(e.f&wn)!==0;wd(e,r?t:!1),e=n}var s=i.nodes&&i.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function ic(i,t){if(i.nodes)for(var e=i.nodes.start,n=i.nodes.end;e!==null;){var r=e===n?null:Ss(e);t.append(e),e=r}}let la=!1,Ai=!1;function Mc(i){Ai=i}let re=null,bn=!1;function hn(i){re=i}let ne=null;function Nn(i){ne=i}let In=null;function Ad(i){re!==null&&(In??=new Set).add(i)}let je=null,nn=0,ln=null;function $f(i){ln=i}let Td=1,qi=0,Zi=qi;function wc(i){Zi=i}function Rd(){return++Td}function bs(i){var t=i.f;if((t&De)!==0)return!0;if(t&Fe&&(i.f&=~Qi),(t&kn)!==0){for(var e=i.deps,n=e.length,r=0;r<n;r++){var s=e[r];if(bs(s)&&cd(s),s.wv>i.wv)return!0}(t&dn)!==0&&Sn===null&&ve(i,Te)}return!1}function Cd(i,t,e=!0){var n=i.reactions;if(n!==null&&!(In!==null&&In.has(i)))for(var r=0;r<n.length;r++){var s=n[r];(s.f&Fe)!==0?Cd(s,t,!1):t===s&&(e?ve(s,De):(s.f&Te)!==0&&ve(s,kn),Kl(s))}}function Pd(i){var t=je,e=nn,n=ln,r=re,s=In,a=me,o=bn,l=Zi,c=i.f;je=null,nn=0,ln=null,re=(c&(wn|Ei))===0?i:null,In=null,Nr(i.ctx),bn=!1,Zi=++qi,i.ac!==null&&(Na(()=>{i.ac.abort(Da)}),i.ac=null);try{i.f|=ya;var u=i.fn,d=u();i.f|=Xr;var h=i.deps,p=Zt?.is_fork;if(je!==null){var _;if(p||ms(i,nn),h!==null&&nn>0)for(h.length=nn+je.length,_=0;_<je.length;_++)h[nn+_]=je[_];else i.deps=h=je;if(Ql()&&(i.f&dn)!==0)for(_=nn;_<h.length;_++)(h[_].reactions??=[]).push(i)}else!p&&h!==null&&nn<h.length&&(ms(i,nn),h.length=nn);if(ys()&&ln!==null&&!bn&&h!==null&&(i.f&(Fe|kn|De))===0)for(_=0;_<ln.length;_++)Cd(ln[_],i);if(r!==null&&r!==i){if(qi++,r.deps!==null)for(let g=0;g<e;g+=1)r.deps[g].rv=qi;if(t!==null)for(const g of t)g.rv=qi;ln!==null&&(n===null?n=ln:n.push(...ln))}return(i.f&_i)!==0&&(i.f^=_i),d}catch(g){return ed(g)}finally{i.f^=ya,je=t,nn=e,ln=n,re=r,In=s,Nr(a),bn=o,Zi=l}}function Xf(i,t){let e=t.reactions;if(e!==null){var n=zh.call(e,i);if(n!==-1){var r=e.length-1;r===0?e=t.reactions=null:(e[n]=e[r],e.pop())}}if(e===null&&(t.f&Fe)!==0&&(je===null||!_a.call(je,t))){var s=t;(s.f&dn)!==0&&(s.f^=dn,s.f&=~Qi),s.v!==we&&Yl(s),Lf(s),ms(s,0)}}function ms(i,t){var e=i.deps;if(e!==null)for(var n=t;n<e.length;n++)Xf(i,e[n])}function Or(i){var t=i.f;if((t&Mn)===0){ve(i,Te);var e=ne,n=la;ne=i,la=!0;try{(t&(yn|Xl))!==0?Wf(i):nc(i),bd(i);var r=Pd(i);i.teardown=typeof r=="function"?r:null,i.wv=Td;var s;qu&&vf&&(i.f&De)!==0&&i.deps}finally{la=n,ne=e}}}async function Yf(){await Promise.resolve(),bf()}function K(i){var t=i.f,e=(t&Fe)!==0;if(re!==null&&!bn){var n=ne!==null&&(ne.f&Mn)!==0;if(!n&&(In===null||!In.has(i))){var r=re.deps;if((re.f&ya)!==0)i.rv<qi&&(i.rv=qi,je===null&&r!==null&&r[nn]===i?nn++:je===null?je=[i]:je.push(i));else{re.deps??=[],_a.call(re.deps,i)||re.deps.push(i);var s=i.reactions;s===null?i.reactions=[re]:_a.call(s,re)||s.push(re)}}}if(Ai&&ji.has(i))return ji.get(i);if(e){var a=i;if(Ai){var o=a.v;return((a.f&Te)===0&&a.reactions!==null||Id(a))&&(o=Jl(a)),ji.set(a,o),o}var l=(a.f&dn)===0&&!bn&&re!==null&&(la||(re.f&dn)!==0),c=(a.f&Xr)===0;bs(a)&&(l&&(a.f|=dn),cd(a)),l&&!c&&(ud(a),Ld(a))}if(Sn?.has(i))return Sn.get(i);if((i.f&_i)!==0)throw i.v;return i.v}function Ld(i){if(i.f|=dn,i.deps!==null)for(const t of i.deps)(t.reactions??=[]).push(i),(t.f&Fe)!==0&&(t.f&dn)===0&&(ud(t),Ld(t))}function Id(i){if(i.v===we)return!0;if(i.deps===null)return!1;for(const t of i.deps)if(ji.has(t)||(t.f&Fe)!==0&&Id(t))return!0;return!1}function Es(i){var t=bn;try{return bn=!0,i()}finally{bn=t}}function jf(i){if(!(typeof i!="object"||!i||i instanceof EventTarget)){if(xi in i)$o(i);else if(!Array.isArray(i))for(let t in i){const e=i[t];typeof e=="object"&&e&&xi in e&&$o(e)}}}function $o(i,t=new Set){if(typeof i=="object"&&i!==null&&!(i instanceof EventTarget)&&!t.has(i)){t.add(i),i instanceof Date&&i.getTime();for(let n in i)try{$o(i[n],t)}catch{}const e=$l(i);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const n=$u(e);for(let r in n){const s=n[r].get;if(s)try{s.call(i)}catch{}}}}}function Kf(i){return i.endsWith("capture")&&i!=="gotpointercapture"&&i!=="lostpointercapture"}const Zf=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Jf(i){return Zf.includes(i)}const Qf={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function tp(i){return i=i.toLowerCase(),Qf[i]??i}const ep=["touchstart","touchmove"];function np(i){return ep.includes(i)}const os=Symbol("events"),Dd=new Set,Xo=new Set;function ip(i,t,e,n={}){function r(s){if(n.capture||Yo.call(t,s),!s.cancelBubble)return Na(()=>e?.call(this,s))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?Zn(()=>{t.addEventListener(i,r,n)}):t.addEventListener(i,r,n),r}function Xn(i,t,e){(t[os]??={})[i]=e}function Fa(i){for(var t=0;t<i.length;t++)Dd.add(i[t]);for(var e of Xo)e(i)}let Ac=null;function Yo(i){var t=this,e=t.ownerDocument,n=i.type,r=i.composedPath?.()||[],s=r[0]||i.target;Ac=i;var a=0,o=Ac===i&&i[os];if(o){var l=r.indexOf(o);if(l!==-1&&(t===document||t===window)){i[os]=t;return}var c=r.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||i.target,s!==t){Hh(i,"currentTarget",{configurable:!0,get(){return s||e}});var u=re,d=ne;hn(null),Nn(null);try{for(var h,p=[];s!==null&&s!==t;){try{var _=s[os]?.[n];_!=null&&(!s.disabled||i.target===s)&&_.call(s,i)}catch(g){h?p.push(g):h=g}if(i.cancelBubble)break;a++,s=a<r.length?r[a]:null}if(h){for(let g of p)queueMicrotask(()=>{throw g});throw h}}finally{i[os]=t,delete i.currentTarget,hn(u),Nn(d)}}}const rp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:i=>i});function sp(i){return rp?.createHTML(i)??i}function kd(i){var t=Uf("template");return t.innerHTML=sp(i.replaceAll("<!>","<!---->")),t.content}function Ma(i,t){var e=ne;e.nodes===null&&(e.nodes={start:i,end:t,a:null,t:null})}function Gt(i,t){var e=(t&cf)!==0,n=(t&uf)!==0,r,s=!i.startsWith("<!>");return()=>{r===void 0&&(r=kd(s?i:"<!>"+i),e||(r=Fr(r)));var a=n||pd?document.importNode(r,!0):r.cloneNode(!0);if(e){var o=Fr(a),l=a.lastChild;Ma(o,l)}else Ma(a,a);return a}}function ap(i,t,e="svg"){var n=!i.startsWith("<!>"),r=`<${e}>${n?i:"<!>"+i}</${e}>`,s;return()=>{if(!s){var a=kd(r),o=Fr(a);s=Fr(o)}var l=s.cloneNode(!0);return Ma(l,l),l}}function rc(i,t){return ap(i,t,"svg")}function op(i=""){{var t=yi(i+"");return Ma(t,t),t}}function Ft(i,t){i!==null&&i.before(t)}function pe(i,t){var e=t==null?"":typeof t=="object"?`${t}`:t;e!==(i[Go]??=i.nodeValue)&&(i[Go]=e,i.nodeValue=`${e}`)}function lp(i,t){return cp(i,t)}const Ds=new Map;function cp(i,{target:t,anchor:e,props:n={},events:r,context:s,intro:a=!0,transformError:o}){kf();var l=void 0,c=Vf(()=>{var u=e??t.appendChild(yi());Af(u,{pending:()=>{}},p=>{ir({});var _=me;s&&(_.c=s),r&&(n.$$events=r),l=i(p,n)||{},rr()},o);var d=new Set,h=p=>{for(var _=0;_<p.length;_++){var g=p[_];if(!d.has(g)){d.add(g);var m=np(g);for(const S of[t,document]){var f=Ds.get(S);f===void 0&&(f=new Map,Ds.set(S,f));var w=f.get(g);w===void 0?(S.addEventListener(g,Yo,{passive:m}),f.set(g,1)):f.set(g,w+1)}}}};return h(La(Dd)),Xo.add(h),()=>{for(var p of d)for(const m of[t,document]){var _=Ds.get(m),g=_.get(p);--g==0?(m.removeEventListener(p,Yo),_.delete(p),_.size===0&&Ds.delete(m)):_.set(p,g)}Xo.delete(h),u!==e&&u.parentNode?.removeChild(u)}});return up.set(l,c),l}let up=new WeakMap;class Nd{anchor;#e=new Map;#a=new Map;#t=new Map;#l=new Set;#i=!0;constructor(t,e=!0){this.anchor=t,this.#i=e}#s=t=>{if(this.#e.has(t)){var e=this.#e.get(t),n=this.#a.get(e);if(n)Ea(n),this.#l.delete(e);else{var r=this.#t.get(e);r&&(Ea(r.effect),this.#a.set(e,r.effect),this.#t.delete(e),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[s,a]of this.#e){if(this.#e.delete(s),s===t)break;const o=this.#t.get(a);o&&(Ue(o.effect),this.#t.delete(a))}for(const[s,a]of this.#a){if(s===e||this.#l.has(s))continue;const o=()=>{if(Array.from(this.#e.values()).includes(s)){var c=document.createDocumentFragment();ic(a,c),c.append(yi()),this.#t.set(s,{effect:a,fragment:c})}else Ue(a);this.#l.delete(s),this.#a.delete(s)};this.#i||!n?(this.#l.add(s),Ki(a,o,!1)):o()}}};#n=t=>{this.#e.delete(t);const e=Array.from(this.#e.values());for(const[n,r]of this.#t)e.includes(n)||(Ue(r.effect),this.#t.delete(n))};ensure(t,e){var n=Zt,r=vd();if(e&&!this.#a.has(t)&&!this.#t.has(t))if(r){var s=document.createDocumentFragment(),a=yi();s.append(a),this.#t.set(t,{effect:Ke(()=>e(a)),fragment:s})}else this.#a.set(t,Ke(()=>e(this.anchor)));if(this.#e.set(n,t),r){for(const[o,l]of this.#a)o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of this.#t)o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(this.#s),n.ondiscard(this.#n)}else this.#s(n)}}function Br(i,t,e=!1){var n=new Nd(i),r=e?Ji:0;function s(a,o){n.ensure(a,o)}Ua(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},r)}function dp(i,t){return t}function hp(i,t,e){for(var n=[],r=t.length,s,a=t.length,o=0;o<r;o++){let d=t[o];Ki(d,()=>{if(s){if(s.pending.delete(d),s.done.add(d),s.pending.size===0){var h=i.outrogroups;jo(i,La(s.done)),h.delete(s),h.size===0&&(i.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&e!==null;if(l){var c=e,u=c.parentNode;Nf(u),u.append(c),i.items.clear()}jo(i,t,!l)}else s={pending:new Set(t),done:new Set},(i.outrogroups??=new Set).add(s)}function jo(i,t,e=!0){var n;if(i.pending.size>0){n=new Set;for(const a of i.pending.values())for(const o of a)n.add(i.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(n?.has(s)){s.f|=Pn;const a=document.createDocumentFragment();ic(s,a)}else Ue(t[r],e)}}var Tc;function Jn(i,t,e,n,r,s=null){var a=i,o=new Map,l=(t&Zu)!==0;if(l){var c=i;a=c.appendChild(yi())}var u=null,d=Zl(()=>{var S=e();return ql(S)?S:S==null?[]:La(S)}),h,p=new Map,_=!0;function g(S){(w.effect.f&Mn)===0&&(w.pending.delete(S),w.fallback=u,fp(w,h,a,t,n),u!==null&&(h.length===0?(u.f&Pn)===0?Ea(u):(u.f^=Pn,ls(u,null,a)):Ki(u,()=>{u=null})))}function m(S){w.pending.delete(S)}var f=Ua(()=>{h=K(d);for(var S=h.length,E=new Set,L=Zt,P=vd(),T=0;T<S;T+=1){var D=h[T],V=n(D,T),v=_?null:o.get(V);v?(v.v&&Ur(v.v,D),v.i&&Ur(v.i,T),P&&L.unskip_effect(v.e)):(v=pp(o,_?a:Tc??=yi(),D,V,T,r,t,e),_||(v.e.f|=Pn),o.set(V,v)),E.add(V)}if(S===0&&s&&!u&&(_?u=Ke(()=>s(a)):(u=Ke(()=>s(Tc??=yi())),u.f|=Pn)),S>E.size&&jh(),!_)if(p.set(L,E),P){for(const[x,N]of o)E.has(x)||L.skip_effect(N.e);L.oncommit(g),L.ondiscard(m)}else g(L);K(d)}),w={effect:f,items:o,pending:p,outrogroups:null,fallback:u};_=!1}function Qr(i){for(;i!==null&&(i.f&wn)===0;)i=i.next;return i}function fp(i,t,e,n,r){var s=(n&of)!==0,a=t.length,o=i.items,l=Qr(i.effect.first),c,u=null,d,h=[],p=[],_,g,m,f;if(s)for(f=0;f<a;f+=1)_=t[f],g=r(_,f),m=o.get(g).e,(m.f&Pn)===0&&(m.nodes?.a?.measure(),(d??=new Set).add(m));for(f=0;f<a;f+=1){if(_=t[f],g=r(_,f),m=o.get(g).e,i.outrogroups!==null)for(const v of i.outrogroups)v.pending.delete(m),v.done.delete(m);if((m.f&We)!==0&&(Ea(m),s&&(m.nodes?.a?.unfix(),(d??=new Set).delete(m))),(m.f&Pn)!==0)if(m.f^=Pn,m===l)ls(m,null,e);else{var w=u?u.next:l;m===i.effect.last&&(i.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),ri(i,u,m),ri(i,m,w),ls(m,w,e),u=m,h=[],p=[],l=Qr(u.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(h.length<p.length){var S=p[0],E;u=S.prev;var L=h[0],P=h[h.length-1];for(E=0;E<h.length;E+=1)ls(h[E],S,e);for(E=0;E<p.length;E+=1)c.delete(p[E]);ri(i,L.prev,P.next),ri(i,u,L),ri(i,P,S),l=S,u=P,f-=1,h=[],p=[]}else c.delete(m),ls(m,l,e),ri(i,m.prev,m.next),ri(i,m,u===null?i.effect.first:u.next),ri(i,u,m),u=m;continue}for(h=[],p=[];l!==null&&l!==m;)(c??=new Set).add(l),p.push(l),l=Qr(l.next);if(l===null)continue}(m.f&Pn)===0&&h.push(m),u=m,l=Qr(m.next)}if(i.outrogroups!==null){for(const v of i.outrogroups)v.pending.size===0&&(jo(i,La(v.done)),i.outrogroups?.delete(v));i.outrogroups.size===0&&(i.outrogroups=null)}if(l!==null||c!==void 0){var T=[];if(c!==void 0)for(m of c)(m.f&We)===0&&T.push(m);for(;l!==null;)(l.f&We)===0&&l!==i.fallback&&T.push(l),l=Qr(l.next);var D=T.length;if(D>0){var V=(n&Zu)!==0&&a===0?e:null;if(s){for(f=0;f<D;f+=1)T[f].nodes?.a?.measure();for(f=0;f<D;f+=1)T[f].nodes?.a?.fix()}hp(i,T,V)}}s&&Zn(()=>{if(d!==void 0)for(m of d)m.nodes?.a?.apply()})}function pp(i,t,e,n,r,s,a,o){var l=(a&sf)!==0?(a&lf)===0?hd(e,!1,!1):wi(e):null,c=(a&af)!==0?wi(r):null;return{v:l,i:c,e:Ke(()=>(s(t,l??e,c??r,o),()=>{i.delete(n)}))}}function ls(i,t,e){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,s=t&&(t.f&Pn)===0?t.nodes.start:e;n!==null;){var a=Ss(n);if(s.before(n),n===r)return;n=a}}function ri(i,t,e){t===null?i.effect.first=e:t.next=e,e===null?i.effect.last=t:e.prev=t}function sc(i,t,...e){var n=new Nd(i);Ua(()=>{const r=t()??null;n.ensure(r,r&&(s=>r(s,...e)))},Ji)}function mp(i,t){var e=void 0,n;Sd(()=>{e!==(e=t())&&(n&&(Ue(n),n=null),e&&(n=Ke(()=>{tc(()=>e(i))})))})}function Ud(i){var t,e,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(t=0;t<r;t++)i[t]&&(e=Ud(i[t]))&&(n&&(n+=" "),n+=e)}else for(e in i)i[e]&&(n&&(n+=" "),n+=e);return n}function gp(){for(var i,t,e=0,n="",r=arguments.length;e<r;e++)(i=arguments[e])&&(t=Ud(i))&&(n&&(n+=" "),n+=t);return n}function Fd(i){return typeof i=="object"?gp(i):i??""}const Rc=[...` 	
\r\f \v\uFEFF`];function vp(i,t,e){var n=i==null?"":""+i;if(t&&(n=n?n+" "+t:t),e){for(var r of Object.keys(e))if(e[r])n=n?n+" "+r:r;else if(n.length)for(var s=r.length,a=0;(a=n.indexOf(r,a))>=0;){var o=a+s;(a===0||Rc.includes(n[a-1]))&&(o===n.length||Rc.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Cc(i,t=!1){var e=t?" !important;":";",n="";for(var r of Object.keys(i)){var s=i[r];s!=null&&s!==""&&(n+=" "+r+": "+s+e)}return n}function Ka(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function _p(i,t){if(t){var e="",n,r;if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(Ka)),r&&l.push(...Object.keys(r).map(Ka));var c=0,u=-1;const g=i.length;for(var d=0;d<g;d++){var h=i[d];if(o?h==="/"&&i[d-1]==="*"&&(o=!1):s?s===h&&(s=!1):h==="/"&&i[d+1]==="*"?o=!0:h==='"'||h==="'"?s=h:h==="("?a++:h===")"&&a--,!o&&s===!1&&a===0){if(h===":"&&u===-1)u=d;else if(h===";"||d===g-1){if(u!==-1){var p=Ka(i.substring(c,u).trim());if(!l.includes(p)){h!==";"&&d++;var _=i.substring(c,d).trim();e+=" "+_+";"}}c=d+1,u=-1}}}}return n&&(e+=Cc(n)),r&&(e+=Cc(r,!0)),e=e.trim(),e===""?null:e}return i==null?null:String(i)}function Qn(i,t,e,n,r,s){var a=i[Ho];if(a!==e||a===void 0){var o=vp(e,n,s);o==null?i.removeAttribute("class"):t?i.className=o:i.setAttribute("class",o),i[Ho]=e}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&i.classList.toggle(l,c)}return s}function Za(i,t={},e,n){for(var r in e){var s=e[r];t[r]!==s&&(e[r]==null?i.style.removeProperty(r):i.style.setProperty(r,s,n))}}function Yn(i,t,e,n){var r=i[Vo];if(r!==t){var s=_p(t,n);s==null?i.removeAttribute("style"):i.style.cssText=s,i[Vo]=t}else n&&(Array.isArray(n)?(Za(i,e?.[0],n[0]),Za(i,e?.[1],n[1],"important")):Za(i,e,n));return n}function Ko(i,t,e=!1){if(i.multiple){if(t==null)return;if(!ql(t))return pf();for(var n of i.options)n.selected=t.includes(Pc(n));return}for(n of i.options){var r=Pc(n);if(Df(r,t)){n.selected=!0;return}}(!e||t!==void 0)&&(i.selectedIndex=-1)}function xp(i){var t=new MutationObserver(()=>{Ko(i,i.__value)});t.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),xd(()=>{t.disconnect()})}function Pc(i){return"__value"in i?i.__value:i.value}const ks=Symbol("class"),ts=Symbol("style"),Od=Symbol("is custom element"),Bd=Symbol("is html"),yp=Ku?"option":"OPTION",Sp=Ku?"select":"SELECT";function bp(i,t){t?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function Tt(i,t,e,n){var r=zd(i);r[t]!==(r[t]=e)&&(t==="loading"&&(i[$h]=e),e==null?i.removeAttribute(t):typeof e!="string"&&Hd(i).includes(t)?i[t]=e:i.setAttribute(t,e))}function Ep(i,t,e,n,r=!1,s=!1){var a=zd(i),o=a[Od],l=!a[Bd],c=t||{},u=i.nodeName===yp;for(var d in t)d in e||(e[d]=null);e.class?e.class=Fd(e.class):e.class=null,e[ts]&&(e.style??=null);var h=Hd(i);for(const E in e){let L=e[E];if(u&&E==="value"&&L==null){i.value=i.__value="",c[E]=L;continue}if(E==="class"){var p=i.namespaceURI==="http://www.w3.org/1999/xhtml";Qn(i,p,L,n,t?.[ks],e[ks]),c[E]=L,c[ks]=e[ks];continue}if(E==="style"){Yn(i,L,t?.[ts],e[ts]),c[E]=L,c[ts]=e[ts];continue}var _=c[E];if(!(L===_&&!(L===void 0&&i.hasAttribute(E)))){c[E]=L;var g=E[0]+E[1];if(g!=="$$")if(g==="on"){const P={},T="$$"+E;let D=E.slice(2);var m=Jf(D);if(Kf(D)&&(D=D.slice(0,-7),P.capture=!0),!m&&_){if(L!=null)continue;i.removeEventListener(D,c[T],P),c[T]=null}if(m)Xn(D,i,L),Fa([D]);else if(L!=null){let V=function(v){c[E].call(this,v)};var S=V;c[T]=ip(D,i,V,P)}}else if(E==="style")Tt(i,E,L);else if(E==="autofocus")Ff(i,!!L);else if(!o&&(E==="__value"||E==="value"&&L!=null))i.value=i.__value=L;else if(E==="selected"&&u)bp(i,L);else{var f=E;l||(f=tp(f));var w=f==="defaultValue"||f==="defaultChecked";if(L==null&&!o&&!w)if(a[E]=null,f==="value"||f==="checked"){let P=i;const T=t===void 0;if(f==="value"){let D=P.defaultValue;P.removeAttribute(f),P.defaultValue=D,P.value=P.__value=T?D:null}else{let D=P.defaultChecked;P.removeAttribute(f),P.defaultChecked=D,P.checked=T?D:!1}}else i.removeAttribute(E);else w||h.includes(f)&&(o||typeof L!="string")?(i[f]=L,f in a&&(a[f]=we)):typeof L!="function"&&Tt(i,f,L)}}}return c}function Mp(i,t,e=[],n=[],r=[],s,a=!1,o=!1){od(r,e,n,l=>{var c=void 0,u={},d=i.nodeName===Sp,h=!1;if(Sd(()=>{var _=t(...l.map(K)),g=Ep(i,c,_,s,a,o);h&&d&&"value"in _&&Ko(i,_.value);for(let f of Object.getOwnPropertySymbols(u))_[f]||Ue(u[f]);for(let f of Object.getOwnPropertySymbols(_)){var m=_[f];f.description===hf&&(!c||m!==c[f])&&(u[f]&&Ue(u[f]),u[f]=Ke(()=>mp(i,()=>m))),g[f]=m}c=g}),d){var p=i;tc(()=>{Ko(p,c.value,!0),xp(p)})}h=!0})}function zd(i){return i[ju]??={[Od]:i.nodeName.includes("-"),[Bd]:i.namespaceURI===df}}var Lc=new Map;function Hd(i){var t=i.getAttribute("is")||i.nodeName,e=Lc.get(t);if(e)return e;Lc.set(t,e=[]);for(var n,r=i,s=Element.prototype;s!==r;){n=$u(r);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&e.push(a);r=$l(r)}return e}function fs(i,t,e=t){var n=new WeakSet;Bf(i,"input",async r=>{var s=r?i.defaultValue:i.value;if(s=Ja(i)?Qa(s):s,e(s),Zt!==null&&n.add(Zt),await Yf(),s!==(s=t())){var a=i.selectionStart,o=i.selectionEnd,l=i.value.length;if(i.value=s??"",o!==null){var c=i.value.length;a===o&&o===l&&c>l?(i.selectionStart=c,i.selectionEnd=c):(i.selectionStart=a,i.selectionEnd=Math.min(o,c))}}}),Es(t)==null&&i.value&&(e(Ja(i)?Qa(i.value):i.value),Zt!==null&&n.add(Zt)),ec(()=>{var r=t();if(i===document.activeElement){var s=Zt;if(n.has(s))return}Ja(i)&&r===Qa(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function Ja(i){var t=i.type;return t==="number"||t==="range"}function Qa(i){return i===""?null:+i}function to(i,t){return i===t||i?.[xi]===t}function zr(i={},t,e,n){var r=me.r,s=ne;return tc(()=>{var a,o;return ec(()=>{a=o,o=[],Es(()=>{to(e(...o),i)||(t(i,...o),a&&to(e(...a),i)&&t(null,...a))})}),()=>{let l=s;for(;l!==r&&l.parent!==null&&l.parent.f&zo;)l=l.parent;const c=()=>{o&&to(e(...o),i)&&t(null,...o)},u=l.teardown;l.teardown=()=>{c(),u?.()}}}),i}function Vd(i=!1){const t=me,e=t.l.u;if(!e)return;let n=()=>jf(t.s);if(i){let r=0,s={};const a=ka(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});n=()=>K(a)}e.b.length&&Hf(()=>{Ic(t,n),Oo(e.b)}),ps(()=>{const r=Es(()=>e.m.map(Wh));return()=>{for(const s of r)typeof s=="function"&&s()}}),e.a.length&&ps(()=>{Ic(t,n),Oo(e.a)})}function Ic(i,t){if(i.l.s)for(const e of i.l.s)K(e);t()}function wp(i){var t=wi(0);return function(){return arguments.length===1?(ye(t,K(t)+1),arguments[0]):(K(t),i())}}function ca(i,t,e,n){var r=n,s=!0,a=()=>(s&&(s=!1,r=n),r),o;o=i[t],o===void 0&&n!==void 0&&(o=a());var l;return l=()=>{var c=i[t];return c===void 0?a():(s=!0,c)},l}function Oa(i){me===null&&Xh(),xs&&me.l!==null?Ap(me).m.push(i):ps(()=>{const t=Es(i);if(typeof t=="function")return t})}function Ap(i){var t=i.l;return t.u??={a:[],b:[],m:[]}}const Tp="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Tp);_f();/*!
 * reveal.js 5.2.0
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
 */const Tr=(i,t)=>{for(let e in t)i[e]=t[e];return i},Lt=(i,t)=>Array.from(i.querySelectorAll(t)),eo=(i,t,e)=>{e?i.classList.add(t):i.classList.remove(t)},wr=i=>{if(typeof i=="string"){if(i==="null")return null;if(i==="true")return!0;if(i==="false")return!1;if(i.match(/^-?[\d\.]+$/))return parseFloat(i)}return i},fi=(i,t)=>{i.style.transform=t},wa=(i,t)=>{let e=i.matches||i.matchesSelector||i.msMatchesSelector;return!(!e||!e.call(i,t))},ze=(i,t)=>{if(typeof i.closest=="function")return i.closest(t);for(;i;){if(wa(i,t))return i;i=i.parentNode}return null},Gd=i=>{let t=(i=i||document.documentElement).requestFullscreen||i.webkitRequestFullscreen||i.webkitRequestFullScreen||i.mozRequestFullScreen||i.msRequestFullscreen;t&&t.apply(i)},Zo=i=>{let t=document.createElement("style");return t.type="text/css",i&&i.length>0&&(t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i))),document.head.appendChild(t),t},Dc=()=>{let i={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,(t=>{i[t.split("=").shift()]=t.split("=").pop()}));for(let t in i){let e=i[t];i[t]=wr(unescape(e))}return i.dependencies!==void 0&&delete i.dependencies,i},Rp={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},Wd=navigator.userAgent,Pr=/(iphone|ipod|ipad|android)/gi.test(Wd)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,qd=/android/gi.test(Wd);var Cp=(function(i){if(i){var t=function(v){return[].slice.call(v)},e=3,n=[],r=null,s="requestAnimationFrame"in i?function(){i.cancelAnimationFrame(r),r=i.requestAnimationFrame((function(){return o(n.filter((function(v){return v.dirty&&v.active})))}))}:function(){},a=function(v){return function(){n.forEach((function(x){return x.dirty=v})),s()}},o=function(v){v.filter((function(N){return!N.styleComputed})).forEach((function(N){N.styleComputed=d(N)})),v.filter(h).forEach(p);var x=v.filter(u);x.forEach(c),x.forEach((function(N){p(N),l(N)})),x.forEach(_)},l=function(v){return v.dirty=0},c=function(v){v.availableWidth=v.element.parentNode.clientWidth,v.currentWidth=v.element.scrollWidth,v.previousFontSize=v.currentFontSize,v.currentFontSize=Math.min(Math.max(v.minSize,v.availableWidth/v.currentWidth*v.previousFontSize),v.maxSize),v.whiteSpace=v.multiLine&&v.currentFontSize===v.minSize?"normal":"nowrap"},u=function(v){return v.dirty!==2||v.dirty===2&&v.element.parentNode.clientWidth!==v.availableWidth},d=function(v){var x=i.getComputedStyle(v.element,null);return v.currentFontSize=parseFloat(x.getPropertyValue("font-size")),v.display=x.getPropertyValue("display"),v.whiteSpace=x.getPropertyValue("white-space"),!0},h=function(v){var x=!1;return!v.preStyleTestCompleted&&(/inline-/.test(v.display)||(x=!0,v.display="inline-block"),v.whiteSpace!=="nowrap"&&(x=!0,v.whiteSpace="nowrap"),v.preStyleTestCompleted=!0,x)},p=function(v){v.element.style.whiteSpace=v.whiteSpace,v.element.style.display=v.display,v.element.style.fontSize=v.currentFontSize+"px"},_=function(v){v.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:v.previousFontSize,newValue:v.currentFontSize,scaleFactor:v.currentFontSize/v.previousFontSize}}))},g=function(v,x){return function(){v.dirty=x,v.active&&s()}},m=function(v){return function(){n=n.filter((function(x){return x.element!==v.element})),v.observeMutations&&v.observer.disconnect(),v.element.style.whiteSpace=v.originalStyle.whiteSpace,v.element.style.display=v.originalStyle.display,v.element.style.fontSize=v.originalStyle.fontSize}},f=function(v){return function(){v.active||(v.active=!0,s())}},w=function(v){return function(){return v.active=!1}},S=function(v){v.observeMutations&&(v.observer=new MutationObserver(g(v,1)),v.observer.observe(v.element,v.observeMutations))},E={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in i&&{subtree:!0,childList:!0,characterData:!0}},L=null,P=function(){i.clearTimeout(L),L=i.setTimeout(a(2),V.observeWindowDelay)},T=["resize","orientationchange"];return Object.defineProperty(V,"observeWindow",{set:function(v){var x="".concat(v?"add":"remove","EventListener");T.forEach((function(N){i[x](N,P)}))}}),V.observeWindow=!0,V.observeWindowDelay=100,V.fitAll=a(e),V}function D(v,x){var N=Object.assign({},E,x),B=v.map((function(W){var j=Object.assign({},N,{element:W,active:!0});return(function(z){z.originalStyle={whiteSpace:z.element.style.whiteSpace,display:z.element.style.display,fontSize:z.element.style.fontSize},S(z),z.newbie=!0,z.dirty=!0,n.push(z)})(j),{element:W,fit:g(j,e),unfreeze:f(j),freeze:w(j),unsubscribe:m(j)}}));return s(),B}function V(v){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof v=="string"?D(t(document.querySelectorAll(v)),x):D([v],x)[0]}})(typeof window>"u"?null:window);let Pp=class{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){if(this.Reveal.isScrollView())return!0;let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,Lt(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((r=>{(r.tagName!=="IFRAME"||this.shouldPreload(r))&&(r.setAttribute("src",r.getAttribute("data-src")),r.setAttribute("data-lazy-loaded",""),r.removeAttribute("data-src"))})),Lt(t,"video, audio").forEach((r=>{let s=0;Lt(r,"source[data-src]").forEach((a=>{a.setAttribute("src",a.getAttribute("data-src")),a.removeAttribute("data-src"),a.setAttribute("data-lazy-loaded",""),s+=1})),Pr&&r.tagName==="VIDEO"&&r.setAttribute("playsinline",""),s>0&&r.load()}));let n=t.slideBackgroundElement;if(n){n.style.display="block";let r=t.slideBackgroundContentElement,s=t.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let o=t.getAttribute("data-background-image"),l=t.getAttribute("data-background-video"),c=t.hasAttribute("data-background-video-loop"),u=t.hasAttribute("data-background-video-muted");if(o)/^data:/.test(o.trim())?r.style.backgroundImage=`url(${o.trim()})`:r.style.backgroundImage=o.split(",").map((d=>`url(${((h="")=>encodeURI(h).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,(p=>`%${p.charCodeAt(0).toString(16).toUpperCase()}`)))(decodeURI(d.trim()))})`)).join(",");else if(l){let d=document.createElement("video");c&&d.setAttribute("loop",""),(u||this.Reveal.isSpeakerNotes())&&(d.muted=!0),Pr&&(d.muted=!0,d.setAttribute("playsinline","")),l.split(",").forEach((h=>{const p=document.createElement("source");p.setAttribute("src",h);let _=((g="")=>Rp[g.split(".").pop()])(h);_&&p.setAttribute("type",_),d.appendChild(p)})),r.appendChild(d)}else if(s&&e.excludeIframes!==!0){let d=document.createElement("iframe");d.setAttribute("allowfullscreen",""),d.setAttribute("mozallowfullscreen",""),d.setAttribute("webkitallowfullscreen",""),d.setAttribute("allow","autoplay"),d.setAttribute("data-src",s),d.style.width="100%",d.style.height="100%",d.style.maxHeight="100%",d.style.maxWidth="100%",r.appendChild(d)}}let a=r.querySelector("iframe[data-src]");a&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(s)&&a.getAttribute("src")!==s&&a.setAttribute("src",s)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach((e=>{Cp(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})}))}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",Lt(e,"iframe[src]").forEach((n=>{n.removeAttribute("src")}))),Lt(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")})),Lt(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach((n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")}))}formatEmbeddedContent(){let t=(e,n,r)=>{Lt(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+n+'"]').forEach((s=>{let a=s.getAttribute(e);a&&a.indexOf(r)===-1&&s.setAttribute(e,a+(/\?/.test(a)?"&":"?")+r)}))};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){if(t){const e=this.Reveal.isSpeakerNotes();Lt(t,'img[src$=".gif"]').forEach((n=>{n.setAttribute("src",n.getAttribute("src"))})),Lt(t,"video, audio").forEach((n=>{if(ze(n,".fragment")&&!ze(n,".fragment.visible"))return;let r=this.Reveal.getConfig().autoPlayMedia;if(typeof r!="boolean"&&(r=n.hasAttribute("data-autoplay")||!!ze(n,".slide-background")),r&&typeof n.play=="function"){if(e&&!n.muted)return;if(n.readyState>1)this.startEmbeddedMedia({target:n});else if(Pr){let s=n.play();s&&typeof s.catch=="function"&&n.controls===!1&&s.catch((()=>{n.controls=!0,n.addEventListener("play",(()=>{n.controls=!1}))}))}else n.removeEventListener("loadeddata",this.startEmbeddedMedia),n.addEventListener("loadeddata",this.startEmbeddedMedia)}})),e||(Lt(t,"iframe[src]").forEach((n=>{ze(n,".fragment")&&!ze(n,".fragment.visible")||this.startEmbeddedIframe({target:n})})),Lt(t,"iframe[data-src]").forEach((n=>{ze(n,".fragment")&&!ze(n,".fragment.visible")||n.getAttribute("src")!==n.getAttribute("data-src")&&(n.removeEventListener("load",this.startEmbeddedIframe),n.addEventListener("load",this.startEmbeddedIframe),n.setAttribute("src",n.getAttribute("data-src")))})))}}startEmbeddedMedia(t){let e=!!ze(t.target,"html"),n=!!ze(t.target,".present");e&&n&&(t.target.paused||t.target.ended)&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let n=!!ze(t.target,"html"),r=!!ze(t.target,".present");if(n&&r){let s=this.Reveal.getConfig().autoPlayMedia;typeof s!="boolean"&&(s=e.hasAttribute("data-autoplay")||!!ze(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&s?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&s?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=Tr({unloadIframes:!0},e),t&&t.parentNode&&(Lt(t,"video, audio").forEach((n=>{n.hasAttribute("data-ignore")||typeof n.pause!="function"||(n.setAttribute("data-paused-by-reveal",""),n.pause())})),Lt(t,"iframe").forEach((n=>{n.contentWindow&&n.contentWindow.postMessage("slide:stop","*"),n.removeEventListener("load",this.startEmbeddedIframe)})),Lt(t,'iframe[src*="youtube.com/embed/"]').forEach((n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})),Lt(t,'iframe[src*="player.vimeo.com/"]').forEach((n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"method":"pause"}',"*")})),e.unloadIframes===!0&&Lt(t,"iframe[data-src]").forEach((n=>{n.setAttribute("src","about:blank"),n.removeAttribute("src")})))}};const $i=".slides section",di=".slides>section",kc=".slides>section.present>section",Lp=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/;let Ip=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let n="none";t.slideNumber&&!this.Reveal.isPrintView()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(n="block"),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,n=this.Reveal.getConfig(),r="h.v";if(typeof n.slideNumber=="function")e=n.slideNumber(t);else{typeof n.slideNumber=="string"&&(r=n.slideNumber),/c/.test(r)||this.Reveal.getHorizontalSlides().length!==1||(r="c");let a=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],r){case"c":e.push(this.Reveal.getSlidePastCount(t)+a);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+a,"/",this.Reveal.getTotalSlides());break;default:let o=this.Reveal.getIndices(t);e.push(o.h+a);let l=r==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(l,o.v+1)}}let s="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],s)}formatNumber(t,e,n,r="#"+this.Reveal.location.getHash()){return typeof n!="number"||isNaN(n)?`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${r}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${n}</span>
					</a>`}destroy(){this.element.remove()}},Dp=class{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let t,e=this.jumpInput.value.trim("");if(/^\d+$/.test(e)){const n=this.Reveal.getConfig().slideNumber;if(n==="c"||n==="c/t"){const r=this.Reveal.getSlides()[parseInt(e,10)-1];r&&(t=this.Reveal.getIndices(r))}}return t||(/^\d+\.\d+$/.test(e)&&(e=e.replace(".","/")),t=this.Reveal.location.getIndicesFromHash(e,{oneBasedIndex:!0})),!t&&/\S+/i.test(e)&&e.length>1&&(t=this.search(e)),t&&e!==""?(this.Reveal.slide(t.h,t.v,t.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout((()=>this.jump()),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),n=this.Reveal.getSlides().find((r=>e.test(r.innerText)));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout((()=>this.hide()),1)}};const no=i=>{let t=i.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=i.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let n=i.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let r=i.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return r?{r:parseInt(r[1],10),g:parseInt(r[2],10),b:parseInt(r[3],10),a:parseFloat(r[4])}:null};let kp=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach((t=>{let e=this.createBackground(t,this.element);Lt(t,"section").forEach((n=>{this.createBackground(n,e),e.classList.add("stack")}))})),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout((()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")}),1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let n=document.createElement("div");n.className="slide-background "+t.className.replace(/present|past|future/,"");let r=document.createElement("div");return r.className="slide-background-content",n.appendChild(r),e.appendChild(n),t.slideBackgroundElement=n,t.slideBackgroundContentElement=r,this.sync(t),n}sync(t){const e=t.slideBackgroundElement,n=t.slideBackgroundContentElement,r={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},s=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",n.style.backgroundSize="",n.style.backgroundRepeat="",n.style.backgroundPosition="",n.style.backgroundImage="",n.style.opacity="",n.innerHTML="",r.background&&(/^(http|file|\/\/)/gi.test(r.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(r.background)?t.setAttribute("data-background-image",r.background):e.style.background=r.background),(r.background||r.backgroundColor||r.backgroundGradient||r.backgroundImage||r.backgroundVideo||r.backgroundIframe)&&e.setAttribute("data-background-hash",r.background+r.backgroundSize+r.backgroundImage+r.backgroundVideo+r.backgroundIframe+r.backgroundColor+r.backgroundGradient+r.backgroundRepeat+r.backgroundPosition+r.backgroundTransition+r.backgroundOpacity),r.backgroundSize&&e.setAttribute("data-background-size",r.backgroundSize),r.backgroundColor&&(e.style.backgroundColor=r.backgroundColor),r.backgroundGradient&&(e.style.backgroundImage=r.backgroundGradient),r.backgroundTransition&&e.setAttribute("data-background-transition",r.backgroundTransition),s&&e.setAttribute("data-preload",""),r.backgroundSize&&(n.style.backgroundSize=r.backgroundSize),r.backgroundRepeat&&(n.style.backgroundRepeat=r.backgroundRepeat),r.backgroundPosition&&(n.style.backgroundPosition=r.backgroundPosition),r.backgroundOpacity&&(n.style.opacity=r.backgroundOpacity);const a=this.getContrastClass(t);typeof a=="string"&&t.classList.add(a)}getContrastClass(t){const e=t.slideBackgroundElement;let n=t.getAttribute("data-background-color");if(!n||!no(n)){let s=window.getComputedStyle(e);s&&s.backgroundColor&&(n=s.backgroundColor)}if(n){const s=no(n);if(s&&s.a!==0)return typeof(r=n)=="string"&&(r=no(r)),(r?(299*r.r+587*r.g+114*r.b)/1e3:null)<128?"has-dark-background":"has-light-background"}var r;return null}bubbleSlideContrastClassToElement(t,e){["has-light-background","has-dark-background"].forEach((n=>{t.classList.contains(n)?e.classList.add(n):e.classList.remove(n)}),this)}update(t=!1){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide(),r=this.Reveal.getIndices(),s=null,a=e.rtl?"future":"past",o=e.rtl?"past":"future";if(Array.from(this.element.childNodes).forEach(((c,u)=>{c.classList.remove("past","present","future"),u<r.h?c.classList.add(a):u>r.h?c.classList.add(o):(c.classList.add("present"),s=c),(t||u===r.h)&&Lt(c,".slide-background").forEach(((d,h)=>{d.classList.remove("past","present","future");const p=typeof r.v=="number"?r.v:0;h<p?d.classList.add("past"):h>p?d.classList.add("future"):(d.classList.add("present"),u===r.h&&(s=d))}))})),this.previousBackground&&!this.previousBackground.closest("body")&&(this.previousBackground=null),s&&this.previousBackground){let c=this.previousBackground.getAttribute("data-background-hash"),u=s.getAttribute("data-background-hash");if(u&&u===c&&s!==this.previousBackground){this.element.classList.add("no-transition");const d=s.querySelector("video"),h=this.previousBackground.querySelector("video");if(d&&h){const p=d.parentNode;h.parentNode.appendChild(d),p.appendChild(h)}}}const l=s!==this.previousBackground;if(l&&this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),l&&s){this.Reveal.slideContent.startEmbeddedContent(s);let c=s.querySelector(".slide-background-content");if(c){let u=c.style.backgroundImage||"";/\.gif/i.test(u)&&(c.style.backgroundImage="",window.getComputedStyle(c).opacity,c.style.backgroundImage=u)}this.previousBackground=s}n&&this.bubbleSlideContrastClassToElement(n,this.Reveal.getRevealElement()),setTimeout((()=>{this.element.classList.remove("no-transition")}),10)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,n,r=this.Reveal.getHorizontalSlides(),s=this.Reveal.getVerticalSlides(),a=this.element.style.backgroundSize.split(" ");a.length===1?e=n=parseInt(a[0],10):(e=parseInt(a[0],10),n=parseInt(a[1],10));let o,l,c=this.element.offsetWidth,u=r.length;o=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:u>1?(e-c)/(u-1):0,l=o*t.h*-1;let d,h,p=this.element.offsetHeight,_=s.length;d=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(n-p)/(_-1),h=_>0?d*t.v:0,this.element.style.backgroundPosition=l+"px "+-h+"px"}}destroy(){this.element.remove()}},Nc=0,Np=class{constructor(t){this.Reveal=t}run(t,e){this.reset();let n=this.Reveal.getSlides(),r=n.indexOf(e),s=n.indexOf(t);if(t&&e&&t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(r>s?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||Zo();let a=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",a.slideDirection=r>s?"forward":"backward";let o=t.style.display==="none";o&&(t.style.display=this.Reveal.getConfig().display);let l=this.getAutoAnimatableElements(t,e).map((c=>this.autoAnimateElements(c.from,c.to,c.options||{},a,Nc++)));if(o&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let c=.8*a.duration,u=.2*a.duration;this.getUnmatchedAutoAnimateElements(e).forEach((d=>{let h=this.getAutoAnimateOptions(d,a),p="unmatched";h.duration===a.duration&&h.delay===a.delay||(p="unmatched-"+Nc++,l.push(`[data-auto-animate="running"] [data-auto-animate-target="${p}"] { transition: opacity ${h.duration}s ease ${h.delay}s; }`)),d.dataset.autoAnimateTarget=p}),this),l.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${c}s ease ${u}s; }`)}this.autoAnimateStyleSheet.innerHTML=l.join(""),requestAnimationFrame((()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")})),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){Lt(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach((t=>{t.dataset.autoAnimate=""})),Lt(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach((t=>{delete t.dataset.autoAnimateTarget})),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,n,r,s){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=s;let a=this.getAutoAnimateOptions(e,r);n.delay!==void 0&&(a.delay=n.delay),n.duration!==void 0&&(a.duration=n.duration),n.easing!==void 0&&(a.easing=n.easing);let o=this.getAutoAnimatableProperties("from",t,n),l=this.getAutoAnimatableProperties("to",e,n);if(e.classList.contains("fragment")&&delete l.styles.opacity,n.translate!==!1||n.scale!==!1){let d=this.Reveal.getScale(),h={x:(o.x-l.x)/d,y:(o.y-l.y)/d,scaleX:o.width/l.width,scaleY:o.height/l.height};h.x=Math.round(1e3*h.x)/1e3,h.y=Math.round(1e3*h.y)/1e3,h.scaleX=Math.round(1e3*h.scaleX)/1e3,h.scaleX=Math.round(1e3*h.scaleX)/1e3;let p=n.translate!==!1&&(h.x!==0||h.y!==0),_=n.scale!==!1&&(h.scaleX!==0||h.scaleY!==0);if(p||_){let g=[];p&&g.push(`translate(${h.x}px, ${h.y}px)`),_&&g.push(`scale(${h.scaleX}, ${h.scaleY})`),o.styles.transform=g.join(" "),o.styles["transform-origin"]="top left",l.styles.transform="none"}}for(let d in l.styles){const h=l.styles[d],p=o.styles[d];h===p?delete l.styles[d]:(h.explicitValue===!0&&(l.styles[d]=h.value),p.explicitValue===!0&&(o.styles[d]=p.value))}let c="",u=Object.keys(l.styles);return u.length>0&&(o.styles.transition="none",l.styles.transition=`all ${a.duration}s ${a.easing} ${a.delay}s`,l.styles["transition-property"]=u.join(", "),l.styles["will-change"]=u.join(", "),c='[data-auto-animate-target="'+s+'"] {'+Object.keys(o.styles).map((d=>d+": "+o.styles[d]+" !important;")).join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+s+'"] {'+Object.keys(l.styles).map((d=>d+": "+l.styles[d]+" !important;")).join("")+"}"),c}getAutoAnimateOptions(t,e){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=Tr(n,e),t.parentNode){let r=ze(t.parentNode,"[data-auto-animate-target]");r&&(n=this.getAutoAnimateOptions(r,n))}return t.dataset.autoAnimateEasing&&(n.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(n.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(n.delay=parseFloat(t.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(t,e,n){let r=this.Reveal.getConfig(),s={styles:[]};if(n.translate!==!1||n.scale!==!1){let o;if(typeof n.measure=="function")o=n.measure(e);else if(r.center)o=e.getBoundingClientRect();else{let l=this.Reveal.getScale();o={x:e.offsetLeft*l,y:e.offsetTop*l,width:e.offsetWidth*l,height:e.offsetHeight*l}}s.x=o.x,s.y=o.y,s.width=o.width,s.height=o.height}const a=getComputedStyle(e);return(n.styles||r.autoAnimateStyles).forEach((o=>{let l;typeof o=="string"&&(o={property:o}),o.from!==void 0&&t==="from"?l={value:o.from,explicitValue:!0}:o.to!==void 0&&t==="to"?l={value:o.to,explicitValue:!0}:(o.property==="line-height"&&(l=parseFloat(a["line-height"])/parseFloat(a["font-size"])),isNaN(l)&&(l=a[o.property])),l!==""&&(s.styles[o.property]=l)})),s}getAutoAnimatableElements(t,e){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),r=[];return n.filter(((s,a)=>{if(r.indexOf(s.to)===-1)return r.push(s.to),!0}))}getAutoAnimatePairs(t,e){let n=[];const r="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(n,t,e,"[data-id]",(s=>s.nodeName+":::"+s.getAttribute("data-id"))),this.findAutoAnimateMatches(n,t,e,r,(s=>s.nodeName+":::"+s.textContent.trim())),this.findAutoAnimateMatches(n,t,e,"img, video, iframe",(s=>s.nodeName+":::"+(s.getAttribute("src")||s.getAttribute("data-src")))),this.findAutoAnimateMatches(n,t,e,"pre",(s=>s.nodeName+":::"+s.textContent.trim())),n.forEach((s=>{wa(s.from,r)?s.options={scale:!1}:wa(s.from,"pre")&&(s.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(n,s.from,s.to,".hljs .hljs-ln-code",(a=>a.textContent),{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,s.from,s.to,".hljs .hljs-ln-numbers[data-line-number]",(a=>a.getAttribute("data-line-number")),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))}),this),n}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,n,r,s,a){let o={},l={};[].slice.call(e.querySelectorAll(r)).forEach(((c,u)=>{const d=s(c);typeof d=="string"&&d.length&&(o[d]=o[d]||[],o[d].push(c))})),[].slice.call(n.querySelectorAll(r)).forEach(((c,u)=>{const d=s(c);let h;if(l[d]=l[d]||[],l[d].push(c),o[d]){const p=l[d].length-1,_=o[d].length-1;o[d][p]?(h=o[d][p],o[d][p]=null):o[d][_]&&(h=o[d][_],o[d][_]=null)}h&&t.push({from:h,to:c,options:a})}))}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce(((e,n)=>{const r=n.querySelector("[data-auto-animate-target]");return n.hasAttribute("data-auto-animate-target")||r||e.push(n),n.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(n))),e}),[])}},Up=class{constructor(t){this.Reveal=t,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;const t=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;const e=Lt(this.Reveal.getRevealElement(),di),n=Lt(this.Reveal.getRevealElement(),".backgrounds>.slide-background");let r;this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");const s=window.getComputedStyle(this.viewportElement);s&&s.background&&(r=s.background);const a=[],o=e[0].parentNode;let l;const c=(u,d,h,p)=>{let _;if(l&&this.Reveal.shouldAutoAnimateBetween(l,u))_=document.createElement("div"),_.className="scroll-page-content scroll-auto-animate-page",_.style.display="none",l.closest(".scroll-page-content").parentNode.appendChild(_);else{const g=document.createElement("div");if(g.className="scroll-page",a.push(g),p&&n.length>d){const f=n[d],w=window.getComputedStyle(f);w&&w.background?g.style.background=w.background:r&&(g.style.background=r)}else r&&(g.style.background=r);const m=document.createElement("div");m.className="scroll-page-sticky",g.appendChild(m),_=document.createElement("div"),_.className="scroll-page-content",m.appendChild(_)}_.appendChild(u),u.classList.remove("past","future"),u.setAttribute("data-index-h",d),u.setAttribute("data-index-v",h),u.slideBackgroundElement&&(u.slideBackgroundElement.remove("past","future"),_.insertBefore(u.slideBackgroundElement,u)),l=u};e.forEach(((u,d)=>{this.Reveal.isVerticalStack(u)?u.querySelectorAll("section").forEach(((h,p)=>{c(h,d,p,!0)})):c(u,d,0)}),this),this.createProgressBar(),Lt(this.Reveal.getRevealElement(),".stack").forEach((u=>u.remove())),a.forEach((u=>o.appendChild(u))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(t),this.activatedCallbacks.forEach((u=>u())),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;const t=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(t),this.slideHTMLBeforeActivation=null}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);const t=n=>{let r=(n.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;r=Math.max(Math.min(r,1),0),this.viewportElement.scrollTop=r*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},e=n=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e)};this.progressBarInner.addEventListener("mousedown",(n=>{n.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),t(n)}))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){const t=this.Reveal.getConfig(),e=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),n=this.Reveal.getScale(),r=t.scrollLayout==="compact",s=this.viewportElement.offsetHeight,a=e.height*n,o=r?a:s;this.scrollTriggerHeight=r?a:s,this.viewportElement.style.setProperty("--page-height",o+"px"),this.viewportElement.style.scrollSnapType=typeof t.scrollSnap=="string"?`y ${t.scrollSnap}`:"",this.slideTriggers=[];const l=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=l.map((c=>{const u=this.createPage({pageElement:c,slideElement:c.querySelector("section"),stickyElement:c.querySelector(".scroll-page-sticky"),contentElement:c.querySelector(".scroll-page-content"),backgroundElement:c.querySelector(".slide-background"),autoAnimateElements:c.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});u.pageElement.style.setProperty("--slide-height",t.center===!0?"auto":e.height+"px"),this.slideTriggers.push({page:u,activate:()=>this.activatePage(u),deactivate:()=>this.deactivatePage(u)}),this.createFragmentTriggersForPage(u),u.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(u);let d=Math.max(u.scrollTriggers.length-1,0);d+=u.autoAnimatePages.reduce(((h,p)=>h+Math.max(p.scrollTriggers.length-1,0)),u.autoAnimatePages.length),u.pageElement.querySelectorAll(".scroll-snap-point").forEach((h=>h.remove()));for(let h=0;h<d+1;h++){const p=document.createElement("div");p.className="scroll-snap-point",p.style.height=this.scrollTriggerHeight+"px",p.style.scrollSnapAlign=r?"center":"start",u.pageElement.appendChild(p),h===0&&(p.style.marginTop=-this.scrollTriggerHeight+"px")}return r&&u.scrollTriggers.length>0?(u.pageHeight=s,u.pageElement.style.setProperty("--page-height",s+"px")):(u.pageHeight=o,u.pageElement.style.removeProperty("--page-height")),u.scrollPadding=this.scrollTriggerHeight*d,u.totalHeight=u.pageHeight+u.scrollPadding,u.pageElement.style.setProperty("--page-scroll-padding",u.scrollPadding+"px"),d>0?(u.stickyElement.style.position="sticky",u.stickyElement.style.top=Math.max((s-u.pageHeight)/2,0)+"px"):(u.stickyElement.style.position="relative",u.pageElement.style.scrollSnapAlign=u.pageHeight<s?"center":"start"),u})),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",t.scrollProgress),t.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce(((e,n)=>e+Math.max(n.page.scrollTriggers.length,1)),0);let t=0;this.slideTriggers.forEach(((e,n)=>{e.range=[t,t+Math.max(e.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];const r=(e.range[1]-e.range[0])/e.page.scrollTriggers.length;e.page.scrollTriggers.forEach(((s,a)=>{s.range=[t+a*r,t+(a+1)*r]})),t=e.range[1]})),this.slideTriggers[this.slideTriggers.length-1].range[1]=1}createFragmentTriggersForPage(t,e){e=e||t.slideElement;const n=this.Reveal.fragments.sort(e.querySelectorAll(".fragment"),!0);return n.length&&(t.fragments=this.Reveal.fragments.sort(e.querySelectorAll(".fragment:not(.disabled)")),t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,t.fragments,e)}}),n.forEach(((r,s)=>{t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(s,t.fragments,e)}})}))),t.scrollTriggers.length}createAutoAnimateTriggersForPage(t){t.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(t.autoAnimateElements).map(((e,n)=>{let r=this.createPage({slideElement:e.querySelector("section"),contentElement:e,backgroundElement:e.querySelector(".slide-background")});return this.createFragmentTriggersForPage(r,r.slideElement),t.autoAnimatePages.push(r),{page:r,activate:()=>this.activatePage(r),deactivate:()=>this.deactivatePage(r)}})))}createPage(t){return t.scrollTriggers=[],t.indexh=parseInt(t.slideElement.getAttribute("data-index-h"),10),t.indexv=parseInt(t.slideElement.getAttribute("data-index-v"),10),t}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach((a=>a.remove()));const t=this.viewportElement.scrollHeight,e=this.viewportElement.offsetHeight,n=e/t;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(n*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;const r=e/t*this.progressBarHeight,s=Math.min(r/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-s+"px",r>6?this.slideTriggers.forEach((a=>{const{page:o}=a;o.progressBarSlide=document.createElement("div"),o.progressBarSlide.className="scrollbar-slide",o.progressBarSlide.style.top=a.range[0]*this.progressBarHeight+"px",o.progressBarSlide.style.height=(a.range[1]-a.range[0])*this.progressBarHeight-s+"px",o.progressBarSlide.classList.toggle("has-triggers",o.scrollTriggers.length>0),this.progressBarInner.appendChild(o.progressBarSlide),o.scrollTriggerElements=o.scrollTriggers.map(((l,c)=>{const u=document.createElement("div");return u.className="scrollbar-trigger",u.style.top=(l.range[0]-a.range[0])*this.progressBarHeight+"px",u.style.height=(l.range[1]-l.range[0])*this.progressBarHeight-s+"px",o.progressBarSlide.appendChild(u),c===0&&(u.style.display="none"),u}))})):this.pages.forEach((a=>a.progressBarSlide=null))}syncScrollPosition(){const t=this.viewportElement.offsetHeight,e=t/this.viewportElement.scrollHeight,n=this.viewportElement.scrollTop,r=this.viewportElement.scrollHeight-t,s=Math.max(Math.min(n/r,1),0),a=Math.max(Math.min((n+t/2)/this.viewportElement.scrollHeight,1),0);let o;this.slideTriggers.forEach((l=>{const{page:c}=l;s>=l.range[0]-2*e&&s<=l.range[1]+2*e&&!c.loaded?(c.loaded=!0,this.Reveal.slideContent.load(c.slideElement)):c.loaded&&(c.loaded=!1,this.Reveal.slideContent.unload(c.slideElement)),s>=l.range[0]&&s<=l.range[1]?(this.activateTrigger(l),o=l.page):l.active&&this.deactivateTrigger(l)})),o&&o.scrollTriggers.forEach((l=>{a>=l.range[0]&&a<=l.range[1]?this.activateTrigger(l):l.active&&this.deactivateTrigger(l)})),this.setProgressBarValue(n/(this.viewportElement.scrollHeight-t))}setProgressBarValue(t){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${t*this.progressBarScrollableHeight}px)`,this.getAllPages().filter((e=>e.progressBarSlide)).forEach((e=>{e.progressBarSlide.classList.toggle("active",e.active===!0),e.scrollTriggers.forEach(((n,r)=>{e.scrollTriggerElements[r].classList.toggle("active",e.active===!0&&n.active===!0)}))})),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!=="auto"||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout((()=>{this.progressBar&&this.progressBar.classList.remove("visible")}),500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(t){if(this.active){const e=this.getScrollTriggerBySlide(t);e&&(this.viewportElement.scrollTop=e.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push((()=>this.scrollToSlide(t)))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout((()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null}),50)}restoreScrollPosition(){const t=sessionStorage.getItem("reveal-scroll-top"),e=sessionStorage.getItem("reveal-scroll-origin");t&&e===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(t,10))}activatePage(t){if(!t.active){t.active=!0;const{slideElement:e,backgroundElement:n,contentElement:r,indexh:s,indexv:a}=t;r.style.display="block",e.classList.add("present"),n&&n.classList.add("present"),this.Reveal.setCurrentScrollPage(e,s,a),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(e,this.viewportElement),Array.from(r.parentNode.querySelectorAll(".scroll-page-content")).forEach((o=>{o!==r&&(o.style.display="none")}))}}deactivatePage(t){t.active&&(t.active=!1,t.slideElement&&t.slideElement.classList.remove("present"),t.backgroundElement&&t.backgroundElement.classList.remove("present"))}activateTrigger(t){t.active||(t.active=!0,t.activate())}deactivateTrigger(t){t.active&&(t.active=!1,t.deactivate&&t.deactivate())}getSlideByIndices(t,e){const n=this.getAllPages().find((r=>r.indexh===t&&r.indexv===e));return n?n.slideElement:null}getScrollTriggerBySlide(t){return this.slideTriggers.find((e=>e.page.slideElement===t))}getAllPages(){return this.pages.flatMap((t=>[t,...t.autoAnimatePages||[]]))}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}},Fp=class{constructor(t){this.Reveal=t}async activate(){const t=this.Reveal.getConfig(),e=Lt(this.Reveal.getRevealElement(),$i),n=t.slideNumber&&/all|print/i.test(t.showSlideNumber),r=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),s=Math.floor(r.width*(1+t.margin)),a=Math.floor(r.height*(1+t.margin)),o=r.width,l=r.height;await new Promise(requestAnimationFrame),Zo("@page{size:"+s+"px "+a+"px; margin: 0px;}"),Zo(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+o+"px; max-height:"+l+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=s+"px",document.body.style.height=a+"px";const c=this.Reveal.getViewportElement();let u;if(c){const g=window.getComputedStyle(c);g&&g.background&&(u=g.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(o,l),await new Promise(requestAnimationFrame);const d=e.map((g=>g.scrollHeight)),h=[],p=e[0].parentNode;let _=1;e.forEach((function(g,m){if(g.classList.contains("stack")===!1){let f=(s-o)/2,w=(a-l)/2;const S=d[m];let E=Math.max(Math.ceil(S/a),1);E=Math.min(E,t.pdfMaxPagesPerSlide),(E===1&&t.center||g.classList.contains("center"))&&(w=Math.max((a-S)/2,0));const L=document.createElement("div");if(h.push(L),L.className="pdf-page",L.style.height=(a+t.pdfPageHeightOffset)*E+"px",u&&(L.style.background=u),L.appendChild(g),g.style.left=f+"px",g.style.top=w+"px",g.style.width=o+"px",this.Reveal.slideContent.layout(g),g.slideBackgroundElement&&L.insertBefore(g.slideBackgroundElement,g),t.showNotes){const P=this.Reveal.getSlideNotes(g);if(P){const D=typeof t.showNotes=="string"?t.showNotes:"inline",V=document.createElement("div");V.classList.add("speaker-notes"),V.classList.add("speaker-notes-pdf"),V.setAttribute("data-layout",D),V.innerHTML=P,D==="separate-page"?h.push(V):(V.style.left="8px",V.style.bottom="8px",V.style.width=s-16+"px",L.appendChild(V))}}if(n){const P=document.createElement("div");P.classList.add("slide-number"),P.classList.add("slide-number-pdf"),P.innerHTML=_++,L.appendChild(P)}if(t.pdfSeparateFragments){const P=this.Reveal.fragments.sort(L.querySelectorAll(".fragment"),!0);let T;P.forEach((function(D,V){T&&T.forEach((function(x){x.classList.remove("current-fragment")})),D.forEach((function(x){x.classList.add("visible","current-fragment")}),this);const v=L.cloneNode(!0);if(n){const x=V+1;v.querySelector(".slide-number-pdf").innerHTML+="."+x}h.push(v),T=D}),this),P.forEach((function(D){D.forEach((function(V){V.classList.remove("visible","current-fragment")}))}))}else Lt(L,".fragment:not(.fade-out)").forEach((function(P){P.classList.add("visible")}))}}),this),await new Promise(requestAnimationFrame),h.forEach((g=>p.appendChild(g))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"}),c.classList.remove("loading-scroll-mode")}isActive(){return this.Reveal.getConfig().view==="print"}},Op=class{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){Lt(this.Reveal.getSlidesElement(),".fragment").forEach((t=>{t.classList.add("visible"),t.classList.remove("current-fragment")}))}enable(){Lt(this.Reveal.getSlidesElement(),".fragment").forEach((t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")}))}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),n=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let n=[],r=[],s=[];t.forEach((o=>{if(o.hasAttribute("data-fragment-index")){let l=parseInt(o.getAttribute("data-fragment-index"),10);n[l]||(n[l]=[]),n[l].push(o)}else r.push([o])})),n=n.concat(r);let a=0;return n.forEach((o=>{o.forEach((l=>{s.push(l),l.setAttribute("data-fragment-index",a)})),a++})),e===!0?n:s}sortAll(){this.Reveal.getHorizontalSlides().forEach((t=>{let e=Lt(t,"section");e.forEach(((n,r)=>{this.sort(n.querySelectorAll(".fragment"))}),this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))}))}update(t,e,n=this.Reveal.getCurrentSlide()){let r={shown:[],hidden:[]};if(n&&this.Reveal.getConfig().fragments&&(e=e||this.sort(n.querySelectorAll(".fragment"))).length){let s=0;if(typeof t!="number"){let a=this.sort(n.querySelectorAll(".fragment.visible")).pop();a&&(t=parseInt(a.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach(((a,o)=>{if(a.hasAttribute("data-fragment-index")&&(o=parseInt(a.getAttribute("data-fragment-index"),10)),s=Math.max(s,o),o<=t){let l=a.classList.contains("visible");a.classList.add("visible"),a.classList.remove("current-fragment"),o===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(a)),a.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(a)),l||(r.shown.push(a),this.Reveal.dispatchEvent({target:a,type:"visible",bubbles:!1}))}else{let l=a.classList.contains("visible");a.classList.remove("visible"),a.classList.remove("current-fragment"),l&&(this.Reveal.slideContent.stopEmbeddedContent(a),r.hidden.push(a),this.Reveal.dispatchEvent({target:a,type:"hidden",bubbles:!1}))}})),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,s),-1),n.setAttribute("data-fragment",t)}return r.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:r.hidden[0],fragments:r.hidden}}),r.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:r.shown[0],fragments:r.shown}}),r}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let r=this.sort(n.querySelectorAll(".fragment:not(.disabled)"));if(r.length){if(typeof t!="number"){let a=this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=a?parseInt(a.getAttribute("data-fragment-index")||0,10):-1}t+=e;let s=this.update(t,r);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!s.shown.length&&!s.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},Bp=class{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),Lt(this.Reveal.getRevealElement(),$i).forEach((r=>{r.classList.contains("stack")||r.addEventListener("click",this.onSlideClicked,!0)}));const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const n=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach(((t,e)=>{t.setAttribute("data-index-h",e),fi(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&Lt(t,"section").forEach(((n,r)=>{n.setAttribute("data-index-h",e),n.setAttribute("data-index-v",r),fi(n,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")}))})),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(((t,e)=>{fi(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),Lt(t,".slide-background").forEach(((n,r)=>{fi(n,"translate3d(0, "+r*this.overviewSlideHeight+"px, 0)")}))}))}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-n.h*this.overviewSlideWidth+"px)","translateY("+-n.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout((()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")}),1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),Lt(this.Reveal.getRevealElement(),$i).forEach((e=>{fi(e,""),e.removeEventListener("click",this.onSlideClicked,!0)})),Lt(this.Reveal.getBackgroundsElement(),".slide-background").forEach((e=>{fi(e,"")})),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let n=parseInt(e.getAttribute("data-index-h"),10),r=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(n,r)}}}},zp=class{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let n=t.keyCode,r=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let s=document.activeElement&&document.activeElement.isContentEditable===!0,a=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),o=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),l=!([32,37,38,39,40,63,78,80,191].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(s||a||o||l)return;let c,u=[66,86,190,191,112];if(typeof e.keyboard=="object")for(c in e.keyboard)e.keyboard[c]==="togglePause"&&u.push(parseInt(c,10));if(this.Reveal.isOverlayOpen()&&!["Escape","f","c","b","."].includes(t.key)||this.Reveal.isPaused()&&u.indexOf(n)===-1)return!1;let d=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),h=!1;if(typeof e.keyboard=="object"){for(c in e.keyboard)if(parseInt(c,10)===n){let p=e.keyboard[c];typeof p=="function"?p.apply(null,[t]):typeof p=="string"&&typeof this.Reveal[p]=="function"&&this.Reveal[p].call(),h=!0}}if(h===!1){for(c in this.bindings)if(parseInt(c,10)===n){let p=this.bindings[c].callback;typeof p=="function"?p.apply(null,[t]):typeof p=="string"&&typeof this.Reveal[p]=="function"&&this.Reveal[p].call(),h=!0}}h===!1&&(h=!0,n===80||n===33?this.Reveal.prev({skipFragments:t.altKey}):n===78||n===34?this.Reveal.next({skipFragments:t.altKey}):n===72||n===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&d?e.rtl?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):n===76||n===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&d?e.rtl?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):n===75||n===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&d?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):n===74||n===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&d?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):[58,59,66,86,190].includes(n)||n===191&&!t.shiftKey?this.Reveal.togglePause():n===70?Gd(e.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(r):n===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():n===67&&this.Reveal.isOverlayOpen()?this.Reveal.closeOverlay():n!==63&&n!==191||!t.shiftKey?n===112?this.Reveal.toggleHelp():h=!1:this.Reveal.toggleHelp()),h?t.preventDefault&&t.preventDefault():n!==27&&n!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}},Hp=class{MAX_REPLACE_STATE_FREQUENCY=1e3;constructor(t){this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let n=t.replace(/^#\/?/,""),r=n.split("/");if(/^[0-9]*$/.test(r[0])||!n.length){const s=this.Reveal.getConfig();let a,o=s.hashOneBasedIndex||e.oneBasedIndex?1:0,l=parseInt(r[0],10)-o||0,c=parseInt(r[1],10)-o||0;return s.fragmentInURL&&(a=parseInt(r[2],10),isNaN(a)&&(a=void 0)),{h:l,v:c,f:a}}{let s,a;/\/[-\d]+$/g.test(n)&&(a=parseInt(n.split("/").pop(),10),a=isNaN(a)?void 0:a,n=n.split("/").shift());try{s=document.getElementById(decodeURIComponent(n)).closest(".slides section")}catch{}if(s)return{...this.Reveal.getIndices(s),f:a}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(n){let r=this.getHash();e.history?window.location.hash=r:e.hash&&(r==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+r))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout((()=>this.replaceState(t)),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",n=t||this.Reveal.getCurrentSlide(),r=n?n.getAttribute("id"):null;r&&(r=encodeURIComponent(r));let s=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(s.f=void 0),typeof r=="string"&&r.length)e="/"+r,s.f>=0&&(e+="/"+s.f);else{let a=this.Reveal.getConfig().hashOneBasedIndex?1:0;(s.h>0||s.v>0||s.f>=0)&&(e+=s.h+a),(s.v>0||s.f>=0)&&(e+="/"+(s.v+a)),s.f>=0&&(e+="/"+s.f)}return e}onWindowHashChange(t){this.readURL()}},Vp=class{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=Lt(e,".navigate-left"),this.controlsRight=Lt(e,".navigate-right"),this.controlsUp=Lt(e,".navigate-up"),this.controlsDown=Lt(e,".navigate-down"),this.controlsPrev=Lt(e,".navigate-prev"),this.controlsNext=Lt(e,".navigate-next"),this.controlsFullscreen=Lt(e,".enter-fullscreen"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls&&(t.controls!=="speaker-only"||this.Reveal.isSpeakerNotes())?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];qd&&(t=["touchstart"]),t.forEach((e=>{this.controlsLeft.forEach((n=>n.addEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((n=>n.addEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((n=>n.addEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((n=>n.addEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((n=>n.addEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((n=>n.addEventListener(e,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((n=>n.addEventListener(e,this.onEnterFullscreen,!1)))}))}unbind(){["touchstart","click"].forEach((t=>{this.controlsLeft.forEach((e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((e=>e.removeEventListener(t,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((e=>e.removeEventListener(t,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((e=>e.removeEventListener(t,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((e=>e.removeEventListener(t,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((e=>e.removeEventListener(t,this.onEnterFullscreen,!1)))}))}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach((n=>{n.classList.remove("enabled","fragmented"),n.setAttribute("disabled","disabled")})),t.left&&this.controlsLeft.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),t.right&&this.controlsRight.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),t.up&&this.controlsUp.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),t.down&&this.controlsDown.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),(t.left||t.up)&&this.controlsPrev.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),(t.right||t.down)&&this.controlsNext.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}));let e=this.Reveal.getCurrentSlide();if(e){let n=this.Reveal.fragments.availableRoutes();n.prev&&this.controlsPrev.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})),n.next&&this.controlsNext.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")}));const r=this.Reveal.isVerticalSlide(e),s=r&&e.parentElement&&e.parentElement.querySelectorAll(":scope > section").length>1;r&&s?(n.prev&&this.controlsUp.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})),n.next&&this.controlsDown.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")}))):(n.prev&&this.controlsLeft.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})),n.next&&this.controlsRight.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})))}if(this.Reveal.getConfig().controlsTutorial){let n=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&n.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&n.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(t){const e=this.Reveal.getConfig(),n=this.Reveal.getViewportElement();Gd(e.embedded?n:n.parentElement)}},Gp=class{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),n=e.length,r=Math.floor(t.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(r=n-r);let s=this.Reveal.getIndices(e[r]);this.Reveal.slide(s.h,s.v)}destroy(){this.element.remove()}};class Wp{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const Uc=(i,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=i,typeof t=="function"&&(e.onload=e.onreadystatechange=r=>{(r.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=r=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+r))});const n=document.querySelector("head");n.insertBefore(e,n.lastChild)};class qp{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise((n=>{let r=[],s=0;if(e.forEach((a=>{a.condition&&!a.condition()||(a.async?this.asyncDependencies.push(a):r.push(a))})),r.length){s=r.length;const a=o=>{o&&typeof o.callback=="function"&&o.callback(),--s==0&&this.initPlugins().then(n)};r.forEach((o=>{typeof o.id=="string"?(this.registerPlugin(o),a(o)):typeof o.src=="string"?Uc(o.src,(()=>a(o))):(console.warn("Unrecognized plugin format",o),a())}))}else this.initPlugins().then(n)}))}initPlugins(){return new Promise((t=>{let e=Object.values(this.registeredPlugins),n=e.length;if(n===0)this.loadAsync().then(t);else{let r,s=()=>{--n==0?this.loadAsync().then(t):r()},a=0;r=()=>{let o=e[a++];if(typeof o.init=="function"){let l=o.init(this.Reveal);l&&typeof l.then=="function"?l.then(s):s()}else s()},r()}}))}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach((t=>{Uc(t.src,t.callback)})),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach((t=>{typeof t.destroy=="function"&&t.destroy()})),this.registeredPlugins={},this.asyncDependencies=[]}}class $p{constructor(t){this.Reveal=t,this.onSlidesClicked=this.onSlidesClicked.bind(this),this.iframeTriggerSelector=null,this.mediaTriggerSelector="[data-preview-image], [data-preview-video]",this.stateProps=["previewIframe","previewImage","previewVideo","previewFit"],this.state={}}update(){this.Reveal.getConfig().previewLinks?this.iframeTriggerSelector="a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])":this.iframeTriggerSelector="[data-preview-link]:not([data-preview-link=false])";const t=this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length>0,e=this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length>0;t||e?this.Reveal.getSlidesElement().addEventListener("click",this.onSlidesClicked,!1):this.Reveal.getSlidesElement().removeEventListener("click",this.onSlidesClicked,!1)}createOverlay(t){this.dom=document.createElement("div"),this.dom.classList.add("r-overlay"),this.dom.classList.add(t),this.viewport=document.createElement("div"),this.viewport.classList.add("r-overlay-viewport"),this.dom.appendChild(this.viewport),this.Reveal.getRevealElement().appendChild(this.dom)}previewIframe(t){this.close(),this.state={previewIframe:t},this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.viewport.innerHTML=`<header class="r-overlay-header">
				<a class="r-overlay-button r-overlay-external" href="${t}" target="_blank"><span class="icon"></span></a>
				<button class="r-overlay-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe src="${t}"></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,this.dom.querySelector("iframe").addEventListener("load",(e=>{this.dom.dataset.state="loaded"}),!1),this.dom.querySelector(".r-overlay-close").addEventListener("click",(e=>{this.close(),e.preventDefault()}),!1),this.dom.querySelector(".r-overlay-external").addEventListener("click",(e=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewiframe",data:{url:t}})}previewMedia(t,e,n){if(e!=="image"&&e!=="video")return void console.warn("Please specify a valid media type to preview (image|video)");this.close(),n=n||"scale-down",this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.dom.dataset.previewFit=n,this.viewport.innerHTML=`<header class="r-overlay-header">
				<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content"></div>`;const r=this.dom.querySelector(".r-overlay-content");if(e==="image"){this.state={previewImage:t,previewFit:n};const s=document.createElement("img",{});s.src=t,r.appendChild(s),s.addEventListener("load",(()=>{this.dom.dataset.state="loaded"}),!1),s.addEventListener("error",(()=>{this.dom.dataset.state="error",r.innerHTML='<span class="r-overlay-error">Unable to load image.</span>'}),!1),this.dom.style.cursor="zoom-out",this.dom.addEventListener("click",(a=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewimage",data:{url:t}})}else{if(e!=="video")throw new Error("Please specify a valid media type to preview");{this.state={previewVideo:t,previewFit:n};const s=document.createElement("video");s.autoplay=this.dom.dataset.previewAutoplay!=="false",s.controls=this.dom.dataset.previewControls!=="false",s.loop=this.dom.dataset.previewLoop==="true",s.muted=this.dom.dataset.previewMuted==="true",s.playsInline=!0,s.src=t,r.appendChild(s),s.addEventListener("loadeddata",(()=>{this.dom.dataset.state="loaded"}),!1),s.addEventListener("error",(()=>{this.dom.dataset.state="error",r.innerHTML='<span class="r-overlay-error">Unable to load video.</span>'}),!1),this.Reveal.dispatchEvent({type:"previewvideo",data:{url:t}})}}this.dom.querySelector(".r-overlay-close").addEventListener("click",(s=>{this.close(),s.preventDefault()}),!1)}previewImage(t,e){this.previewMedia(t,"image",e)}previewVideo(t,e){this.previewMedia(t,"video",e)}toggleHelp(t){typeof t=="boolean"?t?this.showHelp():this.close():this.dom?this.close():this.showHelp()}showHelp(){if(this.Reveal.getConfig().help){this.close(),this.createOverlay("r-overlay-help");let t='<p class="title">Keyboard Shortcuts</p>',e=this.Reveal.keyboard.getShortcuts(),n=this.Reveal.keyboard.getBindings();t+="<table><th>KEY</th><th>ACTION</th>";for(let r in e)t+=`<tr><td>${r}</td><td>${e[r]}</td></tr>`;for(let r in n)n[r].key&&n[r].description&&(t+=`<tr><td>${n[r].key}</td><td>${n[r].description}</td></tr>`);t+="</table>",this.viewport.innerHTML=`
				<header class="r-overlay-header">
					<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${t}</div>
				</div>
			`,this.dom.querySelector(".r-overlay-close").addEventListener("click",(r=>{this.close(),r.preventDefault()}),!1),this.Reveal.dispatchEvent({type:"showhelp"})}}isOpen(){return!!this.dom}close(){return!!this.dom&&(this.dom.remove(),this.dom=null,this.state={},this.Reveal.dispatchEvent({type:"closeoverlay"}),!0)}getState(){return this.state}setState(t){this.stateProps.every((e=>this.state[e]===t[e]))||(t.previewIframe?this.previewIframe(t.previewIframe):t.previewImage?this.previewImage(t.previewImage,t.previewFit):t.previewVideo?this.previewVideo(t.previewVideo,t.previewFit):this.close())}onSlidesClicked(t){const e=t.target,n=e.closest(this.iframeTriggerSelector),r=e.closest(this.mediaTriggerSelector);if(n){if(t.metaKey||t.shiftKey||t.altKey)return;let s=n.getAttribute("href")||n.getAttribute("data-preview-link");s&&(this.previewIframe(s),t.preventDefault())}else if(r){if(r.hasAttribute("data-preview-image")){let s=r.dataset.previewImage||r.getAttribute("src");s&&(this.previewImage(s,r.dataset.previewFit),t.preventDefault())}else if(r.hasAttribute("data-preview-video")){let s=r.dataset.previewVideo||r.getAttribute("src");if(!s){let a=r.querySelector("source");a&&(s=a.getAttribute("src"))}s&&(this.previewVideo(s,r.dataset.previewFit),t.preventDefault())}}}destroy(){this.close()}}let Xp=class{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if(wa(t,"video[controls], audio[controls]"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.touchCaptured=!1,this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)qd&&t.preventDefault();else{this.Reveal.onUserInput(t);let n=t.touches[0].clientX,r=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let s=this.Reveal.availableRoutes({includeFragments:!0}),a=n-this.touchStartX,o=r-this.touchStartY;a>40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):a<-40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):o>40&&s.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):o<-40&&s.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}};const io="focus",Fc="blur";class Yp{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==io&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=io}blur(){this.state!==Fc&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Fc}isFocused(){return this.state===io}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=ze(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class jp{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map((n=>n.innerHTML)).join(`
`):null}destroy(){this.element.remove()}}class Kp{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,n=this.diameter2,r=this.diameter2,s=28;this.progressOffset+=.1*(1-this.progressOffset);const a=-Math.PI/2+t*(2*Math.PI),o=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,r,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,r,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,r,e,o,a,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-14,r-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,s),this.context.fillRect(18,0,10,s)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,s),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var Zp={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const $d="5.2.1";function Xd(i,t){arguments.length<2&&(t=arguments[0],i=document.querySelector(".reveal"));const e={};let n,r,s,a,o,l={},c=!1,u=!1,d={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},h=[],p=1,_={layout:"",overview:""},g={},m="idle",f=0,w=0,S=-1,E=!1,L=new Pp(e),P=new Ip(e),T=new Dp(e),D=new Np(e),V=new kp(e),v=new Up(e),x=new Fp(e),N=new Op(e),B=new Bp(e),W=new zp(e),j=new Hp(e),z=new Vp(e),J=new Gp(e),q=new Wp(e),ct=new qp(e),at=new $p(e),vt=new Yp(e),Yt=new Xp(e),Ut=new jp(e);function Z(){c!==!1&&(u=!0,l.showHiddenSlides||Lt(g.wrapper,'section[data-visibility="hidden"]').forEach((b=>{const A=b.parentNode;A.childElementCount===1&&/section/i.test(A.nodeName)?A.remove():b.remove()})),(function(){g.slides.classList.add("no-transition"),Pr?g.wrapper.classList.add("no-hover"):g.wrapper.classList.remove("no-hover"),V.render(),P.render(),T.render(),z.render(),J.render(),Ut.render(),g.pauseOverlay=((b,A,C,O="")=>{let H=b.querySelectorAll("."+C);for(let ot=0;ot<H.length;ot++){let mt=H[ot];if(mt.parentNode===b)return mt}let nt=document.createElement(A);return nt.className=C,nt.innerHTML=O,b.appendChild(nt),nt})(g.wrapper,"div","pause-overlay",l.controls?'<button class="resume-button">Resume presentation</button>':null),g.statusElement=(function(){let b=g.wrapper.querySelector(".aria-status");return b||(b=document.createElement("div"),b.style.position="absolute",b.style.height="1px",b.style.width="1px",b.style.overflow="hidden",b.style.clip="rect( 1px, 1px, 1px, 1px )",b.classList.add("aria-status"),b.setAttribute("aria-live","polite"),b.setAttribute("aria-atomic","true"),g.wrapper.appendChild(b)),b})(),g.wrapper.setAttribute("role","application")})(),l.postMessage&&window.addEventListener("message",Ii,!1),setInterval((()=>{(!v.isActive()&&g.wrapper.scrollTop!==0||g.wrapper.scrollLeft!==0)&&(g.wrapper.scrollTop=0,g.wrapper.scrollLeft=0)}),1e3),document.addEventListener("fullscreenchange",lr),document.addEventListener("webkitfullscreenchange",lr),Q().forEach((b=>{Lt(b,"section").forEach(((A,C)=>{C>0&&(A.classList.remove("present"),A.classList.remove("past"),A.classList.add("future"),A.setAttribute("aria-hidden","true"))}))})),dt(),V.update(!0),(function(){const b=l.view==="print",A=l.view==="scroll"||l.view==="reader";(b||A)&&(b?Rt():Yt.unbind(),g.viewport.classList.add("loading-scroll-mode"),b?document.readyState==="complete"?x.activate():window.addEventListener("load",(()=>x.activate())):v.activate())})(),j.readURL(),setTimeout((()=>{g.slides.classList.remove("no-transition"),g.wrapper.classList.add("ready"),I({type:"ready",data:{indexh:n,indexv:r,currentSlide:a}})}),1))}function it(b){g.statusElement.textContent=b}function _t(b){let A="";if(b.nodeType===3)A+=b.textContent;else if(b.nodeType===1){let C=b.getAttribute("aria-hidden"),O=window.getComputedStyle(b).display==="none";C==="true"||O||Array.from(b.childNodes).forEach((H=>{A+=_t(H)}))}return A=A.trim(),A===""?"":A+" "}function dt(b){const A={...l};if(typeof b=="object"&&Tr(l,b),e.isReady()===!1)return;const C=g.wrapper.querySelectorAll($i).length;g.wrapper.classList.remove(A.transition),g.wrapper.classList.add(l.transition),g.wrapper.setAttribute("data-transition-speed",l.transitionSpeed),g.wrapper.setAttribute("data-background-transition",l.backgroundTransition),g.viewport.style.setProperty("--slide-width",typeof l.width=="string"?l.width:l.width+"px"),g.viewport.style.setProperty("--slide-height",typeof l.height=="string"?l.height:l.height+"px"),l.shuffle&&Dt(),eo(g.wrapper,"embedded",l.embedded),eo(g.wrapper,"rtl",l.rtl),eo(g.wrapper,"center",l.center),l.pause===!1&&xt(),D.reset(),o&&(o.destroy(),o=null),C>1&&l.autoSlide&&l.autoSlideStoppable&&(o=new Kp(g.wrapper,(()=>Math.min(Math.max((Date.now()-S)/f,0),1))),o.on("click",M),E=!1),l.navigationMode!=="default"?g.wrapper.setAttribute("data-navigation-mode",l.navigationMode):g.wrapper.removeAttribute("data-navigation-mode"),Ut.configure(l,A),vt.configure(l,A),q.configure(l,A),z.configure(l,A),J.configure(l,A),W.configure(l,A),N.configure(l,A),P.configure(l,A),yt()}function It(){window.addEventListener("resize",Ps,!1),l.touch&&Yt.bind(),l.keyboard&&W.bind(),l.progress&&J.bind(),l.respondToHashChanges&&j.bind(),z.bind(),vt.bind(),g.slides.addEventListener("click",Jr,!1),g.slides.addEventListener("transitionend",Zr,!1),g.pauseOverlay.addEventListener("click",xt,!1),l.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Ls,!1)}function Rt(){Yt.unbind(),vt.unbind(),W.unbind(),z.unbind(),J.unbind(),j.unbind(),window.removeEventListener("resize",Ps,!1),g.slides.removeEventListener("click",Jr,!1),g.slides.removeEventListener("transitionend",Zr,!1),g.pauseOverlay.removeEventListener("click",xt,!1)}function Wt(b,A,C){i.addEventListener(b,A,C)}function se(b,A,C){i.removeEventListener(b,A,C)}function jt(b){typeof b.layout=="string"&&(_.layout=b.layout),typeof b.overview=="string"&&(_.overview=b.overview),_.layout?fi(g.slides,_.layout+" "+_.overview):fi(g.slides,_.overview)}function I({target:b=g.wrapper,type:A,data:C,bubbles:O=!0}){let H=document.createEvent("HTMLEvents",1,2);return H.initEvent(A,O,!0),Tr(H,C),b.dispatchEvent(H),b===g.wrapper&&Kt(A),H}function Le(b){I({type:"slidechanged",data:{indexh:n,indexv:r,previousSlide:s,currentSlide:a,origin:b}})}function Kt(b,A){if(l.postMessageEvents&&window.parent!==window.self){let C={namespace:"reveal",eventName:b,state:ae()};Tr(C,A),window.parent.postMessage(JSON.stringify(C),"*")}}function qt(){if(g.wrapper&&!x.isActive()){const b=g.viewport.offsetWidth,A=g.viewport.offsetHeight;if(!l.disableLayout){Pr&&!l.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const C=v.isActive()?wt(b,A):wt(),O=p;et(l.width,l.height),g.slides.style.width=C.width+"px",g.slides.style.height=C.height+"px",p=Math.min(C.presentationWidth/C.width,C.presentationHeight/C.height),p=Math.max(p,l.minScale),p=Math.min(p,l.maxScale),p===1||v.isActive()?(g.slides.style.zoom="",g.slides.style.left="",g.slides.style.top="",g.slides.style.bottom="",g.slides.style.right="",jt({layout:""})):(g.slides.style.zoom="",g.slides.style.left="50%",g.slides.style.top="50%",g.slides.style.bottom="auto",g.slides.style.right="auto",jt({layout:"translate(-50%, -50%) scale("+p+")"}));const H=Array.from(g.wrapper.querySelectorAll($i));for(let nt=0,ot=H.length;nt<ot;nt++){const mt=H[nt];mt.style.display!=="none"&&(l.center||mt.classList.contains("center")?mt.classList.contains("stack")?mt.style.top=0:mt.style.top=Math.max((C.height-mt.scrollHeight)/2,0)+"px":mt.style.top="")}O!==p&&I({type:"resize",data:{oldScale:O,scale:p,size:C}})}(function(){if(g.wrapper&&!l.disableLayout&&!x.isActive()&&typeof l.scrollActivationWidth=="number"&&l.view!=="scroll"){const C=wt();C.presentationWidth>0&&C.presentationWidth<=l.scrollActivationWidth?v.isActive()||(V.create(),v.activate()):v.isActive()&&v.deactivate()}})(),g.viewport.style.setProperty("--slide-scale",p),g.viewport.style.setProperty("--viewport-width",b+"px"),g.viewport.style.setProperty("--viewport-height",A+"px"),v.layout(),J.update(),V.updateParallax(),B.isActive()&&B.update()}}function et(b,A){Lt(g.slides,"section > .stretch, section > .r-stretch").forEach((C=>{let O=((H,nt=0)=>{if(H){let ot,mt=H.style.height;return H.style.height="0px",H.parentNode.style.height="auto",ot=nt-H.parentNode.offsetHeight,H.style.height=mt+"px",H.parentNode.style.removeProperty("height"),ot}return nt})(C,A);if(/(img|video)/gi.test(C.nodeName)){const H=C.naturalWidth||C.videoWidth,nt=C.naturalHeight||C.videoHeight,ot=Math.min(b/H,O/nt);C.style.width=H*ot+"px",C.style.height=nt*ot+"px"}else C.style.width=b+"px",C.style.height=O+"px"}))}function wt(b,A){let C=l.width,O=l.height;l.disableLayout&&(C=g.slides.offsetWidth,O=g.slides.offsetHeight);const H={width:C,height:O,presentationWidth:b||g.wrapper.offsetWidth,presentationHeight:A||g.wrapper.offsetHeight};return H.presentationWidth-=H.presentationWidth*l.margin,H.presentationHeight-=H.presentationHeight*l.margin,typeof H.width=="string"&&/%$/.test(H.width)&&(H.width=parseInt(H.width,10)/100*H.presentationWidth),typeof H.height=="string"&&/%$/.test(H.height)&&(H.height=parseInt(H.height,10)/100*H.presentationHeight),H}function ut(b,A){typeof b=="object"&&typeof b.setAttribute=="function"&&b.setAttribute("data-previous-indexv",A||0)}function R(b){if(typeof b=="object"&&typeof b.setAttribute=="function"&&b.classList.contains("stack")){const A=b.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(b.getAttribute(A)||0,10)}return 0}function y(b=a){return b&&b.parentNode&&!!b.parentNode.nodeName.match(/section/i)}function F(){return!(!a||!y(a))&&!a.nextElementSibling}function Y(){return n===0&&r===0}function tt(){return!!a&&!a.nextElementSibling&&(!y(a)||!a.parentNode.nextElementSibling)}function $(){if(l.pause){const b=g.wrapper.classList.contains("paused");Xe(),g.wrapper.classList.add("paused"),b===!1&&I({type:"paused"})}}function xt(){const b=g.wrapper.classList.contains("paused");g.wrapper.classList.remove("paused"),_e(),b&&I({type:"resumed"})}function lt(b){typeof b=="boolean"?b?$():xt():ht()?xt():$()}function ht(){return g.wrapper.classList.contains("paused")}function zt(b,A,C,O){if(I({type:"beforeslidechange",data:{indexh:b===void 0?n:b,indexv:A===void 0?r:A,origin:O}}).defaultPrevented)return;s=a;const H=g.wrapper.querySelectorAll(di);if(v.isActive()){const ee=v.getSlideByIndices(b,A);return void(ee&&v.scrollToSlide(ee))}if(H.length===0)return;A!==void 0||B.isActive()||(A=R(H[b])),s&&s.parentNode&&s.parentNode.classList.contains("stack")&&ut(s.parentNode,r);const nt=h.concat();h.length=0;let ot=n||0,mt=r||0;n=Ot(di,b===void 0?n:b),r=Ot(kc,A===void 0?r:A);let Ct=n!==ot||r!==mt;Ct||(s=null);let At=H[n],Vt=At.querySelectorAll("section");i.classList.toggle("is-vertical-slide",Vt.length>1),a=Vt[r]||At;let Bt=!1;Ct&&s&&a&&!B.isActive()&&(m="running",Bt=rt(s,a,ot,mt),Bt&&g.slides.classList.add("disable-slide-transitions")),Ht(),qt(),B.isActive()&&B.update(),C!==void 0&&N.goto(C),s&&s!==a&&(s.classList.remove("present"),s.setAttribute("aria-hidden","true"),Y()&&setTimeout((()=>{Lt(g.wrapper,di+".stack").forEach((ee=>{ut(ee,0)}))}),0));t:for(let ee=0,Ve=h.length;ee<Ve;ee++){for(let ie=0;ie<nt.length;ie++)if(nt[ie]===h[ee]){nt.splice(ie,1);continue t}g.viewport.classList.add(h[ee]),I({type:h[ee]})}for(;nt.length;)g.viewport.classList.remove(nt.pop());Ct&&Le(O),!Ct&&s||(L.stopEmbeddedContent(s),L.startEmbeddedContent(a)),requestAnimationFrame((()=>{it(_t(a))})),J.update(),z.update(),Ut.update(),V.update(),V.updateParallax(),P.update(),N.update(),j.writeURL(),_e(),Bt&&(setTimeout((()=>{g.slides.classList.remove("disable-slide-transitions")}),0),l.autoAnimate&&D.run(s,a))}function rt(b,A,C,O){return b.hasAttribute("data-auto-animate")&&A.hasAttribute("data-auto-animate")&&b.getAttribute("data-auto-animate-id")===A.getAttribute("data-auto-animate-id")&&!(n>C||r>O?A:b).hasAttribute("data-auto-animate-restart")}function yt(){Rt(),It(),qt(),f=l.autoSlide,_e(),V.create(),j.writeURL(),l.sortFragmentsOnSync===!0&&N.sortAll(),z.update(),J.update(),Ht(),Ut.update(),Ut.updateVisibility(),at.update(),V.update(!0),P.update(),L.formatEmbeddedContent(),l.autoPlayMedia===!1?L.stopEmbeddedContent(a,{unloadIframes:!1}):L.startEmbeddedContent(a),B.isActive()&&B.layout()}function Dt(b=Q()){b.forEach(((A,C)=>{let O=b[Math.floor(Math.random()*b.length)];O.parentNode===A.parentNode&&A.parentNode.insertBefore(A,O);let H=A.querySelectorAll("section");H.length&&Dt(H)}))}function Ot(b,A){let C=Lt(g.wrapper,b),O=C.length,H=v.isActive()||x.isActive(),nt=!1,ot=!1;if(O){l.loop&&(A>=O&&(nt=!0),(A%=O)<0&&(A=O+A,ot=!0)),A=Math.max(Math.min(A,O-1),0);for(let Vt=0;Vt<O;Vt++){let Bt=C[Vt],ee=l.rtl&&!y(Bt);Bt.classList.remove("past"),Bt.classList.remove("present"),Bt.classList.remove("future"),Bt.setAttribute("hidden",""),Bt.setAttribute("aria-hidden","true"),Bt.querySelector("section")&&Bt.classList.add("stack"),H?Bt.classList.add("present"):Vt<A?(Bt.classList.add(ee?"future":"past"),l.fragments&&Et(Bt)):Vt>A?(Bt.classList.add(ee?"past":"future"),l.fragments&&Jt(Bt)):Vt===A&&l.fragments&&(nt?Jt(Bt):ot&&Et(Bt))}let mt=C[A],Ct=mt.classList.contains("present");mt.classList.add("present"),mt.removeAttribute("hidden"),mt.removeAttribute("aria-hidden"),Ct||I({target:mt,type:"visible",bubbles:!1});let At=mt.getAttribute("data-state");At&&(h=h.concat(At.split(" ")))}else A=0;return A}function Et(b){Lt(b,".fragment").forEach((A=>{A.classList.add("visible"),A.classList.remove("current-fragment")}))}function Jt(b){Lt(b,".fragment.visible").forEach((A=>{A.classList.remove("visible","current-fragment")}))}function Ht(){let b,A,C=Q(),O=C.length;if(O&&n!==void 0){let H=B.isActive()?10:l.viewDistance;Pr&&(H=B.isActive()?6:l.mobileViewDistance),x.isActive()&&(H=Number.MAX_VALUE);for(let nt=0;nt<O;nt++){let ot=C[nt],mt=Lt(ot,"section"),Ct=mt.length;if(b=Math.abs((n||0)-nt)||0,l.loop&&(b=Math.abs(((n||0)-nt)%(O-H))||0),b<H?L.load(ot):L.unload(ot),Ct){let At=R(ot);for(let Vt=0;Vt<Ct;Vt++){let Bt=mt[Vt];A=Math.abs(nt===(n||0)?(r||0)-Vt:Vt-At),b+A<H?L.load(Bt):L.unload(Bt)}}}te()?g.wrapper.classList.add("has-vertical-slides"):g.wrapper.classList.remove("has-vertical-slides"),bt()?g.wrapper.classList.add("has-horizontal-slides"):g.wrapper.classList.remove("has-horizontal-slides")}}function Qt({includeFragments:b=!1}={}){let A=g.wrapper.querySelectorAll(di),C=g.wrapper.querySelectorAll(kc),O={left:n>0,right:n<A.length-1,up:r>0,down:r<C.length-1};if(l.loop&&(A.length>1&&(O.left=!0,O.right=!0),C.length>1&&(O.up=!0,O.down=!0)),A.length>1&&l.navigationMode==="linear"&&(O.right=O.right||O.down,O.left=O.left||O.up),b===!0){let H=N.availableRoutes();O.left=O.left||H.prev,O.up=O.up||H.prev,O.down=O.down||H.next,O.right=O.right||H.next}if(l.rtl){let H=O.left;O.left=O.right,O.right=H}return O}function k(b=a){let A=Q(),C=0;t:for(let O=0;O<A.length;O++){let H=A[O],nt=H.querySelectorAll("section");for(let ot=0;ot<nt.length;ot++){if(nt[ot]===b)break t;nt[ot].dataset.visibility!=="uncounted"&&C++}if(H===b)break;H.classList.contains("stack")===!1&&H.dataset.visibility!=="uncounted"&&C++}return C}function St(b){let A,C=n,O=r;if(b)if(v.isActive())C=parseInt(b.getAttribute("data-index-h"),10),b.getAttribute("data-index-v")&&(O=parseInt(b.getAttribute("data-index-v"),10));else{let H=y(b),nt=H?b.parentNode:b,ot=Q();C=Math.max(ot.indexOf(nt),0),O=void 0,H&&(O=Math.max(Lt(b.parentNode,"section").indexOf(b),0))}if(!b&&a&&a.querySelectorAll(".fragment").length>0){let H=a.querySelector(".current-fragment");A=H&&H.hasAttribute("data-fragment-index")?parseInt(H.getAttribute("data-fragment-index"),10):a.querySelectorAll(".fragment.visible").length-1}return{h:C,v:O,f:A}}function X(){return Lt(g.wrapper,$i+':not(.stack):not([data-visibility="uncounted"])')}function Q(){return Lt(g.wrapper,di)}function gt(){return Lt(g.wrapper,".slides>section>section")}function bt(){return Q().length>1}function te(){return gt().length>1}function ge(){return X().length}function ke(b,A){let C=Q()[b],O=C&&C.querySelectorAll("section");return O&&O.length&&typeof A=="number"?O?O[A]:void 0:C}function ae(){let b=St();return{indexh:b.h,indexv:b.v,indexf:b.f,paused:ht(),overview:B.isActive(),...at.getState()}}function _e(){if(Xe(),a&&l.autoSlide!==!1){let b=a.querySelector(".current-fragment[data-autoslide]"),A=b?b.getAttribute("data-autoslide"):null,C=a.parentNode?a.parentNode.getAttribute("data-autoslide"):null,O=a.getAttribute("data-autoslide");A?f=parseInt(A,10):O?f=parseInt(O,10):C?f=parseInt(C,10):(f=l.autoSlide,a.querySelectorAll(".fragment").length===0&&Lt(a,"video, audio").forEach((H=>{H.hasAttribute("data-autoplay")&&f&&1e3*H.duration/H.playbackRate>f&&(f=1e3*H.duration/H.playbackRate+1e3)}))),!f||E||ht()||B.isActive()||tt()&&!N.availableRoutes().next&&l.loop!==!0||(w=setTimeout((()=>{typeof l.autoSlideMethod=="function"?l.autoSlideMethod():or(),_e()}),f),S=Date.now()),o&&o.setPlaying(w!==-1)}}function Xe(){clearTimeout(w),w=-1}function Ci(){f&&!E&&(E=!0,I({type:"autoslidepaused"}),clearTimeout(w),o&&o.setPlaying(!1))}function Pi(){f&&E&&(E=!1,I({type:"autoslideresumed"}),_e())}function sn({skipFragments:b=!1}={}){if(d.hasNavigatedHorizontally=!0,v.isActive())return v.prev();l.rtl?(B.isActive()||b||N.next()===!1)&&Qt().left&&zt(n+1,l.navigationMode==="grid"?r:void 0):(B.isActive()||b||N.prev()===!1)&&Qt().left&&zt(n-1,l.navigationMode==="grid"?r:void 0)}function ni({skipFragments:b=!1}={}){if(d.hasNavigatedHorizontally=!0,v.isActive())return v.next();l.rtl?(B.isActive()||b||N.prev()===!1)&&Qt().right&&zt(n-1,l.navigationMode==="grid"?r:void 0):(B.isActive()||b||N.next()===!1)&&Qt().right&&zt(n+1,l.navigationMode==="grid"?r:void 0)}function sr({skipFragments:b=!1}={}){if(v.isActive())return v.prev();(B.isActive()||b||N.prev()===!1)&&Qt().up&&zt(n,r-1)}function ar({skipFragments:b=!1}={}){if(d.hasNavigatedVertically=!0,v.isActive())return v.next();(B.isActive()||b||N.next()===!1)&&Qt().down&&zt(n,r+1)}function Li({skipFragments:b=!1}={}){if(v.isActive())return v.prev();if(b||N.prev()===!1)if(Qt().up)sr({skipFragments:b});else{let A;if(A=l.rtl?Lt(g.wrapper,di+".future").pop():Lt(g.wrapper,di+".past").pop(),A&&A.classList.contains("stack")){let C=A.querySelectorAll("section").length-1||void 0;zt(n-1,C)}else l.rtl?ni({skipFragments:b}):sn({skipFragments:b})}}function or({skipFragments:b=!1}={}){if(d.hasNavigatedHorizontally=!0,d.hasNavigatedVertically=!0,v.isActive())return v.next();if(b||N.next()===!1){let A=Qt();A.down&&A.right&&l.loop&&F()&&(A.down=!1),A.down?ar({skipFragments:b}):l.rtl?sn({skipFragments:b}):ni({skipFragments:b})}}function Ii(b){let A=b.data;if(typeof A=="string"&&A.charAt(0)==="{"&&A.charAt(A.length-1)==="}"&&(A=JSON.parse(A),A.method&&typeof e[A.method]=="function"))if(Lp.test(A.method)===!1){const C=e[A.method].apply(e,A.args);Kt("callback",{method:A.method,result:C})}else console.warn('reveal.js: "'+A.method+'" is is blacklisted from the postMessage API')}function Zr(b){m==="running"&&/section/gi.test(b.target.nodeName)&&(m="idle",I({type:"slidetransitionend",data:{indexh:n,indexv:r,previousSlide:s,currentSlide:a}}))}function Jr(b){const A=ze(b.target,'a[href^="#"]');if(A){const C=A.getAttribute("href"),O=j.getIndicesFromHash(C);O&&(e.slide(O.h,O.v,O.f),b.preventDefault())}}function Ps(b){qt()}function Ls(b){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function lr(b){(document.fullscreenElement||document.webkitFullscreenElement)===g.wrapper&&(b.stopImmediatePropagation(),setTimeout((()=>{e.layout(),e.focus.focus()}),1))}function M(b){tt()&&l.loop===!1?(zt(0,0),Pi()):E?Pi():Ci()}const U={VERSION:$d,initialize:function(b){if(!i)throw'Unable to find presentation root (<div class="reveal">).';if(c)throw"Reveal.js has already been initialized.";if(c=!0,g.wrapper=i,g.slides=i.querySelector(".slides"),!g.slides)throw'Unable to find slides container (<div class="slides">).';return l={...Zp,...l,...t,...b,...Dc()},/print-pdf/gi.test(window.location.search)&&(l.view="print"),(function(){l.embedded===!0?g.viewport=ze(i,".reveal-viewport")||i:(g.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),g.viewport.classList.add("reveal-viewport")})(),window.addEventListener("load",qt,!1),ct.load(l.plugins,l.dependencies).then(Z),new Promise((A=>e.on("ready",A)))},configure:dt,destroy:function(){c=!1,u!==!1&&(Rt(),Xe(),Ut.destroy(),vt.destroy(),at.destroy(),ct.destroy(),q.destroy(),z.destroy(),J.destroy(),V.destroy(),P.destroy(),T.destroy(),document.removeEventListener("fullscreenchange",lr),document.removeEventListener("webkitfullscreenchange",lr),document.removeEventListener("visibilitychange",Ls,!1),window.removeEventListener("message",Ii,!1),window.removeEventListener("load",qt,!1),g.pauseOverlay&&g.pauseOverlay.remove(),g.statusElement&&g.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),g.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),g.wrapper.removeAttribute("data-transition-speed"),g.wrapper.removeAttribute("data-background-transition"),g.viewport.classList.remove("reveal-viewport"),g.viewport.style.removeProperty("--slide-width"),g.viewport.style.removeProperty("--slide-height"),g.slides.style.removeProperty("width"),g.slides.style.removeProperty("height"),g.slides.style.removeProperty("zoom"),g.slides.style.removeProperty("left"),g.slides.style.removeProperty("top"),g.slides.style.removeProperty("bottom"),g.slides.style.removeProperty("right"),g.slides.style.removeProperty("transform"),Array.from(g.wrapper.querySelectorAll($i)).forEach((b=>{b.style.removeProperty("display"),b.style.removeProperty("top"),b.removeAttribute("hidden"),b.removeAttribute("aria-hidden")})))},sync:yt,syncSlide:function(b=a){V.sync(b),N.sync(b),L.load(b),V.update(),Ut.update()},syncFragments:N.sync.bind(N),slide:zt,left:sn,right:ni,up:sr,down:ar,prev:Li,next:or,navigateLeft:sn,navigateRight:ni,navigateUp:sr,navigateDown:ar,navigatePrev:Li,navigateNext:or,navigateFragment:N.goto.bind(N),prevFragment:N.prev.bind(N),nextFragment:N.next.bind(N),on:Wt,off:se,addEventListener:Wt,removeEventListener:se,layout:qt,shuffle:Dt,availableRoutes:Qt,availableFragments:N.availableRoutes.bind(N),toggleHelp:at.toggleHelp.bind(at),toggleOverview:B.toggle.bind(B),toggleScrollView:v.toggle.bind(v),togglePause:lt,toggleAutoSlide:function(b){typeof b=="boolean"?b?Pi():Ci():E?Pi():Ci()},toggleJumpToSlide:function(b){typeof b=="boolean"?b?T.show():T.hide():T.isVisible()?T.hide():T.show()},isFirstSlide:Y,isLastSlide:tt,isLastVerticalSlide:F,isVerticalSlide:y,isVerticalStack:function(b=a){return b.classList.contains(".stack")||b.querySelector("section")!==null},isPaused:ht,isAutoSliding:function(){return!(!f||E)},isSpeakerNotes:Ut.isSpeakerNotesWindow.bind(Ut),isOverview:B.isActive.bind(B),isFocused:vt.isFocused.bind(vt),isOverlayOpen:at.isOpen.bind(at),isScrollView:v.isActive.bind(v),isPrintView:x.isActive.bind(x),isReady:()=>u,loadSlide:L.load.bind(L),unloadSlide:L.unload.bind(L),startEmbeddedContent:()=>L.startEmbeddedContent(a),stopEmbeddedContent:()=>L.stopEmbeddedContent(a,{unloadIframes:!1}),previewIframe:at.previewIframe.bind(at),previewImage:at.previewImage.bind(at),previewVideo:at.previewVideo.bind(at),showPreview:at.previewIframe.bind(at),hidePreview:at.close.bind(at),addEventListeners:It,removeEventListeners:Rt,dispatchEvent:I,getState:ae,setState:function(b){if(typeof b=="object"){zt(wr(b.indexh),wr(b.indexv),wr(b.indexf));let A=wr(b.paused),C=wr(b.overview);typeof A=="boolean"&&A!==ht()&&lt(A),typeof C=="boolean"&&C!==B.isActive()&&B.toggle(C),at.setState(b)}},getProgress:function(){let b=ge(),A=k();if(a){let C=a.querySelectorAll(".fragment");C.length>0&&(A+=a.querySelectorAll(".fragment.visible").length/C.length*.9)}return Math.min(A/(b-1),1)},getIndices:St,getSlidesAttributes:function(){return X().map((b=>{let A={};for(let C=0;C<b.attributes.length;C++){let O=b.attributes[C];A[O.name]=O.value}return A}))},getSlidePastCount:k,getTotalSlides:ge,getSlide:ke,getPreviousSlide:()=>s,getCurrentSlide:()=>a,getSlideBackground:function(b,A){let C=typeof b=="number"?ke(b,A):b;if(C)return C.slideBackgroundElement},getSlideNotes:Ut.getSlideNotes.bind(Ut),getSlides:X,getHorizontalSlides:Q,getVerticalSlides:gt,hasHorizontalSlides:bt,hasVerticalSlides:te,hasNavigatedHorizontally:()=>d.hasNavigatedHorizontally,hasNavigatedVertically:()=>d.hasNavigatedVertically,shouldAutoAnimateBetween:rt,addKeyBinding:W.addKeyBinding.bind(W),removeKeyBinding:W.removeKeyBinding.bind(W),triggerKey:W.triggerKey.bind(W),registerKeyboardShortcut:W.registerKeyboardShortcut.bind(W),getComputedSlideSize:wt,setCurrentScrollPage:function(b,A,C){let O=n||0;n=A,r=C;const H=a!==b;s=a,a=b,a&&s&&l.autoAnimate&&rt(s,a,O,r)&&D.run(s,a),H&&(s&&(L.stopEmbeddedContent(s),L.stopEmbeddedContent(s.slideBackgroundElement)),L.startEmbeddedContent(a),L.startEmbeddedContent(a.slideBackgroundElement)),requestAnimationFrame((()=>{it(_t(a))})),Le()},getScale:()=>p,getConfig:()=>l,getQueryHash:Dc,getSlidePath:j.getHash.bind(j),getRevealElement:()=>i,getSlidesElement:()=>g.slides,getViewportElement:()=>g.viewport,getBackgroundsElement:()=>V.element,registerPlugin:ct.registerPlugin.bind(ct),hasPlugin:ct.hasPlugin.bind(ct),getPlugin:ct.getPlugin.bind(ct),getPlugins:ct.getRegisteredPlugins.bind(ct)};return Tr(e,{...U,announceStatus:it,getStatusText:_t,focus:vt,scroll:v,progress:J,controls:z,location:j,overview:B,keyboard:W,fragments:N,backgrounds:V,slideContent:L,slideNumber:P,onUserInput:function(b){l.autoSlideStoppable&&Ci()},closeOverlay:at.close.bind(at),updateSlidesVisibility:Ht,layoutSlideContents:et,transformSlides:jt,cueAutoSlide:_e,cancelAutoSlide:Xe}),U}let hi=Xd,Oc=[];hi.initialize=i=>(Object.assign(hi,new Xd(document.querySelector(".reveal"),i)),Oc.map((t=>t(hi))),hi.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach((i=>{hi[i]=(...t)=>{Oc.push((e=>e[i].call(null,...t)))}})),hi.isReady=()=>!1,hi.VERSION=$d;function Jp(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let tr={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Yd=/[&<>"']/,Qp=new RegExp(Yd.source,"g"),jd=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,tm=new RegExp(jd.source,"g"),em={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Bc=i=>em[i];function He(i,t){if(t){if(Yd.test(i))return i.replace(Qp,Bc)}else if(jd.test(i))return i.replace(tm,Bc);return i}const nm=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Kd(i){return i.replace(nm,((t,e)=>(e=e.toLowerCase())==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const im=/(^|[^\[])\^/g;function de(i,t){i=typeof i=="string"?i:i.source,t=t||"";const e={replace:(n,r)=>(r=(r=r.source||r).replace(im,"$1"),i=i.replace(n,r),e),getRegex:()=>new RegExp(i,t)};return e}const rm=/[^\w:]/g,sm=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function zc(i,t,e){if(i){let n;try{n=decodeURIComponent(Kd(e)).replace(rm,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}t&&!sm.test(e)&&(e=(function(n,r){Ns[" "+n]||(am.test(n)?Ns[" "+n]=n+"/":Ns[" "+n]=ua(n,"/",!0)),n=Ns[" "+n];const s=n.indexOf(":")===-1;return r.substring(0,2)==="//"?s?r:n.replace(om,"$1")+r:r.charAt(0)==="/"?s?r:n.replace(lm,"$1")+r:n+r})(t,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Ns={},am=/^[^:]+:\/*[^/]*$/,om=/^([^:]+:)[\s\S]*$/,lm=/^([^:]+:\/*[^/]*)[\s\S]*$/,Aa={exec:function(){}};function Hc(i,t){const e=i.replace(/\|/g,((r,s,a)=>{let o=!1,l=s;for(;--l>=0&&a[l]==="\\";)o=!o;return o?"|":" |"})).split(/ \|/);let n=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>t)e.splice(t);else for(;e.length<t;)e.push("");for(;n<e.length;n++)e[n]=e[n].trim().replace(/\\\|/g,"|");return e}function ua(i,t,e){const n=i.length;if(n===0)return"";let r=0;for(;r<n;){const s=i.charAt(n-r-1);if(s!==t||e){if(s===t||!e)break;r++}else r++}return i.slice(0,n-r)}function Vc(i,t){if(t<1)return"";let e="";for(;t>1;)1&t&&(e+=i),t>>=1,i+=i;return e+i}function Gc(i,t,e,n){const r=t.href,s=t.title?He(t.title):null,a=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:e,href:r,title:s,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,o}return{type:"image",raw:e,href:r,title:s,text:He(a)}}class Jo{constructor(t){this.options=t||tr}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ua(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],r=(function(s,a){const o=s.match(/^(\s+)(?:```)/);if(o===null)return a;const l=o[1];return a.split(`
`).map((c=>{const u=c.match(/^\s+/);if(u===null)return c;const[d]=u;return d.length>=l.length?c.slice(l.length):c})).join(`
`)})(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const r=ua(n,"#");this.options.pedantic?n=r.trim():r&&!/ $/.test(r)||(n=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const n=e[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=r,{type:"blockquote",raw:e[0],tokens:s,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n,r,s,a,o,l,c,u,d,h,p,_,g=e[1].trim();const m=g.length>1,f={type:"list",raw:"",ordered:m,start:m?+g.slice(0,-1):"",loose:!1,items:[]};g=m?`\\d{1,9}\\${g.slice(-1)}`:`\\${g}`,this.options.pedantic&&(g=m?g:"[*+-]");const w=new RegExp(`^( {0,3}${g})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(_=!1,e=w.exec(t))&&!this.rules.block.hr.test(t);){if(n=e[0],t=t.substring(n.length),u=e[2].split(`
`,1)[0].replace(/^\t+/,(E=>" ".repeat(3*E.length))),d=t.split(`
`,1)[0],this.options.pedantic?(a=2,p=u.trimLeft()):(a=e[2].search(/[^ ]/),a=a>4?1:a,p=u.slice(a),a+=e[1].length),l=!1,!u&&/^ *$/.test(d)&&(n+=d+`
`,t=t.substring(d.length+1),_=!0),!_){const E=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),L=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),P=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),T=new RegExp(`^ {0,${Math.min(3,a-1)}}#`);for(;t&&(h=t.split(`
`,1)[0],d=h,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!P.test(d))&&!T.test(d)&&!E.test(d)&&!L.test(t);){if(d.search(/[^ ]/)>=a||!d.trim())p+=`
`+d.slice(a);else{if(l||u.search(/[^ ]/)>=4||P.test(u)||T.test(u)||L.test(u))break;p+=`
`+d}l||d.trim()||(l=!0),n+=h+`
`,t=t.substring(h.length+1),u=d.slice(a)}}f.loose||(c?f.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(p),r&&(s=r[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:n,task:!!r,checked:s,loose:!1,text:p}),f.raw+=n}f.items[f.items.length-1].raw=n.trimRight(),f.items[f.items.length-1].text=p.trimRight(),f.raw=f.raw.trimRight();const S=f.items.length;for(o=0;o<S;o++)if(this.lexer.state.top=!1,f.items[o].tokens=this.lexer.blockTokens(f.items[o].text,[]),!f.loose){const E=f.items[o].tokens.filter((P=>P.type==="space")),L=E.length>0&&E.some((P=>/\n.*\n/.test(P.raw)));f.loose=L}if(f.loose)for(o=0;o<S;o++)f.items[o].loose=!0;return f}}html(t){const e=this.rules.block.html.exec(t);if(e){const n={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(e[0]):He(e[0]);n.type="paragraph",n.text=r,n.tokens=this.lexer.inline(r)}return n}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),r=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:r,title:s}}}table(t){const e=this.rules.block.table.exec(t);if(e){const n={type:"table",header:Hc(e[1]).map((r=>({text:r}))),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=e[0];let r,s,a,o,l=n.align.length;for(r=0;r<l;r++)/^ *-+: *$/.test(n.align[r])?n.align[r]="right":/^ *:-+: *$/.test(n.align[r])?n.align[r]="center":/^ *:-+ *$/.test(n.align[r])?n.align[r]="left":n.align[r]=null;for(l=n.rows.length,r=0;r<l;r++)n.rows[r]=Hc(n.rows[r],n.header.length).map((c=>({text:c})));for(l=n.header.length,s=0;s<l;s++)n.header[s].tokens=this.lexer.inline(n.header[s].text);for(l=n.rows.length,s=0;s<l;s++)for(o=n.rows[s],a=0;a<o.length;a++)o[a].tokens=this.lexer.inline(o[a].text);return n}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:He(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):He(e[0]):e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=ua(n.slice(0,-1),"\\");if((n.length-a.length)%2==0)return}else{const a=(function(o,l){if(o.indexOf(l[1])===-1)return-1;const c=o.length;let u=0,d=0;for(;d<c;d++)if(o[d]==="\\")d++;else if(o[d]===l[0])u++;else if(o[d]===l[1]&&(u--,u<0))return d;return-1})(e[2],"()");if(a>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);a&&(r=a[1],s=a[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(n)?r.slice(1):r.slice(1,-1)),Gc(e,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=(n[2]||n[1]).replace(/\s+/g," ");if(r=e[r.toLowerCase()],!r){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return Gc(n,r,n[0],this.lexer)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrong.lDelim.exec(t);if(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=r[1]||r[2]||"";if(!s||s&&(n===""||this.rules.inline.punctuation.exec(n))){const a=r[0].length-1;let o,l,c=a,u=0;const d=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,e=e.slice(-1*t.length+a);(r=d.exec(e))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(l=o.length,r[3]||r[4]){c+=l;continue}if((r[5]||r[6])&&a%3&&!((a+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const h=t.slice(0,a+r.index+(r[0].length-o.length)+l);if(Math.min(a,l)%2){const _=h.slice(1,-1);return{type:"em",raw:h,text:_,tokens:this.lexer.inlineTokens(_)}}const p=h.slice(2,-2);return{type:"strong",raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const r=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return r&&s&&(n=n.substring(1,n.length-1)),n=He(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t,e){const n=this.rules.inline.autolink.exec(t);if(n){let r,s;return n[2]==="@"?(r=He(this.options.mangle?e(n[1]):n[1]),s="mailto:"+r):(r=He(n[1]),s=r),{type:"link",raw:n[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(t,e){let n;if(n=this.rules.inline.url.exec(t)){let r,s;if(n[2]==="@")r=He(this.options.mangle?e(n[0]):n[0]),s="mailto:"+r;else{let a;do a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(a!==n[0]);r=He(n[0]),s=n[1]==="www."?"http://"+n[0]:n[0]}return{type:"link",raw:n[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t,e){const n=this.rules.inline.text.exec(t);if(n){let r;return r=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):He(n[0]):n[0]:He(this.options.smartypants?e(n[0]):n[0]),{type:"text",raw:n[0],text:r}}}}const Nt={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Aa,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Nt.def=de(Nt.def).replace("label",Nt._label).replace("title",Nt._title).getRegex(),Nt.bullet=/(?:[*+-]|\d{1,9}[.)])/,Nt.listItemStart=de(/^( *)(bull) */).replace("bull",Nt.bullet).getRegex(),Nt.list=de(Nt.list).replace(/bull/g,Nt.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Nt.def.source+")").getRegex(),Nt._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Nt._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Nt.html=de(Nt.html,"i").replace("comment",Nt._comment).replace("tag",Nt._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Nt.paragraph=de(Nt._paragraph).replace("hr",Nt.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Nt._tag).getRegex(),Nt.blockquote=de(Nt.blockquote).replace("paragraph",Nt.paragraph).getRegex(),Nt.normal={...Nt},Nt.gfm={...Nt.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},Nt.gfm.table=de(Nt.gfm.table).replace("hr",Nt.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Nt._tag).getRegex(),Nt.gfm.paragraph=de(Nt._paragraph).replace("hr",Nt.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Nt.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Nt._tag).getRegex(),Nt.pedantic={...Nt.normal,html:de(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Nt._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Aa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:de(Nt.normal._paragraph).replace("hr",Nt.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Nt.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const Mt={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Aa,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Aa,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function cm(i){return i.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Wc(i){let t,e,n="";const r=i.length;for(t=0;t<r;t++)e=i.charCodeAt(t),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";";return n}Mt._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",Mt.punctuation=de(Mt.punctuation).replace(/punctuation/g,Mt._punctuation).getRegex(),Mt.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,Mt.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,Mt._comment=de(Nt._comment).replace("(?:-->|$)","-->").getRegex(),Mt.emStrong.lDelim=de(Mt.emStrong.lDelim).replace(/punct/g,Mt._punctuation).getRegex(),Mt.emStrong.rDelimAst=de(Mt.emStrong.rDelimAst,"g").replace(/punct/g,Mt._punctuation).getRegex(),Mt.emStrong.rDelimUnd=de(Mt.emStrong.rDelimUnd,"g").replace(/punct/g,Mt._punctuation).getRegex(),Mt._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Mt._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Mt._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Mt.autolink=de(Mt.autolink).replace("scheme",Mt._scheme).replace("email",Mt._email).getRegex(),Mt._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Mt.tag=de(Mt.tag).replace("comment",Mt._comment).replace("attribute",Mt._attribute).getRegex(),Mt._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Mt._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Mt._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Mt.link=de(Mt.link).replace("label",Mt._label).replace("href",Mt._href).replace("title",Mt._title).getRegex(),Mt.reflink=de(Mt.reflink).replace("label",Mt._label).replace("ref",Nt._label).getRegex(),Mt.nolink=de(Mt.nolink).replace("ref",Nt._label).getRegex(),Mt.reflinkSearch=de(Mt.reflinkSearch,"g").replace("reflink",Mt.reflink).replace("nolink",Mt.nolink).getRegex(),Mt.normal={...Mt},Mt.pedantic={...Mt.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:de(/^!?\[(label)\]\((.*?)\)/).replace("label",Mt._label).getRegex(),reflink:de(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Mt._label).getRegex()},Mt.gfm={...Mt.normal,escape:de(Mt.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Mt.gfm.url=de(Mt.gfm.url,"i").replace("email",Mt.gfm._extended_email).getRegex(),Mt.breaks={...Mt.gfm,br:de(Mt.br).replace("{2,}","*").getRegex(),text:de(Mt.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class gi{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||tr,this.options.tokenizer=this.options.tokenizer||new Jo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:Nt.normal,inline:Mt.normal};this.options.pedantic?(e.block=Nt.pedantic,e.inline=Mt.pedantic):this.options.gfm&&(e.block=Nt.gfm,this.options.breaks?e.inline=Mt.breaks:e.inline=Mt.gfm),this.tokenizer.rules=e}static get rules(){return{block:Nt,inline:Mt}}static lex(t,e){return new gi(e).lex(t)}static lexInline(t,e){return new gi(e).inlineTokens(t)}lex(t){let e;for(t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){let n,r,s,a;for(t=this.options.pedantic?t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t.replace(/^( *)(\t+)/gm,((o,l,c)=>l+"    ".repeat(c.length)));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((o=>!!(n=o.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0)))))if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);else if(n=this.tokenizer.code(t))t=t.substring(n.raw.length),r=e[e.length-1],!r||r.type!=="paragraph"&&r.type!=="text"?e.push(n):(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.list(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.def(t))t=t.substring(n.raw.length),r=e[e.length-1],!r||r.type!=="paragraph"&&r.type!=="text"?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+=`
`+n.raw,r.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),e.push(n);else{if(s=t,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=t.slice(1);let c;this.options.extensions.startBlock.forEach((function(u){c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))})),o<1/0&&o>=0&&(s=t.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s)))r=e[e.length-1],a&&r.type==="paragraph"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n),a=s.length!==t.length,t=t.substring(n.raw.length);else if(n=this.tokenizer.text(t))t=t.substring(n.raw.length),r=e[e.length-1],r&&r.type==="text"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n);else if(t){const o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}throw new Error(o)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,r,s,a,o,l,c=t;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,a.index)+"["+Vc("a",a[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,a.index)+"["+Vc("a",a[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,a.index+a[0].length-2)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;t;)if(o||(l=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((u=>!!(n=u.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0)))))if(n=this.tokenizer.escape(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.tag(t))t=t.substring(n.raw.length),r=e[e.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);else if(n=this.tokenizer.link(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(n.raw.length),r=e[e.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);else if(n=this.tokenizer.emStrong(t,c,l))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.codespan(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.br(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.del(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.autolink(t,Wc))t=t.substring(n.raw.length),e.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(t,Wc))){if(s=t,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const d=t.slice(1);let h;this.options.extensions.startInline.forEach((function(p){h=p.call({lexer:this},d),typeof h=="number"&&h>=0&&(u=Math.min(u,h))})),u<1/0&&u>=0&&(s=t.substring(0,u+1))}if(n=this.tokenizer.inlineText(s,cm))t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(l=n.raw.slice(-1)),o=!0,r=e[e.length-1],r&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);else if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}else t=t.substring(n.raw.length),e.push(n);return e}}class Qo{constructor(t){this.options=t||tr}code(t,e,n){const r=(e||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(t,r);s!=null&&s!==t&&(n=!0,t=s)}return t=t.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+He(r)+'">'+(n?t:He(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:He(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,e,n,r){return this.options.headerIds?`<h${e} id="${this.options.headerPrefix+r.slug(n)}">${t}</h${e}>
`:`<h${e}>${t}</h${e}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,e,n){const r=e?"ol":"ul";return"<"+r+(e&&n!==1?' start="'+n+'"':"")+`>
`+t+"</"+r+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){if((t=zc(this.options.sanitize,this.options.baseUrl,t))===null)return n;let r='<a href="'+t+'"';return e&&(r+=' title="'+e+'"'),r+=">"+n+"</a>",r}image(t,e,n){if((t=zc(this.options.sanitize,this.options.baseUrl,t))===null)return n;let r=`<img src="${t}" alt="${n}"`;return e&&(r+=` title="${e}"`),r+=this.options.xhtml?"/>":">",r}text(t){return t}}class Zd{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class Jd{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let n=t,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[t];do r++,n=t+"-"+r;while(this.seen.hasOwnProperty(n))}return e||(this.seen[t]=r,this.seen[n]=0),n}slug(t,e={}){const n=this.serialize(t);return this.getNextSafeSlug(n,e.dryrun)}}class vi{constructor(t){this.options=t||tr,this.options.renderer=this.options.renderer||new Qo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Zd,this.slugger=new Jd}static parse(t,e){return new vi(e).parse(t)}static parseInline(t,e){return new vi(e).parseInline(t)}parse(t,e=!0){let n,r,s,a,o,l,c,u,d,h,p,_,g,m,f,w,S,E,L,P="";const T=t.length;for(n=0;n<T;n++)if(h=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(L=this.options.extensions.renderers[h.type].call({parser:this},h),L!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type)))P+=L||"";else switch(h.type){case"space":continue;case"hr":P+=this.renderer.hr();continue;case"heading":P+=this.renderer.heading(this.parseInline(h.tokens),h.depth,Kd(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue;case"code":P+=this.renderer.code(h.text,h.lang,h.escaped);continue;case"table":for(u="",c="",a=h.header.length,r=0;r<a;r++)c+=this.renderer.tablecell(this.parseInline(h.header[r].tokens),{header:!0,align:h.align[r]});for(u+=this.renderer.tablerow(c),d="",a=h.rows.length,r=0;r<a;r++){for(l=h.rows[r],c="",o=l.length,s=0;s<o;s++)c+=this.renderer.tablecell(this.parseInline(l[s].tokens),{header:!1,align:h.align[s]});d+=this.renderer.tablerow(c)}P+=this.renderer.table(u,d);continue;case"blockquote":d=this.parse(h.tokens),P+=this.renderer.blockquote(d);continue;case"list":for(p=h.ordered,_=h.start,g=h.loose,a=h.items.length,d="",r=0;r<a;r++)f=h.items[r],w=f.checked,S=f.task,m="",f.task&&(E=this.renderer.checkbox(w),g?f.tokens.length>0&&f.tokens[0].type==="paragraph"?(f.tokens[0].text=E+" "+f.tokens[0].text,f.tokens[0].tokens&&f.tokens[0].tokens.length>0&&f.tokens[0].tokens[0].type==="text"&&(f.tokens[0].tokens[0].text=E+" "+f.tokens[0].tokens[0].text)):f.tokens.unshift({type:"text",text:E}):m+=E),m+=this.parse(f.tokens,g),d+=this.renderer.listitem(m,S,w);P+=this.renderer.list(d,p,_);continue;case"html":P+=this.renderer.html(h.text);continue;case"paragraph":P+=this.renderer.paragraph(this.parseInline(h.tokens));continue;case"text":for(d=h.tokens?this.parseInline(h.tokens):h.text;n+1<T&&t[n+1].type==="text";)h=t[++n],d+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);P+=e?this.renderer.paragraph(d):d;continue;default:{const D='Token with "'+h.type+'" type was not found.';if(this.options.silent)return void console.error(D);throw new Error(D)}}return P}parseInline(t,e){e=e||this.renderer;let n,r,s,a="";const o=t.length;for(n=0;n<o;n++)if(r=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(s=this.options.extensions.renderers[r.type].call({parser:this},r),s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))a+=s||"";else switch(r.type){case"escape":case"text":a+=e.text(r.text);break;case"html":a+=e.html(r.text);break;case"link":a+=e.link(r.href,r.title,this.parseInline(r.tokens,e));break;case"image":a+=e.image(r.href,r.title,r.text);break;case"strong":a+=e.strong(this.parseInline(r.tokens,e));break;case"em":a+=e.em(this.parseInline(r.tokens,e));break;case"codespan":a+=e.codespan(r.text);break;case"br":a+=e.br();break;case"del":a+=e.del(this.parseInline(r.tokens,e));break;default:{const l='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}}return a}}class ro{constructor(t){this.options=t||tr}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(t){return t}postprocess(t){return t}}function Qd(i,t){return(e,n,r)=>{typeof n=="function"&&(r=n,n=null);const s={...n},a=(function(o,l,c){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,o){const d="<p>An error occurred:</p><pre>"+He(u.message+"",!0)+"</pre>";return l?Promise.resolve(d):c?void c(null,d):d}if(l)return Promise.reject(u);if(!c)throw u;c(u)}})((n={...kt.defaults,...s}).silent,n.async,r);if(e==null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if((function(o){o&&o.sanitize&&!o.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")})(n),n.hooks&&(n.hooks.options=n),r){const o=n.highlight;let l;try{n.hooks&&(e=n.hooks.preprocess(e)),l=i(e,n)}catch(d){return a(d)}const c=function(d){let h;if(!d)try{n.walkTokens&&kt.walkTokens(l,n.walkTokens),h=t(l,n),n.hooks&&(h=n.hooks.postprocess(h))}catch(p){d=p}return n.highlight=o,d?a(d):r(null,h)};if(!o||o.length<3||(delete n.highlight,!l.length))return c();let u=0;return kt.walkTokens(l,(function(d){d.type==="code"&&(u++,setTimeout((()=>{o(d.text,d.lang,(function(h,p){if(h)return c(h);p!=null&&p!==d.text&&(d.text=p,d.escaped=!0),u--,u===0&&c()}))}),0))})),void(u===0&&c())}if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(e):e).then((o=>i(o,n))).then((o=>n.walkTokens?Promise.all(kt.walkTokens(o,n.walkTokens)).then((()=>o)):o)).then((o=>t(o,n))).then((o=>n.hooks?n.hooks.postprocess(o):o)).catch(a);try{n.hooks&&(e=n.hooks.preprocess(e));const o=i(e,n);n.walkTokens&&kt.walkTokens(o,n.walkTokens);let l=t(o,n);return n.hooks&&(l=n.hooks.postprocess(l)),l}catch(o){return a(o)}}}function kt(i,t,e){return Qd(gi.lex,vi.parse)(i,t,e)}kt.options=kt.setOptions=function(i){var t;return kt.defaults={...kt.defaults,...i},t=kt.defaults,tr=t,kt},kt.getDefaults=Jp,kt.defaults=tr,kt.use=function(...i){const t=kt.defaults.extensions||{renderers:{},childTokens:{}};i.forEach((e=>{const n={...e};if(n.async=kt.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach((r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const s=t.renderers[r.name];t.renderers[r.name]=s?function(...a){let o=r.renderer.apply(this,a);return o===!1&&(o=s.apply(this,a)),o}:r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[r.level]?t[r.level].unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}r.childTokens&&(t.childTokens[r.name]=r.childTokens)})),n.extensions=t),e.renderer){const r=kt.defaults.renderer||new Qo;for(const s in e.renderer){const a=r[s];r[s]=(...o)=>{let l=e.renderer[s].apply(r,o);return l===!1&&(l=a.apply(r,o)),l}}n.renderer=r}if(e.tokenizer){const r=kt.defaults.tokenizer||new Jo;for(const s in e.tokenizer){const a=r[s];r[s]=(...o)=>{let l=e.tokenizer[s].apply(r,o);return l===!1&&(l=a.apply(r,o)),l}}n.tokenizer=r}if(e.hooks){const r=kt.defaults.hooks||new ro;for(const s in e.hooks){const a=r[s];ro.passThroughHooks.has(s)?r[s]=o=>{if(kt.defaults.async)return Promise.resolve(e.hooks[s].call(r,o)).then((c=>a.call(r,c)));const l=e.hooks[s].call(r,o);return a.call(r,l)}:r[s]=(...o)=>{let l=e.hooks[s].apply(r,o);return l===!1&&(l=a.apply(r,o)),l}}n.hooks=r}if(e.walkTokens){const r=kt.defaults.walkTokens;n.walkTokens=function(s){let a=[];return a.push(e.walkTokens.call(this,s)),r&&(a=a.concat(r.call(this,s))),a}}kt.setOptions(n)}))},kt.walkTokens=function(i,t){let e=[];for(const n of i)switch(e=e.concat(t.call(kt,n)),n.type){case"table":for(const r of n.header)e=e.concat(kt.walkTokens(r.tokens,t));for(const r of n.rows)for(const s of r)e=e.concat(kt.walkTokens(s.tokens,t));break;case"list":e=e.concat(kt.walkTokens(n.items,t));break;default:kt.defaults.extensions&&kt.defaults.extensions.childTokens&&kt.defaults.extensions.childTokens[n.type]?kt.defaults.extensions.childTokens[n.type].forEach((function(r){e=e.concat(kt.walkTokens(n[r],t))})):n.tokens&&(e=e.concat(kt.walkTokens(n.tokens,t)))}return e},kt.parseInline=Qd(gi.lexInline,vi.parseInline),kt.Parser=vi,kt.parser=vi.parse,kt.Renderer=Qo,kt.TextRenderer=Zd,kt.Lexer=gi,kt.lexer=gi.lex,kt.Tokenizer=Jo,kt.Slugger=Jd,kt.Hooks=ro,kt.parse=kt,kt.options,kt.setOptions,kt.use,kt.walkTokens,kt.parseInline,vi.parse,gi.lex;const um=()=>{let i,t,e=null;function n(){if(e&&!e.closed)e.focus();else{if(e=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),e.marked=kt,e.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						const supportedEvents = [
							'slidechanged',
							'fragmentshown',
							'fragmenthidden',
							'paused',
							'resumed',
							'previewiframe',
							'previewimage',
							'previewvideo',
							'closeoverlay'
						];

						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( supportedEvents.includes( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {
							dispatchStateToMainWindow( data.state );
						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Don't show lightboxes in the upcoming slide
					const { previewVideo, previewImage, previewIframe, ...upcomingState } = data.state;

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ upcomingState ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!e)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const o=t.getConfig().url,l=typeof o=="string"?o:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;i=setInterval((function(){e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:t.getState(),url:l}),"*")}),500),window.addEventListener("message",s)})()}}function r(o){let l=t.getCurrentSlide(),c=l.querySelectorAll("aside.notes"),u=l.querySelector(".current-fragment"),d={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:t.getState()};if(l.hasAttribute("data-notes")&&(d.notes=l.getAttribute("data-notes"),d.whitespace="pre-wrap"),u){let h=u.querySelector("aside.notes");h?(d.notes=h.innerHTML,d.markdown=typeof h.getAttribute("data-markdown")=="string",c=null):u.hasAttribute("data-notes")&&(d.notes=u.getAttribute("data-notes"),d.whitespace="pre-wrap",c=null)}c&&c.length&&(c=Array.from(c).filter((h=>h.closest(".fragment")===null)),d.notes=c.map((h=>h.innerHTML)).join(`
`),d.markdown=c[0]&&typeof c[0].getAttribute("data-markdown")=="string"),e.postMessage(JSON.stringify(d),"*")}function s(o){if((function(l){try{return window.location.origin===l.source.location.origin}catch{return!1}})(o))try{let l=JSON.parse(o.data);l&&l.namespace==="reveal-notes"&&l.type==="connected"?(clearInterval(i),a()):l&&l.namespace==="reveal-notes"&&l.type==="call"&&(function(c,u,d){let h=t[c].apply(t,u);e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:h,callId:d}),"*")})(l.methodName,l.arguments,l.callId)}catch{}}function a(){t.on("slidechanged",r),t.on("fragmentshown",r),t.on("fragmenthidden",r),t.on("overviewhidden",r),t.on("overviewshown",r),t.on("paused",r),t.on("resumed",r),t.on("previewiframe",r),t.on("previewimage",r),t.on("previewvideo",r),t.on("closeoverlay",r),r()}return{id:"notes",init:function(o){t=o,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?n():window.addEventListener("message",(l=>{if(!e&&typeof l.data=="string"){let u;try{u=JSON.parse(l.data)}catch{}u&&u.namespace==="reveal-notes"&&u.type==="heartbeat"&&(c=l.source,e&&!e.closed?e.focus():(e=c,window.addEventListener("message",s),a()))}var c})),t.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},(function(){n()})))},open:n}},dm={width:1280,height:720,margin:.06,minScale:.2,maxScale:1.8,hash:!0,respondToHashChanges:!0,controls:!0,controlsTutorial:!1,controlsLayout:"bottom-right",progress:!0,slideNumber:"c/t",center:!0,transition:"fade",transitionSpeed:"default",backgroundTransition:"none",overview:!0,touch:!0,keyboard:!0,hideInactiveCursor:!0,hideCursorTime:4e3,plugins:[um]};async function hm(i){const t=new hi(i,dm);return await t.initialize(),t}const Cn=Wi({api:null,index:0,total:0,menuOpen:!1});function fm(i){Cn.api?.slide(i),Cn.menuOpen=!1}function tl(){Cn.menuOpen=!Cn.menuOpen}var pm=Gt("<div><!></div>");function Ee(i,t){let e=ca(t,"align",3,"center"),n=ca(t,"max",3,1080),r=ca(t,"panel",3,!1);var s=pm();let a;var o=st(s);sc(o,()=>t.children??Ia),oe(()=>{a=Qn(s,1,"slide-inner svelte-akw6jd",null,a,{panel:r()}),Tt(s,"data-align",e()),Yn(s,`--slide-max:${n()??""}px`)}),Ft(i,s)}var mm=Gt('<a class="ext-link svelte-1jt144g"><!> <svg class="arrow svelte-1jt144g" viewBox="0 0 24 24" width="0.7em" height="0.7em" aria-hidden="true"><path d="M7 17L17 7M17 7H9M17 7V15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>');function th(i,t){let e=ca(t,"newtab",3,!0);var n=mm(),r=st(n);sc(r,()=>t.children??Ia),oe(()=>{Tt(n,"href",t.href),Tt(n,"title",t.title),Tt(n,"target",e()?"_blank":void 0),Tt(n,"rel",e()?"noopener noreferrer":void 0)}),Ft(i,n)}var gm=Gt('<strong class="name svelte-2c9vfg">Val Hovey</strong>'),vm=Gt('<h1 class="svelte-2c9vfg">Astro<span class="amp svelte-2c9vfg">Deep</span>Dive</h1> <p class="tagline svelte-2c9vfg">Capturing the night sky</p> <p class="byline svelte-2c9vfg">Presented by <!> <span class="sep svelte-2c9vfg">·</span> <span class="hint">press <kbd class="svelte-2c9vfg">→</kbd> to begin</span></p>',1);function _m(i){Ee(i,{align:"center",max:1e3,children:(t,e)=>{var n=vm(),r=pt(Re(n),4),s=pt(st(r));th(s,{href:"https://valhovey.github.io",children:(a,o)=>{var l=gm();Ft(a,l)},$$slots:{default:!0}}),Ft(t,n)},$$slots:{default:!0}})}const xm="/astro-deep-dive/assets/val_dob-BRkbMQl4.png";var ym=Gt('<div class="cols svelte-ybbdso"><figure class="photo svelte-ybbdso"><img alt="Val out by Spiral Jetty with a Dobsonian telescope" class="svelte-ybbdso"/> <figcaption class="svelte-ybbdso">Out by Spiral Jetty</figcaption></figure> <div class="prose svelte-ybbdso"><h2 class="svelte-ybbdso">About me</h2> <p>Some math nerd living in Northern Utah.</p></div></div>');function Sm(i){Ee(i,{align:"center",max:1180,children:(t,e)=>{var n=ym(),r=st(n),s=st(r);oe(()=>Tt(s,"src",xm)),Ft(t,n)},$$slots:{default:!0}})}const bm="/astro-deep-dive/assets/mini_setup-D_l-65qS.png";var Em=Gt(`<div class="cols svelte-fgu333"><figure class="photo svelte-fgu333"><img alt="A small, minimal astrophotography setup" class="svelte-fgu333"/></figure> <div class="prose svelte-fgu333"><h2 class="svelte-fgu333">You don't need a telescope!</h2> <p class="smiley svelte-fgu333" aria-hidden="true">:)</p></div></div>`);function Mm(i){Ee(i,{align:"center",max:1220,children:(t,e)=>{var n=Em(),r=st(n),s=st(r);oe(()=>Tt(s,"src",bm)),Ft(t,n)},$$slots:{default:!0}})}const eh="/astro-deep-dive/assets/white_pine-B3t9_0Vv.png";var wm=Gt('<figure class="photo svelte-rne4n9"><img alt="Night sky over White Pine" class="svelte-rne4n9"/></figure>');function Am(i){Ee(i,{align:"center",max:1600,children:(t,e)=>{var n=wm(),r=st(n);oe(()=>Tt(r,"src",eh)),Ft(t,n)},$$slots:{default:!0}})}const so=i=>{var t=Tm();Ft(i,t)};var Tm=rc('<svg class="arrow svelte-1f8nxkh" viewBox="0 0 40 20" aria-hidden="true"><line x1="2" y1="10" x2="31" y2="10" class="svelte-1f8nxkh"></line><polyline points="25,5 34,10 25,15" class="svelte-1f8nxkh"></polyline></svg>'),Rm=Gt('<!> <div class="node accent svelte-1f8nxkh"> </div>',1),Cm=Gt('<h2 class="svelte-1f8nxkh">Acquisition</h2> <div class="flow svelte-1f8nxkh" role="img" aria-label="Acquisition pipeline: space photons and light pollution are summed, then pass through atmosphere and dust, the lens, the sensor, and storage. The lens, sensor, and storage are what we can control."><div class="merge svelte-1f8nxkh"><div class="inputs svelte-1f8nxkh"><span>Space Photons</span> <span>Light Pollution</span></div> <svg class="join svelte-1f8nxkh" viewBox="0 0 48 96" aria-hidden="true"><path d="M2 22 L42 48" class="svelte-1f8nxkh"></path><path d="M2 74 L42 48" class="svelte-1f8nxkh"></path></svg> <span class="sum svelte-1f8nxkh">+</span></div> <!> <div class="node svelte-1f8nxkh">Atmosphere/Dust</div> <!> <div class="controlled svelte-1f8nxkh"><div class="controlled-row svelte-1f8nxkh"></div> <div class="brace-group svelte-1f8nxkh" aria-hidden="true"><svg class="brace svelte-1f8nxkh" viewBox="0 0 100 24" preserveAspectRatio="none"><path d="M0 2 C 12 2 10 14 20 15 C 36 16 44 16 50 23 C 56 16 64 16 80 15 C 90 14 88 2 100 2" class="svelte-1f8nxkh"></path></svg> <p class="control-label svelte-1f8nxkh">what we can control</p></div></div></div>',1);function Pm(i){const t=["Lens","Sensor","Storage"];Ee(i,{align:"center",max:1280,children:(e,n)=>{var r=Cm(),s=pt(Re(r),2),a=pt(st(s),2);so(a);var o=pt(a,4);so(o);var l=pt(o,2),c=st(l);Jn(c,7,()=>t,u=>u,(u,d,h)=>{var p=Rm(),_=Re(p);{var g=w=>{so(w)};Br(_,w=>{K(h)>0&&w(g)})}var m=pt(_,2),f=st(m);oe(()=>pe(f,K(d))),Ft(u,p)}),Ft(e,r)},$$slots:{default:!0}})}const Lm="/astro-deep-dive/assets/busy_highway-CRQ_8qOe.png",Im="/astro-deep-dive/assets/country_road-DTG2uX2_.png";var Dm=Gt('<h2 class="svelte-m3pjni">Stacking</h2> <div class="frames svelte-m3pjni"><figure class="photo svelte-m3pjni"><img alt="Long exposure of a busy highway" class="svelte-m3pjni"/></figure> <figure class="photo svelte-m3pjni"><img alt="Long exposure of a country road" class="svelte-m3pjni"/></figure></div> <div class="goal svelte-m3pjni"><p class="label svelte-m3pjni">Goal</p> <p class="statement svelte-m3pjni">Enable arbitrarily long exposures using finite resources.</p></div>',1);function km(i){Ee(i,{align:"center",max:1200,children:(t,e)=>{var n=Dm(),r=pt(Re(n),2),s=st(r),a=st(s),o=pt(s,2),l=st(o);oe(()=>{Tt(a,"src",Lm),Tt(l,"src",Im)}),Ft(t,n)},$$slots:{default:!0}})}const Nm="/astro-deep-dive/assets/whirlpool-C04veC4d.png";var Um=rc('<svg class="diagram svelte-jat1ib" viewBox="0 0 640 340" role="img" aria-label="Stacking: a stack of RAW frames flows into one big averaging arrow to produce a mean (x-bar) and a clean output image, while outliers — hot pixels, satellites or planes, and blurrier data — are rejected."><defs><marker id="ah-aqua" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="mk-aqua svelte-jat1ib"></path></marker><marker id="ah-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="mk-blue svelte-jat1ib"></path></marker><marker id="ah-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="mk-red svelte-jat1ib"></path></marker><clipPath id="clip-wp"><rect x="440" y="52" width="172" height="184" rx="10"></rect></clipPath></defs><g class="card svelte-jat1ib"><rect x="36" y="104" width="76" height="92" rx="9" class="svelte-jat1ib"></rect><rect x="52" y="128" width="76" height="92" rx="9" class="svelte-jat1ib"></rect><rect x="68" y="152" width="76" height="92" rx="9" class="svelte-jat1ib"></rect><rect x="84" y="176" width="76" height="92" rx="9" class="svelte-jat1ib"></rect></g><circle cx="122" cy="206" r="14" class="glyph svelte-jat1ib"></circle><circle cx="122" cy="206" r="4" class="glyph svelte-jat1ib"></circle><text x="122" y="252" class="card-label svelte-jat1ib">RAW</text><g class="merge-curve svelte-jat1ib"><path d="M166 150 C 205 150 258 148 300 148" marker-end="url(#ah-aqua)" class="svelte-jat1ib"></path><path d="M166 172 C 210 172 258 151 300 151" marker-end="url(#ah-aqua)" class="svelte-jat1ib"></path><path d="M166 196 C 205 196 255 154 300 154" marker-end="url(#ah-aqua)" class="svelte-jat1ib"></path><path d="M166 220 C 205 220 255 157 300 157" marker-end="url(#ah-aqua)" class="svelte-jat1ib"></path></g><line x1="315" y1="128" x2="343" y2="128" class="xbar-bar svelte-jat1ib"></line><text x="329" y="160" class="xbar svelte-jat1ib">x</text><line x1="352" y1="144" x2="432" y2="144" class="out-line svelte-jat1ib" marker-end="url(#ah-blue)"></line><image x="440" y="52" width="172" height="184" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-wp)"></image><rect x="440" y="52" width="172" height="184" rx="10" class="frame svelte-jat1ib"></rect><line x1="300" y1="176" x2="300" y2="240" class="rej-line svelte-jat1ib" marker-end="url(#ah-red)"></line><g class="rej svelte-jat1ib"><circle cx="290" cy="256" r="2.4" class="svelte-jat1ib"></circle><text x="300" y="260" class="svelte-jat1ib">Hot pixels</text><circle cx="290" cy="284" r="2.4" class="svelte-jat1ib"></circle><text x="300" y="288" class="svelte-jat1ib">Satellites / planes</text><circle cx="290" cy="312" r="2.4" class="svelte-jat1ib"></circle><text x="300" y="316" class="svelte-jat1ib">Blurrier data</text></g></svg>');function Fm(i){Ee(i,{align:"center",max:1240,children:(t,e)=>{var n=Um(),r=pt(st(n),9);oe(()=>Tt(r,"href",Nm)),Ft(t,n)},$$slots:{default:!0}})}var Om=Gt('<figcaption class="demo-head svelte-21udtx"><span class="demo-title svelte-21udtx"> </span></figcaption>'),Bm=Gt('<p class="demo-caption svelte-21udtx"> </p>'),zm=Gt('<figure class="demo svelte-21udtx" role="group"><!> <div class="demo-body svelte-21udtx"><!></div> <!></figure>');function Ba(i,t){const e=u=>u.stopPropagation();var n=zm(),r=st(n);{var s=u=>{var d=Om(),h=st(d),p=st(h);oe(()=>pe(p,t.title)),Ft(u,d)};Br(r,u=>{t.title&&u(s)})}var a=pt(r,2),o=st(a);sc(o,()=>t.children??Ia);var l=pt(a,2);{var c=u=>{var d=Bm(),h=st(d);oe(()=>pe(h,t.caption)),Ft(u,d)};Br(l,u=>{t.caption&&u(c)})}oe(()=>Tt(n,"aria-label",t.title??"Interactive demo")),Xn("keydown",n,e),Xn("pointerdown",n,e),Xn("touchstart",n,e),Xn("touchmove",n,e),Ft(i,n)}Fa(["keydown","pointerdown","touchstart","touchmove"]);var Hm=Gt('<span class="reticle svelte-ulpcm1"></span>'),Vm=rc('<rect class="bar svelte-ulpcm1"></rect>'),Gm=Gt(`<div class="wrap svelte-ulpcm1"><div class="stage svelte-ulpcm1"><div class="frame svelte-ulpcm1"><canvas aria-label="Simulated exposure of the scene" class="svelte-ulpcm1"></canvas> <!></div> <p class="region-label svelte-ulpcm1">highlighted region of relatively similar brightness</p></div> <div class="panel svelte-ulpcm1"><svg class="chart svelte-ulpcm1" role="img" aria-label="Poisson distribution of the highlighted region's photon count"><line class="axis svelte-ulpcm1"></line><!><line class="mean svelte-ulpcm1"></line><text class="axis-label svelte-ulpcm1">photons collected</text></svg></div> <label class="control svelte-ulpcm1"><span class="svelte-ulpcm1">exposure time <em class="svelte-ulpcm1"> </em></span> <input type="range" min="1" step="1" class="svelte-ulpcm1"/></label></div>`);function Wm(i,t){ir(t,!0);const e=200,n=132,r=6,s=120;let a=Ae(4),o=new Float32Array(0),l=new Float32Array(0),c=new Float32Array(0),u=new Float32Array(0),d=Ae(!1);const h=4;let p=Ae(e>>1),_=Ae(n>>1),g=Ae(.5),m,f=null;function w(){if(f!==null){const R=f;return f=null,R}const et=Math.random()||1e-9,wt=Math.random(),ut=Math.sqrt(-2*Math.log(et));return f=ut*Math.sin(2*Math.PI*wt),ut*Math.cos(2*Math.PI*wt)}function S(et){if(et<=0)return 0;if(et<25){const wt=Math.exp(-et);let ut=0,R=1;do ut++,R*=Math.random();while(R>wt);return ut-1}return Math.max(0,Math.round(et+Math.sqrt(et)*w()))}let E=0,L=null;function P(){E||(E=requestAnimationFrame(()=>{E=0,T()}))}function T(){const et=m.getContext("2d");if(!et)return;L||(L=et.createImageData(e,n));const wt=L.data,ut=K(a),R=255/(r*ut);for(let y=0;y<e*n;y++){const F=y*4;wt[F]=D(S(o[y]*r*ut)*R),wt[F+1]=D(S(l[y]*r*ut)*R),wt[F+2]=D(S(c[y]*r*ut)*R),wt[F+3]=255}et.putImageData(L,0,0)}const D=et=>et<0?0:et>255?255:et;ps(()=>{K(a),K(d)&&m&&P()}),Oa(()=>{const et=new Image;et.onload=()=>{const wt=document.createElement("canvas");wt.width=e,wt.height=n;const ut=wt.getContext("2d");if(!ut)return;ut.drawImage(et,0,0,e,n);const R=ut.getImageData(0,0,e,n).data;o=new Float32Array(e*n),l=new Float32Array(e*n),c=new Float32Array(e*n),u=new Float32Array(e*n);for(let F=0;F<e*n;F++){const Y=R[F*4]/255,tt=R[F*4+1]/255,$=R[F*4+2]/255;o[F]=Y,l[F]=tt,c[F]=$,u[F]=.2126*Y+.7152*tt+.0722*$}const y=V();ye(p,y.x,!0),ye(_,y.y,!0),ye(g,y.lum,!0),ye(d,!0)},et.src=eh});function V(){let et={x:e>>1,y:n>>1,lum:.5},wt=1/0;const ut=Math.floor(n*.3),R=Math.floor(n*.7),y=Math.floor(e*.3),F=Math.floor(e*.7);for(let Y=ut;Y<R;Y+=2)for(let tt=y;tt<F;tt+=2){let $=0,xt=0,lt=0;for(let rt=-h;rt<=h;rt++)for(let yt=-h;yt<=h;yt++){const Dt=u[(Y+rt)*e+(tt+yt)];$+=Dt,xt+=Dt*Dt,lt++}const ht=$/lt;if(ht<.2||ht>.8)continue;const zt=xt/lt-ht*ht;zt<wt&&(wt=zt,et={x:tt,y:Y,lum:ht})}return et}const v=Rn(()=>K(d)?K(g)*r*K(a):0),x={w:240,h:132,padL:10,padR:10,padT:10,padB:26},N=x.w-x.padL-x.padR,B=x.h-x.padT-x.padB,W=x.h-x.padB;function j(et){const wt=Math.sqrt(Math.max(et,1e-9));let ut=Math.ceil(et+4*wt)+1;ut<6&&(ut=6);const R=new Float64Array(ut+1);R[0]=Math.exp(-et);for(let $=1;$<=ut;$++)R[$]=R[$-1]*et/$;const y=Math.max(0,Math.floor(et-4*wt)),F=Math.max(1,Math.ceil((ut-y)/40)),Y=[];let tt=0;for(let $=y;$<=ut;$+=F){let xt=0;for(let lt=$;lt<$+F&&lt<=ut;lt++)xt+=R[lt];Y.push({k:$,p:xt}),xt>tt&&(tt=xt)}return{bars:Y,maxP:tt,kmin:y,kmax:ut,step:F,lambda:et,sigma:wt,snr:wt}}const z=Rn(()=>j(K(v))),J=(et,wt)=>x.padL+(wt-et.kmin)/Math.max(1e-9,et.kmax-et.kmin)*N,q=(et,wt)=>x.padT+(1-wt/Math.max(1e-9,et.maxP))*B,ct=Rn(()=>Math.max(1.4,K(z).step/Math.max(1e-9,K(z).kmax-K(z).kmin)*N*.86));var at=Gm(),vt=st(at),Yt=st(vt),Ut=st(Yt);Tt(Ut,"width",e),Tt(Ut,"height",n),zr(Ut,et=>m=et,()=>m);var Z=pt(Ut,2);{var it=et=>{var wt=Hm();oe(()=>Yn(wt,`left:${(K(p)+.5)/e*100}%; top:${(K(_)+.5)/n*100}%; width:4.5%; height:6.8181818181818175%`)),Ft(et,wt)};Br(Z,et=>{K(d)&&et(it)})}var _t=pt(vt,2),dt=st(_t),It=st(dt),Rt=pt(It);Jn(Rt,17,()=>K(z).bars,et=>et.k,(et,wt)=>{var ut=Vm();oe((R,y,F)=>{Tt(ut,"x",R),Tt(ut,"y",y),Tt(ut,"width",K(ct)),Tt(ut,"height",F)},[()=>J(K(z),K(wt).k)-K(ct)/2,()=>q(K(z),K(wt).p),()=>Math.max(0,W-q(K(z),K(wt).p))]),Ft(et,ut)});var Wt=pt(Rt),se=pt(Wt),jt=pt(_t,2),I=st(jt),Le=pt(st(I)),Kt=st(Le),qt=pt(I,2);Tt(qt,"max",s),oe((et,wt)=>{Tt(dt,"viewBox",`0 0 ${x.w} ${x.h}`),Tt(It,"x1",x.padL),Tt(It,"y1",W),Tt(It,"x2",x.w-x.padR),Tt(It,"y2",W),Tt(Wt,"x1",et),Tt(Wt,"y1",x.padT),Tt(Wt,"x2",wt),Tt(Wt,"y2",W),Tt(se,"x",x.w/2),Tt(se,"y",x.h-6),pe(Kt,`${K(a)??""}s`)},[()=>J(K(z),K(z).lambda),()=>J(K(z),K(z).lambda)]),fs(qt,()=>K(a),et=>ye(a,et)),Ft(i,at),rr()}var qm=Gt('<h2 class="svelte-1wb1iig">Shot noise is Poisson</h2> <!>',1);function $m(i){Ee(i,{align:"center",max:1200,children:(t,e)=>{var n=qm(),r=pt(Re(n),2);Ba(r,{title:"Exposure & shot noise",caption:"Signal is the idealized average with infinite exposure time.",children:(s,a)=>{Wm(s,{})}}),Ft(t,n)},$$slots:{default:!0}})}var Xm=Gt('<div class="viz svelte-19e9wwh"><svg viewBox="0 0 240 240" role="img" aria-label="Two orthogonal unit vectors add to a resultant of length root two, which rotates back to vertical — independent noise adds in quadrature." class="svelte-19e9wwh"><defs><marker id="ah-comp" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="13" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="mk-comp svelte-19e9wwh"></path></marker><marker id="ah-sum" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="mk-sum svelte-19e9wwh"></path></marker></defs><path class="rangle svelte-19e9wwh"></path><line class="vec comp svelte-19e9wwh" marker-end="url(#ah-comp)"></line><line class="vec comp svelte-19e9wwh" marker-end="url(#ah-comp)"></line><line class="vec sum svelte-19e9wwh" marker-end="url(#ah-sum)"></line><circle class="origin svelte-19e9wwh" r="2.6"></circle></svg></div>');function Ym(i,t){ir(t,!0);const e=64,n=196,r=92,s=5,a=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let o=Ae(Wi(a?.46:0)),l;const c=(S,E,L)=>S+(E-S)*L;function u(S){const E=e,L=n-r,P=e+r,T=n-r,D=S<.54?1:S<.7?1-(S-.54)/.16:0,V=S<.18?0:S<.36?(S-.18)/.18:S<.54?1:S<.7?1-(S-.54)/.16:0,v=S<.36?0:S<.54?(S-.36)/.18:1;let x=P,N=T;if(S>=.7){const B=(S-.7)/.3,W=c(Math.PI/4,Math.PI/2,B),j=c(Math.SQRT2,1,B)*r;x=e+j*Math.cos(W),N=n-j*Math.sin(W)}return{ax:E,ay:L,bx:P,by:T,cx:x,cy:N,aOp:D,bOp:V,cOp:v}}const d=Rn(()=>u(K(o)));Oa(()=>{let S=0,E=0,L=!1;const P=v=>{L&&(E||(E=v),ye(o,(K(o)+(v-E)/1e3/s)%1),E=v,S=requestAnimationFrame(P))},T=()=>{L||a||(L=!0,E=0,S=requestAnimationFrame(P))},D=()=>{L=!1,S&&cancelAnimationFrame(S),S=0},V=new IntersectionObserver(v=>{for(const x of v)x.isIntersecting?T():D()},{threshold:.2});return V.observe(l),()=>{D(),V.disconnect()}});var h=Xm(),p=st(h),_=pt(st(p));Tt(_,"d","M75 104 L75 115 L64 115");var g=pt(_);Tt(g,"x1",e),Tt(g,"y1",n);var m=pt(g),f=pt(m);Tt(f,"x1",e),Tt(f,"y1",n);var w=pt(f);Tt(w,"cx",e),Tt(w,"cy",n),zr(h,S=>l=S,()=>l),oe(S=>{Yn(_,`opacity:${S??""}`),Tt(g,"x2",K(d).ax),Tt(g,"y2",K(d).ay),Yn(g,`opacity:${K(d).aOp??""}`),Tt(m,"x1",K(d).ax),Tt(m,"y1",K(d).ay),Tt(m,"x2",K(d).bx),Tt(m,"y2",K(d).by),Yn(m,`opacity:${K(d).bOp??""}`),Tt(f,"x2",K(d).cx),Tt(f,"y2",K(d).cy),Yn(f,`opacity:${K(d).cOp??""}`)},[()=>Math.min(K(d).aOp,K(d).bOp)]),Ft(i,h),rr()}var jm=Gt('<h2 class="svelte-17o5cgn">SNR adds over time</h2> <div class="cols svelte-17o5cgn"><!> <div class="math svelte-17o5cgn"><div class="line svelte-17o5cgn"><span class="lab svelte-17o5cgn">signal</span> <span class="expr svelte-17o5cgn"><i class="svelte-17o5cgn">S</i><sub>N</sub> = N · <i class="svelte-17o5cgn">S</i><sub>1</sub></span></div> <div class="line svelte-17o5cgn"><span class="lab svelte-17o5cgn">noise</span> <span class="expr svelte-17o5cgn">σ<sub>N</sub> = √N · σ<sub>1</sub></span></div> <div class="result svelte-17o5cgn"><span class="expr svelte-17o5cgn">SNR<sub>N</sub> =</span> <span class="frac svelte-17o5cgn"><span class="num svelte-17o5cgn">N · <i>S</i><sub>1</sub></span> <span class="den svelte-17o5cgn">√N · σ<sub>1</sub></span></span> <span class="expr svelte-17o5cgn">= √N · SNR<sub>1</sub></span></div> <p class="prop svelte-17o5cgn">SNR ∝ √N</p></div></div>',1);function Km(i){Ee(i,{align:"center",max:1180,children:(t,e)=>{var n=jm(),r=pt(Re(n),2),s=st(r);Ym(s,{}),Ft(t,n)},$$slots:{default:!0}})}const Zm="/astro-deep-dive/assets/sub-Ao04XIJy.png",Jm="/astro-deep-dive/assets/stacked-Be7-ejzm.png";var Qm=Gt('<div class="wrap svelte-e0sre1"><div class="stage svelte-e0sre1"><img class="base svelte-e0sre1" alt="A single sub-exposure"/> <img class="over svelte-e0sre1" alt="The stacked result of many sub-exposures"/></div> <button> </button></div>');function tg(i){let t=Ae(!1);var e=Qm(),n=st(e),r=st(n),s=pt(r,2),a=pt(n,2);let o;var l=st(a);oe(()=>{Tt(r,"src",Zm),Tt(s,"src",Jm),Yn(s,`opacity:${K(t)?1:0}`),Tt(s,"aria-hidden",!K(t)),o=Qn(a,1,"stack-btn svelte-e0sre1",null,o,{on:K(t)}),pe(l,K(t)?"↺ Reset":"Stack!")}),Xn("click",a,()=>ye(t,!K(t))),Ft(i,e)}Fa(["click"]);var eg=Gt('<h2 class="svelte-1rl61tk">Example of Stacking</h2> <!>',1);function ng(i){Ee(i,{align:"center",max:1240,children:(t,e)=>{var n=eg(),r=pt(Re(n),2);Ba(r,{children:(s,a)=>{tg(s)}}),Ft(t,n)},$$slots:{default:!0}})}var ig=Gt('<h2 class="svelte-1769gmn">Storage</h2> <p class="lead svelte-1769gmn">How you store your image defines what you have to work with.</p>',1);function rg(i){Ee(i,{align:"center",max:920,children:(t,e)=>{var n=ig();Ft(t,n)},$$slots:{default:!0}})}var sg=Gt('<div class="wrap svelte-lx4cbe"><canvas width="1024" height="1" class="bar svelte-lx4cbe" aria-label="Grayscale ramp from black to white, quantized to the selected bit depth"></canvas> <div class="readout svelte-lx4cbe"><span><em class="svelte-lx4cbe"> </em>-bit</span> <span>2<sup class="svelte-lx4cbe"> </sup> = <em class="svelte-lx4cbe"> </em> </span></div> <label class="control svelte-lx4cbe"><span class="svelte-lx4cbe">bit depth <em class="svelte-lx4cbe"> </em></span> <input type="range" min="0" max="16" step="1" class="svelte-lx4cbe"/></label></div>');function ag(i,t){ir(t,!0);let e=Ae(3),n;const r=Rn(()=>Math.pow(2,K(e)));function s(){const T=n.getContext("2d");if(!T)return;const D=n.width,V=T.createImageData(D,1),v=V.data,x=Math.pow(2,K(e));for(let N=0;N<D;N++){const B=N/(D-1),W=x<=1?0:Math.min(x-1,Math.floor(B*x))/(x-1),j=Math.round(W*255),z=N*4;v[z]=j,v[z+1]=j,v[z+2]=j,v[z+3]=255}T.putImageData(V,0,0)}ps(()=>{K(e),n&&s()});var a=sg(),o=st(a);zr(o,T=>n=T,()=>n);var l=pt(o,2),c=st(l),u=st(c),d=st(u),h=pt(c,2),p=pt(st(h)),_=st(p),g=pt(p,2),m=st(g),f=pt(g),w=pt(l,2),S=st(w),E=pt(st(S)),L=st(E),P=pt(S,2);oe(T=>{pe(d,K(e)),pe(_,K(e)),pe(m,T),pe(f,` level${K(r)===1?"":"s"}`),pe(L,K(e))},[()=>K(r).toLocaleString()]),fs(P,()=>K(e),T=>ye(e,T)),Ft(i,a),rr()}var og=Gt('<h2 class="svelte-a444bm">Bit depth</h2> <!>',1);function lg(i){Ee(i,{align:"center",max:1100,children:(t,e)=>{var n=og(),r=pt(Re(n),2);Ba(r,{children:(s,a)=>{ag(s,{})}}),Ft(t,n)},$$slots:{default:!0}})}var cg=Gt('<h2 class="svelte-nm2ckw">ISO</h2> <svg class="diagram svelte-nm2ckw" viewBox="-40 0 640 250" role="img" aria-label="ISO signal chain: photons and thermal noise enter an amplifier (ISO gain), then an ADC that adds read noise, producing a RAW file."><defs><marker id="ah-gray" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="mk-gray svelte-nm2ckw"></path></marker></defs><text class="in photon svelte-nm2ckw" x="96" y="84" text-anchor="end">photons</text><text class="in thermal svelte-nm2ckw" x="96" y="178" text-anchor="end">thermal noise</text><g class="lead svelte-nm2ckw"><line x1="104" y1="78" x2="172" y2="126" marker-end="url(#ah-gray)" class="svelte-nm2ckw"></line><line x1="104" y1="172" x2="172" y2="134" marker-end="url(#ah-gray)" class="svelte-nm2ckw"></line></g><polygon class="amp svelte-nm2ckw" points="176,96 176,164 250,130"></polygon><text class="amp-label svelte-nm2ckw" x="202" y="135" text-anchor="middle">ISO</text><line class="wire svelte-nm2ckw" x1="252" y1="130" x2="298" y2="130" marker-end="url(#ah-gray)"></line><text class="adc-tag svelte-nm2ckw" x="356" y="92" text-anchor="middle">ADC</text><rect class="adc svelte-nm2ckw" x="302" y="102" width="108" height="56" rx="8"></rect><text class="adc-label svelte-nm2ckw" x="356" y="135" text-anchor="middle">read noise</text><line class="wire svelte-nm2ckw" x1="414" y1="130" x2="458" y2="130" marker-end="url(#ah-gray)"></line><rect class="card svelte-nm2ckw" x="464" y="84" width="92" height="104" rx="9"></rect><circle class="glyph svelte-nm2ckw" cx="510" cy="124" r="15"></circle><circle class="glyph svelte-nm2ckw" cx="510" cy="124" r="4"></circle><text class="card-label svelte-nm2ckw" x="510" y="166" text-anchor="middle">RAW</text></svg>',1);function ug(i){Ee(i,{align:"center",max:1240,children:(t,e)=>{var n=cg();Ft(t,n)},$$slots:{default:!0}})}const dg="/astro-deep-dive/assets/bias-GlRNLQhn.png",hg="/astro-deep-dive/assets/dark-CuW20SPz.png",fg="/astro-deep-dive/assets/flat--mYdhwqX.png";var pg=Gt('<figure class="photo svelte-rfjwpw"><img class="svelte-rfjwpw"/> <figcaption class="svelte-rfjwpw"> </figcaption></figure>'),mg=Gt('<h2 class="svelte-rfjwpw">Calibration Frames</h2> <div class="row svelte-rfjwpw"></div>',1);function gg(i){const t=[{src:dg,label:"Bias",alt:"A bias calibration frame"},{src:hg,label:"Dark",alt:"A dark calibration frame"},{src:fg,label:"Flat",alt:"A flat calibration frame"}];Ee(i,{align:"center",max:1240,children:(e,n)=>{var r=mg(),s=pt(Re(r),2);Jn(s,5,()=>t,a=>a.label,(a,o)=>{var l=pg(),c=st(l),u=pt(c,2),d=st(u);oe(()=>{Tt(c,"src",K(o).src),Tt(c,"alt",K(o).alt),pe(d,K(o).label)}),Ft(a,l)}),Ft(e,r)},$$slots:{default:!0}})}const vg="/astro-deep-dive/assets/raw-LHfS8ELD.png",_g="/astro-deep-dive/assets/corrected-DWYMfWRo.png";var xg=Gt('<div class="row svelte-1xs1iot"><figure class="photo svelte-1xs1iot"><img alt="A raw, uncalibrated frame" class="svelte-1xs1iot"/> <figcaption class="svelte-1xs1iot">Raw</figcaption></figure> <svg class="arrow svelte-1xs1iot" viewBox="0 0 48 24" aria-label="becomes" role="img"><line x1="2" y1="12" x2="38" y2="12" class="svelte-1xs1iot"></line><polyline points="31,5 42,12 31,19" class="svelte-1xs1iot"></polyline></svg> <figure class="photo svelte-1xs1iot"><img alt="The calibrated, corrected frame" class="svelte-1xs1iot"/> <figcaption class="svelte-1xs1iot">Corrected</figcaption></figure></div>');function yg(i){Ee(i,{align:"center",max:1240,children:(t,e)=>{var n=xg(),r=st(n),s=st(r),a=pt(r,4),o=st(a);oe(()=>{Tt(s,"src",vg),Tt(o,"src",_g)}),Ft(t,n)},$$slots:{default:!0}})}const Sg="/astro-deep-dive/assets/coma-BkXHDkaC.png",bg="/astro-deep-dive/assets/chromatic_aberration-B9xFsEw1.png";var Eg=Gt('<h2 class="svelte-123ln2w">Optics</h2> <div class="row svelte-123ln2w"><figure class="photo svelte-123ln2w"><img alt="Coma aberration in star images" class="svelte-123ln2w"/> <figcaption class="svelte-123ln2w">Coma</figcaption></figure> <figure class="photo svelte-123ln2w"><img alt="Chromatic aberration colour fringing" class="svelte-123ln2w"/> <figcaption class="svelte-123ln2w">Chromatic aberration</figcaption></figure></div>',1);function Mg(i){Ee(i,{align:"center",max:1180,children:(t,e)=>{var n=Eg(),r=pt(Re(n),2),s=st(r),a=st(s),o=pt(s,2),l=st(o);oe(()=>{Tt(a,"src",Sg),Tt(l,"src",bg)}),Ft(t,n)},$$slots:{default:!0}})}var wg=Gt('<div class="wrap svelte-1k8gfor"><div><span class="streak svelte-1k8gfor"></span></div> <div class="readout svelte-1k8gfor"><span>scale <em class="svelte-1k8gfor"> </em></span> <span>trail <em> </em></span> <span>max <em class="svelte-1k8gfor"> </em></span> <span> </span></div> <label class="control svelte-1k8gfor"><span class="svelte-1k8gfor">focal length <em class="svelte-1k8gfor"> </em></span> <input type="range" min="10" max="600" step="1" class="svelte-1k8gfor"/></label> <label class="control svelte-1k8gfor"><span class="svelte-1k8gfor">exposure <em class="svelte-1k8gfor"> </em></span> <input type="range" min="1" max="120" step="1" class="svelte-1k8gfor"/></label> <label class="control svelte-1k8gfor"><span class="svelte-1k8gfor">pixel pitch <em class="svelte-1k8gfor"> </em> <i class="ref svelte-1k8gfor">IMX571 = 3.76</i></span> <input type="range" min="2" max="9" step="0.01" class="svelte-1k8gfor"/></label></div>');function Ag(i){let r=Ae(20),s=Ae(25),a=Ae(3.76);const o=Rn(()=>206.265*K(a)/K(r)),l=Rn(()=>15.04*K(s)/K(o)),c=Rn(()=>Math.round(9.7*K(o)/15.04)),u=Rn(()=>K(l)<=9.7*.5?{label:"sharp",tone:"ok"}:K(l)<=9.7?{label:"tolerable",tone:"ok"}:K(l)<=9.7*1.6?{label:"slight trailing",tone:"warn"}:{label:"trailing",tone:"bad"}),d=Rn(()=>Math.min(18,Math.max(.5,K(l)*.32)));var h=wg(),p=st(h);let _;var g=st(p),m=pt(p,2),f=st(m),w=pt(st(f)),S=st(w),E=pt(f,2),L=pt(st(E)),P=st(L),T=pt(E,2),D=pt(st(T)),V=st(D),v=pt(T,2),x=st(v),N=pt(m,2),B=st(N),W=pt(st(B)),j=st(W),z=pt(B,2),J=pt(N,2),q=st(J),ct=pt(st(q)),at=st(ct),vt=pt(q,2),Yt=pt(J,2),Ut=st(Yt),Z=pt(st(Ut)),it=st(Z),_t=pt(Ut,2);oe((dt,It,Rt)=>{_=Qn(p,1,"stage svelte-1k8gfor",null,_,{bad:K(u).tone==="bad",warn:K(u).tone==="warn"}),Yn(g,`width:${K(d)??""}em`),pe(S,`${dt??""}″/px`),Qn(L,1,Fd(K(u).tone),"svelte-1k8gfor"),pe(P,`${It??""} px`),pe(V,`≈ ${K(c)??""}s`),Qn(v,1,`verdict ${K(u).tone??""}`,"svelte-1k8gfor"),pe(x,K(u).label),pe(j,`${K(r)??""} mm`),pe(at,`${K(s)??""} s`),pe(it,`${Rt??""} µm`)},[()=>K(o).toFixed(2),()=>K(l).toFixed(1),()=>K(a).toFixed(2)]),fs(z,()=>K(r),dt=>ye(r,dt)),fs(vt,()=>K(s),dt=>ye(s,dt)),fs(_t,()=>K(a),dt=>ye(a,dt)),Ft(i,h)}var Tg=Gt('<h2 class="svelte-objl4c">Star trails</h2> <!>',1);function Rg(i){Ee(i,{align:"center",max:1040,children:(t,e)=>{var n=Tg(),r=pt(Re(n),2);Ba(r,{caption:"Worst case at the celestial equator (15″/s); real trailing scales with cos(declination).",children:(s,a)=>{Ag(s)}}),Ft(t,n)},$$slots:{default:!0}})}const Cg="/astro-deep-dive/assets/tripod-5-qoTPhs.png";var Pg=Gt('<h2 class="svelte-1jj2z2i">Acquisition</h2> <figure class="photo svelte-1jj2z2i"><img alt="A camera on a tripod under the night sky" class="svelte-1jj2z2i"/></figure>',1);function Lg(i){Ee(i,{align:"center",max:1180,children:(t,e)=>{var n=Pg(),r=pt(Re(n),2),s=st(r);oe(()=>Tt(s,"src",Cg)),Ft(t,n)},$$slots:{default:!0}})}const Ig="/astro-deep-dive/assets/msm-BDW2POG2.png",Dg="/astro-deep-dive/assets/barn_door-ktcbJ5jo.png";var kg=Gt('<h2 class="svelte-b8eu6l">Tracking</h2> <div class="row svelte-b8eu6l"><figure class="photo svelte-b8eu6l"><img alt="A compact star tracker" class="svelte-b8eu6l"/> <figcaption class="svelte-b8eu6l">MSM</figcaption></figure> <figure class="photo svelte-b8eu6l"><img alt="A DIY barn-door tracker" class="svelte-b8eu6l"/> <figcaption class="svelte-b8eu6l">Barn door</figcaption></figure></div>',1);function Ng(i){Ee(i,{align:"center",max:1160,children:(t,e)=>{var n=kg(),r=pt(Re(n),2),s=st(r),a=st(s),o=pt(s,2),l=st(o);oe(()=>{Tt(a,"src",Ig),Tt(l,"src",Dg)}),Ft(t,n)},$$slots:{default:!0}})}var Ug=Gt('<div class="lk svelte-23kuhl"><!></div>'),Fg=Gt('<p class="sec svelte-23kuhl"> </p> <div class="list svelte-23kuhl"></div>',1),Og=Gt('<div class="col svelte-23kuhl"><h3 class="svelte-23kuhl"> </h3> <!></div>'),Bg=Gt('<h2 class="svelte-23kuhl">Useful Links</h2> <div class="cols svelte-23kuhl"></div>',1);function zg(i){const t=[{title:"Planning",sections:[{title:"Night Sky",links:[{name:"Stellarium",href:"https://stellarium.org/",desc:"Free open source stellarium software with comprehensive deep sky catalogues (mobile version too)"},{name:"PlanIt Photo",href:"https://www.planitphoto.com/",desc:"Mobile app that lets you plan landscape shots with Milky Way, moon, and more"},{name:"Photo Ephemeris",href:"https://photoephemeris.com/en/",desc:"Web tool that lets you plan sunrise/sunset/lighting for landscape photography"},{name:"Night Sky",href:"https://apps.apple.com/us/app/night-sky/id475772902",desc:"More simple stellarium with a watch counterpart"},{name:"AstroBin",href:"https://astrobin.com",desc:"The largest community of astrophotographers, and a great place to look for examples of objects to plan framing"}]},{title:"Weather",links:[{name:"Windy",href:"https://www.windy.com",desc:"Weather site that combines dozens of weather sources and advanced information about cloud cover"},{name:"Clear Outside",href:"https://clearoutside.com",desc:"Weather site specifically built for Astronomy with built-in ISS passover information"},{name:"Cache Astronomy Forecast",href:"https://cachevalley.space/",desc:"Cache County specific page with all sky camera and current conditions"}]},{title:"Geographic",links:[{name:"CalTopo",href:"https://caltopo.com",desc:"Free comprehensive map letting you plan trail routes, lighting, and public land locations"},{name:"The Dyrt",href:"https://thedyrt.com/",desc:"Maps free and paid camping locations all over the US"},{name:"Google Earth",href:"https://earth.google.com",desc:"You know this one, but it's so useful for planning trips"}]}]},{title:"Equipment",sections:[{title:"Informational Tools",links:[{name:"Astronomy.tools",href:"https://astronomy.tools/",desc:"Extremely useful calculator for numerous photographic measurements like pixel scale"},{name:"DXOMark",href:"https://www.dxomark.com/",desc:"Comprehensive testing of lenses and camera equipment"},{name:"Handprint Optics",href:"https://www.handprint.com/ASTRO/ae4.html",desc:"One of the best resources for understanding optical aberrations"}]},{title:"Stores",links:[{name:"Cloudy Nights",href:"https://www.cloudynights.com/",desc:"Biggest astronomy forum and best place to buy used equipment often for half price"},{name:"Agena Astro",href:"https://agenaastro.com/",desc:"The best spot to buy new astronomy equipment"},{name:"Spencer's Photo",href:"https://www.spencerscamera.com/",desc:"Utah company that modifies cameras to let them see Hydrogen alpha"}]}]},{title:"Processing",sections:[{title:"Free",links:[{name:"Siril",href:"https://siril.org/",desc:"Best open source software for stacking/processing astrophotos"},{name:"StarNet",href:"https://starnetastro.com/",desc:"Open source ML models for denoising and star removal"},{name:"Sequator",href:"https://sites.google.com/view/sequator/",desc:"Stacking program meant more for landscape astrophotography"},{name:"StarryNightScapeStacker",href:"https://sites.google.com/site/starrylandscapestacker/home",desc:"Another great landscape stacking tool"}]},{title:"Paid",links:[{name:"Pixinsight",href:"https://pixinsight.com/",desc:"Worth a whole other talk, the most advanced suite of processing tools"}]}]}];Ee(i,{align:"center",max:1240,children:(e,n)=>{var r=Bg(),s=pt(Re(r),2);Jn(s,5,()=>t,a=>a.title,(a,o)=>{var l=Og(),c=st(l),u=st(c),d=pt(c,2);Jn(d,1,()=>K(o).sections,h=>h.title,(h,p)=>{var _=Fg(),g=Re(_),m=st(g),f=pt(g,2);Jn(f,5,()=>K(p).links,w=>w.href,(w,S)=>{var E=Ug(),L=st(E);th(L,{get href(){return K(S).href},get title(){return K(S).desc},children:(P,T)=>{var D=op();oe(()=>pe(D,K(S).name)),Ft(P,D)},$$slots:{default:!0}}),Ft(w,E)}),oe(()=>pe(m,K(p).title)),Ft(h,_)}),oe(()=>pe(u,K(o).title)),Ft(a,l)}),Ft(e,r)},$$slots:{default:!0}})}const Hg="/astro-deep-dive/assets/thank_you-CgwvIRx3.png";var Vg=Gt('<figure class="photo svelte-13u8bsn"><img alt="Thank you" class="svelte-13u8bsn"/></figure>');function Gg(i){Ee(i,{align:"center",max:1600,children:(t,e)=>{var n=Vg(),r=st(n);oe(()=>Tt(r,"src",Hg)),Ft(t,n)},$$slots:{default:!0}})}const nh=[{id:"cover",title:"Title",component:_m,hideInMenu:!0},{id:"intro",title:"Under a dark sky",chapter:"Welcome",component:Sm},{id:"no-telescope",title:"You don't need a telescope",chapter:"Welcome",component:Mm},{id:"white-pine",title:"White Pine",chapter:"Welcome",component:Am},{id:"acquisition",title:"Acquisition",chapter:"Acquisition",component:Pm},{id:"stacking",title:"Stacking",chapter:"Acquisition",component:km},{id:"stacking-diagram",title:"How stacking works",chapter:"Acquisition",component:Fm},{id:"shot-noise",title:"Shot noise",chapter:"Acquisition",component:$m},{id:"snr-stacking",title:"SNR adds over time",chapter:"Acquisition",component:Km},{id:"example-stacking",title:"Example of Stacking",chapter:"Acquisition",component:ng},{id:"storage",title:"Storage",chapter:"Camera Hardware",component:rg},{id:"bit-depth",title:"Bit depth",chapter:"Camera Hardware",component:lg},{id:"iso",title:"ISO",chapter:"Camera Hardware",component:ug},{id:"calibration-frames",title:"Calibration Frames",chapter:"Calibration",component:gg},{id:"raw-corrected",title:"Raw → corrected",chapter:"Calibration",component:yg},{id:"optics",title:"Optics",chapter:"Optics",component:Mg},{id:"star-trails",title:"Star trails",chapter:"Optics",component:Rg},{id:"acquisition-gear",title:"Acquisition",chapter:"In the Field",component:Lg},{id:"tracking",title:"Tracking",chapter:"In the Field",component:Ng},{id:"links",title:"Useful Links",chapter:"Resources",component:zg},{id:"thank-you",title:"Thank You",component:Gg,hideInMenu:!0}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="169",Wg=0,qc=1,qg=2,ih=1,$g=2,Wn=3,Ti=0,qe=1,$n=2,Si=0,Lr=1,el=2,$c=3,Xc=4,Xg=5,Hi=100,Yg=101,jg=102,Kg=103,Zg=104,Jg=200,Qg=201,tv=202,ev=203,nl=204,il=205,nv=206,iv=207,rv=208,sv=209,av=210,ov=211,lv=212,cv=213,uv=214,rl=0,sl=1,al=2,Hr=3,ol=4,ll=5,cl=6,ul=7,rh=0,dv=1,hv=2,bi=0,fv=1,pv=2,mv=3,gv=4,vv=5,_v=6,xv=7,sh=300,Vr=301,Gr=302,dl=303,hl=304,za=306,fl=1e3,Xi=1001,pl=1002,un=1003,yv=1004,Us=1005,_n=1006,ao=1007,Yi=1008,ti=1009,ah=1010,oh=1011,gs=1012,oc=1013,er=1014,jn=1015,Ms=1016,lc=1017,cc=1018,Wr=1020,lh=35902,ch=1021,uh=1022,En=1023,dh=1024,hh=1025,Ir=1026,qr=1027,fh=1028,uc=1029,ph=1030,dc=1031,hc=1033,da=33776,ha=33777,fa=33778,pa=33779,ml=35840,gl=35841,vl=35842,_l=35843,xl=36196,yl=37492,Sl=37496,bl=37808,El=37809,Ml=37810,wl=37811,Al=37812,Tl=37813,Rl=37814,Cl=37815,Pl=37816,Ll=37817,Il=37818,Dl=37819,kl=37820,Nl=37821,ma=36492,Ul=36494,Fl=36495,mh=36283,Ol=36284,Bl=36285,zl=36286,Sv=3200,bv=3201,Ev=0,Mv=1,pi="",vn="srgb",Ri="srgb-linear",fc="display-p3",Ha="display-p3-linear",Ta="linear",fe="srgb",Ra="rec709",Ca="p3",dr=7680,Yc=519,wv=512,Av=513,Tv=514,gh=515,Rv=516,Cv=517,Pv=518,Lv=519,jc=35044,Kc="300 es",Kn=2e3,Pa=2001;class jr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oo=Math.PI/180,Hl=180/Math.PI;function ws(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function Iv(i,t){return(i%t+t)%t}function lo(i,t,e){return(1-e)*i+e*t}function es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class he{constructor(t=0,e=0){he.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,r,s,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],_=n[8],g=r[0],m=r[3],f=r[6],w=r[1],S=r[4],E=r[7],L=r[2],P=r[5],T=r[8];return s[0]=a*g+o*w+l*L,s[3]=a*m+o*S+l*P,s[6]=a*f+o*E+l*T,s[1]=c*g+u*w+d*L,s[4]=c*m+u*S+d*P,s[7]=c*f+u*E+d*T,s[2]=h*g+p*w+_*L,s[5]=h*m+p*S+_*P,s[8]=h*f+p*E+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,_=e*d+n*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(r*c-u*n)*g,t[2]=(o*n-r*a)*g,t[3]=h*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Xt;function vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dv(){const i=vs("canvas");return i.style.display="block",i}const Zc={};function ga(i){i in Zc||(Zc[i]=!0,console.warn(i))}function kv(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Nv(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uv(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jc=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qc=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Ri]:{transfer:Ta,primaries:Ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[vn]:{transfer:fe,primaries:Ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ha]:{transfer:Ta,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Qc),fromReference:i=>i.applyMatrix3(Jc)},[fc]:{transfer:fe,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qc),fromReference:i=>i.applyMatrix3(Jc).convertLinearToSRGB()}},Fv=new Set([Ri,Ha]),ce={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ns[t].toReference,r=ns[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ns[i].primaries},getTransfer:function(i){return i===pi?Ta:ns[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ns[t].luminanceCoefficients)}};function Dr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function uo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hr;class Ov{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hr===void 0&&(hr=vs("canvas")),hr.width=t.width,hr.height=t.height;const n=hr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Dr(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dr(e[n]/255)*255):e[n]=Dr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bv=0;class _h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ho(r[a].image)):s.push(ho(r[a]))}else s=ho(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ov.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zv=0;class $e extends jr{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=Xi,r=Xi,s=_n,a=Yi,o=En,l=ti,c=$e.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=ws(),this.name="",this.source=new _h(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fl:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fl:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=sh;$e.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,r=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,E=(p+1)/2,L=(f+1)/2,P=(u+h)/4,T=(d+g)/4,D=(_+m)/4;return S>E&&S>L?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=P/n,s=T/n):E>L?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=P/r,s=D/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=T/s,r=D/s),this.set(n,r,s,e),this}let w=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(d-g)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hv extends jr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new $e(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _h(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends Hv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xh extends $e{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vv extends $e{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==h||c!==p||u!==_){let m=1-o;const f=l*h+c*p+u*_+d*g,w=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const L=Math.sqrt(S),P=Math.atan2(L,f*w);m=Math.sin(m*P)/L,o=Math.sin(o*P)/L}const E=o*w;if(l=l*m+h*E,c=c*m+p*E,u=u*m+_*E,d=d*m+g*E,m===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+u*d+l*p-c*h,t[e+1]=l*_+u*h+c*d-o*p,t[e+2]=c*_+u*p+o*h-l*d,t[e+3]=u*_-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),h=l(n/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new G,tu=new As;class Ts{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Os.subVectors(this.max,is),fr.subVectors(t.a,is),pr.subVectors(t.b,is),mr.subVectors(t.c,is),si.subVectors(pr,fr),ai.subVectors(mr,pr),Di.subVectors(fr,mr);let e=[0,-si.z,si.y,0,-ai.z,ai.y,0,-Di.z,Di.y,si.z,0,-si.x,ai.z,0,-ai.x,Di.z,0,-Di.x,-si.y,si.x,0,-ai.y,ai.x,0,-Di.y,Di.x,0];return!po(e,fr,pr,mr,Os)||(e=[1,0,0,0,1,0,0,0,1],!po(e,fr,pr,mr,Os))?!1:(Bs.crossVectors(si,ai),e=[Bs.x,Bs.y,Bs.z],po(e,fr,pr,mr,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new G,new G,new G,new G,new G,new G,new G,new G],pn=new G,Fs=new Ts,fr=new G,pr=new G,mr=new G,si=new G,ai=new G,Di=new G,is=new G,Os=new G,Bs=new G,ki=new G;function po(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ki.fromArray(i,s);const o=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gv=new Ts,rs=new G,mo=new G;class Va{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gv.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);const e=rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(rs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(mo)),this.expandByPoint(rs.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new G,go=new G,zs=new G,oi=new G,vo=new G,Hs=new G,_o=new G;class yh{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){go.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(go);const s=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=oi.dot(this.direction),l=-oi.dot(zs),c=oi.lengthSq(),u=Math.abs(1-a*a);let d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(go).addScaledVector(zs,h),p}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),r=Bn.dot(Bn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,r,s){vo.subVectors(e,t),Hs.subVectors(n,t),_o.crossVectors(vo,Hs);let a=this.direction.dot(_o),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);const l=o*this.direction.dot(Hs.crossVectors(oi,Hs));if(l<0)return null;const c=o*this.direction.dot(vo.cross(oi));if(c<0||l+c>a)return null;const u=-o*oi.dot(_o);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,r,s,a,o,l,c,u,d,h,p,_,g,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,d,h,p,_,g,m)}set(t,e,n,r,s,a,o,l,c,u,d,h,p,_,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/gr.setFromMatrixColumn(t,0).length(),s=1/gr.setFromMatrixColumn(t,1).length(),a=1/gr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=a*u,p=a*d,_=o*u,g=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=h-g*c,e[9]=-o*l,e[2]=g-h*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,p=l*d,_=c*u,g=c*d;e[0]=h+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=g+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,p=l*d,_=c*u,g=c*d;e[0]=h-g*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=g-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,p=a*d,_=o*u,g=o*d;e[0]=l*u,e[4]=_*c-p,e[8]=h*c+g,e[1]=l*d,e[5]=g*c+h,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-h*d,e[8]=_*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+_,e[10]=h-g*d}else if(t.order==="XZY"){const h=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+g,e[5]=a*u,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*u,e[10]=g*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wv,t,qv)}lookAt(t,e,n){const r=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),li.crossVectors(n,tn),li.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),li.crossVectors(n,tn)),li.normalize(),Vs.crossVectors(tn,li),r[0]=li.x,r[4]=Vs.x,r[8]=tn.x,r[1]=li.y,r[5]=Vs.y,r[9]=tn.y,r[2]=li.z,r[6]=Vs.z,r[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],w=n[3],S=n[7],E=n[11],L=n[15],P=r[0],T=r[4],D=r[8],V=r[12],v=r[1],x=r[5],N=r[9],B=r[13],W=r[2],j=r[6],z=r[10],J=r[14],q=r[3],ct=r[7],at=r[11],vt=r[15];return s[0]=a*P+o*v+l*W+c*q,s[4]=a*T+o*x+l*j+c*ct,s[8]=a*D+o*N+l*z+c*at,s[12]=a*V+o*B+l*J+c*vt,s[1]=u*P+d*v+h*W+p*q,s[5]=u*T+d*x+h*j+p*ct,s[9]=u*D+d*N+h*z+p*at,s[13]=u*V+d*B+h*J+p*vt,s[2]=_*P+g*v+m*W+f*q,s[6]=_*T+g*x+m*j+f*ct,s[10]=_*D+g*N+m*z+f*at,s[14]=_*V+g*B+m*J+f*vt,s[3]=w*P+S*v+E*W+L*q,s[7]=w*T+S*x+E*j+L*ct,s[11]=w*D+S*N+E*z+L*at,s[15]=w*V+S*B+E*J+L*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+s*l*d-r*c*d-s*o*h+n*c*h+r*o*p-n*l*p)+g*(+e*l*p-e*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+e*c*d-e*o*p-s*a*d+n*a*p+s*o*u-n*c*u)+f*(-r*o*u-e*l*d+e*o*h+r*a*d-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],w=d*m*c-g*h*c+g*l*p-o*m*p-d*l*f+o*h*f,S=_*h*c-u*m*c-_*l*p+a*m*p+u*l*f-a*h*f,E=u*g*c-_*d*c+_*o*p-a*g*p-u*o*f+a*d*f,L=_*d*l-u*g*l-_*o*h+a*g*h+u*o*m-a*d*m,P=e*w+n*S+r*E+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=w*T,t[1]=(g*h*s-d*m*s-g*r*p+n*m*p+d*r*f-n*h*f)*T,t[2]=(o*m*s-g*l*s+g*r*c-n*m*c-o*r*f+n*l*f)*T,t[3]=(d*l*s-o*h*s-d*r*c+n*h*c+o*r*p-n*l*p)*T,t[4]=S*T,t[5]=(u*m*s-_*h*s+_*r*p-e*m*p-u*r*f+e*h*f)*T,t[6]=(_*l*s-a*m*s-_*r*c+e*m*c+a*r*f-e*l*f)*T,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*p+e*l*p)*T,t[8]=E*T,t[9]=(_*d*s-u*g*s-_*n*p+e*g*p+u*n*f-e*d*f)*T,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*f+e*o*f)*T,t[11]=(u*o*s-a*d*s-u*n*c+e*d*c+a*n*p-e*o*p)*T,t[12]=L*T,t[13]=(u*g*r-_*d*r+_*n*h-e*g*h-u*n*m+e*d*m)*T,t[14]=(_*o*r-a*g*r-_*n*l+e*g*l+a*n*m-e*o*m)*T,t[15]=(a*d*r-u*o*r+u*n*l-e*d*l-a*n*h+e*o*h)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,_=s*d,g=a*u,m=a*d,f=o*d,w=l*c,S=l*u,E=l*d,L=n.x,P=n.y,T=n.z;return r[0]=(1-(g+f))*L,r[1]=(p+E)*L,r[2]=(_-S)*L,r[3]=0,r[4]=(p-E)*P,r[5]=(1-(h+f))*P,r[6]=(m+w)*P,r[7]=0,r[8]=(_+S)*T,r[9]=(m-w)*T,r[10]=(1-(h+g))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=gr.set(r[0],r[1],r[2]).length();const a=gr.set(r[4],r[5],r[6]).length(),o=gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],mn.copy(this);const c=1/s,u=1/a,d=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,e.setFromRotationMatrix(mn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Kn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),h=(n+r)/(n-r);let p,_;if(o===Kn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Pa)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Kn){const l=this.elements,c=1/(e-t),u=1/(n-r),d=1/(a-s),h=(e+t)*c,p=(n+r)*u;let _,g;if(o===Kn)_=(a+s)*d,g=-2*d;else if(o===Pa)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gr=new G,mn=new be,Wv=new G(0,0,0),qv=new G(1,1,1),li=new G,Vs=new G,tn=new G,eu=new be,nu=new As;class ei{constructor(t=0,e=0,n=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nu.setFromEuler(this),this.setFromQuaternion(nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $v=0;const iu=new G,vr=new As,zn=new be,Gs=new G,ss=new G,Xv=new G,Yv=new As,ru=new G(1,0,0),su=new G(0,1,0),au=new G(0,0,1),ou={type:"added"},jv={type:"removed"},_r={type:"childadded",child:null},xo={type:"childremoved",child:null};class Je extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new G,e=new ei,n=new As,r=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new Xt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(su,t)}rotateZ(t){return this.rotateOnAxis(au,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(su,t)}translateZ(t){return this.translateOnAxis(au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(ss,Gs,this.up):zn.lookAt(Gs,ss,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(zn),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ou),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jv),xo.child=t,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ou),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,Xv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Yv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Je.DEFAULT_UP=new G(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new G,Hn=new G,yo=new G,Vn=new G,xr=new G,yr=new G,lu=new G,So=new G,bo=new G,Eo=new G,Mo=new Se,wo=new Se,Ao=new Se;class xn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),gn.subVectors(t,e),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){gn.subVectors(r,e),Hn.subVectors(n,e),yo.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(Hn),l=gn.dot(yo),c=Hn.dot(Hn),u=Hn.dot(yo),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Mo.setScalar(0),wo.setScalar(0),Ao.setScalar(0),Mo.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),Ao.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Mo,s.x),a.addScaledVector(wo,s.y),a.addScaledVector(Ao,s.z),a}static isFrontFacing(t,e,n,r){return gn.subVectors(n,e),Hn.subVectors(t,e),gn.cross(Hn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;xr.subVectors(r,n),yr.subVectors(s,n),So.subVectors(t,n);const l=xr.dot(So),c=yr.dot(So);if(l<=0&&c<=0)return e.copy(n);bo.subVectors(t,r);const u=xr.dot(bo),d=yr.dot(bo);if(u>=0&&d<=u)return e.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(xr,a);Eo.subVectors(t,s);const p=xr.dot(Eo),_=yr.dot(Eo);if(_>=0&&p<=_)return e.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(yr,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return lu.subVectors(s,r),o=(d-u)/(d-u+(p-_)),e.copy(r).addScaledVector(lu,o);const f=1/(m+g+h);return a=g*f,o=h*f,e.copy(n).addScaledVector(xr,a).addScaledVector(yr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function To(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ue{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ce.workingColorSpace){if(t=Iv(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=To(a,s,t+1/3),this.g=To(a,s,t),this.b=To(a,s,t-1/3)}return ce.toWorkingColorSpace(this,r),this}setStyle(t,e=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){const n=bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return ce.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ze(Be.r*255,0,255))*65536+Math.round(Ze(Be.g*255,0,255))*256+Math.round(Ze(Be.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,r=Be.g,s=Be.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=vn){ce.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,r=Be.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Ws);const n=lo(ci.h,Ws.h,e),r=lo(ci.s,Ws.s,e),s=lo(ci.l,Ws.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new ue;ue.NAMES=bh;let Kv=0;class Rs extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Lr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Eh extends Rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new G,qs=new he;class Dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}}class Mh extends Dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wh extends Dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class rn extends Dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zv=0;const on=new be,Ro=new Je,Sr=new G,en=new Ts,as=new Ts,Ie=new G;class Fn extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?wh:Mh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ro.lookAt(t),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(en.min,as.min),en.expandByPoint(Ie),Ie.addVectors(en.max,as.max),en.expandByPoint(Ie)):(en.expandByPoint(as.min),en.expandByPoint(as.max))}en.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ie.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ie));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ie.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(t,c),Ie.add(Sr)),r=Math.max(r,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new G,l[D]=new G;const c=new G,u=new G,d=new G,h=new he,p=new he,_=new he,g=new G,m=new G;function f(D,V,v){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,V),d.fromBufferAttribute(n,v),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,V),_.fromBufferAttribute(s,v),u.sub(c),d.sub(c),p.sub(h),_.sub(h);const x=1/(p.x*_.y-_.x*p.y);isFinite(x)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(x),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(x),o[D].add(g),o[V].add(g),o[v].add(g),l[D].add(m),l[V].add(m),l[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,V=w.length;D<V;++D){const v=w[D],x=v.start,N=v.count;for(let B=x,W=x+N;B<W;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new G,E=new G,L=new G,P=new G;function T(D){L.fromBufferAttribute(r,D),P.copy(L);const V=o[D];S.copy(V),S.sub(L.multiplyScalar(L.dot(V))).normalize(),E.crossVectors(P,V);const x=E.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,x)}for(let D=0,V=w.length;D<V;++D){const v=w[D],x=v.start,N=v.count;for(let B=x,W=x+N;B<W;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(t)for(let h=0,p=t.count;h<p;h+=3){const _=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new Dn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new be,Ni=new yh,$s=new Va,uu=new G,Xs=new G,Ys=new G,js=new G,Co=new G,Ks=new G,du=new G,Zs=new G;class Ln extends Je{constructor(t=new Fn,e=new Eh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ks.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Co.fromBufferAttribute(d,t),a?Ks.addScaledVector(Co,u):Ks.addScaledVector(Co.sub(e),u))}e.add(Ks)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),Ni.copy(t.ray).recast(t.near),!($s.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere($s,uu)===null||Ni.origin.distanceToSquared(uu)>(t.far-t.near)**2))&&(cu.copy(s).invert(),Ni.copy(t.ray).applyMatrix4(cu),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=a[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,L=S;E<L;E+=3){const P=o.getX(E),T=o.getX(E+1),D=o.getX(E+2);r=Js(this,f,t,n,c,u,d,P,T,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const w=o.getX(m),S=o.getX(m+1),E=o.getX(m+2);r=Js(this,a,t,n,c,u,d,w,S,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=a[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,L=S;E<L;E+=3){const P=E,T=E+1,D=E+2;r=Js(this,f,t,n,c,u,d,P,T,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const w=m,S=m+1,E=m+2;r=Js(this,a,t,n,c,u,d,w,S,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Jv(i,t,e,n,r,s,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Ti,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:i}}function Js(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Xs),i.getVertexPosition(l,Ys),i.getVertexPosition(c,js);const u=Jv(i,t,e,n,Xs,Ys,js,du);if(u){const d=new G;xn.getBarycoord(du,Xs,Ys,js,d),r&&(u.uv=xn.getInterpolatedAttribute(r,o,l,c,d,new he)),s&&(u.uv1=xn.getInterpolatedAttribute(s,o,l,c,d,new he)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,l,c,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};xn.getNormal(Xs,Ys,js,h.normal),u.face=h,u.barycoord=d}return u}class Cs extends Fn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(d,2));function _(g,m,f,w,S,E,L,P,T,D,V){const v=E/T,x=L/D,N=E/2,B=L/2,W=P/2,j=T+1,z=D+1;let J=0,q=0;const ct=new G;for(let at=0;at<z;at++){const vt=at*x-B;for(let Yt=0;Yt<j;Yt++){const Ut=Yt*v-N;ct[g]=Ut*w,ct[m]=vt*S,ct[f]=W,c.push(ct.x,ct.y,ct.z),ct[g]=0,ct[m]=0,ct[f]=P>0?1:-1,u.push(ct.x,ct.y,ct.z),d.push(Yt/T),d.push(1-at/D),J+=1}}for(let at=0;at<D;at++)for(let vt=0;vt<T;vt++){const Yt=h+vt+j*at,Ut=h+vt+j*(at+1),Z=h+(vt+1)+j*(at+1),it=h+(vt+1)+j*at;l.push(Yt,Ut,it),l.push(Ut,Z,it),q+=6}o.addGroup(p,q,V),p+=q,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $r(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=$r(i[e]);for(const r in n)t[r]=n[r]}return t}function Qv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ah(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const t_={clone:$r,merge:Ge};var e_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e_,this.fragmentShader=n_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$r(t.uniforms),this.uniformsGroups=Qv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Th extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new G,hu=new he,fu=new he;class cn extends Th{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,hu,fu),e.subVectors(fu,hu)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oo*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const br=-90,Er=1;class i_ extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(br,Er,t,e);r.layers=this.layers,this.add(r);const s=new cn(br,Er,t,e);s.layers=this.layers,this.add(s);const a=new cn(br,Er,t,e);a.layers=this.layers,this.add(a);const o=new cn(br,Er,t,e);o.layers=this.layers,this.add(o);const l=new cn(br,Er,t,e);l.layers=this.layers,this.add(l);const c=new cn(br,Er,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Rh extends $e{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Vr,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class r_ extends nr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Rh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cs(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Si});s.uniforms.tEquirect.value=e;const a=new Ln(r,s),o=e.minFilter;return e.minFilter===Yi&&(e.minFilter=_n),new i_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Po=new G,s_=new G,a_=new Xt;class Bi{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Po.subVectors(n,e).cross(s_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Po),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||a_.getNormalMatrix(t),r=this.coplanarPoint(Po).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Va,Qs=new G;class Ch{constructor(t=new Bi,e=new Bi,n=new Bi,r=new Bi,s=new Bi,a=new Bi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],_=r[9],g=r[10],m=r[11],f=r[12],w=r[13],S=r[14],E=r[15];if(n[0].setComponents(l-s,h-c,m-p,E-f).normalize(),n[1].setComponents(l+s,h+c,m+p,E+f).normalize(),n[2].setComponents(l+a,h+u,m+_,E+w).normalize(),n[3].setComponents(l-a,h-u,m-_,E-w).normalize(),n[4].setComponents(l-o,h-d,m-g,E-S).normalize(),e===Kn)n[5].setComponents(l+o,h+d,m+g,E+S).normalize();else if(e===Pa)n[5].setComponents(o,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Qs.x=r.normal.x>0?t.max.x:t.min.x,Qs.y=r.normal.y>0?t.max.y:t.min.y,Qs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ph(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function o_(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],g=d[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const g=d[p];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ga extends Fn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=t/o,h=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const w=f*h-a;for(let S=0;S<c;S++){const E=S*d-s;_.push(E,-w,0),g.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const S=w+c*f,E=w+c*(f+1),L=w+1+c*(f+1),P=w+1+c*f;p.push(S,E,P),p.push(E,L,P)}this.setIndex(p),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}var l_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c_=`#ifdef USE_ALPHAHASH
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
#endif`,u_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p_=`#ifdef USE_AOMAP
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
#endif`,m_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g_=`#ifdef USE_BATCHING
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
#endif`,v_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,__=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S_=`#ifdef USE_IRIDESCENCE
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
#endif`,b_=`#ifdef USE_BUMPMAP
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
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,L_=`#define PI 3.141592653589793
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
} // validated`,I_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D_=`vec3 transformedNormal = objectNormal;
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
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",B_=`
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
}`,z_=`#ifdef USE_ENVMAP
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
#endif`,H_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j_=`#ifdef USE_GRADIENTMAP
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
}`,K_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q_=`uniform bool receiveShadow;
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
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,a0=`struct PhysicalMaterial {
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
}`,o0=`
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Ex=`#define LAMBERT
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
}`,Mx=`#define LAMBERT
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
}`,wx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Tx=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Ix=`#define STANDARD
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
}`,Dx=`#define TOON
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
}`,kx=`#define TOON
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
}`,Nx=`uniform float size;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Fx=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,Bx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:l_,alphahash_pars_fragment:c_,alphamap_fragment:u_,alphamap_pars_fragment:d_,alphatest_fragment:h_,alphatest_pars_fragment:f_,aomap_fragment:p_,aomap_pars_fragment:m_,batching_pars_vertex:g_,batching_vertex:v_,begin_vertex:__,beginnormal_vertex:x_,bsdfs:y_,iridescence_fragment:S_,bumpmap_pars_fragment:b_,clipping_planes_fragment:E_,clipping_planes_pars_fragment:M_,clipping_planes_pars_vertex:w_,clipping_planes_vertex:A_,color_fragment:T_,color_pars_fragment:R_,color_pars_vertex:C_,color_vertex:P_,common:L_,cube_uv_reflection_fragment:I_,defaultnormal_vertex:D_,displacementmap_pars_vertex:k_,displacementmap_vertex:N_,emissivemap_fragment:U_,emissivemap_pars_fragment:F_,colorspace_fragment:O_,colorspace_pars_fragment:B_,envmap_fragment:z_,envmap_common_pars_fragment:H_,envmap_pars_fragment:V_,envmap_pars_vertex:G_,envmap_physical_pars_fragment:t0,envmap_vertex:W_,fog_vertex:q_,fog_pars_vertex:$_,fog_fragment:X_,fog_pars_fragment:Y_,gradientmap_pars_fragment:j_,lightmap_pars_fragment:K_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:J_,lights_pars_begin:Q_,lights_toon_fragment:e0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:r0,lights_physical_fragment:s0,lights_physical_pars_fragment:a0,lights_fragment_begin:o0,lights_fragment_maps:l0,lights_fragment_end:c0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:d0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:f0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:g0,map_particle_pars_fragment:v0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:x0,morphinstance_vertex:y0,morphcolor_vertex:S0,morphnormal_vertex:b0,morphtarget_pars_vertex:E0,morphtarget_vertex:M0,normal_fragment_begin:w0,normal_fragment_maps:A0,normal_pars_fragment:T0,normal_pars_vertex:R0,normal_vertex:C0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:k0,opaque_fragment:N0,packing:U0,premultiplied_alpha_fragment:F0,project_vertex:O0,dithering_fragment:B0,dithering_pars_fragment:z0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:W0,shadowmap_vertex:q0,shadowmask_pars_fragment:$0,skinbase_vertex:X0,skinning_pars_vertex:Y0,skinning_vertex:j0,skinnormal_vertex:K0,specularmap_fragment:Z0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:tx,transmission_fragment:ex,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:rx,uv_vertex:sx,worldpos_vertex:ax,background_vert:ox,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:ux,cube_vert:dx,cube_frag:hx,depth_vert:fx,depth_frag:px,distanceRGBA_vert:mx,distanceRGBA_frag:gx,equirect_vert:vx,equirect_frag:_x,linedashed_vert:xx,linedashed_frag:yx,meshbasic_vert:Sx,meshbasic_frag:bx,meshlambert_vert:Ex,meshlambert_frag:Mx,meshmatcap_vert:wx,meshmatcap_frag:Ax,meshnormal_vert:Tx,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Lx,meshphysical_frag:Ix,meshtoon_vert:Dx,meshtoon_frag:kx,points_vert:Nx,points_frag:Ux,shadow_vert:Fx,shadow_frag:Ox,sprite_vert:Bx,sprite_frag:zx},ft={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ue(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ge([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ge([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new ue(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ge([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ge([ft.points,ft.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ge([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ge([ft.common,ft.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ge([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ge([ft.sprite,ft.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ge([ft.common,ft.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ge([ft.lights,ft.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Tn.physical={uniforms:Ge([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const ta={r:0,b:0,g:0},Fi=new ei,Hx=new be;function Vx(i,t,e,n,r,s,a){const o=new ue(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function _(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function g(w){let S=!1;const E=_(w);E===null?f(o,l):E&&E.isColor&&(f(E,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,S){const E=_(S);E&&(E.isCubeTexture||E.mapping===za)?(u===void 0&&(u=new Ln(new Cs(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:$r(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fi.copy(S.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Fi)),u.material.toneMapped=ce.getTransfer(E.colorSpace)!==fe,(d!==E||h!==E.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,p=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ln(new Ga(2,2),new Un({name:"BackgroundMaterial",uniforms:$r(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ce.getTransfer(E.colorSpace)!==fe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,S){w.getRGB(ta,Ah(i)),n.buffers.color.setClear(ta.r,ta.g,ta.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:g,addToRenderList:m}}function Gx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(v,x,N,B,W){let j=!1;const z=d(B,N,x);s!==z&&(s=z,c(s.object)),j=p(v,B,N,W),j&&_(v,B,N,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(v,x,N,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function d(v,x,N){const B=N.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let j=W[x.id];j===void 0&&(j={},W[x.id]=j);let z=j[B];return z===void 0&&(z=h(l()),j[B]=z),z}function h(v){const x=[],N=[],B=[];for(let W=0;W<e;W++)x[W]=0,N[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:N,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,x,N,B){const W=s.attributes,j=x.attributes;let z=0;const J=N.getAttributes();for(const q in J)if(J[q].location>=0){const at=W[q];let vt=j[q];if(vt===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(vt=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(vt=v.instanceColor)),at===void 0||at.attribute!==vt||vt&&at.data!==vt.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function _(v,x,N,B){const W={},j=x.attributes;let z=0;const J=N.getAttributes();for(const q in J)if(J[q].location>=0){let at=j[q];at===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(at=v.instanceColor));const vt={};vt.attribute=at,at&&at.data&&(vt.data=at.data),W[q]=vt,z++}s.attributes=W,s.attributesNum=z,s.index=B}function g(){const v=s.newAttributes;for(let x=0,N=v.length;x<N;x++)v[x]=0}function m(v){f(v,0)}function f(v,x){const N=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;N[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),W[v]!==x&&(i.vertexAttribDivisor(v,x),W[v]=x)}function w(){const v=s.newAttributes,x=s.enabledAttributes;for(let N=0,B=x.length;N<B;N++)x[N]!==v[N]&&(i.disableVertexAttribArray(N),x[N]=0)}function S(v,x,N,B,W,j,z){z===!0?i.vertexAttribIPointer(v,x,N,W,j):i.vertexAttribPointer(v,x,N,B,W,j)}function E(v,x,N,B){g();const W=B.attributes,j=N.getAttributes(),z=x.defaultAttributeValues;for(const J in j){const q=j[J];if(q.location>=0){let ct=W[J];if(ct===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){const at=ct.normalized,vt=ct.itemSize,Yt=t.get(ct);if(Yt===void 0)continue;const Ut=Yt.buffer,Z=Yt.type,it=Yt.bytesPerElement,_t=Z===i.INT||Z===i.UNSIGNED_INT||ct.gpuType===oc;if(ct.isInterleavedBufferAttribute){const dt=ct.data,It=dt.stride,Rt=ct.offset;if(dt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<q.locationSize;Wt++)f(q.location+Wt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Wt=0;Wt<q.locationSize;Wt++)m(q.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let Wt=0;Wt<q.locationSize;Wt++)S(q.location+Wt,vt/q.locationSize,Z,at,It*it,(Rt+vt/q.locationSize*Wt)*it,_t)}else{if(ct.isInstancedBufferAttribute){for(let dt=0;dt<q.locationSize;dt++)f(q.location+dt,ct.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let dt=0;dt<q.locationSize;dt++)m(q.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let dt=0;dt<q.locationSize;dt++)S(q.location+dt,vt/q.locationSize,Z,at,vt*it,vt/q.locationSize*dt*it,_t)}}else if(z!==void 0){const at=z[J];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(q.location,at);break;case 3:i.vertexAttrib3fv(q.location,at);break;case 4:i.vertexAttrib4fv(q.location,at);break;default:i.vertexAttrib1fv(q.location,at)}}}}w()}function L(){D();for(const v in n){const x=n[v];for(const N in x){const B=x[N];for(const W in B)u(B[W].object),delete B[W];delete x[N]}delete n[v]}}function P(v){if(n[v.id]===void 0)return;const x=n[v.id];for(const N in x){const B=x[N];for(const W in B)u(B[W].object),delete B[W];delete x[N]}delete n[v.id]}function T(v){for(const x in n){const N=n[x];if(N[v.id]===void 0)continue;const B=N[v.id];for(const W in B)u(B[W].object),delete B[W];delete N[v.id]}}function D(){V(),a=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:V,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:w}}function Wx(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];e.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];for(let g=0;g<h.length;g++)e.update(_,n,h[g])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function qx(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===Ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ti&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==jn&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:L,maxSamples:P}}function $x(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Bi,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||r;return r=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const w=s?0:n,S=w*4;let E=f.clippingState||null;l.value=E,E=u(_,h,S,p);for(let L=0;L!==S;++L)E[L]=e[L];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,E=p;S!==g;++S,E+=4)a.copy(d[S]).applyMatrix4(w,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Xx(i){let t=new WeakMap;function e(a,o){return o===dl?a.mapping=Vr:o===hl&&(a.mapping=Gr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===dl||o===hl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new r_(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Yx extends Th{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rr=4,pu=[.125,.215,.35,.446,.526,.582],Vi=20,Lo=new Yx,mu=new ue;let Io=null,Do=0,ko=0,No=!1;const zi=(1+Math.sqrt(5))/2,Mr=1/zi,gu=[new G(-zi,Mr,0),new G(zi,Mr,0),new G(-Mr,0,zi),new G(Mr,0,zi),new G(0,zi,-Mr),new G(0,zi,Mr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class vu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Io,Do,ko),this._renderer.xr.enabled=No,t.scissorTest=!1,ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vr||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ms,format:En,colorSpace:Ri,depthBuffer:!1},r=_u(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jx(s)),this._blurMaterial=Kx(s,t,e)}return r}_compileMaterial(t){const e=new Ln(this._lodPlanes[0],t);this._renderer.compile(e,Lo)}_sceneToCubeUV(t,e,n,r){const o=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(mu),u.toneMapping=bi,u.autoClear=!1;const p=new Eh({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new Ln(new Cs,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(mu),g=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):w===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;ea(r,w*S,f>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Vr||t.mapping===Gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ln(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ea(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gu[(r-s-1)%gu.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ln(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Vi;m>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const f=[];let w=0;for(let T=0;T<Vi;++T){const D=T/g,V=Math.exp(-D*D/2);f.push(V),T===0?w+=V:T<m&&(w+=2*V)}for(let T=0;T<f.length;T++)f[T]=f[T]/w;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-n;const E=this._sizeLods[r],L=3*E*(r>S-Rr?r-S+Rr:0),P=4*(this._cubeSize-E);ea(e,L,P,3*E,2*E),l.setRenderTarget(e),l.render(d,Lo)}}function jx(i){const t=[],e=[],n=[];let r=i;const s=i-Rr+1+pu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Rr?l=pu[a-i+Rr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,g=3,m=2,f=1,w=new Float32Array(g*_*p),S=new Float32Array(m*_*p),E=new Float32Array(f*_*p);for(let P=0;P<p;P++){const T=P%3*2/3-1,D=P>2?0:-1,V=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];w.set(V,g*_*P),S.set(h,m*_*P);const v=[P,P,P,P,P,P];E.set(v,f*_*P)}const L=new Fn;L.setAttribute("position",new Dn(w,g)),L.setAttribute("uv",new Dn(S,m)),L.setAttribute("faceIndex",new Dn(E,f)),t.push(L),r>Rr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _u(i,t,e){const n=new nr(i,t,e);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Kx(i,t,e){const n=new Float32Array(Vi),r=new G(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function xu(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function yu(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function Zx(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===dl||l===hl,u=l===Vr||l===Gr;if(c||u){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new vu(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new vu(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Jx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ga("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qx(i,t,e,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)t.update(h[_],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const w=p.array;g=p.version;for(let S=0,E=w.length;S<E;S+=3){const L=w[S+0],P=w[S+1],T=w[S+2];h.push(L,P,P,T,T,L)}}else if(_!==void 0){const w=_.array;g=_.version;for(let S=0,E=w.length/3-1;S<E;S+=3){const L=S+0,P=S+1,T=S+2;h.push(L,P,P,T,T,L)}}else return;const m=new(vh(h)?wh:Mh)(h,1);m.version=g;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ty(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){i.drawElements(n,p,s,h*a),e.update(p,n,1)}function c(h,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,h*a,_),e.update(p,n,_))}function u(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,n,1)}function d(h,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,g,0,_);let f=0;for(let w=0;w<_;w++)f+=p[w];for(let w=0;w<g.length;w++)e.update(f,n,g[w])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ey(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ny(i,t,e){const n=new WeakMap,r=new Se;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let v=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let L=o.attributes.position.count*E,P=1;L>t.maxTextureSize&&(P=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*P*4*d),D=new xh(T,L,P,d);D.type=jn,D.needsUpdate=!0;const V=E*4;for(let x=0;x<d;x++){const N=f[x],B=w[x],W=S[x],j=L*P*4*x;for(let z=0;z<N.count;z++){const J=z*V;_===!0&&(r.fromBufferAttribute(N,z),T[j+J+0]=r.x,T[j+J+1]=r.y,T[j+J+2]=r.z,T[j+J+3]=0),g===!0&&(r.fromBufferAttribute(B,z),T[j+J+4]=r.x,T[j+J+5]=r.y,T[j+J+6]=r.z,T[j+J+7]=0),m===!0&&(r.fromBufferAttribute(W,z),T[j+J+8]=r.x,T[j+J+9]=r.y,T[j+J+10]=r.z,T[j+J+11]=W.itemSize===4?r.w:1)}}h={count:d,texture:D,size:new he(L,P)},n.set(o,h),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function iy(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Lh extends $e{constructor(t,e,n,r,s,a,o,l,c,u=Ir){if(u!==Ir&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ir&&(n=er),n===void 0&&u===qr&&(n=Wr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ih=new $e,Su=new Lh(1,1),Dh=new xh,kh=new Vv,Nh=new Rh,bu=[],Eu=[],Mu=new Float32Array(16),wu=new Float32Array(9),Au=new Float32Array(4);function Kr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=bu[r];if(s===void 0&&(s=new Float32Array(r),bu[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wa(i,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ry(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function ay(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function oy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function ly(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),Pe(e,n)}}function cy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;wu.set(n),i.uniformMatrix3fv(this.addr,!1,wu),Pe(e,n)}}function uy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Mu.set(n),i.uniformMatrix4fv(this.addr,!1,Mu),Pe(e,n)}}function dy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function fy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function py(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function my(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function vy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function _y(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function xy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Su.compareFunction=gh,s=Su):s=Ih,e.setTexture2D(t||s,r)}function yy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||kh,r)}function Sy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Nh,r)}function by(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Dh,r)}function Ey(i){switch(i){case 5126:return ry;case 35664:return sy;case 35665:return ay;case 35666:return oy;case 35674:return ly;case 35675:return cy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return hy;case 35668:case 35672:return fy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return vy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return by}}function My(i,t){i.uniform1fv(this.addr,t)}function wy(i,t){const e=Kr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ay(i,t){const e=Kr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ty(i,t){const e=Kr(t,this.size,4);i.uniform4fv(this.addr,e)}function Ry(i,t){const e=Kr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cy(i,t){const e=Kr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Py(i,t){const e=Kr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ly(i,t){i.uniform1iv(this.addr,t)}function Iy(i,t){i.uniform2iv(this.addr,t)}function Dy(i,t){i.uniform3iv(this.addr,t)}function ky(i,t){i.uniform4iv(this.addr,t)}function Ny(i,t){i.uniform1uiv(this.addr,t)}function Uy(i,t){i.uniform2uiv(this.addr,t)}function Fy(i,t){i.uniform3uiv(this.addr,t)}function Oy(i,t){i.uniform4uiv(this.addr,t)}function By(i,t,e){const n=this.cache,r=t.length,s=Wa(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ih,s[a])}function zy(i,t,e){const n=this.cache,r=t.length,s=Wa(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||kh,s[a])}function Hy(i,t,e){const n=this.cache,r=t.length,s=Wa(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Nh,s[a])}function Vy(i,t,e){const n=this.cache,r=t.length,s=Wa(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Dh,s[a])}function Gy(i){switch(i){case 5126:return My;case 35664:return wy;case 35665:return Ay;case 35666:return Ty;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Ly;case 35667:case 35671:return Iy;case 35668:case 35672:return Dy;case 35669:case 35673:return ky;case 5125:return Ny;case 36294:return Uy;case 36295:return Fy;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Vy}}class Wy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ey(e.type)}}class qy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gy(e.type)}}class $y{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Tu(i,t){i.seq.push(t),i.map[t.id]=t}function Xy(i,t,e){const n=i.name,r=n.length;for(Uo.lastIndex=0;;){const s=Uo.exec(n),a=Uo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Tu(e,c===void 0?new Wy(o,i,t):new qy(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new $y(o),Tu(e,d)),e=d}}}class va{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Xy(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ru(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Yy=37297;let jy=0;function Ky(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Zy(i){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(i);let n;switch(t===e?n="":t===Ca&&e===Ra?n="LinearDisplayP3ToLinearSRGB":t===Ra&&e===Ca&&(n="LinearSRGBToLinearDisplayP3"),i){case Ri:case Ha:return[n,"LinearTransferOETF"];case vn:case fc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Cu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Ky(i.getShaderSource(t),a)}else return r}function Jy(i,t){const e=Zy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qy(i,t){let e;switch(t){case fv:e="Linear";break;case pv:e="Reinhard";break;case mv:e="Cineon";break;case gv:e="ACESFilmic";break;case _v:e="AgX";break;case xv:e="Neutral";break;case vv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const na=new G;function tS(){ce.getLuminanceCoefficients(na);const i=na.x.toFixed(4),t=na.y.toFixed(4),e=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function nS(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iS(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function cs(i){return i!==""}function Pu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(i){return i.replace(rS,aS)}const sS=new Map;function aS(i,t){let e=$t[t];if(e===void 0){const n=sS.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vl(e)}const oS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(i){return i.replace(oS,lS)}function lS(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Du(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cS(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$g?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function uS(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vr:case Gr:t="ENVMAP_TYPE_CUBE";break;case za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dS(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gr:t="ENVMAP_MODE_REFRACTION";break}return t}function hS(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rh:t="ENVMAP_BLENDING_MULTIPLY";break;case dv:t="ENVMAP_BLENDING_MIX";break;case hv:t="ENVMAP_BLENDING_ADD";break}return t}function fS(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pS(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=cS(e),c=uS(e),u=dS(e),d=hS(e),h=fS(e),p=eS(e),_=nS(s),g=r.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(cs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(cs).join(`
`),f.length>0&&(f+=`
`)):(m=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),f=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?$t.tonemapping_pars_fragment:"",e.toneMapping!==bi?Qy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Jy("linearToOutputTexel",e.outputColorSpace),tS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),a=Vl(a),a=Pu(a,e),a=Lu(a,e),o=Vl(o),o=Pu(o,e),o=Lu(o,e),a=Iu(a),o=Iu(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=w+m+a,E=w+f+o,L=Ru(r,r.VERTEX_SHADER,S),P=Ru(r,r.FRAGMENT_SHADER,E);r.attachShader(g,L),r.attachShader(g,P),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(x){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),B=r.getShaderInfoLog(L).trim(),W=r.getShaderInfoLog(P).trim();let j=!0,z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,L,P);else{const J=Cu(r,L,"vertex"),q=Cu(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+N+`
`+J+`
`+q)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||W==="")&&(z=!1);z&&(x.diagnostics={runnable:j,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(L),r.deleteShader(P),D=new va(r,g),V=iS(r,g)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let V;this.getAttributes=function(){return V===void 0&&T(this),V};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(g,Yy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=P,this}let mS=0;class gS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vS(t),e.set(t,n)),n}}class vS{constructor(t){this.id=mS++,this.code=t,this.usedTimes=0}}function _S(i,t,e,n,r,s,a){const o=new Sh,l=new gS,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,x,N,B,W){const j=B.fog,z=W.geometry,J=v.isMeshStandardMaterial?B.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||J),ct=q&&q.mapping===za?q.image.height:null,at=g[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const vt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Yt=vt!==void 0?vt.length:0;let Ut=0;z.morphAttributes.position!==void 0&&(Ut=1),z.morphAttributes.normal!==void 0&&(Ut=2),z.morphAttributes.color!==void 0&&(Ut=3);let Z,it,_t,dt;if(at){const _e=Tn[at];Z=_e.vertexShader,it=_e.fragmentShader}else Z=v.vertexShader,it=v.fragmentShader,l.update(v),_t=l.getVertexShaderID(v),dt=l.getFragmentShaderID(v);const It=i.getRenderTarget(),Rt=W.isInstancedMesh===!0,Wt=W.isBatchedMesh===!0,se=!!v.map,jt=!!v.matcap,I=!!q,Le=!!v.aoMap,Kt=!!v.lightMap,qt=!!v.bumpMap,et=!!v.normalMap,wt=!!v.displacementMap,ut=!!v.emissiveMap,R=!!v.metalnessMap,y=!!v.roughnessMap,F=v.anisotropy>0,Y=v.clearcoat>0,tt=v.dispersion>0,$=v.iridescence>0,xt=v.sheen>0,lt=v.transmission>0,ht=F&&!!v.anisotropyMap,zt=Y&&!!v.clearcoatMap,rt=Y&&!!v.clearcoatNormalMap,yt=Y&&!!v.clearcoatRoughnessMap,Dt=$&&!!v.iridescenceMap,Ot=$&&!!v.iridescenceThicknessMap,Et=xt&&!!v.sheenColorMap,Jt=xt&&!!v.sheenRoughnessMap,Ht=!!v.specularMap,Qt=!!v.specularColorMap,k=!!v.specularIntensityMap,St=lt&&!!v.transmissionMap,X=lt&&!!v.thicknessMap,Q=!!v.gradientMap,gt=!!v.alphaMap,bt=v.alphaTest>0,te=!!v.alphaHash,ge=!!v.extensions;let ke=bi;v.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(ke=i.toneMapping);const ae={shaderID:at,shaderType:v.type,shaderName:v.name,vertexShader:Z,fragmentShader:it,defines:v.defines,customVertexShaderID:_t,customFragmentShaderID:dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Wt,batchingColor:Wt&&W._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&W.instanceColor!==null,instancingMorph:Rt&&W.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:It===null?i.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:Ri,alphaToCoverage:!!v.alphaToCoverage,map:se,matcap:jt,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:ct,aoMap:Le,lightMap:Kt,bumpMap:qt,normalMap:et,displacementMap:p&&wt,emissiveMap:ut,normalMapObjectSpace:et&&v.normalMapType===Mv,normalMapTangentSpace:et&&v.normalMapType===Ev,metalnessMap:R,roughnessMap:y,anisotropy:F,anisotropyMap:ht,clearcoat:Y,clearcoatMap:zt,clearcoatNormalMap:rt,clearcoatRoughnessMap:yt,dispersion:tt,iridescence:$,iridescenceMap:Dt,iridescenceThicknessMap:Ot,sheen:xt,sheenColorMap:Et,sheenRoughnessMap:Jt,specularMap:Ht,specularColorMap:Qt,specularIntensityMap:k,transmission:lt,transmissionMap:St,thicknessMap:X,gradientMap:Q,opaque:v.transparent===!1&&v.blending===Lr&&v.alphaToCoverage===!1,alphaMap:gt,alphaTest:bt,alphaHash:te,combine:v.combine,mapUv:se&&m(v.map.channel),aoMapUv:Le&&m(v.aoMap.channel),lightMapUv:Kt&&m(v.lightMap.channel),bumpMapUv:qt&&m(v.bumpMap.channel),normalMapUv:et&&m(v.normalMap.channel),displacementMapUv:wt&&m(v.displacementMap.channel),emissiveMapUv:ut&&m(v.emissiveMap.channel),metalnessMapUv:R&&m(v.metalnessMap.channel),roughnessMapUv:y&&m(v.roughnessMap.channel),anisotropyMapUv:ht&&m(v.anisotropyMap.channel),clearcoatMapUv:zt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&m(v.sheenRoughnessMap.channel),specularMapUv:Ht&&m(v.specularMap.channel),specularColorMapUv:Qt&&m(v.specularColorMap.channel),specularIntensityMapUv:k&&m(v.specularIntensityMap.channel),transmissionMapUv:St&&m(v.transmissionMap.channel),thicknessMapUv:X&&m(v.thicknessMap.channel),alphaMapUv:gt&&m(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(et||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(se||gt),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:Ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:se&&v.map.isVideoTexture===!0&&ce.getTransfer(v.map.colorSpace)===fe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$n,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function w(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)x.push(N),x.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(S(x,v),E(x,v),x.push(i.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function S(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function E(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),v.push(o.mask)}function L(v){const x=g[v.type];let N;if(x){const B=Tn[x];N=t_.clone(B.uniforms)}else N=v.uniforms;return N}function P(v,x){let N;for(let B=0,W=u.length;B<W;B++){const j=u[B];if(j.cacheKey===x){N=j,++N.usedTimes;break}}return N===void 0&&(N=new pS(i,x,v,s),u.push(N)),N}function T(v){if(--v.usedTimes===0){const x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function D(v){l.remove(v)}function V(){l.dispose()}return{getParameters:f,getProgramCacheKey:w,getUniforms:L,acquireProgram:P,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:V}}function xS(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function yS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ku(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nu(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,h,p,_,g,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),t++,f}function o(d,h,p,_,g,m){const f=a(d,h,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(d,h,p,_,g,m){const f=a(d,h,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function c(d,h){e.length>1&&e.sort(d||yS),n.length>1&&n.sort(h||ku),r.length>1&&r.sort(h||ku)}function u(){for(let d=t,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function SS(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Nu,i.set(n,[a])):r>=s.length?(a=new Nu,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bS(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new ue};break;case"SpotLight":e={position:new G,direction:new G,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function ES(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let MS=0;function wS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function AS(i){const t=new bS,e=ES(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,s=new be,a=new be;function o(c){let u=0,d=0,h=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,w=0,S=0,E=0,L=0,P=0,T=0;c.sort(wS);for(let V=0,v=c.length;V<v;V++){const x=c[V],N=x.color,B=x.intensity,W=x.distance,j=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)u+=N.r*B,d+=N.g*B,h+=N.b*B;else if(x.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(x.sh.coefficients[z],B);T++}else if(x.isDirectionalLight){const z=t.get(x);if(z.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const J=x.shadow,q=e.get(x);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=x.shadow.matrix,w++}n.directional[p]=z,p++}else if(x.isSpotLight){const z=t.get(x);z.position.setFromMatrixPosition(x.matrixWorld),z.color.copy(N).multiplyScalar(B),z.distance=W,z.coneCos=Math.cos(x.angle),z.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),z.decay=x.decay,n.spot[g]=z;const J=x.shadow;if(x.map&&(n.spotLightMap[L]=x.map,L++,J.updateMatrices(x),x.castShadow&&P++),n.spotLightMatrix[g]=J.matrix,x.castShadow){const q=e.get(x);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=j,E++}g++}else if(x.isRectAreaLight){const z=t.get(x);z.color.copy(N).multiplyScalar(B),z.halfWidth.set(x.width*.5,0,0),z.halfHeight.set(0,x.height*.5,0),n.rectArea[m]=z,m++}else if(x.isPointLight){const z=t.get(x);if(z.color.copy(x.color).multiplyScalar(x.intensity),z.distance=x.distance,z.decay=x.decay,x.castShadow){const J=x.shadow,q=e.get(x);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=x.shadow.matrix,S++}n.point[_]=z,_++}else if(x.isHemisphereLight){const z=t.get(x);z.skyColor.copy(x.color).multiplyScalar(B),z.groundColor.copy(x.groundColor).multiplyScalar(B),n.hemi[f]=z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==w||D.numPointShadows!==S||D.numSpotShadows!==E||D.numSpotMaps!==L||D.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=E+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,D.directionalLength=p,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=w,D.numPointShadows=S,D.numSpotShadows=E,D.numSpotMaps=L,D.numLightProbes=T,n.version=MS++)}function l(c,u){let d=0,h=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const S=c[f];if(S.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(S.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Uu(i){const t=new AS(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function TS(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Uu(i),t.set(r,[o])):s>=a.length?(o=new Uu(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class RS extends Rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CS extends Rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LS=`uniform sampler2D shadow_pass;
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
}`;function IS(i,t,e){let n=new Ch;const r=new he,s=new he,a=new Se,o=new RS({depthPacking:bv}),l=new CS,c={},u=e.maxTextureSize,d={[Ti]:qe,[qe]:Ti,[$n]:$n},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:PS,fragmentShader:LS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Fn;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ln(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let f=this.type;this.render=function(P,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const V=i.getRenderTarget(),v=i.getActiveCubeFace(),x=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Si),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==Wn&&this.type===Wn,W=f===Wn&&this.type!==Wn;for(let j=0,z=P.length;j<z;j++){const J=P[j],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ct=q.getFrameExtents();if(r.multiply(ct),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ct.x),r.x=s.x*ct.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ct.y),r.y=s.y*ct.y,q.mapSize.y=s.y)),q.map===null||B===!0||W===!0){const vt=this.type!==Wn?{minFilter:un,magFilter:un}:{};q.map!==null&&q.map.dispose(),q.map=new nr(r.x,r.y,vt),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const at=q.getViewportCount();for(let vt=0;vt<at;vt++){const Yt=q.getViewport(vt);a.set(s.x*Yt.x,s.y*Yt.y,s.x*Yt.z,s.y*Yt.w),N.viewport(a),q.updateMatrices(J,vt),n=q.getFrustum(),E(T,D,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===Wn&&w(q,D),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(V,v,x)};function w(P,T){const D=t.update(g);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new nr(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,D,h,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,D,p,g,null)}function S(P,T,D,V){let v=null;const x=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(x!==void 0)v=x;else if(v=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=v.uuid,B=T.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let j=W[B];j===void 0&&(j=v.clone(),W[B]=j,T.addEventListener("dispose",L)),v=j}if(v.visible=T.visible,v.wireframe=T.wireframe,V===Wn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=i.properties.get(v);N.light=D}return v}function E(P,T,D,V,v){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===Wn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const B=t.update(P),W=P.material;if(Array.isArray(W)){const j=B.groups;for(let z=0,J=j.length;z<J;z++){const q=j[z],ct=W[q.materialIndex];if(ct&&ct.visible){const at=S(P,ct,V,v);P.onBeforeShadow(i,P,T,D,B,at,q),i.renderBufferDirect(D,null,B,at,P,q),P.onAfterShadow(i,P,T,D,B,at,q)}}}else if(W.visible){const j=S(P,W,V,v);P.onBeforeShadow(i,P,T,D,B,j,null),i.renderBufferDirect(D,null,B,j,P,null),P.onAfterShadow(i,P,T,D,B,j,null)}}const N=P.children;for(let B=0,W=N.length;B<W;B++)E(N[B],T,D,V,v)}function L(P){P.target.removeEventListener("dispose",L);for(const D in c){const V=c[D],v=P.target.uuid;v in V&&(V[v].dispose(),delete V[v])}}}const DS={[rl]:sl,[al]:cl,[ol]:ul,[Hr]:ll,[sl]:rl,[cl]:al,[ul]:ol,[ll]:Hr};function kS(i){function t(){let k=!1;const St=new Se;let X=null;const Q=new Se(0,0,0,0);return{setMask:function(gt){X!==gt&&!k&&(i.colorMask(gt,gt,gt,gt),X=gt)},setLocked:function(gt){k=gt},setClear:function(gt,bt,te,ge,ke){ke===!0&&(gt*=ge,bt*=ge,te*=ge),St.set(gt,bt,te,ge),Q.equals(St)===!1&&(i.clearColor(gt,bt,te,ge),Q.copy(St))},reset:function(){k=!1,X=null,Q.set(-1,0,0,0)}}}function e(){let k=!1,St=!1,X=null,Q=null,gt=null;return{setReversed:function(bt){St=bt},setTest:function(bt){bt?_t(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(bt){X!==bt&&!k&&(i.depthMask(bt),X=bt)},setFunc:function(bt){if(St&&(bt=DS[bt]),Q!==bt){switch(bt){case rl:i.depthFunc(i.NEVER);break;case sl:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case Hr:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case ll:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=bt}},setLocked:function(bt){k=bt},setClear:function(bt){gt!==bt&&(i.clearDepth(bt),gt=bt)},reset:function(){k=!1,X=null,Q=null,gt=null}}}function n(){let k=!1,St=null,X=null,Q=null,gt=null,bt=null,te=null,ge=null,ke=null;return{setTest:function(ae){k||(ae?_t(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(ae){St!==ae&&!k&&(i.stencilMask(ae),St=ae)},setFunc:function(ae,_e,Xe){(X!==ae||Q!==_e||gt!==Xe)&&(i.stencilFunc(ae,_e,Xe),X=ae,Q=_e,gt=Xe)},setOp:function(ae,_e,Xe){(bt!==ae||te!==_e||ge!==Xe)&&(i.stencilOp(ae,_e,Xe),bt=ae,te=_e,ge=Xe)},setLocked:function(ae){k=ae},setClear:function(ae){ke!==ae&&(i.clearStencil(ae),ke=ae)},reset:function(){k=!1,St=null,X=null,Q=null,gt=null,bt=null,te=null,ge=null,ke=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,_=!1,g=null,m=null,f=null,w=null,S=null,E=null,L=null,P=new ue(0,0,0),T=0,D=!1,V=null,v=null,x=null,N=null,B=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,z=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=z>=1):J.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=z>=2);let q=null,ct={};const at=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Yt=new Se().fromArray(at),Ut=new Se().fromArray(vt);function Z(k,St,X,Q){const gt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(k,bt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<X;te++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(St+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return bt}const it={};it[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),_t(i.DEPTH_TEST),s.setFunc(Hr),Kt(!1),qt(qc),_t(i.CULL_FACE),I(Si);function _t(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function dt(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function It(k,St){return u[k]!==St?(i.bindFramebuffer(k,St),u[k]=St,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Rt(k,St){let X=h,Q=!1;if(k){X=d.get(St),X===void 0&&(X=[],d.set(St,X));const gt=k.textures;if(X.length!==gt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,te=gt.length;bt<te;bt++)X[bt]=i.COLOR_ATTACHMENT0+bt;X.length=gt.length,Q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Q=!0);Q&&i.drawBuffers(X)}function Wt(k){return p!==k?(i.useProgram(k),p=k,!0):!1}const se={[Hi]:i.FUNC_ADD,[Yg]:i.FUNC_SUBTRACT,[jg]:i.FUNC_REVERSE_SUBTRACT};se[Kg]=i.MIN,se[Zg]=i.MAX;const jt={[Jg]:i.ZERO,[Qg]:i.ONE,[tv]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[av]:i.SRC_ALPHA_SATURATE,[rv]:i.DST_COLOR,[nv]:i.DST_ALPHA,[ev]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[sv]:i.ONE_MINUS_DST_COLOR,[iv]:i.ONE_MINUS_DST_ALPHA,[ov]:i.CONSTANT_COLOR,[lv]:i.ONE_MINUS_CONSTANT_COLOR,[cv]:i.CONSTANT_ALPHA,[uv]:i.ONE_MINUS_CONSTANT_ALPHA};function I(k,St,X,Q,gt,bt,te,ge,ke,ae){if(k===Si){_===!0&&(dt(i.BLEND),_=!1);return}if(_===!1&&(_t(i.BLEND),_=!0),k!==Xg){if(k!==g||ae!==D){if((m!==Hi||S!==Hi)&&(i.blendEquation(i.FUNC_ADD),m=Hi,S=Hi),ae)switch(k){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}f=null,w=null,E=null,L=null,P.set(0,0,0),T=0,g=k,D=ae}return}gt=gt||St,bt=bt||X,te=te||Q,(St!==m||gt!==S)&&(i.blendEquationSeparate(se[St],se[gt]),m=St,S=gt),(X!==f||Q!==w||bt!==E||te!==L)&&(i.blendFuncSeparate(jt[X],jt[Q],jt[bt],jt[te]),f=X,w=Q,E=bt,L=te),(ge.equals(P)===!1||ke!==T)&&(i.blendColor(ge.r,ge.g,ge.b,ke),P.copy(ge),T=ke),g=k,D=!1}function Le(k,St){k.side===$n?dt(i.CULL_FACE):_t(i.CULL_FACE);let X=k.side===qe;St&&(X=!X),Kt(X),k.blending===Lr&&k.transparent===!1?I(Si):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const Q=k.stencilWrite;a.setTest(Q),Q&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),wt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(k){V!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),V=k)}function qt(k){k!==Wg?(_t(i.CULL_FACE),k!==v&&(k===qc?i.cullFace(i.BACK):k===qg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),v=k}function et(k){k!==x&&(j&&i.lineWidth(k),x=k)}function wt(k,St,X){k?(_t(i.POLYGON_OFFSET_FILL),(N!==St||B!==X)&&(i.polygonOffset(St,X),N=St,B=X)):dt(i.POLYGON_OFFSET_FILL)}function ut(k){k?_t(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function R(k){k===void 0&&(k=i.TEXTURE0+W-1),q!==k&&(i.activeTexture(k),q=k)}function y(k,St,X){X===void 0&&(q===null?X=i.TEXTURE0+W-1:X=q);let Q=ct[X];Q===void 0&&(Q={type:void 0,texture:void 0},ct[X]=Q),(Q.type!==k||Q.texture!==St)&&(q!==X&&(i.activeTexture(X),q=X),i.bindTexture(k,St||it[k]),Q.type=k,Q.texture=St)}function F(){const k=ct[q];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(k){Yt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Yt.copy(k))}function Et(k){Ut.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ut.copy(k))}function Jt(k,St){let X=l.get(St);X===void 0&&(X=new WeakMap,l.set(St,X));let Q=X.get(k);Q===void 0&&(Q=i.getUniformBlockIndex(St,k.name),X.set(k,Q))}function Ht(k,St){const Q=l.get(St).get(k);o.get(St)!==Q&&(i.uniformBlockBinding(St,Q,k.__bindingPointIndex),o.set(St,Q))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,ct={},u={},d=new WeakMap,h=[],p=null,_=!1,g=null,m=null,f=null,w=null,S=null,E=null,L=null,P=new ue(0,0,0),T=0,D=!1,V=null,v=null,x=null,N=null,B=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:_t,disable:dt,bindFramebuffer:It,drawBuffers:Rt,useProgram:Wt,setBlending:I,setMaterial:Le,setFlipSided:Kt,setCullFace:qt,setLineWidth:et,setPolygonOffset:wt,setScissorTest:ut,activeTexture:R,bindTexture:y,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:tt,texImage2D:yt,texImage3D:Dt,updateUBOMapping:Jt,uniformBlockBinding:Ht,texStorage2D:zt,texStorage3D:rt,texSubImage2D:$,texSubImage3D:xt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ht,scissor:Ot,viewport:Et,reset:Qt}}function Fu(i,t,e,n){const r=NS(n);switch(e){case ch:return i*t;case dh:return i*t;case hh:return i*t*2;case fh:return i*t/r.components*r.byteLength;case uc:return i*t/r.components*r.byteLength;case ph:return i*t*2/r.components*r.byteLength;case dc:return i*t*2/r.components*r.byteLength;case uh:return i*t*3/r.components*r.byteLength;case En:return i*t*4/r.components*r.byteLength;case hc:return i*t*4/r.components*r.byteLength;case da:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:case _l:return Math.max(i,16)*Math.max(t,8)/4;case ml:case vl:return Math.max(i,8)*Math.max(t,8)/2;case xl:case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ma:case Ul:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mh:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Bl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function NS(i){switch(i){case ti:case ah:return{byteLength:1,components:1};case gs:case oh:case Ms:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case er:case oc:case jn:return{byteLength:4,components:1};case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function US(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return p?new OffscreenCanvas(R,y):vs("canvas")}function g(R,y,F){let Y=1;const tt=ut(R);if((tt.width>F||tt.height>F)&&(Y=F/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Y*tt.width),xt=Math.floor(Y*tt.height);d===void 0&&(d=_($,xt));const lt=y?_($,xt):d;return lt.width=$,lt.height=xt,lt.getContext("2d").drawImage(R,0,0,$,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+xt+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==un&&R.minFilter!==_n}function f(R){i.generateMipmap(R)}function w(R,y,F,Y,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=y;if(y===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),y===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),y===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),y===i.RGBA){const xt=tt?Ta:ce.getTransfer(Y);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=xt===fe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(R,y){let F;return R?y===null||y===er||y===Wr?F=i.DEPTH24_STENCIL8:y===jn?F=i.DEPTH32F_STENCIL8:y===gs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===er||y===Wr?F=i.DEPTH_COMPONENT24:y===jn?F=i.DEPTH_COMPONENT32F:y===gs&&(F=i.DEPTH_COMPONENT16),F}function E(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==un&&R.minFilter!==_n?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function L(R){const y=R.target;y.removeEventListener("dispose",L),T(y),y.isVideoTexture&&u.delete(y)}function P(R){const y=R.target;y.removeEventListener("dispose",P),V(y)}function T(R){const y=n.get(R);if(y.__webglInit===void 0)return;const F=R.source,Y=h.get(F);if(Y){const tt=Y[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&D(R),Object.keys(Y).length===0&&h.delete(F)}n.remove(R)}function D(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const F=R.source,Y=h.get(F);delete Y[y.__cacheKey],a.memory.textures--}function V(R){const y=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let tt=0;tt<y.__webglFramebuffer[Y].length;tt++)i.deleteFramebuffer(y.__webglFramebuffer[Y][tt]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=R.textures;for(let Y=0,tt=F.length;Y<tt;Y++){const $=n.get(F[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(R)}let v=0;function x(){v=0}function N(){const R=v;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),v+=1,R}function B(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function W(R,y){const F=n.get(R);if(R.isVideoTexture&&et(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(F,R,y);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function j(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Ut(F,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function z(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Ut(F,R,y);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function J(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Z(F,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}const q={[fl]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[pl]:i.MIRRORED_REPEAT},ct={[un]:i.NEAREST,[yv]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},at={[wv]:i.NEVER,[Lv]:i.ALWAYS,[Av]:i.LESS,[gh]:i.LEQUAL,[Tv]:i.EQUAL,[Pv]:i.GEQUAL,[Rv]:i.GREATER,[Cv]:i.NOTEQUAL};function vt(R,y){if(y.type===jn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===_n||y.magFilter===ao||y.magFilter===Us||y.magFilter===Yi||y.minFilter===_n||y.minFilter===ao||y.minFilter===Us||y.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,q[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,q[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,q[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,at[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===un||y.minFilter!==Us&&y.minFilter!==Yi||y.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Yt(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",L));const Y=y.source;let tt=h.get(Y);tt===void 0&&(tt={},h.set(Y,tt));const $=B(y);if($!==R.__cacheKey){tt[$]===void 0&&(tt[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),tt[$].usedTimes++;const xt=tt[R.__cacheKey];xt!==void 0&&(tt[R.__cacheKey].usedTimes--,xt.usedTimes===0&&D(y)),R.__cacheKey=$,R.__webglTexture=tt[$].texture}return F}function Ut(R,y,F){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);const tt=Yt(R,y),$=y.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+F);const xt=n.get($);if($.version!==xt.__version||tt===!0){e.activeTexture(i.TEXTURE0+F);const lt=ce.getPrimaries(ce.workingColorSpace),ht=y.colorSpace===pi?null:ce.getPrimaries(y.colorSpace),zt=y.colorSpace===pi||lt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let rt=g(y.image,!1,r.maxTextureSize);rt=wt(y,rt);const yt=s.convert(y.format,y.colorSpace),Dt=s.convert(y.type);let Ot=w(y.internalFormat,yt,Dt,y.colorSpace,y.isVideoTexture);vt(Y,y);let Et;const Jt=y.mipmaps,Ht=y.isVideoTexture!==!0,Qt=xt.__version===void 0||tt===!0,k=$.dataReady,St=E(y,rt);if(y.isDepthTexture)Ot=S(y.format===qr,y.type),Qt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Ot,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,rt.width,rt.height,0,yt,Dt,null));else if(y.isDataTexture)if(Jt.length>0){Ht&&Qt&&e.texStorage2D(i.TEXTURE_2D,St,Ot,Jt[0].width,Jt[0].height);for(let X=0,Q=Jt.length;X<Q;X++)Et=Jt[X],Ht?k&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,yt,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,X,Ot,Et.width,Et.height,0,yt,Dt,Et.data);y.generateMipmaps=!1}else Ht?(Qt&&e.texStorage2D(i.TEXTURE_2D,St,Ot,rt.width,rt.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,yt,Dt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,rt.width,rt.height,0,yt,Dt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ht&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Ot,Jt[0].width,Jt[0].height,rt.depth);for(let X=0,Q=Jt.length;X<Q;X++)if(Et=Jt[X],y.format!==En)if(yt!==null)if(Ht){if(k)if(y.layerUpdates.size>0){const gt=Fu(Et.width,Et.height,y.format,y.type);for(const bt of y.layerUpdates){const te=Et.data.subarray(bt*gt/Et.data.BYTES_PER_ELEMENT,(bt+1)*gt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,bt,Et.width,Et.height,1,yt,te,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,rt.depth,yt,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ot,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,rt.depth,yt,Dt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ot,Et.width,Et.height,rt.depth,0,yt,Dt,Et.data)}else{Ht&&Qt&&e.texStorage2D(i.TEXTURE_2D,St,Ot,Jt[0].width,Jt[0].height);for(let X=0,Q=Jt.length;X<Q;X++)Et=Jt[X],y.format!==En?yt!==null?Ht?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,yt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ot,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?k&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,yt,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,X,Ot,Et.width,Et.height,0,yt,Dt,Et.data)}else if(y.isDataArrayTexture)if(Ht){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Ot,rt.width,rt.height,rt.depth),k)if(y.layerUpdates.size>0){const X=Fu(rt.width,rt.height,y.format,y.type);for(const Q of y.layerUpdates){const gt=rt.data.subarray(Q*X/rt.data.BYTES_PER_ELEMENT,(Q+1)*X/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,yt,Dt,gt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Dt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,rt.width,rt.height,rt.depth,0,yt,Dt,rt.data);else if(y.isData3DTexture)Ht?(Qt&&e.texStorage3D(i.TEXTURE_3D,St,Ot,rt.width,rt.height,rt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Dt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,rt.width,rt.height,rt.depth,0,yt,Dt,rt.data);else if(y.isFramebufferTexture){if(Qt)if(Ht)e.texStorage2D(i.TEXTURE_2D,St,Ot,rt.width,rt.height);else{let X=rt.width,Q=rt.height;for(let gt=0;gt<St;gt++)e.texImage2D(i.TEXTURE_2D,gt,Ot,X,Q,0,yt,Dt,null),X>>=1,Q>>=1}}else if(Jt.length>0){if(Ht&&Qt){const X=ut(Jt[0]);e.texStorage2D(i.TEXTURE_2D,St,Ot,X.width,X.height)}for(let X=0,Q=Jt.length;X<Q;X++)Et=Jt[X],Ht?k&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt,Dt,Et):e.texImage2D(i.TEXTURE_2D,X,Ot,yt,Dt,Et);y.generateMipmaps=!1}else if(Ht){if(Qt){const X=ut(rt);e.texStorage2D(i.TEXTURE_2D,St,Ot,X.width,X.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Dt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,yt,Dt,rt);m(y)&&f(Y),xt.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Z(R,y,F){if(y.image.length!==6)return;const Y=Yt(R,y),tt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);const $=n.get(tt);if(tt.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const xt=ce.getPrimaries(ce.workingColorSpace),lt=y.colorSpace===pi?null:ce.getPrimaries(y.colorSpace),ht=y.colorSpace===pi||xt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const zt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let Q=0;Q<6;Q++)!zt&&!rt?yt[Q]=g(y.image[Q],!0,r.maxCubemapSize):yt[Q]=rt?y.image[Q].image:y.image[Q],yt[Q]=wt(y,yt[Q]);const Dt=yt[0],Ot=s.convert(y.format,y.colorSpace),Et=s.convert(y.type),Jt=w(y.internalFormat,Ot,Et,y.colorSpace),Ht=y.isVideoTexture!==!0,Qt=$.__version===void 0||Y===!0,k=tt.dataReady;let St=E(y,Dt);vt(i.TEXTURE_CUBE_MAP,y);let X;if(zt){Ht&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Jt,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){X=yt[Q].mipmaps;for(let gt=0;gt<X.length;gt++){const bt=X[gt];y.format!==En?Ot!==null?Ht?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,bt.width,bt.height,Ot,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,Jt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,bt.width,bt.height,Ot,Et,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,Jt,bt.width,bt.height,0,Ot,Et,bt.data)}}}else{if(X=y.mipmaps,Ht&&Qt){X.length>0&&St++;const Q=ut(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){Ht?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,yt[Q].width,yt[Q].height,Ot,Et,yt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,yt[Q].width,yt[Q].height,0,Ot,Et,yt[Q].data);for(let gt=0;gt<X.length;gt++){const te=X[gt].image[Q].image;Ht?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,te.width,te.height,Ot,Et,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,Jt,te.width,te.height,0,Ot,Et,te.data)}}else{Ht?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ot,Et,yt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,Ot,Et,yt[Q]);for(let gt=0;gt<X.length;gt++){const bt=X[gt];Ht?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,Ot,Et,bt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,Jt,Ot,Et,bt.image[Q])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),$.__version=tt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function it(R,y,F,Y,tt,$){const xt=s.convert(F.format,F.colorSpace),lt=s.convert(F.type),ht=w(F.internalFormat,xt,lt,F.colorSpace);if(!n.get(y).__hasExternalTextures){const rt=Math.max(1,y.width>>$),yt=Math.max(1,y.height>>$);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,ht,rt,yt,y.depth,0,xt,lt,null):e.texImage2D(tt,$,ht,rt,yt,0,xt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,tt,n.get(F).__webglTexture,0,Kt(y)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,tt,n.get(F).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(R,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const Y=y.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,$=S(y.stencilBuffer,tt),xt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Kt(y);qt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,$,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,R)}else{const Y=y.textures;for(let tt=0;tt<Y.length;tt++){const $=Y[tt],xt=s.convert($.format,$.colorSpace),lt=s.convert($.type),ht=w($.internalFormat,xt,lt,$.colorSpace),zt=Kt(y);F&&qt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,ht,y.width,y.height):qt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,ht,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ht,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const Y=n.get(y.depthTexture).__webglTexture,tt=Kt(y);if(y.depthTexture.format===Ir)qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(y.depthTexture.format===qr)qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function It(R){const y=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=Y}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");dt(y.__webglFramebuffer,R)}else if(F){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),_t(y.__webglDepthbuffer[Y],R,!1);else{const tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),_t(y.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(R,y,F){const Y=n.get(R);y!==void 0&&it(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&It(R)}function Wt(R){const y=R.texture,F=n.get(R),Y=n.get(y);R.addEventListener("dispose",P);const tt=R.textures,$=R.isWebGLCubeRenderTarget===!0,xt=tt.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let ht=0;ht<y.mipmaps.length;ht++)F.__webglFramebuffer[lt][ht]=i.createFramebuffer()}else F.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)F.__webglFramebuffer[lt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(xt)for(let lt=0,ht=tt.length;lt<ht;lt++){const zt=n.get(tt[lt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&qt(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const ht=tt[lt];F.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);const zt=s.convert(ht.format,ht.colorSpace),rt=s.convert(ht.type),yt=w(ht.internalFormat,zt,rt,ht.colorSpace,R.isXRRenderTarget===!0),Dt=Kt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),vt(i.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)it(F.__webglFramebuffer[lt][ht],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ht);else it(F.__webglFramebuffer[lt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let lt=0,ht=tt.length;lt<ht;lt++){const zt=tt[lt],rt=n.get(zt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),vt(i.TEXTURE_2D,zt),it(F.__webglFramebuffer,R,zt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(zt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Y.__webglTexture),vt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)it(F.__webglFramebuffer[ht],R,y,i.COLOR_ATTACHMENT0,lt,ht);else it(F.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,lt,0);m(y)&&f(lt),e.unbindTexture()}R.depthBuffer&&It(R)}function se(R){const y=R.textures;for(let F=0,Y=y.length;F<Y;F++){const tt=y[F];if(m(tt)){const $=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(tt).__webglTexture;e.bindTexture($,xt),f($),e.unbindTexture()}}}const jt=[],I=[];function Le(R){if(R.samples>0){if(qt(R)===!1){const y=R.textures,F=R.width,Y=R.height;let tt=i.COLOR_BUFFER_BIT;const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(R),lt=y.length>1;if(lt)for(let ht=0;ht<y.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ht=0;ht<y.length;ht++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);const zt=n.get(y[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,tt,i.NEAREST),l===!0&&(jt.length=0,I.length=0,jt.push(i.COLOR_ATTACHMENT0+ht),R.depthBuffer&&R.resolveDepthBuffer===!1&&(jt.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let ht=0;ht<y.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ht]);const zt=n.get(y[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Kt(R){return Math.min(r.maxSamples,R.samples)}function qt(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function et(R){const y=a.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function wt(R,y){const F=R.colorSpace,Y=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Ri&&F!==pi&&(ce.getTransfer(F)===fe?(Y!==En||tt!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=x,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=Rt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=it,this.useMultisampledRTT=qt}function FS(i,t){function e(n,r=pi){let s;const a=ce.getTransfer(r);if(n===ti)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return i.BYTE;if(n===oh)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===oc)return i.INT;if(n===er)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Ms)return i.HALF_FLOAT;if(n===ch)return i.ALPHA;if(n===uh)return i.RGB;if(n===En)return i.RGBA;if(n===dh)return i.LUMINANCE;if(n===hh)return i.LUMINANCE_ALPHA;if(n===Ir)return i.DEPTH_COMPONENT;if(n===qr)return i.DEPTH_STENCIL;if(n===fh)return i.RED;if(n===uc)return i.RED_INTEGER;if(n===ph)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===da||n===ha||n===fa||n===pa)if(a===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===vl||n===_l)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===yl||n===Sl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xl||n===yl)return a===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bl||n===El||n===Ml||n===wl||n===Al||n===Tl||n===Rl||n===Cl||n===Pl||n===Ll||n===Il||n===Dl||n===kl||n===Nl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===Ul||n===Fl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ma)return a===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mh||n===Ol||n===Bl||n===zl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ma)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class OS extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ia extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BS={type:"move"};class Fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ia;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const zS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HS=`
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

}`;class VS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new $e,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:zS,fragmentShader:HS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ln(new Ga(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GS extends jr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const g=new VS,m=e.getContextAttributes();let f=null,w=null;const S=[],E=[],L=new he;let P=null;const T=new cn;T.layers.enable(1),T.viewport=new Se;const D=new cn;D.layers.enable(2),D.viewport=new Se;const V=[T,D],v=new OS;v.layers.enable(1),v.layers.enable(2);let x=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=S[Z];return it===void 0&&(it=new Fo,S[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=S[Z];return it===void 0&&(it=new Fo,S[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=S[Z];return it===void 0&&(it=new Fo,S[Z]=it),it.getHandSpace()};function B(Z){const it=E.indexOf(Z.inputSource);if(it===-1)return;const _t=S[it];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,c||a),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",j);for(let Z=0;Z<S.length;Z++){const it=E[Z];it!==null&&(E[Z]=null,S[Z].disconnect(it))}x=null,N=null,g.reset(),t.setRenderTarget(f),p=null,h=null,d=null,r=null,w=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new nr(p.framebufferWidth,p.framebufferHeight,{format:En,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,_t=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?qr:Ir,_t=m.stencil?Wr:er);const It={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};d=new XRWebGLBinding(r,e),h=d.createProjectionLayer(It),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),w=new nr(h.textureWidth,h.textureHeight,{format:En,type:ti,depthTexture:new Lh(h.textureWidth,h.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ut.setContext(r),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Z){for(let it=0;it<Z.removed.length;it++){const _t=Z.removed[it],dt=E.indexOf(_t);dt>=0&&(E[dt]=null,S[dt].disconnect(_t))}for(let it=0;it<Z.added.length;it++){const _t=Z.added[it];let dt=E.indexOf(_t);if(dt===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=E.length){E.push(_t),dt=Rt;break}else if(E[Rt]===null){E[Rt]=_t,dt=Rt;break}if(dt===-1)break}const It=S[dt];It&&It.connect(_t)}}const z=new G,J=new G;function q(Z,it,_t){z.setFromMatrixPosition(it.matrixWorld),J.setFromMatrixPosition(_t.matrixWorld);const dt=z.distanceTo(J),It=it.projectionMatrix.elements,Rt=_t.projectionMatrix.elements,Wt=It[14]/(It[10]-1),se=It[14]/(It[10]+1),jt=(It[9]+1)/It[5],I=(It[9]-1)/It[5],Le=(It[8]-1)/It[0],Kt=(Rt[8]+1)/Rt[0],qt=Wt*Le,et=Wt*Kt,wt=dt/(-Le+Kt),ut=wt*-Le;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ut),Z.translateZ(wt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),It[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const R=Wt+wt,y=se+wt,F=qt-ut,Y=et+(dt-ut),tt=jt*se/y*R,$=I*se/y*R;Z.projectionMatrix.makePerspective(F,Y,tt,$,R,y),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ct(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let it=Z.near,_t=Z.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),v.near=D.near=T.near=it,v.far=D.far=T.far=_t,(x!==v.near||N!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),x=v.near,N=v.far);const dt=Z.parent,It=v.cameras;ct(v,dt);for(let Rt=0;Rt<It.length;Rt++)ct(It[Rt],dt);It.length===2?q(v,T,D):v.projectionMatrix.copy(T.projectionMatrix),at(Z,v,dt)};function at(Z,it,_t){_t===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Hl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let vt=null;function Yt(Z,it){if(u=it.getViewerPose(c||a),_=it,u!==null){const _t=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let dt=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let Rt=0;Rt<_t.length;Rt++){const Wt=_t[Rt];let se=null;if(p!==null)se=p.getViewport(Wt);else{const I=d.getViewSubImage(h,Wt);se=I.viewport,Rt===0&&(t.setRenderTargetTextures(w,I.colorTexture,h.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(w))}let jt=V[Rt];jt===void 0&&(jt=new cn,jt.layers.enable(Rt),jt.viewport=new Se,V[Rt]=jt),jt.matrix.fromArray(Wt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Wt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(se.x,se.y,se.width,se.height),Rt===0&&(v.matrix.copy(jt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(jt)}const It=r.enabledFeatures;if(It&&It.includes("depth-sensing")){const Rt=d.getDepthInformation(_t[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(t,Rt,r.renderState)}}for(let _t=0;_t<S.length;_t++){const dt=E[_t],It=S[_t];dt!==null&&It!==void 0&&It.update(dt,it,c||a)}vt&&vt(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),_=null}const Ut=new Ph;Ut.setAnimationLoop(Yt),this.setAnimationLoop=function(Z){vt=Z},this.dispose=function(){}}}const Oi=new ei,WS=new be;function qS(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ah(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,w,S,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),S=w.envMap,E=w.envMapRotation;S&&(m.envMap.value=S,Oi.copy(E),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(WS.makeRotationFromEuler(Oi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $S(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const E=S.program;n.uniformBlockBinding(w,E)}function c(w,S){let E=r[w.id];E===void 0&&(_(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(w,L);const P=t.render.frame;s[w.id]!==P&&(h(w),s[w.id]=P)}function u(w){const S=d();w.__bindingPointIndex=S;const E=i.createBuffer(),L=w.__size,P=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const S=r[w.id],E=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let P=0,T=E.length;P<T;P++){const D=Array.isArray(E[P])?E[P]:[E[P]];for(let V=0,v=D.length;V<v;V++){const x=D[V];if(p(x,P,V,L)===!0){const N=x.__offset,B=Array.isArray(x.value)?x.value:[x.value];let W=0;for(let j=0;j<B.length;j++){const z=B[j],J=g(z);typeof z=="number"||typeof z=="boolean"?(x.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,N+W,x.__data)):z.isMatrix3?(x.__data[0]=z.elements[0],x.__data[1]=z.elements[1],x.__data[2]=z.elements[2],x.__data[3]=0,x.__data[4]=z.elements[3],x.__data[5]=z.elements[4],x.__data[6]=z.elements[5],x.__data[7]=0,x.__data[8]=z.elements[6],x.__data[9]=z.elements[7],x.__data[10]=z.elements[8],x.__data[11]=0):(z.toArray(x.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,x.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,S,E,L){const P=w.value,T=S+"_"+E;if(L[T]===void 0)return typeof P=="number"||typeof P=="boolean"?L[T]=P:L[T]=P.clone(),!0;{const D=L[T];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return L[T]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function _(w){const S=w.uniforms;let E=0;const L=16;for(let T=0,D=S.length;T<D;T++){const V=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,x=V.length;v<x;v++){const N=V[v],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,j=B.length;W<j;W++){const z=B[W],J=g(z),q=E%L,ct=q%J.boundary,at=q+ct;E+=ct,at!==0&&L-at<J.storage&&(E+=L-at),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=J.storage}}}const P=E%L;return P>0&&(E+=L-P),w.__size=E,w.__cache={},this}function g(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class XS{constructor(t={}){const{canvas:e=Dv(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=bi,this.toneMappingExposure=1;const S=this;let E=!1,L=0,P=0,T=null,D=-1,V=null;const v=new Se,x=new Se;let N=null;const B=new ue(0);let W=0,j=e.width,z=e.height,J=1,q=null,ct=null;const at=new Se(0,0,j,z),vt=new Se(0,0,j,z);let Yt=!1;const Ut=new Ch;let Z=!1,it=!1;const _t=new be,dt=new be,It=new G,Rt=new Se,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function jt(){return T===null?J:1}let I=n;function Le(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),I===null){const U="webgl2";if(I=Le(U,M),I===null)throw Le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Kt,qt,et,wt,ut,R,y,F,Y,tt,$,xt,lt,ht,zt,rt,yt,Dt,Ot,Et,Jt,Ht,Qt,k;function St(){Kt=new Jx(I),Kt.init(),Ht=new FS(I,Kt),qt=new qx(I,Kt,t,Ht),et=new kS(I),qt.reverseDepthBuffer&&et.buffers.depth.setReversed(!0),wt=new ey(I),ut=new xS,R=new US(I,Kt,et,ut,qt,Ht,wt),y=new Xx(S),F=new Zx(S),Y=new o_(I),Qt=new Gx(I,Y),tt=new Qx(I,Y,wt,Qt),$=new iy(I,tt,Y,wt),Ot=new ny(I,qt,R),rt=new $x(ut),xt=new _S(S,y,F,Kt,qt,Qt,rt),lt=new qS(S,ut),ht=new SS,zt=new TS(Kt),Dt=new Vx(S,y,F,et,$,h,l),yt=new IS(S,$,qt),k=new $S(I,wt,qt,et),Et=new Wx(I,Kt,wt),Jt=new ty(I,Kt,wt),wt.programs=xt.programs,S.capabilities=qt,S.extensions=Kt,S.properties=ut,S.renderLists=ht,S.shadowMap=yt,S.state=et,S.info=wt}St();const X=new GS(S,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Kt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Kt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(j,z,!1))},this.getSize=function(M){return M.set(j,z)},this.setSize=function(M,U,b=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,z=U,e.width=Math.floor(M*J),e.height=Math.floor(U*J),b===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(j*J,z*J).floor()},this.setDrawingBufferSize=function(M,U,b){j=M,z=U,J=b,e.width=Math.floor(M*b),e.height=Math.floor(U*b),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(at)},this.setViewport=function(M,U,b,A){M.isVector4?at.set(M.x,M.y,M.z,M.w):at.set(M,U,b,A),et.viewport(v.copy(at).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(vt)},this.setScissor=function(M,U,b,A){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,U,b,A),et.scissor(x.copy(vt).multiplyScalar(J).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(M){et.setScissorTest(Yt=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){ct=M},this.getClearColor=function(M){return M.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(M=!0,U=!0,b=!0){let A=0;if(M){let C=!1;if(T!==null){const O=T.texture.format;C=O===hc||O===dc||O===uc}if(C){const O=T.texture.type,H=O===ti||O===er||O===gs||O===Wr||O===lc||O===cc,nt=Dt.getClearColor(),ot=Dt.getClearAlpha(),mt=nt.r,Ct=nt.g,At=nt.b;H?(p[0]=mt,p[1]=Ct,p[2]=At,p[3]=ot,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=mt,_[1]=Ct,_[2]=At,_[3]=ot,I.clearBufferiv(I.COLOR,0,_))}else A|=I.COLOR_BUFFER_BIT}U&&(A|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),b&&(A|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),ht.dispose(),zt.dispose(),ut.dispose(),y.dispose(),F.dispose(),$.dispose(),Qt.dispose(),k.dispose(),xt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ci),X.removeEventListener("sessionend",Pi),sn.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=wt.autoReset,U=yt.enabled,b=yt.autoUpdate,A=yt.needsUpdate,C=yt.type;St(),wt.autoReset=M,yt.enabled=U,yt.autoUpdate=b,yt.needsUpdate=A,yt.type=C}function bt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function te(M){const U=M.target;U.removeEventListener("dispose",te),ge(U)}function ge(M){ke(M),ut.remove(M)}function ke(M){const U=ut.get(M).programs;U!==void 0&&(U.forEach(function(b){xt.releaseProgram(b)}),M.isShaderMaterial&&xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,b,A,C,O){U===null&&(U=Wt);const H=C.isMesh&&C.matrixWorld.determinant()<0,nt=Ps(M,U,b,A,C);et.setMaterial(A,H);let ot=b.index,mt=1;if(A.wireframe===!0){if(ot=tt.getWireframeAttribute(b),ot===void 0)return;mt=2}const Ct=b.drawRange,At=b.attributes.position;let Vt=Ct.start*mt,Bt=(Ct.start+Ct.count)*mt;O!==null&&(Vt=Math.max(Vt,O.start*mt),Bt=Math.min(Bt,(O.start+O.count)*mt)),ot!==null?(Vt=Math.max(Vt,0),Bt=Math.min(Bt,ot.count)):At!=null&&(Vt=Math.max(Vt,0),Bt=Math.min(Bt,At.count));const ee=Bt-Vt;if(ee<0||ee===1/0)return;Qt.setup(C,A,nt,b,ot);let Ve,ie=Et;if(ot!==null&&(Ve=Y.get(ot),ie=Jt,ie.setIndex(Ve)),C.isMesh)A.wireframe===!0?(et.setLineWidth(A.wireframeLinewidth*jt()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(C.isLine){let Pt=A.linewidth;Pt===void 0&&(Pt=1),et.setLineWidth(Pt*jt()),C.isLineSegments?ie.setMode(I.LINES):C.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else C.isPoints?ie.setMode(I.POINTS):C.isSprite&&ie.setMode(I.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)ie.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))ie.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const Pt=C._multiDrawStarts,Ne=C._multiDrawCounts,le=C._multiDrawCount,fn=ot?Y.get(ot).bytesPerElement:1,cr=ut.get(A).currentProgram.getUniforms();for(let Qe=0;Qe<le;Qe++)cr.setValue(I,"_gl_DrawID",Qe),ie.render(Pt[Qe]/fn,Ne[Qe])}else if(C.isInstancedMesh)ie.renderInstances(Vt,ee,C.count);else if(b.isInstancedBufferGeometry){const Pt=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,Ne=Math.min(b.instanceCount,Pt);ie.renderInstances(Vt,ee,Ne)}else ie.render(Vt,ee)};function ae(M,U,b){M.transparent===!0&&M.side===$n&&M.forceSinglePass===!1?(M.side=qe,M.needsUpdate=!0,Ii(M,U,b),M.side=Ti,M.needsUpdate=!0,Ii(M,U,b),M.side=$n):Ii(M,U,b)}this.compile=function(M,U,b=null){b===null&&(b=M),m=zt.get(b),m.init(U),w.push(m),b.traverseVisible(function(C){C.isLight&&C.layers.test(U.layers)&&(m.pushLight(C),C.castShadow&&m.pushShadow(C))}),M!==b&&M.traverseVisible(function(C){C.isLight&&C.layers.test(U.layers)&&(m.pushLight(C),C.castShadow&&m.pushShadow(C))}),m.setupLights();const A=new Set;return M.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const O=C.material;if(O)if(Array.isArray(O))for(let H=0;H<O.length;H++){const nt=O[H];ae(nt,b,C),A.add(nt)}else ae(O,b,C),A.add(O)}),w.pop(),m=null,A},this.compileAsync=function(M,U,b=null){const A=this.compile(M,U,b);return new Promise(C=>{function O(){if(A.forEach(function(H){ut.get(H).currentProgram.isReady()&&A.delete(H)}),A.size===0){C(M);return}setTimeout(O,10)}Kt.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let _e=null;function Xe(M){_e&&_e(M)}function Ci(){sn.stop()}function Pi(){sn.start()}const sn=new Ph;sn.setAnimationLoop(Xe),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(M){_e=M,X.setAnimationLoop(M),M===null?sn.stop():sn.start()},X.addEventListener("sessionstart",Ci),X.addEventListener("sessionend",Pi),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,U,T),m=zt.get(M,w.length),m.init(U),w.push(m),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ut.setFromProjectionMatrix(dt),it=this.localClippingEnabled,Z=rt.init(this.clippingPlanes,it),g=ht.get(M,f.length),g.init(),f.push(g),X.enabled===!0&&X.isPresenting===!0){const O=S.xr.getDepthSensingMesh();O!==null&&ni(O,U,-1/0,S.sortObjects)}ni(M,U,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(q,ct),se=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,se&&Dt.addToRenderList(g,M),this.info.render.frame++,Z===!0&&rt.beginShadows();const b=m.state.shadowsArray;yt.render(b,M,U),Z===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const A=g.opaque,C=g.transmissive;if(m.setupLights(),U.isArrayCamera){const O=U.cameras;if(C.length>0)for(let H=0,nt=O.length;H<nt;H++){const ot=O[H];ar(A,C,M,ot)}se&&Dt.render(M);for(let H=0,nt=O.length;H<nt;H++){const ot=O[H];sr(g,M,ot,ot.viewport)}}else C.length>0&&ar(A,C,M,U),se&&Dt.render(M),sr(g,M,U);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(S,M,U),Qt.resetDefaultState(),D=-1,V=null,w.pop(),w.length>0?(m=w[w.length-1],Z===!0&&rt.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function ni(M,U,b,A){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)b=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ut.intersectsSprite(M)){A&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(dt);const H=$.update(M),nt=M.material;nt.visible&&g.push(M,H,nt,b,Rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ut.intersectsObject(M))){const H=$.update(M),nt=M.material;if(A&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),Rt.copy(H.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(dt)),Array.isArray(nt)){const ot=H.groups;for(let mt=0,Ct=ot.length;mt<Ct;mt++){const At=ot[mt],Vt=nt[At.materialIndex];Vt&&Vt.visible&&g.push(M,H,Vt,b,Rt.z,At)}}else nt.visible&&g.push(M,H,nt,b,Rt.z,null)}}const O=M.children;for(let H=0,nt=O.length;H<nt;H++)ni(O[H],U,b,A)}function sr(M,U,b,A){const C=M.opaque,O=M.transmissive,H=M.transparent;m.setupLightsView(b),Z===!0&&rt.setGlobalState(S.clippingPlanes,b),A&&et.viewport(v.copy(A)),C.length>0&&Li(C,U,b),O.length>0&&Li(O,U,b),H.length>0&&Li(H,U,b),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function ar(M,U,b,A){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[A.id]===void 0&&(m.state.transmissionRenderTarget[A.id]=new nr(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Ms:ti,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const O=m.state.transmissionRenderTarget[A.id],H=A.viewport||v;O.setSize(H.z,H.w);const nt=S.getRenderTarget();S.setRenderTarget(O),S.getClearColor(B),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),se&&Dt.render(b);const ot=S.toneMapping;S.toneMapping=bi;const mt=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),m.setupLightsView(A),Z===!0&&rt.setGlobalState(S.clippingPlanes,A),Li(M,b,A),R.updateMultisampleRenderTarget(O),R.updateRenderTargetMipmap(O),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let At=0,Vt=U.length;At<Vt;At++){const Bt=U[At],ee=Bt.object,Ve=Bt.geometry,ie=Bt.material,Pt=Bt.group;if(ie.side===$n&&ee.layers.test(A.layers)){const Ne=ie.side;ie.side=qe,ie.needsUpdate=!0,or(ee,b,A,Ve,ie,Pt),ie.side=Ne,ie.needsUpdate=!0,Ct=!0}}Ct===!0&&(R.updateMultisampleRenderTarget(O),R.updateRenderTargetMipmap(O))}S.setRenderTarget(nt),S.setClearColor(B,W),mt!==void 0&&(A.viewport=mt),S.toneMapping=ot}function Li(M,U,b){const A=U.isScene===!0?U.overrideMaterial:null;for(let C=0,O=M.length;C<O;C++){const H=M[C],nt=H.object,ot=H.geometry,mt=A===null?H.material:A,Ct=H.group;nt.layers.test(b.layers)&&or(nt,U,b,ot,mt,Ct)}}function or(M,U,b,A,C,O){M.onBeforeRender(S,U,b,A,C,O),M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),C.onBeforeRender(S,U,b,A,M,O),C.transparent===!0&&C.side===$n&&C.forceSinglePass===!1?(C.side=qe,C.needsUpdate=!0,S.renderBufferDirect(b,U,A,C,M,O),C.side=Ti,C.needsUpdate=!0,S.renderBufferDirect(b,U,A,C,M,O),C.side=$n):S.renderBufferDirect(b,U,A,C,M,O),M.onAfterRender(S,U,b,A,C,O)}function Ii(M,U,b){U.isScene!==!0&&(U=Wt);const A=ut.get(M),C=m.state.lights,O=m.state.shadowsArray,H=C.state.version,nt=xt.getParameters(M,C.state,O,U,b),ot=xt.getProgramCacheKey(nt);let mt=A.programs;A.environment=M.isMeshStandardMaterial?U.environment:null,A.fog=U.fog,A.envMap=(M.isMeshStandardMaterial?F:y).get(M.envMap||A.environment),A.envMapRotation=A.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,mt===void 0&&(M.addEventListener("dispose",te),mt=new Map,A.programs=mt);let Ct=mt.get(ot);if(Ct!==void 0){if(A.currentProgram===Ct&&A.lightsStateVersion===H)return Jr(M,nt),Ct}else nt.uniforms=xt.getUniforms(M),M.onBeforeCompile(nt,S),Ct=xt.acquireProgram(nt,ot),mt.set(ot,Ct),A.uniforms=nt.uniforms;const At=A.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=rt.uniform),Jr(M,nt),A.needsLights=lr(M),A.lightsStateVersion=H,A.needsLights&&(At.ambientLightColor.value=C.state.ambient,At.lightProbe.value=C.state.probe,At.directionalLights.value=C.state.directional,At.directionalLightShadows.value=C.state.directionalShadow,At.spotLights.value=C.state.spot,At.spotLightShadows.value=C.state.spotShadow,At.rectAreaLights.value=C.state.rectArea,At.ltc_1.value=C.state.rectAreaLTC1,At.ltc_2.value=C.state.rectAreaLTC2,At.pointLights.value=C.state.point,At.pointLightShadows.value=C.state.pointShadow,At.hemisphereLights.value=C.state.hemi,At.directionalShadowMap.value=C.state.directionalShadowMap,At.directionalShadowMatrix.value=C.state.directionalShadowMatrix,At.spotShadowMap.value=C.state.spotShadowMap,At.spotLightMatrix.value=C.state.spotLightMatrix,At.spotLightMap.value=C.state.spotLightMap,At.pointShadowMap.value=C.state.pointShadowMap,At.pointShadowMatrix.value=C.state.pointShadowMatrix),A.currentProgram=Ct,A.uniformsList=null,Ct}function Zr(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=va.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Jr(M,U){const b=ut.get(M);b.outputColorSpace=U.outputColorSpace,b.batching=U.batching,b.batchingColor=U.batchingColor,b.instancing=U.instancing,b.instancingColor=U.instancingColor,b.instancingMorph=U.instancingMorph,b.skinning=U.skinning,b.morphTargets=U.morphTargets,b.morphNormals=U.morphNormals,b.morphColors=U.morphColors,b.morphTargetsCount=U.morphTargetsCount,b.numClippingPlanes=U.numClippingPlanes,b.numIntersection=U.numClipIntersection,b.vertexAlphas=U.vertexAlphas,b.vertexTangents=U.vertexTangents,b.toneMapping=U.toneMapping}function Ps(M,U,b,A,C){U.isScene!==!0&&(U=Wt),R.resetTextureUnits();const O=U.fog,H=A.isMeshStandardMaterial?U.environment:null,nt=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ri,ot=(A.isMeshStandardMaterial?F:y).get(A.envMap||H),mt=A.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,Ct=!!b.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),At=!!b.morphAttributes.position,Vt=!!b.morphAttributes.normal,Bt=!!b.morphAttributes.color;let ee=bi;A.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ee=S.toneMapping);const Ve=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,ie=Ve!==void 0?Ve.length:0,Pt=ut.get(A),Ne=m.state.lights;if(Z===!0&&(it===!0||M!==V)){const an=M===V&&A.id===D;rt.setState(A,M,an)}let le=!1;A.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ne.state.version||Pt.outputColorSpace!==nt||C.isBatchedMesh&&Pt.batching===!1||!C.isBatchedMesh&&Pt.batching===!0||C.isBatchedMesh&&Pt.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&Pt.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&Pt.instancing===!1||!C.isInstancedMesh&&Pt.instancing===!0||C.isSkinnedMesh&&Pt.skinning===!1||!C.isSkinnedMesh&&Pt.skinning===!0||C.isInstancedMesh&&Pt.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&Pt.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&Pt.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&Pt.instancingMorph===!1&&C.morphTexture!==null||Pt.envMap!==ot||A.fog===!0&&Pt.fog!==O||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==mt||Pt.vertexTangents!==Ct||Pt.morphTargets!==At||Pt.morphNormals!==Vt||Pt.morphColors!==Bt||Pt.toneMapping!==ee||Pt.morphTargetsCount!==ie)&&(le=!0):(le=!0,Pt.__version=A.version);let fn=Pt.currentProgram;le===!0&&(fn=Ii(A,U,C));let cr=!1,Qe=!1,qa=!1;const xe=fn.getUniforms(),ii=Pt.uniforms;if(et.useProgram(fn.program)&&(cr=!0,Qe=!0,qa=!0),A.id!==D&&(D=A.id,Qe=!0),cr||V!==M){qt.reverseDepthBuffer?(_t.copy(M.projectionMatrix),Nv(_t),Uv(_t),xe.setValue(I,"projectionMatrix",_t)):xe.setValue(I,"projectionMatrix",M.projectionMatrix),xe.setValue(I,"viewMatrix",M.matrixWorldInverse);const an=xe.map.cameraPosition;an!==void 0&&an.setValue(I,It.setFromMatrixPosition(M.matrixWorld)),qt.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&xe.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,Qe=!0,qa=!0)}if(C.isSkinnedMesh){xe.setOptional(I,C,"bindMatrix"),xe.setOptional(I,C,"bindMatrixInverse");const an=C.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),xe.setValue(I,"boneTexture",an.boneTexture,R))}C.isBatchedMesh&&(xe.setOptional(I,C,"batchingTexture"),xe.setValue(I,"batchingTexture",C._matricesTexture,R),xe.setOptional(I,C,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",C._indirectTexture,R),xe.setOptional(I,C,"batchingColorTexture"),C._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",C._colorsTexture,R));const $a=b.morphAttributes;if(($a.position!==void 0||$a.normal!==void 0||$a.color!==void 0)&&Ot.update(C,b,fn),(Qe||Pt.receiveShadow!==C.receiveShadow)&&(Pt.receiveShadow=C.receiveShadow,xe.setValue(I,"receiveShadow",C.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(ii.envMap.value=ot,ii.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),A.isMeshStandardMaterial&&A.envMap===null&&U.environment!==null&&(ii.envMapIntensity.value=U.environmentIntensity),Qe&&(xe.setValue(I,"toneMappingExposure",S.toneMappingExposure),Pt.needsLights&&Ls(ii,qa),O&&A.fog===!0&&lt.refreshFogUniforms(ii,O),lt.refreshMaterialUniforms(ii,A,J,z,m.state.transmissionRenderTarget[M.id]),va.upload(I,Zr(Pt),ii,R)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(va.upload(I,Zr(Pt),ii,R),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&xe.setValue(I,"center",C.center),xe.setValue(I,"modelViewMatrix",C.modelViewMatrix),xe.setValue(I,"normalMatrix",C.normalMatrix),xe.setValue(I,"modelMatrix",C.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const an=A.uniformsGroups;for(let Xa=0,Bh=an.length;Xa<Bh;Xa++){const vc=an[Xa];k.update(vc,fn),k.bind(vc,fn)}}return fn}function Ls(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function lr(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,U,b){ut.get(M.texture).__webglTexture=U,ut.get(M.depthTexture).__webglTexture=b;const A=ut.get(M);A.__hasExternalTextures=!0,A.__autoAllocateDepthBuffer=b===void 0,A.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const b=ut.get(M);b.__webglFramebuffer=U,b.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,b=0){T=M,L=U,P=b;let A=!0,C=null,O=!1,H=!1;if(M){const ot=ut.get(M);if(ot.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(I.FRAMEBUFFER,null),A=!1;else if(ot.__webglFramebuffer===void 0)R.setupRenderTarget(M);else if(ot.__hasExternalTextures)R.rebindTextures(M,ut.get(M.texture).__webglTexture,ut.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const At=M.depthTexture;if(ot.__boundDepthTexture!==At){if(At!==null&&ut.has(At)&&(M.width!==At.image.width||M.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(M)}}const mt=M.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(H=!0);const Ct=ut.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?C=Ct[U][b]:C=Ct[U],O=!0):M.samples>0&&R.useMultisampledRTT(M)===!1?C=ut.get(M).__webglMultisampledFramebuffer:Array.isArray(Ct)?C=Ct[b]:C=Ct,v.copy(M.viewport),x.copy(M.scissor),N=M.scissorTest}else v.copy(at).multiplyScalar(J).floor(),x.copy(vt).multiplyScalar(J).floor(),N=Yt;if(et.bindFramebuffer(I.FRAMEBUFFER,C)&&A&&et.drawBuffers(M,C),et.viewport(v),et.scissor(x),et.setScissorTest(N),O){const ot=ut.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ot.__webglTexture,b)}else if(H){const ot=ut.get(M.texture),mt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ot.__webglTexture,b||0,mt)}D=-1},this.readRenderTargetPixels=function(M,U,b,A,C,O,H){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=ut.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&H!==void 0&&(nt=nt[H]),nt){et.bindFramebuffer(I.FRAMEBUFFER,nt);try{const ot=M.texture,mt=ot.format,Ct=ot.type;if(!qt.textureFormatReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-A&&b>=0&&b<=M.height-C&&I.readPixels(U,b,A,C,Ht.convert(mt),Ht.convert(Ct),O)}finally{const ot=T!==null?ut.get(T).__webglFramebuffer:null;et.bindFramebuffer(I.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(M,U,b,A,C,O,H){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=ut.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&H!==void 0&&(nt=nt[H]),nt){const ot=M.texture,mt=ot.format,Ct=ot.type;if(!qt.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-A&&b>=0&&b<=M.height-C){et.bindFramebuffer(I.FRAMEBUFFER,nt);const At=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.bufferData(I.PIXEL_PACK_BUFFER,O.byteLength,I.STREAM_READ),I.readPixels(U,b,A,C,Ht.convert(mt),Ht.convert(Ct),0);const Vt=T!==null?ut.get(T).__webglFramebuffer:null;et.bindFramebuffer(I.FRAMEBUFFER,Vt);const Bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await kv(I,Bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,O),I.deleteBuffer(At),I.deleteSync(Bt),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,b=0){M.isTexture!==!0&&(ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const A=Math.pow(2,-b),C=Math.floor(M.image.width*A),O=Math.floor(M.image.height*A),H=U!==null?U.x:0,nt=U!==null?U.y:0;R.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,b,0,0,H,nt,C,O),et.unbindTexture()},this.copyTextureToTexture=function(M,U,b=null,A=null,C=0){M.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture function signature has changed."),A=arguments[0]||null,M=arguments[1],U=arguments[2],C=arguments[3]||0,b=null);let O,H,nt,ot,mt,Ct;b!==null?(O=b.max.x-b.min.x,H=b.max.y-b.min.y,nt=b.min.x,ot=b.min.y):(O=M.image.width,H=M.image.height,nt=0,ot=0),A!==null?(mt=A.x,Ct=A.y):(mt=0,Ct=0);const At=Ht.convert(U.format),Vt=Ht.convert(U.type);R.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Bt=I.getParameter(I.UNPACK_ROW_LENGTH),ee=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ve=I.getParameter(I.UNPACK_SKIP_PIXELS),ie=I.getParameter(I.UNPACK_SKIP_ROWS),Pt=I.getParameter(I.UNPACK_SKIP_IMAGES),Ne=M.isCompressedTexture?M.mipmaps[C]:M.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,nt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ot),M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,C,mt,Ct,O,H,At,Vt,Ne.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,C,mt,Ct,Ne.width,Ne.height,At,Ne.data):I.texSubImage2D(I.TEXTURE_2D,C,mt,Ct,O,H,At,Vt,Ne),I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pt),C===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(M,U,b=null,A=null,C=0){M.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),b=arguments[0]||null,A=arguments[1]||null,M=arguments[2],U=arguments[3],C=arguments[4]||0);let O,H,nt,ot,mt,Ct,At,Vt,Bt;const ee=M.isCompressedTexture?M.mipmaps[C]:M.image;b!==null?(O=b.max.x-b.min.x,H=b.max.y-b.min.y,nt=b.max.z-b.min.z,ot=b.min.x,mt=b.min.y,Ct=b.min.z):(O=ee.width,H=ee.height,nt=ee.depth,ot=0,mt=0,Ct=0),A!==null?(At=A.x,Vt=A.y,Bt=A.z):(At=0,Vt=0,Bt=0);const Ve=Ht.convert(U.format),ie=Ht.convert(U.type);let Pt;if(U.isData3DTexture)R.setTexture3D(U,0),Pt=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),Pt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Ne=I.getParameter(I.UNPACK_ROW_LENGTH),le=I.getParameter(I.UNPACK_IMAGE_HEIGHT),fn=I.getParameter(I.UNPACK_SKIP_PIXELS),cr=I.getParameter(I.UNPACK_SKIP_ROWS),Qe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ee.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ot),I.pixelStorei(I.UNPACK_SKIP_ROWS,mt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ct),M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Pt,C,At,Vt,Bt,O,H,nt,Ve,ie,ee.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Pt,C,At,Vt,Bt,O,H,nt,Ve,ee.data):I.texSubImage3D(Pt,C,At,Vt,Bt,O,H,nt,Ve,ie,ee),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le),I.pixelStorei(I.UNPACK_SKIP_PIXELS,fn),I.pixelStorei(I.UNPACK_SKIP_ROWS,cr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe),C===0&&U.generateMipmaps&&I.generateMipmap(Pt),et.unbindTexture()},this.initRenderTarget=function(M){ut.get(M).__webglFramebuffer===void 0&&R.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?R.setTextureCube(M,0):M.isData3DTexture?R.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?R.setTexture2DArray(M,0):R.setTexture2D(M,0),et.unbindTexture()},this.resetState=function(){L=0,P=0,T=null,et.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===fc?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===Ha?"display-p3":"srgb"}}class YS extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jS extends Rs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ou=new be,Gl=new yh,ra=new Va,sa=new G;class KS extends Je{constructor(t=new Fn,e=new jS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),ra.radius+=s,t.ray.intersectsSphere(ra)===!1)return;Ou.copy(r).invert(),Gl.copy(t.ray).applyMatrix4(Ou);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,g=p;_<g;_++){const m=c.getX(_);sa.fromBufferAttribute(d,m),Bu(sa,m,l,r,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=h,g=p;_<g;_++)sa.fromBufferAttribute(d,_),Bu(sa,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bu(i,t,e,n,r,s,a){const o=Gl.distanceSqToPoint(i);if(o<e){const l=new G;Gl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class mc extends Fn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new G,h=new G,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const w=[],S=f/n;let E=0;f===0&&a===0?E=.5/e:f===n&&l===Math.PI&&(E=-.5/e);for(let L=0;L<=e;L++){const P=L/e;d.x=-t*Math.cos(r+P*s)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(r+P*s)*Math.sin(a+S*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(P+E,1-S),w.push(c++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const S=u[f][w+1],E=u[f][w],L=u[f+1][w],P=u[f+1][w+1];(f!==0||a>0)&&p.push(S,E,P),(f!==n-1||l<Math.PI)&&p.push(E,L,P)}this.setIndex(p),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const zu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ZS{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const JS=new ZS;class gc{constructor(t){this.manager=t!==void 0?t:JS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}gc.DEFAULT_MATERIAL_NAME="__DEFAULT";class QS extends gc{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=zu.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=vs("img");function l(){u(),zu.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){u(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class tb extends gc{constructor(t){super(t)}load(t,e,n,r){const s=new $e,a=new QS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);const Uh=23.4392811,eb=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    mat4 mvNoTrans = modelViewMatrix;
    mvNoTrans[3].xyz = vec3(0.0);
    gl_Position = projectionMatrix * mvNoTrans * vec4(position, 1.0);
    gl_Position.z = gl_Position.w; // force depth to the far plane
  }
`,nb=`
  precision highp float;
  uniform sampler2D tEquirect;
  uniform float uIntensity;
  uniform float uCe;
  uniform float uSe;
  varying vec3 vDir;

  void main() {
    vec3 dEcl = normalize(vDir);

    // Ecliptic -> equatorial (+obliquity about X).
    vec3 dEq = vec3(
      dEcl.x,
      uCe * dEcl.y - uSe * dEcl.z,
      uSe * dEcl.y + uCe * dEcl.z
    );

    // Equatorial -> galactic (IAU/Hipparcos, J2000). Row-major dots.
    vec3 r0 = vec3(-0.0548755604162154, -0.8734370902348850, -0.4838350155487132);
    vec3 r1 = vec3( 0.4941094278755837, -0.4448296299600112,  0.7469822444972189);
    vec3 r2 = vec3(-0.8676661490190047, -0.1980763734312015,  0.4559837761750669);
    vec3 dGal = vec3(dot(r0, dEq), dot(r1, dEq), dot(r2, dEq));

    // Galactic -> cube atlas axes.
    vec3 dCube = vec3(dGal.y, dGal.z, -dGal.x);

    vec3 dn = normalize(dCube);
    vec2 uv = vec2(
      atan(dn.z, dn.x) * 0.15915494309189535 + 0.5,
      asin(clamp(dn.y, -1.0, 1.0)) * 0.3183098861837907 + 0.5
    );
    vec4 c = texture2D(tEquirect, uv);
    gl_FragColor = vec4(c.rgb * uIntensity, 1.0);
  }
`;async function ib(i,t=.42){const e=await new tb().loadAsync(i);e.colorSpace=vn,e.generateMipmaps=!1;const n=Uh*Math.PI/180,r=new Un({side:qe,depthWrite:!1,depthTest:!1,uniforms:{tEquirect:{value:e},uIntensity:{value:t},uCe:{value:Math.cos(n)},uSe:{value:Math.sin(n)}},vertexShader:eb,fragmentShader:nb}),s=new Ln(new mc(1,64,32),r);return s.frustumCulled=!1,s.renderOrder=-1e3,{mesh:s,texture:e,setIntensity(a){r.uniforms.uIntensity.value=a}}}const rb=1314083905,sb=2,ab=4,ob=`
  attribute float aMag;
  attribute float aCI;
  uniform float uPixelRatio;
  uniform float uBaseSize;
  uniform float uRefMag;
  varying float vAlpha;
  varying vec3 vColor;

  vec3 ciColor(float ci) {
    vec3 cBlue  = vec3(0.55, 0.66, 1.00);
    vec3 cWhite = vec3(1.00, 0.97, 0.92);
    vec3 cWarm  = vec3(1.00, 0.62, 0.34);
    float t = clamp((ci + 0.4) / 2.4, 0.0, 1.0);
    return t < 0.5 ? mix(cBlue, cWhite, t * 2.0)
                   : mix(cWhite, cWarm, (t - 0.5) * 2.0);
  }

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    float flux = pow(10.0, -0.4 * (aMag - uRefMag));
    flux = clamp(flux, 0.0, 400.0);
    float s = uBaseSize * (0.7 + 1.7 * sqrt(flux));
    gl_PointSize = clamp(s * uPixelRatio, 0.0, 44.0);

    vAlpha = clamp(0.16 + 0.7 * sqrt(flux), 0.0, 1.0);

    vec3 sc = ciColor(aCI);
    float lum = dot(sc, vec3(0.2126, 0.7152, 0.0722));
    vColor = clamp(lum + (sc - lum) * 2.2, 0.0, 1.0);
  }
`,lb=`
  precision mediump float;
  varying float vAlpha;
  varying vec3 vColor;
  uniform float uIntensity;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;
    float core = smoothstep(0.5, 0.0, d);
    float glow = pow(core, 1.7);
    gl_FragColor = vec4(vColor * glow, vAlpha * glow * uIntensity);
  }
`;async function cb(i,t=1.8){const e=await fetch(i).then(S=>{if(!S.ok)throw new Error(`stars: HTTP ${S.status} for ${i}`);return S.arrayBuffer()}),n=new DataView(e);if(n.getUint32(0,!0)!==rb)throw new Error("stars: bad magic");if(n.getUint32(4,!0)!==sb)throw new Error("stars: bad version");const r=n.getUint32(8,!0),s=n.getFloat32(16,!0),a=n.getFloat32(20,!0),o=n.getFloat32(24,!0),l=n.getFloat32(28,!0),c=new Int16Array(e,32,r*4),u=new Uint8Array(e,32,r*8),d=a>s?(a-s)/255:0,h=l>o?(l-o)/255:0,p=new Float32Array(r*3),_=new Float32Array(r),g=new Float32Array(r);for(let S=0;S<r;S++){const E=S*4,L=c[E],P=c[E+1],T=c[E+2],D=Math.hypot(L,P,T)||1,V=ab/D;p[S*3]=L*V,p[S*3+1]=P*V,p[S*3+2]=T*V,_[S]=s+u[S*8+6]*d,g[S]=o+u[S*8+7]*h}const m=new Fn;m.setAttribute("position",new rn(p,3)),m.setAttribute("aMag",new rn(_,1)),m.setAttribute("aCI",new rn(g,1));const f=new Un({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio||1,1.5)},uBaseSize:{value:2.2},uRefMag:{value:5.5},uIntensity:{value:t}},vertexShader:ob,fragmentShader:lb,transparent:!0,depthWrite:!1,blending:el}),w=new KS(m,f);return w.frustumCulled=!1,{points:w,dispose(){m.dispose(),f.dispose()}}}const Wl=Math.PI/180,Fh=Uh*Wl,Hu=Math.cos(Fh),Vu=Math.sin(Fh);function Gu(i,t){const e=Math.cos(t);return new G(e*Math.cos(i),e*Math.sin(i),Math.sin(t))}function Wu(i){return new G(i.x,Hu*i.y+Vu*i.z,-Vu*i.y+Hu*i.z)}function ub(i,t,e){const n=i*Wl,r=Gu(t,n),s=(i-90+e)*Wl,a=Gu(t,s);return{up:Wu(r).normalize(),forward:Wu(a).normalize()}}var db=Gt(`<div class="sky svelte-1bal52p" aria-hidden="true"><div class="sky-stage svelte-1bal52p"><canvas></canvas> <svg class="mountains svelte-1bal52p" viewBox="0 0 1600 360" preserveAspectRatio="xMidYMax slice"><path d="M0,360 L0,236 L86,196 L150,224 L223,150 L286,198 L360,116 L420,170
           L505,96 L560,150 L636,70 L705,140 L788,104 L860,178 L948,120
           L1020,182 L1098,128 L1170,196 L1255,138 L1330,200 L1420,150
           L1500,210 L1600,168 L1600,360 Z" class="svelte-1bal52p"></path></svg></div> <div class="sky-scrim svelte-1bal52p"></div></div>`);function hb(i,t){ir(t,!0);const e=40,n=30,r=266,s=.35,a=58;let o,l,c=Ae(!1);Oa(()=>{const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=new XS({canvas:l,antialias:!1,powerPreference:"low-power"});g.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),g.setClearColor(new ue("#1d2021"),1);const m=new YS,f=new cn(a,1,.01,10);f.position.set(0,0,0);let w=0,S=!1,E=r,L=performance.now(),P=null;function T(){const{up:x,forward:N}=ub(e,E*(Math.PI/180),n);f.up.copy(x),f.lookAt(N)}function D(){const x=o.clientWidth||window.innerWidth,N=o.clientHeight||window.innerHeight;g.setSize(x,N,!1),f.aspect=x/N,f.updateProjectionMatrix()}function V(x){const N=(x-L)/1e3;L=x,_||(E=(E+s*N)%360),T(),g.render(m,f),S||(w=requestAnimationFrame(V))}const v=()=>D();return window.addEventListener("resize",v),D(),T(),ib("/astro-deep-divedata/skybox.webp").then(x=>{if(S){x.texture.dispose();return}m.add(x.mesh),ye(c,!0),_?g.render(m,f):(L=performance.now(),w=requestAnimationFrame(V))}).catch(x=>console.error("[Sky] skybox failed to load",x)),cb("/astro-deep-divedata/stars-near.bin").then(x=>{if(S){x.dispose();return}P=x,m.add(x.points),_&&g.render(m,f)}).catch(x=>console.error("[Sky] stars failed to load",x)),()=>{S=!0,cancelAnimationFrame(w),window.removeEventListener("resize",v),P?.dispose(),g.dispose()}});var u=db(),d=st(u),h=st(d);let p;zr(h,_=>l=_,()=>l),zr(d,_=>o=_,()=>o),oe(()=>p=Qn(h,1,"sky-canvas svelte-1bal52p",null,p,{loaded:K(c)})),Ft(i,u),rr()}var fb=Gt('<li class="chapter svelte-1q25cvy"> </li>'),pb=Gt('<li><button type="button"><span class="num svelte-1q25cvy"> </span> <span class="ttl svelte-1q25cvy"> </span></button></li>'),mb=Gt("<!> <!>",1),gb=Gt('<button class="scrim svelte-1q25cvy" aria-label="Close contents"></button> <nav class="drawer svelte-1q25cvy" aria-label="Slide contents"><header class="drawer-head svelte-1q25cvy"><span class="kick svelte-1q25cvy">Astro Deep Dive</span> <h2 class="svelte-1q25cvy">Contents</h2></header> <ol class="toc svelte-1q25cvy"></ol></nav>',1),vb=Gt('<button class="menu-toggle svelte-1q25cvy" type="button"><span><span class="svelte-1q25cvy"></span><span class="svelte-1q25cvy"></span><span class="svelte-1q25cvy"></span></span> <span class="label">Contents</span></button> <!>',1);function _b(i,t){ir(t,!1);const e=(()=>{const c=[];return nh.forEach((u,d)=>{if(u.hideInMenu)return;const h=u.chapter??"";let p=c.at(-1);(!p||p.chapter!==h)&&(p={chapter:h,items:[]},c.push(p)),p.items.push({index:d,id:u.id,title:u.title})}),c})();Vd();var n=vb(),r=Re(n),s=st(r);let a;var o=pt(r,2);{var l=c=>{var u=gb(),d=Re(u),h=pt(d,2),p=pt(st(h),2);Jn(p,5,()=>e,dp,(_,g)=>{var m=mb(),f=Re(m);{var w=E=>{var L=fb(),P=st(L);oe(()=>pe(P,K(g).chapter)),Ft(E,L)};Br(f,E=>{K(g).chapter&&E(w)})}var S=pt(f,2);Jn(S,1,()=>K(g).items,E=>E.id,(E,L)=>{var P=pb(),T=st(P);let D;var V=st(T),v=st(V),x=pt(V,2),N=st(x);oe(B=>{D=Qn(T,1,"toc-item svelte-1q25cvy",null,D,{current:Cn.index===K(L).index}),pe(v,B),pe(N,K(L).title)},[()=>String(K(L).index+1).padStart(2,"0")]),Xn("click",T,()=>fm(K(L).index)),Ft(E,P)}),Ft(_,m)}),Xn("click",d,function(..._){tl?.apply(this,_)}),Ft(c,u)};Br(o,c=>{Cn.menuOpen&&c(l)})}oe(()=>{Tt(r,"aria-label",Cn.menuOpen?"Close contents":"Open contents"),Tt(r,"aria-expanded",Cn.menuOpen),a=Qn(s,1,"bars svelte-1q25cvy",null,a,{open:Cn.menuOpen})}),Xn("click",r,function(...c){tl?.apply(this,c)}),Ft(i,n),rr()}Fa(["click"]);var Gn=wp(()=>Cn),xb=Gt("<section><!></section>"),yb=Gt('<!> <!> <div class="reveal svelte-1n46o8q"><div class="slides"></div></div>',1);function Sb(i,t){ir(t,!1);let e=hd(),n=null;function r(h){const p={id:h.id};return h.transition&&(p["data-transition"]=h.transition),h.background&&(/gradient/i.test(h.background)?p["data-background-gradient"]=h.background:/^#|^rgb|^hsl/i.test(h.background)?p["data-background-color"]=h.background:p["data-background-image"]=h.background),p}const s=()=>{n&&Gn(Gn().index=n.getIndices().h)},a=h=>{const p=h.target;!(!!p&&/^(input|textarea|select)$/i.test(p.tagName))&&(h.key==="m"||h.key==="M")?tl():h.key==="Escape"&&Gn().menuOpen&&Gn(Gn().menuOpen=!1)};Oa(()=>{let h=!1;return hm(K(e)).then(p=>{h||(n=p,Gn(Gn().api=p),Gn(Gn().total=p.getTotalSlides()),s(),p.on("slidechanged",s),p.on("ready",s))}),window.addEventListener("keydown",a),()=>{h=!0,n?.off("slidechanged",s),n?.off("ready",s),window.removeEventListener("keydown",a)}}),Vd();var o=yb(),l=Re(o);hb(l,{});var c=pt(l,2);_b(c,{});var u=pt(c,2),d=st(u);Jn(d,5,()=>nh,h=>h.id,(h,p)=>{const _=Zl(()=>K(p).component);var g=xb();Mp(g,f=>({...f}),[()=>r(K(p))],void 0,void 0,"svelte-1n46o8q");var m=st(g);K(_)(m,{}),Ft(h,g)}),zr(u,h=>ye(e,h),()=>K(e)),Ft(i,o),rr()}const Oh=document.getElementById("app");if(!Oh)throw new Error("#app mount target not found");lp(Sb,{target:Oh});
//# sourceMappingURL=index-DRPPtJhH.js.map
