import{r as t,h as e,H as s,g as r}from"./p-f87cd962.js";import{c as i}from"./p-e898862b.js";import{a as o}from"./p-360b158e.js";import{a}from"./p-71206084.js";const h=":host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ul{list-style:none;padding:0;margin-top:0;margin-bottom:0}:host(.item-size-l){--event-list-item-height:6.5rem;--event-list-item-content-white-space:normal}:host(.compact){--event-list-item-border-radius:0;--event-list-item-margin-bottom:0}";const n=h;const c=class{constructor(e){t(this,e);this.mutationObserver=i(this.onMutation.bind(this));this.itemHeight="S";this.compact=false;this.animated=true;this.chevron=undefined}watchChevron(t){this.handleChevron(t)}componentDidLoad(){if(this.animated){this.triggerFadeIn()}if(!Number.isNaN(Number(this.itemHeight))){const t=o(this.itemHeight);this.hostElement.querySelectorAll("ix-event-list-item").forEach((e=>{this.setCustomHeight(e,t)}))}this.handleChevron(this.chevron);this.mutationObserver.observe(this.hostElement,{childList:true,subtree:true})}onMutation(t){this.triggerFadeOut().then((()=>{if(typeof this.itemHeight==="number"){const e=o(this.itemHeight);t.filter((t=>t.type==="childList")).forEach((t=>t.addedNodes.forEach((t=>{const s=t;this.setCustomHeight(s,e)}))))}this.handleChevron(this.chevron);this.triggerFadeIn()}))}setCustomHeight(t,e){t.style.setProperty("--event-list-item-height",e)}triggerFadeOut(){return new Promise((t=>{if(!this.animated){t()}const e=[{opacity:1,easing:"easeInSine"},{opacity:0}];const s=this.hostElement.shadowRoot.querySelector("ul");a({targets:s,opacity:e,duration:c.fadeOutDuration,complete:()=>{t()}})}))}triggerFadeIn(){if(!this.animated){return}const t=this.hostElement.querySelectorAll("ix-event-list-item");t.forEach(((t,e)=>{const s=e*80;const r=s/(s+c.fadeInDuration);a({targets:t,offset:r,duration:c.fadeInDuration+s,opacity:[0,1],easing:"easeInOutSine",delay:s,autoplay:true})}))}handleChevron(t){const e=this.hostElement.querySelectorAll("ix-event-list-item");e.forEach((e=>{if(t){e.setAttribute("chevron","true")}else if(t!==undefined){e.removeAttribute("chevron")}}))}render(){return e(s,{key:"089a281bac15abcd507401131c2be9408acd5845",class:{"item-size-s":this.itemHeight==="S","item-size-l":this.itemHeight==="L",compact:this.compact}},e("ul",{key:"a142c907713c0817db7a3c056e4c7498f456963c"},e("slot",{key:"1b3a8a7f56f4e2e52d29acbf325ab29e663f4337"})))}get hostElement(){return r(this)}static get watchers(){return{chevron:["watchChevron"]}}};c.fadeOutDuration=50;c.fadeInDuration=150;c.style=n;export{c as ix_event_list};
//# sourceMappingURL=p-aa814811.entry.js.map