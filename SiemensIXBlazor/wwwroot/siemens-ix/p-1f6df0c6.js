function t(){var t=[];if(typeof window!=="undefined"){var n=window;if(!n.customElements||n.Element&&(!n.Element.prototype.closest||!n.Element.prototype.matches||!n.Element.prototype.remove||!n.Element.prototype.getRootNode)){t.push(import("./p-5d43cae8.js"))}var e=function(){try{var t=new URL("b","http://a");t.pathname="c%20d";return t.href==="http://a/c%20d"&&t.searchParams}catch(t){return false}};if("function"!==typeof Object.assign||!Object.entries||!Array.prototype.find||!Array.prototype.includes||!String.prototype.startsWith||!String.prototype.endsWith||n.NodeList&&!n.NodeList.prototype.forEach||!n.fetch||!e()||typeof WeakMap=="undefined"){t.push(import("./p-a2200306.js").then((function(t){return t.c})))}}return Promise.all(t)}const n="ix-icons";let e;let s;let o=false;let c=false;const l=(t,n="")=>{{return()=>{}}};const i=(t,n)=>{{return()=>{}}};const f="{visibility:hidden}.hydrated{visibility:inherit}";const r={};const u="http://www.w3.org/2000/svg";const a="http://www.w3.org/1999/xhtml";const d=t=>t!=null;const p=t=>{t=typeof t;return t==="object"||t==="function"};function h(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const y=(t,n,...e)=>{let s=null;let o=false;let c=false;const l=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!p(s)){s=String(s)}if(o&&c){l[l.length-1].t+=s}else{l.push(o?m(null,s):s)}c=o}}};i(e);if(n){{const t=n.className||n.class;if(t){n.class=typeof t!=="object"?t:Object.keys(t).filter((n=>t[n])).join(" ")}}}const f=m(t,null);f.o=n;if(l.length>0){f.l=l}return f};const m=(t,n)=>{const e={i:0,u:t,t:n,p:null,l:null};{e.o=null}return e};const w={};const $=t=>t&&t.u===w;const b=(t,n)=>{if(t!=null&&!p(t)){if(n&1){return String(t)}return t}return t};const g=(t,n,e)=>{const s=pt.ce(n,e);t.dispatchEvent(s);return s};const v=new WeakMap;const S=(t,n,e)=>{let s=ut.get(t);if(yt&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}ut.set(t,s)};const j=(t,n,e,s)=>{var o;let c=C(n);const l=ut.get(c);t=t.nodeType===11?t:dt;if(l){if(typeof l==="string"){t=t.head||t;let n=v.get(t);let e;if(!n){v.set(t,n=new Set)}if(!n.has(c)){{{e=dt.createElement("style");e.innerHTML=l}const n=(o=pt.h)!==null&&o!==void 0?o:h(dt);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(c)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return c};const O=t=>{const n=t.m;const e=t.$hostElement$;const s=n.i;const o=l("attachStyles",n.$);const c=j(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=c;e.classList.add(c+"-h")}o()};const C=(t,n)=>"sc-"+t.$;const k=(t,n,e,s,o,c)=>{if(e!==s){let l=lt(t,n);n.toLowerCase();if(n==="class"){const n=t.classList;const o=x(e);const c=x(s);n.remove(...o.filter((t=>t&&!c.includes(t))));n.add(...c.filter((t=>t&&!o.includes(t))))}else if(n==="style"){{for(const n in e){if(!s||s[n]==null){if(n.includes("-")){t.style.removeProperty(n)}else{t.style[n]=""}}}}for(const n in s){if(!e||s[n]!==e[n]){if(n.includes("-")){t.style.setProperty(n,s[n])}else{t.style[n]=s[n]}}}}else{const i=p(s);if((l||i&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){l=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){{t.removeAttribute(n)}}}else if((!l||c&4||o)&&!i){s=s===true?"":s;{t.setAttribute(n,s)}}}}};const M=/\s/;const x=t=>!t?[]:t.split(M);const P=(t,n,e,s)=>{const o=n.p.nodeType===11&&n.p.host?n.p.host:n.p;const c=t&&t.o||r;const l=n.o||r;{for(s in c){if(!(s in l)){k(o,s,c[s],undefined,e,n.i)}}}for(s in l){k(o,s,c[s],l[s],e,n.i)}};const U=(t,n,s,c)=>{const l=n.l[s];let i=0;let f;let r;{if(!o){o=l.u==="svg"}f=l.p=dt.createElementNS(o?u:a,l.u);if(o&&l.u==="foreignObject"){o=false}{P(null,l,o)}if(d(e)&&f["s-si"]!==e){f.classList.add(f["s-si"]=e)}if(l.l){for(i=0;i<l.l.length;++i){r=U(t,l,i);if(r){f.appendChild(r)}}}{if(l.u==="svg"){o=false}else if(f.tagName==="foreignObject"){o=true}}}return f};const _=(t,n,e,o,c,l)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===s){i=i.shadowRoot}for(;c<=l;++c){if(o[c]){f=U(null,e,c);if(f){o[c].p=f;i.insertBefore(f,n)}}}};const A=(t,n,e,s,o)=>{for(;n<=e;++n){if(s=t[n]){o=s.p;o.remove()}}};const E=(t,n,e,s)=>{let o=0;let c=0;let l=n.length-1;let i=n[0];let f=n[l];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=l&&c<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--l]}else if(u==null){u=s[++c]}else if(a==null){a=s[--r]}else if(L(i,u)){N(i,u);i=n[++o];u=s[++c]}else if(L(f,a)){N(f,a);f=n[--l];a=s[--r]}else if(L(i,a)){N(i,a);t.insertBefore(i.p,f.p.nextSibling);i=n[++o];a=s[--r]}else if(L(f,u)){N(f,u);t.insertBefore(f.p,i.p);f=n[--l];u=s[++c]}else{{d=U(n&&n[c],e,c);u=s[++c]}if(d){{i.p.parentNode.insertBefore(d,i.p)}}}}if(o>l){_(t,s[r+1]==null?null:s[r+1].p,e,s,c,r)}else if(c>r){A(n,o,l)}};const L=(t,n)=>{if(t.u===n.u){return true}return false};const N=(t,n)=>{const e=n.p=t.p;const s=t.l;const c=n.l;const l=n.u;{{o=l==="svg"?true:l==="foreignObject"?false:o}{{P(t,n,o)}}if(s!==null&&c!==null){E(e,s,n,c)}else if(c!==null){_(e,null,n,c,0,c.length-1)}else if(s!==null){A(s,0,s.length-1)}if(o&&l==="svg"){o=false}}};const R=(t,n)=>{const o=t.$hostElement$;const c=t.v||m(null,null);const l=$(n)?n:y(null,null,n);s=o.tagName;l.u=null;l.i|=4;t.v=l;l.p=c.p=o.shadowRoot||o;{e=o["s-sc"]}N(c,l)};const T=(t,n)=>{if(n&&!t.S&&n["s-p"]){n["s-p"].push(new Promise((n=>t.S=n)))}};const W=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}T(t,t.j);const e=()=>H(t,n);return St(e)};const H=(t,n)=>{const e=l("scheduleUpdate",t.m.$);const s=t.O;let o;e();return F(o,(()=>I(t,s,n)))};const I=async(t,n,e)=>{const s=t.$hostElement$;const o=l("update",t.m.$);const c=s["s-rc"];if(e){O(t)}const i=l("render",t.m.$);{q(t,n)}if(c){c.map((t=>t()));s["s-rc"]=undefined}i();o();{const n=s["s-p"];const e=()=>z(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const q=(t,n,e)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{R(t,n)}}}}catch(n){it(n,t.$hostElement$)}return null};const z=t=>{const n=t.m.$;const e=t.$hostElement$;const s=l("postUpdate",n);const o=t.j;if(!(t.i&64)){t.i|=64;{V(e)}s();{t.C(e);if(!o){B()}}}else{s()}{if(t.S){t.S();t.S=undefined}if(t.i&512){vt((()=>W(t,false)))}t.i&=~(4|512)}};const B=t=>{{V(dt.documentElement)}vt((()=>g(at,"appload",{detail:{namespace:n}})))};const D=(t,n,e)=>{if(t&&t[n]){try{return t[n](e)}catch(t){it(t)}}return undefined};const F=(t,n)=>t&&t.then?t.then(n):n();const V=t=>t.classList.add("hydrated");const G=(t,n)=>st(t).k.get(n);const J=(t,n,e,s)=>{const o=st(t);const c=o.$hostElement$;const l=o.k.get(n);const i=o.i;const f=o.O;e=b(e,s.M[n][0]);const r=Number.isNaN(l)&&Number.isNaN(e);const u=e!==l&&!r;if((!(i&8)||l===undefined)&&u){o.k.set(n,e);if(f){if(s.P&&i&128){const t=s.P[n];if(t){t.map((t=>{try{f[t](e,l,n)}catch(t){it(t,c)}}))}}if((i&(2|16))===2){W(o,false)}}}};const K=(t,n,e)=>{if(n.M){if(t.watchers){n.P=t.watchers}const s=Object.entries(n.M);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return G(this,t)},set(e){J(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const n=new Map;o.attributeChangedCallback=function(t,e,s){pt.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(o.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,n])=>n[0]&15)).map((([t,e])=>{const s=e[1]||t;n.set(s,t);return s}))}}return t};const Q=async(t,n,e,s,o)=>{if((n.i&32)===0){{n.i|=32;o=rt(e);if(o.then){const t=i();o=await o;t()}if(!o.isProxied){{e.P=o.watchers}K(o,e,2);o.isProxied=true}const t=l("createInstance",e.$);{n.i|=8}try{new o(n)}catch(t){it(t)}{n.i&=~8}{n.i|=128}t();X(n.O)}if(o.style){let t=o.style;const n=C(e);if(!ut.has(n)){const s=l("registerStyles",e.$);S(n,t,!!(e.i&1));s()}}}const c=n.j;const f=()=>W(n,true);if(c&&c["s-rc"]){c["s-rc"].push(f)}else{f()}};const X=t=>{{D(t,"connectedCallback")}};const Y=t=>{if((pt.i&1)===0){const n=st(t);const e=n.m;const s=l("connectedCallback",e.$);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){T(n,n.j=e);break}}}if(e.M){Object.entries(e.M).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{Q(t,n,e)}}else{X(n.O)}s()}};const Z=t=>{if((pt.i&1)===0){st(t)}};const tt=(t,n={})=>{var e;const s=l();const o=[];const c=n.exclude||[];const i=at.customElements;const r=dt.head;const u=r.querySelector("meta[charset]");const a=dt.createElement("style");const d=[];let p;let y=true;Object.assign(pt,n);pt.U=new URL(n.resourcesUrl||"./",dt.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],$:n[1],M:n[2],_:n[3]};{e.M=n[2]}{e.P={}}const s=e.$;const l=class extends HTMLElement{constructor(t){super(t);t=this;ct(t,e);if(e.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(p){clearTimeout(p);p=null}if(y){d.push(this)}else{pt.jmp((()=>Y(this)))}}disconnectedCallback(){pt.jmp((()=>Z(this)))}componentOnReady(){return st(this).A}};e.L=t[0];if(!c.includes(s)&&!i.get(s)){o.push(s);i.define(s,K(l,e,1))}}))}));{a.innerHTML=o+f;a.setAttribute("data-styles","");const t=(e=pt.h)!==null&&e!==void 0?e:h(dt);if(t!=null){a.setAttribute("nonce",t)}r.insertBefore(a,u?u.nextSibling:r.firstChild)}y=false;if(d.length){d.map((t=>t.connectedCallback()))}else{{pt.jmp((()=>p=setTimeout(B,30)))}}s()};const nt=t=>pt.h=t;const et=new WeakMap;const st=t=>et.get(t);const ot=(t,n)=>et.set(n.O=t,n);const ct=(t,n)=>{const e={i:0,$hostElement$:t,m:n,k:new Map};{e.A=new Promise((t=>e.C=t));t["s-p"]=[];t["s-rc"]=[]}return et.set(t,e)};const lt=(t,n)=>n in t;const it=(t,n)=>(0,console.error)(t,n);const ft=new Map;const rt=(t,n,e)=>{const s=t.$.replace(/-/g,"_");const o=t.L;const c=ft.get(o);if(c){return c[s]}if(!e||!BUILD.hotModuleReplacement){const t=t=>{ft.set(o,t);return t[s]};switch(o){case"ix-icon":return import("./p-fe87443e.js").then(t,it)}}return import(`./${o}.entry.js${""}`).then((t=>{{ft.set(o,t)}return t[s]}),it)};const ut=new Map;const at=typeof window!=="undefined"?window:{};const dt=at.document||{head:{}};const pt={i:0,U:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const ht=t=>Promise.resolve(t);const yt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const mt=[];const wt=[];const $t=(t,n)=>e=>{t.push(e);if(!c){c=true;if(n&&pt.i&4){vt(gt)}else{pt.raf(gt)}}};const bt=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){it(t)}}t.length=0};const gt=()=>{bt(mt);{bt(wt);if(c=mt.length>0){pt.raf(gt)}}};const vt=t=>ht().then(t);const St=$t(wt,true);const jt=()=>ht();const Ot=(t,n)=>{if(typeof window==="undefined")return Promise.resolve();return jt().then((()=>tt([["ix-icon",[[1,"ix-icon",{size:[1],color:[1],name:[1],svgContent:[32]}]]]],n)))};const Ct=Object.freeze({__proto__:null,applyPolyfills:t,setNonce:nt,defineCustomElements:Ot});export{w as H,y as h,Ct as i,ot as r};
//# sourceMappingURL=p-1f6df0c6.js.map