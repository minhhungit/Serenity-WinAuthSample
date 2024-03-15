import{a as A}from"./chunk-2ZKMIJ5E.js";import{a as f,b as m,c as s,d as T}from"./chunk-THKE7DQS.js";var d=Object.keys;function F(e){return typeof e=="boolean"}s(F,"isBoolean");function I(e){return e&&typeof e.nodeType=="number"}s(I,"isElement");function S(e){return typeof e=="string"}s(S,"isString");function R(e){return typeof e=="number"}s(R,"isNumber");function o(e){return typeof e=="object"?e!==null:u(e)}s(o,"isObject");function u(e){return typeof e=="function"}s(u,"isFunction");function D(e){let{prototype:t}=e;return!!(t&&t.isReactComponent)}s(D,"isComponentClass");function G(e){return o(e)&&typeof e.length=="number"&&typeof e.nodeType!="number"}s(G,"isArrayLike");function b(e,t){if(e)for(let n of d(e))t(e[n],n)}s(b,"forEach");function H(e){return o(e)&&"current"in e}s(H,"isRef");var C={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0};function U(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}s(U,"prefixKey");var k=["Webkit","ms","Moz","O"];d(C).forEach(e=>{k.forEach(t=>{C[U(t,e)]=0})});var z=Symbol.for("jsx-dom:type"),M=function(e){return e.ShadowRoot="ShadowRoot",e}(M||{});function B(e){return e!=null&&e[z]===M.ShadowRoot}s(B,"isShadowRoot");var W="http://www.w3.org/2000/svg",X="http://www.w3.org/1999/xlink",V="http://www.w3.org/XML/1998/namespace";function O(e){return!F(e)&&e!=null}s(O,"isVisibleChild");var q=typeof DOMTokenList!="undefined"?DOMTokenList:function(){};function N(e){return Array.isArray(e)?e.map(N).filter(Boolean).join(" "):e instanceof q?""+e:o(e)?d(e).filter(t=>e[t]).join(" "):O(e)?""+e:""}s(N,"className");var J={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0},K=/^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;function Z(e){let t=document.createDocumentFragment();return x(e.children,t),t}s(Z,"Fragment");var L=class L{constructor(t){this.props=t}render(){return null}};s(L,"Component");var y=L;y.prototype;function $(e,t,n){return t=m(f({},t),{children:n}),new e(t).render()}s($,"initComponentClass");function c(e,t){let a=t,{children:n}=a,r=T(a,["children"]);!r.namespaceURI&&J[e]===0&&(r=m(f({},r),{namespaceURI:W}));let i;if(S(e)){if(i=r.namespaceURI?document.createElementNS(r.namespaceURI,e):document.createElement(e),_(r,i),x(n,i),i instanceof window.HTMLSelectElement&&r.value!=null)if(r.multiple===!0&&Array.isArray(r.value)){let h=r.value.map(p=>String(p));i.querySelectorAll("option").forEach(p=>p.selected=h.includes(p.value))}else i.value=r.value;P(r.ref,i)}else if(u(e))o(e.defaultProps)&&(r=f(f({},e.defaultProps),r)),i=D(e)?$(e,r,n):e(m(f({},r),{children:n}));else throw new TypeError(`Invalid JSX element type: ${e}`);return i}s(c,"jsx");function P(e,t){H(e)?e.current=t:u(e)&&e(t)}s(P,"attachRef");function x(e,t){if(G(e))Q(e,t);else if(S(e)||R(e))w(document.createTextNode(e),t);else if(e===null)w(document.createComment(""),t);else if(I(e))w(e,t);else if(B(e)){let n=t.attachShadow(e.attr);x(e.children,n),P(e.ref,n)}}s(x,"appendChild");function Q(e,t){for(let n of[...e])x(n,t);return t}s(Q,"appendChildren");function w(e,t){t instanceof window.HTMLTemplateElement?t.content.appendChild(e):t.appendChild(e)}s(w,"appendChildToNode");function g(e,t){return e.replace(/[A-Z]/g,n=>t+n.toLowerCase())}s(g,"normalizeAttribute");function j(e,t){t==null||t===!1||(Array.isArray(t)?t.forEach(n=>j(e,n)):S(t)?e.setAttribute("style",t):o(t)&&b(t,(n,r)=>{r.indexOf("-")===0?e.style.setProperty(r,n):R(n)&&C[r]!==0?e.style[r]=n+"px":e.style[r]=n}))}s(j,"style");function Y(e,t,n){switch(e){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":E(n,X,g(e,":"),t);return;case"xmlnsXlink":l(n,g(e,":"),t);return;case"xmlBase":case"xmlLang":case"xmlSpace":E(n,V,g(e,":"),t);return}switch(e){case"htmlFor":l(n,"for",t);return;case"dataset":b(t,(r,i)=>{r!=null&&(n.dataset[i]=r)});return;case"innerHTML":case"innerText":case"textContent":O(t)&&(n[e]=t);return;case"dangerouslySetInnerHTML":o(t)&&(n.innerHTML=t.__html);return;case"value":if(t==null||n instanceof window.HTMLSelectElement)return;if(n instanceof window.HTMLTextAreaElement){n.value=t;return}break;case"spellCheck":n.spellcheck=t;return;case"class":case"className":u(t)?t(n):l(n,"class",N(t));return;case"ref":case"namespaceURI":return;case"style":j(n,t);return;case"on":case"onCapture":b(t,(r,i)=>{n.addEventListener(i,r,e==="onCapture")});return}if(u(t)){if(e[0]==="o"&&e[1]==="n"){let r=e.toLowerCase(),i=r.endsWith("capture");if(r==="ondoubleclick"?r="ondblclick":i&&r==="ondoubleclickcapture"&&(r="ondblclickcapture"),!i&&n[r]===null)n[r]=t;else if(i)n.addEventListener(r.substring(2,r.length-7),t,!0);else{let a;r in window?a=r.substring(2):a=r[2]+e.slice(3),n.addEventListener(a,t)}}}else o(t)?n[e]=t:t===!0?l(n,e,""):t!==!1&&t!=null&&(n instanceof SVGElement&&!K.test(e)?l(n,g(e,"-"),t):l(n,e,t))}s(Y,"attribute");function l(e,t,n){e.setAttribute(t,n)}s(l,"attr");function E(e,t,n,r){e.setAttributeNS(t,n,r)}s(E,"attrNS");function _(e,t){for(let n of d(e))Y(n,e[n],t);return t}s(_,"attributes");var se=s(()=>c("h2",{class:"text-center p-4",children:[c("img",{class:"s-site-logo-img s-form-title-logo"})," ",A.Forms.SiteTitle]}),"AccountPanelTitle");export{Z as a,c as b,se as c};
//# sourceMappingURL=chunk-TC3ZBTOV.js.map
