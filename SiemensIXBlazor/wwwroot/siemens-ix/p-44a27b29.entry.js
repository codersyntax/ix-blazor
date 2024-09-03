import{r as e,c as o,h as t,H as r,g as s}from"./p-f87cd962.js";const i=":host{display:inline-flex;align-items:center;justify-content:space-between;height:1.5rem;padding-left:0.5rem;border:var(--theme-focus--border-thickness) solid var(--theme-chip-primary-outline--border-color);border-radius:2rem;background-color:var(--theme-color-ghost);color:var(--theme-chip-primary-outline--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .slot-container :host-context(.disabled){background-color:var(--theme-color-ghost);border-color:var(--theme-color-component-4);color:var(--theme-color-weak-text)}:host ix-icon-button{height:1.5rem;margin-left:0.25rem}:host ix-icon-button:not(.disabled):not(:disabled):focus-visible{outline:none}:host(.disabled){border:var(--theme-focus--border-thickness) solid var(--theme-color-component-4);color:var(--theme-color-weak-text);padding-right:0.5rem;cursor:default}:host(.readonly){padding-right:0.5rem}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:hover:not(.disabled):not(:disabled)){background-color:var(--theme-color-ghost-primary--hover);border-color:var(--theme-chip-primary-outline--border-color--hover);color:var(--theme-chip-primary-outline--color--hover)}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:active:not(.disabled):not(:disabled)){background-color:var(--theme-color-ghost-primary--active);border-color:var(--theme-chip-primary-outline--border-color--active);color:var(--theme-chip-primary-outline--color--active)}:host(:focus-visible:not(.disabled):not(:disabled)){outline:var(--theme-color-focus-bdr) solid var(--theme-focus--border-thickness);outline-offset:-0.125rem}";const a=i;const l=class{constructor(t){e(this,t);this.closeClick=o(this,"closeClick",7);this.disabled=false;this.readonly=false}onCloseClick(e){e.preventDefault();e.stopPropagation();this.closeClick.emit()}render(){return t(r,{key:"a4d7097df0582282fbd3550741fa0a231a4c782a",class:{disabled:this.disabled,readonly:this.readonly},title:this.el.textContent},t("div",{key:"659346141b7c2645f0970629e6a8a53c52ee0759",class:"slot-container"},t("slot",{key:"0799a1aa00aeae148532b56e847d2713f782e862"})),!this.disabled&&!this.readonly?t("ix-icon-button",{ghost:true,oval:true,icon:"close-small",size:"16",tabindex:this.disabled?-1:0,variant:"primary",disabled:this.disabled,onClick:e=>this.onCloseClick(e)}):null)}get el(){return s(this)}};l.style=a;class c extends CustomEvent{constructor(e){super("ix-select-item:labelChange",{bubbles:true,detail:e})}}const n=":host{display:block;position:relative}:host>ix-dropdown-item{width:100%}:host ix-dropdown-item{color:var(--theme-color-std-text)}:host .select-item-checked{background-color:var(--theme-select-list-item--background--selected);--ix-dropdown-item-checked-color:var(--theme-color-std-text)}:host(.d-none){display:none}";const h=n;const d=class{constructor(t){e(this,t);this.itemClick=o(this,"itemClick",7);this.label=undefined;this.value=undefined;this.selected=false;this.hover=false}async getDropdownItemElement(){return this.dropdownItem}async onItemClick(e){e===null||e===void 0?void 0:e.preventDefault();e===null||e===void 0?void 0:e.stopPropagation();this.itemClick.emit(this.value)}get dropdownItem(){return this.hostElement.querySelector("ix-dropdown-item")}componentDidRender(){if(this.value===undefined||this.value===null){throw Error("ix-select-item must have a `value` property")}}labelChange(e,o){this.hostElement.dispatchEvent(new c({newValue:e,oldValue:o}))}render(){return t(r,{key:"bac48ca281090f2dd8f56fce2772916cec959e8c"},t("ix-dropdown-item",{key:"a6f8cafd5ee9f9eedaa4e4e0bd82a32976434117",class:{"select-item-checked":this.selected},checked:this.selected,label:this.label?this.label:this.value,onItemClick:e=>this.onItemClick(e)}))}get hostElement(){return s(this)}static get watchers(){return{label:["labelChange"]}}};d.style=h;export{l as ix_filter_chip,d as ix_select_item};
//# sourceMappingURL=p-44a27b29.entry.js.map