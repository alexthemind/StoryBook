(self.webpackChunkStoryBook=self.webpackChunkStoryBook||[]).push([[155],{155:(t,e,n)=>{var o,r;(function(){"use strict";var t=new function(){},e=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function n(t){var n=e.has(t);return t=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t),!n&&t}function o(t){var e=t.isConnected;if(void 0!==e)return e;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function r(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function i(t,e,n){n=n||new Set;for(var o=t;o;){if(o.nodeType===Node.ELEMENT_NODE){var a=o;e(a);var s=a.localName;if("link"===s&&"import"===a.getAttribute("rel")){if((o=a.import)instanceof Node&&!n.has(o))for(n.add(o),o=o.firstChild;o;o=o.nextSibling)i(o,e,n);o=r(t,a);continue}if("template"===s){o=r(t,a);continue}if(a=a.__CE_shadowRoot)for(a=a.firstChild;a;a=a.nextSibling)i(a,e,n)}o=o.firstChild?o.firstChild:r(t,o)}}function a(t,e,n){t[e]=n}function s(){this.a=new Map,this.m=new Map,this.f=[],this.b=!1}function l(t,e){t.b=!0,t.f.push(e)}function c(t,e){t.b&&i(e,(function(e){return u(t,e)}))}function u(t,e){if(t.b&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.f.length;n++)t.f[n](e)}}function f(t,e){var n=[];for(i(e,(function(t){return n.push(t)})),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state?t.connectedCallback(o):d(t,o)}}function p(t,e){var n=[];for(i(e,(function(t){return n.push(t)})),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state&&t.disconnectedCallback(o)}}function h(t,e,n){var o=(n=n||{}).w||new Set,r=n.s||function(e){return d(t,e)},a=[];if(i(e,(function(e){if("link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&"complete"===n.readyState?(n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0):e.addEventListener("load",(function(){var n=e.import;n.__CE_documentLoadHandled||(n.__CE_documentLoadHandled=!0,n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0,o.delete(n),h(t,n,{w:o,s:r}))}))}else a.push(e)}),o),t.b)for(e=0;e<a.length;e++)u(t,a[e]);for(e=0;e<a.length;e++)r(a[e])}function d(t,e){if(void 0===e.__CE_state){var n=t.a.get(e.localName);if(n){n.constructionStack.push(e);var r=n.constructor;try{try{if(new r!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{n.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=n,n.attributeChangedCallback)for(n=n.observedAttributes,r=0;r<n.length;r++){var i=n[r],a=e.getAttribute(i);null!==a&&t.attributeChangedCallback(e,i,null,a,null)}o(e)&&t.connectedCallback(e)}}}function m(t,e){this.c=t,this.a=e,this.b=void 0,h(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function v(t){t.b&&t.b.disconnect()}function g(){var t=this;this.b=this.a=void 0,this.f=new Promise((function(e){t.b=e,t.a&&e(t.a)}))}function y(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0)}function b(t){this.h=!1,this.c=t,this.l=new Map,this.i=function(t){return t()},this.g=!1,this.j=[],this.u=new m(t,document)}s.prototype.connectedCallback=function(t){var e=t.__CE_definition;e.connectedCallback&&e.connectedCallback.call(t)},s.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;e.disconnectedCallback&&e.disconnectedCallback.call(t)},s.prototype.attributeChangedCallback=function(t,e,n,o,r){var i=t.__CE_definition;i.attributeChangedCallback&&-1<i.observedAttributes.indexOf(e)&&i.attributeChangedCallback.call(t,e,n,o,r)},m.prototype.f=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||v(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,o=0;o<n.length;o++)h(this.c,n[o])},b.prototype.define=function(t,e){var o,r,i,a,s,l=this;if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!n(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.c.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.h)throw Error("A custom element is already being defined.");this.h=!0;try{var c=function(t){var e=u[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},u=e.prototype;if(!(u instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");o=c("connectedCallback"),r=c("disconnectedCallback"),i=c("adoptedCallback"),a=c("attributeChangedCallback"),s=e.observedAttributes||[]}catch(t){return}finally{this.h=!1}e={localName:t,constructor:e,connectedCallback:o,disconnectedCallback:r,adoptedCallback:i,attributeChangedCallback:a,observedAttributes:s,constructionStack:[]},function(t,e,n){t.a.set(e,n),t.m.set(n.constructor,n)}(this.c,t,e),this.j.push(e),this.g||(this.g=!0,this.i((function(){return function(t){if(!1!==t.g){t.g=!1;for(var e=t.j,n=[],o=new Map,r=0;r<e.length;r++)o.set(e[r].localName,[]);for(h(t.c,document,{s:function(e){if(void 0===e.__CE_state){var r=e.localName,i=o.get(r);i?i.push(e):t.c.a.get(r)&&n.push(e)}}}),r=0;r<n.length;r++)d(t.c,n[r]);for(;0<e.length;){r=(i=e.shift()).localName;for(var i=o.get(i.localName),a=0;a<i.length;a++)d(t.c,i[a]);(r=t.l.get(r))&&y(r)}}}(l)})))},b.prototype.get=function(t){if(t=this.c.a.get(t))return t.constructor},b.prototype.whenDefined=function(t){if(!n(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var e=this.l.get(t);return e||(e=new g,this.l.set(t,e),this.c.a.get(t)&&!this.j.some((function(e){return e.localName===t}))&&y(e)),e.f},b.prototype.v=function(t){v(this.u);var e=this.i;this.i=function(n){return t((function(){return e(n)}))}},window.CustomElementRegistry=b,b.prototype.define=b.prototype.define,b.prototype.get=b.prototype.get,b.prototype.whenDefined=b.prototype.whenDefined,b.prototype.polyfillWrapFlushCallback=b.prototype.v;var w=window.Document.prototype.createElement,E=window.Document.prototype.createElementNS,_=window.Document.prototype.importNode,C=window.Document.prototype.prepend,N=window.Document.prototype.append,k=window.Node.prototype.cloneNode,x=window.Node.prototype.appendChild,A=window.Node.prototype.insertBefore,O=window.Node.prototype.removeChild,T=window.Node.prototype.replaceChild,P=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),S=window.Element.prototype.attachShadow,j=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),D=window.Element.prototype.getAttribute,M=window.Element.prototype.setAttribute,L=window.Element.prototype.removeAttribute,R=window.Element.prototype.getAttributeNS,H=window.Element.prototype.setAttributeNS,F=window.Element.prototype.removeAttributeNS,q=window.Element.prototype.insertAdjacentElement,I=window.Element.prototype.prepend,X=window.Element.prototype.append,B=window.Element.prototype.before,z=window.Element.prototype.after,W=window.Element.prototype.replaceWith,Z=window.Element.prototype.remove,$=window.HTMLElement,G=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),J=window.HTMLElement.prototype.insertAdjacentElement;function K(t,e,n){e.prepend=function(e){for(var r=[],i=0;i<arguments.length;++i)r[i-0]=arguments[i];i=r.filter((function(t){return t instanceof Node&&o(t)})),n.o.apply(this,r);for(var a=0;a<i.length;a++)p(t,i[a]);if(o(this))for(i=0;i<r.length;i++)(a=r[i])instanceof Element&&f(t,a)},e.append=function(e){for(var r=[],i=0;i<arguments.length;++i)r[i-0]=arguments[i];i=r.filter((function(t){return t instanceof Node&&o(t)})),n.append.apply(this,r);for(var a=0;a<i.length;a++)p(t,i[a]);if(o(this))for(i=0;i<r.length;i++)(a=r[i])instanceof Element&&f(t,a)}}var Q,U=window.customElements;if(!U||U.forcePolyfill||"function"!=typeof U.define||"function"!=typeof U.get){var V=new s;Q=V,window.HTMLElement=function(){function e(){var e=this.constructor;if(!(o=Q.m.get(e)))throw Error("The custom element being constructed was not registered with `customElements`.");var n=o.constructionStack;if(!n.length)return n=w.call(document,o.localName),Object.setPrototypeOf(n,e.prototype),n.__CE_state=1,n.__CE_definition=o,u(Q,n),n;var o,r=n[o=n.length-1];if(r===t)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return n[o]=t,Object.setPrototypeOf(r,e.prototype),u(Q,r),r}return e.prototype=$.prototype,e}(),function(){var t=V;a(Document.prototype,"createElement",(function(e){if(this.__CE_hasRegistry){var n=t.a.get(e);if(n)return new n.constructor}return e=w.call(this,e),u(t,e),e})),a(Document.prototype,"importNode",(function(e,n){return e=_.call(this,e,n),this.__CE_hasRegistry?h(t,e):c(t,e),e})),a(Document.prototype,"createElementNS",(function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var o=t.a.get(n);if(o)return new o.constructor}return e=E.call(this,e,n),u(t,e),e})),K(t,Document.prototype,{o:C,append:N})}(),function(){var t=V;function e(e,n){Object.defineProperty(e,"textContent",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)n.set.call(this,e);else{var r=void 0;if(this.firstChild){var i=this.childNodes,a=i.length;if(0<a&&o(this)){r=Array(a);for(var s=0;s<a;s++)r[s]=i[s]}}if(n.set.call(this,e),r)for(e=0;e<r.length;e++)p(t,r[e])}}})}a(Node.prototype,"insertBefore",(function(e,n){if(e instanceof DocumentFragment){var r=Array.prototype.slice.apply(e.childNodes);if(e=A.call(this,e,n),o(this))for(n=0;n<r.length;n++)f(t,r[n]);return e}return r=o(e),n=A.call(this,e,n),r&&p(t,e),o(this)&&f(t,e),n})),a(Node.prototype,"appendChild",(function(e){if(e instanceof DocumentFragment){var n=Array.prototype.slice.apply(e.childNodes);if(e=x.call(this,e),o(this))for(var r=0;r<n.length;r++)f(t,n[r]);return e}return n=o(e),r=x.call(this,e),n&&p(t,e),o(this)&&f(t,e),r})),a(Node.prototype,"cloneNode",(function(e){return e=k.call(this,e),this.ownerDocument.__CE_hasRegistry?h(t,e):c(t,e),e})),a(Node.prototype,"removeChild",(function(e){var n=o(e),r=O.call(this,e);return n&&p(t,e),r})),a(Node.prototype,"replaceChild",(function(e,n){if(e instanceof DocumentFragment){var r=Array.prototype.slice.apply(e.childNodes);if(e=T.call(this,e,n),o(this))for(p(t,n),n=0;n<r.length;n++)f(t,r[n]);return e}r=o(e);var i=T.call(this,e,n),a=o(this);return a&&p(t,n),r&&p(t,e),a&&f(t,e),i})),P&&P.get?e(Node.prototype,P):l(t,(function(t){e(t,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++)t.push(this.childNodes[e].textContent);return t.join("")},set:function(t){for(;this.firstChild;)O.call(this,this.firstChild);x.call(this,document.createTextNode(t))}})}))}(),function(){var t=V;function e(e,n){Object.defineProperty(e,"innerHTML",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){var r=this,a=void 0;if(o(this)&&(a=[],i(this,(function(t){t!==r&&a.push(t)}))),n.set.call(this,e),a)for(var s=0;s<a.length;s++){var l=a[s];1===l.__CE_state&&t.disconnectedCallback(l)}return this.ownerDocument.__CE_hasRegistry?h(t,this):c(t,this),e}})}function n(e,n){a(e,"insertAdjacentElement",(function(e,r){var i=o(r);return e=n.call(this,e,r),i&&p(t,r),o(e)&&f(t,r),e}))}if(S?a(Element.prototype,"attachShadow",(function(t){return this.__CE_shadowRoot=S.call(this,t)})):console.warn("Custom Elements: `Element#attachShadow` was not patched."),j&&j.get)e(Element.prototype,j);else if(G&&G.get)e(HTMLElement.prototype,G);else{var r=w.call(document,"div");l(t,(function(t){e(t,{enumerable:!0,configurable:!0,get:function(){return k.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName?this.content:this;for(r.innerHTML=t;0<e.childNodes.length;)O.call(e,e.childNodes[0]);for(;0<r.childNodes.length;)x.call(e,r.childNodes[0])}})}))}a(Element.prototype,"setAttribute",(function(e,n){if(1!==this.__CE_state)return M.call(this,e,n);var o=D.call(this,e);M.call(this,e,n),n=D.call(this,e),t.attributeChangedCallback(this,e,o,n,null)})),a(Element.prototype,"setAttributeNS",(function(e,n,o){if(1!==this.__CE_state)return H.call(this,e,n,o);var r=R.call(this,e,n);H.call(this,e,n,o),o=R.call(this,e,n),t.attributeChangedCallback(this,n,r,o,e)})),a(Element.prototype,"removeAttribute",(function(e){if(1!==this.__CE_state)return L.call(this,e);var n=D.call(this,e);L.call(this,e),null!==n&&t.attributeChangedCallback(this,e,n,null,null)})),a(Element.prototype,"removeAttributeNS",(function(e,n){if(1!==this.__CE_state)return F.call(this,e,n);var o=R.call(this,e,n);F.call(this,e,n);var r=R.call(this,e,n);o!==r&&t.attributeChangedCallback(this,n,o,r,e)})),J?n(HTMLElement.prototype,J):q?n(Element.prototype,q):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),K(t,Element.prototype,{o:I,append:X}),function(t){var e=Element.prototype;e.before=function(e){for(var n=[],r=0;r<arguments.length;++r)n[r-0]=arguments[r];r=n.filter((function(t){return t instanceof Node&&o(t)})),B.apply(this,n);for(var i=0;i<r.length;i++)p(t,r[i]);if(o(this))for(r=0;r<n.length;r++)(i=n[r])instanceof Element&&f(t,i)},e.after=function(e){for(var n=[],r=0;r<arguments.length;++r)n[r-0]=arguments[r];r=n.filter((function(t){return t instanceof Node&&o(t)})),z.apply(this,n);for(var i=0;i<r.length;i++)p(t,r[i]);if(o(this))for(r=0;r<n.length;r++)(i=n[r])instanceof Element&&f(t,i)},e.replaceWith=function(e){for(var n=[],r=0;r<arguments.length;++r)n[r-0]=arguments[r];r=n.filter((function(t){return t instanceof Node&&o(t)}));var i=o(this);W.apply(this,n);for(var a=0;a<r.length;a++)p(t,r[a]);if(i)for(p(t,this),r=0;r<n.length;r++)(i=n[r])instanceof Element&&f(t,i)},e.remove=function(){var e=o(this);Z.call(this),e&&p(t,this)}}(t)}(),document.__CE_hasRegistry=!0;var Y=new b(V);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:Y})}}).call(self),function(){var i=document.documentElement;Element.prototype.matches||(Element.prototype.matches=i.webkitMatchesSelector||i.msMatchesSelector||i.oMatchesSelector);var a=/([\w\-]+)|(::|:)(\w+)(?:\((.+?(?=\)))\))?/g,s=/,\s*/,l=/[A-Z]/g,c=t=>"-"+t.toLowerCase();var u={events:{},pseudos:{delegate:{onInvoke:function(t,e,n){for(var o,r=n.target,i=n.currentTarget;!o&&r&&r!=i;)r.tagName&&r.matches(e.args)&&(o=r),r=r.parentNode;if(!o&&i.tagName&&i.matches(e.args)&&(o=i),!o)return null;e.fn=e.fn.bind(o)}}},extensions:{rxn:{onParse:(t,e,n,o,r)=>(delete t.prototype[r],!1),onConstruct(t,e,n,o){t.rxn(e,o.value,!!n[1])}},attr:{mixin:t=>class extends t{attributeChangedCallback(t,e,n){var o=this.constructor.getOptions("attributes")[t];o&&o.set&&!o._skip&&(o.set.call(this,n),o._skip=null)}},types:{boolean:{set:function(t,e){e||""===e?this.setAttribute(t,""):this.removeAttribute(t)},get:function(t){return this.hasAttribute(t)}}},onParse(t,e,n,o,r){if(o.value)throw'Attribute accessor "'+e+'" was declared as a value, but must be declared as get or set';var i=e.replace(l,c);t.getOptions("attributes")[i]=o;var a=this.types[n[0]]||{};let s=o.set,u=a.set||HTMLElement.prototype.setAttribute;o.set=function(t){var e;o._skip||(o._skip=!0,s&&(e=s.call(this,t)),u.call(this,i,void 0===e?t:e),o._skip=null)};let f=o.get,p=a.get||HTMLElement.prototype.getAttribute;o.get=function(){var t,e=p.call(this,i);return f&&(t=f.call(this,e)),void 0===t?e:t},delete t.prototype[r]},onCompiled(t){t.observedAttributes=Object.keys(t.getOptions("attributes")).concat(t.observedAttributes||[])}},event:{onParse:(t,e,n,o,r)=>(delete t.prototype[r],!1),onConstruct(t,e,n,o){u.addEvent(t,e,o.value)}},template:{throttle:{frame:function(t,e,n){n.cancel=cancelAnimationFrame.bind(window,requestAnimationFrame((()=>{t._render(e,n)})))},debounce:function(t,e,n,o){n.cancel=clearTimeout.bind(window,setTimeout((()=>{node_.render(e,n)}),o.throttle))}},mixin:t=>class extends t{set"template::attr"(t){this.render(t)}get templates(){return this.constructor.getOptions("templates")}_render(t,e){this.innerHTML=t.call(this),this._XTagRender=null,e.resolve&&e.resolve(this)}render(t,e={}){var n=t||"default",o=this.templates[n];if(!o)throw new ReferenceError('Template "'+n+'" undefined for '+this.nodeName);var r=this._XTagRender;if(r){if(r.name===n)return r.promise;r.cancel&&r.cancel()}this.getAttribute("template")!=n&&this.setAttribute("template",n),r=this._XTagRender={name:n};var i=u.extensions.template.throttle,a=!!e.throttle&&(i[e.throttle]||i.debounce);return a?r.promise=new Promise((t=>{r.resolve=t,a(this,o,r,e)})):(this._render(o,r),Promise.resolve(this))}},onParse:(t,e,n,o)=>(t.getOptions("templates")[e||"default"]=o.value,!1),onReady(t,e,n,o){o[0]&&("ready"===o[0]?t.render(n):t.rxn("firstpaint",(()=>t.render(n)))),e()}}},create(t,e){var n=e||t;return n.options=Object.assign({},n.options),d(n),e&&t&&customElements.define(t,n),n},register(t,e){customElements.define(t,e)},addEvents(t,e){let n={};for(let o in e)n[o]=u.addEvent(t,o,e[o]);return n},addEvent(t,e,n,o){var r,i=n,l=o||{};l.data={},e.replace(a,((e,n,o,a,c)=>{if(n)r=n;else if(":"==o){a=u.pseudos[a];var f=c?c.split(s):[];i=h(a,f,i,l),a.onParse&&a.onParse(t,r,f,i,l)}})),t.addEventListener(r,i,l),l.type=r,l.listener=i;var c=u.events[r];if(c){var f=function(t){new Promise((e=>{c.onFilter?c.onFilter(this,t,l,e):e()})).then((()=>{let e="_"+r+"EventFired";t[e]||(t[e]=!0,u.fireEvent(t.target||this,r))}))};l.attached=c.attach.map((e=>u.addEvent(t,e,f,{capture:!0}))),c.onAdd&&c.onAdd(t,l)}return l},removeEvents(t,e){for(let n in e)u.removeEvent(t,e[n])},removeEvent(t,e){t.removeEventListener(e.type,e.listener,e.capture);var n=u.events[e.type];n&&n.onRemove&&n.onRemove(t,e),e.attached&&e.attached.forEach((n=>{u.removeEvent(t,e)}))},fireEvent(t,e,n={}){let o=Object.assign({bubbles:!0,cancelable:!0},n);t.dispatchEvent(new CustomEvent(e,o))}},f=0;function p(t,e){var n=t.rxns[e],o=n.queue;for(let e in o)o[e].fn.call(t),!n.singleton&&o[e].recurring||delete o[e];n.fired=!0}function h(t,e,n,o){return function(){var r={fn:n,args:e,detail:o},i=t.onInvoke(this,r,...arguments);return null===i||!1===i?i:r.fn.apply(this,i instanceof Array?i:arguments)}}function d(t){var e={},n=function(t){var e={},n=t.prototype;return Object.getOwnPropertyNames(n).forEach((t=>{e[t]=Object.getOwnPropertyDescriptor(n,t)})),e}(t),o=t.getOptions("extensions"),r=t._processedExtensions=new Map;for(let i in n){let l,c,f,p=[],d=[],m=n[i],v=t._pseudos||u.pseudos;if(i.replace(a,(function(){p.unshift(arguments)})),p.forEach((e=>function(e,n,i,a,f){if(l=n||l,f)var p=f.split(s);if("::"==i)d=p||[],c=o[a]||u.extensions[a],r.get(c)||r.set(c,[]);else if(!n){let e=v[a];if(e)for(let n in m){let o=m[n];"function"==typeof o&&e.onInvoke&&(o=m[n]=h(e,p,o),e.onParse&&e.onParse(t,l,p,o))}}}.apply(null,e))),c&&(r.get(c).push([l,d,m]),c.onParse&&(f=c.onParse(t,l,d,m,i))),l){if(!1!==f){let t=e[l]||(e[l]={});for(let e in m)t[e]=m[e]}}else delete t.prototype[i]}for(let n of r.keys())n.onCompiled&&n.onCompiled(t,e);Object.defineProperties(t.prototype,e)}XTagElement=function t(e={}){var n;return(n=class extends(e.native?Object.getPrototypeOf(document.createElement(e.native)).constructor:HTMLElement){constructor(){super(),this.rxns||(this.rxns={ready:{queue:{},singleton:!0},firstpaint:{queue:{},singleton:!0},render:{queue:{}}}),function(t){var e=t.constructor._processedExtensions;for(let[n,o]of e)n.onConstruct&&o.forEach((e=>n.onConstruct(t,...e)))}(this),new Promise((t=>function(t,e){var n=t.constructor._processedExtensions;for(let[o,r]of n)o.onReady&&Promise.all(r.map((e=>new Promise((n=>o.onReady(t,n,...e)))))).then(e)}(this,t))).then((()=>{p(this,"ready"),this.readyCallback&&this.readyCallback()}))}connectedCallback(){!function(t){var e=t.constructor._processedExtensions;for(let[n,o]of e)n.onConnect&&o.forEach((e=>n.onConnect(t,...e)))}(this),this.rxns.firstpaint.frame||(this.rxns.firstpaint.frame=requestAnimationFrame((()=>p(this,"firstpaint"))))}rxn(t,e,n){var o=this.rxns[t];if(!o.singleton||!o.fired)return o.queue[f++]={fn:e,recurring:n},f;e.call(this)}cancelRxn(t,e){delete this.rxns[t].queue[e]}}).options={extensions:{},pseudos:{}},n.getOptions=function(t){return this.options[t]||(this.options[t]=Object.assign({},Object.getPrototypeOf(this).options?Object.getPrototypeOf(this).options[t]:{}))},n.extensions=function(...t){var e=this.getOptions("extensions");return t.reduce(((t,n)=>{var o,r=t;return e[n.name]||("string"==typeof n?o=u.extensions[n].mixin:(o=n.mixin,e[n.name]=n),o&&d(r=o(t))),r}),this)},n.as=function(e){return t({native:e})},n.extensions("attr","event","template")}(),void 0===(r="function"==typeof(o=u)?o.call(e,n,e,t):o)||(t.exports=r),o=XTagElement,void 0===(r="function"==typeof o?o.call(e,n,e,t):o)||(t.exports=r)}()}}]);