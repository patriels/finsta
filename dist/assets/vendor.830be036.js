function Tr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Ho="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yo=Tr(Ho);function mi(e){return!!e||e===""}function Mr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?Vo(r):Mr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(Q(e))return e}}const Wo=/;(?![^(]*\))/g,Ko=/:(.+)/;function Vo(e){const t={};return e.split(Wo).forEach(n=>{if(n){const r=n.split(Ko);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Pr(e){let t="";if(ne(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Pr(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const uu=e=>ne(e)?e:e==null?"":R(e)||Q(e)&&(e.toString===gi||!z(e.toString))?JSON.stringify(e,pi,2):String(e),pi=(e,t)=>t&&t.__v_isRef?pi(e,t.value):Pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:hi(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!R(t)&&!bi(t)?String(t):t,K={},Mt=[],ke=()=>{},Xo=()=>!1,qo=/^on[^a-z]/,Nn=e=>qo.test(e),Ir=e=>e.startsWith("onUpdate:"),ue=Object.assign,Nr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Jo=Object.prototype.hasOwnProperty,B=(e,t)=>Jo.call(e,t),R=Array.isArray,Pt=e=>Ln(e)==="[object Map]",hi=e=>Ln(e)==="[object Set]",z=e=>typeof e=="function",ne=e=>typeof e=="string",Lr=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",vi=e=>Q(e)&&z(e.then)&&z(e.catch),gi=Object.prototype.toString,Ln=e=>gi.call(e),Go=e=>Ln(e).slice(8,-1),bi=e=>Ln(e)==="[object Object]",Fr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vn=Tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zo=/-(\w)/g,Re=Fn(e=>e.replace(Zo,(t,n)=>n?n.toUpperCase():"")),Qo=/\B([A-Z])/g,Rt=Fn(e=>e.replace(Qo,"-$1").toLowerCase()),Rn=Fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Kn=Fn(e=>e?`on${Rn(e)}`:""),en=(e,t)=>!Object.is(e,t),Vn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},wn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},es=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ha;const ts=()=>ha||(ha=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let je;class ns{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&je&&(this.parent=je,this.index=(je.scopes||(je.scopes=[])).push(this)-1)}run(t){if(this.active)try{return je=this,t()}finally{je=this.parent}}on(){je=this}off(){je=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function rs(e,t=je){t&&t.active&&t.effects.push(e)}const Rr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},yi=e=>(e.w&it)>0,xi=e=>(e.n&it)>0,as=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=it},is=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];yi(a)&&!xi(a)?a.delete(e):t[n++]=a,a.w&=~it,a.n&=~it}t.length=n}},tr=new WeakMap;let Yt=0,it=1;const nr=30;let Ne;const pt=Symbol(""),rr=Symbol("");class zr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rs(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=nt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,nt=!0,it=1<<++Yt,Yt<=nr?as(this):va(this),this.fn()}finally{Yt<=nr&&is(this),it=1<<--Yt,Ne=this.parent,nt=n,this.parent=void 0}}stop(){this.active&&(va(this),this.onStop&&this.onStop(),this.active=!1)}}function va(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let nt=!0;const wi=[];function zt(){wi.push(nt),nt=!1}function Dt(){const e=wi.pop();nt=e===void 0?!0:e}function ge(e,t,n){if(nt&&Ne){let r=tr.get(e);r||tr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Rr()),_i(a)}}function _i(e,t){let n=!1;Yt<=nr?xi(e)||(e.n|=it,n=!yi(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function He(e,t,n,r,a,i){const o=tr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Fr(n)&&s.push(o.get("length")):(s.push(o.get(pt)),Pt(e)&&s.push(o.get(rr)));break;case"delete":R(e)||(s.push(o.get(pt)),Pt(e)&&s.push(o.get(rr)));break;case"set":Pt(e)&&s.push(o.get(pt));break}if(s.length===1)s[0]&&ar(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);ar(Rr(l))}}function ar(e,t){for(const n of R(e)?e:[...e])(n!==Ne||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const os=Tr("__proto__,__v_isRef,__isVue"),Ci=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Lr)),ss=Dr(),ls=Dr(!1,!0),fs=Dr(!0),ga=cs();function cs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=$(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map($)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){zt();const r=$(this)[t].apply(this,n);return Dt(),r}}),e}function Dr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ss:Ei:t?Oi:Si).get(r))return r;const o=R(r);if(!e&&o&&B(ga,a))return Reflect.get(ga,a,i);const s=Reflect.get(r,a,i);return(Lr(a)?Ci.has(a):os(a))||(e||ge(r,"get",a),t)?s:ae(s)?!o||!Fr(a)?s.value:s:Q(s)?e?Ti(s):rt(s):s}}const us=ki(),ds=ki(!0);function ki(e=!1){return function(n,r,a,i){let o=n[r];if(tn(o)&&ae(o)&&!ae(a))return!1;if(!e&&!tn(a)&&(Mi(a)||(a=$(a),o=$(o)),!R(n)&&ae(o)&&!ae(a)))return o.value=a,!0;const s=R(n)&&Fr(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,a,i);return n===$(i)&&(s?en(a,o)&&He(n,"set",r,a):He(n,"add",r,a)),l}}function ms(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&He(e,"delete",t,void 0),r}function ps(e,t){const n=Reflect.has(e,t);return(!Lr(t)||!Ci.has(t))&&ge(e,"has",t),n}function hs(e){return ge(e,"iterate",R(e)?"length":pt),Reflect.ownKeys(e)}const Ai={get:ss,set:us,deleteProperty:ms,has:ps,ownKeys:hs},vs={get:fs,set(e,t){return!0},deleteProperty(e,t){return!0}},gs=ue({},Ai,{get:ls,set:ds}),jr=e=>e,zn=e=>Reflect.getPrototypeOf(e);function cn(e,t,n=!1,r=!1){e=e.__v_raw;const a=$(e),i=$(t);t!==i&&!n&&ge(a,"get",t),!n&&ge(a,"get",i);const{has:o}=zn(a),s=r?jr:n?$r:nn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function un(e,t=!1){const n=this.__v_raw,r=$(n),a=$(e);return e!==a&&!t&&ge(r,"has",e),!t&&ge(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function dn(e,t=!1){return e=e.__v_raw,!t&&ge($(e),"iterate",pt),Reflect.get(e,"size",e)}function ba(e){e=$(e);const t=$(this);return zn(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function ya(e,t){t=$(t);const n=$(this),{has:r,get:a}=zn(n);let i=r.call(n,e);i||(e=$(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?en(t,o)&&He(n,"set",e,t):He(n,"add",e,t),this}function xa(e){const t=$(this),{has:n,get:r}=zn(t);let a=n.call(t,e);a||(e=$(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&He(t,"delete",e,void 0),i}function wa(){const e=$(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=$(o),l=t?jr:e?$r:nn;return!e&&ge(s,"iterate",pt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function pn(e,t,n){return function(...r){const a=this.__v_raw,i=$(a),o=Pt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?jr:t?$r:nn;return!t&&ge(i,"iterate",l?rr:pt),{next(){const{value:p,done:b}=c.next();return b?{value:p,done:b}:{value:s?[d(p[0]),d(p[1])]:d(p),done:b}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:this}}function bs(){const e={get(i){return cn(this,i)},get size(){return dn(this)},has:un,add:ba,set:ya,delete:xa,clear:wa,forEach:mn(!1,!1)},t={get(i){return cn(this,i,!1,!0)},get size(){return dn(this)},has:un,add:ba,set:ya,delete:xa,clear:wa,forEach:mn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:mn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=pn(i,!1,!1),n[i]=pn(i,!0,!1),t[i]=pn(i,!1,!0),r[i]=pn(i,!0,!0)}),[e,n,t,r]}const[ys,xs,ws,_s]=bs();function Br(e,t){const n=t?e?_s:ws:e?xs:ys;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const Cs={get:Br(!1,!1)},ks={get:Br(!1,!0)},As={get:Br(!0,!1)},Si=new WeakMap,Oi=new WeakMap,Ei=new WeakMap,Ss=new WeakMap;function Os(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Es(e){return e.__v_skip||!Object.isExtensible(e)?0:Os(Go(e))}function rt(e){return tn(e)?e:Ur(e,!1,Ai,Cs,Si)}function Ts(e){return Ur(e,!1,gs,ks,Oi)}function Ti(e){return Ur(e,!0,vs,As,Ei)}function Ur(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Es(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function It(e){return tn(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function tn(e){return!!(e&&e.__v_isReadonly)}function Mi(e){return!!(e&&e.__v_isShallow)}function Pi(e){return It(e)||tn(e)}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function Ii(e){return wn(e,"__v_skip",!0),e}const nn=e=>Q(e)?rt(e):e,$r=e=>Q(e)?Ti(e):e;function Ni(e){nt&&Ne&&(e=$(e),_i(e.dep||(e.dep=Rr())))}function Li(e,t){e=$(e),e.dep&&ar(e.dep)}function ae(e){return!!(e&&e.__v_isRef===!0)}function W(e){return Ms(e,!1)}function Ms(e,t){return ae(e)?e:new Ps(e,t)}class Ps{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:$(t),this._value=n?t:nn(t)}get value(){return Ni(this),this._value}set value(t){t=this.__v_isShallow?t:$(t),en(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:nn(t),Li(this))}}function Is(e){return ae(e)?e.value:e}const Ns={get:(e,t,n)=>Is(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ae(a)&&!ae(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Fi(e){return It(e)?e:new Proxy(e,Ns)}class Ls{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new zr(t,()=>{this._dirty||(this._dirty=!0,Li(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=$(this);return Ni(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Fs(e,t,n=!1){let r,a;const i=z(e);return i?(r=e,a=ke):(r=e.get,a=e.set),new Ls(r,a,i||!a,n)}Promise.resolve();function at(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Dn(i,t,n)}return a}function Ae(e,t,n,r){if(z(e)){const i=at(e,t,n,r);return i&&vi(i)&&i.catch(o=>{Dn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ae(e[i],t,n,r));return a}function Dn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){at(l,null,10,[e,o,s]);return}}Rs(e,n,a,r)}function Rs(e,t,n,r=!0){console.error(e)}let _n=!1,ir=!1;const he=[];let $e=0;const Xt=[];let Wt=null,At=0;const qt=[];let et=null,St=0;const Ri=Promise.resolve();let Hr=null,or=null;function zi(e){const t=Hr||Ri;return e?t.then(this?e.bind(this):e):t}function zs(e){let t=$e+1,n=he.length;for(;t<n;){const r=t+n>>>1;rn(he[r])<e?t=r+1:n=r}return t}function Di(e){(!he.length||!he.includes(e,_n&&e.allowRecurse?$e+1:$e))&&e!==or&&(e.id==null?he.push(e):he.splice(zs(e.id),0,e),ji())}function ji(){!_n&&!ir&&(ir=!0,Hr=Ri.then($i))}function Ds(e){const t=he.indexOf(e);t>$e&&he.splice(t,1)}function Bi(e,t,n,r){R(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),ji()}function js(e){Bi(e,Wt,Xt,At)}function Bs(e){Bi(e,et,qt,St)}function Yr(e,t=null){if(Xt.length){for(or=t,Wt=[...new Set(Xt)],Xt.length=0,At=0;At<Wt.length;At++)Wt[At]();Wt=null,At=0,or=null,Yr(e,t)}}function Ui(e){if(qt.length){const t=[...new Set(qt)];if(qt.length=0,et){et.push(...t);return}for(et=t,et.sort((n,r)=>rn(n)-rn(r)),St=0;St<et.length;St++)et[St]();et=null,St=0}}const rn=e=>e.id==null?1/0:e.id;function $i(e){ir=!1,_n=!0,Yr(e),he.sort((n,r)=>rn(n)-rn(r));const t=ke;try{for($e=0;$e<he.length;$e++){const n=he[$e];n&&n.active!==!1&&at(n,null,14)}}finally{$e=0,he.length=0,Ui(),_n=!1,Hr=null,(he.length||Xt.length||qt.length)&&$i(e)}}function Us(e,t,...n){const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:b}=r[d]||K;b?a=n.map(A=>A.trim()):p&&(a=n.map(es))}let s,l=r[s=Kn(t)]||r[s=Kn(Re(t))];!l&&i&&(l=r[s=Kn(Rt(t))]),l&&Ae(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ae(c,e,6,a)}}function Hi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!z(e)){const l=c=>{const d=Hi(c,t,!0);d&&(s=!0,ue(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ue(o,i),r.set(e,o),o)}function Wr(e,t){return!e||!Nn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Rt(t))||B(e,t))}let Le=null,Yi=null;function Cn(e){const t=Le;return Le=e,Yi=e&&e.type.__scopeId||null,t}function $s(e,t=Le,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Pa(-1);const i=Cn(t),o=e(...a);return Cn(i),r._d&&Pa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Xn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:p,data:b,setupState:A,ctx:k,inheritAttrs:I}=e;let N,C;const S=Cn(e);try{if(n.shapeFlag&4){const D=a||r;N=Ie(d.call(D,D,p,i,A,b,k)),C=l}else{const D=t;N=Ie(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),C=t.props?l:Hs(l)}}catch(D){Jt.length=0,Dn(D,e,1),N=ve(gt)}let L=N;if(C&&I!==!1){const D=Object.keys(C),{shapeFlag:U}=L;D.length&&U&7&&(o&&D.some(Ir)&&(C=Ys(C,o)),L=an(L,C))}return n.dirs&&(L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),N=L,Cn(S),N}const Hs=e=>{let t;for(const n in e)(n==="class"||n==="style"||Nn(n))&&((t||(t={}))[n]=e[n]);return t},Ys=(e,t)=>{const n={};for(const r in e)(!Ir(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ws(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_a(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const b=d[p];if(o[b]!==r[b]&&!Wr(c,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?_a(r,o,c):!0:!!o;return!1}function _a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Wr(n,i))return!0}return!1}function Ks({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Vs=e=>e.__isSuspense;function Xs(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Bs(e)}function Be(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function ie(e,t,n=!1){const r=re||Le;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&z(t)?t.call(r.proxy):t}}function qs(e,t){return Kr(e,null,t)}const Ca={};function Nt(e,t,n){return Kr(e,t,n)}function Kr(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=re;let l,c=!1,d=!1;if(ae(e)?(l=()=>e.value,c=Mi(e)):It(e)?(l=()=>e,r=!0):R(e)?(d=!0,c=e.some(It),l=()=>e.map(C=>{if(ae(C))return C.value;if(It(C))return Ot(C);if(z(C))return at(C,s,2)})):z(e)?t?l=()=>at(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return p&&p(),Ae(e,s,3,[b])}:l=ke,t&&r){const C=l;l=()=>Ot(C())}let p,b=C=>{p=N.onStop=()=>{at(C,s,4)}};if(on)return b=ke,t?n&&Ae(t,s,3,[l(),d?[]:void 0,b]):l(),ke;let A=d?[]:Ca;const k=()=>{if(!!N.active)if(t){const C=N.run();(r||c||(d?C.some((S,L)=>en(S,A[L])):en(C,A)))&&(p&&p(),Ae(t,s,3,[C,A===Ca?void 0:A,b]),A=C)}else N.run()};k.allowRecurse=!!t;let I;a==="sync"?I=k:a==="post"?I=()=>me(k,s&&s.suspense):I=()=>{!s||s.isMounted?js(k):k()};const N=new zr(l,I);return t?n?k():A=N.run():a==="post"?me(N.run.bind(N),s&&s.suspense):N.run(),()=>{N.stop(),s&&s.scope&&Nr(s.scope.effects,N)}}function Js(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?Wi(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=re;Ft(this);const s=Kr(a,i.bind(r),n);return o?Ft(o):vt(),s}function Wi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ot(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ae(e))Ot(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)Ot(e[n],t);else if(hi(e)||Pt(e))e.forEach(n=>{Ot(n,t)});else if(bi(e))for(const n in e)Ot(e[n],t);return e}function ln(e){return z(e)?{setup:e,name:e.name}:e}const sr=e=>!!e.type.__asyncLoader,Ki=e=>e.type.__isKeepAlive;function Gs(e,t){Vi(e,"a",t)}function Zs(e,t){Vi(e,"da",t)}function Vi(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(jn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ki(a.parent.vnode)&&Qs(r,t,n,a),a=a.parent}}function Qs(e,t,n,r){const a=jn(t,e,r,!0);Vr(()=>{Nr(r[t],a)},n)}function jn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;zt(),Ft(n);const s=Ae(t,n,e,o);return vt(),Dt(),s});return r?a.unshift(i):a.push(i),i}}const Ve=e=>(t,n=re)=>(!on||e==="sp")&&jn(e,t,n),el=Ve("bm"),Xi=Ve("m"),tl=Ve("bu"),nl=Ve("u"),rl=Ve("bum"),Vr=Ve("um"),al=Ve("sp"),il=Ve("rtg"),ol=Ve("rtc");function sl(e,t=re){jn("ec",e,t)}let lr=!0;function ll(e){const t=Ji(e),n=e.proxy,r=e.ctx;lr=!1,t.beforeCreate&&ka(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:p,mounted:b,beforeUpdate:A,updated:k,activated:I,deactivated:N,beforeDestroy:C,beforeUnmount:S,destroyed:L,unmounted:D,render:U,renderTracked:ee,renderTriggered:se,errorCaptured:le,serverPrefetch:G,expose:Se,inheritAttrs:Z,components:Oe,directives:ze,filters:Ee}=t;if(c&&fl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const q in o){const H=o[q];z(H)&&(r[q]=H.bind(n))}if(a){const q=a.call(n,n);Q(q)&&(e.data=rt(q))}if(lr=!0,i)for(const q in i){const H=i[q],ye=z(H)?H.bind(n,n):z(H.get)?H.get.bind(n,n):ke,wt=!z(H)&&z(H.set)?H.set.bind(n):ke,qe=ce({get:ye,set:wt});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>qe.value,set:De=>qe.value=De})}if(s)for(const q in s)qi(s[q],r,n,q);if(l){const q=z(l)?l.call(n):l;Reflect.ownKeys(q).forEach(H=>{Be(H,q[H])})}d&&ka(d,e,"c");function te(q,H){R(H)?H.forEach(ye=>q(ye.bind(n))):H&&q(H.bind(n))}if(te(el,p),te(Xi,b),te(tl,A),te(nl,k),te(Gs,I),te(Zs,N),te(sl,le),te(ol,ee),te(il,se),te(rl,S),te(Vr,D),te(al,G),R(Se))if(Se.length){const q=e.exposed||(e.exposed={});Se.forEach(H=>{Object.defineProperty(q,H,{get:()=>n[H],set:ye=>n[H]=ye})})}else e.exposed||(e.exposed={});U&&e.render===ke&&(e.render=U),Z!=null&&(e.inheritAttrs=Z),Oe&&(e.components=Oe),ze&&(e.directives=ze)}function fl(e,t,n=ke,r=!1){R(e)&&(e=fr(e));for(const a in e){const i=e[a];let o;Q(i)?"default"in i?o=ie(i.from||a,i.default,!0):o=ie(i.from||a):o=ie(i),ae(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ka(e,t,n){Ae(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function qi(e,t,n,r){const a=r.includes(".")?Wi(n,r):()=>n[r];if(ne(e)){const i=t[e];z(i)&&Nt(a,i)}else if(z(e))Nt(a,e.bind(n));else if(Q(e))if(R(e))e.forEach(i=>qi(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&Nt(a,i,e)}}function Ji(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>kn(l,c,o,!0)),kn(l,t,o)),i.set(t,l),l}function kn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&kn(e,i,n,!0),a&&a.forEach(o=>kn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=cl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const cl={data:Aa,props:ut,emits:ut,methods:ut,computed:ut,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:ut,directives:ut,watch:dl,provide:Aa,inject:ul};function Aa(e,t){return t?e?function(){return ue(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function ul(e,t){return ut(fr(e),fr(t))}function fr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function ut(e,t){return e?ue(ue(Object.create(null),e),t):t}function dl(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function ml(e,t,n,r=!1){const a={},i={};wn(i,Bn,1),e.propsDefaults=Object.create(null),Gi(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ts(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function pl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=$(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let b=d[p];const A=t[b];if(l)if(B(i,b))A!==i[b]&&(i[b]=A,c=!0);else{const k=Re(b);a[k]=cr(l,s,k,A,e,!1)}else A!==i[b]&&(i[b]=A,c=!0)}}}else{Gi(e,t,a,i)&&(c=!0);let d;for(const p in s)(!t||!B(t,p)&&((d=Rt(p))===p||!B(t,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(a[p]=cr(l,s,p,void 0,e,!0)):delete a[p]);if(i!==s)for(const p in i)(!t||!B(t,p)&&!0)&&(delete i[p],c=!0)}c&&He(e,"set","$attrs")}function Gi(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(vn(l))continue;const c=t[l];let d;a&&B(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Wr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=$(n),c=s||K;for(let d=0;d<i.length;d++){const p=i[d];n[p]=cr(a,l,p,c[p],e,!B(c,p))}}return o}function cr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ft(a),r=c[n]=l.call(null,t),vt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Rt(n))&&(r=!0))}return r}function Zi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!z(e)){const d=p=>{l=!0;const[b,A]=Zi(p,t,!0);ue(o,b),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,Mt),Mt;if(R(i))for(let d=0;d<i.length;d++){const p=Re(i[d]);Sa(p)&&(o[p]=K)}else if(i)for(const d in i){const p=Re(d);if(Sa(p)){const b=i[d],A=o[p]=R(b)||z(b)?{type:b}:b;if(A){const k=Ta(Boolean,A.type),I=Ta(String,A.type);A[0]=k>-1,A[1]=I<0||k<I,(k>-1||B(A,"default"))&&s.push(p)}}}const c=[o,s];return r.set(e,c),c}function Sa(e){return e[0]!=="$"}function Oa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ea(e,t){return Oa(e)===Oa(t)}function Ta(e,t){return R(t)?t.findIndex(n=>Ea(n,e)):z(t)&&Ea(t,e)?0:-1}const Qi=e=>e[0]==="_"||e==="$stable",Xr=e=>R(e)?e.map(Ie):[Ie(e)],hl=(e,t,n)=>{const r=$s((...a)=>Xr(t(...a)),n);return r._c=!1,r},eo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Qi(a))continue;const i=e[a];if(z(i))t[a]=hl(a,i,r);else if(i!=null){const o=Xr(i);t[a]=()=>o}}},to=(e,t)=>{const n=Xr(t);e.slots.default=()=>n},vl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=$(t),wn(t,"_",n)):eo(t,e.slots={})}else e.slots={},t&&to(e,t);wn(e.slots,Bn,1)},gl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ue(a,t),!n&&s===1&&delete a._):(i=!t.$stable,eo(t,a)),o=t}else t&&(to(e,t),o={default:1});if(i)for(const s in a)!Qi(s)&&!(s in o)&&delete a[s]};function ft(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(zt(),Ae(l,n,8,[e.el,s,e,t]),Dt())}}function no(){return{app:null,config:{isNativeTag:Xo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bl=0;function yl(e,t){return function(r,a=null){a!=null&&!Q(a)&&(a=null);const i=no(),o=new Set;let s=!1;const l=i.app={_uid:bl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Hl,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&z(c.install)?(o.add(c),c.install(l,...d)):z(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,p){if(!s){const b=ve(r,a);return b.appContext=i,d&&t?t(b,c):e(b,c,p),s=!0,l._container=c,c.__vue_app__=l,Gr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function ur(e,t,n,r,a=!1){if(R(e)){e.forEach((b,A)=>ur(b,t&&(R(t)?t[A]:t),n,r,a));return}if(sr(r)&&!a)return;const i=r.shapeFlag&4?Gr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===K?s.refs={}:s.refs,p=s.setupState;if(c!=null&&c!==l&&(ne(c)?(d[c]=null,B(p,c)&&(p[c]=null)):ae(c)&&(c.value=null)),z(l))at(l,s,12,[o,d]);else{const b=ne(l),A=ae(l);if(b||A){const k=()=>{if(e.f){const I=b?d[l]:l.value;a?R(I)&&Nr(I,i):R(I)?I.includes(i)||I.push(i):b?d[l]=[i]:(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,B(p,l)&&(p[l]=o)):ae(l)&&(l.value=o,e.k&&(d[e.k]=o))};o?(k.id=-1,me(k,n)):k()}}}const me=Xs;function xl(e){return wl(e)}function wl(e,t){const n=ts();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:p,nextSibling:b,setScopeId:A=ke,cloneNode:k,insertStaticContent:I}=e,N=(f,u,h,v=null,g=null,m=null,_=!1,x=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ht(f,u)&&(v=lt(f),we(f,g,m,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:y,ref:T,shapeFlag:E}=u;switch(y){case qr:C(f,u,h,v);break;case gt:S(f,u,h,v);break;case qn:f==null&&L(u,h,v,_);break;case Ue:ze(f,u,h,v,g,m,_,x,w);break;default:E&1?ee(f,u,h,v,g,m,_,x,w):E&6?Ee(f,u,h,v,g,m,_,x,w):(E&64||E&128)&&y.process(f,u,h,v,g,m,_,x,w,Ge)}T!=null&&g&&ur(T,f&&f.ref,m,u||f,!u)},C=(f,u,h,v)=>{if(f==null)r(u.el=s(u.children),h,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},S=(f,u,h,v)=>{f==null?r(u.el=l(u.children||""),h,v):u.el=f.el},L=(f,u,h,v)=>{[f.el,f.anchor]=I(f.children,u,h,v,f.el,f.anchor)},D=({el:f,anchor:u},h,v)=>{let g;for(;f&&f!==u;)g=b(f),r(f,h,v),f=g;r(u,h,v)},U=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=b(f),a(f),f=h;a(u)},ee=(f,u,h,v,g,m,_,x,w)=>{_=_||u.type==="svg",f==null?se(u,h,v,g,m,_,x,w):Se(f,u,g,m,_,x,w)},se=(f,u,h,v,g,m,_,x)=>{let w,y;const{type:T,props:E,shapeFlag:M,transition:F,patchFlag:j,dirs:J}=f;if(f.el&&k!==void 0&&j===-1)w=f.el=k(f.el);else{if(w=f.el=o(f.type,m,E&&E.is,E),M&8?d(w,f.children):M&16&&G(f.children,w,null,v,g,m&&T!=="foreignObject",_,x),J&&ft(f,null,v,"created"),E){for(const V in E)V!=="value"&&!vn(V)&&i(w,V,null,E[V],m,f.children,v,g,xe);"value"in E&&i(w,"value",null,E.value),(y=E.onVnodeBeforeMount)&&Pe(y,v,f)}le(w,f,f.scopeId,_,v)}J&&ft(f,null,v,"beforeMount");const Y=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;Y&&F.beforeEnter(w),r(w,u,h),((y=E&&E.onVnodeMounted)||Y||J)&&me(()=>{y&&Pe(y,v,f),Y&&F.enter(w),J&&ft(f,null,v,"mounted")},g)},le=(f,u,h,v,g)=>{if(h&&A(f,h),v)for(let m=0;m<v.length;m++)A(f,v[m]);if(g){let m=g.subTree;if(u===m){const _=g.vnode;le(f,_,_.scopeId,_.slotScopeIds,g.parent)}}},G=(f,u,h,v,g,m,_,x,w=0)=>{for(let y=w;y<f.length;y++){const T=f[y]=x?tt(f[y]):Ie(f[y]);N(null,T,u,h,v,g,m,_,x)}},Se=(f,u,h,v,g,m,_)=>{const x=u.el=f.el;let{patchFlag:w,dynamicChildren:y,dirs:T}=u;w|=f.patchFlag&16;const E=f.props||K,M=u.props||K;let F;h&&ct(h,!1),(F=M.onVnodeBeforeUpdate)&&Pe(F,h,u,f),T&&ft(u,f,h,"beforeUpdate"),h&&ct(h,!0);const j=g&&u.type!=="foreignObject";if(y?Z(f.dynamicChildren,y,x,h,v,j,m):_||ye(f,u,x,null,h,v,j,m,!1),w>0){if(w&16)Oe(x,u,E,M,h,v,g);else if(w&2&&E.class!==M.class&&i(x,"class",null,M.class,g),w&4&&i(x,"style",E.style,M.style,g),w&8){const J=u.dynamicProps;for(let Y=0;Y<J.length;Y++){const V=J[Y],_e=E[V],kt=M[V];(kt!==_e||V==="value")&&i(x,V,_e,kt,g,f.children,h,v,xe)}}w&1&&f.children!==u.children&&d(x,u.children)}else!_&&y==null&&Oe(x,u,E,M,h,v,g);((F=M.onVnodeUpdated)||T)&&me(()=>{F&&Pe(F,h,u,f),T&&ft(u,f,h,"updated")},v)},Z=(f,u,h,v,g,m,_)=>{for(let x=0;x<u.length;x++){const w=f[x],y=u[x],T=w.el&&(w.type===Ue||!Ht(w,y)||w.shapeFlag&70)?p(w.el):h;N(w,y,T,null,v,g,m,_,!0)}},Oe=(f,u,h,v,g,m,_)=>{if(h!==v){for(const x in v){if(vn(x))continue;const w=v[x],y=h[x];w!==y&&x!=="value"&&i(f,x,y,w,_,u.children,g,m,xe)}if(h!==K)for(const x in h)!vn(x)&&!(x in v)&&i(f,x,h[x],null,_,u.children,g,m,xe);"value"in v&&i(f,"value",h.value,v.value)}},ze=(f,u,h,v,g,m,_,x,w)=>{const y=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:M,slotScopeIds:F}=u;F&&(x=x?x.concat(F):F),f==null?(r(y,h,v),r(T,h,v),G(u.children,h,T,g,m,_,x,w)):E>0&&E&64&&M&&f.dynamicChildren?(Z(f.dynamicChildren,M,h,g,m,_,x),(u.key!=null||g&&u===g.subTree)&&ro(f,u,!0)):ye(f,u,h,T,g,m,_,x,w)},Ee=(f,u,h,v,g,m,_,x,w)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?g.ctx.activate(u,h,v,_,w):xt(u,h,v,g,m,_,w):te(f,u,w)},xt=(f,u,h,v,g,m,_)=>{const x=f.component=Rl(f,v,g);if(Ki(f)&&(x.ctx.renderer=Ge),zl(x),x.asyncDep){if(g&&g.registerDep(x,q),!f.el){const w=x.subTree=ve(gt);S(null,w,u,h)}return}q(x,f,u,h,g,m,_)},te=(f,u,h)=>{const v=u.component=f.component;if(Ws(f,u,h))if(v.asyncDep&&!v.asyncResolved){H(v,u,h);return}else v.next=u,Ds(v.update),v.update();else u.component=f.component,u.el=f.el,v.vnode=u},q=(f,u,h,v,g,m,_)=>{const x=()=>{if(f.isMounted){let{next:T,bu:E,u:M,parent:F,vnode:j}=f,J=T,Y;ct(f,!1),T?(T.el=j.el,H(f,T,_)):T=j,E&&Vn(E),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&Pe(Y,F,T,j),ct(f,!0);const V=Xn(f),_e=f.subTree;f.subTree=V,N(_e,V,p(_e.el),lt(_e),f,g,m),T.el=V.el,J===null&&Ks(f,V.el),M&&me(M,g),(Y=T.props&&T.props.onVnodeUpdated)&&me(()=>Pe(Y,F,T,j),g)}else{let T;const{el:E,props:M}=u,{bm:F,m:j,parent:J}=f,Y=sr(u);if(ct(f,!1),F&&Vn(F),!Y&&(T=M&&M.onVnodeBeforeMount)&&Pe(T,J,u),ct(f,!0),E&&Ct){const V=()=>{f.subTree=Xn(f),Ct(E,f.subTree,f,g,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=Xn(f);N(null,V,h,v,f,g,m),u.el=V.el}if(j&&me(j,g),!Y&&(T=M&&M.onVnodeMounted)){const V=u;me(()=>Pe(T,J,V),g)}u.shapeFlag&256&&f.a&&me(f.a,g),f.isMounted=!0,u=h=v=null}},w=f.effect=new zr(x,()=>Di(f.update),f.scope),y=f.update=w.run.bind(w);y.id=f.uid,ct(f,!0),y()},H=(f,u,h)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,pl(f,u.props,v,h),gl(f,u.children,h),zt(),Yr(void 0,f.update),Dt()},ye=(f,u,h,v,g,m,_,x,w=!1)=>{const y=f&&f.children,T=f?f.shapeFlag:0,E=u.children,{patchFlag:M,shapeFlag:F}=u;if(M>0){if(M&128){qe(y,E,h,v,g,m,_,x,w);return}else if(M&256){wt(y,E,h,v,g,m,_,x,w);return}}F&8?(T&16&&xe(y,g,m),E!==y&&d(h,E)):T&16?F&16?qe(y,E,h,v,g,m,_,x,w):xe(y,g,m,!0):(T&8&&d(h,""),F&16&&G(E,h,v,g,m,_,x,w))},wt=(f,u,h,v,g,m,_,x,w)=>{f=f||Mt,u=u||Mt;const y=f.length,T=u.length,E=Math.min(y,T);let M;for(M=0;M<E;M++){const F=u[M]=w?tt(u[M]):Ie(u[M]);N(f[M],F,h,null,g,m,_,x,w)}y>T?xe(f,g,m,!0,!1,E):G(u,h,v,g,m,_,x,w,E)},qe=(f,u,h,v,g,m,_,x,w)=>{let y=0;const T=u.length;let E=f.length-1,M=T-1;for(;y<=E&&y<=M;){const F=f[y],j=u[y]=w?tt(u[y]):Ie(u[y]);if(Ht(F,j))N(F,j,h,null,g,m,_,x,w);else break;y++}for(;y<=E&&y<=M;){const F=f[E],j=u[M]=w?tt(u[M]):Ie(u[M]);if(Ht(F,j))N(F,j,h,null,g,m,_,x,w);else break;E--,M--}if(y>E){if(y<=M){const F=M+1,j=F<T?u[F].el:v;for(;y<=M;)N(null,u[y]=w?tt(u[y]):Ie(u[y]),h,j,g,m,_,x,w),y++}}else if(y>M)for(;y<=E;)we(f[y],g,m,!0),y++;else{const F=y,j=y,J=new Map;for(y=j;y<=M;y++){const pe=u[y]=w?tt(u[y]):Ie(u[y]);pe.key!=null&&J.set(pe.key,y)}let Y,V=0;const _e=M-j+1;let kt=!1,da=0;const $t=new Array(_e);for(y=0;y<_e;y++)$t[y]=0;for(y=F;y<=E;y++){const pe=f[y];if(V>=_e){we(pe,g,m,!0);continue}let Me;if(pe.key!=null)Me=J.get(pe.key);else for(Y=j;Y<=M;Y++)if($t[Y-j]===0&&Ht(pe,u[Y])){Me=Y;break}Me===void 0?we(pe,g,m,!0):($t[Me-j]=y+1,Me>=da?da=Me:kt=!0,N(pe,u[Me],h,null,g,m,_,x,w),V++)}const ma=kt?_l($t):Mt;for(Y=ma.length-1,y=_e-1;y>=0;y--){const pe=j+y,Me=u[pe],pa=pe+1<T?u[pe+1].el:v;$t[y]===0?N(null,Me,h,pa,g,m,_,x,w):kt&&(Y<0||y!==ma[Y]?De(Me,h,pa,2):Y--)}}},De=(f,u,h,v,g=null)=>{const{el:m,type:_,transition:x,children:w,shapeFlag:y}=f;if(y&6){De(f.component.subTree,u,h,v);return}if(y&128){f.suspense.move(u,h,v);return}if(y&64){_.move(f,u,h,Ge);return}if(_===Ue){r(m,u,h);for(let E=0;E<w.length;E++)De(w[E],u,h,v);r(f.anchor,u,h);return}if(_===qn){D(f,u,h);return}if(v!==2&&y&1&&x)if(v===0)x.beforeEnter(m),r(m,u,h),me(()=>x.enter(m),g);else{const{leave:E,delayLeave:M,afterLeave:F}=x,j=()=>r(m,u,h),J=()=>{E(m,()=>{j(),F&&F()})};M?M(m,j,J):J()}else r(m,u,h)},we=(f,u,h,v=!1,g=!1)=>{const{type:m,props:_,ref:x,children:w,dynamicChildren:y,shapeFlag:T,patchFlag:E,dirs:M}=f;if(x!=null&&ur(x,null,h,f,!0),T&256){u.ctx.deactivate(f);return}const F=T&1&&M,j=!sr(f);let J;if(j&&(J=_&&_.onVnodeBeforeUnmount)&&Pe(J,u,f),T&6)Bt(f.component,h,v);else{if(T&128){f.suspense.unmount(h,v);return}F&&ft(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,h,g,Ge,v):y&&(m!==Ue||E>0&&E&64)?xe(y,u,h,!1,!0):(m===Ue&&E&384||!g&&T&16)&&xe(w,u,h),v&&Je(f)}(j&&(J=_&&_.onVnodeUnmounted)||F)&&me(()=>{J&&Pe(J,u,f),F&&ft(f,null,u,"unmounted")},h)},Je=f=>{const{type:u,el:h,anchor:v,transition:g}=f;if(u===Ue){Te(h,v);return}if(u===qn){U(f);return}const m=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:_,delayLeave:x}=g,w=()=>_(h,m);x?x(f.el,m,w):w()}else m()},Te=(f,u)=>{let h;for(;f!==u;)h=b(f),a(f),f=h;a(u)},Bt=(f,u,h)=>{const{bum:v,scope:g,update:m,subTree:_,um:x}=f;v&&Vn(v),g.stop(),m&&(m.active=!1,we(_,f,u,h)),x&&me(x,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},xe=(f,u,h,v=!1,g=!1,m=0)=>{for(let _=m;_<f.length;_++)we(f[_],u,h,v,g)},lt=f=>f.shapeFlag&6?lt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),Ut=(f,u,h)=>{f==null?u._vnode&&we(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,h),Ui(),u._vnode=f},Ge={p:N,um:we,m:De,r:Je,mt:xt,mc:G,pc:ye,pbc:Z,n:lt,o:e};let _t,Ct;return t&&([_t,Ct]=t(Ge)),{render:Ut,hydrate:_t,createApp:yl(Ut,_t)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ro(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=tt(a[i]),s.el=o.el),n||ro(o,s))}}function _l(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Cl=e=>e.__isTeleport,ao="components";function du(e,t){return Al(ao,e,!0,t)||e}const kl=Symbol();function Al(e,t,n=!0,r=!1){const a=Le||re;if(a){const i=a.type;if(e===ao){const s=Ul(i);if(s&&(s===t||s===Re(t)||s===Rn(Re(t))))return i}const o=Ma(a[e]||i[e],t)||Ma(a.appContext[e],t);return!o&&r?i:o}}function Ma(e,t){return e&&(e[t]||e[Re(t)]||e[Rn(Re(t))])}const Ue=Symbol(void 0),qr=Symbol(void 0),gt=Symbol(void 0),qn=Symbol(void 0),Jt=[];let ht=null;function Sl(e=!1){Jt.push(ht=e?null:[])}function Ol(){Jt.pop(),ht=Jt[Jt.length-1]||null}let An=1;function Pa(e){An+=e}function io(e){return e.dynamicChildren=An>0?ht||Mt:null,Ol(),An>0&&ht&&ht.push(e),e}function mu(e,t,n,r,a,i){return io(so(e,t,n,r,a,i,!0))}function El(e,t,n,r,a){return io(ve(e,t,n,r,a,!0))}function dr(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const Bn="__vInternal",oo=({key:e})=>e!=null?e:null,gn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ne(e)||ae(e)||z(e)?{i:Le,r:e,k:t,f:!!n}:e:null;function so(e,t=null,n=null,r=0,a=null,i=e===Ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&oo(t),ref:t&&gn(t),scopeId:Yi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Jr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),An>0&&!o&&ht&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ht.push(l),l}const ve=Tl;function Tl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===kl)&&(e=gt),dr(e)){const s=an(e,t,!0);return n&&Jr(s,n),s}if($l(e)&&(e=e.__vccOpts),t){t=Ml(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=Pr(s)),Q(l)&&(Pi(l)&&!R(l)&&(l=ue({},l)),t.style=Mr(l))}const o=ne(e)?1:Vs(e)?128:Cl(e)?64:Q(e)?4:z(e)?2:0;return so(e,t,n,r,a,o,i,!0)}function Ml(e){return e?Pi(e)||Bn in e?ue({},e):e:null}function an(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Il(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&oo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(gn(t)):[a,gn(t)]:gn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&an(e.ssContent),ssFallback:e.ssFallback&&an(e.ssFallback),el:e.el,anchor:e.anchor}}function Pl(e=" ",t=0){return ve(qr,null,e,t)}function pu(e="",t=!1){return t?(Sl(),El(gt,null,e)):ve(gt,null,e)}function Ie(e){return e==null||typeof e=="boolean"?ve(gt):R(e)?ve(Ue,null,e.slice()):typeof e=="object"?tt(e):ve(qr,null,String(e))}function tt(e){return e.el===null||e.memo?e:an(e)}function Jr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Jr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Bn in t)?t._ctx=Le:a===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[Pl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Il(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Pr([t.class,r.class]));else if(a==="style")t.style=Mr([t.style,r.style]);else if(Nn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Pe(e,t,n,r=null){Ae(e,t,7,[n,r])}function hu(e,t,n,r){let a;const i=n&&n[r];if(R(e)||ne(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Q(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const mr=e=>e?lo(e)?Gr(e)||e.proxy:mr(e.parent):null,Sn=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>mr(e.parent),$root:e=>mr(e.root),$emit:e=>e.emit,$options:e=>Ji(e),$forceUpdate:e=>()=>Di(e.update),$nextTick:e=>zi.bind(e.proxy),$watch:e=>Js.bind(e)}),Nl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&B(r,t))return o[t]=1,r[t];if(a!==K&&B(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&B(c,t))return o[t]=3,i[t];if(n!==K&&B(n,t))return o[t]=4,n[t];lr&&(o[t]=0)}}const d=Sn[t];let p,b;if(d)return t==="$attrs"&&ge(e,"get",t),d(e);if((p=s.__cssModules)&&(p=p[t]))return p;if(n!==K&&B(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,B(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&B(a,t)?(a[t]=n,!0):r!==K&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&B(e,o)||t!==K&&B(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(Sn,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Ll=no();let Fl=0;function Rl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Ll,i={uid:Fl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ns(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zi(r,a),emitsOptions:Hi(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Us.bind(null,i),e.ce&&e.ce(i),i}let re=null;const Ft=e=>{re=e,e.scope.on()},vt=()=>{re&&re.scope.off(),re=null};function lo(e){return e.vnode.shapeFlag&4}let on=!1;function zl(e,t=!1){on=t;const{props:n,children:r}=e.vnode,a=lo(e);ml(e,n,a,t),vl(e,r);const i=a?Dl(e,t):void 0;return on=!1,i}function Dl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ii(new Proxy(e.ctx,Nl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Bl(e):null;Ft(e),zt();const i=at(r,e,0,[e.props,a]);if(Dt(),vt(),vi(i)){if(i.then(vt,vt),t)return i.then(o=>{Ia(e,o,t)}).catch(o=>{Dn(o,e,0)});e.asyncDep=i}else Ia(e,i,t)}else fo(e,t)}function Ia(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=Fi(t)),fo(e,n)}let Na;function fo(e,t,n){const r=e.type;if(!e.render){if(!t&&Na&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ue(ue({isCustomElement:i,delimiters:s},o),l);r.render=Na(a,c)}}e.render=r.render||ke}Ft(e),zt(),ll(e),Dt(),vt()}function jl(e){return new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}})}function Bl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=jl(e))},slots:e.slots,emit:e.emit,expose:t}}function Gr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Fi(Ii(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Sn)return Sn[n](e)}}))}function Ul(e){return z(e)&&e.displayName||e.name}function $l(e){return z(e)&&"__vccOpts"in e}const ce=(e,t)=>Fs(e,t,on);function oe(e,t,n){const r=arguments.length;return r===2?Q(t)&&!R(t)?dr(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&dr(n)&&(n=[n]),ve(e,t,n))}const Hl="3.2.31",Yl="http://www.w3.org/2000/svg",dt=typeof document!="undefined"?document:null,La=dt&&dt.createElement("template"),Wl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?dt.createElementNS(Yl,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{La.innerHTML=r?`<svg>${e}</svg>`:e;const s=La.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Vl(e,t,n){const r=e.style,a=ne(n);if(n&&!a){for(const i in n)pr(r,i,n[i]);if(t&&!ne(t))for(const i in t)n[i]==null&&pr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Fa=/\s*!important$/;function pr(e,t,n){if(R(n))n.forEach(r=>pr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Xl(e,t);Fa.test(n)?e.setProperty(Rt(r),n.replace(Fa,""),"important"):e[r]=n}}const Ra=["Webkit","Moz","ms"],Jn={};function Xl(e,t){const n=Jn[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return Jn[t]=r;r=Rn(r);for(let a=0;a<Ra.length;a++){const i=Ra[a]+r;if(i in e)return Jn[t]=i}return t}const za="http://www.w3.org/1999/xlink";function ql(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(za,t.slice(6,t.length)):e.setAttributeNS(za,t,n);else{const i=Yo(t);n==null||i&&!mi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Jl(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=mi(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let On=Date.now,co=!1;if(typeof window!="undefined"){On()>document.createEvent("Event").timeStamp&&(On=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);co=!!(e&&Number(e[1])<=53)}let hr=0;const Gl=Promise.resolve(),Zl=()=>{hr=0},Ql=()=>hr||(Gl.then(Zl),hr=On());function ef(e,t,n,r){e.addEventListener(t,n,r)}function tf(e,t,n,r){e.removeEventListener(t,n,r)}function nf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=rf(t);if(r){const c=i[t]=af(r,a);ef(e,s,c,l)}else o&&(tf(e,s,o,l),i[t]=void 0)}}const Da=/(?:Once|Passive|Capture)$/;function rf(e){let t;if(Da.test(e)){t={};let n;for(;n=e.match(Da);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Rt(e.slice(2)),t]}function af(e,t){const n=r=>{const a=r.timeStamp||On();(co||a>=n.attached-1)&&Ae(of(r,n.value),t,5,[r])};return n.value=e,n.attached=Ql(),n}function of(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ja=/^on[a-z]/,sf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Kl(e,r,a):t==="style"?Vl(e,n,r):Nn(t)?Ir(t)||nf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lf(e,t,r,a))?Jl(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ql(e,t,r,a))};function lf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ja.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ja.test(t)&&ne(n)?!1:t in e}const ff=ue({patchProp:sf},Wl);let Ba;function cf(){return Ba||(Ba=xl(ff))}const vu=(...e)=>{const t=cf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=uf(r);if(!a)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function uf(e){return ne(e)?document.querySelector(e):e}/**
 * Vue 3 Carousel 0.1.38
 * (c) 2022
 * @license MIT
 */const de={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0};function df(e,t){let n;return function(...r){n&&clearTimeout(n),n=setTimeout(()=>{e(...r),n=null},t)}}function mf(e,t){let n;return function(...r){const a=this;n||(e.apply(a,r),n=!0,setTimeout(()=>n=!1,t))}}function pf(e){var t,n,r;return e?((n=(t=e[0])===null||t===void 0?void 0:t.type)===null||n===void 0?void 0:n.name)==="CarouselSlide"?e:((r=e[0])===null||r===void 0?void 0:r.children)||[]:[]}function hf(e,t){if(e.wrapAround)return t-1;switch(e.snapAlign){case"start":return t-e.itemsToShow;case"end":return t-1;case"center":case"center-odd":return t-Math.ceil(e.itemsToShow/2);case"center-even":return t-Math.ceil(e.itemsToShow/2);default:return 0}}function vf(e){if(e.wrapAround)return 0;switch(e.snapAlign){case"start":return 0;case"end":return e.itemsToShow-1;case"center":case"center-odd":return Math.floor((e.itemsToShow-1)/2);case"center-even":return Math.floor((e.itemsToShow-2)/2);default:return 0}}function Ua(e,t,n,r){return e.wrapAround?t:Math.min(Math.max(t,r),n)}function gf({slidesBuffer:e,currentSlide:t,snapAlign:n,itemsToShow:r,wrapAround:a,slidesCount:i}){let o=e.indexOf(t);if(o===-1&&(o=e.indexOf(Math.ceil(t))),n==="center"||n==="center-odd"?o-=(r-1)/2:n==="center-even"?o-=(r-2)/2:n==="end"&&(o-=r-1),!a){const s=i-r,l=0;o=Math.max(Math.min(o,s),l)}return o}var gu=ln({name:"Carousel",props:{itemsToShow:{default:de.itemsToShow,type:Number},itemsToScroll:{default:de.itemsToScroll,type:Number},wrapAround:{default:de.wrapAround,type:Boolean},snapAlign:{default:de.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:de.transition,type:Number},breakpoints:{default:de.breakpoints,type:Object},autoplay:{default:de.autoplay,type:Number},pauseAutoplayOnHover:{default:de.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:de.mouseDrag,type:Boolean},touchDrag:{default:de.touchDrag,type:Boolean},dir:{default:de.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}},setup(e,{slots:t,emit:n,expose:r}){var a;const i=W(null),o=W([]),s=W([]),l=W(0),c=W(1),d=W(null),p=W(null);let b=W({}),A=Object.assign({},de);const k=rt(Object.assign({},A)),I=W((a=k.modelValue)!==null&&a!==void 0?a:0),N=W(0),C=W(0),S=W(0),L=W(0);Be("config",k),Be("slidesBuffer",s),Be("slidesCount",c),Be("currentSlide",I),Be("maxSlide",S),Be("minSlide",L);function D(){const m=Object.assign(Object.assign({},e),e.settings);b=W(Object.assign({},m.breakpoints)),A=Object.assign(Object.assign({},m),{settings:void 0,breakpoints:void 0}),ee(A)}function U(){const m=Object.keys(b.value).map(x=>Number(x)).sort((x,w)=>+w-+x);let _=Object.assign({},A);m.some(x=>window.matchMedia(`(min-width: ${x}px)`).matches?(_=Object.assign(Object.assign({},_),b.value[x]),!0):!1),ee(_)}function ee(m){for(let _ in m)k[_]=m[_]}const se=df(()=>{b.value&&(U(),G()),le()},16);function le(){if(!i.value)return;const m=i.value.getBoundingClientRect();l.value=m.width/k.itemsToShow}function G(){c.value=Math.max(o.value.length,1),!(c.value<=0)&&(C.value=Math.ceil((c.value-1)/2),S.value=hf(k,c.value),L.value=vf(k),I.value=Ua(k,I.value,S.value,L.value))}function Se(){const m=[...Array(c.value).keys()];if(k.wrapAround&&k.itemsToShow+1<=c.value){let w=(k.itemsToShow!==1?Math.round((c.value-k.itemsToShow)/2):0)-I.value;if(k.snapAlign==="end"?w+=Math.floor(k.itemsToShow-1):(k.snapAlign==="center"||k.snapAlign==="center-odd")&&w++,w<0)for(let y=w;y<0;y++)m.push(Number(m.shift()));else for(let y=0;y<w;y++)m.unshift(Number(m.pop()))}s.value=m}Xi(()=>{b.value&&(U(),G()),zi(()=>setTimeout(le,16)),k.autoplay&&k.autoplay>0&&De(),window.addEventListener("resize",se,{passive:!0})}),Vr(()=>{p.value&&clearTimeout(p.value),we(!1)});let Z=!1;const Oe={x:0,y:0},ze={x:0,y:0},Ee=rt({x:0,y:0}),xt=W(!1),te=W(!1),q=()=>{te.value=!0},H=()=>{te.value=!1},ye=mf(m=>{Z||m.preventDefault(),ze.x=Z?m.touches[0].clientX:m.clientX,ze.y=Z?m.touches[0].clientY:m.clientY;const _=ze.x-Oe.x,x=ze.y-Oe.y;Ee.y=x,Ee.x=_},16);function wt(m){Z=m.type==="touchstart",Z||m.preventDefault(),!(!Z&&m.button!==0||Je.value)&&(xt.value=!0,Oe.x=Z?m.touches[0].clientX:m.clientX,Oe.y=Z?m.touches[0].clientY:m.clientY,document.addEventListener(Z?"touchmove":"mousemove",ye),document.addEventListener(Z?"touchend":"mouseup",qe))}function qe(){xt.value=!1;const m=k.dir==="rtl"?-1:1,_=Math.sign(Ee.x)*.4,x=Math.round(Ee.x/l.value+_)*m;let w=Ua(k,I.value-x,S.value,L.value);Te(w),Ee.x=0,Ee.y=0,document.removeEventListener(Z?"touchmove":"mousemove",ye),document.removeEventListener(Z?"touchend":"mouseup",qe)}function De(){d.value=setInterval(()=>{k.pauseAutoplayOnHover&&te.value||Bt()},k.autoplay)}function we(m=!0){!d.value||(clearInterval(d.value),m&&De())}const Je=W(!1);function Te(m,_=!1){if(we(),I.value===m||Je.value)return;const x=c.value-1;if(m>x)return Te(m-c.value);if(m<0)return Te(m+c.value);Je.value=!0,N.value=I.value,I.value=m,_||n("update:modelValue",I.value),p.value=setTimeout(()=>{k.wrapAround&&Se(),Je.value=!1},k.transition)}function Bt(){let m=I.value+k.itemsToScroll;k.wrapAround||(m=Math.min(m,S.value)),Te(m)}function xe(){let m=I.value-k.itemsToScroll;k.wrapAround||(m=Math.max(m,L.value)),Te(m)}const lt={slideTo:Te,next:Bt,prev:xe};Be("nav",lt);const Ut=ce(()=>gf({slidesBuffer:s.value,itemsToShow:k.itemsToShow,snapAlign:k.snapAlign,wrapAround:Boolean(k.wrapAround),currentSlide:I.value,slidesCount:c.value}));Be("slidesToScroll",Ut);const Ge=ce(()=>{const m=k.dir==="rtl"?-1:1,_=Ut.value*l.value*m;return{transform:`translateX(${Ee.x-_}px)`,transition:`${Je.value?k.transition:0}ms`}});function _t(){D()}function Ct(){D(),U(),G(),Se(),le()}function f(){G(),Se()}Nt(()=>Object.values(e),Ct),_t(),qs(()=>{const m=c.value!==o.value.length;e.modelValue!==void 0&&I.value!==e.modelValue&&Te(Number(e.modelValue),!0),m&&f()});const u={config:k,slidesBuffer:s,slidesCount:c,slideWidth:l,currentSlide:I,maxSlide:S,minSlide:L,middleSlide:C};r({updateBreakpointsConfigs:U,updateSlidesData:G,updateSlideWidth:le,updateSlidesBuffer:Se,initCarousel:_t,restartCarousel:Ct,updateCarousel:f,slideTo:Te,next:Bt,prev:xe,nav:lt,data:u});const h=t.default||t.slides,v=t.addons,g=rt(u);return()=>{const m=pf(h==null?void 0:h(g)),_=(v==null?void 0:v(g))||[];o.value=m,m.forEach((y,T)=>y.props.index=T);const x=oe("ol",{class:"carousel__track",style:Ge.value,onMousedown:k.mouseDrag?wt:null,onTouchstart:k.touchDrag?wt:null},m),w=oe("div",{class:"carousel__viewport"},x);return oe("section",{ref:i,class:{carousel:!0,"carousel--rtl":k.dir==="rtl"},dir:k.dir,"aria-label":"Gallery",onMouseenter:q,onMouseleave:H},[w,_])}}});const bf={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},vr=e=>{const t=e.name;if(!t||typeof t!="string")return;const n=bf[t],r=oe("path",{d:n}),a=e.title||t,i=oe("title",null,t);return oe("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:a},[i,r])};vr.props={name:String,title:String};const bu=(e,{slots:t,attrs:n})=>{const{next:r,prev:a}=t,i=ie("config",rt(Object.assign({},de))),o=ie("maxSlide",W(1)),s=ie("minSlide",W(1)),l=ie("currentSlide",W(1)),c=ie("nav",{}),d=i.dir==="rtl",p=oe("button",{type:"button",class:["carousel__prev",!i.wrapAround&&l.value<=s.value&&"carousel__prev--in-active",n==null?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:c.prev},(a==null?void 0:a())||oe(vr,{name:d?"arrowRight":"arrowLeft"})),b=oe("button",{type:"button",class:["carousel__next",!i.wrapAround&&l.value>=o.value&&"carousel__next--in-active",n==null?void 0:n.class],"aria-label":"Navigate to next slide",onClick:c.next},(r==null?void 0:r())||oe(vr,{name:d?"arrowLeft":"arrowRight"}));return[p,b]};var yu=ln({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(e,{slots:t}){const n=ie("config",rt(Object.assign({},de))),r=ie("slidesBuffer",W([])),a=ie("currentSlide",W(0)),i=ie("slidesToScroll",W(0)),o=W(e.index);n.wrapAround&&(s(),Nt(r,s));function s(){o.value=r.value.indexOf(e.index)}const l=ce(()=>{const A=n.itemsToShow;return{width:`${1/A*100}%`,order:o.value.toString()}}),c=()=>e.index===a.value,d=()=>{const A=Math.ceil(i.value),k=Math.floor(i.value+n.itemsToShow);return r.value.slice(A,k).includes(e.index)},p=()=>e.index===r.value[Math.ceil(i.value)-1],b=()=>e.index===r.value[Math.floor(i.value+n.itemsToShow)];return()=>{var A;return oe("li",{style:l.value,class:{carousel__slide:!0,"carousel__slide--active":c(),"carousel__slide--visible":d(),"carousel__slide--prev":p(),"carousel__slide--next":b()}},(A=t.default)===null||A===void 0?void 0:A.call(t))}}});const xu=()=>{const e=ie("maxSlide",W(1)),t=ie("minSlide",W(1)),n=ie("currentSlide",W(1)),r=ie("nav",{});function a(s){r.slideTo(s)}const i=s=>{const l=n.value;return l===s||l>e.value&&s>=e.value||l<t.value&&s<=t.value},o=[];for(let s=t.value;s<e.value+1;s++){const l=oe("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(s)},"aria-label":`Navigate to slide ${s+1}`,onClick:()=>a(s)}),c=oe("li",{class:"carousel__pagination-item",key:s},l);o.push(c)}return oe("ol",{class:"carousel__pagination"},o)};/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function $a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$a(Object(n),!0).forEach(function(r){wf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$a(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function En(e){return En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},En(e)}function yf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ha(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xf(e,t,n){return t&&Ha(e.prototype,t),n&&Ha(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zr(e,t){return Cf(e)||Af(e,t)||uo(e,t)||Of()}function Un(e){return _f(e)||kf(e)||uo(e)||Sf()}function _f(e){if(Array.isArray(e))return gr(e)}function Cf(e){if(Array.isArray(e))return e}function kf(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Af(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function uo(e,t){if(!!e){if(typeof e=="string")return gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gr(e,t)}}function gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Of(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ya=function(){},Qr={},mo={},po=null,ho={mark:Ya,measure:Ya};try{typeof window!="undefined"&&(Qr=window),typeof document!="undefined"&&(mo=document),typeof MutationObserver!="undefined"&&(po=MutationObserver),typeof performance!="undefined"&&(ho=performance)}catch{}var Ef=Qr.navigator||{},Wa=Ef.userAgent,Ka=Wa===void 0?"":Wa,ot=Qr,X=mo,Va=po,hn=ho;ot.document;var Xe=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",vo=~Ka.indexOf("MSIE")||~Ka.indexOf("Trident/"),Ye="___FONT_AWESOME___",br=16,go="fa",bo="svg-inline--fa",bt="data-fa-i2svg",yr="data-fa-pseudo-element",Tf="data-fa-pseudo-element-pending",ea="data-prefix",ta="data-icon",Xa="fontawesome-i2svg",Mf="async",Pf=["HTML","HEAD","STYLE","SCRIPT"],yo=function(){try{return!0}catch{return!1}}(),na={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Tn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},xo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},If={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Nf=/fa[srltdbk\-\ ]/,wo="fa-layers-text",Lf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Ff={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},_o=[1,2,3,4,5,6,7,8,9,10],Rf=_o.concat([11,12,13,14,15,16,17,18,19,20]),zf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Df=[].concat(Un(Object.keys(Tn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mt.GROUP,mt.SWAP_OPACITY,mt.PRIMARY,mt.SECONDARY]).concat(_o.map(function(e){return"".concat(e,"x")})).concat(Rf.map(function(e){return"w-".concat(e)})),Co=ot.FontAwesomeConfig||{};function jf(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Bf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Uf=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Uf.forEach(function(e){var t=Zr(e,2),n=t[0],r=t[1],a=Bf(jf(n));a!=null&&(Co[r]=a)})}var $f={familyPrefix:go,styleDefault:"solid",replacementClass:bo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Gt=O(O({},$f),Co);Gt.autoReplaceSvg||(Gt.observeMutations=!1);var P={};Object.keys(Gt).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Gt[e]=n,bn.forEach(function(r){return r(P)})},get:function(){return Gt[e]}})});ot.FontAwesomeConfig=P;var bn=[];function Hf(e){return bn.push(e),function(){bn.splice(bn.indexOf(e),1)}}var Qe=br,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yf(e){if(!(!e||!Xe)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Wf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sn(){for(var e=12,t="";e-- >0;)t+=Wf[Math.random()*62|0];return t}function jt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ra(e){return e.classList?jt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ko(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ko(e[n]),'" ')},"").trim()}function $n(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function aa(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function Vf(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Xf(e){var t=e.transform,n=e.width,r=n===void 0?br:n,a=e.height,i=a===void 0?br:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&vo?l+="translate(".concat(t.x/Qe-r/2,"em, ").concat(t.y/Qe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Qe,"em), calc(-50% + ").concat(t.y/Qe,"em)) "):l+="translate(".concat(t.x/Qe,"em, ").concat(t.y/Qe,"em) "),l+="scale(".concat(t.size/Qe*(t.flipX?-1:1),", ").concat(t.size/Qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var qf=`:root, :host {
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
}`;function Ao(){var e=go,t=bo,n=P.familyPrefix,r=P.replacementClass,a=qf;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var qa=!1;function Gn(){P.autoAddCss&&!qa&&(Yf(Ao()),qa=!0)}var Jf={mixout:function(){return{dom:{css:Ao,insertCss:Gn}}},hooks:function(){return{beforeDOMElementCreation:function(){Gn()},beforeI2svg:function(){Gn()}}}},We=ot||{};We[Ye]||(We[Ye]={});We[Ye].styles||(We[Ye].styles={});We[Ye].hooks||(We[Ye].hooks={});We[Ye].shims||(We[Ye].shims=[]);var Ce=We[Ye],So=[],Gf=function e(){X.removeEventListener("DOMContentLoaded",e),Mn=1,So.map(function(t){return t()})},Mn=!1;Xe&&(Mn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Mn||X.addEventListener("DOMContentLoaded",Gf));function Zf(e){!Xe||(Mn?setTimeout(e,0):So.push(e))}function fn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ko(e):"<".concat(t," ").concat(Kf(r),">").concat(i.map(fn).join(""),"</").concat(t,">")}function Ja(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qf=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Zn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Qf(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function ec(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function xr(e){var t=ec(e);return t.length===1?t[0].toString(16):null}function tc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ga(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function wr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ga(t);typeof Ce.hooks.addPack=="function"&&!a?Ce.hooks.addPack(e,Ga(t)):Ce.styles[e]=O(O({},Ce.styles[e]||{}),i),e==="fas"&&wr("fa",t)}var Zt=Ce.styles,nc=Ce.shims,rc=Object.values(xo),ia=null,Oo={},Eo={},To={},Mo={},Po={},ac=Object.keys(na);function ic(e){return~Df.indexOf(e)}function oc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ic(a)?a:null}var Io=function(){var t=function(i){return Zn(Zt,function(o,s,l){return o[l]=Zn(s,i,{}),o},{})};Oo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Eo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Po=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Zt||P.autoFetchSvg,r=Zn(nc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});To=r.names,Mo=r.unicodes,ia=Hn(P.styleDefault)};Hf(function(e){ia=Hn(e.styleDefault)});Io();function oa(e,t){return(Oo[e]||{})[t]}function sc(e,t){return(Eo[e]||{})[t]}function Et(e,t){return(Po[e]||{})[t]}function No(e){return To[e]||{prefix:null,iconName:null}}function lc(e){var t=Mo[e],n=oa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function st(){return ia}var sa=function(){return{prefix:null,iconName:null,rest:[]}};function Hn(e){var t=na[e],n=Tn[e]||Tn[t],r=e in Ce.styles?e:null;return n||r||null}function Yn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=oc(P.familyPrefix,s);if(Zt[s]?(s=rc.includes(s)?If[s]:s,a=s,o.prefix=s):ac.indexOf(s)>-1?(a=s,o.prefix=Hn(s)):l?o.iconName=l:s!==P.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?No(o.iconName):{},d=Et(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||d||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!Zt.far&&Zt.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},sa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=st()||"fas"),i}var fc=function(){function e(){yf(this,e),this.definitions={}}return xf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),wr(s,o[s]);var l=xo[s];l&&wr(l,o[s]),Io()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(n[s][p]=c)}),n[s][l]=c}),n}}]),e}(),Za=[],Tt={},Lt={},cc=Object.keys(Lt);function uc(e,t){var n=t.mixoutsTo;return Za=e,Tt={},Object.keys(Lt).forEach(function(r){cc.indexOf(r)===-1&&delete Lt[r]}),Za.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),En(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Tt[o]||(Tt[o]=[]),Tt[o].push(i[o])})}r.provides&&r.provides(Lt)}),n}function _r(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Tt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function yt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Tt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lt[e]?Lt[e].apply(null,t):void 0}function Cr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||st();if(!!t)return t=Et(n,t)||t,Ja(Lo.definitions,n,t)||Ja(Ce.styles,n,t)}var Lo=new fc,dc=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,yt("noAuto")},mc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(yt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Zf(function(){hc({autoReplaceSvgRoot:n}),yt("watch",t)})}},pc={icon:function(t){if(t===null)return null;if(En(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Et(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Hn(t[0]);return{prefix:r,iconName:Et(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.familyPrefix,"-"))>-1||t.match(Nf))){var a=Yn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||st(),iconName:Et(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=st();return{prefix:i,iconName:Et(i,t)||t}}}},be={noAuto:dc,config:P,dom:mc,parse:pc,library:Lo,findIconDefinition:Cr,toHtml:fn},hc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ce.styles).length>0||P.autoFetchSvg)&&Xe&&P.autoReplaceSvg&&be.dom.i2svg({node:r})};function Wn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return fn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Xe){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function vc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(aa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=$n(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function gc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function la(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,p=e.extra,b=e.watchable,A=b===void 0?!1:b,k=r.found?r:n,I=k.width,N=k.height,C=a==="fak",S=[P.replacementClass,i?"".concat(P.familyPrefix,"-").concat(i):""].filter(function(G){return p.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(p.classes).join(" "),L={children:[],attributes:O(O({},p.attributes),{},{"data-prefix":a,"data-icon":i,class:S,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(N)})},D=C&&!~p.classes.indexOf("fa-fw")?{width:"".concat(I/N*16*.0625,"em")}:{};A&&(L.attributes[bt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||sn())},children:[l]}),delete L.attributes.title);var U=O(O({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},D),p.styles)}),ee=r.found&&n.found?Ke("generateAbstractMask",U)||{children:[],attributes:{}}:Ke("generateAbstractIcon",U)||{children:[],attributes:{}},se=ee.children,le=ee.attributes;return U.children=se,U.attributes=le,s?gc(U):vc(U)}function Qa(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[bt]="");var d=O({},o.styles);aa(a)&&(d.transform=Xf({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var p=$n(d);p.length>0&&(c.style=p);var b=[];return b.push({tag:"span",attributes:c,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function bc(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=$n(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Qn=Ce.styles;function kr(e){var t=e[0],n=e[1],r=e.slice(4),a=Zr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var yc={found:!1,width:512,height:512};function xc(e,t){!yo&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ar(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=st()),new Promise(function(r,a){if(Ke("missingIconAbstract"),n==="fa"){var i=No(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Qn[t]&&Qn[t][e]){var o=Qn[t][e];return r(kr(o))}xc(e,t),r(O(O({},yc),{},{icon:P.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var ei=function(){},Sr=P.measurePerformance&&hn&&hn.mark&&hn.measure?hn:{mark:ei,measure:ei},Kt='FA "6.1.0"',wc=function(t){return Sr.mark("".concat(Kt," ").concat(t," begins")),function(){return Fo(t)}},Fo=function(t){Sr.mark("".concat(Kt," ").concat(t," ends")),Sr.measure("".concat(Kt," ").concat(t),"".concat(Kt," ").concat(t," begins"),"".concat(Kt," ").concat(t," ends"))},fa={begin:wc,end:Fo},yn=function(){};function ti(e){var t=e.getAttribute?e.getAttribute(bt):null;return typeof t=="string"}function _c(e){var t=e.getAttribute?e.getAttribute(ea):null,n=e.getAttribute?e.getAttribute(ta):null;return t&&n}function Cc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function kc(){if(P.autoReplaceSvg===!0)return xn.replace;var e=xn[P.autoReplaceSvg];return e||xn.replace}function Ac(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Sc(e){return X.createElement(e)}function Ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ac:Sc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ro(o,{ceFn:r}))}),a}function Oc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ro(a),n)}),n.getAttribute(bt)===null&&P.keepOriginalSource){var r=X.createComment(Oc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ra(n).indexOf(P.replacementClass))return xn.replace(t);var a=new RegExp("".concat(P.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return fn(s)}).join(`
`);n.setAttribute(bt,""),n.innerHTML=o}};function ni(e){e()}function zo(e,t){var n=typeof t=="function"?t:yn;if(e.length===0)n();else{var r=ni;P.mutateApproach===Mf&&(r=ot.requestAnimationFrame||ni),r(function(){var a=kc(),i=fa.begin("mutate");e.map(a),i(),n()})}}var ca=!1;function Do(){ca=!0}function Or(){ca=!1}var Pn=null;function ri(e){if(!!Va&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?yn:t,r=e.nodeCallback,a=r===void 0?yn:r,i=e.pseudoElementsCallback,o=i===void 0?yn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Pn=new Va(function(c){if(!ca){var d=st();jt(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!ti(p.addedNodes[0])&&(P.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&P.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&ti(p.target)&&~zf.indexOf(p.attributeName))if(p.attributeName==="class"&&_c(p.target)){var b=Yn(ra(p.target)),A=b.prefix,k=b.iconName;p.target.setAttribute(ea,A||d),k&&p.target.setAttribute(ta,k)}else Cc(p.target)&&a(p.target)})}}),Xe&&Pn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ec(){!Pn||Pn.disconnect()}function Tc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Mc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Yn(ra(e));return a.prefix||(a.prefix=st()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=sc(a.prefix,e.innerText)||oa(a.prefix,xr(e.innerText))),a}function Pc(e){var t=jt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ic(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Mc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Pc(e),s=_r("parseNodeAttributes",{},e),l=t.styleParser?Tc(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Nc=Ce.styles;function jo(e){var t=P.autoReplaceSvg==="nest"?ai(e,{styleParser:!1}):ai(e);return~t.extra.classes.indexOf(wo)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();var n=X.documentElement.classList,r=function(p){return n.add("".concat(Xa,"-").concat(p))},a=function(p){return n.remove("".concat(Xa,"-").concat(p))},i=P.autoFetchSvg?Object.keys(na):Object.keys(Nc),o=[".".concat(wo,":not([").concat(bt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(bt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=jt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=fa.begin("onTree"),c=s.reduce(function(d,p){try{var b=jo(p);b&&d.push(b)}catch(A){yo||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,p){Promise.all(c).then(function(b){zo(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),p(b)})})}function Lc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jo(e).then(function(n){n&&zo([n],t)})}function Fc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Cr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Cr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Rc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,p=n.title,b=p===void 0?null:p,A=n.titleId,k=A===void 0?null:A,I=n.classes,N=I===void 0?[]:I,C=n.attributes,S=C===void 0?{}:C,L=n.styles,D=L===void 0?{}:L;if(!!t){var U=t.prefix,ee=t.iconName,se=t.icon;return Wn(O({type:"icon"},t),function(){return yt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(b?S["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(k||sn()):(S["aria-hidden"]="true",S.focusable="false")),la({icons:{main:kr(se),mask:l?kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:ee,transform:O(O({},Fe),a),symbol:o,title:b,maskId:d,titleId:k,extra:{attributes:S,styles:D,classes:N}})})}},zc={mixout:function(){return{icon:Fc(Rc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ii,n.nodeCallback=Lc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ii(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,p=r.maskId,b=r.extra;return new Promise(function(A,k){Promise.all([Ar(a,s),d.iconName?Ar(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var N=Zr(I,2),C=N[0],S=N[1];A([n,la({icons:{main:C,mask:S},prefix:s,iconName:a,transform:l,symbol:c,maskId:p,title:i,titleId:o,extra:b,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=$n(s);l.length>0&&(a.style=l);var c;return aa(o)&&(c=Ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Dc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Wn({type:"layer"},function(){yt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.familyPrefix,"-layers")].concat(Un(i)).join(" ")},children:o}]})}}}},jc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,p=d===void 0?{}:d;return Wn({type:"counter",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),bc({content:n.toString(),title:i,extra:{attributes:c,styles:p,classes:["".concat(P.familyPrefix,"-layers-counter")].concat(Un(s))}})})}}}},Bc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,p=d===void 0?{}:d,b=r.styles,A=b===void 0?{}:b;return Wn({type:"text",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),Qa({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:p,styles:A,classes:["".concat(P.familyPrefix,"-layers-text")].concat(Un(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(vo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qa({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Uc=new RegExp('"',"ug"),oi=[1105920,1112319];function $c(e){var t=e.replace(Uc,""),n=tc(t,0),r=n>=oi[0]&&n<=oi[1],a=t.length===2?t[0]===t[1]:!1;return{value:xr(a?t[0]:t),isSecondary:r||a}}function si(e,t){var n="".concat(Tf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=jt(e.children),o=i.filter(function(ee){return ee.getAttribute(yr)===t})[0],s=ot.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Lf),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var p=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Tn[l[2].toLowerCase()]:Ff[c],A=$c(p),k=A.value,I=A.isSecondary,N=l[0].startsWith("FontAwesome"),C=oa(b,k),S=C;if(N){var L=lc(k);L.iconName&&L.prefix&&(C=L.iconName,b=L.prefix)}if(C&&!I&&(!o||o.getAttribute(ea)!==b||o.getAttribute(ta)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var D=Ic(),U=D.extra;U.attributes[yr]=t,Ar(C,b).then(function(ee){var se=la(O(O({},D),{},{icons:{main:ee,mask:sa()},prefix:b,iconName:S,extra:U,watchable:!0})),le=X.createElement("svg");t==="::before"?e.insertBefore(le,e.firstChild):e.appendChild(le),le.outerHTML=se.map(function(G){return fn(G)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Hc(e){return Promise.all([si(e,"::before"),si(e,"::after")])}function Yc(e){return e.parentNode!==document.head&&!~Pf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function li(e){if(!!Xe)return new Promise(function(t,n){var r=jt(e.querySelectorAll("*")).filter(Yc).map(Hc),a=fa.begin("searchPseudoElements");Do(),Promise.all(r).then(function(){a(),Or(),t()}).catch(function(){a(),Or(),n()})})}var Wc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=li,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;P.searchPseudoElements&&li(a)}}},fi=!1,Kc={mixout:function(){return{dom:{unwatch:function(){Do(),fi=!0}}}},hooks:function(){return{bootstrap:function(){ri(_r("mutationObserverCallbacks",{}))},noAuto:function(){Ec()},watch:function(n){var r=n.observeMutationsRoot;fi?Or():ri(_r("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ci=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Vc={mixout:function(){return{parse:{transform:function(n){return ci(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ci(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:p,path:b};return{tag:"g",attributes:O({},A.outer),children:[{tag:"g",attributes:O({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),A.path)}]}]}}}},er={x:0,y:0,width:"100%",height:"100%"};function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Xc(e){return e.tag==="g"?e.children:[e]}var qc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Yn(a.split(" ").map(function(o){return o.trim()})):sa();return i.prefix||(i.prefix=st()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,p=o.width,b=o.icon,A=Vf({transform:l,containerWidth:p,iconWidth:c}),k={tag:"rect",attributes:O(O({},er),{},{fill:"white"})},I=d.children?{children:d.children.map(ui)}:{},N={tag:"g",attributes:O({},A.inner),children:[ui(O({tag:d.tag,attributes:O(O({},d.attributes),A.path)},I))]},C={tag:"g",attributes:O({},A.outer),children:[N]},S="mask-".concat(s||sn()),L="clip-".concat(s||sn()),D={tag:"mask",attributes:O(O({},er),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,C]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Xc(b)},D]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(S,")")},er)}),{children:r,attributes:a}}}},Jc={provides:function(t){var n=!1;ot.matchMedia&&(n=ot.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Zc=[Jf,zc,Dc,jc,Bc,Wc,Kc,Vc,qc,Jc,Gc];uc(Zc,{mixoutsTo:be});be.noAuto;var Bo=be.config,wu=be.library;be.dom;var Uo=be.parse;be.findIconDefinition;be.toHtml;var Qc=be.icon;be.layer;var eu=be.text;be.counter;/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var _u={prefix:"fas",iconName:"bookmark",icon:[384,512,[61591,128278],"f02e","M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"]},Cu={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"]},ku={prefix:"fas",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"]},tu={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"]},Au=tu,Su={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},Ou={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"]},Eu={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"]},Tu={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"]};/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Mu={prefix:"far",iconName:"bookmark",icon:[384,512,[61591,128278],"f02e","M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"]},Pu={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},Iu={prefix:"far",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"]},Nu={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]},Lu={prefix:"far",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z"]},nu=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function ru(e,t){return t={exports:{}},e(t,t.exports),t.exports}var au=ru(function(e){(function(t){var n=function(C,S,L){if(!c(S)||p(S)||b(S)||A(S)||l(S))return S;var D,U=0,ee=0;if(d(S))for(D=[],ee=S.length;U<ee;U++)D.push(n(C,S[U],L));else{D={};for(var se in S)Object.prototype.hasOwnProperty.call(S,se)&&(D[C(se,L)]=n(C,S[se],L))}return D},r=function(C,S){S=S||{};var L=S.separator||"_",D=S.split||/(?=[A-Z])/;return C.split(D).join(L)},a=function(C){return k(C)?C:(C=C.replace(/[\-_\s]+(.)?/g,function(S,L){return L?L.toUpperCase():""}),C.substr(0,1).toLowerCase()+C.substr(1))},i=function(C){var S=a(C);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(C,S){return r(C,S).toLowerCase()},s=Object.prototype.toString,l=function(C){return typeof C=="function"},c=function(C){return C===Object(C)},d=function(C){return s.call(C)=="[object Array]"},p=function(C){return s.call(C)=="[object Date]"},b=function(C){return s.call(C)=="[object RegExp]"},A=function(C){return s.call(C)=="[object Boolean]"},k=function(C){return C=C-0,C===C},I=function(C,S){var L=S&&"process"in S?S.process:S;return typeof L!="function"?C:function(D,U){return L(D,C,U)}},N={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(C,S){return n(I(a,S),C)},decamelizeKeys:function(C,S){return n(I(o,S),C,S)},pascalizeKeys:function(C,S){return n(I(i,S),C)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(nu)}),iu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},In=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ou=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Er=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function su(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=au.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function lu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ua(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=lu(d);break;case"style":l.style=su(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ou(n,["class","style"]);return oe(e.tag,In({},t,{class:a.class,style:In({},a.style,o)},a.attrs,s),r)}var $o=!1;try{$o=!0}catch{}function fu(){if(!$o&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Vt({},e,t):{}}function cu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Vt(t,"fa-"+e.size,e.size!==null),Vt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Vt(t,"fa-pull-"+e.pull,e.pull!==null),Vt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function di(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":iu(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Fu=ln({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ce(function(){return di(t.icon)}),i=ce(function(){return Qt("classes",cu(t))}),o=ce(function(){return Qt("transform",typeof t.transform=="string"?Uo.transform(t.transform):t.transform)}),s=ce(function(){return Qt("mask",di(t.mask))}),l=ce(function(){return Qc(a.value,In({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});Nt(l,function(d){if(!d)return fu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ce(function(){return l.value?ua(l.value.abstract[0],{},r):null});return function(){return c.value}}});ln({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Bo.familyPrefix,i=ce(function(){return[a+"-layers"].concat(Er(t.fixedWidth?[a+"-fw"]:[]))});return function(){return oe("div",{class:i.value},r.default?r.default():[])}}});ln({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Bo.familyPrefix,i=ce(function(){return Qt("classes",[].concat(Er(t.counter?[a+"-layers-counter"]:[]),Er(t.position?[a+"-layers-"+t.position]:[])))}),o=ce(function(){return Qt("transform",typeof t.transform=="string"?Uo.transform(t.transform):t.transform)}),s=ce(function(){var c=eu(t.value.toString(),In({},o.value,i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ce(function(){return ua(s.value,{},r)});return function(){return l.value}}});export{$s as A,Is as B,uu as C,pu as D,ve as E,Ue as F,Pr as G,gu as H,bu as N,xu as P,yu as S,Vr as a,so as b,mu as c,ln as d,hu as e,Sl as f,El as g,Su as h,Nu as i,ku as j,Iu as k,wu as l,Ou as m,Lu as n,Xi as o,Mu as p,_u as q,W as r,Au as s,Tu as t,Eu as u,Cu as v,Pu as w,vu as x,Fu as y,du as z};
