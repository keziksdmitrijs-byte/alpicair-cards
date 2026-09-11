var Ee=Object.defineProperty;var Ce=(s,t,e)=>t in s?Ee(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var _=(s,t,e)=>Ce(s,typeof t!="symbol"?t+"":t,e);var xt=globalThis,$t=xt.ShadowRoot&&(xt.ShadyCSS===void 0||xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ct=Symbol(),te=new WeakMap,X=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if($t&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=te.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&te.set(e,t))}return t}toString(){return this.cssText}},ee=s=>new X(typeof s=="string"?s:s+"",void 0,Ct),tt=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((i,o,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[a+1],s[0]);return new X(e,s,Ct)},ie=(s,t)=>{if($t)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),o=xt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}},At=$t?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ee(e)})(s):s;var{is:Ae,defineProperty:Ne,getOwnPropertyDescriptor:Me,getOwnPropertyNames:Te,getOwnPropertySymbols:Fe,getPrototypeOf:Oe}=Object,O=globalThis,oe=O.trustedTypes,Pe=oe?oe.emptyScript:"",Be=O.reactiveElementPolyfillSupport,et=(s,t)=>s,Nt={toAttribute(s,t){switch(t){case Boolean:s=s?Pe:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ne=(s,t)=>!Ae(s,t),se={attribute:!0,type:String,converter:Nt,reflect:!1,useDefault:!1,hasChanged:ne};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),O.litPropertyMetadata??(O.litPropertyMetadata=new WeakMap);var F=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=se){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Ne(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:a}=Me(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){let l=o?.call(this);a?.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??se}static _$Ei(){if(this.hasOwnProperty(et("elementProperties")))return;let t=Oe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(et("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(et("properties"))){let e=this.properties,i=[...Te(e),...Fe(e)];for(let o of i)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,o]of e)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let o=this._$Eu(e,i);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(At(o))}else t!==void 0&&e.push(At(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ie(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:Nt).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let a=i.getPropertyOptions(o),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Nt;this._$Em=o;let l=n.fromAttribute(e,a.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,i,o=!1,a){if(t!==void 0){let n=this.constructor;if(o===!1&&(a=this[t]),i??(i=n.getPropertyOptions(t)),!((i.hasChanged??ne)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:a},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:n}=a,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[et("elementProperties")]=new Map,F[et("finalized")]=new Map,Be?.({ReactiveElement:F}),(O.reactiveElementVersions??(O.reactiveElementVersions=[])).push("2.1.2");var ot=globalThis,ae=s=>s,kt=ot.trustedTypes,re=kt?kt.createPolicy("lit-html",{createHTML:s=>s}):void 0,_e="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,ue="?"+P,Le=`<${ue}>`,V=document,st=()=>V.createComment(""),nt=s=>s===null||typeof s!="object"&&typeof s!="function",Lt=Array.isArray,Re=s=>Lt(s)||typeof s?.[Symbol.iterator]=="function",Mt=`[ 	
\f\r]`,it=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,le=/>/g,q=RegExp(`>|${Mt}(?:([^\\s"'>=/]+)(${Mt}*=${Mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,pe=/"/g,me=/^(?:script|style|textarea|title)$/i,Rt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),c=Rt(1),C=Rt(2),hi=Rt(3),K=Symbol.for("lit-noChange"),r=Symbol.for("lit-nothing"),de=new WeakMap,W=V.createTreeWalker(V,129);function ge(s,t){if(!Lt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return re!==void 0?re.createHTML(t):t}var Ue=(s,t)=>{let e=s.length-1,i=[],o,a=t===2?"<svg>":t===3?"<math>":"",n=it;for(let l=0;l<e;l++){let p=s[l],d,m,u=-1,f=0;for(;f<p.length&&(n.lastIndex=f,m=n.exec(p),m!==null);)f=n.lastIndex,n===it?m[1]==="!--"?n=ce:m[1]!==void 0?n=le:m[2]!==void 0?(me.test(m[2])&&(o=RegExp("</"+m[2],"g")),n=q):m[3]!==void 0&&(n=q):n===q?m[0]===">"?(n=o??it,u=-1):m[1]===void 0?u=-2:(u=n.lastIndex-m[2].length,d=m[1],n=m[3]===void 0?q:m[3]==='"'?pe:he):n===pe||n===he?n=q:n===ce||n===le?n=it:(n=q,o=void 0);let g=n===q&&s[l+1].startsWith("/>")?" ":"";a+=n===it?p+Le:u>=0?(i.push(d),p.slice(0,u)+_e+p.slice(u)+P+g):p+P+(u===-2?l:g)}return[ge(s,a+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},at=class s{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let a=0,n=0,l=t.length-1,p=this.parts,[d,m]=Ue(t,e);if(this.el=s.createElement(d,i),W.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=W.nextNode())!==null&&p.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(_e)){let f=m[n++],g=o.getAttribute(u).split(P),b=/([.?@])?(.*)/.exec(f);p.push({type:1,index:a,name:b[2],strings:g,ctor:b[1]==="."?Ft:b[1]==="?"?Ot:b[1]==="@"?Pt:J}),o.removeAttribute(u)}else u.startsWith(P)&&(p.push({type:6,index:a}),o.removeAttribute(u));if(me.test(o.tagName)){let u=o.textContent.split(P),f=u.length-1;if(f>0){o.textContent=kt?kt.emptyScript:"";for(let g=0;g<f;g++)o.append(u[g],st()),W.nextNode(),p.push({type:2,index:++a});o.append(u[f],st())}}}else if(o.nodeType===8)if(o.data===ue)p.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(P,u+1))!==-1;)p.push({type:7,index:a}),u+=P.length-1}a++}}static createElement(t,e){let i=V.createElement("template");return i.innerHTML=t,i}};function Q(s,t,e=s,i){if(t===K)return t;let o=i!==void 0?e._$Co?.[i]:e._$Cl,a=nt(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(s),o._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=o:e._$Cl=o),o!==void 0&&(t=Q(s,o._$AS(s,t.values),o,i)),t}var Tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??V).importNode(e,!0);W.currentNode=o;let a=W.nextNode(),n=0,l=0,p=i[0];for(;p!==void 0;){if(n===p.index){let d;p.type===2?d=new rt(a,a.nextSibling,this,t):p.type===1?d=new p.ctor(a,p.name,p.strings,this,t):p.type===6&&(d=new Bt(a,this,t)),this._$AV.push(d),p=i[++l]}n!==p?.index&&(a=W.nextNode(),n++)}return W.currentNode=V,o}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},rt=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=r,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),nt(t)?t===r||t==null||t===""?(this._$AH!==r&&this._$AR(),this._$AH=r):t!==this._$AH&&t!==K&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Re(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==r&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=at.createElement(ge(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let a=new Tt(o,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=de.get(t.strings);return e===void 0&&de.set(t.strings,e=new at(t)),e}k(t){Lt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let a of t)o===e.length?e.push(i=new s(this.O(st()),this.O(st()),this,this.options)):i=e[o],i._$AI(a),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=ae(t).nextSibling;ae(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},J=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,a){this.type=1,this._$AH=r,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=r}_$AI(t,e=this,i,o){let a=this.strings,n=!1;if(a===void 0)t=Q(this,t,e,0),n=!nt(t)||t!==this._$AH&&t!==K,n&&(this._$AH=t);else{let l=t,p,d;for(t=a[0],p=0;p<a.length-1;p++)d=Q(this,l[i+p],e,p),d===K&&(d=this._$AH[p]),n||(n=!nt(d)||d!==this._$AH[p]),d===r?t=r:t!==r&&(t+=(d??"")+a[p+1]),this._$AH[p]=d}n&&!o&&this.j(t)}j(t){t===r?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ft=class extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===r?void 0:t}},Ot=class extends J{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==r)}},Pt=class extends J{constructor(t,e,i,o,a){super(t,e,i,o,a),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??r)===K)return;let i=this._$AH,o=t===r&&i!==r||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==r&&(i===r||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Bt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}};var Ie=ot.litHtmlPolyfillSupport;Ie?.(at,rt),(ot.litHtmlVersions??(ot.litHtmlVersions=[])).push("3.3.3");var fe=(s,t,e)=>{let i=e?.renderBefore??t,o=i._$litPart$;if(o===void 0){let a=e?.renderBefore??null;i._$litPart$=o=new rt(t.insertBefore(st(),a),a,void 0,e??{})}return o._$AI(s),o};var ct=globalThis,y=class extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=fe(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}};y._$litElement$=!0,y.finalized=!0,ct.litElementHydrateSupport?.({LitElement:y});var je=ct.litElementPolyfillSupport;je?.({LitElement:y});(ct.litElementVersions??(ct.litElementVersions=[])).push("4.2.2");var k=tt`
  :host {
    display: block;
    /* one shared accent palette for every AlpicAir card */
    --alp-heat: #f4511e;
    --alp-cool: #039be5;
    --alp-water: #039be5;
    --alp-perf: #43a047;
    --alp-boost: #fb8c00;
    --alp-warn: #f9a825;
  }
  /* forced light theme */
  :host([alp-theme="light"]) {
    --primary-text-color: #16181d;
    --secondary-text-color: #5f6672;
    --disabled-text-color: #9aa1ad;
    --card-background-color: #ffffff;
    --ha-card-background: #ffffff;
    --secondary-background-color: #f1f3f6;
    --divider-color: rgba(0, 0, 0, .10);
    --rgb-card-background-color: 255, 255, 255;
    color: var(--primary-text-color);
  }
  /* forced dark theme */
  :host([alp-theme="dark"]) {
    --primary-text-color: #e9edf3;
    --secondary-text-color: #9aa3b2;
    --disabled-text-color: #6b7280;
    --card-background-color: #1b1c20;
    --ha-card-background: #1b1c20;
    --secondary-background-color: #26282e;
    --divider-color: rgba(255, 255, 255, .12);
    --rgb-card-background-color: 27, 28, 32;
    --alp-heat: #ff7043;
    --alp-cool: #4fc3f7;
    --alp-water: #4fc3f7;
    --alp-perf: #66bb6a;
    --alp-boost: #ffa726;
    --alp-warn: #ffca28;
    color: var(--primary-text-color);
  }
  :host([alp-theme]) ha-card {
    background: var(--card-background-color);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color);
  }
  .card-title {
    font-size: calc(15px * var(--alp-fs, 1));
    font-weight: 800; line-height: 1.2; text-align: center;
    color: var(--primary-text-color);
  }
  .panel-header .ph-title {
    flex: 1; min-width: 0; padding: 0 8px; text-align: center;
    font-size: calc(15px * var(--alp-fs, 1)); font-weight: 800;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  ha-card {
    padding: 16px;
    border-radius: var(--ha-card-border-radius, 16px);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  button, input, select, textarea {
    color: var(--primary-text-color);
    font-family: inherit;
  }
  ha-icon {
    color: var(--primary-color);
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

  /* --- recuperator panel (ring) --- */
  .panel-card { align-items: center; }
  .ring-wrap { position: relative; display: grid; place-items: center; }
  .ring { display: block; }
  .ring-center {
    position: absolute; inset: var(--alp-ring-inset, 30px); margin: auto;
    box-sizing: border-box;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
    border-radius: 50%; border: 2px solid var(--divider-color);
    background: var(--secondary-background-color); color: var(--primary-text-color); cursor: pointer;
    transition: transform .12s;
  }
  .ring-center:active { transform: scale(.97); }
  .ring-center .rc-mode { font-size: calc(15px * var(--alp-fs, 1)); font-weight: 800; line-height: 1.1; padding: 0 8px; text-align: center; }
  .ring-center .rc-pct { font-size: calc(13px * var(--alp-fs, 1)); font-weight: 700; font-variant-numeric: tabular-nums; color: var(--secondary-text-color); }
  .ring-overlay {
    position: absolute; inset: 0; display: grid; place-items: center;
    border-radius: 50%; background: var(--ha-card-background, var(--card-background-color, rgba(0,0,0,.82)));
    backdrop-filter: blur(4px);
  }
  .ring-overlay-grid { display: grid; gap: 6px; width: 78%; }
  .ring-stats { width: 100%; margin-top: 8px; }
  .ring-stat {
    border-radius: 12px; background: var(--secondary-background-color);
    border: 1px solid transparent; padding: calc(8px * var(--alp-bs, 1)) 6px;
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    color: var(--primary-text-color); cursor: pointer; text-align: center; transition: background .18s;
  }
  button.ring-stat { cursor: pointer; }
  .ring-stat.sel { background: rgba(var(--rgb-primary-color, 3,169,244), .16); border-color: var(--primary-color); }
  .ring-stat.sel.heat { background: rgba(244,81,30,.16); border-color: var(--alp-heat, #f4511e); }
  .ring-stat .rs-val { font-size: calc(17px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums; }
  .ring-stepper { display: flex; align-items: center; justify-content: space-between; gap: 10px;
    width: min(100%, var(--alp-target-control-width, 260px)); background: var(--secondary-background-color); color: var(--primary-text-color);
    border-radius: 12px; padding: 6px 12px; margin: 14px auto 0; }
  .ring-stepper .rs-target { font-size: calc(22px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums; color: var(--primary-color); }
  .ring-mini { width: 100%; margin-top: 14px; }

  /* --- shared panel header (back + power) --- */
  .panel-header {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; margin-bottom: 4px;
  }
  .ph-btn {
    width: calc(40px * var(--alp-bs, 1)); height: calc(40px * var(--alp-bs, 1));
    border-radius: 12px; border: 1px solid var(--divider-color);
    background: var(--secondary-background-color); color: var(--secondary-text-color);
    cursor: pointer; display: grid; place-items: center;
    transition: background .18s, color .18s;
  }
  .ph-btn:hover { color: var(--primary-color); }
  .ph-btn:active { transform: scale(.97); }
  .ph-btn.power.on {
    border-color: transparent;
    background: rgba(var(--rgb-primary-color, 3,169,244), .18);
    color: var(--primary-color);
  }
  .ph-btn ha-icon { --mdc-icon-size: calc(20px * var(--alp-bs, 1)) !important; }

  /* --- ring center labels (AC / heat-pump panels) --- */
  .ring-center .rc-cap {
    font-size: calc(11px * var(--alp-fs, 1)); font-weight: 700; text-transform: uppercase;
    letter-spacing: .04em; color: var(--secondary-text-color);
    display: inline-flex; align-items: center; gap: 4px;
  }
  .ring-center .rc-target {
    font-size: calc(40px * var(--alp-fs, 1)); font-weight: 800; line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .ring-center .rc-sub {
    font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color);
    text-align: center; padding: 0 6px;
  }

  /* --- tiles below the ring --- */
  .ring-tiles { width: 100%; margin-top: 8px; }
  .tile {
    min-height: calc(62px * var(--alp-bs, 1)); border-radius: 12px; cursor: pointer;
    border: 1px solid transparent; background: var(--secondary-background-color);
    color: var(--primary-text-color);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
    padding: 8px 4px; text-align: center; transition: background .18s, border-color .18s;
  }
  .tile:active { transform: scale(.97); }
  .tile.sel { background: rgba(var(--rgb-primary-color, 3,169,244), .16); border-color: var(--primary-color); }
  .tile-icon { color: var(--primary-color); display: grid; place-items: center; }
  .tile.sel .tile-icon { color: var(--primary-color); }
  .tile-val {
    font-size: calc(13px * var(--alp-fs, 1)); font-weight: 800; line-height: 1.15;
    min-width: 0; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .tile-dots { display: flex; align-items: center; gap: 6px; margin-top: 2px; }
  .dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: rgba(128,128,128,.35);
  }
  .dot.active { background: var(--primary-color); }
  .dot.boost { background: var(--alp-boost, #ff9800); }
  .dot.perf { background: var(--alp-perf, #4caf50); }

  /* --- option rows revealed by tiles --- */
  .tilezone { position: relative; width: 100%; margin-top: 14px; }
  .tilezone > .grid.dimmed {
    opacity: .25; filter: blur(1.5px); pointer-events: none;
    transition: opacity .18s, filter .18s;
  }
  .tilezone > .floating {
    position: absolute; left: 0; right: 0; bottom: 0; margin: 0; z-index: 40;
    background: var(--card-background-color, #fff);
    border-radius: 16px; padding: 8px; box-sizing: border-box;
    box-shadow: 0 10px 28px rgba(0,0,0,.22);
    animation: alp-pop .18s ease-out;
  }
  .tilezone > .ring-stepper.floating { display: flex; align-items: center; justify-content: center; gap: 14px; }
  @keyframes alp-pop { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
  .opt-row {
    display: flex; flex-wrap: wrap; gap: 8px; width: 100%; margin-top: 14px;
  }

  .opt {
    flex: 1 1 30%; min-height: calc(44px * var(--alp-bs, 1)); border-radius: 12px; cursor: pointer;
    border: 2px solid var(--divider-color); background: var(--secondary-background-color);
    color: var(--secondary-text-color); font-size: calc(13px * var(--alp-fs, 1)); font-weight: 700;
    display: flex; align-items: center; justify-content: center; gap: 6px; padding: 6px 8px;
    transition: background .18s, color .18s, border-color .18s;
  }
  .opt:hover { color: var(--primary-text-color); }
  .opt.active {
    border-color: transparent; color: var(--primary-color);
    background: rgba(var(--rgb-primary-color, 3,169,244), .16);
  }
  .opt.active.boost { color: var(--alp-boost, #ff9800); background: rgba(255,152,0,.16); }
  .opt.active.perf { color: var(--alp-perf, #4caf50); background: rgba(76,175,80,.16); }
  .opt span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  /* --- target-temperature edit overlay (AC panel) --- */
  .ring-temp-edit {
    display: flex; align-items: center; gap: 14px;
  }
  .ring-temp-edit .rte-val {
    font-size: calc(28px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums;
    color: var(--primary-color);
  }
  .stepbtn.round {
    width: calc(44px * var(--alp-bs, 1)); height: calc(44px * var(--alp-bs, 1)); border-radius: 50%;
  }

  /* --- target rows (heat-pump panel) --- */
  .ring-target-rows { width: 84%; display: flex; flex-direction: column; gap: 8px; }
  .rt-row {
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
    background: var(--secondary-background-color); border-radius: 12px; padding: 6px 8px;
  }
  .rt-inner { display: flex; flex-direction: column; align-items: center; gap: 2px; flex: 1; }
  .rt-label {
    font-size: calc(11px * var(--alp-fs, 1)); font-weight: 700; text-transform: uppercase;
    letter-spacing: .04em; color: var(--secondary-text-color);
    display: inline-flex; align-items: center; gap: 4px;
  }
  .rt-val { font-size: calc(20px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums; }

  /* tap on the empty overlay backdrop closes the sheet */
  .panel-card { position: relative; overflow: hidden; }
  .panel-backdrop {
    position: absolute; inset: 0; z-index: 30; border: 0; margin: 0; padding: 0;
    cursor: default; background: rgba(var(--rgb-card-background-color, 255,255,255), .55);
    backdrop-filter: blur(1.5px); -webkit-backdrop-filter: blur(1.5px);
  }
  .ring-overlay { z-index: 40; cursor: default; background: var(--card-background-color, #fff); box-shadow: 0 10px 28px rgba(0,0,0,.22); }

  /* --- start menu --- */
  .start-menu-card { gap: 18px; overflow: hidden; }
  .start-top { display: flex; align-items: center; justify-content: space-between; gap: 18px; min-height: 108px; }
  .start-time-block { min-width: 0; }
  .start-name { margin-bottom: 2px; font-size: calc(13px * var(--alp-fs, 1)); font-weight: 700; color: var(--secondary-text-color); }
  .start-time { display: block; font-size: calc(52px * var(--alp-fs, 1)); line-height: 1; font-weight: 800; font-variant-numeric: tabular-nums; }
  .start-date { margin-top: 6px; font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color); text-transform: capitalize; }
  .start-weather { flex: 0 0 auto; display: grid; grid-template-columns: auto auto; align-items: center; column-gap: 8px; padding: 12px; border-radius: 12px; background: var(--secondary-background-color); }
  .start-weather ha-icon { grid-row: 1 / span 2; color: var(--primary-color); --mdc-icon-size: calc(34px * var(--alp-bs, 1)); }
  .start-weather-temp { font-size: calc(22px * var(--alp-fs, 1)); line-height: 1; font-weight: 800; font-variant-numeric: tabular-nums; }
  .start-weather-state { max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: calc(11px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color); }
  .start-actions { display: flex; flex-direction: column; gap: 8px; }
  .start-row { display: flex; gap: var(--alpic-gap, 8px); width: 100%; }
  .start-action { min-height: calc(64px * var(--alp-bs, 1)); min-width: 0; border: 1px solid var(--divider-color); border-radius: 12px; padding: 10px 10px; cursor: pointer; background: var(--secondary-background-color); color: var(--primary-text-color); display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 8px; text-align: left; font: inherit; font-size: calc(13px * var(--alp-fs, 1)); font-weight: 700; }
  .start-action.icon-only { display: flex; align-items: center; justify-content: center; }
  .start-action.icon-only > ha-icon:first-child { --mdc-icon-size: calc(28px * var(--alp-bs, 1)); }
  .start-action:active { transform: scale(.98); }
  .start-action > ha-icon:first-child { color: var(--primary-color); --mdc-icon-size: calc(24px * var(--alp-bs, 1)); }
  .start-action span { min-width: 0; overflow-wrap: anywhere; }
  .start-action .start-chevron { color: var(--primary-color); --mdc-icon-size: 18px; }
  .start-action.menu { border-color: transparent; background: var(--primary-color); color: var(--text-primary-color, #fff); }
  .start-action.menu > ha-icon, .start-action.menu .start-chevron { color: currentColor; }
  @media (max-width: 360px) {
    .start-top { align-items: flex-start; flex-direction: column; }
    .start-weather { width: 100%; box-sizing: border-box; }
  }

  /* --- solar inverter card --- */
  .tile-cap { font-size: calc(11px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color);
    max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .tile.good { background: rgba(76,175,80,.16); border-color: rgba(76,175,80,.45); }
  .tile.good .tile-icon, .tile.good .tile-val { color: var(--alp-perf, #4caf50); }
  .tile.bad { background: rgba(219,68,55,.16); border-color: rgba(219,68,55,.45); }
  .tile.bad .tile-icon, .tile.bad .tile-val { color: var(--error-color, #db4437); }
  .stat-pop { flex-direction: column; gap: 6px; }
  .stat-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%;
    box-sizing: border-box; background: var(--secondary-background-color); border-radius: 12px; padding: 8px 12px; }
  .stat-row .sr-label { font-size: calc(12px * var(--alp-fs, 1)); font-weight: 700; color: var(--secondary-text-color);
    min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .stat-row .sr-val { font-size: calc(17px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums;
    color: var(--primary-text-color); white-space: nowrap; }
  .stat-row .sr-val.good { color: var(--alp-perf, #4caf50); }
  .stat-row .sr-val.bad { color: var(--error-color, #db4437); }
`;var St="alpicair-ui-settings",B="alpicair-ui-settings-changed",be={language:"auto",theme:"auto",accent:"",compact:!1,buttonScale:1,fontScale:1},N=null;function L(){if(N)return N;let s={};try{s=JSON.parse(window.localStorage.getItem(St)||"{}")||{}}catch{s={}}return N={...be,...s},N}function we(s){N={...L(),...s};try{window.localStorage.setItem(St,JSON.stringify(N))}catch{}window.dispatchEvent(new CustomEvent(B,{detail:N})),document.dispatchEvent(new CustomEvent(B,{detail:N}))}function ye(){N={...be};try{window.localStorage.removeItem(St)}catch{}window.dispatchEvent(new CustomEvent(B,{detail:N})),document.dispatchEvent(new CustomEvent(B,{detail:N}))}function He(s){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s||"");return t?[1,2,3].map(e=>parseInt(t[e],16)).join(","):null}function De(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var S=s=>class extends s{connectedCallback(){super.connectedCallback(),this._onUiSettings=()=>{N=null,this._applyUiSettings(),this.requestUpdate()},window.addEventListener(B,this._onUiSettings),document.addEventListener(B,this._onUiSettings),window.addEventListener("storage",this._onStorage=t=>{(!t.key||t.key===St)&&this._onUiSettings()}),this._applyUiSettings()}disconnectedCallback(){window.removeEventListener(B,this._onUiSettings),document.removeEventListener(B,this._onUiSettings),window.removeEventListener("storage",this._onStorage),super.disconnectedCallback()}willUpdate(t){super.willUpdate&&super.willUpdate(t),this.isConnected&&this._applyUiSettings()}_applyUiSettings(){let t=L();this._uiSettings=t;let e=t.theme==="dark"||t.theme==="auto"&&De();if(t.theme==="auto"?this.removeAttribute("alp-theme"):this.setAttribute("alp-theme",e?"dark":"light"),t.compact?this.setAttribute("alp-compact",""):this.removeAttribute("alp-compact"),t.theme==="auto")this.style.removeProperty("--ha-card-background"),this.style.removeProperty("--card-background-color");else{let n=e?"#1b1c20":"#ffffff";this.style.setProperty("--ha-card-background",n),this.style.setProperty("--card-background-color",n)}let i=this._config||{},o=Number(i.button_scale??t.buttonScale??1)||1,a=Number(i.font_scale??t.fontScale??1)||1;if(this.style.setProperty("--alp-bs",String(o)),this.style.setProperty("--alp-fs",String(a)),t.accent){this.style.setProperty("--alp-accent",t.accent),this.style.setProperty("--primary-color",t.accent);let n=He(t.accent);n&&this.style.setProperty("--rgb-primary-color",n)}else this.style.removeProperty("--alp-accent"),this.style.removeProperty("--primary-color"),this.style.removeProperty("--rgb-primary-color")}};var lt={w_clear_night:"Clear",w_cloudy:"Cloudy",w_exceptional:"Exceptional",w_fog:"Fog",w_hail:"Hail",w_lightning:"Lightning",w_lightning_rainy:"Thunderstorm",w_partlycloudy:"Partly cloudy",w_pouring:"Pouring",w_rainy:"Rainy",w_snowy:"Snowy",w_snowy_rainy:"Sleet",w_sunny:"Sunny",w_windy:"Windy",w_windy_variant:"Windy",solar:"Solar",solar_station:"Solar station",solar_inverter:"Solar inverter",production:"Production",battery:"Battery",house:"House",to_grid:"To grid",from_grid:"From grid",today:"Today",this_month:"This month",charging:"Charging",discharging:"Discharging",peak_power:"Peak",kw:"kW",kwh:"kWh",ui_settings:"Interface settings",language:"Language",theme:"Theme",light:"Light",dark:"Dark",accent_color:"Accent color",button_size:"Button size",font_size:"Font size",compact:"Compact mode",reset:"Reset",applies_to_all:"Applies to all AlpicAir cards in this browser",current:"Current",target:"Target",boiler:"Boiler",recuperator:"Recuperator",recuperator_panel:"Recuperator panel",air_conditioner:"Air conditioner",heat_pump:"Heat pump",sensors:"Temperatures",device_settings:"Device settings",settings:"Settings",back:"Back",menu:"Menu",weather:"Weather",custom:"Custom button",recuperation:"Recuperation",fan_speed:"Fan speed",supply:"Supply",exhaust:"Exhaust",off:"Off",on:"On",building_protection:"Building protection",economy:"Economy",comfort:"Comfort",boost:"Boost",outdoor:"Outdoor",indoor:"Indoor",supply_air:"Supply air",extract_air:"Extract air",night_cooling:"Night cooling",night_cooling_schedule:"Night cooling schedule",power:"Power",running:"Running",standby:"Standby",target_temperature:"Target temperature",heat:"Heat",cool:"Cool",dry:"Dry",fan_only:"Fan",auto:"Auto",low:"Low",medium:"Medium",high:"High",full_swing:"Full swing",fixed:"Fixed",swing_vertical:"Vertical swing",swing_horizontal:"Horizontal swing",floor:"Floor",water:"Hot water",heating:"Heating",hot_water:"Hot water",heating_water:"Heating + Water",quick_heat:"Quick heat",quiet_mode:"Quiet",disinfection:"Disinfection",entity_not_found:"Entity not found",date_time:"Date & time",date:"Date",time:"Time",sync_time:"Sync with Home Assistant",start_time:"Start",stop_time:"Stop",nc_extract_start:"Extract air temp. to start",nc_extract_stop:"Extract air temp. to stop",nc_outdoor_stop:"Outdoor temp. to stop",nc_supply_setpoint:"Supply air setpoint"},qe={w_clear_night:"\u042F\u0441\u043D\u043E",w_cloudy:"\u041E\u0431\u043B\u0430\u0447\u043D\u043E",w_exceptional:"\u042D\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u043E",w_fog:"\u0422\u0443\u043C\u0430\u043D",w_hail:"\u0413\u0440\u0430\u0434",w_lightning:"\u0413\u0440\u043E\u0437\u0430",w_lightning_rainy:"\u0413\u0440\u043E\u0437\u0430 \u0441 \u0434\u043E\u0436\u0434\u0451\u043C",w_partlycloudy:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0441\u0442\u044C",w_pouring:"\u041B\u0438\u0432\u0435\u043D\u044C",w_rainy:"\u0414\u043E\u0436\u0434\u044C",w_snowy:"\u0421\u043D\u0435\u0433",w_snowy_rainy:"\u0414\u043E\u0436\u0434\u044C \u0441\u043E \u0441\u043D\u0435\u0433\u043E\u043C",w_sunny:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u043E",w_windy:"\u0412\u0435\u0442\u0440\u0435\u043D\u043E",w_windy_variant:"\u0412\u0435\u0442\u0440\u0435\u043D\u043E",solar:"\u0421\u043E\u043B\u043D\u0446\u0435",solar_station:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F",solar_inverter:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439 \u0438\u043D\u0432\u0435\u0440\u0442\u043E\u0440",production:"\u0412\u044B\u0440\u0430\u0431\u043E\u0442\u043A\u0430",battery:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F",house:"\u0414\u043E\u043C",to_grid:"\u0412 \u0441\u0435\u0442\u044C",from_grid:"\u0418\u0437 \u0441\u0435\u0442\u0438",today:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F",this_month:"\u0412 \u044D\u0442\u043E\u043C \u043C\u0435\u0441\u044F\u0446\u0435",charging:"\u0417\u0430\u0440\u044F\u0434",discharging:"\u0420\u0430\u0437\u0440\u044F\u0434",peak_power:"\u041F\u0438\u043A",kw:"\u043A\u0412\u0442",kwh:"\u043A\u0412\u0442\xB7\u0447",ui_settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",language:"\u042F\u0437\u044B\u043A",theme:"\u0422\u0435\u043C\u0430",light:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F",dark:"\u0422\u0451\u043C\u043D\u0430\u044F",accent_color:"\u0410\u043A\u0446\u0435\u043D\u0442\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",button_size:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043E\u043A",font_size:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",compact:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",reset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",applies_to_all:"\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u043E \u0432\u0441\u0435\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u043C AlpicAir \u0432 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435",current:"\u0421\u0435\u0439\u0447\u0430\u0441",target:"\u0417\u0430\u0434\u0430\u043D\u043E",boiler:"\u0411\u043E\u0439\u043B\u0435\u0440",recuperator:"\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0442\u043E\u0440",recuperator_panel:"\u041F\u0430\u043D\u0435\u043B\u044C \u0440\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430",air_conditioner:"\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440",heat_pump:"\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u043D\u0430\u0441\u043E\u0441",sensors:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",device_settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",back:"\u041D\u0430\u0437\u0430\u0434",menu:"\u041C\u0435\u043D\u044E",weather:"\u041F\u043E\u0433\u043E\u0434\u0430",custom:"\u0421\u0432\u043E\u044F \u043A\u043D\u043E\u043F\u043A\u0430",recuperation:"\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0446\u0438\u044F",fan_speed:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u0430",supply:"\u041F\u0440\u0438\u0442\u043E\u043A",exhaust:"\u0412\u044B\u0442\u044F\u0436\u043A\u0430",off:"\u0412\u044B\u043A\u043B",on:"\u0412\u043A\u043B",building_protection:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0437\u0434\u0430\u043D\u0438\u044F",economy:"\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u044B\u0439",comfort:"\u041A\u043E\u043C\u0444\u043E\u0440\u0442",boost:"Boost",outdoor:"\u0423\u043B\u0438\u0446\u0430",indoor:"\u0412 \u0434\u043E\u043C\u0435",supply_air:"\u041F\u0440\u0438\u0442\u043E\u0447\u043D\u044B\u0439 \u0432\u043E\u0437\u0434\u0443\u0445",extract_air:"\u0412\u044B\u0442\u044F\u0436\u043D\u043E\u0439 \u0432\u043E\u0437\u0434\u0443\u0445",night_cooling:"\u041D\u043E\u0447\u043D\u043E\u0435 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",night_cooling_schedule:"\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u043E\u0447\u043D\u043E\u0433\u043E \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F",power:"\u041F\u0438\u0442\u0430\u043D\u0438\u0435",running:"\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442",standby:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",target_temperature:"\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",heat:"\u041E\u0431\u043E\u0433\u0440\u0435\u0432",cool:"\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",dry:"\u041E\u0441\u0443\u0448\u0435\u043D\u0438\u0435",fan_only:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F",auto:"\u0410\u0432\u0442\u043E",low:"\u041D\u0438\u0437\u043A\u0430\u044F",medium:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F",high:"\u0412\u044B\u0441\u043E\u043A\u0430\u044F",full_swing:"\u041A\u0430\u0447\u0430\u043D\u0438\u0435",fixed:"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E",swing_vertical:"\u0412\u0435\u0440\u0442. \u0436\u0430\u043B\u044E\u0437\u0438",swing_horizontal:"\u0413\u043E\u0440. \u0436\u0430\u043B\u044E\u0437\u0438",floor:"\u041F\u043E\u043B",water:"\u0412\u043E\u0434\u0430",heating:"\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435",hot_water:"\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u0432\u043E\u0434\u0430",heating_water:"\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435 + \u0432\u043E\u0434\u0430",quick_heat:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432",quiet_mode:"\u0422\u0438\u0445\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",disinfection:"\u0414\u0435\u0437\u0438\u043D\u0444\u0435\u043A\u0446\u0438\u044F",entity_not_found:"\u041E\u0431\u044A\u0435\u043A\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",date_time:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",date:"\u0414\u0430\u0442\u0430",time:"\u0412\u0440\u0435\u043C\u044F",sync_time:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441 Home Assistant",start_time:"\u0421\u0442\u0430\u0440\u0442",stop_time:"\u0421\u0442\u043E\u043F",nc_extract_start:"\u0422. \u0432\u044B\u0442\u044F\u0436\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u0440\u0442\u0430",nc_extract_stop:"\u0422. \u0432\u044B\u0442\u044F\u0436\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u043E\u043F\u0430",nc_outdoor_stop:"\u0422. \u0443\u043B\u0438\u0446\u044B \u0434\u043B\u044F \u0441\u0442\u043E\u043F\u0430",nc_supply_setpoint:"\u0423\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u0440\u0438\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0430"},We={w_clear_night:"Skaidrs",w_cloudy:"M\u0101ko\u0146ains",w_exceptional:"\u0100rk\u0101rt\u0113js",w_fog:"Migla",w_hail:"Krusa",w_lightning:"P\u0113rkons",w_lightning_rainy:"P\u0113rkona lietus",w_partlycloudy:"Da\u013C\u0113ji m\u0101ko\u0146ains",w_pouring:"Stiprs lietus",w_rainy:"Lietus",w_snowy:"Sniegs",w_snowy_rainy:"Slapj\u0161 sniegs",w_sunny:"Saulains",w_windy:"V\u0113jains",w_windy_variant:"V\u0113jains",solar:"Saule",solar_station:"Saules stacija",solar_inverter:"Saules invertors",production:"Ra\u017Eo\u0161ana",battery:"Baterija",house:"M\u0101ja",to_grid:"Uz t\u012Bklu",from_grid:"No t\u012Bkla",today:"\u0160odien",this_month:"\u0160om\u0113nes",charging:"Uzl\u0101de",discharging:"Izl\u0101de",peak_power:"Maksimums",kw:"kW",kwh:"kWh",ui_settings:"Saskarnes iestat\u012Bjumi",language:"Valoda",theme:"T\u0113ma",light:"Gai\u0161\u0101",dark:"Tum\u0161\u0101",accent_color:"Akcenta kr\u0101sa",button_size:"Pogu izm\u0113rs",font_size:"Fonta izm\u0113rs",compact:"Kompaktais re\u017E\u012Bms",reset:"Atiestat\u012Bt",applies_to_all:"Attiecas uz vis\u0101m AlpicAir kart\u0113m \u0161aj\u0101 p\u0101rl\u016Bk\u0101",current:"Pa\u0161laik",target:"Uzst\u0101d\u012Bts",boiler:"Boileris",recuperator:"Rekuperators",recuperator_panel:"Rekuperatora panelis",air_conditioner:"Kondicionieris",heat_pump:"Siltums\u016Bknis",sensors:"Temperat\u016Bras",device_settings:"Ier\u012Bces iestat\u012Bjumi",settings:"Iestat\u012Bjumi",back:"Atpaka\u013C",menu:"Izv\u0113lne",weather:"Laikapst\u0101k\u013Ci",custom:"Sava poga",recuperation:"Rekuper\u0101cija",fan_speed:"Ventilatora \u0101trums",supply:"Piepl\u016Bde",exhaust:"Nos\u016Bce",off:"Izsl\u0113gts",on:"Iesl\u0113gts",building_protection:"\u0112kas aizsardz\u012Bba",economy:"Ekonomiskais",comfort:"Norm\u0101lais",boost:"Boost",outdoor:"\u0100r\u0101",indoor:"Iek\u0161telp\u0101s",supply_air:"Piepl\u016Bdes gaiss",extract_air:"Nos\u016Bces gaiss",night_cooling:"Nakts dzes\u0113\u0161ana",night_cooling_schedule:"Nakts dzes\u0113\u0161anas grafiks",power:"Baro\u0161ana",running:"Darbojas",standby:"Gaidst\u0101ve",target_temperature:"M\u0113r\u0137a temperat\u016Bra",heat:"Sild\u012B\u0161ana",cool:"Dzes\u0113\u0161ana",dry:"Sausin\u0101\u0161ana",fan_only:"Ventil\u0101cija",auto:"Auto",low:"Zems",medium:"Vid\u0113js",high:"Augsts",full_swing:"\u0160\u016Bpo\u0161ana",fixed:"Fiks\u0113ts",swing_vertical:"Vert. \u017Eal\u016Bzijas",swing_horizontal:"Horiz. \u017Eal\u016Bzijas",floor:"Gr\u012Bda",water:"\u016Adens",heating:"Apkure",hot_water:"Karstais \u016Bdens",heating_water:"Apkure + \u016Bdens",quick_heat:"\u0100tr\u0101 sild\u012B\u0161ana",quiet_mode:"Klusais re\u017E\u012Bms",disinfection:"Dezinfekcija",entity_not_found:"Objekts nav atrasts",date_time:"Datums un laiks",date:"Datums",time:"Laiks",sync_time:"Sinhroniz\u0113t ar Home Assistant",start_time:"S\u0101kums",stop_time:"Beigas",nc_extract_start:"Nos\u016Bces temp. startam",nc_extract_stop:"Nos\u016Bces temp. aptur\u0113\u0161anai",nc_outdoor_stop:"\u0100ra temp. aptur\u0113\u0161anai",nc_supply_setpoint:"Piepl\u016Bdes gaisa uzst\u0101d\u012Bjums"},Ve={en:lt,ru:qe,lv:We};function $(s,t,e){let i=L().language,o=t&&t.language&&t.language!=="auto"?t.language:i&&i!=="auto"?i:s&&s.language?s.language.split("-")[0]:"en";return(Ve[o]||lt)[e]??lt[e]??e}var ve=[["off",["off","\u0432\u044B\u043A\u043B","\u043E\u0442\u043A\u043B","izsl","stop"]],["building_protection",["building","protect","\u0437\u0430\u0449\u0438\u0442","\u0437\u0434\u0430\u043D","aizsardz","ekas","\u0113kas"]],["economy",["eco","\u044D\u043A\u043E\u043D\u043E\u043C","ekonom"]],["comfort",["comfort","normal","\u043A\u043E\u043C\u0444\u043E\u0440\u0442","\u043D\u043E\u0440\u043C\u0430\u043B","norm\u0101l"]],["boost",["boost","intens","\u0438\u043D\u0442\u0435\u043D\u0441","\u0442\u0443\u0440\u0431\u043E","turbo","maxim","\u043C\u0430\u043A\u0441"]],["heating_water",["heat+water","heating + water","\u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435 + \u0432\u043E\u0434\u0430","\u043D\u0430\u0433\u0440\u0435\u0432 + \u0432\u043E\u0434\u0430","apkure + \u016Bdens","both","combi"]],["hot_water",["hot water","dhw","boiler","\u0433\u043E\u0440\u044F\u0447","\u0431\u043E\u0439\u043B\u0435\u0440","karstais","\u016Bdens","udens"]],["heating",["heating","\u043E\u0442\u043E\u043F\u043B\u0435\u043D","\u043E\u0431\u043E\u0433\u0440\u0435\u0432","apkure"]],["quick_heat",["quick","fast","\u0431\u044B\u0441\u0442\u0440","\u0101tr\u0101","atra"]],["quiet_mode",["quiet","silent","night","\u0442\u0438\u0445","\u043A\u043B\u0443\u0441"]],["disinfection",["disinfect","legionella","\u0434\u0435\u0437\u0438\u043D\u0444","dezinf"]],["heat",["heat","\u043E\u0431\u043E\u0433\u0440\u0435\u0432","\u043D\u0430\u0433\u0440\u0435\u0432","sild"]],["cool",["cool","\u043E\u0445\u043B\u0430\u0436\u0434","dzes"]],["dry",["dry","\u043E\u0441\u0443\u0448","sausin"]],["fan_only",["fan_only","fan only","ventil","\u0432\u0435\u043D\u0442\u0438\u043B"]],["auto",["auto","\u0430\u0432\u0442\u043E"]],["full_swing",["swing","\u043A\u0430\u0447\u0430\u043D","\u0161\u016Bpo","supo"]],["fixed",["fixed","\u0444\u0438\u043A\u0441\u0438\u0440","hold","stop"]],["low",["low","min","\u043D\u0438\u0437\u043A","zem"]],["medium",["medium","mid","\u0441\u0440\u0435\u0434\u043D","vid"]],["high",["high","max","\u0432\u044B\u0441\u043E\u043A","augst"]],["on",["on","\u0432\u043A\u043B","iesl"]]];function ht(s,t,e){if(e==null||e==="")return null;let i=String(e),o=i.trim().toLowerCase().replace(/[\s-]+/g,"_");if(lt[o])return $(s,t,o);let a=i.trim().toLowerCase(),n=ve.find(([,l])=>l.some(p=>a.includes(p)));return n?$(s,t,n[0]):i}function xe(s){if(s==null||s==="")return null;let t=String(s).trim().toLowerCase(),e=t.replace(/[\s-]+/g,"_");if(lt[e])return e;let i=ve.find(([,o])=>o.some(a=>t.includes(a)));return i?i[0]:null}function Z(s,t,e={}){let i=new Event(t,{bubbles:!0,composed:!0,cancelable:!1});return i.detail=e,s.dispatchEvent(i),i}function A(s,t,e,i){if(!(!i||i.action==="none"))switch(i.action){case"more-info":{let o=i.entity||e;o&&Z(s,"hass-more-info",{entityId:o});break}case"toggle":{let o=i.entity||e;o&&t.callService("homeassistant","toggle",{entity_id:o});break}case"navigate":i.navigation_path&&(history.pushState(null,"",i.navigation_path),Z(window,"location-changed",{}));break;case"url":i.url_path&&window.open(i.url_path,i.new_tab===!1?"_self":"_blank");break;case"call-service":case"perform-action":{let o=i.perform_action||i.service;if(!o||!o.includes("."))return;let[a,n]=o.split(".",2);t.callService(a,n,i.data||i.service_data||{},i.target||void 0);break}case"fire-dom-event":Z(s,"ll-custom",i);break;default:break}}function zt(s,t,e=500){let i=null,o=!1,a=p=>{p.button!==void 0&&p.button!==0&&p.pointerType==="mouse"||(o=!1,i=window.setTimeout(()=>{o=!0,navigator.vibrate&&navigator.vibrate(30),t()},e))},n=p=>{i&&(clearTimeout(i),i=null),o||(p.preventDefault(),s()),o=!1},l=()=>{i&&(clearTimeout(i),i=null),o=!1};return{"@pointerdown":a,"@pointerup":n,"@pointerleave":l,"@pointercancel":l,"@contextmenu":p=>p.preventDefault()}}var x=class extends y{constructor(){super(...arguments);_(this,"_labels",{entity:"Entity (climate)",name:"Name",icon:"Icon",language:"Language",show_power:"Power button",show_dial:"Temperature dial",show_temp_slider:"Target temperature slider",show_modes:"Mode buttons",show_fan:"Fan speed selector",show_swing_vertical:"Vertical swing selector",show_swing_horizontal:"Horizontal swing selector",show_current_temperature:"Current temperature",default_hvac_mode:"HVAC mode on power on",button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",dial_size:"Dial size, px"});_(this,"computeLabel",e=>this._labels[e.name]||e.label||e.name)}setConfig(e){this._config={...e}}get schema(){return[]}_valueChanged(e){let i=e.detail.value;Z(this,"config-changed",{config:i})}render(){return!this.hass||!this._config?r:c`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this.schema}
        .computeLabel=${this.computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>`}};_(x,"properties",{hass:{},_config:{state:!0}}),_(x,"styles",tt`
    :host { display: block; }
    ha-form { display: block; }
  `);var v=s=>({type:"grid",name:"",schema:s.map(t=>({name:t,selector:{boolean:{}}}))}),h=(s,t)=>({name:s,selector:{entity:t?{domain:t}:{}}}),E={name:"language",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto (Home Assistant)"},{value:"en",label:"English"},{value:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{value:"lv",label:"Latvie\u0161u"}]}}},z={type:"grid",name:"",schema:[{name:"button_scale",selector:{number:{min:.8,max:2,step:.05,mode:"slider"}}},{name:"font_scale",selector:{number:{min:.8,max:2,step:.05,mode:"slider"}}}]};var Ut=class extends x{constructor(){super(...arguments);_(this,"_labels",{name:"Title",language:"Language",weather_entity:"Weather entity",show_date:"Show date",show_seconds:"Show seconds",time_format:"Time format",time_zone:"Time zone (e.g. Europe/Riga)",time_offset:"Time correction (minutes)",time_entity:"Time entity (optional)",show_weather:"Show weather",show_recuperator:"Show recuperator button",show_air_conditioner:"Show air conditioner button",show_heat_pump:"Show heat pump button",show_solar:"Show solar station button",show_custom:"Show custom button",show_menu:"Show menu button",show_labels:"Show button names",custom_name:"Custom button name",custom_icon:"Custom button icon",columns:"Buttons per row",recuperator_action:"Recuperator button action",air_conditioner_action:"Air conditioner button action",heat_pump_action:"Heat pump button action",solar_action:"Solar station button action",custom_action:"Custom button action",menu_action:"Menu button action",button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)"})}get schema(){return[{name:"name",selector:{text:{}}},E,h("weather_entity",["weather"]),v(["show_date","show_weather","show_seconds"]),{name:"time_format",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto"},{value:"24",label:"24 h"},{value:"12",label:"12 h (AM/PM)"}]}}},{name:"time_zone",selector:{text:{}}},{name:"time_offset",selector:{number:{min:-720,max:720,step:1,mode:"box"}}},h("time_entity",["sensor","input_datetime"]),v(["show_recuperator","show_air_conditioner","show_heat_pump"]),v(["show_solar","show_custom","show_menu"]),v(["show_labels"]),{type:"grid",name:"",schema:[{name:"custom_name",selector:{text:{}}},{name:"custom_icon",selector:{icon:{}}}]},{name:"columns",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto (2 rows)"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"}]}}},{name:"recuperator_action",selector:{ui_action:{}}},{name:"air_conditioner_action",selector:{ui_action:{}}},{name:"heat_pump_action",selector:{ui_action:{}}},{name:"solar_action",selector:{ui_action:{}}},{name:"custom_action",selector:{ui_action:{}}},{name:"menu_action",selector:{ui_action:{}}},z]}};customElements.define("alpicair-start-menu-card-editor",Ut);var Ke={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",exceptional:"mdi:alert-circle-outline",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant"},Ge=[{id:"recuperator",icon:"mdi:air-filter",show:"show_recuperator",action:"recuperator_action"},{id:"air_conditioner",icon:"mdi:air-conditioner",show:"show_air_conditioner",action:"air_conditioner_action"},{id:"heat_pump",icon:"mdi:heat-pump",show:"show_heat_pump",action:"heat_pump_action"},{id:"solar_station",icon:"mdi:solar-power-variant",show:"show_solar",action:"solar_action"},{id:"custom",icon:"mdi:star-outline",show:"show_custom",action:"custom_action",nameKey:"custom_name",iconKey:"custom_icon"},{id:"menu",icon:"mdi:menu",show:"show_menu",action:"menu_action",accent:!0}],pt=class extends S(y){static getConfigElement(){return document.createElement("alpicair-start-menu-card-editor")}static getStubConfig(t){return{type:"custom:alpicair-start-menu-card",weather_entity:Object.keys(t.states).find(i=>i.startsWith("weather."))||""}}setConfig(t){this._config={show_date:!0,show_seconds:!1,time_format:"auto",time_zone:"",time_offset:0,time_entity:"",show_weather:!0,show_recuperator:!0,show_air_conditioner:!0,show_heat_pump:!0,show_solar:!0,show_custom:!1,show_menu:!0,show_labels:!0,custom_name:"",custom_icon:"mdi:star-outline",columns:"auto",language:"auto",recuperator_action:{action:"none"},air_conditioner_action:{action:"none"},heat_pump_action:{action:"none"},solar_action:{action:"none"},custom_action:{action:"none"},menu_action:{action:"none"},...t},this._now=new Date}connectedCallback(){super.connectedCallback(),this._clockTimer=window.setInterval(()=>{this._now=new Date},1e3)}disconnectedCallback(){window.clearInterval(this._clockTimer),super.disconnectedCallback()}getCardSize(){return 4}_t(t){return $(this.hass,this._config,t)}_locale(){let t=this._config.language,e=L().language,i=t&&t!=="auto"?t:e&&e!=="auto"?e:this.hass?.language||"en";return i==="ru"?"ru-RU":i==="lv"?"lv-LV":i==="en"?"en-GB":i}_act(t){A(this,this.hass,null,t)}_clock(){let t=this._now||new Date,e=this._config.time_entity&&this.hass.states[this._config.time_entity];if(e){let o=e.attributes?.timestamp??e.state,a=/^\d{1,2}:\d{2}(:\d{2})?$/.test(String(o))?new Date(`${t.toISOString().slice(0,10)}T${String(o).padStart(5,"0")}`):new Date(o);Number.isNaN(a.getTime())||(t=a)}let i=Number(this._config.time_offset)||0;return i?new Date(t.getTime()+i*6e4):t}_timeOptions(){let t=this._config.time_format,e={hour:"2-digit",minute:"2-digit"};this._config.show_seconds&&(e.second="2-digit"),t==="12"?(e.hour12=!0,e.hour="numeric"):t==="24"&&(e.hourCycle="h23",e.hour12=!1);let i=(this._config.time_zone||"").trim();return i&&(e.timeZone=i),e}render(){if(!this.hass||!this._config)return r;let t=this._clock(),e=this._locale(),i=this._config.weather_entity?this.hass.states[this._config.weather_entity]:null,o=i?.attributes?.temperature,a=i?.attributes?.temperature_unit||this.hass.config?.unit_system?.temperature||"\xB0C",n=i?this._t(`w_${String(i.state).replace(/-/g,"_")}`)!==`w_${String(i.state).replace(/-/g,"_")}`?this._t(`w_${String(i.state).replace(/-/g,"_")}`):i.state:this._t("weather"),l=Ge.filter(d=>this._config[d.show]!==!1),p=this._config.show_labels===!1;return c`<ha-card class="start-menu-card">
      <div class="start-top">
        <div class="start-time-block">
          ${this._config.name?c`<div class="start-name">${this._config.name}</div>`:r}
          <time class="start-time">${new Intl.DateTimeFormat(e,this._timeOptions()).format(t)}</time>
          ${this._config.show_date!==!1?c`<div class="start-date">${new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"long",...this._config.time_zone?{timeZone:this._config.time_zone}:{}}).format(t)}</div>`:r}
        </div>
        ${this._config.show_weather!==!1?c`<div class="start-weather">
              <ha-icon icon=${Ke[i?.state]||"mdi:weather-partly-cloudy"}></ha-icon>
              <span class="start-weather-temp">${o!=null?`${o}${a}`:"\u2014"}</span>
              <span class="start-weather-state">${n}</span>
            </div>`:r}
      </div>

      <div class="start-actions ${p?"icons-only":""}">
        ${(()=>{let d=this._config.columns&&this._config.columns!=="auto"?Number(this._config.columns):Math.max(1,Math.ceil(l.length/2)),m=[];for(let u=0;u<l.length;u+=d)m.push(l.slice(u,u+d));return m.map(u=>c`
            <div class="start-row">
              ${u.map(f=>c`
                <button class="start-action ${f.accent?"menu":""} ${p?"icon-only":""}"
                  style=${`flex:0 0 calc(${(100/u.length).toFixed(4)}% - var(--alpic-gap, 8px) * ${(u.length-1)/u.length})`}
                  @click=${()=>this._act(this._config[f.action])}>
                  <ha-icon icon=${f.iconKey&&this._config[f.iconKey]||f.icon}></ha-icon>
                  ${p?r:c`
                    <span>${f.nameKey&&this._config[f.nameKey]||this._t(f.id)}</span>
                    <ha-icon class="start-chevron" icon="mdi:chevron-right"></ha-icon>`}
                </button>`)}
            </div>`)})()}
      </div>

    </ha-card>`}};_(pt,"properties",{hass:{},_config:{state:!0},_now:{state:!0}}),_(pt,"styles",k);customElements.define("alpicair-start-menu-card",pt);var It=class extends x{constructor(){super(...arguments);_(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",mode_entity:"Mode entity (select / fan / climate)",power_entity:"Power entity (switch / fan)",recuperation_entity:"Recuperation efficiency sensor (%)",fan_speed_entity:"Fan speed sensor (%)",default_mode:"Mode on power on",show_power:"Power button",show_recuperation:"Recuperation bar",show_fan_speed:"Fan speed bar",show_building_protection:"Button: building protection",show_economy:"Button: economy",show_comfort:"Button: comfort",show_boost:"Button: boost",show_settings_button:"Settings button",settings_button_label:"Settings button label",settings_icon:"Settings button icon",settings_entity:"Settings button target entity",hold_time:"Long press duration (ms)",tap_action:"Short press action",hold_action:"Long press action",option_building_protection:"Option: building protection",option_economy:"Option: economy",option_comfort:"Option: comfort",option_boost:"Option: boost"})}get _entityOptions(){let e=this._config?.mode_entity,i=e&&this.hass?.states?.[e];if(!i)return[];let o=i.attributes||{};return o.options||o.preset_modes||o.hvac_modes||[]}_optionField(e){return{name:e,selector:{select:{mode:"dropdown",custom_value:!0,options:this._entityOptions}}}}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},E,h("mode_entity",["select","input_select","fan","climate"]),h("power_entity",["switch","fan","input_boolean","climate"]),{type:"grid",name:"",schema:[h("recuperation_entity",["sensor","number","input_number"]),h("fan_speed_entity",["sensor","number","input_number"])]},{type:"grid",name:"",schema:[this._optionField("option_building_protection"),this._optionField("option_economy"),this._optionField("option_comfort"),this._optionField("option_boost")]},{name:"default_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["building_protection","economy","comfort","boost"]}}},v(["show_power","show_recuperation","show_fan_speed","show_building_protection","show_economy","show_comfort","show_boost","show_settings_button"]),{type:"grid",name:"",schema:[{name:"settings_button_label",selector:{text:{}}},{name:"settings_icon",selector:{icon:{}}}]},h("settings_entity"),{name:"hold_time",selector:{number:{min:200,max:2e3,step:50,mode:"box",unit_of_measurement:"ms"}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},z]}};customElements.define("alpicair-recuperator-card-editor",It);var Et=[{id:"building_protection",icon:"mdi:shield-check",cfg:"show_building_protection",kw:["building","protect","\u0437\u0430\u0449\u0438\u0442","\u0437\u0434\u0430\u043D","aizsardz","\u0113kas","ekas"]},{id:"economy",icon:"mdi:leaf",cfg:"show_economy",kw:["eco","econom","\u044D\u043A\u043E\u043D\u043E\u043C","ekonom"]},{id:"comfort",icon:"mdi:sofa",cfg:"show_comfort",kw:["comfort","normal","\u043A\u043E\u043C\u0444\u043E\u0440\u0442","\u043D\u043E\u0440\u043C\u0430\u043B","norm\u0101l","normal"]},{id:"boost",icon:"mdi:rocket-launch",cfg:"show_boost",tone:"boost",kw:["boost","intens","\u0438\u043D\u0442\u0435\u043D\u0441","\u0442\u0443\u0440\u0431\u043E","turbo","max","\u043C\u0430\u043A\u0441","\u043E\u0431\u0434\u0443\u0432"]}],jt=s=>String(s??"").trim().toLowerCase(),dt=class extends S(y){static getConfigElement(){return document.createElement("alpicair-recuperator-card-editor")}static getStubConfig(){return{type:"custom:alpicair-recuperator-card",mode_entity:"",power_entity:""}}setConfig(t){this._config={show_power:!0,show_recuperation:!0,show_fan_speed:!0,show_building_protection:!0,show_economy:!0,show_comfort:!0,show_boost:!0,show_settings_button:!0,settings_button_label:"",settings_icon:"mdi:cog",hold_time:500,tap_action:{action:"more-info"},hold_action:{action:"none"},language:"auto",...t}}getCardSize(){return 5}_t(t){return $(this.hass,this._config,t)}_num(t){let e=t&&this.hass.states[t],i=e?Number(e.state):NaN;return Number.isFinite(i)?i:null}get _stateObj(){return this._config.mode_entity&&this.hass.states[this._config.mode_entity]||null}get _options(){let t=this._stateObj;if(!t)return[];let e=t.attributes||{};return e.options||e.preset_modes||e.hvac_modes||[]}get _mode(){let t=this._stateObj;return t?t.state:null}_optionFor(t){let e=this._config[`option_${t}`];if(e)return e;let i=this._options;if(!i.length)return t;let o=Et.find(n=>n.id===t);if(o){let n=i.find(l=>o.kw.some(p=>jt(l).includes(p)));if(n)return n}let a=Et.findIndex(n=>n.id===t);return i[a]??t}_isActive(t){let e=jt(this._mode);return e?e===jt(this._optionFor(t))||e===t:!1}get _on(){if(this._config.power_entity){let t=this.hass.states[this._config.power_entity];return t?!["off","unavailable","unknown"].includes(t.state):!1}return this._mode&&this._mode!=="off"}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=this._optionFor(t),o=e.split(".")[0];o==="select"||o==="input_select"?this.hass.callService(o,"select_option",{entity_id:e,option:i}):o==="fan"?this.hass.callService("fan","set_preset_mode",{entity_id:e,preset_mode:i}):o==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:i})}_togglePower(){let t=this._config.power_entity;t?this.hass.callService("homeassistant","toggle",{entity_id:t}):this._config.mode_entity&&this._setMode(this._on?"off":this._config.default_mode||"comfort")}_down(t){t.pointerType==="mouse"&&t.button!==0||(this._held=!1,this._timer=window.setTimeout(()=>{this._held=!0,navigator.vibrate&&navigator.vibrate(30),A(this,this.hass,this._config.settings_entity||this._config.mode_entity,this._config.hold_action)},Number(this._config.hold_time)||500))}_up(t){this._timer&&(clearTimeout(this._timer),this._timer=null),this._held||(t.preventDefault(),A(this,this.hass,this._config.settings_entity||this._config.mode_entity,this._config.tap_action)),this._held=!1}_cancel(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._held=!1}render(){if(!this.hass||!this._config)return r;let t=this._on,e=this._mode,i=Et.find(l=>this._isActive(l.id))?.id||null,o=this._num(this._config.recuperation_entity),a=this._num(this._config.fan_speed_entity),n=Et.filter(l=>this._config[l.cfg]!==!1);return c`
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

        ${this._config.show_recuperation&&o!==null?this._bar(this._t("recuperation"),t?o:0,"perf"):r}
        ${this._config.show_fan_speed&&a!==null?this._bar(this._t("fan_speed"),t?a:0,i==="boost"?"boost":""):r}

        ${n.length?c`<div class="grid c2">
              ${n.map(l=>c`
                <button class="mode ${this._isActive(l.id)?"active":""} ${l.tone||""}"
                  @click=${()=>this._setMode(l.id)}>
                  <ha-icon icon=${l.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(l.id)}
                </button>`)}
            </div>`:r}

        ${this._config.show_settings_button?c`<button class="plain" style="width:100%"
              @pointerdown=${this._down} @pointerup=${this._up}
              @pointerleave=${this._cancel} @pointercancel=${this._cancel}
              @contextmenu=${l=>l.preventDefault()}>
              <ha-icon icon=${this._config.settings_icon||"mdi:cog"} style="--mdc-icon-size:18px"></ha-icon>
              ${this._config.settings_button_label||this._t("settings")}
            </button>`:r}
      </ha-card>`}_bar(t,e,i){let o=Math.max(0,Math.min(100,Number(e)||0));return c`
      <div class="bar-wrap">
        <div class="bar-top"><span>${t}</span><span class="val">${Math.round(o)}%</span></div>
        <div class="bar ${i}"><span style="width:${o}%"></span></div>
      </div>`}};_(dt,"properties",{hass:{},_config:{state:!0}}),_(dt,"styles",k);customElements.define("alpicair-recuperator-card",dt);var R=s=>class extends s{connectedCallback(){super.connectedCallback(),this._panelOutside=t=>{this._hasOpenPanel&&!t.composedPath().includes(this)&&this._closePanels()},document.addEventListener("pointerdown",this._panelOutside,!0)}disconnectedCallback(){document.removeEventListener("pointerdown",this._panelOutside,!0),super.disconnectedCallback()}get _hasOpenPanel(){return!1}_closePanels(){}_navigateBack(){let t=this._config||{},e=t.back_action&&t.back_action.action!=="none"?t.back_action:t.back_path?{action:"navigate",navigation_path:t.back_path}:null;e?A(this,this.hass,null,e):window.history.length>1&&window.history.back()}};function U(s){return c`<button class="panel-backdrop" aria-label="Close menu"
    @click=${()=>s._closePanels()}></button>`}function I(s,t={}){let e=n=>s._t(n),i=!!s._panelOn,o=t.power!==!1,a=s._config.title??s._config.name??(s._defaultTitle?e(s._defaultTitle):"");return c`<div class="panel-header">
    <button class="ph-btn back" title=${e("back")} aria-label=${e("back")}
      @click=${()=>s._navigateBack()}>
      <ha-icon icon="mdi:chevron-left"></ha-icon>
    </button>
    <div class="ph-title">${a}</div>
    ${o?c`<button class="ph-btn power ${i?"on":""}" title=${e("power")} aria-label=${e("power")}
          @click=${()=>s._togglePower()}>
          <ha-icon icon="mdi:power"></ha-icon>
        </button>`:c`<span class="ph-btn" style="visibility:hidden"></span>`}
  </div>`}function j(s,t,e){return c`<div class="ring-overlay" @click=${i=>{i.target===i.currentTarget&&t()}}>
    ${e}
  </div>`}var Ht=class extends x{constructor(){super(...arguments);_(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",mode_entity:"Mode entity (select / fan / climate)",power_entity:"Power entity (switch / fan)",fan_speed_entity:"Fan speed sensor (%)",recuperation_entity:"Recuperation efficiency sensor (%)",indoor_entity:"Indoor temperature sensor",outdoor_entity:"Outdoor temperature sensor",supply_entity:"Supply air temperature sensor",extract_entity:"Extract air temperature sensor",target_entity:"Target temperature entity (number / climate)",target_min:"Target minimum (\xB0C)",target_max:"Target maximum (\xB0C)",ring_size:"Ring size (px)",ring_thickness:"Ring thickness (px)",target_control_width:"Target temperature control width (px)",back_path:"Back navigation path (e.g. /lovelace/home)",back_action:"Back button action",default_mode:"Mode on power on",show_header:"Show header (back + power)",show_target:"Show target temperature",show_indoor:"Show indoor temperature",show_recuperation:"Show recuperation",show_outdoor:"Show outdoor temperature (on expand)",show_supply:"Show supply air temperature (on expand)",show_extract:"Show extract air temperature (on expand)",show_mode_picker:"Mode picker on ring tap",option_building_protection:"Option: building protection",option_economy:"Option: economy",option_comfort:"Option: comfort",option_boost:"Option: boost"})}get _entityOptions(){let e=this._config?.mode_entity,i=e&&this.hass?.states?.[e];if(!i)return[];let o=i.attributes||{};return o.options||o.preset_modes||o.hvac_modes||[]}_optionField(e){return{name:e,selector:{select:{mode:"dropdown",custom_value:!0,options:this._entityOptions}}}}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},E,h("mode_entity",["select","input_select","fan","climate"]),h("power_entity",["switch","fan","input_boolean","climate"]),{type:"grid",name:"",schema:[h("fan_speed_entity",["sensor","number","input_number"]),h("recuperation_entity",["sensor","number","input_number"])]},{type:"grid",name:"",schema:[h("indoor_entity",["sensor"]),h("target_entity",["number","input_number","climate"])]},{type:"grid",name:"",schema:[h("outdoor_entity",["sensor"]),h("supply_entity",["sensor"]),h("extract_entity",["sensor"])]},{type:"grid",name:"",schema:[this._optionField("option_building_protection"),this._optionField("option_economy"),this._optionField("option_comfort"),this._optionField("option_boost")]},{name:"default_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["building_protection","economy","comfort","boost"]}}},{type:"grid",name:"",schema:[{name:"ring_size",selector:{number:{min:140,max:480,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"ring_thickness",selector:{number:{min:6,max:40,step:1,mode:"slider",unit_of_measurement:"px"}}}]},{name:"target_control_width",selector:{number:{min:160,max:480,step:10,mode:"slider",unit_of_measurement:"px"}}},{type:"grid",name:"",schema:[{name:"target_min",selector:{number:{min:5,max:30,step:.5,mode:"box",unit_of_measurement:"\xB0C"}}},{name:"target_max",selector:{number:{min:15,max:40,step:.5,mode:"box",unit_of_measurement:"\xB0C"}}}]},{name:"back_path",selector:{text:{}}},{name:"back_action",selector:{ui_action:{}}},v(["show_header","show_target","show_indoor","show_recuperation","show_outdoor","show_supply","show_extract","show_mode_picker"]),z]}};customElements.define("alpicair-recuperator-panel-card-editor",Ht);var H=[{id:"building_protection",icon:"mdi:shield-check",kw:["building","protect","\u0437\u0430\u0449\u0438\u0442","\u0437\u0434\u0430\u043D","aizsardz","\u0113kas","ekas"]},{id:"economy",icon:"mdi:leaf",kw:["eco","econom","\u044D\u043A\u043E\u043D\u043E\u043C","ekonom"]},{id:"comfort",icon:"mdi:sofa",kw:["comfort","normal","\u043A\u043E\u043C\u0444\u043E\u0440\u0442","\u043D\u043E\u0440\u043C\u0430\u043B","norm\u0101l","normal"]},{id:"boost",icon:"mdi:rocket-launch",tone:"boost",kw:["boost","intens","\u0438\u043D\u0442\u0435\u043D\u0441","\u0442\u0443\u0440\u0431\u043E","turbo","max","\u043C\u0430\u043A\u0441","\u043E\u0431\u0434\u0443\u0432"]}],Dt=s=>String(s??"").trim().toLowerCase(),Ye={building_protection:15,economy:35,comfort:55,boost:100},_t=class extends R(S(y)){static getConfigElement(){return document.createElement("alpicair-recuperator-panel-card-editor")}static getStubConfig(){return{type:"custom:alpicair-recuperator-panel-card",mode_entity:""}}setConfig(t){this._config={ring_size:260,ring_thickness:18,target_control_width:260,show_header:!0,show_target:!0,show_indoor:!0,show_recuperation:!0,show_outdoor:!0,show_supply:!0,show_extract:!0,show_mode_picker:!0,show_title:!0,language:"auto",...t}}get _defaultTitle(){return"recuperator"}getCardSize(){return 5}_t(t){return $(this.hass,this._config,t)}_svgColor(t,e){let i=getComputedStyle(this).getPropertyValue(t).trim();return i&&!i.includes("var(")?i:e}_num(t){let e=t&&this.hass.states[t],i=e?Number(e.state):NaN;return Number.isFinite(i)?i:null}get _stateObj(){return this._config.mode_entity&&this.hass.states[this._config.mode_entity]||null}get _options(){let t=this._stateObj;if(!t)return[];let e=t.attributes||{};return e.options||e.preset_modes||e.hvac_modes||[]}get _mode(){let t=this._stateObj;return t?t.state:null}_optionFor(t){let e=this._config[`option_${t}`];if(e)return e;let i=this._options;if(!i.length)return t;let o=H.find(n=>n.id===t);if(o){let n=i.find(l=>o.kw.some(p=>Dt(l).includes(p)));if(n)return n}let a=H.findIndex(n=>n.id===t);return i[a]??t}_isActive(t){let e=Dt(this._mode);if(!e)return!1;if(e===Dt(this._optionFor(t))||e===t)return!0;let i=H.find(a=>a.id===t),o=H.find(a=>a.kw.some(n=>e.includes(n)));return!!i&&o===i}get _activeId(){return H.find(t=>this._isActive(t.id))?.id||null}get _speed(){let t=this._num(this._config.fan_speed_entity);if(t!==null)return Math.max(0,Math.min(100,t));let e=this._activeId;return e?Ye[e]??0:0}get _recup(){return this._num(this._config.recuperation_entity)??0}get _panelOn(){if(this._config.power_entity){let t=this.hass.states[this._config.power_entity];return t?!["off","unavailable","unknown"].includes(t.state):!1}return!!this._mode&&this._mode!=="off"}_togglePower(){let t=this._config.power_entity;t?this.hass.callService("homeassistant","toggle",{entity_id:t}):this._config.mode_entity&&this._setMode(this._panelOn?"off":this._config.default_mode||"comfort")}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=this._optionFor(t),o=e.split(".")[0];o==="select"||o==="input_select"?this.hass.callService(o,"select_option",{entity_id:e,option:i}):o==="fan"?this.hass.callService("fan","set_preset_mode",{entity_id:e,preset_mode:i}):o==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:i}),this._open=!1}get _target(){let t=this._config.target_entity;if(!t)return null;let e=this.hass.states[t],i=e?Number(e.state):NaN;return Number.isFinite(i)?i:null}_setTarget(t){let e=this._config.target_entity;if(!e)return;let i=e.split(".")[0],o=Math.min(this._config.target_max??30,Math.max(this._config.target_min??15,t));i==="number"||i==="input_number"?this.hass.callService(i,"set_value",{entity_id:e,value:o}):i==="climate"&&this.hass.callService("climate","set_temperature",{entity_id:e,temperature:o})}get _hasOpenPanel(){return this._open||this._editingTarget||this._showTemps}_closePanels(){this._open=!1,this._editingTarget=!1,this._showTemps=!1}render(){if(!this.hass||!this._config)return r;let t=Number(this._config.ring_size)||260,e=Number(this._config.ring_thickness)||18,i=(t-e)/2-2,o=2*Math.PI*i,a=this._speed,n=this._activeId,l=(H.find(m=>m.id===n)||H[2]).icon,p=n==="boost"?this._svgColor("--alp-boost","#ff9800"):n?this._svgColor("--primary-color","#03a9f4"):this._svgColor("--disabled-text-color","#9e9e9e"),d=this._svgColor("--secondary-background-color","#e5e7eb");return c`
      <ha-card class="panel-card">
        ${this._hasOpenPanel?U(this):r}
        ${this._config.show_header!==!1?I(this):r}

        <div class="ring-wrap" style=${`width:${t}px;height:${t}px;--alp-ring-inset:${e+10}px`}>
          <svg width=${t} height=${t} class="ring" style="transform:rotate(-90deg)">
            ${C`<circle cx=${t/2} cy=${t/2} r=${i} fill="none"
              stroke=${d} stroke-width=${e} stroke-linecap="round" />`}
            ${C`<circle cx=${t/2} cy=${t/2} r=${i} fill="none"
              stroke-width=${e} stroke-linecap="round"
              stroke-dasharray=${o} stroke-dashoffset=${o*(1-a/100)}
              stroke=${p} style="transition:stroke-dashoffset .5s, stroke .3s" />`}
          </svg>

          <button class="ring-center" @click=${()=>this._open=!this._open}>
            <ha-icon icon=${l} style="--mdc-icon-size:28px"></ha-icon>
            <span class="rc-mode">${n?this._t(n):ht(this.hass,this._config,this._mode)||this._t("off")}</span>
            <span class="rc-pct">${Math.round(a)}%</span>
          </button>

          ${this._open&&this._config.show_mode_picker?j(this,()=>this._open=!1,c`
                <div class="ring-overlay-grid">
                  ${H.map(m=>c`
                    <button class="mode ${this._isActive(m.id)?"active":""} ${m.tone||""}"
                      @click=${()=>this._setMode(m.id)}>
                      <ha-icon icon=${m.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(m.id)}
                    </button>`)}
                </div>`):r}
        </div>

        <div class="tilezone">
          <div class="grid c3 ring-stats ${this._editingTarget||this._showTemps?"dimmed":""}">
            ${this._config.show_target?c`<button class="ring-stat ${this._editingTarget?"sel":""}"
                  @click=${()=>{this._editingTarget=!this._editingTarget,this._showTemps=!1}}>
                  <ha-icon icon="mdi:target" style="--mdc-icon-size:18px"></ha-icon>
                  <span class="rs-val">${this._target!==null?this._target.toFixed(1)+"\xB0":"\u2014"}</span>
                </button>`:r}
            ${this._config.show_indoor?c`<button class="ring-stat ${this._showTemps?"sel heat":""}"
                  @click=${()=>{this._showTemps=!this._showTemps,this._editingTarget=!1}}>
                  <ha-icon icon="mdi:home-thermometer" style="--mdc-icon-size:18px"></ha-icon>
                  <span class="rs-val">${this._num(this._config.indoor_entity)!==null?this._num(this._config.indoor_entity).toFixed(1)+"\xB0":"\u2014"}</span>
                </button>`:r}
            ${this._config.show_recuperation?c`<div class="ring-stat">
                  <ha-icon icon="mdi:recycle" style="--mdc-icon-size:18px"></ha-icon>
                  <span class="rs-val">${Math.round(this._recup)}%</span>
                </div>`:r}
          </div>

          ${this._editingTarget&&this._target!==null?c`<div class="ring-stepper floating" style=${`--alp-target-control-width:${Math.max(160,Number(this._config.target_control_width)||260)}px`}>
                <button class="stepbtn" @click=${()=>this._setTarget(this._target-.5)}>−</button>
                <span class="rs-target">${this._target.toFixed(1)}°C</span>
                <button class="stepbtn" @click=${()=>this._setTarget(this._target+.5)}>+</button>
              </div>`:r}

          ${this._showTemps?c`<div class="grid c3 ring-mini floating">
                ${this._mini("mdi:snowflake",this._num(this._config.outdoor_entity),"cool")}
                ${this._mini("mdi:arrow-down",this._num(this._config.supply_entity),"heat")}
                ${this._mini("mdi:arrow-up",this._num(this._config.extract_entity),"heat")}
              </div>`:r}
        </div>


      </ha-card>`}_mini(t,e,i){return c`<div class="ring-stat">
      <ha-icon icon=${t} style="--mdc-icon-size:18px"></ha-icon>
      <span class="rs-val">${e!==null?e.toFixed(1)+"\xB0":"\u2014"}</span>
    </div>`}};_(_t,"properties",{hass:{},_config:{state:!0},_open:{state:!0},_editingTarget:{state:!0},_showTemps:{state:!0}}),_(_t,"styles",k);customElements.define("alpicair-recuperator-panel-card",_t);var qt=class extends x{constructor(){super(...arguments);_(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",entity:"Climate entity",default_hvac_mode:"HVAC mode on power on",ring_size:"Ring size (px)",ring_thickness:"Ring thickness (px)",back_path:"Back navigation path (e.g. /lovelace/home)",back_action:"Back button action",show_power:"Show header (back + power)",show_mode:"Show mode tile",show_fan:"Show fan speed tile",show_swing_vertical:"Show vertical swing tile",show_swing_horizontal:"Show horizontal swing tile",show_current_temperature:"Show current temperature"})}get schema(){return[h("entity","climate"),{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},E,{name:"default_hvac_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["auto","heat_cool","cool","heat","dry","fan_only"]}}},{type:"grid",name:"",schema:[{name:"ring_size",selector:{number:{min:140,max:480,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"ring_thickness",selector:{number:{min:6,max:40,step:1,mode:"slider",unit_of_measurement:"px"}}}]},{name:"back_path",selector:{text:{}}},{name:"back_action",selector:{ui_action:{}}},v(["show_power","show_mode","show_fan","show_swing_vertical","show_swing_horizontal","show_current_temperature"]),z]}};customElements.define("alpicair-ac-panel-card-editor",qt);var Qe={off:"mdi:power",fan_only:"mdi:fan",dry:"mdi:water-percent",cool:"mdi:snowflake",heat:"mdi:fire",heat_cool:"mdi:autorenew",auto:"mdi:autorenew"},$e={off:"off",fan_only:"fan_only",dry:"dry",cool:"cool",heat:"heat",heat_cool:"auto",auto:"auto"},ke="mdi:arrow-up-down",Se="mdi:arrow-left-right",ut=class extends R(S(y)){static getConfigElement(){return document.createElement("alpicair-ac-panel-card-editor")}static getStubConfig(t){return{type:"custom:alpicair-ac-panel-card",entity:Object.keys(t.states).find(i=>i.startsWith("climate."))||""}}setConfig(t){if(!t.entity||!t.entity.startsWith("climate."))throw new Error("An entity of domain `climate` is required");this._config={show_power:!0,show_mode:!0,show_fan:!0,show_swing_vertical:!0,show_swing_horizontal:!0,show_current_temperature:!0,ring_size:260,ring_thickness:18,language:"auto",...t}}get _defaultTitle(){return"air_conditioner"}getCardSize(){return 6}_t(t){return $(this.hass,this._config,t)}_svgColor(t,e){let i=getComputedStyle(this).getPropertyValue(t).trim();return i&&!i.includes("var(")?i:e}get _stateObj(){return this.hass&&this.hass.states[this._config.entity]}_modeLabel(t){return $e[t]?this._t($e[t]):ht(this.hass,this._config,t)||t}_opt(t){return ht(this.hass,this._config,t)||"\u2014"}_call(t,e){this.hass.callService("climate",t,{entity_id:this._config.entity,...e})}get _panelOn(){let t=this._stateObj;return!!t&&t.state!=="off"&&t.state!=="unavailable"&&t.state!=="unknown"}_togglePower(){let t=this._stateObj;if(t)if(t.state==="off"){let e=this._config.default_hvac_mode||(t.attributes.hvac_modes||[]).find(i=>i!=="off")||"auto";this._call("set_hvac_mode",{hvac_mode:e})}else this._call("set_hvac_mode",{hvac_mode:"off"})}get _target(){return this._pending??this._stateObj?.attributes?.temperature}_setTarget(t){let e=this._stateObj?.attributes||{},i=e.min_temp??16,o=e.max_temp??30,a=Math.min(o,Math.max(i,t));this._pending=a,clearTimeout(this._d),this._d=setTimeout(()=>{this._call("set_temperature",{temperature:a}),this._pending=void 0},400)}get _hasOpenPanel(){return this._sheet!=null}_closePanels(){this._sheet=null}_toggle(t){this._sheet=this._sheet===t?null:t}render(){if(!this.hass||!this._config)return r;let t=this._stateObj;if(!t)return c`<ha-card><div class="warn">${this._t("entity_not_found")}: ${this._config.entity}</div></ha-card>`;let e=t.attributes||{},i=this._panelOn,o=e.min_temp??16,a=e.max_temp??30,n=e.target_temp_step??.5,l=this._target??o,p=Math.min(1,Math.max(0,(l-o)/(a-o))),d=Number(this._config.ring_size)||260,m=Number(this._config.ring_thickness)||18,u=(d-m)/2-2,f=2*Math.PI*u,g=i?t.state==="cool"?this._svgColor("--alp-cool","#039be5"):t.state==="heat"?this._svgColor("--alp-heat","#e74c3c"):this._svgColor("--primary-color","#03a9f4"):this._svgColor("--disabled-text-color","#9e9e9e"),b=this._svgColor("--secondary-background-color","#e5e7eb"),Y=e.current_temperature,T=[];return this._config.show_mode&&T.push({id:"mode",icon:"mdi:tune",value:i?this._modeLabel(t.state):this._t("off"),label:this._t("settings")}),this._config.show_fan&&e.fan_modes&&T.push({id:"fan",icon:"mdi:fan",value:this._opt(e.fan_mode),label:this._t("fan_speed")}),this._config.show_swing_vertical&&e.swing_modes&&T.push({id:"swing_v",icon:ke,value:this._opt(e.swing_mode),label:this._t("swing_vertical")}),this._config.show_swing_horizontal&&e.swing_horizontal_modes&&T.push({id:"swing_h",icon:Se,value:this._opt(e.swing_horizontal_mode),label:this._t("swing_horizontal")}),c`
      <ha-card class="panel-card">
        ${this._sheet?U(this):r}
        ${this._config.show_power!==!1||this._config.back_path||this._config.back_action?I(this):r}

        <div class="ring-wrap" style=${`width:${d}px;height:${d}px;--alp-ring-inset:${m+10}px`}>
          <svg width=${d} height=${d} class="ring" style="transform:rotate(-90deg)">
            ${C`<circle cx=${d/2} cy=${d/2} r=${u} fill="none"
              stroke=${b} stroke-width=${m} stroke-linecap="round" />`}
            ${C`<circle cx=${d/2} cy=${d/2} r=${u} fill="none"
              stroke-width=${m} stroke-linecap="round"
              stroke-dasharray=${f} stroke-dashoffset=${f*(1-(i?p:0))}
              stroke=${g} style="transition:stroke-dashoffset .5s, stroke .3s" />`}
          </svg>

          <button class="ring-center" @click=${()=>this._toggle("temp")}>
            <span class="rc-cap">${this._t("target_temperature")}</span>
            <span class="rc-target">${Number(l).toFixed(n<1?1:0)}°</span>
            <span class="rc-sub">${this._config.show_current_temperature&&Y!=null?`${this._t("current")} ${Y}\xB0 \xB7 `:""}${i?this._modeLabel(t.state):this._t("off")}</span>
          </button>

          ${this._sheet==="temp"?j(this,()=>this._sheet=null,c`
                <div class="ring-temp-edit">
                  <button class="stepbtn round" @click=${()=>this._setTarget(Number(l)-n)}>−</button>
                  <span class="rte-val">${Number(l).toFixed(n<1?1:0)}°</span>
                  <button class="stepbtn round" @click=${()=>this._setTarget(Number(l)+n)}>+</button>
                </div>`):r}
        </div>

        ${T.length?c`<div class="tilezone">
              <div class="grid c${Math.min(4,T.length)} ring-tiles ${this._sheet&&this._sheet!=="temp"?"dimmed":""}">
                ${T.map(w=>c`
                  <button class="tile ${this._sheet===w.id?"sel":""}" @click=${()=>this._toggle(w.id)}>
                    <span class="tile-icon"><ha-icon icon=${w.icon} style="--mdc-icon-size:18px"></ha-icon></span>
                    <span class="tile-val">${w.value}</span>
                  </button>`)}
              </div>
              ${this._sheet==="mode"?this._optionRow((e.hvac_modes||[]).filter(w=>w!=="off"),w=>this._call("set_hvac_mode",{hvac_mode:w}),w=>t.state===w,w=>this._modeLabel(w),w=>Qe[w]||"mdi:thermostat"):r}
              ${this._sheet==="fan"?this._optionRow(e.fan_modes||[],w=>this._call("set_fan_mode",{fan_mode:w}),w=>e.fan_mode===w,w=>this._opt(w),()=>"mdi:fan"):r}
              ${this._sheet==="swing_v"?this._optionRow(e.swing_modes||[],w=>this._call("set_swing_mode",{swing_mode:w}),w=>e.swing_mode===w,w=>this._opt(w),()=>ke):r}
              ${this._sheet==="swing_h"?this._optionRow(e.swing_horizontal_modes||[],w=>this._call("set_swing_horizontal_mode",{swing_horizontal_mode:w}),w=>e.swing_horizontal_mode===w,w=>this._opt(w),()=>Se):r}
            </div>`:r}

      </ha-card>`}_optionRow(t,e,i,o,a){return c`<div class="opt-row floating">

      ${t.map(n=>c`
        <button class="opt ${i(n)?"active":""}" @click=${()=>{e(n),this._sheet=null}}>
          <ha-icon icon=${a(n)} style="--mdc-icon-size:18px"></ha-icon><span>${o(n)}</span>
        </button>`)}
    </div>`}};_(ut,"properties",{hass:{},_config:{state:!0},_pending:{state:!0},_sheet:{state:!0}}),_(ut,"styles",k);customElements.define("alpicair-ac-panel-card",ut);var Wt=class extends x{constructor(){super(...arguments);_(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",power_entity:"Power entity",floor_current_entity:"Floor temperature sensor",floor_target_entity:"Floor target (number / input_number)",water_current_entity:"Boiler temperature sensor",water_target_entity:"Boiler target (number / input_number)",mode_entity:"Mode entity (select)",option_heating:"Option: heating",option_hot_water:"Option: hot water",option_heating_water:"Option: heating + water",quick_heat_entity:"Quick heat entity (switch)",quiet_mode_entity:"Quiet mode entity (switch)",disinfection_entity:"Disinfection entity (switch)",ring_size:"Ring size (px)",ring_thickness:"Ring thickness (px)",back_path:"Back navigation path (e.g. /lovelace/home)",back_action:"Back button action",show_power:"Show header (back + power)",show_mode:"Show mode tile",show_extras:"Show quick modes tile",show_current_temperature:"Show current temperature"})}get _options(){let e=this._config&&this.hass&&this.hass.states[this._config.mode_entity];return e&&e.attributes&&e.attributes.options||[]}_optionField(e){let i=this._options;return i.length?{name:e,selector:{select:{mode:"dropdown",options:i}}}:{name:e,selector:{text:{}}}}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},E,h("power_entity",["switch","input_boolean","climate"]),{type:"grid",name:"",schema:[h("floor_current_entity",["sensor","number","input_number"]),h("floor_target_entity",["number","input_number","climate"])]},{type:"grid",name:"",schema:[h("water_current_entity",["sensor","number","input_number"]),h("water_target_entity",["number","input_number","water_heater","climate"])]},h("mode_entity",["select","input_select","climate"]),{type:"grid",name:"",schema:[this._optionField("option_heating"),this._optionField("option_hot_water"),this._optionField("option_heating_water")]},{type:"grid",name:"",schema:[h("quick_heat_entity",["switch","input_boolean","script"]),h("quiet_mode_entity",["switch","input_boolean"]),h("disinfection_entity",["switch","input_boolean","script"])]},{type:"grid",name:"",schema:[{name:"ring_size",selector:{number:{min:140,max:480,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"ring_thickness",selector:{number:{min:6,max:40,step:1,mode:"slider",unit_of_measurement:"px"}}}]},{name:"back_path",selector:{text:{}}},{name:"back_action",selector:{ui_action:{}}},v(["show_power","show_mode","show_extras","show_current_temperature"]),z]}};customElements.define("alpicair-heat-pump-panel-card-editor",Wt);var ze=[{id:"heating",icon:"mdi:radiator"},{id:"hot_water",icon:"mdi:water-boiler"},{id:"heating_water",icon:"mdi:home-thermometer"}],Je=[{id:"quick_heat",icon:"mdi:flash",cfg:"show_quick_heat",entity:"quick_heat_entity",tone:"boost"},{id:"quiet_mode",icon:"mdi:volume-off",cfg:"show_quiet_mode",entity:"quiet_mode_entity"},{id:"disinfection",icon:"mdi:shield-sun",cfg:"show_disinfection",entity:"disinfection_entity",tone:"perf"}],mt=class extends R(S(y)){static getConfigElement(){return document.createElement("alpicair-heat-pump-panel-card-editor")}static getStubConfig(){return{type:"custom:alpicair-heat-pump-panel-card"}}setConfig(t){this._config={show_power:!0,show_mode:!0,show_extras:!0,show_current_temperature:!0,ring_size:260,ring_thickness:18,language:"auto",...t},this._pending={}}get _defaultTitle(){return"heat_pump"}getCardSize(){return 6}_t(t){return $(this.hass,this._config,t)}_svgColor(t,e){let i=getComputedStyle(this).getPropertyValue(t).trim();return i&&!i.includes("var(")?i:e}_st(t){return t&&this.hass&&this.hass.states[t]}_num(t){let e=this._st(t);if(!e)return null;let i=Number(e.state);return Number.isFinite(i)?i:null}_target(t){if(this._pending[t]!=null)return this._pending[t];let e=this._st(t);if(!e)return null;if(t.startsWith("climate.")||t.startsWith("water_heater.")){let o=Number(e.attributes.temperature);return Number.isFinite(o)?o:null}let i=Number(e.state);return Number.isFinite(i)?i:null}_limits(t,e){let i=this._st(t),o=i&&i.attributes||{};return{min:o.min??o.min_temp??e.min,max:o.max??o.max_temp??e.max,step:o.step??o.target_temp_step??e.step}}_setTarget(t,e){t&&(this._pending={...this._pending,[t]:e},clearTimeout(this._d),this._d=setTimeout(()=>{let i=t.split(".")[0];i==="number"||i==="input_number"?this.hass.callService(i,"set_value",{entity_id:t,value:e}):i==="water_heater"?this.hass.callService("water_heater","set_temperature",{entity_id:t,temperature:e}):this.hass.callService("climate","set_temperature",{entity_id:t,temperature:e}),this._pending={}},500))}get _panelOn(){let t=this._config.power_entity;if(t){let e=this._st(t);return e?!["off","unavailable","unknown"].includes(e.state):!1}return!0}_togglePower(){let t=this._config.power_entity;t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_isOn(t){let e=this._st(t);return e?!["off","unavailable","unknown"].includes(e.state):!1}_toggle(t){t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_optionFor(t){return this._config[`option_${t}`]||t}_isMode(t){let e=this._st(this._config.mode_entity);return e?e.state===this._optionFor(t)?!0:xe(e.state)===t:!1}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=e.split(".")[0];i==="select"||i==="input_select"?this.hass.callService(i,"select_option",{entity_id:e,option:this._optionFor(t)}):i==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:this._optionFor(t)}),this._sheet=null}get _hasOpenPanel(){return this._sheet!=null}_closePanels(){this._sheet=null}_toggleSheet(t){this._sheet=this._sheet===t?null:t}get _waterNow(){return this._num(this._config.water_current_entity)}get _waterLimits(){return this._limits(this._config.water_target_entity,{min:20,max:75,step:1})}get _floorLimits(){return this._limits(this._config.floor_target_entity,{min:15,max:35,step:.5})}render(){if(!this.hass||!this._config)return r;let t=this._config,e=this._panelOn,i=this._waterNow,o=this._waterLimits,a=i!=null?Math.min(1,Math.max(0,(i-20)/55)):0,n=Number(t.ring_size)||260,l=Number(t.ring_thickness)||18,p=(n-l)/2-2,d=2*Math.PI*p,m=e?this._svgColor("--primary-color","#03a9f4"):this._svgColor("--disabled-text-color","#9e9e9e"),u=this._svgColor("--secondary-background-color","#e5e7eb"),f=ze.find(b=>this._isMode(b.id)),g=Je.filter(b=>t[b.cfg]!==!1&&t[b.entity]);return c`
      <ha-card class="panel-card">
        ${this._sheet?U(this):r}
        ${t.show_power!==!1||t.back_path||t.back_action?I(this):r}

        <div class="ring-wrap" style=${`width:${n}px;height:${n}px;--alp-ring-inset:${l+10}px`}>
          <svg width=${n} height=${n} class="ring" style="transform:rotate(-90deg)">
            ${C`<circle cx=${n/2} cy=${n/2} r=${p} fill="none"
              stroke=${u} stroke-width=${l} stroke-linecap="round" />`}
            ${C`<circle cx=${n/2} cy=${n/2} r=${p} fill="none"
              stroke-width=${l} stroke-linecap="round"
              stroke-dasharray=${d} stroke-dashoffset=${d*(1-(e?a:0))}
              stroke=${m} style="transition:stroke-dashoffset .5s, stroke .3s" />`}
          </svg>

          <button class="ring-center" @click=${()=>this._toggleSheet("temp")}>
            <span class="rc-cap"><ha-icon icon="mdi:water-thermometer" style="--mdc-icon-size:16px"></ha-icon> ${this._t("hot_water")}</span>
            <span class="rc-target" style=${e?"color:var(--primary-color)":""}>${i!=null?i.toFixed(1)+"\xB0":"\u2014"}</span>
            <span class="rc-sub">${f?this._t(f.id):e?this._t("running"):this._t("off")}</span>
          </button>

          ${this._sheet==="temp"?j(this,()=>this._sheet=null,c`
                <div class="ring-target-rows">
                  ${this._targetRow("floor","mdi:heating-coil",t.floor_target_entity,this._floorLimits,"heat")}
                  ${this._targetRow("water","mdi:water-thermometer",t.water_target_entity,o,"water")}
                </div>`):r}
        </div>

        <div class="tilezone">
          <div class="grid c2 ring-tiles ${this._sheet&&this._sheet!=="temp"?"dimmed":""}">
            ${t.show_mode&&t.mode_entity?c`<button class="tile ${this._sheet==="mode"?"sel":""}" @click=${()=>this._toggleSheet("mode")}>
                  <span class="tile-icon"><ha-icon icon="mdi:tune" style="--mdc-icon-size:18px"></ha-icon></span>
                  <span class="tile-val">${f?this._t(f.id):this._t("settings")}</span>
                </button>`:r}
            ${t.show_extras&&g.length?c`<button class="tile ${this._sheet==="extra"?"sel":""}" @click=${()=>this._toggleSheet("extra")}>
                  <span class="tile-icon"><ha-icon icon="mdi:flash" style="--mdc-icon-size:18px"></ha-icon></span>
                  <span class="tile-val">${this._t("settings")}</span>
                  <span class="tile-dots">
                    ${g.map(b=>c`<span class="dot ${this._isOn(t[b.entity])?b.tone||"active":""}"></span>`)}
                  </span>
                </button>`:r}
          </div>

          ${this._sheet==="mode"?c`<div class="opt-row floating">
                ${ze.map(b=>c`
                  <button class="opt ${this._isMode(b.id)?"active":""}" @click=${()=>{this._setMode(b.id),this._sheet=null}}>
                    <ha-icon icon=${b.icon} style="--mdc-icon-size:18px"></ha-icon><span>${this._t(b.id)}</span>
                  </button>`)}
              </div>`:r}

          ${this._sheet==="extra"?c`<div class="opt-row floating">
                ${g.map(b=>c`
                  <button class="opt ${this._isOn(t[b.entity])?`active ${b.tone||""}`:""}" @click=${()=>{this._toggle(t[b.entity]),this._sheet=null}}>
                    <ha-icon icon=${b.icon} style="--mdc-icon-size:18px"></ha-icon><span>${this._t(b.id)}</span>
                  </button>`)}
              </div>`:r}
        </div>


      </ha-card>`}_targetRow(t,e,i,o,a){let n=this._target(i),l=Number(o.step)||.5,p=l<1?1:0,d=u=>Math.min(Number(o.max),Math.max(Number(o.min),Math.round(u*10)/10)),m=n??Number(o.min);return c`<div class="rt-row">
      <button class="stepbtn round" @click=${()=>this._setTarget(i,d(m-l))}>−</button>
      <span class="rt-inner">
        <span class="rt-label"><ha-icon icon=${e} style="--mdc-icon-size:15px"></ha-icon> ${this._t(t)}</span>
        <span class="rt-val">${Number(m).toFixed(p)}°</span>
      </span>
      <button class="stepbtn round" @click=${()=>this._setTarget(i,d(m+l))}>+</button>
    </div>`}};_(mt,"properties",{hass:{},_config:{state:!0},_pending:{state:!0},_sheet:{state:!0}}),_(mt,"styles",k);customElements.define("alpicair-heat-pump-panel-card",mt);var Vt=class extends x{get schema(){return[h("entity","climate"),{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},E,{name:"default_hvac_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["auto","heat_cool","cool","heat","dry","fan_only"]}}},v(["show_power","show_dial","show_temp_slider","show_modes","show_current_temperature","show_fan","show_swing_vertical","show_swing_horizontal"]),{name:"dial_size",selector:{number:{min:160,max:480,step:10,mode:"slider"}}},z]}};customElements.define("alpicair-air-conditioner-card-editor",Vt);var Ze={off:"mdi:power",fan_only:"mdi:fan",dry:"mdi:water-percent",cool:"mdi:snowflake",heat:"mdi:fire",heat_cool:"mdi:autorenew",auto:"mdi:autorenew"},Xe={off:"off",fan_only:"fan_only",dry:"dry",cool:"cool",heat:"heat",heat_cool:"auto",auto:"auto"},G=215,D=290;function Gt(s,t,e,i){let o=(i-90)*Math.PI/180;return{x:s+e*Math.cos(o),y:t+e*Math.sin(o)}}function Kt(s,t,e=80){let i=Gt(100,100,e,s),o=Gt(100,100,e,t);return`M ${i.x} ${i.y} A ${e} ${e} 0 ${t-s>180?1:0} 1 ${o.x} ${o.y}`}var gt=class extends S(y){static getConfigElement(){return document.createElement("alpicair-air-conditioner-card-editor")}static getStubConfig(t){return{type:"custom:alpicair-air-conditioner-card",entity:Object.keys(t.states).find(i=>i.startsWith("climate."))||""}}setConfig(t){if(!t.entity||!t.entity.startsWith("climate."))throw new Error("An entity of domain `climate` is required");this._config={show_power:!0,show_dial:!0,show_modes:!0,show_fan:!0,show_swing_vertical:!0,show_swing_horizontal:!0,show_current_temperature:!0,show_temp_slider:!0,dial_size:260,language:"auto",...t}}getCardSize(){return 6}get _stateObj(){return this.hass&&this.hass.states[this._config.entity]}_t(t){return $(this.hass,this._config,t)}_modeLabel(t){return this._t(Xe[t]||t)||t}_call(t,e){this.hass.callService("climate",t,{entity_id:this._config.entity,...e})}_setTemp(t){this._pending=t,clearTimeout(this._debounce),this._debounce=setTimeout(()=>{this._call("set_temperature",{temperature:t}),this._pending=void 0},400)}_commitTemp(){if(clearTimeout(this._debounce),this._pending==null)return;let t=this._pending;this._pending=void 0,this._call("set_temperature",{temperature:t})}_dialDrag(t,e,i,o){let a=this._stateObj;if(!a||a.state==="off"||a.state==="unavailable")return;t.preventDefault();let n=t.currentTarget.getBoundingClientRect(),l=n.left+n.width/2,p=n.top+n.height/2,d=u=>{let f=Math.atan2(u.clientX-l,p-u.clientY)*180/Math.PI;f<0&&(f+=360);let g=f-G;g<0&&(g+=360),g>D&&(g=g-D>(360-D)/2?0:D);let b=e+g/D*(i-e),Y=Math.min(i,Math.max(e,Math.round(b/o)*o));this._pending=Number(Y.toFixed(2))},m=()=>{window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),this._commitTemp()};d(t),window.addEventListener("pointermove",d),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",m)}_togglePower(){let t=this._stateObj;if(t.state==="off"){let e=this._config.default_hvac_mode||(t.attributes.hvac_modes||[]).find(i=>i!=="off")||"auto";this._call("set_hvac_mode",{hvac_mode:e})}else this._call("set_hvac_mode",{hvac_mode:"off"})}render(){if(!this.hass||!this._config)return r;let t=this._stateObj;if(!t)return c`<ha-card><div class="warn">${this._t("entity_not_found")}: ${this._config.entity}</div></ha-card>`;let e=t.attributes,i=t.state!=="off"&&t.state!=="unavailable",o=e.min_temp??16,a=e.max_temp??30,n=e.target_temp_step??.5,l=this._pending??e.temperature??o,p=Math.min(1,Math.max(0,(l-o)/(a-o))),d=G+p*D,m=Gt(100,100,80,d),u=(e.hvac_modes||[]).filter(g=>g!=="off"),f=Math.min(5,Math.max(2,u.length));return c`
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
                @pointerdown=${g=>this._dialDrag(g,o,a,n)}>
                ${C`<path d=${Kt(G,G+D)} fill="none" stroke="transparent" stroke-width="34" stroke-linecap="round" />`}
                ${C`<path d=${Kt(G,G+D)} fill="none" stroke-width="9" stroke-linecap="round" style="stroke:var(--secondary-background-color)" />`}
                ${i?C`<path d=${Kt(G,d)} fill="none" stroke-width="9" stroke-linecap="round" style="stroke:var(--primary-color)" />`:r}
                ${C`<circle cx=${m.x} cy=${m.y} r="13" stroke-width="3" style=${`fill:var(--card-background-color);stroke:${i?"var(--primary-color)":"var(--disabled-text-color)"}`} />`}
              </svg>
              <div class="dial-center">
                <div class="mode-label">${i?this._modeLabel(t.state):this._t("off")}</div>
                <div class="target">${Number(l).toFixed(n<1?1:0)}<sup>°C</sup></div>
                ${this._config.show_current_temperature&&e.current_temperature!=null?c`<div class="current"><ha-icon icon="mdi:thermometer" style="--mdc-icon-size:15px"></ha-icon>${e.current_temperature} °C</div>`:r}
              </div>
            </div>
            ${this._config.show_temp_slider===!1?r:c`<input type="range" min=${o} max=${a} step=${n} .value=${String(l)}
                  aria-label=${this._t("target_temperature")}
                  @input=${g=>this._setTemp(Number(g.target.value))} ?disabled=${!i} />`}`:r}

        ${this._config.show_modes&&u.length?c`<div class="grid c${f}">
              ${u.map(g=>c`
                <button class="mode ${i&&t.state===g?"active":""}"
                  title=${this._modeLabel(g)} aria-label=${this._modeLabel(g)}
                  @click=${()=>this._call("set_hvac_mode",{hvac_mode:g})}>
                  <ha-icon icon=${Ze[g]||"mdi:thermostat"}></ha-icon>
                </button>`)}
            </div>`:r}

        <div class="${i?"":"dimmed"}" style="display:flex;flex-direction:column;gap:8px;">
          ${this._config.show_fan&&e.fan_modes?this._select("mdi:fan",e.fan_mode,e.fan_modes,g=>this._call("set_fan_mode",{fan_mode:g})):r}
          ${this._config.show_swing_vertical&&e.swing_modes?this._select("mdi:arrow-up-down",e.swing_mode,e.swing_modes,g=>this._call("set_swing_mode",{swing_mode:g})):r}
          ${this._config.show_swing_horizontal&&e.swing_horizontal_modes?this._select("mdi:arrow-left-right",e.swing_horizontal_mode,e.swing_horizontal_modes,g=>this._call("set_swing_horizontal_mode",{swing_horizontal_mode:g})):r}
        </div>
      </ha-card>
    `}_select(t,e,i,o){return c`
      <label class="select-row">
        <ha-icon icon=${t} style="--mdc-icon-size:18px"></ha-icon>
        <span class="lbl">${this._t(String(e))||e}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:18px"></ha-icon>
        <select .value=${e??""} @change=${a=>o(a.target.value)}>
          ${i.map(a=>c`<option value=${a} ?selected=${a===e}>${this._t(a)||a}</option>`)}
        </select>
      </label>`}};_(gt,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),_(gt,"styles",k);customElements.define("alpicair-air-conditioner-card",gt);var Yt=class extends x{constructor(){super(...arguments);_(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",power_entity:"Power entity",floor_current_entity:"Floor temperature sensor",floor_target_entity:"Floor target (number / input_number)",water_current_entity:"Boiler temperature sensor",water_target_entity:"Boiler target (number / input_number)",mode_entity:"Mode entity (select)",option_heating:"Option: heating",option_hot_water:"Option: hot water",option_heating_water:"Option: heating + water",quick_heat_entity:"Quick heat entity (switch)",quiet_mode_entity:"Quiet mode entity (switch)",disinfection_entity:"Disinfection entity (switch)",show_power:"Power button",show_hero:"Large temperature block",show_floor:"Floor temperature",show_water:"Boiler temperature",show_modes:"Mode buttons",show_quick_heat:"Button: quick heat",show_quiet_mode:"Button: quiet mode",show_disinfection:"Button: disinfection"})}get _options(){let e=this._config&&this.hass&&this.hass.states[this._config.mode_entity];return e&&e.attributes&&e.attributes.options||[]}_optionField(e){let i=this._options;return i.length?{name:e,selector:{select:{mode:"dropdown",options:i}}}:{name:e,selector:{text:{}}}}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},E,h("power_entity",["switch","input_boolean","climate"]),{type:"grid",name:"",schema:[h("floor_current_entity",["sensor","number","input_number"]),h("floor_target_entity",["number","input_number","climate"])]},{type:"grid",name:"",schema:[h("water_current_entity",["sensor","number","input_number"]),h("water_target_entity",["number","input_number","water_heater","climate"])]},h("mode_entity",["select","input_select","climate"]),{type:"grid",name:"",schema:[this._optionField("option_heating"),this._optionField("option_hot_water"),this._optionField("option_heating_water")]},{type:"grid",name:"",schema:[h("quick_heat_entity",["switch","input_boolean","script"]),h("quiet_mode_entity",["switch","input_boolean"]),h("disinfection_entity",["switch","input_boolean","script"])]},v(["show_power","show_hero","show_floor","show_water","show_modes","show_quick_heat","show_quiet_mode","show_disinfection"]),z]}};customElements.define("alpicair-heat-pump-card-editor",Yt);var ft=class extends S(y){static getConfigElement(){return document.createElement("alpicair-heat-pump-card-editor")}static getStubConfig(){return{type:"custom:alpicair-heat-pump-card"}}setConfig(t){this._config={show_power:!0,show_hero:!0,show_floor:!0,show_water:!0,show_modes:!0,show_quick_heat:!0,show_quiet_mode:!0,show_disinfection:!0,language:"auto",...t},this._pending={}}getCardSize(){return 6}_t(t){return $(this.hass,this._config,t)}_st(t){return t&&this.hass.states[t]}_num(t){let e=this._st(t);if(!e)return null;let i=Number(e.state);return Number.isFinite(i)?i:null}_target(t){if(this._pending[t]!=null)return this._pending[t];let e=this._st(t);if(!e)return null;if(t.startsWith("climate.")||t.startsWith("water_heater.")){let o=Number(e.attributes.temperature);return Number.isFinite(o)?o:null}let i=Number(e.state);return Number.isFinite(i)?i:null}_limits(t,e){let i=this._st(t),o=i&&i.attributes||{};return{min:o.min??o.min_temp??e.min,max:o.max??o.max_temp??e.max,step:o.step??o.target_temp_step??e.step}}_setTarget(t,e){t&&(this._pending={...this._pending,[t]:e},clearTimeout(this._d),this._d=setTimeout(()=>{let i=t.split(".")[0];i==="number"||i==="input_number"?this.hass.callService(i,"set_value",{entity_id:t,value:e}):i==="water_heater"?this.hass.callService("water_heater","set_temperature",{entity_id:t,temperature:e}):this.hass.callService("climate","set_temperature",{entity_id:t,temperature:e}),this._pending={}},500))}_toggle(t){t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_isOn(t){let e=this._st(t);return e?!["off","unavailable","unknown"].includes(e.state):!1}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=e.split(".")[0];i==="select"||i==="input_select"?this.hass.callService(i,"select_option",{entity_id:e,option:this._optionFor(t)}):i==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:this._optionFor(t)})}_optionFor(t){return this._config[`option_${t}`]||t}_isMode(t){let e=this._st(this._config.mode_entity);return!!e&&e.state===this._optionFor(t)}render(){if(!this.hass||!this._config)return r;let t=this._config,e=t.power_entity,i=e?this._isOn(e):!0,o=this._st(t.mode_entity),a=[{id:"heating",icon:"mdi:radiator"},{id:"hot_water",icon:"mdi:water-boiler"},{id:"heating_water",icon:"mdi:home-thermometer"}],n={label:this._t("floor"),icon:"mdi:heating-coil",current:this._num(t.floor_current_entity),targetId:t.floor_target_entity,target:this._target(t.floor_target_entity),tone:"heat",limits:this._limits(t.floor_target_entity,{min:15,max:35,step:.5})},l={label:this._t("hot_water"),icon:"mdi:water-thermometer",current:this._num(t.water_current_entity),targetId:t.water_target_entity,target:this._target(t.water_target_entity),tone:"water",limits:this._limits(t.water_target_entity,{min:30,max:65,step:1})},p=[t.show_floor!==!1?n:null,t.show_water!==!1?l:null].filter(Boolean);return c`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${t.icon||"mdi:heat-pump"}></ha-icon></div>
          <div class="titles">
            <div class="title">${t.name||this._t("heat_pump")}</div>
            <div class="subtitle">${i?o?o.state:this._t("running"):this._t("off")}</div>
          </div>
          ${t.show_power&&e?c`<button class="power ${i?"on":""}" aria-label=${this._t("power")}
                @click=${()=>this._toggle(e)}><ha-icon icon="mdi:power"></ha-icon></button>`:r}
        </div>

        <div class="${i?"":"dimmed"}" style="display:flex;flex-direction:column;gap:14px;">
          ${t.show_hero!==!1&&p.length?this._hero(p):r}
          ${p.filter(d=>d.targetId).map(d=>this._stepRow(d))}

          ${t.show_modes&&t.mode_entity?c`<div class="grid c3">
                ${a.map(d=>c`
                  <button class="mode ${this._isMode(d.id)?"active":""}"
                    @click=${()=>this._setMode(d.id)}>
                    <ha-icon icon=${d.icon} style="--mdc-icon-size:22px"></ha-icon>${this._t(d.id)}
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
    </div>`}_stepRow(t){let{min:e,max:i,step:o}=t.limits,a=Number(o)||.5,n=t.target??Number(e),l=a<1?1:0,p=d=>Math.min(Number(i),Math.max(Number(e),Math.round(d*10)/10));return c`
      <div class="tempstep">
        <span class="lbl" style="display:flex;align-items:center;gap:6px">
          <ha-icon icon=${t.icon} style="--mdc-icon-size:18px"></ha-icon>${t.label}
        </span>
        <button class="stepbtn" aria-label="−"
          @click=${()=>this._setTarget(t.targetId,p(n-a))}>−</button>
        <span class="v ${t.tone}">${Number(n).toFixed(l)}°</span>
        <button class="stepbtn" aria-label="+"
          @click=${()=>this._setTarget(t.targetId,p(n+a))}>+</button>
      </div>`}_quickRow(){let t=[{cfg:"show_quick_heat",entity:this._config.quick_heat_entity,icon:"mdi:flash",key:"quick_heat",tone:"boost"},{cfg:"show_quiet_mode",entity:this._config.quiet_mode_entity,icon:"mdi:volume-off",key:"quiet_mode"},{cfg:"show_disinfection",entity:this._config.disinfection_entity,icon:"mdi:shield-sun",key:"disinfection"}].filter(e=>this._config[e.cfg]!==!1&&e.entity);return t.length?c`<div class="grid c3">
      ${t.map(e=>c`
        <button class="mode ${this._isOn(e.entity)?`active ${e.tone||""}`:""}"
          @click=${()=>this._toggle(e.entity)}>
          <ha-icon icon=${e.icon} style="--mdc-icon-size:22px"></ha-icon>${this._t(e.key)}
        </button>`)}
    </div>`:r}};_(ft,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),_(ft,"styles",k);customElements.define("alpicair-heat-pump-card",ft);var Qt=class extends x{constructor(){super(...arguments);_(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",outdoor_entity:"Outdoor temperature",indoor_entity:"Indoor temperature",supply_entity:"Supply air temperature",extract_entity:"Extract air temperature",target_entity:"Target temperature entity",show_target_slider:"Target temperature slider",min_temp:"Minimum",max_temp:"Maximum",step:"Step"})}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},E,{type:"grid",name:"",schema:[h("outdoor_entity",["sensor"]),h("indoor_entity",["sensor"]),h("supply_entity",["sensor"]),h("extract_entity",["sensor"])]},h("target_entity",["climate","number","input_number"]),v(["show_target_slider"]),{type:"grid",name:"",schema:[{name:"min_temp",selector:{number:{min:0,max:40,step:1,mode:"box"}}},{name:"max_temp",selector:{number:{min:0,max:60,step:1,mode:"box"}}},{name:"step",selector:{number:{min:.1,max:5,step:.1,mode:"box"}}}]},z]}};customElements.define("alpicair-sensors-card-editor",Qt);var bt=class extends S(y){static getConfigElement(){return document.createElement("alpicair-sensors-card-editor")}static getStubConfig(){return{type:"custom:alpicair-sensors-card"}}setConfig(t){this._config={show_target_slider:!0,show_target_steppers:!0,language:"auto",min_temp:15,max_temp:30,step:.5,...t}}getCardSize(){return 4}_t(t){return $(this.hass,this._config,t)}_metric(t,e){let i=t&&this.hass.states[t];if(!i)return r;let o=i.attributes.unit_of_measurement||"\xB0C";return c`<div class="metric">
      <div class="label">${e}</div>
      <div class="value">${i.state} <span style="font-size:13px">${o}</span></div>
    </div>`}_setTarget(t){let e=this._config.target_entity;if(!e)return;let i=e.split(".")[0];i==="climate"?this.hass.callService("climate","set_temperature",{entity_id:e,temperature:t}):this.hass.callService(i,"set_value",{entity_id:e,value:t})}_clamp(t){let e=Number(this._config.min_temp),i=Number(this._config.max_temp);return Math.min(i,Math.max(e,Math.round(t*10)/10))}render(){if(!this.hass||!this._config)return r;let t=this._config,e=t.target_entity&&this.hass.states[t.target_entity],i=e?Number(e.attributes.temperature??e.state):null,o=Number(t.step)||.5;return c`
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
                      @click=${()=>this._setTarget(this._clamp(i-o))}>−</button>
                    <span class="v heat">${i.toFixed(1)}°</span>
                    <button class="stepbtn" aria-label="+"
                      @click=${()=>this._setTarget(this._clamp(i+o))}>+</button>
                  </div>`:r}

              ${t.show_target_slider!==!1?c`
                    <input class="heat" type="range" min=${t.min_temp} max=${t.max_temp}
                      step=${o} .value=${String(i)}
                      aria-label=${this._t("target_temperature")}
                      @change=${a=>this._setTarget(Number(a.target.value))} />
                    <div class="range-legend"><span>${t.min_temp}°</span><span>${t.max_temp}°</span></div>`:r}
            </div>`:r}
      </ha-card>`}};_(bt,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),_(bt,"styles",k);customElements.define("alpicair-sensors-card",bt);var Jt=class extends x{constructor(){super(...arguments);_(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",show_night_cooling:"Section: night cooling",show_fan_speeds:"Section: fan speeds",show_date_time:"Section: date & time",night_cooling_entity:"Night cooling switch",nc_start_time_entity:"Start time",nc_stop_time_entity:"Stop time",nc_extract_start_entity:"Extract air temp. to start",nc_extract_stop_entity:"Extract air temp. to stop",nc_outdoor_stop_entity:"Outdoor temp. to stop",nc_supply_setpoint_entity:"Supply air setpoint",bp_supply_entity:"Building protection \xB7 supply",bp_exhaust_entity:"Building protection \xB7 exhaust",eco_supply_entity:"Economy \xB7 supply",eco_exhaust_entity:"Economy \xB7 exhaust",comfort_supply_entity:"Comfort \xB7 supply",comfort_exhaust_entity:"Comfort \xB7 exhaust",boost_supply_entity:"Boost \xB7 supply",boost_exhaust_entity:"Boost \xB7 exhaust",show_back_button:"Back button",back_icon:"Back button icon",back_entity:"Back button target entity",hold_time:"Long press duration (ms)",back_tap_action:"Back \xB7 short press action",back_hold_action:"Back \xB7 long press action",date_entity:"Date entity",time_entity:"Time entity"})}get schema(){let e=["number","input_number"];return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},E,v(["show_night_cooling","show_fan_speeds","show_date_time"]),h("night_cooling_entity",["switch","input_boolean"]),{type:"grid",name:"",schema:[h("nc_start_time_entity",["time","input_datetime"]),h("nc_stop_time_entity",["time","input_datetime"]),h("nc_extract_start_entity",e),h("nc_extract_stop_entity",e),h("nc_outdoor_stop_entity",e),h("nc_supply_setpoint_entity",e)]},{type:"grid",name:"",schema:[h("bp_supply_entity",e),h("bp_exhaust_entity",e),h("eco_supply_entity",e),h("eco_exhaust_entity",e),h("comfort_supply_entity",e),h("comfort_exhaust_entity",e),h("boost_supply_entity",e),h("boost_exhaust_entity",e)]},{type:"grid",name:"",schema:[h("date_entity",["date","input_datetime"]),h("time_entity",["time","input_datetime"])]},v(["show_back_button"]),{type:"grid",name:"",schema:[{name:"back_icon",selector:{icon:{}}},h("back_entity")]},{name:"hold_time",selector:{number:{min:200,max:2e3,step:50,mode:"box",unit_of_measurement:"ms"}}},{name:"back_tap_action",selector:{ui_action:{}}},{name:"back_hold_action",selector:{ui_action:{}}},z]}};customElements.define("alpicair-device-settings-card-editor",Jt);var ti=[{cfg:"nc_extract_start_entity",key:"nc_extract_start",min:13,max:30},{cfg:"nc_extract_stop_entity",key:"nc_extract_stop",min:13,max:30},{cfg:"nc_outdoor_stop_entity",key:"nc_outdoor_stop",min:0,max:30},{cfg:"nc_supply_setpoint_entity",key:"nc_supply_setpoint",min:0,max:30}],ei=[{id:"building_protection",supply:"bp_supply_entity",exhaust:"bp_exhaust_entity"},{id:"economy",supply:"eco_supply_entity",exhaust:"eco_exhaust_entity"},{id:"comfort",supply:"comfort_supply_entity",exhaust:"comfort_exhaust_entity"},{id:"boost",supply:"boost_supply_entity",exhaust:"boost_exhaust_entity"}],wt=class extends S(y){static getConfigElement(){return document.createElement("alpicair-device-settings-card-editor")}static getStubConfig(){return{type:"custom:alpicair-device-settings-card"}}setConfig(t){this._config={show_night_cooling:!0,show_fan_speeds:!0,show_date_time:!0,show_back_button:!0,back_icon:"mdi:chevron-left",hold_time:500,back_tap_action:{action:"none"},back_hold_action:{action:"none"},language:"auto",...t}}getCardSize(){return 10}_t(t){return $(this.hass,this._config,t)}_st(t){return t&&this.hass.states[t]}_setNumber(t,e){let i=t.split(".")[0];this.hass.callService(i,"set_value",{entity_id:t,value:e})}_setTime(t,e){let i=t.split(".")[0];this.hass.callService(i,"set_value",{entity_id:t,[i==="input_datetime"?"time":"value"]:e})}_backButton(){let t=this._config;if(t.show_back_button===!1)return r;let e=t.back_entity,i=zt(()=>A(this,this.hass,e,t.back_tap_action),()=>A(this,this.hass,e,t.back_hold_action),Number(t.hold_time)||500);return c`<button class="power" aria-label=${this._t("back")}
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
      </ha-card>`}_nightCooling(){let t=ti.filter(n=>this._st(this._config[n.cfg])),e=this._st(this._config.nc_start_time_entity),i=this._st(this._config.nc_stop_time_entity),o=this._st(this._config.night_cooling_entity);if(!t.length&&!e&&!i&&!o)return r;let a=!o||o.state==="on";return c`
      ${o?c`<div class="select-row">
            <ha-icon icon="mdi:weather-night" style="--mdc-icon-size:20px"></ha-icon>
            <span class="lbl">${this._t("night_cooling")}</span>
            <ha-switch .checked=${o.state==="on"}
              @change=${()=>this.hass.callService("homeassistant","toggle",{entity_id:this._config.night_cooling_entity})}></ha-switch>
          </div>`:r}

      <div class="panel ${a?"":"dimmed"}">
        <div class="section-title">${this._t("night_cooling_schedule")||this._t("night_cooling")}</div>
        ${e||i?c`<div class="grid c2">
              ${e?this._timeField(this._t("start_time"),this._config.nc_start_time_entity,e):r}
              ${i?this._timeField(this._t("stop_time"),this._config.nc_stop_time_entity,i):r}
            </div>`:r}
        ${t.map(n=>{let l=this._st(this._config[n.cfg]),p=Number(l.attributes.step)||.5,d=Number(l.attributes.min??n.min),m=Number(l.attributes.max??n.max),u=Number(l.state),f=g=>Math.min(m,Math.max(d,Math.round(g*10)/10));return c`
            <div class="tempstep">
              <span class="lbl">${this._t(n.key)}</span>
              <span class="v heat">${u.toFixed(1)}°</span>
              <button class="stepbtn" aria-label="−"
                @click=${()=>this._setNumber(this._config[n.cfg],f(u-p))}>−</button>
              <button class="stepbtn" aria-label="+"
                @click=${()=>this._setNumber(this._config[n.cfg],f(u+p))}>+</button>
            </div>`})}
      </div>`}_timeField(t,e,i){let o=(i.state||"").slice(0,5);return c`
      <div class="field">
        <span class="flabel"><ha-icon icon="mdi:clock-outline" style="--mdc-icon-size:14px"></ha-icon>${t}</span>
        <input type="time" .value=${o}
          @change=${a=>this._setTime(e,`${a.target.value}:00`)} />
      </div>`}_fanSpeeds(){let t=ei.filter(e=>this._st(this._config[e.supply])||this._st(this._config[e.exhaust]));return t.length?c`
      ${t.map(e=>c`
        <div class="panel">
          <div class="section-title">${this._t(e.id)}</div>
          ${this._speedSlider(this._config[e.supply],this._t("supply"))}
          ${this._speedSlider(this._config[e.exhaust],this._t("exhaust"))}
        </div>`)}`:r}_speedSlider(t,e){let i=this._st(t);if(!i)return r;let o=Number(i.attributes.min??0),a=Number(i.attributes.max??100),n=Number(i.attributes.step??1),l=Number(i.state);return c`
      <div class="slider-row">
        <div class="bar-top"><span>${e}</span><span class="val">${l}%</span></div>
        <input type="range" min=${o} max=${a} step=${n} .value=${String(l)} aria-label=${e}
          @change=${p=>this._setNumber(t,Number(p.target.value))} />
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
      </div>`}_syncNow(){let t=new Date,e=i=>String(i).padStart(2,"0");this._config.date_entity&&this.hass.callService(this._config.date_entity.split(".")[0],"set_value",{entity_id:this._config.date_entity,date:`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}),this._config.time_entity&&this._setTime(this._config.time_entity,`${e(t.getHours())}:${e(t.getMinutes())}:00`)}};_(wt,"properties",{hass:{},_config:{state:!0}}),_(wt,"styles",k);customElements.define("alpicair-device-settings-card",wt);var Zt=class extends x{constructor(){super(...arguments);_(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",show_language:"Language selector",show_theme:"Theme selector",show_accent:"Accent color",show_compact:"Compact mode toggle",show_sizes:"Button / font size sliders",show_reset:"Reset button",show_back_button:"Back button",back_icon:"Back button icon",back_entity:"Back button target entity",hold_time:"Long press duration (ms)",back_tap_action:"Back \xB7 short press action",back_hold_action:"Back \xB7 long press action"})}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},v(["show_language","show_theme","show_accent","show_compact","show_sizes","show_reset"]),v(["show_back_button"]),{type:"grid",name:"",schema:[{name:"back_icon",selector:{icon:{}}},h("back_entity")]},{name:"hold_time",selector:{number:{min:200,max:2e3,step:50,mode:"box",unit_of_measurement:"ms"}}},{name:"back_tap_action",selector:{ui_action:{}}},{name:"back_hold_action",selector:{ui_action:{}}},z]}};customElements.define("alpicair-ui-settings-card-editor",Zt);var ii=[{id:"auto",label:"Auto"},{id:"en",label:"English"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{id:"lv",label:"Latvie\u0161u"}],oi=["","#03a9f4","#f4511e","#43a047","#8e24aa","#fb8c00"],yt=class extends S(y){static getConfigElement(){return document.createElement("alpicair-ui-settings-card-editor")}static getStubConfig(){return{type:"custom:alpicair-ui-settings-card"}}setConfig(t){this._config={show_language:!0,show_theme:!0,show_accent:!0,show_compact:!0,show_sizes:!0,show_reset:!0,show_back_button:!0,back_icon:"mdi:chevron-left",hold_time:500,back_tap_action:{action:"none"},back_hold_action:{action:"none"},...t}}getCardSize(){return 4}_t(t){return $(this.hass,{language:"auto"},t)}_backButton(){let t=this._config;if(t.show_back_button===!1)return r;let e=zt(()=>A(this,this.hass,t.back_entity,t.back_tap_action),()=>A(this,this.hass,t.back_entity,t.back_hold_action),Number(t.hold_time)||500);return c`<button class="power" aria-label=${this._t("back")}
      @pointerdown=${e["@pointerdown"]} @pointerup=${e["@pointerup"]}
      @pointerleave=${e["@pointerleave"]} @pointercancel=${e["@pointercancel"]}
      @contextmenu=${e["@contextmenu"]}>
      <ha-icon icon=${t.back_icon||"mdi:chevron-left"}></ha-icon>
    </button>`}_set(t){we(t),this.requestUpdate()}render(){if(!this._config)return r;let t=L(),e=this._config;return c`
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
                  ${ii.map(i=>c`<button class="mode ${t.language===i.id?"active":""}"
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
                  ${oi.map(i=>c`<button
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

        ${e.show_reset!==!1?c`<button class="plain" @click=${()=>{ye(),this.requestUpdate()}}>
              <ha-icon icon="mdi:restore" style="--mdc-icon-size:18px"></ha-icon>${this._t("reset")}
            </button>`:r}
      </ha-card>`}};_(yt,"properties",{hass:{},_config:{state:!0}}),_(yt,"styles",k);customElements.define("alpicair-ui-settings-card",yt);var Xt=class extends x{constructor(){super(...arguments);_(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",power_entity:"Power / inverter switch entity",production_entity:"Current production (W / kW)",peak_power_entity:"Peak power sensor (optional)",peak_power:"Peak power, kW (ring scale)",production_today_entity:"Production today (kWh)",production_month_entity:"Production this month (kWh)",battery_level_entity:"Battery level (%)",battery_power_entity:"Battery power (+ charge / \u2212 discharge)",grid_power_entity:"Grid power (+ export / \u2212 import)",house_power_entity:"House consumption (W / kW)",export_today_entity:"Exported today (kWh)",export_month_entity:"Exported this month (kWh)",import_today_entity:"Imported today (kWh)",import_month_entity:"Imported this month (kWh)",house_today_entity:"House consumption today (kWh)",house_month_entity:"House consumption this month (kWh)",invert_grid:"Invert grid sign",invert_battery:"Invert battery sign",decimals:"Decimals",ring_size:"Ring size (px)",ring_thickness:"Ring thickness (px)",back_path:"Back navigation path (e.g. /lovelace/home)",back_action:"Back button action",show_battery:"Show battery tile",show_grid:"Show grid tile",show_house:"Show house tile"})}get schema(){let e=(i,o,a,n,l)=>({name:i,selector:{number:{min:o,max:a,step:n,mode:"slider",...l?{unit_of_measurement:l}:{}}}});return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},E,h("power_entity",["switch","input_boolean"]),h("production_entity",["sensor","number","input_number"]),{type:"grid",name:"",schema:[h("peak_power_entity",["sensor","number","input_number"]),e("peak_power",1,30,.5,"kW")]},{type:"grid",name:"",schema:[h("production_today_entity",["sensor"]),h("production_month_entity",["sensor"])]},{type:"grid",name:"",schema:[h("battery_level_entity",["sensor","number","input_number"]),h("battery_power_entity",["sensor","number","input_number"])]},{type:"grid",name:"",schema:[h("grid_power_entity",["sensor","number","input_number"]),h("house_power_entity",["sensor","number","input_number"])]},{type:"grid",name:"",schema:[h("export_today_entity",["sensor"]),h("export_month_entity",["sensor"])]},{type:"grid",name:"",schema:[h("import_today_entity",["sensor"]),h("import_month_entity",["sensor"])]},{type:"grid",name:"",schema:[h("house_today_entity",["sensor"]),h("house_month_entity",["sensor"])]},{type:"grid",name:"",schema:[e("ring_size",140,480,10,"px"),e("ring_thickness",6,40,1,"px")]},e("decimals",0,3,1),{name:"back_path",selector:{text:{}}},{name:"back_action",selector:{ui_action:{}}},v(["show_battery","show_grid","show_house"]),v(["invert_grid","invert_battery"]),z]}};customElements.define("alpicair-solar-card-editor",Xt);var vt=class extends R(S(y)){static getConfigElement(){return document.createElement("alpicair-solar-card-editor")}static getStubConfig(){return{type:"custom:alpicair-solar-card"}}setConfig(t){this._config={show_power:!0,show_battery:!0,show_grid:!0,show_house:!0,peak_power:6,decimals:2,ring_size:260,ring_thickness:18,invert_grid:!1,invert_battery:!1,language:"auto",...t}}get _defaultTitle(){return"solar_station"}getCardSize(){return 6}_t(t){return $(this.hass,this._config,t)}_svgColor(t,e){let i=getComputedStyle(this).getPropertyValue(t).trim();return i&&!i.includes("var(")?i:e}_st(t){return t&&this.hass&&this.hass.states[t]}_num(t){let e=this._st(t);if(!e)return null;let i=Number(e.state);return Number.isFinite(i)?i:null}_kw(t){let e=this._st(t);if(!e)return null;let i=Number(e.state);if(!Number.isFinite(i))return null;let o=e.attributes&&e.attributes.unit_of_measurement||"";return/^w$/i.test(o.trim())?i/1e3:i}_fmt(t,e){if(t==null)return"\u2014";let i=Number(this._config.decimals??2);return`${t.toFixed(i)} ${e}`}get _panelOn(){let t=this._config.power_entity;if(t){let e=this._st(t);return e?!["off","unavailable","unknown"].includes(e.state):!1}return!0}_togglePower(){let t=this._config.power_entity;t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}get _hasOpenPanel(){return this._sheet!=null}_closePanels(){this._sheet=null}_toggleSheet(t){this._sheet=this._sheet===t?null:t}get _production(){return this._kw(this._config.production_entity)??0}get _peak(){let e=this._kw(this._config.peak_power_entity)??Number(this._config.peak_power);return Number.isFinite(e)&&e>0?e:6}get _grid(){let t=this._kw(this._config.grid_power_entity);return t==null?null:this._config.invert_grid?-t:t}get _batteryPower(){let t=this._kw(this._config.battery_power_entity);return t==null?null:this._config.invert_battery?-t:t}_statRows(t){return c`<div class="opt-row floating stat-pop">
      ${t.map(e=>c`<div class="stat-row">
        <span class="sr-label">${e.label}</span>
        <span class="sr-val ${e.tone||""}">${e.value}</span>
      </div>`)}
    </div>`}render(){if(!this.hass||!this._config)return r;let t=this._config,e=this._panelOn,i=this._production,o=this._peak,a=Math.min(1,Math.max(0,i/o)),n=Number(t.ring_size)||260,l=Number(t.ring_thickness)||18,p=(n-l)/2-2,d=2*Math.PI*p,m=e&&i>0?this._svgColor("--primary-color","#03a9f4"):this._svgColor("--disabled-text-color","#9e9e9e"),u=this._svgColor("--secondary-background-color","#e5e7eb"),f=this._num(t.battery_level_entity),g=this._batteryPower,b=this._grid,Y=this._kw(t.house_power_entity),T=g==null||Math.abs(g)<.02?"":g>0?"good":"bad",w=b==null||Math.abs(b)<.02?"":b>0?"good":"bad";return c`
      <ha-card class="panel-card">
        ${this._sheet?U(this):r}
        ${I(this,{power:!1})}

        <div class="ring-wrap" style=${`width:${n}px;height:${n}px;--alp-ring-inset:${l+10}px`}>
          <svg width=${n} height=${n} class="ring" style="transform:rotate(-90deg)">
            ${C`<circle cx=${n/2} cy=${n/2} r=${p} fill="none"
              stroke=${u} stroke-width=${l} stroke-linecap="round" />`}
            ${C`<circle cx=${n/2} cy=${n/2} r=${p} fill="none"
              stroke-width=${l} stroke-linecap="round"
              stroke-dasharray=${d} stroke-dashoffset=${d*(1-(e?a:0))}
              stroke=${m} style="transition:stroke-dashoffset .5s, stroke .3s" />`}
          </svg>

          <button class="ring-center" @click=${()=>this._toggleSheet("prod")}>
            <span class="rc-cap"><ha-icon icon="mdi:solar-power-variant" style="--mdc-icon-size:16px"></ha-icon> ${this._t("production")}</span>
            <span class="rc-target" style=${e?"color:var(--primary-color)":""}>${this._fmt(i,"")}</span>
            <span class="rc-sub">${this._t("kw")} · ${this._t("peak_power")} ${o} ${this._t("kw")}</span>
          </button>

          ${this._sheet==="prod"?j(this,()=>this._sheet=null,c`
                <div class="ring-target-rows">
                  <div class="rt-row">
                    <span class="rt-inner">
                      <span class="rt-label">${this._t("today")}</span>
                      <span class="rt-val">${this._fmt(this._num(t.production_today_entity),this._t("kwh"))}</span>
                    </span>
                  </div>
                  <div class="rt-row">
                    <span class="rt-inner">
                      <span class="rt-label">${this._t("this_month")}</span>
                      <span class="rt-val">${this._fmt(this._num(t.production_month_entity),this._t("kwh"))}</span>
                    </span>
                  </div>
                </div>`):r}
        </div>

        <div class="tilezone">
          <div class="grid c3 ring-tiles ${this._sheet&&this._sheet!=="prod"?"dimmed":""}">
            ${t.show_battery!==!1?c`<button class="tile ${T} ${this._sheet==="battery"?"sel":""}"
                  @click=${()=>this._toggleSheet("battery")}>
                  <span class="tile-icon"><ha-icon icon="mdi:battery-charging" style="--mdc-icon-size:18px"></ha-icon></span>
                  <span class="tile-val">${f!=null?`${Math.round(f)} %`:"\u2014"}</span>
                  <span class="tile-cap">${this._t("battery")}</span>
                </button>`:r}
            ${t.show_grid!==!1?c`<button class="tile ${w} ${this._sheet==="grid"?"sel":""}"
                  @click=${()=>this._toggleSheet("grid")}>
                  <span class="tile-icon"><ha-icon icon="mdi:transmission-tower" style="--mdc-icon-size:18px"></ha-icon></span>
                  <span class="tile-val">${this._fmt(b==null?null:Math.abs(b),this._t("kw"))}</span>
                  <span class="tile-cap">${b!=null&&b<0?this._t("from_grid"):this._t("to_grid")}</span>
                </button>`:r}
            ${t.show_house!==!1?c`<button class="tile ${this._sheet==="house"?"sel":""}"
                  @click=${()=>this._toggleSheet("house")}>
                  <span class="tile-icon"><ha-icon icon="mdi:home-lightning-bolt" style="--mdc-icon-size:18px"></ha-icon></span>
                  <span class="tile-val">${this._fmt(Y,this._t("kw"))}</span>
                  <span class="tile-cap">${this._t("house")}</span>
                </button>`:r}
          </div>

          ${this._sheet==="battery"?this._statRows([{label:this._t("battery"),value:f!=null?`${Math.round(f)} %`:"\u2014"},{label:g==null||g>=0?this._t("charging"):this._t("discharging"),value:this._fmt(g==null?null:Math.abs(g),this._t("kw")),tone:T}]):r}

          ${this._sheet==="grid"?this._statRows([{label:`${this._t("to_grid")} \xB7 ${this._t("today")}`,value:this._fmt(this._num(t.export_today_entity),this._t("kwh")),tone:"good"},{label:`${this._t("to_grid")} \xB7 ${this._t("this_month")}`,value:this._fmt(this._num(t.export_month_entity),this._t("kwh")),tone:"good"},{label:`${this._t("from_grid")} \xB7 ${this._t("today")}`,value:this._fmt(this._num(t.import_today_entity),this._t("kwh")),tone:"bad"},{label:`${this._t("from_grid")} \xB7 ${this._t("this_month")}`,value:this._fmt(this._num(t.import_month_entity),this._t("kwh")),tone:"bad"}]):r}

          ${this._sheet==="house"?this._statRows([{label:`${this._t("house")} \xB7 ${this._t("today")}`,value:this._fmt(this._num(t.house_today_entity),this._t("kwh"))},{label:`${this._t("house")} \xB7 ${this._t("this_month")}`,value:this._fmt(this._num(t.house_month_entity),this._t("kwh"))}]):r}
        </div>
      </ha-card>`}};_(vt,"properties",{hass:{},_config:{state:!0},_sheet:{state:!0}}),_(vt,"styles",k);customElements.define("alpicair-solar-card",vt);var si="1.5.0";window.customCards=window.customCards||[];var M=(s,t,e)=>{window.customCards.some(i=>i.type===s)||window.customCards.push({type:s,name:t,description:e,preview:!0,documentationURL:"https://github.com/keziksdmitrijs-byte/recuperator-custom-card"})};M("alpicair-start-menu-card","AlpicAir Start Menu Card","Home screen with clock, weather, configurable equipment shortcuts and menu action.");M("alpicair-recuperator-card","AlpicAir Recuperator Card","Recuperator control: modes, efficiency, fan speed and a configurable settings button.");M("alpicair-recuperator-panel-card","AlpicAir Recuperator Panel Card","Square recuperator panel: fan-speed ring, mode picker, back/power header and temperature tiles.");M("alpicair-ac-panel-card","AlpicAir AC / Ventilation Panel Card","Square climate panel: target-temperature ring, HVAC modes, fan speed and vertical/horizontal swing.");M("alpicair-heat-pump-panel-card","AlpicAir Heat Pump Panel Card","Square heat-pump panel: boiler-temperature ring, floor/boiler targets, modes and quick-action indicators.");M("alpicair-air-conditioner-card","AlpicAir Air Conditioner Card","Single climate entity: dial, HVAC modes, fan and swing control.");M("alpicair-heat-pump-card","AlpicAir Heat Pump Card","Floor and hot water temperatures, modes and quick actions.");M("alpicair-sensors-card","AlpicAir Temperatures Card","Outdoor/indoor/supply/extract temperatures with target slider.");M("alpicair-device-settings-card","AlpicAir Device Settings Card","Night cooling, fan speed presets and device date & time.");M("alpicair-solar-card","AlpicAir Solar Inverter Card","Solar panel inverter: production ring with daily/monthly stats, battery, grid and house tiles.");M("alpicair-ui-settings-card","AlpicAir Interface Settings Card","Global language, theme and accent for all AlpicAir cards.");console.info(`%c ALPICAIR-CARDS %c v${si} `,"color:#fff;background:#03a9f4;font-weight:700;border-radius:4px 0 0 4px","color:#03a9f4;background:#333;font-weight:700;border-radius:0 4px 4px 0");
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
