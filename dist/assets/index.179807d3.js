(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ql(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Yl(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?Pb(r):Yl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(He(t))return t;if(Ne(t))return t}}const Ob=/;(?![^(]*\))/g,Nb=/:([^]+)/,Rb=/\/\*.*?\*\//gs;function Pb(t){const e={};return t.replace(Rb,"").split(Ob).forEach(n=>{if(n){const r=n.split(Nb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function oc(t){let e="";if(He(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=oc(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Mb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lb=Ql(Mb);function em(t){return!!t||t===""}function Vb(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ac(t[r],e[r]);return n}function ac(t,e){if(t===e)return!0;let n=qd(t),r=qd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ni(t),r=Ni(e),n||r)return t===e;if(n=te(t),r=te(e),n||r)return n&&r?Vb(t,e):!1;if(n=Ne(t),r=Ne(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ac(t[o],e[o]))return!1}}return String(t)===String(e)}function tm(t,e){return t.findIndex(n=>ac(n,e))}const IP=t=>He(t)?t:t==null?"":te(t)||Ne(t)&&(t.toString===sm||!de(t.toString))?JSON.stringify(t,nm,2):String(t),nm=(t,e)=>e&&e.__v_isRef?nm(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:uc(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!te(e)&&!im(e)?String(e):e,Re={},bs=[],Yt=()=>{},Fb=()=>!1,Ub=/^on[^a-z]/,cc=t=>Ub.test(t),Xl=t=>t.startsWith("onUpdate:"),Je=Object.assign,Jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bb=Object.prototype.hasOwnProperty,be=(t,e)=>Bb.call(t,e),te=Array.isArray,_s=t=>lo(t)==="[object Map]",uc=t=>lo(t)==="[object Set]",qd=t=>lo(t)==="[object Date]",de=t=>typeof t=="function",He=t=>typeof t=="string",Ni=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",rm=t=>Ne(t)&&de(t.then)&&de(t.catch),sm=Object.prototype.toString,lo=t=>sm.call(t),$b=t=>lo(t).slice(8,-1),im=t=>lo(t)==="[object Object]",Zl=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,aa=Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jb=/-(\w)/g,fn=lc(t=>t.replace(jb,(e,n)=>n?n.toUpperCase():"")),qb=/\B([A-Z])/g,ss=lc(t=>t.replace(qb,"-$1").toLowerCase()),hc=lc(t=>t.charAt(0).toUpperCase()+t.slice(1)),fu=lc(t=>t?`on${hc(t)}`:""),Ri=(t,e)=>!Object.is(t,e),ca=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Sa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kd;const Kb=()=>Kd||(Kd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xt;class om{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function am(t){return new om(t)}function Hb(t,e=xt){e&&e.active&&e.effects.push(t)}function zb(){return xt}function Gb(t){xt&&xt.cleanups.push(t)}const eh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},cm=t=>(t.w&sr)>0,um=t=>(t.n&sr)>0,Wb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=sr},Qb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];cm(s)&&!um(s)?s.delete(t):e[n++]=s,s.w&=~sr,s.n&=~sr}e.length=n}},Ku=new WeakMap;let ui=0,sr=1;const Hu=30;let Gt;const Pr=Symbol(""),zu=Symbol("");class th{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hb(this,r)}run(){if(!this.active)return this.fn();let e=Gt,n=Yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Gt,Gt=this,Yn=!0,sr=1<<++ui,ui<=Hu?Wb(this):Hd(this),this.fn()}finally{ui<=Hu&&Qb(this),sr=1<<--ui,Gt=this.parent,Yn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(Hd(this),this.onStop&&this.onStop(),this.active=!1)}}function Hd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yn=!0;const lm=[];function Bs(){lm.push(Yn),Yn=!1}function $s(){const t=lm.pop();Yn=t===void 0?!0:t}function Lt(t,e,n){if(Yn&&Gt){let r=Ku.get(t);r||Ku.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=eh()),hm(s)}}function hm(t,e){let n=!1;ui<=Hu?um(t)||(t.n|=sr,n=!cm(t)):n=!t.has(Gt),n&&(t.add(Gt),Gt.deps.push(t))}function Tn(t,e,n,r,s,i){const o=Ku.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t)){const c=Pi(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?Zl(n)&&a.push(o.get("length")):(a.push(o.get(Pr)),_s(t)&&a.push(o.get(zu)));break;case"delete":te(t)||(a.push(o.get(Pr)),_s(t)&&a.push(o.get(zu)));break;case"set":_s(t)&&a.push(o.get(Pr));break}if(a.length===1)a[0]&&Gu(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Gu(eh(c))}}function Gu(t,e){const n=te(t)?t:[...t];for(const r of n)r.computed&&zd(r);for(const r of n)r.computed||zd(r)}function zd(t,e){(t!==Gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Yb=Ql("__proto__,__v_isRef,__isVue"),dm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ni)),Xb=nh(),Jb=nh(!1,!0),Zb=nh(!0),Gd=e0();function e0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ee(this);for(let i=0,o=this.length;i<o;i++)Lt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bs();const r=Ee(this)[e].apply(this,n);return $s(),r}}),t}function nh(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?m0:ym:e?mm:gm).get(r))return r;const o=te(r);if(!t&&o&&be(Gd,s))return Reflect.get(Gd,s,i);const a=Reflect.get(r,s,i);return(Ni(s)?dm.has(s):Yb(s))||(t||Lt(r,"get",s),e)?a:Me(a)?o&&Zl(s)?a:a.value:Ne(a)?t?vm(a):xn(a):a}}const t0=fm(),n0=fm(!0);function fm(t=!1){return function(n,r,s,i){let o=n[r];if(xs(o)&&Me(o)&&!Me(s))return!1;if(!t&&(!Ca(s)&&!xs(s)&&(o=Ee(o),s=Ee(s)),!te(n)&&Me(o)&&!Me(s)))return o.value=s,!0;const a=te(n)&&Zl(r)?Number(r)<n.length:be(n,r),c=Reflect.set(n,r,s,i);return n===Ee(i)&&(a?Ri(s,o)&&Tn(n,"set",r,s):Tn(n,"add",r,s)),c}}function r0(t,e){const n=be(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Tn(t,"delete",e,void 0),r}function s0(t,e){const n=Reflect.has(t,e);return(!Ni(e)||!dm.has(e))&&Lt(t,"has",e),n}function i0(t){return Lt(t,"iterate",te(t)?"length":Pr),Reflect.ownKeys(t)}const pm={get:Xb,set:t0,deleteProperty:r0,has:s0,ownKeys:i0},o0={get:Zb,set(t,e){return!0},deleteProperty(t,e){return!0}},a0=Je({},pm,{get:Jb,set:n0}),rh=t=>t,dc=t=>Reflect.getPrototypeOf(t);function $o(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ee(t),i=Ee(e);n||(e!==i&&Lt(s,"get",e),Lt(s,"get",i));const{has:o}=dc(s),a=r?rh:n?oh:Mi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function jo(t,e=!1){const n=this.__v_raw,r=Ee(n),s=Ee(t);return e||(t!==s&&Lt(r,"has",t),Lt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function qo(t,e=!1){return t=t.__v_raw,!e&&Lt(Ee(t),"iterate",Pr),Reflect.get(t,"size",t)}function Wd(t){t=Ee(t);const e=Ee(this);return dc(e).has.call(e,t)||(e.add(t),Tn(e,"add",t,t)),this}function Qd(t,e){e=Ee(e);const n=Ee(this),{has:r,get:s}=dc(n);let i=r.call(n,t);i||(t=Ee(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ri(e,o)&&Tn(n,"set",t,e):Tn(n,"add",t,e),this}function Yd(t){const e=Ee(this),{has:n,get:r}=dc(e);let s=n.call(e,t);s||(t=Ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Tn(e,"delete",t,void 0),i}function Xd(){const t=Ee(this),e=t.size!==0,n=t.clear();return e&&Tn(t,"clear",void 0,void 0),n}function Ko(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ee(o),c=e?rh:t?oh:Mi;return!t&&Lt(a,"iterate",Pr),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function Ho(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),o=_s(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?rh:e?oh:Mi;return!e&&Lt(i,"iterate",c?zu:Pr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:this}}function c0(){const t={get(i){return $o(this,i)},get size(){return qo(this)},has:jo,add:Wd,set:Qd,delete:Yd,clear:Xd,forEach:Ko(!1,!1)},e={get(i){return $o(this,i,!1,!0)},get size(){return qo(this)},has:jo,add:Wd,set:Qd,delete:Yd,clear:Xd,forEach:Ko(!1,!0)},n={get(i){return $o(this,i,!0)},get size(){return qo(this,!0)},has(i){return jo.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:Ko(!0,!1)},r={get(i){return $o(this,i,!0,!0)},get size(){return qo(this,!0)},has(i){return jo.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:Ko(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ho(i,!1,!1),n[i]=Ho(i,!0,!1),e[i]=Ho(i,!1,!0),r[i]=Ho(i,!0,!0)}),[t,n,e,r]}const[u0,l0,h0,d0]=c0();function sh(t,e){const n=e?t?d0:h0:t?l0:u0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const f0={get:sh(!1,!1)},p0={get:sh(!1,!0)},g0={get:sh(!0,!1)},gm=new WeakMap,mm=new WeakMap,ym=new WeakMap,m0=new WeakMap;function y0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function v0(t){return t.__v_skip||!Object.isExtensible(t)?0:y0($b(t))}function xn(t){return xs(t)?t:ih(t,!1,pm,f0,gm)}function w0(t){return ih(t,!1,a0,p0,mm)}function vm(t){return ih(t,!0,o0,g0,ym)}function ih(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=v0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Xn(t){return xs(t)?Xn(t.__v_raw):!!(t&&t.__v_isReactive)}function xs(t){return!!(t&&t.__v_isReadonly)}function Ca(t){return!!(t&&t.__v_isShallow)}function wm(t){return Xn(t)||xs(t)}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function Br(t){return Sa(t,"__v_skip",!0),t}const Mi=t=>Ne(t)?xn(t):t,oh=t=>Ne(t)?vm(t):t;function Im(t){Yn&&Gt&&(t=Ee(t),hm(t.dep||(t.dep=eh())))}function bm(t,e){t=Ee(t),t.dep&&Gu(t.dep)}function Me(t){return!!(t&&t.__v_isRef===!0)}function bt(t){return _m(t,!1)}function I0(t){return _m(t,!0)}function _m(t,e){return Me(t)?t:new b0(t,e)}class b0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ee(e),this._value=n?e:Mi(e)}get value(){return Im(this),this._value}set value(e){const n=this.__v_isShallow||Ca(e)||xs(e);e=n?e:Ee(e),Ri(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mi(e),bm(this))}}function Q(t){return Me(t)?t.value:t}const _0={get:(t,e,n)=>Q(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Em(t){return Xn(t)?t:new Proxy(t,_0)}function E0(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=rn(t,n);return e}class T0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function rn(t,e,n){const r=t[e];return Me(r)?r:new T0(t,e,n)}var Tm;class S0{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Tm]=!1,this._dirty=!0,this.effect=new th(e,()=>{this._dirty||(this._dirty=!0,bm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ee(this);return Im(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Tm="__v_isReadonly";function C0(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=Yt):(r=t.get,s=t.set),new S0(r,s,i||!s,n)}function Jn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){fc(i,e,n)}return s}function Kt(t,e,n,r){if(de(t)){const i=Jn(t,e,n,r);return i&&rm(i)&&i.catch(o=>{fc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Kt(t[i],e,n,r));return s}function fc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Jn(c,null,10,[t,o,a]);return}}A0(t,n,s,r)}function A0(t,e,n,r=!0){console.error(t)}let Li=!1,Wu=!1;const ft=[];let sn=0;const Es=[];let yn=null,Er=0;const Sm=Promise.resolve();let ah=null;function Wn(t){const e=ah||Sm;return t?e.then(this?t.bind(this):t):e}function k0(t){let e=sn+1,n=ft.length;for(;e<n;){const r=e+n>>>1;Vi(ft[r])<t?e=r+1:n=r}return e}function ch(t){(!ft.length||!ft.includes(t,Li&&t.allowRecurse?sn+1:sn))&&(t.id==null?ft.push(t):ft.splice(k0(t.id),0,t),Cm())}function Cm(){!Li&&!Wu&&(Wu=!0,ah=Sm.then(km))}function x0(t){const e=ft.indexOf(t);e>sn&&ft.splice(e,1)}function D0(t){te(t)?Es.push(...t):(!yn||!yn.includes(t,t.allowRecurse?Er+1:Er))&&Es.push(t),Cm()}function Jd(t,e=Li?sn+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function Am(t){if(Es.length){const e=[...new Set(Es)];if(Es.length=0,yn){yn.push(...e);return}for(yn=e,yn.sort((n,r)=>Vi(n)-Vi(r)),Er=0;Er<yn.length;Er++)yn[Er]();yn=null,Er=0}}const Vi=t=>t.id==null?1/0:t.id,O0=(t,e)=>{const n=Vi(t)-Vi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function km(t){Wu=!1,Li=!0,ft.sort(O0);const e=Yt;try{for(sn=0;sn<ft.length;sn++){const n=ft[sn];n&&n.active!==!1&&Jn(n,null,14)}}finally{sn=0,ft.length=0,Am(),Li=!1,ah=null,(ft.length||Es.length)&&km()}}function N0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Re;d&&(s=n.map(p=>He(p)?p.trim():p)),h&&(s=n.map(Pi))}let a,c=r[a=fu(e)]||r[a=fu(fn(e))];!c&&i&&(c=r[a=fu(ss(e))]),c&&Kt(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Kt(u,t,6,s)}}function xm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const c=u=>{const l=xm(u,e,!0);l&&(a=!0,Je(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ne(t)&&r.set(t,null),null):(te(i)?i.forEach(c=>o[c]=null):Je(o,i),Ne(t)&&r.set(t,o),o)}function pc(t,e){return!t||!cc(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,ss(e))||be(t,e))}let it=null,gc=null;function Aa(t){const e=it;return it=t,gc=t&&t.type.__scopeId||null,e}function R0(t){gc=t}function P0(){gc=null}function wn(t,e=it,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&uf(-1);const i=Aa(e);let o;try{o=t(...s)}finally{Aa(i),r._d&&uf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pu(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:f,inheritAttrs:m}=t;let I,b;const k=Aa(t);try{if(n.shapeFlag&4){const T=s||r;I=nn(l.call(T,T,h,i,p,d,f)),b=c}else{const T=e;I=nn(T.length>1?T(i,{attrs:c,slots:a,emit:u}):T(i,null)),b=e.props?c:M0(c)}}catch(T){vi.length=0,fc(T,t,1),I=Oe(Ht)}let _=I;if(b&&m!==!1){const T=Object.keys(b),{shapeFlag:R}=_;T.length&&R&7&&(o&&T.some(Xl)&&(b=L0(b,o)),_=ir(_,b))}return n.dirs&&(_=ir(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),I=_,Aa(k),I}const M0=t=>{let e;for(const n in t)(n==="class"||n==="style"||cc(n))&&((e||(e={}))[n]=t[n]);return e},L0=(t,e)=>{const n={};for(const r in t)(!Xl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function V0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zd(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!pc(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Zd(r,o,u):!0:!!o;return!1}function Zd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pc(n,i))return!0}return!1}function F0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const U0=t=>t.__isSuspense;function B0(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):D0(t)}function Ts(t,e){if(Ye){let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[t]=e}}function Nt(t,e,n=!1){const r=Ye||it;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r.proxy):e}}function $0(t,e){return uh(t,null,e)}const zo={};function at(t,e,n){return uh(t,e,n)}function uh(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Re){const a=Ye;let c,u=!1,l=!1;if(Me(t)?(c=()=>t.value,u=Ca(t)):Xn(t)?(c=()=>t,r=!0):te(t)?(l=!0,u=t.some(_=>Xn(_)||Ca(_)),c=()=>t.map(_=>{if(Me(_))return _.value;if(Xn(_))return Or(_);if(de(_))return Jn(_,a,2)})):de(t)?e?c=()=>Jn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Kt(t,a,3,[d])}:c=Yt,e&&r){const _=c;c=()=>Or(_())}let h,d=_=>{h=b.onStop=()=>{Jn(_,a,4)}},p;if($i)if(d=Yt,e?n&&Kt(e,a,3,[c(),l?[]:void 0,d]):c(),s==="sync"){const _=O_();p=_.__watcherHandles||(_.__watcherHandles=[])}else return Yt;let f=l?new Array(t.length).fill(zo):zo;const m=()=>{if(!!b.active)if(e){const _=b.run();(r||u||(l?_.some((T,R)=>Ri(T,f[R])):Ri(_,f)))&&(h&&h(),Kt(e,a,3,[_,f===zo?void 0:l&&f[0]===zo?[]:f,d]),f=_)}else b.run()};m.allowRecurse=!!e;let I;s==="sync"?I=m:s==="post"?I=()=>Et(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),I=()=>ch(m));const b=new th(c,I);e?n?m():f=b.run():s==="post"?Et(b.run.bind(b),a&&a.suspense):b.run();const k=()=>{b.stop(),a&&a.scope&&Jl(a.scope.effects,b)};return p&&p.push(k),k}function j0(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?Dm(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Ye;Ds(this);const a=uh(s,i.bind(r),n);return o?Ds(o):Lr(),a}function Dm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Or(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))Or(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)Or(t[n],e);else if(uc(t)||_s(t))t.forEach(n=>{Or(n,e)});else if(im(t))for(const n in t)Or(t[n],e);return t}function Om(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vc(()=>{t.isMounted=!0}),wc(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],q0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},setup(t,{slots:e}){const n=ho(),r=Om();let s;return()=>{const i=e.default&&lh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const m of i)if(m.type!==Ht){o=m;break}}const a=Ee(t),{mode:c}=a;if(r.isLeaving)return gu(o);const u=ef(o);if(!u)return gu(o);const l=Fi(u,a,r,n);Ui(u,l);const h=n.subTree,d=h&&ef(h);let p=!1;const{getTransitionKey:f}=u.type;if(f){const m=f();s===void 0?s=m:m!==s&&(s=m,p=!0)}if(d&&d.type!==Ht&&(!Tr(u,d)||p)){const m=Fi(d,a,r,n);if(Ui(d,m),c==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},gu(o);c==="in-out"&&u.type!==Ht&&(m.delayLeave=(I,b,k)=>{const _=Rm(r,d);_[String(d.key)]=d,I._leaveCb=()=>{b(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=k})}return o}}},Nm=q0;function Rm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Fi(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:f,onBeforeAppear:m,onAppear:I,onAfterAppear:b,onAppearCancelled:k}=e,_=String(t.key),T=Rm(n,t),R=(x,X)=>{x&&Kt(x,r,9,X)},S=(x,X)=>{const Z=X[1];R(x,X),te(x)?x.every(le=>le.length<=1)&&Z():x.length<=1&&Z()},O={mode:i,persisted:o,beforeEnter(x){let X=a;if(!n.isMounted)if(s)X=m||a;else return;x._leaveCb&&x._leaveCb(!0);const Z=T[_];Z&&Tr(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),R(X,[x])},enter(x){let X=c,Z=u,le=l;if(!n.isMounted)if(s)X=I||c,Z=b||u,le=k||l;else return;let K=!1;const ae=x._enterCb=we=>{K||(K=!0,we?R(le,[x]):R(Z,[x]),O.delayedLeave&&O.delayedLeave(),x._enterCb=void 0)};X?S(X,[x,ae]):ae()},leave(x,X){const Z=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return X();R(h,[x]);let le=!1;const K=x._leaveCb=ae=>{le||(le=!0,X(),ae?R(f,[x]):R(p,[x]),x._leaveCb=void 0,T[Z]===t&&delete T[Z])};T[Z]=t,d?S(d,[x,K]):K()},clone(x){return Fi(x,e,n,r)}};return O}function gu(t){if(mc(t))return t=ir(t),t.children=null,t}function ef(t){return mc(t)?t.children?t.children[0]:void 0:t}function Ui(t,e){t.shapeFlag&6&&t.component?Ui(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lh(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Dt?(o.patchFlag&128&&s++,r=r.concat(lh(o.children,e,a))):(e||o.type!==Ht)&&r.push(a!=null?ir(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ut(t){return de(t)?{setup:t,name:t.name}:t}const mi=t=>!!t.type.__asyncLoader,mc=t=>t.type.__isKeepAlive;function K0(t,e){Pm(t,"a",e)}function H0(t,e){Pm(t,"da",e)}function Pm(t,e,n=Ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(yc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)mc(s.parent.vnode)&&z0(r,e,n,s),s=s.parent}}function z0(t,e,n,r){const s=yc(e,t,r,!0);Lm(()=>{Jl(r[e],s)},n)}function yc(t,e,n=Ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bs(),Ds(n);const a=Kt(e,n,t,o);return Lr(),$s(),a});return r?s.unshift(i):s.push(i),i}}const Dn=t=>(e,n=Ye)=>(!$i||t==="sp")&&yc(t,(...r)=>e(...r),n),G0=Dn("bm"),vc=Dn("m"),W0=Dn("bu"),Mm=Dn("u"),wc=Dn("bum"),Lm=Dn("um"),Q0=Dn("sp"),Y0=Dn("rtg"),X0=Dn("rtc");function J0(t,e=Ye){yc("ec",t,e)}function bP(t,e){const n=it;if(n===null)return t;const r=Ec(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Re]=e[i];o&&(de(o)&&(o={mounted:o,updated:o}),o.deep&&Or(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function fr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Bs(),Kt(c,n,8,[t.el,a,t,e]),$s())}}const hh="components";function Mr(t,e){return Fm(hh,t,!0,e)||t}const Vm=Symbol();function Ic(t){return He(t)?Fm(hh,t,!1)||t:t||Vm}function Fm(t,e,n=!0,r=!1){const s=it||Ye;if(s){const i=s.type;if(t===hh){const a=k_(i,!1);if(a&&(a===e||a===fn(e)||a===hc(fn(e))))return i}const o=tf(s[t]||i[t],e)||tf(s.appContext[t],e);return!o&&r?i:o}}function tf(t,e){return t&&(t[e]||t[fn(e)]||t[hc(fn(e))])}function _P(t,e,n,r){let s;const i=n&&n[r];if(te(t)||He(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Z0(t,e,n={},r,s){if(it.isCE||it.parent&&mi(it.parent)&&it.parent.isCE)return e!=="default"&&(n.name=e),Oe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Rt();const o=i&&Um(i(n)),a=ph(Dt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Um(t){return t.some(e=>xa(e)?!(e.type===Ht||e.type===Dt&&!Um(e.children)):!0)?t:null}const Qu=t=>t?Xm(t)?Ec(t)||t.proxy:Qu(t.parent):null,yi=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qu(t.parent),$root:t=>Qu(t.root),$emit:t=>t.emit,$options:t=>dh(t),$forceUpdate:t=>t.f||(t.f=()=>ch(t.update)),$nextTick:t=>t.n||(t.n=Wn.bind(t.proxy)),$watch:t=>j0.bind(t)}),mu=(t,e)=>t!==Re&&!t.__isScriptSetup&&be(t,e),e_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(mu(r,e))return o[e]=1,r[e];if(s!==Re&&be(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&be(u,e))return o[e]=3,i[e];if(n!==Re&&be(n,e))return o[e]=4,n[e];Yu&&(o[e]=0)}}const l=yi[e];let h,d;if(l)return e==="$attrs"&&Lt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&be(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return mu(s,e)?(s[e]=n,!0):r!==Re&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&be(t,o)||mu(e,o)||(a=i[0])&&be(a,o)||be(r,o)||be(yi,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Yu=!0;function t_(t){const e=dh(t),n=t.proxy,r=t.ctx;Yu=!1,e.beforeCreate&&nf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:f,activated:m,deactivated:I,beforeDestroy:b,beforeUnmount:k,destroyed:_,unmounted:T,render:R,renderTracked:S,renderTriggered:O,errorCaptured:x,serverPrefetch:X,expose:Z,inheritAttrs:le,components:K,directives:ae,filters:we}=e;if(u&&n_(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const me=o[pe];de(me)&&(r[pe]=me.bind(n))}if(s){const pe=s.call(n,n);Ne(pe)&&(t.data=xn(pe))}if(Yu=!0,i)for(const pe in i){const me=i[pe],tt=de(me)?me.bind(n,n):de(me.get)?me.get.bind(n,n):Yt,dt=!de(me)&&de(me.set)?me.set.bind(n):Yt,Ge=_e({get:tt,set:dt});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:$e=>Ge.value=$e})}if(a)for(const pe in a)Bm(a[pe],r,n,pe);if(c){const pe=de(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(me=>{Ts(me,pe[me])})}l&&nf(l,t,"c");function fe(pe,me){te(me)?me.forEach(tt=>pe(tt.bind(n))):me&&pe(me.bind(n))}if(fe(G0,h),fe(vc,d),fe(W0,p),fe(Mm,f),fe(K0,m),fe(H0,I),fe(J0,x),fe(X0,S),fe(Y0,O),fe(wc,k),fe(Lm,T),fe(Q0,X),te(Z))if(Z.length){const pe=t.exposed||(t.exposed={});Z.forEach(me=>{Object.defineProperty(pe,me,{get:()=>n[me],set:tt=>n[me]=tt})})}else t.exposed||(t.exposed={});R&&t.render===Yt&&(t.render=R),le!=null&&(t.inheritAttrs=le),K&&(t.components=K),ae&&(t.directives=ae)}function n_(t,e,n=Yt,r=!1){te(t)&&(t=Xu(t));for(const s in t){const i=t[s];let o;Ne(i)?"default"in i?o=Nt(i.from||s,i.default,!0):o=Nt(i.from||s):o=Nt(i),Me(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function nf(t,e,n){Kt(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bm(t,e,n,r){const s=r.includes(".")?Dm(n,r):()=>n[r];if(He(t)){const i=e[t];de(i)&&at(s,i)}else if(de(t))at(s,t.bind(n));else if(Ne(t))if(te(t))t.forEach(i=>Bm(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&at(s,i,t)}}function dh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ka(c,u,o,!0)),ka(c,e,o)),Ne(e)&&i.set(e,c),c}function ka(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ka(t,i,n,!0),s&&s.forEach(o=>ka(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=r_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const r_={data:rf,props:wr,emits:wr,methods:wr,computed:wr,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:wr,directives:wr,watch:i_,provide:rf,inject:s_};function rf(t,e){return e?t?function(){return Je(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function s_(t,e){return wr(Xu(t),Xu(e))}function Xu(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function wr(t,e){return t?Je(Je(Object.create(null),t),e):e}function i_(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function o_(t,e,n,r=!1){const s={},i={};Sa(i,_c,1),t.propsDefaults=Object.create(null),$m(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:w0(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function a_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ee(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(pc(t.emitsOptions,d))continue;const p=e[d];if(c)if(be(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const f=fn(d);s[f]=Ju(c,a,f,p,t,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{$m(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!be(e,h)&&((l=ss(h))===h||!be(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=Ju(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!be(e,h)&&!0)&&(delete i[h],u=!0)}u&&Tn(t,"set","$attrs")}function $m(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(aa(c))continue;const u=e[c];let l;s&&be(s,l=fn(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:pc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ee(n),u=a||Re;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Ju(s,c,h,u[h],t,!be(u,h))}}return o}function Ju(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&de(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Ds(s),r=u[n]=c.call(null,e),Lr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ss(n))&&(r=!0))}return r}function jm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!de(t)){const l=h=>{c=!0;const[d,p]=jm(h,e,!0);Je(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Ne(t)&&r.set(t,bs),bs;if(te(i))for(let l=0;l<i.length;l++){const h=fn(i[l]);sf(h)&&(o[h]=Re)}else if(i)for(const l in i){const h=fn(l);if(sf(h)){const d=i[l],p=o[h]=te(d)||de(d)?{type:d}:Object.assign({},d);if(p){const f=cf(Boolean,p.type),m=cf(String,p.type);p[0]=f>-1,p[1]=m<0||f<m,(f>-1||be(p,"default"))&&a.push(h)}}}const u=[o,a];return Ne(t)&&r.set(t,u),u}function sf(t){return t[0]!=="$"}function of(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function af(t,e){return of(t)===of(e)}function cf(t,e){return te(e)?e.findIndex(n=>af(n,t)):de(e)&&af(e,t)?0:-1}const qm=t=>t[0]==="_"||t==="$stable",fh=t=>te(t)?t.map(nn):[nn(t)],c_=(t,e,n)=>{if(e._n)return e;const r=wn((...s)=>fh(e(...s)),n);return r._c=!1,r},Km=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qm(s))continue;const i=t[s];if(de(i))e[s]=c_(s,i,r);else if(i!=null){const o=fh(i);e[s]=()=>o}}},Hm=(t,e)=>{const n=fh(e);t.slots.default=()=>n},u_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ee(e),Sa(e,"_",n)):Km(e,t.slots={})}else t.slots={},e&&Hm(t,e);Sa(t.slots,_c,1)},l_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Km(e,s)),o=e}else e&&(Hm(t,e),o={default:1});if(i)for(const a in s)!qm(a)&&!(a in o)&&delete s[a]};function zm(){return{app:null,config:{isNativeTag:Fb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let h_=0;function d_(t,e){return function(r,s=null){de(r)||(r=Object.assign({},r)),s!=null&&!Ne(s)&&(s=null);const i=zm(),o=new Set;let a=!1;const c=i.app={_uid:h_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:N_,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(c,...l)):de(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Oe(r,s);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Ec(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Zu(t,e,n,r,s=!1){if(te(t)){t.forEach((d,p)=>Zu(d,e&&(te(e)?e[p]:e),n,r,s));return}if(mi(r)&&!s)return;const i=r.shapeFlag&4?Ec(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(He(u)?(l[u]=null,be(h,u)&&(h[u]=null)):Me(u)&&(u.value=null)),de(c))Jn(c,a,12,[o,l]);else{const d=He(c),p=Me(c);if(d||p){const f=()=>{if(t.f){const m=d?be(h,c)?h[c]:l[c]:c.value;s?te(m)&&Jl(m,i):te(m)?m.includes(i)||m.push(i):d?(l[c]=[i],be(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,be(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(f.id=-1,Et(f,n)):f()}}}const Et=B0;function f_(t){return p_(t)}function p_(t,e){const n=Kb();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=Yt,insertStaticContent:f}=t,m=(g,y,C,D=null,M=null,$=null,z=!1,B=null,v=!!y.dynamicChildren)=>{if(g===y)return;g&&!Tr(g,y)&&(D=L(g),$e(g,M,$,!0),g=null),y.patchFlag===-2&&(v=!1,y.dynamicChildren=null);const{type:w,ref:V,shapeFlag:F}=y;switch(w){case bc:I(g,y,C,D);break;case Ht:b(g,y,C,D);break;case ua:g==null&&k(y,C,D,z);break;case Dt:K(g,y,C,D,M,$,z,B,v);break;default:F&1?R(g,y,C,D,M,$,z,B,v):F&6?ae(g,y,C,D,M,$,z,B,v):(F&64||F&128)&&w.process(g,y,C,D,M,$,z,B,v,ye)}V!=null&&M&&Zu(V,g&&g.ref,$,y||g,!y)},I=(g,y,C,D)=>{if(g==null)r(y.el=a(y.children),C,D);else{const M=y.el=g.el;y.children!==g.children&&u(M,y.children)}},b=(g,y,C,D)=>{g==null?r(y.el=c(y.children||""),C,D):y.el=g.el},k=(g,y,C,D)=>{[g.el,g.anchor]=f(g.children,y,C,D,g.el,g.anchor)},_=({el:g,anchor:y},C,D)=>{let M;for(;g&&g!==y;)M=d(g),r(g,C,D),g=M;r(y,C,D)},T=({el:g,anchor:y})=>{let C;for(;g&&g!==y;)C=d(g),s(g),g=C;s(y)},R=(g,y,C,D,M,$,z,B,v)=>{z=z||y.type==="svg",g==null?S(y,C,D,M,$,z,B,v):X(g,y,M,$,z,B,v)},S=(g,y,C,D,M,$,z,B)=>{let v,w;const{type:V,props:F,shapeFlag:j,transition:q,dirs:Y}=g;if(v=g.el=o(g.type,$,F&&F.is,F),j&8?l(v,g.children):j&16&&x(g.children,v,null,D,M,$&&V!=="foreignObject",z,B),Y&&fr(g,null,D,"created"),F){for(const ve in F)ve!=="value"&&!aa(ve)&&i(v,ve,null,F[ve],$,g.children,D,M,A);"value"in F&&i(v,"value",null,F.value),(w=F.onVnodeBeforeMount)&&tn(w,D,g)}O(v,g,g.scopeId,z,D),Y&&fr(g,null,D,"beforeMount");const oe=(!M||M&&!M.pendingBranch)&&q&&!q.persisted;oe&&q.beforeEnter(v),r(v,y,C),((w=F&&F.onVnodeMounted)||oe||Y)&&Et(()=>{w&&tn(w,D,g),oe&&q.enter(v),Y&&fr(g,null,D,"mounted")},M)},O=(g,y,C,D,M)=>{if(C&&p(g,C),D)for(let $=0;$<D.length;$++)p(g,D[$]);if(M){let $=M.subTree;if(y===$){const z=M.vnode;O(g,z,z.scopeId,z.slotScopeIds,M.parent)}}},x=(g,y,C,D,M,$,z,B,v=0)=>{for(let w=v;w<g.length;w++){const V=g[w]=B?Bn(g[w]):nn(g[w]);m(null,V,y,C,D,M,$,z,B)}},X=(g,y,C,D,M,$,z)=>{const B=y.el=g.el;let{patchFlag:v,dynamicChildren:w,dirs:V}=y;v|=g.patchFlag&16;const F=g.props||Re,j=y.props||Re;let q;C&&pr(C,!1),(q=j.onVnodeBeforeUpdate)&&tn(q,C,y,g),V&&fr(y,g,C,"beforeUpdate"),C&&pr(C,!0);const Y=M&&y.type!=="foreignObject";if(w?Z(g.dynamicChildren,w,B,C,D,Y,$):z||me(g,y,B,null,C,D,Y,$,!1),v>0){if(v&16)le(B,y,F,j,C,D,M);else if(v&2&&F.class!==j.class&&i(B,"class",null,j.class,M),v&4&&i(B,"style",F.style,j.style,M),v&8){const oe=y.dynamicProps;for(let ve=0;ve<oe.length;ve++){const Ae=oe[ve],At=F[Ae],$t=j[Ae];($t!==At||Ae==="value")&&i(B,Ae,At,$t,M,g.children,C,D,A)}}v&1&&g.children!==y.children&&l(B,y.children)}else!z&&w==null&&le(B,y,F,j,C,D,M);((q=j.onVnodeUpdated)||V)&&Et(()=>{q&&tn(q,C,y,g),V&&fr(y,g,C,"updated")},D)},Z=(g,y,C,D,M,$,z)=>{for(let B=0;B<y.length;B++){const v=g[B],w=y[B],V=v.el&&(v.type===Dt||!Tr(v,w)||v.shapeFlag&70)?h(v.el):C;m(v,w,V,null,D,M,$,z,!0)}},le=(g,y,C,D,M,$,z)=>{if(C!==D){if(C!==Re)for(const B in C)!aa(B)&&!(B in D)&&i(g,B,C[B],null,z,y.children,M,$,A);for(const B in D){if(aa(B))continue;const v=D[B],w=C[B];v!==w&&B!=="value"&&i(g,B,w,v,z,y.children,M,$,A)}"value"in D&&i(g,"value",C.value,D.value)}},K=(g,y,C,D,M,$,z,B,v)=>{const w=y.el=g?g.el:a(""),V=y.anchor=g?g.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:q}=y;q&&(B=B?B.concat(q):q),g==null?(r(w,C,D),r(V,C,D),x(y.children,C,V,M,$,z,B,v)):F>0&&F&64&&j&&g.dynamicChildren?(Z(g.dynamicChildren,j,C,M,$,z,B),(y.key!=null||M&&y===M.subTree)&&Gm(g,y,!0)):me(g,y,C,V,M,$,z,B,v)},ae=(g,y,C,D,M,$,z,B,v)=>{y.slotScopeIds=B,g==null?y.shapeFlag&512?M.ctx.activate(y,C,D,z,v):we(y,C,D,M,$,z,v):Te(g,y,v)},we=(g,y,C,D,M,$,z)=>{const B=g.component=E_(g,D,M);if(mc(g)&&(B.ctx.renderer=ye),T_(B),B.asyncDep){if(M&&M.registerDep(B,fe),!g.el){const v=B.subTree=Oe(Ht);b(null,v,y,C)}return}fe(B,g,y,C,M,$,z)},Te=(g,y,C)=>{const D=y.component=g.component;if(V0(g,y,C))if(D.asyncDep&&!D.asyncResolved){pe(D,y,C);return}else D.next=y,x0(D.update),D.update();else y.el=g.el,D.vnode=y},fe=(g,y,C,D,M,$,z)=>{const B=()=>{if(g.isMounted){let{next:V,bu:F,u:j,parent:q,vnode:Y}=g,oe=V,ve;pr(g,!1),V?(V.el=Y.el,pe(g,V,z)):V=Y,F&&ca(F),(ve=V.props&&V.props.onVnodeBeforeUpdate)&&tn(ve,q,V,Y),pr(g,!0);const Ae=pu(g),At=g.subTree;g.subTree=Ae,m(At,Ae,h(At.el),L(At),g,M,$),V.el=Ae.el,oe===null&&F0(g,Ae.el),j&&Et(j,M),(ve=V.props&&V.props.onVnodeUpdated)&&Et(()=>tn(ve,q,V,Y),M)}else{let V;const{el:F,props:j}=y,{bm:q,m:Y,parent:oe}=g,ve=mi(y);if(pr(g,!1),q&&ca(q),!ve&&(V=j&&j.onVnodeBeforeMount)&&tn(V,oe,y),pr(g,!0),F&&ie){const Ae=()=>{g.subTree=pu(g),ie(F,g.subTree,g,M,null)};ve?y.type.__asyncLoader().then(()=>!g.isUnmounted&&Ae()):Ae()}else{const Ae=g.subTree=pu(g);m(null,Ae,C,D,g,M,$),y.el=Ae.el}if(Y&&Et(Y,M),!ve&&(V=j&&j.onVnodeMounted)){const Ae=y;Et(()=>tn(V,oe,Ae),M)}(y.shapeFlag&256||oe&&mi(oe.vnode)&&oe.vnode.shapeFlag&256)&&g.a&&Et(g.a,M),g.isMounted=!0,y=C=D=null}},v=g.effect=new th(B,()=>ch(w),g.scope),w=g.update=()=>v.run();w.id=g.uid,pr(g,!0),w()},pe=(g,y,C)=>{y.component=g;const D=g.vnode.props;g.vnode=y,g.next=null,a_(g,y.props,D,C),l_(g,y.children,C),Bs(),Jd(),$s()},me=(g,y,C,D,M,$,z,B,v=!1)=>{const w=g&&g.children,V=g?g.shapeFlag:0,F=y.children,{patchFlag:j,shapeFlag:q}=y;if(j>0){if(j&128){dt(w,F,C,D,M,$,z,B,v);return}else if(j&256){tt(w,F,C,D,M,$,z,B,v);return}}q&8?(V&16&&A(w,M,$),F!==w&&l(C,F)):V&16?q&16?dt(w,F,C,D,M,$,z,B,v):A(w,M,$,!0):(V&8&&l(C,""),q&16&&x(F,C,D,M,$,z,B,v))},tt=(g,y,C,D,M,$,z,B,v)=>{g=g||bs,y=y||bs;const w=g.length,V=y.length,F=Math.min(w,V);let j;for(j=0;j<F;j++){const q=y[j]=v?Bn(y[j]):nn(y[j]);m(g[j],q,C,null,M,$,z,B,v)}w>V?A(g,M,$,!0,!1,F):x(y,C,D,M,$,z,B,v,F)},dt=(g,y,C,D,M,$,z,B,v)=>{let w=0;const V=y.length;let F=g.length-1,j=V-1;for(;w<=F&&w<=j;){const q=g[w],Y=y[w]=v?Bn(y[w]):nn(y[w]);if(Tr(q,Y))m(q,Y,C,null,M,$,z,B,v);else break;w++}for(;w<=F&&w<=j;){const q=g[F],Y=y[j]=v?Bn(y[j]):nn(y[j]);if(Tr(q,Y))m(q,Y,C,null,M,$,z,B,v);else break;F--,j--}if(w>F){if(w<=j){const q=j+1,Y=q<V?y[q].el:D;for(;w<=j;)m(null,y[w]=v?Bn(y[w]):nn(y[w]),C,Y,M,$,z,B,v),w++}}else if(w>j)for(;w<=F;)$e(g[w],M,$,!0),w++;else{const q=w,Y=w,oe=new Map;for(w=Y;w<=j;w++){const kt=y[w]=v?Bn(y[w]):nn(y[w]);kt.key!=null&&oe.set(kt.key,w)}let ve,Ae=0;const At=j-Y+1;let $t=!1,Bd=0;const Js=new Array(At);for(w=0;w<At;w++)Js[w]=0;for(w=q;w<=F;w++){const kt=g[w];if(Ae>=At){$e(kt,M,$,!0);continue}let en;if(kt.key!=null)en=oe.get(kt.key);else for(ve=Y;ve<=j;ve++)if(Js[ve-Y]===0&&Tr(kt,y[ve])){en=ve;break}en===void 0?$e(kt,M,$,!0):(Js[en-Y]=w+1,en>=Bd?Bd=en:$t=!0,m(kt,y[en],C,null,M,$,z,B,v),Ae++)}const $d=$t?g_(Js):bs;for(ve=$d.length-1,w=At-1;w>=0;w--){const kt=Y+w,en=y[kt],jd=kt+1<V?y[kt+1].el:D;Js[w]===0?m(null,en,C,jd,M,$,z,B,v):$t&&(ve<0||w!==$d[ve]?Ge(en,C,jd,2):ve--)}}},Ge=(g,y,C,D,M=null)=>{const{el:$,type:z,transition:B,children:v,shapeFlag:w}=g;if(w&6){Ge(g.component.subTree,y,C,D);return}if(w&128){g.suspense.move(y,C,D);return}if(w&64){z.move(g,y,C,ye);return}if(z===Dt){r($,y,C);for(let F=0;F<v.length;F++)Ge(v[F],y,C,D);r(g.anchor,y,C);return}if(z===ua){_(g,y,C);return}if(D!==2&&w&1&&B)if(D===0)B.beforeEnter($),r($,y,C),Et(()=>B.enter($),M);else{const{leave:F,delayLeave:j,afterLeave:q}=B,Y=()=>r($,y,C),oe=()=>{F($,()=>{Y(),q&&q()})};j?j($,Y,oe):oe()}else r($,y,C)},$e=(g,y,C,D=!1,M=!1)=>{const{type:$,props:z,ref:B,children:v,dynamicChildren:w,shapeFlag:V,patchFlag:F,dirs:j}=g;if(B!=null&&Zu(B,null,C,g,!0),V&256){y.ctx.deactivate(g);return}const q=V&1&&j,Y=!mi(g);let oe;if(Y&&(oe=z&&z.onVnodeBeforeUnmount)&&tn(oe,y,g),V&6)P(g.component,C,D);else{if(V&128){g.suspense.unmount(C,D);return}q&&fr(g,null,y,"beforeUnmount"),V&64?g.type.remove(g,y,C,M,ye,D):w&&($!==Dt||F>0&&F&64)?A(w,y,C,!1,!0):($===Dt&&F&384||!M&&V&16)&&A(v,y,C),D&&Bt(g)}(Y&&(oe=z&&z.onVnodeUnmounted)||q)&&Et(()=>{oe&&tn(oe,y,g),q&&fr(g,null,y,"unmounted")},C)},Bt=g=>{const{type:y,el:C,anchor:D,transition:M}=g;if(y===Dt){Ct(C,D);return}if(y===ua){T(g);return}const $=()=>{s(C),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(g.shapeFlag&1&&M&&!M.persisted){const{leave:z,delayLeave:B}=M,v=()=>z(C,$);B?B(g.el,$,v):v()}else $()},Ct=(g,y)=>{let C;for(;g!==y;)C=d(g),s(g),g=C;s(y)},P=(g,y,C)=>{const{bum:D,scope:M,update:$,subTree:z,um:B}=g;D&&ca(D),M.stop(),$&&($.active=!1,$e(z,g,y,C)),B&&Et(B,y),Et(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},A=(g,y,C,D=!1,M=!1,$=0)=>{for(let z=$;z<g.length;z++)$e(g[z],y,C,D,M)},L=g=>g.shapeFlag&6?L(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),W=(g,y,C)=>{g==null?y._vnode&&$e(y._vnode,null,null,!0):m(y._vnode||null,g,y,null,null,null,C),Jd(),Am(),y._vnode=g},ye={p:m,um:$e,m:Ge,r:Bt,mt:we,mc:x,pc:me,pbc:Z,n:L,o:t};let Ce,ie;return e&&([Ce,ie]=e(ye)),{render:W,hydrate:Ce,createApp:d_(W,Ce)}}function pr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gm(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Bn(s[i]),a.el=o.el),n||Gm(o,a)),a.type===bc&&(a.el=o.el)}}function g_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const m_=t=>t.__isTeleport,Dt=Symbol(void 0),bc=Symbol(void 0),Ht=Symbol(void 0),ua=Symbol(void 0),vi=[];let Wt=null;function Rt(t=!1){vi.push(Wt=t?null:[])}function y_(){vi.pop(),Wt=vi[vi.length-1]||null}let Bi=1;function uf(t){Bi+=t}function Wm(t){return t.dynamicChildren=Bi>0?Wt||bs:null,y_(),Bi>0&&Wt&&Wt.push(t),t}function un(t,e,n,r,s,i){return Wm(Qt(t,e,n,r,s,i,!0))}function ph(t,e,n,r,s){return Wm(Oe(t,e,n,r,s,!0))}function xa(t){return t?t.__v_isVNode===!0:!1}function Tr(t,e){return t.type===e.type&&t.key===e.key}const _c="__vInternal",Qm=({key:t})=>t!=null?t:null,la=({ref:t,ref_key:e,ref_for:n})=>t!=null?He(t)||Me(t)||de(t)?{i:it,r:t,k:e,f:!!n}:t:null;function Qt(t,e=null,n=null,r=0,s=null,i=t===Dt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qm(e),ref:e&&la(e),scopeId:gc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:it};return a?(gh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Bi>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const Oe=v_;function v_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Vm)&&(t=Ht),xa(t)){const a=ir(t,e,!0);return n&&gh(a,n),Bi>0&&!i&&Wt&&(a.shapeFlag&6?Wt[Wt.indexOf(t)]=a:Wt.push(a)),a.patchFlag|=-2,a}if(x_(t)&&(t=t.__vccOpts),e){e=w_(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=oc(a)),Ne(c)&&(wm(c)&&!te(c)&&(c=Je({},c)),e.style=Yl(c))}const o=He(t)?1:U0(t)?128:m_(t)?64:Ne(t)?4:de(t)?2:0;return Qt(t,e,n,r,s,o,i,!0)}function w_(t){return t?wm(t)||_c in t?Je({},t):t:null}function ir(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?I_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qm(a),ref:e&&e.ref?n&&s?te(s)?s.concat(la(e)):[s,la(e)]:la(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Da(t=" ",e=0){return Oe(bc,null,t,e)}function Ym(t,e){const n=Oe(ua,null,t);return n.staticCount=e,n}function EP(t="",e=!1){return e?(Rt(),ph(Ht,null,t)):Oe(Ht,null,t)}function nn(t){return t==null||typeof t=="boolean"?Oe(Ht):te(t)?Oe(Dt,null,t.slice()):typeof t=="object"?Bn(t):Oe(bc,null,String(t))}function Bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function gh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),gh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(_c in e)?e._ctx=it:s===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:it},n=32):(e=String(e),r&64?(n=16,e=[Da(e)]):n=8);t.children=e,t.shapeFlag|=n}function I_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=oc([e.class,r.class]));else if(s==="style")e.style=Yl([e.style,r.style]);else if(cc(s)){const i=e[s],o=r[s];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){Kt(t,e,7,[n,r])}const b_=zm();let __=0;function E_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||b_,i={uid:__++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new om(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jm(r,s),emitsOptions:xm(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=N0.bind(null,i),t.ce&&t.ce(i),i}let Ye=null;const ho=()=>Ye||it,Ds=t=>{Ye=t,t.scope.on()},Lr=()=>{Ye&&Ye.scope.off(),Ye=null};function Xm(t){return t.vnode.shapeFlag&4}let $i=!1;function T_(t,e=!1){$i=e;const{props:n,children:r}=t.vnode,s=Xm(t);o_(t,n,s,e),u_(t,r);const i=s?S_(t,e):void 0;return $i=!1,i}function S_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Br(new Proxy(t.ctx,e_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?A_(t):null;Ds(t),Bs();const i=Jn(r,t,0,[t.props,s]);if($s(),Lr(),rm(i)){if(i.then(Lr,Lr),e)return i.then(o=>{lf(t,o,e)}).catch(o=>{fc(o,t,0)});t.asyncDep=i}else lf(t,i,e)}else Jm(t,e)}function lf(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Em(e)),Jm(t,n)}let hf;function Jm(t,e,n){const r=t.type;if(!t.render){if(!e&&hf&&!r.render){const s=r.template||dh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Je(Je({isCustomElement:i,delimiters:a},o),c);r.render=hf(s,u)}}t.render=r.render||Yt}Ds(t),Bs(),t_(t),$s(),Lr()}function C_(t){return new Proxy(t.attrs,{get(e,n){return Lt(t,"get","$attrs"),e[n]}})}function A_(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=C_(t))},slots:t.slots,emit:t.emit,expose:e}}function Ec(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Em(Br(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yi)return yi[n](t)},has(e,n){return n in e||n in yi}}))}function k_(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function x_(t){return de(t)&&"__vccOpts"in t}const _e=(t,e)=>C0(t,e,$i);function Sn(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!te(e)?xa(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xa(n)&&(n=[n]),Oe(t,e,n))}const D_=Symbol(""),O_=()=>Nt(D_),N_="3.2.45",R_="http://www.w3.org/2000/svg",Sr=typeof document<"u"?document:null,df=Sr&&Sr.createElement("template"),P_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Sr.createElementNS(R_,t):Sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sr.createTextNode(t),createComment:t=>Sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{df.innerHTML=r?`<svg>${t}</svg>`:t;const a=df.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function M_(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function L_(t,e,n){const r=t.style,s=He(n);if(n&&!s){for(const i in n)el(r,i,n[i]);if(e&&!He(e))for(const i in e)n[i]==null&&el(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ff=/\s*!important$/;function el(t,e,n){if(te(n))n.forEach(r=>el(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=V_(t,e);ff.test(n)?t.setProperty(ss(r),n.replace(ff,""),"important"):t[r]=n}}const pf=["Webkit","Moz","ms"],yu={};function V_(t,e){const n=yu[e];if(n)return n;let r=fn(e);if(r!=="filter"&&r in t)return yu[e]=r;r=hc(r);for(let s=0;s<pf.length;s++){const i=pf[s]+r;if(i in t)return yu[e]=i}return e}const gf="http://www.w3.org/1999/xlink";function F_(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gf,e.slice(6,e.length)):t.setAttributeNS(gf,e,n);else{const i=Lb(e);n==null||i&&!em(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function U_(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=em(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Cr(t,e,n,r){t.addEventListener(e,n,r)}function B_(t,e,n,r){t.removeEventListener(e,n,r)}function $_(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=j_(e);if(r){const u=i[e]=H_(r,s);Cr(t,a,u,c)}else o&&(B_(t,a,o,c),i[e]=void 0)}}const mf=/(?:Once|Passive|Capture)$/;function j_(t){let e;if(mf.test(t)){e={};let r;for(;r=t.match(mf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ss(t.slice(2)),e]}let vu=0;const q_=Promise.resolve(),K_=()=>vu||(q_.then(()=>vu=0),vu=Date.now());function H_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Kt(z_(r,n.value),e,5,[r])};return n.value=t,n.attached=K_(),n}function z_(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const yf=/^on[a-z]/,G_=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?M_(t,r,s):e==="style"?L_(t,n,r):cc(e)?Xl(e)||$_(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):W_(t,e,r,s))?U_(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),F_(t,e,r,s))};function W_(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&yf.test(e)&&de(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||yf.test(e)&&He(n)?!1:e in t}const Pn="transition",Zs="animation",mh=(t,{slots:e})=>Sn(Nm,ey(t),e);mh.displayName="Transition";const Zm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Q_=mh.props=Je({},Nm.props,Zm),gr=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},vf=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function ey(t){const e={};for(const K in t)K in Zm||(e[K]=t[K]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,f=Y_(s),m=f&&f[0],I=f&&f[1],{onBeforeEnter:b,onEnter:k,onEnterCancelled:_,onLeave:T,onLeaveCancelled:R,onBeforeAppear:S=b,onAppear:O=k,onAppearCancelled:x=_}=e,X=(K,ae,we)=>{Fn(K,ae?l:a),Fn(K,ae?u:o),we&&we()},Z=(K,ae)=>{K._isLeaving=!1,Fn(K,h),Fn(K,p),Fn(K,d),ae&&ae()},le=K=>(ae,we)=>{const Te=K?O:k,fe=()=>X(ae,K,we);gr(Te,[ae,fe]),wf(()=>{Fn(ae,K?c:i),mn(ae,K?l:a),vf(Te)||If(ae,r,m,fe)})};return Je(e,{onBeforeEnter(K){gr(b,[K]),mn(K,i),mn(K,o)},onBeforeAppear(K){gr(S,[K]),mn(K,c),mn(K,u)},onEnter:le(!1),onAppear:le(!0),onLeave(K,ae){K._isLeaving=!0;const we=()=>Z(K,ae);mn(K,h),ny(),mn(K,d),wf(()=>{!K._isLeaving||(Fn(K,h),mn(K,p),vf(T)||If(K,r,I,we))}),gr(T,[K,we])},onEnterCancelled(K){X(K,!1),gr(_,[K])},onAppearCancelled(K){X(K,!0),gr(x,[K])},onLeaveCancelled(K){Z(K),gr(R,[K])}})}function Y_(t){if(t==null)return null;if(Ne(t))return[wu(t.enter),wu(t.leave)];{const e=wu(t);return[e,e]}}function wu(t){return Pi(t)}function mn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Fn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function wf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let X_=0;function If(t,e,n,r){const s=t._endId=++X_,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ty(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),i()},d=p=>{p.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function ty(t,e){const n=window.getComputedStyle(t),r=f=>(n[f]||"").split(", "),s=r(`${Pn}Delay`),i=r(`${Pn}Duration`),o=bf(s,i),a=r(`${Zs}Delay`),c=r(`${Zs}Duration`),u=bf(a,c);let l=null,h=0,d=0;e===Pn?o>0&&(l=Pn,h=o,d=i.length):e===Zs?u>0&&(l=Zs,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?Pn:Zs:null,d=l?l===Pn?i.length:c.length:0);const p=l===Pn&&/\b(transform|all)(,|$)/.test(r(`${Pn}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:p}}function bf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>_f(n)+_f(t[r])))}function _f(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ny(){return document.body.offsetHeight}const ry=new WeakMap,sy=new WeakMap,J_={name:"TransitionGroup",props:Je({},Q_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ho(),r=Om();let s,i;return Mm(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!nE(s[0].el,n.vnode.el,o))return;s.forEach(Z_),s.forEach(eE);const a=s.filter(tE);ny(),a.forEach(c=>{const u=c.el,l=u.style;mn(u,o),l.transform=l.webkitTransform=l.transitionDuration="";const h=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",h),u._moveCb=null,Fn(u,o))};u.addEventListener("transitionend",h)})}),()=>{const o=Ee(t),a=ey(o);let c=o.tag||Dt;s=i,i=e.default?lh(e.default()):[];for(let u=0;u<i.length;u++){const l=i[u];l.key!=null&&Ui(l,Fi(l,a,r,n))}if(s)for(let u=0;u<s.length;u++){const l=s[u];Ui(l,Fi(l,a,r,n)),ry.set(l,l.el.getBoundingClientRect())}return Oe(c,null,i)}}},TP=J_;function Z_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function eE(t){sy.set(t,t.el.getBoundingClientRect())}function tE(t){const e=ry.get(t),n=sy.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function nE(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=ty(r);return s.removeChild(r),i}const Oa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>ca(e,n):e};function rE(t){t.target.composing=!0}function Ef(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const SP={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Oa(s);const i=r||s.props&&s.props.type==="number";Cr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Pi(a)),t._assign(a)}),n&&Cr(t,"change",()=>{t.value=t.value.trim()}),e||(Cr(t,"compositionstart",rE),Cr(t,"compositionend",Ef),Cr(t,"change",Ef))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Oa(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Pi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},CP={deep:!0,created(t,e,n){t._assign=Oa(n),Cr(t,"change",()=>{const r=t._modelValue,s=sE(t),i=t.checked,o=t._assign;if(te(r)){const a=tm(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(a,1),o(u)}}else if(uc(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(iy(t,i))})},mounted:Tf,beforeUpdate(t,e,n){t._assign=Oa(n),Tf(t,e,n)}};function Tf(t,{value:e,oldValue:n},r){t._modelValue=e,te(e)?t.checked=tm(e,r.props.value)>-1:uc(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=ac(e,iy(t,!0)))}function sE(t){return"_value"in t?t._value:t.value}function iy(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const iE=["ctrl","shift","alt","meta"],oE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>iE.some(n=>t[`${n}Key`]&&!e.includes(n))},AP=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=oE[e[s]];if(i&&i(n,e))return}return t(n,...r)},aE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kP=(t,e)=>n=>{if(!("key"in n))return;const r=ss(n.key);if(e.some(s=>s===r||aE[s]===r))return t(n)},cE=Je({patchProp:G_},P_);let Sf;function uE(){return Sf||(Sf=f_(cE))}const lE=(...t)=>{const e=uE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=hE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function hE(t){return He(t)?document.querySelector(t):t}var dE=!1;/*!
  * pinia v2.0.27
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let oy;const Tc=t=>oy=t,ay=Symbol();function tl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var wi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wi||(wi={}));function fE(){const t=am(!0),e=t.run(()=>bt({}));let n=[],r=[];const s=Br({install(i){Tc(s),s._a=i,i.provide(ay,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!dE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const cy=()=>{};function Cf(t,e,n,r=cy){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&zb()&&Gb(s),s}function ls(t,...e){t.slice().forEach(n=>{n(...e)})}function nl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];tl(s)&&tl(r)&&t.hasOwnProperty(n)&&!Me(r)&&!Xn(r)?t[n]=nl(s,r):t[n]=r}return t}const pE=Symbol();function gE(t){return!tl(t)||!t.hasOwnProperty(pE)}const{assign:$n}=Object;function mE(t){return!!(Me(t)&&t.effect)}function yE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const l=E0(n.state.value[t]);return $n(l,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Br(_e(()=>{Tc(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=uy(t,u,e,n,r,!0),c.$reset=function(){const h=s?s():{};this.$patch(d=>{$n(d,h)})},c}function uy(t,e,n={},r,s,i){let o;const a=$n({actions:{}},n),c={deep:!0};let u,l,h=Br([]),d=Br([]),p;const f=r.state.value[t];!i&&!f&&(r.state.value[t]={}),bt({});let m;function I(O){let x;u=l=!1,typeof O=="function"?(O(r.state.value[t]),x={type:wi.patchFunction,storeId:t,events:p}):(nl(r.state.value[t],O),x={type:wi.patchObject,payload:O,storeId:t,events:p});const X=m=Symbol();Wn().then(()=>{m===X&&(u=!0)}),l=!0,ls(h,x,r.state.value[t])}const b=cy;function k(){o.stop(),h=[],d=[],r._s.delete(t)}function _(O,x){return function(){Tc(r);const X=Array.from(arguments),Z=[],le=[];function K(Te){Z.push(Te)}function ae(Te){le.push(Te)}ls(d,{args:X,name:O,store:R,after:K,onError:ae});let we;try{we=x.apply(this&&this.$id===t?this:R,X)}catch(Te){throw ls(le,Te),Te}return we instanceof Promise?we.then(Te=>(ls(Z,Te),Te)).catch(Te=>(ls(le,Te),Promise.reject(Te))):(ls(Z,we),we)}}const T={_p:r,$id:t,$onAction:Cf.bind(null,d),$patch:I,$reset:b,$subscribe(O,x={}){const X=Cf(h,O,x.detached,()=>Z()),Z=o.run(()=>at(()=>r.state.value[t],le=>{(x.flush==="sync"?l:u)&&O({storeId:t,type:wi.direct,events:p},le)},$n({},c,x)));return X},$dispose:k},R=xn(T);r._s.set(t,R);const S=r._e.run(()=>(o=am(),o.run(()=>e())));for(const O in S){const x=S[O];if(Me(x)&&!mE(x)||Xn(x))i||(f&&gE(x)&&(Me(x)?x.value=f[O]:nl(x,f[O])),r.state.value[t][O]=x);else if(typeof x=="function"){const X=_(O,x);S[O]=X,a.actions[O]=x}}return $n(R,S),$n(Ee(R),S),Object.defineProperty(R,"$state",{get:()=>r.state.value[t],set:O=>{I(x=>{$n(x,O)})}}),r._p.forEach(O=>{$n(R,o.run(()=>O({store:R,app:r._a,pinia:r,options:a})))}),f&&i&&n.hydrate&&n.hydrate(R.$state,f),u=!0,l=!0,R}function vE(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=ho();return a=a||u&&Nt(ay),a&&Tc(a),a=oy,a._s.has(r)||(i?uy(r,e,s,a):yE(r,s,a)),a._s.get(r)}return o.$id=r,o}const Ii=/^[a-z0-9]+(-[a-z0-9]+)*$/,Sc=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),c=s.pop(),u={provider:s.length>0?s[0]:r,prefix:c,name:a};return e&&!ha(u)?null:u}const i=s[0],o=i.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!ha(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return e&&!ha(a,n)?null:a}return null},ha=(t,e)=>t?!!((t.provider===""||t.provider.match(Ii))&&(e&&t.prefix===""||t.prefix.match(Ii))&&t.name.match(Ii)):!1,ly=Object.freeze({left:0,top:0,width:16,height:16}),Na=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Cc=Object.freeze({...ly,...Na}),rl=Object.freeze({...Cc,body:"",hidden:!1});function wE(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function Af(t,e){const n=wE(t,e);for(const r in rl)r in Na?r in t&&!(r in n)&&(n[r]=Na[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function IE(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=r[o]&&r[o].parent,c=a&&i(a);c&&(s[o]=[a].concat(c))}return s[o]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),s}function bE(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(a){i=Af(r[a]||s[a],i)}return o(e),n.forEach(o),Af(t,i)}function hy(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=IE(t);for(const s in r){const i=r[s];i&&(e(s,bE(t,s,i)),n.push(s))}return n}const _E={provider:"",aliases:{},not_found:{},...ly};function Iu(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function dy(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Iu(t,_E))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s.match(Ii)||typeof i.body!="string"||!Iu(i,rl))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s.match(Ii)||typeof o!="string"||!n[o]&&!r[o]||!Iu(i,rl))return null}return e}const kf=Object.create(null);function EE(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function $r(t,e){const n=kf[t]||(kf[t]=Object.create(null));return n[e]||(n[e]=EE(t,e))}function yh(t,e){return dy(e)?hy(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function TE(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let ji=!1;function fy(t){return typeof t=="boolean"&&(ji=t),ji}function SE(t){const e=typeof t=="string"?Sc(t,!0,ji):t;if(e){const n=$r(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function CE(t,e){const n=Sc(t,!0,ji);if(!n)return!1;const r=$r(n.provider,n.prefix);return TE(r,n.name,e)}function AE(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),ji&&!e&&!t.prefix){let s=!1;return dy(t)&&(t.prefix="",hy(t,(i,o)=>{o&&CE(i,o)&&(s=!0)})),s}const n=t.prefix;if(!ha({provider:e,prefix:n,name:"a"}))return!1;const r=$r(e,n);return!!yh(r,t)}const py=Object.freeze({width:null,height:null}),gy=Object.freeze({...py,...Na}),kE=/(-?[0-9.]*[0-9]+[0-9.]*)/g,xE=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function xf(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(kE);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=xE.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?s.push(i):s.push(Math.ceil(a*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}function DE(t,e){const n={...Cc,...t},r={...gy,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(p=>{const f=[],m=p.hFlip,I=p.vFlip;let b=p.rotate;m?I?b+=2:(f.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),f.push("scale(-1 1)"),s.top=s.left=0):I&&(f.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),f.push("scale(1 -1)"),s.top=s.left=0);let k;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:k=s.height/2+s.top,f.unshift("rotate(90 "+k.toString()+" "+k.toString()+")");break;case 2:f.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:k=s.width/2+s.left,f.unshift("rotate(-90 "+k.toString()+" "+k.toString()+")");break}b%2===1&&(s.left!==s.top&&(k=s.left,s.left=s.top,s.top=k),s.width!==s.height&&(k=s.width,s.width=s.height,s.height=k)),f.length&&(i='<g transform="'+f.join(" ")+'">'+i+"</g>")});const o=r.width,a=r.height,c=s.width,u=s.height;let l,h;return o===null?(h=a===null?"1em":a==="auto"?u:a,l=xf(h,c/u)):(l=o==="auto"?c:o,h=a===null?xf(l,u/c):a==="auto"?u:a),{attributes:{width:l.toString(),height:h.toString(),viewBox:s.left.toString()+" "+s.top.toString()+" "+c.toString()+" "+u.toString()},body:i}}const OE=/\sid="(\S+)"/g,NE="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let RE=0;function PE(t,e=NE){const n=[];let r;for(;r=OE.exec(t);)n.push(r[1]);return n.length&&n.forEach(s=>{const i=typeof e=="function"?e(s):e+(RE++).toString(),o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),t}const sl=Object.create(null);function ME(t,e){sl[t]=e}function il(t){return sl[t]||sl[""]}function vh(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const wh=Object.create(null),ei=["https://api.simplesvg.com","https://api.unisvg.com"],da=[];for(;ei.length>0;)ei.length===1||Math.random()>.5?da.push(ei.shift()):da.push(ei.pop());wh[""]=vh({resources:["https://api.iconify.design"].concat(da)});function LE(t,e){const n=vh(e);return n===null?!1:(wh[t]=n,!0)}function Ih(t){return wh[t]}const VE=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Df=VE();function FE(t,e){const n=Ih(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function UE(t){return t===404}const BE=(t,e,n)=>{const r=[],s=FE(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((c,u)=>{a+=c.length+1,a>=s&&u>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=c.length),o.icons.push(c)}),r.push(o),r};function $E(t){if(typeof t=="string"){const e=Ih(t);if(e)return e.path}return"/"}const jE=(t,e,n)=>{if(!Df){n("abort",424);return}let r=$E(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),c=new URLSearchParams({icons:a});r+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;Df(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(UE(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},qE={prepare:BE,send:jE};function KE(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,a=s.name,c=n[i]||(n[i]=Object.create(null)),u=c[o]||(c[o]=$r(i,o));let l;a in u.icons?l=e.loaded:o===""||u.missing.has(a)?l=e.missing:l=e.pending;const h={provider:i,prefix:o,name:a};l.push(h)}),e}function my(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function HE(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const u=c.name;if(t.icons[u])o.loaded.push({provider:r,prefix:s,name:u});else if(t.missing.has(u))o.missing.push({provider:r,prefix:s,name:u});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||my([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let zE=0;function GE(t,e,n){const r=zE++,s=my.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function WE(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?Sc(s,e,n):s;i&&r.push(i)}),r}var QE={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function YE(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let S=t.resources.slice(0);for(o=[];S.length>1;){const O=Math.floor(Math.random()*S.length);o.push(S[O]),S=S.slice(0,O).concat(S.slice(O+1))}o=o.concat(S)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let c="pending",u=0,l,h=null,d=[],p=[];typeof r=="function"&&p.push(r);function f(){h&&(clearTimeout(h),h=null)}function m(){c==="pending"&&(c="aborted"),f(),d.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),d=[]}function I(S,O){O&&(p=[]),typeof S=="function"&&p.push(S)}function b(){return{startTime:a,payload:e,status:c,queriesSent:u,queriesPending:d.length,subscribe:I,abort:m}}function k(){c="failed",p.forEach(S=>{S(void 0,l)})}function _(){d.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),d=[]}function T(S,O,x){const X=O!=="success";switch(d=d.filter(Z=>Z!==S),c){case"pending":break;case"failed":if(X||!t.dataAfterTimeout)return;break;default:return}if(O==="abort"){l=x,k();return}if(X){l=x,d.length||(o.length?R():k());return}if(f(),_(),!t.random){const Z=t.resources.indexOf(S.resource);Z!==-1&&Z!==t.index&&(t.index=Z)}c="completed",p.forEach(Z=>{Z(x)})}function R(){if(c!=="pending")return;f();const S=o.shift();if(S===void 0){if(d.length){h=setTimeout(()=>{f(),c==="pending"&&(_(),k())},t.timeout);return}k();return}const O={status:"pending",resource:S,callback:(x,X)=>{T(O,x,X)}};d.push(O),u++,h=setTimeout(R,t.rotate),n(S,e,O.callback)}return setTimeout(R),b}function yy(t){const e={...QE,...t};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function s(a,c,u){const l=YE(e,a,c,(h,d)=>{r(),u&&u(h,d)});return n.push(l),l}function i(a){return n.find(c=>a(c))||null}return{query:s,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:r}}function Of(){}const bu=Object.create(null);function XE(t){if(!bu[t]){const e=Ih(t);if(!e)return;const n=yy(e),r={config:e,redundancy:n};bu[t]=r}return bu[t]}function JE(t,e,n){let r,s;if(typeof t=="string"){const i=il(t);if(!i)return n(void 0,424),Of;s=i.send;const o=XE(t);o&&(r=o.redundancy)}else{const i=vh(t);if(i){r=yy(i);const o=t.resources?t.resources[0]:"",a=il(o);a&&(s=a.send)}}return!r||!s?(n(void 0,424),Of):r.query(e,s,n)().abort}const Nf="iconify2",qi="iconify",vy=qi+"-count",Rf=qi+"-version",wy=36e5,ZE=168;function ol(t,e){try{return t.getItem(e)}catch{}}function bh(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Pf(t,e){try{t.removeItem(e)}catch{}}function al(t,e){return bh(t,vy,e.toString())}function cl(t){return parseInt(ol(t,vy))||0}const Ac={local:!0,session:!0},Iy={local:new Set,session:new Set};let _h=!1;function eT(t){_h=t}let Go=typeof window>"u"?{}:window;function by(t){const e=t+"Storage";try{if(Go&&Go[e]&&typeof Go[e].length=="number")return Go[e]}catch{}Ac[t]=!1}function _y(t,e){const n=by(t);if(!n)return;const r=ol(n,Rf);if(r!==Nf){if(r){const a=cl(n);for(let c=0;c<a;c++)Pf(n,qi+c.toString())}bh(n,Rf,Nf),al(n,0);return}const s=Math.floor(Date.now()/wy)-ZE,i=a=>{const c=qi+a.toString(),u=ol(n,c);if(typeof u=="string"){try{const l=JSON.parse(u);if(typeof l=="object"&&typeof l.cached=="number"&&l.cached>s&&typeof l.provider=="string"&&typeof l.data=="object"&&typeof l.data.prefix=="string"&&e(l,a))return!0}catch{}Pf(n,c)}};let o=cl(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,al(n,o)):Iy[t].add(a))}function Ey(){if(!_h){eT(!0);for(const t in Ac)_y(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=$r(r,s);if(!yh(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function tT(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in Ac)_y(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function nT(t,e){_h||Ey();function n(r){let s;if(!Ac[r]||!(s=by(r)))return;const i=Iy[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=cl(s),!al(s,o+1))return;const a={cached:Math.floor(Date.now()/wy),provider:t.provider,data:e};return bh(s,qi+o.toString(),JSON.stringify(a))}e.lastModified&&!tT(t,e.lastModified)||!Object.keys(e.icons).length||(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Mf(){}function rT(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,HE(t)}))}function sT(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;delete t.iconsToLoad;let i;if(!s||!(i=il(n)))return;i.prepare(n,r,s).forEach(a=>{JE(n,a,c=>{if(typeof c!="object")a.icons.forEach(u=>{t.missing.add(u)});else try{const u=yh(t,c);if(!u.length)return;const l=t.pendingIcons;l&&u.forEach(h=>{l.delete(h)}),nT(t,c)}catch(u){console.error(u)}rT(t)})})}))}const iT=(t,e)=>{const n=WE(t,!0,fy()),r=KE(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,Mf)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,a;return r.pending.forEach(c=>{const{provider:u,prefix:l}=c;if(l===a&&u===o)return;o=u,a=l,i.push($r(u,l));const h=s[u]||(s[u]=Object.create(null));h[l]||(h[l]=[])}),r.pending.forEach(c=>{const{provider:u,prefix:l,name:h}=c,d=$r(u,l),p=d.pendingIcons||(d.pendingIcons=new Set);p.has(h)||(p.add(h),s[u][l].push(h))}),i.forEach(c=>{const{provider:u,prefix:l}=c;s[u][l].length&&sT(c,s[u][l])}),e?GE(e,r,i):Mf};function oT(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in py?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const aT=/[\s,]+/;function cT(t,e){e.split(aT).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function uT(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function lT(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function hT(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function dT(t){return'url("data:image/svg+xml,'+hT(t)+'")'}const Lf={...gy,inline:!1},fT={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},pT={display:"inline-block"},ul={backgroundColor:"currentColor"},Ty={backgroundColor:"transparent"},Vf={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ff={webkitMask:ul,mask:ul,background:Ty};for(const t in Ff){const e=Ff[t];for(const n in Vf)e[t+n]=Vf[n]}const fa={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";fa[t+"-flip"]=e,fa[t.slice(0,1)+"-flip"]=e,fa[t+"Flip"]=e});function Uf(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Bf=(t,e)=>{const n=oT(Lf,e),r={...fT},s=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let m in e){const I=e[m];if(I!==void 0)switch(m){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[m]=I===!0||I==="true"||I===1;break;case"flip":typeof I=="string"&&cT(n,I);break;case"color":i.color=I;break;case"rotate":typeof I=="string"?n[m]=uT(I):typeof I=="number"&&(n[m]=I);break;case"ariaHidden":case"aria-hidden":I!==!0&&I!=="true"&&delete r["aria-hidden"];break;default:{const b=fa[m];b?(I===!0||I==="true"||I===1)&&(n[b]=!0):Lf[m]===void 0&&(r[m]=I)}}}const c=DE(t,n),u=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...a},Object.assign(r,u);let m=0,I=e.id;return typeof I=="string"&&(I=I.replace(/-/g,"_")),r.innerHTML=PE(c.body,I?()=>I+"ID"+m++:"iconifyVue"),Sn("svg",r)}const{body:l,width:h,height:d}=t,p=s==="mask"||(s==="bg"?!1:l.indexOf("currentColor")!==-1),f=lT(l,{...u,width:h+"",height:d+""});return r.style={...i,"--svg":dT(f),width:Uf(u.width),height:Uf(u.height),...pT,...p?ul:Ty,...a},Sn("span",r)};fy(!0);ME("",qE);if(typeof document<"u"&&typeof window<"u"){Ey();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!AE(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;LE(n,s)||console.error(r)}catch{console.error(r)}}}}const gT={...Cc,body:""},mT=Ut({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=Sc(t,!1,!0))===null)return this.abortLoading(),null;const r=SE(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:iT([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const s=["iconify"];return n.prefix!==""&&s.push("iconify--"+n.prefix),n.provider!==""&&s.push("iconify--"+n.provider),{data:r,classes:s}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return Bf(gT,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Bf({...Cc,...e.data},n)}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(n[l],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const f=u<<6&192|h;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vT=function(t){const e=Sy(t);return Cy.encodeByteArray(e,!0)},Ra=function(t){return vT(t).replace(/\./g,"")},Ay=function(t){try{return Cy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function IT(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _T(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ET(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TT(){return!IT()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ky(){return typeof indexedDB=="object"}function ST(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function CT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=()=>CT().__FIREBASE_DEFAULTS__,kT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ay(t[1]);return e&&JSON.parse(e)},Eh=()=>{try{return AT()||kT()||xT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xy=t=>{var e,n;return(n=(e=Eh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},DT=t=>{const e=xy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},OT=()=>{var t;return(t=Eh())===null||t===void 0?void 0:t.config},Dy=t=>{var e;return(e=Eh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ra(JSON.stringify(n)),Ra(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PT,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fo.prototype.create)}}class fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?MT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new On(s,a,r)}}function MT(t,e){return t.replace(LT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LT=/\{\$([^}]+)}/g;function VT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if($f(i)&&$f(o)){if(!Pa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function FT(t,e){const n=new UT(t,e);return n.subscribe.bind(n)}class UT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_u),s.error===void 0&&(s.error=_u),s.complete===void 0&&(s.complete=_u);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _u(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qT(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jT(t){return t===Ir?void 0:t}function qT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $T(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const HT={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},zT=Se.INFO,GT={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},WT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Th{constructor(e){this.name=e,this._logLevel=zT,this._logHandler=WT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const QT=(t,e)=>e.some(n=>t instanceof n);let jf,qf;function YT(){return jf||(jf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XT(){return qf||(qf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oy=new WeakMap,ll=new WeakMap,Ny=new WeakMap,Eu=new WeakMap,Sh=new WeakMap;function JT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Oy.set(n,t)}).catch(()=>{}),Sh.set(e,t),e}function ZT(t){if(ll.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ll.set(t,e)}let hl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ll.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ny.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eS(t){hl=t(hl)}function tS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tu(this),e,...n);return Ny.set(r,e.sort?e.sort():[e]),Zn(r)}:XT().includes(t)?function(...e){return t.apply(Tu(this),e),Zn(Oy.get(this))}:function(...e){return Zn(t.apply(Tu(this),e))}}function nS(t){return typeof t=="function"?tS(t):(t instanceof IDBTransaction&&ZT(t),QT(t,YT())?new Proxy(t,hl):t)}function Zn(t){if(t instanceof IDBRequest)return JT(t);if(Eu.has(t))return Eu.get(t);const e=nS(t);return e!==t&&(Eu.set(t,e),Sh.set(e,t)),e}const Tu=t=>Sh.get(t);function rS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Zn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Zn(o.result),c.oldVersion,c.newVersion,Zn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const sS=["get","getKey","getAll","getAllKeys","count"],iS=["put","add","delete","clear"],Su=new Map;function Kf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Su.get(e))return Su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=iS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sS.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Su.set(e,i),i}eS(t=>({...t,get:(e,n,r)=>Kf(e,n)||t.get(e,n,r),has:(e,n)=>!!Kf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dl="@firebase/app",Hf="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Th("@firebase/app"),cS="@firebase/app-compat",uS="@firebase/analytics-compat",lS="@firebase/analytics",hS="@firebase/app-check-compat",dS="@firebase/app-check",fS="@firebase/auth",pS="@firebase/auth-compat",gS="@firebase/database",mS="@firebase/database-compat",yS="@firebase/functions",vS="@firebase/functions-compat",wS="@firebase/installations",IS="@firebase/installations-compat",bS="@firebase/messaging",_S="@firebase/messaging-compat",ES="@firebase/performance",TS="@firebase/performance-compat",SS="@firebase/remote-config",CS="@firebase/remote-config-compat",AS="@firebase/storage",kS="@firebase/storage-compat",xS="@firebase/firestore",DS="@firebase/firestore-compat",OS="firebase",NS="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="[DEFAULT]",RS={[dl]:"fire-core",[cS]:"fire-core-compat",[lS]:"fire-analytics",[uS]:"fire-analytics-compat",[dS]:"fire-app-check",[hS]:"fire-app-check-compat",[fS]:"fire-auth",[pS]:"fire-auth-compat",[gS]:"fire-rtdb",[mS]:"fire-rtdb-compat",[yS]:"fire-fn",[vS]:"fire-fn-compat",[wS]:"fire-iid",[IS]:"fire-iid-compat",[bS]:"fire-fcm",[_S]:"fire-fcm-compat",[ES]:"fire-perf",[TS]:"fire-perf-compat",[SS]:"fire-rc",[CS]:"fire-rc-compat",[AS]:"fire-gcs",[kS]:"fire-gcs-compat",[xS]:"fire-fst",[DS]:"fire-fst-compat","fire-js":"fire-js",[OS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Map,pl=new Map;function PS(t,e){try{t.container.addComponent(e)}catch(n){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(pl.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;pl.set(e,t);for(const n of Ma.values())PS(n,t);return!0}function Ch(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},er=new fo("app","Firebase",MS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=NS;function Ry(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw er.create("bad-app-name",{appName:String(s)});if(n||(n=OT()),!n)throw er.create("no-options");const i=Ma.get(s);if(i){if(Pa(n,i.options)&&Pa(r,i.config))return i;throw er.create("duplicate-app",{appName:s})}const o=new KT(s);for(const c of pl.values())o.addComponent(c);const a=new LS(n,r,o);return Ma.set(s,a),a}function Py(t=fl){const e=Ma.get(t);if(!e&&t===fl)return Ry();if(!e)throw er.create("no-app",{appName:t});return e}function tr(t,e,n){var r;let s=(r=RS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(a.join(" "));return}Os(new jr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="firebase-heartbeat-database",FS=1,Ki="firebase-heartbeat-store";let Cu=null;function My(){return Cu||(Cu=rS(VS,FS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ki)}}}).catch(t=>{throw er.create("idb-open",{originalErrorMessage:t.message})})),Cu}async function US(t){var e;try{return(await My()).transaction(Ki).objectStore(Ki).get(Ly(t))}catch(n){if(n instanceof On)qr.warn(n.message);else{const r=er.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});qr.warn(r.message)}}}async function zf(t,e){var n;try{const s=(await My()).transaction(Ki,"readwrite");return await s.objectStore(Ki).put(e,Ly(t)),s.done}catch(r){if(r instanceof On)qr.warn(r.message);else{const s=er.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});qr.warn(s.message)}}}function Ly(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=1024,$S=30*24*60*60*1e3;class jS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=$S}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gf(),{heartbeatsToSend:n,unsentEntries:r}=qS(this._heartbeatsCache.heartbeats),s=Ra(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Gf(){return new Date().toISOString().substring(0,10)}function qS(t,e=BS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ky()?ST().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await US(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wf(t){return Ra(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){Os(new jr("platform-logger",e=>new oS(e),"PRIVATE")),Os(new jr("heartbeat",e=>new jS(e),"PRIVATE")),tr(dl,Hf,t),tr(dl,Hf,"esm2017"),tr("fire-js","")}HS("");var zS="firebase",GS="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(zS,GS,"app");function Ah(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Vy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WS=Vy,Fy=new fo("auth","Firebase",Vy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Th("@firebase/auth");function pa(t,...e){Qf.logLevel<=Se.ERROR&&Qf.error(`Auth (${go}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw kh(t,...e)}function ln(t,...e){return kh(t,...e)}function QS(t,e,n){const r=Object.assign(Object.assign({},WS()),{[e]:n});return new fo("auth","Firebase",r).create(e,{appName:t.name})}function kh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fy.create(t,...e)}function ne(t,e,...n){if(!t)throw kh(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pa(e),new Error(e)}function Cn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new Map;function bn(t){Cn(t instanceof Function,"Expected a class definition");let e=Yf.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t,e){const n=Ch(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pa(i,e!=null?e:{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function XS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JS(){return Xf()==="http:"||Xf()==="https:"}function Xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JS()||bT()||"connection"in navigator)?navigator.onLine:!0}function eC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=wT()||_T()}get(){return ZS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new mo(3e4,6e4);function yo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vo(t,e,n,r,s={}){return By(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=po(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Uy.fetch()($y(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function By(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tC),e);try{const s=new rC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Wo(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw QS(t,l,u);Xt(t,l)}}catch(s){if(s instanceof On)throw s;Xt(t,"network-request-failed")}}async function wo(t,e,n,r,s={}){const i=await vo(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $y(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xh(t.config,s):`${t.config.apiScheme}://${s}`}class rC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),nC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e){return vo(t,"POST","/v1/accounts:delete",e)}async function iC(t,e){return vo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oC(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=Dh(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:bi(Au(s.auth_time)),issuedAtTime:bi(Au(s.iat)),expirationTime:bi(Au(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Au(t){return Number(t)*1e3}function Dh(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return pa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ay(r);return i?JSON.parse(i):(pa("Failed to decode base64 JWT payload"),null)}catch(i){return pa("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function aC(t){const e=Dh(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&cC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bi(this.lastLoginAt),this.creationTime=bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Hi(t,iC(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dC(i.providerUserInfo):[],a=hC(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jy(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function lC(t){const e=ut(t);await La(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dC(t){return t.map(e=>{var{providerId:n}=e,r=Ah(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e){const n=await By(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=$y(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Uy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zi;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ah(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oC(this,e)}reload(){return lC(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await La(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hi(this,sC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,f=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:_,emailVerified:T,isAnonymous:R,providerData:S,stsTokenManager:O}=n;ne(_&&O,e,"internal-error");const x=zi.fromJSON(this.name,O);ne(typeof _=="string",e,"internal-error"),Mn(h,e.name),Mn(d,e.name),ne(typeof T=="boolean",e,"internal-error"),ne(typeof R=="boolean",e,"internal-error"),Mn(p,e.name),Mn(f,e.name),Mn(m,e.name),Mn(I,e.name),Mn(b,e.name),Mn(k,e.name);const X=new Vr({uid:_,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:R,photoURL:f,phoneNumber:p,tenantId:m,stsTokenManager:x,createdAt:b,lastLoginAt:k});return S&&Array.isArray(S)&&(X.providerData=S.map(Z=>Object.assign({},Z))),I&&(X._redirectEventId=I),X}static async _fromIdTokenResponse(e,n,r=!1){const s=new zi;s.updateFromServerResponse(n);const i=new Vr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await La(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qy.type="NONE";const Jf=qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=ga("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ss(bn(Jf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||bn(Jf);const o=ga(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Vr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ss(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ss(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ky(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wy(e))return"Blackberry";if(Qy(e))return"Webos";if(Oh(e))return"Safari";if((e.includes("chrome/")||Hy(e))&&!e.includes("edge/"))return"Chrome";if(Gy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ky(t=We()){return/firefox\//i.test(t)}function Oh(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hy(t=We()){return/crios\//i.test(t)}function zy(t=We()){return/iemobile/i.test(t)}function Gy(t=We()){return/android/i.test(t)}function Wy(t=We()){return/blackberry/i.test(t)}function Qy(t=We()){return/webos/i.test(t)}function kc(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pC(t=We()){var e;return kc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gC(){return ET()&&document.documentMode===10}function Yy(t=We()){return kc(t)||Gy(t)||Qy(t)||Wy(t)||/windows phone/i.test(t)||zy(t)}function mC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t,e=[]){let n;switch(t){case"Browser":n=Zf(We());break;case"Worker":n=`${Zf(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${go}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ep(this),this.idTokenSubscription=new ep(this),this.beforeStateQueue=new yC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await La(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ut(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Io(t){return ut(t)}class ep{constructor(e){this.auth=e,this.observer=null,this.addObserver=FT(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wC(t,e,n){const r=Io(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Jy(e),{host:o,port:a}=IC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||bC()}function Jy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IC(t){const e=Jy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:tp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:tp(o)}}}function tp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function _C(t,e){return vo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e){return wo(t,"POST","/v1/accounts:signInWithPassword",yo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e){return wo(t,"POST","/v1/accounts:signInWithEmailLink",yo(t,e))}async function SC(t,e){return wo(t,"POST","/v1/accounts:signInWithEmailLink",yo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Nh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return EC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TC(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return _C(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return SC(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return wo(t,"POST","/v1/accounts:signInWithIdp",yo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="http://localhost";class Kr extends Nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ah(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:CC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kC(t){const e=li(hi(t)).link,n=e?li(hi(e)).deep_link_id:null,r=li(hi(t)).deep_link_id;return(r?li(hi(r)).link:null)||r||n||e||t}class Rh{constructor(e){var n,r,s,i,o,a;const c=li(hi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=AC((s=c.mode)!==null&&s!==void 0?s:null);ne(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kC(e);try{return new Rh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return Gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rh.parseLink(n);return ne(r,"argument-error"),Gi._fromEmailAndCode(e,r.code,r.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Zy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends bo{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends bo{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends bo{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e){return wo(t,"POST","/v1/accounts:signUp",yo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Vr._fromIdTokenResponse(e,r,s),o=np(r);return new Hr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=np(r);return new Hr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function np(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends On{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Va.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Va(e,n,r,s)}}function ev(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Va._fromErrorAndOperation(t,i,e,r):i})}async function DC(t,e,n=!1){const r=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Hi(t,ev(s,i,e,t),n);ne(o.idToken,s,"internal-error");const a=Dh(o.idToken);ne(a,s,"internal-error");const{sub:c}=a;return ne(t.uid===c,s,"user-mismatch"),Hr._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Xt(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(t,e,n=!1){const r="signIn",s=await ev(t,r,e),i=await Hr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function NC(t,e){return tv(Io(t),e)}async function RC(t,e,n){const r=Io(t),s=await xC(r,{returnSecureToken:!0,email:e,password:n}),i=await Hr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function PC(t,e,n){return NC(ut(t),js.credential(e,n))}function MC(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function LC(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function VC(t){return ut(t).signOut()}const Fa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){const t=We();return Oh(t)||kc(t)}const UC=1e3,BC=10;class rv extends nv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FC()&&mC(),this.fallbackToPolling=Yy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rv.type="LOCAL";const $C=rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv extends nv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sv.type="SESSION";const iv=sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await jC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ph("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function KC(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function HC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GC(){return ov()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="firebaseLocalStorageDb",WC=1,Ua="firebaseLocalStorage",cv="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dc(t,e){return t.transaction([Ua],e?"readwrite":"readonly").objectStore(Ua)}function QC(){const t=indexedDB.deleteDatabase(av);return new _o(t).toPromise()}function ml(){const t=indexedDB.open(av,WC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ua,{keyPath:cv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ua)?e(r):(r.close(),await QC(),e(await ml()))})})}async function rp(t,e,n){const r=Dc(t,!0).put({[cv]:e,value:n});return new _o(r).toPromise()}async function YC(t,e){const n=Dc(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function sp(t,e){const n=Dc(t,!0).delete(e);return new _o(n).toPromise()}const XC=800,JC=3;class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ov()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xc._getInstance(GC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HC(),!this.activeServiceWorker)return;this.sender=new qC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await rp(e,Fa,"1"),await sp(e,Fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Dc(s,!1).getAll();return new _o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uv.type="LOCAL";const ZC=uv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",eA().appendChild(r)})}function nA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new mo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t,e){return e?bn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends Nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sA(t){return tv(t.auth,new Mh(t),t.bypassAuthState)}function iA(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),OC(n,new Mh(t),t.bypassAuthState)}async function oA(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),DC(n,new Mh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sA;case"linkViaPopup":case"linkViaRedirect":return oA;case"reauthViaPopup":case"reauthViaRedirect":return iA;default:Xt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new mo(2e3,1e4);class ys extends lv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Ph();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,aA.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="pendingRedirect",ma=new Map;class uA extends lv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const r=await lA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lA(t,e){const n=fA(e),r=dA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function hA(t,e){ma.set(t._key(),e)}function dA(t){return bn(t._redirectPersistence)}function fA(t){return ga(cA,t.config.apiKey,t.name)}async function pA(t,e,n=!1){const r=Io(t),s=rA(r,e),o=await new uA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=10*60*1e3;class mA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ip(e))}saveEventToCache(e){this.cachedEventUids.add(ip(e)),this.lastProcessedEventTime=Date.now()}}function ip(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e={}){return vo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IA=/^https?/;async function bA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vA(t);for(const n of e)try{if(_A(n))return}catch{}Xt(t,"unauthorized-domain")}function _A(t){const e=gl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IA.test(n))return!1;if(wA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=new mo(3e4,6e4);function op(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TA(t){return new Promise((e,n)=>{var r,s,i;function o(){op(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{op(),n(ln(t,"network-request-failed"))},timeout:EA.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)o();else{const a=nA("iframefcb");return hn()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},tA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ya=null,e})}let ya=null;function SA(t){return ya=ya||TA(t),ya}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new mo(5e3,15e3),AA="__/auth/iframe",kA="emulator/auth/iframe",xA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OA(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xh(e,kA):`https://${t.config.authDomain}/${AA}`,r={apiKey:e.apiKey,appName:t.name,v:go},s=DA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${po(r).slice(1)}`}async function NA(t){const e=await SA(t),n=hn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:OA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=hn().setTimeout(()=>{i(o)},CA.get());function c(){hn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PA=500,MA=600,LA="_blank",VA="http://localhost";class ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FA(t,e,n,r=PA,s=MA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},RA),{width:r.toString(),height:s.toString(),top:i,left:o}),u=We().toLowerCase();n&&(a=Hy(u)?LA:n),Ky(u)&&(e=e||VA,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,f])=>`${d}${p}=${f},`,"");if(pC(u)&&a!=="_self")return UA(e||"",a),new ap(null);const h=window.open(e||"",a,l);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new ap(h)}function UA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA="__/auth/handler",$A="emulator/auth/handler";function cp(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:go,eventId:s};if(e instanceof Zy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof bo){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${jA(t)}?${po(a).slice(1)}`}function jA({config:t}){return t.emulator?xh(t,$A):`https://${t.authDomain}/${BA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="webStorageSupport";class qA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iv,this._completeRedirectFn=pA,this._overrideRedirectResult=hA}async _openPopup(e,n,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=cp(e,n,r,gl(),s);return FA(e,o,Ph())}async _openRedirect(e,n,r,s){return await this._originValidation(e),KC(cp(e,n,r,gl(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NA(e),r=new mA(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ku,{type:ku},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ku];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yy()||Oh()||kc()}}const KA=qA;var up="@firebase/auth",lp="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GA(t){Os(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{ne(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ne(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xy(t)},l=new vC(a,c,u);return XS(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Os(new jr("auth-internal",e=>{const n=Io(e.getProvider("auth").getImmediate());return(r=>new HA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(up,lp,zA(t)),tr(up,lp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=5*60,QA=Dy("authIdTokenMaxAge")||WA;let hp=null;const YA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QA)return;const s=n==null?void 0:n.token;hp!==s&&(hp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function XA(t=Py()){const e=Ch(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YS(t,{popupRedirectResolver:KA,persistence:[ZC,$C,iv]}),r=Dy("authTokenSyncURL");if(r){const i=YA(r);LC(n,i,()=>i(n.currentUser)),MC(n,o=>i(o))}const s=xy("auth");return s&&wC(n,`http://${s}`),n}GA("Browser");var JA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J,Lh=Lh||{},se=JA||self;function Ba(){}function Oc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Eo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ZA(t){return Object.prototype.hasOwnProperty.call(t,xu)&&t[xu]||(t[xu]=++ek)}var xu="closure_uid_"+(1e9*Math.random()>>>0),ek=0;function tk(t,e,n){return t.call.apply(t.bind,arguments)}function nk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?gt=tk:gt=nk,gt.apply(null,arguments)}function Qo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ht(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ur(){this.s=this.s,this.o=this.o}var rk=0;ur.prototype.s=!1;ur.prototype.na=function(){!this.s&&(this.s=!0,this.M(),rk!=0)&&ZA(this)};ur.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function dp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Oc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var sk=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{se.addEventListener("test",Ba,e),se.removeEventListener("test",Ba,e)}catch{}return t}();function $a(t){return/^[\s\xa0]*$/.test(t)}var fp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Du(t,e){return t<e?-1:t>e?1:0}function Nc(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function on(t){return Nc().indexOf(t)!=-1}function Fh(t){return Fh[" "](t),t}Fh[" "]=Ba;function ik(t){var e=ck;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ok=on("Opera"),Ns=on("Trident")||on("MSIE"),fv=on("Edge"),yl=fv||Ns,pv=on("Gecko")&&!(Nc().toLowerCase().indexOf("webkit")!=-1&&!on("Edge"))&&!(on("Trident")||on("MSIE"))&&!on("Edge"),ak=Nc().toLowerCase().indexOf("webkit")!=-1&&!on("Edge");function gv(){var t=se.document;return t?t.documentMode:void 0}var ja;e:{var Ou="",Nu=function(){var t=Nc();if(pv)return/rv:([^\);]+)(\)|;)/.exec(t);if(fv)return/Edge\/([\d\.]+)/.exec(t);if(Ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ak)return/WebKit\/(\S+)/.exec(t);if(ok)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nu&&(Ou=Nu?Nu[1]:""),Ns){var Ru=gv();if(Ru!=null&&Ru>parseFloat(Ou)){ja=String(Ru);break e}}ja=Ou}var ck={};function uk(){return ik(function(){let t=0;const e=fp(String(ja)).split("."),n=fp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Du(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Du(s[2].length==0,i[2].length==0)||Du(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var vl;if(se.document&&Ns){var pp=gv();vl=pp||parseInt(ja,10)||void 0}else vl=void 0;var lk=vl;function Wi(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pv){e:{try{Fh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wi.X.h.call(this)}}ht(Wi,mt);var hk={2:"touch",3:"pen",4:"mouse"};Wi.prototype.h=function(){Wi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var To="closure_listenable_"+(1e6*Math.random()|0),dk=0;function fk(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++dk,this.ba=this.ea=!1}function Rc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Uh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function mv(t){const e={};for(const n in t)e[n]=t[n];return e}const gp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yv(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<gp.length;i++)n=gp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Pc(t){this.src=t,this.g={},this.h=0}Pc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Il(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new fk(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function wl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=dv(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Rc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Il(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var Bh="closure_lm_"+(1e6*Math.random()|0),Pu={};function vv(t,e,n,r,s){if(r&&r.once)return Iv(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)vv(t,e[i],n,r,s);return null}return n=qh(n),t&&t[To]?t.N(e,n,Eo(r)?!!r.capture:!!r,s):wv(t,e,n,!1,r,s)}function wv(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Eo(s)?!!s.capture:!!s,a=jh(t);if(a||(t[Bh]=a=new Pc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=pk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)sk||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(_v(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pk(){function t(n){return e.call(t.src,t.listener,n)}const e=gk;return t}function Iv(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Iv(t,e[i],n,r,s);return null}return n=qh(n),t&&t[To]?t.O(e,n,Eo(r)?!!r.capture:!!r,s):wv(t,e,n,!0,r,s)}function bv(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)bv(t,e[i],n,r,s);else r=Eo(r)?!!r.capture:!!r,n=qh(n),t&&t[To]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Il(i,n,r,s),-1<n&&(Rc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=jh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Il(e,n,r,s)),(n=-1<t?e[t]:null)&&$h(n))}function $h(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[To])wl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_v(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jh(e))?(wl(n,t),n.h==0&&(n.src=null,e[Bh]=null)):Rc(t)}}}function _v(t){return t in Pu?Pu[t]:Pu[t]="on"+t}function gk(t,e){if(t.ba)t=!0;else{e=new Wi(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&$h(t),t=n.call(r,e)}return t}function jh(t){return t=t[Bh],t instanceof Pc?t:null}var Mu="__closure_events_fn_"+(1e9*Math.random()>>>0);function qh(t){return typeof t=="function"?t:(t[Mu]||(t[Mu]=function(e){return t.handleEvent(e)}),t[Mu])}function Ze(){ur.call(this),this.i=new Pc(this),this.P=this,this.I=null}ht(Ze,ur);Ze.prototype[To]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){bv(this,t,e,n,r)};function ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var s=e;e=new mt(r,t),yv(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Yo(o,r,!0,e)&&s}if(o=e.g=t,s=Yo(o,r,!0,e)&&s,s=Yo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Yo(o,r,!1,e)&&s}Ze.prototype.M=function(){if(Ze.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rc(n[r]);delete t.g[e],t.h--}}this.I=null};Ze.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&wl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Kh=se.JSON.stringify;function mk(){var t=Sv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yk{constructor(){this.h=this.g=null}add(e,n){const r=Ev.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ev=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vk,t=>t.reset());class vk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wk(t){se.setTimeout(()=>{throw t},0)}function Tv(t,e){bl||Ik(),_l||(bl(),_l=!0),Sv.add(t,e)}var bl;function Ik(){var t=se.Promise.resolve(void 0);bl=function(){t.then(bk)}}var _l=!1,Sv=new yk;function bk(){for(var t;t=mk();){try{t.h.call(t.g)}catch(n){wk(n)}var e=Ev;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_l=!1}function Mc(t,e){Ze.call(this),this.h=t||1,this.g=e||se,this.j=gt(this.lb,this),this.l=Date.now()}ht(Mc,Ze);J=Mc.prototype;J.ca=!1;J.R=null;J.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ct(this,"tick"),this.ca&&(Hh(this),this.start()))}};J.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}J.M=function(){Mc.X.M.call(this),Hh(this),delete this.g};function zh(t,e,n){if(typeof t=="function")n&&(t=gt(t,n));else if(t&&typeof t.handleEvent=="function")t=gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function Cv(t){t.g=zh(()=>{t.g=null,t.i&&(t.i=!1,Cv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _k extends ur{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cv(this)}M(){super.M(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(t){ur.call(this),this.h=t,this.g={}}ht(Qi,ur);var mp=[];function Av(t,e,n,r){Array.isArray(n)||(n&&(mp[0]=n.toString()),n=mp);for(var s=0;s<n.length;s++){var i=vv(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function kv(t){Uh(t.g,function(e,n){this.g.hasOwnProperty(n)&&$h(e)},t),t.g={}}Qi.prototype.M=function(){Qi.X.M.call(this),kv(this)};Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lc(){this.g=!0}Lc.prototype.Aa=function(){this.g=!1};function Ek(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Tk(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function vs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ck(t,n)+(r?" "+r:"")})}function Sk(t,e){t.info(function(){return"TIMEOUT: "+e})}Lc.prototype.info=function(){};function Ck(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Kh(n)}catch{return e}}var is={},yp=null;function Vc(){return yp=yp||new Ze}is.Pa="serverreachability";function xv(t){mt.call(this,is.Pa,t)}ht(xv,mt);function Yi(t){const e=Vc();ct(e,new xv(e))}is.STAT_EVENT="statevent";function Dv(t,e){mt.call(this,is.STAT_EVENT,t),this.stat=e}ht(Dv,mt);function wt(t){const e=Vc();ct(e,new Dv(e,t))}is.Qa="timingevent";function Ov(t,e){mt.call(this,is.Qa,t),this.size=e}ht(Ov,mt);function So(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Fc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Nv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Gh(){}Gh.prototype.h=null;function vp(t){return t.h||(t.h=t.i())}function Rv(){}var Co={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Wh(){mt.call(this,"d")}ht(Wh,mt);function Qh(){mt.call(this,"c")}ht(Qh,mt);var El;function Uc(){}ht(Uc,Gh);Uc.prototype.g=function(){return new XMLHttpRequest};Uc.prototype.i=function(){return{}};El=new Uc;function Ao(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Qi(this),this.O=Ak,t=yl?125:void 0,this.T=new Mc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Pv}function Pv(){this.i=null,this.g="",this.h=!1}var Ak=45e3,Tl={},qa={};J=Ao.prototype;J.setTimeout=function(t){this.O=t};function Sl(t,e,n){t.K=1,t.v=$c(An(e)),t.s=n,t.P=!0,Mv(t,null)}function Mv(t,e){t.F=Date.now(),ko(t),t.A=An(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),qv(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Pv,t.g=lw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new _k(gt(t.La,t,t.g),t.N)),Av(t.S,t.g,"readystatechange",t.ib),e=t.H?mv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Yi(),Ek(t.j,t.u,t.A,t.m,t.U,t.s)}J.ib=function(t){t=t.target;const e=this.L;e&&_n(t)==3?e.l():this.La(t)};J.La=function(t){try{if(t==this.g)e:{const l=_n(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||yl||this.g&&(this.h.h||this.g.fa()||_p(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Yi(3):Yi(2)),Bc(this);var n=this.g.aa();this.Y=n;t:if(Lv(this)){var r=_p(this.g);t="";var s=r.length,i=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),_i(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Tk(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$a(a)){var u=a;break t}}u=null}if(n=u)vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cl(this,n);else{this.i=!1,this.o=3,wt(12),Nr(this),_i(this);break e}}this.P?(Vv(this,l,o),yl&&this.i&&l==3&&(Av(this.S,this.T,"tick",this.hb),this.T.start())):(vs(this.j,this.m,o,null),Cl(this,o)),l==4&&Nr(this),this.i&&!this.I&&(l==4?ow(this.l,this):(this.i=!1,ko(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),Nr(this),_i(this)}}}catch{}finally{}};function Lv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Vv(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=kk(t,n),s==qa){e==4&&(t.o=4,wt(14),r=!1),vs(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Tl){t.o=4,wt(15),vs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vs(t.j,t.m,s,null),Cl(t,s);Lv(t)&&s!=qa&&s!=Tl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nd(e),e.K=!0,wt(11))):(vs(t.j,t.m,n,"[Invalid Chunked Response]"),Nr(t),_i(t))}J.hb=function(){if(this.g){var t=_n(this.g),e=this.g.fa();this.C<e.length&&(Bc(this),Vv(this,t,e),this.i&&t!=4&&ko(this))}};function kk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?qa:(n=Number(e.substring(n,r)),isNaN(n)?Tl:(r+=1,r+n>e.length?qa:(e=e.substr(r,n),t.C=r+n,e)))}J.cancel=function(){this.I=!0,Nr(this)};function ko(t){t.V=Date.now()+t.O,Fv(t,t.O)}function Fv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=So(gt(t.gb,t),e)}function Bc(t){t.B&&(se.clearTimeout(t.B),t.B=null)}J.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Sk(this.j,this.A),this.K!=2&&(Yi(),wt(17)),Nr(this),this.o=2,_i(this)):Fv(this,this.V-t)};function _i(t){t.l.G==0||t.I||ow(t.l,t)}function Nr(t){Bc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Hh(t.T),kv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Cl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Al(n.h,t))){if(!t.J&&Al(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)za(n),Kc(n);else break e;td(n),wt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=So(gt(n.cb,n),6e3));if(1>=zv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Rr(n,11)}else if((t.J||n.g==t)&&za(n),!$a(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const f=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(f){var i=r.h;i.g||f.indexOf("spdy")==-1&&f.indexOf("quic")==-1&&f.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Yh(i,i.h),i.h=null))}if(r.D){const m=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.za=m,Le(r.F,r.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=uw(r,r.H?r.ka:null,r.V),o.J){Gv(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Bc(a),ko(a)),r.g=o}else sw(r);0<n.i.length&&Hc(n)}else u[0]!="stop"&&u[0]!="close"||Rr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Rr(n,7):ed(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Yi(4)}catch{}}function xk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Oc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Dk(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Oc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Uv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Oc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Dk(t),r=xk(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Bv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ok(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Fr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fr){this.h=e!==void 0?e:t.h,Ka(this,t.j),this.s=t.s,this.g=t.g,Ha(this,t.m),this.l=t.l,e=t.i;var n=new Xi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),wp(this,n),this.o=t.o}else t&&(n=String(t).match(Bv))?(this.h=!!e,Ka(this,n[1]||"",!0),this.s=di(n[2]||""),this.g=di(n[3]||"",!0),Ha(this,n[4]),this.l=di(n[5]||"",!0),wp(this,n[6]||"",!0),this.o=di(n[7]||"")):(this.h=!!e,this.i=new Xi(null,this.h))}Fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fi(e,Ip,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fi(e,Ip,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fi(n,n.charAt(0)=="/"?Pk:Rk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fi(n,Lk)),t.join("")};function An(t){return new Fr(t)}function Ka(t,e,n){t.j=n?di(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ha(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wp(t,e,n){e instanceof Xi?(t.i=e,Vk(t.i,t.h)):(n||(e=fi(e,Mk)),t.i=new Xi(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function $c(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function di(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Nk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Nk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ip=/[#\/\?@]/g,Rk=/[#\?:]/g,Pk=/[#\?]/g,Mk=/[#\?@]/g,Lk=/#/g;function Xi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lr(t){t.g||(t.g=new Map,t.h=0,t.i&&Ok(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}J=Xi.prototype;J.add=function(t,e){lr(this),this.i=null,t=qs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $v(t,e){lr(t),e=qs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function jv(t,e){return lr(t),e=qs(t,e),t.g.has(e)}J.forEach=function(t,e){lr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};J.oa=function(){lr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};J.W=function(t){lr(this);let e=[];if(typeof t=="string")jv(this,t)&&(e=e.concat(this.g.get(qs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};J.set=function(t,e){return lr(this),this.i=null,t=qs(this,t),jv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};J.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function qv(t,e,n){$v(t,e),0<n.length&&(t.i=null,t.g.set(qs(t,e),Vh(n)),t.h+=n.length)}J.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function qs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Vk(t,e){e&&!t.j&&(lr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&($v(this,r),qv(this,s,n))},t)),t.j=e}var Fk=class{constructor(t,e){this.h=t,this.g=e}};function Kv(t){this.l=t||Uk,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ga&&se.g.Ga()&&se.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Uk=10;function Hv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zv(t){return t.h?1:t.g?t.g.size:0}function Al(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yh(t,e){t.g?t.g.add(e):t.h=e}function Gv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Kv.prototype.cancel=function(){if(this.i=Wv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vh(t.i)}function Xh(){}Xh.prototype.stringify=function(t){return se.JSON.stringify(t,void 0)};Xh.prototype.parse=function(t){return se.JSON.parse(t,void 0)};function Bk(){this.g=new Xh}function $k(t,e,n){const r=n||"";try{Uv(t,function(s,i){let o=s;Eo(s)&&(o=Kh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function jk(t,e){const n=new Lc;if(se.Image){const r=new Image;r.onload=Qo(Xo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Qo(Xo,n,r,"TestLoadImage: error",!1,e),r.onabort=Qo(Xo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Qo(Xo,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function xo(t){this.l=t.ac||null,this.j=t.jb||!1}ht(xo,Gh);xo.prototype.g=function(){return new jc(this.l,this.j)};xo.prototype.i=function(t){return function(){return t}}({});function jc(t,e){Ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Jh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(jc,Ze);var Jh=0;J=jc.prototype;J.open=function(t,e){if(this.readyState!=Jh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ji(this)};J.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||se).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};J.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Do(this)),this.readyState=Jh};J.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Qv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}J.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Do(this):Ji(this),this.readyState==3&&Qv(this)}};J.Va=function(t){this.g&&(this.response=this.responseText=t,Do(this))};J.Ua=function(t){this.g&&(this.response=t,Do(this))};J.ga=function(){this.g&&Do(this)};function Do(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ji(t)}J.setRequestHeader=function(t,e){this.v.append(t,e)};J.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};J.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ji(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qk=se.JSON.parse;function Be(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yv,this.K=this.L=!1}ht(Be,Ze);var Yv="",Kk=/^https?$/i,Hk=["POST","PUT"];J=Be.prototype;J.Ka=function(t){this.L=t};J.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():El.g(),this.C=this.u?vp(this.u):vp(El),this.g.onreadystatechange=gt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){bp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=se.FormData&&t instanceof se.FormData,!(0<=dv(Hk,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zv(this),0<this.B&&((this.K=zk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=gt(this.qa,this)):this.A=zh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){bp(this,i)}};function zk(t){return Ns&&uk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}J.qa=function(){typeof Lh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function bp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xv(t),qc(t)}function Xv(t){t.D||(t.D=!0,ct(t,"complete"),ct(t,"error"))}J.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),qc(this))};J.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qc(this,!0)),Be.X.M.call(this)};J.Ha=function(){this.s||(this.F||this.v||this.l?Jv(this):this.fb())};J.fb=function(){Jv(this)};function Jv(t){if(t.h&&typeof Lh<"u"&&(!t.C[1]||_n(t)!=4||t.aa()!=2)){if(t.v&&_n(t)==4)zh(t.Ha,0,t);else if(ct(t,"readystatechange"),_n(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Bv)[1]||null;if(!s&&se.self&&se.self.location){var i=se.self.location.protocol;s=i.substr(0,i.length-1)}r=!Kk.test(s?s.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Xv(t)}}finally{qc(t)}}}}function qc(t,e){if(t.g){Zv(t);const n=t.g,r=t.C[0]?Ba:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function Zv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}J.aa=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};J.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};J.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qk(e)}};function _p(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Yv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}J.Ea=function(){return this.m};J.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ew(t){let e="";return Uh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ew(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function ti(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tw(t){this.Ca=0,this.i=[],this.j=new Lc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ti("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ti("baseRetryDelayMs",5e3,t),this.bb=ti("retryDelaySeedMs",1e4,t),this.$a=ti("forwardChannelMaxRetries",2,t),this.ta=ti("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Kv(t&&t.concurrentRequestLimit),this.Fa=new Bk,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}J=tw.prototype;J.ma=8;J.G=1;function ed(t){if(nw(t),t.G==3){var e=t.U++,n=An(t.F);Le(n,"SID",t.I),Le(n,"RID",e),Le(n,"TYPE","terminate"),Oo(t,n),e=new Ao(t,t.j,e,void 0),e.K=2,e.v=$c(An(n)),n=!1,se.navigator&&se.navigator.sendBeacon&&(n=se.navigator.sendBeacon(e.v.toString(),"")),!n&&se.Image&&(new Image().src=e.v,n=!0),n||(e.g=lw(e.l,null),e.g.da(e.v)),e.F=Date.now(),ko(e)}cw(t)}function Kc(t){t.g&&(nd(t),t.g.cancel(),t.g=null)}function nw(t){Kc(t),t.u&&(se.clearTimeout(t.u),t.u=null),za(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function Hc(t){Hv(t.h)||t.m||(t.m=!0,Tv(t.Ja,t),t.C=0)}function Gk(t,e){return zv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=So(gt(t.Ja,t,e),aw(t,t.C)),t.C++,!0)}J.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Ao(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=mv(i),yv(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rw(this,s,e),n=An(this.F),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Oo(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(ew(i)))+"&"+e:this.o&&Zh(n,this.o,i)),Yh(this.h,s),this.Ya&&Le(n,"TYPE","init"),this.O?(Le(n,"$req",e),Le(n,"SID","null"),s.Z=!0,Sl(s,n,null)):Sl(s,n,e),this.G=2}}else this.G==3&&(t?Ep(this,t):this.i.length==0||Hv(this.h)||Ep(this))};function Ep(t,e){var n;e?n=e.m:n=t.U++;const r=An(t.F);Le(r,"SID",t.I),Le(r,"RID",n),Le(r,"AID",t.T),Oo(t,r),t.o&&t.s&&Zh(r,t.o,t.s),n=new Ao(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=rw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Yh(t.h,n),Sl(n,r,e)}function Oo(t,e){t.ia&&Uh(t.ia,function(n,r){Le(e,r,n)}),t.l&&Uv({},function(n,r){Le(e,r,n)})}function rw(t,e,n){n=Math.min(t.i.length,n);var r=t.l?gt(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{$k(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function sw(t){t.g||t.u||(t.Z=1,Tv(t.Ia,t),t.A=0)}function td(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=So(gt(t.Ia,t),aw(t,t.A)),t.A++,!0)}J.Ia=function(){if(this.u=null,iw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=So(gt(this.eb,this),t)}};J.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,wt(10),Kc(this),iw(this))};function nd(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function iw(t){t.g=new Ao(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=An(t.sa);Le(e,"RID","rpc"),Le(e,"SID",t.I),Le(e,"CI",t.L?"0":"1"),Le(e,"AID",t.T),Le(e,"TYPE","xmlhttp"),Oo(t,e),t.o&&t.s&&Zh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=$c(An(e)),n.s=null,n.P=!0,Mv(n,t)}J.cb=function(){this.v!=null&&(this.v=null,Kc(this),td(this),wt(19))};function za(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function ow(t,e){var n=null;if(t.g==e){za(t),nd(t),t.g=null;var r=2}else if(Al(t.h,e))n=e.D,Gv(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Vc(),ct(r,new Ov(r,n)),Hc(t)}else sw(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&Gk(t,e)||r==2&&td(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Rr(t,5);break;case 4:Rr(t,10);break;case 3:Rr(t,6);break;default:Rr(t,2)}}}function aw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Rr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=gt(t.kb,t);n||(n=new Fr("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||Ka(n,"https"),$c(n)),jk(n.toString(),r)}else wt(2);t.G=0,t.l&&t.l.va(e),cw(t),nw(t)}J.kb=function(t){t?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function cw(t){if(t.G=0,t.la=[],t.l){const e=Wv(t.h);(e.length!=0||t.i.length!=0)&&(dp(t.la,e),dp(t.la,t.i),t.h.i.length=0,Vh(t.i),t.i.length=0),t.l.ua()}}function uw(t,e,n){var r=n instanceof Fr?An(n):new Fr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ha(r,r.m);else{var s=se.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Fr(null,void 0);r&&Ka(i,r),e&&(i.g=e),s&&Ha(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Le(r,n,e),Le(r,"VER",t.ma),Oo(t,r),r}function lw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Be(new xo({jb:!0})):new Be(t.ra),e.Ka(t.H),e}function hw(){}J=hw.prototype;J.xa=function(){};J.wa=function(){};J.va=function(){};J.ua=function(){};J.Ra=function(){};function Ga(){if(Ns&&!(10<=Number(lk)))throw Error("Environmental error: no available transport.")}Ga.prototype.g=function(t,e){return new Vt(t,e)};function Vt(t,e){Ze.call(this),this.g=new tw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!$a(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$a(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ks(this)}ht(Vt,Ze);Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=uw(t,null,t.V),Hc(t)};Vt.prototype.close=function(){ed(this.g)};Vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kh(t),t=n);e.i.push(new Fk(e.ab++,t)),e.G==3&&Hc(e)};Vt.prototype.M=function(){this.g.l=null,delete this.j,ed(this.g),delete this.g,Vt.X.M.call(this)};function dw(t){Wh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ht(dw,Wh);function fw(){Qh.call(this),this.status=1}ht(fw,Qh);function Ks(t){this.g=t}ht(Ks,hw);Ks.prototype.xa=function(){ct(this.g,"a")};Ks.prototype.wa=function(t){ct(this.g,new dw(t))};Ks.prototype.va=function(t){ct(this.g,new fw)};Ks.prototype.ua=function(){ct(this.g,"b")};Ga.prototype.createWebChannel=Ga.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;Fc.NO_ERROR=0;Fc.TIMEOUT=8;Fc.HTTP_ERROR=6;Nv.COMPLETE="complete";Rv.EventType=Co;Co.OPEN="a";Co.CLOSE="b";Co.ERROR="c";Co.MESSAGE="d";Ze.prototype.listen=Ze.prototype.N;Be.prototype.listenOnce=Be.prototype.O;Be.prototype.getLastError=Be.prototype.Oa;Be.prototype.getLastErrorCode=Be.prototype.Ea;Be.prototype.getStatus=Be.prototype.aa;Be.prototype.getResponseJson=Be.prototype.Sa;Be.prototype.getResponseText=Be.prototype.fa;Be.prototype.send=Be.prototype.da;Be.prototype.setWithCredentials=Be.prototype.Ka;var Wk=function(){return new Ga},Qk=function(){return Vc()},Lu=Fc,Yk=Nv,Xk=is,Tp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Jk=xo,Jo=Rv,Zk=Be;const Sp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Th("@firebase/firestore");function kl(){return zr.logLevel}function U(t,...e){if(zr.logLevel<=Se.DEBUG){const n=e.map(rd);zr.debug(`Firestore (${Hs}): ${t}`,...n)}}function vt(t,...e){if(zr.logLevel<=Se.ERROR){const n=e.map(rd);zr.error(`Firestore (${Hs}): ${t}`,...n)}}function Wa(t,...e){if(zr.logLevel<=Se.WARN){const n=e.map(rd);zr.warn(`Firestore (${Hs}): ${t}`,...n)}}function rd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw vt(e),new Error(e)}function ce(t,e){t||ee()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ex{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class tx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nx{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new pw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new rt(e)}}class rx{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ce(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class sx{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new rx(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ix{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ox{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.A=n.token,new ix(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ax(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Rs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function mw(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Fe(0,0))}static max(){return new re(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends Zi{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const cx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Zi{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return cx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new G(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new G(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ke.fromString(e))}static fromName(e){return new H(ke.fromString(e).popFirst(5))}static empty(){return new H(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ke(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function xl(t){return t.fields.find(e=>e.kind===2)}function br(t){return t.fields.filter(e=>e.kind!==2)}yw.UNKNOWN_ID=-1;class ux{constructor(e,n){this.fieldPath=e,this.kind=n}}class Qa{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Qa(0,Ft.min())}}function lx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Ft(s,H.empty(),e)}function vw(t){return new Ft(t.readTime,t.key,-1)}class Ft{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ft(re.min(),H.empty(),-1)}static max(){return new Ft(re.max(),H.empty(),-1)}}function sd(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Iw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==ww)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(s=>s?E.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new E((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new E((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new dn,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Ei(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const s=id(r.target.error);this.P.reject(new Ei(e,s))}}static open(e,n,r,s){try{return new zc(n,e.transaction(s,r))}catch(i){throw new Ei(n,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new dx(n)}}class En{constructor(e,n,r){this.name=e,this.version=n,this.S=r,En.D(We())===12.2&&vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Ar(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!ky())return!1;if(En.N())return!0;const e=We(),n=En.D(e),r=0<n&&n<10,s=En.k(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Ei(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new G(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new G(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ei(e,o))},s.onupgradeneeded=i=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.$(o,s.transaction,i.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=zc.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),E.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class hx{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return Ar(this.U.delete())}}class Ei extends G{constructor(e,n){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function hr(t){return t.name==="IndexedDbTransactionError"}class dx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ar(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Ar(this.store.add(e))}get(e){return Ar(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Ar(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Ar(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.H(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new E((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new E((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}Y(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const s=this.cursor(r);return this.H(s,(i,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.H(s,n)}tt(e){const n=this.cursor({});return new E((r,s)=>{n.onerror=i=>{const o=id(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new E((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new hx(a),u=n(a.primaryKey,a.value,c);if(u instanceof E){const l=u.catch(h=>(c.done(),E.reject(h)));r.push(l)}c.isDone?s():c.G===null?a.continue():a.continue(c.G)}}).next(()=>E.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ar(t){return new E((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=id(r.target.error);n(s)}})}let Cp=!1;function id(t){const e=En.D(We());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new G("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cp||(Cp=!0,setTimeout(()=>{throw r},0)),r}}return t}class fx{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){U("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){hr(n)?U("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await os(n)}await this.nt(6e4)})}}class px{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let s=n,i=!0;return E.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(s,i)).next(a=>(U("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=vw(i);sd(o,r)>0&&(r=o)}),new Ft(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.at=-1;class ze{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zo(this.root,e,this.comparator,!0)}}class Zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:st.RED,this.left=s!=null?s:st.EMPTY,this.right=i!=null?i:st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,s){return this}insert(t,e,n){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kp(this.data.getIterator())}getIteratorFrom(e){return new kp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class kp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function hs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new De(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new lt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const gx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(ce(!!t),typeof t=="string"){let e=0;const n=gx.exec(t);if(ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gr(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ew(t){const e=t.mapValue.fields.__previous_value__;return _w(e)?Ew(e):e}function eo(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wr&&e.projectId===this.projectId&&e.database===this.database}}function Gc(t){return t==null}function to(t){return t===0&&1/t==-1/0}function yx(t){return typeof t=="number"&&Number.isInteger(t)&&!to(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},va={nullValue:"NULL_VALUE"};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_w(t)?4:Tw(t)?9007199254740991:10:ee()}function pn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return eo(t).isEqual(eo(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=or(r.timestampValue),o=or(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Gr(r.bytesValue).isEqual(Gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ue(r.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ue(r.integerValue)===Ue(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ue(r.doubleValue),o=Ue(s.doubleValue);return i===o?to(i)===to(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ap(i)!==Ap(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!pn(i[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function no(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function ar(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ue(s.integerValue||s.doubleValue),a=Ue(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return xp(t.timestampValue,e.timestampValue);case 4:return xp(eo(t),eo(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Gr(s),a=Gr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=he(o[c],a[c]);if(u!==0)return u}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=he(Ue(s.latitude),Ue(i.latitude));return o!==0?o:he(Ue(s.longitude),Ue(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ar(o[c],a[c]);if(u)return u}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Qn.mapValue&&i===Qn.mapValue)return 0;if(s===Qn.mapValue)return 1;if(i===Qn.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=he(a[l],u[l]);if(h!==0)return h;const d=ar(o[a[l]],c[u[l]]);if(d!==0)return d}return he(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function xp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=or(t),r=or(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function As(t){return Dl(t)}function Dl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=or(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Dl(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Dl(r.fields[a])}`;return i+"}"}(t.mapValue):ee();var e,n}function ro(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ol(t){return!!t&&"integerValue"in t}function so(t){return!!t&&"arrayValue"in t}function Dp(t){return!!t&&"nullValue"in t}function Op(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wa(t){return!!t&&"mapValue"in t}function Ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Tw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function vx(t){return"nullValue"in t?va:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ro(Wr.empty(),H.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:ee()}function wx(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ro(Wr.empty(),H.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Qn:ee()}function Np(t,e){const n=ar(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Rp(t,e){const n=ar(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(n)}setAll(e){let n=Ke.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ti(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];wa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){as(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(Ti(this.value))}}function Sw(t){const e=[];return as(t.fields,(n,r)=>{const s=new Ke([n]);if(wa(r)){const i=Sw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ve(e,0,re.min(),re.min(),pt.empty(),0)}static newFoundDocument(e,n,r){return new Ve(e,1,n,re.min(),r,0)}static newNoDocument(e,n){return new Ve(e,2,n,re.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,re.min(),pt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Pp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ix(t,e,n,r,s,i,o)}function Yr(t){const e=ue(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+As(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.ht=n}return e.ht}function bx(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${As(r.value)}`;var r}).join(", ")}]`),Gc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>As(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>As(n)).join(",")),`Target(${e})`}function No(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!xx(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!pn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fp(t.startAt,e.startAt)&&Fp(t.endAt,e.endAt)}function Ya(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Xa(t,e){return t.filters.filter(n=>n instanceof ot&&n.field.isEqual(e))}function Mp(t,e,n){let r=va,s=!0;for(const i of Xa(t,e)){let o=va,a=!0;switch(i.op){case"<":case"<=":o=vx(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=va}Np({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Np({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function Lp(t,e,n){let r=Qn,s=!0;for(const i of Xa(t,e)){let o=Qn,a=!0;switch(i.op){case">=":case">":o=wx(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Qn}Rp({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Rp({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}class ot extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new _x(e,n,r):n==="array-contains"?new Sx(e,r):n==="in"?new Cx(e,r):n==="not-in"?new Ax(e,r):n==="array-contains-any"?new kx(e,r):new ot(e,n,r)}static lt(e,n,r){return n==="in"?new Ex(e,r):new Tx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ar(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.ft(ar(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class _x extends ot{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.ft(n)}}class Ex extends ot{constructor(e,n){super(e,"in",n),this.keys=Cw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Tx extends ot{constructor(e,n){super(e,"not-in",n),this.keys=Cw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Sx extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return so(n)&&no(n.arrayValue,this.value)}}class Cx extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&no(this.value.arrayValue,n)}}class Ax extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(no(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!no(this.value.arrayValue,n)}}class kx extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!so(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>no(this.value.arrayValue,r))}}class Ps{constructor(e,n){this.position=e,this.inclusive=n}}class Si{constructor(e,n="asc"){this.field=e,this.dir=n}}function xx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ar(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function Dx(t,e,n,r,s,i,o,a){return new Ro(t,e,n,r,s,i,o,a)}function od(t){return new Ro(t)}function Up(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Aw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function kw(t){for(const e of t.filters)if(e.dt())return e.field;return null}function xw(t){return t.collectionGroup!==null}function io(t){const e=ue(t);if(e._t===null){e._t=[];const n=kw(e),r=Aw(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Si(n)),e._t.push(new Si(Ke.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Si(Ke.keyField(),i))}}}return e._t}function Jt(t){const e=ue(t);if(!e.wt)if(e.limitType==="F")e.wt=Pp(e.path,e.collectionGroup,io(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of io(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Si(i.field,o))}const r=e.endAt?new Ps(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ps(e.startAt.position,e.startAt.inclusive):null;e.wt=Pp(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.wt}function Nl(t,e,n){return new Ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wc(t,e){return No(Jt(t),Jt(e))&&t.limitType===e.limitType}function Dw(t){return`${Yr(Jt(t))}|lt:${t.limitType}`}function Rl(t){return`Query(target=${bx(Jt(t))}; limitType=${t.limitType})`}function ad(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):H.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Vp(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,io(n),r)||n.endAt&&!function(s,i,o){const a=Vp(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,io(n),r))}(t,e)}function Ox(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ow(t){return(e,n)=>{let r=!1;for(const s of io(t)){const i=Nx(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Nx(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?ar(a,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:to(e)?"-0":e}}function Rw(t){return{integerValue:""+t}}function Rx(t,e){return yx(e)?Rw(e):Nw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this._=void 0}}function Px(t,e,n){return t instanceof oo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Xr?Mw(t,e):t instanceof Jr?Lw(t,e):function(r,s){const i=Pw(r,s),o=Bp(i)+Bp(r.yt);return Ol(i)&&Ol(r.yt)?Rw(o):Nw(r.It,o)}(t,e)}function Mx(t,e,n){return t instanceof Xr?Mw(t,e):t instanceof Jr?Lw(t,e):n}function Pw(t,e){return t instanceof ao?Ol(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class oo extends Qc{}class Xr extends Qc{constructor(e){super(),this.elements=e}}function Mw(t,e){const n=Vw(e);for(const r of t.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Jr extends Qc{constructor(e){super(),this.elements=e}}function Lw(t,e){let n=Vw(e);for(const r of t.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class ao extends Qc{constructor(e,n){super(),this.It=e,this.yt=n}}function Bp(t){return Ue(t.integerValue||t.doubleValue)}function Vw(t){return so(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n){this.field=e,this.transform=n}}function Lx(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Xr&&r instanceof Xr||n instanceof Jr&&r instanceof Jr?Rs(n.elements,r.elements,pn):n instanceof ao&&r instanceof ao?pn(n.yt,r.yt):n instanceof oo&&r instanceof oo}(t.transform,e.transform)}class Vx{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yc{}function Fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ud(t.key,It.none()):new zs(t.key,t.data,It.none());{const n=t.data,r=pt.empty();let s=new De(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Nn(t.key,r,new Pt(s.toArray()),It.none())}}function Fx(t,e,n){t instanceof zs?function(r,s,i){const o=r.value.clone(),a=jp(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nn?function(r,s,i){if(!Ia(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=jp(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Uw(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ci(t,e,n,r){return t instanceof zs?function(s,i,o,a){if(!Ia(s.precondition,i))return o;const c=s.value.clone(),u=qp(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nn?function(s,i,o,a){if(!Ia(s.precondition,i))return o;const c=qp(s.fieldTransforms,a,i),u=i.data;return u.setAll(Uw(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(s,i,o){return Ia(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Ux(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Pw(r.transform,s||null);i!=null&&(n===null&&(n=pt.empty()),n.set(r.field,i))}return n||null}function $p(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Rs(n,r,(s,i)=>Lx(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zs extends Yc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nn extends Yc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jp(t,e,n){const r=new Map;ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Mx(o,a,n[s]))}return r}function qp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Px(i,o,e))}return r}class ud extends Yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bw extends Yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,Ie;function $x(t){switch(t){default:return ee();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function $w(t){if(t===void 0)return vt("GRPC error has no .code"),N.UNKNOWN;switch(t){case qe.OK:return N.OK;case qe.CANCELLED:return N.CANCELLED;case qe.UNKNOWN:return N.UNKNOWN;case qe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case qe.INTERNAL:return N.INTERNAL;case qe.UNAVAILABLE:return N.UNAVAILABLE;case qe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case qe.NOT_FOUND:return N.NOT_FOUND;case qe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case qe.ABORTED:return N.ABORTED;case qe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case qe.DATA_LOSS:return N.DATA_LOSS;default:return ee()}}(Ie=qe||(qe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return bw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=new ze(H.comparator);function Ot(){return jx}const jw=new ze(H.comparator);function pi(...t){let e=jw;for(const n of t)e=e.insert(n.key,n);return e}function qw(t){let e=jw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function an(){return Ai()}function Kw(){return Ai()}function Ai(){return new dr(t=>t.toString(),(t,e)=>t.isEqual(e))}const qx=new ze(H.comparator),Kx=new De(H.comparator);function ge(...t){let e=Kx;for(const n of t)e=e.add(n);return e}const Hx=new De(he);function Hw(){return Hx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xc(re.min(),s,Hw(),Ot(),ge())}}class Po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r,s){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=s}}class zw{constructor(e,n){this.targetId=e,this.At=n}}class Gw{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Kp{constructor(){this.Rt=0,this.bt=zp(),this.Pt=lt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ge(),n=ge(),r=ge();return this.bt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new Po(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=zp()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class zx{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Ot(),this.qt=Hp(),this.Kt=new De(he)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,s)=>{this.Ht(s)&&n(s)})}Yt(e){const n=e.targetId,r=e.At.count,s=this.Xt(n);if(s){const i=s.target;if(Ya(i))if(r===0){const o=new H(i.path);this.jt(n,o,Ve.newNoDocument(o,re.min()))}else ce(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Ya(a.target)){const c=new H(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Ve.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let r=ge();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const s=new Xc(e,n,this.Kt,this.Ut,r);return this.Ut=Ot(),this.qt=Hp(),this.Kt=new De(he),s}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const s=this.zt(e);this.ee(e,n)?s.kt(n,1):s.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Kp,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new De(he),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Kp),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Hp(){return new ze(H.comparator)}function zp(){return new ze(H.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Wx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Qx{constructor(e,n){this.databaseId=e,this.gt=n}}function co(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ww(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Yx(t,e){return co(t,e.toTimestamp())}function Mt(t){return ce(!!t),re.fromTimestamp(function(e){const n=or(e);return new Fe(n.seconds,n.nanos)}(t))}function ld(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Qw(t){const e=ke.fromString(t);return ce(nI(e)),e}function Ja(t,e){return ld(t.databaseId,e.path)}function Ur(t,e){const n=Qw(e);if(n.get(1)!==t.databaseId.projectId)throw new G(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Xw(n))}function Pl(t,e){return ld(t.databaseId,e)}function Yw(t){const e=Qw(t);return e.length===4?ke.emptyPath():Xw(e)}function Ml(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xw(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gp(t,e,n){return{name:Ja(t,e),fields:n.value.mapValue.fields}}function Xx(t,e,n){const r=Ur(t,e.name),s=Mt(e.updateTime),i=new pt({mapValue:{fields:e.fields}}),o=Ve.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Jx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.gt?(ce(u===void 0||typeof u=="string"),lt.fromBase64String(u||"")):(ce(u===void 0||u instanceof Uint8Array),lt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?N.UNKNOWN:$w(c.code);return new G(u,c.message||"")}(o);n=new Gw(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ur(t,r.document.name),i=Mt(r.document.updateTime),o=new pt({mapValue:{fields:r.document.fields}}),a=Ve.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ba(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ur(t,r.document),i=r.readTime?Mt(r.readTime):re.min(),o=Ve.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ur(t,r.document),i=r.removedTargetIds||[];n=new ba([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Bx(s),o=r.targetId;n=new zw(o,i)}}return n}function Za(t,e){let n;if(e instanceof zs)n={update:Gp(t,e.key,e.value)};else if(e instanceof ud)n={delete:Ja(t,e.key)};else if(e instanceof Nn)n={update:Gp(t,e.key,e.data),updateMask:iD(e.fieldMask)};else{if(!(e instanceof Bw))return ee();n={verify:Ja(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof oo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Jr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ao)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Yx(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function Ll(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?It.updateTime(Mt(s.updateTime)):s.exists!==void 0?It.exists(s.exists):It.none()}(e.currentDocument):It.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)ce(o.setToServerValue==="REQUEST_TIME"),a=new oo;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Xr(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Jr(u)}else"increment"in o?a=new ao(i,o.increment):ee();const c=Ke.fromServerFormat(o.fieldPath);return new cd(c,a)}(t,s)):[];if(e.update){e.update.name;const s=Ur(t,e.update.name),i=new pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Pt(c.map(u=>Ke.fromServerFormat(u)))}(e.updateMask);return new Nn(s,i,o,n,r)}return new zs(s,i,n,r)}if(e.delete){const s=Ur(t,e.delete);return new ud(s,n)}if(e.verify){const s=Ur(t,e.verify);return new Bw(s,n)}return ee()}function Zx(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Mt(r.updateTime):Mt(s);return i.isEqual(re.min())&&(i=Mt(s)),new Vx(i,r.transformResults||[])}(n,e))):[]}function Jw(t,e){return{documents:[Pl(t,e.path)]}}function Zw(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Pl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Op(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NAN"}};if(Dp(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Op(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NOT_NAN"}};if(Dp(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(h.field),op:nD(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ds(l.field),direction:tD(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.gt||Gc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function eI(t){let e=Yw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ce(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=tI(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Si(ws(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Gc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ps(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ps(d,h)}(n.endAt)),Dx(e,s,o,i,a,"F",c,u)}function eD(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function tI(t){return t?t.unaryFilter!==void 0?[sD(t)]:t.fieldFilter!==void 0?[rD(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>tI(e)).reduce((e,n)=>e.concat(n)):ee():[]}function tD(t){return Gx[t]}function nD(t){return Wx[t]}function ds(t){return{fieldPath:t.canonicalString()}}function ws(t){return Ke.fromServerFormat(t.fieldPath)}function rD(t){return ot.create(ws(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function sD(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ws(t.unaryFilter.field);return ot.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ws(t.unaryFilter.field);return ot.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ws(t.unaryFilter.field);return ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ws(t.unaryFilter.field);return ot.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function iD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wp(e)),e=oD(t.get(n),e);return Wp(e)}function oD(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Wp(t){return t+""}function cn(t){const e=t.length;if(ce(e>=2),e===2)return ce(t.charAt(0)===""&&t.charAt(1)===""),ke.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&ee(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:ee()}i=o+2}return new ke(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t,e){return[t,_t(e)]}function rI(t,e,n){return[t,_t(e),n]}const aD={},cD=["prefixPath","collectionGroup","readTime","documentId"],uD=["prefixPath","collectionGroup","documentId"],lD=["collectionGroup","readTime","prefixPath","documentId"],hD=["canonicalId","targetId"],dD=["targetId","path"],fD=["path","targetId"],pD=["collectionId","parent"],gD=["indexId","uid"],mD=["uid","sequenceNumber"],yD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vD=["indexId","uid","orderedDocumentKey"],wD=["userId","collectionPath","documentId"],ID=["userId","collectionPath","largestBatchId"],bD=["userId","collectionGroup","largestBatchId"],sI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_D=[...sI,"documentOverlays"],iI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],oI=iI,ED=[...oI,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Iw{constructor(e,n){super(),this.ie=e,this.currentSequenceNumber=n}}function et(t,e){const n=ue(t);return En.M(n.ie,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Fx(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ci(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ci(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Kw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Fw(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,r)=>$p(n,r))&&Rs(this.baseMutations,e.baseMutations,(n,r)=>$p(n,r))}}class dd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ce(e.mutations.length===r.length);let s=qx;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new dd(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,s,i=re.min(),o=re.min(),a=lt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.re=e}}function TD(t,e){let n;if(e.document)n=Xx(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=H.fromSegments(e.noDocument.path),s=es(e.noDocument.readTime);n=Ve.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return ee();{const r=H.fromSegments(e.unknownDocument.path),s=es(e.unknownDocument.version);n=Ve.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(r){const s=new Fe(r[0],r[1]);return re.fromTimestamp(s)}(e.readTime)),n}function Yp(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ec(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:Ja(s,i.key),fields:i.data.value.mapValue.fields,updateTime:co(s,i.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Zr(e.version)};else{if(!e.isUnknownDocument())return ee();r.unknownDocument={path:n.path.toArray(),version:Zr(e.version)}}return r}function ec(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Zr(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function es(t){const e=new Fe(t.seconds,t.nanoseconds);return re.fromTimestamp(e)}function kr(t,e){const n=(e.baseMutations||[]).map(i=>Ll(t.re,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Ll(t.re,i)),s=Fe.fromMillis(e.localWriteTimeMs);return new hd(e.batchId,s,n,r)}function gi(t){const e=es(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?es(t.lastLimboFreeSnapshotVersion):re.min();let r;var s;return t.query.documents!==void 0?(ce((s=t.query).documents.length===1),r=Jt(od(Yw(s.documents[0])))):r=function(i){return Jt(eI(i))}(t.query),new nr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,lt.fromBase64String(t.resumeToken))}function cI(t,e){const n=Zr(e.snapshotVersion),r=Zr(e.lastLimboFreeSnapshotVersion);let s;s=Ya(e.target)?Jw(t.re,e.target):Zw(t.re,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Yr(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function uI(t){const e=eI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nl(e,e.limit,"L"):e}function Vu(t,e){return new fd(e.largestBatchId,Ll(t.re,e.overlayMutation))}function Xp(t,e){const n=e.path.lastSegment();return[t,_t(e.path.popLast()),n]}function Jp(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Zr(r.readTime),documentKey:_t(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{getBundleMetadata(e,n){return Zp(e).get(n).next(r=>{if(r)return{id:(s=r).bundleId,createTime:es(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return Zp(e).put({bundleId:(r=n).id,createTime:Zr(Mt(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return eg(e).get(n).next(r=>{if(r)return{name:(s=r).name,query:uI(s.bundledQuery),readTime:es(s.readTime)};var s})}saveNamedQuery(e,n){return eg(e).put(function(r){return{name:r.name,readTime:Zr(Mt(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function Zp(t){return et(t,"bundles")}function eg(t){return et(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.It=e,this.userId=n}static oe(e,n){const r=n.uid||"";return new Jc(e,r)}getOverlay(e,n){return ni(e).get(Xp(this.userId,n)).next(r=>r?Vu(this.It,r):null)}getOverlays(e,n){const r=an();return E.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new fd(n,o);s.push(this.ue(e,a))}),E.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(_t(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(ni(e).Y("collectionPathOverlayIndex",a))}),E.waitFor(i)}getOverlaysForCollection(e,n,r){const s=an(),i=_t(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ni(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Vu(this.It,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=an();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ni(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Vu(this.It,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}ue(e,n){return ni(e).put(function(r,s,i){const[o,a,c]=Xp(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Za(r.re,i.mutation)}}(this.It,this.userId,n))}}function ni(t){return et(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){}ce(e,n){this.ae(e,n),n.he()}ae(e,n){if("nullValue"in e)this.le(n,5);else if("booleanValue"in e)this.le(n,10),n.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(n,15),n.fe(Ue(e.integerValue));else if("doubleValue"in e){const r=Ue(e.doubleValue);isNaN(r)?this.le(n,13):(this.le(n,15),to(r)?n.fe(0):n.fe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.le(n,20),typeof r=="string"?n.de(r):(n.de(`${r.seconds||""}`),n.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,n),this.we(n);else if("bytesValue"in e)this.le(n,30),n.me(Gr(e.bytesValue)),this.we(n);else if("referenceValue"in e)this.ge(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.le(n,45),n.fe(r.latitude||0),n.fe(r.longitude||0)}else"mapValue"in e?Tw(e)?this.le(n,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,n),this.we(n)):"arrayValue"in e?(this.pe(e.arrayValue,n),this.we(n)):ee()}_e(e,n){this.le(n,25),this.Ie(e,n)}Ie(e,n){n.de(e)}ye(e,n){const r=e.fields||{};this.le(n,55);for(const s of Object.keys(r))this._e(s,n),this.ae(r[s],n)}pe(e,n){const r=e.values||[];this.le(n,50);for(const s of r)this.ae(s,n)}ge(e,n){this.le(n,37),H.fromName(e).path.forEach(r=>{this.le(n,60),this.Ie(r,n)})}le(e,n){e.fe(n)}we(e){e.fe(2)}}xr.Te=new xr;function CD(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function tg(t){const e=64-function(n){let r=0;for(let s=0;s<8;++s){const i=CD(255&n[s]);if(r+=i,i!==8)break}return r}(t);return Math.ceil(e/8)}class AD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ae(r.value),r=n.next();this.Re()}be(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Pe(r.value),r=n.next();this.ve()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const s=n.codePointAt(0);this.Ae(240|s>>>18),this.Ae(128|63&s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s)}}this.Re()}Se(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Pe(r);else if(r<2048)this.Pe(960|r>>>6),this.Pe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r);else{const s=n.codePointAt(0);this.Pe(240|s>>>18),this.Pe(128|63&s>>>12),this.Pe(128|63&s>>>6),this.Pe(128|63&s)}}this.ve()}De(e){const n=this.Ce(e),r=tg(n);this.xe(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}Ne(e){const n=this.Ce(e),r=tg(n);this.xe(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const n=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}Ae(e){const n=255&e;n===0?(this.Oe(0),this.Oe(255)):n===255?(this.Oe(255),this.Oe(0)):this.Oe(n)}Pe(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class kD{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class xD{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class ri{constructor(){this.Be=new AD,this.Le=new kD(this.Be),this.Ue=new xD(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Dr(this.indexId,this.documentKey,this.arrayValue,r)}}function mr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=ng(t.arrayValue,e.arrayValue),n!==0?n:(n=ng(t.directionalValue,e.directionalValue),n!==0?n:H.comparator(t.documentKey,e.documentKey)))}function ng(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const n of e.filters){const r=n;r.dt()?this.je=r:this.Qe.push(r)}}We(e){const n=xl(e);if(n!==void 0&&!this.ze(n))return!1;const r=br(e);let s=0,i=0;for(;s<r.length&&this.ze(r[s]);++s);if(s===r.length)return!0;if(this.je!==void 0){const o=r[s];if(!this.He(this.je,o)||!this.Je(this.Ge[i++],o))return!1;++s}for(;s<r.length;++s){const o=r[s];if(i>=this.Ge.length||!this.Je(this.Ge[i++],o))return!1}return!0}ze(e){for(const n of this.Qe)if(this.He(n,e))return!0;return!1}He(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Je(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.Ye=new pd}addToCollectionParentIndex(e,n){return this.Ye.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Ft.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class pd{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new De(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new De(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Uint8Array(0);class ND{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new pd,this.Ze=new dr(r=>Yr(r),(r,s)=>No(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const i={collectionId:r,parent:_t(s)};return rg(e).put(i)}return E.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[mw(n),""],!1,!0);return rg(e).W(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(cn(o.parent))}return r})}addFieldIndex(e,n){const r=ta(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=ii(e);return i.next(a=>{o.put(Jp(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=ta(e),s=ii(e),i=si(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=si(e);let s=!0;const i=new Map;return E.forEach(this.tn(n),o=>this.en(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=ge();const a=[];return E.forEach(i,(c,u)=>{var l;U("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(_=>`${_.fieldPath}:${_.kind}`).join(",")}`} to execute ${Yr(n)}`);const h=function(_,T){const R=xl(T);if(R===void 0)return null;for(const S of Xa(_,R.fieldPath))switch(S.op){case"array-contains-any":return S.value.arrayValue.values||[];case"array-contains":return[S.value]}return null}(u,c),d=function(_,T){const R=new Map;for(const S of br(T))for(const O of Xa(_,S.fieldPath))switch(O.op){case"==":case"in":R.set(S.fieldPath.canonicalString(),O.value);break;case"not-in":case"!=":return R.set(S.fieldPath.canonicalString(),O.value),Array.from(R.values())}return null}(u,c),p=function(_,T){const R=[];let S=!0;for(const O of br(T)){const x=O.kind===0?Mp(_,O.fieldPath,_.startAt):Lp(_,O.fieldPath,_.startAt);R.push(x.value),S&&(S=x.inclusive)}return new Ps(R,S)}(u,c),f=function(_,T){const R=[];let S=!0;for(const O of br(T)){const x=O.kind===0?Lp(_,O.fieldPath,_.endAt):Mp(_,O.fieldPath,_.endAt);R.push(x.value),S&&(S=x.inclusive)}return new Ps(R,S)}(u,c),m=this.nn(c,u,p),I=this.nn(c,u,f),b=this.sn(c,u,d),k=this.rn(c.indexId,h,m,p.inclusive,I,f.inclusive,b);return E.forEach(k,_=>r.J(_,n.limit).next(T=>{T.forEach(R=>{const S=H.fromSegments(R.documentKey);o.has(S)||(o=o.add(S),a.push(S))})}))}).next(()=>a)}return E.resolve(null)})}tn(e){let n=this.Ze.get(e);return n||(n=[e],this.Ze.set(e,n),n)}rn(e,n,r,s,i,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,i.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.on(n[h/u]):ea,p=this.un(e,d,r[h%u],s),f=this.cn(e,d,i[h%u],o),m=a.map(I=>this.un(e,d,I,!0));l.push(...this.createRange(p,f,m))}return l}un(e,n,r,s){const i=new Dr(e,H.empty(),n,r);return s?i:i.Ke()}cn(e,n,r,s){const i=new Dr(e,H.empty(),n,r);return s?i.Ke():i}en(e,n){const r=new DD(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;return E.forEach(this.tn(n),s=>this.en(e,s).next(i=>{i?r!==0&&i.fields.length<function(o){let a=new De(Ke.comparator),c=!1;for(const u of o.filters){const l=u;l.field.isKeyField()||(l.op==="array-contains"||l.op==="array-contains-any"?c=!0:a=a.add(l.field))}for(const u of o.orderBy)u.field.isKeyField()||(a=a.add(u.field));return a.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>r)}an(e,n){const r=new ri;for(const s of br(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.qe(s.kind);xr.Te.ce(i,o)}return r.$e()}on(e){const n=new ri;return xr.Te.ce(e,n.qe(0)),n.$e()}hn(e,n){const r=new ri;return xr.Te.ce(ro(this.databaseId,n),r.qe(function(s){const i=br(s);return i.length===0?0:i[i.length-1].kind}(e))),r.$e()}sn(e,n,r){if(r===null)return[];let s=[];s.push(new ri);let i=0;for(const o of br(e)){const a=r[i++];for(const c of s)if(this.ln(n,o.fieldPath)&&so(a))s=this.fn(s,o,a);else{const u=c.qe(o.kind);xr.Te.ce(a,u)}}return this.dn(s)}nn(e,n,r){return this.sn(e,n,r.position)}dn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].$e();return n}fn(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new ri;c.seed(a.$e()),xr.Te.ce(o,c.qe(n.kind)),i.push(c)}return i}ln(e,n){return!!e.filters.find(r=>r instanceof ot&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ta(e),s=ii(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(i=>{const o=[];return E.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Qa(l.sequenceNumber,new Ft(es(l.readTime),new H(cn(l.documentKey)),l.largestBatchId)):Qa.empty(),d=u.fields.map(([p,f])=>new ux(Ke.fromServerFormat(p),f));return new yw(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:he(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=ta(e),i=ii(e);return this._n(e).next(o=>s.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>E.forEach(a,c=>i.put(Jp(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return E.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?E.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),E.forEach(a,c=>this.wn(e,s,c).next(u=>{const l=this.mn(i,c);return u.isEqual(l)?E.resolve():this.gn(e,i,c,u,l)}))))})}yn(e,n,r,s){return si(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.hn(r,n.key),documentKey:n.key.path.toArray()})}pn(e,n,r,s){return si(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.hn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const s=si(e);let i=new De(mr);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.hn(r,n)])},(o,a)=>{i=i.add(new Dr(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}mn(e,n){let r=new De(mr);const s=this.an(n,e);if(s==null)return r;const i=xl(n);if(i!=null){const o=e.data.field(i.fieldPath);if(so(o))for(const a of o.arrayValue.values||[])r=r.add(new Dr(n.indexId,e.key,this.on(a),s))}else r=r.add(new Dr(n.indexId,e.key,ea,s));return r}gn(e,n,r,s,i){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let f=hs(d),m=hs(p);for(;f||m;){let I=!1,b=!1;if(f&&m){const k=u(f,m);k<0?b=!0:k>0&&(I=!0)}else f!=null?b=!0:I=!0;I?(l(m),m=hs(p)):b?(h(f),f=hs(d)):(f=hs(d),m=hs(p))}}(s,i,mr,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.pn(e,n,r,a))}),E.waitFor(o)}_n(e){let n=1;return ii(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>mr(o,a)).filter((o,a,c)=>!a||mr(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=mr(o,e),c=mr(o,n);if(a===0)s[0]=e.Ke();else if(a>0&&c<0)s.push(o),s.push(o.Ke());else if(c>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2)i.push(IDBKeyRange.bound([s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,ea,[]],[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,ea,[]]));return i}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(sg)}getMinOffset(e,n){return E.mapArray(this.tn(n),r=>this.en(e,r).next(s=>s||ee())).next(sg)}}function rg(t){return et(t,"collectionParents")}function si(t){return et(t,"indexEntries")}function ta(t){return et(t,"indexConfiguration")}function ii(t){return et(t,"indexState")}function sg(t){ce(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;sd(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new Ft(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{ce(a===1)}));const u=[];for(const l of n.mutations){const h=rI(e,l.key.path,n.batchId);i.push(s.delete(h)),u.push(l.key)}return E.waitFor(i).next(()=>u)}function tc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw ee();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(41943040,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);class Zc{constructor(e,n,r,s){this.userId=e,this.It=n,this.indexManager=r,this.referenceDelegate=s,this.In={}}static oe(e,n,r,s){ce(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Zc(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ln(e).Z({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=gs(e),o=Ln(e);return o.add({}).next(a=>{ce(typeof a=="number");const c=new hd(a,n,r,s),u=function(d,p,f){const m=f.baseMutations.map(b=>Za(d.re,b)),I=f.mutations.map(b=>Za(d.re,b));return{userId:p,batchId:f.batchId,localWriteTimeMs:f.localWriteTime.toMillis(),baseMutations:m,mutations:I}}(this.It,this.userId,c),l=[];let h=new De((d,p)=>he(d.canonicalString(),p.canonicalString()));for(const d of s){const p=rI(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(p,aD))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),E.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return Ln(e).get(n).next(r=>r?(ce(r.userId===this.userId),kr(this.It,r)):null)}Tn(e,n){return this.In[n]?E.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.In[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Ln(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(ce(a.batchId>=r),i=kr(this.It,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ln(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ln(e).W("userMutationsIndex",n).next(r=>r.map(s=>kr(this.It,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=_a(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return gs(e).Z({range:s},(o,a,c)=>{const[u,l,h]=o,d=cn(l);if(u===this.userId&&n.path.isEqual(d))return Ln(e).get(h).next(p=>{if(!p)throw ee();ce(p.userId===this.userId),i.push(kr(this.It,p))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(he);const s=[];return n.forEach(i=>{const o=_a(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=gs(e).Z({range:a},(u,l,h)=>{const[d,p,f]=u,m=cn(p);d===this.userId&&i.path.isEqual(m)?r=r.add(f):h.done()});s.push(c)}),E.waitFor(s).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=_a(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new De(he);return gs(e).Z({range:o},(c,u,l)=>{const[h,d,p]=c,f=cn(d);h===this.userId&&r.isPrefixOf(f)?f.length===s&&(a=a.add(p)):l.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],s=[];return n.forEach(i=>{s.push(Ln(e).get(i).next(o=>{if(o===null)throw ee();ce(o.userId===this.userId),r.push(kr(this.It,o))}))}),E.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return lI(e.ie,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),E.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return E.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return gs(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=cn(i[1]);s.push(c)}else a.done()}).next(()=>{ce(s.length===0)})})}containsKey(e,n){return hI(e,this.userId,n)}Rn(e){return dI(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function hI(t,e,n){const r=_a(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return gs(t).Z({range:i,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function Ln(t){return et(t,"mutations")}function gs(t){return et(t,"documentMutations")}function dI(t){return et(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ts(0)}static vn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n){this.referenceDelegate=e,this.It=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new ts(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>re.fromTimestamp(new Fe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.Sn(e,s)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>fs(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(ce(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return fs(e).Z((o,a)=>{const c=gi(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>E.waitFor(i)).next(()=>s)}forEachTarget(e,n){return fs(e).Z((r,s)=>{const i=gi(s);n(i)})}Vn(e){return og(e).get("targetGlobalKey").next(n=>(ce(n!==null),n))}Sn(e,n){return og(e).put("targetGlobalKey",n)}Dn(e,n){return fs(e).put(cI(this.It,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Yr(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return fs(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=gi(a);No(n,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=Gn(e);return n.forEach(o=>{const a=_t(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(s)}removeMatchingKeys(e,n,r){const s=Gn(e);return E.forEach(n,i=>{const o=_t(i.path);return E.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=Gn(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=Gn(e);let i=ge();return s.Z({range:r,X:!0},(o,a,c)=>{const u=cn(o[1]),l=new H(u);i=i.add(l)}).next(()=>i)}containsKey(e,n){const r=_t(n.path),s=IDBKeyRange.bound([r],[mw(r)],!1,!0);let i=0;return Gn(e).Z({index:"documentTargetsIndex",X:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}se(e,n){return fs(e).get(n).next(r=>r?gi(r):null)}}function fs(t){return et(t,"targets")}function og(t){return et(t,"targetGlobal")}function Gn(t){return et(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag([t,e],[n,r]){const s=he(t,n);return s===0?he(e,r):s}class PD{constructor(e){this.xn=e,this.buffer=new De(ag),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ag(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class MD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){hr(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await os(n)}await this.Fn(3e5)})}}class LD{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return E.resolve(qt.at);const r=new PD(n);return this.$n.forEachTarget(e,s=>r.On(s.sequenceNumber)).next(()=>this.$n.Ln(e,s=>r.On(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(ig)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ig):this.Un(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,n){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),kl()<=Se.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n){this.db=e,this.garbageCollector=function(r,s){return new LD(r,s)}(this,n)}Bn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}qn(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,s)=>n(s))}addReference(e,n,r){return na(e,r)}removeReference(e,n,r){return na(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return na(e,n)}Gn(e,n){return function(r,s){let i=!1;return dI(r).tt(o=>hI(r,o,s).next(a=>(a&&(i=!0),E.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Kn(e,(o,a)=>{if(a<=n){const c=this.Gn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,re.min()),Gn(e).delete([0,_t(o.path)])))});s.push(c)}}).next(()=>E.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return na(e,n)}Kn(e,n){const r=Gn(e);let s,i=qt.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==qt.at&&n(new H(cn(s)),i),i=u,s=c):i=qt.at}).next(()=>{i!==qt.at&&n(new H(cn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function na(t,e){return Gn(t).put(function(n,r){return{targetId:0,path:_t(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.changes=new dr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return yr(e).put(r)}removeEntry(e,n,r){return yr(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],ec(i),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=Ve.newInvalidDocument(n);return yr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(oi(n))},(s,i)=>{r=this.jn(n,i)}).next(()=>r)}Wn(e,n){let r={size:0,document:Ve.newInvalidDocument(n)};return yr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(oi(n))},(s,i)=>{r={document:this.jn(n,i),size:tc(i)}}).next(()=>r)}getEntries(e,n){let r=Ot();return this.zn(e,n,(s,i)=>{const o=this.jn(s,i);r=r.insert(s,o)}).next(()=>r)}Hn(e,n){let r=Ot(),s=new ze(H.comparator);return this.zn(e,n,(i,o)=>{const a=this.jn(i,o);r=r.insert(i,a),s=s.insert(i,tc(o))}).next(()=>({documents:r,Jn:s}))}zn(e,n,r){if(n.isEmpty())return E.resolve();let s=new De(lg);n.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(oi(s.first()),oi(s.last())),o=s.getIterator();let a=o.getNext();return yr(e).Z({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=H.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&lg(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.j(oi(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const s=[n.popLast().toArray(),n.lastSegment(),ec(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],i=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return yr(e).W(IDBKeyRange.bound(s,i,!0)).next(o=>{let a=Ot();for(const c of o){const u=this.jn(H.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,n,r,s){let i=Ot();const o=ug(n,r),a=ug(n,Ft.max());return yr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(H.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new UD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return cg(e).get("remoteDocumentGlobalKey").next(n=>(ce(!!n),n))}Qn(e,n){return cg(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=TD(this.It,n);if(!(r.isNoDocument()&&r.version.isEqual(re.min())))return r}return Ve.newInvalidDocument(e)}}function pI(t){return new FD(t)}class UD extends fI{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new dr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new De((i,o)=>he(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Xn.get(i);if(n.push(this.Yn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Yp(this.Yn.It,o);s=s.add(i.path.popLast());const u=tc(c);r+=u-a.size,n.push(this.Yn.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=Yp(this.Yn.It,o.convertToNoDocument(re.min()));n.push(this.Yn.addEntry(e,i,c))}}),s.forEach(i=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.Yn.updateMetadata(e,r)),E.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:s})=>(s.forEach((i,o)=>{this.Xn.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function cg(t){return et(t,"remoteDocumentGlobal")}function yr(t){return et(t,"remoteDocumentsV14")}function oi(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ug(t,e){const n=e.documentKey.path.toArray();return[t,ec(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function lg(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=he(n[i],r[i]),s)return s;return s=he(n.length,r.length),s||(s=he(n[n.length-2],r[r.length-2]),s||he(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&Ci(r.mutation,s,Pt.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=an();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=pi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=an();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Ot();const o=Ai(),a=Ai();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Nn)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Ci(l.mutation,u,l.mutation.getFieldMask(),Fe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new BD(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ai();let s=new ze((o,a)=>o-a),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Pt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||ge()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Kw();l.forEach(d=>{if(!i.has(d)){const p=Fw(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):E.resolve(an());let a=-1,c=i;return o.next(u=>E.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?E.resolve():this.getBaseDocument(e,l,h).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ge())).next(l=>({batchId:a,changes:qw(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=pi();return this.indexManager.getCollectionParents(e,s).next(o=>E.forEach(o,a=>{const c=function(u,l){return new Ro(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Ve.newInvalidDocument(u)))});let o=pi();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Ci(u.mutation,c,Pt.empty(),Fe.now()),ad(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):E.resolve(Ve.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return E.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Mt(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:uI(r.bundledQuery),readTime:Mt(r.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.overlays=new ze(H.comparator),this.es=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=an();return E.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ue(e,n,i)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const s=an(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return E.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=an(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=an(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return E.resolve(a)}ue(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fd(n,r));let i=this.es.get(n);i===void 0&&(i=ge(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.ns=new De(Qe.ss),this.rs=new De(Qe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Qe(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new H(new ke([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new H(new ke([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=ge();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return H.comparator(e.key,n.key)||he(e._s,n._s)}static os(e,n){return he(e._s,n._s)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new De(Qe.ss)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hd(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(he);return n.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),E.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new H(i),0);let a=new De(he);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c._s)),!0)},o),E.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ce(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return E.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Qe(n,0),s=this.gs.firstAfterOrEqual(r);return E.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.Es=e,this.docs=new ze(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=Ot();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ve.newInvalidDocument(s))}),E.resolve(r)}getAllFromCollection(e,n,r){let s=Ot();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||sd(vw(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,n,r,s){ee()}As(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HD(this)}getSize(e){return E.resolve(this.size)}}class HD extends fI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.persistence=e,this.Rs=new dr(n=>Yr(n),No),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new gd,this.targetCount=0,this.vs=ts.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),E.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.Dn(n),E.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),E.waitFor(i).next(()=>s)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new qt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new zD(this),this.indexManager=new OD,this.remoteDocumentCache=function(r){return new KD(r)}(r=>this.referenceDelegate.xs(r)),this.It=new aI(n),this.Ns=new $D(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new qD(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const s=new GD(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return E.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class GD extends Iw{constructor(e){super(),this.currentSequenceNumber=e}}class eu{constructor(e){this.persistence=e,this.Fs=new gd,this.$s=null}static Bs(e){return new eu(e)}get Ls(){if(this.$s)return this.$s;throw ee()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),E.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ls,r=>{const s=H.fromPath(r);return this.Us(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return E.or([()=>E.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.It=e}$(e,n,r,s){const i=new zc("createOrUpgrade",n);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Qp,{unique:!0}),a.createObjectStore("documentMutations")}(e),hg(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=E.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),hg(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:re.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Qp,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return E.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.qs(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),r<7&&s>=7&&(o=o.next(()=>this.Gs(i))),r<8&&s>=8&&(o=o.next(()=>this.Qs(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.js(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:wD});c.createIndex("collectionPathOverlayIndex",ID,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",bD,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:cD});c.createIndex("documentKeyIndex",uD),c.createIndex("collectionGroupIndex",lD)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.zs(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:gD}).createIndex("sequenceNumberIndex",mD,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:yD}).createIndex("documentKeyIndex",vD,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,s)=>{n+=tc(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(s=>E.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>E.forEach(a,c=>{ce(c.userId===i.userId);const u=kr(this.It,c);return lI(e,i.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Z((o,a)=>{const c=new ke(o),u=function(l){return[0,_t(l)]}(c);i.push(n.get(u).next(l=>l?E.resolve():(h=>n.put({targetId:0,path:_t(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>E.waitFor(i))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:pD});const r=n.store("collectionParents"),s=new pd,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:_t(c)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new ke(o);return i(c.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=cn(a);return i(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,s)=>{const i=gi(s),o=cI(this.It,i);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),s=[];return r.Z((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new H(ke.fromString(u.document.name).popFirst(5)):u.noDocument?H.fromSegments(u.noDocument.path):u.unknownDocument?H.fromSegments(u.unknownDocument.path):ee()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>E.waitFor(s))}zs(e,n){const r=n.store("mutations"),s=pI(this.It),i=new mI(eu.Bs,this.It.re);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ge();kr(this.It,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),E.forEach(a,(c,u)=>{const l=new rt(u),h=Jc.oe(this.It,l),d=i.getIndexManager(l),p=Zc.oe(l,this.It,d,i.referenceDelegate);return new gI(s,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Vl(n,qt.at),c).next()})})}}function hg(t){t.createObjectStore("targetDocuments",{keyPath:dD}).createIndex("documentTargetsIndex",fD,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hD,{unique:!0}),t.createObjectStore("targetGlobal")}const Fu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class md{constructor(e,n,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=i,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!md.C())throw new G(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new VD(this,s),this.ii=n+"main",this.It=new aI(c),this.ri=new En(this.ii,this.Xs,new WD(this.It)),this.Cs=new RD(this.referenceDelegate,this.It),this.remoteDocumentCache=pI(this.It),this.Ns=new SD,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&vt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new G(N.FAILED_PRECONDITION,Fu);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new qt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ra(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(hr(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return ai(e).get("owner").next(n=>E.resolve(this.mi(n)))}gi(e){return ra(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=et(n,"clientMetadata");return r.W().next(s=>{const i=this.Ii(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?E.resolve(!0):ai(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new G(N.FAILED_PRECONDITION,Fu);return!1}}return!(!this.networkEnabled||!this.inForeground)||ra(e).W().next(r=>this.Ii(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Vl(e,qt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>ra(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return Zc.oe(e,this.It,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ND(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Jc.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=(o=this.Xs)===15?ED:o===14?oI:o===13?iI:o===12?_D:o===11?sI:void ee();var o;let a;return this.ri.runTransaction(e,s,i,c=>(a=new Vl(c,this.Ss?this.Ss.next():qt.at),n==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new G(N.FAILED_PRECONDITION,ww);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return ai(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new G(N.FAILED_PRECONDITION,Fu)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ai(e).put("owner",n)}static C(){return En.C()}_i(e){const n=ai(e);return n.get("owner").next(r=>this.mi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):E.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),TT()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return vt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){vt("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ai(t){return et(t,"owner")}function ra(t){return et(t,"clientMetadata")}function QD(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yd(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Up(n))return E.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Nl(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Nl(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,r,s){return Up(n)||s.isEqual(re.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(kl()<=Se.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rl(n)),this.Bi(e,o,n,lx(s,-1)))})}Fi(e,n){let r=new De(Ow(e));return n.forEach((s,i)=>{ad(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return kl()<=Se.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Rl(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ft.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.It=s,this.Ui=new ze(he),this.qi=new dr(i=>Yr(i),No),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function vI(t,e,n,r){return new YD(t,e,n,r)}async function wI(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ge();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function XD(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=E.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(f=>{const m=c.docVersions.get(p);ce(m!==null),f.version.compareTo(m)<0&&(l.applyToRemoteDocument(f,c),f.isValidDocument()&&(f.setReadTime(c.commitVersion),u.addEntry(f)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ge();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function II(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function JD(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(lt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(f,m,I){return f.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-f.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,p,l)&&a.push(n.Cs.updateTargetData(i,p))});let c=Ot(),u=ge();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(ZD(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(re.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ui=s,i))}function ZD(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ot();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function e1(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function t1(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,E.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new nr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Fl(t,e,n){const r=ue(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!hr(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function dg(t,e,n){const r=ue(t);let s=re.min(),i=ge();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=ue(a),h=l.qi.get(u);return h!==void 0?E.resolve(l.Ui.get(h)):l.Cs.getTargetData(c,u)}(r,o,Jt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:re.min(),n?i:ge())).next(a=>(n1(r,Ox(e),a),{documents:a,Hi:i})))}function n1(t,e,n){let r=t.Ki.get(e)||re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}class fg{constructor(){this.activeTargetIds=Hw()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bI{constructor(){this.Lr=new fg,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);U("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw Wa("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=s1[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new Zk;a.setWithCredentials(!0),a.listenOnce(Yk.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case Lu.NO_ERROR:const l=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Lu.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new G(N.DEADLINE_EXCEEDED,"Request time out"));break;case Lu.HTTP_ERROR:const h=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=(u=d)===null||u===void 0?void 0:u.error;if(p&&p.status&&p.message){const f=function(m){const I=m.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(I)>=0?I:N.UNKNOWN}(p.status);o(new G(f,p.message))}else o(new G(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new G(N.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Wk(),o=Qk(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Jk({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");U("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new i1({Hr:f=>{h?U("Connection","Not sending because WebChannel is closed:",f):(l||(U("Connection","Opening WebChannel transport."),u.open(),l=!0),U("Connection","WebChannel sending:",f),u.send(f))},Jr:()=>u.close()}),p=(f,m,I)=>{f.listen(m,b=>{try{I(b)}catch(k){setTimeout(()=>{throw k},0)}})};return p(u,Jo.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),p(u,Jo.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),d.io())}),p(u,Jo.EventType.ERROR,f=>{h||(h=!0,Wa("Connection","WebChannel transport errored:",f),d.io(new G(N.UNAVAILABLE,"The operation could not be completed")))}),p(u,Jo.EventType.MESSAGE,f=>{var m;if(!h){const I=f.data[0];ce(!!I);const b=I,k=b.error||((m=b[0])===null||m===void 0?void 0:m.error);if(k){U("Connection","WebChannel received error:",k);const _=k.status;let T=function(S){const O=qe[S];if(O!==void 0)return $w(O)}(_),R=k.message;T===void 0&&(T=N.INTERNAL,R="Unknown error status: "+_+" with message "+k.message),h=!0,d.io(new G(T,R)),u.close()}else U("Connection","WebChannel received:",I),d.ro(I)}}),p(o,Xk.STAT_EVENT,f=>{f.stat===Tp.PROXY?U("Connection","Detected buffering proxy"):f.stat===Tp.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(){return typeof window<"u"?window:null}function Ea(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){return new Qx(t,!0)}class _I{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new _I(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new G(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class c1 extends EI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Jx(this.It,e),r=function(s){if(!("targetChange"in s))return re.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?Mt(i.readTime):re.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Ml(this.It),n.addTarget=function(s,i){let o;const a=i.target;return o=Ya(a)?{documents:Jw(s,a)}:{query:Zw(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ww(s,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=co(s,i.snapshotVersion.toTimestamp())),o}(this.It,e);const r=eD(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Ml(this.It),n.removeTarget=e,this.Bo(n)}}class u1 extends EI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Zx(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.Zo(r,n)}return ce(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ml(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Za(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=s,this.nu=!1}su(){if(this.nu)throw new G(N.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(N.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(N.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class h1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(vt(n),this.ou=!1):U("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{r.enqueueAndForget(async()=>{cs(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ue(a);c._u.add(4),await Mo(c),c.gu.set("Unknown"),c._u.delete(4),await nu(c)}(this))})}),this.gu=new h1(r,s)}}async function nu(t){if(cs(t))for(const e of t.wu)await e(!0)}async function Mo(t){for(const e of t.wu)await e(!1)}function TI(t,e){const n=ue(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Id(n)?wd(n):Gs(n).ko()&&vd(n,e))}function SI(t,e){const n=ue(t),r=Gs(n);n.du.delete(e),r.ko()&&CI(n,e),n.du.size===0&&(r.ko()?r.Fo():cs(n)&&n.gu.set("Unknown"))}function vd(t,e){t.yu.Mt(e.targetId),Gs(t).zo(e)}function CI(t,e){t.yu.Mt(e),Gs(t).Ho(e)}function wd(t){t.yu=new zx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Gs(t).start(),t.gu.uu()}function Id(t){return cs(t)&&!Gs(t).No()&&t.du.size>0}function cs(t){return ue(t)._u.size===0}function AI(t){t.yu=void 0}async function f1(t){t.du.forEach((e,n)=>{vd(t,e)})}async function p1(t,e){AI(t),Id(t)?(t.gu.hu(e),wd(t)):t.gu.set("Unknown")}async function g1(t,e,n){if(t.gu.set("Online"),e instanceof Gw&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nc(t,r)}else if(e instanceof ba?t.yu.Gt(e):e instanceof zw?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(re.min()))try{const r=await II(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.du.get(c);u&&s.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(lt.EMPTY_BYTE_STRING,c.snapshotVersion)),CI(s,a);const u=new nr(c.target,a,1,c.sequenceNumber);vd(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await nc(t,r)}}async function nc(t,e,n){if(!hr(e))throw e;t._u.add(1),await Mo(t),t.gu.set("Offline"),n||(n=()=>II(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await nu(t)})}function kI(t,e){return e().catch(n=>nc(t,n,e))}async function Lo(t){const e=ue(t),n=cr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;m1(e);)try{const s=await e1(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,y1(e,s)}catch(s){await nc(e,s)}xI(e)&&DI(e)}function m1(t){return cs(t)&&t.fu.length<10}function y1(t,e){t.fu.push(e);const n=cr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function xI(t){return cs(t)&&!cr(t).No()&&t.fu.length>0}function DI(t){cr(t).start()}async function v1(t){cr(t).eu()}async function w1(t){const e=cr(t);for(const n of t.fu)e.Xo(n.mutations)}async function I1(t,e,n){const r=t.fu.shift(),s=dd.from(r,e,n);await kI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Lo(t)}async function b1(t,e){e&&cr(t).Yo&&await async function(n,r){if(s=r.code,$x(s)&&s!==N.ABORTED){const i=n.fu.shift();cr(n).Mo(),await kI(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Lo(n)}var s}(t,e),xI(t)&&DI(t)}async function gg(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=cs(n);n._u.add(3),await Mo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await nu(n)}async function _1(t,e){const n=ue(t);e?(n._u.delete(2),await nu(n)):e||(n._u.add(2),await Mo(n),n.gu.set("Unknown"))}function Gs(t){return t.pu||(t.pu=function(e,n,r){const s=ue(e);return s.su(),new c1(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:f1.bind(null,t),Zr:p1.bind(null,t),Wo:g1.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Id(t)?wd(t):t.gu.set("Unknown")):(await t.pu.stop(),AI(t))})),t.pu}function cr(t){return t.Iu||(t.Iu=function(e,n,r){const s=ue(e);return s.su(),new u1(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:v1.bind(null,t),Zr:b1.bind(null,t),tu:w1.bind(null,t),Zo:I1.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Lo(t)):(await t.Iu.stop(),t.fu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new bd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _d(t,e){if(vt("AsyncQueue",`${e}: ${t}`),hr(t))return new G(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=pi(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new ks(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ks)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ks;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.Tu=new ze(H.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ee():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ms{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ms(e,n,ks.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(){this.Au=void 0,this.listeners=[]}}class T1{constructor(){this.queries=new dr(e=>Dw(e),Wc),this.onlineState="Unknown",this.Ru=new Set}}async function S1(t,e){const n=ue(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new E1),s)try{i.Au=await n.onListen(r)}catch(o){const a=_d(o,`Initialization of query '${Rl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Ed(n)}async function C1(t,e){const n=ue(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function A1(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&Ed(n)}function k1(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ed(t){t.Ru.forEach(e=>{e.next()})}class x1{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.key=e}}class NI{constructor(e){this.key=e}}class D1{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ge(),this.mutatedKeys=ge(),this.Gu=Ow(e),this.Qu=new ks(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new mg,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),p=ad(this.query,h)?h:null,f=!!d&&this.mutatedKeys.has(d.key),m=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?f!==m&&(r.track({type:3,doc:p}),I=!0):this.Hu(d,p)||(r.track({type:2,doc:p}),I=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),I=!0):d&&!p&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(p?(o=o.add(p),i=m?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const p=f=>{switch(f){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ms(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new mg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ge(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new NI(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new OI(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=ge();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ms.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class O1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class N1{constructor(e){this.key=e,this.nc=!1}}class R1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new dr(a=>Dw(a),Wc),this.rc=new Map,this.oc=new Set,this.uc=new ze(H.comparator),this.cc=new Map,this.ac=new gd,this.hc={},this.lc=new Map,this.fc=ts.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function P1(t,e){const n=K1(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await t1(n.localStore,Jt(e));n.isPrimaryClient&&TI(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await M1(n,e,r,a==="current",o.resumeToken)}return s}async function M1(t,e,n,r,s){t._c=(h,d,p)=>async function(f,m,I,b){let k=m.view.Wu(I);k.$i&&(k=await dg(f.localStore,m.query,!1).then(({documents:R})=>m.view.Wu(R,k)));const _=b&&b.targetChanges.get(m.targetId),T=m.view.applyChanges(k,f.isPrimaryClient,_);return vg(f,m.targetId,T.Xu),T.snapshot}(t,h,d,p);const i=await dg(t.localStore,e,!0),o=new D1(e,i.Hi),a=o.Wu(i.documents),c=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);vg(t,n,u.Xu);const l=new O1(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function L1(t,e){const n=ue(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!Wc(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),SI(n.remoteStore,r.targetId),Ul(n,r.targetId)}).catch(os)):(Ul(n,r.targetId),await Fl(n.localStore,r.targetId,!0))}async function V1(t,e,n){const r=VI(t);try{const s=await function(i,o){const a=ue(i),c=Fe.now(),u=o.reduce((d,p)=>d.add(p.key),ge());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Ot(),f=ge();return a.Gi.getEntries(d,u).next(m=>{p=m,p.forEach((I,b)=>{b.isValidDocument()||(f=f.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(m=>{l=m;const I=[];for(const b of o){const k=Ux(b,l.get(b.key).overlayedDocument);k!=null&&I.push(new Nn(b.key,k,Sw(k.value.mapValue),It.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(m=>{h=m;const I=m.applyToLocalDocumentSet(l,f);return a.documentOverlayCache.saveOverlays(d,m.batchId,I)})}).then(()=>({batchId:h.batchId,changes:qw(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new ze(he)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Vo(r,s.changes),await Lo(r.remoteStore)}catch(s){const i=_d(s,"Failed to persist write");n.reject(i)}}async function RI(t,e){const n=ue(t);try{const r=await JD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?ce(o.nc):s.removedDocuments.size>0&&(ce(o.nc),o.nc=!1))}),await Vo(n,r,e)}catch(r){await os(r)}}function yg(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ue(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Ed(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function F1(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new ze(H.comparator);o=o.insert(i,Ve.newNoDocument(i,re.min()));const a=ge().add(i),c=new Xc(re.min(),new Map,new De(he),o,a);await RI(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),Td(r)}else await Fl(r.localStore,e,!1).then(()=>Ul(r,e,n)).catch(os)}async function U1(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await XD(n.localStore,e);MI(n,r,null),PI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vo(n,s)}catch(s){await os(s)}}async function B1(t,e,n){const r=ue(t);try{const s=await function(i,o){const a=ue(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ce(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);MI(r,e,n),PI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vo(r,s)}catch(s){await os(s)}}function PI(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function MI(t,e,n){const r=ue(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function Ul(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||LI(t,r)})}function LI(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(SI(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Td(t))}function vg(t,e,n){for(const r of n)r instanceof OI?(t.ac.addReference(r.key,e),$1(t,r)):r instanceof NI?(U("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||LI(t,r.key)):ee()}function $1(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(U("SyncEngine","New document in limbo: "+n),t.oc.add(r),Td(t))}function Td(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new H(ke.fromString(e)),r=t.fc.next();t.cc.set(r,new N1(n)),t.uc=t.uc.insert(n,r),TI(t.remoteStore,new nr(Jt(od(n.path)),r,2,qt.at))}}async function Vo(t,e,n){const r=ue(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=yd.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const u=ue(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>E.forEach(c,h=>E.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>E.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!hr(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ui.get(h),p=d.snapshotVersion,f=d.withLastLimboFreeSnapshotVersion(p);u.Ui=u.Ui.insert(h,f)}}}(r.localStore,i))}async function j1(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await wI(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new G(N.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vo(n,r.ji)}}function q1(t,e){const n=ue(t),r=n.cc.get(e);if(r&&r.nc)return ge().add(r.key);{let s=ge();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function K1(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=q1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=F1.bind(null,e),e.sc.Wo=A1.bind(null,e.eventManager),e.sc.wc=k1.bind(null,e.eventManager),e}function VI(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=U1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=B1.bind(null,e),e}class FI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=tu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return vI(this.persistence,new yI,e.initialUser,this.It)}yc(e){return new mI(eu.Bs,this.It)}gc(e){return new bI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class H1 extends FI{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await VI(this.Ac.syncEngine),await Lo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return vI(this.persistence,new yI,e.initialUser,this.It)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new MD(r,e.asyncQueue,n)}Ec(e,n){const r=new px(n,this.persistence);return new fx(e.asyncQueue,r)}yc(e){const n=QD(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new md(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,a1(),Ea(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new bI}}class UI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=j1.bind(null,this.syncEngine),await _1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new T1}createDatastore(e){const n=tu(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new o1(s));var s;return function(i,o,a,c){return new l1(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>yg(this.syncEngine,a,0),o=pg.C()?new pg:new r1,new d1(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new R1(r,s,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);U("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Mo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e,n){if(!n)throw new G(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function z1(t,e,n,r){if(e===!0&&r===!0)throw new G(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wg(t){if(!H.isDocumentKey(t))throw new G(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ig(t){if(H.isDocumentKey(t))throw new G(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ru(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ru(t);throw new G(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Map;class _g{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new G(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,z1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _g({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _g(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ex;switch(n.type){case"gapi":const r=n.client;return new sx(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new G(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=bg.get(e);n&&(U("ComponentProvider","Removing Datastore"),bg.delete(e),n.terminate())}(this),Promise.resolve()}}function G1(t,e,n,r={}){var s;const i=(t=kn(t,su))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Wa("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=rt.MOCK_USER;else{o=RT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new rt(c)}t._authCredentials=new tx(new pw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Fo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fo(this.firestore,e,this._query)}}class rr extends Fo{constructor(e,n,r){super(e,n,od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new H(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function W1(t,e,...n){if(t=ut(t),BI("collection","path",e),t instanceof su){const r=ke.fromString(e,...n);return Ig(r),new rr(t,null,r)}{if(!(t instanceof St||t instanceof rr))throw new G(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Ig(r),new rr(t.firestore,null,r)}}function Bl(t,e,...n){if(t=ut(t),arguments.length===1&&(e=gw.R()),BI("doc","path",e),t instanceof su){const r=ke.fromString(e,...n);return wg(r),new St(t,null,new H(r))}{if(!(t instanceof St||t instanceof rr))throw new G(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return wg(r),new St(t.firestore,t instanceof rr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=gw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_d(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $I(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function jI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await X1(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>gg(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>gg(e.remoteStore,i)),t.onlineComponents=e}async function X1(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await $I(t,new FI)),t.offlineComponents}async function qI(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await jI(t,new UI)),t.onlineComponents}function J1(t){return qI(t).then(e=>e.syncEngine)}async function Z1(t){const e=await qI(t),n=e.eventManager;return n.onListen=P1.bind(null,e.syncEngine),n.onUnlisten=L1.bind(null,e.syncEngine),n}function eO(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Q1({next:h=>{i.enqueueAndForget(()=>C1(s,l)),h.fromCache&&a.source==="server"?c.reject(new G(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new x1(o,u,{includeMetadataChanges:!0,Nu:!0});return S1(s,l)}(await Z1(t),t.asyncQueue,e,n,r)),r.promise}class tO{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new _I(this,"async_queue_retry"),this.Wc=()=>{const n=Ea();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ea();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Ea();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new dn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!hr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw vt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=bd.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.qc.push(s),s}zc(){this.Kc&&ee()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Ws extends su{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new tO,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||HI(this),this._firestoreClient.terminate()}}function KI(t,e){const n=typeof t=="object"?t:Py(),r=typeof t=="string"?t:e||"(default)",s=Ch(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=DT("firestore");i&&G1(s,...i)}return s}function Sd(t){return t._firestoreClient||HI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function HI(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new mx(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Y1(t._authCredentials,t._appCheckCredentials,t._queue,r)}function nO(t,e){sO(t=kn(t,Ws));const n=Sd(t),r=t._freezeSettings(),s=new UI;return rO(n,s,new H1(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function rO(t,e,n){const r=new dn;return t.asyncQueue.enqueue(async()=>{try{await $I(t,n),await jI(t,e),r.resolve()}catch(s){const i=s;if(!function(o){return o.name==="FirebaseError"?o.code===N.FAILED_PRECONDITION||o.code===N.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;Wa("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function sO(t){if(t._initialized||t._terminated)throw new G(N.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ls(lt.fromBase64String(e))}catch(n){throw new G(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ls(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=/^__.*__$/;class oO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nn(e,this.data,this.fieldMask,n,this.fieldTransforms):new zs(e,this.data,n,this.fieldTransforms)}}class zI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function GI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class ou{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new ou(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return rc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(GI(this.sa)&&iO.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class aO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||tu(e)}da(e,n,r,s=!1){return new ou({sa:e,methodName:n,fa:r,path:Ke.emptyPath(),oa:!1,la:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function au(t){const e=t._freezeSettings(),n=tu(t._databaseId);return new aO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WI(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);Ad("Data must be an object, but it was:",o,r);const a=YI(r,o);let c,u;if(i.merge)c=new Pt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=$l(e,h,n);if(!o.contains(d))throw new G(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);JI(l,d)||l.push(d)}c=new Pt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new oO(new pt(a),c,u)}class cu extends Uo{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cu}}function QI(t,e,n){return new ou({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class cO extends Uo{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=QI(this,e,!0),r=this._a.map(i=>us(i,n)),s=new Xr(r);return new cd(e.path,s)}isEqual(e){return this===e}}class uO extends Uo{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=QI(this,e,!0),r=this._a.map(i=>us(i,n)),s=new Jr(r);return new cd(e.path,s)}isEqual(e){return this===e}}function lO(t,e,n,r){const s=t.da(1,e,n);Ad("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();as(r,(c,u)=>{const l=kd(e,c,n);u=ut(u);const h=s.ca(l);if(u instanceof cu)i.push(l);else{const d=us(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Pt(i);return new zI(o,a,s.fieldTransforms)}function hO(t,e,n,r,s,i){const o=t.da(1,e,n),a=[$l(e,r,n)],c=[s];if(i.length%2!=0)throw new G(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push($l(e,i[d])),c.push(i[d+1]);const u=[],l=pt.empty();for(let d=a.length-1;d>=0;--d)if(!JI(u,a[d])){const p=a[d];let f=c[d];f=ut(f);const m=o.ca(p);if(f instanceof cu)u.push(p);else{const I=us(f,m);I!=null&&(u.push(p),l.set(p,I))}}const h=new Pt(u);return new zI(l,h,o.fieldTransforms)}function dO(t,e,n,r=!1){return us(n,t.da(r?4:3,e))}function us(t,e){if(XI(t=ut(t)))return Ad("Unsupported field value:",e,t),YI(t,e);if(t instanceof Uo)return function(n,r){if(!GI(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=us(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Rx(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Fe.fromDate(n);return{timestampValue:co(r.It,s)}}if(n instanceof Fe){const s=new Fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:co(r.It,s)}}if(n instanceof Cd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ls)return{bytesValue:Ww(r.It,n._byteString)};if(n instanceof St){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ld(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${ru(n)}`)}(t,e)}function YI(t,e){const n={};return bw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(r,s)=>{const i=us(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function XI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Cd||t instanceof Ls||t instanceof St||t instanceof Uo)}function Ad(t,e,n){if(!XI(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ru(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function $l(t,e,n){if((e=ut(e))instanceof iu)return e._internalPath;if(typeof e=="string")return kd(t,e);throw rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const fO=new RegExp("[~\\*/\\[\\]]");function kd(t,e,n){if(e.search(fO)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new iu(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new G(N.INVALID_ARGUMENT,a+t+c)}function JI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pO extends ZI{data(){return super.data()}}function xd(t,e){return typeof e=="string"?kd(t,e):e instanceof iu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mO{}function yO(t,...e){for(const n of e)t=n._apply(t);return t}class vO extends mO{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=au(e.firestore),r=function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new G(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Tg(l,u);const p=[];for(const f of l)p.push(Eg(a,s,f));h={arrayValue:{values:p}}}else h=Eg(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Tg(l,u),h=dO(o,i,l,u==="in"||u==="not-in");const d=ot.create(c,u,h);return function(p,f){if(f.dt()){const I=kw(p);if(I!==null&&!I.isEqual(f.field))throw new G(N.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${I.toString()}' and '${f.field.toString()}'`);const b=Aw(p);b!==null&&IO(p,f.field,b)}const m=function(I,b){for(const k of I.filters)if(b.indexOf(k.op)>=0)return k.op;return null}(p,function(I){switch(I){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(f.op));if(m!==null)throw m===f.op?new G(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${f.op.toString()}' filter.`):new G(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${f.op.toString()}' filters with '${m.toString()}' filters.`)}(s,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new Fo(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Ro(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function wO(t,e,n){const r=e,s=xd("where",t);return new vO(s,r,n)}function Eg(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new G(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xw(e)&&n.indexOf("/")!==-1)throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ke.fromString(n));if(!H.isDocumentKey(r))throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ro(t,new H(r))}if(n instanceof St)return ro(t,n._key);throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ru(n)}.`)}function Tg(t,e){if(!Array.isArray(t)||t.length===0)throw new G(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new G(N.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function IO(t,e,n){if(!n.isEqual(e))throw new G(N.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const r={};return as(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Cd(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ew(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const n=or(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);ce(nI(r));const s=new Wr(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||vt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _O extends ZI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ta extends _O{data(e={}){return super.data(e)}}class EO{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new sa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ta(this._firestore,this._userDataWriter,r.key,r,new sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Ta(r._firestore,r._userDataWriter,o.doc.key,o.doc,new sa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Ta(r._firestore,r._userDataWriter,o.doc.key,o.doc,new sa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:TO(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class SO extends bO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function CO(t){t=kn(t,Fo);const e=kn(t.firestore,Ws),n=Sd(e),r=new SO(e);return gO(t._query),eO(n,t._query).then(s=>new EO(e,r,t,s))}function AO(t,e,n){t=kn(t,St);const r=kn(t.firestore,Ws),s=eb(t.converter,e,n);return Dd(r,[WI(au(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,It.none())])}function kO(t,e,n,...r){t=kn(t,St);const s=kn(t.firestore,Ws),i=au(s);let o;return o=typeof(e=ut(e))=="string"||e instanceof iu?hO(i,"updateDoc",t._key,e,n,r):lO(i,"updateDoc",t._key,e),Dd(s,[o.toMutation(t._key,It.exists(!0))])}function xP(t,e){const n=kn(t.firestore,Ws),r=Bl(t),s=eb(t.converter,e);return Dd(n,[WI(au(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,It.exists(!1))]).then(()=>r)}function Dd(t,e){return function(n,r){const s=new dn;return n.asyncQueue.enqueueAndForget(async()=>V1(await J1(n),r,s)),s.promise}(Sd(t),e)}function DP(...t){return new cO("arrayUnion",t)}function OP(...t){return new uO("arrayRemove",t)}(function(t,e=!0){(function(n){Hs=n})(go),Os(new jr("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Ws(new nx(n.getProvider("auth-internal")),new ox(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new G(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wr(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),tr(Sp,"3.7.3",t),tr(Sp,"3.7.3","esm2017")})();const xO={apiKey:"AIzaSyD1UL_KnIjCm8pObGojGqtF-VjK_xyd-n0",authDomain:"crab-calory.firebaseapp.com",projectId:"crab-calory",storageBucket:"crab-calory.appspot.com",messagingSenderId:"38791710581",appId:"1:38791710581:web:ed2d16c3269bd7a488f53c",measurementId:"G-XQ4CC2C7N1"},tb=Ry(xO),vn=XA(tb),nb=KI(tb);nO(nb);const DO=()=>{const t=bt({age:0,carbohydrates:0,email:"",fat:0,kcal:0,meals:[],name:"",protein:0,uid:"",weight:0});async function e(){const n=W1(nb,"users");if(!vn.currentUser)return;const r=yO(n,wO("uid","==",vn.currentUser.uid));(await CO(r)).forEach(i=>{t.value=i.data()})}return{user:t,getUserData:e}},Sg=KI(),Od=vE("user",{state:()=>({userLoggedIn:!1,loggedUser:{},userChangeData:0}),actions:{async register(t){if(!t)return;const e=await RC(vn,t.email,t.password),n=Bl(Sg,"users",e.user.uid);await AO(n,{name:t.name,email:t.email,age:t.age,weight:t.weight,fat:t.fat,carbohydrates:t.carbohydrates,protein:t.protein,kcal:t.kcal,uid:e.user.uid,meals:[]}),this.userLoggedIn=!0},async downloadUserData(){const{user:t,getUserData:e}=DO();await e(),this.loggedUser=t.value},async updateUserData(t){if(!vn.currentUser)return;const e=Bl(Sg,"users",vn.currentUser.uid);await kO(e,{fat:t.fat,carbohydrates:t.carbohydrates,protein:t.protein,kcal:t.kcal}),await this.downloadUserData(),this.userChangeData+=1},async login(t){await PC(vn,t.email,t.password),this.userLoggedIn=!0},async singOutUser(){await VC(vn),this.userLoggedIn=!1}}}),OO=Ut({name:"MainApp",setup(){const t=Od();vn.currentUser&&(t.userLoggedIn=!0)}});const Qs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},NO={class:"wrapper"};function RO(t,e,n,r,s,i){const o=Mr("router-view");return Rt(),un("main",null,[Qt("div",NO,[Oe(o,null,{default:wn(({Component:a})=>[Oe(mh,{name:"fade",mode:"out-in"},{default:wn(()=>[(Rt(),ph(Ic(a)))]),_:2},1024)]),_:1})])])}const PO=Qs(OO,[["render",RO],["__scopeId","data-v-e18cc7b5"]]),MO="modulepreload",LO=function(t){return"/"+t},Cg={},_r=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=LO(i),i in Cg)return;Cg[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=s.length-1;l>=0;l--){const h=s[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":MO,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ms=typeof window<"u";function VO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const xe=Object.assign;function Uu(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const ki=()=>{},Zt=Array.isArray,FO=/\/$/,UO=t=>t.replace(FO,"");function Bu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=qO(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function BO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ag(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $O(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Vs(e.matched[r],n.matched[s])&&rb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jO(t[n],e[n]))return!1;return!0}function jO(t,e){return Zt(t)?kg(t,e):Zt(e)?kg(e,t):t===e}function kg(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var uo;(function(t){t.pop="pop",t.push="push"})(uo||(uo={}));var xi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xi||(xi={}));function KO(t){if(!t)if(ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),UO(t)}const HO=/^[^#]+#/;function zO(t,e){return t.replace(HO,"#")+e}function GO(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const uu=()=>({left:window.pageXOffset,top:window.pageYOffset});function WO(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=GO(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xg(t,e){return(history.state?history.state.position-e:-1)+t}const jl=new Map;function QO(t,e){jl.set(t,e)}function YO(t){const e=jl.get(t);return jl.delete(t),e}let XO=()=>location.protocol+"//"+location.host;function sb(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ag(c,"")}return Ag(n,t)+r+s}function JO(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=sb(t,location),f=n.value,m=e.value;let I=0;if(d){if(n.value=p,e.value=d,o&&o===f){o=null;return}I=m?d.position-m.position:0}else r(p);s.forEach(b=>{b(n.value,f,{delta:I,type:uo.pop,direction:I?I>0?xi.forward:xi.back:xi.unknown})})};function c(){o=n.value}function u(d){s.push(d);const p=()=>{const f=s.indexOf(d);f>-1&&s.splice(f,1)};return i.push(p),p}function l(){const{history:d}=window;!d.state||d.replaceState(xe({},d.state,{scroll:uu()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Dg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?uu():null}}function ZO(t){const{history:e,location:n}=window,r={value:sb(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:XO()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=xe({},e.state,Dg(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=xe({},s.value,e.state,{forward:c,scroll:uu()});i(l.current,l,!0);const h=xe({},Dg(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function eN(t){t=KO(t);const e=ZO(t),n=JO(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:zO.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function tN(t){return typeof t=="string"||t&&typeof t=="object"}function ib(t){return typeof t=="string"||typeof t=="symbol"}const Vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ob=Symbol("");var Og;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Og||(Og={}));function Fs(t,e){return xe(new Error,{type:t,[ob]:!0},e)}function gn(t,e){return t instanceof Error&&ob in t&&(e==null||!!(t.type&e))}const Ng="[^/]+?",nN={sensitive:!1,strict:!1,start:!0,end:!0},rN=/[.+*?^${}()[\]/\\]/g;function sN(t,e){const n=xe({},nN,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(rN,"\\$&"),p+=40;else if(d.type===1){const{value:f,repeatable:m,optional:I,regexp:b}=d;i.push({name:f,repeatable:m,optional:I});const k=b||Ng;if(k!==Ng){p+=10;try{new RegExp(`(${k})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${f}" (${k}): `+T.message)}}let _=m?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(_=I&&u.length<2?`(?:/${_})`:"/"+_),I&&(_+="?"),s+=_,p+=20,I&&(p+=-8),m&&(p+=-20),k===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",f=i[d-1];h[f.name]=p&&f.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:f,repeatable:m,optional:I}=p,b=f in u?u[f]:"";if(Zt(b)&&!m)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const k=Zt(b)?b.join("/"):b;if(!k)if(I)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${f}"`);l+=k}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function iN(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function oN(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=iN(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Rg(r))return 1;if(Rg(s))return-1}return s.length-r.length}function Rg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aN={type:0,value:""},cN=/[a-zA-Z0-9_]/;function uN(t){if(!t)return[[]];if(t==="/")return[[aN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:cN.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function lN(t,e,n){const r=sN(uN(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function hN(t,e){const n=[],r=new Map;e=Lg({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,d){const p=!d,f=dN(l);f.aliasOf=d&&d.record;const m=Lg(e,l),I=[f];if("alias"in l){const _=typeof l.alias=="string"?[l.alias]:l.alias;for(const T of _)I.push(xe({},f,{components:d?d.record.components:f.components,path:T,aliasOf:d?d.record:f}))}let b,k;for(const _ of I){const{path:T}=_;if(h&&T[0]!=="/"){const R=h.record.path,S=R[R.length-1]==="/"?"":"/";_.path=h.record.path+(T&&S+T)}if(b=lN(_,h,m),d?d.alias.push(b):(k=k||b,k!==b&&k.alias.push(b),p&&l.name&&!Mg(b)&&o(l.name)),f.children){const R=f.children;for(let S=0;S<R.length;S++)i(R[S],b,d&&d.children[S])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return k?()=>{o(k)}:ki}function o(l){if(ib(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&oN(l,n[h])>=0&&(l.record.path!==n[h].record.path||!ab(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Mg(l)&&r.set(l.record.name,l)}function u(l,h){let d,p={},f,m;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Fs(1,{location:l});m=d.record.name,p=xe(Pg(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),l.params&&Pg(l.params,d.keys.map(k=>k.name))),f=d.stringify(p)}else if("path"in l)f=l.path,d=n.find(k=>k.re.test(f)),d&&(p=d.parse(f),m=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw Fs(1,{location:l,currentLocation:h});m=d.record.name,p=xe({},h.params,l.params),f=d.stringify(p)}const I=[];let b=d;for(;b;)I.unshift(b.record),b=b.parent;return{name:m,path:f,params:p,matched:I,meta:pN(I)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Pg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dN(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function fN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Mg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pN(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function Lg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ab(t,e){return e.children.some(n=>n===t||ab(t,n))}const cb=/#/g,gN=/&/g,mN=/\//g,yN=/=/g,vN=/\?/g,ub=/\+/g,wN=/%5B/g,IN=/%5D/g,lb=/%5E/g,bN=/%60/g,hb=/%7B/g,_N=/%7C/g,db=/%7D/g,EN=/%20/g;function Nd(t){return encodeURI(""+t).replace(_N,"|").replace(wN,"[").replace(IN,"]")}function TN(t){return Nd(t).replace(hb,"{").replace(db,"}").replace(lb,"^")}function ql(t){return Nd(t).replace(ub,"%2B").replace(EN,"+").replace(cb,"%23").replace(gN,"%26").replace(bN,"`").replace(hb,"{").replace(db,"}").replace(lb,"^")}function SN(t){return ql(t).replace(yN,"%3D")}function CN(t){return Nd(t).replace(cb,"%23").replace(vN,"%3F")}function AN(t){return t==null?"":CN(t).replace(mN,"%2F")}function sc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function kN(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ub," "),o=i.indexOf("="),a=sc(o<0?i:i.slice(0,o)),c=o<0?null:sc(i.slice(o+1));if(a in e){let u=e[a];Zt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Vg(t){let e="";for(let n in t){const r=t[n];if(n=SN(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&ql(i)):[r&&ql(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function xN(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const DN=Symbol(""),Fg=Symbol(""),lu=Symbol(""),fb=Symbol(""),Kl=Symbol("");function ci(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function jn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Fs(4,{from:n,to:e})):h instanceof Error?a(h):tN(h)?a(Fs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function $u(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ON(a)){const u=(a.__vccOpts||a)[e];u&&s.push(jn(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=VO(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&jn(d,n,r,i,o)()}))}}return s}function ON(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ug(t){const e=Nt(lu),n=Nt(fb),r=_e(()=>e.resolve(Q(t.to))),s=_e(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Vs.bind(null,l));if(d>-1)return d;const p=Bg(c[u-2]);return u>1&&Bg(l)===p&&h[h.length-1].path!==p?h.findIndex(Vs.bind(null,c[u-2])):d}),i=_e(()=>s.value>-1&&MN(n.params,r.value.params)),o=_e(()=>s.value>-1&&s.value===n.matched.length-1&&rb(n.params,r.value.params));function a(c={}){return PN(c)?e[Q(t.replace)?"replace":"push"](Q(t.to)).catch(ki):Promise.resolve()}return{route:r,href:_e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const NN=Ut({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ug,setup(t,{slots:e}){const n=xn(Ug(t)),{options:r}=Nt(lu),s=_e(()=>({[$g(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$g(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Sn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),RN=NN;function PN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function MN(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $g=(t,e,n)=>t!=null?t:e!=null?e:n,LN=Ut({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nt(Kl),s=_e(()=>t.route||r.value),i=Nt(Fg,0),o=_e(()=>{let u=Q(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=_e(()=>s.value.matched[o.value]);Ts(Fg,_e(()=>o.value+1)),Ts(DN,a),Ts(Kl,s);const c=bt();return at(()=>[c.value,a.value,t.name],([u,l,h],[d,p,f])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!Vs(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(m=>m(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return jg(n.default,{Component:d,route:u});const p=h.props[l],f=p?p===!0?u.params:typeof p=="function"?p(u):p:null,I=Sn(d,xe({},f,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return jg(n.default,{Component:I,route:u})||I}}});function jg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VN=LN;function FN(t){const e=hN(t.routes,t),n=t.parseQuery||kN,r=t.stringifyQuery||Vg,s=t.history,i=ci(),o=ci(),a=ci(),c=I0(Vn);let u=Vn;ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Uu.bind(null,P=>""+P),h=Uu.bind(null,AN),d=Uu.bind(null,sc);function p(P,A){let L,W;return ib(P)?(L=e.getRecordMatcher(P),W=A):W=P,e.addRoute(W,L)}function f(P){const A=e.getRecordMatcher(P);A&&e.removeRoute(A)}function m(){return e.getRoutes().map(P=>P.record)}function I(P){return!!e.getRecordMatcher(P)}function b(P,A){if(A=xe({},A||c.value),typeof P=="string"){const g=Bu(n,P,A.path),y=e.resolve({path:g.path},A),C=s.createHref(g.fullPath);return xe(g,y,{params:d(y.params),hash:sc(g.hash),redirectedFrom:void 0,href:C})}let L;if("path"in P)L=xe({},P,{path:Bu(n,P.path,A.path).path});else{const g=xe({},P.params);for(const y in g)g[y]==null&&delete g[y];L=xe({},P,{params:h(P.params)}),A.params=h(A.params)}const W=e.resolve(L,A),ye=P.hash||"";W.params=l(d(W.params));const Ce=BO(r,xe({},P,{hash:TN(ye),path:W.path})),ie=s.createHref(Ce);return xe({fullPath:Ce,hash:ye,query:r===Vg?xN(P.query):P.query||{}},W,{redirectedFrom:void 0,href:ie})}function k(P){return typeof P=="string"?Bu(n,P,c.value.path):xe({},P)}function _(P,A){if(u!==P)return Fs(8,{from:A,to:P})}function T(P){return O(P)}function R(P){return T(xe(k(P),{replace:!0}))}function S(P){const A=P.matched[P.matched.length-1];if(A&&A.redirect){const{redirect:L}=A;let W=typeof L=="function"?L(P):L;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=k(W):{path:W},W.params={}),xe({query:P.query,hash:P.hash,params:"path"in W?{}:P.params},W)}}function O(P,A){const L=u=b(P),W=c.value,ye=P.state,Ce=P.force,ie=P.replace===!0,g=S(L);if(g)return O(xe(k(g),{state:typeof g=="object"?xe({},ye,g.state):ye,force:Ce,replace:ie}),A||L);const y=L;y.redirectedFrom=A;let C;return!Ce&&$O(r,W,L)&&(C=Fs(16,{to:y,from:W}),dt(W,W,!0,!1)),(C?Promise.resolve(C):X(y,W)).catch(D=>gn(D)?gn(D,2)?D:tt(D):pe(D,y,W)).then(D=>{if(D){if(gn(D,2))return O(xe({replace:ie},k(D.to),{state:typeof D.to=="object"?xe({},ye,D.to.state):ye,force:Ce}),A||y)}else D=le(y,W,!0,ie,ye);return Z(y,W,D),D})}function x(P,A){const L=_(P,A);return L?Promise.reject(L):Promise.resolve()}function X(P,A){let L;const[W,ye,Ce]=UN(P,A);L=$u(W.reverse(),"beforeRouteLeave",P,A);for(const g of W)g.leaveGuards.forEach(y=>{L.push(jn(y,P,A))});const ie=x.bind(null,P,A);return L.push(ie),ps(L).then(()=>{L=[];for(const g of i.list())L.push(jn(g,P,A));return L.push(ie),ps(L)}).then(()=>{L=$u(ye,"beforeRouteUpdate",P,A);for(const g of ye)g.updateGuards.forEach(y=>{L.push(jn(y,P,A))});return L.push(ie),ps(L)}).then(()=>{L=[];for(const g of P.matched)if(g.beforeEnter&&!A.matched.includes(g))if(Zt(g.beforeEnter))for(const y of g.beforeEnter)L.push(jn(y,P,A));else L.push(jn(g.beforeEnter,P,A));return L.push(ie),ps(L)}).then(()=>(P.matched.forEach(g=>g.enterCallbacks={}),L=$u(Ce,"beforeRouteEnter",P,A),L.push(ie),ps(L))).then(()=>{L=[];for(const g of o.list())L.push(jn(g,P,A));return L.push(ie),ps(L)}).catch(g=>gn(g,8)?g:Promise.reject(g))}function Z(P,A,L){for(const W of a.list())W(P,A,L)}function le(P,A,L,W,ye){const Ce=_(P,A);if(Ce)return Ce;const ie=A===Vn,g=ms?history.state:{};L&&(W||ie?s.replace(P.fullPath,xe({scroll:ie&&g&&g.scroll},ye)):s.push(P.fullPath,ye)),c.value=P,dt(P,A,L,ie),tt()}let K;function ae(){K||(K=s.listen((P,A,L)=>{if(!Ct.listening)return;const W=b(P),ye=S(W);if(ye){O(xe(ye,{replace:!0}),W).catch(ki);return}u=W;const Ce=c.value;ms&&QO(xg(Ce.fullPath,L.delta),uu()),X(W,Ce).catch(ie=>gn(ie,12)?ie:gn(ie,2)?(O(ie.to,W).then(g=>{gn(g,20)&&!L.delta&&L.type===uo.pop&&s.go(-1,!1)}).catch(ki),Promise.reject()):(L.delta&&s.go(-L.delta,!1),pe(ie,W,Ce))).then(ie=>{ie=ie||le(W,Ce,!1),ie&&(L.delta&&!gn(ie,8)?s.go(-L.delta,!1):L.type===uo.pop&&gn(ie,20)&&s.go(-1,!1)),Z(W,Ce,ie)}).catch(ki)}))}let we=ci(),Te=ci(),fe;function pe(P,A,L){tt(P);const W=Te.list();return W.length?W.forEach(ye=>ye(P,A,L)):console.error(P),Promise.reject(P)}function me(){return fe&&c.value!==Vn?Promise.resolve():new Promise((P,A)=>{we.add([P,A])})}function tt(P){return fe||(fe=!P,ae(),we.list().forEach(([A,L])=>P?L(P):A()),we.reset()),P}function dt(P,A,L,W){const{scrollBehavior:ye}=t;if(!ms||!ye)return Promise.resolve();const Ce=!L&&YO(xg(P.fullPath,0))||(W||!L)&&history.state&&history.state.scroll||null;return Wn().then(()=>ye(P,A,Ce)).then(ie=>ie&&WO(ie)).catch(ie=>pe(ie,P,A))}const Ge=P=>s.go(P);let $e;const Bt=new Set,Ct={currentRoute:c,listening:!0,addRoute:p,removeRoute:f,hasRoute:I,getRoutes:m,resolve:b,options:t,push:T,replace:R,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Te.add,isReady:me,install(P){const A=this;P.component("RouterLink",RN),P.component("RouterView",VN),P.config.globalProperties.$router=A,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(c)}),ms&&!$e&&c.value===Vn&&($e=!0,T(s.location).catch(ye=>{}));const L={};for(const ye in Vn)L[ye]=_e(()=>c.value[ye]);P.provide(lu,A),P.provide(fb,xn(L)),P.provide(Kl,c);const W=P.unmount;Bt.add(P),P.unmount=function(){Bt.delete(P),Bt.size<1&&(u=Vn,K&&K(),K=null,c.value=Vn,$e=!1,fe=!1),W()}}};return Ct}function ps(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function UN(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Vs(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Vs(u,c))||s.push(c))}return[n,r,s]}function NP(){return Nt(lu)}const BN=Ut({name:"HomePageNavbar",props:{userStore:{required:!0,type:Object}},setup(t){return{userLogged:_e(()=>t.userStore.userLoggedIn)}}}),Is="/icons/crab.png";const Rd=t=>(R0("data-v-89aa6bfa"),t=t(),P0(),t),$N={class:"nav"},jN={class:"nav__logo"},qN=Rd(()=>Qt("li",{class:"nav__logo-box"},[Qt("img",{src:Is,alt:"Logo",class:"nav__logo-box-img"}),Qt("span",{class:"nav__logo-box-name"},[Da("Crabi "),Qt("span",{class:"color-orange"},"Calory")])],-1)),KN={key:0},HN=Rd(()=>Qt("i",{class:"fas fa-home color-orange icon"},null,-1)),zN={key:1,class:"nav__logo-login"},GN=Rd(()=>Qt("i",{class:"fas fa-user color-orange icon"},null,-1));function WN(t,e,n,r,s,i){const o=Mr("RouterLink");return Rt(),un("nav",$N,[Qt("ul",jN,[qN,t.userLogged?(Rt(),un("li",KN,[Oe(o,{to:{name:"profile"}},{default:wn(()=>[HN]),_:1})])):(Rt(),un("li",zN,[Oe(o,{to:{name:"login"}},{default:wn(()=>[GN]),_:1})]))])])}const QN=Qs(BN,[["render",WN],["__scopeId","data-v-89aa6bfa"]]),YN=Ut({name:"HeroImage"});const XN={class:"hero"},JN=Ym('<h1 class="hero__title" data-v-8bfd36c5>Crabi <span class="color-orange" data-v-8bfd36c5>Calory</span></h1><div class="hero__img" data-v-8bfd36c5><img src="'+Is+'" alt="Logo" class="hero__img-photo" data-v-8bfd36c5><div class="shadow" data-v-8bfd36c5></div></div>',2),ZN=[JN];function eR(t,e,n,r,s,i){return Rt(),un("div",XN,ZN)}const tR=Qs(YN,[["render",eR],["__scopeId","data-v-8bfd36c5"]]),nR=Ut({props:{className:{type:String},dis:{type:Boolean}},setup(t){return{classes:_e(()=>t.className)}}});const rR=["disabled"];function sR(t,e,n,r,s,i){return Rt(),un("button",{disabled:t.dis,class:oc(["button",t.classes])},[Z0(t.$slots,"default",{},void 0,!0)],10,rR)}const iR=Qs(nR,[["render",sR],["__scopeId","data-v-2ac9219e"]]),oR=Ut({name:"HomeInfo",props:{userStore:{required:!0,type:Object}},components:{AppButton:iR}});const aR={class:"info"},cR=Ym('<p class="info__text" data-v-95c2f8e3> Welcome to Crab Calory! This app is designed to help you keep track of your daily caloric intake and reach your health and fitness goals. With a user-friendly interface, it&#39;s easy to log your meals and snacks. You can also track your progress over time. Whether you&#39;re trying to lose weight, build muscle, or simply maintain a balanced diet, Crab Calory is here to help. Let&#39;s get started! </p><h3 class="info__title" data-v-95c2f8e3>Join our Crab family</h3><div class="info__family" data-v-95c2f8e3><img src="'+Is+'" alt="Logo" class="info__family-crab info__family-crab-crab1" data-v-95c2f8e3><img src="'+Is+'" alt="Logo" class="info__family-crab info__family-crab-crab2" data-v-95c2f8e3><img src="'+Is+'" alt="Logo" class="info__family-crab info__family-crab-crab3" data-v-95c2f8e3><img src="'+Is+'" alt="Logo" class="info__family-crab info__family-crab-crab4" data-v-95c2f8e3><div class="flor" data-v-95c2f8e3></div></div>',3),uR={key:0,class:"info__box"},lR={key:1,class:"info__box"};function hR(t,e,n,r,s,i){const o=Mr("AppButton"),a=Mr("RouterLink");return Rt(),un("article",aR,[cR,t.userStore.userLoggedIn?(Rt(),un("div",lR,[Oe(a,{"data-profile":"",to:{name:"profile"}},{default:wn(()=>[Oe(o,{class:"text2"},{default:wn(()=>[Da("Enter")]),_:1})]),_:1})])):(Rt(),un("div",uR,[Oe(a,{"data-login":"",to:{name:"login"}},{default:wn(()=>[Oe(o,{class:"text1"},{default:wn(()=>[Da("Sign in / Login")]),_:1})]),_:1})]))])}const dR=Qs(oR,[["render",hR],["__scopeId","data-v-95c2f8e3"]]),fR=Ut({name:"HomeView",components:{HomePageNavbar:QN,HeroImage:tR,HomeInfo:dR},setup(){return{userStore:Od()}}});const pR={class:"wrapper"},gR={class:"home"};function mR(t,e,n,r,s,i){const o=Mr("HomePageNavbar"),a=Mr("HeroImage"),c=Mr("HomeInfo");return Rt(),un("div",pR,[Qt("section",gR,[Oe(o,{userStore:t.userStore},null,8,["userStore"]),Oe(a),Oe(c,{userStore:t.userStore},null,8,["userStore"])])])}const yR=Qs(fR,[["render",mR],["__scopeId","data-v-be62a9b7"]]),vR=[{path:"/",name:"home",component:yR},{path:"/login",name:"login",component:()=>_r(()=>import("./LoginSignView.4c9ecd92.js"),["assets/LoginSignView.4c9ecd92.js","assets/LoadingModal.3f1ef332.js","assets/LoadingModal.8d12bce9.css","assets/LoginSignView.14fd3db0.css"])},{path:"/userHomePage",name:"userHomePage",component:()=>_r(()=>import("./UserHomePage.52e03efd.js"),["assets/UserHomePage.52e03efd.js","assets/UserHomePage.2827a6ee.css"]),children:[{path:"addMeal",name:"addMeal",component:()=>_r(()=>import("./AddMealView.6fd3eb9a.js"),["assets/AddMealView.6fd3eb9a.js","assets/LoadingModal.3f1ef332.js","assets/LoadingModal.8d12bce9.css","assets/AddMealView.102261de.css"])},{path:"weightHistory",name:"weightHistory",component:()=>_r(()=>import("./WeightHistoryView.6480225d.js"),["assets/WeightHistoryView.6480225d.js","assets/WeightHistoryView.5dca2618.css"])},{path:"mealList",name:"mealList",component:()=>_r(()=>import("./MealListView.8cc50ea2.js"),["assets/MealListView.8cc50ea2.js","assets/meals.1b360ff2.js","assets/MealListView.f4279fb6.css"])},{path:"profile",name:"profile",component:()=>_r(()=>import("./ProfileView.d2c330f4.js"),["assets/ProfileView.d2c330f4.js","assets/meals.1b360ff2.js","assets/ProfileView.6e8775aa.css"])}],meta:{requiresAuth:!0}}],Pd=FN({history:eN("/"),routes:vR,linkExactActiveClass:"active",scrollBehavior(t,e,n){return{top:0}}});Pd.beforeEach((t,e,n)=>{if(!t.meta.requiresAuth){n();return}Od().userLoggedIn?n():n({name:"home"})});/**
  * vee-validate v4.7.3
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */function ns(t){return typeof t=="function"}function Di(t){return t==null}const rs=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function pb(t){return Number(t)>=0}function wR(t){const e=parseFloat(t);return isNaN(e)?t:e}const gb={};function zt(t,e){bR(t,e),gb[t]=e}function IR(t){return gb[t]}function bR(t,e){if(!ns(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const Bo=Symbol("vee-validate-form"),_R=Symbol("vee-validate-field-instance"),ic=Symbol("Default empty value"),ER=typeof window<"u";function Hl(t){return ns(t)&&!!t.__locatorRef}function Oi(t){return!!t&&ns(t.validate)}function Us(t){return t==="checkbox"||t==="radio"}function TR(t){return rs(t)||Array.isArray(t)}function mb(t){return Array.isArray(t)?t.length===0:rs(t)&&Object.keys(t).length===0}function hu(t){return/^\[.+\]$/i.test(t)}function SR(t){return yb(t)&&t.multiple}function yb(t){return t.tagName==="SELECT"}function CR(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function AR(t,e){return!CR(t,e)&&e.type!=="file"&&!Us(e.type)}function vb(t){return Md(t)&&t.target&&"submit"in t.target}function Md(t){return t?!!(typeof Event<"u"&&ns(Event)&&t instanceof Event||t&&t.srcElement):!1}function qg(t,e){return e in t&&t[e]!==ic}function Xe(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,s;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Xe(t[r],e[r]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;for(r of t.entries())if(!Xe(r[1],e.get(r[0])))return!1;return!0}if(Kg(t)&&Kg(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(s=Object.keys(t),n=s.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;for(r=n;r--!==0;){var i=s[r];if(!Xe(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function Kg(t){return ER?t instanceof File:!1}function Hg(t,e,n){typeof n.value=="object"&&(n.value=Pe(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function Pe(t){if(typeof t!="object")return t;var e=0,n,r,s,i=Object.prototype.toString.call(t);if(i==="[object Object]"?s=Object.create(t.__proto__||null):i==="[object Array]"?s=Array(t.length):i==="[object Set]"?(s=new Set,t.forEach(function(o){s.add(Pe(o))})):i==="[object Map]"?(s=new Map,t.forEach(function(o,a){s.set(Pe(a),Pe(o))})):i==="[object Date]"?s=new Date(+t):i==="[object RegExp]"?s=new RegExp(t.source,t.flags):i==="[object DataView]"?s=new t.constructor(Pe(t.buffer)):i==="[object ArrayBuffer]"?s=t.slice(0):i.slice(-6)==="Array]"&&(s=new t.constructor(t)),s){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)Hg(s,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(s,n=r[e])&&s[n]===t[n]||Hg(s,n,Object.getOwnPropertyDescriptor(t,n))}return s||t}function Ld(t){return hu(t)?t.replace(/\[|\]/gi,""):t}function je(t,e,n){return t?hu(e)?t[Ld(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((s,i)=>TR(s)&&i in s?s[i]:n,t):n}function Un(t,e,n){if(hu(e)){t[Ld(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let s=t;for(let i=0;i<r.length;i++){if(i===r.length-1){s[r[i]]=n;return}(!(r[i]in s)||Di(s[r[i]]))&&(s[r[i]]=pb(r[i+1])?[]:{}),s=s[r[i]]}}function ju(t,e){if(Array.isArray(t)&&pb(e)){t.splice(Number(e),1);return}rs(t)&&delete t[e]}function ia(t,e){if(hu(e)){delete t[Ld(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let i=0;i<n.length;i++){if(i===n.length-1){ju(r,n[i]);break}if(!(n[i]in r)||Di(r[n[i]]))break;r=r[n[i]]}const s=n.map((i,o)=>je(t,n.slice(0,o).join(".")));for(let i=s.length-1;i>=0;i--)if(!!mb(s[i])){if(i===0){ju(t,n[0]);continue}ju(s[i-1],n[i-1])}}function nt(t){return Object.keys(t)}function Vd(t,e=void 0){const n=ho();return(n==null?void 0:n.provides[t])||Nt(t,e)}function zl(t,e,n){if(Array.isArray(t)){const r=[...t],s=r.findIndex(i=>Xe(i,e));return s>=0?r.splice(s,1):r.push(e),r}return Xe(t,e)?n:e}function zg(t,e=0){let n=null,r=[];return function(...s){return n&&window.clearTimeout(n),n=window.setTimeout(()=>{const i=t(...s);r.forEach(o=>o(i)),r=[]},e),new Promise(i=>r.push(i))}}function kR(t,e){return rs(e)&&e.number?wR(t):t}function Gl(t,e){let n;return async function(...s){const i=t(...s);n=i;const o=await i;return i!==n||(n=void 0,e(o,s)),o}}function xR({get:t,set:e}){const n=bt(Pe(t()));return at(t,r=>{Xe(r,n.value)||(n.value=Pe(r))},{deep:!0}),at(n,r=>{Xe(r,t())||e(Pe(r))},{deep:!0}),n}const du=(t,e,n)=>e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var r,s;return(s=(r=e.slots).default)===null||s===void 0?void 0:s.call(r,n())}}:e.slots.default;function qu(t){if(wb(t))return t._value}function wb(t){return"_value"in t}function Fd(t){if(!Md(t))return t;const e=t.target;if(Us(e.type)&&wb(e))return qu(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(SR(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(qu);if(yb(e)){const n=Array.from(e.options).find(r=>r.selected);return n?qu(n):e.value}return e.value}function Ib(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?rs(t)&&t._$$isNormalized?t:rs(t)?Object.keys(t).reduce((n,r)=>{const s=DR(t[r]);return t[r]!==!1&&(n[r]=Gg(s)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const s=OR(r);return s.name&&(n[s.name]=Gg(s.params)),n},e):e}function DR(t){return t===!0?[]:Array.isArray(t)||rs(t)?t:[t]}function Gg(t){const e=n=>typeof n=="string"&&n[0]==="@"?NR(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const OR=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function NR(t){const e=n=>je(n,t)||n[t];return e.__locatorRef=t,e}function RR(t){return Array.isArray(t)?t.filter(Hl):nt(t).filter(e=>Hl(t[e])).map(e=>t[e])}const PR={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Wl=Object.assign({},PR);const Ud=()=>Wl,MR=t=>{Wl=Object.assign(Object.assign({},Wl),t)},LR=MR;async function bb(t,e,n={}){const r=n==null?void 0:n.bails,s={name:(n==null?void 0:n.name)||"{field}",rules:e,bails:r!=null?r:!0,formData:(n==null?void 0:n.values)||{}},o=(await VR(s,t)).errors;return{errors:o,valid:!o.length}}async function VR(t,e){if(Oi(t.rules))return FR(e,t.rules,{bails:t.bails});if(ns(t.rules)||Array.isArray(t.rules)){const o={field:t.name,form:t.formData,value:e},a=Array.isArray(t.rules)?t.rules:[t.rules],c=a.length,u=[];for(let l=0;l<c;l++){const h=a[l],d=await h(e,o);if(typeof d!="string"&&d)continue;const f=typeof d=="string"?d:_b(o);if(u.push(f),t.bails)return{errors:u}}return{errors:u}}const n=Object.assign(Object.assign({},t),{rules:Ib(t.rules)}),r=[],s=Object.keys(n.rules),i=s.length;for(let o=0;o<i;o++){const a=s[o],c=await UR(n,e,{name:a,params:n.rules[a]});if(c.error&&(r.push(c.error),t.bails))return{errors:r}}return{errors:r}}async function FR(t,e,n){var r;return{errors:await e.validate(t,{abortEarly:(r=n.bails)!==null&&r!==void 0?r:!0}).then(()=>[]).catch(i=>{if(i.name==="ValidationError")return i.errors;throw i})}}async function UR(t,e,n){const r=IR(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const s=BR(n.params,t.formData),i={field:t.name,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:s})},o=await r(e,s,i);return typeof o=="string"?{error:o}:{error:o?void 0:_b(i)}}function _b(t){const e=Ud().generateMessage;return e?e(t):"Field is invalid"}function BR(t,e){const n=r=>Hl(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,s)=>(r[s]=n(t[s]),r),{})}async function $R(t,e){const n=await t.validate(e,{abortEarly:!1}).then(()=>[]).catch(i=>{if(i.name!=="ValidationError")throw i;return i.inner||[]}),r={},s={};for(const i of n){const o=i.errors;r[i.path]={valid:!o.length,errors:o},o.length&&(s[i.path]=o[0])}return{valid:!n.length,results:r,errors:s}}async function jR(t,e,n){const s=nt(t).map(async u=>{var l,h,d;const p=await bb(je(e,u),t[u],{name:((l=n==null?void 0:n.names)===null||l===void 0?void 0:l[u])||u,values:e,bails:(d=(h=n==null?void 0:n.bailsMap)===null||h===void 0?void 0:h[u])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},p),{path:u})});let i=!0;const o=await Promise.all(s),a={},c={};for(const u of o)a[u.path]={valid:u.valid,errors:u.errors},u.valid||(i=!1,c[u.path]=u.errors[0]);return{valid:i,results:a,errors:c}}let Wg=0;function qR(t,e){const{value:n,initialValue:r,setInitialValue:s}=Eb(t,e.modelValue,e.form),{errorMessage:i,errors:o,setErrors:a}=HR(t,e.form),c=KR(n,r,o),u=Wg>=Number.MAX_SAFE_INTEGER?0:++Wg;function l(h){var d;"value"in h&&(n.value=h.value),"errors"in h&&a(h.errors),"touched"in h&&(c.touched=(d=h.touched)!==null&&d!==void 0?d:c.touched),"initialValue"in h&&s(h.initialValue)}return{id:u,path:t,value:n,initialValue:r,meta:c,errors:o,errorMessage:i,setState:l}}function Eb(t,e,n){const r=bt(Q(e));function s(){return n?je(n.meta.value.initialValues,Q(t),Q(r)):Q(r)}function i(u){if(!n){r.value=u;return}n.stageInitialValue(Q(t),u,!0)}const o=_e(s);if(!n)return{value:bt(s()),initialValue:o,setInitialValue:i};const a=e?Q(e):je(n.values,Q(t),Q(o));return n.stageInitialValue(Q(t),a,!0),{value:_e({get(){return je(n.values,Q(t))},set(u){n.setFieldValue(Q(t),u)}}),initialValue:o,setInitialValue:i}}function KR(t,e,n){const r=xn({touched:!1,pending:!1,valid:!0,validated:!!Q(n).length,initialValue:_e(()=>Q(e)),dirty:_e(()=>!Xe(Q(t),Q(e)))});return at(n,s=>{r.valid=!s.length},{immediate:!0,flush:"sync"}),r}function HR(t,e){function n(s){return s?Array.isArray(s)?s:[s]:[]}if(!e){const s=bt([]);return{errors:s,errorMessage:_e(()=>s.value[0]),setErrors:i=>{s.value=n(i)}}}const r=_e(()=>e.errorBag.value[Q(t)]||[]);return{errors:r,errorMessage:_e(()=>r.value[0]),setErrors:s=>{e.setFieldErrorBag(Q(t),n(s))}}}function zR(t,e,n){return Us(n==null?void 0:n.type)?QR(t,e,n):Tb(t,e,n)}function Tb(t,e,n){const{initialValue:r,validateOnMount:s,bails:i,type:o,checkedValue:a,label:c,validateOnValueUpdate:u,uncheckedValue:l,controlled:h,keepValueOnUnmount:d,modelPropName:p,syncVModel:f,form:m}=GR(Q(t),n),I=h?Vd(Bo):void 0,b=m||I;let k=!1;const{id:_,value:T,initialValue:R,meta:S,setState:O,errors:x,errorMessage:X}=qR(t,{modelValue:r,form:b});f&&YR({value:T,prop:p,handleChange:fe});const Z=()=>{S.touched=!0},le=_e(()=>{let A=Q(e);const L=Q(b==null?void 0:b.schema);return L&&!Oi(L)&&(A=WR(L,Q(t))||A),Oi(A)||ns(A)||Array.isArray(A)?A:Ib(A)});async function K(A){var L,W;return b!=null&&b.validateSchema?(L=(await b.validateSchema(A)).results[Q(t)])!==null&&L!==void 0?L:{valid:!0,errors:[]}:bb(T.value,le.value,{name:Q(c)||Q(t),values:(W=b==null?void 0:b.values)!==null&&W!==void 0?W:{},bails:i})}const ae=Gl(async()=>(S.pending=!0,S.validated=!0,K("validated-only")),A=>(k&&(A.valid=!0,A.errors=[]),O({errors:A.errors}),S.pending=!1,A)),we=Gl(async()=>K("silent"),A=>(k&&(A.valid=!0),S.valid=A.valid,A));function Te(A){return(A==null?void 0:A.mode)==="silent"?we():ae()}function fe(A,L=!0){const W=Fd(A);T.value=W,!u&&L&&ae()}vc(()=>{if(s)return ae();(!b||!b.validateSchema)&&we()});function pe(A){S.touched=A}let me,tt=Pe(T.value);function dt(){me=at(T,(A,L)=>{if(Xe(A,L)&&Xe(A,tt))return;(u?ae:we)(),tt=Pe(A)},{deep:!0})}dt();function Ge(A){var L;me==null||me();const W=A&&"value"in A?A.value:R.value;O({value:Pe(W),initialValue:Pe(W),touched:(L=A==null?void 0:A.touched)!==null&&L!==void 0?L:!1,errors:(A==null?void 0:A.errors)||[]}),S.pending=!1,S.validated=!1,we(),Wn(()=>{dt()})}function $e(A){T.value=A}function Bt(A){O({errors:Array.isArray(A)?A:[A]})}const Ct={id:_,name:t,label:c,value:T,meta:S,errors:x,errorMessage:X,type:o,checkedValue:a,uncheckedValue:l,bails:i,keepValueOnUnmount:d,resetField:Ge,handleReset:()=>Ge(),validate:Te,handleChange:fe,handleBlur:Z,setState:O,setTouched:pe,setErrors:Bt,setValue:$e};if(Ts(_R,Ct),Me(e)&&typeof Q(e)!="function"&&at(e,(A,L)=>{Xe(A,L)||(S.validated?ae():we())},{deep:!0}),!b)return Ct;b.register(Ct),wc(()=>{k=!0,b.unregister(Ct)});const P=_e(()=>{const A=le.value;return!A||ns(A)||Oi(A)||Array.isArray(A)?{}:Object.keys(A).reduce((L,W)=>{const ye=RR(A[W]).map(Ce=>Ce.__locatorRef).reduce((Ce,ie)=>{const g=je(b.values,ie)||b.values[ie];return g!==void 0&&(Ce[ie]=g),Ce},{});return Object.assign(L,ye),L},{})});return at(P,(A,L)=>{if(!Object.keys(A).length)return;!Xe(A,L)&&(S.validated?ae():we())}),Ct}function GR(t,e){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:t,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,modelPropName:"modelValue",syncVModel:!0,controlled:!0});if(!e)return n();const r="valueProp"in e?e.valueProp:e.checkedValue,s="standalone"in e?!e.standalone:e.controlled;return Object.assign(Object.assign(Object.assign({},n()),e||{}),{controlled:s!=null?s:!0,checkedValue:r})}function WR(t,e){if(!!t)return t[e]}function QR(t,e,n){const r=n!=null&&n.standalone?void 0:Vd(Bo),s=n==null?void 0:n.checkedValue,i=n==null?void 0:n.uncheckedValue;function o(a){const c=a.handleChange,u=_e(()=>{const h=Q(a.value),d=Q(s);return Array.isArray(h)?h.findIndex(p=>Xe(p,d))>=0:Xe(d,h)});function l(h,d=!0){var p;if(u.value===((p=h==null?void 0:h.target)===null||p===void 0?void 0:p.checked)){d&&a.validate();return}let f=Fd(h);r||(f=zl(Q(a.value),Q(s),Q(i))),c(f,d)}return Object.assign(Object.assign({},a),{checked:u,checkedValue:s,uncheckedValue:i,handleChange:l})}return o(Tb(t,e,n))}function YR({prop:t,value:e,handleChange:n}){const r=ho();if(!r)return;const s=t||"modelValue",i=`update:${s}`;s in r.props&&(at(e,o=>{Xe(o,Qg(r,s))||r.emit(i,o)}),at(()=>Qg(r,s),o=>{if(o===ic&&e.value===void 0)return;const a=o===ic?void 0:o;Xe(a,kR(e.value,r.props.modelModifiers))||n(a)}))}function Qg(t,e){return t.props[e]}const XR=Ut({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>Ud().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:ic},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(t,e){const n=rn(t,"rules"),r=rn(t,"name"),s=rn(t,"label"),i=rn(t,"uncheckedValue"),o=rn(t,"keepValue"),{errors:a,value:c,errorMessage:u,validate:l,handleChange:h,handleBlur:d,setTouched:p,resetField:f,handleReset:m,meta:I,checked:b,setErrors:k}=zR(r,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:ZR(t,e),checkedValue:e.attrs.value,uncheckedValue:i,label:s,validateOnValueUpdate:!1,keepValueOnUnmount:o}),_=function(X,Z=!0){h(X,Z),e.emit("update:modelValue",c.value)},T=x=>{Us(e.attrs.type)||(c.value=Fd(x))},R=function(X){T(X),e.emit("update:modelValue",c.value)},S=_e(()=>{const{validateOnInput:x,validateOnChange:X,validateOnBlur:Z,validateOnModelUpdate:le}=JR(t),K=[d,e.attrs.onBlur,Z?l:void 0].filter(Boolean),ae=[pe=>_(pe,x),e.attrs.onInput].filter(Boolean),we=[pe=>_(pe,X),e.attrs.onChange].filter(Boolean),Te={name:t.name,onBlur:K,onInput:ae,onChange:we};Te["onUpdate:modelValue"]=pe=>_(pe,le),Us(e.attrs.type)&&b&&(Te.checked=b.value);const fe=Yg(t,e);return AR(fe,e.attrs)&&(Te.value=c.value),Te});function O(){return{field:S.value,value:c.value,meta:I,errors:a.value,errorMessage:u.value,validate:l,resetField:f,handleChange:_,handleInput:R,handleReset:m,handleBlur:d,setTouched:p,setErrors:k}}return e.expose({setErrors:k,setTouched:p,reset:f,validate:l,handleChange:h}),()=>{const x=Ic(Yg(t,e)),X=du(x,e,O);return x?Sn(x,Object.assign(Object.assign({},e.attrs),S.value),X):X}}});function Yg(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function JR(t){var e,n,r,s;const{validateOnInput:i,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:c}=Ud();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:i,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(r=t.validateOnBlur)!==null&&r!==void 0?r:a,validateOnModelUpdate:(s=t.validateOnModelUpdate)!==null&&s!==void 0?s:c}}function ZR(t,e){return Us(e.attrs.type)?qg(t,"modelValue")?t.modelValue:void 0:qg(t,"modelValue")?t.modelValue:e.attrs.value}const eP=XR;let tP=0;function nP(t){var e;const n=tP++,r=new Set;let s=!1;const i=bt({}),o=bt(!1),a=bt(0),c=[],u=xn(Pe(Q(t==null?void 0:t.initialValues)||{})),{errorBag:l,setErrorBag:h,setFieldErrorBag:d}=iP(t==null?void 0:t.initialErrors),p=_e(()=>nt(l.value).reduce((v,w)=>{const V=l.value[w];return V&&V.length&&(v[w]=V[0]),v},{}));function f(v){const w=i.value[v];return Array.isArray(w)?w[0]:w}function m(v){return!!i.value[v]}const I=_e(()=>nt(i.value).reduce((v,w)=>{const V=f(w);return V&&(v[w]=Q(V.label||V.name)||""),v},{})),b=_e(()=>nt(i.value).reduce((v,w)=>{var V;const F=f(w);return F&&(v[w]=(V=F.bails)!==null&&V!==void 0?V:!0),v},{})),k=Object.assign({},(t==null?void 0:t.initialErrors)||{}),_=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:T,originalInitialValues:R,setInitialValues:S}=sP(i,u,t==null?void 0:t.initialValues),O=rP(i,u,R,p),x=_e(()=>[...r,...nt(i.value)].reduce((v,w)=>{const V=je(u,w);return Un(v,w,V),v},{})),X=t==null?void 0:t.validationSchema,Z=zg(z,5),le=zg(z,5),K=Gl(async v=>await v==="silent"?Z():le(),(v,[w])=>{const V=fe.fieldsByPath.value||{},F=nt(fe.errorBag.value);return[...new Set([...nt(v.results),...nt(V),...F])].reduce((q,Y)=>{const oe=V[Y],ve=(v.results[Y]||{errors:[]}).errors,Ae={errors:ve,valid:!ve.length};if(q.results[Y]=Ae,Ae.valid||(q.errors[Y]=Ae.errors[0]),!oe)return dt(Y,ve),q;if(me(oe,$t=>$t.meta.valid=Ae.valid),w==="silent")return q;const At=Array.isArray(oe)?oe.some($t=>$t.meta.validated):oe.meta.validated;return w==="validated-only"&&!At||me(oe,$t=>$t.setState({errors:Ae.errors})),q},{valid:v.valid,results:{},errors:{}})});function ae(v){return function(V,F){return function(q){return q instanceof Event&&(q.preventDefault(),q.stopPropagation()),L(nt(i.value).reduce((Y,oe)=>(Y[oe]=!0,Y),{})),o.value=!0,a.value++,y().then(Y=>{const oe=Pe(u);if(Y.valid&&typeof V=="function"){const ve=Pe(x.value);return V(v?ve:oe,{evt:q,controlledValues:ve,setErrors:Ge,setFieldError:dt,setTouched:L,setFieldTouched:A,setValues:Bt,setFieldValue:$e,resetForm:W})}!Y.valid&&typeof F=="function"&&F({values:oe,evt:q,errors:Y.errors,results:Y.results})}).then(Y=>(o.value=!1,Y),Y=>{throw o.value=!1,Y})}}}const Te=ae(!1);Te.withControlled=ae(!0);const fe={formId:n,fieldsByPath:i,values:u,controlledValues:x,errorBag:l,errors:p,schema:X,submitCount:a,meta:O,isSubmitting:o,fieldArrays:c,keepValuesOnUnmount:_,validateSchema:Q(X)?K:void 0,validate:y,register:ie,unregister:g,setFieldErrorBag:d,validateField:C,setFieldValue:$e,setValues:Bt,setErrors:Ge,setFieldError:dt,setFieldTouched:A,setTouched:L,resetForm:W,handleSubmit:Te,stageInitialValue:M,unsetInitialValue:D,setFieldInitialValue:$,useFieldModel:P};function pe(v){return Array.isArray(v)}function me(v,w){return Array.isArray(v)?v.forEach(w):w(v)}function tt(v){Object.values(i.value).forEach(w=>{!w||me(w,v)})}function dt(v,w){d(v,w)}function Ge(v){h(v)}function $e(v,w,{force:V}={force:!1}){var F;const j=i.value[v],q=Pe(w);if(!j){Un(u,v,q);return}if(pe(j)&&((F=j[0])===null||F===void 0?void 0:F.type)==="checkbox"&&!Array.isArray(w)){const oe=Pe(zl(je(u,v)||[],w,void 0));Un(u,v,oe);return}let Y=q;!pe(j)&&j.type==="checkbox"&&!V&&!s&&(Y=Pe(zl(je(u,v),w,Q(j.uncheckedValue)))),Un(u,v,Y)}function Bt(v){nt(u).forEach(w=>{delete u[w]}),nt(v).forEach(w=>{$e(w,v[w])}),c.forEach(w=>w&&w.reset())}function Ct(v){const{value:w}=Eb(v,void 0,fe);return at(w,()=>{m(Q(v))||y({mode:"validated-only"})},{deep:!0}),r.add(Q(v)),w}function P(v){return Array.isArray(v)?v.map(Ct):Ct(v)}function A(v,w){const V=i.value[v];V&&me(V,F=>F.setTouched(w))}function L(v){nt(v).forEach(w=>{A(w,!!v[w])})}function W(v){s=!0,tt(V=>V.resetField());const w=v!=null&&v.values?v.values:R.value;S(w),Bt(w),v!=null&&v.touched&&L(v.touched),Ge((v==null?void 0:v.errors)||{}),a.value=(v==null?void 0:v.submitCount)||0,Wn(()=>{s=!1})}function ye(v,w){const V=Br(v),F=w;if(!i.value[F]){i.value[F]=V;return}const j=i.value[F];j&&!Array.isArray(j)&&(i.value[F]=[j]),i.value[F]=[...i.value[F],V]}function Ce(v,w){const V=w,F=i.value[V];if(!!F){if(!pe(F)&&v.id===F.id){delete i.value[V];return}if(pe(F)){const j=F.findIndex(q=>q.id===v.id);if(j===-1)return;F.splice(j,1),F.length||delete i.value[V]}}}function ie(v){const w=Q(v.name);ye(v,w),Me(v.name)&&at(v.name,async(F,j)=>{await Wn(),Ce(v,j),ye(v,F),(p.value[j]||p.value[F])&&(dt(j,void 0),C(F)),await Wn(),m(j)||ia(u,j)});const V=Q(v.errorMessage);V&&(k==null?void 0:k[w])!==V&&C(w),delete k[w]}function g(v){const w=Q(v.name),V=i.value[w],F=!!V&&pe(V);Ce(v,w),Wn(()=>{var j;const q=(j=Q(v.keepValueOnUnmount))!==null&&j!==void 0?j:Q(_),Y=je(u,w);if(F&&(V===i.value[w]||!i.value[w])&&!q)if(Array.isArray(Y)){const ve=Y.findIndex(Ae=>Xe(Ae,Q(v.checkedValue)));if(ve>-1){const Ae=[...Y];Ae.splice(ve,1),$e(w,Ae,{force:!0})}}else Y===Q(v.checkedValue)&&ia(u,w);if(!m(w)){if(dt(w,void 0),q||F&&Array.isArray(Y)&&!mb(Y))return;ia(u,w)}})}async function y(v){const w=(v==null?void 0:v.mode)||"force";if(w==="force"&&tt(q=>q.meta.validated=!0),fe.validateSchema)return fe.validateSchema(w);const V=await Promise.all(Object.values(i.value).map(q=>{const Y=Array.isArray(q)?q[0]:q;return Y?Y.validate(v).then(oe=>({key:Q(Y.name),valid:oe.valid,errors:oe.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),F={},j={};for(const q of V)F[q.key]={valid:q.valid,errors:q.errors},q.errors.length&&(j[q.key]=q.errors[0]);return{valid:V.every(q=>q.valid),results:F,errors:j}}async function C(v){const w=i.value[v];return w?Array.isArray(w)?w.map(V=>V.validate())[0]:w.validate():Promise.resolve({errors:[],valid:!0})}function D(v){ia(T.value,v)}function M(v,w,V=!1){Un(u,v,w),$(v,w),V&&!(t!=null&&t.initialValues)&&Un(R.value,v,Pe(w))}function $(v,w){Un(T.value,v,Pe(w))}async function z(){const v=Q(X);return v?Oi(v)?await $R(v,u):await jR(v,u,{names:I.value,bailsMap:b.value}):{valid:!0,results:{},errors:{}}}const B=Te((v,{evt:w})=>{vb(w)&&w.target.submit()});return vc(()=>{if(t!=null&&t.initialErrors&&Ge(t.initialErrors),t!=null&&t.initialTouched&&L(t.initialTouched),t!=null&&t.validateOnMount){y();return}fe.validateSchema&&fe.validateSchema("silent")}),Me(X)&&at(X,()=>{var v;(v=fe.validateSchema)===null||v===void 0||v.call(fe,"validated-only")}),Ts(Bo,fe),Object.assign(Object.assign({},fe),{handleReset:()=>W(),submitForm:B})}function rP(t,e,n,r){const s={touched:"some",pending:"some",valid:"every"},i=_e(()=>!Xe(e,Q(n)));function o(){const c=Object.values(t.value).flat(1).filter(Boolean);return nt(s).reduce((u,l)=>{const h=s[l];return u[l]=c[h](d=>d.meta[l]),u},{})}const a=xn(o());return $0(()=>{const c=o();a.touched=c.touched,a.valid=c.valid,a.pending=c.pending}),_e(()=>Object.assign(Object.assign({initialValues:Q(n)},a),{valid:a.valid&&!nt(r.value).length,dirty:i.value}))}function sP(t,e,n){const r=bt(Pe(Q(n))||{}),s=bt(Pe(Q(n))||{});function i(o,a=!1){r.value=Pe(o),s.value=Pe(o),a&&nt(t.value).forEach(c=>{const u=t.value[c],l=Array.isArray(u)?u.some(d=>d.meta.touched):u==null?void 0:u.meta.touched;if(!u||l)return;const h=je(r.value,c);Un(e,c,Pe(h))})}return Me(n)&&at(n,o=>{i(o,!0)},{deep:!0}),{initialValues:r,originalInitialValues:s,setInitialValues:i}}function iP(t){const e=bt({});function n(i){return Array.isArray(i)?i:i?[i]:[]}function r(i,o){if(!o){delete e.value[i];return}e.value[i]=n(o)}function s(i){e.value=nt(i).reduce((o,a)=>{const c=i[a];return c&&(o[a]=n(c)),o},{})}return t&&s(t),{errorBag:e,setErrorBag:s,setFieldErrorBag:r}}const oP=Ut({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(t,e){const n=rn(t,"initialValues"),r=rn(t,"validationSchema"),s=rn(t,"keepValues"),{errors:i,values:o,meta:a,isSubmitting:c,submitCount:u,controlledValues:l,validate:h,validateField:d,handleReset:p,resetForm:f,handleSubmit:m,setErrors:I,setFieldError:b,setFieldValue:k,setValues:_,setFieldTouched:T,setTouched:R}=nP({validationSchema:r.value?r:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount,keepValuesOnUnmount:s}),S=m((le,{evt:K})=>{vb(K)&&K.target.submit()},t.onInvalidSubmit),O=t.onSubmit?m(t.onSubmit,t.onInvalidSubmit):S;function x(le){Md(le)&&le.preventDefault(),p(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function X(le,K){return m(typeof le=="function"&&!K?le:K,t.onInvalidSubmit)(le)}function Z(){return{meta:a.value,errors:i.value,values:o,isSubmitting:c.value,submitCount:u.value,controlledValues:l.value,validate:h,validateField:d,handleSubmit:X,handleReset:p,submitForm:S,setErrors:I,setFieldError:b,setFieldValue:k,setValues:_,setFieldTouched:T,setTouched:R,resetForm:f}}return e.expose({setFieldError:b,setErrors:I,setFieldValue:k,setValues:_,setFieldTouched:T,setTouched:R,resetForm:f,validate:h,validateField:d}),function(){const K=t.as==="form"?t.as:Ic(t.as),ae=du(K,e,Z);if(!t.as)return ae;const we=t.as==="form"?{novalidate:!0}:{};return Sn(K,Object.assign(Object.assign(Object.assign({},we),e.attrs),{onSubmit:O,onReset:x}),ae)}}}),aP=oP;function cP(t){const e=Vd(Bo,void 0),n=bt([]),r=()=>{},s={fields:n,remove:r,push:r,swap:r,insert:r,update:r,replace:r,prepend:r,move:r};if(!e||!Q(t))return s;const i=e.fieldArrays.find(_=>Q(_.path)===Q(t));if(i)return i;let o=0;function a(){const _=je(e==null?void 0:e.values,Q(t),[])||[];n.value=_.map(u),c()}a();function c(){const _=n.value.length;for(let T=0;T<_;T++){const R=n.value[T];R.isFirst=T===0,R.isLast=T===_-1}}function u(_){const T=o++;return{key:T,value:xR({get(){const S=je(e==null?void 0:e.values,Q(t),[])||[],O=n.value.findIndex(x=>x.key===T);return O===-1?_:S[O]},set(S){const O=n.value.findIndex(x=>x.key===T);O!==-1&&m(O,S)}}),isFirst:!1,isLast:!1}}function l(_){const T=Q(t),R=je(e==null?void 0:e.values,T);if(!R||!Array.isArray(R))return;const S=[...R];S.splice(_,1),e==null||e.unsetInitialValue(T+`[${_}]`),e==null||e.setFieldValue(T,S),n.value.splice(_,1),c()}function h(_){const T=Q(t),R=je(e==null?void 0:e.values,T),S=Di(R)?[]:R;if(!Array.isArray(S))return;const O=[...S];O.push(_),e==null||e.stageInitialValue(T+`[${O.length-1}]`,_),e==null||e.setFieldValue(T,O),n.value.push(u(_)),c()}function d(_,T){const R=Q(t),S=je(e==null?void 0:e.values,R);if(!Array.isArray(S)||!(_ in S)||!(T in S))return;const O=[...S],x=[...n.value],X=O[_];O[_]=O[T],O[T]=X;const Z=x[_];x[_]=x[T],x[T]=Z,e==null||e.setFieldValue(R,O),n.value=x,c()}function p(_,T){const R=Q(t),S=je(e==null?void 0:e.values,R);if(!Array.isArray(S)||S.length<_)return;const O=[...S],x=[...n.value];O.splice(_,0,T),x.splice(_,0,u(T)),e==null||e.setFieldValue(R,O),n.value=x,c()}function f(_){const T=Q(t);e==null||e.setFieldValue(T,_),a()}function m(_,T){const R=Q(t),S=je(e==null?void 0:e.values,R);!Array.isArray(S)||S.length-1<_||(e==null||e.setFieldValue(`${R}[${_}]`,T),e==null||e.validate({mode:"validated-only"}))}function I(_){const T=Q(t),R=je(e==null?void 0:e.values,T),S=Di(R)?[]:R;if(!Array.isArray(S))return;const O=[_,...S];e==null||e.stageInitialValue(T+`[${O.length-1}]`,_),e==null||e.setFieldValue(T,O),n.value.unshift(u(_)),c()}function b(_,T){const R=Q(t),S=je(e==null?void 0:e.values,R),O=Di(S)?[]:[...S];if(!Array.isArray(S)||!(_ in S)||!(T in S))return;const x=[...n.value],X=x[_];x.splice(_,1),x.splice(T,0,X);const Z=O[_];O.splice(_,1),O.splice(T,0,Z),e==null||e.setFieldValue(R,O),n.value=x,c()}const k={fields:n,remove:l,push:h,swap:d,insert:p,update:m,replace:f,prepend:I,move:b};return e.fieldArrays.push(Object.assign({path:t,reset:a},k)),wc(()=>{const _=e.fieldArrays.findIndex(T=>Q(T.path)===Q(t));_>=0&&e.fieldArrays.splice(_,1)}),k}Ut({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(t,e){const{push:n,remove:r,swap:s,insert:i,replace:o,update:a,prepend:c,move:u,fields:l}=cP(rn(t,"name"));function h(){return{fields:l.value,push:n,remove:r,swap:s,insert:i,update:a,replace:o,prepend:c,move:u}}return e.expose({push:n,remove:r,swap:s,insert:i,update:a,replace:o,prepend:c,move:u}),()=>du(void 0,e,h)}});const uP=Ut({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Nt(Bo,void 0),r=_e(()=>n==null?void 0:n.errors.value[t.name]);function s(){return{message:r.value}}return()=>{if(!r.value)return;const i=t.as?Ic(t.as):t.as,o=du(i,e,s),a=Object.assign({role:"alert"},e.attrs);return!i&&(Array.isArray(o)||!o)&&(o==null?void 0:o.length)?o:(Array.isArray(o)||!o)&&!(o!=null&&o.length)?Sn(i||"span",a,r.value):Sn(i,a,o)}}}),lP=uP;/**
  * vee-validate v4.7.3
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */const oa={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},hP=t=>{if(!!t)return Array.isArray(t)?t[0]:t.locale};function Ys(t,e){return Array.isArray(t)?t[0]:t[e]}function Xs(t){return!!(t==null||t===""||Array.isArray(t)&&t.length===0)}const Sb=(t,e)=>{if(Xs(t))return!0;const n=hP(e);if(Array.isArray(t))return t.every(s=>Sb(s,{locale:n}));const r=String(t);return n?(oa[n]||oa.en).test(r):Object.keys(oa).some(s=>oa[s].test(r))},dP=(t,e)=>{const n=Ys(e,"target");return String(t)===String(n)},fP=t=>{if(Xs(t))return!0;const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(t)?t.every(n=>e.test(String(n))):e.test(String(t))},Xg=(t,e)=>{const n=Ys(e,"other");return t!==n};function pP(t){return t==null}function gP(t){return Array.isArray(t)&&t.length===0}const Cb=(t,e)=>{if(Xs(t))return!0;const n=Ys(e,"length");return Array.isArray(t)?t.every(r=>Cb(r,{length:n})):String(t).length<=Number(n)},Ab=(t,e)=>{if(Xs(t))return!0;const n=Ys(e,"max");return Array.isArray(t)?t.length>0&&t.every(r=>Ab(r,{max:n})):Number(t)<=Number(n)},kb=(t,e)=>{if(Xs(t))return!0;const n=Ys(e,"length");return Array.isArray(t)?t.every(r=>kb(r,{length:n})):String(t).length>=Number(n)},xb=(t,e)=>{if(Xs(t))return!0;const n=Ys(e,"min");return Array.isArray(t)?t.length>0&&t.every(r=>xb(r,{min:n})):Number(t)>=Number(n)},Jg=t=>pP(t)||gP(t)||t===!1?!1:!!String(t).trim().length,mP={install(t){t.component("VeeForm",aP),t.component("VeeField",eP),t.component("ErrorMessage",lP),zt("required",Jg),zt("tos",Jg),zt("min",kb),zt("max",Cb),zt("alphaSpaces",Sb),zt("email",fP),zt("maxVal",Ab),zt("minVal",xb),zt("passwordMismatch",dP),zt("excluded",Xg),zt("countryExcluded",Xg),LR({generateMessage:e=>{const n={required:`The field ${e.field} is required.`,min:`The field ${e.field} is too short`,mix:`The field ${e.field} is too long`,alphaSpaces:` The field ${e.field} may olny contain alphabetic characters and spaces`,email:`The field ${e.field} must be a valid email`,maxVal:`The field ${e.field} is too high`,minVal:`The field ${e.field} is too low`,confirmed:"",excluded:` You are not allowed to use this value for the field ${e.field}`,passwordMismatch:"The password must be the same",tos:"You must accept the Terms of Service"};return n[e.rule.name]?n[e.rule.name]:`The filed ${e.filed} is invalid`},validateOnBlur:!0,validateOnChange:!0})}};function yP(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const u=async(h=!0)=>{await c};async function l(){if("serviceWorker"in navigator){const{Workbox:h}=await _r(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||r==null||r()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):s==null||s(d)}).catch(d=>{o==null||o(d)})}}return c=l(),u}var vP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Db={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(t,e){(function(n,r){t.exports=r()})(vP,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(f){var m,I;for(m in f)I=f[m],I!==void 0&&f.hasOwnProperty(m)&&(r[m]=I);return this},n.status=null,n.set=function(f){var m=n.isStarted();f=s(f,r.minimum,1),n.status=f===1?null:f;var I=n.render(!m),b=I.querySelector(r.barSelector),k=r.speed,_=r.easing;return I.offsetWidth,a(function(T){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),c(b,o(f,k,_)),f===1?(c(I,{transition:"none",opacity:1}),I.offsetWidth,setTimeout(function(){c(I,{transition:"all "+k+"ms linear",opacity:0}),setTimeout(function(){n.remove(),T()},k)},k)):setTimeout(T,k)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var f=function(){setTimeout(function(){!n.status||(n.trickle(),f())},r.trickleSpeed)};return r.trickle&&f(),this},n.done=function(f){return!f&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(f){var m=n.status;return m?(typeof f!="number"&&(f=(1-m)*s(Math.random()*m,.1,.95)),m=s(m+f,0,.994),n.set(m)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var f=0,m=0;n.promise=function(I){return!I||I.state()==="resolved"?this:(m===0&&n.start(),f++,m++,I.always(function(){m--,m===0?(f=0,n.done()):n.set((f-m)/f)}),this)}}(),n.render=function(f){if(n.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var m=document.createElement("div");m.id="nprogress",m.innerHTML=r.template;var I=m.querySelector(r.barSelector),b=f?"-100":i(n.status||0),k=document.querySelector(r.parent),_;return c(I,{transition:"all 0 linear",transform:"translate3d("+b+"%,0,0)"}),r.showSpinner||(_=m.querySelector(r.spinnerSelector),_&&p(_)),k!=document.body&&l(k,"nprogress-custom-parent"),k.appendChild(m),m},n.remove=function(){h(document.documentElement,"nprogress-busy"),h(document.querySelector(r.parent),"nprogress-custom-parent");var f=document.getElementById("nprogress");f&&p(f)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var f=document.body.style,m="WebkitTransform"in f?"Webkit":"MozTransform"in f?"Moz":"msTransform"in f?"ms":"OTransform"in f?"O":"";return m+"Perspective"in f?"translate3d":m+"Transform"in f?"translate":"margin"};function s(f,m,I){return f<m?m:f>I?I:f}function i(f){return(-1+f)*100}function o(f,m,I){var b;return r.positionUsing==="translate3d"?b={transform:"translate3d("+i(f)+"%,0,0)"}:r.positionUsing==="translate"?b={transform:"translate("+i(f)+"%,0)"}:b={"margin-left":i(f)+"%"},b.transition="all "+m+"ms "+I,b}var a=function(){var f=[];function m(){var I=f.shift();I&&I(m)}return function(I){f.push(I),f.length==1&&m()}}(),c=function(){var f=["Webkit","O","Moz","ms"],m={};function I(T){return T.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(R,S){return S.toUpperCase()})}function b(T){var R=document.body.style;if(T in R)return T;for(var S=f.length,O=T.charAt(0).toUpperCase()+T.slice(1),x;S--;)if(x=f[S]+O,x in R)return x;return T}function k(T){return T=I(T),m[T]||(m[T]=b(T))}function _(T,R,S){R=k(R),T.style[R]=S}return function(T,R){var S=arguments,O,x;if(S.length==2)for(O in R)x=R[O],x!==void 0&&R.hasOwnProperty(O)&&_(T,O,x);else _(T,S[1],S[2])}}();function u(f,m){var I=typeof f=="string"?f:d(f);return I.indexOf(" "+m+" ")>=0}function l(f,m){var I=d(f),b=I+m;u(I,m)||(f.className=b.substring(1))}function h(f,m){var I=d(f),b;!u(f,m)||(b=I.replace(" "+m+" "," "),f.className=b.substring(1,b.length-1))}function d(f){return(" "+(f.className||"")+" ").replace(/\s+/gi," ")}function p(f){f&&f.parentNode&&f.parentNode.removeChild(f)}return n})})(Db);const Zg=Db.exports,wP=t=>{t.beforeEach((e,n,r)=>{Zg.start(),r()}),t.afterEach(Zg.done)};yP({immediate:!0});wP(Pd);let vr;vn.onAuthStateChanged(()=>{vr||(vr=lE(PO),vr.use(fE()),vr.use(Pd),vr.use(mP),vr.component("App-icon",mT),vr.mount("#app"))});export{iR as A,xP as B,nb as C,xn as D,Yl as E,Dt as F,Ym as G,CO as H,vc as I,kP as J,TP as K,vE as L,vn as M,Bl as N,DO as O,kO as P,DP as Q,OP as R,Z0 as S,mh as T,G0 as U,Qs as _,NP as a,un as b,_e as c,Ut as d,Oe as e,wn as f,ph as g,EP as h,Mr as i,Qt as j,bP as k,SP as l,Da as m,P0 as n,Rt as o,R0 as p,AP as q,bt as r,Is as s,IP as t,Od as u,CP as v,at as w,_P as x,Ic as y,W1 as z};
