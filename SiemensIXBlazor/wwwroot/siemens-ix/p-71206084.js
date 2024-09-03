var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:true,timelineOffset:0};var n={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0};var t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"];var e={CSS:{},springs:{}};function a(r,n,t){return Math.min(Math.max(r,n),t)}function u(r,n){return r.indexOf(n)>-1}function i(r,n){return r.apply(null,n)}var f={arr:function(r){return Array.isArray(r)},obj:function(r){return u(Object.prototype.toString.call(r),"Object")},pth:function(r){return f.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||f.svg(r)},str:function(r){return typeof r==="string"},fnc:function(r){return typeof r==="function"},und:function(r){return typeof r==="undefined"},nil:function(r){return f.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return f.hex(r)||f.rgb(r)||f.hsl(r)},key:function(t){return!r.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&t!=="targets"&&t!=="keyframes"}};function o(r){var n=/\(([^)]+)\)/.exec(r);return n?n[1].split(",").map((function(r){return parseFloat(r)})):[]}function v(r,n){var t=o(r);var u=a(f.und(t[0])?1:t[0],.1,100);var i=a(f.und(t[1])?100:t[1],.1,100);var v=a(f.und(t[2])?10:t[2],.1,100);var c=a(f.und(t[3])?0:t[3],.1,100);var s=Math.sqrt(i/u);var l=v/(2*Math.sqrt(i*u));var d=l<1?s*Math.sqrt(1-l*l):0;var h=1;var p=l<1?(l*s+-c)/d:-c+s;function m(r){var t=n?n*r/1e3:r;if(l<1){t=Math.exp(-t*l*s)*(h*Math.cos(d*t)+p*Math.sin(d*t))}else{t=(h+p*t)*Math.exp(-t*s)}if(r===0||r===1){return r}return 1-t}function M(){var n=e.springs[r];if(n){return n}var t=1/6;var a=0;var u=0;while(true){a+=t;if(m(a)===1){u++;if(u>=16){break}}else{u=0}}var i=a*t*1e3;e.springs[r]=i;return i}return n?m:M}function c(r){if(r===void 0)r=10;return function(n){return Math.ceil(a(n,1e-6,1)*r)*(1/r)}}var s=function(){var r=11;var n=1/(r-1);function t(r,n){return 1-3*n+3*r}function e(r,n){return 3*n-6*r}function a(r){return 3*r}function u(r,n,u){return((t(n,u)*r+e(n,u))*r+a(n))*r}function i(r,n,u){return 3*t(n,u)*r*r+2*e(n,u)*r+a(n)}function f(r,n,t,e,a){var i,f,o=0;do{f=n+(t-n)/2;i=u(f,e,a)-r;if(i>0){t=f}else{n=f}}while(Math.abs(i)>1e-7&&++o<10);return f}function o(r,n,t,e){for(var a=0;a<4;++a){var f=i(n,t,e);if(f===0){return n}var o=u(n,t,e)-r;n-=o/f}return n}function v(t,e,a,v){if(!(0<=t&&t<=1&&0<=a&&a<=1)){return}var c=new Float32Array(r);if(t!==e||a!==v){for(var s=0;s<r;++s){c[s]=u(s*n,t,a)}}function l(e){var u=0;var v=1;var s=r-1;for(;v!==s&&c[v]<=e;++v){u+=n}--v;var l=(e-c[v])/(c[v+1]-c[v]);var d=u+l*n;var h=i(d,t,a);if(h>=.001){return o(e,d,t,a)}else if(h===0){return d}else{return f(e,u,u+n,t,a)}}return function(r){if(t===e&&a===v){return r}if(r===0||r===1){return r}return u(l(r),e,v)}}return v}();var l=function(){var r={linear:function(){return function(r){return r}}};var n={Sine:function(){return function(r){return 1-Math.cos(r*Math.PI/2)}},Circ:function(){return function(r){return 1-Math.sqrt(1-r*r)}},Back:function(){return function(r){return r*r*(3*r-2)}},Bounce:function(){return function(r){var n,t=4;while(r<((n=Math.pow(2,--t))-1)/11){}return 1/Math.pow(4,3-t)-7.5625*Math.pow((n*3-2)/22-r,2)}},Elastic:function(r,n){if(r===void 0)r=1;if(n===void 0)n=.5;var t=a(r,1,10);var e=a(n,.1,2);return function(r){return r===0||r===1?r:-t*Math.pow(2,10*(r-1))*Math.sin((r-1-e/(Math.PI*2)*Math.asin(1/t))*(Math.PI*2)/e)}}};var t=["Quad","Cubic","Quart","Quint","Expo"];t.forEach((function(r,t){n[r]=function(){return function(r){return Math.pow(r,t+2)}}}));Object.keys(n).forEach((function(t){var e=n[t];r["easeIn"+t]=e;r["easeOut"+t]=function(r,n){return function(t){return 1-e(r,n)(1-t)}};r["easeInOut"+t]=function(r,n){return function(t){return t<.5?e(r,n)(t*2)/2:1-e(r,n)(t*-2+2)/2}};r["easeOutIn"+t]=function(r,n){return function(t){return t<.5?(1-e(r,n)(1-t*2))/2:(e(r,n)(t*2-1)+1)/2}}}));return r}();function d(r,n){if(f.fnc(r)){return r}var t=r.split("(")[0];var e=l[t];var a=o(r);switch(t){case"spring":return v(r,n);case"cubicBezier":return i(s,a);case"steps":return i(c,a);default:return i(e,a)}}function h(r){try{var n=document.querySelectorAll(r);return n}catch(r){return}}function p(r,n){var t=r.length;var e=arguments.length>=2?arguments[1]:void 0;var a=[];for(var u=0;u<t;u++){if(u in r){var i=r[u];if(n.call(e,i,u,r)){a.push(i)}}}return a}function m(r){return r.reduce((function(r,n){return r.concat(f.arr(n)?m(n):n)}),[])}function M(r){if(f.arr(r)){return r}if(f.str(r)){r=h(r)||r}if(r instanceof NodeList||r instanceof HTMLCollection){return[].slice.call(r)}return[r]}function g(r,n){return r.some((function(r){return r===n}))}function w(r){var n={};for(var t in r){n[t]=r[t]}return n}function y(r,n){var t=w(r);for(var e in r){t[e]=n.hasOwnProperty(e)?n[e]:r[e]}return t}function b(r,n){var t=w(r);for(var e in n){t[e]=f.und(r[e])?n[e]:r[e]}return t}function x(r){var n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return n?"rgba("+n[1]+",1)":r}function F(r){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;var t=r.replace(n,(function(r,n,t,e){return n+n+t+t+e+e}));var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);var a=parseInt(e[1],16);var u=parseInt(e[2],16);var i=parseInt(e[3],16);return"rgba("+a+","+u+","+i+",1)"}function k(r){var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r);var t=parseInt(n[1],10)/360;var e=parseInt(n[2],10)/100;var a=parseInt(n[3],10)/100;var u=n[4]||1;function i(r,n,t){if(t<0){t+=1}if(t>1){t-=1}if(t<1/6){return r+(n-r)*6*t}if(t<1/2){return n}if(t<2/3){return r+(n-r)*(2/3-t)*6}return r}var f,o,v;if(e==0){f=o=v=a}else{var c=a<.5?a*(1+e):a+e-a*e;var s=2*a-c;f=i(s,c,t+1/3);o=i(s,c,t);v=i(s,c,t-1/3)}return"rgba("+f*255+","+o*255+","+v*255+","+u+")"}function C(r){if(f.rgb(r)){return x(r)}if(f.hex(r)){return F(r)}if(f.hsl(r)){return k(r)}}function I(r){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(n){return n[1]}}function B(r){if(u(r,"translate")||r==="perspective"){return"px"}if(u(r,"rotate")||u(r,"skew")){return"deg"}}function O(r,n){if(!f.fnc(r)){return r}return r(n.target,n.id,n.total)}function A(r,n){return r.getAttribute(n)}function j(r,n,t){var a=I(n);if(g([t,"deg","rad","turn"],a)){return n}var u=e.CSS[n+t];if(!f.und(u)){return u}var i=100;var o=document.createElement(r.tagName);var v=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;v.appendChild(o);o.style.position="absolute";o.style.width=i+t;var c=i/o.offsetWidth;v.removeChild(o);var s=c*parseFloat(n);e.CSS[n+t]=s;return s}function E(r,n,t){if(n in r.style){var e=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var a=r.style[n]||getComputedStyle(r).getPropertyValue(e)||"0";return t?j(r,a,t):a}}function $(r,n){if(f.dom(r)&&!f.inp(r)&&(!f.nil(A(r,n))||f.svg(r)&&r[n])){return"attribute"}if(f.dom(r)&&g(t,n)){return"transform"}if(f.dom(r)&&(n!=="transform"&&E(r,n))){return"css"}if(r[n]!=null){return"object"}}function N(r){if(!f.dom(r)){return}var n=r.style.transform||"";var t=/(\w+)\(([^)]*)\)/g;var e=new Map;var a;while(a=t.exec(n)){e.set(a[1],a[2])}return e}function L(r,n,t,e){var a=u(n,"scale")?1:0+B(n);var i=N(r).get(n)||a;if(t){t.transforms.list.set(n,i);t.transforms["last"]=n}return e?j(r,i,e):i}function S(r,n,t,e){switch($(r,n)){case"transform":return L(r,n,e,t);case"css":return E(r,n,t);case"attribute":return A(r,n);default:return r[n]||0}}function X(r,n){var t=/^(\*=|\+=|-=)/.exec(r);if(!t){return r}var e=I(r)||0;var a=parseFloat(n);var u=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return a+u+e;case"-":return a-u+e;case"*":return a*u+e}}function Y(r,n){if(f.col(r)){return C(r)}if(/\s/g.test(r)){return r}var t=I(r);var e=t?r.substr(0,r.length-t.length):r;if(n){return e+n}return e}function Z(r,n){return Math.sqrt(Math.pow(n.x-r.x,2)+Math.pow(n.y-r.y,2))}function D(r){return Math.PI*2*A(r,"r")}function H(r){return A(r,"width")*2+A(r,"height")*2}function Q(r){return Z({x:A(r,"x1"),y:A(r,"y1")},{x:A(r,"x2"),y:A(r,"y2")})}function q(r){var n=r.points;var t=0;var e;for(var a=0;a<n.numberOfItems;a++){var u=n.getItem(a);if(a>0){t+=Z(e,u)}e=u}return t}function z(r){var n=r.points;return q(r)+Z(n.getItem(n.numberOfItems-1),n.getItem(0))}function P(r){if(r.getTotalLength){return r.getTotalLength()}switch(r.tagName.toLowerCase()){case"circle":return D(r);case"rect":return H(r);case"line":return Q(r);case"polyline":return q(r);case"polygon":return z(r)}}function T(r){var n=P(r);r.setAttribute("stroke-dasharray",n);return n}function G(r){var n=r.parentNode;while(f.svg(n)){if(!f.svg(n.parentNode)){break}n=n.parentNode}return n}function V(r,n){var t=n||{};var e=t.el||G(r);var a=e.getBoundingClientRect();var u=A(e,"viewBox");var i=a.width;var f=a.height;var o=t.viewBox||(u?u.split(" "):[0,0,i,f]);return{el:e,viewBox:o,x:o[0]/1,y:o[1]/1,w:i,h:f,vW:o[2],vH:o[3]}}function W(r,n){var t=f.str(r)?h(r)[0]:r;var e=n||100;return function(r){return{property:r,el:t,svg:V(t),totalLength:P(t)*(e/100)}}}function J(r,n,t){function e(t){if(t===void 0)t=0;var e=n+t>=1?n+t:0;return r.el.getPointAtLength(e)}var a=V(r.el,r.svg);var u=e();var i=e(-1);var f=e(+1);var o=t?1:a.w/a.vW;var v=t?1:a.h/a.vH;switch(r.property){case"x":return(u.x-a.x)*o;case"y":return(u.y-a.y)*v;case"angle":return Math.atan2(f.y-i.y,f.x-i.x)*180/Math.PI}}function K(r,n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;var e=Y(f.pth(r)?r.totalLength:r,n)+"";return{original:e,numbers:e.match(t)?e.match(t).map(Number):[0],strings:f.str(r)||n?e.split(t):[]}}function R(r){var n=r?m(f.arr(r)?r.map(M):M(r)):[];return p(n,(function(r,n,t){return t.indexOf(r)===n}))}function U(r){var n=R(r);return n.map((function(r,t){return{target:r,id:t,total:n.length,transforms:{list:N(r)}}}))}function _(r,n){var t=w(n);if(/^spring/.test(t.easing)){t.duration=v(t.easing)}if(f.arr(r)){var e=r.length;var a=e===2&&!f.obj(r[0]);if(!a){if(!f.fnc(n.duration)){t.duration=n.duration/e}}else{r={value:r}}}var u=f.arr(r)?r:[r];return u.map((function(r,t){var e=f.obj(r)&&!f.pth(r)?r:{value:r};if(f.und(e.delay)){e.delay=!t?n.delay:0}if(f.und(e.endDelay)){e.endDelay=t===u.length-1?n.endDelay:0}return e})).map((function(r){return b(r,t)}))}function rr(r){var n=p(m(r.map((function(r){return Object.keys(r)}))),(function(r){return f.key(r)})).reduce((function(r,n){if(r.indexOf(n)<0){r.push(n)}return r}),[]);var t={};var e=function(e){var a=n[e];t[a]=r.map((function(r){var n={};for(var t in r){if(f.key(t)){if(t==a){n.value=r[t]}}else{n[t]=r[t]}}return n}))};for(var a=0;a<n.length;a++)e(a);return t}function nr(r,n){var t=[];var e=n.keyframes;if(e){n=b(rr(e),n)}for(var a in n){if(f.key(a)){t.push({name:a,tweens:_(n[a],r)})}}return t}function tr(r,n){var t={};for(var e in r){var a=O(r[e],n);if(f.arr(a)){a=a.map((function(r){return O(r,n)}));if(a.length===1){a=a[0]}}t[e]=a}t.duration=parseFloat(t.duration);t.delay=parseFloat(t.delay);return t}function er(r,n){var t;return r.tweens.map((function(e){var a=tr(e,n);var u=a.value;var i=f.arr(u)?u[1]:u;var o=I(i);var v=S(n.target,r.name,o,n);var c=t?t.to.original:v;var s=f.arr(u)?u[0]:c;var l=I(s)||I(v);var h=o||l;if(f.und(i)){i=c}a.from=K(s,h);a.to=K(X(i,s),h);a.start=t?t.end:0;a.end=a.start+a.delay+a.duration+a.endDelay;a.easing=d(a.easing,a.duration);a.isPath=f.pth(u);a.isPathTargetInsideSVG=a.isPath&&f.svg(n.target);a.isColor=f.col(a.from.original);if(a.isColor){a.round=1}t=a;return a}))}var ar={css:function(r,n,t){return r.style[n]=t},attribute:function(r,n,t){return r.setAttribute(n,t)},object:function(r,n,t){return r[n]=t},transform:function(r,n,t,e,a){e.list.set(n,t);if(n===e.last||a){var u="";e.list.forEach((function(r,n){u+=n+"("+r+") "}));r.style.transform=u}}};function ur(r,n){var t=U(r);t.forEach((function(r){for(var t in n){var e=O(n[t],r);var a=r.target;var u=I(e);var i=S(a,t,u,r);var f=u||I(i);var o=X(Y(e,f),i);var v=$(a,t);ar[v](a,t,o,r.transforms,true)}}))}function ir(r,n){var t=$(r.target,n.name);if(t){var e=er(n,r);var a=e[e.length-1];return{type:t,property:n.name,animatable:r,tweens:e,duration:a.end,delay:e[0].delay,endDelay:a.endDelay}}}function fr(r,n){return p(m(r.map((function(r){return n.map((function(n){return ir(r,n)}))}))),(function(r){return!f.und(r)}))}function or(r,n){var t=r.length;var e=function(r){return r.timelineOffset?r.timelineOffset:0};var a={};a.duration=t?Math.max.apply(Math,r.map((function(r){return e(r)+r.duration}))):n.duration;a.delay=t?Math.min.apply(Math,r.map((function(r){return e(r)+r.delay}))):n.delay;a.endDelay=t?a.duration-Math.max.apply(Math,r.map((function(r){return e(r)+r.duration-r.endDelay}))):n.endDelay;return a}var vr=0;function cr(t){var e=y(r,t);var a=y(n,t);var u=nr(a,t);var i=U(t.targets);var f=fr(i,u);var o=or(f,a);var v=vr;vr++;return b(e,{id:v,children:[],animatables:i,animations:f,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var sr=[];var lr=function(){var r;function n(){if(!r&&(!dr()||!hr.suspendWhenDocumentHidden)&&sr.length>0){r=requestAnimationFrame(t)}}function t(n){var e=sr.length;var a=0;while(a<e){var u=sr[a];if(!u.paused){u.tick(n);a++}else{sr.splice(a,1);e--}}r=a>0?requestAnimationFrame(t):undefined}function e(){if(!hr.suspendWhenDocumentHidden){return}if(dr()){r=cancelAnimationFrame(r)}else{sr.forEach((function(r){return r._onDocumentVisibility()}));lr()}}if(typeof document!=="undefined"){document.addEventListener("visibilitychange",e)}return n}();function dr(){return!!document&&document.hidden}function hr(r){if(r===void 0)r={};var n=0,t=0,e=0;var u,i=0;var f=null;function o(r){var n=window.Promise&&new Promise((function(r){return f=r}));r.finished=n;return n}var v=cr(r);o(v);function c(){var r=v.direction;if(r!=="alternate"){v.direction=r!=="normal"?"normal":"reverse"}v.reversed=!v.reversed;u.forEach((function(r){return r.reversed=v.reversed}))}function s(r){return v.reversed?v.duration-r:r}function l(){n=0;t=s(v.currentTime)*(1/hr.speed)}function d(r,n){if(n){n.seek(r-n.timelineOffset)}}function h(r){if(!v.reversePlayback){for(var n=0;n<i;n++){d(r,u[n])}}else{for(var t=i;t--;){d(r,u[t])}}}function m(r){var n=0;var t=v.animations;var e=t.length;while(n<e){var u=t[n];var i=u.animatable;var f=u.tweens;var o=f.length-1;var c=f[o];if(o){c=p(f,(function(n){return r<n.end}))[0]||c}var s=a(r-c.start-c.delay,0,c.duration)/c.duration;var l=isNaN(s)?1:c.easing(s);var d=c.to.strings;var h=c.round;var m=[];var M=c.to.numbers.length;var g=void 0;for(var w=0;w<M;w++){var y=void 0;var b=c.to.numbers[w];var x=c.from.numbers[w]||0;if(!c.isPath){y=x+l*(b-x)}else{y=J(c.value,l*b,c.isPathTargetInsideSVG)}if(h){if(!(c.isColor&&w>2)){y=Math.round(y*h)/h}}m.push(y)}var F=d.length;if(!F){g=m[0]}else{g=d[0];for(var k=0;k<F;k++){var C=d[k+1];var I=m[k];if(!isNaN(I)){if(!C){g+=I+" "}else{g+=I+C}}}}ar[u.type](i.target,u.property,g,i.transforms);u.currentValue=g;n++}}function M(r){if(v[r]&&!v.passThrough){v[r](v)}}function g(){if(v.remaining&&v.remaining!==true){v.remaining--}}function w(r){var i=v.duration;var l=v.delay;var d=i-v.endDelay;var p=s(r);v.progress=a(p/i*100,0,100);v.reversePlayback=p<v.currentTime;if(u){h(p)}if(!v.began&&v.currentTime>0){v.began=true;M("begin")}if(!v.loopBegan&&v.currentTime>0){v.loopBegan=true;M("loopBegin")}if(p<=l&&v.currentTime!==0){m(0)}if(p>=d&&v.currentTime!==i||!i){m(i)}if(p>l&&p<d){if(!v.changeBegan){v.changeBegan=true;v.changeCompleted=false;M("changeBegin")}M("change");m(p)}else{if(v.changeBegan){v.changeCompleted=true;v.changeBegan=false;M("changeComplete")}}v.currentTime=a(p,0,i);if(v.began){M("update")}if(r>=i){t=0;g();if(!v.remaining){v.paused=true;if(!v.completed){v.completed=true;M("loopComplete");M("complete");if(!v.passThrough&&"Promise"in window){f();o(v)}}}else{n=e;M("loopComplete");v.loopBegan=false;if(v.direction==="alternate"){c()}}}}v.reset=function(){var r=v.direction;v.passThrough=false;v.currentTime=0;v.progress=0;v.paused=true;v.began=false;v.loopBegan=false;v.changeBegan=false;v.completed=false;v.changeCompleted=false;v.reversePlayback=false;v.reversed=r==="reverse";v.remaining=v.loop;u=v.children;i=u.length;for(var n=i;n--;){v.children[n].reset()}if(v.reversed&&v.loop!==true||r==="alternate"&&v.loop===1){v.remaining++}m(v.reversed?v.duration:0)};v._onDocumentVisibility=l;v.set=function(r,n){ur(r,n);return v};v.tick=function(r){e=r;if(!n){n=e}w((e+(t-n))*hr.speed)};v.seek=function(r){w(s(r))};v.pause=function(){v.paused=true;l()};v.play=function(){if(!v.paused){return}if(v.completed){v.reset()}v.paused=false;sr.push(v);l();lr()};v.reverse=function(){c();v.completed=v.reversed?false:true;l()};v.restart=function(){v.reset();v.play()};v.remove=function(r){var n=R(r);mr(n,v)};v.reset();if(v.autoplay){v.play()}return v}function pr(r,n){for(var t=n.length;t--;){if(g(r,n[t].animatable.target)){n.splice(t,1)}}}function mr(r,n){var t=n.animations;var e=n.children;pr(r,t);for(var a=e.length;a--;){var u=e[a];var i=u.animations;pr(r,i);if(!i.length&&!u.children.length){e.splice(a,1)}}if(!t.length&&!e.length){n.pause()}}function Mr(r){var n=R(r);for(var t=sr.length;t--;){var e=sr[t];mr(n,e)}}function gr(r,n){if(n===void 0)n={};var t=n.direction||"normal";var e=n.easing?d(n.easing):null;var a=n.grid;var u=n.axis;var i=n.from||0;var o=i==="first";var v=i==="center";var c=i==="last";var s=f.arr(r);var l=s?parseFloat(r[0]):parseFloat(r);var h=s?parseFloat(r[1]):0;var p=I(s?r[1]:r)||0;var m=n.start||0+(s?l:0);var M=[];var g=0;return function(r,n,f){if(o){i=0}if(v){i=(f-1)/2}if(c){i=f-1}if(!M.length){for(var d=0;d<f;d++){if(!a){M.push(Math.abs(i-d))}else{var w=!v?i%a[0]:(a[0]-1)/2;var y=!v?Math.floor(i/a[0]):(a[1]-1)/2;var b=d%a[0];var x=Math.floor(d/a[0]);var F=w-b;var k=y-x;var C=Math.sqrt(F*F+k*k);if(u==="x"){C=-F}if(u==="y"){C=-k}M.push(C)}g=Math.max.apply(Math,M)}if(e){M=M.map((function(r){return e(r/g)*g}))}if(t==="reverse"){M=M.map((function(r){return u?r<0?r*-1:-r:Math.abs(g-r)}))}}var I=s?(h-l)/g:l;return m+I*(Math.round(M[n]*100)/100)+p}}function wr(r){if(r===void 0)r={};var t=hr(r);t.duration=0;t.add=function(e,a){var u=sr.indexOf(t);var i=t.children;if(u>-1){sr.splice(u,1)}function o(r){r.passThrough=true}for(var v=0;v<i.length;v++){o(i[v])}var c=b(e,y(n,r));c.targets=c.targets||r.targets;var s=t.duration;c.autoplay=false;c.direction=t.direction;c.timelineOffset=f.und(a)?s:X(a,s);o(t);t.seek(c.timelineOffset);var l=hr(c);o(l);i.push(l);var d=or(i,r);t.delay=d.delay;t.endDelay=d.endDelay;t.duration=d.duration;t.seek(0);t.reset();if(t.autoplay){t.play()}return t};return t}hr.version="3.2.1";hr.speed=1;hr.suspendWhenDocumentHidden=true;hr.running=sr;hr.remove=Mr;hr.get=S;hr.set=ur;hr.convertPx=j;hr.path=W;hr.setDashoffset=T;hr.stagger=gr;hr.timeline=wr;hr.easing=d;hr.penner=l;hr.random=function(r,n){return Math.floor(Math.random()*(n-r+1))+r};export{hr as a};
//# sourceMappingURL=p-71206084.js.map