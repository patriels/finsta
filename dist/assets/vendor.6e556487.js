function Xr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Ls="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fs=Xr(Ls);function Ki(e){return!!e||e===""}function Gr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ce(r)?Ds(r):Gr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ce(e))return e;if(fe(e))return e}}const zs=/;(?![^(]*\))/g,js=/:(.+)/;function Ds(e){const t={};return e.split(zs).forEach(n=>{if(n){const r=n.split(js);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Qr(e){let t="";if(ce(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=Qr(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Jd=e=>ce(e)?e:e==null?"":H(e)||fe(e)&&(e.toString===Gi||!B(e.toString))?JSON.stringify(e,qi,2):String(e),qi=(e,t)=>t&&t.__v_isRef?qi(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Vi(t)?{[`Set(${t.size})`]:[...t.values()]}:fe(t)&&!H(t)&&!Qi(t)?String(t):t,te={},Tt=[],Pe=()=>{},$s=()=>!1,Hs=/^on[^a-z]/,Wn=e=>Hs.test(e),Jr=e=>e.startsWith("onUpdate:"),pe=Object.assign,Zr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Us=Object.prototype.hasOwnProperty,q=(e,t)=>Us.call(e,t),H=Array.isArray,Nt=e=>Yn(e)==="[object Map]",Vi=e=>Yn(e)==="[object Set]",B=e=>typeof e=="function",ce=e=>typeof e=="string",ea=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Xi=e=>fe(e)&&B(e.then)&&B(e.catch),Gi=Object.prototype.toString,Yn=e=>Gi.call(e),Bs=e=>Yn(e).slice(8,-1),Qi=e=>Yn(e)==="[object Object]",ta=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ws=/-(\w)/g,Fe=Kn(e=>e.replace(Ws,(t,n)=>n?n.toUpperCase():"")),Ys=/\B([A-Z])/g,Dt=Kn(e=>e.replace(Ys,"-$1").toLowerCase()),qn=Kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),sr=Kn(e=>e?`on${qn(e)}`:""),ln=(e,t)=>!Object.is(e,t),lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},In=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ks=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let La;const qs=()=>La||(La=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $e;class Vs{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&$e&&(this.parent=$e,this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(t){if(this.active)try{return $e=this,t()}finally{$e=this.parent}}on(){$e=this}off(){$e=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Xs(e,t=$e){t&&t.active&&t.effects.push(e)}const na=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ji=e=>(e.w&ot)>0,Zi=e=>(e.n&ot)>0,Gs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ot},Qs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ji(a)&&!Zi(a)?a.delete(e):t[n++]=a,a.w&=~ot,a.n&=~ot}t.length=n}},yr=new WeakMap;let qt=0,ot=1;const xr=30;let Ne;const ht=Symbol(""),wr=Symbol("");class ra{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Xs(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,rt=!0,ot=1<<++qt,qt<=xr?Gs(this):Fa(this),this.fn()}finally{qt<=xr&&Qs(this),ot=1<<--qt,Ne=this.parent,rt=n,this.parent=void 0}}stop(){this.active&&(Fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Fa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rt=!0;const eo=[];function $t(){eo.push(rt),rt=!1}function Ht(){const e=eo.pop();rt=e===void 0?!0:e}function we(e,t,n){if(rt&&Ne){let r=yr.get(e);r||yr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=na()),to(a)}}function to(e,t){let n=!1;qt<=xr?Zi(e)||(e.n|=ot,n=!Ji(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Be(e,t,n,r,a,i){const o=yr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?ta(n)&&s.push(o.get("length")):(s.push(o.get(ht)),Nt(e)&&s.push(o.get(wr)));break;case"delete":H(e)||(s.push(o.get(ht)),Nt(e)&&s.push(o.get(wr)));break;case"set":Nt(e)&&s.push(o.get(ht));break}if(s.length===1)s[0]&&_r(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);_r(na(l))}}function _r(e,t){for(const n of H(e)?e:[...e])(n!==Ne||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Js=Xr("__proto__,__v_isRef,__isVue"),no=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(ea)),Zs=aa(),el=aa(!1,!0),tl=aa(!0),za=nl();function nl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){$t();const r=V(this)[t].apply(this,n);return Ht(),r}}),e}function aa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?bl:so:t?oo:io).get(r))return r;const o=H(r);if(!e&&o&&q(za,a))return Reflect.get(za,a,i);const s=Reflect.get(r,a,i);return(ea(a)?no.has(a):Js(a))||(e||we(r,"get",a),t)?s:me(s)?!o||!ta(a)?s.value:s:fe(s)?e?lo(s):gn(s):s}}const rl=ro(),al=ro(!0);function ro(e=!1){return function(n,r,a,i){let o=n[r];if(fn(o)&&me(o)&&!me(a))return!1;if(!e&&!fn(a)&&(fo(a)||(a=V(a),o=V(o)),!H(n)&&me(o)&&!me(a)))return o.value=a,!0;const s=H(n)&&ta(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?ln(a,o)&&Be(n,"set",r,a):Be(n,"add",r,a)),l}}function il(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Be(e,"delete",t,void 0),r}function ol(e,t){const n=Reflect.has(e,t);return(!ea(t)||!no.has(t))&&we(e,"has",t),n}function sl(e){return we(e,"iterate",H(e)?"length":ht),Reflect.ownKeys(e)}const ao={get:Zs,set:rl,deleteProperty:il,has:ol,ownKeys:sl},ll={get:tl,set(e,t){return!0},deleteProperty(e,t){return!0}},fl=pe({},ao,{get:el,set:al}),ia=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function yn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);t!==i&&!n&&we(a,"get",t),!n&&we(a,"get",i);const{has:o}=Vn(a),s=r?ia:n?la:cn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function xn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return e!==a&&!t&&we(r,"has",e),!t&&we(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function wn(e,t=!1){return e=e.__v_raw,!t&&we(V(e),"iterate",ht),Reflect.get(e,"size",e)}function ja(e){e=V(e);const t=V(this);return Vn(t).has.call(t,e)||(t.add(e),Be(t,"add",e,e)),this}function Da(e,t){t=V(t);const n=V(this),{has:r,get:a}=Vn(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ln(t,o)&&Be(n,"set",e,t):Be(n,"add",e,t),this}function $a(e){const t=V(this),{has:n,get:r}=Vn(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Be(t,"delete",e,void 0),i}function Ha(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Be(e,"clear",void 0,void 0),n}function _n(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?ia:e?la:cn;return!e&&we(s,"iterate",ht),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Cn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Nt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?ia:t?la:cn;return!t&&we(i,"iterate",l?wr:ht),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function Ge(e){return function(...t){return e==="delete"?!1:this}}function cl(){const e={get(i){return yn(this,i)},get size(){return wn(this)},has:xn,add:ja,set:Da,delete:$a,clear:Ha,forEach:_n(!1,!1)},t={get(i){return yn(this,i,!1,!0)},get size(){return wn(this)},has:xn,add:ja,set:Da,delete:$a,clear:Ha,forEach:_n(!1,!0)},n={get(i){return yn(this,i,!0)},get size(){return wn(this,!0)},has(i){return xn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:_n(!0,!1)},r={get(i){return yn(this,i,!0,!0)},get size(){return wn(this,!0)},has(i){return xn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:_n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Cn(i,!1,!1),n[i]=Cn(i,!0,!1),t[i]=Cn(i,!1,!0),r[i]=Cn(i,!0,!0)}),[e,n,t,r]}const[ul,dl,ml,hl]=cl();function oa(e,t){const n=t?e?hl:ml:e?dl:ul;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const pl={get:oa(!1,!1)},gl={get:oa(!1,!0)},vl={get:oa(!0,!1)},io=new WeakMap,oo=new WeakMap,so=new WeakMap,bl=new WeakMap;function yl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xl(e){return e.__v_skip||!Object.isExtensible(e)?0:yl(Bs(e))}function gn(e){return fn(e)?e:sa(e,!1,ao,pl,io)}function wl(e){return sa(e,!1,fl,gl,oo)}function lo(e){return sa(e,!0,ll,vl,so)}function sa(e,t,n,r,a){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=xl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Mt(e){return fn(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function fn(e){return!!(e&&e.__v_isReadonly)}function fo(e){return!!(e&&e.__v_isShallow)}function co(e){return Mt(e)||fn(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function uo(e){return In(e,"__v_skip",!0),e}const cn=e=>fe(e)?gn(e):e,la=e=>fe(e)?lo(e):e;function mo(e){rt&&Ne&&(e=V(e),to(e.dep||(e.dep=na())))}function ho(e,t){e=V(e),e.dep&&_r(e.dep)}function me(e){return!!(e&&e.__v_isRef===!0)}function _l(e){return po(e,!1)}function Cl(e){return po(e,!0)}function po(e,t){return me(e)?e:new kl(e,t)}class kl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:cn(t)}get value(){return mo(this),this._value}set value(t){t=this.__v_isShallow?t:V(t),ln(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:cn(t),ho(this))}}function Qt(e){return me(e)?e.value:e}const Al={get:(e,t,n)=>Qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return me(a)&&!me(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function go(e){return Mt(e)?e:new Proxy(e,Al)}class El{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ra(t,()=>{this._dirty||(this._dirty=!0,ho(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return mo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Pl(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Pe):(r=e.get,a=e.set),new El(r,a,i||!a,n)}Promise.resolve();function at(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Xn(i,t,n)}return a}function Oe(e,t,n,r){if(B(e)){const i=at(e,t,n,r);return i&&Xi(i)&&i.catch(o=>{Xn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Xn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){at(l,null,10,[e,o,s]);return}}Ol(e,n,a,r)}function Ol(e,t,n,r=!0){console.error(e)}let Tn=!1,Cr=!1;const ye=[];let Ue=0;const Jt=[];let Vt=null,Et=0;const Zt=[];let et=null,Pt=0;const vo=Promise.resolve();let fa=null,kr=null;function bo(e){const t=fa||vo;return e?t.then(this?e.bind(this):e):t}function Sl(e){let t=Ue+1,n=ye.length;for(;t<n;){const r=t+n>>>1;un(ye[r])<e?t=r+1:n=r}return t}function yo(e){(!ye.length||!ye.includes(e,Tn&&e.allowRecurse?Ue+1:Ue))&&e!==kr&&(e.id==null?ye.push(e):ye.splice(Sl(e.id),0,e),xo())}function xo(){!Tn&&!Cr&&(Cr=!0,fa=vo.then(Co))}function Rl(e){const t=ye.indexOf(e);t>Ue&&ye.splice(t,1)}function wo(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),xo()}function Il(e){wo(e,Vt,Jt,Et)}function Tl(e){wo(e,et,Zt,Pt)}function ca(e,t=null){if(Jt.length){for(kr=t,Vt=[...new Set(Jt)],Jt.length=0,Et=0;Et<Vt.length;Et++)Vt[Et]();Vt=null,Et=0,kr=null,ca(e,t)}}function _o(e){if(Zt.length){const t=[...new Set(Zt)];if(Zt.length=0,et){et.push(...t);return}for(et=t,et.sort((n,r)=>un(n)-un(r)),Pt=0;Pt<et.length;Pt++)et[Pt]();et=null,Pt=0}}const un=e=>e.id==null?1/0:e.id;function Co(e){Cr=!1,Tn=!0,ca(e),ye.sort((n,r)=>un(n)-un(r));const t=Pe;try{for(Ue=0;Ue<ye.length;Ue++){const n=ye[Ue];n&&n.active!==!1&&at(n,null,14)}}finally{Ue=0,ye.length=0,_o(),Tn=!1,fa=null,(ye.length||Jt.length||Zt.length)&&Co(e)}}function Nl(e,t,...n){const r=e.vnode.props||te;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[f]||te;h?a=n.map(v=>v.trim()):d&&(a=n.map(Ks))}let s,l=r[s=sr(t)]||r[s=sr(Fe(t))];!l&&i&&(l=r[s=sr(Dt(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function ko(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=c=>{const f=ko(c,t,!0);f&&(s=!0,pe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):pe(o,i),r.set(e,o),o)}function ua(e,t){return!e||!Wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Dt(t))||q(e,t))}let Me=null,Gn=null;function Nn(e){const t=Me;return Me=e,Gn=e&&e.type.__scopeId||null,t}function Zd(e){Gn=e}function em(){Gn=null}function Ml(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Qa(-1);const i=Nn(t),o=e(...a);return Nn(i),r._d&&Qa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:h,setupState:v,ctx:A,inheritAttrs:M}=e;let O,g;const _=Nn(e);try{if(n.shapeFlag&4){const D=a||r;O=Te(f.call(D,D,d,i,v,h,A)),g=l}else{const D=t;O=Te(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),g=t.props?l:Ll(l)}}catch(D){tn.length=0,Xn(D,e,1),O=xe(vt)}let N=O;if(g&&M!==!1){const D=Object.keys(g),{shapeFlag:Y}=N;D.length&&Y&7&&(o&&D.some(Jr)&&(g=Fl(g,o)),N=dn(N,g))}return n.dirs&&(N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),O=N,Nn(_),O}const Ll=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wn(n))&&((t||(t={}))[n]=e[n]);return t},Fl=(e,t)=>{const n={};for(const r in e)(!Jr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function zl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ua(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(o[h]!==r[h]&&!ua(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ua(r,o,c):!0:!!o;return!1}function Ua(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ua(n,i))return!0}return!1}function jl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Dl=e=>e.__isSuspense;function $l(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Tl(e)}function En(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function it(e,t,n=!1){const r=de||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r.proxy):t}}const Ba={};function en(e,t,n){return Ao(e,t,n)}function Ao(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=te){const s=de;let l,c=!1,f=!1;if(me(e)?(l=()=>e.value,c=fo(e)):Mt(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(Mt),l=()=>e.map(g=>{if(me(g))return g.value;if(Mt(g))return St(g);if(B(g))return at(g,s,2)})):B(e)?t?l=()=>at(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Oe(e,s,3,[h])}:l=Pe,t&&r){const g=l;l=()=>St(g())}let d,h=g=>{d=O.onStop=()=>{at(g,s,4)}};if(mn)return h=Pe,t?n&&Oe(t,s,3,[l(),f?[]:void 0,h]):l(),Pe;let v=f?[]:Ba;const A=()=>{if(!!O.active)if(t){const g=O.run();(r||c||(f?g.some((_,N)=>ln(_,v[N])):ln(g,v)))&&(d&&d(),Oe(t,s,3,[g,v===Ba?void 0:v,h]),v=g)}else O.run()};A.allowRecurse=!!t;let M;a==="sync"?M=A:a==="post"?M=()=>ge(A,s&&s.suspense):M=()=>{!s||s.isMounted?Il(A):A()};const O=new ra(l,M);return t?n?A():v=O.run():a==="post"?ge(O.run.bind(O),s&&s.suspense):O.run(),()=>{O.stop(),s&&s.scope&&Zr(s.scope.effects,O)}}function Hl(e,t,n){const r=this.proxy,a=ce(e)?e.includes(".")?Eo(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=de;Ft(this);const s=Ao(a,i.bind(r),n);return o?Ft(o):gt(),s}function Eo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function St(e,t){if(!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),me(e))St(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)St(e[n],t);else if(Vi(e)||Nt(e))e.forEach(n=>{St(n,t)});else if(Qi(e))for(const n in e)St(e[n],t);return e}function vn(e){return B(e)?{setup:e,name:e.name}:e}const Ar=e=>!!e.type.__asyncLoader,Po=e=>e.type.__isKeepAlive;function Ul(e,t){Oo(e,"a",t)}function Bl(e,t){Oo(e,"da",t)}function Oo(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Po(a.parent.vnode)&&Wl(r,t,n,a),a=a.parent}}function Wl(e,t,n,r){const a=Qn(t,e,r,!0);So(()=>{Zr(r[t],a)},n)}function Qn(e,t,n=de,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;$t(),Ft(n);const s=Oe(t,n,e,o);return gt(),Ht(),s});return r?a.unshift(i):a.push(i),i}}const qe=e=>(t,n=de)=>(!mn||e==="sp")&&Qn(e,t,n),Yl=qe("bm"),Kl=qe("m"),ql=qe("bu"),Vl=qe("u"),Xl=qe("bum"),So=qe("um"),Gl=qe("sp"),Ql=qe("rtg"),Jl=qe("rtc");function Zl(e,t=de){Qn("ec",e,t)}let Er=!0;function ef(e){const t=Io(e),n=e.proxy,r=e.ctx;Er=!1,t.beforeCreate&&Wa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:v,updated:A,activated:M,deactivated:O,beforeDestroy:g,beforeUnmount:_,destroyed:N,unmounted:D,render:Y,renderTracked:ne,renderTriggered:se,errorCaptured:Ce,serverPrefetch:ue,expose:Xe,inheritAttrs:ze,components:je,directives:xt,filters:wt}=t;if(c&&tf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const X=o[Z];B(X)&&(r[Z]=X.bind(n))}if(a){const Z=a.call(n,n);fe(Z)&&(e.data=gn(Z))}if(Er=!0,i)for(const Z in i){const X=i[Z],ve=B(X)?X.bind(n,n):B(X.get)?X.get.bind(n,n):Pe,Ct=!B(X)&&B(X.set)?X.set.bind(n):Pe,De=oe({get:ve,set:Ct});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>De.value,set:Se=>De.value=Se})}if(s)for(const Z in s)Ro(s[Z],r,n,Z);if(l){const Z=B(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(X=>{En(X,Z[X])})}f&&Wa(f,e,"c");function le(Z,X){H(X)?X.forEach(ve=>Z(ve.bind(n))):X&&Z(X.bind(n))}if(le(Yl,d),le(Kl,h),le(ql,v),le(Vl,A),le(Ul,M),le(Bl,O),le(Zl,Ce),le(Jl,ne),le(Ql,se),le(Xl,_),le(So,D),le(Gl,ue),H(Xe))if(Xe.length){const Z=e.exposed||(e.exposed={});Xe.forEach(X=>{Object.defineProperty(Z,X,{get:()=>n[X],set:ve=>n[X]=ve})})}else e.exposed||(e.exposed={});Y&&e.render===Pe&&(e.render=Y),ze!=null&&(e.inheritAttrs=ze),je&&(e.components=je),xt&&(e.directives=xt)}function tf(e,t,n=Pe,r=!1){H(e)&&(e=Pr(e));for(const a in e){const i=e[a];let o;fe(i)?"default"in i?o=it(i.from||a,i.default,!0):o=it(i.from||a):o=it(i),me(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Wa(e,t,n){Oe(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ro(e,t,n,r){const a=r.includes(".")?Eo(n,r):()=>n[r];if(ce(e)){const i=t[e];B(i)&&en(a,i)}else if(B(e))en(a,e.bind(n));else if(fe(e))if(H(e))e.forEach(i=>Ro(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&en(a,i,e)}}function Io(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Mn(l,c,o,!0)),Mn(l,t,o)),i.set(t,l),l}function Mn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Mn(e,i,n,!0),a&&a.forEach(o=>Mn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=nf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const nf={data:Ya,props:ut,emits:ut,methods:ut,computed:ut,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:ut,directives:ut,watch:af,provide:Ya,inject:rf};function Ya(e,t){return t?e?function(){return pe(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function rf(e,t){return ut(Pr(e),Pr(t))}function Pr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function ut(e,t){return e?pe(pe(Object.create(null),e),t):t}function af(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function of(e,t,n,r=!1){const a={},i={};In(i,Jn,1),e.propsDefaults=Object.create(null),To(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:wl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function sf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];const v=t[h];if(l)if(q(i,h))v!==i[h]&&(i[h]=v,c=!0);else{const A=Fe(h);a[A]=Or(l,s,A,v,e,!1)}else v!==i[h]&&(i[h]=v,c=!0)}}}else{To(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!q(t,d)&&((f=Dt(d))===d||!q(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Or(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d)&&!0)&&(delete i[d],c=!0)}c&&Be(e,"set","$attrs")}function To(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(An(l))continue;const c=t[l];let f;a&&q(a,f=Fe(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:ua(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||te;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Or(a,l,d,c[d],e,!q(c,d))}}return o}function Or(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ft(a),r=c[n]=l.call(null,t),gt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Dt(n))&&(r=!0))}return r}function No(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const f=d=>{l=!0;const[h,v]=No(d,t,!0);pe(o,h),v&&s.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,Tt),Tt;if(H(i))for(let f=0;f<i.length;f++){const d=Fe(i[f]);Ka(d)&&(o[d]=te)}else if(i)for(const f in i){const d=Fe(f);if(Ka(d)){const h=i[f],v=o[d]=H(h)||B(h)?{type:h}:h;if(v){const A=Xa(Boolean,v.type),M=Xa(String,v.type);v[0]=A>-1,v[1]=M<0||A<M,(A>-1||q(v,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function Ka(e){return e[0]!=="$"}function qa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Va(e,t){return qa(e)===qa(t)}function Xa(e,t){return H(t)?t.findIndex(n=>Va(n,e)):B(t)&&Va(t,e)?0:-1}const Mo=e=>e[0]==="_"||e==="$stable",da=e=>H(e)?e.map(Te):[Te(e)],lf=(e,t,n)=>{const r=Ml((...a)=>da(t(...a)),n);return r._c=!1,r},Lo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Mo(a))continue;const i=e[a];if(B(i))t[a]=lf(a,i,r);else if(i!=null){const o=da(i);t[a]=()=>o}}},Fo=(e,t)=>{const n=da(t);e.slots.default=()=>n},ff=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),In(t,"_",n)):Lo(t,e.slots={})}else e.slots={},t&&Fo(e,t);In(e.slots,Jn,1)},cf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=te;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Lo(t,a)),o=t}else t&&(Fo(e,t),o={default:1});if(i)for(const s in a)!Mo(s)&&!(s in o)&&delete a[s]};function ft(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&($t(),Oe(l,n,8,[e.el,s,e,t]),Ht())}}function zo(){return{app:null,config:{isNativeTag:$s,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uf=0;function df(e,t){return function(r,a=null){a!=null&&!fe(a)&&(a=null);const i=zo(),o=new Set;let s=!1;const l=i.app={_uid:uf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Ff,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...f)):B(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const h=xe(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,d),s=!0,l._container=c,c.__vue_app__=l,pa(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Sr(e,t,n,r,a=!1){if(H(e)){e.forEach((h,v)=>Sr(h,t&&(H(t)?t[v]:t),n,r,a));return}if(Ar(r)&&!a)return;const i=r.shapeFlag&4?pa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===te?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(ce(c)?(f[c]=null,q(d,c)&&(d[c]=null)):me(c)&&(c.value=null)),B(l))at(l,s,12,[o,f]);else{const h=ce(l),v=me(l);if(h||v){const A=()=>{if(e.f){const M=h?f[l]:l.value;a?H(M)&&Zr(M,i):H(M)?M.includes(i)||M.push(i):h?f[l]=[i]:(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,q(d,l)&&(d[l]=o)):me(l)&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,ge(A,n)):A()}}}const ge=$l;function mf(e){return hf(e)}function hf(e,t){const n=qs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:v=Pe,cloneNode:A,insertStaticContent:M}=e,O=(u,m,p,x=null,y=null,k=null,S=!1,C=null,E=!!m.dynamicChildren)=>{if(u===m)return;u&&!Yt(u,m)&&(x=L(u),ke(u,y,k,!0),u=null),m.patchFlag===-2&&(E=!1,m.dynamicChildren=null);const{type:w,ref:F,shapeFlag:I}=m;switch(w){case ma:g(u,m,p,x);break;case vt:_(u,m,p,x);break;case cr:u==null&&N(m,p,x,S);break;case He:xt(u,m,p,x,y,k,S,C,E);break;default:I&1?ne(u,m,p,x,y,k,S,C,E):I&6?wt(u,m,p,x,y,k,S,C,E):(I&64||I&128)&&w.process(u,m,p,x,y,k,S,C,E,ee)}F!=null&&y&&Sr(F,u&&u.ref,k,m||u,!m)},g=(u,m,p,x)=>{if(u==null)r(m.el=s(m.children),p,x);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},_=(u,m,p,x)=>{u==null?r(m.el=l(m.children||""),p,x):m.el=u.el},N=(u,m,p,x)=>{[u.el,u.anchor]=M(u.children,m,p,x,u.el,u.anchor)},D=({el:u,anchor:m},p,x)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,x),u=y;r(m,p,x)},Y=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},ne=(u,m,p,x,y,k,S,C,E)=>{S=S||m.type==="svg",u==null?se(m,p,x,y,k,S,C,E):Xe(u,m,y,k,S,C,E)},se=(u,m,p,x,y,k,S,C)=>{let E,w;const{type:F,props:I,shapeFlag:z,transition:$,patchFlag:K,dirs:ie}=u;if(u.el&&A!==void 0&&K===-1)E=u.el=A(u.el);else{if(E=u.el=o(u.type,k,I&&I.is,I),z&8?f(E,u.children):z&16&&ue(u.children,E,null,x,y,k&&F!=="foreignObject",S,C),ie&&ft(u,null,x,"created"),I){for(const re in I)re!=="value"&&!An(re)&&i(E,re,null,I[re],k,u.children,x,y,P);"value"in I&&i(E,"value",null,I.value),(w=I.onVnodeBeforeMount)&&Ie(w,x,u)}Ce(E,u,u.scopeId,S,x)}ie&&ft(u,null,x,"beforeMount");const Q=(!y||y&&!y.pendingBranch)&&$&&!$.persisted;Q&&$.beforeEnter(E),r(E,m,p),((w=I&&I.onVnodeMounted)||Q||ie)&&ge(()=>{w&&Ie(w,x,u),Q&&$.enter(E),ie&&ft(u,null,x,"mounted")},y)},Ce=(u,m,p,x,y)=>{if(p&&v(u,p),x)for(let k=0;k<x.length;k++)v(u,x[k]);if(y){let k=y.subTree;if(m===k){const S=y.vnode;Ce(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},ue=(u,m,p,x,y,k,S,C,E=0)=>{for(let w=E;w<u.length;w++){const F=u[w]=C?tt(u[w]):Te(u[w]);O(null,F,m,p,x,y,k,S,C)}},Xe=(u,m,p,x,y,k,S)=>{const C=m.el=u.el;let{patchFlag:E,dynamicChildren:w,dirs:F}=m;E|=u.patchFlag&16;const I=u.props||te,z=m.props||te;let $;p&&ct(p,!1),($=z.onVnodeBeforeUpdate)&&Ie($,p,m,u),F&&ft(m,u,p,"beforeUpdate"),p&&ct(p,!0);const K=y&&m.type!=="foreignObject";if(w?ze(u.dynamicChildren,w,C,p,x,K,k):S||ve(u,m,C,null,p,x,K,k,!1),E>0){if(E&16)je(C,m,I,z,p,x,y);else if(E&2&&I.class!==z.class&&i(C,"class",null,z.class,y),E&4&&i(C,"style",I.style,z.style,y),E&8){const ie=m.dynamicProps;for(let Q=0;Q<ie.length;Q++){const re=ie[Q],Ae=I[re],kt=z[re];(kt!==Ae||re==="value")&&i(C,re,Ae,kt,y,u.children,p,x,P)}}E&1&&u.children!==m.children&&f(C,m.children)}else!S&&w==null&&je(C,m,I,z,p,x,y);(($=z.onVnodeUpdated)||F)&&ge(()=>{$&&Ie($,p,m,u),F&&ft(m,u,p,"updated")},x)},ze=(u,m,p,x,y,k,S)=>{for(let C=0;C<m.length;C++){const E=u[C],w=m[C],F=E.el&&(E.type===He||!Yt(E,w)||E.shapeFlag&70)?d(E.el):p;O(E,w,F,null,x,y,k,S,!0)}},je=(u,m,p,x,y,k,S)=>{if(p!==x){for(const C in x){if(An(C))continue;const E=x[C],w=p[C];E!==w&&C!=="value"&&i(u,C,w,E,S,m.children,y,k,P)}if(p!==te)for(const C in p)!An(C)&&!(C in x)&&i(u,C,p[C],null,S,m.children,y,k,P);"value"in x&&i(u,"value",p.value,x.value)}},xt=(u,m,p,x,y,k,S,C,E)=>{const w=m.el=u?u.el:s(""),F=m.anchor=u?u.anchor:s("");let{patchFlag:I,dynamicChildren:z,slotScopeIds:$}=m;$&&(C=C?C.concat($):$),u==null?(r(w,p,x),r(F,p,x),ue(m.children,p,F,y,k,S,C,E)):I>0&&I&64&&z&&u.dynamicChildren?(ze(u.dynamicChildren,z,p,y,k,S,C),(m.key!=null||y&&m===y.subTree)&&jo(u,m,!0)):ve(u,m,p,F,y,k,S,C,E)},wt=(u,m,p,x,y,k,S,C,E)=>{m.slotScopeIds=C,u==null?m.shapeFlag&512?y.ctx.activate(m,p,x,S,E):_t(m,p,x,y,k,S,E):le(u,m,E)},_t=(u,m,p,x,y,k,S)=>{const C=u.component=Sf(u,x,y);if(Po(u)&&(C.ctx.renderer=ee),Rf(C),C.asyncDep){if(y&&y.registerDep(C,Z),!u.el){const E=C.subTree=xe(vt);_(null,E,m,p)}return}Z(C,u,m,p,y,k,S)},le=(u,m,p)=>{const x=m.component=u.component;if(zl(u,m,p))if(x.asyncDep&&!x.asyncResolved){X(x,m,p);return}else x.next=m,Rl(x.update),x.update();else m.component=u.component,m.el=u.el,x.vnode=m},Z=(u,m,p,x,y,k,S)=>{const C=()=>{if(u.isMounted){let{next:F,bu:I,u:z,parent:$,vnode:K}=u,ie=F,Q;ct(u,!1),F?(F.el=K.el,X(u,F,S)):F=K,I&&lr(I),(Q=F.props&&F.props.onVnodeBeforeUpdate)&&Ie(Q,$,F,K),ct(u,!0);const re=fr(u),Ae=u.subTree;u.subTree=re,O(Ae,re,d(Ae.el),L(Ae),u,y,k),F.el=re.el,ie===null&&jl(u,re.el),z&&ge(z,y),(Q=F.props&&F.props.onVnodeUpdated)&&ge(()=>Ie(Q,$,F,K),y)}else{let F;const{el:I,props:z}=m,{bm:$,m:K,parent:ie}=u,Q=Ar(m);if(ct(u,!1),$&&lr($),!Q&&(F=z&&z.onVnodeBeforeMount)&&Ie(F,ie,m),ct(u,!0),I&&U){const re=()=>{u.subTree=fr(u),U(I,u.subTree,u,y,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=fr(u);O(null,re,p,x,u,y,k),m.el=re.el}if(K&&ge(K,y),!Q&&(F=z&&z.onVnodeMounted)){const re=m;ge(()=>Ie(F,ie,re),y)}m.shapeFlag&256&&u.a&&ge(u.a,y),u.isMounted=!0,m=p=x=null}},E=u.effect=new ra(C,()=>yo(u.update),u.scope),w=u.update=E.run.bind(E);w.id=u.uid,ct(u,!0),w()},X=(u,m,p)=>{m.component=u;const x=u.vnode.props;u.vnode=m,u.next=null,sf(u,m.props,x,p),cf(u,m.children,p),$t(),ca(void 0,u.update),Ht()},ve=(u,m,p,x,y,k,S,C,E=!1)=>{const w=u&&u.children,F=u?u.shapeFlag:0,I=m.children,{patchFlag:z,shapeFlag:$}=m;if(z>0){if(z&128){De(w,I,p,x,y,k,S,C,E);return}else if(z&256){Ct(w,I,p,x,y,k,S,C,E);return}}$&8?(F&16&&P(w,y,k),I!==w&&f(p,I)):F&16?$&16?De(w,I,p,x,y,k,S,C,E):P(w,y,k,!0):(F&8&&f(p,""),$&16&&ue(I,p,x,y,k,S,C,E))},Ct=(u,m,p,x,y,k,S,C,E)=>{u=u||Tt,m=m||Tt;const w=u.length,F=m.length,I=Math.min(w,F);let z;for(z=0;z<I;z++){const $=m[z]=E?tt(m[z]):Te(m[z]);O(u[z],$,p,null,y,k,S,C,E)}w>F?P(u,y,k,!0,!1,I):ue(m,p,x,y,k,S,C,E,I)},De=(u,m,p,x,y,k,S,C,E)=>{let w=0;const F=m.length;let I=u.length-1,z=F-1;for(;w<=I&&w<=z;){const $=u[w],K=m[w]=E?tt(m[w]):Te(m[w]);if(Yt($,K))O($,K,p,null,y,k,S,C,E);else break;w++}for(;w<=I&&w<=z;){const $=u[I],K=m[z]=E?tt(m[z]):Te(m[z]);if(Yt($,K))O($,K,p,null,y,k,S,C,E);else break;I--,z--}if(w>I){if(w<=z){const $=z+1,K=$<F?m[$].el:x;for(;w<=z;)O(null,m[w]=E?tt(m[w]):Te(m[w]),p,K,y,k,S,C,E),w++}}else if(w>z)for(;w<=I;)ke(u[w],y,k,!0),w++;else{const $=w,K=w,ie=new Map;for(w=K;w<=z;w++){const be=m[w]=E?tt(m[w]):Te(m[w]);be.key!=null&&ie.set(be.key,w)}let Q,re=0;const Ae=z-K+1;let kt=!1,Ta=0;const Wt=new Array(Ae);for(w=0;w<Ae;w++)Wt[w]=0;for(w=$;w<=I;w++){const be=u[w];if(re>=Ae){ke(be,y,k,!0);continue}let Re;if(be.key!=null)Re=ie.get(be.key);else for(Q=K;Q<=z;Q++)if(Wt[Q-K]===0&&Yt(be,m[Q])){Re=Q;break}Re===void 0?ke(be,y,k,!0):(Wt[Re-K]=w+1,Re>=Ta?Ta=Re:kt=!0,O(be,m[Re],p,null,y,k,S,C,E),re++)}const Na=kt?pf(Wt):Tt;for(Q=Na.length-1,w=Ae-1;w>=0;w--){const be=K+w,Re=m[be],Ma=be+1<F?m[be+1].el:x;Wt[w]===0?O(null,Re,p,Ma,y,k,S,C,E):kt&&(Q<0||w!==Na[Q]?Se(Re,p,Ma,2):Q--)}}},Se=(u,m,p,x,y=null)=>{const{el:k,type:S,transition:C,children:E,shapeFlag:w}=u;if(w&6){Se(u.component.subTree,m,p,x);return}if(w&128){u.suspense.move(m,p,x);return}if(w&64){S.move(u,m,p,ee);return}if(S===He){r(k,m,p);for(let I=0;I<E.length;I++)Se(E[I],m,p,x);r(u.anchor,m,p);return}if(S===cr){D(u,m,p);return}if(x!==2&&w&1&&C)if(x===0)C.beforeEnter(k),r(k,m,p),ge(()=>C.enter(k),y);else{const{leave:I,delayLeave:z,afterLeave:$}=C,K=()=>r(k,m,p),ie=()=>{I(k,()=>{K(),$&&$()})};z?z(k,K,ie):ie()}else r(k,m,p)},ke=(u,m,p,x=!1,y=!1)=>{const{type:k,props:S,ref:C,children:E,dynamicChildren:w,shapeFlag:F,patchFlag:I,dirs:z}=u;if(C!=null&&Sr(C,null,p,u,!0),F&256){m.ctx.deactivate(u);return}const $=F&1&&z,K=!Ar(u);let ie;if(K&&(ie=S&&S.onVnodeBeforeUnmount)&&Ie(ie,m,u),F&6)T(u.component,p,x);else{if(F&128){u.suspense.unmount(p,x);return}$&&ft(u,null,m,"beforeUnmount"),F&64?u.type.remove(u,m,p,y,ee,x):w&&(k!==He||I>0&&I&64)?P(w,m,p,!1,!0):(k===He&&I&384||!y&&F&16)&&P(E,m,p),x&&or(u)}(K&&(ie=S&&S.onVnodeUnmounted)||$)&&ge(()=>{ie&&Ie(ie,m,u),$&&ft(u,null,m,"unmounted")},p)},or=u=>{const{type:m,el:p,anchor:x,transition:y}=u;if(m===He){b(p,x);return}if(m===cr){Y(u);return}const k=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:C}=y,E=()=>S(p,k);C?C(u.el,k,E):E()}else k()},b=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},T=(u,m,p)=>{const{bum:x,scope:y,update:k,subTree:S,um:C}=u;x&&lr(x),y.stop(),k&&(k.active=!1,ke(S,u,m,p)),C&&ge(C,m),ge(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(u,m,p,x=!1,y=!1,k=0)=>{for(let S=k;S<u.length;S++)ke(u[S],m,p,x,y)},L=u=>u.shapeFlag&6?L(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),G=(u,m,p)=>{u==null?m._vnode&&ke(m._vnode,null,null,!0):O(m._vnode||null,u,m,null,null,null,p),_o(),m._vnode=u},ee={p:O,um:ke,m:Se,r:or,mt:_t,mc:ue,pc:ve,pbc:ze,n:L,o:e};let W,U;return t&&([W,U]=t(ee)),{render:G,hydrate:W,createApp:df(G,W)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function jo(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=tt(a[i]),s.el=o.el),n||jo(o,s))}}function pf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const gf=e=>e.__isTeleport,Do="components";function tm(e,t){return bf(Do,e,!0,t)||e}const vf=Symbol();function bf(e,t,n=!0,r=!1){const a=Me||de;if(a){const i=a.type;if(e===Do){const s=Mf(i);if(s&&(s===t||s===Fe(t)||s===qn(Fe(t))))return i}const o=Ga(a[e]||i[e],t)||Ga(a.appContext[e],t);return!o&&r?i:o}}function Ga(e,t){return e&&(e[t]||e[Fe(t)]||e[qn(Fe(t))])}const He=Symbol(void 0),ma=Symbol(void 0),vt=Symbol(void 0),cr=Symbol(void 0),tn=[];let pt=null;function yf(e=!1){tn.push(pt=e?null:[])}function xf(){tn.pop(),pt=tn[tn.length-1]||null}let Ln=1;function Qa(e){Ln+=e}function $o(e){return e.dynamicChildren=Ln>0?pt||Tt:null,xf(),Ln>0&&pt&&pt.push(e),e}function nm(e,t,n,r,a,i){return $o(Uo(e,t,n,r,a,i,!0))}function wf(e,t,n,r,a){return $o(xe(e,t,n,r,a,!0))}function Rr(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const Jn="__vInternal",Ho=({key:e})=>e!=null?e:null,Pn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ce(e)||me(e)||B(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function Uo(e,t=null,n=null,r=0,a=null,i=e===He?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ho(t),ref:t&&Pn(t),scopeId:Gn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ha(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),Ln>0&&!o&&pt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&pt.push(l),l}const xe=_f;function _f(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===vf)&&(e=vt),Rr(e)){const s=dn(e,t,!0);return n&&ha(s,n),s}if(Lf(e)&&(e=e.__vccOpts),t){t=Cf(t);let{class:s,style:l}=t;s&&!ce(s)&&(t.class=Qr(s)),fe(l)&&(co(l)&&!H(l)&&(l=pe({},l)),t.style=Gr(l))}const o=ce(e)?1:Dl(e)?128:gf(e)?64:fe(e)?4:B(e)?2:0;return Uo(e,t,n,r,a,o,i,!0)}function Cf(e){return e?co(e)||Jn in e?pe({},e):e:null}function dn(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Af(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ho(s),ref:t&&t.ref?n&&a?H(a)?a.concat(Pn(t)):[a,Pn(t)]:Pn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==He?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dn(e.ssContent),ssFallback:e.ssFallback&&dn(e.ssFallback),el:e.el,anchor:e.anchor}}function kf(e=" ",t=0){return xe(ma,null,e,t)}function rm(e="",t=!1){return t?(yf(),wf(vt,null,e)):xe(vt,null,e)}function Te(e){return e==null||typeof e=="boolean"?xe(vt):H(e)?xe(He,null,e.slice()):typeof e=="object"?tt(e):xe(ma,null,String(e))}function tt(e){return e.el===null||e.memo?e:dn(e)}function ha(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ha(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Jn in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[kf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Af(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Qr([t.class,r.class]));else if(a==="style")t.style=Gr([t.style,r.style]);else if(Wn(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Oe(e,t,7,[n,r])}function am(e,t,n,r){let a;const i=n&&n[r];if(H(e)||ce(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(fe(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Ir=e=>e?Bo(e)?pa(e)||e.proxy:Ir(e.parent):null,Fn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ir(e.parent),$root:e=>Ir(e.root),$emit:e=>e.emit,$options:e=>Io(e),$forceUpdate:e=>()=>yo(e.update),$nextTick:e=>bo.bind(e.proxy),$watch:e=>Hl.bind(e)}),Ef={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==te&&q(r,t))return o[t]=1,r[t];if(a!==te&&q(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&q(c,t))return o[t]=3,i[t];if(n!==te&&q(n,t))return o[t]=4,n[t];Er&&(o[t]=0)}}const f=Fn[t];let d,h;if(f)return t==="$attrs"&&we(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==te&&q(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==te&&q(a,t)?(a[t]=n,!0):r!==te&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==te&&q(e,o)||t!==te&&q(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(Fn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Pf=zo();let Of=0;function Sf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Pf,i={uid:Of++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:No(r,a),emitsOptions:ko(r,a),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Nl.bind(null,i),e.ce&&e.ce(i),i}let de=null;const Ft=e=>{de=e,e.scope.on()},gt=()=>{de&&de.scope.off(),de=null};function Bo(e){return e.vnode.shapeFlag&4}let mn=!1;function Rf(e,t=!1){mn=t;const{props:n,children:r}=e.vnode,a=Bo(e);of(e,n,a,t),ff(e,r);const i=a?If(e,t):void 0;return mn=!1,i}function If(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=uo(new Proxy(e.ctx,Ef));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Nf(e):null;Ft(e),$t();const i=at(r,e,0,[e.props,a]);if(Ht(),gt(),Xi(i)){if(i.then(gt,gt),t)return i.then(o=>{Ja(e,o,t)}).catch(o=>{Xn(o,e,0)});e.asyncDep=i}else Ja(e,i,t)}else Wo(e,t)}function Ja(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=go(t)),Wo(e,n)}let Za;function Wo(e,t,n){const r=e.type;if(!e.render){if(!t&&Za&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=Za(a,c)}}e.render=r.render||Pe}Ft(e),$t(),ef(e),Ht(),gt()}function Tf(e){return new Proxy(e.attrs,{get(t,n){return we(e,"get","$attrs"),t[n]}})}function Nf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Tf(e))},slots:e.slots,emit:e.emit,expose:t}}function pa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(go(uo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Fn)return Fn[n](e)}}))}function Mf(e){return B(e)&&e.displayName||e.name}function Lf(e){return B(e)&&"__vccOpts"in e}const oe=(e,t)=>Pl(e,t,mn);function Zn(e,t,n){const r=arguments.length;return r===2?fe(t)&&!H(t)?Rr(t)?xe(e,null,[t]):xe(e,t):xe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),xe(e,t,n))}const Ff="3.2.31",zf="http://www.w3.org/2000/svg",dt=typeof document!="undefined"?document:null,ei=dt&&dt.createElement("template"),jf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?dt.createElementNS(zf,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ei.innerHTML=r?`<svg>${e}</svg>`:e;const s=ei.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Df(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function $f(e,t,n){const r=e.style,a=ce(n);if(n&&!a){for(const i in n)Tr(r,i,n[i]);if(t&&!ce(t))for(const i in t)n[i]==null&&Tr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ti=/\s*!important$/;function Tr(e,t,n){if(H(n))n.forEach(r=>Tr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Hf(e,t);ti.test(n)?e.setProperty(Dt(r),n.replace(ti,""),"important"):e[r]=n}}const ni=["Webkit","Moz","ms"],ur={};function Hf(e,t){const n=ur[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return ur[t]=r;r=qn(r);for(let a=0;a<ni.length;a++){const i=ni[a]+r;if(i in e)return ur[t]=i}return t}const ri="http://www.w3.org/1999/xlink";function Uf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ri,t.slice(6,t.length)):e.setAttributeNS(ri,t,n);else{const i=Fs(t);n==null||i&&!Ki(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Bf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=Ki(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let zn=Date.now,Yo=!1;if(typeof window!="undefined"){zn()>document.createEvent("Event").timeStamp&&(zn=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Yo=!!(e&&Number(e[1])<=53)}let Nr=0;const Wf=Promise.resolve(),Yf=()=>{Nr=0},Kf=()=>Nr||(Wf.then(Yf),Nr=zn());function qf(e,t,n,r){e.addEventListener(t,n,r)}function Vf(e,t,n,r){e.removeEventListener(t,n,r)}function Xf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Gf(t);if(r){const c=i[t]=Qf(r,a);qf(e,s,c,l)}else o&&(Vf(e,s,o,l),i[t]=void 0)}}const ai=/(?:Once|Passive|Capture)$/;function Gf(e){let t;if(ai.test(e)){t={};let n;for(;n=e.match(ai);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Dt(e.slice(2)),t]}function Qf(e,t){const n=r=>{const a=r.timeStamp||zn();(Yo||a>=n.attached-1)&&Oe(Jf(r,n.value),t,5,[r])};return n.value=e,n.attached=Kf(),n}function Jf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ii=/^on[a-z]/,Zf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Df(e,r,a):t==="style"?$f(e,n,r):Wn(t)?Jr(t)||Xf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ec(e,t,r,a))?Bf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Uf(e,t,r,a))};function ec(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ii.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ii.test(t)&&ce(n)?!1:t in e}const tc=pe({patchProp:Zf},jf);let oi;function nc(){return oi||(oi=mf(tc))}const im=(...e)=>{const t=nc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=rc(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function rc(e){return ce(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ko=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ut=e=>Ko?Symbol(e):"_vr_"+e,ac=Ut("rvlm"),si=Ut("rvd"),ga=Ut("r"),qo=Ut("rl"),Mr=Ut("rvl"),Ot=typeof window!="undefined";function ic(e){return e.__esModule||Ko&&e[Symbol.toStringTag]==="Module"}const J=Object.assign;function dr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const nn=()=>{},oc=/\/$/,sc=e=>e.replace(oc,"");function mr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=uc(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function lc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function li(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&zt(t.matched[r],n.matched[a])&&Vo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function zt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!cc(e[n],t[n]))return!1;return!0}function cc(e,t){return Array.isArray(e)?fi(e,t):Array.isArray(t)?fi(t,e):e===t}function fi(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function uc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var hn;(function(e){e.pop="pop",e.push="push"})(hn||(hn={}));var rn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(rn||(rn={}));function dc(e){if(!e)if(Ot){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),sc(e)}const mc=/^[^#]+#/;function hc(e,t){return e.replace(mc,"#")+t}function pc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const er=()=>({left:window.pageXOffset,top:window.pageYOffset});function gc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=pc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ci(e,t){return(history.state?history.state.position-t:-1)+e}const Lr=new Map;function vc(e,t){Lr.set(e,t)}function bc(e){const t=Lr.get(e);return Lr.delete(e),t}let yc=()=>location.protocol+"//"+location.host;function Xo(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),li(l,"")}return li(n,e)+r+a}function xc(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const v=Xo(e,location),A=n.value,M=t.value;let O=0;if(h){if(n.value=v,t.value=h,o&&o===A){o=null;return}O=M?h.position-M.position:0}else r(v);a.forEach(g=>{g(n.value,A,{delta:O,type:hn.pop,direction:O?O>0?rn.forward:rn.back:rn.unknown})})};function l(){o=n.value}function c(h){a.push(h);const v=()=>{const A=a.indexOf(h);A>-1&&a.splice(A,1)};return i.push(v),v}function f(){const{history:h}=window;!h.state||h.replaceState(J({},h.state,{scroll:er()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function ui(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?er():null}}function wc(e){const{history:t,location:n}=window,r={value:Xo(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:yc()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(v){console.error(v),n[f?"replace":"assign"](h)}}function o(l,c){const f=J({},t.state,ui(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=J({},a.value,t.state,{forward:l,scroll:er()});i(f.current,f,!0);const d=J({},ui(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function om(e){e=dc(e);const t=wc(e),n=xc(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=J({location:"",base:e,go:r,createHref:hc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function _c(e){return typeof e=="string"||e&&typeof e=="object"}function Go(e){return typeof e=="string"||typeof e=="symbol"}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qo=Ut("nf");var di;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(di||(di={}));function jt(e,t){return J(new Error,{type:e,[Qo]:!0},t)}function Je(e,t){return e instanceof Error&&Qo in e&&(t==null||!!(e.type&t))}const mi="[^/]+?",Cc={sensitive:!1,strict:!1,start:!0,end:!0},kc=/[.+*?^${}()[\]/\\]/g;function Ac(e,t){const n=J({},Cc,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const h=c[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(kc,"\\$&"),v+=40;else if(h.type===1){const{value:A,repeatable:M,optional:O,regexp:g}=h;i.push({name:A,repeatable:M,optional:O});const _=g||mi;if(_!==mi){v+=10;try{new RegExp(`(${_})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${A}" (${_}): `+D.message)}}let N=M?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(N=O&&c.length<2?`(?:/${N})`:"/"+N),O&&(N+="?"),a+=N,v+=20,O&&(v+=-8),M&&(v+=-20),_===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let h=1;h<f.length;h++){const v=f[h]||"",A=i[h-1];d[A.name]=v&&A.repeatable?v.split("/"):v}return d}function l(c){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const v of h)if(v.type===0)f+=v.value;else if(v.type===1){const{value:A,repeatable:M,optional:O}=v,g=A in c?c[A]:"";if(Array.isArray(g)&&!M)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(g)?g.join("/"):g;if(!_)if(O)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=_}}return f}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Ec(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Pc(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Ec(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const Oc={type:0,value:""},Sc=/[a-zA-Z0-9_]/;function Rc(e){if(!e)return[[]];if(e==="/")return[[Oc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${c}": ${v}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Sc.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function Ic(e,t,n){const r=Ac(Rc(e.path),n),a=J(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Tc(e,t){const n=[],r=new Map;t=pi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,h){const v=!h,A=Mc(f);A.aliasOf=h&&h.record;const M=pi(t,f),O=[A];if("alias"in f){const N=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of N)O.push(J({},A,{components:h?h.record.components:A.components,path:D,aliasOf:h?h.record:A}))}let g,_;for(const N of O){const{path:D}=N;if(d&&D[0]!=="/"){const Y=d.record.path,ne=Y[Y.length-1]==="/"?"":"/";N.path=d.record.path+(D&&ne+D)}if(g=Ic(N,d,M),h?h.alias.push(g):(_=_||g,_!==g&&_.alias.push(g),v&&f.name&&!hi(g)&&o(f.name)),"children"in A){const Y=A.children;for(let ne=0;ne<Y.length;ne++)i(Y[ne],g,h&&h.children[ne])}h=h||g,l(g)}return _?()=>{o(_)}:nn}function o(f){if(Go(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Pc(f,n[d])>=0&&(f.record.path!==n[d].record.path||!Jo(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!hi(f)&&r.set(f.record.name,f)}function c(f,d){let h,v={},A,M;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw jt(1,{location:f});M=h.record.name,v=J(Nc(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params),A=h.stringify(v)}else if("path"in f)A=f.path,h=n.find(_=>_.re.test(A)),h&&(v=h.parse(A),M=h.record.name);else{if(h=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!h)throw jt(1,{location:f,currentLocation:d});M=h.record.name,v=J({},d.params,f.params),A=h.stringify(v)}const O=[];let g=h;for(;g;)O.unshift(g.record),g=g.parent;return{name:M,path:A,params:v,matched:O,meta:Fc(O)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Nc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Mc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Lc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Lc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function hi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Fc(e){return e.reduce((t,n)=>J(t,n.meta),{})}function pi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Jo(e,t){return t.children.some(n=>n===e||Jo(e,n))}const Zo=/#/g,zc=/&/g,jc=/\//g,Dc=/=/g,$c=/\?/g,es=/\+/g,Hc=/%5B/g,Uc=/%5D/g,ts=/%5E/g,Bc=/%60/g,ns=/%7B/g,Wc=/%7C/g,rs=/%7D/g,Yc=/%20/g;function va(e){return encodeURI(""+e).replace(Wc,"|").replace(Hc,"[").replace(Uc,"]")}function Kc(e){return va(e).replace(ns,"{").replace(rs,"}").replace(ts,"^")}function Fr(e){return va(e).replace(es,"%2B").replace(Yc,"+").replace(Zo,"%23").replace(zc,"%26").replace(Bc,"`").replace(ns,"{").replace(rs,"}").replace(ts,"^")}function qc(e){return Fr(e).replace(Dc,"%3D")}function Vc(e){return va(e).replace(Zo,"%23").replace($c,"%3F")}function Xc(e){return e==null?"":Vc(e).replace(jc,"%2F")}function jn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Gc(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(es," "),o=i.indexOf("="),s=jn(o<0?i:i.slice(0,o)),l=o<0?null:jn(i.slice(o+1));if(s in t){let c=t[s];Array.isArray(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function gi(e){let t="";for(let n in e){const r=e[n];if(n=qc(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Fr(i)):[r&&Fr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Qc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function Kt(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function nt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(jt(4,{from:n,to:t})):d instanceof Error?s(d):_c(d)?s(jt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function hr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Jc(s)){const c=(s.__vccOpts||s)[t];c&&a.push(nt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=ic(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&nt(h,n,r,i,o)()}))}}return a}function Jc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vi(e){const t=it(ga),n=it(qo),r=oe(()=>t.resolve(Qt(e.to))),a=oe(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(zt.bind(null,f));if(h>-1)return h;const v=bi(l[c-2]);return c>1&&bi(f)===v&&d[d.length-1].path!==v?d.findIndex(zt.bind(null,l[c-2])):h}),i=oe(()=>a.value>-1&&nu(n.params,r.value.params)),o=oe(()=>a.value>-1&&a.value===n.matched.length-1&&Vo(n.params,r.value.params));function s(l={}){return tu(l)?t[Qt(e.replace)?"replace":"push"](Qt(e.to)).catch(nn):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Zc=vn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vi,setup(e,{slots:t}){const n=gn(vi(e)),{options:r}=it(ga),a=oe(()=>({[yi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Zn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),eu=Zc;function tu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function bi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const yi=(e,t,n)=>e!=null?e:t!=null?t:n,ru=vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=it(Mr),a=oe(()=>e.route||r.value),i=it(si,0),o=oe(()=>a.value.matched[i]);En(si,i+1),En(ac,o),En(Mr,a);const s=_l();return en(()=>[s.value,o.value,e.name],([l,c,f],[d,h,v])=>{c&&(c.instances[f]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!zt(c,h)||!d)&&(c.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=a.value,c=o.value,f=c&&c.components[e.name],d=e.name;if(!f)return xi(n.default,{Component:f,route:l});const h=c.props[e.name],v=h?h===!0?l.params:typeof h=="function"?h(l):h:null,M=Zn(f,J({},v,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(c.instances[d]=null)},ref:s}));return xi(n.default,{Component:M,route:l})||M}}});function xi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const au=ru;function sm(e){const t=Tc(e.routes,e),n=e.parseQuery||Gc,r=e.stringifyQuery||gi,a=e.history,i=Kt(),o=Kt(),s=Kt(),l=Cl(Qe);let c=Qe;Ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=dr.bind(null,b=>""+b),d=dr.bind(null,Xc),h=dr.bind(null,jn);function v(b,T){let P,L;return Go(b)?(P=t.getRecordMatcher(b),L=T):L=b,t.addRoute(L,P)}function A(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function M(){return t.getRoutes().map(b=>b.record)}function O(b){return!!t.getRecordMatcher(b)}function g(b,T){if(T=J({},T||l.value),typeof b=="string"){const U=mr(n,b,T.path),u=t.resolve({path:U.path},T),m=a.createHref(U.fullPath);return J(U,u,{params:h(u.params),hash:jn(U.hash),redirectedFrom:void 0,href:m})}let P;if("path"in b)P=J({},b,{path:mr(n,b.path,T.path).path});else{const U=J({},b.params);for(const u in U)U[u]==null&&delete U[u];P=J({},b,{params:d(b.params)}),T.params=d(T.params)}const L=t.resolve(P,T),G=b.hash||"";L.params=f(h(L.params));const ee=lc(r,J({},b,{hash:Kc(G),path:L.path})),W=a.createHref(ee);return J({fullPath:ee,hash:G,query:r===gi?Qc(b.query):b.query||{}},L,{redirectedFrom:void 0,href:W})}function _(b){return typeof b=="string"?mr(n,b,l.value.path):J({},b)}function N(b,T){if(c!==b)return jt(8,{from:T,to:b})}function D(b){return se(b)}function Y(b){return D(J(_(b),{replace:!0}))}function ne(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:P}=T;let L=typeof P=="function"?P(b):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=_(L):{path:L},L.params={}),J({query:b.query,hash:b.hash,params:b.params},L)}}function se(b,T){const P=c=g(b),L=l.value,G=b.state,ee=b.force,W=b.replace===!0,U=ne(P);if(U)return se(J(_(U),{state:G,force:ee,replace:W}),T||P);const u=P;u.redirectedFrom=T;let m;return!ee&&fc(r,L,P)&&(m=jt(16,{to:u,from:L}),Ct(L,L,!0,!1)),(m?Promise.resolve(m):ue(u,L)).catch(p=>Je(p)?Je(p,2)?p:ve(p):Z(p,u,L)).then(p=>{if(p){if(Je(p,2))return se(J(_(p.to),{state:G,force:ee,replace:W}),T||u)}else p=ze(u,L,!0,W,G);return Xe(u,L,p),p})}function Ce(b,T){const P=N(b,T);return P?Promise.reject(P):Promise.resolve()}function ue(b,T){let P;const[L,G,ee]=iu(b,T);P=hr(L.reverse(),"beforeRouteLeave",b,T);for(const U of L)U.leaveGuards.forEach(u=>{P.push(nt(u,b,T))});const W=Ce.bind(null,b,T);return P.push(W),At(P).then(()=>{P=[];for(const U of i.list())P.push(nt(U,b,T));return P.push(W),At(P)}).then(()=>{P=hr(G,"beforeRouteUpdate",b,T);for(const U of G)U.updateGuards.forEach(u=>{P.push(nt(u,b,T))});return P.push(W),At(P)}).then(()=>{P=[];for(const U of b.matched)if(U.beforeEnter&&!T.matched.includes(U))if(Array.isArray(U.beforeEnter))for(const u of U.beforeEnter)P.push(nt(u,b,T));else P.push(nt(U.beforeEnter,b,T));return P.push(W),At(P)}).then(()=>(b.matched.forEach(U=>U.enterCallbacks={}),P=hr(ee,"beforeRouteEnter",b,T),P.push(W),At(P))).then(()=>{P=[];for(const U of o.list())P.push(nt(U,b,T));return P.push(W),At(P)}).catch(U=>Je(U,8)?U:Promise.reject(U))}function Xe(b,T,P){for(const L of s.list())L(b,T,P)}function ze(b,T,P,L,G){const ee=N(b,T);if(ee)return ee;const W=T===Qe,U=Ot?history.state:{};P&&(L||W?a.replace(b.fullPath,J({scroll:W&&U&&U.scroll},G)):a.push(b.fullPath,G)),l.value=b,Ct(b,T,P,W),ve()}let je;function xt(){je=a.listen((b,T,P)=>{const L=g(b),G=ne(L);if(G){se(J(G,{replace:!0}),L).catch(nn);return}c=L;const ee=l.value;Ot&&vc(ci(ee.fullPath,P.delta),er()),ue(L,ee).catch(W=>Je(W,12)?W:Je(W,2)?(se(W.to,L).then(U=>{Je(U,20)&&!P.delta&&P.type===hn.pop&&a.go(-1,!1)}).catch(nn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),Z(W,L,ee))).then(W=>{W=W||ze(L,ee,!1),W&&(P.delta?a.go(-P.delta,!1):P.type===hn.pop&&Je(W,20)&&a.go(-1,!1)),Xe(L,ee,W)}).catch(nn)})}let wt=Kt(),_t=Kt(),le;function Z(b,T,P){ve(b);const L=_t.list();return L.length?L.forEach(G=>G(b,T,P)):console.error(b),Promise.reject(b)}function X(){return le&&l.value!==Qe?Promise.resolve():new Promise((b,T)=>{wt.add([b,T])})}function ve(b){return le||(le=!b,xt(),wt.list().forEach(([T,P])=>b?P(b):T()),wt.reset()),b}function Ct(b,T,P,L){const{scrollBehavior:G}=e;if(!Ot||!G)return Promise.resolve();const ee=!P&&bc(ci(b.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return bo().then(()=>G(b,T,ee)).then(W=>W&&gc(W)).catch(W=>Z(W,b,T))}const De=b=>a.go(b);let Se;const ke=new Set;return{currentRoute:l,addRoute:v,removeRoute:A,hasRoute:O,getRoutes:M,resolve:g,options:e,push:D,replace:Y,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:_t.add,isReady:X,install(b){const T=this;b.component("RouterLink",eu),b.component("RouterView",au),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(l)}),Ot&&!Se&&l.value===Qe&&(Se=!0,D(a.location).catch(G=>{}));const P={};for(const G in Qe)P[G]=oe(()=>l.value[G]);b.provide(ga,T),b.provide(qo,gn(P)),b.provide(Mr,l);const L=b.unmount;ke.add(b),b.unmount=function(){ke.delete(b),ke.size<1&&(c=Qe,je&&je(),l.value=Qe,Se=!1,le=!1),L()}}}}function At(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function iu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>zt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>zt(c,l))||a.push(l))}return[n,r,a]}/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function wi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wi(Object(n),!0).forEach(function(r){lu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function ou(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function su(e,t,n){return t&&_i(e.prototype,t),n&&_i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function lu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ba(e,t){return cu(e)||du(e,t)||as(e,t)||hu()}function tr(e){return fu(e)||uu(e)||as(e)||mu()}function fu(e){if(Array.isArray(e))return zr(e)}function cu(e){if(Array.isArray(e))return e}function uu(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function du(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function as(e,t){if(!!e){if(typeof e=="string")return zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zr(e,t)}}function zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function mu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ci=function(){},ya={},is={},os=null,ss={mark:Ci,measure:Ci};try{typeof window!="undefined"&&(ya=window),typeof document!="undefined"&&(is=document),typeof MutationObserver!="undefined"&&(os=MutationObserver),typeof performance!="undefined"&&(ss=performance)}catch{}var pu=ya.navigator||{},ki=pu.userAgent,Ai=ki===void 0?"":ki,st=ya,ae=is,Ei=os,kn=ss;st.document;var Ve=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",ls=~Ai.indexOf("MSIE")||~Ai.indexOf("Trident/"),We="___FONT_AWESOME___",jr=16,fs="fa",cs="svg-inline--fa",bt="data-fa-i2svg",Dr="data-fa-pseudo-element",gu="data-fa-pseudo-element-pending",xa="data-prefix",wa="data-icon",Pi="fontawesome-i2svg",vu="async",bu=["HTML","HEAD","STYLE","SCRIPT"],us=function(){try{return!0}catch{return!1}}(),_a={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},$n={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ds={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},yu={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},xu=/fa[srltdbk\-\ ]/,ms="fa-layers-text",wu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,_u={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},hs=[1,2,3,4,5,6,7,8,9,10],Cu=hs.concat([11,12,13,14,15,16,17,18,19,20]),ku=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Au=[].concat(tr(Object.keys($n)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mt.GROUP,mt.SWAP_OPACITY,mt.PRIMARY,mt.SECONDARY]).concat(hs.map(function(e){return"".concat(e,"x")})).concat(Cu.map(function(e){return"w-".concat(e)})),ps=st.FontAwesomeConfig||{};function Eu(e){var t=ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Pu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ae&&typeof ae.querySelector=="function"){var Ou=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ou.forEach(function(e){var t=ba(e,2),n=t[0],r=t[1],a=Pu(Eu(n));a!=null&&(ps[r]=a)})}var Su={familyPrefix:fs,styleDefault:"solid",replacementClass:cs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},an=R(R({},Su),ps);an.autoReplaceSvg||(an.observeMutations=!1);var j={};Object.keys(an).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(n){an[e]=n,On.forEach(function(r){return r(j)})},get:function(){return an[e]}})});st.FontAwesomeConfig=j;var On=[];function Ru(e){return On.push(e),function(){On.splice(On.indexOf(e),1)}}var Ze=jr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Iu(e){if(!(!e||!Ve)){var t=ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ae.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ae.head.insertBefore(t,r),e}}var Tu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pn(){for(var e=12,t="";e-- >0;)t+=Tu[Math.random()*62|0];return t}function Bt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ca(e){return e.classList?Bt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function gs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Nu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(gs(e[n]),'" ')},"").trim()}function nr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ka(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function Mu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Lu(e){var t=e.transform,n=e.width,r=n===void 0?jr:n,a=e.height,i=a===void 0?jr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ls?l+="translate(".concat(t.x/Ze-r/2,"em, ").concat(t.y/Ze-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):l+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),l+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Fu=`:root, :host {
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
}`;function vs(){var e=fs,t=cs,n=j.familyPrefix,r=j.replacementClass,a=Fu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Oi=!1;function pr(){j.autoAddCss&&!Oi&&(Iu(vs()),Oi=!0)}var zu={mixout:function(){return{dom:{css:vs,insertCss:pr}}},hooks:function(){return{beforeDOMElementCreation:function(){pr()},beforeI2svg:function(){pr()}}}},Ye=st||{};Ye[We]||(Ye[We]={});Ye[We].styles||(Ye[We].styles={});Ye[We].hooks||(Ye[We].hooks={});Ye[We].shims||(Ye[We].shims=[]);var Ee=Ye[We],bs=[],ju=function e(){ae.removeEventListener("DOMContentLoaded",e),Hn=1,bs.map(function(t){return t()})},Hn=!1;Ve&&(Hn=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),Hn||ae.addEventListener("DOMContentLoaded",ju));function Du(e){!Ve||(Hn?setTimeout(e,0):bs.push(e))}function bn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?gs(e):"<".concat(t," ").concat(Nu(r),">").concat(i.map(bn).join(""),"</").concat(t,">")}function Si(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $u=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},gr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?$u(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Hu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function $r(e){var t=Hu(e);return t.length===1?t[0].toString(16):null}function Uu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ri(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ri(t);typeof Ee.hooks.addPack=="function"&&!a?Ee.hooks.addPack(e,Ri(t)):Ee.styles[e]=R(R({},Ee.styles[e]||{}),i),e==="fas"&&Hr("fa",t)}var on=Ee.styles,Bu=Ee.shims,Wu=Object.values(ds),Aa=null,ys={},xs={},ws={},_s={},Cs={},Yu=Object.keys(_a);function Ku(e){return~Au.indexOf(e)}function qu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ku(a)?a:null}var ks=function(){var t=function(i){return gr(on,function(o,s,l){return o[l]=gr(s,i,{}),o},{})};ys=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),xs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Cs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in on||j.autoFetchSvg,r=gr(Bu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ws=r.names,_s=r.unicodes,Aa=rr(j.styleDefault)};Ru(function(e){Aa=rr(e.styleDefault)});ks();function Ea(e,t){return(ys[e]||{})[t]}function Vu(e,t){return(xs[e]||{})[t]}function Rt(e,t){return(Cs[e]||{})[t]}function As(e){return ws[e]||{prefix:null,iconName:null}}function Xu(e){var t=_s[e],n=Ea("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function lt(){return Aa}var Pa=function(){return{prefix:null,iconName:null,rest:[]}};function rr(e){var t=_a[e],n=$n[e]||$n[t],r=e in Ee.styles?e:null;return n||r||null}function ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=qu(j.familyPrefix,s);if(on[s]?(s=Wu.includes(s)?yu[s]:s,a=s,o.prefix=s):Yu.indexOf(s)>-1?(a=s,o.prefix=rr(s)):l?o.iconName=l:s!==j.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?As(o.iconName):{},f=Rt(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||f||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!on.far&&on.fas&&!j.autoFetchSvg&&(o.prefix="fas")}return o},Pa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=lt()||"fas"),i}var Gu=function(){function e(){ou(this,e),this.definitions={}}return su(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),Hr(s,o[s]);var l=ds[s];l&&Hr(l,o[s]),ks()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),Ii=[],It={},Lt={},Qu=Object.keys(Lt);function Ju(e,t){var n=t.mixoutsTo;return Ii=e,It={},Object.keys(Lt).forEach(function(r){Qu.indexOf(r)===-1&&delete Lt[r]}),Ii.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Dn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){It[o]||(It[o]=[]),It[o].push(i[o])})}r.provides&&r.provides(Lt)}),n}function Ur(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=It[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function yt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=It[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lt[e]?Lt[e].apply(null,t):void 0}function Br(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||lt();if(!!t)return t=Rt(n,t)||t,Si(Es.definitions,n,t)||Si(Ee.styles,n,t)}var Es=new Gu,Zu=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,yt("noAuto")},ed={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ve?(yt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,Du(function(){nd({autoReplaceSvgRoot:n}),yt("watch",t)})}},td={icon:function(t){if(t===null)return null;if(Dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Rt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=rr(t[0]);return{prefix:r,iconName:Rt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(j.familyPrefix,"-"))>-1||t.match(xu))){var a=ar(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||lt(),iconName:Rt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=lt();return{prefix:i,iconName:Rt(i,t)||t}}}},_e={noAuto:Zu,config:j,dom:ed,parse:td,library:Es,findIconDefinition:Br,toHtml:bn},nd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys(Ee.styles).length>0||j.autoFetchSvg)&&Ve&&j.autoReplaceSvg&&_e.dom.i2svg({node:r})};function ir(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return bn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ve){var r=ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function rd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ka(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=nr(R(R({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ad(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(j.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function Oa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,v=h===void 0?!1:h,A=r.found?r:n,M=A.width,O=A.height,g=a==="fak",_=[j.replacementClass,i?"".concat(j.familyPrefix,"-").concat(i):""].filter(function(ue){return d.classes.indexOf(ue)===-1}).filter(function(ue){return ue!==""||!!ue}).concat(d.classes).join(" "),N={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(O)})},D=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(M/O*16*.0625,"em")}:{};v&&(N.attributes[bt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(f||pn())},children:[l]}),delete N.attributes.title);var Y=R(R({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:R(R({},D),d.styles)}),ne=r.found&&n.found?Ke("generateAbstractMask",Y)||{children:[],attributes:{}}:Ke("generateAbstractIcon",Y)||{children:[],attributes:{}},se=ne.children,Ce=ne.attributes;return Y.children=se,Y.attributes=Ce,s?ad(Y):rd(Y)}function Ti(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[bt]="");var f=R({},o.styles);ka(a)&&(f.transform=Lu({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=nr(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function id(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=nr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vr=Ee.styles;function Wr(e){var t=e[0],n=e[1],r=e.slice(4),a=ba(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var od={found:!1,width:512,height:512};function sd(e,t){!us&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Yr(e,t){var n=t;return t==="fa"&&j.styleDefault!==null&&(t=lt()),new Promise(function(r,a){if(Ke("missingIconAbstract"),n==="fa"){var i=As(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&vr[t]&&vr[t][e]){var o=vr[t][e];return r(Wr(o))}sd(e,t),r(R(R({},od),{},{icon:j.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var Ni=function(){},Kr=j.measurePerformance&&kn&&kn.mark&&kn.measure?kn:{mark:Ni,measure:Ni},Xt='FA "6.1.0"',ld=function(t){return Kr.mark("".concat(Xt," ").concat(t," begins")),function(){return Ps(t)}},Ps=function(t){Kr.mark("".concat(Xt," ").concat(t," ends")),Kr.measure("".concat(Xt," ").concat(t),"".concat(Xt," ").concat(t," begins"),"".concat(Xt," ").concat(t," ends"))},Sa={begin:ld,end:Ps},Sn=function(){};function Mi(e){var t=e.getAttribute?e.getAttribute(bt):null;return typeof t=="string"}function fd(e){var t=e.getAttribute?e.getAttribute(xa):null,n=e.getAttribute?e.getAttribute(wa):null;return t&&n}function cd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function ud(){if(j.autoReplaceSvg===!0)return Rn.replace;var e=Rn[j.autoReplaceSvg];return e||Rn.replace}function dd(e){return ae.createElementNS("http://www.w3.org/2000/svg",e)}function md(e){return ae.createElement(e)}function Os(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?dd:md:n;if(typeof e=="string")return ae.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Os(o,{ceFn:r}))}),a}function hd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Os(a),n)}),n.getAttribute(bt)===null&&j.keepOriginalSource){var r=ae.createComment(hd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ca(n).indexOf(j.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(j.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===j.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return bn(s)}).join(`
`);n.setAttribute(bt,""),n.innerHTML=o}};function Li(e){e()}function Ss(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=Li;j.mutateApproach===vu&&(r=st.requestAnimationFrame||Li),r(function(){var a=ud(),i=Sa.begin("mutate");e.map(a),i(),n()})}}var Ra=!1;function Rs(){Ra=!0}function qr(){Ra=!1}var Un=null;function Fi(e){if(!!Ei&&!!j.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,o=i===void 0?Sn:i,s=e.observeMutationsRoot,l=s===void 0?ae:s;Un=new Ei(function(c){if(!Ra){var f=lt();Bt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Mi(d.addedNodes[0])&&(j.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&j.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Mi(d.target)&&~ku.indexOf(d.attributeName))if(d.attributeName==="class"&&fd(d.target)){var h=ar(Ca(d.target)),v=h.prefix,A=h.iconName;d.target.setAttribute(xa,v||f),A&&d.target.setAttribute(wa,A)}else cd(d.target)&&a(d.target)})}}),Ve&&Un.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pd(){!Un||Un.disconnect()}function gd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function vd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ar(Ca(e));return a.prefix||(a.prefix=lt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Vu(a.prefix,e.innerText)||Ea(a.prefix,$r(e.innerText))),a}function bd(e){var t=Bt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return j.autoA11y&&(n?t["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function yd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vd(e),r=n.iconName,a=n.prefix,i=n.rest,o=bd(e),s=Ur("parseNodeAttributes",{},e),l=t.styleParser?gd(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var xd=Ee.styles;function Is(e){var t=j.autoReplaceSvg==="nest"?zi(e,{styleParser:!1}):zi(e);return~t.extra.classes.indexOf(ms)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ve)return Promise.resolve();var n=ae.documentElement.classList,r=function(d){return n.add("".concat(Pi,"-").concat(d))},a=function(d){return n.remove("".concat(Pi,"-").concat(d))},i=j.autoFetchSvg?Object.keys(_a):Object.keys(xd),o=[".".concat(ms,":not([").concat(bt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(bt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Bt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Sa.begin("onTree"),c=s.reduce(function(f,d){try{var h=Is(d);h&&f.push(h)}catch(v){us||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){Ss(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),d(h)})})}function wd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Is(e).then(function(n){n&&Ss([n],t)})}function _d(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Br(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Br(a||{})),e(r,R(R({},n),{},{mask:a}))}}var Cd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,h=d===void 0?null:d,v=n.titleId,A=v===void 0?null:v,M=n.classes,O=M===void 0?[]:M,g=n.attributes,_=g===void 0?{}:g,N=n.styles,D=N===void 0?{}:N;if(!!t){var Y=t.prefix,ne=t.iconName,se=t.icon;return ir(R({type:"icon"},t),function(){return yt("beforeDOMElementCreation",{iconDefinition:t,params:n}),j.autoA11y&&(h?_["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(A||pn()):(_["aria-hidden"]="true",_.focusable="false")),Oa({icons:{main:Wr(se),mask:l?Wr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ne,transform:R(R({},Le),a),symbol:o,title:h,maskId:f,titleId:A,extra:{attributes:_,styles:D,classes:O}})})}},kd={mixout:function(){return{icon:_d(Cd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ji,n.nodeCallback=wd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ae:r,i=n.callback,o=i===void 0?function(){}:i;return ji(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(v,A){Promise.all([Yr(a,s),f.iconName?Yr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var O=ba(M,2),g=O[0],_=O[1];v([n,Oa({icons:{main:g,mask:_},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=nr(s);l.length>0&&(a.style=l);var c;return ka(o)&&(c=Ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ad={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ir({type:"layer"},function(){yt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(j.familyPrefix,"-layers")].concat(tr(i)).join(" ")},children:o}]})}}}},Ed={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return ir({type:"counter",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),id({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(j.familyPrefix,"-layers-counter")].concat(tr(s))}})})}}}},Pd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,h=r.styles,v=h===void 0?{}:h;return ir({type:"text",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),Ti({content:n,transform:R(R({},Le),i),title:s,extra:{attributes:d,styles:v,classes:["".concat(j.familyPrefix,"-layers-text")].concat(tr(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ls){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return j.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ti({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Od=new RegExp('"',"ug"),Di=[1105920,1112319];function Sd(e){var t=e.replace(Od,""),n=Uu(t,0),r=n>=Di[0]&&n<=Di[1],a=t.length===2?t[0]===t[1]:!1;return{value:$r(a?t[0]:t),isSecondary:r||a}}function $i(e,t){var n="".concat(gu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Bt(e.children),o=i.filter(function(ne){return ne.getAttribute(Dr)===t})[0],s=st.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(wu),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?$n[l[2].toLowerCase()]:_u[c],v=Sd(d),A=v.value,M=v.isSecondary,O=l[0].startsWith("FontAwesome"),g=Ea(h,A),_=g;if(O){var N=Xu(A);N.iconName&&N.prefix&&(g=N.iconName,h=N.prefix)}if(g&&!M&&(!o||o.getAttribute(xa)!==h||o.getAttribute(wa)!==_)){e.setAttribute(n,_),o&&e.removeChild(o);var D=yd(),Y=D.extra;Y.attributes[Dr]=t,Yr(g,h).then(function(ne){var se=Oa(R(R({},D),{},{icons:{main:ne,mask:Pa()},prefix:h,iconName:_,extra:Y,watchable:!0})),Ce=ae.createElement("svg");t==="::before"?e.insertBefore(Ce,e.firstChild):e.appendChild(Ce),Ce.outerHTML=se.map(function(ue){return bn(ue)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Rd(e){return Promise.all([$i(e,"::before"),$i(e,"::after")])}function Id(e){return e.parentNode!==document.head&&!~bu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Hi(e){if(!!Ve)return new Promise(function(t,n){var r=Bt(e.querySelectorAll("*")).filter(Id).map(Rd),a=Sa.begin("searchPseudoElements");Rs(),Promise.all(r).then(function(){a(),qr(),t()}).catch(function(){a(),qr(),n()})})}var Td={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Hi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ae:r;j.searchPseudoElements&&Hi(a)}}},Ui=!1,Nd={mixout:function(){return{dom:{unwatch:function(){Rs(),Ui=!0}}}},hooks:function(){return{bootstrap:function(){Fi(Ur("mutationObserverCallbacks",{}))},noAuto:function(){pd()},watch:function(n){var r=n.observeMutationsRoot;Ui?qr():Fi(Ur("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Md={mixout:function(){return{parse:{transform:function(n){return Bi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Bi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:h};return{tag:"g",attributes:R({},v.outer),children:[{tag:"g",attributes:R({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),v.path)}]}]}}}},br={x:0,y:0,width:"100%",height:"100%"};function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ld(e){return e.tag==="g"?e.children:[e]}var Fd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ar(a.split(" ").map(function(o){return o.trim()})):Pa();return i.prefix||(i.prefix=lt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,h=o.icon,v=Mu({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:R(R({},br),{},{fill:"white"})},M=f.children?{children:f.children.map(Wi)}:{},O={tag:"g",attributes:R({},v.inner),children:[Wi(R({tag:f.tag,attributes:R(R({},f.attributes),v.path)},M))]},g={tag:"g",attributes:R({},v.outer),children:[O]},_="mask-".concat(s||pn()),N="clip-".concat(s||pn()),D={tag:"mask",attributes:R(R({},br),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,g]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Ld(h)},D]};return r.push(Y,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(_,")")},br)}),{children:r,attributes:a}}}},zd={provides:function(t){var n=!1;st.matchMedia&&(n=st.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Dd=[zu,kd,Ad,Ed,Pd,Td,Nd,Md,Fd,zd,jd];Ju(Dd,{mixoutsTo:_e});_e.noAuto;var Ts=_e.config,lm=_e.library;_e.dom;var Ns=_e.parse;_e.findIconDefinition;_e.toHtml;var $d=_e.icon;_e.layer;var Hd=_e.text;_e.counter;/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var fm={prefix:"fas",iconName:"bookmark",icon:[384,512,[61591,128278],"f02e","M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"]},cm={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"]},um={prefix:"fas",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"]},Ud={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"]},dm=Ud,mm={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},hm={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"]},pm={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"]},gm={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"]};/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var vm={prefix:"far",iconName:"bookmark",icon:[384,512,[61591,128278],"f02e","M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"]},bm={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},ym={prefix:"far",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"]},xm={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]},wm={prefix:"far",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z"]},Bd=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Wd(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Yd=Wd(function(e){(function(t){var n=function(g,_,N){if(!c(_)||d(_)||h(_)||v(_)||l(_))return _;var D,Y=0,ne=0;if(f(_))for(D=[],ne=_.length;Y<ne;Y++)D.push(n(g,_[Y],N));else{D={};for(var se in _)Object.prototype.hasOwnProperty.call(_,se)&&(D[g(se,N)]=n(g,_[se],N))}return D},r=function(g,_){_=_||{};var N=_.separator||"_",D=_.split||/(?=[A-Z])/;return g.split(D).join(N)},a=function(g){return A(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(_,N){return N?N.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var _=a(g);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(g,_){return r(g,_).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},f=function(g){return s.call(g)=="[object Array]"},d=function(g){return s.call(g)=="[object Date]"},h=function(g){return s.call(g)=="[object RegExp]"},v=function(g){return s.call(g)=="[object Boolean]"},A=function(g){return g=g-0,g===g},M=function(g,_){var N=_&&"process"in _?_.process:_;return typeof N!="function"?g:function(D,Y){return N(D,g,Y)}},O={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,_){return n(M(a,_),g)},decamelizeKeys:function(g,_){return n(M(o,_),g,_)},pascalizeKeys:function(g,_){return n(M(i,_),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=O:t.humps=O})(Bd)}),Kd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Bn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qd=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Vr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Vd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Yd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Xd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ia(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=Xd(f);break;case"style":l.style=Vd(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=qd(n,["class","style"]);return Zn(e.tag,Bn({},t,{class:a.class,style:Bn({},a.style,o)},a.attrs,s),r)}var Ms=!1;try{Ms=!0}catch{}function Gd(){if(!Ms&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function sn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Gt({},e,t):{}}function Qd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Gt(t,"fa-"+e.size,e.size!==null),Gt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Gt(t,"fa-pull-"+e.pull,e.pull!==null),Gt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Yi(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Kd(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var _m=vn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=oe(function(){return Yi(t.icon)}),i=oe(function(){return sn("classes",Qd(t))}),o=oe(function(){return sn("transform",typeof t.transform=="string"?Ns.transform(t.transform):t.transform)}),s=oe(function(){return sn("mask",Yi(t.mask))}),l=oe(function(){return $d(a.value,Bn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});en(l,function(f){if(!f)return Gd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=oe(function(){return l.value?Ia(l.value.abstract[0],{},r):null});return function(){return c.value}}});vn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Ts.familyPrefix,i=oe(function(){return[a+"-layers"].concat(Vr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return Zn("div",{class:i.value},r.default?r.default():[])}}});vn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Ts.familyPrefix,i=oe(function(){return sn("classes",[].concat(Vr(t.counter?[a+"-layers-counter"]:[]),Vr(t.position?[a+"-layers-"+t.position]:[])))}),o=oe(function(){return sn("transform",typeof t.transform=="string"?Ns.transform(t.transform):t.transform)}),s=oe(function(){var c=Hd(t.value.toString(),Bn({},o.value,i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=oe(function(){return Ia(s.value,{},r)});return function(){return l.value}}});export{fm as A,dm as B,gm as C,pm as D,cm as E,He as F,bm as G,im as H,_m as I,Zd as J,em as K,au as R,xe as a,Uo as b,nm as c,vn as d,tm as e,wf as f,rm as g,Kl as h,So as i,am as j,sm as k,om as l,lm as m,Qr as n,yf as o,mm as p,xm as q,_l as r,um as s,Jd as t,Qt as u,ym as v,Ml as w,hm as x,wm as y,vm as z};
