import{r as t,h as o,H as r}from"./p-f87cd962.js";import{T as s}from"./p-c4749812.js";const e=":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}#toast-container>:not(:last-child){margin-block-end:1rem}.toast-container{display:block;position:fixed}.toast-container--top-right{right:1rem;top:2rem}.toast-container--bottom-right{right:1rem;bottom:2rem}";const a=e;const n=class{constructor(o){t(this,o);this.PREFIX_POSITION_CLASS="toast-container--";this.containerId="toast-container";this.containerClass="toast-container";this.position="bottom-right"}get hostContainer(){return new Promise((t=>{const o=setInterval((()=>{const r=document.getElementById(this.containerId);if(r){clearInterval(o);t(r)}}))}))}componentDidLoad(){if(!document.getElementById(this.containerId)){const t=document.createElement("div");t.id=this.containerId;t.classList.add(this.containerClass);t.classList.add(`${this.PREFIX_POSITION_CLASS}${this.position}`);document.body.appendChild(t)}}onPositionChange(t,o){const r=document.getElementById(this.containerId);r.classList.remove(`${this.PREFIX_POSITION_CLASS}${o}`);r.classList.add(`${this.PREFIX_POSITION_CLASS}${t}`)}async showToast(t){var o,r;const e=document.createElement("ix-toast");const a=new s;function n(t){e.remove();a.emit(t)}e.toastTitle=t.title;e.type=t.type;e.autoClose=(o=t.autoClose)!==null&&o!==void 0?o:true;e.autoCloseDelay=(r=t.autoCloseDelay)!==null&&r!==void 0?r:5e3;e.icon=t.icon;e.iconColor=t.iconColor;e.addEventListener("closeToast",(t=>{const{detail:o}=t;n(o)}));if(typeof t.message==="string"){e.innerText=t.message}else{e.appendChild(t.message)}(await this.hostContainer).appendChild(e);return{onClose:a,close:t=>{n(t)}}}render(){return o(r,{key:"4c3986ebc5843f0d1846527f602851d82bd525d7",class:{"toast-container--bottom-right":this.position==="bottom-right","toast-container--top-right":this.position==="top-right"}},o("slot",{key:"6d9c87e3bfddb1b1bf0fbebdd06efad5347b5390"}))}static get watchers(){return{position:["onPositionChange"]}}};n.style=a;export{n as ix_toast_container};
//# sourceMappingURL=p-5aa0b93c.entry.js.map