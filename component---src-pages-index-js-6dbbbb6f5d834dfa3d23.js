(self.webpackChunkcrypto_watchdog=self.webpackChunkcrypto_watchdog||[]).push([[678],{993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,u,c,l;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(u=s;0!=u--;)if(!a(e[u],o[u]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!a(u.value[1],o.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(u=s;0!=u--;)if(e[u]!==o[u])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,c[u]))return!1;if(t&&e instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!a(e[c[u]],o[c[u]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},866:function(e,t,r){"use strict";var n,i=r(294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function l(){u=e(c.map((function(e){return e.props}))),d.canUseDOM?t(u):r&&(u=r(u))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},817:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ke}});var n=r(294),i=r(444);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var o="_1Lxpd",s="_2MD0k",u="_376IX",c="_3bAl3",l="_1iLpS",d="_2gu6r",f="_2SNHQ",p="_2pju2",h={size:200,minSize:20,gutter:16,provideProps:!1,numCols:6,fringeWidth:100,yRadius:200,xRadius:200,cornerRadius:100,showGuides:!1,compact:!1,gravitation:0};var m=function(e){if(!e.children)return null;var t={};Object.assign(t,h),Object.assign(t,e.options),t.numCols=Math.min(t.numCols,e.children.length);for(var r=t.minSize/t.size,i="calc(50% - "+(t.yRadius+t.size/2-t.cornerRadius*(1.414-1)/1.414)+"px)",m="calc(50% - "+(t.xRadius+t.size/2-t.cornerRadius*(1.414-1)/1.414)+"px)",y=(0,n.useRef)(null),b=[],g=0,v=!0,T=0;T<e.children.length;T++)0==g&&(g=v?t.numCols-1:t.numCols,v=!v,b.push([])),b[b.length-1].push(e.children[T]),g--;b.length>1&&b[b.length-1].length%2==b[b.length-2].length%2&&b[b.length-1].push(n.createElement("div",null));var w=(0,n.useState)(0),E=w[0],R=w[1],C=(0,n.useState)(0),S=C[0],A=C[1],O=function(e){e.target.className&&(R(e.target.scrollTop),A(e.target.scrollLeft))};(0,n.useLayoutEffect)((function(){return window.addEventListener("scroll",O),y.current.scrollTo((y.current.scrollWidth-y.current.clientWidth)/2,(y.current.scrollHeight-y.current.clientHeight)/2),function(){return window.removeEventListener("scroll",O)}}),[]);var M=function(e,t,r,n,i){return(r-e)/(t-e)*(i-n)+n};return n.createElement("div",{className:e.className,style:a({display:"flex",justifyContent:"center",alignItems:"center"},e.style)},n.createElement("div",{className:o},n.createElement("div",{className:s,ref:y,onScroll:O},n.createElement("div",{className:u,style:{height:i}}),n.createElement("div",{className:c,style:{width:t.size*t.numCols+t.gutter*(t.numCols-1),paddingLeft:m,paddingRight:m}},b.map((function(e,i){return n.createElement("div",{className:l,key:i,style:{marginTop:i>0?-.134*t.size+.866*t.gutter:0}},e.map((function(e,a){var o=function(e,n){var i=.866*(t.size+t.gutter)*e-t.size+t.cornerRadius*(1.414-1)/1.414-(t.yRadius-t.size),a=(t.size+t.gutter)*n+(t.numCols-b[e].length)*(t.size+t.gutter)/2-t.size+t.cornerRadius*(1.414-1)/1.414-(t.xRadius-t.size),o=i-E,s=a-S,u={bubbleSize:1,translateX:0,translateY:0,distance:Math.sqrt(s*s+o*o)},c=0,l=!1;if(Math.abs(s)<=t.xRadius&&Math.abs(o)<=t.yRadius){if(Math.abs(o)>t.yRadius-t.cornerRadius&&Math.abs(s)>t.xRadius-t.cornerRadius){var d=Math.sqrt(Math.pow(Math.abs(o)-t.yRadius+t.cornerRadius,2)+Math.pow(Math.abs(s)-t.xRadius+t.cornerRadius,2));d>t.cornerRadius&&(c=d-t.cornerRadius,l=!0)}}else Math.abs(s)<=t.xRadius+t.fringeWidth&&Math.abs(o)<=t.yRadius+t.fringeWidth?Math.abs(o)>t.yRadius-t.cornerRadius&&Math.abs(s)>t.xRadius-t.cornerRadius?(l=!0,c=Math.sqrt(Math.pow(Math.abs(o)-t.yRadius+t.cornerRadius,2)+Math.pow(Math.abs(s)-t.xRadius+t.cornerRadius,2))-t.cornerRadius):c=Math.max(Math.abs(s)-t.xRadius,Math.abs(o)-t.yRadius):c=(l=Math.abs(o)>t.yRadius-t.cornerRadius&&Math.abs(s)>t.xRadius-t.cornerRadius)?Math.sqrt(Math.pow(Math.abs(o)-t.yRadius+t.cornerRadius,2)+Math.pow(Math.abs(s)-t.xRadius+t.cornerRadius,2))-t.cornerRadius:Math.max(Math.abs(s)-t.xRadius,Math.abs(o)-t.yRadius);u.bubbleSize=M(0,t.fringeWidth,Math.min(c,t.fringeWidth),1,r);var f=t.compact?(t.size-t.minSize)/2:0,p=M(0,t.fringeWidth,c,0,f);if(c>0&&c<=t.fringeWidth)u.translateX=p,u.translateY=p;else if(c-t.fringeWidth>0){var h=Math.max(0,c-t.fringeWidth-t.size/2)*t.gravitation/10;u.translateX=f+h,u.translateY=f+h}if(l){var m=Math.abs(s)-t.xRadius+t.cornerRadius,y=Math.abs(o)-t.yRadius+t.cornerRadius,g=Math.atan(-y/m);s>0?o>0&&(g*=-1):g+=o>0?Math.PI:Math.PI-2*g,u.translateX*=-Math.cos(g),u.translateY*=-Math.sin(g)}else(Math.abs(s)>t.xRadius||Math.abs(o)>t.yRadius)&&(Math.abs(s)>t.xRadius?(u.translateX*=-Math.sign(s),u.translateY=0):(u.translateY*=-Math.sign(o),u.translateX=0));return u}(i,a),s=o.bubbleSize,u=o.translateX,c=o.translateY,l=o.distance;return n.createElement("div",{key:a,className:d,style:{width:t.size,height:t.size,marginRight:t.gutter/2,marginLeft:t.gutter/2,transform:"translateX("+u+"px) translateY("+c+"px) scale("+s+")"}},t.provideProps?n.cloneElement(e,{bubbleSize:s*t.size,distanceToCenter:l,maxSize:t.size,minSize:t.minSize}):e)})))}))),n.createElement("div",{className:u,style:{height:i}})),t.showGuides?n.createElement("div",{className:f},n.createElement("div",{className:p,style:{height:2*t.yRadius,width:2*t.xRadius,borderRadius:"ellipse"==t.shape?"50%":t.cornerRadius}}),n.createElement("div",{className:p,style:{height:2*(t.yRadius+t.fringeWidth),width:2*(t.xRadius+t.fringeWidth),borderRadius:"ellipse"==t.shape?"50%":t.cornerRadius+t.fringeWidth}})):null))};function y(e){var t=e.data,r="#"+Math.random().toString(16).slice(-6),i=function(e){var t=e.replace("#","");return(299*parseInt(t.substr(0,2),16)+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3<155}(r);return n.createElement("div",{style:{backgroundColor:r,borderRadius:"50%"},className:"Bubble"},n.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",transition:"opacity 0.1s ease",opacity:1,pointerEvents:"none"}},n.createElement("img",{src:"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",alt:"coin",style:{width:50,borderRadius:"50%",marginBottom:10}}),n.createElement("p",{style:{color:i?"white":"black",fontSize:14,marginBottom:6,fontWeight:1e3,maxWidth:150,minWidth:150,textAlign:"center",whiteSpace:"pre-wrap"}},t.name,n.createElement("br",null),t.price,n.createElement("br",null),"1h% ",t.priceChangePercentage1h),n.createElement("p",{style:{color:i?"white":"black",fontSize:15,marginBottom:5,maxWidth:100,opacity:.8,fontWeight:"600"}},t.symbol)))}var b,g,v,T,w=r(697),E=r.n(w),R=r(866),C=r.n(R),S=r(993),A=r.n(S),O=r(494),M=r.n(O),x="bodyAttributes",j="htmlAttributes",k="titleAttributes",P={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},L=(Object.keys(P).map((function(e){return P[e]})),"charset"),I="cssText",z="href",N="http-equiv",W="innerHTML",_="itemprop",Y="name",B="property",H="rel",q="src",D="target",F={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},U="defaultTitle",X="defer",K="encodeSpecialCharacters",G="onChangeClientState",V="titleTemplate",$=Object.keys(F).reduce((function(e,t){return e[F[t]]=t,e}),{}),Q=[P.NOSCRIPT,P.SCRIPT,P.STYLE],J="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},te=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ne=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ie=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ae=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},oe=function(e){var t=de(e,P.TITLE),r=de(e,V);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=de(e,U);return t||n||void 0},se=function(e){return de(e,G)||function(){}},ue=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return re({},e,t)}),{})},ce=function(e,t){return t.filter((function(e){return void 0!==e[P.BASE]})).map((function(e){return e[P.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},le=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ye("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],u=s.toLowerCase();-1===t.indexOf(u)||r===H&&"canonical"===e[r].toLowerCase()||u===H&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(s)||s!==W&&s!==I&&s!==_||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][c]&&(i[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],u=M()({},n[s],i[s]);n[s]=u}return e}),[]).reverse()},de=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},fe=(b=Date.now(),function(e){var t=Date.now();t-b>16?(b=t,e(t)):setTimeout((function(){fe(e)}),0)}),pe=function(e){return clearTimeout(e)},he="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||fe:r.g.requestAnimationFrame||fe,me="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||pe:r.g.cancelAnimationFrame||pe,ye=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},be=null,ge=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;we(P.BODY,n),we(P.HTML,i),Te(d,f);var p={baseTag:Ee(P.BASE,r),linkTags:Ee(P.LINK,a),metaTags:Ee(P.META,o),noscriptTags:Ee(P.NOSCRIPT,s),scriptTags:Ee(P.SCRIPT,c),styleTags:Ee(P.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,h,m)},ve=function(e){return Array.isArray(e)?e.join(""):e},Te=function(e,t){void 0!==e&&document.title!==e&&(document.title=ve(e)),we(P.TITLE,t)},we=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(J),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var u=o[s],c=t[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),-1===i.indexOf(u)&&i.push(u);var l=a.indexOf(u);-1!==l&&a.splice(l,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute(J):r.getAttribute(J)!==o.join(",")&&r.setAttribute(J,o.join(","))}},Ee=function(e,t){var r=document.head||document.querySelector(P.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===W)r.innerHTML=t.innerHTML;else if(n===I)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(J,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},Re=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[F[r]||r]=e[r],t}),t)},Se=function(e,t,r){switch(e){case P.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(i={key:e})[J]=!0,a=Ce(r,i),[n.createElement(P.TITLE,a,e)];var e,r,i,a},toString:function(){return function(e,t,r,n){var i=Re(r),a=ve(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+ae(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ae(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case x:case j:return{toComponent:function(){return Ce(t)},toString:function(){return Re(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var i,a=((i={key:r})[J]=!0,i);return Object.keys(t).forEach((function(e){var r=F[e]||e;if(r===W||r===I){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),n.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===W||e===I)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+ae(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===Q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},Ae=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,u=e.scriptTags,c=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:Se(P.BASE,t,n),bodyAttributes:Se(x,r,n),htmlAttributes:Se(j,i,n),link:Se(P.LINK,a,n),meta:Se(P.META,o,n),noscript:Se(P.NOSCRIPT,s,n),script:Se(P.SCRIPT,u,n),style:Se(P.STYLE,c,n),title:Se(P.TITLE,{title:d,titleAttributes:f},n)}},Oe=C()((function(e){return{baseTag:ce([z,D],e),bodyAttributes:ue(x,e),defer:de(e,X),encode:de(e,K),htmlAttributes:ue(j,e),linkTags:le(P.LINK,[H,z],e),metaTags:le(P.META,[Y,L,N,B,_],e),noscriptTags:le(P.NOSCRIPT,[W],e),onChangeClientState:se(e),scriptTags:le(P.SCRIPT,[q,W],e),styleTags:le(P.STYLE,[I],e),title:oe(e),titleAttributes:ue(k,e)}}),(function(e){be&&me(be),e.defer?be=he((function(){ge(e,(function(){be=null}))})):(ge(e),be=null)}),Ae)((function(){return null})),Me=(g=Oe,T=v=function(e){function t(){return ee(this,t),ie(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!A()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case P.SCRIPT:case P.NOSCRIPT:return{innerHTML:t};case P.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return re({},n,((t={})[r.type]=[].concat(n[r.type]||[],[re({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case P.TITLE:return re({},i,((t={})[n.type]=o,t.titleAttributes=re({},a),t));case P.BODY:return re({},i,{bodyAttributes:re({},a)});case P.HTML:return re({},i,{htmlAttributes:re({},a)})}return re({},i,((r={})[n.type]=re({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=re({},t);return Object.keys(e).forEach((function(t){var n;r=re({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,i={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,a=n.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[$[r]||r]=e[r],t}),t)}(ne(n,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case P.LINK:case P.META:case P.NOSCRIPT:case P.SCRIPT:case P.STYLE:i=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:i,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(i,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=ne(e,["children"]),i=re({},r);return t&&(i=this.mapChildrenToProps(t,i)),n.createElement(g,i)},te(t,null,[{key:"canUseDOM",set:function(e){g.canUseDOM=e}}]),t}(n.Component),v.propTypes={base:E().object,bodyAttributes:E().object,children:E().oneOfType([E().arrayOf(E().node),E().node]),defaultTitle:E().string,defer:E().bool,encodeSpecialCharacters:E().bool,htmlAttributes:E().object,link:E().arrayOf(E().object),meta:E().arrayOf(E().object),noscript:E().arrayOf(E().object),onChangeClientState:E().func,script:E().arrayOf(E().object),style:E().arrayOf(E().object),title:E().string,titleAttributes:E().object,titleTemplate:E().string},v.defaultProps={defer:!0,encodeSpecialCharacters:!0},v.peek=g.peek,v.rewind=function(){var e=g.rewind();return e||(e=Ae({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},T);Me.renderStatic=Me.rewind;var xe={pageStyles:{color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif"},headingStyles:{marginTop:0,marginBottom:64,maxWidth:320},bubbleWrap:{backgroundColor:"#E2E9F2",width:"50%",height:500,borderWidth:"1px",borderColor:"red",borderRadius:"100%"},childStyle:{width:"100%",borderRadius:"50%"}},je={size:170,minSize:70,gutter:0,provideProps:!1,numCols:7,fringeWidth:10,yRadius:160,xRadius:130,cornerRadius:0,showGuides:!1,compact:!0,gravitation:2},ke=function(){var e,t=(0,i.K2)("102036462").allCryptocurrencies,r=null==t||null===(e=t.nodes)||void 0===e?void 0:e.map((function(e,t){return n.createElement(y,{data:e,key:t,style:xe.childStyle})}));return n.createElement("main",{style:xe.pageStyles},n.createElement(Me,null,n.createElement("title",null,"Crypto-Watchdog")),n.createElement("title",null,"Home Page"),n.createElement("h1",{style:xe.headingStyles},"Crypto-Watchdog",n.createElement("br",null),n.createElement("span",{role:"img","aria-label":"Party popper emojis"},"🎉🎉")),n.createElement(m,{options:je,style:xe.bubbleWrap},r))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6dbbbb6f5d834dfa3d23.js.map