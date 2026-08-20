var jt=Object.defineProperty;var qt=(o,t,e)=>t in o?jt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var p=(o,t,e)=>qt(o,typeof t!="symbol"?t+"":t,e);var Y=globalThis,Z=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),wt=new WeakMap,O=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Z&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&wt.set(e,t))}return t}toString(){return this.cssText}},$t=o=>new O(typeof o=="string"?o:o+"",void 0,it),R=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new O(e,o,it)},xt=(o,t)=>{if(Z)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=Y.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},st=Z?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return $t(e)})(o):o;var{is:It,defineProperty:Bt,getOwnPropertyDescriptor:Vt,getOwnPropertyNames:Wt,getOwnPropertySymbols:Kt,getPrototypeOf:Gt}=Object,A=globalThis,St=A.trustedTypes,Qt=St?St.emptyScript:"",Jt=A.reactiveElementPolyfillSupport,H=(o,t)=>o,ot={toAttribute(o,t){switch(t){case Boolean:o=o?Qt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Et=(o,t)=>!It(o,t),At={attribute:!0,type:String,converter:ot,reflect:!1,useDefault:!1,hasChanged:Et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);var S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=At){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Bt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:n}=Vt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){let d=s?.call(this);n?.call(this,r),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??At}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;let t=Gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){let e=this.properties,i=[...Wt(e),...Kt(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(st(s))}else t!==void 0&&e.push(st(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:ot).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:ot;this._$Em=s;let d=r.fromAttribute(e,n.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(t!==void 0){let r=this.constructor;if(s===!1&&(n=this[t]),i??(i=r.getPropertyOptions(t)),!((i.hasChanged??Et)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,r??e??this[t]),n!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i){let{wrapped:r}=n,d=this[s];r!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,n,d)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[H("elementProperties")]=new Map,S[H("finalized")]=new Map,Jt?.({ReactiveElement:S}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.2");var U=globalThis,kt=o=>o,X=U.trustedTypes,Ct=X?X.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ot="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Rt="?"+E,Yt=`<${Rt}>`,N=document,D=()=>N.createComment(""),F=o=>o===null||typeof o!="object"&&typeof o!="function",dt=Array.isArray,Zt=o=>dt(o)||typeof o?.[Symbol.iterator]=="function",nt=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nt=/-->/g,zt=/>/g,k=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tt=/'/g,Pt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,_t=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),l=_t(1),tt=_t(2),ge=_t(3),z=Symbol.for("lit-noChange"),a=Symbol.for("lit-nothing"),Mt=new WeakMap,C=N.createTreeWalker(N,129);function Lt(o,t){if(!dt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ct!==void 0?Ct.createHTML(t):t}var Xt=(o,t)=>{let e=o.length-1,i=[],s,n=t===2?"<svg>":t===3?"<math>":"",r=L;for(let d=0;d<e;d++){let c=o[d],u,g,_=-1,v=0;for(;v<c.length&&(r.lastIndex=v,g=r.exec(c),g!==null);)v=r.lastIndex,r===L?g[1]==="!--"?r=Nt:g[1]!==void 0?r=zt:g[2]!==void 0?(Ht.test(g[2])&&(s=RegExp("</"+g[2],"g")),r=k):g[3]!==void 0&&(r=k):r===k?g[0]===">"?(r=s??L,_=-1):g[1]===void 0?_=-2:(_=r.lastIndex-g[2].length,u=g[1],r=g[3]===void 0?k:g[3]==='"'?Pt:Tt):r===Pt||r===Tt?r=k:r===Nt||r===zt?r=L:(r=k,s=void 0);let m=r===k&&o[d+1].startsWith("/>")?" ":"";n+=r===L?c+Yt:_>=0?(i.push(u),c.slice(0,_)+Ot+c.slice(_)+E+m):c+E+(_===-2?d:m)}return[Lt(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},j=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0,d=t.length-1,c=this.parts,[u,g]=Xt(t,e);if(this.el=o.createElement(u,i),C.currentNode=this.el.content,e===2||e===3){let _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(s=C.nextNode())!==null&&c.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let _ of s.getAttributeNames())if(_.endsWith(Ot)){let v=g[r++],m=s.getAttribute(_).split(E),J=/([.?@])?(.*)/.exec(v);c.push({type:1,index:n,name:J[2],strings:m,ctor:J[1]==="."?at:J[1]==="?"?ct:J[1]==="@"?lt:P}),s.removeAttribute(_)}else _.startsWith(E)&&(c.push({type:6,index:n}),s.removeAttribute(_));if(Ht.test(s.tagName)){let _=s.textContent.split(E),v=_.length-1;if(v>0){s.textContent=X?X.emptyScript:"";for(let m=0;m<v;m++)s.append(_[m],D()),C.nextNode(),c.push({type:2,index:++n});s.append(_[v],D())}}}else if(s.nodeType===8)if(s.data===Rt)c.push({type:2,index:n});else{let _=-1;for(;(_=s.data.indexOf(E,_+1))!==-1;)c.push({type:7,index:n}),_+=E.length-1}n++}}static createElement(t,e){let i=N.createElement("template");return i.innerHTML=t,i}};function T(o,t,e=o,i){if(t===z)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,n=F(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=T(o,s._$AS(o,t.values),s,i)),t}var rt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);C.currentNode=s;let n=C.nextNode(),r=0,d=0,c=i[0];for(;c!==void 0;){if(r===c.index){let u;c.type===2?u=new q(n,n.nextSibling,this,t):c.type===1?u=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(u=new ht(n,this,t)),this._$AV.push(u),c=i[++d]}r!==c?.index&&(n=C.nextNode(),r++)}return C.currentNode=N,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},q=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=a,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),F(t)?t===a||t==null||t===""?(this._$AH!==a&&this._$AR(),this._$AH=a):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Zt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==a&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=j.createElement(Lt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let n=new rt(s,this),r=n.u(this.options);n.p(e),this.T(r),this._$AH=n}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new j(t)),e}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new o(this.O(D()),this.O(D()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=kt(t).nextSibling;kt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=a,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=a}_$AI(t,e=this,i,s){let n=this.strings,r=!1;if(n===void 0)t=T(this,t,e,0),r=!F(t)||t!==this._$AH&&t!==z,r&&(this._$AH=t);else{let d=t,c,u;for(t=n[0],c=0;c<n.length-1;c++)u=T(this,d[i+c],e,c),u===z&&(u=this._$AH[c]),r||(r=!F(u)||u!==this._$AH[c]),u===a?t=a:t!==a&&(t+=(u??"")+n[c+1]),this._$AH[c]=u}r&&!s&&this.j(t)}j(t){t===a?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===a?void 0:t}},ct=class extends P{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==a)}},lt=class extends P{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??a)===z)return;let i=this._$AH,s=t===a&&i!==a||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==a&&(i===a||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ht=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}};var te=U.litHtmlPolyfillSupport;te?.(j,q),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.3");var Ut=(o,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let n=e?.renderBefore??null;i._$litPart$=s=new q(t.insertBefore(D(),n),n,void 0,e??{})}return s._$AI(o),s};var I=globalThis,f=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};f._$litElement$=!0,f.finalized=!0,I.litElementHydrateSupport?.({LitElement:f});var ee=I.litElementPolyfillSupport;ee?.({LitElement:f});(I.litElementVersions??(I.litElementVersions=[])).push("4.2.2");var b=R`
  :host { display: block; }
  ha-card {
    padding: 16px;
    border-radius: var(--ha-card-border-radius, 16px);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .header { display: flex; align-items: center; gap: 12px; }
  .header .icon {
    width: 40px; height: 40px; border-radius: 12px;
    display: grid; place-items: center;
    background: var(--alp-soft, rgba(var(--rgb-primary-color, 3,169,244), 0.14));
    color: var(--primary-color);
  }
  .header .titles { flex: 1; min-width: 0; }
  .title { font-size: 15px; font-weight: 700; line-height: 1.2; }
  .subtitle { font-size: 12px; font-weight: 500; color: var(--secondary-text-color); }
  .power {
    width: 40px; height: 40px; border-radius: 50%; border: none; cursor: pointer;
    display: grid; place-items: center;
    background: var(--secondary-background-color); color: var(--secondary-text-color);
    transition: background .18s, color .18s;
  }
  .power.on { background: rgba(var(--rgb-primary-color, 3,169,244), 0.18); color: var(--primary-color); }
  .bar-wrap { display: flex; flex-direction: column; gap: 6px; }
  .bar-top { display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; }
  .bar-top .val { font-variant-numeric: tabular-nums; }
  .bar { height: 10px; border-radius: 999px; background: var(--secondary-background-color); overflow: hidden; }
  .bar > span { display: block; height: 100%; border-radius: 999px; background: var(--primary-color); transition: width .3s ease; }
  .bar.boost > span { background: var(--alp-boost, #ff9800); }
  .bar.perf > span { background: var(--alp-perf, #4caf50); }
  .grid { display: grid; gap: 8px; }
  .grid.c2 { grid-template-columns: repeat(2, 1fr); }
  .grid.c3 { grid-template-columns: repeat(3, 1fr); }
  .grid.c4 { grid-template-columns: repeat(4, 1fr); }
  .grid.c5 { grid-template-columns: repeat(5, 1fr); }
  button.mode, button.plain {
    min-height: 46px; border-radius: 12px; cursor: pointer;
    border: 1px solid var(--divider-color);
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    font-size: 13px; font-weight: 600;
    display: flex; align-items: center; justify-content: center; gap: 6px;
    padding: 6px 8px; text-align: center; line-height: 1.15;
    transition: background .18s, color .18s, border-color .18s;
  }
  button.mode:hover, button.plain:hover { color: var(--primary-text-color); }
  button.mode.active {
    border-color: transparent; color: var(--primary-color);
    background: rgba(var(--rgb-primary-color, 3,169,244), 0.16);
    box-shadow: inset 0 0 0 1px currentColor;
  }
  button.mode.active.boost { color: var(--alp-boost, #ff9800); background: rgba(255,152,0,.16); }
  .metric-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
  .metric { border: 1px solid var(--divider-color); border-radius: 12px; padding: 10px 12px; }
  .metric .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .04em; color: var(--secondary-text-color); }
  .metric .value { font-size: 20px; font-weight: 800; font-variant-numeric: tabular-nums; }
  .row { display: flex; align-items: center; gap: 10px; }
  .slider-row { display: flex; flex-direction: column; gap: 4px; }
  input[type="range"] { width: 100%; accent-color: var(--primary-color); }
  .dial-wrap { position: relative; margin: 0 auto; max-width: 260px; width: 100%; }
  .dial-wrap svg { width: 100%; display: block; }
  .dial-center {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: center; pointer-events: none;
  }
  .dial-center .mode-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--secondary-text-color); }
  .dial-center .target { font-size: 44px; font-weight: 800; line-height: 1; font-variant-numeric: tabular-nums; }
  .dial-center .target sup { font-size: 16px; vertical-align: super; }
  .dial-center .current { font-size: 13px; font-weight: 600; color: var(--secondary-text-color); display: flex; align-items: center; gap: 4px; margin-top: 6px; }
  .select-row {
    position: relative; display: flex; align-items: center; gap: 10px;
    border: 1px solid var(--divider-color); border-radius: 12px; padding: 8px 12px;
    background: var(--secondary-background-color);
  }
  .select-row .lbl { flex: 1; font-size: 13px; font-weight: 600; }
  .select-row select { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
  .dimmed { opacity: .45; pointer-events: none; }
  .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--secondary-text-color); }
  .warn { color: var(--error-color, #db4437); font-size: 13px; font-weight: 600; }
  .stepper { display: flex; align-items: center; justify-content: space-between; gap: 8px;
    border: 1px solid var(--divider-color); border-radius: 12px; padding: 6px 8px; }
  .stepper button { width: 32px; height: 32px; border-radius: 8px; border: none; cursor: pointer;
    background: var(--secondary-background-color); color: var(--primary-text-color); font-size: 18px; }
  .stepper .v { font-weight: 700; font-variant-numeric: tabular-nums; }
`;var pt={recuperator:"Recuperator",air_conditioner:"Air conditioner",heat_pump:"Heat pump",sensors:"Temperatures",device_settings:"Device settings",settings:"Settings",recuperation:"Recuperation",fan_speed:"Fan speed",supply:"Supply",exhaust:"Exhaust",off:"Off",on:"On",building_protection:"Building protection",economy:"Economy",comfort:"Comfort",boost:"Boost",outdoor:"Outdoor",indoor:"Indoor",supply_air:"Supply air",extract_air:"Extract air",night_cooling:"Night cooling",power:"Power",running:"Running",standby:"Standby",target_temperature:"Target temperature",heat:"Heat",cool:"Cool",dry:"Dry",fan_only:"Fan",auto:"Auto",low:"Low",medium:"Medium",high:"High",full_swing:"Full swing",fixed:"Fixed",swing_vertical:"Vertical swing",swing_horizontal:"Horizontal swing",floor:"Floor",water:"Hot water",heating:"Heating",hot_water:"Hot water",heating_water:"Heating + Water",quick_heat:"Quick heat",quiet_mode:"Quiet",disinfection:"Disinfection",entity_not_found:"Entity not found",date_time:"Date & time",date:"Date",time:"Time",sync_time:"Sync with Home Assistant",start_time:"Start",stop_time:"Stop",nc_extract_start:"Extract air temp. to start",nc_extract_stop:"Extract air temp. to stop",nc_outdoor_stop:"Outdoor temp. to stop",nc_supply_setpoint:"Supply air setpoint"},ie={recuperator:"\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0442\u043E\u0440",air_conditioner:"\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440",heat_pump:"\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u043D\u0430\u0441\u043E\u0441",sensors:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",device_settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",recuperation:"\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0446\u0438\u044F",fan_speed:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u0430",supply:"\u041F\u0440\u0438\u0442\u043E\u043A",exhaust:"\u0412\u044B\u0442\u044F\u0436\u043A\u0430",off:"\u0412\u044B\u043A\u043B",on:"\u0412\u043A\u043B",building_protection:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0437\u0434\u0430\u043D\u0438\u044F",economy:"\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u044B\u0439",comfort:"\u041A\u043E\u043C\u0444\u043E\u0440\u0442",boost:"Boost",outdoor:"\u0423\u043B\u0438\u0446\u0430",indoor:"\u0412 \u0434\u043E\u043C\u0435",supply_air:"\u041F\u0440\u0438\u0442\u043E\u0447\u043D\u044B\u0439 \u0432\u043E\u0437\u0434\u0443\u0445",extract_air:"\u0412\u044B\u0442\u044F\u0436\u043D\u043E\u0439 \u0432\u043E\u0437\u0434\u0443\u0445",night_cooling:"\u041D\u043E\u0447\u043D\u043E\u0435 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",power:"\u041F\u0438\u0442\u0430\u043D\u0438\u0435",running:"\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442",standby:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",target_temperature:"\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",heat:"\u041E\u0431\u043E\u0433\u0440\u0435\u0432",cool:"\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",dry:"\u041E\u0441\u0443\u0448\u0435\u043D\u0438\u0435",fan_only:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F",auto:"\u0410\u0432\u0442\u043E",low:"\u041D\u0438\u0437\u043A\u0430\u044F",medium:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F",high:"\u0412\u044B\u0441\u043E\u043A\u0430\u044F",full_swing:"\u041A\u0430\u0447\u0430\u043D\u0438\u0435",fixed:"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E",swing_vertical:"\u0412\u0435\u0440\u0442. \u0436\u0430\u043B\u044E\u0437\u0438",swing_horizontal:"\u0413\u043E\u0440. \u0436\u0430\u043B\u044E\u0437\u0438",floor:"\u041F\u043E\u043B",water:"\u0412\u043E\u0434\u0430",heating:"\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435",hot_water:"\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u0432\u043E\u0434\u0430",heating_water:"\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435 + \u0432\u043E\u0434\u0430",quick_heat:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432",quiet_mode:"\u0422\u0438\u0445\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",disinfection:"\u0414\u0435\u0437\u0438\u043D\u0444\u0435\u043A\u0446\u0438\u044F",entity_not_found:"\u041E\u0431\u044A\u0435\u043A\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",date_time:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",date:"\u0414\u0430\u0442\u0430",time:"\u0412\u0440\u0435\u043C\u044F",sync_time:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441 Home Assistant",start_time:"\u0421\u0442\u0430\u0440\u0442",stop_time:"\u0421\u0442\u043E\u043F",nc_extract_start:"\u0422. \u0432\u044B\u0442\u044F\u0436\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u0440\u0442\u0430",nc_extract_stop:"\u0422. \u0432\u044B\u0442\u044F\u0436\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u043E\u043F\u0430",nc_outdoor_stop:"\u0422. \u0443\u043B\u0438\u0446\u044B \u0434\u043B\u044F \u0441\u0442\u043E\u043F\u0430",nc_supply_setpoint:"\u0423\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u0440\u0438\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0430"},se={recuperator:"Rekuperators",air_conditioner:"Kondicionieris",heat_pump:"Siltums\u016Bknis",sensors:"Temperat\u016Bras",device_settings:"Ier\u012Bces iestat\u012Bjumi",settings:"Iestat\u012Bjumi",recuperation:"Rekuper\u0101cija",fan_speed:"Ventilatora \u0101trums",supply:"Piepl\u016Bde",exhaust:"Nos\u016Bce",off:"Izsl\u0113gts",on:"Iesl\u0113gts",building_protection:"\u0112kas aizsardz\u012Bba",economy:"Ekonomiskais",comfort:"Norm\u0101lais",boost:"Boost",outdoor:"\u0100r\u0101",indoor:"Iek\u0161telp\u0101s",supply_air:"Piepl\u016Bdes gaiss",extract_air:"Nos\u016Bces gaiss",night_cooling:"Nakts dzes\u0113\u0161ana",power:"Baro\u0161ana",running:"Darbojas",standby:"Gaidst\u0101ve",target_temperature:"M\u0113r\u0137a temperat\u016Bra",heat:"Sild\u012B\u0161ana",cool:"Dzes\u0113\u0161ana",dry:"Sausin\u0101\u0161ana",fan_only:"Ventil\u0101cija",auto:"Auto",low:"Zems",medium:"Vid\u0113js",high:"Augsts",full_swing:"\u0160\u016Bpo\u0161ana",fixed:"Fiks\u0113ts",swing_vertical:"Vert. \u017Eal\u016Bzijas",swing_horizontal:"Horiz. \u017Eal\u016Bzijas",floor:"Gr\u012Bda",water:"\u016Adens",heating:"Apkure",hot_water:"Karstais \u016Bdens",heating_water:"Apkure + \u016Bdens",quick_heat:"\u0100tr\u0101 sild\u012B\u0161ana",quiet_mode:"Klusais re\u017E\u012Bms",disinfection:"Dezinfekcija",entity_not_found:"Objekts nav atrasts",date_time:"Datums un laiks",date:"Datums",time:"Laiks",sync_time:"Sinhroniz\u0113t ar Home Assistant",start_time:"S\u0101kums",stop_time:"Beigas",nc_extract_start:"Nos\u016Bces temp. startam",nc_extract_stop:"Nos\u016Bces temp. aptur\u0113\u0161anai",nc_outdoor_stop:"\u0100ra temp. aptur\u0113\u0161anai",nc_supply_setpoint:"Piepl\u016Bdes gaisa uzst\u0101d\u012Bjums"},oe={en:pt,ru:ie,lv:se};function w(o,t,e){let i=t&&t.language&&t.language!=="auto"?t.language:o&&o.language?o.language.split("-")[0]:"en";return(oe[i]||pt)[e]??pt[e]??e}function M(o,t,e={}){let i=new Event(t,{bubbles:!0,composed:!0,cancelable:!1});return i.detail=e,o.dispatchEvent(i),i}function ut(o,t,e,i){if(!(!i||i.action==="none"))switch(i.action){case"more-info":{let s=i.entity||e;s&&M(o,"hass-more-info",{entityId:s});break}case"toggle":{let s=i.entity||e;s&&t.callService("homeassistant","toggle",{entity_id:s});break}case"navigate":i.navigation_path&&(history.pushState(null,"",i.navigation_path),M(window,"location-changed",{}));break;case"url":i.url_path&&window.open(i.url_path,i.new_tab===!1?"_self":"_blank");break;case"call-service":case"perform-action":{let s=i.perform_action||i.service;if(!s||!s.includes("."))return;let[n,r]=s.split(".",2);t.callService(n,r,i.data||i.service_data||{},i.target||void 0);break}case"fire-dom-event":M(o,"ll-custom",i);break;default:break}}var y=class extends f{constructor(){super(...arguments);p(this,"_labels",{entity:"Entity (climate)",name:"Name",icon:"Icon",language:"Language",show_power:"Power button",show_dial:"Temperature dial",show_modes:"Mode buttons",show_fan:"Fan speed selector",show_swing_vertical:"Vertical swing selector",show_swing_horizontal:"Horizontal swing selector",show_current_temperature:"Current temperature",default_hvac_mode:"HVAC mode on power on"});p(this,"computeLabel",e=>this._labels[e.name]||e.label||e.name)}setConfig(e){this._config={...e}}get schema(){return[]}_valueChanged(e){let i=e.detail.value;M(this,"config-changed",{config:i})}render(){return!this.hass||!this._config?a:l`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this.schema}
        .computeLabel=${this.computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>`}};p(y,"properties",{hass:{},_config:{state:!0}}),p(y,"styles",R`
    :host { display: block; }
    ha-form { display: block; }
  `);var $=o=>({type:"grid",name:"",schema:o.map(t=>({name:t,selector:{boolean:{}}}))}),h=(o,t)=>({name:o,selector:{entity:t?{domain:t}:{}}}),x={name:"language",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto (Home Assistant)"},{value:"en",label:"English"},{value:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{value:"lv",label:"Latvie\u0161u"}]}}};var mt=class extends y{constructor(){super(...arguments);p(this,"_labels",{name:"Name",icon:"Icon",language:"Language",mode_entity:"Mode entity (select / fan / climate)",power_entity:"Power entity (switch / fan)",recuperation_entity:"Recuperation efficiency sensor (%)",fan_speed_entity:"Fan speed sensor (%)",default_mode:"Mode on power on",show_power:"Power button",show_recuperation:"Recuperation bar",show_fan_speed:"Fan speed bar",show_building_protection:"Button: building protection",show_economy:"Button: economy",show_comfort:"Button: comfort",show_boost:"Button: boost",show_settings_button:"Settings button",settings_button_label:"Settings button label",settings_icon:"Settings button icon",settings_entity:"Settings button target entity",hold_time:"Long press duration (ms)",tap_action:"Short press action",hold_action:"Long press action"})}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},x,h("mode_entity",["select","input_select","fan","climate"]),h("power_entity",["switch","fan","input_boolean","climate"]),{type:"grid",name:"",schema:[h("recuperation_entity",["sensor","number","input_number"]),h("fan_speed_entity",["sensor","number","input_number"])]},{name:"default_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["building_protection","economy","comfort","boost"]}}},$(["show_power","show_recuperation","show_fan_speed","show_building_protection","show_economy","show_comfort","show_boost","show_settings_button"]),{type:"grid",name:"",schema:[{name:"settings_button_label",selector:{text:{}}},{name:"settings_icon",selector:{icon:{}}}]},h("settings_entity"),{name:"hold_time",selector:{number:{min:200,max:2e3,step:50,mode:"box",unit_of_measurement:"ms"}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}}]}};customElements.define("alpicair-recuperator-card-editor",mt);var ne=[{id:"building_protection",icon:"mdi:shield-check",cfg:"show_building_protection"},{id:"economy",icon:"mdi:leaf",cfg:"show_economy"},{id:"comfort",icon:"mdi:sofa",cfg:"show_comfort"},{id:"boost",icon:"mdi:rocket-launch",cfg:"show_boost",tone:"boost"}],B=class extends f{static getConfigElement(){return document.createElement("alpicair-recuperator-card-editor")}static getStubConfig(){return{type:"custom:alpicair-recuperator-card",mode_entity:"",power_entity:""}}setConfig(t){this._config={show_power:!0,show_recuperation:!0,show_fan_speed:!0,show_building_protection:!0,show_economy:!0,show_comfort:!0,show_boost:!0,show_settings_button:!0,settings_button_label:"",settings_icon:"mdi:cog",hold_time:500,tap_action:{action:"more-info"},hold_action:{action:"none"},language:"auto",...t}}getCardSize(){return 5}_t(t){return w(this.hass,this._config,t)}_num(t){let e=t&&this.hass.states[t],i=e?Number(e.state):NaN;return Number.isFinite(i)?i:null}get _mode(){let t=this._config.mode_entity&&this.hass.states[this._config.mode_entity];return t?t.state:null}get _on(){if(this._config.power_entity){let t=this.hass.states[this._config.power_entity];return t?!["off","unavailable","unknown"].includes(t.state):!1}return this._mode&&this._mode!=="off"}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=e.split(".")[0];i==="select"||i==="input_select"?this.hass.callService(i,"select_option",{entity_id:e,option:t}):i==="fan"?this.hass.callService("fan","set_preset_mode",{entity_id:e,preset_mode:t}):i==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:t})}_togglePower(){let t=this._config.power_entity;t?this.hass.callService("homeassistant","toggle",{entity_id:t}):this._config.mode_entity&&this._setMode(this._on?"off":this._config.default_mode||"comfort")}_down(t){t.pointerType==="mouse"&&t.button!==0||(this._held=!1,this._timer=window.setTimeout(()=>{this._held=!0,navigator.vibrate&&navigator.vibrate(30),ut(this,this.hass,this._config.settings_entity||this._config.mode_entity,this._config.hold_action)},Number(this._config.hold_time)||500))}_up(t){this._timer&&(clearTimeout(this._timer),this._timer=null),this._held||(t.preventDefault(),ut(this,this.hass,this._config.settings_entity||this._config.mode_entity,this._config.tap_action)),this._held=!1}_cancel(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._held=!1}render(){if(!this.hass||!this._config)return a;let t=this._on,e=this._mode,i=this._num(this._config.recuperation_entity),s=this._num(this._config.fan_speed_entity),n=ne.filter(r=>this._config[r.cfg]!==!1);return l`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon||"mdi:fan"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name||this._t("recuperator")}</div>
            <div class="subtitle">
              ${t?`${this._t("running")}${e?` \xB7 ${this._t(e)}`:""}`:this._t("standby")}
            </div>
          </div>
          ${this._config.show_power?l`<button class="power ${t?"on":""}" aria-label=${this._t("power")}
                @click=${this._togglePower}><ha-icon icon="mdi:power"></ha-icon></button>`:a}
        </div>

        ${this._config.show_recuperation&&i!==null?this._bar(this._t("recuperation"),t?i:0,"perf"):a}
        ${this._config.show_fan_speed&&s!==null?this._bar(this._t("fan_speed"),t?s:0,e==="boost"?"boost":""):a}

        ${n.length?l`<div class="grid c2">
              ${n.map(r=>l`
                <button class="mode ${e===r.id?"active":""} ${r.tone||""}"
                  @click=${()=>this._setMode(r.id)}>
                  <ha-icon icon=${r.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(r.id)}
                </button>`)}
            </div>`:a}

        ${this._config.show_settings_button?l`<button class="plain" style="width:100%"
              @pointerdown=${this._down} @pointerup=${this._up}
              @pointerleave=${this._cancel} @pointercancel=${this._cancel}
              @contextmenu=${r=>r.preventDefault()}>
              <ha-icon icon=${this._config.settings_icon||"mdi:cog"} style="--mdc-icon-size:18px"></ha-icon>
              ${this._config.settings_button_label||this._t("settings")}
            </button>`:a}
      </ha-card>`}_bar(t,e,i){let s=Math.max(0,Math.min(100,Number(e)||0));return l`
      <div class="bar-wrap">
        <div class="bar-top"><span>${t}</span><span class="val">${Math.round(s)}%</span></div>
        <div class="bar ${i}"><span style="width:${s}%"></span></div>
      </div>`}};p(B,"properties",{hass:{},_config:{state:!0}}),p(B,"styles",b);customElements.define("alpicair-recuperator-card",B);var gt=class extends y{get schema(){return[h("entity","climate"),{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},x,{name:"default_hvac_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["auto","heat_cool","cool","heat","dry","fan_only"]}}},$(["show_power","show_dial","show_modes","show_current_temperature","show_fan","show_swing_vertical","show_swing_horizontal"])]}};customElements.define("alpicair-air-conditioner-card-editor",gt);var re={off:"mdi:power",fan_only:"mdi:fan",dry:"mdi:water-percent",cool:"mdi:snowflake",heat:"mdi:fire",heat_cool:"mdi:autorenew",auto:"mdi:autorenew"},ae={off:"off",fan_only:"fan_only",dry:"dry",cool:"cool",heat:"heat",heat_cool:"auto",auto:"auto"},et=215,Dt=290;function ft(o,t,e,i){let s=(i-90)*Math.PI/180;return{x:o+e*Math.cos(s),y:t+e*Math.sin(s)}}function Ft(o,t,e=78){let i=ft(100,100,e,o),s=ft(100,100,e,t);return`M ${i.x} ${i.y} A ${e} ${e} 0 ${t-o>180?1:0} 1 ${s.x} ${s.y}`}var V=class extends f{static getConfigElement(){return document.createElement("alpicair-air-conditioner-card-editor")}static getStubConfig(t){return{type:"custom:alpicair-air-conditioner-card",entity:Object.keys(t.states).find(i=>i.startsWith("climate."))||""}}setConfig(t){if(!t.entity||!t.entity.startsWith("climate."))throw new Error("An entity of domain `climate` is required");this._config={show_power:!0,show_dial:!0,show_modes:!0,show_fan:!0,show_swing_vertical:!0,show_swing_horizontal:!0,show_current_temperature:!0,language:"auto",...t}}getCardSize(){return 6}get _stateObj(){return this.hass&&this.hass.states[this._config.entity]}_t(t){return w(this.hass,this._config,t)}_modeLabel(t){return this._t(ae[t]||t)||t}_call(t,e){this.hass.callService("climate",t,{entity_id:this._config.entity,...e})}_setTemp(t){this._pending=t,clearTimeout(this._debounce),this._debounce=setTimeout(()=>{this._call("set_temperature",{temperature:t}),this._pending=void 0},400)}_togglePower(){let t=this._stateObj;if(t.state==="off"){let e=this._config.default_hvac_mode||(t.attributes.hvac_modes||[]).find(i=>i!=="off")||"auto";this._call("set_hvac_mode",{hvac_mode:e})}else this._call("set_hvac_mode",{hvac_mode:"off"})}render(){if(!this.hass||!this._config)return a;let t=this._stateObj;if(!t)return l`<ha-card><div class="warn">${this._t("entity_not_found")}: ${this._config.entity}</div></ha-card>`;let e=t.attributes,i=t.state!=="off"&&t.state!=="unavailable",s=e.min_temp??16,n=e.max_temp??30,r=e.target_temp_step??.5,d=this._pending??e.temperature??s,c=Math.min(1,Math.max(0,(d-s)/(n-s))),u=et+c*Dt,g=ft(100,100,78,u),_=(e.hvac_modes||[]).filter(m=>m!=="off"),v=Math.min(5,Math.max(2,_.length));return l`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon||"mdi:air-conditioner"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name||e.friendly_name||this._t("air_conditioner")}</div>
            <div class="subtitle">${i?this._modeLabel(t.state):this._t("off")}</div>
          </div>
          ${this._config.show_power?l`<button class="power ${i?"on":""}" title=${this._t("power")}
                aria-label=${this._t("power")} @click=${this._togglePower}>
                <ha-icon icon="mdi:power"></ha-icon></button>`:a}
        </div>

        ${this._config.show_dial?l`
            <div class="dial-wrap">
              <svg viewBox="0 0 200 200">
                ${tt`<path d=${Ft(et,et+Dt)} fill="none" stroke="var(--secondary-background-color)" stroke-width="14" stroke-linecap="round" />`}
                ${i?tt`<path d=${Ft(et,u)} fill="none" stroke="var(--primary-color)" stroke-width="14" stroke-linecap="round" />`:a}
                ${tt`<circle cx=${g.x} cy=${g.y} r="9" fill="var(--card-background-color)" stroke=${i?"var(--primary-color)":"var(--disabled-text-color)"} stroke-width="2" />`}
              </svg>
              <div class="dial-center">
                <div class="mode-label">${i?this._modeLabel(t.state):this._t("off")}</div>
                <div class="target">${Number(d).toFixed(r<1?1:0)}<sup>°C</sup></div>
                ${this._config.show_current_temperature&&e.current_temperature!=null?l`<div class="current"><ha-icon icon="mdi:thermometer" style="--mdc-icon-size:15px"></ha-icon>${e.current_temperature} °C</div>`:a}
              </div>
            </div>
            <input type="range" min=${s} max=${n} step=${r} .value=${String(d)}
              aria-label=${this._t("target_temperature")}
              @input=${m=>this._setTemp(Number(m.target.value))} ?disabled=${!i} />`:a}

        ${this._config.show_modes&&_.length?l`<div class="grid c${v}">
              ${_.map(m=>l`
                <button class="mode ${i&&t.state===m?"active":""}"
                  title=${this._modeLabel(m)} aria-label=${this._modeLabel(m)}
                  @click=${()=>this._call("set_hvac_mode",{hvac_mode:m})}>
                  <ha-icon icon=${re[m]||"mdi:thermostat"}></ha-icon>
                </button>`)}
            </div>`:a}

        <div class="${i?"":"dimmed"}" style="display:flex;flex-direction:column;gap:8px;">
          ${this._config.show_fan&&e.fan_modes?this._select("mdi:fan",e.fan_mode,e.fan_modes,m=>this._call("set_fan_mode",{fan_mode:m})):a}
          ${this._config.show_swing_vertical&&e.swing_modes?this._select("mdi:arrow-up-down",e.swing_mode,e.swing_modes,m=>this._call("set_swing_mode",{swing_mode:m})):a}
          ${this._config.show_swing_horizontal&&e.swing_horizontal_modes?this._select("mdi:arrow-left-right",e.swing_horizontal_mode,e.swing_horizontal_modes,m=>this._call("set_swing_horizontal_mode",{swing_horizontal_mode:m})):a}
        </div>
      </ha-card>
    `}_select(t,e,i,s){return l`
      <label class="select-row">
        <ha-icon icon=${t} style="--mdc-icon-size:18px;color:var(--secondary-text-color)"></ha-icon>
        <span class="lbl">${this._t(String(e))||e}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:18px;color:var(--secondary-text-color)"></ha-icon>
        <select .value=${e??""} @change=${n=>s(n.target.value)}>
          ${i.map(n=>l`<option value=${n} ?selected=${n===e}>${this._t(n)||n}</option>`)}
        </select>
      </label>`}};p(V,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),p(V,"styles",b);customElements.define("alpicair-air-conditioner-card",V);var yt=class extends y{constructor(){super(...arguments);p(this,"_labels",{name:"Name",icon:"Icon",language:"Language",power_entity:"Power entity",floor_entity:"Floor heating (climate)",water_entity:"Hot water (climate / water_heater)",mode_entity:"Mode entity (select)",quick_heat_entity:"Quick heat entity (switch)",quiet_mode_entity:"Quiet mode entity (switch)",disinfection_entity:"Disinfection entity (switch)",show_power:"Power button",show_floor:"Floor temperature slider",show_water:"Water temperature slider",show_modes:"Mode buttons",show_quick_heat:"Button: quick heat",show_quiet_mode:"Button: quiet mode",show_disinfection:"Button: disinfection"})}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},x,h("power_entity",["switch","input_boolean","climate"]),{type:"grid",name:"",schema:[h("floor_entity",["climate"]),h("water_entity",["climate","water_heater"])]},h("mode_entity",["select","input_select","climate"]),{type:"grid",name:"",schema:[h("quick_heat_entity",["switch","input_boolean","script"]),h("quiet_mode_entity",["switch","input_boolean"]),h("disinfection_entity",["switch","input_boolean","script"])]},$(["show_power","show_floor","show_water","show_modes","show_quick_heat","show_quiet_mode","show_disinfection"])]}};customElements.define("alpicair-heat-pump-card-editor",yt);var W=class extends f{static getConfigElement(){return document.createElement("alpicair-heat-pump-card-editor")}static getStubConfig(){return{type:"custom:alpicair-heat-pump-card"}}setConfig(t){this._config={show_power:!0,show_floor:!0,show_water:!0,show_modes:!0,show_quick_heat:!0,show_quiet_mode:!0,show_disinfection:!0,language:"auto",...t},this._pending={}}getCardSize(){return 6}_t(t){return w(this.hass,this._config,t)}_st(t){return t&&this.hass.states[t]}_setTemp(t,e){this._pending={...this._pending,[t]:e},clearTimeout(this._d),this._d=setTimeout(()=>{this.hass.callService("climate","set_temperature",{entity_id:t,temperature:e}),this._pending={}},400)}_toggle(t){t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_isOn(t){let e=this._st(t);return e?!["off","unavailable","unknown"].includes(e.state):!1}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=e.split(".")[0];i==="select"||i==="input_select"?this.hass.callService(i,"select_option",{entity_id:e,option:t}):i==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:t})}render(){if(!this.hass||!this._config)return a;let t=this._config.power_entity,e=t?this._isOn(t):!0,i=this._st(this._config.mode_entity),s=[{id:"heating",icon:"mdi:radiator"},{id:"hot_water",icon:"mdi:water-boiler"},{id:"heating_water",icon:"mdi:home-thermometer"}];return l`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon||"mdi:heat-pump"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name||this._t("heat_pump")}</div>
            <div class="subtitle">${e?i?this._t(i.state):this._t("running"):this._t("off")}</div>
          </div>
          ${this._config.show_power&&t?l`<button class="power ${e?"on":""}" aria-label=${this._t("power")}
                @click=${()=>this._toggle(t)}><ha-icon icon="mdi:power"></ha-icon></button>`:a}
        </div>

        <div class="${e?"":"dimmed"}" style="display:flex;flex-direction:column;gap:14px;">
          ${this._config.show_floor?this._climate(this._config.floor_entity,this._t("floor"),"mdi:heating-coil"):a}
          ${this._config.show_water?this._climate(this._config.water_entity,this._t("hot_water"),"mdi:water-thermometer"):a}

          ${this._config.show_modes&&this._config.mode_entity?l`<div class="grid c3">
                ${s.map(n=>l`
                  <button class="mode ${i&&i.state===n.id?"active":""}"
                    @click=${()=>this._setMode(n.id)}>
                    <ha-icon icon=${n.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(n.id)}
                  </button>`)}
              </div>`:a}

          ${this._quickRow()}
        </div>
      </ha-card>`}_quickRow(){let t=[{cfg:"show_quick_heat",entity:this._config.quick_heat_entity,icon:"mdi:flash",key:"quick_heat",tone:"boost"},{cfg:"show_quiet_mode",entity:this._config.quiet_mode_entity,icon:"mdi:volume-off",key:"quiet_mode"},{cfg:"show_disinfection",entity:this._config.disinfection_entity,icon:"mdi:shield-sun",key:"disinfection"}].filter(e=>this._config[e.cfg]!==!1&&e.entity);return t.length?l`<div class="grid c3">
      ${t.map(e=>l`
        <button class="mode ${this._isOn(e.entity)?`active ${e.tone||""}`:""}"
          @click=${()=>this._toggle(e.entity)}>
          <ha-icon icon=${e.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(e.key)}
        </button>`)}
    </div>`:a}_climate(t,e,i){let s=this._st(t);if(!s)return a;let n=s.attributes,r=n.min_temp??5,d=n.max_temp??60,c=n.target_temp_step??.5,u=this._pending[t]??n.temperature??r;return l`
      <div class="slider-row">
        <div class="bar-top">
          <span style="display:flex;align-items:center;gap:6px">
            <ha-icon icon=${i} style="--mdc-icon-size:16px"></ha-icon>${e}
          </span>
          <span class="val">${Number(u).toFixed(c<1?1:0)} °C${n.current_temperature!=null?l` <span style="color:var(--secondary-text-color)">/ ${n.current_temperature} °C</span>`:""}</span>
        </div>
        <input type="range" min=${r} max=${d} step=${c} .value=${String(u)}
          aria-label=${e} @input=${g=>this._setTemp(t,Number(g.target.value))} />
      </div>`}};p(W,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),p(W,"styles",b);customElements.define("alpicair-heat-pump-card",W);var vt=class extends y{constructor(){super(...arguments);p(this,"_labels",{name:"Name",icon:"Icon",language:"Language",outdoor_entity:"Outdoor temperature",indoor_entity:"Indoor temperature",supply_entity:"Supply air temperature",extract_entity:"Extract air temperature",target_entity:"Target temperature entity",show_target_slider:"Target temperature slider",min_temp:"Minimum",max_temp:"Maximum",step:"Step"})}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},x,{type:"grid",name:"",schema:[h("outdoor_entity",["sensor"]),h("indoor_entity",["sensor"]),h("supply_entity",["sensor"]),h("extract_entity",["sensor"])]},h("target_entity",["climate","number","input_number"]),$(["show_target_slider"]),{type:"grid",name:"",schema:[{name:"min_temp",selector:{number:{min:0,max:40,step:1,mode:"box"}}},{name:"max_temp",selector:{number:{min:0,max:60,step:1,mode:"box"}}},{name:"step",selector:{number:{min:.1,max:5,step:.1,mode:"box"}}}]}]}};customElements.define("alpicair-sensors-card-editor",vt);var K=class extends f{static getConfigElement(){return document.createElement("alpicair-sensors-card-editor")}static getStubConfig(){return{type:"custom:alpicair-sensors-card"}}setConfig(t){this._config={show_target_slider:!0,language:"auto",min_temp:15,max_temp:30,step:.5,...t}}getCardSize(){return 4}_t(t){return w(this.hass,this._config,t)}_metric(t,e){let i=t&&this.hass.states[t];if(!i)return a;let s=i.attributes.unit_of_measurement||"\xB0C";return l`<div class="metric">
      <div class="label">${e}</div>
      <div class="value">${i.state} <span style="font-size:13px">${s}</span></div>
    </div>`}_setTarget(t){let e=this._config.target_entity;if(!e)return;let i=e.split(".")[0];i==="climate"?this.hass.callService("climate","set_temperature",{entity_id:e,temperature:t}):this.hass.callService(i,"set_value",{entity_id:e,value:t})}render(){if(!this.hass||!this._config)return a;let t=this._config.target_entity&&this.hass.states[this._config.target_entity],e=t?Number(t.attributes.temperature??t.state):null;return l`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon||"mdi:thermometer"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name||this._t("sensors")}</div>
          </div>
        </div>

        <div class="metric-grid">
          ${this._metric(this._config.outdoor_entity,this._t("outdoor"))}
          ${this._metric(this._config.indoor_entity,this._t("indoor"))}
          ${this._metric(this._config.supply_entity,this._t("supply_air"))}
          ${this._metric(this._config.extract_entity,this._t("extract_air"))}
        </div>

        ${this._config.show_target_slider&&e!==null&&Number.isFinite(e)?l`<div class="slider-row">
              <div class="bar-top">
                <span>${this._t("target_temperature")}</span>
                <span class="val">${e.toFixed(1)} °C</span>
              </div>
              <input type="range" min=${this._config.min_temp} max=${this._config.max_temp}
                step=${this._config.step} .value=${String(e)}
                aria-label=${this._t("target_temperature")}
                @change=${i=>this._setTarget(Number(i.target.value))} />
            </div>`:a}
      </ha-card>`}};p(K,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),p(K,"styles",b);customElements.define("alpicair-sensors-card",K);var bt=class extends y{constructor(){super(...arguments);p(this,"_labels",{name:"Name",icon:"Icon",language:"Language",show_night_cooling:"Section: night cooling",show_fan_speeds:"Section: fan speeds",show_date_time:"Section: date & time",night_cooling_entity:"Night cooling switch",nc_start_time_entity:"Start time",nc_stop_time_entity:"Stop time",nc_extract_start_entity:"Extract air temp. to start",nc_extract_stop_entity:"Extract air temp. to stop",nc_outdoor_stop_entity:"Outdoor temp. to stop",nc_supply_setpoint_entity:"Supply air setpoint",bp_supply_entity:"Building protection \xB7 supply",bp_exhaust_entity:"Building protection \xB7 exhaust",eco_supply_entity:"Economy \xB7 supply",eco_exhaust_entity:"Economy \xB7 exhaust",comfort_supply_entity:"Comfort \xB7 supply",comfort_exhaust_entity:"Comfort \xB7 exhaust",boost_supply_entity:"Boost \xB7 supply",boost_exhaust_entity:"Boost \xB7 exhaust",date_entity:"Date entity",time_entity:"Time entity"})}get schema(){let e=["number","input_number"];return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},x,$(["show_night_cooling","show_fan_speeds","show_date_time"]),h("night_cooling_entity",["switch","input_boolean"]),{type:"grid",name:"",schema:[h("nc_start_time_entity",["time","input_datetime"]),h("nc_stop_time_entity",["time","input_datetime"]),h("nc_extract_start_entity",e),h("nc_extract_stop_entity",e),h("nc_outdoor_stop_entity",e),h("nc_supply_setpoint_entity",e)]},{type:"grid",name:"",schema:[h("bp_supply_entity",e),h("bp_exhaust_entity",e),h("eco_supply_entity",e),h("eco_exhaust_entity",e),h("comfort_supply_entity",e),h("comfort_exhaust_entity",e),h("boost_supply_entity",e),h("boost_exhaust_entity",e)]},{type:"grid",name:"",schema:[h("date_entity",["date","input_datetime"]),h("time_entity",["time","input_datetime"])]}]}};customElements.define("alpicair-device-settings-card-editor",bt);var ce=[{cfg:"nc_extract_start_entity",key:"nc_extract_start",min:13,max:30},{cfg:"nc_extract_stop_entity",key:"nc_extract_stop",min:13,max:30},{cfg:"nc_outdoor_stop_entity",key:"nc_outdoor_stop",min:0,max:30},{cfg:"nc_supply_setpoint_entity",key:"nc_supply_setpoint",min:0,max:30}],le=[{id:"building_protection",supply:"bp_supply_entity",exhaust:"bp_exhaust_entity"},{id:"economy",supply:"eco_supply_entity",exhaust:"eco_exhaust_entity"},{id:"comfort",supply:"comfort_supply_entity",exhaust:"comfort_exhaust_entity"},{id:"boost",supply:"boost_supply_entity",exhaust:"boost_exhaust_entity"}],G=class extends f{static getConfigElement(){return document.createElement("alpicair-device-settings-card-editor")}static getStubConfig(){return{type:"custom:alpicair-device-settings-card"}}setConfig(t){this._config={show_night_cooling:!0,show_fan_speeds:!0,show_date_time:!0,language:"auto",...t}}getCardSize(){return 10}_t(t){return w(this.hass,this._config,t)}_st(t){return t&&this.hass.states[t]}_setNumber(t,e){let i=t.split(".")[0];this.hass.callService(i,"set_value",{entity_id:t,value:e})}_setTime(t,e){let i=t.split(".")[0];this.hass.callService(i,"set_value",{entity_id:t,[i==="input_datetime"?"time":"value"]:e})}render(){return!this.hass||!this._config?a:l`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon||"mdi:tune"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name||this._t("device_settings")}</div>
          </div>
        </div>

        ${this._config.show_night_cooling?this._nightCooling():a}
        ${this._config.show_fan_speeds?this._fanSpeeds():a}
        ${this._config.show_date_time?this._dateTime():a}
      </ha-card>`}_nightCooling(){let t=ce.filter(n=>this._st(this._config[n.cfg])),e=this._st(this._config.nc_start_time_entity),i=this._st(this._config.nc_stop_time_entity),s=this._st(this._config.night_cooling_entity);return!t.length&&!e&&!i&&!s?a:l`
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="section-title">${this._t("night_cooling")}</div>
        ${s?l`<div class="select-row">
              <span class="lbl">${this._t("night_cooling")}</span>
              <ha-switch .checked=${s.state==="on"}
                @change=${()=>this.hass.callService("homeassistant","toggle",{entity_id:this._config.night_cooling_entity})}></ha-switch>
            </div>`:a}
        <div class="grid c2">
          ${e?this._timeInput(this._t("start_time"),this._config.nc_start_time_entity,e):a}
          ${i?this._timeInput(this._t("stop_time"),this._config.nc_stop_time_entity,i):a}
        </div>
        ${t.map(n=>{let r=this._st(this._config[n.cfg]),d=Number(r.attributes.step)||.1,c=Number(r.state);return l`
            <div class="bar-wrap">
              <div class="bar-top"><span>${this._t(n.key)}</span><span class="val">${c.toFixed(1)} °C</span></div>
              <div class="stepper">
                <button @click=${()=>this._setNumber(this._config[n.cfg],+(c-d).toFixed(1))}>−</button>
                <span class="v">${c.toFixed(1)} °C</span>
                <button @click=${()=>this._setNumber(this._config[n.cfg],+(c+d).toFixed(1))}>+</button>
              </div>
            </div>`})}
      </div>`}_timeInput(t,e,i){let s=i.attributes.timestamp!=null&&i.state.length>5?i.state.slice(0,5):i.state;return l`
      <div class="slider-row">
        <div class="section-title">${t}</div>
        <input type="time" .value=${s}
          @change=${n=>this._setTime(e,`${n.target.value}:00`)}
          style="width:100%;padding:9px 10px;border-radius:12px;border:1px solid var(--divider-color);background:var(--secondary-background-color);color:var(--primary-text-color)" />
      </div>`}_fanSpeeds(){let t=le.filter(e=>this._st(this._config[e.supply])||this._st(this._config[e.exhaust]));return t.length?l`
      <div style="display:flex;flex-direction:column;gap:12px">
        <div class="section-title">${this._t("fan_speed")}</div>
        ${t.map(e=>l`
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="font-size:13px;font-weight:700">${this._t(e.id)}</div>
            ${this._speedSlider(this._config[e.supply],this._t("supply"))}
            ${this._speedSlider(this._config[e.exhaust],this._t("exhaust"))}
          </div>`)}
      </div>`:a}_speedSlider(t,e){let i=this._st(t);if(!i)return a;let s=Number(i.attributes.min??0),n=Number(i.attributes.max??100),r=Number(i.attributes.step??1),d=Number(i.state);return l`
      <div class="slider-row">
        <div class="bar-top"><span>${e}</span><span class="val">${d}%</span></div>
        <input type="range" min=${s} max=${n} step=${r} .value=${String(d)} aria-label=${e}
          @change=${c=>this._setNumber(t,Number(c.target.value))} />
      </div>`}_dateTime(){let t=this._st(this._config.date_entity),e=this._st(this._config.time_entity);return!t&&!e?a:l`
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="section-title">${this._t("date_time")}</div>
        <div class="grid c2">
          ${t?l`<div class="slider-row">
                <div class="section-title">${this._t("date")}</div>
                <input type="date" .value=${t.state}
                  @change=${i=>this.hass.callService(this._config.date_entity.split(".")[0],"set_value",{entity_id:this._config.date_entity,date:i.target.value})}
                  style="width:100%;padding:9px 10px;border-radius:12px;border:1px solid var(--divider-color);background:var(--secondary-background-color);color:var(--primary-text-color)" />
              </div>`:a}
          ${e?this._timeInput(this._t("time"),this._config.time_entity,e):a}
        </div>
        ${this._config.sync_action_entity||t&&e?l`<button class="plain" style="width:100%" @click=${this._syncNow}>
              <ha-icon icon="mdi:clock-check" style="--mdc-icon-size:18px"></ha-icon>${this._t("sync_time")}
            </button>`:a}
      </div>`}_syncNow(){let t=new Date,e=i=>String(i).padStart(2,"0");this._config.date_entity&&this.hass.callService(this._config.date_entity.split(".")[0],"set_value",{entity_id:this._config.date_entity,date:`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}),this._config.time_entity&&this._setTime(this._config.time_entity,`${e(t.getHours())}:${e(t.getMinutes())}:00`)}};p(G,"properties",{hass:{},_config:{state:!0}}),p(G,"styles",b);customElements.define("alpicair-device-settings-card",G);var he="1.0.0";window.customCards=window.customCards||[];var Q=(o,t,e)=>{window.customCards.some(i=>i.type===o)||window.customCards.push({type:o,name:t,description:e,preview:!0,documentationURL:"https://github.com/keziksdmitrijs-byte/recuperator-custom-card"})};Q("alpicair-recuperator-card","AlpicAir Recuperator Card","Recuperator control: modes, efficiency, fan speed and a configurable settings button.");Q("alpicair-air-conditioner-card","AlpicAir Air Conditioner Card","Single climate entity: dial, HVAC modes, fan and swing control.");Q("alpicair-heat-pump-card","AlpicAir Heat Pump Card","Floor and hot water temperatures, modes and quick actions.");Q("alpicair-sensors-card","AlpicAir Temperatures Card","Outdoor/indoor/supply/extract temperatures with target slider.");Q("alpicair-device-settings-card","AlpicAir Device Settings Card","Night cooling, fan speed presets and device date & time.");console.info(`%c ALPICAIR-CARDS %c v${he} `,"color:#fff;background:#03a9f4;font-weight:700;border-radius:4px 0 0 4px","color:#03a9f4;background:#333;font-weight:700;border-radius:0 4px 4px 0");
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
