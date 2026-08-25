var ie=Object.defineProperty;var se=(o,t,e)=>t in o?ie(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var m=(o,t,e)=>se(o,typeof t!="symbol"?t+"":t,e);var rt=globalThis,ct=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_t=Symbol(),Ft=new WeakMap,q=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==_t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ct&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Ft.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ft.set(e,t))}return t}toString(){return this.cssText}},Ut=o=>new q(typeof o=="string"?o:o+"",void 0,_t),V=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new q(e,o,_t)},Ot=(o,t)=>{if(ct)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=rt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},ut=ct?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Ut(e)})(o):o;var{is:oe,defineProperty:ne,getOwnPropertyDescriptor:ae,getOwnPropertyNames:re,getOwnPropertySymbols:ce,getPrototypeOf:le}=Object,C=globalThis,Lt=C.trustedTypes,de=Lt?Lt.emptyScript:"",he=C.reactiveElementPolyfillSupport,W=(o,t)=>o,mt={toAttribute(o,t){switch(t){case Boolean:o=o?de:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Rt=(o,t)=>!oe(o,t),Bt={attribute:!0,type:String,converter:mt,reflect:!1,useDefault:!1,hasChanged:Rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Bt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ne(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:n}=ae(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){let d=s?.call(this);n?.call(this,a),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Bt}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;let t=le(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){let e=this.properties,i=[...re(e),...ce(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(ut(s))}else t!==void 0&&e.push(ut(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ot(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:mt).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:mt;this._$Em=s;let d=a.fromAttribute(e,n.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(t!==void 0){let a=this.constructor;if(s===!1&&(n=this[t]),i??(i=a.getPropertyOptions(t)),!((i.hasChanged??Rt)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i){let{wrapped:a}=n,d=this[s];a!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,n,d)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[W("elementProperties")]=new Map,E[W("finalized")]=new Map,he?.({ReactiveElement:E}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.1.2");var G=globalThis,Ht=o=>o,lt=G.trustedTypes,Dt=lt?lt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Kt="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+N,pe=`<${Gt}>`,U=document,J=()=>U.createComment(""),Q=o=>o===null||typeof o!="object"&&typeof o!="function",xt=Array.isArray,_e=o=>xt(o)||typeof o?.[Symbol.iterator]=="function",gt=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,jt=/>/g,P=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Vt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,$t=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),c=$t(1),X=$t(2),Fe=$t(3),O=Symbol.for("lit-noChange"),r=Symbol.for("lit-nothing"),Wt=new WeakMap,F=U.createTreeWalker(U,129);function Qt(o,t){if(!xt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dt!==void 0?Dt.createHTML(t):t}var ue=(o,t)=>{let e=o.length-1,i=[],s,n=t===2?"<svg>":t===3?"<math>":"",a=K;for(let d=0;d<e;d++){let l=o[d],p,g,_=-1,b=0;for(;b<l.length&&(a.lastIndex=b,g=a.exec(l),g!==null);)b=a.lastIndex,a===K?g[1]==="!--"?a=It:g[1]!==void 0?a=jt:g[2]!==void 0?(Jt.test(g[2])&&(s=RegExp("</"+g[2],"g")),a=P):g[3]!==void 0&&(a=P):a===P?g[0]===">"?(a=s??K,_=-1):g[1]===void 0?_=-2:(_=a.lastIndex-g[2].length,p=g[1],a=g[3]===void 0?P:g[3]==='"'?Vt:qt):a===Vt||a===qt?a=P:a===It||a===jt?a=K:(a=P,s=void 0);let u=a===P&&o[d+1].startsWith("/>")?" ":"";n+=a===K?l+pe:_>=0?(i.push(p),l.slice(0,_)+Kt+l.slice(_)+N+u):l+N+(_===-2?d:u)}return[Qt(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Y=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0,d=t.length-1,l=this.parts,[p,g]=ue(t,e);if(this.el=o.createElement(p,i),F.currentNode=this.el.content,e===2||e===3){let _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(s=F.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let _ of s.getAttributeNames())if(_.endsWith(Kt)){let b=g[a++],u=s.getAttribute(_).split(N),B=/([.?@])?(.*)/.exec(b);l.push({type:1,index:n,name:B[2],strings:u,ctor:B[1]==="."?bt:B[1]==="?"?yt:B[1]==="@"?vt:H}),s.removeAttribute(_)}else _.startsWith(N)&&(l.push({type:6,index:n}),s.removeAttribute(_));if(Jt.test(s.tagName)){let _=s.textContent.split(N),b=_.length-1;if(b>0){s.textContent=lt?lt.emptyScript:"";for(let u=0;u<b;u++)s.append(_[u],J()),F.nextNode(),l.push({type:2,index:++n});s.append(_[b],J())}}}else if(s.nodeType===8)if(s.data===Gt)l.push({type:2,index:n});else{let _=-1;for(;(_=s.data.indexOf(N,_+1))!==-1;)l.push({type:7,index:n}),_+=N.length-1}n++}}static createElement(t,e){let i=U.createElement("template");return i.innerHTML=t,i}};function R(o,t,e=o,i){if(t===O)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,n=Q(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=R(o,s._$AS(o,t.values),s,i)),t}var ft=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);F.currentNode=s;let n=F.nextNode(),a=0,d=0,l=i[0];for(;l!==void 0;){if(a===l.index){let p;l.type===2?p=new Z(n,n.nextSibling,this,t):l.type===1?p=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(p=new wt(n,this,t)),this._$AV.push(p),l=i[++d]}a!==l?.index&&(n=F.nextNode(),a++)}return F.currentNode=U,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Z=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=r,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),Q(t)?t===r||t==null||t===""?(this._$AH!==r&&this._$AR(),this._$AH=r):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_e(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==r&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Y.createElement(Qt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let n=new ft(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=Wt.get(t.strings);return e===void 0&&Wt.set(t.strings,e=new Y(t)),e}k(t){xt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new o(this.O(J()),this.O(J()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Ht(t).nextSibling;Ht(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=r,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=r}_$AI(t,e=this,i,s){let n=this.strings,a=!1;if(n===void 0)t=R(this,t,e,0),a=!Q(t)||t!==this._$AH&&t!==O,a&&(this._$AH=t);else{let d=t,l,p;for(t=n[0],l=0;l<n.length-1;l++)p=R(this,d[i+l],e,l),p===O&&(p=this._$AH[l]),a||(a=!Q(p)||p!==this._$AH[l]),p===r?t=r:t!==r&&(t+=(p??"")+n[l+1]),this._$AH[l]=p}a&&!s&&this.j(t)}j(t){t===r?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},bt=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===r?void 0:t}},yt=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==r)}},vt=class extends H{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??r)===O)return;let i=this._$AH,s=t===r&&i!==r||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==r&&(i===r||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},wt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}};var me=G.litHtmlPolyfillSupport;me?.(Y,Z),(G.litHtmlVersions??(G.litHtmlVersions=[])).push("3.3.3");var Yt=(o,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let n=e?.renderBefore??null;i._$litPart$=s=new Z(t.insertBefore(J(),n),n,void 0,e??{})}return s._$AI(o),s};var tt=globalThis,f=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Yt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};f._$litElement$=!0,f.finalized=!0,tt.litElementHydrateSupport?.({LitElement:f});var ge=tt.litElementPolyfillSupport;ge?.({LitElement:f});(tt.litElementVersions??(tt.litElementVersions=[])).push("4.2.2");var w=V`
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
  .title { font-size: calc(15px * var(--alp-fs, 1)); font-weight: 700; line-height: 1.2; }
  .subtitle { font-size: calc(12px * var(--alp-fs, 1)); font-weight: 500; color: var(--secondary-text-color); }
  .power {
    width: calc(40px * var(--alp-bs, 1)); height: calc(40px * var(--alp-bs, 1)); border-radius: 50%; border: none; cursor: pointer;
    display: grid; place-items: center;
    background: var(--secondary-background-color); color: var(--secondary-text-color);
    transition: background .18s, color .18s;
  }
  .power.on { background: rgba(var(--rgb-primary-color, 3,169,244), 0.18); color: var(--primary-color); }
  .bar-wrap { display: flex; flex-direction: column; gap: 6px; }
  .bar-top { display: flex; justify-content: space-between; font-size: calc(12px * var(--alp-fs, 1)); font-weight: 600; }
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
    min-height: calc(46px * var(--alp-bs, 1)); border-radius: 12px; cursor: pointer;
    border: 1px solid var(--divider-color);
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600;
    display: flex; align-items: center; justify-content: center; gap: 6px;
    padding: calc(8px * var(--alp-bs, 1)) calc(6px * var(--alp-bs, 1)); text-align: center; line-height: 1.15;
    flex-direction: column; min-width: 0; white-space: normal;
    overflow-wrap: anywhere; word-break: break-word; hyphens: auto;
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
  .metric .label { font-size: calc(11px * var(--alp-fs, 1)); font-weight: 600; text-transform: uppercase; letter-spacing: .04em; color: var(--secondary-text-color); }
  .metric .value { font-size: calc(20px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums; }
  .row { display: flex; align-items: center; gap: 10px; }
  .slider-row { display: flex; flex-direction: column; gap: 4px; }
  input[type="range"] {
    -webkit-appearance: none; appearance: none; width: 100%; margin: 0;
    background: transparent; cursor: pointer; height: calc(32px * var(--alp-bs, 1));
  }
  input[type="range"]::-webkit-slider-runnable-track {
    height: calc(18px * var(--alp-bs, 1)); border-radius: 999px;
    background: var(--card-background-color, #fff); border: 1px solid var(--divider-color);
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; appearance: none;
    width: calc(30px * var(--alp-bs, 1)); height: calc(30px * var(--alp-bs, 1));
    margin-top: calc(-7px * var(--alp-bs, 1)); border-radius: 50%;
    background: var(--primary-color); border: 4px solid var(--card-background-color, #fff);
    box-shadow: 0 1px 4px rgba(0,0,0,.28);
  }
  input[type="range"]::-moz-range-track {
    height: calc(18px * var(--alp-bs, 1)); border-radius: 999px;
    background: var(--card-background-color, #fff); border: 1px solid var(--divider-color);
  }
  input[type="range"]::-moz-range-thumb {
    width: calc(26px * var(--alp-bs, 1)); height: calc(26px * var(--alp-bs, 1));
    border-radius: 50%; background: var(--primary-color);
    border: 4px solid var(--card-background-color, #fff);
  }
  input[type="range"].heat::-webkit-slider-thumb { background: var(--alp-heat, #f4511e); }
  input[type="range"].heat::-moz-range-thumb { background: var(--alp-heat, #f4511e); }
  input[type="range"].water::-webkit-slider-thumb { background: var(--alp-water, #039be5); }
  input[type="range"].water::-moz-range-thumb { background: var(--alp-water, #039be5); }
  .dial-wrap { position: relative; margin: 0 auto; max-width: 260px; width: 100%; }
  .dial-wrap svg { width: 100%; display: block; touch-action: none; }
  .dial-wrap svg.interactive { cursor: pointer; }
  .dial-center {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: center; pointer-events: none;
  }
  .dial-center .mode-label { font-size: calc(12px * var(--alp-fs, 1)); font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--secondary-text-color); }
  .dial-center .target { font-size: calc(44px * var(--alp-fs, 1)); font-weight: 800; line-height: 1; font-variant-numeric: tabular-nums; }
  .dial-center .target sup { font-size: calc(16px * var(--alp-fs, 1)); vertical-align: super; }
  .dial-center .current { font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color); display: flex; align-items: center; gap: 4px; margin-top: 6px; }
  .select-row {
    position: relative; display: flex; align-items: center; gap: 10px;
    border: 1px solid var(--divider-color); border-radius: 12px; padding: calc(8px * var(--alp-bs, 1)) 12px;
    background: var(--secondary-background-color);
  }
  .select-row .lbl { flex: 1; font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; }
  .select-row select { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
  .dimmed { opacity: .45; pointer-events: none; }
  .section-title { font-size: calc(11px * var(--alp-fs, 1)); font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--secondary-text-color); }
  .warn { color: var(--error-color, #db4437); font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; }
  .stepper { display: flex; align-items: center; justify-content: space-between; gap: 8px;
    border: 1px solid var(--divider-color); border-radius: 12px; padding: 6px 8px; }
  .stepper button { width: calc(32px * var(--alp-bs, 1)); height: calc(32px * var(--alp-bs, 1)); border-radius: 8px; border: none; cursor: pointer;
    background: var(--secondary-background-color); color: var(--primary-text-color); font-size: calc(18px * var(--alp-fs, 1)); }
  .stepper .v { font-weight: 700; font-variant-numeric: tabular-nums; }

  :host([alp-theme="dark"]) ha-card {
    background: #1b1c20; color: #f2f3f5;
    --primary-text-color: #f2f3f5;
    --secondary-text-color: #a4a8b0;
    --secondary-background-color: #26282e;
    --divider-color: #34363d;
    --card-background-color: #1b1c20;
  }
  :host([alp-theme="light"]) ha-card {
    background: #ffffff; color: #16181d;
    --primary-text-color: #16181d;
    --secondary-text-color: #626873;
    --secondary-background-color: #f2f4f7;
    --divider-color: #e2e5ea;
    --card-background-color: #ffffff;
  }
  :host([alp-compact]) ha-card { padding: 10px; gap: 8px; }
  :host([alp-compact]) button.mode, :host([alp-compact]) button.plain { min-height: calc(38px * var(--alp-bs, 1)); font-size: calc(12px * var(--alp-fs, 1)); }
  .hero { display: flex; align-items: stretch; gap: 12px;
    border: 1px solid var(--divider-color); border-radius: 16px;
    background: var(--secondary-background-color); padding: 14px 10px; }
  .hero-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .hero-sep { width: 1px; background: var(--divider-color); }
  .hero-label { display: flex; align-items: center; gap: 6px; font-size: calc(11px * var(--alp-fs, 1)); font-weight: 700;
    text-transform: uppercase; letter-spacing: .05em; color: var(--secondary-text-color); }
  .hero-current { font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; font-variant-numeric: tabular-nums; color: var(--secondary-text-color); }
  .hero-target { font-size: calc(34px * var(--alp-fs, 1)); font-weight: 800; line-height: 1.05; font-variant-numeric: tabular-nums; }
  .hero-current.heat, .hero-target.heat { color: var(--alp-heat, #f4511e); }
  .hero-current.water, .hero-target.water { color: var(--alp-water, #039be5); }
  .swatches { display: flex; flex-wrap: wrap; gap: 10px; }
  .swatch { width: calc(40px * var(--alp-bs, 1)); height: calc(40px * var(--alp-bs, 1)); border-radius: 50%; cursor: pointer;
    border: 2px solid var(--divider-color); background: var(--secondary-background-color);
    display: grid; place-items: center; color: var(--secondary-text-color); }
  .swatch.active { box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 3,169,244), .35); border-color: transparent; }
  button.mode ha-icon, button.plain ha-icon, .power ha-icon, .swatch ha-icon {
    --mdc-icon-size: calc(20px * var(--alp-bs, 1)) !important;
  }

  /* --- mockup-aligned building blocks --- */
  .panel { border: 1px solid var(--divider-color); border-radius: 14px; padding: 12px;
    display: flex; flex-direction: column; gap: 10px; }
  .field { background: var(--secondary-background-color); border-radius: 12px; padding: 8px 10px;
    display: flex; flex-direction: column; gap: 2px; }
  .field .flabel { font-size: calc(11px * var(--alp-fs, 1)); font-weight: 600; text-transform: uppercase;
    letter-spacing: .04em; color: var(--secondary-text-color); display: flex; align-items: center; gap: 4px; }
  .field input { border: none; background: transparent; color: var(--primary-text-color); width: 100%;
    font-size: calc(15px * var(--alp-fs, 1)); font-weight: 800; outline: none; font-variant-numeric: tabular-nums;
    font-family: inherit; }
  .tempstep { display: flex; align-items: center; gap: 8px; background: var(--secondary-background-color);
    border-radius: 12px; padding: calc(6px * var(--alp-bs, 1)) 10px; }
  .tempstep .lbl { flex: 1; min-width: 0; font-size: calc(12px * var(--alp-fs, 1)); font-weight: 600;
    color: var(--secondary-text-color); line-height: 1.2; }
  .tempstep .v { flex-shrink: 0; font-size: calc(17px * var(--alp-fs, 1)); font-weight: 800;
    font-variant-numeric: tabular-nums; }
  .tempstep .v.heat { color: var(--alp-heat, #f4511e); }
  .tempstep .v.water { color: var(--alp-water, #039be5); }
  .tempstep .sub { font-size: calc(12px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color); }
  .stepbtn { flex-shrink: 0; width: calc(34px * var(--alp-bs, 1)); height: calc(34px * var(--alp-bs, 1));
    border-radius: 10px; border: 1px solid var(--divider-color); background: var(--card-background-color, #fff);
    color: var(--primary-text-color); font-size: calc(18px * var(--alp-fs, 1)); font-weight: 700;
    cursor: pointer; display: grid; place-items: center; }
  .stepbtn:active { transform: scale(.95); }
  .target-box { background: var(--secondary-background-color); border-radius: 16px; padding: 14px;
    display: flex; flex-direction: column; gap: 8px; }
  .target-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; }
  .target-head .k { font-size: calc(12px * var(--alp-fs, 1)); font-weight: 700; text-transform: uppercase;
    letter-spacing: .05em; color: var(--secondary-text-color); }
  .target-head .v { font-size: calc(30px * var(--alp-fs, 1)); font-weight: 800;
    font-variant-numeric: tabular-nums; color: var(--alp-heat, #f4511e); }
  .target-head .v small { font-size: calc(16px * var(--alp-fs, 1)); }
  .range-legend { display: flex; justify-content: space-between; font-size: calc(12px * var(--alp-fs, 1));
    font-weight: 700; color: var(--secondary-text-color); }
  .metric-grid.stacked { grid-template-columns: 1fr; }
  .metric-grid.horiz { grid-template-columns: none; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); }
  .metric-grid.horiz .metric { text-align: center; padding: 10px 8px; }
  .hero-current.big { font-size: calc(40px * var(--alp-fs, 1)); font-weight: 800; line-height: 1.05; }
`;var dt="alpicair-ui-settings",M="alpicair-ui-settings-changed",Zt={language:"auto",theme:"auto",accent:"",compact:!1,buttonScale:1,fontScale:1},x=null;function D(){if(x)return x;let o={};try{o=JSON.parse(window.localStorage.getItem(dt)||"{}")||{}}catch{o={}}return x={...Zt,...o},x}function Xt(o){x={...D(),...o};try{window.localStorage.setItem(dt,JSON.stringify(x))}catch{}window.dispatchEvent(new CustomEvent(M,{detail:x})),document.dispatchEvent(new CustomEvent(M,{detail:x}))}function te(){x={...Zt};try{window.localStorage.removeItem(dt)}catch{}window.dispatchEvent(new CustomEvent(M,{detail:x})),document.dispatchEvent(new CustomEvent(M,{detail:x}))}function fe(o){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o||"");return t?[1,2,3].map(e=>parseInt(t[e],16)).join(","):null}function be(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var $=o=>class extends o{connectedCallback(){super.connectedCallback(),this._onUiSettings=()=>{x=null,this._applyUiSettings(),this.requestUpdate()},window.addEventListener(M,this._onUiSettings),document.addEventListener(M,this._onUiSettings),window.addEventListener("storage",this._onStorage=t=>{(!t.key||t.key===dt)&&this._onUiSettings()}),this._applyUiSettings()}disconnectedCallback(){window.removeEventListener(M,this._onUiSettings),document.removeEventListener(M,this._onUiSettings),window.removeEventListener("storage",this._onStorage),super.disconnectedCallback()}willUpdate(t){super.willUpdate&&super.willUpdate(t),this.isConnected&&this._applyUiSettings()}_applyUiSettings(){let t=D();this._uiSettings=t;let e=t.theme==="dark"||t.theme==="auto"&&be();if(t.theme==="auto"?this.removeAttribute("alp-theme"):this.setAttribute("alp-theme",e?"dark":"light"),t.compact?this.setAttribute("alp-compact",""):this.removeAttribute("alp-compact"),t.theme==="auto")this.style.removeProperty("--ha-card-background"),this.style.removeProperty("--card-background-color");else{let a=e?"#1b1c20":"#ffffff";this.style.setProperty("--ha-card-background",a),this.style.setProperty("--card-background-color",a)}let i=this._config||{},s=Number(i.button_scale??t.buttonScale??1)||1,n=Number(i.font_scale??t.fontScale??1)||1;if(this.style.setProperty("--alp-bs",String(s)),this.style.setProperty("--alp-fs",String(n)),t.accent){this.style.setProperty("--alp-accent",t.accent),this.style.setProperty("--primary-color",t.accent);let a=fe(t.accent);a&&this.style.setProperty("--rgb-primary-color",a)}else this.style.removeProperty("--alp-accent"),this.style.removeProperty("--primary-color"),this.style.removeProperty("--rgb-primary-color")}};var kt={ui_settings:"Interface settings",language:"Language",theme:"Theme",light:"Light",dark:"Dark",accent_color:"Accent color",button_size:"Button size",font_size:"Font size",compact:"Compact mode",reset:"Reset",applies_to_all:"Applies to all AlpicAir cards in this browser",current:"Current",target:"Target",boiler:"Boiler",recuperator:"Recuperator",air_conditioner:"Air conditioner",heat_pump:"Heat pump",sensors:"Temperatures",device_settings:"Device settings",settings:"Settings",back:"Back",recuperation:"Recuperation",fan_speed:"Fan speed",supply:"Supply",exhaust:"Exhaust",off:"Off",on:"On",building_protection:"Building protection",economy:"Economy",comfort:"Comfort",boost:"Boost",outdoor:"Outdoor",indoor:"Indoor",supply_air:"Supply air",extract_air:"Extract air",night_cooling:"Night cooling",night_cooling_schedule:"Night cooling schedule",power:"Power",running:"Running",standby:"Standby",target_temperature:"Target temperature",heat:"Heat",cool:"Cool",dry:"Dry",fan_only:"Fan",auto:"Auto",low:"Low",medium:"Medium",high:"High",full_swing:"Full swing",fixed:"Fixed",swing_vertical:"Vertical swing",swing_horizontal:"Horizontal swing",floor:"Floor",water:"Hot water",heating:"Heating",hot_water:"Hot water",heating_water:"Heating + Water",quick_heat:"Quick heat",quiet_mode:"Quiet",disinfection:"Disinfection",entity_not_found:"Entity not found",date_time:"Date & time",date:"Date",time:"Time",sync_time:"Sync with Home Assistant",start_time:"Start",stop_time:"Stop",nc_extract_start:"Extract air temp. to start",nc_extract_stop:"Extract air temp. to stop",nc_outdoor_stop:"Outdoor temp. to stop",nc_supply_setpoint:"Supply air setpoint"},ye={ui_settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",language:"\u042F\u0437\u044B\u043A",theme:"\u0422\u0435\u043C\u0430",light:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F",dark:"\u0422\u0451\u043C\u043D\u0430\u044F",accent_color:"\u0410\u043A\u0446\u0435\u043D\u0442\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",button_size:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043E\u043A",font_size:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",compact:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",reset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",applies_to_all:"\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u043E \u0432\u0441\u0435\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u043C AlpicAir \u0432 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435",current:"\u0421\u0435\u0439\u0447\u0430\u0441",target:"\u0417\u0430\u0434\u0430\u043D\u043E",boiler:"\u0411\u043E\u0439\u043B\u0435\u0440",recuperator:"\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0442\u043E\u0440",air_conditioner:"\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440",heat_pump:"\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u043D\u0430\u0441\u043E\u0441",sensors:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",device_settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",back:"\u041D\u0430\u0437\u0430\u0434",recuperation:"\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0446\u0438\u044F",fan_speed:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u0430",supply:"\u041F\u0440\u0438\u0442\u043E\u043A",exhaust:"\u0412\u044B\u0442\u044F\u0436\u043A\u0430",off:"\u0412\u044B\u043A\u043B",on:"\u0412\u043A\u043B",building_protection:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0437\u0434\u0430\u043D\u0438\u044F",economy:"\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u044B\u0439",comfort:"\u041A\u043E\u043C\u0444\u043E\u0440\u0442",boost:"Boost",outdoor:"\u0423\u043B\u0438\u0446\u0430",indoor:"\u0412 \u0434\u043E\u043C\u0435",supply_air:"\u041F\u0440\u0438\u0442\u043E\u0447\u043D\u044B\u0439 \u0432\u043E\u0437\u0434\u0443\u0445",extract_air:"\u0412\u044B\u0442\u044F\u0436\u043D\u043E\u0439 \u0432\u043E\u0437\u0434\u0443\u0445",night_cooling:"\u041D\u043E\u0447\u043D\u043E\u0435 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",night_cooling_schedule:"\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u043E\u0447\u043D\u043E\u0433\u043E \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F",power:"\u041F\u0438\u0442\u0430\u043D\u0438\u0435",running:"\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442",standby:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",target_temperature:"\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",heat:"\u041E\u0431\u043E\u0433\u0440\u0435\u0432",cool:"\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",dry:"\u041E\u0441\u0443\u0448\u0435\u043D\u0438\u0435",fan_only:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F",auto:"\u0410\u0432\u0442\u043E",low:"\u041D\u0438\u0437\u043A\u0430\u044F",medium:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F",high:"\u0412\u044B\u0441\u043E\u043A\u0430\u044F",full_swing:"\u041A\u0430\u0447\u0430\u043D\u0438\u0435",fixed:"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E",swing_vertical:"\u0412\u0435\u0440\u0442. \u0436\u0430\u043B\u044E\u0437\u0438",swing_horizontal:"\u0413\u043E\u0440. \u0436\u0430\u043B\u044E\u0437\u0438",floor:"\u041F\u043E\u043B",water:"\u0412\u043E\u0434\u0430",heating:"\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435",hot_water:"\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u0432\u043E\u0434\u0430",heating_water:"\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435 + \u0432\u043E\u0434\u0430",quick_heat:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432",quiet_mode:"\u0422\u0438\u0445\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",disinfection:"\u0414\u0435\u0437\u0438\u043D\u0444\u0435\u043A\u0446\u0438\u044F",entity_not_found:"\u041E\u0431\u044A\u0435\u043A\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",date_time:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",date:"\u0414\u0430\u0442\u0430",time:"\u0412\u0440\u0435\u043C\u044F",sync_time:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441 Home Assistant",start_time:"\u0421\u0442\u0430\u0440\u0442",stop_time:"\u0421\u0442\u043E\u043F",nc_extract_start:"\u0422. \u0432\u044B\u0442\u044F\u0436\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u0440\u0442\u0430",nc_extract_stop:"\u0422. \u0432\u044B\u0442\u044F\u0436\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u043E\u043F\u0430",nc_outdoor_stop:"\u0422. \u0443\u043B\u0438\u0446\u044B \u0434\u043B\u044F \u0441\u0442\u043E\u043F\u0430",nc_supply_setpoint:"\u0423\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u0440\u0438\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0430"},ve={ui_settings:"Saskarnes iestat\u012Bjumi",language:"Valoda",theme:"T\u0113ma",light:"Gai\u0161\u0101",dark:"Tum\u0161\u0101",accent_color:"Akcenta kr\u0101sa",button_size:"Pogu izm\u0113rs",font_size:"Fonta izm\u0113rs",compact:"Kompaktais re\u017E\u012Bms",reset:"Atiestat\u012Bt",applies_to_all:"Attiecas uz vis\u0101m AlpicAir kart\u0113m \u0161aj\u0101 p\u0101rl\u016Bk\u0101",current:"Pa\u0161laik",target:"Uzst\u0101d\u012Bts",boiler:"Boileris",recuperator:"Rekuperators",air_conditioner:"Kondicionieris",heat_pump:"Siltums\u016Bknis",sensors:"Temperat\u016Bras",device_settings:"Ier\u012Bces iestat\u012Bjumi",settings:"Iestat\u012Bjumi",back:"Atpaka\u013C",recuperation:"Rekuper\u0101cija",fan_speed:"Ventilatora \u0101trums",supply:"Piepl\u016Bde",exhaust:"Nos\u016Bce",off:"Izsl\u0113gts",on:"Iesl\u0113gts",building_protection:"\u0112kas aizsardz\u012Bba",economy:"Ekonomiskais",comfort:"Norm\u0101lais",boost:"Boost",outdoor:"\u0100r\u0101",indoor:"Iek\u0161telp\u0101s",supply_air:"Piepl\u016Bdes gaiss",extract_air:"Nos\u016Bces gaiss",night_cooling:"Nakts dzes\u0113\u0161ana",night_cooling_schedule:"Nakts dzes\u0113\u0161anas grafiks",power:"Baro\u0161ana",running:"Darbojas",standby:"Gaidst\u0101ve",target_temperature:"M\u0113r\u0137a temperat\u016Bra",heat:"Sild\u012B\u0161ana",cool:"Dzes\u0113\u0161ana",dry:"Sausin\u0101\u0161ana",fan_only:"Ventil\u0101cija",auto:"Auto",low:"Zems",medium:"Vid\u0113js",high:"Augsts",full_swing:"\u0160\u016Bpo\u0161ana",fixed:"Fiks\u0113ts",swing_vertical:"Vert. \u017Eal\u016Bzijas",swing_horizontal:"Horiz. \u017Eal\u016Bzijas",floor:"Gr\u012Bda",water:"\u016Adens",heating:"Apkure",hot_water:"Karstais \u016Bdens",heating_water:"Apkure + \u016Bdens",quick_heat:"\u0100tr\u0101 sild\u012B\u0161ana",quiet_mode:"Klusais re\u017E\u012Bms",disinfection:"Dezinfekcija",entity_not_found:"Objekts nav atrasts",date_time:"Datums un laiks",date:"Datums",time:"Laiks",sync_time:"Sinhroniz\u0113t ar Home Assistant",start_time:"S\u0101kums",stop_time:"Beigas",nc_extract_start:"Nos\u016Bces temp. startam",nc_extract_stop:"Nos\u016Bces temp. aptur\u0113\u0161anai",nc_outdoor_stop:"\u0100ra temp. aptur\u0113\u0161anai",nc_supply_setpoint:"Piepl\u016Bdes gaisa uzst\u0101d\u012Bjums"},we={en:kt,ru:ye,lv:ve};function k(o,t,e){let i=D().language,s=t&&t.language&&t.language!=="auto"?t.language:i&&i!=="auto"?i:o&&o.language?o.language.split("-")[0]:"en";return(we[s]||kt)[e]??kt[e]??e}function I(o,t,e={}){let i=new Event(t,{bubbles:!0,composed:!0,cancelable:!1});return i.detail=e,o.dispatchEvent(i),i}function z(o,t,e,i){if(!(!i||i.action==="none"))switch(i.action){case"more-info":{let s=i.entity||e;s&&I(o,"hass-more-info",{entityId:s});break}case"toggle":{let s=i.entity||e;s&&t.callService("homeassistant","toggle",{entity_id:s});break}case"navigate":i.navigation_path&&(history.pushState(null,"",i.navigation_path),I(window,"location-changed",{}));break;case"url":i.url_path&&window.open(i.url_path,i.new_tab===!1?"_self":"_blank");break;case"call-service":case"perform-action":{let s=i.perform_action||i.service;if(!s||!s.includes("."))return;let[n,a]=s.split(".",2);t.callService(n,a,i.data||i.service_data||{},i.target||void 0);break}case"fire-dom-event":I(o,"ll-custom",i);break;default:break}}function ht(o,t,e=500){let i=null,s=!1,n=l=>{l.button!==void 0&&l.button!==0&&l.pointerType==="mouse"||(s=!1,i=window.setTimeout(()=>{s=!0,navigator.vibrate&&navigator.vibrate(30),t()},e))},a=l=>{i&&(clearTimeout(i),i=null),s||(l.preventDefault(),o()),s=!1},d=()=>{i&&(clearTimeout(i),i=null),s=!1};return{"@pointerdown":n,"@pointerup":a,"@pointerleave":d,"@pointercancel":d,"@contextmenu":l=>l.preventDefault()}}var y=class extends f{constructor(){super(...arguments);m(this,"_labels",{entity:"Entity (climate)",name:"Name",icon:"Icon",language:"Language",show_power:"Power button",show_dial:"Temperature dial",show_temp_slider:"Target temperature slider",show_modes:"Mode buttons",show_fan:"Fan speed selector",show_swing_vertical:"Vertical swing selector",show_swing_horizontal:"Horizontal swing selector",show_current_temperature:"Current temperature",default_hvac_mode:"HVAC mode on power on",button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",dial_size:"Dial size, px"});m(this,"computeLabel",e=>this._labels[e.name]||e.label||e.name)}setConfig(e){this._config={...e}}get schema(){return[]}_valueChanged(e){let i=e.detail.value;I(this,"config-changed",{config:i})}render(){return!this.hass||!this._config?r:c`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this.schema}
        .computeLabel=${this.computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>`}};m(y,"properties",{hass:{},_config:{state:!0}}),m(y,"styles",V`
    :host { display: block; }
    ha-form { display: block; }
  `);var v=o=>({type:"grid",name:"",schema:o.map(t=>({name:t,selector:{boolean:{}}}))}),h=(o,t)=>({name:o,selector:{entity:t?{domain:t}:{}}}),A={name:"language",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto (Home Assistant)"},{value:"en",label:"English"},{value:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{value:"lv",label:"Latvie\u0161u"}]}}},S={type:"grid",name:"",schema:[{name:"button_scale",selector:{number:{min:.8,max:2,step:.05,mode:"slider"}}},{name:"font_scale",selector:{number:{min:.8,max:2,step:.05,mode:"slider"}}}]};var St=class extends y{constructor(){super(...arguments);m(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",mode_entity:"Mode entity (select / fan / climate)",power_entity:"Power entity (switch / fan)",recuperation_entity:"Recuperation efficiency sensor (%)",fan_speed_entity:"Fan speed sensor (%)",default_mode:"Mode on power on",show_power:"Power button",show_recuperation:"Recuperation bar",show_fan_speed:"Fan speed bar",show_building_protection:"Button: building protection",show_economy:"Button: economy",show_comfort:"Button: comfort",show_boost:"Button: boost",show_settings_button:"Settings button",settings_button_label:"Settings button label",settings_icon:"Settings button icon",settings_entity:"Settings button target entity",hold_time:"Long press duration (ms)",tap_action:"Short press action",hold_action:"Long press action",option_building_protection:"Option: building protection",option_economy:"Option: economy",option_comfort:"Option: comfort",option_boost:"Option: boost"})}get _entityOptions(){let e=this._config?.mode_entity,i=e&&this.hass?.states?.[e];if(!i)return[];let s=i.attributes||{};return s.options||s.preset_modes||s.hvac_modes||[]}_optionField(e){return{name:e,selector:{select:{mode:"dropdown",custom_value:!0,options:this._entityOptions}}}}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},A,h("mode_entity",["select","input_select","fan","climate"]),h("power_entity",["switch","fan","input_boolean","climate"]),{type:"grid",name:"",schema:[h("recuperation_entity",["sensor","number","input_number"]),h("fan_speed_entity",["sensor","number","input_number"])]},{type:"grid",name:"",schema:[this._optionField("option_building_protection"),this._optionField("option_economy"),this._optionField("option_comfort"),this._optionField("option_boost")]},{name:"default_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["building_protection","economy","comfort","boost"]}}},v(["show_power","show_recuperation","show_fan_speed","show_building_protection","show_economy","show_comfort","show_boost","show_settings_button"]),{type:"grid",name:"",schema:[{name:"settings_button_label",selector:{text:{}}},{name:"settings_icon",selector:{icon:{}}}]},h("settings_entity"),{name:"hold_time",selector:{number:{min:200,max:2e3,step:50,mode:"box",unit_of_measurement:"ms"}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},S]}};customElements.define("alpicair-recuperator-card-editor",St);var pt=[{id:"building_protection",icon:"mdi:shield-check",cfg:"show_building_protection",kw:["building","protect","\u0437\u0430\u0449\u0438\u0442","\u0437\u0434\u0430\u043D","aizsardz","\u0113kas","ekas"]},{id:"economy",icon:"mdi:leaf",cfg:"show_economy",kw:["eco","econom","\u044D\u043A\u043E\u043D\u043E\u043C","ekonom"]},{id:"comfort",icon:"mdi:sofa",cfg:"show_comfort",kw:["comfort","normal","\u043A\u043E\u043C\u0444\u043E\u0440\u0442","\u043D\u043E\u0440\u043C\u0430\u043B","norm\u0101l","normal"]},{id:"boost",icon:"mdi:rocket-launch",cfg:"show_boost",tone:"boost",kw:["boost","intens","\u0438\u043D\u0442\u0435\u043D\u0441","\u0442\u0443\u0440\u0431\u043E","turbo","max","\u043C\u0430\u043A\u0441","\u043E\u0431\u0434\u0443\u0432"]}],At=o=>String(o??"").trim().toLowerCase(),et=class extends $(f){static getConfigElement(){return document.createElement("alpicair-recuperator-card-editor")}static getStubConfig(){return{type:"custom:alpicair-recuperator-card",mode_entity:"",power_entity:""}}setConfig(t){this._config={show_power:!0,show_recuperation:!0,show_fan_speed:!0,show_building_protection:!0,show_economy:!0,show_comfort:!0,show_boost:!0,show_settings_button:!0,settings_button_label:"",settings_icon:"mdi:cog",hold_time:500,tap_action:{action:"more-info"},hold_action:{action:"none"},language:"auto",...t}}getCardSize(){return 5}_t(t){return k(this.hass,this._config,t)}_num(t){let e=t&&this.hass.states[t],i=e?Number(e.state):NaN;return Number.isFinite(i)?i:null}get _stateObj(){return this._config.mode_entity&&this.hass.states[this._config.mode_entity]||null}get _options(){let t=this._stateObj;if(!t)return[];let e=t.attributes||{};return e.options||e.preset_modes||e.hvac_modes||[]}get _mode(){let t=this._stateObj;return t?t.state:null}_optionFor(t){let e=this._config[`option_${t}`];if(e)return e;let i=this._options;if(!i.length)return t;let s=pt.find(a=>a.id===t);if(s){let a=i.find(d=>s.kw.some(l=>At(d).includes(l)));if(a)return a}let n=pt.findIndex(a=>a.id===t);return i[n]??t}_isActive(t){let e=At(this._mode);return e?e===At(this._optionFor(t))||e===t:!1}get _on(){if(this._config.power_entity){let t=this.hass.states[this._config.power_entity];return t?!["off","unavailable","unknown"].includes(t.state):!1}return this._mode&&this._mode!=="off"}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=this._optionFor(t),s=e.split(".")[0];s==="select"||s==="input_select"?this.hass.callService(s,"select_option",{entity_id:e,option:i}):s==="fan"?this.hass.callService("fan","set_preset_mode",{entity_id:e,preset_mode:i}):s==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:i})}_togglePower(){let t=this._config.power_entity;t?this.hass.callService("homeassistant","toggle",{entity_id:t}):this._config.mode_entity&&this._setMode(this._on?"off":this._config.default_mode||"comfort")}_down(t){t.pointerType==="mouse"&&t.button!==0||(this._held=!1,this._timer=window.setTimeout(()=>{this._held=!0,navigator.vibrate&&navigator.vibrate(30),z(this,this.hass,this._config.settings_entity||this._config.mode_entity,this._config.hold_action)},Number(this._config.hold_time)||500))}_up(t){this._timer&&(clearTimeout(this._timer),this._timer=null),this._held||(t.preventDefault(),z(this,this.hass,this._config.settings_entity||this._config.mode_entity,this._config.tap_action)),this._held=!1}_cancel(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._held=!1}render(){if(!this.hass||!this._config)return r;let t=this._on,e=this._mode,i=pt.find(d=>this._isActive(d.id))?.id||null,s=this._num(this._config.recuperation_entity),n=this._num(this._config.fan_speed_entity),a=pt.filter(d=>this._config[d.cfg]!==!1);return c`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon||"mdi:fan"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name||this._t("recuperator")}</div>
            <div class="subtitle">
              ${t?`${this._t("running")}${e?` \xB7 ${i?this._t(i):e}`:""}`:this._t("standby")}
            </div>
          </div>
          ${this._config.show_power?c`<button class="power ${t?"on":""}" aria-label=${this._t("power")}
                @click=${this._togglePower}><ha-icon icon="mdi:power"></ha-icon></button>`:r}
        </div>

        ${this._config.show_recuperation&&s!==null?this._bar(this._t("recuperation"),t?s:0,"perf"):r}
        ${this._config.show_fan_speed&&n!==null?this._bar(this._t("fan_speed"),t?n:0,i==="boost"?"boost":""):r}

        ${a.length?c`<div class="grid c2">
              ${a.map(d=>c`
                <button class="mode ${this._isActive(d.id)?"active":""} ${d.tone||""}"
                  @click=${()=>this._setMode(d.id)}>
                  <ha-icon icon=${d.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(d.id)}
                </button>`)}
            </div>`:r}

        ${this._config.show_settings_button?c`<button class="plain" style="width:100%"
              @pointerdown=${this._down} @pointerup=${this._up}
              @pointerleave=${this._cancel} @pointercancel=${this._cancel}
              @contextmenu=${d=>d.preventDefault()}>
              <ha-icon icon=${this._config.settings_icon||"mdi:cog"} style="--mdc-icon-size:18px"></ha-icon>
              ${this._config.settings_button_label||this._t("settings")}
            </button>`:r}
      </ha-card>`}_bar(t,e,i){let s=Math.max(0,Math.min(100,Number(e)||0));return c`
      <div class="bar-wrap">
        <div class="bar-top"><span>${t}</span><span class="val">${Math.round(s)}%</span></div>
        <div class="bar ${i}"><span style="width:${s}%"></span></div>
      </div>`}};m(et,"properties",{hass:{},_config:{state:!0}}),m(et,"styles",w);customElements.define("alpicair-recuperator-card",et);var Et=class extends y{get schema(){return[h("entity","climate"),{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},A,{name:"default_hvac_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["auto","heat_cool","cool","heat","dry","fan_only"]}}},v(["show_power","show_dial","show_temp_slider","show_modes","show_current_temperature","show_fan","show_swing_vertical","show_swing_horizontal"]),{name:"dial_size",selector:{number:{min:160,max:480,step:10,mode:"slider"}}},S]}};customElements.define("alpicair-air-conditioner-card-editor",Et);var xe={off:"mdi:power",fan_only:"mdi:fan",dry:"mdi:water-percent",cool:"mdi:snowflake",heat:"mdi:fire",heat_cool:"mdi:autorenew",auto:"mdi:autorenew"},$e={off:"off",fan_only:"fan_only",dry:"dry",cool:"cool",heat:"heat",heat_cool:"auto",auto:"auto"},L=215,T=290;function Ct(o,t,e,i){let s=(i-90)*Math.PI/180;return{x:o+e*Math.cos(s),y:t+e*Math.sin(s)}}function zt(o,t,e=80){let i=Ct(100,100,e,o),s=Ct(100,100,e,t);return`M ${i.x} ${i.y} A ${e} ${e} 0 ${t-o>180?1:0} 1 ${s.x} ${s.y}`}var it=class extends $(f){static getConfigElement(){return document.createElement("alpicair-air-conditioner-card-editor")}static getStubConfig(t){return{type:"custom:alpicair-air-conditioner-card",entity:Object.keys(t.states).find(i=>i.startsWith("climate."))||""}}setConfig(t){if(!t.entity||!t.entity.startsWith("climate."))throw new Error("An entity of domain `climate` is required");this._config={show_power:!0,show_dial:!0,show_modes:!0,show_fan:!0,show_swing_vertical:!0,show_swing_horizontal:!0,show_current_temperature:!0,show_temp_slider:!0,dial_size:260,language:"auto",...t}}getCardSize(){return 6}get _stateObj(){return this.hass&&this.hass.states[this._config.entity]}_t(t){return k(this.hass,this._config,t)}_modeLabel(t){return this._t($e[t]||t)||t}_call(t,e){this.hass.callService("climate",t,{entity_id:this._config.entity,...e})}_setTemp(t){this._pending=t,clearTimeout(this._debounce),this._debounce=setTimeout(()=>{this._call("set_temperature",{temperature:t}),this._pending=void 0},400)}_commitTemp(){if(clearTimeout(this._debounce),this._pending==null)return;let t=this._pending;this._pending=void 0,this._call("set_temperature",{temperature:t})}_dialDrag(t,e,i,s){let n=this._stateObj;if(!n||n.state==="off"||n.state==="unavailable")return;t.preventDefault();let a=t.currentTarget.getBoundingClientRect(),d=a.left+a.width/2,l=a.top+a.height/2,p=_=>{let b=Math.atan2(_.clientX-d,l-_.clientY)*180/Math.PI;b<0&&(b+=360);let u=b-L;u<0&&(u+=360),u>T&&(u=u-T>(360-T)/2?0:T);let B=e+u/T*(i-e),ee=Math.min(i,Math.max(e,Math.round(B/s)*s));this._pending=Number(ee.toFixed(2))},g=()=>{window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),this._commitTemp()};p(t),window.addEventListener("pointermove",p),window.addEventListener("pointerup",g),window.addEventListener("pointercancel",g)}_togglePower(){let t=this._stateObj;if(t.state==="off"){let e=this._config.default_hvac_mode||(t.attributes.hvac_modes||[]).find(i=>i!=="off")||"auto";this._call("set_hvac_mode",{hvac_mode:e})}else this._call("set_hvac_mode",{hvac_mode:"off"})}render(){if(!this.hass||!this._config)return r;let t=this._stateObj;if(!t)return c`<ha-card><div class="warn">${this._t("entity_not_found")}: ${this._config.entity}</div></ha-card>`;let e=t.attributes,i=t.state!=="off"&&t.state!=="unavailable",s=e.min_temp??16,n=e.max_temp??30,a=e.target_temp_step??.5,d=this._pending??e.temperature??s,l=Math.min(1,Math.max(0,(d-s)/(n-s))),p=L+l*T,g=Ct(100,100,80,p),_=(e.hvac_modes||[]).filter(u=>u!=="off"),b=Math.min(5,Math.max(2,_.length));return c`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon||"mdi:air-conditioner"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name||e.friendly_name||this._t("air_conditioner")}</div>
            <div class="subtitle">${i?this._modeLabel(t.state):this._t("off")}</div>
          </div>
          ${this._config.show_power?c`<button class="power ${i?"on":""}" title=${this._t("power")}
                aria-label=${this._t("power")} @click=${this._togglePower}>
                <ha-icon icon="mdi:power"></ha-icon></button>`:r}
        </div>

        ${this._config.show_dial?c`
            <div class="dial-wrap" style=${`max-width:${this._config.dial_size||260}px`}>
              <svg viewBox="0 0 200 200" class="dial ${i?"interactive":""}"
                @pointerdown=${u=>this._dialDrag(u,s,n,a)}>
                ${X`<path d=${zt(L,L+T)} fill="none" stroke="transparent" stroke-width="34" stroke-linecap="round" />`}
                ${X`<path d=${zt(L,L+T)} fill="none" stroke="var(--secondary-background-color)" stroke-width="9" stroke-linecap="round" />`}
                ${i?X`<path d=${zt(L,p)} fill="none" stroke="var(--primary-color)" stroke-width="9" stroke-linecap="round" />`:r}
                ${X`<circle cx=${g.x} cy=${g.y} r="13" fill="var(--card-background-color)" stroke=${i?"var(--primary-color)":"var(--disabled-text-color)"} stroke-width="3" />`}
              </svg>
              <div class="dial-center">
                <div class="mode-label">${i?this._modeLabel(t.state):this._t("off")}</div>
                <div class="target">${Number(d).toFixed(a<1?1:0)}<sup>°C</sup></div>
                ${this._config.show_current_temperature&&e.current_temperature!=null?c`<div class="current"><ha-icon icon="mdi:thermometer" style="--mdc-icon-size:15px"></ha-icon>${e.current_temperature} °C</div>`:r}
              </div>
            </div>
            ${this._config.show_temp_slider===!1?r:c`<input type="range" min=${s} max=${n} step=${a} .value=${String(d)}
                  aria-label=${this._t("target_temperature")}
                  @input=${u=>this._setTemp(Number(u.target.value))} ?disabled=${!i} />`}`:r}

        ${this._config.show_modes&&_.length?c`<div class="grid c${b}">
              ${_.map(u=>c`
                <button class="mode ${i&&t.state===u?"active":""}"
                  title=${this._modeLabel(u)} aria-label=${this._modeLabel(u)}
                  @click=${()=>this._call("set_hvac_mode",{hvac_mode:u})}>
                  <ha-icon icon=${xe[u]||"mdi:thermostat"}></ha-icon>
                </button>`)}
            </div>`:r}

        <div class="${i?"":"dimmed"}" style="display:flex;flex-direction:column;gap:8px;">
          ${this._config.show_fan&&e.fan_modes?this._select("mdi:fan",e.fan_mode,e.fan_modes,u=>this._call("set_fan_mode",{fan_mode:u})):r}
          ${this._config.show_swing_vertical&&e.swing_modes?this._select("mdi:arrow-up-down",e.swing_mode,e.swing_modes,u=>this._call("set_swing_mode",{swing_mode:u})):r}
          ${this._config.show_swing_horizontal&&e.swing_horizontal_modes?this._select("mdi:arrow-left-right",e.swing_horizontal_mode,e.swing_horizontal_modes,u=>this._call("set_swing_horizontal_mode",{swing_horizontal_mode:u})):r}
        </div>
      </ha-card>
    `}_select(t,e,i,s){return c`
      <label class="select-row">
        <ha-icon icon=${t} style="--mdc-icon-size:18px;color:var(--secondary-text-color)"></ha-icon>
        <span class="lbl">${this._t(String(e))||e}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:18px;color:var(--secondary-text-color)"></ha-icon>
        <select .value=${e??""} @change=${n=>s(n.target.value)}>
          ${i.map(n=>c`<option value=${n} ?selected=${n===e}>${this._t(n)||n}</option>`)}
        </select>
      </label>`}};m(it,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),m(it,"styles",w);customElements.define("alpicair-air-conditioner-card",it);var Nt=class extends y{constructor(){super(...arguments);m(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",power_entity:"Power entity",floor_current_entity:"Floor temperature sensor",floor_target_entity:"Floor target (number / input_number)",water_current_entity:"Boiler temperature sensor",water_target_entity:"Boiler target (number / input_number)",mode_entity:"Mode entity (select)",option_heating:"Option: heating",option_hot_water:"Option: hot water",option_heating_water:"Option: heating + water",quick_heat_entity:"Quick heat entity (switch)",quiet_mode_entity:"Quiet mode entity (switch)",disinfection_entity:"Disinfection entity (switch)",show_power:"Power button",show_hero:"Large temperature block",show_floor:"Floor temperature",show_water:"Boiler temperature",show_modes:"Mode buttons",show_quick_heat:"Button: quick heat",show_quiet_mode:"Button: quiet mode",show_disinfection:"Button: disinfection"})}get _options(){let e=this._config&&this.hass&&this.hass.states[this._config.mode_entity];return e&&e.attributes&&e.attributes.options||[]}_optionField(e){let i=this._options;return i.length?{name:e,selector:{select:{mode:"dropdown",options:i}}}:{name:e,selector:{text:{}}}}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},A,h("power_entity",["switch","input_boolean","climate"]),{type:"grid",name:"",schema:[h("floor_current_entity",["sensor","number","input_number"]),h("floor_target_entity",["number","input_number","climate"])]},{type:"grid",name:"",schema:[h("water_current_entity",["sensor","number","input_number"]),h("water_target_entity",["number","input_number","water_heater","climate"])]},h("mode_entity",["select","input_select","climate"]),{type:"grid",name:"",schema:[this._optionField("option_heating"),this._optionField("option_hot_water"),this._optionField("option_heating_water")]},{type:"grid",name:"",schema:[h("quick_heat_entity",["switch","input_boolean","script"]),h("quiet_mode_entity",["switch","input_boolean"]),h("disinfection_entity",["switch","input_boolean","script"])]},v(["show_power","show_hero","show_floor","show_water","show_modes","show_quick_heat","show_quiet_mode","show_disinfection"]),S]}};customElements.define("alpicair-heat-pump-card-editor",Nt);var st=class extends $(f){static getConfigElement(){return document.createElement("alpicair-heat-pump-card-editor")}static getStubConfig(){return{type:"custom:alpicair-heat-pump-card"}}setConfig(t){this._config={show_power:!0,show_hero:!0,show_floor:!0,show_water:!0,show_modes:!0,show_quick_heat:!0,show_quiet_mode:!0,show_disinfection:!0,language:"auto",...t},this._pending={}}getCardSize(){return 6}_t(t){return k(this.hass,this._config,t)}_st(t){return t&&this.hass.states[t]}_num(t){let e=this._st(t);if(!e)return null;let i=Number(e.state);return Number.isFinite(i)?i:null}_target(t){if(this._pending[t]!=null)return this._pending[t];let e=this._st(t);if(!e)return null;if(t.startsWith("climate.")||t.startsWith("water_heater.")){let s=Number(e.attributes.temperature);return Number.isFinite(s)?s:null}let i=Number(e.state);return Number.isFinite(i)?i:null}_limits(t,e){let i=this._st(t),s=i&&i.attributes||{};return{min:s.min??s.min_temp??e.min,max:s.max??s.max_temp??e.max,step:s.step??s.target_temp_step??e.step}}_setTarget(t,e){t&&(this._pending={...this._pending,[t]:e},clearTimeout(this._d),this._d=setTimeout(()=>{let i=t.split(".")[0];i==="number"||i==="input_number"?this.hass.callService(i,"set_value",{entity_id:t,value:e}):i==="water_heater"?this.hass.callService("water_heater","set_temperature",{entity_id:t,temperature:e}):this.hass.callService("climate","set_temperature",{entity_id:t,temperature:e}),this._pending={}},500))}_toggle(t){t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_isOn(t){let e=this._st(t);return e?!["off","unavailable","unknown"].includes(e.state):!1}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=e.split(".")[0];i==="select"||i==="input_select"?this.hass.callService(i,"select_option",{entity_id:e,option:this._optionFor(t)}):i==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:this._optionFor(t)})}_optionFor(t){return this._config[`option_${t}`]||t}_isMode(t){let e=this._st(this._config.mode_entity);return!!e&&e.state===this._optionFor(t)}render(){if(!this.hass||!this._config)return r;let t=this._config,e=t.power_entity,i=e?this._isOn(e):!0,s=this._st(t.mode_entity),n=[{id:"heating",icon:"mdi:radiator"},{id:"hot_water",icon:"mdi:water-boiler"},{id:"heating_water",icon:"mdi:home-thermometer"}],a={label:this._t("floor"),icon:"mdi:heating-coil",current:this._num(t.floor_current_entity),targetId:t.floor_target_entity,target:this._target(t.floor_target_entity),tone:"heat",limits:this._limits(t.floor_target_entity,{min:15,max:35,step:.5})},d={label:this._t("hot_water"),icon:"mdi:water-thermometer",current:this._num(t.water_current_entity),targetId:t.water_target_entity,target:this._target(t.water_target_entity),tone:"water",limits:this._limits(t.water_target_entity,{min:30,max:65,step:1})},l=[t.show_floor!==!1?a:null,t.show_water!==!1?d:null].filter(Boolean);return c`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${t.icon||"mdi:heat-pump"}></ha-icon></div>
          <div class="titles">
            <div class="title">${t.name||this._t("heat_pump")}</div>
            <div class="subtitle">${i?s?s.state:this._t("running"):this._t("off")}</div>
          </div>
          ${t.show_power&&e?c`<button class="power ${i?"on":""}" aria-label=${this._t("power")}
                @click=${()=>this._toggle(e)}><ha-icon icon="mdi:power"></ha-icon></button>`:r}
        </div>

        <div class="${i?"":"dimmed"}" style="display:flex;flex-direction:column;gap:14px;">
          ${t.show_hero!==!1&&l.length?this._hero(l):r}
          ${l.filter(p=>p.targetId).map(p=>this._stepRow(p))}

          ${t.show_modes&&t.mode_entity?c`<div class="grid c3">
                ${n.map(p=>c`
                  <button class="mode ${this._isMode(p.id)?"active":""}"
                    @click=${()=>this._setMode(p.id)}>
                    <ha-icon icon=${p.icon} style="--mdc-icon-size:22px"></ha-icon>${this._t(p.id)}
                  </button>`)}
              </div>`:r}

          ${this._quickRow()}
        </div>
      </ha-card>`}_hero(t){return c`<div class="hero">
      ${t.map((e,i)=>c`
        ${i>0?c`<div class="hero-sep"></div>`:r}
        <div class="hero-col">
          <div class="hero-label"><ha-icon icon=${e.icon} style="--mdc-icon-size:18px"></ha-icon>${e.label}</div>
          <div class="hero-current big ${e.tone}">${e.current!=null?`${e.current.toFixed(1)}\xB0`:"\u2014"}</div>
        </div>`)}
    </div>`}_stepRow(t){let{min:e,max:i,step:s}=t.limits,n=Number(s)||.5,a=t.target??Number(e),d=n<1?1:0,l=p=>Math.min(Number(i),Math.max(Number(e),Math.round(p*10)/10));return c`
      <div class="tempstep">
        <span class="lbl" style="display:flex;align-items:center;gap:6px">
          <ha-icon icon=${t.icon} style="--mdc-icon-size:18px"></ha-icon>${t.label}
        </span>
        <button class="stepbtn" aria-label="−"
          @click=${()=>this._setTarget(t.targetId,l(a-n))}>−</button>
        <span class="v ${t.tone}">${Number(a).toFixed(d)}°</span>
        <button class="stepbtn" aria-label="+"
          @click=${()=>this._setTarget(t.targetId,l(a+n))}>+</button>
      </div>`}_quickRow(){let t=[{cfg:"show_quick_heat",entity:this._config.quick_heat_entity,icon:"mdi:flash",key:"quick_heat",tone:"boost"},{cfg:"show_quiet_mode",entity:this._config.quiet_mode_entity,icon:"mdi:volume-off",key:"quiet_mode"},{cfg:"show_disinfection",entity:this._config.disinfection_entity,icon:"mdi:shield-sun",key:"disinfection"}].filter(e=>this._config[e.cfg]!==!1&&e.entity);return t.length?c`<div class="grid c3">
      ${t.map(e=>c`
        <button class="mode ${this._isOn(e.entity)?`active ${e.tone||""}`:""}"
          @click=${()=>this._toggle(e.entity)}>
          <ha-icon icon=${e.icon} style="--mdc-icon-size:22px"></ha-icon>${this._t(e.key)}
        </button>`)}
    </div>`:r}};m(st,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),m(st,"styles",w);customElements.define("alpicair-heat-pump-card",st);var Mt=class extends y{constructor(){super(...arguments);m(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",outdoor_entity:"Outdoor temperature",indoor_entity:"Indoor temperature",supply_entity:"Supply air temperature",extract_entity:"Extract air temperature",target_entity:"Target temperature entity",show_target_slider:"Target temperature slider",min_temp:"Minimum",max_temp:"Maximum",step:"Step"})}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},A,{type:"grid",name:"",schema:[h("outdoor_entity",["sensor"]),h("indoor_entity",["sensor"]),h("supply_entity",["sensor"]),h("extract_entity",["sensor"])]},h("target_entity",["climate","number","input_number"]),v(["show_target_slider"]),{type:"grid",name:"",schema:[{name:"min_temp",selector:{number:{min:0,max:40,step:1,mode:"box"}}},{name:"max_temp",selector:{number:{min:0,max:60,step:1,mode:"box"}}},{name:"step",selector:{number:{min:.1,max:5,step:.1,mode:"box"}}}]},S]}};customElements.define("alpicair-sensors-card-editor",Mt);var ot=class extends $(f){static getConfigElement(){return document.createElement("alpicair-sensors-card-editor")}static getStubConfig(){return{type:"custom:alpicair-sensors-card"}}setConfig(t){this._config={show_target_slider:!0,show_target_steppers:!0,language:"auto",min_temp:15,max_temp:30,step:.5,...t}}getCardSize(){return 4}_t(t){return k(this.hass,this._config,t)}_metric(t,e){let i=t&&this.hass.states[t];if(!i)return r;let s=i.attributes.unit_of_measurement||"\xB0C";return c`<div class="metric">
      <div class="label">${e}</div>
      <div class="value">${i.state} <span style="font-size:13px">${s}</span></div>
    </div>`}_setTarget(t){let e=this._config.target_entity;if(!e)return;let i=e.split(".")[0];i==="climate"?this.hass.callService("climate","set_temperature",{entity_id:e,temperature:t}):this.hass.callService(i,"set_value",{entity_id:e,value:t})}_clamp(t){let e=Number(this._config.min_temp),i=Number(this._config.max_temp);return Math.min(i,Math.max(e,Math.round(t*10)/10))}render(){if(!this.hass||!this._config)return r;let t=this._config,e=t.target_entity&&this.hass.states[t.target_entity],i=e?Number(e.attributes.temperature??e.state):null,s=Number(t.step)||.5;return c`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${t.icon||"mdi:thermometer"}></ha-icon></div>
          <div class="titles">
            <div class="title">${t.name||this._t("sensors")}</div>
          </div>
        </div>

        <div class="metric-grid horiz">
          ${this._metric(t.outdoor_entity,this._t("outdoor"))}
          ${this._metric(t.indoor_entity,this._t("indoor"))}
          ${this._metric(t.supply_entity,this._t("supply_air"))}
          ${this._metric(t.extract_entity,this._t("extract_air"))}
        </div>

        ${i!==null&&Number.isFinite(i)?c`<div class="target-box">
              <div class="target-head">
                <span class="k">${this._t("target_temperature")}</span>
                <span class="v">${i.toFixed(1)}<small>°C</small></span>
              </div>

              ${t.show_target_steppers!==!1?c`<div class="tempstep">
                    <span class="lbl">${this._t("target_temperature")}</span>
                    <button class="stepbtn" aria-label="−"
                      @click=${()=>this._setTarget(this._clamp(i-s))}>−</button>
                    <span class="v heat">${i.toFixed(1)}°</span>
                    <button class="stepbtn" aria-label="+"
                      @click=${()=>this._setTarget(this._clamp(i+s))}>+</button>
                  </div>`:r}

              ${t.show_target_slider!==!1?c`
                    <input class="heat" type="range" min=${t.min_temp} max=${t.max_temp}
                      step=${s} .value=${String(i)}
                      aria-label=${this._t("target_temperature")}
                      @change=${n=>this._setTarget(Number(n.target.value))} />
                    <div class="range-legend"><span>${t.min_temp}°</span><span>${t.max_temp}°</span></div>`:r}
            </div>`:r}
      </ha-card>`}};m(ot,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),m(ot,"styles",w);customElements.define("alpicair-sensors-card",ot);var Tt=class extends y{constructor(){super(...arguments);m(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",show_night_cooling:"Section: night cooling",show_fan_speeds:"Section: fan speeds",show_date_time:"Section: date & time",night_cooling_entity:"Night cooling switch",nc_start_time_entity:"Start time",nc_stop_time_entity:"Stop time",nc_extract_start_entity:"Extract air temp. to start",nc_extract_stop_entity:"Extract air temp. to stop",nc_outdoor_stop_entity:"Outdoor temp. to stop",nc_supply_setpoint_entity:"Supply air setpoint",bp_supply_entity:"Building protection \xB7 supply",bp_exhaust_entity:"Building protection \xB7 exhaust",eco_supply_entity:"Economy \xB7 supply",eco_exhaust_entity:"Economy \xB7 exhaust",comfort_supply_entity:"Comfort \xB7 supply",comfort_exhaust_entity:"Comfort \xB7 exhaust",boost_supply_entity:"Boost \xB7 supply",boost_exhaust_entity:"Boost \xB7 exhaust",show_back_button:"Back button",back_icon:"Back button icon",back_entity:"Back button target entity",hold_time:"Long press duration (ms)",back_tap_action:"Back \xB7 short press action",back_hold_action:"Back \xB7 long press action",date_entity:"Date entity",time_entity:"Time entity"})}get schema(){let e=["number","input_number"];return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},A,v(["show_night_cooling","show_fan_speeds","show_date_time"]),h("night_cooling_entity",["switch","input_boolean"]),{type:"grid",name:"",schema:[h("nc_start_time_entity",["time","input_datetime"]),h("nc_stop_time_entity",["time","input_datetime"]),h("nc_extract_start_entity",e),h("nc_extract_stop_entity",e),h("nc_outdoor_stop_entity",e),h("nc_supply_setpoint_entity",e)]},{type:"grid",name:"",schema:[h("bp_supply_entity",e),h("bp_exhaust_entity",e),h("eco_supply_entity",e),h("eco_exhaust_entity",e),h("comfort_supply_entity",e),h("comfort_exhaust_entity",e),h("boost_supply_entity",e),h("boost_exhaust_entity",e)]},{type:"grid",name:"",schema:[h("date_entity",["date","input_datetime"]),h("time_entity",["time","input_datetime"])]},v(["show_back_button"]),{type:"grid",name:"",schema:[{name:"back_icon",selector:{icon:{}}},h("back_entity")]},{name:"hold_time",selector:{number:{min:200,max:2e3,step:50,mode:"box",unit_of_measurement:"ms"}}},{name:"back_tap_action",selector:{ui_action:{}}},{name:"back_hold_action",selector:{ui_action:{}}},S]}};customElements.define("alpicair-device-settings-card-editor",Tt);var ke=[{cfg:"nc_extract_start_entity",key:"nc_extract_start",min:13,max:30},{cfg:"nc_extract_stop_entity",key:"nc_extract_stop",min:13,max:30},{cfg:"nc_outdoor_stop_entity",key:"nc_outdoor_stop",min:0,max:30},{cfg:"nc_supply_setpoint_entity",key:"nc_supply_setpoint",min:0,max:30}],Se=[{id:"building_protection",supply:"bp_supply_entity",exhaust:"bp_exhaust_entity"},{id:"economy",supply:"eco_supply_entity",exhaust:"eco_exhaust_entity"},{id:"comfort",supply:"comfort_supply_entity",exhaust:"comfort_exhaust_entity"},{id:"boost",supply:"boost_supply_entity",exhaust:"boost_exhaust_entity"}],nt=class extends $(f){static getConfigElement(){return document.createElement("alpicair-device-settings-card-editor")}static getStubConfig(){return{type:"custom:alpicair-device-settings-card"}}setConfig(t){this._config={show_night_cooling:!0,show_fan_speeds:!0,show_date_time:!0,show_back_button:!0,back_icon:"mdi:chevron-left",hold_time:500,back_tap_action:{action:"none"},back_hold_action:{action:"none"},language:"auto",...t}}getCardSize(){return 10}_t(t){return k(this.hass,this._config,t)}_st(t){return t&&this.hass.states[t]}_setNumber(t,e){let i=t.split(".")[0];this.hass.callService(i,"set_value",{entity_id:t,value:e})}_setTime(t,e){let i=t.split(".")[0];this.hass.callService(i,"set_value",{entity_id:t,[i==="input_datetime"?"time":"value"]:e})}_backButton(){let t=this._config;if(t.show_back_button===!1)return r;let e=t.back_entity,i=ht(()=>z(this,this.hass,e,t.back_tap_action),()=>z(this,this.hass,e,t.back_hold_action),Number(t.hold_time)||500);return c`<button class="power" aria-label=${this._t("back")}
      @pointerdown=${i["@pointerdown"]} @pointerup=${i["@pointerup"]}
      @pointerleave=${i["@pointerleave"]} @pointercancel=${i["@pointercancel"]}
      @contextmenu=${i["@contextmenu"]}>
      <ha-icon icon=${t.back_icon||"mdi:chevron-left"}></ha-icon>
    </button>`}render(){return!this.hass||!this._config?r:c`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon||"mdi:tune"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name||this._t("device_settings")}</div>
          </div>
          ${this._backButton()}
        </div>

        ${this._config.show_night_cooling?this._nightCooling():r}
        ${this._config.show_fan_speeds?this._fanSpeeds():r}
        ${this._config.show_date_time?this._dateTime():r}
      </ha-card>`}_nightCooling(){let t=ke.filter(a=>this._st(this._config[a.cfg])),e=this._st(this._config.nc_start_time_entity),i=this._st(this._config.nc_stop_time_entity),s=this._st(this._config.night_cooling_entity);if(!t.length&&!e&&!i&&!s)return r;let n=!s||s.state==="on";return c`
      ${s?c`<div class="select-row">
            <ha-icon icon="mdi:weather-night" style="--mdc-icon-size:20px;color:var(--primary-color)"></ha-icon>
            <span class="lbl">${this._t("night_cooling")}</span>
            <ha-switch .checked=${s.state==="on"}
              @change=${()=>this.hass.callService("homeassistant","toggle",{entity_id:this._config.night_cooling_entity})}></ha-switch>
          </div>`:r}

      <div class="panel ${n?"":"dimmed"}">
        <div class="section-title">${this._t("night_cooling_schedule")||this._t("night_cooling")}</div>
        ${e||i?c`<div class="grid c2">
              ${e?this._timeField(this._t("start_time"),this._config.nc_start_time_entity,e):r}
              ${i?this._timeField(this._t("stop_time"),this._config.nc_stop_time_entity,i):r}
            </div>`:r}
        ${t.map(a=>{let d=this._st(this._config[a.cfg]),l=Number(d.attributes.step)||.5,p=Number(d.attributes.min??a.min),g=Number(d.attributes.max??a.max),_=Number(d.state),b=u=>Math.min(g,Math.max(p,Math.round(u*10)/10));return c`
            <div class="tempstep">
              <span class="lbl">${this._t(a.key)}</span>
              <span class="v heat">${_.toFixed(1)}°</span>
              <button class="stepbtn" aria-label="−"
                @click=${()=>this._setNumber(this._config[a.cfg],b(_-l))}>−</button>
              <button class="stepbtn" aria-label="+"
                @click=${()=>this._setNumber(this._config[a.cfg],b(_+l))}>+</button>
            </div>`})}
      </div>`}_timeField(t,e,i){let s=(i.state||"").slice(0,5);return c`
      <div class="field">
        <span class="flabel"><ha-icon icon="mdi:clock-outline" style="--mdc-icon-size:14px"></ha-icon>${t}</span>
        <input type="time" .value=${s}
          @change=${n=>this._setTime(e,`${n.target.value}:00`)} />
      </div>`}_fanSpeeds(){let t=Se.filter(e=>this._st(this._config[e.supply])||this._st(this._config[e.exhaust]));return t.length?c`
      ${t.map(e=>c`
        <div class="panel">
          <div class="section-title">${this._t(e.id)}</div>
          ${this._speedSlider(this._config[e.supply],this._t("supply"))}
          ${this._speedSlider(this._config[e.exhaust],this._t("exhaust"))}
        </div>`)}`:r}_speedSlider(t,e){let i=this._st(t);if(!i)return r;let s=Number(i.attributes.min??0),n=Number(i.attributes.max??100),a=Number(i.attributes.step??1),d=Number(i.state);return c`
      <div class="slider-row">
        <div class="bar-top"><span>${e}</span><span class="val">${d}%</span></div>
        <input type="range" min=${s} max=${n} step=${a} .value=${String(d)} aria-label=${e}
          @change=${l=>this._setNumber(t,Number(l.target.value))} />
      </div>`}_dateTime(){let t=this._st(this._config.date_entity),e=this._st(this._config.time_entity);return!t&&!e?r:c`
      <div class="panel">
        <div class="section-title">${this._t("date_time")}</div>
        <div class="grid c2">
          ${t?c`<div class="field">
                <span class="flabel"><ha-icon icon="mdi:calendar" style="--mdc-icon-size:14px"></ha-icon>${this._t("date")}</span>
                <input type="date" .value=${(t.state||"").slice(0,10)}
                  @change=${i=>this.hass.callService(this._config.date_entity.split(".")[0],"set_value",{entity_id:this._config.date_entity,date:i.target.value})} />
              </div>`:r}
          ${e?this._timeField(this._t("time"),this._config.time_entity,e):r}
        </div>
        <button class="plain" style="width:100%;flex-direction:row" @click=${this._syncNow}>
          <ha-icon icon="mdi:clock-check" style="--mdc-icon-size:18px"></ha-icon>${this._t("sync_time")}
        </button>
      </div>`}_syncNow(){let t=new Date,e=i=>String(i).padStart(2,"0");this._config.date_entity&&this.hass.callService(this._config.date_entity.split(".")[0],"set_value",{entity_id:this._config.date_entity,date:`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}),this._config.time_entity&&this._setTime(this._config.time_entity,`${e(t.getHours())}:${e(t.getMinutes())}:00`)}};m(nt,"properties",{hass:{},_config:{state:!0}}),m(nt,"styles",w);customElements.define("alpicair-device-settings-card",nt);var Pt=class extends y{constructor(){super(...arguments);m(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",show_language:"Language selector",show_theme:"Theme selector",show_accent:"Accent color",show_compact:"Compact mode toggle",show_sizes:"Button / font size sliders",show_reset:"Reset button",show_back_button:"Back button",back_icon:"Back button icon",back_entity:"Back button target entity",hold_time:"Long press duration (ms)",back_tap_action:"Back \xB7 short press action",back_hold_action:"Back \xB7 long press action"})}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},v(["show_language","show_theme","show_accent","show_compact","show_sizes","show_reset"]),v(["show_back_button"]),{type:"grid",name:"",schema:[{name:"back_icon",selector:{icon:{}}},h("back_entity")]},{name:"hold_time",selector:{number:{min:200,max:2e3,step:50,mode:"box",unit_of_measurement:"ms"}}},{name:"back_tap_action",selector:{ui_action:{}}},{name:"back_hold_action",selector:{ui_action:{}}},S]}};customElements.define("alpicair-ui-settings-card-editor",Pt);var Ae=[{id:"auto",label:"Auto"},{id:"en",label:"English"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{id:"lv",label:"Latvie\u0161u"}],Ee=["","#03a9f4","#f4511e","#43a047","#8e24aa","#fb8c00"],at=class extends $(f){static getConfigElement(){return document.createElement("alpicair-ui-settings-card-editor")}static getStubConfig(){return{type:"custom:alpicair-ui-settings-card"}}setConfig(t){this._config={show_language:!0,show_theme:!0,show_accent:!0,show_compact:!0,show_sizes:!0,show_reset:!0,show_back_button:!0,back_icon:"mdi:chevron-left",hold_time:500,back_tap_action:{action:"none"},back_hold_action:{action:"none"},...t}}getCardSize(){return 4}_t(t){return k(this.hass,{language:"auto"},t)}_backButton(){let t=this._config;if(t.show_back_button===!1)return r;let e=ht(()=>z(this,this.hass,t.back_entity,t.back_tap_action),()=>z(this,this.hass,t.back_entity,t.back_hold_action),Number(t.hold_time)||500);return c`<button class="power" aria-label=${this._t("back")}
      @pointerdown=${e["@pointerdown"]} @pointerup=${e["@pointerup"]}
      @pointerleave=${e["@pointerleave"]} @pointercancel=${e["@pointercancel"]}
      @contextmenu=${e["@contextmenu"]}>
      <ha-icon icon=${t.back_icon||"mdi:chevron-left"}></ha-icon>
    </button>`}_set(t){Xt(t),this.requestUpdate()}render(){if(!this._config)return r;let t=D(),e=this._config;return c`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${e.icon||"mdi:palette"}></ha-icon></div>
          <div class="titles">
            <div class="title">${e.name||this._t("ui_settings")}</div>
            <div class="subtitle">${this._t("applies_to_all")}</div>
          </div>
          ${this._backButton()}
        </div>

        ${e.show_language!==!1?c`
              <div>
                <div class="section-title" style="margin-bottom:8px">${this._t("language")}</div>
                <div class="grid c4">
                  ${Ae.map(i=>c`<button class="mode ${t.language===i.id?"active":""}"
                      @click=${()=>this._set({language:i.id})}>${i.label}</button>`)}
                </div>
              </div>`:r}

        ${e.show_theme!==!1?c`
              <div>
                <div class="section-title" style="margin-bottom:8px">${this._t("theme")}</div>
                <div class="grid c3">
                  ${[{id:"light",icon:"mdi:white-balance-sunny"},{id:"dark",icon:"mdi:weather-night"},{id:"auto",icon:"mdi:theme-light-dark"}].map(i=>c`<button class="mode ${t.theme===i.id?"active":""}"
                      @click=${()=>this._set({theme:i.id})}>
                      <ha-icon icon=${i.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(i.id)}
                    </button>`)}
                </div>
              </div>`:r}

        ${e.show_accent!==!1?c`
              <div>
                <div class="section-title" style="margin-bottom:8px">${this._t("accent_color")}</div>
                <div class="swatches">
                  ${Ee.map(i=>c`<button
                      class="swatch ${t.accent===i?"active":""}"
                      style=${i?`background:${i}`:""}
                      aria-label=${i||"default"}
                      @click=${()=>this._set({accent:i})}
                    >${i?r:c`<ha-icon icon="mdi:home-assistant" style="--mdc-icon-size:18px"></ha-icon>`}</button>`)}
                </div>
              </div>`:r}

        ${e.show_compact!==!1?c`<button class="mode ${t.compact?"active":""}" @click=${()=>this._set({compact:!t.compact})}>
              <ha-icon icon="mdi:arrow-collapse-vertical" style="--mdc-icon-size:18px"></ha-icon>${this._t("compact")}
            </button>`:r}

        ${e.show_sizes!==!1?c`
              <div>
                <div class="section-title" style="margin-bottom:8px">${this._t("button_size")}</div>
                <div class="slider-row">
                  <div class="bar-top">
                    <span>${this._t("button_size")}</span>
                    <span class="val">${Math.round((t.buttonScale??1)*100)}%</span>
                  </div>
                  <input type="range" min="0.8" max="2" step="0.05"
                    .value=${String(t.buttonScale??1)}
                    aria-label=${this._t("button_size")}
                    @input=${i=>this._set({buttonScale:Number(i.target.value)})} />
                  <div class="bar-top" style="margin-top:6px">
                    <span>${this._t("font_size")}</span>
                    <span class="val">${Math.round((t.fontScale??1)*100)}%</span>
                  </div>
                  <input type="range" min="0.8" max="2" step="0.05"
                    .value=${String(t.fontScale??1)}
                    aria-label=${this._t("font_size")}
                    @input=${i=>this._set({fontScale:Number(i.target.value)})} />
                </div>
              </div>`:r}

        ${e.show_reset!==!1?c`<button class="plain" @click=${()=>{te(),this.requestUpdate()}}>
              <ha-icon icon="mdi:restore" style="--mdc-icon-size:18px"></ha-icon>${this._t("reset")}
            </button>`:r}
      </ha-card>`}};m(at,"properties",{hass:{},_config:{state:!0}}),m(at,"styles",w);customElements.define("alpicair-ui-settings-card",at);var ze="1.0.0";window.customCards=window.customCards||[];var j=(o,t,e)=>{window.customCards.some(i=>i.type===o)||window.customCards.push({type:o,name:t,description:e,preview:!0,documentationURL:"https://github.com/keziksdmitrijs-byte/recuperator-custom-card"})};j("alpicair-recuperator-card","AlpicAir Recuperator Card","Recuperator control: modes, efficiency, fan speed and a configurable settings button.");j("alpicair-air-conditioner-card","AlpicAir Air Conditioner Card","Single climate entity: dial, HVAC modes, fan and swing control.");j("alpicair-heat-pump-card","AlpicAir Heat Pump Card","Floor and hot water temperatures, modes and quick actions.");j("alpicair-sensors-card","AlpicAir Temperatures Card","Outdoor/indoor/supply/extract temperatures with target slider.");j("alpicair-device-settings-card","AlpicAir Device Settings Card","Night cooling, fan speed presets and device date & time.");j("alpicair-ui-settings-card","AlpicAir Interface Settings Card","Global language, theme and accent for all AlpicAir cards.");console.info(`%c ALPICAIR-CARDS %c v${ze} `,"color:#fff;background:#03a9f4;font-weight:700;border-radius:4px 0 0 4px","color:#03a9f4;background:#333;font-weight:700;border-radius:0 4px 4px 0");
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
