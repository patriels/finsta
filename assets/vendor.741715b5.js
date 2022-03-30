function br(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Ro="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zo=br(Ro);function ai(e){return!!e||e===""}function yr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=G(r)?Uo(r):yr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(G(e))return e;if(J(e))return e}}const Do=/;(?![^(]*\))/g,jo=/:(.+)/;function Uo(e){const t={};return e.split(Do).forEach(n=>{if(n){const r=n.split(jo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function xr(e){let t="";if(G(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=xr(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qc=e=>G(e)?e:e==null?"":F(e)||J(e)&&(e.toString===li||!R(e.toString))?JSON.stringify(e,ii,2):String(e),ii=(e,t)=>t&&t.__v_isRef?ii(e,t.value):mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:oi(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!F(t)&&!fi(t)?String(t):t,Y={},dt=[],he=()=>{},$o=()=>!1,Ho=/^on[^a-z]/,vn=e=>Ho.test(e),wr=e=>e.startsWith("onUpdate:"),ne=Object.assign,_r=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Bo=Object.prototype.hasOwnProperty,U=(e,t)=>Bo.call(e,t),F=Array.isArray,mt=e=>bn(e)==="[object Map]",oi=e=>bn(e)==="[object Set]",R=e=>typeof e=="function",G=e=>typeof e=="string",Cr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",si=e=>J(e)&&R(e.then)&&R(e.catch),li=Object.prototype.toString,bn=e=>li.call(e),Yo=e=>bn(e).slice(8,-1),fi=e=>bn(e)==="[object Object]",kr=e=>G(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zt=br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Wo=/-(\w)/g,ke=yn(e=>e.replace(Wo,(t,n)=>n?n.toUpperCase():"")),Ko=/\B([A-Z])/g,vt=yn(e=>e.replace(Ko,"-$1").toLowerCase()),xn=yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fn=yn(e=>e?`on${xn(e)}`:""),Rt=(e,t)=>!Object.is(e,t),Rn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},an=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},qo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let sa;const Vo=()=>sa||(sa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Oe;class Xo{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Oe&&(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}run(t){if(this.active)try{return Oe=this,t()}finally{Oe=this.parent}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Jo(e,t=Oe){t&&t.active&&t.effects.push(e)}const Ar=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ci=e=>(e.w&Be)>0,ui=e=>(e.n&Be)>0,Go=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Be},Zo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ci(a)&&!ui(a)?a.delete(e):t[n++]=a,a.w&=~Be,a.n&=~Be}t.length=n}},Wn=new WeakMap;let Et=0,Be=1;const Kn=30;let we;const Ge=Symbol(""),qn=Symbol("");class Er{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Jo(this,r)}run(){if(!this.active)return this.fn();let t=we,n=$e;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,$e=!0,Be=1<<++Et,Et<=Kn?Go(this):la(this),this.fn()}finally{Et<=Kn&&Zo(this),Be=1<<--Et,we=this.parent,$e=n,this.parent=void 0}}stop(){this.active&&(la(this),this.onStop&&this.onStop(),this.active=!1)}}function la(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let $e=!0;const di=[];function bt(){di.push($e),$e=!1}function yt(){const e=di.pop();$e=e===void 0?!0:e}function ce(e,t,n){if($e&&we){let r=Wn.get(e);r||Wn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ar()),mi(a)}}function mi(e,t){let n=!1;Et<=Kn?ui(e)||(e.n|=Be,n=!ci(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function Te(e,t,n,r,a,i){const o=Wn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?kr(n)&&s.push(o.get("length")):(s.push(o.get(Ge)),mt(e)&&s.push(o.get(qn)));break;case"delete":F(e)||(s.push(o.get(Ge)),mt(e)&&s.push(o.get(qn)));break;case"set":mt(e)&&s.push(o.get(Ge));break}if(s.length===1)s[0]&&Vn(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Vn(Ar(l))}}function Vn(e,t){for(const n of F(e)?e:[...e])(n!==we||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Qo=br("__proto__,__v_isRef,__isVue"),pi=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Cr)),es=Or(),ts=Or(!1,!0),ns=Or(!0),fa=rs();function rs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=$(this);for(let i=0,o=this.length;i<o;i++)ce(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map($)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){bt();const r=$(this)[t].apply(this,n);return yt(),r}}),e}function Or(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ys:yi:t?bi:vi).get(r))return r;const o=F(r);if(!e&&o&&U(fa,a))return Reflect.get(fa,a,i);const s=Reflect.get(r,a,i);return(Cr(a)?pi.has(a):Qo(a))||(e||ce(r,"get",a),t)?s:Q(s)?!o||!kr(a)?s.value:s:J(s)?e?xi(s):Tr(s):s}}const as=hi(),is=hi(!0);function hi(e=!1){return function(n,r,a,i){let o=n[r];if(zt(o)&&Q(o)&&!Q(a))return!1;if(!e&&!zt(a)&&(wi(a)||(a=$(a),o=$(o)),!F(n)&&Q(o)&&!Q(a)))return o.value=a,!0;const s=F(n)&&kr(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===$(i)&&(s?Rt(a,o)&&Te(n,"set",r,a):Te(n,"add",r,a)),l}}function os(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Te(e,"delete",t,void 0),r}function ss(e,t){const n=Reflect.has(e,t);return(!Cr(t)||!pi.has(t))&&ce(e,"has",t),n}function ls(e){return ce(e,"iterate",F(e)?"length":Ge),Reflect.ownKeys(e)}const gi={get:es,set:as,deleteProperty:os,has:ss,ownKeys:ls},fs={get:ns,set(e,t){return!0},deleteProperty(e,t){return!0}},cs=ne({},gi,{get:ts,set:is}),Pr=e=>e,wn=e=>Reflect.getPrototypeOf(e);function Kt(e,t,n=!1,r=!1){e=e.__v_raw;const a=$(e),i=$(t);t!==i&&!n&&ce(a,"get",t),!n&&ce(a,"get",i);const{has:o}=wn(a),s=r?Pr:n?Mr:Dt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function qt(e,t=!1){const n=this.__v_raw,r=$(n),a=$(e);return e!==a&&!t&&ce(r,"has",e),!t&&ce(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function Vt(e,t=!1){return e=e.__v_raw,!t&&ce($(e),"iterate",Ge),Reflect.get(e,"size",e)}function ca(e){e=$(e);const t=$(this);return wn(t).has.call(t,e)||(t.add(e),Te(t,"add",e,e)),this}function ua(e,t){t=$(t);const n=$(this),{has:r,get:a}=wn(n);let i=r.call(n,e);i||(e=$(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Rt(t,o)&&Te(n,"set",e,t):Te(n,"add",e,t),this}function da(e){const t=$(this),{has:n,get:r}=wn(t);let a=n.call(t,e);a||(e=$(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Te(t,"delete",e,void 0),i}function ma(){const e=$(this),t=e.size!==0,n=e.clear();return t&&Te(e,"clear",void 0,void 0),n}function Xt(e,t){return function(r,a){const i=this,o=i.__v_raw,s=$(o),l=t?Pr:e?Mr:Dt;return!e&&ce(s,"iterate",Ge),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function Jt(e,t,n){return function(...r){const a=this.__v_raw,i=$(a),o=mt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Pr:t?Mr:Dt;return!t&&ce(i,"iterate",l?qn:Ge),{next(){const{value:p,done:b}=u.next();return b?{value:p,done:b}:{value:s?[d(p[0]),d(p[1])]:d(p),done:b}},[Symbol.iterator](){return this}}}}function ze(e){return function(...t){return e==="delete"?!1:this}}function us(){const e={get(i){return Kt(this,i)},get size(){return Vt(this)},has:qt,add:ca,set:ua,delete:da,clear:ma,forEach:Xt(!1,!1)},t={get(i){return Kt(this,i,!1,!0)},get size(){return Vt(this)},has:qt,add:ca,set:ua,delete:da,clear:ma,forEach:Xt(!1,!0)},n={get(i){return Kt(this,i,!0)},get size(){return Vt(this,!0)},has(i){return qt.call(this,i,!0)},add:ze("add"),set:ze("set"),delete:ze("delete"),clear:ze("clear"),forEach:Xt(!0,!1)},r={get(i){return Kt(this,i,!0,!0)},get size(){return Vt(this,!0)},has(i){return qt.call(this,i,!0)},add:ze("add"),set:ze("set"),delete:ze("delete"),clear:ze("clear"),forEach:Xt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Jt(i,!1,!1),n[i]=Jt(i,!0,!1),t[i]=Jt(i,!1,!0),r[i]=Jt(i,!0,!0)}),[e,n,t,r]}const[ds,ms,ps,hs]=us();function Ir(e,t){const n=t?e?hs:ps:e?ms:ds;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const gs={get:Ir(!1,!1)},vs={get:Ir(!1,!0)},bs={get:Ir(!0,!1)},vi=new WeakMap,bi=new WeakMap,yi=new WeakMap,ys=new WeakMap;function xs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ws(e){return e.__v_skip||!Object.isExtensible(e)?0:xs(Yo(e))}function Tr(e){return zt(e)?e:Nr(e,!1,gi,gs,vi)}function _s(e){return Nr(e,!1,cs,vs,bi)}function xi(e){return Nr(e,!0,fs,bs,yi)}function Nr(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ws(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function pt(e){return zt(e)?pt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function wi(e){return!!(e&&e.__v_isShallow)}function _i(e){return pt(e)||zt(e)}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function Ci(e){return an(e,"__v_skip",!0),e}const Dt=e=>J(e)?Tr(e):e,Mr=e=>J(e)?xi(e):e;function ki(e){$e&&we&&(e=$(e),mi(e.dep||(e.dep=Ar())))}function Ai(e,t){e=$(e),e.dep&&Vn(e.dep)}function Q(e){return!!(e&&e.__v_isRef===!0)}function eu(e){return Cs(e,!1)}function Cs(e,t){return Q(e)?e:new ks(e,t)}class ks{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:$(t),this._value=n?t:Dt(t)}get value(){return ki(this),this._value}set value(t){t=this.__v_isShallow?t:$(t),Rt(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Dt(t),Ai(this))}}function As(e){return Q(e)?e.value:e}const Es={get:(e,t,n)=>As(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Q(a)&&!Q(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ei(e){return pt(e)?e:new Proxy(e,Es)}class Os{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Er(t,()=>{this._dirty||(this._dirty=!0,Ai(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=$(this);return ki(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ps(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=he):(r=e.get,a=e.set),new Os(r,a,i||!a,n)}Promise.resolve();function He(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){_n(i,t,n)}return a}function ge(e,t,n,r){if(R(e)){const i=He(e,t,n,r);return i&&si(i)&&i.catch(o=>{_n(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ge(e[i],t,n,r));return a}function _n(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){He(l,null,10,[e,o,s]);return}}Is(e,n,a,r)}function Is(e,t,n,r=!0){console.error(e)}let on=!1,Xn=!1;const le=[];let Ie=0;const Tt=[];let Ot=null,st=0;const Nt=[];let je=null,lt=0;const Oi=Promise.resolve();let Sr=null,Jn=null;function Ts(e){const t=Sr||Oi;return e?t.then(this?e.bind(this):e):t}function Ns(e){let t=Ie+1,n=le.length;for(;t<n;){const r=t+n>>>1;jt(le[r])<e?t=r+1:n=r}return t}function Pi(e){(!le.length||!le.includes(e,on&&e.allowRecurse?Ie+1:Ie))&&e!==Jn&&(e.id==null?le.push(e):le.splice(Ns(e.id),0,e),Ii())}function Ii(){!on&&!Xn&&(Xn=!0,Sr=Oi.then(Mi))}function Ms(e){const t=le.indexOf(e);t>Ie&&le.splice(t,1)}function Ti(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ii()}function Ss(e){Ti(e,Ot,Tt,st)}function Ls(e){Ti(e,je,Nt,lt)}function Lr(e,t=null){if(Tt.length){for(Jn=t,Ot=[...new Set(Tt)],Tt.length=0,st=0;st<Ot.length;st++)Ot[st]();Ot=null,st=0,Jn=null,Lr(e,t)}}function Ni(e){if(Nt.length){const t=[...new Set(Nt)];if(Nt.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>jt(n)-jt(r)),lt=0;lt<je.length;lt++)je[lt]();je=null,lt=0}}const jt=e=>e.id==null?1/0:e.id;function Mi(e){Xn=!1,on=!0,Lr(e),le.sort((n,r)=>jt(n)-jt(r));const t=he;try{for(Ie=0;Ie<le.length;Ie++){const n=le[Ie];n&&n.active!==!1&&He(n,null,14)}}finally{Ie=0,le.length=0,Ni(),on=!1,Sr=null,(le.length||Tt.length||Nt.length)&&Mi(e)}}function Fs(e,t,...n){const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:b}=r[d]||Y;b?a=n.map(A=>A.trim()):p&&(a=n.map(qo))}let s,l=r[s=Fn(t)]||r[s=Fn(ke(t))];!l&&i&&(l=r[s=Fn(vt(t))]),l&&ge(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ge(u,e,6,a)}}function Si(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=u=>{const d=Si(u,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ne(o,i),r.set(e,o),o)}function Fr(e,t){return!e||!vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,vt(t))||U(e,t))}let _e=null,Cn=null;function sn(e){const t=_e;return _e=e,Cn=e&&e.type.__scopeId||null,t}function tu(e){Cn=e}function nu(){Cn=null}function Rs(e,t=_e,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ca(-1);const i=sn(t),o=e(...a);return sn(i),r._d&&Ca(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function zn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:p,data:b,setupState:A,ctx:S,inheritAttrs:z}=e;let N,y;const E=sn(e);try{if(n.shapeFlag&4){const D=a||r;N=xe(d.call(D,D,p,i,A,b,S)),y=l}else{const D=t;N=xe(D.length>1?D(i,{attrs:l,slots:s,emit:u}):D(i,null)),y=t.props?l:zs(l)}}catch(D){Mt.length=0,_n(D,e,1),N=fe(et)}let L=N;if(y&&z!==!1){const D=Object.keys(y),{shapeFlag:B}=L;D.length&&B&7&&(o&&D.some(wr)&&(y=Ds(y,o)),L=Ut(L,y))}return n.dirs&&(L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),N=L,sn(E),N}const zs=e=>{let t;for(const n in e)(n==="class"||n==="style"||vn(n))&&((t||(t={}))[n]=e[n]);return t},Ds=(e,t)=>{const n={};for(const r in e)(!wr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function js(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?pa(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const b=d[p];if(o[b]!==r[b]&&!Fr(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?pa(r,o,u):!0:!!o;return!1}function pa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Fr(n,i))return!0}return!1}function Us({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const $s=e=>e.__isSuspense;function Hs(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Ls(e)}function Bs(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function Dn(e,t,n=!1){const r=Z||_e;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const ha={};function Qt(e,t,n){return Li(e,t,n)}function Li(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=Z;let l,u=!1,d=!1;if(Q(e)?(l=()=>e.value,u=wi(e)):pt(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(pt),l=()=>e.map(y=>{if(Q(y))return y.value;if(pt(y))return ft(y);if(R(y))return He(y,s,2)})):R(e)?t?l=()=>He(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return p&&p(),ge(e,s,3,[b])}:l=he,t&&r){const y=l;l=()=>ft(y())}let p,b=y=>{p=N.onStop=()=>{He(y,s,4)}};if($t)return b=he,t?n&&ge(t,s,3,[l(),d?[]:void 0,b]):l(),he;let A=d?[]:ha;const S=()=>{if(!!N.active)if(t){const y=N.run();(r||u||(d?y.some((E,L)=>Rt(E,A[L])):Rt(y,A)))&&(p&&p(),ge(t,s,3,[y,A===ha?void 0:A,b]),A=y)}else N.run()};S.allowRecurse=!!t;let z;a==="sync"?z=S:a==="post"?z=()=>ie(S,s&&s.suspense):z=()=>{!s||s.isMounted?Ss(S):S()};const N=new Er(l,z);return t?n?S():A=N.run():a==="post"?ie(N.run.bind(N),s&&s.suspense):N.run(),()=>{N.stop(),s&&s.scope&&_r(s.scope.effects,N)}}function Ys(e,t,n){const r=this.proxy,a=G(e)?e.includes(".")?Fi(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=Z;gt(this);const s=Li(a,i.bind(r),n);return o?gt(o):Qe(),s}function Fi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ft(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Q(e))ft(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)ft(e[n],t);else if(oi(e)||mt(e))e.forEach(n=>{ft(n,t)});else if(fi(e))for(const n in e)ft(e[n],t);return e}function Rr(e){return R(e)?{setup:e,name:e.name}:e}const Gn=e=>!!e.type.__asyncLoader,Ri=e=>e.type.__isKeepAlive;function Ws(e,t){zi(e,"a",t)}function Ks(e,t){zi(e,"da",t)}function zi(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(kn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ri(a.parent.vnode)&&qs(r,t,n,a),a=a.parent}}function qs(e,t,n,r){const a=kn(t,e,r,!0);Di(()=>{_r(r[t],a)},n)}function kn(e,t,n=Z,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;bt(),gt(n);const s=ge(t,n,e,o);return Qe(),yt(),s});return r?a.unshift(i):a.push(i),i}}const Le=e=>(t,n=Z)=>(!$t||e==="sp")&&kn(e,t,n),Vs=Le("bm"),Xs=Le("m"),Js=Le("bu"),Gs=Le("u"),Zs=Le("bum"),Di=Le("um"),Qs=Le("sp"),el=Le("rtg"),tl=Le("rtc");function nl(e,t=Z){kn("ec",e,t)}let Zn=!0;function rl(e){const t=Ui(e),n=e.proxy,r=e.ctx;Zn=!1,t.beforeCreate&&ga(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:p,mounted:b,beforeUpdate:A,updated:S,activated:z,deactivated:N,beforeDestroy:y,beforeUnmount:E,destroyed:L,unmounted:D,render:B,renderTracked:ee,renderTriggered:oe,errorCaptured:ve,serverPrefetch:re,expose:wt,inheritAttrs:rt,components:_t,directives:Yt,filters:ta}=t;if(u&&al(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const X in o){const W=o[X];R(W)&&(r[X]=W.bind(n))}if(a){const X=a.call(n,n);J(X)&&(e.data=Tr(X))}if(Zn=!0,i)for(const X in i){const W=i[X],Ae=R(W)?W.bind(n,n):R(W.get)?W.get.bind(n,n):he,Mn=!R(W)&&R(W.set)?W.set.bind(n):he,Ct=de({get:Ae,set:Mn});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:at=>Ct.value=at})}if(s)for(const X in s)ji(s[X],r,n,X);if(l){const X=R(l)?l.call(n):l;Reflect.ownKeys(X).forEach(W=>{Bs(W,X[W])})}d&&ga(d,e,"c");function ae(X,W){F(W)?W.forEach(Ae=>X(Ae.bind(n))):W&&X(W.bind(n))}if(ae(Vs,p),ae(Xs,b),ae(Js,A),ae(Gs,S),ae(Ws,z),ae(Ks,N),ae(nl,ve),ae(tl,ee),ae(el,oe),ae(Zs,E),ae(Di,D),ae(Qs,re),F(wt))if(wt.length){const X=e.exposed||(e.exposed={});wt.forEach(W=>{Object.defineProperty(X,W,{get:()=>n[W],set:Ae=>n[W]=Ae})})}else e.exposed||(e.exposed={});B&&e.render===he&&(e.render=B),rt!=null&&(e.inheritAttrs=rt),_t&&(e.components=_t),Yt&&(e.directives=Yt)}function al(e,t,n=he,r=!1){F(e)&&(e=Qn(e));for(const a in e){const i=e[a];let o;J(i)?"default"in i?o=Dn(i.from||a,i.default,!0):o=Dn(i.from||a):o=Dn(i),Q(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ga(e,t,n){ge(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ji(e,t,n,r){const a=r.includes(".")?Fi(n,r):()=>n[r];if(G(e)){const i=t[e];R(i)&&Qt(a,i)}else if(R(e))Qt(a,e.bind(n));else if(J(e))if(F(e))e.forEach(i=>ji(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&Qt(a,i,e)}}function Ui(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>ln(l,u,o,!0)),ln(l,t,o)),i.set(t,l),l}function ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&ln(e,i,n,!0),a&&a.forEach(o=>ln(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=il[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const il={data:va,props:Ve,emits:Ve,methods:Ve,computed:Ve,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:Ve,directives:Ve,watch:sl,provide:va,inject:ol};function va(e,t){return t?e?function(){return ne(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function ol(e,t){return Ve(Qn(e),Qn(t))}function Qn(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function te(e,t){return e?[...new Set([].concat(e,t))]:t}function Ve(e,t){return e?ne(ne(Object.create(null),e),t):t}function sl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=te(e[r],t[r]);return n}function ll(e,t,n,r=!1){const a={},i={};an(i,An,1),e.propsDefaults=Object.create(null),$i(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:_s(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function fl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=$(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let b=d[p];const A=t[b];if(l)if(U(i,b))A!==i[b]&&(i[b]=A,u=!0);else{const S=ke(b);a[S]=er(l,s,S,A,e,!1)}else A!==i[b]&&(i[b]=A,u=!0)}}}else{$i(e,t,a,i)&&(u=!0);let d;for(const p in s)(!t||!U(t,p)&&((d=vt(p))===p||!U(t,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(a[p]=er(l,s,p,void 0,e,!0)):delete a[p]);if(i!==s)for(const p in i)(!t||!U(t,p)&&!0)&&(delete i[p],u=!0)}u&&Te(e,"set","$attrs")}function $i(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Zt(l))continue;const u=t[l];let d;a&&U(a,d=ke(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Fr(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=$(n),u=s||Y;for(let d=0;d<i.length;d++){const p=i[d];n[p]=er(a,l,p,u[p],e,!U(u,p))}}return o}function er(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(gt(a),r=u[n]=l.call(null,t),Qe())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===vt(n))&&(r=!0))}return r}function Hi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=p=>{l=!0;const[b,A]=Hi(p,t,!0);ne(o,b),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,dt),dt;if(F(i))for(let d=0;d<i.length;d++){const p=ke(i[d]);ba(p)&&(o[p]=Y)}else if(i)for(const d in i){const p=ke(d);if(ba(p)){const b=i[d],A=o[p]=F(b)||R(b)?{type:b}:b;if(A){const S=wa(Boolean,A.type),z=wa(String,A.type);A[0]=S>-1,A[1]=z<0||S<z,(S>-1||U(A,"default"))&&s.push(p)}}}const u=[o,s];return r.set(e,u),u}function ba(e){return e[0]!=="$"}function ya(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function xa(e,t){return ya(e)===ya(t)}function wa(e,t){return F(t)?t.findIndex(n=>xa(n,e)):R(t)&&xa(t,e)?0:-1}const Bi=e=>e[0]==="_"||e==="$stable",zr=e=>F(e)?e.map(xe):[xe(e)],cl=(e,t,n)=>{const r=Rs((...a)=>zr(t(...a)),n);return r._c=!1,r},Yi=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Bi(a))continue;const i=e[a];if(R(i))t[a]=cl(a,i,r);else if(i!=null){const o=zr(i);t[a]=()=>o}}},Wi=(e,t)=>{const n=zr(t);e.slots.default=()=>n},ul=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=$(t),an(t,"_",n)):Yi(t,e.slots={})}else e.slots={},t&&Wi(e,t);an(e.slots,An,1)},dl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Yi(t,a)),o=t}else t&&(Wi(e,t),o={default:1});if(i)for(const s in a)!Bi(s)&&!(s in o)&&delete a[s]};function Ke(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(bt(),ge(l,n,8,[e.el,s,e,t]),yt())}}function Ki(){return{app:null,config:{isNativeTag:$o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ml=0;function pl(e,t){return function(r,a=null){a!=null&&!J(a)&&(a=null);const i=Ki(),o=new Set;let s=!1;const l=i.app={_uid:ml++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Dl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(l,...d)):R(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!s){const b=fe(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,p),s=!0,l._container=u,u.__vue_app__=l,Ur(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function tr(e,t,n,r,a=!1){if(F(e)){e.forEach((b,A)=>tr(b,t&&(F(t)?t[A]:t),n,r,a));return}if(Gn(r)&&!a)return;const i=r.shapeFlag&4?Ur(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===Y?s.refs={}:s.refs,p=s.setupState;if(u!=null&&u!==l&&(G(u)?(d[u]=null,U(p,u)&&(p[u]=null)):Q(u)&&(u.value=null)),R(l))He(l,s,12,[o,d]);else{const b=G(l),A=Q(l);if(b||A){const S=()=>{if(e.f){const z=b?d[l]:l.value;a?F(z)&&_r(z,i):F(z)?z.includes(i)||z.push(i):b?d[l]=[i]:(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,U(p,l)&&(p[l]=o)):Q(l)&&(l.value=o,e.k&&(d[e.k]=o))};o?(S.id=-1,ie(S,n)):S()}}}const ie=Hs;function hl(e){return gl(e)}function gl(e,t){const n=Vo();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:b,setScopeId:A=he,cloneNode:S,insertStaticContent:z}=e,N=(f,c,m,g=null,h=null,w=null,C=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!At(f,c)&&(g=Wt(f),Re(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:O}=c;switch(v){case Dr:y(f,c,m,g);break;case et:E(f,c,m,g);break;case jn:f==null&&L(c,m,g,C);break;case Pe:Yt(f,c,m,g,h,w,C,x,_);break;default:O&1?ee(f,c,m,g,h,w,C,x,_):O&6?ta(f,c,m,g,h,w,C,x,_):(O&64||O&128)&&v.process(f,c,m,g,h,w,C,x,_,it)}P!=null&&h&&tr(P,f&&f.ref,w,c||f,!c)},y=(f,c,m,g)=>{if(f==null)r(c.el=s(c.children),m,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},E=(f,c,m,g)=>{f==null?r(c.el=l(c.children||""),m,g):c.el=f.el},L=(f,c,m,g)=>{[f.el,f.anchor]=z(f.children,c,m,g,f.el,f.anchor)},D=({el:f,anchor:c},m,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,m,g),f=h;r(c,m,g)},B=({el:f,anchor:c})=>{let m;for(;f&&f!==c;)m=b(f),a(f),f=m;a(c)},ee=(f,c,m,g,h,w,C,x,_)=>{C=C||c.type==="svg",f==null?oe(c,m,g,h,w,C,x,_):wt(f,c,h,w,C,x,_)},oe=(f,c,m,g,h,w,C,x)=>{let _,v;const{type:P,props:O,shapeFlag:I,transition:M,patchFlag:j,dirs:V}=f;if(f.el&&S!==void 0&&j===-1)_=f.el=S(f.el);else{if(_=f.el=o(f.type,w,O&&O.is,O),I&8?d(_,f.children):I&16&&re(f.children,_,null,g,h,w&&P!=="foreignObject",C,x),V&&Ke(f,null,g,"created"),O){for(const K in O)K!=="value"&&!Zt(K)&&i(_,K,null,O[K],w,f.children,g,h,Ee);"value"in O&&i(_,"value",null,O.value),(v=O.onVnodeBeforeMount)&&ye(v,g,f)}ve(_,f,f.scopeId,C,g)}V&&Ke(f,null,g,"beforeMount");const H=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;H&&M.beforeEnter(_),r(_,c,m),((v=O&&O.onVnodeMounted)||H||V)&&ie(()=>{v&&ye(v,g,f),H&&M.enter(_),V&&Ke(f,null,g,"mounted")},h)},ve=(f,c,m,g,h)=>{if(m&&A(f,m),g)for(let w=0;w<g.length;w++)A(f,g[w]);if(h){let w=h.subTree;if(c===w){const C=h.vnode;ve(f,C,C.scopeId,C.slotScopeIds,h.parent)}}},re=(f,c,m,g,h,w,C,x,_=0)=>{for(let v=_;v<f.length;v++){const P=f[v]=x?Ue(f[v]):xe(f[v]);N(null,P,c,m,g,h,w,C,x)}},wt=(f,c,m,g,h,w,C)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=c;_|=f.patchFlag&16;const O=f.props||Y,I=c.props||Y;let M;m&&qe(m,!1),(M=I.onVnodeBeforeUpdate)&&ye(M,m,c,f),P&&Ke(c,f,m,"beforeUpdate"),m&&qe(m,!0);const j=h&&c.type!=="foreignObject";if(v?rt(f.dynamicChildren,v,x,m,g,j,w):C||Ae(f,c,x,null,m,g,j,w,!1),_>0){if(_&16)_t(x,c,O,I,m,g,h);else if(_&2&&O.class!==I.class&&i(x,"class",null,I.class,h),_&4&&i(x,"style",O.style,I.style,h),_&8){const V=c.dynamicProps;for(let H=0;H<V.length;H++){const K=V[H],me=O[K],ot=I[K];(ot!==me||K==="value")&&i(x,K,me,ot,h,f.children,m,g,Ee)}}_&1&&f.children!==c.children&&d(x,c.children)}else!C&&v==null&&_t(x,c,O,I,m,g,h);((M=I.onVnodeUpdated)||P)&&ie(()=>{M&&ye(M,m,c,f),P&&Ke(c,f,m,"updated")},g)},rt=(f,c,m,g,h,w,C)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],P=_.el&&(_.type===Pe||!At(_,v)||_.shapeFlag&70)?p(_.el):m;N(_,v,P,null,g,h,w,C,!0)}},_t=(f,c,m,g,h,w,C)=>{if(m!==g){for(const x in g){if(Zt(x))continue;const _=g[x],v=m[x];_!==v&&x!=="value"&&i(f,x,v,_,C,c.children,h,w,Ee)}if(m!==Y)for(const x in m)!Zt(x)&&!(x in g)&&i(f,x,m[x],null,C,c.children,h,w,Ee);"value"in g&&i(f,"value",m.value,g.value)}},Yt=(f,c,m,g,h,w,C,x,_)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:O,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,m,g),r(P,m,g),re(c.children,m,P,h,w,C,x,_)):O>0&&O&64&&I&&f.dynamicChildren?(rt(f.dynamicChildren,I,m,h,w,C,x),(c.key!=null||h&&c===h.subTree)&&qi(f,c,!0)):Ae(f,c,m,P,h,w,C,x,_)},ta=(f,c,m,g,h,w,C,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,m,g,C,_):Nn(c,m,g,h,w,C,_):ae(f,c,_)},Nn=(f,c,m,g,h,w,C)=>{const x=f.component=Nl(f,g,h);if(Ri(f)&&(x.ctx.renderer=it),Ml(x),x.asyncDep){if(h&&h.registerDep(x,X),!f.el){const _=x.subTree=fe(et);E(null,_,c,m)}return}X(x,f,c,m,h,w,C)},ae=(f,c,m)=>{const g=c.component=f.component;if(js(f,c,m))if(g.asyncDep&&!g.asyncResolved){W(g,c,m);return}else g.next=c,Ms(g.update),g.update();else c.component=f.component,c.el=f.el,g.vnode=c},X=(f,c,m,g,h,w,C)=>{const x=()=>{if(f.isMounted){let{next:P,bu:O,u:I,parent:M,vnode:j}=f,V=P,H;qe(f,!1),P?(P.el=j.el,W(f,P,C)):P=j,O&&Rn(O),(H=P.props&&P.props.onVnodeBeforeUpdate)&&ye(H,M,P,j),qe(f,!0);const K=zn(f),me=f.subTree;f.subTree=K,N(me,K,p(me.el),Wt(me),f,h,w),P.el=K.el,V===null&&Us(f,K.el),I&&ie(I,h),(H=P.props&&P.props.onVnodeUpdated)&&ie(()=>ye(H,M,P,j),h)}else{let P;const{el:O,props:I}=c,{bm:M,m:j,parent:V}=f,H=Gn(c);if(qe(f,!1),M&&Rn(M),!H&&(P=I&&I.onVnodeBeforeMount)&&ye(P,V,c),qe(f,!0),O&&Ln){const K=()=>{f.subTree=zn(f),Ln(O,f.subTree,f,h,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&K()):K()}else{const K=f.subTree=zn(f);N(null,K,m,g,f,h,w),c.el=K.el}if(j&&ie(j,h),!H&&(P=I&&I.onVnodeMounted)){const K=c;ie(()=>ye(P,V,K),h)}c.shapeFlag&256&&f.a&&ie(f.a,h),f.isMounted=!0,c=m=g=null}},_=f.effect=new Er(x,()=>Pi(f.update),f.scope),v=f.update=_.run.bind(_);v.id=f.uid,qe(f,!0),v()},W=(f,c,m)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,fl(f,c.props,g,m),dl(f,c.children,m),bt(),Lr(void 0,f.update),yt()},Ae=(f,c,m,g,h,w,C,x,_=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,O=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){Ct(v,O,m,g,h,w,C,x,_);return}else if(I&256){Mn(v,O,m,g,h,w,C,x,_);return}}M&8?(P&16&&Ee(v,h,w),O!==v&&d(m,O)):P&16?M&16?Ct(v,O,m,g,h,w,C,x,_):Ee(v,h,w,!0):(P&8&&d(m,""),M&16&&re(O,m,g,h,w,C,x,_))},Mn=(f,c,m,g,h,w,C,x,_)=>{f=f||dt,c=c||dt;const v=f.length,P=c.length,O=Math.min(v,P);let I;for(I=0;I<O;I++){const M=c[I]=_?Ue(c[I]):xe(c[I]);N(f[I],M,m,null,h,w,C,x,_)}v>P?Ee(f,h,w,!0,!1,O):re(c,m,g,h,w,C,x,_,O)},Ct=(f,c,m,g,h,w,C,x,_)=>{let v=0;const P=c.length;let O=f.length-1,I=P-1;for(;v<=O&&v<=I;){const M=f[v],j=c[v]=_?Ue(c[v]):xe(c[v]);if(At(M,j))N(M,j,m,null,h,w,C,x,_);else break;v++}for(;v<=O&&v<=I;){const M=f[O],j=c[I]=_?Ue(c[I]):xe(c[I]);if(At(M,j))N(M,j,m,null,h,w,C,x,_);else break;O--,I--}if(v>O){if(v<=I){const M=I+1,j=M<P?c[M].el:g;for(;v<=I;)N(null,c[v]=_?Ue(c[v]):xe(c[v]),m,j,h,w,C,x,_),v++}}else if(v>I)for(;v<=O;)Re(f[v],h,w,!0),v++;else{const M=v,j=v,V=new Map;for(v=j;v<=I;v++){const se=c[v]=_?Ue(c[v]):xe(c[v]);se.key!=null&&V.set(se.key,v)}let H,K=0;const me=I-j+1;let ot=!1,aa=0;const kt=new Array(me);for(v=0;v<me;v++)kt[v]=0;for(v=M;v<=O;v++){const se=f[v];if(K>=me){Re(se,h,w,!0);continue}let be;if(se.key!=null)be=V.get(se.key);else for(H=j;H<=I;H++)if(kt[H-j]===0&&At(se,c[H])){be=H;break}be===void 0?Re(se,h,w,!0):(kt[be-j]=v+1,be>=aa?aa=be:ot=!0,N(se,c[be],m,null,h,w,C,x,_),K++)}const ia=ot?vl(kt):dt;for(H=ia.length-1,v=me-1;v>=0;v--){const se=j+v,be=c[se],oa=se+1<P?c[se+1].el:g;kt[v]===0?N(null,be,m,oa,h,w,C,x,_):ot&&(H<0||v!==ia[H]?at(be,m,oa,2):H--)}}},at=(f,c,m,g,h=null)=>{const{el:w,type:C,transition:x,children:_,shapeFlag:v}=f;if(v&6){at(f.component.subTree,c,m,g);return}if(v&128){f.suspense.move(c,m,g);return}if(v&64){C.move(f,c,m,it);return}if(C===Pe){r(w,c,m);for(let O=0;O<_.length;O++)at(_[O],c,m,g);r(f.anchor,c,m);return}if(C===jn){D(f,c,m);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,m),ie(()=>x.enter(w),h);else{const{leave:O,delayLeave:I,afterLeave:M}=x,j=()=>r(w,c,m),V=()=>{O(w,()=>{j(),M&&M()})};I?I(w,j,V):V()}else r(w,c,m)},Re=(f,c,m,g=!1,h=!1)=>{const{type:w,props:C,ref:x,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:O,dirs:I}=f;if(x!=null&&tr(x,null,m,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&I,j=!Gn(f);let V;if(j&&(V=C&&C.onVnodeBeforeUnmount)&&ye(V,c,f),P&6)Fo(f.component,m,g);else{if(P&128){f.suspense.unmount(m,g);return}M&&Ke(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,m,h,it,g):v&&(w!==Pe||O>0&&O&64)?Ee(v,c,m,!1,!0):(w===Pe&&O&384||!h&&P&16)&&Ee(_,c,m),g&&na(f)}(j&&(V=C&&C.onVnodeUnmounted)||M)&&ie(()=>{V&&ye(V,c,f),M&&Ke(f,null,c,"unmounted")},m)},na=f=>{const{type:c,el:m,anchor:g,transition:h}=f;if(c===Pe){Lo(m,g);return}if(c===jn){B(f);return}const w=()=>{a(m),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:C,delayLeave:x}=h,_=()=>C(m,w);x?x(f.el,w,_):_()}else w()},Lo=(f,c)=>{let m;for(;f!==c;)m=b(f),a(f),f=m;a(c)},Fo=(f,c,m)=>{const{bum:g,scope:h,update:w,subTree:C,um:x}=f;g&&Rn(g),h.stop(),w&&(w.active=!1,Re(C,f,c,m)),x&&ie(x,c),ie(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Ee=(f,c,m,g=!1,h=!1,w=0)=>{for(let C=w;C<f.length;C++)Re(f[C],c,m,g,h)},Wt=f=>f.shapeFlag&6?Wt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ra=(f,c,m)=>{f==null?c._vnode&&Re(c._vnode,null,null,!0):N(c._vnode||null,f,c,null,null,null,m),Ni(),c._vnode=f},it={p:N,um:Re,m:at,r:na,mt:Nn,mc:re,pc:Ae,pbc:rt,n:Wt,o:e};let Sn,Ln;return t&&([Sn,Ln]=t(it)),{render:ra,hydrate:Sn,createApp:pl(ra,Sn)}}function qe({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function qi(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ue(a[i]),s.el=o.el),n||qi(o,s))}}function vl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const bl=e=>e.__isTeleport,Vi="components";function ru(e,t){return xl(Vi,e,!0,t)||e}const yl=Symbol();function xl(e,t,n=!0,r=!1){const a=_e||Z;if(a){const i=a.type;if(e===Vi){const s=Rl(i);if(s&&(s===t||s===ke(t)||s===xn(ke(t))))return i}const o=_a(a[e]||i[e],t)||_a(a.appContext[e],t);return!o&&r?i:o}}function _a(e,t){return e&&(e[t]||e[ke(t)]||e[xn(ke(t))])}const Pe=Symbol(void 0),Dr=Symbol(void 0),et=Symbol(void 0),jn=Symbol(void 0),Mt=[];let Ze=null;function wl(e=!1){Mt.push(Ze=e?null:[])}function _l(){Mt.pop(),Ze=Mt[Mt.length-1]||null}let fn=1;function Ca(e){fn+=e}function Xi(e){return e.dynamicChildren=fn>0?Ze||dt:null,_l(),fn>0&&Ze&&Ze.push(e),e}function au(e,t,n,r,a,i){return Xi(Gi(e,t,n,r,a,i,!0))}function Cl(e,t,n,r,a){return Xi(fe(e,t,n,r,a,!0))}function nr(e){return e?e.__v_isVNode===!0:!1}function At(e,t){return e.type===t.type&&e.key===t.key}const An="__vInternal",Ji=({key:e})=>e!=null?e:null,en=({ref:e,ref_key:t,ref_for:n})=>e!=null?G(e)||Q(e)||R(e)?{i:_e,r:e,k:t,f:!!n}:e:null;function Gi(e,t=null,n=null,r=0,a=null,i=e===Pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ji(t),ref:t&&en(t),scopeId:Cn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(jr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=G(n)?8:16),fn>0&&!o&&Ze&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ze.push(l),l}const fe=kl;function kl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===yl)&&(e=et),nr(e)){const s=Ut(e,t,!0);return n&&jr(s,n),s}if(zl(e)&&(e=e.__vccOpts),t){t=Al(t);let{class:s,style:l}=t;s&&!G(s)&&(t.class=xr(s)),J(l)&&(_i(l)&&!F(l)&&(l=ne({},l)),t.style=yr(l))}const o=G(e)?1:$s(e)?128:bl(e)?64:J(e)?4:R(e)?2:0;return Gi(e,t,n,r,a,o,i,!0)}function Al(e){return e?_i(e)||An in e?ne({},e):e:null}function Ut(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Ol(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ji(s),ref:t&&t.ref?n&&a?F(a)?a.concat(en(t)):[a,en(t)]:en(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),el:e.el,anchor:e.anchor}}function El(e=" ",t=0){return fe(Dr,null,e,t)}function iu(e="",t=!1){return t?(wl(),Cl(et,null,e)):fe(et,null,e)}function xe(e){return e==null||typeof e=="boolean"?fe(et):F(e)?fe(Pe,null,e.slice()):typeof e=="object"?Ue(e):fe(Dr,null,String(e))}function Ue(e){return e.el===null||e.memo?e:Ut(e)}function jr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),jr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(An in t)?t._ctx=_e:a===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[El(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ol(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=xr([t.class,r.class]));else if(a==="style")t.style=yr([t.style,r.style]);else if(vn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function ye(e,t,n,r=null){ge(e,t,7,[n,r])}function ou(e,t,n,r){let a;const i=n&&n[r];if(F(e)||G(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const rr=e=>e?Zi(e)?Ur(e)||e.proxy:rr(e.parent):null,cn=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>rr(e.parent),$root:e=>rr(e.root),$emit:e=>e.emit,$options:e=>Ui(e),$forceUpdate:e=>()=>Pi(e.update),$nextTick:e=>Ts.bind(e.proxy),$watch:e=>Ys.bind(e)}),Pl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&U(r,t))return o[t]=1,r[t];if(a!==Y&&U(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&U(u,t))return o[t]=3,i[t];if(n!==Y&&U(n,t))return o[t]=4,n[t];Zn&&(o[t]=0)}}const d=cn[t];let p,b;if(d)return t==="$attrs"&&ce(e,"get",t),d(e);if((p=s.__cssModules)&&(p=p[t]))return p;if(n!==Y&&U(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,U(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&U(a,t)?(a[t]=n,!0):r!==Y&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&U(e,o)||t!==Y&&U(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(cn,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Il=Ki();let Tl=0;function Nl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Il,i={uid:Tl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hi(r,a),emitsOptions:Si(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Fs.bind(null,i),e.ce&&e.ce(i),i}let Z=null;const gt=e=>{Z=e,e.scope.on()},Qe=()=>{Z&&Z.scope.off(),Z=null};function Zi(e){return e.vnode.shapeFlag&4}let $t=!1;function Ml(e,t=!1){$t=t;const{props:n,children:r}=e.vnode,a=Zi(e);ll(e,n,a,t),ul(e,r);const i=a?Sl(e,t):void 0;return $t=!1,i}function Sl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ci(new Proxy(e.ctx,Pl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Fl(e):null;gt(e),bt();const i=He(r,e,0,[e.props,a]);if(yt(),Qe(),si(i)){if(i.then(Qe,Qe),t)return i.then(o=>{ka(e,o,t)}).catch(o=>{_n(o,e,0)});e.asyncDep=i}else ka(e,i,t)}else Qi(e,t)}function ka(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Ei(t)),Qi(e,n)}let Aa;function Qi(e,t,n){const r=e.type;if(!e.render){if(!t&&Aa&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=Aa(a,u)}}e.render=r.render||he}gt(e),bt(),rl(e),yt(),Qe()}function Ll(e){return new Proxy(e.attrs,{get(t,n){return ce(e,"get","$attrs"),t[n]}})}function Fl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ll(e))},slots:e.slots,emit:e.emit,expose:t}}function Ur(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ei(Ci(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in cn)return cn[n](e)}}))}function Rl(e){return R(e)&&e.displayName||e.name}function zl(e){return R(e)&&"__vccOpts"in e}const de=(e,t)=>Ps(e,t,$t);function eo(e,t,n){const r=arguments.length;return r===2?J(t)&&!F(t)?nr(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&nr(n)&&(n=[n]),fe(e,t,n))}const Dl="3.2.31",jl="http://www.w3.org/2000/svg",Xe=typeof document!="undefined"?document:null,Ea=Xe&&Xe.createElement("template"),Ul={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Xe.createElementNS(jl,e):Xe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Xe.createTextNode(e),createComment:e=>Xe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ea.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ea.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function $l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Hl(e,t,n){const r=e.style,a=G(n);if(n&&!a){for(const i in n)ar(r,i,n[i]);if(t&&!G(t))for(const i in t)n[i]==null&&ar(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Oa=/\s*!important$/;function ar(e,t,n){if(F(n))n.forEach(r=>ar(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Bl(e,t);Oa.test(n)?e.setProperty(vt(r),n.replace(Oa,""),"important"):e[r]=n}}const Pa=["Webkit","Moz","ms"],Un={};function Bl(e,t){const n=Un[t];if(n)return n;let r=ke(t);if(r!=="filter"&&r in e)return Un[t]=r;r=xn(r);for(let a=0;a<Pa.length;a++){const i=Pa[a]+r;if(i in e)return Un[t]=i}return t}const Ia="http://www.w3.org/1999/xlink";function Yl(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ia,t.slice(6,t.length)):e.setAttributeNS(Ia,t,n);else{const i=zo(t);n==null||i&&!ai(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Wl(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=ai(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let un=Date.now,to=!1;if(typeof window!="undefined"){un()>document.createEvent("Event").timeStamp&&(un=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);to=!!(e&&Number(e[1])<=53)}let ir=0;const Kl=Promise.resolve(),ql=()=>{ir=0},Vl=()=>ir||(Kl.then(ql),ir=un());function Xl(e,t,n,r){e.addEventListener(t,n,r)}function Jl(e,t,n,r){e.removeEventListener(t,n,r)}function Gl(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Zl(t);if(r){const u=i[t]=Ql(r,a);Xl(e,s,u,l)}else o&&(Jl(e,s,o,l),i[t]=void 0)}}const Ta=/(?:Once|Passive|Capture)$/;function Zl(e){let t;if(Ta.test(e)){t={};let n;for(;n=e.match(Ta);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[vt(e.slice(2)),t]}function Ql(e,t){const n=r=>{const a=r.timeStamp||un();(to||a>=n.attached-1)&&ge(ef(r,n.value),t,5,[r])};return n.value=e,n.attached=Vl(),n}function ef(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Na=/^on[a-z]/,tf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?$l(e,r,a):t==="style"?Hl(e,n,r):vn(t)?wr(t)||Gl(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nf(e,t,r,a))?Wl(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Yl(e,t,r,a))};function nf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Na.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Na.test(t)&&G(n)?!1:t in e}const rf=ne({patchProp:tf},Ul);let Ma;function af(){return Ma||(Ma=hl(rf))}const su=(...e)=>{const t=af().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=of(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function of(e){return G(e)?document.querySelector(e):e}/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Sa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sa(Object(n),!0).forEach(function(r){ff(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dn(e){return dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dn(e)}function sf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function La(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function lf(e,t,n){return t&&La(e.prototype,t),n&&La(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ff(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $r(e,t){return uf(e)||mf(e,t)||no(e,t)||hf()}function En(e){return cf(e)||df(e)||no(e)||pf()}function cf(e){if(Array.isArray(e))return or(e)}function uf(e){if(Array.isArray(e))return e}function df(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mf(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function no(e,t){if(!!e){if(typeof e=="string")return or(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return or(e,t)}}function or(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fa=function(){},Hr={},ro={},ao=null,io={mark:Fa,measure:Fa};try{typeof window!="undefined"&&(Hr=window),typeof document!="undefined"&&(ro=document),typeof MutationObserver!="undefined"&&(ao=MutationObserver),typeof performance!="undefined"&&(io=performance)}catch{}var gf=Hr.navigator||{},Ra=gf.userAgent,za=Ra===void 0?"":Ra,Ye=Hr,q=ro,Da=ao,Gt=io;Ye.document;var Fe=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",oo=~za.indexOf("MSIE")||~za.indexOf("Trident/"),Ne="___FONT_AWESOME___",sr=16,so="fa",lo="svg-inline--fa",tt="data-fa-i2svg",lr="data-fa-pseudo-element",vf="data-fa-pseudo-element-pending",Br="data-prefix",Yr="data-icon",ja="fontawesome-i2svg",bf="async",yf=["HTML","HEAD","STYLE","SCRIPT"],fo=function(){try{return!0}catch{return!1}}(),Wr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},mn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},co={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},xf={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},wf=/fa[srltdbk\-\ ]/,uo="fa-layers-text",_f=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Cf={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},mo=[1,2,3,4,5,6,7,8,9,10],kf=mo.concat([11,12,13,14,15,16,17,18,19,20]),Af=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Je={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ef=[].concat(En(Object.keys(mn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Je.GROUP,Je.SWAP_OPACITY,Je.PRIMARY,Je.SECONDARY]).concat(mo.map(function(e){return"".concat(e,"x")})).concat(kf.map(function(e){return"w-".concat(e)})),po=Ye.FontAwesomeConfig||{};function Of(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Pf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var If=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];If.forEach(function(e){var t=$r(e,2),n=t[0],r=t[1],a=Pf(Of(n));a!=null&&(po[r]=a)})}var Tf={familyPrefix:so,styleDefault:"solid",replacementClass:lo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},St=k(k({},Tf),po);St.autoReplaceSvg||(St.observeMutations=!1);var T={};Object.keys(St).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){St[e]=n,tn.forEach(function(r){return r(T)})},get:function(){return St[e]}})});Ye.FontAwesomeConfig=T;var tn=[];function Nf(e){return tn.push(e),function(){tn.splice(tn.indexOf(e),1)}}var De=sr,Ce={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mf(e){if(!(!e||!Fe)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var Sf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ht(){for(var e=12,t="";e-- >0;)t+=Sf[Math.random()*62|0];return t}function xt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Kr(e){return e.classList?xt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ho(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Lf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ho(e[n]),'" ')},"").trim()}function On(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qr(e){return e.size!==Ce.size||e.x!==Ce.x||e.y!==Ce.y||e.rotate!==Ce.rotate||e.flipX||e.flipY}function Ff(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Rf(e){var t=e.transform,n=e.width,r=n===void 0?sr:n,a=e.height,i=a===void 0?sr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&oo?l+="translate(".concat(t.x/De-r/2,"em, ").concat(t.y/De-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/De,"em), calc(-50% + ").concat(t.y/De,"em)) "):l+="translate(".concat(t.x/De,"em, ").concat(t.y/De,"em) "),l+="scale(".concat(t.size/De*(t.flipX?-1:1),", ").concat(t.size/De*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var zf=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
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

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
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

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
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
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
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
  z-index: var(--fa-stack-z-index, auto);
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
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function go(){var e=so,t=lo,n=T.familyPrefix,r=T.replacementClass,a=zf;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ua=!1;function $n(){T.autoAddCss&&!Ua&&(Mf(go()),Ua=!0)}var Df={mixout:function(){return{dom:{css:go,insertCss:$n}}},hooks:function(){return{beforeDOMElementCreation:function(){$n()},beforeI2svg:function(){$n()}}}},Me=Ye||{};Me[Ne]||(Me[Ne]={});Me[Ne].styles||(Me[Ne].styles={});Me[Ne].hooks||(Me[Ne].hooks={});Me[Ne].shims||(Me[Ne].shims=[]);var pe=Me[Ne],vo=[],jf=function e(){q.removeEventListener("DOMContentLoaded",e),pn=1,vo.map(function(t){return t()})},pn=!1;Fe&&(pn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),pn||q.addEventListener("DOMContentLoaded",jf));function Uf(e){!Fe||(pn?setTimeout(e,0):vo.push(e))}function Bt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ho(e):"<".concat(t," ").concat(Lf(r),">").concat(i.map(Bt).join(""),"</").concat(t,">")}function $a(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $f=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Hn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?$f(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Hf(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function fr(e){var t=Hf(e);return t.length===1?t[0].toString(16):null}function Bf(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ha(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function cr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ha(t);typeof pe.hooks.addPack=="function"&&!a?pe.hooks.addPack(e,Ha(t)):pe.styles[e]=k(k({},pe.styles[e]||{}),i),e==="fas"&&cr("fa",t)}var Lt=pe.styles,Yf=pe.shims,Wf=Object.values(co),Vr=null,bo={},yo={},xo={},wo={},_o={},Kf=Object.keys(Wr);function qf(e){return~Ef.indexOf(e)}function Vf(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!qf(a)?a:null}var Co=function(){var t=function(i){return Hn(Lt,function(o,s,l){return o[l]=Hn(s,i,{}),o},{})};bo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),yo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),_o=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Lt||T.autoFetchSvg,r=Hn(Yf,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});xo=r.names,wo=r.unicodes,Vr=Pn(T.styleDefault)};Nf(function(e){Vr=Pn(e.styleDefault)});Co();function Xr(e,t){return(bo[e]||{})[t]}function Xf(e,t){return(yo[e]||{})[t]}function ct(e,t){return(_o[e]||{})[t]}function ko(e){return xo[e]||{prefix:null,iconName:null}}function Jf(e){var t=wo[e],n=Xr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function We(){return Vr}var Jr=function(){return{prefix:null,iconName:null,rest:[]}};function Pn(e){var t=Wr[e],n=mn[e]||mn[t],r=e in pe.styles?e:null;return n||r||null}function In(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Vf(T.familyPrefix,s);if(Lt[s]?(s=Wf.includes(s)?xf[s]:s,a=s,o.prefix=s):Kf.indexOf(s)>-1?(a=s,o.prefix=Pn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?ko(o.iconName):{},d=ct(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Lt.far&&Lt.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},Jr());return(i.prefix==="fa"||a==="fa")&&(i.prefix=We()||"fas"),i}var Gf=function(){function e(){sf(this,e),this.definitions={}}return lf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=k(k({},n.definitions[s]||{}),o[s]),cr(s,o[s]);var l=co[s];l&&cr(l,o[s]),Co()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(n[s][p]=u)}),n[s][l]=u}),n}}]),e}(),Ba=[],ut={},ht={},Zf=Object.keys(ht);function Qf(e,t){var n=t.mixoutsTo;return Ba=e,ut={},Object.keys(ht).forEach(function(r){Zf.indexOf(r)===-1&&delete ht[r]}),Ba.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),dn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ut[o]||(ut[o]=[]),ut[o].push(i[o])})}r.provides&&r.provides(ht)}),n}function ur(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ut[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ut[e]||[];a.forEach(function(i){i.apply(null,n)})}function Se(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ht[e]?ht[e].apply(null,t):void 0}function dr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||We();if(!!t)return t=ct(n,t)||t,$a(Ao.definitions,n,t)||$a(pe.styles,n,t)}var Ao=new Gf,ec=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,nt("noAuto")},tc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Fe?(nt("beforeI2svg",t),Se("pseudoElements2svg",t),Se("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Uf(function(){rc({autoReplaceSvgRoot:n}),nt("watch",t)})}},nc={icon:function(t){if(t===null)return null;if(dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Pn(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(wf))){var a=In(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||We(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=We();return{prefix:i,iconName:ct(i,t)||t}}}},ue={noAuto:ec,config:T,dom:tc,parse:nc,library:Ao,findIconDefinition:dr,toHtml:Bt},rc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(pe.styles).length>0||T.autoFetchSvg)&&Fe&&T.autoReplaceSvg&&ue.dom.i2svg({node:r})};function Tn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Bt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Fe){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ac(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(qr(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=On(k(k({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ic(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},a),{},{id:o}),children:r}]}]}function Gr(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,p=e.extra,b=e.watchable,A=b===void 0?!1:b,S=r.found?r:n,z=S.width,N=S.height,y=a==="fak",E=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(re){return p.classes.indexOf(re)===-1}).filter(function(re){return re!==""||!!re}).concat(p.classes).join(" "),L={children:[],attributes:k(k({},p.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(N)})},D=y&&!~p.classes.indexOf("fa-fw")?{width:"".concat(z/N*16*.0625,"em")}:{};A&&(L.attributes[tt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||Ht())},children:[l]}),delete L.attributes.title);var B=k(k({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:k(k({},D),p.styles)}),ee=r.found&&n.found?Se("generateAbstractMask",B)||{children:[],attributes:{}}:Se("generateAbstractIcon",B)||{children:[],attributes:{}},oe=ee.children,ve=ee.attributes;return B.children=oe,B.attributes=ve,s?ic(B):ac(B)}function Ya(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=k(k(k({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[tt]="");var d=k({},o.styles);qr(a)&&(d.transform=Rf({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var p=On(d);p.length>0&&(u.style=p);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function oc(e){var t=e.content,n=e.title,r=e.extra,a=k(k(k({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=On(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Bn=pe.styles;function mr(e){var t=e[0],n=e[1],r=e.slice(4),a=$r(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(Je.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(Je.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(Je.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var sc={found:!1,width:512,height:512};function lc(e,t){!fo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function pr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=We()),new Promise(function(r,a){if(Se("missingIconAbstract"),n==="fa"){var i=ko(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Bn[t]&&Bn[t][e]){var o=Bn[t][e];return r(mr(o))}lc(e,t),r(k(k({},sc),{},{icon:T.showMissingIcons&&e?Se("missingIconAbstract")||{}:{}}))})}var Wa=function(){},hr=T.measurePerformance&&Gt&&Gt.mark&&Gt.measure?Gt:{mark:Wa,measure:Wa},Pt='FA "6.1.0"',fc=function(t){return hr.mark("".concat(Pt," ").concat(t," begins")),function(){return Eo(t)}},Eo=function(t){hr.mark("".concat(Pt," ").concat(t," ends")),hr.measure("".concat(Pt," ").concat(t),"".concat(Pt," ").concat(t," begins"),"".concat(Pt," ").concat(t," ends"))},Zr={begin:fc,end:Eo},nn=function(){};function Ka(e){var t=e.getAttribute?e.getAttribute(tt):null;return typeof t=="string"}function cc(e){var t=e.getAttribute?e.getAttribute(Br):null,n=e.getAttribute?e.getAttribute(Yr):null;return t&&n}function uc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function dc(){if(T.autoReplaceSvg===!0)return rn.replace;var e=rn[T.autoReplaceSvg];return e||rn.replace}function mc(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function pc(e){return q.createElement(e)}function Oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?mc:pc:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Oo(o,{ceFn:r}))}),a}function hc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Oo(a),n)}),n.getAttribute(tt)===null&&T.keepOriginalSource){var r=q.createComment(hc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Kr(n).indexOf(T.replacementClass))return rn.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Bt(s)}).join(`
`);n.setAttribute(tt,""),n.innerHTML=o}};function qa(e){e()}function Po(e,t){var n=typeof t=="function"?t:nn;if(e.length===0)n();else{var r=qa;T.mutateApproach===bf&&(r=Ye.requestAnimationFrame||qa),r(function(){var a=dc(),i=Zr.begin("mutate");e.map(a),i(),n()})}}var Qr=!1;function Io(){Qr=!0}function gr(){Qr=!1}var hn=null;function Va(e){if(!!Da&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?nn:t,r=e.nodeCallback,a=r===void 0?nn:r,i=e.pseudoElementsCallback,o=i===void 0?nn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;hn=new Da(function(u){if(!Qr){var d=We();xt(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Ka(p.addedNodes[0])&&(T.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&T.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&Ka(p.target)&&~Af.indexOf(p.attributeName))if(p.attributeName==="class"&&cc(p.target)){var b=In(Kr(p.target)),A=b.prefix,S=b.iconName;p.target.setAttribute(Br,A||d),S&&p.target.setAttribute(Yr,S)}else uc(p.target)&&a(p.target)})}}),Fe&&hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function gc(){!hn||hn.disconnect()}function vc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function bc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=In(Kr(e));return a.prefix||(a.prefix=We()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Xf(a.prefix,e.innerText)||Xr(a.prefix,fr(e.innerText))),a}function yc(e){var t=xt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Ht()):(t["aria-hidden"]="true",t.focusable="false")),t}function xc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ce,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bc(e),r=n.iconName,a=n.prefix,i=n.rest,o=yc(e),s=ur("parseNodeAttributes",{},e),l=t.styleParser?vc(e):[];return k({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ce,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var wc=pe.styles;function To(e){var t=T.autoReplaceSvg==="nest"?Xa(e,{styleParser:!1}):Xa(e);return~t.extra.classes.indexOf(uo)?Se("generateLayersText",e,t):Se("generateSvgReplacementMutation",e,t)}function Ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Fe)return Promise.resolve();var n=q.documentElement.classList,r=function(p){return n.add("".concat(ja,"-").concat(p))},a=function(p){return n.remove("".concat(ja,"-").concat(p))},i=T.autoFetchSvg?Object.keys(Wr):Object.keys(wc),o=[".".concat(uo,":not([").concat(tt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=xt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Zr.begin("onTree"),u=s.reduce(function(d,p){try{var b=To(p);b&&d.push(b)}catch(A){fo||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,p){Promise.all(u).then(function(b){Po(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),p(b)})})}function _c(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;To(e).then(function(n){n&&Po([n],t)})}function Cc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:dr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:dr(a||{})),e(r,k(k({},n),{},{mask:a}))}}var kc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ce:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,p=n.title,b=p===void 0?null:p,A=n.titleId,S=A===void 0?null:A,z=n.classes,N=z===void 0?[]:z,y=n.attributes,E=y===void 0?{}:y,L=n.styles,D=L===void 0?{}:L;if(!!t){var B=t.prefix,ee=t.iconName,oe=t.icon;return Tn(k({type:"icon"},t),function(){return nt("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(b?E["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(S||Ht()):(E["aria-hidden"]="true",E.focusable="false")),Gr({icons:{main:mr(oe),mask:l?mr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ee,transform:k(k({},Ce),a),symbol:o,title:b,maskId:d,titleId:S,extra:{attributes:E,styles:D,classes:N}})})}},Ac={mixout:function(){return{icon:Cc(kc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ja,n.nodeCallback=_c,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return Ja(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,p=r.maskId,b=r.extra;return new Promise(function(A,S){Promise.all([pr(a,s),d.iconName?pr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var N=$r(z,2),y=N[0],E=N[1];A([n,Gr({icons:{main:y,mask:E},prefix:s,iconName:a,transform:l,symbol:u,maskId:p,title:i,titleId:o,extra:b,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=On(s);l.length>0&&(a.style=l);var u;return qr(o)&&(u=Se("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Ec={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Tn({type:"layer"},function(){nt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(En(i)).join(" ")},children:o}]})}}}},Oc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,p=d===void 0?{}:d;return Tn({type:"counter",content:n},function(){return nt("beforeDOMElementCreation",{content:n,params:r}),oc({content:n.toString(),title:i,extra:{attributes:u,styles:p,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(En(s))}})})}}}},Pc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ce:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,p=d===void 0?{}:d,b=r.styles,A=b===void 0?{}:b;return Tn({type:"text",content:n},function(){return nt("beforeDOMElementCreation",{content:n,params:r}),Ya({content:n,transform:k(k({},Ce),i),title:s,extra:{attributes:p,styles:A,classes:["".concat(T.familyPrefix,"-layers-text")].concat(En(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(oo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ya({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ic=new RegExp('"',"ug"),Ga=[1105920,1112319];function Tc(e){var t=e.replace(Ic,""),n=Bf(t,0),r=n>=Ga[0]&&n<=Ga[1],a=t.length===2?t[0]===t[1]:!1;return{value:fr(a?t[0]:t),isSecondary:r||a}}function Za(e,t){var n="".concat(vf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=xt(e.children),o=i.filter(function(ee){return ee.getAttribute(lr)===t})[0],s=Ye.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(_f),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var p=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mn[l[2].toLowerCase()]:Cf[u],A=Tc(p),S=A.value,z=A.isSecondary,N=l[0].startsWith("FontAwesome"),y=Xr(b,S),E=y;if(N){var L=Jf(S);L.iconName&&L.prefix&&(y=L.iconName,b=L.prefix)}if(y&&!z&&(!o||o.getAttribute(Br)!==b||o.getAttribute(Yr)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var D=xc(),B=D.extra;B.attributes[lr]=t,pr(y,b).then(function(ee){var oe=Gr(k(k({},D),{},{icons:{main:ee,mask:Jr()},prefix:b,iconName:E,extra:B,watchable:!0})),ve=q.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=oe.map(function(re){return Bt(re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Nc(e){return Promise.all([Za(e,"::before"),Za(e,"::after")])}function Mc(e){return e.parentNode!==document.head&&!~yf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(lr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Qa(e){if(!!Fe)return new Promise(function(t,n){var r=xt(e.querySelectorAll("*")).filter(Mc).map(Nc),a=Zr.begin("searchPseudoElements");Io(),Promise.all(r).then(function(){a(),gr(),t()}).catch(function(){a(),gr(),n()})})}var Sc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Qa,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;T.searchPseudoElements&&Qa(a)}}},ei=!1,Lc={mixout:function(){return{dom:{unwatch:function(){Io(),ei=!0}}}},hooks:function(){return{bootstrap:function(){Va(ur("mutationObserverCallbacks",{}))},noAuto:function(){gc()},watch:function(n){var r=n.observeMutationsRoot;ei?gr():Va(ur("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ti=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Fc={mixout:function(){return{parse:{transform:function(n){return ti(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ti(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:p,path:b};return{tag:"g",attributes:k({},A.outer),children:[{tag:"g",attributes:k({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:k(k({},r.icon.attributes),A.path)}]}]}}}},Yn={x:0,y:0,width:"100%",height:"100%"};function ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Rc(e){return e.tag==="g"?e.children:[e]}var zc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?In(a.split(" ").map(function(o){return o.trim()})):Jr();return i.prefix||(i.prefix=We()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,p=o.width,b=o.icon,A=Ff({transform:l,containerWidth:p,iconWidth:u}),S={tag:"rect",attributes:k(k({},Yn),{},{fill:"white"})},z=d.children?{children:d.children.map(ni)}:{},N={tag:"g",attributes:k({},A.inner),children:[ni(k({tag:d.tag,attributes:k(k({},d.attributes),A.path)},z))]},y={tag:"g",attributes:k({},A.outer),children:[N]},E="mask-".concat(s||Ht()),L="clip-".concat(s||Ht()),D={tag:"mask",attributes:k(k({},Yn),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,y]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Rc(b)},D]};return r.push(B,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(E,")")},Yn)}),{children:r,attributes:a}}}},Dc={provides:function(t){var n=!1;Ye.matchMedia&&(n=Ye.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:k(k({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=k(k({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:k(k({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:k(k({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:k(k({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:k(k({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Uc=[Df,Ac,Ec,Oc,Pc,Sc,Lc,Fc,zc,Dc,jc];Qf(Uc,{mixoutsTo:ue});ue.noAuto;var No=ue.config,lu=ue.library;ue.dom;var Mo=ue.parse;ue.findIconDefinition;ue.toHtml;var $c=ue.icon;ue.layer;var Hc=ue.text;ue.counter;/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var fu={prefix:"fas",iconName:"bookmark",icon:[384,512,[61591,128278],"f02e","M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"]},cu={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"]},uu={prefix:"fas",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"]},Bc={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"]},du=Bc,mu={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},pu={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"]},hu={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"]},gu={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"]};/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var vu={prefix:"far",iconName:"bookmark",icon:[384,512,[61591,128278],"f02e","M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"]},bu={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},yu={prefix:"far",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"]},xu={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]},wu={prefix:"far",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z"]},Yc=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Wc(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Kc=Wc(function(e){(function(t){var n=function(y,E,L){if(!u(E)||p(E)||b(E)||A(E)||l(E))return E;var D,B=0,ee=0;if(d(E))for(D=[],ee=E.length;B<ee;B++)D.push(n(y,E[B],L));else{D={};for(var oe in E)Object.prototype.hasOwnProperty.call(E,oe)&&(D[y(oe,L)]=n(y,E[oe],L))}return D},r=function(y,E){E=E||{};var L=E.separator||"_",D=E.split||/(?=[A-Z])/;return y.split(D).join(L)},a=function(y){return S(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,L){return L?L.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var E=a(y);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(y,E){return r(y,E).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},p=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},A=function(y){return s.call(y)=="[object Boolean]"},S=function(y){return y=y-0,y===y},z=function(y,E){var L=E&&"process"in E?E.process:E;return typeof L!="function"?y:function(D,B){return L(D,y,B)}},N={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,E){return n(z(a,E),y)},decamelizeKeys:function(y,E){return n(z(o,E),y,E)},pascalizeKeys:function(y,E){return n(z(i,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(Yc)}),qc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vc=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},vr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Xc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Kc.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Jc(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ea(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ea(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Jc(d);break;case"style":l.style=Xc(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Vc(n,["class","style"]);return eo(e.tag,gn({},t,{class:a.class,style:gn({},a.style,o)},a.attrs,s),r)}var So=!1;try{So=!0}catch{}function Gc(){if(!So&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ft(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?It({},e,t):{}}function Zc(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},It(t,"fa-"+e.size,e.size!==null),It(t,"fa-rotate-"+e.rotation,e.rotation!==null),It(t,"fa-pull-"+e.pull,e.pull!==null),It(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ri(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":qc(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var _u=Rr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=de(function(){return ri(t.icon)}),i=de(function(){return Ft("classes",Zc(t))}),o=de(function(){return Ft("transform",typeof t.transform=="string"?Mo.transform(t.transform):t.transform)}),s=de(function(){return Ft("mask",ri(t.mask))}),l=de(function(){return $c(a.value,gn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});Qt(l,function(d){if(!d)return Gc("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=de(function(){return l.value?ea(l.value.abstract[0],{},r):null});return function(){return u.value}}});Rr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=No.familyPrefix,i=de(function(){return[a+"-layers"].concat(vr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return eo("div",{class:i.value},r.default?r.default():[])}}});Rr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=No.familyPrefix,i=de(function(){return Ft("classes",[].concat(vr(t.counter?[a+"-layers-counter"]:[]),vr(t.position?[a+"-layers-"+t.position]:[])))}),o=de(function(){return Ft("transform",typeof t.transform=="string"?Mo.transform(t.transform):t.transform)}),s=de(function(){var u=Hc(t.value.toString(),gn({},o.value,i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=de(function(){return ea(s.value,{},r)});return function(){return l.value}}});export{Rs as A,As as B,Qc as C,fe as D,iu as E,Pe as F,xr as G,tu as H,nu as I,Di as a,Gi as b,au as c,Rr as d,ou as e,wl as f,Cl as g,mu as h,xu as i,uu as j,yu as k,lu as l,pu as m,wu as n,Xs as o,vu as p,fu as q,eu as r,du as s,gu as t,hu as u,cu as v,bu as w,su as x,_u as y,ru as z};
