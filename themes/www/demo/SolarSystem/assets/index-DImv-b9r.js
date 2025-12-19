(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function tc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const he={},_s=[],Ln=()=>{},Dh=()=>!1,La=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ec=n=>n.startsWith("onUpdate:"),we=Object.assign,nc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Dd=Object.prototype.hasOwnProperty,te=(n,t)=>Dd.call(n,t),Nt=Array.isArray,vs=n=>gr(n)==="[object Map]",Ia=n=>gr(n)==="[object Set]",Hc=n=>gr(n)==="[object Date]",kt=n=>typeof n=="function",be=n=>typeof n=="string",In=n=>typeof n=="symbol",ce=n=>n!==null&&typeof n=="object",Lh=n=>(ce(n)||kt(n))&&kt(n.then)&&kt(n.catch),Ih=Object.prototype.toString,gr=n=>Ih.call(n),Ld=n=>gr(n).slice(8,-1),Uh=n=>gr(n)==="[object Object]",ic=n=>be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zs=tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Id=/-\w/g,vi=Ua(n=>n.replace(Id,t=>t.slice(1).toUpperCase())),Ud=/\B([A-Z])/g,Xi=Ua(n=>n.replace(Ud,"-$1").toLowerCase()),Nh=Ua(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ja=Ua(n=>n?`on${Nh(n)}`:""),xi=(n,t)=>!Object.is(n,t),ia=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Fh=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Oh=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Nd=n=>{const t=be(n)?Number(n):NaN;return isNaN(t)?n:t};let Gc;const Na=()=>Gc||(Gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sc(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=be(i)?zd(i):sc(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(be(n)||ce(n))return n}const Fd=/;(?![^(]*\))/g,Od=/:([^]+)/,Bd=/\/\*[^]*?\*\//g;function zd(n){const t={};return n.replace(Bd,"").split(Fd).forEach(e=>{if(e){const i=e.split(Od);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Fa(n){let t="";if(be(n))t=n;else if(Nt(n))for(let e=0;e<n.length;e++){const i=Fa(n[e]);i&&(t+=i+" ")}else if(ce(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Vd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hd=tc(Vd);function Bh(n){return!!n||n===""}function Gd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Oa(n[i],t[i]);return e}function Oa(n,t){if(n===t)return!0;let e=Hc(n),i=Hc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=In(n),i=In(t),e||i)return n===t;if(e=Nt(n),i=Nt(t),e||i)return e&&i?Gd(n,t):!1;if(e=ce(n),i=ce(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Oa(n[a],t[a]))return!1}}return String(n)===String(t)}function kd(n,t){return n.findIndex(e=>Oa(e,t))}const zh=n=>!!(n&&n.__v_isRef===!0),sa=n=>be(n)?n:n==null?"":Nt(n)||ce(n)&&(n.toString===Ih||!kt(n.toString))?zh(n)?sa(n.value):JSON.stringify(n,Vh,2):String(n),Vh=(n,t)=>zh(t)?Vh(n,t.value):vs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Qa(i,r)+" =>"]=s,e),{})}:Ia(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Qa(e))}:In(t)?Qa(t):ce(t)&&!Nt(t)&&!Uh(t)?String(t):t,Qa=(n,t="")=>{var e;return In(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};let je;class Wd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=je;try{return je=this,t()}finally{je=e}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xd(){return je}let fe;const to=new WeakSet;class Hh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,to.has(this)&&(to.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kc(this),Wh(this);const t=fe,e=bn;fe=this,bn=!0;try{return this.fn()}finally{Xh(this),fe=t,bn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)oc(t);this.deps=this.depsTail=void 0,kc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?to.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jo(this)&&this.run()}get dirty(){return jo(this)}}let Gh=0,Js,Qs;function kh(n,t=!1){if(n.flags|=8,t){n.next=Qs,Qs=n;return}n.next=Js,Js=n}function rc(){Gh++}function ac(){if(--Gh>0)return;if(Qs){let t=Qs;for(Qs=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Js;){let t=Js;for(Js=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Wh(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xh(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),oc(i),Yd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function jo(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Yh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Yh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===sr)||(n.globalVersion=sr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!jo(n))))return;n.flags|=2;const t=n.dep,e=fe,i=bn;fe=n,bn=!0;try{Wh(n);const s=n.fn(n._value);(t.version===0||xi(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{fe=e,bn=i,Xh(n),n.flags&=-3}}function oc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)oc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Yd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let bn=!0;const qh=[];function Qn(){qh.push(bn),bn=!1}function ti(){const n=qh.pop();bn=n===void 0?!0:n}function kc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=fe;fe=void 0;try{t()}finally{fe=e}}}let sr=0;class qd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!bn||fe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==fe)e=this.activeLink=new qd(fe,this),fe.deps?(e.prevDep=fe.depsTail,fe.depsTail.nextDep=e,fe.depsTail=e):fe.deps=fe.depsTail=e,jh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=fe.depsTail,e.nextDep=void 0,fe.depsTail.nextDep=e,fe.depsTail=e,fe.deps===e&&(fe.deps=i)}return e}trigger(t){this.version++,sr++,this.notify(t)}notify(t){rc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ac()}}}function jh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)jh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ko=new WeakMap,Gi=Symbol(""),$o=Symbol(""),rr=Symbol("");function Ie(n,t,e){if(bn&&fe){let i=Ko.get(n);i||Ko.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new lc),s.map=i,s.key=e),s.track()}}function qn(n,t,e,i,s,r){const a=Ko.get(n);if(!a){sr++;return}const o=l=>{l&&l.trigger()};if(rc(),t==="clear")a.forEach(o);else{const l=Nt(n),c=l&&ic(e);if(l&&e==="length"){const u=Number(i);a.forEach((h,f)=>{(f==="length"||f===rr||!In(f)&&f>=u)&&o(h)})}else switch((e!==void 0||a.has(void 0))&&o(a.get(e)),c&&o(a.get(rr)),t){case"add":l?c&&o(a.get("length")):(o(a.get(Gi)),vs(n)&&o(a.get($o)));break;case"delete":l||(o(a.get(Gi)),vs(n)&&o(a.get($o)));break;case"set":vs(n)&&o(a.get(Gi));break}}ac()}function ji(n){const t=Qt(n);return t===n?t:(Ie(t,"iterate",rr),pn(n)?t:t.map(Re))}function Ba(n){return Ie(n=Qt(n),"iterate",rr),n}const jd={__proto__:null,[Symbol.iterator](){return eo(this,Symbol.iterator,Re)},concat(...n){return ji(this).concat(...n.map(t=>Nt(t)?ji(t):t))},entries(){return eo(this,"entries",n=>(n[1]=Re(n[1]),n))},every(n,t){return Fn(this,"every",n,t,void 0,arguments)},filter(n,t){return Fn(this,"filter",n,t,e=>e.map(Re),arguments)},find(n,t){return Fn(this,"find",n,t,Re,arguments)},findIndex(n,t){return Fn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Fn(this,"findLast",n,t,Re,arguments)},findLastIndex(n,t){return Fn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Fn(this,"forEach",n,t,void 0,arguments)},includes(...n){return no(this,"includes",n)},indexOf(...n){return no(this,"indexOf",n)},join(n){return ji(this).join(n)},lastIndexOf(...n){return no(this,"lastIndexOf",n)},map(n,t){return Fn(this,"map",n,t,void 0,arguments)},pop(){return Ns(this,"pop")},push(...n){return Ns(this,"push",n)},reduce(n,...t){return Wc(this,"reduce",n,t)},reduceRight(n,...t){return Wc(this,"reduceRight",n,t)},shift(){return Ns(this,"shift")},some(n,t){return Fn(this,"some",n,t,void 0,arguments)},splice(...n){return Ns(this,"splice",n)},toReversed(){return ji(this).toReversed()},toSorted(n){return ji(this).toSorted(n)},toSpliced(...n){return ji(this).toSpliced(...n)},unshift(...n){return Ns(this,"unshift",n)},values(){return eo(this,"values",Re)}};function eo(n,t,e){const i=Ba(n),s=i[t]();return i!==n&&!pn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Kd=Array.prototype;function Fn(n,t,e,i,s,r){const a=Ba(n),o=a!==n&&!pn(n),l=a[t];if(l!==Kd[t]){const h=l.apply(n,r);return o?Re(h):h}let c=e;a!==n&&(o?c=function(h,f){return e.call(this,Re(h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Wc(n,t,e,i){const s=Ba(n);let r=e;return s!==n&&(pn(n)?e.length>3&&(r=function(a,o,l){return e.call(this,a,o,l,n)}):r=function(a,o,l){return e.call(this,a,Re(o),l,n)}),s[t](r,...i)}function no(n,t,e){const i=Qt(n);Ie(i,"iterate",rr);const s=i[t](...e);return(s===-1||s===!1)&&fc(e[0])?(e[0]=Qt(e[0]),i[t](...e)):s}function Ns(n,t,e=[]){Qn(),rc();const i=Qt(n)[t].apply(n,e);return ac(),ti(),i}const $d=tc("__proto__,__v_isRef,__isVue"),Kh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(In));function Zd(n){In(n)||(n=String(n));const t=Qt(this);return Ie(t,"has",n),t.hasOwnProperty(n)}class $h{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?op:tf:r?Qh:Jh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Nt(t);if(!s){let l;if(a&&(l=jd[e]))return l;if(e==="hasOwnProperty")return Zd}const o=Reflect.get(t,e,Ue(t)?t:i);if((In(e)?Kh.has(e):$d(e))||(s||Ie(t,"get",e),r))return o;if(Ue(o)){const l=a&&ic(e)?o:o.value;return s&&ce(l)?Jo(l):l}return ce(o)?s?Jo(o):uc(o):o}}class Zh extends $h{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=Mi(r);if(!pn(i)&&!Mi(i)&&(r=Qt(r),i=Qt(i)),!Nt(t)&&Ue(r)&&!Ue(i))return l||(r.value=i),!0}const a=Nt(t)&&ic(e)?Number(e)<t.length:te(t,e),o=Reflect.set(t,e,i,Ue(t)?t:s);return t===Qt(s)&&(a?xi(i,r)&&qn(t,"set",e,i):qn(t,"add",e,i)),o}deleteProperty(t,e){const i=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&qn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!In(e)||!Kh.has(e))&&Ie(t,"has",e),i}ownKeys(t){return Ie(t,"iterate",Nt(t)?"length":Gi),Reflect.ownKeys(t)}}class Jd extends $h{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Qd=new Zh,tp=new Jd,ep=new Zh(!0);const Zo=n=>n,Tr=n=>Reflect.getPrototypeOf(n);function np(n,t,e){return function(...i){const s=this.__v_raw,r=Qt(s),a=vs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=e?Zo:t?ma:Re;return!t&&Ie(r,"iterate",l?$o:Gi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ar(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function ip(n,t){const e={get(s){const r=this.__v_raw,a=Qt(r),o=Qt(s);n||(xi(s,o)&&Ie(a,"get",s),Ie(a,"get",o));const{has:l}=Tr(a),c=t?Zo:n?ma:Re;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ie(Qt(s),"iterate",Gi),s.size},has(s){const r=this.__v_raw,a=Qt(r),o=Qt(s);return n||(xi(s,o)&&Ie(a,"has",s),Ie(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=Qt(o),c=t?Zo:n?ma:Re;return!n&&Ie(l,"iterate",Gi),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return we(e,n?{add:Ar("add"),set:Ar("set"),delete:Ar("delete"),clear:Ar("clear")}:{add(s){!t&&!pn(s)&&!Mi(s)&&(s=Qt(s));const r=Qt(this);return Tr(r).has.call(r,s)||(r.add(s),qn(r,"add",s,s)),this},set(s,r){!t&&!pn(r)&&!Mi(r)&&(r=Qt(r));const a=Qt(this),{has:o,get:l}=Tr(a);let c=o.call(a,s);c||(s=Qt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?xi(r,u)&&qn(a,"set",s,r):qn(a,"add",s,r),this},delete(s){const r=Qt(this),{has:a,get:o}=Tr(r);let l=a.call(r,s);l||(s=Qt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&qn(r,"delete",s,void 0),c},clear(){const s=Qt(this),r=s.size!==0,a=s.clear();return r&&qn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=np(s,n,t)}),e}function cc(n,t){const e=ip(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(te(e,s)&&s in i?e:i,s,r)}const sp={get:cc(!1,!1)},rp={get:cc(!1,!0)},ap={get:cc(!0,!1)};const Jh=new WeakMap,Qh=new WeakMap,tf=new WeakMap,op=new WeakMap;function lp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cp(n){return n.__v_skip||!Object.isExtensible(n)?0:lp(Ld(n))}function uc(n){return Mi(n)?n:hc(n,!1,Qd,sp,Jh)}function up(n){return hc(n,!1,ep,rp,Qh)}function Jo(n){return hc(n,!0,tp,ap,tf)}function hc(n,t,e,i,s){if(!ce(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=cp(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:e);return s.set(n,o),o}function Ms(n){return Mi(n)?Ms(n.__v_raw):!!(n&&n.__v_isReactive)}function Mi(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function fc(n){return n?!!n.__v_raw:!1}function Qt(n){const t=n&&n.__v_raw;return t?Qt(t):n}function hp(n){return!te(n,"__v_skip")&&Object.isExtensible(n)&&Fh(n,"__v_skip",!0),n}const Re=n=>ce(n)?uc(n):n,ma=n=>ce(n)?Jo(n):n;function Ue(n){return n?n.__v_isRef===!0:!1}function Ai(n){return fp(n,!1)}function fp(n,t){return Ue(n)?n:new dp(n,t)}class dp{constructor(t,e){this.dep=new lc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Qt(t),this._value=e?t:Re(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||pn(t)||Mi(t);t=i?t:Qt(t),xi(t,e)&&(this._rawValue=t,this._value=i?t:Re(t),this.dep.trigger())}}function Qo(n){return Ue(n)?n.value:n}const pp={get:(n,t,e)=>t==="__v_raw"?n:Qo(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ue(s)&&!Ue(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function ef(n){return Ms(n)?n:new Proxy(n,pp)}class mp{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new lc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return kh(this,!0),!0}get value(){const t=this.dep.track();return Yh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function xp(n,t,e=!1){let i,s;return kt(n)?i=n:(i=n.get,s=n.set),new mp(i,s,e)}const wr={},xa=new WeakMap;let Oi;function gp(n,t=!1,e=Oi){if(e){let i=xa.get(e);i||xa.set(e,i=[]),i.push(n)}}function _p(n,t,e=he){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=e,c=T=>s?T:pn(T)||s===!1||s===0?jn(T,1):jn(T);let u,h,f,d,g=!1,_=!1;if(Ue(n)?(h=()=>n.value,g=pn(n)):Ms(n)?(h=()=>c(n),g=!0):Nt(n)?(_=!0,g=n.some(T=>Ms(T)||pn(T)),h=()=>n.map(T=>{if(Ue(T))return T.value;if(Ms(T))return c(T);if(kt(T))return l?l(T,2):T()})):kt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){Qn();try{f()}finally{ti()}}const T=Oi;Oi=u;try{return l?l(n,3,[d]):n(d)}finally{Oi=T}}:h=Ln,t&&s){const T=h,P=s===!0?1/0:s;h=()=>jn(T(),P)}const m=Xd(),p=()=>{u.stop(),m&&m.active&&nc(m.effects,u)};if(r&&t){const T=t;t=(...P)=>{T(...P),p()}}let w=_?new Array(n.length).fill(wr):wr;const E=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(t){const P=u.run();if(s||g||(_?P.some((A,N)=>xi(A,w[N])):xi(P,w))){f&&f();const A=Oi;Oi=u;try{const N=[P,w===wr?void 0:_&&w[0]===wr?[]:w,d];w=P,l?l(t,3,N):t(...N)}finally{Oi=A}}}else u.run()};return o&&o(E),u=new Hh(h),u.scheduler=a?()=>a(E,!1):E,d=T=>gp(T,!1,u),f=u.onStop=()=>{const T=xa.get(u);if(T){if(l)l(T,4);else for(const P of T)P();xa.delete(u)}},t?i?E(!0):w=u.run():a?a(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function jn(n,t=1/0,e){if(t<=0||!ce(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ue(n))jn(n.value,t,e);else if(Nt(n))for(let i=0;i<n.length;i++)jn(n[i],t,e);else if(Ia(n)||vs(n))n.forEach(i=>{jn(i,t,e)});else if(Uh(n)){for(const i in n)jn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&jn(n[i],t,e)}return n}function _r(n,t,e,i){try{return i?n(...i):n()}catch(s){za(s,t,e)}}function Sn(n,t,e,i){if(kt(n)){const s=_r(n,t,e,i);return s&&Lh(s)&&s.catch(r=>{za(r,t,e)}),s}if(Nt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Sn(n[r],t,e,i));return s}}function za(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||he;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){Qn(),_r(r,null,10,[n,l,c]),ti();return}}vp(n,e,s,i,a)}function vp(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ve=[];let An=-1;const bs=[];let ui=null,ms=0;const nf=Promise.resolve();let ga=null;function sf(n){const t=ga||nf;return n?t.then(this?n.bind(this):n):t}function Mp(n){let t=An+1,e=Ve.length;for(;t<e;){const i=t+e>>>1,s=Ve[i],r=ar(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function dc(n){if(!(n.flags&1)){const t=ar(n),e=Ve[Ve.length-1];!e||!(n.flags&2)&&t>=ar(e)?Ve.push(n):Ve.splice(Mp(t),0,n),n.flags|=1,rf()}}function rf(){ga||(ga=nf.then(of))}function bp(n){Nt(n)?bs.push(...n):ui&&n.id===-1?ui.splice(ms+1,0,n):n.flags&1||(bs.push(n),n.flags|=1),rf()}function Xc(n,t,e=An+1){for(;e<Ve.length;e++){const i=Ve[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ve.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function af(n){if(bs.length){const t=[...new Set(bs)].sort((e,i)=>ar(e)-ar(i));if(bs.length=0,ui){ui.push(...t);return}for(ui=t,ms=0;ms<ui.length;ms++){const e=ui[ms];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ui=null,ms=0}}const ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function of(n){try{for(An=0;An<Ve.length;An++){const t=Ve[An];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),_r(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;An<Ve.length;An++){const t=Ve[An];t&&(t.flags&=-2)}An=-1,Ve.length=0,af(),ga=null,(Ve.length||bs.length)&&of()}}let hn=null,lf=null;function _a(n){const t=hn;return hn=n,lf=n&&n.type.__scopeId||null,t}function tl(n,t=hn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ba(-1);const r=_a(t);let a;try{a=n(...s)}finally{_a(r),i._d&&ba(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Sp(n,t){if(hn===null)return n;const e=Wa(hn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,a,o,l=he]=t[s];r&&(kt(r)&&(r={mounted:r,updated:r}),r.deep&&jn(a),i.push({dir:r,instance:e,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function wi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Qn(),Sn(l,e,8,[n.el,o,n,t]),ti())}}const yp=Symbol("_vte"),cf=n=>n.__isTeleport,Yn=Symbol("_leaveCb"),Rr=Symbol("_enterCb");function Ep(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pc(()=>{n.isMounted=!0}),mc(()=>{n.isUnmounting=!0}),n}const on=[Function,Array],uf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},hf=n=>{const t=n.subTree;return t.component?hf(t.component):t},Tp={name:"BaseTransition",props:uf,setup(n,{slots:t}){const e=zf(),i=Ep();return()=>{const s=t.default&&pf(t.default(),!0);if(!s||!s.length)return;const r=ff(s),a=Qt(n),{mode:o}=a;if(i.isLeaving)return io(r);const l=Yc(r);if(!l)return io(r);let c=el(l,a,i,e,h=>c=h);l.type!==He&&or(l,c);let u=e.subTree&&Yc(e.subTree);if(u&&u.type!==He&&!Bi(u,l)&&hf(e).type!==He){let h=el(u,a,i,e);if(or(u,h),o==="out-in"&&l.type!==He)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},io(r);o==="in-out"&&l.type!==He?h.delayLeave=(f,d,g)=>{const _=df(i,u);_[String(u.key)]=u,f[Yn]=()=>{d(),f[Yn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function ff(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==He){t=e;break}}return t}const Ap=Tp;function df(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function el(n,t,e,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:w,onAppearCancelled:E}=t,T=String(n.key),P=df(e,n),A=(b,v)=>{b&&Sn(b,i,9,v)},N=(b,v)=>{const L=v[1];A(b,v),Nt(b)?b.every(D=>D.length<=1)&&L():b.length<=1&&L()},H={mode:a,persisted:o,beforeEnter(b){let v=l;if(!e.isMounted)if(r)v=m||l;else return;b[Yn]&&b[Yn](!0);const L=P[T];L&&Bi(n,L)&&L.el[Yn]&&L.el[Yn](),A(v,[b])},enter(b){let v=c,L=u,D=h;if(!e.isMounted)if(r)v=p||c,L=w||u,D=E||h;else return;let I=!1;const z=b[Rr]=Q=>{I||(I=!0,Q?A(D,[b]):A(L,[b]),H.delayedLeave&&H.delayedLeave(),b[Rr]=void 0)};v?N(v,[b,z]):z()},leave(b,v){const L=String(n.key);if(b[Rr]&&b[Rr](!0),e.isUnmounting)return v();A(f,[b]);let D=!1;const I=b[Yn]=z=>{D||(D=!0,v(),z?A(_,[b]):A(g,[b]),b[Yn]=void 0,P[L]===n&&delete P[L])};P[L]=n,d?N(d,[b,I]):I()},clone(b){const v=el(b,t,e,i,s);return s&&s(v),v}};return H}function io(n){if(Va(n))return n=bi(n),n.children=null,n}function Yc(n){if(!Va(n))return cf(n.type)&&n.children?ff(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&kt(e.default))return e.default()}}function or(n,t){n.shapeFlag&6&&n.component?(n.transition=t,or(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function pf(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=e==null?a.key:String(e)+String(a.key!=null?a.key:r);a.type===vn?(a.patchFlag&128&&s++,i=i.concat(pf(a.children,t,o))):(t||a.type!==He)&&i.push(o!=null?bi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function mf(n,t){return kt(n)?we({name:n.name},t,{setup:n}):n}function xf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const va=new WeakMap;function tr(n,t,e,i,s=!1){if(Nt(n)){n.forEach((g,_)=>tr(g,t&&(Nt(t)?t[_]:t),e,i,s));return}if(er(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&tr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Wa(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=t&&t.r,u=o.refs===he?o.refs={}:o.refs,h=o.setupState,f=Qt(h),d=h===he?Dh:g=>te(f,g);if(c!=null&&c!==l){if(qc(t),be(c))u[c]=null,d(c)&&(h[c]=null);else if(Ue(c)){c.value=null;const g=t;g.k&&(u[g.k]=null)}}if(kt(l))_r(l,o,12,[a,u]);else{const g=be(l),_=Ue(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?h[l]:u[l]:l.value;if(s)Nt(p)&&nc(p,r);else if(Nt(p))p.includes(r)||p.push(r);else if(g)u[l]=[r],d(l)&&(h[l]=u[l]);else{const w=[r];l.value=w,n.k&&(u[n.k]=w)}}else g?(u[l]=a,d(l)&&(h[l]=a)):_&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const p=()=>{m(),va.delete(n)};p.id=-1,va.set(n,p),en(p,e)}else qc(n),m()}}}function qc(n){const t=va.get(n);t&&(t.flags|=8,va.delete(n))}Na().requestIdleCallback;Na().cancelIdleCallback;const er=n=>!!n.type.__asyncLoader,Va=n=>n.type.__isKeepAlive;function wp(n,t){gf(n,"a",t)}function Rp(n,t){gf(n,"da",t)}function gf(n,t,e=Ge){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ha(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Va(s.parent.vnode)&&Cp(i,t,e,s),s=s.parent}}function Cp(n,t,e,i){const s=Ha(t,n,i,!0);_f(()=>{nc(i[t],s)},e)}function Ha(n,t,e=Ge,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...a)=>{Qn();const o=vr(e),l=Sn(t,e,n,a);return o(),ti(),l});return i?s.unshift(r):s.push(r),r}}const ni=n=>(t,e=Ge)=>{(!cr||n==="sp")&&Ha(n,(...i)=>t(...i),e)},Pp=ni("bm"),pc=ni("m"),Dp=ni("bu"),Lp=ni("u"),mc=ni("bum"),_f=ni("um"),Ip=ni("sp"),Up=ni("rtg"),Np=ni("rtc");function Fp(n,t=Ge){Ha("ec",n,t)}const Op=Symbol.for("v-ndc");function Bp(n,t,e,i){let s;const r=e,a=Nt(n);if(a||be(n)){const o=a&&Ms(n);let l=!1,c=!1;o&&(l=!pn(n),c=Mi(n),n=Ba(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?ma(Re(n[u])):Re(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=t(o+1,o,void 0,r)}else if(ce(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>t(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const nl=n=>n?Vf(n)?Wa(n):nl(n.parent):null,nr=we(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nl(n.parent),$root:n=>nl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Mf(n),$forceUpdate:n=>n.f||(n.f=()=>{dc(n.update)}),$nextTick:n=>n.n||(n.n=sf.bind(n.proxy)),$watch:n=>am.bind(n)}),so=(n,t)=>n!==he&&!n.__isScriptSetup&&te(n,t),zp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(t[0]!=="$"){const d=a[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(so(i,t))return a[t]=1,i[t];if(s!==he&&te(s,t))return a[t]=2,s[t];if((c=n.propsOptions[0])&&te(c,t))return a[t]=3,r[t];if(e!==he&&te(e,t))return a[t]=4,e[t];il&&(a[t]=0)}}const u=nr[t];let h,f;if(u)return t==="$attrs"&&Ie(n.attrs,"get",""),u(n);if((h=o.__cssModules)&&(h=h[t]))return h;if(e!==he&&te(e,t))return a[t]=4,e[t];if(f=l.config.globalProperties,te(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return so(s,t)?(s[t]=e,!0):i!==he&&te(i,t)?(i[t]=e,!0):te(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r,type:a}},o){let l,c;return!!(e[o]||n!==he&&o[0]!=="$"&&te(n,o)||so(t,o)||(l=r[0])&&te(l,o)||te(i,o)||te(nr,o)||te(s.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:te(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function jc(n){return Nt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let il=!0;function Vp(n){const t=Mf(n),e=n.proxy,i=n.ctx;il=!1,t.beforeCreate&&Kc(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:E,unmounted:T,render:P,renderTracked:A,renderTriggered:N,errorCaptured:H,serverPrefetch:b,expose:v,inheritAttrs:L,components:D,directives:I,filters:z}=t;if(c&&Hp(c,i,null),a)for(const it in a){const X=a[it];kt(X)&&(i[it]=X.bind(e))}if(s){const it=s.call(e,e);ce(it)&&(n.data=uc(it))}if(il=!0,r)for(const it in r){const X=r[it],ht=kt(X)?X.bind(e,e):kt(X.get)?X.get.bind(e,e):Ln,pt=!kt(X)&&kt(X.set)?X.set.bind(e):Ln,Pt=wm({get:ht,set:pt});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:zt=>Pt.value=zt})}if(o)for(const it in o)vf(o[it],i,e,it);if(l){const it=kt(l)?l.call(e):l;Reflect.ownKeys(it).forEach(X=>{qp(X,it[X])})}u&&Kc(u,n,"c");function K(it,X){Nt(X)?X.forEach(ht=>it(ht.bind(e))):X&&it(X.bind(e))}if(K(Pp,h),K(pc,f),K(Dp,d),K(Lp,g),K(wp,_),K(Rp,m),K(Fp,H),K(Np,A),K(Up,N),K(mc,w),K(_f,T),K(Ip,b),Nt(v))if(v.length){const it=n.exposed||(n.exposed={});v.forEach(X=>{Object.defineProperty(it,X,{get:()=>e[X],set:ht=>e[X]=ht,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===Ln&&(n.render=P),L!=null&&(n.inheritAttrs=L),D&&(n.components=D),I&&(n.directives=I),b&&xf(n)}function Hp(n,t,e=Ln){Nt(n)&&(n=sl(n));for(const i in n){const s=n[i];let r;ce(s)?"default"in s?r=ra(s.from||i,s.default,!0):r=ra(s.from||i):r=ra(s),Ue(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[i]=r}}function Kc(n,t,e){Sn(Nt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function vf(n,t,e,i){let s=i.includes(".")?If(e,i):()=>e[i];if(be(n)){const r=t[n];kt(r)&&ys(s,r)}else if(kt(n))ys(s,n.bind(e));else if(ce(n))if(Nt(n))n.forEach(r=>vf(r,t,e,i));else{const r=kt(n.handler)?n.handler.bind(e):t[n.handler];kt(r)&&ys(s,r,n)}}function Mf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Ma(l,c,a,!0)),Ma(l,t,a)),ce(t)&&r.set(t,l),l}function Ma(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Ma(n,r,e,!0),s&&s.forEach(a=>Ma(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=Gp[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const Gp={data:$c,props:Zc,emits:Zc,methods:qs,computed:qs,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:qs,directives:qs,watch:Wp,provide:$c,inject:kp};function $c(n,t){return t?n?function(){return we(kt(n)?n.call(this,this):n,kt(t)?t.call(this,this):t)}:t:n}function kp(n,t){return qs(sl(n),sl(t))}function sl(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Be(n,t){return n?[...new Set([].concat(n,t))]:t}function qs(n,t){return n?we(Object.create(null),n,t):t}function Zc(n,t){return n?Nt(n)&&Nt(t)?[...new Set([...n,...t])]:we(Object.create(null),jc(n),jc(t??{})):t}function Wp(n,t){if(!n)return t;if(!t)return n;const e=we(Object.create(null),n);for(const i in t)e[i]=Be(n[i],t[i]);return e}function bf(){return{app:null,config:{isNativeTag:Dh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xp=0;function Yp(n,t){return function(i,s=null){kt(i)||(i=we({},i)),s!=null&&!ce(s)&&(s=null);const r=bf(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Xp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Cm,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&kt(u.install)?(a.add(u),u.install(c,...h)):kt(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||ke(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Wa(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Sn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Ss;Ss=c;try{return u()}finally{Ss=h}}};return c}}let Ss=null;function qp(n,t){if(Ge){let e=Ge.provides;const i=Ge.parent&&Ge.parent.provides;i===e&&(e=Ge.provides=Object.create(i)),e[n]=t}}function ra(n,t,e=!1){const i=zf();if(i||Ss){let s=Ss?Ss._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&kt(t)?t.call(i&&i.proxy):t}}const Sf={},yf=()=>Object.create(Sf),Ef=n=>Object.getPrototypeOf(n)===Sf;function jp(n,t,e,i=!1){const s={},r=yf();n.propsDefaults=Object.create(null),Tf(n,t,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);e?n.props=i?s:up(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Kp(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=Qt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ga(n.emitsOptions,f))continue;const d=t[f];if(l)if(te(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=vi(f);s[g]=rl(l,o,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Tf(n,t,s,r)&&(c=!0);let u;for(const h in o)(!t||!te(t,h)&&((u=Xi(h))===h||!te(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=rl(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!t||!te(t,h))&&(delete r[h],c=!0)}c&&qn(n.attrs,"set","")}function Tf(n,t,e,i){const[s,r]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(Zs(l))continue;const c=t[l];let u;s&&te(s,u=vi(l))?!r||!r.includes(u)?e[u]=c:(o||(o={}))[u]=c:Ga(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=Qt(e),c=o||he;for(let u=0;u<r.length;u++){const h=r[u];e[h]=rl(s,l,h,c[h],n,!te(c,h))}}return a}function rl(n,t,e,i,s,r){const a=n[e];if(a!=null){const o=te(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&kt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=vr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Xi(e))&&(i=!0))}return i}const $p=new WeakMap;function Af(n,t,e=!1){const i=e?$p:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!kt(n)){const u=h=>{l=!0;const[f,d]=Af(h,t,!0);we(a,f),d&&o.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ce(n)&&i.set(n,_s),_s;if(Nt(r))for(let u=0;u<r.length;u++){const h=vi(r[u]);Jc(h)&&(a[h]=he)}else if(r)for(const u in r){const h=vi(u);if(Jc(h)){const f=r[u],d=a[h]=Nt(f)||kt(f)?{type:f}:we({},f),g=d.type;let _=!1,m=!0;if(Nt(g))for(let p=0;p<g.length;++p){const w=g[p],E=kt(w)&&w.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=kt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||te(d,"default"))&&o.push(h)}}const c=[a,o];return ce(n)&&i.set(n,c),c}function Jc(n){return n[0]!=="$"&&!Zs(n)}const xc=n=>n==="_"||n==="_ctx"||n==="$stable",gc=n=>Nt(n)?n.map(wn):[wn(n)],Zp=(n,t,e)=>{if(t._n)return t;const i=tl((...s)=>gc(t(...s)),e);return i._c=!1,i},wf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(xc(s))continue;const r=n[s];if(kt(r))t[s]=Zp(s,r,i);else if(r!=null){const a=gc(r);t[s]=()=>a}}},Rf=(n,t)=>{const e=gc(t);n.slots.default=()=>e},Cf=(n,t,e)=>{for(const i in t)(e||!xc(i))&&(n[i]=t[i])},Jp=(n,t,e)=>{const i=n.slots=yf();if(n.vnode.shapeFlag&32){const s=t._;s?(Cf(i,t,e),e&&Fh(i,"_",s,!0)):wf(t,i)}else t&&Rf(n,t)},Qp=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,a=he;if(i.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:Cf(s,t,e):(r=!t.$stable,wf(t,s)),a=t}else t&&(Rf(n,t),a={default:1});if(r)for(const o in s)!xc(o)&&a[o]==null&&delete s[o]},en=pm;function tm(n){return em(n)}function em(n,t){const e=Na();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Ln,insertStaticContent:g}=n,_=(R,C,k,y=null,Z=null,J=null,ot=void 0,j=null,rt=!!C.dynamicChildren)=>{if(R===C)return;R&&!Bi(R,C)&&(y=st(R),zt(R,Z,J,!0),R=null),C.patchFlag===-2&&(rt=!1,C.dynamicChildren=null);const{type:W,ref:lt,shapeFlag:M}=C;switch(W){case ka:m(R,C,k,y);break;case He:p(R,C,k,y);break;case ao:R==null&&w(C,k,y,ot);break;case vn:D(R,C,k,y,Z,J,ot,j,rt);break;default:M&1?P(R,C,k,y,Z,J,ot,j,rt):M&6?I(R,C,k,y,Z,J,ot,j,rt):(M&64||M&128)&&W.process(R,C,k,y,Z,J,ot,j,rt,Dt)}lt!=null&&Z?tr(lt,R&&R.ref,J,C||R,!C):lt==null&&R&&R.ref!=null&&tr(R.ref,null,J,R,!0)},m=(R,C,k,y)=>{if(R==null)i(C.el=o(C.children),k,y);else{const Z=C.el=R.el;C.children!==R.children&&c(Z,C.children)}},p=(R,C,k,y)=>{R==null?i(C.el=l(C.children||""),k,y):C.el=R.el},w=(R,C,k,y)=>{[R.el,R.anchor]=g(R.children,C,k,y,R.el,R.anchor)},E=({el:R,anchor:C},k,y)=>{let Z;for(;R&&R!==C;)Z=f(R),i(R,k,y),R=Z;i(C,k,y)},T=({el:R,anchor:C})=>{let k;for(;R&&R!==C;)k=f(R),s(R),R=k;s(C)},P=(R,C,k,y,Z,J,ot,j,rt)=>{if(C.type==="svg"?ot="svg":C.type==="math"&&(ot="mathml"),R==null)A(C,k,y,Z,J,ot,j,rt);else{const W=R.el&&R.el._isVueCE?R.el:null;try{W&&W._beginPatch(),b(R,C,Z,J,ot,j,rt)}finally{W&&W._endPatch()}}},A=(R,C,k,y,Z,J,ot,j)=>{let rt,W;const{props:lt,shapeFlag:M,transition:x,dirs:F}=R;if(rt=R.el=a(R.type,J,lt&&lt.is,lt),M&8?u(rt,R.children):M&16&&H(R.children,rt,null,y,Z,ro(R,J),ot,j),F&&wi(R,null,y,"created"),N(rt,R,R.scopeId,ot,y),lt){for(const tt in lt)tt!=="value"&&!Zs(tt)&&r(rt,tt,null,lt[tt],J,y);"value"in lt&&r(rt,"value",null,lt.value,J),(W=lt.onVnodeBeforeMount)&&Tn(W,y,R)}F&&wi(R,null,y,"beforeMount");const Y=nm(Z,x);Y&&x.beforeEnter(rt),i(rt,C,k),((W=lt&&lt.onVnodeMounted)||Y||F)&&en(()=>{W&&Tn(W,y,R),Y&&x.enter(rt),F&&wi(R,null,y,"mounted")},Z)},N=(R,C,k,y,Z)=>{if(k&&d(R,k),y)for(let J=0;J<y.length;J++)d(R,y[J]);if(Z){let J=Z.subTree;if(C===J||Nf(J.type)&&(J.ssContent===C||J.ssFallback===C)){const ot=Z.vnode;N(R,ot,ot.scopeId,ot.slotScopeIds,Z.parent)}}},H=(R,C,k,y,Z,J,ot,j,rt=0)=>{for(let W=rt;W<R.length;W++){const lt=R[W]=j?fi(R[W]):wn(R[W]);_(null,lt,C,k,y,Z,J,ot,j)}},b=(R,C,k,y,Z,J,ot)=>{const j=C.el=R.el;let{patchFlag:rt,dynamicChildren:W,dirs:lt}=C;rt|=R.patchFlag&16;const M=R.props||he,x=C.props||he;let F;if(k&&Ri(k,!1),(F=x.onVnodeBeforeUpdate)&&Tn(F,k,C,R),lt&&wi(C,R,k,"beforeUpdate"),k&&Ri(k,!0),(M.innerHTML&&x.innerHTML==null||M.textContent&&x.textContent==null)&&u(j,""),W?v(R.dynamicChildren,W,j,k,y,ro(C,Z),J):ot||X(R,C,j,null,k,y,ro(C,Z),J,!1),rt>0){if(rt&16)L(j,M,x,k,Z);else if(rt&2&&M.class!==x.class&&r(j,"class",null,x.class,Z),rt&4&&r(j,"style",M.style,x.style,Z),rt&8){const Y=C.dynamicProps;for(let tt=0;tt<Y.length;tt++){const G=Y[tt],Mt=M[G],ut=x[G];(ut!==Mt||G==="value")&&r(j,G,Mt,ut,Z,k)}}rt&1&&R.children!==C.children&&u(j,C.children)}else!ot&&W==null&&L(j,M,x,k,Z);((F=x.onVnodeUpdated)||lt)&&en(()=>{F&&Tn(F,k,C,R),lt&&wi(C,R,k,"updated")},y)},v=(R,C,k,y,Z,J,ot)=>{for(let j=0;j<C.length;j++){const rt=R[j],W=C[j],lt=rt.el&&(rt.type===vn||!Bi(rt,W)||rt.shapeFlag&198)?h(rt.el):k;_(rt,W,lt,null,y,Z,J,ot,!0)}},L=(R,C,k,y,Z)=>{if(C!==k){if(C!==he)for(const J in C)!Zs(J)&&!(J in k)&&r(R,J,C[J],null,Z,y);for(const J in k){if(Zs(J))continue;const ot=k[J],j=C[J];ot!==j&&J!=="value"&&r(R,J,j,ot,Z,y)}"value"in k&&r(R,"value",C.value,k.value,Z)}},D=(R,C,k,y,Z,J,ot,j,rt)=>{const W=C.el=R?R.el:o(""),lt=C.anchor=R?R.anchor:o("");let{patchFlag:M,dynamicChildren:x,slotScopeIds:F}=C;F&&(j=j?j.concat(F):F),R==null?(i(W,k,y),i(lt,k,y),H(C.children||[],k,lt,Z,J,ot,j,rt)):M>0&&M&64&&x&&R.dynamicChildren?(v(R.dynamicChildren,x,k,Z,J,ot,j),(C.key!=null||Z&&C===Z.subTree)&&Pf(R,C,!0)):X(R,C,k,lt,Z,J,ot,j,rt)},I=(R,C,k,y,Z,J,ot,j,rt)=>{C.slotScopeIds=j,R==null?C.shapeFlag&512?Z.ctx.activate(C,k,y,ot,rt):z(C,k,y,Z,J,ot,rt):Q(R,C,rt)},z=(R,C,k,y,Z,J,ot)=>{const j=R.component=bm(R,y,Z);if(Va(R)&&(j.ctx.renderer=Dt),Sm(j,!1,ot),j.asyncDep){if(Z&&Z.registerDep(j,K,ot),!R.el){const rt=j.subTree=ke(He);p(null,rt,C,k),R.placeholder=rt.el}}else K(j,R,C,k,Z,J,ot)},Q=(R,C,k)=>{const y=C.component=R.component;if(fm(R,C,k))if(y.asyncDep&&!y.asyncResolved){it(y,C,k);return}else y.next=C,y.update();else C.el=R.el,y.vnode=C},K=(R,C,k,y,Z,J,ot)=>{const j=()=>{if(R.isMounted){let{next:M,bu:x,u:F,parent:Y,vnode:tt}=R;{const St=Df(R);if(St){M&&(M.el=tt.el,it(R,M,ot)),St.asyncDep.then(()=>{R.isUnmounted||j()});return}}let G=M,Mt;Ri(R,!1),M?(M.el=tt.el,it(R,M,ot)):M=tt,x&&ia(x),(Mt=M.props&&M.props.onVnodeBeforeUpdate)&&Tn(Mt,Y,M,tt),Ri(R,!0);const ut=tu(R),Tt=R.subTree;R.subTree=ut,_(Tt,ut,h(Tt.el),st(Tt),R,Z,J),M.el=ut.el,G===null&&dm(R,ut.el),F&&en(F,Z),(Mt=M.props&&M.props.onVnodeUpdated)&&en(()=>Tn(Mt,Y,M,tt),Z)}else{let M;const{el:x,props:F}=C,{bm:Y,m:tt,parent:G,root:Mt,type:ut}=R,Tt=er(C);Ri(R,!1),Y&&ia(Y),!Tt&&(M=F&&F.onVnodeBeforeMount)&&Tn(M,G,C),Ri(R,!0);{Mt.ce&&Mt.ce._def.shadowRoot!==!1&&Mt.ce._injectChildStyle(ut);const St=R.subTree=tu(R);_(null,St,k,y,R,Z,J),C.el=St.el}if(tt&&en(tt,Z),!Tt&&(M=F&&F.onVnodeMounted)){const St=C;en(()=>Tn(M,G,St),Z)}(C.shapeFlag&256||G&&er(G.vnode)&&G.vnode.shapeFlag&256)&&R.a&&en(R.a,Z),R.isMounted=!0,C=k=y=null}};R.scope.on();const rt=R.effect=new Hh(j);R.scope.off();const W=R.update=rt.run.bind(rt),lt=R.job=rt.runIfDirty.bind(rt);lt.i=R,lt.id=R.uid,rt.scheduler=()=>dc(lt),Ri(R,!0),W()},it=(R,C,k)=>{C.component=R;const y=R.vnode.props;R.vnode=C,R.next=null,Kp(R,C.props,y,k),Qp(R,C.children,k),Qn(),Xc(R),ti()},X=(R,C,k,y,Z,J,ot,j,rt=!1)=>{const W=R&&R.children,lt=R?R.shapeFlag:0,M=C.children,{patchFlag:x,shapeFlag:F}=C;if(x>0){if(x&128){pt(W,M,k,y,Z,J,ot,j,rt);return}else if(x&256){ht(W,M,k,y,Z,J,ot,j,rt);return}}F&8?(lt&16&&et(W,Z,J),M!==W&&u(k,M)):lt&16?F&16?pt(W,M,k,y,Z,J,ot,j,rt):et(W,Z,J,!0):(lt&8&&u(k,""),F&16&&H(M,k,y,Z,J,ot,j,rt))},ht=(R,C,k,y,Z,J,ot,j,rt)=>{R=R||_s,C=C||_s;const W=R.length,lt=C.length,M=Math.min(W,lt);let x;for(x=0;x<M;x++){const F=C[x]=rt?fi(C[x]):wn(C[x]);_(R[x],F,k,null,Z,J,ot,j,rt)}W>lt?et(R,Z,J,!0,!1,M):H(C,k,y,Z,J,ot,j,rt,M)},pt=(R,C,k,y,Z,J,ot,j,rt)=>{let W=0;const lt=C.length;let M=R.length-1,x=lt-1;for(;W<=M&&W<=x;){const F=R[W],Y=C[W]=rt?fi(C[W]):wn(C[W]);if(Bi(F,Y))_(F,Y,k,null,Z,J,ot,j,rt);else break;W++}for(;W<=M&&W<=x;){const F=R[M],Y=C[x]=rt?fi(C[x]):wn(C[x]);if(Bi(F,Y))_(F,Y,k,null,Z,J,ot,j,rt);else break;M--,x--}if(W>M){if(W<=x){const F=x+1,Y=F<lt?C[F].el:y;for(;W<=x;)_(null,C[W]=rt?fi(C[W]):wn(C[W]),k,Y,Z,J,ot,j,rt),W++}}else if(W>x)for(;W<=M;)zt(R[W],Z,J,!0),W++;else{const F=W,Y=W,tt=new Map;for(W=Y;W<=x;W++){const At=C[W]=rt?fi(C[W]):wn(C[W]);At.key!=null&&tt.set(At.key,W)}let G,Mt=0;const ut=x-Y+1;let Tt=!1,St=0;const at=new Array(ut);for(W=0;W<ut;W++)at[W]=0;for(W=F;W<=M;W++){const At=R[W];if(Mt>=ut){zt(At,Z,J,!0);continue}let wt;if(At.key!=null)wt=tt.get(At.key);else for(G=Y;G<=x;G++)if(at[G-Y]===0&&Bi(At,C[G])){wt=G;break}wt===void 0?zt(At,Z,J,!0):(at[wt-Y]=W+1,wt>=St?St=wt:Tt=!0,_(At,C[wt],k,null,Z,J,ot,j,rt),Mt++)}const ft=Tt?im(at):_s;for(G=ft.length-1,W=ut-1;W>=0;W--){const At=Y+W,wt=C[At],vt=C[At+1],Ft=At+1<lt?vt.el||vt.placeholder:y;at[W]===0?_(null,wt,k,Ft,Z,J,ot,j,rt):Tt&&(G<0||W!==ft[G]?Pt(wt,k,Ft,2):G--)}}},Pt=(R,C,k,y,Z=null)=>{const{el:J,type:ot,transition:j,children:rt,shapeFlag:W}=R;if(W&6){Pt(R.component.subTree,C,k,y);return}if(W&128){R.suspense.move(C,k,y);return}if(W&64){ot.move(R,C,k,Dt);return}if(ot===vn){i(J,C,k);for(let M=0;M<rt.length;M++)Pt(rt[M],C,k,y);i(R.anchor,C,k);return}if(ot===ao){E(R,C,k);return}if(y!==2&&W&1&&j)if(y===0)j.beforeEnter(J),i(J,C,k),en(()=>j.enter(J),Z);else{const{leave:M,delayLeave:x,afterLeave:F}=j,Y=()=>{R.ctx.isUnmounted?s(J):i(J,C,k)},tt=()=>{J._isLeaving&&J[Yn](!0),M(J,()=>{Y(),F&&F()})};x?x(J,Y,tt):tt()}else i(J,C,k)},zt=(R,C,k,y=!1,Z=!1)=>{const{type:J,props:ot,ref:j,children:rt,dynamicChildren:W,shapeFlag:lt,patchFlag:M,dirs:x,cacheIndex:F}=R;if(M===-2&&(Z=!1),j!=null&&(Qn(),tr(j,null,k,R,!0),ti()),F!=null&&(C.renderCache[F]=void 0),lt&256){C.ctx.deactivate(R);return}const Y=lt&1&&x,tt=!er(R);let G;if(tt&&(G=ot&&ot.onVnodeBeforeUnmount)&&Tn(G,C,R),lt&6)ne(R.component,k,y);else{if(lt&128){R.suspense.unmount(k,y);return}Y&&wi(R,null,C,"beforeUnmount"),lt&64?R.type.remove(R,C,k,Dt,y):W&&!W.hasOnce&&(J!==vn||M>0&&M&64)?et(W,C,k,!1,!0):(J===vn&&M&384||!Z&&lt&16)&&et(rt,C,k),y&&Jt(R)}(tt&&(G=ot&&ot.onVnodeUnmounted)||Y)&&en(()=>{G&&Tn(G,C,R),Y&&wi(R,null,C,"unmounted")},k)},Jt=R=>{const{type:C,el:k,anchor:y,transition:Z}=R;if(C===vn){ee(k,y);return}if(C===ao){T(R);return}const J=()=>{s(k),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(R.shapeFlag&1&&Z&&!Z.persisted){const{leave:ot,delayLeave:j}=Z,rt=()=>ot(k,J);j?j(R.el,J,rt):rt()}else J()},ee=(R,C)=>{let k;for(;R!==C;)k=f(R),s(R),R=k;s(C)},ne=(R,C,k)=>{const{bum:y,scope:Z,job:J,subTree:ot,um:j,m:rt,a:W}=R;Qc(rt),Qc(W),y&&ia(y),Z.stop(),J&&(J.flags|=8,zt(ot,R,C,k)),j&&en(j,C),en(()=>{R.isUnmounted=!0},C)},et=(R,C,k,y=!1,Z=!1,J=0)=>{for(let ot=J;ot<R.length;ot++)zt(R[ot],C,k,y,Z)},st=R=>{if(R.shapeFlag&6)return st(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const C=f(R.anchor||R.el),k=C&&C[yp];return k?f(k):C};let yt=!1;const Vt=(R,C,k)=>{R==null?C._vnode&&zt(C._vnode,null,null,!0):_(C._vnode||null,R,C,null,null,null,k),C._vnode=R,yt||(yt=!0,Xc(),af(),yt=!1)},Dt={p:_,um:zt,m:Pt,r:Jt,mt:z,mc:H,pc:X,pbc:v,n:st,o:n};return{render:Vt,hydrate:void 0,createApp:Yp(Vt)}}function ro({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ri({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function nm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Pf(n,t,e=!1){const i=n.children,s=t.children;if(Nt(i)&&Nt(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=fi(s[r]),o.el=a.el),!e&&o.patchFlag!==-2&&Pf(a,o)),o.type===ka&&o.patchFlag!==-1&&(o.el=a.el),o.type===He&&!o.el&&(o.el=a.el)}}function im(n){const t=n.slice(),e=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,n[e[o]]<c?r=o+1:a=o;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}function Df(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Df(t)}function Qc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const sm=Symbol.for("v-scx"),rm=()=>ra(sm);function ys(n,t,e){return Lf(n,t,e)}function Lf(n,t,e=he){const{immediate:i,deep:s,flush:r,once:a}=e,o=we({},e),l=t&&i||!t&&r!=="post";let c;if(cr){if(r==="sync"){const d=rm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Ln,d.resume=Ln,d.pause=Ln,d}}const u=Ge;o.call=(d,g,_)=>Sn(d,u,g,_);let h=!1;r==="post"?o.scheduler=d=>{en(d,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(d,g)=>{g?d():dc(d)}),o.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=_p(n,t,o);return cr&&(c?c.push(f):l&&f()),f}function am(n,t,e){const i=this.proxy,s=be(n)?n.includes(".")?If(i,n):()=>i[n]:n.bind(i,i);let r;kt(t)?r=t:(r=t.handler,e=t);const a=vr(this),o=Lf(s,r.bind(i),e);return a(),o}function If(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const om=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${vi(t)}Modifiers`]||n[`${Xi(t)}Modifiers`];function lm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||he;let s=e;const r=t.startsWith("update:"),a=r&&om(i,t.slice(7));a&&(a.trim&&(s=e.map(u=>be(u)?u.trim():u)),a.number&&(s=e.map(Oh)));let o,l=i[o=Ja(t)]||i[o=Ja(vi(t))];!l&&r&&(l=i[o=Ja(Xi(t))]),l&&Sn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Sn(c,n,6,s)}}const cm=new WeakMap;function Uf(n,t,e=!1){const i=e?cm:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!kt(n)){const l=c=>{const u=Uf(c,t,!0);u&&(o=!0,we(a,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(ce(n)&&i.set(n,null),null):(Nt(r)?r.forEach(l=>a[l]=null):we(a,r),ce(n)&&i.set(n,a),a)}function Ga(n,t){return!n||!La(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(n,t[0].toLowerCase()+t.slice(1))||te(n,Xi(t))||te(n,t))}function tu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=_a(n);let p,w;try{if(e.shapeFlag&4){const T=s||i,P=T;p=wn(c.call(P,T,u,h,d,f,g)),w=o}else{const T=t;p=wn(T.length>1?T(h,{attrs:o,slots:a,emit:l}):T(h,null)),w=t.props?o:um(o)}}catch(T){ir.length=0,za(T,n,1),p=ke(He)}let E=p;if(w&&_!==!1){const T=Object.keys(w),{shapeFlag:P}=E;T.length&&P&7&&(r&&T.some(ec)&&(w=hm(w,r)),E=bi(E,w,!1,!0))}return e.dirs&&(E=bi(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(e.dirs):e.dirs),e.transition&&or(E,e.transition),p=E,_a(m),p}const um=n=>{let t;for(const e in n)(e==="class"||e==="style"||La(e))&&((t||(t={}))[e]=n[e]);return t},hm=(n,t)=>{const e={};for(const i in n)(!ec(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function fm(n,t,e){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?eu(i,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(a[f]!==i[f]&&!Ga(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?eu(i,a,c):!0:!!a;return!1}function eu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Ga(e,r))return!0}return!1}function dm({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Nf=n=>n.__isSuspense;function pm(n,t){t&&t.pendingBranch?Nt(n)?t.effects.push(...n):t.effects.push(n):bp(n)}const vn=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),ir=[];let sn=null;function hi(n=!1){ir.push(sn=n?null:[])}function mm(){ir.pop(),sn=ir[ir.length-1]||null}let lr=1;function ba(n,t=!1){lr+=n,n<0&&sn&&t&&(sn.hasOnce=!0)}function Ff(n){return n.dynamicChildren=lr>0?sn||_s:null,mm(),lr>0&&sn&&sn.push(n),n}function Ki(n,t,e,i,s,r){return Ff(me(n,t,e,i,s,r,!0))}function Of(n,t,e,i,s){return Ff(ke(n,t,e,i,s,!0))}function Sa(n){return n?n.__v_isVNode===!0:!1}function Bi(n,t){return n.type===t.type&&n.key===t.key}const Bf=({key:n})=>n??null,aa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?be(n)||Ue(n)||kt(n)?{i:hn,r:n,k:t,f:!!e}:n:null);function me(n,t=null,e=null,i=0,s=null,r=n===vn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Bf(t),ref:t&&aa(t),scopeId:lf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:hn};return o?(_c(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=be(e)?8:16),lr>0&&!a&&sn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&sn.push(l),l}const ke=xm;function xm(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Op)&&(n=He),Sa(n)){const o=bi(n,t,!0);return e&&_c(o,e),lr>0&&!r&&sn&&(o.shapeFlag&6?sn[sn.indexOf(n)]=o:sn.push(o)),o.patchFlag=-2,o}if(Am(n)&&(n=n.__vccOpts),t){t=gm(t);let{class:o,style:l}=t;o&&!be(o)&&(t.class=Fa(o)),ce(l)&&(fc(l)&&!Nt(l)&&(l=we({},l)),t.style=sc(l))}const a=be(n)?1:Nf(n)?128:cf(n)?64:ce(n)?4:kt(n)?2:0;return me(n,t,e,i,s,a,r,!0)}function gm(n){return n?fc(n)||Ef(n)?we({},n):n:null}function bi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=t?_m(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Bf(c),ref:t&&t.ref?e&&r?Nt(r)?r.concat(aa(t)):[r,aa(t)]:aa(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==vn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&bi(n.ssContent),ssFallback:n.ssFallback&&bi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&or(u,l.clone(u)),u}function js(n=" ",t=0){return ke(ka,null,n,t)}function oo(n="",t=!1){return t?(hi(),Of(He,null,n)):ke(He,null,n)}function wn(n){return n==null||typeof n=="boolean"?ke(He):Nt(n)?ke(vn,null,n.slice()):Sa(n)?fi(n):ke(ka,null,String(n))}function fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:bi(n)}function _c(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Nt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),_c(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Ef(t)?t._ctx=hn:s===3&&hn&&(hn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else kt(t)?(t={default:t,_ctx:hn},e=32):(t=String(t),i&64?(e=16,t=[js(t)]):e=8);n.children=t,n.shapeFlag|=e}function _m(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Fa([t.class,i.class]));else if(s==="style")t.style=sc([t.style,i.style]);else if(La(s)){const r=t[s],a=i[s];a&&r!==a&&!(Nt(r)&&r.includes(a))&&(t[s]=r?[].concat(r,a):a)}else s!==""&&(t[s]=i[s])}return t}function Tn(n,t,e,i=null){Sn(n,t,7,[e,i])}const vm=bf();let Mm=0;function bm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||vm,r={uid:Mm++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Af(i,s),emitsOptions:Uf(i,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:i.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=lm.bind(null,r),n.ce&&n.ce(r),r}let Ge=null;const zf=()=>Ge||hn;let ya,al;{const n=Na(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};ya=t("__VUE_INSTANCE_SETTERS__",e=>Ge=e),al=t("__VUE_SSR_SETTERS__",e=>cr=e)}const vr=n=>{const t=Ge;return ya(n),n.scope.on(),()=>{n.scope.off(),ya(t)}},nu=()=>{Ge&&Ge.scope.off(),ya(null)};function Vf(n){return n.vnode.shapeFlag&4}let cr=!1;function Sm(n,t=!1,e=!1){t&&al(t);const{props:i,children:s}=n.vnode,r=Vf(n);jp(n,i,r,t),Jp(n,s,e||t);const a=r?ym(n,t):void 0;return t&&al(!1),a}function ym(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zp);const{setup:i}=e;if(i){Qn();const s=n.setupContext=i.length>1?Tm(n):null,r=vr(n),a=_r(i,n,0,[n.props,s]),o=Lh(a);if(ti(),r(),(o||n.sp)&&!er(n)&&xf(n),o){if(a.then(nu,nu),t)return a.then(l=>{iu(n,l)}).catch(l=>{za(l,n,0)});n.asyncDep=a}else iu(n,a)}else Hf(n)}function iu(n,t,e){kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ce(t)&&(n.setupState=ef(t)),Hf(n)}function Hf(n,t,e){const i=n.type;n.render||(n.render=i.render||Ln);{const s=vr(n);Qn();try{Vp(n)}finally{ti(),s()}}}const Em={get(n,t){return Ie(n,"get",""),n[t]}};function Tm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Em),slots:n.slots,emit:n.emit,expose:t}}function Wa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ef(hp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in nr)return nr[e](n)},has(t,e){return e in t||e in nr}})):n.proxy}function Am(n){return kt(n)&&"__vccOpts"in n}const wm=(n,t)=>xp(n,t,cr);function Rm(n,t,e){try{ba(-1);const i=arguments.length;return i===2?ce(t)&&!Nt(t)?Sa(t)?ke(n,null,[t]):ke(n,t):ke(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Sa(e)&&(e=[e]),ke(n,t,e))}finally{ba(1)}}const Cm="3.5.24";let ol;const su=typeof window<"u"&&window.trustedTypes;if(su)try{ol=su.createPolicy("vue",{createHTML:n=>n})}catch{}const Gf=ol?n=>ol.createHTML(n):n=>n,Pm="http://www.w3.org/2000/svg",Dm="http://www.w3.org/1998/Math/MathML",Xn=typeof document<"u"?document:null,ru=Xn&&Xn.createElement("template"),Lm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Xn.createElementNS(Pm,n):t==="mathml"?Xn.createElementNS(Dm,n):e?Xn.createElement(n,{is:e}):Xn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Xn.createTextNode(n),createComment:n=>Xn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Xn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{ru.innerHTML=Gf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=ru.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},ii="transition",Fs="animation",ur=Symbol("_vtc"),kf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Im=we({},uf,kf),Um=n=>(n.displayName="Transition",n.props=Im,n),au=Um((n,{slots:t})=>Rm(Ap,Nm(n),t)),Ci=(n,t=[])=>{Nt(n)?n.forEach(e=>e(...t)):n&&n(...t)},ou=n=>n?Nt(n)?n.some(t=>t.length>1):n.length>1:!1;function Nm(n){const t={};for(const D in n)D in kf||(t[D]=n[D]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:a=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=Fm(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:w,onEnterCancelled:E,onLeave:T,onLeaveCancelled:P,onBeforeAppear:A=p,onAppear:N=w,onAppearCancelled:H=E}=t,b=(D,I,z,Q)=>{D._enterCancelled=Q,Pi(D,I?u:o),Pi(D,I?c:a),z&&z()},v=(D,I)=>{D._isLeaving=!1,Pi(D,h),Pi(D,d),Pi(D,f),I&&I()},L=D=>(I,z)=>{const Q=D?N:w,K=()=>b(I,D,z);Ci(Q,[I,K]),lu(()=>{Pi(I,D?l:r),On(I,D?u:o),ou(Q)||cu(I,i,_,K)})};return we(t,{onBeforeEnter(D){Ci(p,[D]),On(D,r),On(D,a)},onBeforeAppear(D){Ci(A,[D]),On(D,l),On(D,c)},onEnter:L(!1),onAppear:L(!0),onLeave(D,I){D._isLeaving=!0;const z=()=>v(D,I);On(D,h),D._enterCancelled?(On(D,f),fu(D)):(fu(D),On(D,f)),lu(()=>{D._isLeaving&&(Pi(D,h),On(D,d),ou(T)||cu(D,i,m,z))}),Ci(T,[D,z])},onEnterCancelled(D){b(D,!1,void 0,!0),Ci(E,[D])},onAppearCancelled(D){b(D,!0,void 0,!0),Ci(H,[D])},onLeaveCancelled(D){v(D),Ci(P,[D])}})}function Fm(n){if(n==null)return null;if(ce(n))return[lo(n.enter),lo(n.leave)];{const t=lo(n);return[t,t]}}function lo(n){return Nd(n)}function On(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[ur]||(n[ur]=new Set)).add(t)}function Pi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[ur];e&&(e.delete(t),e.size||(n[ur]=void 0))}function lu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Om=0;function cu(n,t,e,i){const s=n._endId=++Om,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:a,timeout:o,propCount:l}=Bm(n,t);if(!a)return i();const c=a+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},o+1),n.addEventListener(c,f)}function Bm(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${ii}Delay`),r=i(`${ii}Duration`),a=uu(s,r),o=i(`${Fs}Delay`),l=i(`${Fs}Duration`),c=uu(o,l);let u=null,h=0,f=0;t===ii?a>0&&(u=ii,h=a,f=r.length):t===Fs?c>0&&(u=Fs,h=c,f=l.length):(h=Math.max(a,c),u=h>0?a>c?ii:Fs:null,f=u?u===ii?r.length:l.length:0);const d=u===ii&&/\b(?:transform|all)(?:,|$)/.test(i(`${ii}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function uu(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>hu(e)+hu(n[i])))}function hu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function fu(n){return(n?n.ownerDocument:document).body.offsetHeight}function zm(n,t,e){const i=n[ur];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const du=Symbol("_vod"),Vm=Symbol("_vsh"),Hm=Symbol(""),Gm=/(?:^|;)\s*display\s*:/;function km(n,t,e){const i=n.style,s=be(e);let r=!1;if(e&&!s){if(t)if(be(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&oa(i,o,"")}else for(const a in t)e[a]==null&&oa(i,a,"");for(const a in e)a==="display"&&(r=!0),oa(i,a,e[a])}else if(s){if(t!==e){const a=i[Hm];a&&(e+=";"+a),i.cssText=e,r=Gm.test(e)}}else t&&n.removeAttribute("style");du in n&&(n[du]=r?i.display:"",n[Vm]&&(i.display="none"))}const pu=/\s*!important$/;function oa(n,t,e){if(Nt(e))e.forEach(i=>oa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Wm(n,t);pu.test(e)?n.setProperty(Xi(i),e.replace(pu,""),"important"):n[i]=e}}const mu=["Webkit","Moz","ms"],co={};function Wm(n,t){const e=co[t];if(e)return e;let i=vi(t);if(i!=="filter"&&i in n)return co[t]=i;i=Nh(i);for(let s=0;s<mu.length;s++){const r=mu[s]+i;if(r in n)return co[t]=r}return t}const xu="http://www.w3.org/1999/xlink";function gu(n,t,e,i,s,r=Hd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(xu,t.slice(6,t.length)):n.setAttributeNS(xu,t,e):e==null||r&&!Bh(e)?n.removeAttribute(t):n.setAttribute(t,r?"":In(e)?String(e):e)}function _u(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Gf(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(o!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=Bh(e):e==null&&o==="string"?(e="",a=!0):o==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(s||t)}function Wf(n,t,e,i){n.addEventListener(t,e,i)}function Xm(n,t,e,i){n.removeEventListener(t,e,i)}const vu=Symbol("_vei");function Ym(n,t,e,i,s=null){const r=n[vu]||(n[vu]={}),a=r[t];if(i&&a)a.value=i;else{const[o,l]=qm(t);if(i){const c=r[t]=$m(i,s);Wf(n,o,c,l)}else a&&(Xm(n,o,a,l),r[t]=void 0)}}const Mu=/(?:Once|Passive|Capture)$/;function qm(n){let t;if(Mu.test(n)){t={};let i;for(;i=n.match(Mu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xi(n.slice(2)),t]}let uo=0;const jm=Promise.resolve(),Km=()=>uo||(jm.then(()=>uo=0),uo=Date.now());function $m(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Sn(Zm(i,e.value),t,5,[i])};return e.value=n,e.attached=Km(),e}function Zm(n,t){if(Nt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const bu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jm=(n,t,e,i,s,r)=>{const a=s==="svg";t==="class"?zm(n,i,a):t==="style"?km(n,e,i):La(t)?ec(t)||Ym(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qm(n,t,i,a))?(_u(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gu(n,t,i,a,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!be(i))?_u(n,vi(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),gu(n,t,i,a))};function Qm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&bu(t)&&kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bu(t)&&be(e)?!1:t in n}const Su=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Nt(t)?e=>ia(t,e):t},ho=Symbol("_assign"),t0={deep:!0,created(n,{value:t,modifiers:{number:e}},i){const s=Ia(t);Wf(n,"change",()=>{const r=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>e?Oh(Ea(a)):Ea(a));n[ho](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,sf(()=>{n._assigning=!1})}),n[ho]=Su(i)},mounted(n,{value:t}){yu(n,t)},beforeUpdate(n,t,e){n[ho]=Su(e)},updated(n,{value:t}){n._assigning||yu(n,t)}};function yu(n,t){const e=n.multiple,i=Nt(t);if(!(e&&!i&&!Ia(t))){for(let s=0,r=n.options.length;s<r;s++){const a=n.options[s],o=Ea(a);if(e)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=t.some(c=>String(c)===String(o)):a.selected=kd(t,o)>-1}else a.selected=t.has(o);else if(Oa(Ea(a),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ea(n){return"_value"in n?n._value:n.value}const e0=we({patchProp:Jm},Lm);let Eu;function n0(){return Eu||(Eu=tm(e0))}const i0=((...n)=>{const t=n0().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=r0(i);if(!s)return;const r=t._component;!kt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=e(s,!1,s0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function s0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function r0(n){return be(n)?document.querySelector(n):n}const vc="181",Es={ROTATE:0,DOLLY:1,PAN:2},xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a0=0,Tu=1,o0=2,Xf=1,Yf=2,Wn=3,Si=0,We=1,Cn=2,Zn=0,Ts=1,ll=2,Au=3,wu=4,l0=5,zi=100,c0=101,u0=102,h0=103,f0=104,d0=200,p0=201,m0=202,x0=203,cl=204,ul=205,g0=206,_0=207,v0=208,M0=209,b0=210,S0=211,y0=212,E0=213,T0=214,hl=0,fl=1,dl=2,ws=3,pl=4,ml=5,xl=6,gl=7,Mc=0,A0=1,w0=2,gi=0,R0=1,C0=2,P0=3,D0=4,L0=5,I0=6,U0=7,qf=300,Rs=301,Cs=302,_l=303,vl=304,Xa=306,Ml=1e3,Kn=1001,bl=1002,rn=1003,N0=1004,Cr=1005,fn=1006,fo=1007,Hi=1008,Un=1009,jf=1010,Kf=1011,hr=1012,bc=1013,ki=1014,$n=1015,Ls=1016,Sc=1017,yc=1018,fr=1020,$f=35902,Zf=35899,Jf=1021,Qf=1022,Mn=1023,dr=1026,pr=1027,td=1028,Ec=1029,Tc=1030,Ac=1031,wc=1033,la=33776,ca=33777,ua=33778,ha=33779,Sl=35840,yl=35841,El=35842,Tl=35843,Al=36196,wl=37492,Rl=37496,Cl=37808,Pl=37809,Dl=37810,Ll=37811,Il=37812,Ul=37813,Nl=37814,Fl=37815,Ol=37816,Bl=37817,zl=37818,Vl=37819,Hl=37820,Gl=37821,kl=36492,Wl=36494,Xl=36495,Yl=36283,ql=36284,jl=36285,Kl=36286,F0=3200,O0=3201,Rc=0,B0=1,pi="",cn="srgb",Ps="srgb-linear",Ta="linear",re="srgb",$i=7680,Ru=519,z0=512,V0=513,H0=514,ed=515,G0=516,k0=517,W0=518,X0=519,$l=35044,Cu="300 es",Dn=2e3,Aa=2001;function nd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function mr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Y0(){const n=mr("canvas");return n.style.display="block",n}const Pu={};function wa(...n){const t="THREE."+n.shift();console.log(t,...n)}function Ht(...n){const t="THREE."+n.shift();console.warn(t,...n)}function Me(...n){const t="THREE."+n.shift();console.error(t,...n)}function xr(...n){const t=n.join(" ");t in Pu||(Pu[t]=!0,Ht(...n))}function q0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fa=Math.PI/180,Zl=180/Math.PI;function _i(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function j0(n,t){return(n%t+t)%t}function po(n,t,e){return(1-e)*n+e*t}function Pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const K0={DEG2RAD:fa};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o>=1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const w=Math.acos(m),E=Math.sin(w);p=Math.sin(p*w)/E,o=Math.sin(o*w)/E,l=l*p+f*o,c=c*p+d*o,u=u*p+g*o,h=h*p+_*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+g*o,h=h*p+_*o;const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Du.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new O,Du=new yi;class Wt{constructor(t,e,i,s,r,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],w=s[1],E=s[4],T=s[7],P=s[2],A=s[5],N=s[8];return r[0]=a*_+o*w+l*P,r[3]=a*m+o*E+l*A,r[6]=a*p+o*T+l*N,r[1]=c*_+u*w+h*P,r[4]=c*m+u*E+h*A,r[7]=c*p+u*T+h*N,r[2]=f*_+d*w+g*P,r[5]=f*m+d*E+g*A,r[8]=f*p+d*T+g*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*a)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xo.makeScale(t,e)),this}rotate(t){return this.premultiply(xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new Wt,Lu=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $0(){const n={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?Ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ps]:{primaries:t,whitePoint:i,transfer:Ta,toXYZ:Lu,fromXYZ:Iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:i,transfer:re,toXYZ:Lu,fromXYZ:Iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const Zt=$0();function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function As(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class Z0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Zi===void 0&&(Zi=mr("canvas")),Zi.width=t.width,Zi.height=t.height;const s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Zi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Jn(e[i]/255)*255):e[i]=Jn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let J0=0;class Cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(go(s[a].image)):r.push(go(s[a]))}else r=go(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Z0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let Q0=0;const _o=new O;class Ce extends Yi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=Kn,s=Kn,r=fn,a=Hi,o=Mn,l=Un,c=Ce.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=_i(),this.name="",this.source=new Cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ml:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ml:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=qf;Ce.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,T=(d+1)/2,P=(p+1)/2,A=(u+f)/4,N=(h+_)/4,H=(g+m)/4;return E>T&&E>P?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=N/i):T>P?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=A/s,r=H/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=N/r,s=H/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(f-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tx extends Yi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Ce(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends tx{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class id extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ex extends Ce{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Dr.subVectors(this.max,Os),Ji.subVectors(t.a,Os),Qi.subVectors(t.b,Os),ts.subVectors(t.c,Os),si.subVectors(Qi,Ji),ri.subVectors(ts,Qi),Di.subVectors(Ji,ts);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Di.z,Di.y,si.z,0,-si.x,ri.z,0,-ri.x,Di.z,0,-Di.x,-si.y,si.x,0,-ri.y,ri.x,0,-Di.y,Di.x,0];return!vo(e,Ji,Qi,ts,Dr)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Ji,Qi,ts,Dr))?!1:(Lr.crossVectors(si,ri),e=[Lr.x,Lr.y,Lr.z],vo(e,Ji,Qi,ts,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new O,new O,new O,new O,new O,new O,new O,new O],xn=new O,Pr=new Mr,Ji=new O,Qi=new O,ts=new O,si=new O,ri=new O,Di=new O,Os=new O,Dr=new O,Lr=new O,Li=new O;function vo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Li.fromArray(n,r);const o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),u=i.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const nx=new Mr,Bs=new O,Mo=new O;class br{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):nx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Bs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Mo)),this.expandByPoint(Bs.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const zn=new O,bo=new O,Ir=new O,ai=new O,So=new O,Ur=new O,yo=new O;class Ya{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){bo.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(bo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ir),o=ai.dot(this.direction),l=-ai.dot(Ir),c=ai.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bo).addScaledVector(Ir,f),d}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,i,s,r){So.subVectors(e,t),Ur.subVectors(i,t),yo.crossVectors(So,Ur);let a=this.direction.dot(yo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,t);const l=o*this.direction.dot(Ur.crossVectors(ai,Ur));if(l<0)return null;const c=o*this.direction.dot(So.cross(ai));if(c<0||l+c>a)return null;const u=-o*ai.dot(yo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,s,r,a,o,l,c,u,h,f,d,g,_,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,f,d,g,_,m)}set(t,e,i,s,r,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),a=1/es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ix,t,sx)}lookAt(t,e,i){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),oi.crossVectors(i,Qe),oi.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),oi.crossVectors(i,Qe)),oi.normalize(),Nr.crossVectors(Qe,oi),s[0]=oi.x,s[4]=Nr.x,s[8]=Qe.x,s[1]=oi.y,s[5]=Nr.y,s[9]=Qe.y,s[2]=oi.z,s[6]=Nr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],E=i[7],T=i[11],P=i[15],A=s[0],N=s[4],H=s[8],b=s[12],v=s[1],L=s[5],D=s[9],I=s[13],z=s[2],Q=s[6],K=s[10],it=s[14],X=s[3],ht=s[7],pt=s[11],Pt=s[15];return r[0]=a*A+o*v+l*z+c*X,r[4]=a*N+o*L+l*Q+c*ht,r[8]=a*H+o*D+l*K+c*pt,r[12]=a*b+o*I+l*it+c*Pt,r[1]=u*A+h*v+f*z+d*X,r[5]=u*N+h*L+f*Q+d*ht,r[9]=u*H+h*D+f*K+d*pt,r[13]=u*b+h*I+f*it+d*Pt,r[2]=g*A+_*v+m*z+p*X,r[6]=g*N+_*L+m*Q+p*ht,r[10]=g*H+_*D+m*K+p*pt,r[14]=g*b+_*I+m*it+p*Pt,r[3]=w*A+E*v+T*z+P*X,r[7]=w*N+E*L+T*Q+P*ht,r[11]=w*H+E*D+T*K+P*pt,r[15]=w*b+E*I+T*it+P*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*o*f+i*c*f+s*o*d-i*l*d)+_*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+m*(+e*c*h-e*o*d-r*a*h+i*a*d+r*o*u-i*c*u)+p*(-s*o*u-e*l*h+e*o*f+s*a*h-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,E=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,T=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,P=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,A=e*w+i*E+s*T+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/A;return t[0]=w*N,t[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*N,t[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*p+i*l*p)*N,t[3]=(h*l*r-o*f*r-h*s*c+i*f*c+o*s*d-i*l*d)*N,t[4]=E*N,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*N,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*N,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*d+e*l*d)*N,t[8]=T*N,t[9]=(g*h*r-u*_*r-g*i*d+e*_*d+u*i*p-e*h*p)*N,t[10]=(a*_*r-g*o*r+g*i*c-e*_*c-a*i*p+e*o*p)*N,t[11]=(u*o*r-a*h*r-u*i*c+e*h*c+a*i*d-e*o*d)*N,t[12]=P*N,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*N,t[14]=(g*o*s-a*_*s-g*i*l+e*_*l+a*i*m-e*o*m)*N,t[15]=(a*h*s-u*o*s+u*i*l-e*h*l-a*i*f+e*o*f)*N,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,_=a*u,m=a*h,p=o*h,w=l*c,E=l*u,T=l*h,P=i.x,A=i.y,N=i.z;return s[0]=(1-(_+p))*P,s[1]=(d+T)*P,s[2]=(g-E)*P,s[3]=0,s[4]=(d-T)*A,s[5]=(1-(f+p))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+E)*N,s[9]=(m-w)*N,s[10]=(1-(f+_))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const a=es.set(s[4],s[5],s[6]).length(),o=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const c=1/r,u=1/a,h=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,e.setFromRotationMatrix(gn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Dn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Dn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Aa)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Dn,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Dn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Aa)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const es=new O,gn=new de,ix=new O(0,0,0),sx=new O(1,1,1),oi=new O,Nr=new O,Qe=new O,Uu=new de,Nu=new yi;class yn{constructor(t=0,e=0,i=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class sd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rx=0;const Fu=new O,ns=new yi,Vn=new de,Fr=new O,zs=new O,ax=new O,ox=new yi,Ou=new O(1,0,0),Bu=new O(0,1,0),zu=new O(0,0,1),Vu={type:"added"},lx={type:"removed"},is={type:"childadded",child:null},Eo={type:"childremoved",child:null};class Pe extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new O,e=new yn,i=new yi,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Wt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Ou,t)}rotateY(t){return this.rotateOnAxis(Bu,t)}rotateZ(t){return this.rotateOnAxis(zu,t)}translateOnAxis(t,e){return Fu.copy(t).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ou,t)}translateY(t){return this.translateOnAxis(Bu,t)}translateZ(t){return this.translateOnAxis(zu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fr.copy(t):Fr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(zs,Fr,this.up):Vn.lookAt(Fr,zs,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Vn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vu),is.child=t,this.dispatchEvent(is),is.child=null):Me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lx),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vu),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,ax),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,ox,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new O(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new O,Hn=new O,To=new O,Gn=new O,ss=new O,rs=new O,Hu=new O,Ao=new O,wo=new O,Ro=new O,Co=new le,Po=new le,Do=new le;class un{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){_n.subVectors(s,e),Hn.subVectors(i,e),To.subVectors(t,e);const a=_n.dot(_n),o=_n.dot(Hn),l=_n.dot(To),c=Hn.dot(Hn),u=Hn.dot(To),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Co.setScalar(0),Po.setScalar(0),Do.setScalar(0),Co.fromBufferAttribute(t,e),Po.fromBufferAttribute(t,i),Do.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Co,r.x),a.addScaledVector(Po,r.y),a.addScaledVector(Do,r.z),a}static isFrontFacing(t,e,i,s){return _n.subVectors(i,e),Hn.subVectors(t,e),_n.cross(Hn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_n.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ss.subVectors(s,i),rs.subVectors(r,i),Ao.subVectors(t,i);const l=ss.dot(Ao),c=rs.dot(Ao);if(l<=0&&c<=0)return e.copy(i);wo.subVectors(t,s);const u=ss.dot(wo),h=rs.dot(wo);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(ss,a);Ro.subVectors(t,r);const d=ss.dot(Ro),g=rs.dot(Ro);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(rs,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Hu.subVectors(r,s),o=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Hu,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(i).addScaledVector(ss,a).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Lo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Zt.workingColorSpace){if(t=j0(t,1),e=qt(e,0,1),i=qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Lo(a,r,t+1/3),this.g=Lo(a,r,t),this.b=Lo(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=cn){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const i=rd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Zt.workingToColorSpace(Le.copy(this),t),Math.round(qt(Le.r*255,0,255))*65536+Math.round(qt(Le.g*255,0,255))*256+Math.round(qt(Le.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Le.copy(this),e);const i=Le.r,s=Le.g,r=Le.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=cn){Zt.workingToColorSpace(Le.copy(this),t);const e=Le.r,i=Le.g,s=Le.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Or);const i=po(li.h,Or.h,e),s=po(li.s,Or.s,e),r=po(li.l,Or.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Xt;Xt.NAMES=rd;let cx=0;class Nn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Ts,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ul,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==ul&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ra extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new O,Br=new Lt;let ux=0;class Ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ux++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$l,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$l&&(t.usage=this.usage),t}}class ad extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class od extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class $e extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let hx=0;const ln=new de,Io=new Pe,as=new O,tn=new Mr,Vs=new Mr,Ae=new O;class Ne extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nd(t)?od:ad)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,i){return ln.makeTranslation(t,e,i),this.applyMatrix4(ln),this}scale(t,e,i){return ln.makeScale(t,e,i),this.applyMatrix4(ln),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(tn.min,Vs.min),tn.expandByPoint(Ae),Ae.addVectors(tn.max,Vs.max),tn.expandByPoint(Ae)):(tn.expandByPoint(Vs.min),tn.expandByPoint(Vs.max))}tn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ae.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(t,c),Ae.add(as)),s=Math.max(s,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let H=0;H<i.count;H++)o[H]=new O,l[H]=new O;const c=new O,u=new O,h=new O,f=new Lt,d=new Lt,g=new Lt,_=new O,m=new O;function p(H,b,v){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,v),f.fromBufferAttribute(r,H),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),o[H].add(_),o[b].add(_),o[v].add(_),l[H].add(m),l[b].add(m),l[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let H=0,b=w.length;H<b;++H){const v=w[H],L=v.start,D=v.count;for(let I=L,z=L+D;I<z;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const E=new O,T=new O,P=new O,A=new O;function N(H){P.fromBufferAttribute(s,H),A.copy(P);const b=o[H];E.copy(b),E.sub(P.multiplyScalar(P.dot(b))).normalize(),T.crossVectors(A,b);const L=T.dot(l[H])<0?-1:1;a.setXYZW(H,E.x,E.y,E.z,L)}for(let H=0,b=w.length;H<b;++H){const v=w[H],L=v.start,D=v.count;for(let I=L,z=L+D;I<z;I+=3)N(t.getX(I+0)),N(t.getX(I+1)),N(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ke(f,u,h)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new de,Ii=new Ya,zr=new br,ku=new O,Vr=new O,Hr=new O,Gr=new O,Uo=new O,kr=new O,Wu=new O,Wr=new O;class dn extends Pe{constructor(t=new Ne,e=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Uo.fromBufferAttribute(h,t),a?kr.addScaledVector(Uo,u):kr.addScaledVector(Uo.sub(e),u))}e.add(kr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(zr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(zr,ku)===null||Ii.origin.distanceToSquared(ku)>(t.far-t.near)**2))&&(Gu.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Gu),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let T=w,P=E;T<P;T+=3){const A=o.getX(T),N=o.getX(T+1),H=o.getX(T+2);s=Xr(this,p,t,i,c,u,h,A,N,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),E=o.getX(m+1),T=o.getX(m+2);s=Xr(this,a,t,i,c,u,h,w,E,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=w,P=E;T<P;T+=3){const A=T,N=T+1,H=T+2;s=Xr(this,p,t,i,c,u,h,A,N,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=m,E=m+1,T=m+2;s=Xr(this,a,t,i,c,u,h,w,E,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function fx(n,t,e,i,s,r,a,o){let l;if(t.side===We?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Wr);return c<e.near||c>e.far?null:{distance:c,point:Wr.clone(),object:n}}function Xr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Vr),n.getVertexPosition(l,Hr),n.getVertexPosition(c,Gr);const u=fx(n,t,e,i,Vr,Hr,Gr,Wu);if(u){const h=new O;un.getBarycoord(Wu,Vr,Hr,Gr,h),s&&(u.uv=un.getInterpolatedAttribute(s,o,l,c,h,new Lt)),r&&(u.uv1=un.getInterpolatedAttribute(r,o,l,c,h,new Lt)),a&&(u.normal=un.getInterpolatedAttribute(a,o,l,c,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};un.getNormal(Vr,Hr,Gr,f.normal),u.face=f,u.barycoord=h}return u}class Sr extends Ne{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(h,2));function g(_,m,p,w,E,T,P,A,N,H,b){const v=T/N,L=P/H,D=T/2,I=P/2,z=A/2,Q=N+1,K=H+1;let it=0,X=0;const ht=new O;for(let pt=0;pt<K;pt++){const Pt=pt*L-I;for(let zt=0;zt<Q;zt++){const Jt=zt*v-D;ht[_]=Jt*w,ht[m]=Pt*E,ht[p]=z,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=A>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(zt/N),h.push(1-pt/H),it+=1}}for(let pt=0;pt<H;pt++)for(let Pt=0;Pt<N;Pt++){const zt=f+Pt+Q*pt,Jt=f+Pt+Q*(pt+1),ee=f+(Pt+1)+Q*(pt+1),ne=f+(Pt+1)+Q*pt;l.push(zt,Jt,ne),l.push(Jt,ee,ne),X+=6}o.addGroup(d,X,b),d+=X,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const i=Ds(n[e]);for(const s in i)t[s]=i[s]}return t}function dx(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ld(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const px={clone:Ds,merge:ze};var mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=dx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class cd extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new O,Xu=new Lt,Yu=new Lt;class nn extends cd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Xu,Yu),e.subVectors(Yu,Xu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,ls=1;class gx extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(os,ls,t,e);s.layers=this.layers,this.add(s);const r=new nn(os,ls,t,e);r.layers=this.layers,this.add(r);const a=new nn(os,ls,t,e);a.layers=this.layers,this.add(a);const o=new nn(os,ls,t,e);o.layers=this.layers,this.add(o);const l=new nn(os,ls,t,e);l.layers=this.layers,this.add(l);const c=new nn(os,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ud extends Ce{constructor(t=[],e=Rs,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _x extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ud(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sr(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Zn});r.uniforms.tEquirect.value=e;const a=new dn(s,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=fn),new gx(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class Ks extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vx={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ks;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Mx extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$l,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new O;class Ca{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){wa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ca(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hd extends Nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let cs;const Hs=new O,us=new O,hs=new O,fs=new Lt,Gs=new Lt,fd=new de,Yr=new O,ks=new O,qr=new O,qu=new Lt,Fo=new Lt,ju=new Lt;class Sx extends Pe{constructor(t=new hd){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bx(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new Ca(i,3,0,!1)),cs.setAttribute("uv",new Ca(i,2,3,!1))}this.geometry=cs,this.material=t,this.center=new Lt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Me('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),fd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-hs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;jr(Yr.set(-.5,-.5,0),hs,a,us,s,r),jr(ks.set(.5,-.5,0),hs,a,us,s,r),jr(qr.set(.5,.5,0),hs,a,us,s,r),qu.set(0,0),Fo.set(1,0),ju.set(1,1);let o=t.ray.intersectTriangle(Yr,ks,qr,!1,Hs);if(o===null&&(jr(ks.set(-.5,.5,0),hs,a,us,s,r),Fo.set(0,1),o=t.ray.intersectTriangle(Yr,qr,ks,!1,Hs),o===null))return;const l=t.ray.origin.distanceTo(Hs);l<t.near||l>t.far||e.push({distance:l,point:Hs.clone(),uv:un.getInterpolation(Hs,Yr,ks,qr,qu,Fo,ju,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function jr(n,t,e,i,s,r){fs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Gs.x=r*fs.x-s*fs.y,Gs.y=s*fs.x+r*fs.y):Gs.copy(fs),n.copy(t),n.x+=Gs.x,n.y+=Gs.y,n.applyMatrix4(fd)}class yx extends Ce{constructor(t=null,e=1,i=1,s,r,a,o,l,c=rn,u=rn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oo=new O,Ex=new O,Tx=new Wt;class di{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Oo.subVectors(i,e).cross(Ex.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Oo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Tx.getNormalMatrix(t),s=this.coplanarPoint(Oo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new br,Ax=new Lt(.5,.5),Kr=new O;class Pc{constructor(t=new di,e=new di,i=new di,s=new di,r=new di,a=new di){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Dn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],w=r[12],E=r[13],T=r[14],P=r[15];if(s[0].setComponents(c-a,d-u,p-g,P-w).normalize(),s[1].setComponents(c+a,d+u,p+g,P+w).normalize(),s[2].setComponents(c+o,d+h,p+_,P+E).normalize(),s[3].setComponents(c-o,d-h,p-_,P-E).normalize(),i)s[4].setComponents(l,f,m,T).normalize(),s[5].setComponents(c-l,d-f,p-m,P-T).normalize();else if(s[4].setComponents(c-l,d-f,p-m,P-T).normalize(),e===Dn)s[5].setComponents(c+l,d+f,p+m,P+T).normalize();else if(e===Aa)s[5].setComponents(l,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=Ax.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dd extends Nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pa=new O,Da=new O,Ku=new de,Ws=new Ya,$r=new br,Bo=new O,$u=new O;class wx extends Pe{constructor(t=new Ne,e=new dd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Pa.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Pa.distanceTo(Da);t.setAttribute("lineDistance",new $e(i,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;Ku.copy(s).invert(),Ws.copy(t.ray).applyMatrix4(Ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),w=u.getX(_+1),E=Zr(this,t,Ws,l,p,w,_);E&&e.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Zr(this,t,Ws,l,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=Zr(this,t,Ws,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Zr(this,t,Ws,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Pa.fromBufferAttribute(o,s),Da.fromBufferAttribute(o,r),e.distanceSqToSegment(Pa,Da,Bo,$u)>i)return;Bo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Bo);if(!(c<t.near||c>t.far))return{distance:c,point:$u.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class da extends Nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zu=new de,Jl=new Ya,Jr=new br,Qr=new O;class Ju extends Pe{constructor(t=new Ne,e=new da){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;Zu.copy(s).invert(),Jl.copy(t.ray).applyMatrix4(Zu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Qr.fromBufferAttribute(h,m),Qu(Qr,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Qr.fromBufferAttribute(h,g),Qu(Qr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qu(n,t,e,i,s,r,a){const o=Jl.distanceSqToPoint(n);if(o<e){const l=new O;Jl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Rx extends Ce{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pd extends Ce{constructor(t,e,i=ki,s,r,a,o=rn,l=rn,c,u=dr,h=1){if(u!==dr&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class md extends Ce{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Dc extends Ne{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;w(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function w(){const T=new O,P=new O;let A=0;const N=(e-t)/i;for(let H=0;H<=r;H++){const b=[],v=H/r,L=v*(e-t)+t;for(let D=0;D<=s;D++){const I=D/s,z=I*l+o,Q=Math.sin(z),K=Math.cos(z);P.x=L*Q,P.y=-v*i+m,P.z=L*K,h.push(P.x,P.y,P.z),T.set(Q,N,K).normalize(),f.push(T.x,T.y,T.z),d.push(I,1-v),b.push(g++)}_.push(b)}for(let H=0;H<s;H++)for(let b=0;b<r;b++){const v=_[b][H],L=_[b+1][H],D=_[b+1][H+1],I=_[b][H+1];(t>0||b!==0)&&(u.push(v,L,I),A+=3),(e>0||b!==r-1)&&(u.push(L,D,I),A+=3)}c.addGroup(p,A,0),p+=A}function E(T){const P=g,A=new Lt,N=new O;let H=0;const b=T===!0?t:e,v=T===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;const L=g;for(let D=0;D<=s;D++){const z=D/s*l+o,Q=Math.cos(z),K=Math.sin(z);N.x=b*K,N.y=m*v,N.z=b*Q,h.push(N.x,N.y,N.z),f.push(0,v,0),A.x=Q*.5+.5,A.y=K*.5*v+.5,d.push(A.x,A.y),g++}for(let D=0;D<s;D++){const I=P+D,z=L+D;T===!0?u.push(z,z+1,I):u.push(z+1,z,I),H+=3}c.addGroup(p,H,T===!0?1:2),p+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cx{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new O,s=[],r=[],a=[],o=new O,l=new de;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Px extends Cx{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qa extends Ne{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*f-a;for(let E=0;E<c;E++){const T=E*h-r;g.push(T,-w,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const E=w+c*p,T=w+c*(p+1),P=w+1+c*(p+1),A=w+1+c*p;d.push(E,T,A),d.push(T,P,A)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.width,t.height,t.widthSegments,t.heightSegments)}}class gs extends Ne{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new O,f=new O,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const w=[],E=p/i;let T=0;p===0&&a===0?T=.5/e:p===i&&l===Math.PI&&(T=-.5/e);for(let P=0;P<=e;P++){const A=P/e;h.x=-t*Math.cos(s+A*r)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(s+A*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+T,1-E),w.push(c++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<e;w++){const E=u[p][w+1],T=u[p][w],P=u[p+1][w],A=u[p+1][w+1];(p!==0||a>0)&&d.push(E,T,A),(p!==i-1||l<Math.PI)&&d.push(T,P,A)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dx extends Nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lx extends Dx{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class th extends Nn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xt(16777215),this.specular=new Xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ix extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=F0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ux extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zo={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Nx{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fx=new Nx;class Lc{constructor(t){this.manager=t!==void 0?t:Fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Lc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ds=new WeakMap;class Ox extends Lc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=zo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let h=ds.get(a);h===void 0&&(h=[],ds.set(a,h)),h.push({onLoad:e,onError:s})}return a}const o=mr("img");function l(){u(),e&&e(this);const h=ds.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}ds.delete(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),zo.remove(`image:${t}`);const f=ds.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}ds.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zo.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class xd extends Lc{constructor(t){super(t)}load(t,e,i,s){const r=new Ce,a=new Ox(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class gd extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Vo=new de,eh=new O,nh=new O;class Bx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),Vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ih=new de,Xs=new O,Ho=new O;class zx extends Bx{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Xs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Xs),Ho.copy(i.position),Ho.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ho),i.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),ih.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih,i.coordinateSystem,i.reversedDepth)}}class Vx extends gd{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new zx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Hx extends cd{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Gx extends gd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class kx extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Wx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class sh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xx extends Yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function rh(n,t,e,i){const s=Yx(i);switch(e){case Jf:return n*t;case td:return n*t/s.components*s.byteLength;case Ec:return n*t/s.components*s.byteLength;case Tc:return n*t*2/s.components*s.byteLength;case Ac:return n*t*2/s.components*s.byteLength;case Qf:return n*t*3/s.components*s.byteLength;case Mn:return n*t*4/s.components*s.byteLength;case wc:return n*t*4/s.components*s.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:case Tl:return Math.max(n,16)*Math.max(t,8)/4;case Sl:case El:return Math.max(n,8)*Math.max(t,8)/2;case Al:case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case kl:case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Yl:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*8;case jl:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yx(n){switch(n){case Un:case jf:return{byteLength:1,components:1};case hr:case Kf:case Ls:return{byteLength:2,components:1};case Sc:case yc:return{byteLength:2,components:4};case ki:case bc:case $n:return{byteLength:4,components:1};case $f:case Zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);function _d(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function qx(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kx=`#ifdef USE_ALPHAHASH
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
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tg=`#ifdef USE_AOMAP
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
#endif`,eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ng=`#ifdef USE_BATCHING
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
#endif`,ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,og=`#ifdef USE_IRIDESCENCE
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
#endif`,lg=`#ifdef USE_BUMPMAP
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gg=`#define PI 3.141592653589793
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
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vg=`vec3 transformedNormal = objectNormal;
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
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ag=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ng=`#ifdef USE_GRADIENTMAP
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
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
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
#endif`,Vg=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xg=`PhysicalMaterial material;
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
#endif`,Yg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,qg=`
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i_=`#if defined( USE_POINTS_UV )
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
#endif`,s_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c_=`#ifdef USE_MORPHTARGETS
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
#endif`,u_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x_=`#ifdef USE_NORMALMAP
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
#endif`,g_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,__=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L_=`float getShadowMask() {
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
}`,I_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,N_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,O_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H_=`#ifdef USE_TRANSMISSION
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
#endif`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j_=`uniform sampler2D t2D;
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`#include <common>
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
}`,tv=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ev=`#define DISTANCE
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
}`,nv=`#define DISTANCE
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
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`uniform float scale;
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
}`,av=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,lv=`uniform vec3 diffuse;
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
}`,cv=`#define LAMBERT
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
}`,uv=`#define LAMBERT
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
}`,hv=`#define MATCAP
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
}`,fv=`#define MATCAP
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
}`,dv=`#define NORMAL
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
}`,pv=`#define NORMAL
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
}`,mv=`#define PHONG
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
}`,xv=`#define PHONG
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
}`,gv=`#define STANDARD
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
}`,_v=`#define STANDARD
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
}`,vv=`#define TOON
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
}`,Mv=`#define TOON
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
}`,bv=`uniform float size;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Ev=`uniform vec3 color;
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
}`,Tv=`uniform float rotation;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:jx,alphahash_pars_fragment:Kx,alphamap_fragment:$x,alphamap_pars_fragment:Zx,alphatest_fragment:Jx,alphatest_pars_fragment:Qx,aomap_fragment:tg,aomap_pars_fragment:eg,batching_pars_vertex:ng,batching_vertex:ig,begin_vertex:sg,beginnormal_vertex:rg,bsdfs:ag,iridescence_fragment:og,bumpmap_pars_fragment:lg,clipping_planes_fragment:cg,clipping_planes_pars_fragment:ug,clipping_planes_pars_vertex:hg,clipping_planes_vertex:fg,color_fragment:dg,color_pars_fragment:pg,color_pars_vertex:mg,color_vertex:xg,common:gg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:vg,displacementmap_pars_vertex:Mg,displacementmap_vertex:bg,emissivemap_fragment:Sg,emissivemap_pars_fragment:yg,colorspace_fragment:Eg,colorspace_pars_fragment:Tg,envmap_fragment:Ag,envmap_common_pars_fragment:wg,envmap_pars_fragment:Rg,envmap_pars_vertex:Cg,envmap_physical_pars_fragment:Vg,envmap_vertex:Pg,fog_vertex:Dg,fog_pars_vertex:Lg,fog_fragment:Ig,fog_pars_fragment:Ug,gradientmap_pars_fragment:Ng,lightmap_pars_fragment:Fg,lights_lambert_fragment:Og,lights_lambert_pars_fragment:Bg,lights_pars_begin:zg,lights_toon_fragment:Hg,lights_toon_pars_fragment:Gg,lights_phong_fragment:kg,lights_phong_pars_fragment:Wg,lights_physical_fragment:Xg,lights_physical_pars_fragment:Yg,lights_fragment_begin:qg,lights_fragment_maps:jg,lights_fragment_end:Kg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:Zg,logdepthbuf_pars_vertex:Jg,logdepthbuf_vertex:Qg,map_fragment:t_,map_pars_fragment:e_,map_particle_fragment:n_,map_particle_pars_fragment:i_,metalnessmap_fragment:s_,metalnessmap_pars_fragment:r_,morphinstance_vertex:a_,morphcolor_vertex:o_,morphnormal_vertex:l_,morphtarget_pars_vertex:c_,morphtarget_vertex:u_,normal_fragment_begin:h_,normal_fragment_maps:f_,normal_pars_fragment:d_,normal_pars_vertex:p_,normal_vertex:m_,normalmap_pars_fragment:x_,clearcoat_normal_fragment_begin:g_,clearcoat_normal_fragment_maps:__,clearcoat_pars_fragment:v_,iridescence_pars_fragment:M_,opaque_fragment:b_,packing:S_,premultiplied_alpha_fragment:y_,project_vertex:E_,dithering_fragment:T_,dithering_pars_fragment:A_,roughnessmap_fragment:w_,roughnessmap_pars_fragment:R_,shadowmap_pars_fragment:C_,shadowmap_pars_vertex:P_,shadowmap_vertex:D_,shadowmask_pars_fragment:L_,skinbase_vertex:I_,skinning_pars_vertex:U_,skinning_vertex:N_,skinnormal_vertex:F_,specularmap_fragment:O_,specularmap_pars_fragment:B_,tonemapping_fragment:z_,tonemapping_pars_fragment:V_,transmission_fragment:H_,transmission_pars_fragment:G_,uv_pars_fragment:k_,uv_pars_vertex:W_,uv_vertex:X_,worldpos_vertex:Y_,background_vert:q_,background_frag:j_,backgroundCube_vert:K_,backgroundCube_frag:$_,cube_vert:Z_,cube_frag:J_,depth_vert:Q_,depth_frag:tv,distanceRGBA_vert:ev,distanceRGBA_frag:nv,equirect_vert:iv,equirect_frag:sv,linedashed_vert:rv,linedashed_frag:av,meshbasic_vert:ov,meshbasic_frag:lv,meshlambert_vert:cv,meshlambert_frag:uv,meshmatcap_vert:hv,meshmatcap_frag:fv,meshnormal_vert:dv,meshnormal_frag:pv,meshphong_vert:mv,meshphong_frag:xv,meshphysical_vert:gv,meshphysical_frag:_v,meshtoon_vert:vv,meshtoon_frag:Mv,points_vert:bv,points_frag:Sv,shadow_vert:yv,shadow_frag:Ev,sprite_vert:Tv,sprite_frag:Av},gt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Rn={basic:{uniforms:ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ze([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ze([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ze([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ze([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ze([gt.points,gt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ze([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ze([gt.common,gt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ze([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ze([gt.sprite,gt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:ze([gt.common,gt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:ze([gt.lights,gt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Rn.physical={uniforms:ze([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ta={r:0,b:0,g:0},Ni=new yn,wv=new de;function Rv(n,t,e,i,s,r,a){const o=new Xt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?e:t).get(T)),T}function _(E){let T=!1;const P=g(E);P===null?p(o,l):P&&P.isColor&&(p(P,1),T=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,T){const P=g(T);P&&(P.isCubeTexture||P.mapping===Xa)?(u===void 0&&(u=new dn(new Sr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Ds(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ni.copy(T.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wv.makeRotationFromEuler(Ni)),u.material.toneMapped=Zt.getTransfer(P.colorSpace)!==re,(h!==P||f!==P.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=P,f=P.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new dn(new qa(2,2),new ei({name:"BackgroundMaterial",uniforms:Ds(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(P.colorSpace)!==re,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=P,f=P.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,T){E.getRGB(ta,ld(n)),i.buffers.color.setClear(ta.r,ta.g,ta.b,T,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:w}}function Cv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(v,L,D,I,z){let Q=!1;const K=h(I,D,L);r!==K&&(r=K,c(r.object)),Q=d(v,I,D,z),Q&&g(v,I,D,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,T(v,L,D,I),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,L,D){const I=D.wireframe===!0;let z=i[v.id];z===void 0&&(z={},i[v.id]=z);let Q=z[L.id];Q===void 0&&(Q={},z[L.id]=Q);let K=Q[I];return K===void 0&&(K=f(l()),Q[I]=K),K}function f(v){const L=[],D=[],I=[];for(let z=0;z<e;z++)L[z]=0,D[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:I,object:v,attributes:{},index:null}}function d(v,L,D,I){const z=r.attributes,Q=L.attributes;let K=0;const it=D.getAttributes();for(const X in it)if(it[X].location>=0){const pt=z[X];let Pt=Q[X];if(Pt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Pt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Pt=v.instanceColor)),pt===void 0||pt.attribute!==Pt||Pt&&pt.data!==Pt.data)return!0;K++}return r.attributesNum!==K||r.index!==I}function g(v,L,D,I){const z={},Q=L.attributes;let K=0;const it=D.getAttributes();for(const X in it)if(it[X].location>=0){let pt=Q[X];pt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const Pt={};Pt.attribute=pt,pt&&pt.data&&(Pt.data=pt.data),z[X]=Pt,K++}r.attributes=z,r.attributesNum=K,r.index=I}function _(){const v=r.newAttributes;for(let L=0,D=v.length;L<D;L++)v[L]=0}function m(v){p(v,0)}function p(v,L){const D=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;D[v]=1,I[v]===0&&(n.enableVertexAttribArray(v),I[v]=1),z[v]!==L&&(n.vertexAttribDivisor(v,L),z[v]=L)}function w(){const v=r.newAttributes,L=r.enabledAttributes;for(let D=0,I=L.length;D<I;D++)L[D]!==v[D]&&(n.disableVertexAttribArray(D),L[D]=0)}function E(v,L,D,I,z,Q,K){K===!0?n.vertexAttribIPointer(v,L,D,z,Q):n.vertexAttribPointer(v,L,D,I,z,Q)}function T(v,L,D,I){_();const z=I.attributes,Q=D.getAttributes(),K=L.defaultAttributeValues;for(const it in Q){const X=Q[it];if(X.location>=0){let ht=z[it];if(ht===void 0&&(it==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),it==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ht!==void 0){const pt=ht.normalized,Pt=ht.itemSize,zt=t.get(ht);if(zt===void 0)continue;const Jt=zt.buffer,ee=zt.type,ne=zt.bytesPerElement,et=ee===n.INT||ee===n.UNSIGNED_INT||ht.gpuType===bc;if(ht.isInterleavedBufferAttribute){const st=ht.data,yt=st.stride,Vt=ht.offset;if(st.isInstancedInterleavedBuffer){for(let Dt=0;Dt<X.locationSize;Dt++)p(X.location+Dt,st.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)m(X.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let Dt=0;Dt<X.locationSize;Dt++)E(X.location+Dt,Pt/X.locationSize,ee,pt,yt*ne,(Vt+Pt/X.locationSize*Dt)*ne,et)}else{if(ht.isInstancedBufferAttribute){for(let st=0;st<X.locationSize;st++)p(X.location+st,ht.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let st=0;st<X.locationSize;st++)m(X.location+st);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let st=0;st<X.locationSize;st++)E(X.location+st,Pt/X.locationSize,ee,pt,Pt*ne,Pt/X.locationSize*st*ne,et)}}else if(K!==void 0){const pt=K[it];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(X.location,pt);break;case 3:n.vertexAttrib3fv(X.location,pt);break;case 4:n.vertexAttrib4fv(X.location,pt);break;default:n.vertexAttrib1fv(X.location,pt)}}}}w()}function P(){H();for(const v in i){const L=i[v];for(const D in L){const I=L[D];for(const z in I)u(I[z].object),delete I[z];delete L[D]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;const L=i[v.id];for(const D in L){const I=L[D];for(const z in I)u(I[z].object),delete I[z];delete L[D]}delete i[v.id]}function N(v){for(const L in i){const D=i[L];if(D[v.id]===void 0)continue;const I=D[v.id];for(const z in I)u(I[z].object),delete I[z];delete D[v.id]}}function H(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:H,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Pv(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Dv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==Mn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const H=N===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Un&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==$n&&!H)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Ht("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:T,vertexTextures:P,maxSamples:A}}function Lv(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new di,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,E=w*4;let T=p.clippingState||null;l.value=T,T=u(g,f,E,d);for(let P=0;P!==E;++P)T[P]=e[P];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,T=d;E!==_;++E,T+=4)a.copy(h[E]).applyMatrix4(w,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Iv(n){let t=new WeakMap;function e(a,o){return o===_l?a.mapping=Rs:o===vl&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_l||o===vl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _x(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const mi=4,ah=[.125,.215,.35,.446,.526,.582],Vi=20,Uv=256,Ys=new Hx,oh=new Xt;let Go=null,ko=0,Wo=0,Xo=!1;const Nv=new O;class lh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=Nv}=r;Go=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Go,ko,Wo),this._renderer.xr.enabled=Xo,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Go=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Ls,format:Mn,colorSpace:Ps,depthBuffer:!1},s=ch(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fv(r)),this._blurMaterial=Bv(r,t,e),this._ggxMaterial=Ov(r,t,e)}return s}_compileMaterial(t){const e=new dn(new Ne,t);this._renderer.compile(e,Ys)}_sceneToCubeUV(t,e,i,s,r){const l=new nn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(oh),h.toneMapping=gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new Sr,new Ra({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,p=!0):(m.color.copy(oh),p=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):T===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const P=this._cubeSize;ps(s,T*P,E>2?P:0,P,P),h.setRenderTarget(s),p&&h.render(_,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=w}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Rs||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ys)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=.05+c*.95,d=h*f,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-mi?i-g+mi:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,ps(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Ys),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ps(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(o,Ys)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Me("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Vi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Vi;m>Vi&&Ht(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let w=0;for(let N=0;N<Vi;++N){const H=N/_,b=Math.exp(-H*H/2);p.push(b),N===0?w+=b:N<m&&(w+=2*b)}for(let N=0;N<p.length;N++)p[N]=p[N]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const T=this._sizeLods[s],P=3*T*(s>E-mi?s-E+mi:0),A=4*(this._cubeSize-T);ps(e,P,A,3*T,2*T),l.setRenderTarget(e),l.render(h,Ys)}}function Fv(n){const t=[],e=[],i=[];let s=n;const r=n-mi+1+ah.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-mi?l=ah[a-n+mi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*d),E=new Float32Array(m*g*d),T=new Float32Array(p*g*d);for(let A=0;A<d;A++){const N=A%3*2/3-1,H=A>2?0:-1,b=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];w.set(b,_*g*A),E.set(f,m*g*A);const v=[A,A,A,A,A,A];T.set(v,p*g*A)}const P=new Ne;P.setAttribute("position",new Ke(w,_)),P.setAttribute("uv",new Ke(E,m)),P.setAttribute("faceIndex",new Ke(T,p)),i.push(new dn(P,null)),s>mi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ch(n,t,e){const i=new Wi(n,t,e);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ov(n,t,e){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bv(n,t,e){const i=new Float32Array(Vi),s=new O(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function uh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function hh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function zv(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_l||l===vl,u=l===Rs||l===Cs;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new lh(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new lh(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Vv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&xr("WebGLRenderer: "+i+" extension not supported."),s}}}function Hv(n,t,e,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let E=0,T=w.length;E<T;E+=3){const P=w[E+0],A=w[E+1],N=w[E+2];f.push(P,A,A,N,N,P)}}else if(g!==void 0){const w=g.array;_=g.version;for(let E=0,T=w.length/3-1;E<T;E+=3){const P=E+0,A=E+1,N=E+2;f.push(P,A,A,N,N,P)}}else return;const m=new(nd(f)?od:ad)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Gv(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*a,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*_[w];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function kv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Me("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Wv(n,t,e){const i=new WeakMap,s=new le;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let b=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let T=o.attributes.position.count*E,P=1;T>t.maxTextureSize&&(P=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*P*4*h),N=new id(A,T,P,h);N.type=$n,N.needsUpdate=!0;const H=E*4;for(let v=0;v<h;v++){const L=m[v],D=p[v],I=w[v],z=T*P*4*v;for(let Q=0;Q<L.count;Q++){const K=Q*H;d===!0&&(s.fromBufferAttribute(L,Q),A[z+K+0]=s.x,A[z+K+1]=s.y,A[z+K+2]=s.z,A[z+K+3]=0),g===!0&&(s.fromBufferAttribute(D,Q),A[z+K+4]=s.x,A[z+K+5]=s.y,A[z+K+6]=s.z,A[z+K+7]=0),_===!0&&(s.fromBufferAttribute(I,Q),A[z+K+8]=s.x,A[z+K+9]=s.y,A[z+K+10]=s.z,A[z+K+11]=I.itemSize===4?s.w:1)}}f={count:h,texture:N,size:new Lt(T,P)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Xv(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const vd=new Ce,fh=new pd(1,1),Md=new id,bd=new ex,Sd=new ud,dh=[],ph=[],mh=new Float32Array(16),xh=new Float32Array(9),gh=new Float32Array(4);function Is(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ka(n,t){let e=ph[t];e===void 0&&(e=new Int32Array(t),ph[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Yv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function Kv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function $v(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;gh.set(i),n.uniformMatrix2fv(this.addr,!1,gh),Te(e,i)}}function Zv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;xh.set(i),n.uniformMatrix3fv(this.addr,!1,xh),Te(e,i)}}function Jv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;mh.set(i),n.uniformMatrix4fv(this.addr,!1,mh),Te(e,i)}}function Qv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function tM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function eM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function nM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function iM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function sM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function rM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function aM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function oM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(fh.compareFunction=ed,r=fh):r=vd,e.setTexture2D(t||r,s)}function lM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||bd,s)}function cM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Sd,s)}function uM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Md,s)}function hM(n){switch(n){case 5126:return Yv;case 35664:return qv;case 35665:return jv;case 35666:return Kv;case 35674:return $v;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return Qv;case 35667:case 35671:return tM;case 35668:case 35672:return eM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return sM;case 36295:return rM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return uM}}function fM(n,t){n.uniform1fv(this.addr,t)}function dM(n,t){const e=Is(t,this.size,2);n.uniform2fv(this.addr,e)}function pM(n,t){const e=Is(t,this.size,3);n.uniform3fv(this.addr,e)}function mM(n,t){const e=Is(t,this.size,4);n.uniform4fv(this.addr,e)}function xM(n,t){const e=Is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gM(n,t){const e=Is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _M(n,t){const e=Is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vM(n,t){n.uniform1iv(this.addr,t)}function MM(n,t){n.uniform2iv(this.addr,t)}function bM(n,t){n.uniform3iv(this.addr,t)}function SM(n,t){n.uniform4iv(this.addr,t)}function yM(n,t){n.uniform1uiv(this.addr,t)}function EM(n,t){n.uniform2uiv(this.addr,t)}function TM(n,t){n.uniform3uiv(this.addr,t)}function AM(n,t){n.uniform4uiv(this.addr,t)}function wM(n,t,e){const i=this.cache,s=t.length,r=Ka(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vd,r[a])}function RM(n,t,e){const i=this.cache,s=t.length,r=Ka(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bd,r[a])}function CM(n,t,e){const i=this.cache,s=t.length,r=Ka(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Sd,r[a])}function PM(n,t,e){const i=this.cache,s=t.length,r=Ka(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Md,r[a])}function DM(n){switch(n){case 5126:return fM;case 35664:return dM;case 35665:return pM;case 35666:return mM;case 35674:return xM;case 35675:return gM;case 35676:return _M;case 5124:case 35670:return vM;case 35667:case 35671:return MM;case 35668:case 35672:return bM;case 35669:case 35673:return SM;case 5125:return yM;case 36294:return EM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return PM}}class LM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=hM(e.type)}}class IM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=DM(e.type)}}class UM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function _h(n,t){n.seq.push(t),n.map[t.id]=t}function NM(n,t,e){const i=n.name,s=i.length;for(Yo.lastIndex=0;;){const r=Yo.exec(i),a=Yo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_h(e,c===void 0?new LM(o,n,t):new IM(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new UM(o),_h(e,h)),e=h}}}class pa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);NM(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function vh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const FM=37297;let OM=0;function BM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Mh=new Wt;function zM(n){Zt._getMatrix(Mh,Zt.workingColorSpace,n);const t=`mat3( ${Mh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case Ta:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function bh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+BM(n.getShaderSource(t),o)}else return r}function VM(n,t){const e=zM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function HM(n,t){let e;switch(t){case R0:e="Linear";break;case C0:e="Reinhard";break;case P0:e="Cineon";break;case D0:e="ACESFilmic";break;case I0:e="AgX";break;case U0:e="Neutral";break;case L0:e="Custom";break;default:Ht("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ea=new O;function GM(){Zt.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function WM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function XM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function $s(n){return n!==""}function Sh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(n){return n.replace(YM,jM)}const qM=new Map;function jM(n,t){let e=Yt[t];if(e===void 0){const i=qM.get(t);if(i!==void 0)e=Yt[i],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ql(e)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(n){return n.replace(KM,$M)}function $M(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Th(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ZM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function JM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case Xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function QM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function tb(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mc:t="ENVMAP_BLENDING_MULTIPLY";break;case A0:t="ENVMAP_BLENDING_MIX";break;case w0:t="ENVMAP_BLENDING_ADD";break}return t}function eb(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function nb(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ZM(e),c=JM(e),u=QM(e),h=tb(e),f=eb(e),d=kM(e),g=WM(r),_=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==gi?HM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,VM("linearToOutputTexel",e.outputColorSpace),GM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),a=Ql(a),a=Sh(a,e),a=yh(a,e),o=Ql(o),o=Sh(o,e),o=yh(o,e),a=Eh(a),o=Eh(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=w+m+a,T=w+p+o,P=vh(s,s.VERTEX_SHADER,E),A=vh(s,s.FRAGMENT_SHADER,T);s.attachShader(_,P),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function N(L){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(P)||"",z=s.getShaderInfoLog(A)||"",Q=D.trim(),K=I.trim(),it=z.trim();let X=!0,ht=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,P,A);else{const pt=bh(s,P,"vertex"),Pt=bh(s,A,"fragment");Me("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Q+`
`+pt+`
`+Pt)}else Q!==""?Ht("WebGLProgram: Program Info Log:",Q):(K===""||it==="")&&(ht=!1);ht&&(L.diagnostics={runnable:X,programLog:Q,vertexShader:{log:K,prefix:m},fragmentShader:{log:it,prefix:p}})}s.deleteShader(P),s.deleteShader(A),H=new pa(s,_),b=XM(s,_)}let H;this.getUniforms=function(){return H===void 0&&N(this),H};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,FM)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let ib=0;class sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new rb(t),e.set(t,i)),i}}class rb{constructor(t){this.id=ib++,this.code=t,this.usedTimes=0}}function ab(n,t,e,i,s,r,a){const o=new sd,l=new sb,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,v,L,D,I){const z=D.fog,Q=I.geometry,K=b.isMeshStandardMaterial?D.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||K),X=it&&it.mapping===Xa?it.image.height:null,ht=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&Ht("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Pt=pt!==void 0?pt.length:0;let zt=0;Q.morphAttributes.position!==void 0&&(zt=1),Q.morphAttributes.normal!==void 0&&(zt=2),Q.morphAttributes.color!==void 0&&(zt=3);let Jt,ee,ne,et;if(ht){const ie=Rn[ht];Jt=ie.vertexShader,ee=ie.fragmentShader}else Jt=b.vertexShader,ee=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),et=l.getFragmentShaderID(b);const st=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Vt=I.isInstancedMesh===!0,Dt=I.isBatchedMesh===!0,jt=!!b.map,R=!!b.matcap,C=!!it,k=!!b.aoMap,y=!!b.lightMap,Z=!!b.bumpMap,J=!!b.normalMap,ot=!!b.displacementMap,j=!!b.emissiveMap,rt=!!b.metalnessMap,W=!!b.roughnessMap,lt=b.anisotropy>0,M=b.clearcoat>0,x=b.dispersion>0,F=b.iridescence>0,Y=b.sheen>0,tt=b.transmission>0,G=lt&&!!b.anisotropyMap,Mt=M&&!!b.clearcoatMap,ut=M&&!!b.clearcoatNormalMap,Tt=M&&!!b.clearcoatRoughnessMap,St=F&&!!b.iridescenceMap,at=F&&!!b.iridescenceThicknessMap,ft=Y&&!!b.sheenColorMap,At=Y&&!!b.sheenRoughnessMap,wt=!!b.specularMap,vt=!!b.specularColorMap,Ft=!!b.specularIntensityMap,U=tt&&!!b.transmissionMap,_t=tt&&!!b.thicknessMap,mt=!!b.gradientMap,xt=!!b.alphaMap,ct=b.alphaTest>0,nt=!!b.alphaHash,Rt=!!b.extensions;let Gt=gi;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Gt=n.toneMapping);const pe={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:Jt,fragmentShader:ee,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Dt,batchingColor:Dt&&I._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&I.instanceColor!==null,instancingMorph:Vt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ps,alphaToCoverage:!!b.alphaToCoverage,map:jt,matcap:R,envMap:C,envMapMode:C&&it.mapping,envMapCubeUVHeight:X,aoMap:k,lightMap:y,bumpMap:Z,normalMap:J,displacementMap:f&&ot,emissiveMap:j,normalMapObjectSpace:J&&b.normalMapType===B0,normalMapTangentSpace:J&&b.normalMapType===Rc,metalnessMap:rt,roughnessMap:W,anisotropy:lt,anisotropyMap:G,clearcoat:M,clearcoatMap:Mt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Tt,dispersion:x,iridescence:F,iridescenceMap:St,iridescenceThicknessMap:at,sheen:Y,sheenColorMap:ft,sheenRoughnessMap:At,specularMap:wt,specularColorMap:vt,specularIntensityMap:Ft,transmission:tt,transmissionMap:U,thicknessMap:_t,gradientMap:mt,opaque:b.transparent===!1&&b.blending===Ts&&b.alphaToCoverage===!1,alphaMap:xt,alphaTest:ct,alphaHash:nt,combine:b.combine,mapUv:jt&&_(b.map.channel),aoMapUv:k&&_(b.aoMap.channel),lightMapUv:y&&_(b.lightMap.channel),bumpMapUv:Z&&_(b.bumpMap.channel),normalMapUv:J&&_(b.normalMap.channel),displacementMapUv:ot&&_(b.displacementMap.channel),emissiveMapUv:j&&_(b.emissiveMap.channel),metalnessMapUv:rt&&_(b.metalnessMap.channel),roughnessMapUv:W&&_(b.roughnessMap.channel),anisotropyMapUv:G&&_(b.anisotropyMap.channel),clearcoatMapUv:Mt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(b.sheenRoughnessMap.channel),specularMapUv:wt&&_(b.specularMap.channel),specularColorMapUv:vt&&_(b.specularColorMap.channel),specularIntensityMapUv:Ft&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:_t&&_(b.thicknessMap.channel),alphaMapUv:xt&&_(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(J||lt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Q.attributes.uv&&(jt||xt),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:yt,skinning:I.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:zt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:jt&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===re,decodeVideoTextureEmissive:j&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Cn,flipSided:b.side===We,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Rt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&b.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function p(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)v.push(L),v.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(w(v,b),E(v,b),v.push(n.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function w(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function E(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function T(b){const v=g[b.type];let L;if(v){const D=Rn[v];L=px.clone(D.uniforms)}else L=b.uniforms;return L}function P(b,v){let L;for(let D=0,I=u.length;D<I;D++){const z=u[D];if(z.cacheKey===v){L=z,++L.usedTimes;break}}return L===void 0&&(L=new nb(n,v,b,r),u.push(L)),L}function A(b){if(--b.usedTimes===0){const v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function N(b){l.remove(b)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:P,releaseProgram:A,releaseShaderCache:N,programs:u,dispose:H}}function ob(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function lb(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ah(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||lb),i.length>1&&i.sort(f||Ah),s.length>1&&s.sort(f||Ah)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function cb(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new wh,n.set(i,[a])):s>=r.length?(a=new wh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ub(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Xt};break;case"SpotLight":e={position:new O,direction:new O,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function hb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let fb=0;function db(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function pb(n){const t=new ub,e=hb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new de,a=new de;function o(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,w=0,E=0,T=0,P=0,A=0,N=0;c.sort(db);for(let b=0,v=c.length;b<v;b++){const L=c[b],D=L.color,I=L.intensity,z=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=D.r*I,h+=D.g*I,f+=D.b*I;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],I);N++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const it=L.shadow,X=e.get(L);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=L.shadow.matrix,w++}i.directional[d]=K,d++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(D).multiplyScalar(I),K.distance=z,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[_]=K;const it=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,it.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=it.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=Q,T++}_++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(D).multiplyScalar(I),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const it=L.shadow,X=e.get(L);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,X.shadowCameraNear=it.camera.near,X.shadowCameraFar=it.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=K,g++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(I),K.groundColor.copy(L.groundColor).multiplyScalar(I),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const H=i.hash;(H.directionalLength!==d||H.pointLength!==g||H.spotLength!==_||H.rectAreaLength!==m||H.hemiLength!==p||H.numDirectionalShadows!==w||H.numPointShadows!==E||H.numSpotShadows!==T||H.numSpotMaps!==P||H.numLightProbes!==N)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=T+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,H.directionalLength=d,H.pointLength=g,H.spotLength=_,H.rectAreaLength=m,H.hemiLength=p,H.numDirectionalShadows=w,H.numPointShadows=E,H.numSpotShadows=T,H.numSpotMaps=P,H.numLightProbes=N,i.version=fb++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const E=c[p];if(E.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(E.isSpotLight){const T=i.spot[d];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Rh(n){const t=new pb(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function mb(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Rh(n),t.set(s,[o])):r>=a.length?(o=new Rh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
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
}`;function _b(n,t,e){let i=new Pc;const s=new Lt,r=new Lt,a=new le,o=new Ix({depthPacking:O0}),l=new Ux,c={},u=e.maxTextureSize,h={[Si]:We,[We]:Si,[Cn]:Cn},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:xb,fragmentShader:gb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let p=this.type;this.render=function(A,N,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),v=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Zn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=p!==Wn&&this.type===Wn,z=p===Wn&&this.type!==Wn;for(let Q=0,K=A.length;Q<K;Q++){const it=A[Q],X=it.shadow;if(X===void 0){Ht("WebGLShadowMap:",it,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ht=X.getFrameExtents();if(s.multiply(ht),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,X.mapSize.y=r.y)),X.map===null||I===!0||z===!0){const Pt=this.type!==Wn?{minFilter:rn,magFilter:rn}:{};X.map!==null&&X.map.dispose(),X.map=new Wi(s.x,s.y,Pt),X.map.texture.name=it.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const pt=X.getViewportCount();for(let Pt=0;Pt<pt;Pt++){const zt=X.getViewport(Pt);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),D.viewport(a),X.updateMatrices(it,Pt),i=X.getFrustum(),T(N,H,X.camera,it,this.type)}X.isPointLightShadow!==!0&&this.type===Wn&&w(X,H),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,v,L)};function w(A,N){const H=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(N,null,H,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(N,null,H,d,_,null)}function E(A,N,H,b){let v=null;const L=H.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)v=L;else if(v=H.isPointLight===!0?l:o,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const D=v.uuid,I=N.uuid;let z=c[D];z===void 0&&(z={},c[D]=z);let Q=z[I];Q===void 0&&(Q=v.clone(),z[I]=Q,N.addEventListener("dispose",P)),v=Q}if(v.visible=N.visible,v.wireframe=N.wireframe,b===Wn?v.side=N.shadowSide!==null?N.shadowSide:N.side:v.side=N.shadowSide!==null?N.shadowSide:h[N.side],v.alphaMap=N.alphaMap,v.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,v.map=N.map,v.clipShadows=N.clipShadows,v.clippingPlanes=N.clippingPlanes,v.clipIntersection=N.clipIntersection,v.displacementMap=N.displacementMap,v.displacementScale=N.displacementScale,v.displacementBias=N.displacementBias,v.wireframeLinewidth=N.wireframeLinewidth,v.linewidth=N.linewidth,H.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=n.properties.get(v);D.light=H}return v}function T(A,N,H,b,v){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Wn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld);const I=t.update(A),z=A.material;if(Array.isArray(z)){const Q=I.groups;for(let K=0,it=Q.length;K<it;K++){const X=Q[K],ht=z[X.materialIndex];if(ht&&ht.visible){const pt=E(A,ht,b,v);A.onBeforeShadow(n,A,N,H,I,pt,X),n.renderBufferDirect(H,null,I,pt,A,X),A.onAfterShadow(n,A,N,H,I,pt,X)}}}else if(z.visible){const Q=E(A,z,b,v);A.onBeforeShadow(n,A,N,H,I,Q,null),n.renderBufferDirect(H,null,I,Q,A,null),A.onAfterShadow(n,A,N,H,I,Q,null)}}const D=A.children;for(let I=0,z=D.length;I<z;I++)T(D[I],N,H,b,v)}function P(A){A.target.removeEventListener("dispose",P);for(const H in c){const b=c[H],v=A.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const vb={[hl]:fl,[dl]:xl,[pl]:gl,[ws]:ml,[fl]:hl,[xl]:dl,[gl]:pl,[ml]:ws};function Mb(n,t){function e(){let U=!1;const _t=new le;let mt=null;const xt=new le(0,0,0,0);return{setMask:function(ct){mt!==ct&&!U&&(n.colorMask(ct,ct,ct,ct),mt=ct)},setLocked:function(ct){U=ct},setClear:function(ct,nt,Rt,Gt,pe){pe===!0&&(ct*=Gt,nt*=Gt,Rt*=Gt),_t.set(ct,nt,Rt,Gt),xt.equals(_t)===!1&&(n.clearColor(ct,nt,Rt,Gt),xt.copy(_t))},reset:function(){U=!1,mt=null,xt.set(-1,0,0,0)}}}function i(){let U=!1,_t=!1,mt=null,xt=null,ct=null;return{setReversed:function(nt){if(_t!==nt){const Rt=t.get("EXT_clip_control");nt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),_t=nt;const Gt=ct;ct=null,this.setClear(Gt)}},getReversed:function(){return _t},setTest:function(nt){nt?st(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(nt){mt!==nt&&!U&&(n.depthMask(nt),mt=nt)},setFunc:function(nt){if(_t&&(nt=vb[nt]),xt!==nt){switch(nt){case hl:n.depthFunc(n.NEVER);break;case fl:n.depthFunc(n.ALWAYS);break;case dl:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case pl:n.depthFunc(n.EQUAL);break;case ml:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=nt}},setLocked:function(nt){U=nt},setClear:function(nt){ct!==nt&&(_t&&(nt=1-nt),n.clearDepth(nt),ct=nt)},reset:function(){U=!1,mt=null,xt=null,ct=null,_t=!1}}}function s(){let U=!1,_t=null,mt=null,xt=null,ct=null,nt=null,Rt=null,Gt=null,pe=null;return{setTest:function(ie){U||(ie?st(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(ie){_t!==ie&&!U&&(n.stencilMask(ie),_t=ie)},setFunc:function(ie,En,mn){(mt!==ie||xt!==En||ct!==mn)&&(n.stencilFunc(ie,En,mn),mt=ie,xt=En,ct=mn)},setOp:function(ie,En,mn){(nt!==ie||Rt!==En||Gt!==mn)&&(n.stencilOp(ie,En,mn),nt=ie,Rt=En,Gt=mn)},setLocked:function(ie){U=ie},setClear:function(ie){pe!==ie&&(n.clearStencil(ie),pe=ie)},reset:function(){U=!1,_t=null,mt=null,xt=null,ct=null,nt=null,Rt=null,Gt=null,pe=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,E=null,T=null,P=null,A=null,N=new Xt(0,0,0),H=0,b=!1,v=null,L=null,D=null,I=null,z=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,it=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=it>=2);let ht=null,pt={};const Pt=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),Jt=new le().fromArray(Pt),ee=new le().fromArray(zt);function ne(U,_t,mt,xt){const ct=new Uint8Array(4),nt=n.createTexture();n.bindTexture(U,nt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<mt;Rt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(_t+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return nt}const et={};et[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(n.DEPTH_TEST),a.setFunc(ws),Z(!1),J(Tu),st(n.CULL_FACE),k(Zn);function st(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function yt(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Vt(U,_t){return h[U]!==_t?(n.bindFramebuffer(U,_t),h[U]=_t,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_t),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function Dt(U,_t){let mt=d,xt=!1;if(U){mt=f.get(_t),mt===void 0&&(mt=[],f.set(_t,mt));const ct=U.textures;if(mt.length!==ct.length||mt[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,Rt=ct.length;nt<Rt;nt++)mt[nt]=n.COLOR_ATTACHMENT0+nt;mt.length=ct.length,xt=!0}}else mt[0]!==n.BACK&&(mt[0]=n.BACK,xt=!0);xt&&n.drawBuffers(mt)}function jt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const R={[zi]:n.FUNC_ADD,[c0]:n.FUNC_SUBTRACT,[u0]:n.FUNC_REVERSE_SUBTRACT};R[h0]=n.MIN,R[f0]=n.MAX;const C={[d0]:n.ZERO,[p0]:n.ONE,[m0]:n.SRC_COLOR,[cl]:n.SRC_ALPHA,[b0]:n.SRC_ALPHA_SATURATE,[v0]:n.DST_COLOR,[g0]:n.DST_ALPHA,[x0]:n.ONE_MINUS_SRC_COLOR,[ul]:n.ONE_MINUS_SRC_ALPHA,[M0]:n.ONE_MINUS_DST_COLOR,[_0]:n.ONE_MINUS_DST_ALPHA,[S0]:n.CONSTANT_COLOR,[y0]:n.ONE_MINUS_CONSTANT_COLOR,[E0]:n.CONSTANT_ALPHA,[T0]:n.ONE_MINUS_CONSTANT_ALPHA};function k(U,_t,mt,xt,ct,nt,Rt,Gt,pe,ie){if(U===Zn){_===!0&&(yt(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),U!==l0){if(U!==m||ie!==b){if((p!==zi||T!==zi)&&(n.blendEquation(n.FUNC_ADD),p=zi,T=zi),ie)switch(U){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ll:n.blendFunc(n.ONE,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Me("WebGLState: Invalid blending: ",U);break}else switch(U){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ll:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Au:Me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wu:Me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Me("WebGLState: Invalid blending: ",U);break}w=null,E=null,P=null,A=null,N.set(0,0,0),H=0,m=U,b=ie}return}ct=ct||_t,nt=nt||mt,Rt=Rt||xt,(_t!==p||ct!==T)&&(n.blendEquationSeparate(R[_t],R[ct]),p=_t,T=ct),(mt!==w||xt!==E||nt!==P||Rt!==A)&&(n.blendFuncSeparate(C[mt],C[xt],C[nt],C[Rt]),w=mt,E=xt,P=nt,A=Rt),(Gt.equals(N)===!1||pe!==H)&&(n.blendColor(Gt.r,Gt.g,Gt.b,pe),N.copy(Gt),H=pe),m=U,b=!1}function y(U,_t){U.side===Cn?yt(n.CULL_FACE):st(n.CULL_FACE);let mt=U.side===We;_t&&(mt=!mt),Z(mt),U.blending===Ts&&U.transparent===!1?k(Zn):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const xt=U.stencilWrite;o.setTest(xt),xt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),j(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(U){v!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),v=U)}function J(U){U!==a0?(st(n.CULL_FACE),U!==L&&(U===Tu?n.cullFace(n.BACK):U===o0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),L=U}function ot(U){U!==D&&(K&&n.lineWidth(U),D=U)}function j(U,_t,mt){U?(st(n.POLYGON_OFFSET_FILL),(I!==_t||z!==mt)&&(n.polygonOffset(_t,mt),I=_t,z=mt)):yt(n.POLYGON_OFFSET_FILL)}function rt(U){U?st(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function W(U){U===void 0&&(U=n.TEXTURE0+Q-1),ht!==U&&(n.activeTexture(U),ht=U)}function lt(U,_t,mt){mt===void 0&&(ht===null?mt=n.TEXTURE0+Q-1:mt=ht);let xt=pt[mt];xt===void 0&&(xt={type:void 0,texture:void 0},pt[mt]=xt),(xt.type!==U||xt.texture!==_t)&&(ht!==mt&&(n.activeTexture(mt),ht=mt),n.bindTexture(U,_t||et[U]),xt.type=U,xt.texture=_t)}function M(){const U=pt[ht];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function Y(){try{n.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function tt(){try{n.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ut(){try{n.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Tt(){try{n.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function St(){try{n.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function at(){try{n.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ft(U){Jt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Jt.copy(U))}function At(U){ee.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function wt(U,_t){let mt=c.get(_t);mt===void 0&&(mt=new WeakMap,c.set(_t,mt));let xt=mt.get(U);xt===void 0&&(xt=n.getUniformBlockIndex(_t,U.name),mt.set(U,xt))}function vt(U,_t){const xt=c.get(_t).get(U);l.get(_t)!==xt&&(n.uniformBlockBinding(_t,xt,U.__bindingPointIndex),l.set(_t,xt))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ht=null,pt={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,E=null,T=null,P=null,A=null,N=new Xt(0,0,0),H=0,b=!1,v=null,L=null,D=null,I=null,z=null,Jt.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:yt,bindFramebuffer:Vt,drawBuffers:Dt,useProgram:jt,setBlending:k,setMaterial:y,setFlipSided:Z,setCullFace:J,setLineWidth:ot,setPolygonOffset:j,setScissorTest:rt,activeTexture:W,bindTexture:lt,unbindTexture:M,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:St,texImage3D:at,updateUBOMapping:wt,uniformBlockBinding:vt,texStorage2D:ut,texStorage3D:Tt,texSubImage2D:Y,texSubImage3D:tt,compressedTexSubImage2D:G,compressedTexSubImage3D:Mt,scissor:ft,viewport:At,reset:Ft}}function bb(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return d?new OffscreenCanvas(M,x):mr("canvas")}function _(M,x,F){let Y=1;const tt=lt(M);if((tt.width>F||tt.height>F)&&(Y=F/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const G=Math.floor(Y*tt.width),Mt=Math.floor(Y*tt.height);h===void 0&&(h=g(G,Mt));const ut=x?g(G,Mt):h;return ut.width=G,ut.height=Mt,ut.getContext("2d").drawImage(M,0,0,G,Mt),Ht("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+G+"x"+Mt+")."),ut}else return"data"in M&&Ht("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(M,x,F,Y,tt=!1){if(M!==null){if(n[M]!==void 0)return n[M];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=x;if(x===n.RED&&(F===n.FLOAT&&(G=n.R32F),F===n.HALF_FLOAT&&(G=n.R16F),F===n.UNSIGNED_BYTE&&(G=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.R8UI),F===n.UNSIGNED_SHORT&&(G=n.R16UI),F===n.UNSIGNED_INT&&(G=n.R32UI),F===n.BYTE&&(G=n.R8I),F===n.SHORT&&(G=n.R16I),F===n.INT&&(G=n.R32I)),x===n.RG&&(F===n.FLOAT&&(G=n.RG32F),F===n.HALF_FLOAT&&(G=n.RG16F),F===n.UNSIGNED_BYTE&&(G=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RG8UI),F===n.UNSIGNED_SHORT&&(G=n.RG16UI),F===n.UNSIGNED_INT&&(G=n.RG32UI),F===n.BYTE&&(G=n.RG8I),F===n.SHORT&&(G=n.RG16I),F===n.INT&&(G=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGB8UI),F===n.UNSIGNED_SHORT&&(G=n.RGB16UI),F===n.UNSIGNED_INT&&(G=n.RGB32UI),F===n.BYTE&&(G=n.RGB8I),F===n.SHORT&&(G=n.RGB16I),F===n.INT&&(G=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),F===n.UNSIGNED_INT&&(G=n.RGBA32UI),F===n.BYTE&&(G=n.RGBA8I),F===n.SHORT&&(G=n.RGBA16I),F===n.INT&&(G=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),x===n.RGBA){const Mt=tt?Ta:Zt.getTransfer(Y);F===n.FLOAT&&(G=n.RGBA32F),F===n.HALF_FLOAT&&(G=n.RGBA16F),F===n.UNSIGNED_BYTE&&(G=Mt===re?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function T(M,x){let F;return M?x===null||x===ki||x===fr?F=n.DEPTH24_STENCIL8:x===$n?F=n.DEPTH32F_STENCIL8:x===hr&&(F=n.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ki||x===fr?F=n.DEPTH_COMPONENT24:x===$n?F=n.DEPTH_COMPONENT32F:x===hr&&(F=n.DEPTH_COMPONENT16),F}function P(M,x){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==rn&&M.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function A(M){const x=M.target;x.removeEventListener("dispose",A),H(x),x.isVideoTexture&&u.delete(x)}function N(M){const x=M.target;x.removeEventListener("dispose",N),v(x)}function H(M){const x=i.get(M);if(x.__webglInit===void 0)return;const F=M.source,Y=f.get(F);if(Y){const tt=Y[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(M),Object.keys(Y).length===0&&f.delete(F)}i.remove(M)}function b(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const F=M.source,Y=f.get(F);delete Y[x.__cacheKey],a.memory.textures--}function v(M){const x=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let tt=0;tt<x.__webglFramebuffer[Y].length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[Y][tt]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=M.textures;for(let Y=0,tt=F.length;Y<tt;Y++){const G=i.get(F[Y]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(F[Y])}i.remove(M)}let L=0;function D(){L=0}function I(){const M=L;return M>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),L+=1,M}function z(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function Q(M,x){const F=i.get(M);if(M.isVideoTexture&&rt(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){const Y=M.image;if(Y===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{et(F,M,x);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function K(M,x){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){et(F,M,x);return}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function it(M,x){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){et(F,M,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function X(M,x){const F=i.get(M);if(M.version>0&&F.__version!==M.version){st(F,M,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const ht={[Ml]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[bl]:n.MIRRORED_REPEAT},pt={[rn]:n.NEAREST,[N0]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[fo]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},Pt={[z0]:n.NEVER,[X0]:n.ALWAYS,[V0]:n.LESS,[ed]:n.LEQUAL,[H0]:n.EQUAL,[W0]:n.GEQUAL,[G0]:n.GREATER,[k0]:n.NOTEQUAL};function zt(M,x){if(x.type===$n&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===fo||x.magFilter===Cr||x.magFilter===Hi||x.minFilter===fn||x.minFilter===fo||x.minFilter===Cr||x.minFilter===Hi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ht[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ht[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ht[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,pt[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===rn||x.minFilter!==Cr&&x.minFilter!==Hi||x.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Jt(M,x){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",A));const Y=x.source;let tt=f.get(Y);tt===void 0&&(tt={},f.set(Y,tt));const G=z(x);if(G!==M.__cacheKey){tt[G]===void 0&&(tt[G]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),tt[G].usedTimes++;const Mt=tt[M.__cacheKey];Mt!==void 0&&(tt[M.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(x)),M.__cacheKey=G,M.__webglTexture=tt[G].texture}return F}function ee(M,x,F){return Math.floor(Math.floor(M/F)/x)}function ne(M,x,F,Y){const G=M.updateRanges;if(G.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,Y,x.data);else{G.sort((at,ft)=>at.start-ft.start);let Mt=0;for(let at=1;at<G.length;at++){const ft=G[Mt],At=G[at],wt=ft.start+ft.count,vt=ee(At.start,x.width,4),Ft=ee(ft.start,x.width,4);At.start<=wt+1&&vt===Ft&&ee(At.start+At.count-1,x.width,4)===vt?ft.count=Math.max(ft.count,At.start+At.count-ft.start):(++Mt,G[Mt]=At)}G.length=Mt+1;const ut=n.getParameter(n.UNPACK_ROW_LENGTH),Tt=n.getParameter(n.UNPACK_SKIP_PIXELS),St=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let at=0,ft=G.length;at<ft;at++){const At=G[at],wt=Math.floor(At.start/4),vt=Math.ceil(At.count/4),Ft=wt%x.width,U=Math.floor(wt/x.width),_t=vt,mt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Ft,U,_t,mt,F,Y,x.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ut),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,St)}}function et(M,x,F){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const tt=Jt(M,x),G=x.source;e.bindTexture(Y,M.__webglTexture,n.TEXTURE0+F);const Mt=i.get(G);if(G.version!==Mt.__version||tt===!0){e.activeTexture(n.TEXTURE0+F);const ut=Zt.getPrimaries(Zt.workingColorSpace),Tt=x.colorSpace===pi?null:Zt.getPrimaries(x.colorSpace),St=x.colorSpace===pi||ut===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let at=_(x.image,!1,s.maxTextureSize);at=W(x,at);const ft=r.convert(x.format,x.colorSpace),At=r.convert(x.type);let wt=E(x.internalFormat,ft,At,x.colorSpace,x.isVideoTexture);zt(Y,x);let vt;const Ft=x.mipmaps,U=x.isVideoTexture!==!0,_t=Mt.__version===void 0||tt===!0,mt=G.dataReady,xt=P(x,at);if(x.isDepthTexture)wt=T(x.format===pr,x.type),_t&&(U?e.texStorage2D(n.TEXTURE_2D,1,wt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,wt,at.width,at.height,0,ft,At,null));else if(x.isDataTexture)if(Ft.length>0){U&&_t&&e.texStorage2D(n.TEXTURE_2D,xt,wt,Ft[0].width,Ft[0].height);for(let ct=0,nt=Ft.length;ct<nt;ct++)vt=Ft[ct],U?mt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,vt.width,vt.height,ft,At,vt.data):e.texImage2D(n.TEXTURE_2D,ct,wt,vt.width,vt.height,0,ft,At,vt.data);x.generateMipmaps=!1}else U?(_t&&e.texStorage2D(n.TEXTURE_2D,xt,wt,at.width,at.height),mt&&ne(x,at,ft,At)):e.texImage2D(n.TEXTURE_2D,0,wt,at.width,at.height,0,ft,At,at.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&_t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,wt,Ft[0].width,Ft[0].height,at.depth);for(let ct=0,nt=Ft.length;ct<nt;ct++)if(vt=Ft[ct],x.format!==Mn)if(ft!==null)if(U){if(mt)if(x.layerUpdates.size>0){const Rt=rh(vt.width,vt.height,x.format,x.type);for(const Gt of x.layerUpdates){const pe=vt.data.subarray(Gt*Rt/vt.data.BYTES_PER_ELEMENT,(Gt+1)*Rt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,Gt,vt.width,vt.height,1,ft,pe)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,vt.width,vt.height,at.depth,ft,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,wt,vt.width,vt.height,at.depth,0,vt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?mt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,vt.width,vt.height,at.depth,ft,At,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,wt,vt.width,vt.height,at.depth,0,ft,At,vt.data)}else{U&&_t&&e.texStorage2D(n.TEXTURE_2D,xt,wt,Ft[0].width,Ft[0].height);for(let ct=0,nt=Ft.length;ct<nt;ct++)vt=Ft[ct],x.format!==Mn?ft!==null?U?mt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,vt.width,vt.height,ft,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,wt,vt.width,vt.height,0,vt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?mt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,vt.width,vt.height,ft,At,vt.data):e.texImage2D(n.TEXTURE_2D,ct,wt,vt.width,vt.height,0,ft,At,vt.data)}else if(x.isDataArrayTexture)if(U){if(_t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,wt,at.width,at.height,at.depth),mt)if(x.layerUpdates.size>0){const ct=rh(at.width,at.height,x.format,x.type);for(const nt of x.layerUpdates){const Rt=at.data.subarray(nt*ct/at.data.BYTES_PER_ELEMENT,(nt+1)*ct/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,ft,At,Rt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,ft,At,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,at.width,at.height,at.depth,0,ft,At,at.data);else if(x.isData3DTexture)U?(_t&&e.texStorage3D(n.TEXTURE_3D,xt,wt,at.width,at.height,at.depth),mt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,ft,At,at.data)):e.texImage3D(n.TEXTURE_3D,0,wt,at.width,at.height,at.depth,0,ft,At,at.data);else if(x.isFramebufferTexture){if(_t)if(U)e.texStorage2D(n.TEXTURE_2D,xt,wt,at.width,at.height);else{let ct=at.width,nt=at.height;for(let Rt=0;Rt<xt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,wt,ct,nt,0,ft,At,null),ct>>=1,nt>>=1}}else if(Ft.length>0){if(U&&_t){const ct=lt(Ft[0]);e.texStorage2D(n.TEXTURE_2D,xt,wt,ct.width,ct.height)}for(let ct=0,nt=Ft.length;ct<nt;ct++)vt=Ft[ct],U?mt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,ft,At,vt):e.texImage2D(n.TEXTURE_2D,ct,wt,ft,At,vt);x.generateMipmaps=!1}else if(U){if(_t){const ct=lt(at);e.texStorage2D(n.TEXTURE_2D,xt,wt,ct.width,ct.height)}mt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,At,at)}else e.texImage2D(n.TEXTURE_2D,0,wt,ft,At,at);m(x)&&p(Y),Mt.__version=G.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function st(M,x,F){if(x.image.length!==6)return;const Y=Jt(M,x),tt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);const G=i.get(tt);if(tt.version!==G.__version||Y===!0){e.activeTexture(n.TEXTURE0+F);const Mt=Zt.getPrimaries(Zt.workingColorSpace),ut=x.colorSpace===pi?null:Zt.getPrimaries(x.colorSpace),Tt=x.colorSpace===pi||Mt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const St=x.isCompressedTexture||x.image[0].isCompressedTexture,at=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let nt=0;nt<6;nt++)!St&&!at?ft[nt]=_(x.image[nt],!0,s.maxCubemapSize):ft[nt]=at?x.image[nt].image:x.image[nt],ft[nt]=W(x,ft[nt]);const At=ft[0],wt=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),Ft=E(x.internalFormat,wt,vt,x.colorSpace),U=x.isVideoTexture!==!0,_t=G.__version===void 0||Y===!0,mt=tt.dataReady;let xt=P(x,At);zt(n.TEXTURE_CUBE_MAP,x);let ct;if(St){U&&_t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Ft,At.width,At.height);for(let nt=0;nt<6;nt++){ct=ft[nt].mipmaps;for(let Rt=0;Rt<ct.length;Rt++){const Gt=ct[Rt];x.format!==Mn?wt!==null?U?mt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,0,0,Gt.width,Gt.height,wt,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,Ft,Gt.width,Gt.height,0,Gt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,0,0,Gt.width,Gt.height,wt,vt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,Ft,Gt.width,Gt.height,0,wt,vt,Gt.data)}}}else{if(ct=x.mipmaps,U&&_t){ct.length>0&&xt++;const nt=lt(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Ft,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){U?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ft[nt].width,ft[nt].height,wt,vt,ft[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ft,ft[nt].width,ft[nt].height,0,wt,vt,ft[nt].data);for(let Rt=0;Rt<ct.length;Rt++){const pe=ct[Rt].image[nt].image;U?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,0,0,pe.width,pe.height,wt,vt,pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,Ft,pe.width,pe.height,0,wt,vt,pe.data)}}else{U?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt,vt,ft[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ft,wt,vt,ft[nt]);for(let Rt=0;Rt<ct.length;Rt++){const Gt=ct[Rt];U?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,0,0,wt,vt,Gt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,Ft,wt,vt,Gt.image[nt])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),G.__version=tt.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function yt(M,x,F,Y,tt,G){const Mt=r.convert(F.format,F.colorSpace),ut=r.convert(F.type),Tt=E(F.internalFormat,Mt,ut,F.colorSpace),St=i.get(x),at=i.get(F);if(at.__renderTarget=x,!St.__hasExternalTextures){const ft=Math.max(1,x.width>>G),At=Math.max(1,x.height>>G);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,G,Tt,ft,At,x.depth,0,Mt,ut,null):e.texImage2D(tt,G,Tt,ft,At,0,Mt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),j(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,tt,at.__webglTexture,0,ot(x)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,tt,at.__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(M,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer){const Y=x.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,G=T(x.stencilBuffer,tt),Mt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=ot(x);j(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,G,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,G,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,G,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,M)}else{const Y=x.textures;for(let tt=0;tt<Y.length;tt++){const G=Y[tt],Mt=r.convert(G.format,G.colorSpace),ut=r.convert(G.type),Tt=E(G.internalFormat,Mt,ut,G.colorSpace),St=ot(x);F&&j(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Tt,x.width,x.height):j(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,Tt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const tt=Y.__webglTexture,G=ot(x);if(x.depthTexture.format===dr)j(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(x.depthTexture.format===pr)j(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function jt(M){const x=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const Y=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Y}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=M.texture.mipmaps;Y&&Y.length>0?Dt(x.__webglFramebuffer[0],M):Dt(x.__webglFramebuffer,M)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),Vt(x.__webglDepthbuffer[Y],M,!1);else{const tt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,G)}}else{const Y=M.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Vt(x.__webglDepthbuffer,M,!1);else{const tt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,G)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function R(M,x,F){const Y=i.get(M);x!==void 0&&yt(Y.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&jt(M)}function C(M){const x=M.texture,F=i.get(M),Y=i.get(x);M.addEventListener("dispose",N);const tt=M.textures,G=M.isWebGLCubeRenderTarget===!0,Mt=tt.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ut]=[];for(let Tt=0;Tt<x.mipmaps.length;Tt++)F.__webglFramebuffer[ut][Tt]=n.createFramebuffer()}else F.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)F.__webglFramebuffer[ut]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let ut=0,Tt=tt.length;ut<Tt;ut++){const St=i.get(tt[ut]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&j(M)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){const Tt=tt[ut];F.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);const St=r.convert(Tt.format,Tt.colorSpace),at=r.convert(Tt.type),ft=E(Tt.internalFormat,St,at,Tt.colorSpace,M.isXRRenderTarget===!0),At=ot(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,ft,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Vt(F.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(n.TEXTURE_CUBE_MAP,x);for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0)for(let Tt=0;Tt<x.mipmaps.length;Tt++)yt(F.__webglFramebuffer[ut][Tt],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt);else yt(F.__webglFramebuffer[ut],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ut=0,Tt=tt.length;ut<Tt;ut++){const St=tt[ut],at=i.get(St);let ft=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ft=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,at.__webglTexture),zt(ft,St),yt(F.__webglFramebuffer,M,St,n.COLOR_ATTACHMENT0+ut,ft,0),m(St)&&p(ft)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ut=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Y.__webglTexture),zt(ut,x),x.mipmaps&&x.mipmaps.length>0)for(let Tt=0;Tt<x.mipmaps.length;Tt++)yt(F.__webglFramebuffer[Tt],M,x,n.COLOR_ATTACHMENT0,ut,Tt);else yt(F.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,ut,0);m(x)&&p(ut),e.unbindTexture()}M.depthBuffer&&jt(M)}function k(M){const x=M.textures;for(let F=0,Y=x.length;F<Y;F++){const tt=x[F];if(m(tt)){const G=w(M),Mt=i.get(tt).__webglTexture;e.bindTexture(G,Mt),p(G),e.unbindTexture()}}}const y=[],Z=[];function J(M){if(M.samples>0){if(j(M)===!1){const x=M.textures,F=M.width,Y=M.height;let tt=n.COLOR_BUFFER_BIT;const G=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(M),ut=x.length>1;if(ut)for(let St=0;St<x.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const Tt=M.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let St=0;St<x.length;St++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[St]);const at=i.get(x[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,at,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,tt,n.NEAREST),l===!0&&(y.length=0,Z.length=0,y.push(n.COLOR_ATTACHMENT0+St),M.depthBuffer&&M.resolveDepthBuffer===!1&&(y.push(G),Z.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,y))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let St=0;St<x.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[St]);const at=i.get(x[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,at,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const x=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ot(M){return Math.min(s.maxSamples,M.samples)}function j(M){const x=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function rt(M){const x=a.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function W(M,x){const F=M.colorSpace,Y=M.format,tt=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==Ps&&F!==pi&&(Zt.getTransfer(F)===re?(Y!==Mn||tt!==Un)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Me("WebGLTextures: Unsupported texture color space:",F)),x}function lt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=Q,this.setTexture2DArray=K,this.setTexture3D=it,this.setTextureCube=X,this.rebindTextures=R,this.setupRenderTarget=C,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=j}function Sb(n,t){function e(i,s=pi){let r;const a=Zt.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===Sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$f)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jf)return n.BYTE;if(i===Kf)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Ls)return n.HALF_FLOAT;if(i===Jf)return n.ALPHA;if(i===Qf)return n.RGB;if(i===Mn)return n.RGBA;if(i===dr)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===td)return n.RED;if(i===Ec)return n.RED_INTEGER;if(i===Tc)return n.RG;if(i===Ac)return n.RG_INTEGER;if(i===wc)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===ha)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sl||i===yl||i===El||i===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===wl||i===Rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===wl)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===Vl||i===Hl||i===Gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ul)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ol)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===Wl||i===Xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===kl)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yl||i===ql||i===jl||i===Kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eb=`
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

}`;class Tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new md(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ei({vertexShader:yb,fragmentShader:Eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dn(new qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ab extends Yi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Tb,p={},w=e.getContextAttributes();let E=null,T=null;const P=[],A=[],N=new Lt;let H=null;const b=new nn;b.viewport=new le;const v=new nn;v.viewport=new le;const L=[b,v],D=new kx;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let st=P[et];return st===void 0&&(st=new No,P[et]=st),st.getTargetRaySpace()},this.getControllerGrip=function(et){let st=P[et];return st===void 0&&(st=new No,P[et]=st),st.getGripSpace()},this.getHand=function(et){let st=P[et];return st===void 0&&(st=new No,P[et]=st),st.getHandSpace()};function Q(et){const st=A.indexOf(et.inputSource);if(st===-1)return;const yt=P[st];yt!==void 0&&(yt.update(et.inputSource,et.frame,c||a),yt.dispatchEvent({type:et.type,data:et.inputSource}))}function K(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",it);for(let et=0;et<P.length;et++){const st=A[et];st!==null&&(A[et]=null,P[et].disconnect(st))}I=null,z=null,m.reset();for(const et in p)delete p[et];t.setRenderTarget(E),d=null,f=null,h=null,s=null,T=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(H),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",it),w.xrCompatible!==!0&&await e.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(N),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Vt=null,Dt=null;w.depth&&(Dt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=w.stencil?pr:dr,Vt=w.stencil?fr:ki);const jt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Wi(f.textureWidth,f.textureHeight,{format:Mn,type:Un,depthTexture:new pd(f.textureWidth,f.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Wi(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(et){for(let st=0;st<et.removed.length;st++){const yt=et.removed[st],Vt=A.indexOf(yt);Vt>=0&&(A[Vt]=null,P[Vt].disconnect(yt))}for(let st=0;st<et.added.length;st++){const yt=et.added[st];let Vt=A.indexOf(yt);if(Vt===-1){for(let jt=0;jt<P.length;jt++)if(jt>=A.length){A.push(yt),Vt=jt;break}else if(A[jt]===null){A[jt]=yt,Vt=jt;break}if(Vt===-1)break}const Dt=P[Vt];Dt&&Dt.connect(yt)}}const X=new O,ht=new O;function pt(et,st,yt){X.setFromMatrixPosition(st.matrixWorld),ht.setFromMatrixPosition(yt.matrixWorld);const Vt=X.distanceTo(ht),Dt=st.projectionMatrix.elements,jt=yt.projectionMatrix.elements,R=Dt[14]/(Dt[10]-1),C=Dt[14]/(Dt[10]+1),k=(Dt[9]+1)/Dt[5],y=(Dt[9]-1)/Dt[5],Z=(Dt[8]-1)/Dt[0],J=(jt[8]+1)/jt[0],ot=R*Z,j=R*J,rt=Vt/(-Z+J),W=rt*-Z;if(st.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(W),et.translateZ(rt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Dt[10]===-1)et.projectionMatrix.copy(st.projectionMatrix),et.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const lt=R+rt,M=C+rt,x=ot-W,F=j+(Vt-W),Y=k*C/M*lt,tt=y*C/M*lt;et.projectionMatrix.makePerspective(x,F,Y,tt,lt,M),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Pt(et,st){st===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(st.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let st=et.near,yt=et.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),D.near=v.near=b.near=st,D.far=v.far=b.far=yt,(I!==D.near||z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,z=D.far),D.layers.mask=et.layers.mask|6,b.layers.mask=D.layers.mask&3,v.layers.mask=D.layers.mask&5;const Vt=et.parent,Dt=D.cameras;Pt(D,Vt);for(let jt=0;jt<Dt.length;jt++)Pt(Dt[jt],Vt);Dt.length===2?pt(D,b,v):D.projectionMatrix.copy(b.projectionMatrix),zt(et,D,Vt)};function zt(et,st,yt){yt===null?et.matrix.copy(st.matrixWorld):(et.matrix.copy(yt.matrixWorld),et.matrix.invert(),et.matrix.multiply(st.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(st.projectionMatrix),et.projectionMatrixInverse.copy(st.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Zl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(et){return p[et]};let Jt=null;function ee(et,st){if(u=st.getViewerPose(c||a),g=st,u!==null){const yt=u.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let Vt=!1;yt.length!==D.cameras.length&&(D.cameras.length=0,Vt=!0);for(let C=0;C<yt.length;C++){const k=yt[C];let y=null;if(d!==null)y=d.getViewport(k);else{const J=h.getViewSubImage(f,k);y=J.viewport,C===0&&(t.setRenderTargetTextures(T,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(T))}let Z=L[C];Z===void 0&&(Z=new nn,Z.layers.enable(C),Z.viewport=new le,L[C]=Z),Z.matrix.fromArray(k.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(k.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(y.x,y.y,y.width,y.height),C===0&&(D.matrix.copy(Z.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Vt===!0&&D.cameras.push(Z)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const C=h.getDepthInformation(yt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Dt&&Dt.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let C=0;C<yt.length;C++){const k=yt[C].camera;if(k){let y=p[k];y||(y=new md,p[k]=y);const Z=h.getCameraImage(k);y.sourceTexture=Z}}}}for(let yt=0;yt<P.length;yt++){const Vt=A[yt],Dt=P[yt];Vt!==null&&Dt!==void 0&&Dt.update(Vt,st,c||a)}Jt&&Jt(et,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const ne=new _d;ne.setAnimationLoop(ee),this.setAnimationLoop=function(et){Jt=et},this.dispose=function(){}}}const Fi=new yn,wb=new de;function Rb(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ld(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,E,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),E=w.envMap,T=w.envMapRotation;E&&(m.envMap.value=E,Fi.copy(T),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(wb.makeRotationFromEuler(Fi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cb(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const T=E.program;i.uniformBlockBinding(w,T)}function c(w,E){let T=s[w.id];T===void 0&&(g(w),T=u(w),s[w.id]=T,w.addEventListener("dispose",m));const P=E.program;i.updateUBOMapping(w,P);const A=t.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function u(w){const E=h();w.__bindingPointIndex=E;const T=n.createBuffer(),P=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return Me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const E=s[w.id],T=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,N=T.length;A<N;A++){const H=Array.isArray(T[A])?T[A]:[T[A]];for(let b=0,v=H.length;b<v;b++){const L=H[b];if(d(L,A,b,P)===!0){const D=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let Q=0;Q<I.length;Q++){const K=I[Q],it=_(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,D+z,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,z),z+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,E,T,P){const A=w.value,N=E+"_"+T;if(P[N]===void 0)return typeof A=="number"||typeof A=="boolean"?P[N]=A:P[N]=A.clone(),!0;{const H=P[N];if(typeof A=="number"||typeof A=="boolean"){if(H!==A)return P[N]=A,!0}else if(H.equals(A)===!1)return H.copy(A),!0}return!1}function g(w){const E=w.uniforms;let T=0;const P=16;for(let N=0,H=E.length;N<H;N++){const b=Array.isArray(E[N])?E[N]:[E[N]];for(let v=0,L=b.length;v<L;v++){const D=b[v],I=Array.isArray(D.value)?D.value:[D.value];for(let z=0,Q=I.length;z<Q;z++){const K=I[z],it=_(K),X=T%P,ht=X%it.boundary,pt=X+ht;T+=ht,pt!==0&&P-pt<it.storage&&(T+=P-pt),D.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=it.storage}}}const A=T%P;return A>0&&(T+=P-A),w.__size=T,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ht("WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Pb=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let kn=null;function Db(){return kn===null&&(kn=new yx(Pb,32,32,Tc,Ls),kn.minFilter=fn,kn.magFilter=fn,kn.wrapS=Kn,kn.wrapT=Kn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class Lb{constructor(t={}){const{canvas:e=Y0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Set([wc,Ac,Ec]),_=new Set([Un,ki,hr,fr,Sc,yc]),m=new Uint32Array(4),p=new Int32Array(4);let w=null,E=null;const T=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=cn;let H=0,b=0,v=null,L=-1,D=null;const I=new le,z=new le;let Q=null;const K=new Xt(0);let it=0,X=e.width,ht=e.height,pt=1,Pt=null,zt=null;const Jt=new le(0,0,X,ht),ee=new le(0,0,X,ht);let ne=!1;const et=new Pc;let st=!1,yt=!1;const Vt=new de,Dt=new O,jt=new le,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function k(){return v===null?pt:1}let y=i;function Z(S,B){return e.getContext(S,B)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),y===null){const B="webgl2";if(y=Z(B,S),y===null)throw Z(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw S("WebGLRenderer: "+S.message),S}let J,ot,j,rt,W,lt,M,x,F,Y,tt,G,Mt,ut,Tt,St,at,ft,At,wt,vt,Ft,U,_t;function mt(){J=new Vv(y),J.init(),Ft=new Sb(y,J),ot=new Dv(y,J,t,Ft),j=new Mb(y,J),ot.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),rt=new kv(y),W=new ob,lt=new bb(y,J,j,W,ot,Ft,rt),M=new Iv(A),x=new zv(A),F=new qx(y),U=new Cv(y,F),Y=new Hv(y,F,rt,U),tt=new Xv(y,Y,F,rt),At=new Wv(y,ot,lt),St=new Lv(W),G=new ab(A,M,x,J,ot,U,St),Mt=new Rb(A,W),ut=new cb,Tt=new mb(J),ft=new Rv(A,M,x,j,tt,d,l),at=new _b(A,tt,ot),_t=new Cb(y,rt,ot,j),wt=new Pv(y,J,rt),vt=new Gv(y,J,rt),rt.programs=G.programs,A.capabilities=ot,A.extensions=J,A.properties=W,A.renderLists=ut,A.shadowMap=at,A.state=j,A.info=rt}mt();const xt=new Ab(A,y);this.xr=xt,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const S=J.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=J.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(S){S!==void 0&&(pt=S,this.setSize(X,ht,!1))},this.getSize=function(S){return S.set(X,ht)},this.setSize=function(S,B,q=!0){if(xt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,ht=B,e.width=Math.floor(S*pt),e.height=Math.floor(B*pt),q===!0&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(X*pt,ht*pt).floor()},this.setDrawingBufferSize=function(S,B,q){X=S,ht=B,pt=q,e.width=Math.floor(S*q),e.height=Math.floor(B*q),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(Jt)},this.setViewport=function(S,B,q,$){S.isVector4?Jt.set(S.x,S.y,S.z,S.w):Jt.set(S,B,q,$),j.viewport(I.copy(Jt).multiplyScalar(pt).round())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,B,q,$){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,B,q,$),j.scissor(z.copy(ee).multiplyScalar(pt).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){j.setScissorTest(ne=S)},this.setOpaqueSort=function(S){Pt=S},this.setTransparentSort=function(S){zt=S},this.getClearColor=function(S){return S.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,q=!0){let $=0;if(S){let V=!1;if(v!==null){const dt=v.texture.format;V=g.has(dt)}if(V){const dt=v.texture.type,bt=_.has(dt),Ct=ft.getClearColor(),Et=ft.getClearAlpha(),Ot=Ct.r,Bt=Ct.g,It=Ct.b;bt?(m[0]=Ot,m[1]=Bt,m[2]=It,m[3]=Et,y.clearBufferuiv(y.COLOR,0,m)):(p[0]=Ot,p[1]=Bt,p[2]=It,p[3]=Et,y.clearBufferiv(y.COLOR,0,p))}else $|=y.COLOR_BUFFER_BIT}B&&($|=y.DEPTH_BUFFER_BIT),q&&($|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),ft.dispose(),ut.dispose(),Tt.dispose(),W.dispose(),M.dispose(),x.dispose(),tt.dispose(),U.dispose(),_t.dispose(),G.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Uc),xt.removeEventListener("sessionend",Nc),Ei.stop()};function ct(S){S.preventDefault(),wa("WebGLRenderer: Context Lost."),N=!0}function nt(){wa("WebGLRenderer: Context Restored."),N=!1;const S=rt.autoReset,B=at.enabled,q=at.autoUpdate,$=at.needsUpdate,V=at.type;mt(),rt.autoReset=S,at.enabled=B,at.autoUpdate=q,at.needsUpdate=$,at.type=V}function Rt(S){Me("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Gt(S){const B=S.target;B.removeEventListener("dispose",Gt),pe(B)}function pe(S){ie(S),W.remove(S)}function ie(S){const B=W.get(S).programs;B!==void 0&&(B.forEach(function(q){G.releaseProgram(q)}),S.isShaderMaterial&&G.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,q,$,V,dt){B===null&&(B=R);const bt=V.isMesh&&V.matrixWorld.determinant()<0,Ct=Td(S,B,q,$,V);j.setMaterial($,bt);let Et=q.index,Ot=1;if($.wireframe===!0){if(Et=Y.getWireframeAttribute(q),Et===void 0)return;Ot=2}const Bt=q.drawRange,It=q.attributes.position;let Kt=Bt.start*Ot,se=(Bt.start+Bt.count)*Ot;dt!==null&&(Kt=Math.max(Kt,dt.start*Ot),se=Math.min(se,(dt.start+dt.count)*Ot)),Et!==null?(Kt=Math.max(Kt,0),se=Math.min(se,Et.count)):It!=null&&(Kt=Math.max(Kt,0),se=Math.min(se,It.count));const _e=se-Kt;if(_e<0||_e===1/0)return;U.setup(V,$,Ct,q,Et);let ve,ue=wt;if(Et!==null&&(ve=F.get(Et),ue=vt,ue.setIndex(ve)),V.isMesh)$.wireframe===!0?(j.setLineWidth($.wireframeLinewidth*k()),ue.setMode(y.LINES)):ue.setMode(y.TRIANGLES);else if(V.isLine){let Ut=$.linewidth;Ut===void 0&&(Ut=1),j.setLineWidth(Ut*k()),V.isLineSegments?ue.setMode(y.LINES):V.isLineLoop?ue.setMode(y.LINE_LOOP):ue.setMode(y.LINE_STRIP)}else V.isPoints?ue.setMode(y.POINTS):V.isSprite&&ue.setMode(y.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)xr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ue.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ut=V._multiDrawStarts,xe=V._multiDrawCounts,$t=V._multiDrawCount,Ze=Et?F.get(Et).bytesPerElement:1,qi=W.get($).currentProgram.getUniforms();for(let Je=0;Je<$t;Je++)qi.setValue(y,"_gl_DrawID",Je),ue.render(Ut[Je]/Ze,xe[Je])}else if(V.isInstancedMesh)ue.renderInstances(Kt,_e,V.count);else if(q.isInstancedBufferGeometry){const Ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,xe=Math.min(q.instanceCount,Ut);ue.renderInstances(Kt,_e,xe)}else ue.render(Kt,_e)};function En(S,B,q){S.transparent===!0&&S.side===Cn&&S.forceSinglePass===!1?(S.side=We,S.needsUpdate=!0,Er(S,B,q),S.side=Si,S.needsUpdate=!0,Er(S,B,q),S.side=Cn):Er(S,B,q)}this.compile=function(S,B,q=null){q===null&&(q=S),E=Tt.get(q),E.init(B),P.push(E),q.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),S!==q&&S.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();const $=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const dt=V.material;if(dt)if(Array.isArray(dt))for(let bt=0;bt<dt.length;bt++){const Ct=dt[bt];En(Ct,q,V),$.add(Ct)}else En(dt,q,V),$.add(dt)}),E=P.pop(),$},this.compileAsync=function(S,B,q=null){const $=this.compile(S,B,q);return new Promise(V=>{function dt(){if($.forEach(function(bt){W.get(bt).currentProgram.isReady()&&$.delete(bt)}),$.size===0){V(S);return}setTimeout(dt,10)}J.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let mn=null;function Ed(S){mn&&mn(S)}function Uc(){Ei.stop()}function Nc(){Ei.start()}const Ei=new _d;Ei.setAnimationLoop(Ed),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(S){mn=S,xt.setAnimationLoop(S),S===null?Ei.stop():Ei.start()},xt.addEventListener("sessionstart",Uc),xt.addEventListener("sessionend",Nc),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){Me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(B),B=xt.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,B,v),E=Tt.get(S,P.length),E.init(B),P.push(E),Vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),et.setFromProjectionMatrix(Vt,Dn,B.reversedDepth),yt=this.localClippingEnabled,st=St.init(this.clippingPlanes,yt),w=ut.get(S,T.length),w.init(),T.push(w),xt.enabled===!0&&xt.isPresenting===!0){const dt=A.xr.getDepthSensingMesh();dt!==null&&$a(dt,B,-1/0,A.sortObjects)}$a(S,B,0,A.sortObjects),w.finish(),A.sortObjects===!0&&w.sort(Pt,zt),C=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,C&&ft.addToRenderList(w,S),this.info.render.frame++,st===!0&&St.beginShadows();const q=E.state.shadowsArray;at.render(q,S,B),st===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=w.opaque,V=w.transmissive;if(E.setupLights(),B.isArrayCamera){const dt=B.cameras;if(V.length>0)for(let bt=0,Ct=dt.length;bt<Ct;bt++){const Et=dt[bt];Oc($,V,S,Et)}C&&ft.render(S);for(let bt=0,Ct=dt.length;bt<Ct;bt++){const Et=dt[bt];Fc(w,S,Et,Et.viewport)}}else V.length>0&&Oc($,V,S,B),C&&ft.render(S),Fc(w,S,B);v!==null&&b===0&&(lt.updateMultisampleRenderTarget(v),lt.updateRenderTargetMipmap(v)),S.isScene===!0&&S.onAfterRender(A,S,B),U.resetDefaultState(),L=-1,D=null,P.pop(),P.length>0?(E=P[P.length-1],st===!0&&St.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?w=T[T.length-1]:w=null};function $a(S,B,q,$){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||et.intersectsSprite(S)){$&&jt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Vt);const bt=tt.update(S),Ct=S.material;Ct.visible&&w.push(S,bt,Ct,q,jt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||et.intersectsObject(S))){const bt=tt.update(S),Ct=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),jt.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),jt.copy(bt.boundingSphere.center)),jt.applyMatrix4(S.matrixWorld).applyMatrix4(Vt)),Array.isArray(Ct)){const Et=bt.groups;for(let Ot=0,Bt=Et.length;Ot<Bt;Ot++){const It=Et[Ot],Kt=Ct[It.materialIndex];Kt&&Kt.visible&&w.push(S,bt,Kt,q,jt.z,It)}}else Ct.visible&&w.push(S,bt,Ct,q,jt.z,null)}}const dt=S.children;for(let bt=0,Ct=dt.length;bt<Ct;bt++)$a(dt[bt],B,q,$)}function Fc(S,B,q,$){const{opaque:V,transmissive:dt,transparent:bt}=S;E.setupLightsView(q),st===!0&&St.setGlobalState(A.clippingPlanes,q),$&&j.viewport(I.copy($)),V.length>0&&yr(V,B,q),dt.length>0&&yr(dt,B,q),bt.length>0&&yr(bt,B,q),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Oc(S,B,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[$.id]===void 0&&(E.state.transmissionRenderTarget[$.id]=new Wi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Ls:Un,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const dt=E.state.transmissionRenderTarget[$.id],bt=$.viewport||I;dt.setSize(bt.z*A.transmissionResolutionScale,bt.w*A.transmissionResolutionScale);const Ct=A.getRenderTarget(),Et=A.getActiveCubeFace(),Ot=A.getActiveMipmapLevel();A.setRenderTarget(dt),A.getClearColor(K),it=A.getClearAlpha(),it<1&&A.setClearColor(16777215,.5),A.clear(),C&&ft.render(q);const Bt=A.toneMapping;A.toneMapping=gi;const It=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),st===!0&&St.setGlobalState(A.clippingPlanes,$),yr(S,q,$),lt.updateMultisampleRenderTarget(dt),lt.updateRenderTargetMipmap(dt),J.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let se=0,_e=B.length;se<_e;se++){const ve=B[se],{object:ue,geometry:Ut,material:xe,group:$t}=ve;if(xe.side===Cn&&ue.layers.test($.layers)){const Ze=xe.side;xe.side=We,xe.needsUpdate=!0,Bc(ue,q,$,Ut,xe,$t),xe.side=Ze,xe.needsUpdate=!0,Kt=!0}}Kt===!0&&(lt.updateMultisampleRenderTarget(dt),lt.updateRenderTargetMipmap(dt))}A.setRenderTarget(Ct,Et,Ot),A.setClearColor(K,it),It!==void 0&&($.viewport=It),A.toneMapping=Bt}function yr(S,B,q){const $=B.isScene===!0?B.overrideMaterial:null;for(let V=0,dt=S.length;V<dt;V++){const bt=S[V],{object:Ct,geometry:Et,group:Ot}=bt;let Bt=bt.material;Bt.allowOverride===!0&&$!==null&&(Bt=$),Ct.layers.test(q.layers)&&Bc(Ct,B,q,Et,Bt,Ot)}}function Bc(S,B,q,$,V,dt){S.onBeforeRender(A,B,q,$,V,dt),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(A,B,q,$,S,dt),V.transparent===!0&&V.side===Cn&&V.forceSinglePass===!1?(V.side=We,V.needsUpdate=!0,A.renderBufferDirect(q,B,$,V,S,dt),V.side=Si,V.needsUpdate=!0,A.renderBufferDirect(q,B,$,V,S,dt),V.side=Cn):A.renderBufferDirect(q,B,$,V,S,dt),S.onAfterRender(A,B,q,$,V,dt)}function Er(S,B,q){B.isScene!==!0&&(B=R);const $=W.get(S),V=E.state.lights,dt=E.state.shadowsArray,bt=V.state.version,Ct=G.getParameters(S,V.state,dt,B,q),Et=G.getProgramCacheKey(Ct);let Ot=$.programs;$.environment=S.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(S.isMeshStandardMaterial?x:M).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ot===void 0&&(S.addEventListener("dispose",Gt),Ot=new Map,$.programs=Ot);let Bt=Ot.get(Et);if(Bt!==void 0){if($.currentProgram===Bt&&$.lightsStateVersion===bt)return Vc(S,Ct),Bt}else Ct.uniforms=G.getUniforms(S),S.onBeforeCompile(Ct,A),Bt=G.acquireProgram(Ct,Et),Ot.set(Et,Bt),$.uniforms=Ct.uniforms;const It=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=St.uniform),Vc(S,Ct),$.needsLights=wd(S),$.lightsStateVersion=bt,$.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.directionalShadowMap.value=V.state.directionalShadowMap,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotShadowMap.value=V.state.spotShadowMap,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMap.value=V.state.pointShadowMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Bt,$.uniformsList=null,Bt}function zc(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=pa.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Vc(S,B){const q=W.get(S);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Td(S,B,q,$,V){B.isScene!==!0&&(B=R),lt.resetTextureUnits();const dt=B.fog,bt=$.isMeshStandardMaterial?B.environment:null,Ct=v===null?A.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Ps,Et=($.isMeshStandardMaterial?x:M).get($.envMap||bt),Ot=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Bt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),It=!!q.morphAttributes.position,Kt=!!q.morphAttributes.normal,se=!!q.morphAttributes.color;let _e=gi;$.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(_e=A.toneMapping);const ve=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ue=ve!==void 0?ve.length:0,Ut=W.get($),xe=E.state.lights;if(st===!0&&(yt===!0||S!==D)){const Fe=S===D&&$.id===L;St.setState($,S,Fe)}let $t=!1;$.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==xe.state.version||Ut.outputColorSpace!==Ct||V.isBatchedMesh&&Ut.batching===!1||!V.isBatchedMesh&&Ut.batching===!0||V.isBatchedMesh&&Ut.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ut.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ut.instancing===!1||!V.isInstancedMesh&&Ut.instancing===!0||V.isSkinnedMesh&&Ut.skinning===!1||!V.isSkinnedMesh&&Ut.skinning===!0||V.isInstancedMesh&&Ut.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ut.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ut.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ut.instancingMorph===!1&&V.morphTexture!==null||Ut.envMap!==Et||$.fog===!0&&Ut.fog!==dt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==St.numPlanes||Ut.numIntersection!==St.numIntersection)||Ut.vertexAlphas!==Ot||Ut.vertexTangents!==Bt||Ut.morphTargets!==It||Ut.morphNormals!==Kt||Ut.morphColors!==se||Ut.toneMapping!==_e||Ut.morphTargetsCount!==ue)&&($t=!0):($t=!0,Ut.__version=$.version);let Ze=Ut.currentProgram;$t===!0&&(Ze=Er($,B,V));let qi=!1,Je=!1,Us=!1;const ge=Ze.getUniforms(),Xe=Ut.uniforms;if(j.useProgram(Ze.program)&&(qi=!0,Je=!0,Us=!0),$.id!==L&&(L=$.id,Je=!0),qi||D!==S){j.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ge.setValue(y,"projectionMatrix",S.projectionMatrix),ge.setValue(y,"viewMatrix",S.matrixWorldInverse);const Ye=ge.map.cameraPosition;Ye!==void 0&&Ye.setValue(y,Dt.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&ge.setValue(y,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ge.setValue(y,"isOrthographic",S.isOrthographicCamera===!0),D!==S&&(D=S,Je=!0,Us=!0)}if(V.isSkinnedMesh){ge.setOptional(y,V,"bindMatrix"),ge.setOptional(y,V,"bindMatrixInverse");const Fe=V.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ge.setValue(y,"boneTexture",Fe.boneTexture,lt))}V.isBatchedMesh&&(ge.setOptional(y,V,"batchingTexture"),ge.setValue(y,"batchingTexture",V._matricesTexture,lt),ge.setOptional(y,V,"batchingIdTexture"),ge.setValue(y,"batchingIdTexture",V._indirectTexture,lt),ge.setOptional(y,V,"batchingColorTexture"),V._colorsTexture!==null&&ge.setValue(y,"batchingColorTexture",V._colorsTexture,lt));const an=q.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&At.update(V,q,Ze),(Je||Ut.receiveShadow!==V.receiveShadow)&&(Ut.receiveShadow=V.receiveShadow,ge.setValue(y,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Xe.envMap.value=Et,Xe.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Xe.envMapIntensity.value=B.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=Db()),Je&&(ge.setValue(y,"toneMappingExposure",A.toneMappingExposure),Ut.needsLights&&Ad(Xe,Us),dt&&$.fog===!0&&Mt.refreshFogUniforms(Xe,dt),Mt.refreshMaterialUniforms(Xe,$,pt,ht,E.state.transmissionRenderTarget[S.id]),pa.upload(y,zc(Ut),Xe,lt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(pa.upload(y,zc(Ut),Xe,lt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ge.setValue(y,"center",V.center),ge.setValue(y,"modelViewMatrix",V.modelViewMatrix),ge.setValue(y,"normalMatrix",V.normalMatrix),ge.setValue(y,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Fe=$.uniformsGroups;for(let Ye=0,Za=Fe.length;Ye<Za;Ye++){const Ti=Fe[Ye];_t.update(Ti,Ze),_t.bind(Ti,Ze)}}return Ze}function Ad(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function wd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(S,B,q){const $=W.get(S);$.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=B,W.get(S.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){const q=W.get(S);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const Rd=y.createFramebuffer();this.setRenderTarget=function(S,B=0,q=0){v=S,H=B,b=q;let $=!0,V=null,dt=!1,bt=!1;if(S){const Et=W.get(S);if(Et.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(y.FRAMEBUFFER,null),$=!1;else if(Et.__webglFramebuffer===void 0)lt.setupRenderTarget(S);else if(Et.__hasExternalTextures)lt.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const It=S.depthTexture;if(Et.__boundDepthTexture!==It){if(It!==null&&W.has(It)&&(S.width!==It.image.width||S.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(S)}}const Ot=S.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(bt=!0);const Bt=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[B])?V=Bt[B][q]:V=Bt[B],dt=!0):S.samples>0&&lt.useMultisampledRTT(S)===!1?V=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?V=Bt[q]:V=Bt,I.copy(S.viewport),z.copy(S.scissor),Q=S.scissorTest}else I.copy(Jt).multiplyScalar(pt).floor(),z.copy(ee).multiplyScalar(pt).floor(),Q=ne;if(q!==0&&(V=Rd),j.bindFramebuffer(y.FRAMEBUFFER,V)&&$&&j.drawBuffers(S,V),j.viewport(I),j.scissor(z),j.setScissorTest(Q),dt){const Et=W.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,q)}else if(bt){const Et=B;for(let Ot=0;Ot<S.textures.length;Ot++){const Bt=W.get(S.textures[Ot]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+Ot,Bt.__webglTexture,q,Et)}}else if(S!==null&&q!==0){const Et=W.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Et.__webglTexture,q)}L=-1},this.readRenderTargetPixels=function(S,B,q,$,V,dt,bt,Ct=0){if(!(S&&S.isWebGLRenderTarget)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Et=Et[bt]),Et){j.bindFramebuffer(y.FRAMEBUFFER,Et);try{const Ot=S.textures[Ct],Bt=Ot.format,It=Ot.type;if(!ot.textureFormatReadable(Bt)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(It)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-$&&q>=0&&q<=S.height-V&&(S.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Ct),y.readPixels(B,q,$,V,Ft.convert(Bt),Ft.convert(It),dt))}finally{const Ot=v!==null?W.get(v).__webglFramebuffer:null;j.bindFramebuffer(y.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(S,B,q,$,V,dt,bt,Ct=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Et=Et[bt]),Et)if(B>=0&&B<=S.width-$&&q>=0&&q<=S.height-V){j.bindFramebuffer(y.FRAMEBUFFER,Et);const Ot=S.textures[Ct],Bt=Ot.format,It=Ot.type;if(!ot.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Kt),y.bufferData(y.PIXEL_PACK_BUFFER,dt.byteLength,y.STREAM_READ),S.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Ct),y.readPixels(B,q,$,V,Ft.convert(Bt),Ft.convert(It),0);const se=v!==null?W.get(v).__webglFramebuffer:null;j.bindFramebuffer(y.FRAMEBUFFER,se);const _e=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await q0(y,_e,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Kt),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,dt),y.deleteBuffer(Kt),y.deleteSync(_e),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,q=0){const $=Math.pow(2,-q),V=Math.floor(S.image.width*$),dt=Math.floor(S.image.height*$),bt=B!==null?B.x:0,Ct=B!==null?B.y:0;lt.setTexture2D(S,0),y.copyTexSubImage2D(y.TEXTURE_2D,q,0,0,bt,Ct,V,dt),j.unbindTexture()};const Cd=y.createFramebuffer(),Pd=y.createFramebuffer();this.copyTextureToTexture=function(S,B,q=null,$=null,V=0,dt=null){dt===null&&(V!==0?(xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=V,V=0):dt=0);let bt,Ct,Et,Ot,Bt,It,Kt,se,_e;const ve=S.isCompressedTexture?S.mipmaps[dt]:S.image;if(q!==null)bt=q.max.x-q.min.x,Ct=q.max.y-q.min.y,Et=q.isBox3?q.max.z-q.min.z:1,Ot=q.min.x,Bt=q.min.y,It=q.isBox3?q.min.z:0;else{const an=Math.pow(2,-V);bt=Math.floor(ve.width*an),Ct=Math.floor(ve.height*an),S.isDataArrayTexture?Et=ve.depth:S.isData3DTexture?Et=Math.floor(ve.depth*an):Et=1,Ot=0,Bt=0,It=0}$!==null?(Kt=$.x,se=$.y,_e=$.z):(Kt=0,se=0,_e=0);const ue=Ft.convert(B.format),Ut=Ft.convert(B.type);let xe;B.isData3DTexture?(lt.setTexture3D(B,0),xe=y.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(lt.setTexture2DArray(B,0),xe=y.TEXTURE_2D_ARRAY):(lt.setTexture2D(B,0),xe=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,B.unpackAlignment);const $t=y.getParameter(y.UNPACK_ROW_LENGTH),Ze=y.getParameter(y.UNPACK_IMAGE_HEIGHT),qi=y.getParameter(y.UNPACK_SKIP_PIXELS),Je=y.getParameter(y.UNPACK_SKIP_ROWS),Us=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,ve.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,ve.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ot),y.pixelStorei(y.UNPACK_SKIP_ROWS,Bt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,It);const ge=S.isDataArrayTexture||S.isData3DTexture,Xe=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){const an=W.get(S),Fe=W.get(B),Ye=W.get(an.__renderTarget),Za=W.get(Fe.__renderTarget);j.bindFramebuffer(y.READ_FRAMEBUFFER,Ye.__webglFramebuffer),j.bindFramebuffer(y.DRAW_FRAMEBUFFER,Za.__webglFramebuffer);for(let Ti=0;Ti<Et;Ti++)ge&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,W.get(S).__webglTexture,V,It+Ti),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,W.get(B).__webglTexture,dt,_e+Ti)),y.blitFramebuffer(Ot,Bt,bt,Ct,Kt,se,bt,Ct,y.DEPTH_BUFFER_BIT,y.NEAREST);j.bindFramebuffer(y.READ_FRAMEBUFFER,null),j.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||W.has(S)){const an=W.get(S),Fe=W.get(B);j.bindFramebuffer(y.READ_FRAMEBUFFER,Cd),j.bindFramebuffer(y.DRAW_FRAMEBUFFER,Pd);for(let Ye=0;Ye<Et;Ye++)ge?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,an.__webglTexture,V,It+Ye):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,an.__webglTexture,V),Xe?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Fe.__webglTexture,dt,_e+Ye):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Fe.__webglTexture,dt),V!==0?y.blitFramebuffer(Ot,Bt,bt,Ct,Kt,se,bt,Ct,y.COLOR_BUFFER_BIT,y.NEAREST):Xe?y.copyTexSubImage3D(xe,dt,Kt,se,_e+Ye,Ot,Bt,bt,Ct):y.copyTexSubImage2D(xe,dt,Kt,se,Ot,Bt,bt,Ct);j.bindFramebuffer(y.READ_FRAMEBUFFER,null),j.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Xe?S.isDataTexture||S.isData3DTexture?y.texSubImage3D(xe,dt,Kt,se,_e,bt,Ct,Et,ue,Ut,ve.data):B.isCompressedArrayTexture?y.compressedTexSubImage3D(xe,dt,Kt,se,_e,bt,Ct,Et,ue,ve.data):y.texSubImage3D(xe,dt,Kt,se,_e,bt,Ct,Et,ue,Ut,ve):S.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,dt,Kt,se,bt,Ct,ue,Ut,ve.data):S.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,dt,Kt,se,ve.width,ve.height,ue,ve.data):y.texSubImage2D(y.TEXTURE_2D,dt,Kt,se,bt,Ct,ue,Ut,ve);y.pixelStorei(y.UNPACK_ROW_LENGTH,$t),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Ze),y.pixelStorei(y.UNPACK_SKIP_PIXELS,qi),y.pixelStorei(y.UNPACK_SKIP_ROWS,Je),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Us),dt===0&&B.generateMipmaps&&y.generateMipmap(xe),j.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&lt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?lt.setTextureCube(S,0):S.isData3DTexture?lt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?lt.setTexture2DArray(S,0):lt.setTexture2D(S,0),j.unbindTexture()},this.resetState=function(){H=0,b=0,v=null,j.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const Ch={type:"change"},Ic={type:"start"},yd={type:"end"},na=new Ya,Ph=new di,Ib=Math.cos(70*K0.DEG2RAD),ye=new O,qe=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qo=1e-6;class Ub extends Xx{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:xs.ROTATE,TWO:xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new yi,this._lastTargetPosition=new O,this._quat=new yi().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sh,this._sphericalDelta=new sh,this._scale=1,this._panOffset=new O,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new O,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fb.bind(this),this._onPointerDown=Nb.bind(this),this._onPointerUp=Ob.bind(this),this._onContextMenu=Wb.bind(this),this._onMouseWheel=Vb.bind(this),this._onKeyDown=Hb.bind(this),this._onTouchStart=Gb.bind(this),this._onTouchMove=kb.bind(this),this._onMouseDown=Bb.bind(this),this._onMouseMove=zb.bind(this),this._interceptControlDown=Xb.bind(this),this._interceptControlUp=Yb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ch),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qe:i>Math.PI&&(i-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ye.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(na.origin.copy(this.object.position),na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(na.direction))<Ib?this.object.lookAt(this.target):(Ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),na.intersectPlane(Ph,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qo||this._lastTargetPosition.distanceToSquared(this.target)>qo?(this.dispatchEvent(Ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Nb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Fb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ob(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yd),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Bb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case Es.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case Es.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Ic)}function zb(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Vb(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(Ic),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(yd))}function Hb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Gb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Ic)}function kb(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function Wb(n){this.enabled!==!1&&n.preventDefault()}function Xb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let qb=class{scene;clock;planets=new Map;orbitLines=[];planetLabels=[];textures=new Map;options;state;loader;planetMaterials=new Map;constructor(t,e){this.scene=t,this.clock=new Wx,this.options=e,this.loader=new xd,this.state={focusedPlanet:e.initialState?.focusedPlanet||"earth",followingPlanet:e.initialState?.followingPlanet??!0,showOrbits:e.initialState?.showOrbits??!0,showLabels:e.initialState?.showLabels??!0,rotateStatus:e.initialState?.rotateStatus??!0}}async initialize(){try{await this.preloadTextures(),await this.createPlanets(),this.updatePlanetPositions(0)}catch(t){throw console.error("Failed to initialize solar system:",t),t}}async preloadTextures(){const t=new Set;this.options.planets.forEach(e=>{t.add(e.texture),e.heightTexture&&t.add(e.heightTexture),e.rings&&t.add(e.rings.texture)}),await Promise.all(Array.from(t).map(async e=>{try{const i=await this.loader.loadAsync(e);this.textures.set(e,i)}catch(i){console.warn(`Failed to load texture: ${e}`,i)}}))}async createPlanets(){const t=this.options.planets.filter(i=>!i.isMoon);for(const i of t)await this.createPlanet(i);const e=this.options.planets.filter(i=>i.isMoon);for(const i of e)await this.createPlanet(i)}async createPlanet(t){const e=new Ks,i=this.textures.get(t.texture)||await this.loader.loadAsync(t.texture);t.axialTilt!==void 0&&(e.rotation.x=t.axialTilt);let s,r;if(t.name==="earth"){let l;t.heightTexture&&(l=this.textures.get(t.heightTexture)||await this.loader.loadAsync(t.heightTexture)),s=new gs(t.radius,128,128),r=new Lx({map:i,displacementMap:l,displacementScale:.1,displacementBias:0,metalness:.1,roughness:.8})}else t.name==="sun"?(s=new gs(t.radius,128,128),r=new Ra({map:i,color:new Xt(1.5,1.2,1)})):(s=new gs(t.radius,64,64),r=new th({map:i,shininess:10}));const a=new dn(s,r);if(e.add(a),this.planetMaterials.set(t.name,r),t.name==="sun"){a.layers.enable(1);const l=new Vx(16772572,100,5e3);e.add(l)}if(t.atmosphere){const l=new gs(t.atmosphere.radius,64,64),c=new th({color:t.atmosphere.color,transparent:!0,opacity:t.atmosphere.opacity,side:We,shininess:100}),u=new dn(l,c);e.add(u)}if(t.rings){const l=this.textures.get(t.rings.texture)||await this.loader.loadAsync(t.rings.texture),c=new Dc(t.rings.innerRadius,t.rings.outerRadius,.2,64,1,!0),u=new Ra({map:l,side:Cn,transparent:!0,opacity:.8}),h=new dn(c,u);h.rotation.x=t.rings.tilt,e.add(h)}!t.isMoon&&t.orbitRadius>0&&this.state.showOrbits&&this.createOrbitLine(t),this.state.showLabels&&this.createPlanetLabel(t);const o={group:e,mesh:a,config:t,isMoon:t.isMoon||!1,parentName:t.parent};if(this.planets.set(t.name,o),t.isMoon&&t.parent){const l=this.planets.get(t.parent);l?l.group.add(e):this.scene.add(e)}else this.scene.add(e)}createOrbitLine(t){const i=new Px(0,0,t.orbitRadius,t.orbitRadius,0,2*Math.PI).getPoints(64).map(o=>new O(o.x,0,o.y)),s=new Ne().setFromPoints(i),r=new dd({color:t.color||6710886,opacity:.2,transparent:!0}),a=new wx(s,r);this.orbitLines.push(a),this.scene.add(a)}createPlanetLabel(t){const e=document.createElement("canvas"),i=e.getContext("2d");e.width=128,e.height=64,i.fillStyle="rgba(0, 0, 0, 0.2)",i.fillRect(0,0,e.width,e.height),i.font="bold 32px Arial",i.fillStyle="#ffffff",i.textAlign="center",i.textBaseline="middle",i.fillText(t.label,e.width/2,e.height/2);const s=new Rx(e),r=new hd({map:s,transparent:!0}),a=new Sx(r);a.scale.set(3,1.5,1),this.scene.add(a),this.planetLabels.push({sprite:a,planetName:t.name,offset:t.radius+2})}updateLabels(){this.planetLabels.forEach(t=>{const e=this.planets.get(t.planetName);if(e){const i=new O;e.group.getWorldPosition(i),t.sprite.position.copy(i),t.sprite.position.y+=t.offset}})}update(){if(this.state.rotateStatus){const t=this.clock.getElapsedTime();this.updatePlanetPositions(t)}this.updateLabels()}updatePlanetPositions(t){Array.from(this.planets.values()).filter(s=>!s.isMoon).forEach(s=>{this.updatePlanetPosition(s,t)}),Array.from(this.planets.values()).filter(s=>s.isMoon).forEach(s=>{this.updateMoonPosition(s,t)})}updatePlanetPosition(t,e){const{config:i,group:s,mesh:r}=t;if(r&&i.rotationSpeed!==0&&(r.rotation.y+=i.rotationSpeed),i.name!=="sun"&&i.yearPeriod>0&&i.orbitRadius>0){const a=e*2*Math.PI/i.yearPeriod,o=new O(Math.cos(a)*i.orbitRadius,0,Math.sin(a)*i.orbitRadius);s.position.copy(o)}}updateMoonPosition(t,e){const{config:i,group:s,mesh:r,parentName:a}=t;if(!(!a||!this.planets.get(a))&&(r&&i.rotationSpeed!==0&&(r.rotation.y+=i.rotationSpeed),i.yearPeriod>0&&i.orbitRadius>0)){const l=e*2*Math.PI/i.yearPeriod,c=new O(Math.cos(l)*i.orbitRadius,0,Math.sin(l)*i.orbitRadius);if(s.position.copy(c),r&&i.name==="moon"){const u=new O(0,0,0).sub(c).normalize(),h=new yi;h.setFromUnitVectors(new O(0,0,1),u),r.quaternion.slerp(h,.1)}}}focusOnPlanet(t){const e=this.planets.get(t);if(!e)return null;const i=e.config;let s=e.group.position.clone();e.isMoon&&e.parentName&&this.planets.get(e.parentName)&&(s=this.getWorldPosition(e.group));const r=i.followDistance||i.radius*(t==="sun"?3:t==="moon"?20:10),a=i.followHeight||r*.3,o=new O(s.x,s.y+a,s.z+r);return this.state.focusedPlanet=t,o}getPlanetPosition(t){const e=this.planets.get(t);return e?e.isMoon&&e.parentName?this.getWorldPosition(e.group):e.group.position.clone():null}getWorldPosition(t){const e=new O;return t.getWorldPosition(e),e}getFollowTargetPosition(){const t=this.planets.get(this.state.focusedPlanet);return t?t.isMoon&&t.parentName?this.getWorldPosition(t.group):t.group.position.clone():null}getPlanetNames(){return Array.from(this.planets.keys())}getPlanetConfig(t){return this.planets.get(t)?.config}getState(){return{...this.state}}setState(t){Object.assign(this.state,t),t.showOrbits!==void 0&&this.orbitLines.forEach(e=>{e.visible=t.showOrbits}),t.showLabels!==void 0&&this.planetLabels.forEach(e=>{e.sprite.visible=t.showLabels}),t.rotateStatus!==void 0&&(t.rotateStatus?this.clock.start():this.clock.stop())}dispose(){this.planets.forEach(t=>{t.group.traverse(e=>{e instanceof dn&&(e.geometry.dispose(),e.material instanceof Nn?e.material.dispose():Array.isArray(e.material)&&e.material.forEach(i=>i.dispose()))})}),this.orbitLines.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.planetLabels.forEach(t=>{t.sprite.material.dispose()}),this.textures.forEach(t=>t.dispose()),this.planetMaterials.forEach(t=>t.dispose()),this.planets.clear(),this.orbitLines.length=0,this.planetLabels.length=0,this.textures.clear(),this.planetMaterials.clear()}};class jb{stars=null;starGeometry=null;starMaterial=null;cloudParticles=[];cloudMaterial=null;cloudGeometries=[];cloudEnabled=!1;cloudVelocity=.001;cloudBoundary=5;constructor(t={}){const{starCount:e=5e3,starSize:i=.1,starColor:s=16777215,starOpacity:r=1,starSizeAttenuation:a=!0,starFieldSize:o=1e3,starTransparent:l=!0,starInnerRadius:c=0,cloudTexture:u=null,cloudCount:h=10,cloudFieldSize:f=20,cloudSize:d=50,cloudOpacity:g=.1,cloudVelocity:_=.001,cloudBoundary:m=5,cloudMaterialOptions:p={}}=t;this.createStarField({starCount:e,starSize:i,starColor:s,starOpacity:r,starSizeAttenuation:a,starFieldSize:o,starTransparent:l,starInnerRadius:c}),u&&(this.cloudEnabled=!0,this.cloudVelocity=_,this.cloudBoundary=m,this.createCloud({cloudTexture:u,cloudCount:h,cloudFieldSize:f,cloudSize:d,cloudOpacity:g,cloudMaterialOptions:p}))}createStarField(t){const{starCount:e,starSize:i,starColor:s,starOpacity:r,starSizeAttenuation:a,starFieldSize:o,starTransparent:l,starInnerRadius:c}=t;this.starGeometry=this.createStarGeometry(e,o,c),this.starMaterial=new da({color:s,size:i,transparent:l,opacity:r,sizeAttenuation:a,blending:ll,depthWrite:!1,fog:!1}),this.stars=new Ju(this.starGeometry,this.starMaterial)}createStarGeometry(t,e,i){const s=new Ne,r=new Float32Array(t*3),a=new Float32Array(t),o=Math.min(i,e-1);for(let l=0;l<t;l++){let c;const u=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);o>0?c=Math.random()*(e-o)+o:c=Math.random()*e,r[l*3]=c*Math.sin(h)*Math.cos(u),r[l*3+1]=c*Math.sin(h)*Math.sin(u),r[l*3+2]=c*Math.cos(h);const d=.5+.5*((c-o)/(e-o));a[l]=Math.random()*.5*d+.5}return s.setAttribute("position",new Ke(r,3)),s.setAttribute("size",new Ke(a,1)),s}createCloud(t){const{cloudTexture:e,cloudCount:i,cloudFieldSize:s,cloudSize:r,cloudOpacity:a,cloudMaterialOptions:o}=t;this.cloudMaterial=new da({map:e,transparent:!0,opacity:a,depthWrite:!1,...o}),typeof r=="function"?this.cloudMaterial.size=r(0):this.cloudMaterial.size=r;for(let l=0;l<i;l++){const c=new Ne,u=new Float32Array([(Math.random()-.5)*s,(Math.random()-.5)*s,(Math.random()-.5)*s]);c.setAttribute("position",new Ke(u,3)),this.cloudGeometries.push(c);const h=new Ju(c,this.cloudMaterial);typeof r=="function"&&h.material instanceof da&&(h.material.size=r(l)),this.cloudParticles.push(h)}}update(){this.cloudEnabled&&this.cloudParticles.forEach(t=>{t.position.y+=this.cloudVelocity,t.position.y>this.cloudBoundary&&(t.position.y=-this.cloudBoundary)})}setCloudVelocity(t){this.cloudVelocity=t}setCloudBoundary(t){this.cloudBoundary=t}addToScene(t){this.stars&&t.add(this.stars),this.cloudEnabled&&this.cloudParticles.forEach(e=>{t.add(e)})}removeFromScene(t){this.stars&&t.remove(this.stars),this.cloudEnabled&&this.cloudParticles.forEach(e=>{t.remove(e)})}dispose(){this.starGeometry&&this.starGeometry.dispose(),this.starMaterial&&this.starMaterial.dispose(),this.cloudEnabled&&(this.cloudGeometries.forEach(t=>t.dispose()),this.cloudMaterial&&this.cloudMaterial.dispose())}}const Kb=""+new URL("cloud-iScQDlY_.png",import.meta.url).href,$b=""+new URL("earth8k-BFtUqN8l.webp",import.meta.url).href,Zb=""+new URL("heightmap-uXBKXI5M.webp",import.meta.url).href,Jb=""+new URL("moon2k-B7i_YA-N.webp",import.meta.url).href,Qb=""+new URL("sun8k-mP82X-ol.webp",import.meta.url).href,tS=""+new URL("jupiter2k-H18r_2CD.webp",import.meta.url).href,eS=""+new URL("mars2k-b6cph7E4.webp",import.meta.url).href,nS=""+new URL("mercury2k-DRoPKXuh.webp",import.meta.url).href,iS=""+new URL("neptune2k-CQIhFq4M.webp",import.meta.url).href,sS=""+new URL("saturn2k-DmtuZCkm.webp",import.meta.url).href,rS=""+new URL("saturnring-Co6YoPw3.png",import.meta.url).href,aS=""+new URL("uranus2k-C24exXZD.webp",import.meta.url).href,oS=""+new URL("venus2k-DtnNorMS.webp",import.meta.url).href,lS={class:"container"},cS={key:0,class:"loading"},uS={key:0,class:"status-bar"},hS={class:"status-item"},fS={class:"status-item"},dS={style:{color:"#4a90e2"}},pS={key:0,class:"control"},mS={class:"buttons"},xS=["value"],gS=["value"],_S=["value"],vS=["value"],MS={class:"planet-selector"},bS=["value"],SS=.8,yS=mf({__name:"SolarSystem",setup(n){const t=Ai(null),e=Ai(!0),i=Ai(!0),s=Ai(!0),r=Ai(!0),a=Ai("earth"),o=Ai(!0);let l=null,c=null,u=null,h=null,f=null,d=null,g=null;function _(I){return[{name:"earth",label:"地球",radius:1*I,orbitRadius:24*I,yearPeriod:10,rotationSpeed:.01,texture:$b,heightTexture:Zb,eccentricity:.0167,axialTilt:.409,followDistance:30,followHeight:10,atmosphere:{radius:1.1*I,opacity:.5,color:8956671}},{name:"sun",label:"太阳",radius:5*I,orbitRadius:0,yearPeriod:0,rotationSpeed:.001,texture:Qb,followDistance:40,followHeight:20},{name:"moon",label:"月球",radius:.2*I,orbitRadius:3*I,yearPeriod:2.7,rotationSpeed:.0027,texture:Jb,isMoon:!0,parent:"earth",eccentricity:.0549,axialTilt:.0267,followDistance:6,followHeight:2},{name:"mercury",label:"水星",radius:.4*I,orbitRadius:10*I,yearPeriod:2.4,rotationSpeed:.01,texture:nS,eccentricity:.2056,axialTilt:.034,followDistance:10,followHeight:3},{name:"venus",label:"金星",radius:.9*I,orbitRadius:16*I,yearPeriod:6.1,rotationSpeed:-.005,texture:oS,eccentricity:.0068,axialTilt:2.64,followDistance:12,followHeight:4},{name:"mars",label:"火星",radius:.5*I,orbitRadius:32*I,yearPeriod:18.8,rotationSpeed:.008,texture:eS,eccentricity:.0934,axialTilt:.439,followDistance:8,followHeight:3},{name:"jupiter",label:"木星",radius:3*I,orbitRadius:50*I,yearPeriod:50,rotationSpeed:.015,texture:tS,eccentricity:.0489,axialTilt:.054,followDistance:18,followHeight:6},{name:"saturn",label:"土星",radius:2.5*I,orbitRadius:60*I,yearPeriod:80,rotationSpeed:.012,texture:sS,hasRing:!0,eccentricity:.0565,axialTilt:.466,followDistance:20,followHeight:8,rings:{innerRadius:2.5*I*1.2,outerRadius:2.5*I*2,texture:rS,tilt:0*(Math.PI/2)}},{name:"uranus",label:"天王星",radius:1*I,orbitRadius:70*I,yearPeriod:120,rotationSpeed:-.007,texture:aS,eccentricity:.0464,axialTilt:1.459,followDistance:12,followHeight:4},{name:"neptune",label:"海王星",radius:1*I,orbitRadius:80*I,yearPeriod:150,rotationSpeed:.006,texture:iS,eccentricity:.0095,axialTilt:.494,followDistance:12,followHeight:4}]}const m=_(SS);async function p(){const I=t.value;if(!I)return;L();const z=I.clientWidth,Q=I.clientHeight;l=new Mx,c=new nn(45,z/Q,.1,3e3),c.position.set(0,50,80),u=new Lb({alpha:!0,antialias:!0,logarithmicDepthBuffer:!0,canvas:I}),u.setSize(z,Q),u.setClearAlpha(0),u.shadowMap.enabled=!0,u.shadowMap.type=Yf;const K=new Gx(16777215,1);l.add(K),d=new qb(l,{planets:m,initialState:{focusedPlanet:a.value,followingPlanet:o.value,showOrbits:s.value,showLabels:r.value,rotateStatus:i.value}}),await d.initialize(),w(),E(),T(),v(),e.value=!1}function w(){if(!l)return;const z=new xd().load(Kb);f=new jb({starCount:1e3,starFieldSize:300,starInnerRadius:100,starSize:.1,starColor:8956671,cloudTexture:z,cloudCount:10,cloudFieldSize:200,cloudSize:2048,cloudOpacity:.1,cloudVelocity:.001}),f.addToScene(l)}function E(){!c||!u||(h=new Ub(c,u.domElement),h.enableDamping=!0,h.dampingFactor=.25,h.enableZoom=!0,h.zoomSpeed=1,h.minDistance=1,h.maxDistance=500,h.enableRotate=!0,h.rotateSpeed=1,h.enablePan=!0,h.panSpeed=2,h.update(),h.addEventListener("start",()=>{o.value&&(o.value=!1)}))}function T(){g=requestAnimationFrame(T),d&&(d.update(),f&&f.update(),o.value&&P()),h&&!i.value&&h.update(),u&&c&&l&&u.render(l,c)}function P(){if(!o.value||!c||!h||!d)return;const I=d.getFollowTargetPosition();if(!I)return;const z=d.getPlanetConfig(a.value);if(!z)return;const Q=z.followDistance||30,K=z.followHeight||10,it=.1,X=new O(I.x,I.y+K,I.z+Q);c.position.lerp(X,it),h.target.lerp(I,it),h.update()}function A(){i.value=!i.value,d&&d.setState({rotateStatus:i.value})}function N(){s.value=!s.value,d&&d.setState({showOrbits:s.value})}function H(){r.value=!r.value,d&&d.setState({showLabels:r.value})}function b(){o.value=!o.value}function v(){if(!c||!h||!d)return;const I=d.focusOnPlanet(a.value);if(!I)return;c.position.copy(I);const z=d.getPlanetPosition(a.value);z&&(h.target.copy(z),h.update()),o.value||(o.value=!0)}function L(){g!==null&&(cancelAnimationFrame(g),g=null),h&&h.dispose(),u&&u.dispose(),d?.dispose(),f?.dispose(),l=null,c=null,u=null,h=null,f=null,d=null}function D(I){I.code==="Space"&&(I.preventDefault(),b()),I.code==="Escape"&&(o.value=!1),I.code==="KeyF"&&v()}return pc(async()=>{await p(),window.addEventListener("keydown",D)}),mc(()=>{L(),window.removeEventListener("keydown",D)}),ys(a,I=>{if(o.value&&d){const z=d.focusOnPlanet(I);z&&c&&c.position.copy(z)}}),ys(o,I=>{!I&&h&&(h.enabled=!0)}),ys(i,I=>{d&&d.setState({rotateStatus:I})}),(I,z)=>(hi(),Ki("div",lS,[me("canvas",{ref_key:"canvasRef",ref:t,style:{width:"100%",height:"100vh",display:"block"}},null,512),ke(au,{name:"fade"},{default:tl(()=>[e.value?(hi(),Ki("div",cS,"加载中，请稍候...")):oo("",!0)]),_:1}),e.value?oo("",!0):(hi(),Ki("div",uS,[me("div",hS,[z[1]||(z[1]=me("span",null,"跟随状态:",-1)),me("div",{class:Fa(["follow-indicator",{inactive:!o.value}])},null,2),me("span",null,sa(o.value?"跟随中":"自由视角"),1)]),me("div",fS,[z[2]||(z[2]=me("span",null,"当前焦点:",-1)),me("span",dS,sa(Qo(m).find(Q=>Q.name===a.value)?.label||"未知"),1)])])),ke(au,{name:"slide-up"},{default:tl(()=>[e.value?oo("",!0):(hi(),Ki("div",pS,[me("div",mS,[me("input",{type:"button",value:i.value?"暂停运动":"开始运动",onClick:A},null,8,xS),me("input",{type:"button",value:s.value?"隐藏轨道":"显示轨道",onClick:N},null,8,gS),me("input",{type:"button",value:r.value?"隐藏标签":"显示标签",onClick:H},null,8,_S),me("input",{type:"button",class:"follow-toggle",value:o.value?"停止跟随":"开始跟随",onClick:b},null,8,vS)]),me("div",MS,[z[3]||(z[3]=me("label",null,"焦点行星：",-1)),Sp(me("select",{"onUpdate:modelValue":z[0]||(z[0]=Q=>a.value=Q),onChange:v},[(hi(!0),Ki(vn,null,Bp(Qo(m),Q=>(hi(),Ki("option",{key:Q.name,value:Q.name},sa(Q.label),9,bS))),128))],544),[[t0,a.value]]),me("input",{type:"button",value:"聚焦",onClick:v})]),z[4]||(z[4]=me("div",{class:"tips"},[js(" 快捷键： "),me("span",{class:"shortcut"},"空格"),js(" 切换跟随状态， "),me("span",{class:"shortcut"},"F"),js(" 快速聚焦， "),me("span",{class:"shortcut"},"ESC"),js(" 停止跟随 ")],-1)),z[5]||(z[5]=me("div",{class:"tips"},"暂停运动后，鼠标左键旋转视角，鼠标滚轮缩放，鼠标右键拖拽平移。",-1)),z[6]||(z[6]=me("div",{class:"hint"},"*行星大小和距离为可视化调整，非真实比例",-1))]))]),_:1})]))}}),ES=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},TS=ES(yS,[["__scopeId","data-v-e5223803"]]),AS=mf({__name:"App",setup(n){return(t,e)=>(hi(),Of(TS))}});i0(AS).mount("#app");
