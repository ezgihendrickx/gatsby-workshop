(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3LWk":function(e,t,n){},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),m.canUseDOM?t(l):n&&(l=n(l))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=a.prototype;return c.UNSAFE_componentWillMount=function(){s.push(this),u()},c.componentDidUpdate=function(){u()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},c.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return c(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(m,"canUseDOM",o),m}}},GsLf:function(e,t,n){},ONhD:function(e,t,n){},OdTp:function(e,t,n){},Ovt8:function(e,t,n){},PJXx:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("dI71"),a=n("q1tI"),i=n.n(a),c=(n("GsLf"),n("Wbzz")),o=function(){var e=Object(c.b)("3159585216");return i.a.createElement("div",{className:"scrolling-header"},i.a.createElement("h1",null,i.a.createElement("code",null,e.site.siteMetadata.title,"/>"),i.a.createElement("img",{className:"furby",src:"./img/furby.svg",alt:"furby icon"})))};n("wGxI"),n("mVd2"),n("OdTp");var l=function(e){return i.a.createElement("div",{className:"cards"},i.a.createElement("h3",null,"Todo List"),i.a.createElement("div",null,i.a.createElement("p",{align:"left",className:"badges"},i.a.createElement("a",{href:"https://tailwindcss.com/",target:"_blank",rel:"noreferrer"},i.a.createElement("img",{alt:"Badge Tailwindcss",src:"https://img.shields.io/badge/TAILWIND-blue?style=flat&logo=tailwind-css"}))," ",i.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noreferrer"},i.a.createElement("img",{alt:"Badge ReactJS",src:"https://img.shields.io/badge/REACT-yellow?style=flat&logo=react"}))," ",i.a.createElement("a",{href:"https://www.gatsbyjs.com/",target:"_blank",rel:"noreferrer"},i.a.createElement("img",{alt:"Badge Gatsby",src:"https://img.shields.io/badge/GATSBY-purple?style=flat&logo=gatsby"}))),i.a.createElement("p",null,"This is my very first minimalist Todo List. Check it out"),i.a.createElement("button",null,i.a.createElement("strong",null,"Live")),i.a.createElement("button",null,i.a.createElement("strong",null,"Code"))))};var s=function(){return i.a.createElement("div",{className:"projects"},i.a.createElement("img",{className:"folder",src:"./img/folder.svg",alt:"folder"}),i.a.createElement("h2",null,"PROJECTS"),i.a.createElement(l,null),i.a.createElement(l,null),i.a.createElement(l,null))};n("ONhD");var u=function(){return i.a.createElement("div",{className:"contact"},i.a.createElement("img",{className:"telephone",src:"./img/phone.svg",alt:"telephone icon"}),i.a.createElement("h2",null,"CONTACT"),i.a.createElement("div",{className:"icons"},i.a.createElement("a",{className:"linear",href:"https://www.linkedin.com/in/ezgi-hendrickx-0a897b15b/",target:"blank_ ",rel:"noreferrer"},i.a.createElement("img",{className:"linkedin",src:"./img/linkedin.svg",alt:"linkedin icon"})),i.a.createElement("a",{href:"https://twitter.com/ezgihendrickx",target:"_blank",rel:"noreferrer"},i.a.createElement("img",{className:"twitter",src:"./img/twitter.svg",alt:"twitter icon"})),i.a.createElement("div",null,i.a.createElement("a",{href:"mailto:ezgihendrickx@gmail.com?&subject=About%20..",target:"_top",rel:"noreferrer"},i.a.createElement("img",{className:"email",src:"./img/email.svg",alt:"email icon"})),i.a.createElement("a",{href:"https://github.com/ezgihendrickx",target:"_blank",rel:"noreferrer"},i.a.createElement("img",{className:"github",src:"./img/github.svg",alt:"github icon"})))))};n("3LWk");var m=function(){return i.a.createElement("div",{className:"skills"},i.a.createElement("div",{className:"skillsheader"},i.a.createElement("img",{className:"hat",src:"./img/graduation-hat.svg",alt:"graduation-hat"}),i.a.createElement("h2",null,"SKILLS ")),i.a.createElement("div",{className:"badges1"},i.a.createElement("div",{className:"firstdiv"},i.a.createElement("div",{className:"char"},i.a.createElement("img",{className:"html",src:"./img/html5.svg",alt:"HTML5 badge"}),i.a.createElement("p",{className:"htmlname"},"HTML")),i.a.createElement("div",{className:"char"},i.a.createElement("img",{className:"css",src:"./img/css-3.svg",alt:"CSS badge"}),i.a.createElement("p",{className:"cssname"},"CSS")),i.a.createElement("div",{className:"char"},i.a.createElement("img",{className:"js",src:"./img/js.jpg",alt:"JS badge"}),i.a.createElement("p",{className:"jsname"},"JS")),i.a.createElement("div",{className:"char"},i.a.createElement("img",{className:"react",src:"./img/react.png",alt:"react badge"}),i.a.createElement("p",{className:"reactname"},"React"))),i.a.createElement("div",{className:"seconddiv"},i.a.createElement("div",{className:"char"},i.a.createElement("img",{className:"git",src:"./img/git.png",alt:"git badge"}),i.a.createElement("p",{className:"gitname"},"Git")),i.a.createElement("div",{className:"char"},i.a.createElement("img",{className:"vsc",src:"./img/vsc.png",alt:"vscode badge"}),i.a.createElement("p",{className:"vscname"},"VSC")),i.a.createElement("div",{className:"char"},i.a.createElement("img",{className:"sketch",src:"./img/sketch.png",alt:"sketch badge"}),i.a.createElement("p",null,"Sketch")),i.a.createElement("div",{className:"char"},i.a.createElement("img",{className:"figma",src:"./img/figma.png",alt:"figma badge"}),i.a.createElement("p",{className:"figmaname"},"Figma")))))},f=(n("hZlU"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"about"},i.a.createElement("img",{className:"reindeer",src:"./img/reindeer.svg",alt:"reindeer"}),i.a.createElement("h2",null,"ABOUT "),i.a.createElement("div",null,i.a.createElement("img",{className:"profile",src:"./img/meblack&white.jpg",alt:"profilephoto"}),i.a.createElement("div",{className:"bio"},i.a.createElement("h3",{className:"header3"},"Hello there, I'm Ezgi"),i.a.createElement("p",{className:"aboutme"},"I am currently looking for my next challenge as a"," ",i.a.createElement("span",{className:"frontend"},"Front-End Developer"),", having expertise in both Web Development and UI/UX design. After moving to Belgium I decided to return to my passion about design & advertising and further build upon my university studies in Communication Arts."),i.a.createElement("p",{className:"aboutme"},"After an internship as"," ",i.a.createElement("span",{className:"uidesigner"},"UI/UX designer")," at an ambitious start-up company within"," ",i.a.createElement("a",{href:"https://thefactory.works/",target:"_blank",rel:"noreferrer"},"EY"),", I am currently at the end of an intensive 7 month Education in Web Development"," ",i.a.createElement("a",{href:"https://becode.org/",target:"_blank",rel:"noreferrer"},"@BeCode"),"."),i.a.createElement("p",{className:"aboutme"},"During my stay in Stockholm, Sweden, I got fascinated by Nordic design and since then I integrate minimalist design principles in many of my projects."))))},t}(a.Component));var d=function(){return i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"p.file"},i.a.createElement(s,null)),i.a.createElement("div",{className:"c.file"},i.a.createElement(u,null)),i.a.createElement("div",{className:"s.file"},i.a.createElement(m,null)),i.a.createElement("div",{className:"a.file"},i.a.createElement(f,null)))};n("Ovt8");var p=function(){return i.a.createElement("div",{className:"copyright"},i.a.createElement("p",null,"© 2020, Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.com/",target:"_blank",rel:"noreferrer"}," ","Gatsby")))},h=(n("PJXx"),n("qhky")),g=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement("title",null,"Ezgi | Web Dev")),i.a.createElement(o,null),i.a.createElement(d,null),i.a.createElement(p,null))},t}(a.Component);t.default=g},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,c){if(t===c)return!0;if(t&&c&&"object"==typeof t&&"object"==typeof c){if(t.constructor!==c.constructor)return!1;var o,l,s,u;if(Array.isArray(t)){if((o=t.length)!=c.length)return!1;for(l=o;0!=l--;)if(!e(t[l],c[l]))return!1;return!0}if(r&&t instanceof Map&&c instanceof Map){if(t.size!==c.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!c.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],c.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&c instanceof Set){if(t.size!==c.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!c.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(c)){if((o=t.length)!=c.length)return!1;for(l=o;0!=l--;)if(t[l]!==c[l])return!1;return!0}if(t.constructor===RegExp)return t.source===c.source&&t.flags===c.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===c.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===c.toString();if((o=(s=Object.keys(t)).length)!==Object.keys(c).length)return!1;for(l=o;0!=l--;)if(!Object.prototype.hasOwnProperty.call(c,s[l]))return!1;if(n&&t instanceof Element)return!1;for(l=o;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],c[s[l]]))return!1;return!0}return t!=t&&c!=c}(e,t)}catch(c){if((c.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw c}}},hZlU:function(e,t,n){},mVd2:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n("E9XD");var r,a,i,c,o=n("17x9"),l=n.n(o),s=n("8+s/"),u=n.n(s),m=n("bmMU"),f=n.n(m),d=n("q1tI"),p=n.n(d),h=n("YVoz"),g=n.n(h),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",A="href",N="http-equiv",O="innerHTML",C="itemprop",S="name",k="property",j="rel",I="src",L="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",_="encodeSpecialCharacters",R="onChangeClientState",B="titleTemplate",D=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),U=[E.NOSCRIPT,E.SCRIPT,E.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,E.TITLE),n=$(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,P);return t||r||void 0},K=function(e){return $(e,R)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),c=0;c<i.length;c++){var o=i[c],l=o.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(o)||o!==O&&o!==w&&o!==C||(n=o)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),c=0;c<i.length;c++){var o=i[c],l=g()({},r[o],a[o]);r[o]=l}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,c=e.metaTags,o=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;le(E.BODY,r),le(E.HTML,a),oe(m,f);var d={baseTag:se(E.BASE,n),linkTags:se(E.LINK,i),metaTags:se(E.META,c),noscriptTags:se(E.NOSCRIPT,o),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,u)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,p,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),le(E.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),c=Object.keys(t),o=0;o<c.length;o++){var l=c[o],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)n.removeAttribute(i[m]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==c.join(",")&&n.setAttribute("data-react-helmet",c.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];n.setAttribute(r,o)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return c=t,n.isEqualNode(e)}))?a.splice(c,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=me(n,r),[p.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=ce(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",c=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(c?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,c=e.metaTags,o=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:fe(E.BASE,t,r),bodyAttributes:fe(y,n,r),htmlAttributes:fe(b,a,r),link:fe(E.LINK,i,r),meta:fe(E.META,c,r),noscript:fe(E.NOSCRIPT,o,r),script:fe(E.SCRIPT,l,r),style:fe(E.STYLE,s,r),title:fe(E.TITLE,{title:m,titleAttributes:f},r)}},pe=u()((function(e){return{baseTag:X([A,L],e),bodyAttributes:V(y,e),defer:$(e,M),encode:$(e,_),htmlAttributes:V(b,e),linkTags:Z(E.LINK,[j,A],e),metaTags:Z(E.META,[S,T,N,k,C],e),noscriptTags:Z(E.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:Z(E.SCRIPT,[I,O],e),styleTags:Z(E.STYLE,[w],e),title:J(e),titleAttributes:V(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),de)((function(){return null})),he=(a=pe,c=i=function(e){function t(){return H(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case E.TITLE:return Y({},a,((t={})[r.type]=c,t.titleAttributes=Y({},i),t));case E.BODY:return Y({},a,{bodyAttributes:Y({},i)});case E.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(F(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.a.createElement(a,r)},z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),i.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);he.renderStatic=he.rewind,t.a=he}).call(this,n("yLpj"))},wGxI:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-71891c8df7d9411f171f.js.map