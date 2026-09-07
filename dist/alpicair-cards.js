var fe=Object.defineProperty;var be=(o,t,e)=>t in o?fe(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var u=(o,t,e)=>be(o,typeof t!="symbol"?t+"":t,e);var gt=globalThis,ft=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xt=Symbol(),Kt=new WeakMap,J=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ft&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Kt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Kt.set(e,t))}return t}toString(){return this.cssText}},Gt=o=>new J(typeof o=="string"?o:o+"",void 0,xt),X=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[a+1],o[0]);return new J(e,o,xt)},Qt=(o,t)=>{if(ft)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=gt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},$t=ft?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Gt(e)})(o):o;var{is:ye,defineProperty:ve,getOwnPropertyDescriptor:we,getOwnPropertyNames:xe,getOwnPropertySymbols:$e,getPrototypeOf:ke}=Object,T=globalThis,Yt=T.trustedTypes,Se=Yt?Yt.emptyScript:"",ze=T.reactiveElementPolyfillSupport,Z=(o,t)=>o,kt={toAttribute(o,t){switch(t){case Boolean:o=o?Se:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Xt=(o,t)=>!ye(o,t),Jt={attribute:!0,type:String,converter:kt,reflect:!1,useDefault:!1,hasChanged:Xt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),T.litPropertyMetadata??(T.litPropertyMetadata=new WeakMap);var F=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Jt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ve(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:a}=we(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let h=s?.call(this);a?.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Jt}static _$Ei(){if(this.hasOwnProperty(Z("elementProperties")))return;let t=ke(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){let e=this.properties,i=[...xe(e),...$e(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift($t(s))}else t!==void 0&&e.push($t(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:kt).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let a=i.getPropertyOptions(s),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:kt;this._$Em=s;let h=n.fromAttribute(e,a.type);this[s]=h??this._$Ej?.get(s)??h,this._$Em=null}}requestUpdate(t,e,i,s=!1,a){if(t!==void 0){let n=this.constructor;if(s===!1&&(a=this[t]),i??(i=n.getPropertyOptions(t)),!((i.hasChanged??Xt)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:a},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,a]of i){let{wrapped:n}=a,h=this[s];n!==!0||this._$AL.has(s)||h===void 0||this.C(s,void 0,a,h)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[Z("elementProperties")]=new Map,F[Z("finalized")]=new Map,ze?.({ReactiveElement:F}),(T.reactiveElementVersions??(T.reactiveElementVersions=[])).push("2.1.2");var et=globalThis,Zt=o=>o,bt=et.trustedTypes,te=bt?bt.createPolicy("lit-html",{createHTML:o=>o}):void 0,ae="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,re="?"+P,Ee=`<${re}>`,I=document,it=()=>I.createComment(""),st=o=>o===null||typeof o!="object"&&typeof o!="function",Mt=Array.isArray,Ae=o=>Mt(o)||typeof o?.[Symbol.iterator]=="function",St=`[ 	
\f\r]`,tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,ie=/>/g,R=RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),se=/'/g,oe=/"/g,ce=/^(?:script|style|textarea|title)$/i,Ft=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),c=Ft(1),E=Ft(2),Ze=Ft(3),j=Symbol.for("lit-noChange"),r=Symbol.for("lit-nothing"),ne=new WeakMap,U=I.createTreeWalker(I,129);function le(o,t){if(!Mt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return te!==void 0?te.createHTML(t):t}var Ce=(o,t)=>{let e=o.length-1,i=[],s,a=t===2?"<svg>":t===3?"<math>":"",n=tt;for(let h=0;h<e;h++){let l=o[h],d,g,m=-1,b=0;for(;b<l.length&&(n.lastIndex=b,g=n.exec(l),g!==null);)b=n.lastIndex,n===tt?g[1]==="!--"?n=ee:g[1]!==void 0?n=ie:g[2]!==void 0?(ce.test(g[2])&&(s=RegExp("</"+g[2],"g")),n=R):g[3]!==void 0&&(n=R):n===R?g[0]===">"?(n=s??tt,m=-1):g[1]===void 0?m=-2:(m=n.lastIndex-g[2].length,d=g[1],n=g[3]===void 0?R:g[3]==='"'?oe:se):n===oe||n===se?n=R:n===ee||n===ie?n=tt:(n=R,s=void 0);let _=n===R&&o[h+1].startsWith("/>")?" ":"";a+=n===tt?l+Ee:m>=0?(i.push(d),l.slice(0,m)+ae+l.slice(m)+P+_):l+P+(m===-2?h:_)}return[le(o,a+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},ot=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,n=0,h=t.length-1,l=this.parts,[d,g]=Ce(t,e);if(this.el=o.createElement(d,i),U.currentNode=this.el.content,e===2||e===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=U.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(let m of s.getAttributeNames())if(m.endsWith(ae)){let b=g[n++],_=s.getAttribute(m).split(P),N=/([.?@])?(.*)/.exec(b);l.push({type:1,index:a,name:N[2],strings:_,ctor:N[1]==="."?Et:N[1]==="?"?At:N[1]==="@"?Ct:D}),s.removeAttribute(m)}else m.startsWith(P)&&(l.push({type:6,index:a}),s.removeAttribute(m));if(ce.test(s.tagName)){let m=s.textContent.split(P),b=m.length-1;if(b>0){s.textContent=bt?bt.emptyScript:"";for(let _=0;_<b;_++)s.append(m[_],it()),U.nextNode(),l.push({type:2,index:++a});s.append(m[b],it())}}}else if(s.nodeType===8)if(s.data===re)l.push({type:2,index:a});else{let m=-1;for(;(m=s.data.indexOf(P,m+1))!==-1;)l.push({type:7,index:a}),m+=P.length-1}a++}}static createElement(t,e){let i=I.createElement("template");return i.innerHTML=t,i}};function q(o,t,e=o,i){if(t===j)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,a=st(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),a===void 0?s=void 0:(s=new a(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=q(o,s._$AS(o,t.values),s,i)),t}var zt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??I).importNode(e,!0);U.currentNode=s;let a=U.nextNode(),n=0,h=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new nt(a,a.nextSibling,this,t):l.type===1?d=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(d=new Nt(a,this,t)),this._$AV.push(d),l=i[++h]}n!==l?.index&&(a=U.nextNode(),n++)}return U.currentNode=I,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},nt=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=r,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),st(t)?t===r||t==null||t===""?(this._$AH!==r&&this._$AR(),this._$AH=r):t!==this._$AH&&t!==j&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ae(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==r&&st(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ot.createElement(le(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let a=new zt(s,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=ne.get(t.strings);return e===void 0&&ne.set(t.strings,e=new ot(t)),e}k(t){Mt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let a of t)s===e.length?e.push(i=new o(this.O(it()),this.O(it()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Zt(t).nextSibling;Zt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=r,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=r}_$AI(t,e=this,i,s){let a=this.strings,n=!1;if(a===void 0)t=q(this,t,e,0),n=!st(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{let h=t,l,d;for(t=a[0],l=0;l<a.length-1;l++)d=q(this,h[i+l],e,l),d===j&&(d=this._$AH[l]),n||(n=!st(d)||d!==this._$AH[l]),d===r?t=r:t!==r&&(t+=(d??"")+a[l+1]),this._$AH[l]=d}n&&!s&&this.j(t)}j(t){t===r?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Et=class extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===r?void 0:t}},At=class extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==r)}},Ct=class extends D{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??r)===j)return;let i=this._$AH,s=t===r&&i!==r||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==r&&(i===r||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Nt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}};var Ne=et.litHtmlPolyfillSupport;Ne?.(ot,nt),(et.litHtmlVersions??(et.litHtmlVersions=[])).push("3.3.3");var he=(o,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let a=e?.renderBefore??null;i._$litPart$=s=new nt(t.insertBefore(it(),a),a,void 0,e??{})}return s._$AI(o),s};var at=globalThis,y=class extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=he(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};y._$litElement$=!0,y.finalized=!0,at.litElementHydrateSupport?.({LitElement:y});var Me=at.litElementPolyfillSupport;Me?.({LitElement:y});(at.litElementVersions??(at.litElementVersions=[])).push("4.2.2");var x=X`
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

  /* --- recuperator panel (ring) --- */
  .panel-card { align-items: center; }
  .ring-wrap { position: relative; display: grid; place-items: center; }
  .ring { display: block; }
  .ring-center {
    position: absolute; inset: 0; margin: auto;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
    border-radius: 50%; border: 2px solid var(--divider-color);
    background: var(--secondary-background-color); cursor: pointer;
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
  .ring-stats { width: 100%; margin-top: 14px; }
  .ring-stat {
    border-radius: 12px; background: var(--secondary-background-color);
    border: 1px solid transparent; padding: calc(8px * var(--alp-bs, 1)) 6px;
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    cursor: pointer; text-align: center; transition: background .18s;
  }
  button.ring-stat { cursor: pointer; }
  .ring-stat.sel { background: rgba(var(--rgb-primary-color, 3,169,244), .16); border-color: var(--primary-color); }
  .ring-stat.sel.heat { background: rgba(244,81,30,.16); border-color: var(--alp-heat, #f4511e); }
  .ring-stat .rs-val { font-size: calc(17px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums; }
  .ring-stepper { display: flex; align-items: center; justify-content: space-between; gap: 10px;
    width: 100%; background: var(--secondary-background-color); border-radius: 12px; padding: 6px 12px; margin-top: 8px; }
  .ring-stepper .rs-target { font-size: calc(22px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums; color: var(--alp-heat, #f4511e); }
  .ring-mini { width: 100%; margin-top: 8px; }

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
  .ph-btn:hover { color: var(--primary-text-color); }
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
  .ring-tiles { width: 100%; margin-top: 14px; }
  .tile {
    min-height: calc(62px * var(--alp-bs, 1)); border-radius: 12px; cursor: pointer;
    border: 1px solid transparent; background: var(--secondary-background-color);
    color: var(--primary-text-color);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
    padding: 8px 4px; text-align: center; transition: background .18s, border-color .18s;
  }
  .tile:active { transform: scale(.97); }
  .tile.sel { background: rgba(var(--rgb-primary-color, 3,169,244), .16); border-color: var(--primary-color); }
  .tile-icon { color: var(--secondary-text-color); display: grid; place-items: center; }
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
  .opt-row {
    display: flex; flex-wrap: wrap; gap: 8px; width: 100%; margin-top: 8px;
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
  .ring-overlay { cursor: pointer; }
`;var yt="alpicair-ui-settings",L="alpicair-ui-settings-changed",pe={language:"auto",theme:"auto",accent:"",compact:!1,buttonScale:1,fontScale:1},A=null;function V(){if(A)return A;let o={};try{o=JSON.parse(window.localStorage.getItem(yt)||"{}")||{}}catch{o={}}return A={...pe,...o},A}function de(o){A={...V(),...o};try{window.localStorage.setItem(yt,JSON.stringify(A))}catch{}window.dispatchEvent(new CustomEvent(L,{detail:A})),document.dispatchEvent(new CustomEvent(L,{detail:A}))}function _e(){A={...pe};try{window.localStorage.removeItem(yt)}catch{}window.dispatchEvent(new CustomEvent(L,{detail:A})),document.dispatchEvent(new CustomEvent(L,{detail:A}))}function Fe(o){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o||"");return t?[1,2,3].map(e=>parseInt(t[e],16)).join(","):null}function Oe(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var $=o=>class extends o{connectedCallback(){super.connectedCallback(),this._onUiSettings=()=>{A=null,this._applyUiSettings(),this.requestUpdate()},window.addEventListener(L,this._onUiSettings),document.addEventListener(L,this._onUiSettings),window.addEventListener("storage",this._onStorage=t=>{(!t.key||t.key===yt)&&this._onUiSettings()}),this._applyUiSettings()}disconnectedCallback(){window.removeEventListener(L,this._onUiSettings),document.removeEventListener(L,this._onUiSettings),window.removeEventListener("storage",this._onStorage),super.disconnectedCallback()}willUpdate(t){super.willUpdate&&super.willUpdate(t),this.isConnected&&this._applyUiSettings()}_applyUiSettings(){let t=V();this._uiSettings=t;let e=t.theme==="dark"||t.theme==="auto"&&Oe();if(t.theme==="auto"?this.removeAttribute("alp-theme"):this.setAttribute("alp-theme",e?"dark":"light"),t.compact?this.setAttribute("alp-compact",""):this.removeAttribute("alp-compact"),t.theme==="auto")this.style.removeProperty("--ha-card-background"),this.style.removeProperty("--card-background-color");else{let n=e?"#1b1c20":"#ffffff";this.style.setProperty("--ha-card-background",n),this.style.setProperty("--card-background-color",n)}let i=this._config||{},s=Number(i.button_scale??t.buttonScale??1)||1,a=Number(i.font_scale??t.fontScale??1)||1;if(this.style.setProperty("--alp-bs",String(s)),this.style.setProperty("--alp-fs",String(a)),t.accent){this.style.setProperty("--alp-accent",t.accent),this.style.setProperty("--primary-color",t.accent);let n=Fe(t.accent);n&&this.style.setProperty("--rgb-primary-color",n)}else this.style.removeProperty("--alp-accent"),this.style.removeProperty("--primary-color"),this.style.removeProperty("--rgb-primary-color")}};var Ot={ui_settings:"Interface settings",language:"Language",theme:"Theme",light:"Light",dark:"Dark",accent_color:"Accent color",button_size:"Button size",font_size:"Font size",compact:"Compact mode",reset:"Reset",applies_to_all:"Applies to all AlpicAir cards in this browser",current:"Current",target:"Target",boiler:"Boiler",recuperator:"Recuperator",recuperator_panel:"Recuperator panel",air_conditioner:"Air conditioner",heat_pump:"Heat pump",sensors:"Temperatures",device_settings:"Device settings",settings:"Settings",back:"Back",recuperation:"Recuperation",fan_speed:"Fan speed",supply:"Supply",exhaust:"Exhaust",off:"Off",on:"On",building_protection:"Building protection",economy:"Economy",comfort:"Comfort",boost:"Boost",outdoor:"Outdoor",indoor:"Indoor",supply_air:"Supply air",extract_air:"Extract air",night_cooling:"Night cooling",night_cooling_schedule:"Night cooling schedule",power:"Power",running:"Running",standby:"Standby",target_temperature:"Target temperature",heat:"Heat",cool:"Cool",dry:"Dry",fan_only:"Fan",auto:"Auto",low:"Low",medium:"Medium",high:"High",full_swing:"Full swing",fixed:"Fixed",swing_vertical:"Vertical swing",swing_horizontal:"Horizontal swing",floor:"Floor",water:"Hot water",heating:"Heating",hot_water:"Hot water",heating_water:"Heating + Water",quick_heat:"Quick heat",quiet_mode:"Quiet",disinfection:"Disinfection",entity_not_found:"Entity not found",date_time:"Date & time",date:"Date",time:"Time",sync_time:"Sync with Home Assistant",start_time:"Start",stop_time:"Stop",nc_extract_start:"Extract air temp. to start",nc_extract_stop:"Extract air temp. to stop",nc_outdoor_stop:"Outdoor temp. to stop",nc_supply_setpoint:"Supply air setpoint"},Te={ui_settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",language:"\u042F\u0437\u044B\u043A",theme:"\u0422\u0435\u043C\u0430",light:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F",dark:"\u0422\u0451\u043C\u043D\u0430\u044F",accent_color:"\u0410\u043A\u0446\u0435\u043D\u0442\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",button_size:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043E\u043A",font_size:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",compact:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",reset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",applies_to_all:"\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u043E \u0432\u0441\u0435\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u043C AlpicAir \u0432 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435",current:"\u0421\u0435\u0439\u0447\u0430\u0441",target:"\u0417\u0430\u0434\u0430\u043D\u043E",boiler:"\u0411\u043E\u0439\u043B\u0435\u0440",recuperator:"\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0442\u043E\u0440",recuperator_panel:"\u041F\u0430\u043D\u0435\u043B\u044C \u0440\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430",air_conditioner:"\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440",heat_pump:"\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u043D\u0430\u0441\u043E\u0441",sensors:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",device_settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",back:"\u041D\u0430\u0437\u0430\u0434",recuperation:"\u0420\u0435\u043A\u0443\u043F\u0435\u0440\u0430\u0446\u0438\u044F",fan_speed:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u0430",supply:"\u041F\u0440\u0438\u0442\u043E\u043A",exhaust:"\u0412\u044B\u0442\u044F\u0436\u043A\u0430",off:"\u0412\u044B\u043A\u043B",on:"\u0412\u043A\u043B",building_protection:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0437\u0434\u0430\u043D\u0438\u044F",economy:"\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u044B\u0439",comfort:"\u041A\u043E\u043C\u0444\u043E\u0440\u0442",boost:"Boost",outdoor:"\u0423\u043B\u0438\u0446\u0430",indoor:"\u0412 \u0434\u043E\u043C\u0435",supply_air:"\u041F\u0440\u0438\u0442\u043E\u0447\u043D\u044B\u0439 \u0432\u043E\u0437\u0434\u0443\u0445",extract_air:"\u0412\u044B\u0442\u044F\u0436\u043D\u043E\u0439 \u0432\u043E\u0437\u0434\u0443\u0445",night_cooling:"\u041D\u043E\u0447\u043D\u043E\u0435 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",night_cooling_schedule:"\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u043E\u0447\u043D\u043E\u0433\u043E \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F",power:"\u041F\u0438\u0442\u0430\u043D\u0438\u0435",running:"\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442",standby:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",target_temperature:"\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",heat:"\u041E\u0431\u043E\u0433\u0440\u0435\u0432",cool:"\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435",dry:"\u041E\u0441\u0443\u0448\u0435\u043D\u0438\u0435",fan_only:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F",auto:"\u0410\u0432\u0442\u043E",low:"\u041D\u0438\u0437\u043A\u0430\u044F",medium:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F",high:"\u0412\u044B\u0441\u043E\u043A\u0430\u044F",full_swing:"\u041A\u0430\u0447\u0430\u043D\u0438\u0435",fixed:"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E",swing_vertical:"\u0412\u0435\u0440\u0442. \u0436\u0430\u043B\u044E\u0437\u0438",swing_horizontal:"\u0413\u043E\u0440. \u0436\u0430\u043B\u044E\u0437\u0438",floor:"\u041F\u043E\u043B",water:"\u0412\u043E\u0434\u0430",heating:"\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435",hot_water:"\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u0432\u043E\u0434\u0430",heating_water:"\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435 + \u0432\u043E\u0434\u0430",quick_heat:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432",quiet_mode:"\u0422\u0438\u0445\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",disinfection:"\u0414\u0435\u0437\u0438\u043D\u0444\u0435\u043A\u0446\u0438\u044F",entity_not_found:"\u041E\u0431\u044A\u0435\u043A\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",date_time:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",date:"\u0414\u0430\u0442\u0430",time:"\u0412\u0440\u0435\u043C\u044F",sync_time:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441 Home Assistant",start_time:"\u0421\u0442\u0430\u0440\u0442",stop_time:"\u0421\u0442\u043E\u043F",nc_extract_start:"\u0422. \u0432\u044B\u0442\u044F\u0436\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u0440\u0442\u0430",nc_extract_stop:"\u0422. \u0432\u044B\u0442\u044F\u0436\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u043E\u043F\u0430",nc_outdoor_stop:"\u0422. \u0443\u043B\u0438\u0446\u044B \u0434\u043B\u044F \u0441\u0442\u043E\u043F\u0430",nc_supply_setpoint:"\u0423\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u0440\u0438\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0430"},Pe={ui_settings:"Saskarnes iestat\u012Bjumi",language:"Valoda",theme:"T\u0113ma",light:"Gai\u0161\u0101",dark:"Tum\u0161\u0101",accent_color:"Akcenta kr\u0101sa",button_size:"Pogu izm\u0113rs",font_size:"Fonta izm\u0113rs",compact:"Kompaktais re\u017E\u012Bms",reset:"Atiestat\u012Bt",applies_to_all:"Attiecas uz vis\u0101m AlpicAir kart\u0113m \u0161aj\u0101 p\u0101rl\u016Bk\u0101",current:"Pa\u0161laik",target:"Uzst\u0101d\u012Bts",boiler:"Boileris",recuperator:"Rekuperators",recuperator_panel:"Rekuperatora panelis",air_conditioner:"Kondicionieris",heat_pump:"Siltums\u016Bknis",sensors:"Temperat\u016Bras",device_settings:"Ier\u012Bces iestat\u012Bjumi",settings:"Iestat\u012Bjumi",back:"Atpaka\u013C",recuperation:"Rekuper\u0101cija",fan_speed:"Ventilatora \u0101trums",supply:"Piepl\u016Bde",exhaust:"Nos\u016Bce",off:"Izsl\u0113gts",on:"Iesl\u0113gts",building_protection:"\u0112kas aizsardz\u012Bba",economy:"Ekonomiskais",comfort:"Norm\u0101lais",boost:"Boost",outdoor:"\u0100r\u0101",indoor:"Iek\u0161telp\u0101s",supply_air:"Piepl\u016Bdes gaiss",extract_air:"Nos\u016Bces gaiss",night_cooling:"Nakts dzes\u0113\u0161ana",night_cooling_schedule:"Nakts dzes\u0113\u0161anas grafiks",power:"Baro\u0161ana",running:"Darbojas",standby:"Gaidst\u0101ve",target_temperature:"M\u0113r\u0137a temperat\u016Bra",heat:"Sild\u012B\u0161ana",cool:"Dzes\u0113\u0161ana",dry:"Sausin\u0101\u0161ana",fan_only:"Ventil\u0101cija",auto:"Auto",low:"Zems",medium:"Vid\u0113js",high:"Augsts",full_swing:"\u0160\u016Bpo\u0161ana",fixed:"Fiks\u0113ts",swing_vertical:"Vert. \u017Eal\u016Bzijas",swing_horizontal:"Horiz. \u017Eal\u016Bzijas",floor:"Gr\u012Bda",water:"\u016Adens",heating:"Apkure",hot_water:"Karstais \u016Bdens",heating_water:"Apkure + \u016Bdens",quick_heat:"\u0100tr\u0101 sild\u012B\u0161ana",quiet_mode:"Klusais re\u017E\u012Bms",disinfection:"Dezinfekcija",entity_not_found:"Objekts nav atrasts",date_time:"Datums un laiks",date:"Datums",time:"Laiks",sync_time:"Sinhroniz\u0113t ar Home Assistant",start_time:"S\u0101kums",stop_time:"Beigas",nc_extract_start:"Nos\u016Bces temp. startam",nc_extract_stop:"Nos\u016Bces temp. aptur\u0113\u0161anai",nc_outdoor_stop:"\u0100ra temp. aptur\u0113\u0161anai",nc_supply_setpoint:"Piepl\u016Bdes gaisa uzst\u0101d\u012Bjums"},Le={en:Ot,ru:Te,lv:Pe};function k(o,t,e){let i=V().language,s=t&&t.language&&t.language!=="auto"?t.language:i&&i!=="auto"?i:o&&o.language?o.language.split("-")[0]:"en";return(Le[s]||Ot)[e]??Ot[e]??e}function W(o,t,e={}){let i=new Event(t,{bubbles:!0,composed:!0,cancelable:!1});return i.detail=e,o.dispatchEvent(i),i}function C(o,t,e,i){if(!(!i||i.action==="none"))switch(i.action){case"more-info":{let s=i.entity||e;s&&W(o,"hass-more-info",{entityId:s});break}case"toggle":{let s=i.entity||e;s&&t.callService("homeassistant","toggle",{entity_id:s});break}case"navigate":i.navigation_path&&(history.pushState(null,"",i.navigation_path),W(window,"location-changed",{}));break;case"url":i.url_path&&window.open(i.url_path,i.new_tab===!1?"_self":"_blank");break;case"call-service":case"perform-action":{let s=i.perform_action||i.service;if(!s||!s.includes("."))return;let[a,n]=s.split(".",2);t.callService(a,n,i.data||i.service_data||{},i.target||void 0);break}case"fire-dom-event":W(o,"ll-custom",i);break;default:break}}function vt(o,t,e=500){let i=null,s=!1,a=l=>{l.button!==void 0&&l.button!==0&&l.pointerType==="mouse"||(s=!1,i=window.setTimeout(()=>{s=!0,navigator.vibrate&&navigator.vibrate(30),t()},e))},n=l=>{i&&(clearTimeout(i),i=null),s||(l.preventDefault(),o()),s=!1},h=()=>{i&&(clearTimeout(i),i=null),s=!1};return{"@pointerdown":a,"@pointerup":n,"@pointerleave":h,"@pointercancel":h,"@contextmenu":l=>l.preventDefault()}}var v=class extends y{constructor(){super(...arguments);u(this,"_labels",{entity:"Entity (climate)",name:"Name",icon:"Icon",language:"Language",show_power:"Power button",show_dial:"Temperature dial",show_temp_slider:"Target temperature slider",show_modes:"Mode buttons",show_fan:"Fan speed selector",show_swing_vertical:"Vertical swing selector",show_swing_horizontal:"Horizontal swing selector",show_current_temperature:"Current temperature",default_hvac_mode:"HVAC mode on power on",button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",dial_size:"Dial size, px"});u(this,"computeLabel",e=>this._labels[e.name]||e.label||e.name)}setConfig(e){this._config={...e}}get schema(){return[]}_valueChanged(e){let i=e.detail.value;W(this,"config-changed",{config:i})}render(){return!this.hass||!this._config?r:c`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this.schema}
        .computeLabel=${this.computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>`}};u(v,"properties",{hass:{},_config:{state:!0}}),u(v,"styles",X`
    :host { display: block; }
    ha-form { display: block; }
  `);var w=o=>({type:"grid",name:"",schema:o.map(t=>({name:t,selector:{boolean:{}}}))}),p=(o,t)=>({name:o,selector:{entity:t?{domain:t}:{}}}),z={name:"language",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto (Home Assistant)"},{value:"en",label:"English"},{value:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{value:"lv",label:"Latvie\u0161u"}]}}},S={type:"grid",name:"",schema:[{name:"button_scale",selector:{number:{min:.8,max:2,step:.05,mode:"slider"}}},{name:"font_scale",selector:{number:{min:.8,max:2,step:.05,mode:"slider"}}}]};var Tt=class extends v{constructor(){super(...arguments);u(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",mode_entity:"Mode entity (select / fan / climate)",power_entity:"Power entity (switch / fan)",recuperation_entity:"Recuperation efficiency sensor (%)",fan_speed_entity:"Fan speed sensor (%)",default_mode:"Mode on power on",show_power:"Power button",show_recuperation:"Recuperation bar",show_fan_speed:"Fan speed bar",show_building_protection:"Button: building protection",show_economy:"Button: economy",show_comfort:"Button: comfort",show_boost:"Button: boost",show_settings_button:"Settings button",settings_button_label:"Settings button label",settings_icon:"Settings button icon",settings_entity:"Settings button target entity",hold_time:"Long press duration (ms)",tap_action:"Short press action",hold_action:"Long press action",option_building_protection:"Option: building protection",option_economy:"Option: economy",option_comfort:"Option: comfort",option_boost:"Option: boost"})}get _entityOptions(){let e=this._config?.mode_entity,i=e&&this.hass?.states?.[e];if(!i)return[];let s=i.attributes||{};return s.options||s.preset_modes||s.hvac_modes||[]}_optionField(e){return{name:e,selector:{select:{mode:"dropdown",custom_value:!0,options:this._entityOptions}}}}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},z,p("mode_entity",["select","input_select","fan","climate"]),p("power_entity",["switch","fan","input_boolean","climate"]),{type:"grid",name:"",schema:[p("recuperation_entity",["sensor","number","input_number"]),p("fan_speed_entity",["sensor","number","input_number"])]},{type:"grid",name:"",schema:[this._optionField("option_building_protection"),this._optionField("option_economy"),this._optionField("option_comfort"),this._optionField("option_boost")]},{name:"default_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["building_protection","economy","comfort","boost"]}}},w(["show_power","show_recuperation","show_fan_speed","show_building_protection","show_economy","show_comfort","show_boost","show_settings_button"]),{type:"grid",name:"",schema:[{name:"settings_button_label",selector:{text:{}}},{name:"settings_icon",selector:{icon:{}}}]},p("settings_entity"),{name:"hold_time",selector:{number:{min:200,max:2e3,step:50,mode:"box",unit_of_measurement:"ms"}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},S]}};customElements.define("alpicair-recuperator-card-editor",Tt);var wt=[{id:"building_protection",icon:"mdi:shield-check",cfg:"show_building_protection",kw:["building","protect","\u0437\u0430\u0449\u0438\u0442","\u0437\u0434\u0430\u043D","aizsardz","\u0113kas","ekas"]},{id:"economy",icon:"mdi:leaf",cfg:"show_economy",kw:["eco","econom","\u044D\u043A\u043E\u043D\u043E\u043C","ekonom"]},{id:"comfort",icon:"mdi:sofa",cfg:"show_comfort",kw:["comfort","normal","\u043A\u043E\u043C\u0444\u043E\u0440\u0442","\u043D\u043E\u0440\u043C\u0430\u043B","norm\u0101l","normal"]},{id:"boost",icon:"mdi:rocket-launch",cfg:"show_boost",tone:"boost",kw:["boost","intens","\u0438\u043D\u0442\u0435\u043D\u0441","\u0442\u0443\u0440\u0431\u043E","turbo","max","\u043C\u0430\u043A\u0441","\u043E\u0431\u0434\u0443\u0432"]}],Pt=o=>String(o??"").trim().toLowerCase(),rt=class extends $(y){static getConfigElement(){return document.createElement("alpicair-recuperator-card-editor")}static getStubConfig(){return{type:"custom:alpicair-recuperator-card",mode_entity:"",power_entity:""}}setConfig(t){this._config={show_power:!0,show_recuperation:!0,show_fan_speed:!0,show_building_protection:!0,show_economy:!0,show_comfort:!0,show_boost:!0,show_settings_button:!0,settings_button_label:"",settings_icon:"mdi:cog",hold_time:500,tap_action:{action:"more-info"},hold_action:{action:"none"},language:"auto",...t}}getCardSize(){return 5}_t(t){return k(this.hass,this._config,t)}_num(t){let e=t&&this.hass.states[t],i=e?Number(e.state):NaN;return Number.isFinite(i)?i:null}get _stateObj(){return this._config.mode_entity&&this.hass.states[this._config.mode_entity]||null}get _options(){let t=this._stateObj;if(!t)return[];let e=t.attributes||{};return e.options||e.preset_modes||e.hvac_modes||[]}get _mode(){let t=this._stateObj;return t?t.state:null}_optionFor(t){let e=this._config[`option_${t}`];if(e)return e;let i=this._options;if(!i.length)return t;let s=wt.find(n=>n.id===t);if(s){let n=i.find(h=>s.kw.some(l=>Pt(h).includes(l)));if(n)return n}let a=wt.findIndex(n=>n.id===t);return i[a]??t}_isActive(t){let e=Pt(this._mode);return e?e===Pt(this._optionFor(t))||e===t:!1}get _on(){if(this._config.power_entity){let t=this.hass.states[this._config.power_entity];return t?!["off","unavailable","unknown"].includes(t.state):!1}return this._mode&&this._mode!=="off"}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=this._optionFor(t),s=e.split(".")[0];s==="select"||s==="input_select"?this.hass.callService(s,"select_option",{entity_id:e,option:i}):s==="fan"?this.hass.callService("fan","set_preset_mode",{entity_id:e,preset_mode:i}):s==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:i})}_togglePower(){let t=this._config.power_entity;t?this.hass.callService("homeassistant","toggle",{entity_id:t}):this._config.mode_entity&&this._setMode(this._on?"off":this._config.default_mode||"comfort")}_down(t){t.pointerType==="mouse"&&t.button!==0||(this._held=!1,this._timer=window.setTimeout(()=>{this._held=!0,navigator.vibrate&&navigator.vibrate(30),C(this,this.hass,this._config.settings_entity||this._config.mode_entity,this._config.hold_action)},Number(this._config.hold_time)||500))}_up(t){this._timer&&(clearTimeout(this._timer),this._timer=null),this._held||(t.preventDefault(),C(this,this.hass,this._config.settings_entity||this._config.mode_entity,this._config.tap_action)),this._held=!1}_cancel(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._held=!1}render(){if(!this.hass||!this._config)return r;let t=this._on,e=this._mode,i=wt.find(h=>this._isActive(h.id))?.id||null,s=this._num(this._config.recuperation_entity),a=this._num(this._config.fan_speed_entity),n=wt.filter(h=>this._config[h.cfg]!==!1);return c`
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
        ${this._config.show_fan_speed&&a!==null?this._bar(this._t("fan_speed"),t?a:0,i==="boost"?"boost":""):r}

        ${n.length?c`<div class="grid c2">
              ${n.map(h=>c`
                <button class="mode ${this._isActive(h.id)?"active":""} ${h.tone||""}"
                  @click=${()=>this._setMode(h.id)}>
                  <ha-icon icon=${h.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(h.id)}
                </button>`)}
            </div>`:r}

        ${this._config.show_settings_button?c`<button class="plain" style="width:100%"
              @pointerdown=${this._down} @pointerup=${this._up}
              @pointerleave=${this._cancel} @pointercancel=${this._cancel}
              @contextmenu=${h=>h.preventDefault()}>
              <ha-icon icon=${this._config.settings_icon||"mdi:cog"} style="--mdc-icon-size:18px"></ha-icon>
              ${this._config.settings_button_label||this._t("settings")}
            </button>`:r}
      </ha-card>`}_bar(t,e,i){let s=Math.max(0,Math.min(100,Number(e)||0));return c`
      <div class="bar-wrap">
        <div class="bar-top"><span>${t}</span><span class="val">${Math.round(s)}%</span></div>
        <div class="bar ${i}"><span style="width:${s}%"></span></div>
      </div>`}};u(rt,"properties",{hass:{},_config:{state:!0}}),u(rt,"styles",x);customElements.define("alpicair-recuperator-card",rt);var K=o=>class extends o{connectedCallback(){super.connectedCallback(),this._panelOutside=t=>{this._hasOpenPanel&&!t.composedPath().includes(this)&&this._closePanels()},document.addEventListener("pointerdown",this._panelOutside,!0)}disconnectedCallback(){document.removeEventListener("pointerdown",this._panelOutside,!0),super.disconnectedCallback()}get _hasOpenPanel(){return!1}_closePanels(){}_navigateBack(){let t=this._config||{},e=t.back_action&&t.back_action.action!=="none"?t.back_action:t.back_path?{action:"navigate",navigation_path:t.back_path}:null;e?C(this,this.hass,null,e):window.history.length>1&&window.history.back()}};function G(o){let t=i=>o._t(i),e=!!o._panelOn;return c`<div class="panel-header">
    <button class="ph-btn back" title=${t("back")} aria-label=${t("back")}
      @click=${()=>o._navigateBack()}>
      <ha-icon icon="mdi:chevron-left"></ha-icon>
    </button>
    <button class="ph-btn power ${e?"on":""}" title=${t("power")} aria-label=${t("power")}
      @click=${()=>o._togglePower()}>
      <ha-icon icon="mdi:power"></ha-icon>
    </button>
  </div>`}function Q(o,t,e){return c`<div class="ring-overlay" @click=${i=>{i.target===i.currentTarget&&t()}}>
    ${e}
  </div>`}var Lt=class extends v{constructor(){super(...arguments);u(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",mode_entity:"Mode entity (select / fan / climate)",power_entity:"Power entity (switch / fan)",fan_speed_entity:"Fan speed sensor (%)",recuperation_entity:"Recuperation efficiency sensor (%)",indoor_entity:"Indoor temperature sensor",outdoor_entity:"Outdoor temperature sensor",supply_entity:"Supply air temperature sensor",extract_entity:"Extract air temperature sensor",target_entity:"Target temperature entity (number / climate)",target_min:"Target minimum (\xB0C)",target_max:"Target maximum (\xB0C)",ring_size:"Ring size (px)",ring_thickness:"Ring thickness (px)",back_path:"Back navigation path (e.g. /lovelace/home)",back_action:"Back button action",default_mode:"Mode on power on",show_header:"Show header (back + power)",show_target:"Show target temperature",show_indoor:"Show indoor temperature",show_recuperation:"Show recuperation",show_outdoor:"Show outdoor temperature (on expand)",show_supply:"Show supply air temperature (on expand)",show_extract:"Show extract air temperature (on expand)",show_mode_picker:"Mode picker on ring tap",option_building_protection:"Option: building protection",option_economy:"Option: economy",option_comfort:"Option: comfort",option_boost:"Option: boost"})}get _entityOptions(){let e=this._config?.mode_entity,i=e&&this.hass?.states?.[e];if(!i)return[];let s=i.attributes||{};return s.options||s.preset_modes||s.hvac_modes||[]}_optionField(e){return{name:e,selector:{select:{mode:"dropdown",custom_value:!0,options:this._entityOptions}}}}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},z,p("mode_entity",["select","input_select","fan","climate"]),p("power_entity",["switch","fan","input_boolean","climate"]),{type:"grid",name:"",schema:[p("fan_speed_entity",["sensor","number","input_number"]),p("recuperation_entity",["sensor","number","input_number"])]},{type:"grid",name:"",schema:[p("indoor_entity",["sensor"]),p("target_entity",["number","input_number","climate"])]},{type:"grid",name:"",schema:[p("outdoor_entity",["sensor"]),p("supply_entity",["sensor"]),p("extract_entity",["sensor"])]},{type:"grid",name:"",schema:[this._optionField("option_building_protection"),this._optionField("option_economy"),this._optionField("option_comfort"),this._optionField("option_boost")]},{name:"default_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["building_protection","economy","comfort","boost"]}}},{type:"grid",name:"",schema:[{name:"ring_size",selector:{number:{min:140,max:480,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"ring_thickness",selector:{number:{min:6,max:40,step:1,mode:"slider",unit_of_measurement:"px"}}}]},{type:"grid",name:"",schema:[{name:"target_min",selector:{number:{min:5,max:30,step:.5,mode:"box",unit_of_measurement:"\xB0C"}}},{name:"target_max",selector:{number:{min:15,max:40,step:.5,mode:"box",unit_of_measurement:"\xB0C"}}}]},{name:"back_path",selector:{text:{}}},{name:"back_action",selector:{ui_action:{}}},w(["show_header","show_target","show_indoor","show_recuperation","show_outdoor","show_supply","show_extract","show_mode_picker"]),S]}};customElements.define("alpicair-recuperator-panel-card-editor",Lt);var Y=[{id:"building_protection",icon:"mdi:shield-check",kw:["building","protect","\u0437\u0430\u0449\u0438\u0442","\u0437\u0434\u0430\u043D","aizsardz","\u0113kas","ekas"]},{id:"economy",icon:"mdi:leaf",kw:["eco","econom","\u044D\u043A\u043E\u043D\u043E\u043C","ekonom"]},{id:"comfort",icon:"mdi:sofa",kw:["comfort","normal","\u043A\u043E\u043C\u0444\u043E\u0440\u0442","\u043D\u043E\u0440\u043C\u0430\u043B","norm\u0101l","normal"]},{id:"boost",icon:"mdi:rocket-launch",tone:"boost",kw:["boost","intens","\u0438\u043D\u0442\u0435\u043D\u0441","\u0442\u0443\u0440\u0431\u043E","turbo","max","\u043C\u0430\u043A\u0441","\u043E\u0431\u0434\u0443\u0432"]}],Bt=o=>String(o??"").trim().toLowerCase(),Be={building_protection:15,economy:35,comfort:55,boost:100},ct=class extends K($(y)){static getConfigElement(){return document.createElement("alpicair-recuperator-panel-card-editor")}static getStubConfig(){return{type:"custom:alpicair-recuperator-panel-card",mode_entity:""}}setConfig(t){this._config={ring_size:260,ring_thickness:18,show_header:!0,show_target:!0,show_indoor:!0,show_recuperation:!0,show_outdoor:!0,show_supply:!0,show_extract:!0,show_mode_picker:!0,language:"auto",...t}}getCardSize(){return 5}_t(t){return k(this.hass,this._config,t)}_num(t){let e=t&&this.hass.states[t],i=e?Number(e.state):NaN;return Number.isFinite(i)?i:null}get _stateObj(){return this._config.mode_entity&&this.hass.states[this._config.mode_entity]||null}get _options(){let t=this._stateObj;if(!t)return[];let e=t.attributes||{};return e.options||e.preset_modes||e.hvac_modes||[]}get _mode(){let t=this._stateObj;return t?t.state:null}_optionFor(t){let e=this._config[`option_${t}`];if(e)return e;let i=this._options;if(!i.length)return t;let s=Y.find(n=>n.id===t);if(s){let n=i.find(h=>s.kw.some(l=>Bt(h).includes(l)));if(n)return n}let a=Y.findIndex(n=>n.id===t);return i[a]??t}_isActive(t){let e=Bt(this._mode);return e?e===Bt(this._optionFor(t))||e===t:!1}get _activeId(){return Y.find(t=>this._isActive(t.id))?.id||null}get _speed(){let t=this._num(this._config.fan_speed_entity);if(t!==null)return Math.max(0,Math.min(100,t));let e=this._activeId;return e?Be[e]??0:0}get _recup(){return this._num(this._config.recuperation_entity)??0}get _panelOn(){if(this._config.power_entity){let t=this.hass.states[this._config.power_entity];return t?!["off","unavailable","unknown"].includes(t.state):!1}return!!this._mode&&this._mode!=="off"}_togglePower(){let t=this._config.power_entity;t?this.hass.callService("homeassistant","toggle",{entity_id:t}):this._config.mode_entity&&this._setMode(this._panelOn?"off":this._config.default_mode||"comfort")}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=this._optionFor(t),s=e.split(".")[0];s==="select"||s==="input_select"?this.hass.callService(s,"select_option",{entity_id:e,option:i}):s==="fan"?this.hass.callService("fan","set_preset_mode",{entity_id:e,preset_mode:i}):s==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:i}),this._open=!1}get _target(){let t=this._config.target_entity;if(!t)return null;let e=this.hass.states[t],i=e?Number(e.state):NaN;return Number.isFinite(i)?i:null}_setTarget(t){let e=this._config.target_entity;if(!e)return;let i=e.split(".")[0],s=Math.min(this._config.target_max??30,Math.max(this._config.target_min??15,t));i==="number"||i==="input_number"?this.hass.callService(i,"set_value",{entity_id:e,value:s}):i==="climate"&&this.hass.callService("climate","set_temperature",{entity_id:e,temperature:s})}get _hasOpenPanel(){return this._open||this._editingTarget||this._showTemps}_closePanels(){this._open=!1,this._editingTarget=!1,this._showTemps=!1}render(){if(!this.hass||!this._config)return r;let t=Number(this._config.ring_size)||260,e=Number(this._config.ring_thickness)||18,i=(t-e)/2-2,s=2*Math.PI*i,a=this._speed,n=this._activeId,h=(Y.find(d=>d.id===n)||Y[2]).icon,l=n==="boost"?"var(--alp-boost, #ff9800)":n?"var(--primary-color)":"var(--disabled-text-color)";return c`
      <ha-card class="panel-card">
        ${this._config.show_header!==!1?G(this):r}

        <div class="ring-wrap" style=${`width:${t}px;height:${t}px`}>
          <svg width=${t} height=${t} class="ring" style="transform:rotate(-90deg)">
            ${E`<circle cx=${t/2} cy=${t/2} r=${i} fill="none"
              stroke="var(--secondary-background-color)" stroke-width=${e} stroke-linecap="round" />`}
            ${E`<circle cx=${t/2} cy=${t/2} r=${i} fill="none"
              stroke=${l} stroke-width=${e} stroke-linecap="round"
              stroke-dasharray=${s} stroke-dashoffset=${s*(1-a/100)}
              style="transition:stroke-dashoffset .5s, stroke .3s" />`}
          </svg>

          <button class="ring-center" @click=${()=>this._open=!this._open}>
            <ha-icon icon=${h} style=${`--mdc-icon-size:28px;color:${l}`}></ha-icon>
            <span class="rc-mode">${n?this._t(n):this._mode||this._t("off")}</span>
            <span class="rc-pct">${Math.round(a)}%</span>
          </button>

          ${this._open&&this._config.show_mode_picker?Q(this,()=>this._open=!1,c`
                <div class="ring-overlay-grid">
                  ${Y.map(d=>c`
                    <button class="mode ${this._isActive(d.id)?"active":""} ${d.tone||""}"
                      @click=${()=>this._setMode(d.id)}>
                      <ha-icon icon=${d.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(d.id)}
                    </button>`)}
                </div>`):r}
        </div>

        <div class="grid c3 ring-stats">
          ${this._config.show_target?c`<button class="ring-stat ${this._editingTarget?"sel":""}"
                @click=${()=>{this._editingTarget=!this._editingTarget,this._showTemps=!1}}>
                <ha-icon icon="mdi:target" style="--mdc-icon-size:18px;color:var(--primary-color)"></ha-icon>
                <span class="rs-val">${this._target!==null?this._target.toFixed(1)+"\xB0":"\u2014"}</span>
              </button>`:r}
          ${this._config.show_indoor?c`<button class="ring-stat ${this._showTemps?"sel heat":""}"
                @click=${()=>{this._showTemps=!this._showTemps,this._editingTarget=!1}}>
                <ha-icon icon="mdi:home-thermometer" style="--mdc-icon-size:18px;color:var(--alp-heat,#f4511e)"></ha-icon>
                <span class="rs-val">${this._num(this._config.indoor_entity)!==null?this._num(this._config.indoor_entity).toFixed(1)+"\xB0":"\u2014"}</span>
              </button>`:r}
          ${this._config.show_recuperation?c`<div class="ring-stat">
                <ha-icon icon="mdi:recycle" style="--mdc-icon-size:18px;color:var(--alp-perf,#4caf50)"></ha-icon>
                <span class="rs-val">${Math.round(this._recup)}%</span>
              </div>`:r}
        </div>

        ${this._editingTarget&&this._target!==null?c`<div class="ring-stepper">
              <button class="stepbtn" @click=${()=>this._setTarget(this._target-.5)}>−</button>
              <span class="rs-target">${this._target.toFixed(1)}°C</span>
              <button class="stepbtn" @click=${()=>this._setTarget(this._target+.5)}>+</button>
            </div>`:r}

        ${this._showTemps?c`<div class="grid c3 ring-mini">
              ${this._mini("mdi:snowflake",this._num(this._config.outdoor_entity),"cool")}
              ${this._mini("mdi:arrow-down",this._num(this._config.supply_entity),"heat")}
              ${this._mini("mdi:arrow-up",this._num(this._config.extract_entity),"heat")}
            </div>`:r}
      </ha-card>`}_mini(t,e,i){return c`<div class="ring-stat">
      <ha-icon icon=${t} style=${`--mdc-icon-size:18px;color:${i==="heat"?"var(--alp-heat,#f4511e)":"var(--alp-cool,#039be5)"}`}></ha-icon>
      <span class="rs-val">${e!==null?e.toFixed(1)+"\xB0":"\u2014"}</span>
    </div>`}};u(ct,"properties",{hass:{},_config:{state:!0},_open:{state:!0},_editingTarget:{state:!0},_showTemps:{state:!0}}),u(ct,"styles",x);customElements.define("alpicair-recuperator-panel-card",ct);var Rt=class extends v{constructor(){super(...arguments);u(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",entity:"Climate entity",default_hvac_mode:"HVAC mode on power on",ring_size:"Ring size (px)",ring_thickness:"Ring thickness (px)",back_path:"Back navigation path (e.g. /lovelace/home)",back_action:"Back button action",show_power:"Show header (back + power)",show_mode:"Show mode tile",show_fan:"Show fan speed tile",show_swing_vertical:"Show vertical swing tile",show_swing_horizontal:"Show horizontal swing tile",show_current_temperature:"Show current temperature"})}get schema(){return[p("entity","climate"),{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},z,{name:"default_hvac_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["auto","heat_cool","cool","heat","dry","fan_only"]}}},{type:"grid",name:"",schema:[{name:"ring_size",selector:{number:{min:140,max:480,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"ring_thickness",selector:{number:{min:6,max:40,step:1,mode:"slider",unit_of_measurement:"px"}}}]},{name:"back_path",selector:{text:{}}},{name:"back_action",selector:{ui_action:{}}},w(["show_power","show_mode","show_fan","show_swing_vertical","show_swing_horizontal","show_current_temperature"]),S]}};customElements.define("alpicair-ac-panel-card-editor",Rt);var Re={off:"mdi:power",fan_only:"mdi:fan",dry:"mdi:water-percent",cool:"mdi:snowflake",heat:"mdi:fire",heat_cool:"mdi:autorenew",auto:"mdi:autorenew"},Ue={off:"off",fan_only:"fan_only",dry:"dry",cool:"cool",heat:"heat",heat_cool:"auto",auto:"auto"},ue="mdi:arrow-up-down",me="mdi:arrow-left-right",lt=class extends K($(y)){static getConfigElement(){return document.createElement("alpicair-ac-panel-card-editor")}static getStubConfig(t){return{type:"custom:alpicair-ac-panel-card",entity:Object.keys(t.states).find(i=>i.startsWith("climate."))||""}}setConfig(t){if(!t.entity||!t.entity.startsWith("climate."))throw new Error("An entity of domain `climate` is required");this._config={show_power:!0,show_mode:!0,show_fan:!0,show_swing_vertical:!0,show_swing_horizontal:!0,show_current_temperature:!0,ring_size:260,ring_thickness:18,language:"auto",...t}}getCardSize(){return 6}_t(t){return k(this.hass,this._config,t)}get _stateObj(){return this.hass&&this.hass.states[this._config.entity]}_modeLabel(t){return this._t(Ue[t]||t)||t}_call(t,e){this.hass.callService("climate",t,{entity_id:this._config.entity,...e})}get _panelOn(){let t=this._stateObj;return!!t&&t.state!=="off"&&t.state!=="unavailable"&&t.state!=="unknown"}_togglePower(){let t=this._stateObj;if(t)if(t.state==="off"){let e=this._config.default_hvac_mode||(t.attributes.hvac_modes||[]).find(i=>i!=="off")||"auto";this._call("set_hvac_mode",{hvac_mode:e})}else this._call("set_hvac_mode",{hvac_mode:"off"})}get _target(){return this._pending??this._stateObj?.attributes?.temperature}_setTarget(t){let e=this._stateObj?.attributes||{},i=e.min_temp??16,s=e.max_temp??30,a=Math.min(s,Math.max(i,t));this._pending=a,clearTimeout(this._d),this._d=setTimeout(()=>{this._call("set_temperature",{temperature:a}),this._pending=void 0},400)}get _hasOpenPanel(){return this._sheet!=null}_closePanels(){this._sheet=null}_toggle(t){this._sheet=this._sheet===t?null:t}render(){if(!this.hass||!this._config)return r;let t=this._stateObj;if(!t)return c`<ha-card><div class="warn">${this._t("entity_not_found")}: ${this._config.entity}</div></ha-card>`;let e=t.attributes||{},i=this._panelOn,s=e.min_temp??16,a=e.max_temp??30,n=e.target_temp_step??.5,h=this._target??s,l=Math.min(1,Math.max(0,(h-s)/(a-s))),d=Number(this._config.ring_size)||260,g=Number(this._config.ring_thickness)||18,m=(d-g)/2-2,b=2*Math.PI*m,_=i?"var(--primary-color)":"var(--disabled-text-color)",N=e.current_temperature,M=[];return this._config.show_mode&&M.push({id:"mode",icon:"mdi:tune",value:i?this._modeLabel(t.state):this._t("off"),label:this._t("settings")}),this._config.show_fan&&e.fan_modes&&M.push({id:"fan",icon:"mdi:fan",value:this._t(e.fan_mode)||e.fan_mode||"\u2014",label:this._t("fan_speed")}),this._config.show_swing_vertical&&e.swing_modes&&M.push({id:"swing_v",icon:ue,value:this._t(e.swing_mode)||e.swing_mode||"\u2014",label:this._t("swing_vertical")}),this._config.show_swing_horizontal&&e.swing_horizontal_modes&&M.push({id:"swing_h",icon:me,value:this._t(e.swing_horizontal_mode)||e.swing_horizontal_mode||"\u2014",label:this._t("swing_horizontal")}),c`
      <ha-card class="panel-card">
        ${this._config.show_power!==!1||this._config.back_path||this._config.back_action?G(this):r}

        <div class="ring-wrap" style=${`width:${d}px;height:${d}px`}>
          <svg width=${d} height=${d} class="ring" style="transform:rotate(-90deg)">
            ${E`<circle cx=${d/2} cy=${d/2} r=${m} fill="none"
              stroke="var(--secondary-background-color)" stroke-width=${g} stroke-linecap="round" />`}
            ${E`<circle cx=${d/2} cy=${d/2} r=${m} fill="none"
              stroke=${_} stroke-width=${g} stroke-linecap="round"
              stroke-dasharray=${b} stroke-dashoffset=${b*(1-(i?l:0))}
              style="transition:stroke-dashoffset .5s, stroke .3s" />`}
          </svg>

          <button class="ring-center" @click=${()=>this._toggle("temp")}>
            <span class="rc-cap">${this._t("target_temperature")}</span>
            <span class="rc-target">${Number(h).toFixed(n<1?1:0)}°</span>
            <span class="rc-sub">${this._config.show_current_temperature&&N!=null?`${this._t("current")} ${N}\xB0 \xB7 `:""}${i?this._modeLabel(t.state):this._t("off")}</span>
          </button>

          ${this._sheet==="temp"?Q(this,()=>this._sheet=null,c`
                <div class="ring-temp-edit">
                  <button class="stepbtn round" @click=${()=>this._setTarget(Number(h)-n)}>−</button>
                  <span class="rte-val">${Number(h).toFixed(n<1?1:0)}°</span>
                  <button class="stepbtn round" @click=${()=>this._setTarget(Number(h)+n)}>+</button>
                </div>`):r}
        </div>

        ${M.length?c`<div class="grid c${Math.min(4,M.length)} ring-tiles">
              ${M.map(f=>c`
                <button class="tile ${this._sheet===f.id?"sel":""}" @click=${()=>this._toggle(f.id)}>
                  <span class="tile-icon"><ha-icon icon=${f.icon} style="--mdc-icon-size:18px"></ha-icon></span>
                  <span class="tile-val">${f.value}</span>
                </button>`)}
            </div>`:r}

        ${this._sheet==="mode"?this._optionRow((e.hvac_modes||[]).filter(f=>f!=="off"),f=>this._call("set_hvac_mode",{hvac_mode:f}),f=>t.state===f,f=>this._modeLabel(f),f=>Re[f]||"mdi:thermostat"):r}
        ${this._sheet==="fan"?this._optionRow(e.fan_modes||[],f=>this._call("set_fan_mode",{fan_mode:f}),f=>e.fan_mode===f,f=>this._t(f)||f,()=>"mdi:fan"):r}
        ${this._sheet==="swing_v"?this._optionRow(e.swing_modes||[],f=>this._call("set_swing_mode",{swing_mode:f}),f=>e.swing_mode===f,f=>this._t(f)||f,()=>ue):r}
        ${this._sheet==="swing_h"?this._optionRow(e.swing_horizontal_modes||[],f=>this._call("set_swing_horizontal_mode",{swing_horizontal_mode:f}),f=>e.swing_horizontal_mode===f,f=>this._t(f)||f,()=>me):r}
      </ha-card>`}_optionRow(t,e,i,s,a){return c`<div class="opt-row">
      ${t.map(n=>c`
        <button class="opt ${i(n)?"active":""}" @click=${()=>{e(n),this._sheet=null}}>
          <ha-icon icon=${a(n)} style="--mdc-icon-size:18px"></ha-icon><span>${s(n)}</span>
        </button>`)}
    </div>`}};u(lt,"properties",{hass:{},_config:{state:!0},_pending:{state:!0},_sheet:{state:!0}}),u(lt,"styles",x);customElements.define("alpicair-ac-panel-card",lt);var Ut=class extends v{constructor(){super(...arguments);u(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",power_entity:"Power entity",floor_current_entity:"Floor temperature sensor",floor_target_entity:"Floor target (number / input_number)",water_current_entity:"Boiler temperature sensor",water_target_entity:"Boiler target (number / input_number)",mode_entity:"Mode entity (select)",option_heating:"Option: heating",option_hot_water:"Option: hot water",option_heating_water:"Option: heating + water",quick_heat_entity:"Quick heat entity (switch)",quiet_mode_entity:"Quiet mode entity (switch)",disinfection_entity:"Disinfection entity (switch)",ring_size:"Ring size (px)",ring_thickness:"Ring thickness (px)",back_path:"Back navigation path (e.g. /lovelace/home)",back_action:"Back button action",show_power:"Show header (back + power)",show_mode:"Show mode tile",show_extras:"Show quick modes tile",show_current_temperature:"Show current temperature"})}get _options(){let e=this._config&&this.hass&&this.hass.states[this._config.mode_entity];return e&&e.attributes&&e.attributes.options||[]}_optionField(e){let i=this._options;return i.length?{name:e,selector:{select:{mode:"dropdown",options:i}}}:{name:e,selector:{text:{}}}}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},z,p("power_entity",["switch","input_boolean","climate"]),{type:"grid",name:"",schema:[p("floor_current_entity",["sensor","number","input_number"]),p("floor_target_entity",["number","input_number","climate"])]},{type:"grid",name:"",schema:[p("water_current_entity",["sensor","number","input_number"]),p("water_target_entity",["number","input_number","water_heater","climate"])]},p("mode_entity",["select","input_select","climate"]),{type:"grid",name:"",schema:[this._optionField("option_heating"),this._optionField("option_hot_water"),this._optionField("option_heating_water")]},{type:"grid",name:"",schema:[p("quick_heat_entity",["switch","input_boolean","script"]),p("quiet_mode_entity",["switch","input_boolean"]),p("disinfection_entity",["switch","input_boolean","script"])]},{type:"grid",name:"",schema:[{name:"ring_size",selector:{number:{min:140,max:480,step:10,mode:"slider",unit_of_measurement:"px"}}},{name:"ring_thickness",selector:{number:{min:6,max:40,step:1,mode:"slider",unit_of_measurement:"px"}}}]},{name:"back_path",selector:{text:{}}},{name:"back_action",selector:{ui_action:{}}},w(["show_power","show_mode","show_extras","show_current_temperature"]),S]}};customElements.define("alpicair-heat-pump-panel-card-editor",Ut);var ge=[{id:"heating",icon:"mdi:radiator"},{id:"hot_water",icon:"mdi:water-boiler"},{id:"heating_water",icon:"mdi:home-thermometer"}],Ie=[{id:"quick_heat",icon:"mdi:flash",cfg:"show_quick_heat",entity:"quick_heat_entity",tone:"boost"},{id:"quiet_mode",icon:"mdi:volume-off",cfg:"show_quiet_mode",entity:"quiet_mode_entity"},{id:"disinfection",icon:"mdi:shield-sun",cfg:"show_disinfection",entity:"disinfection_entity",tone:"perf"}],ht=class extends K($(y)){static getConfigElement(){return document.createElement("alpicair-heat-pump-panel-card-editor")}static getStubConfig(){return{type:"custom:alpicair-heat-pump-panel-card"}}setConfig(t){this._config={show_power:!0,show_mode:!0,show_extras:!0,show_current_temperature:!0,ring_size:260,ring_thickness:18,language:"auto",...t},this._pending={}}getCardSize(){return 6}_t(t){return k(this.hass,this._config,t)}_st(t){return t&&this.hass&&this.hass.states[t]}_num(t){let e=this._st(t);if(!e)return null;let i=Number(e.state);return Number.isFinite(i)?i:null}_target(t){if(this._pending[t]!=null)return this._pending[t];let e=this._st(t);if(!e)return null;if(t.startsWith("climate.")||t.startsWith("water_heater.")){let s=Number(e.attributes.temperature);return Number.isFinite(s)?s:null}let i=Number(e.state);return Number.isFinite(i)?i:null}_limits(t,e){let i=this._st(t),s=i&&i.attributes||{};return{min:s.min??s.min_temp??e.min,max:s.max??s.max_temp??e.max,step:s.step??s.target_temp_step??e.step}}_setTarget(t,e){t&&(this._pending={...this._pending,[t]:e},clearTimeout(this._d),this._d=setTimeout(()=>{let i=t.split(".")[0];i==="number"||i==="input_number"?this.hass.callService(i,"set_value",{entity_id:t,value:e}):i==="water_heater"?this.hass.callService("water_heater","set_temperature",{entity_id:t,temperature:e}):this.hass.callService("climate","set_temperature",{entity_id:t,temperature:e}),this._pending={}},500))}get _panelOn(){let t=this._config.power_entity;if(t){let e=this._st(t);return e?!["off","unavailable","unknown"].includes(e.state):!1}return!0}_togglePower(){let t=this._config.power_entity;t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_isOn(t){let e=this._st(t);return e?!["off","unavailable","unknown"].includes(e.state):!1}_toggle(t){t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_optionFor(t){return this._config[`option_${t}`]||t}_isMode(t){let e=this._st(this._config.mode_entity);return!!e&&e.state===this._optionFor(t)}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=e.split(".")[0];i==="select"||i==="input_select"?this.hass.callService(i,"select_option",{entity_id:e,option:this._optionFor(t)}):i==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:this._optionFor(t)}),this._sheet=null}get _hasOpenPanel(){return this._sheet!=null}_closePanels(){this._sheet=null}_toggleSheet(t){this._sheet=this._sheet===t?null:t}get _waterNow(){return this._num(this._config.water_current_entity)}get _waterLimits(){return this._limits(this._config.water_target_entity,{min:30,max:65,step:1})}get _floorLimits(){return this._limits(this._config.floor_target_entity,{min:15,max:35,step:.5})}render(){if(!this.hass||!this._config)return r;let t=this._config,e=this._panelOn,i=this._waterNow,s=this._waterLimits,a=i!=null?Math.min(1,Math.max(0,(i-s.min)/(s.max-s.min))):0,n=Number(t.ring_size)||260,h=Number(t.ring_thickness)||18,l=(n-h)/2-2,d=2*Math.PI*l,g=e?"var(--alp-water, #039be5)":"var(--disabled-text-color)",m=ge.find(_=>this._isMode(_.id)),b=Ie.filter(_=>t[_.cfg]!==!1&&t[_.entity]);return c`
      <ha-card class="panel-card">
        ${t.show_power!==!1||t.back_path||t.back_action?G(this):r}

        <div class="ring-wrap" style=${`width:${n}px;height:${n}px`}>
          <svg width=${n} height=${n} class="ring" style="transform:rotate(-90deg)">
            ${E`<circle cx=${n/2} cy=${n/2} r=${l} fill="none"
              stroke="var(--secondary-background-color)" stroke-width=${h} stroke-linecap="round" />`}
            ${E`<circle cx=${n/2} cy=${n/2} r=${l} fill="none"
              stroke=${g} stroke-width=${h} stroke-linecap="round"
              stroke-dasharray=${d} stroke-dashoffset=${d*(1-(e?a:0))}
              style="transition:stroke-dashoffset .5s, stroke .3s" />`}
          </svg>

          <button class="ring-center" @click=${()=>this._toggleSheet("temp")}>
            <span class="rc-cap"><ha-icon icon="mdi:water-thermometer" style="--mdc-icon-size:16px;color:var(--alp-water,#039be5)"></ha-icon> ${this._t("hot_water")}</span>
            <span class="rc-target" style=${e?"color:var(--alp-water,#039be5)":""}>${i!=null?i.toFixed(1)+"\xB0":"\u2014"}</span>
            <span class="rc-sub">${m?this._t(m.id):e?this._t("running"):this._t("off")}</span>
          </button>

          ${this._sheet==="temp"?Q(this,()=>this._sheet=null,c`
                <div class="ring-target-rows">
                  ${this._targetRow("floor","mdi:heating-coil",t.floor_target_entity,this._floorLimits,"heat")}
                  ${this._targetRow("water","mdi:water-thermometer",t.water_target_entity,s,"water")}
                </div>`):r}
        </div>

        <div class="grid c2 ring-tiles">
          ${t.show_mode&&t.mode_entity?c`<button class="tile ${this._sheet==="mode"?"sel":""}" @click=${()=>this._toggleSheet("mode")}>
                <span class="tile-icon"><ha-icon icon="mdi:tune" style="--mdc-icon-size:18px"></ha-icon></span>
                <span class="tile-val">${m?this._t(m.id):this._t("settings")}</span>
              </button>`:r}
          ${t.show_extras&&b.length?c`<button class="tile ${this._sheet==="extra"?"sel":""}" @click=${()=>this._toggleSheet("extra")}>
                <span class="tile-icon"><ha-icon icon="mdi:flash" style="--mdc-icon-size:18px"></ha-icon></span>
                <span class="tile-val">${this._t("settings")}</span>
                <span class="tile-dots">
                  ${b.map(_=>c`<span class="dot ${this._isOn(t[_.entity])?_.tone||"active":""}"></span>`)}
                </span>
              </button>`:r}
        </div>

        ${this._sheet==="mode"?c`<div class="opt-row">
              ${ge.map(_=>c`
                <button class="opt ${this._isMode(_.id)?"active":""}" @click=${()=>this._setMode(_.id)}>
                  <ha-icon icon=${_.icon} style="--mdc-icon-size:18px"></ha-icon><span>${this._t(_.id)}</span>
                </button>`)}
            </div>`:r}

        ${this._sheet==="extra"?c`<div class="opt-row">
              ${b.map(_=>c`
                <button class="opt ${this._isOn(t[_.entity])?`active ${_.tone||""}`:""}" @click=${()=>this._toggle(t[_.entity])}>
                  <ha-icon icon=${_.icon} style="--mdc-icon-size:18px"></ha-icon><span>${this._t(_.id)}</span>
                </button>`)}
            </div>`:r}
      </ha-card>`}_targetRow(t,e,i,s,a){let n=this._target(i),h=Number(s.step)||.5,l=h<1?1:0,d=b=>Math.min(Number(s.max),Math.max(Number(s.min),Math.round(b*10)/10)),g=n??Number(s.min),m=a==="water"?"var(--alp-water, #039be5)":"var(--alp-heat, #f4511e)";return c`<div class="rt-row">
      <button class="stepbtn round" @click=${()=>this._setTarget(i,d(g-h))}>−</button>
      <span class="rt-inner">
        <span class="rt-label"><ha-icon icon=${e} style=${`--mdc-icon-size:15px;color:${m}`}></ha-icon> ${this._t(t)}</span>
        <span class="rt-val" style=${`color:${m}`}>${Number(g).toFixed(l)}°</span>
      </span>
      <button class="stepbtn round" @click=${()=>this._setTarget(i,d(g+h))}>+</button>
    </div>`}};u(ht,"properties",{hass:{},_config:{state:!0},_pending:{state:!0},_sheet:{state:!0}}),u(ht,"styles",x);customElements.define("alpicair-heat-pump-panel-card",ht);var It=class extends v{get schema(){return[p("entity","climate"),{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},z,{name:"default_hvac_mode",selector:{select:{mode:"dropdown",custom_value:!0,options:["auto","heat_cool","cool","heat","dry","fan_only"]}}},w(["show_power","show_dial","show_temp_slider","show_modes","show_current_temperature","show_fan","show_swing_vertical","show_swing_horizontal"]),{name:"dial_size",selector:{number:{min:160,max:480,step:10,mode:"slider"}}},S]}};customElements.define("alpicair-air-conditioner-card-editor",It);var je={off:"mdi:power",fan_only:"mdi:fan",dry:"mdi:water-percent",cool:"mdi:snowflake",heat:"mdi:fire",heat_cool:"mdi:autorenew",auto:"mdi:autorenew"},He={off:"off",fan_only:"fan_only",dry:"dry",cool:"cool",heat:"heat",heat_cool:"auto",auto:"auto"},H=215,B=290;function Ht(o,t,e,i){let s=(i-90)*Math.PI/180;return{x:o+e*Math.cos(s),y:t+e*Math.sin(s)}}function jt(o,t,e=80){let i=Ht(100,100,e,o),s=Ht(100,100,e,t);return`M ${i.x} ${i.y} A ${e} ${e} 0 ${t-o>180?1:0} 1 ${s.x} ${s.y}`}var pt=class extends $(y){static getConfigElement(){return document.createElement("alpicair-air-conditioner-card-editor")}static getStubConfig(t){return{type:"custom:alpicair-air-conditioner-card",entity:Object.keys(t.states).find(i=>i.startsWith("climate."))||""}}setConfig(t){if(!t.entity||!t.entity.startsWith("climate."))throw new Error("An entity of domain `climate` is required");this._config={show_power:!0,show_dial:!0,show_modes:!0,show_fan:!0,show_swing_vertical:!0,show_swing_horizontal:!0,show_current_temperature:!0,show_temp_slider:!0,dial_size:260,language:"auto",...t}}getCardSize(){return 6}get _stateObj(){return this.hass&&this.hass.states[this._config.entity]}_t(t){return k(this.hass,this._config,t)}_modeLabel(t){return this._t(He[t]||t)||t}_call(t,e){this.hass.callService("climate",t,{entity_id:this._config.entity,...e})}_setTemp(t){this._pending=t,clearTimeout(this._debounce),this._debounce=setTimeout(()=>{this._call("set_temperature",{temperature:t}),this._pending=void 0},400)}_commitTemp(){if(clearTimeout(this._debounce),this._pending==null)return;let t=this._pending;this._pending=void 0,this._call("set_temperature",{temperature:t})}_dialDrag(t,e,i,s){let a=this._stateObj;if(!a||a.state==="off"||a.state==="unavailable")return;t.preventDefault();let n=t.currentTarget.getBoundingClientRect(),h=n.left+n.width/2,l=n.top+n.height/2,d=m=>{let b=Math.atan2(m.clientX-h,l-m.clientY)*180/Math.PI;b<0&&(b+=360);let _=b-H;_<0&&(_+=360),_>B&&(_=_-B>(360-B)/2?0:B);let N=e+_/B*(i-e),M=Math.min(i,Math.max(e,Math.round(N/s)*s));this._pending=Number(M.toFixed(2))},g=()=>{window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),this._commitTemp()};d(t),window.addEventListener("pointermove",d),window.addEventListener("pointerup",g),window.addEventListener("pointercancel",g)}_togglePower(){let t=this._stateObj;if(t.state==="off"){let e=this._config.default_hvac_mode||(t.attributes.hvac_modes||[]).find(i=>i!=="off")||"auto";this._call("set_hvac_mode",{hvac_mode:e})}else this._call("set_hvac_mode",{hvac_mode:"off"})}render(){if(!this.hass||!this._config)return r;let t=this._stateObj;if(!t)return c`<ha-card><div class="warn">${this._t("entity_not_found")}: ${this._config.entity}</div></ha-card>`;let e=t.attributes,i=t.state!=="off"&&t.state!=="unavailable",s=e.min_temp??16,a=e.max_temp??30,n=e.target_temp_step??.5,h=this._pending??e.temperature??s,l=Math.min(1,Math.max(0,(h-s)/(a-s))),d=H+l*B,g=Ht(100,100,80,d),m=(e.hvac_modes||[]).filter(_=>_!=="off"),b=Math.min(5,Math.max(2,m.length));return c`
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
                @pointerdown=${_=>this._dialDrag(_,s,a,n)}>
                ${E`<path d=${jt(H,H+B)} fill="none" stroke="transparent" stroke-width="34" stroke-linecap="round" />`}
                ${E`<path d=${jt(H,H+B)} fill="none" stroke="var(--secondary-background-color)" stroke-width="9" stroke-linecap="round" />`}
                ${i?E`<path d=${jt(H,d)} fill="none" stroke="var(--primary-color)" stroke-width="9" stroke-linecap="round" />`:r}
                ${E`<circle cx=${g.x} cy=${g.y} r="13" fill="var(--card-background-color)" stroke=${i?"var(--primary-color)":"var(--disabled-text-color)"} stroke-width="3" />`}
              </svg>
              <div class="dial-center">
                <div class="mode-label">${i?this._modeLabel(t.state):this._t("off")}</div>
                <div class="target">${Number(h).toFixed(n<1?1:0)}<sup>°C</sup></div>
                ${this._config.show_current_temperature&&e.current_temperature!=null?c`<div class="current"><ha-icon icon="mdi:thermometer" style="--mdc-icon-size:15px"></ha-icon>${e.current_temperature} °C</div>`:r}
              </div>
            </div>
            ${this._config.show_temp_slider===!1?r:c`<input type="range" min=${s} max=${a} step=${n} .value=${String(h)}
                  aria-label=${this._t("target_temperature")}
                  @input=${_=>this._setTemp(Number(_.target.value))} ?disabled=${!i} />`}`:r}

        ${this._config.show_modes&&m.length?c`<div class="grid c${b}">
              ${m.map(_=>c`
                <button class="mode ${i&&t.state===_?"active":""}"
                  title=${this._modeLabel(_)} aria-label=${this._modeLabel(_)}
                  @click=${()=>this._call("set_hvac_mode",{hvac_mode:_})}>
                  <ha-icon icon=${je[_]||"mdi:thermostat"}></ha-icon>
                </button>`)}
            </div>`:r}

        <div class="${i?"":"dimmed"}" style="display:flex;flex-direction:column;gap:8px;">
          ${this._config.show_fan&&e.fan_modes?this._select("mdi:fan",e.fan_mode,e.fan_modes,_=>this._call("set_fan_mode",{fan_mode:_})):r}
          ${this._config.show_swing_vertical&&e.swing_modes?this._select("mdi:arrow-up-down",e.swing_mode,e.swing_modes,_=>this._call("set_swing_mode",{swing_mode:_})):r}
          ${this._config.show_swing_horizontal&&e.swing_horizontal_modes?this._select("mdi:arrow-left-right",e.swing_horizontal_mode,e.swing_horizontal_modes,_=>this._call("set_swing_horizontal_mode",{swing_horizontal_mode:_})):r}
        </div>
      </ha-card>
    `}_select(t,e,i,s){return c`
      <label class="select-row">
        <ha-icon icon=${t} style="--mdc-icon-size:18px;color:var(--secondary-text-color)"></ha-icon>
        <span class="lbl">${this._t(String(e))||e}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:18px;color:var(--secondary-text-color)"></ha-icon>
        <select .value=${e??""} @change=${a=>s(a.target.value)}>
          ${i.map(a=>c`<option value=${a} ?selected=${a===e}>${this._t(a)||a}</option>`)}
        </select>
      </label>`}};u(pt,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),u(pt,"styles",x);customElements.define("alpicair-air-conditioner-card",pt);var qt=class extends v{constructor(){super(...arguments);u(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",power_entity:"Power entity",floor_current_entity:"Floor temperature sensor",floor_target_entity:"Floor target (number / input_number)",water_current_entity:"Boiler temperature sensor",water_target_entity:"Boiler target (number / input_number)",mode_entity:"Mode entity (select)",option_heating:"Option: heating",option_hot_water:"Option: hot water",option_heating_water:"Option: heating + water",quick_heat_entity:"Quick heat entity (switch)",quiet_mode_entity:"Quiet mode entity (switch)",disinfection_entity:"Disinfection entity (switch)",show_power:"Power button",show_hero:"Large temperature block",show_floor:"Floor temperature",show_water:"Boiler temperature",show_modes:"Mode buttons",show_quick_heat:"Button: quick heat",show_quiet_mode:"Button: quiet mode",show_disinfection:"Button: disinfection"})}get _options(){let e=this._config&&this.hass&&this.hass.states[this._config.mode_entity];return e&&e.attributes&&e.attributes.options||[]}_optionField(e){let i=this._options;return i.length?{name:e,selector:{select:{mode:"dropdown",options:i}}}:{name:e,selector:{text:{}}}}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},z,p("power_entity",["switch","input_boolean","climate"]),{type:"grid",name:"",schema:[p("floor_current_entity",["sensor","number","input_number"]),p("floor_target_entity",["number","input_number","climate"])]},{type:"grid",name:"",schema:[p("water_current_entity",["sensor","number","input_number"]),p("water_target_entity",["number","input_number","water_heater","climate"])]},p("mode_entity",["select","input_select","climate"]),{type:"grid",name:"",schema:[this._optionField("option_heating"),this._optionField("option_hot_water"),this._optionField("option_heating_water")]},{type:"grid",name:"",schema:[p("quick_heat_entity",["switch","input_boolean","script"]),p("quiet_mode_entity",["switch","input_boolean"]),p("disinfection_entity",["switch","input_boolean","script"])]},w(["show_power","show_hero","show_floor","show_water","show_modes","show_quick_heat","show_quiet_mode","show_disinfection"]),S]}};customElements.define("alpicair-heat-pump-card-editor",qt);var dt=class extends $(y){static getConfigElement(){return document.createElement("alpicair-heat-pump-card-editor")}static getStubConfig(){return{type:"custom:alpicair-heat-pump-card"}}setConfig(t){this._config={show_power:!0,show_hero:!0,show_floor:!0,show_water:!0,show_modes:!0,show_quick_heat:!0,show_quiet_mode:!0,show_disinfection:!0,language:"auto",...t},this._pending={}}getCardSize(){return 6}_t(t){return k(this.hass,this._config,t)}_st(t){return t&&this.hass.states[t]}_num(t){let e=this._st(t);if(!e)return null;let i=Number(e.state);return Number.isFinite(i)?i:null}_target(t){if(this._pending[t]!=null)return this._pending[t];let e=this._st(t);if(!e)return null;if(t.startsWith("climate.")||t.startsWith("water_heater.")){let s=Number(e.attributes.temperature);return Number.isFinite(s)?s:null}let i=Number(e.state);return Number.isFinite(i)?i:null}_limits(t,e){let i=this._st(t),s=i&&i.attributes||{};return{min:s.min??s.min_temp??e.min,max:s.max??s.max_temp??e.max,step:s.step??s.target_temp_step??e.step}}_setTarget(t,e){t&&(this._pending={...this._pending,[t]:e},clearTimeout(this._d),this._d=setTimeout(()=>{let i=t.split(".")[0];i==="number"||i==="input_number"?this.hass.callService(i,"set_value",{entity_id:t,value:e}):i==="water_heater"?this.hass.callService("water_heater","set_temperature",{entity_id:t,temperature:e}):this.hass.callService("climate","set_temperature",{entity_id:t,temperature:e}),this._pending={}},500))}_toggle(t){t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_isOn(t){let e=this._st(t);return e?!["off","unavailable","unknown"].includes(e.state):!1}_setMode(t){let e=this._config.mode_entity;if(!e)return;let i=e.split(".")[0];i==="select"||i==="input_select"?this.hass.callService(i,"select_option",{entity_id:e,option:this._optionFor(t)}):i==="climate"&&this.hass.callService("climate","set_preset_mode",{entity_id:e,preset_mode:this._optionFor(t)})}_optionFor(t){return this._config[`option_${t}`]||t}_isMode(t){let e=this._st(this._config.mode_entity);return!!e&&e.state===this._optionFor(t)}render(){if(!this.hass||!this._config)return r;let t=this._config,e=t.power_entity,i=e?this._isOn(e):!0,s=this._st(t.mode_entity),a=[{id:"heating",icon:"mdi:radiator"},{id:"hot_water",icon:"mdi:water-boiler"},{id:"heating_water",icon:"mdi:home-thermometer"}],n={label:this._t("floor"),icon:"mdi:heating-coil",current:this._num(t.floor_current_entity),targetId:t.floor_target_entity,target:this._target(t.floor_target_entity),tone:"heat",limits:this._limits(t.floor_target_entity,{min:15,max:35,step:.5})},h={label:this._t("hot_water"),icon:"mdi:water-thermometer",current:this._num(t.water_current_entity),targetId:t.water_target_entity,target:this._target(t.water_target_entity),tone:"water",limits:this._limits(t.water_target_entity,{min:30,max:65,step:1})},l=[t.show_floor!==!1?n:null,t.show_water!==!1?h:null].filter(Boolean);return c`
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
          ${l.filter(d=>d.targetId).map(d=>this._stepRow(d))}

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
    </div>`}_stepRow(t){let{min:e,max:i,step:s}=t.limits,a=Number(s)||.5,n=t.target??Number(e),h=a<1?1:0,l=d=>Math.min(Number(i),Math.max(Number(e),Math.round(d*10)/10));return c`
      <div class="tempstep">
        <span class="lbl" style="display:flex;align-items:center;gap:6px">
          <ha-icon icon=${t.icon} style="--mdc-icon-size:18px"></ha-icon>${t.label}
        </span>
        <button class="stepbtn" aria-label="−"
          @click=${()=>this._setTarget(t.targetId,l(n-a))}>−</button>
        <span class="v ${t.tone}">${Number(n).toFixed(h)}°</span>
        <button class="stepbtn" aria-label="+"
          @click=${()=>this._setTarget(t.targetId,l(n+a))}>+</button>
      </div>`}_quickRow(){let t=[{cfg:"show_quick_heat",entity:this._config.quick_heat_entity,icon:"mdi:flash",key:"quick_heat",tone:"boost"},{cfg:"show_quiet_mode",entity:this._config.quiet_mode_entity,icon:"mdi:volume-off",key:"quiet_mode"},{cfg:"show_disinfection",entity:this._config.disinfection_entity,icon:"mdi:shield-sun",key:"disinfection"}].filter(e=>this._config[e.cfg]!==!1&&e.entity);return t.length?c`<div class="grid c3">
      ${t.map(e=>c`
        <button class="mode ${this._isOn(e.entity)?`active ${e.tone||""}`:""}"
          @click=${()=>this._toggle(e.entity)}>
          <ha-icon icon=${e.icon} style="--mdc-icon-size:22px"></ha-icon>${this._t(e.key)}
        </button>`)}
    </div>`:r}};u(dt,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),u(dt,"styles",x);customElements.define("alpicair-heat-pump-card",dt);var Dt=class extends v{constructor(){super(...arguments);u(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",outdoor_entity:"Outdoor temperature",indoor_entity:"Indoor temperature",supply_entity:"Supply air temperature",extract_entity:"Extract air temperature",target_entity:"Target temperature entity",show_target_slider:"Target temperature slider",min_temp:"Minimum",max_temp:"Maximum",step:"Step"})}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},z,{type:"grid",name:"",schema:[p("outdoor_entity",["sensor"]),p("indoor_entity",["sensor"]),p("supply_entity",["sensor"]),p("extract_entity",["sensor"])]},p("target_entity",["climate","number","input_number"]),w(["show_target_slider"]),{type:"grid",name:"",schema:[{name:"min_temp",selector:{number:{min:0,max:40,step:1,mode:"box"}}},{name:"max_temp",selector:{number:{min:0,max:60,step:1,mode:"box"}}},{name:"step",selector:{number:{min:.1,max:5,step:.1,mode:"box"}}}]},S]}};customElements.define("alpicair-sensors-card-editor",Dt);var _t=class extends $(y){static getConfigElement(){return document.createElement("alpicair-sensors-card-editor")}static getStubConfig(){return{type:"custom:alpicair-sensors-card"}}setConfig(t){this._config={show_target_slider:!0,show_target_steppers:!0,language:"auto",min_temp:15,max_temp:30,step:.5,...t}}getCardSize(){return 4}_t(t){return k(this.hass,this._config,t)}_metric(t,e){let i=t&&this.hass.states[t];if(!i)return r;let s=i.attributes.unit_of_measurement||"\xB0C";return c`<div class="metric">
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
                      @change=${a=>this._setTarget(Number(a.target.value))} />
                    <div class="range-legend"><span>${t.min_temp}°</span><span>${t.max_temp}°</span></div>`:r}
            </div>`:r}
      </ha-card>`}};u(_t,"properties",{hass:{},_config:{state:!0},_pending:{state:!0}}),u(_t,"styles",x);customElements.define("alpicair-sensors-card",_t);var Vt=class extends v{constructor(){super(...arguments);u(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",language:"Language",show_night_cooling:"Section: night cooling",show_fan_speeds:"Section: fan speeds",show_date_time:"Section: date & time",night_cooling_entity:"Night cooling switch",nc_start_time_entity:"Start time",nc_stop_time_entity:"Stop time",nc_extract_start_entity:"Extract air temp. to start",nc_extract_stop_entity:"Extract air temp. to stop",nc_outdoor_stop_entity:"Outdoor temp. to stop",nc_supply_setpoint_entity:"Supply air setpoint",bp_supply_entity:"Building protection \xB7 supply",bp_exhaust_entity:"Building protection \xB7 exhaust",eco_supply_entity:"Economy \xB7 supply",eco_exhaust_entity:"Economy \xB7 exhaust",comfort_supply_entity:"Comfort \xB7 supply",comfort_exhaust_entity:"Comfort \xB7 exhaust",boost_supply_entity:"Boost \xB7 supply",boost_exhaust_entity:"Boost \xB7 exhaust",show_back_button:"Back button",back_icon:"Back button icon",back_entity:"Back button target entity",hold_time:"Long press duration (ms)",back_tap_action:"Back \xB7 short press action",back_hold_action:"Back \xB7 long press action",date_entity:"Date entity",time_entity:"Time entity"})}get schema(){let e=["number","input_number"];return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},z,w(["show_night_cooling","show_fan_speeds","show_date_time"]),p("night_cooling_entity",["switch","input_boolean"]),{type:"grid",name:"",schema:[p("nc_start_time_entity",["time","input_datetime"]),p("nc_stop_time_entity",["time","input_datetime"]),p("nc_extract_start_entity",e),p("nc_extract_stop_entity",e),p("nc_outdoor_stop_entity",e),p("nc_supply_setpoint_entity",e)]},{type:"grid",name:"",schema:[p("bp_supply_entity",e),p("bp_exhaust_entity",e),p("eco_supply_entity",e),p("eco_exhaust_entity",e),p("comfort_supply_entity",e),p("comfort_exhaust_entity",e),p("boost_supply_entity",e),p("boost_exhaust_entity",e)]},{type:"grid",name:"",schema:[p("date_entity",["date","input_datetime"]),p("time_entity",["time","input_datetime"])]},w(["show_back_button"]),{type:"grid",name:"",schema:[{name:"back_icon",selector:{icon:{}}},p("back_entity")]},{name:"hold_time",selector:{number:{min:200,max:2e3,step:50,mode:"box",unit_of_measurement:"ms"}}},{name:"back_tap_action",selector:{ui_action:{}}},{name:"back_hold_action",selector:{ui_action:{}}},S]}};customElements.define("alpicair-device-settings-card-editor",Vt);var qe=[{cfg:"nc_extract_start_entity",key:"nc_extract_start",min:13,max:30},{cfg:"nc_extract_stop_entity",key:"nc_extract_stop",min:13,max:30},{cfg:"nc_outdoor_stop_entity",key:"nc_outdoor_stop",min:0,max:30},{cfg:"nc_supply_setpoint_entity",key:"nc_supply_setpoint",min:0,max:30}],De=[{id:"building_protection",supply:"bp_supply_entity",exhaust:"bp_exhaust_entity"},{id:"economy",supply:"eco_supply_entity",exhaust:"eco_exhaust_entity"},{id:"comfort",supply:"comfort_supply_entity",exhaust:"comfort_exhaust_entity"},{id:"boost",supply:"boost_supply_entity",exhaust:"boost_exhaust_entity"}],ut=class extends $(y){static getConfigElement(){return document.createElement("alpicair-device-settings-card-editor")}static getStubConfig(){return{type:"custom:alpicair-device-settings-card"}}setConfig(t){this._config={show_night_cooling:!0,show_fan_speeds:!0,show_date_time:!0,show_back_button:!0,back_icon:"mdi:chevron-left",hold_time:500,back_tap_action:{action:"none"},back_hold_action:{action:"none"},language:"auto",...t}}getCardSize(){return 10}_t(t){return k(this.hass,this._config,t)}_st(t){return t&&this.hass.states[t]}_setNumber(t,e){let i=t.split(".")[0];this.hass.callService(i,"set_value",{entity_id:t,value:e})}_setTime(t,e){let i=t.split(".")[0];this.hass.callService(i,"set_value",{entity_id:t,[i==="input_datetime"?"time":"value"]:e})}_backButton(){let t=this._config;if(t.show_back_button===!1)return r;let e=t.back_entity,i=vt(()=>C(this,this.hass,e,t.back_tap_action),()=>C(this,this.hass,e,t.back_hold_action),Number(t.hold_time)||500);return c`<button class="power" aria-label=${this._t("back")}
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
      </ha-card>`}_nightCooling(){let t=qe.filter(n=>this._st(this._config[n.cfg])),e=this._st(this._config.nc_start_time_entity),i=this._st(this._config.nc_stop_time_entity),s=this._st(this._config.night_cooling_entity);if(!t.length&&!e&&!i&&!s)return r;let a=!s||s.state==="on";return c`
      ${s?c`<div class="select-row">
            <ha-icon icon="mdi:weather-night" style="--mdc-icon-size:20px;color:var(--primary-color)"></ha-icon>
            <span class="lbl">${this._t("night_cooling")}</span>
            <ha-switch .checked=${s.state==="on"}
              @change=${()=>this.hass.callService("homeassistant","toggle",{entity_id:this._config.night_cooling_entity})}></ha-switch>
          </div>`:r}

      <div class="panel ${a?"":"dimmed"}">
        <div class="section-title">${this._t("night_cooling_schedule")||this._t("night_cooling")}</div>
        ${e||i?c`<div class="grid c2">
              ${e?this._timeField(this._t("start_time"),this._config.nc_start_time_entity,e):r}
              ${i?this._timeField(this._t("stop_time"),this._config.nc_stop_time_entity,i):r}
            </div>`:r}
        ${t.map(n=>{let h=this._st(this._config[n.cfg]),l=Number(h.attributes.step)||.5,d=Number(h.attributes.min??n.min),g=Number(h.attributes.max??n.max),m=Number(h.state),b=_=>Math.min(g,Math.max(d,Math.round(_*10)/10));return c`
            <div class="tempstep">
              <span class="lbl">${this._t(n.key)}</span>
              <span class="v heat">${m.toFixed(1)}°</span>
              <button class="stepbtn" aria-label="−"
                @click=${()=>this._setNumber(this._config[n.cfg],b(m-l))}>−</button>
              <button class="stepbtn" aria-label="+"
                @click=${()=>this._setNumber(this._config[n.cfg],b(m+l))}>+</button>
            </div>`})}
      </div>`}_timeField(t,e,i){let s=(i.state||"").slice(0,5);return c`
      <div class="field">
        <span class="flabel"><ha-icon icon="mdi:clock-outline" style="--mdc-icon-size:14px"></ha-icon>${t}</span>
        <input type="time" .value=${s}
          @change=${a=>this._setTime(e,`${a.target.value}:00`)} />
      </div>`}_fanSpeeds(){let t=De.filter(e=>this._st(this._config[e.supply])||this._st(this._config[e.exhaust]));return t.length?c`
      ${t.map(e=>c`
        <div class="panel">
          <div class="section-title">${this._t(e.id)}</div>
          ${this._speedSlider(this._config[e.supply],this._t("supply"))}
          ${this._speedSlider(this._config[e.exhaust],this._t("exhaust"))}
        </div>`)}`:r}_speedSlider(t,e){let i=this._st(t);if(!i)return r;let s=Number(i.attributes.min??0),a=Number(i.attributes.max??100),n=Number(i.attributes.step??1),h=Number(i.state);return c`
      <div class="slider-row">
        <div class="bar-top"><span>${e}</span><span class="val">${h}%</span></div>
        <input type="range" min=${s} max=${a} step=${n} .value=${String(h)} aria-label=${e}
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
      </div>`}_syncNow(){let t=new Date,e=i=>String(i).padStart(2,"0");this._config.date_entity&&this.hass.callService(this._config.date_entity.split(".")[0],"set_value",{entity_id:this._config.date_entity,date:`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}),this._config.time_entity&&this._setTime(this._config.time_entity,`${e(t.getHours())}:${e(t.getMinutes())}:00`)}};u(ut,"properties",{hass:{},_config:{state:!0}}),u(ut,"styles",x);customElements.define("alpicair-device-settings-card",ut);var Wt=class extends v{constructor(){super(...arguments);u(this,"_labels",{button_scale:"Button size (1 = default)",font_scale:"Font size (1 = default)",name:"Name",icon:"Icon",show_language:"Language selector",show_theme:"Theme selector",show_accent:"Accent color",show_compact:"Compact mode toggle",show_sizes:"Button / font size sliders",show_reset:"Reset button",show_back_button:"Back button",back_icon:"Back button icon",back_entity:"Back button target entity",hold_time:"Long press duration (ms)",back_tap_action:"Back \xB7 short press action",back_hold_action:"Back \xB7 long press action"})}get schema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},w(["show_language","show_theme","show_accent","show_compact","show_sizes","show_reset"]),w(["show_back_button"]),{type:"grid",name:"",schema:[{name:"back_icon",selector:{icon:{}}},p("back_entity")]},{name:"hold_time",selector:{number:{min:200,max:2e3,step:50,mode:"box",unit_of_measurement:"ms"}}},{name:"back_tap_action",selector:{ui_action:{}}},{name:"back_hold_action",selector:{ui_action:{}}},S]}};customElements.define("alpicair-ui-settings-card-editor",Wt);var Ve=[{id:"auto",label:"Auto"},{id:"en",label:"English"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{id:"lv",label:"Latvie\u0161u"}],We=["","#03a9f4","#f4511e","#43a047","#8e24aa","#fb8c00"],mt=class extends $(y){static getConfigElement(){return document.createElement("alpicair-ui-settings-card-editor")}static getStubConfig(){return{type:"custom:alpicair-ui-settings-card"}}setConfig(t){this._config={show_language:!0,show_theme:!0,show_accent:!0,show_compact:!0,show_sizes:!0,show_reset:!0,show_back_button:!0,back_icon:"mdi:chevron-left",hold_time:500,back_tap_action:{action:"none"},back_hold_action:{action:"none"},...t}}getCardSize(){return 4}_t(t){return k(this.hass,{language:"auto"},t)}_backButton(){let t=this._config;if(t.show_back_button===!1)return r;let e=vt(()=>C(this,this.hass,t.back_entity,t.back_tap_action),()=>C(this,this.hass,t.back_entity,t.back_hold_action),Number(t.hold_time)||500);return c`<button class="power" aria-label=${this._t("back")}
      @pointerdown=${e["@pointerdown"]} @pointerup=${e["@pointerup"]}
      @pointerleave=${e["@pointerleave"]} @pointercancel=${e["@pointercancel"]}
      @contextmenu=${e["@contextmenu"]}>
      <ha-icon icon=${t.back_icon||"mdi:chevron-left"}></ha-icon>
    </button>`}_set(t){de(t),this.requestUpdate()}render(){if(!this._config)return r;let t=V(),e=this._config;return c`
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
                  ${Ve.map(i=>c`<button class="mode ${t.language===i.id?"active":""}"
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
                  ${We.map(i=>c`<button
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

        ${e.show_reset!==!1?c`<button class="plain" @click=${()=>{_e(),this.requestUpdate()}}>
              <ha-icon icon="mdi:restore" style="--mdc-icon-size:18px"></ha-icon>${this._t("reset")}
            </button>`:r}
      </ha-card>`}};u(mt,"properties",{hass:{},_config:{state:!0}}),u(mt,"styles",x);customElements.define("alpicair-ui-settings-card",mt);var Ke="1.2.0";window.customCards=window.customCards||[];var O=(o,t,e)=>{window.customCards.some(i=>i.type===o)||window.customCards.push({type:o,name:t,description:e,preview:!0,documentationURL:"https://github.com/keziksdmitrijs-byte/recuperator-custom-card"})};O("alpicair-recuperator-card","AlpicAir Recuperator Card","Recuperator control: modes, efficiency, fan speed and a configurable settings button.");O("alpicair-recuperator-panel-card","AlpicAir Recuperator Panel Card","Square recuperator panel: fan-speed ring, mode picker, back/power header and temperature tiles.");O("alpicair-ac-panel-card","AlpicAir AC / Ventilation Panel Card","Square climate panel: target-temperature ring, HVAC modes, fan speed and vertical/horizontal swing.");O("alpicair-heat-pump-panel-card","AlpicAir Heat Pump Panel Card","Square heat-pump panel: boiler-temperature ring, floor/boiler targets, modes and quick-action indicators.");O("alpicair-air-conditioner-card","AlpicAir Air Conditioner Card","Single climate entity: dial, HVAC modes, fan and swing control.");O("alpicair-heat-pump-card","AlpicAir Heat Pump Card","Floor and hot water temperatures, modes and quick actions.");O("alpicair-sensors-card","AlpicAir Temperatures Card","Outdoor/indoor/supply/extract temperatures with target slider.");O("alpicair-device-settings-card","AlpicAir Device Settings Card","Night cooling, fan speed presets and device date & time.");O("alpicair-ui-settings-card","AlpicAir Interface Settings Card","Global language, theme and accent for all AlpicAir cards.");console.info(`%c ALPICAIR-CARDS %c v${Ke} `,"color:#fff;background:#03a9f4;font-weight:700;border-radius:4px 0 0 4px","color:#03a9f4;background:#333;font-weight:700;border-radius:0 4px 4px 0");
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
